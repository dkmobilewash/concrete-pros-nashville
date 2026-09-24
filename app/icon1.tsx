import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon192() {
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
        <span style={{ fontFamily: "sans-serif", fontWeight: 800, fontSize: 46, color: "#ffffff" }}>CP</span>
        <div style={{ display: "flex", marginTop: 10, width: 68, height: 6, backgroundColor: "#1450a3", borderRadius: 3 }} />
      </div>
    ),
    { ...size }
  );
}
