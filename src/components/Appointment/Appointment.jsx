import React from "react";
import "./Appointment.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Reveal from "../Reveal/Reveal";

const Appointment = () => {
  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <Reveal direction="left" className="appointment-left">
          <span className="section-subtitle">
            BOOK YOUR CONSULTATION TODAY
          </span>

          <h2>
            Schedule <span>Your Visit</span> Now
          </h2>

          <p>
            Your Trusted Partner In Recovery And Wellness In Salt Lake
            Sector III, Kolkata.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt />
              <div>
                <small>Phone Number</small>
                <h4>+91 891 047 7963</h4>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <small>Email Address</small>
                <h4>info@addlifephysiocare.com</h4>
              </div>
            </div>

            <div className="info-item">
              <FaClock />
              <div>
                <small>Service Timing (Mon to Sat)</small>
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
              <select>
                <option>Type Of Service Enquiry*</option>
                <option>Orthopedic Physiotherapy</option>
                <option>Spine Care & Manual Therapy</option>
                <option>Sports Injury Rehabilitation</option>
                <option>Neurological Physiotherapy</option>
                <option>Post-Surgical Rehabilitation</option>
                <option>Geriatric Physiotherapy</option>
                <option>Pediatric Physiotherapy</option>
                <option>Home Physiotherapy Services</option>
              </select>

              <input type="datetime-local" />
            </div>

            <textarea
              rows="5"
              placeholder="Enter Your Message Here*"
            ></textarea>

            <button type="submit">
              Schedule Your Visit →
            </button>
          </form>
        </Reveal>
      </div>

      <Reveal direction="up" delay={100} className="appointment-image">
        <img
          src="/images/appointment.jpg"
          alt="Appointment"
        />
      </Reveal>
    </section>
  );
};

export default Appointment;