import React from "react";
import Project from "../elements/project";
import { projectItems } from "@/data";
import BigButton from "../elements/bigButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

// TODO finish and fix styling

const projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center scroll-mt-20 gap-[var(--gap-clamp)]"
    >
      <h2>Some Of My Projects.</h2>
      {/* TODO make mobile friendly */}
      <Carousel
        className="w-5/6"
        opts={{ watchDrag: false }}
      >
        <CarouselContent className="p-3">
          {projectItems.map((project, key) => (
            <CarouselItem
              className="basis-1/3"
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
        {projectItems.length > 3 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {/* TODO style button */}
      <BigButton href={"https://github.com/MaxFdev"} className="hover:bg-purple-400">
        More Projects - GitHub
      </BigButton>
    </section>
  );
};

export default projects;
