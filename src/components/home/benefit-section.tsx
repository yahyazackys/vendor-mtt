"use client";

import Image from "next/image";

const benefits = [
  {
    image: "/benefit/1.jpg",
    title: "10.000+ Hotel Terdaftar",
    description:
      "Jaringan mitra hotel dari seluruh Indonesia yang terus berkembang setiap hari.",
  },
  {
    image: "/benefit/2.jpg",
    title: "Kemitraan Eksklusif",
    description:
      "Tingkatkan visibilitas properti dengan program eksklusif dan penawaran khusus untuk mitra.",
  },
  {
    image: "/benefit/3.jpg",
    title: "Sistem Reservasi Terintegrasi",
    description:
      "Pengelolaan ketersediaan kamar, harga, dan booking dalam satu dashboard real-time.",
  },
  {
    image: "/benefit/4.jpg",
    title: "Layanan Support 24/7",
    description:
      "Tim dukungan profesional kami siap membantu kapan pun Anda butuh.",
  },
];

export default function BenefitSection() {
  return (
    <section
      id="benefit"
      className="py-8 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Keuntungan Bermitra dengan Kami
          </h2>
          <div className="w-20 h-1 bg-primary mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index === 0}
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-700/70 to-transparent transition-all duration-500" />

              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-7 text-white">
                <div className="transform translate-y-2 transition-transform duration-500 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 leading-tight shadow-4xl">
                    {item.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base font-reguler transition-colors duration-300 shadow-4xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
