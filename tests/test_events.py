import json

from dash import Dash, Input, Output, html
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX


def test_click_and_zoom_events_update_dash_callbacks(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            DashEChartsX(
                id="chart",
                option={
                    "xAxis": {"type": "category", "data": ["A", "B", "C"]},
                    "yAxis": {"type": "value"},
                    "dataZoom": [
                        {"type": "inside", "xAxisIndex": 0, "start": 0, "end": 100}
                    ],
                    "series": [{"type": "bar", "name": "Revenue", "data": [12, 20, 8]}],
                },
                style={"width": "800px", "height": "450px", "aspectRatio": "auto"},
            ),
            html.Button("Zoom", id="zoom"),
            html.Pre("{}", id="click-output"),
            html.Pre("{}", id="zoom-output"),
        ]
    )

    @app.callback(
        Output("chart", "dispatch_action"),
        Input("zoom", "n_clicks"),
        prevent_initial_call=True,
    )
    def zoom_chart(_):
        return {"type": "dataZoom", "start": 10, "end": 90}

    @app.callback(Output("click-output", "children"), Input("chart", "click_data"))
    def show_click_data(value):
        return json.dumps(value or {}, sort_keys=True)

    @app.callback(Output("zoom-output", "children"), Input("chart", "zoom_data"))
    def show_zoom_data(value):
        return json.dumps(value or {}, sort_keys=True)

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas", timeout=30)

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

    def read_payload(driver, element_id):
        text = driver.find_element(By.ID, element_id).text
        return json.loads(text) if text else {}

    WebDriverWait(dash_duo.driver, 10).until(
        lambda driver: read_payload(driver, "click-output").get("dataIndex") == 0
    )
    click_data = read_payload(dash_duo.driver, "click-output")
    assert click_data == {
        "dataIndex": 0,
        "name": "A",
        "seriesIndex": 0,
        "value": 12,
    }

    dash_duo.find_element("#zoom").click()

    WebDriverWait(dash_duo.driver, 10).until(
        lambda driver: {"start", "end"} <= read_payload(driver, "zoom-output").keys()
    )
    zoom_data = read_payload(dash_duo.driver, "zoom-output")
    assert 0 <= zoom_data["start"] < zoom_data["end"] <= 100
