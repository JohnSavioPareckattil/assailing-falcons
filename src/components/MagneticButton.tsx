import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export default function MagneticButton({
  href,
  className,
  children,
  onClick,
  target,
  rel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 250, damping: 16, mass: 0.3 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
    >
      {children}
    </motion.a>
  );
}
