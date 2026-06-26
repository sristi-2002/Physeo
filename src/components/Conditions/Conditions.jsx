import "./Conditions.css";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";

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
          <span className="cond-line"></span>
          <p>
            <Letters text="CONDITIONS WE TREAT" step={28} />
          </p>
        </Reveal>

        <Reveal as="h2" delay={80} className="cond-h2">
          <span className="plain">
            <Letters text="Conditions We " step={20} />
          </span>
          <span className="hl">
            <Letters text="Treat" base={280} step={20} />
          </span>
        </Reveal>

        <Reveal as="p" delay={140} className="conditions-sub">
          From everyday aches to complex neurological conditions, our
          evidence-based physiotherapy helps you recover and stay pain-free.
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
            <span className="chip-text">{item}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
