import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f4f3ef",
          color: "#2f2e2a",
          display: "flex",
          fontFamily: "Arial",
          height: "100%",
          padding: 48,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #dedbd1",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div
              style={{
                alignItems: "center",
                background: "#2f2e2a",
                borderRadius: 16,
                color: "#f4f3ef",
                display: "flex",
                fontSize: 34,
                fontWeight: 900,
                height: 72,
                justifyContent: "center",
                width: 72,
              }}
            >
              T
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 42, fontWeight: 900 }}>Terrano</div>
              <div style={{ color: "#777269", fontSize: 20, fontWeight: 700 }}>
                Máquinas que movem o campo
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ color: "#7cc928", fontSize: 24, fontWeight: 900 }}>
              MARKETPLACE AGRÍCOLA REGIONAL
            </div>
            <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 0.94, maxWidth: 980 }}>
              Aluguel de máquinas agrícolas com demanda e proposta.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
