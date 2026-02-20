import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
