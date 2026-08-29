import { useEffect, useState } from "react";

const LAT = 12.9165;
const LON = 79.1325;
const COMPASS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

export default function LiveWeather() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,wind_speed_10m,wind_direction_10m&wind_speed_unit=kn&timezone=auto`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (cancelled) return;
        const temp = Math.round(data.current.temperature_2m);
        const wind = Math.round(data.current.wind_speed_10m);
        const dir = COMPASS[Math.round(data.current.wind_direction_10m / 45) % 8];
        setText(`${temp}°C · WIND ${wind}KT ${dir}`);
      })
      .catch(() => {
        // decorative flourish only — fail silently, HUD just omits the line
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!text) return null;
  return <span className="hero-hud-live">{text}</span>;
}
