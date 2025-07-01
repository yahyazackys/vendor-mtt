"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  MapPin,
  Building2,
  FileText,
  Check,
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Lock,
  Hotel,
  Star,
  Upload,
  Bed,
  DollarSign,
  Calendar,
  Camera,
} from "lucide-react";
import HotelPhotoDropzone from "@/components/registration/hotel-photo-dropzone";
import Navbar from "@/components/partial/navbar";
import NavbarFixed from "@/components/partial/navbar-fixed";

const formSchema = z
  .object({
    email: z.string().email("Email tidak valid"),
    namaPIC: z.string().min(1, "Nama PIC harus diisi"),
    noHP: z.string().min(10, "Nomor HP minimal 10 digit"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    passwordConfirmation: z
      .string()
      .min(6, "Konfirmasi password minimal 6 karakter"),
    agree: z.boolean().refine((val) => val === true, {
      message: "Harus menyetujui syarat",
    }),
    namaHotel: z.string().min(1, "Nama hotel harus diisi"),
    alamat: z.string().min(1, "Alamat harus diisi"),
    kota: z.string().min(1, "Kota harus diisi"),
    kategori: z.string().min(1, "Kategori harus dipilih"),
    totalKamar: z.string().min(1, "Total kamar harus diisi"),
    fotoHotel: z.any(),
    rooms: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        facilities: z.string().optional(),
        units: z.string(),
        photo: z.any().optional(),
        publishRate: z.string(),
        corporateRate: z.string(),
        periodStart: z.string(),
        periodEnd: z.string(),
        blackoutDate: z.string().optional(),
      })
    ),
    documentNPWP: z.any().optional(),
    documentSIUP: z.any().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password tidak sama",
    path: ["passwordConfirmation"],
  });

type RegistrationFormData = z.infer<typeof formSchema>;

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  register,
  error,
  ...props
}: any) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      )}
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-all duration-300 bg-white/80 backdrop-blur-sm
          ${Icon ? "pl-12" : ""}
          ${error ? "border-red-500 focus:ring-red-500" : ""}
        `}
        {...props}
      />
    </div>
    {error && (
      <p className="text-red-500 text-sm animate-pulse">{error.message}</p>
    )}
  </div>
);

const Step1Account = ({ register, errors }: any) => (
  <div className="animate-in slide-in-from-right-4 duration-500 space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Informasi Akun
      </h2>
      <p className="text-gray-600 mt-2">
        Buat akun untuk mendaftarkan hotel Anda
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="admin@hotel.com"
        icon={Mail}
        register={register}
        error={errors.email}
      />
      <InputField
        label="Nama PIC"
        name="namaPIC"
        placeholder="Nama lengkap"
        icon={User}
        register={register}
        error={errors.namaPIC}
      />
      <InputField
        label="No. HP"
        name="noHP"
        placeholder="08123456789"
        icon={Phone}
        register={register}
        error={errors.noHP}
      />
      <div className="space-y-6">
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          icon={Lock}
          register={register}
          error={errors.password}
        />
        <InputField
          label="Konfirmasi Password"
          name="passwordConfirmation"
          type="password"
          placeholder="••••••••"
          icon={Lock}
          register={register}
          error={errors.passwordConfirmation}
        />
      </div>
    </div>

    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
      <input
        {...register("agree")}
        type="checkbox"
        className="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
      />
      <div className="text-sm">
        <label className="text-gray-700">
          Saya menyetujui{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            syarat dan ketentuan
          </a>{" "}
          yang berlaku
        </label>
        {errors.agree && (
          <p className="text-red-500 text-sm mt-1 animate-pulse">
            {errors.agree.message}
          </p>
        )}
      </div>
    </div>
  </div>
);

const Step2HotelLocation = ({ register, errors }: any) => (
  <div className="animate-in slide-in-from-right-4 duration-500 space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Informasi Hotel
      </h2>
      <p className="text-gray-600 mt-2">
        Detail lokasi dan informasi hotel Anda
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <InputField
        label="Nama Hotel"
        name="namaHotel"
        placeholder="Hotel Mitra"
        icon={Hotel}
        register={register}
        error={errors.namaHotel}
      />
      <InputField
        label="Total Kamar"
        name="totalKamar"
        type="number"
        placeholder="50"
        icon={Bed}
        register={register}
        error={errors.totalKamar}
      />
    </div>

    <InputField
      label="Alamat Lengkap"
      name="alamat"
      placeholder="Jl. Merdeka No. 123"
      icon={MapPin}
      register={register}
      error={errors.alamat}
    />

    <div className="grid md:grid-cols-2 gap-6">
      <InputField
        label="Kota"
        name="kota"
        placeholder="Jakarta"
        icon={MapPin}
        register={register}
        error={errors.kota}
      />
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Kategori Hotel
        </label>
        <div className="relative">
          <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            {...register("kategori")}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
          >
            <option value="">Pilih kategori</option>
            <option value="1-star">1 Bintang</option>
            <option value="2-star">2 Bintang</option>
            <option value="3-star">3 Bintang</option>
            <option value="4-star">4 Bintang</option>
            <option value="5-star">5 Bintang</option>
          </select>
        </div>
        {errors.kategori && (
          <p className="text-red-500 text-sm animate-pulse">
            {errors.kategori.message}
          </p>
        )}
      </div>
    </div>

    <HotelPhotoDropzone />
  </div>
);

const Step3RoomDetails = ({ rooms, setRooms }: any) => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [roomForm, setRoomForm] = useState({
    name: "",
    size: "",
    facilities: "",
    units: "",
    publishRate: "",
    corporateRate: "",
    periodStart: "",
    periodEnd: "",
    blackoutDate: "",
  });

  const addRoom = () => {
    if (editIndex >= 0) {
      const updatedRooms = [...rooms];
      updatedRooms[editIndex] = roomForm;
      setRooms(updatedRooms);
      setEditIndex(-1);
    } else {
      setRooms([...rooms, roomForm]);
    }

    setRoomForm({
      name: "",
      size: "",
      facilities: "",
      units: "",
      publishRate: "",
      corporateRate: "",
      periodStart: "",
      periodEnd: "",
      blackoutDate: "",
    });
    setShowForm(false);
  };

  const editRoom = (index: number) => {
    setRoomForm(rooms[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const deleteRoom = (index: number) => {
    setRooms(rooms.filter((_: any, i: number) => i !== index));
  };

  return (
    <div className="animate-in slide-in-from-right-4 duration-500 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Detail Kamar
        </h2>
        <p className="text-gray-600 mt-2">
          Tambahkan tipe kamar dan tarif yang tersedia
        </p>
      </div>

      {/* Room List */}
      <div className="space-y-4">
        {rooms.map((room: any, index: number) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200 animate-in fade-in duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">
                  {room.name}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mt-3 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Ukuran:</span> {room.size} m²
                  </p>
                  <p>
                    <span className="font-medium">Jumlah:</span> {room.units}{" "}
                    kamar
                  </p>
                  <p>
                    <span className="font-medium">Tarif Publish:</span> Rp{" "}
                    {room.publishRate}
                  </p>
                </div>
                {room.facilities && (
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Fasilitas:</span>{" "}
                    {room.facilities}
                  </p>
                )}
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  type="button"
                  onClick={() => editRoom(index)}
                  className="px-3 py-1 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteRoom(index)}
                  className="px-3 py-1 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Room Button */}
      {!showForm && (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="w-full py-4 border-2 border-dashed border-blue-300 rounded-xl text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium"
        >
          + Tambah Tipe Kamar
        </button>
      )}

      {/* Room Form */}
      {showForm && (
        <div className="p-6 bg-white rounded-xl border-2 border-blue-200 animate-in slide-in-from-bottom-4 duration-300">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            {editIndex >= 0 ? "Edit Tipe Kamar" : "Tambah Tipe Kamar"}
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Kamar
              </label>
              <input
                type="text"
                value={roomForm.name}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Deluxe Room"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ukuran (m²)
              </label>
              <input
                type="text"
                value={roomForm.size}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, size: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="25"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jumlah Kamar
              </label>
              <input
                type="text"
                value={roomForm.units}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, units: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fasilitas
              </label>
              <input
                type="text"
                value={roomForm.facilities}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, facilities: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="AC, TV, WiFi"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tarif Publish
              </label>
              <input
                type="text"
                value={roomForm.publishRate}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, publishRate: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="500000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tarif Corporate
              </label>
              <input
                type="text"
                value={roomForm.corporateRate}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, corporateRate: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="450000"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Periode Mulai
              </label>
              <input
                type="date"
                value={roomForm.periodStart}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, periodStart: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Periode Berakhir
              </label>
              <input
                type="date"
                value={roomForm.periodEnd}
                onChange={(e) =>
                  setRoomForm({ ...roomForm, periodEnd: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={addRoom}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              {editIndex >= 0 ? "Update Kamar" : "Simpan Kamar"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditIndex(-1);
                setRoomForm({
                  name: "",
                  size: "",
                  facilities: "",
                  units: "",
                  publishRate: "",
                  corporateRate: "",
                  periodStart: "",
                  periodEnd: "",
                  blackoutDate: "",
                });
              }}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Step4Documents = ({ register }: any) => (
  <div className="animate-in slide-in-from-right-4 duration-500 space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Dokumen Pendukung
      </h2>
      <p className="text-gray-600 mt-2">
        Upload dokumen yang diperlukan (opsional)
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          NPWP
        </label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors duration-300 bg-gray-50/50 cursor-pointer"
          onClick={() => document.getElementById("documentNPWP")?.click()}
        >
          <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 text-sm">Upload NPWP</p>
          <input
            id="documentNPWP"
            {...register("documentNPWP")}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          SIUP
        </label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors duration-300 bg-gray-50/50 cursor-pointer"
          onClick={() => document.getElementById("documentSIUP")?.click()}
        >
          <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 text-sm">Upload SIUP</p>
          <input
            id="documentSIUP"
            {...register("documentSIUP")}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
          />
        </div>
      </div>
    </div>

    <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
      <h3 className="font-semibold text-gray-800 mb-2">Catatan:</h3>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Dokumen yang dapat diunggah: PDF, JPG, PNG</li>
        <li>• Maksimal ukuran file: 5MB</li>
        <li>• Dokumen akan diverifikasi oleh tim kami</li>
      </ul>
    </div>
  </div>
);

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, title: "Akun", icon: User },
    { number: 2, title: "Hotel", icon: Building2 },
    { number: 3, title: "Kamar", icon: Bed },
    { number: 4, title: "Dokumen", icon: FileText },
  ];

  return (
    <div className="mb-8 px-4">
      <div className="flex items-center justify-between relative max-w-2xl mx-auto">
        {/* Progress Line Background */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 rounded-full -z-10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-out shadow-sm"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep >= step.number;
          const isCurrent = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div
              key={step.number}
              className="flex flex-col items-center relative z-10"
            >
              <div
                className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform
                    ${
                      isActive
                        ? isCurrent
                          ? "bg-blue-500 text-white shadow-lg scale-110 ring-4 ring-blue-100"
                          : "bg-green-500 text-white shadow-lg scale-105"
                        : "bg-white border-2 border-gray-300 text-gray-400 hover:border-gray-400"
                    }
                  `}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 animate-in fade-in-0 zoom-in-95 duration-300" />
                ) : (
                  <Icon
                    className={`w-5 h-5 ${isCurrent ? "animate-pulse" : ""}`}
                  />
                )}
              </div>

              <span
                className={`
                    mt-3 text-sm font-medium transition-all duration-300 text-center
                    ${
                      isActive
                        ? isCurrent
                          ? "text-blue-600 font-semibold"
                          : "text-green-600"
                        : "text-gray-400"
                    }
                  `}
              >
                {step.title}
              </span>

              {/* Step Number for Mobile */}
              <span className="block sm:hidden text-xs text-gray-500 mt-1">
                {step.number}/4
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress Percentage */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          Langkah {currentStep} dari 4 ({Math.round((currentStep / 4) * 100)}%
          selesai)
        </span>
      </div>
    </div>
  );
};

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [rooms, setRooms] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<RegistrationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      namaPIC: "",
      noHP: "",
      password: "",
      passwordConfirmation: "",
      agree: false,
      namaHotel: "",
      alamat: "",
      kota: "",
      kategori: "",
      totalKamar: "",
      fotoHotel: null,
      rooms: [],
      documentNPWP: null,
      documentSIUP: null,
    },
    mode: "onTouched",
  });

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = methods;

  const getStepFields = (step: number): (keyof RegistrationFormData)[] => {
    switch (step) {
      case 1:
        return [
          "email",
          "namaPIC",
          "noHP",
          "password",
          "passwordConfirmation",
          "agree",
        ];
      case 2:
        return [
          "namaHotel",
          "alamat",
          "kota",
          "kategori",
          "totalKamar",
          "fotoHotel",
        ];
      case 3:
        return [];
      case 4:
        return [];
      default:
        return [];
    }
  };

  const nextStep = async () => {
    const fields = getStepFields(step);
    const valid = await methods.trigger(fields as any);

    if (valid) {
      // Smooth transition effect
      setStep((s) => Math.min(s + 1, 4));

      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Shake animation for invalid form
      const formElement = document.querySelector("form");
      if (formElement) {
        formElement.classList.add("animate-shake");
        setTimeout(() => formElement.classList.remove("animate-shake"), 500);
      }
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    try {
      const finalData = {
        ...data,
        rooms: rooms,
      };

      console.log("Registration data:", finalData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert("Pendaftaran berhasil! Data akan diproses oleh tim kami.");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Informasi Akun";
      case 2:
        return "Informasi Hotel";
      case 3:
        return "Detail Kamar";
      case 4:
        return "Upload Dokumen";
      default:
        return "Pendaftaran";
    }
  };

  const getStepDescription = (step: number) => {
    switch (step) {
      case 1:
        return "Buat akun Anda untuk memulai registrasi hotel";
      case 2:
        return "Lengkapi informasi dasar tentang hotel Anda";
      case 3:
        return "Tambahkan detail kamar yang tersedia";
      case 4:
        return "Upload dokumen yang diperlukan untuk verifikasi";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div> */}

      {/* Header */}
      <NavbarFixed />

      <FormProvider {...methods}>
        <div className="relative z-10 w-full min-h-screen max-w-6xl mx-auto flex flex-col py-8 px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <StepIndicator currentStep={step} />

          {/* Form Card */}
          <div className="flex-1 flex flex-col">
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {getStepTitle(step)}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {getStepDescription(step)}
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                <div className="transition-all duration-500 ease-in-out">
                  {step === 1 && (
                    <div className="animate-in slide-in-from-right-5 fade-in-0 duration-500">
                      <Step1Account register={register} errors={errors} />
                    </div>
                  )}
                  {step === 2 && (
                    <div className="animate-in slide-in-from-right-5 fade-in-0 duration-500">
                      <Step2HotelLocation register={register} errors={errors} />
                    </div>
                  )}
                  {step === 3 && (
                    <div className="animate-in slide-in-from-right-5 fade-in-0 duration-500">
                      <Step3RoomDetails rooms={rooms} setRooms={setRooms} />
                    </div>
                  )}
                  {step === 4 && (
                    <div className="animate-in slide-in-from-right-5 fade-in-0 duration-500">
                      <Step4Documents register={register} />
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium shadow-sm hover:shadow-md group"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                      Kembali
                    </button>
                  ) : (
                    <div className="hidden sm:block"></div>
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={isSubmitting}
                      className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl group"
                    >
                      Lanjut
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                          Kirim Data
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </FormProvider>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
