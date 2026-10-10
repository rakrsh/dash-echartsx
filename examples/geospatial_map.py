"""Dash example: load local GeoJSON and interact with region boundaries."""

import json
from pathlib import Path

from dash import Dash, Input, Output, html

from dash_echartsx import DashEChartsX

GEOJSON_PATH = Path(__file__).parent / "data" / "harbor_county.geojson"
with GEOJSON_PATH.open(encoding="utf-8") as geojson_file:
    HARBOR_COUNTY = json.load(geojson_file)

REGION_VALUES = [
    {"name": "North Harbor", "value": 74},
    {"name": "Old Town", "value": 52},
    {"name": "South Point", "value": 91},
]

app = Dash(__name__)
app.layout = html.Main(
    [
        html.H1("GeoJSON region explorer"),
        html.P("Select a region boundary to inspect its example index."),
        DashEChartsX(
            id="region-chart",
            maps=[{"name": "harbor-county", "geoJSON": HARBOR_COUNTY}],
            option={
                "tooltip": {"trigger": "item"},
                "visualMap": {
                    "min": 0,
                    "max": 100,
                    "left": "left",
                    "bottom": 24,
                    "text": ["High", "Low"],
                    "inRange": {"color": ["#e8f4f8", "#73b3d1", "#174a70"]},
                },
                "series": [
                    {
                        "name": "Harbor index",
                        "type": "map",
                        "map": "harbor-county",
                        "roam": True,
                        "selectedMode": "single",
                        "emphasis": {
                            "label": {"show": True, "fontWeight": "bold"},
                            "itemStyle": {"areaColor": "#f6c85f"},
                        },
                        "select": {
                            "label": {"show": True, "color": "#18212b"},
                            "itemStyle": {"areaColor": "#f6c85f"},
                        },
                        "data": REGION_VALUES,
                    }
                ],
            },
            style={"width": "100%", "height": "70vh", "aspectRatio": "auto"},
        ),
        html.P("Click a boundary to see its value.", id="region-detail", role="status"),
    ],
    style={"width": "94%", "margin": "1rem auto", "fontFamily": "sans-serif"},
)


@app.callback(Output("region-detail", "children"), Input("region-chart", "click_data"))
def describe_region(event: dict | None) -> str:
    if not event:
        return "Click a boundary to see its value."
    name = event.get("name", "Selected region")
    value = event.get("value")
    if value is None:
        return f"Selected {name}."
    return f"{name}: index {value}."


if __name__ == "__main__":
    app.run(debug=True)
