import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — custom curtains and soft furnishings, Sydney`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08182c",
          padding: "72px 80px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {/* Top: mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <svg width="96" height="64" viewBox="0 0 96 64">
            <rect x="0" y="13" width="96" height="10" rx="2" fill="#f0d375" />
            <rect x="18" y="27" width="74" height="10" rx="2" fill="#dcb84f" />
            <rect x="36" y="41" width="52" height="10" rx="2" fill="#a8851d" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: 6,
                color: "#ffffff",
              }}
            >
              YIREH
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 5,
                color: "#e8d5a3",
                marginTop: 6,
              }}
            >
              TEXTILES &amp; SOURCING
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 90,
              height: 3,
              background: "#c9a227",
              marginBottom: 30,
            }}
          />
          <div
            style={{
              fontSize: 62,
              lineHeight: 1.1,
              color: "#ffffff",
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            Custom curtains &amp; soft furnishings, made in Sydney
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(226,235,246,0.72)",
              marginTop: 26,
            }}
          >
            Curtains · Roman Blinds · Upholstery · Cushions · Marine &amp; Campervan
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(226,235,246,0.72)",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>
            Servicing all of Sydney
          </div>
          <div style={{ display: "flex", color: "#d9b85c", fontWeight: 600 }}>
            {site.phone.display}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
