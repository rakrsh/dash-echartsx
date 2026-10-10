import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const typescript = require("typescript");
const source = readFileSync(
  fileURLToPath(new URL("./resolveJavaScriptFunctions.ts", import.meta.url)),
  "utf8",
);
const { outputText, diagnostics } = typescript.transpileModule(source, {
  compilerOptions: {
    module: typescript.ModuleKind.ESNext,
    target: typescript.ScriptTarget.ES2022,
  },
  reportDiagnostics: true,
});
const errors = (diagnostics ?? []).filter(
  (diagnostic) => diagnostic.category === typescript.DiagnosticCategory.Error,
);
assert.deepEqual(errors, []);

const moduleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
const { resolveJavaScriptFunctions } = await import(moduleUrl);

test("recursively resolves marked functions in nested option objects and arrays", () => {
  const option = {
    tooltip: {
      formatter: {
        __js_eval__: "params => `${params.name}: ${params.value}`",
      },
    },
    series: [
      {
        label: {
          formatter: { __js_eval__: "value => String(value * 2)" },
        },
      },
    ],
  };

  const resolved = resolveJavaScriptFunctions(option);

  assert.notEqual(resolved, option);
  assert.equal(
    resolved.tooltip.formatter({ name: "Revenue", value: 42 }),
    "Revenue: 42",
  );
  assert.equal(resolved.series[0].label.formatter(21), "42");
  assert.equal(typeof option.tooltip.formatter, "object");
});

test("preserves primitive values, arrays, and ordinary option data", () => {
  const values = [null, true, 42, "plain string", { value: [1, 2, 3] }];

  for (const value of values) {
    assert.deepEqual(resolveJavaScriptFunctions(value), value);
  }
});

test("rejects marker objects with extra keys or non-string source", () => {
  assert.throws(
    () =>
      resolveJavaScriptFunctions({
        __js_eval__: "() => true",
        value: 1,
      }),
    {
      name: "TypeError",
      message:
        "[DashEChartsX] __js_eval__ must be the only key in an object and contain JavaScript source.",
    },
  );
  assert.throws(
    () => resolveJavaScriptFunctions({ __js_eval__: 42 }),
    /__js_eval__ must be the only key in an object and contain JavaScript source/,
  );
});

test("rejects valid JavaScript source that does not evaluate to a function", () => {
  assert.throws(() => resolveJavaScriptFunctions({ __js_eval__: "42" }), {
    name: "TypeError",
    message:
      "[DashEChartsX] __js_eval__ must evaluate to a JavaScript function.",
  });
});

test("surfaces JavaScript syntax errors from marked source", () => {
  assert.throws(
    () => resolveJavaScriptFunctions({ __js_eval__: "function (" }),
    SyntaxError,
  );
});
