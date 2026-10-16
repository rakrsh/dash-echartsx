"""Interactive, deployable DashEChartsX examples gallery."""

import os
from pprint import pformat
from typing import Any

from dash import ALL, Dash, Input, Output, State, ctx, dcc, html, no_update

from dash_echartsx import DashEChartsX

from .demos import DEMO_DETAILS, get_demo_config

DEMO_IDS = tuple(DEMO_DETAILS)
CATEGORY_EXAMPLES = (
    ("Line", ("line-trend", "area-trend")),
    ("Bar", ("bar-race", "bar-stacked", "bar-horizontal")),
    ("Pie", ("pie-share", "pie-rose")),
    ("Financial", ("financial",)),
    ("Map", ("map",)),
    ("3D", ("scatter3d",)),
)
CHART_STYLE = {"width": "100%", "height": "68vh", "aspectRatio": "auto"}

app = Dash(
    __name__,
    assets_folder="assets",
    suppress_callback_exceptions=True,
    title="DashEChartsX Examples",
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


def make_thumbnail(demo_id: str) -> html.Div:
    if demo_id == "bar-race":
        heights = [42, 68, 54, 83, 62]
        return html.Div(
            [
                html.Div(
                    [
                        html.Span(
                            style={
                                "width": f"{width}%",
                                "height": "0.62rem",
                                "background": color,
                            }
                        )
                        for width, color in zip(
                            (60, 82, 70, 96, 76),
                            ("#7898ed", "#48b8b0", "#efb253", "#e27d72", "#9379d5"),
                        )
                    ],
                    className="thumb-bars",
                ),
                html.Div(
                    [html.Span(style={"height": f"{height}%"}) for height in heights],
                    className="thumb-columns",
                ),
            ],
            className="example-thumbnail thumb-bar-race",
            **{"aria-hidden": "true"},
        )
    if demo_id == "bar-stacked":
        return html.Div(
            [
                html.Div(
                    [
                        html.Span(),
                        html.Span(),
                        html.Span(),
                    ],
                    className="stack-column",
                    style={"height": f"{height}%"},
                )
                for height in (48, 62, 75, 88)
            ],
            className="example-thumbnail thumb-stacked",
            **{"aria-hidden": "true"},
        )
    if demo_id == "bar-horizontal":
        widths = (84, 66, 95, 54, 74)
        return html.Div(
            [html.Span(style={"width": f"{width}%"}) for width in widths],
            className="example-thumbnail thumb-horizontal",
            **{"aria-hidden": "true"},
        )
    if demo_id in {"line-trend", "area-trend"}:
        points = (
            (9, 68),
            (19, 57),
            (29, 63),
            (39, 44),
            (49, 50),
            (59, 35),
            (69, 42),
            (80, 23),
            (91, 28),
        )
        return html.Div(
            [html.Span(style={"left": f"{x}%", "top": f"{y}%"}) for x, y in points],
            className=f"example-thumbnail thumb-line {demo_id}",
            **{"aria-hidden": "true"},
        )
    if demo_id in {"pie-share", "pie-rose"}:
        return html.Div(
            html.Span() if demo_id == "pie-share" else None,
            className=f"example-thumbnail thumb-pie {demo_id}",
            **{"aria-hidden": "true"},
        )
    if demo_id == "financial":
        candle_heights = [44, 66, 51, 79, 58, 88, 63, 73, 50, 82, 61]
        return html.Div(
            [
                html.Span(
                    [
                        html.Span(className="candle-wick"),
                        html.Span(className="candle-body"),
                    ],
                    className=f"mini-candle {'is-down' if index % 3 == 0 else 'is-up'}",
                    style={"height": f"{height}%"},
                )
                for index, height in enumerate(candle_heights)
            ],
            className="example-thumbnail thumb-financial",
            **{"aria-hidden": "true"},
        )
    if demo_id == "map":
        return html.Div(
            [
                html.Span(className="map-region region-north"),
                html.Span(className="map-region region-center"),
                html.Span(className="map-region region-south"),
            ],
            className="example-thumbnail thumb-map",
            **{"aria-hidden": "true"},
        )
    if demo_id != "scatter3d":
        raise ValueError(f"Unknown demo thumbnail: {demo_id}")

    points = (
        (20, 26),
        (39, 61),
        (52, 34),
        (64, 52),
        (76, 28),
        (34, 78),
        (58, 82),
        (81, 68),
        (25, 49),
        (69, 76),
        (46, 19),
        (88, 42),
    )
    return html.Div(
        [html.Span(style={"left": f"{x}%", "top": f"{y}%"}) for x, y in points],
        className="example-thumbnail thumb-scatter3d",
        **{"aria-hidden": "true"},
    )


def make_example_card(demo_id: str) -> html.Button:
    details = DEMO_DETAILS[demo_id]
    return html.Button(
        [
            make_thumbnail(demo_id),
            html.Div(
                [
                    html.Div(
                        [
                            html.H3(details["title"]),
                            html.Span("↗", className="card-arrow"),
                        ],
                        className="card-title-row",
                    ),
                    html.P(details["description"], className="card-description"),
                    html.Span(details["badge"], className="card-tag"),
                ],
                className="card-copy",
            ),
        ],
        id={"type": "example-card", "index": demo_id},
        className="example-card",
        type="button",
        **{"aria-label": f"Open {details['title']} example"},
    )


def render_gallery(query: str | None = None) -> html.Div:
    normalized_query = (query or "").strip().casefold()
    sections = []
    for category, demo_ids in CATEGORY_EXAMPLES:
        matches = [
            demo_id
            for demo_id in demo_ids
            if not normalized_query
            or normalized_query
            in " ".join((category, *DEMO_DETAILS[demo_id].values())).casefold()
        ]
        if not matches:
            continue
        sections.append(
            html.Section(
                [
                    html.Div(
                        [
                            html.H2(category),
                            html.Span(
                                f"{len(matches):02d} "
                                f"{'example' if len(matches) == 1 else 'examples'}",
                                className="category-count",
                            ),
                        ],
                        className="category-heading",
                    ),
                    html.Div(
                        [make_example_card(demo_id) for demo_id in matches],
                        className="example-grid",
                    ),
                ],
                className="category-section",
            )
        )
    if not sections:
        sections.append(
            html.Div(
                [
                    html.H2("No examples found"),
                    html.P("Try a different title, chart type, or feature."),
                ],
                className="empty-state",
            )
        )
    return html.Div(sections, className="catalog")


def demo_content(demo_id: str) -> html.Div:
    details = DEMO_DETAILS[demo_id]
    option, maps, enable_gl = get_demo_config(demo_id)
    chart_children = [
        DashEChartsX(
            id="detail-chart",
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
    return html.Section(
        [
            html.Div(
                [
                    html.Div(
                        [
                            html.Span(details["badge"], className="card-tag"),
                            html.H1(details["title"]),
                            html.P(details["description"], className="detail-copy"),
                        ],
                        className="detail-heading",
                    ),
                    html.Div(
                        chart_children,
                        className="detail-chart-frame",
                    ),
                ],
                className="detail-chart-panel",
            ),
            html.Aside(
                [
                    html.Div(
                        [
                            html.H2("Python configuration"),
                            html.Span("DashEChartsX", className="code-language"),
                        ],
                        className="code-heading",
                    ),
                    html.P(
                        "This is the option and component setup used by the chart.",
                        className="detail-copy",
                    ),
                    html.Pre(
                        make_python_snippet(option, maps, enable_gl),
                        id="detail-code",
                        className="code-viewer",
                    ),
                ],
                className="detail-code-panel",
            ),
        ],
        className="example-detail",
    )


app.layout = html.Div(
    [
        html.Header(
            [
                html.A(
                    [
                        html.Span("DX", className="brand-mark"),
                        html.Span("DashEChartsX", className="brand-name"),
                    ],
                    href="https://github.com/rakrsh/dash-echartsx",
                    className="brand",
                ),
                html.Nav(
                    [
                        html.Span("Examples", className="nav-current"),
                        html.A(
                            "Documentation",
                            href="https://rakrsh.github.io/dash-echartsx/",
                        ),
                        html.A(
                            "GitHub",
                            href="https://github.com/rakrsh/dash-echartsx",
                        ),
                    ],
                    className="site-nav",
                ),
            ],
            className="site-header",
        ),
        html.Div(
            [
                html.Div(
                    [
                        html.P("DASHECHARTSX GALLERY", className="eyebrow"),
                        html.H1("Examples"),
                        html.P(
                            "Explore interactive charts built with Apache ECharts "
                            "and Dash. Open an example to try it and inspect its "
                            "Python configuration.",
                            className="catalog-intro",
                        ),
                    ],
                    className="catalog-intro-block",
                ),
                html.Div(
                    [
                        html.Label(
                            "Search examples",
                            htmlFor="example-search",
                            className="sr-only",
                        ),
                        dcc.Input(
                            id="example-search",
                            type="search",
                            value="",
                            debounce=True,
                            placeholder="Search examples",
                            className="example-search",
                        ),
                    ],
                    className="search-control",
                ),
            ],
            id="catalog-tools",
            className="catalog-tools",
        ),
        html.Button(
            "← All examples",
            id="back-to-catalog",
            type="button",
            className="back-link is-hidden",
        ),
        html.Main(
            id="page-content",
            children=render_gallery(),
            className="page-content",
        ),
        dcc.Store(id="selected-demo", data=None),
        dcc.Interval(id="bar-race-clock", interval=1600, n_intervals=0),
        html.Footer(
            [
                html.Span("Built with DashEChartsX"),
                html.Span("Illustrative sample data · no external data services"),
            ],
            className="site-footer",
        ),
    ],
    className="site-shell",
)


@app.callback(
    Output("selected-demo", "data"),
    Input({"type": "example-card", "index": ALL}, "n_clicks"),
    Input("back-to-catalog", "n_clicks"),
    prevent_initial_call=True,
)
def choose_example(_card_clicks: list[int], _back_clicks: int | None) -> str | None:
    triggered_id = ctx.triggered_id
    if triggered_id == "back-to-catalog":
        return None
    if isinstance(triggered_id, dict):
        demo_id = triggered_id.get("index")
        if demo_id in DEMO_DETAILS:
            return demo_id
    return no_update


@app.callback(
    Output("page-content", "children"),
    Output("catalog-tools", "className"),
    Output("back-to-catalog", "className"),
    Input("selected-demo", "data"),
    Input("example-search", "value"),
)
def render_page(demo_id: str | None, query: str | None) -> tuple[html.Div, str, str]:
    if demo_id is not None:
        if demo_id not in DEMO_DETAILS:
            raise ValueError(f"Unknown demo: {demo_id}")
        return demo_content(demo_id), "catalog-tools is-hidden", "back-link"
    return render_gallery(query), "catalog-tools", "back-link is-hidden"


@app.callback(
    Output("detail-chart", "option"),
    Output("detail-code", "children"),
    Input("bar-race-clock", "n_intervals"),
    State("selected-demo", "data"),
)
def advance_bar_race(tick: int, demo_id: str | None) -> tuple[Any, Any]:
    if demo_id != "bar-race":
        return no_update, no_update
    option, maps, enable_gl = get_demo_config(demo_id, tick)
    return option, make_python_snippet(option, maps, enable_gl)


@app.callback(
    Output("region-detail", "children"),
    Input("detail-chart", "click_data"),
    State("selected-demo", "data"),
)
def describe_region(event: dict | None, demo_id: str | None) -> str | Any:
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
