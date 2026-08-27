import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { flightLog } from "../data";

export default function FlightLog() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <section className="section log" id="log">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 — Flight Log</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Sixteen years,<br />thirteen airframes
            </h2>
          </div>
          <p className="eyebrow eyebrow--dim" style={{ maxWidth: "34ch", textAlign: "right" }}>
            Every mission year gets a new callsign. This is the flight
            plan from Falcons Alpha to Indra.
          </p>
        </div>

        <div className="log-rail" ref={railRef}>
          <div className="log-line-track" />
          <motion.div
            className="log-line-progress"
            style={reduceMotion ? undefined : { scaleY: scrollYProgress }}
          />

          {flightLog.map((entry, i) => (
            <Reveal
              key={entry.year}
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
                    <picture>
                      <source srcSet={`${entry.image}-800.webp`} type="image/webp" />
                      <img
                        src={`${entry.image}-800.jpg`}
                        loading="lazy"
                        alt={`${entry.name}, the ${entry.year} aircraft`}
                      />
                    </picture>
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
