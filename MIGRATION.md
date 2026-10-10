# Migrating from `dash-echarts` 0.0.x

This guide compares `dash-echartsx` with the published
[`dash-echarts` 0.0.12.9 API](https://pypi.org/project/dash-echarts/0.0.12.9/).
Earlier 0.0.x releases may expose fewer properties. The current component is
intentionally smaller: options stay JSON-compatible, map registration is
explicit, and executable JavaScript is marked at the exact option field that
uses it.

## Install and update imports

Replace the legacy distribution and component import:

```sh
python -m pip uninstall dash-echarts
python -m pip install dash-echartsx
```

```python
# Before
import dash_echarts

chart = dash_echarts.DashECharts(id="chart", option=option)

# After
from dash_echartsx import DashEChartsX

chart = DashEChartsX(id="chart", option=option)
```

If you are developing from a checkout, install the current project with
`python -m pip install -e .` instead.

## Property migration

| Legacy `DashECharts` property                 | `DashEChartsX` replacement                                                                                                                                                          |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`, `style`, `option`                       | Same names. `option` should be JSON-compatible except for explicitly marked functions described below.                                                                              |
| `maps={"china": geojson}`                     | `maps=[{"name": "china", "geoJSON": geojson}]`. Each entry registers one GeoJSON or SVG map.                                                                                        |
| `click_data`, `selected_data`                 | Same names. Continue using them as Dash callback inputs.                                                                                                                            |
| `brush_data`, `axis_pointer_data`, `event`    | No direct equivalent. Use the currently exposed event properties (`click_data`, `dblclick_data`, `hover_data`, `selected_data`, `legend_status`, and `zoom_data`) where applicable. |
| `funs`, `fun_keys`, `fun_values`, `fun_paths` | Replace with `js_function(...)` on the exact ECharts option field.                                                                                                                  |
| `fun_befores`, `fun_afters`, `fun_loaded`     | No direct equivalent. Keep application lifecycle work in Dash callbacks or your own application code; these legacy hooks are not run by `DashEChartsX`.                             |
| `resize_id`, `reset_id`                       | Remove. The component observes its responsive container and manages its ECharts lifecycle automatically.                                                                            |
| `mapbox_token`, `bmap_token`, `amap_token`    | No direct equivalent. Register GeoJSON or SVG with `maps`; provider-specific tile services must be handled by your application.                                                     |
| `n_clicks`, `n_clicks_timestamp`              | No direct equivalent. Use `click_data` to react to chart clicks.                                                                                                                    |

`DashEChartsX` also adds `renderer`, `theme`, `enable_gl`, `gl_bundle_url`,
`dispatch_action`, and `append_data`. See the
[API reference](https://rakrsh.github.io/dash-echartsx/dev/reference/python_api.html)
for their current behavior.

## Migrate JavaScript option functions

The legacy component accepted JavaScript source separately from the option and
used function names or option paths to attach it:

```python
chart = dash_echarts.DashECharts(
    option={
        "tooltip": {"formatter": "value_formatter"},
    },
    funs={
        "value_formatter": "function(value) { return value + ' kg'; }",
    },
    fun_values=["value_formatter"],
)
```

Put the marked source directly at the option field in `dash-echartsx`:

```python
from dash_echartsx import DashEChartsX
from dash_echartsx.utils import js_function

chart = DashEChartsX(
    option={
        "tooltip": {
            "formatter": js_function(
                "function(value) { return value + ' kg'; }"
            )
        }
    }
)
```

Only objects created with `js_function` are compiled in the browser. Ordinary
strings are kept as strings; legacy function-name strings are not evaluated.
Marked JavaScript is executable code, not a sandbox. Use only reviewed,
developer-authored source, never interpolate user input, and allow
`unsafe-eval` in the page's Content Security Policy if you use this helper.

## Update callbacks

The retained event properties need no rename. New event properties can be used
the same way:

```python
from dash import Input, Output


@app.callback(Output("details", "children"), Input("chart", "click_data"))
def show_point(event):
    if not event:
        return "Click a point"
    return f"Series {event.get('seriesIndex')}, value {event.get('value')}"
```

For custom maps, migrate the old mapping to an explicit list of definitions:

```python
DashEChartsX(
    id="map",
    maps=[{"name": "china", "geoJSON": china_geojson}],
    option={
        "series": [
            {"type": "map", "map": "china", "data": region_values}
        ]
    },
)
```

For large or streaming datasets, use `append_data` where the ECharts series
type supports `appendData`, or update a bounded option from a Dash callback.
Runnable financial, streaming, GeoJSON, and ECharts-GL examples are in
[`examples/`](./examples/README.md).
