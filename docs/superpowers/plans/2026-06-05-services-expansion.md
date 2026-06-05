# Services Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 new service cards (Upholstery & Rug Cleaning, Commercial & Hospitality, Shoe Repairs) to the horizontal swipe gallery, update card 01 copy to mention stain removal, and extend the dot indicators from 6 to 9.

**Architecture:** Append-only changes to `index.html`. Three new `<article class="svc-card">` blocks added after card 06. No CSS or JS changes required — existing styles and swipe logic are already dynamic. Three Unsplash images downloaded to `assets/images/services/`.

**Tech Stack:** Plain HTML/CSS — no build step, no framework. Preview by opening `index.html` in a browser.

---

## File Map

| File | Change |
|------|--------|
| `assets/images/services/07-upholstery.jpg` | Create — download from Unsplash |
| `assets/images/services/08-commercial.jpg` | Create — download from Unsplash |
| `assets/images/services/09-shoe-repair.jpg` | Create — download from Unsplash |
| `index.html` | Modify — card 01 copy, dot indicators, append cards 07–09 |

---

## Task 1: Download images

**Files:**
- Create: `assets/images/services/07-upholstery.jpg`
- Create: `assets/images/services/08-commercial.jpg`
- Create: `assets/images/services/09-shoe-repair.jpg`

- [ ] **Step 1: Download all three images**

```bash
curl -L "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?w=800&q=80" \
  -o assets/images/services/07-upholstery.jpg

curl -L "https://images.unsplash.com/photo-1520434901111-8e9bcb42c628?w=800&q=80" \
  -o assets/images/services/08-commercial.jpg

curl -L "https://images.unsplash.com/photo-1529953717281-81a40b131119?w=800&q=80" \
  -o assets/images/services/09-shoe-repair.jpg
```

- [ ] **Step 2: Verify all three files exist and are non-empty**

```bash
ls -lh assets/images/services/07-upholstery.jpg assets/images/services/08-commercial.jpg assets/images/services/09-shoe-repair.jpg
```

Expected: three files, each at least 50KB.

- [ ] **Step 3: Commit**

```bash
git add assets/images/services/07-upholstery.jpg assets/images/services/08-commercial.jpg assets/images/services/09-shoe-repair.jpg
git commit -m "feat: add service images for upholstery, commercial, and shoe repair cards"
```

---

## Task 2: Update card 01 copy

**Files:**
- Modify: `index.html:157`

- [ ] **Step 1: Update the card 01 description**

In `index.html`, find this exact line (around line 157):

```html
          <p class="svc-card__text">Professional cleaning for everyday suits, coats, dresses, and formal garments. Each piece is treated individually with the care it deserves.</p>
```

Replace with:

```html
          <p class="svc-card__text">Professional cleaning for everyday suits, coats, dresses, and formal garments. Specialist stain removal included. Each piece is treated individually with the care it deserves.</p>
```

- [ ] **Step 2: Open `index.html` in a browser and confirm card 01 shows the updated text**

Open the file directly: `open index.html`

Swipe to card 1 — description should read "…Specialist stain removal included…"

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add stain removal mention to dry cleaning card"
```

---

## Task 3: Update dot indicators from 6 to 9

**Files:**
- Modify: `index.html` (the `svcDots` div, around line 207)

- [ ] **Step 1: Update the dots**

Find this exact block in `index.html`:

```html
    <div class="services__dots" id="svcDots" aria-hidden="true">
      <i class="on"></i><i></i><i></i><i></i><i></i><i></i>
    </div>
```

Replace with:

```html
    <div class="services__dots" id="svcDots" aria-hidden="true">
      <i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: extend service gallery dot indicators to 9"
```

---

## Task 4: Add card 07 — Upholstery & Rug Cleaning

**Files:**
- Modify: `index.html` (after card 06, before the closing `</div>` of `svcTrack`)

- [ ] **Step 1: Add card 07**

In `index.html`, find this exact closing block (around line 204):

```html
      </article>
    </div>

    <div class="services__dots" id="svcDots"
```

Insert the new card immediately before the `</div>` that closes `svcTrack` (i.e. after card 06's closing `</article>`):

```html
      <article class="svc-card anim-hidden" style="transition-delay: 360ms">
        <img src="assets/images/services/07-upholstery.jpg" alt="Upholstery and rug cleaning" loading="lazy" draggable="false">
        <div class="svc-card__body">
          <span class="svc-card__idx">07 — Service</span>
          <h3 class="svc-card__name">Upholstery &amp; Rug Cleaning</h3>
          <p class="svc-card__text">Sofas, armchairs, rugs, and carpets — professionally cleaned using specialist equipment and expert technique. The right tools and treatment for every fabric, brought to your door.</p>
        </div>
      </article>
```

The result should look like:

```html
      <article class="svc-card anim-hidden" style="transition-delay: 300ms">
        <img src="assets/images/services/06-leather.jpg" alt="Leather and suede care" loading="lazy" draggable="false">
        <div class="svc-card__body">
          <span class="svc-card__idx">06 — Service</span>
          <h3 class="svc-card__name">Leather &amp; Suede</h3>
          <p class="svc-card__text">Specialist cleaning and conditioning for leather jackets, suede coats, and accessories. Restored to their best.</p>
        </div>
      </article>

      <article class="svc-card anim-hidden" style="transition-delay: 360ms">
        <img src="assets/images/services/07-upholstery.jpg" alt="Upholstery and rug cleaning" loading="lazy" draggable="false">
        <div class="svc-card__body">
          <span class="svc-card__idx">07 — Service</span>
          <h3 class="svc-card__name">Upholstery &amp; Rug Cleaning</h3>
          <p class="svc-card__text">Sofas, armchairs, rugs, and carpets — professionally cleaned using specialist equipment and expert technique. The right tools and treatment for every fabric, brought to your door.</p>
        </div>
      </article>
    </div>
```

- [ ] **Step 2: Open `index.html` in a browser and swipe to card 7**

Confirm: image loads, title reads "Upholstery & Rug Cleaning", dot 7 activates.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add upholstery and rug cleaning service card (07)"
```

---

## Task 5: Add card 08 — Commercial & Hospitality

**Files:**
- Modify: `index.html` (after card 07)

- [ ] **Step 1: Add card 08**

In `index.html`, directly after the card 07 `</article>` block (from Task 4), insert:

```html
      <article class="svc-card anim-hidden" style="transition-delay: 420ms">
        <img src="assets/images/services/08-commercial.jpg" alt="Commercial and hospitality laundry" loading="lazy" draggable="false">
        <div class="svc-card__body">
          <span class="svc-card__idx">08 — Service</span>
          <h3 class="svc-card__name">Commercial &amp; Hospitality</h3>
          <p class="svc-card__text">From restaurant uniforms and hotel linens to Airbnb turnarounds and care home laundry — we offer a reliable, professional service for local businesses. Collected, cleaned, and returned on time.</p>
        </div>
      </article>
```

- [ ] **Step 2: Open `index.html` in a browser and swipe to card 8**

Confirm: image loads, title reads "Commercial & Hospitality", dot 8 activates.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add commercial and hospitality service card (08)"
```

---

## Task 6: Add card 09 — Shoe Repairs

**Files:**
- Modify: `index.html` (after card 08)

- [ ] **Step 1: Add card 09**

In `index.html`, directly after the card 08 `</article>` block (from Task 5), insert:

```html
      <article class="svc-card anim-hidden" style="transition-delay: 480ms">
        <img src="assets/images/services/09-shoe-repair.jpg" alt="Shoe repairs and restoration" loading="lazy" draggable="false">
        <div class="svc-card__body">
          <span class="svc-card__idx">09 — Service</span>
          <h3 class="svc-card__name">Shoe Repairs</h3>
          <p class="svc-card__text">Heel replacements, sole repairs, stitching, and restoration. We'll keep your favourite pairs going for longer — done properly, not just patched over.</p>
        </div>
      </article>
```

- [ ] **Step 2: Open `index.html` in a browser and swipe to card 9**

Confirm: image loads, title reads "Shoe Repairs", dot 9 activates.

- [ ] **Step 3: Final check — swipe through all 9 cards**

- All 9 dots activate correctly as you swipe
- Progress bar fills smoothly across all 9 cards
- Prev/Next arrow buttons work at both ends (disabled at card 1, disabled at card 9)
- On mobile (resize browser to < 600px), all 9 cards are swipeable with touch

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add shoe repairs service card (09)"
```
