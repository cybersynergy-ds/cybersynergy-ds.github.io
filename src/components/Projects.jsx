import { useMemo, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const stacks = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const visible = projects.filter(
    (p) => filter === "All" || p.stack.includes(filter)
  );

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="filters">
        {stacks.map((s) => (
          <button
            key={s}
            className={`filter-chip ${filter === s ? "filter-chip--active" : ""}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08} className="project-card">
            <div className="project-card__body">
              <div className="project-card__head">
                <h3>{p.title}</h3>
                <span className="project-card__period">{p.period}</span>
              </div>
              <p>{p.description}</p>
              <div className="tag-row">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-card__links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FiGithub /> Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live demo
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
