import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

// TODO switch icons to lucide
// TODO remove skills section

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
