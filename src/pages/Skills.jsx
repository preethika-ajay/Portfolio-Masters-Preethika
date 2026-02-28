import { cv } from "../data/cvData";
import Section from "../components/Section";

export default function Skills() {
  return (
    <>
      <Section title="Skills" subtitle="Grouped for quick scanning">
        <div className="cards">
          {Object.entries(cv.skills).map(([k, vals]) => (
            <div className="card glowCard" key={k}>
              <h3>{k}</h3>
              <div className="pills">
                {vals.map((v) => <span className="pill" key={v}>{v}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}