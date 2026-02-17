"use client";

import { ReactNode } from "react";
import { ProjectDetails } from "@/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/elements/button";

export function ProjectDialog({
  project,
  children,
}: {
  project: ProjectDetails;
  children: ReactNode;
}) {
  const { Content } = project;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-trebuchet">
            {project.name}
          </DialogTitle>
        </DialogHeader>

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

        {/* MDX Content */}
        <div className="prose prose-sm md:prose-base max-w-none prose-headings:font-trebuchet prose-h2:text-xl prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-3 prose-p:text-base prose-p:leading-relaxed prose-ul:list-disc prose-ul:ml-4 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto">
          <Content />
        </div>

        {/* Footer with View Project button */}
        {project.repoUrl && (
          <DialogFooter>
            <Button href={project.repoUrl} target="_blank">
              View Project on GitHub
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
