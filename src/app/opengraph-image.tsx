import { ImageResponse } from "next/og";

export const alt = "Guide de voyage Burundi. Expériences authentiques au cœur de l'Afrique.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image OpenGraph aux couleurs du guide : crème, terracotta, filets pointillés. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FBF9F5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "#A85434",
            color: "#FBF9F5",
            padding: "10px 32px",
            fontSize: 24,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Guide de voyage
        </div>

        <div
          style={{
            fontSize: 190,
            fontWeight: 700,
            color: "#A85434",
            letterSpacing: "0.05em",
            marginTop: 16,
          }}
        >
          BURUNDI
        </div>

        <div
          style={{
            width: 640,
            borderTop: "4px dashed #A85434",
            opacity: 0.6,
            marginTop: 8,
          }}
        />

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#75763C",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Expériences authentiques au cœur de l&apos;Afrique
        </div>
      </div>
    ),
    { ...size }
  );
}
