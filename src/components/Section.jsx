import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section__inner">
        <Reveal>
          <header className="section__header">
            {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
            <h2 className="section__title">{title}</h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
