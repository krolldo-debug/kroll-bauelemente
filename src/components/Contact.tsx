"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9B9995] mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121210] leading-tight tracking-tight">
            Wir sind für Sie da
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-14">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-sm text-[#6B6A68] leading-relaxed">
                Rufen Sie uns an, schreiben Sie uns eine E-Mail oder nutzen Sie
                das Kontaktformular. Wir melden uns in der Regel innerhalb von
                24 Stunden.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "03329 614673",
                  href: "tel:+493329614673",
                },
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: "info@kroll-bauelemente.de",
                  href: "mailto:info@kroll-bauelemente.de",
                },
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: "Friedenstr. 5, 14532 Stahnsdorf",
                  href: undefined,
                },
                {
                  icon: Clock,
                  label: "Erreichbarkeit",
                  value: "Mo–Fr 8–18 Uhr · Sa 9–13 Uhr",
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F0EFEb] flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#6B6A68]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9B9995] mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-[#121210] hover:text-[#3A3935] transition-colors flex items-center gap-1 group"
                      >
                        {value}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[#121210]">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E6E4DF] h-48">
              <iframe
                title="Kroll & Kroll Standort"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.1600,52.3550,13.2200,52.3850&layer=mapnik&marker=52.3698,13.1936"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#F7F6F3] rounded-2xl p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-14 gap-5">
                  <CheckCircle2 size={44} className="text-[#121210]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#121210] mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-[#6B6A68] text-sm max-w-xs mx-auto leading-relaxed">
                      Ihre Anfrage ist eingegangen. Wir melden uns innerhalb
                      von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="text-sm text-[#6B6A68] hover:text-[#121210] underline underline-offset-4 transition-colors"
                  >
                    Neue Anfrage senden
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-[#121210] mb-7">
                    Anfrage senden
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#6B6A68] mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Max Mustermann"
                          className="w-full bg-white rounded-xl border border-[#E6E4DF] px-4 py-3 text-sm text-[#121210] placeholder-[#C8C6C0] focus:outline-none focus:ring-2 focus:ring-[#121210]/15 focus:border-[#121210] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#6B6A68] mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="030 / 123456"
                          className="w-full bg-white rounded-xl border border-[#E6E4DF] px-4 py-3 text-sm text-[#121210] placeholder-[#C8C6C0] focus:outline-none focus:ring-2 focus:ring-[#121210]/15 focus:border-[#121210] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6B6A68] mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="max@beispiel.de"
                        className="w-full bg-white rounded-xl border border-[#E6E4DF] px-4 py-3 text-sm text-[#121210] placeholder-[#C8C6C0] focus:outline-none focus:ring-2 focus:ring-[#121210]/15 focus:border-[#121210] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6B6A68] mb-1.5">
                        Gewünschte Leistung
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white rounded-xl border border-[#E6E4DF] px-4 py-3 text-sm text-[#121210] focus:outline-none focus:ring-2 focus:ring-[#121210]/15 focus:border-[#121210] transition-all appearance-none"
                      >
                        <option value="">Bitte auswählen …</option>
                        <option>Wintergarten / Terrassendach</option>
                        <option>Fenster &amp; Türen</option>
                        <option>Rollläden</option>
                        <option>Markisen &amp; Sonnenschutz</option>
                        <option>Insektenschutz</option>
                        <option>Sicherheitstechnik</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6B6A68] mb-1.5">
                        Nachricht *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Beschreiben Sie kurz Ihr Vorhaben …"
                        className="w-full bg-white rounded-xl border border-[#E6E4DF] px-4 py-3 text-sm text-[#121210] placeholder-[#C8C6C0] focus:outline-none focus:ring-2 focus:ring-[#121210]/15 focus:border-[#121210] transition-all resize-none"
                      />
                    </div>

                    <p className="text-xs text-[#9B9995]">
                      * Pflichtfelder. Ihre Daten werden ausschließlich zur
                      Bearbeitung Ihrer Anfrage verwendet.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-[#121210] hover:bg-[#2a2a28] text-white font-semibold text-sm py-4 rounded-xl transition-colors mt-2"
                    >
                      Anfrage absenden
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
