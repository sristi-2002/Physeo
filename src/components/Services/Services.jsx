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
 * (free, no attribution required). Each clip was picked to match its own
 * service — e.g. Sports shows ankle taping, Neuro shows assisted limb
 * movement, Pediatric shows a child exercising, Home shows in-home care.
 * The matching `poster` image shows while a clip loads, so nothing looks broken.
 * To use the clinic's own clips, drop files in `public/videos/` and point
 * each `video:` to e.g. "/videos/orthopedic.mp4" (see public/videos/README.txt).
 */
/**
 * Splits a string into per-letter <span> elements so each character can be
 * animated in one-by-one (the entrance animation lives in Services.css and is
 * triggered by a visibility/flip class on an ancestor). `base` offsets the
 * stagger start; `step` is the delay added per letter.
 */
function Letters({ text, base = 0, step = 24 }) {
  return [...text].map((ch, i) => (
    <span
      key={i}
      className="char"
      style={{ animationDelay: `${base + i * step}ms` }}
    >
      {ch === " " ? " " : ch}
    </span>
  ));
}

/** The section heading, split letter-by-letter while keeping the gradient
 *  highlight on "Solution" and "Pain Relief". A single running counter keeps
 *  the stagger continuous across the normal and highlighted segments. */
function SplitHeading({ step = 18 }) {
  const parts = [
    { t: "Comprehensive Physiotherapy " },
    { t: "Solution", hl: true },
    { br: true },
    { t: "For " },
    { t: "Pain Relief", hl: true },
    { t: " And Recovery" },
  ];
  let n = 0;
  return (
    <h2 className="split-h2">
      {parts.map((p, pi) => {
        if (p.br) return <br key={pi} />;
        const letters = [...p.t].map((ch, ci) => {
          const delay = n++ * step;
          return (
            <span
              key={ci}
              className="char"
              style={{ animationDelay: `${delay}ms` }}
            >
              {ch === " " ? " " : ch}
            </span>
          );
        });
        return (
          <span key={pi} className={p.hl ? "hl" : "plain"}>
            {letters}
          </span>
        );
      })}
    </h2>
  );
}

const categories = [
  {
    icon: "🦴",
    title: "Orthopedic Physiotherapy",
    intro: "Specialized treatment for:",
    video:
      "https://videos.pexels.com/video-files/14936271/14936271-sd_640_360_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?w=800",
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
      "https://videos.pexels.com/video-files/7986040/7986040-sd_540_960_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1522898467493-49726bf28798?w=800",
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
      "https://videos.pexels.com/video-files/6111034/6111034-sd_640_360_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1699523229199-fce5aa6b0ec3?w=800",
    items: [
      "Stroke Rehabilitation",
      "Stroke Recovery Physiotherapy",
      "Parkinson’s Disease",
      "Bell’s Palsy",
      "Spinal Cord Injury",
      "Multiple Sclerosis",
      "Balance Disorders",
      "Gait Training",
      "Functional Rehabilitation",
    ],
  },
  {
    icon: "🩺",
    title: "Spine Care & Manual Therapy",
    intro: "Advanced spine rehabilitation through:",
    video:
      "https://videos.pexels.com/video-files/6629664/6629664-sd_960_506_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1668422550557-f096364b72b4?w=800",
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
      "https://videos.pexels.com/video-files/6111021/6111021-sd_640_360_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?w=800",
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
      "https://videos.pexels.com/video-files/6111062/6111062-sd_640_360_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1645005512942-a17817fb7c11?w=800",
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
      "https://images.unsplash.com/photo-1756314354826-91d31d85634a?w=800",
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
    icon: "🧒",
    title: "Pediatric Physiotherapy",
    intro: "Specialized care for children with:",
    video:
      "https://videos.pexels.com/video-files/8160564/8160564-sd_540_960_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1645005512964-5057008b4425?w=800",
    items: [
      "Developmental Conditions",
      "Neurological Conditions",
      "Musculoskeletal Conditions",
      "Posture & Mobility",
      "Balance & Coordination",
      "Strength Development",
      "Personalized Programs",
    ],
  },
  {
    icon: "🏠",
    title: "Home Physiotherapy Services",
    intro: "Professional rehabilitation at home:",
    video:
      "https://videos.pexels.com/video-files/7517385/7517385-sd_640_360_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1709880754472-be89c13abc52?w=800",
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
  return (
    <Reveal
      direction="up"
      delay={(index % 4) * 50}
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
              <Letters text={cat.title} step={28} />
            </h3>
            <span className="flip-hint">
              <RotateCcw size={14} /> Tap to view specialties
            </span>
          </div>
        </div>

        {/* BACK — sub-categories */}
        <div className="flip-back">
          <div className="flip-back-tag">
            <Letters
              text="OUR PHYSIOTHERAPY & REHABILITATION SERVICES"
              base={60}
              step={10}
            />
          </div>
          <h4>
            <Letters text={cat.title} base={220} step={20} />
          </h4>
          <p className="flip-back-intro">
            <Letters text={cat.intro} base={360} step={11} />
          </p>

          <ul>
            {cat.items.map((item, i) => (
              <li key={i}>
                <Check size={14} />
                <span className="li-text">
                  <Letters text={item} base={470 + i * 80} step={14} />
                </span>
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
  const [activeDot, setActiveDot] = useState(0);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const scrollToCard = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i];
    if (card)
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    let closest = 0;
    let min = Infinity;
    Array.from(el.children).forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setActiveDot(closest);
  };

  return (
    <section className="services">
      <div className="services-header">
        <Reveal className="section-tag">
          <span className="tag-line"></span>
          <span className="tag-text">
            <Letters text="PHYSIO CATEGORIES" step={30} />
          </span>
        </Reveal>

        <Reveal className="header-row" delay={80}>
          <SplitHeading />


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

      <div className="cat-scroll" ref={scrollRef} onScroll={handleScroll}>
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

      <div className="cat-dots">
        {categories.map((_, i) => (
          <button
            key={i}
            className={`cat-dot ${activeDot === i ? "is-active" : ""}`}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to category ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}














// // Our Physiotherapy & Rehabilitation Services

// Orthopedic Physiotherapy

// Specialized treatment for:

// - Back Pain
// - Neck Pain
// - Knee Pain
// - Shoulder Pain
// - Frozen Shoulder
// - Arthritis
// - Joint Pain
// - Sciatica
// - Slip Disc
// - Cervical Spondylosis
// - Lumbar Spondylosis
// - Postural Disorders
// - Musculoskeletal Injuries

// Spine Care & Manual Therapy

// Our advanced spine rehabilitation programs focus on improving spinal health, posture, mobility, flexibility, and function through:

// - Manual Therapy
// - Spinal Mobilization
// - Posture Correction
// - Core Strengthening
// - Ergonomic Assessment
// - Functional Rehabilitation
// - Chronic Pain Management
// - Mobility Training

// Ankylosing Spondylitis Physiotherapy

// We provide specialized physiotherapy and rehabilitation for Ankylosing Spondylitis, focusing on:

// - Pain Relief
// - Spinal Mobility
// - Posture Improvement
// - Flexibility Training
// - Breathing Exercises
// - Functional Rehabilitation
// - Long-Term Exercise Programs

// Sports Physiotherapy & Sports Injury Rehabilitation

// Our sports rehabilitation services help athletes and active individuals recover safely and effectively from:

// - Sports Injuries
// - ACL Injuries
// - Ligament Injuries
// - Muscle Tears
// - Tendon Injuries
// - Running Injuries
// - Ankle Sprains
// - Overuse Injuries

// Services include sports injury treatment, athletic rehabilitation, return-to-sport programs, injury prevention, and performance enhancement.

// Neurological Physiotherapy & Neuro Rehabilitation

// Comprehensive rehabilitation for:

// - Stroke Rehabilitation
// - Stroke Recovery Physiotherapy
// - Parkinson’s Disease
// - Bell’s Palsy
// - Spinal Cord Injury
// - Multiple Sclerosis
// - Balance Disorders
// - Gait Training
// - Functional Rehabilitation

// Post-Surgical Rehabilitation

// Supporting recovery after:

// - Knee Replacement Surgery
// - Hip Replacement Surgery
// - Spine Surgery
// - Fracture Fixation
// - Arthroscopic Surgery
// - Orthopedic Procedures

// Geriatric Physiotherapy

// Helping senior citizens maintain strength, mobility, balance, and independence through specialized rehabilitation programs.

// Pediatric Physiotherapy

// Specialized physiotherapy services for children with developmental, neurological, and musculoskeletal conditions.

// Home Physiotherapy Services

// Professional home physiotherapy and rehabilitation services for patients who require treatment in the comfort of their homes.