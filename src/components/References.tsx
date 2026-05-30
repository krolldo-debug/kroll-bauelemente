"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const projects = [
  {
    title: "Wintergarten in Potsdam",
    category: "Wintergarten",
    photo: "https://images.unsplash.com/photo-1767370568478-bd673ae87300?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1767370568478-bd673ae87300?auto=format&fit=crop&w=1600&q=85",
    alt: "Sonnendurchfluteter Wintergarten mit Holzmöbeln",
    size: "large",
  },
  {
    title: "Fensterfront Berlin-Zehlendorf",
    category: "Fenster",
    photo: "https://images.unsplash.com/photo-1538903723116-763313165283?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1538903723116-763313165283?auto=format&fit=crop&w=1600&q=85",
    alt: "Weiße Holzfenster an einem deutschen Wohnhaus",
    size: "small",
  },
  {
    title: "Haustür Brandenburg",
    category: "Türen",
    photo: "https://images.unsplash.com/photo-1613544723301-176686aa9f09?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1613544723301-176686aa9f09?auto=format&fit=crop&w=1600&q=85",
    alt: "Graue Holztür neben grünen Pflanzen",
    size: "small",
  },
  {
    title: "Terrassendach in Stahnsdorf",
    category: "Terrassendach",
    photo: "https://images.unsplash.com/photo-1730102816323-3e60cef43702?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1730102816323-3e60cef43702?auto=format&fit=crop&w=1600&q=85",
    alt: "Überdachte Pergola-Terrasse",
    size: "small",
  },
  {
    title: "Rollläden & Markise Teltow",
    category: "Sonnenschutz",
    photo: "https://images.unsplash.com/photo-1534691601885-2b18af007add?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1534691601885-2b18af007add?auto=format&fit=crop&w=1600&q=85",
    alt: "Geschlossene Rollläden an einem Gebäude",
    size: "small",
  },
  {
    title: "Neubau Kleinmachnow",
    category: "Komplettsanierung",
    photo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    photoFull: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    alt: "Modernes Einfamilienhaus mit neuen Bauelementen",
    size: "large",
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

  const large = projects.filter((p) => p.size === "large");
  const small = projects.filter((p) => p.size === "small");

  return (
    <section id="referenzen" className="py-28 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9B9995] mb-3">
                Referenzen
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121210] leading-tight tracking-tight">
                Ausgewählte Projekte
              </h2>
            </div>
            <p className="text-[#6B6A68] max-w-sm leading-relaxed text-sm lg:text-right">
              Jedes Projekt ist einzigartig. Hier ein Einblick in einige
              abgeschlossene Arbeiten.
            </p>
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {large.map((p, li) => {
            const globalIdx = projects.indexOf(p);
            return (
              <AnimateIn key={p.title} delay={(li * 2) as 0 | 2 | 4}>
                <button
                  onClick={() => setLightbox(globalIdx)}
                  className="lg:col-span-1 group relative overflow-hidden rounded-2xl bg-white border border-[#E6E4DF] w-full text-left cursor-zoom-in"
                >
                  <div className="relative h-64 lg:h-[420px] overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-left">
                      <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                        {p.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg mt-1 leading-snug">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </button>
              </AnimateIn>
            );
          })}

          {small.map((p, si) => {
            const globalIdx = projects.indexOf(p);
            return (
              <AnimateIn key={p.title} delay={(si % 3) as 0 | 1 | 2}>
                <button
                  onClick={() => setLightbox(globalIdx)}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[#E6E4DF] w-full text-left cursor-zoom-in"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">
                        {p.category}
                      </span>
                      <h3 className="text-white font-medium mt-0.5 leading-snug text-sm">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </button>
              </AnimateIn>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-[#9B9995]">
          Weitere Referenzbilder gerne auf Anfrage.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2"
            aria-label="Schließen"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/60 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[lightbox].photoFull}
              alt={projects[lightbox].alt}
              width={1600}
              height={1000}
              className="object-contain w-full h-full max-h-[80vh]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
              <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                {projects[lightbox].category}
              </span>
              <h3 className="text-white font-semibold text-lg mt-0.5">
                {projects[lightbox].title}
              </h3>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/60 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === lightbox ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
