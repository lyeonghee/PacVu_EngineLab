// ============================================================
// S001_template.js - S001 source SVG coordinate template
// Generated from reference/S001_298x61x292(cutpath,bleedpath,foldingline).svg
// PacVu workflow: verify cutPath first; foldLine and bleedPath stay candidates until then.
// ============================================================

const S001_TEMPLATE = {
  "code": "S001",
  "name": "Slide Box Set with 3Hole Insert",
  "status": "source_template_not_verified",
  "source": {
    "file": "reference/S001_298x61x292(cutpath,bleedpath,foldingline).svg",
    "productSize": {
      "W": 298,
      "D": 61,
      "H": 292
    },
    "svgWidthMm": 996.265,
    "svgHeightMm": 1245.148,
    "viewBox": {
      "minX": 0,
      "minY": 0,
      "width": 2824.058,
      "height": 3529.554
    },
    "unitToMm": 0.3527778112205911
  },
  "workflow": {
    "currentStep": "cutPath_coordinate_extraction",
    "cutPath": "extracted_from_red_stroke_candidates",
    "foldLine": "candidate_only_until_cutPath_is_verified",
    "bleedPath": "candidate_only_until_cutPath_and_foldLine_are_verified"
  },
  "parts": {
    "outerSleeve": {
      "label": "Outer Sleeve",
      "sourceLabel": "1) Outer Box"
    },
    "innerTray": {
      "label": "Inner Tray",
      "sourceLabel": "2) Inner Tray"
    },
    "insertPad": {
      "label": "Insert Pad",
      "sourceLabel": "3) 3hole Insert"
    }
  },
  "labelAliases": {
    "note": "Short labels are used on the dieline; sourceLabel keeps the full production name.",
    "outerSleeve": {
      "back": "BK",
      "front": "FR",
      "Glue": "GL",
      "lidBackFlap": "LBF",
      "lidFrontFlap": "LFF",
      "lidSideFlap(L)": "LSF-L",
      "lidSideFlap(R)": "LSF-R",
      "bottomLock-A": "BL-A",
      "bottomLock-B": "BL-B",
      "bottomLock(L)": "BL-L",
      "bottomLock(R)": "BL-R"
    },
    "innerTray": {
      "base": "BASE",
      "top_bend": "T-BD",
      "top_in": "T-IN",
      "top_upper": "T-UP",
      "top_out": "T-OUT",
      "bottom_out": "B-OUT",
      "bottom_upper": "B-UP",
      "bottom_in": "B-IN",
      "side-left-upper": "SL-UP",
      "side-Right-upper": "SR-UP",
      "SideInsertFlapLeft": "SI-FL-L",
      "SideInsertFlapRight": "SI-FL-R",
      "SidePanelLeft": "SP-L",
      "SidePanelRight": "SP-R",
      "topLockFlapLeft": "T-LK-L",
      "topInsertFlapLeft": "T-IN-FL-L",
      "topLockFlapRight": "T-LK-R",
      "topInsertFlapRight": "T-IN-FL-R",
      "bottomOuterTuckLeft": "B-OT-L",
      "bottomInnerTuckLeft": "B-IT-L",
      "bottomOuterTuckRight": "B-OT-R",
      "bottomInnerTuckRight": "B-IT-R"
    }
  },
  "layerRules": {
    "cutPath": {
      "stroke": "#cb2026",
      "note": "red source geometry"
    },
    "foldLine": {
      "stroke": "#416eb5",
      "note": "blue dashed source geometry; not verified yet"
    },
    "bleedPath": {
      "strokes": [
        "#4157a6",
        "#3d4fa2",
        "#3c4ca0"
      ],
      "note": "blue outline source geometry; not verified yet"
    },
    "annotation": {
      "note": "dimension text, arrows, legend, and non-production geometry"
    }
  },
  "counts": {
    "totalGeometry": 264,
    "cutPath": 168,
    "foldLine": 34,
    "bleedPath": 3,
    "annotation": 59,
    "byPart": {
      "outerSleeve": {
        "cutPath": 68,
        "foldLine": 10,
        "bleedPath": 1,
        "annotation": 47
      },
      "innerTray": {
        "cutPath": 52,
        "foldLine": 21,
        "bleedPath": 1,
        "annotation": 6
      },
      "insertPad": {
        "cutPath": 48,
        "foldLine": 3,
        "bleedPath": 1,
        "annotation": 6
      }
    }
  },
  "layers": {
    "cutPath": [
      {
        "id": "s001-src-002",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1776.675,1406.984c11.735,0,21.26-9.524,21.26-21.26"
        }
      },
      {
        "id": "s001-src-003",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1308.958,335.487c-.005-14.863-12.066-26.924-26.929-26.929"
        }
      },
      {
        "id": "s001-src-004",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M502.502,308.558c-14.863.005-26.924,12.066-26.929,26.929"
        }
      },
      {
        "id": "s001-src-005",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1517.305,376.589c-14.863.005-26.923,12.067-26.929,26.929"
        }
      },
      {
        "id": "s001-src-006",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2329.431,403.519c-.006-14.863-12.066-26.924-26.929-26.929"
        }
      },
      {
        "id": "s001-src-007",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "475.572",
          "y1": "439.66",
          "x2": "475.572",
          "y2": "335.487"
        }
      },
      {
        "id": "s001-src-008",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1479.953",
          "y1": "499.535",
          "x2": "1479.953",
          "y2": "481.415"
        }
      },
      {
        "id": "s001-src-009",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1471.449",
          "y1": "470.077",
          "x2": "1479.953",
          "y2": "481.415"
        }
      },
      {
        "id": "s001-src-010",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1490.376",
          "y1": "499.424",
          "x2": "1490.376",
          "y2": "403.519"
        }
      },
      {
        "id": "s001-src-011",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1471.449",
          "y1": "470.077",
          "x2": "1471.449",
          "y2": "394.315"
        }
      },
      {
        "id": "s001-src-012",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1308.958,431.676c.429,2.98,2.535,5.456,5.408,6.356,2.873.901,6.016.071,8.069-2.131"
        }
      },
      {
        "id": "s001-src-013",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1479.953,499.535c.065,2.855,2.418,5.128,5.273,5.093,2.855-.034,5.153-2.363,5.15-5.218"
        }
      },
      {
        "id": "s001-src-014",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2339.853",
          "y1": "499.535",
          "x2": "2339.853",
          "y2": "481.415"
        }
      },
      {
        "id": "s001-src-015",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2348.357",
          "y1": "470.077",
          "x2": "2339.853",
          "y2": "481.415"
        }
      },
      {
        "id": "s001-src-016",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2329.43,499.411c-.003,2.856,2.294,5.184,5.15,5.218,2.855.034,5.208-2.238,5.273-5.093"
        }
      },
      {
        "id": "s001-src-017",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2329.43",
          "y1": "499.424",
          "x2": "2329.43",
          "y2": "403.519"
        }
      },
      {
        "id": "s001-src-019",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2348.357",
          "y1": "470.077",
          "x2": "2348.357",
          "y2": "394.315"
        }
      },
      {
        "id": "s001-src-020",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "475.572",
          "y1": "439.66",
          "x2": "399.037",
          "y2": "468.361"
        }
      },
      {
        "id": "s001-src-021",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2092.745,405.021c-6.21.78-10.617,6.454-9.837,12.664.781,6.21,6.454,10.617,12.664,9.836,5.672-.713,9.925-5.534,9.925-11.25s-4.253-10.537-9.925-11.25"
        }
      },
      {
        "id": "s001-src-022",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1724.241,405.021c-6.21.78-10.617,6.454-9.836,12.664.78,6.21,6.454,10.617,12.664,9.836,5.672-.713,9.925-5.534,9.925-11.25s-4.253-10.537-9.925-11.25"
        }
      },
      {
        "id": "s001-src-023",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "469.903",
          "y1": "1263.834",
          "x2": "399.037",
          "y2": "1244.846"
        }
      },
      {
        "id": "s001-src-024",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1308.958",
          "y1": "431.676",
          "x2": "1308.958",
          "y2": "335.487"
        }
      },
      {
        "id": "s001-src-027",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1282.029",
          "y1": "308.558",
          "x2": "502.499",
          "y2": "308.558"
        }
      },
      {
        "id": "s001-src-028",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2302.502",
          "y1": "376.589",
          "x2": "1517.305",
          "y2": "376.589"
        }
      },
      {
        "id": "s001-src-029",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "399.037",
          "y1": "468.361",
          "x2": "399.037",
          "y2": "1244.846"
        }
      },
      {
        "id": "s001-src-034",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2500.927",
          "y1": "437.79",
          "x2": "2500.927",
          "y2": "1263.834"
        }
      },
      {
        "id": "s001-src-036",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1725.651,583.518c-4.694.002-8.503,3.811-8.504,8.504.002,4.694,3.811,8.502,8.504,8.504"
        }
      },
      {
        "id": "s001-src-037",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1725.651,600.527c4.693-.002,8.502-3.811,8.504-8.504"
        }
      },
      {
        "id": "s001-src-038",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1734.155,592.023c-.002-4.694-3.81-8.502-8.504-8.504"
        }
      },
      {
        "id": "s001-src-039",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2102.659,592.023c-.002-4.693-3.81-8.502-8.503-8.504"
        }
      },
      {
        "id": "s001-src-040",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2085.651,592.023c.002,4.694,3.811,8.502,8.505,8.504"
        }
      },
      {
        "id": "s001-src-041",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2094.155,600.527c4.693-.002,8.502-3.811,8.503-8.504"
        }
      },
      {
        "id": "s001-src-042",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2094.155,583.518c-4.694.002-8.503,3.811-8.505,8.504"
        }
      },
      {
        "id": "s001-src-043",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1085.021,592.023c-.002-4.694-3.811-8.503-8.504-8.504"
        }
      },
      {
        "id": "s001-src-044",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1068.014,592.023c.002,4.693,3.81,8.502,8.503,8.504"
        }
      },
      {
        "id": "s001-src-045",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1076.517,600.527c4.694-.002,8.503-3.81,8.504-8.504"
        }
      },
      {
        "id": "s001-src-046",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1076.517,583.518c-4.693.002-8.502,3.811-8.503,8.504"
        }
      },
      {
        "id": "s001-src-047",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M716.517,592.023c-.002-4.694-3.81-8.502-8.504-8.504-4.694.002-8.502,3.811-8.504,8.504"
        }
      },
      {
        "id": "s001-src-048",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M708.014,600.527c4.693-.002,8.502-3.811,8.504-8.504"
        }
      },
      {
        "id": "s001-src-049",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M699.51,592.023c.002,4.693,3.811,8.502,8.504,8.504"
        }
      },
      {
        "id": "s001-src-050",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M892.25,467.314c17.212,0,31.181-13.969,31.181-31.181s-13.969-31.181-31.181-31.181-31.181,13.969-31.181,31.181,13.969,31.181,31.181,31.181"
        }
      },
      {
        "id": "s001-src-051",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2500.927 1263.834 2414.47 1350.291 2428.79 1375.094"
        }
      },
      {
        "id": "s001-src-052",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2410.379,1406.984c7.594,0,14.615-4.053,18.412-10.63,3.797-6.577,3.797-14.683,0-21.26"
        }
      },
      {
        "id": "s001-src-053",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2410.379 1406.984 2340.769 1406.984 2340.769 1272.338 2332.265 1263.834 2245.809 1350.291 2245.809 1385.724"
        }
      },
      {
        "id": "s001-src-054",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2224.549,1406.984c11.735,0,21.26-9.524,21.26-21.26"
        }
      },
      {
        "id": "s001-src-055",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2224.549",
          "y1": "1406.984",
          "x2": "2043.131",
          "y2": "1406.984"
        }
      },
      {
        "id": "s001-src-056",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2021.872,1385.724c0,11.735,9.524,21.26,21.26,21.26"
        }
      },
      {
        "id": "s001-src-057",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2021.872 1385.724 2021.872 1350.291 1797.935 1350.291 1797.935 1385.724"
        }
      },
      {
        "id": "s001-src-058",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1776.675",
          "y1": "1406.984",
          "x2": "1595.257",
          "y2": "1406.984"
        }
      },
      {
        "id": "s001-src-059",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1573.998,1385.724c0,11.735,9.524,21.26,21.26,21.26"
        }
      },
      {
        "id": "s001-src-060",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1573.998 1385.724 1573.998 1350.291 1487.541 1263.834 1479.037 1272.338 1479.037 1406.984 1409.571 1406.984"
        }
      },
      {
        "id": "s001-src-061",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1391.113,1375.174c-3.76,6.579-3.734,14.666.069,21.22,3.803,6.554,10.811,10.59,18.389,10.59"
        }
      },
      {
        "id": "s001-src-062",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1391.113 1375.174 1405.336 1350.291 1314.628 1263.834 1306.124 1272.338 1306.124 1406.984 1252.265 1406.984"
        }
      },
      {
        "id": "s001-src-063",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1231.005,1385.724c0,11.735,9.524,21.26,21.26,21.26"
        }
      },
      {
        "id": "s001-src-064",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1231.005 1385.724 1231.005 1350.291 1001.399 1350.291 1001.399 1385.724"
        }
      },
      {
        "id": "s001-src-065",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M980.139,1406.984c11.735,0,21.26-9.524,21.26-21.26"
        }
      },
      {
        "id": "s001-src-066",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "980.139",
          "y1": "1406.984",
          "x2": "804.391",
          "y2": "1406.984"
        }
      },
      {
        "id": "s001-src-067",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M783.131,1385.724c0,11.735,9.524,21.26,21.26,21.26"
        }
      },
      {
        "id": "s001-src-068",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "783.131 1385.724 783.131 1350.291 553.525 1350.291 553.525 1385.724"
        }
      },
      {
        "id": "s001-src-069",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M532.265,1406.984c11.735,0,21.26-9.524,21.26-21.26"
        }
      },
      {
        "id": "s001-src-070",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "532.265 1406.984 478.407 1406.984 478.407 1272.338 469.903 1263.834"
        }
      },
      {
        "id": "s001-src-072",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1420.378",
          "y1": "355.878",
          "x2": "1454.379",
          "y2": "369.255"
        }
      },
      {
        "id": "s001-src-073",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1471.449,394.315c0-11.042-6.794-21.016-17.07-25.059"
        }
      },
      {
        "id": "s001-src-074",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1390.825",
          "y1": "362.57",
          "x2": "1322.435",
          "y2": "435.901"
        }
      },
      {
        "id": "s001-src-075",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1420.378,355.878c-10.268-4.04-22.028-1.377-29.553,6.693"
        }
      },
      {
        "id": "s001-src-077",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2399.428,355.878l-34.001,13.378c-10.276,4.043-17.07,14.017-17.07,25.059"
        }
      },
      {
        "id": "s001-src-078",
        "kind": "path",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2428.982,362.57c-7.525-8.069-19.286-10.733-29.553-6.693"
        }
      },
      {
        "id": "s001-src-079",
        "kind": "line",
        "layer": "cutPath",
        "part": "outerSleeve",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2500.927",
          "y1": "437.79",
          "x2": "2428.982",
          "y2": "362.57"
        }
      },
      {
        "id": "s001-src-081",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1574.89 2304.303 1518.197 2304.303 1518.197 2295.799"
        }
      },
      {
        "id": "s001-src-082",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1569.221",
          "y1": "2304.303",
          "x2": "1569.221",
          "y2": "1957.976"
        }
      },
      {
        "id": "s001-src-083",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1502.607,1900.366c-2.7,0-5.027,1.906-5.558,4.553-.531,2.647.879,5.304,3.37,6.346"
        }
      },
      {
        "id": "s001-src-084",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1502.607,1900.366h31.181c14.865,0,26.929-12.064,26.929-26.929v-31.181c0-14.865-12.064-26.929-26.929-26.929h-82.205c-14.865,0-26.929,12.064-26.929,26.929v384.094"
        }
      },
      {
        "id": "s001-src-085",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1441.662",
          "y1": "2226.351",
          "x2": "1407.646",
          "y2": "2226.351"
        }
      },
      {
        "id": "s001-src-086",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1453.001,2237.689c0-6.259-5.08-11.339-11.339-11.339"
        }
      },
      {
        "id": "s001-src-087",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1407.646,2226.351v-384.094c0-14.865-12.064-26.929-26.929-26.929h-109.134l-8.504,405.354"
        }
      },
      {
        "id": "s001-src-088",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1251.741,2220.681c0,3.129,2.54,5.669,5.669,5.669s5.669-2.54,5.669-5.669"
        }
      },
      {
        "id": "s001-src-089",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1251.741,2220.681v-225.354c0-5.477-4.445-9.921-9.921-9.921h-9.921v-199.843c0-14.865-12.064-26.929-26.929-26.929"
        }
      },
      {
        "id": "s001-src-092",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "106.544 2304.303 163.237 2304.303 163.237 2295.799"
        }
      },
      {
        "id": "s001-src-093",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "112.213",
          "y1": "2304.303",
          "x2": "112.213",
          "y2": "1842.256"
        }
      },
      {
        "id": "s001-src-094",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M139.142,1815.327c-14.865,0-26.929,12.064-26.929,26.929"
        }
      },
      {
        "id": "s001-src-095",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "139.142",
          "y1": "1815.327",
          "x2": "215.678",
          "y2": "1815.327"
        }
      },
      {
        "id": "s001-src-096",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M242.607,1842.256c0-14.865-12.064-26.929-26.929-26.929"
        }
      },
      {
        "id": "s001-src-097",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "242.607",
          "y1": "1842.256",
          "x2": "242.607",
          "y2": "1873.437"
        }
      },
      {
        "id": "s001-src-098",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M215.678,1900.366c14.865,0,26.929-12.064,26.929-26.929"
        }
      },
      {
        "id": "s001-src-099",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M215.678,1900.366h-36.85c-2.755,0-5.113,1.982-5.585,4.697-.473,2.714,1.076,5.377,3.669,6.308"
        }
      },
      {
        "id": "s001-src-100",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "256.78",
          "y1": "1958.994",
          "x2": "256.78",
          "y2": "2226.351"
        }
      },
      {
        "id": "s001-src-101",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M256.78,1958.994c0-11.333-7.162-21.515-17.828-25.345"
        }
      },
      {
        "id": "s001-src-102",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "256.781",
          "y1": "2226.35",
          "x2": "273.788",
          "y2": "2226.35"
        }
      },
      {
        "id": "s001-src-103",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M228.434,2237.689c0-6.259,5.08-11.339,11.339-11.339h16.241"
        }
      },
      {
        "id": "s001-src-104",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "273.788",
          "y1": "2226.351",
          "x2": "273.788",
          "y2": "1842.256"
        }
      },
      {
        "id": "s001-src-105",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M300.717,1815.327c-14.865,0-26.929,12.064-26.929,26.929"
        }
      },
      {
        "id": "s001-src-106",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M300.717,1815.327h109.134l8.504,405.354c0,3.129,2.54,5.669,5.669,5.669s5.669-2.54,5.669-5.669v-225.354"
        }
      },
      {
        "id": "s001-src-107",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M439.615,1985.406c-5.477,0-9.921,4.445-9.921,9.921"
        }
      },
      {
        "id": "s001-src-108",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "439.615 1985.406 449.536 1985.406 449.536 1785.563"
        }
      },
      {
        "id": "s001-src-115",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1574.89 3018.634 1518.197 3018.634 1518.197 3027.138"
        }
      },
      {
        "id": "s001-src-116",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1574.89 3018.634 1574.89 3374.382 1451.583 3374.382"
        }
      },
      {
        "id": "s001-src-117",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1424.654,3347.453c0,14.865,12.064,26.929,26.929,26.929"
        }
      },
      {
        "id": "s001-src-118",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1424.654",
          "y1": "3347.453",
          "x2": "1424.654",
          "y2": "3037.059"
        }
      },
      {
        "id": "s001-src-119",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1424.654 3037.059 1407.646 3037.059 1407.646 3347.453"
        }
      },
      {
        "id": "s001-src-120",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1380.717,3374.382c14.865,0,26.929-12.064,26.929-26.929"
        }
      },
      {
        "id": "s001-src-121",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1380.717,3374.382h-109.134l-8.504-331.654c0-3.13-2.54-5.669-5.669-5.669s-5.669,2.54-5.669,5.669v165.827"
        }
      },
      {
        "id": "s001-src-122",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1241.819,3218.477c5.477,0,9.921-4.445,9.921-9.921"
        }
      },
      {
        "id": "s001-src-123",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1241.819 3218.477 1231.898 3218.477 1231.898 3320.524 1243.237 3326.193 1243.237 3374.382"
        }
      },
      {
        "id": "s001-src-129",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1574.89",
          "y1": "3018.634",
          "x2": "1574.89",
          "y2": "2304.303"
        }
      },
      {
        "id": "s001-src-130",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "106.544 3018.634 163.237 3018.634 163.237 3027.138"
        }
      },
      {
        "id": "s001-src-131",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M106.544,3029.06v345.322h123.307c14.865,0,26.929-11.711,26.929-26.14v-310.928"
        }
      },
      {
        "id": "s001-src-132",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M256.78,3037.059h17.008v310.394c0,14.865,12.064,26.929,26.929,26.929h109.134l8.504-331.654"
        }
      },
      {
        "id": "s001-src-133",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M429.694,3042.728c0-3.13-2.54-5.669-5.669-5.669s-5.669,2.54-5.669,5.669"
        }
      },
      {
        "id": "s001-src-134",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M429.694,3042.728v165.827c0,5.476,4.445,9.921,9.921,9.921h9.921v102.047l-11.339,5.669v48.189"
        }
      },
      {
        "id": "s001-src-137",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "438.197",
          "y1": "3374.382",
          "x2": "1243.237",
          "y2": "3374.382"
        }
      },
      {
        "id": "s001-src-141",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "106.544",
          "y1": "3029.059",
          "x2": "106.544",
          "y2": "2304.303"
        }
      },
      {
        "id": "s001-src-145",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1453.001",
          "y1": "2237.689",
          "x2": "1453.001",
          "y2": "2267.453"
        }
      },
      {
        "id": "s001-src-146",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1424.654",
          "y1": "2295.799",
          "x2": "1453.001",
          "y2": "2267.453"
        }
      },
      {
        "id": "s001-src-147",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "238.952",
          "y1": "1933.649",
          "x2": "176.911",
          "y2": "1911.371"
        }
      },
      {
        "id": "s001-src-148",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "228.434",
          "y1": "2237.689",
          "x2": "228.434",
          "y2": "2267.453"
        }
      },
      {
        "id": "s001-src-149",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "256.78",
          "y1": "2295.799",
          "x2": "228.434",
          "y2": "2267.453"
        }
      },
      {
        "id": "s001-src-150",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "476.465",
          "y1": "1758.634",
          "x2": "1204.969",
          "y2": "1758.634"
        }
      },
      {
        "id": "s001-src-151",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M476.465,1758.634c-14.865,0-26.929,12.064-26.929,26.929"
        }
      },
      {
        "id": "s001-src-152",
        "kind": "line",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1552.686",
          "y1": "1933.133",
          "x2": "1500.419",
          "y2": "1911.266"
        }
      },
      {
        "id": "s001-src-153",
        "kind": "path",
        "layer": "cutPath",
        "part": "innerTray",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1569.221,1957.976c0-10.837-6.538-20.66-16.535-24.843"
        }
      },
      {
        "id": "s001-src-154",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2206.094 2867.016 2359.165 2867.016 2359.165 2787.646 2359.165 2597.724 2359.165 2518.354 2206.094 2518.354 2206.094 2597.724 2206.094 2787.646 2206.094 2867.016"
        }
      },
      {
        "id": "s001-src-155",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1965.149",
          "y1": "2867.016",
          "x2": "2092.708",
          "y2": "2867.016"
        }
      },
      {
        "id": "s001-src-156",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2106.881",
          "y1": "2852.843",
          "x2": "2106.881",
          "y2": "2787.646"
        }
      },
      {
        "id": "s001-src-157",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2092.708,2867.016c7.824,0,14.173-6.349,14.173-14.173"
        }
      },
      {
        "id": "s001-src-158",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2106.881",
          "y1": "2787.646",
          "x2": "2106.881",
          "y2": "2469.912"
        }
      },
      {
        "id": "s001-src-159",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2075.7",
          "y1": "2271.74",
          "x2": "1982.157",
          "y2": "2271.74"
        }
      },
      {
        "id": "s001-src-160",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1950.976,2469.912v382.93c0,7.824,6.35,14.173,14.173,14.173"
        }
      },
      {
        "id": "s001-src-164",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2656.803",
          "y1": "2135.677",
          "x2": "1908.456",
          "y2": "2135.677"
        }
      },
      {
        "id": "s001-src-165",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1814.913",
          "y1": "2229.221",
          "x2": "1814.913",
          "y2": "2909.536"
        }
      },
      {
        "id": "s001-src-166",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1908.456 2135.677 1894.283 2215.047 1814.913 2229.221"
        }
      },
      {
        "id": "s001-src-167",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2656.803 2135.677 2670.976 2215.047 2750.346 2229.221"
        }
      },
      {
        "id": "s001-src-168",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "1908.456 3003.079 1894.283 2923.709 1814.913 2909.536"
        }
      },
      {
        "id": "s001-src-169",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2656.803 3003.079 2670.976 2923.709 2750.346 2909.536"
        }
      },
      {
        "id": "s001-src-170",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2656.803",
          "y1": "3003.079",
          "x2": "1908.456",
          "y2": "3003.079"
        }
      },
      {
        "id": "s001-src-171",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2750.346",
          "y1": "2229.221",
          "x2": "2750.346",
          "y2": "2909.536"
        }
      },
      {
        "id": "s001-src-172",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1950.976",
          "y1": "2787.646",
          "x2": "2106.881",
          "y2": "2787.646"
        }
      },
      {
        "id": "s001-src-173",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2359.165",
          "y1": "2597.724",
          "x2": "2206.094",
          "y2": "2597.724"
        }
      },
      {
        "id": "s001-src-174",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2206.094",
          "y1": "2787.646",
          "x2": "2359.165",
          "y2": "2787.646"
        }
      },
      {
        "id": "s001-src-175",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2282.629",
          "y1": "2787.646",
          "x2": "2282.629",
          "y2": "2597.724"
        }
      },
      {
        "id": "s001-src-176",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2028.929",
          "y1": "2787.646",
          "x2": "2028.929",
          "y2": "2469.912"
        }
      },
      {
        "id": "s001-src-177",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2075.7",
          "y1": "2271.74",
          "x2": "2075.7",
          "y2": "2399.553"
        }
      },
      {
        "id": "s001-src-178",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "1982.157",
          "y1": "2271.74",
          "x2": "1982.157",
          "y2": "2399.553"
        }
      },
      {
        "id": "s001-src-179",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2106.881",
          "y1": "2469.912",
          "x2": "1950.976",
          "y2": "2469.912"
        }
      },
      {
        "id": "s001-src-180",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1959.207,2444.767l14.718-20.07c5.341-7.283,8.232-16.113,8.232-25.145"
        }
      },
      {
        "id": "s001-src-181",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M1959.207,2444.767c-5.341,7.283-8.232,16.114-8.232,25.145"
        }
      },
      {
        "id": "s001-src-182",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2098.65",
          "y1": "2444.767",
          "x2": "2083.932",
          "y2": "2424.697"
        }
      },
      {
        "id": "s001-src-183",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2106.881,2469.912c0-9.031-2.891-17.862-8.232-25.145"
        }
      },
      {
        "id": "s001-src-184",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2075.7,2399.553c0,9.031,2.891,17.862,8.232,25.145"
        }
      },
      {
        "id": "s001-src-185",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2075.7",
          "y1": "2351.11",
          "x2": "1982.157",
          "y2": "2351.11"
        }
      },
      {
        "id": "s001-src-186",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2600.11",
          "y1": "2867.016",
          "x2": "2472.551",
          "y2": "2867.016"
        }
      },
      {
        "id": "s001-src-187",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2458.377",
          "y1": "2852.843",
          "x2": "2458.377",
          "y2": "2787.646"
        }
      },
      {
        "id": "s001-src-188",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2458.377,2852.843c0,7.824,6.35,14.173,14.173,14.173"
        }
      },
      {
        "id": "s001-src-189",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2458.377",
          "y1": "2787.646",
          "x2": "2458.377",
          "y2": "2469.912"
        }
      },
      {
        "id": "s001-src-190",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2489.559",
          "y1": "2271.74",
          "x2": "2583.102",
          "y2": "2271.74"
        }
      },
      {
        "id": "s001-src-191",
        "kind": "polyline",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "points": "2614.283 2469.912 2614.283 2787.646 2614.283 2852.843"
        }
      },
      {
        "id": "s001-src-192",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2600.11,2867.016c7.824,0,14.173-6.349,14.173-14.173"
        }
      },
      {
        "id": "s001-src-193",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2614.283",
          "y1": "2787.646",
          "x2": "2458.377",
          "y2": "2787.646"
        }
      },
      {
        "id": "s001-src-194",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2536.33",
          "y1": "2787.646",
          "x2": "2536.33",
          "y2": "2469.912"
        }
      },
      {
        "id": "s001-src-195",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2489.559",
          "y1": "2271.74",
          "x2": "2489.559",
          "y2": "2399.553"
        }
      },
      {
        "id": "s001-src-196",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2583.102",
          "y1": "2271.74",
          "x2": "2583.102",
          "y2": "2399.553"
        }
      },
      {
        "id": "s001-src-197",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2458.377",
          "y1": "2469.912",
          "x2": "2614.283",
          "y2": "2469.912"
        }
      },
      {
        "id": "s001-src-198",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2606.051",
          "y1": "2444.767",
          "x2": "2591.334",
          "y2": "2424.697"
        }
      },
      {
        "id": "s001-src-199",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2583.102,2399.553c0,9.031,2.891,17.862,8.232,25.145"
        }
      },
      {
        "id": "s001-src-200",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2614.283,2469.912c0-9.031-2.891-17.862-8.232-25.145"
        }
      },
      {
        "id": "s001-src-201",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2466.609",
          "y1": "2444.767",
          "x2": "2481.327",
          "y2": "2424.697"
        }
      },
      {
        "id": "s001-src-202",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2466.609,2444.767c-5.341,7.283-8.232,16.114-8.232,25.145"
        }
      },
      {
        "id": "s001-src-203",
        "kind": "path",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "d": "M2481.327,2424.697c5.341-7.283,8.232-16.113,8.232-25.145"
        }
      },
      {
        "id": "s001-src-204",
        "kind": "line",
        "layer": "cutPath",
        "part": "insertPad",
        "stroke": "#cb2026",
        "fill": "none",
        "strokeWidth": "2",
        "strokeDasharray": null,
        "source": {
          "x1": "2489.559",
          "y1": "2351.11",
          "x2": "2583.102",
          "y2": "2351.11"
        }
      }
    ],
    "foldLine": [
      {
        "id": "s001-src-018",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1314.628",
          "y1": "436.117",
          "x2": "1487.541",
          "y2": "504.149"
        }
      },
      {
        "id": "s001-src-025",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1314.628",
          "y1": "436.117",
          "x2": "923.431",
          "y2": "436.117"
        }
      },
      {
        "id": "s001-src-026",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "861.069",
          "y1": "436.117",
          "x2": "475.572",
          "y2": "436.117"
        }
      },
      {
        "id": "s001-src-030",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "469.903",
          "y1": "441.786",
          "x2": "469.903",
          "y2": "1263.834"
        }
      },
      {
        "id": "s001-src-031",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1314.628",
          "y1": "436.117",
          "x2": "1314.628",
          "y2": "1263.834"
        }
      },
      {
        "id": "s001-src-032",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1487.541",
          "y1": "504.149",
          "x2": "1487.541",
          "y2": "1263.834"
        }
      },
      {
        "id": "s001-src-033",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "2332.265",
          "y1": "504.149",
          "x2": "2332.265",
          "y2": "1263.834"
        }
      },
      {
        "id": "s001-src-035",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "2332.265",
          "y1": "504.149",
          "x2": "1487.541",
          "y2": "504.149"
        }
      },
      {
        "id": "s001-src-071",
        "kind": "polyline",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "points": "2500.927 1263.834 2332.265 1263.834 1487.541 1263.834 1314.628 1263.834 469.903 1263.834"
        }
      },
      {
        "id": "s001-src-076",
        "kind": "line",
        "layer": "foldLine",
        "part": "outerSleeve",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "2500.927",
          "y1": "437.79",
          "x2": "2332.265",
          "y2": "504.149"
        }
      },
      {
        "id": "s001-src-090",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1424.654",
          "y1": "2295.799",
          "x2": "1518.197",
          "y2": "2295.799"
        }
      },
      {
        "id": "s001-src-091",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1257.41",
          "y1": "2226.351",
          "x2": "1407.646",
          "y2": "2226.351"
        }
      },
      {
        "id": "s001-src-109",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "256.78",
          "y1": "2295.799",
          "x2": "163.237",
          "y2": "2295.799"
        }
      },
      {
        "id": "s001-src-110",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "424.024",
          "y1": "2226.351",
          "x2": "273.788",
          "y2": "2226.351"
        }
      },
      {
        "id": "s001-src-111",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "449.536",
          "y1": "1829.5",
          "x2": "1231.898",
          "y2": "1829.5"
        }
      },
      {
        "id": "s001-src-112",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "449.536",
          "y1": "1985.406",
          "x2": "1231.898",
          "y2": "1985.406"
        }
      },
      {
        "id": "s001-src-113",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "429.694",
          "y1": "2061.941",
          "x2": "1251.741",
          "y2": "2061.941"
        }
      },
      {
        "id": "s001-src-114",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "429.694",
          "y1": "2223.516",
          "x2": "1251.741",
          "y2": "2223.516"
        }
      },
      {
        "id": "s001-src-124",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1424.654",
          "y1": "3027.138",
          "x2": "1518.197",
          "y2": "3027.138"
        }
      },
      {
        "id": "s001-src-125",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1259.481",
          "y1": "3037.059",
          "x2": "1407.646",
          "y2": "3037.059"
        }
      },
      {
        "id": "s001-src-126",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1251.741",
          "y1": "3039.893",
          "x2": "1251.741",
          "y2": "2220.681"
        }
      },
      {
        "id": "s001-src-127",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1407.646",
          "y1": "3037.059",
          "x2": "1407.646",
          "y2": "2226.351"
        }
      },
      {
        "id": "s001-src-128",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "1424.654",
          "y1": "3035.361",
          "x2": "1424.654",
          "y2": "2295.799"
        }
      },
      {
        "id": "s001-src-135",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "256.78",
          "y1": "3027.138",
          "x2": "163.237",
          "y2": "3027.138"
        }
      },
      {
        "id": "s001-src-136",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "424.024",
          "y1": "3037.059",
          "x2": "273.788",
          "y2": "3037.059"
        }
      },
      {
        "id": "s001-src-138",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "449.536",
          "y1": "3218.477",
          "x2": "1231.898",
          "y2": "3218.477"
        }
      },
      {
        "id": "s001-src-139",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "429.694",
          "y1": "3201.468",
          "x2": "1251.741",
          "y2": "3201.468"
        }
      },
      {
        "id": "s001-src-140",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "429.694",
          "y1": "3039.894",
          "x2": "1251.741",
          "y2": "3039.894"
        }
      },
      {
        "id": "s001-src-142",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "429.694",
          "y1": "3042.728",
          "x2": "429.694",
          "y2": "2220.681"
        }
      },
      {
        "id": "s001-src-143",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "273.789",
          "y1": "3036.138",
          "x2": "273.789",
          "y2": "2226.915"
        }
      },
      {
        "id": "s001-src-144",
        "kind": "line",
        "layer": "foldLine",
        "part": "innerTray",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "256.78",
          "y1": "3035.966",
          "x2": "256.78",
          "y2": "2295.799"
        }
      },
      {
        "id": "s001-src-161",
        "kind": "polyline",
        "layer": "foldLine",
        "part": "insertPad",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "points": "2670.976 2923.709 1894.283 2923.709 1894.283 2215.047"
        }
      },
      {
        "id": "s001-src-162",
        "kind": "line",
        "layer": "foldLine",
        "part": "insertPad",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "2670.976",
          "y1": "2215.047",
          "x2": "1894.283",
          "y2": "2215.047"
        }
      },
      {
        "id": "s001-src-163",
        "kind": "line",
        "layer": "foldLine",
        "part": "insertPad",
        "stroke": "#416eb5",
        "fill": "none",
        "strokeWidth": ".992",
        "strokeDasharray": "5.669 4.535",
        "source": {
          "x1": "2670.976",
          "y1": "2215.047",
          "x2": "2670.976",
          "y2": "2923.709"
        }
      }
    ],
    "bleedPath": [
      {
        "id": "s001-src-080",
        "kind": "path",
        "layer": "bleedPath",
        "part": "outerSleeve",
        "stroke": "#4157a6",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "d": "M411.915,1257.235l53.848,14.428,4.403,4.402v131.123c0,4.696,3.807,8.504,8.504,8.504h53.858c16.412,0,29.764-13.352,29.764-29.764v-26.929h212.599v26.929c0,16.412,13.352,29.764,29.764,29.764h175.748c16.412,0,29.764-13.352,29.764-29.764v-26.929h212.599v26.929c0,16.412,13.352,29.764,29.764,29.764h53.858c4.697,0,8.504-3.808,8.504-8.504v-131.123l.143-.143,79.878,76.135-10.913,19.093s-.004.005-.005.008c-5.247,9.18-5.21,20.563.096,29.708,5.306,9.146,15.17,14.826,25.744,14.826h69.467c4.697,0,8.504-3.808,8.504-8.504v-131.123l77.953,77.953v31.91c0,16.412,13.352,29.764,29.764,29.764h181.417c16.412,0,29.764-13.352,29.764-29.764v-26.929h206.929v26.929c0,16.412,13.353,29.764,29.765,29.764h181.417c16.412,0,29.764-13.352,29.764-29.764v-31.91l77.953-77.953v131.123c0,4.696,3.808,8.504,8.504,8.504h69.609c10.6,0,20.477-5.702,25.775-14.882,5.3-9.179,5.3-20.583,0-29.764-.003-.005-.006-.009-.009-.014l-11.049-19.137,81.844-81.843c.07-.07.131-.147.198-.219.122-.131.246-.26.36-.398.099-.12.186-.246.277-.37.073-.099.151-.196.219-.298.09-.134.168-.273.25-.411.06-.101.123-.199.179-.303.073-.136.135-.276.2-.415.053-.114.11-.225.158-.341.055-.132.099-.266.147-.4.046-.128.095-.255.135-.386.04-.132.069-.266.103-.4.034-.136.072-.27.1-.409.03-.151.048-.304.07-.456.017-.123.041-.243.053-.367.028-.279.042-.559.042-.839V437.994c0-.092-.011-.181-.014-.272-.005-.16-.01-.32-.024-.48-.012-.132-.03-.261-.048-.391-.019-.144-.039-.288-.066-.431-.026-.136-.057-.27-.089-.404-.032-.135-.065-.269-.103-.402-.039-.134-.084-.266-.129-.397-.045-.131-.091-.261-.143-.39-.051-.127-.107-.251-.164-.375-.059-.128-.118-.256-.184-.381-.063-.121-.131-.239-.2-.357-.071-.121-.141-.241-.218-.359-.079-.12-.163-.236-.247-.352-.078-.107-.155-.215-.239-.32-.098-.123-.203-.239-.308-.357-.062-.07-.117-.143-.182-.211l-71.945-75.219c-.037-.039-.078-.071-.116-.109-9.847-10.396-25.356-13.866-38.696-8.619l-34.002,13.378c-13.435,5.286-22.46,18.537-22.46,32.973v72.928l-1.919,2.558v-66.283s0-.001,0-.002,0-.001,0-.002c-.008-19.529-15.901-35.423-35.43-35.43h-785.203c-19.529.007-35.423,15.901-35.43,35.43,0,0,0,0,0,.001s0,0,0,.001v66.281l-1.918-2.558v-72.928c0-14.436-9.026-27.687-22.46-32.973l-34.001-13.378s-.009-.003-.013-.004c-13.409-5.268-29.016-1.738-38.852,8.79-.007.007-.014.013-.021.021l-67.144,71.995v-93.278s0,0,0-.001,0,0,0-.001c-.007-19.529-15.901-35.423-35.43-35.43H502.761c-19.529.007-35.423,15.901-35.43,35.43h0v98.283l-71.018,26.632c-.041.015-.079.036-.12.052-.167.066-.33.138-.492.213-.102.048-.204.095-.303.146-.137.071-.27.147-.402.225-.117.068-.233.137-.346.21-.106.069-.207.143-.31.217-.127.091-.254.183-.375.28-.084.068-.164.14-.245.21-.127.111-.253.222-.373.339-.075.074-.146.152-.218.228-.113.12-.226.239-.332.365-.078.092-.149.188-.223.284-.09.116-.18.232-.264.352-.081.117-.156.24-.231.361-.065.105-.132.209-.193.318-.079.14-.149.284-.22.429-.048.098-.098.195-.142.295-.066.15-.125.304-.182.458-.039.104-.08.207-.115.313-.048.145-.089.294-.129.442-.034.124-.068.248-.096.373-.029.129-.051.26-.074.391-.027.153-.052.307-.07.462-.013.109-.021.22-.03.33-.014.179-.024.359-.027.539,0,.043-.007.085-.007.129v776.484c0,.044.006.086.007.13.003.181.013.361.027.541.008.108.016.215.029.322.019.163.046.324.074.485.021.122.042.245.069.365.031.137.067.272.104.407.038.138.076.277.12.412.038.115.082.228.125.341.055.146.111.292.174.435.046.105.098.206.149.309.07.142.139.283.217.42.06.106.125.208.189.312.077.125.154.249.238.37.079.114.165.224.25.334.078.102.155.204.238.302.101.12.209.234.316.348.077.081.151.164.231.242.119.116.244.226.37.336.08.069.158.14.24.207.127.102.259.198.391.293.093.067.186.135.281.198.124.081.251.156.38.231.117.068.233.137.354.199.112.058.228.112.344.166.146.068.292.134.443.194.1.04.203.076.305.112.17.06.341.117.515.166.042.012.081.028.123.04l14.817,3.97"
        }
      },
      {
        "id": "s001-src-263",
        "kind": "path",
        "layer": "bleedPath",
        "part": "innerTray",
        "stroke": "#3d4fa2",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "d": "M1580.725,3012.499v-708.557c0-2.596-1.167-4.916-3-6.476v-339.45c0-14.316-8.528-27.136-21.727-32.674-.01-.004-.02-.01-.03-.014l-39.241-16.417h17.061c19.538,0,35.434-15.895,35.434-35.433v-31.181c0-19.538-15.896-35.433-35.434-35.433h-82.204c-19.538,0-35.434,15.895-35.434,35.433,0-19.538-15.895-35.433-35.433-35.433h-109.134c-4.627,0-8.405,3.7-8.502,8.326l-3.665,174.711c-2.335-7.498-9.34-12.957-17.596-12.957h-1.418v-191.339c0-19.538-15.895-35.433-35.433-35.433H476.465c-19.538,0-35.434,15.895-35.434,35.433v191.339h-1.417c-.294,0-.584.015-.871.044-7.873.371-14.475,5.682-16.726,12.914l-3.665-174.712c-.097-4.626-3.875-8.326-8.502-8.326h-109.134c-19.538,0-35.434,15.895-35.434,35.433v116.738c0-14.908-9.427-28.31-23.458-33.348l-46.717-16.776h20.569c19.538,0,35.434-15.895,35.434-35.433v-31.181c0-19.538-15.896-35.433-35.434-35.433h-76.535c-19.538,0-35.433,15.895-35.433,35.433v454.038c-3.3,1.169-5.669,4.308-5.669,8.01v724.737c0,.007,0,.013,0,.019v345.322c0,4.696,3.808,8.504,8.504,8.504h123.307c19.538,0,35.434-15.541,35.434-34.645v-.789c0,19.538,15.896,35.434,35.434,35.434h109.134c4.611,0,8.383-3.676,8.501-8.286l4.088-159.426c2.667,6.895,9.35,11.806,17.175,11.806h1.417v88.288l-6.637,3.318c-2.882,1.44-4.701,4.386-4.701,7.606v48.189c0,4.696,3.808,8.504,8.504,8.504h805.039c4.696,0,8.504-3.808,8.504-8.504v-48.189c0-3.221-1.82-6.166-4.701-7.606l-6.638-3.318v-88.288h1.418c.294,0,.585-.015.871-.044,7.445-.351,13.737-5.126,16.304-11.762l4.088,159.426c.118,4.61,3.89,8.286,8.501,8.286h109.134c19.538,0,35.433-15.896,35.433-35.434,0,19.538,15.896,35.434,35.434,35.434h123.307c4.696,0,8.504-3.808,8.504-8.504v-355.748c0-2.435-1.029-4.625-2.669-6.175Z"
        }
      },
      {
        "id": "s001-src-264",
        "kind": "path",
        "layer": "bleedPath",
        "part": "insertPad",
        "stroke": "#3c4ca0",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "d": "M2656.802,3010.319h-748.346c-4.12,0-7.647-2.953-8.371-7.009l-13.132-73.535-73.536-13.132c-4.056-.724-7.009-4.251-7.009-8.371v-680.315c0-4.12,2.953-7.647,7.009-8.371l73.536-13.131,13.132-73.536c.724-4.056,4.251-7.009,8.371-7.009h748.346c4.12,0,7.647,2.953,8.371,7.009l13.132,73.536,73.536,13.131c4.056.724,7.009,4.251,7.009,8.371v680.315c0,4.12-2.953,7.647-7.009,8.371l-73.536,13.132-13.132,73.535c-.724,4.056-4.251,7.009-8.371,7.009Z"
        }
      }
    ],
    "annotation": [
      {
        "id": "s001-src-001",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#231f20",
        "fill": "none",
        "strokeWidth": ".216",
        "strokeDasharray": null,
        "source": {
          "x1": "537.187",
          "y1": "90.851",
          "x2": "540.021",
          "y2": "90.001"
        }
      },
      {
        "id": "s001-src-205",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb214e",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "468.512",
          "y1": "438.271",
          "x2": "202.863",
          "y2": "438.271"
        }
      },
      {
        "id": "s001-src-206",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb214e",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "475.572 438.271 465.623 434.206 467.984 438.271 465.623 442.336 475.572 438.271"
        }
      },
      {
        "id": "s001-src-207",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#3951a2",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": "4 4",
        "source": {
          "x1": "463.415",
          "y1": "444.815",
          "x2": "238.273",
          "y2": "498.302"
        }
      },
      {
        "id": "s001-src-208",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#3951a2",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "470.285 443.183 459.665 441.527 462.902 444.937 461.544 449.437 470.285 443.183"
        }
      },
      {
        "id": "s001-src-209",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#4151a3",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "460.341",
          "y1": "432.522",
          "x2": "311.739",
          "y2": "401.534"
        }
      },
      {
        "id": "s001-src-210",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#4151a3",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "467.253 433.963 458.343 427.952 459.824 432.414 456.683 435.911 467.253 433.963"
        }
      },
      {
        "id": "s001-src-211",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "476.94",
          "y1": "944.992",
          "x2": "1307.046",
          "y2": "945.022"
        }
      },
      {
        "id": "s001-src-212",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "469.88 944.992 479.829 949.058 477.468 944.992 479.829 940.928 469.88 944.992"
        }
      },
      {
        "id": "s001-src-213",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1314.106 945.022 1304.157 949.087 1306.518 945.022 1304.157 940.957 1314.106 945.022"
        }
      },
      {
        "id": "s001-src-214",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1322.209",
          "y1": "944.992",
          "x2": "1480.48",
          "y2": "944.992"
        }
      },
      {
        "id": "s001-src-215",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1315.149 944.992 1325.098 949.057 1322.737 944.992 1325.098 940.927 1315.149 944.992"
        }
      },
      {
        "id": "s001-src-216",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1487.541 944.992 1477.592 949.057 1479.953 944.992 1477.592 940.927 1487.541 944.992"
        }
      },
      {
        "id": "s001-src-217",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1229.605",
          "y1": "442.658",
          "x2": "1229.605",
          "y2": "1255.788"
        }
      },
      {
        "id": "s001-src-218",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1229.605 435.598 1225.54 445.547 1229.605 443.186 1233.669 445.547 1229.605 435.598"
        }
      },
      {
        "id": "s001-src-219",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1229.605 1262.849 1225.54 1252.9 1229.605 1255.261 1233.67 1252.9 1229.605 1262.849"
        }
      },
      {
        "id": "s001-src-220",
        "kind": "line",
        "layer": "annotation",
        "part": "innerTray",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "436.754",
          "y1": "2763.114",
          "x2": "1244.679",
          "y2": "2763.114"
        }
      },
      {
        "id": "s001-src-221",
        "kind": "polygon",
        "layer": "annotation",
        "part": "innerTray",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "429.694 2763.114 439.643 2767.179 437.282 2763.114 439.643 2759.049 429.694 2763.114"
        }
      },
      {
        "id": "s001-src-222",
        "kind": "polygon",
        "layer": "annotation",
        "part": "innerTray",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1251.74 2763.114 1241.791 2767.18 1244.152 2763.114 1241.791 2759.05 1251.74 2763.114"
        }
      },
      {
        "id": "s001-src-223",
        "kind": "line",
        "layer": "annotation",
        "part": "insertPad",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1900.574",
          "y1": "2884.1",
          "x2": "2663.832",
          "y2": "2884.106"
        }
      },
      {
        "id": "s001-src-224",
        "kind": "polygon",
        "layer": "annotation",
        "part": "insertPad",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1893.514 2884.1 1903.463 2888.166 1901.102 2884.1 1903.463 2880.036 1893.514 2884.1"
        }
      },
      {
        "id": "s001-src-225",
        "kind": "polygon",
        "layer": "annotation",
        "part": "insertPad",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2670.893 2884.106 2660.944 2888.171 2663.305 2884.106 2660.944 2880.041 2670.893 2884.106"
        }
      },
      {
        "id": "s001-src-226",
        "kind": "line",
        "layer": "annotation",
        "part": "innerTray",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1131.173",
          "y1": "2233.654",
          "x2": "1131.173",
          "y2": "3031.668"
        }
      },
      {
        "id": "s001-src-227",
        "kind": "polygon",
        "layer": "annotation",
        "part": "innerTray",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1131.173 2226.593 1127.108 2236.542 1131.173 2234.181 1135.238 2236.542 1131.173 2226.593"
        }
      },
      {
        "id": "s001-src-228",
        "kind": "polygon",
        "layer": "annotation",
        "part": "innerTray",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1131.173 3038.729 1127.107 3028.779 1131.173 3031.14 1135.237 3028.779 1131.173 3038.729"
        }
      },
      {
        "id": "s001-src-229",
        "kind": "line",
        "layer": "annotation",
        "part": "insertPad",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2403.772",
          "y1": "2219.706",
          "x2": "2403.762",
          "y2": "2914.582"
        }
      },
      {
        "id": "s001-src-230",
        "kind": "polygon",
        "layer": "annotation",
        "part": "insertPad",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2403.772 2212.645 2399.707 2222.594 2403.772 2220.234 2407.836 2222.594 2403.772 2212.645"
        }
      },
      {
        "id": "s001-src-231",
        "kind": "polygon",
        "layer": "annotation",
        "part": "insertPad",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2403.762 2921.643 2399.696 2911.693 2403.762 2914.054 2407.826 2911.694 2403.762 2921.643"
        }
      },
      {
        "id": "s001-src-232",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#1c1517",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2232.913",
          "y1": "512.598",
          "x2": "2232.923",
          "y2": "1256.768"
        }
      },
      {
        "id": "s001-src-233",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2232.913 505.538 2228.848 515.487 2232.913 513.126 2236.978 515.487 2232.913 505.538"
        }
      },
      {
        "id": "s001-src-234",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#1c1517",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2232.923 1263.828 2228.857 1253.879 2232.923 1256.24 2236.987 1253.879 2232.923 1263.828"
        }
      },
      {
        "id": "s001-src-235",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "552.363",
          "y1": "1406.178",
          "x2": "569.751",
          "y2": "1423.566"
        }
      },
      {
        "id": "s001-src-236",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "547.37 1401.185 551.531 1411.095 552.736 1406.551 557.28 1405.347 547.37 1401.185"
        }
      },
      {
        "id": "s001-src-237",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1795.099",
          "y1": "1409.494",
          "x2": "1812.487",
          "y2": "1426.883"
        }
      },
      {
        "id": "s001-src-238",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1790.106 1404.502 1794.267 1414.412 1795.472 1409.868 1800.015 1408.663 1790.106 1404.502"
        }
      },
      {
        "id": "s001-src-239",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2429.401",
          "y1": "1404.936",
          "x2": "2446.789",
          "y2": "1422.325"
        }
      },
      {
        "id": "s001-src-240",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2424.408 1399.944 2428.569 1409.854 2429.774 1405.31 2434.317 1404.105 2424.408 1399.944"
        }
      },
      {
        "id": "s001-src-241",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2244.417",
          "y1": "1407.94",
          "x2": "2261.806",
          "y2": "1425.329"
        }
      },
      {
        "id": "s001-src-242",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2239.425 1402.948 2243.585 1412.858 2244.791 1408.314 2249.334 1407.109 2239.425 1402.948"
        }
      },
      {
        "id": "s001-src-243",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "995.201",
          "y1": "1408.993",
          "x2": "1012.59",
          "y2": "1426.381"
        }
      },
      {
        "id": "s001-src-244",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "990.209 1404 994.369 1413.91 995.575 1409.366 1000.118 1408.161 990.209 1404"
        }
      },
      {
        "id": "s001-src-245",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "786.354",
          "y1": "1406.178",
          "x2": "768.965",
          "y2": "1423.566"
        }
      },
      {
        "id": "s001-src-246",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "791.346 1401.185 781.436 1405.346 785.98 1406.551 787.185 1411.095 791.346 1401.185"
        }
      },
      {
        "id": "s001-src-247",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1230.572",
          "y1": "1404.624",
          "x2": "1213.184",
          "y2": "1422.012"
        }
      },
      {
        "id": "s001-src-248",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1235.565 1399.632 1225.655 1403.792 1230.199 1404.997 1231.403 1409.541 1235.565 1399.632"
        }
      },
      {
        "id": "s001-src-249",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1387.436",
          "y1": "1401.763",
          "x2": "1370.048",
          "y2": "1419.152"
        }
      },
      {
        "id": "s001-src-250",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1392.429 1396.771 1382.519 1400.931 1387.063 1402.137 1388.268 1406.68 1392.429 1396.771"
        }
      },
      {
        "id": "s001-src-251",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1575.729",
          "y1": "1407.272",
          "x2": "1558.341",
          "y2": "1424.66"
        }
      },
      {
        "id": "s001-src-252",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1580.721 1402.279 1570.812 1406.44 1575.356 1407.645 1576.56 1412.188 1580.721 1402.279"
        }
      },
      {
        "id": "s001-src-253",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2023.993",
          "y1": "1407.272",
          "x2": "2006.605",
          "y2": "1424.66"
        }
      },
      {
        "id": "s001-src-254",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2028.986 1402.279 2019.076 1406.44 2023.62 1407.645 2024.825 1412.188 2028.986 1402.279"
        }
      },
      {
        "id": "s001-src-255",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2420.453",
          "y1": "347.586",
          "x2": "2430.734",
          "y2": "324.95"
        }
      },
      {
        "id": "s001-src-256",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2417.533 354.015 2425.349 346.637 2420.671 347.105 2417.947 343.275 2417.533 354.015"
        }
      },
      {
        "id": "s001-src-257",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1468.697",
          "y1": "370.67",
          "x2": "1478.978",
          "y2": "348.034"
        }
      },
      {
        "id": "s001-src-258",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1465.777 377.099 1473.593 369.722 1468.915 370.19 1466.19 366.36 1465.777 377.099"
        }
      },
      {
        "id": "s001-src-259",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "2350.134",
          "y1": "372.851",
          "x2": "2339.853",
          "y2": "350.215"
        }
      },
      {
        "id": "s001-src-260",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "2353.054 379.28 2352.641 368.54 2349.916 372.371 2345.239 371.902 2353.054 379.28"
        }
      },
      {
        "id": "s001-src-261",
        "kind": "line",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": "#eb2128",
        "fill": "none",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "x1": "1392.44",
          "y1": "352.792",
          "x2": "1382.159",
          "y2": "330.155"
        }
      },
      {
        "id": "s001-src-262",
        "kind": "polygon",
        "layer": "annotation",
        "part": "outerSleeve",
        "stroke": null,
        "fill": "#eb2128",
        "strokeWidth": null,
        "strokeDasharray": null,
        "source": {
          "points": "1395.36 359.22 1394.947 348.48 1392.222 352.311 1387.545 351.842 1395.36 359.22"
        }
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.S001_TEMPLATE = S001_TEMPLATE;
}
