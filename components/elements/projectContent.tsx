import { ProjectDetails } from "@/data";

// Server component that renders MDX content
export function ProjectContent({ project }: { project: ProjectDetails }) {
  const { Content } = project;
  
  return (
    <div className="prose prose-sm md:prose-base max-w-none prose-headings:font-trebuchet prose-h2:text-xl prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-3 prose-p:text-base prose-p:leading-relaxed prose-ul:list-disc prose-ul:ml-4 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto">
      <Content />
    </div>
  );
}
