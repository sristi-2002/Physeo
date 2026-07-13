import "./WhyChoose.css";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";
import img20 from "../../assets/22.jpeg";
import img21 from "../../assets/11.jpeg";
import img22 from "../../assets/10.jpeg";
import img23 from "../../assets/12.jpeg";
import img24 from "../../assets/15.jpeg";
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
    image: img20,
  },
  {
    icon: "📋",
    title: "Personalized Treatment Plans",
    desc: "Customized rehabilitation programs designed according to individual needs and recovery goals.",
    image: img21,
  },
  {
    icon: "🔬",
    title: "Evidence-Based Physiotherapy",
    desc: "Scientifically proven treatment techniques that ensure safe and effective outcomes.",
    image: img22,
  },
  {
    icon: "🌿",
    title: "Holistic Rehabilitation Approach",
    desc: "Focused on pain relief, movement restoration, injury prevention, and long-term wellness.",
    image: img23,
  },
  {
    icon: "❤️",
    title: "Patient-Centered Care",
    desc: "Compassionate support throughout every stage of recovery.",
    image: img24,
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState(0);

  return (
    <section className="why-choose">
      <Reveal className="wc-head">
        <div className="wc-head-left">
          <span className="wc-tag">
            <span className="wc-tag-line"></span>
            <span className="wc-tag-text">
              <Letters text="TRUSTED CARE" step={30} />
            </span>
          </span>
          <h2 className="wc-h2">
            <span className="plain">
              <Letters text="Why Patients " step={20} />
            </span>
            <span className="hl">
              <Letters text="Trust Us" base={260} step={20} />
            </span>
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
                  <h3>
                    <Letters text={item.title} step={26} />
                  </h3>
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
