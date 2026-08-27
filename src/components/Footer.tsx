import Reveal from "./Reveal";
import { contact } from "../data";

export default function Footer() {
  return (
    <footer className="footer section" id="contact">
      <div className="container">
        <div className="footer-grid">
          <Reveal>
            <p className="eyebrow">08 — Get In Touch</p>
            <h2 className="footer-title" style={{ marginTop: "0.8rem" }}>
              Fly with us.
            </h2>
            <a className="footer-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <div className="footer-social">
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={contact.youtubeUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>
              <a href="AssailingFalcons25-Brochure.pdf" target="_blank" rel="noreferrer">
                Brochure ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="footer-meta">
              <dt>Institution</dt>
              <dd>{contact.address}</dd>
              <dt>Chapter</dt>
              <dd>SAE-VIT, SAE India Student Chapter</dd>
              <dt>Class</dt>
              <dd>SAE AeroDesign, Advanced Class</dd>
              <dt>Phone</dt>
              <dd>{contact.phone}</dd>
            </dl>
          </Reveal>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Team Assailing Falcons, VIT Vellore</span>
          <span>#SkyboundIngenuity</span>
        </div>
      </div>
    </footer>
  );
}
