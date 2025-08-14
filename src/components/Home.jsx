import React from "react";
import "../index.css"; 

export default function Home() {
  return (
    <section id="home" className="vh-100 d-flex home-section align-items-center fade-in">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">HI, I'm Nawras Wraikat</h1>
        <h2 className="text-light-green">Full-Stack Developer</h2>
        <p className="lead mt-3">
          I build high-performance, responsive, and modern web applications using React, Angular, and .NET.<br />
          I am a full-stack developer specializing in modern front-end frameworks and robust back-end solutions.<br />
          I focus on creating scalable, maintainable, and delightful digital experiences that solve real-world problems.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg mt-3">
          View My Work
        </a>
      </div>
    </section>
  );
}
