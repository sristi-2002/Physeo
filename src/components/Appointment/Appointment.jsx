import React, { useEffect, useRef, useState } from "react";
import "./Appointment.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Sparkle, Calendar, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";
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

const CLINIC_EMAIL = "addlifephysiocare@gmail.com";

const Appointment = () => {
  const openPhone = usePhonePopup();
  const dateRef = useRef(null);
  const [slide, setSlide] = useState(0);
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

  // Open the native date & time calendar picker when the icon is clicked.
  const openDatePicker = () => {
    const el = dateRef.current;
    if (!el) return;
    el.type = "datetime-local";
    el.focus();
    try {
      el.showPicker?.();
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

    const subject = `Appointment Request - ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service Enquiry: ${form.service}`,
      `Preferred Date & Time: ${form.datetime}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(CLINIC_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
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
            <span className="plain">
              <Letters text=" Now" base={440} step={22} />
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
                  type="text"
                  name="datetime"
                  placeholder="Select Date & Time*"
                  value={form.datetime}
                  onChange={handleChange}
                  onFocus={(e) => (e.target.type = "datetime-local")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
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

            <button type="submit">
              Schedule Your Appointment
              <span className="btn-arrow">
                <ArrowUpRight size={16} />
              </span>
            </button>
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