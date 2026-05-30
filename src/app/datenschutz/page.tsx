import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Kroll & Kroll Bauelemente GbR",
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-medium text-[#0F0D0A] text-[13px] tracking-[0.03em] mt-5 mb-1">
      {children}
    </h3>
  );
}

export default function Datenschutz() {
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
            Datenschutz­erklärung
          </h1>
          <p className="text-[12px] text-[#9A9590] mt-3 tracking-[0.04em]">Stand: 2024</p>
        </div>

        <div className="space-y-10">
          <Section title="1. Datenschutz auf einen Blick">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
            <p>
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </Section>

          <Section title="2. Verantwortlicher">
            <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              <strong className="text-[#0F0D0A] font-medium">Kroll &amp; Kroll Bauelemente GbR</strong>
              <br />
              Thomas Kroll
              <br />
              Friedenstr. 5, 14532 Stahnsdorf
              <br />
              Telefon:{" "}
              <a href="tel:+493329614673" className="text-[#0F0D0A] hover:text-[#B8965A] transition-colors">
                03329 614673
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@kroll-bauelemente.de" className="text-[#0F0D0A] hover:text-[#B8965A] transition-colors">
                info@kroll-bauelemente.de
              </a>
            </p>
          </Section>

          <Section title="3. Datenerfassung auf dieser Website">
            <SubHeading>Wer ist verantwortlich für die Datenerfassung?</SubHeading>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <SubHeading>Wie erfassen wir Ihre Daten?</SubHeading>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen —
              z. B. durch das Ausfüllen des Kontaktformulars. Andere Daten werden automatisch
              oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem, Uhrzeit des Seitenaufrufs).
            </p>

            <SubHeading>Server-Log-Dateien</SubHeading>
            <p>
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch
              übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes
              Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit
              der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit
              anderen Datenquellen wird nicht vorgenommen.
            </p>

            <SubHeading>Kontaktformular</SubHeading>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Anfragebearbeitung).
            </p>
          </Section>

          <Section title="4. Hosting">
            <p>
              Diese Website wird bei <strong className="text-[#0F0D0A] font-medium">Vercel Inc.</strong>{" "}
              (340 Pine Street Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel ist
              zertifiziert nach dem EU-US Data Privacy Framework. Weitere Informationen finden
              Sie unter{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F0D0A] underline underline-offset-2 hover:text-[#B8965A] transition-colors"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
            <p>
              Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
              unserer Website.
            </p>
          </Section>

          <Section title="5. Eingebettete Dienste Dritter">
            <SubHeading>OpenStreetMap</SubHeading>
            <p>
              Auf dieser Seite nutzen wir den Kartendienst OpenStreetMap (OSM). Anbieter ist
              die OpenStreetMap Foundation (OSMF), 132 Maney Hill Road, Sutton Coldfield,
              West Midlands, B72 1JU, Vereinigtes Königreich.
            </p>
            <p>
              Wenn Sie die Kartenansicht besuchen, speichert OpenStreetMap verschiedene
              Informationen über Ihr Nutzungsverhalten. OpenStreetMap kann außerdem verschiedene
              Cookies in Ihrem Browser speichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO. Das berechtigte Interesse liegt in der Standortdarstellung unseres
              Unternehmens. Weitere Informationen:{" "}
              <a
                href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F0D0A] underline underline-offset-2 hover:text-[#B8965A] transition-colors"
              >
                wiki.osmfoundation.org/wiki/Privacy_Policy
              </a>
              .
            </p>

            <SubHeading>Google Fonts (lokal eingebunden)</SubHeading>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte
              Google Fonts. Die Google Fonts sind lokal über Next.js eingebunden.
              Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
          </Section>

          <Section title="6. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den
              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
              dieser Daten.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
              an uns wenden:
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@kroll-bauelemente.de" className="text-[#0F0D0A] hover:text-[#B8965A] transition-colors">
                info@kroll-bauelemente.de
              </a>
              <br />
              Telefon: 03329 614673
            </p>
            <p>
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. In Brandenburg ist dies der Landesbeauftragte für den
              Datenschutz und für das Recht auf Akteneinsicht Brandenburg.
            </p>
          </Section>

          <Section title="7. Widerspruch gegen Werbe-E-Mails">
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten
              behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </Section>

          <p className="text-[11px] text-[#9A9590] pt-4 leading-relaxed">
            Diese Datenschutzerklärung wurde auf Basis des Originals angepasst.
            Bei rechtlichen Fragen empfehlen wir die Konsultation eines Datenschutzbeauftragten.
          </p>
        </div>
      </div>
    </main>
  );
}
