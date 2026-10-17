# Changelog

Notable changes for each release are recorded here.

## Unreleased

## 0.2.0 - 2026-10-17

### Added

- Dispatch supported ECharts actions from Dash, including legend toggles.
- Register named custom themes and provide accessible chart labels and ARIA
  descriptions.
- Export rendered charts as PNG or SVG.
- Serve NumPy arrays as short-lived binary resources for large ECharts-GL
  datasets, with an opt-in benchmark against `dcc.Graph`.
- Add a searchable interactive chart gallery and live Python option viewer.

### Documentation

- Document binary dataset setup, limits, security considerations, and measured
  benchmark results.

## 0.1.0 - 2026-10-11

### Added

- A Python Dash component for Apache ECharts 5.6+ and 6.x, with typed props,
  responsive rendering, canvas/SVG renderers, and light/dark/custom themes.
- Dash callback properties for chart events, supported ECharts actions, and
  batched streaming data.
- Custom GeoJSON and SVG maps, plus optional ECharts-GL charts.
- Python helpers for option construction and explicitly marked JavaScript
  functions.
- Versioned documentation, runnable examples, and migration guidance.

### Developer tooling

- Cross-platform CI and tag-validated releases with OIDC-based PyPI publishing.
