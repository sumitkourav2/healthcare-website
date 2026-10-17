"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProcessTicker from "@/components/ProcessTicker";
import AboutSection from "@/components/AboutSection";
import FeatureTreatmentSection from "@/components/FeatureTreatmentSection";
import ServicesExplorer from "@/components/ServicesExplorer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>();

  const handleOpenBooking = (serviceName?: string, doctorName?: string) => {
    setSelectedService(serviceName);
    setSelectedDoctor(doctorName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#fafaf8",
        overflowX: "hidden",
      }}
    >
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Slider with Sliding Animation (Matches Screenshot) */}
      <HeroSlider onOpenBooking={(service) => handleOpenBooking(service)} />

      {/* Process Ticker (Ribbed Animated Marquee from Screenshot) */}
      <ProcessTicker />

      {/* About Us Section (Matches Screenshot) */}
      <AboutSection />

      {/* Feature Treatment Section (Matches Screenshot: Dr. Daniel Carter + Operatory) */}
      <FeatureTreatmentSection
        onOpenBooking={(doctor) => handleOpenBooking(undefined, doctor)}
      />

      {/* Interactive Services & Treatments Explorer */}
      <ServicesExplorer onOpenBooking={(service) => handleOpenBooking(service)} />

      {/* Interactive Draggable Before / After Smile Slider */}
      <BeforeAfterSlider />

      {/* Sliding Testimonials Reviews */}
      <TestimonialsSection />

      {/* Footer & Live Clinic Status */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialDoctor={selectedDoctor}
      />
    </main>
  );
}
