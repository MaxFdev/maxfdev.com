import type { MDXComponents } from "mdx/types";
import { Mermaid } from "@/components/elements/mermaid";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
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

      // Default pre rendering for other code blocks
      return <pre {...props} />;
    },
  };
}
