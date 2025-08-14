import React from "react";
import "../index.css";

export default function Contact() {
  return (
    <section id="contact" className="fade-in text-center py-5">
      <div className="container">
        <h2 className="mb-4">Contact</h2>
        <form className="contact-form w-100 w-md-50 mx-auto">
          <input type="text" placeholder="Name" className="form-input mb-3"/>
          <input type="email" placeholder="Email" className="form-input mb-3"/>
          <textarea placeholder="Message" className="form-input mb-3"></textarea>
          <button className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
}
