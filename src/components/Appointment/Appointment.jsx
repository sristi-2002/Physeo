import React from "react";
import "./Appointment.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-left">
          <span className="section-subtitle">
            WHY CHOOSE OUR SERVICES
          </span>

          <h2>
            Schedule <span>Your Visit</span> Now
          </h2>

          <p>
            We're Dedicated To Providing More Than Just Treatment
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt />
              <div>
                <small>Phone Number</small>
                <h4>+864 846 75324</h4>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <small>Email Address</small>
                <h4>info@physio.com</h4>
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
        </div>

        <div className="appointment-right">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="E-Mail Address*" />
            </div>

            <div className="form-row">
              <select>
                <option>Type Of Service Enquiry*</option>
                <option>Physiotherapy</option>
                <option>Sports Injury</option>
                <option>Rehabilitation</option>
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
        </div>
      </div>

      <div className="appointment-image">
        <img
          src="/images/appointment.jpg"
          alt="Appointment"
        />
      </div>
    </section>
  );
};

export default Appointment;