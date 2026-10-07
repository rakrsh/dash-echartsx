# dash-echartsx

A high-performance, developer-friendly Python wrapper for Apache ECharts 6+ in Plotly Dash.

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
Compilation errors and invalid marker objects are reported rather than silently
ignored.

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
`hideTip`, `selectDataRange`, and `legendSelect`:

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
