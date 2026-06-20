import "./LocalSeo.css";
import { MapPin } from "lucide-react";
import Reveal from "../Reveal/Reveal";

/**
 * Keyword-rich local-SEO statement built from the client's closing paragraph.
 * Each highlighted phrase is one of the target search keywords, kept inline
 * inside a natural sentence so it reads well and helps local search ranking.
 */
const keywords = [
  "Best Physiotherapy Clinic in Salt Lake Sector III, Kolkata",
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

export default function LocalSeo() {
  return (
    <section className="local-seo">
      <div className="local-seo-inner">
        <Reveal className="local-seo-tag">
          <MapPin size={15} />
          <span>SALT LAKE SECTOR III, KOLKATA</span>
        </Reveal>

        <Reveal as="h2" delay={80}>
          Your Trusted Partner In <span>Recovery &amp; Wellness</span>
        </Reveal>

        <Reveal as="p" delay={140} className="local-seo-lead">
          If you are looking for any of the following, Addlife Physiocare
          is here to help:
        </Reveal>

        <div className="local-seo-keywords">
          {keywords.map((kw, index) => (
            <Reveal
              as="span"
              key={index}
              delay={(index % 6) * 50}
              direction="zoom"
              className="local-seo-chip"
            >
              {kw}
            </Reveal>
          ))}
        </div>

        <Reveal as="p" delay={120} className="local-seo-closing">
          From everyday pain to complex neurological and post-surgical
          conditions, <strong>Addlife Physiocare</strong> is your trusted
          partner in recovery and wellness.
        </Reveal>
      </div>
    </section>
  );
}
