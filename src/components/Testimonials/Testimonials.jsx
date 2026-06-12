import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-left">
        <img
          src="/images/testimonial.jpg"
          alt="Patient Testimonial"
        />
      </div>

      <div className="testimonials-right">
        <span className="section-tag">TESTIMONIALS</span>

        <h2>
          What Our Patients Say Real
          <br />
          <span>Stories Of Healing & Recovery</span>
        </h2>

        <p>
          After my knee surgery, I was worried about walking again.
          The personalized care and motivational support I received
          here made all the difference. I'm now back to hiking every
          weekend!
        </p>

        <div className="stars">★★★★★</div>

        <div className="testimonial-user">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
          />
          <div>
            <h4>Jordan Lee</h4>
            <span>Denver, Colorado</span>
          </div>
        </div>

        <div className="testimonial-nav">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;