import "./Gallery.css";
import Reveal from "../Reveal/Reveal";
import Letters from "../Letters/Letters";

/**
 * Auto-discovers EVERY image dropped into ./images and shows them in a
 * continuously scrolling horizontal strip. Just save your files into
 * src/components/Gallery/images/ — they appear here automatically, no code
 * change needed. The strip auto-scrolls and pauses on hover.
 */
const modules = import.meta.glob(
  "./images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

export default function Gallery() {
  // Nothing to show until at least one image is added to the folder.
  if (!images.length) return null;

  // Duplicate the set so the marquee can loop seamlessly.
  const loop = [...images, ...images];

  return (
    <section className="gallery">
      
      <div className="gallery-viewport">
        <div className="gallery-header">
        <Reveal className="gallery-tag">
          <span className="gallery-tag-line"></span>
          <p>
            <Letters text="OUR GALLERY" step={30} />
          </p>
        </Reveal>

       
      </div>

        <div className="gallery-track">
          {loop.map((src, i) => (
            <div className="gallery-card" key={i}>
              <img
                src={src}
                alt={`Addlife Physiocare ${(i % images.length) + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
