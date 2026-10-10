"""Dash example: candlesticks, trading volume, and MACD on linked axes."""

from datetime import date, timedelta
from math import cos, sin

from dash import Dash, html

from dash_echartsx import DashEChartsX


def ema(values: list[float], period: int) -> list[float]:
    multiplier = 2 / (period + 1)
    result = [values[0]]
    for value in values[1:]:
        result.append((value - result[-1]) * multiplier + result[-1])
    return result


def market_data(count: int = 72) -> tuple[list[str], list[list[float]], list[int]]:
    dates: list[str] = []
    candles: list[list[float]] = []
    volumes: list[int] = []
    previous_close = 96.0
    day = date(2026, 1, 5)

    while len(dates) < count:
        if day.weekday() < 5:
            index = len(dates)
            close = 96 + index * 0.18 + sin(index / 4) * 3.2
            open_price = previous_close + cos(index / 3) * 0.8
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
            volumes.append(850_000 + (index % 11) * 92_000 + index * 1_700)
            previous_close = close
        day += timedelta(days=1)

    return dates, candles, volumes


def build_option() -> dict:
    dates, candles, volumes = market_data()
    closes = [candle[1] for candle in candles]
    fast = ema(closes, 12)
    slow = ema(closes, 26)
    dif = [fast_value - slow_value for fast_value, slow_value in zip(fast, slow)]
    dea = ema(dif, 9)
    macd = [(dif_value - dea_value) * 2 for dif_value, dea_value in zip(dif, dea)]

    volume_data = [
        {
            "value": volume,
            "itemStyle": {"color": "#e85d5d" if candle[1] >= candle[0] else "#27a889"},
        }
        for candle, volume in zip(candles, volumes)
    ]
    macd_data = [
        {
            "value": round(value, 3),
            "itemStyle": {"color": "#e85d5d" if value >= 0 else "#27a889"},
        }
        for value in macd
    ]

    return {
        "animation": False,
        "title": {"text": "Financial dashboard · Candlestick, volume & MACD"},
        "legend": {
            "top": 30,
            "data": ["Price", "Volume", "MACD", "DIF", "DEA"],
        },
        "tooltip": {"trigger": "axis", "axisPointer": {"type": "cross"}},
        "axisPointer": {"link": [{"xAxisIndex": "all"}]},
        "grid": [
            {"left": 64, "right": 28, "top": 82, "height": "48%"},
            {"left": 64, "right": 28, "top": "64%", "height": "13%"},
            {"left": 64, "right": 28, "top": "82%", "height": "12%"},
        ],
        "xAxis": [
            {"type": "category", "data": dates, "gridIndex": 0, "boundaryGap": True},
            {
                "type": "category",
                "data": dates,
                "gridIndex": 1,
                "axisLabel": {"show": False},
                "boundaryGap": True,
            },
            {
                "type": "category",
                "data": dates,
                "gridIndex": 2,
                "axisLabel": {"rotate": 30},
                "boundaryGap": True,
            },
        ],
        "yAxis": [
            {
                "type": "value",
                "gridIndex": 0,
                "scale": True,
                "splitLine": {"show": True},
            },
            {
                "type": "value",
                "gridIndex": 1,
                "scale": True,
                "splitNumber": 2,
                "splitLine": {"show": False},
            },
            {
                "type": "value",
                "gridIndex": 2,
                "scale": True,
                "splitNumber": 3,
                "splitLine": {"show": False},
            },
        ],
        "dataZoom": [
            {"type": "inside", "xAxisIndex": [0, 1, 2], "start": 55, "end": 100},
            {"type": "slider", "xAxisIndex": [0, 1, 2], "top": "96%", "height": 16},
        ],
        "series": [
            {
                "name": "Price",
                "type": "candlestick",
                "xAxisIndex": 0,
                "yAxisIndex": 0,
                "data": candles,
                "itemStyle": {
                    "color": "#e85d5d",
                    "color0": "#27a889",
                    "borderColor": "#e85d5d",
                    "borderColor0": "#27a889",
                },
            },
            {
                "name": "Volume",
                "type": "bar",
                "xAxisIndex": 1,
                "yAxisIndex": 1,
                "data": volume_data,
            },
            {
                "name": "MACD",
                "type": "bar",
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                "data": macd_data,
            },
            {
                "name": "DIF",
                "type": "line",
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                "data": dif,
                "showSymbol": False,
                "lineStyle": {"width": 1.5, "color": "#5470c6"},
            },
            {
                "name": "DEA",
                "type": "line",
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                "data": dea,
                "showSymbol": False,
                "lineStyle": {"width": 1.5, "color": "#fac858"},
            },
        ],
    }


app = Dash(__name__)
app.layout = html.Main(
    [
        html.H1("Financial chart example"),
        html.P("Linked time axes keep price, volume, and MACD aligned while zooming."),
        DashEChartsX(
            id="financial-chart",
            option=build_option(),
            renderer="canvas",
            style={"width": "100%", "height": "82vh", "aspectRatio": "auto"},
        ),
    ],
    style={"width": "96%", "margin": "1rem auto", "fontFamily": "sans-serif"},
)


if __name__ == "__main__":
    app.run(debug=True)
