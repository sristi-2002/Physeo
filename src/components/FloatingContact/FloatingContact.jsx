import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePhonePopup } from "../PhonePopup/context";
import "./FloatingContact.css";

/* wa.me needs the number in international form with no "+" or spaces */
const WHATSAPP_URL =
  "https://wa.me/917797044666?text=" +
  encodeURIComponent(
    "Hello, I would like to book a physiotherapy appointment at Addlife Physiocare."
  );

/**
 * Fixed floating contact buttons (WhatsApp + phone + email) that appear once
 * the user scrolls past the hero, so the clinic's contact is always one tap away.
 */
export default function FloatingContact() {
  const [show, setShow] = useState(false);
  const openPhone = usePhonePopup();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`float-contact ${show ? "show" : ""}`}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fc-btn fc-whatsapp"
        aria-label="Message Addlife Physiocare on WhatsApp"
      >
        <FaWhatsapp size={26} />
        <span className="fc-label">Chat on WhatsApp</span>
      </a>

      <a
        href="tel:+917797044666"
        className="fc-btn fc-phone"
        aria-label="Call Addlife Physiocare"
        onClick={(e) => {
          e.preventDefault();
          openPhone();
        }}
      >
        <Phone size={20} />
        <span className="fc-label">+91 7797044666</span>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=addlifephysiocare@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fc-btn fc-email"
        aria-label="Email Addlife Physiocare"
      >
        <Mail size={20} />
        <span className="fc-label">addlifephysiocare@gmail.com</span>
      </a>
    </div>
  );
}
