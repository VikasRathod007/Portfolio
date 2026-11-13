/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

import { useState, useEffect } from 'react';
const QUERY = '(prefers-reduced-motion: no-preference)';

function usePrefersReducedMotion() {
  // Start with the same value on the server and on the client's first render. The page is
  // pre-rendered with this component tree, so a different first value in the browser makes React
  // hydrate against mismatched HTML (which broke the nav's styles). The real preference is read
  // right after mount; ScrollReveal is disabled separately for reduced-motion users (utils/sr.js).
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    setPrefersReducedMotion(!mediaQueryList.matches);

    const listener = event => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addListener(listener);
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
