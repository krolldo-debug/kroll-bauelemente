import { Ruler, Wrench, HeartHandshake, Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Persönliche Beratung",
    description:
      "Wir kommen zu Ihnen, hören zu und entwickeln gemeinsam die beste Lösung — ohne Callcenter, ohne Anonymität.",
  },
  {
    icon: Ruler,
    title: "Präzises Aufmaß",
    description:
      "Millimetergenaues Aufmaß vor Ort durch unsere Fachkräfte. Keine Überraschungen bei der Montage.",
  },
  {
    icon: Wrench,
    title: "Saubere Montage",
    description:
      "Fachgerecht, termingetreu und mit vollständiger Aufräumung danach. Qualität, die man sieht und fühlt.",
  },
  {
    icon: Star,
    title: "Markenqualität",
    description:
      "Ausschließlich bewährte Produkte namhafter Hersteller — für dauerhaften Mehrwert und lange Lebensdauer.",
  },
];

const stats = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "3", label: "Bundesländer" },
  { value: "100%", label: "Inhabergeführt" },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-[#121210]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
                Warum Kroll &amp; Kroll
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Was uns auszeichnet
              </h2>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm lg:text-right">
              Wir sind kein anonymer Konzern — wir sind Ihr Nachbar und
              Handwerker vor Ort.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimateIn key={r.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 transition-colors h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <Icon size={19} className="text-white/70" />
                  </div>
                  <h3 className="text-white font-semibold mb-2.5">{r.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#1A1A18] py-10 px-8 text-center">
                <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/30 text-xs uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
