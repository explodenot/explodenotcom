# Design System

<!-- impeccable:design-schema 1 -->

## Platform

web

## Philosophy

Aviation Black Box & Flight Recorder Log: Serious software reliability, debugging, and incident prevention presented with calm, unshakeable engineering authority and deadpan technical humor. Refuses chaotic alarmism and generic dark SaaS templates in favor of physical telematics and steady-state cruise confidence.

## Color Palette

- **Ground Base (`--color-bg-base`):** `#0b0f12` — Deep aviation cockpit slate/black
- **Panels & Telemetry (`--color-panel`):** `#131a20` — Sturdy avionics instrument module ground
- **Panel Borders (`--color-panel-border`):** `#1f2c37` — Precision machined avionics frame joints
- **Chassis Action / Accent (`--color-orange`):** `#ff5722` — High-visibility safety flight recorder orange (reserved for primary actions and stamped chassis badges)
- **Hover Accent:** `#ff7043`
- **Telemetry Nominal (`--color-phosphor`):** `#00e676` — Cockpit steady-state phosphor green
- **Main Text:** `#e2e8f0` / `#f8fafc`
- **Muted Telemetry / Labels:** `#8899a6` / `#94a3b8`

## Typography

- **Display & Headings:** `Space Grotesk`, medium/bold with tight tracking (`tracking-tight`) and balanced line wraps (`text-balance`).
- **Telemetry, Badges & Labels:** `JetBrains Mono`, uppercase tabular figures (`font-variant-numeric: tabular-nums`).
- **Body & Explanatory:** `Space Grotesk`, clear measure (max 65–75ch), readable leading.

## Elevation & Depth

- Restrained neutral shadows (`shadow-xl shadow-black/40`) rather than chromatic/neon glowing halos.
- Riveted avionics backdrop pattern with subtle dot matrix geometry (`radial-gradient(#1f2c37 1px, transparent 1px)`).
- Crisp single-pixel borders with high-contrast edge discipline.

## Interaction & State

- Primary CTA: Stamped high-visibility safety orange button linking to founder profile ([viruchith.com](https://viruchith.com)).
- Secondary CTA: Ground control mailto link (`hello@explodenot.com`) with avionics envelope icon.
- Focus rings: 2px solid `#ff5722` with 2px offset on `#0b0f12`.
- Selection: `#ff5722` highlight with `#0b0f12` text.
- Custom scrollbar: Dark `#0b0f12` track with `#1f2c37` avionics thumb.

