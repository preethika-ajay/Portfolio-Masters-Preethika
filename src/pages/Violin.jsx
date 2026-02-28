import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { cv } from "../data/cvData";
import "../styles/violin.css";

function VideoFrame({ video }) {
  if (!video) return null;

  const title = video.title || "Performance";
  const kind = video.kind;

  let src = "";
  if (kind === "youtube" && video.id) {
    src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`;
  } else if (kind === "vimeo" && video.id) {
    src = `https://player.vimeo.com/video/${video.id}`;
  }

  return (
    <div className="vidFrame">
      <div className="vidTop">
        <div className="vidTitle">{title}</div>
        <div className="vidHint muted">Embedded reel</div>
      </div>

      <div className="vidBody">
        {kind === "mp4" && video.src ? (
          <video className="vid" controls preload="metadata">
            <source src={video.src} />
          </video>
        ) : src ? (
          <iframe
            className="vid"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="vidEmpty">
            <div className="vidEmptyTitle">Add your video link in cvData.js</div>
            <div className="muted small">
              Supports YouTube / Vimeo / local MP4 in <code>public/</code>.
            </div>
          </div>
        )}
      </div>

      <div className="vidGlow" aria-hidden="true" />
      <div className="vidNoise" aria-hidden="true" />
    </div>
  );
}

/** Better-looking hero: violin strings animate + bow shimmer */
function GlowingViolinHero() {
  return (
    <div className="artsHero">
      <motion.div
        className="heroGlass"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="heroGrid">
          <div className="heroLeft">
            <div className="heroKicker">ARTS MODULE</div>
            <div className="heroTitle">Carnatic Violin</div>
            <div className="heroSub muted">
              precision • rhythm • iteration — discipline that transfers to embedded systems & perception.
            </div>

            <div className="heroBadges">
              <span className="heroBadge">Tāla timing</span>
              <span className="heroBadge">Micro-corrections</span>
              <span className="heroBadge">Stage performance</span>
            </div>
          </div>

          <div className="heroRight">
            <motion.div
              className="violinOrb"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            />
            <svg className="violinSvg" viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vgrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffcc66" />
                  <stop offset="50%" stopColor="#ff4fd8" />
                  <stop offset="100%" stopColor="#33f7c8" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Bow shimmer gradient (animated via CSS) */}
                <linearGradient id="bowShimmer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,.45)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>

              {/* body */}
              <path
                d="
                M150 36
                C175 26 190 54 168 70
                C192 90 172 120 150 105
                C128 120 108 90 132 70
                C110 54 125 26 150 36
                Z

                M140 105
                L160 105
                L160 240
                C160 248 140 248 140 240
                Z

                M150 240
                C95 232 72 270 86 318
                C64 348 70 400 110 420
                C124 428 134 440 150 440
                C166 440 176 428 190 420
                C230 400 236 348 214 318
                C228 270 205 232 150 240
                Z

                M110 420
                C74 448 78 522 124 566
                C138 580 146 592 150 592
                C154 592 162 580 176 566
                C222 522 226 448 190 420
                Z
                "
                fill="none"
                stroke="url(#vgrad)"
                strokeWidth="6"
                filter="url(#glow)"
                opacity="0.95"
              />

              {/* bridge */}
              <path
                d="M115 395 C135 380 165 380 185 395"
                fill="none"
                stroke="rgba(255,255,255,.28)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* f-holes */}
              <path
                d="M122 330 C106 346 114 370 130 384 C116 395 120 420 135 428"
                stroke="rgba(0,0,0,.55)"
                strokeWidth="3"
                fill="none"
                opacity="0.65"
              />
              <path
                d="M178 330 C194 346 186 370 170 384 C184 395 180 420 165 428"
                stroke="rgba(0,0,0,.55)"
                strokeWidth="3"
                fill="none"
                opacity="0.65"
              />

              {/* strings (animate glow) */}
              <line className="string s1" x1="142" y1="110" x2="146" y2="650" />
              <line className="string s2" x1="148" y1="110" x2="150" y2="650" />
              <line className="string s3" x1="152" y1="110" x2="154" y2="650" />
              <line className="string s4" x1="158" y1="110" x2="160" y2="650" />

              {/* bow shimmer overlay */}
              <rect className="bowShimmer" x="104" y="300" width="92" height="12" rx="6" fill="url(#bowShimmer)" />
            </svg>
          </div>
        </div>

        <div className="heroNoise" aria-hidden="true" />
      </motion.div>
    </div>
  );
}

/** Bharatanatyam: mandala/mudra-inspired graphic */
function DanceMandalaHero() {
  return (
    <div className="artsHero">
      <motion.div
        className="heroGlass"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="heroGrid">
          <div className="heroLeft">
            <div className="heroKicker">ARTS MODULE</div>
            <div className="heroTitle">Bharatanatyam</div>
            <div className="heroSub muted">
              geometry • balance • expressiveness — structure + improvisation under constraints (like control + ML).
            </div>

            <div className="heroBadges">
              <span className="heroBadge">Rhythmic cycles</span>
              <span className="heroBadge">Precision posture</span>
              <span className="heroBadge">Expressive storytelling</span>
            </div>
          </div>

          <div className="heroRight">
            <motion.div
              className="mandalaWrap"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              <svg className="mandalaSvg" viewBox="0 0 240 240">
                <defs>
                  <linearGradient id="mgrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffcc66" />
                    <stop offset="50%" stopColor="#ff4fd8" />
                    <stop offset="100%" stopColor="#33f7c8" />
                  </linearGradient>
                </defs>

                {/* outer ring */}
                <circle cx="120" cy="120" r="88" fill="none" stroke="url(#mgrad)" strokeWidth="4" opacity=".9" />
                <circle cx="120" cy="120" r="68" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" />

                {/* petal spokes */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const rot = i * 30;
                  return (
                    <g key={i} transform={`translate(120 120) rotate(${rot})`}>
                      <path
                        d="M0 -76 C18 -70 18 -46 0 -36 C-18 -46 -18 -70 0 -76 Z"
                        fill="rgba(255,255,255,.06)"
                        stroke="rgba(255,255,255,.14)"
                      />
                      <circle cx="0" cy="-88" r="3" fill="url(#mgrad)" opacity=".85" />
                    </g>
                  );
                })}

                {/* center “tāla pulse” */}
                <motion.circle
                  cx="120"
                  cy="120"
                  r="10"
                  fill="url(#mgrad)"
                  animate={{ r: [10, 16, 10], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <div className="heroNoise" aria-hidden="true" />
      </motion.div>
    </div>
  );
}

export default function Violin() {
  const [mode, setMode] = useState("violin");

  const violinVideo = useMemo(() => cv.arts?.violin?.video, []);
  const danceVideo = useMemo(() => cv.arts?.dance?.video, []);

  return (
    <div className="pageMotif waveform">
      <div className="artsToggle">
        <button className={`artsTab ${mode === "violin" ? "isOn" : ""}`} onClick={() => setMode("violin")}>
          Violin
        </button>
        <button className={`artsTab ${mode === "dance" ? "isOn" : ""}`} onClick={() => setMode("dance")}>
          Bharatanatyam
        </button>
      </div>

      {mode === "violin" ? <GlowingViolinHero /> : <DanceMandalaHero />}

      <Section title="Arts" subtitle="Training and performance">
        <div className="cards">
          {mode === "violin" && (
            <div className="card glowCard">
              <h3>Performance Reel</h3>
              <p className="muted">
                A short clip capturing tonal control, improvisation, and rhythmic precision.
              </p>
              <VideoFrame video={violinVideo} />
            </div>
          )}

          <div className="card violinCard glowCard">
            <h3>Background</h3>
            <ul className="bullets">
              {cv.extracurriculars.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="card glowCard">
            <h3>How it connects to my engineering</h3>
            <p className="muted">
              Practice is feedback-driven refinement — like tuning control loops, debugging embedded systems,
              and improving perception pipelines. Rhythm builds timing intuition; performance builds calm execution.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}