import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/gl.ts",
      name: "dash_echartsx_gl",
      formats: ["umd"],
      fileName: () => "dash_echartsx.gl.umd.js",
    },
    rollupOptions: {
      external: ["echarts/core", "echarts/lib/echarts"],
      output: {
        globals: {
          "echarts/core": "dash_echartsx._echartsCore",
          "echarts/lib/echarts": "dash_echartsx._echartsLib",
        },
      },
    },
    outDir: "dash_echartsx",
  },
});
