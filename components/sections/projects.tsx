import React from "react";
import BigButton from "@/components/elements/bigButton";
import DynamicProjectCarousel from "@/components/elements/dynamicProjectCarousel";
import { fetchProjectDetails } from "@/utils/projects";

const projects = async () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT;
  const projects = username ? await fetchProjectDetails(username) : [];

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-[var(--gap-clamp)]"
    >
      <h2 className="text-center">Some Of My Projects.</h2>
      <DynamicProjectCarousel projects={projects} />
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
