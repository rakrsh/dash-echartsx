---
name: dash-echartsx-test-runner
description: "Use when adding, running, or debugging tests for dash-echartsx. Covers the current flat pytest suite, uv commands, optional dash_duo browser tests, and build/type/lint checks."
---

# dash-echartsx Test Runner

## Current Layout

```text
tests/
├── conftest.py
├── test_dispatch_actions.py
├── test_events.py
├── test_maps_gl.py
└── test_options.py
```

Keep fast Python tests and `dash_duo` browser tests directly under `tests/`, and name them clearly so they can be selected with pytest. There are no `tests/unit/` or `tests/integration/` directories and no JavaScript test runner configured currently.

`tests/conftest.py` installs a matching ChromeDriver, enables Dash's headless
browser in CI, and supplies Linux WebGL/SwiftShader options. CI runs the
Python/ECharts test matrix on both Ubuntu and Windows. Use the standard
`uv run pytest` command; set `CI=true` to exercise the headless configuration
locally.

## Commands

```sh
uv sync --group dev
npm run build
npm run lint
npm run typecheck
uv run ruff check .
uv run black --check dash_echartsx tests
uv run pytest
```

For one file, run `uv run pytest tests/test_options.py`. For browser tests, install dependencies with `uv sync --group dev`. The shared
conftest handles ChromeDriver and browser options; do not add per-test
driver-installation code.

## Debugging

- Python import/wrapper failure: run `npm run build` and inspect generated files under `dash_echartsx/`.
- Missing component in Dash: verify `dash_echartsx/__init__.py` exposes the class/version and registers the UMD asset.
- Browser bundle runtime error: check that the Dash asset is UMD and React remains external in Vite.
- Browser startup timeout: check the `dash_duo` setup in `tests/conftest.py`, the installed Chrome version, and the browser console before extending wait timeouts.
- Resize failure: assert wrapper dimensions after layout changes and check observer cleanup/frame scheduling.
- Renderer/theme failure: verify the component is remounted for theme/renderer changes and that options are reapplied afterward.
