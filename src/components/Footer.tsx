export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0D0A] text-white relative overflow-hidden">
      {/* Watermark monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[18rem] sm:text-[22rem] font-light text-white/[0.025] leading-none tracking-[-0.05em]">
          K&amp;K
        </span>
      </div>

      {/* Top gold line */}
      <div className="h-px bg-[#B8965A]/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
        {/* Main grid — stacks cleanly on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14 pb-14 border-b border-white/[0.1]">

          {/* Brand — full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-[#B8965A]/50 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-sm font-semibold text-[#B8965A] leading-none">K</span>
              </div>
              <div>
                <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-white">
                  Kroll &amp; Kroll
                </div>
                <div className="text-[9px] tracking-[0.22em] uppercase text-white/40 mt-0.5">
                  Bauelemente GbR
                </div>
              </div>
            </div>
            <p className="text-[13px] text-white/55 leading-[1.9] max-w-xs font-light">
              Ihr Fachbetrieb für maßgefertigte Bauelemente in Berlin,
              Brandenburg und Niedersachsen. Inhabergeführt seit 1992.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-8 bg-[#B8965A]/40" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8965A]/60 font-medium">
                Est. 1992
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35 mb-5">
              Navigation
            </div>
            <ul className="space-y-3.5">
              {[
                ["Leistungen",  "#leistungen"],
                ["Über uns",   "#ueber-uns"],
                ["Referenzen", "#referenzen"],
                ["Kontakt",    "#kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[13px] text-white/55 hover:text-white/90 transition-colors duration-300 font-light tracking-[0.02em]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35 mb-5">
              Kontakt
            </div>
            <address className="not-italic text-[13px] text-white/55 space-y-3 leading-relaxed font-light">
              <p>Thomas & Andreas Kroll</p>
              <p>Friedenstr. 5<br />14532 Stahnsdorf</p>
              <a
                href="tel:+493329614673"
                className="hover:text-white/85 transition-colors duration-300 block"
              >
                03329 614673
              </a>
              <a
                href="mailto:info@kroll-bauelemente.de"
                className="hover:text-white/85 transition-colors duration-300 block break-all"
              >
                info@kroll-bauelemente.de
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 tracking-[0.06em]">
            © {year} Kroll &amp; Kroll Bauelemente GbR &middot; Alle Rechte vorbehalten
          </p>
          <div className="flex gap-7">
            <a
              href="/impressum"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300 tracking-[0.06em]"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300 tracking-[0.06em]"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
