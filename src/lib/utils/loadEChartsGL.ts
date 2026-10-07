type WindowWithEChartsGL = Window & {
  dash_echartsx_gl?: unknown;
};

let bundlePromise: Promise<void> | undefined;

function defaultBundleUrl(): string {
  const mainBundle = Array.from(document.scripts).find((script) => {
    if (!script.src) return false;
    const filename = new URL(script.src, document.baseURI).pathname
      .split("/")
      .pop();
    return /^dash_echartsx(?:\.v.+)?\.umd\.js$/.test(filename ?? "");
  });

  if (!mainBundle) {
    throw new Error(
      "[DashEChartsX] Cannot determine the optional ECharts-GL bundle URL. Set gl_bundle_url explicitly.",
    );
  }

  return new URL("dash_echartsx.gl.umd.js", mainBundle.src).href;
}

export function loadEChartsGL(bundleUrl?: string): Promise<void> {
  const browserWindow = window as WindowWithEChartsGL;
  if (browserWindow.dash_echartsx_gl) return Promise.resolve();
  if (bundlePromise) return bundlePromise;

  bundlePromise = new Promise<void>((resolve, reject) => {
    const src = bundleUrl ?? defaultBundleUrl();
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = () => {
      if (browserWindow.dash_echartsx_gl) {
        resolve();
      } else {
        script.remove();
        reject(
          new Error(
            `[DashEChartsX] ECharts-GL bundle loaded without registering its runtime: ${src}`,
          ),
        );
      }
    };
    script.onerror = () => {
      script.remove();
      reject(
        new Error(`[DashEChartsX] Unable to load ECharts-GL bundle: ${src}`),
      );
    };
    document.head.appendChild(script);
  }).catch((error: unknown) => {
    bundlePromise = undefined;
    throw error;
  });

  return bundlePromise;
}
