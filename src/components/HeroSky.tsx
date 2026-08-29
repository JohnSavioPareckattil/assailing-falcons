import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Star = { x: number; y: number; r: number; base: number; speed: number; phase: number };

const PALETTES = {
  dark: { core: "241, 236, 223", blend: "screen" as const },
  light: { core: "18, 20, 15", blend: "multiply" as const },
};

const STAR_COUNT = 110;

function readTheme(): "dark" | "light" {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function HeroSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let theme = readTheme();

    const applyThemeToCanvas = () => {
      canvas.style.mixBlendMode = PALETTES[theme].blend;
    };
    applyThemeToCanvas();

    const buildScene = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.72,
        r: 0.4 + Math.random() * 1.3,
        base: 0.15 + Math.random() * 0.65,
        speed: 0.4 + Math.random() * 1.1,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    buildScene();
    window.addEventListener("resize", buildScene);

    const drawStatic = () => {
      const pal = PALETTES[theme];
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pal.core}, ${s.base})`;
        ctx.fill();
      }
    };

    const observer = new MutationObserver(() => {
      theme = readTheme();
      applyThemeToCanvas();
      if (reduceMotion) drawStatic();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onMediaChange = () => {
      theme = readTheme();
      applyThemeToCanvas();
      if (reduceMotion) drawStatic();
    };
    media.addEventListener("change", onMediaChange);

    if (reduceMotion) {
      drawStatic();
      return () => {
        window.removeEventListener("resize", buildScene);
        observer.disconnect();
        media.removeEventListener("change", onMediaChange);
      };
    }

    const tick = (time: number) => {
      const pal = PALETTES[theme];
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const a = s.base + Math.sin(time / 1000 / s.speed + s.phase) * 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pal.core}, ${Math.max(0.05, a)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", buildScene);
      observer.disconnect();
      media.removeEventListener("change", onMediaChange);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="hero-sky" aria-hidden="true" />;
}
