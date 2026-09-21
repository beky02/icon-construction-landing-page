import type { ReactNode } from 'react';
import { Corners } from './Corners';

interface FigureProps {
  /** What the photograph in this slot will show, once it is shot. */
  caption: string;
  className?: string;
  /** Hairline frame plus registration marks. Off for figures that already
   *  sit inside a framed panel, which would otherwise double the border. */
  framed?: boolean;
  /** The drawn stand-in: clip-path layers over the ruled ground. */
  children?: ReactNode;
}

/** A drawn placeholder standing in for photography still to be commissioned.
 *  Every one is duotoned, so dropping a real <img> in later inherits the
 *  accent wash the design system asks of content photographs. */
export function Figure({ caption, className, framed = true, children }: FigureProps) {
  const classes = ['figure', 'duotone', framed ? 'blueprint' : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {children}
      <span className="figure__caption">Photograph · {caption}</span>
      {framed && <Corners />}
    </div>
  );
}
