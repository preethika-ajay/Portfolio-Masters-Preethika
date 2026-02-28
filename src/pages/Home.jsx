import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { FaRobot, FaCameraRetro, FaMusic } from "react-icons/fa";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import { useEffect, useRef } from "react";

export default function Home() {
  const hudRef = useRef(null);

  useEffect(() => {
    const el = hudRef.current;
    if (!el) return;

    const onMove = (e) => {
    const r = el.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    el.style.setProperty("--cx", `${x}px`);
    el.style.setProperty("--cy", `${y}px`);

    const nx = (x - r.width / 2) / (r.width / 2);
    const ny = (y - r.height / 2) / (r.height / 2);

    el.style.setProperty("--mx", nx);
    el.style.setProperty("--my", ny);
  };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  
  return (
    <>
      <div className="hero">
        <motion.h1
          className="neonText"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {cv.name}
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
        >
          {cv.title}
        </motion.p>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="hud hudTilt" ref={hudRef}>
            <div className="scanBeam" />
            <div className="ring r1" />
            <div className="ring r2" />
            <div className="ring r3" />
            <div className="crosshair" />
            <div className="corner tl" />
            <div className="corner tr" />
            <div className="corner bl" />
            <div className="corner br" />

            <div className="hudLabels">
              <span className="chip">Sensor Input</span>
              <span className="chip">Feature Extraction</span>
              <span className="chip">Inference</span>
              <span className="readout">
                robot_perception :: running
              </span>
            </div>

            <div className="scope">
              <div className="scopeLine" />
            </div>
          </div>
        </motion.div>

        <div className="meta">
          <span>{cv.location}</span>
          <span className="sep">•</span>
          <a href={`mailto:${cv.email}`}>{cv.email}</a>
          <span className="sep">•</span>
          <span>{cv.phone}</span>
        </div>

        <div className="links">
          {cv.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>

        <div className="heroLine">
          <span className="spark"><HiSparkles /></span>
          <span className="muted">{cv.objective}</span>
        </div>

        <div className="badgeStack">
          <div className="badge"><FaRobot /> Robotics</div>
          <div className="badge"><FaCameraRetro /> Computer Vision</div>
          <div className="badge"><FaMusic /> Carnatic Violin</div>
        </div>
      </div>

      <Section title="Highlights" subtitle="A quick snapshot (click tabs in the navbar for full pages)">
        <div className="cards">
          <div className="card glowCard">
            <h3>Robots & Embedded</h3>
            <p className="muted">
              Navigation/perception work (LunarZebro), hardware integration, and real-time pipelines.
            </p>
          </div>
          <div className="card glowCard">
            <h3>Systems & Security</h3>
            <p className="muted">
              Microservices, gRPC, Kafka, Kubernetes; ACME ARI work at DigiCert.
            </p>
          </div>
          <div className="card violinCard">
            <h3>Music & Discipline</h3>
            <p className="muted">
              Carnatic violin background — precision, iteration, and performance under pressure.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}