"use client";

import { ComponentType, ReactNode, useState, memo, useCallback } from "react";
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

export const ExperienceDialogClient = memo(function ExperienceDialogClient({
  experience,
  children,
}: {
  experience: ExperienceMetadata;
  children: ReactNode;
}) {
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = useCallback((open: boolean) => {
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
  }, [Content, isLoading, experience.slug]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        slideFrom="bottom"
        className="w-19/20 max-w-6xl rounded-2xl! max-h-[85vh] overflow-y-auto"
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
        {Content && (
          <div className="overflow-x-auto w-full">
            <Content />
          </div>
        )}

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
});
