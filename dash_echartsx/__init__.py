from .binary import BinaryDataStore
from .DashEChartsX import DashEChartsX
from .utils import register_theme

__version__ = "0.2.0"

_js_dist = [
    {
        "relative_package_path": "dash_echartsx.umd.js",
        "namespace": "dash_echartsx",
    },
    {
        "relative_package_path": "dash_echartsx.gl.umd.js",
        "namespace": "dash_echartsx",
        "dynamic": True,
    },
    {
        "dev_package_path": "proptypes.js",
        "namespace": "dash_echartsx",
        "dev_only": True,
    },
]

__all__ = ["BinaryDataStore", "DashEChartsX", "register_theme"]
