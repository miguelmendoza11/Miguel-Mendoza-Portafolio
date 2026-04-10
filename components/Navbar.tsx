"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const links = [
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.testimonials", href: "#testimonials" },
    { key: "nav.experience", href: "#experience" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#FF8000] w-full px-4 sm:px-6 md:px-8 py-4 md:py-6 lg:py-7">
      <div className="flex flex-row items-center justify-between">

        {/* Logo */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <Image
            src="/mmoscuro.png"
            alt="Firma Miguel Mendoza"
            width={70}
            height={50}
            style={{ height: "auto" }}
            className="object-contain invert brightness-200 w-12 sm:w-14 md:w-16 lg:w-[70px]"
          />
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide">
            Miguel Mendoza
          </span>
        </div>

        {/* Links escritorio + botón idioma */}
        <div className="hidden lg:flex flex-row items-center gap-2">
          <ul className="flex flex-row items-center text-white text-sm font-medium">
            {links.map((item, index, arr) => (
              <li key={item.key} className="flex flex-row items-center">
                <a
                  href={item.href}
                  className="px-4 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {t(item.key)}
                </a>
                {index < arr.length - 1 && (
                  <span className="text-white/60">|</span>
                )}
              </li>
            ))}
          </ul>

          {/* Botón idioma desktop */}
          <button
            onClick={toggleLang}
            className="ml-4 w-9 h-9 rounded-full overflow-hidden border-2 border-white hover:scale-110 transition-transform duration-200"
            aria-label="Cambiar idioma"
          >
            <Image
              src={lang === "es" ? "/Spain.png" : "/Usa.png"}
              alt={lang === "es" ? "Español" : "English"}
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </button>
        </div>

        {/* Botón idioma + hamburguesa móvil */}
        <div className="lg:hidden flex flex-row items-center gap-3">
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

      {/* Menú desplegable móvil */}
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