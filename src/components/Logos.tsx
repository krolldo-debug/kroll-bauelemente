import AnimateIn from "@/components/AnimateIn";

const partners = [
  { name: "Schüco", sub: "Fenster & Türen" },
  { name: "REHAU", sub: "Kunststoffprofile" },
  { name: "Roma", sub: "Rollläden" },
  { name: "Neher", sub: "Insektenschutz" },
  { name: "Roto", sub: "Beschlagtechnik" },
  { name: "VEKA", sub: "Fensterprofil" },
];

export default function Logos() {
  return (
    <section className="py-16 bg-white border-t border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn>
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#9B9995] mb-10">
            Unsere Markenhersteller
          </p>
        </AnimateIn>

        <AnimateIn delay={1}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col items-center justify-center gap-1.5 py-5 px-3 rounded-xl border border-[#E6E4DF] hover:border-[#C8C6C0] hover:shadow-sm transition-all duration-200 bg-[#F7F6F3] hover:bg-white"
              >
                <span className="font-bold text-base text-[#121210] tracking-tight leading-none">
                  {p.name}
                </span>
                <span className="text-[10px] text-[#9B9995] uppercase tracking-widest text-center leading-tight">
                  {p.sub}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
