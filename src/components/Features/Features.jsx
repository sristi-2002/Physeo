import "./Features.css";
import Reveal from "../Reveal/Reveal";

/**
 * "Why Choose Us" — circular layout using all of Promise's content.
 * The 9 highlights orbit the center circle in TWO layers (inner ring of 4,
 * outer ring of 5) spinning in opposite directions. Each card counter-
 * rotates to stay upright, fades in with a stagger, and glows on hover.
 */
/* calm medical palette — teals, blues and healing greens only */
const highlights = [
  { icon: "👨‍⚕️", text: "Expert Physiotherapy Care", color: "#2ac5d6" },
  { icon: "📋", text: "Personalized Rehabilitation Programs", color: "#1976d2" },
  { icon: "💊", text: "Advanced Pain Management Solutions", color: "#00a39a" },
  { icon: "🦴", text: "Spine & Musculoskeletal Rehabilitation", color: "#2e8b9e" },
  { icon: "🏃", text: "Sports Injury Recovery", color: "#2e7d6b" },
  { icon: "🧠", text: "Neurological Rehabilitation", color: "#0d8abc" },
  { icon: "🏠", text: "Home Physiotherapy Services", color: "#17a589" },
  { icon: "🔬", text: "Evidence-Based Treatment Approach", color: "#3b7ea1" },
  { icon: "❤️", text: "Compassionate Patient Care", color: "#138086" },
];

const innerCards = highlights.slice(0, 4);
const outerCards = highlights.slice(4);

function OrbitCard({ item, index, angle }) {
  return (
    <div className="orbit-item" style={{ "--angle": `${angle}deg` }}>
      <div className="orbit-spin">
        <div
          className="orbit-card"
          style={{ "--c": item.color, animationDelay: `${index * 120}ms` }}
        >
          <span className="orbit-card-icon">{item.icon}</span>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}

const Features = () => {
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
      </div>

      <div className="orbit-stage">
        {/* colorful spinning glow + ring layers + pulse */}
        <div className="orbit-glow"></div>
        <div className="orbit-rings"></div>
        <div className="orbit-dashed"></div>
        <div className="orbit-pulse"></div>

        {/* static center circle */}
        <div className="orbit-center">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
            alt="Addlife Physiocare"
          />
          <div className="orbit-center-overlay">
            <strong>Addlife Physiocare</strong>
            <em>We Keep You Moving.</em>
          </div>
        </div>

        {/* outer ring — 5 cards */}
        <div className="orbit-rotor outer">
          {outerCards.map((item, index) => (
            <OrbitCard
              key={index}
              item={item}
              index={index + 4}
              angle={(360 / outerCards.length) * index}
            />
          ))}
        </div>

        {/* inner ring — 4 cards */}
        <div className="orbit-rotor inner">
          {innerCards.map((item, index) => (
            <OrbitCard
              key={index}
              item={item}
              index={index}
              angle={(360 / innerCards.length) * index + 45}
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
          >
            <span className="orbit-card-icon">{item.icon}</span>
            {item.text}
          </Reveal>
        ))}
      </div>

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
