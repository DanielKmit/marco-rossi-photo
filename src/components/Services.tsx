const services = [
  {
    title: "Portrait Session",
    price: "€300",
    description:
      "Two-hour session in studio or on location. Includes 20 edited images delivered in high resolution.",
    features: ["2 hours", "20 edited photos", "Online gallery", "Print-ready files"],
  },
  {
    title: "Event Coverage",
    price: "€800",
    description:
      "Full-day event documentation with a cinematic editorial approach. Corporate events, weddings, exhibitions.",
    features: ["Full day", "100+ edited photos", "48h turnaround", "Highlight reel"],
  },
  {
    title: "Commercial",
    price: "€1,500",
    description:
      "Bespoke commercial shoots for brands, editorials, and campaigns. Includes art direction and post-production.",
    features: ["Art direction", "Full post-production", "Usage rights", "Campaign-ready"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading text-xs tracking-[0.3em] text-[#F5F5F0]/60 mb-16 text-center">
          Services & Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#1A1A1A]/50">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] p-10 group hover:bg-[#1A1A1A] transition-colors duration-500"
            >
              <p className="heading text-xs tracking-[0.2em] text-[#C8A96E] mb-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="heading text-xl tracking-[0.1em] text-[#F5F5F0] mb-2">
                {service.title}
              </h3>
              <p className="heading text-3xl tracking-[0.05em] text-[#F5F5F0] mb-6">
                {service.price}
              </p>
              <p className="body-serif text-[#F5F5F0]/50 leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#F5F5F0]/40 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 bg-[#C8A96E] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
