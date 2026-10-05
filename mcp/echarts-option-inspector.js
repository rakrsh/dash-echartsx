"use strict";

/**
 * Dash EChartsX option inspector MCP server.
 *
 * Parses a local JSON ECharts option and checks the chart series against the
 * modules currently registered by DashEChartsX.tsx.
 */

const fs = require("fs");
const path = require("path");
const { createServer } = require("./lib/stdio-rpc");

const SUPPORTED_SERIES = new Set(["line", "bar", "pie"]);
const SERIES_MODULES = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
};

function inspectOptionFile({ path: optionPath }) {
  if (!optionPath) throw new Error("Missing required argument: path");

  const resolved = path.resolve(optionPath);
  if (!fs.existsSync(resolved)) throw new Error(`File not found: ${resolved}`);
  if (path.extname(resolved).toLowerCase() !== ".json") {
    throw new Error("Expected a .json ECharts option file.");
  }

  let option;
  try {
    option = JSON.parse(
      fs.readFileSync(resolved, "utf8").replace(/^\uFEFF/, ""),
    );
  } catch (error) {
    return {
      valid: false,
      file: resolved,
      issues: [`Invalid JSON: ${error.message}`],
    };
  }

  const issues = [];
  const warnings = [];
  if (!option || typeof option !== "object" || Array.isArray(option)) {
    issues.push("The option root must be a JSON object.");
  }

  const series = option && option.series;
  if (series !== undefined && !Array.isArray(series)) {
    issues.push('The "series" member must be an array when provided.');
  }

  const requestedTypes = new Set();
  if (Array.isArray(series)) {
    series.forEach((entry, index) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
        issues.push(`series[${index}] must be an object.`);
        return;
      }
      if (typeof entry.type !== "string") {
        issues.push(`series[${index}].type must be a string.`);
        return;
      }
      requestedTypes.add(entry.type);
      if (!SUPPORTED_SERIES.has(entry.type)) {
        warnings.push(
          `series[${index}] uses "${entry.type}", which is not registered by the current component.`,
        );
      }
    });
  }

  const requiredModules = [...requestedTypes]
    .filter((type) => SUPPORTED_SERIES.has(type))
    .map((type) => SERIES_MODULES[type]);

  return {
    valid: issues.length === 0,
    file: resolved,
    seriesTypes: [...requestedTypes],
    requiredChartModules: requiredModules,
    issues,
    warnings,
  };
}

createServer({
  name: "dash-echartsx-option-inspector",
  version: "1.0.0",
  tools: [
    {
      name: "inspect_echarts_option",
      description:
        "Parse a local JSON ECharts option and check root/series structure and chart types against the currently registered line, bar, and pie modules.",
      inputSchema: {
        type: "object",
        properties: {
          path: {
            type: "string",
            description: "Path to a JSON ECharts option file.",
          },
        },
        required: ["path"],
      },
      handler: inspectOptionFile,
    },
  ],
});
