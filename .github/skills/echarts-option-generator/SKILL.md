---
name: echarts-option-generator
description: Generate and validate ECharts 5 option objects for DashEChartsX from Python dictionaries or Pandas DataFrames.
---

# ECharts Option Generator

Use this skill when creating, transforming, optimizing, or reviewing an ECharts
option payload for this repository.

## Required context

1. Read `.github/AI_CONTEXT.md` and `.github/copilot-instructions.md`.
2. Use the current Python component API: `from dash_echartsx import
DashEChartsX`. Do not generate legacy `dash_echarts.DashECharts` code or
   deprecated `app.run_server` calls.
3. Check `src/lib/components/DashEChartsX.tsx` before selecting chart types.
   Core series types must have their ECharts chart module registered there.
   ECharts-GL series additionally require `enable_gl=True`.
4. Keep the option JSON-compatible. Use only documented `js_function(...)`
   markers for developer-authored callbacks; never translate arbitrary
   Python strings into executable JavaScript.

## Generation procedure

1. Preserve the meaning, units, ordering, and caller-owned input data. Do not
   silently discard columns, rows, nulls, or categories.
2. If chart type, axis mapping, units, aggregation, missing-value behavior, or
   downsampling policy is ambiguous, ask before choosing.
3. Generate the option as a plain JSON object. Normalize NumPy/Pandas scalar
   values and timestamps into JSON-compatible values without changing their
   meaning. Keep large data payloads bounded only when the user requests or
   approves a limit.
4. For a map, verify every `series[].map` name is registered by the component's
   `maps=[{"name": ..., "geoJSON": ...}]` property. Do not assume a projection
   or map provider.
5. Validate the option before placing it in or returning it from a Dash
   callback:

   ```console
   npm run echarts:validate -- path/to/option.json
   ```

   Pipe generated JSON to the validator when no file is needed:

   ```console
   python generate_option.py | npm run echarts:validate
   ```

   For ECharts-GL options, pass `--enable-gl` and set `enable_gl=True` on
   `DashEChartsX`. The validator checks the option against the pinned official
   ECharts 5.6.0 `EChartsOption` declarations and checks core series against
   modules actually registered by this component. GL-specific nested fields
   are not fully covered by the ECharts core declarations. The declarations
   are extensible and may accept unknown option keys, so this is not a complete
   JSON Schema validator; state these limits.

6. Only after validation succeeds, use the option as the `option` prop or
   return it from a callback with `Output("chart", "option")`.

## Output format

Return:

1. The validated JSON option.
2. A concise DashEChartsX usage snippet, including `maps` or `enable_gl` when
   needed.
3. The exact validation command and its result.
4. Any remaining caveat, such as ECharts-GL extension typing or a chart module
   not currently registered by the component.

Prompt templates are in `prompts/`.
