"use client";

import React, { useState, useEffect, useRef } from "react";
import Project from "@/components/elements/project";
import { fetchProjectDetails } from "@/utils/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "../ui/skeleton";

const ProjectCarousel = () => {
  // State for projects data
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for carousel remounting on resize
  const [componentKey, setComponentKey] = useState(0);
  const prevWidthRef = useRef(0);

  // Fetch projects from GitHub
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        if (process.env.NEXT_PUBLIC_GITHUB_ACCOUNT) {
          const projectDetails = await fetchProjectDetails(
            process.env.NEXT_PUBLIC_GITHUB_ACCOUNT
          );
          setProjects(projectDetails);
        } else {
          throw new Error("No account specified.");
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Unable to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Handle window resize for carousel
  useEffect(() => {
    prevWidthRef.current = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (prevWidthRef.current !== currentWidth) {
        setComponentKey((prevKey) => prevKey + 1);
        prevWidthRef.current = currentWidth;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return (
      <Carousel className="w-[75vw]">
        <CarouselContent className="py-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <div className="p-1">
                <div className="flex flex-col h-full p-6 space-y-4 bg-muted rounded-lg">
                  <Skeleton className="h-40 w-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-14 rounded-full" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  if (error) {
    return <div className="w-[75vw] text-red-500 py-8">{error}</div>;
  }

  if (projects.length === 0) {
    return (
      <div className="w-[75vw] py-8">No projects found with DESC.md files.</div>
    );
  }

  return (
    <Carousel
      className="w-[75vw]"
      opts={{ watchDrag: false, align: "start" }}
      key={componentKey}
    >
      <CarouselContent className="py-4">
        {projects.map((project, index) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={index}
          >
            <Project
              img={project.image}
              color={project.backgroundColor}
              title={project.name}
              content={project.description}
              tags={project.topics}
              link={project.repoUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
