#!/usr/bin/env python3

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VERSION_PATTERN = re.compile(r"v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)")


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: check_release_metadata.py vMAJOR.MINOR.PATCH", file=sys.stderr)
        return 2

    tag = sys.argv[1]
    match = VERSION_PATTERN.fullmatch(tag)
    if match is None:
        print(
            f"Release tag {tag!r} must use the vMAJOR.MINOR.PATCH format.",
            file=sys.stderr,
        )
        return 1

    tag_version = ".".join(match.groups())
    pyproject_source = (ROOT / "pyproject.toml").read_text(encoding="utf-8")
    project_section = re.search(
        r"(?ms)^\[project\]\s*(.*?)(?=^\[|\Z)",
        pyproject_source,
    )
    project_version = (
        re.search(
            r"""(?m)^version\s*=\s*["']([^"']+)["']\s*(?:#.*)?$""",
            project_section.group(1),
        )
        if project_section
        else None
    )
    package_json = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))
    init_source = (ROOT / "dash_echartsx" / "__init__.py").read_text(encoding="utf-8")
    init_match = re.search(r'^__version__ = "([^"]+)"$', init_source, re.MULTILINE)

    if project_version is None:
        print("Could not read [project].version from pyproject.toml.", file=sys.stderr)
        return 1

    versions = {
        "release tag": tag_version,
        "pyproject.toml": project_version.group(1),
        "package.json": package_json["version"],
        "dash_echartsx/__init__.py": init_match.group(1) if init_match else None,
    }
    mismatches = {
        source: version
        for source, version in versions.items()
        if version != tag_version
    }
    if mismatches:
        details = ", ".join(
            f"{source}={version!r}" for source, version in mismatches.items()
        )
        print(
            f"Release tag version {tag_version!r} does not match project versions: "
            f"{details}",
            file=sys.stderr,
        )
        return 1

    print(f"Release tag and package versions match: {tag_version}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
