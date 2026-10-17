import pytest
from dash import Dash, Input, Output, html
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

from dash_echartsx import DashEChartsX, register_theme


@pytest.mark.integration
def test_registered_theme_and_aria_decal_option_render(dash_duo):
    app = Dash(__name__)
    light_theme = register_theme(
        "accessibility-brand",
        {
            "backgroundColor": "#f7f8fa",
            "color": ["#3157a4"],
            "textStyle": {"color": "#202124"},
        },
    )
    dark_theme = register_theme(
        "accessibility-brand",
        {
            "backgroundColor": "#202124",
            "color": ["#7cffb2"],
            "textStyle": {"color": "#e8eaed"},
        },
    )
    app.layout = html.Div(
        [
            html.Button("Toggle theme", id="toggle-theme"),
            DashEChartsX(
                id="chart",
                option={
                    "title": {"text": "Accessible revenue by region"},
                    "aria": {
                        "enabled": True,
                        "decal": {"show": True},
                        "label": {
                            "description": "Bar chart comparing revenue by region"
                        },
                    },
                    "xAxis": {
                        "type": "category",
                        "data": ["North", "South", "West"],
                    },
                    "yAxis": {"type": "value"},
                    "series": [
                        {"type": "bar", "name": "Revenue", "data": [18, 25, 21]}
                    ],
                },
                theme=light_theme,
                renderer="svg",
                style={"width": "800px", "height": "450px", "aspectRatio": "auto"},
            ),
        ]
    )

    @app.callback(
        Output("chart", "theme"),
        Input("toggle-theme", "n_clicks"),
        prevent_initial_call=True,
    )
    def switch_theme(_):
        return dark_theme

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#chart svg", timeout=30)

    def chart_is_accessible(driver):
        chart = driver.find_element(By.ID, "chart")
        return (
            chart.get_attribute("role") == "img"
            and chart.get_attribute("aria-label")
            == "Bar chart comparing revenue by region"
        )

    def chart_has_theme_color(color):
        def check(driver):
            markup = driver.find_element(By.CSS_SELECTOR, "#chart svg").get_attribute(
                "outerHTML"
            )
            return color in markup

        return check

    WebDriverWait(dash_duo.driver, 30).until(chart_is_accessible)
    WebDriverWait(dash_duo.driver, 30).until(
        lambda driver: driver.find_elements(By.CSS_SELECTOR, "#chart svg pattern")
    )
    WebDriverWait(dash_duo.driver, 30).until(chart_has_theme_color("#f7f8fa"))

    dash_duo.find_element("#toggle-theme").click()
    WebDriverWait(dash_duo.driver, 30).until(chart_is_accessible)
    WebDriverWait(dash_duo.driver, 30).until(chart_has_theme_color("#202124"))
