import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initFadeUpAnimation(target: HTMLElement | string, options: { stagger?: number; delay?: number; y?: number } = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const { stagger = 0.15, delay = 0, y = 40 } = options;

  return gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target as any,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

export function initParallaxImage(image: HTMLElement, distance: number = 40) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  return gsap.fromTo(
    image,
    { y: -distance },
    {
      y: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: image.parentElement || image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
}
