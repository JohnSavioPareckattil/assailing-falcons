import Reveal from "./Reveal";
import { sponsorTiers, contact } from "../data";

export default function SponsorUs() {
  return (
    <section className="section sponsor-us" id="sponsor-us">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">06 — Sponsor Us</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              Back the build
            </h2>
          </div>
          <p className="eyebrow eyebrow--dim" style={{ maxWidth: "34ch", textAlign: "right" }}>
            Every airframe is student-funded. Sponsorship is what turns a
            design report into a flying aircraft.
          </p>
        </div>

        <div className="sponsor-us-grid">
          {sponsorTiers.map((tier, i) => (
            <Reveal
              delay={i * 0.1}
              className={`sponsor-us-card${i === 0 ? " sponsor-us-card--signal" : ""}`}
              key={tier.name}
            >
              <span className="sponsor-us-tier">{tier.name}</span>
              <p className="sponsor-us-tagline">{tier.tagline}</p>
              <ul className="sponsor-us-perks">
                {tier.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="sponsor-us-cta">
            <p>
              Want your name on the fuselage that flies to Fort Worth?
              Reach out — we'll send the sponsorship brochure and tier deck.
            </p>
            <div className="sponsor-us-cta-actions">
              <a className="btn btn--primary" href={`mailto:${contact.email}?subject=Sponsorship enquiry`}>
                Get in touch ↗
              </a>
              <a
                className="btn"
                href="AssailingFalcons25-Brochure.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download brochure
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
