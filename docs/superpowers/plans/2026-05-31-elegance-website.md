# Elegance Dry Cleaners Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page premium website for Elegance Dry Cleaners — warm ivory + navy palette, 10 sections, plain HTML/CSS/JS, deployed as a static site. Fully functional on both desktop and mobile.

**Architecture:** Single `index.html` with all sections as semantic landmarks, one `styles.css` using CSS custom properties for the full design system, and `main.js` for mobile nav, smooth scroll offset, and contact form submission. No build step, no dependencies. Every section is built mobile-first — desktop styles layer on top via `min-width` media queries where needed. All interactive elements meet the 44px minimum touch target size.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript ES6, Formspree (contact form → Gmail), Elfsight widget (Google Reviews), Google Maps iframe.

---

## File Structure

```
elegance-dry-cleaners/
├── index.html              # All sections as semantic HTML
├── styles.css              # Design system + all section styles
├── main.js                 # Mobile nav, form handler
└── assets/
    └── images/
        ├── hero.jpg        # Luxury fabric/tailoring stock photo
        ├── habib.jpg       # Owner photo (placeholder until provided)
        └── specialist.jpg  # Specialist care section stock photo
```

---

## Task 1: Scaffolding, design system & base CSS

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `main.js`
- Create: `assets/images/` (empty directory)

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p assets/images
touch index.html styles.css main.js
```

- [ ] **Step 2: Write `index.html` boilerplate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Elegance Dry Cleaners — Premium dry cleaning and expert tailoring in Clapham, London. 35 years of trusted garment care.">
  <meta property="og:title" content="Elegance Dry Cleaners, Clapham">
  <meta property="og:description" content="35 years of premium dry cleaning and expert tailoring in Clapham, London.">
  <meta property="og:type" content="website">
  <title>Elegance Dry Cleaners — Clapham, London</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p style="padding:40px;font-family:sans-serif;">Scaffolding OK — replace this with sections.</p>
  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Write the CSS design system in `styles.css`**

```css
/* =============================================
   DESIGN SYSTEM
   ============================================= */

:root {
  --ivory:       #f8f5f0;
  --white:       #ffffff;
  --navy:        #1c3a5e;
  --navy-dark:   #152d4a;
  --warm-brown:  #8b7355;
  --text-dark:   #1a1a1a;
  --text-muted:  #555555;
  --text-light:  #888888;
  --border:      #e8e2d9;
  --whatsapp:    #25D366;

  --font-serif:  'Cormorant Garamond', Georgia, serif;
  --font-sans:   'Inter', system-ui, -apple-system, sans-serif;

  --max-width:   1100px;
  --section-pad: 80px 24px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; }

body {
  font-family: var(--font-sans);
  background: var(--ivory);
  color: var(--text-dark);
  line-height: 1.65;
  font-size: 1rem;
}

/* =============================================
   TYPOGRAPHY UTILITIES
   ============================================= */

.label {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--warm-brown);
  margin-bottom: 12px;
}

h1, h2, h3 {
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-dark);
}

h1 { font-size: clamp(2rem, 5vw, 3rem); }
h2 { font-size: clamp(1.6rem, 4vw, 2.4rem); margin-bottom: 16px; }
h3 { font-size: clamp(1.2rem, 3vw, 1.6rem); margin-bottom: 10px; }

p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; }

/* =============================================
   BUTTONS
   ============================================= */

.btn {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 26px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.22s, border-color 0.22s, color 0.22s;
  white-space: nowrap;
}

.btn--primary {
  background: var(--navy);
  color: var(--white);
  border-color: var(--navy);
}
.btn--primary:hover { background: var(--navy-dark); border-color: var(--navy-dark); }

.btn--outline {
  background: transparent;
  color: var(--navy);
  border-color: var(--navy);
}
.btn--outline:hover { background: var(--navy); color: var(--white); }

.btn--whatsapp {
  background: var(--whatsapp);
  color: var(--white);
  border-color: var(--whatsapp);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 0.75rem;
  padding: 15px 24px;
}
.btn--whatsapp:hover { background: #1fba58; border-color: #1fba58; }

/* Touch targets — all tappable elements minimum 44px tall */
.btn          { min-height: 44px; }
.nav__links a { min-height: 44px; display: inline-flex; align-items: center; }
.footer__links a { min-height: 44px; display: inline-flex; align-items: center; }

/* =============================================
   LAYOUT UTILITY
   ============================================= */

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section { padding: var(--section-pad); }
.section--white { background: var(--white); }
.section--ivory { background: var(--ivory); }
.section--navy  { background: var(--navy); }

.section__header { margin-bottom: 48px; }
```

- [ ] **Step 4: Write `main.js` stub**

```js
'use strict';
// main.js — interactivity added per task
```

- [ ] **Step 5: Open `index.html` in browser and verify**

Open the file directly: `open index.html` (macOS) or drag to browser.
Expected: page loads, "Scaffolding OK" text visible, no console errors.

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css main.js assets/
git commit -m "feat: scaffolding, design system, CSS foundations"
```

---

## Task 2: Navigation — sticky header + mobile hamburger

**Files:**
- Modify: `index.html` (add `<header>`)
- Modify: `styles.css` (add nav styles)
- Modify: `main.js` (add hamburger toggle)

- [ ] **Step 1: Replace the placeholder `<p>` in `<body>` with the nav HTML**

```html
<header class="nav" id="nav">
  <div class="nav__inner inner">
    <a href="#" class="nav__logo">Elegance</a>
    <ul class="nav__links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="https://wa.me/44XXXXXXXXXX?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20garment." class="btn btn--primary btn--nav" target="_blank" rel="noopener">WhatsApp Us</a>
    <button class="nav__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav__mobile" id="mobileMenu" aria-hidden="true">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="https://wa.me/44XXXXXXXXXX?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20garment." class="btn btn--primary" target="_blank" rel="noopener">WhatsApp Us</a>
  </div>
</header>

<!-- sections go below this line -->
```

**Replace `44XXXXXXXXXX` with the actual WhatsApp Business number before going live.**

- [ ] **Step 2: Add nav CSS to `styles.css`**

```css
/* =============================================
   NAVIGATION
   ============================================= */

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--ivory);
  border-bottom: 1px solid var(--border);
}

.nav__inner {
  height: 68px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav__logo {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-dark);
  text-decoration: none;
  flex-shrink: 0;
}

.nav__links {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0 auto;
}

.nav__links a {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.nav__links a:hover { color: var(--navy); }

.btn--nav {
  font-size: 0.68rem;
  padding: 10px 18px;
  flex-shrink: 0;
}

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.nav__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-dark);
  transition: all 0.25s;
}

.nav__mobile {
  display: none;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background: var(--ivory);
  border-bottom: 1px solid var(--border);
}
.nav__mobile.open { display: flex; }
.nav__mobile ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.nav__mobile a {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dark);
  text-decoration: none;
}

@media (max-width: 768px) {
  .nav__links  { display: none; }
  .btn--nav    { display: none; }
  .nav__hamburger { display: flex; }
}
```

- [ ] **Step 3: Add hamburger toggle to `main.js`**

```js
'use strict';

// --- Mobile nav ---
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// Close on any nav link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});
```

- [ ] **Step 4: Verify in browser**

- Desktop: nav bar visible with logo left, links centre, button right
- Resize to < 768px: links and button disappear, hamburger appears
- Click hamburger: mobile menu slides open
- Click a link in mobile menu: menu closes

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css main.js
git commit -m "feat: sticky navigation with mobile hamburger"
```

---

## Task 3: Hero section

**Files:**
- Modify: `index.html` (add `<section class="hero">`)
- Modify: `styles.css` (add hero styles)

- [ ] **Step 1: Download hero stock image**

Go to https://unsplash.com and search "luxury fabric texture" or "tailor suit close up". Download a high-quality image (1200px+ wide). Save as `assets/images/hero.jpg`.

Suggested: search "pressed suit lapel fabric" — pick a close-up with warm tones.

- [ ] **Step 2: Add hero HTML after the `<header>`**

```html
<section class="hero section--ivory" id="hero">
  <div class="hero__inner inner">
    <div class="hero__content">
      <p class="label">Clapham · Est. 1990</p>
      <h1 class="hero__heading">Premium Dry Cleaning<br>&amp; Expert Tailoring</h1>
      <p class="hero__sub">35 years caring for Clapham's finest garments — from everyday essentials to irreplaceable pieces.</p>
      <div class="hero__ctas">
        <a href="https://wa.me/44XXXXXXXXXX?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20garment." class="btn btn--primary" target="_blank" rel="noopener">WhatsApp Us</a>
        <a href="#contact" class="btn btn--outline">Get a Quote</a>
      </div>
      <div class="hero__stats">
        <div class="stat">
          <span class="stat__num">35+</span>
          <span class="stat__label">Years Experience</span>
        </div>
        <div class="stat__div"></div>
        <div class="stat">
          <span class="stat__num">★ 4.9</span>
          <span class="stat__label">Google Rating</span>
        </div>
        <div class="stat__div"></div>
        <div class="stat">
          <span class="stat__num">100%</span>
          <span class="stat__label">Guaranteed</span>
        </div>
      </div>
    </div>
    <div class="hero__image">
      <img src="assets/images/hero.jpg" alt="Premium garment care at Elegance Dry Cleaners, Clapham" loading="eager">
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add hero CSS to `styles.css`**

```css
/* =============================================
   HERO
   ============================================= */

.hero { padding: 80px 0 80px; }

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero__heading {
  margin-bottom: 20px;
  color: var(--text-dark);
}

.hero__sub {
  max-width: 420px;
  margin-bottom: 32px;
  font-size: 1rem;
  line-height: 1.8;
}

.hero__ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.stat { text-align: center; }

.stat__num {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--navy);
  line-height: 1.1;
  margin-bottom: 4px;
}

.stat__label {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-light);
}

.stat__div {
  width: 1px;
  height: 36px;
  background: var(--border);
  flex-shrink: 0;
}

.hero__image {
  position: relative;
}

.hero__image img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; gap: 40px; }
  .hero__image { order: -1; }
  .hero__image img { height: 300px; }
}
```

- [ ] **Step 4: Verify in browser**

- Two-column layout on desktop: text left, image right
- Text hierarchy visible: label → H1 → subtext → CTAs → stats bar
- Below 900px: image stacks above text
- Both buttons visually distinct (filled vs outline)

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css assets/images/hero.jpg
git commit -m "feat: hero section with trust stats and dual CTAs"
```

---

## Task 4: About / Our Story section

**Files:**
- Modify: `index.html` (add about section)
- Modify: `styles.css` (add about styles)

- [ ] **Step 1: Add about HTML after the hero section**

```html
<section class="about section section--white" id="about">
  <div class="inner">
    <div class="about__inner">
      <div class="about__text">
        <p class="label">Our Story</p>
        <h2>Clapham's most trusted name in garment care</h2>
        <p>For over three decades we have served the Clapham community with the same commitment to excellence — treating every garment as if it were our own. Whether you're a long-standing regular or new to the area, you'll find the same personal service and uncompromising quality that has defined us since day one.</p>
        <p style="margin-top: 16px;">We are not the cheapest option in Clapham. We are the best. Our clients trust us with their Canada Goose jackets, their wedding dresses, and their most treasured pieces because they know we will never let them down.</p>
      </div>
      <div class="about__accent">
        <div class="about__quote">
          <span class="about__quote-mark">"</span>
          <p>Quality is not an act, it is a habit.</p>
          <span class="about__quote-attr">35 years and counting</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS to `styles.css`**

```css
/* =============================================
   ABOUT
   ============================================= */

.about__inner {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 64px;
  align-items: center;
}

.about__text h2 { margin-bottom: 20px; }
.about__text p  { max-width: 540px; }

.about__quote {
  background: var(--ivory);
  border-left: 3px solid var(--navy);
  padding: 32px;
  position: relative;
}

.about__quote-mark {
  font-family: var(--font-serif);
  font-size: 5rem;
  line-height: 0.6;
  color: var(--navy);
  opacity: 0.15;
  display: block;
  margin-bottom: 12px;
}

.about__quote p {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.5;
  margin-bottom: 16px;
}

.about__quote-attr {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--warm-brown);
}

@media (max-width: 768px) {
  .about__inner { grid-template-columns: 1fr; gap: 32px; }
}
```

- [ ] **Step 3: Verify in browser**

- Two-column: text left, quote accent right
- Navy border-left on quote block is visible
- On mobile: stacks to single column

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: about / our story section"
```

---

## Task 5: Meet Habib section

**Files:**
- Modify: `index.html` (add meet-habib section)
- Modify: `styles.css` (add meet-habib styles)

- [ ] **Step 1: Add a placeholder owner photo**

Save any placeholder image (e.g. a grey square) as `assets/images/habib.jpg`. The real photo is replaced later.

Quick placeholder via terminal:
```bash
curl -o assets/images/habib.jpg "https://via.placeholder.com/400x500/e8e2d9/8b7355?text=Photo+of+Habib"
```

- [ ] **Step 2: Add Meet Habib HTML after the about section**

```html
<section class="habib section section--ivory" id="habib">
  <div class="inner">
    <div class="habib__inner">
      <div class="habib__photo">
        <img src="assets/images/habib.jpg" alt="Habib, owner of Elegance Dry Cleaners, Clapham">
      </div>
      <div class="habib__text">
        <p class="label">Meet the Owner</p>
        <h2>Habib</h2>
        <p>With 35 years of experience in high-quality tailoring and dry cleaning, Habib has built Elegance Dry Cleaners into one of the most respected names in South London.</p>
        <p style="margin-top: 16px;">Known personally by hundreds of loyal clients across the Clapham community, Habib brings genuine expertise, meticulous attention to detail, and a personal touch to every garment that comes through the door. From a loose button to a beloved wedding gown, nothing is too small or too precious.</p>
        <p style="margin-top: 16px;">If you are new to the area, come in and introduce yourself. You will be treated like a regular from day one.</p>
        <div class="habib__credentials">
          <div class="credential">
            <span class="credential__num">35+</span>
            <span class="credential__text">Years in the industry</span>
          </div>
          <div class="credential">
            <span class="credential__num">Expert</span>
            <span class="credential__text">Tailor &amp; dry cleaning specialist</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add meet-habib CSS to `styles.css`**

```css
/* =============================================
   MEET HABIB
   ============================================= */

.habib__inner {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 64px;
  align-items: start;
}

.habib__photo img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: top center;
}

.habib__text h2 { margin-bottom: 20px; }

.habib__credentials {
  display: flex;
  gap: 32px;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.credential__num {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--navy);
  margin-bottom: 4px;
}

.credential__text {
  display: block;
  font-size: 0.75rem;
  color: var(--text-light);
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .habib__inner { grid-template-columns: 1fr; gap: 32px; }
  .habib__photo img { aspect-ratio: 3 / 2; object-position: center top; }
}
```

- [ ] **Step 4: Verify in browser**

- Photo on left, text on right (desktop)
- Credentials bar visible below bio text
- Mobile: stacks, photo fills full width

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css assets/images/habib.jpg
git commit -m "feat: meet Habib owner section"
```

---

## Task 6: Services section

**Files:**
- Modify: `index.html` (add services section)
- Modify: `styles.css` (add services styles)

- [ ] **Step 1: Add services HTML after the habib section**

```html
<section class="services section section--white" id="services">
  <div class="inner">
    <div class="section__header">
      <p class="label">What We Offer</p>
      <h2>Our Services</h2>
    </div>
    <div class="services__grid">
      <div class="service-card">
        <div class="service-card__icon">✦</div>
        <h3>Dry Cleaning</h3>
        <p>Professional cleaning for everyday suits, coats, dresses, and formal garments. Each piece is treated individually with the care it deserves.</p>
      </div>
      <div class="service-card">
        <div class="service-card__icon">✦</div>
        <h3>Tailoring &amp; Alterations</h3>
        <p>Expert alterations, repairs, and bespoke tailoring. From taking in a waist to relining a jacket — done properly, by hand.</p>
      </div>
      <div class="service-card">
        <div class="service-card__icon">✦</div>
        <h3>Wedding Dress Care</h3>
        <p>Specialist cleaning and preservation for bridal gowns. We understand what these garments mean and handle them with the utmost care.</p>
      </div>
      <div class="service-card">
        <div class="service-card__icon">✦</div>
        <h3>Designer &amp; Luxury Garments</h3>
        <p>Canada Goose, Burberry, cashmere, silk, and leather. We have the experience and the process to care for your most valuable pieces.</p>
      </div>
      <div class="service-card">
        <div class="service-card__icon">✦</div>
        <h3>Household Items</h3>
        <p>Duvets, curtains, blankets, and cushion covers. We clean what the machine at home cannot handle safely.</p>
      </div>
      <div class="service-card">
        <div class="service-card__icon">✦</div>
        <h3>Leather &amp; Suede</h3>
        <p>Specialist cleaning and conditioning for leather jackets, suede coats, and accessories. Restored to their best.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add services CSS to `styles.css`**

```css
/* =============================================
   SERVICES
   ============================================= */

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--border);
  border: 1px solid var(--border);
}

.service-card {
  background: var(--white);
  padding: 36px 28px;
  transition: background 0.2s;
}
.service-card:hover { background: var(--ivory); }

.service-card__icon {
  color: var(--navy);
  font-size: 1rem;
  margin-bottom: 16px;
  opacity: 0.5;
}

.service-card h3 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: var(--navy);
}

.service-card p { font-size: 0.88rem; }

@media (max-width: 900px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .services__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verify in browser**

- 3-column grid desktop, 2-column tablet, 1-column mobile
- Hover state changes card background to ivory
- Navy headings on each card

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: services section with 6-card grid"
```

---

## Task 7: Specialist Care section (navy block)

**Files:**
- Modify: `index.html` (add specialist section)
- Modify: `styles.css` (add specialist styles)

- [ ] **Step 1: Download specialist stock image**

Go to Unsplash, search "canada goose jacket" or "luxury coat fabric". Save as `assets/images/specialist.jpg` (1000px+ wide).

- [ ] **Step 2: Add specialist HTML after the services section**

```html
<section class="specialist section section--navy" id="specialist">
  <div class="inner">
    <div class="specialist__inner">
      <div class="specialist__text">
        <p class="label" style="color: #c9b97a;">Premium Care</p>
        <h2 style="color: #ffffff;">We care for what matters most</h2>
        <p style="color: rgba(255,255,255,0.75); margin-bottom: 28px;">Some garments cannot simply be put in a machine. Canada Goose jackets, bridal gowns, designer labels, fine cashmere and silk — these require specialist knowledge, professional products, and hands that know what they are doing. We have been trusted with these garments for 35 years.</p>
        <div class="specialist__tags">
          <span class="tag">Canada Goose</span>
          <span class="tag">Bridal &amp; Wedding</span>
          <span class="tag">Leather &amp; Suede</span>
          <span class="tag">Cashmere</span>
          <span class="tag">Silk</span>
          <span class="tag">Designer Labels</span>
          <span class="tag">Evening Wear</span>
          <span class="tag">Suits &amp; Tailoring</span>
        </div>
      </div>
      <div class="specialist__image">
        <img src="assets/images/specialist.jpg" alt="Specialist garment care for luxury and designer items">
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add specialist CSS to `styles.css`**

```css
/* =============================================
   SPECIALIST CARE
   ============================================= */

.specialist__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.specialist__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  border: 1px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.85);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  padding: 7px 14px;
  transition: border-color 0.2s, color 0.2s;
}
.tag:hover { border-color: rgba(255,255,255,0.8); color: #fff; }

.specialist__image img {
  width: 100%;
  height: 480px;
  object-fit: cover;
}

@media (max-width: 900px) {
  .specialist__inner { grid-template-columns: 1fr; gap: 32px; }
  .specialist__image { display: none; }
}
```

- [ ] **Step 4: Verify in browser**

- Full-width navy background
- White text, gold-tinted label
- Tag pills with white outline
- Image right side on desktop, hidden on mobile

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css assets/images/specialist.jpg
git commit -m "feat: specialist care section with navy background"
```

---

## Task 8: Google Reviews section (Elfsight)

**Files:**
- Modify: `index.html` (add reviews section + Elfsight script)
- Modify: `styles.css` (add reviews section styles)

- [ ] **Step 1: Set up Elfsight widget (do this once before building)**

1. Go to https://elfsight.com and create a free account
2. Search for "Google Reviews" widget
3. Connect your Google Business Profile
4. In widget settings → set minimum star rating to 4
5. Choose a clean layout (List or Slider)
6. Copy the embed code — it will look like:
   ```html
   <script src="https://static.elfsight.com/platform/platform.js" async></script>
   <div class="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"></div>
   ```
7. Save the widget ID (the `elfsight-app-XXXX` value)

- [ ] **Step 2: Add the Elfsight script to `<head>` in `index.html`**

```html
<!-- Add inside <head>, after the Google Fonts link -->
<script src="https://static.elfsight.com/platform/platform.js" async></script>
```

- [ ] **Step 3: Add reviews HTML after the specialist section**

Replace `YOUR-WIDGET-ID-HERE` with your actual Elfsight widget class from Step 1.

```html
<section class="reviews section section--ivory" id="reviews">
  <div class="inner">
    <div class="section__header" style="text-align: center;">
      <p class="label" style="text-align: center;">What Our Clients Say</p>
      <h2>Google Reviews</h2>
    </div>
    <div class="reviews__widget">
      <div class="elfsight-app-YOUR-WIDGET-ID-HERE"></div>
    </div>
    <div class="reviews__cta" style="text-align: center; margin-top: 32px;">
      <a href="YOUR-GOOGLE-BUSINESS-PROFILE-URL" class="btn btn--outline" target="_blank" rel="noopener">Read all reviews on Google</a>
    </div>
  </div>
</section>
```

**Replace `YOUR-GOOGLE-BUSINESS-PROFILE-URL` with your actual Google Maps business URL.**

- [ ] **Step 4: Add reviews CSS to `styles.css`**

```css
/* =============================================
   REVIEWS
   ============================================= */

.reviews__widget {
  min-height: 200px;
}

/* Elfsight widget override — ensure it fits our font style */
.reviews__widget .eapps-google-reviews-widget {
  font-family: var(--font-sans) !important;
}
```

- [ ] **Step 5: Verify in browser**

- Section heading and label visible
- Elfsight widget loads (requires internet connection — won't show on `file://`, use a local server)
- Run a quick local server to test: `python3 -m http.server 8080` then open `http://localhost:8080`
- Reviews appear as cards/carousel
- "Read all reviews on Google" button visible below widget

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css
git commit -m "feat: Google Reviews section with Elfsight widget"
```

---

## Task 9: Location & Hours section

**Files:**
- Modify: `index.html` (add location section)
- Modify: `styles.css` (add location styles)

- [ ] **Step 1: Get your Google Maps embed code**

1. Go to https://maps.google.com
2. Search for "Elegance Dry Cleaners Clapham"
3. Click Share → Embed a map
4. Copy the `<iframe>` code

It will look like:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

- [ ] **Step 2: Add location HTML after the reviews section**

Replace the iframe src with the one copied in Step 1. Replace address and hours with accurate details.

```html
<section class="location section section--white" id="location">
  <div class="inner">
    <div class="section__header">
      <p class="label">Find Us</p>
      <h2>Location &amp; Opening Hours</h2>
    </div>
    <div class="location__inner">
      <div class="location__map">
        <iframe
          src="PASTE-YOUR-GOOGLE-MAPS-EMBED-URL-HERE"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Elegance Dry Cleaners on Google Maps">
        </iframe>
      </div>
      <div class="location__info">
        <div class="location__address">
          <p class="label" style="margin-bottom: 8px;">Address</p>
          <p style="color: var(--text-dark); font-size: 1rem; line-height: 1.7;">
            Elegance Dry Cleaners<br>
            YOUR STREET ADDRESS<br>
            Clapham, London<br>
            YOUR POSTCODE
          </p>
        </div>
        <div class="location__hours">
          <p class="label" style="margin-bottom: 12px;">Opening Hours</p>
          <table class="hours-table">
            <tr><td>Monday – Friday</td><td>8:00am – 7:00pm</td></tr>
            <tr><td>Saturday</td>        <td>9:00am – 6:00pm</td></tr>
            <tr><td>Sunday</td>          <td>10:00am – 4:00pm</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 0.85rem;">
            <a href="tel:+44XXXXXXXXXX" style="color: var(--navy); text-decoration: none; letter-spacing: 0.05em;">+44 XXXX XXX XXX</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Replace all placeholder values (address, postcode, phone, map URL) with real details before going live.**

- [ ] **Step 3: Add location CSS to `styles.css`**

```css
/* =============================================
   LOCATION & HOURS
   ============================================= */

.location__inner {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;
}

.location__map iframe {
  width: 100%;
  display: block;
}

.location__address { margin-bottom: 36px; }

.hours-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.hours-table td {
  padding: 9px 0;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
}

.hours-table td:first-child {
  color: var(--text-dark);
  padding-right: 20px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .location__inner { grid-template-columns: 1fr; gap: 32px; }
}
```

- [ ] **Step 4: Verify in browser (local server)**

- Map iframe loads and shows the correct location
- Hours table renders cleanly
- Address block visible with your details

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: location and opening hours section with map embed"
```

---

## Task 10: Contact form + WhatsApp

**Files:**
- Modify: `index.html` (add contact section)
- Modify: `styles.css` (add contact styles)
- Modify: `main.js` (add form submission handler)

- [ ] **Step 1: Set up Formspree (do once before building)**

1. Go to https://formspree.io and create a free account (use your Gmail address)
2. Create a new form
3. Copy your form endpoint — it will look like: `https://formspree.io/f/abcdefgh`
4. Verify your Gmail address when Formspree sends a confirmation email

- [ ] **Step 2: Add contact HTML after the location section**

Replace `YOUR-FORMSPREE-ENDPOINT` with the URL from Step 1.

```html
<section class="contact section section--ivory" id="contact">
  <div class="inner">
    <div class="contact__inner">
      <div class="contact__text">
        <p class="label">Get In Touch</p>
        <h2>Request a Quote</h2>
        <p style="margin-bottom: 32px;">Send us a message and Habib will get back to you personally. For urgent enquiries, WhatsApp is fastest.</p>

        <form class="contact__form" id="contactForm" action="YOUR-FORMSPREE-ENDPOINT" method="POST">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="e.g. Sarah Thompson" required autocomplete="name">
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required autocomplete="email">
          </div>
          <div class="form-group">
            <label for="message">Tell us about your garment</label>
            <textarea id="message" name="message" rows="5" placeholder="e.g. Canada Goose jacket that needs cleaning, or a suit that needs alterations..." required></textarea>
          </div>
          <button type="submit" class="btn btn--primary" id="submitBtn" style="width: 100%; justify-content: center; display: block; text-align: center;">Send Message</button>
          <p class="form-status" id="formStatus" aria-live="polite"></p>
        </form>
      </div>

      <div class="contact__divider">
        <div class="divider-line"></div>
        <span>or</span>
        <div class="divider-line"></div>
      </div>

      <div class="contact__whatsapp">
        <p class="label">Prefer to chat?</p>
        <h3 style="margin-bottom: 12px; font-size: 1.3rem;">WhatsApp Us Directly</h3>
        <p style="margin-bottom: 24px; font-size: 0.88rem;">Message Habib on WhatsApp for a quick response. Ideal for photos of garments, urgent requests, or a friendly chat about what we can do for you.</p>
        <a href="https://wa.me/44XXXXXXXXXX?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20a%20garment." class="btn btn--whatsapp" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us Now
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add contact CSS to `styles.css`**

```css
/* =============================================
   CONTACT
   ============================================= */

.contact__inner {
  display: grid;
  grid-template-columns: 3fr auto 2fr;
  gap: 48px;
  align-items: start;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dark);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  font-family: var(--font-sans);
  font-size: 0.92rem;
  color: var(--text-dark);
  background: var(--white);
  border: 1px solid var(--border);
  padding: 12px 16px;
  transition: border-color 0.2s;
  outline: none;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--navy);
}

.form-status {
  margin-top: 12px;
  font-size: 0.85rem;
  min-height: 20px;
}
.form-status.success { color: #1a7a3e; }
.form-status.error   { color: #c0392b; }

.contact__divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 60px;
}

.divider-line {
  width: 1px;
  flex: 1;
  background: var(--border);
}

.contact__divider span {
  font-size: 0.75rem;
  color: var(--text-light);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .contact__divider {
    flex-direction: row;
    padding-top: 0;
  }
  .divider-line { height: 1px; width: auto; flex: 1; }
}
```

- [ ] **Step 4: Add form submission handler to `main.js`**

```js
// --- Contact form (Formspree) ---
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        formStatus.textContent = 'Message sent — we'll be in touch shortly.';
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      formStatus.textContent = 'Something went wrong. Please try WhatsApp or call us directly.';
      formStatus.className = 'form-status error';
    } finally {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}
```

- [ ] **Step 5: Verify in browser (local server)**

- Form renders with all three fields + submit button
- Submit with empty fields: browser validation fires
- Submit with valid fields: button shows "Sending…", then success message (test with real Formspree endpoint)
- WhatsApp button green, opens WhatsApp in new tab
- On mobile: divider becomes horizontal

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css main.js
git commit -m "feat: contact form with Formspree + WhatsApp button"
```

---

## Task 11: Footer

**Files:**
- Modify: `index.html` (add footer)
- Modify: `styles.css` (add footer styles)

- [ ] **Step 1: Add footer HTML after the contact section**

```html
<footer class="footer section--navy">
  <div class="footer__inner inner">
    <div class="footer__brand">
      <span class="footer__logo">Elegance</span>
      <span class="footer__tagline">Dry Cleaners · Clapham, London</span>
    </div>
    <nav class="footer__links" aria-label="Footer navigation">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>
    </nav>
    <p class="footer__copy">&copy; 2026 Elegance Dry Cleaners. All rights reserved.</p>
  </div>
</footer>
```

- [ ] **Step 2: Add footer CSS to `styles.css`**

```css
/* =============================================
   FOOTER
   ============================================= */

.footer {
  padding: 40px 0;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.footer__logo {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  margin-bottom: 4px;
}

.footer__tagline {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
}

.footer__links {
  display: flex;
  gap: 24px;
}

.footer__links a {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  transition: color 0.2s;
}
.footer__links a:hover { color: rgba(255,255,255,0.9); }

.footer__copy {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.3);
}
```

- [ ] **Step 3: Verify in browser**

- Navy background footer
- Elegance logotype in serif
- Footer nav links visible and hoverable
- Copyright text at bottom

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: footer with nav links and branding"
```

---

## Task 12: Mobile & responsive polish — floating WhatsApp button + full pass

**Files:**
- Modify: `index.html` (add floating WhatsApp button)
- Modify: `styles.css` (responsive tweaks + floating button)
- Modify: `main.js` (show/hide floating button on scroll)

- [ ] **Step 1: Add the floating WhatsApp button to `index.html`**

Add this just before the closing `</body>` tag (after the footer):

```html
<!-- Floating WhatsApp button — visible on mobile only -->
<a
  href="https://wa.me/44XXXXXXXXXX?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20garment."
  class="whatsapp-float"
  id="whatsappFloat"
  target="_blank"
  rel="noopener"
  aria-label="Chat with us on WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

- [ ] **Step 2: Add floating button CSS to `styles.css`**

```css
/* =============================================
   FLOATING WHATSAPP BUTTON (mobile only)
   ============================================= */

.whatsapp-float {
  display: none; /* hidden on desktop */
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 200;
  width: 56px;
  height: 56px;
  background: var(--whatsapp);
  color: #fff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37,211,102,0.45);
  transition: transform 0.2s, opacity 0.3s;
  opacity: 0;
  pointer-events: none;
}

.whatsapp-float.visible {
  opacity: 1;
  pointer-events: auto;
}

.whatsapp-float:hover { transform: scale(1.08); }

@media (max-width: 768px) {
  .whatsapp-float { display: flex; }
}
```

- [ ] **Step 3: Add scroll-triggered visibility to `main.js`**

```js
// --- Floating WhatsApp button (show after scrolling past hero) ---
const whatsappFloat = document.getElementById('whatsappFloat');

if (whatsappFloat) {
  const showAfter = document.getElementById('hero');

  const observer = new IntersectionObserver(
    ([entry]) => {
      whatsappFloat.classList.toggle('visible', !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  if (showAfter) observer.observe(showAfter);
}
```

The button appears once the user scrolls past the hero (where the WhatsApp CTA is already visible), so it never duplicates itself.

- [ ] **Step 4: Open browser DevTools → toggle device toolbar**

Test each breakpoint:
- 375px (iPhone SE)
- 390px (iPhone 14)
- 768px (iPad)
- 1024px (iPad landscape / small desktop)

- [ ] **Step 5: Add responsive polish to `styles.css`**

```css
/* =============================================
   RESPONSIVE POLISH
   ============================================= */

@media (max-width: 768px) {
  :root { --section-pad: 56px 20px; }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.6rem; }

  .hero { padding: 48px 0; }
  .hero__ctas { flex-direction: column; align-items: stretch; }
  .hero__ctas .btn { text-align: center; }

  .hero__stats {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .habib__credentials { gap: 20px; }

  .footer__links { flex-wrap: wrap; justify-content: center; gap: 16px; }

  /* Ensure all form inputs are comfortable to tap */
  .form-group input,
  .form-group textarea {
    font-size: 1rem; /* prevents iOS auto-zoom on focus */
    min-height: 44px;
  }

  .form-group textarea { min-height: 120px; }
}

/* Very small screens */
@media (max-width: 380px) {
  .nav__inner { gap: 12px; }
  .nav__logo  { font-size: 0.95rem; }
}
```

**Note: `font-size: 1rem` on inputs is critical** — iOS Safari auto-zooms the page when an input has `font-size < 16px`. Setting it to `1rem` (16px) prevents this.

- [ ] **Step 6: Check each section at 375px — confirm all pass**

- [ ] Nav: hamburger only, no text overflow
- [ ] Mobile menu: opens/closes cleanly, links have comfortable tap area
- [ ] Hero: single column, image above, CTAs full-width stacked
- [ ] About: single column, quote block full width
- [ ] Meet Habib: photo full width landscape crop, text below
- [ ] Services: single column cards, text readable
- [ ] Specialist: text only (image hidden on mobile), tags wrap naturally
- [ ] Reviews: Elfsight widget fits and scrolls correctly
- [ ] Location: map full width, hours table readable, no horizontal scroll
- [ ] Contact: form fields full width, no zoom on focus, WhatsApp button full width
- [ ] Footer: centred, links wrap to two rows
- [ ] Floating WhatsApp button: appears after scrolling past hero, tappable, stays above footer

- [ ] **Step 7: Test on a real device if possible**

Open the Netlify preview URL on your phone. Check:
- No horizontal scroll anywhere
- All text readable without pinch-zoom
- Buttons easy to tap with thumb
- Form submits correctly on mobile keyboard
- WhatsApp button opens WhatsApp app directly

- [ ] **Step 8: Commit**

```bash
git add index.html styles.css main.js
git commit -m "feat: floating WhatsApp button + full mobile responsive pass"
```

---

## Task 13: Deploy to Netlify

**Files:** No code changes — deployment only.

- [ ] **Step 1: Create a `_redirects` file (required for clean URLs on Netlify)**

```bash
echo "/* /index.html 200" > _redirects
```

- [ ] **Step 2: Push the repo to GitHub**

```bash
git remote add origin https://github.com/YOUR-USERNAME/elegance-dry-cleaners.git
git push -u origin main
```

- [ ] **Step 3: Deploy on Netlify**

1. Go to https://netlify.com and sign in (free account)
2. Click "Add new site" → "Import an existing project" → connect GitHub
3. Select the `elegance-dry-cleaners` repo
4. Build command: *(leave blank — no build step)*
5. Publish directory: `.` (root)
6. Click "Deploy site"

- [ ] **Step 4: Set custom domain (optional)**

If pointing `elegancedrycleaners.co.uk` to Netlify:
1. In Netlify: Site settings → Domain management → Add custom domain
2. At your domain registrar: update nameservers to Netlify's (shown in dashboard)
3. Netlify automatically provisions SSL (HTTPS)

- [ ] **Step 5: Verify live site**

- Open the Netlify URL (or custom domain)
- Check all sections load
- Submit a test contact form — confirm email arrives in Gmail
- Click WhatsApp button — confirm it opens WhatsApp with pre-filled message
- Check on real mobile device

- [ ] **Step 6: Commit the _redirects file**

```bash
git add _redirects
git commit -m "feat: Netlify redirects for static site routing"
git push
```

---

## Before Going Live — Checklist

Replace every placeholder in `index.html` before the site goes live:

- [ ] `44XXXXXXXXXX` → WhatsApp Business phone number (digits only, no spaces or +)
- [ ] `YOUR-FORMSPREE-ENDPOINT` → Formspree form URL (e.g. `https://formspree.io/f/abcdefgh`)
- [ ] `YOUR-WIDGET-ID-HERE` → Elfsight widget class name
- [ ] `YOUR-GOOGLE-BUSINESS-PROFILE-URL` → Google Maps business URL
- [ ] `PASTE-YOUR-GOOGLE-MAPS-EMBED-URL-HERE` → Google Maps iframe src
- [ ] `YOUR STREET ADDRESS` / `YOUR POSTCODE` → real address
- [ ] `+44XXXXXXXXXX` in location section → real phone number
- [ ] `assets/images/habib.jpg` → replace placeholder with real photo of Habib
- [ ] Verify `★ 4.9` in hero matches actual Google rating
- [ ] Confirm opening hours are accurate
