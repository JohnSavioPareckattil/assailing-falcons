import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

// Reads page scroll progress as a flight path: the same dart glyph used
// elsewhere in the archive (see FlightLog's empty-photo icon) slides down a
// fixed rail. Desktop only — see .scroll-path in styles.css.
export default function ScrollFlightPath() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });
  const top = useTransform(smooth, [0, 1], ["0%", "100%"]);

  if (reduceMotion) return null;

  return (
    <div className="scroll-path" aria-hidden="true">
      <div className="scroll-path-track" />
      <motion.svg className="scroll-path-marker" style={{ top }} viewBox="0 0 48 48" fill="none">
        <path d="M6 26l36-14-9 34-6-13-13 8 4-9-12-6z" fill="currentColor" />
      </motion.svg>
    </div>
  );
}
