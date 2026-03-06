"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { ZoomIn, ZoomOut, Maximize2, Hand, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

// Initialize mermaid with proper configuration following best practices
// https://mermaid.js.org/config/usage.html
mermaid.initialize({
  startOnLoad: false, // We manually trigger rendering
  theme: "default",
  securityLevel: "strict", // Prevents arbitrary JavaScript execution
  fontFamily: "var(--font-noto-sans), sans-serif",
  themeVariables: {
    fontSize: "18px",
  },
});

const MIN_SCALE = 0.25;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.1;
const PAN_STEP = 50;

export function Mermaid({ chart }: { chart: string }) {
  const svgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const scaleRef = useRef(1); // mirrors scale but readable synchronously
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canvasHeight, setCanvasHeight] = useState(400);
  const [dragEnabled, setDragEnabled] = useState(false);
  const dragState = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  }>({
    active: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const fitDiagram = useCallback(() => {
    const container = containerRef.current;
    const wrapper = svgRef.current;
    if (!container || !wrapper) return;
    const svgEl = wrapper.querySelector("svg");
    if (!svgEl) return;

    const cw = container.clientWidth;

    // Prefer viewBox for intrinsic dimensions; fall back to width/height attrs
    let svgW = 0,
      svgH = 0;
    const vb = svgEl.getAttribute("viewBox");
    if (vb) {
      const parts = vb
        .trim()
        .split(/[\s,]+/)
        .map(Number);
      if (parts.length === 4) {
        svgW = parts[2];
        svgH = parts[3];
      }
    }
    if (!svgW || !svgH) {
      svgW = parseFloat(svgEl.getAttribute("width") ?? "") || 0;
      svgH = parseFloat(svgEl.getAttribute("height") ?? "") || 0;
    }
    if (!svgW || !svgH) return;

    // Normalize SVG element dimensions to the viewBox values so that our CSS
    // transform scale calculations are always accurate regardless of what
    // Mermaid sets on the element (e.g. width="100%", max-width style, etc.)
    svgEl.setAttribute("width", String(svgW));
    svgEl.setAttribute("height", String(svgH));
    (svgEl as SVGSVGElement).style.maxWidth = "";

    const PADDING = 32;
    const maxH = window.innerHeight * 0.8;
    // Use 100% zoom; fall back to 90% if the diagram would overflow either axis.
    const wouldOverflow = svgW + PADDING * 2 > cw || svgH + PADDING * 2 > maxH;
    const s = wouldOverflow ? 0.9 : 1;
    // Canvas height = diagram height at this scale, capped at maxH
    const h = Math.min(Math.round(svgH * s) + PADDING * 2, maxH);

    scaleRef.current = s;
    setCanvasHeight(h);
    setScale(s);
    // With transformOrigin "0 0" and the SVG centred by flex inside the wrapper,
    // the SVG's centre in wrapper-space is (cw/2, h/2). After transform:
    // centreScreen = (cw/2 · s + x, h/2 · s + y) = (cw/2, h/2)  →  solve for x,y:
    setPosition({ x: (cw / 2) * (1 - s), y: (h / 2) * (1 - s) });
  }, []);

  useEffect(() => {
    if (svgRef.current && chart) {
      svgRef.current.innerHTML = "";
      const id = `mermaid-${crypto.randomUUID()}`;
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (svgRef.current) {
            svgRef.current.innerHTML = svg;
            setError(null);
            // Wait for the browser to lay out the SVG before measuring
            requestAnimationFrame(fitDiagram);
          }
        })
        .catch((err) => {
          console.error("Mermaid rendering error:", err);
          setError(err.message || "Failed to render diagram");
        });
    }
  }, [chart, fitDiagram]);

  // Wheel-to-zoom only when drag/pan mode is enabled
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!dragEnabled) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;
      const prev = scaleRef.current;
      const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
      if (next === prev) return;
      const ratio = next / prev;
      scaleRef.current = next;
      setScale(next);
      setPosition((p) => ({
        x: cursorX - ratio * (cursorX - p.x),
        y: cursorY - ratio * (cursorY - p.y),
      }));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [dragEnabled]);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!dragEnabled || e.button !== 0) return;
      dragState.current = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        originX: position.x,
        originY: position.y,
      };
      e.preventDefault();
    },
    [dragEnabled, position]
  );

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.active) return;
    setPosition({
      x: dragState.current.originX + (e.clientX - dragState.current.startX),
      y: dragState.current.originY + (e.clientY - dragState.current.startY),
    });
  }, []);

  const onMouseUp = useCallback(() => {
    dragState.current.active = false;
  }, []);

  const zoom = useCallback((delta: number) => {
    const el = containerRef.current;
    if (!el) return;
    const prev = scaleRef.current;
    const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
    if (next === prev) return;
    const ratio = next / prev;
    const cx = el.clientWidth / 2;
    const cy = el.clientHeight / 2;
    scaleRef.current = next;
    setScale(next);
    setPosition((p) => ({
      x: cx - ratio * (cx - p.x),
      y: cy - ratio * (cy - p.y),
    }));
  }, []);

  const reset = useCallback(() => {
    fitDiagram();
  }, [fitDiagram]);

  const pan = useCallback((dx: number, dy: number) => {
    setPosition((p) => ({ x: p.x + dx, y: p.y + dy }));
  }, []);

  if (error) {
    return (
      <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
        <p className="font-semibold">Error rendering diagram:</p>
        <pre className="mt-2 whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  return (
    <div
      className="mermaid-diagram relative my-6 overflow-hidden rounded-md border border-border bg-[#ffffff] dark:bg-[#0d1117] select-none"
      style={{
        height: canvasHeight,
        cursor: dragEnabled
          ? dragState.current.active
            ? "grabbing"
            : "grab"
          : "default",
      }}
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* GitHub-style bottom-center horizontal toolbar */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center rounded-md border border-border bg-background shadow-sm">
        {/* Pan left */}
        <button
          onClick={() => pan(PAN_STEP, 0)}
          title="Pan left"
          className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground rounded-l-md"
        >
          <ArrowLeft size={13} />
        </button>
        {/* Pan up */}
        <button
          onClick={() => pan(0, PAN_STEP)}
          title="Pan up"
          className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowUp size={13} />
        </button>
        {/* Pan down */}
        <button
          onClick={() => pan(0, -PAN_STEP)}
          title="Pan down"
          className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowDown size={13} />
        </button>
        {/* Pan right */}
        <button
          onClick={() => pan(-PAN_STEP, 0)}
          title="Pan right"
          className="flex h-7 w-7 items-center justify-center border-r border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowRight size={13} />
        </button>
        {/* Zoom out */}
        <button
          onClick={() => zoom(-ZOOM_STEP)}
          title="Zoom out"
          className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ZoomOut size={14} />
        </button>
        {/* Percentage */}
        <span className="min-w-12 border-x border-border px-1 text-center text-[11px] tabular-nums text-muted-foreground">
          {Math.round(scale * 100)}%
        </span>
        {/* Zoom in */}
        <button
          onClick={() => zoom(ZOOM_STEP)}
          title="Zoom in"
          className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground border-r border-border"
        >
          <ZoomIn size={14} />
        </button>
        {/* Reset */}
        <button
          onClick={reset}
          title="Reset view"
          className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground border-r border-border"
        >
          <Maximize2 size={13} />
        </button>
        {/* Pan toggle */}
        <button
          onClick={() => setDragEnabled((v) => !v)}
          title={dragEnabled ? "Disable pan" : "Enable pan"}
          className={`flex h-7 w-7 items-center justify-center transition-colors rounded-r-md ${
            dragEnabled
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          <Hand size={13} />
        </button>
      </div>

      {/* Transformable diagram */}
      <div
        ref={svgRef}
        className="flex h-full w-full items-center justify-center"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "0 0",
          willChange: "transform",
        }}
      />
    </div>
  );
}
