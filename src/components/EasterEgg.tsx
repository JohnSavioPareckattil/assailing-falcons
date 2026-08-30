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

// waypoints for the catchable plane's 5s wander, as [left%, top%]
const WANDER_PATH: [number, number][] = [
  [14, 68],
  [72, 22],
  [30, 58],
  [82, 74],
  [50, 30],
  [20, 50],
];

type Plane = { id: number; top: number; delay: number };

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [planes, setPlanes] = useState<Plane[]>([]);
  const [runId, setRunId] = useState(0);
  const [caught, setCaught] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    console.log(
      "%c ASSAILING FALCONS ",
      "background:#5b8ef5;color:#06090a;font-family:monospace;font-weight:700;padding:4px 8px;"
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
        setCaught(false);
        setRunId((n) => n + 1);
        setActive(true);
        window.setTimeout(() => setActive(false), 5200);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {active && (
        <div className="easter-egg">
          {planes.map((p) => (
            <motion.svg
              key={p.id}
              className="easter-egg-plane"
              style={{ top: `${p.top}%` }}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              initial={{ x: "-8vw", opacity: 0 }}
              animate={{ x: "108vw", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, delay: p.delay, ease: "easeIn" }}
            >
              <path d={PLANE_PATH} fill="currentColor" />
            </motion.svg>
          ))}

          {/* the one catchable plane — click it before it slips away */}
          <motion.svg
            key={`catch-${runId}`}
            className="easter-egg-catch-plane"
            viewBox="0 0 24 24"
            fill="none"
            role="button"
            tabIndex={0}
            aria-label="Catch the plane"
            initial={{ left: `${WANDER_PATH[0][0]}%`, top: `${WANDER_PATH[0][1]}%`, opacity: 0, scale: 0.6 }}
            animate={
              caught
                ? { opacity: 0, scale: 1.8 }
                : {
                    left: WANDER_PATH.map(([l]) => `${l}%`),
                    top: WANDER_PATH.map(([, t]) => `${t}%`),
                    opacity: [0, 1, 1, 1, 1, 1],
                    scale: 1,
                    rotate: [0, 20, -18, 24, -10, 0],
                  }
            }
            transition={
              caught
                ? { duration: 0.35, ease: "easeOut" }
                : { duration: 4.6, ease: "easeInOut", opacity: { duration: 0.4 } }
            }
            onClick={() => setCaught(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setCaught(true);
            }}
          >
            <path d={PLANE_PATH} fill="currentColor" />
          </motion.svg>

          <motion.div
            className="easter-egg-toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.35, delay: 0.3 }}
          >
            {caught ? "Nice reflexes, pilot. Avionics is hiring." : "Squadron scrambled. Welcome to the flight line."}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
