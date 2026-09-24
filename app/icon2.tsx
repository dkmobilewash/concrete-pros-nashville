import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon512() {
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
        <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 124, color: "#ffffff" }}>CP</span>
        <div style={{ display: "flex", marginTop: 26, width: 180, height: 16, backgroundColor: "#1450a3", borderRadius: 8 }} />
      </div>
    ),
    { ...size }
  );
}
