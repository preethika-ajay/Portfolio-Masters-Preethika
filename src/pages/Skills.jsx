import { useState } from "react";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import "../styles/skills.css";

export default function Skills() {

  const categories = Object.keys(cv.skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="skillsPage pageMotif scanline">

      <div className="pageTitle">
        <h1>Skills</h1>
        <p className="muted">
          System capabilities across embedded systems, vision, research and software engineering.
        </p>
      </div>

      <Section title="Skills" subtitle="Capability Matrix">

        <div className="skillsConsole">

          {/* LEFT CATEGORY RAIL */}
          <div className="skillsRail">
            {categories.map((c) => (
              <button
                key={c}
                className={`skillsNode ${active === c ? "isActive" : ""}`}
                onClick={() => setActive(c)}
              >
                <span className="skillsDot" />
                {c}
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="skillsPanel">

            <div className="skillsHeader">
              <h2>{active}</h2>
              <span className="skillsStatus">ACTIVE MODULE</span>
            </div>

            <div className="skillsDesc">
              {cv.skillsMeta?.[active]}
            </div>

            <div className="skillsGrid">
              {cv.skills[active].map((skill) => (
                <div className="skillChip" key={skill}>
                  {skill}
                </div>
              ))}
            </div>

          </div>

        </div>

      </Section>
    </div>
  );
}