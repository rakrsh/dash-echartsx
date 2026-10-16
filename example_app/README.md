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

The public Space
[`ravikrsh/Dash-App-Gallery`](https://huggingface.co/spaces/ravikrsh/Dash-App-Gallery)
is a free Static Space. It hosts a visual gallery of screenshots and GIF
previews and does not run the interactive Dash server. Its page source is in
[`static_space`](./static_space/).

The deployment workflow stages that static page and the images from
`docs/_static/images/`, then uploads them to the Space. Configure the source
GitHub repository with:

- Repository secret `HF_SPACE_ID`, set to `ravikrsh/Dash-App-Gallery`.
- Repository secret `HF_TOKEN`, a Hugging Face token with write access to that
  Space.

The `Deploy static gallery to Hugging Face Spaces` workflow runs manually or
when the static page, its media, or the workflow changes on `main`. Run the
Dash application locally to interact with charts and inspect their Python
configuration.
