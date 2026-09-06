import Section from "./Section";
import Reveal from "./Reveal";
import { summary, achievements } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <Reveal>
        <p className="about__summary">{summary}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="about__achievements">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
