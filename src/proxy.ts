import { postHogMiddleware } from "@posthog/next";
import { type NextRequest, NextResponse } from "next/server";

// Pages without a file extension. Anything else requested as Markdown gets a Markdown 404.
const PAGES = ["/", "/privacy", "/preview"];

const NOT_FOUND_MARKDOWN = `# 404 Not Found

This page does not exist on tartinerlabs.com.

- Homepage: https://tartinerlabs.com
- Site overview for agents: https://tartinerlabs.com/llms.txt
- Sitemap: https://tartinerlabs.com/sitemap.xml
`;

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const wantsMarkdown =
    request.headers.get("accept")?.includes("text/markdown") ?? false;

  if (wantsMarkdown) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/llms.txt", request.url));
    }

    const isKnown =
      PAGES.includes(pathname) ||
      pathname.includes(".") ||
      pathname.startsWith("/ingest");
    if (!isKnown) {
      return new Response(NOT_FOUND_MARKDOWN, {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          Vary: "Accept",
        },
      });
    }
  }

  return postHogMiddleware({ proxy: true })(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
