import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Privacy | Tartiner Labs";
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        <span
          style={{ fontFamily: "Geist Mono", fontSize: 26, color: "#57768c" }}
        >
          /privacy
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span
          style={{
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
        >
          Privacy
        </span>
        {/* Satori spaces words slightly wider than browsers, so the design's
            line breaks are set explicitly. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 34,
            lineHeight: 1.35,
            color: "#5c656b",
          }}
        >
          <span>
            This site has no accounts, forms or cookies of our own. We
          </span>
          <span>
            use anonymous analytics to see which pages are visited and
          </span>
          <span>how fast they load.</span>
        </div>
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
          <span>tartinerlabs.com/privacy</span>
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
