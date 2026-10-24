import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Tartiner Labs | Quality software, spread across the world";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const geistRegular = await readFile(
  join(process.cwd(), "assets/Geist-Regular.ttf"),
);
const geistSemiBold = await readFile(
  join(process.cwd(), "assets/Geist-SemiBold.ttf"),
);
const geistMono = await readFile(
  join(process.cwd(), "assets/GeistMono-Regular.ttf"),
);

// Satori has no inline text flow, so each word is its own flex item and the
// column gap stands in for the space between words, tuned so line widths
// match the browser render of the design.
function words(text: string, color?: string) {
  return text.split(" ").map((word) => (
    <span key={word} style={{ color }}>
      {word}
    </span>
  ));
}

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 71,
        border: "1px solid #dbdee1",
        backgroundColor: "#fafcfe",
        color: "#18181b",
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="8,10 92,20 92,32 8,38" />
          <rect x="40" y="28" width="20" height="62" />
        </svg>
        <span style={{ fontSize: 30, fontWeight: 600 }}>Tartiner Labs</span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: 12,
          maxWidth: 960,
          fontSize: 84,
          fontWeight: 600,
          letterSpacing: "-0.045em",
          lineHeight: 0.98,
        }}
      >
        {words("Quality software,")}
        {words("spread across the world.", "#6a737a")}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ height: 2, backgroundColor: "#57768c" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: "#5c656b",
          }}
        >
          <span>tartinerlabs.com</span>
          <span>Singapore · 1.35° N</span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
        { name: "Geist", data: geistSemiBold, style: "normal", weight: 600 },
        { name: "Geist Mono", data: geistMono, style: "normal", weight: 400 },
      ],
    },
  );
}
