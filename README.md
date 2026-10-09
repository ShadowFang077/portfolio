# Siva Shankar Malladi Portfolio

A static, responsive portfolio built with React and Vite. Personal content is centralized in `src/data/siteConfig.js`; project cards are rendered from `src/data/projects.js`.

## Setup

Requirements: Node.js 20 or newer and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Production output is generated in `dist/`:

```sh
npm run build
npm run preview
```

## Customize

- Update GitHub and LinkedIn placeholders, profile content, skills, education, experience, and projects in `src/data/siteConfig.js`.
- Add your resume as `public/resume.pdf`.
- Replace `example.com` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the deployed domain; add a matching Open Graph image at `public/og-image.png` and update its URL.
- Update `base` in `vite.config.js` to your GitHub repository path if the repository is not named `portfolio`. The current GitHub Actions build uses `/portfolio/`; Vercel uses `/`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository named `portfolio`, or update the `base` path in `vite.config.js` to match the repository name.
2. In repository settings, enable GitHub Pages with **GitHub Actions** as the source.
3. The included `.github/workflows/deploy.yml` builds and deploys on pushes to `main` and supports manual runs.
4. The Vite config uses `/portfolio/` when `GITHUB_ACTIONS` is set. For a user or organization site served from the root domain, change `base` to `/`.

## Deploy to Vercel

Import the repository in Vercel. The default Vite settings are sufficient: build command `npm run build`, output directory `dist`. Vercel builds use `/` as the asset base.

## Security and accessibility

The app has no backend or secrets. External profile and project links use `rel="noopener noreferrer"`. A recommended starter CSP is included in `index.html`; review it against your actual deployment, analytics, and asset sources before tightening or expanding it. Theme selection persists in local storage, navigation supports keyboard use, and motion respects `prefers-reduced-motion`.