import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const validatorPath = fileURLToPath(
  new URL("./validate_echarts_option.mjs", import.meta.url),
);

function validate(option, flags = []) {
  return spawnSync(process.execPath, [validatorPath, ...flags], {
    encoding: "utf8",
    input: JSON.stringify(option),
  });
}

const basicBarOption = {
  title: { text: "Quarterly sales" },
  xAxis: { type: "category", data: ["Q1", "Q2"] },
  yAxis: { type: "value" },
  series: [{ type: "bar", data: [12, 20] }],
};

test("accepts valid ECharts 5 options using registered component modules", () => {
  const result = validate(basicBarOption);

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Valid against ECharts 5\.6\.0/);
});

test("rejects values that do not match the ECharts 5 type schema", () => {
  const result = validate({
    ...basicBarOption,
    series: [{ type: "bar", data: "not-an-array" }],
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /option\.json:/);
});

test("rejects a valid ECharts series type not registered by DashEChartsX", () => {
  const result = validate({
    xAxis: { type: "value" },
    yAxis: { type: "value" },
    series: [{ type: "scatter", data: [[1, 2]] }],
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /not registered by DashEChartsX: scatter/);
});

test("requires GL enablement before validating ECharts-GL options", () => {
  const result = validate({
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [{ type: "scatter3D", data: [[0, 0, 0]] }],
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Pass --enable-gl/);
});

test("accepts GL extension options when explicitly enabled", () => {
  const result = validate(
    {
      grid3D: {},
      xAxis3D: {},
      yAxis3D: {},
      zAxis3D: {},
      series: [{ type: "scatter3D", data: [[0, 0, 0]] }],
    },
    ["--enable-gl"],
  );

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stderr, /GL extension fields are not fully described/);
});
