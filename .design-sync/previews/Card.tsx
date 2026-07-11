import { Button, Card } from "@heroui/react";

// Ported from the Tartiner Labs website (src/components/theme-preview.tsx) and
// the HeroUI Card docs. Card is a compound component:
// Card.Header / Card.Title / Card.Description / Card.Content / Card.Footer.

export function Default() {
  return (
    <Card className="max-w-sm">
      <Card.Header>
        <Card.Title>Default Card</Card.Title>
        <Card.Description>Card with default styling</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-sm">
          An example card using the current Tartiner theme colors — surface
          background, subtle border, and soft shadow.
        </p>
      </Card.Content>
    </Card>
  );
}

export function Variants() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <Card.Header>
          <Card.Title>Default</Card.Title>
          <Card.Description>Default surface</Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-sm">Neutral surface for most content.</p>
        </Card.Content>
      </Card>
      <Card variant="secondary">
        <Card.Header>
          <Card.Title>Secondary</Card.Title>
          <Card.Description>Secondary variant</Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-sm">Use variants for visual hierarchy.</p>
        </Card.Content>
      </Card>
    </div>
  );
}

export function WithFooter() {
  return (
    <Card className="max-w-sm">
      <Card.Header>
        <Card.Title>Publish changes</Card.Title>
        <Card.Description>
          Review your edits before they go live.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p className="text-sm">
          Changes are visible to your whole team once published.
        </p>
      </Card.Content>
      <Card.Footer>
        <div className="flex gap-2">
          <Button variant="primary" size="sm">
            Publish
          </Button>
          <Button variant="tertiary" size="sm">
            Cancel
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
