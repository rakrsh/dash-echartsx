# GitHub Copilot Instructions — dash-echartsx

These repository-wide rules describe the current Dash/EChartsX architecture.
See [AI_CONTEXT.md](AI_CONTEXT.md) for data flow and `.agent/skills/` plus
`.github/skills/` for task-specific workflows. Use the
`echarts-option-generator` skill when generating or validating option payloads.

## Project Invariants

1. **Chart lifecycle:** Initialize ECharts only in `useEffect`; always dispose the instance in cleanup. Pair observers/listeners and scheduled frames with cleanup.
2. **Dash bridge:** Send client state through `setProps({ ... })` only when `setProps` exists.
3. **Prop documentation:** Document public TSX props with JSDoc. `npm run build` generates component metadata, Python wrappers, and PropTypes from TSX.
4. **Options:** Keep option/theme data JSON-compatible. Never evaluate arbitrary Python strings as JavaScript callbacks.
5. **Source of truth:** React source is `src/lib/components/`, exports are in `src/index.ts`, Python helpers are in `dash_echartsx/`, and tests are in `tests/`. Generated bundles, wrappers, metadata, and `proptypes.js` must be regenerated with `npm run build`, not hand-edited.
6. **Dash assets:** Register only the UMD file in `dash_echartsx/__init__.py`; keep React external in the Vite UMD build.
7. **Responsive sizing:** Do not hardcode pixel dimensions. Observe the wrapper, coalesce resize notifications, skip zero-sized containers, and clean up all pending work.
8. **Engine props:** Supported renderer values are `canvas` and `svg`; supported themes are `light`, `dark`, or a custom JSON object.

## Verification

```sh
uv sync --group dev
npm ci
npm run build
npm run lint
npm run typecheck
uv run ruff check .
uv run black --check dash_echartsx tests
uv run pytest
```

`npm test` runs JavaScript utility tests. Browser tests use `dash_duo` from
`dash[testing]` in `tests/`.
The shared Selenium configuration is in `tests/conftest.py`: it installs a
matching ChromeDriver, enables headless mode when `CI` is set, and configures
Linux WebGL/SwiftShader. The CI matrix tests Python 3.10–3.14 with supported
ECharts versions on Ubuntu, macOS, and Windows. Use the standard `uv run
pytest` command; set `CI=true` to reproduce headless CI behavior locally.

## Skills

- `scaffold-dash-echartsx-component` for a new component or public prop.
- `echarts-option-validator` for option/module/theme/map reviews.
- `dash-duo-test-generator` for browser-level chart rendering and prop updates.
- `dash-echartsx-test-runner` for the current Python and browser test layout.
