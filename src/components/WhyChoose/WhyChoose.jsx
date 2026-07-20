import "./WhyChoose.css";
import { useState } from "react";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";
import Modal from "../Modal/Modal";
import img20 from "../../assets/22.jpeg";
import img21 from "../../assets/11.jpeg";
import img22 from "../../assets/10.jpeg";
import img23 from "../../assets/12.jpeg";
import img24 from "../../assets/15.jpeg";

/**
 * "Why Patients Trust Us" — split showcase.
 * Left: the reasons as a vertical tab list. Right: a large panel showing the
 * selected reason's image and highlights. Selecting a tab swaps the panel.
 */
const reasons = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Physiotherapists",
    desc: "Highly skilled professionals committed to delivering exceptional patient care.",
    image: img20,
    points: [
      "Licensed, degree-qualified physiotherapists",
      "Years of hands-on clinical experience",
      "Ongoing training in the latest techniques",
    ],
  },
  {
    icon: "📋",
    title: "Personalized Treatment Plans",
    desc: "Customized rehabilitation programs designed according to individual needs and recovery goals.",
    image: img21,
    points: [
      "One-to-one assessment before you start",
      "Plan built around your goals and lifestyle",
      "Adjusted as your recovery progresses",
    ],
  },
  {
    icon: "🔬",
    title: "Evidence-Based Physiotherapy",
    desc: "Scientifically proven treatment techniques that ensure safe and effective outcomes.",
    image: img22,
    points: [
      "Techniques backed by clinical research",
      "Safe, proven treatment protocols",
      "Measurable, trackable outcomes",
    ],
  },
  {
    icon: "🌿",
    title: "Holistic Rehabilitation Approach",
    desc: "Focused on pain relief, movement restoration, injury prevention, and long-term wellness.",
    image: img23,
    points: [
      "Pain relief and movement restoration",
      "Guidance to prevent future injury",
      "Focus on long-term wellbeing",
    ],
  },
  {
    icon: "❤️",
    title: "Patient-Centered Care",
    desc: "Compassionate support throughout every stage of recovery.",
    image: img24,
    points: [
      "Compassionate support at every visit",
      "Clear communication throughout",
      "Care that adapts to your needs",
    ],
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState(0);
  // Mobile popup keeps its own index so opening/closing it never disturbs
  // which reason the desktop showcase is displaying.
  const [openIndex, setOpenIndex] = useState(null);
  const item = reasons[active] || reasons[0];
  const popup = openIndex === null ? null : reasons[openIndex];

  return (
    <section className="why-choose">
      <Reveal className="wc-head">
        <div className="wc-head-left">
          <span className="wc-tag">
            <span className="wc-tag-line"></span>
            <span className="wc-tag-text">
              <Letters text="PATIENTS TRUSTED US" step={30} />
            </span>
          </span>
          <h2 className="wc-h2">
            <span className="plain">
              <Letters text="Why Patients " step={20} />
            </span>
            <span className="hl">
              <Letters text="Trust Us" base={260} step={20} />
            </span>
          </h2>
        </div>

        <button className="wc-viewall">
          View All <Plus size={16} />
        </button>
      </Reveal>

      <Reveal direction="up" delay={80} className="wc-split">
        {/* left — tab list */}
        <div className="wc-tabs" role="tablist">
          {reasons.map((r, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={isActive}
                className={`wc-tab ${isActive ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="wc-tab-num">{`0${i + 1}`}</span>
                <span className="wc-tab-icon">{r.icon}</span>
                <span className="wc-tab-text">
                  <span className="wc-tab-title">{r.title}</span>
                  <span className="wc-tab-desc">{r.desc}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* right — showcase panel (re-mounts on change to animate in) */}
        <div className="wc-showcase" key={active}>
          <div className="wc-showcase-media">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="wc-showcase-body">
            <span className="wc-showcase-label">What you get</span>
            <ul className="wc-points">
              {item.points.map((point, i) => (
                <li key={i}>
                  <Check size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a className="wc-cta" href="#appointment">
              Book a session
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>

      {/* Mobile — compact card grid; tapping a card opens the full detail
          (image, description, points, CTA) in a popup. */}
      <div className="wc-cards">
        {reasons.map((r, i) => (
          <button
            key={i}
            className="wc-card"
            onClick={() => setOpenIndex(i)}
            aria-label={`${r.title} — view details`}
          >
            <span className="wc-card-num">{`0${i + 1}`}</span>
            <span className="wc-card-icon">{r.icon}</span>
            <span className="wc-card-title">{r.title}</span>
            <span className="wc-card-more">
              View details
              <ArrowUpRight size={14} />
            </span>
          </button>
        ))}
      </div>

      <Modal
        open={popup !== null}
        onClose={() => setOpenIndex(null)}
        label="Why patients trust us"
        title={popup?.title}
        media={popup && <img src={popup.image} alt={popup.title} />}
      >
        {popup && (
          <>
            <p className="wc-modal-desc">{popup.desc}</p>
            <ul className="wc-points">
              {popup.points.map((point, p) => (
                <li key={p}>
                  <Check size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              className="wc-cta"
              href="#appointment"
              onClick={() => setOpenIndex(null)}
            >
              Book a session
              <ArrowUpRight size={16} />
            </a>
          </>
        )}
      </Modal>
    </section>
  );
}
