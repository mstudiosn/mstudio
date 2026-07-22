"use client";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Layers,
  Menu,
  Moon,
  Palette,
  Smartphone,
  Sun,
  Users,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import AppIcon from "@/components/AppIcon";

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

const FAQS = [
  {
    question: "Combien coûte un projet ?",
    answer:
      "Chaque projet est unique. Contactez-nous pour obtenir un devis personnalisé.",
  },
  {
    question: "Combien de temps prend la réalisation ?",
    answer: "Selon la complexité du projet, cela peut prendre quelques mois.",
  },
  { 
    question: "Travaillez-vous à distance ?",
    answer: "Oui, nous collaborons avec des clients partout dans le monde.",
  },
  {
    question: "Proposez-vous des modifications ?",
    answer:
      "Oui, nous travaillons avec vous jusqu'à obtenir un résultat satisfaisant.",
  },
];

function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-500 mb-3">
      — {label}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with a client-only preference (localStorage/matchMedia) that isn't knowable during SSR
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
      <div className="absolute -top-64 -left-64 w-[700px] h-[700px] rounded-full bg-yellow-200/10 blur-[250px]"></div>
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 h-20 md:h-28 flex items-center justify-between px-5 md:px-12 bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-stone-100 dark:border-white/10 shadow-sm transition-colors duration-300">
          <div className="flex items-center gap-4">
            <Image
              src={isDark ? "/logo-dark.png" : "/logo.png"}
              alt="M.Studio Logo"
              width={150}
              height={150}
              className={isDark ? "w-16 md:w-24 h-auto" : "w-28 md:w-[150px] h-auto"}
              priority
            />
          </div>

          <div className="hidden md:flex gap-8 text-stone-700 dark:text-stone-300">
            <a href="#accueil">Accueil</a>
            <a href="#services">Services</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            {/* Bouton thème */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
              suppressHydrationWarning
              className="p-2 md:p-3 rounded-full text-black dark:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition"
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Bouton desktop */}
            <button
              onClick={() => setQuoteOpen(true)}
              className="hidden md:block bg-yellow-400 px-6 py-3 rounded-full text-sm font-semibold text-black hover:bg-yellow-300 transition duration-300 shadow-md"
            >
              Discutons de votre projet
            </button>

            {/* Bouton menu mobile */}
            <button
              className="md:hidden p-2 rounded-lg text-black dark:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition"
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
            <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-[#111111] shadow-2xl p-8 flex flex-col">
              <button
                className="self-end mb-8 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                <X size={32} className="text-black dark:text-white" />
              </button>

              <a
                href="#accueil"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-black dark:text-white py-4 border-b border-stone-200 dark:border-white/10 hover:text-yellow-500 transition"
              >
                Accueil
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-black dark:text-white py-4 border-b border-stone-200 dark:border-white/10 hover:text-yellow-500 transition"
              >
                Services
              </a>

              <a
                href="#projets"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-black dark:text-white py-4 border-b border-stone-200 dark:border-white/10 hover:text-yellow-500 transition"
              >
                Projets
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-black dark:text-white py-4 border-b border-stone-200 dark:border-white/10 hover:text-yellow-500 transition"
              >
                Contact
              </a>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setQuoteOpen(true);
                }}
                className="mt-8 bg-yellow-400 text-center py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
              >
                Discutons de votre projet
              </button>
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
          <RegistrationMark className="hidden md:block absolute top-24 right-6 w-6 h-6 text-yellow-500/50" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-white/20 text-[11px] md:text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 mt-8 md:mt-0 mb-6 md:mb-8">
            🇸🇳 Design · Branding · Développement Web
          </div>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#111111] dark:text-white leading-[1.05] tracking-tight">
            Nous créons des{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">marques.</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-1 md:bottom-3 h-3 md:h-5 bg-yellow-300 dark:bg-yellow-500/40 -rotate-1"
              />
            </span>
            <br />
            Pas juste des designs.
          </h1>

          <p className="mt-6 md:mt-8 max-w-xl md:max-w-2xl text-lg md:text-xl text-stone-600 dark:text-stone-400">
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
              className="border border-black dark:border-white text-black dark:text-white px-7 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition w-full sm:w-auto text-center"
            >
              Voir nos projets
            </a>
          </div>
        </motion.section>

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

            <div>
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.question}
                    className="border-b border-stone-200 dark:border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 py-6 text-left"
                    >
                      <span className="text-lg md:text-xl font-semibold text-black dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-stone-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-stone-600 dark:text-stone-400">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
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

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}
