import { cv } from "../data/cvData";
import Section from "../components/Section";

export default function Contact() {
  return (
    <>
      <Section title="Contact">
        <div className="card glowCard">
          <p>
            Email: <a href={`mailto:${cv.email}`}>{cv.email}</a>
          </p>
          <p className="muted">{cv.location}</p>
          <div className="links">
            {cv.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
          <div className="muted small" style={{ marginTop: 10 }}>
            Download: <a href="/cv.pdf" download>cv.pdf</a>
          </div>
        </div>
      </Section>
    </>
  );
}