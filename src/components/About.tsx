import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const qualities = [
  "Individuelle Beratung vor Ort",
  "Präzises Aufmaß durch Fachkräfte",
  "Professionelle Montage",
  "Markenprodukte namhafter Hersteller",
  "Langjährige Garantie auf alle Produkte",
  "Faire, transparente Preise",
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-[#EDE8DF] overflow-hidden">
      {/* Pull quote — full width editorial */}
      <AnimateIn>
        <div className="border-b border-[#DDD8CF]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <blockquote className="font-display text-[1.6rem] sm:text-[2.1rem] lg:text-[2.8rem] italic font-light text-[#0F0D0A] leading-[1.35] max-w-4xl tracking-[-0.01em]">
              „Seit über drei Jahrzehnten verbinden wir handwerkliche Sorgfalt
              mit persönlichem Vertrauen — projekt für projekt, kunde für kunde."
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-8 h-px bg-[#B8965A]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#B8965A] font-medium">
                Thomas Kroll, Inhaber
              </span>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Main about content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Image with frame accent */}
          <AnimateIn from="left">
            <div className="relative">
              {/* Offset border frame */}
              <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-[#B8965A]/30 hidden lg:block" />

              <div className="relative aspect-[4/5] max-w-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80"
                  alt="Modernes Wohnhaus mit professionell montierten Bauelementen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle color wash */}
                <div className="absolute inset-0 bg-[#B8965A]/8 mix-blend-multiply" />
              </div>

              {/* Stat badge */}
              <div className="absolute -bottom-6 -right-4 lg:right-4 bg-[#0F0D0A] text-white px-8 py-7">
                <div className="font-display text-[3.5rem] font-light leading-none">30</div>
                <div className="font-display text-[3.5rem] font-light leading-none text-[#B8965A]">+</div>
                <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-2 font-medium">
                  Jahre<br />Erfahrung
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Text content */}
          <AnimateIn from="right">
            <div className="pt-8 lg:pt-0">
              <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-5">
                Über uns
              </p>
              <h2 className="font-display text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] font-light text-[#0F0D0A] leading-[1.05] tracking-[-0.01em] mb-8">
                Ihr verlässlicher
                <br />
                <em>Partner seit 1992</em>
              </h2>

              <p className="text-[#6B6A68] leading-[1.9] mb-5 text-[15px] font-light">
                Kroll &amp; Kroll Bauelemente GbR ist ein inhabergeführtes
                Familienunternehmen aus Stahnsdorf bei Potsdam. Seit über drei
                Jahrzehnten stehen wir für Qualität, Zuverlässigkeit und
                persönlichen Service.
              </p>
              <p className="text-[#6B6A68] leading-[1.9] mb-12 text-[15px] font-light">
                Inhaber Thomas Kroll und sein Team betreuen Privat- und
                Gewerbekunden in Berlin, Brandenburg und Niedersachsen. Jedes
                Projekt wird individuell geplant und mit handwerklicher Sorgfalt
                umgesetzt.
              </p>

              {/* Qualities list */}
              <ul className="space-y-0 mb-12 border-t border-[#DDD8CF]">
                {qualities.map((q) => (
                  <li
                    key={q}
                    className="flex items-center gap-4 py-3.5 border-b border-[#DDD8CF] group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#B8965A] flex-shrink-0 rotate-45" />
                    <span className="text-[13.5px] text-[#3A3935] tracking-[0.01em]">{q}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 border border-[#0F0D0A] text-[#0F0D0A] text-[12px] font-semibold px-8 py-4 tracking-[0.1em] uppercase hover:bg-[#0F0D0A] hover:text-white transition-colors duration-400"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
