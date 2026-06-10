# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # astro check (type checking) + build production site to ./dist/
npm run preview    # Preview production build locally
```

No test suite is configured. `npm run build` runs `astro check` first, so it doubles as the type-check command.

## Architecture

Static portfolio site built with **Astro 6** and **Tailwind CSS 4**. No JS framework — all components are `.astro` files. The only client-side JS is `src/scripts/main.ts` (smooth scroll, mobile menu, IntersectionObserver reveals, live Madrid clock), loaded from the page.

**Routing / i18n:** Two locales, English (default) and Spanish, served at `/en/` and `/es/`.
- `src/pages/[lang]/index.astro` — the real page, one static route per locale via `getStaticPaths`.
- `src/pages/index.astro` — meta-refresh redirect from `/` to `/${defaultLang}/`.
- `src/i18n/ui.ts` — `languages`, `defaultLang`, and the `ui` dictionary with every UI string keyed by `TranslationKey`. Both locales must define the same keys.
- `src/i18n/utils.ts` — `getLangFromUrl`, `useTranslations` (returns `t()`), `useTranslatedPath`.
- Many translation values are HTML strings rendered with `set:html` / `<Fragment set:html>`.

**Data:** Content lives in `src/data/site.ts` (nav links, social links, experience entries, projects) typed by `src/interfaces.ts`. Components reference content by translation key; the actual copy lives in `src/i18n/ui.ts`. Icons are inline SVGs in `src/data/icons.ts` (`IconName` union type), rendered by `src/components/Icon.astro`.

**Sections (in order):** Header → Hero → Experience → Projects → About → Contact → Footer (+ ScrollWidgets scroll-to-top button). Navigation is anchor-based: `#experience`, `#projects`, `#about`, `#contact`.

**Layout:** `src/layouts/Layout.astro` handles `<html>`/`<head>` (SEO meta, canonical, hreflang alternates), global styles, and sets `class="dark"` — the site always runs in dark mode via the `.dark` design tokens.

**Path aliases** (tsconfig): `@components/*`, `@layouts/*`, `@data/*`, `@i18n/*`.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite`; theme defined in `src/styles/global.css` (`@theme inline` block). Design tokens are shadcn-style HSL CSS variables (`--background`, `--primary`, `--accent`, …) defined in `:root`/`.dark`. Custom breakpoints `fold` (17.5rem) and `xs` (30rem) sit below Tailwind's `sm`. Fonts (Satoshi, Onest) are self-hosted from `public/fonts/`. Animations come from the `tailwind-animations` package plus custom keyframes/scroll-driven animations in `global.css`.

**Assets:** Everything is served from `public/` (no `src/assets`); project covers/videos and emoji images live under `public/_astro/` and `public/images/`.

**Contact:** LinkedIn + mailto links only — no form or backend.
