import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { stats } from "../data";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} variant="fade" className="stat">
              <div className="stat-value">
                <StatCounter value={s.value} />
                <sup>{s.unit}</sup>
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
