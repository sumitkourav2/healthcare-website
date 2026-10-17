"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, HeartPulse, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0 80px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        {/* Pill Badge */}
        <div style={{ marginBottom: "28px" }}>
          <span className="pill-badge">About Us</span>
        </div>

        {/* Top Split: Avatars & Headline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: "40px",
            alignItems: "flex-start",
            marginBottom: "60px",
          }}
          className="about-headline-grid"
        >
          {/* Avatar Cards as shown in screenshot */}
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "90px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                border: "2px solid #ffffff",
              }}
            >
              <Image
                src="/images/dr_daniel.jpg"
                alt="Patient Smile"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                width: "72px",
                height: "90px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                border: "2px solid #ffffff",
              }}
            >
              <Image
                src="/images/hero1.jpg"
                alt="Patient Smile"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
          </div>

          {/* Main Statement matching screenshot typography */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
                lineHeight: "1.2",
                letterSpacing: "-0.03em",
                maxWidth: "880px",
              }}
            >
              <span
                style={{
                  color: "#0f172a",
                  fontWeight: 700,
                  display: "inline",
                }}
              >
                We deliver personalized dental treatments with modern technology{" "}
              </span>
              <span
                style={{
                  color: "#94a3b8",
                  fontWeight: 500,
                  display: "inline",
                }}
              >
                and gentle care ensuring healthy confident smiles for every patient.
              </span>
            </h2>
          </div>
        </div>

        {/* Lower Row: Stats & Clinical Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="about-lower-grid"
        >
          {/* Left Stats Column */}
          <div>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#64748b",
                marginBottom: "28px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Thousands Trust Us for Smiles!
            </div>

            {/* Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginBottom: "36px",
              }}
              className="stats-grid"
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0f172a",
                    lineHeight: "1",
                    marginBottom: "8px",
                  }}
                >
                  98%
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#64748b",
                  }}
                >
                  Satisfaction Rate
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0f172a",
                    lineHeight: "1",
                    marginBottom: "8px",
                  }}
                >
                  2k+
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#64748b",
                  }}
                >
                  Smiles Transformed
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#0f172a",
                    lineHeight: "1",
                    marginBottom: "8px",
                  }}
                >
                  4.9*
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#64748b",
                  }}
                >
                  Customer Rating
                </div>
              </div>
            </div>

            {/* Feature Bullets */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                paddingTop: "20px",
                borderTop: "1px solid #f1f5f9",
              }}
            >
              {[
                "Certified Master Clinicians & Board Specialists",
                "Ultra-Low Radiation 3D Digital Imaging",
                "Virtually Painless Computer-Assisted Injections",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#334155",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  <CheckCircle2 size={18} color="#0284c7" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image matching screenshot */}
          <div
            style={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              height: "360px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Image
              src="/images/hero2.jpg"
              alt="Dentist and Patient Consultation"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                padding: "14px 20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ShieldCheck size={22} color="#0284c7" />
                <div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    100% Gentle Promise
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    Anxiety-free relaxed appointments
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#0284c7",
                  background: "#e0f2fe",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                }}
              >
                Top Rated 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-headline-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .about-lower-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
