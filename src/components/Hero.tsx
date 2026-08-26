import { motion } from "motion/react";

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
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img
          src="/media/aircraft/vidhyut-hero-1600.jpg"
          srcSet="/media/aircraft/vidhyut-hero-800.jpg 800w, /media/aircraft/vidhyut-hero-1600.jpg 1600w"
          sizes="100vw"
          alt="Vidhyut, the team's 2025 flagship aircraft, spotlit on the tarmac at night"
          fetchPriority="high"
        />
      </div>

      <div className="hero-hud">
        <div>
          <span>12.9165° N, 79.1325° E</span>
          <span>VIT Vellore, Tamil Nadu</span>
        </div>
        <div className="r">
          <span><strong>Advanced Class</strong></span>
          <span>SAE AeroDesign</span>
        </div>
      </div>

      <div className="hero-body">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Team · Est. 2010 · SAE-VIT Student Chapter
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
          autonomous RC aircraft — number 1 in Asia for nine straight years, third in
          the world this year.
        </motion.p>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          #SkyboundIngenuity
        </motion.p>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="stem" />
        Scroll
      </motion.div>
    </section>
  );
}
