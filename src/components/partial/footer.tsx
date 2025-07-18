"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#002e5b] text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto max-xl:px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Deskripsi */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <Image
                src="/logo-white.png"
                alt="Logo EduBrain"
                width={200}
                height={80}
                className="object-contain"
              />
              <p className="text-blue-200 leading-relaxed mt-3">
                EduBrain adalah perusahaan teknologi yang menyediakan solusi
                digital untuk pendidikan dan bisnis, mulai dari LMS, website
                sekolah, hingga aplikasi mobile dan sistem internal.
              </p>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-4 relative">
              Tautan Cepat
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-white rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang Kami", href: "/#about" },
                { name: "Layanan", href: "/#services" },
                { name: "FAQ", href: "/#faq" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-4 relative">
              Hubungi Kami
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-white rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200 group hover:text-white transition-colors">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-blue-300">Telepon</div>
                  <div className="font-medium">+62 812-3456-7890</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-blue-200 group hover:text-white transition-colors">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-blue-300">Email</div>
                  <div className="font-medium">hello@edubrain.id</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-blue-200 group hover:text-white transition-colors">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-blue-300">Alamat</div>
                  <div className="font-medium leading-relaxed">
                    Jl. Teknologi No.88
                    <br />
                    Palembang, Indonesia
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-4 relative">
              Tetap Terhubung
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-white rounded-full" />
            </h3>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/edubrain.official"
                target="_blank"
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/edubrain"
                target="_blank"
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@edubrain.id"
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Bawah */}
      <div className="relative border-t border-blue-800/50">
        <div className="max-w-7xl mx-auto max-xl:px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-blue-300 text-sm text-center">
              &copy; {new Date().getFullYear()} EduBrain Technology. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
