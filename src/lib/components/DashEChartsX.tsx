import { BarChart, CustomChart, LineChart, PieChart } from "echarts/charts";
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { init, use as registerEChartsModules } from "echarts/core";
import type { EChartsOption } from "echarts";
import type { EChartsType } from "echarts/core";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { CSSProperties } from "react";
import { resolveJavaScriptFunctions } from "../utils/resolveJavaScriptFunctions";

registerEChartsModules([
  BarChart,
  CustomChart,
  LineChart,
  PieChart,
  DataZoomComponent,
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

type DashEChartsXProps = {
  /** Unique identifier for the component. */
  id?: string;
  /** CSS class applied to the component container. */
  className?: string;
  /** Inline styles applied to the component container. */
  style?: CSSProperties;
  /** ECharts option object. */
  option?: EChartsOption;
  /** Replace the current option instead of merging it. */
  notMerge?: boolean;
  /** Defer option updates until the next animation frame. */
  lazyUpdate?: boolean;
  /** Rendering engine used by ECharts. */
  renderer?: "canvas" | "svg";
  /** Named light/dark theme or a custom ECharts theme object. */
  theme?: "light" | "dark" | object;
  /** Latest click event with seriesIndex, dataIndex, name, and value when available. */
  click_data?: Record<string, unknown>;
  /** Latest double-click event with seriesIndex, dataIndex, name, and value when available. */
  dblclick_data?: Record<string, unknown>;
  /** Latest pointer-over event with seriesIndex, dataIndex, name, and value when available. */
  hover_data?: Record<string, unknown>;
  /** Latest selection-change event, including the selected series and data indexes. */
  selected_data?: Record<string, unknown>;
  /** Latest legend selection event with the legend name and selection state. */
  legend_status?: Record<string, unknown>;
  /** Latest data-zoom event with range and value bounds when available. */
  zoom_data?: Record<string, unknown>;
  /** Dispatch a supported ECharts action when this payload changes. */
  dispatch_action?: Record<string, unknown>;
};

type DashSetProps = (props: Partial<DashEChartsXProps>) => void;

const DashEChartsX = forwardRef<DashEChartsXHandle, DashEChartsXProps>(
  function DashEChartsX(componentProps, forwardedRef) {
    const {
      id,
      className,
      style,
      option,
      notMerge = false,
      lazyUpdate = false,
      renderer = "canvas",
      theme,
      dispatch_action,
    } = componentProps;
    const dashSetProps = (
      componentProps as DashEChartsXProps & { setProps?: DashSetProps }
    ).setProps;
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<EChartsType | null>(null);
    const setPropsRef = useRef<DashSetProps | undefined>(undefined);

    useEffect(() => {
      setPropsRef.current = dashSetProps;
    }, [dashSetProps]);

    useImperativeHandle(
      forwardedRef,
      () => ({ getInstance: () => chartRef.current }),
      [],
    );

    useEffect(() => {
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

      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver(scheduleResize);
        resizeObserver.observe(container);
        scheduleResize();

        return () => {
          resizeObserver.disconnect();
          cancelScheduledResize();
          listeners.forEach(([event, handler]) => chart.off(event, handler));
          chart.dispose();
          chartRef.current = null;
        };
      }

      window.addEventListener("resize", scheduleResize);
      scheduleResize();

      return () => {
        window.removeEventListener("resize", scheduleResize);
        cancelScheduledResize();
        listeners.forEach(([event, handler]) => chart.off(event, handler));
        chart.dispose();
        chartRef.current = null;
      };
    }, [renderer, theme]);

    useEffect(() => {
      if (option) {
        chartRef.current?.setOption(
          resolveJavaScriptFunctions(option),
          notMerge,
          lazyUpdate,
        );
      }
    }, [lazyUpdate, notMerge, option, renderer, theme]);

    useEffect(() => {
      if (dispatch_action !== undefined && chartRef.current) {
        dispatchChartAction(chartRef.current, dispatch_action);
      }
    }, [dispatch_action]);

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
