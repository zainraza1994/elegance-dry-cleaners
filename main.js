'use strict';

// --- Mobile nav ---
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open menu');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

function openMenu() {
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  mobileMenu.setAttribute('aria-hidden', 'false');
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

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', e => {
    const nav = document.getElementById('nav');
    if (nav && !nav.contains(e.target) && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}
