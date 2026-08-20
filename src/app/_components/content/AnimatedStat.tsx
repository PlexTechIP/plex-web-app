'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedStatProps {
  value: number;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = statRef.current;
    if (!element) return;

    let animationFrame = 0;
    let hasStarted = false;

    const animate = () => {
      const startTime = performance.now();
      const duration = 1200;

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplayValue(value);
          } else {
            animate();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <div ref={statRef}>{displayValue}</div>;
};

export default AnimatedStat;
