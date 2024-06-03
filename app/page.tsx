import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main
      id="main"
      className="h-[200vh] mt-20 scroll-mt-20"
    >
      <Hero />
      <About />
      <Projects />
      <div
        id="contact"
        className="bg-black"
      >
        <p className="text-white mt-56">hello</p>
      </div>
    </main>
  );
}
