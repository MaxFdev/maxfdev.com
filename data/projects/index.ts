import { ComponentType } from "react";

// Static imports of MDX files
import * as awsLambdaMock from "./aws-lambda-mock.mdx";
import * as fat32Reader from "./fat32-reader.mdx";

export interface ProjectDetails {
  slug: string;
  name: string;
  image: string;
  overview: string;
  topics: string[];
  repoUrl: string;
  Content: ComponentType;
}

// Define all projects with their metadata
const projectModules = [
  { slug: "aws-lambda-mock", module: awsLambdaMock },
  { slug: "fat32-reader", module: fat32Reader },
];

/**
 * Gets all MDX projects with their metadata.
 * Projects are statically imported at build time.
 */
export function getProjects(): ProjectDetails[] {
  const projects = projectModules.map(({ slug, module }) => ({
    slug,
    name: module.name || slug,
    image: module.image || "",
    overview: module.overview || "",
    topics: module.topics || [],
    repoUrl: module.repoUrl || "",
    Content: module.default, // MDX default export is the content component
  })) as ProjectDetails[];

  // Sort projects by name
  return projects.sort((a, b) => a.name.localeCompare(b.name));
}
