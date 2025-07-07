import React from "react";
import ProjectsCarouselTest from "@/components/elements/projectCarouselTest";

export default async function ProjectsPage() {
  return (
    <div className="container content-center items-center mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold my-16">My Projects</h1>
      <div className="flex w-full justify-center">
        <ProjectsCarouselTest />
      </div>
    </div>
  );
}
