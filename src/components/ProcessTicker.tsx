"use client";

import React from "react";

const steps = [
  "Smile Assessment",
  "Care Planning",
  "Treatment Process",
  "Dental Maintenance",
  "Precision Diagnostics",
  "Comfort Sedation",
];

export default function ProcessTicker() {
  const bars = Array.from({ length: 18 });

  return (
    <div
      style={{
        width: "100%",
        background: "#ffffff",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
        padding: "16px 0",
        position: "relative",
      }}
    >
      {/* Subtle fade edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100%",
          background:
            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100%",
          background:
            "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marqueeSlide 35s linear infinite",
        }}
      >
        {/* Repeat twice for continuous seamless loop */}
        {[...steps, ...steps].map((step, idx) => (
          <div
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "24px",
              padding: "0 28px",
            }}
          >
            {/* Ribbed bar marks as seen in the screenshot */}
            <div
              style={{
                display: "inline-flex",
                gap: "3px",
                alignItems: "center",
              }}
            >
              {bars.map((_, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: i % 4 === 0 ? "14px" : "8px",
                    backgroundColor: i % 4 === 0 ? "#cbd5e1" : "#e2e8f0",
                    borderRadius: "1px",
                  }}
                />
              ))}
            </div>

            {/* Step text */}
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "#1e293b",
                whiteSpace: "nowrap",
                textTransform: "capitalize",
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
