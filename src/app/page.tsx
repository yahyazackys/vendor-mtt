import { AccordionSection } from "@/components/home/accordion";
import BenefitSection from "@/components/home/benefit-section";
import StepsSection from "@/components/home/step-section";
import Footer from "@/components/partial/footer";
import Navbar from "@/components/partial/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717] ">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-gradient-to-br from-[#0066B3] via-[#003366] to-[#004080] text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="w-full h-full"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="hero-pattern"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <g fill="white" fillOpacity="0.1">
                    <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-white/5 rounded-full animate-bounce hidden lg:block"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Portal Vendor
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-300">
                Mitra Tour & Travel
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 font-reguler leading-relaxed">
              Bergabunglah dengan jaringan hotel terpercaya dan kelola kemitraan
              Anda secara efisien melalui platform B2B yang canggih.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* <Link
                href="/register"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#002e5b] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">🏨</span>
                Daftar Jadi Mitra
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link> */}

              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-reguler px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Daftar Jadi Mitra
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex-1 max-w-lg mx-auto lg:mx-0">
            <div className="relative">
              {/* Main SVG Container */}
              <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Hotel Building */}
                  <rect
                    x="50"
                    y="80"
                    width="300"
                    height="180"
                    rx="10"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  <rect
                    x="50"
                    y="80"
                    width="300"
                    height="180"
                    rx="10"
                    stroke="#002e5b"
                    strokeWidth="2"
                  />

                  {/* Hotel Sign */}
                  <rect
                    x="150"
                    y="40"
                    width="100"
                    height="40"
                    rx="5"
                    fill="#FFD700"
                  />
                  <text
                    x="200"
                    y="65"
                    textAnchor="middle"
                    className="text-sm font-bold"
                    fill="#002e5b"
                  >
                    HOTEL
                  </text>

                  {/* Windows */}
                  <rect
                    x="80"
                    y="110"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="130"
                    y="110"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="180"
                    y="110"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="230"
                    y="110"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="280"
                    y="110"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />

                  <rect
                    x="80"
                    y="150"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="130"
                    y="150"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="180"
                    y="150"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="230"
                    y="150"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="280"
                    y="150"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />

                  <rect
                    x="80"
                    y="190"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="130"
                    y="190"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="180"
                    y="190"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="230"
                    y="190"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />
                  <rect
                    x="280"
                    y="190"
                    width="30"
                    height="25"
                    rx="3"
                    fill="#87CEEB"
                  />

                  {/* Entrance Door */}
                  <rect
                    x="180"
                    y="220"
                    width="40"
                    height="40"
                    rx="5"
                    fill="#8B4513"
                  />
                  <circle cx="210" cy="240" r="2" fill="#FFD700" />

                  {/* Partnership Icons */}
                  <circle
                    cx="320"
                    cy="40"
                    r="20"
                    fill="#FFD700"
                    opacity="0.8"
                  />
                  <text x="320" y="47" textAnchor="middle" className="text-lg">
                    🤝
                  </text>

                  <circle cx="80" cy="40" r="20" fill="#32CD32" opacity="0.8" />
                  <text x="80" y="47" textAnchor="middle" className="text-lg">
                    💼
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Section */}
      <BenefitSection />

      {/* Steps Section */}
      <StepsSection />

      {/* Stats Section */}
      <section className="relative w-full min-h-[300px] md:min-h-[500px] bg-black text-white overflow-hidden">
        {/* Background Image on Right */}
        <div className="absolute inset-0 flex justify-end">
          <Image
            src="/images/hotel.jpg"
            alt="Hero Partner"
            width={200}
            height={200}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* 🔽 Shadow overlay hanya muncul saat layar kecil */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

        {/* Overlay Left Content */}
        <div className="relative z-10 max-w-7xl mx-auto max-xl:px-4 flex flex-row items-center justify-between h-full min-h-[300px] md:min-h-[500px]">
          <div className="w-full md:w-1/2 md:py-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              Ayo, daftarkan hotel Anda <br /> dan nikmati berbagai
              kemudahannya!
            </h2>
            <a
              href="/register"
              className="text-sm md:text-md inline-block bg-primary hover:-translate-y-1 transition-all duration-300 text-white font-reguler px-6 py-3 rounded-xl shadow-md"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Accordion Section */}
      <AccordionSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
