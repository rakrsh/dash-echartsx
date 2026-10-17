const markerKey = "__dash_echartsx_binary_array__";

type BinaryArrayDtype =
  | "float32"
  | "float64"
  | "int8"
  | "uint8"
  | "int16"
  | "uint16"
  | "int32"
  | "uint32";

type BinaryArrayDescriptor = {
  url: string;
  dtype: BinaryArrayDtype;
  shape: number[];
};

type NumericTypedArray =
  | Float32Array
  | Float64Array
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array;

const bytesPerElement: Record<BinaryArrayDtype, number> = {
  float32: Float32Array.BYTES_PER_ELEMENT,
  float64: Float64Array.BYTES_PER_ELEMENT,
  int8: Int8Array.BYTES_PER_ELEMENT,
  uint8: Uint8Array.BYTES_PER_ELEMENT,
  int16: Int16Array.BYTES_PER_ELEMENT,
  uint16: Uint16Array.BYTES_PER_ELEMENT,
  int32: Int32Array.BYTES_PER_ELEMENT,
  uint32: Uint32Array.BYTES_PER_ELEMENT,
};

function isBinaryArrayDescriptor(
  value: unknown,
): value is BinaryArrayDescriptor {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const descriptor = value as Record<string, unknown>;
  return (
    typeof descriptor.url === "string" &&
    descriptor.url.startsWith("/") &&
    !descriptor.url.startsWith("//") &&
    typeof descriptor.dtype === "string" &&
    Object.prototype.hasOwnProperty.call(bytesPerElement, descriptor.dtype) &&
    Array.isArray(descriptor.shape) &&
    descriptor.shape.length >= 1 &&
    descriptor.shape.length <= 2 &&
    descriptor.shape.every(
      (dimension) =>
        Number.isSafeInteger(dimension) && (dimension as number) >= 0,
    )
  );
}

function createTypedArray(
  dtype: BinaryArrayDtype,
  buffer: ArrayBuffer,
): NumericTypedArray {
  switch (dtype) {
    case "float32":
      return new Float32Array(buffer);
    case "float64":
      return new Float64Array(buffer);
    case "int8":
      return new Int8Array(buffer);
    case "uint8":
      return new Uint8Array(buffer);
    case "int16":
      return new Int16Array(buffer);
    case "uint16":
      return new Uint16Array(buffer);
    case "int32":
      return new Int32Array(buffer);
    case "uint32":
      return new Uint32Array(buffer);
  }
}

async function fetchBinaryArray(
  descriptor: BinaryArrayDescriptor,
  signal?: AbortSignal,
): Promise<NumericTypedArray> {
  const response = await fetch(descriptor.url, {
    credentials: "same-origin",
    signal,
  });
  if (!response.ok) {
    throw new Error(
      `[DashEChartsX] Binary chart data request failed with HTTP ${response.status}: ${descriptor.url}`,
    );
  }

  const buffer = await response.arrayBuffer();
  const elementCount = descriptor.shape.reduce(
    (product, dimension) => product * dimension,
    1,
  );
  if (
    !Number.isSafeInteger(elementCount) ||
    buffer.byteLength !== elementCount * bytesPerElement[descriptor.dtype]
  ) {
    throw new Error(
      `[DashEChartsX] Binary chart data length does not match its ${descriptor.dtype} shape.`,
    );
  }

  return createTypedArray(descriptor.dtype, buffer);
}

export async function resolveBinaryArrays<T>(
  value: T,
  signal?: AbortSignal,
): Promise<T> {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return (await Promise.all(
      value.map((item) => resolveBinaryArrays(item, signal)),
    )) as T;
  }

  const entries = Object.entries(value);
  if (Object.prototype.hasOwnProperty.call(value, markerKey)) {
    if (entries.length !== 1 || !isBinaryArrayDescriptor(entries[0][1])) {
      throw new TypeError(
        `[DashEChartsX] ${markerKey} must contain a same-origin URL, supported dtype, and one- or two-dimensional shape.`,
      );
    }
    return (await fetchBinaryArray(entries[0][1], signal)) as T;
  }

  const resolvedEntries = await Promise.all(
    entries.map(async ([key, item]) => [
      key,
      await resolveBinaryArrays(item, signal),
    ]),
  );
  return Object.fromEntries(resolvedEntries) as T;
}
