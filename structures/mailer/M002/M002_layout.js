// ============================================================
// M002_layout.js - SVG-based layout data for G-style Mailer Box 2
// Source geometry extracted from M002 SVG.
// ============================================================

function M002_getLayout(W, D, H) {
  var spec = M002_getSpec(W, D, H);
  var cutElements = [
    `<line x1="338.792" y1="2302.154" x2="564.146" y2="2302.154" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="569.815 2526.09 561.311 2523.256 185.721 2523.256" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M158.792,2496.327c0,14.865,12.064,26.929,26.929,26.929" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="158.792 2496.327 158.792 2319.161 564.146 2313.492" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="1683.831" y1="2526.09" x2="569.815" y2="2526.09" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M564.146,2313.492c3.129,0,5.669-2.54,5.669-5.669s-2.54-5.669-5.669-5.669" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="109.185 2296.484 324.619 2296.484 338.792 2302.154" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1689.5,2302.154c-3.13,0-5.669,2.54-5.669,5.669s2.54,5.669,5.669,5.669" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1695.17,1417.744c-3.13,0-5.669,2.54-5.669,5.669s2.54,5.669,5.669,5.669" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="1689.5 2313.492 2094.854 2319.161 2094.854 2496.327" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M2067.925,2523.256c14.865,0,26.929-12.064,26.929-26.929" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="2067.925 2523.256 1692.335 2523.256 1683.831 2526.09" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="1914.854" y1="2302.154" x2="1689.5" y2="2302.154" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="1914.854" y1="1429.083" x2="1695.17" y2="1429.083" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="2144.461 2296.484 1929.028 2296.484 1914.854 2302.154" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="2144.461 1434.752 1929.028 1434.752 1914.854 1429.083" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="2144.461 2296.484 2144.461 2168.926 2158.634 2165.128 2158.634 2016.817 2144.461 2013.019 2144.461 1718.217 2158.634 1714.419 2158.634 1566.109 2144.461 1562.311 2144.461 1434.752" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="2100.524" y1="1412.075" x2="1695.17" y2="1417.744" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="1686.666" y1="1210.815" x2="2073.595" y2="1210.815" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M2100.524,1237.744c0-14.865-12.064-26.929-26.929-26.929" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="2100.524" y1="1237.744" x2="2100.524" y2="1412.075" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M558.477,1429.083c3.129,0,5.669-2.54,5.669-5.669s-2.54-5.669-5.669-5.669" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="558.477" y1="1417.744" x2="153.123" y2="1412.075" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="338.792" y1="1429.083" x2="558.477" y2="1429.083" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="109.185 1434.752 324.619 1434.752 338.792 1429.083" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="108.504 2296.484 108.504 2169.051 94.331 2165.257 94.331 2017.092 108.504 2013.298 108.504 1718.785 94.331 1714.991 94.331 1566.826 108.504 1563.032 108.504 1435.599" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="153.123" y1="1412.075" x2="153.123" y2="1237.744" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M180.051,1210.815c-14.865,0-26.929,12.064-26.929,26.929" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="180.051" y1="1210.815" x2="566.981" y2="1210.815" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M566.981,1210.815c3.557,0,6.562-2.635,7.026-6.162.464-3.526-1.757-6.849-5.192-7.77l-186.019-49.844" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M358.634,1115.552c0,14.741,9.922,27.672,24.161,31.488" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="358.634" y1="1115.552" x2="358.634" y2="410.33" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M382.796,378.842c-14.239,3.815-24.161,16.747-24.161,31.488" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M382.796,378.842l186.019-49.844c3.435-.92,5.656-4.244,5.192-7.77-.464-3.526-3.469-6.162-7.026-6.162h-154.222" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M366.763,252.506c-4.578,14.653-1.922,30.549,7.171,42.917,9.093,12.368,23.474,19.644,38.825,19.644" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M566.981,105.303c-91.599,0-172.898,59.773-200.218,147.203" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<polyline points="566.981 105.303 566.981 99.634 1686.666 99.634 1686.666 105.303" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1886.883,252.506c-27.319-87.43-108.619-147.203-200.217-147.203" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1840.887,315.067c15.351,0,29.732-7.276,38.825-19.644,9.093-12.368,11.749-28.264,7.171-42.917" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1840.887,315.067h-154.222c-3.557,0-6.562,2.635-7.026,6.162-.464,3.526,1.756,6.85,5.192,7.77l186.019,49.844" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1895.012,410.33c0-14.741-9.923-27.672-24.161-31.488" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<line x1="1895.012" y1="410.33" x2="1895.012" y2="1115.552" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1870.851,1147.04c14.239-3.815,24.161-16.747,24.161-31.488" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`,
    `<path d="M1870.851,1147.04l-186.019,49.844c-3.435.921-5.656,4.244-5.192,7.77.464,3.526,3.469,6.162,7.026,6.162" fill="none" stroke="#cb2026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>`
  ];
  var foldElements = [
    `<line x1="569.815" y1="2526.09" x2="569.815" y2="2307.823" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1683.831" y1="2526.09" x2="1683.831" y2="2307.823" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="564.146" y1="2302.154" x2="1689.5" y2="2302.154" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="558.477" y1="1429.083" x2="1695.169" y2="1429.083" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1929.028" y1="2296.484" x2="1929.028" y2="1434.752" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1914.854" y1="2302.154" x2="1914.854" y2="1429.083" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="338.792" y1="2302.154" x2="338.792" y2="1429.083" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="324.619" y1="2296.484" x2="324.619" y2="1434.752" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="559.894" y1="2302.154" x2="559.894" y2="2161.838" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="559.894" y1="2020.106" x2="559.894" y2="1711.13" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="559.894" y1="1569.398" x2="559.894" y2="1429.083" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1693.752" y1="2302.154" x2="1693.752" y2="2161.838" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1693.752" y1="2020.106" x2="1693.752" y2="1711.13" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1693.752" y1="1569.398" x2="1693.752" y2="1429.083" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1689.5" y1="1210.815" x2="1689.5" y2="1423.413" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="564.146" y1="1210.815" x2="564.146" y2="1423.413" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1679.579" y1="1202.311" x2="574.067" y2="1202.311" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="574.067" y1="1203.728" x2="574.067" y2="322.154" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="574.067" y1="323.571" x2="1679.579" y2="323.571" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1679.579" y1="1203.728" x2="1679.579" y2="322.154" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="566.981" y1="315.067" x2="566.981" y2="105.303" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`,
    `<line x1="1686.666" y1="315.067" x2="1686.666" y2="105.303" fill="none" stroke="#416eb5" stroke-dasharray="5.669 4.535" stroke-miterlimit="11.339" stroke-width=".992"/>`
  ];
  var greenElements = [
    `<path d="M559.894,2161.838c0,3.912,3.175,7.087,7.087,7.087s7.086-3.176,7.086-7.087v-141.732c0-3.912-3.175-7.087-7.086-7.087s-7.087,3.175-7.087,7.087v141.732" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M559.894,1711.13c0,3.912,3.175,7.087,7.087,7.087s7.086-3.175,7.086-7.087v-141.732c0-3.912-3.175-7.087-7.086-7.087s-7.087,3.175-7.087,7.087v141.732" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M1679.579,2161.838c0,3.912,3.175,7.087,7.086,7.087s7.087-3.176,7.087-7.087v-141.732c0-3.912-3.175-7.087-7.087-7.087s-7.086,3.175-7.086,7.087v141.732" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M1679.579,1711.13c0,3.912,3.175,7.087,7.086,7.087s7.087-3.175,7.087-7.087v-141.732c0-3.912-3.175-7.087-7.087-7.087s-7.086,3.175-7.086,7.087v141.732" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<line x1="785.248" y1="1351.13" x2="856.114" y2="1351.13" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<line x1="785.248" y1="1280.264" x2="856.114" y2="1280.264" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M785.248,1280.264c-19.559,0-35.433,15.874-35.433,35.433s15.874,35.433,35.433,35.433" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M856.114,1351.13c19.559,0,35.433-15.874,35.433-35.433s-15.874-35.433-35.433-35.433" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<line x1="1468.398" y1="1351.13" x2="1397.532" y2="1351.13" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<line x1="1468.398" y1="1280.264" x2="1397.532" y2="1280.264" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M1468.398,1351.13c19.559,0,35.433-15.874,35.433-35.433s-15.874-35.433-35.433-35.433" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`,
    `<path d="M1397.532,1280.264c-19.559,0-35.433,15.874-35.433,35.433s15.874,35.433,35.433,35.433" fill="none" stroke="#209050" stroke-miterlimit="11.339" stroke-width="1.276"/>`
  ];
  var bleedElement = `<path d="M1684.172,2533.629H570.156c-.914,0-1.822-.147-2.689-.436l-7.196-2.399H186.061c-19.538,0-35.433-15.896-35.433-35.433l.629-191.147c-4.728.128-35.748.177-42.413-.192-4.696,0-8.504-3.808-8.504-8.504v-120.906l-7.868-2.106c-3.719-.996-6.305-4.365-6.305-8.215v-148.164c0-3.85,2.586-7.219,6.305-8.215l7.868-2.106v-281.459l-7.868-2.106c-3.719-.996-6.305-4.365-6.305-8.215v-148.164c0-3.85,2.586-7.219,6.305-8.215l7.868-2.106v-120.907c0-2.215.847-4.231,2.234-5.745,1.539-2.181,4.079-3.604,6.951-3.604,0,0,25.15-1.87,35.433-1.87v-186.635c0-19.569,15.864-35.433,35.433-35.433h366.252c1.526,0,1.812-2.171.338-2.566l-166.046-44.492c-17.938-4.806-30.465-21.132-30.465-39.701V409.365c0-18.57,12.527-34.896,30.465-39.702l168.125-45.049c1.154-.309.93-2.008-.264-2.008h-135.697c-17.961,0-35.036-8.64-45.677-23.111-10.64-14.472-13.793-33.346-8.437-50.49,13.949-44.64,41.296-82.92,79.084-110.703,35.609-26.18,78.474-41.012,122.304-42.603,1.125-3.379-1.295-5.533,6.947-5.533h1124.075c1.813,0,.928,3.375,1.381,6.656,43.83,1.591,87.87,15.301,123.48,41.481,37.788,27.783,65.135,66.063,79.084,110.703,5.356,17.144,2.203,36.019-8.437,50.49-10.641,14.472-27.716,23.111-45.677,23.111h-137.344c-.941,0-1.117,1.338-.208,1.582l169.717,45.475c17.937,4.807,30.464,21.133,30.464,39.702v705.222c0,18.569-12.527,34.895-30.464,39.701l-166.342,44.959c-1.249.337-1.004,2.176.289,2.176l366.596-.077c19.569,0,35.433,15.864,35.433,35.433v188.33c14.546-.173,35.434.175,35.434.175,4.696,0,8.504,3.808,8.504,8.504v121.033l7.87,2.109c3.718.996,6.303,4.366,6.303,8.214v148.308c0,3.849-2.585,7.218-6.303,8.214l-7.87,2.109v281.752l7.871,2.11c3.717.996,6.302,4.365,6.302,8.214v148.311c0,3.849-2.585,7.217-6.302,8.214l-7.871,2.11v121.033c0,4.696-3.808,8.504-8.504,8.504,0,0-16.662.677-42.035.969l.933,190.37c0,19.537-15.895,35.433-35.433,35.433h-374.21l-7.196,2.399c-.867.289-1.775.436-2.689.436Z" fill="none" stroke="#4151a3" stroke-miterlimit="10" stroke-width="2"/>`;
  var labels = [{"name":"lidFront","x":1126.823,"y":226.561},{"name":"lid","x":1126.823,"y":762.941},{"name":"back","x":1126.823,"y":1324.909},{"name":"base","x":1126.823,"y":1916.23},{"name":"front","x":1126.823,"y":2441.073},{"name":"sidePanelLeft","x":438.792,"y":1910.35},{"name":"sidePanelRight","x":1815.097,"y":1910.35},{"name":"lidDustFlapLeft","x":450.792,"y":252.506},{"name":"lidDustFlapRight","x":1775.835,"y":246.025},{"name":"lidSideFlapLeft","x":450.792,"y":788.675},{"name":"lidSideFlapRight","x":1775.835,"y":793.877},{"name":"backInsertFlapLeft","x":350.997,"y":1324.909},{"name":"backInsertFlapRight","x":1865.352,"y":1325.269},{"name":"bottomLockFlapLeft","x":225.997,"y":1860},{"name":"bottomLockFlapRight","x":2047.079,"y":1860},{"name":"frontInsertFlapLeft","x":350.997,"y":2441.073},{"name":"frontInsertFlapRight","x":1865.352,"y":2441.073}];
  return { cutElements:cutElements, foldElements:foldElements, greenElements:greenElements, bleedElement:bleedElement, labels:labels, bounds:spec.bounds, transform:spec.transform, spec:spec };
}
