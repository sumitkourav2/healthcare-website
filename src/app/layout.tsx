import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dentora — Family-Friendly Modern Dental Care",
  description:
    "We deliver personalized dental treatments with modern technology and gentle care ensuring healthy confident smiles for every patient.",
  keywords: [
    "Dentora",
    "Dentist",
    "Dental Clinic",
    "Teeth Whitening",
    "Dental Implants",
    "Cosmetic Dentistry",
    "Family Dentistry",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
