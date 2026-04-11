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

  const doubled = [...techs, ...techs];

  return (
    <section className="bg-[#D9D9D9]/25 py-8 xs:py-9 sm:py-10 md:py-12 lg:py-14 xl:py-16 overflow-hidden">

      {/* Título */}
      <div className="flex flex-col items-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 px-4">
        <h3 className="
          text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl
          font-bold text-gray-700 text-center
        ">
          {t("tech.title")}
        </h3>
      </div>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="
                text-gray-700 font-bold shrink-0
                text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl
                mx-4 xs:mx-5 sm:mx-6 md:mx-8 lg:mx-10
              "
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