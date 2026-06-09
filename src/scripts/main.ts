import { getLangFromUrl, useTranslations } from '../i18n/utils';

/* ------------------------------------------------------------------ */
/* Smooth scroll — rAF-based to bypass browser/CSS overflow quirks     */
/* ------------------------------------------------------------------ */
const HEADER_OFFSET = -64;
let scrollRaf: number | null = null;

function animateScroll(to: number, duration = 600) {
  if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);
  const start = window.scrollY;
  const distance = to - start;
  if (distance === 0) return;
  const startTime = performance.now();
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) scrollRaf = requestAnimationFrame(step);
    else scrollRaf = null;
  };
  scrollRaf = requestAnimationFrame(step);
}

window.smoothScrollTo = (target: string, event?: Event) => {
  event?.preventDefault();
  const el = document.querySelector(target);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
    animateScroll(top);
  }
  closeMobileMenu();
};

/* ------------------------------------------------------------------ */
/* Mobile hamburger menu                                               */
/* ------------------------------------------------------------------ */
const hamburger = document.querySelector<HTMLButtonElement>('[data-hamburger]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const menuBackdrop = document.querySelector<HTMLElement>('[data-menu-backdrop]');

// Move out of the animate-fade-down wrapper so position:fixed is relative to the viewport
if (mobileMenu) document.body.appendChild(mobileMenu);
if (menuBackdrop) document.body.appendChild(menuBackdrop);

function openMobileMenu() {
  if (!mobileMenu || !hamburger) return;
  mobileMenu.hidden = false;
  mobileMenu.classList.remove('hidden', 'animate-fade-out-down');
  mobileMenu.classList.add('animate-fade-in-up');
  if (menuBackdrop) {
    menuBackdrop.hidden = false;
    menuBackdrop.classList.remove('animate-fade-out');
    menuBackdrop.classList.add('animate-fade-in');
  }
  hamburger.setAttribute('aria-expanded', 'true');
}
function closeMobileMenu() {
  if (!mobileMenu || !hamburger) return;
  mobileMenu.classList.remove('animate-fade-in-up');
  mobileMenu.classList.add('animate-fade-out-down');
  if (menuBackdrop) {
    menuBackdrop.classList.remove('animate-fade-in');
    menuBackdrop.classList.add('animate-fade-out');
  }
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.addEventListener(
    'animationend',
    () => {
      mobileMenu.hidden = true;
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('animate-fade-out-down');
      if (menuBackdrop) {
        menuBackdrop.hidden = true;
        menuBackdrop.classList.remove('animate-fade-out');
      }
    },
    { once: true }
  );
}
hamburger?.addEventListener('click', () => {
  const open = hamburger.getAttribute('aria-expanded') === 'true';
  if (open) closeMobileMenu();
  else openMobileMenu();
});
menuBackdrop?.addEventListener('click', closeMobileMenu);

/* ------------------------------------------------------------------ */
/* Reveal timeline entries as they enter the viewport                  */
/* ------------------------------------------------------------------ */
const entries = document.querySelectorAll<HTMLElement>('.timeline-entry');
if (entries.length) {
  const io = new IntersectionObserver(
    (records) => {
      for (const record of records) {
        if (record.isIntersecting) {
          record.target.classList.add('in');
          record.target.classList.remove('out');
          io.unobserve(record.target);
        }
      }
    },
    { rootMargin: '0px 0px -15% 0px', threshold: 0.15 }
  );
  entries.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Project cards: play preview videos on view + fallback reveal class  */
/* ------------------------------------------------------------------ */
const projectCards = document.querySelectorAll<HTMLElement>('[data-project]');
if (projectCards.length) {
  const io = new IntersectionObserver(
    (records) => {
      for (const record of records) {
        const card = record.target as HTMLElement;
        const video = card.querySelector<HTMLVideoElement>('[data-play-on-view]');
        if (record.isIntersecting) {
          card.classList.add('intersecting');
          video?.play().catch(() => {});
        } else {
          card.classList.remove('intersecting');
          video?.pause();
        }
      }
    },
    { rootMargin: '-40% 0px -45% 0px', threshold: 0.2 }
  );
  projectCards.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Live "Location" clock + timezone difference (Europe/Madrid)         */
/* ------------------------------------------------------------------ */
function updateClock() {
  const now = new Date();
  const tz = 'Europe/Madrid';
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  const locale = t('meta.locale');

  const clock = document.querySelector<HTMLElement>('[data-clock]');
  if (clock) {
    clock.textContent = new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(now);
  }

  const tzEl = document.querySelector<HTMLElement>('[data-tz]');
  if (tzEl) {
    const parts = new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      timeZoneName: 'shortOffset'
    }).formatToParts(now);
    const name = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'GMT+1';
    tzEl.textContent = name.replace('GMT', 'GMT');
  }

  const dateEl = document.querySelector<HTMLElement>('[data-date]');
  if (dateEl) {
    dateEl.textContent = new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }).format(now);
  }

  const diffEl = document.querySelector<HTMLElement>('[data-time-diff]');
  if (diffEl) {
    const madrid = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const local = new Date(now.toLocaleString('en-US'));
    const diffMin = Math.round((madrid.getTime() - local.getTime()) / 60000);
    if (diffMin === 0) {
      diffEl.textContent = t('about.location.sameTime');
    } else {
      const abs = Math.abs(diffMin);
      const h = Math.floor(abs / 60);
      const m = abs % 60;
      const span = [h ? `${h}h` : '', m ? `${m}m` : ''].filter(Boolean).join(' ');
      diffEl.textContent = `${span} ${diffMin > 0 ? t('about.location.ahead') : t('about.location.behind')}`;
    }
  }
}
updateClock();
setInterval(updateClock, 30_000);

/* ------------------------------------------------------------------ */
/* Scroll-to-top button                                                */
/* ------------------------------------------------------------------ */
document.querySelector<HTMLButtonElement>('[data-scroll-top-btn]')?.addEventListener('click', () => animateScroll(0));
