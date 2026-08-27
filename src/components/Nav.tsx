import { motion } from "motion/react";

const links = [
  { href: "#log", label: "Flight Log" },
  { href: "#indra", label: "Indra" },
  { href: "#crew", label: "Crew" },
  { href: "#gallery", label: "Gallery" },
  { href: "#sponsor-us", label: "Sponsor Us" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <a className="nav-mark" href="#top">
        <img src="media/brand/mark.png" alt="" />
        <span>ASSAILING FALCONS</span>
      </a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <span className="nav-tail">F'26 · INDRA</span>
    </motion.header>
  );
}
