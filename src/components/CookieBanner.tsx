"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[#1A1A18] border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold mb-1">
            Diese Website verwendet Cookies
          </p>
          <p className="text-white/50 text-xs leading-relaxed">
            Wir nutzen OpenStreetMap für die Kartenanzeige. Dabei werden Daten
            an externe Server übertragen. Weitere Infos in unserer{" "}
            <a
              href="/datenschutz"
              className="underline hover:text-white/80 transition-colors"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs text-white/50 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-white/20"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="text-xs font-semibold bg-white text-[#121210] hover:bg-white/90 px-4 py-2 rounded-lg transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={decline}
            className="text-white/30 hover:text-white/70 transition-colors p-1"
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
