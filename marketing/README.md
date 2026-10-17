# DashEChartsX promotion kit

Editable SVG masters and ready-to-share PNG exports for release posts,
community updates, and project introductions. The artwork uses the project's
own chart examples and does not use external data or brand logos.

## Assets

| Asset                                        |  Dimensions | Suggested use                                   |
| -------------------------------------------- | ----------: | ----------------------------------------------- |
| `assets/feature-linkedin.svg` / `.png`       |  1200 x 627 | LinkedIn, Plotly Community Forum, release pages |
| `assets/feature-x.svg` / `.png`              |  1600 x 900 | Twitter/X post or image card                    |
| `assets/python-option-card.svg` / `.png`     | 1080 x 1350 | Short Python snippet card                       |
| `assets/python-multi-axis-card.svg` / `.png` | 1080 x 1350 | Multi-panel option snippet card                 |
| `assets/option-comparison.svg` / `.png`      | 1800 x 1120 | JavaScript ECharts and Python Dash comparison   |

Use the PNG at its native dimensions when posting. The SVG is the editable
source for copy, palette, and layout changes; export it at the dimensions shown
in the table after editing. Check text rendering and safe margins in the
destination platform's preview before publishing.

## Release copy

Start from [`release-announcement.md`](./release-announcement.md). Replace
every bracketed placeholder, confirm the version and highlights, and test the
installation command and links before posting.

## Snippet provenance

The multi-panel card is an excerpt from
[`examples/financial_multi_axis.py`](../examples/financial_multi_axis.py).
The comparison card uses the same small line-chart option in ECharts JavaScript
and `DashEChartsX`; it illustrates the Python/Dash integration, not a separate
charting syntax or a performance claim.
