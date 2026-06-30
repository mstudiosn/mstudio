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
    "M.Studio",
    "Design",
    "Branding",
    "Développement Web",
    "Création de site web",
    "Identité visuelle",
    "Logo",
    "Graphisme",
    "Agence digitale",
    "Montréal",
    "Canada",
    "Sénégal",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
