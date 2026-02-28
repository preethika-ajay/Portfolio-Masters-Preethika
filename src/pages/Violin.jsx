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
              precision • rhythm • iteration : lessons from music that translate into careful engineering and iterative system
              design with over <b>12 years of training and practice</b>.
            </div>

            <div className="heroBadges">
              <span className="heroBadge">Raga : Structure</span>
              <span className="heroBadge">Taala : Rhythm</span>
              <span className="heroBadge">Laya : Flow</span>
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
              geometry • balance • expressiveness : <b>4 years of training and practice</b>
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

/** Paintings: brushstroke + canvas vibe */
function PaintingsCanvasHero() {
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
            <div className="heroTitle">Paintings</div>
            <div className="heroSub muted">
              Translating observation into structure.
            </div>

            <div className="heroBadges">
              <span className="heroBadge">Light & shadow</span>
              <span className="heroBadge">Texture</span>
              <span className="heroBadge">Story in frames</span>
            </div>
          </div>

          <div className="heroRight">
            <motion.div
              className="mandalaWrap"
              animate={{ rotate: 360 }}
              transition={{ duration: 36, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            >
              <svg className="mandalaSvg" viewBox="0 0 240 240">
                <defs>
                  <linearGradient id="pgrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffcc66" />
                    <stop offset="50%" stopColor="#ff4fd8" />
                    <stop offset="100%" stopColor="#33f7c8" />
                  </linearGradient>
                  <filter id="pglow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* “canvas” frame */}
                <rect x="46" y="46" width="148" height="148" rx="18" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.14)" />
                <rect x="58" y="58" width="124" height="124" rx="14" fill="rgba(0,0,0,.22)" stroke="rgba(255,255,255,.10)" />

                {/* brush strokes */}
                <path
                  d="M70 132 C92 98 122 94 152 116 C170 128 178 154 160 170 C138 188 98 178 82 154 C74 142 72 138 70 132 Z"
                  fill="none"
                  stroke="url(#pgrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="url(#pglow)"
                  opacity="0.95"
                />
                <path
                  d="M78 154 C96 138 118 132 148 140"
                  fill="none"
                  stroke="rgba(255,255,255,.18)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <motion.circle
                  cx="120"
                  cy="120"
                  r="7"
                  fill="url(#pgrad)"
                  animate={{ r: [7, 12, 7], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
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

/** Travel: orbiting “atlas” + route arcs */
function TravelAtlasHero() {
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
            <div className="heroTitle">Travel</div>
            <div className="heroSub muted">
              curiosity • navigation • perspective : learning systems by walking through new constraints.
            </div>

            <div className="heroBadges">
              <span className="heroBadge">Maps & routes</span>
              <span className="heroBadge">Photography</span>
              <span className="heroBadge">New perspectives</span>
            </div>
          </div>

          <div className="heroRight">
            <motion.div
              className="violinOrb"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            />
            <svg className="violinSvg" viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="tgrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffcc66" />
                  <stop offset="50%" stopColor="#ff4fd8" />
                  <stop offset="100%" stopColor="#33f7c8" />
                </linearGradient>
                <filter id="tglow">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* globe */}
              <circle cx="150" cy="330" r="120" fill="rgba(0,0,0,.20)" stroke="url(#tgrad)" strokeWidth="6" filter="url(#tglow)" opacity="0.95" />
              <circle cx="150" cy="330" r="86" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="2" />
              <ellipse cx="150" cy="330" rx="120" ry="46" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="2" />
              <ellipse cx="150" cy="330" rx="56" ry="120" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="2" />

              {/* route arcs */}
              <path
                d="M70 320 C120 250 180 250 230 320"
                fill="none"
                stroke="rgba(255,255,255,.22)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M86 368 C130 410 170 410 214 368"
                fill="none"
                stroke="rgba(255,255,255,.14)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* pin */}
              <motion.path
                d="M150 190 C164 190 176 202 176 216 C176 240 150 268 150 268 C150 268 124 240 124 216 C124 202 136 190 150 190 Z"
                fill="url(#tgrad)"
                opacity="0.85"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="150" cy="216" r="6" fill="rgba(0,0,0,.35)" />
            </svg>
          </div>
        </div>

        <div className="heroNoise" aria-hidden="true" />
      </motion.div>
    </div>
  );
}

/** Tiny helper: simple image grid (optional) */
function ImageGrid({ images, onClickImage }) {
  if (!images?.length) {
    return (
      <div className="vidEmpty">
        <div className="vidEmptyTitle">Add paintings in cvData.js</div>
      </div>
    );
  }

  return (
    <div className="imageGrid">
      {images.map((img, i) => (
        <button
          type="button"
          className="imageTile"
          key={i}
          onClick={() => onClickImage?.(img)}
        >
          <img
            className="imageTileImg"
            src={img.thumb || img.src}
            alt={img.alt || img.title}
            loading="lazy"
            decoding="async"
          />
          <div className="imageTileMeta">
            <div className="imageTileTitle">{img.title}</div>
            <div className="imageTileNote">{img.note}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function Violin() {
  const [mode, setMode] = useState("violin");

  const violinVideo = useMemo(() => cv.arts?.violin?.video, []);
  const danceVideo = useMemo(() => cv.arts?.dance?.video, []);
  const paintings = useMemo(() => cv.arts?.paintings || cv.arts?.painting, []);
  const travel = useMemo(() => cv.arts?.travel, []);
  const [activeImage, setActiveImage] = useState(null);

  const Hero = useMemo(() => {
    if (mode === "violin") return GlowingViolinHero;
    if (mode === "dance") return DanceMandalaHero;
    if (mode === "paintings") return PaintingsCanvasHero;
    return TravelAtlasHero;
  }, [mode]);

  return (
    <div className="pageMotif waveform">
      <div className="artsToggle">
        <button className={`artsTab ${mode === "violin" ? "isOn" : ""}`} onClick={() => setMode("violin")}>
          Violin
        </button>
        <button className={`artsTab ${mode === "dance" ? "isOn" : ""}`} onClick={() => setMode("dance")}>
          Bharatanatyam
        </button>
        <button className={`artsTab ${mode === "paintings" ? "isOn" : ""}`} onClick={() => setMode("paintings")}>
          Paintings
        </button>
        <button className={`artsTab ${mode === "travel" ? "isOn" : ""}`} onClick={() => setMode("travel")}>
          Travel
        </button>
      </div>

      <Hero />

      <Section title="Arts" subtitle="Training and performance">
        <div className="cards">
          {/* Video card: show for violin/dance if available */}
          {(mode === "violin") && (
            <div className="card glowCard">
              <h3>A Peek Into My Practice</h3>
              <VideoFrame video={mode === "violin" ? violinVideo : danceVideo} />
            </div>
          )}

          {/* Paintings content */}
          {mode === "paintings" && (
            <div className="wideCardWrapper">
              <div className="card glowCard fullWidthCard">
                <h3>Selected Works</h3>
                <ImageGrid
  images={paintings?.images}
  onClickImage={(img) => setActiveImage(img)}
/>
              </div>
            </div>
          )}

          {/* Travel content */}
          {mode === "travel" && (
           <div className="wideCardWrapper">
              <div className="card glowCard fullWidthCard">
                <h3>Selected Works</h3>
                <ImageGrid
  images={travel?.images}
  onClickImage={(img) => setActiveImage(img)}
/>
              </div>
            </div>
          )}
           {(mode === "violin") && (
            <div className="card glowCard">
              <h3>How it connects to my engineering</h3>
              <div className="muted">
                <p>
                  Music, particularly my training in Carnatic violin, has deeply shaped the way I approach engineering.
                  Through music, I began to appreciate mathematics not as an abstract discipline, but as a living structure
                  expressed through rhythm, symmetry, and variation. The permutations and combinations of notes create
                  entirely different emotional landscapes, much like how small changes in parameters or algorithms can
                  transform system behavior in engineering.
                </p>
                <p>
                  Learning a musical piece requires patience, iteration, and refinement. Hours of repetitive practice,
                  correcting micro-errors in pitch, timing, and expression, closely mirror the engineering process of
                  debugging, testing, and incremental development. Over time, this practice cultivated in me an
                  appreciation for process rather than outcome: perfection emerges not from a single breakthrough but from
                  disciplined iteration.
                </p>
                <p>
                  The violin taught me to listen carefully, recognize patterns, and balance precision with creativity.
                  These skills naturally transferred into my engineering mindset, where problem-solving demands both
                  analytical rigor and intuitive understanding. Music ultimately transformed how I experience engineering,
                  not merely as technical construction, but as an act of creation where logic and aesthetics coexist.
                </p>
              </div>
          </div>
           )}

           {(mode === "dance") && (
          <div className="wideCardWrapper">
            <div className="card glowCard">
              <h3>How it connects to my engineering</h3>
              <div className="muted">
                <p>
                 Dance, especially Bharatanatyam, connected to engineering through geometry and embodied structure. The form is built on straight lines, precise angles, symmetrical poses, and controlled geometrical curves, all synchronized with the resonance of the tāla. Every movement exists within a strict spatial and temporal framework, much like a well-designed system operating under constraints. Training in Bharatanatyam taught me discipline—both physical and mental—revealing the extremes the human body and mind can endure while maintaining precision and expression. It also showed me how emotion can be structured rather than spontaneous: expression arises from control, timing, and alignment. In this way, dance mirrors engineering design, where elegance emerges when structure, rhythm, and intention align perfectly.
                </p>
              </div>
            </div>
          </div>
           )}
        </div>
      </Section>

      {activeImage && (
  <div className="lightboxOverlay" onClick={() => setActiveImage(null)}>
    <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
      <img src={activeImage.src} alt={activeImage.title} />
      <div className="lightboxCaption">
        <h3>{activeImage.title}</h3>
        <p>{activeImage.note}</p>
      </div>
      <button
        className="lightboxClose"
        onClick={() => setActiveImage(null)}
      >
        ✕
      </button>
    </div>
  </div>
)}
    </div>
  );
}