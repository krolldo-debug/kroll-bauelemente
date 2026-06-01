import AnimateIn from "@/components/AnimateIn";

const stats = [
  { value: "30", suffix: "+", label: "Jahre\nErfahrung" },
  { value: "500", suffix: "+", label: "Zufriedene\nKunden" },
  { value: "3", suffix: "", label: "Bundes-\nländer" },
  { value: "∞", suffix: "", label: "Persönlicher\nService" },
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

      {/* Stats — architectural display */}
      <AnimateIn>
        <div className="border-b border-white/[0.1]">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.1]">
            {stats.map((s) => (
              <div key={s.label} className="px-6 sm:px-8 lg:px-10 py-10 lg:py-20">
                <div className="font-display leading-none mb-3 flex items-start">
                  <span className="text-[3.2rem] sm:text-[4.5rem] lg:text-[7rem] font-light text-white/95 leading-none">
                    {s.value}
                  </span>
                  {s.suffix && (
                    <span className="text-[1.6rem] sm:text-[2.5rem] lg:text-[4rem] font-light text-[#B8965A] leading-none mt-1">
                      {s.suffix}
                    </span>
                  )}
                </div>
                <div className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-medium whitespace-pre-line leading-[1.6]">
                  {s.label}
                </div>
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
