import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const PLANE_PATH = "M3 13l18-7-4.5 17-3-6.5L7 20l2-4.5L3 13z";

type Plane = { id: number; top: number; delay: number };

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [planes, setPlanes] = useState<Plane[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    console.log(
      "%c ASSAILING FALCONS ",
      "background:#4fd996;color:#06090a;font-family:monospace;font-weight:700;padding:4px 8px;"
    );
    console.log(
      "%cPre-flight checklist complete. If you're reading this, you already know how to read code.\nDesign, structures, avionics or management, we're always looking for engineers.\nassailingfalcons@vit.ac.in",
      "font-family:monospace;color:#99a49c;"
    );
  }, []);

  useEffect(() => {
    let progress = 0;
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        setPlanes(
          Array.from({ length: 7 }, (_, i) => ({
            id: Date.now() + i,
            top: 8 + i * 12 + Math.random() * 6,
            delay: i * 0.12,
          }))
        );
        setActive(true);
        window.setTimeout(() => setActive(false), 3200);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {active && (
        <div className="easter-egg" aria-hidden="true">
          {planes.map((p) => (
            <motion.svg
              key={p.id}
              className="easter-egg-plane"
              style={{ top: `${p.top}%` }}
              viewBox="0 0 24 24"
              fill="none"
              initial={{ x: "-8vw", opacity: 0 }}
              animate={{ x: "108vw", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, delay: p.delay, ease: "easeIn" }}
            >
              <path d={PLANE_PATH} fill="currentColor" />
            </motion.svg>
          ))}
          <motion.div
            className="easter-egg-toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.35, delay: 0.3 }}
          >
            Squadron scrambled. Welcome to the flight line.
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
