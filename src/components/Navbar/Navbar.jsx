import "./Navbar.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
       <div className="logo">
  <div className="logo-icon">
    <FaStethoscope />
  </div>
  <h2>PHYSEO</h2>
</div>

        {/* Menu */}
       
           {/* Menu */}
       <ul className="nav-menu">
  <li><a href="#hero">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experts">Experts</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#price">Price</a></li>
  <li><a href="#appointment">Appointment</a></li>
</ul>

        {/* CTA */}
        <button className="appointment-btn">
          <span>Book Appointment</span>

          <div className="arrow-circle">
            <FiArrowUpRight />
          </div>
        </button>
      </nav>
    </header>
  );
}