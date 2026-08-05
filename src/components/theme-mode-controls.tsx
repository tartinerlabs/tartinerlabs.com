"use client";

import { useEffect, useState } from "react";
import { ThemeSelector } from "@/components/theme-selector";

export function ThemeModeControls() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "tartiner-dark" : "tartiner",
    );
  }, [isDark]);

  return (
    <ThemeSelector
      isDark={isDark}
      onDarkModeToggle={() => setIsDark(!isDark)}
    />
  );
}
