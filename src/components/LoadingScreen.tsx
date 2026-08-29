import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const count = useTransform(progress, (v) => String(Math.round(v)).padStart(3, "0"));
  const scaleX = useTransform(progress, (v) => v / 100);
  const left = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (reduceMotion) {
      document.body.style.overflow = prevOverflow;
      setVisible(false);
      return;
    }

    const controls = animate(progress, 100, {
      duration: 1.55,
      ease: [0.83, 0, 0.17, 1],
      onComplete: () => {
        window.setTimeout(() => {
          document.body.style.overflow = prevOverflow;
          setVisible(false);
        }, 180);
      },
    });

    return () => {
      controls.stop();
      document.body.style.overflow = prevOverflow;
    };
  }, [progress, reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          role="status"
          aria-live="polite"
          aria-label="Site loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loading-grid" aria-hidden="true" />
          <div className="loading-inner">
            <span className="loading-mark">
              ASSAILING <span>FALCONS</span>
            </span>
            <div className="loading-bar-track">
              <motion.div className="loading-bar-fill" style={{ scaleX, originX: 0 }} />
              <motion.span className="loading-plane" style={{ left }} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 13l18-7-4.5 17-3-6.5L7 20l2-4.5L3 13z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            </div>
            <div className="loading-meta">
              <span>PRE-FLIGHT CHECK</span>
              <span className="loading-count">
                <motion.span>{count}</motion.span>%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
