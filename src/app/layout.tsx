import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { PostHogPageView, PostHogProvider } from "@posthog/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { type ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: "Tartiner Labs | Quality software, spread across the world",
    template: "%s | Tartiner Labs",
  },
  description:
    "A small software company in Singapore building simple, scalable, privacy-focused products that connect people and businesses.",
  metadataBase: new URL("https://tartinerlabs.com"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://tartinerlabs.com",
    siteName: "Tartiner Labs",
    title: "Tartiner Labs | Quality software, spread across the world",
    description:
      "A small software company in Singapore building simple, scalable, privacy-focused products that connect people and businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tartiner Labs | Quality software, spread across the world",
    description:
      "A small software company in Singapore building simple, scalable, privacy-focused products that connect people and businesses.",
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
      <body className="font-sans antialiased">
        <ThemeProvider
          storageKey="tartiner-theme"
          value={{ light: "tartiner", dark: "tartiner-dark" }}
        >
          <PostHogProvider clientOptions={{ api_host: "/ingest" }}>
            <Suspense>
              <PostHogPageView />
            </Suspense>
            {children}
          </PostHogProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
