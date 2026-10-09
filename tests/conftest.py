import os
import sys

import chromedriver_autoinstaller
from selenium.webdriver.chrome.options import Options as ChromeOptions

# Install a ChromeDriver matching the browser available in the test environment.
chromedriver_autoinstaller.install()


def pytest_configure(config):
    config.addinivalue_line("markers", "integration: integration tests for Dash apps")

    if os.environ.get("CI", "").lower() in {"1", "true", "yes"}:
        config.option.headless = True


def pytest_setup_options():
    if not sys.platform.startswith("linux"):
        return None

    options = ChromeOptions()
    options.add_argument("--enable-webgl")
    options.add_argument("--ignore-gpu-blocklist")
    options.add_argument("--use-gl=angle")
    options.add_argument("--use-angle=swiftshader")
    options.add_argument("--enable-unsafe-swiftshader")
    return options
