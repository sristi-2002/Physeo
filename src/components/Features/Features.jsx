import "./Features.css";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/**
 * "Everything You Need To Move Better" — services orbit the center in two
 * counter-rotating rings. Clicking any card (or the center "Our Commitment"
 * card) opens a centered popup with that service's full description.
 */
/* calm medical palette — teals, blues and healing greens only */
const highlights = [
  {
    icon: "👨‍⚕️",
    text: "Expert Physiotherapy Care",
    color: "#2ac5d6",
    details:
      "Our team of qualified and experienced physiotherapists provides comprehensive assessment, accurate clinical diagnosis, and individualized treatment based on the latest evidence and international best practices. As one of the trusted providers of physiotherapy treatment in Kolkata, we focus on identifying the root cause of pain and movement dysfunction rather than simply treating symptoms. Our goal is long-term recovery, improved mobility, injury prevention, and enhanced quality of life.",
  },
  {
    icon: "📋",
    text: "Personalized Rehabilitation Programs",
    color: "#1976d2",
    details:
      "Every patient has unique clinical needs and recovery goals. Following a detailed assessment, we design customized rehabilitation programs tailored to the patient's diagnosis, physical condition, occupation, lifestyle, and functional requirements. Our personalized approach supports faster recovery from orthopaedic injuries, neurological conditions, sports injuries, chronic pain, arthritis, and post-operative rehabilitation, while regular reassessment ensures continuous progress.",
  },
  {
    icon: "💊",
    text: "Advanced Pain Management Solutions",
    color: "#00a39a",
    details:
      "We provide comprehensive, non-surgical pain relief physiotherapy in Kolkata using scientifically validated rehabilitation techniques. Our treatment plans combine manual therapy, therapeutic exercise, electrotherapy, soft tissue mobilization, posture correction, movement retraining, ergonomic education, and evidence-based physiotherapy to reduce pain, restore mobility, improve function, and minimize dependence on medication.",
  },
  {
    icon: "🦴",
    text: "Spine & Musculoskeletal Rehabilitation",
    color: "#2e8b9e",
    details:
      "We specialize in diagnosing and treating a wide range of spine and musculoskeletal disorders, including back pain, neck pain, cervical spondylosis, lumbar spondylosis, slipped disc, sciatica, frozen shoulder, knee pain, osteoarthritis, joint pain, muscle injuries, ligament injuries, postural disorders, and work-related musculoskeletal conditions. Our rehabilitation programs focus on restoring strength, flexibility, balance, mobility, and long-term functional independence.",
  },
  {
    icon: "🏃",
    text: "Sports Injury Rehabilitation & Performance Recovery",
    color: "#2e7d6b",
    details:
      "Our sports physiotherapy and sports injury rehabilitation programs are designed for athletes and active individuals recovering from ACL injuries, ligament tears, muscle strains, tendon injuries, rotator cuff injuries, ankle sprains, tennis elbow, overuse injuries, and post-surgical sports rehabilitation. We emphasize tissue healing, biomechanical correction, neuromuscular control, performance optimization, injury prevention, and a safe return to sports.",
  },
  {
    icon: "🧠",
    text: "Neurological Rehabilitation",
    color: "#0d8abc",
    details:
      "We provide comprehensive neurological physiotherapy in Kolkata for individuals recovering from stroke, Parkinson's disease, spinal cord injury, multiple sclerosis, Bell's palsy, peripheral nerve injuries, vestibular disorders, balance problems, and gait dysfunction. Our individualized rehabilitation programs aim to improve mobility, coordination, muscle strength, balance, independence, and overall quality of life.",
  },
  {
    icon: "🏠",
    text: "Home Physiotherapy Services",
    color: "#17a589",
    details:
      "For patients who cannot visit our clinic, Addlife Physiocare offers professional home physiotherapy services in Kolkata. Our experienced physiotherapists provide home-based rehabilitation for elderly patients, post-operative recovery, stroke rehabilitation, neurological conditions, chronic pain, arthritis, joint replacement rehabilitation, and mobility limitations, ensuring the same clinical excellence in the comfort of your home.",
  },
  {
    icon: "🔬",
    text: "Evidence-Based Clinical Practice",
    color: "#3b7ea1",
    details:
      "Clinical excellence is founded on science. Every treatment protocol at Addlife Physiocare follows current research, international clinical guidelines, and outcome-based rehabilitation principles. Our commitment to evidence-based physiotherapy, continuous professional development, and modern rehabilitation techniques ensures safe, effective, and high-quality patient care.",
  },
  {
    icon: "❤️",
    text: "Compassionate, Ethical & Patient-Centred Care",
    color: "#138086",
    details:
      "Exceptional healthcare goes beyond clinical expertise. We believe in empathy, transparency, ethical practice, and patient education. Our physiotherapists take the time to understand every patient's condition, explain treatment options, encourage active participation, and support recovery through every stage of rehabilitation. We strive to provide one of the most trusted patient-centred physiotherapy experiences in Kolkata.",
  },
  {
    icon: "🏥",
    text: "Comprehensive Rehabilitation Under One Roof",
    color: "#1aa3b3",
    details:
      "Addlife Physiocare provides integrated rehabilitation services for orthopaedic physiotherapy, neurological physiotherapy, sports physiotherapy, geriatric rehabilitation, chronic pain management, post-surgical rehabilitation, posture correction, balance training, gait training, women's health physiotherapy, and home physiotherapy services. Our multidisciplinary approach enables us to deliver complete rehabilitation solutions that address immediate symptoms while promoting long-term recovery and wellness.",
  },
];

/* The center card — shown in the middle of the orbit. */
const commitment = {
  icon: "🤝",
  text: "Our Commitment",
  color: "#2ac5d6",
  details:
    "At Addlife Physiocare, our mission is to deliver excellence through evidence-based physiotherapy, personalized rehabilitation, advanced pain management, and compassionate patient care. We are dedicated to helping every patient relieve pain, restore movement, improve strength and mobility, prevent future injuries, and regain independence.",
};

const innerCards = highlights.slice(0, 5);
const outerCards = highlights.slice(5);

function OrbitCard({ item, index, angle, onSelect }) {
  return (
    <div className="orbit-item" style={{ "--angle": `${angle}deg` }}>
      <div className="orbit-spin">
        <button
          type="button"
          className="orbit-card"
          style={{ "--c": item.color, animationDelay: `${index * 120}ms` }}
          onClick={() => onSelect(item)}
        >
          <span className="orbit-card-icon">{item.icon}</span>
          <p>{item.text}</p>
        </button>
      </div>
    </div>
  );
}

const Features = () => {
  const [selected, setSelected] = useState(null);

  // Close the popup on Escape.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section className="features">
      <div className="features-head">
        <Reveal className="features-tag">
          <span></span>
          WHY CHOOSE ADDLIFE PHYSIOCARE?
        </Reveal>

        <Reveal as="h2" delay={80}>
          Everything You Need To <span>Move Better</span>
        </Reveal>
        <p className="features-sub">Tap any service to read the details.</p>
      </div>

      <div className="orbit-stage">
        {/* colorful spinning glow + ring layers + pulse */}
        <div className="orbit-glow"></div>
        <div className="orbit-rings"></div>
        <div className="orbit-dashed"></div>
        <div className="orbit-pulse"></div>

        {/* rotating "We Keep You Moving" ring around the center */}
        <div className="orbit-commit-text" aria-hidden="true">
          <svg viewBox="0 0 340 340">
            <defs>
              <path
                id="commitCircle"
                d="M170,170 m-140,0 a140,140 0 1,1 280,0 a140,140 0 1,1 -280,0"
              />
            </defs>
            <text>
              <textPath
                href="#commitCircle"
                startOffset="0"
                textLength="879"
                lengthAdjust="spacing"
              >
                We Keep You Moving • We Keep You Moving • We Keep You Moving •
              </textPath>
            </text>
          </svg>
        </div>

        {/* center card — Our Commitment */}
        <button
          type="button"
          className="orbit-center"
          onClick={() => setSelected(commitment)}
          aria-label="Read our commitment"
        >
          <span className="orbit-center-icon">{commitment.icon}</span>
          <strong>Our Commitment</strong>
          <em>Tap to read</em>
        </button>

        {/* outer ring — 5 cards */}
        <div className="orbit-rotor outer">
          {outerCards.map((item, index) => (
            <OrbitCard
              key={index}
              item={item}
              index={index + 5}
              angle={(360 / outerCards.length) * index}
              onSelect={setSelected}
            />
          ))}
        </div>

        {/* inner ring — 5 cards */}
        <div className="orbit-rotor inner">
          {innerCards.map((item, index) => (
            <OrbitCard
              key={index}
              item={item}
              index={index}
              angle={(360 / innerCards.length) * index + 36}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      {/* stacked fallback for small screens */}
      <div className="orbit-list">
        {highlights.map((item, index) => (
          <Reveal
            key={index}
            direction="up"
            delay={(index % 3) * 80}
            className="orbit-list-item"
            as="button"
            onClick={() => setSelected(item)}
          >
            <span className="orbit-card-icon" style={{ "--c": item.color }}>
              {item.icon}
            </span>
            {item.text}
          </Reveal>
        ))}
        <Reveal
          direction="up"
          delay={80}
          className="orbit-list-item"
          as="button"
          onClick={() => setSelected(commitment)}
        >
          <span className="orbit-card-icon" style={{ "--c": commitment.color }}>
            {commitment.icon}
          </span>
          {commitment.text}
        </Reveal>
      </div>

      {/* centered detail popup */}
      {selected && (
        <div className="feat-popup-backdrop" onClick={() => setSelected(null)}>
          <div
            className="feat-popup"
            style={{ "--c": selected.color }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.text}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="feat-popup-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <span className="feat-popup-icon">{selected.icon}</span>
            <h3 className="feat-popup-title">{selected.text}</h3>
            <p className="feat-popup-text">{selected.details}</p>
          </div>
        </div>
      )}

      <Reveal direction="zoom" delay={120} className="features-banner">
        <span className="features-banner-label">OUR PROMISE</span>
        <h3>
          Relieving Pain. <span>Restoring Function.</span> Rebuilding
          Confidence.
        </h3>
        <div className="features-brand">
          <strong>Addlife Physiocare</strong>
          <em>We Keep You Moving.</em>
        </div>
      </Reveal>
    </section>
  );
};

export default Features;
