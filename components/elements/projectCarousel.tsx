"use client";

import React, { useState, useEffect, useRef } from "react";
import { projectItems } from "@/data";
import Project from "./project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

// TODO on refresh make carousel remember which slide was in view?

const ProjectCarousel = () => {
  // State to store a unique key for forcing remount
  const [componentKey, setComponentKey] = useState(0);
  const prevWidthRef = useRef(0);

  useEffect(() => {
    // Set prevWidthRef
    prevWidthRef.current = window.innerWidth;

    // Function to handle window resize
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (prevWidthRef.current !== currentWidth) {
        setComponentKey((prevKey) => prevKey + 1);
        prevWidthRef.current = currentWidth;
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // TODO make more mobile friendly (maybe make dragging work on mobile)

  // TODO finish styling

  return (
    <Carousel
      className="w-[75vw]"
      opts={{ watchDrag: false, align: "start" }}
      key={componentKey}
    >
      <CarouselContent className="py-4">
        {projectItems.map((project, key) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={key}
          >
            <Project
              img={project.img}
              color={project.color}
              title={project.title}
              content={project.content}
              tags={project.tags}
              link={project.link}
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
