import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    title: "Wintergärten & Terrassendächer",
    description:
      "Lichtdurchflutete Räume, die Innen und Außen verschmelzen lassen — ganzjährig nutzbar, individuell nach Ihren Wünschen geplant.",
    photo:
      "https://images.unsplash.com/photo-1767370568478-bd673ae87300?auto=format&fit=crop&w=800&q=80",
    alt: "Sonnendurchfluteter Wintergarten mit Holztisch und Stühlen",
  },
  {
    title: "Fenster & Türen",
    description:
      "Hochwertige Fenster- und Türsysteme in Kunststoff, Aluminium oder Holz — energieeffizient, sicher und langlebig.",
    photo:
      "https://images.unsplash.com/photo-1538903723116-763313165283?auto=format&fit=crop&w=800&q=80",
    alt: "Weiße Holzfenster an einem deutschen Haus",
  },
  {
    title: "Rollläden",
    description:
      "Motorisierte und manuelle Rollläden für optimalen Sicht- und Sonnenschutz sowie verbesserte Einbruchhemmung.",
    photo:
      "https://images.unsplash.com/photo-1534691601885-2b18af007add?auto=format&fit=crop&w=800&q=80",
    alt: "Drei geschlossene Rollläden an einem Gebäude",
  },
  {
    title: "Markisen & Sonnenschutz",
    description:
      "Stilvolle Kassetten- und Gelenkarmmarkisen für Terrasse und Balkon — elektrisch, mit Sonnen- und Windsensor.",
    photo:
      "https://images.unsplash.com/photo-1730102816323-3e60cef43702?auto=format&fit=crop&w=800&q=80",
    alt: "Überdachte Pergola-Terrasse mit Sonnenschutz",
  },
  {
    title: "Insektenschutz",
    description:
      "Unsichtbarer Schutz als Rahmen-, Rollo- oder Plissee-System. Zertifizierter Neher-Fachpartner.",
    photo:
      "https://images.unsplash.com/photo-1758998222336-d48b2390a686?auto=format&fit=crop&w=800&q=80",
    alt: "Moderne schwarze Fensterrahmen mit weißen Insektenschutzgittern",
  },
  {
    title: "Sicherheitstechnik",
    description:
      "Einbruchhemmende Elemente, Sicherheitsschlösser und moderne Türtechnik für dauerhaften Schutz Ihres Zuhause.",
    photo:
      "https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?auto=format&fit=crop&w=800&q=80",
    alt: "Person betätigt modernen Türdrücker",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-28 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9B9995] mb-3">
                Leistungen
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121210] leading-tight tracking-tight">
                Alles aus einer Hand
              </h2>
            </div>
            <p className="text-[#6B6A68] max-w-sm leading-relaxed text-sm lg:text-right">
              Von der Beratung über das Aufmaß bis zur professionellen Montage —
              wir begleiten jedes Projekt von Anfang bis Ende.
            </p>
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <AnimateIn key={s.title} delay={(i % 3) as 0 | 1 | 2}>
            <a
              href="#kontakt"
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E6E4DF] hover:border-[#C8C6C0] hover:shadow-xl transition-all duration-400"
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.photo}
                  alt={s.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-[#121210] leading-snug">
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 text-[#9B9995] group-hover:text-[#121210] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-0.5"
                  />
                </div>
                <p className="mt-2 text-sm text-[#6B6A68] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={2}>
        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#121210] hover:bg-[#2a2a28] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
          >
            Jetzt Beratungsgespräch vereinbaren
          </a>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
