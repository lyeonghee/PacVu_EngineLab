// ============================================================
// B001_spec.js - Bakery Box source-SVG geometry
// Base source: B001_160x110x80_cleaned_no_images.svg
// ============================================================

function B001_getSpec(input) {
  const W = Number(input && input.W) || 160;
  const D = Number(input && input.D) || 110;
  const H = Number(input && input.H) || 80;

  const base = {
    W: 160,
    D: 110,
    H: 80,
    unitToMm: 25.4 / 72,
    sourceBounds: {
      minX: 245,
      minY: 228,
      maxX: 1840,
      maxY: 1110
    }
  };

  const scaleX = ((W / base.W) * 2 + (D / base.D) * 2) / 4;
  const scaleY = ((H / base.H) * 0.58) + ((D / base.D) * 0.42);
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
