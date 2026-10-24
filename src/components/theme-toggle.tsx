"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-transparent px-[14px] py-[7px] [font:inherit] tracking-normal text-foreground hover:border-muted"
    >
      <span className="size-2 rounded-full bg-foreground" />
      <span className="in-data-[theme=tartiner-dark]:hidden">Dark</span>
      <span className="hidden in-data-[theme=tartiner-dark]:inline">Light</span>
    </button>
  );
}
