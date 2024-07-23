import React from "react";
import ProjectCarousel from "../elements/projectCarousel";
import BigButton from "../elements/bigButton";

// TODO finish and fix styling
// TODO make projects come from github

const projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center scroll-mt-20 gap-[var(--gap-clamp)]"
    >
      <h2 className="text-center">Some Of My Projects.</h2>
      <ProjectCarousel />
      <BigButton
        href="https://github.com/MaxFdev"
        target="_blank"
        className="hover:bg-purple-400"
      >
        More Projects - GitHub
      </BigButton>
    </section>
  );
};

export default projects;
