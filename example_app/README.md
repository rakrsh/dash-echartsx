---
title: DashEChartsX Interactive Gallery
emoji: 📊
colorFrom: blue
colorTo: green
sdk: docker
app_port: 7860
---

# DashEChartsX Interactive Gallery

An interactive gallery of DashEChartsX charts with Python configuration
snippets. The demos use deterministic sample data and make no external data
requests.

## Examples catalog

The gallery groups searchable thumbnail cards by chart type. Open a card to
interact with its chart and inspect the Python configuration used to create it.

- **Line:** smoothed trend and filled-area charts.
- **Bar:** animated bar race, stacked comparison, and horizontal ranking.
- **Pie:** doughnut and rose charts.
- **Financial:** candlestick chart with inside and slider zoom.
- **Map:** custom GeoJSON map with click interaction.
- **3D:** ECharts-GL scatter plot.

## Run locally

From this directory, install the requirements and start the Dash server:

```console
python -m pip install -r requirements.txt
python app.py
```

## Hugging Face Spaces deployment

The deployment workflow targets the existing public Space
[`ravikrsh/Dash-App-Gallery`](https://huggingface.co/spaces/ravikrsh/Dash-App-Gallery).
It is currently a static Space; deploying this gallery replaces its static app
with the Docker-based Dash server. Configure the source GitHub repository with:

- Repository secret `HF_SPACE_ID`, set to `ravikrsh/Dash-App-Gallery`.
- Repository secret `HF_TOKEN`, a Hugging Face token with write access to that
  Space.

The `Deploy demo to Hugging Face Spaces` workflow uploads this directory when
manually dispatched or when changes to `example_app/` are pushed to `main`.
The public Space URL is
`https://huggingface.co/spaces/ravikrsh/Dash-App-Gallery`.
