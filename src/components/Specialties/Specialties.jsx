import "./Specialties.css";
import Reveal from "../Reveal/Reveal";

const specialties = [
  {
    icon: "🦴",
    title: "Orthopedic Physiotherapy",
    intro: "Specialized treatment for:",
    items: [
      "Back Pain",
      "Neck Pain",
      "Knee Pain",
      "Shoulder Pain",
      "Frozen Shoulder",
      "Arthritis",
      "Joint Pain",
      "Sciatica",
      "Slip Disc",
      "Cervical Spondylosis",
      "Lumbar Spondylosis",
      "Postural Disorders",
      "Musculoskeletal Injuries",
    ],
  },
  {
    icon: "🩺",
    title: "Spine Care & Manual Therapy",
    intro:
      "Advanced spine rehabilitation for spinal health, posture, mobility and flexibility through:",
    items: [
      "Manual Therapy",
      "Spinal Mobilization",
      "Posture Correction",
      "Core Strengthening",
      "Ergonomic Assessment",
      "Functional Rehabilitation",
      "Chronic Pain Management",
      "Mobility Training",
    ],
  },
  {
    icon: "🧘",
    title: "Ankylosing Spondylitis Physiotherapy",
    intro:
      "Specialized physiotherapy and rehabilitation focusing on:",
    items: [
      "Pain Relief",
      "Spinal Mobility",
      "Posture Improvement",
      "Flexibility Training",
      "Breathing Exercises",
      "Functional Rehabilitation",
      "Long-Term Exercise Programs",
    ],
  },
  {
    icon: "🏃",
    title: "Sports Physiotherapy & Injury Rehabilitation",
    intro:
      "Helping athletes and active individuals recover safely from:",
    items: [
      "Sports Injuries",
      "ACL Injuries",
      "Ligament Injuries",
      "Muscle Tears",
      "Tendon Injuries",
      "Running Injuries",
      "Ankle Sprains",
      "Overuse Injuries",
    ],
  },
  {
    icon: "🧠",
    title: "Neurological Physiotherapy & Neuro Rehab",
    intro: "Comprehensive rehabilitation for:",
    items: [
      "Stroke Rehabilitation",
      "Stroke Recovery Physiotherapy",
      "Parkinson’s Disease",
      "Bell’s Palsy",
      "Spinal Cord Injury",
      "Multiple Sclerosis",
      "Balance Disorders",
      "Gait Training",
      "Functional Rehabilitation",
    ],
  },
  {
    icon: "⚕️",
    title: "Post-Surgical Rehabilitation",
    intro: "Supporting recovery after:",
    items: [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Spine Surgery",
      "Fracture Fixation",
      "Arthroscopic Surgery",
      "Orthopedic Procedures",
    ],
  },
];

export default function Specialties() {
  return (
    <section className="specialties">
      <div className="specialties-header">
        <Reveal className="section-title-sp">
          <span></span>
          <p>OUR PHYSIOTHERAPY & REHABILITATION SERVICES</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Complete Care Across Every <span>Specialty</span>
        </Reveal>
      </div>

      <div className="specialties-grid">
        {specialties.map((spec, index) => (
          <Reveal
            key={index}
            delay={(index % 3) * 120}
            direction="up"
            className="specialty-card"
          >
            <div className="specialty-icon">{spec.icon}</div>
            <h3>{spec.title}</h3>
            <p className="specialty-intro">{spec.intro}</p>

            <ul>
              {spec.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
