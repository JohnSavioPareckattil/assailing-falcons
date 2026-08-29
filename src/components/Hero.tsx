import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import MagneticButton from "./MagneticButton";
import LiveWeather from "./LiveWeather";
import HeroSky from "./HeroSky";
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

  return (
    <section className="hero" id="top" ref={sectionRef}>
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
            style={reduceMotion ? undefined : { y: mediaY, scale: 1.12 }}
          />
        </picture>
      </div>

      <HeroSky />

      <div className="hero-hud">
        <div>
          <span>12.9165° N, 79.1325° E</span>
          <span>VIT Vellore, Tamil Nadu</span>
          <LiveWeather />
        </div>
        <div className="r">
          <span><strong>F'26 · Indra</strong></span>
          <span>Advanced Class · eVTOL Tricopter</span>
        </div>
      </div>

      <div className="hero-body">
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
          VIT Vellore's Advanced Class SAE AeroDesign team. We design, build and fly
          autonomous RC aircraft. No.1 in Asia-Pacific. 1st in Technical Presentation
          worldwide this season with Indra.
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
      </div>

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
