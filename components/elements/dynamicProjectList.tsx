import Project from "@/components/elements/project";
import { getProjects } from "@/data";

const DynamicProjectList = () => {
  const projects = getProjects();

  return (
    <div className="w-full max-w-(--width-clamp) px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index}>
          <Project
            img={project.image}
            title={project.name}
            content={project.overview}
            tags={project.topics}
            link={project.repoUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicProjectList;
