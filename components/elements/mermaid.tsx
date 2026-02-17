"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
});

// TODO make sure this uses SSR

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Clear previous content
      ref.current.innerHTML = "";
      
      // Create a unique ID for this diagram
      const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`; // HACK not sure why this works
      
      // Render the diagram
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      }).catch((error) => {
        console.error("Mermaid rendering error:", error);
        if (ref.current) {
          ref.current.innerHTML = `<pre>Error rendering diagram: ${error.message}</pre>`;
        }
      });
    }
  }, [chart]);

  return <div ref={ref} className="mermaid-diagram flex justify-center my-6" />;
}
