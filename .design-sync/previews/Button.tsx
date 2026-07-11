import { Button } from "@heroui/react";

// Ported from the Tartiner Labs website (src/components/theme-preview.tsx) and
// the HeroUI Button docs. Each export is one card cell.

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" isDisabled>
        Primary
      </Button>
      <Button variant="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="danger" isDisabled>
        Danger
      </Button>
    </div>
  );
}
