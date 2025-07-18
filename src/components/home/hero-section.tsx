"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const heroSlides = [
  {
    title: "EduBrain Technology",
    subtitle: "Educational Technology Solutions",
    description:
      "Transformasi digital pendidikan dengan sistem pembelajaran yang inovatif dan mudah digunakan untuk institusi pendidikan modern.",
    icon: (
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradient circles */}
        <circle
          cx="200"
          cy="150"
          r="120"
          fill="url(#eduGradient1)"
          fillOpacity="0.1"
        />
        <circle
          cx="200"
          cy="150"
          r="80"
          fill="url(#eduGradient1)"
          fillOpacity="0.2"
        />

        {/* Central graduation cap */}
        <path
          d="M200 120 L260 140 L200 160 L140 140 Z"
          fill="rgba(255,255,255,0.9)"
        />
        <path
          d="M200 120 L260 140 L200 160 L140 140 Z"
          fill="url(#capGradient)"
          fillOpacity="0.8"
        />
        <rect
          x="195"
          y="160"
          width="10"
          height="25"
          fill="rgba(255,255,255,0.9)"
        />
        <circle cx="200" cy="190" r="6" fill="rgba(34,197,94,0.8)" />

        {/* Floating books */}
        <rect
          x="120"
          y="100"
          width="15"
          height="20"
          fill="rgba(59,130,246,0.8)"
          rx="2"
          transform="rotate(-15 127.5 110)"
        />
        <rect
          x="110"
          y="105"
          width="15"
          height="20"
          fill="rgba(239,68,68,0.8)"
          rx="2"
          transform="rotate(-10 117.5 115)"
        />
        <rect
          x="100"
          y="110"
          width="15"
          height="20"
          fill="rgba(251,191,36,0.8)"
          rx="2"
          transform="rotate(-5 107.5 120)"
        />

        <rect
          x="270"
          y="100"
          width="15"
          height="20"
          fill="rgba(168,85,247,0.8)"
          rx="2"
          transform="rotate(15 277.5 110)"
        />
        <rect
          x="280"
          y="105"
          width="15"
          height="20"
          fill="rgba(34,197,94,0.8)"
          rx="2"
          transform="rotate(10 287.5 115)"
        />
        <rect
          x="290"
          y="110"
          width="15"
          height="20"
          fill="rgba(236,72,153,0.8)"
          rx="2"
          transform="rotate(5 297.5 120)"
        />

        {/* Digital elements */}
        <circle cx="80" cy="200" r="25" fill="rgba(255,255,255,0.9)" />
        <rect
          x="70"
          y="190"
          width="20"
          height="15"
          fill="rgba(59,130,246,0.8)"
          rx="2"
        />
        <rect
          x="72"
          y="195"
          width="16"
          height="2"
          fill="rgba(255,255,255,0.9)"
        />
        <rect
          x="72"
          y="198"
          width="12"
          height="2"
          fill="rgba(255,255,255,0.9)"
        />
        <rect
          x="72"
          y="201"
          width="10"
          height="2"
          fill="rgba(255,255,255,0.9)"
        />

        <circle cx="320" cy="200" r="25" fill="rgba(255,255,255,0.9)" />
        <circle cx="320" cy="195" r="8" fill="rgba(34,197,94,0.8)" />
        <circle cx="320" cy="195" r="4" fill="rgba(255,255,255,0.9)" />
        <rect
          x="310"
          y="205"
          width="20"
          height="8"
          fill="rgba(59,130,246,0.8)"
          rx="4"
        />

        {/* Connection lines */}
        <line
          x1="105"
          y1="185"
          x2="170"
          y2="155"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <line
          x1="295"
          y1="185"
          x2="230"
          y2="155"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        <defs>
          <linearGradient id="eduGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Learning Management System",
    subtitle: "Platform Pembelajaran Digital",
    description:
      "Sistem manajemen pembelajaran yang komprehensif dengan fitur interaktif, tracking progress, dan analytics yang memudahkan proses belajar mengajar.",
    icon: (
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main screen */}
        <rect
          x="80"
          y="60"
          width="240"
          height="180"
          fill="rgba(255,255,255,0.95)"
          rx="12"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />

        {/* Header with nav */}
        <rect
          x="90"
          y="75"
          width="220"
          height="25"
          fill="rgba(59,130,246,0.1)"
          rx="4"
        />
        <rect
          x="95"
          y="82"
          width="30"
          height="3"
          fill="rgba(59,130,246,0.8)"
          rx="1"
        />
        <rect
          x="130"
          y="82"
          width="25"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="160"
          y="82"
          width="28"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <circle cx="290" cy="87" r="8" fill="rgba(34,197,94,0.8)" />

        {/* Course cards */}
        <rect
          x="100"
          y="120"
          width="60"
          height="45"
          fill="rgba(59,130,246,0.1)"
          rx="6"
        />
        <rect
          x="105"
          y="125"
          width="50"
          height="20"
          fill="rgba(59,130,246,0.8)"
          rx="2"
        />
        <rect
          x="105"
          y="148"
          width="35"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="105"
          y="155"
          width="40"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="170"
          y="120"
          width="60"
          height="45"
          fill="rgba(34,197,94,0.1)"
          rx="6"
        />
        <rect
          x="175"
          y="125"
          width="50"
          height="20"
          fill="rgba(34,197,94,0.8)"
          rx="2"
        />
        <rect
          x="175"
          y="148"
          width="30"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="175"
          y="155"
          width="45"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="240"
          y="120"
          width="60"
          height="45"
          fill="rgba(251,191,36,0.1)"
          rx="6"
        />
        <rect
          x="245"
          y="125"
          width="50"
          height="20"
          fill="rgba(251,191,36,0.8)"
          rx="2"
        />
        <rect
          x="245"
          y="148"
          width="40"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="245"
          y="155"
          width="30"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        {/* Progress bars */}
        <rect
          x="100"
          y="185"
          width="80"
          height="8"
          fill="rgba(59,130,246,0.2)"
          rx="4"
        />
        <rect
          x="100"
          y="185"
          width="60"
          height="8"
          fill="rgba(59,130,246,0.8)"
          rx="4"
        />

        <rect
          x="190"
          y="185"
          width="80"
          height="8"
          fill="rgba(34,197,94,0.2)"
          rx="4"
        />
        <rect
          x="190"
          y="185"
          width="45"
          height="8"
          fill="rgba(34,197,94,0.8)"
          rx="4"
        />

        {/* Student avatars */}
        <circle cx="350" cy="100" r="15" fill="rgba(255,255,255,0.9)" />
        <circle cx="350" cy="95" r="6" fill="rgba(59,130,246,0.8)" />
        <path
          d="M345 105 Q350 100 355 105"
          stroke="rgba(59,130,246,0.8)"
          strokeWidth="2"
          fill="none"
        />

        <circle cx="50" cy="150" r="15" fill="rgba(255,255,255,0.9)" />
        <circle cx="50" cy="145" r="6" fill="rgba(34,197,94,0.8)" />
        <path
          d="M45 155 Q50 150 55 155"
          stroke="rgba(34,197,94,0.8)"
          strokeWidth="2"
          fill="none"
        />

        <circle cx="350" cy="200" r="15" fill="rgba(255,255,255,0.9)" />
        <circle cx="350" cy="195" r="6" fill="rgba(251,191,36,0.8)" />
        <path
          d="M345 205 Q350 200 355 205"
          stroke="rgba(251,191,36,0.8)"
          strokeWidth="2"
          fill="none"
        />

        {/* Notification badges */}
        <circle cx="320" cy="130" r="8" fill="rgba(239,68,68,0.9)" />
        <text x="320" y="134" textAnchor="middle" fontSize="10" fill="white">
          3
        </text>
      </svg>
    ),
  },
  {
    title: "Website & Mobile App",
    subtitle: "Solusi Digital Terintegrasi",
    description:
      "Pengembangan website dan mobile app custom untuk berbagai kebutuhan bisnis dengan teknologi modern dan user experience yang optimal.",
    icon: (
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Desktop/Website */}
        <rect
          x="70"
          y="80"
          width="140"
          height="100"
          fill="rgba(255,255,255,0.95)"
          rx="8"
        />
        <rect
          x="75"
          y="90"
          width="130"
          height="15"
          fill="rgba(59,130,246,0.1)"
          rx="4"
        />
        <circle cx="85" cy="97" r="2" fill="rgba(239,68,68,0.8)" />
        <circle cx="92" cy="97" r="2" fill="rgba(251,191,36,0.8)" />
        <circle cx="99" cy="97" r="2" fill="rgba(34,197,94,0.8)" />

        {/* Website content */}
        <rect
          x="80"
          y="115"
          width="120"
          height="40"
          fill="rgba(59,130,246,0.1)"
          rx="4"
        />
        <rect
          x="85"
          y="120"
          width="60"
          height="8"
          fill="rgba(59,130,246,0.8)"
          rx="2"
        />
        <rect
          x="85"
          y="132"
          width="80"
          height="4"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="85"
          y="138"
          width="70"
          height="4"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="85"
          y="144"
          width="90"
          height="4"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="150"
          y="120"
          width="45"
          height="25"
          fill="rgba(34,197,94,0.8)"
          rx="2"
        />

        {/* Mobile phone */}
        <rect
          x="240"
          y="60"
          width="90"
          height="160"
          fill="rgba(255,255,255,0.95)"
          rx="20"
        />
        <rect
          x="250"
          y="80"
          width="70"
          height="120"
          fill="rgba(0,0,0,0.05)"
          rx="8"
        />

        {/* Mobile app interface */}
        <rect
          x="255"
          y="90"
          width="60"
          height="15"
          fill="rgba(59,130,246,0.1)"
          rx="4"
        />
        <rect
          x="260"
          y="95"
          width="30"
          height="3"
          fill="rgba(59,130,246,0.8)"
          rx="1"
        />
        <circle cx="305" cy="97" r="4" fill="rgba(34,197,94,0.8)" />

        {/* App content */}
        <rect
          x="255"
          y="115"
          width="25"
          height="25"
          fill="rgba(59,130,246,0.8)"
          rx="4"
        />
        <rect
          x="285"
          y="115"
          width="25"
          height="25"
          fill="rgba(34,197,94,0.8)"
          rx="4"
        />
        <rect
          x="255"
          y="145"
          width="25"
          height="25"
          fill="rgba(251,191,36,0.8)"
          rx="4"
        />
        <rect
          x="285"
          y="145"
          width="25"
          height="25"
          fill="rgba(168,85,247,0.8)"
          rx="4"
        />

        <rect
          x="255"
          y="180"
          width="55"
          height="8"
          fill="rgba(156,163,175,0.2)"
          rx="4"
        />
        <rect
          x="255"
          y="180"
          width="35"
          height="8"
          fill="rgba(59,130,246,0.8)"
          rx="4"
        />

        {/* Connection lines */}
        <path
          d="M210 130 Q225 125 240 130"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Cloud sync */}
        <circle cx="200" cy="50" r="20" fill="rgba(255,255,255,0.9)" />
        <path
          d="M190 45 Q195 40 200 45 Q205 40 210 45 Q212 48 210 52 L190 52 Q188 48 190 45"
          fill="rgba(59,130,246,0.8)"
        />

        {/* Floating elements */}
        <circle cx="60" cy="200" r="12" fill="rgba(255,255,255,0.9)" />
        <path d="M55 195 L65 195 L60 205 Z" fill="rgba(34,197,94,0.8)" />

        <circle cx="350" cy="120" r="12" fill="rgba(255,255,255,0.9)" />
        <rect
          x="346"
          y="116"
          width="8"
          height="8"
          fill="rgba(251,191,36,0.8)"
          rx="2"
        />
      </svg>
    ),
  },
  {
    title: "E-Commerce & Company Profile",
    subtitle: "Solusi Bisnis Digital",
    description:
      "Platform e-commerce yang powerful dan company profile yang profesional untuk meningkatkan branding dan penjualan bisnis Anda.",
    icon: (
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main shopping cart */}
        <rect
          x="120"
          y="80"
          width="160"
          height="120"
          fill="rgba(255,255,255,0.95)"
          rx="12"
        />

        {/* Header with shopping cart icon */}
        <rect
          x="130"
          y="95"
          width="140"
          height="20"
          fill="rgba(59,130,246,0.1)"
          rx="4"
        />
        <rect
          x="135"
          y="100"
          width="40"
          height="3"
          fill="rgba(59,130,246,0.8)"
          rx="1"
        />

        {/* Shopping cart icon */}
        <path
          d="M245 100 L255 100 L260 110 L250 110 Z"
          fill="rgba(34,197,94,0.8)"
        />
        <circle cx="252" cy="112" r="2" fill="rgba(34,197,94,0.8)" />
        <circle cx="258" cy="112" r="2" fill="rgba(34,197,94,0.8)" />

        {/* Product grid */}
        <rect
          x="135"
          y="125"
          width="35"
          height="30"
          fill="rgba(59,130,246,0.1)"
          rx="4"
        />
        <rect
          x="140"
          y="130"
          width="25"
          height="15"
          fill="rgba(59,130,246,0.8)"
          rx="2"
        />
        <rect
          x="140"
          y="148"
          width="20"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="175"
          y="125"
          width="35"
          height="30"
          fill="rgba(34,197,94,0.1)"
          rx="4"
        />
        <rect
          x="180"
          y="130"
          width="25"
          height="15"
          fill="rgba(34,197,94,0.8)"
          rx="2"
        />
        <rect
          x="180"
          y="148"
          width="15"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="215"
          y="125"
          width="35"
          height="30"
          fill="rgba(251,191,36,0.1)"
          rx="4"
        />
        <rect
          x="220"
          y="130"
          width="25"
          height="15"
          fill="rgba(251,191,36,0.8)"
          rx="2"
        />
        <rect
          x="220"
          y="148"
          width="25"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="135"
          y="165"
          width="35"
          height="30"
          fill="rgba(168,85,247,0.1)"
          rx="4"
        />
        <rect
          x="140"
          y="170"
          width="25"
          height="15"
          fill="rgba(168,85,247,0.8)"
          rx="2"
        />
        <rect
          x="140"
          y="188"
          width="18"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="175"
          y="165"
          width="35"
          height="30"
          fill="rgba(239,68,68,0.1)"
          rx="4"
        />
        <rect
          x="180"
          y="170"
          width="25"
          height="15"
          fill="rgba(239,68,68,0.8)"
          rx="2"
        />
        <rect
          x="180"
          y="188"
          width="22"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        <rect
          x="215"
          y="165"
          width="35"
          height="30"
          fill="rgba(34,197,94,0.1)"
          rx="4"
        />
        <rect
          x="220"
          y="170"
          width="25"
          height="15"
          fill="rgba(34,197,94,0.8)"
          rx="2"
        />
        <rect
          x="220"
          y="188"
          width="20"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        {/* Company profile section */}
        <rect
          x="50"
          y="220"
          width="120"
          height="60"
          fill="rgba(255,255,255,0.95)"
          rx="8"
        />
        <rect
          x="60"
          y="230"
          width="100"
          height="8"
          fill="rgba(59,130,246,0.8)"
          rx="2"
        />
        <rect
          x="60"
          y="245"
          width="80"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="60"
          y="252"
          width="90"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="60"
          y="259"
          width="70"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />
        <rect
          x="60"
          y="266"
          width="85"
          height="3"
          fill="rgba(156,163,175,0.6)"
          rx="1"
        />

        {/* Analytics/Stats */}
        <rect
          x="230"
          y="220"
          width="120"
          height="60"
          fill="rgba(255,255,255,0.95)"
          rx="8"
        />
        <rect
          x="240"
          y="230"
          width="30"
          height="20"
          fill="rgba(59,130,246,0.8)"
          rx="2"
        />
        <rect
          x="275"
          y="235"
          width="30"
          height="15"
          fill="rgba(34,197,94,0.8)"
          rx="2"
        />
        <rect
          x="310"
          y="240"
          width="30"
          height="10"
          fill="rgba(251,191,36,0.8)"
          rx="2"
        />

        {/* Chart bars */}
        <rect
          x="245"
          y="255"
          width="8"
          height="15"
          fill="rgba(59,130,246,0.8)"
        />
        <rect
          x="255"
          y="260"
          width="8"
          height="10"
          fill="rgba(59,130,246,0.8)"
        />
        <rect
          x="265"
          y="250"
          width="8"
          height="20"
          fill="rgba(59,130,246,0.8)"
        />
        <rect
          x="275"
          y="255"
          width="8"
          height="15"
          fill="rgba(59,130,246,0.8)"
        />
        <rect
          x="285"
          y="258"
          width="8"
          height="12"
          fill="rgba(59,130,246,0.8)"
        />

        {/* Floating elements */}
        <circle cx="80" cy="50" r="15" fill="rgba(255,255,255,0.9)" />
        <path
          d="M75 45 Q80 40 85 45 Q87 48 85 52 L75 52 Q73 48 75 45"
          fill="rgba(59,130,246,0.8)"
        />

        <circle cx="320" cy="50" r="15" fill="rgba(255,255,255,0.9)" />
        <rect
          x="315"
          y="45"
          width="10"
          height="10"
          fill="rgba(34,197,94,0.8)"
          rx="2"
        />

        {/* Currency symbols */}
        <circle cx="30" cy="120" r="12" fill="rgba(255,255,255,0.9)" />
        <text
          x="30"
          y="125"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(34,197,94,0.8)"
        >
          $
        </text>

        <circle cx="370" cy="160" r="12" fill="rgba(255,255,255,0.9)" />
        <text
          x="370"
          y="165"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(34,197,94,0.8)"
        >
          %
        </text>
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section className=" relative w-full  overflow-hidden bg-primary text-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full px-4 sm:px-6 md:px-10 lg:px-20 py-60"
            >
              <motion.div
                className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div className="space-y-2">
                    <motion.h1
                      className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-yellow-300 via-blue-100 to-white bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </motion.h1>
                    {/* <motion.h2
                      className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-yellow-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.h2> */}
                  </div>

                  <motion.p
                    className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="flex justify-center lg:justify-start pt-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Link
                      href="/registration"
                      className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-medium px-8 py-3 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:shadow-lg"
                    >
                      <span className="relative z-10">Hubungi Kami</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  className="flex-1 max-w-xs sm:max-w-md md:max-w-lg mx-auto lg:mx-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"> */}
                  <div className="relative z-10">{slide.icon}</div>
                  {/* </div> */}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Wrapper navigasi dan dot dalam satu container */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-0 flex justify-between items-center">
          {/* Tombol navigasi kiri */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot pagination kanan */}
          <div className="flex gap-3">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "bg-white w-8 shadow-lg"
                    : "bg-white/50 w-2 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
