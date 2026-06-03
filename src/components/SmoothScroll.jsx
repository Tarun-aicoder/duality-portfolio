import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize the smooth scrolling engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Classic smooth friction
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Keep native touch scrolling for mobile devices
      touchMultiplier: 2,
    });

    // Create the animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the loop
    requestAnimationFrame(raf);

    // Cleanup function when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}