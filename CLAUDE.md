# Elegance Dry Cleaners — Project Context

## At the start of every session, read these files for full context

- [Memory: project status & what's left](../../../.claude/projects/-Users-zainraza-Desktop-elegance-dry-cleaners/memory/project_elegance_website.md)
- [Design spec](docs/superpowers/specs/2026-05-31-elegance-website-design.md)
- [Implementation plan](docs/superpowers/plans/2026-05-31-elegance-website.md)

## Quick summary

Premium single-page website for **Elegance Dry Cleaners**, Clapham, London. Owner: **Habib**. 35+ years experience, affluent clientele.

**Stack:** Plain HTML/CSS/JS — no framework, no build step.  
**Deployment:** GitHub Pages at `https://zainraza1994.github.io/elegance-dry-cleaners/`  
**Repo:** `github.com/zainraza1994/elegance-dry-cleaners`

## Key files

- [index.html](index.html) — entire single-page site
- [styles.css](styles.css) — full design system (CSS custom properties, BEM)
- [main.js](main.js) — nav, contact form, floating WhatsApp button
- [assets/images/](assets/images/) — hero.jpg, specialist.jpg, habib.jpg (placeholder)

## Status

All 13 build tasks complete and pushed to `main` (HEAD `5fc581e`). GitHub Pages needs manual activation in repo Settings → Pages.

## 11 client placeholders still to fill before go-live

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
11. Update `og:image` to absolute URL once GitHub Pages is live

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--ivory` | `#f8f5f0` | Page background |
| `--navy` | `#1c3a5e` | Primary accent, header, footer |
| `--warm-brown` | `#8b7355` | Section labels |
| `--warm-gold` | `#c9b97a` | Specialist section label |
| Headings | Cormorant Garamond (serif) | |
| Body | Inter (sans-serif) | |
