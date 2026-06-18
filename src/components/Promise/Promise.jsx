import "./Promise.css";
import Reveal from "../Reveal/Reveal";

const highlights = [
  "Expert Physiotherapy Care",
  "Personalized Rehabilitation Programs",
  "Advanced Pain Management Solutions",
  "Spine & Musculoskeletal Rehabilitation",
  "Sports Injury Recovery",
  "Neurological Rehabilitation",
  "Home Physiotherapy Services",
  "Evidence-Based Treatment Approach",
  "Compassionate Patient Care",
];

export default function Promise() {
  return (
    <section className="promise">
      <div className="promise-header">
        <Reveal className="section-title-pr">
          <span></span>
          <p>WHY CHOOSE ADDLIFE PHYSIOCARE?</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Everything You Need To <span>Move Better</span>
        </Reveal>
      </div>

      <div className="promise-grid">
        {highlights.map((item, index) => (
          <Reveal
            key={index}
            delay={(index % 3) * 90}
            direction="up"
            className="promise-item"
          >
            <span className="promise-check">✔</span>
            {item}
          </Reveal>
        ))}
      </div>

      <Reveal direction="zoom" delay={120} className="promise-banner">
        <span className="promise-banner-label">OUR PROMISE</span>
        <h3>
          Relieving Pain. <span>Restoring Function.</span> Rebuilding
          Confidence.
        </h3>
        <div className="promise-brand">
          <strong>Addlife Physiocare</strong>
          <em>We Keep You Moving.</em>
        </div>
      </Reveal>
    </section>
  );
}
