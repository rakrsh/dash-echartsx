import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

project = "Dash EChartsX"
copyright = "2026, dash-echartsx contributors"
author = "dash-echartsx contributors"
release = "0.1.0"

extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
    "sphinx.ext.viewcode",
]

autoclass_content = "class"
autodoc_default_options = {"members": True, "show-inheritance": False}
autodoc_typehints = "description"
intersphinx_mapping = {
    "python": ("https://docs.python.org/3", None),
}
exclude_patterns = ["_build"]

html_theme = "furo"
html_title = "Dash EChartsX"
html_static_path = ["_static"]
html_css_files = ["site.css", "playground.css"]
