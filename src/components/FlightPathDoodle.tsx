import { motion, useReducedMotion } from "motion/react";
import PaperPlaneGlyph from "./PaperPlaneIcon";

// Fills the slot the flight-log section-head description used to sit in —
// a small drawn-on route rather than another line of copy: a dashed course
// between two waypoints with a dart mid-flight, in the same blueprint
// vocabulary as Blueprint.tsx.
export default function FlightPathDoodle() {
  const reduceMotion = useReducedMotion();

  return (
    <svg className="flight-path-doodle" viewBox="0 0 200 84" fill="none" aria-hidden="true">
      <motion.path
        d="M10 68 C 50 68, 70 20, 110 16 C 140 13, 160 30, 190 14"
        stroke="var(--blue-sky)"
        strokeWidth="1.2"
        strokeDasharray="1 7"
        strokeLinecap="round"
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx="10"
        cy="68"
        r="2.6"
        fill="var(--paper-faint)"
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ margin: "-40px" }}
        transition={{ delay: 0.1, duration: 0.4 }}
      />
      {/* the same paper-plane glyph used for the "no archive photograph"
          placeholder below, at the arc's endpoint — one recurring mark for
          "aircraft in flight" across the section rather than a one-off
          shape. Static positioning transform lives on the outer <g>;
          Motion owns the inner one so its animated scale doesn't fight a
          raw attribute. */}
      <g transform="translate(178 4) scale(0.55) rotate(35 24 24)">
        <motion.g
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.5 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ margin: "-40px" }}
          transition={{ delay: 1.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "24px 24px", color: "var(--brass)" }}
        >
          <PaperPlaneGlyph />
        </motion.g>
      </g>
    </svg>
  );
}
