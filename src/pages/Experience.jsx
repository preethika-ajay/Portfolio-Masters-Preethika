import { useMemo, useState } from "react";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import "../styles/experience.css";

import { FaRobot, FaCameraRetro, FaFlask, FaServer, FaLock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ThemeIcon({ theme }) {
  const props = { className: "xpGlyph" };
  if (theme === "robot") return <FaRobot {...props} />;
  if (theme === "vision") return <FaCameraRetro {...props} />;
  if (theme === "research") return <FaFlask {...props} />;
  if (theme === "security") return <FaLock {...props} />;
  return <FaServer {...props} />;
}

function normalizeExp(x) {
  return {
    ...x,
    theme: x.theme ?? "systems",
    bullets: x.bullets ?? [],
    highlight: x.highlight ?? "",
    stack: x.stack ?? [],
    artifacts: x.artifacts ?? [], // [{label, href}]
    impact: x.impact ?? [],       // optional separate bullets
  };
}

export default function Experience() {
  const items = useMemo(() => (cv.experience ?? []).map(normalizeExp), []);
  const [open, setOpen] = useState(() => (items[0] ? new Set([keyOf(items[0])]) : new Set()));

  function keyOf(x) {
    return `${x.org}__${x.role}__${x.dates}`;
  }

  function toggle(id) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="xpPage pageMotif scanline">
      <div className="pageTitle">
        <h1>Experience</h1>
        <p className="muted">
          {/* Mission-log timeline of engineering + research work across systems, security, vision, and robotics. */}
        </p>
      </div>

      <Section>
        <div className="xpMission">
          <div className="xpHeader">
            <div className="xpKicker">Mission Control</div>
            <div className="xpTitle">Flight Log</div>
            <div className="xpSub muted">Click a mission to expand: impact, stack, artifacts.</div>
          </div>

          <div className="xpTimeline">
            <div className="xpRail" aria-hidden="true" />

            <div className="xpEntries">
              {items.map((x, idx) => {
                const id = keyOf(x);
                const isOpen = open.has(id);

                return (
                  <article className={`xpEntry theme-${x.theme}`} key={id}>
                    <div className="xpDotCol" aria-hidden="true">
                      <div className={`xpDot ${isOpen ? "isOn" : ""}`} />
                      <div className="xpDotGlow" />
                      {idx < items.length - 1 ? <div className="xpStem" /> : null}
                    </div>

                    <button
                      type="button"
                      className={`xpCard ${isOpen ? "isOpen" : ""}`}
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                    >
                      <div className="xpTop">
                        <div className="xpLeft">
                          <div className="xpRoleRow">
                            <span className="xpIconChip" aria-hidden="true">
                              <ThemeIcon theme={x.theme} />
                            </span>
                            <div>
                              <div className="xpRole">{x.role}</div>
                              <div className="xpOrg muted">{x.org}</div>
                            </div>
                          </div>
                        </div>

                        <div className="xpRight">
                          <div className="xpDates">{x.dates}</div>
                          {x.location ? <div className="xpLoc muted">{x.location}</div> : null}
                          <div className="xpExpandBtn" aria-hidden="true">
                            {isOpen ? "—" : "+"}
                          </div>
                        </div>
                      </div>

                      {x.highlight ? <div className="xpHighlight">{x.highlight}</div> : null}

                      {/* Compact preview bullets (always visible) */}
                      {/* {x.bullets?.length ? (
                        <ul className="xpPreview">
                          {x.bullets.slice(0, 2).map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      ) : null} */}

                      <div className="xpRule" aria-hidden="true" />

                      <div className={`xpExpand ${isOpen ? "isOpen" : ""}`}>
                        {/* Impact */}
                        {(x.impact?.length || x.bullets?.length) ? (
                          <div className="xpBlock">
                            <div className="xpBlockTitle">Impact</div>
                            <ul className="xpList">
                              {(x.impact?.length ? x.impact : x.bullets).map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {/* Stack */}
                        {x.stack?.length ? (
                          <div className="xpBlock">
                            <div className="xpBlockTitle">Stack</div>
                            <div className="xpPills">
                              {x.stack.map((s) => (
                                <span className="xpPill" key={s}>
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {/* Artifacts */}
                        {x.artifacts?.length ? (
                          <div className="xpBlock">
                            <div className="xpBlockTitle">Artifacts</div>
                            <div className="xpLinks">
                              {x.artifacts.map((a) => (
                                <a
                                  key={a.href + a.label}
                                  href={a.href}
                                  className="xpLink"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span>{a.label}</span>
                                  <FiExternalLink />
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {/* fallback */}
                        {!x.stack?.length && !x.artifacts?.length && !x.bullets?.length && (
                          <div className="xpMuted">
                            Add <code>bullets</code>, <code>stack</code>, or <code>artifacts</code> in{" "}
                            <code>cvData</code> for this entry.
                          </div>
                        )}
                      </div>

                      <div className="xpNoise" aria-hidden="true" />
                      <div className="xpScan" aria-hidden="true" />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}