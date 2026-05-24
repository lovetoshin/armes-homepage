import { ImageResponse } from "next/og";

export const alt = "ARMES — 차세대 로컬 플랫폼";
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
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: 200,
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
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
            background:      "linear-gradient(135deg, #8B5CF6, #6366F1)",
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
          일상의 소비와
          <br />
          <span style={{
            background:           "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #c4b5fd 100%)",
            WebkitBackgroundClip: "text",
            color:                "transparent",
          }}>
            지역을 연결하는
          </span>
          <br />
          로컬 플랫폼
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
          RewardTalk · Seller AI · 지역 공동구매 · 매장 SaaS
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            ["500+", "파트너 매장"],
            ["5만+", "앱 다운로드"],
            ["12개", "서비스 지역"],
          ].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#fff", fontSize: 30, fontWeight: 700 }}>{val}</span>
              <span style={{ color: "rgba(113,113,122,1)", fontSize: 14, fontWeight: 500 }}>{label}</span>
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
