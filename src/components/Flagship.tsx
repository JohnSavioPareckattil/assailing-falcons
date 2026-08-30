import { motion } from "motion/react";
import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";
import Blueprint from "./Blueprint";
import LazyImage from "./LazyImage";
import KineticHeading from "./KineticHeading";

const specs = [
  { key: "Season", val: "F'26" },
  { key: "Class", val: "Advanced, eVTOL Tricopter" },
];

const results = [
  { label: "Design Report", ordinal: "2nd", place: 2 },
  { label: "Technical Presentation", ordinal: "1st", place: 1 },
  { label: "MathWorks Simulation Award", ordinal: "3rd", place: 3 },
];

// illustrative fill, not a literal percentage of anything — 1st reads full,
// each place back reads visibly shorter
const barScale = (place: number) => Math.max(0.4, 1 - (place - 1) * 0.22);

export default function Flagship() {
  return (
    <section className="section flagship" id="indra">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Current Flagship</p>
            <KineticHeading className="section-title" style={{ marginTop: "0.6rem" }} lines={["Indra"]} />
          </div>
        </div>

        <div className="flagship-grid">
          <Reveal variant="scale">
            <div className="flagship-media">
              <CornerFrame />
              <LazyImage
                webp="media/aircraft/indra-flight-800.webp"
                src="media/aircraft/indra-flight-800.jpg"
                alt="Indra in flight at dusk, with the moon visible behind it"
              />
              <span className="flagship-media-tag">F'26 · INDRA</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="fade">
            <div className="spec-panel">
              <Blueprint className="spec-blueprint" />
              <div className="spec-title">INDRA</div>
              <div className="spec-subtitle">Sanskrit: god of the sky, weather and war</div>

              <ul className="spec-list">
                {specs.map((s) => (
                  <li key={s.key}>
                    <span className="spec-key">{s.key}</span>
                    <span className="spec-val">{s.val}</span>
                  </li>
                ))}
              </ul>

              <div className="results-bars">
                {results.map((r, i) => (
                  <div className="results-bar" key={r.label}>
                    <div className="results-bar-head">
                      <span>{r.label}</span>
                      <span className="results-bar-ordinal">{r.ordinal}</span>
                    </div>
                    <div className="results-bar-track">
                      <motion.div
                        className="results-bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: barScale(r.place) }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="spec-results">
                An electric VTOL tricopter built for precision payload delivery and
                recapture. When war in Iran shut down the airspace the team needed to
                reach Fort Worth, Assailing Falcons cleared the Design Report,
                Technical Presentation and MathWorks Simulation Award entirely by
                remote submission, and still came home with{" "}
                <strong>1st in Technical Presentation, worldwide</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
