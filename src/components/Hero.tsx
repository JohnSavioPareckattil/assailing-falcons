import { useEffect, useRef, useState, type PointerEvent } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import MagneticButton from "./MagneticButton";
import LiveWeather from "./LiveWeather";
import HeroSky from "./HeroSky";
import NextSeasonCountdown from "./NextSeasonCountdown";
import { useClickSpark } from "./useClickSpark";

const lineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const primarySpark = useClickSpark();
  const secondarySpark = useClickSpark();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // cursor-driven depth: the photo tilts toward the pointer, the HUD/body
  // text drift a couple of px the other way — separates into layers
  // instead of reading as one flat image. Fine pointers only.
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.5 });
  const tiltY = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.5 });
  const mediaRotateX = useTransform(tiltX, [-1, 1], [3.2, -3.2]);
  const mediaRotateY = useTransform(tiltY, [-1, 1], [-3.2, 3.2]);
  const hudShiftX = useTransform(tiltY, [-1, 1], [3, -3]);
  const bodyShiftX = useTransform(tiltY, [-1, 1], [-4, 4]);

  useEffect(() => {
    if (reduceMotion) return;
    setTiltEnabled(window.matchMedia("(pointer: fine)").matches);
  }, [reduceMotion]);

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className="hero"
      id="top"
      ref={sectionRef}
      onPointerMove={tiltEnabled ? handlePointerMove : undefined}
      onPointerLeave={tiltEnabled ? handlePointerLeave : undefined}
      style={tiltEnabled ? { perspective: 1200 } : undefined}
    >
      <div className="hero-media">
        <picture>
          <source
            srcSet="media/aircraft/indra-hero-800.webp 800w, media/aircraft/indra-hero-1600.webp 1600w"
            sizes="100vw"
            type="image/webp"
          />
          <motion.img
            src="media/aircraft/indra-hero-1600.jpg"
            srcSet="media/aircraft/indra-hero-800.jpg 800w, media/aircraft/indra-hero-1600.jpg 1600w"
            sizes="100vw"
            alt="Indra, the team's 2026 flagship aircraft, spotlit on the tarmac at night"
            fetchPriority="high"
            style={
              reduceMotion
                ? undefined
                : {
                    y: mediaY,
                    scale: 1.12,
                    rotateX: tiltEnabled ? mediaRotateX : 0,
                    rotateY: tiltEnabled ? mediaRotateY : 0,
                  }
            }
          />
        </picture>
      </div>

      <HeroSky />

      <motion.div className="hero-hud" style={tiltEnabled ? { x: hudShiftX } : undefined}>
        <div>
          <span>12.9165° N, 79.1325° E</span>
          <span>VIT Vellore, Tamil Nadu</span>
          <LiveWeather />
        </div>
        <div className="r">
          <span className="hero-hud-tag">
            <span className="hud-live-dot" aria-hidden="true" />
            <strong>F'26 · Indra</strong>
          </span>
          <NextSeasonCountdown />
        </div>
      </motion.div>

      <motion.div className="hero-body" style={tiltEnabled ? { x: bodyShiftX } : undefined}>
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          SAE-VIT Student Chapter · Est. 2010
        </motion.p>

        <h1 className="hero-title">
          <motion.span className="line" variants={lineVariants} initial="hidden" animate="show">
            <motion.span variants={wordVariants}>ASSAILING</motion.span>
          </motion.span>
          <motion.span className="line" variants={lineVariants} initial="hidden" animate="show">
            <motion.span className="accent" variants={wordVariants}>FALCONS</motion.span>
          </motion.span>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          VIT Vellore's Advanced Class SAE AeroDesign team. We design, build
          and fly autonomous aircraft engineered to compete with the world's best.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <MagneticButton className="btn btn--primary" href="#indra" onClick={primarySpark.trigger}>
            Meet Indra
            {primarySpark.overlay}
          </MagneticButton>
          <MagneticButton className="btn" href="#sponsor-us" onClick={secondarySpark.trigger}>
            Sponsor us
            {secondarySpark.overlay}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-cue"
        style={reduceMotion ? undefined : { opacity: scrollCueOpacity }}
        aria-hidden="true"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          SCROLL
        </motion.span>
        <motion.span
          className="hero-scroll-cue-line"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
}
