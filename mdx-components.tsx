import type { MDXComponents } from "mdx/types";
import { Mermaid } from "@/components/elements/mermaid";

/**
 * MDX Components Configuration
 * 
 * This file defines custom components for MDX content rendering.
 * Most styling is handled by Tailwind Typography (prose classes).
 * Custom components are only added where necessary for functionality.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Wrapper with Tailwind Typography for default styling
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </article>
    ),
    // Custom code block handler for Mermaid diagrams
    pre: (props: React.ComponentPropsWithoutRef<"pre">) => {
      const codeProps = (
        props.children as React.ReactElement<{
          className?: string;
          children?: string;
        }>
      )?.props;

      // Check if this is a mermaid code block
      if (codeProps?.className?.includes("language-mermaid")) {
        return <Mermaid chart={codeProps.children || ""} />;
      }

      // Default pre rendering - Tailwind Typography handles styling
      return <pre {...props} />;
    },
  };
}
