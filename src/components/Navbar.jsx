import React from "react";
import { useState } from "react";

export default function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const sections = [
        "Home",
        "Services",
        "Skills",
        "Education",
        "Experience",
        "Projects",
        "Contact",
    ];
    const handleToggle = () => setMenuOpen(!menuOpen);
    const handleLinkClick = () => setMenuOpen(false);
    return (
        <nav className="navbar fixed-top navbar-dark custom-navbar ">
            <div className="container">
                
                <button className="hamburger" onClick={handleToggle}>
                    <i className="bi bi-list"></i>
                </button>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {sections.map((item) => (
                        <li key={item}>
                            <a
                                className="nav-link"
                                href={`#${item.toLowerCase()}`}
                                onClick={handleLinkClick}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
