import Reveal from "./Reveal";
import Blueprint from "./Blueprint";

export default function About() {
  return (
    <section className="section about" id="about">
      <Blueprint className="about-blueprint" />
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem", marginBottom: "1.6rem" }}>
              Sixteen years<br />in the air
            </h2>
            <div className="about-copy">
              <p>
                <strong>Team Assailing Falcons</strong> is VIT Vellore's aeromodelling team.
                We design, build, fabricate and test autonomous unmanned aircraft from
                scratch. Founded in 2010, we've grown into a 50-plus member crew spanning
                design, structures, avionics and management.
              </p>
              <p>
                Ranked <strong>No.1 in Asia-Pacific</strong>, we go up against university
                teams from every continent at SAE AeroDesign. Every season means real
                deadlines, real flight tests and real failures, the kind of experience that
                turns students into engineers before they graduate.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="scale">
            <figure className="about-frame">
              <picture>
                <source srcSet="media/aircraft/indra-team-800.webp" type="image/webp" />
                <img
                  src="media/aircraft/indra-team-800.jpg"
                  loading="lazy"
                  alt="Team Falcons '26 group photo in their F'26 team shirts"
                />
              </picture>
              <figcaption className="about-caption">
                <span>Falcons '26</span>
                <span>50+ members, 4 departments</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
