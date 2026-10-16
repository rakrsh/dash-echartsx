"""Example options and metadata used by the interactive demo gallery."""

import json
import math
from datetime import date, timedelta
from pathlib import Path

MAP_NAME = "harbor-county"
MAP_DATA_PATH = Path(__file__).parent / "data" / "harbor_county.geojson"
with MAP_DATA_PATH.open(encoding="utf-8") as geojson_file:
    HARBOR_COUNTY = json.load(geojson_file)

REGION_VALUES = [
    {"name": "North Harbor", "value": 74},
    {"name": "Old Town", "value": 52},
    {"name": "South Point", "value": 91},
]

BAR_RACE_NAMES = [
    "Japan",
    "Germany",
    "Brazil",
    "Canada",
    "India",
    "France",
    "Australia",
    "Kenya",
]
BAR_RACE_BASE_VALUES = [42, 37, 34, 30, 27, 24, 20, 16]

DEMO_DETAILS = {
    "bar-race": {
        "title": "Animated bar race",
        "description": "Watch a ranked dataset evolve with smooth ECharts transitions.",
        "badge": "ECharts · animation",
    },
    "bar-stacked": {
        "title": "Stacked bar chart",
        "description": "Compare category totals and their component series.",
        "badge": "ECharts · bar",
    },
    "bar-horizontal": {
        "title": "Horizontal bar chart",
        "description": "Compare ranked values with an easy-to-scan horizontal layout.",
        "badge": "ECharts · bar",
    },
    "line-trend": {
        "title": "Smoothed line chart",
        "description": "Follow a weekly trend with a responsive value axis.",
        "badge": "ECharts · line",
    },
    "area-trend": {
        "title": "Area chart",
        "description": "Emphasize changing volume with a smooth filled line.",
        "badge": "ECharts · area",
    },
    "pie-share": {
        "title": "Doughnut chart",
        "description": "Compare a category mix with a compact ring chart.",
        "badge": "ECharts · pie",
    },
    "pie-rose": {
        "title": "Rose chart",
        "description": "Explore category values with a radius-encoded rose chart.",
        "badge": "ECharts · pie",
    },
    "financial": {
        "title": "Financial markets",
        "description": (
            "Explore candlesticks with linked inside and slider zoom controls."
        ),
        "badge": "ECharts · candlestick",
    },
    "map": {
        "title": "Custom vector map",
        "description": "Select a locally bundled GeoJSON region to inspect its index.",
        "badge": "Dash callbacks · GeoJSON",
    },
    "scatter3d": {
        "title": "3D scatter",
        "description": "Rotate and inspect a 3D point cloud rendered with ECharts-GL.",
        "badge": "ECharts-GL · WebGL",
    },
}


def build_bar_race_option(tick: int = 0) -> dict:
    values = [
        round(
            base + tick * (index + 1) * 0.34 + 4 * math.sin((tick + index * 3) / 3),
            1,
        )
        for index, base in enumerate(BAR_RACE_BASE_VALUES)
    ]
    return {
        "animationDuration": 0,
        "animationDurationUpdate": 1100,
        "animationEasingUpdate": "cubicOut",
        "grid": {
            "left": 20,
            "right": 56,
            "top": 24,
            "bottom": 28,
            "containLabel": True,
        },
        "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
        "xAxis": {
            "type": "value",
            "max": "dataMax",
            "axisLabel": {"color": "#a9b7c8"},
            "splitLine": {"lineStyle": {"color": "#263449"}},
        },
        "yAxis": {
            "type": "category",
            "inverse": True,
            "data": BAR_RACE_NAMES,
            "axisLabel": {"color": "#e7edf5"},
            "axisLine": {"show": False},
            "axisTick": {"show": False},
        },
        "series": [
            {
                "type": "bar",
                "realtimeSort": True,
                "data": values,
                "barMaxWidth": 28,
                "label": {
                    "show": True,
                    "position": "right",
                    "color": "#e7edf5",
                    "valueAnimation": True,
                },
                "itemStyle": {
                    "borderRadius": [0, 6, 6, 0],
                    "color": {
                        "type": "linear",
                        "x": 0,
                        "y": 0,
                        "x2": 1,
                        "y2": 0,
                        "colorStops": [
                            {"offset": 0, "color": "#3578c8"},
                            {"offset": 1, "color": "#5ee0bd"},
                        ],
                    },
                },
            }
        ],
    }


def build_stacked_bar_option() -> dict:
    return {
        "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
        "legend": {"top": 8, "textStyle": {"color": "#dce6f2"}},
        "grid": {"left": 48, "right": 24, "top": 56, "bottom": 34},
        "xAxis": {
            "type": "category",
            "data": ["Q1", "Q2", "Q3", "Q4"],
            "axisLabel": {"color": "#a9b7c8"},
        },
        "yAxis": {
            "type": "value",
            "axisLabel": {"color": "#a9b7c8"},
            "splitLine": {"lineStyle": {"color": "#263449"}},
        },
        "series": [
            {
                "name": "Online",
                "type": "bar",
                "stack": "total",
                "data": [120, 145, 168, 192],
            },
            {
                "name": "Retail",
                "type": "bar",
                "stack": "total",
                "data": [92, 104, 118, 126],
            },
            {
                "name": "Partners",
                "type": "bar",
                "stack": "total",
                "data": [45, 55, 63, 74],
            },
        ],
    }


def build_horizontal_bar_option() -> dict:
    return {
        "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
        "grid": {
            "left": 24,
            "right": 48,
            "top": 20,
            "bottom": 24,
            "containLabel": True,
        },
        "xAxis": {
            "type": "value",
            "axisLabel": {"color": "#a9b7c8"},
            "splitLine": {"lineStyle": {"color": "#263449"}},
        },
        "yAxis": {
            "type": "category",
            "inverse": True,
            "data": ["Oslo", "Tokyo", "Nairobi", "Lisbon", "Toronto"],
            "axisLabel": {"color": "#e7edf5"},
        },
        "series": [
            {
                "type": "bar",
                "data": [98, 86, 75, 68, 54],
                "barMaxWidth": 26,
                "itemStyle": {"color": "#5f91e8", "borderRadius": [0, 5, 5, 0]},
                "label": {"show": True, "position": "right", "color": "#dce6f2"},
            }
        ],
    }


def build_line_option(area: bool = False) -> dict:
    series = {
        "name": "Visitors",
        "type": "line",
        "smooth": True,
        "showSymbol": False,
        "data": [28, 42, 35, 58, 52, 76, 64, 91, 82, 108, 96, 126],
        "lineStyle": {"width": 3, "color": "#678de8"},
    }
    if area:
        series["areaStyle"] = {"opacity": 0.2, "color": "#678de8"}
    return {
        "tooltip": {"trigger": "axis"},
        "grid": {"left": 48, "right": 24, "top": 24, "bottom": 34},
        "xAxis": {
            "type": "category",
            "boundaryGap": False,
            "data": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            "axisLabel": {"color": "#a9b7c8"},
        },
        "yAxis": {
            "type": "value",
            "axisLabel": {"color": "#a9b7c8"},
            "splitLine": {"lineStyle": {"color": "#263449"}},
        },
        "series": [series],
    }


def build_pie_option(rose: bool = False) -> dict:
    pie_series = {
        "type": "pie",
        "radius": ["38%", "70%"] if not rose else ["18%", "72%"],
        "roseType": "radius" if rose else False,
        "itemStyle": {"borderRadius": 6, "borderColor": "#101827", "borderWidth": 3},
        "label": {"color": "#dce6f2"},
        "data": [
            {"name": "Direct", "value": 42},
            {"name": "Search", "value": 28},
            {"name": "Social", "value": 18},
            {"name": "Referral", "value": 12},
        ],
    }
    if not rose:
        pie_series.pop("roseType")
    return {
        "tooltip": {"trigger": "item", "formatter": "{b}: {c} ({d}%)"},
        "legend": {"bottom": 4, "textStyle": {"color": "#dce6f2"}},
        "series": [pie_series],
    }


def build_financial_option() -> dict:
    dates: list[str] = []
    candles: list[list[float]] = []
    previous_close = 96.0
    day = date(2026, 1, 5)

    while len(dates) < 44:
        if day.weekday() < 5:
            index = len(dates)
            close = 96 + index * 0.18 + math.sin(index / 4) * 3.2
            open_price = previous_close + math.cos(index / 3) * 0.8
            high = max(open_price, close) + 0.7 + (index % 4) * 0.15
            low = min(open_price, close) - 0.6 - (index % 3) * 0.12
            dates.append(day.strftime("%b %d"))
            candles.append(
                [
                    round(open_price, 2),
                    round(close, 2),
                    round(low, 2),
                    round(high, 2),
                ]
            )
            previous_close = close
        day += timedelta(days=1)

    return {
        "animation": False,
        "title": {"text": "Northstar Industries · sample price", "left": "center"},
        "tooltip": {"trigger": "axis", "axisPointer": {"type": "cross"}},
        "grid": {"left": 58, "right": 30, "top": 64, "bottom": 84},
        "xAxis": {
            "type": "category",
            "data": dates,
            "boundaryGap": True,
            "axisLabel": {"color": "#a9b7c8"},
        },
        "yAxis": {
            "type": "value",
            "scale": True,
            "axisLabel": {"color": "#a9b7c8"},
            "splitLine": {"lineStyle": {"color": "#263449"}},
        },
        "dataZoom": [
            {"type": "inside", "start": 50, "end": 100},
            {"type": "slider", "start": 50, "end": 100, "bottom": 24},
        ],
        "series": [
            {
                "name": "Price",
                "type": "candlestick",
                "data": candles,
                "itemStyle": {
                    "color": "#e85d5d",
                    "color0": "#27a889",
                    "borderColor": "#e85d5d",
                    "borderColor0": "#27a889",
                },
            }
        ],
    }


def build_map_option() -> dict:
    return {
        "tooltip": {"trigger": "item"},
        "visualMap": {
            "min": 0,
            "max": 100,
            "left": "left",
            "bottom": 20,
            "text": ["High", "Low"],
            "textStyle": {"color": "#dce6f2"},
            "inRange": {"color": ["#b7e4ec", "#4d9ab8", "#174a70"]},
        },
        "series": [
            {
                "name": "Harbor index",
                "type": "map",
                "map": MAP_NAME,
                "roam": True,
                "selectedMode": "single",
                "emphasis": {
                    "label": {"show": True, "fontWeight": "bold"},
                    "itemStyle": {"areaColor": "#f6c85f"},
                },
                "data": REGION_VALUES,
            }
        ],
    }


def build_scatter3d_option() -> dict:
    points = [
        (1, 3),
        (3, 7),
        (5, 2),
        (7, 8),
        (9, 4),
        (2, 9),
        (6, 6),
        (8, 1),
        (4, 5),
        (10, 10),
        (11, 3),
        (3, 11),
        (12, 6),
        (7, 12),
    ]
    return {
        "backgroundColor": "#101827",
        "tooltip": {},
        "visualMap": {
            "dimension": 3,
            "min": 0,
            "max": 100,
            "inRange": {"color": ["#3b82f6", "#4ade80", "#facc15", "#fb7185"]},
            "textStyle": {"color": "#e5e7eb"},
        },
        "grid3D": {
            "boxWidth": 110,
            "boxDepth": 80,
            "viewControl": {"autoRotate": True, "autoRotateSpeed": 5},
        },
        "xAxis3D": {"name": "X"},
        "yAxis3D": {"name": "Y"},
        "zAxis3D": {"name": "Signal"},
        "series": [
            {
                "type": "scatter3D",
                "symbolSize": 12,
                "data": [
                    [x, y, (x * 7 + y * 11) % 35, (x * 13 + y * 17) % 101]
                    for x, y in points
                ],
            }
        ],
    }


def get_demo_config(demo_id: str, tick: int = 0) -> tuple[dict, list[dict], bool]:
    if demo_id == "bar-race":
        return build_bar_race_option(tick), [], False
    if demo_id == "bar-stacked":
        return build_stacked_bar_option(), [], False
    if demo_id == "bar-horizontal":
        return build_horizontal_bar_option(), [], False
    if demo_id == "line-trend":
        return build_line_option(), [], False
    if demo_id == "area-trend":
        return build_line_option(area=True), [], False
    if demo_id == "pie-share":
        return build_pie_option(), [], False
    if demo_id == "pie-rose":
        return build_pie_option(rose=True), [], False
    if demo_id == "financial":
        return build_financial_option(), [], False
    if demo_id == "map":
        return build_map_option(), [{"name": MAP_NAME, "geoJSON": HARBOR_COUNTY}], False
    if demo_id == "scatter3d":
        return build_scatter3d_option(), [], True
    raise ValueError(f"Unknown demo: {demo_id}")
