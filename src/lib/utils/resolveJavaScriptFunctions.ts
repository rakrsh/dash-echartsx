const markerKey = "__js_eval__";

export function resolveJavaScriptFunctions<T>(value: T): T {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return value.map(resolveJavaScriptFunctions) as T;
  }

  const entries = Object.entries(value);
  if (Object.prototype.hasOwnProperty.call(value, markerKey)) {
    if (
      entries.length !== 1 ||
      typeof (value as Record<string, unknown>)[markerKey] !== "string"
    ) {
      throw new TypeError(
        `[DashEChartsX] ${markerKey} must be the only key in an object and contain JavaScript source.`,
      );
    }

    const source = (value as Record<string, string>)[markerKey];
    // Marked source is an explicit opt-in to dynamic JavaScript compilation.
    const compiled = new Function(`return (${source});`)();
    if (typeof compiled !== "function") {
      throw new TypeError(
        `[DashEChartsX] ${markerKey} must evaluate to a JavaScript function.`,
      );
    }
    return compiled as T;
  }

  return Object.fromEntries(
    entries.map(([key, item]) => [key, resolveJavaScriptFunctions(item)]),
  ) as T;
}
