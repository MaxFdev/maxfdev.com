import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main
      id="main"
      className="h-[200vh] mt-20 scroll-mt-20"
    >
      <Hero />
      <About />
      <h1
        id="projects"
        className="font-noto"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        autem. Voluptates facere autem possimus ipsum? Repellat consectetur iste
        commodi amet, ducimus, impedit hic maxime ex ad itaque sed, voluptatem
        facilis.
      </h1>
      <div
        id="contact"
        className="bg-black"
      >
        <p className="text-white mt-56">hello</p>
      </div>
    </main>
  );
}
