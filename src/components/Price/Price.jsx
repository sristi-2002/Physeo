import React, { useState } from "react";
import "./Price.css";

const Schedules = () => {
  const [plan, setPlan] = useState("monthly");

  const plans = [
    {
      title: "Pain Relief",
      price: "$60",
      features: [
        "Back Pain Therapy",
        "Neck Pain Relief",
        "Joint Pain Management",
        "Headache Therapy",
      ],
    },
    {
      title: "Injury Recovery",
      price: "$95",
      active: true,
      features: [
        "Sports Injury Rehab",
        "Post-Fracture Therapy",
        "Sprain/Strain Care",
        "Ligament Tear Recovery",
      ],
    },
    {
      title: "Mobility Enhancement",
      price: "$150",
      features: [
        "Gait Training",
        "Balance Improvement",
        "Stroke Rehabilitation",
        "Elderly Mobility Care",
      ],
    },
  ];

  return (
    <section className="schedule-section">
      <span className="schedule-tag">DISCOUNTED PLANS</span>

      <h2>
        Affordable <span>Physiotherapy Plans</span>
      </h2>

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
          <div
            className={`plan-card ${
              item.active ? "featured-card" : ""
            }`}
            key={index}
          >
            <h3>{item.title}</h3>

            <div className="price">
              {item.price}
              <span>/Month</span>
            </div>

            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <button className="book-btn">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedules;