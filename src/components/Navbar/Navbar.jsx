import "./Navbar.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";

/* Navbar links — one entry per section that actually exists on the page.
   Sections that are commented out in Home.jsx (specialties, price, experts…)
   are intentionally left out. */
const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Techniques", href: "#techniques" },
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#why-choose" },
  { label: "Vision", href: "#vision-mission" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#appointment" },
];

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo — designed text wordmark */}
        <a href="#hero" className="logo nav-anim" style={{ animationDelay: "0ms" }}>
          <div className="logo-icon">
            <FaStethoscope />
          </div>
          <h2 className="logo-text">
            <span className="logo-add">Addlife</span>
            <span className="logo-physio">Physiocare</span>
          </h2>
        </a>

        {/* Menu — each item fades in one-by-one */}
        <ul className="nav-menu">
          {links.map((link, i) => (
            <li
              key={link.href}
              className="nav-anim"
              style={{ animationDelay: `${120 + i * 80}ms` }}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#appointment"
          className="appointment-btn nav-anim"
          style={{ animationDelay: `${120 + links.length * 80}ms` }}
        >
          <span>Book Appointment</span>
          <div className="arrow-circle">
            <FiArrowUpRight />
          </div>
        </a>
      </nav>
    </header>
  );
}
