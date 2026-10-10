# AI Context Map — dash-echartsx

Architecture notes for agents working on the Dash/ECharts integration.

## Data Flow

```text
Python Dash layout/callback
        │ JSON component props
        ▼
Generated dash_echartsx.DashEChartsX wrapper
        │ Dash renderer loads UMD component
        ▼
src/lib/components/DashEChartsX.tsx
  ├─ effect initializes ECharts with option/theme/renderer
  ├─ ResizeObserver schedules chart.resize()
  └─ cleanup disconnects observers and disposes the chart
        │
        ▼
ECharts Canvas or SVG renderer
```

Python supplies props through Dash. For any future browser-to-Python events, use guarded `setProps({ ... })` calls; never assume the Dash bridge exists outside the renderer.

## File Boundaries

| Path                                  | Responsibility                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| `src/lib/components/DashEChartsX.tsx` | React lifecycle, ECharts initialization, option/theme/renderer props, resizing |
| `src/index.ts`                        | Vite library exports                                                           |
| `dash_echartsx/utils.py`              | Python option helpers                                                          |
| `dash_echartsx/__init__.py`           | Python public export and Dash asset registration                               |
| `dash_echartsx/metadata.json`         | Generated prop metadata                                                        |
| `dash_echartsx/DashEChartsX.py`       | Generated Dash Python wrapper                                                  |
| `dash_echartsx/dash_echartsx.es.js`   | Generated ESM bundle for bundler consumers                                     |
| `dash_echartsx/dash_echartsx.umd.js`  | Generated UMD bundle loaded by Dash                                            |
| `tests/`                              | Flat Python and `dash_duo` browser test suite                                  |
| `tests/conftest.py`                   | Shared ChromeDriver, headless CI, and Linux WebGL/SwiftShader setup            |

## Pitfalls

| Avoid                                            | Prefer                                                                   |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| Initialize ECharts during React render           | Initialize in an effect and dispose in cleanup                           |
| Reinitialize after every option update           | Call `setOption`; only recreate for theme/renderer changes               |
| Run `chart.resize()` for every observer callback | Coalesce with an animation frame and cancel it on cleanup                |
| Resize a collapsed, zero-size element            | Wait for positive width and height                                       |
| Hardcode a pixel width/height                    | Use responsive defaults and caller-overridable `style`                   |
| Mutate incoming option/theme objects             | Treat them as caller-owned, immutable props                              |
| Pass option strings as executable callbacks      | Keep JSON serializable; add a reviewed explicit callback API if required |
| Edit generated assets/wrappers directly          | Change TSX/Python source and run `npm run build`                         |
| Add ESM to Dash `_js_dist`                       | Register only the UMD bundle                                             |
| Bundle a second React runtime                    | Keep React external in Vite UMD output                                   |

## Commands

The current checks are `npm run build`, `npm test`, `npm run lint`, `npm run typecheck`, `uv run ruff check .`, `uv run black --check dash_echartsx tests scripts`, and `uv run pytest`. JavaScript utility unit tests live in `src/lib/utils/`; Python component and Selenium integration tests live in `tests/` and use the `integration` marker. `tests/conftest.py` installs a matching ChromeDriver, configures Linux SwiftShader for WebGL, and enables headless browser mode when `CI` is set. The CI workflow tests Python 3.10–3.14 and ECharts 5/6 on Ubuntu, macOS, and Windows, and builds wheel/source distribution artifacts for every OS/Python pair; pull request runs upload those artifacts for review. Firefox integration tests run separately on Ubuntu. Use `CI=true uv run pytest` to reproduce the headless Chrome suite locally.

## AI option generation

Use `.github/skills/echarts-option-generator/SKILL.md` and its prompt
templates when translating Python dictionaries or Pandas data into chart
options. Validate JSON before using it in a Dash callback:

```sh
npm run echarts:validate -- path/to/option.json
```

The validator checks against the pinned ECharts 5.6.0 option declarations and
verifies that core series types are registered by `DashEChartsX`. ECharts-GL
options require `--enable-gl`; their extension fields are not fully covered by
the core ECharts type schema. The ECharts declarations are extensible and may
accept unknown option keys, so this is not a complete JSON Schema validator.
