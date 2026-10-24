const content = `# Tartiner Labs

> Building globally distributed software connecting people and businesses. Simple, scalable, privacy-focused solutions from Singapore.

## About

Tartiner Labs is a software company based in Singapore that builds globally distributed software solutions. We focus on creating simple, scalable, and privacy-focused applications that connect people and businesses.

## Our Story

Tartiner means "to spread" in French. The name began in 2015 as a university project group at the University of Queensland, whose members hoped to build a company around it after graduation. They returned to their own countries and it never happened. Tartiner Labs continues that idea as a software holdings company in Singapore, building quality software that spreads across the world.

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
