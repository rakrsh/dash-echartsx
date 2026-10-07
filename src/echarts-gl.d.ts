declare module "echarts/lib/echarts" {
  export * from "echarts/core";
}

declare module "echarts-gl/charts" {
  import type { EChartsExtensionInstallRegisters } from "echarts/types/src/extension";

  export const Bar3DChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const FlowGLChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const GraphGLChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const Line3DChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const Lines3DChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const LinesGLChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const Map3DChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const Polygons3DChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const Scatter3DChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const ScatterGLChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const SurfaceChart: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
}

declare module "echarts-gl/components" {
  import type { EChartsExtensionInstallRegisters } from "echarts/types/src/extension";

  export const Geo3DComponent: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const GlobeComponent: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
  export const Grid3DComponent: (
    registers: EChartsExtensionInstallRegisters,
  ) => void;
}
