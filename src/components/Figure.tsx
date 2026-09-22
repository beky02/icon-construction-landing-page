import type { ReactNode } from 'react';
import { Corners } from './Corners';

interface FigureProps {
  /** What the photograph in this slot shows, or will show once it is shot.
   *  Doubles as the alt text when `src` is set and no `alt` is given. */
  caption: string;
  /** The photograph. Leave it off and the drawn stand-in shows instead, so a
   *  slot with no picture yet still looks deliberate rather than broken. */
  src?: string;
  /** Override when the caption does not read well as alt text. */
  alt?: string;
  className?: string;
  /** Hairline frame plus registration marks. Off for figures that already
   *  sit inside a framed panel, which would otherwise double the border. */
  framed?: boolean;
  /** The drawn stand-in: clip-path layers over the ruled ground. Ignored
   *  once `src` is set. */
  children?: ReactNode;
}

/** A photograph, or a drawn stand-in for one not yet commissioned.
 *
 *  Either way it is duotoned, as the design system asks of every content
 *  photograph — so dropping a real picture in keeps the page coherent
 *  instead of putting one full-colour rectangle among the drawings. */
export function Figure({ caption, src, alt, className, framed = true, children }: FigureProps) {
  const classes = ['figure', 'duotone', framed ? 'blueprint' : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {src ? (
        <img className="figure__img" src={src} alt={alt ?? caption} loading="lazy" decoding="async" />
      ) : (
        <>
          {children}
          {/* The brief for the photographer, not a caption — it goes as soon
              as there is a real picture in the slot. */}
          <span className="figure__caption">Photograph · {caption}</span>
        </>
      )}
      {framed && <Corners />}
    </div>
  );
}
