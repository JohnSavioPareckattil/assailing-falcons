import { useCallback, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Spark = { id: number; x: number; y: number };

let sparkId = 0;
const RAYS = 6;
const SPARK_COLORS = ["#5b8ef5", "#e7c268", "#38c6b4", "#f2607a", "#f5a742", "#9b7cf0"];

export function useClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const reduceMotion = useReducedMotion();

  const trigger = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const id = sparkId++;
      setSparks((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
      window.setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 500);
    },
    [reduceMotion]
  );

  const overlay = (
    <AnimatePresence>
      {sparks.map((s) => (
        <span key={s.id} className="click-spark" style={{ left: s.x, top: s.y }} aria-hidden="true">
          {Array.from({ length: RAYS }).map((_, i) => (
            <motion.i
              key={i}
              style={
                {
                  "--a": `${(360 / RAYS) * i}deg`,
                  color: SPARK_COLORS[i % SPARK_COLORS.length],
                } as React.CSSProperties
              }
              initial={{ opacity: 1, scale: 0.3 }}
              animate={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          ))}
        </span>
      ))}
    </AnimatePresence>
  );

  return { trigger, overlay };
}
