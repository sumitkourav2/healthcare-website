"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Phone, Menu, X, Calendar } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 24px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderRadius: "9999px",
          background: scrolled
            ? "rgba(17, 20, 24, 0.85)"
            : "rgba(17, 20, 24, 0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: scrolled
            ? "0 12px 36px rgba(0, 0, 0, 0.35)"
            : "0 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#ffffff",
            fontSize: "1.35rem",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(56, 189, 248, 0.5)",
            }}
          >
            {/* Stylized Tooth Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 10.5C3.6 7 4.2 3.8 7 3c2.5-.7 4.2 1.3 5 3 .8-1.7 2.5-3.7 5-3 2.8.8 3.4 4 2.5 7.5-.9 3.5-2.5 7.5-3.5 10.5-.6 1.8-2 3-3.8 3h-.4c-1.8 0-3.2-1.2-3.8-3-1-3-2.6-7-3.5-10.5Z" />
            </svg>
          </div>
          <span>Dentora</span>
        </a>

        {/* Center Pill Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "6px",
            background: "rgba(255, 255, 255, 0.08)",
            padding: "4px 8px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
          className="desktop-nav"
        >
          {[
            { label: "Home", href: "#" },
            { label: "Services", href: "#services" },
            { label: "About Us", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Testimonial", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: idx === 0 ? "#ffffff" : "#cbd5e1",
                background:
                  idx === 0
                    ? "rgba(255, 255, 255, 0.18)"
                    : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (idx !== 0) {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (idx !== 0) {
                  e.currentTarget.style.color = "#cbd5e1";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={onOpenBooking}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "9999px",
              background: "#ffffff",
              color: "#111827",
              fontSize: "0.875rem",
              fontWeight: 600,
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 255, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.15)";
            }}
          >
            <Phone size={14} color="#0284c7" />
            <span>Book a Call</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              color: "#ffffff",
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: "12px",
            background: "rgba(17, 20, 24, 0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          {[
            { label: "Home", href: "#" },
            { label: "Services", href: "#services" },
            { label: "About Us", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Testimonial", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#f8fafc",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "8px 12px",
                borderRadius: "8px",
                display: "block",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            style={{
              marginTop: "8px",
              padding: "12px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Calendar size={16} />
            <span>Schedule Appointment</span>
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
