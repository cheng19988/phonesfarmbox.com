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
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "linear-gradient(135deg, #f59e0b 0%, #c2410c 100%)",
          color: "#fff",
          fontSize: 56,
          fontWeight: 800,
          letterSpacing: -2,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        PFB
      </div>
    ),
    { ...size }
  );
}
