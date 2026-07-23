import React, { useEffect, useRef, useState } from "react";
import "./Appointment.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Sparkle, Calendar } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";
import { whatsappUrl } from "../../lib/whatsapp";
import { usePhonePopup } from "../PhonePopup/context";
import galleryImg1 from "../../assets/1.jpeg";
import galleryImg2 from "../../assets/2.jpeg";
import galleryImg3 from "../../assets/7.jpeg";
import galleryImg4 from "../../assets/17.jpeg";

const galleryImages = [galleryImg1, galleryImg2, galleryImg3, galleryImg4];

const marqueeItems = [
  "Orthopedic Physiotherapy",
  "Sports Injury Rehabilitation",
  "Neurological Physiotherapy",
  "Pediatric Physiotherapy",
  "Spine Care & Manual Therapy",
  "Post-Surgical Rehabilitation",
  "Geriatric Physiotherapy",
  "Home Physiotherapy Services",
];

/**
 * Turns the picker's raw "YYYY-MM-DDTHH:mm" into "18/02/2002, 04:30 PM".
 *
 * The parts are split by hand rather than run through `new Date()` on purpose:
 * a datetime-local value carries no timezone, so parsing it into a Date and
 * reformatting would shift the time for anyone whose device isn't on IST. The
 * patient picks a clinic-time slot, so it must show back exactly as chosen.
 */
const formatDateTime = (raw) => {
  if (!raw || !raw.includes("T")) return raw || "";

  const [datePart, timePart] = raw.split("T");
  const [year, month, day] = datePart.split("-");
  const [hourStr, minute] = timePart.split(":");
  if (!year || !month || !day || !hourStr || !minute) return raw;

  const hour24 = Number(hourStr);
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = String(hour24 % 12 || 12).padStart(2, "0");

  return `${day}/${month}/${year}, ${hour12}:${minute} ${suffix}`;
};

const Appointment = () => {
  const openPhone = usePhonePopup();
  const dateRef = useRef(null);
  const [slide, setSlide] = useState(0);
  // The field swaps to a native picker while focused and shows the formatted
  // date the rest of the time.
  const [dateFocused, setDateFocused] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    datetime: "",
    message: "",
  });

  // Auto-advance the image slider (skipped for reduced-motion users).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setSlide((s) => (s + 1) % galleryImages.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* Swap to the native picker. The type and value are set on the element
     directly as well as in state, because showPicker() needs the input to
     already be a datetime-local while the click's user activation is live. */
  const revealPicker = (el) => {
    if (!el) return;
    setDateFocused(true);
    el.type = "datetime-local";
    el.value = form.datetime || "";
  };

  const openDatePicker = () => {
    const el = dateRef.current;
    revealPicker(el);
    el?.focus();
    try {
      el?.showPicker?.();
    } catch {
      /* showPicker not supported — focusing already reveals the picker */
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic guard — the browser's required validation catches most of this,
    // but keep a fallback in case the form is submitted programmatically.
    if (
      !form.name ||
      !form.email ||
      !form.service ||
      !form.datetime ||
      !form.message
    ) {
      return;
    }

    // WhatsApp is the only delivery route for this form.
    const details = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service Enquiry: ${form.service}`,
      `Preferred Date & Time: ${formatDateTime(form.datetime)} (IST)`,
      "",
      "Message:",
      form.message,
    ];

    const text = ["*Appointment Request*", "", ...details].join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="appointment-section">
      <div className="appt-marquee">
        <div className="appt-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="appt-marquee-item" key={index}>
              <Sparkle size={20} className="appt-marquee-star" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="appointment-container">
        <Reveal direction="left" className="appointment-left">
          <span className="section-subtitle">
            <span className="subtitle-line"></span>
            <span className="subtitle-text">
              <Letters text="BOOK YOUR APPOINTMENT" step={28} />
            </span>
          </span>

          <h2 className="appt-h2">
            <span className="plain">
              <Letters text="Schedule " step={22} />
            </span>
            <span className="hl">
              <Letters text="Your Appointment" base={200} step={22} />
            </span>
         
          </h2>

          <p>We're Dedicated To Providing More Than Just Treatment</p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <small>Phone Number</small>
                <h4>
                  <a
                    href="tel:+917797044666"
                    onClick={(e) => {
                      e.preventDefault();
                      openPhone();
                    }}
                  >
                    +91 7797044666
                  </a>
                </h4>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaEnvelope />
              </span>
              <div>
                <small>Email Address</small>
                <h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=addlifephysiocare@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    addlifephysiocare@gmail.com
                  </a>
                </h4>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaClock />
              </span>
              <div>
                <small>Service Timing ( Mon To Sat )</small>
                <h4>10:00am To 9:00pm</h4>
              </div>
            </div>
          </div>

          <div className="appt-socials">
            <span className="appt-socials-label">Follow Us</span>
            <a
              href="https://www.facebook.com/addlifephysiocare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/reel/DUSecrMEwKJ/?igsh=eXdua3Z0d2ttenU2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="appointment-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail Address*"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Type Of Service Enquiry*
                </option>
                <option>Orthopedic Physiotherapy</option>
                <option>Spine Care & Manual Therapy</option>
                <option>Sports Injury Rehabilitation</option>
                <option>Neurological Physiotherapy</option>
                <option>Post-Surgical Rehabilitation</option>
                <option>Geriatric Physiotherapy</option>
                <option>Pediatric Physiotherapy</option>
                <option>Home Physiotherapy Services</option>
              </select>

              <div className="date-field">
                <input
                  ref={dateRef}
                  /* datetime-local while the picker is open, plain text the
                     rest of the time so the value reads as 18/02/2002 rather
                     than the raw 2002-02-18T16:30 */
                  type={dateFocused ? "datetime-local" : "text"}
                  name="datetime"
                  placeholder="Select Date & Time*"
                  value={
                    dateFocused ? form.datetime : formatDateTime(form.datetime)
                  }
                  onChange={handleChange}
                  onFocus={(e) => revealPicker(e.target)}
                  onBlur={() => setDateFocused(false)}
                  required
                />
                <button
                  type="button"
                  className="date-icon"
                  onClick={openDatePicker}
                  aria-label="Open calendar"
                >
                  <Calendar size={16} />
                </button>
              </div>
            </div>

            <textarea
              rows="5"
              name="message"
              placeholder="Enter Your Message Here*"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="submit-row">
              <button type="submit" className="wa-btn">
                Send on WhatsApp
                <span className="btn-arrow wa-arrow">
                  <FaWhatsapp size={16} />
                </span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>

      <Reveal direction="up" delay={100} className="appt-carousel">
        <div className="appt-carousel-viewport">
          <div
            className="appt-carousel-track"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {galleryImages.map((src, index) => (
              <div className="appt-slide" key={index}>
                <img
                  src={src}
                  alt="Physiotherapy care at Addlife Physiocare"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="appt-dots">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`appt-dot ${index === slide ? "active" : ""}`}
              onClick={() => setSlide(index)}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Appointment;