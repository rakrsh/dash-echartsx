#!/usr/bin/env node

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPONENT_PATH = path.join(
  ROOT,
  "src",
  "lib",
  "components",
  "DashEChartsX.tsx",
);
const GL_SERIES_TYPES = new Set([
  "bar3D",
  "flowGL",
  "line3D",
  "lines3D",
  "linesGL",
  "map3D",
  "scatter3D",
  "scatterGL",
  "surface",
]);
const GL_OPTION_KEYS = new Set([
  "geo3D",
  "globe",
  "grid3D",
  "parallel3D",
  "xAxis3D",
  "yAxis3D",
  "zAxis3D",
]);
const USAGE =
  "Usage: npm run echarts:validate -- [--enable-gl] [option.json]\n" +
  "Without a file path, the option JSON is read from stdin.";

function getRegisteredSeriesTypes() {
  const componentSource = readFileSync(COMPONENT_PATH, "utf8");
  const sourceFile = ts.createSourceFile(
    COMPONENT_PATH,
    componentSource,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const chartImports = new Set();
  const registeredCharts = new Set();

  for (const statement of sourceFile.statements) {
    if (
      !ts.isImportDeclaration(statement) ||
      statement.moduleSpecifier.text !== "echarts/charts" ||
      !statement.importClause?.namedBindings ||
      !ts.isNamedImports(statement.importClause.namedBindings)
    ) {
      continue;
    }
    for (const specifier of statement.importClause.namedBindings.elements) {
      chartImports.add(specifier.name.text);
    }
  }

  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "registerEChartsModules" &&
      ts.isArrayLiteralExpression(node.arguments[0])
    ) {
      for (const entry of node.arguments[0].elements) {
        if (ts.isIdentifier(entry)) registeredCharts.add(entry.text);
      }
    }
    node.forEachChild(visit);
  }
  visit(sourceFile);

  return new Set(
    [...chartImports]
      .filter((chart) => registeredCharts.has(chart) && chart.endsWith("Chart"))
      .map((chart) => {
        const seriesType = chart.slice(0, -"Chart".length);
        return seriesType[0].toLowerCase() + seriesType.slice(1);
      }),
  );
}

function collectSeriesTypes(option) {
  const types = [];
  const options = [option];
  if (option.baseOption && typeof option.baseOption === "object") {
    options.push(option.baseOption);
  }
  if (Array.isArray(option.options)) {
    options.push(
      ...option.options.filter((item) => item && typeof item === "object"),
    );
  }

  for (const candidate of options) {
    const series = Array.isArray(candidate.series)
      ? candidate.series
      : candidate.series
        ? [candidate.series]
        : [];
    for (const item of series) {
      if (item && typeof item === "object" && typeof item.type === "string") {
        types.push(item.type);
      }
    }
  }
  return types;
}

function parseArguments(args) {
  let enableGL = false;
  let inputPath;
  for (const argument of args) {
    if (argument === "--enable-gl") {
      enableGL = true;
    } else if (argument.startsWith("-") || inputPath) {
      throw new Error(USAGE);
    } else {
      inputPath = argument;
    }
  }
  return { enableGL, inputPath };
}

async function readInput(inputPath) {
  if (inputPath) return readFileSync(path.resolve(inputPath), "utf8");
  if (process.stdin.isTTY) throw new Error(USAGE);
  let contents = "";
  for await (const chunk of process.stdin) contents += chunk;
  return contents;
}

function optionPosition(raw, offset) {
  const before = raw.slice(0, Math.max(0, offset));
  const line = before.split(/\r?\n/);
  return `${line.length}:${line.at(-1).length + 1}`;
}

function checkAgainstECharts5(raw) {
  const prelude = [
    'import type { EChartsOption } from "echarts5";',
    "type SeriesItem<T> = T extends readonly (infer Item)[] ? Item : T;",
    "type CoreSeries = SeriesItem<NonNullable<EChartsOption['series']>>;",
    "type GLSeries = {",
    "  type: " +
      [...GL_SERIES_TYPES]
        .map((seriesType) => JSON.stringify(seriesType))
        .join(" | ") +
      ";",
    "  [key: string]: unknown;",
    "};",
    "type DashEChartsOption = Omit<EChartsOption, 'series' | 'options' | 'baseOption'> & {",
    "  series?: CoreSeries | GLSeries | Array<CoreSeries | GLSeries>;",
    "  options?: DashEChartsOption[];",
    "  baseOption?: DashEChartsOption;",
    "  geo3D?: unknown;",
    "  globe?: unknown;",
    "  grid3D?: unknown;",
    "  parallel3D?: unknown;",
    "  xAxis3D?: unknown;",
    "  yAxis3D?: unknown;",
    "  zAxis3D?: unknown;",
    "};",
    "const option: DashEChartsOption = ",
  ].join("\n");
  const sourceText = `${prelude}${raw};\nvoid option;\n`;
  const virtualFile = path.join(ROOT, ".echarts-option-validation.ts");
  const resolvedVirtualFile = path.resolve(virtualFile);
  const compilerOptions = {
    allowSyntheticDefaultImports: true,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    noEmit: true,
    skipLibCheck: true,
    strict: true,
    target: ts.ScriptTarget.ES2022,
    types: [],
  };
  const host = ts.createCompilerHost(compilerOptions);
  const originalFileExists = host.fileExists.bind(host);
  const originalReadFile = host.readFile.bind(host);
  const originalGetSourceFile = host.getSourceFile.bind(host);

  host.fileExists = (fileName) =>
    path.resolve(fileName) === resolvedVirtualFile ||
    originalFileExists(fileName);
  host.readFile = (fileName) =>
    path.resolve(fileName) === resolvedVirtualFile
      ? sourceText
      : originalReadFile(fileName);
  host.getSourceFile = (fileName, languageVersion, ...rest) =>
    path.resolve(fileName) === resolvedVirtualFile
      ? ts.createSourceFile(fileName, sourceText, languageVersion, true)
      : originalGetSourceFile(fileName, languageVersion, ...rest);

  const program = ts.createProgram({
    rootNames: [virtualFile],
    options: compilerOptions,
    host,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  return diagnostics.map((diagnostic) => {
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      "\n",
    );
    if (
      diagnostic.file &&
      path.resolve(diagnostic.file.fileName) === resolvedVirtualFile &&
      diagnostic.start !== undefined &&
      diagnostic.start >= prelude.length
    ) {
      return `option.json:${optionPosition(raw, diagnostic.start - prelude.length)}: ${message}`;
    }
    return `ECharts 5.6.0 option type schema: ${message}`;
  });
}

async function main() {
  const { enableGL, inputPath } = parseArguments(process.argv.slice(2));
  const raw = await readInput(inputPath);
  let option;
  try {
    option = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Input is not valid JSON: ${error.message}`);
  }
  if (!option || typeof option !== "object" || Array.isArray(option)) {
    throw new Error("The ECharts option must be a JSON object.");
  }

  const seriesTypes = collectSeriesTypes(option);
  const usesGL =
    seriesTypes.some((seriesType) => GL_SERIES_TYPES.has(seriesType)) ||
    [...GL_OPTION_KEYS].some((key) => key in option);
  if (usesGL && !enableGL) {
    throw new Error(
      "This option uses ECharts-GL. Pass --enable-gl to validate its extension " +
        "shape and set enable_gl=True on DashEChartsX.",
    );
  }
  const registeredTypes = getRegisteredSeriesTypes();
  const unsupportedTypes = [...new Set(seriesTypes)].filter(
    (seriesType) =>
      !GL_SERIES_TYPES.has(seriesType) && !registeredTypes.has(seriesType),
  );
  if (unsupportedTypes.length > 0) {
    throw new Error(
      `Series type(s) not registered by DashEChartsX: ${unsupportedTypes.join(", ")}. ` +
        `Registered types: ${[...registeredTypes].sort().join(", ")}.`,
    );
  }

  const diagnostics = checkAgainstECharts5(raw);
  if (diagnostics.length > 0) {
    throw new Error(diagnostics.join("\n"));
  }
  if (usesGL) {
    console.warn(
      "Warning: ECharts-GL extension fields are not fully described by the " +
        "ECharts 5 core type schema.",
    );
  }
  console.log(
    `Valid against ECharts 5.6.0${usesGL ? " core types (with GL extension limits)" : ""}.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
