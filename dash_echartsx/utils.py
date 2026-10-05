from typing import Any


def js_function(source: str) -> dict[str, str]:
    """Mark JavaScript source for client-side evaluation by the component."""
    return {"__js_eval__": source}


def option(**values: Any) -> dict[str, Any]:
    """Build an ECharts option dictionary from keyword arguments."""
    return values
