# JTMurley Portfolio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fjtmurley.github.io%2Fportfolio%2F&style=flat-square&logo=github&label=Website)](https://jtmurley.github.io/portfolio/)
[![GitHub License](https://img.shields.io/github/license/JTMurley/portfolio?style=flat-square)](https://github.com/JTMurley/portfolio/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/JTMurley/portfolio?style=flat-square&logo=github)](https://github.com/JTMurley/portfolio/stargazers)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/JTMurley/portfolio?style=flat-square&logo=github)](https://github.com/JTMurley/portfolio/commits/main)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/JTMurley/portfolio/deploy.yml?style=flat-square&logo=github-actions&label=Deployment)](https://github.com/JTMurley/portfolio/actions/workflows/deploy.yml)
[![GitHub Issues](https://img.shields.io/github/issues/JTMurley/portfolio?style=flat-square&logo=github)](https://github.com/JTMurley/portfolio/issues)

A personal portfolio website built with Docusaurus.

## 🚀 Overview

This portfolio website serves as my own professional showcase and also just dumping ground for cool things I do/find. Note im not a frontend developer and i'm also color blind, so the design may be questionable


## 🛠️ Tech Stack

- **Framework**: Docusaurus (React)
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages
- **CMS**: Sveltia CMS
- **Analytics**: PostHog

## 📋 Project Structure

```
portfolio/
├── blog/                # Blog posts and configuration
├── docs/                # Documentation pages
│   └── projects/        # Project documentation
├── src/
│   ├── components/      # React components
│   ├── css/             # Global CSS styles
│   └── pages/           # Custom website pages
├── static/
│   ├── admin/           # CMS configuration
│   └── img/             # Static images
└── docusaurus.config.js # Main configuration file
```

## 🔧 Configuration

The main configuration file is `docusaurus.config.js`, which controls:
- Site metadata
- Navigation structure
- Plugin configuration
- Theme settings

## 📝 Content Management

This portfolio uses Sveltia CMS for content management. To access the CMS:

1. Navigate to `https://jtmurley.github.io/portfolio/admin/`
2. Log in with your github credentails

## 📦 Deployment

The site is configured for deployment to GitHub Pages using GitHub Actions. The deployment workflow is defined in `.github/workflows/deploy.yml`.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/JTMurley/portfolio/issues).

## 📄 License

This project is licensed under the terms of the license included in the repository (MIT).


Built with [Docusaurus](https://docusaurus.io/) • Hosted on [GitHub Pages](https://pages.github.com/)