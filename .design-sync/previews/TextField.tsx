import { Description, Input, Label, TextField } from "@heroui/react";

// Ported from the Tartiner Labs website (src/components/theme-preview.tsx) and
// the HeroUI TextField docs. TextField is the accessible wrapper that binds
// Label + Input + Description together.

export function Default() {
  return (
    <TextField className="max-w-64">
      <Label>Default Input</Label>
      <Input placeholder="Enter text..." />
    </TextField>
  );
}

export function WithDescription() {
  return (
    <TextField className="max-w-64" name="email" type="email">
      <Label>Email</Label>
      <Input placeholder="you@example.com" />
      <Description>We'll never share your email.</Description>
    </TextField>
  );
}

export function Invalid() {
  return (
    <TextField className="max-w-64" isInvalid>
      <Label>Email</Label>
      <Input placeholder="Invalid input" />
      <Description className="text-danger">This field is required.</Description>
    </TextField>
  );
}

export function Disabled() {
  return (
    <TextField className="max-w-64" isDisabled>
      <Label>Disabled</Label>
      <Input placeholder="Can't edit..." defaultValue="Disabled value" />
    </TextField>
  );
}
