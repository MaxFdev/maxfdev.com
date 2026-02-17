import { ComponentType } from "react";
import fs from "fs";
import path from "path";

export interface ProjectDetails {
  slug: string;
  name: string;
  image: string;
  overview: string;
  topics: string[];
  repoUrl: string;
  Content: ComponentType;
}

/**
 * Dynamically loads all MDX projects from the data/projects directory.
 * This function runs at build time on the server.
 */
export async function getProjects(): Promise<ProjectDetails[]> {
  const projectsDir = path.join(process.cwd(), "data/projects");

  // Get all .mdx files
  const files = fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".mdx"));

  // Load each MDX file and extract metadata
  const projects = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");

      // Dynamic import of the MDX file
      const mdxModule = await import(`./${file}`);

      return {
        slug,
        name: mdxModule.name || slug,
        image: mdxModule.image || "",
        overview: mdxModule.overview || "",
        topics: mdxModule.topics || [],
        repoUrl: mdxModule.repoUrl || "",
        Content: mdxModule.default, // MDX default export is the content component
      } as ProjectDetails;
    })
  );

  // TODO update to another sorting method
  // Sort projects by name
  return projects.sort((a, b) => a.name.localeCompare(b.name));
}
