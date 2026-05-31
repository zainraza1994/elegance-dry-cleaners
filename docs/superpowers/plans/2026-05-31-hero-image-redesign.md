# Hero Image Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder hero image with a premium free Unsplash photo and widen + bleed the image column to the right viewport edge.

**Architecture:** Two-file change — download image to `assets/images/hero.jpg`, then update four CSS rules in `styles.css`. No HTML changes. No JS changes. Right-bleed achieved via a `calc()` negative margin on `.hero__image` that grows with viewport width to always reach the browser edge.

**Tech Stack:** Plain HTML/CSS. No build step. Tested by visual inspection in a browser.

---

## Files

| File | Action | What changes |
|---|---|---|
| `assets/images/hero.jpg` | Replace | Downloaded Unsplash photo (tailor at work, by Yasamine June) |
| `styles.css` | Modify | `.hero`, `.hero__inner`, `.hero__image`, `.hero__image img` |
| `index.html` | None | — |

---

## Task 1: Download the hero image

**Files:**
- Replace: `assets/images/hero.jpg`

- [ ] **Step 1: Download the photo at high resolution**

Run from the repo root:

```bash
curl -L "https://images.unsplash.com/photo-1633655442356-ab2dbc69c772?w=1400&h=1600&fit=crop&auto=format&q=90" \
  -o assets/images/hero.jpg
```

- [ ] **Step 2: Verify the file is a valid JPEG and a reasonable size**

```bash
file assets/images/hero.jpg
ls -lh assets/images/hero.jpg
```

Expected output:
```
assets/images/hero.jpg: JPEG image data ...
-rw-r--r-- ... 200K-600K ... assets/images/hero.jpg
```

If the file is under 50 KB, the download failed — check your internet connection and retry.

- [ ] **Step 3: Commit the image**

```bash
git add assets/images/hero.jpg
git commit -m "feat: replace hero placeholder with tailor photo (Yasamine June, Unsplash)"
```

---

## Task 2: Update hero CSS

**Files:**
- Modify: `styles.css` (lines ~306–383, the hero block)

Current state for reference:

```css
.hero { padding: var(--section-pad); }

.hero__inner {
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 64px;
  align-items: center;
}

.hero__image {
  position: relative;
}

.hero__image img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__image { display: none; }
}
```

- [ ] **Step 1: Update `.hero` — add overflow hidden to prevent horizontal scrollbar from the bleed**

Find:
```css
.hero { padding: var(--section-pad); }
```

Replace with:
```css
.hero { padding: var(--section-pad); overflow: hidden; }
```

- [ ] **Step 2: Update `.hero__inner` — widen image column and set minimum height**

Find:
```css
.hero__inner {
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 64px;
  align-items: center;
}
```

Replace with:
```css
.hero__inner {
  display: grid;
  grid-template-columns: 11fr 9fr;
  gap: 64px;
  align-items: center;
  min-height: 560px;
}
```

`11fr 9fr` = 55% / 45% split. `min-height: 560px` ensures the image has real vertical presence even when viewport content is shorter than that.

- [ ] **Step 3: Update `.hero__image` — stretch to full row height and bleed to right edge**

Find:
```css
.hero__image {
  position: relative;
}
```

Replace with:
```css
.hero__image {
  position: relative;
  align-self: stretch;
  overflow: hidden;
  margin-right: calc(-1 * max(24px, (100vw - var(--max-width)) / 2 + 24px));
}
```

- `align-self: stretch` overrides `align-items: center` from the parent grid so this cell fills the full row height.
- The `margin-right` formula: `.inner` has `padding: 0 24px` and `max-width: 1100px`. When viewport > 1100 px the right gutter is `(100vw - 1100px) / 2 + 24px`. `max(24px, …)` clamps at 24px for narrow viewports so we always eat at least the container padding.

- [ ] **Step 4: Update `.hero__image img` — fill height from parent instead of fixed pixels**

Find:
```css
.hero__image img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center;
}
```

Replace with:
```css
.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

- [ ] **Step 5: Commit the CSS changes**

```bash
git add styles.css
git commit -m "feat: hero magazine split — wider image column, right-edge bleed, full height"
```

---

## Task 3: Visual verification

**Files:** None — verification only. Any adjustments committed here.

Open the site in a browser. Because this is a static HTML/CSS site with no build step, you can open `index.html` directly:

```bash
open index.html
# or on Linux:
xdg-open index.html
```

- [ ] **Step 1: Verify image bleeds to the right viewport edge**

Resize the browser window to several widths (1400px, 1200px, 1050px). At every width wider than 900px the image column's right edge should be flush with the browser edge — no ivory background visible to the right of the image.

- [ ] **Step 2: Verify image fills the full hero height**

The image column should be at least 560px tall. Check in DevTools: select `.hero__image`, confirm computed height ≥ 560px.

- [ ] **Step 3: Verify text is unaffected**

The heading, subtext, two CTA buttons, and the three stats (35+ / ★4.9 / 100%) should all be visible and unclipped on the left. No text should overlap the image.

- [ ] **Step 4: Verify mobile is unaffected**

Resize the browser to < 900px. The image should disappear (`display: none`) and the content should be full-width, same as before.

- [ ] **Step 5: Adjust `object-position` if the crop is off**

The photo centres on the tailor's hands. If the crop cuts off the subject at the current `object-position: center`, adjust in `styles.css`:

```css
/* Examples — pick the one that looks best */
object-position: top center;    /* shows face/upper body */
object-position: center 30%;    /* shifts crop slightly up */
```

Re-open `index.html` after each change to confirm the framing.

- [ ] **Step 6: Commit any `object-position` adjustment (skip if none needed)**

```bash
git add styles.css
git commit -m "fix: adjust hero image crop position for tailor photo"
```

---

## Done

After Task 3 the hero will show a premium tailor-at-work photo in a magazine-split layout that bleeds to the right browser edge. The 11 client placeholders (WhatsApp number, Formspree endpoint, etc.) listed in CLAUDE.md are unaffected.
