// ============================================================
// T003_layout.js - SVG-extracted T003 Bottle Box / left layout data
// Depends on T003_spec.js
// ============================================================

function T003_getLayout(W, D, H) {
  const spec = T003_getSpec({ W, D, H });

  const neckHalfArcElement = spec.useNeckLine
    ? '<line x1="404.065" y1="42.52" x2="472.096" y2="42.52" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>'
    : '<path d="M404.065,41.894c0,18.777,15.239,34.642,34.016,34.642s34.016-15.865,34.016-34.642" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>';

  const cutElements = [
    '<polyline points="1294.285 1216.063 1173.813 1338.803 1119.07 1338.803" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M1106.217,1330.602c2.321,4.996,7.345,8.201,12.854,8.201" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M1106.217,1330.602l-53.341-114.8c-.268-.584-.801-1.001-1.433-1.121-.632-.12-1.28.072-1.744.518l-14.06,13.493,9.765,20.94-5.669,131.692h-68.882l-41.953-41.953v-.567,7.087l-35.433,35.433h-74.268l-11.343-164.829c-.054-.779-.561-1.456-1.293-1.726-.732-.27-1.558-.084-2.104.473l-121.039,123.562h-54.743" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M615.823,1330.602c2.321,4.996,7.345,8.201,12.854,8.201" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M615.823,1330.602l-53.341-114.8c-.268-.584-.801-1.001-1.433-1.121-.632-.12-1.28.072-1.744.518l-14.06,13.493,9.765,20.94-5.669,131.692h-68.882l-42.52-42.52h.567v7.087l-35.433,35.433h-76.252l-11.339-165.26-56.693-56.693" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<line x1="1294.285" y1="1216.063" x2="1294.285" y2="377.008" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M1294.285,377.008l-.428-16.553-10.627-11.793-19.971-74.534c-1.659-6.191-7.281-10.505-13.69-10.505" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<polyline points="1250.419 263.622 1063.916 263.622 1058.155 373.65" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M1051.073,373.465c0,1.92,1.531,3.492,3.451,3.542,1.92.05,3.531-1.439,3.631-3.357" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<polyline points="1051.073 373.465 1051.073 134.646 1025.561 134.646 1025.561 140.598" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M1048.522,134.646v-21.26c0-11.735-9.524-21.26-21.26-21.26h-197.575c-11.736,0-21.26,9.524-21.26,21.26v21.26" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<polyline points="831.388 140.598 831.388 134.646 805.876 134.646 805.876 373.465" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M798.794,373.65c.101,1.918,1.711,3.407,3.631,3.357,1.92-.05,3.451-1.622,3.451-3.542" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M798.794,373.65l-5.761-110.028h-182.534c-6.409,0-12.031,4.314-13.69,10.505l-19.971,74.534-8.504,8.504v19.843h-13.323V56.693c0-7.823-6.35-14.173-14.173-14.173" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<line x1="321.152" y1="56.693" x2="321.152" y2="377.008" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M335.325,42.52c-7.824,0-14.173,6.35-14.173,14.173" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<polyline points="321.152 377.008 315.482 377.008 258.789 392.199 258.789 1159.37" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<line x1="540.837" y1="42.52" x2="472.096" y2="42.52" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<line x1="404.065" y1="42.52" x2="335.325" y2="42.52" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    '<path d="M489.104,162.992c0-28.165-22.859-51.024-51.024-51.024s-51.024,22.859-51.024,51.024,22.859,51.024,51.024,51.024,51.024-22.859,51.024-51.024" fill="none" stroke="#ef3c25" stroke-miterlimit="2.613" stroke-width="2"/>',
    neckHalfArcElement
  ];

  const foldElements = [
    '<line x1="1294.285" y1="1216.063" x2="1052.997" y2="1216.063" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="1048.798" y1="1216.063" x2="807.777" y2="1216.063" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="803.654" y1="1216.063" x2="562.604" y2="1216.063" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="558.404" y1="1216.063" x2="315.482" y2="1216.063" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="1036.531" y1="1230.604" x2="928.333" y2="1338.803" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="546.138" y1="1230.604" x2="437.939" y2="1338.803" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="1051.073" y1="373.465" x2="1051.073" y2="1214.646" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="805.876" y1="373.465" x2="805.876" y2="1214.646" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="560.679" y1="377.008" x2="560.679" y2="1214.646" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="315.482" y1="377.008" x2="315.482" y2="1216.063" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="1291.734" y1="377.008" x2="1054.616" y2="377.008" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="802.333" y1="377.008" x2="568.333" y2="377.008" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="1051.073" y1="375.591" x2="805.876" y2="375.591" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="1025.561" y1="137.764" x2="831.388" y2="137.764" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="555.01" y1="377.008" x2="321.152" y2="377.008" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>',
    '<line x1="555.01" y1="283.465" x2="321.152" y2="283.465" fill="none" stroke="#4257a6" stroke-dasharray="3" stroke-miterlimit="10"/>'
  ];

  const bleedElement = '<path d="M307.785,1214.646l.259,4.198,10.4,170.935h89.831l33.285-33.666,33.406,33.019,81.564.637,5.222-140.321-7.922-18.843,2.111-2.488c1.027-1.21,2.962-.947,3.628.493l48.354,104.455s1.528,2.492,1.848,3.102c3.959,7.542,12.785,11.859,21.302,11.767l55.659-.338,112.864-115.035c1.567-1.597,4.285-.586,4.428,1.647l7.114,154.404,87.41.388,29.177-31.334,4.362-4.666,35.482,34.964h77.827l5.676-138.302-8.525-17.871,3.751-3.76c1.633-1.637,3.857-2.118,4.774.005l46.382,102.564s.661,1.486,1.9,3.479c3.875,6.234,12.376,11.734,19.716,11.798l59.319-.518,125.741-127.248V356.311l-12.396-13.64-19.46-68.547s-6.561-19.165-18.993-19.165h-193.64l.777-124.403h-3.885l-.259-21.755s.12-17.596-15.25-23.145c-1.842-.665-3.802-.939-5.761-.936l-205.134.34s-16.673-.34-24.306,12.827c-1.688,2.912-2.956,8.106-2.939,11.471l.097,19.731-3.499.172-.689,126.906-186.951-2.112s-17.612-2.291-22.014,17.911l-17.871,68.633-9.065,8.288V68.656s.813-6.574-.264-14.106c-1.587-11.092-11.145-19.304-22.351-19.304h-75.802s2.067,31.235-21.928,33.151c-.697.056-1.638.161-2.331.259-4.684.664-27.561,1.16-32.201-33.41h-72.691s-19.843-.19-21.583,15.799l-.667,313.899-6.844,5.415,1.554,844.286Z" fill="none" stroke="#4257a6" stroke-miterlimit="10"/>';

  const labels = [
    { name: 'lidTop', x: 928.5, y: 278.6 },
    { name: 'Glue', x: 285, y: 814 },
    { name: 'Front', x: 438.08, y: 830 },
    { name: 'Side(L)', x: 683.28, y: 830 },
    { name: 'Back', x: 928.47, y: 830 },
    { name: 'Side(R)', x: 1172.68, y: 830 },
    { name: 'Upper-Tuck', x: 928.5, y: 127.8 },
    { name: 'Inner', x: 438.08, y: 244.2 },
    { name: 'bottomLock-A', x: 438.08, y: 1262.7 },
    { name: 'bottomLock(L)', x: 683.28, y: 1262.7 },
    { name: 'bottomLock-B', x: 928.47, y: 1262.7 },
    { name: 'bottomLock(R)', x: 1172.68, y: 1262.7 }
  ];

  return {
    spec,
    cutElements,
    foldElements,
    bleedElement,
    labels,
    bounds: spec.bounds,
    transform: spec.transform
  };
}
