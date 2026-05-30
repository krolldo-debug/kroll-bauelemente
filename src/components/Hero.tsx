import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#0F0D0A]">
      {/* Full-bleed photo */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
        alt="Modernes Haus mit großen Fensterfronten"
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay z-[1]" />

      {/* Directional gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0A]/95 via-[#0F0D0A]/55 to-[#0F0D0A]/10 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/80 via-transparent to-[#0F0D0A]/30 z-[2]" />

      {/* Content wrapper */}
      <div className="relative z-[3] h-full flex flex-col justify-between">

        {/* Eyebrow — top */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 lg:pt-32">
          <div className="flex items-center gap-5">
            <div className="h-px bg-[#B8965A] w-10 line-grow-x" />
            <span className="fade-in delay-1 text-[#B8965A] text-[10px] tracking-[0.28em] uppercase font-medium">
              Seit 1992 · Stahnsdorf bei Potsdam
            </span>
          </div>
        </div>

        {/* Main typography */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 lg:pb-28">
          <div className="max-w-5xl">
            <h1 className="font-display leading-[0.88] tracking-[-0.01em] mb-10">
              <span className="fade-up delay-1 block text-[3.2rem] sm:text-[5rem] lg:text-[7.8rem] italic font-light text-white">
                Maßgefertigte
              </span>
              <span className="fade-up delay-2 block text-[3.2rem] sm:text-[5rem] lg:text-[7.8rem] font-semibold text-white not-italic">
                Bauelemente
              </span>
              <span className="fade-up delay-3 block text-[3.2rem] sm:text-[5rem] lg:text-[7.8rem] italic font-light text-white/30">
                vom Fachmann.
              </span>
            </h1>

            {/* Gold rule */}
            <div className="fade-up delay-3 w-16 h-px bg-[#B8965A] mb-10" />

            {/* Sub-content grid */}
            <div className="fade-up delay-4 grid sm:grid-cols-2 gap-8 lg:gap-16 items-end max-w-3xl">
              <p className="text-white/45 text-sm leading-[1.9] font-light tracking-wide">
                Fenster, Türen, Rollläden, Wintergärten, Markisen und Insektenschutz —
                individuell geplant und professionell montiert.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-[#B8965A] text-[#0F0D0A] text-sm font-semibold px-7 py-3.5 tracking-wide hover:bg-[#D4AE78] transition-colors duration-300"
                >
                  Beratung anfragen
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center border border-white/20 text-white/70 text-sm font-light px-7 py-3.5 tracking-wide hover:border-white/40 hover:text-white transition-colors duration-300"
                >
                  Leistungen entdecken
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — right side */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 z-[3]">
        <span className="text-white/25 text-[9px] tracking-[0.28em] uppercase font-medium rotate-0">
          Scroll
        </span>
        <div className="w-px h-14 bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#B8965A] scroll-line" />
        </div>
      </div>

      {/* Year badge — bottom left corner accent */}
      <div className="absolute bottom-8 left-6 lg:left-12 z-[3] hidden sm:block">
        <span className="font-display text-[11px] italic text-white/20 tracking-widest">
          Est. 1992
        </span>
      </div>
    </section>
  );
}
