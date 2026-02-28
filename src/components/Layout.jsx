import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRobot, FaCameraRetro, FaMusic, FaMicrochip, FaSatelliteDish } from "react-icons/fa";
import { cv } from "../data/cvData";

export default function Layout() {
  return (
    <div className="page">
      <div className="aurora" aria-hidden="true" />
      <div className="gridGlow" aria-hidden="true" />

      <div className="floaters" aria-hidden="true">
        <span className="floater f1"><FaRobot /></span>
        <span className="floater f2"><FaCameraRetro /></span>
        <span className="floater f3"><FaMusic /></span>
        <span className="floater f4"><FaMicrochip /></span>
        <span className="floater f5"><FaSatelliteDish /></span>
      </div>

      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <div className="dot" />
            <span>{cv.name}</span>
          </div>

          <nav className="nav showNav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/publications">Publications</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/achievements">Awards</NavLink>
            <NavLink to="/arts">Arts</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <a className="btn" href="/cv.pdf" download>
            Download CV
          </a>
        </div>
      </header>

      <main className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Outlet />
        </motion.div>

        <footer className="footer muted">
          © {new Date().getFullYear()} {cv.name}.
        </footer>
      </main>
    </div>
  );
}