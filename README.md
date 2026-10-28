# JuanIPlanes

Personal site built with [Qwik City](https://qwik.dev/) as a static site and published with GitHub Pages.

Live: https://juaniplanes.github.io/JuanIPlanes/

## Scripts

- `pnpm install`: install dependencies (pnpm 10.15.0 is the version CI uses).
- `pnpm start`: dev server at http://localhost:5173/JuanIPlanes/
- `pnpm run build`: generate the static site into `dist/`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: it builds the site and deploys `dist/` to GitHub Pages (Pages source: GitHub Actions).

The Vite `base` in `vite.config.ts` (`/JuanIPlanes/`) must match the repository name, because that is the path Pages serves the site under.
