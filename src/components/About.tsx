import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <p className="eyebrow">01 — Who We Are</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem", marginBottom: "1.6rem" }}>
              Fifteen years<br />in the air
            </h2>
            <div className="about-copy">
              <p>
                <strong>Team Assailing Falcons</strong> is the official Advanced Class Aero Design
                team of Vellore Institute of Technology. We're a student-funded technical team
                that designs, fabricates and flies autonomous RC aircraft against university
                teams from every continent at SAE AeroDesign.
              </p>
              <p>
                Every airframe is scoped, stressed, wired and flown inside a single academic
                year — a full aircraft development cycle compressed to twelve months, repeated
                every year since 2010. Our aircraft have been recognised by engineers from{" "}
                <strong>Boeing, Airbus and Lockheed Martin</strong>, and the team has held the
                No.1 rank in Asia for nine consecutive years.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <figure className="about-frame">
              <picture>
                <source srcSet="/media/team/legacy-flag-800.webp" type="image/webp" />
                <img
                  src="/media/team/legacy-flag-800.jpg"
                  loading="lazy"
                  alt="The team holding the Indian flag beside three SAE AeroDesign West 2025 award plaques"
                />
              </picture>
              <figcaption className="about-caption">
                <span>SAE AeroDesign West · 2025</span>
                <span>3 plaques, 1 podium</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
