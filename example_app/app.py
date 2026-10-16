"""Interactive, deployable DashEChartsX demo gallery."""

import os
from pprint import pformat
from typing import Any

from dash import Dash, Input, Output, State, dcc, html, no_update

from dash_echartsx import DashEChartsX

from .demos import DEMO_DETAILS, get_demo_config

DEMO_IDS = tuple(DEMO_DETAILS)
CHART_STYLE = {"width": "100%", "height": "68vh", "aspectRatio": "auto"}
APP_STYLE = {
    "minHeight": "100vh",
    "background": "#08111f",
    "color": "#edf3fb",
    "fontFamily": "Inter, ui-sans-serif, system-ui, sans-serif",
}

app = Dash(
    __name__,
    assets_folder="assets",
    suppress_callback_exceptions=True,
    title="DashEChartsX · Interactive Gallery",
)


def make_python_snippet(option: dict, maps: list[dict], enable_gl: bool) -> str:
    lines = [
        "from dash_echartsx import DashEChartsX",
        "",
        f"option = {pformat(option, width=76, sort_dicts=False)}",
    ]
    if maps:
        lines.append(f"maps = {pformat(maps, width=76, sort_dicts=False)}")
    lines.extend(["", "chart = DashEChartsX(option=option,"])
    if maps:
        lines.append("    maps=maps,")
    if enable_gl:
        lines.append("    enable_gl=True,")
    lines.append(")")
    return "\n".join(lines)


def demo_content(demo_id: str) -> html.Div:
    details = DEMO_DETAILS[demo_id]
    option, maps, enable_gl = get_demo_config(demo_id)
    chart_children = [
        DashEChartsX(
            id="demo-chart",
            option=option,
            maps=maps,
            enable_gl=enable_gl,
            notMerge=False,
            lazyUpdate=True,
            style=CHART_STYLE,
        )
    ]
    if demo_id == "map":
        chart_children.append(
            html.P(
                "Click a boundary to inspect its index.",
                id="region-detail",
                className="selection-note",
                role="status",
            )
        )
    return html.Div(
        [
            html.Div(
                [
                    html.Div(
                        [
                            html.P(details["badge"], className="demo-eyebrow"),
                            html.H2(details["title"]),
                            html.P(details["description"], className="demo-copy"),
                        ],
                        className="demo-heading",
                    ),
                    html.Div(
                        chart_children,
                        className="chart-frame",
                    ),
                ],
                className="chart-panel",
            ),
            html.Aside(
                [
                    html.P("LIVE CONFIGURATION", className="demo-eyebrow"),
                    html.P(
                        "This Python dictionary is the option used by the chart.",
                        className="demo-copy",
                    ),
                    html.Pre(
                        make_python_snippet(option, maps, enable_gl),
                        id="demo-code",
                        className="code-viewer",
                    ),
                ],
                className="code-panel",
            ),
        ],
        className="demo-grid",
    )


app.layout = html.Main(
    [
        html.Header(
            [
                html.Div("DASH COMPONENT SHOWCASE", className="brand-label"),
                html.H1(["Charts that ", html.Span("come alive.", className="accent")]),
                html.P(
                    "Explore interactive Apache ECharts demos powered by DashEChartsX. "
                    "Every chart is driven by a Python option you can inspect.",
                    className="intro",
                ),
                html.Div(
                    [
                        html.Span("ECharts 5/6", className="header-chip"),
                        html.Span("Responsive", className="header-chip"),
                        html.Span("Python callbacks", className="header-chip"),
                    ],
                    className="header-chips",
                ),
            ],
            className="hero",
        ),
        html.Section(
            [
                dcc.Tabs(
                    id="demo-tabs",
                    value="bar-race",
                    className="demo-tabs",
                    children=[
                        dcc.Tab(
                            label=details["title"],
                            value=demo_id,
                            className="demo-tab",
                            selected_className="demo-tab-selected",
                        )
                        for demo_id, details in DEMO_DETAILS.items()
                    ],
                ),
                html.Div(id="demo-content", children=demo_content("bar-race")),
            ],
            className="gallery",
        ),
        dcc.Interval(id="bar-race-clock", interval=1600, n_intervals=0),
        html.Footer(
            [
                html.Span("Built with DashEChartsX"),
                html.Span("Sample data · no external data services"),
            ],
            className="footer",
        ),
    ],
    className="page",
    style=APP_STYLE,
)


@app.callback(Output("demo-content", "children"), Input("demo-tabs", "value"))
def select_demo(demo_id: str) -> html.Div:
    if demo_id not in DEMO_IDS:
        raise ValueError(f"Unknown demo: {demo_id}")
    return demo_content(demo_id)


@app.callback(
    Output("demo-chart", "option"),
    Output("demo-code", "children"),
    Input("bar-race-clock", "n_intervals"),
    State("demo-tabs", "value"),
)
def advance_bar_race(tick: int, demo_id: str) -> tuple[Any, Any]:
    if demo_id != "bar-race":
        return no_update, no_update
    option, maps, enable_gl = get_demo_config(demo_id, tick)
    return option, make_python_snippet(option, maps, enable_gl)


@app.callback(
    Output("region-detail", "children"),
    Input("demo-chart", "click_data"),
    State("demo-tabs", "value"),
)
def describe_region(event: dict | None, demo_id: str) -> str | Any:
    if demo_id != "map":
        return no_update
    if not event:
        return "Click a boundary to inspect its index."
    name = event.get("name", "Selected region")
    value = event.get("value")
    return f"{name}: index {value}." if value is not None else f"Selected {name}."


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", "7860")),
        debug=False,
    )
