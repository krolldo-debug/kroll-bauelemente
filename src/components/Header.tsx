"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns",   href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt",    href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#F4F1EC]/96 backdrop-blur-md border-b border-[#DDD8CF]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[62px] lg:h-[70px]">

          {/* Logo mark */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Monogram */}
            <div
              className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                scrolled
                  ? "border-[#B8965A]/60 text-[#B8965A]"
                  : "border-[#B8965A]/50 text-[#B8965A]"
              }`}
            >
              <span className="font-display text-sm font-semibold leading-none">K</span>
            </div>
            <div className="leading-none">
              <div
                className={`text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-[#0F0D0A]" : "text-white"
                }`}
              >
                Kroll &amp; Kroll
              </div>
              <div
                className={`text-[9px] tracking-[0.22em] uppercase mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-[#9A9590]" : "text-white/40"
                }`}
              >
                Bauelemente
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`gold-link text-[12.5px] font-medium tracking-[0.06em] transition-colors duration-400 ${
                  scrolled
                    ? "text-[#4A4845] hover:text-[#0F0D0A]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+493329614673"
              className={`text-[12px] tracking-[0.04em] transition-colors duration-400 ${
                scrolled ? "text-[#7A7670] hover:text-[#0F0D0A]" : "text-white/45 hover:text-white"
              }`}
            >
              03329 614673
            </a>
            <a
              href="#kontakt"
              className={`text-[12px] font-semibold px-5 py-2.5 tracking-[0.08em] uppercase border transition-all duration-400 ${
                scrolled
                  ? "border-[#B8965A] text-[#B8965A] hover:bg-[#B8965A] hover:text-white"
                  : "border-white/30 text-white hover:border-[#B8965A] hover:text-[#B8965A]"
              }`}
            >
              Beratung
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-1.5 transition-colors ${
              scrolled ? "text-[#0F0D0A]" : "text-white"
            }`}
            aria-label="Menü"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#F4F1EC] border-t border-[#DDD8CF]">
          <div className="px-6 py-6 flex flex-col gap-0.5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[13px] font-medium text-[#4A4845] hover:text-[#B8965A] py-3.5 border-b border-[#E8E3DA] last:border-0 tracking-[0.04em] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-5 flex flex-col gap-3">
              <a
                href="tel:+493329614673"
                className="text-sm text-[#7A7670] tracking-wide"
              >
                03329 614673
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="bg-[#B8965A] text-white text-[12px] font-semibold px-5 py-3.5 text-center tracking-[0.1em] uppercase"
              >
                Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
