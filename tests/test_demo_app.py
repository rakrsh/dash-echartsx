import json

import pytest

from example_app.app import app, make_python_snippet
from example_app.demos import DEMO_DETAILS, get_demo_config


def test_demo_options_are_json_compatible():
    for demo_id in DEMO_DETAILS:
        option, maps, enable_gl = get_demo_config(demo_id)
        json.dumps({"option": option, "maps": maps, "enable_gl": enable_gl})


def test_demo_config_includes_map_registration_and_gl_requirement():
    _, maps, enable_gl = get_demo_config("map")
    assert maps[0]["name"] == "harbor-county"
    assert maps[0]["geoJSON"]["type"] == "FeatureCollection"
    assert get_demo_config("scatter3d")[2] is True


def test_live_snippet_includes_component_requirements():
    map_option, maps, _ = get_demo_config("map")
    map_snippet = make_python_snippet(map_option, maps, False)
    assert "maps =" in map_snippet
    assert "geoJSON" in map_snippet

    gl_option, gl_maps, _ = get_demo_config("scatter3d")
    gl_snippet = make_python_snippet(gl_option, gl_maps, True)
    assert "enable_gl=True" in gl_snippet


def test_unknown_demo_is_reported():
    with pytest.raises(ValueError, match="Unknown demo"):
        get_demo_config("not-a-demo")


@pytest.mark.integration
def test_gallery_renders_chart_and_python_configuration(dash_duo):
    dash_duo.start_server(app)
    dash_duo.wait_for_element("#demo-chart canvas", timeout=30)
    assert "realtimeSort" in dash_duo.find_element("#demo-code").text
