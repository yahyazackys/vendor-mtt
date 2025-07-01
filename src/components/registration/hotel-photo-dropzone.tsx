"use client";

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Plus, Image as ImageIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface PreviewImage {
  file: File;
  preview: string;
  id: string;
}

export default function HotelPhotoDropzone() {
  const { setValue, watch } = useFormContext();
  const [previews, setPreviews] = useState<PreviewImage[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  // Inisialisasi ulang previews saat file sudah ada (misal balik dari step 3 ke step 2)
  useEffect(() => {
    const currentFiles = watch("fotoHotel");

    if (
      Array.isArray(currentFiles) &&
      currentFiles.length > 0 &&
      previews.length === 0
    ) {
      const restored = currentFiles.map((file: File) => ({
        file,
        preview: URL.createObjectURL(file),
        id: Math.random().toString(36).substring(2, 9),
      }));
      setPreviews(restored);
    }

    // Cleanup memory ketika komponen di-unmount
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDrop = (acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));

    const updatedPreviews = [...previews, ...newImages];
    setPreviews(updatedPreviews);

    // Update react-hook-form value
    const allFiles = updatedPreviews.map((img) => img.file);
    setValue("fotoHotel", allFiles);
  };

  const removeImage = (id: string) => {
    const updatedPreviews = previews.filter((img) => {
      if (img.id === id) {
        URL.revokeObjectURL(img.preview);
        return false;
      }
      return true;
    });

    setPreviews(updatedPreviews);
    const allFiles = updatedPreviews.map((img) => img.file);
    setValue("fotoHotel", allFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024,
    onDragEnter: () => setIsDragOver(true),
    onDragLeave: () => setIsDragOver(false),
    onDropAccepted: () => setIsDragOver(false),
    onDropRejected: () => setIsDragOver(false),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-semibold text-gray-800">
          Foto Hotel
        </label>
        {previews.length > 0 && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {previews.length}/10 foto
          </span>
        )}
      </div>

      {/* Preview */}
      {previews.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {previews.map((image) => (
            <div
              key={image.id}
              className="relative group aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={image.preview}
                alt="Preview foto hotel"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              <button
                onClick={() => removeImage(image.id)}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                type="button"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {(image.file.size / 1024 / 1024).toFixed(1)}MB
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dropzone Area */}
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
          "hover:border-blue-400 hover:bg-blue-50/30",
          isDragActive || isDragOver
            ? "border-blue-500 bg-blue-50 scale-[1.02] shadow-lg"
            : "border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100/50",
          previews.length > 0 ? "p-6" : "p-12"
        )}
      >
        <input {...getInputProps()} name="fotoHotel" />

        <div className="relative text-center">
          {previews.length > 0 ? (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Plus className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-gray-700 font-medium mb-1">
                Tambah foto lainnya
              </p>
              <p className="text-sm text-gray-500">
                Atau drag & drop foto di sini
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6">
                <ImageIcon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-800">
                  Upload foto hotel Anda
                </p>
                <p className="text-gray-600">
                  Klik untuk memilih atau drag & drop foto di sini
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>PNG, JPG, WEBP</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Max 5MB</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Max 10 foto</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drag overlay */}
        {(isDragActive || isDragOver) && (
          <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/90 rounded-xl p-4 shadow-lg">
              <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-blue-800 font-semibold">
                Lepaskan untuk upload
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
