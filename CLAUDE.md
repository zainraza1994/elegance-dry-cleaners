# Elegance Dry Cleaners — Project Context

## At the start of every session, read these files for full context

- [Memory: project status & what's left](../../../.claude/projects/-Users-zainraza-Desktop-elegance-dry-cleaners/memory/project_elegance_website.md)
- [Design spec](docs/superpowers/specs/2026-05-31-elegance-website-design.md)
- [Implementation plan](docs/superpowers/plans/2026-05-31-elegance-website.md)
- [Hero image redesign spec](docs/superpowers/specs/2026-05-31-hero-image-redesign.md)

## Quick summary

Premium single-page website for **Elegance Dry Cleaners**, Clapham, London. Owner: **Habib**. 35+ years experience, affluent clientele.

**Stack:** Plain HTML/CSS/JS — no framework, no build step.  
**Deployment:** GitHub Pages at `https://zainraza1994.github.io/elegance-dry-cleaners/`  
**Repo:** `github.com/zainraza1994/elegance-dry-cleaners`

## Key files

- [index.html](index.html) — entire single-page site
- [styles.css](styles.css) — full design system (CSS custom properties, BEM)
- [main.js](main.js) — nav, contact form, floating WhatsApp button, scroll entrance observer
- [assets/images/](assets/images/) — hero.jpg (real tailor photo), specialist.jpg, habib.jpg (real photo added session 9)

## Status

All 13 build tasks complete + hero redesigned + mobile hero overlay + animations + **all placeholders filled** + **services gallery expanded to 9 cards**. Last commit: `5882970` — **not yet pushed**. Working tree is clean.

**Next:** Push + activate GitHub Pages (Settings → Pages → Branch: main / root). Site is ready to go live — no remaining placeholders.

**Services expansion (2026-06-05, session 11):** Gallery extended from 6 to 9 cards. New cards: Upholstery & Rug Cleaning (07), Commercial & Hospitality (08), Shoe Repairs (09). Card 01 (Dry Cleaning) updated to mention stain removal. Dot indicators extended to 9. Images: `07-upholstery.jpg`, `08-commercial.jpg`, `09-shoe-repair.jpg` (Unsplash free licence). Spec: `docs/superpowers/specs/2026-06-05-services-expansion-design.md` · Plan: `docs/superpowers/plans/2026-06-05-services-expansion.md`.

**Hero image (2026-05-31):** Magazine split layout — image column bleeds to right viewport edge, full hero height. Photo: tailor at work by Yasamine June (Unsplash free licence, `assets/images/hero.jpg`).

**Mobile hero (2026-06-01, session 6):** Full-bleed background image with text overlaid at ≤900px. `.hero__stats` is a direct child of `.hero__inner` (moved out of `.hero__content-bottom`). CSS Grid overlaps `.hero__content` (z-index 2) and `.hero__image` (z-index 1) in the same row-1 cell; stats sit in row-2 on the ivory background. Heading/sub/label are white; overlay gradient `0.28→0.60`. Fluid heading: `clamp(1.8rem, 7vw, 2.4rem)` — adapts to any screen size. Desktop: image `grid-column: 2; grid-row: 1/3` so it spans the content + stats rows.

**Animations (2026-06-01, session 7):** Apple-style scroll entrance animations + hover lifts. All gated behind `@media (prefers-reduced-motion: no-preference)`.
- `anim-hidden` — fade + `translateY(28px)` slide-up, triggered by `IntersectionObserver` adding `.is-visible`. Used on all text/content elements.
- `anim-hidden--fade` — fade only (no transform). Used on images, iframes, Elfsight widget.
- `anim-hero-mobile` — CSS `@keyframes hero-fade-in` on page load, ≤900px only. Label (0.2s) → heading (0.4s) → subtitle (0.6s) → CTAs (0.8s) → stats (1.0s).
- Hover: buttons lift `translateY(-2px)`, service cards lift `translateY(-4px)` + box-shadow.
- Observer: `threshold: 0.1`, `rootMargin: '0px 0px -40px 0px'`. Elements already in viewport on load get `.is-visible` immediately via `getBoundingClientRect()` check.
- Spec: `docs/superpowers/specs/2026-06-01-animations-design.md` · Plan: `docs/superpowers/plans/2026-06-01-animations.md`

## Client placeholders — 1 remaining before go-live

| # | Item | Status |
|---|------|--------|
| 1 | WhatsApp number | ✅ `447380114114` |
| 2 | Web3Forms access key | ✅ `c9cfcb04-6b60-45c4-9532-d58fb4a10543` → info@elegancedrycleaners.co.uk |
| 3 | Elfsight widget ID | ✅ `b574018f-b501-4ed9-9429-d315b7eb18d2` |
| 4 | Google Business Profile URL | ✅ `maps.app.goo.gl/RMSuGHZqSt29aiML6` |
| 5 | Google Maps embed | ✅ Northcote Rd embed in place |
| 6 | Street address | ✅ 180 Northcote Rd, London SW11 6RE |
| 7 | Phone number | ✅ 020 7738 2266 / `tel:+442077382266` |
| 8 | Habib's photo | ✅ real photo in `assets/images/habib.jpg` |
| 9 | Google rating | ✅ updated to 4.8 |
| 10 | Opening hours | ✅ Mon–Tue + Thu–Fri 8am–6pm, Wed 8am–1pm, Sat 9am–6pm, Sun closed |

> `og:image` placeholder removed — hero.jpg is now a real photo. Update to absolute URL (`https://zainraza1994.github.io/elegance-dry-cleaners/assets/images/hero.jpg`) once GitHub Pages is live.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--ivory` | `#f8f5f0` | Page background |
| `--navy` | `#1c3a5e` | Primary accent, header, footer |
| `--warm-brown` | `#8b7355` | Section labels |
| `--warm-gold` | `#c9b97a` | Specialist section label |
| Headings | Cormorant Garamond (serif) | |
| Body | Inter (sans-serif) | |
