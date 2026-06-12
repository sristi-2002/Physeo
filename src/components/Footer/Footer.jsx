import React from "react";
import "./Footer.css";
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
  const gallery = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <footer className="footer">
      <div className="gallery-row">
        {gallery.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h2>PHYSEO</h2>

          <p>
            The Majority Have Suffered Alteration In Some Form.
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-column">
          <h4>Address</h4>

          <p>
            <FaMapMarkerAlt />
            1425 E 120th St, Los Angeles, CA
          </p>

          <p>
            <FaPhoneAlt />
            +349 458 4739
          </p>

          <p>
            <FaEnvelope />
            physio@gmail.com
          </p>
        </div>

        <div className="footer-column">
          <h4>Blogs</h4>
          <ul>
            <li>Guide</li>
            <li>Tourist</li>
            <li>Newsletter</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Travel Guide</li>
            <li>Locations</li>
            <li>News</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>

          <input
            type="email"
            placeholder="yourmail@gmail.com"
          />

          <button>Subscribe Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 PHYSEO. All Rights Reserved.</p>

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