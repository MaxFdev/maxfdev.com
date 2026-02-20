"use client";

import { ComponentType, ReactNode, useState } from "react";
import { getExperienceContent, ExperienceMetadata } from "@/data";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/elements/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceDialogClient({
  experience,
  children,
}: {
  experience: ExperienceMetadata;
  children: ReactNode;
}) {
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && !Content && !isLoading) {
      setIsLoading(true);
      getExperienceContent(experience.slug)
        .then((component) => {
          setContent(() => component ?? null);
        })
        .catch((error) => {
          console.error(
            `Failed to load experience content for ${experience.slug}:`,
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
        className="w-19/20 max-w-4xl rounded-2xl! max-h-[85vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-trebuchet">
            {experience.role} at {experience.company}
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-600">{experience.dates}</p>

        {isLoading && (
          <div className="space-y-4 py-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-32 w-full mt-6" />
          </div>
        )}
        {Content && <Content />}

        <DialogFooter>
          {experience.companyUrl && (
            <div className="pt-4">
              <Button href={experience.companyUrl} target="_blank">
                Visit {experience.company}
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
