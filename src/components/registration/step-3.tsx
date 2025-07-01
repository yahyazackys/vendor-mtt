"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Room {
  name: string;
  size: string;
  facilities?: string;
  units: string;
  publishRate: string;
  corporateRate: string;
  periodStart: string;
  periodEnd: string;
  photo?: any;
  blackoutDate?: string;
}

export default function Step3RoomDetails({
  rooms,
  setRooms,
}: {
  rooms: Room[];
  setRooms: (rooms: Room[]) => void;
}) {
  const [room, setRoom] = useState<Room>({
    name: "",
    size: "",
    facilities: "",
    units: "",
    publishRate: "",
    corporateRate: "",
    periodStart: "",
    periodEnd: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleAddRoom = () => {
    setRooms([...rooms, room]);
    setRoom({
      name: "",
      size: "",
      facilities: "",
      units: "",
      publishRate: "",
      corporateRate: "",
      periodStart: "",
      periodEnd: "",
    });
  };

  return (
    <>
      <h2 className="text-xl font-bold">Detail Kamar & Harga Corporate</h2>

      <div className="grid gap-3">
        <Label>Nama Kamar</Label>
        <Input name="name" value={room.name} onChange={handleChange} />
        <Label>Luas Kamar</Label>
        <Input name="size" value={room.size} onChange={handleChange} />
        <Label>Fasilitas</Label>
        <Input
          name="facilities"
          value={room.facilities}
          onChange={handleChange}
        />
        <Label>Jumlah Unit</Label>
        <Input name="units" value={room.units} onChange={handleChange} />
        <Label>Harga Publish</Label>
        <Input
          name="publishRate"
          value={room.publishRate}
          onChange={handleChange}
        />
        <Label>Harga Corporate</Label>
        <Input
          name="corporateRate"
          value={room.corporateRate}
          onChange={handleChange}
        />
        <Label>Periode Awal</Label>
        <Input
          type="date"
          name="periodStart"
          value={room.periodStart}
          onChange={handleChange}
        />
        <Label>Periode Akhir</Label>
        <Input
          type="date"
          name="periodEnd"
          value={room.periodEnd}
          onChange={handleChange}
        />

        <Button type="button" onClick={handleAddRoom}>
          Tambah Kamar
        </Button>
      </div>

      <ul className="mt-4 space-y-2 text-sm">
        {rooms.map((r, i) => (
          <li key={i} className="border p-2 rounded">
            {r.name} - {r.size}m² ({r.units} unit)
          </li>
        ))}
      </ul>
    </>
  );
}
