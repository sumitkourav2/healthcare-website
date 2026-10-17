"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Video, Calendar, Sparkles, Check, ArrowRight } from "lucide-react";

interface FeatureTreatmentProps {
  onOpenBooking: (doctorName?: string) => void;
}

export default function FeatureTreatmentSection({
  onOpenBooking,
}: FeatureTreatmentProps) {
  const [progress, setProgress] = useState(60);

  return (
    <section
      id="features"
      style={{
        padding: "80px 0 100px 0",
        backgroundColor: "#fafaf8",
        borderTop: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div className="container">
        {/* Pill Badge */}
        <div style={{ marginBottom: "28px" }}>
          <span className="pill-badge">Feature Treatment</span>
        </div>

        {/* 2-Column Split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="feature-treatment-grid"
        >
          {/* Left Column */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                lineHeight: "1.15",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#0f172a",
                marginBottom: "20px",
              }}
            >
              Advanced Dental Care <br />
              for a Healthier Smile
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.65",
                color: "#64748b",
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              Join hundreds of patients achieving healthier, brighter smiles through
              expert dental care and personalized treatments.
            </p>

            {/* Doctor Card matching screenshot exactly */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                background: "#ffffff",
                padding: "20px 24px",
                borderRadius: "24px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                maxWidth: "520px",
                position: "relative",
              }}
              className="doctor-card"
            >
              {/* Doctor Avatar with inset video bubble */}
              <div
                style={{
                  position: "relative",
                  width: "110px",
                  height: "110px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                }}
              >
                <Image
                  src="/images/dr_daniel.jpg"
                  alt="Dr. Daniel Carter"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />

                {/* Video / consultation mini badge in upper corner */}
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    right: "6px",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#0284c7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  }}
                  title="Virtual Consults Available"
                >
                  <Video size={13} />
                </div>
              </div>

              {/* Doctor Details */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    letterSpacing: "-0.01em",
                    marginBottom: "4px",
                  }}
                >
                  Dr. Daniel Carter
                </h3>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                  Lead Dental Specialist
                </div>

                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.85rem",
                    marginBottom: "12px",
                  }}
                >
                  <Star size={15} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ fontWeight: 700, color: "#0f172a" }}>4.9</span>
                  <span style={{ color: "#94a3b8" }}>[45+ reviews]</span>
                </div>

                {/* Quick Consultation Button */}
                <button
                  onClick={() => onOpenBooking("Dr. Daniel Carter")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#0284c7",
                    background: "#e0f2fe",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0284c7";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#e0f2fe";
                    e.currentTarget.style.color = "#0284c7";
                  }}
                >
                  <Calendar size={13} />
                  <span>Book with Dr. Carter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Operatory Image & Floating Badge */}
          <div
            style={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              minHeight: "440px",
              boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.14)",
              background: "#ffffff",
            }}
          >
            {/* Background Operatory Photo */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
              }}
            >
              <Image
                src="/images/dental_chair.jpg"
                alt="Modern Dental Operatory Equipment"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>

            {/* Floating Glass Stats Badge matching screenshot exactly */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: "20px 24px",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 14px 34px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* Top row: Checkups and Treatment time */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: "6px",
                    }}
                  >
                    Recommended Checkups per Year
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1,
                      }}
                    >
                      2
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#94a3b8",
                      }}
                    >
                      Visits
                    </span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: "6px",
                    }}
                  >
                    Average Treatment Time
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1,
                      }}
                    >
                      40
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#94a3b8",
                      }}
                    >
                      Mins
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom row: Today's Appointment Progress matching screenshot */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#475569",
                    marginBottom: "8px",
                  }}
                >
                  <span>Today's Appointment Progress</span>
                  <span style={{ color: "#0284c7", fontWeight: 700 }}>
                    {progress}%
                  </span>
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "4px",
                    background: "#e2e8f0",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      borderRadius: "4px",
                      background:
                        "linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%)",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .feature-treatment-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 500px) {
          .doctor-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
