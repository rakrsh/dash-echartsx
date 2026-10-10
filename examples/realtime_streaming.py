"""Interval-driven chart with an optional WebSocket JSON feed.

Set ECHARTSX_WEBSOCKET_URL to a feed that sends
{"timestamp": "...", "value": 12.3} messages. Without it, the app streams
deterministic sample values from dcc.Interval.
"""

import json
import math
import os
import queue
import threading
from datetime import datetime, timezone

from dash import Dash, Input, Output, State, dcc, html, no_update

from dash_echartsx import DashEChartsX

MAX_POINTS = 90
WEBSOCKET_URL = os.environ.get("ECHARTSX_WEBSOCKET_URL")
POINT_QUEUE: queue.Queue[list[object]] = queue.Queue(maxsize=MAX_POINTS * 2)
ERROR_QUEUE: queue.Queue[str] = queue.Queue(maxsize=1)
STOP_WORKER = threading.Event()


def put_latest(target: queue.Queue, value: object) -> None:
    try:
        target.put_nowait(value)
    except queue.Full:
        try:
            target.get_nowait()
        except queue.Empty:
            pass
        target.put_nowait(value)


def timestamp_label(value: object) -> str:
    if isinstance(value, (int, float)):
        seconds = value / 1000 if value > 10_000_000_000 else value
        return datetime.fromtimestamp(seconds, timezone.utc).strftime("%H:%M:%S")
    return str(value)


def start_websocket_worker(url: str) -> threading.Thread:
    try:
        from websockets.exceptions import WebSocketException
        from websockets.sync.client import connect
    except ImportError as error:
        raise RuntimeError(
            "Install the optional WebSocket client with `pip install websockets`."
        ) from error

    def receive() -> None:
        while not STOP_WORKER.is_set():
            try:
                with connect(url, open_timeout=5) as websocket:
                    for message in websocket:
                        payload = json.loads(message)
                        point = [
                            timestamp_label(payload["timestamp"]),
                            float(payload["value"]),
                        ]
                        if not math.isfinite(point[1]):
                            raise ValueError("WebSocket value must be finite.")
                        put_latest(POINT_QUEUE, point)
            except (
                OSError,
                TimeoutError,
                WebSocketException,
                ValueError,
                KeyError,
                TypeError,
            ) as error:
                if STOP_WORKER.is_set():
                    return
                put_latest(ERROR_QUEUE, str(error))
                print(f"WebSocket feed unavailable ({error}); retrying in 2 seconds.")
                STOP_WORKER.wait(2)

    worker = threading.Thread(target=receive, name="echarts-websocket", daemon=True)
    worker.start()
    return worker


def make_option(points: list[list[object]]) -> dict:
    return {
        "animation": False,
        "grid": {"left": 58, "right": 24, "top": 48, "bottom": 36},
        "tooltip": {"trigger": "axis"},
        "xAxis": {
            "type": "category",
            "boundaryGap": False,
            "data": [point[0] for point in points],
        },
        "yAxis": {"type": "value", "scale": True, "name": "value"},
        "series": [
            {
                "type": "line",
                "name": "Live value",
                "showSymbol": False,
                "smooth": 0.15,
                "lineStyle": {"width": 2},
                "areaStyle": {"opacity": 0.12},
                "data": [point[1] for point in points],
            }
        ],
    }


app = Dash(__name__)
app.layout = html.Main(
    [
        html.H1("Real-time streaming"),
        html.P(
            "The interval generates sample values by default. Set "
            "ECHARTSX_WEBSOCKET_URL to consume JSON points from a WebSocket feed."
        ),
        DashEChartsX(
            id="stream-chart",
            option=make_option([]),
            lazyUpdate=True,
            style={"width": "100%", "height": "65vh", "aspectRatio": "auto"},
        ),
        dcc.Interval(id="stream-interval", interval=1000, n_intervals=0),
        dcc.Store(id="stream-history", data=[]),
        html.P(id="stream-status", role="status"),
    ],
    style={"width": "94%", "margin": "1rem auto", "fontFamily": "sans-serif"},
)


@app.callback(
    Output("stream-chart", "option"),
    Output("stream-history", "data"),
    Output("stream-status", "children"),
    Input("stream-interval", "n_intervals"),
    State("stream-history", "data"),
)
def update_stream(
    tick: int, history: list[list[object]] | None
) -> tuple[dict, list[list[object]], str] | tuple[object, object, str]:
    points = list(history or [])
    incoming: list[list[object]] = []

    if WEBSOCKET_URL:
        while True:
            try:
                incoming.append(POINT_QUEUE.get_nowait())
            except queue.Empty:
                break
        try:
            feed_error = ERROR_QUEUE.get_nowait()
        except queue.Empty:
            feed_error = None
        if not incoming:
            status = (
                f"Waiting for WebSocket data from {WEBSOCKET_URL}."
                if not feed_error
                else f"WebSocket reconnecting: {feed_error}"
            )
            return no_update, no_update, status
        status = f"Receiving WebSocket data from {WEBSOCKET_URL}."
    else:
        now = datetime.now(timezone.utc).strftime("%H:%M:%S")
        value = 100 + 12 * math.sin(tick / 5) + 2 * math.cos(tick / 2)
        incoming.append([now, round(value, 2)])
        status = "Streaming generated sample data with dcc.Interval."

    points = (points + incoming)[-MAX_POINTS:]
    return make_option(points), points, status


if __name__ == "__main__":
    if WEBSOCKET_URL:
        start_websocket_worker(WEBSOCKET_URL)
    app.run(debug=True, use_reloader=False)
