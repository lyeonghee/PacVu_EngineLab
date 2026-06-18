// ============================================================
// T002_renderer.js - Bottle Box renderer
// Visual style follows T001.
// Depends on T002_spec.js, T002_layout.js
// ============================================================

function T002_num(value) {
  return +(+value).toFixed(4);
}

function T002_matrix(t) {
  return 'matrix(' + [t.a, t.b, t.c, t.d, t.e, t.f].map(T002_num).join(' ') + ')';
}

function T002_restyleElement(el, className) {
  const out = el
    .replace(/\sfill="[^"]*"/g, '')
    .replace(/\sstroke="[^"]*"/g, '')
    .replace(/\sstroke-width="[^"]*"/g, '')
    .replace(/\sstroke-dasharray="[^"]*"/g, '')
    .replace(/\sstroke-miterlimit="[^"]*"/g, '')
    .replace(/\sstroke-linecap="[^"]*"/g, '')
    .replace(/\sstroke-linejoin="[^"]*"/g, '');
  return out.replace(/\/>$/, ' class="' + className + '"/>');
}

function T002_isHoleElement(el) {
  return el.includes('M1184.467,601.714') || el.includes('M1228.404,416.044');
}

function T002_enabled(value) {
  return value !== false;
}

function T002_holeFeatures(cfg) {
  return [
    {
      id: 'hole_1',
      name: 'Bottle Top Hole',
      enabled: T002_enabled(cfg && cfg.bottleTopHoleEnabled),
      diameter: Number(cfg && cfg.bottleTopHoleDia) || 56,
      panelKey: 'bottleTop',
      xMode: 'center',
      y: Number(cfg && cfg.bottleTopHoleY) || 42
    },
    {
      id: 'hole_2',
      name: 'Neck Hole',
      enabled: T002_enabled(cfg && (cfg.neckHoleEnabled ?? cfg.backSmallHoleEnabled)),
      diameter: Number(cfg && (cfg.neckHoleDia ?? cfg.backSmallHoleDia)) || 20,
      panelKey: 'back',
      xMode: 'center',
      y: Number(cfg && (cfg.neckHoleY ?? cfg.backSmallHoleY)) || 35
    }
  ];
}

function T002_holePanels() {
  return {
    bottleTop: { x1: 983.207, x2: 1329.034, y1: 306.910 },
    back: { x1: 977.538, x2: 1334.703, y1: 601.714 }
  };
}

function T002_resolveHoles(layout, cfg) {
  const t = layout.transform;
  const panels = T002_holePanels();

  return T002_holeFeatures(cfg).filter(hole => hole.enabled).map(hole => {
    const panel = panels[hole.panelKey];
    const sourceX = hole.xMode === 'center' ? (panel.x1 + panel.x2) / 2 : panel.x1;

    return {
      id: hole.id,
      name: hole.name,
      cx: sourceX * t.a,
      cy: panel.y1 * t.d + hole.y,
      r: hole.diameter / 2
    };
  });
}

function T002_holeFillCircles(layout, cfg) {
  return T002_resolveHoles(layout, cfg).map(hole =>
    '<circle id="' + hole.id + '_fill" class="hole-area" cx="' + T002_num(hole.cx) +
    '" cy="' + T002_num(hole.cy) + '" r="' + T002_num(hole.r) + '"/>'
  ).join('');
}

function T002_holeCircles(layout, cfg) {
  return T002_resolveHoles(layout, cfg).map(hole =>
    '<circle id="' + hole.id + '" class="cut-fill" cx="' + T002_num(hole.cx) +
    '" cy="' + T002_num(hole.cy) + '" r="' + T002_num(hole.r) + '"/>'
  ).join('');
}

function T002_styleBlock() {
  return '<style>' +
    '.cut-area{fill:#ffffff;stroke:none;}' +
    '.hole-area{fill:#d0d0d0;stroke:none;}' +
    '.glue-area{fill:#d4d4d4;opacity:0.72;stroke:none;}' +
    '.cut-fill{fill:none;stroke:#cc0000;stroke-width:0.6;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;}' +
    '.bleed{fill:none;stroke:#0055ff;stroke-width:0.6;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;}' +
    '.fold{fill:none;stroke:#1d6fe8;stroke-width:0.45;stroke-dasharray:2.5 2;vector-effect:non-scaling-stroke;}' +
    '.label{fill:#333;font-family:"Arial Rounded MT Bold","Pretendard","Noto Sans KR",Arial,sans-serif;pointer-events:none;}' +
    '.dim{fill:#111;font-family:"Arial Rounded MT Bold","Pretendard","Noto Sans KR",Arial,sans-serif;pointer-events:none;}' +
    '</style>';
}

function T002_arrowMarkerDef() {
  return '<marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">' +
    '<path d="M0,0 L10,5 L0,10 Z" fill="#111"/></marker>';
}

function T002_watermarkDef() {
  return '<pattern id="wm" patternUnits="userSpaceOnUse" width="140" height="100" patternTransform="rotate(-25)">' +
    '<text x="24" y="60" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#999" opacity="0.12">PacVu</text>' +
    '</pattern>';
}

function T002_cutFillPath() {
  return [
    'M390.767 601.714',
    'L390.767 372.107',
    'L393.035 372.107',
    'L394.848 337.506',
    'C395.913 317.177 412.706 301.241 433.063 301.241',
    'L705.636 301.241',
    'C725.993 301.241 742.786 317.177 743.851 337.506',
    'L745.664 372.107',
    'L747.932 372.107',
    'L747.932 596.044',
    'C747.932 599.117 750.381 601.631 753.453 601.711',
    'C756.525 601.792 759.102 599.409 759.263 596.340',
    'L766.402 459.981',
    'L920.033 459.981',
    'C926.442 459.981 932.064 464.295 933.723 470.486',
    'L960.530 570.532',
    'L971.869 581.871',
    'L971.869 601.714',
    'L983.207 601.714',
    'L983.207 321.084',
    'C983.207 313.260 989.557 306.910 997.381 306.910',
    'L1272.140 306.910',
    'L1329.034 363.805',
    'L1329.034 601.714',
    'L1340.372 601.714',
    'L1340.372 581.871',
    'L1351.711 570.532',
    'L1378.518 470.486',
    'C1380.177 464.295 1385.799 459.981 1392.208 459.981',
    'L1545.914 459.981',
    'L1552.971 594.627',
    'L1560.058 601.714',
    'L1560.058 1474.784',
    'L1449.507 1589.588',
    'L1405.284 1589.588',
    'C1397.551 1589.588 1390.504 1585.077 1387.266 1578.055',
    'L1339.874 1475.294',
    'C1339.090 1473.550 1337.483 1472.321 1335.595 1472.020',
    'C1333.707 1471.719 1331.798 1472.388 1330.511 1473.802',
    'L1318.668 1486.810',
    'L1329.034 1509.040',
    'L1324.080 1641.354',
    'C1323.680 1652.015 1314.920 1660.454 1304.251 1660.454',
    'C1295.617 1660.454 1287.336 1657.024 1281.231 1650.919',
    'L1219.900 1589.588',
    'L1155.837 1589.588',
    'L1155.837 1600.927',
    'L1096.309 1660.455',
    'L1016.895 1660.455',
    'C1006.640 1660.455 998.078 1652.644 997.136 1642.433',
    'L981.772 1475.811',
    'C981.619 1474.156 980.512 1472.737 978.943 1472.188',
    'C977.374 1471.639 975.623 1472.057 974.472 1473.256',
    'L862.735 1589.588',
    'L818.513 1589.588',
    'C810.780 1589.588 803.732 1585.077 800.494 1578.055',
    'L753.102 1475.294',
    'C752.318 1473.550 750.713 1472.321 748.824 1472.020',
    'C746.936 1471.719 745.027 1472.388 743.740 1473.802',
    'L731.897 1486.810',
    'L742.263 1509.040',
    'L737.309 1641.354',
    'C736.910 1652.015 728.149 1660.454 717.480 1660.454',
    'L715.165 1660.454',
    'C708.013 1660.454 701.154 1657.613 696.097 1652.556',
    'L633.129 1589.588',
    'L569.066 1589.588',
    'L569.066 1600.927',
    'L509.538 1660.455',
    'L430.095 1660.455',
    'C419.852 1660.455 411.296 1652.661 410.340 1642.463',
    'L395.018 1479.036',
    'L319.900 1403.918',
    'L319.900 620.702',
    'Z'
  ].join(' ');
}

function T002_glueFillPath() {
  return [
    'M390.767 601.714',
    'L319.900 620.702',
    'L319.900 1403.918',
    'L390.767 1474.784',
    'Z'
  ].join(' ');
}

function T002_renderSVG(cfg, appState) {
  const layout = T002_getLayout(cfg.W, cfg.D, cfg.H);
  const t = layout.transform;
  const matrix = T002_matrix(t);
  const pad = 80;
  const vbX = layout.bounds.minX - pad;
  const vbY = layout.bounds.minY - pad;
  const vbW = layout.bounds.width + pad * 2;
  const vbH = layout.bounds.height + pad * 2;

  let svg = '<svg id="mainSvg" xmlns="http://www.w3.org/2000/svg" viewBox="' +
    T002_num(vbX) + ' ' + T002_num(vbY) + ' ' + T002_num(vbW) + ' ' + T002_num(vbH) +
    '" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">\n';
  svg += '<defs>' + T002_arrowMarkerDef() + T002_watermarkDef() + T002_styleBlock() + '</defs>\n';
  svg += '<rect x="' + T002_num(vbX) + '" y="' + T002_num(vbY) + '" width="' + T002_num(vbW) + '" height="' + T002_num(vbH) + '" fill="#d0d0d0" stroke="none"/>\n';
  svg += '<g id="viewportGroup">\n';
  svg += '  <g id="layer-fill" transform="' + matrix + '"><path class="cut-area" d="' + T002_cutFillPath() + '"/></g>\n';
  if (!appState || appState.showPerforation) {
    svg += '  <g id="layer-hole-fill">' + T002_holeFillCircles(layout, cfg) + '</g>\n';
  }
  svg += '  <g id="layer-glue-fill" transform="' + matrix + '"><path class="glue-area" d="' + T002_glueFillPath() + '"/></g>\n';
  if (!appState || appState.showBleed) {
    svg += '  <g id="layer-bleed" transform="' + matrix + '">' + T002_restyleElement(layout.bleedElement, 'bleed') + '</g>\n';
  }
  if (!appState || appState.showCut) {
    svg += '  <g id="layer-cut" transform="' + matrix + '">' + layout.cutElements.filter(el => !T002_isHoleElement(el)).map(el => T002_restyleElement(el, 'cut-fill')).join('') + '</g>\n';
  }
  if (!appState || appState.showPerforation) {
    svg += '  <g id="layer-holes">' + T002_holeCircles(layout, cfg) + '</g>\n';
  }

  if (!appState || appState.showFolds) {
    svg += '  <g id="layer-fold" transform="' + matrix + '">' + layout.foldElements.map(el => T002_restyleElement(el, 'fold')).join('') + '</g>\n';
  }
  if (!appState || appState.showLabels) {
    svg += T002_buildLabelLayer(layout);
  }
  if (!appState || appState.showDims) {
    svg += T002_buildDimensionLayer(cfg, t);
  }

  svg += '  <rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#wm)" pointer-events="none"/>\n';
  svg += '</g></svg>';
  return svg;
}

function T002_buildLabelLayer(layout) {
  const t = layout.transform;
  let out = '  <g id="layer-labels">\n';
  layout.labels.forEach(label => {
    out += '    <text class="label" x="' + T002_num(label.x * t.a) + '" y="' + T002_num(label.y * t.d) +
      '" font-size="4.5" text-anchor="middle" dominant-baseline="middle">' + label.name + '</text>\n';
  });
  out += '  </g>\n';
  return out;
}

function T002_buildDimensionLayer(cfg, t) {
  function tx(x) { return x * t.a; }
  function ty(y) { return y * t.d; }
  function line(x1, y1, x2, y2, label) {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    return '<line x1="' + T002_num(x1) + '" y1="' + T002_num(y1) + '" x2="' + T002_num(x2) + '" y2="' + T002_num(y2) + '" stroke="#111" stroke-width="0.35" marker-start="url(#arrow)" marker-end="url(#arrow)"/>' +
      '<text class="dim" x="' + T002_num(midX) + '" y="' + T002_num(midY + 6) + '" font-size="5.5" font-weight="600" text-anchor="middle">' + label + '</text>';
  }
  function vline(x, y1, y2, label) {
    const mid = (y1 + y2) / 2;
    const textX = x + 5;
    return '<line x1="' + T002_num(x) + '" y1="' + T002_num(y1) + '" x2="' + T002_num(x) + '" y2="' + T002_num(y2) + '" stroke="#111" stroke-width="0.35" marker-start="url(#arrow)" marker-end="url(#arrow)"/>' +
      '<text class="dim" x="' + T002_num(textX) + '" y="' + T002_num(mid) + '" font-size="5.5" font-weight="600" transform="rotate(-90 ' + T002_num(textX) + ' ' + T002_num(mid) + ')" text-anchor="middle">' + label + '</text>';
  }
  return '  <g id="layer-dimensions">' +
    line(tx(390.767), ty(1246.273), tx(747.932), ty(1246.273), 'W ' + cfg.W + 'mm') +
    line(tx(747.932), ty(1246.273), tx(977.538), ty(1246.273), 'D ' + cfg.D + 'mm') +
    vline(tx(778.522), ty(601.714), ty(1474.784), 'H ' + cfg.H + 'mm') +
    '</g>\n';
}

function T002_buildExportSVG(cfg) {
  const layout = T002_getLayout(cfg.W, cfg.D, cfg.H);
  const matrix = T002_matrix(layout.transform);
  const pad = 5;
  const vbX = layout.bounds.minX - pad;
  const vbY = layout.bounds.minY - pad;
  const vbW = layout.bounds.width + pad * 2;
  const vbH = layout.bounds.height + pad * 2;
  let out = '<?xml version="1.0" encoding="UTF-8"?>\n';
  out += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + T002_num(vbX) + ' ' + T002_num(vbY) + ' ' + T002_num(vbW) + ' ' + T002_num(vbH) + '" width="' + T002_num(vbW) + 'mm" height="' + T002_num(vbH) + 'mm">\n';
  out += '<defs>' + T002_styleBlock() + '</defs>\n';
  out += '<g id="layer-bleed" transform="' + matrix + '">' + T002_restyleElement(layout.bleedElement, 'bleed') + '</g>\n';
  out += '<g id="layer-cut" transform="' + matrix + '">' + layout.cutElements.filter(el => !T002_isHoleElement(el)).map(el => T002_restyleElement(el, 'cut-fill')).join('') + '</g>\n';
  out += '<g id="layer-holes">' + T002_holeCircles(layout, cfg) + '</g>\n';
  out += '<g id="layer-fold" transform="' + matrix + '">' + layout.foldElements.map(el => T002_restyleElement(el, 'fold')).join('') + '</g>\n';
  out += '</svg>';
  return out;
}

function T002_buildDXF() {
  return '';
}
