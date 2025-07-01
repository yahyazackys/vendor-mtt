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
import { Checkbox } from "@/components/ui/checkbox";

export default function Step1Account() {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">1. Buat Akun & Informasi Dasar</h2>

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="namaPIC"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nama PIC</FormLabel>
            <FormControl>
              <Input placeholder="Nama Penanggung Jawab" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="noHP"
        render={({ field }) => (
          <FormItem>
            <FormLabel>No HP</FormLabel>
            <FormControl>
              <Input placeholder="08xxxxxxxxxx" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="passwordConfirmation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="agree"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="text-sm">
              Saya menyetujui syarat & ketentuan
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
