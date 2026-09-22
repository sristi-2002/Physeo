import "./Topbar.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <a
          className="topbar-left"
          href="https://www.google.com/maps/search/?api=1&query=Addlife+Physiocare+Salt+Lake+Sector+III+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="location-icon">
            <IoLocationSharp />
          </div>

          <p>
            Salt Lake Sector III, Kolkata,
            West Bengal, India
          </p>
        </a>

        <div className="topbar-center">
          <span>
            Our Service Timing : 10:00am To 9:00pm (Mon to Sat)
          </span>
        </div>

        <div className="topbar-right">
          <a
            href="https://www.instagram.com/reel/DUSecrMEwKJ/?igsh=eXdua3Z0d2ttenU2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/addlifephysiocare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
}