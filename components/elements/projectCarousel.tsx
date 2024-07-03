"use client";

import React, { useState, useEffect } from "react";
import { projectItems } from "@/data";
import Project from "./project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const projectCarousel = () => {
  // State to store a unique key for forcing remount
  const [componentKey, setComponentKey] = useState(0);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setComponentKey((prevKey) => prevKey + 1);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // TODO make more mobile friendly

  // TODO finish styling

  return (
    <Carousel
      className="w-[var(--carousel-clamp)]"
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

export default projectCarousel;
