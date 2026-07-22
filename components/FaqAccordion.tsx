"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-stone-600 dark:text-stone-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
