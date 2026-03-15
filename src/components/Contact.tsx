export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading text-xs tracking-[0.3em] text-[#C8A96E] mb-8">
          Get in Touch
        </h2>
        <p className="body-serif text-[#F5F5F0]/50 text-lg mb-16 max-w-lg mx-auto leading-relaxed">
          Available for commissions, collaborations, and editorial work. 
          Based in Milan, working worldwide.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:hello@marcorossi.photo"
            className="block heading text-2xl md:text-4xl tracking-[0.1em] text-[#F5F5F0] hover:text-[#C8A96E] transition-colors duration-300"
          >
            hello@marcorossi.photo
          </a>
          <a
            href="https://instagram.com/marcorossi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block heading text-sm tracking-[0.3em] text-[#F5F5F0]/40 hover:text-[#C8A96E] transition-colors duration-300"
          >
            @marcorossi
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-[#F5F5F0]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#F5F5F0]/20 heading tracking-[0.2em]">
          © 2026 Marco Rossi Photography
        </p>
        <p className="text-xs text-[#F5F5F0]/20 heading tracking-[0.2em]">
          Milan, Italy
        </p>
      </div>
    </section>
  );
}
