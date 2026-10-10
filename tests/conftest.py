import os
import sys

import chromedriver_autoinstaller
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.firefox.options import Options as FirefoxOptions

# Install a ChromeDriver matching the browser available in the test environment.
chromedriver_autoinstaller.install()

_WEBDRIVER = "chrome"


def pytest_configure(config):
    global _WEBDRIVER
    _WEBDRIVER = config.getoption("webdriver", default="Chrome").lower()
    config.addinivalue_line("markers", "integration: integration tests for Dash apps")
    config.addinivalue_line(
        "markers", "webgl: tests that require browser WebGL support"
    )

    if os.environ.get("CI", "").lower() in {"1", "true", "yes"}:
        config.option.headless = True


def pytest_setup_options():
    if not sys.platform.startswith("linux"):
        return None

    if _WEBDRIVER == "firefox":
        return [FirefoxOptions()]

    options = ChromeOptions()
    options.add_argument("--enable-webgl")
    options.add_argument("--ignore-gpu-blocklist")
    options.add_argument("--use-gl=angle")
    options.add_argument("--use-angle=swiftshader")
    options.add_argument("--enable-unsafe-swiftshader")
    return [options]
