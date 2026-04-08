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
    <nav className="bg-[#FF8000] w-full px-6 md:px-8 py-5 md:py-7">
      <div className="flex flex-row items-center justify-between">
        {/* Logo: firma + nombre */}
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/firma.png"
            alt="Firma Miguel Mendoza"
            width={50}
            height={35}
            className="object-contain invert brightness-200"
          />
          <span className="text-white font-semibold text-base tracking-wide">
            Miguel Mendoza
          </span>
        </div>
 
        {/* Links escritorio */}
        <ul className="hidden md:flex flex-row items-center text-white text-sm font-medium">
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
 
        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
 
      {/* Menú desplegable móvil */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col mt-4 gap-1 text-white text-sm font-medium">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-2 border-b border-white/20 hover:bg-white/10 transition-colors duration-200"
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