from typing import Any, Dict


def js_function(source: str) -> Dict[str, str]:
    """Mark JavaScript source for client-side evaluation by the component."""
    return {"__js_eval__": source}


def option(**values: Any) -> Dict[str, Any]:
    """Build an ECharts option dictionary from keyword arguments."""
    return values