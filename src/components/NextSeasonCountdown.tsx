import { useEffect, useState } from "react";

// Placeholder target date — the team has no confirmed date for the next
// competition yet. Swap this for the real date once SAE announces it.
const NEXT_SEASON_TARGET = new Date("2027-03-01T00:00:00Z").getTime();

function formatRemaining(ms: number): string {
  if (ms <= 0) return "TBD";
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  return `${days}D ${String(hours).padStart(2, "0")}H ${String(minutes).padStart(2, "0")}M`;
}

export default function NextSeasonCountdown() {
  const [remaining, setRemaining] = useState(() => NEXT_SEASON_TARGET - Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setRemaining(NEXT_SEASON_TARGET - Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="hero-hud-countdown">
      <span className="hud-live-dot" aria-hidden="true" />
      Next season (est.) · {formatRemaining(remaining)}
    </span>
  );
}
