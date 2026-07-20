import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./VisionMission.css";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";
import Modal from "../Modal/Modal";

const vision =
  "To be recognized as a leading center of excellence in physiotherapy, rehabilitation, spine care, pain management, and wellness through compassionate, evidence-based, and patient-focused healthcare.";

const mission = [
  "Deliver high-quality physiotherapy and rehabilitation services.",
  "Promote healthy movement and active lifestyles.",
  "Provide evidence-based treatment solutions.",
  "Empower patients through education and preventive care.",
  "Improve mobility, function, and quality of life.",
];

export default function VisionMission() {
  // null | "vision" | "mission" — drives the mobile popup only.
  const [openPanel, setOpenPanel] = useState(null);

  return (
    <section className="vision-mission">
      <div className="vm-header">
        <Reveal className="section-title-vm">
          <span className="vm-line"></span>
          <p>
            <Letters text="OUR VISION & MISSION" step={26} />
          </p>
        </Reveal>

        <Reveal as="h2" delay={80} className="vm-h2">
          <span className="plain">
            <Letters text="Driven By " step={20} />
          </span>
          <span className="hl">
            <Letters text="Purpose" base={200} step={20} />
          </span>
          <span className="plain">
            <Letters text=", Focused On You" base={360} step={20} />
          </span>
        </Reveal>
      </div>

      <div className="vm-grid">
        <Reveal direction="left" className="vm-card vision-card">
          <div className="vm-icon">🌟</div>
          <h3>
            <Letters text="Our Vision" step={28} />
          </h3>
          <p>
            <Letters text={vision} step={9} />
          </p>
        </Reveal>

        <Reveal direction="right" delay={120} className="vm-card mission-card">
          <div className="vm-icon">🎯</div>
          <h3>
            <Letters text="Our Mission" step={28} />
          </h3>
          <ul>
            {mission.map((item, index) => (
              <li key={index}>
                <Letters text={item} base={index * 140} step={11} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Mobile — the two cards collapse to buttons that open a popup. */}
      <div className="vm-buttons">
        <button className="vm-btn" onClick={() => setOpenPanel("vision")}>
          <span className="vm-btn-icon">🌟</span>
          <span className="vm-btn-label">Our Vision</span>
          <span className="vm-btn-more">
            View details
            <ArrowUpRight size={13} />
          </span>
        </button>

        <button className="vm-btn" onClick={() => setOpenPanel("mission")}>
          <span className="vm-btn-icon">🎯</span>
          <span className="vm-btn-label">Our Mission</span>
          <span className="vm-btn-more">
            View details
            <ArrowUpRight size={13} />
          </span>
        </button>
      </div>

      <Modal
        open={openPanel !== null}
        onClose={() => setOpenPanel(null)}
        label="Our Vision & Mission"
        title={openPanel === "mission" ? "Our Mission" : "Our Vision"}
      >
        {openPanel === "vision" && <p className="vm-modal-text">{vision}</p>}

        {openPanel === "mission" && (
          <ul className="vm-modal-list">
            {mission.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </Modal>
    </section>
  );
}
