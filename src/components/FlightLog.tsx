import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import LazyImage from "./LazyImage";
import FlightPathDoodle from "./FlightPathDoodle";
import { flightLog } from "../data";

export default function FlightLog() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });
  // smoothed so the rail eases into each shift instead of tracking the
  // scrollbar 1:1 — the "fluid" motion the raw scrollYProgress lacks
  const fluidProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section className="section log" id="log">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Flight Log</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Sixteen years,<br />seventeen airframes
            </h2>
          </div>
          <FlightPathDoodle />
        </div>

        <div className="log-rail" ref={railRef}>
          <div className="log-line-track" />
          <motion.div
            className="log-line-progress"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={reduceMotion ? undefined : { scaleY: fluidProgress }}
          />

          {flightLog.map((entry, i) => (
            <Reveal
              key={entry.name}
              delay={i * 0.05}
              className={`log-entry${entry.current ? " log-entry--current" : ""}`}
            >
              <span className="log-year">{entry.year}</span>
              <span className="log-node">
                <span className="log-dot" />
              </span>
              <div className="log-card">
                <div className="log-thumb">
                  {entry.image ? (
                    <LazyImage
                      webp={`${entry.image}-800.webp`}
                      src={`${entry.image}-800.jpg`}
                      alt={`${entry.name}, the ${entry.year} aircraft`}
                    />
                  ) : (
                    <div className="log-thumb-empty" aria-hidden="true">
                      <svg viewBox="0 0 48 48" fill="none">
                        <path
                          d="M6 26l36-14-9 34-6-13-13 8 4-9-12-6z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>NO ARCHIVE PHOTOGRAPH</span>
                    </div>
                  )}
                </div>
                <div>
                  <span className="log-year-mobile">{entry.year}</span>
                  <div className="log-name-row">
                    <h3 className="log-name">{entry.name}</h3>
                    <span className="log-code">{entry.code}</span>
                  </div>
                  <p className="log-result">{entry.result}</p>
                  <p className="log-blurb">{entry.blurb}</p>
                  {entry.current && <span className="log-current-tag">Current flagship</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
