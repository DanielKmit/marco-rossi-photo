"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="about" className="py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
            alt="Marco Rossi portrait"
            fill
            className={`object-cover transition-all duration-1000 ${
              loaded ? "blur-0 opacity-100" : "blur-lg opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => setLoaded(true)}
          />
        </div>

        {/* Bio */}
        <div>
          <h2 className="heading text-xs tracking-[0.3em] text-[#C8A96E] mb-8">
            About
          </h2>
          <h3 className="heading text-3xl md:text-4xl tracking-[0.1em] text-[#F5F5F0] mb-8">
            Marco Rossi
          </h3>
          <div className="space-y-6 body-serif text-[#F5F5F0]/70 text-lg leading-relaxed">
            <p>
              Based in Milan, I&apos;ve spent the last twelve years capturing moments 
              that live between light and shadow. My work is driven by a deep reverence 
              for natural light and the stories it tells across landscapes, faces, and 
              the built environment.
            </p>
            <p>
              From the peaks of the Dolomites to the fashion houses of Via Montenapoleone, 
              I bring a cinematic eye to every project. Each photograph is an invitation 
              to pause — to see the extraordinary in the quiet details of our world.
            </p>
            <p className="italic text-[#C8A96E]/80">
              &ldquo;Photography is not about what you see — it&apos;s about what you 
              make others feel.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
