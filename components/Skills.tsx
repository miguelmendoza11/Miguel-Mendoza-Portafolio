"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  { key: "skills.java", level: 75 },
  { key: "skills.python", level: 65 },
  { key: "skills.javascript", level: 80 },
  { key: "skills.typescript", level: 60 },
  { key: "skills.react", level: 75 },
  { key: "skills.nextjs", level: 70 },
  { key: "skills.html", level: 90 },
  { key: "skills.css", level: 85 },
  { key: "skills.tailwind", level: 80 },
  { key: "skills.java_spring", level: 60 },
  { key: "skills.mongodb", level: 55 },
  { key: "skills.git", level: 80 },
];

function SkillBar({ label, level, animate }: { label: string; level: number; animate: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">{label}</span>
        <span className="text-xs font-bold text-[#FF8000]">{level}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-2.5 rounded-full bg-[#FF8000] transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="skills"
      className="bg-white px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
    >
      {/* Título */}
      <div className="flex flex-col items-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight text-center">
          {t("skills.title")}
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full" />
        <p className="text-xs xs:text-sm sm:text-base text-gray-500 mt-4 text-center">
          {t("skills.subtitle")}
        </p>
      </div>

      {/* Grid de barras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
        {skills.map((skill) => (
          <SkillBar
            key={skill.key}
            label={t(skill.key)}
            level={skill.level}
            animate={animate}
          />
        ))}
      </div>
    </section>
  );
}