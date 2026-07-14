import { useCallback, useEffect, useState } from "react";
import { Phone, Copy, Check, X } from "lucide-react";
import {
  PhonePopupContext,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "./context";
import "./PhonePopup.css";

/**
 * Wraps the app, exposes openPhonePopup() through context, and renders the
 * popup itself. A desktop browser can't place a call, so instead of a dead
 * tel: link every phone click opens this card with Call + Copy actions.
 */
export function PhonePopupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const openPopup = useCallback(() => {
    setCopied(false);
    setOpen(true);
  }, []);
  const closePopup = useCallback(() => setOpen(false), []);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closePopup]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
    } catch {
      // Older browsers / non-secure contexts: fall back to a temp textarea.
      const el = document.createElement("textarea");
      el.value = PHONE_DISPLAY;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
  };

  return (
    <PhonePopupContext.Provider value={openPopup}>
      {children}

      {open && (
        <div
          className="phone-popup-overlay"
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-label="Contact Addlife Physiocare by phone"
        >
          <div className="phone-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="phone-popup-close"
              onClick={closePopup}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="phone-popup-icon">
              <Phone size={26} />
            </div>

            <h3 className="phone-popup-title">Call Addlife Physiocare</h3>
            <p className="phone-popup-number">{PHONE_DISPLAY}</p>

            <div className="phone-popup-actions">
              <a
                href={`tel:${PHONE_TEL}`}
                className="phone-popup-btn phone-popup-call"
              >
                <Phone size={18} />
                Call now
              </a>

              <button
                type="button"
                className="phone-popup-btn phone-popup-copy"
                onClick={handleCopy}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copied!" : "Copy number"}
              </button>
            </div>
          </div>
        </div>
      )}
    </PhonePopupContext.Provider>
  );
}
