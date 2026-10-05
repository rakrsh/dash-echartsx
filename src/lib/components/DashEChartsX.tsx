import { BarChart, LineChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { init, use as registerEChartsModules } from "echarts/core";
import type { EChartsOption } from "echarts";
import type { EChartsType } from "echarts/core";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { CSSProperties } from "react";

registerEChartsModules([
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
  SVGRenderer,
]);

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
};

const DashEChartsX = forwardRef<DashEChartsXHandle, DashEChartsXProps>(
  function DashEChartsX(
    {
      id,
      className,
      style,
      option,
      notMerge = false,
      lazyUpdate = false,
      renderer = "canvas",
    },
    forwardedRef,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<EChartsType | null>(null);

    useImperativeHandle(
      forwardedRef,
      () => ({ getInstance: () => chartRef.current }),
      [],
    );

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const chart = init(container, undefined, { renderer });
      chartRef.current = chart;

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
          chart.dispose();
          chartRef.current = null;
        };
      }

      window.addEventListener("resize", scheduleResize);
      scheduleResize();

      return () => {
        window.removeEventListener("resize", scheduleResize);
        cancelScheduledResize();
        chart.dispose();
        chartRef.current = null;
      };
    }, [renderer]);

    useEffect(() => {
      if (option) {
        chartRef.current?.setOption(option, notMerge, lazyUpdate);
      }
    }, [lazyUpdate, notMerge, option, renderer]);

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
