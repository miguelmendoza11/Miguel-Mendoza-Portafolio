import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#FF8000] w-full px-8 py-7 flex flex-row items-center justify-between">
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

      {/* Links de navegación */}
      <ul className="hidden md:flex flex-row items-center text-white text-sm font-medium">
        {[
          { label: "Acerca de mi", href: "#about" },
          { label: "Mis proyectos", href: "#projects" },
          { label: "Testimonios", href: "#testimonials" },
          { label: "Experiencia Academica", href: "#experience" },
          { label: "Contacto", href: "#contact" },
        ].map((item, index, arr) => (
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

      {/* Menú hamburguesa mobile */}
      <button className="md:hidden text-white text-2xl">☰</button>
    </nav>
  );
}