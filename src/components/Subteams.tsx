import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import SubteamGraphic from "./SubteamGraphic";
import { subteams } from "../data";

export default function Subteams() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section" id="crew">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">How We're Built</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Four desks,<br />one airframe
            </h2>
          </div>
        </div>

        <div className="crew-grid">
          {subteams.map((t, i) => (
            <Reveal key={t.code} as="div" variant="pop" delay={i * 0.1} className="crew-card-wrap">
              <motion.div
                className="crew-card"
                whileHover={reduceMotion ? undefined : { y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              >
                <SubteamGraphic code={t.code} />
                <span className="crew-code">{t.code}</span>
                <h3 className="crew-name">{t.name}</h3>
                <p className="crew-detail">{t.detail}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
