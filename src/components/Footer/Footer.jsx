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

/* real physiotherapy / rehabilitation photos from Unsplash, square-cropped */
const IMG = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=400&q=80`;

// from unsplash.com/s/photos/physiotherapy (verified loading, all distinct)
const footerImages = [
  IMG("photo-1645005512968-0c1fe99f0093"),
  IMG("photo-1519823551278-64ac92734fb1"),
  IMG("photo-1649751361457-01d3a696c7e6"),
  IMG("photo-1706353399656-210cca727a33"),
  IMG("photo-1586401100295-7a8096fd231a"),
  IMG("photo-1540205895360-4ad4cffb3aa8"),
  IMG("photo-1519824145371-296894a0daa9"),
];

const Address = () => {
  return (
    <footer className="footer">
      <Reveal direction="zoom" className="footer-gallery">
        <div className="footer-gallery-head">
          <h3>We Keep You Moving</h3>
          <p>Advanced Physiotherapy, Rehabilitation &amp; Pain Management</p>
        </div>

        <div className="footer-strip">
          <div className="footer-strip-track">
            {[...footerImages, ...footerImages].map((src, i) => (
              <div className="footer-square" key={i}>
                <img src={src} alt="Addlife Physiocare" loading="lazy" />
              </div>
            ))}
          </div>
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
            KB 25, Salt Lake City, Sector III, Kolkata - 700106
          </p>

          <p>
            <FaPhoneAlt />
            +91 77970 44666
          </p>

          <p>
            <FaEnvelope />
            info@addlifephysiocare.in
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