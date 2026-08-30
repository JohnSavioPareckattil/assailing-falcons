import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import CornerFrame from "./CornerFrame";
import LazyImage from "./LazyImage";
import ArcScrubber from "./ArcScrubber";
import KineticHeading from "./KineticHeading";
import { gallery, flightLog, contact, type GalleryItem } from "../data";

const categories: { key: GalleryItem["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "aircraft", label: "Aircraft" },
  { key: "team", label: "Team" },
  { key: "events", label: "Events" },
];

function planeSlugOf(src: string): string {
  const file = src.split("/").pop() ?? "";
  return file.match(/^[a-z]+/)?.[0] ?? file;
}

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem["category"] | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = active === "all" ? gallery : gallery.filter((g) => g.category === active);
  const open = openIndex !== null ? filtered[openIndex] : null;

  const planeGroups = useMemo(() => {
    const map: Record<string, GalleryItem[]> = {};
    gallery.forEach((item) => {
      if (item.category !== "aircraft") return;
      const slug = planeSlugOf(item.src);
      (map[slug] ??= []).push(item);
    });
    return map;
  }, []);

  const planeName = (slug: string) =>
    flightLog.find((e) => e.name.toLowerCase() === slug)?.name ?? slug.toUpperCase();

  const openSlug = open && open.category === "aircraft" ? planeSlugOf(open.src) : null;
  const openGroup = openSlug ? planeGroups[openSlug] : null;
  const openGroupIndex = openGroup && open ? openGroup.findIndex((g) => g.src === open.src) : -1;

  const jumpToGroupIndex = (newIndex: number) => {
    if (!openGroup) return;
    const item = openGroup[(newIndex + openGroup.length) % openGroup.length];
    const idxInFiltered = filtered.findIndex((f) => f.src === item.src);
    if (idxInFiltered !== -1) setOpenIndex(idxInFiltered);
  };

  const select = (key: GalleryItem["category"] | "all") => {
    setActive(key);
    setOpenIndex(null);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight" && openGroup) jumpToGroupIndex(openGroupIndex + 1);
      if (e.key === "ArrowLeft" && openGroup) jumpToGroupIndex(openGroupIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, openGroupIndex]);

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Gallery</p>
            <KineticHeading className="section-title" style={{ marginTop: "0.6rem" }} lines={["The archive"]} />
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
            {filtered.map((item, i) => {
              const groupSize =
                item.category === "aircraft" ? planeGroups[planeSlugOf(item.src)]?.length ?? 1 : 1;
              return (
                <button
                  type="button"
                  key={item.src}
                  className={`gallery-tile${item.wide ? " gallery-tile--wide" : ""}`}
                  onClick={() => setOpenIndex(i)}
                  aria-label={
                    groupSize > 1
                      ? `Open photo: ${item.alt} (${groupSize} photos of this aircraft)`
                      : `Open photo: ${item.alt}`
                  }
                >
                  <LazyImage webp={`${item.src}-800.webp`} src={`${item.src}-800.jpg`} alt={item.alt} />
                  <span className="gallery-tile-glow" aria-hidden="true" />
                  {groupSize > 1 && (
                    <span className="gallery-tile-badge" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <rect x="1.5" y="4.5" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.1" />
                        <path d="M4 4.5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.5" stroke="currentColor" strokeWidth="1.1" />
                      </svg>
                      {groupSize}
                    </span>
                  )}
                </button>
              );
            })}

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
              <LazyImage webp={`${open.src}-1600.webp`} src={`${open.src}-1600.jpg`} alt={open.alt} />

              {openGroup && openGroup.length > 1 && (
                <ArcScrubber
                  count={openGroup.length}
                  index={openGroupIndex}
                  onChange={jumpToGroupIndex}
                  label={planeName(openSlug!)}
                />
              )}

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
