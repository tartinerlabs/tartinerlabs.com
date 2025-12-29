"use client";

interface ColorSwatchProps {
  name: string;
  cssVar: string;
  textVar?: string;
}

function ColorSwatch({ name, cssVar, textVar }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex h-20 w-full items-end justify-start rounded-lg p-3 shadow-sm"
        style={{
          backgroundColor: `var(${cssVar})`,
          color: textVar ? `var(${textVar})` : undefined,
        }}
      >
        <span
          className="text-xs font-medium"
          style={{
            color: textVar
              ? `var(${textVar})`
              : name.includes("foreground") ||
                  name === "Accent" ||
                  name === "Secondary" ||
                  name === "Danger"
                ? "var(--snow)"
                : "var(--eclipse)",
          }}
        >
          {cssVar}
        </span>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

interface ColorEntry {
  name: string;
  cssVar: string;
  textVar?: string;
}

export function ColorPalette() {
  const colors: Record<string, ColorEntry[]> = {
    "Core Colors": [
      { name: "Background", cssVar: "--background" },
      { name: "Foreground", cssVar: "--foreground" },
      { name: "Surface", cssVar: "--surface" },
      { name: "Overlay", cssVar: "--overlay" },
      { name: "Muted", cssVar: "--muted" },
      { name: "Default", cssVar: "--default" },
    ],
    "Brand Colors": [
      {
        name: "Accent",
        cssVar: "--accent",
        textVar: "--accent-foreground",
      },
      {
        name: "Secondary",
        cssVar: "--secondary",
        textVar: "--secondary-foreground",
      },
    ],
    "Semantic Colors": [
      {
        name: "Success",
        cssVar: "--success",
        textVar: "--success-foreground",
      },
      {
        name: "Warning",
        cssVar: "--warning",
        textVar: "--warning-foreground",
      },
      {
        name: "Danger",
        cssVar: "--danger",
        textVar: "--danger-foreground",
      },
    ],
    "UI Colors": [
      { name: "Border", cssVar: "--border" },
      { name: "Separator", cssVar: "--separator" },
      { name: "Focus", cssVar: "--focus" },
      { name: "Link", cssVar: "--link" },
    ],
  };

  return (
    <div className="flex flex-col gap-8">
      {Object.entries(colors).map(([category, swatches]) => (
        <section key={category} className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {swatches.map((swatch) => (
              <ColorSwatch
                key={swatch.cssVar}
                name={swatch.name}
                cssVar={swatch.cssVar}
                textVar={swatch.textVar}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
