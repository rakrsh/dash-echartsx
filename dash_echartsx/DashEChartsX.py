# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.types import NumberType  # noqa: F401
except ImportError:
    # Backwards compatibility for dash<=4.1.0
    if typing.TYPE_CHECKING:
        raise
    NumberType = typing.Union[  # noqa: F401
        typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
    ]

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]


class DashEChartsX(Component):
    """A DashEChartsX component.


Keyword arguments:

- id (string; optional):
    Unique identifier for the component. Defaults to None when
    omitted.

- append_data (dict; optional):
    Append a batch of data to an ECharts series without resending its
    full option. Defaults to None when omitted.

    `append_data` is a dict with keys:

    - seriesIndex (number; required)

    - data (boolean | number | string | dict | list; required)

- className (string; optional):
    CSS class applied to the component container. Defaults to None
    when omitted.

- click_data (boolean | number | string | dict | list; optional):
    Latest click event with seriesIndex, dataIndex, name, and value
    when available. Defaults to None when omitted.

- dblclick_data (boolean | number | string | dict | list; optional):
    Latest double-click event with seriesIndex, dataIndex, name, and
    value when available. Defaults to None when omitted.

- dispatch_action (boolean | number | string | dict | list; optional):
    Dispatch a supported ECharts action when this payload changes.
    Defaults to None when omitted.

- enable_gl (boolean; optional):
    Lazily load ECharts-GL before applying 3D/WebGL options. Defaults
    to False.

- gl_bundle_url (string; optional):
    Optional URL override for the separately served ECharts-GL bundle.
    Defaults to None when omitted.

- hover_data (boolean | number | string | dict | list; optional):
    Latest pointer-over event with seriesIndex, dataIndex, name, and
    value when available. Defaults to None when omitted.

- key (string | number; optional)

- lazyUpdate (boolean; optional):
    Defer option updates until the next animation frame. Defaults to
    False.

- legend_status (boolean | number | string | dict | list; optional):
    Latest legend selection event with the legend name and selection
    state. Defaults to None when omitted.

- maps (boolean | number | string | dict | list; optional):
    GeoJSON or SVG map definitions registered before applying the
    option. Defaults to None when omitted.

- notMerge (boolean; optional):
    Replace the current option instead of merging it. Defaults to
    False.

- option (boolean | number | string | dict | list; optional):
    ECharts option object. Defaults to None when omitted.

- ref (string; optional):
    Allows getting a ref to the component instance. Once the component
    unmounts, React will set `ref.current` to `None` (or call the ref
    with `None` if you passed a callback ref). @,see,,{@link
    ,https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
    React Docs,}.

- renderer (a value equal to: None, 'canvas', 'svg'; optional):
    Rendering engine used by ECharts. Defaults to \"canvas\".

- selected_data (boolean | number | string | dict | list; optional):
    Latest selection-change event, including the selected series and
    data indexes. Defaults to None when omitted.

- theme (dict; optional):
    Named light/dark theme or a custom ECharts theme object. Defaults
    to None when omitted.

- zoom_data (boolean | number | string | dict | list; optional):
    Latest data-zoom event with range and value bounds when available.
    Defaults to None when omitted."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_echartsx'
    _type = 'DashEChartsX'
    AppendData = TypedDict(
        "AppendData",
            {
            "seriesIndex": NumberType,
            "data": typing.Any
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[typing.Union[str]] = None,
        style: typing.Optional[typing.Any] = None,
        option: typing.Optional[typing.Any] = None,
        maps: typing.Optional[typing.Any] = None,
        enable_gl: typing.Optional[typing.Union[bool]] = None,
        gl_bundle_url: typing.Optional[typing.Union[str]] = None,
        notMerge: typing.Optional[typing.Union[bool]] = None,
        lazyUpdate: typing.Optional[typing.Union[bool]] = None,
        renderer: typing.Optional[Literal[None, "canvas", "svg"]] = None,
        theme: typing.Optional[typing.Union[dict, Literal["light"], Literal["dark"]]] = None,
        click_data: typing.Optional[typing.Any] = None,
        dblclick_data: typing.Optional[typing.Any] = None,
        hover_data: typing.Optional[typing.Any] = None,
        selected_data: typing.Optional[typing.Any] = None,
        legend_status: typing.Optional[typing.Any] = None,
        zoom_data: typing.Optional[typing.Any] = None,
        dispatch_action: typing.Optional[typing.Any] = None,
        append_data: typing.Optional[typing.Union["AppendData"]] = None,
        ref: typing.Optional[typing.Union[str, typing.Any]] = None,
        key: typing.Optional[typing.Union[str, NumberType]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'append_data', 'className', 'click_data', 'dblclick_data', 'dispatch_action', 'enable_gl', 'gl_bundle_url', 'hover_data', 'key', 'lazyUpdate', 'legend_status', 'maps', 'notMerge', 'option', 'ref', 'renderer', 'selected_data', 'style', 'theme', 'zoom_data']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'append_data', 'className', 'click_data', 'dblclick_data', 'dispatch_action', 'enable_gl', 'gl_bundle_url', 'hover_data', 'key', 'lazyUpdate', 'legend_status', 'maps', 'notMerge', 'option', 'ref', 'renderer', 'selected_data', 'style', 'theme', 'zoom_data']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashEChartsX, self).__init__(**args)

setattr(DashEChartsX, "__init__", _explicitize_args(DashEChartsX.__init__))
