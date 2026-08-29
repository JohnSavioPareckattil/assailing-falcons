import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              From the flight line
            </h2>
          </div>
        </div>

        <div className={`testimonial-grid${testimonials.length === 1 ? " testimonial-grid--single" : ""}`}>
          {testimonials.map((t, i) => (
            <Reveal key={t.source} delay={i * 0.1} className="testimonial-card">
              <CornerFrame />
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
