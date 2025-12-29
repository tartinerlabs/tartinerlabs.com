"use client";

import { Separator } from "@heroui/react";
import { useEffect, useState } from "react";
import { ColorPalette } from "@/components/color-palette";
import { ThemePreview } from "@/components/theme-preview";
import { ThemeSelector } from "@/components/theme-selector";

export default function PreviewPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "tartiner-dark" : "tartiner",
    );
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Tartiner Labs
              </h1>
              <p className="text-sm text-muted">
                Design Language System Preview
              </p>
            </div>
            <a
              href="/"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Intro */}
        <section className="mb-12">
          <h2 className="mb-4 text-4xl font-bold">Design Language System</h2>
          <p className="max-w-2xl text-lg text-muted">
            The Tartiner theme — calm, understated, and professional. Toggle
            between light and dark modes to preview the color palette and
            components.
          </p>
        </section>

        <Separator className="my-8" />

        {/* Theme Selector */}
        <section className="mb-12">
          <ThemeSelector
            isDark={isDark}
            onDarkModeToggle={() => setIsDark(!isDark)}
          />
        </section>

        <Separator className="my-8" />

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Color Palette</h2>
          <ColorPalette />
        </section>

        <Separator className="my-8" />

        {/* Component Preview */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Component Preview</h2>
          <ThemePreview />
        </section>

        {/* Footer */}
        <Separator className="my-8" />
        <footer className="py-8 text-center text-sm text-muted">
          <p>
            Tartiner Labs &bull; Singapore &bull;{" "}
            <a
              href="https://tartinerlabs.com"
              className="text-link hover:underline"
            >
              tartinerlabs.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
