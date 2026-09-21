/* The Ethiopia outline, and the viewBox its coordinates are drawn in.
   Site coordinates in site.ts are expressed in this same space, so the SVG
   pins and the HTML city labels over them can be placed from one source. */

export const MAP_VIEW_BOX = {
  minX: -40,
  minY: -40,
  width: 1080,
  height: 870,
} as const;

export const MAP_VIEW_BOX_ATTR =
  `${MAP_VIEW_BOX.minX} ${MAP_VIEW_BOX.minY} ${MAP_VIEW_BOX.width} ${MAP_VIEW_BOX.height}`;

/** Percentage offsets for an element overlaid on the rendered SVG. */
export function projectToPercent(x: number, y: number) {
  return {
    left: `${((x - MAP_VIEW_BOX.minX) / MAP_VIEW_BOX.width * 100).toFixed(2)}%`,
    top: `${((y - MAP_VIEW_BOX.minY) / MAP_VIEW_BOX.height * 100).toFixed(2)}%`,
  };
}

export const ETHIOPIA_PATH =
  'M1000.0,478.8L809.5,682.4L721.7,685.4L661.7,733.1L618.5,734.4L600.1,755.6L554.0,755.6L526.8,732.8L465.2,761.0L445.3,789.2L400.4,783.9L385.3,776.1L369.6,777.9L348.5,777.2L263.0,719.8L216.2,719.8L193.2,697.6L193.2,659.6L158.0,648.3L118.2,574.5L87.4,558.7L75.7,531.6L41.5,498.5L0.0,493.6L23.1,454.8L58.7,453.2L68.9,432.3L67.9,371.0L87.8,299.3L119.9,280.1L126.7,252.0L155.5,199.5L196.3,165.3L223.5,97.1L234.4,37.4L312.8,52.0L333.9,0.0L374.7,31.6L414.2,15.2L430.5,29.8L476.8,30.7L535.5,58.6L552.8,82.6L582.9,104.9L610.5,145.4L633.6,167.7L609.8,198.2L587.0,230.5L592.3,249.5L593.3,270.4L630.9,271.6L647.2,266.7L662.2,279.0L647.4,303.3L672.4,341.0L697.2,374.0L722.9,398.3L943.5,479.2L1000.0,478.8Z';
