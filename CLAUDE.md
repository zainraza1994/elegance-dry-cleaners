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
- [main.js](main.js) — nav, contact form, floating WhatsApp button
- [assets/images/](assets/images/) — hero.jpg (real tailor photo), specialist.jpg, habib.jpg (placeholder)

## Status

All 13 build tasks complete + hero image redesigned + **mobile hero layout added (2026-06-01)**. Last pushed commit: `9c24076`. Session 4 changes to `index.html` + `styles.css` are **uncommitted** — commit before next session.

**Hero image (2026-05-31):** Magazine split layout — image column bleeds to right viewport edge, full hero height. Photo: tailor at work by Yasamine June (Unsplash free licence, `assets/images/hero.jpg`).

**Mobile hero (2026-06-01):** Cinematic strip layout at ≤900px. Full details in memory file. Demo file `hero-mobile-demo.html` at repo root — safe to delete.

## 10 client placeholders still to fill before go-live

1. WhatsApp number — replace `44XXXXXXXXXX` everywhere in `index.html`
2. Formspree endpoint — replace `YOUR-FORMSPREE-ENDPOINT` in contact form
3. Elfsight widget ID — replace `elfsight-app-YOUR-WIDGET-ID-HERE`
4. Google Business Profile URL — replace `YOUR-GOOGLE-BUSINESS-PROFILE-URL`
5. Google Maps embed URL — replace `PASTE-YOUR-GOOGLE-MAPS-EMBED-URL-HERE`
6. Street address — replace `YOUR STREET ADDRESS` and `YOUR POSTCODE`
7. Phone number — replace `+44 XXXX XXX XXX` and `tel:+44XXXXXXXXXX`
8. Habib's photo — swap `assets/images/habib.jpg` placeholder
9. Verify `★ 4.9` Google rating is accurate
10. Confirm opening hours (currently: Mon–Fri 8am–7pm, Sat 9am–6pm, Sun 10am–4pm)

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
