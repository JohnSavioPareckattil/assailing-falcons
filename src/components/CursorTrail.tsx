import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const COLORS = ["#5b8ef5", "#e7c268", "#38c6b4", "#f2607a"];
// Each dot gets a progressively softer/laggier spring than the last, so
// the comet stretches out behind fast pointer movement instead of the
// dots all snapping to the same spot.
const SPRING_CONFIGS = [
  { stiffness: 700, damping: 40 },
  { stiffness: 320, damping: 34 },
  { stiffness: 180, damping: 30 },
  { stiffness: 110, damping: 26 },
];

export default function CursorTrail() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx0 = useSpring(x, SPRING_CONFIGS[0]);
  const sy0 = useSpring(y, SPRING_CONFIGS[0]);
  const sx1 = useSpring(x, SPRING_CONFIGS[1]);
  const sy1 = useSpring(y, SPRING_CONFIGS[1]);
  const sx2 = useSpring(x, SPRING_CONFIGS[2]);
  const sy2 = useSpring(y, SPRING_CONFIGS[2]);
  const sx3 = useSpring(x, SPRING_CONFIGS[3]);
  const sy3 = useSpring(y, SPRING_CONFIGS[3]);

  const dots = [
    { sx: sx0, sy: sy0 },
    { sx: sx1, sy: sy1 },
    { sx: sx2, sy: sy2 },
    { sx: sx3, sy: sy3 },
  ];

  useEffect(() => {
    if (reduceMotion) return;
    const fine = window.matchMedia("(pointer: fine)");
    setEnabled(fine.matches);
    if (!fine.matches) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion || !enabled) return null;

  return (
    <div className="cursor-trail" aria-hidden="true">
      {dots.map(({ sx, sy }, i) => (
        <motion.span
          key={i}
          className="cursor-trail-dot"
          style={{
            x: sx,
            y: sy,
            backgroundColor: COLORS[i % COLORS.length],
            width: 10 - i * 1.6,
            height: 10 - i * 1.6,
            opacity: 1 - i * 0.18,
          }}
        />
      ))}
    </div>
  );
}
