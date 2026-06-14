import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #f59e0b 0%, #c2410c 100%)",
          color: "#fff",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: -0.5,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        PFB
      </div>
    ),
    { ...size }
  );
}
