// ============================================================
// R002_renderer.js - A-Type RSC Shipping Box 2
// Depends on: R002_spec.js, R002_layout.js
// ============================================================

function R002_renderSVG(cfg, appState) {
  var layout = R002_getLayout(cfg.W, cfg.D, cfg.H);
  var t = layout.transform;
  var pad = 80;
  var vbX = layout.bounds.minX - pad;
  var vbY = layout.bounds.minY - pad;
  var vbW = layout.bounds.width + pad * 2;
  var vbH = layout.bounds.height + pad * 2;
  var N = function(v) { return (+v).toFixed(4); };
  var matrix = 'matrix(' + [t.a, t.b, t.c, t.d, t.e, t.f].map(N).join(' ') + ')';
  var panelFillPathD =
    'M788.549,712.068 L887.762,685.484 L887.762,203.594 L2092.486,203.594 ' +
    'L2092.486,678.397 c0,3.869,3.106,7.025,6.975,7.086,3.869,.06,7.073-2.997,7.193-6.865 ' +
    'L2120.832,203.594 L3013.746,203.594 L3027.923,678.618 ' +
    'c.121,3.868,3.324,6.925,7.193,6.865,3.869-.061,6.976-3.216,6.976-7.086 ' +
    'L3042.092,203.594 L4246.817,203.594 L4246.817,678.397 ' +
    'c0,3.869,3.106,7.025,6.976,7.086,3.869,.06,7.073-2.997,7.193-6.865 ' +
    'L4275.163,203.594 L5166.659,203.594 L5180.832,675.563 L5190.754,685.484 ' +
    'L5190.754,977.452 l-9.922,9.921-14.173,471.968h-891.496l-14.177-475.025' +
    'c-.12-3.867-3.324-6.924-7.193-6.864-3.869.06-6.976,3.216-6.976,7.086v474.803' +
    'h-1204.726v-474.803c0-3.87-3.106-7.025-6.976-7.086-3.869-.06-7.073,2.997-7.193,6.864' +
    'l-14.177,475.025h-892.914l-14.177-475.025c-.12-3.867-3.324-6.924-7.193-6.864' +
    '-3.869.06-6.975,3.216-6.975,7.086v474.803H887.762v-481.89l-99.213-26.584Z';
  var glueFillPathD = 'M887.762,685.484 L788.549,712.068 L788.549,950.868 L887.762,977.452 Z';

  var svg = '<svg id="mainSvg" xmlns="http://www.w3.org/2000/svg"' +
    ' viewBox="' + N(vbX) + ' ' + N(vbY) + ' ' + N(vbW) + ' ' + N(vbH) + '"' +
    ' width="100%" height="100%" preserveAspectRatio="xMidYMid meet">\n';

  svg += '  <defs>\n';
  svg += R002_dimensionArrowMarkerDef();
  svg += '    <pattern id="wm" patternUnits="userSpaceOnUse" width="140" height="100" patternTransform="rotate(-25)">\n';
  svg += '      <text x="24" y="60" font-size="22" font-family="Arial,sans-serif" font-weight="700" fill="#999" opacity="0.12">PacVu</text>\n';
  svg += '    </pattern>\n';
  svg += '    <style>\n';
  svg += '      .thomson { fill:none; stroke:#cc0000; stroke-width:0.9; stroke-opacity:1; stroke-linejoin:round; stroke-linecap:round; vector-effect:non-scaling-stroke; }\n';
  svg += '      .panel   { fill:#ffffff; stroke:none; }\n';
  svg += '      .glue    { fill:#d9d9d9; stroke:none; opacity:0.95; }\n';
  svg += '      .fold    { fill:none; stroke:#1d6fe8; stroke-width:0.55; stroke-opacity:1; stroke-dasharray:2 1.6; vector-effect:non-scaling-stroke; }\n';
  svg += '      .bleed   { fill:none; stroke:#0055ff; stroke-width:0.9; stroke-opacity:1; stroke-linejoin:round; stroke-linecap:round; vector-effect:non-scaling-stroke; }\n';
  svg += '      text     { font-family:"Arial Rounded MT Bold","Pretendard","Noto Sans KR",Arial,sans-serif; pointer-events:none; }\n';
  svg += '    </style>\n';
  svg += '  </defs>\n';

  svg += '  <rect x="' + N(vbX) + '" y="' + N(vbY) + '" width="' + N(vbW) + '" height="' + N(vbH) + '" fill="#d0d0d0" stroke="none"/>\n';
  svg += '  <g id="viewportGroup">\n';
  svg += '    <g id="layer-panel-fill" transform="' + matrix + '"><path class="panel" d="' + panelFillPathD + '"/></g>\n';
  svg += '    <g id="layer-glue" transform="' + matrix + '"><path class="glue" d="' + glueFillPathD + '"/></g>\n';
  svg += '    <g id="layer-bleed" transform="' + matrix + '"><path class="bleed" d="' + layout.bleedPathD + '"/></g>\n';
  svg += '    <g id="layer-bg" transform="' + matrix + '">\n';
  layout.cutPaths.forEach(function(d) {
    svg += '      <path class="thomson" d="' + d + '"/>\n';
  });
  svg += '    </g>\n';

  if (appState.showFolds) {
    svg += '    <g id="layer-fold">\n';
    layout.foldLines.forEach(function(f) {
      svg += '      <line class="fold" x1="' + N(f.x1) + '" y1="' + N(f.y1) + '" x2="' + N(f.x2) + '" y2="' + N(f.y2) + '"/>\n';
    });
    svg += '    </g>\n';
  }

  if (appState.showLabels) {
    svg += '    <g id="layer-labels">\n';
    layout.labels.forEach(function(l) {
      var fs = l.name.indexOf('Flap') >= 0 ? 6 : 8;
      svg += '      <text x="' + N(l.cx) + '" y="' + N(l.cy) + '" fill="#333" font-size="' + fs + '" text-anchor="middle" dominant-baseline="middle">' + l.name + '</text>\n';
    });
    svg += '    </g>\n';
  }

  svg += '    <rect x="-5000" y="-5000" width="10000" height="10000" fill="url(#wm)" pointer-events="none"/>\n';

  if (appState.showDims) {
    var b = layout.panelBoxes;
    var dimOffset = 12;
    function hDimR(x1, x2, y, label) {
      var mid = (x1+x2)/2, gap = Math.min(15, (x2-x1)/3);
      return '    <line x1="'+N(x1+2)+'" y1="'+N(y)+'" x2="'+N(mid-gap)+'" y2="'+N(y)+'" stroke="#111" stroke-width="0.35" marker-start="url(#arrow)"/>\n' +
             '    <line x1="'+N(x2-2)+'" y1="'+N(y)+'" x2="'+N(mid+gap)+'" y2="'+N(y)+'" stroke="#111" stroke-width="0.35" marker-start="url(#arrow)"/>\n' +
             '    <text x="'+N(mid)+'" y="'+N(y+3)+'" font-size="5.5" font-weight="600" fill="#111" text-anchor="middle">'+label+'</text>\n';
    }
    function vDimR(x, y1, y2, label) {
      var mid = (y1+y2)/2, gap = Math.min(15, (y2-y1)/3);
      return '    <line x1="'+N(x)+'" y1="'+N(y1+2)+'" x2="'+N(x)+'" y2="'+N(mid-gap)+'" stroke="#111" stroke-width="0.35" marker-start="url(#arrow)"/>\n' +
             '    <line x1="'+N(x)+'" y1="'+N(y2-2)+'" x2="'+N(x)+'" y2="'+N(mid+gap)+'" stroke="#111" stroke-width="0.35" marker-start="url(#arrow)"/>\n' +
             '    <text x="'+N(x+3)+'" y="'+N(mid)+'" font-size="5.5" font-weight="600" fill="#111" transform="rotate(-90 '+N(x+3)+' '+N(mid)+')" text-anchor="middle">'+label+'</text>\n';
    }
    svg += '    <g id="layer-dimensions">\n';
    svg += hDimR(b.front.x1, b.front.x2, b.front.y2 - dimOffset, 'W ' + cfg.W + 'mm');
    svg += hDimR(b.sideL.x1, b.sideL.x2, b.sideL.y2 - dimOffset, 'D ' + cfg.D + 'mm');
    svg += hDimR(b.back.x1, b.back.x2, b.back.y2 - dimOffset, 'W ' + cfg.W + 'mm');
    svg += hDimR(b.sideR.x1, b.sideR.x2, b.sideR.y2 - dimOffset, 'D-2 ' + (cfg.D - 2) + 'mm');
    svg += vDimR(b.sideL.x1 + Math.min(36, b.sideL.width * 0.25), b.sideL.y1 + 2, b.sideL.y2 - 2, 'H ' + cfg.H + 'mm');
    svg += '    </g>\n';
  }

  svg += '  </g>\n</svg>';
  return svg;
}

function R002_buildExportSVG(cfg) {
  var layout = R002_getLayout(cfg.W, cfg.D, cfg.H);
  var t = layout.transform;
  var pad = 5;
  var vbX = layout.bounds.minX - pad;
  var vbY = layout.bounds.minY - pad;
  var vbW = layout.bounds.width + pad * 2;
  var vbH = layout.bounds.height + pad * 2;
  var N = function(v) { return (+v).toFixed(4); };
  var matrix = 'matrix(' + [t.a, t.b, t.c, t.d, t.e, t.f].map(N).join(' ') + ')';
  var panelFillPathD =
    'M788.549,712.068 L887.762,685.484 L887.762,203.594 L2092.486,203.594 ' +
    'L2092.486,678.397 c0,3.869,3.106,7.025,6.975,7.086,3.869,.06,7.073-2.997,7.193-6.865 ' +
    'L2120.832,203.594 L3013.746,203.594 L3027.923,678.618 ' +
    'c.121,3.868,3.324,6.925,7.193,6.865,3.869-.061,6.976-3.216,6.976-7.086 ' +
    'L3042.092,203.594 L4246.817,203.594 L4246.817,678.397 ' +
    'c0,3.869,3.106,7.025,6.976,7.086,3.869,.06,7.073-2.997,7.193-6.865 ' +
    'L4275.163,203.594 L5166.659,203.594 L5180.832,675.563 L5190.754,685.484 ' +
    'L5190.754,977.452 l-9.922,9.921-14.173,471.968h-891.496l-14.177-475.025' +
    'c-.12-3.867-3.324-6.924-7.193-6.864-3.869.06-6.976,3.216-6.976,7.086v474.803' +
    'h-1204.726v-474.803c0-3.87-3.106-7.025-6.976-7.086-3.869-.06-7.073,2.997-7.193,6.864' +
    'l-14.177,475.025h-892.914l-14.177-475.025c-.12-3.867-3.324-6.924-7.193-6.864' +
    '-3.869.06-6.975,3.216-6.975,7.086v474.803H887.762v-481.89l-99.213-26.584Z';
  var glueFillPathD = 'M887.762,685.484 L788.549,712.068 L788.549,950.868 L887.762,977.452 Z';
  var out = '<?xml version="1.0" encoding="UTF-8"?>\n';
  out += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + N(vbX) + ' ' + N(vbY) + ' ' + N(vbW) + ' ' + N(vbH) + '" width="' + N(vbW) + 'mm" height="' + N(vbH) + 'mm">\n';
  out += '  <g id="layer-panel-fill" transform="' + matrix + '"><path style="fill:#ffffff;stroke:none;" d="' + panelFillPathD + '"/></g>\n';
  out += '  <g id="layer-glue" transform="' + matrix + '"><path style="fill:#d9d9d9;stroke:none;opacity:0.95;" d="' + glueFillPathD + '"/></g>\n';
  out += '  <g id="layer-bleed" transform="' + matrix + '"><path style="fill:none;stroke:#0055ff;stroke-width:0.45;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;" d="' + layout.bleedPathD + '"/></g>\n';
  out += '  <g id="layer-cut" transform="' + matrix + '">\n';
  layout.cutPaths.forEach(function(d) {
    out += '    <path style="fill:none;stroke:#cc0000;stroke-width:0.45;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke;" d="' + d + '"/>\n';
  });
  out += '  </g>\n';
  out += '  <g id="layer-fold">\n';
  layout.foldLines.forEach(function(f) {
    out += '    <line style="fill:none;stroke:#1d6fe8;stroke-width:0.35;stroke-dasharray:2 1.6;" x1="' + N(f.x1) + '" y1="' + N(f.y1) + '" x2="' + N(f.x2) + '" y2="' + N(f.y2) + '"/>\n';
  });
  out += '  </g>\n</svg>';
  return out;
}

function R002_buildDXF() {
  return '';
}

function R002_dimensionArrowMarkerDef() {
  return '    <marker id="arrow" markerWidth="4" markerHeight="4" refX="5" refY="5" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">\n' +
         '      <path d="M0,0 L10,5 L0,10 Z" fill="#111"/>\n' +
         '    </marker>\n';
}
