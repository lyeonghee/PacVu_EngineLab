// ============================================================
// T003_spec.js - B-Type Bottle Box / left source-SVG geometry
// Base source: T003_86.5x86.5x296_(cutpath,bleedpath,foldingline).svg
// ============================================================

function T003_getSpec(input) {
  const W = Number(input && input.W) || 86.5;
  const D = Number(input && input.D) || 86.5;
  const H = Number(input && input.H) || 296;

  const base = {
    W: 86.5,
    D: 86.5,
    H: 296,
    unitToMm: 25.4 / 72,
    sourceBounds: {
      minX: 250,
      minY: 30,
      maxX: 1310,
      maxY: 1400
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
    bounds,
    useNeckLine: W > base.W
  };
}
