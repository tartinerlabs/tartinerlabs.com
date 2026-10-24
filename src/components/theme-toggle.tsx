"use client";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = root.dataset.theme !== "tartiner-dark";
    root.dataset.theme = dark ? "tartiner-dark" : "tartiner";
    try {
      localStorage.setItem("tartiner-theme", dark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-transparent px-[14px] py-[7px] [font:inherit] tracking-normal text-foreground hover:border-muted"
    >
      <span className="size-2 rounded-full bg-foreground" />
      <span className="in-data-[theme=tartiner-dark]:hidden">Dark</span>
      <span className="hidden in-data-[theme=tartiner-dark]:inline">Light</span>
    </button>
  );
}
