"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Code2,
  Palette,
  User,
  Wallet,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import AppIcon from "@/components/AppIcon";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_NUMBER = "15149722186";
const inputClass = `
w-full
rounded-2xl
border
border-gray-300
dark:border-gray-700
bg-white
dark:bg-[#1e1e1e]
px-4
py-3
text-base
text-gray-800
dark:text-gray-100
placeholder:text-gray-400
dark:placeholder:text-gray-500
transition-all
duration-300
focus:outline-none
focus:border-yellow-400
focus:ring-4
focus:ring-yellow-100
dark:focus:ring-yellow-900/30
`;
function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  className={inputClass}
/>
    </div>
  );
}
function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-10">

      <div className="flex items-center justify-between">

        <h3 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
          Étape {step} sur 5
        </h3>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {step * 20}%
        </span>

      </div>

      <div className="mt-4 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">

        <div
          style={{ width: `${step * 20}%` }}
          className="h-full rounded-full bg-yellow-400 transition-[width] duration-500"
        />

      </div>

      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Comptez moins de 2 minutes.
      </p>

    </div>
  );
}
function ServiceCard({
  title,
  description,
  icon,
  gradient,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        w-full
        rounded-2xl
        border-2
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        ${
          selected
            ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-950/30"
            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] hover:border-yellow-300 dark:hover:border-yellow-700"
        }
      `}
    >
<div className="flex items-center gap-4">

    <AppIcon icon={icon} gradient={gradient} size="sm" />

    <div>
        <h3 className="font-bold text-lg text-black dark:text-white">
            {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mt-1">
            {description}
        </p>
    </div>

</div>
    </button>
  );
}

function BudgetCard({
  title,
  selected,
  onClick,
}: {
  title: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        border-2
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        ${
          selected
            ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-950/30"
            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] hover:border-yellow-300 dark:hover:border-yellow-700"
        }
      `}
    >
      <h3
  className={`font-semibold text-lg ${
    selected ? "text-black dark:text-white" : "text-gray-900 dark:text-gray-300"
  }`}
>
  {title}
</h3>
    </button>
  );
}

function LocationCard({
  title,
  description,
  countryCode,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  countryCode: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        border-2
        p-4
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        ${
          selected
            ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-950/30"
            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] hover:border-yellow-300 dark:hover:border-yellow-700"
        }
      `}
    >
      <div className="flex items-start gap-4">

        <div className="relative w-12 h-12 rounded-[22%] overflow-hidden shadow-md shadow-black/10 dark:shadow-black/40 ring-1 ring-inset ring-black/5 dark:ring-white/10 shrink-0">
  <ReactCountryFlag
    countryCode={countryCode}
    svg
    style={{ width: "100%", height: "100%" }}
    className="block w-full h-full"
  />
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"
  />
</div>

        <div>
          <h3 className="font-bold text-lg text-black dark:text-white">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>

      </div>
    </button>
  );
}


interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export default function QuoteModal({
  open,
  onClose,
}: QuoteModalProps) {

  const [step, setStep] = useState(0);
  const [isLoadingReview, setIsLoadingReview] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "Canada",
  services: [] as string[],
  budget: "",
});

  const canContinue =
    formData.name.trim() &&
    EMAIL_REGEX.test(formData.email.trim());

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!isLoadingReview) return;

    const timeoutId = setTimeout(() => {
      setIsLoadingReview(false);
      setStep(4);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isLoadingReview]);

  const goToReview = () => setIsLoadingReview(true);

  const toggleService = (service: string) => {
  setFormData((prev) => ({
    ...prev,
    services: prev.services.includes(service)
      ? prev.services.filter((s) => s !== service)
      : [...prev.services, service],
  }));
}; 

const budgetOptions =
  formData.country === "Canada"
    ? [
        {
          value: "under-1000",
          title: "Moins de 1 000 $",
          description: "Petit projet ou landing page",
        },
        {
          value: "1000-3000",
          title: "1 000 $ à 3 000 $",
          description: "Site vitrine professionnel",
        },
        {
          value: "3000-5000",
          title: "3 000 $ à 5 000 $",
          description: "Projet complet",
        },
        {
          value: "5000+",
          title: "Plus de 5 000 $",
          description: "Projet sur mesure",
        },
      ]
    : [
        {
          value: "under-500k",
          title: "Moins de 100 000 FCFA",
          description: "Petit projet",
        },
        {
          value: "200k-150k",
          title: "100 000 à 150 000 FCFA",
          description: "Site vitrine professionnel",
        },
        {
          value: "150k-200k",
          title: "150 000 à 200 000 FCFA",
          description: "Projet complet",
        },
        {
          value: "200k+",
          title: "Plus de 200 000 FCFA",
          description: "Projet sur mesure",
        },
      ];

const phonePlaceholder =
  formData.country === "Canada"
    ? "Ex. +1 514 123 4567"
    : "Ex. +221 77 123 45 67";

const selectedBudget = budgetOptions.find(
  (budget) => budget.value === formData.budget
);

const sendQuoteViaWhatsApp = () => {
  const message = [
    "Bonjour, je souhaite un devis pour mon projet :",
    "",
    `👤 Nom : ${formData.name}`,
    `🏢 Entreprise : ${formData.company || "Non renseignée"}`,
    `📧 Email : ${formData.email}`,
    `📱 Téléphone : ${formData.phone || "Non renseigné"}`,
    `🌍 Pays : ${formData.country}`,
    `🛠️ Services : ${formData.services.join(", ")}`,
    `💰 Budget : ${selectedBudget?.title ?? "Non renseigné"}`,
  ].join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <>
      {/* Fond noir */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Fenêtre */}
      <div
        inert={!open}
        className={`fixed inset-0 flex items-center justify-center z-[1000] p-5 transition-all duration-300 ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-10 pointer-events-none"
        }`}
      >
            <div
  onClick={(e) => e.stopPropagation()}
  role="dialog"
  aria-modal="true"
  aria-label="Demande de devis"
  className="bg-white dark:bg-[#151515] text-black dark:text-white rounded-3xl shadow-2xl w-full max-w-2xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto"
>
              <button
  onClick={onClose}
  aria-label="Fermer"
  className="
    absolute
    top-5
    right-5
    w-12
    h-12
    flex
    items-center
    justify-center
    rounded-full
    bg-white/90
    dark:bg-black/40
    backdrop-blur-sm
    border
    border-gray-200
    dark:border-gray-700
    shadow-sm
    text-gray-700
    dark:text-gray-300
    transition-all
    duration-300
    hover:bg-yellow-400
    hover:text-black
    hover:shadow-lg
    hover:scale-110
  "
>
  <X size={22} className="text-gray-700 dark:text-gray-300" />
</button>

              {isLoadingReview && (
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-gray-700 border-t-yellow-400 animate-spin" />
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Préparation de votre récapitulatif...
                  </p>
                </div>
              )}

              {!isLoadingReview && step === 0 && (
  <>
    <h2 className="text-4xl font-bold text-black dark:text-white mb-4 pr-16">
      Parlons de votre projet 👋
    </h2>

    <p className="text-gray-600 dark:text-gray-400 mb-8">
      Répondez à quelques questions afin que nous puissions vous proposer la meilleure solution.
    </p>

    <button
      onClick={() => setStep(1)}
      className="w-full bg-yellow-400 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
    >
      Commencer
    </button>
  </>
)}
{!isLoadingReview && step === 2 && (
  <>
    <ProgressBar step={step} />

    <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
      Quel service recherchez-vous ?
    </h2>

    <p className="text-gray-600 dark:text-gray-400 mb-8">
      Vous pouvez sélectionner un ou plusieurs services.
    </p>

    <div className="space-y-4">

      <ServiceCard
  icon={Code2}
  gradient="from-indigo-400 to-blue-600"
  title="Création de site web"
  description="Site vitrine, e-commerce ou application web."
  selected={formData.services.includes("Création de site web")}
  onClick={() => toggleService("Création de site web")}
/>

      <ServiceCard
  icon={Palette}
  gradient="from-amber-300 to-yellow-500"
  title="Identité visuelle"
  description="Logo, branding et charte graphique."
  selected={formData.services.includes("Identité visuelle")}
  onClick={() => toggleService("Identité visuelle")}
/>
    </div>

    <div className="flex justify-between mt-8">

      <button
        onClick={() => setStep(1)}
         className="
    flex
    items-center
    gap-2
    px-7
    py-3
    rounded-full
    bg-white
    dark:bg-[#1e1e1e]
    border
    border-gray-300
    dark:border-gray-700
    text-gray-800
    dark:text-gray-200
    font-semibold
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-yellow-50
    dark:hover:bg-yellow-950/20
    hover:shadow-lg
    hover:-translate-y-1
    active:scale-95
  "
      >
        ← Retour
      </button>

      <button
        disabled={formData.services.length === 0}
        onClick={() => setStep(3)}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          formData.services.length > 0
            ? "bg-yellow-400 hover:bg-yellow-300 text-black"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Suivant →
      </button>

    </div>
  </>
)}

{!isLoadingReview && step === 3 && (
  <>
    <ProgressBar step={step} />

    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
      Quel est votre budget ?
    </h2>

    <p className="text-gray-600 dark:text-gray-400 mb-8">
      Cette information nous aide à vous proposer une solution adaptée.
    </p>

    <div className="space-y-4">

    {budgetOptions.map((budget) => (
  <BudgetCard
    key={budget.value}
    title={budget.title}
    selected={formData.budget === budget.value}
    onClick={() =>
      setFormData({
        ...formData,
        budget: budget.value,
      })
    }
  />
))}  

    </div>

    <div className="flex justify-between mt-8">

      <button
        onClick={() => setStep(2)}
        className="
    flex
    items-center
    gap-2
    px-7
    py-3
    rounded-full
    bg-white
    dark:bg-[#1e1e1e]
    border
    border-gray-300
    dark:border-gray-700
    text-gray-800
    dark:text-gray-200
    font-semibold
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-yellow-50
    dark:hover:bg-yellow-950/20
    hover:shadow-lg
    hover:-translate-y-1
    active:scale-95
  "
      >
        ← Retour
      </button>

      <button
        disabled={!formData.budget}
        onClick={goToReview}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          formData.budget
            ? "bg-yellow-400 hover:bg-yellow-300 text-black"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Suivant →
      </button>

    </div>
  </>
)}

{!isLoadingReview && step === 1 && (
  <>
 <ProgressBar step={step} />
 
    <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
      Vos informations
    </h2>

    <p className="text-gray-600 dark:text-gray-400 mb-8">
      Commençons par faire connaissance.
    </p>
<div className="space-y-4">
<InputField
  label="Nom complet"
  placeholder="Ex. Moussa Ndiaye"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
/>

<InputField
  label="Nom de l'entreprise"
  placeholder="Ex. M.Studio"
  value={formData.company}
  onChange={(e) =>
    setFormData({
      ...formData,
      company: e.target.value,
    })
  }
/>

<InputField
  label="Adresse e-mail"
  placeholder="Ex. contact@entreprise.com"
  type="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
/>

<InputField
  label="Téléphone"
  placeholder={phonePlaceholder}
  type="tel"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
/>

<div className="space-y-2 pt-2">

  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
    Où est basée votre entreprise ?
  </label>

  <div className="space-y-4">

  <LocationCard
     countryCode="CA"
     title="Canada"
     description="Pour les entreprises et organisations canadiennes."
      selected={formData.country === "Canada"}
      onClick={() =>
        setFormData({
          ...formData,
          country: "Canada",
        })
      }
    />

<LocationCard
  countryCode="SN"
  title="Sénégal"
  description="Pour les entreprises et PME sénégalaises."
  selected={formData.country === "Senegal"}
  onClick={() =>
    setFormData({
      ...formData,
      country: "Senegal",
    })
  }
/>

  </div>

</div>

  <div className="flex justify-end pt-4">
<button
  onClick={() => setStep(2)}
  disabled={!canContinue}
  className={`
    group
    px-8
    py-3
    rounded-full
    font-semibold
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-2

    ${
      canContinue
        ? "bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
        : "bg-gray-200 text-gray-400 cursor-not-allowed"
    }
  `}
>
  Suivant
  <span className="transition-transform group-hover:translate-x-1">
    →
  </span>
</button>
  </div>
</div>
  </>
)}

{!isLoadingReview && step === 4 && (
  <>
    <ProgressBar step={4} />

<div className="text-center mb-10">
  <div className="animate-pop-in-strong flex justify-center mb-4">
    <AppIcon icon={Check} gradient="from-green-400 to-emerald-600" size="lg" />
  </div>

  <h2 className="text-3xl font-bold text-black dark:text-white">
    Tout est prêt !
  </h2>

  <p className="mt-3 text-gray-600 dark:text-gray-400">
    Vérifiez une dernière fois vos informations avant
    d&apos;envoyer votre demande de devis.
  </p>
</div>

<div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 p-6 space-y-5 mb-6">

  <h3 className="flex items-center gap-3 text-xl font-bold text-black dark:text-white">
    <AppIcon icon={User} gradient="from-sky-400 to-blue-600" size="xs" />
    Vos informations
  </h3>

  <div className="grid gap-5 md:grid-cols-2">

    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Nom</p>
      <p className="font-semibold">{formData.name}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Entreprise</p>
      <p className="font-semibold">
        {formData.company || "Non renseignée"}
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
      <p className="font-semibold">{formData.email}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
      <p className="font-semibold">
        {formData.phone || "Non renseigné"}
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Pays</p>

      <div className="flex items-center gap-2 font-semibold">

        <div className="relative w-6 h-6 rounded-[22%] overflow-hidden ring-1 ring-inset ring-black/5 dark:ring-white/10 shrink-0">
          <ReactCountryFlag
            countryCode={
              formData.country === "Canada"
                ? "CA"
                : "SN"
            }
            svg
            style={{ width: "100%", height: "100%" }}
            className="block w-full h-full"
          />
        </div>

        {formData.country}
      </div>

    </div>

  </div>

</div>

<div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 p-6 space-y-5 mb-6">

  <h3 className="flex items-center gap-3 text-xl font-bold text-black dark:text-white">
    <AppIcon icon={Wrench} gradient="from-neutral-700 to-black" size="xs" />
    Services sélectionnés
  </h3>

  <div className="flex flex-wrap gap-3">

    {formData.services.map((service) => (
      <div
        key={service}
        className="
          animate-pop-in
          px-4
          py-2
          rounded-full
          bg-yellow-100
          dark:bg-yellow-950/40
          border
          border-yellow-300
          dark:border-yellow-800
          text-black
          dark:text-yellow-100
          font-medium
        "
      >
        ✓ {service}
      </div>
    ))}

  </div>

</div>

<div className="rounded-3xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/30 p-6 mb-10">

  <h3 className="flex items-center gap-3 text-xl font-bold text-black dark:text-white mb-5">
    <AppIcon icon={Wallet} gradient="from-amber-300 to-yellow-500" size="xs" />
    Budget estimé
  </h3>

  <div className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-3 text-black font-bold text-lg">

    {selectedBudget?.title}

  </div>

</div>

    <div className="flex justify-between mt-8">

      <button
        onClick={() => setStep(3)}
        className="
    flex
    items-center
    gap-2
    px-7
    py-3
    rounded-full
    bg-white
    dark:bg-[#1e1e1e]
    border
    border-gray-300
    dark:border-gray-700
    text-gray-800
    dark:text-gray-200
    font-semibold
    transition-all
    duration-300
    hover:border-yellow-400
    hover:bg-yellow-50
    dark:hover:bg-yellow-950/20
    hover:shadow-lg
    hover:-translate-y-1
    active:scale-95
  "
      >
        ← Retour
      </button>

      <button
        onClick={sendQuoteViaWhatsApp}
        className="bg-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95"
      >
        Envoyer via WhatsApp
      </button>

    </div>
  </>
)}

            </div>
      </div>
    </>
  );
}