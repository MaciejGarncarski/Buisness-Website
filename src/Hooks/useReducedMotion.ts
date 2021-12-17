import { useEffect, useState } from 'react';

const useReducedMotion = () => {
  const [usesReducedMotion, setUsesReducedMotion] = useState(false);
  useEffect(() => {
    const checkReducedMotion = () => {
      const QUERY = '(prefers-reduced-motion: no-preference)';
      const mediaQueryList = window.matchMedia(QUERY);
      if (!mediaQueryList.matches) {
        setUsesReducedMotion(true);
      } else {
        setUsesReducedMotion(false);
      }
    };
    checkReducedMotion();
  }, []);
  return usesReducedMotion;
};

export { useReducedMotion };
