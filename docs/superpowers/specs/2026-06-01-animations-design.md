# Animation Design Spec — Elegance Dry Cleaners

**Date:** 2026-06-01  
**Scope:** Scroll entrance animations + hover effects across the full site  
**Approach:** CSS transitions + `IntersectionObserver` (no libraries)

---

## Goals

Make the site feel dynamic and polished on both desktop and mobile. Subtly more pronounced than Apple's default — noticeable but never distracting. Befitting an affluent, premium brand.

---

## Approach

**CSS transitions + IntersectionObserver (Approach A)**

- `IntersectionObserver` in `main.js` watches all animated elements and adds `.is-visible` when they enter the viewport
- Initial hidden state and transitions defined in `styles.css`
- Hover effects are pure CSS (no JS)
- One exception: mobile hero text uses CSS `@keyframes` on page load (not scroll-triggered)

**No libraries.** Fits the plain HTML/CSS/JS stack with zero dependencies.

---

## Global Timing Values

| Property | Value |
|---|---|
| Scroll entrance duration | `0.65s` |
| Mobile hero load duration | `0.6s` per element |
| Easing | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Slide distance | `28px` (translateY) |
| Observer threshold | `0.15` |
| Hover lift — cards | `translateY(-4px)` + subtle shadow, `0.2s ease` |
| Hover lift — buttons | `translateY(-2px)`, `0.15s ease` |
| `prefers-reduced-motion` | All transitions and keyframes disabled |

---

## Element Animation Map

### Hero

**Desktop:** No entrance animation. Content is fully visible on load — animating it would feel jarring. Hover effect on CTA buttons only (`translateY(-2px)`).

**Mobile (≤900px):** CSS `@keyframes hero-fade-in` triggered on page load. Uses `animation-fill-mode: both` so elements remain invisible before their delay fires. No JS needed for this part.

Stagger sequence:

| Element | Animation delay |
|---|---|
| Label ("London · Est. 1990") | `0.2s` |
| Heading | `0.4s` |
| Subtitle | `0.6s` |
| CTA buttons | `0.8s` |

Each element: `opacity: 0; transform: translateY(28px)` → `opacity: 1; transform: translateY(0)` over `0.6s`.

---

### About / Our Story

IntersectionObserver scroll trigger. Elements stagger 80ms apart:

1. Section label
2. Heading
3. Body paragraphs
4. Quote accent block

Animation: fade + slide-up.

---

### Meet Habib

IntersectionObserver scroll trigger.

- **Photo:** fade only (no `translateY` — images + transform can cause layout jitter)
- **Label → Heading → Body → Credentials bar:** fade + slide-up, stagger 80ms apart

---

### Services

IntersectionObserver scroll trigger.

- **Label + Heading:** fade + slide-up
- **6 service cards:** fade + slide-up, stagger 80ms per card. Hover: `translateY(-4px)` + box-shadow deepens, `0.2s ease`

---

### Specialist Care

IntersectionObserver scroll trigger.

- **Label + Heading:** fade + slide-up
- **Tag pills:** fade + slide-up, stagger 60ms each
- **Specialist image (desktop):** fade only

---

### Reviews

IntersectionObserver scroll trigger.

- **Label + Heading:** fade + slide-up
- **Elfsight widget:** fade only — no `translateY` on third-party embeds to avoid layout jumps

---

### Location & Hours

IntersectionObserver scroll trigger.

- **Label + Heading:** fade + slide-up
- **Map iframe:** fade only — iframes + `transform` cause layout glitches
- **Address block + hours table:** fade + slide-up

---

### Contact

IntersectionObserver scroll trigger.

- **Label + Heading:** fade + slide-up
- **Form fields:** fade + slide-up, stagger 70ms each
- **WhatsApp column:** fade + slide-up, slight delay after form

---

## Hover Effects Summary

| Element | Effect |
|---|---|
| CTA buttons (all) | `translateY(-2px)`, `0.15s ease` |
| Service cards | `translateY(-4px)` + box-shadow, `0.2s ease` |
| Nav links | Already handled in existing styles — no change |

---

## Implementation Notes

- All animated elements start with class `anim-hidden` (set in CSS: `opacity: 0; transform: translateY(28px); transition: opacity 0.65s ..., transform 0.65s ...`)
- `IntersectionObserver` adds `is-visible` which sets `opacity: 1; transform: none`
- Elements already in the viewport on page load receive `is-visible` immediately (observer fires synchronously for in-view elements on init)
- Images use a separate `anim-hidden--fade` class: `opacity: 0` only, no transform
- Mobile hero elements use `anim-hero-mobile` class with inline `animation-delay` values; the `@keyframes` handles the rest
- The entire animation system is wrapped in `@media (prefers-reduced-motion: no-preference)` — users who opt out see no animation at all

---

## Files Changed

- `styles.css` — add `.anim-hidden`, `.anim-hidden--fade`, `.is-visible`, `@keyframes hero-fade-in`, hover rules, `prefers-reduced-motion` wrapper
- `main.js` — add `IntersectionObserver` block, query all animated elements, apply `is-visible`
- `index.html` — add `anim-hidden` / `anim-hidden--fade` classes and `animation-delay` inline styles to mobile hero elements
