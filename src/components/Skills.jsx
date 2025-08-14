import React from "react";
import "../index.css";

export default function Skills() {
  const skills = ["React.js", "Next.js", "Angular", "ASP.NET", "SQL Server", "Node.js"];

  return (
    <section id="skills" className="fade-in py-5">
      <div className="container text-center">
        <h2 className="mb-5">Skills</h2>
        <div className="row g-3 justify-content-center">
          {skills.map((skill, i) => (
            <div className="col-6 col-sm-4 col-md-2" key={i}>
              <div className="skill-card p-3">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
