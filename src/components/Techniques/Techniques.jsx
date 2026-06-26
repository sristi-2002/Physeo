import "./Techniques.css";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";

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
            delay={(index % 4) * 80}
            direction="up"
            className="technique-card"
          >
            <div className="technique-icon">{tech.icon}</div>
            <h4>
              <Letters text={tech.name} base={index * 60} step={22} />
            </h4>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
