import Section from "./Section";
import Reveal from "./Reveal";
import ClimateMaps from "./ClimateMaps";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__card">
              <div className="timeline__head">
                <h3>{job.role}</h3>
                <span className="timeline__period">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="timeline__company">
                {job.company} · {job.location}
              </p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tag-row">
                {job.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              {job.company === "SBSF Agritech" && <ClimateMaps />}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
