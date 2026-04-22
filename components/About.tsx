"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 7a5 5 0 1 0 5 5" />
    <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
    <path d="M15 6v3h3l3 -3h-3v-3l-3 3" />
    <path d="M15 9l-3 3" />
  </svg>
);

export default function About() {
  const { t } = useLanguage();

  const cards = [
    { icon: <IconUser />, titleKey: "about.card1.title", descKey: "about.card1.desc" },
    { icon: <IconHeart />, titleKey: "about.card2.title", descKey: "about.card2.desc" },
    { icon: <IconTarget />, titleKey: "about.card3.title", descKey: "about.card3.desc" },
  ];

  return (
    <section id="about" className="bg-white px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">

      {/* Título */}
      <div className="flex flex-col items-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight text-center">
          {t("about.title")}
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full" />
      </div>

      {/* Tarjetas */}
      <div className="grid gap-3 xs:gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3 mb-6 md:mb-8">
        {cards.map((card) => (
          <div key={card.titleKey} className="border border-gray-200 rounded-2xl p-4 xs:p-5 md:p-6 flex flex-col gap-3 shadow-sm">
            <div className="flex flex-row items-center gap-3">
              <div className="bg-[#FF8000] w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <span className="font-semibold text-sm md:text-base text-gray-800">{t(card.titleKey)}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{t(card.descKey)}</p>
          </div>
        ))}
      </div>

      {/* Contenedor texto + imagen */}
      <div className="border border-gray-200 rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">

          {/* Texto izquierda */}
          <div className="flex-1">
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              {t("about.summary")}
            </p>
          </div>

          {/* Imagen derecha */}
          <div className="w-full md:w-48 lg:w-56 shrink-0">
            <div className="rounded-2xl overflow-hidden border-4 border-[#FF8000] shadow-lg">
              <Image
                src="/fotico.jpeg"
                alt="Miguel Mendoza en Nequi"
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}