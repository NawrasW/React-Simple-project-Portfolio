import React from "react";
import "../index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Services() {
  const services = [
    { title: "Web Development", icon: "bi-laptop" },
    { title: "Backend Development", icon: "bi-server" },
    { title: "Responsive Design", icon: "bi-phone" },
    { title: "API Integration", icon: "bi-box-arrow-in-right" }
  ];

  return (
    <section id="services" className="fade-in py-5">
      <div className="container text-center">
        <h2 className="mb-5">Services</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-sm-6 col-md-3" key={i}>
              <div className="service-card p-5 h-100 d-flex flex-column align-items-center justify-content-center">
                <i className={`${s.icon} mb-3`} style={{ fontSize: "2.5rem", color: "#00ffa3" }}></i>
                <h5>{s.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
