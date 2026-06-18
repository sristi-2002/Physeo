import React from "react";
import "./Testimonials.css";
import Reveal from "../Reveal/Reveal";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Reveal direction="left" className="testimonials-left">
        <img
          src="/images/testimonial.jpg"
          alt="Patient Testimonial"
        />
      </Reveal>

      <Reveal direction="right" delay={120} className="testimonials-right">
        <span className="section-tag">TESTIMONIALS</span>

        <h2>
          What Our Patients Say Real
          <br />
          <span>Stories Of Healing & Recovery</span>
        </h2>

        <p>
          After years of chronic back pain, I had almost given up hope.
          Dr. Kousik Mallick and the team at Addlife Physiocare identified
          the root cause and built a treatment plan just for me. Today I'm
          pain-free and moving better than ever!
        </p>

        <div className="stars">★★★★★</div>

        <div className="testimonial-user">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
          />
          <div>
            <h4>Soumen Das</h4>
            <span>Salt Lake, Kolkata</span>
          </div>
        </div>

        <div className="testimonial-nav">
          <button>←</button>
          <button>→</button>
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonials;