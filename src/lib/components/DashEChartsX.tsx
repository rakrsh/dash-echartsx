import {
  BarChart,
  CandlestickChart,
  CustomChart,
  LineChart,
  MapChart,
  PieChart,
} from "echarts/charts";
import {
  DataZoomComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { init, registerMap, use as registerEChartsModules } from "echarts/core";
import type { EChartsOption } from "echarts";
import type { EChartsType } from "echarts/core";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { CSSProperties } from "react";
import { resolveJavaScriptFunctions } from "../utils/resolveJavaScriptFunctions";
import { loadEChartsGL } from "../utils/loadEChartsGL";

registerEChartsModules([
  BarChart,
  CandlestickChart,
  CustomChart,
  LineChart,
  MapChart,
  PieChart,
  DataZoomComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
  SVGRenderer,
]);

const namedThemes = {
  light: {
    backgroundColor: "transparent",
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"],
    textStyle: { color: "#333333" },
  },
  dark: {
    backgroundColor: "#202124",
    color: ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9"],
    textStyle: { color: "#e8eaed" },
  },
} satisfies Record<"light" | "dark", Record<string, unknown>>;

const supportedActions = new Set([
  "highlight",
  "downplay",
  "showTip",
  "hideTip",
  "selectDataRange",
  "legendSelect",
  "dataZoom",
]);

function dispatchChartAction(chart: EChartsType, action: unknown): void {
  if (!action || typeof action !== "object" || Array.isArray(action)) {
    console.warn(
      "[DashEChartsX] dispatch_action must be an object with a supported string 'type'.",
    );
    return;
  }

  const payload = action as Record<string, unknown>;
  if (typeof payload.type !== "string" || !supportedActions.has(payload.type)) {
    console.warn(
      `[DashEChartsX] Ignoring unsupported dispatch_action type: ${String(payload.type)}. Supported types: ${[...supportedActions].join(", ")}.`,
    );
    return;
  }

  try {
    chart.dispatchAction(
      payload as Parameters<EChartsType["dispatchAction"]>[0],
    );
  } catch (error) {
    console.warn(
      `[DashEChartsX] Failed to dispatch ECharts action '${payload.type}'.`,
      error,
    );
  }
}

function eventPayload(
  params: unknown,
  fields: readonly string[],
): Record<string, unknown> {
  if (!params || typeof params !== "object" || Array.isArray(params)) {
    return {};
  }

  const source = params as Record<string, unknown>;
  const payload: Record<string, unknown> = {};
  for (const field of fields) {
    if (!(field in source)) continue;

    try {
      const serialized = JSON.stringify(source[field]);
      if (serialized !== undefined) payload[field] = JSON.parse(serialized);
    } catch {
      // Omit non-serializable ECharts internals from Dash callback state.
    }
  }
  return payload;
}

export type DashEChartsXHandle = {
  getInstance: () => EChartsType | null;
};

type DashEChartsMap = {
  /** Map name referenced in the ECharts option. */
  name: string;
  /** GeoJSON source or an SVG definition such as {svg: "<svg>...</svg>"}. */
  geoJSON: Parameters<typeof registerMap>[1];
  /** Optional geographic area overrides. */
  specialAreas?: Parameters<typeof registerMap>[2];
};

type DashEChartsXProps = {
  /** Unique identifier for the component. Defaults to None when omitted. */
  id?: string;
  /** CSS class applied to the component container. Defaults to None when omitted. */
  className?: string;
  /** Inline styles applied to the component container. Defaults to None when omitted. */
  style?: CSSProperties;
  /** ECharts option object. Defaults to None when omitted. */
  option?: EChartsOption;
  /** GeoJSON or SVG map definitions registered before applying the option. Defaults to None when omitted. */
  maps?: DashEChartsMap[];
  /** Lazily load ECharts-GL before applying 3D/WebGL options. Defaults to false. */
  enable_gl?: boolean;
  /** Optional URL override for the separately served ECharts-GL bundle. Defaults to None when omitted. */
  gl_bundle_url?: string;
  /** Replace the current option instead of merging it. Defaults to false. */
  notMerge?: boolean;
  /** Defer option updates until the next animation frame. Defaults to false. */
  lazyUpdate?: boolean;
  /** Rendering engine used by ECharts. Defaults to "canvas". */
  renderer?: "canvas" | "svg";
  /** Named light/dark theme or a custom ECharts theme object. Defaults to None when omitted. */
  theme?: "light" | "dark" | object;
  /** Latest click event with seriesIndex, dataIndex, name, and value when available. Defaults to None when omitted. */
  click_data?: Record<string, unknown>;
  /** Latest double-click event with seriesIndex, dataIndex, name, and value when available. Defaults to None when omitted. */
  dblclick_data?: Record<string, unknown>;
  /** Latest pointer-over event with seriesIndex, dataIndex, name, and value when available. Defaults to None when omitted. */
  hover_data?: Record<string, unknown>;
  /** Latest selection-change event, including the selected series and data indexes. Defaults to None when omitted. */
  selected_data?: Record<string, unknown>;
  /** Latest legend selection event with the legend name and selection state. Defaults to None when omitted. */
  legend_status?: Record<string, unknown>;
  /** Latest data-zoom event with range and value bounds when available. Defaults to None when omitted. */
  zoom_data?: Record<string, unknown>;
  /** Dispatch a supported ECharts action when this payload changes. Defaults to None when omitted. */
  dispatch_action?: Record<string, unknown>;
  /** Append a batch of data to an ECharts series without resending its full option. Defaults to None when omitted. */
  append_data?: Parameters<EChartsType["appendData"]>[0];
};

type DashSetProps = (props: Partial<DashEChartsXProps>) => void;

/**
 * A responsive Apache ECharts component for Dash.
 *
 * All props are optional. If omitted, the option and theme remain unset;
 * enable_gl, notMerge, and lazyUpdate default to false, and renderer defaults
 * to canvas.
 */
const DashEChartsX = forwardRef<DashEChartsXHandle, DashEChartsXProps>(
  function DashEChartsX(componentProps, forwardedRef) {
    const {
      id,
      className,
      style,
      option,
      maps,
      enable_gl = false,
      gl_bundle_url,
      notMerge = false,
      lazyUpdate = false,
      renderer = "canvas",
      theme,
      dispatch_action,
      append_data,
    } = componentProps;
    const dashSetProps = (
      componentProps as DashEChartsXProps & { setProps?: DashSetProps }
    ).setProps;
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<EChartsType | null>(null);
    const setPropsRef = useRef<DashSetProps | undefined>(undefined);
    const lastAppendDataRef =
      useRef<DashEChartsXProps["append_data"]>(undefined);
    const [chartReady, setChartReady] = useState(false);

    useEffect(() => {
      setPropsRef.current = dashSetProps;
    }, [dashSetProps]);

    useImperativeHandle(
      forwardedRef,
      () => ({ getInstance: () => chartRef.current }),
      [],
    );

    useEffect(() => {
      let disposeChart: (() => void) | undefined;
      let cancelled = false;

      const initializeChart = () => {
        if (cancelled) return;

        const container = containerRef.current;
        if (!container) return;

        const resolvedTheme =
          typeof theme === "string" ? namedThemes[theme] : theme;
        const chart = init(container, resolvedTheme, { renderer });
        chartRef.current = chart;

        const listeners: Array<[string, (params: unknown) => void]> = [
          [
            "click",
            (params) =>
              setPropsRef.current?.({
                click_data: eventPayload(params, [
                  "seriesIndex",
                  "dataIndex",
                  "name",
                  "value",
                ]),
              }),
          ],
          [
            "dblclick",
            (params) =>
              setPropsRef.current?.({
                dblclick_data: eventPayload(params, [
                  "seriesIndex",
                  "dataIndex",
                  "name",
                  "value",
                ]),
              }),
          ],
          [
            "mouseover",
            (params) =>
              setPropsRef.current?.({
                hover_data: eventPayload(params, [
                  "seriesIndex",
                  "dataIndex",
                  "name",
                  "value",
                ]),
              }),
          ],
          [
            "selectchanged",
            (params) =>
              setPropsRef.current?.({
                selected_data: eventPayload(params, [
                  "type",
                  "fromAction",
                  "isFromClick",
                  "seriesIndex",
                  "dataIndex",
                  "name",
                  "value",
                  "selected",
                ]),
              }),
          ],
          [
            "legendselectchanged",
            (params) =>
              setPropsRef.current?.({
                legend_status: eventPayload(params, ["name", "selected"]),
              }),
          ],
          [
            "legendselected",
            (params) =>
              setPropsRef.current?.({
                legend_status: eventPayload(params, ["name", "selected"]),
              }),
          ],
          [
            "datazoom",
            (params) =>
              setPropsRef.current?.({
                zoom_data: eventPayload(params, [
                  "dataZoomId",
                  "dataZoomIndex",
                  "start",
                  "end",
                  "startValue",
                  "endValue",
                  "batch",
                ]),
              }),
          ],
        ];
        listeners.forEach(([event, handler]) => chart.on(event, handler));

        let resizeFrame: number | null = null;
        const scheduleResize = () => {
          if (resizeFrame !== null) return;

          resizeFrame = requestAnimationFrame(() => {
            resizeFrame = null;
            if (container.clientWidth > 0 && container.clientHeight > 0) {
              chart.resize();
            }
          });
        };

        const cancelScheduledResize = () => {
          if (resizeFrame !== null) {
            cancelAnimationFrame(resizeFrame);
            resizeFrame = null;
          }
        };

        const cleanup = () => {
          cancelScheduledResize();
          listeners.forEach(([event, handler]) => chart.off(event, handler));
          chart.dispose();
          chartRef.current = null;
          setChartReady(false);
        };

        if (typeof ResizeObserver !== "undefined") {
          const resizeObserver = new ResizeObserver(scheduleResize);
          resizeObserver.observe(container);
          scheduleResize();
          disposeChart = () => {
            resizeObserver.disconnect();
            cleanup();
          };
        } else {
          window.addEventListener("resize", scheduleResize);
          scheduleResize();
          disposeChart = () => {
            window.removeEventListener("resize", scheduleResize);
            cleanup();
          };
        }

        setChartReady(true);
      };

      if (enable_gl) {
        loadEChartsGL(gl_bundle_url)
          .then(initializeChart)
          .catch((error) => {
            console.error(
              "[DashEChartsX] Failed to load the optional ECharts-GL bundle.",
              error,
            );
          });
      } else {
        initializeChart();
      }

      return () => {
        cancelled = true;
        disposeChart?.();
      };
    }, [enable_gl, gl_bundle_url, renderer, theme]);

    useEffect(() => {
      maps?.forEach(({ name, geoJSON, specialAreas }) => {
        registerMap(name, geoJSON, specialAreas);
      });
    }, [maps]);

    useEffect(() => {
      if (chartReady && option) {
        chartRef.current?.setOption(
          resolveJavaScriptFunctions(option),
          notMerge,
          lazyUpdate,
        );
      }
    }, [chartReady, lazyUpdate, maps, notMerge, option, renderer, theme]);

    useEffect(() => {
      if (chartReady && dispatch_action !== undefined && chartRef.current) {
        dispatchChartAction(chartRef.current, dispatch_action);
      }
    }, [chartReady, dispatch_action]);

    useEffect(() => {
      if (append_data === undefined) {
        lastAppendDataRef.current = undefined;
        return;
      }

      if (
        !chartReady ||
        append_data === lastAppendDataRef.current ||
        !chartRef.current
      ) {
        return;
      }

      chartRef.current.appendData(append_data);
      lastAppendDataRef.current = append_data;
    }, [append_data, chartReady]);

    return (
      <div
        id={id}
        ref={containerRef}
        className={className}
        style={{
          width: "100%",
          minWidth: 0,
          aspectRatio: "16 / 9",
          ...style,
        }}
      />
    );
  },
);

DashEChartsX.displayName = "DashEChartsX";

export default DashEChartsX;
