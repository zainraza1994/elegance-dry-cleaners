# Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Apple-style scroll entrance animations and hover lift effects across the full site using CSS transitions + IntersectionObserver — no libraries.

**Architecture:** Three-file change. `styles.css` gets the animation classes, keyframes, and hover extensions. `main.js` gets the IntersectionObserver that adds `.is-visible` on scroll. `index.html` gets `anim-hidden` / `anim-hidden--fade` / `anim-hero-mobile` classes and inline stagger delays on the right elements. The entire system is gated behind `@media (prefers-reduced-motion: no-preference)` so users who opt out see no animation.

**Tech Stack:** Plain HTML/CSS/JS — no build step, no libraries.

---

## File Map

| File | What changes |
|---|---|
| `styles.css` | Add animation classes, keyframes, extend existing btn + service-card transitions, add hover transforms |
| `main.js` | Add IntersectionObserver block for scroll-triggered `.is-visible` |
| `index.html` | Add `anim-hidden` / `anim-hidden--fade` / `anim-hero-mobile` classes + inline `transition-delay` / `animation-delay` stagger values |

---

## Task 1: CSS — animation foundation + hover extensions

**Files:**
- Modify: `styles.css:86` (`.btn` transition)
- Modify: `styles.css:590` (`.service-card` transition)
- Modify: `styles.css:592` (`.service-card:hover`)
- Modify: `styles.css:927` (append at end of file)

- [ ] **Step 1: Extend `.btn` transition to include transform**

At `styles.css:86`, the current rule is:
```css
  transition: background 0.22s, border-color 0.22s, color 0.22s;
```
Change to:
```css
  transition: background 0.22s, border-color 0.22s, color 0.22s, transform 0.15s ease;
```

- [ ] **Step 2: Extend `.service-card` transition to include transform and box-shadow**

At `styles.css:590`, the current rule is:
```css
  transition: background 0.2s;
```
Change to:
```css
  transition: background 0.2s, transform 0.2s ease, box-shadow 0.2s ease;
```

- [ ] **Step 3: Append the full animation system block to the end of styles.css**

Append after the last line of `styles.css`:

```css

/* =============================================
   ANIMATIONS
   ============================================= */

@media (prefers-reduced-motion: no-preference) {
  /* Scroll entrance — fade + slide-up */
  .anim-hidden {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Scroll entrance — fade only (images, iframes, third-party widgets) */
  .anim-hidden--fade {
    opacity: 0;
    transition: opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .anim-hidden.is-visible,
  .anim-hidden--fade.is-visible {
    opacity: 1;
    transform: none;
  }

  /* Mobile hero load animation — fires on page load, not scroll */
  @keyframes hero-fade-in {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .anim-hero-mobile {
      animation: hero-fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  }

  /* Hover lifts */
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(28, 58, 94, 0.12);
  }

  .btn--primary:hover,
  .btn--outline:hover,
  .btn--whatsapp:hover {
    transform: translateY(-2px);
  }
}
```

- [ ] **Step 4: Open the site in a browser and verify**

Open `index.html` in a browser. Scroll down — nothing should animate yet (no classes added to HTML). Hover over a CTA button — it should lift 2px. Hover over a service card — it should lift 4px with a shadow. If transforms don't appear, check the browser devtools for specificity conflicts.

- [ ] **Step 5: Commit**

```bash
git add styles.css
git commit -m "feat: add animation CSS system — entrance classes, keyframes, hover lifts"
```

---

## Task 2: JS — IntersectionObserver for scroll entrances

**Files:**
- Modify: `main.js` (append at end)

- [ ] **Step 1: Append the IntersectionObserver block to main.js**

Append after the last line of `main.js`:

```js
// --- Scroll entrance animations ---
const animEls = document.querySelectorAll('.anim-hidden, .anim-hidden--fade');

if (animEls.length) {
  const entranceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entranceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animEls.forEach(el => entranceObserver.observe(el));
}
```

- [ ] **Step 2: Verify the observer is wired up**

Open browser devtools console. Load `index.html`. Run:
```js
document.querySelectorAll('.anim-hidden, .anim-hidden--fade').length
```
Should return `0` right now (no HTML classes added yet). No errors should appear.

- [ ] **Step 3: Commit**

```bash
git add main.js
git commit -m "feat: add IntersectionObserver scroll entrance trigger"
```

---

## Task 3: HTML — add animation classes and stagger delays

**Files:**
- Modify: `index.html`

This task adds `anim-hidden`, `anim-hidden--fade`, and `anim-hero-mobile` classes plus inline `transition-delay` / `animation-delay` values to the correct elements across all sections.

### 3a — Mobile hero load animation

- [ ] **Step 1: Add `anim-hero-mobile` + `animation-delay` to hero text elements**

In the hero section, the four elements that animate on load on mobile:

```html
<!-- BEFORE -->
<p class="label">London · Est. 1990</p>
<h1 class="hero__heading" id="hero-heading">Premium Dry Cleaning<br>&amp; Expert Tailoring</h1>
```
```html
<!-- AFTER -->
<p class="label anim-hero-mobile" style="animation-delay: 0.2s">London · Est. 1990</p>
<h1 class="hero__heading anim-hero-mobile" id="hero-heading" style="animation-delay: 0.4s">Premium Dry Cleaning<br>&amp; Expert Tailoring</h1>
```

```html
<!-- BEFORE -->
<p class="hero__sub">35 years caring...</p>
<div class="hero__ctas">
```
```html
<!-- AFTER -->
<p class="hero__sub anim-hero-mobile" style="animation-delay: 0.6s">35 years caring...</p>
<div class="hero__ctas anim-hero-mobile" style="animation-delay: 0.8s">
```

- [ ] **Step 2: Verify mobile hero animation**

Open `index.html` in a browser. Resize to mobile width (≤900px) and reload. The label, heading, subtitle, and buttons should fade + slide up in sequence (0.2s, 0.4s, 0.6s, 0.8s). On desktop width, no animation should occur.

### 3b — About / Our Story section

- [ ] **Step 3: Add animation classes to About section**

```html
<!-- BEFORE -->
<p class="label">Our Story</p>
<h2 id="about-heading">Clapham's most trusted name...</h2>
<p>For over three decades...</p>
<p>Our service is grounded...</p>
```
```html
<!-- AFTER -->
<p class="label anim-hidden">Our Story</p>
<h2 id="about-heading" class="anim-hidden" style="transition-delay: 80ms">Clapham's most trusted name...</h2>
<p class="anim-hidden" style="transition-delay: 160ms">For over three decades...</p>
<p class="anim-hidden" style="transition-delay: 160ms">Our service is grounded...</p>
```

```html
<!-- BEFORE -->
<div class="about__accent">
```
```html
<!-- AFTER -->
<div class="about__accent anim-hidden" style="transition-delay: 240ms">
```

### 3c — Meet Habib section

- [ ] **Step 4: Add animation classes to Habib section**

```html
<!-- BEFORE -->
<div class="habib__photo">
  <img src="assets/images/habib.jpg" alt="Habib, owner...">
</div>
```
```html
<!-- AFTER -->
<div class="habib__photo">
  <img src="assets/images/habib.jpg" alt="Habib, owner..." class="anim-hidden--fade">
</div>
```

```html
<!-- BEFORE -->
<p class="label">Meet the Owner</p>
<h2 id="habib-heading">Habib</h2>
<p>With 35 years of experience...</p>
<p>Over the years, he has built...</p>
<p>Habib brings genuine expertise...</p>
<p>Even if you are new...</p>
<div class="habib__credentials">
```
```html
<!-- AFTER -->
<p class="label anim-hidden" style="transition-delay: 80ms">Meet the Owner</p>
<h2 id="habib-heading" class="anim-hidden" style="transition-delay: 160ms">Habib</h2>
<p class="anim-hidden" style="transition-delay: 240ms">With 35 years of experience...</p>
<p class="anim-hidden" style="transition-delay: 240ms">Over the years, he has built...</p>
<p class="anim-hidden" style="transition-delay: 240ms">Habib brings genuine expertise...</p>
<p class="anim-hidden" style="transition-delay: 240ms">Even if you are new...</p>
<div class="habib__credentials anim-hidden" style="transition-delay: 320ms">
```

### 3d — Services section

- [ ] **Step 5: Add animation classes to Services section**

```html
<!-- BEFORE -->
<div class="section__header">
  <p class="label">What We Offer</p>
  <h2 id="services-heading">Our Services</h2>
</div>
```
```html
<!-- AFTER -->
<div class="section__header">
  <p class="label anim-hidden">What We Offer</p>
  <h2 id="services-heading" class="anim-hidden" style="transition-delay: 80ms">Our Services</h2>
</div>
```

Add stagger delays to each of the 6 `.service-card` divs (the opening tag only):

```html
<!-- cards in order — add class and delay to each -->
<div class="service-card anim-hidden">                                          <!-- 0ms, no delay needed -->
<div class="service-card anim-hidden" style="transition-delay: 80ms">
<div class="service-card anim-hidden" style="transition-delay: 160ms">
<div class="service-card anim-hidden" style="transition-delay: 240ms">
<div class="service-card anim-hidden" style="transition-delay: 320ms">
<div class="service-card anim-hidden" style="transition-delay: 400ms">
```

### 3e — Specialist Care section

- [ ] **Step 6: Add animation classes to Specialist section**

```html
<!-- BEFORE -->
<p class="label" style="color: var(--warm-gold);">Premium Care</p>
<h2 id="specialist-heading" style="color: var(--white);">We care for what matters most</h2>
<p style="color: rgba(255,255,255,0.75); margin-bottom: 28px;">Some garments...</p>
```
```html
<!-- AFTER -->
<p class="label anim-hidden" style="color: var(--warm-gold);">Premium Care</p>
<h2 id="specialist-heading" class="anim-hidden" style="color: var(--white); transition-delay: 80ms">We care for what matters most</h2>
<p class="anim-hidden" style="color: rgba(255,255,255,0.75); margin-bottom: 28px; transition-delay: 160ms">Some garments...</p>
```

Add stagger delays to all 8 `.tag` spans inside `.specialist__tags`:

```html
<span class="tag anim-hidden">Canada Goose</span>
<span class="tag anim-hidden" style="transition-delay: 60ms">Bridal &amp; Wedding</span>
<span class="tag anim-hidden" style="transition-delay: 120ms">Leather &amp; Suede</span>
<span class="tag anim-hidden" style="transition-delay: 180ms">Cashmere</span>
<span class="tag anim-hidden" style="transition-delay: 240ms">Silk</span>
<span class="tag anim-hidden" style="transition-delay: 300ms">Designer Labels</span>
<span class="tag anim-hidden" style="transition-delay: 360ms">Evening Wear</span>
<span class="tag anim-hidden" style="transition-delay: 420ms">Suits &amp; Tailoring</span>
```

```html
<!-- BEFORE -->
<div class="specialist__image">
  <img src="assets/images/specialist.jpg" alt="Specialist garment care...">
</div>
```
```html
<!-- AFTER -->
<div class="specialist__image">
  <img src="assets/images/specialist.jpg" alt="Specialist garment care..." class="anim-hidden--fade">
</div>
```

### 3f — Reviews section

- [ ] **Step 7: Add animation classes to Reviews section**

```html
<!-- BEFORE -->
<div class="section__header" style="text-align: center;">
  <p class="label" style="text-align: center;">What Our Clients Say</p>
  <h2 id="reviews-heading">Google Reviews</h2>
</div>
<div class="reviews__widget">
```
```html
<!-- AFTER -->
<div class="section__header" style="text-align: center;">
  <p class="label anim-hidden" style="text-align: center;">What Our Clients Say</p>
  <h2 id="reviews-heading" class="anim-hidden" style="transition-delay: 80ms">Google Reviews</h2>
</div>
<div class="reviews__widget anim-hidden--fade">
```

### 3g — Location section

- [ ] **Step 8: Add animation classes to Location section**

```html
<!-- BEFORE -->
<div class="section__header">
  <p class="label">Find Us</p>
  <h2 id="location-heading">Location &amp; Opening Hours</h2>
</div>
```
```html
<!-- AFTER -->
<div class="section__header">
  <p class="label anim-hidden">Find Us</p>
  <h2 id="location-heading" class="anim-hidden" style="transition-delay: 80ms">Location &amp; Opening Hours</h2>
</div>
```

```html
<!-- BEFORE -->
<div class="location__map">
  <iframe ...>
  </iframe>
</div>
<div class="location__info">
```
```html
<!-- AFTER -->
<div class="location__map anim-hidden--fade">
  <iframe ...>
  </iframe>
</div>
<div class="location__info anim-hidden" style="transition-delay: 160ms">
```

### 3h — Contact section

- [ ] **Step 9: Add animation classes to Contact section**

```html
<!-- BEFORE -->
<p class="label">Get In Touch</p>
<h2 id="contact-heading">Request a Quote</h2>
<p class="contact__intro">Send us a message...</p>
```
```html
<!-- AFTER -->
<p class="label anim-hidden">Get In Touch</p>
<h2 id="contact-heading" class="anim-hidden" style="transition-delay: 80ms">Request a Quote</h2>
<p class="contact__intro anim-hidden" style="transition-delay: 160ms">Send us a message...</p>
```

Add stagger delays to the 3 `.form-group` divs:

```html
<div class="form-group anim-hidden">                                      <!-- 0ms -->
<div class="form-group anim-hidden" style="transition-delay: 70ms">
<div class="form-group anim-hidden" style="transition-delay: 140ms">
```

Note: the submit button is inside the third `.form-group`'s sibling — leave it without an animation class.

```html
<!-- BEFORE -->
<div class="contact__whatsapp">
```
```html
<!-- AFTER -->
<div class="contact__whatsapp anim-hidden" style="transition-delay: 280ms">
```

- [ ] **Step 10: Full visual verification**

Open `index.html` in a browser. Scroll slowly through each section and verify:

- [ ] Mobile (≤900px): hero label, heading, subtitle, buttons stagger in on load
- [ ] Desktop: hero has no entrance animation
- [ ] About: label → heading → paragraphs → quote block fade-slide up on scroll
- [ ] Habib: photo fades in, then label → heading → body → credentials slide up
- [ ] Services: heading animates, then 6 cards stagger in left-to-right
- [ ] Specialist: label → heading → body → pills stagger, image fades
- [ ] Reviews: label + heading animate, widget fades in
- [ ] Location: label + heading animate, map fades, info block slides up
- [ ] Contact: label + heading + intro animate, form fields stagger, WhatsApp column slides up
- [ ] Hover: buttons lift 2px, service cards lift 4px with shadow
- [ ] Reduced motion: set `prefers-reduced-motion: reduce` in OS settings and reload — everything should be immediately visible with no animation

- [ ] **Step 11: Commit**

```bash
git add index.html
git commit -m "feat: add scroll entrance + load animation classes to all sections"
```
