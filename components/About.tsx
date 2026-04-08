const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 7a5 5 0 1 0 5 5" />
    <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
    <path d="M15 6v3h3l3 -3h-3v-3l-3 3" />
    <path d="M15 9l-3 3" />
  </svg>
);

export default function About() {
  const cards = [
    {
      icon: <IconUser />,
      title: "Personalidad",
      desc: "Persona alegre, amistosa y colaboradora, con gran disposición para el trabajo en equipo",
    },
    {
      icon: <IconHeart />,
      title: "Pasión",
      desc: "Aprendizaje constante y mejora continua de habilidades en desarrollo de software",
    },
    {
      icon: <IconTarget />,
      title: "Objetivo",
      desc: "Buscar oportunidades de prácticas para crecer profesionalmente como desarrollador",
    },
  ];

  return (
    <section id="about" className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20">

      {/* Título */}
      <div className="flex flex-col items-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
          Acerca de mi
        </h2>
        <div className="w-16 h-1 bg-[#FF8000] mt-3 rounded-full" />
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm"
          >
            {/* Icono + título */}
            <div className="flex flex-row items-center gap-3">
              <div className="bg-[#FF8000] w-9 h-9 rounded-lg flex items-center justify-center">
                {card.icon}
              </div>
              <span className="font-semibold text-sm md:text-base text-gray-800">
                {card.title}
              </span>
            </div>
            {/* Descripción */}
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      
       {/* Bloque de texto personal */}
      <div className="border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Me llamo Miguel Ángel Mendoza Jaramillo. Soy una persona alegre, amistosa y colaboradora,
          con una gran disposición para trabajar en equipo y aportar ideas en los proyectos en los
          que participo. Me gusta aprender constantemente y mejorar mis habilidades, especialmente
          en el área del desarrollo de software.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Actualmente estudio Ingeniería de Software, donde he adquirido experiencia trabajando con
          tecnologías como Java, Python, JavaScript, Next.js y Git. He participado en el desarrollo
          de proyectos académicos enfocados en aplicaciones web, estructuras de datos y soluciones
          interactivas, lo que me ha permitido fortalecer mi lógica de programación y mi capacidad
          de resolución de problemas.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Además, tengo habilidades para guiar proyectos o trabajos, organizando tareas y apoyando
          a mi equipo para alcanzar los objetivos propuestos. Me caracterizo por trabajar de forma
          organizada, cumpliendo con los tiempos establecidos y adaptándome a diferentes entornos
          de trabajo.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Mi interés principal es desarrollarme en el área de frontend con enfoque en UX/UI, creando
          interfaces atractivas y funcionales que mejoren la experiencia del usuario. También me
          interesa el desarrollo de videojuegos, ya que es un campo que me motiva y en el que estoy
          abierto a seguir aprendiendo y creciendo.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Actualmente busco oportunidades de prácticas que me permitan fortalecer mis conocimientos
          y adquirir experiencia en entornos reales, con el fin de crecer profesionalmente como
          desarrollador.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
          Me caracterizo por mi compromiso, responsabilidad y motivación por seguir aprendiendo y
          evolucionando tanto a nivel técnico como personal.
        </p>
      </div>
 

    </section>
  );
}