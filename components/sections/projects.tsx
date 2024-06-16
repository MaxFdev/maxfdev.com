import React from "react";
import Project from "../elements/project";
import Button from "../elements/button";

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
        <Project
          img={""}
          title={"Test"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quasi nostrum beatae reiciendis, rem incidunt, iure quisquam provident error sunt, assumenda culpa impedit iste sit voluptatibus molestiae corrupti fugit. Reprehenderit?"
          }
          tags={["1", "2", "3"]}
          link={"/"}
        />
      </div>
      <button>more projects</button>
    </section>
  );
};

export default projects;
