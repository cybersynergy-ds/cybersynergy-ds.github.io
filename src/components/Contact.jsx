import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <Reveal>
        <p className="contact__lead">
          Open to Data Engineering roles and interesting collaborations.
          Reach out — I usually reply within a day.
        </p>
        <div className="contact__grid">
          <a className="contact__item" href={`mailto:${profile.email}`}>
            <FiMail />
            <span>{profile.email}</span>
          </a>
          <a
            className="contact__item"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            className="contact__item"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
