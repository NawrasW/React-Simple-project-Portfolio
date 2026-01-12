import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.current.name.value,
          email: form.current.email.value,
          message: form.current.message.value,
        }
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS ERROR:", error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="fade-in text-center py-5">
      <div className="container">
        <h2 className="mb-4">Contact</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form w-100 w-md-50 mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="form-input mb-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="form-input mb-3"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="form-input mb-3"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary w-100"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-success mt-3">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-danger mt-3">
              Failed to send message. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
