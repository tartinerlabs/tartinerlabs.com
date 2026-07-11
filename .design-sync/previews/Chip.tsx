import { Chip } from "@heroui/react";

// Ported from the Tartiner Labs website (src/components/theme-preview.tsx).
// color: default | accent | success | warning | danger
// variant: primary | secondary | tertiary | soft
// size: sm | md | lg

export function Colors() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Chip color="accent">Accent</Chip>
      <Chip color="default">Default</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
  );
}

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="tertiary">Tertiary</Chip>
      <Chip variant="soft">Soft</Chip>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  );
}
