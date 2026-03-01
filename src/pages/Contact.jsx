import { motion } from "framer-motion";
import { cv } from "../data/cvData";
import Section from "../components/Section";
import "../styles/contact.css";

export default function Contact() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="contactPage pageMotif scanline">

      <div className="pageTitle">
        <h1>Contact</h1>
        <p className="muted">
          Establish connection — collaborations, research, or engineering discussions.
        </p>
      </div>

      <Section title="Communication Terminal">

        <motion.div
          className="contactConsole"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >

          {/* SIGNAL HEADER */}
          <div className="contactHeader">
            <div>
              <div className="contactKicker">COMMUNICATION LINK</div>
              <div className="contactTitle">Signal Online</div>
              <div className="muted">{cv.location}</div>
            </div>

            <div className="signalIndicator">
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* EMAIL PANEL */}
          <div className="terminalChannels">

          <div className="channelBlock">
            <div className="channelLabel"><b>PRIMARY CHANNEL</b></div>
            <a href={`mailto:${cv.email}`} className="channelValue">
              {cv.email}
            </a>
          </div>

          <div className="channelBlock">
            <div className="channelLabel"><b>VOICE LINK</b></div>
            <a href={`tel:${cv.phone.replace(/\s+/g, "")}`} className="channelValue">
              {cv.phone}
            </a>
          </div>

        </div>

          {/* LINKS GRID */}
          <div className="contactLinks">
            {cv.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="contactLinkCard"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CV DOWNLOAD */}
          <div className="contactFooter">
            <a className="btn" href={`${base}cv.pdf`} download>
              Download CV
            </a>
          </div>

          <div className="contactNoise" />

        </motion.div>

      </Section>
    </div>
  );
}