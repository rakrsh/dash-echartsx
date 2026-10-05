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
    Unique identifier for the component.

- className (string; optional):
    CSS class applied to the component container.

- key (string | number; optional)

- lazyUpdate (boolean; optional):
    Defer option updates until the next animation frame.

- notMerge (boolean; optional):
    Replace the current option instead of merging it.

- option (boolean | number | string | dict | list; optional):
    ECharts option object.

- ref (string; optional):
    Allows getting a ref to the component instance. Once the component
    unmounts, React will set `ref.current` to `None` (or call the ref
    with `None` if you passed a callback ref). @,see,,{@link
    ,https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
    React Docs,}.

- renderer (a value equal to: None, 'canvas', 'svg'; optional):
    Rendering engine used by ECharts."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_echartsx'
    _type = 'DashEChartsX'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[typing.Union[str]] = None,
        style: typing.Optional[typing.Any] = None,
        option: typing.Optional[typing.Any] = None,
        notMerge: typing.Optional[typing.Union[bool]] = None,
        lazyUpdate: typing.Optional[typing.Union[bool]] = None,
        renderer: typing.Optional[Literal[None, "canvas", "svg"]] = None,
        ref: typing.Optional[typing.Union[str, typing.Any]] = None,
        key: typing.Optional[typing.Union[str, NumberType]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'key', 'lazyUpdate', 'notMerge', 'option', 'ref', 'renderer', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'key', 'lazyUpdate', 'notMerge', 'option', 'ref', 'renderer', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashEChartsX, self).__init__(**args)

setattr(DashEChartsX, "__init__", _explicitize_args(DashEChartsX.__init__))
