import Reveal from "./Reveal";
import { sponsors } from "../data";

export default function Sponsors() {
  return (
    <section className="section" id="sponsors">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">06 — Backed By</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              On the fuselage
            </h2>
          </div>
        </div>

        <Reveal>
          <div className="sponsor-grid">
            {sponsors.map((s) => (
              <div className="sponsor-tile" key={s.file}>
                <img src={`/media/sponsors/${s.file}.png`} loading="lazy" alt={s.name} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
