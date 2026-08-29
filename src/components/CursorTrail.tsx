import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

// a single warm-to-transparent trail, not three clashing hues — reads as
// one coherent comet behind the falcon mark instead of a scattered blob
const COLORS = ["#e7c268", "#e7c268", "#e7c268"];
// Trailing dots get progressively softer/laggier springs than the falcon
// mark itself, so they stretch out behind fast pointer movement.
const SPRING_CONFIGS = [
  { stiffness: 900, damping: 45 }, // the falcon mark, tight to the pointer
  { stiffness: 300, damping: 32 },
  { stiffness: 170, damping: 28 },
  { stiffness: 100, damping: 24 },
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

  const trailDots = [
    { sx: sx1, sy: sy1 },
    { sx: sx2, sy: sy2 },
    { sx: sx3, sy: sy3 },
  ];

  useEffect(() => {
    if (reduceMotion) return;
    const fine = window.matchMedia("(pointer: fine)");
    setEnabled(fine.matches);
    document.documentElement.classList.toggle("custom-cursor-active", fine.matches);
    if (!fine.matches) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion || !enabled) return null;

  return (
    <div className="cursor-trail" aria-hidden="true">
      {trailDots.map(({ sx, sy }, i) => (
        <motion.span
          key={i}
          className="cursor-trail-dot"
          style={{
            x: sx,
            y: sy,
            backgroundColor: COLORS[i % COLORS.length],
            width: 8 - i * 1.4,
            height: 8 - i * 1.4,
            opacity: 0.85 - i * 0.2,
          }}
        />
      ))}
      <motion.span
        className="cursor-mark"
        style={{
          x: sx0,
          y: sy0,
          WebkitMaskImage: "url(media/brand/mark.png)",
          maskImage: "url(media/brand/mark.png)",
        }}
      />
    </div>
  );
}
