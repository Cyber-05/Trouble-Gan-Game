import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouseMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX - 4}px`;
      dot.style.top = `${e.clientY - 4}px`;
      ring.style.left = `${e.clientX - 20}px`;
      ring.style.top = `${e.clientY - 20}px`;

      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.cursor === "hover";
      
      dot.style.transform = isInteractive ? "scale(2.5)" : "scale(1)";
      ring.style.borderColor = isInteractive ? "#D800FF" : "#9CFF11";
      ring.style.transform = isInteractive ? "scale(1.5) translate(-7px, -7px)" : "scale(1)";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          background: "#9CFF11",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 20px #9CFF11",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "2px solid #9CFF11",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
