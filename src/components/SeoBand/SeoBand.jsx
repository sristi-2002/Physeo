import "./SeoBand.css";
import Reveal from "../Reveal/Reveal";

const keywords = [
  "Best Physiotherapy Clinic in Salt Lake Sector III",
  "Best Physiotherapist",
  "Physiotherapy Near Me",
  "Back Pain Treatment",
  "Neck Pain Treatment",
  "Knee Pain Physiotherapy",
  "Sports Physiotherapy",
  "Sports Injury Rehabilitation",
  "Stroke Rehabilitation",
  "Neurological Physiotherapy",
  "Orthopedic Physiotherapy",
  "Ankylosing Spondylitis Physiotherapy",
  "Spine Rehabilitation",
  "Manual Therapy",
  "Pain Management Clinic",
  "Rehabilitation Center",
  "Home Physiotherapy Services",
];

export default function SeoBand() {
  return (
    <section className="seo-band">
      <div className="seo-band-inner">
        <Reveal as="p" className="seo-lead">
          Whether you are suffering from chronic back pain, neck pain,
          knee pain, sports injuries, stroke-related disabilities,
          arthritis, ankylosing spondylitis, post-surgical
          complications, or mobility limitations, our experienced
          physiotherapists are committed to helping you achieve lasting
          recovery and optimal physical health.
        </Reveal>

        <Reveal as="h2" delay={100}>
          Book Your <span>Consultation</span> Today
        </Reveal>

        <Reveal as="p" delay={160} className="seo-text">
          If you are looking for any of the following, Addlife
          Physiocare is your trusted partner in recovery and wellness:
        </Reveal>

        <div className="seo-keywords">
          {keywords.map((kw, index) => (
            <Reveal
              as="span"
              key={index}
              delay={(index % 6) * 50}
              direction="zoom"
              className="seo-chip"
            >
              {kw}
            </Reveal>
          ))}
        </div>

        <Reveal className="seo-closing" delay={120}>
          <h3>Addlife Physiocare</h3>
          <p>We Keep You Moving.</p>
        </Reveal>
      </div>
    </section>
  );
}
