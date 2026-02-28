import { motion } from "framer-motion";
import Section from "../components/Section";
import { cv } from "../data/cvData";

function GlowingViolin() {
  return (
    <div className="violinHero">
      <motion.div
        className="violinGlow"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* SVG violin silhouette */}
        <svg className="violinSvg" viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="vgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffcc66"/>
            <stop offset="50%" stopColor="#ff4fd8"/>
            <stop offset="100%" stopColor="#33f7c8"/>
            </linearGradient>

            <filter id="glow">
            <feGaussianBlur stdDeviation="7" result="blur"/>
            <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
            </filter>
        </defs>

        {/* Outline (more violin-shaped: clear waist + bouts) */}
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

        {/* Chin rest (helps recognition a LOT) */}
        <path
            d="M128 592 C130 620 170 620 172 592"
            fill="none"
            stroke="rgba(0,0,0,.45)"
            strokeWidth="6"
            strokeLinecap="round"
        />

        {/* Tailpiece */}
        <path
            d="M140 592 L160 592 L154 650 L146 650 Z"
            fill="none"
            stroke="url(#vgrad)"
            strokeWidth="4"
            filter="url(#glow)"
            opacity="0.9"
        />

        {/* Bridge */}
        <path
            d="M115 395 C135 380 165 380 185 395"
            fill="none"
            stroke="rgba(255,255,255,.28)"
            strokeWidth="3"
            strokeLinecap="round"
        />

        {/* f-holes (more visible) */}
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

        {/* Strings */}
        <line className="string s1" x1="142" y1="110" x2="146" y2="650"/>
        <line className="string s2" x1="148" y1="110" x2="150" y2="650"/>
        <line className="string s3" x1="152" y1="110" x2="154" y2="650"/>
        <line className="string s4" x1="158" y1="110" x2="160" y2="650"/>
        </svg>
        {/* Little caption */}
        <div className="violinCaption">
          <div className="violinTitle">Carnatic Violin</div>
          <div className="violinSub muted">precision • rhythm • iteration</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Violin() {
  return (
    <div className="pageMotif waveform">
      <GlowingViolin />

      <Section title="Music" subtitle="Training and performance">
        <div className="cards">
          <div className="card violinCard glowCard">
            <ul className="bullets">
              {cv.extracurriculars.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="card glowCard">
            <h3>How it connects to my engineering</h3>
            <p className="muted">
              Violin practice is feedback-driven refinement — like tuning control loops,
              debugging embedded systems, and improving perception pipelines.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}