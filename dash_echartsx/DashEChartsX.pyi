# Generated from component metadata; do not edit.
from collections.abc import Mapping, Sequence
from typing import Any, Literal

from dash.development.base_component import Component
from typing_extensions import NotRequired, TypedDict

class AppendData(TypedDict):
    seriesIndex: int
    data: Any

class MapDefinition(TypedDict):
    name: str
    geoJSON: Any
    specialAreas: NotRequired[Mapping[str, Any]]

class DashEChartsX(Component):
    """Typed Dash wrapper for the Apache ECharts component."""

    def __init__(
        self,
        id: str | Mapping[str, Any] | None = ...,
        className: str | None = ...,
        style: Mapping[str, Any] | None = ...,
        option: Mapping[str, Any] | None = ...,
        maps: Sequence[MapDefinition] | None = ...,
        enable_gl: bool | None = ...,
        gl_bundle_url: str | None = ...,
        notMerge: bool | None = ...,
        lazyUpdate: bool | None = ...,
        renderer: Literal["canvas", "svg"] | None = ...,
        theme: Literal["light", "dark"] | Mapping[str, Any] | None = ...,
        click_data: Mapping[str, Any] | None = ...,
        dblclick_data: Mapping[str, Any] | None = ...,
        hover_data: Mapping[str, Any] | None = ...,
        selected_data: Mapping[str, Any] | None = ...,
        legend_status: Mapping[str, Any] | None = ...,
        zoom_data: Mapping[str, Any] | None = ...,
        dispatch_action: Mapping[str, Any] | None = ...,
        append_data: AppendData | None = ...,
        ref: Any = ...,
        key: str | int | None = ...,
        children: Any = ...,
        **kwargs: Any,
    ) -> None:
        """Create an ECharts component.

        Args:
            children: Child Dash components or text.
            id: Unique identifier for the component. Defaults to None when omitted.
            className: CSS class applied to the component container. Defaults to None
                when omitted.
            style: Inline styles applied to the component container. Defaults to None
                when omitted.
            option: ECharts option object. Defaults to None when omitted.
            maps: GeoJSON or SVG map definitions registered before applying the option.
                Defaults to None when omitted.
            enable_gl: Lazily load ECharts-GL before applying 3D/WebGL options. Defaults
                to false.
            gl_bundle_url: Optional URL override for the separately served ECharts-GL
                bundle. Defaults to None when omitted.
            notMerge: Replace the current option instead of merging it. Defaults to
                false.
            lazyUpdate: Defer option updates until the next animation frame. Defaults to
                false.
            renderer: Rendering engine used by ECharts. Defaults to "canvas".
            theme: Named light/dark theme or a custom ECharts theme object. Defaults to
                None when omitted.
            click_data: Latest click event with seriesIndex, dataIndex, name, and value
                when available. Defaults to None when omitted.
            dblclick_data: Latest double-click event with seriesIndex, dataIndex, name,
                and value when available. Defaults to None when omitted.
            hover_data: Latest pointer-over event with seriesIndex, dataIndex, name, and
                value when available. Defaults to None when omitted.
            selected_data: Latest selection-change event, including the selected series
                and data indexes. Defaults to None when omitted.
            legend_status: Latest legend selection event with the legend name and
                selection state. Defaults to None when omitted.
            zoom_data: Latest data-zoom event with range and value bounds when
                available. Defaults to None when omitted.
            dispatch_action: Dispatch a supported ECharts action when this payload
                changes. Defaults to None when omitted.
            append_data: Append a batch of data to an ECharts series without resending
                its full option. Defaults to None when omitted.
            ref: React component reference. Defaults to None when omitted.
            key: React element key. Defaults to None when omitted.
            kwargs: Additional Dash component properties.
        """
