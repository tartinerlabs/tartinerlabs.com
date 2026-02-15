import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Tartiner Labs | Building Software That Connects";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const geistRegular = await readFile(
    join(process.cwd(), "assets/Geist-Regular.ttf"),
  );
  const geistItalic = await readFile(
    join(process.cwd(), "assets/Geist-Italic.ttf"),
  );
  const geistBold = await readFile(
    join(process.cwd(), "assets/Geist-Bold.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafb",
        fontFamily: "Geist",
        padding: "60px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#2e2d33",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}
        >
          Building Software
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#6b7fa0",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}
        >
          That Connects
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 400,
            color: "#7e8189",
            textAlign: "center",
            marginTop: 24,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ fontStyle: "italic" }}>Tartiner</span>
            <span>&nbsp;means &ldquo;to spread&rdquo; in French. We build</span>
          </div>
          <div>software that spreads warmth, connection, and clarity.</div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 48,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#2e2d33",
          }}
        >
          Tartiner Labs
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#7e8189",
          }}
        >
          &bull; Singapore
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistItalic,
          style: "italic",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
