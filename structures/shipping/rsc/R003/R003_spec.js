// ============================================================
// R003_spec.js - A-Type RSC Shipping Box 3
// Source SVG base: R003_350x230x220(cutpath,bleedpath,foldingline).svg
// Base size: W 350 / D 230 / H 220
// ============================================================

function R003_getSpec(W, D, H) {
  var base = {
    W: 350,
    D: 230,
    H: 220,
    unitToMm: 25.4 / 72,
    originX: 847.29,
    originY: 173.971,
    sourceSideRR: 4135.441,
    sourceBot: 1449.815,
    sourceBounds: {
      minX: 745.897,
      minY: 165.468,
      maxX: 4143.920,
      maxY: 1458.066
    }
  };

  var baseSideRR = (base.sourceSideRR - base.originX) * base.unitToMm;
  var baseBot = (base.sourceBot - base.originY) * base.unitToMm;
  var targetSideRR = W + D + W + D;
  var targetBot = D + H;

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
    yFoldBot: D / 2 + H,
    yBot: targetBot,
    bounds: bounds
  };
}
