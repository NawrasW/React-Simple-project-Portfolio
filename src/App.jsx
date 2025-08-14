import React, { useState } from "react";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["Home","Services","Skills","Education","Experience","Projects","Testimonials","Contact"];

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false); 

  return (
    <>
      <nav className="navbar fixed-top navbar-dark custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">NAWRAS</a>
          <button className="hamburger" onClick={handleToggle}>
            <i className="bi bi-list"></i>
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {sections.map(item => (
              <li key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Home />
      <Services />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />

      <footer className="bg-dark text-whit-50 text-center p-3">
        <small>© {new Date().getFullYear()} Nawras Wraikat</small>
      </footer>
    </>
  );
}
