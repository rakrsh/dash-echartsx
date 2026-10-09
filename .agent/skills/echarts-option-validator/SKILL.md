---
name: echarts-option-validator
description: "Use when reviewing Apache ECharts options, chart series, themes, renderers, datasets, or registered maps for dash-echartsx. Checks ECharts 6 option structure, modular imports, Dash JSON compatibility, and unsafe JavaScript serialization."
---

# Validate ECharts Options

Review Python-supplied options and React module registrations against ECharts 6 and the current component API.

## Checks

1. Identify each `series[].type`; verify its chart module is registered from `echarts/charts` in `src/lib/components/DashEChartsX.tsx`.
2. Verify required axes/components (grid, title, legend, tooltip, visual map, data zoom, etc.) are registered from `echarts/components`.
3. Verify the renderer is registered from `echarts/renderers`; accepted values are `canvas` and `svg`.
4. Keep options and custom themes JSON-serializable. Do not promise plain JSON callbacks or execute Python strings as JavaScript.
5. For geographic charts, verify map names are registered with ECharts. Do not assume coordinate/projection conventions without checking the map data contract.
6. Preserve caller-owned data; document any normalization or defaulting.

## Verification

- Check installed ECharts 6 declarations for uncertain option fields.
- Add focused Python helper tests as needed.
- For runtime behavior, use a Dash `dash_duo` test and assert the expected canvas/SVG node and absence of browser errors.
- Reuse the ChromeDriver and browser setup in `tests/conftest.py`; CI runs browser tests headlessly on Ubuntu and Windows.
- Run `npm run build`, `npm run typecheck`, `npm run lint`, and `uv run pytest`.

Report findings as `path | issue | evidence | correction`. Do not rewrite options during an audit-only request.
