import React, { useState, useEffect } from "react";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  Code,
  BookOpen,
  ShoppingCart,
  Building,
  GraduationCap,
  ChevronRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Package,
  Wallet,
  NewspaperIcon,
  PencilLine,
} from "lucide-react";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "100+", label: "Klien Terpercaya", icon: Users },
    { number: "100+", label: "Proyek Selesai", icon: Award },
    { number: "5+", label: "Tahun Pengalaman", icon: TrendingUp },
    { number: "99%", label: "Kepuasan Klien", icon: Star },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Learning Management System",
      description:
        "Platform pembelajaran digital yang komprehensif untuk institusi pendidikan dengan fitur assessment, tracking, dan analytics.",
    },
    {
      icon: Code,
      title: "Landing Page",
      description:
        "Desain landing page yang converting dengan optimasi SEO dan performa tinggi untuk meningkatkan konversi bisnis.",
    },
    {
      icon: Building,
      title: "Company Profile",
      description:
        "Website profil perusahaan yang profesional dan responsive untuk membangun kredibilitas dan brand awareness.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Solusi e-commerce yang scalable dengan fitur lengkap untuk mendukung penjualan online dan manajemen inventory.",
    },
    {
      icon: Package, // atau BoxIcon dari Lucide
      title: "Aset Management System",
      description:
        "Sistem digital untuk mencatat, melacak, dan mengelola aset fisik perusahaan atau institusi secara efisien dan akurat.",
    },
    {
      icon: Wallet, // dari Lucide
      title: "Sistem Keuangan Digital",
      description:
        "Solusi financial technology seperti sistem pembayaran, dompet digital, dan laporan keuangan otomatis untuk sekolah atau bisnis.",
    },
    {
      icon: NewspaperIcon,
      title: "Portal Informasi & Berita",
      description:
        "Website dinamis untuk menyampaikan informasi resmi, pengumuman, berita, dan artikel secara terstruktur dan mudah diakses.",
    },
    {
      icon: PencilLine,
      title: "Sistem Ujian & Penilaian Online",
      description:
        "Platform digital untuk pelaksanaan ujian, kuis, dan penilaian berbasis komputer (CBT) dengan fitur keamanan dan analisis hasil otomatis.",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Inovasi",
      description:
        "Mengembangkan solusi teknologi terdepan yang mengubah cara belajar dan berbisnis di era digital.",
    },
    {
      icon: Shield,
      title: "Kualitas",
      description:
        "Berkomitmen memberikan produk berkualitas tinggi dengan standar development yang ketat dan testing menyeluruh.",
    },
    {
      icon: Target,
      title: "Fokus Client",
      description:
        "Mengutamakan kebutuhan klien dengan pendekatan personal dan solusi yang customized sesuai bisnis.",
    },
    {
      icon: Zap,
      title: "Efisiensi",
      description:
        "Memberikan solusi yang optimal dengan waktu pengembangan yang efisien tanpa mengorbankan kualitas.",
    },
  ];

  const team = [
    {
      name: "Ahmad Riadi",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "Visioner dengan pengalaman 10+ tahun di industri teknologi pendidikan.",
    },
    {
      name: "Sari Wijaya",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description:
        "Expert dalam arsitektur sistem dan pengembangan aplikasi skala besar.",
    },
    {
      name: "Budi Santoso",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "Spesialis full-stack development dengan fokus pada user experience.",
    },
    {
      name: "Maya Putri",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description:
        "Creative designer dengan passion untuk menciptakan interface yang intuitif.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary/5">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4 mr-2" />
              Transforming Education & Business Through Technology
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Edubrain
              </span>
              <br />
              Technology
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Kami adalah perusahaan teknologi yang berdedikasi untuk
              menciptakan solusi digital inovatif dalam bidang pendidikan dan
              bisnis. Dengan pengalaman bertahun-tahun, kami membantu institusi
              dan perusahaan bertransformasi menuju era digital.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center">
                Hubungi Kami
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="about"
        suppressHydrationWarning
        className="scroll-mt-12 py-20 relative bg-[#f5f7fa]"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-primary/3"></div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-black">
              <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
              <p className="text-lg leading-relaxed mb-6">
                Menyediakan solusi teknologi pendidikan yang inovatif dan
                berkualitas tinggi untuk membantu institusi pendidikan dan
                bisnis mencapai potensi maksimal mereka di era digital.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <p>
                    Mengembangkan platform pembelajaran yang user-friendly dan
                    effective
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <p>Memberikan dukungan teknis terbaik untuk setiap klien</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 mr-3"></div>
                  <p>
                    Terus berinovasi mengikuti perkembangan teknologi terkini
                  </p>
                </div>
              </div>
            </div>

            <div className="text-black">
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-lg leading-relaxed mb-6">
                Menjadi perusahaan teknologi terdepan di Indonesia yang diakui
                secara internasional dalam memberikan solusi digital untuk
                pendidikan dan bisnis.
              </p>
              <div className="bg-primary/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold mb-3">Target 2030</h3>
                <p className="text-sm leading-relaxed">
                  Menjangkau 1000+ institusi pendidikan dan perusahaan di
                  seluruh Indonesia serta ekspansi ke pasar regional Asia
                  Tenggara dengan teknologi AI dan machine learning
                  terintegrasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        suppressHydrationWarning
        className="scroll-mt-8 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menawarkan berbagai solusi teknologi yang dirancang khusus
              untuk memenuhi kebutuhan digital modern dalam pendidikan dan
              bisnis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      {/* <section
        id="values"
        className="relative overflow-hidden py-20 bg-gray-50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi landasan dalam setiap pekerjaan dan
              interaksi kami dengan klien dan partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Memulai Transformasi Digital?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Mari berdiskusi bagaimana Edubrain Technology dapat membantu
            mewujudkan visi digital Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Konsultasi Gratis
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
              Lihat Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
