import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      {/* Full-bleed photo */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
        alt="Modernes Haus mit großen Fensterfronten"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay – dark at bottom, semi-transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          <p className="fade-up text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Seit 1992 — Stahnsdorf bei Potsdam
          </p>

          <h1 className="fade-up delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-7">
            Maßgefertigte
            <br />
            Bauelemente
            <br />
            <span className="text-white/60">vom Fachmann.</span>
          </h1>

          <p className="fade-up delay-2 text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Fenster, Türen, Rollläden, Wintergärten, Markisen und Insektenschutz —
            individuell geplant und professionell montiert in Berlin, Brandenburg
            und Niedersachsen.
          </p>

          <div className="fade-up delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-white text-[#121210] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Kostenlose Beratung anfragen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center border border-white/40 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#leistungen"
        className="absolute bottom-7 right-10 hidden lg:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-[10px] tracking-[0.15em] uppercase rotate-90 mb-2">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
