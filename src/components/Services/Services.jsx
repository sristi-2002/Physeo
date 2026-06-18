import "./Services.css";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Check } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/**
 * Each category = a flip card.
 * FRONT: a small looping video + the service name (the "PHYSIO CATEGORIES" grid).
 * BACK : the full sub-category list (the "Complete Care Across Every Specialty" detail).
 * Clicking a card revolves it; opening one closes any previously open card.
 *
 * Videos are short, service-specific physiotherapy clips from Pexels
 * (free, no attribution required), served as light ~960p MP4s. The matching
 * `poster` image shows while a clip loads, so nothing looks broken.
 * To use the clinic's own clips, drop files in `public/videos/` and point
 * each `video:` to e.g. "/videos/orthopedic.mp4" (see public/videos/README.txt).
 */
const categories = [
  {
    icon: "🦴",
    title: "Orthopedic Physiotherapy",
    intro: "Specialized treatment for:",
    video:
      "https://videos.pexels.com/video-files/6095386/6095386-sd_960_540_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
    items: [
      "Back Pain",
      "Neck Pain",
      "Knee Pain",
      "Shoulder Pain",
      "Frozen Shoulder",
      "Arthritis",
      "Joint Pain",
      "Sciatica",
      "Slip Disc",
      "Cervical Spondylosis",
      "Lumbar Spondylosis",
      "Postural Disorders",
      "Musculoskeletal Injuries",
    ],
  },
  {
    icon: "🏃",
    title: "Sports Injury Rehabilitation",
    intro: "Helping athletes recover safely from:",
    video:
      "https://videos.pexels.com/video-files/6023220/6023220-sd_960_540_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800",
    items: [
      "Sports Injuries",
      "ACL Injuries",
      "Ligament Injuries",
      "Muscle Tears",
      "Tendon Injuries",
      "Running Injuries",
      "Ankle Sprains",
      "Overuse Injuries",
    ],
  },
  {
    icon: "🧠",
    title: "Neurological Physiotherapy",
    intro: "Comprehensive neuro rehabilitation for:",
    video:
      "https://videos.pexels.com/video-files/6111018/6111018-sd_960_540_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    items: [
      "Stroke Rehabilitation",
      "Stroke Recovery",
      "Parkinson’s Disease",
      "Bell’s Palsy",
      "Spinal Cord Injury",
      "Multiple Sclerosis",
      "Balance Disorders",
      "Gait Training",
    ],
  },
  {
    icon: "🩺",
    title: "Spine Care & Manual Therapy",
    intro: "Advanced spine rehabilitation through:",
    video:
      "https://videos.pexels.com/video-files/6629664/6629664-sd_960_506_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800",
    items: [
      "Manual Therapy",
      "Spinal Mobilization",
      "Posture Correction",
      "Core Strengthening",
      "Ergonomic Assessment",
      "Functional Rehabilitation",
      "Chronic Pain Management",
      "Mobility Training",
    ],
  },
  {
    icon: "⚕️",
    title: "Post-Surgical Rehabilitation",
    intro: "Supporting recovery after:",
    video:
      "https://videos.pexels.com/video-files/6111056/6111056-sd_960_540_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    items: [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Spine Surgery",
      "Fracture Fixation",
      "Arthroscopic Surgery",
      "Orthopedic Procedures",
    ],
  },
  {
    icon: "🧘",
    title: "Ankylosing Spondylitis",
    intro: "Specialized rehabilitation focusing on:",
    video:
      "https://videos.pexels.com/video-files/6023240/6023240-sd_960_540_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
    items: [
      "Pain Relief",
      "Spinal Mobility",
      "Posture Improvement",
      "Flexibility Training",
      "Breathing Exercises",
      "Functional Rehabilitation",
      "Long-Term Exercise Programs",
    ],
  },
  {
    icon: "👵",
    title: "Geriatric Physiotherapy",
    intro: "Helping senior citizens with:",
    video:
      "https://videos.pexels.com/video-files/6892073/6892073-sd_960_540_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800",
    items: [
      "Balance Training",
      "Fall Prevention",
      "Strength Training",
      "Mobility Improvement",
      "Joint Care",
      "Posture Correction",
      "Endurance Building",
    ],
  },
  {
    icon: "🏠",
    title: "Home Physiotherapy Services",
    intro: "Professional rehabilitation at home:",
    video:
      "https://videos.pexels.com/video-files/9058018/9058018-sd_960_540_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    items: [
      "Bedside Rehabilitation",
      "Post-Surgical Care",
      "Neuro Rehab At Home",
      "Elderly Care",
      "Pain Management",
      "Mobility Training",
      "Personalized Programs",
    ],
  },
];

function FlipCard({ cat, index, flipped, onOpen, onClose }) {
  const words = cat.title.split(" ");

  return (
    <Reveal
      direction="up"
      delay={(index % 4) * 90}
      className={`flip-card ${flipped ? "is-flipped" : ""}`}
    >
      <div className="flip-inner">
        {/* FRONT — video + title */}
        <div className="flip-front" onClick={onOpen}>
          <video
            className="flip-video"
            src={cat.video}
            poster={cat.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div className="flip-front-overlay">
            <span className="flip-icon">{cat.icon}</span>
            <h3>
              {words.map((w, i) => (
                <span
                  key={i}
                  className="fw"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {w}
                </span>
              ))}
            </h3>
            <span className="flip-hint">
              <RotateCcw size={14} /> Tap to view specialties
            </span>
          </div>
        </div>

        {/* BACK — sub-categories */}
        <div className="flip-back">
          <div className="flip-back-tag">
            OUR PHYSIOTHERAPY & REHABILITATION SERVICES
          </div>
          <h4>{cat.title}</h4>
          <p className="flip-back-intro">{cat.intro}</p>

          <ul>
            {cat.items.map((item, i) => (
              <li key={i} style={{ animationDelay: `${i * 60}ms` }}>
                <Check size={14} /> {item}
              </li>
            ))}
          </ul>

          <button className="flip-close" onClick={onClose}>
            <RotateCcw size={15} /> Back
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="services">
      <div className="services-header">
        <Reveal className="section-tag">
          <span></span>
          PHYSIO CATEGORIES
        </Reveal>

        <Reveal className="header-row" delay={80}>
          <h2>
            Comprehensive Physiotherapy <span>Solution</span>
            <br />
            For <span>Pain Relief</span> And Recovery
          </h2>

          <div className="scroll-controls">
            <button onClick={() => scrollBy(-1)} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="cat-scroll" ref={scrollRef}>
        {categories.map((cat, index) => (
          <FlipCard
            key={index}
            cat={cat}
            index={index}
            flipped={activeIndex === index}
            onOpen={() => setActiveIndex(index)}
            onClose={() => setActiveIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}
