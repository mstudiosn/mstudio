import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Code2, Layers, Palette, Smartphone, Users, Wand2, Zap } from "lucide-react";
import AppIcon from "@/components/AppIcon";
import RegistrationMark from "@/components/RegistrationMark";
import SectionEyebrow from "@/components/SectionEyebrow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FaqAccordion from "@/components/FaqAccordion";

const MARQUEE_WORDS = [
  "DESIGN",
  "BRANDING",
  "IDENTITÉ VISUELLE",
  "SITES WEB",
  "STRATÉGIE DE MARQUE",
  "DIRECTION ARTISTIQUE",
];

const SERVICES = [
  {
    icon: Palette,
    title: "Design",
    description:
      "Logos, affiches, visuels pour réseaux sociaux et identité visuelle.",
    gradient: "from-amber-300 to-yellow-500",
  },
  {
    icon: Layers,
    title: "Branding",
    description:
      "Création d'une image de marque forte et mémorable pour votre entreprise.",
    gradient: "from-neutral-700 to-black",
  },
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Sites vitrines modernes, rapides et optimisés pour votre activité.",
    gradient: "from-indigo-400 to-blue-600",
  },
];

const PROJECTS = [
  {
    image: "/Branding2.png",
    title: "Identité de marque",
    description:
      "Branding complet pour une entreprise moderne : logo, palette, typographie et déclinaisons.",
    secteur: "Commerce de détail",
    service: "Logo · Charte graphique",
  },
  {
    image: "/SiteVitrine.png",
    title: "Site vitrine",
    description:
      "Un site élégant et performant, pensé pour transformer les visiteurs en clients.",
    secteur: "Services professionnels",
    service: "Design · Développement",
  },
  {
    image: "/Affiche.png",
    title: "Design Réseaux Sociaux",
    description: "Visuels modernes et cohérents pour Instagram et Facebook.",
    secteur: "Réseaux sociaux",
    service: "Direction artistique",
  },
];

const WHY_CHOOSE = [
  {
    icon: Zap,
    title: "Rapide et efficace",
    description: "Livraison rapide et travail professionnel.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: Wand2,
    title: "Design moderne",
    description: "Des créations uniques adaptées à votre image.",
    gradient: "from-fuchsia-400 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Des sites optimisés pour ordinateur, tablette et mobile.",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Nous vous accompagnons de l'idée jusqu'au résultat final.",
    gradient: "from-sky-400 to-blue-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-10 left-0 opacity-90 pointer-events-none">
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
      <div className="hidden md:block absolute -top-64 -left-64 w-[700px] h-[700px] rounded-full bg-yellow-200/10 blur-[250px]"></div>
      <div className="relative z-10">
        <Navbar />

        <Hero />

        {/* Bande défilante */}
        <div className="mt-16 md:mt-24 w-full border-y border-stone-200 dark:border-white/10 py-4 overflow-hidden relative z-10">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="flex items-center gap-10 font-display font-semibold italic text-2xl md:text-3xl text-stone-300 dark:text-white/15"
              >
                {word}
                <RegistrationMark className="w-4 h-4 text-yellow-400 shrink-0" />
              </span>
            ))}
          </div>
        </div>

        <section id="services" className="py-20 md:py-32 px-5 md:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionEyebrow label="Nos services" />
            <h2 className="font-display font-semibold text-4xl md:text-5xl mb-10 md:mb-16 text-black dark:text-white">
              Ce que nous faisons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="border border-stone-200 dark:border-white/10 rounded-3xl p-6 md:p-10 hover:border-yellow-400 dark:hover:border-yellow-500/60 transition-colors duration-300"
                >
                  <div className="mb-6">
                    <AppIcon icon={service.icon} gradient={service.gradient} />
                  </div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl mb-3 text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projets"
          className="scroll-mt-28 py-20 md:py-32 px-5 md:px-8 relative"
        >
          <RegistrationMark className="hidden md:block absolute top-16 left-8 w-6 h-6 text-stone-300 dark:text-white/15" />
          <div className="max-w-6xl mx-auto">
            <SectionEyebrow label="Nos projets" />
            <h2 className="font-display font-semibold text-4xl md:text-5xl mb-14 md:mb-20 text-black dark:text-white">
              Une sélection de nos réalisations
            </h2>

            <div className="space-y-16 md:space-y-24">
              {PROJECTS.map((project, i) => (
                <div
                  key={project.title}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-7/12">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover rounded-3xl"
                    />
                  </div>

                  <div className="w-full md:w-5/12">
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500">
                      0{i + 1} / {PROJECTS.length}
                    </span>
                    <h3 className="font-display font-semibold text-3xl md:text-4xl mt-3 mb-4 text-black dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 mb-6">
                      {project.description}
                    </p>
                    <dl className="grid grid-cols-2 gap-4 border-t border-stone-200 dark:border-white/10 pt-6 font-mono text-sm">
                      <div>
                        <dt className="text-stone-400 dark:text-stone-500 uppercase tracking-wide text-[10px] mb-1">
                          Secteur
                        </dt>
                        <dd className="text-black dark:text-white">
                          {project.secteur}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-stone-400 dark:text-stone-500 uppercase tracking-wide text-[10px] mb-1">
                          Service
                        </dt>
                        <dd className="text-black dark:text-white">
                          {project.service}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi choisir M.Studio */}
        <section className="py-20 md:py-32 px-5 md:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionEyebrow label="Pourquoi nous" />
            <h2 className="font-display font-semibold text-4xl md:text-5xl mb-14 md:mb-16 text-black dark:text-white">
              Pourquoi choisir M.Studio ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              {WHY_CHOOSE.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 border border-stone-200 dark:border-white/10 w-full p-6 md:p-10 rounded-3xl hover:border-yellow-400 dark:hover:border-yellow-500/60 transition-colors duration-300"
                >
                  <div className="shrink-0">
                    <AppIcon icon={item.icon} gradient={item.gradient} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 px-5 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
            <div>
              <SectionEyebrow label="FAQ" />
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-black dark:text-white">
                Questions fréquentes
              </h2>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 md:py-32 px-5 md:px-8 text-center relative"
        >
          <RegistrationMark className="hidden md:block absolute top-16 right-10 w-6 h-6 text-yellow-500/50" />
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-black dark:text-white mb-8">
            Prêt à donner vie à votre projet ?
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-stone-600 dark:text-stone-400 mb-10">
            Discutons ensemble de votre marque et créons quelque chose d&apos;exceptionnel.
          </p>

          <a
            href="https://wa.me/15149722186"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 px-8 py-5 rounded-full font-semibold text-lg hover:bg-yellow-300 transition inline-block"
          >
            Parlons de votre projet
          </a>
        </section>
        {/* Footer */}
        <footer className="bg-[#111111] text-white py-12 md:py-16 px-5 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            <div>
              <h3 className="font-display font-semibold text-3xl mb-4">M.Studio</h3>

              <p className="text-stone-400">
                Design • Branding • Développement Web
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>

              <p className="text-stone-400">Mail : mstudio.sn@gmail.com</p>

              <a
                href="https://instagram.com/m.studio.visual"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 mt-2 block hover:text-yellow-400 transition"
              >
                Instagram : @m.studio.visual
              </a>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-10 pt-8 text-center text-stone-500">
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
