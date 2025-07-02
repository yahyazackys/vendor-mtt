"use client";

import {
  Mail,
  MessageCircle,
  FileText,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const partnershipSteps = [
  {
    step: 1,
    title: "Ungkapkan Ketertarikan Anda",
    desc: "Hubungi kami melalui salah satu penanggung jawab kemitraan kami atau kirim email ke partnership@mtt.id.",
    icon: Mail,
    color: "from-primary to-blue-600",
    bgColor: "bg-primary/10",
  },
  {
    step: 2,
    title: "Mari Diskusi",
    desc: "Eksplorasi segala kemungkinan & tentukan bentuk kemitraan yang paling sesuai dengan kebutuhan Anda.",
    icon: MessageCircle,
    bgColor: "bg-primary",
  },
  {
    step: 3,
    title: "Buat Program Kemitraan",
    desc: "Finalisasi & tandatangani kesepakatan kemitraan, sehingga kami bisa mulai membuat programnya.",
    icon: FileText,
    bgColor: "bg-primary",
  },
  {
    step: 4,
    title: "Program Kemitraan Sudah Tayang!",
    desc: "Saatnya menyaksikan keajaiban kemitraan kita berjalan dan meraih kesuksesan bersama.",
    icon: Rocket,
    bgColor: "bg-primary",
  },
];

export default function StepsSection() {
  return (
    <section
      id="guide"
      className="py-8 md:py-16 bg-gradient-to-b from-white via-blue-50 to-white relative max-xl:px-4 scroll-mt-20"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-start mb-10"
        >
          <h2 className="text-3xl font-semibold text-black">
            Langkah Mudah Menjadi Mitra Kami
          </h2>
          <div className="w-24 h-1 bg-primary mt-3 rounded-full" />
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Step Cards */}
          <div className="grid grid-cols-4 gap-8">
            {partnershipSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  key={step.step}
                  className={`group relative `}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <span className="text-sm font-bold text-[#002e5b]">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div
                    className={`w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#002e5b] mb-4 leading-tight transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-reguler transition-colors">
                    {step.desc}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="grid gap-8">
            {partnershipSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative rounded-2xl bg-white p-6 shadow-lg shadow-slate-300/10 group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 z-10">
                    <span className="text-sm font-bold text-[#002e5b]">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#002e5b] mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>

                  {/* Arrow Right (Optional, hidden by default) */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
      </div>
    </section>
  );
}
