import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
METADATA_PATH = ROOT / "dash_echartsx" / "metadata.json"
REFERENCE_PATH = ROOT / "docs" / "reference" / "typescript_props.rst"
COMPONENT_BUNDLE = ROOT / "dash_echartsx" / "dash_echartsx.umd.js"


def generate_typescript_reference() -> str:
    metadata = json.loads(METADATA_PATH.read_text(encoding="utf-8"))
    component = metadata["src/lib/components/DashEChartsX.tsx"]
    lines = [
        "TypeScript component props",
        "==========================",
        "",
        "Generated from the TypeScript component metadata during the build.",
        "",
        ".. list-table:: DashEChartsX props",
        "   :header-rows: 1",
        "   :widths: 18 32 50",
        "",
        "   * - Property",
        "     - TypeScript type",
        "     - Description",
    ]
    for name, prop in component["props"].items():
        raw_type = prop.get("type", {}).get("raw", "unknown")
        description = " ".join(prop.get("description", "").split())
        description = description.replace("`", r"\`") or "No description provided."
        lines.extend(
            [
                f"   * - ``{name}``",
                f"     - ``{raw_type}``",
                f"     - {description}",
            ]
        )
    return "\n".join(lines) + "\n"


def main() -> None:
    if not COMPONENT_BUNDLE.is_file():
        raise FileNotFoundError(
            f"Component bundle missing at {COMPONENT_BUNDLE}; run npm run build first."
        )

    REFERENCE_PATH.parent.mkdir(parents=True, exist_ok=True)
    REFERENCE_PATH.write_text(generate_typescript_reference(), encoding="utf-8")


if __name__ == "__main__":
    main()
