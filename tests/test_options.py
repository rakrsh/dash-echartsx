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
    assert any(
        asset["relative_package_path"] == "dash_echartsx.gl.umd.js" and asset["dynamic"]
        for asset in _js_dist
    )


def test_custom_map_and_optional_gl_props_are_available():
    component = DashEChartsX(
        maps=[{"name": "custom", "geoJSON": {"type": "FeatureCollection"}}],
        enable_gl=True,
        gl_bundle_url="/assets/dash_echartsx.gl.umd.js",
    )
    assert component.maps == [
        {"name": "custom", "geoJSON": {"type": "FeatureCollection"}}
    ]
    assert component.enable_gl is True
    assert component.gl_bundle_url == "/assets/dash_echartsx.gl.umd.js"
    assert {"maps", "enable_gl", "gl_bundle_url"} <= set(component.available_properties)


def test_event_props_are_available_to_dash_callbacks():
    event_props = {
        "click_data",
        "dblclick_data",
        "hover_data",
        "selected_data",
        "legend_status",
        "zoom_data",
        "dispatch_action",
    }
    component = DashEChartsX(id="chart")
    assert event_props <= set(component.available_properties)


def test_append_data_prop_is_available_for_streaming_updates():
    component = DashEChartsX(id="chart", append_data={"seriesIndex": 0, "data": []})
    assert component.append_data == {"seriesIndex": 0, "data": []}
    assert "append_data" in component.available_properties
