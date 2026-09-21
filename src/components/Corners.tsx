/** The four "+" registration marks every framed object in the design
 *  system wears. Must be a direct child of a `.blueprint` element — the
 *  stylesheet targets them with `.blueprint > .corner`. */
export function Corners() {
  return (
    <>
      <i className="corner tl" aria-hidden="true" />
      <i className="corner tr" aria-hidden="true" />
      <i className="corner bl" aria-hidden="true" />
      <i className="corner br" aria-hidden="true" />
    </>
  );
}
