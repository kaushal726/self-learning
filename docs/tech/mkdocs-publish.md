---
title: Publishing to GitHub Pages
description: How to deploy this MkDocs site to GitHub Pages with mkdocs gh-deploy, including one-time setup, the automated workflow, and troubleshooting.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Tooling
tags: MkDocs, GitHub Pages, Deployment, gh-deploy, CI, GitHub Actions
---

# Publishing to GitHub Pages

This site is deployed to GitHub Pages from the `gh-pages` branch. The primary command is `mkdocs gh-deploy`. For writing and previewing content, see the [MkDocs Guide](./mkdocs-guide.md).

Live site: <https://kaushal726.github.io/self-learning/>

---

## Table of Contents

1. [How Deployment Works](#how-deployment-works)
2. [One-Time Setup](#one-time-setup)
3. [Deploying with gh-deploy](#deploying-with-gh-deploy)
4. [Automated Deployment](#automated-deployment)
5. [Verifying a Deploy](#verifying-a-deploy)
6. [Rolling Back](#rolling-back)
7. [Custom Domain](#custom-domain)
8. [Troubleshooting](#troubleshooting)
9. [Command Reference](#command-reference)

---

## How Deployment Works

Two branches, two purposes:

| Branch | Contents | Edited by |
| --- | --- | --- |
| `main` | Markdown sources, `mkdocs.yml`, `requirements.txt` | You |
| `gh-pages` | Generated HTML, CSS, JS | The deploy command — never by hand |

`mkdocs gh-deploy` does four things in one step: builds the site into a temporary directory, commits the result to the local `gh-pages` branch, force-pushes that branch to `origin`, and returns you to the branch you started on. GitHub Pages then serves whatever is at the root of `gh-pages`.

The generated site is disposable. Everything on `gh-pages` can be rebuilt from `main` at any time, which is why the branch is force-pushed rather than merged.

!!! warning "Never edit gh-pages directly"
    Any commit you make on `gh-pages` is destroyed by the next deploy. If you find yourself checked out on `gh-pages` looking at HTML files, run `git checkout main` before doing anything else.

---

## One-Time Setup

### 1. Install dependencies

```bash
pip install -r requirements.txt
```

On an externally-managed Python, use a virtual environment — see [Setup in the MkDocs Guide](./mkdocs-guide.md#setup).

### 2. Confirm `site_url`

In `mkdocs.yml`:

```yaml
site_url: https://kaushal726.github.io/self-learning/
```

For a **project site** the URL must include the repository name as a subpath, with a trailing slash. Getting this wrong is the single most common cause of a deployed site with no styling. For a **user site** (`<username>.github.io` repository), it is just `https://kaushal726.github.io/`.

### 3. Confirm `edit_uri`

```yaml
edit_uri: blob/main/docs/
```

This drives the "edit this page" link. If the default branch is `main`, the path must say `main` — a stale `master` produces 404s on every edit link.

### 4. Ignore the build output

`.gitignore` must contain:

```gitignore
/site
```

The `site/` folder is regenerated on every build and should never be committed to `main`.

### 5. Point GitHub Pages at the branch

On GitHub: **Settings → Pages → Build and deployment**

- Source: **Deploy from a branch**
- Branch: **`gh-pages`**, folder **`/ (root)`**
- Save

This is required once per repository. Until it is set, deploys succeed but nothing is served.

---

## Deploying with gh-deploy

From the project root, on a clean working tree:

```bash
mkdocs gh-deploy
```

Expected output ends with something close to:

```text
INFO - Your documentation should shortly be available at:
       https://kaushal726.github.io/self-learning/
```

Useful variations:

```bash
# Discard stale files from a previous build first (recommended)
mkdocs gh-deploy --clean

# Fail on any warning instead of publishing a broken site
mkdocs gh-deploy --strict

# Overwrite the remote branch even when histories have diverged
mkdocs gh-deploy --force

# Custom commit message on the gh-pages branch
mkdocs gh-deploy -m "docs: publish AI and MkDocs guides"

# Build and commit locally, but do not push
mkdocs gh-deploy --no-history --dirty
```

The recommended everyday invocation:

```bash
mkdocs gh-deploy --clean --strict
```

### Deploy your source changes too

`gh-deploy` publishes the **built site only**. It does not commit or push your Markdown. Push the sources separately so the two branches stay in step:

```bash
git add -A
git commit -m "add AI and MkDocs docs"
git push origin main

mkdocs gh-deploy --clean
```

Do the source push first. If a deploy goes wrong, you want the sources already safe on the remote.

!!! note "gh-deploy builds your working tree, not your last commit"
    Uncommitted local edits **are** included in the deployed site. That is convenient for a quick preview and dangerous for a real release — it lets the live site drift ahead of `main`. Commit first.

---

## Automated Deployment

This repository also has a GitHub Actions workflow at `.github/workflows/gh-pages.yml`. It builds and publishes to `gh-pages` on every push to `main`, so pushing your sources is enough:

```bash
git push origin main
```

The workflow needs three things to succeed:

- **`permissions: contents: write`** — without it the push to `gh-pages` fails with a 403.
- **`fetch-depth: 0`** on the checkout — the git-revision-date and git-authors plugins read history, and a shallow clone gives them nothing to read.
- **A dependency install that fails loudly.** Do not write `pip install -r requirements.txt || true`; that mask turns a missing package into a broken site instead of a failed job.

It can also be triggered by hand from the repository's **Actions** tab thanks to `workflow_dispatch`.

### Choosing between the two

| Situation | Use |
| --- | --- |
| Publishing from your machine, want the result immediately | `mkdocs gh-deploy` |
| Normal team flow — every merge to `main` publishes | The Actions workflow |
| Local Python environment is broken or incomplete | The Actions workflow |
| CI is down or misconfigured, and the site must ship now | `mkdocs gh-deploy` |

They are interchangeable and can coexist. Both force-push the same branch, so whichever ran last is what the site serves.

---

## Verifying a Deploy

```bash
# Confirm the remote branch moved
git log origin/gh-pages --oneline -3

# Inspect what was published without switching branches
git show origin/gh-pages --stat | head -20
```

Then load the site itself. GitHub Pages usually updates within a minute, but the CDN can serve a stale copy for a few minutes longer — hard-reload (`Ctrl` + `Shift` + `R`) before concluding a deploy failed.

To check the built output before publishing:

```bash
mkdocs build --clean --strict
python -m http.server 8000 --directory site
```

This serves the real build output rather than the development server, which catches problems that `mkdocs serve` hides.

---

## Rolling Back

Because `gh-pages` is generated, the fastest rollback is to fix the source and deploy again:

```bash
git revert <bad-commit>
mkdocs gh-deploy --clean
```

To restore a previous published build directly:

```bash
git fetch origin gh-pages
git push --force origin <good-gh-pages-sha>:gh-pages
```

The next `gh-deploy` overwrites this, so treat it as a stopgap while you fix `main`.

---

## Custom Domain

A custom domain needs a `CNAME` file at the root of the served site. Because `gh-pages` is regenerated on every deploy, that file has to be produced by the build:

```text
docs/CNAME
```

containing a single line:

```text
docs.example.com
```

MkDocs copies unrecognised files from `docs/` into the output verbatim, so the `CNAME` survives every deploy. Setting the domain only in the GitHub Pages UI does not survive — `gh-deploy` force-pushes over it.

Update `site_url` to match the custom domain, and enable **Enforce HTTPS** in the Pages settings once the certificate is issued.

---

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| `Config file 'mkdocs.yml' does not exist` | Running from the wrong directory. `cd` to the project root, or pass `-f path/to/mkdocs.yml`. |
| `Unrecognised theme name: 'material'` | `mkdocs-material` is missing from the active environment. `pip install -r requirements.txt`. |
| Site loads but has no CSS | `site_url` does not match the deployed path. For a project site it must end with `/<repo-name>/`. |
| 404 on the whole site | Pages source not configured. Settings → Pages → branch `gh-pages`, folder `/ (root)`. |
| 404 on individual pages | Links written as URL paths instead of `.md` file paths, or the page is missing from `docs/`. |
| Deploy succeeded but content is old | CDN cache. Hard-reload. If it persists past a few minutes, confirm `git log origin/gh-pages` actually moved. |
| Actions job fails at the deploy step with 403 | Workflow is missing `permissions: contents: write`. |
| `error: failed to push some refs` | Remote `gh-pages` diverged from local. `mkdocs gh-deploy --force`. |
| "Last updated" dates are missing | Shallow clone in CI. Add `fetch-depth: 0` to the checkout step. |
| Pages published from the wrong branch | Another workflow or a manual push also targets `gh-pages`. Pick one publisher. |
| Repository has no `gh-pages` branch | Nothing has deployed yet. The first `mkdocs gh-deploy` creates it. |
| Working tree is full of HTML files | You are checked out on `gh-pages`. `git checkout main`. |

---

## Command Reference

| Command | Purpose |
| --- | --- |
| `mkdocs serve` | Preview locally with live reload. |
| `mkdocs build --clean --strict` | Build into `site/`, failing on warnings. |
| `mkdocs gh-deploy --clean` | Build and publish to `gh-pages`. |
| `mkdocs gh-deploy --force` | Publish, overwriting a diverged remote branch. |
| `git push origin main` | Push sources; also triggers the Actions deploy. |
| `git log origin/gh-pages --oneline -3` | Confirm what was last published. |

### Full publish sequence

```bash
# 1. preview
mkdocs serve

# 2. verify the real build
mkdocs build --clean --strict

# 3. push sources
git add -A
git commit -m "docs: update"
git push origin main

# 4. publish the site
mkdocs gh-deploy --clean
```
