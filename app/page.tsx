import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main
      id="main"
      className="mt-20 scroll-mt-[100vh]"
    >
      <Hero />
      {/* <About /> */}
      <Projects />
      <Skills />
    </main>
  );
}
