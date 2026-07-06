import "./About.css";
import Reveal from "../Reveal/Reveal";
import { FiCheck } from "react-icons/fi";

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
          {seg.text
            .split(/(\s+)/)
            .filter((part) => part !== "")
            .map((part, w) =>
              /^\s+$/.test(part) ? (
                <span key={w}> </span>
              ) : (
                /* Keep each word on one line so it never breaks mid-word */
                <span key={w} className="word">
                  {[...part].map((ch, c) => (
                    <span
                      key={c}
                      className="al"
                      style={{ animationDelay: `${i++ * 45}ms` }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              )
            )}
        </span>
      ))}
    </>
  );
}

/**
 * Renders a paragraph that reveals letter-by-letter on scroll.
 * `parts` is an array of { text, cls? } so highlighted (bold) phrases
 * keep their styling while every letter still animates one-by-one.
 * The running index drives the per-letter stagger across all parts.
 */
function AnimatedParagraph({ parts, className = "", delay = 0, step = 9 }) {
  let i = 0;
  return (
    <Reveal as="p" direction="up" delay={delay} className={`about-para ${className}`}>
      {parts.map((part, p) => (
        <span key={p} className={part.cls || ""}>
          {part.text
            .split(/(\s+)/)
            .filter((s) => s !== "")
            .map((word, w) =>
              /^\s+$/.test(word) ? (
                <span key={w}> </span>
              ) : (
                <span key={w} className="word">
                  {[...word].map((ch, c) => (
                    <span
                      key={c}
                      className="al"
                      style={{ animationDelay: `${i++ * step}ms` }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              )
            )}
        </span>
      ))}
    </Reveal>
  );
}

const para1 = [
  { text: "Dr. Kousik Mallick (PT) Is The " },
  { text: "Founder And Chief Physiotherapist", cls: "hl" },
  { text: " Of " },
  { text: "Addlife Physiocare", cls: "hl" },
  { text: ", A Trusted Physiotherapy Clinic In " },
  { text: "Salt Lake Sector III, Kolkata", cls: "hl" },
  { text: "." },
];

const para2 = [
  { text: "With Extensive Experience In " },
  {
    text: "Orthopedic Physiotherapy, Neurological Rehabilitation, Sports Physiotherapy, Spine Rehabilitation, Pain Management, Geriatric Physiotherapy, And Home Physiotherapy Services",
    cls: "hl-soft",
  },
  { text: ", He Has Helped Numerous Patients " },
  {
    text: "Regain Independence, Reduce Pain, And Improve Their Quality Of Life",
    cls: "hl-soft",
  },
  { text: "." },
];

const para3 = [
  { text: "Dr. Mallick Follows A " },
  { text: "Patient-Centered And Evidence-Based Approach", cls: "hl-soft" },
  { text: ", Combining Clinical Expertise With " },
  { text: "Advanced Rehabilitation Techniques", cls: "hl-soft" },
  { text: " To Create " },
  { text: "Individualized Treatment Plans", cls: "hl-soft" },
  {
    text: " That Restore Function, Prevent Future Injuries, And Empower Patients To Live Healthier, More Active Lives.",
  },
];

/* Areas of specialty shown as a compact two-column checklist
   right inside the About section. */
const specialties = [
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
            src="/images/dr-kousik-mallick.png"
            alt="Dr. Kousik Mallick (PT)"
            className="img-large"
            onError={(e) => {
              // If the real photo isn't saved yet, fall back so it's not broken.
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1645005512827-48ff6f97848a?w=800";
            }}
          />

          <img
            src="https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=800"
            alt="Physiotherapy treatment"
            className="img-top"
          />

          <img
            src="https://images.unsplash.com/photo-1645005512942-ebb840398a6a?w=800"
            alt="Rehabilitation session"
            className="img-bottom"
          />

          <div className="experience-circle">
            <h3>18+</h3>
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

          <AnimatedParagraph parts={para1} className="about-bold" />
          <AnimatedParagraph parts={para2} className="about-text" delay={120} />
          <AnimatedParagraph parts={para3} className="about-text" delay={240} />

          <div className="about-divider"></div>

          <h4 className="spec-heading">Areas of Specialty</h4>
          <div className="spec-grid">
            {specialties.map((item, index) => (
              <Reveal
                as="div"
                key={index}
                delay={index * 60}
                direction="up"
                className="spec-item"
              >
                <span className="spec-check">
                  <FiCheck />
                </span>
                {item}
              </Reveal>
            ))}
          </div>

          {/* <div className="doctor-row">
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
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}
