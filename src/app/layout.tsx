import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" data-theme="tartiner">
      <head>
        <Script
          defer
          src="https://umami.tartinerlabs.com/script.js"
          data-website-id="2cd0496e-45d1-403c-8059-d5f3b8837450"
          data-domains="tartinerlabs.com"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
