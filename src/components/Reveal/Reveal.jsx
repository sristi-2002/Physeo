import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

/**
 * Scroll-reveal wrapper.
 * Adds the "is-visible" class when the element scrolls into view,
 * triggering the CSS entrance animation. Supports an optional
 * stagger delay and animation direction.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
