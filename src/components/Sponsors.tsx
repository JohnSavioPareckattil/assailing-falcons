import Reveal from "./Reveal";
import KineticHeading from "./KineticHeading";
import { sponsors } from "../data";

export default function Sponsors() {
  return (
    <section className="section" id="sponsors">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Backed By</p>
            <KineticHeading className="section-title" style={{ marginTop: "0.6rem" }} lines={["On the fuselage"]} />
          </div>
        </div>

        <Reveal>
          <div className="sponsor-grid">
            {sponsors.map((s) => (
              <a
                className="sponsor-tile"
                key={s.file}
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={`media/sponsors/${s.file}.png`} loading="lazy" alt={s.name} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
