export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-bold text-white mb-1">Kroll &amp; Kroll</div>
            <div className="text-xs text-white/30 uppercase tracking-widest mb-5">
              Bauelemente GbR
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Ihr Fachbetrieb für maßgefertigte Bauelemente in Berlin,
              Brandenburg und Niedersachsen. Seit 1992.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/25 mb-5">
              Navigation
            </div>
            <ul className="space-y-3">
              {[
                ["Leistungen", "#leistungen"],
                ["Über uns", "#ueber-uns"],
                ["Referenzen", "#referenzen"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/25 mb-5">
              Kontakt
            </div>
            <address className="not-italic text-sm text-white/40 space-y-2 leading-relaxed">
              <p>Thomas Kroll</p>
              <p>Friedenstr. 5, 14532 Stahnsdorf</p>
              <a
                href="tel:+493329614673"
                className="hover:text-white transition-colors block"
              >
                03329 614673
              </a>
              <a
                href="mailto:info@kroll-bauelemente.de"
                className="hover:text-white transition-colors block"
              >
                info@kroll-bauelemente.de
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {year} Kroll &amp; Kroll Bauelemente GbR
          </p>
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
