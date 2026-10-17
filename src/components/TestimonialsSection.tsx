"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  treatment: string;
  rating: number;
  quote: string;
  avatarText: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Architect & Interior Designer",
    treatment: "Porcelain Veneers & Whitening",
    rating: 5,
    quote:
      "I was nervous about dental procedures my entire adult life. Dr. Carter and the Dentora team completely transformed my perspective. The 3D preview showed me exactly how my smile would look, and the final results exceeded all my hopes!",
    avatarText: "SM",
    avatarColor: "#0284c7",
  },
  {
    id: 2,
    name: "David Sterling",
    role: "Financial Consultant",
    treatment: "Titanium Implant Restoration",
    rating: 5,
    quote:
      "After a cycling accident I lost an anterior incisor. Dentora handled the surgery and custom ceramic crown in record time. Zero pain during surgery, and you can't tell which tooth is the implant. World-class technology!",
    avatarText: "DS",
    avatarColor: "#059669",
  },
  {
    id: 3,
    name: "Dr. Amanda Chen",
    role: "Pediatric Neurologist",
    treatment: "Invisalign Clear Aligners",
    rating: 5,
    quote:
      "As a physician myself, clinical hygiene, patient communication, and equipment quality matter deeply to me. Dentora’s operatory and digital workflow are unmatched anywhere in the state. Highly recommended!",
    avatarText: "AC",
    avatarColor: "#7c3aed",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <span className="pill-badge" style={{ marginBottom: "16px" }}>
            Patient Stories
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "12px",
            }}
          >
            Real Experiences, Radiant Smiles
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.05rem" }}>
            Over 2,000+ happy patients have trusted Dentora with their dental health.
          </p>
        </div>

        {/* Sliding Testimonial Card */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            background: "#fafaf8",
            borderRadius: "32px",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            padding: "48px 40px",
            boxShadow: "0 20px 48px rgba(0, 0, 0, 0.06)",
            position: "relative",
            minHeight: "320px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.5s ease",
          }}
          key={t.id}
          className="testimonial-card"
        >
          {/* Top Row: Stars and Quote Icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0284c7",
              }}
            >
              <Quote size={20} />
            </div>
          </div>

          {/* Quote */}
          <p
            style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
              lineHeight: 1.6,
              color: "#1e293b",
              fontWeight: 500,
              marginBottom: "32px",
              fontStyle: "normal",
            }}
          >
            “{t.quote}”
          </p>

          {/* Author Row & Slider Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: t.avatarColor,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                {t.avatarText}
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {t.name}
                  </span>
                  <CheckCircle size={15} color="#059669" />
                </div>
                <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                  {t.role} •{" "}
                  <span style={{ color: "#0284c7", fontWeight: 600 }}>
                    {t.treatment}
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={prevTestimonial}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0f172a",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0f172a";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#0f172a";
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#64748b",
                  padding: "0 4px",
                }}
              >
                {current + 1} / {testimonials.length}
              </span>

              <button
                onClick={nextTestimonial}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0f172a",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0f172a";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#0f172a";
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
