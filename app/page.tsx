import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <Projects />
    </main>
  );
}
