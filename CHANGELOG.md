# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-10

### Added
- Cloudflare Workers deployment configuration (`wrangler.toml`) configured with static assets binding (`./dist`).
- Added `pnpm deploy` script (`astro build && wrangler deploy`) for automated build and edge deployment.
- Added `.wrangler/` cache directory to `.gitignore`.

### Changed
- Updated LinkedIn company URL to canonical format `https://www.linkedin.com/company/explodenot/`.
- Updated documentation with Cloudflare deployment workflows and authentication steps.

---

## [1.0.0] - 2026-11-10

### Added
- Initial pre-launch loading and placeholder web presence for **Explodenot**.
- Astro 5+ static site foundation integrated with Tailwind CSS v4.
- Aviation Black Box & Flight Recorder design system (`DESIGN.md` & `PRODUCT.md`).
- Self-hosted typography (`@fontsource/space-grotesk` and `@fontsource/jetbrains-mono`) eliminating third-party CDNs.
- Babel legacy browser transpilation and polyfills via `@vitejs/plugin-legacy` and `core-js`.
- High-resolution favicons, web app manifest (`site.webmanifest`), and Apple Touch icons.
- Complete search engine optimization:
  - Canonical URL declaration.
  - Open Graph and Twitter Card tags with official logo card.
  - JSON-LD structured data for `Organization`, `WebSite`, and founder `Person`.
  - Crawling directives (`robots.txt`) and XML sitemap (`sitemap.xml`).
- Direct founder links to [viruchith.com](https://viruchith.com) and contact mailto (`hello@explodenot.com`).
- Official social community links for GitHub, LinkedIn, and X.
