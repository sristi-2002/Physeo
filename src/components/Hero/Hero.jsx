import "./Hero.css";
import { useEffect, useState } from "react";

const words = [
  { text: "We", color: "white" },
  { text: "Keep", color: "white" },
  { text: "You", color: "blue" },
  { text: "Moving", color: "blue" }
];

export default function Hero() {
  const [key, setKey] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setKey((prev) => prev + 1);
  }, 30000); // animation + 5s pause

  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-content">

        {/* TRUSTED CARE */}
       <div key={`tc-${key}`} className="trusted-care">
  <span> - - T R U S T E D &nbsp; C A R E</span>
</div>

        {/* HERO TEXT */}
       <h1 key={`title-${key}`} className="hero-title">
  {words.map((word, wIndex) => (
    <span key={wIndex}>
      {word.text.split("").map((char, i) => (
        <span
          key={i}
          className={`letter ${word.color === "blue" ? "blue" : ""}`}
          style={{
            animationDelay: `${(wIndex * 6 + i) * 0.08}s`,
          }}
        >
          {char}
        </span>
      ))}
      <span>&nbsp;</span>
    </span>
  ))}
</h1>

        <p key={`text-${key}`} className="hero-text typing-line">
  Advanced Physiotherapy, Rehabilitation, Spine Care & Pain Management
</p>

<p key={`text2-${key}`} className="hero-text typing-line2">
  Clinic In Salt Lake Sector III, Kolkata.
</p>
<div className="hero-buttons animate-buttons">
  <button className="email-btn">addlifephysiocare@gmail.com</button>
  <button className="phone-btn">+91-779-704-4666</button>
</div>
      </div>
    </section>
  );
}