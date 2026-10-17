import base64
import struct

import pytest
from dash import Dash, Input, Output, html
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX


@pytest.mark.integration
def test_callbacks_download_png_and_svg_with_requested_options(dash_duo):
    app = Dash(__name__)
    chart_option = {
        "toolbox": {
            "show": True,
            "feature": {
                "saveAsImage": {
                    "show": True,
                    "type": "png",
                    "name": "toolbox-export",
                    "pixelRatio": 3,
                }
            },
        },
        "xAxis": {"type": "category", "data": ["Q1", "Q2", "Q3"]},
        "yAxis": {"type": "value"},
        "series": [{"type": "bar", "name": "Sales", "data": [12, 20, 8]}],
    }
    app.layout = html.Div(
        [
            html.Button("Download PNG", id="download-png"),
            html.Button("Download SVG", id="download-svg"),
            DashEChartsX(
                id="png-chart",
                option=chart_option,
                style={"width": "600px", "height": "360px", "aspectRatio": "auto"},
            ),
            DashEChartsX(
                id="svg-chart",
                option=chart_option,
                renderer="svg",
                style={"width": "600px", "height": "360px", "aspectRatio": "auto"},
            ),
        ]
    )

    @app.callback(
        Output("png-chart", "download_chart"),
        Input("download-png", "n_clicks"),
        prevent_initial_call=True,
    )
    def request_png(_):
        return {"type": "png", "name": "sales-report", "pixelRatio": 2}

    @app.callback(
        Output("svg-chart", "download_chart"),
        Input("download-svg", "n_clicks"),
        prevent_initial_call=True,
    )
    def request_svg(_):
        return {"type": "svg", "name": "sales-vector"}

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#png-chart canvas", timeout=30)
    dash_duo.wait_for_element("#svg-chart svg", timeout=30)
    dash_duo.driver.execute_script("""
        window.chartDownloads = [];
        HTMLAnchorElement.prototype.click = function() {
          window.chartDownloads.push({
            name: this.download,
            href: this.href,
          });
        };
        """)

    dash_duo.find_element("#download-png").click()

    def downloads(driver):
        return driver.execute_script("return window.chartDownloads;")

    WebDriverWait(dash_duo.driver, 30).until(lambda driver: len(downloads(driver)) >= 1)
    png_download = downloads(dash_duo.driver)[0]
    assert png_download["name"] == "sales-report.png"
    assert png_download["href"].startswith("data:image/png;base64,")

    image_data = base64.b64decode(png_download["href"].split(",", 1)[1])
    image_width, image_height = struct.unpack(">II", image_data[16:24])
    chart_dimensions = dash_duo.driver.execute_script("""
        const chart = document.querySelector("#png-chart");
        return [chart.clientWidth, chart.clientHeight];
        """)
    assert (image_width, image_height) == (
        chart_dimensions[0] * 2,
        chart_dimensions[1] * 2,
    )

    dash_duo.find_element("#download-svg").click()
    WebDriverWait(dash_duo.driver, 30).until(lambda driver: len(downloads(driver)) >= 2)
    svg_download = downloads(dash_duo.driver)[1]
    assert svg_download["name"] == "sales-vector.svg"
    assert svg_download["href"].startswith("data:image/svg+xml")
