import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const prefersReducedMotion =
  !isSSR && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Visitors who ask for reduced motion get a no-op, so sections never animate in for them.
const sr = isSSR ? null : prefersReducedMotion ? { reveal: () => {} } : ScrollReveal();

if (!isSSR && !prefersReducedMotion) {
  // ScrollReveal caches each element's position and only recalculates on resize. Fonts and images
  // that finish loading later shift the layout, which can leave sections stuck invisible, so
  // trigger a recalculation once they're done.
  const refresh = () => window.dispatchEvent(new Event('resize'));
  window.addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refresh);
  }
}

export default sr;
