import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Kroll & Kroll Bauelemente GbR",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-[#DDD8CF] pb-10 last:border-0">
      <h2 className="font-display text-[1.4rem] font-medium text-[#0F0D0A] mb-4 italic">
        {title}
      </h2>
      <div className="space-y-3 text-[14px] text-[#5A5855] leading-[1.85] font-light">
        {children}
      </div>
    </section>
  );
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#F4F1EC]">
      {/* Top bar */}
      <div className="border-b border-[#DDD8CF] bg-[#EDE8DF]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-[#B8965A]/60 flex items-center justify-center">
              <span className="font-display text-sm font-semibold text-[#B8965A] leading-none">K</span>
            </div>
            <div>
              <span className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#0F0D0A]">Kroll &amp; Kroll</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#9A9590] ml-2">Bauelemente</span>
            </div>
          </div>
          <Link
            href="/"
            className="text-[12px] text-[#7A7670] hover:text-[#B8965A] transition-colors tracking-[0.04em] flex items-center gap-1.5"
          >
            ← Startseite
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        {/* Page header */}
        <div className="mb-14 pb-10 border-b border-[#DDD8CF]">
          <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#B8965A] mb-4">
            Rechtliches
          </p>
          <h1 className="font-display text-[3rem] sm:text-[3.8rem] font-light text-[#0F0D0A] leading-[1.0] tracking-[-0.01em]">
            Impressum
          </h1>
        </div>

        <div className="space-y-10">
          <Section title="Angaben gemäß § 5 TMG">
            <p>
              <strong className="text-[#0F0D0A] font-medium">Kroll &amp; Kroll Bauelemente GbR</strong>
              <br />
              Inhaber: Thomas Kroll & Andreas Kroll
              <br />
              Friedenstr. 5<br />
              14532 Stahnsdorf
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              Telefon:{" "}
              <a href="tel:+493329614673" className="text-[#0F0D0A] hover:text-[#B8965A] transition-colors">
                03329 614673
              </a>
              <br />
              Fax: 03329 692144
              <br />
              E-Mail:{" "}
              <a href="mailto:info@kroll-bauelemente.de" className="text-[#0F0D0A] hover:text-[#B8965A] transition-colors">
                info@kroll-bauelemente.de
              </a>
            </p>
          </Section>

          <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>
              Thomas Kroll & Andreas Kroll
              <br />
              Friedenstr. 5<br />
              14532 Stahnsdorf
            </p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
          </Section>

          <p className="text-[11px] text-[#9A9590] pt-4">
            Quelle: eRecht24 · Stand: 2024
          </p>
        </div>
      </div>
    </main>
  );
}
