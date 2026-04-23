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


<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
