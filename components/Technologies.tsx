"use client";

import { useLanguage } from "@/context/LanguageContext";

const techs = [
  "<JAVA>",
  "<PYTHON>",
  "<JAVASCRIPT>",
  "<HTML>",
  "<REACT>",
  "<TAILWIND>",
  "<CSS>",
  "<GITHUB>",
  "<NEXT.JS>",
  "<TYPESCRIPT>",
];

export default function Technologies() {
  const { t } = useLanguage();

  // Duplicamos el array para que el loop sea infinito y sin saltos
  const doubled = [...techs, ...techs];

  return (
    <section
      className="bg-[#D9D9D9]/25 py-10 sm:py-12 md:py-14 overflow-hidden"
    >
      {/* Título */}
      <div className="flex flex-col items-center mb-8 sm:mb-10 px-4">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 text-center">
          {t("tech.title")}
        </h3>
      </div>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="text-gray-700 font-bold text-sm sm:text-base md:text-lg mx-6 sm:mx-8 md:mx-10 shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
}