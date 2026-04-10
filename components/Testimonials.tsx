"use client";

import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  { quoteKey: "testimonials.q1", name: "Gabriel Alejandro Guerrero", roleKey: "testimonials.r1" },
  { quoteKey: "testimonials.q2", name: "Sebastian Lopez Benavides", roleKey: "testimonials.r2" },
  { quoteKey: "testimonials.q3", name: "Jesus Pantoja", roleKey: "testimonials.r3" },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-[#D9D9D9]/28 px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <div className="flex flex-col items-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#FF8000] uppercase tracking-tight text-center">
          {t("testimonials.title")}
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {testimonials.map((t2) => (
          <div key={t2.name} className="bg-white rounded-2xl p-4 xs:p-5 md:p-6 flex flex-col justify-between shadow-sm">
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              "{t(t2.quoteKey)}"
            </p>
            <div>
              <div className="w-full h-px bg-gray-200 mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 text-center">{t2.name}</p>
              <p className="text-xs text-gray-500 text-center">{t(t2.roleKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}