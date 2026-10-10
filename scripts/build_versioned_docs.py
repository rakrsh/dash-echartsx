import json
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "docs" / "_build" / "html"


def write_site_metadata() -> None:
    releases = [
        path.name
        for path in OUTPUT_DIR.iterdir()
        if path.is_dir()
        and (path / "index.html").is_file()
        and re.fullmatch(r"v?\d+\.\d+\.\d+", path.name)
    ]
    releases.sort(
        key=lambda version: tuple(
            int(part) for part in version.removeprefix("v").split(".")
        ),
        reverse=True,
    )
    versions = [
        {"version": "dev", "title": "dev", "aliases": []},
        *[
            {
                "version": version,
                "title": version.removeprefix("v"),
                "aliases": [],
            }
            for version in releases
        ],
    ]
    (OUTPUT_DIR / "versions.json").write_text(
        json.dumps(versions, indent=2) + "\n", encoding="utf-8"
    )
    (OUTPUT_DIR / ".nojekyll").touch()


def main() -> None:
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True)

    subprocess.run(
        ["sphinx-multiversion", "docs", str(OUTPUT_DIR)],
        cwd=ROOT,
        check=True,
    )

    development_docs = OUTPUT_DIR / "main"
    if not development_docs.is_dir():
        generated_versions = sorted(
            path.name for path in OUTPUT_DIR.iterdir() if path.is_dir()
        )
        raise RuntimeError(
            "Sphinx did not build the main development documentation. "
            f"Generated versions: {generated_versions}"
        )

    development_docs.rename(OUTPUT_DIR / "dev")
    (OUTPUT_DIR / "index.html").write_text(
        '<!doctype html><html lang="en"><meta charset="utf-8">'
        '<meta http-equiv="refresh" content="0; url=dev/index.html">'
        "<title>Dash EChartsX documentation</title>"
        '<a href="dev/index.html">Open the development documentation</a>'
        "</html>\n",
        encoding="utf-8",
    )
    write_site_metadata()


if __name__ == "__main__":
    main()
