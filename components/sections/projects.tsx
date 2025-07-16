import React from "react";
import ProjectCarousel from "@/components/elements/projectCarousel";
import BigButton from "@/components/elements/bigButton";
import Link from "next/link";

// TODO finish and fix styling
// TODO make projects come from github

const projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-[var(--gap-clamp)]"
    >
      <h2 className="text-center">Some Of My Projects.</h2>
      {/* HACK remove this when the dynamic version is in place */}
      <div className="-my-8 text-muted-foreground">
        Check out the beta for the dynamic version{" "}
        <Link
          className="text-blue-500"
          href="/projectstest"
        >
          HERE
        </Link>
      </div>
      <ProjectCarousel />
      <BigButton
        href="https://github.com/MaxFdev"
        target="_blank"
        className="hover:bg-purple-400"
      >
        GitHub Profile
      </BigButton>
    </section>
  );
};

export default projects;
