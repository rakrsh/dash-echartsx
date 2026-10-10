import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "docs" / "_build" / "html"


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


if __name__ == "__main__":
    main()
