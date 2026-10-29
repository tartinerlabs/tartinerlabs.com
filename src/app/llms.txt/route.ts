const content = `# Tartiner Labs

> Quality software, spread across the world. A small software company in Singapore building simple, scalable, privacy-focused products that connect people and businesses.

## Origin

Tartiner (tar·ti·ner, /taʁ.ti.ne/) is French for "to spread". The name started in 2015 as a university project group at the University of Queensland. We meant to turn it into a company after graduation, then went home to our own countries instead. Tartiner Labs, now in Singapore, finishes what that group started.

## Principles

- Clarity over complexity: fewer moving parts. Every screen obvious on first read.
- Systems over features: foundations that make the next thing easier to build.
- Long-term thinking: software meant to age quietly, without forced rewrites.
- Respect for data: privacy-focused by default. We collect only what we need.

## Products

- Trace: private location timeline for iPhone. Your places and routes stay on your device. https://usetrace.app/

## Website

- Homepage: https://tartinerlabs.com
- Privacy: https://tartinerlabs.com/privacy
- GitHub: https://github.com/tartinerlabs
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
