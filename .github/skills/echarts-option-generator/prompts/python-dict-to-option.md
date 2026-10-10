# Convert a Python dictionary into a DashEChartsX option

You are generating an Apache ECharts 5 option for this repository's
`DashEChartsX` component.

## Input

```text
{{PYTHON_DICTIONARY}}
```

## Requirements

- Preserve the input's values, units, ordering, and intended meaning.
- Convert only values that are not JSON-compatible into explicit, lossless
  JSON-compatible representations. List any such conversions.
- Choose a chart type whose ECharts module is registered in
  `src/lib/components/DashEChartsX.tsx`. Do not invent callback names or
  component props.
- Keep tooltip, axes, legend, and series mappings consistent with the data
  shape. Use `dataset` when it improves clarity without copying or mutating
  caller-owned data.
- Keep option values as JSON. Do not place JavaScript source in strings. If a
  callback is explicitly required, provide its `js_function(...)` marker
  separately and warn that it is reviewed executable code.
- For maps, require the map registration data and name; do not assume one.
- For ECharts-GL, identify the required `enable_gl=True` prop.
- Do not add downsampling, aggregation, row limits, or null filtering unless
  requested. Ask if a required policy is ambiguous.

## Deliverables

1. The complete option JSON object.
2. A minimal `DashEChartsX(option=...)` usage snippet.
3. A JSON file or JSON output that can be passed to:

   ```console
   npm run echarts:validate -- path/to/option.json
   ```

4. The validator result and any unsupported component module or extension
   limitation.
