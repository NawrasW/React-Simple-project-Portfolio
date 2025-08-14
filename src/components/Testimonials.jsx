import React from "react";
import "../index.css";

export default function Testimonials() {
  const testimonials = [
    {text:"Great work and fast delivery."},
    {text:"Professional and easy to work with."}
  ];
  return (
    <section id="testimonials" className="fade-in text-center">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="row">
          {testimonials.map((t,i)=>(
            <div className="col-md-6" key={i}>
              <div className="p-3 border h-100">
                <p>"{t.text}"</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
