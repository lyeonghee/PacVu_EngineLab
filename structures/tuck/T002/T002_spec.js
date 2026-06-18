// ============================================================
// T002_spec.js - B-Type Bottle Box source-SVG geometry
// Base source: T002_126x81x308_(cutpath, bleedpath, foldingline).svg
// ============================================================

function T002_getSpec(input) {
  const W = Number(input && input.W) || 126;
  const D = Number(input && input.D) || 81;
  const H = Number(input && input.H) || 308;

  const base = {
    W: 126,
    D: 81,
    H: 308,
    unitToMm: 25.4 / 72,
    sourceBounds: {
      minX: 300,
      minY: 290,
      maxX: 1570,
      maxY: 1670
    }
  };

  const scaleX = ((W / base.W) * 2 + (D / base.D)) / 3;
  const scaleY = (H + D * 2) / (base.H + base.D * 2);
  const a = base.unitToMm * scaleX;
  const d = base.unitToMm * scaleY;
  const bounds = {
    minX: base.sourceBounds.minX * a,
    minY: base.sourceBounds.minY * d,
    maxX: base.sourceBounds.maxX * a,
    maxY: base.sourceBounds.maxY * d
  };
  bounds.width = bounds.maxX - bounds.minX;
  bounds.height = bounds.maxY - bounds.minY;

  return {
    W,
    D,
    H,
    base,
    transform: { a, b: 0, c: 0, d, e: 0, f: 0 },
    bounds
  };
}
