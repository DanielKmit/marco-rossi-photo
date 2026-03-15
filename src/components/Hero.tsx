"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Dramatic mountain landscape"
          fill
          priority
          className={`object-cover transition-all duration-1000 ${
            loaded ? "scale-100 blur-0 opacity-100" : "scale-105 blur-lg opacity-0"
          }`}
          sizes="100vw"
          onLoad={() => setLoaded(true)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h1
          className={`heading text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] text-[#F5F5F0] transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Marco Rossi
        </h1>
        <p
          className={`heading text-sm md:text-base tracking-[0.5em] text-[#F5F5F0]/70 mt-6 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Photography
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#C8A96E] to-transparent mx-auto" />
      </div>
    </section>
  );
}
