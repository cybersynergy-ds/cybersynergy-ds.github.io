import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="edu-grid">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.1} className="edu-card">
            <h3>{e.school}</h3>
            <p className="edu-card__degree">{e.degree}</p>
            <div className="edu-card__meta">
              <span>{e.period}</span>
              <span>{e.detail}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
