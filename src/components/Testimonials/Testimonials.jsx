import "./Testimonials.css";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/* Same background image for every review — only the review text changes.
   Reviews are placeholders; replace with the clinic's real testimonials. */
const TESTI_IMAGE =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80";

const reviews = [
  {
    before: "After my knee surgery, I was worried about walking again. The personalized care and ",
    highlight: "motivation I received here",
    after: " made all the difference. I'm now back to hiking every weekend!",
    name: "Jordan Lee",
    location: "Denver, Colorado",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    before: "Years of chronic back pain left me hopeless until I found this clinic. The ",
    highlight: "expert hands-on therapy",
    after: " gave me my life back — I'm finally pain-free and active again!",
    name: "Soumen Das",
    location: "Salt Lake, Kolkata",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    before: "Recovering from a stroke felt impossible, but the ",
    highlight: "compassionate neuro-rehab team",
    after: " guided my father every step of the way. His mobility has improved remarkably.",
    name: "Ananya Roy",
    location: "New Town, Kolkata",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    before: "My frozen shoulder limited everything I did. Thanks to their ",
    highlight: "customized treatment plan",
    after: " I regained full movement within just a few weeks. Highly recommended!",
    name: "Priya Sharma",
    location: "Salt Lake Sector III, Kolkata",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
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
            <img src={r.avatar} alt={r.name} />
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
