import { ComponentType } from "react";

// Static imports of MDX files for metadata extraction
import * as awsLambdaMock from "./aws-lambda-mock.mdx";
import * as fat32Reader from "./fat32-reader.mdx";

export interface ProjectMetadata {
  slug: string;
  name: string;
  image: string;
  overview: string;
  topics: string[];
  repoUrl: string;
}

// Define all projects with their metadata
const projectModules = [
  { slug: "aws-lambda-mock", module: awsLambdaMock },
  { slug: "fat32-reader", module: fat32Reader },
];

/**
 * Gets all project metadata without MDX content components.
 * Lightweight - use this for listing projects.
 */
export function getProjectsMetadata(): ProjectMetadata[] {
  const projects = projectModules.map(({ slug, module }) => ({
    slug,
    name: module.name || slug,
    image: module.image || "",
    overview: module.overview || "",
    topics: module.topics || [],
    repoUrl: module.repoUrl || "",
  }));

  // Sort projects by name
  return projects.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Dynamically loads the MDX content component for a specific project.
 * Use this for on-demand loading when displaying project details.
 */
export async function getProjectContent(slug: string): Promise<ComponentType> {
  const mdxModule = await import(`./${slug}.mdx`);
  return mdxModule.default;
}
