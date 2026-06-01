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
      <div
        className="max-w-3xl mx-auto shadow-2xl"
        style={{ background: "#0F0D0A", borderTop: "1px solid rgba(184,150,90,0.25)" }}
      >
        {/* Gold top accent line */}
        <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, #B8965A, transparent)" }} />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 px-6 py-5">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-[13px] font-semibold mb-1 tracking-[0.02em]">
              Diese Website verwendet Cookies
            </p>
            <p className="text-white/60 text-[12px] leading-[1.75] font-light">
              Wir nutzen OpenStreetMap für die Kartenanzeige. Dabei werden Daten
              an externe Server übertragen. Weitere Infos in unserer{" "}
              <a
                href="/datenschutz"
                className="text-[#B8965A] hover:text-[#D4AE78] transition-colors underline underline-offset-2"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={decline}
              className="text-[11px] font-medium text-white/35 hover:text-white/70 transition-colors px-4 py-2.5 border border-white/10 hover:border-white/20 tracking-[0.06em] uppercase"
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="text-[11px] font-semibold bg-[#B8965A] text-[#0F0D0A] hover:bg-[#D4AE78] px-5 py-2.5 transition-colors tracking-[0.08em] uppercase"
            >
              Akzeptieren
            </button>
            <button
              onClick={decline}
              className="text-white/20 hover:text-white/50 transition-colors p-1.5 ml-1"
              aria-label="Schließen"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
