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
    images: [{ url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "Marco Rossi Photography" }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Marco Rossi Photography",
    description: "Milan-based freelance photographer specializing in portraits, events, and commercial photography.",
    url: "https://marco-rossi.vercel.app",
    address: { "@type": "PostalAddress", addressLocality: "Milan", addressCountry: "IT" },
    serviceType: ["Portrait Photography", "Event Photography", "Commercial Photography", "Wedding Photography"],
    priceRange: "€€€",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marco Rossi",
    jobTitle: "Photographer",
    url: "https://marco-rossi.vercel.app",
    address: { "@type": "PostalAddress", addressLocality: "Milan", addressCountry: "IT" },
    knowsAbout: ["Photography", "Portraits", "Events", "Commercial Photography"],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F5F0] antialiased cursor-crosshair">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
