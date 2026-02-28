import { useMemo, useState } from "react";
import Section from "../components/Section";
import { cv } from "../data/cvData";
import "../styles/education.css";

function Tag({ children }) {
  return <span className="eduTag">{children}</span>;
}

export default function Education() {
  const [open, setOpen] = useState(() => new Set(["TU Delft"]));

  const items = useMemo(() => {
    // Expecting cv.education to be like:
    // [{ school, dates, degree, details: [], highlights: [], courses: [] }, ...]
    // We'll gracefully fallback if fields don't exist.
    return (cv.education ?? []).map((e) => ({
      ...e,
      details: e.details ?? [],
      highlights: e.highlights ?? [],
      courses: e.courses ?? [],
      tags: e.tags ?? [],
    }));
  }, []);

  const toggle = (school) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(school)) next.delete(school);
      else next.add(school);
      return next;
    });
  };

  return (
    <div className="eduPage">
      <Section
        title="Education"
        subtitle="A research-notebook timeline of where I studied and what I focused on."
      >
        <div className="eduNotebook">
          <div className="eduNotebookHeader">
            <div className="eduNotebookKicker">Notebook</div>
            <div className="eduNotebookTitle">Academic Timeline</div>
            <div className="eduNotebookSub">
              Click any entry to expand details (courses, focus areas, achievements).
            </div>
          </div>

          <div className="eduTimeline">
            <div className="eduRail" aria-hidden="true" />

            <div className="eduEntries">
              {items.map((e, idx) => {
                const isOpen = open.has(e.school);
                return (
                  <div className="eduEntryWrap" key={e.school}>
                    <div className="eduDotWrap" aria-hidden="true">
                      <div className={`eduDot ${isOpen ? "isOn" : ""}`} />
                      <div className="eduDotGlow" />
                    </div>

                    <button
                      type="button"
                      className={`eduCard ${isOpen ? "isOpen" : ""}`}
                      onClick={() => toggle(e.school)}
                    >
                      <div className="eduCardTop">
                        <div>
                          <div className="eduSchool">{e.school}</div>
                          <div className="eduDegree">{e.degree}</div>
                        </div>

                        <div className="eduRight">
                          <div className="eduDates">{e.dates}</div>
                          <div className="eduChevron">{isOpen ? "—" : "+"}</div>
                        </div>
                      </div>

                      {(e.tags?.length ?? 0) > 0 && (
                        <div className="eduTags">
                          {e.tags.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>
                      )}

                      <div className="eduInkRule" aria-hidden="true" />

                      <div className={`eduExpand ${isOpen ? "isOpen" : ""}`}>
                        {e.details.length > 0 && (
                          <div className="eduBlock">
                            <div className="eduBlockTitle">Focus</div>
                            <ul className="eduList">
                              {e.details.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {e.highlights.length > 0 && (
                          <div className="eduBlock">
                            <div className="eduBlockTitle">Highlights</div>
                            <ul className="eduList">
                              {e.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {e.courses.length > 0 && (
                          <div className="eduBlock">
                            <div className="eduBlockTitle">Selected courses</div>
                            <div className="eduPills">
                              {e.courses.map((c) => (
                                <span className="eduPill" key={c}>
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* graceful fallback if no extra fields */}
                        {e.details.length === 0 &&
                          e.highlights.length === 0 &&
                          e.courses.length === 0 && (
                            <div className="eduMuted">
                              Add details/courses/highlights in <code>cvData</code> to show more here.
                            </div>
                          )}
                      </div>

                      <div className="eduPaperNoise" aria-hidden="true" />
                      <div className="eduMarginRed" aria-hidden="true" />
                      <div className="eduStamp" aria-hidden="true">
                        {idx === 0 ? "MSc" : "BTech"}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}