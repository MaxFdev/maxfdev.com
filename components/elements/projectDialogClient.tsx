"use client";

import { ComponentType, ReactNode, useState } from "react";
import { getProjectContent, ProjectMetadata } from "@/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/elements/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectDialogClient({
  project,
  children,
}: {
  project: ProjectMetadata;
  children: ReactNode;
}) {
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    // Only load content when dialog is opened and content hasn't been loaded yet
    if (open && !Content && !isLoading) {
      setIsLoading(true);
      getProjectContent(project.slug)
        .then((component) => {
          setContent(() => component);
        })
        .catch((error) => {
          console.error(
            `Failed to load project content for ${project.slug}:`,
            error
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        slideFrom="bottom"
        className="w-19/20 max-w-6xl rounded-2xl max-h-[85vh] overflow-y-auto"
      >
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

        {/* MDX Content - dynamically loaded */}
        {isLoading && (
          <div className="space-y-4 py-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-32 w-full mt-6" />
            <Skeleton className="h-6 w-2/3 mt-6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        )}
        {Content && (
          <div className="overflow-x-auto w-full">
            <Content />
          </div>
        )}

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
