import { cv } from "../data/cvData";
import Section from "../components/Section";

export default function Publications() {
  return (
    <>
      <Section title="Publications" subtitle="Research + conference work">
        <div className="card glowCard">
          <ul className="pubs">
            {cv.publications.map((p) => (
              <li key={p.title}>
                <div className="pubTitle">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer">{p.title}</a>
                  ) : (
                    p.title
                  )}
                </div>
                <div className="muted">{p.venue}</div>
              </li>
            ))}
          </ul>
          <div className="muted small" style={{ marginTop: 14 }}>
            Tip: add your real links (DOI / publisher / arXiv) into <code>cvData.js</code> when you have them handy.
          </div>
        </div>
      </Section>
    </>
  );
}