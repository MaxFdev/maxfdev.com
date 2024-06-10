import React from "react";
import Project from "../elements/project";

// TODO add way to import projects

// TODO finish and fix styling

const projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center scroll-mt-20 gap-[var(--gap-clamp)]"
    >
      <h2>Some Of My Projects.</h2>
      <div className="flex flex-col md:flex-row gap-2">
        {/* TODO add projects */}
        <Project />
        <Project />
        <Project />
      </div>
      <button>more projects</button>
    </section>
  );
};

export default projects;
