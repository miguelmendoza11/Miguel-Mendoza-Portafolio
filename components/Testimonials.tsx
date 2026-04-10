const testimonials = [
  {
    quote: "Miguel es un estudiante comprometido, siempre entrega trabajos de calidad y demuestra gran interés por aprender nuevas tecnologías.",
    name: "Gabriel Alejandro Guerrero",
    role: "Estudiante Universitario",
  },
  {
    quote: "Trabajar con Miguel fue una excelente experiencia, es organizado y siempre aporta buenas ideas en equipo.",
    name: "Sebastian Lopez Benavides",
    role: "Estudiante de Ingeniería",
  },
  {
    quote: "Destaca por su responsabilidad y capacidad para resolver problemas de forma eficiente.",
    name: "Jesus Pantoja",
    role: "Docente Académico",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        bg-[#D9D9D9]/20
        px-4 xs:px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24
        py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20
      "
    >
      {/* Título */}
      <div className="flex flex-col items-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14">
        <h2 className="
          text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl
          font-bold text-[#FF8000] uppercase tracking-tight text-center
        ">
          Testimonios
        </h2>
        <div className="w-16 h-2 bg-[#FF8000] mt-3 rounded-full" />
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl p-4 xs:p-5 md:p-6 flex flex-col justify-between shadow-sm"
          >
            {/* Cita */}
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              "{t.quote}"
            </p>

            {/* Separador + nombre */}
            <div>
              <div className="w-full h-px bg-gray-200 mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 text-center">{t.name}</p>
              <p className="text-xs text-gray-500 text-center">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}