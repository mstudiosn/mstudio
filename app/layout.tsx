import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.Studio | Design • Branding • Développement Web",
  description:
    "M.Studio accompagne les entrepreneurs dans la création de leur identité visuelle, de leur branding et de sites web modernes et performants.",

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}
  <Analytics />
</body>
    </html>
  );
}
