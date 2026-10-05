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
@description A Dash component for Apache ECharts.

Keyword arguments:

- id (string; optional):
    Unique identifier for the component.

- className (string; optional):
    CSS class applied to the component container.

- option (boolean | number | string | dict | list; optional):
    ECharts option object."""
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
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'option', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'option', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashEChartsX, self).__init__(**args)

setattr(DashEChartsX, "__init__", _explicitize_args(DashEChartsX.__init__))
