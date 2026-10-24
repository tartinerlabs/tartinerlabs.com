# Agent Instructions

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

## Non-Interactive Shell Commands

**ALWAYS use non-interactive flags** with file operations to avoid hanging on confirmation prompts.

Shell commands like `cp`, `mv`, and `rm` may be aliased to include `-i` (interactive) mode on some systems, causing the agent to hang indefinitely waiting for y/n input.

**Use these forms instead:**

```bash
# Force overwrite without prompting
cp -f source dest           # NOT: cp source dest
mv -f source dest           # NOT: mv source dest
rm -f file                  # NOT: rm file

# For recursive operations
rm -rf directory            # NOT: rm -r directory
cp -rf source dest          # NOT: cp -r source dest
```

**Other commands that may prompt:**

- `scp` - use `-o BatchMode=yes` for non-interactive
- `ssh` - use `-o BatchMode=yes` to fail instead of prompting
- `apt-get` - use `-y` flag
- `brew` - use `HOMEBREW_NO_AUTO_UPDATE=1` env var

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
