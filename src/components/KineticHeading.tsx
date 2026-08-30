import { motion, useReducedMotion, type Transition } from "motion/react";
import type { CSSProperties } from "react";

const lineVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const wordTransition: Transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: wordTransition },
};

// Section titles as a scroll-triggered, per-word reveal instead of a plain
// fade — the same staggered treatment the hero title uses, reused site-wide
// so headings carry more weight as you scroll into each section. A small
// accent sweep draws in just above the heading on the same trigger.
export default function KineticHeading({
  lines,
  className,
  style,
}: {
  lines: string[];
  className?: string;
  style?: CSSProperties;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <h2 className={className} style={style}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    );
  }

  return (
    <>
      <motion.span
        className="kinetic-sweep"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.h2
        className={className}
        style={style}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {lines.map((line, li) => {
          const words = line.split(" ");
          return (
            <motion.span className="kinetic-line" variants={lineVariants} key={li}>
              {words.flatMap((word, wi) => {
                const span = (
                  <motion.span className="kinetic-word" variants={wordVariants} key={`w${wi}`}>
                    {word}
                  </motion.span>
                );
                // the space is a plain sibling text node, not nested inside
                // the inline-block word span — nesting it swallowed the gap
                // between words entirely ("SIXTEENYEARS")
                return wi < words.length - 1 ? [span, " "] : [span];
              })}
              {li < lines.length - 1 && <br />}
            </motion.span>
          );
        })}
      </motion.h2>
    </>
  );
}
