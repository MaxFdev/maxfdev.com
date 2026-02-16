"use client";

import { useState, useEffect } from "react";
import Project from "@/components/elements/project";
import { Skeleton } from "../ui/skeleton";
import { fetchProjectDetails } from "@/utils/projects";

const DynamicProjectList = (username: { username: string }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProjectDetails(username.username)
      .then((data) => {
        setProjects(data as any[]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="w-full max-w-(--width-clamp) px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 p-1">
              <Skeleton className="h-50 w-full rounded-lg animate-none!" />
              <div className="flex flex-col rounded-lg p-3 gap-2 h-130 bg-muted">
                <Skeleton className="h-8 w-3/4 bg-slate-300" />
                <div className="mt-4 flex gap-1 h-12 items-center">
                  <Skeleton className="h-7 w-16 bg-slate-300" />
                  <Skeleton className="h-7 w-20 rounded-3xl bg-slate-300" />
                  <Skeleton className="h-7 w-24 rounded-3xl bg-slate-300" />
                  <Skeleton className="h-7 w-16 rounded-3xl bg-slate-300" />
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className={`h-4 w-${i === 9 ? "5/6" : "full"} bg-slate-300`}
                    />
                  ))}
                </div>
                <div className="mt-auto">
                  <Skeleton className="h-10 w-32 bg-slate-300" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full max-w-(--width-clamp) px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index}>
          <Project
            img={project.image}
            title={project.name}
            content={project.description}
            tags={project.topics}
            link={project.repoUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicProjectList;
