import "./Services.css";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: "🦴",
    title: "Orthopedic Rehabilitation",
    description:
      "We Offer Personalized Treatment Plans For Joint Pain And Fractures. Our Focus Is On Mobility Recovery With Expert Care.",
  },
  {
    icon: "🏃",
    title: "Shockwave Physical Therapy",
    description:
      "We Provide Specialized Care For Athletic Injuries. Ensuring A Fast, Safe, And Confident Return To Activity.",
    active: true,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400",
  },
  {
    icon: "⚕️",
    title: "Post-Surgical Recovery",
    description:
      "We Offer Personalized Treatment Plans For Joint Pain And Fractures. Our Focus Is On Mobility Recovery With Expert Care.",
  },
  {
    icon: "🧍",
    title: "Pelvis Physiotherapy",
    description:
      "We Offer Personalized Treatment Plans For Joint Pain And Fractures. Our Focus Is On Mobility Recovery With Expert Care.",
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <div className="section-tag">
          <span></span>
          TRUSTED CARE SERVICES
        </div>

        <div className="header-row">
          <h2>
            Your Journey <span>To Recovery Starts</span> Here
          </h2>

          <button className="view-btn">
            View All
            <span>+</span>
          </button>
        </div>
      </div>

      {services.map((service, index) => (
        <div key={index}>
          <div className="service-row">
            <div className="service-icon">
              {service.icon}
            </div>

            <h3
              className={
                service.active ? "active-title" : ""
              }
            >
              {service.title}
            </h3>

            <p>{service.description}</p>

            <button
              className={`arrow-circle ${
                service.active ? "active" : ""
              }`}
            >
              <ArrowUpRight size={18} />
            </button>
          </div>

          {service.image && (
            <div className="service-image">
              <img src={service.image} alt="" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}