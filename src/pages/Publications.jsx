import { useMemo, useState } from "react";
import Section from "../components/Section";
import { cv } from "../data/cvData";
import "../styles/publications.css";

import { FiExternalLink, FiCopy, FiFileText, FiX, FiBookOpen } from "react-icons/fi";
import { FaRegFilePdf, FaMedal } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

function BadgeIcon({ kind }) {
  const props = { className: "pubBadgeIcon" };
  if (kind === "conference") return <HiOutlinePresentationChartLine {...props} />;
  if (kind === "journal") return <BsFillJournalBookmarkFill {...props} />;
  if (kind === "award") return <FaMedal {...props} />;
  return <FiBookOpen {...props} />;
}

function ieeeFormat(p) {
  // Minimal IEEE-ish formatting (you control strings in cvData).
  // Example output: "P. A. Kumar et al., “Title,” Venue, City, Country, Year. DOI: ..."
  const authors = p.authors ? p.authors : "";
  const title = p.title ? `“${p.title},”` : "";
  const venue = p.venue ? p.venue : "";
  const where = [p.location, p.year].filter(Boolean).join(", ");
  const doi = p.doi ? ` DOI: ${p.doi}` : "";
  const arxiv = p.arxiv ? ` arXiv: ${p.arxiv}` : "";
  return [authors, title, venue, where ? `${where}.` : "", `${doi}${arxiv}`]
    .filter(Boolean)
    .join(" ");
}

function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="pubModalBackdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="pubModal">
        <div className="pubModalTop">
          <div className="pubModalTitle">{title}</div>
          <button className="pubIconBtn" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </div>
        <div className="pubModalBody">{children}</div>
      </div>
    </div>
  );
}

export default function Publications() {
  const pubs = useMemo(() => cv.publications ?? [], []);

  const grouped = useMemo(() => {
    const acc = {};
    for (const p of pubs) {
      const y = p.year ?? "Other";
      (acc[y] ??= []).push(p);
    }
    // Sort within year: newest first if month/venue ordering not provided
    for (const y of Object.keys(acc)) {
      acc[y] = acc[y].slice().sort((a, b) => {
        const ay = a.year ?? 0;
        const by = b.year ?? 0;
        return by - ay;
      });
    }
    return acc;
  }, [pubs]);

  const years = useMemo(
    () => Object.keys(grouped).sort((a, b) => (a === "Other" ? 1 : b === "Other" ? -1 : Number(b) - Number(a))),
    [grouped]
  );

  const [toast, setToast] = useState("");
  const [bibOpen, setBibOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [activePub, setActivePub] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 1600);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied!");
    } catch {
      showToast("Couldn’t copy (browser blocked).");
    }
  };

  const openBib = (p) => {
    setActivePub(p);
    setBibOpen(true);
  };

  const openPdf = (p) => {
    setActivePub(p);
    setPdfOpen(true);
  };

  return (
    <div className="pubPage pageMotif">
      <div className="pageTitle">
        <h1>Publications</h1>
      </div>

      <Section>
        <div className="pubArchive">
          <div className="pubArchiveHead">
            <div className="pubKicker">Archive</div>
            <div className="pubHeadTitle">Peer-Reviewed & Conference Work</div>
            <div className="pubHeadSub muted">
              Hover for quick actions. Use <span className="pubMono">Cite</span> to copy BibTeX.
            </div>
          </div>

          {years.map((year) => (
            <div className="pubYearBlock" key={year}>
              <div className="pubYear">{year}</div>

              <div className="pubList">
                {grouped[year].map((p) => {
                  const ieee = ieeeFormat(p);
                  const hasBib = Boolean(p.bibtex);
                  const hasPdf = Boolean(p.pdf);
                  const hasHref = Boolean(p.href);

                  return (
                    <article className="pubItem" key={p.title}>
                      <div className="pubLeft">
                        <div className="pubBadges">
                          {p.kind ? (
                            <span className={`pubBadge kind-${p.kind}`}>
                              <BadgeIcon kind={p.kind} />
                              <span className="pubBadgeText">{p.kind}</span>
                            </span>
                          ) : null}

                          {p.badges?.map((b) => (
                            <span className={`pubBadge kind-${b.kind || "note"}`} key={b.label}>
                              <BadgeIcon kind={b.kind} />
                              <span className="pubBadgeText">{b.label}</span>
                            </span>
                          ))}
                        </div>

                        <div className="pubTitleRow">
                          <div className="pubTitle">
                            {hasHref ? (
                              <a href={p.href} target="_blank" rel="noreferrer">
                                {p.title} <FiExternalLink className="pubExt" />
                              </a>
                            ) : (
                              p.title
                            )}
                          </div>
                        </div>

                        <div className="pubIEEE">{ieee}</div>

                        {/* Quick row (hover) */}
                        <div className="pubQuick">
                          <div className="pubMetrics">
                            {typeof p.citations === "number" ? (
                              <span className="pubMetric">
                                <span className="pubMetricNum">{p.citations}</span>
                                <span className="pubMetricLbl">citations</span>
                              </span>
                            ) : null}
                            {typeof p.downloads === "number" ? (
                              <span className="pubMetric">
                                <span className="pubMetricNum">{p.downloads}</span>
                                <span className="pubMetricLbl">downloads</span>
                              </span>
                            ) : null}
                            {p.award ? (
                              <span className="pubMetric">
                                <span className="pubMetricNum">★</span>
                                <span className="pubMetricLbl">{p.award}</span>
                              </span>
                            ) : null}
                          </div>

                          <div className="pubActions">
                            {hasBib ? (
                              <button className="pubBtn" onClick={() => openBib(p)}>
                                <FiFileText /> BibTeX
                              </button>
                            ) : null}

                            {hasBib ? (
                              <button className="pubBtn" onClick={() => copyText(p.bibtex)}>
                                <FiCopy /> Cite
                              </button>
                            ) : null}

                            {hasPdf ? (
                              <button className="pubBtn" onClick={() => openPdf(p)}>
                                <FaRegFilePdf /> PDF
                              </button>
                            ) : null}

                            {p.doi ? (
                              <button className="pubBtn" onClick={() => copyText(p.doi)}>
                                <FiCopy /> DOI
                              </button>
                            ) : null}
                          </div>
                        </div>

                        {p.abstract ? <div className="pubAbstract">{p.abstract}</div> : null}

                        {p.tags?.length ? (
                          <div className="pubTags">
                            {p.tags.map((t) => (
                              <span className="pubTag" key={t}>
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      {/* Right-side “mini panel” */}
                      <div className="pubRight">
                        <div className="pubMeta">
                          {p.venue ? <div className="pubMetaRow">{p.venue}</div> : null}
                          {p.location ? <div className="pubMetaRow muted">{p.location}</div> : null}
                          {p.doi ? <div className="pubMetaRow pubMono">DOI: {p.doi}</div> : null}
                          {p.arxiv ? <div className="pubMetaRow pubMono">arXiv: {p.arxiv}</div> : null}
                        </div>

                        <div className="pubRightBtns">
                          {hasBib ? (
                            <button className="pubIconBtn" onClick={() => openBib(p)} title="View BibTeX">
                              <FiFileText />
                            </button>
                          ) : null}
                          {hasPdf ? (
                            <button className="pubIconBtn" onClick={() => openPdf(p)} title="Preview PDF">
                              <FaRegFilePdf />
                            </button>
                          ) : null}
                          {hasHref ? (
                            <a className="pubIconBtn" href={p.href} target="_blank" rel="noreferrer" title="Open link">
                              <FiExternalLink />
                            </a>
                          ) : null}
                        </div>
                      </div>

                      <div className="pubNoise" aria-hidden="true" />
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pubHint muted">
            Tip: add <span className="pubMono">bibtex</span>, <span className="pubMono">doi</span>,{" "}
            <span className="pubMono">pdf</span>, <span className="pubMono">citations</span> in <code>cvData.js</code>.
          </div>
        </div>
      </Section>

      {/* Toast */}
      {toast ? <div className="pubToast">{toast}</div> : null}

      {/* BibTeX Modal */}
      <Modal open={bibOpen} title="BibTeX" onClose={() => setBibOpen(false)}>
        {activePub?.bibtex ? (
          <>
            <div className="pubModalActions">
              <button className="pubBtn" onClick={() => copyText(activePub.bibtex)}>
                <FiCopy /> Copy BibTeX
              </button>
            </div>
            <pre className="pubBibtex">{activePub.bibtex}</pre>
          </>
        ) : (
          <div className="muted">No BibTeX provided for this entry.</div>
        )}
      </Modal>

      {/* PDF Preview Modal */}
      <Modal open={pdfOpen} title="PDF Preview" onClose={() => setPdfOpen(false)}>
        {activePub?.pdf ? (
          <div className="pubPdfWrap">
            <iframe title="PDF Preview" src={activePub.pdf} className="pubPdf" />
          </div>
        ) : (
          <div className="muted">No PDF link provided for this entry.</div>
        )}
      </Modal>
    </div>
  );
}