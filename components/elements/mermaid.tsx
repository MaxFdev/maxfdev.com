"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Skeleton } from "@/components/ui/skeleton";

// Initialize mermaid with proper configuration following best practices
// https://mermaid.js.org/config/usage.html
mermaid.initialize({
  startOnLoad: false, // We manually trigger rendering
  theme: "default",
  securityLevel: "strict", // Prevents arbitrary JavaScript execution
  fontFamily: "var(--font-noto-sans), sans-serif",
});

export function Mermaid({ chart }: { chart: string }) {
  const svgRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [renderedChart, setRenderedChart] = useState<string | null>(null);

  // Derive loading state - avoids setState in effect
  const loading = chart !== renderedChart;

  useEffect(() => {
    if (chart) {
      const id = `mermaid-${crypto.randomUUID()}`;
      
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (svgRef.current) {
            svgRef.current.innerHTML = svg;
            setRenderedChart(chart);
          }
        })
        .catch((err) => {
          console.error("Mermaid rendering error:", err);
          setError(err.message || "Failed to render diagram");
          setRenderedChart(chart);
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

  return (
    <div className="my-6">
      {loading && <Skeleton className="h-[400px] w-full rounded-md" />}
      <div
        ref={svgRef}
        className={`mermaid-diagram flex w-full items-center justify-center overflow-x-auto rounded-md border border-border bg-[#ffffff] p-2 dark:bg-[#0d1117] ${loading ? "hidden" : ""}`}
      />
    </div>
  );
}
