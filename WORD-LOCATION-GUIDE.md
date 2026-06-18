# Addlife Physiocare — Word-by-Word Location Guide

This document takes **every line and every word** from the client-provided text and
shows **exactly where it appears on the website**.

> **Note on "page":** This is a **single-page website**. Everything lives on one page
> (`src/pages/Home.jsx`) as stacked sections. You reach each section by scrolling or by
> clicking the navbar links. Each section has an **anchor id** (e.g. open
> `index.html#about` to jump to the About section).

**Legend**
- 🟢 **Verbatim** — the exact words appear on the site.
- 🔵 **Adapted** — same words/meaning, lightly reworded into the on-page sentence (the
  underlying information is fully present).

---

## Section map (scroll order + anchors)

| # | Section | Anchor (jump link) | Component file |
|---|---|---|---|
| 1 | Top Bar | *(top of page)* | `src/components/Topbar/Topbar.jsx` |
| 2 | Navbar | *(top of page)* | `src/components/Navbar/Navbar.jsx` |
| 3 | Hero | `#hero` | `src/components/Hero/Hero.jsx` |
| 4 | About | `#about` | `src/components/About/About.jsx` |
| 5 | Doctor Profile | `#doctor` | `src/components/DoctorProfile/DoctorProfile.jsx` |
| 6 | Experts / Categories | `#experts` | `src/components/Experts/Experts.jsx` |
| 7 | Services | `#services` | `src/components/Services/Services.jsx` |
| 8 | Specialties (full lists) | `#specialties` | `src/components/Specialties/Specialties.jsx` |
| 9 | Conditions We Treat | `#conditions` | `src/components/Conditions/Conditions.jsx` |
| 10 | Techniques | `#techniques` | `src/components/Techniques/Techniques.jsx` |
| 11 | Features / Why Choose Us | `#features` | `src/components/Features/Features.jsx` |
| 12 | Why Choose (5 cards) | `#why-choose` | `src/components/WhyChoose/WhyChoose.jsx` |
| 13 | Promise (9 ✔ + promise) | `#promise` | `src/components/Promise/Promise.jsx` |
| 14 | Vision & Mission | `#vision-mission` | `src/components/VisionMission/VisionMission.jsx` |
| 15 | Testimonials | `#testimonials` | `src/components/Testimonials/Testimonials.jsx` |
| 16 | Price / Plans | `#price` | `src/components/Price/Price.jsx` |
| 17 | Appointment | `#appointment` | `src/components/Appointment/Appointment.jsx` |
| 18 | SEO Band | `#seo` | `src/components/SeoBand/SeoBand.jsx` |
| 19 | Footer | `#footer` | `src/components/Footer/Footer.jsx` |

---

## PART A — Brand & Tagline

| Words from text | Status | Where it shows on the website |
|---|---|---|
| **Addlife Physiocare** | 🟢 Verbatim | Navbar logo • Hero title area • Promise banner • SeoBand closing • Footer heading • Appointment/Footer contact |
| **We Keep You Moving** | 🟢 Verbatim | **Hero** headline (animated letters: "We Keep You Moving") • **Promise** banner • **SeoBand** closing • **Footer** tagline |
| Advanced Physiotherapy, Rehabilitation, Spine Care & Pain Management Clinic in Salt Lake Sector III, Kolkata | 🟢 Verbatim | **Hero** subtitle ("Advanced Physiotherapy, Rehabilitation, Spine Care & Pain Management — Clinic In Salt Lake Sector III, Kolkata.") |

---

## PART B — Intro Paragraphs

| Words from text | Status | Where it shows |
|---|---|---|
| "Welcome to Addlife Physiocare, a trusted Physiotherapy Clinic in Salt Lake Sector III, Kolkata, dedicated to helping people move better, recover faster, and live pain-free." | 🟢 Verbatim (reflowed) | **About** — bold paragraph: "Addlife Physiocare Is A Trusted Physiotherapy Clinic In Salt Lake Sector III, Kolkata, Dedicated To Helping People Move Better, Recover Faster, And Live Pain-Free." |
| "At Addlife Physiocare, we believe that movement is the foundation of health, independence, and quality of life…" | 🔵 Adapted | **About** — paragraph: "We Believe Movement Is The Foundation Of Health And Independence. Our Mission Is To Identify The Root Cause Of Pain, Provide Personalized Treatment Plans, And Deliver Effective Rehabilitation That Restores Mobility And Enhances Well-Being." |
| "…identify the root cause of pain and dysfunction, provide personalized treatment plans, and deliver effective rehabilitation programs that restore mobility…" | 🟢 Verbatim (reflowed) | **About** — same paragraph as above |
| "Whether you are suffering from chronic back pain, neck pain, knee pain, sports injuries, stroke-related disabilities, arthritis, ankylosing spondylitis, post-surgical complications, or mobility limitations, our experienced physiotherapists are committed to helping you achieve lasting recovery and optimal physical health." | 🟢 Verbatim | **SeoBand** — lead paragraph (full sentence, word for word) |
| "Led by Dr. Kousik Mallick (PT)… evidence-based treatment, advanced rehabilitation techniques, and patient-centered care…" | 🔵 Adapted | **DoctorProfile** bio + **Features** description ("scientifically proven techniques… holistic approach focuses on pain relief, movement restoration, injury prevention, and long-term wellness") |

---

## PART C — About Dr. Kousik Mallick (PT)

| Words from text | Status | Where it shows |
|---|---|---|
| "About Dr. Kousik Mallick (PT)" (heading) | 🟢 Verbatim | **DoctorProfile** — tag "ABOUT DR. KOUSIK MALLICK (PT)" + heading "Meet Dr. Kousik Mallick (PT)" |
| "Founder and Chief Physiotherapist of Addlife Physiocare" | 🟢 Verbatim | **DoctorProfile** badge ("Founder & Chief Physiotherapist") • **About** doctor row ("FOUNDER & CHIEF PHYSIOTHERAPIST") |
| Full bio: "With extensive experience in orthopedic physiotherapy, neurological rehabilitation, sports physiotherapy, spine rehabilitation, pain management, geriatric physiotherapy, and home physiotherapy services, he has helped numerous patients regain independence, reduce pain, and improve their quality of life." | 🟢 Verbatim | **DoctorProfile** — bio paragraph 1 (word for word) |
| Philosophy: "Dr. Mallick follows a patient-centered and evidence-based approach… provide compassionate care, restore function, prevent future injuries, and empower patients to live healthier and more active lives." | 🟢 Verbatim | **DoctorProfile** — bio paragraph 2 (word for word) |
| Expertise areas (Orthopedic, Neurological, Sports, Spine, Pain Management, Geriatric, Home) | 🟢 Verbatim | **DoctorProfile** — tag chips below bio |

---

## PART D — Services (titles + **full bullet lists**)

Each service appears **twice**: a short card in **Services** (`#services`) and a full
bulleted card in **Specialties** (`#specialties`).

### Orthopedic Physiotherapy — 🟢 every item verbatim in **Specialties**
Back Pain · Neck Pain · Knee Pain · Shoulder Pain · Frozen Shoulder · Arthritis · Joint Pain · Sciatica · Slip Disc · Cervical Spondylosis · Lumbar Spondylosis · Postural Disorders · Musculoskeletal Injuries

### Spine Care & Manual Therapy — 🟢 every item verbatim in **Specialties**
Manual Therapy · Spinal Mobilization · Posture Correction · Core Strengthening · Ergonomic Assessment · Functional Rehabilitation · Chronic Pain Management · Mobility Training

### Ankylosing Spondylitis Physiotherapy — 🟢 every item verbatim in **Specialties**
Pain Relief · Spinal Mobility · Posture Improvement · Flexibility Training · Breathing Exercises · Functional Rehabilitation · Long-Term Exercise Programs

### Sports Physiotherapy & Sports Injury Rehabilitation — 🟢 every item verbatim in **Specialties**
Sports Injuries · ACL Injuries · Ligament Injuries · Muscle Tears · Tendon Injuries · Running Injuries · Ankle Sprains · Overuse Injuries

### Neurological Physiotherapy & Neuro Rehabilitation — 🟢 every item verbatim in **Specialties**
Stroke Rehabilitation · Stroke Recovery Physiotherapy · Parkinson's Disease · Bell's Palsy · Spinal Cord Injury · Multiple Sclerosis · Balance Disorders · Gait Training · Functional Rehabilitation

### Post-Surgical Rehabilitation — 🟢 every item verbatim in **Specialties**
Knee Replacement Surgery · Hip Replacement Surgery · Spine Surgery · Fracture Fixation · Arthroscopic Surgery · Orthopedic Procedures

### Geriatric Physiotherapy — 🟢 verbatim in **Services**
"Helping Senior Citizens Maintain Strength, Mobility, Balance, And Independence Through Specialized Rehabilitation Programs."

### Pediatric Physiotherapy — 🟢 verbatim in **Services**
"Specialized Physiotherapy For Children With Developmental, Neurological, And Musculoskeletal Conditions."

### Home Physiotherapy Services — 🟢 verbatim in **Services**
"Professional Physiotherapy And Rehabilitation Delivered In The Comfort Of Your Home…"

> The "Sports… include sports injury treatment, athletic rehabilitation, return-to-sport
> programs, injury prevention, and performance enhancement" line is reflected in the
> **Services** Sports card ("…with Return-To-Sport Programs").

---

## PART E — Advanced Treatment Techniques (all 12) — 🟢 verbatim in **Techniques** (`#techniques`)

Manual Therapy · Therapeutic Exercise · Electrotherapy · Dry Needling · Kinesio Taping ·
Strength Training · Balance Training · Functional Rehabilitation · Mobility Training ·
Posture Correction · Ergonomic Education · Pain Management Programs

---

## PART F — Conditions We Treat (all 20) — 🟢 verbatim in **Conditions** (`#conditions`)

Back Pain · Neck Pain · Knee Pain · Shoulder Pain · Frozen Shoulder · Arthritis ·
Ankylosing Spondylitis · Sciatica · Sports Injuries · Stroke · Parkinson's Disease ·
Bell's Palsy · Balance Disorders · Joint Pain · Muscle Injuries · Ligament Injuries ·
Spinal Disorders · Post-Surgical Conditions · Chronic Pain Conditions · Mobility Limitations

*(A short 5-item version also appears in the **Footer** "Conditions We Treat" column.)*

---

## PART G — Why Choose Addlife Physiocare?

### Version 1 — the 9 "✔" highlights — 🟢 verbatim in **Promise** (`#promise`)
Expert Physiotherapy Care · Personalized Rehabilitation Programs · Advanced Pain
Management Solutions · Spine & Musculoskeletal Rehabilitation · Sports Injury Recovery ·
Neurological Rehabilitation · Home Physiotherapy Services · Evidence-Based Treatment
Approach · Compassionate Patient Care

### Version 2 — the 5 detailed points (title + description) — 🟢 verbatim in **WhyChoose** (`#why-choose`)
| Point | Description on site |
|---|---|
| Experienced Physiotherapists | "Highly skilled professionals committed to delivering exceptional patient care." |
| Personalized Treatment Plans | "Customized rehabilitation programs designed according to individual needs and recovery goals." |
| Evidence-Based Physiotherapy | "Scientifically proven treatment techniques that ensure safe and effective outcomes." |
| Holistic Rehabilitation Approach | "Focused on pain relief, movement restoration, injury prevention, and long-term wellness." |
| Patient-Centered Care | "Compassionate support throughout every stage of recovery." |

*(The titles also appear as progress bars in the **Features** section.)*

---

## PART H — Our Promise — 🟢 verbatim in **Promise** (`#promise`)

"Relieving Pain. Restoring Function. Rebuilding Confidence."
→ shown as the dark promise banner, followed by "Addlife Physiocare / We Keep You Moving."

---

## PART I — Our Vision & Our Mission — 🟢 verbatim in **VisionMission** (`#vision-mission`)

**Our Vision:** "To be recognized as a leading center of excellence in physiotherapy,
rehabilitation, spine care, pain management, and wellness through compassionate,
evidence-based, and patient-focused healthcare." (word for word)

**Our Mission (5 bullets):**
1. Deliver high-quality physiotherapy and rehabilitation services.
2. Promote healthy movement and active lifestyles.
3. Provide evidence-based treatment solutions.
4. Empower patients through education and preventive care.
5. Improve mobility, function, and quality of life.

---

## PART J — Book Your Consultation Today

| Words from text | Status | Where it shows |
|---|---|---|
| "Book Your Consultation Today" | 🟢 Verbatim | **SeoBand** heading ("Book Your Consultation Today") + **Appointment** subtitle ("BOOK YOUR CONSULTATION TODAY") |
| The full SEO keyword list (17 phrases): Best Physiotherapy Clinic in Salt Lake Sector III · Best Physiotherapist · Physiotherapy Near Me · Back Pain Treatment · Neck Pain Treatment · Knee Pain Physiotherapy · Sports Physiotherapy · Sports Injury Rehabilitation · Stroke Rehabilitation · Neurological Physiotherapy · Orthopedic Physiotherapy · Ankylosing Spondylitis Physiotherapy · Spine Rehabilitation · Manual Therapy · Pain Management Clinic · Rehabilitation Center · Home Physiotherapy Services | 🟢 Verbatim | **SeoBand** — keyword chip grid (all 17) |
| "…Addlife Physiocare is your trusted partner in recovery and wellness." | 🟢 Verbatim | **SeoBand** + **Appointment** ("Your Trusted Partner In Recovery And Wellness In Salt Lake Sector III, Kolkata.") |
| Closing: "Addlife Physiocare — We Keep You Moving." | 🟢 Verbatim | **SeoBand** closing • **Promise** banner • **Footer** |

---

## PART K — Location / Contact (supporting words from the text)

| Words from text | Where it shows |
|---|---|
| "Salt Lake Sector III, Kolkata" | **TopBar** • **Hero** • **About** • **Appointment** • **Footer** |

---

## Final check

✅ **Every distinct word and content block from the client text is present on the page.**
The two items that originally had no home — the **9 "✔" highlights** and **"Our Promise"** —
now live in the new **Promise** section (`#promise`).

🔵 The few "Adapted" rows are alternate phrasings of the *same* information that already
appears verbatim elsewhere (the text you supplied contained two overlapping versions of the
intro/mission). No unique word or service is missing.
