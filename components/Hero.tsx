import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-16 bg-white">

      {/* Foto de perfil circular */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
        <Image
          src="/fotoPerfil.jpeg"
          alt="Foto de perfil Miguel Mendoza"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nombre grande */}
      <h1 className="text-6xl md:text-8xl font-bold text-black uppercase leading-none tracking-tight mb-6">
        Miguel Angel
        <br />
        Mendoza Jaramillo
      </h1>

      {/* Subtítulo */}
      <p className="text-base md:text-lg text-gray-600 mb-4">
        Estudiante de Ingeniería de Software
      </p>

      {/* Rol + Pasión */}
      <div className="flex flex-row items-center gap-6 text-sm md:text-base text-gray-500 mb-12">
        <span>Desarrollador Full Stack</span>
        <span className="text-[#FF8000]">|</span>
        <span>Apasionado por la tecnología</span>
      </div>

      {/* Iconos sociales + botones alineados */}
      <div className="flex flex-row items-end justify-center gap-16">

        {/* GitHub + Contáctame */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://github.com/miguelmendoza11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={52}
              height={52}
              className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)]"
            />
          </a>
          <a
            href="#contact"
            className="bg-[#FF8000] text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors duration-200"
          >
            Contáctame
          </a>
        </div>

        {/* LinkedIn - solo icono centrado */}
        <div className="flex flex-col items-center pb-12">
          <a
            href="https://linkedin.com/in/miguel-mendoza-070829311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/linkedi.png"
              alt="LinkedIn"
              width={52}
              height={52}
              className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)]"
            />
          </a>
        </div>

        {/* Gmail + Descargar CV */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:miguelangel11230@gmail.com"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/gmail.png"
              alt="Gmail"
              width={52}
              height={52}
              className="object-contain drop-shadow-[2px_2px_3px_rgba(255,128,0,0.6)]"
            />
          </a>
          <a
            href="/cv.pdf"
            download
            className="bg-[#FF8000] text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors duration-200"
          >
            Descargar CV
          </a>
        </div>

      </div>
    </section>
  );
}