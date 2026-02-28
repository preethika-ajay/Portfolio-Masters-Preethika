import { useEffect, useMemo, useState } from "react";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import "../styles/achievements.css";

import { FaMedal, FaTrophy, FaStar, FaAward } from "react-icons/fa";

function pickIcon(text) {
  const t = (text || "").toLowerCase();
  if (t.includes("gold") || t.includes("medal") || t.includes("medallist")) return "medal";
  if (t.includes("award") || t.includes("winner") || t.includes("won")) return "trophy";
  if (t.includes("scholar") || t.includes("scholarship")) return "award";
  return "star";
}

function Icon({ kind }) {
  const props = { className: "achGlyph", "aria-hidden": true };
  if (kind === "medal") return <FaMedal {...props} />;
  if (kind === "trophy") return <FaTrophy {...props} />;
  if (kind === "award") return <FaAward {...props} />;
  return <FaStar {...props} />;
}

function useCountUp(target, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

export default function Achievements() {
  const items = useMemo(
    () =>
      (cv.achievements ?? []).map((text, idx) => ({
        id: `${idx}-${text.slice(0, 16)}`,
        text,
        kind: pickIcon(text),
      })),
    []
  );

  const total = items.length;
  const shown = useCountUp(total);

  return (
    <div className="achPage pageMotif scanline">
      <div className="pageTitle">
        <h1>Achievements</h1>
      </div>

      <Section>
        <div className="achShell">
          <div className="achTop">
            <div>
              <div className="achTitle">Milestones & Recognition</div>
            </div>

            <div className="achCounter" aria-label={`Total achievements: ${total}`}>
              <div className="achCounterNum">{shown}</div>
              <div className="achCounterLbl">Achievements</div>
            </div>
          </div>

          <div className="achGrid">
            {items.map((a, i) => (
              <div className="achCard" key={a.id} style={{ animationDelay: `${i * 60}ms` }}>
                <div className="achIconChip">
                  <Icon kind={a.kind} />
                </div>

                <div className="achText">{a.text}</div>

                <div className="achShine" aria-hidden="true" />
                <div className="achNoise" aria-hidden="true" />
              </div>
            ))}
          </div>

        </div>
      </Section>
    </div>
  );
}