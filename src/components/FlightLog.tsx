import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import LazyImage from "./LazyImage";
import ArcScrubber from "./ArcScrubber";
import FlightPathDoodle from "./FlightPathDoodle";
import KineticHeading from "./KineticHeading";
import { flightLog } from "../data";

export default function FlightLog() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(flightLog.length - 1); // open on Indra
  const entry = flightLog[index];

  return (
    <section className="section log" id="log">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Flight Log</p>
            <KineticHeading
              className="section-title"
              style={{ marginTop: "0.6rem" }}
              lines={["Sixteen years,", "seventeen airframes"]}
            />
          </div>
          <FlightPathDoodle />
        </div>

        <p className="log-hint">Drag the dial, use the arrows, or click a mark to move through the archive.</p>

        <div className="log-stage">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="log-stage-grid"
              initial={reduceMotion ? undefined : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -28 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="log-stage-media">
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
                <span className="log-stage-tag">{entry.code}</span>
              </div>

              <div className="log-stage-info">
                <span className="log-stage-year">{entry.year}</span>
                <div className="log-name-row">
                  <h3 className="log-name">{entry.name}</h3>
                </div>
                <p className="log-result">{entry.result}</p>
                <p className="log-blurb">{entry.blurb}</p>
                {entry.current && <span className="log-current-tag">Current flagship</span>}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal variant="fade" className="log-scrubber-wrap">
          <ArcScrubber
            count={flightLog.length}
            index={index}
            onChange={setIndex}
            label={entry.year}
            stepLabel="aircraft"
          />
        </Reveal>
      </div>
    </section>
  );
}
