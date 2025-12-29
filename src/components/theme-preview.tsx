"use client";

import {
  Button,
  Card,
  Chip,
  Description,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

export function ThemePreview() {
  return (
    <div className="flex flex-col gap-8">
      {/* Buttons Section */}
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-soft">Danger Soft</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" isDisabled>
            Disabled
          </Button>
        </div>
      </section>

      <Separator />

      {/* Cards Section */}
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Cards</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Card.Header>
              <Card.Title>Default Card</Card.Title>
              <Card.Description>Card with default styling</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm">
                This is an example card component using the current theme
                colors.
              </p>
            </Card.Content>
          </Card>

          <Card variant="secondary">
            <Card.Header>
              <Card.Title>Secondary Card</Card.Title>
              <Card.Description>Card with secondary variant</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm">
                Cards can have different variants for visual hierarchy.
              </p>
            </Card.Content>
          </Card>

          <Card className="bg-accent/10">
            <Card.Header>
              <Card.Title>Accent Card</Card.Title>
              <Card.Description>Card with accent tint</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm">
                Use accent colors to highlight important content.
              </p>
            </Card.Content>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Inputs Section */}
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Inputs</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TextField>
            <Label>Default Input</Label>
            <Input placeholder="Enter text..." />
          </TextField>
          <TextField>
            <Label>With Description</Label>
            <Input placeholder="Enter email..." />
            <Description>We&apos;ll never share your email</Description>
          </TextField>
          <TextField isDisabled>
            <Label>Disabled</Label>
            <Input placeholder="Can't edit..." defaultValue="Disabled value" />
          </TextField>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TextField>
            <Label>Success Style</Label>
            <Input placeholder="Valid input" className="border-success" />
          </TextField>
          <TextField>
            <Label>Warning Style</Label>
            <Input placeholder="Needs attention" className="border-warning" />
          </TextField>
          <TextField isInvalid>
            <Label>Error</Label>
            <Input placeholder="Invalid input" />
            <Description className="text-danger">
              This field is required
            </Description>
          </TextField>
        </div>
      </section>

      <Separator />

      {/* Chips/Badges Section */}
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Chips & Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Chip color="accent">Accent</Chip>
          <Chip color="default">Default</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </div>
        <div className="flex flex-wrap gap-3">
          <Chip variant="secondary">Secondary</Chip>
          <Chip variant="tertiary">Tertiary</Chip>
          <Chip variant="soft">Soft</Chip>
        </div>
        <div className="flex flex-wrap gap-3">
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </div>
      </section>

      <Separator />

      {/* Typography Section */}
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Typography</h3>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Heading 1 - Display</h1>
          <h2 className="text-3xl font-semibold">Heading 2</h2>
          <h3 className="text-2xl font-semibold">Heading 3</h3>
          <h4 className="text-xl font-medium">Heading 4</h4>
          <p className="text-base">
            Body text - The quick brown fox jumps over the lazy dog. This is
            regular paragraph text used for content.
          </p>
          <p className="text-sm text-muted">
            Muted text - Secondary information that is less prominent.
          </p>
          <p className="font-mono text-sm">
            Monospace - Used for code: const hello = &quot;world&quot;;
          </p>
        </div>
      </section>
    </div>
  );
}
