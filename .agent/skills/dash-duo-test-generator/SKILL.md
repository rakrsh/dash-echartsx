---
name: dash-duo-test-generator
description: "Use when adding Selenium/dash_duo browser tests for Dash EChartsX chart rendering, resizing, renderer/theme switching, or Dash prop callbacks."
---

# Generate Dash Browser Tests

Use `dash[testing]` and the `dash_duo` fixture to verify behavior that Python unit tests cannot cover: the generated UMD bundle, React lifecycle, real chart rendering, and responsive layout.

## Test Pattern

```python
from dash import Dash, html
from dash_echartsx import DashEChartsX


def test_chart_renders(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        DashEChartsX(
            id="chart",
            option={
                "xAxis": {"type": "category", "data": ["A", "B"]},
                "yAxis": {"type": "value"},
                "series": [{"type": "bar", "data": [2, 4]}],
            },
        ),
        style={"width": "60vw"},
    )
    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas")
    assert dash_duo.get_logs() == []
```

## Useful Assertions

- Canvas renderer: wait for `#chart canvas`.
- SVG renderer: wait for `#chart svg`.
- Resize: change a parent width, wait for observer/frame work, then compare element and renderer dimensions.
- Theme/renderer update: drive a Dash callback or button, verify the old renderer is disposed and the requested new renderer appears.
- Capture browser console errors with `dash_duo.get_logs()`.
- For Dash callback behavior, assert the Python output reflects the updated component prop, not only that a click occurred.

Keep browser tests in `tests/` with clear names; the repository currently has a flat test layout. Ensure `dash[testing]` is installed with `uv sync --group dev`. Do not assume a separate `tests/integration` folder or Linux `xvfb-run` setup exists.
