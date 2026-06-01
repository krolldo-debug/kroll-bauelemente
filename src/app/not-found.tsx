import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden – Kroll & Kroll Bauelemente",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0F0D0A] flex flex-col">
      {/* Minimal header */}
      <div className="border-b border-white/8 px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-7 h-7 border border-[#B8965A]/50 flex items-center justify-center">
            <span className="font-display text-sm font-semibold text-[#B8965A] leading-none">K</span>
          </div>
          <div>
            <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white">Kroll &amp; Kroll</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 ml-2">Bauelemente</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-lg">
          {/* 404 display */}
          <div className="font-display text-[10rem] sm:text-[14rem] font-light leading-none text-white/[0.04] select-none mb-0 tracking-[-0.04em]">
            404
          </div>

          <div className="-mt-8 sm:-mt-12 relative z-10">
            {/* Gold accent */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-[#B8965A]/50" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#B8965A] font-medium">
                Seite nicht gefunden
              </span>
              <div className="h-px w-10 bg-[#B8965A]/50" />
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3.2rem] font-light italic text-white leading-[1.05] mb-6">
              Hier ist nichts zu sehen.
            </h1>
            <p className="text-white/35 text-[14px] leading-[1.85] mb-10 max-w-sm mx-auto font-light">
              Die gesuchte Seite existiert nicht oder wurde verschoben.
              Gehen Sie zurück zur Startseite oder nehmen Sie direkt Kontakt auf.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[#B8965A] text-[#0F0D0A] text-[12px] font-semibold px-8 py-4 tracking-[0.1em] uppercase hover:bg-[#D4AE78] transition-colors duration-300"
              >
                Zur Startseite
              </Link>
              <a
                href="tel:+493329614673"
                className="inline-flex items-center justify-center border border-white/15 text-white/60 text-[12px] font-medium px-8 py-4 tracking-[0.08em] uppercase hover:border-white/30 hover:text-white transition-colors duration-300"
              >
                03329 614673
              </a>
            </div>
          </div>

          <p className="mt-14 text-[11px] text-white/15 tracking-[0.08em]">
            Kroll &amp; Kroll Bauelemente GbR · Stahnsdorf bei Potsdam
          </p>
        </div>
      </div>
    </main>
  );
}
