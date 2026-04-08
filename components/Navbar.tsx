"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Acerca de mi", href: "#about" },
  { label: "Mis proyectos", href: "#projects" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Experiencia Academica", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FF8000] w-full px-4 sm:px-6 md:px-8 py-4 md:py-6 lg:py-7">
      <div className="flex flex-row items-center justify-between">

        {/* Logo: firma + nombre */}
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <Image
            src="/mmoscuro.png"
            alt="Firma Miguel Mendoza"
            width={70}
            height={50}
            className="object-contain invert brightness-200 w-12 sm:w-14 md:w-16 lg:w-[70px]"
          />
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide">
            Miguel Mendoza
          </span>
        </div>

        {/* Links escritorio - ocultos en móvil y tablet pequeña */}
        <ul className="hidden lg:flex flex-row items-center text-white text-sm font-medium">
          {links.map((item, index, arr) => (
            <li key={item.href} className="flex flex-row items-center">
              <a
                href={item.href}
                className="px-4 hover:underline underline-offset-4 transition-all duration-200"
              >
                {item.label}
              </a>
              {index < arr.length - 1 && (
                <span className="text-white/60">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa - visible hasta lg */}
        <button
          className="lg:hidden text-white text-xl sm:text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú desplegable móvil y tablet */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col mt-3 text-white text-sm font-medium">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-2 border-b border-white/20 hover:bg-white/10 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}