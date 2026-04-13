"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    "nav.about": "Acerca de mi",
    "nav.projects": "Mis proyectos",
    "nav.testimonials": "Testimonios",
    "nav.experience": "Experiencia Academica",
    "nav.contact": "Contacto",
    "hero.role": "Estudiante de Ingeniería de Software",
    "hero.fullstack": "Desarrollador Full Stack",
    "hero.passion": "Apasionado por la tecnología",
    "hero.contact": "Contáctame",
    "hero.cv": "Descargar CV",
    "about.title": "Acerca de mi",
    "about.card1.title": "Personalidad",
    "about.card1.desc": "Persona alegre, amistosa y colaboradora, con gran disposición para el trabajo en equipo",
    "about.card2.title": "Pasión",
    "about.card2.desc": "Aprendizaje constante y mejora continua de habilidades en desarrollo de software",
    "about.card3.title": "Objetivo",
    "about.card3.desc": "Buscar oportunidades de prácticas para crecer profesionalmente como desarrollador",
    "about.p1": "Me llamo Miguel Ángel Mendoza Jaramillo. Soy una persona alegre, amistosa y colaboradora, con una gran disposición para trabajar en equipo y aportar ideas en los proyectos en los que participo. Me gusta aprender constantemente y mejorar mis habilidades, especialmente en el área del desarrollo de software.",
    "about.p2": "Actualmente estudio Ingeniería de Software, donde he adquirido experiencia trabajando con tecnologías como Java, Python, JavaScript, Next.js y Git. He participado en el desarrollo de proyectos académicos enfocados en aplicaciones web, estructuras de datos y soluciones interactivas, lo que me ha permitido fortalecer mi lógica de programación y mi capacidad de resolución de problemas.",
    "about.p3": "Además, tengo habilidades para guiar proyectos o trabajos, organizando tareas y apoyando a mi equipo para alcanzar los objetivos propuestos. Me caracterizo por trabajar de forma organizada, cumpliendo con los tiempos establecidos y adaptándome a diferentes entornos de trabajo.",
    "about.p4": "Mi interés principal es desarrollarme en el área de frontend con enfoque en UX/UI, creando interfaces atractivas y funcionales que mejoren la experiencia del usuario. También me interesa el desarrollo de videojuegos, ya que es un campo que me motiva y en el que estoy abierto a seguir aprendiendo y creciendo.",
    "about.p5": "Actualmente busco oportunidades de prácticas que me permitan fortalecer mis conocimientos y adquirir experiencia en entornos reales, con el fin de crecer profesionalmente como desarrollador.",
    "about.p6": "Me caracterizo por mi compromiso, responsabilidad y motivación por seguir aprendiendo y evolucionando tanto a nivel técnico como personal.",
    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Algunos de los proyectos que he desarrollado durante mi formación académica",
    "projects.code": "Código",
    "projects.p1.title": "Juego UNO digital",
    "projects.p1.desc": "Implementación del popular juego de cartas UNO aplicando estructuras de datos avanzadas para gestionar el flujo del juego y la lógica de las cartas.",
    "projects.p2.title": "Sistema de inscripción universitaria",
    "projects.p2.desc": "Sistema integral desarrollado con Spring Boot + MongoDB que permite a estudiantes inscribirse en cursos, consultar horarios y cupos, mientras los administradores gestionan la oferta académica con integración de pagos para cursos de extensión.",
    "projects.p3.title": "Landing page tortas de chocolate",
    "projects.p3.desc": "Landing page desarrollada para una pastelería especializada en tortas de chocolate, con diseño atractivo, secciones de productos y llamadas a la acción.",
    "testimonials.title": "Testimonios",
    "testimonials.q1": "Miguel es un estudiante comprometido, siempre entrega trabajos de calidad y demuestra gran interés por aprender nuevas tecnologías.",
    "testimonials.q2": "Trabajar con Miguel fue una excelente experiencia, es organizado y siempre aporta buenas ideas en equipo.",
    "testimonials.q3": "Destaca por su responsabilidad y capacidad para resolver problemas de forma eficiente.",
    "testimonials.r1": "Estudiante Universitario",
    "testimonials.r2": "Estudiante de Ingeniería",
    "testimonials.r3": "Docente Académico",
    "experience.title": "Experiencia Academica",
    "experience.subtitle": "Mi formación y desarrollo personal",
    "experience.education": "Educación",
    "experience.work": "Experiencia Laboral",
    "experience.degree": "Ingeniería de Software",
    "experience.university": "Universidad Cooperativa de Colombia",
    "experience.present": "Actualidad",
    "experience.courses": "Cursos Relevantes",
    "experience.course1": "Estructura de Datos",
    "experience.course2": "Patrones de Software",
    "experience.course3": "Diseño de Software",
    "experience.seeking": "En busca de oportunidades",
    "experience.seekingDesc": "Actualmente buscando prácticas profesionales para aplicar y fortalecer mis conocimientos en desarrollo de software",
    "tech.title": "Tecnologías que manejo",
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!",
    "contact.info": "Información de contacto",
    "contact.email": "Email",
    "contact.location": "Ubicación",
    "contact.why": "¿Por qué contactarme?",
    "contact.reason1": "Disponible para prácticas profesionales",
    "contact.reason2": "Colaboración en proyectos",
    "contact.reason3": "Oportunidades de aprendizaje",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "tu@email.com",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Cuéntame sobre tu proyecto o propuesta...",
    "contact.form.send": "ENVIAR MENSAJE",
  },
  en: {
    "nav.about": "About me",
    "nav.projects": "My projects",
    "nav.testimonials": "Testimonials",
    "nav.experience": "Academic Experience",
    "nav.contact": "Contact",
    "hero.role": "Software Engineering Student",
    "hero.fullstack": "Full Stack Developer",
    "hero.passion": "Passionate about technology",
    "hero.contact": "Contact me",
    "hero.cv": "Download CV",
    "about.title": "About me",
    "about.card1.title": "Personality",
    "about.card1.desc": "Cheerful, friendly and collaborative person, with a great willingness to work in a team",
    "about.card2.title": "Passion",
    "about.card2.desc": "Constant learning and continuous improvement of software development skills",
    "about.card3.title": "Goal",
    "about.card3.desc": "Seeking internship opportunities to grow professionally as a developer",
    "about.p1": "My name is Miguel Ángel Mendoza Jaramillo. I am a cheerful, friendly and collaborative person, with a great willingness to work in a team and contribute ideas to the projects I participate in. I enjoy learning constantly and improving my skills, especially in the area of software development.",
    "about.p2": "I am currently studying Software Engineering, where I have gained experience working with technologies such as Java, Python, JavaScript, Next.js and Git. I have participated in the development of academic projects focused on web applications, data structures and interactive solutions.",
    "about.p3": "I also have skills in guiding projects or tasks, organizing work and supporting my team to achieve the proposed goals. I am characterized by working in an organized manner, meeting established deadlines and adapting to different work environments.",
    "about.p4": "My main interest is to develop in the frontend area with a focus on UX/UI, creating attractive and functional interfaces that improve the user experience. I am also interested in game development, as it is a field that motivates me.",
    "about.p5": "I am currently looking for internship opportunities that will allow me to strengthen my knowledge and gain experience in real environments, in order to grow professionally as a developer.",
    "about.p6": "I am characterized by my commitment, responsibility and motivation to keep learning and evolving both technically and personally.",
    "projects.title": "My Projects",
    "projects.subtitle": "Some of the projects I have developed during my academic training",
    "projects.code": "Code",
    "projects.p1.title": "Digital UNO game",
    "projects.p1.desc": "Implementation of the popular UNO card game applying advanced data structures to manage the game flow and card logic.",
    "projects.p2.title": "University enrollment system",
    "projects.p2.desc": "Comprehensive system developed with Spring Boot + MongoDB that allows students to enroll in courses, check schedules and availability, while administrators manage the academic offering with payment integration.",
    "projects.p3.title": "Chocolate cake landing page",
    "projects.p3.desc": "Landing page developed for a bakery specialized in chocolate cakes, with attractive design, product sections and calls to action.",
    "testimonials.title": "Testimonials",
    "testimonials.q1": "Miguel is a committed student, always delivers quality work and shows great interest in learning new technologies.",
    "testimonials.q2": "Working with Miguel was an excellent experience, he is organized and always brings good ideas to the team.",
    "testimonials.q3": "He stands out for his responsibility and ability to solve problems efficiently.",
    "testimonials.r1": "University Student",
    "testimonials.r2": "Engineering Student",
    "testimonials.r3": "Academic Professor",
    "experience.title": "Academic Experience",
    "experience.subtitle": "My training and personal development",
    "experience.education": "Education",
    "experience.work": "Work Experience",
    "experience.degree": "Software Engineering",
    "experience.university": "Universidad Cooperativa de Colombia",
    "experience.present": "Present",
    "experience.courses": "Relevant Courses",
    "experience.course1": "Data Structures",
    "experience.course2": "Software Patterns",
    "experience.course3": "Software Design",
    "experience.seeking": "Seeking opportunities",
    "experience.seekingDesc": "Currently looking for professional internships to apply and strengthen my knowledge in software development",
    "tech.title": "Technologies I know",
    "contact.title": "Contact",
    "contact.subtitle": "Do you have a project in mind or want to collaborate? Let's talk!",
    "contact.info": "Contact information",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.why": "Why contact me?",
    "contact.reason1": "Available for professional internships",
    "contact.reason2": "Project collaboration",
    "contact.reason3": "Learning opportunities",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project or proposal...",
    "contact.form.send": "SEND MESSAGE",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));
  const t = (key: string): string =>
    translations[lang][key as keyof typeof translations["es"]] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}