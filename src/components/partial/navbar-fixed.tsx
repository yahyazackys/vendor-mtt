"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  Mail,
  Menu,
  X,
  Home,
  User,
  BookText,
  HelpCircle,
  LogIn,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenSidebar(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Enhanced Topbar with Gradient */}
      {/* <div className="w-full bg-[#002e5b] text-white text-sm py-3 shadow-lg">
        <div className="max-w-7xl mx-auto max-xl:px-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-6 text-xs">
              <Link
                href="mailto:vendor@mtt.id"
                className="flex items-center gap-2 hover:text-yellow-200 transition-all duration-300 group"
              >
                <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="hidden sm:inline">mitra@mitratour.com</span>
              </Link>
              <Link
                href="https://instagram.com/mitratour"
                className="flex items-center gap-2 hover:text-yellow-200 transition-all duration-300 group"
                target="_blank"
              >
                <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Instagram className="w-3 h-3" />
                </div>
                <span className="hidden sm:inline">@mitratour</span>
              </Link>
              <div className="hidden md:flex items-center gap-2 text-blue-100">
                <Phone className="w-3 h-3" />
                <span>+622130073310</span>
              </div>
            </div>
            <Link
              href="/login"
              className="bg-white/20 backdrop-blur-sm text-white font-medium text-xs px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20"
            >
              MASUK
            </Link>
          </div>
        </div>
      </div> */}

      {/* Modern Navbar with Glass Effect */}
      <header
        className={` z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white backdrop-blur-xl border-b border-white/20"
            : "bg-white backdrop-blur-lg border-b border-blue-100"
        }`}
      >
        <div className="max-w-7xl mx-auto max-xl:px-4">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="group flex items-center">
              <div className="relative">
                <img
                  src="/images/logo-mtt.png"
                  alt="Mitra Tour & Travel"
                  className="w-36 h-12 object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </Link>

            {/* Enhanced Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { href: "/#hero", label: "Beranda", icon: Home },
                { href: "/#benefit", label: "Keuntungan", icon: User },
                { href: "/#guide", label: "Panduan Mitra", icon: BookText },
                { href: "/#faq", label: "FAQ", icon: HelpCircle },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-4 py-2 rounded-lg text-sm font-bold tracking-[0.3px] text-gray-700 hover:text-primary transition-all duration-300"
                >
                  <div className="flex items-center  gap-2">{item.label}</div>
                  <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200 flex gap-2">
                <Link
                  href="/register"
                  className="bg-secondary hover:bg-blue-100 text-primary px-6 py-2 rounded-lg font-bold tracking-[0.3px] text-sm transition-all duration-300 transform"
                >
                  <span className="relative z-10">Masuk</span>
                </Link>
                <Link
                  href="/register"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold tracking-[0.3px] text-sm transition-all duration-300 transform"
                >
                  <span className="relative z-10">Daftar</span>
                </Link>
              </div>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
                <SheetTrigger asChild>
                  <Menu className="h-7 w-7 text-primary" />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full max-w-sm bg-white/95 backdrop-blur-xl border-l border-white/20"
                >
                  <SheetHeader className="pb-6 border-b border-gray-100">
                    <SheetTitle className="flex items-center gap-3">
                      <Link href="/" className="group flex items-center">
                        <div className="relative">
                          <Image
                            src="/images/logo-mtt.png"
                            alt="Mitra Tour & Travel"
                            width={100}
                            height={100}
                            className="w-36 h-12 object-contain group-hover:scale-105 transition-all duration-300"
                          />
                        </div>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="mt-1 flex flex-col gap-2 px-4">
                    {[
                      { href: "/", label: "Beranda", icon: Home },
                      { href: "#benefit", label: "Keuntungan", icon: User },
                      {
                        href: "#guide",
                        label: "Panduan Vendor",
                        icon: BookText,
                      },
                      { href: "#faq", label: "FAQ", icon: HelpCircle },
                      { href: "/login", label: "Masuk", icon: LogIn },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenSidebar(false)}
                        className="group flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 text-gray-700 hover:text-blue-600"
                      >
                        <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-all duration-300">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/register"
                        onClick={() => setOpenSidebar(false)}
                        className="flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                      >
                        <User className="w-4 h-4" />
                        Daftar Vendor
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
