import "./letters.css";

/**
 * Splits a string into per-letter <span> elements so each character can be
 * animated in one-by-one. The entrance animation itself lives in the consuming
 * component's CSS and is triggered by a visibility class on an ancestor.
 * `base` offsets the stagger start (ms); `step` is the delay added per letter.
 */
export default function Letters({ text, base = 0, step = 24, className = "char" }) {
  return [...text].map((ch, i) => (
    <span
      key={i}
      className={className}
      style={{ animationDelay: `${base + i * step}ms` }}
    >
      {ch === " " ? " " : ch}
    </span>
  ));
}
