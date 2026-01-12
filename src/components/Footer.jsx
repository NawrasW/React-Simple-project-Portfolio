import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-whit-50 text-center p-3">
      <div className="d-inline-flex gap-2">
        <small>© {new Date().getFullYear()} Nawras Wraikat</small>

        {/* GitHub Icon */}
        <a
          href="https://github.com/NawrasW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/nawras-wraikat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </footer>
  );
}
