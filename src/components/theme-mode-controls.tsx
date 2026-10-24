"use client";

import { startTransition, useLayoutEffect, useState } from "react";
import { ThemeSelector } from "@/components/theme-selector";

export function ThemeModeControls() {
  const [isDark, setIsDark] = useState(false);

  // Layout effect so the attribute changes inside the view transition's update.
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "tartiner-dark" : "tartiner",
    );
  }, [isDark]);

  return (
    <ThemeSelector
      isDark={isDark}
      onDarkModeToggle={() => startTransition(() => setIsDark(!isDark))}
    />
  );
}
