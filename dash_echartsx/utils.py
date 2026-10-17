import json
from typing import Any

_THEME_REGISTRATION_KEY = "__dash_echartsx_theme_registration__"
_BUILTIN_THEME_NAMES = {"dark", "light"}


def js_function(source: str) -> dict[str, str]:
    """Mark JavaScript source for client-side evaluation by the component."""
    return {"__js_eval__": source}


def option(**values: Any) -> dict[str, Any]:
    """Build an ECharts option dictionary from keyword arguments."""
    return values


def register_theme(name: str, theme: dict[str, Any]) -> dict[str, Any]:
    """Create a named custom theme descriptor for ``DashEChartsX(theme=...)``.

    The descriptor is serialized with the Dash component and registered in the
    browser before ECharts initializes the chart.
    """
    if not isinstance(name, str) or not name.strip():
        raise ValueError("theme name must be a non-empty string")
    if name in _BUILTIN_THEME_NAMES:
        raise ValueError(f"{name!r} is a built-in theme name")
    if not isinstance(theme, dict):
        raise TypeError("theme must be a dictionary")

    try:
        serialized_theme = json.dumps(theme, allow_nan=False)
    except (TypeError, ValueError) as error:
        raise ValueError("theme must contain only JSON-compatible values") from error

    return {
        _THEME_REGISTRATION_KEY: {
            "name": name,
            "theme": json.loads(serialized_theme),
        }
    }
