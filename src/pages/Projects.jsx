import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import "../styles/projects.css";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = cv.projects[active];

  // Optional: keyboard nav (console feel)
  const max = cv.projects.length - 1;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") setActive((v) => Math.min(max, v + 1));
      if (e.key === "ArrowUp") setActive((v) => Math.max(0, v - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [max]);

  const panelVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 10, filter: "blur(2px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -10, filter: "blur(2px)" },
    }),
    []
  );

  return (
    <div className="projPage pageMotif scanline">
      <div className="pageTitle">
        <h1>Projects</h1>
        
      </div>

      <Section>
        <div className="projLab">
          {/* LEFT RAIL */}
          <div className="projRail" role="tablist" aria-label="Project list">
            {cv.projects.map((p, i) => (
              <button
                key={p.name}
                className={`projNode ${i === active ? "isActive" : ""}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
              >
                <span className="projDot" />
                <span className="projNodeText">{p.name}</span>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="projConsole">
            <div className="projScan" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.div
                key={project.name}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="projHeader">
                  <h2>{project.name}</h2>
                  <span className="projStatus">ACTIVE EXPERIMENT</span>
                </div>

                <p className="projDesc">{project.desc}</p>

                <motion.div
                  className="projTags"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.04 } },
                  }}
                >
                  {project.tags.map((t) => (
                    <motion.span
                      key={t}
                      className="projTag"
                      variants={{
                        initial: { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                {project.details && (
                  <ul className="projList">
                    {project.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                <div className="projLinks">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="projGithub"
                    >
                      🚀 View on GitHub
                    </a>
                  )}

                  {project.google && (
                    <a
                      href={project.google}
                      target="_blank"
                      rel="noreferrer"
                      className="projGithub"
                    >
                      📝 View Report
                    </a>
                  )}

                  {project.links?.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="projLink">
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
}