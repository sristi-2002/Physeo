import "./Navbar.css";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

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
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo — brand image */}
        <a
          href="#hero"
          className="logo nav-anim"
          style={{ animationDelay: "0ms" }}
          onClick={close}
        >
          <img src={logo} alt="Addlife PhysioCare — We keep you moving" className="logo-img" />
        </a>

        {/* Hamburger toggle — only visible on mobile/tablet */}
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu — inline on desktop, dropdown panel on mobile */}
        <ul className={`nav-menu ${open ? "open" : ""}`}>
          {links.map((link, i) => (
            <li
              key={link.href}
              className="nav-anim"
              style={{ animationDelay: `${120 + i * 80}ms` }}
            >
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}

          {/* CTA shown inside the dropdown on mobile */}
          <li className="nav-cta-mobile">
            <a href="#appointment" className="appointment-btn" onClick={close}>
              <span>Book Appointment</span>
              <div className="arrow-circle">
                <FiArrowUpRight />
              </div>
            </a>
          </li>
        </ul>

        {/* CTA — desktop only (hidden on mobile in favour of the one above) */}
        <a
          href="#appointment"
          className="appointment-btn appointment-btn-desktop nav-anim"
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
