// ============================================================
// M002_spec.js - G-style Mailer Box 2
// Source SVG base: M002_400x308x80_cutpath,bleedpath,folding line,slot,hole,mirror(left,right).svg
// Base size: W 400 / D 308 / H 80
// ============================================================

function M002_getSpec(W, D, H) {
  var base = {
    W: 400,
    D: 308,
    H: 80,
    unitToMm: 25.4 / 72,
    sourceBounds: {
      minX: 86.167,
      minY: 90.166,
      maxX: 2167.481,
      maxY: 2533.629
    }
  };

  var a = base.unitToMm * (W / base.W);
  var d = base.unitToMm * ((D + H) / (base.D + base.H));
  var bounds = {
    minX: base.sourceBounds.minX * a,
    minY: base.sourceBounds.minY * d,
    maxX: base.sourceBounds.maxX * a,
    maxY: base.sourceBounds.maxY * d
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
      e: 0,
      f: 0
    },
    bounds: bounds
  };
}
