import json
from pathlib import Path
from textwrap import wrap

ROOT = Path(__file__).resolve().parents[1]
METADATA_PATH = ROOT / "dash_echartsx" / "metadata.json"
STUB_PATH = ROOT / "dash_echartsx" / "DashEChartsX.pyi"

PROP_TYPES = {
    "id": "str | Mapping[str, Any] | None",
    "append_data": "AppendData | None",
    "className": "str | None",
    "click_data": "Mapping[str, Any] | None",
    "dblclick_data": "Mapping[str, Any] | None",
    "dispatch_action": "Mapping[str, Any] | None",
    "enable_gl": "bool | None",
    "gl_bundle_url": "str | None",
    "hover_data": "Mapping[str, Any] | None",
    "key": "str | int | None",
    "lazyUpdate": "bool | None",
    "legend_status": "Mapping[str, Any] | None",
    "maps": "Sequence[MapDefinition] | None",
    "notMerge": "bool | None",
    "option": "Mapping[str, Any] | None",
    "ref": "Any",
    "renderer": 'Literal["canvas", "svg"] | None',
    "selected_data": "Mapping[str, Any] | None",
    "style": "Mapping[str, Any] | None",
    "theme": 'Literal["light", "dark"] | Mapping[str, Any] | None',
    "zoom_data": "Mapping[str, Any] | None",
}

PROP_DEFAULTS = {
    "enable_gl": "False",
    "lazyUpdate": "False",
    "notMerge": "False",
    "renderer": '"canvas"',
}


def generate_stub() -> str:
    metadata = json.loads(METADATA_PATH.read_text(encoding="utf-8"))
    component = metadata["src/lib/components/DashEChartsX.tsx"]
    props = component["props"]
    missing = props.keys() - PROP_TYPES.keys()
    if missing:
        raise ValueError(
            f"Missing Python type mappings for component props: {sorted(missing)}"
        )

    parameters = [f"        {name}: {PROP_TYPES[name]} = ...," for name in props]
    parameters.extend(
        [
            "        children: Any = ...,",
            "        **kwargs: Any,",
        ]
    )

    docs = [
        "        Args:",
        "            children: Child Dash components or text.",
    ]
    for name, prop in props.items():
        description = prop.get("description", "").replace("\n", " ").strip()
        if name == "ref":
            description = "React component reference."
        elif name == "key" and not description:
            description = "React element key."
        if "Defaults to" not in description:
            default_description = (
                f"Defaults to {PROP_DEFAULTS[name]}."
                if name in PROP_DEFAULTS
                else "Defaults to None when omitted."
            )
            description = f"{description} {default_description}".strip()
        docs.extend(
            wrap(
                f"{name}: {description}",
                width=88,
                initial_indent="            ",
                subsequent_indent="                ",
            )
        )
    docs.extend(
        wrap(
            "kwargs: Additional Dash component properties.",
            width=88,
            initial_indent="            ",
            subsequent_indent="                ",
        )
    )

    return (
        "\n".join(
            [
                "# Generated from component metadata; do not edit.",
                "from collections.abc import Mapping, Sequence",
                "from typing import Any, Literal",
                "",
                "from dash.development.base_component import Component",
                "from typing_extensions import NotRequired, TypedDict",
                "",
                "class AppendData(TypedDict):",
                "    seriesIndex: int",
                "    data: Any",
                "",
                "class MapDefinition(TypedDict):",
                "    name: str",
                "    geoJSON: Any",
                "    specialAreas: NotRequired[Mapping[str, Any]]",
                "",
                "class DashEChartsX(Component):",
                '    """Typed Dash wrapper for the Apache ECharts component."""',
                "",
                "    def __init__(",
                "        self,",
                *parameters,
                "    ) -> None:",
                '        """Create an ECharts component.',
                "",
                *docs,
                '        """',
            ]
        )
        + "\n"
    )


if __name__ == "__main__":
    STUB_PATH.write_text(generate_stub(), encoding="utf-8")
