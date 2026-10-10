import os
import shutil
import sys
from pathlib import Path

VERSION_SOURCE_DIR = os.environ.get("SPHINX_MULTIVERSION_SOURCEDIR")
CONFIG_STATIC_DIR = Path(__file__).resolve().parent / "_static"
ROOT = (
    Path(VERSION_SOURCE_DIR).resolve().parent
    if VERSION_SOURCE_DIR
    else Path(__file__).resolve().parents[1]
)
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
    "sphinx_copybutton",
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
html_css_files = ["site.css", "playground.css", "version-switcher.css"]
html_js_files = ["version-switcher.js", "playground.js"]

smv_tag_whitelist = r"^v?\d+\.\d+\.\d+$"
smv_branch_whitelist = r"^main$"
smv_released_pattern = r"^refs/tags/v?\d+\.\d+\.\d+$"
smv_latest_version = "main"
smv_outputdir_format = "{ref.name}"


def copy_playground_bundle(app):
    version_static_dir = Path(app.srcdir) / "_static"
    version_static_dir.mkdir(parents=True, exist_ok=True)
    for filename in ("version-switcher.js", "version-switcher.css"):
        source = CONFIG_STATIC_DIR / filename
        destination = version_static_dir / filename
        if not source.is_file():
            raise FileNotFoundError(f"Documentation asset missing at {source}.")
        if source.resolve() != destination.resolve():
            shutil.copy2(source, destination)

    source = ROOT / "dash_echartsx" / "dash_echartsx.umd.js"
    destination = version_static_dir / "generated" / "dash_echartsx.umd.js"
    if not source.is_file():
        raise FileNotFoundError(
            f"Component bundle missing at {source}; run npm run build first."
        )
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, destination)


def setup(app):
    app.connect("builder-inited", copy_playground_bundle)
    return {"parallel_read_safe": True, "parallel_write_safe": True}
