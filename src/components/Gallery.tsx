"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    title: "Alpine Dawn",
    category: "Landscape",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    title: "Studio Light",
    category: "Portrait",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Geometry",
    category: "Architecture",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    title: "Tuscan Morning",
    category: "Landscape",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    title: "Natural Light",
    category: "Portrait",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&q=80",
    title: "Concrete & Glass",
    category: "Architecture",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    title: "Golden Valley",
    category: "Landscape",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    title: "Character Study",
    category: "Portrait",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    title: "Perspective",
    category: "Architecture",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    title: "Cascade",
    category: "Landscape",
    tall: false,
  },
];

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading text-xs tracking-[0.3em] text-[#F5F5F0]/40 mb-16 text-center">
          Selected Work
        </h2>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group break-inside-avoid overflow-hidden bg-[#1A1A1A]"
            >
              <div className={`relative ${photo.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                    loadedImages.has(index)
                      ? "blur-0 opacity-100"
                      : "blur-lg opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/60 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="heading text-xs tracking-[0.2em] text-[#C8A96E] mb-1">
                    {photo.category}
                  </p>
                  <h3 className="heading text-lg tracking-[0.1em] text-[#F5F5F0]">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
