import "./WhyChoose.css";
import Reveal from "../Reveal/Reveal";

const reasons = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Physiotherapists",
    desc: "Highly skilled professionals committed to delivering exceptional patient care.",
  },
  {
    icon: "📋",
    title: "Personalized Treatment Plans",
    desc: "Customized rehabilitation programs designed according to individual needs and recovery goals.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Physiotherapy",
    desc: "Scientifically proven treatment techniques that ensure safe and effective outcomes.",
  },
  {
    icon: "🌿",
    title: "Holistic Rehabilitation Approach",
    desc: "Focused on pain relief, movement restoration, injury prevention, and long-term wellness.",
  },
  {
    icon: "❤️",
    title: "Patient-Centered Care",
    desc: "Compassionate support throughout every stage of recovery.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose-header">
        <Reveal className="section-title-wc">
          <span></span>
          <p>WHY CHOOSE ADDLIFE PHYSIOCARE?</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Why Patients <span>Trust Us</span>
        </Reveal>
      </div>

      <div className="why-choose-grid">
        {reasons.map((item, index) => (
          <Reveal
            key={index}
            delay={(index % 3) * 120}
            direction="up"
            className="why-card"
          >
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="why-number">
              0{index + 1}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
