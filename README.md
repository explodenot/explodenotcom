# Explodenot

> **Software that doesn’t go boom.**  
> Resilient, scalable, and secure enterprise software development. Fewer fireworks, more sleep.

Explodenot is an upcoming enterprise software development firm engineered from day one for extreme fault tolerance, unshakeable scalability, and deep architectural security.

This repository powers the official pre-launch loading and placeholder web presence at [explodenot.com](https://explodenot.com).

---

## 🛠️ Stack & Architecture

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Legacy Browser Support:** `@vitejs/plugin-legacy` with Babel and `core-js` polyfills (Chrome 58+, Firefox 57+, Safari 11+, Edge 16+)
- **Typography:** 100% self-hosted fonts via Fontsource (`Space Grotesk` & `JetBrains Mono`)
- **SEO & Structured Data:** Semantic HTML5, Schema.org `Organization` / `WebSite` JSON-LD graph, Open Graph, Twitter Cards, `robots.txt`, and XML sitemap.
- **Design System:** Impeccable Aviation Black Box & Flight Recorder aesthetic ([DESIGN.md](./DESIGN.md)).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Development

Start the local development server:

```bash
pnpm dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

Generate the static production build into `dist/`:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

### Quality Audit

Scan built pages against the Impeccable design system detector:

```bash
pnpm check
```

---

## 🌐 Brand & Community

- **Founder:** [Viruchith](https://viruchith.com)
- **Website:** [explodenot.com](https://explodenot.com)
- **Email:** [hello@explodenot.com](mailto:hello@explodenot.com)
- **GitHub:** [github.com/explodenot](https://github.com/explodenot)
- **LinkedIn:** [linkedin.com/company/explodenot](https://www.linkedin.com/company/explodenot/)
- **X (Twitter):** [x.com/explodenot](https://x.com/explodenot)

---

## 📄 License

MIT © [Explodenot](https://explodenot.com)
