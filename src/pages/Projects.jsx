import { useState } from "react";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import "../styles/projects.css";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = cv.projects[active];

  return (
    <div className="projPage pageMotif scanline">
      <div className="pageTitle">
        <h1>Projects</h1>
        <p className="muted">
          Experimental systems spanning robotics, embedded AI, perception and infrastructure.
        </p>
      </div>

      <Section title="Projects" subtitle="Research Lab">
        <div className="projLab">

          {/* LEFT RAIL */}
          <div className="projRail">
            {cv.projects.map((p, i) => (
              <button
                key={p.name}
                className={`projNode ${i === active ? "isActive" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="projDot"/>
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="projConsole">

            <div className="projHeader">
              <h2>{project.name}</h2>
              <span className="projStatus">ACTIVE EXPERIMENT</span>
            </div>

            <p className="projDesc">{project.desc}</p>

            <div className="projTags">
              {project.tags.map((t) => (
                <span key={t} className="projTag">{t}</span>
              ))}
            </div>

            {/* Optional extended fields */}
            {project.details && (
              <ul className="projList">
                {project.details.map((d,i)=>(
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}

            {project.links && (
              <div className="projLinks">
                {project.links.map(l=>(
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            )}

          </div>

        </div>
      </Section>
    </div>
  );
}