# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal CV/resume web application for David Fournier, built as a single-page React app styled with Tailwind CSS. The layout is designed to match A4 paper dimensions (210mm x 297mm) for PDF export. Built with Vite.

## Commands

- `npm start` — Dev server (Vite)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally
- `node ./scripts/make-pdf.mjs` — Generate PDF from built app (requires `npm run build` first and Playwright's Chromium installed via `npx playwright install chromium`)

## Architecture

The app renders a two-column CV layout (1/3 sidebar + 2/3 main content) sized to A4:

- **`index.html`** — HTML entry point at project root (Vite convention). References `/src/index.jsx` as module script.
- **`src/index.jsx`** — App entry point. Renders the `<Aside>` and `<Main>` components side-by-side in a flex container with A4 dimensions.
- **`src/Aside.jsx`** — Left sidebar: profile photo, contact info, education, languages, skills, and side project. All data is defined as constants at the top of the file.
- **`src/Main.jsx`** — Right main area: name/title header, about me, and work experience timeline. All data is defined as constants at the top of the file.
- **`src/helpers.js`** — `formatItems()` utility that converts string arrays into `{key, content}` objects for rendering lists.
- **`scripts/make-pdf.mjs`** — Spins up an http-server on the `dist/` directory, uses Playwright Chromium to render the page, and exports it as `dist/CV_David_Fournier.pdf`.

## Key Details

- Node.js 20.9.0 (specified in `.tool-versions`)
- CV content (work experience, skills, education, contact) is hardcoded as constants in `Aside.jsx` and `Main.jsx` — there is no external data source.
- Vite with `@vitejs/plugin-react` (config in `vite.config.mjs`). PostCSS configured in `postcss.config.js` with Tailwind and autoprefixer.
- Tailwind v3 with `@tailwindcss/typography` plugin. Custom font size override for `sm` in `tailwind.config.js`.
- Icons from `@heroicons/react` and `@icons-pack/react-simple-icons`.
- PropTypes used for component prop validation.
- CI/CD: GitHub Actions workflow (`.github/workflows/release.yml`) triggers on `v*` tags — builds the app, generates the PDF, and creates a GitHub release with the PDF in `dist/`.
