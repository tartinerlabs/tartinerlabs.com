"use client";

import { Button, ButtonGroup } from "@heroui/react";

interface ThemeSelectorProps {
  isDark: boolean;
  onDarkModeToggle: () => void;
}

export function ThemeSelector({
  isDark,
  onDarkModeToggle,
}: ThemeSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-lg font-semibold">Color Mode</h2>
      <ButtonGroup>
        <Button
          size="sm"
          variant={!isDark ? "primary" : "tertiary"}
          onPress={() => isDark && onDarkModeToggle()}
        >
          Light
        </Button>
        <Button
          size="sm"
          variant={isDark ? "primary" : "tertiary"}
          onPress={() => !isDark && onDarkModeToggle()}
        >
          Dark
        </Button>
      </ButtonGroup>
    </div>
  );
}
