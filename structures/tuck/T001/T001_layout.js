// ============================================================
// T001_template_work.js - T001 current working source-SVG template
// Base source: T001 57x57x177 source SVG
// Style follows T002: source elements + renderer restyling.
// ============================================================

const T001_SOURCE_ELEMENTS = {
  "cutElements": [
    "<polyline points=\"890.995 811.27 810.208 863.712 815.798 880.928\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M807.71,892.058c2.725,0,5.276-1.3,6.879-3.504,1.602-2.205,2.051-5.033,1.209-7.626\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<polyline points=\"807.71 892.058 742.176 892.058 742.176 819.774 733.672 811.27 681.232 892.058 681.232 923.239\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M669.893,934.578c6.259,0,11.339-5.08,11.339-11.339\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<line x1=\"669.893\" y1=\"934.578\" x2=\"635.877\" y2=\"934.578\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M624.538,923.239c0,6.259,5.08,11.339,11.339,11.339\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<polyline points=\"624.538 923.239 624.538 892.058 572.098 811.27 563.594 819.774 563.594 892.058 498.248 892.058\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M490.135,881.008c-.811,2.587-.346,5.395,1.259,7.579,1.604,2.186,4.144,3.471,6.854,3.471\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<polyline points=\"490.135 881.008 495.562 863.712 410.523 811.27 402.019 819.774 402.019 934.578 372.255 934.578\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M360.916,923.239c0,6.259,5.08,11.339,11.339,11.339\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<polyline points=\"360.916 923.239 360.916 892.058 298.554 892.058 298.554 923.239\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M287.216,934.578c6.259,0,11.338-5.08,11.338-11.339\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M890.995,811.27v-501.732l-7.087-7.086-3.788-72.284h-105.652c-6.409,0-12.031,4.314-13.69,10.505l-10.098,37.685-11.338,11.339v19.842h-60.945\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M627.373,309.538c1.527,12.936,12.486,22.678,25.512,22.678s23.984-9.742,25.512-22.678\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M627.373,309.538h-60.945v-19.842l-11.338-11.339-10.098-37.685c-1.659-6.19-7.281-10.505-13.69-10.505h-105.578l-3.87,73.997\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M410.523,303.869c0,3.072,2.449,5.587,5.521,5.667,3.071.08,5.648-2.303,5.809-5.371\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<path d=\"M287.216,934.578h-29.765v-114.804l-8.504-8.504-70.865-18.988v-463.755l70.865-18.989v-161.574l1.799-34.305c.907-17.317,15.212-30.893,32.554-30.893h92.871c17.341,0,31.646,13.575,32.554,30.893l1.798,34.305v155.905\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\"/>",
    "<line x1=\"296.234\" y1=\"928.909\" x2=\"300.415\" y2=\"955.799\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"677.166\" y1=\"931.086\" x2=\"693.693\" y2=\"952.707\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"814.385\" y1=\"889.985\" x2=\"831.822\" y2=\"910.878\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"363.236\" y1=\"930.842\" x2=\"359.055\" y2=\"957.733\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"626.317\" y1=\"929.43\" x2=\"612.246\" y2=\"952.723\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"491.144\" y1=\"888.003\" x2=\"475.697\" y2=\"910.408\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"541.876\" y1=\"234.463\" x2=\"555.65\" y2=\"228.51\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"10\" stroke-width=\".5\"/>",
    "<line x1=\"764.885\" y1=\"233.737\" x2=\"751.112\" y2=\"227.783\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"10\" stroke-width=\".5\"/>",
    "<line x1=\"243.462\" y1=\"309.538\" x2=\"121.212\" y2=\"309.538\" fill=\"none\" stroke=\"#ee3924\" stroke-miterlimit=\"2.613\" stroke-width=\".75\"/>"
  ],
  "foldElements": [
    "<line x1=\"890.145\" y1=\"811.27\" x2=\"734.523\" y2=\"811.27\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"732.822\" y1=\"811.27\" x2=\"572.949\" y2=\"811.27\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"571.247\" y1=\"811.27\" x2=\"411.373\" y2=\"811.27\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"409.672\" y1=\"811.27\" x2=\"249.798\" y2=\"811.27\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"733.672\" y1=\"310.389\" x2=\"733.672\" y2=\"810.42\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"410.523\" y1=\"310.389\" x2=\"410.523\" y2=\"810.42\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"572.098\" y1=\"310.389\" x2=\"572.098\" y2=\"810.42\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"248.948\" y1=\"310.389\" x2=\"248.948\" y2=\"810.42\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"890.145\" y1=\"309.538\" x2=\"740.192\" y2=\"309.538\" fill=\"none\" stroke=\"#3b53a4\" stroke-dasharray=\"3\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"565.578\" y1=\"309.538\" x2=\"417.042\" y2=\"309.538\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"409.672\" y1=\"306.704\" x2=\"249.798\" y2=\"306.704\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>",
    "<line x1=\"409.672\" y1=\"147.964\" x2=\"249.798\" y2=\"147.964\" fill=\"none\" stroke=\"#3b53a4\" stroke-dasharray=\"3\" stroke-miterlimit=\"2.613\" stroke-width=\".5\"/>",
    "<line x1=\"243.653\" y1=\"471.222\" x2=\"124.631\" y2=\"471.222\" fill=\"none\" stroke=\"#263aed\" stroke-dasharray=\"3 3\" stroke-miterlimit=\"10\" stroke-width=\".75\"/>"
  ],
  "bleedElement": "<path d=\"M482.148,878.464c-1.613,5.146-.671,10.813,2.518,15.154,3.191,4.348,8.316,6.943,13.71,6.943l2.22.002v-.002h-2.22,73.85l-.694-73.59,1.417-1.165,43.214,68.769v28.663c0,10.942,8.901,19.844,19.843,19.844h34.016c10.941,0,19.843-8.901,19.843-19.844v-28.663l42.957-68.683.979.996v73.673h74.038c5.423,0,10.566-2.619,13.759-7.01,3.19-4.389,4.093-10.091,2.417-15.25h0l-3.575-11.01,75.314-48.89,3.874-2.769v-509.618l-7.27-7.268-4.04-77.083h-113.722c-10.245,0-19.252,6.912-21.904,16.808l-9.508,35.484-12.218,12.218v14.86h-52.441l-8.115.103-.331,7.403c-1.021,8.649-8.359,15.172-17.067,15.172s-16.045-6.522-17.066-15.171l-.233-7.216-8.212-.292h-52.441v-14.86l-12.217-12.219-9.508-35.484c-2.652-9.896-11.659-16.808-21.904-16.808h-112.275v-73.699l-1.81-34.75c-1.146-21.842-19.175-38.952-41.046-38.952h-92.871c-21.873,0-39.902,17.11-41.046,38.952l-1.811,34.527.16,179.37.844,127.423-.691,240.863-.446,120.984,8.637,6.914v119.786h38.269c10.941,0,19.842-8.901,19.842-19.844h0v-22.677h45.354v22.677c0,10.942,8.901,19.844,19.843,19.844h38.268v-119.786l1.259-1.259,73.686,45.44-3.446,10.984\" fill=\"none\" stroke=\"#263aed\" stroke-miterlimit=\"10\"/>"
};

const T001_BLEED_OFFSET = 1.8;

function T001_num(value) {
  return +(+value).toFixed(4);
}

function T001_getSpec(input) {
  const W = Number(input && input.W) || 57;
  const D = Number(input && input.D) || 57;
  const H = Number(input && input.H) || 177;
  const glueWidth = Math.min(D * (25 / 57), 35);

  const source = {
    unitToMm: 25.4 / 72,
    xGlueL: 178.082,
    xFrontL: 248.948,
    xFrontR: 410.523,
    xSideLR: 572.098,
    xBackR: 733.672,
    xSideRR: 890.995,
    yTop: 82.766,
    yLidFold: 147.964,
    yBodyTop: 309.538,
    yBodyBottom: 811.27,
    yLockBottom: 934.578
  };

  const grid = {
    xGlueL: 0,
    xFrontL: glueWidth,
    xFrontR: glueWidth + W,
    xSideLR: glueWidth + W + D,
    xBackR: glueWidth + W + D + W,
    xSideRR: glueWidth + W + D + W + D,
    yTop: 0,
    yLidFold: D * (23 / 57),
    yBodyTop: D * (23 / 57) + D,
    yBodyBottom: D * (23 / 57) + D + H,
    yLockBottom: D * (23 / 57) + D + H + D * (43.5 / 57)
  };
  grid.glueWidth = glueWidth;

  return { W, D, H, glueWidth, source, grid };
}

function T001_hasThumbNotch(spec) {
  return spec.W < 100 && spec.D < 100;
}

function T001_piecewise(value, sourceAnchors, targetAnchors) {
  if (value <= sourceAnchors[0]) {
    const s = (targetAnchors[1] - targetAnchors[0]) / (sourceAnchors[1] - sourceAnchors[0]);
    return targetAnchors[0] + (value - sourceAnchors[0]) * s;
  }
  for (let i = 0; i < sourceAnchors.length - 1; i += 1) {
    if (value <= sourceAnchors[i + 1]) {
      const s = (targetAnchors[i + 1] - targetAnchors[i]) / (sourceAnchors[i + 1] - sourceAnchors[i]);
      return targetAnchors[i] + (value - sourceAnchors[i]) * s;
    }
  }
  const n = sourceAnchors.length - 1;
  const s = (targetAnchors[n] - targetAnchors[n - 1]) / (sourceAnchors[n] - sourceAnchors[n - 1]);
  return targetAnchors[n] + (value - sourceAnchors[n]) * s;
}

function T001_createMapper(spec) {
  const src = spec.source;
  const grid = spec.grid;
  const sx = [src.xGlueL, src.xFrontL, src.xFrontR, src.xSideLR, src.xBackR, src.xSideRR];
  const tx = [grid.xGlueL, grid.xFrontL, grid.xFrontR, grid.xSideLR, grid.xBackR, grid.xSideRR];
  const sy = [src.yTop, src.yLidFold, src.yBodyTop, src.yBodyBottom, src.yLockBottom];
  const ty = [grid.yTop, grid.yLidFold, grid.yBodyTop, grid.yBodyBottom, grid.yLockBottom];

  return {
    point(x, y) {
      return {
        x: T001_piecewise(x, sx, tx),
        y: T001_piecewise(y, sy, ty)
      };
    },
    x(x) {
      return T001_piecewise(x, sx, tx);
    },
    y(y) {
      return T001_piecewise(y, sy, ty);
    }
  };
}

function T001_tokenizePath(d) {
  return d.match(/[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g) || [];
}

function T001_isCommand(token) {
  return /^[a-zA-Z]$/.test(token);
}

function T001_pathPoint(mapper, point) {
  const p = mapper.point(point.x, point.y);
  return T001_num(p.x) + ' ' + T001_num(p.y);
}

function T001_transformPathD(d, mapper) {
  const tokens = T001_tokenizePath(d);
  const out = [];
  let i = 0;
  let cmd = '';
  let current = { x: 0, y: 0 };
  let start = { x: 0, y: 0 };
  let previousC2 = null;

  function read() {
    return Number(tokens[i++]);
  }

  function hasNumber() {
    return i < tokens.length && !T001_isCommand(tokens[i]);
  }

  while (i < tokens.length) {
    if (T001_isCommand(tokens[i])) {
      cmd = tokens[i++];
    }

    const lower = cmd.toLowerCase();
    const relative = cmd === lower;

    if (lower === 'z') {
      out.push('Z');
      current = { x: start.x, y: start.y };
      previousC2 = null;
      continue;
    }

    if (lower === 'm') {
      let first = true;
      while (hasNumber()) {
        const x = read();
        const y = read();
        const next = relative ? { x: current.x + x, y: current.y + y } : { x, y };
        out.push((first ? 'M ' : 'L ') + T001_pathPoint(mapper, next));
        current = next;
        if (first) {
          start = { x: current.x, y: current.y };
        }
        first = false;
        previousC2 = null;
      }
      cmd = relative ? 'l' : 'L';
      continue;
    }

    if (lower === 'l') {
      while (hasNumber()) {
        const x = read();
        const y = read();
        const next = relative ? { x: current.x + x, y: current.y + y } : { x, y };
        out.push('L ' + T001_pathPoint(mapper, next));
        current = next;
        previousC2 = null;
      }
      continue;
    }

    if (lower === 'h') {
      while (hasNumber()) {
        const x = read();
        const next = { x: relative ? current.x + x : x, y: current.y };
        out.push('L ' + T001_pathPoint(mapper, next));
        current = next;
        previousC2 = null;
      }
      continue;
    }

    if (lower === 'v') {
      while (hasNumber()) {
        const y = read();
        const next = { x: current.x, y: relative ? current.y + y : y };
        out.push('L ' + T001_pathPoint(mapper, next));
        current = next;
        previousC2 = null;
      }
      continue;
    }

    if (lower === 'c') {
      while (hasNumber()) {
        const c1 = { x: read(), y: read() };
        const c2 = { x: read(), y: read() };
        const end = { x: read(), y: read() };
        const a1 = relative ? { x: current.x + c1.x, y: current.y + c1.y } : c1;
        const a2 = relative ? { x: current.x + c2.x, y: current.y + c2.y } : c2;
        const ae = relative ? { x: current.x + end.x, y: current.y + end.y } : end;
        out.push('C ' + T001_pathPoint(mapper, a1) + ' ' + T001_pathPoint(mapper, a2) + ' ' + T001_pathPoint(mapper, ae));
        current = ae;
        previousC2 = a2;
      }
      continue;
    }

    if (lower === 's') {
      while (hasNumber()) {
        const c1 = previousC2 ? {
          x: current.x * 2 - previousC2.x,
          y: current.y * 2 - previousC2.y
        } : { x: current.x, y: current.y };
        const c2 = { x: read(), y: read() };
        const end = { x: read(), y: read() };
        const a2 = relative ? { x: current.x + c2.x, y: current.y + c2.y } : c2;
        const ae = relative ? { x: current.x + end.x, y: current.y + end.y } : end;
        out.push('C ' + T001_pathPoint(mapper, c1) + ' ' + T001_pathPoint(mapper, a2) + ' ' + T001_pathPoint(mapper, ae));
        current = ae;
        previousC2 = a2;
      }
      continue;
    }

    throw new Error('Unsupported SVG path command for T001 template: ' + cmd);
  }

  return out.join(' ');
}

function T001_attr(el, name) {
  const match = el.match(new RegExp('\\s' + name + '="([^"]*)"'));
  return match ? match[1] : '';
}

function T001_transformElement(el, mapper) {
  if (/^<path\b/.test(el)) {
    const d = T001_attr(el, 'd');
    return el.replace(/d="[^"]*"/, 'd="' + T001_transformPathD(d, mapper) + '"');
  }

  if (/^<polyline\b/.test(el)) {
    const nums = T001_attr(el, 'points').match(/-?\d+(?:\.\d+)?/g) || [];
    const mapped = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
      const p = mapper.point(Number(nums[i]), Number(nums[i + 1]));
      mapped.push(T001_num(p.x) + ',' + T001_num(p.y));
    }
    return el.replace(/points="[^"]*"/, 'points="' + mapped.join(' ') + '"');
  }

  if (/^<line\b/.test(el)) {
    const p1 = mapper.point(Number(T001_attr(el, 'x1')), Number(T001_attr(el, 'y1')));
    const p2 = mapper.point(Number(T001_attr(el, 'x2')), Number(T001_attr(el, 'y2')));
    return el
      .replace(/x1="[^"]*"/, 'x1="' + T001_num(p1.x) + '"')
      .replace(/y1="[^"]*"/, 'y1="' + T001_num(p1.y) + '"')
      .replace(/x2="[^"]*"/, 'x2="' + T001_num(p2.x) + '"')
      .replace(/y2="[^"]*"/, 'y2="' + T001_num(p2.y) + '"');
  }

  return el;
}

function T001_restyleElement(el, className) {
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

function T001_elementToPathD(el) {
  if (/^<path\b/.test(el)) {
    return T001_attr(el, 'd');
  }
  if (/^<polyline\b/.test(el)) {
    const nums = T001_attr(el, 'points').match(/-?\d+(?:\.\d+)?/g) || [];
    const parts = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
      parts.push((i === 0 ? 'M ' : 'L ') + T001_num(nums[i]) + ' ' + T001_num(nums[i + 1]));
    }
    return parts.join(' ');
  }
  if (/^<line\b/.test(el)) {
    return [
      'M ' + T001_num(T001_attr(el, 'x1')) + ' ' + T001_num(T001_attr(el, 'y1')),
      'L ' + T001_num(T001_attr(el, 'x2')) + ' ' + T001_num(T001_attr(el, 'y2'))
    ].join(' ');
  }
  return '';
}

function T001_parseAbsolutePath(d) {
  const tokens = T001_tokenizePath(d);
  const segments = [];
  let i = 0;
  let cmd = '';
  let current = null;
  let start = null;

  function read() {
    return Number(tokens[i++]);
  }

  function hasNumber() {
    return i < tokens.length && !T001_isCommand(tokens[i]);
  }

  while (i < tokens.length) {
    if (T001_isCommand(tokens[i])) {
      cmd = tokens[i++];
    }
    const upper = cmd.toUpperCase();

    if (upper === 'M') {
      while (hasNumber()) {
        const point = { x: read(), y: read() };
        if (!current) {
          current = point;
          start = point;
        } else {
          segments.push({ type: 'L', from: current, to: point });
          current = point;
        }
        cmd = 'L';
      }
    } else if (upper === 'L') {
      while (hasNumber()) {
        const point = { x: read(), y: read() };
        segments.push({ type: 'L', from: current, to: point });
        current = point;
      }
    } else if (upper === 'C') {
      while (hasNumber()) {
        const c1 = { x: read(), y: read() };
        const c2 = { x: read(), y: read() };
        const point = { x: read(), y: read() };
        segments.push({ type: 'C', from: current, c1, c2, to: point });
        current = point;
      }
    } else if (upper === 'Z') {
      if (current && start) {
        segments.push({ type: 'L', from: current, to: start });
        current = start;
      }
    } else {
      throw new Error('Unsupported absolute path command for T001 fill: ' + cmd);
    }
  }

  return {
    start,
    end: current,
    segments
  };
}

function T001_distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function T001_segmentsToD(start, segments) {
  const out = ['M ' + T001_num(start.x) + ' ' + T001_num(start.y)];
  segments.forEach(segment => {
    if (segment.type === 'L') {
      out.push('L ' + T001_num(segment.to.x) + ' ' + T001_num(segment.to.y));
    } else if (segment.type === 'C') {
      out.push(
        'C ' +
        T001_num(segment.c1.x) + ' ' + T001_num(segment.c1.y) + ' ' +
        T001_num(segment.c2.x) + ' ' + T001_num(segment.c2.y) + ' ' +
        T001_num(segment.to.x) + ' ' + T001_num(segment.to.y)
      );
    }
  });
  out.push('Z');
  return out.join(' ');
}

function T001_cubicPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;
  return {
    x: mt2 * mt * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t2 * t * p3.x,
    y: mt2 * mt * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t2 * t * p3.y
  };
}

function T001_flattenPathD(d) {
  const parsed = T001_parseAbsolutePath(d);
  if (!parsed.start) return [];
  const points = [{ x: parsed.start.x, y: parsed.start.y }];
  parsed.segments.forEach(segment => {
    if (segment.type === 'L') {
      points.push({ x: segment.to.x, y: segment.to.y });
    } else if (segment.type === 'C') {
      const chord = T001_distance(segment.from, segment.to);
      const control = T001_distance(segment.from, segment.c1) +
        T001_distance(segment.c1, segment.c2) +
        T001_distance(segment.c2, segment.to);
      const steps = Math.max(8, Math.min(32, Math.ceil((control + chord) / 8)));
      for (let i = 1; i <= steps; i += 1) {
        points.push(T001_cubicPoint(segment.from, segment.c1, segment.c2, segment.to, i / steps));
      }
    }
  });
  return points.filter((point, index) => {
    if (index === 0) return true;
    return T001_distance(point, points[index - 1]) > 0.01;
  });
}

function T001_polygonBounds(points) {
  const xs = points.map(point => point.x);
  const ys = points.map(point => point.y);
  return {
    minX: Math.min(...xs),
    minY: Math.min(...ys),
    maxX: Math.max(...xs),
    maxY: Math.max(...ys)
  };
}

function T001_polygonArea(points) {
  let area = 0;
  for (let i = 0; i < points.length; i += 1) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    area += a.x * b.y - b.x * a.y;
  }
  return area / 2;
}

function T001_polygonToPath(points) {
  if (!points.length) return '';
  return points.map((point, index) =>
    (index === 0 ? 'M ' : 'L ') + T001_num(point.x) + ' ' + T001_num(point.y)
  ).join(' ') + ' Z';
}

function T001_lineIntersection(a1, a2, b1, b2) {
  const x1 = a1.x;
  const y1 = a1.y;
  const x2 = a2.x;
  const y2 = a2.y;
  const x3 = b1.x;
  const y3 = b1.y;
  const x4 = b2.x;
  const y4 = b2.y;
  const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (Math.abs(den) < 0.000001) return null;
  return {
    x: ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / den,
    y: ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / den
  };
}

function T001_offsetPolygonFallback(points, offset) {
  if (points.length < 3) return null;
  const baseBounds = T001_polygonBounds(points);

  function offsetWithSide(side) {
    const shifted = [];
    for (let i = 0; i < points.length; i += 1) {
      const prev = points[(i - 1 + points.length) % points.length];
      const curr = points[i];
      const next = points[(i + 1) % points.length];
      const pDx = curr.x - prev.x;
      const pDy = curr.y - prev.y;
      const nDx = next.x - curr.x;
      const nDy = next.y - curr.y;
      const pLen = Math.sqrt(pDx * pDx + pDy * pDy) || 1;
      const nLen = Math.sqrt(nDx * nDx + nDy * nDy) || 1;
      const pNormal = { x: (-pDy / pLen) * side, y: (pDx / pLen) * side };
      const nNormal = { x: (-nDy / nLen) * side, y: (nDx / nLen) * side };
      const a1 = { x: prev.x + pNormal.x * offset, y: prev.y + pNormal.y * offset };
      const a2 = { x: curr.x + pNormal.x * offset, y: curr.y + pNormal.y * offset };
      const b1 = { x: curr.x + nNormal.x * offset, y: curr.y + nNormal.y * offset };
      const b2 = { x: next.x + nNormal.x * offset, y: next.y + nNormal.y * offset };
      let point = T001_lineIntersection(a1, a2, b1, b2);
      if (!point || T001_distance(point, curr) > 24) {
        const mx = pNormal.x + nNormal.x;
        const my = pNormal.y + nNormal.y;
        const mLen = Math.sqrt(mx * mx + my * my) || 1;
        point = { x: curr.x + (mx / mLen) * offset, y: curr.y + (my / mLen) * offset };
      }
      shifted.push(point);
    }
    return shifted;
  }

  function expansionScore(candidate) {
    const bounds = T001_polygonBounds(candidate);
    return (baseBounds.minX - bounds.minX) +
      (baseBounds.minY - bounds.minY) +
      (bounds.maxX - baseBounds.maxX) +
      (bounds.maxY - baseBounds.maxY);
  }

  const a = offsetWithSide(1);
  const b = offsetWithSide(-1);
  return expansionScore(a) >= expansionScore(b) ? a : b;
}

function T001_offsetPolygonWithClipper(points, offset) {
  if (typeof ClipperLib === 'undefined' || !points.length) {
    return T001_offsetPolygonFallback(points, offset);
  }
  const scale = 1000;
  const baseBounds = T001_polygonBounds(points);
  const source = points.map(point => ({
    X: Math.round(point.x * scale),
    Y: Math.round(point.y * scale)
  }));

  function run(delta) {
    const co = new ClipperLib.ClipperOffset(2, 0.25 * scale);
    co.AddPath(source, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
    const solution = new ClipperLib.Paths();
    co.Execute(solution, delta * scale);
    if (!solution.length) return null;
    const largest = solution.reduce((best, path) =>
      Math.abs(ClipperLib.Clipper.Area(path)) > Math.abs(ClipperLib.Clipper.Area(best)) ? path : best
    , solution[0]);
    return largest.map(point => ({ x: point.X / scale, y: point.Y / scale }));
  }

  let result = run(offset);
  if (!result) return null;
  let resultBounds = T001_polygonBounds(result);
  const expands = resultBounds.minX <= baseBounds.minX - 1 &&
    resultBounds.minY <= baseBounds.minY - 1 &&
    resultBounds.maxX >= baseBounds.maxX + 1 &&
    resultBounds.maxY >= baseBounds.maxY + 1;
  if (!expands) {
    result = run(-offset);
    resultBounds = result ? T001_polygonBounds(result) : resultBounds;
  }
  if (result && T001_polygonArea(result) > 0) {
    result = result.slice().reverse();
  }
  return result;
}

function T001_buildBleedPathFromCut(fillPath) {
  const points = T001_flattenPathD(fillPath);
  const offsetPoints = T001_offsetPolygonWithClipper(points, T001_BLEED_OFFSET);
  return offsetPoints ? T001_polygonToPath(offsetPoints) : '';
}

function T001_reverseParsedPath(parsed) {
  const reversed = parsed.segments.slice().reverse().map(segment => {
    if (segment.type === 'L') {
      return { type: 'L', from: segment.to, to: segment.from };
    }
    return {
      type: 'C',
      from: segment.to,
      c1: segment.c2,
      c2: segment.c1,
      to: segment.from
    };
  });
  return {
    start: parsed.end,
    end: parsed.start,
    segments: reversed
  };
}

function T001_buildCutFillPath(cutElements) {
  const paths = cutElements
    .map(el => T001_parseAbsolutePath(T001_elementToPathD(el)))
    .filter(path => path.start && path.end && path.segments.length);
  if (!paths.length) return '';

  const ordered = [paths.shift()];
  while (paths.length) {
    const currentEnd = ordered[ordered.length - 1].end;
    let bestIndex = 0;
    let bestReverse = false;
    let bestDistance = Infinity;
    paths.forEach((path, index) => {
      const startDistance = T001_distance(currentEnd, path.start);
      const endDistance = T001_distance(currentEnd, path.end);
      if (startDistance < bestDistance) {
        bestDistance = startDistance;
        bestIndex = index;
        bestReverse = false;
      }
      if (endDistance < bestDistance) {
        bestDistance = endDistance;
        bestIndex = index;
        bestReverse = true;
      }
    });
    const next = paths.splice(bestIndex, 1)[0];
    ordered.push(bestReverse ? T001_reverseParsedPath(next) : next);
  }

  const start = ordered[0].start;
  const segments = [];
  ordered.forEach((path, index) => {
    if (index > 0 && T001_distance(segments[segments.length - 1].to, path.start) > 0.02) {
      segments.push({ type: 'L', from: segments[segments.length - 1].to, to: path.start });
    }
    path.segments.forEach(segment => segments.push(segment));
  });
  return T001_segmentsToD(start, segments);
}

function T001_extractSourceElements(sourceSvg) {
  if (!sourceSvg) return T001_SOURCE_ELEMENTS;
  const elements = sourceSvg.match(/<(?:path|line|polyline)\b[^>]*>/g) || [];
  const cutElements = elements.filter(el =>
    /stroke="#ee3924"/.test(el) &&
    !/d="M890\.995,303\.869"/.test(el)
  );
  const foldElements = elements.filter(el =>
    /stroke="#(?:263aed|3b53a4)"/.test(el) &&
    /stroke-dasharray/.test(el)
  );
  const bleedElements = elements.filter(el =>
    /^<path\b/.test(el) &&
    /stroke="#263aed"/.test(el) &&
    !/stroke-dasharray/.test(el)
  );

  if (!cutElements.length || !foldElements.length || !bleedElements.length) {
    throw new Error('T001 source SVG layer extraction failed.');
  }

  return { cutElements, foldElements, bleedElement: bleedElements[0] };
}

function T001_isAuxiliaryCutElement(el) {
  return /stroke-width="\.5"/.test(el) ||
    /x1="243\.462"\s+y1="309\.538"/.test(el);
}

function T001_isAuxiliaryFoldElement(el) {
  return /x1="243\.653"\s+y1="471\.222"/.test(el);
}

function T001_isThumbNotchCutElement(el) {
  return /d="M627\.373,309\.538c1\.527,12\.936/.test(el);
}

function T001_noNotchCutBridgeElement() {
  return '<line x1="627.373" y1="309.538" x2="678.397" y2="309.538" fill="none" stroke="#ee3924" stroke-miterlimit="2.613"/>';
}

function T001_noNotchBleedElement(el) {
  const d = T001_attr(el, 'd');
  const noNotchD = d.replace(
    'h-52.441l-8.115.103-.331,7.403c-1.021,8.649-8.359,15.172-17.067,15.172s-16.045-6.522-17.066-15.171l-.233-7.216-8.212-.292h-52.441',
    'h-156.036'
  );
  return el.replace(/d="[^"]*"/, 'd="' + noNotchD + '"');
}

function T001_numbersForBounds(el) {
  if (/^<path\b/.test(el)) {
    return T001_attr(el, 'd').match(/-?\d+(?:\.\d+)?/g) || [];
  }
  if (/^<polyline\b/.test(el)) {
    return T001_attr(el, 'points').match(/-?\d+(?:\.\d+)?/g) || [];
  }
  if (/^<line\b/.test(el)) {
    return [
      T001_attr(el, 'x1'),
      T001_attr(el, 'y1'),
      T001_attr(el, 'x2'),
      T001_attr(el, 'y2')
    ];
  }
  return [];
}

function T001_boundsFromElements(elements) {
  const xs = [];
  const ys = [];
  elements.forEach(el => {
    const nums = T001_numbersForBounds(el);
    for (let i = 0; i < nums.length - 1; i += 2) {
      xs.push(Number(nums[i]));
      ys.push(Number(nums[i + 1]));
    }
  });
  return {
    minX: T001_num(Math.min(...xs)),
    minY: T001_num(Math.min(...ys)),
    maxX: T001_num(Math.max(...xs)),
    maxY: T001_num(Math.max(...ys)),
    width: T001_num(Math.max(...xs) - Math.min(...xs)),
    height: T001_num(Math.max(...ys) - Math.min(...ys))
  };
}

function T001_getLayout(W, D, H, sourceSvg) {
  const spec = T001_getSpec({ W, D, H });
  const mapper = T001_createMapper(spec);
  const sourceElements = T001_extractSourceElements(sourceSvg);
  const sourceCutElements = sourceElements.cutElements
    .filter(el => !T001_isAuxiliaryCutElement(el))
    .filter(el => T001_hasThumbNotch(spec) || !T001_isThumbNotchCutElement(el));
  if (!T001_hasThumbNotch(spec)) {
    sourceCutElements.push(T001_noNotchCutBridgeElement());
  }
  const sourceBleedElement = T001_hasThumbNotch(spec)
    ? sourceElements.bleedElement
    : T001_noNotchBleedElement(sourceElements.bleedElement);
  const cutElements = sourceCutElements.map(el => T001_transformElement(el, mapper));
  const foldElements = sourceElements.foldElements
    .filter(el => !T001_isAuxiliaryFoldElement(el))
    .map(el => T001_transformElement(el, mapper));
  const fillPath = T001_buildCutFillPath(cutElements);
  const offsetBleedPath = T001_buildBleedPathFromCut(fillPath);
  const bleedElement = offsetBleedPath
    ? '<path d="' + offsetBleedPath + '" fill="none" stroke="#263aed" stroke-miterlimit="10"/>'
    : T001_transformElement(sourceBleedElement, mapper);
  const allElements = [bleedElement].concat(cutElements, foldElements);

  return {
    spec,
    grid: spec.grid,
    cutElements,
    foldElements,
    fillPath,
    bleedElement,
    labels: T001_buildLabels(spec),
    bounds: T001_boundsFromElements(allElements)
  };
}

function T001_buildLabels(spec) {
  const g = spec.grid;
  const lidSideY = g.yBodyTop - spec.D * (28 / 57);
  return [
    { name: 'Glue', x: (g.xGlueL + g.xFrontL) / 2, y: (g.yBodyTop + g.yBodyBottom) / 2 },
    { name: 'Front', x: (g.xFrontL + g.xFrontR) / 2, y: (g.yBodyTop + g.yBodyBottom) / 2 },
    { name: 'Side(L)', x: (g.xFrontR + g.xSideLR) / 2, y: (g.yBodyTop + g.yBodyBottom) / 2 },
    { name: 'Back', x: (g.xSideLR + g.xBackR) / 2, y: (g.yBodyTop + g.yBodyBottom) / 2 },
    { name: 'Side(R)', x: (g.xBackR + g.xSideRR) / 2, y: (g.yBodyTop + g.yBodyBottom) / 2 },
    { name: 'Upper Tuck', x: (g.xFrontL + g.xFrontR) / 2, y: (g.yTop + g.yLidFold) / 2 },
    { name: 'Lid Top', x: (g.xFrontL + g.xFrontR) / 2, y: (g.yLidFold + g.yBodyTop) / 2 },
    { name: 'Lid Side Flap(L)', x: (g.xFrontR + g.xSideLR) / 2, y: (lidSideY + g.yBodyTop) / 2 },
    { name: 'Lid Side Flap(R)', x: (g.xBackR + g.xSideRR) / 2, y: (lidSideY + g.yBodyTop) / 2 },
    { name: 'Bottom Lock A', x: (g.xFrontL + g.xFrontR) / 2, y: (g.yBodyBottom + g.yLockBottom) / 2 },
    { name: 'Bottom Lock(L)', x: (g.xFrontR + g.xSideLR) / 2, y: (g.yBodyBottom + g.yLockBottom) / 2 },
    { name: 'Bottom Lock B', x: (g.xSideLR + g.xBackR) / 2, y: (g.yBodyBottom + g.yLockBottom) / 2 },
    { name: 'Bottom Lock(R)', x: (g.xBackR + g.xSideRR) / 2, y: (g.yBodyBottom + g.yLockBottom) / 2 }
  ].concat(T001_hasThumbNotch(spec)
    ? [{ name: 'Thumb Notch', x: (g.xSideLR + g.xBackR) / 2, y: g.yBodyTop + spec.D * (5 / 57) }]
    : []);
}

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
