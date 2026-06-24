import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled] = useState(() => window.matchMedia("(pointer:fine)").matches);

  useEffect(() => {
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-[80] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-cyan-300/10 blur-[0.2px] md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}
