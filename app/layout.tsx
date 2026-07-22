import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://mstudioweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "M.Studio | Design • Branding • Développement Web",
  description:
    "M.Studio accompagne les entrepreneurs dans la création de leur identité visuelle, de leur branding et de sites web modernes et performants.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
"Création site web Montréal",
  "Agence web Montréal",
  "Développeur web Montréal",
  "Graphiste Montréal",
  "Création logo Montréal",
  "Branding Montréal",
  "Création affiche Montréal",
  "Agence de design Montréal",
  "Création site web Canada",
  "Agence web Canada",
  "Développement web",
  "Conception de site web",
  "Site vitrine",
  "Site e-commerce",
  "Web Design",
  "UX/UI Design",
  "SEO",
  "Référencement naturel",
  "Identité visuelle",
  "Création de logo",
  "Logo professionnel",
  "Graphisme",
  "Design graphique",
  "Communication visuelle",
  "Charte graphique",
  "Branding",
  "Image de marque",
  "Flyer",
  "Affiche publicitaire",
  "Brochure",
  "Carte de visite",
  "Agence digitale",
  "M.Studio",
  "Montréal",
  "Canada",
  "Sénégal"
  ],

  authors: [{ name: "Moussa Dider Ndiaye - M.Studio" }],

  creator: "M.Studio",

  openGraph: {
  title: "M.Studio",
  description:
    "Design • Branding • Développement Web pour les entrepreneurs et les entreprises.",
  url: SITE_URL,
  siteName: "M.Studio",
  locale: "fr_CA",
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "M.Studio",
    description:
      "Design • Branding • Développement Web.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "M.Studio",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  email: "mstudio.sn@gmail.com",
  description:
    "M.Studio accompagne les entrepreneurs dans la création de leur identité visuelle, de leur branding et de sites web modernes et performants.",
  areaServed: ["Montréal", "Canada", "Sénégal"],
  sameAs: ["https://instagram.com/m.studio.visual"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
  {children}
  <Analytics />
</body>
    </html>
  );
}
