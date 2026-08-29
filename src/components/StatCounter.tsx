import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const target = match ? parseInt(match[1], 10) : null;
  const digits = match ? match[1].length : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || target === null || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v)).padStart(digits, "0") + suffix),
    });
    return () => controls.stop();
  }, [inView, target, digits, suffix, reduceMotion]);

  return <span ref={ref}>{display}</span>;
}
