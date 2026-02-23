# CV — David Fournier

Personal CV/resume built as a single-page React app styled with Tailwind CSS. The layout matches A4 paper dimensions (210mm x 297mm) for PDF export.

## Getting started

```sh
npm install
npm start
```

## Scripts

- `npm start` — Start Vite dev server
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally
- `node ./scripts/make-pdf.mjs` — Generate PDF (requires `npm run build` first and Playwright Chromium via `npx playwright install chromium`)

## PDF generation

The `make-pdf.mjs` script starts a Vite preview server, launches a headless Chromium browser with Playwright, and exports the page as `build/CV_David_Fournier.pdf`.

## CI/CD

A GitHub Actions workflow (`.github/workflows/release.yml`) triggers on `v*` tags — builds the app, generates the PDF, and creates a GitHub release with the PDF attached.
