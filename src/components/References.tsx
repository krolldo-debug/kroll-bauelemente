"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const projects = [
  {
    title: "Terrassenüberdachung in Potsdam",
    category: "Überdachung",
    photo: "https://images.unsplash.com/photo-1767370568478-bd673ae87300?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1767370568478-bd673ae87300?auto=format&fit=crop&w=1600&q=85",
    alt: "Elegante Terrassenüberdachung",
    span: "col",
  },
  {
    title: "Fensterfront Berlin-Zehlendorf",
    category: "Fenster",
    photo: "https://images.unsplash.com/photo-1538903723116-763313165283?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1538903723116-763313165283?auto=format&fit=crop&w=1600&q=85",
    alt: "Weiße Holzfenster",
    span: "",
  },
  {
    title: "Haustür Brandenburg",
    category: "Türen",
    photo: "https://images.unsplash.com/photo-1613544723301-176686aa9f09?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1613544723301-176686aa9f09?auto=format&fit=crop&w=1600&q=85",
    alt: "Elegante Haustür",
    span: "",
  },
  {
    title: "Terrassendach Stahnsdorf",
    category: "Terrassendach",
    photo: "https://images.unsplash.com/photo-1730102816323-3e60cef43702?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1730102816323-3e60cef43702?auto=format&fit=crop&w=1600&q=85",
    alt: "Überdachte Pergola-Terrasse",
    span: "",
  },
  {
    title: "Rollläden & Markise Teltow",
    category: "Sonnenschutz",
    photo: "https://images.unsplash.com/photo-1534691601885-2b18af007add?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1534691601885-2b18af007add?auto=format&fit=crop&w=1600&q=85",
    alt: "Geschlossene Rollläden",
    span: "",
  },
  {
    title: "Fenstersanierung Kleinmachnow",
    category: "Fenster",
    photo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    alt: "Einfamilienhaus mit neuen Fenstern",
    span: "col",
  },
];

export default function References() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i! + projects.length - 1) % projects.length);
  const next = () => setLightbox((i) => (i! + 1) % projects.length);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="referenzen" className="bg-[#F4F1EC] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-4">
                Referenzen
              </p>
              <h2 className="font-display text-[2.8rem] sm:text-[3.8rem] lg:text-[5rem] font-light text-[#0F0D0A] leading-[0.95] tracking-[-0.01em]">
                Ausgewählte
                <br />
                <em>Projekte</em>
              </h2>
            </div>
            <p className="text-[#7A7670] max-w-xs text-[13px] leading-[1.85] lg:text-right font-light">
              Jedes Projekt ist einzigartig. Hier ein Einblick in einige
              unserer abgeschlossenen Arbeiten.
            </p>
          </div>
        </AnimateIn>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

          {/* Row 1: hero + two stacked */}
          <AnimateIn delay={0} className="lg:row-span-2">
            <button
              onClick={() => setLightbox(0)}
              className="group relative overflow-hidden w-full h-full min-h-[280px] lg:min-h-[520px] cursor-zoom-in"
            >
              <Image
                src={projects[0].photo}
                alt={projects[0].alt}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/70 via-[#0F0D0A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-[9px] font-medium text-[#B8965A] uppercase tracking-[0.25em]">
                  {projects[0].category}
                </span>
                <h3 className="text-white font-display text-[1.35rem] font-medium mt-1 leading-snug">
                  {projects[0].title}
                </h3>
              </div>
            </button>
          </AnimateIn>

          {/* Smaller items */}
          {projects.slice(1, 5).map((p, i) => (
            <AnimateIn key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <button
                onClick={() => setLightbox(i + 1)}
                className="group relative overflow-hidden w-full h-[200px] sm:h-[250px] cursor-zoom-in"
              >
                <Image
                  src={p.photo}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/65 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-[8px] font-medium text-[#B8965A] uppercase tracking-[0.22em]">
                    {p.category}
                  </span>
                  <h3 className="text-white font-display text-[1.1rem] font-medium mt-0.5 leading-snug">
                    {p.title}
                  </h3>
                </div>
              </button>
            </AnimateIn>
          ))}

          {/* Last wide item */}
          <AnimateIn delay={2} className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => setLightbox(5)}
              className="group relative overflow-hidden w-full h-[220px] lg:h-[250px] cursor-zoom-in"
            >
              <Image
                src={projects[5].photo}
                alt={projects[5].alt}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-[8px] font-medium text-[#B8965A] uppercase tracking-[0.22em]">
                  {projects[5].category}
                </span>
                <h3 className="text-white font-display text-[1.1rem] font-medium mt-0.5 leading-snug">
                  {projects[5].title}
                </h3>
              </div>
            </button>
          </AnimateIn>
        </div>

        <AnimateIn delay={2}>
          <p className="mt-8 text-[12px] text-[#9A9590] tracking-[0.06em] text-center">
            Weitere Referenzbilder gerne auf Anfrage — wir freuen uns auf Ihr Projekt.
          </p>
        </AnimateIn>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0F0D0A]/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2"
            aria-label="Schließen"
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 lg:left-8 text-white/40 hover:text-white transition-colors p-3 border border-white/10 hover:border-white/30"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[lightbox].photoFull}
              alt={projects[lightbox].alt}
              width={1600}
              height={1000}
              className="object-contain w-full h-full max-h-[78vh]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0D0A]/80 to-transparent px-6 py-5">
              <span className="text-[9px] font-medium text-[#B8965A] uppercase tracking-[0.25em]">
                {projects[lightbox].category}
              </span>
              <h3 className="font-display text-white text-[1.3rem] font-medium mt-0.5">
                {projects[lightbox].title}
              </h3>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 lg:right-8 text-white/40 hover:text-white transition-colors p-3 border border-white/10 hover:border-white/30"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`transition-all duration-300 ${
                  i === lightbox
                    ? "w-6 h-1 bg-[#B8965A]"
                    : "w-1 h-1 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
