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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <path
              d="M16 14 L32 34"
              stroke="#ffffff"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            <path
              d="M9 22 L55 22"
              stroke="#c9a227"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <path
              d="M48 14 L32 34"
              stroke="#ffffff"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            <path
              d="M32 33 L32 51"
              stroke="#ffffff"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
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
                fontSize: 15,
                letterSpacing: 10,
                color: "#d9b85c",
                marginTop: 6,
              }}
            >
              TEXTILES
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
            Custom curtains &amp; soft furnishings, made in Western Sydney
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(226,235,246,0.72)",
              marginTop: 26,
            }}
          >
            Curtains · Blinds · Upholstery · Cushions · Marine &amp; Campervan
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
            Penrith, NSW · Servicing all of Sydney
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
