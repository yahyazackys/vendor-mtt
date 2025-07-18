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
import { Menu, Home, User, BookText, HelpCircle, LogIn } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Changed from 768 to 1024 for lg breakpoint
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

  const navigationItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/#about", label: "Tentang", icon: User },
    { href: "/#services", label: "Layanan", icon: BookText },
    { href: "/#faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <>
      {/* Modern Navbar with Glass Effect */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-white/90 backdrop-blur-lg border-b border-blue-100"
        }`}
      >
        <div className="max-w-7xl mx-auto max-xl:px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="group flex items-center flex-shrink-0">
              <div className="relative">
                <Image
                  src="/logo-primary.png"
                  alt="Mitra Tour & Travel"
                  width={112}
                  height={40}
                  className="w-36 h-12 sm:w-44 sm:h-20 object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </Link>

            {/* Enhanced Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-2">{item.label}</div>
                  <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200 flex gap-2">
                <Link
                  href="/registration"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  <span className="relative z-10">Hubungi Kami</span>
                </Link>
              </div>
            </nav>

            {/* Enhanced Mobile/Tablet Menu - Visible on md and below */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Auth Buttons - Hidden on very small screens */}
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  href="/registration"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium text-xs transition-all duration-300"
                >
                  Hubungi Kami
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className=" hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <Menu className="h-7 w-7 text-primary" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-full px-4 max-w-xs bg-white/98 backdrop-blur-xl border-l border-gray-200"
                >
                  <SheetHeader className="pb-6 border-b border-gray-100">
                    <SheetTitle className="flex items-center justify-between">
                      <Link
                        href="/"
                        className="group flex items-center"
                        onClick={() => setOpenSidebar(false)}
                      >
                        <Image
                          src="/logo-primary.png"
                          alt="Mitra Tour & Travel"
                          width={140}
                          height={60}
                          className="object-contain"
                          loading="lazy"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Navigation Menu */}
                  <nav className="flex flex-col gap-0">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenSidebar(false)}
                        className="group flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 text-gray-700 hover:text-primary"
                      >
                        <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-all duration-300">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}

                    {/* Mobile Auth Section */}
                    <div className="mt-2 pt-6 border-t border-gray-100 space-y-3">
                      <Link
                        href="htt"
                        onClick={() => setOpenSidebar(false)}
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white p-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Hubungi Kami
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
