import "./WhyChoose.css";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/**
 * "Why Patients Trust Us" — expandable accordion list.
 * Each reason is a row (icon · title · description · arrow). Clicking a row
 * opens it and reveals a large image; opening one closes the others.
 */
const reasons = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Physiotherapists",
    desc: "Highly skilled professionals committed to delivering exceptional patient care.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: "📋",
    title: "Personalized Treatment Plans",
    desc: "Customized rehabilitation programs designed according to individual needs and recovery goals.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Physiotherapy",
    desc: "Scientifically proven treatment techniques that ensure safe and effective outcomes.",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: "🌿",
    title: "Holistic Rehabilitation Approach",
    desc: "Focused on pain relief, movement restoration, injury prevention, and long-term wellness.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: "❤️",
    title: "Patient-Centered Care",
    desc: "Compassionate support throughout every stage of recovery.",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState(1);

  return (
    <section className="why-choose">
      <Reveal className="wc-head">
        <div className="wc-head-left">
          <span className="wc-tag">
            <span className="wc-tag-line"></span>
            TRUSTED CARE
          </span>
          <h2>
            Why Patients <span>Trust Us</span>
          </h2>
        </div>

        <button className="wc-viewall">
          View All <Plus size={16} />
        </button>
      </Reveal>

      <div className="wc-list">
        {reasons.map((item, index) => {
          const isOpen = active === index;
          return (
            <Reveal
              key={index}
              direction="up"
              delay={index * 100}
              className="wc-item-wrap"
            >
              <div
                className={`wc-item ${isOpen ? "open" : ""}`}
                onClick={() => setActive(index)}
              >
                <div className="wc-row">
                  <span className="wc-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="wc-arrow">
                    {isOpen ? (
                      <ArrowUpRight size={18} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </span>
                </div>

                <div className="wc-media">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
