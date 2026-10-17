"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface HeroSliderProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface SlideData {
  id: number;
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText: string;
  image: string;
  cardImage: string;
  cardText: string;
  rating: string;
  reviews: string;
  treatments: string[];
}

const slides: SlideData[] = [
  {
    id: 1,
    tagline: "Your Teeth Our Science",
    titleLine1: "Family-Friendly",
    titleLine2: "Dental Care",
    description:
      "Permanent natural-looking solutions to replace missing teeth and restore confident healthy smiles.",
    ctaText: "Book an Appointment",
    image: "/images/hero1.jpg",
    cardImage: "/images/hero1.jpg",
    cardText: "Restore natural healthy confident dental growth.",
    rating: "4.9",
    reviews: "750+ reviews",
    treatments: [
      "Dental Checkup",
      "Tooth Cleaning",
      "Tooth Filling",
      "Gum Treatment",
      "Retainers",
    ],
  },
  {
    id: 2,
    tagline: "Precision Aesthetic Dentistry",
    titleLine1: "Radiant Cosmetic",
    titleLine2: "Smile Design",
    description:
      "Digital 3D shade matching, porcelain veneers, and safe laser whitening for a celebrity-grade smile.",
    ctaText: "Explore Cosmetic Smiles",
    image: "/images/hero2.jpg",
    cardImage: "/images/hero2.jpg",
    cardText: "Advanced digital shade analysis for luminous porcelain finish.",
    rating: "4.98",
    reviews: "1,200+ cases",
    treatments: [
      "Laser Whitening",
      "Porcelain Veneers",
      "Invisalign Aligners",
      "Enamel Contouring",
      "Smile Makeover",
    ],
  },
  {
    id: 3,
    tagline: "Zero-Pain Restorations",
    titleLine1: "Modern Implant &",
    titleLine2: "Oral Surgery",
    description:
      "Precision guided titanium implants and permanent same-day crowns backed by lifelong clinical excellence.",
    ctaText: "Schedule Implant Consult",
    image: "/images/hero3.jpg",
    cardImage: "/images/hero3.jpg",
    cardText: "3D CBCT guided computer surgery with 99.4% success rate.",
    rating: "5.0",
    reviews: "520+ implants",
    treatments: [
      "Single Tooth Implants",
      "All-on-4 Bridges",
      "Bone Grafting",
      "Same-Day Crowns",
      "Wisdom Teeth",
    ],
  },
];

export default function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number, direction: "next" | "prev" = "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setCurrentSlide(index);
    setActiveTreatment(0);
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const handleNext = () => {
    const nextIdx = (currentSlide + 1) % slides.length;
    goToSlide(nextIdx, "next");
  };

  const handlePrev = () => {
    const prevIdx = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIdx, "prev");
  };

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isHovered]);

  const slide = slides[currentSlide];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0c0f14",
        color: "#ffffff",
        overflow: "hidden",
        paddingTop: "100px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images with Sliding / Crossfade Animation */}
      {slides.map((s, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={s.id}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? "scale(1)"
                : slideDirection === "next"
                ? "scale(1.06)"
                : "scale(0.96)",
              transition:
                "opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <Image
              src={s.image}
              alt={s.titleLine1}
              fill
              priority={index === 0}
              style={{
                objectFit: "cover",
                objectPosition: "center 28%",
              }}
            />
            {/* Cinematic Gradient Overlays for perfect legibility */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to right, rgba(12, 15, 20, 0.88) 0%, rgba(12, 15, 20, 0.6) 45%, rgba(12, 15, 20, 0.25) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "240px",
                background:
                  "linear-gradient(to top, #0c0f14 0%, rgba(12, 15, 20, 0.8) 50%, transparent 100%)",
              }}
            />
          </div>
        );
      })}

      {/* Main Content Area */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Hero Column */}
          <div
            style={{
              animation: "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            key={`text-${currentSlide}`}
          >
            {/* Headline matching screenshot typography */}
            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.2vw, 4.75rem)",
                lineHeight: "1.08",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "20px",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              <span style={{ display: "block" }}>{slide.titleLine1}</span>
              <span
                style={{
                  display: "block",
                  color: "#f8fafc",
                  fontWeight: 600,
                }}
              >
                {slide.titleLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                lineHeight: "1.65",
                color: "#e2e8f0",
                maxWidth: "520px",
                marginBottom: "36px",
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              {slide.description}
            </p>

            {/* CTA Button matching screenshot with circular arrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap",
                marginBottom: "44px",
              }}
            >
              <button
                onClick={() => onOpenBooking(slide.treatments[activeTreatment])}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "10px 12px 10px 28px",
                  borderRadius: "9999px",
                  background: "#ffffff",
                  color: "#111827",
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.35), 0 0 20px rgba(56, 189, 248, 0.3)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 36px rgba(0, 0, 0, 0.4), 0 0 30px rgba(56, 189, 248, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.35), 0 0 20px rgba(56, 189, 248, 0.3)";
                }}
              >
                <span>{slide.ctaText}</span>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>

            {/* Floating Mini Card (as seen on left in screenshot) */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                padding: "12px 18px",
                borderRadius: "20px",
                background: "rgba(17, 24, 39, 0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.35)",
                maxWidth: "380px",
                animation: "floatGentle 4s ease-in-out infinite",
              }}
            >
              {/* Mini Card Thumbnail with play badge */}
              <div
                style={{
                  position: "relative",
                  width: "68px",
                  height: "56px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={slide.cardImage}
                  alt="Video treatment preview"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0284c7",
                    }}
                  >
                    <Play size={10} fill="#0284c7" />
                  </div>
                </div>
              </div>

              {/* Text & Rating */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "#f1f5f9",
                    lineHeight: "1.35",
                    marginBottom: "4px",
                  }}
                >
                  {slide.cardText}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                    <Star size={12} fill="#f59e0b" color="#f59e0b" />
                    <span style={{ color: "#ffffff", fontWeight: 700 }}>
                      {slide.rating}
                    </span>
                  </div>
                  <span>[{slide.reviews}]</span>
                </div>
              </div>

              {/* Arrow link */}
              <button
                onClick={() => onOpenBooking()}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  transition: "background 0.2s ease",
                }}
                aria-label="View procedure"
              >
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Hero Column: Pill Tags matching screenshot */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "14px",
              paddingRight: "10px",
            }}
            className="hero-pills-col"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "flex-end",
              }}
            >
              {slide.treatments.map((treatment, idx) => {
                const isSelected = idx === activeTreatment;
                return (
                  <button
                    key={treatment}
                    onClick={() => {
                      setActiveTreatment(idx);
                      onOpenBooking(treatment);
                    }}
                    style={{
                      padding: "10px 24px",
                      borderRadius: "9999px",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      background: isSelected
                        ? "#ffffff"
                        : "rgba(30, 36, 45, 0.65)",
                      color: isSelected ? "#0f172a" : "#f1f5f9",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: isSelected
                        ? "1px solid #ffffff"
                        : "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: isSelected
                        ? "0 8px 24px rgba(0, 0, 0, 0.35), 0 0 15px rgba(255,255,255,0.4)"
                        : "0 4px 14px rgba(0, 0, 0, 0.15)",
                      transform: isSelected
                        ? "scale(1.05) translateX(-8px)"
                        : "scale(1) translateX(0)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.color = "#ffffff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background =
                          "rgba(30, 36, 45, 0.65)";
                        e.currentTarget.style.color = "#f1f5f9";
                      }
                    }}
                  >
                    {isSelected && (
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#0284c7",
                          display: "inline-block",
                        }}
                      />
                    )}
                    <span>{treatment}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching screenshot exactly */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          background: "rgba(12, 15, 20, 0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "18px 24px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Left Tagline */}
          <div
            style={{
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "#94a3b8",
              letterSpacing: "0.04em",
              textTransform: "capitalize",
            }}
          >
            {slide.tagline}
          </div>

          {/* Center Slider Controls (Preview  01 / 03  Next) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#cbd5e1",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
              }}
            >
              <ChevronLeft size={16} />
              <span>Preview</span>
            </button>

            {/* Slide Index Counter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ color: "#38bdf8" }}>
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span style={{ color: "#64748b" }}>/</span>
              <span style={{ color: "#94a3b8" }}>
                {String(slides.length).padStart(2, "0")}
              </span>

              {/* Mini dots */}
              <div style={{ display: "flex", gap: "5px", marginLeft: "8px" }}>
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => goToSlide(i)}
                    style={{
                      width: i === currentSlide ? "18px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background:
                        i === currentSlide ? "#38bdf8" : "rgba(255,255,255,0.25)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#cbd5e1",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
              }}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Right Scroll Indicator */}
          <a
            href="#about"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.82rem",
              color: "#94a3b8",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            <span>Scroll for More</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-pills-col {
            align-items: flex-start !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
