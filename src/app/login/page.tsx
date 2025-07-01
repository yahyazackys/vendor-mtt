// app/login/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(1, { message: "Password wajib diisi" }),
  rememberMe: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Login Data:", data);
      // Simulasi proses login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect ke dashboard atau halaman utama
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8 relative">
      <div className="w-full max-w-md relative z-10">
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
                  Selamat Datang
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Masuk ke akun Anda untuk mengelola hotel dan melihat performa
                  bisnis Anda.
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

                {/* Password Field */}
                <div className="group">
                  <div className="relative">
                    <Input
                      id="password"
                      {...register("password")}
                      placeholder=" "
                      type={showPassword ? "text" : "password"}
                      className="pl-4 pr-12 pt-6 pb-2 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white rounded-lg h-14 transition-all duration-300 peer"
                    />
                    <Label
                      htmlFor="password"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                    >
                      Password
                    </Label>
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-end">
                  {/* <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      {...register("rememberMe")}
                      className="border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white rounded-md"
                    />
                    <Label
                      htmlFor="rememberMe"
                      className="text-gray-700 text-sm cursor-pointer"
                    >
                      Ingat saya
                    </Label>
                  </div> */}
                  <a
                    href="/forgot-password"
                    className="text-blue-600 hover:text-blue-700 text-sm underline decoration-blue-600/50 hover:decoration-blue-700 transition-colors duration-300"
                  >
                    Lupa password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full bg-primary hover:bg-sky-800 hover:cursor-pointer text-white font-semibold py-3 px-6 rounded-lg h-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Memproses..." : "Masuk"}
              </Button>

              {/* Register Link */}
              <Button
                type="button"
                className="mt-2 w-full bg-white shadow-none hover:bg-sky-50 hover:cursor-pointer text-primary font-semibold py-3 px-6 rounded-lg h-12"
              >
                <a href="/login">Belum punya akun? daftar disini</a>
              </Button>

              {/* Divider */}
              {/* <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-gray-500 text-sm">atau</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div> */}

              {/* Social Login Buttons */}
              {/* <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg h-12 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Masuk dengan Google</span>
                </Button>
              </div> */}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
