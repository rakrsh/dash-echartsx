# dash-echartsx
A high-performance, developer-friendly Python wrapper for Apache ECharts 6+ in Plotly Dash.

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
