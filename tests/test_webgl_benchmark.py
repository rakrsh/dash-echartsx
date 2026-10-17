import json
import os
import platform
import statistics
import time
from pathlib import Path

import numpy as np
import plotly
import plotly.graph_objects as go
import pytest
from dash import Dash, Input, Output, ctx, dcc, html
from dash._utils import to_json
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import BinaryDataStore, DashEChartsX

POINT_COUNT = max(
    100_001, int(os.environ.get("DASH_ECHARTSX_BENCHMARK_POINTS", 120_000))
)
SAMPLE_COUNT = max(1, int(os.environ.get("DASH_ECHARTSX_BENCHMARK_SAMPLES", 3)))


@pytest.mark.performance
@pytest.mark.webgl
@pytest.mark.skipif(
    os.environ.get("DASH_ECHARTSX_RUN_BENCHMARKS") != "1",
    reason="set DASH_ECHARTSX_RUN_BENCHMARKS=1 to run the WebGL benchmark",
)
def test_compare_binary_echarts_and_plotly_webgl(dash_duo):
    values = np.random.default_rng(42).random((POINT_COUNT, 3), dtype=np.float32)
    app = Dash(
        __name__,
        assets_folder=str(Path(__file__).parents[1] / "benchmarks" / "assets"),
    )
    binary_data = BinaryDataStore(app)
    registration_started = time.perf_counter()
    source = binary_data.register(values)
    registration_ms = (time.perf_counter() - registration_started) * 1000

    echarts_option = {
        "dataset": {
            "dimensions": ["x", "y", "z"],
            "source": source,
        },
        "grid3D": {},
        "xAxis3D": {"type": "value"},
        "yAxis3D": {"type": "value"},
        "zAxis3D": {"type": "value"},
        "series": [
            {
                "type": "scatter3D",
                "encode": {"x": "x", "y": "y", "z": "z"},
                "symbolSize": 2,
            }
        ],
    }
    plotly_figure = go.Figure(
        go.Scatter3d(
            x=values[:, 0],
            y=values[:, 1],
            z=values[:, 2],
            mode="markers",
            marker={"size": 2},
        )
    )
    plotly_figure.update_layout(
        margin={"l": 0, "r": 0, "t": 0, "b": 0},
        scene={"xaxis_title": "x", "yaxis_title": "y", "zaxis_title": "z"},
    )

    def measure_serialization(payload):
        durations = []
        encoded = ""
        for _ in range(SAMPLE_COUNT):
            started = time.perf_counter()
            encoded = to_json(payload)
            durations.append((time.perf_counter() - started) * 1000)
        return len(encoded.encode("utf-8")), statistics.median(durations)

    plotly_json_bytes, plotly_serialization_ms = measure_serialization(
        {"figure": plotly_figure}
    )
    echarts_json_bytes, echarts_serialization_ms = measure_serialization(
        {"option": echarts_option}
    )
    app.layout = html.Div(
        [
            html.Button("Render ECharts-GL", id="show-echarts"),
            html.Button("Render Plotly WebGL", id="show-plotly"),
            html.Div(id="benchmark-chart"),
        ]
    )

    @app.callback(
        Output("benchmark-chart", "children"),
        Input("show-echarts", "n_clicks"),
        Input("show-plotly", "n_clicks"),
        prevent_initial_call=True,
    )
    def render_chart(_, __):
        if ctx.triggered_id == "show-echarts":
            option = {
                **echarts_option,
                "dataset": {
                    **echarts_option["dataset"],
                    "source": binary_data.register(values),
                },
            }
            return DashEChartsX(
                id="echarts-chart",
                enable_gl=True,
                option=option,
                style={"width": "100%", "height": "480px", "aspectRatio": "auto"},
            )
        return dcc.Graph(
            id="plotly-chart",
            figure=plotly_figure,
            config={"displayModeBar": False},
            style={"height": "480px"},
        )

    dash_duo.start_server(app)
    browser_samples = []
    WebDriverWait(dash_duo.driver, 20).until(
        lambda driver: driver.execute_script(
            "return typeof window.__dashEChartsXWebGLBenchmark?.begin === 'function'"
        )
    )
    for _ in range(SAMPLE_COUNT):
        sample = {}
        for target, metric, button in (
            ("echarts", "echartsMs", "#show-echarts"),
            ("plotly", "plotlyMs", "#show-plotly"),
        ):
            dash_duo.driver.execute_script(
                "window.__dashEChartsXWebGLBenchmark.begin(arguments[0]);",
                target,
            )
            dash_duo.find_element(button).click()
            try:
                WebDriverWait(dash_duo.driver, 45).until(
                    lambda driver: driver.execute_script(
                        "return typeof window.__dashEChartsXWebGLBenchmark"
                        "[arguments[0]] === 'number';",
                        metric,
                    )
                )
            except TimeoutException as error:
                browser_logs = "\n".join(
                    entry["message"] for entry in dash_duo.driver.get_log("browser")
                )
                browser_state = dash_duo.driver.execute_script(
                    "return window.__dashEChartsXWebGLBenchmark;"
                )
                raise AssertionError(
                    "WebGL chart did not finish rendering.\n"
                    f"State: {json.dumps(browser_state, default=str)}\n{browser_logs}"
                ) from error
            sample[metric] = dash_duo.driver.execute_script(
                "return window.__dashEChartsXWebGLBenchmark[arguments[0]];",
                metric,
            )
        browser_samples.append(sample)

    echarts_render_ms = statistics.median(
        sample["echartsMs"] for sample in browser_samples
    )
    plotly_render_ms = statistics.median(
        sample["plotlyMs"] for sample in browser_samples
    )
    combined_echarts_bytes = echarts_json_bytes + values.nbytes
    print(
        "[WebGL benchmark] "
        + json.dumps(
            {
                "points": POINT_COUNT,
                "samples": SAMPLE_COUNT,
                "environment": {
                    "platform": platform.platform(),
                    "python": platform.python_version(),
                    "numpy": np.__version__,
                    "plotly": plotly.__version__,
                    "browser": dash_duo.driver.execute_script(
                        "return navigator.userAgent"
                    ),
                },
                "binary_registration_ms": round(registration_ms, 2),
                "dash_json_serialization_ms": {
                    "dcc.Graph": round(plotly_serialization_ms, 2),
                    "DashEChartsX": round(echarts_serialization_ms, 2),
                },
                "uncompressed_data_bytes": {
                    "dcc.Graph_figure_json": plotly_json_bytes,
                    "DashEChartsX_option_json": echarts_json_bytes,
                    "DashEChartsX_binary": values.nbytes,
                    "DashEChartsX_total": combined_echarts_bytes,
                    "DashEChartsX_reduction_percent": round(
                        100
                        * (plotly_json_bytes - combined_echarts_bytes)
                        / plotly_json_bytes,
                        2,
                    ),
                },
                "browser_layout_to_render_ms_median": {
                    "dcc.Graph_scatter3d": round(plotly_render_ms, 2),
                    "DashEChartsX_scatter3D": round(echarts_render_ms, 2),
                },
                "browser_samples_ms": browser_samples,
            },
            sort_keys=True,
        )
    )
