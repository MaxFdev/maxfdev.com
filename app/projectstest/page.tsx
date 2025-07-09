import React from "react";
import ProjectsCarouselTest from "@/components/elements/projectCarouselTest";

export default async function ProjectsPage() {
  return (
    <main className="flex flex-col container content-center items-center mx-auto min-h-screen">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="flex w-full justify-center">
        <ProjectsCarouselTest />
      </div>
    </main>
  );
}
