import React from "react";
import Project from "../elements/project";
import { projectItems } from "@/data";
import BigButton from "../elements/bigButton";

// TODO finish and fix styling

const projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center scroll-mt-20 gap-[var(--gap-clamp)]"
    >
      <h2>Some Of My Projects.</h2>
      <div className="flex flex-col md:flex-row gap-2">
        {projectItems.map((project, key) => (
          <Project
            img={project.img}
            title={project.title}
            content={project.content}
            tags={project.tags}
            link={project.link}
            key={key}
          />
        ))}
      </div>
      <BigButton href={"https://github.com/MaxFdev"}>More Projects</BigButton>
    </section>
  );
};

export default projects;
