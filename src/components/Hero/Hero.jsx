import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-content">

        <div className="trusted-care">
          <span className="line"></span>
          <span>TRUSTED CARE</span>
        </div>

       <h1>
  Your Dream <span>Smile</span>
  <br />
  <span>Starts</span>
  <br />
  With <span>Us</span> Today
</h1>

        <p>
          Experience Compassionate Care And Advanced Dental Solutions
          <br />
          For A Healthier, Brighter Smile.
        </p>

        <div className="hero-buttons">
          <button className="email-btn">
            Info@Physeo.Com
          </button>

          <button className="phone-btn">
            + 864 846 75324
          </button>
        </div>
      </div>

      <div className="slider">
        <span></span>
        <span className="active"></span>
        <span></span>
      </div>
    </section>
  );
}