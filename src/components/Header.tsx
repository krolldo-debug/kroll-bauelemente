"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E6E4DF] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className={`text-base font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#121210]" : "text-white"
              }`}
            >
              Kroll &amp; Kroll
            </div>
            <span
              className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-[#9B9995]" : "text-white/60"
              }`}
            >
              Bauelemente
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-[#3A3935] hover:text-[#121210]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+493329614673"
              className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                scrolled ? "text-[#6B6A68] hover:text-[#121210]" : "text-white/70 hover:text-white"
              }`}
            >
              <Phone size={13} />
              03329 614673
            </a>
            <a
              href="#kontakt"
              className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-[#121210] text-[#121210] hover:bg-[#121210] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#121210]"
              }`}
            >
              Beratung anfragen
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-1.5 transition-colors ${
              scrolled ? "text-[#121210]" : "text-white"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#E6E4DF]">
          <div className="px-6 py-5 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#3A3935] hover:text-[#121210] py-3 border-b border-[#F0EFEb] last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+493329614673"
              className="mt-4 flex items-center gap-2 text-sm text-[#6B6A68]"
            >
              <Phone size={13} />
              03329 614673
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#121210] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
            >
              Beratung anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
