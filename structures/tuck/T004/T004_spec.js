// ============================================================
// T004_spec.js - B-Type Tuck Box source-SVG geometry
// Base source: T004_130x65x190_(cutpath,bleedpath,foldingline).svg
// ============================================================

function T004_getSpec(input) {
  const W = Number(input && input.W) || 130;
  const D = Number(input && input.D) || 65;
  const H = Number(input && input.H) || 190;

  const base = {
    W: 130,
    D: 65,
    H: 190,
    unitToMm: 25.4 / 72,
    sourceBounds: {
      minX: 250,
      minY: 210,
      maxX: 1430,
      maxY: 1155
    }
  };

  const scaleX = ((W / base.W) * 2 + (D / base.D) * 2) / 4;
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
