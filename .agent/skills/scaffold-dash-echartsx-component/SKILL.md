---
name: scaffold-dash-echartsx-component
description: "Use when adding or expanding a Dash EChartsX React component or public prop. Scaffolds TSX props, Dash exports, generated Python metadata, tests, and a usage example using this repository's Vite and uv build flow."
---

# Scaffold a Dash EChartsX Component

Use this workflow when adding a component or public prop. The primary component is `src/lib/components/DashEChartsX.tsx`.

## Before Editing

1. Read the current TSX component, `src/index.ts`, `package.json`, and `dash_echartsx/__init__.py`.
2. Decide whether the request belongs in the existing chart wrapper or needs a distinct exported component.
3. Confirm ECharts 6 type and modular import names from installed declarations; do not guess module paths.

## Component Rules

- Use functional React components with typed props and JSDoc descriptions for public props.
- Create and dispose ECharts instances in effects with matching cleanup.
- Register only required chart, component, and renderer modules.
- For theme/renderer changes, reinitialize then apply the latest option.
- Resize with `ResizeObserver`, a coalesced animation frame, a window fallback, and complete cleanup.
- Keep Python-facing values JSON-compatible. Never evaluate arbitrary strings as code.
- Do not hand-edit generated files in `dash_echartsx/`.

## Build and Verify

```sh
npm run build
npm run lint
npm run typecheck
uv run pytest
```

Inspect generated wrapper, metadata, PropTypes, and bundle diffs. Add a `dash_duo` test under `tests/` for browser-dependent behavior.
