import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const typescript = require("typescript");
const source = readFileSync(
  fileURLToPath(new URL("./resolveBinaryArrays.ts", import.meta.url)),
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
const { resolveBinaryArrays } = await import(moduleUrl);

test("resolves nested binary markers into typed arrays without mutating input", async () => {
  const option = {
    dataset: {
      dimensions: ["x", "y"],
      source: {
        __dash_echartsx_binary_array__: {
          url: "/_dash_echartsx/binary/token",
          dtype: "float32",
          shape: [2, 2],
        },
      },
    },
  };
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "/_dash_echartsx/binary/token");
    assert.equal(options.credentials, "same-origin");
    return new Response(new Float32Array([1, 2, 3, 4]), { status: 200 });
  };

  try {
    const resolved = await resolveBinaryArrays(option);
    assert.ok(resolved.dataset.source instanceof Float32Array);
    assert.deepEqual(Array.from(resolved.dataset.source), [1, 2, 3, 4]);
    assert.equal(typeof option.dataset.source, "object");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("rejects invalid descriptors and unexpected payload lengths", async () => {
  await assert.rejects(
    resolveBinaryArrays({
      __dash_echartsx_binary_array__: {
        url: "https://attacker.example/data",
        dtype: "float32",
        shape: [1],
      },
    }),
    /same-origin URL/,
  );

  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response(new Float32Array([1, 2]), { status: 200 });
  try {
    await assert.rejects(
      resolveBinaryArrays({
        __dash_echartsx_binary_array__: {
          url: "/binary",
          dtype: "float32",
          shape: [1],
        },
      }),
      /length does not match/,
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("reports failed binary HTTP requests", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(null, { status: 404 });
  try {
    await assert.rejects(
      resolveBinaryArrays({
        __dash_echartsx_binary_array__: {
          url: "/binary/missing",
          dtype: "float32",
          shape: [1],
        },
      }),
      /HTTP 404/,
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});
