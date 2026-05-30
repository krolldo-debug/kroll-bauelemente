import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden – Kroll & Kroll Bauelemente",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F6F3] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <div className="text-[9rem] font-extrabold leading-none text-[#E6E4DF] select-none mb-2">
          404
        </div>

        <h1 className="text-2xl font-bold text-[#121210] mb-3 -mt-2">
          Seite nicht gefunden
        </h1>
        <p className="text-[#6B6A68] leading-relaxed mb-8 text-sm">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Gehen Sie
          zurück zur Startseite oder nehmen Sie direkt Kontakt mit uns auf.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#121210] hover:bg-[#2a2a28] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            Zur Startseite
          </Link>
          <a
            href="tel:+493329614673"
            className="inline-flex items-center justify-center border border-[#121210] text-[#121210] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#121210] hover:text-white transition-colors"
          >
            03329 614673 anrufen
          </a>
        </div>

        <p className="mt-10 text-xs text-[#9B9995]">
          Kroll &amp; Kroll Bauelemente GbR · Stahnsdorf bei Potsdam
        </p>
      </div>
    </main>
  );
}
