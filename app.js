// ============================================================
// app.js — PacVu Engine Lab
// UI 바인딩 + State + Render loop
// Engine dispatch: gbox -> M001, bbox -> T001, rbox -> R001
// ============================================================

// ============================================================
// STATE
// ============================================================
const state = {
  showSlots:  true,
  showHoles:  true,
  showPerforation: true,
  showRuler:  true,
  showCut:    true,
  showBleed:  true,
  showFolds:  true,
  showLabels: true,
  showDims:   true,
  zoom: 1, panX: 0, panY: 0,
  isDragging: false, dragStartX: 0, dragStartY: 0,
  startPanX: 0, startPanY: 0,
  currentSVGString: '', fitInitialized: false,
  baseVB: null
};

let selectedBoxMeta = {
  categoryKey: 'mailer',
  engineKey:   'gbox',
  variantKey:  'default'
};

let BOX_LIBRARY = [];

function isSSeriesSelection(box = selectedBoxMeta) {
  return box.categoryKey === 'sleeve_slide' ||
    box.engineKey === 'sSeries' ||
    box.variantKey === 'S001' ||
    box.type === 'set';
}

function getSelectedProductDefaults(box = selectedBoxMeta) {
  const dims = box.defaultProductSize || box.defaultDims || {};
  return {
    W: dims.W ?? 298,
    D: dims.D ?? 61,
    H: dims.H ?? 292
  };
}

// ============================================================
// INPUT / CONFIG
// ============================================================
function val(id, fb = 0) {
  const el = document.getElementById(id);
  if (!el) return fb;
  const n = parseFloat(el.value);
  return Number.isFinite(n) ? n : fb;
}

// M001 (G-Type) config
function getCfg() {
  const D = val('baseD', 229);
  const H = val('panelH', 91);
  return {
    W: val('baseW', 235), D, H,
    LH: D,
    FG: val('foldGap', 5),
    BLW: H,
    BIH: val('backInsertH', 80),
    FIH: val('frontInsertH', 80),
    CR:  val('chamfer', 8),
    ni:  val('lockNeckInset', 10),
    td:  val('lockTabDepth', 12),
    th:  val('lockTabHeight', 18),
    SK:  val('insertSkew', 8),
    stringHoleEnabled: document.getElementById('stringHoleEnabled')?.checked !== false,
    holeDia:     val('holeDia', 6),
    holeGap:     val('holeGap', 70),
    holeOffsetY: val('holeOffsetY', 45)
  };
}

// T001 (B-Type) config
function getCfgT001() {
  return {
    W: val('baseW', 57),
    D: val('baseD', 57),
    H: val('panelH', 177)
  };
}

function getCfgT002() {
  return {
    W: val('baseW', 126),
    D: val('baseD', 81),
    H: val('panelH', 308),
    bottleTopHoleEnabled: document.getElementById('t002BottleTopHoleEnabled')?.checked !== false,
    bottleTopHoleDia: val('t002BottleTopHoleDia', 56),
    bottleTopHoleY: val('t002BottleTopHoleY', 42),
    neckHoleEnabled: document.getElementById('t002NeckHoleEnabled')?.checked !== false,
    neckHoleDia: val('t002NeckHoleDia', 20),
    neckHoleY: val('t002NeckHoleY', 35)
  };
}

function getCfgT003() {
  return {
    W: val('baseW', 86.5),
    D: val('baseD', 86.5),
    H: val('panelH', 296),
    stringHoleEnabled: document.getElementById('stringHoleEnabled')?.checked !== false,
    holeDia: val('holeDia', 6),
    holeGap: val('holeGap', 70),
    holeOffsetY: val('holeOffsetY', 45)
  };
}

function getCfgT004() {
  return {
    W: val('baseW', 130),
    D: val('baseD', 65),
    H: val('panelH', 190)
  };
}

// R001 (A-Type RSC) config
function getCfgR001() {
  return {
    W: val('baseW', 285),
    D: val('baseD', 170),
    H: val('panelH', 120)
  };
}

function getCfgR002() {
  return {
    W: val('baseW', 425),
    D: val('baseD', 335),
    H: val('panelH', 103)
  };
}

function getCfgM002() {
  return {
    W: val('baseW', 400),
    D: val('baseD', 308),
    H: val('panelH', 80),
    handleHoleEnabled: document.getElementById('m002HandleHoleEnabled')?.checked !== false,
    handleHoleWidth: val('m002HandleHoleWidth', 25),
    handleHoleHeight: val('m002HandleHoleHeight', 25)
  };
}

function getCfgR003() {
  return {
    W: val('baseW', 350),
    D: val('baseD', 230),
    H: val('panelH', 220)
  };
}

function getCfgR004() {
  return {
    W: val('baseW', 280),
    D: val('baseD', 220),
    H: val('panelH', 190),
    handleHoleEnabled: document.getElementById('r004HandleHoleEnabled')?.checked !== false,
    handleHoleWidth: val('r004HandleHoleWidth', 75),
    handleHoleHeight: val('r004HandleHoleHeight', 25)
  };
}

function s001PresetValue(id, fallback) {
  const value = document.getElementById(id)?.value || 'Normal';
  const table = {
    Tight: fallback * 0.65,
    Normal: fallback,
    Loose: fallback * 1.6
  };
  return table[value] ?? fallback;
}

function getCfgS001() {
  const defaults = getSelectedProductDefaults();
  const base = typeof S001_getDefaultConfig === 'function' ? S001_getDefaultConfig() : {};
  return {
    W: val('baseW', defaults.W),
    D: val('baseD', defaults.D),
    H: val('panelH', defaults.H),
    productW: val('baseW', defaults.W),
    productD: val('baseD', defaults.D),
    productH: val('panelH', defaults.H),
    productGap: s001PresetValue('sProductPadPreset', base.productGap ?? 1.0),
    padGap: s001PresetValue('sPadTrayPreset', base.padGap ?? 1.0),
    trayGap: s001PresetValue('sTraySleevePreset', base.trayGap ?? 1.0),
    slideGap: s001PresetValue('sTraySleevePreset', base.slideGap ?? 1.5),
    paperThickness: base.paperThickness ?? 0.4,
    insertPadEnabled: document.getElementById('sInsertPadEnabled')?.checked !== false,
    showOuterSleeve: document.getElementById('sShowOuterSleeve')?.checked !== false,
    showInnerTray: document.getElementById('sShowInnerTray')?.checked !== false,
    showInsertPad: document.getElementById('sShowInsertPad')?.checked !== false,
    viewMode: document.getElementById('sViewMode')?.value || 'All Parts',
    outerStringHoleEnabled: document.getElementById('sOuterStringHoleEnabled')?.checked !== false,
    outerMainHoleDia: val('sOuterMainHoleDia', base.outerMainHoleDia ?? 22),
    outerSmallHoleDia: val('sOuterSmallHoleDia', base.outerSmallHoleDia ?? 6),
    outerHoleOffsetY: val('sOuterHoleOffsetY', base.outerHoleOffsetY ?? 0),
    holeCount: 3
  };
}

function getCfgB001() {
  return {
    W: val('baseW', 160),
    D: val('baseD', 110),
    H: val('panelH', 80)
  };
}

function getCfgC001() {
  const preset = document.getElementById('c001Preset')?.value || selectedBoxMeta.defaultPreset || 'no3';
  const heightOption = document.getElementById('c001HeightOption')?.value || 'Standard';
  const customH = val('c001CustomH', 140);
  const windowMode = document.getElementById('c001Window')?.value || 'None';
  const handle = document.getElementById('c001Handle')?.value || 'Center Handle';
  const cfg = typeof C001_resolveConfig === 'function'
    ? C001_resolveConfig({ preset, heightOption, customH, windowMode, handle })
    : { preset, W: 277, D: 275, H: 140, boardW: 265, boardD: 265, boardH: 5, heightOption, windowMode, handle };

  syncC001SizeFields(cfg);
  return cfg;
}

// ============================================================
// DIMENSION VALIDATE (M001용)
// ============================================================
function validateDimensions(W, D, H) {
  const minBase = Math.min(W, D);
  const ratio   = H / minBase;

  let warningBox = document.getElementById('dimensionWarning');
  const hInput   = document.getElementById('panelH');

  if (!warningBox) {
    warningBox = document.createElement('div');
    warningBox.id = 'dimensionWarning';
    Object.assign(warningBox.style, {
      marginTop: '8px', padding: '6px 4px', background: 'transparent',
      border: 'none', fontSize: '11px', lineHeight: '1.5',
      fontWeight: '400', width: '100%', display: 'block', whiteSpace: 'nowrap'
    });
    const section =
      hInput?.closest('.option-card') || hInput?.closest('.setting-card') ||
      hInput?.closest('.control-card') || hInput?.closest('.panel-card') ||
      hInput?.closest('.panel-section') || hInput?.parentElement;
    section?.appendChild(warningBox);
  }

  if (ratio > 0.8) {
    warningBox.style.display = 'block';
    warningBox.style.color   = '#d93025';
    warningBox.textContent   = '⚠️비율 초과: H를 낮추거나 W/D를 높혀주세요.';
    if (hInput) hInput.style.border = '1px solid #d93025';
    return false;
  }
  if (ratio > 0.65) {
    warningBox.style.display = 'block';
    warningBox.style.color   = '#e37400';
    warningBox.textContent   = '주의: 비율이 높아 형태가 변형될 수 있습니다.';
    if (hInput) hInput.style.border = '1px solid #e37400';
    return true;
  }
  warningBox.style.display = 'none';
  warningBox.textContent   = '';
  if (hInput) hInput.style.border = '1px solid #ddd';
  return true;
}

// ============================================================
// RENDER LOOP
// ============================================================
let renderTimer = null;

function render(forceFit = false) {
  let svgStr = '';
  const eng = selectedBoxMeta.engineKey;

  if (eng === 'gbox') {
    const cfg = getCfg();
    validateDimensions(cfg.W, cfg.D, cfg.H);
    svgStr = M001_renderSVG(cfg, state);

  } else if (eng === 'gbox2') {
    const cfg = getCfgM002();
    svgStr = M002_renderSVG(cfg, state);

  } else if (eng === 'bbox') {
    const c = getCfgT001();
    svgStr = T001_renderSVG(c, state);

  } else if (eng === 'bbox2') {
    const c = getCfgT002();
    svgStr = T002_renderSVG(c, state);

  } else if (eng === 'bbox3') {
    const c = getCfgT003();
    svgStr = T003_renderSVG(c, state);

  } else if (eng === 'bbox4') {
    const c = getCfgT004();
    svgStr = T004_renderSVG(c, state);

  } else if (eng === 'rbox') {
    // ── R001 A-Type RSC ──────────────────────────────────────
    const c = getCfgR001();
    svgStr = R001_renderSVG(c, state);

  } else if (eng === 'rbox2') {
    const c = getCfgR002();
    svgStr = R002_renderSVG(c, state);

  } else if (eng === 'rbox3') {
    const c = getCfgR003();
    svgStr = R003_renderSVG(c, state);

  } else if (eng === 'rbox4') {
    const c = getCfgR004();
    svgStr = R004_renderSVG(c, state);

  } else if (eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001') {
    const c = getCfgS001();
    svgStr = S001_renderSVG(c, state);

  } else if (eng === 'b001') {
    const c = getCfgB001();
    svgStr = B001_renderSVG(c, state);

  } else if (eng === 'c001') {
    const c = getCfgC001();
    svgStr = C001_renderSVG(c, state);

  } else {
    // 준비 중
    svgStr = `<svg id="mainSvg" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200" width="400mm" height="200mm">
      <rect width="400" height="200" fill="#d0d0d0"/>
      <text x="200" y="100" text-anchor="middle" font-size="16" fill="#999"
            font-family="Arial,sans-serif">준비 중</text>
    </svg>`;
  }

  state.currentSVGString = svgStr;
  const host = document.getElementById('svgHost');
  if (!host) return;

  host.innerHTML = svgStr;
  state.baseVB = null;

  if (forceFit || !state.fitInitialized) {
    state.panX = 0; state.panY = 0;
    fitToScreen();
    state.fitInitialized = true;
  } else {
    applyTransform();
  }
}

function scheduleRender() {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => render(true), 180);
}

// ============================================================
// VIEWPORT / PAN / ZOOM
// ============================================================
function applyTransform() {
  const sv = document.getElementById('mainSvg');
  if (!sv || !state.baseVB) return;
  const b  = state.baseVB;
  const nw = b.w / state.zoom, nh = b.h / state.zoom;
  const nx = b.cx - nw / 2 - state.panX;
  const ny = b.cy - nh / 2 - state.panY;
  sv.setAttribute('viewBox', `${nx} ${ny} ${nw} ${nh}`);
  const g = document.getElementById('mainGroup') ||
            document.getElementById('viewportGroup') ||
            document.querySelector('#mainSvg g');
  if (g) g.removeAttribute('transform');
  const sb = document.getElementById('statusBox');
  if (sb) sb.textContent = `Zoom ${Math.round(state.zoom * 100)}%`;
}

function fitToScreen() {
  requestAnimationFrame(() => {
    const sv   = document.getElementById('mainSvg');
    const host = document.getElementById('svgHost');
    if (!sv || !host) return;
    sv.setAttribute('width', '100%');
    sv.setAttribute('height', '100%');
    const hr = host.getBoundingClientRect();
    if (!hr.width || !hr.height) return;

    // bounds 계산 — engine별
    let bounds;
    const eng = selectedBoxMeta.engineKey;
    if (eng === 'gbox') {
      const c  = getCfg();
      const g2 = M001_getGrid(c);
      bounds = getBounds(
        buildOuterPath(c, g2), buildFoldLines(c, g2),
        buildSlots(c, g2), buildHoles(c, g2)
      );
    } else if (eng === 'gbox2') {
      const c = getCfgM002();
      const layout = M002_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'bbox') {
      const c = getCfgT001();
      const layout = T001_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'bbox2') {
      const c = getCfgT002();
      const layout = T002_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'bbox3') {
      const c = getCfgT003();
      const layout = T003_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'bbox4') {
      const c = getCfgT004();
      const layout = T004_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'rbox') {
      // ── R001 bounds ─────────────────────────────────────────
      const c = getCfgR001();
      const layout = R001_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'rbox2') {
      const c = getCfgR002();
      const layout = R002_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'rbox3') {
      const c = getCfgR003();
      const layout = R003_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'rbox4') {
      const c = getCfgR004();
      const layout = R004_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001') {
      const c = getCfgS001();
      const layout = S001_getLayout(c, state);
      bounds = layout.bounds;
    } else if (eng === 'b001') {
      const c = getCfgB001();
      const layout = B001_getLayout(c.W, c.D, c.H);
      bounds = layout.bounds;
    } else if (eng === 'c001') {
      const c = getCfgC001();
      const layout = C001_getLayout(c);
      bounds = layout.bounds;
    } else {
      bounds = { minX:0, minY:0, width:400, height:200 };
    }

    const pad   = 40;
    const scaleX = (hr.width  - pad*2) / bounds.width;
    const scaleY = (hr.height - pad*2) / bounds.height;
    const scale  = Math.min(scaleX, scaleY);
    const vbW    = hr.width  / scale;
    const vbH    = hr.height / scale;
    const contentCX = bounds.minX + bounds.width  / 2;
    const contentCY = bounds.minY + bounds.height / 2;
    const vbX    = contentCX - vbW / 2;
    const vbY    = contentCY - vbH / 2;
    sv.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
    state.baseVB = { x:vbX, y:vbY, w:vbW, h:vbH, cx:contentCX, cy:contentCY };
    state.zoom = 1; state.panX = 0; state.panY = 0;
    const g = document.getElementById('mainGroup') ||
              document.getElementById('viewportGroup') ||
              document.querySelector('#mainSvg g');
    if (g) g.removeAttribute('transform');
    const sb = document.getElementById('statusBox');
    if (sb) sb.textContent = 'Zoom 100%';
  });
}

const ZOOM_STEPS = [0.5, 1.0, 1.5, 2.0];
function snapZoom(current, dir) {
  const i = ZOOM_STEPS.findIndex(z => Math.abs(z - current) < 0.001);
  if (dir > 0) {
    if (i >= 0) return ZOOM_STEPS[Math.min(i+1, ZOOM_STEPS.length-1)];
    return ZOOM_STEPS.find(z => z > current) ?? ZOOM_STEPS[ZOOM_STEPS.length-1];
  } else {
    if (i >= 0) return ZOOM_STEPS[Math.max(i-1, 0)];
    return [...ZOOM_STEPS].reverse().find(z => z < current) ?? ZOOM_STEPS[0];
  }
}
function zoomAt(nextZoom) {
  state.zoom = Math.max(0.5, Math.min(2.0, nextZoom));
  applyTransform();
}

// ============================================================
// EXPORT SVG / DXF
// ============================================================
function buildExportSVG(cfg, eng) {
  if (eng === 'gbox') {
    return typeof window.M001_buildExportSVG === 'function'
      ? window.M001_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'gbox2') {
    return typeof M002_buildExportSVG === 'function'
      ? M002_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'bbox') {
    return typeof T001_buildExportSVG === 'function'
      ? T001_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'bbox2') {
    return typeof T002_buildExportSVG === 'function'
      ? T002_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'bbox3') {
    return typeof T003_buildExportSVG === 'function'
      ? T003_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'bbox4') {
    return typeof T004_buildExportSVG === 'function'
      ? T004_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'rbox') {
    return typeof R001_buildExportSVG === 'function'
      ? R001_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'rbox2') {
    return typeof R002_buildExportSVG === 'function'
      ? R002_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'rbox3') {
    return typeof R003_buildExportSVG === 'function'
      ? R003_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'rbox4') {
    return typeof R004_buildExportSVG === 'function'
      ? R004_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001') {
    return typeof S001_buildExportSVG === 'function'
      ? S001_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'b001') {
    return typeof B001_buildExportSVG === 'function'
      ? B001_buildExportSVG(cfg)
      : '';
  }

  if (eng === 'c001') {
    return typeof C001_buildExportSVG === 'function'
      ? C001_buildExportSVG(cfg)
      : '';
  }

  return '';
}

function buildDXF(cfg, eng) {
  if (eng === 'gbox') return typeof buildDXF_M001 === 'function' ? buildDXF_M001(cfg) : '';
  if (eng === 'gbox2') return typeof M002_buildDXF === 'function' ? M002_buildDXF(cfg) : '';
  if (eng === 'bbox') return typeof T001_buildDXF === 'function' ? T001_buildDXF(cfg) : '';
  if (eng === 'bbox2') return typeof T002_buildDXF === 'function' ? T002_buildDXF(cfg) : '';
  if (eng === 'bbox3') return typeof T003_buildDXF === 'function' ? T003_buildDXF(cfg) : '';
  if (eng === 'bbox4') return typeof T004_buildDXF === 'function' ? T004_buildDXF(cfg) : '';
  if (eng === 'rbox') return typeof R001_buildDXF === 'function' ? R001_buildDXF(cfg) : '';
  if (eng === 'rbox2') return typeof R002_buildDXF === 'function' ? R002_buildDXF(cfg) : '';
  if (eng === 'rbox3') return typeof R003_buildDXF === 'function' ? R003_buildDXF(cfg) : '';
  if (eng === 'rbox4') return typeof R004_buildDXF === 'function' ? R004_buildDXF(cfg) : '';
  if (eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001') return typeof S001_buildDXF === 'function' ? S001_buildDXF(cfg) : '';
  if (eng === 'b001') return typeof B001_buildDXF === 'function' ? B001_buildDXF(cfg) : '';
  if (eng === 'c001') return typeof C001_buildDXF === 'function' ? C001_buildDXF(cfg) : '';
  return '';
}

function buildPDF(cfg, eng) {
  if (eng === 'b001') return typeof B001_buildPDF === 'function' ? B001_buildPDF(cfg) : '';
  if (eng === 'c001') return typeof C001_buildPDF === 'function' ? C001_buildPDF(cfg) : '';
  return '';
}

function downloadS001PartSVG(part, label) {
  if (!isSSeriesSelection() || selectedBoxMeta.variantKey !== 'S001') return;
  if (typeof S001_buildExportSVG !== 'function') return;
  const cfg = getCfgS001();
  const svgOut = S001_buildExportSVG(cfg, { part });

  if (!svgOut || !svgOut.trim()) {
    console.warn('[S001 part SVG export empty]', { part, cfg });
    return;
  }

  const dim = `${cfg.W}x${cfg.D}x${cfg.H}`;
  const name = `PacVu_S001_${label}_${dim}mm.svg`;
  downloadFile(name, svgOut, 'image/svg+xml');
}

// ============================================================
// BOX LIBRARY SELECT
// ============================================================
function initBoxLibrarySelect() {
  const categoryEl = document.getElementById('boxCategory');
  const typeEl     = document.getElementById('boxType');
  if (!categoryEl || !typeEl) return;

  categoryEl.innerHTML = '';
  BOX_LIBRARY.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.categoryKey;
    opt.textContent = cat.categoryLabel;
    categoryEl.appendChild(opt);
  });

  const fillTypeSelect = () => {
    const cat = BOX_LIBRARY.find(c => c.categoryKey === categoryEl.value) || BOX_LIBRARY[0];
    typeEl.innerHTML = '';
    if (!cat.items.length) {
      const empty = document.createElement('option');
      empty.value = ''; empty.textContent = '준비 중';
      typeEl.appendChild(empty);
      selectedBoxMeta = { categoryKey: cat.categoryKey, engineKey: '', variantKey: '', type: '' };
      updatePerforationSettings();
      updateSSetPanelMode();
      updateC001PanelMode();
      return;
    }
    cat.items.forEach(item => {
      const opt = document.createElement('option');
      opt.value = `${item.engineKey}:${item.variantKey}`;
      opt.textContent = item.label;
      opt.dataset.engine     = item.engineKey;
      opt.dataset.variant    = item.variantKey;
      opt.dataset.fefco      = item.fefcoCode;
      opt.dataset.koreanName = item.koreanName;
      opt.dataset.type       = item.type || '';
      opt.dataset.defaultW   = item.defaultDims?.W ?? 235;
      opt.dataset.defaultD   = item.defaultDims?.D ?? 229;
      opt.dataset.defaultH   = item.defaultDims?.H ?? 91;
      typeEl.appendChild(opt);
    });
    _applySelectedBox(cat.items[0], typeEl.options[0], cat);
  };

  categoryEl.addEventListener('change', () => { fillTypeSelect(); scheduleRender(); });
  typeEl.addEventListener('change', () => {
    const opt = typeEl.selectedOptions[0];
    const item = BOX_LIBRARY
      .find(c => c.categoryKey === categoryEl.value)?.items
      .find(i => `${i.engineKey}:${i.variantKey}` === opt?.value);
    const cat = BOX_LIBRARY.find(c => c.categoryKey === categoryEl.value);
    if (item) _applySelectedBox(item, opt, cat);
    scheduleRender();
  });

  // 초기값: mailer 카테고리
  categoryEl.value = 'mailer';
  fillTypeSelect();
}

function _applySelectedBox(item, opt, cat) {
  selectedBoxMeta = {
    categoryKey: cat?.categoryKey || item.categoryKey || '',
    engineKey:   item.engineKey,
    variantKey:  item.variantKey,
    fefcoCode:   item.fefcoCode,
    koreanName:  item.koreanName,
    type:        item.type || '',
    defaultDims: item.defaultDims || null,
    defaultPreset: item.defaultPreset || '',
    defaultProductSize: item.defaultProductSize || null
  };
  const defaults = isSSeriesSelection(selectedBoxMeta)
    ? getSelectedProductDefaults(selectedBoxMeta)
    : item.defaultDims;
  if (defaults) {
    const dW = document.getElementById('baseW');
    const dD = document.getElementById('baseD');
    const dH = document.getElementById('panelH');
    if (dW) dW.value = defaults.W;
    if (dD) dD.value = defaults.D;
    if (dH) dH.value = defaults.H;
  }
  updatePerforationSettings();
  updateSSetPanelMode();
  updateC001PanelMode();
}

function legacySetupPanelUi() {
  const optionGrid = document.querySelector('.option-grid');
  const displayBody = optionGrid?.closest('.group-body');
  if (optionGrid && displayBody) {
    optionGrid.innerHTML = [
      '<label><span>눈금자</span><input id="showRuler" type="checkbox" checked></label>',
      '<label><span>치수선</span><input id="showDims" type="checkbox" checked></label>',
      '<label><span>패널명</span><input id="showLabels" type="checkbox" checked></label>',
      '<label><span>재단선</span><input id="showCut" type="checkbox" checked></label>',
      '<label><span>접힘선</span><input id="showFolds" type="checkbox" checked></label>',
      '<label><span>블리드</span><input id="showBleed" type="checkbox" checked></label>',
      '<label><span>타공 표시</span><input id="showPerforation" type="checkbox" checked></label>'
    ].join('');

    Array.from(displayBody.children).forEach(child => {
      if (child !== optionGrid) child.remove();
    });
  }

  const sidebarInner = document.querySelector('.sidebar-inner');
  const hint = document.querySelector('.hint');
  if (!sidebarInner || document.getElementById('perforationSettings')) {
    updateLegendUi();
    return;
  }

  const section = document.createElement('details');
  section.id = 'perforationSettings';
  section.className = 'group';
  section.open = true;
  section.hidden = true;
  section.innerHTML = [
    '<summary>타공 설정</summary>',
    '<div class="group-body">',
    '<details class="sub-group perforation-item" data-engines="gbox bbox3" open>',
    '<summary>끈구멍</summary>',
    '<div class="row"><label>사용</label><input id="stringHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>지름</label><input id="holeDia" type="number" step="0.5" value="6"></div>',
    '<div class="row"><label>간격</label><input id="holeGap" type="number" step="1" value="70"></div>',
    '<div class="row"><label>Y 위치</label><input id="holeOffsetY" type="number" step="0.5" value="45"></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="gbox2" open>',
    '<summary>손잡이 홀</summary>',
    '<div class="row"><label>사용</label><input id="m002HandleHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>가로</label><input id="m002HandleHoleWidth" type="number" step="0.5" value="25"></div>',
    '<div class="row"><label>세로</label><input id="m002HandleHoleHeight" type="number" step="0.5" value="25"></div>',
    '<div class="row"><label>패널</label><input type="text" value="Back Insert" readonly></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="rbox4" open>',
    '<summary>손잡이 홀</summary>',
    '<div class="row"><label>사용</label><input id="r004HandleHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>가로</label><input id="r004HandleHoleWidth" type="number" step="0.5" value="75"></div>',
    '<div class="row"><label>세로</label><input id="r004HandleHoleHeight" type="number" step="0.5" value="25"></div>',
    '<div class="row"><label>패널</label><input type="text" value="Side" readonly></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="bbox2" open>',
    '<summary>병상단 홀 / Bottle Top Hole</summary>',
    '<div class="row"><label>사용</label><input id="t002BottleTopHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>지름</label><input id="t002BottleTopHoleDia" type="number" step="0.5" value="56"></div>',
    '<div class="row"><label>기준 패널</label><input type="text" value="Bottle Top" readonly></div>',
    '<div class="row"><label>X 위치</label><input type="text" value="중앙" readonly></div>',
    '<div class="row"><label>Y 위치</label><input id="t002BottleTopHoleY" type="number" step="0.5" value="42"></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="bbox2" open>',
    '<summary>병목 홀 / Neck Hole</summary>',
    '<div class="row"><label>사용</label><input id="t002NeckHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>지름</label><input id="t002NeckHoleDia" type="number" step="0.5" value="20"></div>',
    '<div class="row"><label>기준 패널</label><input type="text" value="Back" readonly></div>',
    '<div class="row"><label>X 위치</label><input type="text" value="중앙" readonly></div>',
    '<div class="row"><label>Y 위치</label><input id="t002NeckHoleY" type="number" step="0.5" value="35"></div>',
    '</details>',
    '</div>'
  ].join('');

  sidebarInner.insertBefore(section, hint || null);
  updateLegendUi();
}

function legacyUpdateLegendUi() {
  const legend = document.querySelector('.legend');
  if (!legend) return;
  legend.innerHTML = [
    '<div><span class="ln fold-ln"></span>접힘선</div>',
    '<div><span class="ln cut-ln"></span>재단선</div>',
    '<div><span class="ln perf-ln"></span>타공선</div>',
    '<div><span class="ln bleed-ln"></span>블리드</div>'
  ].join('');
}

function updatePerforationSettings() {
  const section = document.getElementById('perforationSettings');
  if (!section) return;
  const eng = selectedBoxMeta.engineKey || '';
  let hasVisible = false;

  section.querySelectorAll('.perforation-item').forEach(item => {
    const engines = (item.dataset.engines || '').split(/\s+/).filter(Boolean);
    const visible = engines.includes(eng);
    item.hidden = !visible;
    if (visible) hasVisible = true;
  });

  section.hidden = !hasVisible;
}

function getSizePanelGroup() {
  return document.getElementById('baseW')?.closest('details.group') || null;
}

function setSizePanelMode(isSSet) {
  const group = getSizePanelGroup();
  if (!group) return;
  const summary = group.querySelector(':scope > summary');
  const labels = {
    baseW: isSSet ? 'Outer W' : 'Width (W)',
    baseD: isSSet ? 'Outer D' : 'Depth (D)',
    panelH: isSSet ? 'Outer H' : 'Height (H)'
  };

  if (summary) {
    summary.textContent = isSSet ? 'Outer Box Size' : '박스 기본 치수';
  }

  Object.keys(labels).forEach(id => {
    const rowLabel = document.getElementById(id)?.closest('.row')?.querySelector('label');
    if (rowLabel) rowLabel.textContent = labels[id];
  });
}

function ensureSSetPanel() {
  let panel = document.getElementById('sSeriesSetPanel');
  if (panel) return panel;

  const sidebarInner = document.querySelector('.sidebar-inner');
  const sizePanel = getSizePanelGroup();
  if (!sidebarInner || !sizePanel) return null;

  panel = document.createElement('details');
  panel.id = 'sSeriesSetPanel';
  panel.className = 'group';
  panel.open = true;
  panel.hidden = true;
  panel.innerHTML = [
    '<summary>S-Series Set Control</summary>',
    '<div class="group-body">',
    '<div class="mini-title">S-Series Set Structure</div>',
    '<p class="hint">S라인은 세트형 구조입니다.<br>제품 사이즈를 입력하면 인서트 패드, 속트레이, 겉슬리브가 자동 계산됩니다.</p>',

    '<div class="mini-title">Set Parts / 구성 부품</div>',
    '<div class="row"><label>Outer Sleeve</label><input type="checkbox" checked disabled></div>',
    '<div class="row"><label>Inner Tray</label><input type="checkbox" checked disabled></div>',
    '<div class="row"><label>Insert Pad</label><input id="sInsertPadEnabled" type="checkbox" checked></div>',

    '<div class="mini-title">Clearance / 끼움 여유</div>',
    '<div class="row"><label>Product → Pad</label><select id="sProductPadPreset"><option>Tight</option><option selected>Normal</option><option>Loose</option></select></div>',
    '<div class="row"><label>Pad → Inner Tray</label><select id="sPadTrayPreset"><option>Tight</option><option selected>Normal</option><option>Loose</option></select></div>',
    '<div class="row"><label>Inner Tray → Outer Sleeve</label><select id="sTraySleevePreset"><option>Tight</option><option selected>Normal</option><option>Loose</option></select></div>',
    '<details class="sub-group">',
    '<summary>Advanced Clearance</summary>',
    '<div class="row"><label>Product Gap</label><input type="number" value="1.0" step="0.1" readonly></div>',
    '<div class="row"><label>Pad Gap</label><input type="number" value="1.0" step="0.1" readonly></div>',
    '<div class="row"><label>Tray Gap</label><input type="number" value="1.0" step="0.1" readonly></div>',
    '<div class="row"><label>Slide Gap</label><input type="number" value="1.5" step="0.1" readonly></div>',
    '<div class="row"><label>Paper Thickness</label><input type="number" value="0.4" step="0.1" readonly></div>',
    '</details>',

    '<div id="sOuterStringHoleSettings">',
    '<div class="mini-title">Outer / String Hole Settings</div>',
    '<div class="row"><label>Use String Hole</label><input id="sOuterStringHoleEnabled" type="checkbox" checked></div>',
    '<div class="row"><label>Main Hole Dia</label><input id="sOuterMainHoleDia" type="number" step="0.5" value="22"></div>',
    '<div class="row"><label>Small Hole Dia</label><input id="sOuterSmallHoleDia" type="number" step="0.5" value="6"></div>',
    '<div class="row"><label>Y Offset</label><input id="sOuterHoleOffsetY" type="number" step="0.5" value="0"></div>',
    '</div>',

    '<div id="sInsertPadSettings">',
    '<div class="mini-title">Insert / Pad Settings</div>',
    '<div class="row"><label>Hole Type</label><input type="text" value="Circle" readonly></div>',
    '<div class="row"><label>Hole Count</label><input type="text" value="3" readonly></div>',
    '<div class="row"><label>Hole Gap</label><input type="text" value="Auto" readonly></div>',
    '<div class="row"><label>Edge Margin</label><input type="text" value="Auto" readonly></div>',
    '</div>',

    '<div class="mini-title">Preview Parts</div>',
    '<div class="row"><label>Show Outer Sleeve</label><input id="sShowOuterSleeve" type="checkbox" checked></div>',
    '<div class="row"><label>Show Inner Tray</label><input id="sShowInnerTray" type="checkbox" checked></div>',
    '<div class="row"><label>Show Insert Pad</label><input id="sShowInsertPad" type="checkbox" checked></div>',
    '<div class="row"><label>View Mode</label><select id="sViewMode"><option selected>All Parts</option><option>Outer Only</option><option>Inner Only</option><option>Insert Only</option></select></div>',

    '<div class="mini-title">Download Parts</div>',
    '<div class="row"><label>Download All</label><button id="sDownloadAllSvg" type="button" class="btn light">SVG</button></div>',
    '<div class="row"><label>Outer Sleeve</label><button id="sDownloadOuterSvg" type="button" class="btn light">SVG</button></div>',
    '<div class="row"><label>Inner Tray</label><button id="sDownloadInnerSvg" type="button" class="btn light">SVG</button></div>',
    '<div class="row"><label>Insert Pad</label><button id="sDownloadInsertSvg" type="button" class="btn light">SVG</button></div>',
    '</div>'
  ].join('');

  sizePanel.insertAdjacentElement('afterend', panel);

  const insertPad = panel.querySelector('#sInsertPadEnabled');
  insertPad?.addEventListener('change', () => {
    const settings = panel.querySelector('#sInsertPadSettings');
    if (settings) settings.hidden = !insertPad.checked;
    render(true);
  });

  panel.querySelectorAll('select, input[type=checkbox], input[type=number]').forEach(control => {
    if (control.id !== 'sInsertPadEnabled') {
      control.addEventListener('change', () => render(true));
      control.addEventListener('input', () => render(true));
    }
  });

  panel.querySelector('#sDownloadAllSvg')?.addEventListener('click', () => downloadS001PartSVG('all', 'All'));
  panel.querySelector('#sDownloadOuterSvg')?.addEventListener('click', () => downloadS001PartSVG('outerSleeve', 'OuterSleeve'));
  panel.querySelector('#sDownloadInnerSvg')?.addEventListener('click', () => downloadS001PartSVG('innerTray', 'InnerTray'));
  panel.querySelector('#sDownloadInsertSvg')?.addEventListener('click', () => downloadS001PartSVG('insertPad', 'InsertPad'));

  return panel;
}

function updateSSetPanelMode() {
  const isSSet = isSSeriesSelection();
  const panel = ensureSSetPanel();
  setSizePanelMode(isSSet);
  if (panel) panel.hidden = !isSSet;

  if (isSSet) {
    const defaults = getSelectedProductDefaults();
    const dW = document.getElementById('baseW');
    const dD = document.getElementById('baseD');
    const dH = document.getElementById('panelH');
    if (dW && !dW.value) dW.value = defaults.W;
    if (dD && !dD.value) dD.value = defaults.D;
    if (dH && !dH.value) dH.value = defaults.H;
  }
}

function isC001Selection(meta = selectedBoxMeta) {
  return meta?.engineKey === 'c001' && meta?.variantKey === 'C001';
}

function ensureC001Panel() {
  let panel = document.getElementById('c001CakePanel');
  if (panel) return panel;

  const sizePanel = getSizePanelGroup();
  if (!sizePanel) return null;
  const options = typeof C001_getPresetOptions === 'function'
    ? C001_getPresetOptions()
    : [
      { key: 'mini', label: 'Mini' },
      { key: 'no1', label: 'No.1' },
      { key: 'no2', label: 'No.2' },
      { key: 'no3', label: 'No.3' },
      { key: 'no4', label: 'No.4' }
    ];

  panel = document.createElement('details');
  panel.id = 'c001CakePanel';
  panel.className = 'group';
  panel.open = true;
  panel.hidden = true;
  panel.innerHTML = [
    '<summary>C001 Cake Box Control</summary>',
    '<div class="group-body">',
    '<div class="mini-title">Size Preset / \ud638\uc218 \uc120\ud0dd</div>',
    '<div class="row"><label>Size Preset</label><select id="c001Preset">' +
      options.map(opt => '<option value="' + opt.key + '">' + opt.label + '</option>').join('') +
    '</select></div>',

    '<div class="mini-title">Cake Board Size / \ucf00\uc774\ud06c \ud558\ud310</div>',
    '<div class="row"><label>Board W</label><input id="c001BoardW" type="text" readonly></div>',
    '<div class="row"><label>Board D</label><input id="c001BoardD" type="text" readonly></div>',
    '<div class="row"><label>Board H</label><input id="c001BoardH" type="text" readonly></div>',

    '<div class="mini-title">Box Size / \ubc15\uc2a4 \uc644\uc131 \uc0ac\uc774\uc988</div>',
    '<div class="row"><label>Box W</label><input id="c001BoxW" type="text" readonly></div>',
    '<div class="row"><label>Box D</label><input id="c001BoxD" type="text" readonly></div>',
    '<div class="row"><label>Box H</label><input id="c001BoxH" type="text" readonly></div>',

    '<div class="mini-title">Height Option / \ub192\uc774 \uc635\uc158</div>',
    '<div class="row"><label>Height</label><select id="c001HeightOption"><option selected>Standard</option><option>Tall</option><option>2-Tier</option><option>Custom</option></select></div>',
    '<div class="row" id="c001CustomHeightRow" hidden><label>Custom H</label><input id="c001CustomH" type="number" step="1" value="140"></div>',

    '<div class="mini-title">Handle / \uc190\uc7a1\uc774</div>',
    '<div class="row"><label>Handle</label><select id="c001Handle"><option selected>Center Handle</option></select></div>',

    '<div class="mini-title">Window / \ucc3d\ubb38</div>',
    '<div class="row"><label>Window</label><select id="c001Window"><option selected>None</option><option>Guide Only</option><option>Cutout</option></select></div>',
    '</div>'
  ].join('');

  sizePanel.insertAdjacentElement('afterend', panel);

  panel.querySelectorAll('select, input[type=number]').forEach(control => {
    control.addEventListener('change', () => {
      syncC001PanelFromPreset();
      render(true);
    });
    control.addEventListener('input', () => {
      syncC001PanelFromPreset();
      render(true);
    });
  });

  return panel;
}

function syncC001SizeFields(cfg) {
  const dW = document.getElementById('baseW');
  const dD = document.getElementById('baseD');
  const dH = document.getElementById('panelH');
  if (dW) dW.value = cfg.W;
  if (dD) dD.value = cfg.D;
  if (dH) dH.value = cfg.H;
}

function syncC001PanelDisplays(cfg) {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  };
  setText('c001BoardW', cfg.boardW + ' mm');
  setText('c001BoardD', cfg.boardD + ' mm');
  setText('c001BoardH', cfg.boardH + ' mm');
  setText('c001BoxW', cfg.W + ' mm');
  setText('c001BoxD', cfg.D + ' mm');
  setText('c001BoxH', cfg.H + ' mm');
}

function syncC001PanelFromPreset() {
  const preset = document.getElementById('c001Preset')?.value || 'no3';
  const heightOption = document.getElementById('c001HeightOption')?.value || 'Standard';
  const customRow = document.getElementById('c001CustomHeightRow');
  const customInput = document.getElementById('c001CustomH');
  if (customRow) customRow.hidden = heightOption !== 'Custom';
  const cfg = typeof C001_resolveConfig === 'function'
    ? C001_resolveConfig({ preset, heightOption, customH: customInput?.value, windowMode: document.getElementById('c001Window')?.value })
    : { W: 277, D: 275, H: 140, boardW: 265, boardD: 265, boardH: 5 };
  if (customInput && heightOption !== 'Custom') customInput.value = cfg.H;
  syncC001PanelDisplays(cfg);
  syncC001SizeFields(cfg);
  return cfg;
}

function setC001BaseReadonly(readonly) {
  ['baseW', 'baseD', 'panelH'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.readOnly = !!readonly;
  });
}

function updateC001PanelMode() {
  const isC001 = isC001Selection();
  const panel = ensureC001Panel();
  if (panel) panel.hidden = !isC001;
  setC001BaseReadonly(isC001);
  if (!isC001) {
    if (panel) panel.dataset.activeKey = '';
    return;
  }

  const activeKey = selectedBoxMeta.engineKey + ':' + selectedBoxMeta.variantKey;
  if (panel && panel.dataset.activeKey !== activeKey) {
    const preset = document.getElementById('c001Preset');
    const heightOption = document.getElementById('c001HeightOption');
    const handle = document.getElementById('c001Handle');
    const windowMode = document.getElementById('c001Window');
    if (preset) preset.value = selectedBoxMeta.defaultPreset || 'no3';
    if (heightOption) heightOption.value = 'Standard';
    if (handle) handle.value = 'Center Handle';
    if (windowMode) windowMode.value = 'None';
    panel.dataset.activeKey = activeKey;
  }
  syncC001PanelFromPreset();
}

function setupPanelUi() {
  const optionGrid = document.querySelector('.option-grid');
  const displayBody = optionGrid?.closest('.group-body');
  if (optionGrid && displayBody) {
    optionGrid.innerHTML = [
      '<label><span>\ub208\uae08\uc790</span><input id="showRuler" type="checkbox" checked></label>',
      '<label><span>\uce58\uc218\uc120</span><input id="showDims" type="checkbox" checked></label>',
      '<label><span>\ud328\ub110\uba85</span><input id="showLabels" type="checkbox" checked></label>',
      '<label><span>\uc7ac\ub2e8\uc120</span><input id="showCut" type="checkbox" checked></label>',
      '<label><span>\uc811\ud798\uc120</span><input id="showFolds" type="checkbox" checked></label>',
      '<label><span>\ube14\ub9ac\ub4dc</span><input id="showBleed" type="checkbox" checked></label>',
      '<label><span>\ud0c0\uacf5 \ud45c\uc2dc</span><input id="showPerforation" type="checkbox" checked></label>'
    ].join('');

    Array.from(displayBody.children).forEach(child => {
      if (child !== optionGrid) child.remove();
    });
  }

  const sidebarInner = document.querySelector('.sidebar-inner');
  const hint = document.querySelector('.hint');
  let section = document.getElementById('perforationSettings');
  if (!sidebarInner) {
    updateLegendUi();
    return;
  }

  if (section) {
    section.remove();
  }

  section = document.createElement('details');
  section.id = 'perforationSettings';
  section.className = 'group';
  section.open = true;
  section.hidden = true;
  section.innerHTML = [
    '<summary>\ud0c0\uacf5 \uc124\uc815</summary>',
    '<div class="group-body">',
    '<details class="sub-group perforation-item" data-engines="gbox bbox3" open>',
    '<summary>\ub048\uad6c\uba4d</summary>',
    '<div class="row"><label>\uc0ac\uc6a9</label><input id="stringHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>\uc9c0\ub984</label><input id="holeDia" type="number" step="0.5" value="6"></div>',
    '<div class="row"><label>\uac04\uaca9</label><input id="holeGap" type="number" step="1" value="70"></div>',
    '<div class="row"><label>Y \uc704\uce58</label><input id="holeOffsetY" type="number" step="0.5" value="45"></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="gbox2" open>',
    '<summary>\uc190\uc7a1\uc774 \ud640</summary>',
    '<div class="row"><label>\uc0ac\uc6a9</label><input id="m002HandleHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>\uac00\ub85c</label><input id="m002HandleHoleWidth" type="number" step="0.5" value="25"></div>',
    '<div class="row"><label>\uc138\ub85c</label><input id="m002HandleHoleHeight" type="number" step="0.5" value="25"></div>',
    '<div class="row"><label>\ud328\ub110</label><input type="text" value="Back Insert" readonly></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="rbox4" open>',
    '<summary>\uc190\uc7a1\uc774 \ud640</summary>',
    '<div class="row"><label>\uc0ac\uc6a9</label><input id="r004HandleHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>\uac00\ub85c</label><input id="r004HandleHoleWidth" type="number" step="0.5" value="75"></div>',
    '<div class="row"><label>\uc138\ub85c</label><input id="r004HandleHoleHeight" type="number" step="0.5" value="25"></div>',
    '<div class="row"><label>\ud328\ub110</label><input type="text" value="Side" readonly></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="bbox2" open>',
    '<summary>\ubcd1\uc0c1\ub2e8 \ud640 / Bottle Top Hole</summary>',
    '<div class="row"><label>\uc0ac\uc6a9</label><input id="t002BottleTopHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>\uc9c0\ub984</label><input id="t002BottleTopHoleDia" type="number" step="0.5" value="56"></div>',
    '<div class="row"><label>\uae30\uc900 \ud328\ub110</label><input type="text" value="Bottle Top" readonly></div>',
    '<div class="row"><label>X \uc704\uce58</label><input type="text" value="\uc911\uc559" readonly></div>',
    '<div class="row"><label>Y \uc704\uce58</label><input id="t002BottleTopHoleY" type="number" step="0.5" value="42"></div>',
    '</details>',
    '<details class="sub-group perforation-item" data-engines="bbox2" open>',
    '<summary>\ubcd1\ubaa9 \ud640 / Neck Hole</summary>',
    '<div class="row"><label>\uc0ac\uc6a9</label><input id="t002NeckHoleEnabled" type="checkbox" data-render-input checked></div>',
    '<div class="row"><label>\uc9c0\ub984</label><input id="t002NeckHoleDia" type="number" step="0.5" value="20"></div>',
    '<div class="row"><label>\uae30\uc900 \ud328\ub110</label><input type="text" value="Back" readonly></div>',
    '<div class="row"><label>X \uc704\uce58</label><input type="text" value="\uc911\uc559" readonly></div>',
    '<div class="row"><label>Y \uc704\uce58</label><input id="t002NeckHoleY" type="number" step="0.5" value="35"></div>',
    '</details>',
    '</div>'
  ].join('');

  sidebarInner.insertBefore(section, hint || null);
  ensureSSetPanel();
  ensureC001Panel();
  updateSSetPanelMode();
  updateC001PanelMode();
  updateLegendUi();
}

function updateLegendUi() {
  const legend = document.querySelector('.legend');
  if (!legend) return;
  legend.innerHTML = [
    '<div><span class="ln fold-ln"></span>\uc811\ud798\uc120</div>',
    '<div><span class="ln cut-ln"></span>\uc7ac\ub2e8\uc120</div>',
    '<div><span class="ln perf-ln"></span>\ud0c0\uacf5\uc120</div>',
    '<div><span class="ln bleed-ln"></span>\ube14\ub9ac\ub4dc</div>'
  ].join('');
}

// ============================================================
// UI BINDINGS
// ============================================================
function bindAll() {
  setupPanelUi();

  fetch('./data/boxLibrary.json')
    .then(r => r.json())
    .then(data => {
      BOX_LIBRARY = data;
      initBoxLibrarySelect();
      render(true);
    })
    .catch(() => {
      BOX_LIBRARY = _fallbackLibrary();
      initBoxLibrarySelect();
      render(true);
    });

  document.querySelectorAll('input[type=number]').forEach(
    el => el.addEventListener('change', scheduleRender)
  );
  document.querySelectorAll('input[type=checkbox][data-render-input]').forEach(
    el => el.addEventListener('change', scheduleRender)
  );

  const get = id => document.getElementById(id);

  get('showRuler')?.addEventListener('change', e => { state.showRuler = e.target.checked; render(true); });
  get('showDims')?.addEventListener('change',   e => { state.showDims   = e.target.checked; render(true); });
  get('showCut')?.addEventListener('change',    e => { state.showCut    = e.target.checked; render(true); });
  get('showBleed')?.addEventListener('change',  e => { state.showBleed  = e.target.checked; render(true); });
  get('showPerforation')?.addEventListener('change', e => {
    state.showPerforation = e.target.checked;
    state.showHoles = e.target.checked;
    state.showSlots = e.target.checked;
    render(true);
  });
  get('showFolds')?.addEventListener('change',  e => { state.showFolds  = e.target.checked; render(true); });
  get('showLabels')?.addEventListener('change', e => { state.showLabels = e.target.checked; render(true); });

  get('fitBtn')?.addEventListener('click',     () => fitToScreen());
  get('zoomInBtn')?.addEventListener('click',  () => zoomAt(snapZoom(state.zoom, +1)));
  get('zoomOutBtn')?.addEventListener('click', () => zoomAt(snapZoom(state.zoom, -1)));

  get('downloadSvgBtn')?.addEventListener('click', () => {
    const eng = selectedBoxMeta.engineKey;
    const cfg = eng === 'gbox' ? getCfg()
      : eng === 'gbox2' ? getCfgM002()
      : eng === 'bbox' ? getCfgT001()
      : eng === 'bbox2' ? getCfgT002()
      : eng === 'bbox3' ? getCfgT003()
      : eng === 'bbox4' ? getCfgT004()
      : eng === 'rbox' ? getCfgR001()
      : eng === 'rbox2' ? getCfgR002()
      : eng === 'rbox3' ? getCfgR003()
      : eng === 'rbox4' ? getCfgR004()
      : eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001' ? getCfgS001()
      : eng === 'b001' ? getCfgB001()
      : eng === 'c001' ? getCfgC001()
      : getCfg();

    const dim  = `${cfg.W}x${cfg.D}x${cfg.H}`;
    const name = `PacVu_${eng}_${dim}mm.svg`;
    const svgOut = buildExportSVG(cfg, eng);

    if (!svgOut || !svgOut.trim()) {
      console.warn('[SVG export empty]', { eng, cfg });
      return;
    }

    downloadFile(name, svgOut, 'image/svg+xml');
  });

  get('downloadDxfBtn')?.addEventListener('click', () => {
    const eng = selectedBoxMeta.engineKey;
    const cfg = eng === 'gbox' ? getCfg()
      : eng === 'gbox2' ? getCfgM002()
      : eng === 'bbox' ? getCfgT001()
      : eng === 'bbox2' ? getCfgT002()
      : eng === 'bbox3' ? getCfgT003()
      : eng === 'bbox4' ? getCfgT004()
      : eng === 'rbox' ? getCfgR001()
      : eng === 'rbox2' ? getCfgR002()
      : eng === 'rbox3' ? getCfgR003()
      : eng === 'rbox4' ? getCfgR004()
      : eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001' ? getCfgS001()
      : eng === 'b001' ? getCfgB001()
      : eng === 'c001' ? getCfgC001()
      : getCfg();

    const dim  = `${cfg.W}x${cfg.D}x${cfg.H}`;
    const name = `PacVu_${eng}_${dim}mm.dxf`;
    const dxfOut = buildDXF(cfg, eng);

    if (!dxfOut || !dxfOut.trim()) {
      console.warn('[DXF export empty]', { eng, cfg });
      return;
    }

    downloadFile(name, dxfOut, 'application/dxf');
  });

  get('downloadPdfBtn')?.addEventListener('click', () => {
    const eng = selectedBoxMeta.engineKey;
    const cfg = eng === 'gbox' ? getCfg()
      : eng === 'gbox2' ? getCfgM002()
      : eng === 'bbox' ? getCfgT001()
      : eng === 'bbox2' ? getCfgT002()
      : eng === 'bbox3' ? getCfgT003()
      : eng === 'bbox4' ? getCfgT004()
      : eng === 'rbox' ? getCfgR001()
      : eng === 'rbox2' ? getCfgR002()
      : eng === 'rbox3' ? getCfgR003()
      : eng === 'rbox4' ? getCfgR004()
      : eng === 'sSeries' && selectedBoxMeta.variantKey === 'S001' ? getCfgS001()
      : eng === 'b001' ? getCfgB001()
      : eng === 'c001' ? getCfgC001()
      : getCfg();

    const dim  = `${cfg.W}x${cfg.D}x${cfg.H}`;
    const name = `PacVu_${eng}_${dim}mm.pdf`;
    const pdfOut = buildPDF(cfg, eng);

    if (!pdfOut || !pdfOut.trim()) {
      console.warn('[PDF export empty]', { eng, cfg });
      return;
    }

    downloadFile(name, pdfOut, 'application/pdf');
  });

  const sidebar = get('sidebar');
  get('toggleSidebarBtn')?.addEventListener('click', () => sidebar?.classList.add('collapsed'));
  get('showSidebarBtn')?.addEventListener('click',   () => sidebar?.classList.toggle('collapsed'));

  const host = get('svgHost');
  if (!host) return;

  host.addEventListener('mousedown', e => {
    state.isDragging = true;
    state.dragStartX = e.clientX; state.dragStartY = e.clientY;
    state.startPanX  = state.panX; state.startPanY = state.panY;
    host.classList.add('dragging');
  });
  window.addEventListener('mousemove', e => {
    if (!state.isDragging) return;
    const sv = get('mainSvg'); if (!sv) return;
    const sr = sv.getBoundingClientRect(), vb = sv.viewBox.baseVal;
    const ppm = sr.width / vb.width;
    state.panX = state.startPanX + (e.clientX - state.dragStartX) / ppm;
    state.panY = state.startPanY + (e.clientY - state.dragStartY) / ppm;
    applyTransform();
  });
  window.addEventListener('mouseup', () => { state.isDragging = false; host.classList.remove('dragging'); });
  host.addEventListener('wheel', e => {
    e.preventDefault();
    zoomAt(state.zoom * Math.exp(-e.deltaY * 0.0015));
  }, { passive: false });
  host.addEventListener('dblclick', () => fitToScreen());
  window.addEventListener('resize',  () => fitToScreen());
}

function _fallbackLibrary() {
  return [
    { categoryKey:'mailer', categoryLabel:'04 Mailer box', items:[
      { label:'G-Type Standard', koreanName:'G형 기본형', fefcoCode:'0427',
        engineKey:'gbox', variantKey:'default', defaultDims:{W:235,D:229,H:91} }
    ]},
    { categoryKey:'tuck', categoryLabel:'03 Tuck box', items:[
      { label:'B형 타입 / 기본 칼라박스', koreanName:'B형 타입', fefcoCode:'0471',
        engineKey:'bbox', variantKey:'default', defaultDims:{W:57,D:57,H:177} }
    ]}
  ];
}

// ============================================================
// INIT
// ============================================================
bindAll();
if (window.innerWidth < 768) fitToScreen();
