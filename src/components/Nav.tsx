import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#log", label: "Flight Log" },
  { href: "#indra", label: "Indra" },
  { href: "#crew", label: "Crew" },
  { href: "#gallery", label: "Gallery" },
  { href: "#sponsor-us", label: "Sponsor Us" },
  { href: "#contact", label: "Contact Us" },
];

export default function Nav() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const ul = listRef.current;
    if (!wrap || !ul || !active) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const link = ul.querySelector<HTMLAnchorElement>(`a[href="${active}"]`);
    if (!link) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const wrapRect = wrap.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({ left: linkRect.left - wrapRect.left, width: linkRect.width, opacity: 1 });
  }, [active]);

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
      <div className="nav-links-wrap" ref={wrapRef}>
        <ul className="nav-links" ref={listRef}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} aria-current={active === l.href ? "true" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.span
          className="nav-active-indicator"
          aria-hidden="true"
          animate={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", bounce: 0.22, duration: 0.5 }}
        />
      </div>
      <div className="nav-right">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
