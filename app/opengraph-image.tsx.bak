import { ImageResponse } from "next/og";

export const alt = "ARMES — AI로 일상을 바꾸는 서비스 기업";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           "100%",
          height:          "100%",
          display:         "flex",
          flexDirection:   "column",
          justifyContent:  "center",
          alignItems:      "flex-start",
          background:      "#09090B",
          padding:         "80px",
          fontFamily:      "system-ui, -apple-system, sans-serif",
          position:        "relative",
          overflow:        "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div style={{
          position: "absolute", top: -120, right: -120,
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49,130,246,0.25) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: 200,
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49,130,246,0.12) 0%, transparent 70%)",
        }} />

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* Logo */}
        <div style={{
          display:        "flex",
          alignItems:     "center",
          gap:            14,
          marginBottom:   48,
        }}>
          <div style={{
            width:           48, height: 48,
            borderRadius:    14,
            background:      "linear-gradient(135deg, #3182F6, #1B64DA)",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
          }}>
            {/* Triangle icon */}
            <div style={{
              width: 0, height: 0,
              borderLeft:   "11px solid transparent",
              borderRight:  "11px solid transparent",
              borderBottom: "18px solid rgba(255,255,255,0.95)",
              marginTop:    -4,
            }} />
          </div>
          <span style={{ color: "#fff", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            ARMES
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          color:          "#fff",
          fontSize:       68,
          fontWeight:     800,
          lineHeight:     1.08,
          letterSpacing:  -2,
          margin:         0,
          marginBottom:   24,
          maxWidth:       680,
        }}>
          AI로
          <br />
          <span style={{
            background:           "linear-gradient(135deg, #5B9BFF 0%, #3182F6 50%, #1B64DA 100%)",
            WebkitBackgroundClip: "text",
            color:                "transparent",
          }}>
            일상을 바꾸는
          </span>
          <br />
          서비스 기업
        </h1>

        {/* Sub */}
        <p style={{
          color:        "rgba(161,161,170,1)",
          fontSize:     24,
          margin:       0,
          marginBottom: 48,
          maxWidth:     560,
          lineHeight:   1.6,
        }}>
          SellerAI · RewardTalk · TravelMoa 등 AI 서비스
        </p>

        {/* Technology chips */}
        <div style={{ display: "flex", gap: 12 }}>
          {["AI", "Automation", "Vision", "Location"].map((t) => (
            <div key={t} style={{
              display:      "flex",
              padding:      "8px 18px",
              borderRadius: 40,
              background:   "rgba(49,130,246,0.12)",
              border:       "1px solid rgba(49,130,246,0.30)",
              color:        "#5B9BFF",
              fontSize:     18,
              fontWeight:   600,
            }}>
              {t}
            </div>
          ))}
        </div>

        {/* Domain badge */}
        <div style={{
          position:    "absolute",
          bottom:      60,
          right:       80,
          padding:     "10px 20px",
          borderRadius: 40,
          background:  "rgba(255,255,255,0.06)",
          border:      "1px solid rgba(255,255,255,0.1)",
          color:       "rgba(161,161,170,1)",
          fontSize:    16,
          fontWeight:  500,
        }}>
          armes.co.kr
        </div>
      </div>
    ),
    { ...size }
  );
}
