import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Section({ title, subtitle, children }) {
  return (
    <motion.section
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="sectionHeader">
        <div>
          <h2>{title}</h2>
          {subtitle ? <div className="muted small">{subtitle}</div> : null}
        </div>
        <div className="rule" />
      </div>
      {children}
    </motion.section>
  );
}
