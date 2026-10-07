import gsap from 'gsap';

export function animateHeroSequence(container: HTMLElement) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return gsap.timeline();

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const tag = container.querySelector('[data-hero-tag]');
  const headline = container.querySelector('[data-hero-headline]');
  const subtext = container.querySelector('[data-hero-subtext]');
  const cta = container.querySelector('[data-hero-cta]');
  const media = container.querySelector('[data-hero-media]');
  const overlay = container.querySelector('[data-hero-overlay]');
  const badge = container.querySelector('[data-hero-badge]');

  const elements = [tag, headline, subtext, cta, media, overlay, badge].filter(Boolean);
  if (elements.length > 0) {
    tl.set(elements, { visibility: 'visible' });
  }

  if (overlay) {
    tl.fromTo(overlay, { scale: 0.92, opacity: 0, rotation: 0 }, { scale: 1, opacity: 1, rotation: -5, duration: 1.1 }, 0);
  }

  if (media) {
    tl.fromTo(media, { opacity: 0, scale: 0.95, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.2 }, 0.2);
  }

  if (tag) {
    tl.fromTo(tag, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3);
  }

  if (headline) {
    tl.fromTo(headline, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, 0.4);
  }

  if (subtext) {
    tl.fromTo(subtext, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, 0.6);
  }

  if (cta) {
    tl.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8);
  }

  if (badge) {
    tl.fromTo(badge, { opacity: 0, scale: 0.8, rotation: 0 }, { opacity: 1, scale: 1, rotation: -10, duration: 0.8, ease: 'back.out(1.7)' }, 0.9);
  }

  return tl;
}
