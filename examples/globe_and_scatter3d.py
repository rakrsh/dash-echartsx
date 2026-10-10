"""Dash example: an ECharts-GL globe with a second 3D scatter plot."""

import base64

from dash import Dash, html

from dash_echartsx import DashEChartsX

TEXTURE_SVG = """\
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="512"
     viewBox="0 0 1024 512">
  <defs>
    <linearGradient id="ocean" x2="0" y2="1">
      <stop offset="0" stop-color="#153b64"/>
      <stop offset="1" stop-color="#07182f"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="512" fill="url(#ocean)"/>
  <g fill="#58a675" stroke="#a6d49a" stroke-width="3">
    <path d="M103 93 151 56 204 65 222 99 195 120
      187 153 151 169 134 204 111 195 99 163 78 146 89 118Z"/>
    <path d="m203 216 33 15 25 45-10 53-23 53-20 65-24-15-7-55
      -21-39 13-50-8-38Z"/>
    <path d="m337 90 38-22 54 10 27 30-16 28-43 2-19 25-32-13
      -31 9-20-26 24-21Z"/>
    <path d="m394 177 45-21 46 25 18 49-20 48-10 66-32 72-24-13
      -14-59-24-38 1-64-20-43Z"/>
    <path d="m489 91 60-29 82 13 42 34-9 29-52 1-25 21-43-10
      -30 24-38-13-13-37Z"/>
    <path d="m585 181 57-20 57 24 24 43-21 39-42 4-25 32-44-9
      -28-44-7-40Z"/>
    <path d="m701 114 45-23 51 18 18 38-28 25-42-6-35 17-31-25Z"/>
    <path d="m800 301 46-16 41 19 14 36-31 31-47-8-28-27Z"/>
  </g>
  <g fill="none" stroke="#6a9fc3" stroke-opacity=".35">
    <path d="M0 128h1024M0 256h1024M0 384h1024"/>
    <path d="M256 0v512M512 0v512M768 0v512"/>
  </g>
</svg>
"""

TEXTURE_URL = "data:image/svg+xml;base64," + base64.b64encode(
    TEXTURE_SVG.encode("utf-8")
).decode("ascii")

GLOBE_OPTION = {
    "backgroundColor": "#07111f",
    "tooltip": {"trigger": "item"},
    "globe": {
        "baseTexture": TEXTURE_URL,
        "globeRadius": 75,
        "shading": "lambert",
        "environment": "#07111f",
        "viewControl": {
            "autoRotate": True,
            "autoRotateSpeed": 4,
            "distance": 180,
        },
        "light": {"main": {"intensity": 1.4, "shadow": True}},
    },
    "series": [
        {
            "name": "Observatories",
            "type": "scatter3D",
            "coordinateSystem": "globe",
            "symbolSize": 13,
            "itemStyle": {"color": "#ffd166", "opacity": 0.95},
            "data": [
                [-122.33, 47.61, 0.2],
                [-73.94, 40.67, 0.2],
                [0.12, 51.51, 0.2],
                [13.4, 52.52, 0.2],
                [139.69, 35.68, 0.2],
                [151.21, -33.87, 0.2],
            ],
        }
    ],
}

SCATTER_OPTION = {
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
        "viewControl": {"autoRotate": True, "autoRotateSpeed": 8},
    },
    "xAxis3D": {"name": "X"},
    "yAxis3D": {"name": "Y"},
    "zAxis3D": {"name": "Z"},
    "series": [
        {
            "type": "scatter3D",
            "symbolSize": 9,
            "data": [
                [x, y, (x * 7 + y * 11) % 35, (x * 13 + y * 17) % 101]
                for x, y in [
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
                ]
            ],
        }
    ],
}

app = Dash(__name__)
app.layout = html.Main(
    [
        html.H1("ECharts-GL: globe and 3D scatter"),
        html.P(
            "The globe uses an embedded texture; both charts work without "
            "external map or image downloads."
        ),
        DashEChartsX(
            id="globe-chart",
            enable_gl=True,
            option=GLOBE_OPTION,
            style={"width": "100%", "height": "55vh", "aspectRatio": "auto"},
        ),
        DashEChartsX(
            id="scatter3d-chart",
            enable_gl=True,
            option=SCATTER_OPTION,
            style={"width": "100%", "height": "55vh", "aspectRatio": "auto"},
        ),
    ],
    style={
        "width": "94%",
        "margin": "1rem auto",
        "fontFamily": "sans-serif",
        "background": "#0b1220",
        "color": "#f3f4f6",
    },
)


if __name__ == "__main__":
    app.run(debug=True)
