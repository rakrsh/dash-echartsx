# dash-echartsx

A high-performance, developer-friendly Python wrapper for Apache ECharts 6+ in Plotly Dash.

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
