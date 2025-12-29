const content = `# Tartiner Labs

> Building globally distributed software connecting people and businesses. Simple, scalable, privacy-focused solutions from Singapore.

## About

Tartiner Labs is a software company based in Singapore that builds globally distributed software solutions. We focus on creating simple, scalable, and privacy-focused applications that connect people and businesses.

## Website

- Homepage: https://tartinerlabs.com
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
