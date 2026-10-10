# Dash EChartsX examples

Install this repository in editable mode and run any app from the repository
root:

```console
python -m pip install -e .
python examples/financial_multi_axis.py
```

| Script                    | Demonstrates                                                                 |
| ------------------------- | ---------------------------------------------------------------------------- |
| `financial_multi_axis.py` | Linked candlestick, volume, and MACD panels with shared zoom.                |
| `realtime_streaming.py`   | `dcc.Interval` updates, bounded history, and an optional WebSocket feed.     |
| `geospatial_map.py`       | Loading local GeoJSON, registering a map, and responding to boundary clicks. |
| `globe_and_scatter3d.py`  | ECharts-GL globe and `scatter3D` charts with an embedded globe texture.      |

The streaming example runs immediately with generated sample values. To use a
WebSocket feed, install the optional client and set
`ECHARTSX_WEBSOCKET_URL` to a server that sends JSON messages with `timestamp`
and numeric `value` fields:

```console
python -m pip install websockets
```

```powershell
$env:ECHARTSX_WEBSOCKET_URL = "ws://localhost:8765"
python examples/realtime_streaming.py
```

For example, a message may look like
`{"timestamp":"2026-10-10T10:30:00Z","value":42.7}`. The example reconnects if
the feed is temporarily unavailable and reports the connection status in the
app.

The 3D example requires a browser with WebGL enabled. No external map texture
or GeoJSON download is needed.
