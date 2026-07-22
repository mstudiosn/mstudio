import { ImageResponse } from "next/og";

export const alt = "M.Studio — Design, Branding, Développement Web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#111111",
          padding: "90px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 340,
            height: 340,
            borderRadius: "9999px",
            backgroundColor: "#facc15",
            opacity: 0.12,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "9999px",
              backgroundColor: "#facc15",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#facc15",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Design · Branding · Web
          </span>
        </div>

        <div style={{ display: "flex", color: "#ffffff", fontSize: 128, fontWeight: 700 }}>
          M.Studio
        </div>

        <div
          style={{
            display: "flex",
            color: "#a6a29a",
            fontSize: 34,
            marginTop: 20,
            maxWidth: 820,
          }}
        >
          Nous créons des marques. Pas juste des designs.
        </div>
      </div>
    ),
    { ...size }
  );
}
