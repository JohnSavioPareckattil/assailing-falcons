import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";

const specs = [
  { key: "Season", val: "F'26" },
  { key: "Class", val: "Advanced — eVTOL Tricopter" },
  { key: "Design Report", val: "2nd Worldwide" },
  { key: "Technical Presentation", val: "1st Worldwide" },
  { key: "MathWorks Simulation Award", val: "2nd Worldwide" },
];

export default function Flagship() {
  return (
    <section className="section flagship" id="vidhyut">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 — Current Flagship</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Indra
            </h2>
          </div>
        </div>

        <div className="flagship-grid">
          <Reveal>
            <div className="flagship-media">
              <CornerFrame />
              <picture>
                <source srcSet="media/aircraft/indra-flight-800.webp" type="image/webp" />
                <img
                  src="media/aircraft/indra-flight-800.jpg"
                  loading="lazy"
                  alt="Indra in flight at dusk, with the moon visible behind it"
                />
              </picture>
              <span className="flagship-media-tag">F'26 · INDRA</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="spec-panel">
              <div className="spec-title">INDRA</div>
              <div className="spec-subtitle">Sanskrit — god of the sky, weather and war</div>

              <ul className="spec-list">
                {specs.map((s) => (
                  <li key={s.key}>
                    <span className="spec-key">{s.key}</span>
                    <span className="spec-val">{s.val}</span>
                  </li>
                ))}
              </ul>

              <p className="spec-results">
                An electric VTOL tricopter built for precision payload delivery and
                recapture. When war in Iran closed the airspace the team needed to
                reach Fort Worth, Assailing Falcons cleared the Design Report,
                Technical Presentation and MathWorks Simulation Award entirely
                through remote submission — and still came home with{" "}
                <strong>1st in Technical Presentation, worldwide</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
