import { Button, ButtonGroup } from "@heroui/react";

// Ported from the Tartiner Labs website (src/components/theme-selector.tsx) and
// the HeroUI ButtonGroup docs.

export function Horizontal() {
  return (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}

export function Variants() {
  return (
    <div className="flex flex-col items-start gap-3">
      <ButtonGroup variant="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="tertiary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}
