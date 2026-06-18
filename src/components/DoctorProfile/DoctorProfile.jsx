import "./DoctorProfile.css";
import Reveal from "../Reveal/Reveal";

const expertise = [
  "Orthopedic Physiotherapy",
  "Neurological Rehabilitation",
  "Sports Physiotherapy",
  "Spine Rehabilitation",
  "Pain Management",
  "Geriatric Physiotherapy",
  "Home Physiotherapy Services",
];

export default function DoctorProfile() {
  return (
    <section className="doctor-profile">
      <div className="doctor-profile-container">
        <Reveal direction="left" className="doctor-profile-image">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900"
            alt="Dr. Kousik Mallick (PT)"
          />
          <div className="doctor-profile-badge">
            <span>Founder &</span>
            <strong>Chief Physiotherapist</strong>
          </div>
        </Reveal>

        <div className="doctor-profile-content">
          <Reveal className="section-tag-dp">
            <span className="tag-line"></span>
            ABOUT DR. KOUSIK MALLICK (PT)
          </Reveal>

          <Reveal as="h2" delay={80}>
            Meet <span>Dr. Kousik Mallick</span> (PT)
          </Reveal>

          <Reveal as="p" delay={140} className="dp-text">
            Dr. Kousik Mallick (PT) is the Founder and Chief
            Physiotherapist of Addlife Physiocare. With extensive
            experience in orthopedic physiotherapy, neurological
            rehabilitation, sports physiotherapy, spine rehabilitation,
            pain management, geriatric physiotherapy, and home
            physiotherapy services, he has helped numerous patients
            regain independence, reduce pain, and improve their quality
            of life.
          </Reveal>

          <Reveal as="p" delay={200} className="dp-text">
            Dr. Mallick follows a patient-centered and evidence-based
            approach, combining clinical expertise with advanced
            rehabilitation techniques to create individualized treatment
            plans. His philosophy is simple: provide compassionate care,
            restore function, prevent future injuries, and empower
            patients to live healthier and more active lives.
          </Reveal>

          <div className="dp-tags">
            {expertise.map((item, index) => (
              <Reveal
                as="span"
                key={index}
                delay={index * 70}
                direction="up"
                className="dp-tag"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
