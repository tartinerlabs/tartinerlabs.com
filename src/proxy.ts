import { postHogMiddleware } from "@posthog/next";
import type { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  return postHogMiddleware({ proxy: true })(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
