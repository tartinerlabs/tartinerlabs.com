import { Description, Input, Label, TextField } from "@heroui/react";

// Description is helper/validation text bound to a field. Its true render is
// inside a TextField, so the preview shows that composition — both the neutral
// helper style and the danger (error) style the Tartiner Labs site uses.

export function Helper() {
  return (
    <TextField className="max-w-64" name="username">
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <Description>Choose a unique username for your account.</Description>
    </TextField>
  );
}

export function ErrorText() {
  return (
    <TextField className="max-w-64" isInvalid>
      <Label>Email</Label>
      <Input placeholder="you@example.com" />
      <Description className="text-danger">
        Please enter a valid email address.
      </Description>
    </TextField>
  );
}
