"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    num: "01",
    title: "Wintergärten & Terrassendächer",
    short: "Lichtdurchflutete Räume, die Innen und Außen verschmelzen lassen — ganzjährig nutzbar, individuell geplant.",
    photo: "https://images.unsplash.com/photo-1767370568478-bd673ae87300?auto=format&fit=crop&w=800&q=80",
    alt: "Sonnendurchfluteter Wintergarten",
  },
  {
    num: "02",
    title: "Fenster & Türen",
    short: "Hochwertige Systeme in Kunststoff, Aluminium oder Holz — energieeffizient, sicher und langlebig.",
    photo: "https://images.unsplash.com/photo-1538903723116-763313165283?auto=format&fit=crop&w=800&q=80",
    alt: "Weiße Holzfenster an einem Haus",
  },
  {
    num: "03",
    title: "Rollläden",
    short: "Motorisierte und manuelle Rollläden für optimalen Sicht- und Sonnenschutz sowie Einbruchhemmung.",
    photo: "https://images.unsplash.com/photo-1534691601885-2b18af007add?auto=format&fit=crop&w=800&q=80",
    alt: "Geschlossene Rollläden",
  },
  {
    num: "04",
    title: "Markisen & Sonnenschutz",
    short: "Stilvolle Kassetten- und Gelenkarmmarkisen für Terrasse und Balkon — elektrisch, mit Sensor.",
    photo: "https://images.unsplash.com/photo-1730102816323-3e60cef43702?auto=format&fit=crop&w=800&q=80",
    alt: "Überdachte Terrasse mit Sonnenschutz",
  },
  {
    num: "05",
    title: "Insektenschutz",
    short: "Unsichtbarer Schutz als Rahmen-, Rollo- oder Plissee-System. Zertifizierter Neher-Fachpartner.",
    photo: "https://images.unsplash.com/photo-1758998222336-d48b2390a686?auto=format&fit=crop&w=800&q=80",
    alt: "Moderne Insektenschutzgitter",
  },
  {
    num: "06",
    title: "Sicherheitstechnik",
    short: "Einbruchhemmende Elemente, Sicherheitsschlösser und moderne Türtechnik für dauerhaften Schutz.",
    photo: "https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?auto=format&fit=crop&w=800&q=80",
    alt: "Moderner Türdrücker",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="leistungen" className="bg-[#F4F1EC]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-4">
                Leistungen
              </p>
              <h2 className="font-display text-[2.8rem] sm:text-[3.8rem] lg:text-[5rem] font-light italic text-[#0F0D0A] leading-[0.95] tracking-[-0.01em]">
                Alles aus <br />
                <span className="not-italic font-semibold">einer Hand</span>
              </h2>
            </div>
            <p className="text-[#7A7670] max-w-xs text-sm leading-[1.85] lg:text-right font-light">
              Von der Beratung über das Aufmaß bis zur professionellen Montage —
              wir begleiten jedes Projekt von Anfang bis Ende.
            </p>
          </div>
        </AnimateIn>
      </div>

      {/* Service list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="border-t border-[#DDD8CF]">
          {services.map((s, i) => (
            <AnimateIn key={s.num} delay={(i % 3) as 0 | 1 | 2}>
              <a
                href="#kontakt"
                className="service-row group flex items-center gap-6 lg:gap-10 py-7 border-b border-[#DDD8CF] hover:pl-5 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Number */}
                <span className="font-display text-[2.2rem] lg:text-[3rem] font-light text-[#DDD8CF] group-hover:text-[#B8965A] transition-colors duration-500 leading-none flex-shrink-0 w-14 lg:w-20 text-right">
                  {s.num}
                </span>

                {/* Vertical divider */}
                <div className="w-px h-12 bg-[#DDD8CF] flex-shrink-0 hidden sm:block" />

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-[1.35rem] lg:text-[1.65rem] font-medium text-[#0F0D0A] leading-tight tracking-[-0.01em] mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-[#9A9590] text-[13px] leading-relaxed font-light hidden sm:block max-w-lg">
                    {s.short}
                  </p>
                </div>

                {/* Photo thumbnail — slides in on hover */}
                <div
                  className={`flex-shrink-0 overflow-hidden transition-all duration-500 ${
                    hovered === i ? "w-24 h-16 lg:w-32 lg:h-20 opacity-100" : "w-0 h-16 opacity-0"
                  }`}
                >
                  <Image
                    src={s.photo}
                    alt={s.alt}
                    width={128}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 border border-[#DDD8CF] group-hover:border-[#B8965A] flex items-center justify-center transition-colors duration-400 hidden sm:flex">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#9A9590] group-hover:text-[#B8965A] transition-colors -rotate-45">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* CTA */}
      <AnimateIn delay={2}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-28 flex justify-center lg:justify-start">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#0F0D0A] text-[#F4F1EC] text-[12px] font-semibold px-8 py-4 tracking-[0.12em] uppercase hover:bg-[#1A1714] transition-colors duration-300"
          >
            Beratungsgespräch vereinbaren
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
