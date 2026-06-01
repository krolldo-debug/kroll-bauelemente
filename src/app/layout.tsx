import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const OG_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "Kroll & Kroll Bauelemente GbR – Fenster, Türen & Überdachungen",
  description:
    "Ihr Spezialist für maßgefertigte Bauelemente in Berlin, Brandenburg und Niedersachsen. Fenster, Türen, Rollläden, Überdachungen, Markisen und Insektenschutz seit 1992.",
  keywords:
    "Bauelemente, Fenster, Türen, Rollläden, Überdachung, Terrassendach, Markisen, Insektenschutz, Berlin, Brandenburg, Stahnsdorf, Potsdam",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kroll-bauelemente.de",
    siteName: "Kroll & Kroll Bauelemente",
    title: "Kroll & Kroll Bauelemente – Fenster, Türen & Überdachungen",
    description:
      "Maßgefertigte Bauelemente vom Fachmann. Fenster, Türen, Rollläden, Überdachungen und mehr – seit 1992 in Berlin, Brandenburg und Niedersachsen.",
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: "Kroll & Kroll Bauelemente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kroll & Kroll Bauelemente – Fenster, Türen & Überdachungen",
    description: "Maßgefertigte Bauelemente vom Fachmann seit 1992.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kroll-bauelemente.de" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kroll & Kroll Bauelemente GbR",
  description:
    "Maßgefertigte Bauelemente – Fenster, Türen, Rollläden, Überdachungen, Markisen und Insektenschutz seit 1992.",
  url: "https://kroll-bauelemente.de",
  telephone: "+493329614673",
  email: "info@kroll-bauelemente.de",
  foundingDate: "1992",
  founder: [
    { "@type": "Person", name: "Thomas Kroll" },
    { "@type": "Person", name: "Andreas Kroll" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Friedenstr. 5",
    addressLocality: "Stahnsdorf",
    postalCode: "14532",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.3698, longitude: 13.1936 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: ["Berlin", "Brandenburg", "Niedersachsen"],
  image: OG_IMAGE,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F1EC] text-[#0F0D0A]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
