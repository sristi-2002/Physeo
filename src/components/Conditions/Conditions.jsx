import "./Conditions.css";
import Reveal from "../Reveal/Reveal";

const conditions = [
  "Back Pain",
  "Neck Pain",
  "Knee Pain",
  "Shoulder Pain",
  "Frozen Shoulder",
  "Arthritis",
  "Ankylosing Spondylitis",
  "Sciatica",
  "Sports Injuries",
  "Stroke",
  "Parkinson’s Disease",
  "Bell’s Palsy",
  "Balance Disorders",
  "Joint Pain",
  "Muscle Injuries",
  "Ligament Injuries",
  "Spinal Disorders",
  "Post-Surgical Conditions",
  "Chronic Pain Conditions",
  "Mobility Limitations",
];

export default function Conditions() {
  return (
    <section className="conditions">
      <div className="conditions-header">
        <Reveal className="section-title-cond">
          <span></span>
          <p>CONDITIONS WE TREAT</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Conditions We <span>Treat</span>
        </Reveal>

        <Reveal as="p" delay={140} className="conditions-sub">
          From everyday aches to complex neurological conditions, our
          evidence-based physiotherapy helps you recover and stay
          pain-free.
        </Reveal>
      </div>

      <div className="conditions-grid">
        {conditions.map((item, index) => (
          <Reveal
            key={index}
            delay={(index % 5) * 60}
            direction="zoom"
            className="condition-chip"
          >
            <span className="chip-dot"></span>
            {item}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
