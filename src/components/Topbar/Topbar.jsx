import "./TopBar.css";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <div className="location-icon">
            <IoLocationSharp />
          </div>

          <p>
            Salt Lake Sector III, Kolkata,
            West Bengal, India
          </p>
        </div>

        <div className="topbar-center">
          <span>
            Our Service Timing : 10:00am To 9:00pm (Mon to Sat)
          </span>
        </div>

        <div className="topbar-right">
          <a href="/">
            <FaTelegramPlane />
          </a>

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaFacebookF />
          </a>


          <a href="/">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}