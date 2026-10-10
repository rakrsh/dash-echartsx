import json

import pytest
from dash import Dash, Input, Output, html
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX


@pytest.mark.integration
def test_updated_option_renders_and_click_triggers_dash_callback(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            html.Button("Update chart", id="update-chart"),
            html.Div(id="update-state"),
            html.Pre("{}", id="click-output"),
            DashEChartsX(
                id="chart",
                option={
                    "animation": False,
                    "xAxis": {"type": "category", "data": ["Before", "Later"]},
                    "yAxis": {"type": "value", "min": 0, "max": 100},
                    "series": [{"type": "bar", "data": [20, 40]}],
                },
                style={"width": "800px", "height": "450px", "aspectRatio": "auto"},
            ),
        ]
    )

    @app.callback(
        Output("chart", "option"),
        Output("update-state", "children"),
        Input("update-chart", "n_clicks"),
        prevent_initial_call=True,
    )
    def update_chart(_):
        return (
            {
                "animation": False,
                "xAxis": {"type": "category", "data": ["After", "Later"]},
                "yAxis": {"type": "value", "min": 0, "max": 100},
                "series": [{"type": "bar", "data": [80, 40]}],
            },
            "updated",
        )

    @app.callback(Output("click-output", "children"), Input("chart", "click_data"))
    def show_click_data(value):
        return json.dumps(value or {}, sort_keys=True)

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas")
    dash_duo.find_element("#update-chart").click()
    dash_duo.wait_for_text_to_equal("#update-state", "updated")

    dash_duo.driver.execute_script("""
        const canvas = document.querySelector("#chart canvas");
        const rect = canvas.getBoundingClientRect();
        const clientX = rect.left + rect.width * 0.24;
        const clientY = rect.top + rect.height * 0.65;
        for (const type of ["mousemove", "mousedown", "mouseup", "click"]) {
          canvas.dispatchEvent(new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            clientX,
            clientY,
            button: 0,
            buttons: type === "mousedown" ? 1 : 0
          }));
        }
        """)

    def read_payload(driver):
        text = driver.find_element(By.ID, "click-output").text
        return json.loads(text) if text else {}

    WebDriverWait(dash_duo.driver, 10).until(
        lambda driver: read_payload(driver).get("value") == 80
    )
    assert read_payload(dash_duo.driver) == {
        "dataIndex": 0,
        "name": "After",
        "seriesIndex": 0,
        "value": 80,
    }
