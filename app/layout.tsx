import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Datelume",
  description: "A minimal, elegant wall calendar experience with range selection and notes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} bg-stone-100 text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
