import type { MDXComponents } from "mdx/types";
import { Mermaid } from "@/components/elements/mermaid";

/**
 * MDX Components Configuration
 * 
 * This file defines custom components that will be used when rendering MDX content.
 * Mermaid diagrams are handled by our custom Mermaid component since Turbopack's
 * serialization limitations prevent using rehype-mermaid plugin in next.config.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom wrapper for better styling
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </article>
    ),
    // Custom heading components for better styling
    h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-4xl font-bold tracking-tight mb-4" {...props} />
    ),
    h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
      <h2 className="text-3xl font-bold tracking-tight mt-8 mb-4" {...props} />
    ),
    h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
      <h3 className="text-2xl font-semibold tracking-tight mt-6 mb-3" {...props} />
    ),
    // Custom code block handler for Mermaid diagrams (fallback)
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

      // Default pre rendering with better styling
      return (
        <pre
          className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm"
          {...props}
        />
      );
    },
    // Custom code inline styling
    code: (props: React.ComponentPropsWithoutRef<"code">) => {
      const { className, ...rest } = props;
      // Don't style code blocks, only inline code
      if (className) {
        return <code className={className} {...rest} />;
      }
      return (
        <code
          className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
          {...rest}
        />
      );
    },
    // Better table styling
    table: (props: React.ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full border-collapse" {...props} />
      </div>
    ),
    // Better list styling
    ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
      <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
    ),
    ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
      <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />
    ),
    li: (props: React.ComponentPropsWithoutRef<"li">) => (
      <li className="mt-2" {...props} />
    ),
    // Better blockquote styling
    blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="mt-6 border-l-4 border-primary pl-6 italic"
        {...props}
      />
    ),
    // Better link styling
    a: (props: React.ComponentPropsWithoutRef<"a">) => (
      <a
        className="font-medium text-primary underline underline-offset-4 hover:no-underline"
        {...props}
      />
    ),
  };
}
