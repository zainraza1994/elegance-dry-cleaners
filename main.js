'use strict';

// --- Mobile nav ---
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navOverlay = document.getElementById('navOverlay');

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open menu');
  mobileMenu.setAttribute('aria-hidden', 'true');
  navOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openMenu() {
  mobileMenu.classList.add('open');
  hamburger.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  mobileMenu.setAttribute('aria-hidden', 'false');
  navOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on any mobile nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on overlay click
  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

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
        formStatus.textContent = 'Message sent — we’ll be in touch shortly.';
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

// --- Floating WhatsApp button (show after scrolling past hero) ---
const whatsappFloat = document.getElementById('whatsappFloat');

if (whatsappFloat) {
  const heroSection = document.getElementById('hero');

  const observer = new IntersectionObserver(
    ([entry]) => {
      whatsappFloat.classList.toggle('visible', !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  if (heroSection) observer.observe(heroSection);
}

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
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      entranceObserver.observe(el);
    }
  });
}
