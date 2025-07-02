"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold text-gray-900">
            Keuntungan Bermitra dengan Kami
          </h2>
          <div className="w-20 h-1 bg-primary mt-3 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-700/70 to-transparent transition-all duration-500" />

              {/* Text Overlay with animation */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center px-6 sm:px-7 text-white text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.25 + 0.2 }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold mb-3 leading-tight shadow-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.25 + 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-white/90 leading-relaxed text-sm sm:text-base font-reguler shadow-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.25 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
