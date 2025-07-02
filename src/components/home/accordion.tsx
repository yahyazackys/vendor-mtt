import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const accordionData = [
  {
    value: "step-1",
    title: "Bagaimana cara mendaftar sebagai vendor hotel?",
    content: [
      "Klik tombol 'Daftar Vendor' pada halaman utama, lalu isi formulir registrasi secara bertahap.",
      "Pastikan Anda mengisi semua informasi yang diminta secara lengkap dan akurat untuk mempercepat proses verifikasi.",
    ],
  },
  {
    value: "step-2",
    title: "Dokumen apa saja yang harus diunggah?",
    content: [
      "Vendor diwajibkan mengunggah dokumen legalitas seperti NPWP, SIUP, dan dokumen pendukung lainnya sesuai dengan jenis usaha.",
      "Dokumen harus dalam format PDF atau gambar (JPG/PNG) dengan ukuran maksimal 2MB per file.",
    ],
  },
  {
    value: "step-3",
    title: "Bagaimana proses tanda tangan digital dilakukan?",
    content: [
      "Setelah semua data diisi dan dokumen diunggah, sistem akan meminta Anda untuk melakukan tanda tangan digital.",
      "Tanda tangan dapat dilakukan langsung melalui perangkat Anda menggunakan fitur e-signature berbasis canvas.",
    ],
  },
  {
    value: "step-4",
    title: "Berapa lama proses verifikasi vendor?",
    content: [
      "Proses verifikasi vendor umumnya memakan waktu 1–3 hari kerja.",
      "Status pendaftaran akan ditampilkan di dashboard vendor, dan Anda akan menerima notifikasi melalui email.",
    ],
  },
];

export function AccordionSection() {
  return (
    <section id="faq" className="py-8 md:py-16 bg-white max-xl:px-4">
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
          {accordionData.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
