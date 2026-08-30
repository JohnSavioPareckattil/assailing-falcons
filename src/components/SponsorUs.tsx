import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";
import KineticHeading from "./KineticHeading";
import { sponsorWays, sponsorProof, contact } from "../data";

export default function SponsorUs() {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <section className="section sponsor-us" id="sponsor-us">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Sponsor Us</p>
            <KineticHeading className="section-title" style={{ marginTop: "0.6rem" }} lines={["Back the build"]} />
          </div>
          <p className="eyebrow eyebrow--dim" style={{ maxWidth: "34ch", textAlign: "right" }}>
            Every airframe is student-funded. Sponsorship is what turns a
            design report into a flying aircraft.
          </p>
        </div>

        <div className="sponsor-ways">
          <Reveal variant="scale" className="sponsor-triangle-wrap">
            <motion.div
              ref={panelRef}
              className="sponsor-triangle"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
            >
              <CornerFrame />
              <svg className="sponsor-triangle-lines" viewBox="0 0 300 260" aria-hidden="true">
                <path d="M150 26 L36 224 L264 224 Z" />
              </svg>
              <span
                className="sponsor-triangle-mark"
                aria-hidden="true"
                style={{
                  WebkitMaskImage: "url(media/brand/mark.png)",
                  maskImage: "url(media/brand/mark.png)",
                }}
              />
              {sponsorWays.map((w, i) => (
                <span className={`sponsor-node sponsor-node--${i}`} key={w.code}>
                  <span className="sponsor-node-code">{w.code}</span>
                  <span className="sponsor-node-name">{w.name}</span>
                </span>
              ))}
            </motion.div>
          </Reveal>

          <div className="sponsor-ways-list">
            {sponsorWays.map((w, i) => (
              <Reveal key={w.code} delay={i * 0.08} variant="left" className="sponsor-way">
                <span className="sponsor-way-head">
                  <span className="sponsor-way-code">{w.code}</span>
                  <span className="sponsor-way-name">{w.name}</span>
                </span>
                <p className="sponsor-way-detail">{w.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="sponsor-proof">
            {sponsorProof.map((p) => (
              <div className="sponsor-proof-item" key={p.label}>
                <span className="sponsor-proof-value">{p.value}</span>
                <span className="sponsor-proof-label">{p.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="sponsor-us-cta">
            <p>
              Want your name on the fuselage that flies to Fort Worth?
              Reach out and we'll send over the sponsorship brochure.
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
