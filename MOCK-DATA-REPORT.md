# Addlife Physiocare — Mock / Static Data Report

This document lists **everything on the website that is NOT from the client text** —
placeholder data, invented content, stock images, and broken image links — so you can
see exactly what still needs **real client data** before going live.

**Legend**
- ✅ **From text** — taken from the client-provided content.
- ❌ **Mocked** — invented / placeholder; **needs real data from client**.
- ⚠️ **Broken** — points to an image file that does **not exist** in the project.

> **Image situation (read first):** The `public/` folder contains **no images** (only
> `vite.svg`). Therefore **every `/images/*.jpg` reference below is broken** and shows
> nothing. All other photos are **Unsplash stock images** (external URLs) used as
> placeholders — they load, but they are **not photos of the real clinic / doctor / patients**.

---

## 1. Top Bar — `src/components/Topbar/Topbar.jsx`

| Data | Status | Note |
|---|---|---|
| "Salt Lake Sector III, Kolkata, West Bengal, India" | ✅ / ❌ mix | City from text; "West Bengal, India" added |
| "Our Service Timing : 10:00am To 9:00pm (Mon to Sat)" | ❌ Mocked | **No timings were in the client text** — confirm real hours |
| Social icons (Telegram, Instagram, Facebook, LinkedIn) → `href="/"` | ❌ Mocked | Links go nowhere — need real social URLs |

## 2. Navbar — `src/components/Navbar/Navbar.jsx`

| Data | Status | Note |
|---|---|---|
| Menu items, "Book Appointment" button | ❌ Structural | Navigation labels (not content); button has no action |

## 3. Hero — `src/components/Hero/Hero.jsx`

| Data | Status | Note |
|---|---|---|
| "We Keep You Moving" | ✅ From text | |
| "Advanced Physiotherapy, Rehabilitation, Spine Care & Pain Management — Clinic In Salt Lake Sector III, Kolkata." | ✅ From text | |
| Email button: **info@addlifephysiocare.com** | ❌ Mocked | **No email was in the client text** — guessed from brand name |
| Phone button: **+91 891 047 7963** | ❌ Mocked | **No phone number was in the client text** — placeholder |
| Background image | ❌ Mocked | Stock/CSS background, not the real clinic |

## 4. About — `src/components/About/About.jsx`

| Data | Status | Note |
|---|---|---|
| Bold + mission paragraphs | ✅ From text | |
| "Dr. Kousik Mallick (PT)" + "Founder & Chief Physiotherapist" | ✅ From text | |
| **"15+ YRS OF EXPERIENCE"** circle | ❌ Mocked | **No experience number in the text** — invented stat |
| 3 photos (Unsplash) | ❌ Mocked | Stock images, not the real clinic |
| Doctor photo `randomuser.me/...men/32.jpg` | ❌ Mocked | **Random stock face — NOT Dr. Mallick** |
| "Mallick" cursive signature | ❌ Decorative | Styled text, not a real signature |
| "Learn More" button | ❌ Mocked | No link/action |

## 5. Doctor Profile — `src/components/DoctorProfile/DoctorProfile.jsx`

| Data | Status | Note |
|---|---|---|
| Full bio + philosophy + expertise tags | ✅ From text | |
| Doctor image (Unsplash) | ❌ Mocked | **Stock photo — NOT Dr. Mallick** |

## 6. Experts / Categories — `src/components/Experts/Experts.jsx`

| Data | Status | Note |
|---|---|---|
| Service titles (Orthopedic, Sports, Spine, Neurological) | ✅ From text | |
| "Posture & Mobility" subtitle | ❌ Mocked | Minor added label |
| 4 card images (Unsplash) | ❌ Mocked | Stock images |
| Slider dots | ❌ Decorative | Non-functional |

## 7. Services — `src/components/Services/Services.jsx`

| Data | Status | Note |
|---|---|---|
| All 9 service titles + descriptions | ✅ From text | |
| Sports card image (Unsplash) | ❌ Mocked | Stock image |
| "View All" / arrow buttons | ❌ Mocked | No action |

## 8. Specialties — `src/components/Specialties/Specialties.jsx`

| Data | Status | Note |
|---|---|---|
| All 6 services + **every bullet item** | ✅ From text | 100% from text — nothing mocked |
| Emoji icons | ❌ Decorative | |

## 9. Conditions — `src/components/Conditions/Conditions.jsx`

| Data | Status | Note |
|---|---|---|
| All 20 conditions | ✅ From text | 100% from text |

## 10. Techniques — `src/components/Techniques/Techniques.jsx`

| Data | Status | Note |
|---|---|---|
| All 12 techniques | ✅ From text | 100% from text |
| Emoji icons | ❌ Decorative | |

## 11. Features / Why Choose Us — `src/components/Features/Features.jsx`

| Data | Status | Note |
|---|---|---|
| "Why Choose Addlife Physiocare" + description | ✅ From text | |
| Progress bars: Evidence-Based **95%**, Personalized **92%**, Patient-Centered **90%** | ❌ Mocked | **The percentages are invented** |
| Partner logos: **BEGONIA · CUTING · PETA · PRAD** | ❌ Mocked | **Fake/placeholder brand names** |
| 6-step process: Book Consultation → Initial Health Consultation → Full Body Assessment → Customized Treatment Plan → Hands-On Therapy → Progress & Recovery | ❌ Mocked | **This whole process flow was NOT in the client text** — invented |
| Step card description text | ❌ Mocked | Invented |
| 4 images (Unsplash) | ❌ Mocked | Stock images |
| "Book This Service" buttons | ❌ Mocked | No action |

## 12. Why Choose (5 cards) — `src/components/WhyChoose/WhyChoose.jsx`

| Data | Status | Note |
|---|---|---|
| 5 titles + descriptions | ✅ From text | |
| Emoji icons | ❌ Decorative | |

## 13. Promise — `src/components/Promise/Promise.jsx`

| Data | Status | Note |
|---|---|---|
| 9 "✔" highlights + "Our Promise" tagline + brand | ✅ From text | 100% from text |

## 14. Vision & Mission — `src/components/VisionMission/VisionMission.jsx`

| Data | Status | Note |
|---|---|---|
| Vision paragraph + 5 Mission bullets | ✅ From text | 100% from text |

## 15. Testimonials — `src/components/Testimonials/Testimonials.jsx`  ⚠️ MOSTLY FAKE

| Data | Status | Note |
|---|---|---|
| Section heading "What Our Patients Say…" | ❌ Mocked | Heading text invented |
| Testimonial quote ("After years of chronic back pain…") | ❌ Mocked | **Fake patient review** |
| Patient name **"Soumen Das"** | ❌ Mocked | **Invented person** |
| "Salt Lake, Kolkata" | ❌ Mocked | Invented |
| 5-star rating ★★★★★ | ❌ Mocked | Hardcoded |
| Patient photo `randomuser.me/...` | ❌ Mocked | Random stock face |
| Main image `/images/testimonial.jpg` | ⚠️ Broken | **File does not exist** |
| Prev/Next nav buttons | ❌ Mocked | Non-functional (only 1 testimonial) |
| "Dr. Kousik Mallick / Addlife Physiocare" mention in quote | ✅ Names real | But inside a fake quote |

## 16. Price / Plans — `src/components/Price/Price.jsx`  ⚠️ FULLY MOCKED

| Data | Status | Note |
|---|---|---|
| "DISCOUNTED PLANS" tag | ❌ Mocked | Not in text |
| "Affordable Physiotherapy Plans" heading | ❌ Mocked | Not in text |
| Plan names (Pain Relief, Injury Recovery, Mobility & Neuro Rehab) | ❌ Mocked | Invented tiers |
| Prices **₹600 / ₹900 / ₹1500 per session** | ❌ Mocked | **Fictional prices — risky to publish** |
| Yearly / Monthly toggle | ❌ Mocked | Doesn't change anything |
| Feature bullets | ⚠️ Mixed | Condition names are real; the tier grouping is invented |
| "Book Now" buttons | ❌ Mocked | No action |

## 17. Appointment — `src/components/Appointment/Appointment.jsx`

| Data | Status | Note |
|---|---|---|
| "BOOK YOUR CONSULTATION TODAY" + "trusted partner in recovery and wellness" | ✅ From text | |
| Phone **+91 891 047 7963** | ❌ Mocked | Placeholder |
| Email **info@addlifephysiocare.com** | ❌ Mocked | Placeholder |
| "Service Timing (Mon to Sat) 10:00am To 9:00pm" | ❌ Mocked | Not in text |
| Service dropdown options | ✅ From text | Service names are real |
| Contact form (Name / Email / Service / Date / Message) | ❌ Non-functional | **No backend — submitting does nothing** |
| `/images/appointment.jpg` | ⚠️ Broken | **File does not exist** |

## 18. SEO Band — `src/components/SeoBand/SeoBand.jsx`

| Data | Status | Note |
|---|---|---|
| Lead paragraph, "Book Your Consultation Today", 17 keywords, closing brand line | ✅ From text | 100% from text |

## 19. Footer — `src/components/Footer/Footer.jsx`

| Data | Status | Note |
|---|---|---|
| "Addlife Physiocare" + "We Keep You Moving" tagline | ✅ From text | |
| Address "Salt Lake Sector III, Kolkata, West Bengal" | ✅ / ❌ | City from text; "West Bengal" added |
| Phone **+91 891 047 7963** | ❌ Mocked | Placeholder |
| Email **info@addlifephysiocare.com** | ❌ Mocked | Placeholder |
| "Our Services" / "Conditions We Treat" lists | ✅ From text | Short versions of real lists |
| Social icons | ❌ Mocked | No real links |
| Newsletter input + "Subscribe Now" | ❌ Non-functional | No backend |
| Gallery images `/images/gallery1.jpg` … `gallery6.jpg` | ⚠️ Broken | **6 files do not exist** |
| "© 2026 Addlife Physiocare" | ❌ Auto | Year hardcoded |
| "Terms & Conditions" / "Privacy Policy" | ❌ Mocked | No pages behind them |

---

## Summary — what needs REAL client data before launch

### 🔴 High priority (factually wrong / risky to publish)
1. **Phone number** `+91 891 047 7963` — placeholder, appears in Hero, Appointment, Footer.
2. **Email** `info@addlifephysiocare.com` — guessed, appears in Hero, Appointment, Footer.
3. **Service timings** `10am–9pm Mon–Sat` — invented (TopBar, Appointment).
4. **Prices** ₹600 / ₹900 / ₹1500 — fictional (Price section).
5. **Testimonial** ("Soumen Das" review) — fake patient & quote.
6. **Doctor's photo** — currently a random stock face, **not Dr. Mallick**.
7. **"15+ Years of Experience"** — invented number.
8. **Partner logos** (BEGONIA, CUTING, PETA, PRAD) — fake.

### 🟠 Medium priority (placeholders that work but aren't real)
9. **All photos** — Unsplash stock; need real clinic / treatment / doctor photos.
10. **6-step "How It Works" process** — invented; confirm it matches the clinic's actual flow.
11. **Progress percentages** (95/92/90) — made up.
12. **Social media links** — currently `href="/"`.

### ⚠️ Broken (must fix or remove)
13. **8 missing local images** — `/images/testimonial.jpg`, `/images/appointment.jpg`,
    `/images/gallery1.jpg` … `gallery6.jpg`. These files don't exist → blank/broken images.

### ⚙️ Non-functional (no backend)
14. **Appointment form** and **Newsletter** submit nowhere.
15. **Buttons** (Book Appointment, Book This Service, Book Now, View All) have no action.

---

**Everything NOT listed as ❌/⚠️ above is real content from your client text.** The text
content (services, conditions, techniques, vision, mission, doctor bio, promise, SEO
keywords) is 100% accurate — the gaps are all **contact details, prices, photos,
testimonials, and functionality**, none of which were included in the client document.
