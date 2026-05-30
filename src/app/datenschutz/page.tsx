import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Kroll & Kroll Bauelemente GbR",
  robots: { index: false },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl p-7 border border-[#E6E4DF]">
      <h2 className="font-bold text-[#121210] text-base mb-4">{title}</h2>
      <div className="space-y-3 text-sm text-[#3A3935] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#6B6A68] hover:text-[#121210] transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#121210] tracking-tight mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-[#9B9995] mb-10">Stand: 2024</p>

        <div className="space-y-5">
          <Section title="1. Datenschutz auf einen Blick">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
            <p>
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </Section>

          <Section title="2. Verantwortlicher">
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              <strong>Kroll &amp; Kroll Bauelemente GbR</strong>
              <br />
              Thomas Kroll
              <br />
              Friedenstr. 5, 14532 Stahnsdorf
              <br />
              Telefon: 03329 614673
              <br />
              E-Mail: info@kroll-bauelemente.de
            </p>
          </Section>

          <Section title="3. Datenerfassung auf dieser Website">
            <h3 className="font-semibold text-[#121210]">
              Wer ist verantwortlich für die Datenerfassung?
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <h3 className="font-semibold text-[#121210] mt-4">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen — z. B. durch das Ausfüllen des Kontaktformulars. Andere
              Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
              der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem,
              Uhrzeit des Seitenaufrufs).
            </p>

            <h3 className="font-semibold text-[#121210] mt-4">
              Server-Log-Dateien
            </h3>
            <p>
              Der Hosting-Anbieter dieser Website erhebt und speichert
              automatisch Informationen in sogenannten Server-Log-Dateien, die
              Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer-URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und
              IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen.
            </p>

            <h3 className="font-semibold text-[#121210] mt-4">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Anfragebearbeitung).
            </p>
          </Section>

          <Section title="4. Hosting">
            <p>
              Diese Website wird bei{" "}
              <strong>Vercel Inc.</strong> (340 Pine Street Suite 701, San
              Francisco, CA 94104, USA) gehostet. Vercel ist zertifiziert nach
              dem EU-US Data Privacy Framework. Weitere Informationen finden Sie
              unter{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#121210]"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
            <p>
              Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              möglichst zuverlässigen Darstellung unserer Website.
            </p>
          </Section>

          <Section title="5. Eingebettete Dienste Dritter">
            <h3 className="font-semibold text-[#121210]">OpenStreetMap</h3>
            <p>
              Auf dieser Seite nutzen wir den Kartendienst OpenStreetMap (OSM).
              Anbieter ist die OpenStreetMap Foundation (OSMF), 132 Maney Hill
              Road, Sutton Coldfield, West Midlands, B72 1JU, Vereinigtes
              Königreich.
            </p>
            <p>
              Wenn Sie die Kartenansicht besuchen, speichert OpenStreetMap
              verschiedene Informationen über Ihr Nutzungsverhalten auf unserem
              Server. OpenStreetMap kann außerdem verschiedene Cookies in Ihrem
              Browser speichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO. Das berechtigte Interesse liegt in der Standortdarstellung
              unseres Unternehmens. Weitere Informationen:{" "}
              <a
                href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#121210]"
              >
                wiki.osmfoundation.org/wiki/Privacy_Policy
              </a>
              .
            </p>

            <h3 className="font-semibold text-[#121210] mt-4">
              Google Fonts (lokal eingebunden)
            </h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              sogenannte Google Fonts. Die Google Fonts sind lokal installiert.
              Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
          </Section>

          <Section title="6. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger sowie den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten.
            </p>
            <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden:</p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@kroll-bauelemente.de"
                className="underline hover:text-[#121210]"
              >
                info@kroll-bauelemente.de
              </a>
              <br />
              Telefon: 03329 614673
            </p>
            <p>
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. In Brandenburg ist dies der Landesbeauftragte
              für den Datenschutz und für das Recht auf Akteneinsicht
              Brandenburg.
            </p>
          </Section>

          <Section title="7. Widerspruch gegen Werbe-E-Mails">
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </Section>

          <p className="text-xs text-[#9B9995] text-center pt-2">
            Diese Datenschutzerklärung wurde auf Basis des Originals angepasst.
            Bei rechtlichen Fragen empfehlen wir die Konsultation eines
            Datenschutzbeauftragten.
          </p>
        </div>
      </div>
    </main>
  );
}
