import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const VARIANTS = {
  up: { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scale: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
  left: { initial: { opacity: 0, x: -22 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 22 }, animate: { opacity: 1, x: 0 } },
  pop: { initial: { opacity: 0, y: 16, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 } },
} as const;

// "pop" is the playful one (Jhey): a spring with real bounce. Everything
// else stays a Jakub-style bounce:0 spring so the page doesn't feel jumpy
// everywhere at once.
const TRANSITIONS = {
  pop: { type: "spring", bounce: 0.42, duration: 0.65 },
  default: { type: "spring", bounce: 0, duration: 0.6 },
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
  const baseTransition = variant === "pop" ? TRANSITIONS.pop : TRANSITIONS.default;

  if (reduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ margin: "-80px" }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </Component>
  );
}
