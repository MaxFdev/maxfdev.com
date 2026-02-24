import Image from "next/image";
import Button from "@/components/elements/button";
import { ProjectDialogClient } from "@/components/elements/projectDialogClient";
import { ProjectMetadata } from "@/data";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: ProjectMetadata }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-blue-300 rounded-lg drop-shadow-md p-4">
      {/* Image Section */}
      <div className="flex w-full h-full md:w-72 shrink-0 self-center items-center justify-center">
        <div className="w-full aspect-video overflow-hidden rounded-lg drop-shadow-md flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={960}
              height={540}
              className="w-full h-full object-contain object-center"
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
          <ProjectDialogClient project={project}>
            <button className="transition-all! cursor-pointer duration-300! w-fit border-2 text-md border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet">
              Learn More
            </button>
          </ProjectDialogClient>
          {project.repoUrl && (
            <Button
              className="flex gap-1 items-center"
              href={project.repoUrl}
              target="_blank"
            >
              View Project
              <ArrowUpRight size={20} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
