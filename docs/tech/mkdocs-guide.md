---
title: MkDocs Guide
description: How to use MkDocs with the Material theme — project layout, configuration, navigation, markdown extensions, plugins, and local development.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Tooling
tags: MkDocs, Material, Documentation, Static Site, Markdown, Python
---

# MkDocs Guide

MkDocs turns a folder of Markdown files into a static documentation site. This guide covers how this project is set up and how to work with it day to day, including how to publish the built site.

---

## Table of Contents

1. [Setup](#setup)
2. [Project Layout](#project-layout)
3. [Everyday Commands](#everyday-commands)
4. [Configuration](#configuration)
5. [Navigation](#navigation)
6. [Writing Pages](#writing-pages)
7. [Markdown Extensions](#markdown-extensions)
8. [Material Theme Features](#material-theme-features)
9. [Plugins](#plugins)
10. [Static Assets and Styling](#static-assets-and-styling)
11. [Troubleshooting](#troubleshooting)

---

## Setup

MkDocs is a Python package. Install the project's dependencies once:

```bash
pip install -r requirements.txt
```

If your system Python is externally managed (Debian, Ubuntu, Fedora), pip will refuse to install into it. Use a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Or, if you accept the risk of installing into the user site directory:

```bash
pip install --user --break-system-packages -r requirements.txt
```

Verify the install:

```bash
mkdocs --version
```

### This project's dependencies

| Package | Provides |
| --- | --- |
| `mkdocs` | Core static site generator. |
| `mkdocs-material` | The theme, plus the `search` and `offline` plugins. |
| `mkdocs-git-revision-date-localized-plugin` | "Last updated" dates read from git history. |
| `mkdocs-git-authors-plugin` | Page authors read from git history. |
| `mkdocs-autorefs` | Cross-page references by heading name. |
| `mkdocs-literate-nav` | Navigation defined in a Markdown file. |
| `mkdocstrings[python]` | API documentation generated from Python docstrings. |
| `pymdown-extensions` | Extended Markdown syntax (tabs, admonitions, superfences). |
| `mdx-gh-links` | Shorthand links to GitHub issues and pull requests. |

---

## Project Layout

```text
.
├── mkdocs.yml              # site configuration — the single source of truth
├── requirements.txt        # Python dependencies
├── docs/                   # all Markdown content lives here
│   ├── index.md            # site home page
│   ├── docs.md             # documentation index
│   ├── blog/
│   └── tech/               # topic pages
├── stylesheets/
│   └── extra.css           # custom CSS
└── site/                   # build output — generated, never edited, git-ignored
```

Two rules follow from this layout:

- Everything the site serves must live under `docs/`. A Markdown file outside that folder is invisible to MkDocs.
- `site/` is disposable. It is regenerated on every build and must stay out of version control.

---

## Everyday Commands

| Command | What it does |
| --- | --- |
| `mkdocs serve` | Development server at `http://127.0.0.1:8000` with live reload. |
| `mkdocs serve -a 0.0.0.0:8080` | Serve on a different host and port. |
| `mkdocs build` | Render the site into `site/`. |
| `mkdocs build --clean` | Delete stale files from `site/` before building. |
| `mkdocs build --strict` | Fail the build on any warning. Use this in CI. |
| `mkdocs gh-deploy` | Build and push to the `gh-pages` branch, which GitHub Pages serves. |
| `mkdocs new .` | Scaffold a new MkDocs project in the current folder. |
| `mkdocs --help` | Full command reference. |

`mkdocs serve` is the one you will use most. It watches `docs/`, `mkdocs.yml`, and the theme, and reloads the browser on save.

If a command reports `Config file 'mkdocs.yml' does not exist`, you are in the wrong directory. Run from the project root, or pass the path explicitly:

```bash
mkdocs serve -f /path/to/project/mkdocs.yml
```

---

## Configuration

Everything is configured in `mkdocs.yml`. The main sections:

```yaml
site_name: Knowledge Bank
site_url: https://kaushal726.github.io/self-learning/
site_description: A Place for Knowledge Hub
site_author: Kaushal Raj

repo_url: https://github.com/kaushal726/self-learning
edit_uri: blob/main/docs/

theme:
  name: material

nav:
  - Home: index.md
  - Docs: docs.md

markdown_extensions:
  - toc

plugins:
  - search

extra_css:
  - stylesheets/extra.css
```

Notes on the fields that matter most:

- **`site_url`** must be correct for a project site. GitHub Pages serves this repository under a subpath (`/self-learning/`), and MkDocs uses `site_url` to build correct links, the sitemap, and canonical URLs. Get it wrong and CSS and links break once deployed.
- **`repo_url`** adds a repository link to the header. Combined with **`edit_uri`**, each page gets an "edit this page" pencil that points at the right file on the right branch — check the branch name in `edit_uri` matches reality (`main` versus `master`).
- **`extra_css`** paths are resolved relative to the project root, not `docs/`.

---

## Navigation

Navigation comes from the `nav` block. Every entry is `Title: path-relative-to-docs`.

```yaml
nav:
  - Home: index.md
  - Docs: docs.md
  - Tech:
      - Artificial Intelligence: tech/ai.md
      - MkDocs Guide: tech/mkdocs-guide.md
```

Behaviour worth knowing:

- Nesting a list under a title creates a section. With the `navigation.sections` theme feature enabled, sections render as headings in the sidebar rather than collapsible groups.
- If you omit `nav` entirely, MkDocs builds navigation automatically from the file tree, alphabetically. Explicit `nav` is better once a site has more than a handful of pages.
- A page that exists in `docs/` but is missing from `nav` is still built and reachable by URL. It just won't appear in the sidebar. The build logs it as `INFO - The following pages exist in the docs directory, but are not included in the "nav" configuration` — that message is a reminder, not an error.
- This project also has `literate-nav` installed, which can read navigation from a Markdown list in a file instead. Use one approach or the other, not both.

---

## Writing Pages

A page is a Markdown file under `docs/`. The URL follows the path: `docs/tech/ai.md` becomes `/tech/ai/`.

### Front matter

The metadata block at the top of a file is optional but useful:

```markdown
---
title: Page Title
description: One-line summary used in search results and social previews.
tags: MkDocs, Documentation
---
```

`title` overrides both the browser title and the sidebar label. Without it, MkDocs falls back to the first `#` heading, and then to the filename.

### Internal links

Link to other pages by their **file path**, not their URL:

```markdown
[MkDocs guide](./mkdocs-guide.md)
[AI docs](../tech/ai.md)
[A specific section](./mkdocs-guide.md#troubleshooting)
```

MkDocs rewrites these to correct URLs at build time and warns about broken targets. Linking to `/tech/ai/` directly works in the browser but skips validation and breaks under a different `site_url` subpath.

### Images

Put images under `docs/` — for example `docs/assets/diagram.png` — and reference them relatively:

```markdown
![Architecture diagram](../assets/diagram.png)
```

---

## Markdown Extensions

Configured under `markdown_extensions` in `mkdocs.yml`. The ones enabled here:

| Extension | Effect |
| --- | --- |
| `toc` | Table of contents from headings; `permalink` adds anchor links, `toc_depth` limits nesting. |
| `attr_list` | Attach attributes and CSS classes to elements: `[Link](x.md){ .md-button }`. |
| `def_list` | Definition lists. |
| `tables` | GitHub-style tables. |
| `pymdownx.highlight` | Syntax highlighting for fenced code blocks. |
| `pymdownx.superfences` | Nested code blocks, and diagrams inside fences. |
| `pymdownx.snippets` | Include content from another file into a page. |
| `mdx_gh_links` | `#123` becomes a link to that GitHub issue. |

### Worth adding

```yaml
markdown_extensions:
  - admonition                    # callout boxes
  - pymdownx.details              # collapsible callouts
  - pymdownx.tabbed:
      alternate_style: true       # tabbed content blocks
  - pymdownx.tasklist:
      custom_checkbox: true       # checkbox lists
  - footnotes
```

Admonitions are the highest-value addition for a docs site:

```markdown
!!! note "Optional title"
    Body of the callout, indented by four spaces.

!!! warning
    Types include note, tip, warning, danger, example, quote.

??? tip "Click to expand"
    Collapsible, thanks to pymdownx.details.
```

Tabbed blocks are useful for showing the same task in several languages:

````markdown
=== "npm"
    ```bash
    npm install
    ```

=== "pip"
    ```bash
    pip install -r requirements.txt
    ```
````

---

## Material Theme Features

Features are opted into individually under `theme.features`:

```yaml
theme:
  name: material
  features:
    - navigation.sections      # top-level nav rendered as sections
    - navigation.top           # back-to-top button
    - navigation.instant       # SPA-style page loads
    - navigation.tracking      # URL updates with the active anchor
    - search.suggest           # inline search completion
    - search.highlight         # highlight matches on the target page
    - content.code.copy        # copy button on code blocks
    - toc.follow               # table of contents follows scroll position
```

!!! warning "Repeated keys silently overwrite"
    YAML mappings cannot have duplicate keys. If `features:` appears twice under `theme:`, the second one wins and the first is discarded without a warning. Keep a single `features:` list.

### Colour scheme

The `palette` block supports a light/dark toggle:

```yaml
theme:
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```

---

## Plugins

Plugins run during the build and can modify pages, add files, or inject metadata.

```yaml
plugins:
  - search
  - offline
  - git-revision-date-localized
  - git-authors
  - autorefs
  - literate-nav
  - mkdocstrings
```

!!! warning "Declaring `plugins` disables the default"
    As soon as you write a `plugins:` block, MkDocs stops adding `search` automatically. If your site search stops working, this is why — list `search` explicitly.

Notes on specific plugins:

- **`git-revision-date-localized` and `git-authors`** read git history. They need real commits, and in CI they need a full clone (`fetch-depth: 0`) — a shallow clone produces missing or wrong dates.
- **`offline`** ships with Material and makes the built site work when opened directly from disk over `file://`. It conflicts with `navigation.instant`; enable one or the other.
- **`mkdocstrings`** generates reference pages from Python docstrings. Only useful once the repository contains importable Python.

---

## Static Assets and Styling

Custom CSS goes in a file listed under `extra_css`:

```yaml
extra_css:
  - stylesheets/extra.css
```

Override Material's design tokens rather than fighting its selectors:

```css
:root {
  --md-primary-fg-color: #3f51b5;
  --md-accent-fg-color: #536dfe;
}

[data-md-color-scheme="slate"] {
  --md-default-bg-color: #12131a;
}
```

Custom JavaScript works the same way with `extra_javascript`.

---

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| `Config file 'mkdocs.yml' does not exist` | Wrong working directory. Run from the project root or pass `-f path/to/mkdocs.yml`. |
| `Unrecognised theme name: 'material'` | `mkdocs-material` is not installed in the active environment. `pip install mkdocs-material`. |
| `The "X" plugin is not installed` | Missing package, or a name mismatch between `mkdocs.yml` and the installed distribution. Package and plugin names differ — the plugin `git-revision-date-localized` comes from `mkdocs-git-revision-date-localized-plugin`. |
| Search box does nothing | You declared `plugins:` without listing `search`. Add it. |
| Broken CSS after deploying | `site_url` does not match the deployed subpath. For a project site it must end in the repository name. |
| Links work locally, 404 after deploy | You linked to a URL path instead of a `.md` file. Use file paths so MkDocs can rewrite them. |
| "Last updated" is empty or wrong | Shallow git clone. Use `fetch-depth: 0` in CI. |
| A page is missing from the sidebar | It is not listed in `nav`. The page is still built and reachable by URL. |
| Externally-managed-environment error from pip | Use a virtual environment, or `pip install --user --break-system-packages`. |

For anything else, `mkdocs build --strict` turns warnings into errors and usually names the exact file and line.
