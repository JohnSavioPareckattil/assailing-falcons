import { type ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Scroll-linked clip reveal from Motion's React scroll animation docs. */
export default function ScrollClipImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 46% 0% 46%)", "inset(0% 0% 0% 0%)"]
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ clipPath }}>
      {children}
    </motion.div>
  );
}
