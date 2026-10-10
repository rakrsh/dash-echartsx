import pytest
from dash import Dash, Input, Output, html
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX


@pytest.mark.integration
def test_chart_layout_stays_responsive_across_viewport_sizes(dash_duo, tmp_path):
    app = Dash(__name__)
    app.layout = html.Div(
        DashEChartsX(
            id="chart",
            option={
                "animation": False,
                "xAxis": {"type": "category", "data": ["A", "B", "C"]},
                "yAxis": {"type": "value"},
                "series": [{"type": "bar", "data": [12, 20, 8]}],
            },
            style={
                "width": "90vw",
                "maxWidth": "900px",
                "height": "60vh",
                "aspectRatio": "auto",
            },
        ),
        style={"width": "100vw", "height": "100vh"},
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas")
    dash_duo.driver.set_window_size(1280, 900)

    def chart_size(driver):
        return driver.execute_script("""
            const container = document.querySelector("#chart");
            const canvas = container.querySelector("canvas");
            if (!canvas) return null;
            const containerRect = container.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();
            return {
              width: containerRect.width,
              height: containerRect.height,
              canvasWidth: canvasRect.width,
              canvasHeight: canvasRect.height
            };
            """)

    wait = WebDriverWait(dash_duo.driver, 15)
    desktop = wait.until(
        lambda driver: (
            size
            if (size := chart_size(driver))
            and size["width"] > 700
            and size["height"] > 400
            and abs(size["width"] - size["canvasWidth"]) < 2
            and abs(size["height"] - size["canvasHeight"]) < 2
            else False
        )
    )
    desktop_screenshot = tmp_path / "chart-desktop.png"
    assert dash_duo.driver.save_screenshot(str(desktop_screenshot))

    dash_duo.driver.set_window_size(720, 900)
    mobile = wait.until(
        lambda driver: (
            size
            if (size := chart_size(driver))
            and size["width"] < desktop["width"] - 100
            and abs(size["width"] - size["canvasWidth"]) < 2
            and abs(size["height"] - size["canvasHeight"]) < 2
            else False
        )
    )
    mobile_screenshot = tmp_path / "chart-narrow.png"
    assert dash_duo.driver.save_screenshot(str(mobile_screenshot))

    assert abs(desktop["width"] - desktop["canvasWidth"]) < 2
    assert abs(desktop["height"] - desktop["canvasHeight"]) < 2
    assert abs(mobile["width"] - mobile["canvasWidth"]) < 2
    assert abs(mobile["height"] - mobile["canvasHeight"]) < 2
    assert desktop_screenshot.stat().st_size > 1000
    assert mobile_screenshot.stat().st_size > 1000
    assert desktop_screenshot.read_bytes() != mobile_screenshot.read_bytes()


@pytest.mark.integration
def test_chart_resizes_when_hidden_dash_app_container_is_shown(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            html.Button("Show chart", id="show-chart"),
            DashEChartsX(
                id="chart",
                option={
                    "animation": False,
                    "xAxis": {"type": "category", "data": ["A", "B"]},
                    "yAxis": {"type": "value"},
                    "series": [{"type": "bar", "data": [12, 20]}],
                },
                style={
                    "display": "none",
                    "width": "90vw",
                    "maxWidth": "900px",
                    "height": "60vh",
                    "aspectRatio": "auto",
                },
            ),
        ]
    )

    @app.callback(
        Output("chart", "style"),
        Input("show-chart", "n_clicks"),
        prevent_initial_call=True,
    )
    def show_chart(_):
        return {
            "display": "block",
            "width": "90vw",
            "maxWidth": "900px",
            "height": "60vh",
            "aspectRatio": "auto",
        }

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas")
    dash_duo.find_element("#show-chart").click()

    def visible_chart_is_sized(driver):
        return driver.execute_script("""
            const container = document.querySelector("#chart");
            const canvas = container.querySelector("canvas");
            if (!canvas) return false;
            const containerRect = container.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();
            return containerRect.width > 200
              && containerRect.height > 200
              && Math.abs(containerRect.width - canvasRect.width) < 2
              && Math.abs(containerRect.height - canvasRect.height) < 2;
            """)

    WebDriverWait(dash_duo.driver, 15).until(visible_chart_is_sized)
