# urlsalimbot.github.io

Personal portfolio for Earl Salimbot — game developer, 3D artist, and creative
technologist.

Built with SvelteKit 3 (Svelte 5), prerendered with `@sveltejs/adapter-static`, and
deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The static site is written to `build/`.

## Deploying

Push to `main`. The GitHub Actions workflow builds the site and publishes `build/` to
GitHub Pages.
