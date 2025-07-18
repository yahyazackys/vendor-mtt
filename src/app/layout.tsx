import type { Metadata } from "next";
import { Rubik, Tektur } from "next/font/google";
import "./globals.css";

const rubik = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mitra Tour & Travel Partner",
  description:
    "Gabung bersama Mitra Tour & Travel dan kelola hotel Anda dengan mudah.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" type="image/png" href="/favicon.ico" /> */}
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
