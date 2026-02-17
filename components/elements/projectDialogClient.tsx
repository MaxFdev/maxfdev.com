"use client";

import { ReactNode } from "react";
import { SerializableProjectDetails } from "./projectCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/elements/button";

export function ProjectDialogClient({
  project,
  dialogContent,
  children,
}: {
  project: SerializableProjectDetails;
  dialogContent: ReactNode;
  children: ReactNode;
}) {
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

        {/* MDX Content passed from server component */}
        {dialogContent}

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
