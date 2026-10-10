(() => {
  const editorElement = document.getElementById("option-editor");
  if (!editorElement) return;

  const examples = {
    bar: {
      animation: false,
      title: { text: "Quarterly sales" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
      yAxis: { type: "value" },
      series: [{ type: "bar", name: "Sales", data: [120, 200, 150, 80] }],
    },
    line: {
      animation: false,
      title: { text: "Weekly visitors" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
      yAxis: { type: "value" },
      series: [{ type: "line", smooth: true, data: [35, 52, 44, 68, 59] }],
    },
    scatter: {
      animation: false,
      title: { text: "Measurements" },
      xAxis: { type: "value" },
      yAxis: { type: "value" },
      series: [
        {
          type: "scatter",
          data: [
            [10, 8],
            [18, 16],
            [26, 12],
            [32, 24],
            [41, 20],
          ],
        },
      ],
    },
  };

  const status = document.getElementById("playground-status");
  const selector = document.getElementById("option-example");
  const reactComponent = window.dash_echartsx?.DashEChartsX;
  if (!window.ace || !window.React || !window.ReactDOM || !reactComponent) {
    status.textContent =
      "The playground could not load its editor or chart runtime.";
    status.dataset.error = "true";
    return;
  }

  const editor = window.ace.edit(editorElement);
  editor.session.setMode("ace/mode/json");
  editor.setTheme("ace/theme/textmate");
  editor.setOptions({
    fontSize: "0.95rem",
    showPrintMargin: false,
    useWorker: false,
  });

  const chartRoot = window.ReactDOM.createRoot(
    document.getElementById("chart-root"),
  );

  function applyOption() {
    try {
      const option = JSON.parse(editor.getValue());
      if (!option || typeof option !== "object" || Array.isArray(option)) {
        throw new TypeError("The option must be a JSON object.");
      }
      chartRoot.render(
        window.React.createElement(reactComponent, {
          option,
          renderer: "canvas",
          style: { width: "100%", height: "100%", aspectRatio: "auto" },
        }),
      );
      status.textContent = "Option applied.";
      status.dataset.error = "false";
    } catch (error) {
      status.textContent = error.message;
      status.dataset.error = "true";
    }
  }

  function loadExample() {
    editor.setValue(JSON.stringify(examples[selector.value], null, 2), -1);
    applyOption();
  }

  selector.addEventListener("change", loadExample);
  document
    .getElementById("apply-option")
    .addEventListener("click", applyOption);
  editor.session.on("change", () => {
    window.clearTimeout(editor.applyTimeout);
    editor.applyTimeout = window.setTimeout(applyOption, 350);
  });
  loadExample();
})();
