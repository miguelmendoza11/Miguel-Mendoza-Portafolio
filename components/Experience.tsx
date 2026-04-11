"use client";

import { useLanguage } from "@/context/LanguageContext";

const IconEducation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10" />
    <path d="M7 20h10" />
    <path d="M9 16v4" />
    <path d="M15 16v4" />
  </svg>
);

const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9" />
    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M4 11h16" />
  </svg>
);

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="bg-white px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
    >
      {/* Título */}
      <div className="flex flex-col items-center mb-4 sm:mb-6">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight text-center">
          {t("experience.title")}
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full shadow-[0px_4px_6px_rgba(255,128,0,0.5)]" />
      </div>

      {/* Subtítulo */}
      <p className="text-center text-xs xs:text-sm sm:text-base text-gray-500 mb-10 sm:mb-12 md:mb-14">
        {t("experience.subtitle")}
      </p>

      {/* Grid educación + laboral - items-stretch para igual altura */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

        {/* Educación */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3 mb-4">
            <div className="bg-[#FF8000] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
              <IconEducation />
            </div>
            <span className="font-bold text-base md:text-lg text-gray-800">
              {t("experience.education")}
            </span>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 xs:p-5 md:p-6 shadow-sm flex-1">
            {/* Carrera */}
            <div className="flex flex-row items-start gap-2 mb-3">
              <span className="text-[#FF8000] mt-1">●</span>
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-800">
                  {t("experience.degree")}
                </p>
                <p className="text-sm text-gray-500">{t("experience.university")}</p>
              </div>
            </div>

            {/* Fecha */}
            <div className="flex flex-row items-center gap-2 mb-3">
              <IconCalendar />
              <span className="text-xs text-gray-500">2023 - {t("experience.present")}</span>
            </div>

            {/* Cursos */}
            <p className="text-sm font-semibold text-gray-700 mb-2">{t("experience.courses")}</p>
            {["experience.course1", "experience.course2", "experience.course3"].map((key) => (
              <div key={key} className="flex flex-row items-center gap-2 mb-1">
                <span className="text-[#FF8000] text-xs">●</span>
                <span className="text-sm text-gray-600">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia Laboral */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3 mb-4">
            <div className="bg-[#FF8000] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
              <IconBriefcase />
            </div>
            <span className="font-bold text-base md:text-lg text-gray-800">
              {t("experience.work")}
            </span>
          </div>

          <div className="border border-gray-200 rounded-2xl p-4 xs:p-5 md:p-6 shadow-sm flex-1 flex flex-col items-center justify-center gap-3">
            <div className="bg-[#FF8000] w-14 h-14 rounded-full flex items-center justify-center">
              <IconBriefcase />
            </div>
            <p className="font-bold text-sm md:text-base text-gray-800 text-center">
              {t("experience.seeking")}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
              {t("experience.seekingDesc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}