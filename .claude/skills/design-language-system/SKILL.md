---
name: design-language-system
description: Tartiner Labs Design Language System (DLS). Use when creating UI components, styling elements, or working with theme colors. Provides CSS variables, color tokens, and design guidelines for consistent interfaces.
---

# Tartiner Labs Design Language System

## Overview

The Tartiner Labs DLS uses a **Muted** color scheme with low saturation (chroma ~0.05) for a calm, professional aesthetic. Colors are defined in OKLCH color space for perceptual uniformity.

**Brand Philosophy**: "Tartiner" means "to spread" in French — spreading warmth, connection, and clarity across every interface.

For design principles and non-negotiable rules, see [guidelines.md](guidelines.md).

## Color Tokens

### Primitives
```css
--white: oklch(100% 0 0)
--black: oklch(0% 0 0)
--snow: oklch(0.99 0 0)      /* Off-white for foregrounds */
--eclipse: oklch(0.21 0.006 286)  /* Deep purple-black for text */
```

### Light Mode Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `oklch(0.99 0.003 240)` | Page background |
| `--foreground` | `var(--eclipse)` | Primary text |
| `--surface` | `var(--white)` | Card/panel backgrounds |
| `--muted` | `oklch(0.55 0.015 240)` | Secondary text |
| `--default` | `oklch(0.94 0.005 240)` | Default button/chip bg |
| `--accent` | `oklch(0.55 0.05 240)` | Primary actions (Blue) |
| `--secondary` | `oklch(0.50 0.06 280)` | Secondary actions (Purple) |
| `--success` | `oklch(0.55 0.10 145)` | Success states (Green) |
| `--warning` | `oklch(0.65 0.10 55)` | Warning states (Amber) |
| `--danger` | `oklch(0.50 0.12 25)` | Error states (Red) |
| `--border` | `oklch(0.9 0.005 240)` | Borders |
| `--separator` | `oklch(0.92 0.004 240)` | Dividers |

### Dark Mode Colors
Dark mode uses `.dark` class on `<html>`. Key differences:
- Background: `oklch(0.12 0.008 240)` (dark blue-gray)
- Foreground: `var(--snow)` (light text)
- Accent: `oklch(0.70 0.05 240)` (brighter for contrast)
- Secondary: `oklch(0.65 0.06 280)` (brighter purple)

## Tailwind Classes

All tokens are available as Tailwind classes:

```
bg-background, text-foreground
bg-surface, text-surface-foreground
bg-accent, text-accent-foreground
bg-secondary, text-secondary-foreground
bg-success, bg-warning, bg-danger
text-muted, border-border
```

## Typography

```css
--font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif
--font-mono: var(--font-geist-mono), ui-monospace, "Cascadia Code", monospace
```

## Spacing & Radius

```css
--spacing: 0.25rem
--radius: 0.5rem
--radius-sm: 0.25rem
--radius-md: 0.375rem
--radius-lg: 0.75rem
--radius-xl: 1rem
--radius-2xl: 1.5rem
--radius-full: 9999px
```

## Shadows

```css
--surface-shadow: 0 2px 4px 0 rgba(0,0,0,0.04), 0 1px 2px 0 rgba(0,0,0,0.06)
--overlay-shadow: 0 4px 16px 0 rgba(0,0,0,0.08), 0 8px 24px 0 rgba(0,0,0,0.09)
```

## HeroUI v3 Integration

This DLS is built on HeroUI v3 (beta). Use HeroUI components with these variants:

### Buttons
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### Cards (Compound Components)
```tsx
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>Content</Card.Content>
</Card>
```

### Form Fields
```tsx
<TextField>
  <Label>Label</Label>
  <Input placeholder="Enter text..." />
  <Description>Helper text</Description>
</TextField>
```

## Usage Guidelines

1. **Prefer semantic tokens** over raw OKLCH values
2. **Use `text-muted`** for secondary information
3. **Use `bg-surface`** for elevated content (cards, modals)
4. **Accent color** is for primary actions only
5. **Secondary color** is for less prominent actions
6. **Always test in both light and dark modes**

## File Locations

- Theme CSS: `src/app/globals.css`
- Preview page: `src/app/preview/page.tsx`
- Components: `src/components/`
