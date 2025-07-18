"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CtaSection = () => {
  return (
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 md:py-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Ayo, daftarkan hotel Anda <br /> dan nikmati berbagai kemudahannya!
          </h2>
          <a
            href="/register"
            className="text-sm md:text-md inline-block bg-primary hover:-translate-y-1 transition-all duration-300 text-white font-reguler px-6 py-3 rounded-xl shadow-md"
          >
            Daftar Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
