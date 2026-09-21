import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/** Fades and lifts its children in the first time they scroll into view.
 *
 *  The design drives this with CSS scroll-driven animation
 *  (`animation-timeline: view()`), which only Chromium ships — elsewhere the
 *  keyframes collapse to a zero-length animation and the effect is simply
 *  absent. An IntersectionObserver gives every browser the same reveal, and
 *  lets `prefers-reduced-motion` turn it off honestly (see app.css). */
export function Reveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;

    const el = ref.current;
    if (!el) return;

    // Anything already on screen at mount — the hero-adjacent sections —
    // should not wait for a scroll that may never come.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  const classes = ['reveal', shown ? 'is-visible' : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
