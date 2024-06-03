import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main
      id="main"
      className="mt-20 scroll-mt-24"
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
