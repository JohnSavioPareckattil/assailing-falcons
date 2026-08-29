import { useState } from "react";
import { useReducedMotion } from "motion/react";

type Mote = { id: number; left: number; size: number; duration: number; delay: number; hue: "blue" | "brass" };

function makeMotes(count: number): Mote[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 2 + Math.random() * 3.5,
    duration: 16 + Math.random() * 18,
    delay: -Math.random() * 30,
    hue: i % 3 === 0 ? "brass" : "blue",
  }));
}

// fixed, page-wide layer of slow-drifting specks — dust in a hangar beam.
// Always-on and cheap: transform + opacity only, so it's compositor-only
// and doesn't compete with the heavier per-section motion.
export default function AmbientMotes() {
  const reduceMotion = useReducedMotion();
  const [motes] = useState(() => makeMotes(16));

  if (reduceMotion) return null;

  return (
    <div className="ambient-motes" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className={`ambient-mote ambient-mote--${m.hue}`}
          style={
            {
              left: `${m.left}%`,
              width: m.size,
              height: m.size,
              animationDuration: `${m.duration}s`,
              animationDelay: `${m.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
