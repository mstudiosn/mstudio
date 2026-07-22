import RegistrationMark from "@/components/RegistrationMark";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="animate-hero relative flex flex-col items-center justify-center text-center pt-32 md:pt-40 px-5 md:px-6 z-10"
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
    </section>
  );
}
