import "./Techniques.css";
import Reveal from "../Reveal/Reveal";

const techniques = [
  { icon: "🤲", name: "Manual Therapy" },
  { icon: "🏋️", name: "Therapeutic Exercise" },
  { icon: "⚡", name: "Electrotherapy" },
  { icon: "📍", name: "Dry Needling" },
  { icon: "🩹", name: "Kinesio Taping" },
  { icon: "💪", name: "Strength Training" },
  { icon: "⚖️", name: "Balance Training" },
  { icon: "🔄", name: "Functional Rehabilitation" },
  { icon: "🚶", name: "Mobility Training" },
  { icon: "🧍", name: "Posture Correction" },
  { icon: "🪑", name: "Ergonomic Education" },
  { icon: "💆", name: "Pain Management Programs" },
];

export default function Techniques() {
  return (
    <section className="techniques">
      <div className="techniques-header">
        <Reveal className="section-title-tech">
          <span></span>
          <p>ADVANCED TREATMENT TECHNIQUES</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Modern, <span>Evidence-Based</span> Methods
        </Reveal>

        <Reveal as="p" delay={140} className="techniques-sub">
          At Addlife Physiocare, we utilize modern evidence-based
          treatment methods to ensure safe and effective outcomes.
        </Reveal>
      </div>

      <div className="techniques-grid">
        {techniques.map((tech, index) => (
          <Reveal
            key={index}
            delay={(index % 4) * 90}
            direction="up"
            className="technique-card"
          >
            <div className="technique-icon">{tech.icon}</div>
            <h4>{tech.name}</h4>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
