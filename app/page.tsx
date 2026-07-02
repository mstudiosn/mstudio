"use client";
import { useState } from "react";import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFAF8] relative overflow-hidden">
      {/* Motif gauche */}
<div className="absolute top-20 left-0 opacity-90">
  <div
    className="w-[850px] h-[850px]"
    style={{
      backgroundImage:
"radial-gradient(circle, rgba(250,204,21,0.7) 2px, transparent 2px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 80%)",
    }}
  />
</div>
{/* Motif droite */}
<div className="absolute bottom-20 right-0 opacity-100">
  <div
    className="w-[800px] h-[800px]"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(250,204,21,0.7) 2px, transparent 2px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 80%)",
    }}
  />
</div>

{/* Motif droite */}
<div className="absolute top-[1000px] right-0 opacity-100">
  <div
    className="w-[800px] h-[800px]"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(250,204,21,0.7) 2px, transparent 2px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 80%)",
    }}
  />
</div>
{/* Motif 4 */}
<div className="absolute top-[1600px] left-0 opacity-100">
  <div
    className="w-[800px] h-[800px]"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(250,204,21,0.7) 2px, transparent 2px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 80%)",
    }}
  />
</div>
{/* Motif 5 */}
<div className="absolute top-[2300px] right-0 opacity-100">
  <div
    className="w-[800px] h-[800px]"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(250,204,21,0.7) 2px, transparent 2px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 80%)",
    }}
  />
</div>
{/* Motif 6 */}
<div className="absolute top-[3100px] left-0 opacity-100">
  <div
    className="w-[800px] h-[800px]"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(250,204,21,0.7) 2px, transparent 2px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(circle at center, black 30%, transparent 80%)",
    }}
  />
</div>
    <div className="absolute -top-64 -left-64 w-[700px] h-[700px] rounded-full bg-yellow-200/10 blur-[250px]"></div>
<div className="relative z-10">
<div className="absolute bottom-0 right-0 w-[900px] h-[500px] rounded-full bg-yellow-300/10 blur-[250px]"></div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 md:px-12 py-3 md:py-2 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-4">
  <Image
  src="/logo.png"
  alt="M.Studio Logo"
  width={150}
  height={150}
  className="w-28 md:w-[150px] h-auto"
  priority
  />
</div>

        <div className="hidden md:flex gap-8 text-gray-700">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-4">
  {/* Bouton desktop */}
  <a
    href="https://wa.me/15149722186"
    target="_blank"
    className="hidden md:block bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
  >
    Discutons de votre projet
  </a>

  {/* Bouton menu mobile */}
  <button
  className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? (
    <X size={36} strokeWidth={2.5} />
  ) : (
    <Menu size={36} strokeWidth={2.5} />
  )}
</button>
</div>
      </nav>
{menuOpen && (
  <div className="fixed inset-0 z-[100] md:hidden">
    {/* Fond sombre */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* Menu */}
    <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-8 flex flex-col">

      <button
  className="self-end mb-8 p-2 rounded-full hover:bg-gray-100 transition"
  onClick={() => setMenuOpen(false)}
>
  <X size={32} className="text-black" />
</button>

      <a
        href="#accueil"
        onClick={() => setMenuOpen(false)}
        className="text-xl font-semibold text-black py-4 border-b border-gray-200 hover:text-yellow-500 transition"
      >
        Accueil
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="text-xl font-semibold text-black py-4 border-b border-gray-200 hover:text-yellow-500 transition"
      >
        Services
      </a>

      <a
        href="#projets"
        onClick={() => setMenuOpen(false)}
        className="text-xl font-semibold text-black py-4 border-b border-gray-200 hover:text-yellow-500 transition"
      >
        Projets
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-xl font-semibold text-black py-4 border-b border-gray-200 hover:text-yellow-500 transition"
      >
        Contact
      </a>

      <a
        href="https://wa.me/15149722186"
        target="_blank"
        className="mt-8 bg-yellow-400 text-center py-4 rounded-full font-semibold"
      >
        Discutons de votre projet
      </a>

    </div>
  </div>
)}
      {/* Hero */}
      <motion.section
  id="accueil"
  className="relative flex flex-col items-center justify-center text-center pt-32 md:pt-40 px-5 md:px-6 z-10"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 text-xs md:text-base font-medium mt-8 md:mt-0 mb-6 md:mb-8">
          🇸🇳 Design • Branding • Développement Web
         </div>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#111111] leading-tight">
          Nous créons des marques.
          <br />
          Pas juste des designs.
        </h1>

        <p className="mt-6 md:mt-8 max-w-xl md:max-w-2xl text-lg md:text-xl text-gray-600">
          Nous aidons les entrepreneurs à transformer leurs idées en marques
          fortes et mémorables grâce au design, au branding et au développement
          web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto">
  <a
    href="#services"
    className="bg-yellow-400 px-7 py-4 rounded-full font-semibold hover:bg-yellow-300 transition w-full sm:w-auto text-center"
  >
    Découvrir nos services
  </a>

  <a
  href="#projets"
  className="border border-black text-black px-7 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition w-full sm:w-auto text-center"
>
  Voir nos projets
</a>
</div>
      </motion.section>
      <section id="services" className="py-20 md:py-32 px-5 md:px-8">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-black">
    Nos Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">Design</h3>
      <p className="text-gray-600">
        Logos, affiches, visuels pour réseaux sociaux et identité visuelle.
      </p>
    </div>

    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">Branding</h3>
      <p className="text-gray-600">
        Création d'une image de marque forte et mémorable pour votre entreprise.
      </p>
    </div>

    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">Développement Web</h3>
      <p className="text-gray-600">
        Sites vitrines modernes, rapides et optimisés pour votre activité.
      </p>
    </div>

  </div>
</section>
<section
  id="projets"
  className="scroll-mt-28 py-20 md:py-32 px-5 md:px-8"
 >
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-black">
    Nos Projets
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-[#111111] rounded-3xl min-h-[430px] md:h-96 p-6 md:p-8 text-white hover:-translate-y-2 transition duration-300">
  <Image
  src="/Branding2.png"
  alt="Branding"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full aspect-[4/3] object-cover rounded-2xl mb-5"
/>
      <h3 className="text-3xl font-bold">Identité de marque</h3>
      <p className="mt-4 text-gray-300">
        Branding complet pour une entreprise moderne.
      </p>
    </div>

    <div className="bg-yellow-400 rounded-3xl min-h-[430px] md:h-96 p-6 md:p-8 text-black hover:-translate-y-2 transition duration-300">
     <Image
  src="/SiteVitrine.png"
  alt="Site vitrine"
  width={600}
  height={400}
  className="w-full aspect-[4/3] object-cover rounded-2xl mb-5"
/> 
      <h3 className="text-3xl font-bold">Site vitrine</h3>
      <p className="mt-4">
        Création d'un site web élégant et performant.
      </p>
    </div>

    <div className="bg-white rounded-3xl min-h-[430px] md:h-96 p-6 md:p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <Image
  src="/Affiche.png"
  alt="Design Réseaux Sociaux"
  width={500}
  height={300}
  className="w-full aspect-[4/3] object-cover rounded-2xl mb-5"
/>
      <h3 className="text-3xl font-bold text-black">Design Réseaux Sociaux</h3>
      <p className="mt-4 text-gray-600">
        Visuels modernes pour Instagram et Facebook.
      </p>
    </div>

  </div>
</section>
{/* Pourquoi choisir M.Studio */}
<section className="py-20 md:py-32 px-5 md:px-8">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
    Pourquoi choisir M.Studio ?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">

    <div className="bg-white w-full p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-3xl font-bold text-black">⚡ Rapide et efficace</h3>
      <p className="text-gray-600">
        Livraison rapide et travail professionnel.
      </p>
    </div>

    <div className="bg-white w-full p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-3xl font-bold text-black">🎨 Design moderne</h3>
      <p className="text-gray-600">
        Des créations uniques adaptées à votre image.
      </p>
    </div>

    <div className="bg-white w-full p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-3xl font-bold text-black">📱 Responsive</h3>
      <p className="text-gray-600">
        Des sites optimisés pour ordinateur, tablette et mobile.
      </p>
    </div>

    <div className="bg-white w-full p-6 md:p-10 rounded-3xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <h3 className="text-3xl font-bold text-black">🤝 Accompagnement personnalisé</h3>
      <p className="text-gray-600">
        Nous vous accompagnons de l'idée jusqu'au résultat final.
      </p>
    </div>

  </div>
</section>
{/* FAQ */}
<section className="py-20 md:py-32 px-5 md:px-8">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-black">
    Questions fréquentes
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">

    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-bold mb-3 text-black">
        Combien coûte un projet ?
      </h3>
      <p className="text-gray-600">
        Chaque projet est unique. Contactez-nous pour obtenir un devis personnalisé.
      </p>
    </div>

    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-bold mb-3 text-black">
        Combien de temps prend la réalisation ?
      </h3>
      <p className="text-gray-600">
        Selon la complexité du projet, cela peut prendre quelques Mois.
      </p>
    </div>

    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-bold mb-3 text-black">
        Travaillez-vous à distance ?
      </h3>
      <p className="text-gray-600">
        Oui, nous collaborons avec des clients partout dans le monde.
      </p>
    </div>

    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm">
      <h3 className="text-2xl font-bold mb-3 text-black">
        Proposez-vous des modifications ?
      </h3>
      <p className="text-gray-600">
        Oui, nous travaillons avec vous jusqu'à obtenir un résultat satisfaisant.
      </p>
    </div>

  </div>
</section>
{/* Contact */}
<section id="contact" className="py-20 md:py-32 px-5 md:px-8 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
    Prêt à donner vie à votre projet ?
  </h2>

  <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
    Discutons ensemble de votre marque et créons quelque chose d'exceptionnel.
  </p>

  <a
  href="https://wa.me/15149722186"
  target="_blank"
  className="bg-yellow-400 px-8 py-5 rounded-full font-semibold text-lg hover:bg-yellow-300 transition inline-block"
>
  Parlons de votre projet
</a>
</section>
{/* Footer */}
<footer className="bg-[#111111] text-white py-12 md:py-16 px-5 md:px-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

    <div>
      <h3 className="text-3xl font-bold mb-4">
        M.Studio
      </h3>

      <p className="text-gray-400">
        Design • Branding • Développement Web
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-4">
        Contact
      </h4>

      <p className="text-gray-400">
        Mail : mstudio.sn@gmail.com
      </p>

      <a
  href="https://instagram.com/m.studio.visual"
  target="_blank"
  className="text-gray-400 mt-2 block hover:text-yellow-400 transition"
>
  Instagram : @m.studio.visual
</a>
    </div>

  </div>

  <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500">
    © 2026 M.Studio Tous droits réservés.
  </div>
</footer>
</div>
{/* Bouton WhatsApp flottant */}
<a
  href="https://wa.me/15149722186"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
>
  <FaWhatsapp size={20} />
</a>
    </main>
  );
}