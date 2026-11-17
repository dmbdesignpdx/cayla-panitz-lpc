# Cayla Panitz, LPC Website Rebuild

The website for [Cayla Panitz, LPC](https://caylapanitzlpc.com), a Licensed Professional Counselor. The original site was built with Hugo; this rebuild uses Astro and Panda CSS, with content managed in a headless CMS.

## Features

- **CMS-driven content** - All copy, images, contact details, footer and notices are managed in [Hygraph](https://hygraph.com/) and fetched with a single GraphQL query at build time. Content editors can update the site without touching code.
- **Draft preview** - The dev server renders unpublished (`DRAFT`) content so edits can be reviewed before publishing; production builds only use `PUBLISHED` content.
- **Flexible page sections** - A page is composed of reusable blocks: content sections, content collections (default, staggered, or card layouts) and a contact block with email, phone, fax and address.
- **Markdown copy, safely rendered** - CMS text is written in Markdown, converted with `marked` and sanitized with DOMPurify. External links automatically open in a new tab.
- **Automatic navigation** - Section headings generate both the navigation links and the anchor ids, so the menu always matches the content. The nav collapses into an accessible mobile menu.
- **Welcome dialog** - An optional notice from the CMS appears once per browser session in a native `<dialog>`.
- **Scroll animations** - Images and sections fade in as they enter the viewport, using `IntersectionObserver`.
- **Responsive, token-based design** - Fluid typography and spacing, a 12-column grid and custom Panda CSS utilities, with styles colocated per component.
- **SEO ready** - Page title and description from the CMS, canonical URL, Open Graph/social meta cards, a generated sitemap and `robots.txt`.
- **Quality tooling** - Strict TypeScript and ESLint (with stylistic rules) for Astro and TypeScript files.

## Stack

- [Astro](https://astro.build/) - A modern static site generator.
- [Panda CSS](https://panda-css.com/) - A build-time CSS-in-JS styling library.
- [Hygraph](https://hygraph.com/) - Headless CMS, queried with [graphql-request](https://github.com/graffle-js/graffle).
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [PNPM](https://pnpm.io/) - A fast, disk space-efficient package manager.
- [ESLint](https://eslint.org/) - A tool for identifying and reporting on patterns in JavaScript.

## Get Started

```bash
pnpm install
```

## Development

NOTE: You will need a secret to run locally. You will need to contact me for this key.

To run the development server, use the following command:

```bash
pnpm start
```

## Build

To build the project for production, use the following command:

```bash
pnpm build
```

## Preview

To preview the production build, use the following command:

```bash
pnpm preview
```

## Lint

```bash
pnpm lint
```
