import BigButton from "@/components/elements/bigButton";
import { getProjectsMetadata } from "@/data";
import { ProjectCard } from "@/components/elements/projectCard";
import { ArrowUpRight } from "lucide-react";

const projects = () => {
  const projectList = getProjectsMetadata();

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-(--gap-clamp)"
    >
      <h2 className="text-center">Some Of My Projects.</h2>
      <BigButton
        href="https://github.com/MaxFdev"
        target="_blank"
        className="hover:bg-purple-400"
      >
        View GitHub Profile <ArrowUpRight size={30} />
      </BigButton>

      {/* Single column project list */}
      <div className="flex flex-col gap-6 w-11/12 max-w-sm md:max-w-(--width-clamp)">
        {projectList.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default projects;
