# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
```

No test suite is configured. Type checking is provided by Astro's strict TypeScript config.

## Architecture

Single-page static portfolio site built with **Astro 6** and **Tailwind CSS 4**. No JS framework (React/Vue/etc.) — all components are `.astro` files with zero client-side JS by default.

**Page composition:** `src/pages/index.astro` is the sole page, composed from components in `src/components/`. The layout wrapper is `src/layouts/Layout.astro` (handles `<html>`, `<head>`, global styles, `lang="es"`).

**Sections (in order):** Header → Hero → About → Experience → Projects → Contact → Footer. Navigation links are anchor-based (`#sobre-mi`, `#proyectos`, `#experiencia`, `#contacto`).

**Data:** All content (jobs, projects, skills) is hardcoded as arrays in each component's frontmatter (`---` block). There is no CMS or external data source.

**Styling:** Tailwind CSS v4 (imported via `@import "tailwindcss"` in `src/styles/global.css`). Custom design tokens use CSS variables for the dark color scheme (`dark`, `dark-lighter`, `primary`, `secondary`, `gray-custom`). Reusable utility classes `gradient-text` and `card-hover` are defined in components.

**Contact form:** Static HTML only — no form submission backend is wired up.
