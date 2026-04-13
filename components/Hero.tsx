"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-8 sm:py-10 md:py-14 lg:py-16 bg-white min-h-[calc(100vh-80px)]">

      <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-5 md:mb-7 lg:mb-8">
        <Image src="/fotoPerfil.jpeg" alt="Foto de perfil Miguel Mendoza" width={160} height={160} className="object-cover w-full h-full" />
      </div>

      <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-black uppercase leading-none tracking-tight mb-4 md:mb-5 lg:mb-6">
        Miguel Angel<br />Mendoza Jaramillo
      </h1>

      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 md:mb-3 lg:mb-4">
        {t("hero.role")}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-gray-500 mb-8 md:mb-10 lg:mb-12">
        <span>{t("hero.fullstack")}</span>
        <span className="hidden sm:block text-[#FF8000]">|</span>
        <span>{t("hero.passion")}</span>
      </div>

      <div className="flex flex-row items-end justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <a href="https://github.com/miguelmendoza11" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <Image src="/GitHub.png" alt="GitHub" width={40} height={40} className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)] w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px]" />
          </a>
          <a href="#contact" className="bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap text-[10px] px-4 py-1.5 sm:text-xs sm:px-5 sm:py-2 md:text-sm md:px-6 md:py-2 lg:px-7 lg:py-2.5">
            {t("hero.contact")}
          </a>
        </div>
        <div className="flex flex-col items-center pb-8 sm:pb-9 md:pb-10 lg:pb-12">
          <a href="https://linkedin.com/in/miguel-mendoza-070829311" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <Image src="/linkedi.png" alt="LinkedIn" width={40} height={40} className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)] w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px]" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <a href="mailto:miguelangel11230@gmail.com" className="hover:scale-110 transition-transform duration-200">
            <Image src="/gmail.png" alt="Gmail" width={40} height={40} className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)] w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px]" />
          </a>
          <a href="/cv.pdf" download className="bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap text-[10px] px-4 py-1.5 sm:text-xs sm:px-5 sm:py-2 md:text-sm md:px-6 md:py-2 lg:px-7 lg:py-2.5">
            {t("hero.cv")}
          </a>
        </div>
      </div>

      {/* Indicador de scroll animado */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-gray-400 tracking-widest uppercase">scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M16 15l-4 4l-4 -4" />
        </svg>
      </div>

    </section>
  );
}