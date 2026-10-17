"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#0c0f14",
        color: "#ffffff",
        padding: "80px 0 40px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container">
        {/* Top Banner / Call to Action Strip */}
        <div
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "70px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#38bdf8",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <span>Accepting New Patients This Month</span>
            </div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Ready to restore your confident smile?
            </h3>
          </div>

          <button
            onClick={onOpenBooking}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              borderRadius: "9999px",
              background: "#ffffff",
              color: "#0f172a",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow =
                "0 12px 36px rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span>Book Consultation Today</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 4-Column Footer Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "48px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#0284c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                >
                  <path d="M4.5 10.5C3.6 7 4.2 3.8 7 3c2.5-.7 4.2 1.3 5 3 .8-1.7 2.5-3.7 5-3 2.8.8 3.4 4 2.5 7.5-.9 3.5-2.5 7.5-3.5 10.5-.6 1.8-2 3-3.8 3h-.4c-1.8 0-3.2-1.2-3.8-3-1-3-2.6-7-3.5-10.5Z" />
                </svg>
              </div>
              <span>Dentora</span>
            </div>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "320px",
              }}
            >
              Family-friendly modern dental care blending compassionate patient
              artistry with next-generation 3D laser precision.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                color: "#38bdf8",
              }}
            >
              <ShieldCheck size={18} />
              <span>ADA Certified & HIPAA Compliant Facility</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#f8fafc",
              }}
            >
              Treatments
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.9rem",
                color: "#94a3b8",
              }}
            >
              <li>
                <a href="#services">General Dental Checkup</a>
              </li>
              <li>
                <a href="#services">Laser Teeth Whitening</a>
              </li>
              <li>
                <a href="#services">Porcelain Ceramic Veneers</a>
              </li>
              <li>
                <a href="#services">Invisalign Clear Aligners</a>
              </li>
              <li>
                <a href="#services">Guided Dental Implants</a>
              </li>
              <li>
                <a href="#services">Emergency Tooth Care</a>
              </li>
            </ul>
          </div>

          {/* Hours & Availability */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#f8fafc",
              }}
            >
              Opening Hours
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.88rem",
                color: "#94a3b8",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Mon – Thu:</span>
                <span style={{ color: "#ffffff", fontWeight: 600 }}>
                  8:00 AM – 7:00 PM
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Friday:</span>
                <span style={{ color: "#ffffff", fontWeight: 600 }}>
                  8:00 AM – 5:00 PM
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Saturday:</span>
                <span style={{ color: "#ffffff", fontWeight: 600 }}>
                  9:00 AM – 2:00 PM
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Sunday:</span>
                <span style={{ color: "#ef4444", fontWeight: 600 }}>
                  Emergency Only
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#f8fafc",
              }}
            >
              Get in Touch
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                fontSize: "0.9rem",
                color: "#94a3b8",
              }}
            >
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>450 Health Avenue, Suite 400, Metropolitan Medical Center</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={18} color="#38bdf8" />
                <a href="tel:+18003368672" style={{ color: "#ffffff", fontWeight: 600 }}>
                  +1 (800) 336-8672
                </a>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Mail size={18} color="#38bdf8" />
                <span>care@dentoraclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "0.82rem",
            color: "#64748b",
          }}
        >
          <div>
            © 2026 Dentora Dental Care. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Compliance</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}
