import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          backgroundColor: "#0b1f33",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 800,
              fontSize: 44,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            CP
          </span>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              width: 64,
              height: 6,
              backgroundColor: "#1450a3",
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
