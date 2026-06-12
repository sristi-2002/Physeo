import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800"
            alt="Physiotherapist"
            className="img-large"
          />

          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800"
            alt="Therapy"
            className="img-top"
          />

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"
            alt="Treatment"
            className="img-bottom"
          />

          <div className="experience-circle">
            <h3>15+</h3>
            <p>YRS OF EXPERIENCE</p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-tag">
            <span className="tag-line"></span>
            ABOUT US CARE
          </div>

          <h2>
            Dedicated To <span>Providing Expert</span>
            <br />
            <span>Care</span> And Rehabilitation
          </h2>

          <p className="about-bold">
            Physiotherapists Are Silent Healers, Working Behind The
            Scenes To Restore Strength, Ease Pain, And Rebuild
            Movement.
          </p>

          <p className="about-text">
            True Care Is Measured Not Only In Treatments, But In
            Trust, Consistency, And Compassion. It’s Seen In The
            Progress Made One Step At A Time.
          </p>

          <div className="about-divider"></div>

          <div className="doctor-row">
            <div className="doctor-info">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              />

              <div>
                <small>CHIEF DOCTOR</small>
                <h4>Rohit Warner Jackson</h4>
              </div>
            </div>

            <div className="signature">Reimuth</div>
          </div>

          <button className="learn-btn">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}