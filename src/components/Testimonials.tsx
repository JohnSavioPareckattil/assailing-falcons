import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";
import KineticHeading from "./KineticHeading";
import PaperPlaneGlyph from "./PaperPlaneIcon";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Testimonials</p>
            <KineticHeading className="section-title" style={{ marginTop: "0.6rem" }} lines={["From the flight line"]} />
          </div>
        </div>

        <div className={`testimonial-grid${testimonials.length === 1 ? " testimonial-grid--single" : ""}`}>
          {testimonials.map((t, i) => (
            <Reveal key={t.source} delay={i * 0.1} className="testimonial-card">
              <CornerFrame />
              <svg className="testimonial-watermark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <PaperPlaneGlyph />
              </svg>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-attribution">
                <span className="testimonial-source">{t.source}</span>
                <span className="testimonial-context">{t.context}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
