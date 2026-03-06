import { ComponentType } from "react";

// Static imports of MDX files for metadata extraction
// Add imports as you add experience entries, e.g.:
import * as yeshivaUniversity from "./yeshiva-university.mdx";

export interface ExperienceMetadata {
  slug: string;
  company: string;
  role: string;
  dates: string;
  image: string;
  overview: string;
  companyUrl: string;
}

// Define all experience entries with their metadata
// Add entries here when you create new MDX files under data/experience/
const experienceModules: { slug: string; module: Record<string, unknown> }[] = [
  { slug: "yeshiva-university", module: yeshivaUniversity },
];

/**
 * Gets all experience metadata without MDX content components.
 * Lightweight - use this for listing work experience.
 */
export function getExperienceMetadata(): ExperienceMetadata[] {
  return experienceModules.map(({ slug, module }) => ({
    slug,
    company: (module.company as string) || "",
    role: (module.role as string) || "",
    dates: (module.dates as string) || "",
    image: (module.image as string) || "",
    overview: (module.overview as string) || "",
    companyUrl: (module.companyUrl as string) || "",
  }));
}

/**
 * Dynamically loads the MDX content component for a specific experience entry.
 * Use this for on-demand loading when displaying experience details.
 */
export async function getExperienceContent(
  slug: string
): Promise<ComponentType | null> {
  try {
    const mdxModule = await import(`./${slug}.mdx`);
    return mdxModule.default;
  } catch {
    return null;
  }
}
