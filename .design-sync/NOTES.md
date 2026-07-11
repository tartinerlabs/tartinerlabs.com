# design-sync notes — Tartiner Labs Design System

This repo is a **Next.js website**, not a component-library package. The synced design
system is an **off-envelope, hand-composed** bundle: the real **HeroUI v3** (`@heroui/react`)
components, styled with the repo's **Tartiner** theme (`src/themes/tartiner.css`, OKLCH tokens)
and **Geist** fonts. Project: `7ea71398-58a1-4267-990e-ac0160ecc2c7` (window global `TartinerUI`).

## Build pipeline (what makes this non-standard)

- `pkg` is `@heroui/react` (a node_modules dep), bundled via `--entry
  ./node_modules/@heroui/react/dist/index.js --node-modules ./node_modules`.
- **`cfg.buildCmd` = `node .design-sync/build-css.mjs`** — run it BEFORE the converter every
  sync. It compiles `.design-sync/css-src/globals.css` (mirrors the app's `src/app/globals.css`)
  with the pinned Tailwind v4 CLI → `.design-sync/tartiner-styles.css`, then **stages a copy at
  `node_modules/@heroui/react/dist/tartiner-styles.css`**. The stage step exists because
  `cfg.cssEntry` is resolved relative to the bundled package and bounded to it — a repo path
  can't reach it, so the compiled CSS must sit inside the package dir. node_modules is
  regenerated per install, so build-css.mjs re-stages it each run.
- `cfg.cssEntry = "dist/tartiner-styles.css"` (package-relative → the staged copy).
- `cfg.extraFonts = "../../../.design-sync/fonts/fonts.css"` — path is relative to the package
  dir (`node_modules/@heroui/react`), hence the `../../../` to reach repo `.design-sync/fonts/`.
- Fonts: Geist Sans + Geist Mono **variable** woff2, sourced from the `geist` npm package
  **v1.7.2**, committed at `.design-sync/fonts/`.
- Playwright: chromium build **1228** (playwright-core **1.61.1**) matched the machine cache at
  `~/Library/Caches/ms-playwright/` — no browser download was needed.

## Re-sync steps (first-time was done manually; this is the repeatable path)

1. `(cd .ds-sync && npm i esbuild ts-morph @types/react @tailwindcss/cli@4.3.0 playwright)` on a
   fresh clone (`.ds-sync/` and its node_modules are gitignored).
2. `node .design-sync/build-css.mjs` (cfg.buildCmd — compiles + stages CSS).
3. `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./node_modules/@heroui/react/dist/index.js --out ./ds-bundle`
4. `node .ds-sync/package-validate.mjs ./ds-bundle`
5. `node .ds-sync/package-capture.mjs --out ./ds-bundle --components <authored>` and confirm all carry forward.

## Re-sync risks — what can silently go stale

- **Theme drift**: `.design-sync/css-src/tartiner.css` is a hand-maintained COPY of
  `src/themes/tartiner.css` with two deliberate edits — the light block also targets `:root`
  (so designs render on-brand with no `data-theme` attribute), and `--font-geist-sans`/
  `--font-geist-mono` are defined (the app gets them from next/font). **If the app theme
  changes, re-copy it and re-apply these two edits.** Same for `.design-sync/css-src/globals.css`
  vs `src/app/globals.css` (kept in sync manually; it also drops the `"Cascadia Code"` mono
  fallback and adds an `@source inline(...)` safelist for the semantic color utilities).
- **HeroUI version**: pinned to `@heroui/react@3.0.0-beta.3`. A major bump can change component
  APIs, the compiled `@heroui/styles`, and the token names the CSS consumes. Re-verify the
  authored previews and the `dtsPropsFor` contracts after any HeroUI upgrade.
- **`dtsPropsFor`** (Button/ButtonGroup/Chip/Card/TextField/Input/Label/Description/Separator):
  HeroUI's shipped `.d.ts` collapse to `{ [key: string]: unknown }`, so these prop contracts are
  **hand-written from the HeroUI docs**, not extracted. They can drift from the real API — re-check
  against the docs on a HeroUI bump. The other 68 components ship the weak `unknown` contract.
- **Geist**: pinned to `geist@1.7.2`. If re-sourcing, keep the variable woff2 (`Geist-Variable`,
  `GeistMono-Variable`) and the `font-weight: 100 900` @font-face ranges.

## Known render warns (triaged — do NOT treat as new on re-sync)

Validate flags 15 `bad` (RENDER_BLANK/THIN). **All are UNAUTHORED, floor-tier components** —
functional in the bundle, just no authored preview. Expected, accepted for this scope:
- Tiny icons (legitimately small paint): `CircleDashedIcon`, `CloseButton`, `CloseIcon`,
  `ExternalLinkIcon`, `IconMinus`, `IconPlus`.
- Need composition / data / open-state to render: `Menu`, `Slider`, `Switch`, `ListBox`, `Link`,
  `Header`, `HeaderRoot`, `InputGroup`, `DateInputGroup`. **Prime candidates for authored
  previews on a future re-sync** (Switch, Link, Menu, Slider especially).
- `FONT_MISSING` does NOT fire (the `"Cascadia Code"` mono fallback was removed).

## Scope decisions

- Authored + graded-good previews (9): Button, ButtonGroup, Card, Chip, TextField, Input, Label,
  Description, Separator — ported from `src/components/theme-preview.tsx` / `theme-selector.tsx`.
- A standalone **color/token showcase card was dropped** — it can't map to a HeroUI component
  export (previews must correspond to a real component dir). The full token palette is documented
  in `.design-sync/conventions.md` instead (where the design agent reads it).
- All 77 grouped under `general` (HeroUI ships no per-component docs → no category). Could be
  regrouped later via `cfg.docsMap` category stubs.
- ButtonGroup `Vertical` cell was removed — `orientation="vertical"` rendered horizontally in the
  static card (misleading). Re-investigate if vertical groups are wanted.
