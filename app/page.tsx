import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScrollReveal direction="up">
        <About />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Technologies />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}