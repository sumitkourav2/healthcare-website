"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Clock,
  Shield,
  ArrowRight,
  Smile,
  Zap,
  CheckCircle,
} from "lucide-react";

interface ServicesExplorerProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface ServiceItem {
  id: string;
  category: "all" | "preventive" | "cosmetic" | "orthodontics" | "restorative";
  title: string;
  subtitle: string;
  description: string;
  time: string;
  price: string;
  badge?: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "checkup",
    category: "preventive",
    title: "Comprehensive Dental Checkup",
    subtitle: "Digital Diagnostics & Oral Cancer Screening",
    description:
      "Full examination using HD intraoral cameras and ultra-low radiation digital 3D panoramic imaging.",
    time: "45 mins",
    price: "From $95",
    badge: "Most Popular",
    features: ["Intraoral HD photography", "Plaque & tartar evaluation", "Gum health pocket mapping"],
  },
  {
    id: "cleaning",
    category: "preventive",
    title: "Ultrasonic Prophylaxis & Polish",
    subtitle: "Painless Air-Flow Stain Removal",
    description:
      "Gentle ultrasonic calculus removal and diamond polish powder that restores enamel brilliance.",
    time: "40 mins",
    price: "From $120",
    features: ["Subgingival biofilm removal", "Enamel fluoridation shield", "Fresh breath therapy"],
  },
  {
    id: "veneers",
    category: "cosmetic",
    title: "Handcrafted Porcelain Veneers",
    subtitle: "Custom Smile Architecture",
    description:
      "Ultra-thin custom ceramic shells bonded to front teeth for Hollywood-level aesthetics.",
    time: "2 sessions",
    price: "From $750/tooth",
    badge: "Aesthetic Choice",
    features: ["3D digital aesthetic mock-up", "Zero discoloration guarantee", "10-year durability"],
  },
  {
    id: "whitening",
    category: "cosmetic",
    title: "Zoom! Laser Teeth Whitening",
    subtitle: "Up to 8 Shades Whiter in 1 Hour",
    description:
      "Medical-grade laser light activation that gently removes coffee, wine, and aging discoloration.",
    time: "60 mins",
    price: "$299",
    features: ["Instant single-visit results", "Anti-sensitivity desensitizer", "Includes home touch-up kit"],
  },
  {
    id: "aligners",
    category: "orthodontics",
    title: "Clear Aligner Therapy (Invisalign)",
    subtitle: "Invisible Straightening",
    description:
      "Custom 3D printed transparent aligners that straighten teeth comfortably without metal wires.",
    time: "6-12 mos",
    price: "From $1,999",
    badge: "Discreet",
    features: ["iTero 3D digital scan", "Removable for meals", "Virtually undetectable"],
  },
  {
    id: "implants",
    category: "restorative",
    title: "Guided Titanium Implants",
    subtitle: "Permanent Tooth Replacement",
    description:
      "Surgically guided biocompatible titanium root integrated into jawbone with custom crown.",
    time: "Same-Day Ready",
    price: "From $1,450",
    badge: "Lifetime Warranty",
    features: ["CBCT 3D bone mapping", "Zero damage to adjacent teeth", "Natural chewing strength"],
  },
];

export default function ServicesExplorer({ onOpenBooking }: ServicesExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      style={{
        padding: "100px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <span className="pill-badge" style={{ marginBottom: "16px" }}>
            Our Clinical Services
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "16px",
            }}
          >
            World-Class Care Tailored to You
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748b",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            From preventative hygiene to transformative cosmetic smile makeovers,
            experience modern dentistry with zero stress.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { id: "all", label: "All Treatments" },
              { id: "preventive", label: "Preventive Care" },
              { id: "cosmetic", label: "Cosmetic & Whitening" },
              { id: "orthodontics", label: "Orthodontics" },
              { id: "restorative", label: "Implants & Restorations" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background:
                    activeCategory === cat.id ? "#0f172a" : "#f1f5f9",
                  color: activeCategory === cat.id ? "#ffffff" : "#475569",
                  boxShadow:
                    activeCategory === cat.id
                      ? "0 4px 14px rgba(15, 23, 42, 0.25)"
                      : "none",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              style={{
                background: "#fafaf8",
                borderRadius: "24px",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 38px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "rgba(2, 132, 199, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.07)";
              }}
            >
              {/* Badge if exists */}
              {service.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    background: "#e0f2fe",
                    color: "#0284c7",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                  }}
                >
                  {service.badge}
                </div>
              )}

              <div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "6px",
                    paddingRight: service.badge ? "80px" : "0",
                  }}
                >
                  {service.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#0284c7",
                    marginBottom: "14px",
                  }}
                >
                  {service.subtitle}
                </div>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#64748b",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  {service.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.84rem",
                        color: "#334155",
                      }}
                    >
                      <CheckCircle size={15} color="#0284c7" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}
                  >
                    Avg. Duration: {service.time}
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {service.price}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    background: "#0f172a",
                    color: "#ffffff",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0284c7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0f172a";
                  }}
                >
                  <span>Book Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
