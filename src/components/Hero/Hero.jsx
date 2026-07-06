import "./Hero.css";
import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

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
<div key={`btns-${key}`} className="hero-buttons animate-buttons">
  <a href="mailto:addlifephysiocare@gmail.com" className="email-btn">
    <Mail size={16} /> addlifephysiocare@gmail.com
  </a>
  <a href="tel:+917797044666" className="phone-btn">
    <Phone size={16} /> +91 7797044666
  </a>
</div>
      </div>
    </section>
  );
}