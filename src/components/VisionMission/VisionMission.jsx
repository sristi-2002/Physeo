import "./VisionMission.css";
import Reveal from "../Reveal/Reveal";

const mission = [
  "Deliver high-quality physiotherapy and rehabilitation services.",
  "Promote healthy movement and active lifestyles.",
  "Provide evidence-based treatment solutions.",
  "Empower patients through education and preventive care.",
  "Improve mobility, function, and quality of life.",
];

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vm-header">
        <Reveal className="section-title-vm">
          <span></span>
          <p>OUR VISION & MISSION</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Driven By <span>Purpose</span>, Focused On You
        </Reveal>
      </div>

      <div className="vm-grid">
        <Reveal direction="left" className="vm-card vision-card">
          <div className="vm-icon">🌟</div>
          <h3>Our Vision</h3>
          <p>
            To be recognized as a leading center of excellence in
            physiotherapy, rehabilitation, spine care, pain management,
            and wellness through compassionate, evidence-based, and
            patient-focused healthcare.
          </p>
        </Reveal>

        <Reveal direction="right" delay={120} className="vm-card mission-card">
          <div className="vm-icon">🎯</div>
          <h3>Our Mission</h3>
          <ul>
            {mission.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
