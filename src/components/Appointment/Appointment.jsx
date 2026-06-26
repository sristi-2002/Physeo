import React from "react";
import "./Appointment.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Sparkle, Calendar, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";

const marqueeItems = [
  "Orthopedic Physiotherapy",
  "Sports Injury Rehabilitation",
  "Neurological Physiotherapy",
  "Pediatric Physiotherapy",
  "Spine Care & Manual Therapy",
  "Post-Surgical Rehabilitation",
  "Geriatric Physiotherapy",
  "Home Physiotherapy Services",
];

const Appointment = () => {
  return (
    <section className="appointment-section">
      <div className="appt-marquee">
        <div className="appt-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="appt-marquee-item" key={index}>
              <Sparkle size={20} className="appt-marquee-star" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="appointment-container">
        <Reveal direction="left" className="appointment-left">
          <span className="section-subtitle">
            <span className="subtitle-line"></span>
            <span className="subtitle-text">
              <Letters text="WHY CHOOSE US SERVICES" step={28} />
            </span>
          </span>

          <h2 className="appt-h2">
            <span className="plain">
              <Letters text="Schedule " step={22} />
            </span>
            <span className="hl">
              <Letters text="Your Visit" base={200} step={22} />
            </span>
            <span className="plain">
              <Letters text=" Now" base={440} step={22} />
            </span>
          </h2>

          <p>We're Dedicated To Providing More Than Just Treatment</p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <small>Phone Number</small>
                <h4>+ 864 846 75324</h4>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaEnvelope />
              </span>
              <div>
                <small>Email Address</small>
                <h4>Info@Physio.Com</h4>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaClock />
              </span>
              <div>
                <small>Service Timing ( Mon To Sat )</small>
                <h4>10:00am To 9:00pm</h4>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="appointment-right">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="E-Mail Address*" />
            </div>

            <div className="form-row">
              <select defaultValue="">
                <option value="" disabled>
                  Type Of Service Enquiry*
                </option>
                <option>Orthopedic Physiotherapy</option>
                <option>Spine Care & Manual Therapy</option>
                <option>Sports Injury Rehabilitation</option>
                <option>Neurological Physiotherapy</option>
                <option>Post-Surgical Rehabilitation</option>
                <option>Geriatric Physiotherapy</option>
                <option>Pediatric Physiotherapy</option>
                <option>Home Physiotherapy Services</option>
              </select>

              <div className="date-field">
                <input
                  type="text"
                  placeholder="Select Date & Time*"
                  onFocus={(e) => (e.target.type = "datetime-local")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                />
                <span className="date-icon">
                  <Calendar size={16} />
                </span>
              </div>
            </div>

            <textarea
              rows="5"
              placeholder="Enter Your Message Here*"
            ></textarea>

            <button type="submit">
              Schedule Your Visit
              <span className="btn-arrow">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </form>
        </Reveal>
      </div>

      <Reveal direction="up" delay={100} className="appointment-image">
        <img
          src="https://images.unsplash.com/photo-1645005513751-e22717a66ae6?auto=format&fit=crop&w=1600&q=80"
          alt="Physiotherapy session at Addlife Physiocare"
        />
      </Reveal>
    </section>
  );
};

export default Appointment;