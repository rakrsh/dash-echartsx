(() => {
  const result = {
    startedAt: performance.now(),
    target: null,
    binaryFetchedAt: null,
    echartsMs: null,
    plotlyMs: null,
  };
  result.begin = (target) => {
    result.startedAt = performance.now();
    result.target = target;
    result.binaryFetchedAt = null;
    result.echartsMs = null;
    result.plotlyMs = null;
  };
  window.__dashEChartsXWebGLBenchmark = result;

  const fetch = window.fetch.bind(window);
  window.fetch = async (...args) => {
    const resource = args[0];
    const url = typeof resource === "string" ? resource : resource.url;
    const response = await fetch(...args);
    if (url.includes("/_dash_echartsx/binary/")) {
      result.binaryFetchedAt = performance.now();
    }
    return response;
  };

  const observeCharts = () => {
    const echarts = window.dash_echartsx?._echartsLib;
    const echartsElement = document.getElementById("echarts-chart");
    if (echarts && echartsElement) {
      const chart = echarts.getInstanceByDom(echartsElement);
      if (chart && chart !== result.echartsChart) {
        result.echartsChart = chart;
        chart.on("finished", () => {
          const option = chart.getOption?.();
          const datasetOption = option?.dataset;
          const dataset = Array.isArray(datasetOption)
            ? datasetOption[0]
            : datasetOption;
          if (
            result.target === "echarts" &&
            result.echartsMs === null &&
            result.binaryFetchedAt !== null &&
            dataset?.source
          ) {
            result.echartsMs = performance.now() - result.startedAt;
          }
        });
      }
    }

    const plotlyElement = document.querySelector(
      "#plotly-chart .js-plotly-plot",
    );
    if (
      plotlyElement &&
      !plotlyElement.__dashEChartsXBenchmarkBound &&
      plotlyElement.on
    ) {
      plotlyElement.__dashEChartsXBenchmarkBound = true;
      const recordPlotlyRender = () => {
        if (result.target === "plotly" && result.plotlyMs === null) {
          result.plotlyMs = performance.now() - result.startedAt;
        }
      };
      plotlyElement.on("plotly_afterplot", recordPlotlyRender);
      if (plotlyElement._fullLayout) recordPlotlyRender();
    }

    requestAnimationFrame(observeCharts);
  };

  requestAnimationFrame(observeCharts);
})();
