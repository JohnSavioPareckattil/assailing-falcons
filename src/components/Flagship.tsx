import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";

const specs = [
  { key: "Class", val: "Advanced — eVTOL" },
  { key: "Team #", val: "219" },
  { key: "Max loaded weight", val: "1.587 kg" },
  { key: "Payload delivered", val: "455 g" },
  { key: "Competition", val: "SAE AeroDesign West '25" },
];

export default function Flagship() {
  return (
    <section className="section flagship" id="vidhyut">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 — Current Flagship</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Vidhyut
            </h2>
          </div>
        </div>

        <div className="flagship-grid">
          <Reveal>
            <div className="flagship-media">
              <CornerFrame />
              <picture>
                <source srcSet="/media/aircraft/vidhyut-team-comp-800.webp" type="image/webp" />
                <img
                  src="/media/aircraft/vidhyut-team-comp-800.jpg"
                  loading="lazy"
                  alt="Vidhyut and its predecessor airframe on the tarmac, ready for competition"
                />
              </picture>
              <span className="flagship-media-tag">F'25 · VIDHYUT · 219</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="spec-panel">
              <div className="spec-title">VIDHYUT</div>
              <div className="spec-subtitle">/ vɪd.jʊt / — Sanskrit for lightning</div>

              <ul className="spec-list">
                {specs.map((s) => (
                  <li key={s.key}>
                    <span className="spec-key">{s.key}</span>
                    <span className="spec-val">{s.val}</span>
                  </li>
                ))}
              </ul>

              <p className="spec-results">
                An autonomous eVTOL, built to deliver and recapture its own payload
                mid-mission. It took <strong>1st place in the Technical Design
                Report</strong>, 3rd in Technical Presentation, and closed{" "}
                <strong>3rd Overall</strong> at SAE AeroDesign West 2025 — the team's
                best worldwide result since Redbird in 2019.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
