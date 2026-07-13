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
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import img7 from "../../assets/7.jpeg";
import img8 from "../../assets/8.jpeg";

import img16 from "../../assets/16.jpeg";
const footerImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img16,
];
/* real physiotherapy / rehabilitation photos from Unsplash, square-cropped */
const IMG = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=400&q=80`;

// from unsplash.com/s/photos/physiotherapy (verified loading, all distinct)


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
            +91 7797044666
          </p>

          <p>
            <FaEnvelope />
            addlifephysiocare@gmail.com
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