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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Step2HotelLocation() {
  const form = useFormContext();

  return (
    <>
      <h2 className="text-xl font-bold">Data Hotel & Lokasi</h2>

      <FormField
        control={form.control}
        name="namaHotel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nama Hotel</FormLabel>
            <FormControl>
              <Input placeholder="Contoh: Hotel Melati" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="alamat"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Alamat Lengkap</FormLabel>
            <FormControl>
              <Textarea placeholder="Alamat lengkap hotel" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="kota"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kota / Kabupaten</FormLabel>
            <FormControl>
              <Input placeholder="Contoh: Palembang" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="kategori"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kategori Hotel</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori hotel" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="non-bintang">Non-bintang</SelectItem>
                <SelectItem value="bintang-1">Bintang 1</SelectItem>
                <SelectItem value="bintang-2">Bintang 2</SelectItem>
                <SelectItem value="bintang-3">Bintang 3</SelectItem>
                <SelectItem value="bintang-4">Bintang 4</SelectItem>
                <SelectItem value="bintang-5">Bintang 5</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="totalKamar"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total Kamar</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Misal: 120" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
