# Hero Image Redesign — Design Spec

**Date:** 2026-05-31
**Status:** Approved

## Goal

Replace the hero placeholder image with a premium, larger photo that communicates fresh, clean, expert craftsmanship — without disrupting the existing text, CTAs, or stats.

---

## Layout: Magazine Split with Right-Edge Bleed

**Change the hero grid from `5fr 3fr` to `55% 45%`.**

The image column gains roughly 7.5 percentage points of width. The content column narrows slightly but remains wide enough to hold the heading, subtext, CTAs, and stats comfortably.

**The image column bleeds flush to the right viewport edge** — no right padding or margin on the image side. This creates an editorial magazine-spread feel where the photo extends all the way to the browser edge.

**The hero section gets a defined minimum height of 560px.** The image fills 100% of the hero height using `height: 100%` (removing the current fixed `420px`). The content column is vertically centred within that height, same as today.

On screens below 900px the image column is already hidden — no change to mobile layout.

---

## Image

| Property | Value |
|---|---|
| Subject | Tailor working carefully on fabric by hand |
| Mood | Warm, premium, human craft |
| Photographer | Yasamine June (@yasamine) |
| Licence | Unsplash free licence — commercial use permitted, no attribution required |
| Unsplash URL | https://unsplash.com/photos/U4Ewfl8ewq0 |
| CDN URL | https://images.unsplash.com/photo-1633655442356-ab2dbc69c772 |
| Saved as | `assets/images/hero.jpg` (replaces current placeholder) |
| Rendering | `object-fit: cover`, `object-position: center` (adjust after visual check of crop) |

The image is downloaded at high resolution (min 1400px wide) and committed to the repo so there is no runtime CDN dependency.

---

## Text — No Changes

The heading, subtext, CTAs, and stats row (`35+ Years`, `★ 4.9`, `100% Guaranteed`) are unchanged. The wider image column and the bleed effect increase image presence without touching copy.

---

## Files Changed

| File | Change |
|---|---|
| `styles.css` | Hero grid columns, image height (`420px` → `100%`), hero min-height (`560px`), right-bleed on image column |
| `assets/images/hero.jpg` | Replaced with downloaded Unsplash photo |
| `index.html` | No changes |

---

## Right-Bleed Implementation Note

The bleed is achieved by removing the right padding from the hero section on the image side. The `.hero__inner` grid sits inside `.inner` (which has `max-width: 1100px; margin: 0 auto`). The image column will use a negative right margin equal to the container's right gutter so it extends to the viewport edge:

```
margin-right: calc(-1 * max(24px, (100vw - var(--max-width)) / 2 + 24px))
```

`.inner` uses `padding: 0 24px` and `max-width: var(--max-width)` (1100px). On viewports narrower than 1100px the formula reduces to `-24px`, eating just the container padding — the image aligns with the container edge. The image also needs `align-self: stretch` on `.hero__image` so the grid stretches it to the full section height rather than just the content column height.

---

## Success Criteria

- Hero image is visually larger and fills the full section height
- Image bleeds to the right browser edge on desktop
- No change to text, CTAs, or stats
- Image loads from `assets/images/hero.jpg` (no external CDN call)
- Mobile layout unchanged
