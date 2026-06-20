import React from "react";
import "./Footer.css";
import Reveal from "../Reveal/Reveal";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Address = () => {
  return (
    <footer className="footer">
      <Reveal direction="zoom" className="footer-banner">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80"
          alt="Addlife Physiocare — physiotherapy and rehabilitation"
        />
        <div className="footer-banner-overlay">
          <h3>We Keep You Moving</h3>
          <p>Advanced Physiotherapy, Rehabilitation &amp; Pain Management</p>
        </div>
      </Reveal>

      <div className="footer-content">
        <Reveal direction="up" className="footer-column">
          <h2>Addlife Physiocare</h2>

          <p>
            We Keep You Moving — Advanced Physiotherapy, Rehabilitation
            & Pain Management.
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </Reveal>

        <Reveal direction="up" delay={90} className="footer-column">
          <h4>Address</h4>

          <p>
            <FaMapMarkerAlt />
            Salt Lake Sector III, Kolkata, West Bengal
          </p>

          <p>
            <FaPhoneAlt />
            +91 891 047 7963
          </p>

          <p>
            <FaEnvelope />
            info@addlifephysiocare.com
          </p>
        </Reveal>

        <Reveal direction="up" delay={180} className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>Orthopedic Physiotherapy</li>
            <li>Spine Care & Manual Therapy</li>
            <li>Sports Injury Rehabilitation</li>
            <li>Neurological Physiotherapy</li>
            <li>Home Physiotherapy</li>
          </ul>
        </Reveal>

        <Reveal direction="up" delay={270} className="footer-column">
          <h4>Conditions We Treat</h4>
          <ul>
            <li>Back & Neck Pain</li>
            <li>Knee & Shoulder Pain</li>
            <li>Sciatica & Arthritis</li>
            <li>Ankylosing Spondylitis</li>
            <li>Stroke & Parkinson’s</li>
          </ul>
        </Reveal>

        <Reveal direction="up" delay={360} className="footer-column">
          <h4>Newsletter</h4>

          <input
            type="email"
            placeholder="yourmail@gmail.com"
          />

          <button>Subscribe Now</button>
        </Reveal>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Addlife Physiocare. All Rights Reserved.</p>

        <div>
          <span>Terms & Conditions</span>
          <span> | </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Address;