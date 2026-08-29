import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX, originX: 0 }}
      aria-hidden="true"
    />
  );
}
