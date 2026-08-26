import Reveal from "./Reveal";
import { subteams } from "../data";

export default function Subteams() {
  return (
    <section className="section" id="crew">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">04 — How We're Built</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Four desks,<br />one airframe
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="crew-grid">
            {subteams.map((t) => (
              <div className="crew-card" key={t.code}>
                <span className="crew-code">{t.code}</span>
                <h3 className="crew-name">{t.name}</h3>
                <p className="crew-detail">{t.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
