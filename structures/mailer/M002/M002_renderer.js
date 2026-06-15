// ============================================================
// M002_renderer.js - G-style Mailer Box 2
// SVG geometry is M002-specific; visual style follows M001.
// Depends on: M002_spec.js, M002_layout.js
// ============================================================

function M002_num(v) {
  return (+v).toFixed(4);
}

function M002_matrix(t) {
  return 'matrix(' + [t.a, t.b, t.c, t.d, t.e, t.f].map(M002_num).join(' ') + ')';
}

function M002_restyleElement(el, className) {
  var out = el
    .replace(/\sfill="[^"]*"/g, '')
    .replace(/\sstroke="[^"]*"/g, '')
    .replace(/\sstroke-width="[^"]*"/g, '')
    .replace(/\sstroke-dasharray="[^"]*"/g, '')
    .replace(/\sstroke-miterlimit="[^"]*"/g, '')
    .replace(/\sstroke-linecap="[^"]*"/g, '')
    .replace(/\sstroke-linejoin="[^"]*"/g, '');
  return out.replace(/\/>$/, ' class="' + className + '"/>');
}

function M002_isHoleElement(el) {
  return /785\.248|856\.114|1468\.398|1397\.532|1351\.13|1280\.264/.test(el);
}

function M002_labelName(name) {
  var shortNames = {
    lidDustFlapLeft: 'dustFL',
    lidDustFlapRight: 'dustFR',
    lidSideFlapLeft: 'lidSFL',
    lidSideFlapRight: 'lidSFR',
    backInsertFlapLeft: 'backInsL',
    backInsertFlapRight: 'backInsR',
    bottomLockFlapLeft: 'lockFlapL',
    bottomLockFlapRight: 'lockFlapR',
    frontInsertFlapLeft: 'frontInsL',
    frontInsertFlapRight: 'frontInsR',
    sidePanelLeft: 'sidePL',
    sidePanelRight: 'sidePR'
  };
  return shortNames[name] || name;
}

function M002_visualScale(cfg) {
  var avg = (cfg.W / 400 + cfg.D / 308 + cfg.H / 80) / 3;
  return Math.max(0.9, Math.min(1.2, avg));
}

function M002_arrowMarkerDef(scale) {
  var size = 10 * (scale || 1);
  return '<marker id="arrow" markerWidth="' + M002_num(size) + '" markerHeight="' + M002_num(size) + '" refX="5" refY="5" orient="auto-start-reverse">' +
    '<path d="M0,0 L10,5 L0,10 Z" fill="#111"/></marker>';
}

function M002_styleBlock() {
  return '<style>' +
    '.thomson{fill:none;stroke:#cc0000;stroke-width:1.276;stroke-linejoin:round;stroke-linecap:round;}' +
    '.panel{fill:#ffffff;stroke:none;}' +
    '.fold{fill:none;stroke:#1d6fe8;stroke-width:0.992;stroke-dasharray:5.669 4.535;}' +
    '.slot{fill:none;stroke:#e53935;stroke-width:1.276;}' +
    '.hole{fill:none;stroke:#1f8f4f;stroke-width:1.276;}' +
    '.bleed{fill:none;stroke:#0055ff;stroke-width:1.276;stroke-linejoin:round;stroke-linecap:round;}' +
    'text{font-family:"Arial Rounded MT Bold","Pretendard","Noto Sans KR",Arial,sans-serif;pointer-events:none;}' +
    '</style>';
}

function M002_panelFillElements(layout) {
  var d = [
    'M566.981 99.634',
    'L1686.666 99.634',
    'L1686.666 105.303',
    'C1778.264 105.303 1859.564 165.076 1886.883 252.506',
    'C1891.461 267.159 1888.805 283.055 1879.712 295.423',
    'C1870.619 307.791 1856.238 315.067 1840.887 315.067',
    'L1686.665 315.067',
    'C1683.108 315.067 1680.103 317.702 1679.639 321.229',
    'C1679.175 324.755 1681.396 328.079 1684.831 328.999',
    'L1870.850 378.843',
    'C1885.089 382.658 1895.012 395.590 1895.012 410.330',
    'L1895.012 1115.552',
    'C1895.012 1130.293 1885.090 1143.225 1870.851 1147.040',
    'L1684.832 1196.884',
    'C1681.397 1197.805 1679.176 1201.128 1679.640 1204.654',
    'C1680.104 1208.180 1683.109 1210.815 1686.666 1210.815',
    'L2073.595 1210.815',
    'C2088.460 1210.815 2100.524 1222.879 2100.524 1237.744',
    'L2100.524 1412.075',
    'L1695.170 1417.744',
    'C1692.040 1417.744 1689.501 1420.284 1689.501 1423.413',
    'C1689.501 1426.543 1692.040 1429.083 1695.170 1429.083',
    'L1914.854 1429.083',
    'L1929.028 1434.752',
    'L2144.461 1434.752',
    'L2144.461 1562.311',
    'L2158.634 1566.109',
    'L2158.634 1714.419',
    'L2144.461 1718.217',
    'L2144.461 2013.019',
    'L2158.634 2016.817',
    'L2158.634 2165.128',
    'L2144.461 2168.926',
    'L2144.461 2296.484',
    'L1929.028 2296.484',
    'L1914.854 2302.154',
    'L1689.500 2302.154',
    'C1686.370 2302.154 1683.831 2304.694 1683.831 2307.823',
    'C1683.831 2310.953 1686.370 2313.492 1689.500 2313.492',
    'L2094.854 2319.161',
    'L2094.854 2496.327',
    'C2094.854 2511.192 2082.790 2523.256 2067.925 2523.256',
    'L1692.335 2523.256',
    'L1683.831 2526.090',
    'L569.815 2526.090',
    'L561.311 2523.256',
    'L185.721 2523.256',
    'C170.856 2523.256 158.792 2511.192 158.792 2496.327',
    'L158.792 2319.161',
    'L564.146 2313.492',
    'C567.275 2313.492 569.815 2310.952 569.815 2307.823',
    'C569.815 2304.694 567.275 2302.154 564.146 2302.154',
    'L338.792 2302.154',
    'L324.619 2296.484',
    'L109.185 2296.484',
    'L108.504 2296.484',
    'L108.504 2169.051',
    'L94.331 2165.257',
    'L94.331 2017.092',
    'L108.504 2013.298',
    'L108.504 1718.785',
    'L94.331 1714.991',
    'L94.331 1566.826',
    'L108.504 1563.032',
    'L108.504 1435.599',
    'L109.185 1434.752',
    'L324.619 1434.752',
    'L338.792 1429.083',
    'L558.477 1429.083',
    'C561.606 1429.083 564.146 1426.543 564.146 1423.414',
    'C564.146 1420.284 561.606 1417.744 558.477 1417.744',
    'L153.123 1412.075',
    'L153.123 1237.744',
    'C153.122 1222.879 165.186 1210.815 180.051 1210.815',
    'L566.981 1210.815',
    'C570.538 1210.815 573.543 1208.180 574.007 1204.654',
    'C574.471 1201.128 572.250 1197.805 568.815 1196.884',
    'L382.796 1147.040',
    'C368.557 1143.224 358.634 1130.293 358.634 1115.552',
    'L358.634 410.330',
    'C358.635 395.589 368.557 382.657 382.796 378.842',
    'L568.815 328.998',
    'C572.250 328.078 574.471 324.754 574.007 321.228',
    'C573.543 317.702 570.538 315.067 566.981 315.067',
    'L412.759 315.067',
    'C397.408 315.067 383.027 307.791 373.934 295.423',
    'C364.841 283.055 362.185 267.159 366.763 252.506',
    'C394.083 165.076 475.382 105.303 566.981 105.303',
    'Z'
  ].join(' ');
  return '<path d="' + d + '" class="panel"/>';
}

function M002_renderSVG(cfg, state) {
  var layout = M002_getLayout(cfg.W, cfg.D, cfg.H);
  var t = layout.transform;
  var matrix = M002_matrix(t);
  var visualScale = M002_visualScale(cfg);
  var pad = 80;
  var vbX = layout.bounds.minX - pad;
  var vbY = layout.bounds.minY - pad;
  var vbW = layout.bounds.width + pad * 2;
  var vbH = layout.bounds.height + pad * 2;

  var svg = '<svg id="mainSvg" xmlns="http://www.w3.org/2000/svg" viewBox="' +
    M002_num(vbX) + ' ' + M002_num(vbY) + ' ' + M002_num(vbW) + ' ' + M002_num(vbH) +
    '" width="' + M002_num(vbW) + 'mm" height="' + M002_num(vbH) + 'mm">\n';
  svg += '<defs>' + M002_arrowMarkerDef(visualScale) + M002_styleBlock() + '</defs>\n';
  svg += '<rect x="' + M002_num(vbX) + '" y="' + M002_num(vbY) + '" width="' + M002_num(vbW) + '" height="' + M002_num(vbH) + '" fill="#d0d0d0" stroke="none"/>\n';
  svg += '<g id="viewportGroup">\n';
  svg += '<g id="layer-panel-fill" transform="' + matrix + '">' + M002_panelFillElements(layout) + '</g>\n';
  svg += '<g id="layer-bleed" transform="' + matrix + '">' + M002_restyleElement(layout.bleedElement, 'bleed') + '</g>\n';
  svg += '<g id="layer-cut" transform="' + matrix + '">' + layout.cutElements.map(function(el) { return M002_restyleElement(el, 'thomson'); }).join('') + '</g>\n';

  if (state.showFolds) {
    svg += '<g id="layer-fold" transform="' + matrix + '">' + layout.foldElements.map(function(el) { return M002_restyleElement(el, 'fold'); }).join('') + '</g>\n';
  }
  if (state.showSlots) {
    svg += '<g id="layer-slot" transform="' + matrix + '">' + layout.greenElements.filter(function(el) { return !M002_isHoleElement(el); }).map(function(el) { return M002_restyleElement(el, 'slot'); }).join('') + '</g>\n';
  }
  if (state.showHoles) {
    svg += '<g id="layer-hole" transform="' + matrix + '">' + layout.greenElements.filter(M002_isHoleElement).map(function(el) { return M002_restyleElement(el, 'hole'); }).join('') + '</g>\n';
  }
  if (state.showLabels) {
    svg += '<g id="layer-labels">';
    var labelSize = Math.max(6.8, Math.min(8.2, 7.2 * visualScale));
    layout.labels.forEach(function(l) {
      svg += '<text x="' + M002_num(l.x * t.a + t.e) + '" y="' + M002_num(l.y * t.d + t.f) + '" fill="#333" font-size="' + M002_num(labelSize) + '" text-anchor="middle" dominant-baseline="middle">' + M002_labelName(l.name) + '</text>';
    });
    svg += '</g>\n';
  }
  if (state.showDims) {
    svg += M002_dimensionLayer(cfg, t, visualScale);
  }
  svg += '<defs><pattern id="wm" patternUnits="userSpaceOnUse" width="140" height="100" patternTransform="rotate(-25)"><text x="24" y="60" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#999" opacity="0.12">PacVu</text></pattern></defs>';
  svg += '<rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#wm)" pointer-events="none"/>\n';
  svg += '</g></svg>';
  return svg;
}

function M002_dimensionLayer(cfg, t, scale) {
  scale = scale || 1;
  var textSize = Math.max(5.5, Math.min(7.2, 6.0 * scale));
  var strokeW = 0.35;
  function tx(x) { return x * t.a + t.e; }
  function ty(y) { return y * t.d + t.f; }
  function line(x1, y1, x2, y2, label) {
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2;
    return '<line x1="' + M002_num(x1) + '" y1="' + M002_num(y1) + '" x2="' + M002_num(x2) + '" y2="' + M002_num(y2) + '" stroke="#111" stroke-width="' + M002_num(strokeW) + '" marker-start="url(#arrow)" marker-end="url(#arrow)"/>' +
      '<text x="' + M002_num(midX) + '" y="' + M002_num(midY - 2 * scale) + '" font-size="' + M002_num(textSize) + '" text-anchor="middle">' + label + '</text>';
  }
  function vline(x, y1, y2, label) {
    var mid = (y1 + y2) / 2;
    var textX = x - 5 * scale;
    return '<line x1="' + M002_num(x) + '" y1="' + M002_num(y1) + '" x2="' + M002_num(x) + '" y2="' + M002_num(y2) + '" stroke="#111" stroke-width="' + M002_num(strokeW) + '" marker-start="url(#arrow)" marker-end="url(#arrow)"/>' +
      '<text x="' + M002_num(textX) + '" y="' + M002_num(mid) + '" font-size="' + M002_num(textSize) + '" transform="rotate(-90 ' + M002_num(textX) + ' ' + M002_num(mid) + ')" text-anchor="middle">' + label + '</text>';
  }
  return '<g id="layer-dimensions">' +
    line(tx(558.182), ty(1979.497), tx(1692.040), ty(1979.497), cfg.W + 'mm(W)') +
    vline(tx(1296.338), ty(1207.623), ty(1423.770), cfg.H + 'mm(H)') +
    vline(tx(1404.789), ty(1434.395), ty(2299.319), cfg.D + 'mm(D)') +
    '</g>';
}

function M002_buildExportSVG(cfg) {
  var layout = M002_getLayout(cfg.W, cfg.D, cfg.H);
  var matrix = M002_matrix(layout.transform);
  var pad = 5;
  var vbX = layout.bounds.minX - pad;
  var vbY = layout.bounds.minY - pad;
  var vbW = layout.bounds.width + pad * 2;
  var vbH = layout.bounds.height + pad * 2;
  var out = '<?xml version="1.0" encoding="UTF-8"?>\n';
  out += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + M002_num(vbX) + ' ' + M002_num(vbY) + ' ' + M002_num(vbW) + ' ' + M002_num(vbH) + '" width="' + M002_num(vbW) + 'mm" height="' + M002_num(vbH) + 'mm">\n';
  out += '<defs>' + M002_styleBlock() + '</defs>\n';
  out += '<g id="layer-bleed" transform="' + matrix + '">' + M002_restyleElement(layout.bleedElement, 'bleed') + '</g>\n';
  out += '<g id="layer-cut" transform="' + matrix + '">' + layout.cutElements.map(function(el) { return M002_restyleElement(el, 'thomson'); }).join('') + '</g>\n';
  out += '<g id="layer-fold" transform="' + matrix + '">' + layout.foldElements.map(function(el) { return M002_restyleElement(el, 'fold'); }).join('') + '</g>\n';
  out += '<g id="layer-slot" transform="' + matrix + '">' + layout.greenElements.filter(function(el) { return !M002_isHoleElement(el); }).map(function(el) { return M002_restyleElement(el, 'slot'); }).join('') + '</g>\n';
  out += '<g id="layer-hole" transform="' + matrix + '">' + layout.greenElements.filter(M002_isHoleElement).map(function(el) { return M002_restyleElement(el, 'hole'); }).join('') + '</g>\n';
  out += '</svg>';
  return out;
}

function M002_buildDXF() {
  return '';
}
