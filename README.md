# dash-echartsx

A high-performance, developer-friendly Python wrapper for Apache ECharts 5.6+ and 6 in Plotly Dash.

## Python typing and IDE support

`DashEChartsX` ships with a generated `DashEChartsX.pyi` stub. Its constructor
provides typed, discoverable component props in editors such as VS Code and
PyCharm, including the renderer literals, theme, maps, event payloads, and
streaming data. Prop descriptions and defaults are included in the generated
component documentation. The stub is regenerated from component metadata by
`npm run build`.

## JavaScript option functions

ECharts options can include formatter and callback functions through the
`js_function` helper. The helper serializes source into an explicit marker that
DashEChartsX resolves in the browser immediately before calling `setOption`:

```python
from dash_echartsx.utils import js_function

option = {
    "tooltip": {
        "formatter": js_function(
            "function(params) { return params.name + ': ' + params.value; }"
        )
    },
    "xAxis": {
        "axisLabel": {
            "formatter": js_function("function(value) { return value + ' kg'; }")
        }
    },
    "series": [
        {
            "type": "custom",
            "renderItem": js_function(
                "function(params, api) { return { type: 'rect', shape: "
                "{ x: api.coord([api.value(0), 0])[0], y: api.coord([0, "
                "api.value(1)])[1], width: 10, height: 10 }, style: "
                "api.style() }; }"
            ),
        }
    ],
}
```

Only objects containing the `__js_eval__` marker are compiled; ordinary option
strings are not evaluated. Marked source is executable JavaScript, not a
sandboxed expression: use it only for code authored and reviewed by the
application developer. Never build it from user input or untrusted data.
Because compilation uses the JavaScript `Function` constructor, deployments with
a Content Security Policy that disallows `unsafe-eval` cannot use marked
functions. Compilation errors and invalid marker objects are reported rather
than silently ignored.

## Custom maps and 3D charts

Register custom GeoJSON maps with the `maps` property. Definitions are
registered with ECharts before the option is applied:

```python
from dash_echartsx import DashEChartsX

DashEChartsX(
    maps=[{"name": "districts", "geoJSON": geojson}],
    option={
        "series": [
            {"type": "map", "map": "districts", "data": region_values}
        ]
    },
)
```

SVG map data uses ECharts' `{ "svg": ... }` map definition in the same property:

```python
from dash_echartsx import DashEChartsX

DashEChartsX(
    maps=[{"name": "floorplan", "geoJSON": {"svg": svg_markup}}],
    option={"geo": {"map": "floorplan"}, "series": []},
)
```

ECharts-GL charts use a separate bundle and load only when `enable_gl=True`:

```python
from dash_echartsx import DashEChartsX

DashEChartsX(
    enable_gl=True,
    option={
        "grid3D": {},
        "xAxis3D": {},
        "yAxis3D": {},
        "zAxis3D": {},
        "series": [{"type": "scatter3D", "data": [[0, 0, 0], [1, 1, 1]]}],
    },
)
```

The GL bundle is served by Dash alongside the core bundle but is not requested
unless enabled. Set `gl_bundle_url` if hosting that bundle separately. The
project supports ECharts 5.6 and 6.x; CI builds against both.

## Streaming and large datasets

For regular option updates, DashEChartsX calls ECharts `setOption` with merge
enabled by default (`notMerge=False`). This applies partial option updates
without replacing the whole chart configuration. Set `lazyUpdate=True` to
defer option processing, or set `notMerge=True` when an update should replace
the existing option.

For supported series types, send new data in batches with `append_data` instead
of resending the entire option and dataset on every callback:

```python
from dash import Input, Output, callback
from dash_echartsx import DashEChartsX

chart = DashEChartsX(
    id="telemetry",
    notMerge=False,
    lazyUpdate=True,
    option={
        "xAxis": {"type": "time"},
        "yAxis": {"type": "value"},
        "series": [
            {
                "type": "scatter",
                "symbolSize": 4,
                "progressive": 5000,
                "progressiveThreshold": 10000,
                "data": [],
            }
        ],
    },
)


@callback(
    Output("telemetry", "append_data"),
    Input("telemetry-batch", "data"),
)
def append_telemetry(batch):
    return {"seriesIndex": 0, "data": batch}
```

`append_data` expects an object with a `seriesIndex` and a `data` batch
matching that series' data format. ECharts only supports `appendData` for some
series types; it cannot be used with `dataset`. Progressive rendering is
configured on each series through the standard ECharts `progressive` and
`progressiveThreshold` options. Choose batch sizes and progressive settings for
the target chart and browser, and bound retained data when the application needs
a fixed memory footprint. `appendData` does not recalculate coordinate-system
axis extents, so configure fixed axis bounds for continuously appended data or
update the chart option separately when bounds need to move.

## Event callbacks

Chart interactions are exposed as Dash properties: `click_data`, `dblclick_data`,
`hover_data`, `selected_data`, `legend_status`, and `zoom_data`. Event payloads are
JSON-safe dictionaries; data events include `seriesIndex`, `dataIndex`, `name`,
and `value` when ECharts provides them.

Use any event property as a callback input:

```python
from dash import Input, Output


@app.callback(Output("interaction", "children"), Input("chart", "click_data"))
def show_click(data):
	return str(data)
```

To trigger an ECharts action from Python, return a payload through
`dispatch_action`. Supported action types are `highlight`, `downplay`, `showTip`,
`hideTip`, `selectDataRange`, `legendSelect`, and `dataZoom`:

```python
@app.callback(
	Output("chart", "dispatch_action"),
	Input("show-point", "n_clicks"),
	prevent_initial_call=True,
)
def show_point(_):
	return {"type": "showTip", "seriesIndex": 0, "dataIndex": 2}
```

## Development

Use uv to sync the Python project and npm to install JavaScript dependencies,
then build the browser bundles and generated Python component wrapper:

```sh
uv sync --group dev
npm ci
npm run build
```

The build writes ES module and UMD bundles to `dash_echartsx/` and generates
the Dash Python component wrapper there. Check the TypeScript sources with
`npm run typecheck` and run the Python tests with `uv run pytest`.

## Code Quality

Run the JavaScript/TypeScript lint and formatting checks with `npm run lint`.
Run Python linting and formatting checks with `uv run ruff check .` and
`uv run black --check dash_echartsx tests`. Pre-commit hooks run lint-staged
automatically after `npm install` configures Husky.
