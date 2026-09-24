import { COMPANY } from "@/lib/constants";

/**
 * Shared visual used by both app/opengraph-image.tsx and
 * app/twitter-image.tsx. Kept as a plain function (not a special file
 * convention itself) so both routes can render identical branding without
 * duplicating the markup. ImageResponse/satori only supports a subset of
 * CSS (flexbox layout, no external stylesheets) so styles are inline.
 */
export function SocialCardContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0b1f33",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
          <span style={{ fontSize: 88, fontWeight: 800, color: "#ffffff" }}>Concrete</span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              backgroundColor: "#1450a3",
              padding: "6px 24px",
              textTransform: "uppercase",
            }}
          >
            Pros
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "4px solid #ffffff",
            fontSize: 36,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: 8,
            textTransform: "uppercase",
            alignSelf: "flex-start",
          }}
        >
          of Nashville
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", fontSize: 34, color: "#d7e6f7", maxWidth: 980 }}>
          Family-Owned Concrete Contractors Serving Greater Nashville
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#e08a1e",
              color: "#081627",
              fontSize: 30,
              fontWeight: 800,
              padding: "12px 28px",
              borderRadius: 8,
            }}
          >
            Free Estimates
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            {COMPANY.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
