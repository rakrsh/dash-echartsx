import json

import pytest
from dash import Dash, Input, Output, html
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX


@pytest.mark.integration
def test_dash_callback_dispatches_legend_select_action(dash_duo):
    app = Dash(__name__)
    app.layout = html.Div(
        [
            html.Button("Select Revenue", id="show-point"),
            html.Div(id="legend-event"),
            DashEChartsX(
                id="chart",
                option={
                    "animation": False,
                    "xAxis": {"type": "category", "data": ["A", "B", "C"]},
                    "yAxis": {"type": "value"},
                    "legend": {"selected": {"Revenue": False}},
                    "series": [{"type": "bar", "name": "Revenue", "data": [12, 20, 8]}],
                },
                style={"width": "800px", "height": "450px", "aspectRatio": "auto"},
            ),
        ]
    )

    @app.callback(
        Output("chart", "dispatch_action"),
        Input("show-point", "n_clicks"),
        prevent_initial_call=True,
    )
    def select_revenue(_):
        return {"type": "legendSelect", "name": "Revenue"}

    @app.callback(Output("legend-event", "children"), Input("chart", "legend_status"))
    def display_legend_status(status):
        return json.dumps(status)

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart canvas", timeout=30)
    dash_duo.find_element("#show-point").click()

    def revenue_is_selected(driver):
        event = driver.find_element(By.ID, "legend-event").text
        payload = json.loads(event) if event else None
        return (
            isinstance(payload, dict)
            and payload.get("selected", {}).get("Revenue") is True
        )

    WebDriverWait(dash_duo.driver, 30).until(revenue_is_selected)
