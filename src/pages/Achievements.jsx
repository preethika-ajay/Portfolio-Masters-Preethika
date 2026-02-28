import { cv } from "../data/cvData";
import Section from "../components/Section";

export default function Achievements() {
  return (
    <>
      <Section title="Achievements">
        <div className="card glowCard">
          <ul className="bullets">
            {cv.achievements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </Section>
    </>
  );
}