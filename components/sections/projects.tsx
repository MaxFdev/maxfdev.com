import BigButton from "@/components/elements/bigButton";
import { getProjects } from "@/data";
import { ProjectCard } from "@/components/elements/projectCard";
import { ProjectContent } from "@/components/elements/projectContent";

const projects = () => {
  const projectList = getProjects();

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
        View GitHub Profile
      </BigButton>

      {/* Single column project list */}
      <div className="flex flex-col gap-6 w-full max-w-(--width-clamp)">
        {projectList.map((project) => {
          // Extract serializable data for client component
          const { Content, ...serializableProject } = project;

          return (
            <ProjectCard
              key={project.slug}
              project={serializableProject}
              dialogContent={<ProjectContent project={project} />}
            />
          );
        })}
      </div>
    </section>
  );
};

export default projects;
