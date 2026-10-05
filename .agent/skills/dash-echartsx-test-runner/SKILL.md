---
name: dash-echartsx-test-runner
description: "Use when adding, running, or debugging tests for dash-echartsx. Covers the current flat pytest suite, uv commands, optional dash_duo browser tests, and build/type/lint checks."
---

# dash-echartsx Test Runner

## Current Layout

```text
tests/
└── test_options.py
```

Keep fast Python tests under `tests/`. Browser tests may also live there and use `dash_duo`; name them clearly so they can be selected with pytest. There are no `tests/unit/` or `tests/integration/` directories and no JavaScript test runner configured currently.

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

For one file, run `uv run pytest tests/test_options.py`. For browser tests, install Chrome/WebDriver as required by `dash[testing]`; do not assume a CI display server unless the workflow configures one.

## Debugging

- Python import/wrapper failure: run `npm run build` and inspect generated files under `dash_echartsx/`.
- Missing component in Dash: verify `dash_echartsx/__init__.py` exposes the class/version and registers the UMD asset.
- Browser bundle runtime error: check that the Dash asset is UMD and React remains external in Vite.
- Resize failure: assert wrapper dimensions after layout changes and check observer cleanup/frame scheduling.
- Renderer/theme failure: verify the component is remounted for theme/renderer changes and that options are reapplied afterward.
