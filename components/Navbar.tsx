"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
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
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-24 md:h-28 flex items-center justify-between px-5 md:px-12 bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-stone-100 dark:border-white/10 shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-4">
          <Image
            src={isDark ? "/logo-dark.png" : "/logo.png"}
            alt="M.Studio Logo"
            width={150}
            height={150}
            className="w-20 md:w-28 h-auto"
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

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
