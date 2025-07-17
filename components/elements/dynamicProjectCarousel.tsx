"use client";

import React, { useState, useEffect, useRef } from "react";
import Project from "@/components/elements/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "../ui/skeleton";

// TODO make more mobile friendly (maybe make dragging work on mobile)

const DynamicProjectCarousel = ({ projects }: { projects: any[] }) => {
  // TODO redo loading system (maybe load projects with a call back to the server)
  // const [loading, setLoading] = useState(true);

  // State for carousel remounting on resize
  const [componentKey, setComponentKey] = useState(0);
  const prevWidthRef = useRef(0);

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

  // if (loading) {
  //   return (
  //     <Carousel className="w-[75vw]">
  //       <CarouselContent className="py-4">
  //         {Array.from({ length: 3 }).map((_, index) => (
  //           <CarouselItem
  //             className="md:basis-1/2 lg:basis-1/3"
  //             key={index}
  //           >
  //             <div className="flex flex-col gap-2 p-1">
  //               <Skeleton className="h-[200px] w-full rounded-lg !animate-none" />
  //               <div className="flex flex-col rounded-lg p-3 gap-2 h-[520px] bg-muted">
  //                 <Skeleton className="h-8 w-3/4 bg-slate-300" />
  //                 <div className="mt-4 flex gap-1 h-12 items-center">
  //                   <Skeleton className="h-7 w-16 bg-slate-300" />
  //                   <Skeleton className="h-7 w-20 rounded-3xl bg-slate-300" />
  //                   <Skeleton className="h-7 w-24 rounded-3xl bg-slate-300" />
  //                   <Skeleton className="h-7 w-16 rounded-3xl bg-slate-300" />
  //                 </div>
  //                 <div className="space-y-2">
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-full bg-slate-300" />
  //                   <Skeleton className="h-4 w-5/6 bg-slate-300" />
  //                 </div>
  //                 <div className="mt-auto">
  //                   <Skeleton className="h-10 w-32 bg-slate-300" />
  //                 </div>
  //               </div>
  //             </div>
  //           </CarouselItem>
  //         ))}
  //       </CarouselContent>
  //       <CarouselPrevious />
  //       <CarouselNext />
  //     </Carousel>
  //   );
  // }

  return (
    <Carousel
      className="w-[80vw] sm:w-[90vw]"
      opts={{ watchDrag: false, align: "start" }}
      key={componentKey}
    >
      <CarouselContent className="py-4">
        {projects.map((project, index) => (
          <CarouselItem
            className="sm:basis-1/2 lg:basis-1/3"
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
      <CarouselPrevious className="-left-8 md:-left-10" />
      <CarouselNext className="-right-8 md:-right-10" />
    </Carousel>
  );
};

export default DynamicProjectCarousel;
