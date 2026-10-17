import numpy as np
import pytest
from dash import Dash, html
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import BinaryDataStore, DashEChartsX


def test_binary_array_is_served_as_little_endian_bytes_without_mutating_input():
    app = Dash(__name__)
    app.layout = html.Div()
    store = BinaryDataStore(app)
    values = np.arange(12, dtype=">f4").reshape(3, 4)[:, ::2]
    original = values.copy()

    marker = store.register(values)["__dash_echartsx_binary_array__"]
    response = app.server.test_client().get(marker["url"])

    assert response.status_code == 200
    assert response.mimetype == "application/octet-stream"
    assert response.headers["Cache-Control"] == "no-store"
    assert marker["dtype"] == "float32"
    assert marker["shape"] == [3, 2]
    np.testing.assert_array_equal(
        np.frombuffer(response.data, dtype="<f4").reshape(marker["shape"]),
        original,
    )
    np.testing.assert_array_equal(values, original)


def test_binary_array_endpoint_respects_dash_path_prefixes():
    app = Dash(
        __name__,
        requests_pathname_prefix="/mounted/",
        routes_pathname_prefix="/mounted/",
    )
    app.layout = html.Div()
    store = BinaryDataStore(app)
    marker = store.register(np.array([1, 2], dtype=np.uint16))[
        "__dash_echartsx_binary_array__"
    ]

    response = app.server.test_client().get(marker["url"])

    assert marker["url"].startswith("/mounted/_dash_echartsx/binary/")
    assert response.status_code == 200
    np.testing.assert_array_equal(np.frombuffer(response.data, dtype="<u2"), [1, 2])


@pytest.mark.parametrize(
    ("values", "error", "message"),
    [
        ([[1, 2]], TypeError, "NumPy ndarray"),
        (np.array([1], dtype=np.int64), TypeError, "unsupported NumPy dtype"),
        (np.ones((1, 1, 1), dtype=np.float32), ValueError, "one- or two-dimensional"),
    ],
)
def test_binary_array_rejects_unsupported_inputs(values, error, message):
    store = BinaryDataStore(Dash(__name__))

    with pytest.raises(error, match=message):
        store.register(values)


def test_expired_binary_array_urls_return_not_found(monkeypatch):
    app = Dash(__name__)
    app.layout = html.Div()
    store = BinaryDataStore(app)
    now = 100.0
    monkeypatch.setattr("dash_echartsx.binary.time.monotonic", lambda: now)
    marker = store.register(np.array([3.0], dtype=np.float32))[
        "__dash_echartsx_binary_array__"
    ]
    now = 401.0

    response = app.server.test_client().get(marker["url"])

    assert response.status_code == 404


@pytest.mark.integration
@pytest.mark.webgl
def test_binary_dataset_renders_in_echarts_gl(dash_duo):
    app = Dash(__name__)
    store = BinaryDataStore(app)
    source = store.register(
        np.array(
            [[0.0, 0.0, 0.0], [0.5, 1.0, 0.25], [1.0, 0.5, 1.0]],
            dtype=np.float32,
        )
    )
    app.layout = DashEChartsX(
        id="chart",
        enable_gl=True,
        style={"width": "700px", "height": "450px", "aspectRatio": "auto"},
        option={
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
                    "symbolSize": 8,
                }
            ],
        },
    )

    dash_duo.start_server(app)

    def chart_loaded(driver):
        return driver.execute_script("""
            const echarts = window.dash_echartsx?._echartsLib;
            const element = document.querySelector("#chart");
            if (!echarts || !element) return false;
            const chart = echarts.getInstanceByDom(element);
            const series = chart?.getModel?.()?.getSeriesByIndex?.(0);
            return Boolean(
              chart &&
              series &&
              series.getData?.()?.count?.() === 3 &&
              performance.getEntriesByType("resource").some((entry) =>
                entry.name.includes("/_dash_echartsx/binary/")
              )
            );
            """)

    WebDriverWait(dash_duo.driver, 30).until(chart_loaded)


@pytest.mark.integration
@pytest.mark.webgl
def test_binary_array_renders_as_echarts_gl_surface_data(dash_duo):
    app = Dash(__name__)
    store = BinaryDataStore(app)
    data = store.register(
        np.array(
            [
                [0.0, 0.0, 0.0],
                [1.0, 0.0, 0.2],
                [0.0, 1.0, 0.5],
                [1.0, 1.0, 1.0],
            ],
            dtype=np.float32,
        )
    )
    app.layout = DashEChartsX(
        id="surface-chart",
        enable_gl=True,
        style={"width": "700px", "height": "450px", "aspectRatio": "auto"},
        option={
            "grid3D": {},
            "xAxis3D": {"type": "value"},
            "yAxis3D": {"type": "value"},
            "zAxis3D": {"type": "value"},
            "series": [
                {
                    "type": "surface",
                    "data": data,
                    "dataShape": [2, 2],
                }
            ],
        },
    )

    dash_duo.start_server(app)
    WebDriverWait(dash_duo.driver, 30).until(lambda driver: driver.execute_script("""
            const echarts = window.dash_echartsx?._echartsLib;
            const element = document.querySelector("#surface-chart");
            if (!echarts || !element) return false;
            const chart = echarts.getInstanceByDom(element);
            const option = chart?.getOption?.();
            return Boolean(
              option?.series?.[0]?.data instanceof Float32Array &&
              option.series[0].data.length === 12 &&
              performance.getEntriesByType("resource").some((entry) =>
                entry.name.includes("/_dash_echartsx/binary/")
              )
            );
            """))
