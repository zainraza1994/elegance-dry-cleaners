# Services Expansion — Design Spec
_Date: 2026-06-05_

## Overview

Add three new service cards (07–09) to the existing horizontal swipe gallery, plus a minor copy update to card 01. Total cards increases from 6 to 9. No structural or JS changes required — the existing swipe/dot logic handles any card count dynamically.

## Approach

Append-only (Option A): new cards added at positions 07, 08, 09. Existing cards 01–06 are untouched except for a one-sentence addition to card 01.

## Card Content

### Card 01 — Dry Cleaning (update only)
**Change:** Add stain removal mention to existing description.

> "Professional cleaning for everyday suits, coats, dresses, and formal garments. Specialist stain removal included. Each piece is treated individually with the care it deserves."

---

### Card 07 — Upholstery & Rug Cleaning (new)

> **07 — Service**
> **Upholstery & Rug Cleaning**
> Sofas, armchairs, rugs, and carpets — professionally cleaned using specialist equipment and expert technique. The right tools and treatment for every fabric, brought to your door.

- Image file: `assets/images/services/07-upholstery.jpg`
- Unsplash search terms: "sofa cleaning", "upholstery", "rug cleaning"
- `transition-delay`: 360ms

---

### Card 08 — Commercial & Hospitality (new)

> **08 — Service**
> **Commercial & Hospitality**
> From restaurant uniforms and hotel linens to Airbnb turnarounds and care home laundry — we offer a reliable, professional service for local businesses. Collected, cleaned, and returned on time.

- Image file: `assets/images/services/08-commercial.jpg`
- Unsplash search terms: "restaurant uniform", "hotel laundry", "linen folding"
- `transition-delay`: 420ms

---

### Card 09 — Shoe Repairs (new)

> **09 — Service**
> **Shoe Repairs**
> Heel replacements, sole repairs, stitching, and restoration. We'll keep your favourite pairs going for longer — done properly, not just patched over.

- Image file: `assets/images/services/09-shoe-repair.jpg`
- Unsplash search terms: "cobbler", "shoe repair", "shoe workshop"
- `transition-delay`: 480ms

---

## Technical Changes

### index.html
1. Update card 01 (`svc-card__text`) — add stain removal sentence
2. Append three new `<article class="svc-card">` blocks after card 06
3. Update `svcDots` from 6 `<i>` tags to 9

### assets/images/services/
- Download three free-licence images from Unsplash
- Name: `07-upholstery.jpg`, `08-commercial.jpg`, `09-shoe-repair.jpg`

### No changes required
- `styles.css` — existing `.svc-card` styles apply to all cards
- `main.js` — swipe/dot/progress logic is already dynamic, reads card count at runtime

## Out of scope
- No new sections or galleries
- No pricing information
- Stain Removal is not a separate card — handled via card 01 copy update
