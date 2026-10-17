from __future__ import annotations

import secrets
import threading
import time
from dataclasses import dataclass
from typing import Any

from dash import Dash
from flask import Response, abort

_EXTENSION_KEY = "dash_echartsx.binary_data_store"
_MARKER_KEY = "__dash_echartsx_binary_array__"
_MAX_ARRAY_BYTES = 256 * 1024 * 1024
_MAX_CACHE_BYTES = 512 * 1024 * 1024
_MAX_CACHE_ENTRIES = 256
_ENTRY_TTL_SECONDS = 300
_DTYPE_NAMES = {
    "float32": "float32",
    "float64": "float64",
    "int8": "int8",
    "uint8": "uint8",
    "int16": "int16",
    "uint16": "uint16",
    "int32": "int32",
    "uint32": "uint32",
}


@dataclass(frozen=True)
class _BinaryEntry:
    payload: bytes
    created_at: float


class BinaryDataStore:
    """Serve NumPy arrays as short-lived binary resources for DashEChartsX."""

    def __init__(self, app: Dash) -> None:
        if not isinstance(app, Dash):
            raise TypeError("app must be a dash.Dash instance")

        server = app.server
        if _EXTENSION_KEY in server.extensions:
            raise RuntimeError("A BinaryDataStore is already registered on this app")

        self._entries: dict[str, _BinaryEntry] = {}
        self._cache_bytes = 0
        self._lock = threading.RLock()

        routes_prefix = app.config.routes_pathname_prefix.rstrip("/")
        route = f"{routes_prefix}/_dash_echartsx/binary/<token>"
        endpoint = f"dash_echartsx_binary_{secrets.token_hex(8)}"
        server.add_url_rule(
            route,
            endpoint=endpoint,
            view_func=self._serve,
            methods=["GET"],
        )
        server.extensions[_EXTENSION_KEY] = self
        self._app = app

    def register(self, values: Any) -> dict[str, Any]:
        """Register a NumPy array and return its JSON-safe ECharts data marker.

        The returned descriptor expires after five minutes. Arrays are packed
        into a little-endian contiguous buffer without modifying the input.
        """
        try:
            import numpy as np
        except ImportError as error:
            raise ImportError(
                "BinaryDataStore.register requires NumPy; install numpy to "
                "register binary chart arrays."
            ) from error

        if not isinstance(values, np.ndarray):
            raise TypeError("values must be a NumPy ndarray")
        if values.ndim not in (1, 2):
            raise ValueError("binary chart arrays must be one- or two-dimensional")

        dtype_name = values.dtype.name
        if dtype_name not in _DTYPE_NAMES:
            supported = ", ".join(_DTYPE_NAMES)
            raise TypeError(
                f"unsupported NumPy dtype {values.dtype}; supported dtypes: "
                f"{supported}"
            )
        if values.nbytes > _MAX_ARRAY_BYTES:
            raise ValueError(
                f"binary chart arrays cannot exceed {_MAX_ARRAY_BYTES} bytes"
            )

        little_endian_dtype = values.dtype.newbyteorder("<")
        packed = np.ascontiguousarray(values, dtype=little_endian_dtype).tobytes()
        token = secrets.token_urlsafe(32)
        self._store(token, packed)

        relative_path = self._app.get_relative_path(f"/_dash_echartsx/binary/{token}")
        return {
            _MARKER_KEY: {
                "url": relative_path,
                "dtype": _DTYPE_NAMES[dtype_name],
                "shape": [int(size) for size in values.shape],
            }
        }

    def _store(self, token: str, payload: bytes) -> None:
        now = time.monotonic()
        with self._lock:
            self._discard_expired(now)
            while self._entries and (
                self._cache_bytes + len(payload) > _MAX_CACHE_BYTES
                or len(self._entries) >= _MAX_CACHE_ENTRIES
            ):
                oldest_token = next(iter(self._entries))
                self._cache_bytes -= len(self._entries.pop(oldest_token).payload)
            if len(payload) > _MAX_CACHE_BYTES:
                raise ValueError(
                    f"binary chart cache cannot exceed {_MAX_CACHE_BYTES} bytes"
                )
            self._entries[token] = _BinaryEntry(payload, now)
            self._cache_bytes += len(payload)

    def _discard_expired(self, now: float) -> None:
        expired = [
            token
            for token, entry in self._entries.items()
            if now - entry.created_at >= _ENTRY_TTL_SECONDS
        ]
        for token in expired:
            self._cache_bytes -= len(self._entries.pop(token).payload)

    def _serve(self, token: str) -> Response:
        now = time.monotonic()
        with self._lock:
            self._discard_expired(now)
            entry = self._entries.get(token)
        if entry is None:
            abort(404)

        return Response(
            entry.payload,
            mimetype="application/octet-stream",
            headers={
                "Cache-Control": "no-store",
                "X-Content-Type-Options": "nosniff",
            },
        )
