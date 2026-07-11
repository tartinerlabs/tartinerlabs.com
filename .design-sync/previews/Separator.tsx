import { Separator } from "@heroui/react";

// Separator draws a thin rule using the Tartiner --separator token. Used across
// the Tartiner Labs site to divide sections.

export function Horizontal() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <p className="text-sm">Section one content sits above the divider.</p>
      <Separator />
      <p className="text-sm">Section two content sits below the divider.</p>
    </div>
  );
}

export function Vertical() {
  return (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Home</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Docs</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Pricing</span>
    </div>
  );
}
