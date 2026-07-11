import { Input, Label, TextField } from "@heroui/react";

// Input is the text entry control. Standalone it renders on its own; inside a
// TextField it binds to a Label + Description for accessibility (the pattern the
// Tartiner Labs site uses).

export function Standalone() {
  return (
    <div className="flex max-w-64 flex-col gap-3">
      <Input placeholder="Enter text..." />
      <Input placeholder="Disabled" isDisabled />
      <Input placeholder="With value" defaultValue="Hello world" />
    </div>
  );
}

export function InField() {
  return (
    <TextField className="max-w-64">
      <Label>Username</Label>
      <Input placeholder="Enter username" />
    </TextField>
  );
}
