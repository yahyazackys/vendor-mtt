// app/registration/success/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center bg-gray-100 p-8 rounded-xl shadow-md">
        <CheckCircle className="mx-auto mb-4 text-green-500 w-12 h-12" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Registrasi Berhasil!
        </h1>
        <p className="text-gray-600 mb-6">
          Silakan cek email kamu untuk melakukan verifikasi sebelum login ke
          sistem.
        </p>
        <Button asChild className="w-full">
          <a href="https://panel.mitratourpartner.my.id/login">
            Login Sekarang
          </a>
        </Button>
      </div>
    </div>
  );
}
