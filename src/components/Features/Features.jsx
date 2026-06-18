import React from "react";
import "./Features.css";
import Reveal from "../Reveal/Reveal";

const progressData = [
  { title: "Evidence-Based Physiotherapy", value: 95 },
  { title: "Personalized Treatment Plans", value: 92 },
  { title: "Patient-Centered Care", value: 90 },
];

const steps = [
  { step: "Step 1", title: "Book Your Consultation", className: "step1" },
  { step: "Step 2", title: "Initial Health Consultation", className: "step2" },
  { step: "Step 3", title: "Full Body Assessment", className: "step3" },
  {
    step: "Step 4",
    title: "Customized Treatment Plan",
    className: "step4",
    active: true,
  },
  { step: "Step 5", title: "Hands-On Therapy", className: "step5" },
  { step: "Step 6", title: "Progress & Recovery", className: "step6" },
];

const Features = () => {
  return (
    <section className="features">
      {/* TOP SECTION */}
      <div className="features-top">
        <Reveal direction="left" className="features-images">
          <div className="img-grid">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=900&q=80"
              alt="Physiotherapy"
              className="main-img"
            />

            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80"
              alt="Therapy"
              className="main-img"
            />

            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80"
              alt="Consultation"
              className="small-img"
            />
          </div>

          <div className="partners">
            <span>BEGONIA</span>
            <span>CUTING</span>
            <span>PETA</span>
            <span>PRAD</span>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="features-content">
          <p className="subtitle">WHY CHOOSE US</p>

          <h2>
            Why Choose <span>Addlife Physiocare</span>
          </h2>

          <p className="description">
            Experienced physiotherapists, customized rehabilitation programs,
            and scientifically proven techniques. Our holistic approach focuses
            on pain relief, movement restoration, injury prevention, and
            long-term wellness.
          </p>

          {progressData.map((item, index) => (
            <div className="progress-item" key={index}>
              <div className="progress-header">
                <span>{item.title}</span>
                <span>{item.value}%</span>
              </div>

              <div className="progress-bar">
                <div style={{ width: `${item.value}%` }}></div>
              </div>
            </div>
          ))}

          <button className="btn-primary">
            Book This Service →
          </button>
        </Reveal>
      </div>

      {/* BOTTOM SECTION */}
      <div className="recovery-section">
        <Reveal as="p" className="subtitle">TRUSTED CARE</Reveal>

        <Reveal as="h2" delay={80}>
          How It <span>Works</span> Your Path <br />
          To Recovery
        </Reveal>

        <div className="recovery-container">
          <div className="circle-bg"></div>

          <div className="center-image">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
              alt="Recovery Process"
            />
          </div>

          {steps.map((item, index) => (
            <div className={`step ${item.className}`} key={index}>
              <span>{item.step}</span>

              <button className={item.active ? "active" : ""}>
                {item.title}
              </button>

              {item.active && (
                <div className="step-card">
                  Receive a personalized treatment plan designed to target
                  your condition, speed recovery, and improve mobility.
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="btn-primary bottom-btn">
          Book This Service →
        </button>
      </div>
    </section>
  );
};

export default Features;