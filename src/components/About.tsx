import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <p className="eyebrow">01 — Who We Are</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem", marginBottom: "1.6rem" }}>
              Sixteen years<br />in the air
            </h2>
            <div className="about-copy">
              <p>
                <strong>Team Assailing Falcons</strong> is VIT's premier aeromodelling team,
                specialising in the design, fabrication and testing of autonomous unmanned
                aerial vehicles. Founded in 2010, we've grown into a 50-plus member
                multidisciplinary team that consistently pushes the boundaries of innovation.
              </p>
              <p>
                Ranked <strong>No.1 in Asia-Pacific</strong>, we compete against university
                teams from every continent at SAE AeroDesign while giving students a
                hands-on environment that turns them into industry-ready engineers — through
                teamwork, technical excellence and continuous experimentation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
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
