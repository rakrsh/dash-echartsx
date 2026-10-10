import pytest
from selenium.webdriver.support.ui import WebDriverWait

from examples.financial_multi_axis import app
from examples.geospatial_map import describe_region
from examples.globe_and_scatter3d import app as globe_app
from examples.realtime_streaming import update_stream


@pytest.mark.integration
def test_financial_example_renders_with_candlestick_support(dash_duo):
    dash_duo.start_server(app)
    dash_duo.wait_for_element("#financial-chart canvas")

    canvas_is_sized = WebDriverWait(dash_duo.driver, 10).until(
        lambda driver: driver.execute_script(
            "const canvas = document.querySelector('#financial-chart canvas');"
            "return Boolean(canvas && canvas.width > 0 && canvas.height > 0);"
        )
    )
    assert canvas_is_sized


@pytest.mark.integration
@pytest.mark.webgl
def test_globe_and_scatter3d_example_loads_gl_bundle(dash_duo):
    dash_duo.start_server(globe_app)
    WebDriverWait(dash_duo.driver, 20).until(
        lambda driver: driver.execute_script(
            "return Boolean(window.dash_echartsx_gl && "
            "document.querySelector('#globe-chart canvas') && "
            "document.querySelector('#scatter3d-chart canvas'));"
        )
    )


def test_streaming_example_generates_an_interval_update():
    option, history, status = update_stream(3, [])

    assert len(history) == 1
    assert len(option["series"][0]["data"]) == 1
    assert status == "Streaming generated sample data with dcc.Interval."


def test_geojson_example_reports_clicked_boundary():
    assert describe_region({"name": "North Harbor", "value": 74}) == (
        "North Harbor: index 74."
    )
