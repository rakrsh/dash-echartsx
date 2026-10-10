TypeScript component props
==========================

Generated from the TypeScript component metadata during the build.

.. list-table:: DashEChartsX props
   :header-rows: 1
   :widths: 18 32 50

   * - Property
     - TypeScript type
     - Description
   * - ``id``
     - ``string | undefined``
     - Unique identifier for the component. Defaults to None when omitted.
   * - ``className``
     - ``string | undefined``
     - CSS class applied to the component container. Defaults to None when omitted.
   * - ``style``
     - ``CSSProperties | undefined``
     - Inline styles applied to the component container. Defaults to None when omitted.
   * - ``option``
     - ``EChartsOption | undefined``
     - ECharts option object. Defaults to None when omitted.
   * - ``maps``
     - ``DashEChartsMap[] | undefined``
     - GeoJSON or SVG map definitions registered before applying the option. Defaults to None when omitted.
   * - ``enable_gl``
     - ``boolean | undefined``
     - Lazily load ECharts-GL before applying 3D/WebGL options. Defaults to false.
   * - ``gl_bundle_url``
     - ``string | undefined``
     - Optional URL override for the separately served ECharts-GL bundle. Defaults to None when omitted.
   * - ``notMerge``
     - ``boolean | undefined``
     - Replace the current option instead of merging it. Defaults to false.
   * - ``lazyUpdate``
     - ``boolean | undefined``
     - Defer option updates until the next animation frame. Defaults to false.
   * - ``renderer``
     - ``"canvas" | "svg" | undefined``
     - Rendering engine used by ECharts. Defaults to "canvas".
   * - ``theme``
     - ``object | "light" | "dark" | undefined``
     - Named light/dark theme or a custom ECharts theme object. Defaults to None when omitted.
   * - ``click_data``
     - ``Record<string, unknown> | undefined``
     - Latest click event with seriesIndex, dataIndex, name, and value when available. Defaults to None when omitted.
   * - ``dblclick_data``
     - ``Record<string, unknown> | undefined``
     - Latest double-click event with seriesIndex, dataIndex, name, and value when available. Defaults to None when omitted.
   * - ``hover_data``
     - ``Record<string, unknown> | undefined``
     - Latest pointer-over event with seriesIndex, dataIndex, name, and value when available. Defaults to None when omitted.
   * - ``selected_data``
     - ``Record<string, unknown> | undefined``
     - Latest selection-change event, including the selected series and data indexes. Defaults to None when omitted.
   * - ``legend_status``
     - ``Record<string, unknown> | undefined``
     - Latest legend selection event with the legend name and selection state. Defaults to None when omitted.
   * - ``zoom_data``
     - ``Record<string, unknown> | undefined``
     - Latest data-zoom event with range and value bounds when available. Defaults to None when omitted.
   * - ``dispatch_action``
     - ``Record<string, unknown> | undefined``
     - Dispatch a supported ECharts action when this payload changes. Defaults to None when omitted.
   * - ``append_data``
     - ``{ seriesIndex: number; data: any; } | undefined``
     - Append a batch of data to an ECharts series without resending its full option. Defaults to None when omitted.
   * - ``ref``
     - ``LegacyRef<DashEChartsXHandle> | undefined``
     - Allows getting a ref to the component instance. Once the component unmounts, React will set \`ref.current\` to \`null\` (or call the ref with \`null\` if you passed a callback ref). @,see,,{@link ,https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs,}
   * - ``key``
     - ``Key | null | undefined``
     - No description provided.
