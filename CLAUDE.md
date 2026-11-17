# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing site for Cayla Panitz, LPC (rebuild of a Hugo site), built with Astro 5 (static output) and Panda CSS. Content comes from a headless CMS (Hygraph, via GraphQL) at build time. Package manager is **pnpm**.

## Commands

```bash
pnpm install        # also runs `panda codegen` (prepare script) to generate styled-system/
pnpm start          # astro dev
pnpm build          # astro build
pnpm preview        # preview production build
pnpm lint           # eslint .
pnpm lint:fix
pnpm test           # vitest run
pnpm vitest run src/__tests__/Button.test.js   # single test file
pnpm vitest run -t "renders a link"            # single test by name
```

Tests live in `src/__tests__/*.test.js` and render components with Astro's experimental Container API (`AstroContainer.create()` + `renderToString(Component, { props })`), configured via `vitest.config.mjs` (`getViteConfig`). Rendered HTML in tests includes dev-mode `data-astro-source-*` attributes on elements, so match with regexes (e.g. `/<span[^>]*>Label<\/span>/`) rather than exact tag strings. If `styled-system/` is missing or stale (e.g. after editing `panda.config.ts`), run `pnpm panda codegen`.

`.env` (git-ignored; secrets obtained from the repo owner) must define `CONTENT` (the GraphQL endpoint URL used by `src/pages/index.astro`), plus `PROJECT` and `VERCEL`. The build/dev server fails without `CONTENT`.

## Architecture

- **One page, CMS-driven.** [src/pages/index.astro](src/pages/index.astro) is the only page. It runs a single GraphQL request (query string built in [src/graphql/main.ts](src/graphql/main.ts)) and renders `shero`, `sections`, `footer` and an optional active `dialog`. The Hygraph stage is `DRAFT` in dev and `PUBLISHED` in builds (`import.meta.env.DEV`), so `pnpm start` shows unpublished content.
- **Section dispatch.** `sections` is a union keyed by `__typename`; [Entry.astro](src/components/Entry.astro) maps it (via the `EntryType` enum) to `Content`, `ContentCollection` or `Contact`. Adding a new CMS block type means updating the GraphQL query, the types in [src/types/main.d.ts](src/types/main.d.ts), the enums in [src/constants/main.ts](src/constants/main.ts), and `Entry.astro`.
- **Markdown from the CMS.** CMS copy is Markdown; render it with `md.inline` / `md.block` from [src/lib/markdown.ts](src/lib/markdown.ts) (marked + DOMPurify; external links get `target="_blank"`). Output is inserted with `set:html` inside a `data-markdown` element, which `panda.config.ts` `globalCss` styles.
- **Anchors/nav.** Section headings double as nav items and anchor ids via `getAnchor` in [src/lib/anchorize.ts](src/lib/anchorize.ts), so headings must be stable and unique.
- **Scroll animation.** Elements with a `data-lazy` attribute are un-hidden by an IntersectionObserver script at the bottom of `index.astro`.
- **Shared constants/enums** (site metadata, fonts, collection/dialog types, asset hosts) live in [src/constants/main.ts](src/constants/main.ts).

## Styling (Panda CSS)

- Each component `Foo.astro` has a sibling `src/styles/foo.styles.ts` exporting named `css({...})` class strings (imported as `import * as style from "../styles/foo.styles"`), used as `class={style.root}`. Imports of `css` come from the generated `../../styled-system/css`.
- Panda only scans `./src/**/*.{ts,astro}` (`panda.config.ts`); generated output goes to `styled-system/` (ignored by ESLint).
- Custom utilities in `panda.config.ts` used throughout: `layout` (`wrap` | `grid` — 12-column grid, max width, inline padding), `centered` (`lg`/`md`/`sm` grid column placement), `highlight` (underline-marker pseudo-element; requires the element to be positioned, which `* { position: relative }` globally ensures). Custom condition `_action` = hover only on fine-pointer hover devices. Fonts/size tokens (`display`, `heading`, `layout`, `gap`, `xl`) and `textStyle` `body`/`heading` are also defined there.

## Conventions

- ESLint (flat config, `eslint.config.js`) enforces `@stylistic` rules: double quotes, semicolons, 2-space indent, trailing commas on multiline, `as-needed` arrow parens. Two blank lines are conventionally left after imports/front-matter blocks in existing files.
- TypeScript is strict with `verbatimModuleSyntax`: use `import type`/`type` modifiers for type-only imports. The `src/...` alias (e.g. `import Nav from "src/components/Nav.astro"`) resolves via `baseUrl: "."`.
- Husky pre-commit hook is currently a placeholder (only echoes).
- Deployed on Vercel; site URL `https://caylapanitzlpc.com`, `trailingSlash: "never"`.
