import "./Experts.css";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    title: "Orthopedic Physiotherapy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    title: "Sports Injury Rehabilitation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    title: "Spine Care & Manual Therapy",
    subtitle: "Posture & Mobility",
    active: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
    title: "Neurological Physiotherapy",
  },
];

export default function Experts() {
  return (
    <section className="expertise">
      <div className="expertise-header">
        <Reveal className="section-title">
          <span></span>
          <p>PHYSIO CATEGORIES</p>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Comprehensive Physiotherapy <span>Solution</span>
          <br />
          For <span>Pain Relief</span> And Recovery
        </Reveal>
      </div>

      <div className="cards">
        {services.map((item, index) => (
          <Reveal
            direction="up"
            delay={index * 120}
            className="service-card"
            key={index}
          >
            <img src={item.image} alt={item.title} />

            <button
              className={`arrow-btn ${
                item.active ? "active" : ""
              }`}
            >
              <ArrowUpRight size={18} />
            </button>

            <div className="card-overlay">
              {item.subtitle && (
                <p className="small">{item.subtitle}</p>
              )}

              <h3>{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>

      {/* <div className="slider-dots">
        <span></span>
        <span className="active"></span>
        <span></span>
      </div> */}
    </section>
  );
}