import { useEffect } from "react";
import { X } from "lucide-react";
import "./Modal.css";

/**
 * Small reusable popup used by the mobile layouts (WhyChoose cards,
 * Vision & Mission buttons). Closes on backdrop click and on Escape,
 * and locks page scroll while it's open. Renders nothing when closed,
 * so the desktop layouts are unaffected.
 */
export default function Modal({ open, onClose, title, label, media, children }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    // Keep the page behind the popup from scrolling under it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="app-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="app-modal" onClick={(e) => e.stopPropagation()}>
        <button className="app-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {media && <div className="app-modal-media">{media}</div>}

        <div className="app-modal-body">
          {label && <span className="app-modal-label">{label}</span>}
          {title && <h3 className="app-modal-title">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
