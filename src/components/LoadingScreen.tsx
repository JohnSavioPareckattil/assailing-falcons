import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = prevOverflow;
      const root = rootRef.current;
      if (!root || reduceMotion) {
        setVisible(false);
        return;
      }
      animate(root, {
        opacity: [1, 0],
        duration: 500,
        ease: "outQuad",
        onComplete: () => setVisible(false),
      });
    };

    if (reduceMotion) {
      finish();
      return;
    }

    const counter = { val: 0 };
    animate(counter, {
      val: 100,
      duration: 1700,
      ease: "inOutQuint",
      onUpdate: () => {
        const v = Math.round(counter.val);
        if (countRef.current) countRef.current.textContent = String(v).padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${counter.val / 100})`;
        if (planeRef.current) planeRef.current.style.left = `${counter.val}%`;
      },
      onComplete: finish,
    });

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="loading-screen"
      ref={rootRef}
      role="status"
      aria-live="polite"
      aria-label="Site loading"
    >
      <div className="loading-grid" aria-hidden="true" />
      <div className="loading-inner">
        <span className="loading-mark">
          ASSAILING <span>FALCONS</span>
        </span>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" ref={barRef} />
          <span className="loading-plane" ref={planeRef} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 13l18-7-4.5 17-3-6.5L7 20l2-4.5L3 13z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="loading-meta">
          <span>PRE-FLIGHT CHECK</span>
          <span className="loading-count">
            <span ref={countRef}>000</span>%
          </span>
        </div>
      </div>
    </div>
  );
}
