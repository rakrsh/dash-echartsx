# Documentation

The interactive documentation site is built with Sphinx and Furo. It includes
the Python API reference, generated TypeScript prop reference, usage guides,
a runnable example gallery, a migration guide, and a browser-side ECharts
playground. Copyable code blocks are enabled throughout the site.

From the repository root, install the development and documentation
dependencies and build the site:

```sh
uv sync --group dev --group docs
npm ci
npm run docs:build
```

The versioned site is written to `docs/_build/html`; `main` is published as
`dev` and stable semantic-version tags are published as release editions.
Updates pushed to `main` and tagged releases are deployed to GitHub Pages by
the documentation workflow.
