"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

// Initialize mermaid with proper configuration
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "strict",
  fontFamily: "var(--font-noto-sans), sans-serif",
  themeVariables: {
    fontSize: "16px",
  },
});

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current && chart) {
      // Clear previous content
      ref.current.innerHTML = "";
      
      // Create a unique ID for this diagram using crypto API for guaranteed uniqueness
      const id = `mermaid-${crypto.randomUUID()}`;
      
      // Render the diagram
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
            setError(null); // Clear error on successful render
          }
        })
        .catch((err) => {
          console.error("Mermaid rendering error:", err);
          setError(err.message || "Failed to render diagram");
        });
    }
  }, [chart]);

  if (error) {
    return (
      <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
        <p className="font-semibold">Error rendering diagram:</p>
        <pre className="mt-2 whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  return <div ref={ref} className="mermaid-diagram my-6 flex justify-center overflow-x-auto" />;
}
