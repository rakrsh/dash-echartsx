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
    if demo_id == "financial":
        return build_financial_option(), [], False
    if demo_id == "map":
        return build_map_option(), [{"name": MAP_NAME, "geoJSON": HARBOR_COUNTY}], False
    if demo_id == "scatter3d":
        return build_scatter3d_option(), [], True
    raise ValueError(f"Unknown demo: {demo_id}")
