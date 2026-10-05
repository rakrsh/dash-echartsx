from dash_echartsx import DashEChartsX, _js_dist
from dash_echartsx.utils import js_function, option


def test_js_function_marks_source_for_evaluation():
    source = "function(value) { return value; }"
    assert js_function(source) == {"__js_eval__": source}


def test_option_returns_keyword_arguments():
    assert option(title={"text": "Example"}) == {"title": {"text": "Example"}}


def test_generated_component_and_runtime_assets_are_registered():
    component = DashEChartsX(option={"series": []})
    assert component._namespace == "dash_echartsx"
    assert component.option == {"series": []}
    assert any(
        asset["relative_package_path"] == "dash_echartsx.umd.js" for asset in _js_dist
    )
