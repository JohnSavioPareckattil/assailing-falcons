import Reveal from "./Reveal";
import KineticHeading from "./KineticHeading";
import { sponsors } from "../data";

// the desktop grid is 5 columns; if the sponsor count doesn't divide evenly,
// center the trailing partial row instead of left-aligning it with a
// lopsided gap trailing on one side — an empty cell at each end of that
// row instead of a cluster of them on the right
const DESKTOP_COLS = 5;
const remainder = sponsors.length % DESKTOP_COLS;
const centerOffset = remainder === 0 ? 0 : Math.floor((DESKTOP_COLS - remainder) / 2);
const lastRowStart = sponsors.length - remainder;

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
            {sponsors.map((s, i) => {
              const inLastRow = remainder > 0 && i >= lastRowStart;
              const colStart = inLastRow ? centerOffset + (i - lastRowStart) + 1 : undefined;
              return (
                <a
                  className="sponsor-tile"
                  key={s.file}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  style={colStart ? ({ "--tile-col-start": colStart } as React.CSSProperties) : undefined}
                >
                  <img src={`media/sponsors/${s.file}.png`} loading="lazy" alt={s.name} />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
