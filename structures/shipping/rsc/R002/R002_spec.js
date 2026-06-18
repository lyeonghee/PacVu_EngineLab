// ============================================================
// R002_spec.js - A-Type RSC Shipping Box 2
// Source SVG base: R002_425_335_103_(cutpath, bleed path, folding line).svg
// Base size: W 425 / D 335 / H 103
// ============================================================

function R002_getSpec(W, D, H) {
  var base = {
    W: 425,
    D: 335,
    H: 103,
    unitToMm: 25.4 / 72,
    originX: 887.762,
    originY: 203.594,
    sourceSideRR: 5190.754,
    sourceBot: 1459.341,
    sourceBounds: {
      minX: 788.549,
      minY: 196.223,
      maxX: 5198.911,
      maxY: 1473.576
    }
  };

  var baseSideRR = (base.sourceSideRR - base.originX) * base.unitToMm;
  var baseBot = (base.sourceBot - base.originY) * base.unitToMm;
  var targetSideRR = W + D + W + (D - 2);
  var targetBot = D + H + 5;

  var xScale = targetSideRR / baseSideRR;
  var yScale = targetBot / baseBot;
  var a = base.unitToMm * xScale;
  var d = base.unitToMm * yScale;

  var bounds = {
    minX: (base.sourceBounds.minX - base.originX) * a,
    minY: (base.sourceBounds.minY - base.originY) * d,
    maxX: (base.sourceBounds.maxX - base.originX) * a,
    maxY: (base.sourceBounds.maxY - base.originY) * d
  };
  bounds.width = bounds.maxX - bounds.minX;
  bounds.height = bounds.maxY - bounds.minY;

  return {
    W: W,
    D: D,
    H: H,
    base: base,
    transform: {
      a: a,
      b: 0,
      c: 0,
      d: d,
      e: -base.originX * a,
      f: -base.originY * d
    },
    xFrontL: 0,
    xFrontR: W,
    xSideLR: W + D,
    xBackR: W + D + W,
    xSideRR: targetSideRR,
    yTop: 0,
    yFoldTop: D / 2,
    yFoldTopArc: D / 2 + 2.5 * yScale,
    yFoldBotArc: D / 2 + 2.5 * yScale + H,
    yFoldBot: D / 2 + 5 * yScale + H,
    yBot: targetBot,
    bounds: bounds
  };
}
