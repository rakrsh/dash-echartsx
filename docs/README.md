# Documentation

The interactive documentation site is built with Sphinx and Furo. It includes
the Python API reference, generated TypeScript prop reference, usage guides,
and a browser-side ECharts playground.

From the repository root, install the development and documentation
dependencies and build the site:

```sh
uv sync --group dev --group docs
npm ci
npm run docs:build
```

The generated site is written to `docs/_build/html`. Updates pushed to `main`
are deployed to GitHub Pages by the documentation workflow.
