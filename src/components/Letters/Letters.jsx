import "./letters.css";

/**
 * Splits a string into per-letter <span> elements so each character can be
 * animated in one-by-one. The entrance animation itself lives in the consuming
 * component's CSS and is triggered by a visibility class on an ancestor.
 * `base` offsets the stagger start (ms); `step` is the delay added per letter.
 *
 * Letters are grouped per-word inside a nowrap inline-block wrapper so that —
 * even though each character is itself inline-block — a word never breaks
 * mid-word on narrow screens (spaces stay the only line-break opportunities).
 */
export default function Letters({ text, base = 0, step = 24, className = "char" }) {
  let i = 0;
  return text
    .split(/(\s+)/)
    .map((part, p) => {
      if (part === "") return null;
      // Whitespace chunks stay as real, breakable spaces between words.
      if (/^\s+$/.test(part)) return <span key={p}> </span>;
      return (
        <span key={p} className="ltr-word">
          {[...part].map((ch, c) => (
            <span
              key={c}
              className={className}
              style={{ animationDelay: `${base + i++ * step}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
      );
    });
}
