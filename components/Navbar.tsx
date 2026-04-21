"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
  </svg>
);

const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.testimonials", href: "#testimonials" },
    { key: "nav.experience", href: "#experience" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#FF8000] w-full px-4 sm:px-6 md:px-8 py-4 md:py-6 lg:py-7 sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between">

        {/* Logo */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <Image
            src="/mmoscuro.png"
            alt="Firma Miguel Mendoza"
            width={120}
            height={80}
            style={{ height: "auto" }}
            className="object-contain invert brightness-200 w-16 sm:w-20 md:w-24 lg:w-[120px]"
          />
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide">
            Miguel Mendoza
          </span>
        </div>

        {/* Links escritorio + botones */}
        <div className="hidden lg:flex flex-row items-center gap-2">
          <ul className="flex flex-row items-center text-white text-sm font-medium">
            {links.map((item, index, arr) => (
              <li key={item.key} className="flex flex-row items-center">
                <a href={item.href} className="px-4 hover:underline underline-offset-4 transition-all duration-200">
                  {t(item.key)}
                </a>
                {index < arr.length - 1 && <span className="text-white/60">|</span>}
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="ml-2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <IconMoon /> : <IconSun />}
          </button>

          <button
            onClick={toggleLang}
            className="ml-2 w-9 h-9 rounded-full overflow-hidden border-2 border-white hover:scale-110 transition-transform duration-200"
            aria-label="Cambiar idioma"
          >
            <Image
              src={lang === "es" ? "/Spain.png" : "/Usa.png"}
              alt={lang === "es" ? "Español" : "English"}
              width={36}
              height={36}
              style={{ width: "auto" }}
              className="object-cover w-full h-full"
            />
          </button>
        </div>


        <div className="lg:hidden flex flex-row items-center gap-2 sm:gap-3">

          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <IconMoon /> : <IconSun />}
          </button>


          <button
            onClick={toggleLang}
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-white hover:scale-110 transition-transform duration-200"
            aria-label="Cambiar idioma"
          >
            <Image
              src={lang === "es" ? "/Spain.png" : "/Usa.png"}
              alt={lang === "es" ? "Español" : "English"}
              width={32}
              height={32}
              style={{ width: "auto" }}
              className="object-cover w-full h-full"
            />
          </button>

          <button
            className="text-white text-xl sm:text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>


      {menuOpen && (
        <ul className="lg:hidden flex flex-col mt-3 text-white text-sm font-medium">
          {links.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-2 border-b border-white/20 hover:bg-white/10 transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}