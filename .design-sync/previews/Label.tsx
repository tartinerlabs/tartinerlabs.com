import { Input, Label, TextField } from "@heroui/react";

// Label is a leaf that binds to its field via context — its true render is
// inside a TextField, so the preview shows that composition.

export function InField() {
  return (
    <TextField className="max-w-64">
      <Label>Full name</Label>
      <Input placeholder="Jane Doe" />
    </TextField>
  );
}

export function Required() {
  return (
    <TextField className="max-w-64" isRequired>
      <Label>Email address</Label>
      <Input placeholder="you@example.com" />
    </TextField>
  );
}
