import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const VARIANTS = {
  up: { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scale: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
} as const;

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
  variant?: keyof typeof VARIANTS;
}) {
  const Component = motion[as];
  const reduceMotion = useReducedMotion();
  const { initial, animate } = VARIANTS[variant];

  if (reduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
