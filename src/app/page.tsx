"use client";

import AccordionSection from "@/components/home/accordion";
import BenefitSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import StepsSection from "@/components/home/step-section";
import Footer from "@/components/partial/footer";
import Navbar from "@/components/partial/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutSection from "@/components/home/about-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717] ">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Benefit Section */}
      <AboutSection />

      {/* Steps Section */}
      {/* <StepsSection /> */}

      {/* CTA Section */}

      {/* Accordion Section */}
      <AccordionSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
