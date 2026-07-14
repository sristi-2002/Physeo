import "./Techniques.css";
import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";

const techniques = [
  {
    icon: "🤲",
    name: "Manual Therapy",
    desc: "Hands-on joint mobilization, manipulation and soft-tissue techniques that relieve pain, restore movement and improve joint function.",
  },
  {
    icon: "🏋️",
    name: "Therapeutic Exercise",
    desc: "Structured, progressive exercise programs that rebuild strength, flexibility and endurance for safe, lasting recovery.",
  },
  {
    icon: "⚡",
    name: "Electrotherapy",
    desc: "Clinically proven modalities like TENS, ultrasound and IFT to reduce pain, control inflammation and speed up tissue healing.",
  },
  {
    icon: "📍",
    name: "Dry Needling",
    desc: "Fine needles target trigger points to release tight muscles, ease chronic pain and restore normal movement patterns.",
  },
  {
    icon: "🩹",
    name: "Kinesio Taping",
    desc: "Elastic therapeutic taping that supports muscles and joints, reduces swelling and aids movement without limiting mobility.",
  },
  {
    icon: "💪",
    name: "Strength Training",
    desc: "Targeted resistance work that rebuilds muscle strength, stability and functional capacity after injury or surgery.",
  },
  {
    icon: "⚖️",
    name: "Balance Training",
    desc: "Exercises that sharpen stability, coordination and proprioception to prevent falls and build confidence in movement.",
  },
  {
    icon: "🔄",
    name: "Functional Rehabilitation",
    desc: "Task-specific training that restores the everyday movements you need for work, sport and daily living.",
  },
  {
    icon: "🚶",
    name: "Mobility Training",
    desc: "Guided stretching and joint mobility work to improve flexibility, range of motion and freedom of movement.",
  },
  {
    icon: "🧍",
    name: "Posture Correction",
    desc: "Assessment and correction of postural imbalances to relieve strain, prevent pain and improve alignment.",
  },
  {
    icon: "🪑",
    name: "Ergonomic Education",
    desc: "Practical guidance on workspace setup, movement and daily habits to prevent strain and recurring injury.",
  },
  {
    icon: "💆",
    name: "Pain Management Programs",
    desc: "Comprehensive, non-surgical programs that combine multiple techniques to reduce pain and restore function long-term.",
  },
];

export default function Techniques() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section className="techniques">
      <div className="techniques-header">
        <Reveal className="section-title-tech">
          <span className="tech-line"></span>
          <p>
            <Letters text="ADVANCED TREATMENT TECHNIQUES" step={26} />
          </p>
        </Reveal>

        <Reveal as="h2" delay={80} className="tech-h2">
          <span className="plain">
            <Letters text="Modern, " step={20} />
          </span>
          <span className="hl">
            <Letters text="Evidence-Based" base={170} step={20} />
          </span>
          <span className="plain">
            <Letters text=" Methods" base={460} step={20} />
          </span>
        </Reveal>

        <Reveal as="p" delay={140} className="techniques-sub">
          At Addlife Physiocare, we utilize modern evidence-based treatment
          methods to ensure safe and effective outcomes.
        </Reveal>
      </div>

      <div className="techniques-grid">
        {techniques.map((tech, index) => (
          <Reveal
            key={index}
            delay={(index % 3) * 80}
            direction="up"
            as="button"
            className="technique-card"
            onClick={() => setSelected(tech)}
          >
            <div className="technique-icon">{tech.icon}</div>
            <h4>{tech.name}</h4>
            <span className="technique-more">
              View details <ArrowUpRight size={14} />
            </span>
          </Reveal>
        ))}
      </div>

      {/* centered detail popup */}
      {selected && (
        <div
          className="tech-popup-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="tech-popup"
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tech-popup-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <span className="tech-popup-icon">{selected.icon}</span>
            <h3 className="tech-popup-title">{selected.name}</h3>
            <p className="tech-popup-text">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
