from dash import Dash
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX


def test_geojson_and_svg_maps_render(dash_duo):
    app = Dash(__name__)
    app.layout = DashEChartsX(
        id="chart",
        style={"width": "800px", "height": "450px", "aspectRatio": "auto"},
        maps=[
            {
                "name": "districts",
                "geoJSON": {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {"name": "Test"},
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]]
                                ],
                            },
                        }
                    ],
                },
            },
            {
                "name": "floorplan",
                "geoJSON": {
                    "svg": (
                        '<svg xmlns="http://www.w3.org/2000/svg" width="100" '
                        'height="100" viewBox="0 0 100 100"><path d="M10 10 '
                        'L90 10 L90 90 L10 90 Z" fill="#5470c6"/></svg>'
                    )
                },
            },
        ],
        option={
            "geo": {"map": "floorplan"},
            "series": [
                {
                    "type": "map",
                    "map": "districts",
                    "data": [{"name": "Test", "value": 1}],
                }
            ],
        },
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas")
    assert dash_duo.driver.execute_script(
        "return document.querySelector('#chart canvas').width > 0"
    )
    assert not dash_duo.driver.execute_script("return Boolean(window.dash_echartsx_gl)")


def test_echarts_gl_bundle_loads_only_when_enabled(dash_duo):
    app = Dash(__name__)
    app.layout = DashEChartsX(
        id="chart",
        enable_gl=True,
        style={"width": "800px", "height": "450px", "aspectRatio": "auto"},
        option={
            "grid3D": {},
            "xAxis3D": {},
            "yAxis3D": {},
            "zAxis3D": {},
            "series": [{"type": "scatter3D", "data": [[0, 0, 0], [1, 1, 1]]}],
        },
    )

    dash_duo.start_server(app)
    WebDriverWait(dash_duo.driver, 20).until(
        lambda driver: driver.execute_script("return Boolean(window.dash_echartsx_gl)")
    )
    canvas_loaded = dash_duo.driver.execute_script(
        "return Boolean(document.querySelector('#chart canvas'))"
    )
    browser_errors = "\n".join(
        entry["message"] for entry in dash_duo.driver.get_log("browser")
    )
    assert canvas_loaded, browser_errors
