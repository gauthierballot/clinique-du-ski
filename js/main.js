/**
 * main.js — La Clinique du Ski
 * ==============================
 * Ce fichier gère :
 *   1. Détection et changement de langue (IP → localStorage → navigateur)
 *   2. Application des traductions dans le DOM
 *   3. Accordéon de contact
 *   4. Animations au scroll (IntersectionObserver)
 *   5. Génération des particules de neige
 *   6. Menu hamburger mobile
 *
 * Dépendance : js/translations.js (doit être chargé avant ce fichier)
 */

/* ==============================================================
   1. GESTION DE LA LANGUE
   ============================================================== */

const STORAGE_KEY = 'cds_lang';          // clé localStorage
const DEFAULT_LANG = 'fr';               // langue de secours finale
let currentLang = DEFAULT_LANG;

/**
 * Résout un chemin pointé ("nav.home", "why.cards.0.title")
 * dans l'objet translations[lang] et retourne la valeur.
 */
function t(key) {
  const parts = key.split('.');
  let val = translations[currentLang];
  for (const p of parts) {
    if (val === undefined || val === null) return key; // fallback : la clé elle-même
    val = val[p];
  }
  return (val !== undefined && val !== null) ? val : key;
}

/**
 * Applique toutes les traductions dans le DOM.
 * Cherche les attributs data-i18n (texte) et data-i18n-html (innerHTML).
 */
function applyTranslations(lang) {
  currentLang = lang;

  // data-i18n  → textContent (sans HTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // data-i18n-html → innerHTML (autorise <strong>, <br>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // Mise à jour de l'attribut lang sur <html>
  document.documentElement.lang = lang;

  // Mise à jour du bouton actif dans le sélecteur de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

/**
 * Sauvegarde la langue dans localStorage et applique les traductions.
 */
function setLang(lang) {
  if (!translations[lang]) return; // langue inconnue, on ignore
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
}

/**
 * Détecte la langue à utiliser lors de la première visite.
 * Ordre de priorité :
 *   1. localStorage (choix mémorisé de l'utilisateur)
 *   2. API /api/lang (détection par IP sur Vercel)
 *   3. navigator.language
 *   4. Langue par défaut ('fr')
 */
async function detectAndSetLang() {
  // 1. Langue mémorisée ?
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) {
    applyTranslations(saved);
    return;
  }

  // 2. Détection par IP via la fonction Vercel
  try {
    const res = await fetch('/api/lang', { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const data = await res.json();
      if (data.lang && translations[data.lang]) {
        applyTranslations(data.lang);
        // On NE sauvegarde PAS dans localStorage ici :
        // l'utilisateur n'a pas encore fait de choix explicite.
        return;
      }
    }
  } catch {
    // API indisponible (test en local, réseau lent, etc.) → on continue
  }

  // 3. Langue du navigateur
  const browserLang = (navigator.language || '').split('-')[0].toLowerCase();
  if (translations[browserLang]) {
    applyTranslations(browserLang);
    return;
  }

  // 4. Défaut
  applyTranslations(DEFAULT_LANG);
}


/* ==============================================================
   2. ACCORDÉON CONTACT
   ============================================================== */

/**
 * Initialise tous les accordéons de la page.
 * Un accordéon = .accordion-toggle + .accordion-content
 */
function initAccordions() {
  document.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      const contentId = toggle.getAttribute('aria-controls');
      const content   = document.getElementById(contentId);

      // Bascule l'état
      toggle.setAttribute('aria-expanded', String(!expanded));
      content.classList.toggle('open', !expanded);
    });
  });
}


/* ==============================================================
   3. ANIMATIONS AU SCROLL
   ============================================================== */

/**
 * Observe les éléments [data-animate] et leur ajoute la classe
 * "visible" dès qu'ils entrent dans le viewport.
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // n'anime qu'une fois
        }
      });
    },
    { threshold: 0.12 } // déclenche quand 12 % de l'élément est visible
  );

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}


/* ==============================================================
   4. PARTICULES DE NEIGE
   ============================================================== */

/**
 * Génère N flocons dans .snow-container.
 * Les flocons sont des <div> positionnés aléatoirement,
 * animés en CSS (@keyframes snowfall dans style.css).
 */
function initSnow(containerSelector = '.snow-container', count = 18) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Respecte la préférence "réduire les animations"
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';

    const size     = Math.random() * 5 + 3;   // 3 à 8 px
    const left     = Math.random() * 100;      // 0 à 100%
    const delay    = Math.random() * 10;       // 0 à 10 s
    const duration = Math.random() * 8 + 7;   // 7 à 15 s
    const drift    = (Math.random() - 0.5) * 80; // dérive horizontale

    flake.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: ${Math.random() * 0.5 + 0.3};
      --drift: ${drift}px;
    `;

    container.appendChild(flake);
  }
}


/* ==============================================================
   5. MENU HAMBURGER MOBILE
   ============================================================== */

function initMobileMenu() {
  const toggle  = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Ferme le menu si on clique sur un lien
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ==============================================================
   6. SÉLECTEUR DE LANGUE — ÉVÉNEMENTS
   ============================================================== */

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
    });
  });
}


/* ==============================================================
   INITIALISATION
   ============================================================== */

document.addEventListener('DOMContentLoaded', async () => {
  // Initialiser tous les modules
  initLangSwitcher();
  initAccordions();
  initScrollAnimations();
  initSnow();
  initMobileMenu();

  // Détecter et appliquer la langue (async car appel API possible)
  await detectAndSetLang();

  // Initialiser les icônes Lucide après le chargement du DOM
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
