import React from "react";
import { fetchProjectDetails } from "@/utils/projects";
import Link from "next/link";
import Image from "next/image";
import ProjectsCarouselTest from "@/components/elements/projectCarouselTest";

// Define the extended ProjectDetail interface
interface ProjectDetail {
  name: string;
  image: string;
  description: string;
  topics: string[];
  repoUrl: string;
  rank?: number;
  backgroundColor?: string;
}

export default async function ProjectsPage() {
  // Fetch projects
  const githubUsername = process.env.GITHUB_ACCOUNT || undefined;
  if (githubUsername === undefined) {
    throw new Error(
      "GitHub username not found. Please set the GITHUB_ACCOUNT environment variable."
    );
  }
  const projects = await fetchProjectDetails(githubUsername);

  // Sort projects by rank if available
  const sortedProjects = [...projects].sort((a, b) => {
    const rankA = (a as any).rank || 0;
    const rankB = (b as any).rank || 0;
    return rankB - rankA; // Higher rank first
  });

  return (
    <div className="container content-center items-center mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold my-16">My Projects</h1>
      <ProjectsCarouselTest />
    </div>
  );
}
