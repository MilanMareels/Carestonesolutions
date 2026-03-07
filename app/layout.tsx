import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/cookieBanner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import StructuredData from "./components/structuredData";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.carestonesolutions.be";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Carestonesolutions";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: `Dak- & Gevelreiniging Antwerpen | ${companyName}`,
    template: `%s | ${companyName}`,
  },

  description: "Carestonesolutions is uw specialist in dakreiniging, gevelreiniging, dakcoating en schilderwerken. Vraag vandaag nog een vrijblijvende offerte aan.",

  keywords: [
    // Merk & Algemeen
    "CareStone Solutions",
    "Carestonesolutions",
    "vastgoedonderhoud Antwerpen",
    "vastgoedonderhoud Brasschaat",
    "vastgoedzorg Antwerpse rand",
    "gebouwonderhoud Merksem",

    // Dakreiniging & Ontmossen
    "dakreiniging Antwerpen",
    "dakreiniging Merksem",
    "dakreiniging Brasschaat",
    "dakreiniging Schoten",
    "dakreiniging Ekeren",
    "ontmossen dak Antwerpen",
    "dak ontmossen Merksem",
    "mos verwijderen dak Antwerpen",
    "dakpannen reinigen",

    // Dakcoating
    "dakcoating Antwerpen",
    "dakcoating Merksem",
    "dakcoating Antwerpse rand",
    "dak impregneren Antwerpen",
    "beschermende dakcoating",

    // Gevelreiniging
    "gevelreiniging Antwerpen",
    "gevelreiniging Merksem",
    "gevelreiniging Brasschaat",
    "gevelreiniging Kapellen",
    "buitenmuur reinigen Antwerpen",
    "gevel ontmossen",
    "gevelbescherming Antwerpen",

    // Oprit & Terras
    "oprit reinigen Antwerpen",
    "oprit reinigen Merksem",
    "terras reinigen Antwerpen",
    "terras ontmossen Brasschaat",
    "klinkers reinigen Antwerpse rand",

    // Schilderwerken
    "schilderwerken Antwerpen",
    "schilderwerken Merksem",
    "schilderwerken Brasschaat",
    "buitenschilderwerk Antwerpen",
    "gevel schilderen Merksem",
    "binnenschilderwerk Antwerpse rand",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "./",
    languages: {
      "nl-BE": "/nl",
    },
  },

  openGraph: {
    title: "Dak- & Gevelreiniging in Antwerpen | Carestonesolutions",
    description: "Specialist in dak- en gevelreiniging, coatings en vastgoedonderhoud in de regio Antwerpen en de volledige Antwerpse rand.",
    url: baseUrl,
    siteName: companyName,
    images: [
      {
        url: "/og-image.webp",
        width: 1225,
        height: 713,
        alt: "Carestoneolutions - Professionele dak- en gevelreiniging",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
