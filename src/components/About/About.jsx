import "./About.css";
import Reveal from "../Reveal/Reveal";

/**
 * Splits heading segments into individual letters so each can
 * animate (pop + colour) one-by-one. Each segment carries its own
 * colour design via `cls`; the stagger index runs across all
 * segments so the whole line reveals letter-by-letter in order.
 * Spaces are rendered as plain text nodes so the line can still wrap.
 */
function AnimatedText({ segments }) {
  let i = 0;
  return (
    <>
      {segments.map((seg, s) => (
        <span key={s} className={`seg ${seg.cls}`}>
          {[...seg.text].map((ch, c) =>
            ch === " " ? (
              <span key={c}> </span>
            ) : (
              <span
                key={c}
                className="al"
                style={{ animationDelay: `${i++ * 45}ms` }}
              >
                {ch}
              </span>
            )
          )}
        </span>
      ))}
    </>
  );
}

const expertise = [
  "Orthopedic Physiotherapy",
  "Neurological Rehabilitation",
  "Sports Physiotherapy",
  "Spine Rehabilitation",
  "Pain Management",
  "Geriatric Physiotherapy",
  "Home Physiotherapy Services",
];

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <Reveal direction="left" className="about-images">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800"
            alt="Dr. Kousik Mallick (PT)"
            className="img-large"
          />

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"
            alt="Physiotherapy treatment"
            className="img-top"
          />

          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800"
            alt="Rehabilitation session"
            className="img-bottom"
          />

          <div className="experience-circle">
            <h3>15+</h3>
            <p>YRS OF EXPERIENCE</p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120} className="about-content">
          <div className="about-tag">
            <span className="tag-line"></span>
            ABOUT DR. KOUSIK MALLICK (PT)
          </div>

          <Reveal as="h2" direction="up" delay={120} className="about-heading">
            <AnimatedText
              segments={[
                { text: "Meet ", cls: "seg-1" },
                { text: "Dr. Kousik Mallick ", cls: "seg-2" },
                { text: "(PT)", cls: "seg-3" },
                { text: " And His ", cls: "seg-1" },
                { text: "Care", cls: "seg-4" },
              ]}
            />
          </Reveal>

          <p className="about-bold">
            Dr. Kousik Mallick (PT) Is The Founder And Chief
            Physiotherapist Of Addlife Physiocare, A Trusted
            Physiotherapy Clinic In Salt Lake Sector III, Kolkata.
          </p>

          <p className="about-text">
            With Extensive Experience In Orthopedic Physiotherapy,
            Neurological Rehabilitation, Sports Physiotherapy, Spine
            Rehabilitation, Pain Management, Geriatric Physiotherapy, And
            Home Physiotherapy Services, He Has Helped Numerous Patients
            Regain Independence, Reduce Pain, And Improve Their Quality
            Of Life.
          </p>

          <p className="about-text">
            Dr. Mallick Follows A Patient-Centered And Evidence-Based
            Approach, Combining Clinical Expertise With Advanced
            Rehabilitation Techniques To Create Individualized Treatment
            Plans That Restore Function, Prevent Future Injuries, And
            Empower Patients To Live Healthier, More Active Lives.
          </p>

          <div className="about-divider"></div>

          <div className="dp-tags">
            {expertise.map((item, index) => (
              <Reveal
                as="span"
                key={index}
                delay={index * 70}
                direction="up"
                className="dp-tag"
              >
                {item}
              </Reveal>
            ))}
          </div>

          <div className="doctor-row">
            <div className="doctor-info">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Dr. Kousik Mallick"
              />

              <div>
                <small>FOUNDER & CHIEF PHYSIOTHERAPIST</small>
                <h4>Dr. Kousik Mallick (PT)</h4>
              </div>
            </div>

            <div className="signature">Mallick</div>
          </div>

          <button className="learn-btn">Learn More →</button>
        </Reveal>
      </div>
    </section>
  );
}
