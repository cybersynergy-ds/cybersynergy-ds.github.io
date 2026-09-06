import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.06} className="skills-card">
            <h3>{category}</h3>
            <div className="tag-row">
              {items.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
