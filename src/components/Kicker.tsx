import type { ReactNode } from 'react';

interface KickerProps {
  children: ReactNode;
  /** Switches the rule and label to brass for the dark-ground sections. */
  onDark?: boolean;
}

/** The numbered rule-and-label that opens each section ("03 · Featured projects"). */
export function Kicker({ children, onDark = false }: KickerProps) {
  return (
    <div className={onDark ? 'kicker kicker--onDark' : 'kicker'}>
      <span className="kicker__rule" aria-hidden="true" />
      <span className="kicker__text">{children}</span>
    </div>
  );
}
