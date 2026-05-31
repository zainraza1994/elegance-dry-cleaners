# Elegance Dry Cleaners — Website Design Spec
Date: 2026-05-31

## Business Context

**Business:** Elegance Dry Cleaners, Clapham, London
**Owner:** Habib
**Trading since:** 1990 (35+ years)
**Speciality:** Premium dry cleaning and expert tailoring
**Target clients:** Affluent Clapham residents — established regulars and new residents moving into the area
**Positioning:** Not the cheapest option — unmatched quality, trusted name, personal service
**Existing integrations to preserve:** WhatsApp Business deep link, Gmail contact form

## Goals

1. Look significantly more professional and premium than the current site
2. Attract new residents who search online for dry cleaners in Clapham
3. Show Google Reviews to build trust with first-time visitors
4. Communicate Habib's expertise and personal approach
5. Make it easy to contact via WhatsApp or a quote request form

## Design Direction

**Palette:**
- Background: `#f8f5f0` (warm ivory)
- Surface: `#ffffff` (white for alternate sections)
- Primary accent: `#1c3a5e` (navy)
- Warm accent: `#8b7355` (warm brown — section labels, dividers)
- Specialist section background: `#1c3a5e` (navy block)
- Footer background: `#1c3a5e`
- WhatsApp button: `#25D366`

**Typography:**
- Headings: Georgia (serif) — signals heritage, trust, quality
- Body / UI labels: System sans-serif (Inter/system stack) — clean and readable
- Section labels: small caps, wide letter-spacing, warm brown

**Feel:** Warm ivory + navy — refined, trustworthy, premium. Not cold or corporate. Feels like a well-established London specialist.

## Tech Stack

- Plain HTML / CSS / JavaScript — no framework, no build step
- File structure: `index.html`, `styles.css`, `main.js`
- Deployed as static files (Netlify or GitHub Pages)
- Mobile-first, fully responsive
- Smooth scroll navigation

## Page Structure (single page, top to bottom)

### 1. Navigation (sticky)
- Left: "Elegance" logotype in Georgia serif
- Centre: anchor links — About (links to Our Story section), Services, Reviews, Contact
- Right: "WhatsApp Us" CTA button (navy)
- Collapses to hamburger menu on mobile

### 2. Hero
- Warm ivory background
- Top label: "Clapham · Est. 1990" in small caps, navy
- H1: "Premium Dry Cleaning & Expert Tailoring"
- Subtext: 1–2 sentences on 35 years of care, community trust
- Two CTAs side by side: "WhatsApp Us" (navy filled) + "Get a Quote" (navy outline)
- Trust bar below CTAs: three stats — "35+ Years Experience" | "★ 4.9 Google Rating" (verify actual rating) | "100% Quality Guaranteed"
- Right side: high-quality stock image (luxury fabric texture or pressed garment close-up)

### 3. About / Our Story
- White background section
- Section label: "Our Story"
- H2: "Clapham's most trusted name in garment care"
- 2–3 sentences: heritage, community, consistency of quality, welcoming to newcomers

### 4. Meet Habib
- Warm ivory background
- Section label: "Meet the Owner"
- Two-column layout: photo left, text right
- Photo: placeholder slot (user will provide own photo later)
- H3: "Habib"
- Bio copy: 35 years of experience in high-quality tailoring and dry cleaning. Known personally by hundreds of loyal clients. Brings genuine expertise, attention to detail, and personal care to every garment.
- Tone should feel human and warm, not corporate — written in third person as a profile

### 5. Services
- White background
- Section label: "What We Offer"
- H2: "Our Services"
- 2×2 grid of service cards (ivory background, navy border accent):
  - Dry Cleaning — professional cleaning for everyday and formal garments
  - Tailoring & Alterations — expert alterations and bespoke tailoring
  - Wedding Dress Care — specialist cleaning and preservation
  - Designer Garments — Canada Goose, luxury labels, delicate fabrics

### 6. Specialist Care
- Navy background section (full-width colour block)
- Section label: "Premium Care" in gold/warm tone
- H2: "We care for what matters most" (white)
- Short paragraph in muted white: expertise with high-value garments, handled with total confidence
- Tag pills (white outline): Canada Goose · Bridal · Leather & Suede · Cashmere · Silk · Suits
- Optional: stock image of a luxury garment on right side

### 7. Google Reviews
- Warm ivory background
- Section label: "What Our Clients Say"
- H2: "Google Reviews"
- Elfsight Google Reviews widget embed
  - Configured to show only 4 and 5-star reviews
  - Carousel or grid layout
  - Each review links through to the Google Business profile
  - Star rating summary shown prominently

### 8. Location & Hours
- White background
- Section label: "Find Us"
- Two-column layout:
  - Left: Google Maps embed (Elegance Dry Cleaners, Clapham)
  - Right: Address block + opening hours (user to confirm exact hours and address)

### 9. Contact / Get a Quote
- Warm ivory background
- Section label: "Get In Touch"
- H2: "Request a Quote"
- Email contact form fields: Name, Email, Message ("Tell us about your garment")
- Submit button: navy, "Send Message"
- Gmail integration via Formspree (or EmailJS) — sends to existing Gmail account
- Divider: "or"
- WhatsApp button (green): "WhatsApp Us Directly" — links to WhatsApp Business deep link

### 10. Footer
- Navy background
- Left: "© 2026 Elegance Dry Cleaners, Clapham"
- Right: Privacy Policy link
- Simple, minimal

## Features & Integrations

### WhatsApp Business
- Deep link format: `https://wa.me/44XXXXXXXXXX` (user to confirm number)
- Appears in: sticky nav, hero, contact section
- Opens WhatsApp chat directly with a pre-filled message option

### Contact Form (Gmail)
- Use Formspree (free tier: 50 submissions/month) or EmailJS
- Form submissions sent directly to existing Gmail address
- Fields: Name, Email, Message
- Success/error state handled in JS (no page reload)

### Google Reviews (Elfsight)
- Embed via Elfsight script tag
- Widget ID configured after user creates free Elfsight account
- Filter: 4–5 star reviews only
- Displays: reviewer name, star rating, review text, date
- Links to Google Business profile

### Google Maps
- Standard `<iframe>` embed from Google Maps
- No API key required for embed-only usage

## Content Still Needed from Client

1. Exact street address
2. Confirmed opening hours
3. WhatsApp Business phone number
4. Gmail address for form submissions
5. Google Business Profile URL (for reviews link)
6. Photo of Habib (for Meet the Owner section)
7. Elfsight account setup (free — takes 5 minutes)
8. Any preferred wording adjustments to service descriptions or bio copy

## Stock Photography Notes

Using stock photography initially. Suggested search terms:
- "luxury dry cleaning garment"
- "pressed suit close up fabric"
- "tailor measuring suit London"
- "cashmere fabric texture"
- "luxury clothing care"

Recommended sources: Unsplash (free), Pexels (free), Shutterstock (paid, higher quality)

## Out of Scope

- Booking / collection scheduling system
- Online payment
- Price list page
- Blog or news section
- Multi-language support
