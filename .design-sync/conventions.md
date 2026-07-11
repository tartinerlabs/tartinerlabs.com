## Tartiner Labs Design System — how to build with it

These components are **HeroUI v3** (`@heroui/react`) styled with the **Tartiner** theme
(low-chroma, cool-toned, OKLCH) and the **Geist** typeface. Import every component from
`window.TartinerUI` (the compiled bundle in `_ds_bundle.js`).

### Setup — no provider needed

HeroUI v3 needs **no provider or context wrapper**. The Tartiner tokens and Geist font are
applied at `:root`, so any element renders on-brand (light theme) out of the box — you do not
set anything to get the default look.

- **Dark mode**: set `data-theme="tartiner-dark"` on a wrapping element (e.g. the page root).
  Light is the default (`:root`, equivalent to `data-theme="tartiner"`). These are the only two
  themes — do not invent others.
- **Fonts**: `Geist` (sans, the default) and `Geist Mono` ship with the bundle. Use
  `font-sans` / `font-mono`; don't import other fonts.

### Styling idiom — props first, then tokens

**1. Style components through their props** — this is the primary idiom, always on-brand:

- `Button` — `variant`: `primary` (default) · `secondary` · `tertiary` · `outline` · `ghost` ·
  `danger` · `danger-soft`; `size`: `sm` · `md` · `lg`; `isDisabled`, `isPending`, `isIconOnly`,
  `fullWidth`. Use `onPress`, **not** `onClick`.
- `Chip` — `color`: `default` · `accent` · `success` · `warning` · `danger`; `variant`:
  `primary` · `secondary` · `tertiary` · `soft`; `size`: `sm` · `md` · `lg`.
- `Card` — compound: `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`,
  `Card.Footer`; `variant`: `primary` · `secondary`.
- `TextField` — the accessible field wrapper; compose `Label`, `Input`, `Description` inside it.
  `isInvalid`, `isDisabled`, `isRequired`. (Standalone `Input` also works.)
- `ButtonGroup` — wraps `Button`s; `variant`, `size` apply to all.
- `Separator` — `orientation`: `horizontal` (default) · `vertical`.

Read each component's `<Name>.d.ts` (prop contract) and `<Name>.prompt.md` (usage) before use.

**2. For layout and custom color, use Tailwind v4 utilities.** The full Tartiner **semantic
color** vocabulary is available as `bg-*`, `text-*`, and `border-*` for every token:

`background` · `foreground` · `surface` · `surface-foreground` · `overlay` · `muted` ·
`default` · `accent` · `accent-foreground` · `secondary` · `success` · `warning` · `danger`
(+ each `-foreground`) · `border` · `separator` · `focus` · `link`.

Examples: `bg-surface`, `text-foreground`, `text-muted`, `bg-accent text-accent-foreground`,
`border-border`, `text-danger`, `bg-success`. Radius: `rounded-md`, `rounded-lg`, `rounded-xl`.
Build hierarchy from these tokens + spacing/type — **not** from raw hex or high-saturation color.

**3. Equivalently, reference the CSS variables directly** (all defined at `:root`), e.g.
`style={{ background: "var(--surface)", color: "var(--foreground)" }}`. Tokens include
`--background --foreground --surface --overlay --muted --default --accent --secondary --border
--separator --focus --link --success --warning --danger` (each color has a `-foreground` pair),
plus `--radius` and `--spacing`. Keep semantic colors (success/warning/danger) for their meaning.

### Where the truth lives

`styles.css` (and its `@import` of `_ds_bundle.css`) holds every token and component style —
read it before styling. Per-component API is in `components/general/<Name>/<Name>.d.ts`.

### Idiomatic example

```tsx
// Components resolve from window.TartinerUI, e.g. const { Button, Card, TextField,
// Label, Input, Description } = window.TartinerUI;

<Card className="max-w-sm">
  <Card.Header>
    <Card.Title>Invite a teammate</Card.Title>
    <Card.Description>They'll get access to this workspace.</Card.Description>
  </Card.Header>
  <Card.Content>
    <TextField className="max-w-64" type="email">
      <Label>Email</Label>
      <Input placeholder="you@example.com" />
      <Description>We'll never share their email.</Description>
    </TextField>
  </Card.Content>
  <Card.Footer>
    <div className="flex gap-2">
      <Button variant="primary" size="sm" onPress={() => {}}>Send invite</Button>
      <Button variant="tertiary" size="sm">Cancel</Button>
    </div>
  </Card.Footer>
</Card>
```
