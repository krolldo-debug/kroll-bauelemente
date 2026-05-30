import Image from "next/image";
import { Check } from "lucide-react";
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
    <section id="ueber-uns" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <AnimateIn from="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md">
                <Image
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80"
                  alt="Modernes Wohnhaus mit professionell montierten Bauelementen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:right-0 bg-[#121210] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-white/60 text-sm mt-0.5">Jahre Erfahrung</div>
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn from="right">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9B9995] mb-3">
                Über uns
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#121210] leading-tight tracking-tight mb-6">
                Ihr verlässlicher
                <br />
                Partner seit 1992
              </h2>
              <p className="text-[#6B6A68] leading-relaxed mb-4">
                Kroll &amp; Kroll Bauelemente GbR ist ein inhabergeführtes
                Familienunternehmen aus Stahnsdorf bei Potsdam. Seit über drei
                Jahrzehnten stehen wir für Qualität, Zuverlässigkeit und
                persönlichen Service.
              </p>
              <p className="text-[#6B6A68] leading-relaxed mb-8">
                Inhaber Thomas Kroll und sein Team betreuen Privat- und
                Gewerbekunden in Berlin, Brandenburg und Niedersachsen. Jedes
                Projekt wird individuell geplant und mit handwerklicher Sorgfalt
                umgesetzt — von der ersten Beratung bis zur fertigen Montage.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                {qualities.map((q) => (
                  <li key={q} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#121210] flex items-center justify-center flex-shrink-0">
                      <Check size={9} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-[#3A3935]">{q}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 border border-[#121210] text-[#121210] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#121210] hover:text-white transition-colors"
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
