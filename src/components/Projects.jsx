import React from "react";
import "../index.css";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "An online store built with React and PostgreSQL featuring authentication, product management, and payment integration.",
    },
    {
      title: "E-Learning App",
      description: "Interactive learning platform with progress tracking, built using React and Node.js.",
    },
    {
      title: "Reddit Clone",
      description: "Community-driven platform with posting, voting, and commenting features using Next.js and MongoDB.",
    },
    {
      title: "Realtime Chat App",
      description: "Live messaging app with WebSocket and Node.js featuring typing indicators and user presence.",
    },
    {
      title: "Hospital Management",
      description: "Patient and administration system using ASP.NET MVC with appointment scheduling and medical record management.",
    },
    {
      title: "Airbnb Clone",
      description: "Room listing platform with maps and payment integration using React and PostgreSQL.",
    },
    {
      title: "Restaurant App",
      description: "Restaurant discovery, menu browsing, and reservations built with Angular and ASP.NET Core.",
    },
    {
      title: "Google Flights Clone",
      description: "Flight booking platform with real-time pricing and filters built using React and flight data API.",
    }
  ];

  return (
    <section id="projects" className="fade-in py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row g-4">
          {projects.map((p, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm project-card">
                <div className="card-body">
                  <h5 className="card-title project-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
