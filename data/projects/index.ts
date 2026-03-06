import { ComponentType } from "react";

// Static imports of MDX files for metadata extraction
import * as awsLambdaMock from "./aws-lambda-mock.mdx";
import * as fat32Reader from "./fat32-reader.mdx";
import * as mandelbrot from "./mandelbrot.mdx";
import * as petiteDb from "./petite-db.mdx";
import * as stocksTerminalSeProject from "./stocks-terminal-se-project.mdx";
import * as tsh from "./tsh.mdx";

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
  { slug: "petite-db", module: petiteDb },
  { slug: "aws-lambda-mock", module: awsLambdaMock },
  { slug: "tsh", module: tsh },
  { slug: "fat32-reader", module: fat32Reader },
  { slug: "stocks-terminal-se-project", module: stocksTerminalSeProject },
  { slug: "mandelbrot", module: mandelbrot },
];

/**
 * Gets all project metadata without MDX content components.
 * Lightweight - use this for listing projects.
 */
export function getProjectsMetadata(): ProjectMetadata[] {
  return projectModules.map(({ slug, module }) => ({
    slug,
    name: module.name || slug,
    image: module.image || "",
    overview: module.overview || "",
    topics: module.topics || [],
    repoUrl: module.repoUrl || "",
  }));
}

/**
 * Dynamically loads the MDX content component for a specific project.
 * Use this for on-demand loading when displaying project details.
 */
export async function getProjectContent(slug: string): Promise<ComponentType> {
  const mdxModule = await import(`./${slug}.mdx`);
  return mdxModule.default;
}
