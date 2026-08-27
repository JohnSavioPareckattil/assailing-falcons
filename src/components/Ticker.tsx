import { flightLog } from "../data";

export default function Ticker() {
  const items = flightLog.map((e) => `${e.code} · ${e.result}`);
  const loop = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((t, i) => (
          <span className="ticker-item" key={i}>
            {t}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
