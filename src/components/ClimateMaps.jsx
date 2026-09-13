import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiBox,
} from "react-icons/fi";
import { climateMaps } from "../data/portfolio";

const images = import.meta.glob("../assets/sbsf/*.jpg", {
  eager: true,
  import: "default",
});

function resolveImage(file) {
  const entry = Object.entries(images).find(([path]) => path.endsWith(file));
  return entry ? entry[1] : undefined;
}

const SLIDE_DURATION = 5000;

export default function ClimateMaps() {
  const slides = useMemo(
    () => climateMaps.map((m) => ({ ...m, src: resolveImage(m.file) })),
    []
  );
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    if (open || paused || slides.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearInterval(id);
  }, [open, paused, slides.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, slides.length]);

  const active = slides[index];
  if (!active) return null;

  return (
    <div className="climate">
      <div className="climate__intro">
        <h4>Climate Data Lake — 2025 Snapshot</h4>
        <p>
          Six environmental layers pulled from the ERA5-Land data lake built
          during this internship — hundreds of gigabytes of hourly reanalysis
          data reduced to simple, decision-ready maps. Click any map to see
          what it's used for.
        </p>
      </div>

      <div
        className="climate__stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          className="climate__frame"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${active.title} map`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.src}
              alt={`${active.title} map`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="climate__caption">
            <span>{active.title}</span>
            <span className="climate__metric">{active.metric}</span>
          </div>
        </button>

        <div className="climate__dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`climate__dot ${
                i === index ? "climate__dot--active" : ""
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.title} map`}
            />
          ))}
        </div>
      </div>

      <div className="climate__three-d">
        {!show3d ? (
          <button
            type="button"
            className="climate__three-d-cta"
            onClick={() => setShow3d(true)}
          >
            <FiBox />
            <span>
              <strong>Explore in 3D:</strong> Elevation vs. Temperature
              <small>Drag to rotate · scroll to zoom · click to load</small>
            </span>
          </button>
        ) : (
          <div className="climate__three-d-frame">
            <div className="climate__three-d-head">
              <span>Elevation vs. Temperature — interactive 3D</span>
              <button
                type="button"
                className="climate__three-d-close"
                onClick={() => setShow3d(false)}
                aria-label="Close 3D model"
              >
                <FiX />
              </button>
            </div>
            <iframe
              src="/models/elevation-temperature-3d.html"
              title="Elevation vs Temperature 3D model"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="climate__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="climate__modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="climate__close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <FiX />
              </button>

              <div className="climate__modal-image">
                <img src={active.src} alt={`${active.title} map enlarged`} />
                <button
                  type="button"
                  className="climate__nav climate__nav--prev"
                  onClick={() =>
                    setIndex((i) => (i - 1 + slides.length) % slides.length)
                  }
                  aria-label="Previous map"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  className="climate__nav climate__nav--next"
                  onClick={() => setIndex((i) => (i + 1) % slides.length)}
                  aria-label="Next map"
                >
                  <FiChevronRight />
                </button>
              </div>

              <div className="climate__modal-body">
                <h4>{active.title}</h4>
                <p className="climate__modal-metric">{active.metric}</p>

                <ul className="climate__points">
                  {active.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
