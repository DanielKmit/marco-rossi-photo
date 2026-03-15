const publications = [
  { name: "Vogue Italia", style: "italic" },
  { name: "GQ", style: "normal" },
  { name: "National Geographic", style: "normal" },
  { name: "Vanity Fair", style: "italic" },
  { name: "Condé Nast Traveler", style: "normal" },
];

export default function Press() {
  return (
    <section className="py-24 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <p className="heading text-xs tracking-[0.3em] text-[#F5F5F0]/20 text-center mb-16">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {publications.map((pub, index) => (
            <span
              key={index}
              className={`text-2xl md:text-3xl text-[#F5F5F0]/15 hover:text-[#F5F5F0]/30 transition-colors duration-500 ${
                pub.style === "italic" ? "body-serif italic" : "heading tracking-[0.1em]"
              }`}
            >
              {pub.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
