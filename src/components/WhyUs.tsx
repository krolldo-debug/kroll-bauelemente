import AnimateIn from "@/components/AnimateIn";

const facts = [
  {
    value: "1992",
    title: "Familienbetrieb seit Gründung",
    desc: "Drei Jahrzehnte Handwerk in Berlin, Brandenburg und Niedersachsen — gewachsen durch Empfehlungen, nicht durch Werbung.",
  },
  {
    value: "T & A",
    title: "Thomas & Andreas Kroll",
    desc: "Zwei Brüder, ein Betrieb. Persönlich erreichbar, direkt verantwortlich — kein Callcenter, keine anonyme Hotline.",
  },
  {
    value: "FK",
    title: "Zertifizierter Fachbetrieb",
    desc: "Autorisierter Partner von Schüco, REHAU, VEKA und Neher — ausschließlich Markenprodukte mit langer Lebensdauer.",
  },
];

const reasons = [
  {
    num: "I",
    title: "Persönliche Beratung",
    description:
      "Wir kommen zu Ihnen, hören zu und entwickeln gemeinsam die beste Lösung — ohne Callcenter, ohne Anonymität.",
  },
  {
    num: "II",
    title: "Präzises Aufmaß",
    description:
      "Millimetergenaues Aufmaß vor Ort durch unsere Fachkräfte. Keine Überraschungen bei der Montage.",
  },
  {
    num: "III",
    title: "Saubere Montage",
    description:
      "Fachgerecht, termingetreu und mit vollständiger Aufräumung danach. Qualität, die man sieht und fühlt.",
  },
  {
    num: "IV",
    title: "Markenqualität",
    description:
      "Ausschließlich bewährte Produkte namhafter Hersteller — für dauerhaften Mehrwert und lange Lebensdauer.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0F0D0A] overflow-hidden">

      {/* Facts — editorial 3-column */}
      <AnimateIn>
        <div className="border-b border-white/[0.1]">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.1]">
            {facts.map((f) => (
              <div key={f.title} className="px-8 lg:px-12 py-12 lg:py-16">
                <div className="font-display text-[2.8rem] lg:text-[3.8rem] font-light text-[#B8965A] leading-none mb-4 tracking-[-0.01em]">
                  {f.value}
                </div>
                <div className="text-white font-medium text-[13px] tracking-[0.06em] uppercase mb-3">
                  {f.title}
                </div>
                <p className="text-white/50 text-[13px] leading-[1.85] font-light max-w-xs">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-20 pb-10 sm:pb-12">
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-4">
                Warum Kroll &amp; Kroll
              </p>
              <h2 className="font-display text-[2.2rem] sm:text-[3rem] lg:text-[4.5rem] font-light text-white leading-[1.05] tracking-[-0.01em]">
                Was uns
                <br />
                <em>auszeichnet</em>
              </h2>
            </div>
            <p className="text-white/55 max-w-xs text-[13px] leading-[1.85] lg:text-right font-light">
              Wir sind kein anonymer Konzern — wir sind Ihr Nachbar
              und Handwerker vor Ort.
            </p>
          </div>
        </AnimateIn>
      </div>

      {/* Reasons — editorial list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 sm:pb-24">
        <div className="border-t border-white/[0.1]">
          {reasons.map((r, i) => (
            <AnimateIn key={r.num} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group flex items-start gap-5 lg:gap-12 py-7 sm:py-8 border-b border-white/[0.1] hover:border-white/20 transition-colors duration-400">
                {/* Roman numeral */}
                <span className="font-display text-[1.4rem] font-light text-white/30 group-hover:text-[#B8965A]/70 transition-colors duration-500 flex-shrink-0 w-8 sm:w-10 lg:w-16 mt-0.5">
                  {r.num}
                </span>

                <div className="flex-1">
                  <h3 className="font-display text-[1.2rem] sm:text-[1.3rem] lg:text-[1.55rem] font-medium text-white leading-snug tracking-[-0.01em] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-white/60 text-[13px] sm:text-[13px] leading-[1.85] font-light max-w-lg">
                    {r.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Marquee trust bar */}
      <div className="border-t border-white/[0.1] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-0">
            {Array.from({ length: 2 }).map((_, ri) => (
              <span key={ri} className="flex items-center">
                {[
                  "Neher Fachpartner",
                  "Seit 1992",
                  "Berlin · Brandenburg · Niedersachsen",
                  "Inhabergeführt",
                  "Kostenlose Beratung",
                  "Professionelle Montage",
                  "Markenprodukte",
                  "30+ Jahre Erfahrung",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-8 px-8">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-medium">
                      {item}
                    </span>
                    <span className="text-[#B8965A]/40 text-lg font-display">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
