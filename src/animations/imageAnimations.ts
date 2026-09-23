import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function revealImageMask(container: HTMLElement, image?: HTMLElement) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const targetImage = image || container.querySelector('img');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });

  tl.fromTo(
    container,
    {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    },
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.1,
      ease: 'power3.inOut',
    }
  );

  if (targetImage) {
    tl.fromTo(
      targetImage,
      {
        scale: 1.2,
      },
      {
        scale: 1,
        duration: 1.3,
        ease: 'power3.out',
      },
      0
    );
  }

  return tl;
}
