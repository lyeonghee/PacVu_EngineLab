// ============================================================
// T001_renderer.js - T001 SVG rendering, labels, dimensions, and exports
// Depends on T001_spec.js and T001_layout.js.
// ============================================================

function T001_styleBlock() {
  return '<style>' +
    '.cut-area{fill:#ffffff;stroke:none;}' +
    '.glue-area{fill:#d4d4d4;opacity:0.72;stroke:none;}' +
    '.cut-fill{fill:none;stroke:#cc0000;stroke-width:0.6;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;}' +
    '.bleed{fill:none;stroke:#0055ff;stroke-width:0.6;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;}' +
    '.fold{fill:none;stroke:#1d6fe8;stroke-width:0.45;stroke-dasharray:2.5 2;vector-effect:non-scaling-stroke;}' +
    '.label{fill:#333;font-family:"Arial Rounded MT Bold","Pretendard","Noto Sans KR",Arial,sans-serif;pointer-events:none;}' +
    '.dim{fill:#111;font-family:"Arial Rounded MT Bold","Pretendard","Noto Sans KR",Arial,sans-serif;pointer-events:none;}' +
    '</style>';
}

function T001_arrowMarkerDef(size) {
  const s = T001_num(size || 10);
  const mid = T001_num(s / 2);
  return '<marker id="arrow" markerWidth="' + s + '" markerHeight="' + s + '" refX="' + mid + '" refY="' + mid + '" orient="auto-start-reverse">' +
    '<path d="M0,0 L' + s + ',' + mid + ' L0,' + s + ' Z" fill="#111"/></marker>';
}

function T001_watermarkDef(style) {
  const wm = style || {};
  const fontSize = T001_num(wm.watermarkFontSize || 22);
  const opacity = T001_num(wm.watermarkOpacity || 0.12);
  return '<pattern id="wm" patternUnits="userSpaceOnUse" width="140" height="100" patternTransform="rotate(-25)">' +
    '<text x="24" y="60" font-size="' + fontSize + '" font-family="Arial,sans-serif" font-weight="700" fill="#999" opacity="' + opacity + '">PacVu</text>' +
    '</pattern>';
}

function T001_clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function T001_visualStyle(layout) {
  const refW = 256.6;
  const refH = 304.1;
  const b = layout && layout.bounds ? layout.bounds : { width: refW, height: refH };
  const widthScale = refW / Math.max(b.width, 1);
  const heightScale = refH / Math.max(b.height, 1);
  const fitScale = Math.min(widthScale, heightScale);
  const uiScale = T001_clamp(0.82 * Math.pow(fitScale, 0.35), 0.62, 0.82);
  return {
    labelFontSize: T001_num(4.5 * uiScale),
    dimensionFontSize: T001_num(5.5 * uiScale),
    dimensionLineStroke: T001_num(T001_clamp(0.35 * uiScale, 0.22, 0.29)),
    dimensionTextOffset: T001_num(6 * uiScale),
    dimensionVerticalTextOffset: T001_num(5 * uiScale),
    arrowMarkerSize: T001_num(T001_clamp(10 * uiScale, 5.6, 8.2)),
    watermarkFontSize: 22,
    watermarkOpacity: 0.12
  };
}

function T001_glueFillPath(grid) {
  return [
    'M ' + T001_num(grid.xGlueL) + ' ' + T001_num(grid.yBodyTop),
    'L ' + T001_num(grid.xFrontL) + ' ' + T001_num(grid.yBodyTop),
    'L ' + T001_num(grid.xFrontL) + ' ' + T001_num(grid.yBodyBottom),
    'L ' + T001_num(grid.xGlueL) + ' ' + T001_num(grid.yBodyBottom),
    'Z'
  ].join(' ');
}

function T001_buildLabelLayer(layout, style) {
  const visual = style || T001_visualStyle(layout);
  let out = '  <g id="layer-labels">\n';
  layout.labels.forEach(label => {
    out += '    <text class="label" x="' + T001_num(label.x) + '" y="' + T001_num(label.y) +
      '" font-size="' + visual.labelFontSize + '" text-anchor="middle" dominant-baseline="middle">' + label.name + '</text>\n';
  });
  out += '  </g>\n';
  return out;
}

function T001_buildDimensionLayer(cfg, grid, style) {
  const visual = style || T001_visualStyle({ bounds: { width: 256.6, height: 304.1 } });
  function line(x1, y1, x2, y2, label) {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    return '<line x1="' + T001_num(x1) + '" y1="' + T001_num(y1) + '" x2="' + T001_num(x2) + '" y2="' + T001_num(y2) + '" stroke="#111" stroke-width="' + visual.dimensionLineStroke + '" marker-start="url(#arrow)" marker-end="url(#arrow)"/>' +
      '<text class="dim" x="' + T001_num(midX) + '" y="' + T001_num(midY + visual.dimensionTextOffset) + '" font-size="' + visual.dimensionFontSize + '" font-weight="600" text-anchor="middle">' + label + '</text>';
  }
  function vline(x, y1, y2, label) {
    const mid = (y1 + y2) / 2;
    const textX = x + visual.dimensionVerticalTextOffset;
    return '<line x1="' + T001_num(x) + '" y1="' + T001_num(y1) + '" x2="' + T001_num(x) + '" y2="' + T001_num(y2) + '" stroke="#111" stroke-width="' + visual.dimensionLineStroke + '" marker-start="url(#arrow)" marker-end="url(#arrow)"/>' +
      '<text class="dim" x="' + T001_num(textX) + '" y="' + T001_num(mid) + '" font-size="' + visual.dimensionFontSize + '" font-weight="600" transform="rotate(-90 ' + T001_num(textX) + ' ' + T001_num(mid) + ')" text-anchor="middle">' + label + '</text>';
  }
  const dimY = grid.yBodyTop + cfg.H * 0.65;
  return '  <g id="layer-dimensions">' +
    line(grid.xFrontL, dimY, grid.xFrontR, dimY, 'W ' + cfg.W + 'mm') +
    line(grid.xFrontR, dimY, grid.xSideLR, dimY, 'D ' + cfg.D + 'mm') +
    vline(grid.xFrontR - Math.min(12, cfg.W * 0.15), grid.yBodyTop, grid.yBodyBottom, 'H ' + cfg.H + 'mm') +
    '</g>\n';
}

function T001_renderSVG(cfg, appState) {
  const layout = T001_getLayout(cfg.W, cfg.D, cfg.H);
  const visual = T001_visualStyle(layout);
  const pad = 80;
  const vbX = layout.bounds.minX - pad;
  const vbY = layout.bounds.minY - pad;
  const vbW = layout.bounds.width + pad * 2;
  const vbH = layout.bounds.height + pad * 2;

  let svg = '<svg id="mainSvg" xmlns="http://www.w3.org/2000/svg" viewBox="' +
    T001_num(vbX) + ' ' + T001_num(vbY) + ' ' + T001_num(vbW) + ' ' + T001_num(vbH) +
    '" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">\n';
  svg += '<defs>' + T001_arrowMarkerDef(visual.arrowMarkerSize) + T001_watermarkDef(visual) + T001_styleBlock() + '</defs>\n';
  svg += '<rect x="' + T001_num(vbX) + '" y="' + T001_num(vbY) + '" width="' + T001_num(vbW) + '" height="' + T001_num(vbH) + '" fill="#d0d0d0" stroke="none"/>\n';
  svg += '<g id="viewportGroup">\n';
  svg += '  <g id="layer-fill"><path class="cut-area" d="' + layout.fillPath + '"/></g>\n';
  svg += '  <g id="layer-glue-fill"><path class="glue-area" d="' + T001_glueFillPath(layout.grid) + '"/></g>\n';
  svg += '  <g id="layer-bleed">' + T001_restyleElement(layout.bleedElement, 'bleed') + '</g>\n';
  svg += '  <g id="layer-cut">' + layout.cutElements.map(el => T001_restyleElement(el, 'cut-fill')).join('') + '</g>\n';
  if (!appState || appState.showFolds) {
    svg += '  <g id="layer-fold">' + layout.foldElements.map(el => T001_restyleElement(el, 'fold')).join('') + '</g>\n';
  }
  if (!appState || appState.showLabels) {
    svg += T001_buildLabelLayer(layout, visual);
  }
  if (!appState || appState.showDims) {
    svg += T001_buildDimensionLayer(cfg, layout.grid, visual);
  }
  svg += '  <rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#wm)" pointer-events="none"/>\n';
  svg += '</g></svg>';
  return svg;
}

function T001_buildExportSVG(cfg) {
  const layout = T001_getLayout(cfg.W, cfg.D, cfg.H);
  const pad = 5;
  const vbX = layout.bounds.minX - pad;
  const vbY = layout.bounds.minY - pad;
  const vbW = layout.bounds.width + pad * 2;
  const vbH = layout.bounds.height + pad * 2;
  let out = '<?xml version="1.0" encoding="UTF-8"?>\n';
  out += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + T001_num(vbX) + ' ' + T001_num(vbY) + ' ' + T001_num(vbW) + ' ' + T001_num(vbH) + '" width="' + T001_num(vbW) + 'mm" height="' + T001_num(vbH) + 'mm">\n';
  out += '<defs>' + T001_styleBlock() + '</defs>\n';
  out += '<g id="layer-bleed">' + T001_restyleElement(layout.bleedElement, 'bleed') + '</g>\n';
  out += '<g id="layer-cut">' + layout.cutElements.map(el => T001_restyleElement(el, 'cut-fill')).join('') + '</g>\n';
  out += '<g id="layer-fold">' + layout.foldElements.map(el => T001_restyleElement(el, 'fold')).join('') + '</g>\n';
  out += '</svg>';
  return out;
}

function T001_buildDXF() {
  return '';
}
