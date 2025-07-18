"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const accordionData = [
  {
    value: "faq-1",
    title: "Apa itu EduBrain Technology?",
    content: [
      "EduBrain adalah perusahaan teknologi yang menyediakan layanan pengembangan sistem pembelajaran digital, seperti Learning Management System (LMS), website sekolah, mobile app, dan layanan digital lainnya.",
    ],
  },
  {
    value: "faq-2",
    title: "Apakah EduBrain hanya melayani institusi pendidikan?",
    content: [
      "Meskipun fokus utama EduBrain adalah sektor pendidikan, kami juga melayani kebutuhan digital untuk bisnis umum seperti e-commerce, company profile, dan landing page.",
    ],
  },
  {
    value: "faq-3",
    title: "Apa saja layanan yang ditawarkan EduBrain?",
    content: [
      "Kami menyediakan pengembangan LMS, website sekolah, aplikasi mobile (Android/iOS), sistem informasi internal, serta integrasi dashboard analitik dan laporan digital.",
    ],
  },
  {
    value: "faq-4",
    title: "Bagaimana proses kerja sama dengan EduBrain?",
    content: [
      "Calon klien dapat menghubungi tim kami melalui halaman kontak atau tombol 'Hubungi Kami'. Setelah itu, kami akan menjadwalkan sesi konsultasi dan menyusun proposal solusi sesuai kebutuhan.",
    ],
  },
  {
    value: "faq-5",
    title: "Apakah EduBrain menyediakan layanan after-sales support?",
    content: [
      "Ya. Kami menyediakan layanan dukungan teknis, pemeliharaan sistem, serta pelatihan penggunaan sistem untuk tim Anda setelah proyek selesai.",
    ],
  },
];

export default function AccordionSection() {
  return (
    <section
      id="faq"
      suppressHydrationWarning
      className="scroll-mt-12 py-8 md:py-16 bg-white max-xl:px-4"
    >
      <div className="max-w-7xl mx-auto text-start space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-black">Pertanyaan Umum</h2>
          <div className="w-24 h-1 bg-primary mt-3 rounded-full" />
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {accordionData.map((item) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <AccordionItem value={item.value}>
                <AccordionTrigger className="hover:no-underline text-[#002e5b] text-md md:text-lg font-reguler text-left">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-balance text-sm text-gray-600 space-y-2">
                  {item.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
