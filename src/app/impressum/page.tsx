import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Kroll & Kroll Bauelemente GbR",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#6B6A68] hover:text-[#121210] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#121210] tracking-tight mb-10">
          Impressum
        </h1>

        <div className="space-y-8 text-sm text-[#3A3935] leading-relaxed">
          <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
            <h2 className="font-bold text-[#121210] text-base mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              <strong>Kroll &amp; Kroll Bauelemente GbR</strong>
              <br />
              Inhaber: Thomas Kroll
              <br />
              Friedenstr. 5<br />
              14532 Stahnsdorf
            </p>
          </section>

          <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
            <h2 className="font-bold text-[#121210] text-base mb-4">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+493329614673"
                className="text-[#121210] hover:underline"
              >
                03329 614673
              </a>
              <br />
              Fax: 03329 692144
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@kroll-bauelemente.de"
                className="text-[#121210] hover:underline"
              >
                info@kroll-bauelemente.de
              </a>
            </p>
          </section>

          <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
            <h2 className="font-bold text-[#121210] text-base mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Thomas Kroll
              <br />
              Friedenstr. 5<br />
              14532 Stahnsdorf
            </p>
          </section>

          <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
            <h2 className="font-bold text-[#121210] text-base mb-4">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
            <h2 className="font-bold text-[#121210] text-base mb-4">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
            <h2 className="font-bold text-[#121210] text-base mb-4">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </section>

          <p className="text-xs text-[#9B9995] text-center pt-2">
            Quelle: eRecht24 · Stand: 2024
          </p>
        </div>
      </div>
    </main>
  );
}
