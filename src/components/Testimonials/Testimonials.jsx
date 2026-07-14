import "./Testimonials.css";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import testiImage from "../../assets/21.jpeg";

/* Same background image for every review — only the review text changes.
   Reviews are placeholders; replace with the clinic's real testimonials. */
const TESTI_IMAGE = testiImage;

/* Real Google reviews for Addlife Physiocare (Salt Lake, Kolkata). */
const reviews = [
  {
    before:
      "Dr. Kousik Mallick sir is an exceptionally skilled and knowledgeable physiotherapist with deep expertise in ",
    highlight: "sports rehabilitation and TKR recovery",
    after: ". An excellent experience from start to finish.",
    name: "Sourav Mitra",
    location: "Salt Lake, Kolkata",
    rating: 5,
  },
  {
    before:
      "As the Head Coach of Star Badminton Academy, I'm extremely happy with our association. Their ",
    highlight: "work with our athletes has been outstanding",
    after: " — dedicated sports rehabilitation and injury management.",
    name: "Kaushik Pal",
    location: "Head Coach, Star Badminton Academy",
    rating: 5,
  },
  {
    before:
      "As a professional badminton player, after my ACL and Meniscus surgery they were fantastic in helping me ",
    highlight: "regain mobility — skilled, patient and encouraging",
    after: ". I'm now completely pain-free and back on court.",
    name: "Subhodeep Mondal",
    location: "Kolkata",
    rating: 5,
  },
  {
    before: "Amazing physiotherapist! They helped me recover from ",
    highlight: "ACL surgery with personalized exercises and care",
    after: ". Very professional and supportive throughout the process.",
    name: "Muskan Jahangir",
    location: "Kolkata",
    rating: 5,
  },
  {
    before:
      "I've been an Ankylosing Spondylitis patient for 30 years. After treatment here, my ",
    highlight: "body mobility improved remarkably",
    after: " when nothing else had worked. Truly grateful for the care.",
    name: "Amit Banerjee",
    location: "Kolkata",
    rating: 5,
  },
  {
    before: "I had a very good experience at this clinic. The therapist is ",
    highlight: "highly professional and explains every exercise clearly",
    after: ". Clean, well-maintained and a calm, comfortable environment.",
    name: "Mamoni Begam",
    location: "Salt Lake, Kolkata",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const r = reviews[index];

  const go = (dir) =>
    setIndex((i) => (i + dir + reviews.length) % reviews.length);

  return (
    <section className="testimonials">
      <img className="testi-bg" src={TESTI_IMAGE} alt="Patient testimonial" />
      <div className="testi-overlay"></div>

      <Reveal direction="right" className="testi-content">
        <span className="testi-tag">
          <span className="testi-line"></span> TESTIMONIALS
        </span>

        <h2>
          What Our <span>Patients Say Real Stories</span> Of Healing &amp;
          Recovery
        </h2>

        <div className="testi-body" key={index}>
          <p>
            {r.before}
            <span className="hl">{r.highlight}</span>
            {r.after}
          </p>

          <div className="testi-stars">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} size={18} fill="#f6a623" stroke="#f6a623" />
            ))}
          </div>

          <div className="testi-user">
            <span className="testi-avatar" aria-hidden="true">
              {r.name.charAt(0)}
            </span>
            <div>
              <h4>{r.name}</h4>
              <span>{r.location}</span>
            </div>
          </div>
        </div>

        <div className="testi-nav">
          <button className="prev" onClick={() => go(-1)} aria-label="Previous">
            <ArrowLeft size={18} />
          </button>
          <button className="next" onClick={() => go(1)} aria-label="Next">
            <ArrowRight size={18} />
          </button>
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonials;
