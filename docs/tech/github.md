---
title: GitHub Documentation
description: A guide to GitHub, GitHub Pages, and GitHub Actions.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Development, Version Control
tags: GitHub, GitHub Pages, GitHub Actions, VCS
---

# GitHub

## Creating a New Repository

To create a new repository on GitHub:

1. **Go to GitHub:** Navigate to [GitHub](https://github.com) and log in to your account.
2. **Create a Repository:** Click the "+" icon in the upper-right corner and select "New repository."
3. **Repository Details:** Enter a name for your repository, add an optional description, choose the visibility (public or private), and initialize with a README if desired.
4. **Create Repository:** Click the "Create repository" button to finalize.

## Adding a Repository to Git

To add a local repository to GitHub:

1. **Initialize Git:** In your local project directory, run:
   ```bash
   git init
   ```
2. **Add Remote:** Link your local repository to GitHub:
   ```bash
   git remote add origin <repository-URL>
   ```
3. **Add Files:** Stage your files:
   ```bash
   git add .
   ```
4. **Commit Changes:** Commit your staged files:
   ```bash
   git commit -m "Initial commit"
   ```
5. **Push to GitHub:** Push your changes to the remote repository:
   ```bash
   git push -u origin master
   ```

## Committing Changes

**Committing Files:**

1. **Stage Files:** Add files to the staging area:
   ```bash
   git add <file>
   ```
2. **Commit Changes:** Commit with a message:
   ```bash
   git commit -m "Your commit message"
   ```

**Best Practices for Commit Messages:**

- **Be Descriptive:** Use clear, concise language to describe the changes.
- **Use Imperative Mood:** Write commit messages in imperative mood (e.g., "Fix bug" instead of "Fixed bug").
- **Limit Length:** Keep the subject line under 50 characters, and use the body for additional details if necessary.

## Pushing and Pulling Changes

**Push Changes:**

1. **Push to Remote:** Upload your local commits to the remote repository:
   ```bash
   git push
   ```

**Pull Changes:**

1. **Pull from Remote:** Fetch and merge changes from the remote repository:
   ```bash
   git pull
   ```

## Handling Merge Conflicts

Merge conflicts occur when changes in different branches clash. To resolve:

1. **Pull Latest Changes:** Ensure you have the latest changes from the remote branch:
   ```bash
   git pull
   ```
2. **Resolve Conflicts:** Open the files with conflicts, manually resolve the issues, and save the file.
3. **Stage Resolved Files:** Add the resolved files:
   ```bash
   git add <file>
   ```
4. **Commit Merge:** Complete the merge by committing:
   ```bash
   git commit
   ```

## GitHub Pages

GitHub Pages is a feature that allows you to host websites directly from a GitHub repository. It’s commonly used for project documentation, personal blogs, and portfolio sites.

**Key Features:**

- **Static Site Hosting:** Ideal for static websites.
- **Jekyll Integration:** Supports Jekyll for static site generation.
- **Custom Domains:** Allows the use of custom domains.

**Getting Started:**

1. **Create a Repository:** Make a new repository on GitHub.
2. **Add Your Site Files:** Commit your HTML/CSS/JavaScript files to the repository.
3. **Enable GitHub Pages:** Go to the repository settings, find the GitHub Pages section, and choose the branch to deploy.

## GitHub Actions

GitHub Actions is a CI/CD and automation tool integrated into GitHub. It allows you to automate workflows directly in your GitHub repository.

**Key Features:**

- **Workflows:** Define workflows using YAML files.
- **Actions:** Reusable units of code that perform specific tasks.
- **Continuous Integration/Continuous Deployment:** Automate testing and deployment processes.

**Getting Started:**

1. **Create a Workflow File:** Add a `.github/workflows` directory and create a YAML file.
2. **Define Triggers:** Specify the events that trigger the workflow (e.g., push, pull request).
3. **Add Jobs and Steps:** Define the jobs and steps to run within the workflow.

**Example Workflow:**

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```
