"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section
      style={{
        padding: "90px 0",
        backgroundColor: "#fafaf8",
        borderTop: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 48px auto",
          }}
        >
          <span className="pill-badge" style={{ marginBottom: "16px" }}>
            Real Clinical Results
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.6vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "16px",
            }}
          >
            Interactive Smile Transformation
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Drag the slider to see how our combination of Invisalign aligners and
            laser porcelain whitening restores balance, symmetry, and natural glow.
          </p>
        </div>

        {/* Draggable Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: "relative",
            maxWidth: "960px",
            height: "480px",
            margin: "0 auto",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.15)",
            cursor: "ew-resize",
            userSelect: "none",
          }}
        >
          {/* AFTER Image (Full background) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
            }}
          >
            <Image
              src="/images/hero2.jpg"
              alt="After Dental Whitening and Alignment"
              fill
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
            {/* After Tag */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(2, 132, 199, 0.85)",
                color: "#ffffff",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.85rem",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              }}
            >
              AFTER TREATMENT
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              filter: "sepia(25%) brightness(0.9) contrast(0.95)",
            }}
          >
            <Image
              src="/images/hero1.jpg"
              alt="Before Dental Treatment"
              fill
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
            {/* Before Tag */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                background: "rgba(15, 23, 42, 0.85)",
                color: "#ffffff",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.85rem",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              }}
            >
              BEFORE TREATMENT
            </div>
          </div>

          {/* Slider Divider Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              width: "4px",
              background: "#ffffff",
              boxShadow: "0 0 12px rgba(0,0,0,0.4)",
              transform: "translateX(-50%)",
            }}
          >
            {/* Center Handle Knob */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0284c7",
              }}
            >
              <MoveHorizontal size={22} />
            </div>
          </div>

          {/* Bottom Hint */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(15, 23, 42, 0.75)",
              color: "#f8fafc",
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
              pointerEvents: "none",
            }}
          >
            ↔ Drag left or right to compare results
          </div>
        </div>
      </div>
    </section>
  );
}
