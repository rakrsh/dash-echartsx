#!/usr/bin/env python3

from importlib import metadata, resources

import dash_echartsx


def main() -> int:
    distribution_version = metadata.version("dash-echartsx")
    if dash_echartsx.__version__ != distribution_version:
        raise SystemExit(
            "Installed package version mismatch: "
            f"module={dash_echartsx.__version__}, distribution={distribution_version}"
        )

    package_files = resources.files("dash_echartsx")
    required_assets = ("dash_echartsx.umd.js", "dash_echartsx.gl.umd.js")
    missing_assets = [
        asset for asset in required_assets if not (package_files / asset).is_file()
    ]
    if missing_assets:
        raise SystemExit(
            "Installed wheel is missing required Dash assets: "
            + ", ".join(missing_assets)
        )

    print(
        f"Verified dash-echartsx {distribution_version} and all required Dash assets."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
