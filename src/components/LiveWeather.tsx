import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const LAT = 12.9165;
const LON = 79.1325;
const COMPASS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const CENTER = 14;
const NEEDLE_LEN = 9;

export default function LiveWeather() {
  const [data, setData] = useState<{ temp: number; wind: number; dir: number } | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,wind_speed_10m,wind_direction_10m&wind_speed_unit=kn&timezone=auto`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        if (cancelled) return;
        setData({
          temp: Math.round(json.current.temperature_2m),
          wind: Math.round(json.current.wind_speed_10m),
          dir: json.current.wind_direction_10m,
        });
      })
      .catch(() => {
        // decorative flourish only — fail silently, HUD just omits the line
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) return null;

  const compassLabel = COMPASS[Math.round(data.dir / 45) % 8];
  // needle tip as a point, not a rotated group — sidesteps SVG transform-origin
  // inconsistencies across browsers when animating rotation
  const rad = (data.dir * Math.PI) / 180;
  const tipX = CENTER + NEEDLE_LEN * Math.sin(rad);
  const tipY = CENTER - NEEDLE_LEN * Math.cos(rad);

  return (
    <span className="hero-hud-live">
      <svg className="wind-compass" viewBox="0 0 28 28" aria-hidden="true">
        <circle className="wind-compass-ring" cx={CENTER} cy={CENTER} r="12" />
        <line x1={CENTER} y1="2" x2={CENTER} y2="5" />
        <line x1={CENTER} y1="23" x2={CENTER} y2="26" />
        <line x1="2" y1={CENTER} x2="5" y2={CENTER} />
        <line x1="23" y1={CENTER} x2="26" y2={CENTER} />
        <motion.line
          className="wind-compass-needle"
          x1={CENTER}
          y1={CENTER}
          strokeLinecap="round"
          initial={{ x2: CENTER, y2: CENTER }}
          animate={{ x2: tipX, y2: tipY }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 60, damping: 14 }}
        />
        <circle cx={CENTER} cy={CENTER} r="1.4" className="wind-compass-hub" />
      </svg>
      {data.temp}°C · WIND {data.wind}KT {compassLabel}
    </span>
  );
}
