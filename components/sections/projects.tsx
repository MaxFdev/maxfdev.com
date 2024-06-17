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
      {/* TODO switch to a carousel */}
      <Carousel className="w-3/4">
        <CarouselContent className="hover:cursor-grab active:cursor-grabbing">
          {projectItems.map((project, key) => (
            <CarouselItem className="basis-1/3">
              <Project
                img={project.img}
                title={project.title}
                content={project.content}
                tags={project.tags}
                link={project.link}
                key={key}
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
      <BigButton href={"https://github.com/MaxFdev"}>More Projects</BigButton>
    </section>
  );
};

export default projects;
