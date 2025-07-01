"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Step4Documents() {
  const form = useFormContext();

  return (
    <>
      <h2 className="text-xl font-bold">Upload Dokumen Pendukung</h2>

      <FormField
        control={form.control}
        name="fotoHotel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Foto Hotel</FormLabel>
            <FormControl>
              <Input
                type="file"
                onChange={(e) => field.onChange(e.target.files?.[0])}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Tambahkan dokumen lain jika perlu */}
    </>
  );
}
