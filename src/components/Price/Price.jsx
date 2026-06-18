import React, { useState } from "react";
import "./Price.css";
import Reveal from "../Reveal/Reveal";

const Schedules = () => {
  const [plan, setPlan] = useState("monthly");

  const plans = [
    {
      title: "Pain Relief",
      price: "₹600",
      features: [
        "Back Pain Therapy",
        "Neck Pain Relief",
        "Joint Pain Management",
        "Sciatica & Arthritis Care",
      ],
    },
    {
      title: "Injury Recovery",
      price: "₹900",
      active: true,
      features: [
        "Sports Injury Rehab",
        "Post-Surgical Recovery",
        "Sprain/Strain Care",
        "Ligament Tear Recovery",
      ],
    },
    {
      title: "Mobility & Neuro Rehab",
      price: "₹1500",
      features: [
        "Gait & Balance Training",
        "Stroke Rehabilitation",
        "Geriatric Mobility Care",
        "Home Physiotherapy",
      ],
    },
  ];

  return (
    <section className="schedule-section">
      <Reveal as="span" className="schedule-tag">DISCOUNTED PLANS</Reveal>

      <Reveal as="h2" delay={80}>
        Affordable <span>Physiotherapy Plans</span>
      </Reveal>

      <div className="billing-toggle">
        <button
          className={plan === "yearly" ? "active" : ""}
          onClick={() => setPlan("yearly")}
        >
          Yearly
        </button>

        <button
          className={plan === "monthly" ? "active" : ""}
          onClick={() => setPlan("monthly")}
        >
          Monthly
        </button>
      </div>

      <div className="plans-grid">
        {plans.map((item, index) => (
          <Reveal
            direction="up"
            delay={index * 120}
            className={`plan-card ${
              item.active ? "featured-card" : ""
            }`}
            key={index}
          >
            <h3>{item.title}</h3>

            <div className="price">
              {item.price}
              <span>/Session</span>
            </div>

            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <button className="book-btn">
              Book Now
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Schedules;