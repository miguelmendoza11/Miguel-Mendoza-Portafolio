const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const projects = [
  {
    title: "Juego UNO digital",
    desc: "Implementación del popular juego de cartas UNO aplicando estructuras de datos avanzadas para gestionar el flujo del juego y la lógica de las cartas.",
    github: "https://github.com/seba4s/ONE-GAME",
    demo: null,
  },
  {
    title: "Sistema de inscripción universitaria",
    desc: "Sistema integral desarrollado con Spring Boot + MongoDB que permite a estudiantes inscribirse en cursos, consultar horarios y cupos, mientras los administradores gestionan la oferta académica con integración de pagos para cursos de extensión.",
    github: "https://github.com/migueltovarb/ISWDISENO202502-1Miguelmendoza11",
    demo: null,
  },
  {
    title: "Landing page tortas de chocolate",
    desc: "Landing page desarrollada para una pastelería especializada en tortas de chocolate, con diseño atractivo, secciones de productos y llamadas a la acción.",
    github: "https://github.com/miguelmendoza11/landinpage-proyecto",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-white
        px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24
        py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20
      "
    >
      {/* Título */}
      <div className="flex flex-col items-center mb-4 sm:mb-6">
        <h2 className="
          text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl
          font-bold text-black uppercase tracking-tight text-center
        ">
          Mis Proyectos
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full" />
      </div>

      {/* Subtítulo */}
      <p className="text-center text-xs xs:text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 md:mb-12">
        Algunos de los proyectos que he desarrollado durante mi formación académica
      </p>

      {/* Tarjetas de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-2xl p-4 xs:p-5 md:p-6 flex flex-col gap-4 shadow-sm"
          >
            {/* Título con fondo naranja */}
            <div className="flex justify-center">
              <span className="bg-[#FF8000] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                {project.title}
              </span>
            </div>

            {/* Descripción */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
              {project.desc}
            </p>

            {/* Botón GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 bg-[#FF8000] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-orange-600 transition-colors duration-200 w-fit"
            >
              <IconGithub />
              Código
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}