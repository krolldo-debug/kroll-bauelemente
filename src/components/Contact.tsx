"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Wintergarten / Terrassendach",
  "Fenster & Türen",
  "Rollläden",
  "Markisen & Sonnenschutz",
  "Insektenschutz",
  "Sicherheitstechnik",
  "Sonstiges",
];

const contactInfo = [
  { label: "Telefon",        value: "03329 614673",          href: "tel:+493329614673" },
  { label: "E-Mail",         value: "info@kroll-bauelemente.de", href: "mailto:info@kroll-bauelemente.de" },
  { label: "Adresse",        value: "Friedenstr. 5, 14532 Stahnsdorf" },
  { label: "Erreichbarkeit", value: "Mo–Fr 8–18 Uhr · Sa 9–13 Uhr" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-[#EDE8DF]">
      <div className="grid lg:grid-cols-2 min-h-[700px]">

        {/* Left — image panel */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Modernes Haus"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-[#0F0D0A]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/80 via-transparent to-transparent" />

          {/* Left panel content */}
          <div className="relative h-full flex flex-col justify-end p-14">
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-6">
              Kontakt
            </p>
            <h2 className="font-display text-[2.8rem] xl:text-[3.5rem] font-light italic text-white leading-[1.05] mb-10">
              Wir sind<br />für Sie da.
            </h2>

            <div className="space-y-5 mb-12">
              {contactInfo.map(({ label, value, href }) => (
                <div key={label}>
                  <div className="text-[9px] tracking-[0.22em] uppercase text-white/30 font-medium mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-white/75 text-[14px] font-light hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white/75 text-[14px] font-light">{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Map — small */}
            <div className="overflow-hidden border border-white/15 h-40">
              <iframe
                title="Kroll & Kroll Standort"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.1600,52.3550,13.2200,52.3850&layer=mapnik&marker=52.3698,13.1936"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right — form panel */}
        <div className="px-6 lg:px-14 py-20 lg:py-24 flex flex-col justify-center">

          {/* Mobile header */}
          <div className="lg:hidden mb-10">
            <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-3">
              Kontakt
            </p>
            <h2 className="font-display text-[2.5rem] font-light italic text-[#0F0D0A] leading-[1.05]">
              Wir sind<br />für Sie da.
            </h2>
          </div>

          {submitted ? (
            <div className="flex flex-col items-start gap-6 py-10">
              <div className="w-12 h-12 border border-[#B8965A] flex items-center justify-center">
                <CheckCircle2 size={22} className="text-[#B8965A]" />
              </div>
              <div>
                <h3 className="font-display text-[2rem] font-medium text-[#0F0D0A] mb-2">
                  Vielen Dank.
                </h3>
                <p className="text-[#7A7670] text-[14px] leading-[1.85] max-w-sm font-light">
                  Ihre Anfrage ist bei uns eingegangen. Wir melden uns
                  in der Regel innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                className="text-[12px] text-[#9A9590] hover:text-[#B8965A] tracking-[0.06em] underline underline-offset-4 transition-colors"
              >
                Neue Anfrage senden
              </button>
            </div>
          ) : (
            <>
              <p className="text-[13px] text-[#7A7670] leading-[1.85] mb-10 max-w-sm font-light">
                Rufen Sie uns an oder nutzen Sie das Formular. Wir melden uns
                in der Regel innerhalb von 24 Stunden bei Ihnen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="field-label">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Max Mustermann"
                      className="field-input"
                    />
                  </div>
                  <div>
                    <label className="field-label">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="030 / 123 456"
                      className="field-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label">E-Mail *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="max@beispiel.de"
                    className="field-input"
                  />
                </div>

                <div>
                  <label className="field-label">Gewünschte Leistung</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="field-input appearance-none cursor-pointer bg-transparent"
                    style={{ color: form.service ? "var(--black)" : "var(--text-muted)" }}
                  >
                    <option value="">Bitte auswählen …</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="field-label">Nachricht *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
                    className="field-input resize-none"
                  />
                </div>

                <p className="text-[11px] text-[#9A9590] leading-relaxed">
                  * Pflichtfelder. Ihre Daten werden ausschließlich zur
                  Bearbeitung Ihrer Anfrage verwendet.
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#0F0D0A] text-[#F4F1EC] text-[12px] font-semibold py-4 tracking-[0.12em] uppercase hover:bg-[#1A1714] transition-colors duration-300"
                >
                  Anfrage absenden
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Mobile contact info */}
      <div className="lg:hidden border-t border-[#DDD8CF] px-6 py-10">
        <div className="grid grid-cols-2 gap-6">
          {contactInfo.map(({ label, value, href }) => (
            <div key={label}>
              <div className="text-[9px] tracking-[0.22em] uppercase text-[#9A9590] font-medium mb-1">
                {label}
              </div>
              {href ? (
                <a href={href} className="text-[13px] text-[#0F0D0A] font-medium hover:text-[#B8965A] transition-colors">
                  {value}
                </a>
              ) : (
                <span className="text-[13px] text-[#0F0D0A] font-medium">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
