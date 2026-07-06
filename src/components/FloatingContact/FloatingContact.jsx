import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import "./FloatingContact.css";

/**
 * Fixed floating contact buttons (email + phone) that appear once the user
 * scrolls past the hero, so the clinic's contact is always one tap away.
 */
export default function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`float-contact ${show ? "show" : ""}`}>
      <a
        href="tel:+917797044666"
        className="fc-btn fc-phone"
        aria-label="Call Addlife Physiocare"
      >
        <Phone size={20} />
        <span className="fc-label">+91 7797044666</span>
      </a>

      <a
        href="mailto:addlifephysiocare@gmail.com"
        className="fc-btn fc-email"
        aria-label="Email Addlife Physiocare"
      >
        <Mail size={20} />
        <span className="fc-label">addlifephysiocare@gmail.com</span>
      </a>
    </div>
  );
}
