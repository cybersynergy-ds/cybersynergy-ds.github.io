import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from "react-icons/fi";
import { profile } from "../data/portfolio";

const heroImages = Object.values(
  import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const SLIDE_DURATION = 6000;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroImages.length),
      SLIDE_DURATION
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero__image" style={{ y: imageY }} aria-hidden="true">
        <AnimatePresence>
          <motion.div
            key={slide}
            className="hero__image-layer"
            style={{ backgroundImage: `url(${heroImages[slide]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="hero__bg" aria-hidden="true" />
      <motion.div
        className="hero__content"
        style={{ y: contentY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="hero__quote">
          {profile.quoteLines[0]}
          <br />
          {profile.quoteLines[1]}
        </h1>
        <p className="hero__intro">
          I'm {profile.name} — on my journey to becoming a skilled{" "}
          {profile.title}. {profile.tagline}
        </p>

        <div className="hero__cta">
          <a className="btn btn--ghost" href="#projects">
            View Projects
          </a>
        </div>

        <div className="hero__socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll-cue"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiChevronDown />
      </motion.a>
    </section>
  );
}
