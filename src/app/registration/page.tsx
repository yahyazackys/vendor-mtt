// app/registration/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Controller } from "react-hook-form";

const formSchema = z
  .object({
    email: z.string().email({ message: "Email tidak valid" }),
    namaPIC: z.string().min(1, { message: "Wajib diisi" }),
    noHP: z.string().min(10, { message: "No HP tidak valid" }),
    password: z.string().min(6, { message: "Minimal 6 karakter" }),
    confirmPassword: z.string().min(6, { message: "Minimal 6 karakter" }),
    agree: z.boolean().refine((val) => val === true, {
      message: "Harus menyetujui S&K",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function RegistrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      namaPIC: "",
      noHP: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          namaPIC: data.namaPIC,
          noHP: data.noHP,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registrasi gagal");
      }

      const result = await response.json();
      console.log("Berhasil daftar:", result);

      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message || "Terjadi kesalahan");
        setShowErrorModal(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8 relative">
      {showErrorModal && (
        <AlertDialog open={showErrorModal} onOpenChange={setShowErrorModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Registrasi Gagal</AlertDialogTitle>
              <AlertDialogDescription>{errorMessage}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button onClick={() => setShowErrorModal(false)}>Tutup</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      <div className="w-full max-w-xl relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={handleGoBack}
          className="mb-6 text-white hover:cursor-pointer hover:text-gray-900 hover:bg-gray-100 border border-gray-200 rounded-full px-4 py-2 transition-all duration-300 group shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-0 group-hover:-translate-x-1 transition-transform duration-300" />
          Kembali
        </Button>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl p-8 transition-all duration-500 relative"
          >
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/images/logo-mtt.png"
                    alt="MTT Logo"
                    width={160}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                  Daftarkan Hotelmu
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Detail kontak yang kamu masukkan di sini akan digunakan untuk
                  komunikasi lebih lanjut dengan tim kami.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div className="group">
                  <div className="relative">
                    <Input
                      id="email"
                      {...register("email")}
                      placeholder=" "
                      type="email"
                      className="pl-4 pt-6 pb-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white rounded-lg h-14 transition-all duration-300 peer"
                    />
                    <Label
                      htmlFor="email"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      Email
                    </Label>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Nama PIC Field */}
                <div className="group">
                  <div className="relative">
                    <Input
                      id="namaPIC"
                      {...register("namaPIC")}
                      placeholder=" "
                      className="pl-4 pt-6 pb-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white rounded-lg h-14 transition-all duration-300 peer"
                    />
                    <Label
                      htmlFor="namaPIC"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      Nama PIC
                    </Label>
                  </div>
                  {errors.namaPIC && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.namaPIC.message}
                    </p>
                  )}
                </div>

                {/* No HP Field */}
                <div className="group">
                  <div className="relative">
                    <Input
                      id="noHP"
                      {...register("noHP")}
                      placeholder=" "
                      className="pl-4 pt-6 pb-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white rounded-lg h-14 transition-all duration-300 peer"
                    />
                    <Label
                      htmlFor="noHP"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      No. HP
                    </Label>
                  </div>
                  {errors.noHP && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.noHP.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="group">
                  <div className="relative">
                    <Input
                      id="password"
                      {...register("password")}
                      placeholder=" "
                      type="password"
                      className="pl-4 pt-6 pb-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white rounded-lg h-14 transition-all duration-300 peer"
                    />
                    <Label
                      htmlFor="password"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      Password
                    </Label>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="group">
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      {...register("confirmPassword")}
                      placeholder=" "
                      type="password"
                      className="pl-4 pt-6 pb-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white rounded-lg h-14 transition-all duration-300 peer"
                    />
                    <Label
                      htmlFor="confirmPassword"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      Konfirmasi Password
                    </Label>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Agreement Checkbox */}
                <Controller
                  control={methods.control}
                  name="agree"
                  render={({ field }) => (
                    <div className="flex items-start space-x-3 pt-2">
                      <Checkbox
                        id="agree"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white rounded-md"
                      />
                      <Label
                        htmlFor="agree"
                        className="text-gray-700 text-sm leading-relaxed cursor-pointer"
                      >
                        Saya menyetujui{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-700 underline decoration-blue-600/50 hover:decoration-blue-700 transition-colors duration-300"
                        >
                          syarat & ketentuan
                        </a>
                      </Label>
                    </div>
                  )}
                />
                {errors.agree && (
                  <p className="text-red-500 text-sm flex items-center mt-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.agree.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className={`mt-8 w-full text-white font-semibold py-3 px-6 rounded-lg h-12 transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-sky-800 hover:cursor-pointer"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin w-4 h-4" />
                    <span>Memproses...</span>
                  </div>
                ) : (
                  "Daftar"
                )}
              </Button>
              <Button
                type="button"
                className="mt-2 w-full bg-white shadow-none hover:bg-sky-50 hover:cursor-pointer text-primary font-semibold py-3 px-6 rounded-lg h-12"
              >
                <a href="/login">Sudah registrasi? masuk di sini</a>
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
