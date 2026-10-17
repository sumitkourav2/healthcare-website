"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Download,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDoctor?: string;
}

const availableDoctors = [
  {
    name: "Dr. Daniel Carter",
    specialty: "Lead Dental Specialist & Aesthetic Architect",
    image: "/images/dr_daniel.jpg",
  },
  {
    name: "Dr. Elena Vance",
    specialty: "Orthodontics & Invisalign Master",
    image: "/images/hero2.jpg",
  },
  {
    name: "Dr. Marcus Lin",
    specialty: "Implantologist & Oral Rehabilitation",
    image: "/images/hero3.jpg",
  },
];

const availableTreatments = [
  "Comprehensive Dental Checkup",
  "Tooth Cleaning & Air-Flow Polish",
  "Laser Teeth Whitening",
  "Handcrafted Porcelain Veneers",
  "Invisalign Clear Aligners",
  "Guided Titanium Implant",
  "Gum Disease Treatment",
  "Same-Day Ceramic Crown",
  "General Consultation & Assessment",
];

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "11:45 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

export default function BookingModal({
  isOpen,
  onClose,
  initialService,
  initialDoctor,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState(
    initialService || "Comprehensive Dental Checkup"
  );
  const [doctor, setDoctor] = useState(initialDoctor || "Dr. Daniel Carter");
  const [date, setDate] = useState("2026-10-22");
  const [time, setTime] = useState("10:30 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback if unavailable
    }
  };

  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dentora Dental Clinic//Appointment Schedule//EN
BEGIN:VEVENT
SUMMARY:Dentora Appointment: ${treatment} with ${doctor}
DESCRIPTION:Your dental care session at Dentora. Patient: ${name || "Valued Patient"}
DTSTART:20261022T103000
DTEND:20261022T113000
LOCATION:Dentora Clinic, 450 Health Avenue, Suite 400
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Dentora_Appointment.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "640px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#ffffff",
          borderRadius: "28px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.8)",
          padding: "36px 32px",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748b",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e2e8f0";
            e.currentTarget.style.color = "#0f172a";
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0284c7",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "6px",
                }}
              >
                <Sparkles size={14} />
                <span>Instant Patient Booking</span>
              </div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}
              >
                Schedule Your Visit
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                Select your preferred doctor, time slot, and treatment below.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Treatment */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Select Treatment / Service
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "14px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.95rem",
                    color: "#0f172a",
                    background: "#f8fafc",
                    outline: "none",
                  }}
                >
                  {availableTreatments.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Doctor Selection */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Preferred Specialist
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                  }}
                >
                  {availableDoctors.map((doc) => {
                    const isSelected = doctor === doc.name;
                    return (
                      <div
                        key={doc.name}
                        onClick={() => setDoctor(doc.name)}
                        style={{
                          padding: "12px 10px",
                          borderRadius: "14px",
                          border: isSelected
                            ? "2px solid #0284c7"
                            : "1px solid #e2e8f0",
                          background: isSelected ? "#f0f9ff" : "#ffffff",
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: isSelected ? "#0284c7" : "#0f172a",
                            marginBottom: "2px",
                          }}
                        >
                          {doc.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "#64748b",
                            lineHeight: 1.2,
                          }}
                        >
                          {doc.specialty.split("&")[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#334155",
                      marginBottom: "8px",
                    }}
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "14px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      background: "#f8fafc",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#334155",
                      marginBottom: "8px",
                    }}
                  >
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "14px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      background: "#f8fafc",
                    }}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#334155",
                      marginBottom: "6px",
                    }}
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Rigby"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "14px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      background: "#f8fafc",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#334155",
                      marginBottom: "6px",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "14px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      background: "#f8fafc",
                    }}
                  />
                </div>
              </div>

              {/* Note / Symptoms */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "6px",
                  }}
                >
                  Additional Symptoms / Notes (Optional)
                </label>
                <textarea
                  placeholder="Tell us if you have any dental sensitivity or anxiety..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.88rem",
                    background: "#f8fafc",
                    fontFamily: "inherit",
                    resize: "none",
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 8px 24px rgba(2, 132, 199, 0.35)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(2, 132, 199, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(2, 132, 199, 0.35)";
                }}
              >
                <CalendarIcon size={18} />
                <span>Confirm Dental Appointment</span>
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#dcfce7",
                color: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
                boxShadow: "0 0 24px rgba(34, 197, 94, 0.3)",
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <h3
              style={{
                fontSize: "1.85rem",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              Appointment Confirmed!
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.95rem",
                maxWidth: "460px",
                margin: "0 auto 28px auto",
              }}
            >
              Thank you, <strong>{name || "Valued Patient"}</strong>. A booking confirmation SMS and calendar invite have been issued.
            </p>

            {/* Appointment Card */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                padding: "24px",
                textAlign: "left",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    TREATMENT
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {treatment}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    DOCTOR
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0284c7",
                    }}
                  >
                    {doctor}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    DATE
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {date}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    TIME
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {time}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={handleDownloadIcs}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  background: "#0284c7",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                <Download size={16} />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                style={{
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  background: "#f1f5f9",
                  color: "#334155",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
