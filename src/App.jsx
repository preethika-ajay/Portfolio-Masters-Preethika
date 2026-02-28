import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Violin from "./pages/Violin";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="publications" element={<Publications />} />
          <Route path="skills" element={<Skills />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="arts" element={<Violin />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}