import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marco Rossi — Photography",
  description:
    "Milan-based freelance photographer specializing in portraits, events, and commercial photography.",
  openGraph: {
    title: "Marco Rossi — Photography",
    description:
      "Milan-based freelance photographer specializing in portraits, events, and commercial photography.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F5F0] antialiased cursor-crosshair">
        {children}
      </body>
    </html>
  );
}
