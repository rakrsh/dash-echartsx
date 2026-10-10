# Convert a Pandas DataFrame into a DashEChartsX option

You are generating an Apache ECharts 5 option and Python callback example for
this repository's `DashEChartsX` component.

## Input

```text
{{DATAFRAME_DESCRIPTION}}
```

```python
{{DATAFRAME_CREATION_OR_SAMPLE}}
```

## Requirements

- Confirm which column is the category/time axis, which columns are measures,
  and whether a row represents a sample, aggregate, or series. Ask if unclear.
- Preserve column names, row order, units, and timestamp meaning. Do not infer
  aggregation, timezone, null handling, sorting, or downsampling policy.
- Keep the callback payload JSON-compatible. Convert Pandas/NumPy scalar
  values explicitly and handle missing values only according to the user's
  stated policy.
- Select only chart series whose ECharts modules are registered in
  `src/lib/components/DashEChartsX.tsx`. Keep series data aligned with the
  declared axes and categories.
- Avoid copying large frames on every callback. For streaming data, prefer a
  bounded update or `append_data` only when the chosen ECharts series type
  supports ECharts `appendData`.
- Do not encode JavaScript callbacks as strings. If requested, show the
  explicit `js_function(...)` marker separately and identify it as executable
  developer-authored code.
- If the option uses ECharts-GL, state that `enable_gl=True` is required.

## Deliverables

1. The ECharts option JSON.
2. The Python conversion/callback snippet, with every data transformation
   explained.
3. The exact `DashEChartsX` callback wiring.
4. The output option validated before callback use with:

   ```console
   python make_option.py | npm run echarts:validate
   ```

   Add `--enable-gl` for ECharts-GL options.

5. Validation results and any assumptions or remaining schema limitations.
