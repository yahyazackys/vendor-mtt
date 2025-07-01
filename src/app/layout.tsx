import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "900"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vendor MTT",
  description: "Portal Vendor Mitra Tour & Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rubik.className}`}>{children}</body>
    </html>
  );
}
