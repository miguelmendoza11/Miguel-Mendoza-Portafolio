"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-8 sm:py-10 md:py-14 lg:py-16 bg-white min-h-[calc(100vh-80px)]">


      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mb-6 md:mb-8 lg:mb-10">
        <div className="rounded-2xl overflow-hidden border-4 border-[#FF8000] shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          <Image
            src="/nequiImagen.jpeg"
            alt="Foto de perfil Miguel Mendoza"
            width={600}
            height={400}
            className="w-full h-48 xs:h-52 sm:h-64 md:h-72 lg:h-80 object-cover object-[center_60%]"
          />
        </div>
      </div>


      <h1 className="text-[1.6rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] xl:text-[4.5rem] font-bold text-black uppercase leading-none tracking-tight mb-4 md:mb-5 lg:mb-6">
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

      <div className="flex flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 mb-6 md:mb-8">
        <a href="https://github.com/miguelmendoza11" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
          <Image src="/GitHub.png" alt="GitHub" width={40} height={40} className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)] w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px] dark:invert" />
        </a>
        <a href="https://linkedin.com/in/miguel-mendoza-070829311" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
          <Image src="/linkedi.png" alt="LinkedIn" width={40} height={40} className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)] w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px] dark:invert" />
        </a>
        <a href="mailto:miguelangel11230@gmail.com" className="hover:scale-110 transition-transform duration-200">
          <Image src="/gmail.png" alt="Gmail" width={40} height={40} className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)] w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-[52px] lg:h-[52px]" />
        </a>
      </div>

      <div className="w-50 h-2 bg-[#FF8000] rounded-full mb-8 md:mb-10" />


      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
        <a href="#contact" className="bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap text-[10px] px-4 py-1.5 sm:text-xs sm:px-5 sm:py-2 md:text-sm md:px-6 md:py-2 lg:px-7 lg:py-2.5">
          {t("hero.contact")}
        </a>
        <a href="/cv.pdf" download className="bg-[#FF8000] text-white rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap text-[10px] px-4 py-1.5 sm:text-xs sm:px-5 sm:py-2 md:text-sm md:px-6 md:py-2 lg:px-7 lg:py-2.5">
          {t("hero.cv")}
        </a>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
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