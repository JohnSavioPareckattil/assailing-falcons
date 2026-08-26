import Reveal from "./Reveal";
import { leadership } from "../data";

export default function People() {
  return (
    <section className="section people">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">05 — On The Ground</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Falcons&nbsp;'26
            </h2>
          </div>
        </div>

        <Reveal>
          <figure className="people-frame">
            <picture>
              <source srcSet="media/team/workshop-build-800.webp" type="image/webp" />
              <img
                src="media/team/workshop-build-800.jpg"
                loading="lazy"
                alt="Team members hand-assembling small-scale test aircraft during a build session"
              />
            </picture>
          </figure>

          <div className="people-strip">
            {leadership.map((p) => (
              <div className="people-lead" key={p.name}>
                <div>
                  <div className="people-lead-name">{p.name}</div>
                  <div className="people-lead-role">{p.role}</div>
                </div>
                <div className="people-lead-phone">{p.phone}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
