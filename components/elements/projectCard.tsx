"use client";

import Image from "next/image";
import Button from "@/components/elements/button";
import { ProjectDialogClient } from "@/components/elements/projectDialogClient";

// Serializable version of project details (without the Content component)
export interface SerializableProjectDetails {
  slug: string;
  name: string;
  image: string;
  overview: string;
  topics: string[];
  repoUrl: string;
}

export function ProjectCard({
  project,
  dialogContent,
}: {
  project: SerializableProjectDetails;
  dialogContent: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-blue-300 rounded-lg drop-shadow-md p-4">
      {/* Image Section */}
      <div className="w-full md:w-64 shrink-0">
        <div className="w-full aspect-video overflow-hidden rounded-lg drop-shadow-md">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={960}
              height={540}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="h-full w-full rounded-lg drop-shadow-md bg-gray-200" />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-2xl font-bold font-trebuchet">{project.name}</h3>

        {/* Topics/Tags */}
        {project.topics.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {project.topics.map((topic, index) => (
              <span
                key={index}
                className="px-2 py-1 h-fit rounded-3xl border-2 border-black text-sm font-bold whitespace-nowrap text-center uppercase"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Overview */}
        <p className="text-md flex-1">{project.overview}</p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap items-center">
          {project.repoUrl && (
            <Button href={project.repoUrl} target="_blank">
              View Project
            </Button>
          )}
          <ProjectDialogClient project={project} dialogContent={dialogContent}>
            <button className="transition-all! cursor-pointer [transition-duration:_300ms_!important;] w-fit border-2 [line-height:_16px;] border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet">
              Learn More
            </button>
          </ProjectDialogClient>
        </div>
      </div>
    </div>
  );
}
