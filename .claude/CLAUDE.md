# CLAUDE.md — dash-echartsx

## Project Shape

- React component: `src/lib/components/DashEChartsX.tsx`; export: `src/index.ts`.
- ECharts option, theme, renderer, and responsive lifecycle are managed by the functional React component.
- `npm run build` generates UMD/ES bundles and Python wrapper metadata in `dash_echartsx/`.
- Python helpers live in `dash_echartsx/utils.py`; tests live directly in `tests/`.

## Invariants

1. Initialize ECharts in an effect and dispose it in cleanup.
2. Disconnect resize observers/listeners and cancel scheduled frames.
3. Keep public prop docs in TSX; do not hand-edit generated wrappers/bundles.
4. Guard every Dash `setProps` call and preserve Dash ownership of input props.
5. Keep React external in the UMD build; register only the UMD bundle in `_js_dist`.
6. Renderer values are `canvas`/`svg`; themes are `light`/`dark`/custom JSON. Do not evaluate arbitrary option strings.

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

Browser tests use the shared Selenium setup in `tests/conftest.py`, which
installs a matching ChromeDriver, enables headless mode in CI, and configures
Linux WebGL/SwiftShader. The CI matrix covers Ubuntu and Windows. Set `CI=true`
when reproducing the headless CI test environment locally.

Use task-specific recipes under `.agent/skills/` and architecture notes in [AI_CONTEXT.md](../.github/AI_CONTEXT.md).
