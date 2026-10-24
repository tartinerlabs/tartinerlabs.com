import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { PostHogPageView, PostHogProvider } from "@posthog/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type ReactNode, Suspense } from "react";

const themeScript = `(() => {
  const root = document.documentElement;
  let dark;
  try {
    const stored = localStorage.getItem("tartiner-theme");
    if (stored) dark = stored === "dark";
  } catch {}
  if (dark === undefined) dark = !matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme = dark ? "tartiner-dark" : "tartiner";
  if (Element.prototype.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) root.classList.add("motion");
})();`;

export const metadata: Metadata = {
  title: {
    default: "Tartiner Labs | Building Software That Connects",
    template: "%s | Tartiner Labs",
  },
  description:
    "Building globally distributed software connecting people and businesses. Simple, scalable, privacy-focused solutions from Singapore.",
  metadataBase: new URL("https://tartinerlabs.com"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://tartinerlabs.com",
    siteName: "Tartiner Labs",
    title: "Tartiner Labs | Building Software That Connects",
    description:
      "Building globally distributed software connecting people and businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tartiner Labs | Building Software That Connects",
    description:
      "Building globally distributed software connecting people and businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="tartiner"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: sets theme and motion state before first paint
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="font-sans antialiased">
        <PostHogProvider clientOptions={{ api_host: "/ingest" }}>
          <Suspense>
            <PostHogPageView />
          </Suspense>
          {children}
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
