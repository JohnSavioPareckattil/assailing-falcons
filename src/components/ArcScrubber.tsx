import { useMemo, useRef, type KeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

// A shallow bezier arc standing in for a straight scrollbar track — a nod to
// the instrument-dial motifs used across the HUD and the sponsor triangle.
const P0 = { x: 12, y: 46 };
const P1 = { x: 150, y: -6 };
const P2 = { x: 288, y: 46 };

function bezierPoint(t: number) {
  const mt = 1 - t;
  return {
    x: mt * mt * P0.x + 2 * mt * t * P1.x + t * t * P2.x,
    y: mt * mt * P0.y + 2 * mt * t * P1.y + t * t * P2.y,
  };
}

const TRACK_PATH = `M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`;

export default function ArcScrubber({
  count,
  index,
  onChange,
  label,
}: {
  count: number;
  index: number;
  onChange: (i: number) => void;
  label: string;
}) {
  const reduceMotion = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  const points = useMemo(
    () => Array.from({ length: count }, (_, i) => bezierPoint(count > 1 ? i / (count - 1) : 0)),
    [count]
  );
  const handlePos = points[index] ?? points[0];

  const nearestIndex = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return index;
    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 300;
    const y = ((clientY - rect.top) / rect.height) * 60;
    let best = 0;
    let bestDist = Infinity;
    points.forEach((p, i) => {
      const d = (p.x - x) ** 2 + (p.y - y) ** 2;
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  };

  const onPointerDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    onChange(nearestIndex(e.clientX, e.clientY));
  };
  const onPointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (e.buttons !== 1) return;
    onChange(nearestIndex(e.clientX, e.clientY));
  };
  const onKeyDown = (e: KeyboardEvent<SVGSVGElement>) => {
    if (e.key === "ArrowRight") onChange((index + 1) % count);
    if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
  };

  if (count < 2) return null;

  return (
    <div className="arc-scrubber">
      <button
        type="button"
        className="arc-scrubber-step"
        onClick={() => onChange((index - 1 + count) % count)}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <svg
        ref={svgRef}
        className="arc-scrubber-dial"
        viewBox="0 0 300 60"
        role="slider"
        aria-label={`${label} photo position`}
        aria-valuemin={1}
        aria-valuemax={count}
        aria-valuenow={index + 1}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
      >
        <path d={TRACK_PATH} className="arc-scrubber-track" />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i === index ? 4.5 : 2.5}
            className={`arc-scrubber-tick${i === index ? " is-active" : ""}`}
            onClick={() => onChange(i)}
          />
        ))}
        <motion.circle
          className="arc-scrubber-handle"
          r={6}
          initial={false}
          animate={{ cx: handlePos.x, cy: handlePos.y }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 26 }}
        />
      </svg>

      <button
        type="button"
        className="arc-scrubber-step"
        onClick={() => onChange((index + 1) % count)}
        aria-label="Next photo"
      >
        ›
      </button>

      <span className="arc-scrubber-count">
        {label} · {index + 1} / {count}
      </span>
    </div>
  );
}
