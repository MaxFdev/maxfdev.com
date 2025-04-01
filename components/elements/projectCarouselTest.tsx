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

// GitHub username to fetch projects from
const GITHUB_USERNAME = "maxfdev"; // Update this to your actual GitHub username

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
        const projectDetails = await fetchProjectDetails(GITHUB_USERNAME);
        setProjects(projectDetails);
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
      <div className="w-[75vw] flex justify-center py-8">
        Loading projects...
      </div>
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
