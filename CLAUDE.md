# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tartiner Labs company website built with Next.js 16, HeroUI v3 (beta), and Tailwind CSS v4. The project features a custom Design Language System (DLS) called "Tartiner" with light and dark mode support.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run Biome linter (biome check)
pnpm format       # Format code with Biome
pnpm typecheck    # TypeScript type checking
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router, React Compiler enabled)
- **UI Library**: HeroUI v3 beta (`@heroui/react`)
- **Styling**: Tailwind CSS v4 with OKLCH color tokens
- **Linting/Formatting**: Biome
- **Package Manager**: pnpm

### Key Directories
- `src/app/` - Next.js App Router pages
- `src/components/` - React components
- `src/themes/` - Tartiner theme CSS (OKLCH color tokens)

### Theming
The Tartiner theme is defined via CSS custom properties in `src/themes/tartiner.css`. Theme selection uses `data-theme` attribute on `<html>`:
- `data-theme="tartiner"` - Light mode (default)
- `data-theme="tartiner-dark"` - Dark mode

Colors are exposed as both CSS variables (`--accent`) and Tailwind classes (`bg-accent`, `text-accent-foreground`).

## Design Language System

**Use the `/design-language-system` skill** when creating UI components or working with theme colors. The DLS enforces:

- Low-chroma, cool-toned palette (chroma ~0.05)
- Tartiner is the only approved theme
- Semantic colors (success/warning/danger) must remain distinct and unbranded
- Visual hierarchy from layout and typography, not color saturation

## Code Style

- Biome handles linting and formatting (2-space indent)
- Conventional commits enforced via commitlint (`feat:`, `fix:`, `chore:`, etc.)
- Pre-commit hook runs `pnpm lint-staged` (Biome check on staged files)
- Path alias: `@/*` maps to `./src/*`

## MCP Servers

The project has configured MCP servers for:
- `heroui-react` - HeroUI component documentation
- `next-devtools` - Next.js development tools
- `playwright` - Browser automation for testing
