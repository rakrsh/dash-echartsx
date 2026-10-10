import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const source = readFileSync(
  fileURLToPath(new URL("./version-switcher.js", import.meta.url)),
  "utf8",
);

function createBrowser({ scriptUrl, pathname, manifest, fetchError }) {
  let onChange;
  let inserted;
  let assigned;
  const select = {
    options: [],
    append(option) {
      this.options.push(option);
    },
    setAttribute() {},
    addEventListener(_event, callback) {
      onChange = callback;
    },
  };
  const brand = {
    insertAdjacentElement(_position, element) {
      inserted = element;
    },
  };
  const sidebar = {
    querySelector: () => brand,
    prepend(element) {
      inserted = element;
    },
  };
  const errors = [];
  const fetchCalls = [];
  const context = {
    URL,
    console: { error: (...values) => errors.push(values) },
    document: {
      currentScript: { src: scriptUrl },
      querySelector: (selector) =>
        selector === ".sidebar-sticky" ? sidebar : null,
      createElement: (tag) =>
        tag === "select"
          ? select
          : {
              append() {},
            },
    },
    fetch: async (url) => {
      fetchCalls.push(url.href);
      if (fetchError) throw fetchError;
      return {
        ok: true,
        json: async () => manifest,
      };
    },
    window: {
      location: {
        pathname,
        assign(url) {
          assigned = url;
        },
      },
    },
  };
  vm.runInNewContext(source, context);

  return {
    errors,
    fetchCalls,
    get inserted() {
      return inserted;
    },
    get onChange() {
      return onChange;
    },
    select,
    get assigned() {
      return assigned;
    },
  };
}

async function flushPromises() {
  await new Promise((resolve) => setImmediate(resolve));
  await new Promise((resolve) => setImmediate(resolve));
}

test("loads versions.json and navigates to a selected release", async () => {
  const browser = createBrowser({
    scriptUrl: "https://example.test/project/dev/_static/version-switcher.js",
    pathname: "/project/dev/reference/guide.html",
    manifest: [
      { version: "dev", title: "dev" },
      { version: "v0.1.0", title: "0.1.0" },
      { version: "v0.2.0", title: "0.2.0" },
    ],
  });
  await flushPromises();

  assert.deepEqual(browser.fetchCalls, [
    "https://example.test/project/versions.json",
  ]);
  assert.deepEqual(
    browser.select.options.map((option) => option.textContent),
    ["dev", "0.2.0", "0.1.0"],
  );
  assert.equal(browser.select.options[0].selected, true);
  assert.equal(browser.inserted.className, "version-switcher");

  browser.select.value = "v0.2.0";
  browser.onChange();
  assert.equal(browser.assigned, "https://example.test/project/v0.2.0/");
  assert.deepEqual(browser.errors, []);
});

test("shows the current development version when no releases exist yet", async () => {
  const browser = createBrowser({
    scriptUrl: "https://example.test/project/dev/_static/version-switcher.js",
    pathname: "/project/dev/",
    manifest: [{ version: "dev", title: "dev" }],
  });
  await flushPromises();

  assert.equal(browser.select.options.length, 1);
  assert.equal(browser.select.options[0].textContent, "dev");
  assert.equal(browser.select.options[0].selected, true);
  assert.equal(browser.errors.length, 0);
});

test("logs manifest loading failures instead of silently hiding them", async () => {
  const browser = createBrowser({
    scriptUrl: "https://example.test/project/dev/_static/version-switcher.js",
    pathname: "/project/dev/",
    manifest: [],
    fetchError: new Error("network unavailable"),
  });
  await flushPromises();

  assert.equal(browser.errors.length, 1);
  assert.match(browser.errors[0][0], /Failed to initialize version switcher/);
});
