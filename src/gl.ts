import { use as registerEChartsGLModules } from "echarts/core";
import {
  Bar3DChart,
  FlowGLChart,
  GraphGLChart,
  Line3DChart,
  Lines3DChart,
  LinesGLChart,
  Map3DChart,
  Polygons3DChart,
  Scatter3DChart,
  ScatterGLChart,
  SurfaceChart,
} from "echarts-gl/charts";
import {
  Geo3DComponent,
  GlobeComponent,
  Grid3DComponent,
} from "echarts-gl/components";

registerEChartsGLModules([
  Bar3DChart,
  FlowGLChart,
  GraphGLChart,
  Line3DChart,
  Lines3DChart,
  LinesGLChart,
  Map3DChart,
  Polygons3DChart,
  Scatter3DChart,
  ScatterGLChart,
  SurfaceChart,
  Geo3DComponent,
  GlobeComponent,
  Grid3DComponent,
]);

export const registered = true;
