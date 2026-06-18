# Addlife Physiocare — Content Mapping Document

This document tracks **every part** of the client-provided content and shows where
it now lives on the website. **Status: 100% connected** — every word from the
client document has a home on the page.

Legend: ✅ **Used** — live on the website (and where).

---

## 1. Brand / Hero

| Content from document | Status | Where in website |
|---|---|---|
| "Addlife Physiocare" (brand name) | ✅ Used | Navbar, Footer, Promise banner, page `<title>` |
| "We Keep You Moving" | ✅ Used | Hero headline, Promise banner, Footer tagline |
| "Advanced Physiotherapy, Rehabilitation, Spine Care & Pain Management Clinic in Salt Lake Sector III, Kolkata" | ✅ Used | Hero subtitle, meta description |

---

## 2. Intro Paragraphs

| Content from document | Status | Where in website |
|---|---|---|
| "Welcome to Addlife Physiocare, a trusted Physiotherapy Clinic…" | ✅ Used | About — bold paragraph |
| "At Addlife Physiocare, we believe movement is the foundation of health…" | ✅ Used | About — mission paragraph |
| "Whether you are suffering from chronic back pain, neck pain…" | ✅ Used | SeoBand — lead paragraph |

---

## 3. About Dr. Kousik Mallick (PT)

| Content from document | Status | Where in website |
|---|---|---|
| Name + "Founder and Chief Physiotherapist" | ✅ Used | About — doctor row; DoctorProfile — badge |
| Full bio: "extensive experience in orthopedic, neurological, sports…" | ✅ Used | DoctorProfile — bio paragraph 1 |
| Philosophy: "patient-centered and evidence-based approach…" | ✅ Used | DoctorProfile — bio paragraph 2 + expertise tags |

---

## 4. Our Physiotherapy & Rehabilitation Services

| Service | Status | Where in website |
|---|---|---|
| **Orthopedic Physiotherapy** + full 13-item list | ✅ Used | Services row + Specialties card (full list) |
| **Spine Care & Manual Therapy** + full 8-item list | ✅ Used | Services row + Specialties card (full list) |
| **Ankylosing Spondylitis Physiotherapy** + full 7-item list | ✅ Used | Services row + Specialties card (full list) |
| **Sports Physiotherapy & Injury Rehab** + full 8-item list | ✅ Used | Services row + Specialties card (full list) |
| **Neurological Physiotherapy** + full 9-item list | ✅ Used | Services row + Specialties card (full list) |
| **Post-Surgical Rehabilitation** + full 6-item list | ✅ Used | Services row + Specialties card (full list) |
| **Geriatric Physiotherapy** | ✅ Used | Services row (dedicated card) |
| **Pediatric Physiotherapy** | ✅ Used | Services row (dedicated card) |
| **Home Physiotherapy Services** | ✅ Used | Services row (dedicated card) |

---

## 5. Advanced Treatment Techniques

| Content from document | Status | Where in website |
|---|---|---|
| 12 techniques (Manual Therapy, Dry Needling, Kinesio Taping, Electrotherapy…) | ✅ Used | Techniques — full 12-card grid |

---

## 6. Conditions We Treat

| Content from document | Status | Where in website |
|---|---|---|
| Full 20-condition list | ✅ Used | Conditions — full 20-chip grid |

---

## 7. Why Choose Addlife Physiocare?

| Content from document | Status | Where in website |
|---|---|---|
| 5 detailed points (Experienced Physiotherapists, Personalized Plans, Evidence-Based, Holistic, Patient-Centered) + their 1-line descriptions | ✅ Used | WhyChoose — 5-card grid (title + description) |
| 9 "✔" highlight checklist (Expert Physiotherapy Care, Personalized Rehabilitation Programs, Advanced Pain Management Solutions, Spine & Musculoskeletal Rehabilitation, Sports Injury Recovery, Neurological Rehabilitation, Home Physiotherapy Services, Evidence-Based Treatment Approach, Compassionate Patient Care) | ✅ Used | Promise — checklist grid |

---

## 8. Vision & Mission

| Content from document | Status | Where in website |
|---|---|---|
| **Our Vision** (full paragraph) | ✅ Used | VisionMission — vision card |
| **Our Mission** (5 bullet points) | ✅ Used | VisionMission — mission card (5 bullets) |

---

## 9. Our Promise

| Content from document | Status | Where in website |
|---|---|---|
| "Relieving Pain. Restoring Function. Rebuilding Confidence." | ✅ Used | Promise — closing banner |

---

## 10. Book Your Consultation Today

| Content from document | Status | Where in website |
|---|---|---|
| "Book Your Consultation Today" heading | ✅ Used | SeoBand + Appointment section |
| SEO keyword paragraph (17 keywords: Best Physiotherapy Clinic… Home Physiotherapy Services) | ✅ Used | SeoBand — keyword chip grid |
| Closing "Addlife Physiocare — We Keep You Moving" | ✅ Used | SeoBand closing + Promise banner + Footer |

---

## Section order on the page (`src/pages/Home.jsx`)

TopBar → Navbar → Hero → About → DoctorProfile → Experts → Services →
Specialties → Conditions → Techniques → Features → WhyChoose → **Promise** →
VisionMission → Testimonials → Price → Appointment → SeoBand → Footer

**Result:** No client content is left unused. Every service, every condition,
every technique, both Why-Choose lists, the doctor bio, vision, mission, promise,
and SEO keyword block are now rendered on the site.
