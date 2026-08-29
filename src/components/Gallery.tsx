import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";
import { gallery, contact, type GalleryItem } from "../data";

const categories: { key: GalleryItem["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "aircraft", label: "Aircraft" },
  { key: "team", label: "Team" },
  { key: "events", label: "Events" },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem["category"] | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = active === "all" ? gallery : gallery.filter((g) => g.category === active);
  const open = openIndex !== null ? filtered[openIndex] : null;

  const select = (key: GalleryItem["category"] | "all") => {
    setActive(key);
    setOpenIndex(null);
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="section-title" style={{ marginTop: "0.6rem" }}>
              The archive
            </h2>
          </div>
          <div className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={active === c.key}
                className={`gallery-filter${active === c.key ? " is-active" : ""}`}
                onClick={() => select(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <button
                type="button"
                key={item.src}
                className={`gallery-tile${item.wide ? " gallery-tile--wide" : ""}`}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${item.alt}`}
              >
                <picture>
                  <source srcSet={`${item.src}-800.webp`} type="image/webp" />
                  <img src={`${item.src}-800.jpg`} loading="lazy" alt={item.alt} />
                </picture>
                <span className="gallery-tile-glow" aria-hidden="true" />
              </button>
            ))}

            <a
              className="gallery-tile gallery-tile--video"
              href={contact.youtubeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="gallery-video-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" />
                </svg>
              </span>
              <span className="gallery-video-label">
                Watch flight footage
                <small>on YouTube ↗</small>
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.figure
              className="lightbox-frame"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.15, ease: "easeIn" } }}
              onClick={(e) => e.stopPropagation()}
            >
              <CornerFrame />
              <picture>
                <source srcSet={`${open.src}-1600.webp`} type="image/webp" />
                <img src={`${open.src}-1600.jpg`} alt={open.alt} />
              </picture>
              <figcaption>{open.alt}</figcaption>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setOpenIndex(null)}
                aria-label="Close photo"
              >
                ✕
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
