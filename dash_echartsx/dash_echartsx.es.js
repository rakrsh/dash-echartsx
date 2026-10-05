import vb, { forwardRef as cb, useRef as Xc, useImperativeHandle as db, useEffect as $c } from "react";
var hy = { exports: {} }, xu = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pb = vb, gb = Symbol.for("react.element"), mb = Symbol.for("react.fragment"), yb = Object.prototype.hasOwnProperty, _b = pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sb = { key: !0, ref: !0, __self: !0, __source: !0 };
function vy(e, t, r) {
  var n, i = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) yb.call(t, n) && !Sb.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: gb, type: e, key: a, ref: o, props: i, _owner: _b.current };
}
xu.Fragment = mb;
xu.jsx = vy;
xu.jsxs = vy;
hy.exports = xu;
var bb = hy.exports;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Of = function(e, t) {
  return Of = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Of(e, t);
};
function V(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Of(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var lv = 12, cy = "sans-serif", br = lv + "px " + cy, wb = 20, Tb = 100, xb = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function Cb(e) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var r = 0; r < e.length; r++) {
    var n = String.fromCharCode(r + 32), i = (e.charCodeAt(r) - wb) / Tb;
    t[n] = i;
  }
  return t;
}
var Db = Cb(xb), ve = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ function() {
    var e, t;
    return function(r, n) {
      if (!e) {
        var i = ve.createCanvas();
        e = i && i.getContext("2d");
      }
      if (e)
        return t !== n && (t = e.font = n || br), e.measureText(r);
      r = r || "", n = n || br;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || lv, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * r.length;
      else
        for (var u = 0; u < r.length; u++) {
          var l = Db[r[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(e, t, r) {
    var n = new Image();
    return n.onload = t, n.onerror = r, n.src = e, n;
  },
  getTime: function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }
}, dy = $r([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(e, t) {
  return e["[object " + t + "]"] = !0, e;
}, {}), py = $r([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(e, t) {
  return e["[object " + t + "Array]"] = !0, e;
}, {}), ao = Object.prototype.toString, Cu = Array.prototype, Ab = Cu.forEach, Mb = Cu.filter, fv = Cu.slice, Ib = Cu.map, Zc = (function() {
}).constructor, wo = Zc ? Zc.prototype : null, hv = "__proto__", nl = 2311, Lb = Math.pow(2, 53) - 1;
function gy() {
  return nl >= Lb && (nl = 0), nl++;
}
function vv() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, e);
}
function ot(e) {
  if (e == null || typeof e != "object")
    return e;
  var t = e, r = ao.call(e);
  if (r === "[object Array]") {
    if (!Ta(e)) {
      t = [];
      for (var n = 0, i = e.length; n < i; n++)
        t[n] = ot(e[n]);
    }
  } else if (py[r]) {
    if (!Ta(e)) {
      var a = e.constructor;
      if (a.from)
        t = a.from(e);
      else {
        t = new a(e.length);
        for (var n = 0, i = e.length; n < i; n++)
          t[n] = e[n];
      }
    }
  } else if (!dy[r] && !Ta(e) && !Fa(e)) {
    t = {};
    for (var o in e)
      e.hasOwnProperty(o) && o !== hv && (t[o] = ot(e[o]));
  }
  return t;
}
function gt(e, t, r) {
  if (!K(t) || !K(e))
    return r ? ot(t) : e;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== hv) {
      var i = e[n], a = t[n];
      K(a) && K(i) && !W(a) && !W(i) && !Fa(a) && !Fa(i) && !qc(a) && !qc(i) && !Ta(a) && !Ta(i) ? gt(i, a, r) : (r || !(n in e)) && (e[n] = ot(t[n]));
    }
  return e;
}
function N(e, t) {
  if (Object.assign)
    Object.assign(e, t);
  else
    for (var r in t)
      t.hasOwnProperty(r) && r !== hv && (e[r] = t[r]);
  return e;
}
function Pb(e, t, r) {
  e = e || {};
  for (var n = 0; n < r.length; n++) {
    var i = r[n];
    e[i] = t[i];
  }
  return e;
}
function yt(e, t, r) {
  for (var n = lt(t), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    e[o] == null && (e[o] = t[o]);
  }
  return e;
}
function ct(e, t) {
  if (e) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var r = 0, n = e.length; r < n; r++)
      if (e[r] === t)
        return r;
  }
  return -1;
}
function Eb(e, t) {
  var r = e.prototype;
  function n() {
  }
  n.prototype = t.prototype, e.prototype = new n();
  for (var i in r)
    r.hasOwnProperty(i) && (e.prototype[i] = r[i]);
  e.prototype.constructor = e, e.superClass = t;
}
function fr(e, t, r) {
  if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && e[a] == null && (e[a] = t[a]);
    }
  else
    yt(e, t);
}
function le(e) {
  return !e || typeof e == "string" ? !1 : typeof e.length == "number";
}
function I(e, t, r) {
  if (e && t)
    if (e.forEach && e.forEach === Ab)
      e.forEach(t, r);
    else if (e.length === +e.length)
      for (var n = 0, i = e.length; n < i; n++)
        t.call(r, e[n], n, e);
    else
      for (var a in e)
        e.hasOwnProperty(a) && t.call(r, e[a], a, e);
}
function Z(e, t, r) {
  if (!e)
    return [];
  if (!t)
    return cv(e);
  if (e.map && e.map === Ib)
    return e.map(t, r);
  for (var n = [], i = 0, a = e.length; i < a; i++)
    n.push(t.call(r, e[i], i, e));
  return n;
}
function $r(e, t, r, n) {
  if (e && t) {
    for (var i = 0, a = e.length; i < a; i++)
      r = t.call(n, r, e[i], i, e);
    return r;
  }
}
function Vt(e, t, r) {
  if (!e)
    return [];
  if (!t)
    return cv(e);
  if (e.filter && e.filter === Mb)
    return e.filter(t, r);
  for (var n = [], i = 0, a = e.length; i < a; i++)
    t.call(r, e[i], i, e) && n.push(e[i]);
  return n;
}
function Rb(e, t, r) {
  if (e && t) {
    for (var n = 0, i = e.length; n < i; n++)
      if (t.call(r, e[n], n, e))
        return e[n];
  }
}
function lt(e) {
  if (!e)
    return [];
  if (Object.keys)
    return Object.keys(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(r);
  return t;
}
function Ob(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return function() {
    return e.apply(t, r.concat(fv.call(arguments)));
  };
}
var St = wo && et(wo.bind) ? wo.call.bind(wo.bind) : Ob;
function Rt(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return function() {
    return e.apply(this, t.concat(fv.call(arguments)));
  };
}
function W(e) {
  return Array.isArray ? Array.isArray(e) : ao.call(e) === "[object Array]";
}
function et(e) {
  return typeof e == "function";
}
function Y(e) {
  return typeof e == "string";
}
function kf(e) {
  return ao.call(e) === "[object String]";
}
function mt(e) {
  return typeof e == "number";
}
function K(e) {
  var t = typeof e;
  return t === "function" || !!e && t === "object";
}
function qc(e) {
  return !!dy[ao.call(e)];
}
function fe(e) {
  return !!py[ao.call(e)];
}
function Fa(e) {
  return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object";
}
function Du(e) {
  return e.colorStops != null;
}
function kb(e) {
  return e.image != null;
}
function za(e) {
  return e !== e;
}
function Ns() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] != null)
      return e[r];
}
function $(e, t) {
  return e ?? t;
}
function Nn(e, t, r) {
  return e ?? t ?? r;
}
function cv(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return fv.apply(e, t);
}
function dv(e) {
  if (typeof e == "number")
    return [e, e, e, e];
  var t = e.length;
  return t === 2 ? [e[0], e[1], e[0], e[1]] : t === 3 ? [e[0], e[1], e[2], e[1]] : e;
}
function Ve(e, t) {
  if (!e)
    throw new Error(t);
}
function nr(e) {
  return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var my = "__ec_primitive__";
function Nf(e) {
  e[my] = !0;
}
function Ta(e) {
  return e[my];
}
var Nb = function() {
  function e() {
    this.data = {};
  }
  return e.prototype.delete = function(t) {
    var r = this.has(t);
    return r && delete this.data[t], r;
  }, e.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, e.prototype.get = function(t) {
    return this.data[t];
  }, e.prototype.set = function(t, r) {
    return this.data[t] = r, this;
  }, e.prototype.keys = function() {
    return lt(this.data);
  }, e.prototype.forEach = function(t) {
    var r = this.data;
    for (var n in r)
      r.hasOwnProperty(n) && t(r[n], n);
  }, e;
}(), yy = typeof Map == "function";
function Bb() {
  return yy ? /* @__PURE__ */ new Map() : new Nb();
}
var Fb = function() {
  function e(t) {
    var r = W(t);
    this.data = Bb();
    var n = this;
    t instanceof e ? t.each(i) : t && I(t, i);
    function i(a, o) {
      r ? n.set(a, o) : n.set(o, a);
    }
  }
  return e.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, e.prototype.get = function(t) {
    return this.data.get(t);
  }, e.prototype.set = function(t, r) {
    return this.data.set(t, r), r;
  }, e.prototype.each = function(t, r) {
    this.data.forEach(function(n, i) {
      t.call(r, n, i);
    });
  }, e.prototype.keys = function() {
    var t = this.data.keys();
    return yy ? Array.from(t) : t;
  }, e.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, e;
}();
function j(e) {
  return new Fb(e);
}
function zb(e, t) {
  for (var r = new e.constructor(e.length + t.length), n = 0; n < e.length; n++)
    r[n] = e[n];
  for (var i = e.length, n = 0; n < t.length; n++)
    r[n + i] = t[n];
  return r;
}
function Au(e, t) {
  var r;
  if (Object.create)
    r = Object.create(e);
  else {
    var n = function() {
    };
    n.prototype = e, r = new n();
  }
  return t && N(r, t), r;
}
function _y(e) {
  var t = e.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function te(e, t) {
  return e.hasOwnProperty(t);
}
function Ut() {
}
var gs = 180 / Math.PI, Gb = /* @__PURE__ */ function() {
  function e() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return e;
}(), Vb = /* @__PURE__ */ function() {
  function e() {
    this.browser = new Gb(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return e;
}(), nt = new Vb();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (nt.wxa = !0, nt.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? nt.worker = !0 : !nt.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (nt.node = !0, nt.svgSupported = !0) : Hb(navigator.userAgent, nt);
function Hb(e, t) {
  var r = t.browser, n = e.match(/Firefox\/([\d.]+)/), i = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/), a = e.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(e);
  n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, t.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11);
  var s = t.domSupported = typeof document < "u";
  if (s) {
    var u = document.documentElement.style;
    t.transform3dSupported = (r.ie && "transition" in u || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in u) && !("OTransition" in u), t.transformSupported = t.transform3dSupported || r.ie && +r.version >= 9;
  }
}
var Ub = ".", rn = "___EC__COMPONENT__CONTAINER___", Sy = "___EC__EXTENDED_CLASS___";
function ir(e) {
  var t = {
    main: "",
    sub: ""
  };
  if (e) {
    var r = e.split(Ub);
    t.main = r[0] || "", t.sub = r[1] || "";
  }
  return t;
}
function Wb(e) {
  Ve(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), 'componentType "' + e + '" illegal');
}
function Yb(e) {
  return !!(e && e[Sy]);
}
function pv(e, t) {
  e.$constructor = e, e.extend = function(r) {
    var n = this, i;
    return Xb(n) ? i = /** @class */
    function(a) {
      V(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(n) : (i = function() {
      (r.$constructor || n).apply(this, arguments);
    }, Eb(i, this)), N(i.prototype, r), i[Sy] = !0, i.extend = this.extend, i.superCall = qb, i.superApply = Kb, i.superClass = n, i;
  };
}
function Xb(e) {
  return et(e) && /^class\s/.test(Function.prototype.toString.call(e));
}
function by(e, t) {
  e.extend = t.extend;
}
var $b = Math.round(Math.random() * 10);
function Zb(e) {
  var t = ["__\0is_clz", $b++].join("_");
  e.prototype[t] = !0, e.isInstance = function(r) {
    return !!(r && r[t]);
  };
}
function qb(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(e, r);
}
function Kb(e, t, r) {
  return this.superClass.prototype[t].apply(e, r);
}
function Mu(e) {
  var t = {};
  e.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      Wb(i), n.prototype.type = i;
      var a = ir(i);
      if (!a.sub)
        t[a.main] = n;
      else if (a.sub !== rn) {
        var o = r(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, e.getClass = function(n, i, a) {
    var o = t[n];
    if (o && o[rn] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, e.getClassesByMainType = function(n) {
    var i = ir(n), a = [], o = t[i.main];
    return o && o[rn] ? I(o, function(s, u) {
      u !== rn && a.push(s);
    }) : a.push(o), a;
  }, e.hasClass = function(n) {
    var i = ir(n);
    return !!t[i.main];
  }, e.getAllClassMainTypes = function() {
    var n = [];
    return I(t, function(i, a) {
      n.push(a);
    }), n;
  }, e.hasSubTypes = function(n) {
    var i = ir(n), a = t[i.main];
    return a && a[rn];
  };
  function r(n) {
    var i = t[n.main];
    return (!i || !i[rn]) && (i = t[n.main] = {}, i[rn] = !0), i;
  }
}
function Ga(e, t) {
  for (var r = 0; r < e.length; r++)
    e[r][1] || (e[r][1] = e[r][0]);
  return t = t || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < e.length; s++) {
      var u = e[s][1];
      if (!(i && ct(i, u) >= 0 || a && ct(a, u) < 0)) {
        var l = n.getShallow(u, t);
        l != null && (o[e[s][0]] = l);
      }
    }
    return o;
  };
}
var Qb = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], jb = Ga(Qb), Jb = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getAreaStyle = function(t, r) {
      return jb(this, t, r);
    }, e;
  }()
), wy = /* @__PURE__ */ function() {
  function e(t) {
    this.value = t;
  }
  return e;
}(), tw = function() {
  function e() {
    this._len = 0;
  }
  return e.prototype.insert = function(t) {
    var r = new wy(t);
    return this.insertEntry(r), r;
  }, e.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, e.prototype.remove = function(t) {
    var r = t.prev, n = t.next;
    r ? r.next = n : this.head = n, n ? n.prev = r : this.tail = r, t.next = t.prev = null, this._len--;
  }, e.prototype.len = function() {
    return this._len;
  }, e.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, e;
}(), Pi = function() {
  function e(t) {
    this._list = new tw(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return e.prototype.put = function(t, r) {
    var n = this._list, i = this._map, a = null;
    if (i[t] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = r : s = new wy(r), s.key = t, n.insertEntry(s), i[t] = s;
    }
    return a;
  }, e.prototype.get = function(t) {
    var r = this._map[t], n = this._list;
    if (r != null)
      return r !== n.tail && (n.remove(r), n.insertEntry(r)), r.value;
  }, e.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, e.prototype.len = function() {
    return this._list.len();
  }, e;
}(), Bf = new Pi(50);
function ew(e) {
  if (typeof e == "string") {
    var t = Bf.get(e);
    return t && t.image;
  } else
    return e;
}
function gv(e, t, r, n, i) {
  if (e)
    if (typeof e == "string") {
      if (t && t.__zrImageSrc === e || !r)
        return t;
      var a = Bf.get(e), o = { hostEl: r, cb: n, cbPayload: i };
      return a ? (t = a.image, !Iu(t) && a.pending.push(o)) : (t = ve.loadImage(e, Kc, Kc), t.__zrImageSrc = e, Bf.put(e, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return e;
  else return t;
}
function Kc() {
  var e = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < e.pending.length; t++) {
    var r = e.pending[t], n = r.cb;
    n && n(this, r.cbPayload), r.hostEl.dirty();
  }
  e.pending.length = 0;
}
function Iu(e) {
  return e && e.width && e.height;
}
function ar() {
  return [1, 0, 0, 1, 0, 0];
}
function oo(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
}
function mv(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
}
function xa(e, t, r) {
  var n = t[0] * r[0] + t[2] * r[1], i = t[1] * r[0] + t[3] * r[1], a = t[0] * r[2] + t[2] * r[3], o = t[1] * r[2] + t[3] * r[3], s = t[0] * r[4] + t[2] * r[5] + t[4], u = t[1] * r[4] + t[3] * r[5] + t[5];
  return e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e;
}
function Ff(e, t, r) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + r[0], e[5] = t[5] + r[1], e;
}
function yv(e, t, r, n) {
  n === void 0 && (n = [0, 0]);
  var i = t[0], a = t[2], o = t[4], s = t[1], u = t[3], l = t[5], f = Math.sin(r), h = Math.cos(r);
  return e[0] = i * h + s * f, e[1] = -i * f + s * h, e[2] = a * h + u * f, e[3] = -a * f + h * u, e[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], e[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], e;
}
function rw(e, t, r) {
  var n = r[0], i = r[1];
  return e[0] = t[0] * n, e[1] = t[1] * i, e[2] = t[2] * n, e[3] = t[3] * i, e[4] = t[4] * n, e[5] = t[5] * i, e;
}
function so(e, t) {
  var r = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], u = r * o - a * n;
  return u ? (u = 1 / u, e[0] = o * u, e[1] = -a * u, e[2] = -n * u, e[3] = r * u, e[4] = (n * s - o * i) * u, e[5] = (a * i - r * s) * u, e) : null;
}
function Vi(e, t) {
  return e == null && (e = 0), t == null && (t = 0), [e, t];
}
function nw(e) {
  return [e[0], e[1]];
}
function il(e, t, r) {
  return e[0] = t, e[1] = r, e;
}
function Qc(e, t, r) {
  return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e;
}
function iw(e, t, r) {
  return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e;
}
function aw(e) {
  return Math.sqrt(ow(e));
}
function ow(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function al(e, t, r) {
  return e[0] = t[0] * r, e[1] = t[1] * r, e;
}
function sw(e, t) {
  var r = aw(t);
  return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / r, e[1] = t[1] / r), e;
}
function zf(e, t) {
  return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
}
var Gf = zf;
function uw(e, t) {
  return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]);
}
var xi = uw;
function ol(e, t, r, n) {
  return e[0] = t[0] + n * (r[0] - t[0]), e[1] = t[1] + n * (r[1] - t[1]), e;
}
function Ae(e, t, r) {
  var n = t[0], i = t[1];
  return e[0] = r[0] * n + r[2] * i + r[4], e[1] = r[1] * n + r[3] * i + r[5], e;
}
function mi(e, t, r) {
  return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e;
}
function yi(e, t, r) {
  return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e;
}
var rt = function() {
  function e(t, r) {
    this.x = t || 0, this.y = r || 0;
  }
  return e.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, e.prototype.clone = function() {
    return new e(this.x, this.y);
  }, e.prototype.set = function(t, r) {
    return this.x = t, this.y = r, this;
  }, e.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, e.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, e.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, e.prototype.scaleAndAdd = function(t, r) {
    this.x += t.x * r, this.y += t.y * r;
  }, e.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, e.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, e.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, e.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, e.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, e.prototype.distance = function(t) {
    var r = this.x - t.x, n = this.y - t.y;
    return Math.sqrt(r * r + n * n);
  }, e.prototype.distanceSquare = function(t) {
    var r = this.x - t.x, n = this.y - t.y;
    return r * r + n * n;
  }, e.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, e.prototype.transform = function(t) {
    if (t) {
      var r = this.x, n = this.y;
      return this.x = t[0] * r + t[2] * n + t[4], this.y = t[1] * r + t[3] * n + t[5], this;
    }
  }, e.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, e.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, e.set = function(t, r, n) {
    t.x = r, t.y = n;
  }, e.copy = function(t, r) {
    t.x = r.x, t.y = r.y;
  }, e.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, e.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, e.dot = function(t, r) {
    return t.x * r.x + t.y * r.y;
  }, e.add = function(t, r, n) {
    t.x = r.x + n.x, t.y = r.y + n.y;
  }, e.sub = function(t, r, n) {
    t.x = r.x - n.x, t.y = r.y - n.y;
  }, e.scale = function(t, r, n) {
    t.x = r.x * n, t.y = r.y * n;
  }, e.scaleAndAdd = function(t, r, n, i) {
    t.x = r.x + n.x * i, t.y = r.y + n.y * i;
  }, e.lerp = function(t, r, n, i) {
    var a = 1 - i;
    t.x = a * r.x + i * n.x, t.y = a * r.y + i * n.y;
  }, e;
}(), En = Math.min, _i = Math.max, Vf = Math.abs, jc = ["x", "y"], lw = ["width", "height"], nn = new rt(), an = new rt(), on = new rt(), sn = new rt(), he = Ty(), ca = he.minTv, Hf = he.maxTv, Ca = [0, 0], tt = function() {
  function e(t, r, n, i) {
    sl(this, t, r, n, i);
  }
  return e.set = function(t, r, n, i, a) {
    return i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), t.x = r, t.y = n, t.width = i, t.height = a, t;
  }, e.prototype.union = function(t) {
    var r = En(t.x, this.x), n = En(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = _i(t.x + t.width, this.x + this.width) - r : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = _i(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = r, this.y = n;
  }, e.prototype.applyTransform = function(t) {
    e.applyTransform(this, this, t);
  }, e.prototype.calculateTransform = function(t) {
    return fw(ar(), this, t);
  }, e.prototype.intersect = function(t, r, n) {
    return e.intersect(this, t, r, n);
  }, e.intersect = function(t, r, n, i) {
    n && rt.set(n, 0, 0);
    var a = i && i.outIntersectRect || null, o = i && i.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !t || !r)
      return !1;
    t instanceof e || (t = sl(hw, t.x, t.y, t.width, t.height)), r instanceof e || (r = sl(vw, r.x, r.y, r.width, r.height));
    var s = !!n;
    he.reset(i, s);
    var u = he.touchThreshold, l = t.x + u, f = t.x + t.width - u, h = t.y + u, c = t.y + t.height - u, v = r.x + u, d = r.x + r.width - u, p = r.y + u, g = r.y + r.height - u;
    if (l > f || h > c || v > d || p > g)
      return !1;
    var m = !(f < v || d < l || c < p || g < h);
    return (s || a) && (Ca[0] = 1 / 0, Ca[1] = 0, td(l, f, v, d, 0, s, a, o), td(h, c, p, g, 1, s, a, o), s && rt.copy(n, m ? he.useDir ? he.dirMinTv : ca : Hf)), m;
  }, e.contain = function(t, r, n) {
    return r >= t.x && r <= t.x + t.width && n >= t.y && n <= t.y + t.height;
  }, e.prototype.contain = function(t, r) {
    return e.contain(this, t, r);
  }, e.prototype.clone = function() {
    return new e(this.x, this.y, this.width, this.height);
  }, e.prototype.copy = function(t) {
    Jc(this, t);
  }, e.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, e.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, e.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, e.create = function(t) {
    return new e(t ? t.x : 0, t ? t.y : 0, t ? t.width : 0, t ? t.height : 0);
  }, e.copy = function(t, r) {
    return t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height, t;
  }, e.applyTransform = function(t, r, n) {
    if (!n) {
      t !== r && Jc(t, r);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      t.x = r.x * i + o, t.y = r.y * a + s, t.width = r.width * i, t.height = r.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    nn.x = on.x = r.x, nn.y = sn.y = r.y, an.x = sn.x = r.x + r.width, an.y = on.y = r.y + r.height, nn.transform(n), sn.transform(n), an.transform(n), on.transform(n), t.x = En(nn.x, an.x, on.x, sn.x), t.y = En(nn.y, an.y, on.y, sn.y);
    var u = _i(nn.x, an.x, on.x, sn.x), l = _i(nn.y, an.y, on.y, sn.y);
    t.width = u - t.x, t.height = l - t.y;
  }, e.calculateTransform = function(t, r, n) {
    var i = n.width / r.width, a = n.height / r.height;
    return t = oo(t || []), Ff(t, t, il(ul, -r.x, -r.y)), rw(t, t, il(ul, i, a)), Ff(t, t, il(ul, n.x, n.y)), t;
  }, e;
}();
tt.create;
var sl = tt.set, Jc = tt.copy, fw = tt.calculateTransform;
tt.applyTransform;
tt.contain;
var hw = new tt(0, 0, 0, 0), vw = new tt(0, 0, 0, 0), ul = [];
function td(e, t, r, n, i, a, o, s) {
  var u = Vf(t - r), l = Vf(n - e), f = En(u, l), h = jc[i], c = jc[1 - i], v = lw[i];
  t < r || n < e ? u < l ? (a && (Hf[h] = -u), s && (o[h] = t, o[v] = 0)) : (a && (Hf[h] = l), s && (o[h] = e, o[v] = 0)) : (o && (o[h] = _i(e, r), o[v] = En(t, n) - o[h]), a && (f < Ca[0] || he.useDir) && (Ca[0] = En(f, Ca[0]), (u < l || !he.bidirectional) && (ca[h] = u, ca[c] = 0, he.useDir && he.calcDirMTV()), (u >= l || !he.bidirectional) && (ca[h] = -l, ca[c] = 0, he.useDir && he.calcDirMTV())));
}
function Ty() {
  var e = 0, t = new rt(), r = new rt(), n = {
    minTv: new rt(),
    maxTv: new rt(),
    useDir: !1,
    dirMinTv: new rt(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      n.touchThreshold = 0, a && a.touchThreshold != null && (n.touchThreshold = _i(0, a.touchThreshold)), n.negativeSize = !1, o && (n.minTv.set(1 / 0, 1 / 0), n.maxTv.set(0, 0), n.useDir = !1, a && a.direction != null && (n.useDir = !0, n.dirMinTv.copy(n.minTv), r.copy(n.minTv), e = a.direction, n.bidirectional = a.bidirectional == null || !!a.bidirectional, n.bidirectional || t.set(Math.cos(e), Math.sin(e))));
    },
    calcDirMTV: function() {
      var a = n.minTv, o = n.dirMinTv, s = a.y * a.y + a.x * a.x, u = Math.sin(e), l = Math.cos(e), f = u * a.y + l * a.x;
      if (i(f)) {
        i(a.x) && i(a.y) && o.set(0, 0);
        return;
      }
      if (r.x = s * l / f, r.y = s * u / f, i(r.x) && i(r.y)) {
        o.set(0, 0);
        return;
      }
      (n.bidirectional || t.dot(r) > 0) && r.len() < o.len() && o.copy(r);
    }
  };
  function i(a) {
    return Vf(a) < 1e-10;
  }
  return n;
}
function or(e) {
  To || (To = new Pi(100)), e = e || br;
  var t = To.get(e);
  return t || (t = {
    font: e,
    strWidthCache: new Pi(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: ve.measureText("国", e).width,
    asciiCharWidth: ve.measureText("a", e).width
  }, To.put(e, t)), t;
}
var To;
function cw(e) {
  if (!(ll >= ed)) {
    e = e || br;
    for (var t = [], r = +/* @__PURE__ */ new Date(), n = 0; n <= 127; n++)
      t[n] = ve.measureText(String.fromCharCode(n), e).width;
    var i = +/* @__PURE__ */ new Date() - r;
    return i > 16 ? ll = ed : i > 2 && ll++, t;
  }
}
var ll = 0, ed = 5;
function xy(e, t) {
  return e.asciiWidthMapTried || (e.asciiWidthMap = cw(e.font), e.asciiWidthMapTried = !0), 0 <= t && t <= 127 ? e.asciiWidthMap != null ? e.asciiWidthMap[t] : e.asciiCharWidth : e.stWideCharWidth;
}
function sr(e, t) {
  var r = e.strWidthCache, n = r.get(t);
  return n == null && (n = ve.measureText(t, e.font).width, r.put(t, n)), n;
}
function rd(e, t, r, n) {
  var i = sr(or(t), e), a = uo(t), o = Ei(0, i, r), s = Bn(0, a, n), u = new tt(o, s, i, a);
  return u;
}
function Cy(e, t, r, n) {
  var i = ((e || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return rd(i[0], t, r, n);
  for (var o = new tt(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = rd(i[s], t, r, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function Ei(e, t, r, n) {
  return r === "right" ? n ? e += t : e -= t : r === "center" && (n ? e += t / 2 : e -= t / 2), e;
}
function Bn(e, t, r, n) {
  return r === "middle" ? n ? e += t / 2 : e -= t / 2 : r === "bottom" && (n ? e += t : e -= t), e;
}
function uo(e) {
  return or(e).stWideCharWidth;
}
function Hn(e, t) {
  return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e;
}
function Bs(e, t, r) {
  var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = r.height, o = r.width, s = a / 2, u = r.x, l = r.y, f = "left", h = "top";
  if (n instanceof Array)
    u += Hn(n[0], r.width), l += Hn(n[1], r.height), f = null, h = null;
  else
    switch (n) {
      case "left":
        u -= i, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += i + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= i, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + i, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += i, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - i, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += i, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - i, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += i, l += i;
        break;
      case "insideTopRight":
        u += o - i, l += i, f = "right";
        break;
      case "insideBottomLeft":
        u += i, l += a - i, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - i, l += a - i, f = "right", h = "bottom";
        break;
    }
  return e = e || {}, e.x = u, e.y = l, e.align = f, e.verticalAlign = h, e;
}
var fl = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function dw(e, t, r, n, i, a) {
  if (!r) {
    e.text = "", e.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = Dy(r, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    Ay(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  e.text = o.join(`
`), e.isTruncated = s;
}
function Dy(e, t, r, n) {
  n = n || {};
  var i = N({}, n);
  r = $(r, "..."), i.maxIterations = $(n.maxIterations, 2);
  var a = i.minChar = $(n.minChar, 0), o = i.fontMeasureInfo = or(t), s = o.asciiCharWidth;
  i.placeholder = $(n.placeholder, "");
  for (var u = e = Math.max(0, e - 1), l = 0; l < a && u >= s; l++)
    u -= s;
  var f = sr(o, r);
  return f > u && (r = "", f = 0), u = e - f, i.ellipsis = r, i.ellipsisWidth = f, i.contentWidth = u, i.containerWidth = e, i;
}
function Ay(e, t, r) {
  var n = r.containerWidth, i = r.contentWidth, a = r.fontMeasureInfo;
  if (!n) {
    e.textLine = "", e.isTruncated = !1;
    return;
  }
  var o = sr(a, t);
  if (o <= n) {
    e.textLine = t, e.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= i || s >= r.maxIterations) {
      t += r.ellipsis;
      break;
    }
    var u = s === 0 ? pw(t, i, a) : o > 0 ? Math.floor(t.length * i / o) : 0;
    t = t.substr(0, u), o = sr(a, t);
  }
  t === "" && (t = r.placeholder), e.textLine = t, e.isTruncated = !0;
}
function pw(e, t, r) {
  for (var n = 0, i = 0, a = e.length; i < a && n < t; i++)
    n += xy(r, e.charCodeAt(i));
  return i;
}
function gw(e, t, r, n) {
  var i = _v(e), a = t.overflow, o = t.padding, s = o ? o[1] + o[3] : 0, u = o ? o[0] + o[2] : 0, l = t.font, f = a === "truncate", h = uo(l), c = $(t.lineHeight, h), v = t.lineOverflow === "truncate", d = !1, p = t.width;
  p == null && r != null && (p = r - s);
  var g = t.height;
  g == null && n != null && (g = n - u);
  var m;
  p != null && (a === "break" || a === "breakAll") ? m = i ? My(i, t.font, p, a === "breakAll", 0).lines : [] : m = i ? i.split(`
`) : [];
  var y = m.length * c;
  if (g == null && (g = y), y > g && v) {
    var _ = Math.floor(g / c);
    d = d || m.length > _, m = m.slice(0, _), y = m.length * c;
  }
  if (i && f && p != null)
    for (var S = Dy(p, l, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), b = {}, w = 0; w < m.length; w++)
      Ay(b, m[w], S), m[w] = b.textLine, d = d || b.isTruncated;
  for (var T = g, x = 0, D = or(l), w = 0; w < m.length; w++)
    x = Math.max(sr(D, m[w]), x);
  p == null && (p = x);
  var C = p;
  return T += u, C += s, {
    lines: m,
    height: g,
    outerWidth: C,
    outerHeight: T,
    lineHeight: c,
    calculatedLineHeight: h,
    contentWidth: x,
    contentHeight: y,
    width: p,
    isTruncated: d
  };
}
var mw = /* @__PURE__ */ function() {
  function e() {
  }
  return e;
}(), nd = /* @__PURE__ */ function() {
  function e(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return e;
}(), yw = /* @__PURE__ */ function() {
  function e() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return e;
}();
function _w(e, t, r, n, i) {
  var a = new yw(), o = _v(e);
  if (!o)
    return a;
  var s = t.padding, u = s ? s[1] + s[3] : 0, l = s ? s[0] + s[2] : 0, f = t.width;
  f == null && r != null && (f = r - u);
  var h = t.height;
  h == null && n != null && (h = n - l);
  for (var c = t.overflow, v = (c === "break" || c === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: c === "breakAll" } : null, d = fl.lastIndex = 0, p; (p = fl.exec(o)) != null; ) {
    var g = p.index;
    g > d && hl(a, o.substring(d, g), t, v), hl(a, p[2], t, v, p[1]), d = fl.lastIndex;
  }
  d < o.length && hl(a, o.substring(d, o.length), t, v);
  var m = [], y = 0, _ = 0, S = c === "truncate", b = t.lineOverflow === "truncate", w = {};
  function T(it, Dt, xt) {
    it.width = Dt, it.lineHeight = xt, y += xt, _ = Math.max(_, Dt);
  }
  t: for (var x = 0; x < a.lines.length; x++) {
    for (var D = a.lines[x], C = 0, A = 0, L = 0; L < D.tokens.length; L++) {
      var M = D.tokens[L], P = M.styleName && t.rich[M.styleName] || {}, E = M.textPadding = P.padding, R = E ? E[1] + E[3] : 0, k = M.font = P.font || t.font;
      M.contentHeight = uo(k);
      var O = $(P.height, M.contentHeight);
      if (M.innerHeight = O, E && (O += E[0] + E[2]), M.height = O, M.lineHeight = Nn(P.lineHeight, t.lineHeight, O), M.align = P && P.align || i, M.verticalAlign = P && P.verticalAlign || "middle", b && h != null && y + M.lineHeight > h) {
        var B = a.lines.length;
        L > 0 ? (D.tokens = D.tokens.slice(0, L), T(D, A, C), a.lines = a.lines.slice(0, x + 1)) : a.lines = a.lines.slice(0, x), a.isTruncated = a.isTruncated || a.lines.length < B;
        break t;
      }
      var F = P.width, G = F == null || F === "auto";
      if (typeof F == "string" && F.charAt(F.length - 1) === "%")
        M.percentWidth = F, m.push(M), M.contentWidth = sr(or(k), M.text);
      else {
        if (G) {
          var U = P.backgroundColor, X = U && U.image;
          X && (X = ew(X), Iu(X) && (M.width = Math.max(M.width, X.width * O / X.height)));
        }
        var H = S && f != null ? f - A : null;
        H != null && H < M.width ? !G || H < R ? (M.text = "", M.width = M.contentWidth = 0) : (dw(w, M.text, H - R, k, t.ellipsis, { minChar: t.truncateMinChar }), M.text = w.text, a.isTruncated = a.isTruncated || w.isTruncated, M.width = M.contentWidth = sr(or(k), M.text)) : M.contentWidth = sr(or(k), M.text);
      }
      M.width += R, A += M.width, P && (C = Math.max(C, M.lineHeight));
    }
    T(D, A, C);
  }
  a.outerWidth = a.width = $(f, _), a.outerHeight = a.height = $(h, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += u, a.outerHeight += l;
  for (var x = 0; x < m.length; x++) {
    var M = m[x], J = M.percentWidth;
    M.width = parseInt(J, 10) / 100 * a.width;
  }
  return a;
}
function hl(e, t, r, n, i) {
  var a = t === "", o = i && r.rich[i] || {}, s = e.lines, u = o.font || r.font, l = !1, f, h;
  if (n) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Hn(o.width, n.width) + v;
      s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var p = My(t, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = p.accumWidth + v, h = p.linesWidths, f = p.lines;
    }
  }
  f || (f = t.split(`
`));
  for (var g = or(u), m = 0; m < f.length; m++) {
    var y = f[m], _ = new mw();
    if (_.styleName = i, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[m] : sr(g, y), !m && !l) {
      var S = (s[s.length - 1] || (s[0] = new nd())).tokens, b = S.length;
      b === 1 && S[0].isLineHolder ? S[0] = _ : (y || !b || a) && S.push(_);
    } else
      s.push(new nd([_]));
  }
}
function Sw(e) {
  var t = e.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var bw = $r(",&?/;] ".split(""), function(e, t) {
  return e[t] = !0, e;
}, {});
function ww(e) {
  return Sw(e) ? !!bw[e] : !0;
}
function My(e, t, r, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = or(t), c = 0; c < e.length; c++) {
    var v = e.charAt(c);
    if (v === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var d = xy(h, v.charCodeAt(0)), p = n ? !1 : !ww(v);
    if (a.length ? f + d > r : i + f + d > r) {
      f ? (s || u) && (p ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += v, l += d, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = v, f = d)) : p ? (a.push(u), o.push(l), u = v, l = d) : (a.push(v), o.push(d));
      continue;
    }
    f += d, p ? (u += v, l += d) : (u && (s += u, u = "", l = 0), s += v);
  }
  return u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
function id(e, t, r, n, i, a) {
  if (e.baseX = r, e.baseY = n, e.outerWidth = e.outerHeight = null, !!t) {
    var o = t.width * 2, s = t.height * 2;
    tt.set(ad, Ei(r, o, i), Bn(n, s, a), o, s), tt.intersect(t, ad, null, od);
    var u = od.outIntersectRect;
    e.outerWidth = u.width, e.outerHeight = u.height, e.baseX = Ei(u.x, u.width, i, !0), e.baseY = Bn(u.y, u.height, a, !0);
  }
}
var ad = new tt(0, 0, 0, 0), od = { outIntersectRect: {}, clamp: !0 };
function _v(e) {
  return e != null ? e += "" : e = "";
}
function Tw(e) {
  var t = _v(e.text), r = e.font, n = sr(or(r), t), i = uo(r);
  return Uf(e, n, i, null);
}
function Uf(e, t, r, n) {
  var i = new tt(Ei(e.x || 0, t, e.textAlign), Bn(e.y || 0, r, e.textBaseline), t, r), a = n ?? (Iy(e) ? e.lineWidth : 0);
  return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function Iy(e) {
  var t = e.stroke;
  return t != null && t !== "none" && e.lineWidth > 0;
}
var sd = oo, ud = 5e-5;
function un(e) {
  return e > ud || e < -ud;
}
var ln = [], jn = [], vl = ar(), cl = Math.abs, lo = function() {
  function e() {
  }
  return e.prototype.getLocalTransform = function(t) {
    return xw(this, t);
  }, e.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, e.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, e.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, e.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, e.prototype.needLocalTransform = function() {
    return un(this.rotation) || un(this.x) || un(this.y) || un(this.scaleX - 1) || un(this.scaleY - 1) || un(this.skewX) || un(this.skewY);
  }, e.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, r = this.needLocalTransform(), n = this.transform;
    if (!(r || t)) {
      n && (sd(n), this.invTransform = null);
      return;
    }
    n = n || ar(), r ? this.getLocalTransform(n) : sd(n), t && (r ? xa(n, t, n) : mv(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || ar(), so(this.invTransform, n);
  }, e.prototype._resolveGlobalScaleRatio = function(t) {
    var r = this.globalScaleRatio;
    if (r != null && r !== 1) {
      this.getGlobalScale(ln);
      var n = ln[0] < 0 ? -1 : 1, i = ln[1] < 0 ? -1 : 1, a = ((ln[0] - n) * r + n) / ln[0] || 0, o = ((ln[1] - i) * r + i) / ln[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
  }, e.prototype.getComputedTransform = function() {
    for (var t = this, r = []; t; )
      r.push(t), t = t.parent;
    for (; t = r.pop(); )
      t.updateTransform();
    return this.transform;
  }, e.prototype.setLocalTransform = function(t) {
    if (t) {
      var r = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
      n = Math.sqrt(n) * Math.cos(a), r = Math.sqrt(r), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = r, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, e.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, r = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || ar(), xa(jn, t.invTransform, r), r = jn);
      var n = this.originX, i = this.originY;
      (n || i) && (vl[4] = n, vl[5] = i, xa(jn, r, vl), jn[4] -= n, jn[5] -= i, r = jn), this.setLocalTransform(r);
    }
  }, e.prototype.getGlobalScale = function(t) {
    var r = this.transform;
    return t = t || [], r ? (t[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), t[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (t[0] = -t[0]), r[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, e.prototype.transformCoordToLocal = function(t, r) {
    var n = [t, r], i = this.invTransform;
    return i && Ae(n, n, i), n;
  }, e.prototype.transformCoordToGlobal = function(t, r) {
    var n = [t, r], i = this.transform;
    return i && Ae(n, n, i), n;
  }, e.prototype.getLineScale = function() {
    var t = this.transform;
    return t && cl(t[0] - 1) > 1e-10 && cl(t[3] - 1) > 1e-10 ? Math.sqrt(cl(t[0] * t[3] - t[2] * t[1])) : 1;
  }, e.prototype.copyTransform = function(t) {
    Va(this, t);
  }, e.getLocalTransform = function(t, r) {
    r = r || [];
    var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, p = i + u;
      r[4] = -d * a - c * p * o, r[5] = -p * o - v * d * a;
    } else
      r[4] = r[5] = 0;
    return r[0] = a, r[3] = o, r[1] = v * a, r[2] = c * o, l && yv(r, r, l), r[4] += n + f, r[5] += i + h, r;
  }, e.initDefaultProps = function() {
    var t = e.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), e;
}(), xw = lo.getLocalTransform, Lu = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function Va(e, t) {
  return Pb(e, t, Lu);
}
var Da = {
  linear: function(e) {
    return e;
  },
  quadraticIn: function(e) {
    return e * e;
  },
  quadraticOut: function(e) {
    return e * (2 - e);
  },
  quadraticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
  },
  cubicIn: function(e) {
    return e * e * e;
  },
  cubicOut: function(e) {
    return --e * e * e + 1;
  },
  cubicInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
  },
  quarticIn: function(e) {
    return e * e * e * e;
  },
  quarticOut: function(e) {
    return 1 - --e * e * e * e;
  },
  quarticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
  },
  quinticIn: function(e) {
    return e * e * e * e * e;
  },
  quinticOut: function(e) {
    return --e * e * e * e * e + 1;
  },
  quinticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
  },
  sinusoidalIn: function(e) {
    return 1 - Math.cos(e * Math.PI / 2);
  },
  sinusoidalOut: function(e) {
    return Math.sin(e * Math.PI / 2);
  },
  sinusoidalInOut: function(e) {
    return 0.5 * (1 - Math.cos(Math.PI * e));
  },
  exponentialIn: function(e) {
    return e === 0 ? 0 : Math.pow(1024, e - 1);
  },
  exponentialOut: function(e) {
    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
  },
  exponentialInOut: function(e) {
    return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
  },
  circularIn: function(e) {
    return 1 - Math.sqrt(1 - e * e);
  },
  circularOut: function(e) {
    return Math.sqrt(1 - --e * e);
  },
  circularInOut: function(e) {
    return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  },
  elasticIn: function(e) {
    var t, r = 0.1, n = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)));
  },
  elasticOut: function(e) {
    var t, r = 0.1, n = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(e) {
    var t, r = 0.1, n = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(e) {
    var t = 1.70158;
    return e * e * ((t + 1) * e - t);
  },
  backOut: function(e) {
    var t = 1.70158;
    return --e * e * ((t + 1) * e + t) + 1;
  },
  backInOut: function(e) {
    var t = 2.5949095;
    return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
  },
  bounceIn: function(e) {
    return 1 - Da.bounceOut(1 - e);
  },
  bounceOut: function(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  bounceInOut: function(e) {
    return e < 0.5 ? Da.bounceIn(e * 2) * 0.5 : Da.bounceOut(e * 2 - 1) * 0.5 + 0.5;
  }
}, xo = Math.pow, Hr = Math.sqrt, Fs = 1e-8, Ly = 1e-4, ld = Hr(3), Co = 1 / 3, er = Vi(), Se = Vi(), Ci = Vi();
function Nr(e) {
  return e > -Fs && e < Fs;
}
function Py(e) {
  return e > Fs || e < -Fs;
}
function Ht(e, t, r, n, i) {
  var a = 1 - i;
  return a * a * (a * e + 3 * i * t) + i * i * (i * n + 3 * a * r);
}
function fd(e, t, r, n, i) {
  var a = 1 - i;
  return 3 * (((t - e) * a + 2 * (r - t) * i) * a + (n - r) * i * i);
}
function zs(e, t, r, n, i, a) {
  var o = n + 3 * (t - r) - e, s = 3 * (r - t * 2 + e), u = 3 * (t - e), l = e - i, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (Nr(f) && Nr(h))
    if (Nr(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var p = h * h - 4 * f * c;
    if (Nr(p)) {
      var g = h / f, d = -s / o + g, m = -g / 2;
      d >= 0 && d <= 1 && (a[v++] = d), m >= 0 && m <= 1 && (a[v++] = m);
    } else if (p > 0) {
      var y = Hr(p), _ = f * s + 1.5 * o * (-h + y), S = f * s + 1.5 * o * (-h - y);
      _ < 0 ? _ = -xo(-_, Co) : _ = xo(_, Co), S < 0 ? S = -xo(-S, Co) : S = xo(S, Co);
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var b = (2 * f * s - 3 * o * h) / (2 * Hr(f * f * f)), w = Math.acos(b) / 3, T = Hr(f), x = Math.cos(w), d = (-s - 2 * T * x) / (3 * o), m = (-s + T * (x + ld * Math.sin(w))) / (3 * o), D = (-s + T * (x - ld * Math.sin(w))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), m >= 0 && m <= 1 && (a[v++] = m), D >= 0 && D <= 1 && (a[v++] = D);
    }
  }
  return v;
}
function Ey(e, t, r, n, i) {
  var a = 6 * r - 12 * t + 6 * e, o = 9 * t + 3 * n - 3 * e - 9 * r, s = 3 * t - 3 * e, u = 0;
  if (Nr(o)) {
    if (Py(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Nr(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = Hr(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function Gs(e, t, r, n, i, a) {
  var o = (t - e) * i + e, s = (r - t) * i + t, u = (n - r) * i + r, l = (s - o) * i + o, f = (u - s) * i + s, h = (f - l) * i + l;
  a[0] = e, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n;
}
function Cw(e, t, r, n, i, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, p, g, m;
  er[0] = u, er[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    Se[0] = Ht(e, r, i, o, y), Se[1] = Ht(t, n, a, s, y), g = xi(er, Se), g < v && (h = y, v = g);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(c < Ly); _++)
    d = h - c, p = h + c, Se[0] = Ht(e, r, i, o, d), Se[1] = Ht(t, n, a, s, d), g = xi(Se, er), d >= 0 && g < v ? (h = d, v = g) : (Ci[0] = Ht(e, r, i, o, p), Ci[1] = Ht(t, n, a, s, p), m = xi(Ci, er), p <= 1 && m < v ? (h = p, v = m) : c *= 0.5);
  return Hr(v);
}
function Dw(e, t, r, n, i, a, o, s, u) {
  for (var l = e, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, p = Ht(e, r, i, o, d), g = Ht(t, n, a, s, d), m = p - l, y = g - f;
    h += Math.sqrt(m * m + y * y), l = p, f = g;
  }
  return h;
}
function oe(e, t, r, n) {
  var i = 1 - n;
  return i * (i * e + 2 * n * t) + n * n * r;
}
function hd(e, t, r, n) {
  return 2 * ((1 - n) * (t - e) + n * (r - t));
}
function Aw(e, t, r, n, i) {
  var a = e - 2 * t + r, o = 2 * (t - e), s = e - n, u = 0;
  if (Nr(a)) {
    if (Py(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Nr(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = Hr(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function Ry(e, t, r) {
  var n = e + r - 2 * t;
  return n === 0 ? 0.5 : (e - t) / n;
}
function Vs(e, t, r, n, i) {
  var a = (t - e) * n + e, o = (r - t) * n + t, s = (o - a) * n + a;
  i[0] = e, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r;
}
function Mw(e, t, r, n, i, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  er[0] = o, er[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    Se[0] = oe(e, r, i, c), Se[1] = oe(t, n, a, c);
    var v = xi(er, Se);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Ly); d++) {
    var p = l - f, g = l + f;
    Se[0] = oe(e, r, i, p), Se[1] = oe(t, n, a, p);
    var v = xi(Se, er);
    if (p >= 0 && v < h)
      l = p, h = v;
    else {
      Ci[0] = oe(e, r, i, g), Ci[1] = oe(t, n, a, g);
      var m = xi(Ci, er);
      g <= 1 && m < h ? (l = g, h = m) : f *= 0.5;
    }
  }
  return Hr(h);
}
function Iw(e, t, r, n, i, a, o) {
  for (var s = e, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = oe(e, r, i, c), d = oe(t, n, a, c), p = v - s, g = d - u;
    l += Math.sqrt(p * p + g * g), s = v, u = d;
  }
  return l;
}
var Lw = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Sv(e) {
  var t = e && Lw.exec(e);
  if (t) {
    var r = t[1].split(","), n = +nr(r[0]), i = +nr(r[1]), a = +nr(r[2]), o = +nr(r[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : zs(0, n, a, 1, u, s) && Ht(0, i, o, 1, s[0]);
    };
  }
}
var Pw = function() {
  function e(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Ut, this.ondestroy = t.ondestroy || Ut, this.onrestart = t.onrestart || Ut, t.easing && this.setEasing(t.easing);
  }
  return e.prototype.step = function(t, r) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += r;
      return;
    }
    var n = this._life, i = t - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = i % n;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, e.prototype.pause = function() {
    this._paused = !0;
  }, e.prototype.resume = function() {
    this._paused = !1;
  }, e.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = et(t) ? t : Da[t] || Sv(t);
  }, e;
}(), vd = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function Ur(e) {
  return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e;
}
function Wf(e) {
  return e < 0 ? 0 : e > 1 ? 1 : e;
}
function dl(e) {
  var t = e;
  return t.length && t.charAt(t.length - 1) === "%" ? Ur(parseFloat(t) / 100 * 255) : Ur(parseInt(t, 10));
}
function Fn(e) {
  var t = e;
  return t.length && t.charAt(t.length - 1) === "%" ? Wf(parseFloat(t) / 100) : Wf(parseFloat(t));
}
function pl(e, t, r) {
  return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? e + (t - e) * r * 6 : r * 2 < 1 ? t : r * 3 < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Do(e, t, r) {
  return e + (t - e) * r;
}
function pe(e, t, r, n, i) {
  return e[0] = t, e[1] = r, e[2] = n, e[3] = i, e;
}
function Yf(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
var Oy = new Pi(20), Ao = null;
function Jn(e, t) {
  Ao && Yf(Ao, t), Ao = Oy.put(e, Ao || t.slice());
}
function Ge(e, t) {
  if (e) {
    t = t || [];
    var r = Oy.get(e);
    if (r)
      return Yf(t, r);
    e = e + "";
    var n = e.replace(/ /g, "").toLowerCase();
    if (n in vd)
      return Yf(t, vd[n]), Jn(e, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          pe(t, 0, 0, 0, 1);
          return;
        }
        return pe(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Jn(e, t), t;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          pe(t, 0, 0, 0, 1);
          return;
        }
        return pe(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Jn(e, t), t;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o), l = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? pe(t, +l[0], +l[1], +l[2], 1) : pe(t, 0, 0, 0, 1);
          f = Fn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return pe(t, dl(l[0]), dl(l[1]), dl(l[2]), l.length === 3 ? f : Fn(l[3])), Jn(e, t), t;
          pe(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            pe(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = Fn(l[3]), Xf(l, t), Jn(e, t), t;
        case "hsl":
          if (l.length !== 3) {
            pe(t, 0, 0, 0, 1);
            return;
          }
          return Xf(l, t), Jn(e, t), t;
        default:
          return;
      }
    }
    pe(t, 0, 0, 0, 1);
  }
}
function Xf(e, t) {
  var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360, n = Fn(e[1]), i = Fn(e[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return t = t || [], pe(t, Ur(pl(o, a, r + 1 / 3) * 255), Ur(pl(o, a, r) * 255), Ur(pl(o, a, r - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t;
}
function Ew(e) {
  if (e) {
    var t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = a - i, s = (a + i) / 2, u, l;
    if (o === 0)
      u = 0, l = 0;
    else {
      s < 0.5 ? l = o / (a + i) : l = o / (2 - a - i);
      var f = ((a - t) / 6 + o / 2) / o, h = ((a - r) / 6 + o / 2) / o, c = ((a - n) / 6 + o / 2) / o;
      t === a ? u = c - h : r === a ? u = 1 / 3 + f - c : n === a && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1);
    }
    var v = [u * 360, l, s];
    return e[3] != null && v.push(e[3]), v;
  }
}
function cd(e, t) {
  var r = Ge(e);
  if (r) {
    for (var n = 0; n < 3; n++)
      r[n] = r[n] * (1 - t) | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
    return fo(r, r.length === 4 ? "rgba" : "rgb");
  }
}
function Rw(e, t, r) {
  if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
    var n = e * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = Ge(t[i]), s = Ge(t[a]), u = n - i, l = fo([
      Ur(Do(o[0], s[0], u)),
      Ur(Do(o[1], s[1], u)),
      Ur(Do(o[2], s[2], u)),
      Wf(Do(o[3], s[3], u))
    ], "rgba");
    return r ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
function $f(e, t, r, n) {
  var i = Ge(e);
  if (e)
    return i = Ew(i), r != null && (i[1] = Fn(et(r) ? r(i[1]) : r)), n != null && (i[2] = Fn(et(n) ? n(i[2]) : n)), fo(Xf(i), "rgba");
}
function fo(e, t) {
  if (!(!e || !e.length)) {
    var r = e[0] + "," + e[1] + "," + e[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (r += "," + e[3]), t + "(" + r + ")";
  }
}
function Hs(e, t) {
  var r = Ge(e);
  return r ? (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) * r[3] / 255 + (1 - r[3]) * t : 0;
}
var dd = new Pi(100);
function Zf(e) {
  if (Y(e)) {
    var t = dd.get(e);
    return t || (t = cd(e, -0.1), dd.put(e, t)), t;
  } else if (Du(e)) {
    var r = N({}, e);
    return r.colorStops = Z(e.colorStops, function(n) {
      return {
        offset: n.offset,
        color: cd(n.color, -0.1)
      };
    }), r;
  }
  return e;
}
var Us = Math.round;
function Ha(e) {
  var t;
  if (!e || e === "transparent")
    e = "none";
  else if (typeof e == "string" && e.indexOf("rgba") > -1) {
    var r = Ge(e);
    r && (e = "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")", t = r[3]);
  }
  return {
    color: e,
    opacity: t ?? 1
  };
}
var pd = 1e-4;
function Br(e) {
  return e < pd && e > -pd;
}
function Mo(e) {
  return Us(e * 1e3) / 1e3;
}
function qf(e) {
  return Us(e * 1e4) / 1e4;
}
function Ow(e) {
  return "matrix(" + Mo(e[0]) + "," + Mo(e[1]) + "," + Mo(e[2]) + "," + Mo(e[3]) + "," + qf(e[4]) + "," + qf(e[5]) + ")";
}
var kw = {
  left: "start",
  right: "end",
  center: "middle",
  middle: "middle"
};
function Nw(e, t, r) {
  return r === "top" ? e += t / 2 : r === "bottom" && (e -= t / 2), e;
}
function Bw(e) {
  return e && (e.shadowBlur || e.shadowOffsetX || e.shadowOffsetY);
}
function Fw(e) {
  var t = e.style, r = e.getGlobalScale();
  return [
    t.shadowColor,
    (t.shadowBlur || 0).toFixed(2),
    (t.shadowOffsetX || 0).toFixed(2),
    (t.shadowOffsetY || 0).toFixed(2),
    r[0],
    r[1]
  ].join(",");
}
function ky(e) {
  return e && !!e.image;
}
function zw(e) {
  return e && !!e.svgElement;
}
function bv(e) {
  return ky(e) || zw(e);
}
function Ny(e) {
  return e.type === "linear";
}
function By(e) {
  return e.type === "radial";
}
function Fy(e) {
  return e && (e.type === "linear" || e.type === "radial");
}
function Pu(e) {
  return "url(#" + e + ")";
}
function zy(e) {
  var t = e.getGlobalScale(), r = Math.max(t[0], t[1]);
  return Math.max(Math.ceil(Math.log(r) / Math.log(10)), 1);
}
function Gy(e) {
  var t = e.x || 0, r = e.y || 0, n = (e.rotation || 0) * gs, i = $(e.scaleX, 1), a = $(e.scaleY, 1), o = e.skewX || 0, s = e.skewY || 0, u = [];
  return (t || r) && u.push("translate(" + t + "px," + r + "px)"), n && u.push("rotate(" + n + ")"), (i !== 1 || a !== 1) && u.push("scale(" + i + "," + a + ")"), (o || s) && u.push("skew(" + Us(o * gs) + "deg, " + Us(s * gs) + "deg)"), u.join(" ");
}
var Gw = function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(e) {
    return Buffer.from(e).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(e) {
    return btoa(unescape(encodeURIComponent(e)));
  } : function(e) {
    return null;
  };
}(), Kf = Array.prototype.slice;
function mr(e, t, r) {
  return (t - e) * r + e;
}
function gl(e, t, r, n) {
  for (var i = t.length, a = 0; a < i; a++)
    e[a] = mr(t[a], r[a], n);
  return e;
}
function Vw(e, t, r, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    e[o] || (e[o] = []);
    for (var s = 0; s < a; s++)
      e[o][s] = mr(t[o][s], r[o][s], n);
  }
  return e;
}
function Io(e, t, r, n) {
  for (var i = t.length, a = 0; a < i; a++)
    e[a] = t[a] + r[a] * n;
  return e;
}
function gd(e, t, r, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    e[o] || (e[o] = []);
    for (var s = 0; s < a; s++)
      e[o][s] = t[o][s] + r[o][s] * n;
  }
  return e;
}
function Hw(e, t) {
  for (var r = e.length, n = t.length, i = r > n ? t : e, a = Math.min(r, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(r, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Uw(e, t, r) {
  var n = e, i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(r === 1 ? i[u] : Kf.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (r === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function ms(e) {
  if (le(e)) {
    var t = e.length;
    if (le(e[0])) {
      for (var r = [], n = 0; n < t; n++)
        r.push(Kf.call(e[n]));
      return r;
    }
    return Kf.call(e);
  }
  return e;
}
function ys(e) {
  return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")";
}
function Ww(e) {
  return le(e && e[0]) ? 2 : 1;
}
var Lo = 0, _s = 1, Vy = 2, da = 3, Qf = 4, jf = 5, md = 6;
function yd(e) {
  return e === Qf || e === jf;
}
function Po(e) {
  return e === _s || e === Vy;
}
var Zi = [0, 0, 0, 0], Yw = function() {
  function e(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return e.prototype.isFinished = function() {
    return this._finished;
  }, e.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, e.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, e.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, e.prototype.addKeyframe = function(t, r, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = md, u = r;
    if (le(r)) {
      var l = Ww(r);
      s = l, (l === 1 && !mt(r[0]) || l === 2 && !mt(r[0][0])) && (o = !0);
    } else if (mt(r) && !za(r))
      s = Lo;
    else if (Y(r))
      if (!isNaN(+r))
        s = Lo;
      else {
        var f = Ge(r);
        f && (u = f, s = da);
      }
    else if (Du(r)) {
      var h = N({}, u);
      h.colorStops = Z(r.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Ge(v.color)
        };
      }), Ny(r) ? s = Qf : By(r) && (s = jf), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === md) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: t,
      value: u,
      rawValue: r,
      percent: 0
    };
    return n && (c.easing = n, c.easingFunc = et(n) ? n : Da[n] || Sv(n)), i.push(c), c;
  }, e.prototype.prepare = function(t, r) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(p, g) {
      return p.time - g.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = Po(i), l = yd(i), f = 0; f < a; f++) {
      var h = n[f], c = h.value, v = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? Uw(c, v, i) : l && Hw(c.colorStops, v.colorStops));
    }
    if (!s && i !== jf && r && this.needsAnimate() && r.needsAnimate() && i === r.valType && !r._finished) {
      this._additiveTrack = r;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === Lo ? n[f].additiveValue = n[f].value - d : i === da ? n[f].additiveValue = Io([], n[f].value, d, -1) : Po(i) && (n[f].additiveValue = i === _s ? Io([], n[f].value, d, -1) : gd([], n[f].value, d, -1));
    }
  }, e.prototype.step = function(t, r) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === da, f, h = this._lastFr, c = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (r < 0)
          f = 0;
        else if (r < this._lastFrP) {
          var p = c(h + 1, s - 1);
          for (f = p; f >= 0 && !(o[f].percent <= r); f--)
            ;
          f = c(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > r); f++)
            ;
          f = c(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (v && d) {
        this._lastFr = f, this._lastFrP = r;
        var g = d.percent - v.percent, m = g === 0 ? 1 : c((r - v.percent) / g, 1);
        d.easingFunc && (m = d.easingFunc(m));
        var y = n ? this._additiveValue : l ? Zi : t[u];
        if ((Po(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          t[u] = m < 1 ? v.rawValue : d.rawValue;
        else if (Po(a))
          a === _s ? gl(y, v[i], d[i], m) : Vw(y, v[i], d[i], m);
        else if (yd(a)) {
          var _ = v[i], S = d[i], b = a === Qf;
          t[u] = {
            type: b ? "linear" : "radial",
            x: mr(_.x, S.x, m),
            y: mr(_.y, S.y, m),
            colorStops: Z(_.colorStops, function(T, x) {
              var D = S.colorStops[x];
              return {
                offset: mr(T.offset, D.offset, m),
                color: ys(gl([], T.color, D.color, m))
              };
            }),
            global: S.global
          }, b ? (t[u].x2 = mr(_.x2, S.x2, m), t[u].y2 = mr(_.y2, S.y2, m)) : t[u].r = mr(_.r, S.r, m);
        } else if (l)
          gl(y, v[i], d[i], m), n || (t[u] = ys(y));
        else {
          var w = mr(v[i], d[i], m);
          n ? this._additiveValue = w : t[u] = w;
        }
        n && this._addToTarget(t);
      }
    }
  }, e.prototype._addToTarget = function(t) {
    var r = this.valType, n = this.propName, i = this._additiveValue;
    r === Lo ? t[n] = t[n] + i : r === da ? (Ge(t[n], Zi), Io(Zi, Zi, i, 1), t[n] = ys(Zi)) : r === _s ? Io(t[n], t[n], i, 1) : r === Vy && gd(t[n], t[n], i, 1);
  }, e;
}(), wv = function() {
  function e(t, r, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = r, r && i) {
      vv("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return e.prototype.getMaxTime = function() {
    return this._maxTime;
  }, e.prototype.getDelay = function() {
    return this._delay;
  }, e.prototype.getLoop = function() {
    return this._loop;
  }, e.prototype.getTarget = function() {
    return this._target;
  }, e.prototype.changeTarget = function(t) {
    this._target = t;
  }, e.prototype.when = function(t, r, n) {
    return this.whenWithKeys(t, r, lt(r), n);
  }, e.prototype.whenWithKeys = function(t, r, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new Yw(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === da && l && (l = ys(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, ms(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(t, ms(r[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, e.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, e.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, e.prototype.isPaused = function() {
    return !!this._paused;
  }, e.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, e.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var r = t.length, n = 0; n < r; n++)
        t[n].call(this);
  }, e.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, r = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, r)
      for (var n = 0; n < r.length; n++)
        r[n].call(this);
  }, e.prototype._setTracksFinished = function() {
    for (var t = this._tracks, r = this._trackKeys, n = 0; n < r.length; n++)
      t[r[n]].setFinished();
  }, e.prototype._getAdditiveTrack = function(t) {
    var r, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(t);
        a && (r = a);
      }
    return r;
  }, e.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var r = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(i, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (r._target[s.propName] = h.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var c = new Pw({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            r._started = 2;
            var d = r._additiveAnimators;
            if (d) {
              for (var p = !1, g = 0; g < d.length; g++)
                if (d[g]._clip) {
                  p = !0;
                  break;
                }
              p || (r._additiveAnimators = null);
            }
            for (var g = 0; g < n.length; g++)
              n[g].step(r._target, v);
            var m = r._onframeCbs;
            if (m)
              for (var g = 0; g < m.length; g++)
                m[g](r._target, v);
          },
          ondestroy: function() {
            r._doneCallback();
          }
        });
        this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, e.prototype.stop = function(t) {
    if (this._clip) {
      var r = this._clip;
      t && r.onframe(1), this._abortedCallback();
    }
  }, e.prototype.delay = function(t) {
    return this._delay = t, this;
  }, e.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, e.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, e.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, e.prototype.getClip = function() {
    return this._clip;
  }, e.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, e.prototype.getTracks = function() {
    var t = this;
    return Z(this._trackKeys, function(r) {
      return t._tracks[r];
    });
  }, e.prototype.stopTracks = function(t, r) {
    if (!t.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
      var o = n[t[a]];
      o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, e.prototype.saveTo = function(t, r, n) {
    if (t) {
      r = r || this._trackKeys;
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[n ? 0 : s.length - 1];
          u && (t[a] = ms(u.rawValue));
        }
      }
    }
  }, e.prototype.__changeFinalValue = function(t, r) {
    r = r || lt(t);
    for (var n = 0; n < r.length; n++) {
      var i = r[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, e;
}(), hr = function() {
  function e(t) {
    t && (this._$eventProcessor = t);
  }
  return e.prototype.on = function(t, r, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof r == "function" && (i = n, n = r, r = null), !n || !t)
      return this;
    var o = this._$eventProcessor;
    r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === n)
        return this;
    var u = {
      h: n,
      query: r,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, e.prototype.isSilent = function(t) {
    var r = this._$handlers;
    return !r || !r[t] || !r[t].length;
  }, e.prototype.off = function(t, r) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (r) {
      if (n[t]) {
        for (var i = [], a = 0, o = n[t].length; a < o; a++)
          n[t][a].h !== r && i.push(n[t][a]);
        n[t] = i;
      }
      n[t] && n[t].length === 0 && delete n[t];
    } else
      delete n[t];
    return this;
  }, e.prototype.trigger = function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = i.length, u = 0; u < s; u++) {
        var l = i[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, r[0]);
              break;
            case 2:
              l.h.call(l.ctx, r[0], r[1]);
              break;
            default:
              l.h.apply(l.ctx, r);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, e.prototype.triggerWithContext = function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = r[o - 1], u = i.length, l = 0; l < u; l++) {
        var f = i[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, r[0]);
              break;
            case 2:
              f.h.call(s, r[0], r[1]);
              break;
            default:
              f.h.apply(s, r.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, e;
}(), Hy = 1;
nt.hasGlobalWindow && (Hy = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Ws = Hy, Jf = 0.4, th = "#333", eh = "#ccc", Xw = "#eee", ue = 1, pa = 2, di = 4, ml = "__zr_normal__", yl = Lu.concat(["ignore"]), $w = $r(Lu, function(e, t) {
  return e[t] = !0, e;
}, { ignore: !1 }), ti = {}, Zw = new tt(0, 0, 0, 0), Eo = [], Ss = 0, Eu = 1, Ru = function() {
  function e(t) {
    this.id = gy(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return e.prototype._init = function(t) {
    this.attr(t);
  }, e.prototype.drift = function(t, r, n) {
    switch (this.draggable) {
      case "horizontal":
        r = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += r, this.decomposeTransform(), this.markRedraw();
  }, e.prototype.beforeUpdate = function() {
  }, e.prototype.afterUpdate = function() {
  }, e.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, e.prototype.updateInnerText = function(t) {
    var r = this._textContent;
    if (r && (!r.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = r.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = i ? this : null;
      var l = !1;
      a.copyTransform(r);
      var f = n.position != null, h = n.autoOverflowArea, c = void 0;
      if ((h || f) && (c = Zw, n.layoutRect ? c.copy(n.layoutRect) : c.copy(this.getBoundingRect()), i || c.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(ti, n, c) : Bs(ti, n, c), a.x = ti.x, a.y = ti.y, o = ti.align, s = ti.verticalAlign;
        var v = n.origin;
        if (v && n.rotation != null) {
          var d = void 0, p = void 0;
          v === "center" ? (d = c.width * 0.5, p = c.height * 0.5) : (d = Hn(v[0], c.width), p = Hn(v[1], c.height)), l = !0, a.originX = -a.x + d + (i ? 0 : c.x), a.originY = -a.y + p + (i ? 0 : c.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var g = n.offset;
      g && (a.x += g[0], a.y += g[1], l || (a.originX = -g[0], a.originY = -g[1]));
      var m = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (h) {
        var y = m.overflowRect = m.overflowRect || new tt(0, 0, 0, 0);
        a.getLocalTransform(Eo), so(Eo, Eo), tt.copy(y, c), y.applyTransform(Eo);
      } else
        m.overflowRect = null;
      var _ = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, S = void 0, b = void 0, w = void 0;
      _ && this.canBeInsideText() ? (S = n.insideFill, b = n.insideStroke, (S == null || S === "auto") && (S = this.getInsideTextFill()), (b == null || b === "auto") && (b = this.getInsideTextStroke(S), w = !0)) : (S = n.outsideFill, b = n.outsideStroke, (S == null || S === "auto") && (S = this.getOutsideFill()), (b == null || b === "auto") && (b = this.getOutsideStroke(S), w = !0)), S = S || "#000", (S !== m.fill || b !== m.stroke || w !== m.autoStroke || o !== m.align || s !== m.verticalAlign) && (u = !0, m.fill = S, m.stroke = b, m.autoStroke = w, m.align = o, m.verticalAlign = s, r.setDefaultTextStyle(m)), r.__dirty |= ue, u && r.dirtyStyle(!0);
    }
  }, e.prototype.canBeInsideText = function() {
    return !0;
  }, e.prototype.getInsideTextFill = function() {
    return "#fff";
  }, e.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, e.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? eh : th;
  }, e.prototype.getOutsideStroke = function(t) {
    var r = this.__zr && this.__zr.getBackgroundColor(), n = typeof r == "string" && Ge(r);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, fo(n, "rgba");
  }, e.prototype.traverse = function(t, r) {
  }, e.prototype.attrKV = function(t, r) {
    t === "textConfig" ? this.setTextConfig(r) : t === "textContent" ? this.setTextContent(r) : t === "clipPath" ? this.setClipPath(r) : t === "extra" ? (this.extra = this.extra || {}, N(this.extra, r)) : this[t] = r;
  }, e.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, e.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, e.prototype.attr = function(t, r) {
    if (typeof t == "string")
      this.attrKV(t, r);
    else if (K(t))
      for (var n = t, i = lt(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, e.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== ml)) {
        var o = i.targetName, s = o ? r[o] : r;
        i.saveTo(s);
      }
    }
  }, e.prototype._innerSaveToNormal = function(t) {
    var r = this._normalState;
    r || (r = this._normalState = {}), t.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(t, r, yl);
  }, e.prototype._savePrimaryToNormal = function(t, r, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      t[a] != null && !(a in r) && (r[a] = this[a]);
    }
  }, e.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, e.prototype.getState = function(t) {
    return this.states[t];
  }, e.prototype.ensureState = function(t) {
    var r = this.states;
    return r[t] || (r[t] = {}), r[t];
  }, e.prototype.clearStates = function(t) {
    this.useState(ml, !1, t);
  }, e.prototype.useState = function(t, r, n, i) {
    var a = t === ml, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(ct(s, t) >= 0 && (r || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          vv("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = this._textContent, h = _d(this, f, l, i);
        h && !this.__inHover && (this.__inHover = h), this._applyStateObj(t, l, this._normalState, r, bd(this, n, u), u);
        var c = this._textGuide;
        return f && f.useState(t, r, n, !!h), c && c.useState(t, r, n, !!h), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this.__inHover = Ss, this.__dirty &= ~ue), l;
      }
    }
  }, e.prototype.useStates = function(t, r, n) {
    if (!t.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && i.push(f);
      }
      var h = i[o - 1], c = this._textContent, v = _d(this, c, h, n);
      v && !this.__inHover && (this.__inHover = v);
      var d = this._mergeStates(i), p = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(t.join(","), d, this._normalState, !1, bd(this, r, p), p);
      var g = this._textGuide;
      c && c.useStates(t, r, !!v), g && g.useStates(t, r, !!v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this.__inHover = Ss, this.__dirty &= ~ue);
    }
  }, e.prototype.isSilent = function() {
    for (var t = this; t; ) {
      if (t.silent)
        return !0;
      var r = t.__hostTarget;
      t = r ? t.ignoreHostSilent ? null : r : t.parent;
    }
    return !1;
  }, e.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var r = this.animators[t];
      r.targetName && r.changeTarget(this[r.targetName]);
    }
  }, e.prototype.removeState = function(t) {
    var r = ct(this.currentStates, t);
    if (r >= 0) {
      var n = this.currentStates.slice();
      n.splice(r, 1), this.useStates(n);
    }
  }, e.prototype.replaceState = function(t, r, n) {
    var i = this.currentStates.slice(), a = ct(i, t), o = ct(i, r) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = r : n && !o && i.push(r), this.useStates(i);
  }, e.prototype.toggleState = function(t, r) {
    r ? this.useState(t, !0) : this.removeState(t);
  }, e.prototype._mergeStates = function(t) {
    for (var r = {}, n, i = 0; i < t.length; i++) {
      var a = t[i];
      N(r, a), a.textConfig && (n = n || {}, N(n, a.textConfig));
    }
    return n && (r.textConfig = n), r;
  }, e.prototype._applyStateObj = function(t, r, n, i, a, o) {
    if (this.__inHover !== Eu) {
      var s = !(r && i);
      r && r.textConfig ? (this.textConfig = N({}, i ? this.textConfig : n.textConfig), N(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var u = {}, l = !1, f = 0; f < yl.length; f++) {
        var h = yl[f], c = a && $w[h];
        r && r[h] != null ? c ? (l = !0, u[h] = r[h]) : this[h] = r[h] : s && n[h] != null && (c ? (l = !0, u[h] = n[h]) : this[h] = n[h]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var v = this.animators[f], d = v.targetName;
          v.getLoop() || v.__changeFinalValue(d ? (r || n)[d] : r || n);
        }
      l && this._transitionState(t, u, o);
    }
  }, e.prototype._attachComponent = function(t) {
    if (!(t.__zr && !t.__hostTarget) && t !== this) {
      var r = this.__zr;
      r && t.addSelfToZr(r), t.__zr = r, t.__hostTarget = this;
    }
  }, e.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, e.prototype.getClipPath = function() {
    return this._clipPath;
  }, e.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, e.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, e.prototype.getTextContent = function() {
    return this._textContent;
  }, e.prototype.setTextContent = function(t) {
    var r = this._textContent;
    r !== t && (r && r !== t && this.removeTextContent(), t.innerTransformable = new lo(), this._attachComponent(t), this._textContent = t, this.markRedraw());
  }, e.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), N(this.textConfig, t), this.markRedraw();
  }, e.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, e.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, e.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, e.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, e.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, e.prototype.markRedraw = function() {
    this.__dirty |= ue;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, e.prototype.dirty = function() {
    this.markRedraw();
  }, e.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          t.animation.addAnimator(r[n]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, e.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          t.animation.removeAnimator(r[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, e.prototype.animate = function(t, r, n) {
    var i = t ? this[t] : this, a = new wv(i, r, n);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, e.prototype.addAnimator = function(t, r) {
    var n = this.__zr, i = this;
    t.during(function() {
      i.updateDuringAnimation(r);
    }).done(function() {
      var a = i.animators, o = ct(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
  }, e.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, e.prototype.stopAnimation = function(t, r) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !t || t === s.scope ? s.stop(r) : a.push(s);
    }
    return this.animators = a, this;
  }, e.prototype.animateTo = function(t, r, n) {
    _l(this, t, r, n);
  }, e.prototype.animateFrom = function(t, r, n) {
    _l(this, t, r, n, !0);
  }, e.prototype._transitionState = function(t, r, n, i) {
    for (var a = _l(this, r, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, e.prototype.getBoundingRect = function() {
    return null;
  }, e.prototype.getPaintRect = function() {
    return null;
  }, e.initDefaultProps = function() {
    var t = e.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.ignoreHostSilent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = !1, t.__inHover = Ss, t.__dirty = ue;
    function r(n, i, a, o) {
      Object.defineProperty(t, n, {
        get: function() {
          if (!this[i]) {
            var u = this[i] = [];
            s(this, u);
          }
          return this[i];
        },
        set: function(u) {
          this[a] = u[0], this[o] = u[1], this[i] = u, s(this, u);
        }
      });
      function s(u, l) {
        Object.defineProperty(l, 0, {
          get: function() {
            return u[a];
          },
          set: function(f) {
            u[a] = f;
          }
        }), Object.defineProperty(l, 1, {
          get: function() {
            return u[o];
          },
          set: function(f) {
            u[o] = f;
          }
        });
      }
    }
    Object.defineProperty && (r("position", "_legacyPos", "x", "y"), r("scale", "_legacyScale", "scaleX", "scaleY"), r("origin", "_legacyOrigin", "originX", "originY"));
  }(), e;
}();
fr(Ru, hr);
fr(Ru, lo);
function _l(e, t, r, n, i) {
  r = r || {};
  var a = [];
  Uy(e, "", e, t, r, n, a, i);
  var o = a.length, s = !1, u = r.done, l = r.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && r.during && a[0].during(function(d, p) {
    r.during(p);
  });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f), h && v.aborted(h), r.force && v.duration(r.duration), v.start(r.easing);
  }
  return a;
}
function Sl(e, t, r) {
  for (var n = 0; n < r; n++)
    e[n] = t[n];
}
function qw(e) {
  return le(e[0]);
}
function Kw(e, t, r) {
  if (le(t[r]))
    if (le(e[r]) || (e[r] = []), fe(t[r])) {
      var n = t[r].length;
      e[r].length !== n && (e[r] = new t[r].constructor(n), Sl(e[r], t[r], n));
    } else {
      var i = t[r], a = e[r], o = i.length;
      if (qw(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? Sl(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        Sl(a, i, o);
      a.length = i.length;
    }
  else
    e[r] = t[r];
}
function Qw(e, t) {
  return e === t || le(e) && le(t) && jw(e, t);
}
function jw(e, t) {
  var r = e.length;
  if (r !== t.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Uy(e, t, r, n, i, a, o, s) {
  for (var u = lt(n), l = i.duration, f = i.delay, h = i.additive, c = i.setToFinal, v = !K(a), d = e.animators, p = [], g = 0; g < u.length; g++) {
    var m = u[g], y = n[m];
    if (y != null && r[m] != null && (v || a[m]))
      if (K(y) && !le(y) && !Du(y)) {
        if (t) {
          s || (r[m] = y, e.updateDuringAnimation(t));
          continue;
        }
        Uy(e, m, r[m], y, i, a && a[m], o, s);
      } else
        p.push(m);
    else s || (r[m] = y, e.updateDuringAnimation(t), p.push(m));
  }
  var _ = p.length;
  if (!h && _)
    for (var S = 0; S < d.length; S++) {
      var b = d[S];
      if (b.targetName === t) {
        var w = b.stopTracks(p);
        if (w) {
          var T = ct(d, b);
          d.splice(T, 1);
        }
      }
    }
  if (i.force || (p = Vt(p, function(A) {
    return !Qw(n[A], r[A]);
  }), _ = p.length), _ > 0 || i.force && !o.length) {
    var x = void 0, D = void 0, C = void 0;
    if (s) {
      D = {}, c && (x = {});
      for (var S = 0; S < _; S++) {
        var m = p[S];
        D[m] = r[m], c ? x[m] = n[m] : r[m] = n[m];
      }
    } else if (c) {
      C = {};
      for (var S = 0; S < _; S++) {
        var m = p[S];
        C[m] = ms(r[m]), Kw(r, n, m);
      }
    }
    var b = new wv(r, !1, !1, h ? Vt(d, function(L) {
      return L.targetName === t;
    }) : null);
    b.targetName = t, i.scope && (b.scope = i.scope), c && x && b.whenWithKeys(0, x, p), C && b.whenWithKeys(0, C, p), b.whenWithKeys(l ?? 500, s ? D : n, p).delay(f || 0), e.addAnimator(b, t), o.push(b);
  }
}
function _d(e, t, r, n) {
  return !(r && r.hoverLayer || n) || Sd(e) || t && Sd(t) ? Ss : Eu;
}
function Sd(e) {
  return e.type === "text" || e.type === "tspan";
}
function bd(e, t, r) {
  return !t && !e.__inHover && r && r.duration > 0;
}
var rh = "__zr_style_" + Math.round(Math.random() * 10), zn = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Ou = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
zn[rh] = !0;
var wd = ["z", "z2", "invisible"], Jw = ["invisible"], ho = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype._init = function(r) {
    for (var n = lt(r), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(r[a]) : e.prototype.attrKV.call(this, a, r[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function(r) {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(r, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && tT(this, r, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths && this.__clipPaths.length) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(r, n) {
    return this.rectContain(r, n);
  }, t.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, t.prototype.rectContain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, t.prototype.getPaintRect = function() {
    var r = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      r = this._paintRect || (this._paintRect = new tt(0, 0, 0, 0)), n ? tt.applyTransform(r, i, n) : r.copy(i), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
      var l = this.dirtyRectTolerance;
      r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2));
    }
    return r;
  }, t.prototype.setPrevPaintRect = function(r) {
    r ? (this._prevPaintRect = this._prevPaintRect || new tt(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(r) {
    return this.animate("style", r);
  }, t.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(r, n) {
    r !== "style" ? e.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, t.prototype.setStyle = function(r, n) {
    return typeof r == "string" ? this.style[r] = n : N(this.style, r), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(r) {
    r || this.markRedraw(), this.__dirty |= pa, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & pa);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~pa;
  }, t.prototype.createStyle = function(r) {
    return Au(zn, r);
  }, t.prototype.useStyle = function(r) {
    r[rh] || (r = this.createStyle(r)), this.style = r, this.dirtyStyle();
  }, t.prototype._useHoverStyle = function(r) {
    this.__hoverStyle = r;
  }, t.prototype.isStyleObject = function(r) {
    return r[rh];
  }, t.prototype._innerSaveToNormal = function(r) {
    e.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, wd);
  }, t.prototype._applyStateObj = function(r, n, i, a, o, s) {
    e.prototype._applyStateObj.call(this, r, n, i, a, o, s);
    var u = !(n && a), l = this.__inHover === Eu, f;
    if (n && n.style ? o ? a ? f = n.style : (f = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(f, n.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(f, n.style)) : u && (f = i.style), f)
      if (o) {
        var h = this.style;
        if (this.style = this.createStyle(u ? {} : h), u)
          for (var c = lt(h), v = 0; v < c.length; v++) {
            var d = c[v];
            d in f && (f[d] = f[d], this.style[d] = h[d]);
          }
        for (var p = lt(f), v = 0; v < p.length; v++) {
          var d = p[v];
          this.style[d] = this.style[d];
        }
        this._transitionState(r, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        l ? this._useHoverStyle(f) : this.useStyle(f);
    if (!l)
      for (var g = this.__inHover ? Jw : wd, v = 0; v < g.length; v++) {
        var d = g[v];
        n && n[d] != null ? this[d] = n[d] : u && i[d] != null && (this[d] = i[d]);
      }
  }, t.prototype._mergeStates = function(r) {
    for (var n = e.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, t.prototype._mergeStyle = function(r, n) {
    return N(r, n), r;
  }, t.prototype.getAnimationStyleProps = function() {
    return Ou;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = 0, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = ue | pa;
  }(), t;
}(Ru), bl = new tt(0, 0, 0, 0), wl = new tt(0, 0, 0, 0);
function tT(e, t, r) {
  return bl.copy(e.getBoundingRect()), e.transform && bl.applyTransform(e.transform), wl.width = t, wl.height = r, !bl.intersect(wl);
}
var be = Math.min, we = Math.max, Tl = Math.sin, xl = Math.cos, fn = Math.PI * 2, Ro = Vi(), Oo = Vi(), ko = Vi();
function Td(e, t, r, n, i, a) {
  i[0] = be(e, r), i[1] = be(t, n), a[0] = we(e, r), a[1] = we(t, n);
}
var xd = [], Cd = [];
function eT(e, t, r, n, i, a, o, s, u, l) {
  var f = Ey, h = Ht, c = f(e, r, i, o, xd);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(e, r, i, o, xd[v]);
    u[0] = be(d, u[0]), l[0] = we(d, l[0]);
  }
  c = f(t, n, a, s, Cd);
  for (var v = 0; v < c; v++) {
    var p = h(t, n, a, s, Cd[v]);
    u[1] = be(p, u[1]), l[1] = we(p, l[1]);
  }
  u[0] = be(e, u[0]), l[0] = we(e, l[0]), u[0] = be(o, u[0]), l[0] = we(o, l[0]), u[1] = be(t, u[1]), l[1] = we(t, l[1]), u[1] = be(s, u[1]), l[1] = we(s, l[1]);
}
function rT(e, t, r, n, i, a, o, s) {
  var u = Ry, l = oe, f = we(be(u(e, r, i), 1), 0), h = we(be(u(t, n, a), 1), 0), c = l(e, r, i, f), v = l(t, n, a, h);
  o[0] = be(e, i, c), o[1] = be(t, a, v), s[0] = we(e, i, c), s[1] = we(t, a, v);
}
function nT(e, t, r, n, i, a, o, s, u) {
  var l = mi, f = yi, h = Math.abs(i - a);
  if (h % fn < 1e-4 && h > 1e-4) {
    s[0] = e - r, s[1] = t - n, u[0] = e + r, u[1] = t + n;
    return;
  }
  if (Ro[0] = xl(i) * r + e, Ro[1] = Tl(i) * n + t, Oo[0] = xl(a) * r + e, Oo[1] = Tl(a) * n + t, l(s, Ro, Oo), f(u, Ro, Oo), i = i % fn, i < 0 && (i = i + fn), a = a % fn, a < 0 && (a = a + fn), i > a && !o ? a += fn : i < a && o && (i += fn), o) {
    var c = a;
    a = i, i = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > i && (ko[0] = xl(v) * r + e, ko[1] = Tl(v) * n + t, l(s, ko, s), f(u, ko, u));
}
var vt = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, hn = [], vn = [], qe = [], Cr = [], Ke = [], Qe = [], Cl = Math.min, Dl = Math.max, cn = Math.cos, dn = Math.sin, cr = Math.abs, nh = Math.PI, Rr = nh * 2, Al = typeof Float32Array < "u", qi = [];
function Ml(e) {
  var t = Math.round(e / nh * 1e8) / 1e8;
  return t % 2 * nh;
}
function Wy(e, t) {
  var r = Ml(e[0]);
  r < 0 && (r += Rr);
  var n = r - e[0], i = e[1];
  i += n, !t && i - r >= Rr ? i = r + Rr : t && r - i >= Rr ? i = r - Rr : !t && r > i ? i = r + (Rr - Ml(r - i)) : t && r < i && (i = r - (Rr - Ml(i - r))), e[0] = r, e[1] = i;
}
var Zr = function() {
  function e(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return e.prototype.increaseVersion = function() {
    this._version++;
  }, e.prototype.getVersion = function() {
    return this._version;
  }, e.prototype.setScale = function(t, r, n) {
    n = n || 0, n > 0 && (this._ux = cr(n / Ws / t) || 0, this._uy = cr(n / Ws / r) || 0);
  }, e.prototype.setDPR = function(t) {
    this.dpr = t;
  }, e.prototype.setContext = function(t) {
    this._ctx = t;
  }, e.prototype.getContext = function() {
    return this._ctx;
  }, e.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, e.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, e.prototype.moveTo = function(t, r) {
    return this._drawPendingPt(), this.addData(vt.M, t, r), this._ctx && this._ctx.moveTo(t, r), this._x0 = t, this._y0 = r, this._xi = t, this._yi = r, this;
  }, e.prototype.lineTo = function(t, r) {
    var n = cr(t - this._xi), i = cr(r - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(vt.L, t, r), this._ctx && a && this._ctx.lineTo(t, r), a)
      this._xi = t, this._yi = r, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = r, this._pendingPtDist = o);
    }
    return this;
  }, e.prototype.bezierCurveTo = function(t, r, n, i, a, o) {
    return this._drawPendingPt(), this.addData(vt.C, t, r, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, r, n, i, a, o), this._xi = a, this._yi = o, this;
  }, e.prototype.quadraticCurveTo = function(t, r, n, i) {
    return this._drawPendingPt(), this.addData(vt.Q, t, r, n, i), this._ctx && this._ctx.quadraticCurveTo(t, r, n, i), this._xi = n, this._yi = i, this;
  }, e.prototype.arc = function(t, r, n, i, a, o) {
    this._drawPendingPt(), qi[0] = i, qi[1] = a, Wy(qi, o), i = qi[0], a = qi[1];
    var s = a - i;
    return this.addData(vt.A, t, r, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, r, n, i, a, o), this._xi = cn(a) * n + t, this._yi = dn(a) * n + r, this;
  }, e.prototype.arcTo = function(t, r, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, r, n, i, a), this;
  }, e.prototype.rect = function(t, r, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, r, n, i), this.addData(vt.R, t, r, n, i), this;
  }, e.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(vt.Z);
    var t = this._ctx, r = this._x0, n = this._y0;
    return t && t.closePath(), this._xi = r, this._yi = n, this;
  }, e.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, e.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, e.prototype.len = function() {
    return this._len;
  }, e.prototype.setData = function(t) {
    if (this._saveData) {
      var r = t.length;
      !(this.data && this.data.length === r) && Al && (this.data = new Float32Array(r));
      for (var n = 0; n < r; n++)
        this.data[n] = t[n];
      this._len = r;
    }
  }, e.prototype.appendPath = function(t) {
    if (this._saveData) {
      t instanceof Array || (t = [t]);
      for (var r = t.length, n = 0, i = this._len, a = 0; a < r; a++)
        n += t[a].len();
      var o = this.data;
      if (Al && (o instanceof Float32Array || !o) && (this.data = new Float32Array(i + n), i > 0 && o))
        for (var s = 0; s < i; s++)
          this.data[s] = o[s];
      for (var a = 0; a < r; a++)
        for (var u = t[a].data, s = 0; s < u.length; s++)
          this.data[i++] = u[s];
      this._len = i;
    }
  }, e.prototype.addData = function(t, r, n, i, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, e.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, e.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], r = 0; r < this._len; r++)
        t[r] = this.data[r];
      this.data = t;
    }
  }, e.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, Al && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, e.prototype.getBoundingRect = function() {
    qe[0] = qe[1] = Ke[0] = Ke[1] = Number.MAX_VALUE, Cr[0] = Cr[1] = Qe[0] = Qe[1] = -Number.MAX_VALUE;
    var t = this.data, r = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (r = t[o], n = t[o + 1], i = r, a = n), s) {
        case vt.M:
          r = i = t[o++], n = a = t[o++], Ke[0] = i, Ke[1] = a, Qe[0] = i, Qe[1] = a;
          break;
        case vt.L:
          Td(r, n, t[o], t[o + 1], Ke, Qe), r = t[o++], n = t[o++];
          break;
        case vt.C:
          eT(r, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Ke, Qe), r = t[o++], n = t[o++];
          break;
        case vt.Q:
          rT(r, n, t[o++], t[o++], t[o], t[o + 1], Ke, Qe), r = t[o++], n = t[o++];
          break;
        case vt.A:
          var l = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var p = !t[o++];
          u && (i = cn(v) * h + l, a = dn(v) * c + f), nT(l, f, h, c, v, d, p, Ke, Qe), r = cn(d) * h + l, n = dn(d) * c + f;
          break;
        case vt.R:
          i = r = t[o++], a = n = t[o++];
          var g = t[o++], m = t[o++];
          Td(i, a, i + g, a + m, Ke, Qe);
          break;
        case vt.Z:
          r = i, n = a;
          break;
      }
      mi(qe, qe, Ke), yi(Cr, Cr, Qe);
    }
    return o === 0 && (qe[0] = qe[1] = Cr[0] = Cr[1] = 0), new tt(qe[0], qe[1], Cr[0] - qe[0], Cr[1] - qe[1]);
  }, e.prototype._calculateLength = function() {
    var t = this.data, r = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < r; ) {
      var v = t[c++], d = c === 1;
      d && (a = t[c], o = t[c + 1], s = a, u = o);
      var p = -1;
      switch (v) {
        case vt.M:
          a = s = t[c++], o = u = t[c++];
          break;
        case vt.L: {
          var g = t[c++], m = t[c++], y = g - a, _ = m - o;
          (cr(y) > n || cr(_) > i || c === r - 1) && (p = Math.sqrt(y * y + _ * _), a = g, o = m);
          break;
        }
        case vt.C: {
          var S = t[c++], b = t[c++], g = t[c++], m = t[c++], w = t[c++], T = t[c++];
          p = Dw(a, o, S, b, g, m, w, T, 10), a = w, o = T;
          break;
        }
        case vt.Q: {
          var S = t[c++], b = t[c++], g = t[c++], m = t[c++];
          p = Iw(a, o, S, b, g, m, 10), a = g, o = m;
          break;
        }
        case vt.A:
          var x = t[c++], D = t[c++], C = t[c++], A = t[c++], L = t[c++], M = t[c++], P = M + L;
          c += 1, d && (s = cn(L) * C + x, u = dn(L) * A + D), p = Dl(C, A) * Cl(Rr, Math.abs(M)), a = cn(P) * C + x, o = dn(P) * A + D;
          break;
        case vt.R: {
          s = a = t[c++], u = o = t[c++];
          var E = t[c++], R = t[c++];
          p = E * 2 + R * 2;
          break;
        }
        case vt.Z: {
          var y = s - a, _ = u - o;
          p = Math.sqrt(y * y + _ * _), a = s, o = u;
          break;
        }
      }
      p >= 0 && (l[h++] = p, f += p);
    }
    return this._pathLen = f, f;
  }, e.prototype.rebuildPath = function(t, r) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = r < 1, d, p, g = 0, m = 0, y, _ = 0, S, b;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, p = this._pathLen, y = r * p, !y)))
      t: for (var w = 0; w < o; ) {
        var T = n[w++], x = w === 1;
        switch (x && (l = n[w], f = n[w + 1], s = l, u = f), T !== vt.L && _ > 0 && (t.lineTo(S, b), _ = 0), T) {
          case vt.M:
            s = l = n[w++], u = f = n[w++], t.moveTo(l, f);
            break;
          case vt.L: {
            h = n[w++], c = n[w++];
            var D = cr(h - l), C = cr(c - f);
            if (D > i || C > a) {
              if (v) {
                var A = d[m++];
                if (g + A > y) {
                  var L = (y - g) / A;
                  t.lineTo(l * (1 - L) + h * L, f * (1 - L) + c * L);
                  break t;
                }
                g += A;
              }
              t.lineTo(h, c), l = h, f = c, _ = 0;
            } else {
              var M = D * D + C * C;
              M > _ && (S = h, b = c, _ = M);
            }
            break;
          }
          case vt.C: {
            var P = n[w++], E = n[w++], R = n[w++], k = n[w++], O = n[w++], B = n[w++];
            if (v) {
              var A = d[m++];
              if (g + A > y) {
                var L = (y - g) / A;
                Gs(l, P, R, O, L, hn), Gs(f, E, k, B, L, vn), t.bezierCurveTo(hn[1], vn[1], hn[2], vn[2], hn[3], vn[3]);
                break t;
              }
              g += A;
            }
            t.bezierCurveTo(P, E, R, k, O, B), l = O, f = B;
            break;
          }
          case vt.Q: {
            var P = n[w++], E = n[w++], R = n[w++], k = n[w++];
            if (v) {
              var A = d[m++];
              if (g + A > y) {
                var L = (y - g) / A;
                Vs(l, P, R, L, hn), Vs(f, E, k, L, vn), t.quadraticCurveTo(hn[1], vn[1], hn[2], vn[2]);
                break t;
              }
              g += A;
            }
            t.quadraticCurveTo(P, E, R, k), l = R, f = k;
            break;
          }
          case vt.A:
            var F = n[w++], G = n[w++], U = n[w++], X = n[w++], H = n[w++], J = n[w++], it = n[w++], Dt = !n[w++], xt = U > X ? U : X, st = cr(U - X) > 1e-3, bt = H + J, Q = !1;
            if (v) {
              var A = d[m++];
              g + A > y && (bt = H + J * (y - g) / A, Q = !0), g += A;
            }
            if (st && t.ellipse ? t.ellipse(F, G, U, X, it, H, bt, Dt) : t.arc(F, G, xt, H, bt, Dt), Q)
              break t;
            x && (s = cn(H) * U + F, u = dn(H) * X + G), l = cn(bt) * U + F, f = dn(bt) * X + G;
            break;
          case vt.R:
            s = l = n[w], u = f = n[w + 1], h = n[w++], c = n[w++];
            var at = n[w++], ne = n[w++];
            if (v) {
              var A = d[m++];
              if (g + A > y) {
                var At = y - g;
                t.moveTo(h, c), t.lineTo(h + Cl(At, at), c), At -= at, At > 0 && t.lineTo(h + at, c + Cl(At, ne)), At -= ne, At > 0 && t.lineTo(h + Dl(at - At, 0), c + ne), At -= at, At > 0 && t.lineTo(h, c + Dl(ne - At, 0));
                break t;
              }
              g += A;
            }
            t.rect(h, c, at, ne);
            break;
          case vt.Z:
            if (v) {
              var A = d[m++];
              if (g + A > y) {
                var L = (y - g) / A;
                t.lineTo(l * (1 - L) + s * L, f * (1 - L) + u * L);
                break t;
              }
              g += A;
            }
            t.closePath(), l = s, f = u;
        }
      }
  }, e.prototype.clone = function() {
    var t = new e(), r = this.data;
    return t.data = r.slice ? r.slice() : Array.prototype.slice.call(r), t._len = this._len, t;
  }, e.prototype.canSave = function() {
    return !!this._saveData;
  }, e.CMD = vt, e.initDefaultProps = function() {
    var t = e.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), e;
}();
function ei(e, t, r, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, u = 0, l = e;
  if (o > t + s && o > n + s || o < t - s && o < n - s || a > e + s && a > r + s || a < e - s && a < r - s)
    return !1;
  if (e !== r)
    u = (t - n) / (e - r), l = (e * n - r * t) / (e - r);
  else
    return Math.abs(a - e) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function iT(e, t, r, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || l > e + h && l > r + h && l > i + h && l > o + h || l < e - h && l < r - h && l < i - h && l < o - h)
    return !1;
  var c = Cw(e, t, r, n, i, a, o, s, l, f);
  return c <= h / 2;
}
function aT(e, t, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > n + l && u > a + l || u < t - l && u < n - l && u < a - l || s > e + l && s > r + l && s > i + l || s < e - l && s < r - l && s < i - l)
    return !1;
  var f = Mw(e, t, r, n, i, a, s, u);
  return f <= l / 2;
}
var Dd = Math.PI * 2;
function No(e) {
  return e %= Dd, e < 0 && (e += Dd), e;
}
var Ki = Math.PI * 2;
function oT(e, t, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= e, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > r || f + l < r)
    return !1;
  if (Math.abs(n - i) % Ki < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = No(i), i = No(h);
  } else
    n = No(n), i = No(i);
  n > i && (i += Ki);
  var c = Math.atan2(u, s);
  return c < 0 && (c += Ki), c >= n && c <= i || c + Ki >= n && c + Ki <= i;
}
function pn(e, t, r, n, i, a) {
  if (a > t && a > n || a < t && a < n || n === t)
    return 0;
  var o = (a - t) / (n - t), s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var u = o * (r - e) + e;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var Dr = Zr.CMD, gn = Math.PI * 2, sT = 1e-4;
function uT(e, t) {
  return Math.abs(e - t) < sT;
}
var Kt = [-1, -1, -1], _e = [-1, -1];
function lT() {
  var e = _e[0];
  _e[0] = _e[1], _e[1] = e;
}
function fT(e, t, r, n, i, a, o, s, u, l) {
  if (l > t && l > n && l > a && l > s || l < t && l < n && l < a && l < s)
    return 0;
  var f = zs(t, n, a, s, l, Kt);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, p = 0; p < f; p++) {
    var g = Kt[p], m = g === 0 || g === 1 ? 0.5 : 1, y = Ht(e, r, i, o, g);
    y < u || (c < 0 && (c = Ey(t, n, a, s, _e), _e[1] < _e[0] && c > 1 && lT(), v = Ht(t, n, a, s, _e[0]), c > 1 && (d = Ht(t, n, a, s, _e[1]))), c === 2 ? g < _e[0] ? h += v < t ? m : -m : g < _e[1] ? h += d < v ? m : -m : h += s < d ? m : -m : g < _e[0] ? h += v < t ? m : -m : h += s < v ? m : -m);
  }
  return h;
}
function hT(e, t, r, n, i, a, o, s) {
  if (s > t && s > n && s > a || s < t && s < n && s < a)
    return 0;
  var u = Aw(t, n, a, s, Kt);
  if (u === 0)
    return 0;
  var l = Ry(t, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = oe(t, n, a, l), c = 0; c < u; c++) {
      var v = Kt[c] === 0 || Kt[c] === 1 ? 0.5 : 1, d = oe(e, r, i, Kt[c]);
      d < o || (Kt[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = Kt[0] === 0 || Kt[0] === 1 ? 0.5 : 1, d = oe(e, r, i, Kt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function vT(e, t, r, n, i, a, o, s) {
  if (s -= t, s > r || s < -r)
    return 0;
  var u = Math.sqrt(r * r - s * s);
  Kt[0] = -u, Kt[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= gn - 1e-4) {
    n = 0, i = gn;
    var f = a ? 1 : -1;
    return o >= Kt[0] + e && o <= Kt[1] + e ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += gn, i += gn);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = Kt[v];
    if (d + e > o) {
      var p = Math.atan2(s, d), f = a ? 1 : -1;
      p < 0 && (p = gn + p), (p >= n && p <= i || p + gn >= n && p + gn <= i) && (p > Math.PI / 2 && p < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function Yy(e, t, r, n, i) {
  for (var a = e.data, o = e.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var p = a[d++], g = d === 1;
    switch (p === Dr.M && d > 1 && (r || (s += pn(u, l, f, h, n, i))), g && (u = a[d], l = a[d + 1], f = u, h = l), p) {
      case Dr.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case Dr.L:
        if (r) {
          if (ei(u, l, a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += pn(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case Dr.C:
        if (r) {
          if (iT(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += fT(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case Dr.Q:
        if (r) {
          if (aT(u, l, a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += hT(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case Dr.A:
        var m = a[d++], y = a[d++], _ = a[d++], S = a[d++], b = a[d++], w = a[d++];
        d += 1;
        var T = !!(1 - a[d++]);
        c = Math.cos(b) * _ + m, v = Math.sin(b) * S + y, g ? (f = c, h = v) : s += pn(u, l, c, v, n, i);
        var x = (n - m) * S / _ + m;
        if (r) {
          if (oT(m, y, S, b, b + w, T, t, x, i))
            return !0;
        } else
          s += vT(m, y, S, b, b + w, T, x, i);
        u = Math.cos(b + w) * _ + m, l = Math.sin(b + w) * S + y;
        break;
      case Dr.R:
        f = u = a[d++], h = l = a[d++];
        var D = a[d++], C = a[d++];
        if (c = f + D, v = h + C, r) {
          if (ei(f, h, c, h, t, n, i) || ei(c, h, c, v, t, n, i) || ei(c, v, f, v, t, n, i) || ei(f, v, f, h, t, n, i))
            return !0;
        } else
          s += pn(c, h, c, v, n, i), s += pn(f, v, f, h, n, i);
        break;
      case Dr.Z:
        if (r) {
          if (ei(u, l, f, h, t, n, i))
            return !0;
        } else
          s += pn(u, l, f, h, n, i);
        u = f, l = h;
        break;
    }
  }
  return !r && !uT(l, h) && (s += pn(u, l, f, h, n, i) || 0), s !== 0;
}
function cT(e, t, r) {
  return Yy(e, 0, !1, t, r);
}
function dT(e, t, r, n) {
  return Yy(e, t, !0, r, n);
}
var Ys = yt({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, zn), pT = {
  style: yt({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Ou.style)
}, Il = Lu.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), dt = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.update = function() {
    var r = this;
    e.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new t();
      i.buildPath === t.prototype.buildPath && (i.buildPath = function(u) {
        r.buildPath(u, r.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Il.length; ++s)
        i[Il[s]] = this[Il[s]];
      i.__dirty |= ue;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(r) {
    var n = lt(r);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = r[o];
      o === "style" ? this.style ? N(this.style, s) : this.useStyle(s) : o === "shape" ? N(this.shape, s) : e.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var r = this.style.fill;
    if (r !== "none") {
      if (Y(r)) {
        var n = Hs(r, 0);
        return n > 0.5 ? th : n > 0.2 ? Xw : eh;
      } else if (r)
        return eh;
    }
    return th;
  }, t.prototype.getInsideTextStroke = function(r) {
    var n = this.style.fill;
    if (Y(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = Hs(r, 0) < Jf;
      if (a === o)
        return n;
    }
  }, t.prototype.buildPath = function(r, n, i) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~di;
  }, t.prototype.getUpdatedPathProxy = function(r) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Zr(!1);
  }, t.prototype.hasStroke = function() {
    var r = this.style, n = r.stroke;
    return !(n == null || n === "none" || !(r.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, t.prototype.getBoundingRect = function() {
    var r = this._rect, n = this.style, i = !r;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & di) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect();
    }
    if (this._rect = r, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = r.clone());
      if (this.__dirty || i) {
        s.copy(r);
        var u = n.strokeNoScale ? this.getLineScale() : 1, l = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return r;
  }, t.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect(), o = this.style;
    if (r = i[0], n = i[1], a.contain(r, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), dT(s, u / l, r, n)))
          return !0;
      }
      if (this.hasFill())
        return cT(s, r, n);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= di, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(r) {
    return this.animate("shape", r);
  }, t.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(r, n) {
    r === "shape" ? this.setShape(n) : e.prototype.attrKV.call(this, r, n);
  }, t.prototype.setShape = function(r, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof r == "string" ? i[r] = n : N(i, r), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & di);
  }, t.prototype.createStyle = function(r) {
    return Au(Ys, r);
  }, t.prototype._innerSaveToNormal = function(r) {
    e.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.shape && !n.shape && (n.shape = N({}, this.shape));
  }, t.prototype._applyStateObj = function(r, n, i, a, o, s) {
    if (e.prototype._applyStateObj.call(this, r, n, i, a, o, s), this.__inHover !== Eu) {
      var u = !(n && a), l;
      if (n && n.shape ? o ? a ? l = n.shape : (l = N({}, i.shape), N(l, n.shape)) : (l = N({}, a ? this.shape : i.shape), N(l, n.shape)) : u && (l = i.shape), l)
        if (o) {
          this.shape = N({}, this.shape);
          for (var f = {}, h = lt(l), c = 0; c < h.length; c++) {
            var v = h[c];
            typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v];
          }
          this._transitionState(r, {
            shape: f
          }, s);
        } else
          this.shape = l, this.dirtyShape();
    }
  }, t.prototype._mergeStates = function(r) {
    for (var n = e.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, t.prototype.getAnimationStyleProps = function() {
    return pT;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(r) {
    var n = function(a) {
      V(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return r.init && r.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return ot(r.style);
      }, o.prototype.getDefaultShape = function() {
        return ot(r.shape);
      }, o;
    }(t);
    for (var i in r)
      typeof r[i] == "function" && (n.prototype[i] = r[i]);
    return n;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = ue | pa | di;
  }(), t;
}(ho), gT = yt({
  strokeFirst: !0,
  font: br,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Ys), Ua = function(e) {
  V(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    return Iy(this.style);
  }, t.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, t.prototype.createStyle = function(r) {
    return Au(gT, r);
  }, t.prototype.setBoundingRect = function(r) {
    this._rect = r;
  }, t.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = Tw(this.style)), this._rect;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.dirtyRectTolerance = 10;
  }(), t;
}(ho);
Ua.prototype.type = "tspan";
var mT = yt({
  x: 0,
  y: 0
}, zn), yT = {
  style: yt({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Ou.style)
};
function _T(e) {
  return !!(e && typeof e != "string" && e.width && e.height);
}
var vr = function(e) {
  V(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(r) {
    return Au(mT, r);
  }, t.prototype._getSize = function(r) {
    var n = this.style, i = n[r];
    if (i != null)
      return i;
    var a = _T(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = r === "width" ? "height" : "width", s = n[o];
    return s == null ? a[r] : a[r] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return yT;
  }, t.prototype.getBoundingRect = function() {
    var r = this.style;
    return this._rect || (this._rect = new tt(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(ho);
vr.prototype.type = "image";
function ST(e, t) {
  var r = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, u, l, f;
  i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), e.moveTo(r + s, n), e.lineTo(r + i - u, n), u !== 0 && e.arc(r + i - u, n + u, u, -Math.PI / 2, 0), e.lineTo(r + i, n + a - l), l !== 0 && e.arc(r + i - l, n + a - l, l, 0, Math.PI / 2), e.lineTo(r + f, n + a), f !== 0 && e.arc(r + f, n + a - f, f, Math.PI / 2, Math.PI), e.lineTo(r, n + s), s !== 0 && e.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5), e.closePath();
}
var Si = Math.round;
function Xy(e, t, r) {
  if (t) {
    var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
    e.x1 = n, e.x2 = i, e.y1 = a, e.y2 = o;
    var s = r && r.lineWidth;
    return s && (Si(n * 2) === Si(i * 2) && (e.x1 = e.x2 = Rn(n, s, !0)), Si(a * 2) === Si(o * 2) && (e.y1 = e.y2 = Rn(a, s, !0))), e;
  }
}
function $y(e, t, r) {
  if (t) {
    var n = t.x, i = t.y, a = t.width, o = t.height;
    e.x = n, e.y = i, e.width = a, e.height = o;
    var s = r && r.lineWidth;
    return s && (e.x = Rn(n, s, !0), e.y = Rn(i, s, !0), e.width = Math.max(Rn(n + a, s, !1) - e.x, a === 0 ? 0 : 1), e.height = Math.max(Rn(i + o, s, !1) - e.y, o === 0 ? 0 : 1)), e;
  }
}
function Rn(e, t, r) {
  if (!t)
    return e;
  var n = Si(e * 2);
  return (n + Si(t)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2;
}
var bT = /* @__PURE__ */ function() {
  function e() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return e;
}(), wT = {}, Lt = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new bT();
  }, t.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = $y(wT, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? ST(r, n) : r.rect(i, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(dt);
Lt.prototype.type = "rect";
var Ad = {
  fill: "#000"
}, Md = 2, je = {}, TT = {
  style: yt({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, Ou.style)
}, Wt = function(e) {
  V(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = Ad, n.attr(r), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    e.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var r = 0; r < this._children.length; r++) {
      var n = this._children[r];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var r = this.innerTransformable;
    r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : e.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(r) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(r) : e.prototype.getLocalTransform.call(this, r);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), e.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, DT(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(r) {
    e.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = r;
  }, t.prototype.removeSelfFromZr = function(r) {
    e.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var r = new tt(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || r;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(r) {
    this._defaultStyle = r || Ad;
  }, t.prototype.setTextContent = function(r) {
  }, t.prototype._mergeStyle = function(r, n) {
    if (!n)
      return r;
    var i = n.rich, a = r.rich || i && {};
    return N(r, n), i && a ? (this._mergeRich(a, i), r.rich = a) : a && (r.rich = a), r;
  }, t.prototype._mergeRich = function(r, n) {
    for (var i = lt(n), a = 0; a < i.length; a++) {
      var o = i[a];
      r[o] = r[o] || {}, N(r[o], n[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return TT;
  }, t.prototype._getOrCreateChild = function(r) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof r)) && (n = new r()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, t.prototype._updatePlainTexts = function() {
    var r = this.style, n = r.font || br, i = r.padding, a = this._defaultStyle, o = r.x || 0, s = r.y || 0, u = r.align || a.align || "left", l = r.verticalAlign || a.verticalAlign || "top";
    id(je, a.overflowRect, o, s, u, l), o = je.baseX, s = je.baseY;
    var f = kd(r), h = gw(f, r, je.outerWidth, je.outerHeight), c = Ll(r), v = !!r.backgroundColor, d = h.outerHeight, p = h.outerWidth, g = h.lines, m = h.lineHeight;
    this.isTruncated = !!h.isTruncated;
    var y = o, _ = Bn(s, h.contentHeight, l);
    if (c || i) {
      var S = Ei(o, p, u), b = Bn(s, d, l);
      c && this._renderBackground(r, r, S, b, p, d);
    }
    _ += m / 2, i && (y = Od(o, u, i), l === "top" ? _ += i[0] : l === "bottom" && (_ -= i[2]));
    for (var w = 0, T = !1, x = !1, D = Rd("fill" in r ? r.fill : (x = !0, a.fill)), C = Ed("stroke" in r ? r.stroke : !v && (!a.autoStroke || x) ? (w = Md, T = !0, a.stroke) : null), A = r.textShadowBlur > 0, L = 0; L < g.length; L++) {
      var M = this._getOrCreateChild(Ua), P = M.createStyle();
      M.useStyle(P), P.text = g[L], P.x = y, P.y = _, P.textAlign = u, P.textBaseline = "middle", P.opacity = r.opacity, P.strokeFirst = !0, A && (P.shadowBlur = r.textShadowBlur || 0, P.shadowColor = r.textShadowColor || "transparent", P.shadowOffsetX = r.textShadowOffsetX || 0, P.shadowOffsetY = r.textShadowOffsetY || 0), P.stroke = C, P.fill = D, C && (P.lineWidth = r.lineWidth || w, P.lineDash = r.lineDash, P.lineDashOffset = r.lineDashOffset || 0), P.font = n, Ld(P, r), _ += m, M.setBoundingRect(Uf(P, h.contentWidth, h.calculatedLineHeight, T ? 0 : null));
    }
  }, t.prototype._updateRichTexts = function() {
    var r = this.style, n = this._defaultStyle, i = r.align || n.align, a = r.verticalAlign || n.verticalAlign, o = r.x || 0, s = r.y || 0;
    id(je, n.overflowRect, o, s, i, a), o = je.baseX, s = je.baseY;
    var u = kd(r), l = _w(u, r, je.outerWidth, je.outerHeight, i), f = l.width, h = l.outerWidth, c = l.outerHeight, v = r.padding;
    this.isTruncated = !!l.isTruncated;
    var d = Ei(o, h, i), p = Bn(s, c, a), g = d, m = p;
    v && (g += v[3], m += v[0]);
    var y = g + f;
    Ll(r) && this._renderBackground(r, r, d, p, h, c);
    for (var _ = !!r.backgroundColor, S = 0; S < l.lines.length; S++) {
      for (var b = l.lines[S], w = b.tokens, T = w.length, x = b.lineHeight, D = b.width, C = 0, A = g, L = y, M = T - 1, P = void 0; C < T && (P = w[C], !P.align || P.align === "left"); )
        this._placeToken(P, r, x, m, A, "left", _), D -= P.width, A += P.width, C++;
      for (; M >= 0 && (P = w[M], P.align === "right"); )
        this._placeToken(P, r, x, m, L, "right", _), D -= P.width, L -= P.width, M--;
      for (A += (f - (A - g) - (y - L) - D) / 2; C <= M; )
        P = w[C], this._placeToken(P, r, x, m, A + P.width / 2, "center", _), A += P.width, C++;
      m += x;
    }
  }, t.prototype._placeToken = function(r, n, i, a, o, s, u) {
    var l = n.rich[r.styleName] || {};
    l.text = r.text;
    var f = r.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + r.height / 2 : f === "bottom" && (h = a + i - r.height / 2);
    var c = !r.isLineHolder && Ll(l);
    c && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
    var v = !!l.backgroundColor, d = r.textPadding;
    d && (o = Od(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
    var p = this._getOrCreateChild(Ua), g = p.createStyle();
    p.useStyle(g);
    var m = this._defaultStyle, y = !1, _ = 0, S = !1, b = Rd("fill" in l ? l.fill : "fill" in n ? n.fill : (y = !0, m.fill)), w = Ed("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !v && !u && (!m.autoStroke || y) ? (_ = Md, S = !0, m.stroke) : null), T = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    g.text = r.text, g.x = o, g.y = h, T && (g.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, g.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", g.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, g.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), g.textAlign = s, g.textBaseline = "middle", g.font = r.font || br, g.opacity = Nn(l.opacity, n.opacity, 1), Ld(g, l), w && (g.lineWidth = Nn(l.lineWidth, n.lineWidth, _), g.lineDash = $(l.lineDash, n.lineDash), g.lineDashOffset = n.lineDashOffset || 0, g.stroke = w), b && (g.fill = b), p.setBoundingRect(Uf(g, r.contentWidth, r.contentHeight, S ? 0 : null));
  }, t.prototype._renderBackground = function(r, n, i, a, o, s) {
    var u = r.backgroundColor, l = r.borderWidth, f = r.borderColor, h = u && u.image, c = u && !h, v = r.borderRadius, d = this, p, g;
    if (c || r.lineHeight || l && f) {
      p = this._getOrCreateChild(Lt), p.useStyle(p.createStyle()), p.style.fill = null;
      var m = p.shape;
      m.x = i, m.y = a, m.width = o, m.height = s, m.r = v, p.dirtyShape();
    }
    if (c) {
      var y = p.style;
      y.fill = u || null, y.fillOpacity = $(r.fillOpacity, 1);
    } else if (h) {
      g = this._getOrCreateChild(vr), g.onload = function() {
        d.dirtyStyle();
      };
      var _ = g.style;
      _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var y = p.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = $(r.strokeOpacity, 1), y.lineDash = r.borderDash, y.lineDashOffset = r.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var S = (p || g).style;
    S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = Nn(r.opacity, n.opacity, 1);
  }, t.makeFont = function(r) {
    var n = "";
    return qy(r) && (n = [
      r.fontStyle,
      r.fontWeight,
      Zy(r.fontSize),
      r.fontFamily || "sans-serif"
    ].join(" ")), n && nr(n) || r.textFont || r.font;
  }, t;
}(ho), xT = { left: !0, right: 1, center: 1 }, CT = { top: 1, bottom: 1, middle: 1 }, Id = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function Zy(e) {
  return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? lv + "px" : e + "px";
}
function Ld(e, t) {
  for (var r = 0; r < Id.length; r++) {
    var n = Id[r], i = t[n];
    i != null && (e[n] = i);
  }
}
function qy(e) {
  return e.fontSize != null || e.fontFamily || e.fontWeight;
}
function DT(e) {
  return Pd(e), I(e.rich, Pd), e;
}
function Pd(e) {
  if (e) {
    e.font = Wt.makeFont(e);
    var t = e.align;
    t === "middle" && (t = "center"), e.align = t == null || xT[t] ? t : "left";
    var r = e.verticalAlign;
    r === "center" && (r = "middle"), e.verticalAlign = r == null || CT[r] ? r : "top";
    var n = e.padding;
    n && (e.padding = dv(e.padding));
  }
}
function Ed(e, t) {
  return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function Rd(e) {
  return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function Od(e, t, r) {
  return t === "right" ? e - r[1] : t === "center" ? e + r[3] / 2 - r[1] / 2 : e + r[3];
}
function kd(e) {
  var t = e.text;
  return t != null && (t += ""), t;
}
function Ll(e) {
  return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor);
}
var Nd = 1e-4, Ky = 20;
function AT(e) {
  return e.replace(/^\s+|\s+$/g, "");
}
var Zt = Math.min, ht = Math.max, Ot = Math.abs, wr = Math.round, Un = Math.floor, vo = Math.ceil, $n = Math.pow, Wa = Math.log, ih = Math.LN10, MT = Math.PI, IT = Math.random;
function ah(e, t, r, n) {
  var i = t[0], a = t[1], o = r[0], s = r[1], u = a - i, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (e <= i)
        return o;
      if (e >= a)
        return s;
    } else {
      if (e >= i)
        return o;
      if (e <= a)
        return s;
    }
  else {
    if (e === i)
      return o;
    if (e === a)
      return s;
  }
  return (e - i) / u * l + o;
}
var Tt = LT;
function LT(e, t, r) {
  switch (e) {
    case "center":
    case "middle":
      e = "50%";
      break;
    case "left":
    case "top":
      e = "0%";
      break;
    case "right":
    case "bottom":
      e = "100%";
      break;
  }
  return oh(e, t, r);
}
function oh(e, t, r) {
  return Y(e) ? PT(e) ? parseFloat(e) / 100 * t + (r || 0) : parseFloat(e) : e == null ? NaN : +e;
}
function PT(e) {
  return !!AT(e).match(/%$/);
}
function ft(e, t, r) {
  return isNaN(t) ? r ? "" + e : +e : (t = Zt(ht(0, t), Ky), e = (+e).toFixed(t), r ? e : +e);
}
function Tv(e) {
  return e.sort(function(t, r) {
    return t - r;
  }), e;
}
function Fr(e) {
  if (e = +e, isNaN(e))
    return 0;
  if (e > 1e-14) {
    for (var t = 1, r = 0; r < 15; r++, t *= 10)
      if (wr(e * t) / t === e)
        return r;
  }
  return ET(e);
}
function ET(e) {
  var t = e.toString().toLowerCase(), r = t.indexOf("e"), n = r > 0 ? +t.slice(r + 1) : 0, i = r > 0 ? r : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return ht(0, o - n);
}
function RT(e, t, r) {
  var n = Ot(e[1] - e[0]);
  if (!isFinite(n) || n === 0)
    return NaN;
  var i = Wa(2 * Ot(r || 1) * Ot(n)) / ih, a = Wa(Ot(t)) / ih, o = ht(0, vo(-i + a));
  return isFinite(o) || (o = NaN), o;
}
function OT(e, t) {
  var r = $r(e, function(v, d) {
    return v + (isNaN(d) ? 0 : d);
  }, 0);
  if (r === 0)
    return [];
  for (var n = $n(10, t), i = Z(e, function(v) {
    return (isNaN(v) ? 0 : v) / r * n * 100;
  }), a = n * 100, o = Z(i, function(v) {
    return Un(v);
  }), s = $r(o, function(v, d) {
    return v + d;
  }, 0), u = Z(i, function(v, d) {
    return v - o[d];
  }); s < a; ) {
    for (var l = Number.NEGATIVE_INFINITY, f = null, h = 0, c = u.length; h < c; ++h)
      u[h] > l && (l = u[h], f = h);
    ++o[f], u[f] = 0, ++s;
  }
  return Z(o, function(v) {
    return v / n;
  });
}
function kT(e, t) {
  var r = ht(Fr(e), Fr(t)), n = e + t;
  return r > Ky ? n : ft(n, r);
}
var Bd = $n(2, 53) - 1;
function Qy(e) {
  var t = MT * 2;
  return (e % t + t) % t;
}
function Xs(e) {
  return e > -Nd && e < Nd;
}
var NT = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Hi(e) {
  if (e instanceof Date)
    return e;
  if (Y(e)) {
    var t = NT.exec(e);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var r = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (r -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, r, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (e == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(wr(e));
}
function jy(e) {
  return $n(10, xv(e));
}
function xv(e) {
  if (e === 0)
    return 0;
  var t = Un(Wa(e) / ih);
  return e / $n(10, t) >= 10 && t++, t;
}
var Jy = 2;
function Cv(e, t) {
  var r = xv(e), n = $n(10, r), i = e / n, a;
  return t === Jy ? a = 1 : t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, e = a * n, ft(e, -r);
}
function $s(e) {
  var t = parseFloat(e);
  return t == e && (t !== 0 || !Y(e) || e.indexOf("x") <= 0) ? t : NaN;
}
function BT(e) {
  return !isNaN($s(e));
}
function Dv() {
  return wr(IT() * 9);
}
function t0(e, t) {
  return t === 0 ? e : t0(t, e % t);
}
function Fd(e, t) {
  return e == null ? t : t == null ? e : e * t / t0(e, t);
}
function Pe(e) {
  return e != null && isFinite(e);
}
var FT = "[ECharts] ", zT = typeof console < "u" && console.warn && console.log;
function GT(e, t, r) {
  zT && console[e](FT + t);
}
function e0(e, t) {
  GT("error", e);
}
function se(e) {
  throw new Error(e);
}
function zd(e, t, r) {
  return (t - e) * r + e;
}
var r0 = "series\0", VT = "\0_ec_\0";
function ee(e) {
  return e instanceof Array ? e : e == null ? [] : [e];
}
function sh(e, t, r) {
  if (e) {
    e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
    for (var n = 0, i = r.length; n < i; n++) {
      var a = r[n];
      !e.emphasis[t].hasOwnProperty(a) && e[t].hasOwnProperty(a) && (e.emphasis[t][a] = e[t][a]);
    }
  }
}
var Gd = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function co(e) {
  return K(e) && !W(e) && !(e instanceof Date) ? e.value : e;
}
function HT(e) {
  return K(e) && !(e instanceof Array);
}
function UT(e, t, r) {
  var n = r === "normalMerge", i = r === "replaceMerge", a = r === "replaceAll";
  e = e || [], t = (t || []).slice();
  var o = j();
  I(t, function(u, l) {
    if (!K(u)) {
      t[l] = null;
      return;
    }
  });
  var s = WT(e, o, r);
  return (n || i) && YT(s, e, o, t), n && XT(s, t), n || i ? $T(s, t, i) : a && ZT(s, t), qT(s), s;
}
function WT(e, t, r) {
  var n = [];
  if (r === "replaceAll")
    return n;
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    a && a.id != null && t.set(a.id, i), n.push({
      existing: r === "replaceMerge" || Ya(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function YT(e, t, r, n) {
  I(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = Aa(i.id), s = r.get(o);
      if (s != null) {
        var u = e[s];
        Ve(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = t[s], n[a] = null;
      }
    }
  });
}
function XT(e, t) {
  I(t, function(r, n) {
    if (!(!r || r.name == null))
      for (var i = 0; i < e.length; i++) {
        var a = e[i].existing;
        if (!e[i].newOption && a && (a.id == null || r.id == null) && !Ya(r) && !Ya(a) && n0("name", a, r)) {
          e[i].newOption = r, t[n] = null;
          return;
        }
      }
  });
}
function $T(e, t, r) {
  I(t, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = e[a]) && (i.newOption || Ya(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !n0("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = r) : e.push({
        newOption: n,
        brandNew: r,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function ZT(e, t) {
  I(t, function(r) {
    e.push({
      newOption: r,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function qT(e) {
  var t = j();
  I(e, function(r) {
    var n = r.existing;
    n && t.set(n.id, r);
  }), I(e, function(r) {
    var n = r.newOption;
    Ve(!n || n.id == null || !t.get(n.id) || t.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, r), !r.keyInfo && (r.keyInfo = {});
  }), I(e, function(r, n) {
    var i = r.existing, a = r.newOption, o = r.keyInfo;
    if (K(a)) {
      if (o.name = a.name != null ? Aa(a.name) : i ? i.name : r0 + n, i)
        o.id = Aa(i.id);
      else if (a.id != null)
        o.id = Aa(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, r);
    }
  });
}
function n0(e, t, r) {
  var n = ur(t[e], null), i = ur(r[e], null);
  return n != null && i != null && n === i;
}
function Aa(e) {
  return ur(e, "");
}
function ur(e, t) {
  return e == null ? t : Y(e) ? e : mt(e) || kf(e) ? e + "" : t;
}
function Av(e) {
  var t = e.name;
  return !!(t && t.indexOf(r0));
}
function Ya(e) {
  return e && e.id != null && Aa(e.id).indexOf(VT) === 0;
}
function KT(e, t, r) {
  I(e, function(n) {
    var i = n.newOption;
    K(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = QT(t, i, n.existing, r));
  });
}
function QT(e, t, r, n) {
  var i = t.type ? t.type : r ? r.subType : n.determineSubType(e, t);
  return i;
}
function Wn(e, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return W(t.dataIndex) ? Z(t.dataIndex, function(r) {
      return e.indexOfRawIndex(r);
    }) : e.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return W(t.name) ? Z(t.name, function(r) {
      return e.indexOfName(r);
    }) : e.indexOfName(t.name);
}
function _t() {
  var e = "__ec_inner_" + jT++;
  return function(t) {
    return t[e] || (t[e] = {});
  };
}
var jT = Dv();
function Pl(e, t, r) {
  var n = Mv(t, r), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = r ? r.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var h = po(e, f, l, {
      useDefault: u === f,
      enableAll: r && r.enableAll != null ? r.enableAll : !0,
      enableNone: r && r.enableNone != null ? r.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Mv(e, t) {
  var r;
  if (Y(e)) {
    var n = {};
    n[e + "Index"] = 0, r = n;
  } else
    r = e;
  var i = j(), a = {}, o = !1;
  return I(r, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && ct(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var c = i.get(f) || i.set(f, {});
      c[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var xe = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function po(e, t, r, n) {
  n = n || xe;
  var i = r.index, a = r.id, o = r.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = n.useDefault && (u = e.getComponent(t)) ? [u] : [], s;
  }
  if (i === "none" || i === !1) {
    if (n.enableNone)
      return s.models = [], s;
    i = -1;
  }
  return i === "all" && (n.enableAll ? i = a = o = null : i = -1), s.models = e.queryComponents({
    mainType: t,
    index: i,
    id: a,
    name: o
  }), s;
}
function JT(e, t, r) {
  var n = {};
  n[t + "Id"] = e[t + "Id"], n[t + "Index"] = e[t + "Index"], n[t + "Name"] = e[t + "Name"];
  var i = {
    mainType: t,
    query: n
  };
  return r && (i.subType = r), i;
}
function i0(e, t, r) {
  e.setAttribute ? e.setAttribute(t, r) : e[t] = r;
}
function tx(e, t) {
  return e.getAttribute ? e.getAttribute(t) : e[t];
}
function ex(e) {
  return e === "auto" ? nt.domSupported ? "html" : "richText" : e || "html";
}
function rx(e, t, r, n, i) {
  var a = t == null || t === "auto";
  if (n == null)
    return n;
  if (mt(n)) {
    var o = zd(r || 0, n, i);
    return ft(o, a ? Math.max(Fr(r || 0), Fr(n)) : t);
  } else {
    if (Y(n))
      return i < 1 ? r : n;
    for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var c = e.getDimensionInfo(h);
      if (c && c.type === "ordinal")
        s[h] = (i < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0, d = l[h], o = zd(v, d, i);
        s[h] = ft(o, a ? Math.max(Fr(v), Fr(d)) : t);
      }
    }
    return s;
  }
}
function Te() {
  return [1 / 0, -1 / 0];
}
function uh(e, t) {
  Tr(t) && (t < e[0] && (e[0] = t), t > e[1] && (e[1] = t));
}
function a0(e, t) {
  Tr(t) && t < e[0] && (e[0] = t);
}
function o0(e, t) {
  Tr(t) && t > e[1] && (e[1] = t);
}
function nx(e, t) {
  Ri(t[0], t[1]) && (t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]));
}
function Tr(e) {
  return e != null && isFinite(e);
}
function Ri(e, t) {
  return Tr(e) && Tr(t) && e <= t;
}
function ix(e) {
  var t = e[1] - e[0];
  return isFinite(t) && t >= 0;
}
function ax(e) {
  Ri(e[0], e[1]) && e[0] > e[1] && (e[0] = e[1]);
}
function s0() {
  var e = "__ec_once_" + ox++;
  return function(t, r) {
    te(t, e) || (t[e] = 1, r());
  };
}
var ox = Dv();
function Iv(e, t, r) {
  var n = j(), i = 0;
  I(e, function(a) {
    var o = t(a), s = n.get(o) || 0;
    r && r(a, s), !s && !r && (e[i++] = a), n.set(o, s + 1);
  }), r || (e.length = i);
}
function sx(e) {
  return e.value + "";
}
function ux(e) {
  return e + "";
}
function lx(e, t) {
  return $(t, !0) ? e.seriesIndex + 2 : 0;
}
function u0(e, t, r) {
  var n = e.getData().count();
  return {
    progressiveRender: r.progressiveEnabled && t.incrementalPrepareRender && n >= r.threshold,
    large: e.get("large") && n >= e.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: e.get("progressiveChunkMode") === "mod" ? e.getData().count() : null
  };
}
function fx(e, t) {
  return {
    seriesType: e,
    overallReset: t
  };
}
function Lv(e) {
  return {
    overallReset: e
  };
}
var ut = _t(), hx = function(e, t, r, n) {
  if (n) {
    var i = ut(n);
    i.dataIndex = r, i.dataType = t, i.seriesIndex = e, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = ut(a);
      o.seriesIndex = e, o.dataIndex = r, o.dataType = t, o.ssrType = "chart";
    });
  }
}, Ui = "undefined", l0 = "series", f0 = j(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), ce = "original", qt = "arrayRows", Re = "objectRows", Ye = "keyedColumns", Wr = "typedArray", h0 = "unknown", lr = "column", Zn = "row", vx = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], v0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      I(vx, function(r) {
        this[r] = St(t[r], t);
      }, this);
    }
    return e;
  }()
);
function cx(e, t) {
  return t.mainType === l0 ? e.getViewOfSeriesModel(t) : e.getViewOfComponentModel(t);
}
var Vd = 1, Hd = {}, c0 = _t(), Pv = _t(), Ev = 0, ku = 1, Nu = 2, Ee = ["emphasis", "blur", "select"], Zs = ["normal", "emphasis", "blur", "select"], dx = 10, px = 9, Gn = "highlight", bs = "downplay", qs = "select", lh = "unselect", Ks = "toggleSelect", Rv = "selectchanged";
function ri(e) {
  return e != null && e !== "none";
}
function Bu(e, t, r) {
  e.onHoverStateChange && (e.hoverState || 0) !== r && e.onHoverStateChange(t), e.hoverState = r;
}
function d0(e) {
  Bu(e, "emphasis", Nu);
}
function p0(e) {
  e.hoverState === Nu && Bu(e, "normal", Ev);
}
function Ov(e) {
  Bu(e, "blur", ku);
}
function g0(e) {
  e.hoverState === ku && Bu(e, "normal", Ev);
}
function gx(e) {
  e.selected = !0;
}
function mx(e) {
  e.selected = !1;
}
function Ud(e, t, r) {
  t(e, r);
}
function xr(e, t, r) {
  Ud(e, t, r), e.isGroup && e.traverse(function(n) {
    Ud(n, t, r);
  });
}
function Wd(e, t) {
  switch (t) {
    case "emphasis":
      e.hoverState = Nu;
      break;
    case "normal":
      e.hoverState = Ev;
      break;
    case "blur":
      e.hoverState = ku;
      break;
    case "select":
      e.selected = !0;
  }
}
function yx(e, t, r, n) {
  for (var i = e.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = i[s];
    a[s] = u ?? (n && n[s]);
  }
  for (var o = 0; o < e.animators.length; o++) {
    var l = e.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function _x(e, t, r, n) {
  var i = r && ct(r, "select") >= 0, a = !1;
  if (e instanceof dt) {
    var o = c0(e), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (ri(s) || ri(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = N({}, n), l = N({}, l), l.fill = s) : !ri(l.fill) && ri(s) ? (a = !0, n = N({}, n), l = N({}, l), l.fill = Zf(s)) : !ri(l.stroke) && ri(u) && (a || (n = N({}, n), l = N({}, l)), l.stroke = Zf(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = N({}, n));
    var f = e.z2EmphasisLift;
    n.z2 = e.z2 + (f ?? dx);
  }
  return n;
}
function Sx(e, t, r) {
  if (r && r.z2 == null) {
    r = N({}, r);
    var n = e.z2SelectLift;
    r.z2 = e.z2 + (n ?? px);
  }
  return r;
}
function bx(e, t, r) {
  var n = ct(e.currentStates, t) >= 0, i = e.style.opacity, a = n ? null : yx(e, ["opacity"], t, {
    opacity: 1
  });
  r = r || {};
  var o = r.style || {};
  return o.opacity == null && (r = N({}, r), o = N({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), r.style = o), r;
}
function El(e, t) {
  var r = this.states[e];
  if (this.style) {
    if (e === "emphasis")
      return _x(this, e, t, r);
    if (e === "blur")
      return bx(this, e, r);
    if (e === "select")
      return Sx(this, e, r);
  }
  return r;
}
function Tx(e) {
  e.stateProxy = El;
  var t = e.getTextContent(), r = e.getTextGuideLine();
  t && (t.stateProxy = El), r && (r.stateProxy = El);
}
function Yd(e, t) {
  !S0(e, t) && !e.__highByOuter && xr(e, d0);
}
function Xd(e, t) {
  !S0(e, t) && !e.__highByOuter && xr(e, p0);
}
function Qs(e, t) {
  e.__highByOuter |= 1 << (t || 0), xr(e, d0);
}
function js(e, t) {
  !(e.__highByOuter &= ~(1 << (t || 0))) && xr(e, p0);
}
function xx(e) {
  xr(e, Ov);
}
function m0(e) {
  xr(e, g0);
}
function y0(e) {
  xr(e, gx);
}
function _0(e) {
  xr(e, mx);
}
function S0(e, t) {
  return e.__highDownSilentOnTouch && t.zrByTouch;
}
function b0(e) {
  var t = e.getModel(), r = [], n = [];
  t.eachComponent(function(i, a) {
    var o = Pv(a), s = cx(e, a), u = i === "series";
    !u && n.push(s), o.isBlured && (s.group.traverse(function(l) {
      g0(l);
    }), u && r.push(a)), o.isBlured = !1;
  }), I(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(r, !1, t);
  });
}
function fh(e, t, r, n) {
  var i = n.getModel();
  r = r || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && m0(c);
    }
  }
  if (e != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(e), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (r === "series" && !f || r === "coordinateSystem" && !c || t === "series" && f)) {
        var v = n.getViewOfSeriesModel(l);
        if (v.group.traverse(function(g) {
          g.__highByOuter && f && t === "self" || Ov(g);
        }), le(t))
          a(l.getData(), t);
        else if (K(t))
          for (var d = lt(t), p = 0; p < d.length; p++)
            a(l.getData(d[p]), t[d[p]]);
        u.push(l), Pv(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function hh(e, t, r) {
  if (!(e == null || t == null)) {
    var n = r.getModel().getComponent(e, t);
    if (n) {
      Pv(n).isBlured = !0;
      var i = r.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        Ov(a);
      });
    }
  }
}
function Cx(e, t, r) {
  var n = e.seriesIndex, i = e.getData(t.dataType);
  if (i) {
    var a = Wn(i, t);
    a = (W(a) ? a[0] : a) || 0;
    var o = i.getItemGraphicEl(a);
    if (!o)
      for (var s = i.count(), u = 0; !o && u < s; )
        o = i.getItemGraphicEl(u++);
    if (o) {
      var l = ut(o);
      fh(n, l.focus, l.blurScope, r);
    } else {
      var f = e.get(["emphasis", "focus"]), h = e.get(["emphasis", "blurScope"]);
      f != null && fh(n, f, h, r);
    }
  }
}
function kv(e, t, r, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (e == null || e === "series" || t == null || r == null)
    return i;
  var a = n.getModel().getComponent(e, t);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
    if (ut(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function Dx(e, t, r) {
  var n = ut(e), i = kv(n.componentMainType, n.componentIndex, n.componentHighDownName, r), a = i.dispatchers, o = i.focusSelf;
  a ? (o && hh(n.componentMainType, n.componentIndex, r), I(a, function(s) {
    return Yd(s, t);
  })) : (fh(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && hh(n.componentMainType, n.componentIndex, r), Yd(e, t));
}
function Ax(e, t, r) {
  b0(r);
  var n = ut(e), i = kv(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
  i ? I(i, function(a) {
    return Xd(a, t);
  }) : Xd(e, t);
}
function Mx(e, t, r) {
  if (dh(t)) {
    var n = t.dataType, i = e.getData(n), a = Wn(i, t);
    W(a) || (a = [a]), e[t.type === Ks ? "toggleSelect" : t.type === qs ? "select" : "unselect"](a, n);
  }
}
function $d(e) {
  var t = e.getAllData();
  I(t, function(r) {
    var n = r.data, i = r.type;
    n.eachItemGraphicEl(function(a, o) {
      e.isSelected(o, i) ? y0(a) : _0(a);
    });
  });
}
function Ix(e) {
  var t = [];
  return e.eachSeries(function(r) {
    var n = r.getAllData();
    I(n, function(i) {
      i.data;
      var a = i.type, o = r.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: r.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function vh(e, t, r) {
  w0(e, !0), xr(e, Tx), Px(e, t, r);
}
function Lx(e) {
  w0(e, !1);
}
function Xa(e, t, r, n) {
  n ? Lx(e) : vh(e, t, r);
}
function Px(e, t, r) {
  var n = ut(e);
  t != null ? (n.focus = t, n.blurScope = r) : n.focus && (n.focus = null);
}
var Zd = ["emphasis", "blur", "select"], Ex = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function Js(e, t, r, n) {
  r = r || "itemStyle";
  for (var i = 0; i < Zd.length; i++) {
    var a = Zd[i], o = t.getModel([a, r]), s = e.ensureState(a);
    s.style = o[Ex[r]]();
  }
}
function w0(e, t) {
  var r = t === !1, n = e;
  e.highDownSilentOnTouch && (n.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r);
}
function ch(e) {
  return !!(e && e.__highDownDispatcher);
}
function Rx(e) {
  var t = Hd[e];
  return t == null && Vd <= 32 && (t = Hd[e] = Vd++), t;
}
function dh(e) {
  var t = e.type;
  return t === qs || t === lh || t === Ks;
}
function qd(e) {
  var t = e.type;
  return t === Gn || t === bs;
}
function Ox(e) {
  var t = c0(e);
  t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
  var r = e.states.select || {};
  t.selectFill = r.style && r.style.fill || null, t.selectStroke = r.style && r.style.stroke || null;
}
var ni = Zr.CMD, kx = [[], [], []], Kd = Math.sqrt, Nx = Math.atan2;
function Bx(e, t) {
  if (t) {
    var r = e.data, n = e.len(), i, a, o, s, u, l, f = ni.M, h = ni.C, c = ni.L, v = ni.R, d = ni.A, p = ni.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = r[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case p:
          a = 2;
          break;
        case d:
          var g = t[4], m = t[5], y = Kd(t[0] * t[0] + t[1] * t[1]), _ = Kd(t[2] * t[2] + t[3] * t[3]), S = Nx(-t[1] / _, t[0] / y);
          r[o] *= y, r[o++] += g, r[o] *= _, r[o++] += m, r[o++] *= y, r[o++] *= _, r[o++] += S, r[o++] += S, o += 2, s = o;
          break;
        case v:
          l[0] = r[o++], l[1] = r[o++], Ae(l, l, t), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Ae(l, l, t), r[s++] = l[0], r[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var b = kx[u];
        b[0] = r[o++], b[1] = r[o++], Ae(b, b, t), r[s++] = b[0], r[s++] = b[1];
      }
    }
    e.increaseVersion();
  }
}
var Rl = Math.sqrt, Bo = Math.sin, Fo = Math.cos, Qi = Math.PI;
function Qd(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
}
function ph(e, t) {
  return (e[0] * t[0] + e[1] * t[1]) / (Qd(e) * Qd(t));
}
function jd(e, t) {
  return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(ph(e, t));
}
function Jd(e, t, r, n, i, a, o, s, u, l, f) {
  var h = u * (Qi / 180), c = Fo(h) * (e - r) / 2 + Bo(h) * (t - n) / 2, v = -1 * Bo(h) * (e - r) / 2 + Fo(h) * (t - n) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= Rl(d), s *= Rl(d));
  var p = (i === a ? -1 : 1) * Rl((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, g = p * o * v / s, m = p * -s * c / o, y = (e + r) / 2 + Fo(h) * g - Bo(h) * m, _ = (t + n) / 2 + Bo(h) * g + Fo(h) * m, S = jd([1, 0], [(c - g) / o, (v - m) / s]), b = [(c - g) / o, (v - m) / s], w = [(-1 * c - g) / o, (-1 * v - m) / s], T = jd(b, w);
  if (ph(b, w) <= -1 && (T = Qi), ph(b, w) >= 1 && (T = 0), T < 0) {
    var x = Math.round(T / Qi * 1e6) / 1e6;
    T = Qi * 2 + x % 2 * Qi;
  }
  f.addData(l, y, _, o, s, S, T, h, a);
}
var Fx = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, zx = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function Gx(e) {
  var t = new Zr();
  if (!e)
    return t;
  var r = 0, n = 0, i = r, a = n, o, s = Zr.CMD, u = e.match(Fx);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(zx) || [], d = v.length, p = 0; p < d; p++)
      v[p] = parseFloat(v[p]);
    for (var g = 0; g < d; ) {
      var m = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, T = void 0, x = r, D = n, C = void 0, A = void 0;
      switch (h) {
        case "l":
          r += v[g++], n += v[g++], c = s.L, t.addData(c, r, n);
          break;
        case "L":
          r = v[g++], n = v[g++], c = s.L, t.addData(c, r, n);
          break;
        case "m":
          r += v[g++], n += v[g++], c = s.M, t.addData(c, r, n), i = r, a = n, h = "l";
          break;
        case "M":
          r = v[g++], n = v[g++], c = s.M, t.addData(c, r, n), i = r, a = n, h = "L";
          break;
        case "h":
          r += v[g++], c = s.L, t.addData(c, r, n);
          break;
        case "H":
          r = v[g++], c = s.L, t.addData(c, r, n);
          break;
        case "v":
          n += v[g++], c = s.L, t.addData(c, r, n);
          break;
        case "V":
          n = v[g++], c = s.L, t.addData(c, r, n);
          break;
        case "C":
          c = s.C, t.addData(c, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), r = v[g - 2], n = v[g - 1];
          break;
        case "c":
          c = s.C, t.addData(c, v[g++] + r, v[g++] + n, v[g++] + r, v[g++] + n, v[g++] + r, v[g++] + n), r += v[g - 2], n += v[g - 1];
          break;
        case "S":
          m = r, y = n, C = t.len(), A = t.data, o === s.C && (m += r - A[C - 4], y += n - A[C - 3]), c = s.C, x = v[g++], D = v[g++], r = v[g++], n = v[g++], t.addData(c, m, y, x, D, r, n);
          break;
        case "s":
          m = r, y = n, C = t.len(), A = t.data, o === s.C && (m += r - A[C - 4], y += n - A[C - 3]), c = s.C, x = r + v[g++], D = n + v[g++], r += v[g++], n += v[g++], t.addData(c, m, y, x, D, r, n);
          break;
        case "Q":
          x = v[g++], D = v[g++], r = v[g++], n = v[g++], c = s.Q, t.addData(c, x, D, r, n);
          break;
        case "q":
          x = v[g++] + r, D = v[g++] + n, r += v[g++], n += v[g++], c = s.Q, t.addData(c, x, D, r, n);
          break;
        case "T":
          m = r, y = n, C = t.len(), A = t.data, o === s.Q && (m += r - A[C - 4], y += n - A[C - 3]), r = v[g++], n = v[g++], c = s.Q, t.addData(c, m, y, r, n);
          break;
        case "t":
          m = r, y = n, C = t.len(), A = t.data, o === s.Q && (m += r - A[C - 4], y += n - A[C - 3]), r += v[g++], n += v[g++], c = s.Q, t.addData(c, m, y, r, n);
          break;
        case "A":
          _ = v[g++], S = v[g++], b = v[g++], w = v[g++], T = v[g++], x = r, D = n, r = v[g++], n = v[g++], c = s.A, Jd(x, D, r, n, w, T, _, S, b, c, t);
          break;
        case "a":
          _ = v[g++], S = v[g++], b = v[g++], w = v[g++], T = v[g++], x = r, D = n, r += v[g++], n += v[g++], c = s.A, Jd(x, D, r, n, w, T, _, S, b, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, t.addData(c), r = i, n = a), o = c;
  }
  return t.toStatic(), t;
}
var T0 = function(e) {
  V(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(r) {
  }, t;
}(dt);
function x0(e) {
  return e.setData != null;
}
function C0(e, t) {
  var r = Gx(e), n = N({}, t);
  return n.buildPath = function(i) {
    var a = x0(i);
    if (a && i.canSave()) {
      i.appendPath(r);
      var o = i.getContext();
      o && i.rebuildPath(o, 1);
    } else {
      var o = a ? i.getContext() : i;
      o && r.rebuildPath(o, 1);
    }
  }, n.applyTransform = function(i) {
    Bx(r, i), this.dirtyShape();
  }, n;
}
function Vx(e, t) {
  return new T0(C0(e, t));
}
function Hx(e, t) {
  var r = C0(e, t), n = function(i) {
    V(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s;
    }
    return a;
  }(T0);
  return n;
}
function Ux(e, t) {
  for (var r = [], n = e.length, i = 0; i < n; i++) {
    var a = e[i];
    r.push(a.getUpdatedPathProxy(!0));
  }
  var o = new dt(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (x0(s)) {
      s.appendPath(r);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var Ft = function(e) {
  V(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(r), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(r) {
    return this._children[r];
  }, t.prototype.childOfName = function(r) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === r)
        return n[i];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(r) {
    return r && r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), this;
  }, t.prototype.addBefore = function(r, n) {
    if (r && r !== this && r.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, r), this._doAdd(r));
    }
    return this;
  }, t.prototype.replace = function(r, n) {
    var i = ct(this._children, r);
    return i >= 0 && this.replaceAt(n, i), this;
  }, t.prototype.replaceAt = function(r, n) {
    var i = this._children, a = i[n];
    if (r && r !== this && r.parent !== this && r !== a) {
      i[n] = r, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(r);
    }
    return this;
  }, t.prototype._doAdd = function(r) {
    r.parent && r.parent.remove(r), r.parent = this;
    var n = this.__zr;
    n && n !== r.__zr && r.addSelfToZr(n), n && n.refresh();
  }, t.prototype.remove = function(r) {
    var n = this.__zr, i = this._children, a = ct(i, r);
    return a < 0 ? this : (i.splice(a, 1), r.parent = null, n && r.removeSelfFromZr(n), n && n.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var r = this._children, n = this.__zr, i = 0; i < r.length; i++) {
      var a = r[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return r.length = 0, this;
  }, t.prototype.eachChild = function(r, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      r.call(n, o, a);
    }
    return this;
  }, t.prototype.traverse = function(r, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = r.call(n, a);
      a.isGroup && !o && a.traverse(r, n);
    }
    return this;
  }, t.prototype.addSelfToZr = function(r) {
    e.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(r);
    }
  }, t.prototype.removeSelfFromZr = function(r) {
    e.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(r);
    }
  }, t.prototype.getBoundingRect = function(r) {
    for (var n = new tt(0, 0, 0, 0), i = r || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (tt.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, t;
}(Ru);
Ft.prototype.type = "group";
var Wx = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return e;
}(), Fu = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Wx();
  }, t.prototype.buildPath = function(r, n) {
    r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, t;
}(dt);
Fu.prototype.type = "circle";
var Yx = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return e;
}(), Nv = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Yx();
  }, t.prototype.buildPath = function(r, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath();
  }, t;
}(dt);
Nv.prototype.type = "ellipse";
var D0 = Math.PI, Ol = D0 * 2, mn = Math.sin, ii = Math.cos, Xx = Math.acos, Yt = Math.atan2, tp = Math.abs, Ma = Math.sqrt, ga = Math.max, Je = Math.min, Fe = 1e-4;
function $x(e, t, r, n, i, a, o, s) {
  var u = r - e, l = n - t, f = o - i, h = s - a, c = h * u - f * l;
  if (!(c * c < Fe))
    return c = (f * (t - a) - h * (e - i)) / c, [e + c * u, t + c * l];
}
function zo(e, t, r, n, i, a, o) {
  var s = e - r, u = t - n, l = (o ? a : -a) / Ma(s * s + u * u), f = l * u, h = -l * s, c = e + f, v = t + h, d = r + f, p = n + h, g = (c + d) / 2, m = (v + p) / 2, y = d - c, _ = p - v, S = y * y + _ * _, b = i - a, w = c * p - d * v, T = (_ < 0 ? -1 : 1) * Ma(ga(0, b * b * S - w * w)), x = (w * _ - y * T) / S, D = (-w * y - _ * T) / S, C = (w * _ + y * T) / S, A = (-w * y + _ * T) / S, L = x - g, M = D - m, P = C - g, E = A - m;
  return L * L + M * M > P * P + E * E && (x = C, D = A), {
    cx: x,
    cy: D,
    x0: -f,
    y0: -h,
    x1: x * (i / b - 1),
    y1: D * (i / b - 1)
  };
}
function Zx(e) {
  var t;
  if (W(e)) {
    var r = e.length;
    if (!r)
      return e;
    r === 1 ? t = [e[0], e[0], 0, 0] : r === 2 ? t = [e[0], e[0], e[1], e[1]] : r === 3 ? t = e.concat(e[2]) : t = e;
  } else
    t = [e, e, e, e];
  return t;
}
function qx(e, t) {
  var r, n = ga(t.r, 0), i = ga(t.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, c = !!t.clockwise, v = tp(l - u), d = v > Ol && v % Ol;
      if (d > Fe && (v = d), !(n > Fe))
        e.moveTo(f, h);
      else if (v > Ol - Fe)
        e.moveTo(f + n * ii(u), h + n * mn(u)), e.arc(f, h, n, u, l, !c), i > Fe && (e.moveTo(f + i * ii(l), h + i * mn(l)), e.arc(f, h, i, l, u, c));
      else {
        var p = void 0, g = void 0, m = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, T = void 0, x = void 0, D = void 0, C = void 0, A = void 0, L = void 0, M = void 0, P = void 0, E = n * ii(u), R = n * mn(u), k = i * ii(l), O = i * mn(l), B = v > Fe;
        if (B) {
          var F = t.cornerRadius;
          F && (r = Zx(F), p = r[0], g = r[1], m = r[2], y = r[3]);
          var G = tp(n - i) / 2;
          if (_ = Je(G, m), S = Je(G, y), b = Je(G, p), w = Je(G, g), D = T = ga(_, S), C = x = ga(b, w), (T > Fe || x > Fe) && (A = n * ii(l), L = n * mn(l), M = i * ii(u), P = i * mn(u), v < D0)) {
            var U = $x(E, R, M, P, A, L, k, O);
            if (U) {
              var X = E - U[0], H = R - U[1], J = A - U[0], it = L - U[1], Dt = 1 / mn(Xx((X * J + H * it) / (Ma(X * X + H * H) * Ma(J * J + it * it))) / 2), xt = Ma(U[0] * U[0] + U[1] * U[1]);
              D = Je(T, (n - xt) / (Dt + 1)), C = Je(x, (i - xt) / (Dt - 1));
            }
          }
        }
        if (!B)
          e.moveTo(f + E, h + R);
        else if (D > Fe) {
          var st = Je(m, D), bt = Je(y, D), Q = zo(M, P, E, R, n, st, c), at = zo(A, L, k, O, n, bt, c);
          e.moveTo(f + Q.cx + Q.x0, h + Q.cy + Q.y0), D < T && st === bt ? e.arc(f + Q.cx, h + Q.cy, D, Yt(Q.y0, Q.x0), Yt(at.y0, at.x0), !c) : (st > 0 && e.arc(f + Q.cx, h + Q.cy, st, Yt(Q.y0, Q.x0), Yt(Q.y1, Q.x1), !c), e.arc(f, h, n, Yt(Q.cy + Q.y1, Q.cx + Q.x1), Yt(at.cy + at.y1, at.cx + at.x1), !c), bt > 0 && e.arc(f + at.cx, h + at.cy, bt, Yt(at.y1, at.x1), Yt(at.y0, at.x0), !c));
        } else
          e.moveTo(f + E, h + R), e.arc(f, h, n, u, l, !c);
        if (!(i > Fe) || !B)
          e.lineTo(f + k, h + O);
        else if (C > Fe) {
          var st = Je(p, C), bt = Je(g, C), Q = zo(k, O, A, L, i, -bt, c), at = zo(E, R, M, P, i, -st, c);
          e.lineTo(f + Q.cx + Q.x0, h + Q.cy + Q.y0), C < x && st === bt ? e.arc(f + Q.cx, h + Q.cy, C, Yt(Q.y0, Q.x0), Yt(at.y0, at.x0), !c) : (bt > 0 && e.arc(f + Q.cx, h + Q.cy, bt, Yt(Q.y0, Q.x0), Yt(Q.y1, Q.x1), !c), e.arc(f, h, i, Yt(Q.cy + Q.y1, Q.cx + Q.x1), Yt(at.cy + at.y1, at.cx + at.x1), c), st > 0 && e.arc(f + at.cx, h + at.cy, st, Yt(at.y1, at.x1), Yt(at.y0, at.x0), !c));
        } else
          e.lineTo(f + k, h + O), e.arc(f, h, i, l, u, c);
      }
      e.closePath();
    }
  }
}
var Kx = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return e;
}(), en = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Kx();
  }, t.prototype.buildPath = function(r, n) {
    qx(r, n);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(dt);
en.prototype.type = "sector";
var Qx = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return e;
}(), Bv = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Qx();
  }, t.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    r.moveTo(i + n.r, a), r.arc(i, a, n.r, 0, o, !1), r.moveTo(i + n.r0, a), r.arc(i, a, n.r0, 0, o, !0);
  }, t;
}(dt);
Bv.prototype.type = "ring";
function jx(e, t, r, n) {
  var i = [], a = [], o = [], s = [], u, l, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = e.length; c < v; c++)
      mi(f, f, e[c]), yi(h, h, e[c]);
    mi(f, f, n[0]), yi(h, h, n[1]);
  }
  for (var c = 0, v = e.length; c < v; c++) {
    var d = e[c];
    if (r)
      u = e[c ? c - 1 : v - 1], l = e[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      i.push(nw(e[c]));
      continue;
    } else
      u = e[c - 1], l = e[c + 1];
    iw(a, l, u), al(a, a, t);
    var p = zf(d, u), g = zf(d, l), m = p + g;
    m !== 0 && (p /= m, g /= m), al(o, a, -p), al(s, a, g);
    var y = Qc([], d, o), _ = Qc([], d, s);
    n && (yi(y, y, f), mi(y, y, h), yi(_, _, f), mi(_, _, h)), i.push(y), i.push(_);
  }
  return r && i.push(i.shift()), i;
}
function A0(e, t, r) {
  var n = t.smooth, i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = jx(i, n, r, t.smoothConstraint);
      e.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (r ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = i[(s + 1) % o];
        e.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      e.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++)
        e.lineTo(i[s][0], i[s][1]);
    }
    r && e.closePath();
  }
}
var Jx = /* @__PURE__ */ function() {
  function e() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return e;
}(), Fv = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Jx();
  }, t.prototype.buildPath = function(r, n) {
    A0(r, n, !0);
  }, t;
}(dt);
Fv.prototype.type = "polygon";
var tC = /* @__PURE__ */ function() {
  function e() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return e;
}(), go = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new tC();
  }, t.prototype.buildPath = function(r, n) {
    A0(r, n, !1);
  }, t;
}(dt);
go.prototype.type = "polyline";
var eC = {}, rC = /* @__PURE__ */ function() {
  function e() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return e;
}(), qr = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new rC();
  }, t.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Xy(eC, n, this.style);
      i = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var l = n.percent;
    l !== 0 && (r.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), r.lineTo(o, s));
  }, t.prototype.pointAt = function(r) {
    var n = this.shape;
    return [
      n.x1 * (1 - r) + n.x2 * r,
      n.y1 * (1 - r) + n.y2 * r
    ];
  }, t;
}(dt);
qr.prototype.type = "line";
var ae = [], nC = /* @__PURE__ */ function() {
  function e() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return e;
}();
function ep(e, t, r) {
  var n = e.cpx2, i = e.cpy2;
  return n != null || i != null ? [
    (r ? fd : Ht)(e.x1, e.cpx1, e.cpx2, e.x2, t),
    (r ? fd : Ht)(e.y1, e.cpy1, e.cpy2, e.y2, t)
  ] : [
    (r ? hd : oe)(e.x1, e.cpx1, e.x2, t),
    (r ? hd : oe)(e.y1, e.cpy1, e.y2, t)
  ];
}
var zv = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new nC();
  }, t.prototype.buildPath = function(r, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, h = n.cpy2, c = n.percent;
    c !== 0 && (r.moveTo(i, a), f == null || h == null ? (c < 1 && (Vs(i, u, o, c, ae), u = ae[1], o = ae[2], Vs(a, l, s, c, ae), l = ae[1], s = ae[2]), r.quadraticCurveTo(u, l, o, s)) : (c < 1 && (Gs(i, u, f, o, c, ae), u = ae[1], f = ae[2], o = ae[3], Gs(a, l, h, s, c, ae), l = ae[1], h = ae[2], s = ae[3]), r.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(r) {
    return ep(this.shape, r, !1);
  }, t.prototype.tangentAt = function(r) {
    var n = ep(this.shape, r, !0);
    return sw(n, n);
  }, t;
}(dt);
zv.prototype.type = "bezier-curve";
var iC = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return e;
}(), zu = function(e) {
  V(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new iC();
  }, t.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    r.moveTo(f * o + i, h * o + a), r.arc(i, a, o, s, u, !l);
  }, t;
}(dt);
zu.prototype.type = "arc";
var M0 = function(e) {
  V(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = "compound", r;
  }
  return t.prototype._updatePathDirty = function() {
    for (var r = this.shape.paths, n = this.shapeChanged(), i = 0; i < r.length; i++)
      n = n || r[i].shapeChanged();
    n && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var r = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < r.length; i++)
      r[i].path || r[i].createPathProxy(), r[i].path.setScale(n[0], n[1], r[i].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(r, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(r, i[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var r = this.shape.paths || [], n = 0; n < r.length; n++)
      r[n].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), dt.prototype.getBoundingRect.call(this);
  }, t;
}(dt), I0 = function() {
  function e(t) {
    this.colorStops = t || [];
  }
  return e.prototype.addColorStop = function(t, r) {
    this.colorStops.push({
      offset: t,
      color: r
    });
  }, e;
}(), L0 = function(e) {
  V(t, e);
  function t(r, n, i, a, o, s) {
    var u = e.call(this, o) || this;
    return u.x = r ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return t;
}(I0), aC = function(e) {
  V(t, e);
  function t(r, n, i, a, o) {
    var s = e.call(this, a) || this;
    return s.x = r ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
}(I0), kl = Math.min, oC = Math.max, Go = Math.abs, yn = [0, 0], _n = [0, 0], Bt = Ty(), Vo = Bt.minTv, Ho = Bt.maxTv, P0 = function() {
  function e(t, r) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new rt();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new rt();
    t && this.fromBoundingRect(t, r);
  }
  return e.prototype.fromBoundingRect = function(t, r) {
    var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), r)
      for (var l = 0; l < 4; l++)
        n[l].transform(r);
    rt.sub(i[0], n[1], n[0]), rt.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, e.prototype.intersect = function(t, r, n) {
    var i = !0, a = !r;
    return r && rt.set(r, 0, 0), Bt.reset(n, !a), !this._intersectCheckOneSide(this, t, a, 1) && (i = !1, a) || !this._intersectCheckOneSide(t, this, a, -1) && (i = !1, a) || !a && !Bt.negativeSize && rt.copy(r, i ? Bt.useDir ? Bt.dirMinTv : Vo : Ho), i;
  }, e.prototype._intersectCheckOneSide = function(t, r, n, i) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = t._axes[o];
      if (t._getProjMinMaxOnAxis(o, t._corners, yn), t._getProjMinMaxOnAxis(o, r._corners, _n), Bt.negativeSize || yn[1] < _n[0] || yn[0] > _n[1]) {
        if (a = !1, Bt.negativeSize || n)
          return a;
        var u = Go(_n[0] - yn[1]), l = Go(yn[0] - _n[1]);
        kl(u, l) > Ho.len() && (u < l ? rt.scale(Ho, s, -u * i) : rt.scale(Ho, s, l * i));
      } else if (!n) {
        var u = Go(_n[0] - yn[1]), l = Go(yn[0] - _n[1]);
        (Bt.useDir || kl(u, l) < Vo.len()) && ((u < l || !Bt.bidirectional) && (rt.scale(Vo, s, u * i), Bt.useDir && Bt.calcDirMTV()), (u >= l || !Bt.bidirectional) && (rt.scale(Vo, s, -l * i), Bt.useDir && Bt.calcDirMTV()));
      }
    }
    return a;
  }, e.prototype._getProjMinMaxOnAxis = function(t, r, n) {
    for (var i = this._axes[t], a = this._origin, o = r[0].dot(i) + a[t], s = o, u = o, l = 1; l < r.length; l++) {
      var f = r[l].dot(i) + a[t];
      s = kl(f, s), u = oC(f, u);
    }
    n[0] = s + Bt.touchThreshold, n[1] = u - Bt.touchThreshold, Bt.negativeSize = n[1] < n[0];
  }, e;
}(), E0 = 0, sC = 1, uC = 2, lC = 1, ws = 0, fC = [], hC = function(e) {
  V(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.notClear = !0, r.incremental = sC, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r;
  }
  return t.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype._useHoverStyle = function() {
    this.__hoverStyle = null;
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(r, n) {
    n ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw();
  }, t.prototype.addDisplayables = function(r, n) {
    n = n || !1;
    for (var i = 0; i < r.length; i++)
      this.addDisplayable(r[i], n);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(r) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      r && r(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      r && r(this._temporaryDisplayables[n]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var r = this._cursor; r < this._displayables.length; r++) {
      var n = this._displayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var r = 0; r < this._temporaryDisplayables.length; r++) {
      var n = this._temporaryDisplayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var r = new tt(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(fC)), r.union(a);
      }
      this._rect = r;
    }
    return this._rect;
  }, t.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(r, n))
          return !0;
      }
    return !1;
  }, t;
}(ho), vC = _t();
function cC(e, t, r, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = e === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    n ? (l = $(n.duration, 200), f = $(n.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), et(h) && (h = h(r, i)), et(l) && (l = l(r));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function Gv(e, t, r, n, i, a, o) {
  var s = !1, u;
  et(i) ? (o = a, a = i, i = null) : K(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = e === "leave";
  l || t.stopAnimation("leave");
  var f = cC(e, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
  if (f && f.duration > 0) {
    var h = f.duration, c = f.delay, v = f.easing, d = {
      duration: h,
      delay: c || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: e,
      during: o
    };
    s ? t.animateFrom(r, d) : t.animateTo(r, d);
  } else
    t.stopAnimation(), !s && t.attr(r), o && o(1), a && a();
}
function re(e, t, r, n, i, a) {
  Gv("update", e, t, r, n, i, a);
}
function Me(e, t, r, n, i, a) {
  Gv("enter", e, t, r, n, i, a);
}
function Ia(e) {
  if (!e.__zr)
    return !0;
  for (var t = 0; t < e.animators.length; t++) {
    var r = e.animators[t];
    if (r.scope === "leave")
      return !0;
  }
  return !1;
}
function tu(e, t, r, n, i, a) {
  Ia(e) || Gv("leave", e, t, r, n, i, a);
}
function rp(e, t, r, n) {
  e.removeTextContent(), e.removeTextGuideLine(), tu(e, {
    style: {
      opacity: 0
    }
  }, t, r, n);
}
function La(e, t, r) {
  function n() {
    e.parent && e.parent.remove(e);
  }
  e.isGroup ? e.traverse(function(i) {
    i.isGroup || rp(i, t, r, n);
  }) : rp(e, t, r, n);
}
function Vv(e) {
  vC(e).oldStyle = e.style;
}
var gh = {}, kr = ["x", "y"], Oi = ["width", "height"], R0 = 0, O0 = 1, Hv = 2;
function dC(e) {
  return dt.extend(e);
}
var pC = Hx;
function gC(e, t) {
  return pC(e, t);
}
function Xe(e, t) {
  gh[e] = t;
}
function mC(e) {
  if (gh.hasOwnProperty(e))
    return gh[e];
}
function Uv(e, t, r, n) {
  var i = Vx(e, t);
  return r && (n === "center" && (r = N0(r, i.getBoundingRect())), B0(i, r)), i;
}
function k0(e, t, r) {
  var n = new vr({
    style: {
      image: e,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(i) {
      if (r === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(N0(t, a));
      }
    }
  });
  return n;
}
function N0(e, t) {
  var r = t.width / t.height, n = e.height * r, i;
  n <= e.width ? i = e.height : (n = e.width, i = n / r);
  var a = e.x + e.width / 2, o = e.y + e.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var yC = Ux;
function B0(e, t) {
  if (e.applyTransform) {
    var r = e.getBoundingRect(), n = r.calculateTransform(t);
    e.applyTransform(n);
  }
}
function $a(e, t) {
  return Xy(e, e, {
    lineWidth: t
  }), e;
}
function _C(e, t) {
  return $y(e, e, t), e;
}
var SC = Rn;
function bC(e, t) {
  for (var r = oo([]); e && e !== t; )
    xa(r, e.getLocalTransform(), r), e = e.parent;
  return r;
}
function Wv(e, t, r) {
  return t && !le(t) && (t = lo.getLocalTransform(t)), r && (t = so([], t)), Ae([], e, t);
}
function wC(e, t, r) {
  var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Ot(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Ot(2 * t[4] / t[2]), a = [e === "left" ? -n : e === "right" ? n : 0, e === "top" ? -i : e === "bottom" ? i : 0];
  return a = Wv(a, t, r), Ot(a[0]) > Ot(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function np(e) {
  return !e.isGroup;
}
function TC(e) {
  return e.shape != null;
}
function F0(e, t, r) {
  if (!e || !t)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      np(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return TC(o) && (s.shape = ot(o.shape)), s;
  }
  var a = n(e);
  t.traverse(function(o) {
    if (np(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), re(o, u, r, ut(o).dataIndex);
      }
    }
  });
}
function xC(e, t) {
  return Z(e, function(r) {
    var n = r[0];
    n = ht(n, t.x), n = Zt(n, t.x + t.width);
    var i = r[1];
    return i = ht(i, t.y), i = Zt(i, t.y + t.height), [n, i];
  });
}
function CC(e, t) {
  var r = ht(e.x, t.x), n = Zt(e.x + e.width, t.x + t.width), i = ht(e.y, t.y), a = Zt(e.y + e.height, t.y + t.height);
  if (n >= r && a >= i)
    return {
      x: r,
      y: i,
      width: n - r,
      height: a - i
    };
}
function Yv(e, t, r) {
  var n = N({
    rectHover: !0
  }, t), i = n.style = {
    strokeNoScale: !0
  };
  if (r = r || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, e)
    return e.indexOf("image://") === 0 ? (i.image = e.slice(8), yt(i, r), new vr(n)) : Uv(e.replace("path://", ""), n, r, "center");
}
function DC(e, t, r, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (z0(e, t, r, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function z0(e, t, r, n, i, a, o, s) {
  var u = r - e, l = n - t, f = o - i, h = s - a, c = Nl(f, h, u, l);
  if (AC(c))
    return !1;
  var v = e - i, d = t - a, p = Nl(v, d, u, l) / c;
  if (p < 0 || p > 1)
    return !1;
  var g = Nl(v, d, f, h) / c;
  return !(g < 0 || g > 1);
}
function Nl(e, t, r, n) {
  return e * n - r * t;
}
function AC(e) {
  return e <= 1e-6 && e >= -1e-6;
}
function eu(e, t, r, n, i) {
  return t == null || (mt(t) ? wt[0] = wt[1] = wt[2] = wt[3] = t : (wt[0] = t[0], wt[1] = t[1], wt[2] = t[2], wt[3] = t[3]), n && (wt[0] = ht(0, wt[0]), wt[1] = ht(0, wt[1]), wt[2] = ht(0, wt[2]), wt[3] = ht(0, wt[3])), r && (wt[0] = -wt[0], wt[1] = -wt[1], wt[2] = -wt[2], wt[3] = -wt[3]), ip(e, wt, "x", "width", 3, 1, i && i[0] || 0), ip(e, wt, "y", "height", 0, 2, i && i[1] || 0)), e;
}
var wt = [0, 0, 0, 0];
function ip(e, t, r, n, i, a, o) {
  var s = t[a] + t[i], u = e[n];
  e[n] += s, o = ht(0, Zt(o, u)), e[n] < o ? (e[n] = o, e[r] += t[i] >= 0 ? -t[i] : t[a] >= 0 ? u + t[a] : Ot(s) > 1e-8 ? (u - o) * t[i] / s : 0) : e[r] -= t[i];
}
function Gu(e) {
  var t = e.itemTooltipOption, r = e.componentModel, n = e.itemName, i = Y(t) ? {
    formatter: t
  } : t, a = r.mainType, o = r.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = e.formatterParamsExtra;
  u && I(lt(u), function(f) {
    te(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = ut(e.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: yt({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function mh(e, t) {
  var r;
  e.isGroup && (r = t(e)), r || e.traverse(t);
}
function Vu(e, t) {
  if (e)
    if (W(e))
      for (var r = 0; r < e.length; r++)
        mh(e[r], t);
    else
      mh(e, t);
}
function Xv(e) {
  return !e || Ot(e[1]) < Uo && Ot(e[2]) < Uo || Ot(e[0]) < Uo && Ot(e[3]) < Uo;
}
var Uo = 1e-5;
function Za(e, t) {
  return e ? tt.copy(e, t) : t.clone();
}
function $v(e, t) {
  return t ? mv(e || ar(), t) : void 0;
}
function G0(e) {
  return {
    z: e.get("z") || 0,
    zlevel: e.get("zlevel") || 0
  };
}
function MC(e) {
  var t = -1 / 0, r = 1 / 0;
  mh(e, function(a) {
    n(a), n(a.getTextContent()), n(a.getTextGuideLine());
  });
  function n(a) {
    if (!(!a || a.isGroup)) {
      var o = a.currentStates;
      if (o.length)
        for (var s = 0; s < o.length; s++)
          i(a.states[o[s]]);
      i(a);
    }
  }
  function i(a) {
    if (a) {
      var o = a.z2;
      o > t && (t = o), o < r && (r = o);
    }
  }
  return r > t && (r = t = 0), {
    min: r,
    max: t
  };
}
function V0(e, t, r) {
  H0(e, t, r, -1 / 0);
}
function H0(e, t, r, n) {
  if (e.ignoreModelZ)
    return n;
  var i = e.getTextContent(), a = e.getTextGuideLine(), o = e.isGroup;
  if (o)
    for (var s = e.childrenRef(), u = 0; u < s.length; u++)
      n = ht(H0(s[u], t, r, n), n);
  else
    e.z = t, e.zlevel = r, n = ht(e.z2 || 0, n);
  if (i && (i.z = t, i.zlevel = r, isFinite(n) && (i.z2 = n + 2)), a) {
    var l = e.textGuideLineConfig;
    a.z = t, a.zlevel = r, isFinite(n) && (a.z2 = n + (l && l.showAbove ? 1 : -1));
  }
  return n;
}
function IC(e) {
  return e.animation = {
    duration: 0
  }, e;
}
function LC(e, t) {
  return t ? mv(ma.transform, t) : oo(ma.transform), ma.decomposeTransform(), Va(e, ma), e;
}
var ma = new lo();
ma.transform = ar();
function PC(e) {
  var t = e.getZr().painter;
  return t.getType() === "canvas" ? t : null;
}
Xe("circle", Fu);
Xe("ellipse", Nv);
Xe("sector", en);
Xe("ring", Bv);
Xe("polygon", Fv);
Xe("polyline", go);
Xe("rect", Lt);
Xe("line", qr);
Xe("bezierCurve", zv);
Xe("arc", zu);
const EC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: zu,
  BezierCurve: zv,
  BoundingRect: tt,
  Circle: Fu,
  CompoundPath: M0,
  Ellipse: Nv,
  Group: Ft,
  HOVER_LAYER_FOR_INCREMENTAL: Hv,
  HOVER_LAYER_FROM_THRESHOLD: O0,
  HOVER_LAYER_NO: R0,
  Image: vr,
  IncrementalDisplayable: hC,
  Line: qr,
  LinearGradient: L0,
  OrientedBoundingRect: P0,
  Path: dt,
  Point: rt,
  Polygon: Fv,
  Polyline: go,
  RadialGradient: aC,
  Rect: Lt,
  Ring: Bv,
  Sector: en,
  Text: Wt,
  WH: Oi,
  XY: kr,
  applyTransform: Wv,
  calcZ2Range: MC,
  clipPointsByRect: xC,
  clipRectByRect: CC,
  createIcon: Yv,
  decomposeTransform: LC,
  ensureCopyRect: Za,
  ensureCopyTransform: $v,
  expandOrShrinkRect: eu,
  extendPath: gC,
  extendShape: dC,
  getCurrentCanvasPainter: PC,
  getShapeClass: mC,
  getTransform: bC,
  groupTransition: F0,
  initProps: Me,
  isBoundingRectAxisAligned: Xv,
  isElementRemoved: Ia,
  lineLineIntersect: z0,
  linePolygonIntersect: DC,
  makeImage: k0,
  makePath: Uv,
  mergePath: yC,
  payloadDisableAnimation: IC,
  registerShape: Xe,
  removeElement: tu,
  removeElementWithFadeOut: La,
  resizePath: B0,
  retrieveZInfo: G0,
  setTooltipConfig: Gu,
  subPixelOptimize: SC,
  subPixelOptimizeLine: $a,
  subPixelOptimizeRect: _C,
  transformDirection: wC,
  traverseElements: Vu,
  traverseUpdateZ: V0,
  updateProps: re
}, Symbol.toStringTag, { value: "Module" }));
var Hu = {};
function RC(e, t) {
  for (var r = 0; r < Ee.length; r++) {
    var n = Ee[r], i = t[n], a = e.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = e.currentStates.slice();
  e.clearStates(!0), e.setStyle({
    text: t.normal
  }), e.useStates(o, !0);
}
function ap(e, t, r) {
  var n = e.labelFetcher, i = e.labelDataIndex, a = e.labelDimIndex, o = t.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), r != null ? {
    interpolatedValue: r
  } : null)), s == null && (s = et(e.defaultText) ? e.defaultText(i, e, r) : e.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < Ee.length; l++) {
    var f = Ee[l], h = t[f];
    u[f] = $(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function mo(e, t, r, n) {
  r = r || Hu;
  for (var i = e instanceof Wt, a = !1, o = 0; o < Zs.length; o++) {
    var s = t[Zs[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? e : e.getTextContent();
  if (a) {
    i || (u || (u = new Wt(), e.setTextContent(u)), e.stateProxy && (u.stateProxy = e.stateProxy));
    var l = ap(r, t), f = t.normal, h = !!f.getShallow("show"), c = Kr(f, n && n.normal, r, !1, !i);
    c.text = l.normal, i || e.setTextConfig(op(f, r, !1));
    for (var o = 0; o < Ee.length; o++) {
      var v = Ee[o], s = t[v];
      if (s) {
        var d = u.ensureState(v), p = !!$(s.getShallow("show"), h);
        if (p !== h && (d.ignore = !p), d.style = Kr(s, n && n[v], r, !0, !i), d.style.text = l[v], !i) {
          var g = e.ensureState(v);
          g.textConfig = op(s, r, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), r.enableTextSetter && (Uu(u).setLabelText = function(m) {
      var y = ap(r, t, m);
      RC(u, y);
    });
  } else u && (u.ignore = !0);
  e.dirty();
}
function yo(e, t) {
  t = t || "label";
  for (var r = {
    normal: e.getModel(t)
  }, n = 0; n < Ee.length; n++) {
    var i = Ee[n];
    r[i] = e.getModel([i, t]);
  }
  return r;
}
function Kr(e, t, r, n, i) {
  var a = {};
  return OC(a, e, r, n, i), t && N(a, t), a;
}
function op(e, t, r) {
  t = t || {};
  var n = {}, i, a = e.getShallow("rotate"), o = $(e.getShallow("distance"), r ? null : 5), s = e.getShallow("offset");
  return i = e.getShallow("position") || (r ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", t.autoOverflowArea != null && (n.autoOverflowArea = t.autoOverflowArea), t.layoutRect != null && (n.layoutRect = t.layoutRect), n;
}
function OC(e, t, r, n, i) {
  r = r || Hu;
  var a = t.ecModel, o = a && a.option.textStyle, s = kC(t), u;
  if (s) {
    u = {};
    var l = "richInheritPlainLabel", f = $(t.get(l), a ? a.get(l) : void 0);
    for (var h in s)
      if (s.hasOwnProperty(h)) {
        var c = t.getModel(["rich", h]);
        fp(u[h] = {}, c, o, t, f, r, n, i, !1, !0);
      }
  }
  u && (e.rich = u);
  var v = t.get("overflow");
  v && (e.overflow = v);
  var d = t.get("lineOverflow");
  d && (e.lineOverflow = d);
  var p = e, g = t.get("minMargin");
  if (g != null)
    g = mt(g) ? g / 2 : 0, p.margin = [g, g, g, g], p.__marginType = bi.minMargin;
  else {
    var m = t.get("textMargin");
    m != null && (p.margin = dv(m), p.__marginType = bi.textMargin);
  }
  fp(e, t, o, null, null, r, n, i, !0, !1);
}
function kC(e) {
  for (var t; e && e !== e.ecModel; ) {
    var r = (e.option || Hu).rich;
    if (r) {
      t = t || {};
      for (var n = lt(r), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    e = e.parentModel;
  }
  return t;
}
var sp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], up = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], lp = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function fp(e, t, r, n, i, a, o, s, u, l) {
  r = !o && r || Hu;
  var f = a && a.inheritColor, h = t.getShallow("color"), c = t.getShallow("textBorderColor"), v = $(t.getShallow("opacity"), r.opacity);
  (h === "inherit" || h === "auto") && (f ? h = f : h = null), (c === "inherit" || c === "auto") && (f ? c = f : c = null), s || (h = h || r.color, c = c || r.textBorderColor), h != null && (e.fill = h), c != null && (e.stroke = c);
  var d = $(t.getShallow("textBorderWidth"), r.textBorderWidth);
  d != null && (e.lineWidth = d);
  var p = $(t.getShallow("textBorderType"), r.textBorderType);
  p != null && (e.lineDash = p);
  var g = $(t.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
  g != null && (e.lineDashOffset = g), !o && v == null && !l && (v = a && a.defaultOpacity), v != null && (e.opacity = v), !o && !s && e.fill == null && a.inheritColor && (e.fill = a.inheritColor);
  for (var m = 0; m < sp.length; m++) {
    var y = sp[m], _ = i !== !1 && n ? Nn(t.getShallow(y), n.getShallow(y), r[y]) : $(t.getShallow(y), r[y]);
    _ != null && (e[y] = _);
  }
  for (var m = 0; m < up.length; m++) {
    var y = up[m], _ = t.getShallow(y);
    _ != null && (e[y] = _);
  }
  if (e.verticalAlign == null) {
    var S = t.getShallow("baseline");
    S != null && (e.verticalAlign = S);
  }
  if (!u || !a.disableBox) {
    for (var m = 0; m < lp.length; m++) {
      var y = lp[m], _ = t.getShallow(y);
      _ != null && (e[y] = _);
    }
    var b = t.getShallow("borderType");
    b != null && (e.borderDash = b), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && f && (e.backgroundColor = f), (e.borderColor === "auto" || e.borderColor === "inherit") && f && (e.borderColor = f);
  }
}
function NC(e, t) {
  var r = t && t.getModel("textStyle");
  return nr([
    // FIXME in node-canvas fontWeight is before fontStyle
    e.fontStyle || r && r.getShallow("fontStyle") || "",
    e.fontWeight || r && r.getShallow("fontWeight") || "",
    (e.fontSize || r && r.getShallow("fontSize") || 12) + "px",
    e.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Uu = _t();
function BC(e, t, r, n) {
  if (e) {
    var i = Uu(e);
    i.prevValue = i.value, i.value = r;
    var a = t.normal;
    i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
  }
}
var bi = {
  minMargin: 1,
  textMargin: 2
}, FC = ["textStyle", "color"], Bl = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Fl = new Wt(), zC = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTextColor = function(t) {
      var r = this.ecModel;
      return this.getShallow("color") || (!t && r ? r.get(FC) : null);
    }, e.prototype.getFont = function() {
      return NC({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, e.prototype.getTextRect = function(t) {
      for (var r = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < Bl.length; n++)
        r[Bl[n]] = this.getShallow(Bl[n]);
      return Fl.useStyle(r), Fl.update(), Fl.getBoundingRect();
    }, e;
  }()
), U0 = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], GC = Ga(U0), VC = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getLineStyle = function(t) {
      return GC(this, t);
    }, e;
  }()
), W0 = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], HC = Ga(W0), UC = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getItemStyle = function(t, r) {
      return HC(this, t, r);
    }, e;
  }()
), Ct = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.parentModel = r, this.ecModel = n, this.option = t;
    }
    return e.prototype.init = function(t, r, n) {
    }, e.prototype.mergeOption = function(t, r) {
      gt(this.option, t, !0);
    }, e.prototype.get = function(t, r) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !r && this.parentModel);
    }, e.prototype.getShallow = function(t, r) {
      var n = this.option, i = n == null ? n : n[t];
      if (i == null && !r) {
        var a = this.parentModel;
        a && (i = a.getShallow(t));
      }
      return i;
    }, e.prototype.getModel = function(t, r) {
      var n = t != null, i = n ? this.parsePath(t) : null, a = n ? this._doGet(i) : this.option;
      return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new e(a, r, this.ecModel);
    }, e.prototype.isEmpty = function() {
      return this.option == null;
    }, e.prototype.restoreData = function() {
    }, e.prototype.clone = function() {
      var t = this.constructor;
      return new t(ot(this.option));
    }, e.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, e.prototype.resolveParentPath = function(t) {
      return t;
    }, e.prototype.isAnimationEnabled = function() {
      if (!nt.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, e.prototype._doGet = function(t, r) {
      var n = this.option;
      if (!t)
        return n;
      for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++)
        ;
      return n == null && r && (n = r._doGet(this.resolveParentPath(t), r.parentModel)), n;
    }, e;
  }()
);
pv(Ct);
Zb(Ct);
fr(Ct, VC);
fr(Ct, UC);
fr(Ct, Jb);
fr(Ct, zC);
function ji(e) {
  return e == null ? 0 : e.length || 1;
}
function hp(e) {
  return e;
}
var WC = (
  /** @class */
  function() {
    function e(t, r, n, i, a, o) {
      this._old = t, this._new = r, this._oldKeyGetter = n || hp, this._newKeyGetter = i || hp, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return e.prototype.add = function(t) {
      return this._add = t, this;
    }, e.prototype.update = function(t) {
      return this._update = t, this;
    }, e.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, e.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, e.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, e.prototype.remove = function(t) {
      return this._remove = t, this;
    }, e.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, e.prototype._executeOneToOne = function() {
      var t = this._old, r = this._new, n = {}, i = new Array(t.length), a = new Array(r.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(r, n, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = i[o], u = n[s], l = ji(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, e.prototype._executeMultiple = function() {
      var t = this._old, r = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(r, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = n[u], f = i[u], h = ji(l), c = ji(f);
        if (h > 1 && c === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
        else if (h === 1 && c > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
        else if (h === 1 && c === 1)
          this._update && this._update(f, l), i[u] = null;
        else if (h > 1 && c > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
        else if (h > 1)
          for (var v = 0; v < h; v++)
            this._remove && this._remove(l[v]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }, e.prototype._performRestAdd = function(t, r) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n], a = r[i], o = ji(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        r[i] = null;
      }
    }, e.prototype._initIndexMap = function(t, r, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[i](t[o], o);
        if (a || (n[o] = s), !!r) {
          var u = r[s], l = ji(u);
          l === 0 ? (r[s] = o, a && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o);
        }
      }
    }, e;
  }()
), zt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, Y0 = _t();
function YC(e) {
  Y0(e).datasetMap = j();
}
function XC(e, t, r) {
  var n = {}, i = Zv(t);
  if (!i || !e)
    return n;
  var a = [], o = [], s = t.ecModel, u = Y0(s).datasetMap, l = i.uid + "_" + r.seriesLayoutBy, f, h;
  e = e.slice(), I(e, function(p, g) {
    var m = K(p) ? p : e[g] = {
      name: p
    };
    m.type === "ordinal" && f == null && (f = g, h = d(m)), n[m.name] = [];
  });
  var c = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  I(e, function(p, g) {
    var m = p.name, y = d(p);
    if (f == null) {
      var _ = c.valueWayDim;
      v(n[m], _, y), v(o, _, y), c.valueWayDim += y;
    } else if (f === g)
      v(n[m], 0, y), v(a, 0, y);
    else {
      var _ = c.categoryWayDim;
      v(n[m], _, y), v(o, _, y), c.categoryWayDim += y;
    }
  });
  function v(p, g, m) {
    for (var y = 0; y < m; y++)
      p.push(g + y);
  }
  function d(p) {
    var g = p.dimsDef;
    return g ? g.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function $C(e, t, r) {
  var n = {}, i = Zv(e);
  if (!i)
    return n;
  var a = t.sourceFormat, o = t.dimensionsDefine, s;
  (a === Re || a === Ye) && I(o, function(f, h) {
    (K(f) ? f.name : f) === "name" && (s = h);
  });
  var u = function() {
    for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, r); v < d; v++) {
      var p = $0(t.data, a, t.seriesLayoutBy, o, t.startIndex, v);
      c.push(p);
      var g = p === zt.Not;
      if (g && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !g && c[f.n] === zt.Not) && (f.n = v), m(f) && c[f.n] !== zt.Not)
        return f;
      g || (p === zt.Might && h.v == null && v !== s && (h.v = v), (h.n == null || h.n === h.v) && (h.n = v));
    }
    function m(y) {
      return y.v != null && y.n != null;
    }
    return m(f) ? f : m(h) ? h : null;
  }();
  if (u) {
    n.value = [u.v];
    var l = s ?? u.n;
    n.itemName = [l], n.seriesName = [l];
  }
  return n;
}
function Zv(e) {
  var t = e.get("data", !0);
  if (!t)
    return po(e.ecModel, "dataset", {
      index: e.get("datasetIndex", !0),
      id: e.get("datasetId", !0)
    }, xe).models[0];
}
function ZC(e) {
  return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : po(e.ecModel, "dataset", {
    index: e.get("fromDatasetIndex", !0),
    id: e.get("fromDatasetId", !0)
  }, xe).models;
}
function X0(e, t) {
  return $0(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t);
}
function $0(e, t, r, n, i, a) {
  var o, s = 5;
  if (fe(e))
    return zt.Not;
  var u, l;
  if (n) {
    var f = n[a];
    K(f) ? (u = f.name, l = f.type) : Y(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? zt.Must : zt.Not;
  if (t === qt) {
    var h = e;
    if (r === Zn) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = S(c[i + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[i + v];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (t === Re) {
    var p = e;
    if (!u)
      return zt.Not;
    for (var v = 0; v < p.length && v < s; v++) {
      var g = p[v];
      if (g && (o = S(g[u])) != null)
        return o;
    }
  } else if (t === Ye) {
    var m = e;
    if (!u)
      return zt.Not;
    var c = m[u];
    if (!c || fe(c))
      return zt.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = S(c[v])) != null)
        return o;
  } else if (t === ce)
    for (var y = e, v = 0; v < y.length && v < s; v++) {
      var g = y[v], _ = co(g);
      if (!W(_))
        return zt.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(b) {
    var w = Y(b);
    if (b != null && isFinite(Number(b)) && b !== "")
      return w ? zt.Might : zt.Not;
    if (w && b !== "-")
      return zt.Must;
  }
  return zt.Not;
}
var Wu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.data = t.data || (t.sourceFormat === Ye ? {} : []), this.sourceFormat = t.sourceFormat || h0, this.seriesLayoutBy = t.seriesLayoutBy || lr, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var r = this.dimensionsDefine = t.dimensionsDefine;
      if (r)
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          i.type == null && X0(this, n) === zt.Must && (i.type = "ordinal");
        }
    }
    return e;
  }()
);
function qv(e) {
  return e instanceof Wu;
}
function yh(e, t, r) {
  r = r || q0(e);
  var n = t.seriesLayoutBy, i = KC(e, r, n, t.sourceHeader, t.dimensions), a = new Wu({
    data: e,
    sourceFormat: r,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: ot(t)
  });
  return a;
}
function Z0(e) {
  return new Wu({
    data: e,
    sourceFormat: fe(e) ? Wr : ce
  });
}
function qC(e) {
  return new Wu({
    data: e.data,
    sourceFormat: e.sourceFormat,
    seriesLayoutBy: e.seriesLayoutBy,
    dimensionsDefine: ot(e.dimensionsDefine),
    startIndex: e.startIndex,
    dimensionsDetectedCount: e.dimensionsDetectedCount
  });
}
function q0(e) {
  var t = h0;
  if (fe(e))
    t = Wr;
  else if (W(e)) {
    e.length === 0 && (t = qt);
    for (var r = 0, n = e.length; r < n; r++) {
      var i = e[r];
      if (i != null) {
        if (W(i) || fe(i)) {
          t = qt;
          break;
        } else if (K(i)) {
          t = Re;
          break;
        }
      }
    }
  } else if (K(e)) {
    for (var a in e)
      if (te(e, a) && le(e[a])) {
        t = Ye;
        break;
      }
  }
  return t;
}
function KC(e, t, r, n, i) {
  var a, o;
  if (!e)
    return {
      dimensionsDefine: vp(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === qt) {
    var s = e;
    n === "auto" || n == null ? cp(function(l) {
      l != null && l !== "-" && (Y(l) ? o == null && (o = 1) : o = 0);
    }, r, s, 10) : o = mt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], cp(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, r, s, 1 / 0)), a = i ? i.length : r === Zn ? s.length : s[0] ? s[0].length : null;
  } else if (t === Re)
    i || (i = QC(e));
  else if (t === Ye)
    i || (i = [], I(e, function(l, f) {
      i.push(f);
    }));
  else if (t === ce) {
    var u = co(e[0]);
    a = W(u) && u.length || 1;
  }
  return {
    startIndex: o,
    dimensionsDefine: vp(i),
    dimensionsDetectedCount: a
  };
}
function QC(e) {
  for (var t = 0, r; t < e.length && !(r = e[t++]); )
    ;
  if (r)
    return lt(r);
}
function vp(e) {
  if (e) {
    var t = j();
    return Z(e, function(r, n) {
      r = K(r) ? r : {
        name: r
      };
      var i = {
        name: r.name,
        displayName: r.displayName,
        type: r.type
      };
      if (i.name == null)
        return i;
      i.name += "", i.displayName == null && (i.displayName = i.name);
      var a = t.get(i.name);
      return a ? i.name += "-" + a.count++ : t.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function cp(e, t, r, n) {
  if (t === Zn)
    for (var i = 0; i < r.length && i < n; i++)
      e(r[i] ? r[i][0] : null, i);
  else
    for (var a = r[0] || [], i = 0; i < a.length && i < n; i++)
      e(a[i], i);
}
function K0(e) {
  var t = e.sourceFormat;
  return t === Re || t === Ye;
}
var Sn, bn, wn, Tn, dp, pp, Q0 = (
  /** @class */
  function() {
    function e(t, r) {
      var n = qv(t) ? t : Z0(t);
      this._source = n;
      var i = this._data = n.data, a = n.sourceFormat;
      n.seriesLayoutBy, a === Wr && (this._offset = 0, this._dimSize = r, this._data = i), pp(this, i, n);
    }
    return e.prototype.getSource = function() {
      return this._source;
    }, e.prototype.count = function() {
      return 0;
    }, e.prototype.getItem = function(t, r) {
    }, e.prototype.appendData = function(t) {
    }, e.prototype.clean = function() {
    }, e.protoInitialize = function() {
      var t = e.prototype;
      t.pure = !1, t.persistent = !0;
    }(), e.internalField = function() {
      var t;
      pp = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = dp[Kv(l, f)];
        if (N(o, v), l === Wr)
          o.getItem = r, o.count = i, o.fillStorage = n;
        else {
          var d = j0(l, f);
          o.getItem = St(d, null, s, h, c);
          var p = J0(l, f);
          o.count = St(p, null, s, h, c);
        }
      };
      var r = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
          for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], p = v[1] == null ? -1 / 0 : v[1], g = s - o, m = u[c], y = 0; y < g; y++) {
            var _ = f[y * h + c];
            m[o + y] = _, _ < d && (d = _), _ > p && (p = _);
          }
          v[0] = d, v[1] = p;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      dp = (t = {}, t[qt + "_" + lr] = {
        pure: !0,
        appendData: a
      }, t[qt + "_" + Zn] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Re] = {
        pure: !0,
        appendData: a
      }, t[Ye] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          I(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[ce] = {
        appendData: a
      }, t[Wr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    }(), e;
  }()
), Wo = function(e) {
  W(e) || e0("series.data or dataset.source must be an array.");
};
Sn = {}, Sn[qt + "_" + lr] = Wo, Sn[qt + "_" + Zn] = Wo, Sn[Re] = Wo, Sn[Ye] = function(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r].name;
    n == null && e0("dimension name must not be null/undefined.");
  }
}, Sn[ce] = Wo;
var gp = function(e, t, r, n) {
  return e[n];
}, jC = (bn = {}, bn[qt + "_" + lr] = function(e, t, r, n) {
  return e[n + t];
}, bn[qt + "_" + Zn] = function(e, t, r, n, i) {
  n += t;
  for (var a = i || [], o = e, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, bn[Re] = gp, bn[Ye] = function(e, t, r, n, i) {
  for (var a = i || [], o = 0; o < r.length; o++) {
    var s = r[o].name, u = s != null ? e[s] : null;
    a[o] = u ? u[n] : null;
  }
  return a;
}, bn[ce] = gp, bn);
function j0(e, t) {
  var r = jC[Kv(e, t)];
  return r;
}
var mp = function(e, t, r) {
  return e.length;
}, JC = (wn = {}, wn[qt + "_" + lr] = function(e, t, r) {
  return Math.max(0, e.length - t);
}, wn[qt + "_" + Zn] = function(e, t, r) {
  var n = e[0];
  return n ? Math.max(0, n.length - t) : 0;
}, wn[Re] = mp, wn[Ye] = function(e, t, r) {
  var n = r[0].name, i = n != null ? e[n] : null;
  return i ? i.length : 0;
}, wn[ce] = mp, wn);
function J0(e, t) {
  var r = JC[Kv(e, t)];
  return r;
}
var zl = function(e, t, r) {
  return e[t];
}, tD = (Tn = {}, Tn[qt] = zl, Tn[Re] = function(e, t, r) {
  return e[r];
}, Tn[Ye] = zl, Tn[ce] = function(e, t, r) {
  var n = co(e);
  return n instanceof Array ? n[t] : n;
}, Tn[Wr] = zl, Tn);
function t_(e) {
  var t = tD[e];
  return t;
}
function Kv(e, t) {
  return e === qt ? e + "_" + t : e;
}
function ki(e, t, r) {
  if (e) {
    var n = e.getRawDataItem(t);
    if (n != null) {
      var i = e.getStore(), a = i.getSource().sourceFormat;
      if (r != null) {
        var o = e.getDimensionIndex(r), s = i.getDimensionProperty(o);
        return t_(a)(n, o, s);
      } else {
        var u = n;
        return a === ce && (u = co(n)), u;
      }
    }
  }
}
var eD = (
  /** @class */
  function() {
    function e(t, r) {
      this._encode = t, this._schema = r;
    }
    return e.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, e.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, e;
  }()
);
function rD(e, t) {
  var r = {}, n = r.encode = {}, i = j(), a = [], o = [], s = {};
  I(e.dimensions, function(c) {
    var v = e.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      var p = v.coordDimIndex;
      Gl(n, d)[p] = c, v.isExtraCoord || (i.set(d, 1), iD(v.type) && (a[0] = c), Gl(s, d)[p] = e.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    f0.each(function(g, m) {
      var y = Gl(n, m), _ = v.otherDims[m];
      _ != null && _ !== !1 && (y[_] = v.name);
    });
  });
  var u = [], l = {};
  i.each(function(c, v) {
    var d = n[v];
    l[v] = d[0], u = u.concat(d);
  }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = Z(u, function(c) {
    return e.getDimensionInfo(c).storeDimIndex;
  }), r.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, r.userOutput = new eD(s, t), r;
}
function Gl(e, t) {
  return e.hasOwnProperty(t) || (e[t] = []), e[t];
}
function nD(e) {
  return e === "category" ? "ordinal" : e === "time" ? "time" : "float";
}
function iD(e) {
  return !(e === "ordinal" || e === "time");
}
var Ts = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.otherDims = {}, t != null && N(this, t);
    }
    return e;
  }()
);
function xs(e, t) {
  var r = t && t.type;
  return r === "ordinal" ? e : (r === "time" && !mt(e) && e != null && e !== "-" && (e = +Hi(e)), e == null || e === "" ? NaN : Number(e));
}
j({
  number: function(e) {
    return parseFloat(e);
  },
  time: function(e) {
    return +Hi(e);
  },
  trim: function(e) {
    return Y(e) ? nr(e) : e;
  }
});
var aD = (
  /** @class */
  function() {
    function e(t, r) {
      var n = t === "desc";
      this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0;
    }
    return e.prototype.evaluate = function(t, r) {
      var n = mt(t) ? t : $s(t), i = mt(r) ? r : $s(r), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = Y(t), u = Y(r);
        s && (n = u ? t : 0), u && (i = s ? r : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, e;
  }()
);
function e_(e) {
  var t = "", r = -1 / 0, n = -1 / 0, i = 1 / 0, a = 1 / 0;
  return e && (e.g != null && (t += "G" + e.g, r = e.g), e.ge != null && (t += "GE" + e.ge, n = e.ge), e.l != null && (t += "L" + e.l, i = e.l), e.le != null && (t += "LE" + e.le, a = e.le)), {
    key: t,
    g: r,
    ge: n,
    l: i,
    le: a
  };
}
function r_(e, t) {
  return t > e.g && t >= e.ge && t < e.l && t <= e.le;
}
var oD = typeof Uint32Array === Ui ? Array : Uint32Array, sD = typeof Uint16Array === Ui ? Array : Uint16Array, n_ = typeof Int32Array === Ui ? Array : Int32Array, yp = typeof Float64Array === Ui ? Array : Float64Array, i_ = {
  float: yp,
  int: n_,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: yp
}, Vl;
function ai(e) {
  return e > 65535 ? oD : sD;
}
function uD(e) {
  var t = e.constructor;
  return t === Array ? e.slice() : new t(e);
}
function _p(e, t, r, n, i) {
  var a = i_[r || "float"];
  if (i) {
    var o = e[t], s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++)
        u[l] = o[l];
      e[t] = u;
    }
  } else
    e[t] = new a(n);
}
var _h = (
  /** @class */
  function() {
    function e() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = j();
    }
    return e.prototype.initData = function(t, r, n) {
      this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = t.getSource(), a = this.defaultDimValueGetter = Vl[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [], K0(i), this._dimensions = Z(r, function(o) {
        return {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: o.type,
          property: o.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, e.prototype.getProvider = function() {
      return this._provider;
    }, e.prototype.getSource = function() {
      return this._provider.getSource();
    }, e.prototype.ensureCalculationDimension = function(t, r) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(t);
      if (a != null) {
        if (i[a].type === r)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: r
      }, n.set(t, a), this._chunks[a] = new i_[r || "float"](this._rawCount), this._rawExtent[a] = Te(), a;
    }, e.prototype.collectOrdinalMeta = function(t, r) {
      var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[t] = Te());
      for (var u = a[t], l = o; l < s; l++) {
        var f = n[l] = r.parseAndCollect(n[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      i.ordinalMeta = r, i.ordinalOffset = s, i.type = "ordinal";
    }, e.prototype.getOrdinalMeta = function(t) {
      var r = this._dimensions[t], n = r.ordinalMeta;
      return n;
    }, e.prototype.getDimensionProperty = function(t) {
      var r = this._dimensions[t];
      return r && r.property;
    }, e.prototype.appendData = function(t) {
      var r = this._provider, n = this.count();
      r.appendData(t);
      var i = r.count();
      return r.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, e.prototype.appendValues = function(t, r) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, r || 0), l = 0; l < a; l++) {
        var f = i[l];
        _p(n, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = i[d], p = Vl.arrayRows.call(this, t[v] || h, f.property, v, d);
          n[d][c] = p;
          var g = o[d];
          p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, e.prototype._initDataFromProvider = function(t, r, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = Z(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = Te()), _p(a, f, h.type, r, n);
      }
      if (i.fillStorage)
        i.fillStorage(t, r, a, u);
      else
        for (var c = [], v = t; v < r; v++) {
          c = i.getItem(v, c);
          for (var d = 0; d < s; d++) {
            var p = a[d], g = this._dimValueGetter(c, l[d], v, d);
            p[v] = g;
            var m = u[d];
            g < m[0] && (m[0] = g), g > m[1] && (m[1] = g);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = r, this._extent = [];
    }, e.prototype.count = function() {
      return this._count;
    }, e.prototype.get = function(t, r) {
      if (!(r >= 0 && r < this._count))
        return NaN;
      var n = this._chunks[t];
      return n ? n[this.getRawIndex(r)] : NaN;
    }, e.prototype.getValues = function(t, r) {
      var n = [], i = [];
      if (r == null) {
        r = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = t;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], r));
      return n;
    }, e.prototype.getByRawIndex = function(t, r) {
      if (!(r >= 0 && r < this._rawCount))
        return NaN;
      var n = this._chunks[t];
      return n ? n[r] : NaN;
    }, e.prototype.getSum = function(t) {
      var r = this._chunks[t], n = 0;
      if (r)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(t, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, e.prototype.getMedian = function(t) {
      var r = [];
      this.each([t], function(i) {
        isNaN(i) || r.push(i);
      }), Tv(r);
      var n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? r[(n - 1) / 2] : (r[n / 2] + r[n / 2 - 1]) / 2;
    }, e.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var r = this._indices, n = r[t];
      if (n != null && n < this._count && n === t)
        return t;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (r[o] < t)
          i = o + 1;
        else if (r[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, e.prototype.getIndices = function() {
      var t, r = this._indices;
      if (r) {
        var n = r.constructor, i = this._count;
        if (n === Array) {
          t = new n(i);
          for (var a = 0; a < i; a++)
            t[a] = r[a];
        } else
          t = new n(r.buffer, 0, i);
      } else {
        var n = ai(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, e.prototype.filter = function(t, r) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = ai(n._rawCount), o = new a(i), s = [], u = t.length, l = 0, f = t[0], h = n._chunks, c = 0; c < i; c++) {
        var v = void 0, d = n.getRawIndex(c);
        if (u === 0)
          v = r(c);
        else if (u === 1) {
          var p = h[f][d];
          v = r(p, c);
        } else {
          for (var g = 0; g < u; g++)
            s[g] = h[t[g]][d];
          s[g] = c, v = r.apply(null, s);
        }
        v && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, e.prototype.selectRange = function(t) {
      var r = this.clone(), n = r._count;
      if (!n)
        return this;
      var i = lt(t), a = i.length;
      if (!a)
        return this;
      var o = r.count(), s = ai(r._rawCount), u = new s(o), l = 0, f = i[0], h = t[f][0], c = t[f][1], v = r._chunks, d = !1;
      if (!r._indices) {
        var p = 0;
        if (a === 1) {
          for (var g = v[i[0]], m = 0; m < n; m++) {
            var y = g[m];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = p), p++;
          }
          d = !0;
        } else if (a === 2) {
          for (var g = v[i[0]], _ = v[i[1]], S = t[i[1]][0], b = t[i[1]][1], m = 0; m < n; m++) {
            var y = g[m], w = _[m];
            (y >= h && y <= c || isNaN(y)) && (w >= S && w <= b || isNaN(w)) && (u[l++] = p), p++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var m = 0; m < o; m++) {
            var T = r.getRawIndex(m), y = v[i[0]][T];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = T);
          }
        else
          for (var m = 0; m < o; m++) {
            for (var x = !0, T = r.getRawIndex(m), D = 0; D < a; D++) {
              var C = i[D], y = v[C][T];
              (y < t[C][0] || y > t[C][1]) && (x = !1);
            }
            x && (u[l++] = r.getRawIndex(m));
          }
      return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r;
    }, e.prototype.map = function(t, r) {
      var n = this.clone(t);
      return this._updateDims(n, t, r), n;
    }, e.prototype.modify = function(t, r) {
      this._updateDims(this, t, r);
    }, e.prototype._updateDims = function(t, r, n) {
      for (var i = t._chunks, a = [], o = r.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < r.length; f++)
        l[r[f]] = Te();
      for (var h = 0; h < s; h++) {
        for (var c = t.getRawIndex(h), v = 0; v < o; v++)
          u[v] = i[r[v]][c];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var p = r[f], g = d[f], m = l[p], y = i[p];
            y && (y[c] = g), g < m[0] && (m[0] = g), g > m[1] && (m[1] = g);
          }
        }
      }
    }, e.prototype.lttbDownSample = function(t, r) {
      var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, u = Math.floor(1 / r), l = this.getRawIndex(0), f, h, c, v = new (ai(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var p = Math.min(d + u, o - 1), g = Math.min(d + u * 2, o), m = (g + p) / 2, y = 0, _ = p; _ < g; _++) {
          var S = this.getRawIndex(_), b = a[S];
          isNaN(b) || (y += b);
        }
        y /= g - p;
        var w = d, T = Math.min(d + u, o), x = d - 1, D = a[l];
        f = -1, c = w;
        for (var C = -1, A = 0, _ = w; _ < T; _++) {
          var S = this.getRawIndex(_), b = a[S];
          if (isNaN(b)) {
            A++, C < 0 && (C = S);
            continue;
          }
          h = Math.abs((x - m) * (b - D) - (x - _) * (y - D)), h > f && (f = h, c = S);
        }
        A > 0 && A < T - w && (v[s++] = Math.min(C, c), c = Math.max(C, c)), v[s++] = c, l = c;
      }
      return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n;
    }, e.prototype.minmaxDownSample = function(t, r) {
      for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / r), o = i[t], s = this.count(), u = new (ai(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, c = o[this.getRawIndex(h)], v = f, d = o[this.getRawIndex(v)], p = a;
        f + a > s && (p = s - f);
        for (var g = 0; g < p; g++) {
          var m = this.getRawIndex(f + g), y = o[m];
          y < c && (c = y, h = f + g), y > d && (d = y, v = f + g);
        }
        var _ = this.getRawIndex(h), S = this.getRawIndex(v);
        h < v ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, e.prototype.downSample = function(t, r, n, i) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[t], f = this.count(), h = a._rawExtent[t] = Te(), c = new (ai(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var p = 0; p < u; p++) {
          var g = this.getRawIndex(d + p);
          s[p] = l[g];
        }
        var m = n(s), y = this.getRawIndex(Math.min(d + i(s, m) || 0, f - 1));
        l[y] = m, m < h[0] && (h[0] = m), m > h[1] && (h[1] = m), c[v++] = y;
      }
      return a._count = v, a._indices = c, a._updateGetRawIdx(), a;
    }, e.prototype.each = function(t, r) {
      if (this._count)
        for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              r(a);
              break;
            case 1:
              r(i[t[0]][s], a);
              break;
            case 2:
              r(i[t[0]][s], i[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++)
                l[u] = i[t[u]][s];
              l[u] = a, r.apply(null, l);
          }
        }
    }, e.prototype.getDataExtent = function(t, r) {
      var n = this._chunks[t], i = Te();
      if (!n)
        return i;
      var a = this.count(), o = !this._indices && !r;
      if (o)
        return this._rawExtent[t].slice();
      var s = this._extent, u = s[t] || (s[t] = {}), l = e_(r), f = l.key, h = u[f];
      if (h)
        return h.slice();
      for (var c = i[0], v = i[1], d = 0; d < a; d++) {
        var p = this.getRawIndex(d), g = n[p];
        (!r || r_(l, g)) && (g < c && (c = g), g > v && (v = g));
      }
      return u[f] = [c, v];
    }, e.prototype.getRawDataItem = function(t) {
      var r = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(r);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][r]);
      return n;
    }, e.prototype.clone = function(t, r) {
      var n = new e(), i = this._chunks, a = t && $r(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? uD(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, e.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = ot(this._extent), t._rawExtent = ot(this._rawExtent);
    }, e.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, r = void 0;
        if (t === Array) {
          var n = this._indices.length;
          r = new t(n);
          for (var i = 0; i < n; i++)
            r[i] = this._indices[i];
        } else
          r = new t(this._indices);
        return r;
      }
      return null;
    }, e.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, e.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, e.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, e.internalField = function() {
      function t(r, n, i, a) {
        return xs(r[a], this._dimensions[a]);
      }
      Vl = {
        arrayRows: t,
        objectRows: function(r, n, i, a) {
          return xs(r[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(r, n, i, a) {
          var o = r && (r.value == null ? r : r.value);
          return xs(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(r, n, i, a) {
          return r[a];
        }
      };
    }(), e;
  }()
), lD = _t(), fD = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, a_ = (
  /** @class */
  function() {
    function e(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return e.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, e.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = s_(this.source)));
    }, e.prototype.getSourceDimensionIndex = function(t) {
      return $(this._dimNameMap.get(t), -1);
    }, e.prototype.getSourceDimension = function(t) {
      var r = this.source.dimensionsDefine;
      if (r)
        return r[t];
    }, e.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, r = K0(this.source), n = !u_(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = r ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var c = this.getSourceDimension(o);
          c && (u = r ? c.name : null, l = c.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), r && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += fD[l] || "f", f && (i += f.uid), i += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, e.prototype.makeOutputDimensionNames = function() {
      for (var t = [], r = 0, n = 0; r < this._fullDimCount; r++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === r)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(r);
          o && (i = o.name);
        }
        t.push(i);
      }
      return t;
    }, e.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, e;
  }()
);
function o_(e) {
  return e instanceof a_;
}
function Qv(e) {
  for (var t = j(), r = 0; r < (e || []).length; r++) {
    var n = e[r], i = K(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, r);
  }
  return t;
}
function s_(e) {
  var t = lD(e);
  return t.dimNameMap || (t.dimNameMap = Qv(e.dimensionsDefine));
}
function u_(e) {
  return e > 30;
}
var Ji = K, Ar = Z, hD = typeof Int32Array > "u" ? Array : Int32Array, vD = "e\0\0", Sp = -1, cD = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], dD = ["_approximateExtent"], bp, Yo, ta, ea, Hl, ra, Ul, l_ = (
  /** @class */
  function() {
    function e(t, r) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      o_(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var h = n[f], c = Y(h) ? new Ts({
          name: h
        }) : h instanceof Ts ? h : new Ts(h), v = c.name;
        c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
        var d = c.otherDims = c.otherDims || {};
        o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), i && (c.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = c.storeDimIndex), d.itemId === 0 && (this._idDimIdx = c.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
        var p = this._dimIdxToName = j();
        I(o, function(g) {
          p.set(a[g].storeDimIndex, g);
        });
      }
    }
    return e.prototype.getDimension = function(t) {
      var r = this._recognizeDimIndex(t);
      if (r == null)
        return t;
      if (r = t, !this._dimOmitted)
        return this.dimensions[r];
      var n = this._dimIdxToName.get(r);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(r);
      if (i)
        return i.name;
    }, e.prototype.getDimensionIndex = function(t) {
      var r = this._recognizeDimIndex(t);
      if (r != null)
        return r;
      if (t == null)
        return -1;
      var n = this._getDimInfo(t);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, e.prototype._recognizeDimIndex = function(t) {
      if (mt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, e.prototype._getStoreDimIndex = function(t) {
      var r = this.getDimensionIndex(t);
      return r;
    }, e.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, e.prototype._initGetDimensionInfo = function(t) {
      var r = this._dimInfos;
      this._getDimInfo = t ? function(n) {
        return r.hasOwnProperty(n) ? r[n] : void 0;
      } : function(n) {
        return r[n];
      };
    }, e.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, e.prototype.mapDimension = function(t, r) {
      var n = this._dimSummary;
      if (r == null)
        return n.encodeFirstDimNotExtra[t];
      var i = n.encode[t];
      return i ? i[r] : null;
    }, e.prototype.mapDimensionsAll = function(t) {
      var r = this._dimSummary, n = r.encode[t];
      return (n || []).slice();
    }, e.prototype.getStore = function() {
      return this._store;
    }, e.prototype.initData = function(t, r, n) {
      var i = this, a;
      if (t instanceof _h && (a = t), !a) {
        var o = this.dimensions, s = qv(t) || le(t) ? new Q0(t, o.length) : t;
        a = new _h();
        var u = Ar(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = rD(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, e.prototype.appendData = function(t) {
      var r = this._store.appendData(t);
      this._doInit(r[0], r[1]);
    }, e.prototype.appendValues = function(t, r) {
      var n = this._store.appendValues(t, r && r.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), r)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = r[u], o && Ul(this, s);
        }
    }, e.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
        var i = this._dimInfos[r[n]];
        i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, e.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== Wr && !t.fillStorage;
    }, e.prototype._doInit = function(t, r) {
      if (!(t >= r)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === ce;
        if (u && !i.pure)
          for (var l = [], f = t; f < r; f++) {
            var h = i.getItem(f, l);
            if (!this.hasItemOption && HT(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = ur(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = ur(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < r; f++)
            Ul(this, f);
        bp(this);
      }
    }, e.prototype.getApproximateExtent = function(t, r) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t), r);
    }, e.prototype.setApproximateExtent = function(t, r) {
      r = this.getDimension(r), this._approximateExtent[r] = t.slice();
    }, e.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, e.prototype.setCalculationInfo = function(t, r) {
      Ji(t) ? N(this._calculationInfo, t) : this._calculationInfo[t] = r;
    }, e.prototype.getName = function(t) {
      var r = this.getRawIndex(t), n = this._nameList[r];
      return n == null && this._nameDimIdx != null && (n = ta(this, this._nameDimIdx, r)), n == null && (n = ""), n;
    }, e.prototype._getCategory = function(t, r) {
      var n = this._store.get(t, r), i = this._store.getOrdinalMeta(t);
      return i ? i.categories[n] : n;
    }, e.prototype.getId = function(t) {
      return Yo(this, this.getRawIndex(t));
    }, e.prototype.count = function() {
      return this._store.count();
    }, e.prototype.get = function(t, r) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.get(i.storeDimIndex, r);
    }, e.prototype.getByRawIndex = function(t, r) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, r);
    }, e.prototype.getIndices = function() {
      return this._store.getIndices();
    }, e.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t), null);
    }, e.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, e.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, e.prototype.getValues = function(t, r) {
      var n = this, i = this._store;
      return W(t) ? i.getValues(Ar(t, function(a) {
        return n._getStoreDimIndex(a);
      }), r) : i.getValues(t);
    }, e.prototype.hasValue = function(t) {
      for (var r = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = r.length; n < i; n++)
        if (isNaN(this._store.get(r[n], t)))
          return !1;
      return !0;
    }, e.prototype.indexOfName = function(t) {
      for (var r = 0, n = this._store.count(); r < n; r++)
        if (this.getName(r) === t)
          return r;
      return -1;
    }, e.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, e.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, e.prototype.rawIndexOf = function(t, r) {
      var n = t && this._invertedIndicesMap[t], i = n && n[r];
      return i == null || isNaN(i) ? Sp : i;
    }, e.prototype.each = function(t, r, n) {
      et(t) && (n = r, r = t, t = []);
      var i = n || this, a = Ar(ea(t), this._getStoreDimIndex, this);
      this._store.each(a, i ? St(r, i) : r);
    }, e.prototype.filterSelf = function(t, r, n) {
      et(t) && (n = r, r = t, t = []);
      var i = n || this, a = Ar(ea(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? St(r, i) : r), this;
    }, e.prototype.selectRange = function(t) {
      var r = this, n = {}, i = lt(t);
      return I(i, function(a) {
        var o = r._getStoreDimIndex(a);
        n[o] = t[a];
      }), this._store = this._store.selectRange(n), this;
    }, e.prototype.mapArray = function(t, r, n) {
      et(t) && (n = r, r = t, t = []), n = n || this;
      var i = [];
      return this.each(t, function() {
        i.push(r && r.apply(this, arguments));
      }, n), i;
    }, e.prototype.map = function(t, r, n, i) {
      var a = n || i || this, o = Ar(ea(t), this._getStoreDimIndex, this), s = ra(this);
      return s._store = this._store.map(o, a ? St(r, a) : r), s;
    }, e.prototype.modify = function(t, r, n, i) {
      var a = n || i || this, o = Ar(ea(t), this._getStoreDimIndex, this);
      this._store.modify(o, a ? St(r, a) : r);
    }, e.prototype.downSample = function(t, r, n, i) {
      var a = ra(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), r, n, i), a;
    }, e.prototype.minmaxDownSample = function(t, r) {
      var n = ra(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), r), n;
    }, e.prototype.lttbDownSample = function(t, r) {
      var n = ra(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), r), n;
    }, e.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, e.prototype.getItemModel = function(t) {
      var r = this.hostModel, n = this.getRawDataItem(t);
      return new Ct(n, r, r && r.ecModel);
    }, e.prototype.diff = function(t) {
      var r = this;
      return new WC(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return Yo(t, n);
      }, function(n) {
        return Yo(r, n);
      });
    }, e.prototype.getVisual = function(t) {
      var r = this._visual;
      return r && r[t];
    }, e.prototype.setVisual = function(t, r) {
      this._visual = this._visual || {}, Ji(t) ? N(this._visual, t) : this._visual[t] = r;
    }, e.prototype.getItemVisual = function(t, r) {
      var n = this._itemVisuals[t], i = n && n[r];
      return i ?? this.getVisual(r);
    }, e.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, e.prototype.ensureUniqueItemVisual = function(t, r) {
      var n = this._itemVisuals, i = n[t];
      i || (i = n[t] = {});
      var a = i[r];
      return a == null && (a = this.getVisual(r), W(a) ? a = a.slice() : Ji(a) && (a = N({}, a)), i[r] = a), a;
    }, e.prototype.setItemVisual = function(t, r, n) {
      var i = this._itemVisuals[t] || {};
      this._itemVisuals[t] = i, Ji(r) ? N(i, r) : i[r] = n;
    }, e.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, e.prototype.setLayout = function(t, r) {
      Ji(t) ? N(this._layout, t) : this._layout[t] = r;
    }, e.prototype.getLayout = function(t) {
      return this._layout[t];
    }, e.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, e.prototype.setItemLayout = function(t, r, n) {
      this._itemLayouts[t] = n ? N(this._itemLayouts[t] || {}, r) : r;
    }, e.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, e.prototype.setItemGraphicEl = function(t, r) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      hx(n, this.dataType, t, r), this._graphicEls[t] = r;
    }, e.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, e.prototype.eachItemGraphicEl = function(t, r) {
      I(this._graphicEls, function(n, i) {
        n && t && t.call(r, n, i);
      });
    }, e.prototype.cloneShallow = function(t) {
      return t || (t = new e(this._schema ? this._schema : Ar(this.dimensions, this._getDimInfo, this), this.hostModel)), Hl(t, this), t._store = this._store, t;
    }, e.prototype.wrapMethod = function(t, r) {
      var n = this[t];
      et(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var i = n.apply(this, arguments);
        return r.apply(this, [i].concat(cv(arguments)));
      });
    }, e.internalField = function() {
      bp = function(t) {
        var r = t._invertedIndicesMap;
        I(r, function(n, i) {
          var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
          if (o) {
            n = r[i] = new hD(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = Sp;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, ta = function(t, r, n) {
        return ur(t._getCategory(r, n), null);
      }, Yo = function(t, r) {
        var n = t._idList[r];
        return n == null && t._idDimIdx != null && (n = ta(t, t._idDimIdx, r)), n == null && (n = vD + r), n;
      }, ea = function(t) {
        return W(t) || (t = t != null ? [t] : []), t;
      }, ra = function(t) {
        var r = new e(t._schema ? t._schema : Ar(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Hl(r, t), r;
      }, Hl = function(t, r) {
        I(cD.concat(r.__wrappedMethods || []), function(n) {
          r.hasOwnProperty(n) && (t[n] = r[n]);
        }), t.__wrappedMethods = r.__wrappedMethods, I(dD, function(n) {
          t[n] = ot(r[n]);
        }), t._calculationInfo = N({}, r._calculationInfo);
      }, Ul = function(t, r) {
        var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[r], u = i[r];
        if (s == null && a != null && (n[r] = s = ta(t, a, r)), u == null && o != null && (i[r] = u = ta(t, o, r)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[r] = u;
        }
      };
    }(), e;
  }()
);
function f_(e, t) {
  qv(e) || (e = Z0(e)), t = t || {};
  var r = t.coordDimensions || [], n = t.dimensionsDefine || e.dimensionsDefine || [], i = j(), a = [], o = pD(e, r, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && u_(o), u = n === e.dimensionsDefine, l = u ? s_(e) : Qv(n), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(e, o));
  for (var h = j(f), c = new n_(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(D) {
    var C = c[D];
    if (C < 0) {
      var A = n[D], L = K(A) ? A : {
        name: A
      }, M = new Ts(), P = L.name;
      P != null && l.get(P) != null && (M.name = M.displayName = P), L.type != null && (M.type = L.type), L.displayName != null && (M.displayName = L.displayName);
      var E = a.length;
      return c[D] = E, M.storeDimIndex = D, a.push(M), M;
    }
    return a[C];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(D, C) {
    var A = ee(D).slice();
    if (A.length === 1 && !Y(A[0]) && A[0] < 0) {
      h.set(C, !1);
      return;
    }
    var L = h.set(C, []);
    I(A, function(M, P) {
      var E = Y(M) ? l.get(M) : M;
      E != null && E < o && (L[P] = E, g(d(E), C, P));
    });
  });
  var p = 0;
  I(r, function(D) {
    var C, A, L, M;
    if (Y(D))
      C = D, M = {};
    else {
      M = D, C = M.name;
      var P = M.ordinalMeta;
      M.ordinalMeta = null, M = N({}, M), M.ordinalMeta = P, A = M.dimsDef, L = M.otherDims, M.name = M.coordDim = M.coordDimIndex = M.dimsDef = M.otherDims = null;
    }
    var E = h.get(C);
    if (E !== !1) {
      if (E = ee(E), !E.length)
        for (var R = 0; R < (A && A.length || 1); R++) {
          for (; p < o && d(p).coordDim != null; )
            p++;
          p < o && E.push(p++);
        }
      I(E, function(k, O) {
        var B = d(k);
        if (u && M.type != null && (B.type = M.type), g(yt(B, M), C, O), B.name == null && A) {
          var F = A[O];
          !K(F) && (F = {
            name: F
          }), B.name = B.displayName = F.name, B.defaultTooltip = F.defaultTooltip;
        }
        L && yt(B.otherDims, L);
      });
    }
  });
  function g(D, C, A) {
    f0.get(C) != null ? D.otherDims[C] = A : (D.coordDim = C, D.coordDimIndex = A, i.set(C, !0));
  }
  var m = t.generateCoord, y = t.generateCoordCount, _ = y != null;
  y = m ? y || 1 : 0;
  var S = m || "value";
  function b(D) {
    D.name == null && (D.name = D.coordDim);
  }
  if (s)
    I(a, function(D) {
      b(D);
    }), a.sort(function(D, C) {
      return D.storeDimIndex - C.storeDimIndex;
    });
  else
    for (var w = 0; w < o; w++) {
      var T = d(w), x = T.coordDim;
      x == null && (T.coordDim = gD(S, i, _), T.coordDimIndex = 0, (!m || y <= 0) && (T.isExtraCoord = !0), y--), b(T), T.type == null && (X0(e, w) === zt.Must || T.isExtraCoord && (T.otherDims.itemName != null || T.otherDims.seriesName != null)) && (T.type = "ordinal");
    }
  return Iv(a, function(D) {
    return D.name;
  }, function(D, C) {
    C > 0 && (D.name = D.name + (C - 1));
  }), new a_({
    source: e,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function pD(e, t, r, n) {
  var i = Math.max(e.dimensionsDetectedCount || 1, t.length, r.length, n || 0);
  return I(t, function(a) {
    var o;
    K(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function gD(e, t, r) {
  if (r || t.hasKey(e)) {
    for (var n = 0; t.hasKey(e + n); )
      n++;
    e += n;
  }
  return t.set(e, !0), e;
}
var Cs = {}, Wl = {}, jv = (
  /** @class */
  function() {
    function e() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return e.prototype.create = function(t, r) {
      this._nonSeriesBoxMasterList = n(Cs), this._normalMasterList = n(Wl);
      function n(i, a) {
        var o = [];
        return I(i, function(s, u) {
          var l = s.create(t, r);
          o = o.concat(l || []);
        }), o;
      }
    }, e.prototype.update = function(t, r) {
      I(this._normalMasterList, function(n) {
        n.update && n.update(t, r);
      });
    }, e.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, e.register = function(t, r) {
      if (t === "matrix" || t === "calendar") {
        Cs[t] = r;
        return;
      }
      Wl[t] = r;
    }, e.get = function(t) {
      return Wl[t] || Cs[t];
    }, e;
  }()
);
function mD(e) {
  return !!Cs[e];
}
var yD = 1, h_ = 2;
function _D(e) {
  v_.set(e.fullType, {
    getCoord2: void 0
  }).getCoord2 = e.getCoord2;
}
var v_ = j();
function c_(e) {
  var t = e.getShallow("coord", !0), r = yD;
  if (t == null) {
    var n = v_.get(e.type);
    n && n.getCoord2 && (r = h_, t = n.getCoord2(e));
  }
  return {
    coord: t,
    from: r
  };
}
var Di = 0, Ds = 1, SD = 2;
function bD(e, t) {
  var r = e.getShallow("coordinateSystem"), n = e.getShallow("coordinateSystemUsage", !0), i = Di;
  if (r) {
    var a = e.mainType === "series";
    n == null && (n = a ? "data" : "box"), n === "data" ? (i = Ds, a || (i = Di)) : n === "box" && (i = SD, !a && !mD(r) && (i = Di));
  }
  return {
    coordSysType: r,
    kind: i
  };
}
function wD(e) {
  var t = e.targetModel, r = e.coordSysType, n = e.coordSysProvider, i = e.isDefaultDataCoordSys, a = bD(t), o = a.kind, s = a.coordSysType;
  if (i && o !== Ds && (o = Ds, s = r), o === Di || s !== r)
    return Di;
  var u = n(r, t);
  return u ? (o === Ds ? t.coordinateSystem = u : t.boxCoordinateSystem = u, o) : Di;
}
var TD = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.coordSysDims = [], this.axisMap = j(), this.categoryAxisMap = j(), this.coordSysName = t;
    }
    return e;
  }()
);
function xD(e) {
  var t = e.get("coordinateSystem"), r = new TD(t), n = CD[t];
  if (n)
    return n(e, r, r.axisMap, r.categoryAxisMap), r;
}
var CD = {
  cartesian2d: function(e, t, r, n) {
    var i = e.getReferringComponents("xAxis", xe).models[0], a = e.getReferringComponents("yAxis", xe).models[0];
    t.coordSysDims = ["x", "y"], r.set("x", i), r.set("y", a), oi(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), oi(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(e, t, r, n) {
    var i = e.getReferringComponents("singleAxis", xe).models[0];
    t.coordSysDims = ["single"], r.set("single", i), oi(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
  },
  polar: function(e, t, r, n) {
    var i = e.getReferringComponents("polar", xe).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    t.coordSysDims = ["radius", "angle"], r.set("radius", a), r.set("angle", o), oi(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), oi(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(e, t, r, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(e, t, r, n) {
    var i = e.ecModel, a = i.getComponent("parallel", e.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    I(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      r.set(f, l), oi(l) && (n.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  },
  matrix: function(e, t, r, n) {
    var i = e.getReferringComponents("matrix", xe).models[0];
    t.coordSysDims = ["x", "y"];
    var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
    r.set("x", a), r.set("y", o), n.set("x", a), n.set("y", o);
  }
};
function oi(e) {
  return e.get("type") === "category";
}
function DD(e, t, r) {
  r = r || {};
  var n = r.byIndex, i = r.stackedCoordDimension, a, o, s;
  AD(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(e && e.get("stack")), l, f, h, c, v = !0;
  function d(S) {
    return S.type !== "ordinal" && S.type !== "time";
  }
  if (I(a, function(S, b) {
    Y(S) && (a[b] = S = {
      name: S
    }), d(S) || (v = !1);
  }), I(a, function(S, b) {
    u && !S.isExtraCoord && (!n && !l && S.ordinalMeta && (l = S), !f && d(S) && (!v || S.coordDim !== "x" && S.coordDim !== "angle") && (!i || i === S.coordDim) && (f = S));
  }), f && !n && !l && (n = !0), f) {
    h = "__\0ecstackresult_" + e.id, c = "__\0ecstackedover_" + e.id, l && (l.createInvertedIndices = !0);
    var p = f.coordDim, g = f.type, m = 0;
    I(a, function(S) {
      S.coordDim === p && m++;
    });
    var y = {
      name: h,
      coordDim: p,
      coordDimIndex: m,
      type: g,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, _ = {
      name: c,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: c,
      coordDimIndex: m + 1,
      type: g,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (y.storeDimIndex = s.ensureCalculationDimension(c, g), _.storeDimIndex = s.ensureCalculationDimension(h, g)), o.appendCalculationDimension(y), o.appendCalculationDimension(_)) : (a.push(y), a.push(_));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: c,
    stackResultDimension: h
  };
}
function AD(e) {
  return !o_(e.schema);
}
function Ni(e, t) {
  return !!t && t === e.getCalculationInfo("stackedDimension");
}
function MD(e, t) {
  return Ni(e, t) ? e.getCalculationInfo("stackResultDimension") : t;
}
function ID(e, t) {
  var r = e.get("coordinateSystem"), n = jv.get(r), i;
  return t && t.coordSysDims && (i = Z(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = nD(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function LD(e, t, r) {
  var n, i;
  return r && I(e, function(a, o) {
    var s = a.coordDim, u = r.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (e[n].otherDims.itemName = 0), n;
}
function Jv(e, t, r) {
  r = r || {};
  var n = t.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === ce;
  var o = xD(t), s = ID(t, o), u = r.useEncodeDefaulter, l = et(u) ? u : u ? Rt(XC, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: r.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = f_(i, f), c = LD(h.dimensions, r.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(h), d = DD(t, {
    schema: h,
    store: v
  }), p = new l_(h, t);
  p.setCalculationInfo(d);
  var g = c != null && PD(i) ? function(m, y, _, S) {
    return S === c ? _ : this.defaultDimValueGetter(m, y, _, S);
  } : null;
  return p.hasItemOption = !1, p.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : v,
    null,
    g
  ), p;
}
function PD(e) {
  if (e.sourceFormat === ce) {
    var t = ED(e.data || []);
    return !W(co(t));
  }
}
function ED(e) {
  for (var t = 0; t < e.length && e[t] == null; )
    t++;
  return e[t];
}
var RD = Math.round(Math.random() * 10);
function Yu(e) {
  return [e || "", RD++].join("_");
}
function OD(e) {
  var t = {};
  e.registerSubTypeDefaulter = function(r, n) {
    var i = ir(r);
    t[i.main] = n;
  }, e.determineSubType = function(r, n) {
    var i = n.type;
    if (!i) {
      var a = ir(r).main;
      e.hasSubTypes(r) && t[a] && (i = t[a](n));
    }
    return i;
  };
}
function kD(e, t) {
  e.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = r(o), f = l.graph, h = l.noEntryList, c = {};
    for (I(a, function(y) {
      c[y] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], p = !!c[v];
      p && (s.call(u, v, d.originalDeps.slice()), delete c[v]), I(d.successor, p ? m : g);
    }
    I(c, function() {
      var y = "";
      throw new Error(y);
    });
    function g(y) {
      f[y].entryCount--, f[y].entryCount === 0 && h.push(y);
    }
    function m(y) {
      c[y] = !0, g(y);
    }
  };
  function r(a) {
    var o = {}, s = [];
    return I(a, function(u) {
      var l = n(o, u), f = l.originalDeps = t(u), h = i(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), I(h, function(c) {
        ct(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = n(o, c);
        ct(v.successor, c) < 0 && v.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function n(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function i(a, o) {
    var s = [];
    return I(a, function(u) {
      ct(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function d_(e, t) {
  return gt(gt({}, e, !0), t, !0);
}
var ND = Math.log(2);
function Sh(e, t, r, n, i, a) {
  var o = n + "-" + i, s = e.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / ND);
    return e[r][u];
  }
  for (var l = n | 1 << r, f = r + 1; n & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & i || (h += (v % 2 ? -1 : 1) * e[r][c] * Sh(e, t - 1, f, l, i | d, a), v++);
  }
  return a[o] = h, h;
}
function wp(e, t) {
  var r = [
    [e[0], e[1], 1, 0, 0, 0, -t[0] * e[0], -t[0] * e[1]],
    [0, 0, 0, e[0], e[1], 1, -t[1] * e[0], -t[1] * e[1]],
    [e[2], e[3], 1, 0, 0, 0, -t[2] * e[2], -t[2] * e[3]],
    [0, 0, 0, e[2], e[3], 1, -t[3] * e[2], -t[3] * e[3]],
    [e[4], e[5], 1, 0, 0, 0, -t[4] * e[4], -t[4] * e[5]],
    [0, 0, 0, e[4], e[5], 1, -t[5] * e[4], -t[5] * e[5]],
    [e[6], e[7], 1, 0, 0, 0, -t[6] * e[6], -t[6] * e[7]],
    [0, 0, 0, e[6], e[7], 1, -t[7] * e[6], -t[7] * e[7]]
  ], n = {}, i = Sh(r, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Sh(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var ru = "___zrEVENTSAVED", Yl = [];
function BD(e, t, r, n, i) {
  return bh(Yl, t, n, i, !0) && bh(e, r, Yl[0], Yl[1]);
}
function FD(e, t) {
  e && r(e), t && r(t);
  function r(n) {
    var i = n[ru];
    i && (i.clearMarkers && i.clearMarkers(), delete n[ru]);
  }
}
function bh(e, t, r, n, i) {
  if (t.getBoundingClientRect && nt.domSupported && !p_(t)) {
    var a = t[ru] || (t[ru] = {}), o = zD(t, a), s = GD(o, a, i);
    if (s)
      return s(e, r, n), !0;
  }
  return !1;
}
function zD(e, t) {
  var r = t.markers;
  if (r)
    return r;
  r = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[u] + ":0",
      i[l] + ":0",
      n[1 - u] + ":auto",
      i[1 - l] + ":auto",
      ""
    ].join("!important;"), e.appendChild(o), r.push(o);
  }
  return t.clearMarkers = function() {
    I(r, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, r;
}
function GD(e, t, r) {
  for (var n = r ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = e[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(e[l].offsetLeft, e[l].offsetTop);
  }
  return u && i ? i : (t.srcCoords = o, t[n] = r ? wp(s, o) : wp(o, s));
}
function p_(e) {
  return e.nodeName.toUpperCase() === "CANVAS";
}
var VD = /([&<>"'])/g, HD = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function jt(e) {
  return e == null ? "" : (e + "").replace(VD, function(t, r) {
    return HD[r];
  });
}
const UD = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, WD = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var nu = "ZH", tc = "EN", Ai = tc, As = {}, ec = {}, g_ = nt.domSupported ? function() {
  var e = (document.documentElement.lang || navigator.language || navigator.browserLanguage || Ai).toUpperCase();
  return e.indexOf(nu) > -1 ? nu : Ai;
}() : Ai;
function m_(e, t) {
  e = e.toUpperCase(), ec[e] = new Ct(t), As[e] = t;
}
function YD(e) {
  if (Y(e)) {
    var t = As[e.toUpperCase()] || {};
    return e === nu || e === tc ? ot(t) : gt(ot(t), ot(As[Ai]), !1);
  } else
    return gt(ot(e), ot(As[Ai]), !1);
}
function XD(e) {
  return ec[e];
}
function $D() {
  return ec[Ai];
}
m_(tc, UD);
m_(nu, WD);
var ZD = null;
function Xu() {
  return ZD;
}
function y_(e, t) {
  t.breakOption;
  var r = t.breakParsed;
  return r;
}
function rc(e) {
  var t = e.brk;
  return t ? t.breaks : [];
}
function iu(e) {
  var t = e.brk;
  return t ? t.hasBreaks() : !1;
}
var nc = 1e3, ic = nc * 60, Pa = ic * 60, Ce = Pa * 24, Tp = Ce * 365, qD = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, Ms = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, KD = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", Xo = "{yyyy}-{MM}-{dd}", xp = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: Xo,
  hour: Xo + " " + Ms.hour,
  minute: Xo + " " + Ms.minute,
  second: Xo + " " + Ms.second,
  millisecond: KD
}, Vn = ["year", "month", "day", "hour", "minute", "second", "millisecond"], QD = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function jD(e) {
  return !Y(e) && !et(e) ? JD(e) : e;
}
function JD(e) {
  e = e || {};
  var t = {}, r = !0;
  return I(Vn, function(n) {
    r && (r = e[n] == null);
  }), I(Vn, function(n, i) {
    var a = e[n];
    t[n] = {};
    for (var o = null, s = i; s >= 0; s--) {
      var u = Vn[s], l = K(a) && !W(a) ? a[u] : a, f = void 0;
      W(l) ? (f = l.slice(), o = f[0] || "") : Y(l) ? (o = l, f = [o]) : (o == null ? o = Ms[n] : qD[u].test(o) || (o = t[u][u][0] + " " + o), f = [o], r && (f[1] = "{primary|" + o + "}")), t[n][u] = f;
    }
  }), t;
}
function Mr(e, t) {
  return e += "", "0000".substr(0, t - e.length) + e;
}
function Ea(e) {
  switch (e) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return e;
  }
}
function tA(e) {
  return e === Ea(e);
}
function eA(e) {
  switch (e) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function $u(e, t, r, n) {
  var i = Hi(e), a = i[__(r)](), o = i[ac(r)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[oc(r)](), l = i["get" + (r ? "UTC" : "") + "Day"](), f = i[sc(r)](), h = (f - 1) % 12 + 1, c = i[uc(r)](), v = i[lc(r)](), d = i[fc(r)](), p = f >= 12 ? "pm" : "am", g = p.toUpperCase(), m = n instanceof Ct ? n : XD(n || g_) || $D(), y = m.getModel("time"), _ = y.get("month"), S = y.get("monthAbbr"), b = y.get("dayOfWeek"), w = y.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, p + "").replace(/{A}/g, g + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Mr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Mr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Mr(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, w[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Mr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Mr(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Mr(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, Mr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Mr(d, 3)).replace(/{S}/g, d + "");
}
function rA(e, t, r, n, i) {
  var a = null;
  if (Y(r))
    a = r;
  else if (et(r)) {
    var o = {
      time: e.time,
      level: e.time ? e.time.level : 0
    }, s = Xu();
    s && s.makeAxisLabelFormatterParamBreak(o, e.break), a = r(e.value, t, o);
  } else {
    var u = e.time;
    if (u) {
      var l = r[u.lowerTimeUnit][u.upperTimeUnit];
      a = l[Math.min(u.level, l.length - 1)] || "";
    } else {
      var f = Is(e.value, i);
      a = r[f][f][0];
    }
  }
  return $u(new Date(e.value), a, i, n);
}
function Is(e, t) {
  var r = Hi(e), n = r[ac(t)]() + 1, i = r[oc(t)](), a = r[sc(t)](), o = r[uc(t)](), s = r[lc(t)](), u = r[fc(t)](), l = u === 0, f = l && s === 0, h = f && o === 0, c = h && a === 0, v = c && i === 1, d = v && n === 1;
  return d ? "year" : v ? "month" : c ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function wh(e, t, r) {
  switch (t) {
    case "year":
      e[S_(r)](0);
    case "month":
      e[b_(r)](1);
    case "day":
      e[w_(r)](0);
    case "hour":
      e[T_(r)](0);
    case "minute":
      e[x_(r)](0);
    case "second":
      e[C_(r)](0);
  }
  return e;
}
function __(e) {
  return e ? "getUTCFullYear" : "getFullYear";
}
function ac(e) {
  return e ? "getUTCMonth" : "getMonth";
}
function oc(e) {
  return e ? "getUTCDate" : "getDate";
}
function sc(e) {
  return e ? "getUTCHours" : "getHours";
}
function uc(e) {
  return e ? "getUTCMinutes" : "getMinutes";
}
function lc(e) {
  return e ? "getUTCSeconds" : "getSeconds";
}
function fc(e) {
  return e ? "getUTCMilliseconds" : "getMilliseconds";
}
function nA(e) {
  return e ? "setUTCFullYear" : "setFullYear";
}
function S_(e) {
  return e ? "setUTCMonth" : "setMonth";
}
function b_(e) {
  return e ? "setUTCDate" : "setDate";
}
function w_(e) {
  return e ? "setUTCHours" : "setHours";
}
function T_(e) {
  return e ? "setUTCMinutes" : "setMinutes";
}
function x_(e) {
  return e ? "setUTCSeconds" : "setSeconds";
}
function C_(e) {
  return e ? "setUTCMilliseconds" : "setMilliseconds";
}
function D_(e) {
  if (!BT(e))
    return Y(e) ? e : "-";
  var t = (e + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function A_(e, t) {
  return e = (e || "").toLowerCase().replace(/-(.)/g, function(r, n) {
    return n.toUpperCase();
  }), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e;
}
var Zu = dv;
function Th(e, t, r) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && nr(f) ? f : "-";
  }
  function a(f) {
    return Pe(f);
  }
  var o = t === "time", s = e instanceof Date;
  if (o || s) {
    var u = o ? Hi(e) : e;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return $u(u, n, r);
  }
  if (t === "ordinal")
    return kf(e) ? i(e) : mt(e) && a(e) ? e + "" : "-";
  var l = $s(e);
  return a(l) ? D_(l) : kf(e) ? i(e) : typeof e == "boolean" ? e + "" : "-";
}
var Cp = ["a", "b", "c", "d", "e", "f", "g"], Xl = function(e, t) {
  return "{" + e + (t ?? "") + "}";
};
function M_(e, t, r) {
  W(t) || (t = [t]);
  var n = t.length;
  if (!n)
    return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Cp[a];
    e = e.replace(Xl(o), Xl(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = t[s][i[u]];
      e = e.replace(Xl(Cp[u], s), r ? jt(l) : l);
    }
  return e;
}
function iA(e, t) {
  var r = Y(e) ? {
    color: e,
    extraCssText: t
  } : e || {}, n = r.color, i = r.type;
  t = r.extraCssText;
  var a = r.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + jt(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + jt(n) + ";" + (t || "") + '"></span>';
  var o = r.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: i === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: n
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: n
    }
  };
}
function Yn(e, t) {
  return t = t || "transparent", Y(e) ? e : K(e) && e.colorStops && (e.colorStops[0] || {}).color || t;
}
function Dp(e, t) {
  if (t === "_blank" || t === "blank") {
    var r = window.open();
    r.opener = null, r.location.href = e;
  } else
    window.open(e, t);
}
var Ls = I, aA = ["left", "right", "top", "bottom", "width", "height"], $o = [["width", "left", "right"], ["height", "top", "bottom"]];
function hc(e, t, r, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), c = h && h.getBoundingRect(), v, d;
    if (e === "horizontal") {
      var p = f.width + (c ? -c.x + f.x : 0);
      v = a + p, v > n || u.newline ? (a = 0, v = p, o += s + r, s = f.height) : s = Math.max(s, f.height);
    } else {
      var g = f.height + (c ? -c.y + f.y : 0);
      d = o + g, d > i || u.newline ? (a += s + r, o = 0, d = g, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), e === "horizontal" ? a = v + r : o = d + r);
  });
}
var Ra = hc;
Rt(hc, "vertical");
Rt(hc, "horizontal");
function oA(e, t) {
  return {
    left: e.getShallow("left", t),
    top: e.getShallow("top", t),
    right: e.getShallow("right", t),
    bottom: e.getShallow("bottom", t),
    width: e.getShallow("width", t),
    height: e.getShallow("height", t)
  };
}
function sA(e, t) {
  var r = qu(e, t, {
    enableLayoutOnlyByCenter: !0
  }), n = e.getBoxLayoutParams(), i, a;
  if (r.type === ya.point)
    a = r.refPoint, i = Qr(n, {
      width: t.getWidth(),
      height: t.getHeight()
    });
  else {
    var o = e.get("center"), s = W(o) ? o : [o, o];
    i = Qr(n, r.refContainer), a = r.boxCoordFrom === h_ ? r.refPoint : [Tt(s[0], i.width) + i.x, Tt(s[1], i.height) + i.y];
  }
  return {
    viewRect: i,
    center: a
  };
}
function uA(e, t) {
  var r = sA(e, t), n = r.viewRect, i = r.center, a = e.get("radius");
  W(a) || (a = [0, a]);
  var o = Tt(n.width, t.getWidth()), s = Tt(n.height, t.getHeight()), u = Math.min(o, s), l = Tt(a[0], u / 2), f = Tt(a[1], u / 2);
  return {
    cx: i[0],
    cy: i[1],
    r0: l,
    r: f,
    viewRect: n
  };
}
function Qr(e, t, r) {
  r = Zu(r || 0);
  var n = t.width, i = t.height, a = Tt(e.left, n), o = Tt(e.top, i), s = Tt(e.right, n), u = Tt(e.bottom, i), l = Tt(e.width, n), f = Tt(e.height, i), h = r[2] + r[0], c = r[1] + r[3], v = e.aspect;
  switch (isNaN(l) && (l = n - s - c - a), isNaN(f) && (f = i - u - h - o), v != null && (isNaN(l) && isNaN(f) && (v > n / i ? l = n * 0.8 : f = i * 0.8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(a) && (a = n - s - l - c), isNaN(o) && (o = i - u - f - h), e.left || e.right) {
    case "center":
      a = n / 2 - l / 2 - r[3];
      break;
    case "right":
      a = n - l - c;
      break;
  }
  switch (e.top || e.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - r[0];
      break;
    case "bottom":
      o = i - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = n - c - a - (s || 0)), isNaN(f) && (f = i - h - o - (u || 0));
  var d = new tt((t.x || 0) + a + r[3], (t.y || 0) + o + r[0], l, f);
  return d.margin = r, d;
}
var ya = {
  rect: 1,
  point: 2
};
function qu(e, t, r) {
  var n, i, a, o = e.boxCoordinateSystem, s;
  if (o) {
    var u = c_(e), l = u.coord, f = u.from;
    if (o.dataToLayout) {
      a = ya.rect, s = f;
      var h = o.dataToLayout(l);
      n = h.contentRect || h.rect;
    } else r && r.enableLayoutOnlyByCenter && o.dataToPoint && (a = ya.point, s = f, i = o.dataToPoint(l));
  }
  return a == null && (a = ya.rect), a === ya.rect && (n || (n = {
    x: 0,
    y: 0,
    width: t.getWidth(),
    height: t.getHeight()
  }), i = [n.x + n.width / 2, n.y + n.height / 2]), {
    type: a,
    refContainer: n,
    refPoint: i,
    boxCoordFrom: s
  };
}
function qa(e) {
  var t = e.layoutMode || e.constructor.layoutMode;
  return K(t) ? t : t ? {
    type: t
  } : null;
}
function jr(e, t, r) {
  var n = r && r.ignoreSize;
  !W(n) && (n = [n, n]);
  var i = o($o[0], 0), a = o($o[1], 1);
  u($o[0], e, i), u($o[1], e, a);
  function o(l, f) {
    var h = {}, c = 0, v = {}, d = 0, p = 2;
    if (Ls(l, function(y) {
      v[y] = e[y];
    }), Ls(l, function(y) {
      te(t, y) && (h[y] = v[y] = t[y]), s(h, y) && c++, s(v, y) && d++;
    }), n[f])
      return s(t, l[1]) ? v[l[2]] = null : s(t, l[2]) && (v[l[1]] = null), v;
    if (d === p || !c)
      return v;
    if (c >= p)
      return h;
    for (var g = 0; g < l.length; g++) {
      var m = l[g];
      if (!te(h, m) && te(e, m)) {
        h[m] = e[m];
        break;
      }
    }
    return h;
  }
  function s(l, f) {
    return l[f] != null && l[f] !== "auto";
  }
  function u(l, f, h) {
    Ls(l, function(c) {
      f[c] = h[c];
    });
  }
}
function _o(e) {
  return lA({}, e);
}
function lA(e, t) {
  return t && e && Ls(aA, function(r) {
    te(t, r) && (e[r] = t[r]);
  }), e;
}
var fA = _t(), pt = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r, n, i) {
      var a = e.call(this, r, n, i) || this;
      return a.uid = Yu("ec_cpt_model"), a;
    }
    return t.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i);
    }, t.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = qa(this), a = i ? _o(r) : {}, o = n.getTheme();
      gt(r, o.get(this.mainType)), gt(r, this.getDefaultOption()), i && jr(r, a, i);
    }, t.prototype.mergeOption = function(r, n) {
      gt(this.option, r, !0);
      var i = qa(this);
      i && jr(this.option, r, i);
    }, t.prototype.optionUpdated = function(r, n) {
    }, t.prototype.getDefaultOption = function() {
      var r = this.constructor;
      if (!Yb(r))
        return r.defaultOption;
      var n = fA(this);
      if (!n.defaultOption) {
        for (var i = [], a = r; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, u = i.length - 1; u >= 0; u--)
          s = gt(s, i[u], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, t.prototype.getReferringComponents = function(r, n) {
      var i = r + "Index", a = r + "Id";
      return po(this.ecModel, r, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, t.prototype.getBoxLayoutParams = function() {
      return oA(this, !1);
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(r) {
      this.option.zlevel = r;
    }, t.protoInitialize = function() {
      var r = t.prototype;
      r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0;
    }(), t;
  }(Ct)
);
by(pt, Ct);
Mu(pt);
OD(pt);
kD(pt, hA);
function hA(e) {
  var t = [];
  return I(pt.getClassesByMainType(e), function(r) {
    t = t.concat(r.dependencies || r.prototype.dependencies || []);
  }), t = Z(t, function(r) {
    return ir(r).main;
  }), e !== "dataset" && ct(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var Ap = _t();
_t();
var vc = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getColorFromPalette = function(t, r, n) {
      var i = ee(this.get("color", !0)), a = this.get("colorLayer", !0);
      return cA(this, Ap, i, a, t, r, n);
    }, e.prototype.clearColorPalette = function() {
      dA(this, Ap);
    }, e;
  }()
);
function vA(e, t) {
  for (var r = e.length, n = 0; n < r; n++)
    if (e[n].length > t)
      return e[n];
  return e[r - 1];
}
function cA(e, t, r, n, i, a, o) {
  a = a || e;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? r : vA(n, o);
  if (f = f || r, !(!f || !f.length)) {
    var h = f[u];
    return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function dA(e, t) {
  t(e).paletteIdx = 0, t(e).paletteNameMap = {};
}
var pA = /\{@(.+?)\}/g, gA = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getDataParams = function(t, r) {
      var n = this.getData(r), i = this.getRawValue(t, r), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), u = n.getItemVisual(t, "style"), l = u && u[n.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, c = h === "series", v = n.userOutput && n.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: c ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: c ? this.id : null,
        seriesName: c ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: r,
        value: i,
        color: l,
        borderColor: f,
        dimensionNames: v ? v.fullDimensions : null,
        encode: v ? v.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, e.prototype.getFormattedLabel = function(t, r, n, i, a, o) {
      r = r || "normal";
      var s = this.getData(n), u = this.getDataParams(t, n);
      if (o && (u.value = o.interpolatedValue), i != null && W(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(t);
        a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"]);
      }
      if (et(a))
        return u.status = r, u.dimensionIndex = i, a(u);
      if (Y(a)) {
        var f = M_(a, u);
        return f.replace(pA, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1));
          var p = ki(s, t, d);
          if (o && W(o.interpolatedValue)) {
            var g = s.getDimensionIndex(d);
            g >= 0 && (p = o.interpolatedValue[g]);
          }
          return p != null ? p + "" : "";
        });
      }
    }, e.prototype.getRawValue = function(t, r) {
      return ki(this.getData(r), t);
    }, e.prototype.formatTooltip = function(t, r, n) {
    }, e;
  }()
);
function Mp(e) {
  var t, r;
  return K(e) ? e.type && (r = e) : t = e, {
    text: t,
    // markers: markers || markersExisting,
    frag: r
  };
}
function Oa(e) {
  return new mA(e);
}
var mA = (
  /** @class */
  function() {
    function e(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return e.prototype.perform = function(t) {
      var r = this._upstream, n = t && t.skip;
      if (this._dirty && r) {
        var i = this.context;
        i.data = i.outputData = r.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
      var c = t && t.step;
      if (r ? this._dueEnd = r._outputDueEnd : this._dueEnd = this._count ? this._count(this.context) : 1 / 0, this._progress) {
        var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
        if (!n && (h || v < d)) {
          var p = this._progress;
          if (W(p))
            for (var g = 0; g < p.length; g++)
              this._doProgress(p[g], v, d, u, l);
          else
            this._doProgress(p, v, d, u, l);
        }
        this._dueIndex = d;
        var m = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        this._outputDueEnd = m;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, e.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, e.prototype._doProgress = function(t, r, n, i, a) {
      Ip.reset(r, n, i, a), this._callingProgress = t, this._callingProgress({
        start: r,
        end: n,
        count: n - r,
        next: Ip.next
      }, this.context);
    }, e.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var r, n;
      !t && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), W(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, e.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, e.prototype.pipe = function(t) {
      (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, e.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, e.prototype.getUpstream = function() {
      return this._upstream;
    }, e.prototype.getDownstream = function() {
      return this._downstream;
    }, e.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, e;
  }()
), Ip = /* @__PURE__ */ function() {
  var e, t, r, n, i, a = {
    reset: function(u, l, f, h) {
      t = u, e = l, r = f, n = h, i = Math.ceil(n / r), a.next = r > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < e ? t++ : null;
  }
  function s() {
    var u = t % i * r + Math.ceil(t / i), l = t >= e ? null : u < n ? u : t;
    return t++, l;
  }
}(), yA = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getRawData = function() {
      throw new Error("not supported");
    }, e.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, e.prototype.cloneRawData = function() {
    }, e.prototype.getDimensionInfo = function(t) {
    }, e.prototype.cloneAllDimensionInfo = function() {
    }, e.prototype.count = function() {
    }, e.prototype.retrieveValue = function(t, r) {
    }, e.prototype.retrieveValueFromItem = function(t, r) {
    }, e.prototype.convertValue = function(t, r) {
      return xs(t, r);
    }, e;
  }()
);
function _A(e, t) {
  var r = new yA(), n = e.data, i = r.sourceFormat = e.sourceFormat, a = e.startIndex, o = "";
  e.seriesLayoutBy !== lr && se(o);
  var s = [], u = {}, l = e.dimensionsDefine;
  if (l)
    I(l, function(p, g) {
      var m = p.name, y = {
        index: g,
        name: m,
        displayName: p.displayName
      };
      if (s.push(y), m != null) {
        var _ = "";
        te(u, m) && se(_), u[m] = y;
      }
    });
  else
    for (var f = 0; f < e.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = j0(i, lr);
  t.__isBuiltIn && (r.getRawDataItem = function(p) {
    return h(n, a, s, p);
  }, r.getRawData = St(SA, null, e)), r.cloneRawData = St(bA, null, e);
  var c = J0(i, lr);
  r.count = St(c, null, n, a, s);
  var v = t_(i);
  r.retrieveValue = function(p, g) {
    var m = h(n, a, s, p);
    return d(m, g);
  };
  var d = r.retrieveValueFromItem = function(p, g) {
    if (p != null) {
      var m = s[g];
      if (m)
        return v(p, g, m.name);
    }
  };
  return r.getDimensionInfo = St(wA, null, s, u), r.cloneAllDimensionInfo = St(TA, null, s), r;
}
function SA(e) {
  var t = e.sourceFormat;
  if (!cc(t)) {
    var r = "";
    se(r);
  }
  return e.data;
}
function bA(e) {
  var t = e.sourceFormat, r = e.data;
  if (!cc(t)) {
    var n = "";
    se(n);
  }
  if (t === qt) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(r[a].slice());
    return i;
  } else if (t === Re) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(N({}, r[a]));
    return i;
  }
}
function wA(e, t, r) {
  if (r != null) {
    if (mt(r) || !isNaN(r) && !te(t, r))
      return e[r];
    if (te(t, r))
      return t[r];
  }
}
function TA(e) {
  return ot(e);
}
var I_ = j();
function xA(e) {
  e = ot(e);
  var t = e.type, r = "";
  t || se(r);
  var n = t.split(":");
  n.length !== 2 && se(r);
  var i = !1;
  n[0] === "echarts" && (t = n[1], i = !0), e.__isBuiltIn = i, I_.set(t, e);
}
function CA(e, t, r) {
  var n = ee(e), i = n.length, a = "";
  i || se(a);
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    t = DA(u, t), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function DA(e, t, r, n) {
  var i = "";
  t.length || se(i), K(e) || se(i);
  var a = e.type, o = I_.get(a);
  o || se(i);
  var s = Z(t, function(l) {
    return _A(l, o);
  }), u = ee(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: ot(e.config)
  }));
  return Z(u, function(l, f) {
    var h = "";
    K(l) || se(h), l.data || se(h);
    var c = q0(l.data);
    cc(c) || se(h);
    var v, d = t[0];
    if (d && f === 0 && !l.dimensions) {
      var p = d.startIndex;
      p && (l.data = d.data.slice(0, p).concat(l.data)), v = {
        seriesLayoutBy: lr,
        sourceHeader: p,
        dimensions: d.metaRawOption.dimensions
      };
    } else
      v = {
        seriesLayoutBy: lr,
        sourceHeader: 0,
        dimensions: l.dimensions
      };
    return yh(l.data, v, null);
  });
}
function cc(e) {
  return e === qt || e === Re;
}
var AA = (
  /** @class */
  function() {
    function e(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return e.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, e.prototype._setLocalSource = function(t, r) {
      this._sourceList = t, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, e.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, e.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, e.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, r = this._getUpstreamSourceManagers(), n = !!r.length, i, a;
      if (Zo(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = r[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = fe(s) ? Wr : ce, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = $(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = $(h.sourceHeader, c.sourceHeader), p = $(h.dimensions, c.dimensions), g = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || p;
        i = g ? [yh(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: p
        }, u)] : [];
      } else {
        var m = t;
        if (n) {
          var y = this._applyTransform(r);
          i = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = m.get("source", !0);
          i = [yh(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      this._setLocalSource(i, a);
    }, e.prototype._applyTransform = function(t) {
      var r = this._sourceHost, n = r.get("transform", !0), i = r.get("fromTransformResult", !0);
      if (i != null) {
        var a = "";
        t.length !== 1 && Lp(a);
      }
      var o, s = [], u = [];
      return I(t, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), h = "";
        i != null && !f && Lp(h), s.push(f), u.push(l._getVersionSign());
      }), n ? o = CA(n, s, {
        datasetIndex: r.componentIndex
      }) : i != null && (o = [qC(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, e.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), r = 0; r < t.length; r++) {
        var n = t[r];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[r] !== n._getVersionSign()
        )
          return !0;
      }
    }, e.prototype.getSource = function(t) {
      t = t || 0;
      var r = this._sourceList[t];
      if (!r) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(t);
      }
      return r;
    }, e.prototype.getSharedDataStore = function(t) {
      var r = t.makeStoreSchema();
      return this._innerGetDataStore(r.dimensions, t.source, r.hash);
    }, e.prototype._innerGetDataStore = function(t, r, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        Zo(this._sourceHost) && u ? s = u._innerGetDataStore(t, r, n) : (s = new _h(), s.initData(new Q0(r, t.length), t)), o[n] = s;
      }
      return s;
    }, e.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (Zo(t)) {
        var r = Zv(t);
        return r ? [r.getSourceManager()] : [];
      } else
        return Z(ZC(t), function(n) {
          return n.getSourceManager();
        });
    }, e.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, r, n, i;
      if (Zo(t))
        r = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        r = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: r,
        sourceHeader: n,
        dimensions: i
      };
    }, e;
  }()
);
function Zo(e) {
  return e.mainType === "series";
}
function Lp(e) {
  throw new Error(e);
}
var q = {
  color: {},
  darkColor: {},
  size: {}
}, Mt = q.color = {
  theme: ["#5070dd", "#b6d634", "#505372", "#ff994d", "#0ca8df", "#ffd10a", "#fb628b", "#785db0", "#3fbe95"],
  neutral00: "#fff",
  neutral05: "#f4f7fd",
  neutral10: "#e8ebf0",
  neutral15: "#dbdee4",
  neutral20: "#cfd2d7",
  neutral25: "#c3c5cb",
  neutral30: "#b7b9be",
  neutral35: "#aaacb2",
  neutral40: "#9ea0a5",
  neutral45: "#929399",
  neutral50: "#86878c",
  neutral55: "#797b7f",
  neutral60: "#6d6e73",
  neutral65: "#616266",
  neutral70: "#54555a",
  neutral75: "#48494d",
  neutral80: "#3c3c41",
  neutral85: "#303034",
  neutral90: "#232328",
  neutral95: "#17171b",
  neutral99: "#000",
  accent05: "#eff1f9",
  accent10: "#e0e4f2",
  accent15: "#d0d6ec",
  accent20: "#c0c9e6",
  accent25: "#b1bbdf",
  accent30: "#a1aed9",
  accent35: "#91a0d3",
  accent40: "#8292cc",
  accent45: "#7285c6",
  accent50: "#6578ba",
  accent55: "#5c6da9",
  accent60: "#536298",
  accent65: "#4a5787",
  accent70: "#404c76",
  accent75: "#374165",
  accent80: "#2e3654",
  accent85: "#252b43",
  accent90: "#1b2032",
  accent95: "#121521",
  transparent: "rgba(0,0,0,0)",
  highlight: "rgba(255,231,130,0.8)"
};
N(Mt, {
  primary: Mt.neutral80,
  secondary: Mt.neutral70,
  tertiary: Mt.neutral60,
  quaternary: Mt.neutral50,
  disabled: Mt.neutral20,
  border: Mt.neutral30,
  borderTint: Mt.neutral20,
  borderShade: Mt.neutral40,
  background: Mt.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: Mt.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: Mt.neutral70,
  axisLineTint: Mt.neutral40,
  axisTick: Mt.neutral70,
  axisTickMinor: Mt.neutral60,
  axisLabel: Mt.neutral70,
  axisSplitLine: Mt.neutral15,
  axisMinorSplitLine: Mt.neutral05
});
for (var xn in Mt)
  if (Mt.hasOwnProperty(xn)) {
    var Pp = Mt[xn];
    xn === "theme" ? q.darkColor.theme = Mt.theme.slice() : xn === "highlight" ? q.darkColor.highlight = "rgba(255,231,130,0.4)" : xn.indexOf("accent") === 0 ? q.darkColor[xn] = $f(Pp, null, function(e) {
      return e * 0.5;
    }, function(e) {
      return Math.min(1, 1.3 - e);
    }) : q.darkColor[xn] = $f(Pp, null, function(e) {
      return e * 0.9;
    }, function(e) {
      return 1 - Math.pow(e, 1.5);
    });
  }
q.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var MA = "line-height:1";
function L_(e) {
  var t = e.lineHeight;
  return t == null ? MA : "line-height:" + jt(t + "") + "px";
}
function P_(e, t) {
  var r = e.color || q.color.tertiary, n = e.fontSize || 12, i = e.fontWeight || "400", a = e.color || q.color.secondary, o = e.fontSize || 14, s = e.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + jt(n + "") + "px;color:" + jt(r) + ";font-weight:" + jt(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + jt(o + "") + "px;color:" + jt(a) + ";font-weight:" + jt(s + "")
  } : {
    nameStyle: {
      fontSize: n,
      fill: r,
      fontWeight: i
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var IA = [0, 10, 20, 30], LA = ["", `
`, `

`, `


`];
function Ka(e, t) {
  return t.type = e, t;
}
function xh(e) {
  return e.type === "section";
}
function E_(e) {
  return xh(e) ? PA : EA;
}
function R_(e) {
  if (xh(e)) {
    var t = 0, r = e.blocks.length, n = r > 1 || r > 0 && !e.noHeader;
    return I(e.blocks, function(i) {
      var a = R_(i);
      a >= t && (t = a + +(n && // 0 always can not be readable gap level.
      (!a || xh(i) && !i.noHeader)));
    }), t;
  }
  return 0;
}
function PA(e, t, r, n) {
  var i = t.noHeader, a = RA(R_(t)), o = [], s = t.blocks || [];
  Ve(!s || W(s)), s = s || [];
  var u = e.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (te(l, u)) {
      var f = new aD(l[u], null);
      s.sort(function(p, g) {
        return f.evaluate(p.sortParam, g.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  I(s, function(p, g) {
    var m = t.valueFormatter, y = E_(p)(
      // Inherit valueFormatter
      m ? N(N({}, e), {
        valueFormatter: m
      }) : e,
      p,
      g > 0 ? a.html : 0,
      n
    );
    y != null && o.push(y);
  });
  var h = e.renderMode === "richText" ? o.join(a.richText) : Ch(n, o.join(""), i ? r : a.html);
  if (i)
    return h;
  var c = Th(t.header, "ordinal", e.useUTC), v = P_(n, e.renderMode).nameStyle, d = L_(n);
  return e.renderMode === "richText" ? O_(e, c, v) + a.richText + h : Ch(n, '<div style="' + v + ";" + d + ';">' + jt(c) + "</div>" + h, r);
}
function EA(e, t, r, n) {
  var i = e.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = e.useUTC, f = t.valueFormatter || e.valueFormatter || function(S) {
    return S = W(S) ? S : [S], Z(S, function(b, w) {
      return Th(b, W(v) ? v[w] : v, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || q.color.secondary, i), c = a ? "" : Th(u, "ordinal", l), v = t.valueType, d = o ? [] : f(t.value, t.rawDataIndex), p = !s || !a, g = !s && a, m = P_(n, i), y = m.nameStyle, _ = m.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : O_(e, c, y)) + (o ? "" : NA(e, d, p, g, _)) : Ch(n, (s ? "" : h) + (a ? "" : OA(c, !s, y)) + (o ? "" : kA(d, p, g, _)), r);
  }
}
function Ep(e, t, r, n, i, a) {
  if (e) {
    var o = E_(e), s = {
      useUTC: i,
      renderMode: r,
      orderMode: n,
      markupStyleCreator: t,
      valueFormatter: e.valueFormatter
    };
    return o(s, e, 0, a);
  }
}
function RA(e) {
  return {
    html: IA[e],
    richText: LA[e]
  };
}
function Ch(e, t, r) {
  var n = '<div style="clear:both"></div>', i = "margin: " + r + "px 0 0", a = L_(e);
  return '<div style="' + i + ";" + a + ';">' + t + n + "</div>";
}
function OA(e, t, r) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + r + ";" + n + '">' + jt(e) + "</span>";
}
function kA(e, t, r, n) {
  var i = r ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
  return e = W(e) ? e : [e], '<span style="' + a + ";" + n + '">' + Z(e, function(o) {
    return jt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function O_(e, t, r) {
  return e.markupStyleCreator.wrapRichTextStyle(t, r);
}
function NA(e, t, r, n, i) {
  var a = [i], o = n ? 10 : 20;
  return r && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), e.markupStyleCreator.wrapRichTextStyle(W(t) ? t.join("  ") : t, a);
}
function BA(e, t) {
  var r = e.getData().getItemVisual(t, "style"), n = r[e.visualDrawType];
  return Yn(n);
}
function k_(e, t) {
  var r = e.get("padding");
  return r ?? (t === "richText" ? [8, 10] : 10);
}
var $l = (
  /** @class */
  function() {
    function e() {
      this.richTextStyles = {}, this._nextStyleNameId = Dv();
    }
    return e.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, e.prototype.makeTooltipMarker = function(t, r, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = iA({
        color: r,
        type: t,
        renderMode: n,
        markerId: i
      });
      return Y(a) ? a : (this.richTextStyles[i] = a.style, a.content);
    }, e.prototype.wrapRichTextStyle = function(t, r) {
      var n = {};
      W(r) ? I(r, function(a) {
        return N(n, a);
      }) : N(n, r);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
    }, e;
  }()
);
function FA(e) {
  var t = e.series, r = e.dataIndex, n = e.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(r), u = W(s), l = BA(t, r), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = zA(s, t, r, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var p = i.getDimensionInfo(a[0]);
    v = f = ki(i, r, a[0]), h = p.type;
  } else
    v = f = u ? s[0] : s;
  var g = Av(t), m = g && t.name || "", y = i.getName(r), _ = n ? m : y;
  return Ka("section", {
    header: m,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !g,
    sortParam: v,
    blocks: [Ka("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !nr(_),
      value: f,
      valueType: h,
      rawDataIndex: i.getRawIndex(r)
    })].concat(c || [])
  });
}
function zA(e, t, r, n, i) {
  var a = t.getData(), o = $r(e, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? I(n, function(h) {
    f(ki(a, r, h), h);
  }) : I(e, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(Ka("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: v.displayName,
      value: h,
      valueType: v.type
    })) : (s.push(h), u.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var Ir = _t();
function qo(e, t) {
  return e.getName(t) || e.getId(t);
}
var GA = "__universalTransitionEnabled", He = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r._selectedDataIndicesMap = {}, r;
    }
    return t.prototype.init = function(r, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = Oa({
        count: HA,
        reset: UA
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(r, i);
      var a = Ir(this).sourceManager = new AA(this);
      a.prepareSource();
      var o = this.getInitialData(r, i);
      Op(o, this), this.dataTask.context.data = o, Ir(this).dataBeforeProcessed = o, Rp(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = qa(this), a = i ? _o(r) : {}, o = this.subType;
      pt.hasClass(o) && (o += "Series"), gt(r, n.getTheme().get(this.subType)), gt(r, this.getDefaultOption()), sh(r, "label", ["show"]), this.fillDataTextStyle(r.data), i && jr(r, a, i);
    }, t.prototype.mergeOption = function(r, n) {
      r = gt(this.option, r, !0), this.fillDataTextStyle(r.data);
      var i = qa(this);
      i && jr(this.option, r, i);
      var a = Ir(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(r, n);
      Op(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Ir(this).dataBeforeProcessed = o, Rp(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(r) {
      if (r && !fe(r))
        for (var n = ["show"], i = 0; i < r.length; i++)
          r[i] && r[i].label && sh(r[i], "label", n);
    }, t.prototype.getInitialData = function(r, n) {
    }, t.prototype.appendData = function(r) {
      var n = this.getRawData();
      n.appendData(r.data);
    }, t.prototype.getData = function(r) {
      var n = Dh(this);
      if (n) {
        var i = n.context.data;
        return r == null || !i.getLinkedData ? i : i.getLinkedData(r);
      } else
        return Ir(this).data;
    }, t.prototype.getAllData = function() {
      var r = this.getData();
      return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
        data: r
      }];
    }, t.prototype.setData = function(r) {
      var n = Dh(this);
      if (n) {
        var i = n.context;
        i.outputData = r, n !== this.dataTask && (i.data = r);
      }
      Ir(this).data = r;
    }, t.prototype.getEncode = function() {
      var r = this.get("encode", !0);
      if (r)
        return j(r);
    }, t.prototype.getSourceManager = function() {
      return Ir(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return Ir(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var r = this.get("colorBy");
      return r || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var r = this.coordinateSystem;
      return r && r.getBaseAxis && r.getBaseAxis();
    }, t.prototype.indicesOfNearest = function(r, n, i, a) {
      var o = this.getData(), s = this.coordinateSystem, u = s && s.getAxis(r);
      if (!s || !u)
        return [];
      var l = u.dataToCoord(i);
      a == null && (a = 1 / 0);
      for (var f = [], h = 1 / 0, c = -1, v = 0, d = o.getDimensionIndex(n), p = o.getStore(), g = 0, m = p.count(); g < m; g++) {
        var y = p.get(d, g), _ = u.dataToCoord(y), S = l - _, b = Math.abs(S);
        b <= a && ((b < h || b === h && S >= 0 && c < 0) && (h = b, c = S, v = 0), S === c && (f[v++] = g));
      }
      return f.length = v, f;
    }, t.prototype.formatTooltip = function(r, n, i) {
      return FA({
        series: this,
        dataIndex: r,
        multipleSeries: n
      });
    }, t.prototype.isAnimationEnabled = function() {
      var r = this.ecModel;
      if (nt.node && !(r && r.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(r, n, i) {
      var a = this.ecModel, o = vc.prototype.getColorFromPalette.call(this, r, n, i);
      return o || (o = a.getColorFromPalette(r, n, i)), o;
    }, t.prototype.coordDimToDataDim = function(r) {
      return this.getRawData().mapDimensionsAll(r);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(r, n) {
      this._innerSelect(this.getData(n), r);
    }, t.prototype.unselect = function(r, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < r.length; s++) {
          var u = r[s], l = qo(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(r, n) {
      for (var i = [], a = 0; a < r.length; a++)
        i[0] = r[a], this.isSelected(r[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var r = this._selectedDataIndicesMap, n = lt(r), i = [], a = 0; a < n.length; a++) {
        var o = r[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, t.prototype.isSelected = function(r, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[qo(a, r)]) && !a.getItemModel(r).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[GA])
        return !0;
      var r = this.option.universalTransition;
      return r ? r === !0 ? !0 : r && r.enabled : !1;
    }, t.prototype._innerSelect = function(r, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          K(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = n[f], c = qo(r, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = r.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = n[u - 1], c = qo(r, v);
          o.selectedMap = (i = {}, i[c] = !0, i), this._selectedDataIndicesMap = (a = {}, a[c] = r.getRawIndex(v), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(r) {
      if (!this.option.selectedMap) {
        var n = [];
        r.hasItemOption && r.each(function(i) {
          var a = r.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(r, n);
      }
    }, t.registerClass = function(r) {
      return pt.registerClass(r);
    }, t.protoInitialize = function() {
      var r = t.prototype;
      r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill";
    }(), t;
  }(pt)
);
fr(He, gA);
fr(He, vc);
by(He, pt);
function Rp(e) {
  var t = e.name;
  Av(e) || (e.name = VA(e) || t);
}
function VA(e) {
  var t = e.getRawData(), r = t.mapDimensionsAll("seriesName"), n = [];
  return I(r, function(i) {
    var a = t.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function HA(e) {
  return e.model.getRawData().count();
}
function UA(e) {
  var t = e.model;
  return t.setData(t.getRawData().cloneShallow()), WA;
}
function WA(e, t) {
  t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Op(e, t) {
  I(zb(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function(r) {
    e.wrapMethod(r, Rt(YA, t));
  });
}
function YA(e, t) {
  var r = Dh(e);
  return r && r.setOutputEnd((t || this).count()), t;
}
function Dh(e) {
  var t = (e.ecModel || {}).scheduler, r = t && t.getPipeline(e.uid);
  if (r) {
    var n = r.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(e.uid));
    }
    return n;
  }
}
var XA = dt.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    e.moveTo(r, n - a), e.lineTo(r + i, n + a), e.lineTo(r - i, n + a), e.closePath();
  }
}), $A = dt.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    e.moveTo(r, n - a), e.lineTo(r + i, n), e.lineTo(r, n + a), e.lineTo(r - i, n), e.closePath();
  }
}), ZA = dt.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), u = n - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), c = Math.cos(l), v = o * 0.6, d = o * 0.7;
    e.moveTo(r - f, u + s), e.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), e.bezierCurveTo(r + f - h * v, u + s + c * v, r, n - d, r, n), e.bezierCurveTo(r, n - d, r - f + h * v, u + s + c * v, r - f, u + s), e.closePath();
  }
}), qA = dt.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.height, n = t.width, i = t.x, a = t.y, o = n / 3 * 2;
    e.moveTo(i, a), e.lineTo(i + o, a + r), e.lineTo(i, a + r / 4 * 3), e.lineTo(i - o, a + r), e.lineTo(i, a), e.closePath();
  }
}), KA = {
  line: qr,
  rect: Lt,
  roundRect: Lt,
  square: Lt,
  circle: Fu,
  diamond: $A,
  pin: ZA,
  arrow: qA,
  triangle: XA
}, QA = {
  line: function(e, t, r, n, i) {
    i.x1 = e, i.y1 = t + n / 2, i.x2 = e + r, i.y2 = t + n / 2;
  },
  rect: function(e, t, r, n, i) {
    i.x = e, i.y = t, i.width = r, i.height = n;
  },
  roundRect: function(e, t, r, n, i) {
    i.x = e, i.y = t, i.width = r, i.height = n, i.r = Math.min(r, n) / 4;
  },
  square: function(e, t, r, n, i) {
    var a = Math.min(r, n);
    i.x = e, i.y = t, i.width = a, i.height = a;
  },
  circle: function(e, t, r, n, i) {
    i.cx = e + r / 2, i.cy = t + n / 2, i.r = Math.min(r, n) / 2;
  },
  diamond: function(e, t, r, n, i) {
    i.cx = e + r / 2, i.cy = t + n / 2, i.width = r, i.height = n;
  },
  pin: function(e, t, r, n, i) {
    i.x = e + r / 2, i.y = t + n / 2, i.width = r, i.height = n;
  },
  arrow: function(e, t, r, n, i) {
    i.x = e + r / 2, i.y = t + n / 2, i.width = r, i.height = n;
  },
  triangle: function(e, t, r, n, i) {
    i.cx = e + r / 2, i.cy = t + n / 2, i.width = r, i.height = n;
  }
}, Ah = {};
I(KA, function(e, t) {
  Ah[t] = new e();
});
var jA = dt.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(e, t, r) {
    var n = Bs(e, t, r), i = this.shape;
    return i && i.symbolType === "pin" && t.position === "inside" && (n.y = r.y + r.height * 0.4), n;
  },
  buildPath: function(e, t, r) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = Ah[n];
      i || (n = "rect", i = Ah[n]), QA[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(e, i.shape, r);
    }
  }
});
function JA(e, t) {
  if (this.type !== "image") {
    var r = this.style;
    this.__isEmptyBrush ? (r.stroke = e, r.fill = t || q.color.neutral00, r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = e : r.fill = e, this.markRedraw();
  }
}
function Bi(e, t, r, n, i, a, o) {
  var s = e.indexOf("empty") === 0;
  s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
  var u;
  return e.indexOf("image://") === 0 ? u = k0(e.slice(8), new tt(t, r, n, i), o ? "center" : "cover") : e.indexOf("path://") === 0 ? u = Uv(e.slice(7), {}, new tt(t, r, n, i), o ? "center" : "cover") : u = new jA({
    shape: {
      symbolType: e,
      x: t,
      y: r,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = JA, a && u.setColor(a), u;
}
function tM(e) {
  return W(e) || (e = [+e, +e]), [e[0] || 0, e[1] || 0];
}
function N_(e, t) {
  if (e != null)
    return W(e) || (e = [e, e]), [Tt(e[0], t[0]) || 0, Tt($(e[1], e[0]), t[1]) || 0];
}
var eM = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r.hasSymbolVisual = !0, r;
    }
    return t.prototype.getInitialData = function(r) {
      return Jv(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getLegendIcon = function(r) {
      var n = new Ft(), i = Bi("line", 0, r.itemHeight / 2, r.itemWidth, 0, r.lineStyle.stroke, !1);
      n.add(i), i.setStyle(r.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, u = r.itemHeight * 0.8, l = Bi(s, (r.itemWidth - u) / 2, (r.itemHeight - u) / 2, u, u, r.itemStyle.fill);
      n.add(l), l.setStyle(r.itemStyle);
      var f = r.iconRotate === "inherit" ? o : r.iconRotate || 0;
      return l.rotation = f * Math.PI / 180, l.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), s.indexOf("empty") > -1 && (l.style.stroke = l.style.fill, l.style.fill = q.color.neutral00, l.style.lineWidth = 2), n;
    }, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 6,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point. (non-finite values)
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      /**
       * @deprecated
       */
      triggerLineEvent: !1,
      triggerEvent: !1
    }, t;
  }(He)
);
function dc(e, t) {
  var r = e.mapDimensionsAll("defaultedLabel"), n = r.length;
  if (n === 1) {
    var i = ki(e, t, r[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < r.length; o++)
      a.push(ki(e, t, r[o]));
    return a.join(" ");
  }
}
function B_(e, t) {
  var r = e.mapDimensionsAll("defaultedLabel");
  if (!W(t))
    return t + "";
  for (var n = [], i = 0; i < r.length; i++) {
    var a = e.getDimensionIndex(r[i]);
    a >= 0 && n.push(t[a]);
  }
  return n.join(" ");
}
var pc = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r, n, i, a) {
      var o = e.call(this) || this;
      return o.updateData(r, n, i, a), o;
    }
    return t.prototype._createSymbol = function(r, n, i, a, o, s) {
      this.removeAll();
      var u = Bi(r, -1, -1, 2, 2, null, s);
      u.attr({
        z2: $(o, 100),
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), u.drift = rM, this._symbolType = r, this.add(u);
    }, t.prototype.stopSymbolAnimation = function(r) {
      this.childAt(0).stopAnimation(null, r);
    }, t.prototype.getSymbolType = function() {
      return this._symbolType;
    }, t.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, t.prototype.highlight = function() {
      Qs(this.childAt(0));
    }, t.prototype.downplay = function() {
      js(this.childAt(0));
    }, t.prototype.setZ = function(r, n) {
      var i = this.childAt(0);
      i.zlevel = r, i.z = n;
    }, t.prototype.setDraggable = function(r, n) {
      var i = this.childAt(0);
      i.draggable = r, i.cursor = !n && r ? "move" : i.cursor;
    }, t.prototype.updateData = function(r, n, i, a) {
      this.silent = !1;
      var o = r.getItemVisual(n, "symbol") || "circle", s = r.hostModel, u = t.getSymbolSize(r, n), l = t.getSymbolZ2(r, n), f = o !== this._symbolType, h = a && a.disableAnimation;
      if (f) {
        var c = r.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, r, n, u, l, c);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var d = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        h ? v.attr(d) : re(v, d, s, n), Vv(v);
      }
      if (this._updateCommon(r, n, u, i, a), f) {
        var v = this.childAt(0);
        if (!h) {
          var d = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: v.style.opacity
            }
          };
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, Me(v, d, s, n);
        }
      }
      h && this.childAt(0).stopAnimation("leave");
    }, t.prototype._updateCommon = function(r, n, i, a, o) {
      var s = this.childAt(0), u = r.hostModel, l, f, h, c, v, d, p, g, m;
      if (a && (l = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, c = a.focus, v = a.blurScope, p = a.labelStatesModels, g = a.hoverScale, m = a.cursorStyle, d = a.emphasisDisabled), !a || r.hasItemOption) {
        var y = a && a.itemModel ? a.itemModel : r.getItemModel(n), _ = y.getModel("emphasis");
        l = _.getModel("itemStyle").getItemStyle(), h = y.getModel(["select", "itemStyle"]).getItemStyle(), f = y.getModel(["blur", "itemStyle"]).getItemStyle(), c = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), p = yo(y), g = _.getShallow("scale"), m = y.getShallow("cursor");
      }
      var S = r.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
      var b = N_(r.getItemVisual(n, "symbolOffset"), i);
      b && (s.x = b[0], s.y = b[1]), m && s.attr("cursor", m);
      var w = r.getItemVisual(n, "style"), T = w.fill;
      if (s instanceof vr) {
        var x = s.style;
        s.useStyle(N({
          // TODO other properties like x, y ?
          image: x.image,
          x: x.x,
          y: x.y,
          width: x.width,
          height: x.height
        }, w));
      } else
        s.__isEmptyBrush ? s.useStyle(N({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(T, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var D = r.getItemVisual(n, "liftZ"), C = this._z2;
      D != null ? C == null && (this._z2 = s.z2, s.z2 += D) : C != null && (s.z2 = C, this._z2 = null);
      var A = o && o.useNameLabel;
      mo(s, p, {
        labelFetcher: u,
        labelDataIndex: n,
        defaultText: L,
        inheritColor: T,
        defaultOpacity: w.opacity
      });
      function L(E) {
        return A ? r.getName(E) : dc(r, E);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var M = s.ensureState("emphasis");
      M.style = l, s.ensureState("select").style = h, s.ensureState("blur").style = f;
      var P = g == null || g === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(g) && g > 0 ? +g : 1;
      M.scaleX = this._sizeX * P, M.scaleY = this._sizeY * P, this.setSymbolScale(1), Xa(this, c, v, d);
    }, t.prototype.setSymbolScale = function(r) {
      this.scaleX = this.scaleY = r;
    }, t.prototype.fadeOut = function(r, n, i) {
      var a = this.childAt(0), o = ut(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var u = a.getTextContent();
        u && tu(u, {
          style: {
            opacity: 0
          }
        }, n, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            a.removeTextContent();
          }
        });
      } else
        a.removeTextContent();
      tu(a, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, n, {
        dataIndex: o,
        cb: r,
        removeOpt: s
      });
    }, t.getSymbolSize = function(r, n) {
      return tM(r.getItemVisual(n, "symbolSize"));
    }, t.getSymbolZ2 = function(r, n) {
      return r.getItemVisual(n, "z2");
    }, t;
  }(Ft)
);
function rM(e, t) {
  this.parent.drift(e, t);
}
function Ko(e, t, r, n) {
  return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n && n.isIgnore && n.isIgnore(r)) && !(n && n.clipShape && !n.clipShape.contain(t[0], t[1])) && e.getItemVisual(r, "symbol") !== "none";
}
function kp(e) {
  return e != null && !K(e) && (e = {
    isIgnore: e
  }), e || {};
}
function Np(e) {
  var t = e.hostModel, r = t.getModel("emphasis");
  return {
    emphasisItemStyle: r.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: r.get("focus"),
    blurScope: r.get("blurScope"),
    emphasisDisabled: r.get("disabled"),
    hoverScale: r.get("scale"),
    labelStatesModels: yo(t),
    cursorStyle: t.get("cursor")
  };
}
function Bp(e, t, r, n, i, a, o) {
  var s = new e(t, r, n, i);
  return s.setPosition(a), t.setItemGraphicEl(r, s), o.add(s), s;
}
var nM = (
  /** @class */
  function() {
    function e(t) {
      this.group = new Ft(), this._SymbolCtor = t || pc;
    }
    return e.prototype.updateData = function(t, r) {
      this._progressiveEls = null, r = kp(r);
      var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = r.disableAnimation, u = this._seriesScope = Np(t), l = {
        disableAnimation: s
      }, f = r.getSymbolPoint || function(h) {
        return t.getItemLayout(h);
      };
      a || n.removeAll(), t.diff(a).add(function(h) {
        var c = f(h);
        Ko(t, c, h, r) && Bp(o, t, h, u, l, c, n);
      }).update(function(h, c) {
        var v = a.getItemGraphicEl(c), d = f(h);
        if (!Ko(t, d, h, r)) {
          n.remove(v);
          return;
        }
        var p = t.getItemVisual(h, "symbol") || "circle", g = v && v.getSymbolType && v.getSymbolType();
        if (!v || g && g !== p)
          n.remove(v), v = new o(t, h, u, l), v.setPosition(d);
        else {
          v.updateData(t, h, u, l);
          var m = {
            x: d[0],
            y: d[1]
          };
          s ? v.attr(m) : re(v, m, i);
        }
        n.add(v), t.setItemGraphicEl(h, v);
      }).remove(function(h) {
        var c = a.getItemGraphicEl(h);
        c && c.fadeOut(function() {
          n.remove(c);
        }, i);
      }).execute(), this._getSymbolPoint = f, this._data = t;
    }, e.prototype.updateLayout = function(t) {
      var r = this._data;
      if (r)
        for (var n = this, i = r.getStore(), a = 0, o = i.count(); a < o; a++) {
          var s = r.getItemGraphicEl(a), u = n._getSymbolPoint(a);
          Ko(r, u, a, t) ? (s = s || Bp(n._SymbolCtor, r, a, n._seriesScope, {
            disableAnimation: !0
          }, u, n.group), s.stopAnimation(), s.setPosition(u), s.markRedraw()) : s && (n.group.remove(s), r.setItemGraphicEl(a, null));
        }
    }, e.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = Np(t), this._data = null, this.group.removeAll();
    }, e.prototype.incrementalUpdate = function(t, r, n, i) {
      this._progressiveEls = [], i = kp(i);
      function a(l) {
        l.isGroup || (l.incremental = n, l.ensureState("emphasis").hoverLayer = Hv);
      }
      for (var o = t.start; o < t.end; o++) {
        var s = r.getItemLayout(o);
        if (Ko(r, s, o, i)) {
          var u = new this._SymbolCtor(r, o, this._seriesScope);
          u.traverse(a), u.setPosition(s), this.group.add(u), r.setItemGraphicEl(o, u), this._progressiveEls.push(u);
        }
      }
    }, e.prototype.eachRendered = function(t) {
      Vu(this._progressiveEls || this.group, t);
    }, e.prototype.remove = function(t) {
      var r = this.group, n = this._data;
      n && t ? n.eachItemGraphicEl(function(i) {
        i.fadeOut(function() {
          r.remove(i);
        }, n.hostModel);
      }) : r.removeAll();
    }, e;
  }()
);
function F_(e, t, r) {
  var n = e.getBaseAxis(), i = e.getOtherAxis(n), a = iM(i, r), o = n.dim, s = i.dim, u = t.mapDimension(s), l = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = Z(e.dimensions, function(d) {
    return t.mapDimension(d);
  }), c = !1, v = t.getCalculationInfo("stackResultDimension");
  return Ni(
    t,
    h[0]
    /* , dims[1] */
  ) && (c = !0, h[0] = v), Ni(
    t,
    h[1]
    /* , dims[0] */
  ) && (c = !0, h[1] = v), {
    dataDimsForPoint: h,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!c,
    valueDim: u,
    baseDim: l,
    baseDataOffset: f,
    stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
  };
}
function iM(e, t) {
  var r = 0, n = e.scale.getExtent();
  return t === "start" ? r = n[0] : t === "end" ? r = n[1] : mt(t) && !isNaN(t) ? r = t : n[0] > 0 ? r = n[0] : n[1] < 0 && (r = n[1]), r;
}
function z_(e, t, r, n) {
  var i = NaN;
  e.stacked && (i = r.get(r.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = e.valueStart);
  var a = e.baseDataOffset, o = [];
  return o[a] = r.get(e.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
}
function Ie(e, t) {
  return !isFinite(e) || !isFinite(t);
}
var aM = typeof Float32Array !== Ui ? Float32Array : void 0, oM = typeof Float64Array !== Ui ? Float64Array : void 0;
function yr(e) {
  return gc({
    ctor: aM
  }, e).arr;
}
function gc(e, t) {
  var r = e.arr, n = e.ctor;
  if (t > Bd && (t = Bd), !r || e.typed && r.length < t) {
    var i = void 0;
    if (n)
      try {
        i = new n(t), e.typed = !0, r && i.set(r);
      } catch {
      }
    if (!i && (i = [], e.typed = !1, r))
      for (var a = 0, o = r.length; a < o; a++)
        i[a] = r[a];
    e.arr = i;
  }
  return e;
}
function sM(e, t) {
  var r = [];
  return t.diff(e).add(function(n) {
    r.push({
      cmd: "+",
      idx: n
    });
  }).update(function(n, i) {
    r.push({
      cmd: "=",
      idx: i,
      idx1: n
    });
  }).remove(function(n) {
    r.push({
      cmd: "-",
      idx: n
    });
  }).execute(), r;
}
function uM(e, t, r, n, i, a, o, s) {
  for (var u = sM(e, t), l = [], f = [], h = [], c = [], v = [], d = [], p = [], g = F_(i, t, o), m = e.getLayout("points") || [], y = t.getLayout("points") || [], _ = 0; _ < u.length; _++) {
    var S = u[_], b = !0, w = void 0, T = void 0;
    switch (S.cmd) {
      case "=":
        w = S.idx * 2, T = S.idx1 * 2;
        var x = m[w], D = m[w + 1], C = y[T], A = y[T + 1];
        (isNaN(x) || isNaN(D)) && (x = C, D = A), l.push(x, D), f.push(C, A), h.push(r[w], r[w + 1]), c.push(n[T], n[T + 1]), p.push(t.getRawIndex(S.idx1));
        break;
      case "+":
        var L = S.idx, M = g.dataDimsForPoint, P = i.dataToPoint([t.get(M[0], L), t.get(M[1], L)]);
        T = L * 2, l.push(P[0], P[1]), f.push(y[T], y[T + 1]);
        var E = z_(g, i, t, L);
        h.push(E[0], E[1]), c.push(n[T], n[T + 1]), p.push(t.getRawIndex(L));
        break;
      case "-":
        b = !1;
    }
    b && (v.push(S), d.push(d.length));
  }
  d.sort(function(J, it) {
    return p[J] - p[it];
  });
  for (var R = l.length, k = yr(R), O = yr(R), B = yr(R), F = yr(R), G = [], _ = 0; _ < d.length; _++) {
    var U = d[_], X = _ * 2, H = U * 2;
    k[X] = l[H], k[X + 1] = l[H + 1], O[X] = f[H], O[X + 1] = f[H + 1], B[X] = h[H], B[X + 1] = h[H + 1], F[X] = c[H], F[X + 1] = c[H + 1], G[_] = v[U];
  }
  return {
    current: k,
    next: O,
    stackedOnCurrent: B,
    stackedOnNext: F,
    status: G
  };
}
var Lr = Math.min, Pr = Math.max;
function Mh(e, t, r, n, i, a, o, s, u) {
  for (var l, f, h, c, v, d, p = r, g = 0; g < n; g++) {
    var m = t[p * 2], y = t[p * 2 + 1];
    if (p >= i || p < 0)
      break;
    if (Ie(m, y)) {
      if (u) {
        p += a;
        continue;
      }
      break;
    }
    if (p === r)
      e[a > 0 ? "moveTo" : "lineTo"](m, y), h = m, c = y;
    else {
      var _ = m - l, S = y - f;
      if (_ * _ + S * S < 0.5) {
        p += a;
        continue;
      }
      if (o > 0) {
        for (var b = p + a, w = t[b * 2], T = t[b * 2 + 1]; w === m && T === y && g < n; )
          g++, b += a, p += a, w = t[b * 2], T = t[b * 2 + 1], m = t[p * 2], y = t[p * 2 + 1], _ = m - l, S = y - f;
        var x = g + 1;
        if (u)
          for (; Ie(w, T) && x < n; )
            x++, b += a, w = t[b * 2], T = t[b * 2 + 1];
        var D = 0.5, C = 0, A = 0, L = void 0, M = void 0;
        if (x >= n || Ie(w, T))
          v = m, d = y;
        else {
          C = w - l, A = T - f;
          var P = m - l, E = w - m, R = y - f, k = T - y, O = void 0, B = void 0;
          if (s === "x") {
            O = Math.abs(P), B = Math.abs(E);
            var F = C > 0 ? 1 : -1;
            v = m - F * O * o, d = y, L = m + F * B * o, M = y;
          } else if (s === "y") {
            O = Math.abs(R), B = Math.abs(k);
            var G = A > 0 ? 1 : -1;
            v = m, d = y - G * O * o, L = m, M = y + G * B * o;
          } else
            O = Math.sqrt(P * P + R * R), B = Math.sqrt(E * E + k * k), D = B / (B + O), v = m - C * o * (1 - D), d = y - A * o * (1 - D), L = m + C * o * D, M = y + A * o * D, L = Lr(L, Pr(w, m)), M = Lr(M, Pr(T, y)), L = Pr(L, Lr(w, m)), M = Pr(M, Lr(T, y)), C = L - m, A = M - y, v = m - C * O / B, d = y - A * O / B, v = Lr(v, Pr(l, m)), d = Lr(d, Pr(f, y)), v = Pr(v, Lr(l, m)), d = Pr(d, Lr(f, y)), C = m - v, A = y - d, L = m + C * B / O, M = y + A * B / O;
        }
        e.bezierCurveTo(h, c, v, d, m, y), h = L, c = M;
      } else
        e.lineTo(m, y);
    }
    l = m, f = y, p += a;
  }
  return g;
}
var G_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return e;
  }()
), lM = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.type = "ec-polyline", n;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: q.color.neutral99,
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new G_();
    }, t.prototype.buildPath = function(r, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && Ie(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && Ie(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += Mh(r, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, t.prototype.getPointOn = function(r, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = Zr.CMD, s, u, l = n === "x", f = [], h = 0; h < a.length; ) {
        var c = a[h++], v = void 0, d = void 0, p = void 0, g = void 0, m = void 0, y = void 0, _ = void 0;
        switch (c) {
          case o.M:
            s = a[h++], u = a[h++];
            break;
          case o.L:
            if (v = a[h++], d = a[h++], _ = l ? (r - s) / (v - s) : (r - u) / (d - u), _ <= 1 && _ >= 0) {
              var S = l ? (d - u) * _ + u : (v - s) * _ + s;
              return l ? [r, S] : [S, r];
            }
            s = v, u = d;
            break;
          case o.C:
            v = a[h++], d = a[h++], p = a[h++], g = a[h++], m = a[h++], y = a[h++];
            var b = l ? zs(s, v, p, m, r, f) : zs(u, d, g, y, r, f);
            if (b > 0)
              for (var w = 0; w < b; w++) {
                var T = f[w];
                if (T <= 1 && T >= 0) {
                  var S = l ? Ht(u, d, g, y, T) : Ht(s, v, p, m, T);
                  return l ? [r, S] : [S, r];
                }
              }
            s = m, u = y;
            break;
        }
      }
    }, t;
  }(dt)
), fM = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(G_)
), hM = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.type = "ec-polygon", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new fM();
    }, t.prototype.buildPath = function(r, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, u = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && Ie(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && Ie(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var l = Mh(r, i, o, s, s, 1, n.smooth, u, n.connectNulls);
        Mh(r, a, o + l - 1, l, s, -1, n.stackedOnSmooth, u, n.connectNulls), o += l + 1, r.closePath();
      }
    }, t;
  }(dt)
);
function mc() {
  var e = _t();
  return function(t) {
    var r = e(t), n = t.pipelineContext, i = !!r.large, a = !!r.progressiveRender, o = r.large = !!(n && n.large), s = r.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var V_ = _t(), vM = mc(), Le = (
  /** @class */
  function() {
    function e() {
      this.group = new Ft(), this.uid = Yu("viewChart"), this.renderTask = Oa({
        plan: cM,
        reset: dM
      }), this.renderTask.context = {
        view: this
      };
    }
    return e.prototype.init = function(t, r) {
    }, e.prototype.render = function(t, r, n, i) {
    }, e.prototype.highlight = function(t, r, n, i) {
      var a = t.getData(i && i.dataType);
      a && zp(a, i, "emphasis");
    }, e.prototype.downplay = function(t, r, n, i) {
      var a = t.getData(i && i.dataType);
      a && zp(a, i, "normal");
    }, e.prototype.remove = function(t, r) {
      this.group.removeAll();
    }, e.prototype.dispose = function(t, r) {
    }, e.prototype.updateView = function(t, r, n, i) {
      this.render(t, r, n, i);
    }, e.prototype.updateVisual = function(t, r, n, i) {
      this.render(t, r, n, i);
    }, e.prototype.eachRendered = function(t) {
      Vu(this.group, t);
    }, e.markUpdateMethod = function(t, r) {
      V_(t).updateMethod = r;
    }, e.protoInitialize = function() {
      var t = e.prototype;
      t.type = "chart";
    }(), e;
  }()
);
function Fp(e, t, r) {
  e && ch(e) && (t === "emphasis" ? Qs : js)(e, r);
}
function zp(e, t, r) {
  var n = Wn(e, t), i = t && t.highlightKey != null ? Rx(t.highlightKey) : null;
  n != null ? I(ee(n), function(a) {
    Fp(e.getItemGraphicEl(a), r, i);
  }) : e.eachItemGraphicEl(function(a) {
    Fp(a, r, i);
  });
}
pv(Le);
Mu(Le);
function cM(e) {
  return vM(e.model);
}
function dM(e) {
  var t = e.model, r = e.ecModel, n = e.api, i = e.payload, a = t.pipelineContext.progressiveRender, o = e.view, s = i && V_(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, r, n, i), pM[u];
}
var pM = {
  incrementalPrepareRender: {
    progress: function(e, t) {
      t.view.incrementalRender(e, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(e, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
};
function H_(e, t, r, n, i) {
  var a = e.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = r.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new Lt({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (t) {
    var c = e.getBaseAxis(), v = c.isHorizontal(), d = c.inverse;
    v ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
    var p = et(i) ? function(g) {
      i(g, h);
    } : null;
    Me(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, r, null, n, p);
  }
  return h;
}
function U_(e, t, r) {
  var n = e.getArea(), i = ft(n.r0, 1), a = ft(n.r, 1), o = new en({
    shape: {
      cx: ft(e.cx, 1),
      cy: ft(e.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (t) {
    var s = e.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, Me(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, r);
  }
  return o;
}
function gM(e, t, r, n, i) {
  if (e) {
    if (e.type === "polar")
      return U_(e, t, r);
    if (e.type === "cartesian2d")
      return H_(e, t, r, n, i);
  } else return null;
  return null;
}
function W_(e, t) {
  return e.type === t;
}
var $e = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.isBlank = function() {
      return this._isBlank;
    }, e.prototype.setBlank = function(t) {
      this._isBlank = t;
    }, e;
  }()
);
Mu($e);
var mM = 0, Ih = (
  /** @class */
  function() {
    function e(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++mM, this._onCollect = t.onCollect;
    }
    return e.createByAxisModel = function(t) {
      var r = t.option, n = r.data, i = n && Z(n, yM);
      return new e({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: r.dedplication !== !1
      });
    }, e.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, e.prototype.parseAndCollect = function(t) {
      var r, n = this._needCollect;
      if (!Y(t) && !n)
        return t;
      if (n && !this._deduplication)
        return r = this.categories.length, this.categories[r] = t, this._onCollect && this._onCollect(t, r), r;
      var i = this._getOrCreateMap();
      return r = i.get(t), r == null && (n ? (r = this.categories.length, this.categories[r] = t, i.set(t, r), this._onCollect && this._onCollect(t, r)) : r = NaN), r;
    }, e.prototype._getOrCreateMap = function() {
      return this._map || (this._map = j(this.categories));
    }, e;
  }()
);
function yM(e) {
  return K(e) && e.value != null ? e.value : e + "";
}
var De = 0, Qa = 1, _M = {
  needTransform: 1,
  normalize: 1,
  scale: 1,
  transformIn: 1,
  transformOut: 1,
  contain: 1,
  getExtent: 1,
  getExtentUnsafe: 1,
  setExtent: 1,
  setExtent2: 1,
  getFilter: 1,
  sanitize: 1,
  getDefaultStartValue: 1,
  freeze: 1
}, SM = lt(_M), au = 2, Y_ = 3;
function yc(e, t, r) {
  var n;
  return e = e || {}, wM(e, r), {
    brk: n,
    mapper: e
  };
}
function X_(e, t) {
  I(SM, function(r) {
    e[r] = t[r];
  });
}
function $_(e, t) {
  e.freeze = Ut;
}
function ja(e) {
  return e.getExtentUnsafe(De, au);
}
function ou(e, t) {
  return e.getExtentUnsafe(Qa, t) || e.getExtentUnsafe(De, t);
}
function bM(e) {
  var t = ou(e, Y_);
  return t[1] - t[0];
}
function Ku(e) {
  var t = e.getExtentUnsafe(De, Y_);
  return t[1] - t[0];
}
function wM(e, t) {
  var r = e || {}, n = [];
  return r._extents = n, n[De] = t ? t.slice() : Te(), N(r, TM), r;
}
var TM = {
  needTransform: function() {
    return !1;
  },
  normalize: function(e) {
    var t = this._extents[Qa] || this._extents[De];
    return t[1] === t[0] ? 0.5 : (e - t[0]) / (t[1] - t[0]);
  },
  scale: function(e) {
    var t = this._extents[Qa] || this._extents[De];
    return e * (t[1] - t[0]) + t[0];
  },
  transformIn: function(e) {
    return e;
  },
  transformOut: function(e) {
    return e;
  },
  contain: function(e) {
    var t = ou(this, null);
    return e >= t[0] && e <= t[1];
  },
  getExtent: function() {
    return this._extents[De].slice();
  },
  getExtentUnsafe: function(e) {
    return this._extents[e];
  },
  setExtent: function(e, t) {
    Gp(this._extents, De, e, t);
  },
  setExtent2: function(e, t, r) {
    var n = this._extents;
    n[e] || (n[e] = n[De].slice()), Gp(n, e, t, r);
  },
  freeze: function() {
  }
};
function Gp(e, t, r, n) {
  Ri(r, n) && (e[t][0] = r, e[t][1] = n);
}
function Z_(e) {
  return su(e) || Fi(e);
}
function su(e) {
  return e.type === "interval";
}
function _c(e) {
  return e.type === "time";
}
function Fi(e) {
  return e.type === "log";
}
function Ze(e) {
  return e.type === "ordinal";
}
function xM(e) {
  var t = xv(e), r = $n(10, t), n = wr(e / r);
  return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, ft(n * r, -t);
}
function Xn(e) {
  return Fr(e) + 2;
}
function Qo(e, t) {
  return Wa(e) / Wa(t);
}
function Zl(e, t, r) {
  var n = r && r.lookup;
  if (n) {
    for (var i = 0; i < n.from.length; i++)
      if (e === n.from[i])
        return n.to[i];
  }
  return $n(t, e);
}
function q_(e, t, r) {
  var n = e.slice();
  if (n[0] === n[1]) {
    var i = r && r.ctnShp;
    if (n[0] !== 0) {
      var a = Ot(n[0]);
      t[1] || (n[1] += a / 2), n[0] -= a / 2;
    } else
      i && (n[0] = -1), n[1] = 1;
  }
  return (!Tr(n[0]) || !Tr(n[1])) && (n[0] = 0, n[1] = 1), n[1] < n[0] && n.reverse(), n;
}
function CM(e, t) {
  return [e[0] !== t[0], e[1] !== t[1]];
}
function Sc(e, t) {
  return e = e || t, wr(ht(e, 1));
}
function K_(e, t, r) {
  var n = ja(e), i = n[0], a = e.count(), o = Math.max((t || 0) + 1, 1);
  i !== 0 && o > 1 && a / o > 2 && (i = Math.round(Math.ceil(i / o) * o)), i !== n[0] && u(n[0], !0, !0);
  for (var s = i; s <= n[1]; s += o)
    u(s, !1, s === n[0] || s === n[1]);
  s - o !== n[1] && u(n[1], !0, !0);
  function u(l, f, h) {
    r({
      value: l,
      offInterval: f
    }, h);
  }
}
var Q_ = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this) || this;
      n.type = "ordinal", n.parse = t.parse, X_(n, t.decoratedMethods);
      var i = r.ordinalMeta;
      i || (i = new Ih({})), W(i) && (i = new Ih({
        categories: Z(i, function(o) {
          return K(o) ? o.value : o;
        })
      })), n._ordinalMeta = i;
      var a = yc(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        r.extent || [0, i.categories.length - 1]
      );
      return n._mapper = a.mapper, $_(n), n;
    }
    return t.parse = function(r) {
      return r == null ? r = NaN : Y(r) ? (r = this._ordinalMeta.getOrdinal(r), r == null && (r = NaN)) : r = wr(r), r;
    }, t.prototype.getTicks = function() {
      var r = [];
      return K_(this, 0, function(n) {
        r.push(n);
      }), r;
    }, t.prototype.getMinorTicks = function(r) {
    }, t.prototype.setSortInfo = function(r) {
      if (r == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = r.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = Zt(s, n.length); o < u; ++o) {
        var l = i[o] = n[o];
        a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i[o] = f, a[f] = o;
      }
    }, t.prototype._getTickNumber = function(r) {
      var n = this._ticksByOrdinalNumber;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, t.prototype.getRawOrdinalNumber = function(r) {
      var n = this._ordinalNumbersByTick;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, t.prototype.getLabel = function(r) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(r.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, t.prototype.count = function() {
      var r = ja(this._mapper);
      return r[1] - r[0] + 1;
    }, t.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, t.type = "ordinal", t.decoratedMethods = {
      needTransform: function() {
        return this._mapper.needTransform();
      },
      contain: function(r) {
        return this._mapper.contain(this._getTickNumber(r)) && r >= 0 && r < this._ordinalMeta.categories.length;
      },
      normalize: function(r) {
        return this._mapper.normalize(this._getTickNumber(r));
      },
      scale: function(r) {
        return this.getRawOrdinalNumber(wr(this._mapper.scale(r)));
      },
      transformIn: function(r, n) {
        return this._mapper.transformIn(this._getTickNumber(r), n);
      },
      transformOut: function(r, n) {
        return this.getRawOrdinalNumber(this._mapper.transformOut(r, n));
      },
      getExtent: function() {
        return this._mapper.getExtent();
      },
      getExtentUnsafe: function(r, n) {
        return this._mapper.getExtentUnsafe(r, n);
      },
      /**
       * NOTICE: OrdinalScale extent should always originates from
       * `[0, ordinalMeta.categories.length - 1]`, regardless of min/max of `series.data`.
       * But settings like `xxxAxis.min/max` can still modify the extent.
       * It is handled by constructor of `ScaleRawExtentInfo`.
       */
      setExtent: function(r, n) {
        return this._mapper.setExtent(r, n);
      },
      setExtent2: function(r, n, i) {
        return this._mapper.setExtent2(r, n, i);
      }
    }, t;
  }($e)
);
$e.registerClass(Q_);
function bc(e, t, r, n) {
  for (var i = e.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = e.getExtent(), s = 1; s < i.length; s++) {
    var u = i[s], l = i[s - 1];
    if (!(l.break || u.break)) {
      for (var f = 0, h = [], c = u.value - l.value, v = c / t, d = Xn(v); f < t - 1; ) {
        var p = ft(l.value + (f + 1) * v, d);
        p > o[0] && p < o[1] && h.push(p), f++;
      }
      var g = Xu();
      g && g.pruneTicksByBreak("auto", h, r, function(m) {
        return m;
      }, n, o), a.push(h);
    }
  }
  return a;
}
var Mi = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this) || this;
      n.type = "interval", n.parse = t.parse, r = r || {};
      var i = y_(n, r), a = yc(n, i, null);
      return n.brk = a.brk, n._cfg = {
        interval: 0,
        intervalPrecision: 2,
        intervalCount: void 0,
        niceExtent: void 0
      }, n;
    }
    return t.parse = function(r) {
      return r == null || r === "" ? NaN : Number(r);
    }, t.prototype.getConfig = function() {
      return ot(this._cfg);
    }, t.prototype.setConfig = function(r) {
      var n = ja(this);
      this._cfg = r = ot(r), r.niceExtent == null && (r.niceExtent = n.slice()), r.intervalPrecision == null && (r.intervalPrecision = Xn(r.interval));
    }, t.prototype.getTicks = function(r) {
      r = r || {};
      var n = this._cfg, i = n.interval, a = ja(this), o = n.niceExtent, s = n.intervalPrecision, u = Xu(), l = this.brk, f = u, h = [];
      if (!i)
        return h;
      r.breakTicks;
      var c = 3e3;
      a[0] < o[0] && h.push({
        value: r.expandToNicedExtent ? ft(o[0] - i, s) : a[0]
      });
      for (var v = function(_, S) {
        return wr((S - _) / i);
      }, d = n.intervalCount, p = o[0], g = 0; ; g++) {
        if (d == null) {
          if (p > o[1] || !isFinite(p) || !isFinite(o[1]))
            break;
        } else {
          if (g > d)
            break;
          p = Zt(p, o[1]), g === d && (p = o[1]);
        }
        if (h.push({
          value: p
        }), p = ft(p + i, s), l) {
          var m = l.calcNiceTickMultiple(p, v);
          m >= 0 && (p = ft(p + m * i, s));
        }
        if (h.length > 0 && p === h[h.length - 1].value)
          break;
        if (h.length > c)
          return [];
      }
      var y = h.length ? h[h.length - 1].value : o[1];
      return a[1] > y && h.push({
        value: r.expandToNicedExtent ? ft(y + i, s) : a[1]
      }), h;
    }, t.prototype.getMinorTicks = function(r) {
      return bc(this, r, rc(this), this._cfg.interval);
    }, t.prototype.getLabel = function(r, n) {
      if (r == null)
        return "";
      var i = n && n.precision;
      i == null ? i = Fr(r.value) || 0 : i === "auto" && (i = this._cfg.intervalPrecision);
      var a = ft(r.value, i, !0);
      return D_(a);
    }, t.type = "interval", t;
  }($e)
);
$e.registerClass(Mi);
var DM = function(e, t, r, n) {
  for (; r < n; ) {
    var i = r + n >>> 1;
    e[i][1] < t ? r = i + 1 : n = i;
  }
  return r;
}, j_ = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this) || this;
      n.type = "time", n.parse = t.parse, n._locale = r.locale, n._useUTC = r.useUTC, n._interval = 0;
      var i = y_(n, r), a = yc(n, i, null);
      return n.brk = a.brk, n;
    }
    return t.prototype.getLabel = function(r) {
      return $u(r.value, xp[eA(Ea(this._minLevelUnit))] || xp.second, this._useUTC, this._locale);
    }, t.prototype.getFormattedLabel = function(r, n, i) {
      return rA(r, n, i, this._locale, this._useUTC);
    }, t.prototype.getTicks = function(r) {
      var n = this._interval, i = ja(this), a = this.brk, o = [];
      if (!n)
        return o;
      var s = this._useUTC;
      o = OM(this._minLevelUnit, this._approxInterval, s, i, Ku(this), a);
      var u = Vn.length - 1, l = 0;
      return I(o, function(f) {
        f.time && (u = Math.min(u, ct(Vn, f.time.upperTimeUnit)), l = Math.max(l, f.time.level));
      }), o;
    }, t.prototype.getMinorTicks = function(r) {
      return bc(this, r, rc(this), this._interval);
    }, t.prototype.setTimeInterval = function(r) {
      this._interval = r.interval, this._approxInterval = r.approxInterval, this._minLevelUnit = r.minLevelUnit;
    }, t.parse = function(r) {
      return mt(r) ? Math.round(r) : +Hi(r);
    }, t.type = "time", t;
  }($e)
), jo = [
  // Format                           interval
  ["second", nc],
  ["minute", ic],
  ["hour", Pa],
  ["quarter-day", Pa * 6],
  ["half-day", Pa * 12],
  ["day", Ce * 1.2],
  ["half-week", Ce * 3.5],
  ["week", Ce * 7],
  ["month", Ce * 31],
  ["quarter", Ce * 95],
  ["half-year", Tp / 2],
  ["year", Tp]
  // 1Y
];
function AM(e, t, r, n) {
  return wh(new Date(t), e, n).getTime() === wh(new Date(r), e, n).getTime();
}
function MM(e, t) {
  return e /= Ce, e > 16 ? 16 : e > 7.5 ? 7 : e > 3.5 ? 4 : e > 1.5 ? 2 : 1;
}
function IM(e) {
  var t = 30 * Ce;
  return e /= t, e > 6 ? 6 : e > 3 ? 3 : e > 2 ? 2 : 1;
}
function LM(e) {
  return e /= Pa, e > 12 ? 12 : e > 6 ? 6 : e > 3.5 ? 4 : e > 2 ? 2 : 1;
}
function Vp(e, t) {
  return e /= t ? ic : nc, e > 30 ? 30 : e > 20 ? 20 : e > 15 ? 15 : e > 10 ? 10 : e > 5 ? 5 : e > 2 ? 2 : 1;
}
function PM(e) {
  return ht(Cv(e, !0), 1);
}
function EM(e, t, r) {
  var n = Math.max(0, ct(Vn, t) - 1);
  return wh(new Date(e), Vn[n], r).getTime();
}
function RM(e, t) {
  var r = /* @__PURE__ */ new Date(0);
  r[e](1);
  var n = r.getTime();
  r[e](1 + t);
  var i = r.getTime() - n;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / i));
  };
}
function OM(e, t, r, n, i, a) {
  var o = 3e3, s = QD, u = 0;
  function l(R, k, O, B, F, G, U) {
    for (var X = RM(F, R), H = k, J = new Date(H); H < O && H <= n[1] && (U.push({
      value: H
    }), !(u++ > o)); )
      if (J[F](J[B]() + R), H = J.getTime(), a) {
        var it = a.calcNiceTickMultiple(H, X);
        it > 0 && (J[F](J[B]() + it * R), H = J.getTime());
      }
    U.push({
      value: H,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: H > n[1]
    });
  }
  function f(R, k, O) {
    var B = [], F = !k.length;
    if (!AM(Ea(R), n[0], n[1], r)) {
      F && (k = [{
        value: EM(n[0], R, r)
      }, {
        value: n[1]
      }]);
      for (var G = 0; G < k.length - 1; G++) {
        var U = k[G].value, X = k[G + 1].value;
        if (U !== X) {
          var H = void 0, J = void 0, it = void 0, Dt = !1;
          switch (R) {
            case "year":
              H = Math.max(1, Math.round(t / Ce / 365)), J = __(r), it = nA(r);
              break;
            case "half-year":
            case "quarter":
            case "month":
              H = IM(t), J = ac(r), it = S_(r);
              break;
            case "week":
            case "half-week":
            case "day":
              H = MM(t), J = oc(r), it = b_(r), Dt = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              H = LM(t), J = sc(r), it = w_(r);
              break;
            case "minute":
              H = Vp(t, !0), J = uc(r), it = T_(r);
              break;
            case "second":
              H = Vp(t, !1), J = lc(r), it = x_(r);
              break;
            case "millisecond":
              H = PM(t), J = fc(r), it = C_(r);
              break;
          }
          X >= n[0] && U <= n[1] && l(H, U, X, J, it, Dt, B), R === "year" && O.length > 1 && G === 0 && O.unshift({
            value: O[0].value - H
          });
        }
      }
      for (var G = 0; G < B.length; G++)
        O.push(B[G]);
    }
  }
  for (var h = [], c = [], v = 0, d = 0, p = 0; p < s.length; ++p) {
    var g = Ea(s[p]);
    if (tA(s[p])) {
      f(s[p], h[h.length - 1] || [], c);
      var m = s[p + 1] ? Ea(s[p + 1]) : null;
      if (g !== m) {
        if (c.length) {
          d = v, c.sort(function(R, k) {
            return R.value - k.value;
          });
          for (var y = [], _ = 0; _ < c.length; ++_) {
            var S = c[_].value;
            (_ === 0 || c[_ - 1].value !== S) && (y.push(c[_]), S >= n[0] && S <= n[1] && v++);
          }
          var b = i / t;
          if (v > b * 1.5 && d > b / 1.5 || (h.push(y), v > b || e === s[p]))
            break;
        }
        c = [];
      }
    }
  }
  for (var w = Vt(Z(h, function(R) {
    return Vt(R, function(k) {
      return k.value >= n[0] && k.value <= n[1] && !k.notAdd;
    });
  }), function(R) {
    return R.length > 0;
  }), T = w.length - 1, x = [], p = 0; p < w.length; ++p)
    for (var D = w[p], C = 0; C < D.length; ++C) {
      var A = Is(D[C].value, r);
      x.push({
        value: D[C].value,
        time: {
          level: T - p,
          upperTimeUnit: A,
          lowerTimeUnit: A
        }
      });
    }
  Iv(x, sx, null), x.sort(function(R, k) {
    return R.value - k.value;
  });
  var L = x[0], M = x[x.length - 1], P = Is(n[0], r), E = Is(n[1], r);
  return (!L || L.value > n[0]) && x.unshift({
    value: n[0],
    time: {
      level: 0,
      upperTimeUnit: P,
      lowerTimeUnit: P
    },
    notNice: !0
  }), (!M || M.value < n[1]) && x.push({
    value: n[1],
    time: {
      level: 0,
      upperTimeUnit: E,
      lowerTimeUnit: E
    },
    notNice: !0
  }), x;
}
var kM = function(e, t) {
  var r = e.getExtent();
  if (r[0] === r[1] && (r[0] -= Ce, r[1] += Ce), r[1] === -1 / 0 && r[0] === 1 / 0) {
    var n = /* @__PURE__ */ new Date();
    r[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), r[0] = r[1] - Ce;
  }
  e.setExtent(r[0], r[1]);
  var i = Sc(t.splitNumber, 10), a = Ku(e) / i, o = t.minInterval, s = t.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var u = jo.length, l = Math.min(DM(jo, a, 0, u), u - 1), f = jo[l][1], h = jo[Math.max(l - 1, 0)][0];
  e.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: h
  });
};
$e.registerClass(j_);
var Jo = 0, ts = 1, J_ = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this) || this;
      n.type = "log", n.parse = Mi.parse, n.base = r.logBase || 10;
      var i = [], a = [];
      n._lookup = {
        from: i,
        to: a
      }, i[Jo] = i[ts] = a[Jo] = a[ts] = NaN, X_(n, t.mapperMethods), r.breakOption;
      var o = {};
      return n.powStub = new Mi({
        breakParsed: o.original
      }), n.intervalStub = new Mi({
        breakParsed: o.transformed
      }), $_(n, n.intervalStub), n;
    }
    return t.prototype.getTicks = function(r) {
      var n = this.base, i = this.powStub, a = this.intervalStub, o = a.getExtent(), s = i.getExtent(), u = {
        lookup: {
          from: o,
          to: s
        }
      };
      return Z(a.getTicks(r || {}), function(l) {
        var f = l.value, h = Zl(f, n, u), c;
        return {
          value: h,
          break: c
        };
      }, this);
    }, t.prototype.getMinorTicks = function(r) {
      return bc(
        this,
        r,
        rc(this.powStub),
        // NOTE: minor ticks are in the log scale value to visually hint users "logarithm".
        this.intervalStub.getConfig().interval
      );
    }, t.prototype.getLabel = function(r, n) {
      return this.intervalStub.getLabel(r, n);
    }, t.type = "log", t.mapperMethods = {
      needTransform: function() {
        return !0;
      },
      normalize: function(r) {
        return this.intervalStub.normalize(Qo(r, this.base));
      },
      scale: function(r) {
        return Zl(this.intervalStub.scale(r), this.base, null);
      },
      transformIn: function(r, n) {
        return r = Qo(r, this.base), n && n.depth === au ? r : this.intervalStub.transformIn(r, n);
      },
      transformOut: function(r, n) {
        var i = n ? n.depth : null;
        return Hp.depth = i, Up.lookup = this._lookup, Zl(i === au ? r : this.intervalStub.transformOut(r, Hp), this.base, Up);
      },
      contain: function(r) {
        return this.powStub.contain(r);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(r, n) {
        this.setExtent2(De, r, n);
      },
      setExtent2: function(r, n, i) {
        if (!(!Ri(n, i) || n <= 0 || i <= 0)) {
          var a = Wp, o = Wp;
          if (r === De) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(r, a[Jo] = n, a[ts] = i);
          var u = this.base;
          this.intervalStub.setExtent2(r, o[Jo] = Qo(n, u), o[ts] = Qo(i, u));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(r, n) {
        return Ri(n[0], n[1]) && Pe(r) && r <= 0 && (r = n[0]), r;
      },
      getDefaultStartValue: function() {
        return 1;
      },
      getExtent: function() {
        return this.powStub.getExtent();
      },
      getExtentUnsafe: function(r, n) {
        return n === null ? this.powStub.getExtentUnsafe(r, null) : this.intervalStub.getExtentUnsafe(r, n);
      }
    }, t;
  }($e)
);
$e.registerClass(J_);
var Hp = {}, Up = {}, Wp = [], tS = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, eS = _t();
function NM(e) {
  var t = e.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (t == null || !te(tS, t) && !$e.getClass(t)) && (t = "value"), t
  );
}
function BM(e, t, r) {
  var n;
  switch (t) {
    case "category":
      return new Q_({
        ordinalMeta: e.getOrdinalMeta ? e.getOrdinalMeta() : e.getCategories(),
        extent: Te()
      });
    case "time":
      return new j_({
        locale: e.ecModel.getLocaleModel(),
        useUTC: e.ecModel.get("useUTC"),
        breakOption: n
      });
    case "log":
      return new J_({
        logBase: e.get("logBase"),
        breakOption: n
      });
    case "value":
      return new Mi({
        breakOption: n
      });
    default:
      return new ($e.getClass(t) || Mi)({});
  }
}
function FM(e, t, r) {
  var n = e.getExtentUnsafe(De, null), i = n[0], a = n[1];
  return Ri(i, a) ? i === t || a === t ? GM : i < t && a > t ? zM : Lh : Lh;
}
var zM = 1, GM = 2, Lh = 3;
function VM(e) {
  eS(e).noOnMyZero = !0;
}
function HM(e) {
  return eS(e).noOnMyZero;
}
function Qu(e) {
  var t = e.getLabelModel().get("formatter");
  if (e.type === "time") {
    var r = jD(t);
    return function(i, a) {
      return e.scale.getFormattedLabel(i, a, r);
    };
  } else {
    if (Y(t))
      return function(i) {
        var a = e.scale.getLabel(i), o = t.replace("{value}", a ?? "");
        return o;
      };
    if (et(t)) {
      if (e.type === "category")
        return function(i, a) {
          return t(
            uu(e, i),
            i.value - e.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var n = Xu();
      return function(i, a) {
        var o = null;
        return n && (o = n.makeAxisLabelFormatterParamBreak(o, i.break)), t(uu(e, i), a, o);
      };
    } else
      return function(i) {
        return e.scale.getLabel(i);
      };
  }
}
function uu(e, t) {
  var r = e.scale;
  return Ze(r) ? r.getLabel(t) : t.value;
}
function wc(e) {
  var t = e.get("interval");
  return t ?? "auto";
}
function UM(e) {
  return e.type === "category" && wc(e.getLabelModel()) === 0;
}
function WM(e, t) {
  var r = {};
  return I(e.mapDimensionsAll(t), function(n) {
    r[MD(e, n)] = !0;
  }), lt(r);
}
function zi(e) {
  return e === "middle" || e === "center";
}
function Ja(e) {
  return e.getShallow("show");
}
function YM(e, t, r) {
  var n = e.get("breaks", !0);
  n == null;
}
function rS(e, t, r, n, i, a) {
  var o = Fi(e), s = o ? e.intervalStub : e;
  if (s.setExtent(n[0], n[1]), o) {
    var u = e.powStub, l = {
      depth: au
    }, f = e.transformOut(n[0], l), h = e.transformOut(n[1], l), c = CM(r, n);
    t[0] && !c[0] && (f = i[0]), t[1] && !c[1] && (h = i[1]), u.setExtent(f, h);
  }
  s.setConfig(a);
}
function So(e, t) {
  return Ze(e) ? e.getRawOrdinalNumber(t.value) : t.value;
}
function nS(e, t) {
  return Ze(e) && !!t.get("boundaryGap");
}
function Yp(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return;
    return !0;
  }
}
function Xp(e) {
  for (var t = Te(), r = Te(), n = 0; n < e.length; ) {
    var i = e[n++], a = e[n++];
    Ie(i, a) || (uh(t, i), uh(r, a));
  }
  return [t, r];
}
function $p(e, t) {
  var r = Xp(e), n = r[0], i = r[1], a = Xp(t), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(i[0] - s[0]), Math.abs(n[1] - o[1]), Math.abs(i[1] - s[1]));
}
function Zp(e) {
  return mt(e) ? e : e ? 0.5 : 0;
}
function XM(e, t, r) {
  if (r.valueDim == null)
    return [];
  for (var n = t.count(), i = yr(n * 2), a = 0; a < n; a++) {
    var o = z_(r, e, t, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function Er(e, t, r, n, i) {
  var a = r.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], u = 0, l = [], f = [], h = [], c = [];
  if (i) {
    for (u = 0; u < e.length; u += 2) {
      var v = t || e;
      Ie(v[u], v[u + 1]) || c.push(e[u], e[u + 1]);
    }
    e = c;
  }
  for (u = 0; u < e.length - 2; u += 2)
    switch (h[0] = e[u + 2], h[1] = e[u + 3], f[0] = e[u], f[1] = e[u + 1], s.push(f[0], f[1]), n) {
      case "end":
        l[o] = h[o], l[1 - o] = f[1 - o], s.push(l[0], l[1]);
        break;
      case "middle":
        var d = (f[o] + h[o]) / 2, p = [];
        l[o] = p[o] = d, l[1 - o] = f[1 - o], p[1 - o] = h[1 - o], s.push(l[0], l[1]), s.push(p[0], p[1]);
        break;
      default:
        l[o] = f[o], l[1 - o] = h[1 - o], s.push(l[0], l[1]);
    }
  return s.push(e[u++], e[u++]), s;
}
function $M(e, t) {
  var r = [], n = e.length, i, a;
  function o(f, h, c) {
    var v = f.coord, d = (c - v) / (h.coord - v), p = Rw(d, [f.color, h.color]);
    return {
      coord: c,
      color: p
    };
  }
  for (var s = 0; s < n; s++) {
    var u = e[s], l = u.coord;
    if (l < 0)
      i = u;
    else if (l > t) {
      a ? r.push(o(a, u, t)) : i && r.push(o(i, u, 0), o(i, u, t));
      break;
    } else
      i && (r.push(o(i, u, 0)), i = null), r.push(u), a = u;
  }
  return r;
}
function ZM(e, t, r) {
  var n = e.getVisual("visualMeta");
  if (!(!n || !n.length || !e.count()) && t.type === "cartesian2d") {
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = e.getDimensionInfo(n[o].dimension);
      if (i = s && s.coordDim, i === "x" || i === "y") {
        a = n[o];
        break;
      }
    }
    if (a) {
      var u = t.getAxis(i), l = Z(a.stops, function(_) {
        return {
          coord: u.toGlobalCoord(u.dataToCoord(_.value)),
          color: _.color
        };
      }), f = l.length, h = a.outerColors.slice();
      f && l[0].coord > l[f - 1].coord && (l.reverse(), h.reverse());
      var c = $M(l, i === "x" ? r.getWidth() : r.getHeight()), v = c.length;
      if (!v && f)
        return l[0].coord < 0 ? h[1] ? h[1] : l[f - 1].color : h[0] ? h[0] : l[0].color;
      var d = 10, p = c[0].coord - d, g = c[v - 1].coord + d, m = g - p;
      if (m < 1e-3)
        return "transparent";
      I(c, function(_) {
        _.offset = (_.coord - p) / m;
      }), c.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: v ? c[v - 1].offset : 0.5,
        color: h[1] || "transparent"
      }), c.unshift({
        offset: v ? c[0].offset : 0.5,
        color: h[0] || "transparent"
      });
      var y = new L0(0, 0, 0, 0, c, !0);
      return y[i] = p, y[i + "2"] = g, y;
    }
  }
}
function qM(e, t, r) {
  var n = e.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = r.getAxesByScale("ordinal")[0];
    if (a && !(i && KM(a, t))) {
      var o = t.mapDimension(a.dim), s = {};
      return I(a.getViewLabels(), function(u) {
        u.tick.offInterval || (s[So(a.scale, u.tick)] = 1);
      }), function(u) {
        return !s.hasOwnProperty(t.get(o, u));
      };
    }
  }
}
function KM(e, t) {
  var r = e.getExtent(), n = Math.abs(r[1] - r[0]) / e.scale.count();
  isNaN(n) && (n = 0);
  for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if (pc.getSymbolSize(
      t,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[e.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function QM(e) {
  for (var t = e.length / 2; t > 0 && Ie(e[t * 2 - 2], e[t * 2 - 1]); t--)
    ;
  return t - 1;
}
function qp(e, t) {
  return [e[t * 2], e[t * 2 + 1]];
}
function jM(e, t, r) {
  for (var n = e.length / 2, i = r === "x" ? 0 : 1, a, o, s = 0, u = -1, l = 0; l < n; l++)
    if (o = e[l * 2 + i], !Ie(o, e[l * 2 + 1 - i])) {
      if (l === 0) {
        a = o;
        continue;
      }
      if (a <= t && o >= t || a >= t && o <= t) {
        u = l;
        break;
      }
      s = l, a = o;
    }
  return {
    range: [s, u],
    t: (t - a) / (o - a)
  };
}
function iS(e) {
  if (e.get(["endLabel", "show"]))
    return !0;
  for (var t = 0; t < Ee.length; t++)
    if (e.get([Ee[t], "endLabel", "show"]))
      return !0;
  return !1;
}
function ql(e, t, r, n) {
  if (W_(t, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, u = iS(n) ? function(v, d) {
      e._endLabelOnDuring(v, d, o, s, a, i, t);
    } : null, l = t.getBaseAxis().isHorizontal(), f = H_(t, r, n, function() {
      var v = e._endLabel;
      v && r && s.originalX != null && v.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, u);
    if (!n.get("clip", !0)) {
      var h = f.shape, c = Math.max(h.width, h.height);
      l ? (h.y -= c, h.height += c * 2) : (h.x -= c, h.width += c * 2);
    }
    return u && u(1, f), f;
  } else
    return U_(t, r, n);
}
function JM(e, t) {
  var r = t.getBaseAxis(), n = r.isHorizontal(), i = r.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: e.get("align") || a,
      verticalAlign: e.get("verticalAlign") || o
    }
  };
}
var tI = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.init = function() {
      var r = new Ft(), n = new nM();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = r, this._changePolyState = St(this._changePolyState, this);
    }, t.prototype.render = function(r, n, i) {
      var a = r.coordinateSystem, o = this.group, s = r.getData(), u = r.getModel("lineStyle"), l = r.getModel("areaStyle"), f = s.getLayout("points") || [], h = a.type === "polar", c = this._coordSys, v = this._symbolDraw, d = this._polyline, p = this._polygon, g = this._lineGroup, m = !n.ssr && r.get("animation"), y = !l.isEmpty(), _ = l.get("origin"), S = F_(a, s, _), b = y && XM(a, s, S), w = r.get("showSymbol"), T = r.get("connectNulls"), x = w && !h && qM(r, s, a), D = this._data;
      D && D.eachItemGraphicEl(function(st, bt) {
        st.__temp && (o.remove(st), D.setItemGraphicEl(bt, null));
      }), w || v.remove(), o.add(g);
      var C = h ? !1 : r.get("step"), A;
      a && a.getArea && r.get("clip", !0) && (A = a.getArea(), A.width != null ? (A.x -= 0.1, A.y -= 0.1, A.width += 0.2, A.height += 0.2) : A.r0 && (A.r0 -= 0.5, A.r += 0.5)), this._clipShapeForSymbol = A;
      var L = ZM(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && c.type === a.type && C === this._step))
        w && v.updateData(s, {
          isIgnore: x,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(st) {
            return [f[st * 2], f[st * 2 + 1]];
          }
        }), m && this._initSymbolLabelAnimation(s, a, A), C && (b && (b = Er(b, f, a, C, T)), f = Er(f, null, a, C, T)), d = this._newPolyline(f), y ? p = this._newPolygon(f, b) : p && (g.remove(p), p = this._polygon = null), h || this._initOrUpdateEndLabel(r, a, Yn(L)), g.setClipPath(ql(this, a, !0, r));
      else {
        y && !p ? p = this._newPolygon(f, b) : p && !y && (g.remove(p), p = this._polygon = null), h || this._initOrUpdateEndLabel(r, a, Yn(L));
        var M = g.getClipPath();
        if (M) {
          var P = ql(this, a, !1, r);
          Me(M, {
            shape: P.shape
          }, r);
        } else
          g.setClipPath(ql(this, a, !0, r));
        w && v.updateData(s, {
          isIgnore: x,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(st) {
            return [f[st * 2], f[st * 2 + 1]];
          }
        }), (!Yp(this._stackedOnPoints, b) || !Yp(this._points, f)) && (m ? this._doUpdateAnimation(s, b, a, i, C, _, T) : (C && (b && (b = Er(b, f, a, C, T)), f = Er(f, null, a, C, T)), d.setShape({
          points: f
        }), p && p.setShape({
          points: f,
          stackedOnPoints: b
        })));
      }
      var E = r.getModel("emphasis"), R = E.get("focus"), k = E.get("blurScope"), O = E.get("disabled");
      if (d.useStyle(yt(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: L,
          lineJoin: "bevel"
        }
      )), Js(d, r, "lineStyle"), d.style.lineWidth > 0 && r.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var B = d.getState("emphasis").style;
        B.lineWidth = +d.style.lineWidth + 1;
      }
      ut(d).seriesIndex = r.seriesIndex, Xa(d, R, k, O);
      var F = Zp(r.get("smooth")), G = r.get("smoothMonotone");
      if (d.setShape({
        smooth: F,
        smoothMonotone: G,
        connectNulls: T
      }), p) {
        var U = s.getCalculationInfo("stackedOnSeries"), X = 0;
        p.useStyle(yt(l.getAreaStyle(), {
          fill: L,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), U && (X = Zp(U.get("smooth"))), p.setShape({
          smooth: F,
          stackedOnSmooth: X,
          smoothMonotone: G,
          connectNulls: T
        }), Js(p, r, "areaStyle"), ut(p).seriesIndex = r.seriesIndex, Xa(p, R, k, O);
      }
      var H = this._changePolyState;
      s.eachItemGraphicEl(function(st) {
        st && (st.onHoverStateChange = H);
      }), this._polyline.onHoverStateChange = H, this._data = s, this._coordSys = a, this._stackedOnPoints = b, this._points = f, this._step = C, this._valueOrigin = _;
      var J = r.get("triggerEvent"), it = r.get("triggerLineEvent"), Dt = it === !0 || J === !0 || J === "line", xt = it === !0 || J === !0 || J === "area";
      this.packEventData(r, d, Dt), p && this.packEventData(r, p, xt);
    }, t.prototype.packEventData = function(r, n, i) {
      ut(n).eventData = i ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: r.componentIndex,
        seriesIndex: r.seriesIndex,
        seriesName: r.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: n === this._polygon ? "area" : "line"
      } : null;
    }, t.prototype.highlight = function(r, n, i, a) {
      var o = r.getData(), s = Wn(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var u = o.getLayout("points"), l = o.getItemGraphicEl(s);
        if (!l) {
          var f = u[s * 2], h = u[s * 2 + 1];
          if (Ie(f, h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
            return;
          var c = r.get("zlevel") || 0, v = r.get("z") || 0;
          l = new pc(o, s), l.x = f, l.y = h, l.setZ(c, v);
          var d = l.getSymbolPath().getTextContent();
          d && (d.zlevel = c, d.z = v, d.z2 = this._polyline.z2 + 1), l.__temp = !0, o.setItemGraphicEl(s, l), l.stopSymbolAnimation(!0), this.group.add(l);
        }
        l.highlight();
      } else
        Le.prototype.highlight.call(this, r, n, i, a);
    }, t.prototype.downplay = function(r, n, i, a) {
      var o = r.getData(), s = Wn(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var u = o.getItemGraphicEl(s);
        u && (u.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(u)) : u.downplay());
      } else
        Le.prototype.downplay.call(this, r, n, i, a);
    }, t.prototype._changePolyState = function(r) {
      var n = this._polygon;
      Wd(this._polyline, r), n && Wd(n, r);
    }, t.prototype._newPolyline = function(r) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new lM({
        shape: {
          points: r
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, t.prototype._newPolygon = function(r, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new hM({
        shape: {
          points: r,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, t.prototype._initSymbolLabelAnimation = function(r, n, i) {
      var a, o, s = n.getBaseAxis(), u = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var l = r.hostModel, f = l.get("animationDuration");
      et(f) && (f = f(null));
      var h = l.get("animationDelay") || 0, c = et(h) ? h(null) : h;
      r.eachItemGraphicEl(function(v, d) {
        var p = v;
        if (p) {
          var g = [v.x, v.y], m = void 0, y = void 0, _ = void 0;
          if (i)
            if (o) {
              var S = i, b = n.pointToCoord(g);
              a ? (m = S.startAngle, y = S.endAngle, _ = -b[1] / 180 * Math.PI) : (m = S.r0, y = S.r, _ = b[0]);
            } else {
              var w = i;
              a ? (m = w.x, y = w.x + w.width, _ = v.x) : (m = w.y + w.height, y = w.y, _ = v.y);
            }
          var T = y === m ? 0 : (_ - m) / (y - m);
          u && (T = 1 - T);
          var x = et(h) ? h(d) : f * T + c, D = p.getSymbolPath(), C = D.getTextContent();
          p.attr({
            scaleX: 0,
            scaleY: 0
          }), p.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: x
          }), C && C.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: x
          }), D.disableLabelAnimation = !0;
        }
      });
    }, t.prototype._initOrUpdateEndLabel = function(r, n, i) {
      var a = r.getModel("endLabel");
      if (iS(r)) {
        var o = r.getData(), s = this._polyline, u = o.getLayout("points");
        if (!u) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var l = this._endLabel;
        l || (l = this._endLabel = new Wt({
          z2: 200
          // should be higher than item symbol
        }), l.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = QM(u);
        f >= 0 && (mo(s, yo(r, "endLabel"), {
          inheritColor: i,
          labelFetcher: r,
          labelDataIndex: f,
          defaultText: function(h, c, v) {
            return v != null ? B_(o, v) : dc(o, h);
          },
          enableTextSetter: !0
        }, JM(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, t.prototype._endLabelOnDuring = function(r, n, i, a, o, s, u) {
      var l = this._endLabel, f = this._polyline;
      if (l) {
        r < 1 && a.originalX == null && (a.originalX = l.x, a.originalY = l.y);
        var h = i.getLayout("points"), c = i.hostModel, v = c.get("connectNulls"), d = s.get("precision"), p = s.get("distance") || 0, g = u.getBaseAxis(), m = g.isHorizontal(), y = g.inverse, _ = n.shape, S = y ? m ? _.x : _.y + _.height : m ? _.x + _.width : _.y, b = (m ? p : 0) * (y ? -1 : 1), w = (m ? 0 : -p) * (y ? -1 : 1), T = m ? "x" : "y", x = jM(h, S, T), D = x.range, C = D[1] - D[0], A = void 0;
        if (C >= 1) {
          if (C > 1 && !v) {
            var L = qp(h, D[0]);
            l.attr({
              x: L[0] + b,
              y: L[1] + w
            }), o && (A = c.getRawValue(D[0]));
          } else {
            var L = f.getPointOn(S, T);
            L && l.attr({
              x: L[0] + b,
              y: L[1] + w
            });
            var M = c.getRawValue(D[0]), P = c.getRawValue(D[1]);
            o && (A = rx(i, d, M, P, x.t));
          }
          a.lastFrameIndex = D[0];
        } else {
          var E = r === 1 || a.lastFrameIndex > 0 ? D[0] : 0, L = qp(h, E);
          o && (A = c.getRawValue(E)), l.attr({
            x: L[0] + b,
            y: L[1] + w
          });
        }
        if (o) {
          var R = Uu(l);
          typeof R.setLabelText == "function" && R.setLabelText(A);
        }
      }
    }, t.prototype._doUpdateAnimation = function(r, n, i, a, o, s, u) {
      var l = this._polyline, f = this._polygon, h = r.hostModel, c = uM(this._data, r, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), v = c.current, d = c.stackedOnCurrent, p = c.next, g = c.stackedOnNext;
      if (o && (d = Er(c.stackedOnCurrent, c.current, i, o, u), v = Er(c.current, null, i, o, u), g = Er(c.stackedOnNext, c.next, i, o, u), p = Er(c.next, null, i, o, u)), $p(v, p) > 3e3 || f && $p(d, g) > 3e3) {
        l.stopAnimation(), l.setShape({
          points: p
        }), f && (f.stopAnimation(), f.setShape({
          points: p,
          stackedOnPoints: g
        }));
        return;
      }
      l.shape.__points = c.current, l.shape.points = v;
      var m = {
        shape: {
          points: p
        }
      };
      c.current !== v && (m.shape.__points = c.next), l.stopAnimation(), re(l, m, h), f && (f.setShape({
        // Reuse the points with polyline.
        points: v,
        stackedOnPoints: d
      }), f.stopAnimation(), re(f, {
        shape: {
          stackedOnPoints: g
        }
      }, h), l.shape.points !== f.shape.points && (f.shape.points = l.shape.points));
      for (var y = [], _ = c.status, S = 0; S < _.length; S++) {
        var b = _[S].cmd;
        if (b === "=") {
          var w = r.getItemGraphicEl(_[S].idx1);
          w && y.push({
            el: w,
            ptIdx: S
            // Index of points
          });
        }
      }
      l.animators && l.animators.length && l.animators[0].during(function() {
        f && f.dirtyShape();
        for (var T = l.shape.__points, x = 0; x < y.length; x++) {
          var D = y[x].el, C = y[x].ptIdx * 2;
          D.x = T[C], D.y = T[C + 1], D.markRedraw();
        }
      });
    }, t.prototype.remove = function(r) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, t.type = "line", t;
  }(Le)
);
function eI(e, t) {
  return {
    seriesType: e,
    plan: mc(),
    reset: function(r) {
      var n = r.getData(), i = r.coordinateSystem;
      if (r.pipelineContext, !!i) {
        var a = Z(i.dimensions, function(h) {
          return n.mapDimension(h);
        }).slice(0, 2), o = a.length, s = n.getCalculationInfo("stackResultDimension");
        Ni(n, a[0]) && (a[0] = s), Ni(n, a[1]) && (a[1] = s);
        var u = n.getStore(), l = n.getDimensionIndex(a[0]), f = n.getDimensionIndex(a[1]);
        return o && {
          progress: function(h, c) {
            for (var v = h.end - h.start, d = yr(v * o), p = [], g = [], m = h.start, y = 0; m < h.end; m++) {
              var _ = void 0;
              if (o === 1) {
                var S = u.get(l, m);
                _ = i.dataToPoint(S, null, g);
              } else
                p[0] = u.get(l, m), p[1] = u.get(f, m), _ = i.dataToPoint(p, null, g);
              d[y++] = _[0], d[y++] = _[1];
            }
            c.setLayout("points", d), c.setLayout("pointsRange", {
              start: h.start,
              end: h.end
            });
          }
        };
      }
    }
  };
}
var rI = {
  average: function(e) {
    for (var t = 0, r = 0, n = 0; n < e.length; n++)
      isNaN(e[n]) || (t += e[n], r++);
    return r === 0 ? NaN : t / r;
  },
  sum: function(e) {
    for (var t = 0, r = 0; r < e.length; r++)
      t += e[r] || 0;
    return t;
  },
  max: function(e) {
    for (var t = -1 / 0, r = 0; r < e.length; r++)
      e[r] > t && (t = e[r]);
    return isFinite(t) ? t : NaN;
  },
  min: function(e) {
    for (var t = 1 / 0, r = 0; r < e.length; r++)
      e[r] < t && (t = e[r]);
    return isFinite(t) ? t : NaN;
  },
  // TODO
  // Median
  nearest: function(e) {
    return e[0];
  }
}, nI = function(e) {
  return Math.round(e.length / 2);
};
function aS(e) {
  return {
    seriesType: e,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, r, n) {
      var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), h = n.getDevicePixelRatio(), c = Math.abs(f[1] - f[0]) * (h || 1), v = Math.round(s / c);
        if (isFinite(v) && v > 1) {
          a === "lttb" ? t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / v)) : a === "minmax" && t.setData(i.minmaxDownSample(i.mapDimension(l.dim), 1 / v));
          var d = void 0;
          Y(a) ? d = rI[a] : et(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(l.dim), 1 / v, d, nI));
        }
      }
    }
  };
}
function iI(e) {
  e.registerChartView(tI), e.registerSeriesModel(eM), e.registerLayout(eI("line")), e.registerVisual({
    seriesType: "line",
    reset: function(t) {
      var r = t.getData(), n = t.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = r.getVisual("style").fill), r.setVisual("legendLineStyle", n);
    }
  }), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, aS("line"));
}
var aI = _t(), ka = _t(), Ue = {
  estimate: 1,
  determine: 2
};
function lu(e) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: e
  };
}
function oI(e, t) {
  var r = e.getLabelModel().get("customValues");
  if (r) {
    var n = e.scale;
    return {
      labels: Z(oS(r, n), function(i, a) {
        return {
          formattedLabel: Qu(e)(i, a),
          rawLabel: n.getLabel(i),
          tick: i
        };
      })
    };
  }
  return e.type === "category" ? uI(e, t) : fI(e);
}
function sI(e, t, r) {
  var n = e.scale, i = e.getTickModel().get("customValues");
  return i ? {
    ticks: oS(i, n)
  } : e.type === "category" ? lI(e, t) : {
    ticks: n.getTicks(r)
  };
}
function oS(e, t) {
  var r = t.getExtent(), n = [];
  return I(e, function(i) {
    i = t.parse(i), i >= r[0] && i <= r[1] && n.push(i);
  }), Iv(n, ux, null), Tv(n), Z(n, function(i) {
    return {
      value: i
    };
  });
}
function uI(e, t) {
  var r = e.getLabelModel(), n = sS(e, r, t);
  return !r.get("show") || e.scale.isBlank() ? {
    labels: []
  } : n;
}
function sS(e, t, r) {
  var n = vI(e), i = wc(t), a = r.kind === Ue.estimate;
  if (!a) {
    var o = lS(n, i);
    if (o)
      return o;
  }
  var s, u;
  et(i) ? s = fu(e, i, !1) : (u = i === "auto" ? cI(e, r) : i, s = fu(e, u, !1));
  var l = {
    labels: s,
    labelCategoryInterval: u
  };
  return a ? r.out.noPxChangeTryDetermine.push(function() {
    return Ph(n, i, l), !0;
  }) : Ph(n, i, l), l;
}
function lI(e, t) {
  var r = hI(e), n = wc(t), i = lS(r, n);
  if (i)
    return i;
  var a, o;
  if ((!t.get("show") || e.scale.isBlank()) && (a = []), et(n))
    a = fu(e, n, !0);
  else if (n === "auto") {
    var s = sS(e, e.getLabelModel(), lu(Ue.determine));
    o = s.labelCategoryInterval, a = Z(s.labels, function(u) {
      return u.tick;
    });
  } else
    o = n, a = fu(e, o, !0);
  return Ph(r, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function fI(e) {
  var t = e.scale.getTicks(), r = Qu(e);
  return {
    labels: Z(t, function(n, i) {
      return {
        formattedLabel: r(n, i),
        rawLabel: e.scale.getLabel(n),
        tick: n
      };
    })
  };
}
var hI = uS("axisTick"), vI = uS("axisLabel");
function uS(e) {
  return function(r) {
    return ka(r)[e] || (ka(r)[e] = {
      list: []
    });
  };
}
function lS(e, t) {
  for (var r = 0; r < e.list.length; r++)
    if (e.list[r].key === t)
      return e.list[r].value;
}
function Ph(e, t, r) {
  return e.list.push({
    key: t,
    value: r
  }), r;
}
function cI(e, t) {
  if (t.kind === Ue.estimate) {
    var r = e.calculateCategoryInterval(t);
    return t.out.noPxChangeTryDetermine.push(function() {
      return ka(e).autoInterval = r, !0;
    }), r;
  }
  var n = ka(e).autoInterval;
  return n ?? (ka(e).autoInterval = e.calculateCategoryInterval(t));
}
function dI(e, t) {
  var r = t.kind, n = gI(e), i = Qu(e), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = e.scale, s = o.getExtent(), u = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var l = 1, f = 40;
  u > f && (l = Math.max(1, Math.floor(u / f)));
  for (var h = s[0], c = e.dataToCoord(h + 1) - e.dataToCoord(h), v = Math.abs(c * Math.cos(a)), d = Math.abs(c * Math.sin(a)), p = 0, g = 0; h <= s[1]; h += l) {
    var m = 0, y = 0, _ = Cy(i({
      value: h
    }), n.font, "center", "top");
    m = _.width * 1.3, y = _.height * 1.3, p = Math.max(p, m, 7), g = Math.max(g, y, 7);
  }
  var S = p / v, b = g / d;
  isNaN(S) && (S = 1 / 0), isNaN(b) && (b = 1 / 0);
  var w = Math.max(0, Math.floor(Math.min(S, b)));
  if (r === Ue.estimate)
    return t.out.noPxChangeTryDetermine.push(St(pI, null, e, w, u)), w;
  var T = fS(e, w, u);
  return T ?? w;
}
function pI(e, t, r) {
  return fS(e, t, r) == null;
}
function fS(e, t, r) {
  var n = aI(e.model), i = e.getExtent(), a = n.lastAutoInterval, o = n.lastTickCount;
  if (a != null && o != null && Math.abs(a - t) <= 1 && Math.abs(o - r) <= 1 && a > t && n.axisExtent0 === i[0] && n.axisExtent1 === i[1])
    return a;
  n.lastTickCount = r, n.lastAutoInterval = t, n.axisExtent0 = i[0], n.axisExtent1 = i[1];
}
function gI(e) {
  var t = e.getLabelModel();
  return {
    axisRotate: e.getRotate ? e.getRotate() : e.isHorizontal && !e.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function fu(e, t, r) {
  var n = Qu(e), i = e.scale, a = [], o = et(t);
  return K_(i, o ? 0 : t, function(s, u) {
    var l = i.getLabel(s);
    if (o) {
      var f = !!t(s.value, l);
      if (s.offInterval = !f, !f && !u)
        return;
    }
    a.push(r ? s : {
      formattedLabel: n(s),
      rawLabel: l,
      tick: s
    });
  }), a;
}
var ju = _t();
function mI(e) {
  ju(e).prepare = {};
}
function yI(e) {
  ju(e).fullUpdate = {};
}
function _I(e) {
  return ju(e).prepare;
}
function Wi(e) {
  return ju(e).fullUpdate;
}
var SI = s0(), Eh = "|&", Yi = _t(), hS = -2, bI = -1, wI = _t();
function vS(e, t) {
  var r = e.model, n = Yi(Wi(r.ecModel)).keyed, i = n && n.get(t);
  return i && i.get(r.uid);
}
function TI(e, t) {
  return dS(vS(e, t));
}
function xI(e, t) {
  var r = [];
  return cS(e.model.ecModel, function(n) {
    for (var i = 0; i < t.length; i++)
      t[i] && n.serByIdx[t[i].seriesIndex] && r.push(dS(n));
  }), r;
}
function cS(e, t) {
  var r = Yi(Wi(e)).keyed;
  r && r.each(function(n, i) {
    n.each(function(a, o) {
      t(a, i, o);
    });
  });
}
function dS(e) {
  return {
    liPosMinGap: e ? e.liPosMinGap : void 0
  };
}
function CI(e, t) {
  var r = e.model.ecModel, n = Yi(Wi(r)).axSer;
  n && Tc(r, n.get(e.model.uid), t);
}
function pS(e, t, r) {
  var n = vS(e, t);
  n && Tc(e.model.ecModel, n.sers, r);
}
function Tc(e, t, r) {
  if (t)
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      e.isSeriesFiltered(i) || r(i);
    }
}
function DI(e, t, r) {
  var n = Yi(Wi(e)).keyed, i = n && n.get(t);
  i && i.each(function(a) {
    r(a.axis);
  });
}
function gS(e, t) {
  var r = e.model, n = Yi(Wi(r.ecModel)).keys;
  n && I(n.get(r.uid), function(i) {
    t(i);
  });
}
function AI(e) {
  var t = wI(_I(e)), r = t.keyed || (t.keyed = j());
  cS(e, function(n, i, a) {
    var o = r.get(i) || r.set(i, j()), s = o.get(a) || o.set(a, {});
    n.metrics.liPosMinGap && mS.liPosMinGap(e, n, s);
  });
}
function MI(e, t) {
  mS[e] = t;
}
var mS = {};
function Kp(e, t, r) {
  if (e) {
    var n = t.ecModel, i = Yi(Wi(n)), a = e.model.uid, o = i.axSer || (i.axSer = j()), s = o.get(a) || o.set(a, []);
    s.push(t);
    var u = t.subType, l = t.getBaseAxis() === e, f = Oh.get(Rh(u, l, r)) || Oh.get(Rh(u, l, null));
    if (f) {
      var h = i.keyed || (i.keyed = j()), c = i.keys || (i.keys = j()), v = f.key, d = h.get(v) || h.set(v, j()), p = d.get(a);
      p || (p = d.set(a, {
        axis: e,
        sers: [],
        serByIdx: []
      }), p.metrics = f.getMetrics(e), (c.get(a) || c.set(a, [])).push(v)), p.sers.push(t), p.serByIdx[t.seriesIndex] = t;
    }
  }
}
function Rh(e, t, r) {
  return e + Eh + $(t, !0) + Eh + (r || "");
}
function II(e, t) {
  var r = Rh(t.seriesType, t.baseAxis, t.coordSysType);
  Oh.set(r, t), SI(e, function() {
    e.registerProcessor(e.PRIORITY.PROCESSOR.AXIS_STATISTICS, {
      // NOTE: Theoretically, `appendData` requires `dirtyOnOverallProgress: true` here to re-calculate them.
      // But this OVERALL_STAGE_TASK is applied to all series (no `getTargetSeries` specified),
      // `dirtyOnOverallProgress: true` can cause irrelevant series (e.g., series on geo)
      // to be re-rendered when `appendData` is called, which cause `appendData` meaningless,
      // thereby not setting `dirtyOnOverallProgress: true`.
      overallReset: AI
    });
  });
}
var Oh = j(), LI = 0.8;
function Xi(e, t) {
  t = t || {};
  var r = {
    w: NaN,
    w2: NaN
  }, n = e.scale, i = t.fromStat, a = t.min, o = bM(n);
  Pe(o) || (o = NaN);
  var s = e.getExtent(), u = Ot(s[1] - s[0]);
  return Ze(n) ? PI(r, e, o, u) : i && EI(r, e, o, u, i), a != null && (r.w = Pe(r.w) ? ht(a, r.w) : a), r;
}
function PI(e, t, r, n) {
  var i = t.onBand, a = r + (i ? 1 : 0);
  a === 0 && (a = 1), e.w = n / a, !i && r && n && (e.w2 = e.w * r / n);
}
function EI(e, t, r, n, i) {
  var a = !1, o = -1 / 0;
  I(i.key ? [TI(t, i.key)] : xI(t, i.sers || []), function(s) {
    var u = s.liPosMinGap;
    u != null && (u > 0 ? (u > o && (o = u), a = !1) : u === hS && (a = !0));
  }), Pe(r) && r > 0 && Pe(o) ? (e.w = n / r * o, e.w2 = o) : a && (e.w = n * LI, e.w2 = e.w * r / n);
}
var Qp = [0, 1], RI = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = r, this._extent = n || [0, 0];
    }
    return e.prototype.contain = function(t) {
      var r = this._extent, n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
      return t >= n && t <= i;
    }, e.prototype.containData = function(t) {
      return this.scale.contain(this.scale.parse(t));
    }, e.prototype.getExtent = function() {
      return this._extent.slice();
    }, e.prototype.setExtent = function(t, r) {
      var n = this._extent;
      n[0] = t, n[1] = r;
    }, e.prototype.dataToCoord = function(t, r) {
      var n = this.scale;
      return t = n.normalize(n.parse(t)), ah(t, Qp, jp(this), r);
    }, e.prototype.coordToData = function(t, r) {
      var n = ah(t, jp(this), Qp, r);
      return this.scale.scale(n);
    }, e.prototype.pointToData = function(t, r) {
    }, e.prototype.getTicksCoords = function(t) {
      t = t || {};
      var r = t.tickModel || this.getTickModel(), n = sI(this, r, {
        breakTicks: t.breakTicks,
        pruneByBreak: t.pruneByBreak
      }), i = Z(n.ticks, function(s) {
        return {
          coord: this.dataToCoord(So(this.scale, s)),
          tick: s
        };
      }, this), a = r.get("alignWithLabel"), o = OI(this, i, a);
      return Z(i, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, e.prototype.getMinorTicksCoords = function() {
      if (Ze(this.scale))
        return [];
      var t = this.model.getModel("minorTick"), r = t.get("splitNumber");
      r > 0 && r < 100 || (r = 5);
      var n = this.scale.getMinorTicks(r), i = Z(n, function(a) {
        return Z(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, e.prototype.getViewLabels = function(t) {
      return t = t || lu(Ue.determine), oI(this, t).labels;
    }, e.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, e.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, e.prototype.getBandWidth = function() {
      return Xi(this, {
        min: 1
      }).w;
    }, e.prototype.calculateCategoryInterval = function(t) {
      return t = t || lu(Ue.determine), dI(this, t);
    }, e;
  }()
);
function jp(e) {
  var t = e.getExtent();
  if (e.onBand) {
    var r = t[1] - t[0], n = r / e.scale.count() / 2;
    t[0] += n, t[1] -= n;
  }
  return t;
}
function OI(e, t, r) {
  var n = t.length;
  if (!e.onBand || r || !n)
    return !1;
  var i = Xi(e).w;
  if (!i)
    return !1;
  I(t, function(s) {
    s.coord -= i / 2;
  });
  var a = e.scale.getExtent(), o = t[n - 1];
  return o.tick.offInterval && t.pop(), t.push({
    coord: o.coord + i,
    tick: {
      value: a[1] + 1
    }
  }), !0;
}
var kI = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r, n, i, a, o) {
      var s = e.call(this, r, n, i) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return t.prototype.isHorizontal = function() {
      var r = this.position;
      return r === "top" || r === "bottom";
    }, t.prototype.getGlobalExtent = function(r) {
      var n = this.getExtent();
      return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), r && n[0] > n[1] && n.reverse(), n;
    }, t.prototype.pointToData = function(r, n) {
      return this.coordToData(this.toLocalCoord(r[this.dim === "x" ? 0 : 1]), n);
    }, t.prototype.setCategorySortInfo = function(r) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = r, this.scale.setSortInfo(r);
    }, t;
  }(RI)
), Jp = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], NI = 1, hu = 2, yS = NI | hu;
function vu(e, t, r) {
  r = r || yS, t ? e.dirty |= r : e.dirty &= ~r;
}
function _S(e, t) {
  return t = t || yS, e.dirty == null || !!(e.dirty & t);
}
function Jr(e) {
  if (e)
    return _S(e) && SS(e, e.label, e), e;
}
function SS(e, t, r) {
  var n = t.getComputedTransform();
  e.transform = $v(e.transform, n);
  var i = e.localRect = Za(e.localRect, t.getBoundingRect()), a = t.style, o = a.margin, s = r && r.marginForce, u = r && r.minMarginForce, l = r && r.marginDefault, f = a.__marginType;
  f == null && l && (o = l, f = bi.textMargin);
  for (var h = 0; h < 4; h++)
    Kl[h] = f === bi.minMargin && u && u[h] != null ? u[h] : s && s[h] != null ? s[h] : o ? o[h] : 0;
  f === bi.textMargin && eu(i, Kl, !1, !1);
  var c = e.rect = Za(e.rect, i);
  return n && c.applyTransform(n), f === bi.minMargin && eu(c, Kl, !1, !1), e.axisAligned = Xv(n), (e.label = e.label || {}).ignore = t.ignore, vu(e, !1), vu(e, !0, hu), e;
}
var Kl = [0, 0, 0, 0];
function BI(e, t, r) {
  return e.transform = $v(e.transform, r), e.localRect = Za(e.localRect, t), e.rect = Za(e.rect, t), r && e.rect.applyTransform(r), e.axisAligned = Xv(r), e.obb = void 0, (e.label = e.label || {}).ignore = !1, e;
}
function FI(e, t) {
  if (e) {
    e.label.x += t.x, e.label.y += t.y, e.label.markRedraw();
    var r = e.transform;
    r && (r[4] += t.x, r[5] += t.y);
    var n = e.rect;
    n && (n.x += t.x, n.y += t.y);
    var i = e.obb;
    i && i.fromBoundingRect(e.localRect, r);
  }
}
function tg(e, t) {
  for (var r = 0; r < Jp.length; r++) {
    var n = Jp[r];
    e[n] == null && (e[n] = t[n]);
  }
  return Jr(e);
}
function eg(e) {
  var t = e.obb;
  return (!t || _S(e, hu)) && (e.obb = t = t || new P0(), t.fromBoundingRect(e.localRect, e.transform), vu(e, !1, hu)), t;
}
function zI(e, t, r, n, i) {
  var a = e.length, o = kr[t], s = Oi[t];
  if (a < 2)
    return !1;
  e.sort(function(T, x) {
    return T.rect[o] - x.rect[o];
  });
  for (var u = 0, l, f = !1, h = 0; h < a; h++) {
    var c = e[h], v = c.rect;
    l = v[o] - u, l < 0 && (v[o] -= l, c.label[o] -= l, f = !0), u = v[o] + v[s];
  }
  var d = e[0], p = e[a - 1], g, m;
  y(), g < 0 && b(-g, 0.8), m < 0 && b(m, 0.8), y(), _(g, m, 1), _(m, g, -1), y(), g < 0 && w(-g), m < 0 && w(m);
  function y() {
    g = d.rect[o] - r, m = n - p.rect[o] - p.rect[s];
  }
  function _(T, x, D) {
    if (T < 0) {
      var C = Math.min(x, -T);
      if (C > 0) {
        S(C * D, 0, a);
        var A = C + T;
        A < 0 && b(-A * D, 1);
      } else
        b(-T * D, 1);
    }
  }
  function S(T, x, D) {
    T !== 0 && (f = !0);
    for (var C = x; C < D; C++) {
      var A = e[C], L = A.rect;
      L[o] += T, A.label[o] += T;
    }
  }
  function b(T, x) {
    for (var D = [], C = 0, A = 1; A < a; A++) {
      var L = e[A - 1].rect, M = Math.max(e[A].rect[o] - L[o] - L[s], 0);
      D.push(M), C += M;
    }
    if (C) {
      var P = Math.min(Math.abs(T) / C, x);
      if (T > 0)
        for (var A = 0; A < a - 1; A++) {
          var E = D[A] * P;
          S(E, 0, A + 1);
        }
      else
        for (var A = a - 1; A > 0; A--) {
          var E = D[A - 1] * P;
          S(-E, A, a);
        }
    }
  }
  function w(T) {
    var x = T < 0 ? -1 : 1;
    T = Math.abs(T);
    for (var D = Math.ceil(T / (a - 1)), C = 0; C < a - 1; C++)
      if (x > 0 ? S(D, 0, C + 1) : S(-D, a - C - 1, a), T -= D, T <= 0)
        return;
  }
  return f;
}
function GI(e) {
  var t = [];
  e.sort(function(l, f) {
    return (f.suggestIgnore ? 1 : 0) - (l.suggestIgnore ? 1 : 0) || f.priority - l.priority;
  });
  function r(l) {
    if (!l.ignore) {
      var f = l.ensureState("emphasis");
      f.ignore == null && (f.ignore = !1);
    }
    l.ignore = !0;
  }
  for (var n = 0; n < e.length; n++) {
    var i = Jr(e[n]);
    if (!i.label.ignore) {
      for (var a = i.label, o = i.labelLine, s = !1, u = 0; u < t.length; u++)
        if (xc(i, t[u], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (r(a), o && r(o)) : t.push(i);
    }
  }
}
function xc(e, t, r, n) {
  return !e || !t || e.label && e.label.ignore || t.label && t.label.ignore || !e.rect.intersect(t.rect, r, n) ? !1 : e.axisAligned && t.axisAligned ? !0 : eg(e).intersect(eg(t), r, n);
}
var VI = null;
function HI() {
  return VI;
}
var UI = "expandAxisBreak", zr = Math.PI, WI = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], YI = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], Gi = _t(), bS = _t(), wS = (
  /** @class */
  function() {
    function e(t) {
      this.recordMap = {}, this.resolveAxisNameOverlap = t;
    }
    return e.prototype.ensureRecord = function(t) {
      var r = t.axis.dim, n = t.componentIndex, i = this.recordMap, a = i[r] || (i[r] = []);
      return a[n] || (a[n] = {
        ready: {}
      });
    }, e;
  }()
);
function XI(e, t, r, n) {
  var i = r.axis, a = t.ensureRecord(r), o = [], s, u = Cc(e.axisName) && zi(e.nameLocation);
  I(n, function(d) {
    var p = Jr(d);
    if (!(!p || p.label.ignore)) {
      o.push(p);
      var g = a.transGroup;
      u && (g.transform ? so(na, g.transform) : oo(na), p.transform && xa(na, na, p.transform), tt.copy(es, p.localRect), es.applyTransform(na), s ? s.union(es) : tt.copy(s = new tt(0, 0, 0, 0), es));
    }
  });
  var l = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[l];
  if (o.sort(function(d, p) {
    return Math.abs(d.label[l] - f) - Math.abs(p.label[l] - f);
  }), u && s) {
    var h = i.getExtent(), c = Math.min(h[0], h[1]), v = Math.max(h[0], h[1]) - c;
    s.union(new tt(c, 0, v, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var na = ar(), es = new tt(0, 0, 0, 0), TS = function(e, t, r, n, i, a) {
  if (zi(e.nameLocation)) {
    var o = a.stOccupiedRect;
    o && xS(BI({}, o, a.transGroup.transform), n, i);
  } else
    CS(a.labelInfoList, a.dirVec, n, i);
};
function xS(e, t, r) {
  var n = new rt();
  xc(e, t, n, {
    direction: Math.atan2(r.y, r.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && FI(t, n);
}
function CS(e, t, r, n) {
  for (var i = rt.dot(n, t) >= 0, a = 0, o = e.length; a < o; a++) {
    var s = e[i ? a : o - 1 - a];
    s.label.ignore || xS(s, r, n);
  }
}
var Yr = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.group = new Ft(), this._axisModel = t, this._api = r, this._local = {}, this._shared = i || new wS(TS), this._resetCfgDetermined(n);
    }
    return e.prototype.updateCfg = function(t) {
      var r = this._cfg.raw;
      r.position = t.position, r.labelOffset = t.labelOffset, this._resetCfgDetermined(r);
    }, e.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, e.prototype._resetCfgDetermined = function(t) {
      var r = this._axisModel, n = r.getDefaultOption ? r.getDefaultOption() : {}, i = $(t.axisName, r.get("name")), a = r.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = $(t.defaultNameMoveOverlap, !0));
      var o = {
        raw: t,
        position: t.position,
        rotation: t.rotation,
        nameDirection: $(t.nameDirection, 1),
        tickDirection: $(t.tickDirection, 1),
        labelDirection: $(t.labelDirection, 1),
        labelOffset: $(t.labelOffset, 0),
        silent: $(t.silent, !0),
        axisName: i,
        nameLocation: Nn(r.get("nameLocation"), n.nameLocation, "end"),
        shouldNameMoveOverlap: Cc(i) && a,
        optionHideOverlap: r.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: r.get(["minorTick", "show"])
      };
      this._cfg = o;
      var s = new Ft({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var u = this._shared.ensureRecord(r);
      u.transGroup = this._transformGroup, u.dirVec = new rt(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, e.prototype.build = function(t, r) {
      var n = this;
      return t || (t = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), I($I, function(i) {
        t[i] && ZI[i](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, r || {});
      }), this;
    }, e.innerTextLayout = function(t, r, n) {
      var i = Qy(r - t), a, o;
      return Xs(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : Xs(i - zr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < zr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }, e.makeAxisEventDataBase = function(t) {
      var r = {
        componentType: t.mainType,
        componentIndex: t.componentIndex
      };
      return r[t.mainType + "Index"] = t.componentIndex, r;
    }, e.isLabelSilent = function(t) {
      var r = t.get("tooltip");
      return t.get("silent") || !(t.get("triggerEvent") || r && r.show);
    }, e;
  }()
), $I = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], ZI = {
  axisLine: function(e, t, r, n, i, a, o) {
    var s = n.get(["axisLine", "show"]);
    if (s === "auto" && (s = !0, e.raw.axisLineAutoShow != null && (s = !!e.raw.axisLineAutoShow)), !!s) {
      var u = n.axis.getExtent(), l = a.transform, f = [u[0], 0], h = [u[1], 0], c = f[0] > h[0];
      l && (Ae(f, f, l), Ae(h, h, l));
      var v = N({
        lineCap: "round"
      }, n.getModel(["axisLine", "lineStyle"]).getLineStyle()), d = {
        strokeContainThreshold: e.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: v
      };
      if (n.get(["axisLine", "breakLine"]) && iu(n.axis.scale))
        HI().buildAxisBreakLine(n, i, a, d);
      else {
        var p = new qr(N({
          shape: {
            x1: f[0],
            y1: f[1],
            x2: h[0],
            y2: h[1]
          }
        }, d));
        $a(p.shape, p.style.lineWidth), p.anid = "line", i.add(p);
      }
      var g = n.get(["axisLine", "symbol"]);
      if (g != null) {
        var m = n.get(["axisLine", "symbolSize"]);
        Y(g) && (g = [g, g]), (Y(m) || mt(m)) && (m = [m, m]);
        var y = N_(n.get(["axisLine", "symbolOffset"]) || 0, m), _ = m[0], S = m[1];
        I([{
          rotate: e.rotation + Math.PI / 2,
          offset: y[0],
          r: 0
        }, {
          rotate: e.rotation - Math.PI / 2,
          offset: y[1],
          r: Math.sqrt((f[0] - h[0]) * (f[0] - h[0]) + (f[1] - h[1]) * (f[1] - h[1]))
        }], function(b, w) {
          if (g[w] !== "none" && g[w] != null) {
            var T = Bi(g[w], -_ / 2, -S / 2, _, S, v.stroke, !0), x = b.r + b.offset, D = c ? h : f;
            T.attr({
              rotation: b.rotate,
              x: D[0] + x * Math.cos(e.rotation),
              y: D[1] - x * Math.sin(e.rotation),
              silent: !0,
              z2: 11
            }), i.add(T);
          }
        });
      }
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function(e, t, r, n, i, a, o, s) {
    var u = ng(t, i, s);
    u && rg(e, t, r, n, i, a, o, Ue.estimate);
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function(e, t, r, n, i, a, o, s) {
    var u = ng(t, i, s);
    u && rg(e, t, r, n, i, a, o, Ue.determine);
    var l = jI(e, i, a, n);
    QI(e, t.labelLayoutList, l), JI(e, i, a, n, e.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(e, t, r, n, i, a, o, s) {
    var u = r.ensureRecord(n);
    t.nameEl && (i.remove(t.nameEl), t.nameEl = u.nameLayout = u.nameLocation = null);
    var l = e.axisName;
    if (Cc(l)) {
      var f = e.nameLocation, h = e.nameDirection, c = n.getModel("nameTextStyle"), v = n.get("nameGap") || 0, d = n.axis.getExtent(), p = n.axis.inverse ? -1 : 1, g = new rt(0, 0), m = new rt(0, 0);
      f === "start" ? (g.x = d[0] - p * v, m.x = -p) : f === "end" ? (g.x = d[1] + p * v, m.x = p) : (g.x = (d[0] + d[1]) / 2, g.y = e.labelOffset + h * v, m.y = h);
      var y = ar();
      m.transform(yv(y, y, e.rotation));
      var _ = n.get("nameRotate");
      _ != null && (_ = _ * zr / 180);
      var S, b;
      zi(f) ? S = Yr.innerTextLayout(
        e.rotation,
        _ ?? e.rotation,
        // Adapt to axis.
        h
      ) : (S = qI(e.rotation, f, _ || 0, d), b = e.raw.axisNameAvailableWidth, b != null && (b = Math.abs(b / Math.sin(S.rotation)), !isFinite(b) && (b = null)));
      var w = c.getFont(), T = n.get("nameTruncate", !0) || {}, x = T.ellipsis, D = Ns(e.raw.nameTruncateMaxWidth, T.maxWidth, b), C = s.nameMarginLevel || 0, A = new Wt({
        x: g.x,
        y: g.y,
        rotation: S.rotation,
        silent: Yr.isLabelSilent(n),
        style: Kr(c, {
          text: l,
          font: w,
          overflow: "truncate",
          width: D,
          ellipsis: x,
          fill: c.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          align: c.get("align") || S.textAlign,
          verticalAlign: c.get("verticalAlign") || S.textVerticalAlign
        }),
        z2: 1
      });
      if (Gu({
        el: A,
        componentModel: n,
        itemName: l
      }), A.__fullText = l, A.anid = "name", n.get("triggerEvent")) {
        var L = Yr.makeAxisEventDataBase(n);
        L.targetType = "axisName", L.name = l, ut(A).eventData = L;
      }
      a.add(A), A.updateTransform(), t.nameEl = A;
      var M = u.nameLayout = Jr({
        label: A,
        priority: A.z2,
        defaultAttr: {
          ignore: A.ignore
        },
        marginDefault: zi(f) ? WI[C] : YI[C]
      });
      if (u.nameLocation = f, i.add(A), A.decomposeTransform(), e.shouldNameMoveOverlap && M) {
        var P = r.ensureRecord(n);
        r.resolveAxisNameOverlap(e, r, n, M, m, P);
      }
    }
  }
};
function rg(e, t, r, n, i, a, o, s) {
  AS(t) || tL(e, t, i, s, n, o);
  var u = t.labelLayoutList;
  eL(e, n, u, a), e.rotation;
  var l = e.optionHideOverlap;
  KI(n, u, l), l && GI(
    // Filter the already ignored labels by the previous overlap resolving methods.
    Vt(u, function(f) {
      return f && !f.label.ignore;
    })
  ), XI(e, r, n, u);
}
function qI(e, t, r, n) {
  var i = Qy(r - e), a, o, s = n[0] > n[1], u = t === "start" && !s || t !== "start" && s;
  return Xs(i - zr / 2) ? (o = u ? "bottom" : "top", a = "center") : Xs(i - zr * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", i < zr * 1.5 && i > zr / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function KI(e, t, r) {
  var n = e.axis, i = e.get(["axisLabel", "customValues"]);
  if (UM(n))
    return;
  function a(l, f, h) {
    var c = Jr(t[f]), v = Jr(t[h]), d = n.scale;
    if (!(!c || !v)) {
      if (l == null) {
        if (!r && i)
          return;
        var p = Gi(c.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          _c(d) && p.notNice || Ze(d) && p.offInterval
        ) {
          pi(c.label);
          return;
        }
      }
      if (l === !1 || c.suggestIgnore) {
        pi(c.label);
        return;
      }
      if (v.suggestIgnore) {
        pi(v.label);
        return;
      }
      var g = 0.1;
      if (!r) {
        var m = [0, 0, 0, 0];
        c = tg({
          marginForce: m
        }, c), v = tg({
          marginForce: m
        }, v);
      }
      xc(c, v, null, {
        touchThreshold: g
      }) && pi(l ? v.label : c.label);
    }
  }
  var o = e.get(["axisLabel", "showMinLabel"]), s = e.get(["axisLabel", "showMaxLabel"]), u = t.length;
  a(o, 0, 1), a(s, u - 1, u - 2);
}
function QI(e, t, r) {
  e.showMinorTicks || I(t, function(n) {
    if (n && n.label.ignore)
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = bS(a), s = Gi(n.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          pi(a);
          return;
        }
      }
  });
}
function pi(e) {
  e && (e.ignore = !0);
}
function DS(e, t, r, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < e.length; u++) {
    var l = e[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = r, t && (Ae(o, o, t), Ae(s, s, t));
    var f = new qr({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: n,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    $a(f.shape, f.style.lineWidth), f.anid = i + "_" + e[u].tickValue, a.push(f);
    var h = bS(f);
    h.onBand = !!e[u].onBand, h.tickValue = e[u].tickValue;
  }
  return a;
}
function jI(e, t, r, n) {
  var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, e.raw.axisTickAutoShow != null && (o = !!e.raw.axisTickAutoShow)), !o || i.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), u = e.tickDirection * a.get("length"), l = i.getTicksCoords(), f = DS(l, r.transform, u, yt(s.getLineStyle(), {
    stroke: n.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), h = 0; h < f.length; h++)
    t.add(f[h]);
  return f;
}
function JI(e, t, r, n, i) {
  var a = n.axis, o = n.getModel("minorTick");
  if (!(!e.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var u = o.getModel("lineStyle"), l = i * o.get("length"), f = yt(u.getLineStyle(), yt(n.getModel("axisTick").getLineStyle(), {
        stroke: n.get(["axisLine", "lineStyle", "color"])
      })), h = 0; h < s.length; h++)
        for (var c = DS(s[h], r.transform, l, f, "minorticks_" + h), v = 0; v < c.length; v++)
          t.add(c[v]);
  }
}
function ng(e, t, r) {
  if (AS(e)) {
    var n = e.axisLabelsCreationContext, i = n.out.noPxChangeTryDetermine;
    if (r.noPxChange) {
      for (var a = !0, o = 0; o < i.length; o++)
        a = a && i[o]();
      if (a)
        return !1;
    }
    i.length && (t.remove(e.labelGroup), kh(e, null, null, null));
  }
  return !0;
}
function tL(e, t, r, n, i, a) {
  var o = i.axis, s = Ns(e.raw.axisLabelShow, i.get(["axisLabel", "show"])), u = new Ft();
  r.add(u);
  var l = lu(n);
  if (!s || o.scale.isBlank()) {
    kh(t, [], u, l);
    return;
  }
  var f = i.getModel("axisLabel"), h = o.getViewLabels(l), c = (Ns(e.raw.labelRotate, f.get("rotate")) || 0) * zr / 180, v = Yr.innerTextLayout(e.rotation, c, e.labelDirection), d = i.getCategories && i.getCategories(!0), p = [], g = i.get("triggerEvent"), m = 1 / 0, y = -1 / 0;
  I(h, function(S, b) {
    var w, T = S.tick, x = S.formattedLabel, D = S.rawLabel, C = f, A = So(o.scale, T);
    if (d && d[A]) {
      var L = d[A];
      K(L) && L.textStyle && (C = new Ct(L.textStyle, f, i.ecModel));
    }
    var M = C.getTextColor() || i.get(["axisLine", "lineStyle", "color"]), P = C.getShallow("align", !0) || v.textAlign, E = $(C.getShallow("alignMinLabel", !0), P), R = $(C.getShallow("alignMaxLabel", !0), P), k = C.getShallow("verticalAlign", !0) || C.getShallow("baseline", !0) || v.textVerticalAlign, O = $(C.getShallow("verticalAlignMinLabel", !0), k), B = $(C.getShallow("verticalAlignMaxLabel", !0), k), F = 10 + (((w = T.time) === null || w === void 0 ? void 0 : w.level) || 0);
    m = Math.min(m, F), y = Math.max(y, F);
    var G = new Wt({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: Yr.isLabelSilent(i),
      z2: F,
      style: Kr(C, {
        text: x,
        align: b === 0 ? E : b === h.length - 1 ? R : P,
        verticalAlign: b === 0 ? O : b === h.length - 1 ? B : k,
        fill: et(M) ? M(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? D : o.type === "value" ? A + "" : A,
          b
        ) : M
      })
    });
    G.anid = "label_" + A;
    var U = Gi(G);
    if (U.labelInfo = S, U.layoutRotation = v.rotation, Gu({
      el: G,
      componentModel: i,
      itemName: x,
      formatterParamsExtra: {
        isTruncated: function() {
          return G.isTruncated;
        },
        value: D,
        tickIndex: b
      }
    }), g) {
      var X = Yr.makeAxisEventDataBase(i);
      X.targetType = "axisLabel", X.value = D, X.tickIndex = b;
      var H = S.tick.break;
      if (H) {
        var J = H.parsedBreak;
        X.break = {
          // type: labelItem.break.type,
          start: J.vmin,
          end: J.vmax
        };
      }
      o.type === "category" && (X.dataIndex = A), ut(G).eventData = X, H && nL(i, a, G, H);
    }
    p.push(G), u.add(G);
  });
  var _ = Z(p, function(S) {
    return {
      label: S,
      priority: Gi(S).labelInfo.tick.break ? S.z2 + (y - m + 1) : S.z2,
      defaultAttr: {
        ignore: S.ignore
      }
    };
  });
  kh(t, _, u, l);
}
function AS(e) {
  return !!e.labelLayoutList;
}
function kh(e, t, r, n) {
  e.labelLayoutList = t, e.labelGroup = r, e.axisLabelsCreationContext = n;
}
function eL(e, t, r, n) {
  var i = t.get(["axisLabel", "margin"]);
  I(r, function(a, o) {
    var s = Jr(a);
    if (s) {
      var u = s.label, l = Gi(u);
      s.suggestIgnore = u.ignore, u.ignore = !1, Va(dr, rL);
      var f = t.axis;
      dr.x = f.dataToCoord(So(f.scale, l.labelInfo.tick)), dr.y = e.labelOffset + e.labelDirection * i, dr.rotation = l.layoutRotation, n.add(dr), dr.updateTransform(), n.remove(dr), dr.decomposeTransform(), Va(u, dr), u.markRedraw(), vu(s, !0), Jr(s);
    }
  });
}
var dr = new Lt(), rL = new Lt();
function Cc(e) {
  return !!e;
}
function nL(e, t, r, n) {
  r.on("click", function(i) {
    var a = {
      type: UI,
      breaks: [{
        start: n.parsedBreak.breakOption.start,
        end: n.parsedBreak.breakOption.end
      }]
    };
    a[e.axis.dim + "AxisIndex"] = e.componentIndex, t.dispatchAction(a);
  });
}
function cu(e, t, r) {
  r = r || {};
  var n = t.axis, i = {}, a = n.getAxesOnZeroOf()[0], o = n.position, s = a ? "onZero" : o, u = n.dim, l = [e.x, e.x + e.width, e.y, e.y + e.height], f = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, h = t.get("offset") || 0, c = u === "x" ? [l[2] - h, l[3] + h] : [l[0] - h, l[1] + h];
  if (a) {
    var v = a.toGlobalCoord(a.dataToCoord(0));
    c[f.onZero] = Math.max(Math.min(v, c[1]), c[0]);
  }
  i.position = [u === "y" ? c[f[s]] : l[0], u === "x" ? c[f[s]] : l[3]], i.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var d = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  i.labelDirection = i.tickDirection = i.nameDirection = d[o], i.labelOffset = a ? c[f[o]] - c[f.onZero] : 0, t.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), Ns(r.labelInside, t.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
  var p = t.get(["axisLabel", "rotate"]);
  return i.labelRotate = s === "top" ? -p : p, i.z2 = 1, i;
}
function iL(e) {
  return e.coordinateSystem && e.coordinateSystem.type === "cartesian2d";
}
function aL(e) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return I(t, function(r, n) {
    var i = n.replace(/Model$/, ""), a = e.getReferringComponents(i, xe).models[0];
    t[n] = a;
  }), t;
}
function oL(e, t, r, n, i, a) {
  for (var o = cu(e, r), s = !1, u = !1, l = 0; l < t.length; l++)
    Z_(t[l].getOtherAxis(r.axis).scale) && (s = u = !0, r.axis.type === "category" && r.axis.onBand && (u = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = u, o.defaultNameMoveOverlap = a, new Yr(r, n, o, i);
}
function sL(e, t, r) {
  var n = cu(t, r);
  e.updateCfg(n);
}
var uL = _t(), lL = 1, fL = 3, MS = (
  /** @class */
  function() {
    function e(t, r, n, i, a) {
      var o = Ze(t), s = o ? r.getCategories().length : null, u;
      if (o) {
        var l = r.getCategories(!0);
        u = l && !l.length;
      }
      var f = n.slice();
      (su(t) || Fi(t) || _c(t)) && (a0(f, ia(t, r.get("dataMin", !0))), o0(f, ia(t, r.get("dataMax", !0)))), ix(f) || (f[0] = f[1] = NaN);
      var h = [], c = [!1, !1], v = r.get("min", !0);
      v === "dataMin" ? (h[0] = f[0], c[0] = !0) : (h[0] = ia(t, et(v) ? v({
        min: f[0],
        max: f[1]
      }) : v), c[0] = h[0] != null);
      var d = r.get("max", !0);
      d === "dataMax" ? (h[1] = f[1], c[1] = !0) : (h[1] = ia(t, et(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), c[1] = h[1] != null);
      var p = hL(t, r), g = o ? null : f[1] - f[0] || Math.abs(f[0]);
      h[0] == null && (h[0] = o ? u ? f[0] : s ? 0 : NaN : f[0] - p[0] * g), h[1] == null && (h[1] = o ? u ? f[1] : s ? s - 1 : NaN : f[1] + p[1] * g), !Tr(h[0]) && (h[0] = NaN), !Tr(h[1]) && (h[1] = NaN);
      var m = u || za(h[0]) || za(h[1]) || o && !s, y = su(t), _ = y && r.needIncludeZero && r.needIncludeZero();
      _ && (h[0] > 0 && h[1] > 0 && !c[0] && (h[0] = 0), h[0] < 0 && h[1] < 0 && !c[1] && (h[1] = 0));
      var S = !1;
      h[0] > h[1] && (h.reverse(), S = !0);
      var b = ia(t, r.get("startValue", !0)), w = b != null;
      !Pe(b) && i && (b = t.getDefaultStartValue ? t.getDefaultStartValue() : 0), Pe(b) && (w || !y || _) && (b < h[0] && !c[0] ? (h[0] = b, c[0] = !0) : b > h[1] && !c[1] && (h[1] = b, c[1] = !0));
      var T = this._i = {
        scale: t,
        dataMM: f,
        noZoomEffMM: h,
        zoomMM: [],
        fixMM: c,
        zoomFixMM: [!1, !1],
        startValue: b,
        isBlank: m,
        incl0: _,
        tggAxInv: S,
        ctnShp: a
      };
      ig(T, h);
    }
    return e.prototype.makeNoZoom = function() {
      return this._i.noZoomEffMM.slice();
    }, e.prototype.makeFinal = function() {
      var t = this._i, r = t.zoomMM, n = t.noZoomEffMM, i = t.zoomFixMM, a = t.fixMM, o = {
        fixMM: a,
        zoomFixMM: i,
        isBlank: t.isBlank,
        incl0: t.incl0,
        tggAxInv: t.tggAxInv,
        ctnShp: t.ctnShp,
        effMM: n.slice()
      }, s = o.effMM;
      return r[0] != null && (s[0] = r[0], a[0] = i[0] = !0), r[1] != null && (s[1] = r[1], a[1] = i[1] = !0), ig(t, s), o;
    }, e.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, e.prototype.setZoomMM = function(t, r) {
      this._i.zoomMM[t] = r;
    }, e;
  }()
);
function ig(e, t) {
  var r = e.scale, n = e.dataMM;
  r.sanitize && (t[0] = r.sanitize(t[0], n), t[1] = r.sanitize(t[1], n), ax(t));
}
function ia(e, t) {
  return t == null ? null : za(t) ? NaN : e.parse(t);
}
function hL(e, t) {
  var r;
  if (Ze(e))
    r = [0, 0];
  else {
    var n = t.get("boundaryGap");
    typeof n == "boolean" && (n = null), r = W(n) ? n : [n, n];
  }
  return [ag(r[0]), ag(r[1])];
}
function ag(e) {
  return Hn(typeof e == "boolean" ? 0 : e, 1) || 0;
}
function IS(e) {
  var t = uL(e.scale);
  return t.extent || (t.extent = Te()), t;
}
function vL(e, t) {
  IS(e).dimIdxInCoord = t.get(e.dim);
}
function cL(e, t) {
  var r = e.scale, n = e.model, i = e.dim;
  r.rawExtentInfo || dL(r, e, i, n, t);
}
function dL(e, t, r, n, i) {
  var a = IS(t), o = a.extent, s = !1;
  CI(t, function(f) {
    if (f.boxCoordinateSystem) {
      var h = c_(f).coord, c = a.dimIdxInCoord;
      if (c >= 0) {
        if (W(h)) {
          var v = h[c];
          v != null && !W(v) && uh(o, e.parse(v));
        }
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var p = e.getFilter ? e.getFilter() : null;
        I(WM(d, r), function(g) {
          nx(o, d.getApproximateExtent(g, p));
        });
      }
      f.__requireStartValue && f.__requireStartValue(t) && (s = !0);
    }
  });
  var u = mL(e, t, n), l = new MS(e, n, o, s, u);
  LS(e, l, i), a.extent = null;
}
function pL(e, t) {
  var r = e.scale;
  LS(r, new MS(r, e.model, t, !1, !1), fL);
}
function LS(e, t, r) {
  e.rawExtentInfo = t, t.from = r;
}
function gL(e, t) {
  Dc.set(e, t);
}
var Dc = j();
function PS(e, t, r, n, i) {
  e.rawExtentInfo || pL({
    scale: e,
    model: t
  }, Te());
  var a = e.rawExtentInfo.makeFinal(), o = a.effMM;
  return e.setExtent(o[0], o[1]), e.setBlank(a.isBlank), n && a.tggAxInv && r && !r.get("legacyMinMaxDontInverseAxis") && (n.inverse = !n.inverse), a;
}
function mL(e, t, r) {
  var n = nS(e, r), i = r.get("containShape", !0);
  if (i == null && !n && (i = !0), !i)
    return !1;
  var a = !1;
  return gS(t, function(o) {
    a = !!Dc.get(o) || a;
  }), a;
}
function yL(e, t, r, n) {
  if (r.ctnShp) {
    var i;
    if (gS(e, function(s) {
      var u = Dc.get(s);
      if (u) {
        var l = u(e, n);
        l && (i = i || [0, 0], a0(i, l[0]), o0(i, l[1]), VM(e));
      }
    }), !!i) {
      var a = t.getExtent();
      if (Ze(t))
        e.onBand || t.setExtent2(Qa, Zt(a[0], a[0] + i[0]), ht(a[1], a[1] + i[1]));
      else {
        var o = a.slice();
        r.zoomFixMM[0] || (o[0] = Zt(o[0], t.transformOut(t.transformIn(o[0], null) + i[0], null))), r.zoomFixMM[1] || (o[1] = ht(o[1], t.transformOut(t.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && t.setExtent2(Qa, o[0], o[1]);
      }
    }
  }
}
function _L() {
  MI("liPosMinGap", SL);
}
function SL(e, t, r) {
  var n = j(), i = r.serUids, a = r.liPosMinGap, o, s = t.axis, u = s.scale, l = u.needTransform(), f = u.getFilter ? u.getFilter() : null, h = e_(f);
  function c(_) {
    Tc(e, t.sers, function(S) {
      var b = S.getRawData(), w = b.getDimensionIndex(b.mapDimension(s.dim));
      w >= 0 && _(w, S, b.getStore());
    });
  }
  var v = 0;
  if (c(function(_, S, b) {
    n.set(S.uid, 1), (!i || !i.hasKey(S.uid)) && (o = !0), v += b.count();
  }), (!i || i.keys().length !== n.keys().length) && (o = !0), !o && a != null) {
    t.liPosMinGap = a;
    return;
  }
  gc(Cn, v);
  var d = 0;
  c(function(_, S, b) {
    for (var w = 0, T = b.count(); w < T; ++w) {
      var x = b.get(_, w);
      isFinite(x) && (!f || r_(h, x)) && (l && (x = u.transformIn(x, null)), Cn.arr[d++] = x);
    }
  });
  var p = Cn.typed ? Cn.arr.subarray(0, d) : (Cn.arr.length = d, Cn.arr);
  Cn.typed ? p.sort() : Tv(p);
  for (var g = 1 / 0, m = 1; m < d; ++m) {
    var y = p[m] - p[m - 1];
    // - Different series normally have the same values (e.g., barA, barB, barC),
    //   which should be ignored.
    // - A single series with multiple same values is often not meaningful to
    //   create `bandWidth`, so it is also ignored.
    y > 0 && y < g && (g = y);
  }
  r.liPosMinGap = t.liPosMinGap = Pe(g) ? g : d > 0 ? hS : bI, r.serUids = n;
}
var Cn = gc(
  {
    ctor: oM
  },
  50
  // An arbitrary initial capability.
);
function bL(e) {
  return function(t, r) {
    var n = Xi(t, {
      fromStat: {
        key: e
      }
    });
    if (Pe(n.w2))
      return [-n.w2 / 2, n.w2 / 2];
  };
}
function Ju(e, t) {
  return e + Eh + t;
}
function wL(e) {
  return _L(), {
    // non-category scale do not use `liPosMinGap` to calculate `bandWidth`.
    liPosMinGap: !Ze(e.scale)
  };
}
var Ii = "bar";
function TL(e, t, r, n) {
  II(e, {
    key: t,
    seriesType: r,
    coordSysType: n,
    getMetrics: wL
  });
}
function xL(e) {
  var t = e.scale.rawExtentInfo.makeRenderInfo().startValue;
  return t;
}
var ES = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, du = ["25%", "25%"], Sr = "cartesian2d", CL = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = _o(r.outerBounds);
      e.prototype.mergeDefaultAndTheme.apply(this, arguments), i && r.outerBounds && jr(r.outerBounds, i);
    }, t.prototype.mergeOption = function(r, n) {
      e.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && r.outerBounds && jr(this.option.outerBounds, r.outerBounds);
    }, t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "15%",
      top: 65,
      right: "10%",
      bottom: 80,
      // If grid size contain label
      containLabel: !1,
      outerBoundsMode: "auto",
      outerBounds: ES,
      outerBoundsContain: "all",
      outerBoundsClampWidth: du[0],
      outerBoundsClampHeight: du[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: q.color.transparent,
      borderWidth: 1,
      borderColor: q.color.neutral30
    }, t;
  }(pt)
), DL = s0(), AL = "__ec_stack_";
function RS(e) {
  return e.get("stack") || AL + e.seriesIndex;
}
function ML(e, t) {
  var r = IL(e, t);
  return r.columnMap = LL(r), r;
}
function IL(e, t) {
  var r = Ju(t, Sr), n = [], i = Xi(e, {
    fromStat: {
      key: r
    },
    min: 1
  });
  return pS(e, r, function(a) {
    n.push({
      barWidth: Tt(a.get("barWidth"), i.w),
      barMaxWidth: Tt(a.get("barMaxWidth"), i.w),
      barMinWidth: Tt(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        a.get("barMinWidth") || (OS(a) ? 0.5 : 1),
        i.w
      ),
      barGap: a.get("barGap"),
      barCategoryGap: a.get("barCategoryGap"),
      defaultBarGap: a.get("defaultBarGap"),
      stackId: RS(a)
    });
  }), {
    bandWidthResult: i,
    seriesInfo: n
  };
}
function LL(e) {
  var t = e.bandWidthResult.w, r = t, n = 0, i, a, o = [], s = {};
  I(e.seriesInfo, function(p, g) {
    g || (a = p.defaultBarGap || 0);
    var m = p.stackId;
    te(s, m) || n++;
    var y = s[m];
    y || (y = s[m] = {
      width: 0,
      maxWidth: 0
    }, o.push(m));
    var _ = p.barWidth;
    _ && !y.width && (y.width = _, _ = Zt(r, _), r -= _);
    var S = p.barMaxWidth;
    S && (y.maxWidth = S);
    var b = p.barMinWidth;
    b && (y.minWidth = b);
    var w = p.barGap;
    w != null && (a = w);
    var T = p.barCategoryGap;
    T != null && (i = T);
  }), i == null && (i = ht(35 - o.length * 4, 15) + "%");
  var u = Tt(i, t), l = Tt(a, 1), f = (r - u) / (n + (n - 1) * l);
  f = ht(f, 0), I(o, function(p) {
    var g = s[p], m = g.maxWidth, y = g.minWidth;
    if (g.width) {
      var _ = g.width;
      m && (_ = Zt(_, m)), y && (_ = ht(_, y)), g.width = _, r -= _ + l * _, n--;
    } else {
      var _ = f;
      m && m < _ && (_ = Zt(m, r)), y && y > _ && (_ = y), _ !== f && (g.width = _, r -= _ + l * _, n--);
    }
  }), f = (r - u) / (n + (n - 1) * l), f = ht(f, 0);
  var h = 0, c;
  I(o, function(p) {
    var g = s[p];
    g.width || (g.width = f), c = g, h += g.width * (1 + l);
  }), c && (h -= c.width * l);
  var v = {}, d = -h / 2;
  return I(o, function(p) {
    var g = s[p];
    v[p] = v[p] || {
      bandWidth: t,
      offset: d,
      width: g.width
    }, d += g.width * (1 + l);
  }), v;
}
function PL(e) {
  return {
    seriesType: e,
    overallReset: function(t) {
      var r = Ju(e, Sr);
      DI(t, r, function(n) {
        var i = ML(n, e);
        pS(n, r, function(a) {
          var o = i.columnMap[RS(a)];
          a.getData().setLayout({
            bandWidth: o.bandWidth,
            offset: o.offset,
            size: o.width
          });
        });
      });
    }
  };
}
function EL(e) {
  return {
    seriesType: e,
    plan: mc(),
    reset: function(t) {
      if (iL(t)) {
        var r = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = r.getDimensionIndex(r.mapDimension(a.dim)), s = r.getDimensionIndex(r.mapDimension(i.dim)), u = t.get("showBackground", !0), l = r.mapDimension(a.dim), f = r.getCalculationInfo("stackResultDimension"), h = Ni(r, l) && !!r.getCalculationInfo("stackedOnSeries"), c = a.isHorizontal(), v = a.toGlobalCoord(a.dataToCoord(xL(a))), d = OS(t), p = t.get("barMinHeight") || 0, g = f && r.getDimensionIndex(f), m = r.getLayout("size"), y = r.getLayout("offset");
        return {
          progress: function(_, S) {
            for (var b = _.count, w = d && yr(b * 3), T = d && u && yr(b * 3), x = d && yr(b), D = n.master.getRect(), C = c ? D.width : D.height, A, L = S.getStore(), M = 0; (A = _.next()) != null; ) {
              var P = L.get(h ? g : o, A), E = L.get(s, A), R = v, k = void 0;
              h && (k = +P - L.get(o, A));
              var O = void 0, B = void 0, F = void 0, G = void 0;
              if (c) {
                var U = n.dataToPoint([P, E]);
                h && (R = n.dataToPoint([k, E])[0]), O = R, B = U[1] + y, F = U[0] - R, G = m, Ot(F) < p && (F = (F < 0 ? -1 : 1) * p);
              } else {
                var U = n.dataToPoint([E, P]);
                h && (R = n.dataToPoint([E, k])[1]), O = U[0] + y, B = R, F = m, G = U[1] - R, Ot(G) < p && (G = (G <= 0 ? -1 : 1) * p);
              }
              d ? (w[M] = O, w[M + 1] = B, w[M + 2] = c ? F : G, T && (T[M] = c ? D.x : O, T[M + 1] = c ? B : D.y, T[M + 2] = C), x[A] = A) : S.setItemLayout(A, {
                x: O,
                y: B,
                width: F,
                height: G
              }), M += 3;
            }
            d && S.setLayout({
              largePoints: w,
              largeDataIndices: x,
              largeBackgroundPoints: T,
              valueAxisHorizontal: c
            });
          }
        };
      }
    }
  };
}
function OS(e) {
  return e.pipelineContext && e.pipelineContext.large;
}
function RL(e) {
  return bL(Ju(e, Sr));
}
function OL(e) {
  DL(e, function() {
    function t(r) {
      var n = Ju(r, Sr);
      TL(e, n, r, Sr), gL(n, RL(r));
    }
    t("bar"), t("pictorialBar");
  });
}
var Nh = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.getInitialData = function(r, n) {
      return Jv(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(r, n, i) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(r), s = a.dataToPoint(o);
        if (i)
          I(a.getAxes(), function(c, v) {
            if (c.type === "category" && n != null) {
              var d = c.getTicksCoords(), p = c.getTickModel().get("alignWithLabel"), g = o[v], m = n[v] === "x1" || n[v] === "y1";
              if (m && !p && (g += 1), d.length < 2)
                return;
              if (d.length === 2) {
                s[v] = c.toGlobalCoord(c.getExtent()[m ? 1 : 0]);
                return;
              }
              for (var y = void 0, _ = void 0, S = 1, b = 0; b < d.length; b++) {
                var w = d[b].coord, T = b === d.length - 1 ? d[b - 1].tickValue + S : d[b].tickValue;
                if (T === g) {
                  _ = w;
                  break;
                } else if (T < g)
                  y = w;
                else if (y != null && T > g) {
                  _ = (w + y) / 2;
                  break;
                }
                b === 1 && (S = T - d[0].tickValue);
              }
              _ == null && (y ? y && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[v] = c.toGlobalCoord(_);
            }
          });
        else {
          var u = this.getData(), l = u.getLayout("offset"), f = u.getLayout("size"), h = a.getBaseAxis().isHorizontal() ? 0 : 1;
          s[h] += l + f / 2;
        }
        return s;
      }
      return [NaN, NaN];
    }, t.prototype.__requireStartValue = function(r) {
      return this.getBaseAxis() !== r;
    }, t.type = "series.__base_bar__", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      // stack: null
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      barMinHeight: 0,
      barMinAngle: 0,
      // cursor: null,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod",
      defaultBarGap: "10%"
    }, t;
  }(He)
);
He.registerClass(Nh);
var kL = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.getInitialData = function() {
      return Jv(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, t.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, t.prototype.__preparePipelineContext = function(r, n) {
      var i = u0(this, r, n);
      return i.progressiveRender && (i.large = !0), i;
    }, t.prototype.brushSelector = function(r, n, i) {
      return i.rect(n.getItemLayout(r));
    }, t.type = "series." + Ii, t.dependencies = ["grid", "polar"], t.defaultOption = d_(Nh.defaultOption, {
      // If clipped
      // Only available on cartesian2d
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: {
        itemStyle: {
          borderColor: q.color.primary,
          borderWidth: 2
        }
      },
      realtimeSort: !1
    }), t;
  }(Nh)
), pu = "\0__throttleOriginMethod", og = "\0__throttleRate", sg = "\0__throttleType";
function Ac(e, t, r) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, e.apply(u, l || []);
  }
  var c = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = v;
    var p = f || t, g = f || r;
    f = null, s = n - (g ? i : a) - p, clearTimeout(o), g ? o = setTimeout(h, p) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return c.clear = function() {
    o && (clearTimeout(o), o = null);
  }, c.debounceNextCall = function(v) {
    f = v;
  }, c;
}
function kS(e, t, r, n) {
  var i = e[t];
  if (i) {
    var a = i[pu] || i, o = i[sg], s = i[og];
    if (s !== r || o !== n) {
      if (r == null || !n)
        return e[t] = a;
      i = e[t] = Ac(a, r, n === "debounce"), i[pu] = a, i[sg] = n, i[og] = r;
    }
    return i;
  }
}
function Bh(e, t) {
  var r = e[t];
  r && r[pu] && (r.clear && r.clear(), e[t] = r[pu]);
}
var NL = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return e;
  }()
), ug = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.type = "sausage", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new NL();
    }, t.prototype.buildPath = function(r, n) {
      var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), u = (s - o) * 0.5, l = o + u, f = n.startAngle, h = n.endAngle, c = n.clockwise, v = Math.PI * 2, d = c ? h - f < v : f - h < v;
      d || (f = h - (c ? v : -v));
      var p = Math.cos(f), g = Math.sin(f), m = Math.cos(h), y = Math.sin(h);
      d ? (r.moveTo(p * o + i, g * o + a), r.arc(p * l + i, g * l + a, u, -Math.PI + f, f, !c)) : r.moveTo(p * s + i, g * s + a), r.arc(i, a, s, f, h, !c), r.arc(m * l + i, y * l + a, u, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && r.arc(i, a, o, h, f, c);
    }, t;
  }(dt)
);
function BL(e, t) {
  t = t || {};
  var r = t.isRoundCap;
  return function(n, i, a) {
    var o = i.position;
    if (!o || o instanceof Array)
      return Bs(n, i, a);
    var s = e(o), u = i.distance != null ? i.distance : 5, l = this.shape, f = l.cx, h = l.cy, c = l.r, v = l.r0, d = (c + v) / 2, p = l.startAngle, g = l.endAngle, m = (p + g) / 2, y = r ? Math.abs(c - v) / 2 : 0, _ = Math.cos, S = Math.sin, b = f + c * _(p), w = h + c * S(p), T = "left", x = "top";
    switch (s) {
      case "startArc":
        b = f + (v - u) * _(m), w = h + (v - u) * S(m), T = "center", x = "top";
        break;
      case "insideStartArc":
        b = f + (v + u) * _(m), w = h + (v + u) * S(m), T = "center", x = "bottom";
        break;
      case "startAngle":
        b = f + d * _(p) + rs(p, u + y, !1), w = h + d * S(p) + ns(p, u + y, !1), T = "right", x = "middle";
        break;
      case "insideStartAngle":
        b = f + d * _(p) + rs(p, -u + y, !1), w = h + d * S(p) + ns(p, -u + y, !1), T = "left", x = "middle";
        break;
      case "middle":
        b = f + d * _(m), w = h + d * S(m), T = "center", x = "middle";
        break;
      case "endArc":
        b = f + (c + u) * _(m), w = h + (c + u) * S(m), T = "center", x = "bottom";
        break;
      case "insideEndArc":
        b = f + (c - u) * _(m), w = h + (c - u) * S(m), T = "center", x = "top";
        break;
      case "endAngle":
        b = f + d * _(g) + rs(g, u + y, !0), w = h + d * S(g) + ns(g, u + y, !0), T = "left", x = "middle";
        break;
      case "insideEndAngle":
        b = f + d * _(g) + rs(g, -u + y, !0), w = h + d * S(g) + ns(g, -u + y, !0), T = "right", x = "middle";
        break;
      default:
        return Bs(n, i, a);
    }
    return n = n || {}, n.x = b, n.y = w, n.align = T, n.verticalAlign = x, n;
  };
}
function FL(e, t, r, n) {
  if (mt(n)) {
    e.setTextConfig({
      rotation: n
    });
    return;
  } else if (W(t)) {
    e.setTextConfig({
      rotation: 0
    });
    return;
  }
  var i = e.shape, a = i.clockwise ? i.startAngle : i.endAngle, o = i.clockwise ? i.endAngle : i.startAngle, s = (a + o) / 2, u, l = r(t);
  switch (l) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      u = s;
      break;
    case "startAngle":
    case "insideStartAngle":
      u = a;
      break;
    case "endAngle":
    case "insideEndAngle":
      u = o;
      break;
    default:
      e.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - u;
  l === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), e.setTextConfig({
    rotation: f
  });
}
function rs(e, t, r) {
  return t * Math.sin(e) * (r ? -1 : 1);
}
function ns(e, t, r) {
  return t * Math.cos(e) * (r ? 1 : -1);
}
function _a(e, t, r) {
  var n = e.get("borderRadius");
  if (n == null)
    return r ? {
      cornerRadius: 0
    } : null;
  W(n) || (n = [n, n, n, n]);
  var i = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: Z(n, function(a) {
      return Hn(a, i);
    })
  };
}
var Ql = Math.max, jl = Math.min, zL = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e.call(this) || this;
      return r.type = Ii, r._isFirstFrame = !0, r;
    }
    return t.prototype.render = function(r, n, i, a) {
      this._model = r, this._removeOnRenderedListener(i), this._updateDrawMode(r);
      var o = r.get("coordinateSystem");
      (o === "cartesian2d" || o === "polar") && (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(r, n, i) : this._renderNormal(r, n, i, a));
    }, t.prototype.incrementalPrepareRender = function(r) {
      this._clear(), this._updateDrawMode(r), this._updateLargeClip(r);
    }, t.prototype.incrementalRender = function(r, n) {
      this._progressiveEls = [], this._incrementalRenderLarge(r, n);
    }, t.prototype.eachRendered = function(r) {
      Vu(this._progressiveEls || this.group, r);
    }, t.prototype._updateDrawMode = function(r) {
      var n = r.pipelineContext.large;
      (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
    }, t.prototype._renderNormal = function(r, n, i, a) {
      var o = this.group, s = r.getData(), u = this._data, l = r.coordinateSystem, f = l.getBaseAxis(), h;
      l.type === "cartesian2d" ? h = f.isHorizontal() : l.type === "polar" && (h = f.dim === "angle");
      var c = r.isAnimationEnabled() ? r : null, v = GL(r, l);
      v && this._enableRealtimeSort(v, s, i);
      var d = r.get("clip", !0) || v, p = l.getArea();
      o.removeClipPath();
      var g = r.get("roundCap", !0), m = r.get("showBackground", !0), y = r.getModel("backgroundStyle"), _ = y.get("borderRadius") || 0, S = [], b = this._backgroundEls, w = a && a.isInitSort, T = a && a.type === "changeAxisOrder";
      function x(A) {
        var L = is[l.type](s, A);
        if (!L)
          return null;
        var M = $L(l, h, L);
        return M.useStyle(y.getItemStyle()), l.type === "cartesian2d" ? M.setShape("r", _) : M.setShape("cornerRadius", _), S[A] = M, M;
      }
      s.diff(u).add(function(A) {
        var L = s.getItemModel(A), M = is[l.type](s, A, L);
        if (M && (m && x(A), !(!s.hasValue(A) || !cg[l.type](M)))) {
          var P = !1;
          d && (P = lg[l.type](p, M));
          var E = fg[l.type](r, s, A, M, h, c, f.model, !1, g);
          v && (E.forceLabelAnimation = !0), dg(E, s, A, L, M, r, h, l.type === "polar"), w ? E.attr({
            shape: M
          }) : v ? hg(v, c, E, M, A, h, !1, !1) : Me(E, {
            shape: M
          }, r, A), s.setItemGraphicEl(A, E), o.add(E), E.ignore = P;
        }
      }).update(function(A, L) {
        var M = s.getItemModel(A), P = is[l.type](s, A, M);
        if (P) {
          if (m) {
            var E = void 0;
            b.length === 0 ? E = x(L) : (E = b[L], E.useStyle(y.getItemStyle()), l.type === "cartesian2d" ? E.setShape("r", _) : E.setShape("cornerRadius", _), S[A] = E);
            var R = is[l.type](s, A), k = BS(h, R, l);
            re(E, {
              shape: k
            }, c, A);
          }
          var O = u.getItemGraphicEl(L);
          if (!s.hasValue(A) || !cg[l.type](P)) {
            o.remove(O);
            return;
          }
          var B = !1;
          d && (B = lg[l.type](p, P), B && o.remove(O));
          var F = O && (O.type === "sector" && g || O.type === "sausage" && !g);
          if (F && (O && La(O, r, L), O = null), O ? Vv(O) : O = fg[l.type](r, s, A, P, h, c, f.model, !0, g), v && (O.forceLabelAnimation = !0), T) {
            var G = O.getTextContent();
            if (G) {
              var U = Uu(G);
              U.prevValue != null && (U.prevValue = U.value);
            }
          } else
            dg(O, s, A, M, P, r, h, l.type === "polar");
          w ? O.attr({
            shape: P
          }) : v ? hg(v, c, O, P, A, h, !0, T) : re(O, {
            shape: P
          }, r, A, null), s.setItemGraphicEl(A, O), O.ignore = B, o.add(O);
        }
      }).remove(function(A) {
        var L = u.getItemGraphicEl(A);
        L && La(L, r, A);
      }).execute();
      var D = this._backgroundGroup || (this._backgroundGroup = new Ft());
      D.removeAll();
      for (var C = 0; C < S.length; ++C)
        D.add(S[C]);
      o.add(D), this._backgroundEls = S, this._data = s;
    }, t.prototype._renderLarge = function(r, n, i) {
      this._clear(), gg(r, this.group), this._updateLargeClip(r);
    }, t.prototype._incrementalRenderLarge = function(r, n) {
      this._removeBackground(), gg(n, this.group, this._progressiveEls, !0);
    }, t.prototype._updateLargeClip = function(r) {
      var n = r.get("clip", !0) && gM(r.coordinateSystem, !1, r), i = this.group;
      n ? i.setClipPath(n) : i.removeClipPath();
    }, t.prototype._enableRealtimeSort = function(r, n, i) {
      var a = this;
      if (n.count()) {
        var o = r.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(n, r, i), this._isFirstFrame = !1;
        else {
          var s = function(u) {
            var l = n.getItemGraphicEl(u), f = l && l.shape;
            return f && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(o.isHorizontal() ? f.height : f.width) || 0;
          };
          this._onRendered = function() {
            a._updateSortWithinSameData(n, s, o, i);
          }, i.getZr().on("rendered", this._onRendered);
        }
      }
    }, t.prototype._dataSort = function(r, n, i) {
      var a = [];
      return r.each(r.mapDimension(n.dim), function(o, s) {
        var u = i(s);
        u = u ?? NaN, a.push({
          dataIndex: s,
          mappedValue: u,
          ordinalNumber: o
        });
      }), a.sort(function(o, s) {
        return s.mappedValue - o.mappedValue;
      }), {
        ordinalNumbers: Z(a, function(o) {
          return o.ordinalNumber;
        })
      };
    }, t.prototype._isOrderChangedWithinSameData = function(r, n, i) {
      for (var a = i.scale, o = r.mapDimension(i.dim), s = Number.MAX_VALUE, u = 0, l = a.getOrdinalMeta().categories.length; u < l; ++u) {
        var f = r.rawIndexOf(o, a.getRawOrdinalNumber(u)), h = f < 0 ? Number.MIN_VALUE : n(r.indexOfRawIndex(f));
        if (h > s)
          return !0;
        s = h;
      }
      return !1;
    }, t.prototype._isOrderDifferentInView = function(r, n) {
      for (var i = n.scale, a = i.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], i.getOrdinalMeta().categories.length - 1); o <= s; ++o)
        if (r.ordinalNumbers[o] !== i.getRawOrdinalNumber(o))
          return !0;
    }, t.prototype._updateSortWithinSameData = function(r, n, i, a) {
      if (this._isOrderChangedWithinSameData(r, n, i)) {
        var o = this._dataSort(r, i, n);
        this._isOrderDifferentInView(o, i) && (this._removeOnRenderedListener(a), a.dispatchAction({
          type: "changeAxisOrder",
          componentType: i.dim + "Axis",
          axisId: i.index,
          sortInfo: o
        }));
      }
    }, t.prototype._dispatchInitSort = function(r, n, i) {
      var a = n.baseAxis, o = this._dataSort(r, a, function(s) {
        return r.get(r.mapDimension(n.otherAxis.dim), s);
      });
      i.dispatchAction({
        type: "changeAxisOrder",
        componentType: a.dim + "Axis",
        isInitSort: !0,
        axisId: a.index,
        sortInfo: o
      });
    }, t.prototype.remove = function(r, n) {
      this._clear(this._model), this._removeOnRenderedListener(n);
    }, t.prototype.dispose = function(r, n) {
      this._removeOnRenderedListener(n);
    }, t.prototype._removeOnRenderedListener = function(r) {
      this._onRendered && (r.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, t.prototype._clear = function(r) {
      var n = this.group, i = this._data;
      r && r.isAnimationEnabled() && i && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], i.eachItemGraphicEl(function(a) {
        La(a, r, ut(a).dataIndex);
      })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, t.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, t.type = Ii, t;
  }(Le)
), lg = {
  cartesian2d: function(e, t) {
    var r = t.width < 0 ? -1 : 1, n = t.height < 0 ? -1 : 1;
    r < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
    var i = e.x + e.width, a = e.y + e.height, o = Ql(t.x, e.x), s = jl(t.x + t.width, i), u = Ql(t.y, e.y), l = jl(t.y + t.height, a), f = s < o, h = l < u;
    return t.x = f && o > i ? s : o, t.y = h && u > a ? l : u, t.width = f ? 0 : s - o, t.height = h ? 0 : l - u, r < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h;
  },
  polar: function(e, t) {
    var r = t.r0 <= t.r ? 1 : -1;
    if (r < 0) {
      var n = t.r;
      t.r = t.r0, t.r0 = n;
    }
    var i = jl(t.r, e.r), a = Ql(t.r0, e.r0);
    t.r = i, t.r0 = a;
    var o = i - a < 0;
    if (r < 0) {
      var n = t.r;
      t.r = t.r0, t.r0 = n;
    }
    return o;
  }
}, fg = {
  cartesian2d: function(e, t, r, n, i, a, o, s, u) {
    var l = new Lt({
      shape: N({}, n),
      z2: 1
    });
    if (l.__dataIndex = r, l.name = "item", a) {
      var f = l.shape, h = i ? "height" : "width";
      f[h] = 0;
    }
    return l;
  },
  polar: function(e, t, r, n, i, a, o, s, u) {
    var l = !i && u ? ug : en, f = new l({
      shape: n,
      z2: 1
    });
    f.name = "item";
    var h = NS(i);
    if (f.calculateTextPosition = BL(h, {
      isRoundCap: l === ug
    }), a) {
      var c = f.shape, v = i ? "r" : "endAngle", d = {};
      c[v] = i ? n.r0 : n.startAngle, d[v] = n[v], (s ? re : Me)(f, {
        shape: d
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function GL(e, t) {
  var r = e.get("realtimeSort", !0), n = t.getBaseAxis();
  if (r && n.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: n,
      otherAxis: t.getOtherAxis(n)
    };
}
function hg(e, t, r, n, i, a, o, s) {
  var u, l;
  a ? (l = {
    x: n.x,
    width: n.width
  }, u = {
    y: n.y,
    height: n.height
  }) : (l = {
    y: n.y,
    height: n.height
  }, u = {
    x: n.x,
    width: n.width
  }), s || (o ? re : Me)(r, {
    shape: u
  }, t, i, null);
  var f = t ? e.baseAxis.model : null;
  (o ? re : Me)(r, {
    shape: l
  }, f, i);
}
function vg(e, t) {
  for (var r = 0; r < t.length; r++)
    if (!isFinite(e[t[r]]))
      return !0;
  return !1;
}
var VL = ["x", "y", "width", "height"], HL = ["cx", "cy", "r", "startAngle", "endAngle"], cg = {
  cartesian2d: function(e) {
    return !vg(e, VL);
  },
  polar: function(e) {
    return !vg(e, HL);
  }
}, is = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(e, t, r) {
    var n = e.getItemLayout(t);
    if (!n)
      return null;
    var i = r ? WL(r, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
    return {
      x: n.x + a * i / 2,
      y: n.y + o * i / 2,
      width: n.width - a * i,
      height: n.height - o * i
    };
  },
  polar: function(e, t, r) {
    var n = e.getItemLayout(t);
    return {
      cx: n.cx,
      cy: n.cy,
      r0: n.r0,
      r: n.r,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    };
  }
};
function UL(e) {
  return e.startAngle != null && e.endAngle != null && e.startAngle === e.endAngle;
}
function NS(e) {
  return /* @__PURE__ */ function(t) {
    var r = t ? "Arc" : "Angle";
    return function(n) {
      switch (n) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return n + r;
        default:
          return n;
      }
    };
  }(e);
}
function dg(e, t, r, n, i, a, o, s) {
  var u = t.getItemVisual(r, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = e.shape, h = _a(n.getModel("itemStyle"), f, !0);
      N(f, h), e.setShape(f);
    }
  } else {
    var l = n.get(["itemStyle", "borderRadius"]) || 0;
    e.setShape("r", l);
  }
  e.useStyle(u);
  var c = n.getShallow("cursor");
  c && e.attr("cursor", c);
  var v = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? ZL(i, a.coordinateSystem) : qL(i, a.coordinateSystem), d = yo(n);
  mo(e, d, {
    labelFetcher: a,
    labelDataIndex: r,
    defaultText: dc(a.getData(), r),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: v
  });
  var p = e.getTextContent();
  if (s && p) {
    var g = n.get(["label", "position"]);
    e.textConfig.inside = g === "middle" ? !0 : null, FL(e, g === "outside" ? v : g, NS(o), n.get(["label", "rotate"]));
  }
  BC(p, d, a.getRawValue(r), function(y) {
    return B_(t, y);
  });
  var m = n.getModel(["emphasis"]);
  Xa(e, m.get("focus"), m.get("blurScope"), m.get("disabled")), Js(e, n), UL(i) && (e.style.fill = "none", e.style.stroke = "none", I(e.states, function(y) {
    y.style && (y.style.fill = y.style.stroke = "none");
  }));
}
function WL(e, t) {
  var r = e.get(["itemStyle", "borderColor"]);
  if (!r || r === "none")
    return 0;
  var n = e.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(n, i, a);
}
var YL = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
    }
    return e;
  }()
), pg = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.type = "largeBar", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new YL();
    }, t.prototype.buildPath = function(r, n) {
      for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < i.length; f += 3)
        u[a] = l, u[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], r.rect(s[0], s[1], u[0], u[1]);
    }, t;
  }(dt)
);
function gg(e, t, r, n) {
  var i = e.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), u = e.getModel("backgroundStyle"), l = i.getLayout("largeBackgroundPoints"), f = n ? lx(e) : 0;
  if (l) {
    var h = new pg({
      shape: {
        points: l
      },
      incremental: f,
      silent: !0,
      z2: 0
    });
    h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, h.useStyle(u.getItemStyle()), t.add(h), r && r.push(h);
  }
  var c = new pg({
    shape: {
      points: i.getLayout("largePoints")
    },
    incremental: f,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  c.baseDimIdx = a, c.largeDataIndices = o, c.barWidth = s, t.add(c), c.useStyle(i.getVisual("style")), c.style.stroke = null, ut(c).seriesIndex = e.seriesIndex, e.get("silent") || (c.on("mousedown", mg), c.on("mousemove", mg)), r && r.push(c);
}
var mg = Ac(function(e) {
  var t = this, r = XL(t, e.offsetX, e.offsetY);
  ut(t).dataIndex = r >= 0 ? r : null;
}, 30, !1);
function XL(e, t, r) {
  for (var n = e.baseDimIdx, i = 1 - n, a = e.shape.points, o = e.largeDataIndices, s = [], u = [], l = e.barWidth, f = 0, h = a.length / 3; f < h; f++) {
    var c = f * 3;
    if (u[n] = l, u[i] = a[c + 2], s[n] = a[c + n], s[i] = a[c + i], u[i] < 0 && (s[i] += u[i], u[i] = -u[i]), t >= s[0] && t <= s[0] + u[0] && r >= s[1] && r <= s[1] + u[1])
      return o[f];
  }
  return -1;
}
function BS(e, t, r) {
  if (W_(r, "cartesian2d")) {
    var n = t, i = r.getArea();
    return {
      x: e ? n.x : i.x,
      y: e ? i.y : n.y,
      width: e ? n.width : i.width,
      height: e ? i.height : n.height
    };
  } else {
    var i = r.getArea(), a = t;
    return {
      cx: i.cx,
      cy: i.cy,
      r0: e ? i.r0 : a.r0,
      r: e ? i.r : a.r,
      startAngle: e ? a.startAngle : 0,
      endAngle: e ? a.endAngle : Math.PI * 2
    };
  }
}
function $L(e, t, r) {
  var n = e.type === "polar" ? en : Lt;
  return new n({
    shape: BS(t, r, e),
    silent: !0,
    z2: 0
  });
}
function ZL(e, t) {
  if (e.height === 0) {
    var r = t.getOtherAxis(t.getBaseAxis());
    return r.inverse ? "bottom" : "top";
  }
  return e.height > 0 ? "bottom" : "top";
}
function qL(e, t) {
  if (e.width === 0) {
    var r = t.getOtherAxis(t.getBaseAxis());
    return r.inverse ? "left" : "right";
  }
  return e.width >= 0 ? "right" : "left";
}
function KL(e) {
  e.registerChartView(zL), e.registerSeriesModel(kL), e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, PL(Ii)), e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, EL(Ii)), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, aS(Ii)), e.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(t, r) {
    var n = t.componentType || "series";
    r.eachComponent({
      mainType: n,
      query: t
    }, function(i) {
      t.sortInfo && i.axis.setCategorySortInfo(t.sortInfo);
    });
  }), OL(e);
}
function QL(e, t) {
  function r(n, i) {
    var a = [];
    return n.eachComponent({
      mainType: "series",
      subType: e,
      query: i
    }, function(o) {
      a.push(o.seriesIndex);
    }), a;
  }
  I([[e + "ToggleSelect", "toggleSelect"], [e + "Select", "select"], [e + "UnSelect", "unselect"]], function(n) {
    t(n[0], function(i, a, o) {
      i = N({}, i), o.dispatchAction(N(i, {
        type: n[1],
        seriesIndex: r(a, i)
      }));
    });
  });
}
function si(e, t, r, n, i) {
  var a = e + t;
  r.isSilent(a) || n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = Wn(h, i.fromActionPayload);
        r.trigger(a, {
          type: a,
          seriesId: o.id,
          name: W(c) ? h.getName(c[0]) : h.getName(c),
          selected: Y(u) ? u : N({}, u)
        });
      }
  });
}
function jL(e, t, r) {
  e.on("selectchanged", function(n) {
    var i = r.getModel();
    n.isFromClick ? (si("map", "selectchanged", t, i, n), si("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (si("map", "selected", t, i, n), si("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (si("map", "unselected", t, i, n), si("pie", "unselected", t, i, n));
  });
}
function JL(e) {
  return {
    seriesType: e,
    reset: function(t, r) {
      var n = r.findComponents({
        mainType: "legend"
      });
      if (!(!n || !n.length)) {
        var i = t.getData();
        i.filterSelf(function(a) {
          for (var o = i.getName(a), s = 0; s < n.length; s++)
            if (!n[s].isSelected(o))
              return !1;
          return !0;
        });
      }
    }
  };
}
function tP(e, t, r) {
  t = W(t) && {
    coordDimensions: t
  } || N({
    encodeDefine: e.getEncode()
  }, t);
  var n = e.getSource(), i = f_(n, t).dimensions, a = new l_(i, e);
  return a.initData(n, r), a;
}
var eP = (
  /** @class */
  function() {
    function e(t, r) {
      this._getDataWithEncodedVisual = t, this._getRawData = r;
    }
    return e.prototype.getAllNames = function() {
      var t = this._getRawData();
      return t.mapArray(t.getName);
    }, e.prototype.containName = function(t) {
      var r = this._getRawData();
      return r.indexOfName(t) >= 0;
    }, e.prototype.indexOfName = function(t) {
      var r = this._getDataWithEncodedVisual();
      return r.indexOfName(t);
    }, e.prototype.getItemVisual = function(t, r) {
      var n = this._getDataWithEncodedVisual();
      return n.getItemVisual(t, r);
    }, e;
  }()
), Xr = "pie", rP = _t(), FS = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.init = function(r) {
      e.prototype.init.apply(this, arguments), this.legendVisualProvider = new eP(St(this.getData, this), St(this.getRawData, this)), this._defaultLabelLine(r);
    }, t.prototype.mergeOption = function() {
      e.prototype.mergeOption.apply(this, arguments);
    }, t.prototype.getInitialData = function() {
      return tP(this, {
        coordDimensions: ["value"],
        encodeDefaulter: Rt($C, this)
      });
    }, t.prototype.getDataParams = function(r) {
      var n = this.getData(), i = rP(n), a = i.seats;
      if (!a) {
        var o = [];
        n.each(n.mapDimension("value"), function(u) {
          o.push(u);
        }), a = i.seats = OT(o, n.hostModel.get("percentPrecision"));
      }
      var s = e.prototype.getDataParams.call(this, r);
      return s.percent = a[r] || 0, s.$vars.push("percent"), s;
    }, t.prototype._defaultLabelLine = function(r) {
      sh(r, "labelLine", ["show"]);
      var n = r.labelLine, i = r.emphasis.labelLine;
      n.show = n.show && r.label.show, i.show = i.show && r.emphasis.label.show;
    }, t.type = "series." + Xr, t.defaultOption = {
      // zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      colorBy: "data",
      // 默认全局居中
      center: ["50%", "50%"],
      radius: [0, "50%"],
      // 默认顺时针
      clockwise: !0,
      startAngle: 90,
      endAngle: "auto",
      padAngle: 0,
      // 最小角度改为0
      minAngle: 0,
      // If the angle of a sector less than `minShowLabelAngle`,
      // the label will not be displayed.
      minShowLabelAngle: 0,
      // 选中时扇区偏移量
      selectedOffset: 10,
      // 选择模式，默认关闭，可选single，multiple
      // selectedMode: false,
      // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
      // roseType: null,
      percentPrecision: 2,
      // If still show when all data zero.
      stillShowZeroSum: !0,
      // cursor: null,
      coordinateSystemUsage: "box",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: null,
      height: null,
      label: {
        // color: 'inherit',
        // If rotate around circle
        rotate: 0,
        show: !0,
        overflow: "truncate",
        // 'outer', 'inside', 'center'
        position: "outer",
        // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
        alignTo: "none",
        // Closest distance between label and chart edge.
        // Works only position is 'outer' and alignTo is 'edge'.
        edgeDistance: "25%",
        // Works only position is 'outer' and alignTo is not 'edge'.
        // The default `bleedMargin` is auto determined according to view rect size.
        // bleedMargin: 10,
        // Distance between text and label line.
        distanceToLabelLine: 5
        // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
        // 默认使用全局文本样式，详见 textStyle
        // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
      },
      // Enabled when label.normal.position is 'outer'
      labelLine: {
        show: !0,
        // 引导线两段中的第一段长度
        length: 15,
        // 引导线两段中的第二段长度
        length2: 30,
        smooth: !1,
        minTurnAngle: 90,
        maxSurfaceAngle: 90,
        lineStyle: {
          // color: 各异,
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1,
        borderJoin: "round"
      },
      showEmptyCircle: !0,
      emptyCircleStyle: {
        color: "lightgray",
        opacity: 1
      },
      labelLayout: {
        // Hide the overlapped label.
        hideOverlap: !0
      },
      emphasis: {
        scale: !0,
        scaleSize: 5
      },
      // If use strategy to avoid label overlapping
      avoidLabelOverlap: !0,
      // Animation type. Valid values: expansion, scale
      animationType: "expansion",
      animationDuration: 1e3,
      // Animation type when update. Valid values: transition, expansion
      animationTypeUpdate: "transition",
      animationEasingUpdate: "cubicInOut",
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut"
    }, t;
  }(He)
);
_D({
  fullType: FS.type,
  getCoord2: function(e) {
    return e.getShallow("center");
  }
});
function zS(e, t, r, n, i, a, o, s) {
  var u = i - e, l = a - t, f = r - e, h = n - t, c = Math.sqrt(f * f + h * h);
  f /= c, h /= c;
  var v = u * f + l * h, d = v / c;
  d *= c;
  var p = o[0] = e + d * f, g = o[1] = t + d * h;
  return Math.sqrt((p - i) * (p - i) + (g - a) * (g - a));
}
var Gr = new rt(), It = new rt(), Gt = new rt(), Vr = new rt(), rr = new rt(), gu = [], Qt = new rt();
function nP(e, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, Gr.fromArray(e[0]), It.fromArray(e[1]), Gt.fromArray(e[2]), rt.sub(Vr, Gr, It), rt.sub(rr, Gt, It);
    var r = Vr.len(), n = rr.len();
    if (!(r < 1e-3 || n < 1e-3)) {
      Vr.scale(1 / r), rr.scale(1 / n);
      var i = Vr.dot(rr), a = Math.cos(t);
      if (a < i) {
        var o = zS(It.x, It.y, Gt.x, Gt.y, Gr.x, Gr.y, gu);
        Qt.fromArray(gu), Qt.scaleAndAdd(rr, o / Math.tan(Math.PI - t));
        var s = Gt.x !== It.x ? (Qt.x - It.x) / (Gt.x - It.x) : (Qt.y - It.y) / (Gt.y - It.y);
        if (isNaN(s))
          return;
        s < 0 ? rt.copy(Qt, It) : s > 1 && rt.copy(Qt, Gt), Qt.toArray(e[1]);
      }
    }
  }
}
function iP(e, t, r) {
  if (r <= 180 && r > 0) {
    r = r / 180 * Math.PI, Gr.fromArray(e[0]), It.fromArray(e[1]), Gt.fromArray(e[2]), rt.sub(Vr, It, Gr), rt.sub(rr, Gt, It);
    var n = Vr.len(), i = rr.len();
    if (!(n < 1e-3 || i < 1e-3)) {
      Vr.scale(1 / n), rr.scale(1 / i);
      var a = Vr.dot(t), o = Math.cos(r);
      if (a < o) {
        var s = zS(It.x, It.y, Gt.x, Gt.y, Gr.x, Gr.y, gu);
        Qt.fromArray(gu);
        var u = Math.PI / 2, l = Math.acos(rr.dot(t)), f = u + l - r;
        if (f >= u)
          rt.copy(Qt, Gt);
        else {
          Qt.scaleAndAdd(rr, s / Math.tan(Math.PI / 2 - f));
          var h = Gt.x !== It.x ? (Qt.x - It.x) / (Gt.x - It.x) : (Qt.y - It.y) / (Gt.y - It.y);
          if (isNaN(h))
            return;
          h < 0 ? rt.copy(Qt, It) : h > 1 && rt.copy(Qt, Gt);
        }
        Qt.toArray(e[1]);
      }
    }
  }
}
function Jl(e, t, r, n) {
  var i = r === "normal", a = i ? e : e.ensureState(r);
  a.ignore = t;
  var o = n.get("smooth");
  o = o === !0 ? 0.3 : Math.max(+o, 0) || 0, a.shape = a.shape || {}, a.shape.smooth = o;
  var s = n.getModel("lineStyle").getLineStyle();
  i ? e.useStyle(s) : a.style = s;
}
function aP(e, t) {
  var r = t.smooth, n = t.points;
  if (n)
    if (e.moveTo(n[0][0], n[0][1]), r > 0 && n.length >= 3) {
      var i = Gf(n[0], n[1]), a = Gf(n[1], n[2]);
      if (!i || !a) {
        e.lineTo(n[1][0], n[1][1]), e.lineTo(n[2][0], n[2][1]);
        return;
      }
      var o = Math.min(i, a) * r, s = ol([], n[1], n[0], o / i), u = ol([], n[1], n[2], o / a), l = ol([], s, u, 0.5);
      e.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), e.bezierCurveTo(u[0], u[1], u[0], u[1], n[2][0], n[2][1]);
    } else
      for (var f = 1; f < n.length; f++)
        e.lineTo(n[f][0], n[f][1]);
}
function oP(e, t, r) {
  var n = e.getTextGuideLine(), i = e.getTextContent();
  if (!i) {
    n && e.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = i.ignore, u = 0; u < Zs.length; u++) {
    var l = Zs[u], f = t[l], h = l === "normal";
    if (f) {
      var c = f.get("show"), v = h ? s : $(i.states[l] && i.states[l].ignore, s);
      if (v || !$(c, o)) {
        var d = h ? n : n && n.states[l];
        d && (d.ignore = !0), n && Jl(n, !0, l, f);
        continue;
      }
      n || (n = new go(), e.setTextGuideLine(n), !h && (s || !o) && Jl(n, !0, "normal", t.normal), e.stateProxy && (n.stateProxy = e.stateProxy)), Jl(n, !1, l, f);
    }
  }
  if (n) {
    yt(n.style, r), n.style.fill = null;
    var p = a.get("showAbove"), g = e.textGuideLineConfig = e.textGuideLineConfig || {};
    g.showAbove = p || !1, n.buildPath = aP;
  }
}
function sP(e, t) {
  t = t || "labelLine";
  for (var r = {
    normal: e.getModel(t)
  }, n = 0; n < Ee.length; n++) {
    var i = Ee[n];
    r[i] = e.getModel([i, t]);
  }
  return r;
}
var uP = Math.PI / 180;
function yg(e, t, r, n, i, a, o, s, u, l) {
  if (e.length < 2)
    return;
  function f(p) {
    for (var g = p.rB, m = g * g, y = 0; y < p.list.length; y++) {
      var _ = p.list[y], S = Math.abs(_.label.y - r), b = n + _.len, w = b * b, T = Math.sqrt(Math.abs((1 - S * S / m) * w)), x = t + (T + _.len2) * i, D = x - _.label.x, C = _.targetTextWidth - D * i;
      GS(_, C, !0), _.label.x = x;
    }
  }
  function h(p) {
    for (var g = {
      list: [],
      maxY: 0
    }, m = {
      list: [],
      maxY: 0
    }, y = 0; y < p.length; y++)
      if (p[y].labelAlignTo === "none") {
        var _ = p[y], S = _.label.y > r ? m : g, b = Math.abs(_.label.y - r);
        if (b >= S.maxY) {
          var w = _.label.x - t - _.len2 * i, T = n + _.len, x = Math.abs(w) < T ? Math.sqrt(b * b / (1 - w * w / T / T)) : T;
          S.rB = x, S.maxY = b;
        }
        S.list.push(_);
      }
    f(g), f(m);
  }
  for (var c = e.length, v = 0; v < c; v++)
    if (e[v].position === "outer" && e[v].labelAlignTo === "labelLine") {
      var d = e[v].label.x - l;
      e[v].linePoints[1][0] += d, e[v].label.x = l;
    }
  zI(e, 1, u, u + o) && h(e);
}
function lP(e, t, r, n, i, a, o, s) {
  for (var u = [], l = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, c = 0; c < e.length; c++) {
    var v = e[c].label;
    tf(e[c]) || (v.x < t ? (f = Math.min(f, v.x), u.push(e[c])) : (h = Math.max(h, v.x), l.push(e[c])));
  }
  for (var c = 0; c < e.length; c++) {
    var d = e[c];
    if (!tf(d) && d.linePoints) {
      if (d.labelStyleWidth != null)
        continue;
      var v = d.label, p = d.linePoints, g = void 0;
      d.labelAlignTo === "edge" ? v.x < t ? g = p[2][0] - d.labelDistance - o - d.edgeDistance : g = o + i - d.edgeDistance - p[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < t ? g = f - o - d.bleedMargin : g = o + i - h - d.bleedMargin : v.x < t ? g = v.x - o - d.bleedMargin : g = o + i - v.x - d.bleedMargin, d.targetTextWidth = g, GS(d, g, !1);
    }
  }
  yg(l, t, r, n, 1, i, a, o, s, h), yg(u, t, r, n, -1, i, a, o, s, f);
  for (var c = 0; c < e.length; c++) {
    var d = e[c];
    if (!tf(d) && d.linePoints) {
      var v = d.label, p = d.linePoints, m = d.labelAlignTo === "edge", y = v.style.padding, _ = y ? y[1] + y[3] : 0, S = v.style.backgroundColor ? 0 : _, b = d.rect.width + S, w = p[1][0] - p[2][0];
      m ? v.x < t ? p[2][0] = o + d.edgeDistance + b + d.labelDistance : p[2][0] = o + i - d.edgeDistance - b - d.labelDistance : (v.x < t ? p[2][0] = v.x + d.labelDistance : p[2][0] = v.x - d.labelDistance, p[1][0] = p[2][0] + w), p[1][1] = p[2][1] = v.y;
    }
  }
}
function GS(e, t, r) {
  if (e.labelStyleWidth == null) {
    var n = e.label, i = n.style, a = e.rect, o = i.backgroundColor, s = i.padding, u = s ? s[1] + s[3] : 0, l = i.overflow, f = a.width + (o ? 0 : u);
    if (t < f || r) {
      if (l && l.match("break")) {
        n.setStyle("backgroundColor", null), n.setStyle("width", t - u);
        var h = n.getBoundingRect();
        n.setStyle("width", Math.ceil(h.width)), n.setStyle("backgroundColor", o);
      } else {
        var c = t - u, v = t < f ? c : (
          // Current available width is enough, but the text may have
          // already been wrapped with a smaller available width.
          r ? c > e.unconstrainedWidth ? null : c : null
        );
        n.setStyle("width", v);
      }
      VS(a, n);
    }
  }
}
function VS(e, t) {
  _g.rect = e, SS(_g, t, fP);
}
var fP = {
  minMarginForce: [null, 0, null, 0],
  marginDefault: [1, 0, 1, 0]
}, _g = {};
function tf(e) {
  return e.position === "center";
}
function hP(e) {
  var t = e.getData(), r = [], n, i, a = !1, o = (e.get("minShowLabelAngle") || 0) * uP, s = t.getLayout("viewRect"), u = t.getLayout("r"), l = s.width, f = s.x, h = s.y, c = s.height;
  function v(w) {
    w.ignore = !0;
  }
  function d(w) {
    if (!w.ignore)
      return !0;
    for (var T in w.states)
      if (w.states[T].ignore === !1)
        return !0;
    return !1;
  }
  t.each(function(w) {
    var T = t.getItemGraphicEl(w), x = T.shape, D = T.getTextContent(), C = T.getTextGuideLine(), A = t.getItemModel(w), L = A.getModel("label"), M = L.get("position") || A.get(["emphasis", "label", "position"]), P = L.get("distanceToLabelLine"), E = L.get("alignTo"), R = Tt(L.get("edgeDistance"), l), k = L.get("bleedMargin");
    k == null && (k = Math.min(l, c) > 200 ? 10 : 2);
    var O = A.getModel("labelLine"), B = O.get("length");
    B = Tt(B, l);
    var F = O.get("length2");
    if (F = Tt(F, l), Math.abs(x.endAngle - x.startAngle) < o) {
      I(D.states, v), D.ignore = !0, C && (I(C.states, v), C.ignore = !0);
      return;
    }
    if (d(D)) {
      var G = (x.startAngle + x.endAngle) / 2, U = Math.cos(G), X = Math.sin(G), H, J, it, Dt;
      n = x.cx, i = x.cy;
      var xt = M === "inside" || M === "inner";
      if (M === "center")
        H = x.cx, J = x.cy, Dt = "center";
      else {
        var st = (xt ? (x.r + x.r0) / 2 * U : x.r * U) + n, bt = (xt ? (x.r + x.r0) / 2 * X : x.r * X) + i;
        if (H = st + U * 3, J = bt + X * 3, !xt) {
          var Q = st + U * (B + u - x.r), at = bt + X * (B + u - x.r), ne = Q + (U < 0 ? -1 : 1) * F, At = at;
          E === "edge" ? H = U < 0 ? f + R : f + l - R : H = ne + (U < 0 ? -P : P), J = At, it = [[st, bt], [Q, at], [ne, At]];
        }
        Dt = xt ? "center" : E === "edge" ? U > 0 ? "right" : "left" : U > 0 ? "left" : "right";
      }
      var Oe = Math.PI, ie = 0, ke = L.get("rotate");
      if (mt(ke))
        ie = ke * (Oe / 180);
      else if (M === "center")
        ie = 0;
      else if (ke === "radial" || ke === !0) {
        var Kn = U < 0 ? -G + Oe : -G;
        ie = Kn;
      } else if (ke === "tangential" || ke === "tangential-noflip" && M !== "outside" && M !== "outer") {
        var Ne = Math.atan2(U, X);
        Ne < 0 && (Ne = Oe * 2 + Ne);
        var bo = X > 0;
        bo && ke !== "tangential-noflip" && (Ne = Oe + Ne), ie = Ne - Oe;
      }
      if (a = !!ie, D.x = H, D.y = J, D.rotation = ie, D.setStyle({
        verticalAlign: "middle"
      }), xt) {
        D.setStyle({
          align: Dt
        });
        var rl = D.states.select;
        rl && (rl.x += D.x, rl.y += D.y);
      } else {
        var Qn = new tt(0, 0, 0, 0);
        VS(Qn, D), r.push({
          label: D,
          labelLine: C,
          position: M,
          len: B,
          len2: F,
          minTurnAngle: O.get("minTurnAngle"),
          maxSurfaceAngle: O.get("maxSurfaceAngle"),
          surfaceNormal: new rt(U, X),
          linePoints: it,
          textAlign: Dt,
          labelDistance: P,
          labelAlignTo: E,
          edgeDistance: R,
          bleedMargin: k,
          rect: Qn,
          unconstrainedWidth: Qn.width,
          labelStyleWidth: D.style.width
        });
      }
      T.setTextConfig({
        inside: xt
      });
    }
  }), !a && e.get("avoidLabelOverlap") && lP(r, n, i, u, l, c, f, h);
  for (var p = 0; p < r.length; p++) {
    var g = r[p], m = g.label, y = g.labelLine, _ = isNaN(m.x) || isNaN(m.y);
    if (m) {
      m.setStyle({
        align: g.textAlign
      }), _ && (I(m.states, v), m.ignore = !0);
      var S = m.states.select;
      S && (S.x += m.x, S.y += m.y);
    }
    if (y) {
      var b = g.linePoints;
      _ || !b ? (I(y.states, v), y.ignore = !0) : (nP(b, g.minTurnAngle), iP(b, g.surfaceNormal, g.maxSurfaceAngle), y.setShape({
        points: b
      }), m.__hostTarget.textGuideLineConfig = {
        anchor: new rt(b[0][0], b[0][1])
      });
    }
  }
}
var Sg = Math.PI * 2, as = Math.PI / 180, vP = fx(Xr, cP);
function cP(e, t) {
  e.eachSeriesByType(Xr, function(r) {
    var n = r.getData(), i = n.mapDimension("value"), a = uA(r, t), o = a.cx, s = a.cy, u = a.r, l = a.r0, f = a.viewRect, h = -r.get("startAngle") * as, c = r.get("endAngle"), v = r.get("padAngle") * as;
    c = c === "auto" ? h - Sg : -c * as;
    var d = r.get("minAngle") * as, p = d + v, g = 0;
    n.each(i, function(R) {
      !isNaN(R) && g++;
    });
    var m = n.getSum(i), y = Math.PI / (m || g) * 2, _ = r.get("clockwise"), S = r.get("roseType"), b = r.get("stillShowZeroSum"), w = n.getDataExtent(i);
    w[0] = 0;
    var T = _ ? 1 : -1, x = [h, c], D = T * v / 2;
    Wy(x, !_), h = x[0], c = x[1];
    var C = HS(r);
    C.startAngle = h, C.endAngle = c, C.clockwise = _, C.cx = o, C.cy = s, C.r = u, C.r0 = l;
    var A = Math.abs(c - h), L = A, M = 0, P = h;
    if (n.setLayout({
      viewRect: f,
      r: u
    }), n.each(i, function(R, k) {
      var O;
      if (isNaN(R)) {
        n.setItemLayout(k, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: _,
          cx: o,
          cy: s,
          r0: l,
          r: S ? NaN : u
        });
        return;
      }
      S !== "area" ? O = m === 0 && b ? y : R * y : O = A / g, O < p ? (O = p, L -= p) : M += R;
      var B = P + T * O, F = 0, G = 0;
      v > O ? (F = P + T * O / 2, G = F) : (F = P + D, G = B - D), n.setItemLayout(k, {
        angle: O,
        startAngle: F,
        endAngle: G,
        clockwise: _,
        cx: o,
        cy: s,
        r0: l,
        r: S ? ah(R, w, [l, u]) : u
      }), P = B;
    }), L < Sg && g)
      if (L <= 1e-3) {
        var E = A / g;
        n.each(i, function(R, k) {
          if (!isNaN(R)) {
            var O = n.getItemLayout(k);
            O.angle = E;
            var B = 0, F = 0;
            E < v ? (B = h + T * (k + 1 / 2) * E, F = B) : (B = h + T * k * E + D, F = h + T * (k + 1) * E - D), O.startAngle = B, O.endAngle = F;
          }
        });
      } else
        y = L / M, P = h, n.each(i, function(R, k) {
          if (!isNaN(R)) {
            var O = n.getItemLayout(k), B = O.angle === p ? p : R * y, F = 0, G = 0;
            B < v ? (F = P + T * B / 2, G = F) : (F = P + D, G = P + T * B - D), O.startAngle = F, O.endAngle = G, P += T * B;
          }
        });
  });
}
var HS = _t(), dP = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r, n, i) {
      var a = e.call(this) || this;
      a.z2 = 2;
      var o = new Wt();
      return a.setTextContent(o), a.updateData(r, n, i, !0), a;
    }
    return t.prototype.updateData = function(r, n, i, a) {
      var o = this, s = r.hostModel, u = r.getItemModel(n), l = u.getModel("emphasis"), f = r.getItemLayout(n), h = N(_a(u.getModel("itemStyle"), f, !0), f);
      if (isNaN(h.startAngle)) {
        o.setShape(h);
        return;
      }
      if (a) {
        o.setShape(h);
        var c = s.getShallow("animationType");
        s.ecModel.ssr ? (Me(o, {
          scaleX: 0,
          scaleY: 0
        }, s, {
          dataIndex: n,
          isFrom: !0
        }), o.originX = h.cx, o.originY = h.cy) : c === "scale" ? (o.shape.r = f.r0, Me(o, {
          shape: {
            r: f.r
          }
        }, s, n)) : i != null ? (o.setShape({
          startAngle: i,
          endAngle: i
        }), Me(o, {
          shape: {
            startAngle: f.startAngle,
            endAngle: f.endAngle
          }
        }, s, n)) : (o.shape.endAngle = f.startAngle, re(o, {
          shape: {
            endAngle: f.endAngle
          }
        }, s, n));
      } else
        Vv(o), re(o, {
          shape: h
        }, s, n);
      o.useStyle(r.getItemVisual(n, "style")), Js(o, u);
      var v = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), p = Math.cos(v) * d, g = Math.sin(v) * d, m = u.getShallow("cursor");
      m && o.attr("cursor", m), this._updateLabel(s, r, n), o.ensureState("emphasis").shape = N({
        r: f.r + (l.get("scale") && l.get("scaleSize") || 0)
      }, _a(l.getModel("itemStyle"), f)), N(o.ensureState("select"), {
        x: p,
        y: g,
        shape: _a(u.getModel(["select", "itemStyle"]), f)
      }), N(o.ensureState("blur"), {
        shape: _a(u.getModel(["blur", "itemStyle"]), f)
      });
      var y = o.getTextGuideLine(), _ = o.getTextContent();
      y && N(y.ensureState("select"), {
        x: p,
        y: g
      }), N(_.ensureState("select"), {
        x: p,
        y: g
      }), Xa(this, l.get("focus"), l.get("blurScope"), l.get("disabled"));
    }, t.prototype._updateLabel = function(r, n, i) {
      var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), u = n.getItemVisual(i, "style"), l = u && u.fill, f = u && u.opacity;
      mo(a, yo(o), {
        labelFetcher: n.hostModel,
        labelDataIndex: i,
        inheritColor: l,
        defaultOpacity: f,
        defaultText: r.getFormattedLabel(i, "normal") || n.getName(i)
      });
      var h = a.getTextContent();
      a.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      }), h.attr({
        z2: 10
      });
      var c = o.get(["label", "position"]);
      if (c !== "outside" && c !== "outer")
        a.removeTextGuideLine();
      else {
        var v = this.getTextGuideLine();
        v || (v = new go(), this.setTextGuideLine(v)), oP(this, sP(o), {
          stroke: l,
          opacity: Nn(s.get(["lineStyle", "opacity"]), f, 1)
        });
      }
    }, t;
  }(en)
), pP = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Xr, r.ignoreLabelLineUpdate = !0, r;
    }
    return t.prototype.render = function(r, n, i, a) {
      var o = r.getData(), s = this._data, u = this.group, l;
      if (!s && o.count() > 0) {
        for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h)
          f = o.getItemLayout(h);
        f && (l = f.startAngle);
      }
      if (this._emptyCircleSector && u.remove(this._emptyCircleSector), o.count() === 0 && r.get("showEmptyCircle")) {
        var c = HS(r), v = new en({
          shape: ot(c)
        });
        v.useStyle(r.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = v, u.add(v);
      }
      o.diff(s).add(function(d) {
        var p = new dP(o, d, l);
        o.setItemGraphicEl(d, p), u.add(p);
      }).update(function(d, p) {
        var g = s.getItemGraphicEl(p);
        g.updateData(o, d, l), g.off("click"), u.add(g), o.setItemGraphicEl(d, g);
      }).remove(function(d) {
        var p = s.getItemGraphicEl(d);
        La(p, r, d);
      }).execute(), hP(r), r.get("animationTypeUpdate") !== "expansion" && (this._data = o);
    }, t.prototype.dispose = function() {
    }, t.prototype.containPoint = function(r, n) {
      var i = n.getData(), a = i.getItemLayout(0);
      if (a) {
        var o = r[0] - a.cx, s = r[1] - a.cy, u = Math.sqrt(o * o + s * s);
        return u <= a.r && u >= a.r0;
      }
    }, t.type = Xr, t;
  }(Le)
);
function gP(e) {
  return {
    seriesType: e,
    reset: function(t, r) {
      var n = t.getData();
      n.filterSelf(function(i) {
        var a = n.mapDimension("value"), o = n.get(a, i);
        return !(mt(o) && !isNaN(o) && o < 0);
      });
    }
  };
}
function mP(e) {
  e.registerChartView(pP), e.registerSeriesModel(FS), QL(Xr, e.registerAction), e.registerLayout(vP), e.registerProcessor(JL(Xr)), e.registerProcessor(gP(Xr));
}
var ui = /* @__PURE__ */ function() {
  function e(t, r) {
    this.target = t, this.topTarget = r && r.topTarget;
  }
  return e;
}(), yP = function() {
  function e(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return e.prototype._dragStart = function(t) {
    for (var r = t.target; r && !r.draggable; )
      r = r.parent || r.__hostTarget;
    r && (this._draggingTarget = r, r.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new ui(r, t), "dragstart", t.event));
  }, e.prototype._drag = function(t) {
    var r = this._draggingTarget;
    if (r) {
      var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, r.drift(a, o, t), this.handler.dispatchToElement(new ui(r, t), "drag", t.event);
      var s = this.handler.findHover(n, i, r).target, u = this._dropTarget;
      this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new ui(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new ui(s, t), "dragenter", t.event));
    }
  }, e.prototype._dragEnd = function(t) {
    var r = this._draggingTarget;
    r && (r.dragging = !1), this.handler.dispatchToElement(new ui(r, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new ui(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, e;
}(), _P = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ef = [], SP = nt.browser.firefox && +nt.browser.version.split(".")[0] < 39;
function Fh(e, t, r, n) {
  return r = r || {}, n ? bg(e, t, r) : SP && t.layerX != null && t.layerX !== t.offsetX ? (r.zrX = t.layerX, r.zrY = t.layerY) : t.offsetX != null ? (r.zrX = t.offsetX, r.zrY = t.offsetY) : bg(e, t, r), r;
}
function bg(e, t, r) {
  if (nt.domSupported && e.getBoundingClientRect) {
    var n = t.clientX, i = t.clientY;
    if (p_(e)) {
      var a = e.getBoundingClientRect();
      r.zrX = n - a.left, r.zrY = i - a.top;
      return;
    } else if (bh(ef, e, n, i)) {
      r.zrX = ef[0], r.zrY = ef[1];
      return;
    }
  }
  r.zrX = r.zrY = 0;
}
function Mc(e) {
  return e || window.event;
}
function me(e, t, r) {
  if (t = Mc(t), t.zrX != null)
    return t;
  var n = t.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Fh(e, o, t, r);
  } else {
    Fh(e, t, t, r);
    var a = bP(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && _P.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function bP(e) {
  var t = e.wheelDelta;
  if (t)
    return t;
  var r = e.deltaX, n = e.deltaY;
  if (r == null || n == null)
    return t;
  var i = Math.abs(n !== 0 ? n : r), a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
  return 3 * i * a;
}
function wP(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function TP(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
var US = function(e) {
  e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0;
}, xP = function() {
  function e() {
    this._track = [];
  }
  return e.prototype.recognize = function(t, r, n) {
    return this._doTrack(t, r, n), this._recognize(t);
  }, e.prototype.clear = function() {
    return this._track.length = 0, this;
  }, e.prototype._doTrack = function(t, r, n) {
    var i = t.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: r,
        event: t
      }, o = 0, s = i.length; o < s; o++) {
        var u = i[o], l = Fh(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, e.prototype._recognize = function(t) {
    for (var r in rf)
      if (rf.hasOwnProperty(r)) {
        var n = rf[r](this._track, t);
        if (n)
          return n;
      }
  }, e;
}();
function wg(e) {
  var t = e[1][0] - e[0][0], r = e[1][1] - e[0][1];
  return Math.sqrt(t * t + r * r);
}
function CP(e) {
  return [
    (e[0][0] + e[1][0]) / 2,
    (e[0][1] + e[1][1]) / 2
  ];
}
var rf = {
  pinch: function(e, t) {
    var r = e.length;
    if (r) {
      var n = (e[r - 1] || {}).points, i = (e[r - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = wg(n) / wg(i);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = CP(n);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: e[0].target,
          event: t
        };
      }
    }
  }
}, WS = "silent";
function DP(e, t, r) {
  return {
    type: e,
    event: r,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: r.zrX,
    offsetY: r.zrY,
    gestureEvent: r.gestureEvent,
    pinchX: r.pinchX,
    pinchY: r.pinchY,
    pinchScale: r.pinchScale,
    wheelDelta: r.zrDelta,
    zrByTouch: r.zrByTouch,
    which: r.which,
    stop: AP
  };
}
function AP() {
  US(this.event);
}
var MP = function(e) {
  V(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.handler = null, r;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(hr), aa = /* @__PURE__ */ function() {
  function e(t, r) {
    this.x = t, this.y = r;
  }
  return e;
}(), IP = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], nf = new tt(0, 0, 0, 0), YS = function(e) {
  V(t, e);
  function t(r, n, i, a, o) {
    var s = e.call(this) || this;
    return s._hovered = new aa(0, 0), s.storage = r, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new MP(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new yP(s), s;
  }
  return t.prototype.setHandlerProxy = function(r) {
    this.proxy && this.proxy.dispose(), r && (I(IP, function(n) {
      r.on && r.on(n, this[n], this);
    }, this), r.handler = this), this.proxy = r;
  }, t.prototype.mousemove = function(r) {
    var n = r.zrX, i = r.zrY, a = XS(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new aa(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r);
  }, t.prototype.mouseout = function(r) {
    var n = r.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: r });
  }, t.prototype.resize = function() {
    this._hovered = new aa(0, 0);
  }, t.prototype.dispatch = function(r, n) {
    var i = this[r];
    i && i.call(this, n);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(r) {
    var n = this.proxy;
    n.setCursor && n.setCursor(r);
  }, t.prototype.dispatchToElement = function(r, n, i) {
    r = r || {};
    var a = r.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = DP(n, r, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, t.prototype.findHover = function(r, n, i) {
    var a = this.storage.getDisplayList(), o = new aa(r, n);
    if (Tg(a, o, r, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new tt(r - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== i && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (nf.copy(c.getBoundingRect()), c.transform && nf.applyTransform(c.transform), nf.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, p = Math.PI * 2, g = 0; g < l; g += v)
          for (var m = 0; m < p; m += d) {
            var y = r + g * Math.cos(m), _ = n + g * Math.sin(m);
            if (Tg(s, o, y, _, i), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(r, n) {
    this._gestureMgr || (this._gestureMgr = new xP());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      r.gestureEvent = o;
      var s = new aa();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(hr);
I(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(e) {
  YS.prototype[e] = function(t) {
    var r = t.zrX, n = t.zrY, i = XS(this, r, n), a, o;
    if ((e !== "mouseup" || !i) && (a = this.findHover(r, n), o = a.target), e === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (e === "mouseup")
      this._upEl = o;
    else if (e === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Gf(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, e, t);
  };
});
function LP(e, t, r) {
  if (e[e.rectHover ? "rectContain" : "contain"](t, r)) {
    for (var n = e, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(t, r))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s ? n.ignoreHostSilent ? null : s : n.parent;
    }
    return i ? WS : !0;
  }
  return !1;
}
function Tg(e, t, r, n, i) {
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a], s = void 0;
    if (o !== i && !o.ignore && (s = LP(o, r, n)) && (!t.topTarget && (t.topTarget = o), s !== WS)) {
      t.target = o;
      break;
    }
  }
}
function XS(e, t, r) {
  var n = e.painter;
  return t < 0 || t > n.getWidth() || r < 0 || r > n.getHeight();
}
var $S = 32, oa = 7;
function PP(e) {
  for (var t = 0; e >= $S; )
    t |= e & 1, e >>= 1;
  return e + t;
}
function xg(e, t, r, n) {
  var i = t + 1;
  if (i === r)
    return 1;
  if (n(e[i++], e[t]) < 0) {
    for (; i < r && n(e[i], e[i - 1]) < 0; )
      i++;
    EP(e, t, i);
  } else
    for (; i < r && n(e[i], e[i - 1]) >= 0; )
      i++;
  return i - t;
}
function EP(e, t, r) {
  for (r--; t < r; ) {
    var n = e[t];
    e[t++] = e[r], e[r--] = n;
  }
}
function Cg(e, t, r, n, i) {
  for (n === t && n++; n < r; n++) {
    for (var a = e[n], o = t, s = n, u; o < s; )
      u = o + s >>> 1, i(a, e[u]) < 0 ? s = u : o = u + 1;
    var l = n - o;
    switch (l) {
      case 3:
        e[o + 3] = e[o + 2];
      case 2:
        e[o + 2] = e[o + 1];
      case 1:
        e[o + 1] = e[o];
        break;
      default:
        for (; l > 0; )
          e[o + l] = e[o + l - 1], l--;
    }
    e[o] = a;
  }
}
function af(e, t, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(e, t[r + i]) > 0) {
    for (s = n - i; u < s && a(e, t[r + i + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  } else {
    for (s = i + 1; u < s && a(e, t[r + i - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(e, t[r + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function of(e, t, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(e, t[r + i]) < 0) {
    for (s = i + 1; u < s && a(e, t[r + i - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  } else {
    for (s = n - i; u < s && a(e, t[r + i + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(e, t[r + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function RP(e, t) {
  var r = oa, n, i, a = 0, o = [];
  n = [], i = [];
  function s(v, d) {
    n[a] = v, i[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && i[v - 1] <= i[v] + i[v + 1] || v >= 2 && i[v - 2] <= i[v] + i[v - 1])
        i[v - 1] < i[v + 1] && v--;
      else if (i[v] > i[v + 1])
        break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && i[v - 1] < i[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = n[v], p = i[v], g = n[v + 1], m = i[v + 1];
    i[v] = p + m, v === a - 3 && (n[v + 1] = n[v + 2], i[v + 1] = i[v + 2]), a--;
    var y = of(e[g], e, d, p, 0, t);
    d += y, p -= y, p !== 0 && (m = af(e[d + p - 1], e, g, m, m - 1, t), m !== 0 && (p <= m ? h(d, p, g, m) : c(d, p, g, m)));
  }
  function h(v, d, p, g) {
    var m = 0;
    for (m = 0; m < d; m++)
      o[m] = e[v + m];
    var y = 0, _ = p, S = v;
    if (e[S++] = e[_++], --g === 0) {
      for (m = 0; m < d; m++)
        e[S + m] = o[y + m];
      return;
    }
    if (d === 1) {
      for (m = 0; m < g; m++)
        e[S + m] = e[_ + m];
      e[S + g] = o[y];
      return;
    }
    for (var b = r, w, T, x; ; ) {
      w = 0, T = 0, x = !1;
      do
        if (t(e[_], o[y]) < 0) {
          if (e[S++] = e[_++], T++, w = 0, --g === 0) {
            x = !0;
            break;
          }
        } else if (e[S++] = o[y++], w++, T = 0, --d === 1) {
          x = !0;
          break;
        }
      while ((w | T) < b);
      if (x)
        break;
      do {
        if (w = of(e[_], o, y, d, 0, t), w !== 0) {
          for (m = 0; m < w; m++)
            e[S + m] = o[y + m];
          if (S += w, y += w, d -= w, d <= 1) {
            x = !0;
            break;
          }
        }
        if (e[S++] = e[_++], --g === 0) {
          x = !0;
          break;
        }
        if (T = af(o[y], e, _, g, 0, t), T !== 0) {
          for (m = 0; m < T; m++)
            e[S + m] = e[_ + m];
          if (S += T, _ += T, g -= T, g === 0) {
            x = !0;
            break;
          }
        }
        if (e[S++] = o[y++], --d === 1) {
          x = !0;
          break;
        }
        b--;
      } while (w >= oa || T >= oa);
      if (x)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (r = b, r < 1 && (r = 1), d === 1) {
      for (m = 0; m < g; m++)
        e[S + m] = e[_ + m];
      e[S + g] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (m = 0; m < d; m++)
        e[S + m] = o[y + m];
    }
  }
  function c(v, d, p, g) {
    var m = 0;
    for (m = 0; m < g; m++)
      o[m] = e[p + m];
    var y = v + d - 1, _ = g - 1, S = p + g - 1, b = 0, w = 0;
    if (e[S--] = e[y--], --d === 0) {
      for (b = S - (g - 1), m = 0; m < g; m++)
        e[b + m] = o[m];
      return;
    }
    if (g === 1) {
      for (S -= d, y -= d, w = S + 1, b = y + 1, m = d - 1; m >= 0; m--)
        e[w + m] = e[b + m];
      e[S] = o[_];
      return;
    }
    for (var T = r; ; ) {
      var x = 0, D = 0, C = !1;
      do
        if (t(o[_], e[y]) < 0) {
          if (e[S--] = e[y--], x++, D = 0, --d === 0) {
            C = !0;
            break;
          }
        } else if (e[S--] = o[_--], D++, x = 0, --g === 1) {
          C = !0;
          break;
        }
      while ((x | D) < T);
      if (C)
        break;
      do {
        if (x = d - of(o[_], e, v, d, d - 1, t), x !== 0) {
          for (S -= x, y -= x, d -= x, w = S + 1, b = y + 1, m = x - 1; m >= 0; m--)
            e[w + m] = e[b + m];
          if (d === 0) {
            C = !0;
            break;
          }
        }
        if (e[S--] = o[_--], --g === 1) {
          C = !0;
          break;
        }
        if (D = g - af(e[y], o, 0, g, g - 1, t), D !== 0) {
          for (S -= D, _ -= D, g -= D, w = S + 1, b = _ + 1, m = 0; m < D; m++)
            e[w + m] = o[b + m];
          if (g <= 1) {
            C = !0;
            break;
          }
        }
        if (e[S--] = e[y--], --d === 0) {
          C = !0;
          break;
        }
        T--;
      } while (x >= oa || D >= oa);
      if (C)
        break;
      T < 0 && (T = 0), T += 2;
    }
    if (r = T, r < 1 && (r = 1), g === 1) {
      for (S -= d, y -= d, w = S + 1, b = y + 1, m = d - 1; m >= 0; m--)
        e[w + m] = e[b + m];
      e[S] = o[_];
    } else {
      if (g === 0)
        throw new Error();
      for (b = S - (g - 1), m = 0; m < g; m++)
        e[b + m] = o[m];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Ps(e, t, r, n) {
  r || (r = 0), n || (n = e.length);
  var i = n - r;
  if (!(i < 2)) {
    var a = 0;
    if (i < $S) {
      a = xg(e, r, n, t), Cg(e, r, n, r + a, t);
      return;
    }
    var o = RP(e, t), s = PP(i);
    do {
      if (a = xg(e, r, n, t), a < s) {
        var u = i;
        u > s && (u = s), Cg(e, r, r + u, r + a, t), a = u;
      }
      o.pushRun(r, a), o.mergeRuns(), i -= a, r += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var Dg = !1;
function sf() {
  Dg || (Dg = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Ag(e, t) {
  return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel;
}
var OP = function() {
  function e() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Ag;
  }
  return e.prototype.traverse = function(t, r) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(t, r);
  }, e.prototype.getDisplayList = function(t, r) {
    r = r || !1;
    var n = this._displayList;
    return (t || !n.length) && this.updateDisplayList(r), n;
  }, e.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var r = this._roots, n = this._displayList, i = 0, a = r.length; i < a; i++)
      this._updateAndAddDisplayable(r[i], null, t);
    n.length = this._displayListLen, Ps(n, Ag);
  }, e.prototype._updateAndAddDisplayable = function(t, r, n) {
    if (!(t.ignore && !n)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var i = t.getClipPath(), a = r && r.length, o = 0, s = t.__clipPaths;
      if (!t.ignoreClip && (a || i)) {
        if (s || (s = t.__clipPaths = []), a)
          for (var u = 0; u < r.length; u++)
            s[o++] = r[u];
        for (var l = i, f = t; l; )
          l.parent = f, l.updateTransform(), s[o++] = l, f = l, l = l.getClipPath();
      }
      if (s && (s.length = o), t.childrenRef) {
        for (var h = t.childrenRef(), c = 0; c < h.length; c++) {
          var v = h[c];
          t.__dirty && (v.__dirty |= ue), this._updateAndAddDisplayable(v, s, n);
        }
        t.__dirty = 0;
      } else {
        var d = t;
        isNaN(d.z) && (sf(), d.z = 0), isNaN(d.z2) && (sf(), d.z2 = 0), isNaN(d.zlevel) && (sf(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var p = t.getDecalElement && t.getDecalElement();
      p && this._updateAndAddDisplayable(p, s, n);
      var g = t.getTextGuideLine();
      g && this._updateAndAddDisplayable(g, s, n);
      var m = t.getTextContent();
      m && this._updateAndAddDisplayable(m, s, n);
    }
  }, e.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, e.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var r = 0, n = t.length; r < n; r++)
        this.delRoot(t[r]);
      return;
    }
    var i = ct(this._roots, t);
    i >= 0 && this._roots.splice(i, 1);
  }, e.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, e.prototype.getRoots = function() {
    return this._roots;
  }, e.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, e;
}(), mu;
mu = nt.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(e) {
  return setTimeout(e, 16);
};
function wi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var kP = function(e) {
  V(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, r = r || {}, n.stage = r.stage || {}, n;
  }
  return t.prototype.addClip = function(r) {
    r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this;
  }, t.prototype.addAnimator = function(r) {
    r.animation = this;
    var n = r.getClip();
    n && this.addClip(n);
  }, t.prototype.removeClip = function(r) {
    if (r.animation) {
      var n = r.prev, i = r.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, r.next = r.prev = r.animation = null;
    }
  }, t.prototype.removeAnimator = function(r) {
    var n = r.getClip();
    n && this.removeClip(n), r.animation = null;
  }, t.prototype.update = function(r) {
    for (var n = wi() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, r || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var r = this;
    this._running = !0;
    function n() {
      r._running && (mu(n), !r._paused && r.update());
    }
    mu(n);
  }, t.prototype.start = function() {
    this._running || (this._time = wi(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = wi(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += wi() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var r = this._head; r; ) {
      var n = r.next;
      r.prev = r.next = r.animation = null, r = n;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(r, n) {
    n = n || {}, this.start();
    var i = new wv(r, n.loop);
    return this.addAnimator(i), i;
  }, t;
}(hr), NP = 300, uf = nt.domSupported, lf = function() {
  var e = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], r = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = Z(e, function(i) {
    var a = i.replace("mouse", "pointer");
    return r.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: e,
    touch: t,
    pointer: n
  };
}(), Mg = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Ig = !1;
function zh(e) {
  var t = e.pointerType;
  return t === "pen" || t === "touch";
}
function BP(e) {
  e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function() {
    e.touching = !1, e.touchTimer = null;
  }, 700);
}
function ff(e) {
  e && (e.zrByTouch = !0);
}
function FP(e, t) {
  return me(e.dom, new zP(e, t), !0);
}
function ZS(e, t) {
  for (var r = t, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== t && r === e.painterRoot); )
    r = r.parentNode;
  return n;
}
var zP = /* @__PURE__ */ function() {
  function e(t, r) {
    this.stopPropagation = Ut, this.stopImmediatePropagation = Ut, this.preventDefault = Ut, this.type = r.type, this.target = this.currentTarget = t.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY;
  }
  return e;
}(), ze = {
  mousedown: function(e) {
    e = me(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e);
  },
  mousemove: function(e) {
    e = me(this.dom, e);
    var t = this.__mayPointerCapture;
    t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e);
  },
  mouseup: function(e) {
    e = me(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e);
  },
  mouseout: function(e) {
    e = me(this.dom, e);
    var t = e.toElement || e.relatedTarget;
    ZS(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e));
  },
  wheel: function(e) {
    Ig = !0, e = me(this.dom, e), this.trigger("mousewheel", e);
  },
  mousewheel: function(e) {
    Ig || (e = me(this.dom, e), this.trigger("mousewheel", e));
  },
  touchstart: function(e) {
    e = me(this.dom, e), ff(e), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(e, "start"), ze.mousemove.call(this, e), ze.mousedown.call(this, e);
  },
  touchmove: function(e) {
    e = me(this.dom, e), ff(e), this.handler.processGesture(e, "change"), ze.mousemove.call(this, e);
  },
  touchend: function(e) {
    e = me(this.dom, e), ff(e), this.handler.processGesture(e, "end"), ze.mouseup.call(this, e), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < NP && ze.click.call(this, e);
  },
  pointerdown: function(e) {
    ze.mousedown.call(this, e);
  },
  pointermove: function(e) {
    zh(e) || ze.mousemove.call(this, e);
  },
  pointerup: function(e) {
    ze.mouseup.call(this, e);
  },
  pointerout: function(e) {
    zh(e) || ze.mouseout.call(this, e);
  }
};
I(["click", "dblclick", "contextmenu"], function(e) {
  ze[e] = function(t) {
    t = me(this.dom, t), this.trigger(e, t);
  };
});
var Gh = {
  pointermove: function(e) {
    zh(e) || Gh.mousemove.call(this, e);
  },
  pointerup: function(e) {
    Gh.mouseup.call(this, e);
  },
  mousemove: function(e) {
    this.trigger("mousemove", e);
  },
  mouseup: function(e) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e));
  }
};
function GP(e, t) {
  var r = t.domHandlers;
  nt.pointerEventsSupported ? I(lf.pointer, function(n) {
    Es(t, n, function(i) {
      r[n].call(e, i);
    });
  }) : (nt.touchEventsSupported && I(lf.touch, function(n) {
    Es(t, n, function(i) {
      r[n].call(e, i), BP(t);
    });
  }), I(lf.mouse, function(n) {
    Es(t, n, function(i) {
      i = Mc(i), t.touching || r[n].call(e, i);
    });
  }));
}
function VP(e, t) {
  nt.pointerEventsSupported ? I(Mg.pointer, r) : nt.touchEventsSupported || I(Mg.mouse, r);
  function r(n) {
    function i(a) {
      a = Mc(a), ZS(e, a.target) || (a = FP(e, a), t.domHandlers[n].call(e, a));
    }
    Es(t, n, i, { capture: !0 });
  }
}
function Es(e, t, r, n) {
  e.mounted[t] = r, e.listenerOpts[t] = n, wP(e.domTarget, t, r, n);
}
function hf(e) {
  var t = e.mounted;
  for (var r in t)
    t.hasOwnProperty(r) && TP(e.domTarget, r, t[r], e.listenerOpts[r]);
  e.mounted = {};
}
var Lg = /* @__PURE__ */ function() {
  function e(t, r) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = r;
  }
  return e;
}(), HP = function(e) {
  V(t, e);
  function t(r, n) {
    var i = e.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = r, i.painterRoot = n, i._localHandlerScope = new Lg(r, ze), uf && (i._globalHandlerScope = new Lg(document, Gh)), GP(i, i._localHandlerScope), i;
  }
  return t.prototype.dispose = function() {
    hf(this._localHandlerScope), uf && hf(this._globalHandlerScope);
  }, t.prototype.setCursor = function(r) {
    this.dom.style && (this.dom.style.cursor = r || "default");
  }, t.prototype.__togglePointerCapture = function(r) {
    if (this.__mayPointerCapture = null, uf && +this.__pointerCapturing ^ +r) {
      this.__pointerCapturing = r;
      var n = this._globalHandlerScope;
      r ? VP(this, n) : hf(n);
    }
  }, t;
}(hr);
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE
*/
var Rs = {}, qS = {};
function UP(e) {
  delete qS[e];
}
function WP(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return Hs(e, 1) < Jf;
  if (e.colorStops) {
    for (var t = e.colorStops, r = 0, n = t.length, i = 0; i < n; i++)
      r += Hs(t[i].color, 1);
    return r /= n, r < Jf;
  }
  return !1;
}
var YP = function() {
  function e(t, r, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n = n || {}, this.dom = r, this.id = t;
    var a = new OP(), o = n.renderer || "canvas";
    Rs[o] || (o = lt(Rs)[0]), n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new Rs[o](r, a, n, t), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !nt.node && !nt.worker && !u ? new HP(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? nt.touchEventsSupported : !!f, c = 44, v;
    h && (v = $(n.pointerSize, c)), this.handler = new YS(a, s, l, s.root, v), this.animation = new kP({
      stage: {
        update: u ? null : function() {
          return i._flush(!1);
        }
      }
    }), u || this.animation.start();
  }
  return e.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, e.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, e.prototype.configLayer = function(t, r) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, r), this.refresh());
  }, e.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = WP(t));
  }, e.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, e.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, e.prototype.isDarkMode = function() {
    return this._darkMode;
  }, e.prototype.refreshImmediately = function(t) {
    this._disposed || this._refresh({
      animUpdate: !t,
      refresh: !0,
      refreshHover: !1
    });
  }, e.prototype._refresh = function(t) {
    t.animUpdate && this.animation.update(!0), this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh({
      refresh: t.refresh,
      refreshHover: t.refreshHover
    }), this._needsRefresh = this._needsRefreshHover = !1;
  }, e.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, e.prototype.flush = function() {
    this._disposed || this._flush(!0);
  }, e.prototype._flush = function(t) {
    var r, n = wi(), i = this._needsRefresh, a = this._needsRefreshHover;
    (i || a) && (r = !0, this._refresh({
      animUpdate: t,
      refresh: i,
      refreshHover: a
    }));
    var o = wi();
    r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: o - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, e.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, e.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, e.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, e.prototype.refreshHoverImmediately = function() {
    this._disposed || this._refresh({
      animUpdate: !1,
      refresh: !1,
      refreshHover: !0
    });
  }, e.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, e.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, e.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, e.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, e.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, e.prototype.findHover = function(t, r) {
    if (!this._disposed)
      return this.handler.findHover(t, r);
  }, e.prototype.on = function(t, r, n) {
    return this._disposed || this.handler.on(t, r, n), this;
  }, e.prototype.off = function(t, r) {
    this._disposed || this.handler.off(t, r);
  }, e.prototype.trigger = function(t, r) {
    this._disposed || this.handler.trigger(t, r);
  }, e.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), r = 0; r < t.length; r++)
        t[r] instanceof Ft && t[r].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, e.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, UP(this.id));
  }, e;
}();
function Pg(e, t) {
  var r = new YP(gy(), e, t);
  return qS[r.id] = r, r;
}
function XP(e, t) {
  Rs[e] = t;
}
var Vh;
function $P(e) {
  if (typeof Vh == "function")
    return Vh(e);
}
function ZP(e) {
  Vh = e;
}
var KS = "";
typeof navigator < "u" && (KS = navigator.platform || "");
var li = "rgba(0, 0, 0, 0.2)", QS = q.color.theme[0], qP = $f(QS, null, null, 0.9);
const jS = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: q.color.theme,
  gradientColor: [qP, QS],
  aria: {
    decal: {
      decals: [{
        color: li,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: li,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: li,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: li,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: li,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: li,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: KS.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var KP = j();
function QP(e, t, r) {
  var n = KP.get(t);
  if (!n)
    return r;
  var i = n(e);
  return i ? r.concat(i) : r;
}
var os, sa, Eg, Rg = "\0_ec_inner", jP = 1, Ic = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.init = function(r, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Ct(a), this._locale = new Ct(o), this._optionManager = s;
    }, t.prototype.setOption = function(r, n, i) {
      var a = Ng(n);
      this._optionManager.setOption(r, i, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(r, n) {
      return this._resetOption(r, Ng(n));
    }, t.prototype._resetOption = function(r, n) {
      var i = !1, a = this._optionManager;
      if (!r || r === "recreate") {
        var o = a.mountOption(r === "recreate");
        !this.option || r === "recreate" ? Eg(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!r || r === "recreate" || r === "media") {
        var u = a.getMediaOption(this);
        u.length && I(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, t.prototype.mergeOption = function(r) {
      this._mergeOption(r, null);
    }, t.prototype._mergeOption = function(r, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = j(), l = n && n.replaceMergeMainTypeMap;
      YC(this), I(r, function(h, c) {
        h != null && (pt.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : i[c] = i[c] == null ? ot(h) : gt(i[c], h, !0));
      }), l && l.each(function(h, c) {
        pt.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), pt.topologicalTravel(s, pt.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = QP(this, h, ee(r[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), p = UT(v, c, d);
        KT(p, h, pt), i[h] = null, a.set(h, null), o.set(h, 0);
        var g = [], m = [], y = 0, _;
        I(p, function(S, b) {
          var w = S.existing, T = S.newOption;
          if (!T)
            w && (w.mergeOption({}, this), w.optionUpdated({}, !1));
          else {
            var x = h === "series", D = pt.getClass(
              h,
              S.keyInfo.subType,
              !x
              // Give a more detailed warn later if series don't exists
            );
            if (!D)
              return;
            if (h === "tooltip") {
              if (_)
                return;
              _ = !0;
            }
            if (w && w.constructor === D)
              w.name = S.keyInfo.name, w.mergeOption(T, this), w.optionUpdated(T, !1);
            else {
              var C = N({
                componentIndex: b
              }, S.keyInfo);
              w = new D(T, this, this, C), N(w, C), S.brandNew && (w.__requireNewView = !0), w.init(T, this, this), w.optionUpdated(null, !0);
            }
          }
          w ? (g.push(w.option), m.push(w), y++) : (g.push(void 0), m.push(void 0));
        }, this), i[h] = g, a.set(h, m), o.set(h, y), h === "series" && os(this);
      }
      this._seriesIndices || os(this);
    }, t.prototype.getOption = function() {
      var r = ot(this.option);
      return I(r, function(n, i) {
        if (pt.hasClass(i)) {
          for (var a = ee(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Ya(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, r[i] = a;
        }
      }), delete r[Rg], r;
    }, t.prototype.setTheme = function(r) {
      this._theme = new Ct(r), this._resetOption("recreate", null);
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(r) {
      this._payload = r;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(r, n) {
      var i = this._componentsMap.get(r);
      if (i) {
        var a = i[n || 0];
        if (a)
          return a;
        if (n == null) {
          for (var o = 0; o < i.length; o++)
            if (i[o])
              return i[o];
        }
      }
    }, t.prototype.queryComponents = function(r) {
      var n = r.mainType;
      if (!n)
        return [];
      var i = r.index, a = r.id, o = r.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var u;
      return i != null ? (u = [], I(ee(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = Og("id", a, s) : o != null ? u = Og("name", o, s) : u = Vt(s, function(l) {
        return !!l;
      }), kg(u, r);
    }, t.prototype.findComponents = function(r) {
      var n = r.query, i = r.mainType, a = s(n), o = a ? this.queryComponents(a) : Vt(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(kg(o, r));
      function s(l) {
        var f = i + "Index", h = i + "Id", c = i + "Name";
        return l && (l[f] != null || l[h] != null || l[c] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[c]
        } : null;
      }
      function u(l) {
        return r.filter ? Vt(l, r.filter) : l;
      }
    }, t.prototype.eachComponent = function(r, n, i) {
      var a = this._componentsMap;
      if (et(r)) {
        var o = n, s = r;
        a.each(function(h, c) {
          for (var v = 0; h && v < h.length; v++) {
            var d = h[v];
            d && s.call(o, c, d, d.componentIndex);
          }
        });
      } else
        for (var u = Y(r) ? a.get(r) : K(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(r) {
      var n = ur(r, null);
      return Vt(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, t.prototype.getSeriesByIndex = function(r) {
      return this._componentsMap.get("series")[r];
    }, t.prototype.getSeriesByType = function(r) {
      return Vt(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === r;
      });
    }, t.prototype.getSeries = function() {
      return Vt(this._componentsMap.get("series"), function(r) {
        return !!r;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(r, n) {
      sa(this), I(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        r.call(n, a, i);
      }, this);
    }, t.prototype.eachRawSeries = function(r, n) {
      I(this._componentsMap.get("series"), function(i) {
        i && r.call(n, i, i.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(r, n, i) {
      sa(this), I(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === r && n.call(i, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(r, n, i) {
      return I(this.getSeriesByType(r), n, i);
    }, t.prototype.isSeriesFiltered = function(r) {
      return sa(this), this._seriesIndicesMap.get(r.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(r, n) {
      sa(this);
      var i = [];
      I(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        r.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = j(i);
    }, t.prototype.restoreData = function(r) {
      os(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        pt.hasClass(o) && i.push(o);
      }), pt.topologicalTravel(i, pt.getAllClassMainTypes(), function(a) {
        I(n.get(a), function(o) {
          o && (a !== "series" || !JP(o, r)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      os = function(r) {
        var n = r._seriesIndices = [];
        I(r._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), r._seriesIndicesMap = j(n);
      }, sa = function(r) {
      }, Eg = function(r, n) {
        r.option = {}, r.option[Rg] = jP, r._componentsMap = j({
          series: []
        }), r._componentsCount = j();
        var i = n.aria;
        K(i) && i.enabled == null && (i.enabled = !0), t2(n, r._theme.option), gt(n, jS, !1), r._mergeOption(n, null);
      };
    }(), t;
  }(Ct)
);
function JP(e, t) {
  if (t) {
    var r = t.seriesIndex, n = t.seriesId, i = t.seriesName;
    return r != null && e.componentIndex !== r || n != null && e.id !== n || i != null && e.name !== i;
  }
}
function t2(e, t) {
  var r = e.color && !e.colorLayer;
  I(t, function(n, i) {
    i === "colorLayer" && r || i === "color" && e.color || pt.hasClass(i) || (typeof n == "object" ? e[i] = e[i] ? gt(e[i], n, !1) : ot(n) : e[i] == null && (e[i] = n));
  });
}
function Og(e, t, r) {
  if (W(t)) {
    var n = j();
    return I(t, function(a) {
      if (a != null) {
        var o = ur(a, null);
        o != null && n.set(a, !0);
      }
    }), Vt(r, function(a) {
      return a && n.get(a[e]);
    });
  } else {
    var i = ur(t, null);
    return Vt(r, function(a) {
      return a && i != null && a[e] === i;
    });
  }
}
function kg(e, t) {
  return t.hasOwnProperty("subType") ? Vt(e, function(r) {
    return r && r.subType === t.subType;
  }) : e;
}
function Ng(e) {
  var t = j();
  return e && I(ee(e.replaceMerge), function(r) {
    t.set(r, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
fr(Ic, vc);
var e2 = /^(min|max)?(.+)$/, r2 = (
  /** @class */
  function() {
    function e(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return e.prototype.setOption = function(t, r, n) {
      t && (I(ee(t.series), function(o) {
        o && o.data && fe(o.data) && Nf(o.data);
      }), I(ee(t.dataset), function(o) {
        o && o.source && fe(o.source) && Nf(o.source);
      })), t = ot(t);
      var i = this._optionBackup, a = n2(t, r, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, e.prototype.mountOption = function(t) {
      var r = this._optionBackup;
      return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], ot(t ? r.baseOption : this._newBaseOption);
    }, e.prototype.getTimelineOption = function(t) {
      var r, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (r = ot(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return r;
    }, e.prototype.getMediaOption = function(t) {
      var r = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var u = 0, l = i.length; u < l; u++)
        i2(i[u].query, r, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !o2(o, this._currentMediaIndices) && (s = Z(o, function(f) {
        return ot(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, e;
  }()
);
function n2(e, t, r) {
  var n = [], i, a, o = e.baseOption, s = e.timeline, u = e.options, l = e.media, f = !!e.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (e.options = e.media = null), a = e), f && W(l) && I(l, function(v) {
    v && v.option && (v.query ? n.push(v) : i || (i = v));
  }), c(a), I(u, function(v) {
    return c(v);
  }), I(n, function(v) {
    return c(v.option);
  });
  function c(v) {
    I(t, function(d) {
      d(v, r);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: i,
    mediaList: n
  };
}
function i2(e, t, r) {
  var n = {
    width: t,
    height: r,
    aspectratio: t / r
    // lower case for convenience.
  }, i = !0;
  return I(e, function(a, o) {
    var s = o.match(e2);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      a2(n[l], a, u) || (i = !1);
    }
  }), i;
}
function a2(e, t, r) {
  return r === "min" ? e >= t : r === "max" ? e <= t : e === t;
}
function o2(e, t) {
  return e.join(",") === t.join(",");
}
var Be = I, to = K, Bg = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function vf(e) {
  var t = e && e.itemStyle;
  if (t)
    for (var r = 0, n = Bg.length; r < n; r++) {
      var i = Bg[r], a = t.normal, o = t.emphasis;
      a && a[i] && (e[i] = e[i] || {}, e[i].normal ? gt(e[i].normal, a[i]) : e[i].normal = a[i], a[i] = null), o && o[i] && (e[i] = e[i] || {}, e[i].emphasis ? gt(e[i].emphasis, o[i]) : e[i].emphasis = o[i], o[i] = null);
    }
}
function $t(e, t, r) {
  if (e && e[t] && (e[t].normal || e[t].emphasis)) {
    var n = e[t].normal, i = e[t].emphasis;
    n && (r ? (e[t].normal = e[t].emphasis = null, yt(e[t], n)) : e[t] = n), i && (e.emphasis = e.emphasis || {}, e.emphasis[t] = i, i.focus && (e.emphasis.focus = i.focus), i.blurScope && (e.emphasis.blurScope = i.blurScope));
  }
}
function Sa(e) {
  $t(e, "itemStyle"), $t(e, "lineStyle"), $t(e, "areaStyle"), $t(e, "label"), $t(e, "labelLine"), $t(e, "upperLabel"), $t(e, "edgeLabel");
}
function Pt(e, t) {
  var r = to(e) && e[t], n = to(r) && r.textStyle;
  if (n)
    for (var i = 0, a = Gd.length; i < a; i++) {
      var o = Gd[i];
      n.hasOwnProperty(o) && (r[o] = n[o]);
    }
}
function ye(e) {
  e && (Sa(e), Pt(e, "label"), e.emphasis && Pt(e.emphasis, "label"));
}
function s2(e) {
  if (to(e)) {
    vf(e), Sa(e), Pt(e, "label"), Pt(e, "upperLabel"), Pt(e, "edgeLabel"), e.emphasis && (Pt(e.emphasis, "label"), Pt(e.emphasis, "upperLabel"), Pt(e.emphasis, "edgeLabel"));
    var t = e.markPoint;
    t && (vf(t), ye(t));
    var r = e.markLine;
    r && (vf(r), ye(r));
    var n = e.markArea;
    n && ye(n);
    var i = e.data;
    if (e.type === "graph") {
      i = i || e.nodes;
      var a = e.links || e.edges;
      if (a && !fe(a))
        for (var o = 0; o < a.length; o++)
          ye(a[o]);
      I(e.categories, function(l) {
        Sa(l);
      });
    }
    if (i && !fe(i))
      for (var o = 0; o < i.length; o++)
        ye(i[o]);
    if (t = e.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        ye(s[o]);
    if (r = e.markLine, r && r.data)
      for (var u = r.data, o = 0; o < u.length; o++)
        W(u[o]) ? (ye(u[o][0]), ye(u[o][1])) : ye(u[o]);
    e.type === "gauge" ? (Pt(e, "axisLabel"), Pt(e, "title"), Pt(e, "detail")) : e.type === "treemap" ? ($t(e.breadcrumb, "itemStyle"), I(e.levels, function(l) {
      Sa(l);
    })) : e.type === "tree" && Sa(e.leaves);
  }
}
function pr(e) {
  return W(e) ? e : e ? [e] : [];
}
function Fg(e) {
  return (W(e) ? e[0] : e) || {};
}
function u2(e, t) {
  Be(pr(e.series), function(n) {
    to(n) && s2(n);
  });
  var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Be(r, function(n) {
    Be(pr(e[n]), function(i) {
      i && (Pt(i, "axisLabel"), Pt(i.axisPointer, "label"));
    });
  }), Be(pr(e.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    Pt(i, "axisLabel"), Pt(i && i.axisPointer, "label");
  }), Be(pr(e.calendar), function(n) {
    $t(n, "itemStyle"), Pt(n, "dayLabel"), Pt(n, "monthLabel"), Pt(n, "yearLabel");
  }), Be(pr(e.radar), function(n) {
    Pt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap);
  }), Be(pr(e.geo), function(n) {
    to(n) && (ye(n), Be(pr(n.regions), function(i) {
      ye(i);
    }));
  }), Be(pr(e.timeline), function(n) {
    ye(n), $t(n, "label"), $t(n, "itemStyle"), $t(n, "controlStyle", !0);
    var i = n.data;
    W(i) && I(i, function(a) {
      K(a) && ($t(a, "label"), $t(a, "itemStyle"));
    });
  }), Be(pr(e.toolbox), function(n) {
    $t(n, "iconStyle"), Be(n.feature, function(i) {
      $t(i, "iconStyle");
    });
  }), Pt(Fg(e.axisPointer), "label"), Pt(Fg(e.tooltip).axisPointer, "label");
}
function l2(e, t) {
  for (var r = t.split(","), n = e, i = 0; i < r.length && (n = n && n[r[i]], n != null); i++)
    ;
  return n;
}
function f2(e, t, r, n) {
  for (var i = t.split(","), a = e, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = r);
}
function zg(e) {
  e && I(h2, function(t) {
    t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
  });
}
var h2 = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], v2 = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], cf = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function ua(e) {
  var t = e && e.itemStyle;
  if (t)
    for (var r = 0; r < cf.length; r++) {
      var n = cf[r][1], i = cf[r][0];
      t[n] != null && (t[i] = t[n]);
    }
}
function Gg(e) {
  e && e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (e.edgeDistance = e.margin);
}
function Vg(e) {
  e && e.downplay && !e.blur && (e.blur = e.downplay);
}
function c2(e) {
  e && e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus == null && (e.emphasis.focus = "adjacency"));
}
function JS(e, t) {
  if (e)
    for (var r = 0; r < e.length; r++)
      t(e[r]), e[r] && JS(e[r].children, t);
}
function t1(e, t) {
  u2(e, t), e.series = ee(e.series), I(e.series, function(r) {
    if (K(r)) {
      var n = r.type;
      if (n === "line")
        r.clipOverflow != null && (r.clip = r.clipOverflow);
      else if (n === "pie" || n === "gauge") {
        r.clockWise != null && (r.clockwise = r.clockWise), Gg(r.label);
        var i = r.data;
        if (i && !fe(i))
          for (var a = 0; a < i.length; a++)
            Gg(i[a]);
        r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (r.emphasis.scaleSize = r.hoverOffset));
      } else if (n === "gauge") {
        var o = l2(r, "pointer.color");
        o != null && f2(r, "itemStyle.color", o);
      } else if (n === "bar") {
        ua(r), ua(r.backgroundStyle), ua(r.emphasis);
        var i = r.data;
        if (i && !fe(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (ua(i[a]), ua(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = r.highlightPolicy;
        s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s)), Vg(r), JS(r.data, Vg);
      } else n === "graph" || n === "sankey" ? c2(r) : n === "map" && (r.mapType && !r.map && (r.map = r.mapType), r.mapLocation && yt(r, r.mapLocation));
      r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (r.emphasis.scale = r.hoverAnimation)), zg(r);
    }
  }), e.dataRange && (e.visualMap = e.dataRange), I(v2, function(r) {
    var n = e[r];
    n && (W(n) || (n = [n]), I(n, function(i) {
      zg(i);
    }));
  });
}
var d2 = Lv(p2);
function p2(e) {
  var t = j();
  e.eachSeries(function(r) {
    var n = r.get("stack");
    if (n) {
      var i = t.get(n) || t.set(n, []), a = r.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: r
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.push(o);
    }
  }), t.each(function(r) {
    if (r.length !== 0) {
      var n = r[0].seriesModel, i = n.get("stackOrder") || "seriesAsc";
      i === "seriesDesc" && r.reverse(), I(r, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? r[o - 1].seriesModel : null);
      }), g2(r);
    }
  });
}
function g2(e) {
  I(e, function(t, r) {
    var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var c = o.get(t.stackedDimension, h);
      if (isNaN(c))
        return i;
      var v, d;
      s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
      for (var p = NaN, g = r - 1; g >= 0; g--) {
        var m = e[g];
        if (s || (d = m.data.rawIndexOf(m.stackedByDimension, v)), d >= 0) {
          var y = m.data.getByRawIndex(m.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && c >= 0 && y > 0 || u === "samesign" && c <= 0 && y < 0) {
            c = kT(c, y), p = y;
            break;
          }
        }
      }
      return n[0] = c, n[1] = p, n;
    });
  });
}
var We = (
  /** @class */
  function() {
    function e() {
      this.group = new Ft(), this.uid = Yu("viewComponent");
    }
    return e.prototype.init = function(t, r) {
    }, e.prototype.render = function(t, r, n, i) {
    }, e.prototype.dispose = function(t, r) {
    }, e.prototype.updateView = function(t, r, n, i) {
    }, e.prototype.updateLayout = function(t, r, n, i) {
    }, e.prototype.updateVisual = function(t, r, n, i) {
    }, e.prototype.toggleBlurSeries = function(t, r, n) {
    }, e.prototype.eachRendered = function(t) {
      var r = this.group;
      r && r.traverse(t);
    }, e;
  }()
);
pv(We);
Mu(We);
var Hg = _t(), Ug = {
  itemStyle: Ga(W0, !0),
  lineStyle: Ga(U0, !0)
}, m2 = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function e1(e, t) {
  var r = e.visualStyleMapper || Ug[t];
  return r || (console.warn("Unknown style type '" + t + "'."), Ug.itemStyle);
}
function r1(e, t) {
  var r = e.visualDrawType || m2[t];
  return r || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var y2 = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    var r = e.getData(), n = e.visualStyleAccessPath || "itemStyle", i = e.getModel(n), a = e1(e, n), o = a(i), s = i.getShallow("decal");
    s && (r.setVisual("decal", s), s.dirty = !0);
    var u = r1(e, n), l = o[u], f = et(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = e.getColorFromPalette(
        // TODO series count changed.
        e.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = c, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || et(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || et(o.stroke) ? c : o.stroke;
    }
    if (r.setVisual("style", o), r.setVisual("drawType", u), !t.isSeriesFiltered(e) && f)
      return r.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var p = e.getDataParams(d), g = N({}, o);
          g[u] = f(p), v.setItemVisual(d, "style", g);
        }
      };
  }
}, la = new Ct(), _2 = {
  createOnAllSeries: !0,
  reset: function(e, t) {
    if (!e.ignoreStyleOnData) {
      var r = e.getData(), n = e.visualStyleAccessPath || "itemStyle", i = e1(e, n), a = r.getVisual("drawType");
      return {
        dataEach: r.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            la.option = u[n];
            var l = i(la), f = o.ensureUniqueItemVisual(s, "style");
            N(f, l), la.option.decal && (o.setItemVisual(s, "decal", la.option.decal), la.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, S2 = {
  performRawSeries: !0,
  overallReset: function(e) {
    var t = j();
    e.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.type + "-" + r.getColorBy();
        Hg(r).scope = t.get(n) || t.set(n, {});
      }
    }), e.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.getRawData(), i = {}, a = r.getData(), o = Hg(r).scope, s = r.visualStyleAccessPath || "itemStyle", u = r1(r, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          i[f] = l;
        }), n.each(function(l) {
          var f = i[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var c = a.ensureUniqueItemVisual(f, "style"), v = n.getName(l) || l + "", d = n.count();
            c[u] = r.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, ss = Math.PI;
function b2(e, t) {
  t = t || {}, yt(t, {
    text: "loading",
    textColor: q.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: q.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var r = new Ft(), n = new Lt({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  r.add(n);
  var i = new Wt({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new Lt({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  r.add(a);
  var o;
  return t.showSpinner && (o = new zu({
    shape: {
      startAngle: -ss / 2,
      endAngle: -ss / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: ss * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: ss * 3 / 2
  }).delay(300).start("circularInOut"), r.add(o)), r.resize = function() {
    var s = i.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (e.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = e.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: e.getWidth(),
      height: e.getHeight()
    });
  }, r.resize(), r;
}
var n1 = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._stageTaskMap = j(), this.ecInstance = t, this.api = r, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return e.prototype.restoreData = function(t, r) {
      t.restoreData(r), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, e.prototype.getPerformArgs = function(t, r) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !r && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, e.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, e.prototype.updateStreamModes = function(t, r) {
      var n = this._pipelineMap.get(t.uid), i = t.__preparePipelineContext ? t.__preparePipelineContext(r, n) : u0(t, r, n);
      t.pipelineContext = n.context = i;
    }, e.prototype.restorePipelines = function(t, r) {
      var n = this, i = n._pipelineMap = j();
      r.eachSeries(function(a) {
        var o = t.painter.type === "canvas" && a.getProgressive(), s = a.uid;
        i.set(s, {
          id: s,
          head: null,
          tail: null,
          threshold: a.getProgressiveThreshold(),
          progressiveEnabled: o && !(a.preventIncremental && a.preventIncremental()),
          blockIndex: -1,
          step: Math.round(o || 700),
          count: 0
        }), n._pipe(a, a.dataTask);
      });
    }, e.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, r = this.api.getModel(), n = this.api;
      I(this._allHandlers, function(i) {
        var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
        Ve(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, r, n), i.overallReset && this._createOverallStageTask(i, a, r, n);
      }, this);
    }, e.prototype.prepareView = function(t, r, n, i) {
      var a = t.renderTask, o = a.context;
      o.model = r, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(r, a);
    }, e.prototype.performDataProcessorTasks = function(t, r) {
      this._performStageTasks(this._dataProcessorHandlers, t, r, {
        block: !0
      });
    }, e.prototype.performVisualTasks = function(t, r, n) {
      this._performStageTasks(this._visualHandlers, t, r, n);
    }, e.prototype._performStageTasks = function(t, r, n, i) {
      i = i || {};
      var a = !1, o = this;
      I(t, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, c = f.overallTask;
          if (c) {
            var v, d = c.agentStubMap;
            d.each(function(g) {
              s(i, g) && (g.dirty(), v = !0);
            }), v && c.dirty(), o.updatePayload(c, n);
            var p = o.getPerformArgs(c, i.block);
            d.each(function(g) {
              g.perform(p);
            }), c.perform(p) && (a = !0);
          } else h && h.each(function(g, m) {
            s(i, g) && g.dirty();
            var y = o.getPerformArgs(g, i.block);
            y.skip = !u.performRawSeries && r.isSeriesFiltered(g.context.model), o.updatePayload(g, n), g.perform(y) && (a = !0);
          });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, e.prototype.performSeriesTasks = function(t) {
      var r;
      t.eachSeries(function(n) {
        r = n.dataTask.perform() || r;
      }), this.unfinished = r || this.unfinished;
    }, e.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var r = t.tail;
        do {
          if (r.__block) {
            t.blockIndex = r.__idxInPipeline;
            break;
          }
          r = r.getUpstream();
        } while (r);
      });
    }, e.prototype.updatePayload = function(t, r) {
      r !== "remain" && (t.context.payload = r);
    }, e.prototype._createSeriesStageTask = function(t, r, n, i) {
      var a = this, o = r.seriesTaskMap, s = r.seriesTaskMap = j(), u = t.seriesType, l = t.getTargetSeries;
      t.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(h) {
        var c = h.uid, v = s.set(c, o && o.get(c) || Oa({
          plan: D2,
          reset: A2,
          count: I2
        }));
        v.context = {
          model: h,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, v);
      }
    }, e.prototype._createOverallStageTask = function(t, r, n, i) {
      var a = this, o = r.overallTask = r.overallTask || Oa({
        reset: w2
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = j(), l = t.seriesType, f = t.getTargetSeries, h = t.dirtyOnOverallProgress, c = !1, v = "";
      Ve(!t.createOnAllSeries, v), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : I(n.getSeries(), d);
      function d(p) {
        var g = p.uid, m = u.set(g, s && s.get(g) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (c = !0, Oa({
          reset: T2,
          onDirty: C2
        })));
        m.context = {
          model: p,
          dirtyOnOverallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, m.agent = o, m.__block = h, a._pipe(p, m);
      }
      c && o.dirty();
    }, e.prototype._pipe = function(t, r) {
      var n = t.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = r), i.tail && i.tail.pipe(r), i.tail = r, r.__idxInPipeline = i.count++, r.__pipeline = i;
    }, e.wrapStageHandler = function(t, r) {
      return et(t) && (t = {
        overallReset: t,
        seriesType: L2(t)
      }), t.uid = Yu("stageHandler"), r && (t.visualType = r), t;
    }, e;
  }()
);
function w2(e) {
  e.overallReset(e.ecModel, e.api, e.payload);
}
function T2(e) {
  return e.dirtyOnOverallProgress && x2;
}
function x2() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function C2() {
  this.agent && this.agent.dirty();
}
function D2(e) {
  return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null;
}
function A2(e) {
  e.useClearVisual && e.data.clearAllVisual();
  var t = e.resetDefines = ee(e.reset(e.model, e.ecModel, e.api, e.payload));
  return t.length > 1 ? Z(t, function(r, n) {
    return i1(n);
  }) : M2;
}
var M2 = i1(0);
function i1(e) {
  return function(t, r) {
    var n = r.data, i = r.resetDefines[e];
    if (i && i.dataEach)
      for (var a = t.start; a < t.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function I2(e) {
  return e.data.count();
}
function L2(e) {
  yu = null;
  try {
    e(eo, a1);
  } catch {
  }
  return yu;
}
var eo = {}, a1 = {}, yu;
o1(eo, Ic);
o1(a1, v0);
eo.eachSeriesByType = eo.eachRawSeriesByType = function(e) {
  yu = e;
};
eo.eachComponent = function(e) {
  e.mainType === "series" && e.subType && (yu = e.subType);
};
function o1(e, t) {
  for (var r in t.prototype)
    e[r] = Ut;
}
var z = q.darkColor, Wg = z.background, fa = function() {
  return {
    axisLine: {
      lineStyle: {
        color: z.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: z.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [z.backgroundTint, z.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: z.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: z.axisLabel
    },
    axisName: {}
  };
}, Yg = {
  label: {
    color: z.secondary
  },
  itemStyle: {
    borderColor: z.borderTint
  },
  dividerLineStyle: {
    color: z.border
  }
}, s1 = {
  darkMode: !0,
  color: z.theme,
  backgroundColor: Wg,
  axisPointer: {
    lineStyle: {
      color: z.border
    },
    crossStyle: {
      color: z.borderShade
    },
    label: {
      color: z.tertiary
    }
  },
  legend: {
    textStyle: {
      color: z.secondary
    },
    pageTextStyle: {
      color: z.tertiary
    }
  },
  textStyle: {
    color: z.secondary
  },
  title: {
    textStyle: {
      color: z.primary
    },
    subtextStyle: {
      color: z.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: z.accent50
    },
    feature: {
      dataView: {
        backgroundColor: Wg,
        textColor: z.primary,
        textareaColor: z.background,
        textareaBorderColor: z.border,
        buttonColor: z.accent50,
        buttonTextColor: z.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: z.neutral20,
    defaultBorderColor: z.border,
    textStyle: {
      color: z.tertiary
    }
  },
  dataZoom: {
    borderColor: z.accent10,
    textStyle: {
      color: z.tertiary
    },
    brushStyle: {
      color: z.backgroundTint
    },
    handleStyle: {
      color: z.neutral00,
      borderColor: z.accent20
    },
    moveHandleStyle: {
      color: z.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: z.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: z.accent30
      },
      areaStyle: {
        color: z.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: z.accent50
      },
      areaStyle: {
        color: z.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: z.secondary
    },
    handleStyle: {
      borderColor: z.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: z.accent10
    },
    label: {
      color: z.tertiary
    },
    controlStyle: {
      color: z.accent30,
      borderColor: z.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: z.neutral00,
      borderColor: z.neutral20
    },
    dayLabel: {
      color: z.tertiary
    },
    monthLabel: {
      color: z.secondary
    },
    yearLabel: {
      color: z.secondary
    }
  },
  matrix: {
    x: Yg,
    y: Yg,
    backgroundColor: {
      borderColor: z.axisLine
    },
    body: {
      itemStyle: {
        borderColor: z.borderTint
      }
    }
  },
  timeAxis: fa(),
  logAxis: fa(),
  valueAxis: fa(),
  categoryAxis: fa(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: z.theme
  },
  gauge: {
    title: {
      color: z.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, z.neutral05]]
      }
    },
    axisLabel: {
      color: z.axisLabel
    },
    detail: {
      color: z.primary
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  },
  funnel: {
    itemStyle: {
      borderColor: z.background
    }
  },
  radar: function() {
    var e = fa();
    return e.axisName = {
      color: z.axisLabel
    }, e.axisLine.lineStyle.color = z.neutral20, e;
  }(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: z.neutral20,
        textStyle: {
          color: z.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: z.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: z.background
    }
  },
  map: {
    itemStyle: {
      borderColor: z.border,
      areaColor: z.neutral10
    },
    label: {
      color: z.tertiary
    },
    emphasis: {
      label: {
        color: z.primary
      },
      itemStyle: {
        areaColor: z.highlight
      }
    },
    select: {
      label: {
        color: z.primary
      },
      itemStyle: {
        areaColor: z.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: z.border,
      areaColor: z.neutral10
    },
    emphasis: {
      label: {
        color: z.primary
      },
      itemStyle: {
        areaColor: z.highlight
      }
    },
    select: {
      label: {
        color: z.primary
      },
      itemStyle: {
        color: z.highlight
      }
    }
  }
};
s1.categoryAxis.splitLine.show = !1;
var P2 = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.normalizeQuery = function(t) {
      var r = {}, n = {}, i = {};
      if (Y(t)) {
        var a = ir(t);
        r.mainType = a.main || null, r.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        I(t, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var c = o[h], v = l.lastIndexOf(c);
            if (v > 0 && v === l.length - c.length) {
              var d = l.slice(0, v);
              d !== "data" && (r.mainType = d, r[c.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (i[l] = u);
        });
      }
      return {
        cptQuery: r,
        dataQuery: n,
        otherQuery: i
      };
    }, e.prototype.filter = function(t, r) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var u = r.cptQuery, l = r.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, r.otherQuery, i, a));
      function f(h, c, v, d) {
        return h[v] == null || c[d || v] === h[v];
      }
    }, e.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, e;
  }()
), Hh = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Xg = Hh.concat(["symbolKeepAspect"]), E2 = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(e, t) {
    var r = e.getData();
    if (e.legendIcon && r.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < Hh.length; o++) {
      var s = Hh[o], u = e.get(s);
      et(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || e.defaultSymbol, r.setVisual(N({
      legendIcon: e.legendIcon || n.symbol,
      symbolKeepAspect: e.get("symbolKeepAspect")
    }, n)), t.isSeriesFiltered(e))
      return;
    var l = lt(i);
    function f(h, c) {
      for (var v = e.getRawValue(c), d = e.getDataParams(c), p = 0; p < l.length; p++) {
        var g = l[p];
        h.setItemVisual(c, g, i[g](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, R2 = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(e, t) {
    if (!e.hasSymbolVisual || t.isSeriesFiltered(e))
      return;
    var r = e.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < Xg.length; s++) {
        var u = Xg[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: r.hasItemOption ? n : null
    };
  }
};
function O2(e, t, r) {
  switch (r) {
    case "color":
      var n = e.getItemVisual(t, "style");
      return n[e.getVisual("drawType")];
    case "opacity":
      return e.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return e.getItemVisual(t, r);
  }
}
function k2(e, t) {
  switch (t) {
    case "color":
      var r = e.getVisual("style");
      return r[e.getVisual("drawType")];
    case "opacity":
      return e.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return e.getVisual(t);
  }
}
function ba(e, t, r) {
  for (var n; e && !(t(e) && (n = e, r)); )
    e = e.__hostTarget || e.parent;
  return n;
}
var ge = new hr(), u1 = {};
function N2(e, t) {
  u1[e] = t;
}
function B2(e) {
  return u1[e];
}
var F2 = Math.round(Math.random() * 9), z2 = typeof Object.defineProperty == "function", G2 = function() {
  function e() {
    this._id = "__ec_inner_" + F2++;
  }
  return e.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, e.prototype.set = function(t, r) {
    var n = this._guard(t);
    return z2 ? Object.defineProperty(n, this._id, {
      value: r,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = r, this;
  }, e.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, e.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, e.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, e;
}();
function On(e) {
  return isFinite(e);
}
function V2(e, t, r) {
  var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), n = On(n) ? n : 0, i = On(i) ? i : 1, a = On(a) ? a : 0, o = On(o) ? o : 0;
  var s = e.createLinearGradient(n, a, i, o);
  return s;
}
function H2(e, t, r) {
  var n = r.width, i = r.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * n + r.x, s = s * i + r.y, u = u * a), o = On(o) ? o : 0.5, s = On(s) ? s : 0.5, u = u >= 0 && On(u) ? u : 0.5;
  var l = e.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Uh(e, t, r) {
  for (var n = t.type === "radial" ? H2(e, t, r) : V2(e, t, r), i = t.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function U2(e, t) {
  if (e === t || !e && !t)
    return !1;
  if (!e || !t || e.length !== t.length)
    return !0;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}
function us(e) {
  return parseInt(e, 10);
}
function Ti(e, t, r) {
  var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (r[n] != null && r[n] !== "auto")
    return parseFloat(r[n]);
  var s = document.defaultView.getComputedStyle(e);
  return (e[i] || us(s[n]) || us(e.style[n])) - (us(s[a]) || 0) - (us(s[o]) || 0) || 0;
}
function W2(e, t) {
  return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : mt(e) ? [e] : W(e) ? e : null;
}
function Lc(e) {
  var t = e.style, r = t.lineDash && t.lineWidth > 0 && W2(t.lineDash, t.lineWidth), n = t.lineDashOffset;
  if (r) {
    var i = t.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
    i && i !== 1 && (r = Z(r, function(a) {
      return a / i;
    }), n /= i);
  }
  return [r, n];
}
var Y2 = new Zr(!0);
function _u(e) {
  var t = e.stroke;
  return !(t == null || t === "none" || !(e.lineWidth > 0));
}
function $g(e) {
  return typeof e == "string" && e !== "none";
}
function Su(e) {
  var t = e.fill;
  return t != null && t !== "none";
}
function Zg(e, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var r = e.globalAlpha;
    e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = r;
  } else
    e.fill();
}
function qg(e, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var r = e.globalAlpha;
    e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = r;
  } else
    e.stroke();
}
function Wh(e, t, r) {
  var n = gv(t.image, t.__image, r);
  if (Iu(n)) {
    var i = e.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * gs), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function X2(e, t, r, n, i) {
  var a, o = _u(r), s = Su(r), u = r.strokePercent, l = u < 1, f = !t.path;
  (!t.silent || l) && f && t.createPathProxy();
  var h = t.path || Y2, c = t.__dirty;
  if (!n) {
    var v = r.fill, d = r.stroke, p = s && !!v.colorStops, g = o && !!d.colorStops, m = s && !!v.image, y = o && !!d.image, _ = void 0, S = void 0, b = void 0, w = void 0, T = void 0;
    (p || g) && (T = t.getBoundingRect()), p && (_ = c ? Uh(e, v, T) : t.__canvasFillGradient, t.__canvasFillGradient = _), g && (S = c ? Uh(e, d, T) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = S), m && (b = c || !t.__canvasFillPattern ? Wh(e, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = b), y && (w = c || !t.__canvasStrokePattern ? Wh(e, d, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), p ? e.fillStyle = _ : m && (b ? e.fillStyle = b : s = !1), g ? e.strokeStyle = S : y && (w ? e.strokeStyle = w : o = !1);
  }
  var x = t.getGlobalScale();
  h.setScale(x[0], x[1], t.segmentIgnoreThreshold);
  var D, C;
  e.setLineDash && r.lineDash && (a = Lc(t), D = a[0], C = a[1]);
  var A = !0;
  (f || c & di) && (h.setDPR(e.dpr), l ? h.setContext(null) : (h.setContext(e), A = !1), h.reset(), t.buildPath(h, t.shape, n), h.toStatic(), t.pathUpdated()), A && h.rebuildPath(e, l ? u : 1), D && (e.setLineDash(D), e.lineDashOffset = C), n ? (i.batchFill = s, i.batchStroke = o) : r.strokeFirst ? (o && qg(e, r), s && Zg(e, r)) : (s && Zg(e, r), o && qg(e, r)), D && e.setLineDash([]);
}
function $2(e, t, r) {
  var n = t.__image = gv(r.image, t.__image, t, t.onload);
  if (!(!n || !Iu(n))) {
    var i = r.x || 0, a = r.y || 0, o = t.getWidth(), s = t.getHeight(), u = n.width / n.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), r.sWidth && r.sHeight) {
      var l = r.sx || 0, f = r.sy || 0;
      e.drawImage(n, l, f, r.sWidth, r.sHeight, i, a, o, s);
    } else if (r.sx && r.sy) {
      var l = r.sx, f = r.sy, h = o - l, c = s - f;
      e.drawImage(n, l, f, h, c, i, a, o, s);
    } else
      e.drawImage(n, i, a, o, s);
  }
}
function Z2(e, t, r) {
  var n, i = r.text;
  if (i != null && (i += ""), i) {
    e.font = r.font || br, e.textAlign = r.textAlign, e.textBaseline = r.textBaseline;
    var a = void 0, o = void 0;
    e.setLineDash && r.lineDash && (n = Lc(t), a = n[0], o = n[1]), a && (e.setLineDash(a), e.lineDashOffset = o), r.strokeFirst ? (_u(r) && e.strokeText(i, r.x, r.y), Su(r) && e.fillText(i, r.x, r.y)) : (Su(r) && e.fillText(i, r.x, r.y), _u(r) && e.strokeText(i, r.x, r.y)), a && e.setLineDash([]);
  }
}
var Kg = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Qg = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function l1(e, t, r, n, i) {
  var a = !1;
  if (!n && (r = r || {}, t === r))
    return !1;
  if (n || t.opacity !== r.opacity) {
    Jt(e, i), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    e.globalAlpha = isNaN(o) ? zn.opacity : o;
  }
  (n || t.blend !== r.blend) && (a || (Jt(e, i), a = !0), e.globalCompositeOperation = t.blend || zn.blend);
  for (var s = 0; s < Kg.length; s++) {
    var u = Kg[s];
    (n || t[u] !== r[u]) && (a || (Jt(e, i), a = !0), e[u] = e.dpr * (t[u] || 0));
  }
  return (n || t.shadowColor !== r.shadowColor) && (a || (Jt(e, i), a = !0), e.shadowColor = t.shadowColor || zn.shadowColor), a;
}
function jg(e, t, r, n, i) {
  var a = t.style, o = n ? null : r && r.style || {};
  if (a === o)
    return !1;
  var s = l1(e, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (Jt(e, i), s = !0), $g(a.fill) && (e.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Jt(e, i), s = !0), $g(a.stroke) && (e.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Jt(e, i), s = !0), e.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    e.lineWidth !== l && (s || (Jt(e, i), s = !0), e.lineWidth = l);
  }
  for (var f = 0; f < Qg.length; f++) {
    var h = Qg[f], c = h[0];
    (n || a[c] !== o[c]) && (s || (Jt(e, i), s = !0), e[c] = a[c] || h[1]);
  }
  return s;
}
function q2(e, t, r, n, i) {
  return l1(e, t.style, r && r.style, n, i);
}
function f1(e, t) {
  var r = t.transform, n = e.dpr || 1;
  r ? e.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : e.setTransform(n, 0, 0, n, 0, 0);
}
function K2(e, t, r) {
  for (var n = !1, i = 0; i < e.length; i++) {
    var a = e[i];
    n = n || a.isZeroArea(), f1(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  r.allClipped = n;
}
function Q2(e, t) {
  return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t);
}
var Jg = 1, tm = 2, em = 3, rm = 4;
function j2(e) {
  var t = Su(e), r = _u(e);
  return !(e.lineDash || !(+t ^ +r) || t && typeof e.fill != "string" || r && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1);
}
function Jt(e, t) {
  t.batchFill && (t.batchFill = !1, e.fill()), t.batchStroke && (t.batchStroke = !1, e.stroke());
}
function h1(e, t) {
  var r = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  kn(e, t, r), Li(e, r);
}
function kn(e, t, r) {
  var n = t.transform;
  if (!t.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
    t.__dirty &= ~ue, t.__isRendered = !1;
    return;
  }
  var i = t.__clipPaths, a = r.prevElClipPaths, o = t.style, s = !1, u = !1;
  if ((!a || U2(i, a)) && (a && (Jt(e, r), e.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), i && i.length && (Jt(e, r), e.save(), K2(i, e, r), s = !0, r.prevElClipPaths = i)), r.allClipped) {
    t.__dirty &= ~ue, t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(r.beforeBrushParam), t.innerBeforeBrush();
  var l = r.prevEl;
  l || (u = s = !0);
  var f = t instanceof dt && t.autoBatch && j2(o);
  s || Q2(n, l.transform) ? (Jt(e, r), f1(e, t)) : f || Jt(e, r), t instanceof dt ? (r.lastDrawType !== Jg && (u = !0, r.lastDrawType = Jg), jg(e, t, l, u, r), (!f || !r.batchFill && !r.batchStroke) && e.beginPath(), X2(e, t, o, f, r)) : t instanceof Ua ? (r.lastDrawType !== em && (u = !0, r.lastDrawType = em), jg(e, t, l, u, r), Z2(e, t, o)) : t instanceof vr ? (r.lastDrawType !== tm && (u = !0, r.lastDrawType = tm), q2(e, t, l, u, r), $2(e, t, o)) : t.getTemporalDisplayables && (r.lastDrawType !== rm && (u = !0, r.lastDrawType = rm), J2(e, t, r)), t.innerAfterBrush(), t.afterBrush && (f && Jt(e, r), t.afterBrush()), r.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function Li(e, t) {
  Jt(e, t), t.prevElClipPaths && e.restore();
}
function J2(e, t, r) {
  var n = t.getDisplayables(), i = t.getTemporalDisplayables();
  e.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: r.viewWidth,
    viewHeight: r.viewHeight,
    inHover: r.inHover,
    beforeBrushParam: {}
  }, o, s;
  for (o = t.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), kn(e, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  Li(e, a);
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), kn(e, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  Li(e, a), t.clearTemporalDisplayables(), t.notClear = !0, e.restore();
}
var df = new G2(), nm = new Pi(100), im = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Yh(e, t) {
  if (e === "none")
    return null;
  var r = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
  e.dirty && df.delete(e);
  var a = df.get(e);
  if (a)
    return a;
  var o = yt(e, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / r, df.set(e, s), e.dirty = !1, s;
  function u(l) {
    for (var f = [r], h = !0, c = 0; c < im.length; ++c) {
      var v = o[im[c]];
      if (v != null && !W(v) && !Y(v) && !mt(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var p = nm.get(d);
      p && (i ? l.svgElement = p : l.image = p);
    }
    var g = c1(o.dashArrayX), m = tE(o.dashArrayY), y = v1(o.symbol), _ = eE(g), S = d1(m), b = !i && ve.createCanvas(), w = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, T = D(), x;
    b && (b.width = T.width * r, b.height = T.height * r, x = b.getContext("2d")), C(), h && nm.put(d, b || w), l.image = b, l.svgElement = w, l.svgWidth = T.width, l.svgHeight = T.height;
    function D() {
      for (var A = 1, L = 0, M = _.length; L < M; ++L)
        A = Fd(A, _[L]);
      for (var P = 1, L = 0, M = y.length; L < M; ++L)
        P = Fd(P, y[L].length);
      A *= P;
      var E = S * _.length * y.length;
      return {
        width: Math.max(1, Math.min(A, o.maxTileWidth)),
        height: Math.max(1, Math.min(E, o.maxTileHeight))
      };
    }
    function C() {
      x && (x.clearRect(0, 0, b.width, b.height), o.backgroundColor && (x.fillStyle = o.backgroundColor, x.fillRect(0, 0, b.width, b.height)));
      for (var A = 0, L = 0; L < m.length; ++L)
        A += m[L];
      if (A <= 0)
        return;
      for (var M = -S, P = 0, E = 0, R = 0; M < T.height; ) {
        if (P % 2 === 0) {
          for (var k = E / 2 % y.length, O = 0, B = 0, F = 0; O < T.width * 2; ) {
            for (var G = 0, L = 0; L < g[R].length; ++L)
              G += g[R][L];
            if (G <= 0)
              break;
            if (B % 2 === 0) {
              var U = (1 - o.symbolSize) * 0.5, X = O + g[R][B] * U, H = M + m[P] * U, J = g[R][B] * o.symbolSize, it = m[P] * o.symbolSize, Dt = F / 2 % y[k].length;
              xt(X, H, J, it, y[k][Dt]);
            }
            O += g[R][B], ++F, ++B, B === g[R].length && (B = 0);
          }
          ++R, R === g.length && (R = 0);
        }
        M += m[P], ++E, ++P, P === m.length && (P = 0);
      }
      function xt(st, bt, Q, at, ne) {
        var At = i ? 1 : r, Oe = Bi(ne, st * At, bt * At, Q * At, at * At, o.color, o.symbolKeepAspect);
        if (i) {
          var ie = n.painter.renderOneToVNode(Oe);
          ie && w.children.push(ie);
        } else
          h1(x, Oe);
      }
    }
  }
}
function v1(e) {
  if (!e || e.length === 0)
    return [["rect"]];
  if (Y(e))
    return [[e]];
  for (var t = !0, r = 0; r < e.length; ++r)
    if (!Y(e[r])) {
      t = !1;
      break;
    }
  if (t)
    return v1([e]);
  for (var n = [], r = 0; r < e.length; ++r)
    Y(e[r]) ? n.push([e[r]]) : n.push(e[r]);
  return n;
}
function c1(e) {
  if (!e || e.length === 0)
    return [[0, 0]];
  if (mt(e)) {
    var t = Math.ceil(e);
    return [[t, t]];
  }
  for (var r = !0, n = 0; n < e.length; ++n)
    if (!mt(e[n])) {
      r = !1;
      break;
    }
  if (r)
    return c1([e]);
  for (var i = [], n = 0; n < e.length; ++n)
    if (mt(e[n])) {
      var t = Math.ceil(e[n]);
      i.push([t, t]);
    } else {
      var t = Z(e[n], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function tE(e) {
  if (!e || typeof e == "object" && e.length === 0)
    return [0, 0];
  if (mt(e)) {
    var t = Math.ceil(e);
    return [t, t];
  }
  var r = Z(e, function(n) {
    return Math.ceil(n);
  });
  return e.length % 2 ? r.concat(r) : r;
}
function eE(e) {
  return Z(e, function(t) {
    return d1(t);
  });
}
function d1(e) {
  for (var t = 0, r = 0; r < e.length; ++r)
    t += e[r];
  return e.length % 2 === 1 ? t * 2 : t;
}
var rE = Lv(nE);
function nE(e, t) {
  e.eachRawSeries(function(r) {
    if (!e.isSeriesFiltered(r)) {
      var n = r.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = Yh(s, t);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = Yh(i, t);
      }
    }
  });
}
var iE = 1, aE = 800, oE = 900, sE = 920, uE = 1e3, lE = 2e3, am = 5e3, p1 = 1e3, fE = 1100, Pc = 2e3, g1 = 3e3, hE = 4e3, tl = 4500, vE = 4600, cE = 5e3, dE = 6e3, m1 = 7e3, pE = {
  PROCESSOR: {
    SERIES_FILTER: aE,
    AXIS_STATISTICS: sE,
    FILTER: uE,
    STATISTIC: am,
    STATISTICS: am
  },
  VISUAL: {
    LAYOUT: p1,
    PROGRESSIVE_LAYOUT: fE,
    GLOBAL: Pc,
    CHART: g1,
    POST_CHART_LAYOUT: vE,
    COMPONENT: hE,
    BRUSH: cE,
    CHART_ITEM: tl,
    ARIA: dE,
    DECAL: m1
  }
}, Et = "__flagInMainProcess", ls = "__mainProcessVersion", Nt = "__pendingUpdate", pf = "__needsUpdateStatus", om = /^[a-zA-Z0-9_]+$/, gf = "__connectUpdateStatus", sm = 0, gE = 1, mE = 2;
function y1(e) {
  return function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    if (this.isDisposed()) {
      this.id;
      return;
    }
    return S1(this, e, t);
  };
}
function _1(e) {
  return function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return S1(this, e, t);
  };
}
function S1(e, t, r) {
  return r[0] = r[0] && r[0].toLowerCase(), hr.prototype[t].apply(e, r);
}
var b1 = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(hr)
), w1 = b1.prototype;
w1.on = _1("on");
w1.off = _1("off");
var Dn, mf, fs, gr, hs, yf, _f, fi, hi, um, lm, Sf, fm, vs, hm, T1, de, vm, vi, x1 = (
  /** @class */
  function(e) {
    V(t, e);
    function t(r, n, i) {
      var a = e.call(this, new P2()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, a.__v_skip = !0, a._dom = r;
      var o = "canvas", s = "auto", u = !1;
      a[ls] = 1, i.ssr && ZP(function(c) {
        var v = ut(c), d = v.dataIndex;
        if (d != null) {
          var p = j();
          return p.set("series_index", v.seriesIndex), p.set("data_index", d), v.ssrType && p.set("ssr_type", v.ssrType), p;
        }
      });
      var l = a._zr = Pg(r, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: $(i.useDirtyRect, u),
        useCoarsePointer: $(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = Ac(St(l.flush, l), 17), a._updateTheme(n), a._locale = YD(i.locale || g_), a._coordSysMgr = new jv();
      var f = a._api = hm(a);
      function h(c, v) {
        return c.__prio - v.__prio;
      }
      return Ps(wu, h), Ps(Zh, h), a._scheduler = new n1(a, f, Zh, wu), a._messageCenter = new b1(), a._initEvents(), a.resize = St(a.resize, a), l.animation.on("frame", a._onframe, a), um(l, a), lm(l, a), Nf(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        var r = this._scheduler, n = this._model, i = this._api;
        if (vm(this), this[Nt]) {
          var a = this[Nt].silent;
          this[Et] = !0, vi(this);
          try {
            Dn(this), gr.update.call(this, null, this[Nt].updateParams);
          } catch (u) {
            throw this[Et] = !1, this[Nt] = null, u;
          }
          this._zr.flush(), this[Et] = !1, this[Nt] = null, fi.call(this, a), hi.call(this, a);
        } else if (r.unfinished) {
          var o = iE;
          do {
            r.unfinished = !1;
            var s = ve.getTime();
            r.performSeriesTasks(n), r.performDataProcessorTasks(n), yf(this, n), r.performVisualTasks(n), vs(this, this._model, i, "remain", {}), o -= ve.getTime() - s;
          } while (o > 0 && r.unfinished);
          r.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(r, n, i) {
      if (!this[Et]) {
        if (this._disposed) {
          this.id;
          return;
        }
        var a, o, s;
        if (K(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Et] = !0, vi(this), !this._model || n) {
          var u = new r2(this._api), l = this._theme, f = this._model = new Ic();
          f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
        }
        this._model.setOption(r, {
          replaceMerge: o
        }, qh);
        var h = {
          seriesTransition: s,
          optionChanged: !0
        };
        if (i)
          this[Nt] = {
            silent: a,
            updateParams: h
          }, this[Et] = !1, this.getZr().wakeUp();
        else {
          try {
            Dn(this), gr.update.call(this, null, h);
          } catch (c) {
            throw this[Nt] = null, this[Et] = !1, c;
          }
          this._ssr || this._zr.flush(), this[Nt] = null, this[Et] = !1, fi.call(this, a), hi.call(this, a);
        }
      }
    }, t.prototype.setTheme = function(r, n) {
      if (!this[Et]) {
        if (this._disposed) {
          this.id;
          return;
        }
        var i = this._model;
        if (i) {
          var a = n && n.silent, o = null;
          this[Nt] && (a == null && (a = this[Nt].silent), o = this[Nt].updateParams, this[Nt] = null), this[Et] = !0, vi(this);
          try {
            this._updateTheme(r), i.setTheme(this._theme), Dn(this), gr.update.call(this, {
              type: "setTheme"
            }, o);
          } catch (s) {
            throw this[Et] = !1, s;
          }
          this[Et] = !1, fi.call(this, a), hi.call(this, a);
        }
      }
    }, t.prototype._updateTheme = function(r) {
      Y(r) && (r = C1[r]), r && (r = ot(r), r && t1(r, !0), this._theme = r);
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || nt.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(r) {
      return this.renderToCanvas(r);
    }, t.prototype.renderToCanvas = function(r) {
      r = r || {};
      var n = this._zr.painter;
      return n.getRenderedCanvas({
        backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(r) {
      r = r || {};
      var n = this._zr.painter;
      return n.renderToString({
        useViewBox: r.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      var r = this._zr, n = r.storage.getDisplayList();
      return I(n, function(i) {
        i.stopAnimation(null, !0);
      }), r.painter.toDataURL();
    }, t.prototype.getDataURL = function(r) {
      if (this._disposed) {
        this.id;
        return;
      }
      r = r || {};
      var n = r.excludeComponents, i = this._model, a = [], o = this;
      I(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
      return I(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(r) {
      if (this._disposed) {
        this.id;
        return;
      }
      var n = r.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (cm[i]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = r && r.pixelRatio || this.getDevicePixelRatio();
        I(Na, function(_, S) {
          if (_.group === i) {
            var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(ot(r)), w = _.getDom().getBoundingClientRect();
            u = a(w.left, u), l = a(w.top, l), f = o(w.right, f), h = o(w.bottom, h), c.push({
              dom: b,
              left: w.left,
              top: w.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, p = h - l, g = ve.createCanvas(), m = Pg(g, {
          renderer: n ? "svg" : "canvas"
        });
        if (m.resize({
          width: d,
          height: p
        }), n) {
          var y = "";
          return I(c, function(_) {
            var S = _.left - u, b = _.top - l;
            y += '<g transform="translate(' + S + "," + b + ')">' + _.dom + "</g>";
          }), m.painter.getSvgRoot().innerHTML = y, r.connectedBackgroundColor && m.painter.setBackgroundColor(r.connectedBackgroundColor), m.refreshImmediately(), m.painter.toDataURL();
        } else
          return r.connectedBackgroundColor && m.add(new Lt({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: p
            },
            style: {
              fill: r.connectedBackgroundColor
            }
          })), I(c, function(_) {
            var S = new vr({
              style: {
                x: _.left * v - u,
                y: _.top * v - l,
                image: _.dom
              }
            });
            m.add(S);
          }), m.refreshImmediately(), g.toDataURL("image/" + (r && r.type || "png"));
      } else
        return this.getDataURL(r);
    }, t.prototype.convertToPixel = function(r, n, i) {
      return hs(this, "convertToPixel", r, n, i);
    }, t.prototype.convertToLayout = function(r, n, i) {
      return hs(this, "convertToLayout", r, n, i);
    }, t.prototype.convertFromPixel = function(r, n, i) {
      return hs(this, "convertFromPixel", r, n, i);
    }, t.prototype.containPixel = function(r, n) {
      if (this._disposed) {
        this.id;
        return;
      }
      var i = this._model, a, o = Pl(i, r);
      return I(o, function(s, u) {
        u.indexOf("Models") >= 0 && I(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint && (a = a || h.containPoint(n, l));
          }
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(r, n) {
      var i = this._model, a = Pl(i, r, {
        defaultMainType: "series"
      }), o = a.seriesModel, s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? O2(s, u, n) : k2(s, n);
    }, t.prototype.getViewOfComponentModel = function(r) {
      return this._componentsMap[r.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(r) {
      return this._chartsMap[r.__viewId];
    }, t.prototype._initEvents = function() {
      var r = this;
      I(yE, function(i) {
        var a = function(o) {
          var s = r.getModel(), u = o.target, l, f = i === "globalout";
          if (f ? l = {} : u && ba(u, function(p) {
            var g = ut(p);
            if (g && g.dataIndex != null) {
              var m = g.dataModel || s.getSeriesByIndex(g.seriesIndex);
              return l = m && m.getDataParams(g.dataIndex, g.dataType, u) || {}, !0;
            } else if (g.eventData)
              return l = N({}, g.eventData), !0;
          }, !0), l) {
            var h = l.componentType, c = l.componentIndex;
            (h === "markLine" || h === "markPoint" || h === "markArea") && (h = "series", c = l.seriesIndex);
            var v = h && c != null && s.getComponent(h, c), d = v && r[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            l.event = o, l.type = i, r._$eventProcessor.eventInfo = {
              targetEl: u,
              packedEvent: l,
              model: v,
              view: d
            }, r.trigger(i, l);
          }
        };
        a.zrEventfulCallAtLast = !0, r._zr.on(i, a, r);
      });
      var n = this._messageCenter;
      I($h, function(i, a) {
        n.on(a, function(o) {
          r.trigger(a, o);
        });
      }), jL(n, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this._disposed = !0;
      var r = this.getDom();
      r && i0(this.getDom(), Rc, "");
      var n = this, i = n._api, a = n._model;
      I(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), I(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Na[n.id];
    }, t.prototype.resize = function(r) {
      if (!this[Et]) {
        if (this._disposed) {
          this.id;
          return;
        }
        this._zr.resize(r);
        var n = this._model;
        if (this._loadingFX && this._loadingFX.resize(), !!n) {
          var i = n.resetOption("media"), a = r && r.silent;
          this[Nt] && (a == null && (a = this[Nt].silent), i = !0, this[Nt] = null), this[Et] = !0, vi(this);
          try {
            i && Dn(this), gr.update.call(this, {
              type: "resize",
              animation: N({
                // Disable animation
                duration: 0
              }, r && r.animation)
            });
          } catch (o) {
            throw this[Et] = !1, o;
          }
          this[Et] = !1, fi.call(this, a), hi.call(this, a);
        }
      }
    }, t.prototype.showLoading = function(r, n) {
      if (this._disposed) {
        this.id;
        return;
      }
      if (K(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !!Kh[r]) {
        var i = Kh[r](this._api, n), a = this._zr;
        this._loadingFX = i, a.add(i);
      }
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(r) {
      var n = N({}, r);
      return n.type = Xh[r.type], n;
    }, t.prototype.dispatchAction = function(r, n) {
      if (this._disposed) {
        this.id;
        return;
      }
      if (K(n) || (n = {
        silent: !!n
      }), !!bu[r.type] && this._model) {
        if (this[Et]) {
          this._pendingActions.push(r);
          return;
        }
        var i = n.silent;
        _f.call(this, r, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && nt.browser.weChat && this._throttledZrFlush(), fi.call(this, i), hi.call(this, i);
      }
    }, t.prototype.updateLabelLayout = function() {
      ge.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(r) {
      if (this._disposed) {
        this.id;
        return;
      }
      var n = r.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      Dn = function(h) {
        mI(h._model);
        var c = h._scheduler;
        c.restorePipelines(h._zr, h._model), c.prepareStageTasks(), mf(h, !0), mf(h, !1), c.plan();
      }, mf = function(h, c) {
        for (var v = h._model, d = h._scheduler, p = c ? h._componentsViews : h._chartsViews, g = c ? h._componentsMap : h._chartsMap, m = h._zr, y = h._api, _ = 0; _ < p.length; _++)
          p[_].__alive = !1;
        c ? v.eachComponent(function(w, T) {
          w !== "series" && S(T);
        }) : v.eachSeries(S);
        function S(w) {
          var T = w.__requireNewView;
          w.__requireNewView = !1;
          var x = "_ec_" + w.id + "_" + w.type, D = !T && g[x];
          if (!D) {
            var C = ir(w.type), A = c ? We.getClass(C.main, C.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Le.getClass(C.sub)
            );
            D = new A(), D.init(v, y), g[x] = D, p.push(D), m.add(D.group);
          }
          w.__viewId = D.__id = x, D.__alive = !0, D.__model = w, D.group.__ecComponentInfo = {
            mainType: w.mainType,
            index: w.componentIndex
          }, !c && d.prepareView(D, w, v, y);
        }
        for (var _ = 0; _ < p.length; ) {
          var b = p[_];
          b.__alive ? _++ : (!c && b.renderTask.dispose(), m.remove(b.group), b.dispose(v, y), p.splice(_, 1), g[b.__id] === b && delete g[b.__id], b.__id = b.group.__ecComponentInfo = null);
        }
      }, fs = function(h, c, v, d, p) {
        var g = h._model;
        if (g.setUpdatePayload(v), !d) {
          I([].concat(h._componentsViews).concat(h._chartsViews), S);
          return;
        }
        var m = JT(v, d, p), y = v.excludeSeriesId, _;
        y != null && (_ = j(), I(ee(y), function(b) {
          var w = ur(b, null);
          w != null && _.set(w, !0);
        })), g && g.eachComponent(m, function(b) {
          var w = _ && _.get(b.id) != null;
          if (!w)
            if (qd(v))
              if (b instanceof He)
                v.type === Gn && !v.notBlur && !b.get(["emphasis", "disabled"]) && Cx(b, v, h._api);
              else {
                var T = kv(b.mainType, b.componentIndex, v.name, h._api), x = T.focusSelf, D = T.dispatchers;
                v.type === Gn && x && !v.notBlur && hh(b.mainType, b.componentIndex, h._api), D && I(D, function(C) {
                  v.type === Gn ? Qs(C) : js(C);
                });
              }
            else dh(v) && b instanceof He && (Mx(b, v, h._api), $d(b), de(h));
        }, h), g && g.eachComponent(m, function(b) {
          var w = _ && _.get(b.id) != null;
          w || S(h[d === "series" ? "_chartsMap" : "_componentsMap"][b.__viewId]);
        }, h);
        function S(b) {
          b && b.__alive && b[c] && b[c](b.__model, g, h._api, v);
        }
      }, gr = {
        prepareAndUpdate: function(h) {
          Dn(this), gr.update.call(this, h, h && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, p = this._zr, g = this._coordSysMgr, m = this._scheduler;
          if (v) {
            yI(v), v.setUpdatePayload(h), m.restoreData(v, h), m.performSeriesTasks(v), g.create(v, d), ge.trigger("coordsys:aftercreate", v, d), m.performDataProcessorTasks(v, h), yf(this, v), g.update(v, d), n(v), m.performVisualTasks(v, h);
            var y = v.get("backgroundColor") || "transparent";
            p.setBackgroundColor(y);
            var _ = v.get("darkMode");
            _ != null && _ !== "auto" && p.setDarkMode(_), Sf(this, v, d, h, c), ge.trigger("afterupdate", v, d);
          }
        },
        /**
         * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
         */
        updateTransform: function(h) {
          var c = this, v = c._model, d = c._api;
          if (v) {
            v.setUpdatePayload(h);
            var p = [];
            v.eachComponent(function(m, y) {
              if (m !== l0) {
                var _ = c.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(y, v, d, h);
                    S && S.update && p.push(_);
                  } else
                    p.push(_);
              }
            });
            var g = j();
            v.eachSeries(function(m) {
              var y = c._chartsMap[m.__viewId], _ = m.pipelineContext;
              if (y.updateTransform && !_.progressiveRender) {
                var S = y.updateTransform(m, v, d, h);
                S && S.update && g.set(m.uid, 1);
              } else
                g.set(m.uid, 1);
            }), c._scheduler.performVisualTasks(v, h, {
              setDirty: !0,
              dirtyMap: g
            }), vs(c, v, d, h, {}, g), ge.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), Le.markUpdateMethod(h, "updateView"), n(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), Sf(this, c, this._api, h, {}), ge.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), Le.markUpdateMethod(h, "updateVisual"), n(v), this._scheduler.performVisualTasks(v, h, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, p) {
            if (d !== "series") {
              var g = c.getViewOfComponentModel(p);
              g && g.__alive && g.updateVisual(p, v, c._api, h);
            }
          }), v.eachSeries(function(d) {
            var p = c._chartsMap[d.__viewId];
            p.updateVisual(d, v, c._api, h);
          }), ge.trigger("afterupdate", v, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(h) {
          gr.update.call(this, h);
        }
      };
      function r(h, c, v, d, p) {
        if (h._disposed) {
          h.id;
          return;
        }
        for (var g = h._model, m = h._coordSysMgr.getCoordinateSystems(), y, _ = Pl(g, v), S = 0; S < m.length; S++) {
          var b = m[S];
          if (b[c] && (y = b[c](g, _, d, p)) != null)
            return y;
        }
      }
      hs = r, yf = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(p) {
          d.updateStreamModes(p, v[p.__viewId]);
        });
      }, _f = function(h, c) {
        var v = this, d = this.getModel(), p = h.type, g = h.escapeConnect, m = bu[p], y = (m.update || "update").split(":"), _ = y.pop(), S = y[0] != null && ir(y[0]);
        this[Et] = !0, vi(this);
        var b = [h], w = !1;
        h.batch && (w = !0, b = Z(h.batch, function(R) {
          return R = yt(N({}, R), h), R.batch = null, R;
        }));
        var T = [], x, D = [], C = m.nonRefinedEventType, A = dh(h), L = qd(h);
        if (L && b0(this._api), I(b, function(R) {
          var k = m.action(R, d, v._api);
          if (m.refineEvent ? D.push(k) : x = k, x = x || N({}, R), x.type = C, T.push(x), L) {
            var O = Mv(h), B = O.queryOptionMap, F = O.mainTypeSpecified, G = F ? B.keys()[0] : "series";
            fs(v, _, R, G), de(v);
          } else A ? (fs(v, _, R, "series"), de(v)) : S && fs(v, _, R, S.main, S.sub);
        }), _ !== "none" && !L && !A && !S)
          try {
            this[Nt] ? (Dn(this), gr.update.call(this, h), this[Nt] = null) : gr[_].call(this, h);
          } catch (R) {
            throw this[Et] = !1, R;
          }
        if (w ? x = {
          type: C,
          escapeConnect: g,
          batch: T
        } : x = T[0], this[Et] = !1, !c) {
          var M = void 0;
          if (m.refineEvent) {
            var P = m.refineEvent(D, h, d, this._api).eventContent;
            Ve(K(P)), M = yt({
              type: m.refinedEventType
            }, P), M.fromAction = h.type, M.fromActionPayload = h, M.escapeConnect = !0;
          }
          var E = this._messageCenter;
          E.trigger(x.type, x), M && E.trigger(M.type, M);
        }
      }, fi = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          _f.call(this, v, h);
        }
      }, hi = function(h) {
        !h && this.trigger("updated");
      }, um = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Nt] && !c._scheduler.unfinished && !c._pendingActions.length ? c.trigger("finished") : h.refresh();
        });
      }, lm = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, p = ba(d, ch);
          p && (Dx(p, v, c._api), de(c));
        }).on("mouseout", function(v) {
          var d = v.target, p = ba(d, ch);
          p && (Ax(p, v, c._api), de(c));
        }).on("click", function(v) {
          var d = v.target, p = ba(d, function(y) {
            return ut(y).dataIndex != null;
          }, !0);
          if (p) {
            var g = p.selected ? "unselect" : "select", m = ut(p);
            c._api.dispatchAction({
              type: g,
              dataType: m.dataType,
              dataIndexInside: m.dataIndex,
              seriesIndex: m.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function n(h) {
        h.clearColorPalette(), h.eachSeries(function(c) {
          c.clearColorPalette();
        });
      }
      function i(h) {
        var c = [], v = [], d = !1;
        if (h.eachComponent(function(y, _) {
          var S = _.get("zlevel") || 0, b = _.get("z") || 0, w = _.getZLevelKey();
          d = d || !!w, (y === "series" ? v : c).push({
            zlevel: S,
            z: b,
            idx: _.componentIndex,
            type: y,
            key: w
          });
        }), d) {
          var p = c.concat(v), g, m;
          Ps(p, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), I(p, function(y) {
            var _ = h.getComponent(y.type, y.idx), S = y.zlevel, b = y.key;
            g != null && (S = Math.max(g, S)), b ? (S === g && b !== m && S++, m = b) : m && (S === g && S++, m = ""), g = S, _.setZLevel(S);
          });
        }
      }
      Sf = function(h, c, v, d, p) {
        i(c), fm(h, c, v, d, p), I(h._chartsViews, function(g) {
          g.__alive = !1;
        }), vs(h, c, v, d, p), I(h._chartsViews, function(g) {
          g.__alive || g.remove(c, v);
        });
      }, fm = function(h, c, v, d, p, g) {
        I(g || h._componentsViews, function(m) {
          var y = m.__model;
          l(y, m), m.render(y, c, v, d), u(y, m), f(y, m);
        });
      }, vs = function(h, c, v, d, p, g) {
        var m = h._scheduler;
        p = N(p || {}, {
          updatedSeries: c.getSeries()
        }), ge.trigger("series:beforeupdate", c, v, p);
        var y = !1;
        c.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          S.__alive = !0;
          var b = S.renderTask;
          m.updatePayload(b, d), l(_, S), g && g.get(_.uid) && b.dirty(), b.perform(m.getPerformArgs(b)) && (y = !0), S.group.silent = !!_.get("silent"), s(_, S), $d(_);
        }), m.unfinished = y || m.unfinished, ge.trigger("series:layoutlabels", c, v, p), ge.trigger("series:transition", c, v, p), c.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          u(_, S), f(_, S);
        }), o(h, c), ge.trigger("series:afterupdate", c, v, p);
      }, de = function(h) {
        h[pf] = !0, h.getZr().wakeUp();
      }, vi = function(h) {
        h[ls] = (h[ls] + 1) % 1e6;
      }, vm = function(h) {
        h[pf] && (h.getZr().storage.traverse(function(c) {
          Ia(c) || a(c);
        }), h[pf] = !1);
      };
      function a(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var p = v[d];
          p === "emphasis" || p === "blur" || p === "select" || c.push(p);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === Nu && h.states.emphasis ? c.push("emphasis") : h.hoverState === ku && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function o(h, c) {
        var v = h._zr;
        if (v.painter.type === "canvas") {
          var d = v.storage, p = 0;
          d.traverse(function(m) {
            m.isGroup || p++;
          });
          var g = p > $(c.get("hoverLayerThreshold"), jS.hoverLayerThreshold) && !nt.node && !nt.worker;
          (h._usingTHL || g) && (c.eachSeries(function(m) {
            if (!m.preventUsingHoverLayer) {
              var y = h._chartsMap[m.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var S = _.states.emphasis;
                S && S.hoverLayer !== Hv && (S.hoverLayer = g ? O0 : R0);
              });
            }
          }), h._usingTHL = g);
        }
      }
      function s(h, c) {
        var v = h.get("blendMode") || null;
        c.eachRendered(function(d) {
          d.isGroup || (d.style.blend = v);
        });
      }
      function u(h, c) {
        if (!h.preventAutoZ) {
          var v = G0(h);
          c.eachRendered(function(d) {
            return V0(d, v.z, v.zlevel), !0;
          });
        }
      }
      function l(h, c) {
        c.eachRendered(function(v) {
          if (!Ia(v)) {
            var d = v.getTextContent(), p = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), p && p.stateTransition && (p.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(h, c) {
        var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), p = v.get("duration"), g = p > 0 ? {
          duration: p,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        c.eachRendered(function(m) {
          if (m.states && m.states.emphasis) {
            if (Ia(m))
              return;
            if (m instanceof dt && Ox(m), m.__dirty) {
              var y = m.prevStates;
              y && m.useStates(y);
            }
            if (d) {
              m.stateTransition = g;
              var _ = m.getTextContent(), S = m.getTextGuideLine();
              _ && (_.stateTransition = g), S && (S.stateTransition = g);
            }
            m.__dirty && a(m);
          }
        });
      }
      hm = function(h) {
        return new /** @class */
        (function(c) {
          V(v, c);
          function v() {
            return c !== null && c.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var p = d.__ecComponentInfo;
              if (p != null)
                return h._model.getComponent(p.mainType, p.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, p) {
            Qs(d, p), de(h);
          }, v.prototype.leaveEmphasis = function(d, p) {
            js(d, p), de(h);
          }, v.prototype.enterBlur = function(d) {
            xx(d), de(h);
          }, v.prototype.leaveBlur = function(d) {
            m0(d), de(h);
          }, v.prototype.enterSelect = function(d) {
            y0(d), de(h);
          }, v.prototype.leaveSelect = function(d) {
            _0(d), de(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v.prototype.getECUpdateCycleVersion = function() {
            return h[ls];
          }, v.prototype.usingTHL = function() {
            return h._usingTHL;
          }, v;
        }(v0))(h);
      }, T1 = function(h) {
        function c(v, d) {
          for (var p = 0; p < v.length; p++) {
            var g = v[p];
            g[gf] = d;
          }
        }
        I(Xh, function(v, d) {
          h._messageCenter.on(d, function(p) {
            if (cm[h.group] && h[gf] !== sm) {
              if (p && p.escapeConnect)
                return;
              var g = h.makeActionFromEvent(p), m = [];
              I(Na, function(y) {
                y !== h && y.group === h.group && m.push(y);
              }), c(m, sm), I(m, function(y) {
                y[gf] !== gE && y.dispatchAction(g);
              }), c(m, mE);
            }
          });
        });
      };
    }(), t;
  }(hr)
), Ec = x1.prototype;
Ec.on = y1("on");
Ec.off = y1("off");
Ec.one = function(e, t, r) {
  var n = this;
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(e, i);
  }
  this.on.call(this, e, i, r);
};
var yE = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
var bu = {}, Xh = {}, $h = {}, Zh = [], qh = [], wu = [], C1 = {}, Kh = {}, Na = {}, cm = {}, _E = +/* @__PURE__ */ new Date() - 0, Rc = "_echarts_instance_";
function SE(e, t, r) {
  var n = !(r && r.ssr);
  if (n) {
    var i = bE(e);
    if (i)
      return i;
  }
  var a = new x1(e, t, r);
  return a.id = "ec_" + _E++, Na[a.id] = a, n && i0(e, Rc, a.id), T1(a), ge.trigger("afterinit", a), a;
}
function bE(e) {
  return Na[tx(e, Rc)];
}
function D1(e, t) {
  C1[e] = t;
}
function A1(e) {
  ct(qh, e) < 0 && qh.push(e);
}
function M1(e, t) {
  kc(Zh, e, t, lE);
}
function wE(e) {
  Oc("afterinit", e);
}
function TE(e) {
  Oc("afterupdate", e);
}
function Oc(e, t) {
  ge.on(e, t);
}
function $i(e, t, r) {
  var n, i, a, o, s;
  et(t) && (r = t, t = ""), K(e) ? (n = e.type, i = e.event, o = e.update, s = e.publishNonRefinedEvent, r || (r = e.action), a = e.refineEvent) : (n = e, i = t);
  function u(f) {
    return f.toLowerCase();
  }
  i = u(i || n);
  var l = a ? u(n) : i;
  bu[n] || (Ve(om.test(n) && om.test(i)), a && Ve(i !== n), bu[n] = {
    actionType: n,
    refinedEventType: i,
    nonRefinedEventType: l,
    update: o,
    action: r,
    refineEvent: a
  }, $h[i] = 1, a && s && ($h[l] = 1), Xh[l] = n);
}
function xE(e, t) {
  jv.register(e, t);
}
function CE(e, t) {
  kc(wu, e, t, p1, "layout");
}
function qn(e, t) {
  kc(wu, e, t, g1, "visual");
}
var dm = [];
function kc(e, t, r, n, i, a) {
  if ((et(t) || K(t)) && (r = t, t = n), !(ct(dm, r) >= 0)) {
    dm.push(r);
    var o = n1.wrapStageHandler(r, i);
    o.__prio = t, o.__raw = r, e.push(o);
  }
}
function I1(e, t) {
  Kh[e] = t;
}
function DE(e, t, r) {
  var n = B2("registerMap");
  n && n(e, t, r);
}
var AE = xA;
qn(Pc, y2);
qn(tl, _2);
qn(tl, S2);
qn(Pc, E2);
qn(tl, R2);
qn(m1, rE);
A1(t1);
M1(oE, d2);
I1("default", b2);
$i({
  type: Gn,
  event: Gn,
  update: Gn
}, Ut);
$i({
  type: bs,
  event: bs,
  update: bs
}, Ut);
$i({
  type: qs,
  event: Rv,
  update: qs,
  action: Ut,
  refineEvent: Nc,
  publishNonRefinedEvent: !0
});
$i({
  type: lh,
  event: Rv,
  update: lh,
  action: Ut,
  refineEvent: Nc,
  publishNonRefinedEvent: !0
});
$i({
  type: Ks,
  event: Rv,
  update: Ks,
  action: Ut,
  refineEvent: Nc,
  publishNonRefinedEvent: !0
});
function Nc(e, t, r, n) {
  return {
    eventContent: {
      selected: Ix(r),
      isFromClick: t.isFromClick || !1
    }
  };
}
D1("default", {});
D1("dark", s1);
var pm = [], ME = {
  registerPreprocessor: A1,
  registerProcessor: M1,
  registerPostInit: wE,
  registerPostUpdate: TE,
  registerUpdateLifecycle: Oc,
  registerAction: $i,
  registerCoordinateSystem: xE,
  registerLayout: CE,
  registerVisual: qn,
  registerTransform: AE,
  registerLoading: I1,
  registerMap: DE,
  registerImpl: N2,
  PRIORITY: pE,
  ComponentModel: pt,
  ComponentView: We,
  SeriesModel: He,
  ChartView: Le,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(e) {
    pt.registerClass(e);
  },
  registerComponentView: function(e) {
    We.registerClass(e);
  },
  registerSeriesModel: function(e) {
    He.registerClass(e);
  },
  registerChartView: function(e) {
    Le.registerClass(e);
  },
  registerCustomSeries: function(e, t) {
  },
  registerSubTypeDefaulter: function(e, t) {
    pt.registerSubTypeDefaulter(e, t);
  },
  registerPainter: function(e, t) {
    XP(e, t);
  }
};
function tn(e) {
  if (W(e)) {
    I(e, function(t) {
      tn(t);
    });
    return;
  }
  ct(pm, e) >= 0 || (pm.push(e), et(e) && (e = {
    install: e
  }), e.install(ME));
}
var IE = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, e.prototype.getCoordSysModel = function() {
    }, e;
  }()
), Qh = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", xe).models[0];
    }, t.type = "cartesian2dAxis", t;
  }(pt)
);
fr(Qh, IE);
var L1 = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {
    // textMargin: never, // The default value will be specified based on `nameLocation`.
  },
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: "auto",
    onZeroAxisIndex: null,
    lineStyle: {
      color: q.color.axisLine,
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15],
    breakLine: !0
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12,
    color: q.color.axisLabel,
    // In scenarios like axis labels, when labels text's progression direction matches the label
    // layout direction (e.g., when all letters are in a single line), extra start/end margin is
    // needed to prevent the text from appearing visually joined. In the other case, when lables
    // are stacked (e.g., having rotation or horizontal labels on yAxis), the layout needs to be
    // compact, so NO extra top/bottom margin should be applied.
    textMargin: [0, 3]
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: q.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [q.color.backgroundTint, q.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: q.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: q.color.border,
      borderWidth: 1,
      borderType: [3, 3],
      opacity: 0.6
    },
    zigzagAmplitude: 4,
    zigzagMinSpan: 4,
    zigzagMaxSpan: 20,
    zigzagZ: 100,
    expandOnClick: !0
  },
  breakLabelLayout: {
    moveOverlap: "auto"
  }
}, LE = gt({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  jitter: 0,
  jitterOverlap: !0,
  jitterMargin: 2,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto",
    show: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, L1), Bc = gt({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: q.color.axisMinorSplitLine,
      width: 1
    }
  }
}, L1), PE = gt({
  splitNumber: 6,
  axisLabel: {
    // The default value of TimeScale is determined in `AxisBuilder`
    // showMinLabel: false,
    // showMaxLabel: false,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, Bc), EE = yt({
  logBase: 10
}, Bc);
const RE = {
  category: LE,
  value: Bc,
  time: PE,
  log: EE
};
function gm(e, t, r, n) {
  I(tS, function(i, a) {
    var o = gt(gt({}, RE[a], !0), n, !0), s = (
      /** @class */
      function(u) {
        V(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var c = qa(this), v = c ? _o(f) : {}, d = h.getTheme();
          gt(f, d.get(a + "Axis")), gt(f, this.getDefaultOption()), f.type = mm(f), c && jr(f, v, c);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = Ih.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.prototype.updateAxisBreaks = function(f) {
          return {
            breaks: []
          };
        }, l.type = t + "Axis." + a, l.defaultOption = o, l;
      }(r)
    );
    e.registerComponentModel(s);
  }), e.registerSubTypeDefaulter(t + "Axis", mm);
}
function mm(e) {
  return e.type || (e.data ? "category" : "value");
}
var OE = (
  /** @class */
  function() {
    function e(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return e.prototype.getAxis = function(t) {
      return this._axes[t];
    }, e.prototype.getAxes = function() {
      return Z(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, e.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), Vt(this.getAxes(), function(r) {
        return r.scale.type === t;
      });
    }, e.prototype.addAxis = function(t) {
      var r = t.dim;
      this._axes[r] = t, this._dimList.push(r);
    }, e;
  }()
), Os = ["x", "y"];
function ym(e) {
  return (e.type === "interval" || e.type === "time") && !iu(e);
}
var kE = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Sr, r.dimensions = Os, r;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var r = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!ym(r) || !ym(n))) {
        var i = ou(r, null), a = ou(n, null), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), u = i[1] - i[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, c = o[0] - i[0] * f, v = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, c, v];
          this._invTransform = so([], d);
        }
      }
    }, t.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, t.prototype.containPoint = function(r) {
      var n = this.getAxis("x"), i = this.getAxis("y");
      return n.contain(n.toLocalCoord(r[0])) && i.contain(i.toLocalCoord(r[1]));
    }, t.prototype.containData = function(r) {
      return this.getAxis("x").containData(r[0]) && this.getAxis("y").containData(r[1]);
    }, t.prototype.containZone = function(r, n) {
      var i = this.dataToPoint(r), a = this.dataToPoint(n), o = this.getArea(), s = new tt(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(r, n, i) {
      i = i || [];
      var a = r[0], o = r[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return Ae(i, r, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = u.toGlobalCoord(u.dataToCoord(o, n)), i;
    }, t.prototype.clampData = function(r, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), u = i.parse(r[0]), l = a.parse(r[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), n;
    }, t.prototype.pointToData = function(r, n, i) {
      if (i = i || [], this._invTransform)
        return Ae(i, r, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(r[0]), n), i[1] = o.coordToData(o.toLocalCoord(r[1]), n), i;
    }, t.prototype.getOtherAxis = function(r) {
      return this.getAxis(r.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(r) {
      r = r || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - r, o = Math.min(i[0], i[1]) - r, s = Math.max(n[0], n[1]) - a + r, u = Math.max(i[0], i[1]) - o + r;
      return new tt(a, o, s, u);
    }, t;
  }(OE)
);
function NE(e, t) {
  var r = e.scale, n = e.model, i = PS(r, n, n.ecModel, e), a = Fi(r), o = Fi(t) ? t.intervalStub : t, s = a ? r.intervalStub : r, u = r.base, l = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), h = l.length - 1, c, v, d;
  if (h === 1)
    c = v = 0, d = 1;
  else if (h === 2) {
    var p = Ot(l[0].value - l[1].value), g = Ot(l[1].value - l[2].value);
    c = v = 0, p === g ? d = 2 : (d = 1, p < g ? c = p / g : v = g / p);
  } else {
    var m = o.getConfig().interval;
    c = (1 - (l[0].value - f[0].value) / m) % 1, v = (1 - (f[h].value - l[h].value) / m) % 1, d = h - (c ? 1 : 0) - (v ? 1 : 0);
  }
  var y = i.zoomFixMM, _ = y[0] || y[1], S = [i.fixMM[0] || _, i.fixMM[1] || _], b = r.getExtent(), w = s.getExtent(), T = q_(w, S), x, D, C, A, L, M;
  function P(U) {
    for (var X = 50, H = 0; H < X && !U(); H++)
      C = a ? C * ht(u, 2) : xM(C), A = Xn(C);
  }
  function E() {
    x = ft(M - C * c, A);
  }
  function R() {
    D = ft(L + C * v, A);
  }
  function k() {
    M = c ? ft(x + C * c, A) : x;
  }
  function O() {
    L = v ? ft(D - C * v, A) : D;
  }
  if (S[0] && S[1]) {
    x = T[0], D = T[1], C = (D - x) / (d + c + v);
    var B = e.getExtent(), F = Ot(B[1] - B[0]);
    A = RT([D, x], F, 0.5 / d), k(), O(), Pe(A) && (C = ft(C, A));
  } else {
    var G = T[1] - T[0];
    C = a ? ht(jy(G), 1) : Cv(G / d, Jy), A = Xn(C), S[0] ? (x = T[0], P(function() {
      if (k(), L = ft(M + C * d, A), R(), D >= T[1])
        return !0;
    })) : S[1] ? (D = T[1], P(function() {
      if (O(), M = ft(L - C * d, A), E(), x <= T[0])
        return !0;
    })) : P(function() {
      M = ft(vo(T[0] / C) * C, A), L = ft(Un(T[1] / C) * C, A);
      var U = wr((L - M) / C);
      if (U <= d) {
        var X = d - U, H = void 0, J = i.incl0 || a;
        if (J && T[0] === 0)
          H = [0, X];
        else if (J && T[1] === 0)
          H = [X, 0];
        else {
          var it = Un(X / 2);
          H = X % 2 === 0 ? [it, it] : x + D < T[0] + T[1] ? [it, it + 1] : [it + 1, it];
        }
        if (M = ft(M - C * H[0], A), L = ft(L + C * H[1], A), E(), R(), x <= T[0] && D >= T[1])
          return !0;
      }
    });
  }
  rS(r, S, w, [x, D], b, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: C,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: A,
    niceExtent: [M, L]
  });
}
function _m(e, t) {
  var r = Fi(e), n = r ? e.intervalStub : e, i = t.fixMinMax || [], a = r ? e.getExtent() : null, o = n.getExtent(), s = q_(o, i, t.rawExtentResult);
  n.setExtent(s[0], s[1]), s = n.getExtent();
  var u = r ? FE(n, t) : BE(n, t), l = u.intervalPrecision, f = u.interval, h = t.userInterval;
  h != null && (u.interval = h, u.intervalPrecision = Xn(h)), i[0] || (s[0] = ft(Un(s[0] / f) * f, l)), i[1] || (s[1] = ft(vo(s[1] / f) * f, l)), h != null && (u.niceExtent = s.slice()), rS(e, i, o, s, a, u);
}
function BE(e, t) {
  var r = Sc(t.splitNumber, 5), n = Ku(e), i = t.minInterval, a = t.maxInterval, o = Cv(n / r, !0);
  i != null && o < i && (o = i), a != null && o > a && (o = a);
  var s = Xn(o), u = e.getExtent(), l = [ft(vo(u[0] / o) * o, s), ft(Un(u[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: l
  };
}
function FE(e, t) {
  var r = Sc(t.splitNumber, 10), n = e.getExtent(), i = Ku(e), a = ht(jy(i), 1), o = r / i * a;
  o <= 0.5 && (a *= 10);
  var s = Xn(a), u = [ft(vo(n[0] / a) * a, s), ft(Un(n[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: u
  };
}
function Sm(e) {
  var t = e.scale, r = e.model, n = r.axis, i = r.ecModel;
  zE(t, r, n, i);
}
function zE(e, t, r, n, i) {
  var a = PS(e, t, n, r), o = su(e) || _c(e);
  GE(e, {
    splitNumber: t.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: t.get("interval"),
    minInterval: o ? t.get("minInterval") : null,
    maxInterval: o ? t.get("maxInterval") : null,
    rawExtentResult: a
  }), r && n && yL(r, e, a, n);
}
function GE(e, t) {
  VE[e.type](e, t);
}
var VE = {
  interval: _m,
  log: _m,
  time: kM,
  ordinal: Ut
}, bm = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], HE = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Os, this._initCartesian(t, r, n), this.model = t;
    }
    return e.prototype.getRect = function() {
      return this._rect;
    }, e.prototype.update = function(t, r) {
      var n = this._axesMap;
      I(this._axesList, function(o) {
        cL(o, lL);
        var s = o.scale;
        Ze(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function i(o) {
        for (var s = lt(o), u = [], l = s.length - 1; l >= 0; l--) {
          var f = o[+s[l]];
          f.__alignTo ? u.push(f) : Sm(f);
        }
        I(u, function(h) {
          WE(h, h.__alignTo) ? Sm(h) : NE(h, h.__alignTo.scale);
        });
      }
      i(n.x), i(n.y);
      var a = {};
      I(n.x, function(o) {
        wm(n, "y", o, a);
      }), I(n.y, function(o) {
        wm(n, "x", o, a);
      }), this.resize(this.model, r);
    }, e.prototype.resize = function(t, r, n) {
      var i = qu(t, r), a = this._rect = Qr(t.getBoxLayoutParams(), i.refContainer), o = this._axesMap, s = this._coordsList, u = t.get("containLabel");
      if (P1(o, a), !n) {
        var l = XE(a, s, o, u, r), f = void 0;
        if (u)
          f = Dm(a.clone(), "axisLabel", null, a, o, l, i);
        else {
          var h = $E(t, a, i), c = h.outerBoundsRect, v = h.parsedOuterBoundsContain, d = h.outerBoundsClamp;
          c && (f = Dm(c, v, d, a, o, l, i));
        }
        E1(a, o, Ue.determine, null, f, i), I(this._coordsList, function(p) {
          p.calcAffineTransform();
        });
      }
    }, e.prototype.getAxis = function(t, r) {
      var n = this._axesMap[t];
      if (n != null)
        return n[r || 0];
    }, e.prototype.getAxes = function() {
      return this._axesList.slice();
    }, e.prototype.getCartesian = function(t, r) {
      if (t != null && r != null) {
        var n = "x" + t + "y" + r;
        return this._coordsMap[n];
      }
      K(t) && (r = t.yAxisIndex, t = t.xAxisIndex);
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === t || a[i].getAxis("y").index === r)
          return a[i];
    }, e.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, e.prototype.convertToPixel = function(t, r, n) {
      var i = this._findConvertTarget(r);
      return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, e.prototype.convertFromPixel = function(t, r, n) {
      var i = this._findConvertTarget(r);
      return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, e.prototype._findConvertTarget = function(t) {
      var r = t.seriesModel, n = t.xAxisModel || r && r.getReferringComponents("xAxis", xe).models[0], i = t.yAxisModel || r && r.getReferringComponents("yAxis", xe).models[0], a = t.gridModel, o = this._coordsList, s, u;
      if (r)
        s = r.coordinateSystem, ct(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n)
        u = this.getAxis("x", n.componentIndex);
      else if (i)
        u = this.getAxis("y", i.componentIndex);
      else if (a) {
        var l = a.coordinateSystem;
        l === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: u
      };
    }, e.prototype.containPoint = function(t) {
      var r = this._coordsList[0];
      if (r)
        return r.containPoint(t);
    }, e.prototype._initCartesian = function(t, r, n) {
      var i = this, a = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, u = {
        x: 0,
        y: 0
      };
      if (r.eachComponent("xAxis", l("x"), this), r.eachComponent("yAxis", l("y"), this), !u.x || !u.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, I(s.x, function(f, h) {
        I(s.y, function(c, v) {
          var d = "x" + h + "y" + v, p = new kE(d);
          p.master = i, p.model = t, i._coordsMap[d] = p, i._coordsList.push(p), p.addAxis(f), p.addAxis(c);
        });
      }), xm(s.x), xm(s.y);
      function l(f) {
        return function(h, c) {
          if (UE(h, t)) {
            var v = h.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = NM(h), p = new kI(f, BM(h, d), [0, 0], d, v);
            p.onBand = nS(p.scale, h), p.inverse = h.get("inverse"), h.axis = p, p.model = h, p.grid = a, p.index = c, a._axesList.push(p), s[f][c] = p, u[f]++;
          }
        };
      }
    }, e.prototype.getTooltipAxes = function(t) {
      var r = [], n = [];
      return I(this.getCartesians(), function(i) {
        var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
        ct(r, a) < 0 && r.push(a), ct(n, o) < 0 && n.push(o);
      }), {
        baseAxes: r,
        otherAxes: n
      };
    }, e.create = function(t, r) {
      var n = [];
      return t.eachComponent("grid", function(i, a) {
        var o = new e(i, t, r);
        o.name = "grid_" + a, o.resize(i, r, !0), i.coordinateSystem = o, n.push(o), I(o._axesList, function(s) {
          vL(s, e.dimIdxMap);
        });
      }), t.eachSeries(function(i) {
        var a, o;
        wD({
          targetModel: i,
          coordSysType: Sr,
          coordSysProvider: s
        });
        function s() {
          var u = aL(i), l = u.xAxisModel, f = u.yAxisModel;
          a = l.axis, o = f.axis;
          var h = l.getCoordSysModel(), c = h.coordinateSystem;
          return c.getCartesian(l.componentIndex, f.componentIndex);
        }
        a && o && (Kp(a, i, Sr), Kp(o, i, Sr));
      }, this), n;
    }, e.dimensions = Os, e.dimIdxMap = Qv(Os), e;
  }()
);
function UE(e, t) {
  return e.getCoordSysModel() === t;
}
function wm(e, t, r, n) {
  r.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = e[t], a, o = r.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    Tm(s, i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (te(i, l) && Tm(s, i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function Tm(e, t) {
  if (!t)
    return !1;
  var r = t.scale, n = FM(r, 0), i = t && t.type !== "category" && t.type !== "time" && n !== Lh;
  return i && e === "auto" && HM(t) && (i = !1), i;
}
function xm(e) {
  for (var t = lt(e), r, n = [], i = t.length - 1; i >= 0; i--) {
    var a = e[+t[i]];
    Z_(a.scale) && YM(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? n.push(a) : r = a);
  }
  r || (r = n.pop()), r && I(n, function(o) {
    o.__alignTo = r;
  });
}
function WE(e, t) {
  return iu(e.scale) || iu(t.scale) || t.scale.getTicks().length < 2;
}
function YE(e, t) {
  var r = e.getExtent(), n = r[0] + r[1];
  e.toGlobalCoord = e.dim === "x" ? function(i) {
    return i + t;
  } : function(i) {
    return n - i + t;
  }, e.toLocalCoord = e.dim === "x" ? function(i) {
    return i - t;
  } : function(i) {
    return n - i + t;
  };
}
function P1(e, t) {
  I(e.x, function(r) {
    return Cm(r, t.x, t.width);
  }), I(e.y, function(r) {
    return Cm(r, t.y, t.height);
  });
}
function Cm(e, t, r) {
  var n = [0, r], i = e.inverse ? 1 : 0;
  e.setExtent(n[i], n[1 - i]), YE(e, t);
}
function Dm(e, t, r, n, i, a, o) {
  E1(n, i, Ue.estimate, t, !1, o);
  var s = [0, 0, 0, 0];
  l(0), l(1), f(n, 0, NaN), f(n, 1, NaN);
  var u = Rb(s, function(c) {
    return c > 0;
  }) == null;
  return eu(n, s, !0, !0, r), P1(i, n), u;
  function l(c) {
    I(i[kr[c]], function(v) {
      if (Ja(v.model)) {
        var d = a.ensureRecord(v.model), p = d.labelInfoList;
        if (p)
          for (var g = 0; g < p.length; g++) {
            var m = p[g], y = v.scale.normalize(So(v.scale, Gi(m.label).labelInfo.tick));
            y = c === 1 ? 1 - y : y, f(m.rect, c, y), f(m.rect, 1 - c, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = zi(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, c, y), f(_.rect, 1 - c, NaN);
        }
      }
    });
  }
  function f(c, v, d) {
    var p = e[kr[v]] - c[kr[v]], g = c[Oi[v]] + c[kr[v]] - (e[Oi[v]] + e[kr[v]]);
    p = h(p, 1 - d), g = h(g, d);
    var m = bm[v][0], y = bm[v][1];
    s[m] = ht(s[m], p), s[y] = ht(s[y], g);
  }
  function h(c, v) {
    return c > 0 && !za(v) && v > 1e-4 && (c /= v), c;
  }
}
function XE(e, t, r, n, i) {
  var a = new wS(ZE);
  return I(r, function(o) {
    return I(o, function(s) {
      if (Ja(s.model)) {
        var u = !n;
        s.axisBuilder = oL(e, t, s.model, i, a, u);
      }
    });
  }), a;
}
function E1(e, t, r, n, i, a) {
  var o = r === Ue.determine;
  I(t, function(l) {
    return I(l, function(f) {
      Ja(f.model) && (sL(f.axisBuilder, e, f.model), f.axisBuilder.build(o ? {
        axisTickLabelDetermine: !0
      } : {
        axisTickLabelEstimate: !0
      }, {
        noPxChange: i
      }));
    });
  });
  var s = {
    x: 0,
    y: 0
  };
  u(0), u(1);
  function u(l) {
    s[kr[1 - l]] = e[Oi[l]] <= a.refContainer[Oi[l]] * 0.5 ? 0 : 1 - l === 1 ? 2 : 1;
  }
  I(t, function(l, f) {
    return I(l, function(h) {
      Ja(h.model) && ((n === "all" || o) && h.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && h.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function $E(e, t, r) {
  var n, i = e.get("outerBoundsMode", !0);
  i === "same" ? n = t.clone() : (i == null || i === "auto") && (n = Qr(e.get("outerBounds", !0) || ES, r.refContainer));
  var a = e.get("outerBoundsContain", !0), o;
  a == null || a === "auto" || ct(["all", "axisLabel"], a) < 0 ? o = "all" : o = a;
  var s = [oh($(e.get("outerBoundsClampWidth", !0), du[0]), t.width), oh($(e.get("outerBoundsClampHeight", !0), du[1]), t.height)];
  return {
    outerBoundsRect: n,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var ZE = function(e, t, r, n, i, a) {
  var o = r.axis.dim === "x" ? "y" : "x";
  TS(e, t, r, n, i, a), zi(e.nameLocation) || I(t.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && CS(s.labelInfoList, s.dirVec, n, i);
  });
};
function qE(e, t) {
  var r = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return KE(r, e, t), r.seriesInvolved && jE(r, e), r;
}
function KE(e, t, r) {
  var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  I(r.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = ro(s.model), l = e.coordSysAxesInfo[u] = {};
    e.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", n);
    if (I(s.getAxes(), Rt(p, !1, null)), s.getTooltipAxes && n && h.get("show")) {
      var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && I(d.baseAxes, Rt(p, v ? "cross" : !0, c)), v && I(d.otherAxes, Rt(p, "cross", !1));
    }
    function p(g, m, y) {
      var _ = y.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !g && !jh(_))) {
        m == null && (m = _.get("triggerTooltip")), _ = g ? QE(y, h, i, t, g, m) : _;
        var b = _.get("snap"), w = _.get("triggerEmphasis"), T = ro(y.model), x = m || b || y.type === "category", D = e.axesInfo[T] = {
          key: T,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: m,
          triggerEmphasis: w,
          involveSeries: x,
          snap: b,
          useHandle: jh(_),
          seriesModels: [],
          linkGroup: null
        };
        l[T] = D, e.seriesInvolved = e.seriesInvolved || x;
        var C = JE(a, y);
        if (C != null) {
          var A = o[C] || (o[C] = {
            axesInfo: {}
          });
          A.axesInfo[T] = D, A.mapper = a[C].mapper, D.linkGroup = A;
        }
      }
    }
  });
}
function QE(e, t, r, n, i, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  I(s, function(c) {
    u[c] = ot(o.get(c));
  }), u.snap = e.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && yt(l, h.textStyle);
    }
  }
  return e.model.getModel("axisPointer", new Ct(u, r, n));
}
function jE(e, t) {
  t.eachSeries(function(r) {
    var n = r.coordinateSystem, i = r.get(["tooltip", "trigger"], !0), a = r.get(["tooltip", "show"], !0);
    !n || !n.model || i === "none" || i === !1 || i === "item" || a === !1 || r.get(["axisPointer", "show"], !0) === !1 || I(e.coordSysAxesInfo[ro(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(r), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += r.getData().count());
    });
  });
}
function JE(e, t) {
  for (var r = t.model, n = t.dim, i = 0; i < e.length; i++) {
    var a = e[i] || {};
    if (bf(a[n + "AxisId"], r.id) || bf(a[n + "AxisIndex"], r.componentIndex) || bf(a[n + "AxisName"], r.name))
      return i;
  }
}
function bf(e, t) {
  return e === "all" || W(e) && ct(e, t) >= 0 || e === t;
}
function tR(e) {
  var t = Fc(e);
  if (t) {
    var r = t.axisPointerModel, n = t.axis.scale, i = r.option, a = r.get("status"), o = r.get("value");
    o != null && (o = n.parse(o));
    var s = jh(r);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Fc(e) {
  var t = (e.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[ro(e)];
}
function eR(e) {
  var t = Fc(e);
  return t && t.axisPointerModel;
}
function jh(e) {
  return !!e.get(["handle", "show"]);
}
function ro(e) {
  return e.type + "||" + e.id;
}
var Am = {}, R1 = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.render = function(r, n, i, a) {
      this.axisPointerClass && tR(r), e.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(r, i, !0);
    }, t.prototype.updateAxisPointer = function(r, n, i, a) {
      this._doUpdateAxisPointerClass(r, i, !1);
    }, t.prototype.remove = function(r, n) {
      var i = this._axisPointer;
      i && i.remove(n);
    }, t.prototype.dispose = function(r, n) {
      this._disposeAxisPointer(n), e.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(r, n, i) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = eR(r);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(r, o, n, i) : this._disposeAxisPointer(n);
      }
    }, t.prototype._disposeAxisPointer = function(r) {
      this._axisPointer && this._axisPointer.dispose(r), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(r, n) {
      Am[r] = n;
    }, t.getAxisPointerClass = function(r) {
      return r && Am[r];
    }, t.type = "axis", t;
  }(We)
), Jh = _t();
function rR(e, t, r, n) {
  var i = r.axis;
  if (!i.scale.isBlank()) {
    var a = r.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = n.coordinateSystem.getRect(), l = i.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (l.length) {
      var f = s.length, h = Jh(e).splitAreaColors, c = j(), v = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var p = h.get(l[d].tickValue);
          if (p != null) {
            v = (p + (f - 1) * d) % f;
            break;
          }
        }
      var g = i.toGlobalCoord(l[0].coord), m = o.getAreaStyle();
      s = W(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var y = i.toGlobalCoord(l[d].coord), _ = void 0, S = void 0, b = void 0, w = void 0;
        i.isHorizontal() ? (_ = g, S = u.y, b = y - _, w = u.height, g = _ + b) : (_ = u.x, S = g, b = u.width, w = y - S, g = S + w);
        var T = l[d - 1].tickValue;
        T != null && c.set(T, v), t.add(new Lt({
          anid: T != null ? "area_" + T : null,
          shape: {
            x: _,
            y: S,
            width: b,
            height: w
          },
          style: yt({
            fill: s[v]
          }, m),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      Jh(e).splitAreaColors = c;
    }
  }
}
function nR(e) {
  Jh(e).splitAreaColors = null;
}
var iR = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], O1 = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r.axisPointerClass = "CartesianAxisPointer", r;
    }
    return t.prototype.render = function(r, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new Ft(), this.group.add(this._axisGroup), !!Ja(r)) {
        this._axisGroup.add(r.axis.axisBuilder.group), I(iR, function(u) {
          r.get([u, "show"]) && aR[u](this, this._axisGroup, r, r.getCoordSysModel(), i);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || F0(o, this._axisGroup, r), e.prototype.render.call(this, r, n, i, a);
      }
    }, t.prototype.remove = function() {
      nR(this);
    }, t.type = "cartesianAxis", t;
  }(R1)
), aR = {
  splitLine: function(e, t, r, n, i) {
    var a = r.axis;
    if (!a.scale.isBlank()) {
      var o = r.getModel("splitLine"), s = o.getModel("lineStyle"), u = s.get("color"), l = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      u = W(u) ? u : [u];
      for (var h = n.coordinateSystem.getRect(), c = a.isHorizontal(), v = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), p = [], g = [], m = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !l || y === d.length - 1 && !f)) {
          var S = d[y].tickValue;
          c ? (p[0] = _, p[1] = h.y, g[0] = _, g[1] = h.y + h.height) : (p[0] = h.x, p[1] = _, g[0] = h.x + h.width, g[1] = _);
          var b = v++ % u.length, w = new qr({
            anid: S != null ? "line_" + S : null,
            autoBatch: !0,
            shape: {
              x1: p[0],
              y1: p[1],
              x2: g[0],
              y2: g[1]
            },
            style: yt({
              stroke: u[b]
            }, m),
            silent: !0
          });
          $a(w.shape, m.lineWidth), t.add(w);
        }
      }
    }
  },
  minorSplitLine: function(e, t, r, n, i) {
    var a = r.axis, o = r.getModel("minorSplitLine"), s = o.getModel("lineStyle"), u = n.coordinateSystem.getRect(), l = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var h = [], c = [], v = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var p = 0; p < f[d].length; p++) {
          var g = a.toGlobalCoord(f[d][p].coord);
          l ? (h[0] = g, h[1] = u.y, c[0] = g, c[1] = u.y + u.height) : (h[0] = u.x, h[1] = g, c[0] = u.x + u.width, c[1] = g);
          var m = new qr({
            anid: "minor_line_" + f[d][p].tickValue,
            autoBatch: !0,
            shape: {
              x1: h[0],
              y1: h[1],
              x2: c[0],
              y2: c[1]
            },
            style: v,
            silent: !0
          });
          $a(m.shape, v.lineWidth), t.add(m);
        }
  },
  splitArea: function(e, t, r, n, i) {
    rR(e, t, r, n);
  },
  breakArea: function(e, t, r, n, i) {
    r.axis.scale;
  }
}, k1 = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.type = "xAxis", t;
  }(O1)
), oR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = k1.type, r;
    }
    return t.type = "yAxis", t;
  }(O1)
), sR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = "grid", r;
    }
    return t.prototype.render = function(r, n) {
      this.group.removeAll(), r.get("show") && this.group.add(new Lt({
        shape: r.coordinateSystem.getRect(),
        style: yt({
          fill: r.get("backgroundColor")
        }, r.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  }(We)
), Mm = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function uR(e) {
  e.registerComponentView(sR), e.registerComponentModel(CL), e.registerCoordinateSystem("cartesian2d", HE), gm(e, "x", Qh, Mm), gm(e, "y", Qh, Mm), e.registerComponentView(k1), e.registerComponentView(oR), e.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var Ln = _t(), Im = ot, wf = St, lR = (
  /** @class */
  function() {
    function e() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return e.prototype.render = function(t, r, n, i) {
      var a = r.get("value"), o = r.get("status");
      if (this._axisModel = t, this._axisPointerModel = r, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, u = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), u && u.hide();
          return;
        }
        s && s.show(), u && u.show();
        var l = {};
        this.makeElOption(l, a, t, r, n);
        var f = l.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(t, r);
        if (!s)
          s = this._group = new Ft(), this.createPointerEl(s, l, t, r), this.createLabelEl(s, l, t, r), n.getZr().add(s);
        else {
          var c = Rt(Lm, r, h);
          this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, r);
        }
        Em(s, r, !0), this._renderHandle(a);
      }
    }, e.prototype.remove = function(t) {
      this.clear(t);
    }, e.prototype.dispose = function(t) {
      this.clear(t);
    }, e.prototype.determineAnimation = function(t, r) {
      var n = r.get("animation"), i = t.axis, a = i.type === "category", o = r.get("snap");
      if (!o && !a)
        return !1;
      if (n === "auto" || n == null) {
        var s = this.animationThreshold;
        if (a && Xi(i).w > s)
          return !0;
        if (o) {
          var u = Fc(t).seriesDataCount, l = i.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return n === !0;
    }, e.prototype.makeElOption = function(t, r, n, i, a) {
    }, e.prototype.createPointerEl = function(t, r, n, i) {
      var a = r.pointer;
      if (a) {
        var o = Ln(t).pointerEl = new EC[a.type](Im(r.pointer));
        t.add(o);
      }
    }, e.prototype.createLabelEl = function(t, r, n, i) {
      if (r.label) {
        var a = Ln(t).labelEl = new Wt(Im(r.label));
        t.add(a), Pm(a, i);
      }
    }, e.prototype.updatePointerEl = function(t, r, n) {
      var i = Ln(t).pointerEl;
      i && r.pointer && (i.setStyle(r.pointer.style), n(i, {
        shape: r.pointer.shape
      }));
    }, e.prototype.updateLabelEl = function(t, r, n, i) {
      var a = Ln(t).labelEl;
      a && (a.setStyle(r.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: r.label.x,
        y: r.label.y
      }), Pm(a, i));
    }, e.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var r = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = r.getModel("handle"), o = r.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = Yv(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            US(l.event);
          },
          onmousedown: wf(this._onHandleDragMove, this, 0, 0),
          drift: wf(this._onHandleDragMove, this),
          ondragend: wf(this._onHandleDragEnd, this)
        }), n.add(i)), Em(i, r, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        W(u) || (u = [u, u]), i.scaleX = u[0] / 2, i.scaleY = u[1] / 2, kS(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, e.prototype._moveHandleToValue = function(t, r) {
      Lm(this._axisPointerModel, !r && this._moveAnimation, this._handle, Tf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, e.prototype._onHandleDragMove = function(t, r) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(Tf(n), [t, r], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(Tf(i)), Ln(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, e.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var r = this._payloadInfo, n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: r.cursorPoint[0],
          y: r.cursorPoint[1],
          tooltipOption: r.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        });
      }
    }, e.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var r = this._axisPointerModel.get("value");
        this._moveHandleToValue(r), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, e.prototype.clear = function(t) {
      this._lastValue = null, this._lastStatus = null;
      var r = t.getZr(), n = this._group, i = this._handle;
      r && n && (this._lastGraphicKey = null, n && r.remove(n), i && r.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), Bh(this, "_doDispatchAxisPointer");
    }, e.prototype.doClear = function() {
    }, e.prototype.buildLabel = function(t, r, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: r[n],
        height: r[1 - n]
      };
    }, e;
  }()
);
function Lm(e, t, r, n) {
  N1(Ln(r).lastProp, n) || (Ln(r).lastProp = n, t ? re(r, n, e) : (r.stopAnimation(), r.attr(n)));
}
function N1(e, t) {
  if (K(e) && K(t)) {
    var r = !0;
    return I(t, function(n, i) {
      r = r && N1(e[i], n);
    }), !!r;
  } else
    return e === t;
}
function Pm(e, t) {
  e[t.get(["label", "show"]) ? "show" : "hide"]();
}
function Tf(e) {
  return {
    x: e.x || 0,
    y: e.y || 0,
    rotation: e.rotation || 0
  };
}
function Em(e, t, r) {
  var n = t.get("z"), i = t.get("zlevel");
  e && e.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = r);
  });
}
function fR(e) {
  var t = e.get("type"), r = e.getModel(t + "Style"), n;
  return t === "line" ? (n = r.getLineStyle(), n.fill = null) : t === "shadow" && (n = r.getAreaStyle(), n.stroke = null), n;
}
function hR(e, t, r, n, i) {
  var a = r.get("value"), o = B1(a, t.axis, t.ecModel, r.get("seriesDataIndices"), {
    precision: r.get(["label", "precision"]),
    formatter: r.get(["label", "formatter"])
  }), s = r.getModel("label"), u = Zu(s.get("padding") || 0), l = s.getFont(), f = Cy(o, l), h = i.position, c = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = i.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var p = i.verticalAlign;
  p === "bottom" && (h[1] -= v), p === "middle" && (h[1] -= v / 2), vR(h, c, v, n);
  var g = s.get("backgroundColor");
  (!g || g === "auto") && (g = t.get(["axisLine", "lineStyle", "color"])), e.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: Kr(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: g
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function vR(e, t, r, n) {
  var i = n.getWidth(), a = n.getHeight();
  e[0] = Math.min(e[0] + t, i) - t, e[1] = Math.min(e[1] + r, a) - r, e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0);
}
function B1(e, t, r, n, i) {
  e = t.scale.parse(e);
  var a = t.scale.getLabel({
    value: e
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: i.precision
  }), o = i.formatter;
  if (o) {
    var s = {
      value: uu(t, {
        value: e
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    I(n, function(u) {
      var l = r.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), Y(o) ? a = o.replace("{value}", a) : et(o) && (a = o(s));
  }
  return a;
}
function F1(e, t, r) {
  var n = ar();
  return yv(n, n, r.rotation), Ff(n, n, r.position), Wv([e.dataToCoord(t), (r.labelOffset || 0) + (r.labelDirection || 1) * (r.labelMargin || 0)], n);
}
function cR(e, t, r, n, i, a) {
  var o = Yr.innerTextLayout(r.rotation, 0, r.labelDirection);
  r.labelMargin = i.get(["label", "margin"]), hR(t, n, i, a, {
    position: F1(n.axis, e, r),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function dR(e, t, r) {
  return r = r || 0, {
    x1: e[r],
    y1: e[1 - r],
    x2: t[r],
    y2: t[1 - r]
  };
}
function pR(e, t, r) {
  return r = r || 0, {
    x: e[r],
    y: e[1 - r],
    width: t[r],
    height: t[1 - r]
  };
}
function gR(e, t, r) {
  return Xi(e, {
    fromStat: {
      sers: Z(t, function(n) {
        return r.getSeriesByIndex(n.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function mR(e, t, r) {
  return [ht(Zt(t[0], t[1]), e - r / 2), Zt(e + r / 2, ht(t[0], t[1]))];
}
var yR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(r, n, i, a, o) {
      var s = i.axis, u = s.grid, l = a.get("type"), f = s.getGlobalExtent(), h = Rm(u, s).getOtherAxis(s).getGlobalExtent(), c = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var v = fR(a), d = _R[l](s, c, f, h, a.get("seriesDataIndices"), a.ecModel);
        d.style = v, r.graphicKey = d.type, r.pointer = d;
      }
      var p = cu(u.getRect(), i);
      cR(n, r, p, i, a, o);
    }, t.prototype.getHandleTransform = function(r, n, i) {
      var a = cu(n.axis.grid.getRect(), n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = F1(n.axis, r, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(r, n, i, a) {
      var o = i.axis, s = o.grid, u = o.getGlobalExtent(!0), l = Rm(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [r.x, r.y];
      h[f] += n[f], h[f] = Zt(u[1], h[f]), h[f] = ht(u[0], h[f]);
      var c = (l[1] + l[0]) / 2, v = [c, c];
      v[f] = h[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: r.rotation,
        cursorPoint: v,
        tooltipOption: d[f]
      };
    }, t;
  }(lR)
);
function Rm(e, t) {
  var r = {};
  return r[t.dim + "AxisIndex"] = t.index, e.getCartesian(r);
}
var _R = {
  line: function(e, t, r, n) {
    var i = dR([t, n[0]], [t, n[1]], Om(e));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(e, t, r, n, i, a) {
    var o = gR(e, i, a), s = n[1] - n[0], u = mR(t, r, o), l = u[0], f = u[1];
    return {
      type: "Rect",
      shape: pR([l, n[0]], [f - l, s], Om(e))
    };
  }
};
function Om(e) {
  return e.dim === "x" ? 0 : 1;
}
var SR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.type = "axisPointer", t.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: q.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: q.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: q.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: q.color.accent60,
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: q.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, t;
  }(pt)
), _r = _t(), bR = I;
function z1(e, t, r) {
  if (!nt.node) {
    var n = t.getZr();
    _r(n).records || (_r(n).records = {}), wR(n, t);
    var i = _r(n).records[e] || (_r(n).records[e] = {});
    i.handler = r;
  }
}
function wR(e, t) {
  if (_r(e).initialized)
    return;
  _r(e).initialized = !0, r("click", Rt(xf, "click")), r("mousemove", Rt(xf, "mousemove")), r("mousewheel", Rt(xf, "mousewheel")), r("globalout", xR);
  function r(n, i) {
    e.on(n, function(a) {
      var o = CR(t);
      bR(_r(e).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), TR(o.pendings, t);
    });
  }
}
function TR(e, t) {
  var r = e.showTip.length, n = e.hideTip.length, i;
  r ? i = e.showTip[r - 1] : n && (i = e.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function xR(e, t, r) {
  e.handler("leave", null, r);
}
function xf(e, t, r, n) {
  t.handler(e, r, n);
}
function CR(e) {
  var t = {
    showTip: [],
    hideTip: []
  }, r = function(n) {
    var i = t[n.type];
    i ? i.push(n) : (n.dispatchAction = r, e.dispatchAction(n));
  };
  return {
    dispatchAction: r,
    pendings: t
  };
}
function tv(e, t) {
  if (!nt.node) {
    var r = t.getZr(), n = (_r(r).records || {})[e];
    n && (_r(r).records[e] = null);
  }
}
var DR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.render = function(r, n, i) {
      var a = n.getComponent("tooltip"), o = r.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      z1("axisPointer", i, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, t.prototype.remove = function(r, n) {
      tv("axisPointer", n);
    }, t.prototype.dispose = function(r, n) {
      tv("axisPointer", n);
    }, t.type = "axisPointer", t;
  }(We)
);
function G1(e, t) {
  var r = [], n = e.seriesIndex, i;
  if (n == null || !(i = t.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = Wn(a, e);
  if (o == null || o < 0 || W(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = i.coordinateSystem;
  if (i.getTooltipPosition)
    r = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (e.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, c = l.dim, v = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(c), p = [];
      p[v] = a.get(d, o), p[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), r = u.dataToPoint(p) || [];
    } else
      r = u.dataToPoint(a.getValues(Z(u.dimensions, function(m) {
        return a.mapDimension(m);
      }), o)) || [];
  else if (s) {
    var g = s.getBoundingRect().clone();
    g.applyTransform(s.transform), r = [g.x + g.width / 2, g.y + g.height / 2];
  }
  return {
    point: r,
    el: s
  };
}
var km = _t();
function AR(e, t, r) {
  var n = e.currTrigger, i = [e.x, e.y], a = e, o = e.dispatchAction || St(r.dispatchAction, r), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    ks(i) && (i = G1({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var u = ks(i), l = a.axesInfo, f = s.axesInfo, h = n === "leave" || ks(i), c = {}, v = {}, d = {
      list: [],
      map: {}
    }, p = {
      showPointer: Rt(IR, v),
      showTooltip: Rt(LR, d)
    };
    I(s.coordSysMap, function(m, y) {
      var _ = u || m.containPoint(i);
      I(s.coordSysAxesInfo[y], function(S, b) {
        var w = S.axis, T = OR(l, S);
        if (!h && _ && (!l || T)) {
          var x = T && T.value;
          x == null && !u && (x = w.pointToData(i)), x != null && Nm(S, x, p, !1, c);
        }
      });
    });
    var g = {};
    return I(f, function(m, y) {
      var _ = m.linkGroup;
      _ && !v[y] && I(_.axesInfo, function(S, b) {
        var w = v[b];
        if (S !== m && w) {
          var T = w.value;
          _.mapper && (T = m.axis.scale.parse(_.mapper(T, Bm(S), Bm(m)))), g[m.key] = T;
        }
      });
    }), I(g, function(m, y) {
      Nm(f[y], m, p, !0, c);
    }), PR(v, f, c), ER(d, i, e, o), RR(f, o, r), c;
  }
}
function Nm(e, t, r, n, i) {
  var a = e.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!e.involveSeries) {
      r.showPointer(e, t);
      return;
    }
    var o = MR(t, e), s = o.payloadBatch, u = o.snapToValue;
    s[0] && i.seriesIndex == null && N(i, s[0]), !n && e.snap && a.containData(u) && u != null && (t = u), r.showPointer(e, t, s), r.showTooltip(e, o, u);
  }
}
function MR(e, t) {
  var r = t.axis, n = r.dim, i = e, a = [], o = Number.MAX_VALUE, s = -1;
  return I(t.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(n), h, c;
    if (u.getAxisTooltipData) {
      var v = u.getAxisTooltipData(f, e, r);
      c = v.dataIndices, h = v.nestestValue;
    } else {
      if (c = u.indicesOfNearest(
        n,
        f[0],
        e,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        r.type === "category" ? 0.5 : null
      ), !c.length)
        return;
      h = u.getData().get(f[0], c[0]);
    }
    if (Pe(h)) {
      var d = e - h, p = Math.abs(d);
      p <= o && ((p < o || d >= 0 && s < 0) && (o = p, s = d, i = h, a.length = 0), I(c, function(g) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: g,
          dataIndex: u.getData().getRawIndex(g)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function IR(e, t, r, n) {
  e[t.key] = {
    value: r,
    payloadBatch: n
  };
}
function LR(e, t, r, n) {
  var i = r.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !i.length)) {
    var u = t.coordSys.model, l = ro(u), f = e.map[l];
    f || (f = e.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, e.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: n,
      // Caution: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: i.slice()
    });
  }
}
function PR(e, t, r) {
  var n = r.axesInfo = [];
  I(t, function(i, a) {
    var o = i.axisPointerModel.option, s = e[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function ER(e, t, r, n) {
  if (ks(t) || !e.list.length) {
    n({
      type: "hideTip"
    });
    return;
  }
  var i = ((e.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: r.tooltipOption,
    position: r.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: e.list
  });
}
function RR(e, t, r) {
  var n = r.getZr(), i = "axisPointerLastHighlights", a = km(n)[i] || {}, o = km(n)[i] = {};
  I(e, function(f, h) {
    var c = f.axisPointerModel.option;
    c.status === "show" && f.triggerEmphasis && I(c.seriesDataIndices, function(v) {
      o[v.seriesIndex + "|" + v.dataIndex] = v;
    });
  });
  var s = [], u = [];
  function l(f) {
    return {
      seriesIndex: f.seriesIndex,
      dataIndex: f.dataIndex
    };
  }
  I(a, function(f, h) {
    !o[h] && u.push(l(f));
  }), I(o, function(f, h) {
    !a[h] && s.push(l(f));
  }), u.length && r.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: u
  }), s.length && r.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function OR(e, t) {
  for (var r = 0; r < (e || []).length; r++) {
    var n = e[r];
    if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function Bm(e) {
  var t = e.axis.model, r = {}, n = r.axisDim = e.axis.dim;
  return r.axisIndex = r[n + "AxisIndex"] = t.componentIndex, r.axisName = r[n + "AxisName"] = t.name, r.axisId = r[n + "AxisId"] = t.id, r;
}
function ks(e) {
  return !e || e[0] == null || isNaN(e[0]) || e[1] == null || isNaN(e[1]);
}
function V1(e) {
  R1.registerAxisPointerClass("CartesianAxisPointer", yR), e.registerComponentModel(SR), e.registerComponentView(DR), e.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var r = t.axisPointer.link;
      r && !W(r) && (t.axisPointer.link = [r]);
    }
  }), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(t, r) {
      t.getComponent("axisPointer").coordSysAxesInfo = qE(t, r);
    }
  }), e.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, AR);
}
function kR(e) {
  tn(uR), tn(V1);
}
function NR(e, t) {
  var r = Zu(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
  n.fill = t.get("backgroundColor");
  var i = new Lt({
    shape: {
      x: e.x - r[3],
      y: e.y - r[0],
      width: e.width + r[1] + r[3],
      height: e.height + r[0] + r[2],
      r: t.get("borderRadius")
    },
    style: n,
    silent: !0,
    z2: -1
  });
  return i;
}
var BR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click|mousewheel",
      alwaysShowContent: !1,
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaults to `false` (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      displayTransition: !0,
      enterable: !1,
      backgroundColor: q.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: q.color.border,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: q.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: q.color.tertiary,
        fontSize: 14
      }
    }, t;
  }(pt)
);
function H1(e) {
  var t = e.get("confine");
  return t != null ? !!t : e.get("renderMode") === "richText";
}
function U1(e) {
  if (nt.domSupported) {
    for (var t = document.documentElement.style, r = 0, n = e.length; r < n; r++)
      if (e[r] in t)
        return e[r];
  }
}
var W1 = U1(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), FR = U1(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function Y1(e, t) {
  if (!e)
    return t;
  t = A_(t, !0);
  var r = e.indexOf(t);
  return e = r === -1 ? t : "-" + e.slice(0, r) + "-" + t, e.toLowerCase();
}
function zR(e, t) {
  var r = e.currentStyle || document.defaultView && document.defaultView.getComputedStyle(e);
  return r ? r[t] : null;
}
var GR = Y1(FR, "transition"), zc = Y1(W1, "transform"), VR = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (nt.transform3dSupported ? "will-change:transform;" : "");
function HR(e) {
  return e = e === "left" ? "right" : e === "right" ? "left" : e === "top" ? "bottom" : "top", e;
}
function UR(e, t, r) {
  if (!Y(r) || r === "inside")
    return "";
  var n = e.get("backgroundColor"), i = e.get("borderWidth");
  t = Yn(t);
  var a = HR(r), o = Math.max(Math.round(i) * 1.5, 6), s = "", u = zc + ":", l;
  ct(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + i, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (c - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + i + "px;", p = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + p.join("") + '"></div>';
}
function WR(e, t, r) {
  var n = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
  return r && (i = " " + e / 2 + "s " + n, a = "opacity" + i + ",visibility" + i), t || (i = " " + e + "s " + n, a += (a.length ? "," : "") + (nt.transformSupported ? "" + zc + i : ",left" + i + ",top" + i)), GR + ":" + a;
}
function Fm(e, t, r) {
  var n = e.toFixed(0) + "px", i = t.toFixed(0) + "px";
  if (!nt.transformSupported)
    return r ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = nt.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return r ? "top:0;left:0;" + zc + ":" + o + ";" : [["top", 0], ["left", 0], [W1, o]];
}
function YR(e) {
  var t = [], r = e.get("fontSize"), n = e.getTextColor();
  n && t.push("color:" + n), t.push("font:" + e.getFont());
  var i = $(e.get("lineHeight"), Math.round(r * 3 / 2));
  r && t.push("line-height:" + i + "px");
  var a = e.get("textShadowColor"), o = e.get("textShadowBlur") || 0, s = e.get("textShadowOffsetX") || 0, u = e.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), I(["decoration", "align"], function(l) {
    var f = e.get(l);
    f && t.push("text-" + l + ":" + f);
  }), t.join(";");
}
function XR(e, t, r, n) {
  var i = [], a = e.get("transitionDuration"), o = e.get("backgroundColor"), s = e.get("shadowBlur"), u = e.get("shadowColor"), l = e.get("shadowOffsetX"), f = e.get("shadowOffsetY"), h = e.getModel("textStyle"), c = k_(e, "html"), v = l + "px " + f + "px " + s + "px " + u;
  return i.push("box-shadow:" + v), t && a > 0 && i.push(WR(a, r, n)), o && i.push("background-color:" + o), I(["width", "color", "radius"], function(d) {
    var p = "border-" + d, g = A_(p), m = e.get(g);
    m != null && i.push(p + ":" + m + (d === "color" ? "" : "px"));
  }), i.push(YR(h)), c != null && i.push("padding:" + Zu(c).join("px ") + "px"), i.join(";") + ";";
}
function zm(e, t, r, n, i) {
  var a = t && t.painter;
  if (r) {
    var o = a && a.getViewportRoot();
    o && BD(e, o, r, n, i);
  } else {
    e[0] = n, e[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (e[0] += s.offsetLeft, e[1] += s.offsetTop);
  }
  e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
var $R = (
  /** @class */
  function() {
    function e(t, r) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, nt.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = t.getZr(), a = r.appendTo, o = a && (Y(a) ? document.querySelector(a) : Fa(a) ? a : et(a) && a(t.getDom()));
      zm(this._styleCoord, i, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(n), this._api = t, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = i.handler, f = i.painter.getViewportRoot();
          me(f, u, !0), l.dispatch("mousemove", u);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return e.prototype.update = function(t) {
      if (!this._container) {
        var r = this._api.getDom(), n = zR(r, "position"), i = r.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = t.get("displayTransition") && t.get("transitionDuration") > 0, this.el.className = t.get("className") || "";
    }, e.prototype.show = function(t, r) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = VR + XR(t, !this._firstShow, this._longHide, this._enableDisplayTransition) + Fm(a[0], a[1], !0) + ("border-color:" + Yn(r) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, e.prototype.setContent = function(t, r, n, i, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (Y(a) && n.get("trigger") === "item" && !H1(n) && (s = UR(n, i, a)), Y(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", W(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          Fa(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          l.innerHTML = s, o.appendChild(l);
        }
      }
    }, e.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, e.prototype.getSize = function() {
      var t = this.el;
      return t ? [t.offsetWidth, t.offsetHeight] : [0, 0];
    }, e.prototype.moveTo = function(t, r) {
      if (this.el) {
        var n = this._styleCoord;
        if (zm(n, this._zr, this._container, t, r), n[0] != null && n[1] != null) {
          var i = this.el.style, a = Fm(n[0], n[1]);
          I(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, e.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), r * this._zr.getHeight());
    }, e.prototype.hide = function() {
      var t = this, r = this.el.style;
      this._enableDisplayTransition ? (r.visibility = "hidden", r.opacity = "0") : r.display = "none", nt.transform3dSupported && (r.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, e.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(St(this.hide, this), t)) : this.hide());
    }, e.prototype.isShow = function() {
      return this._show;
    }, e.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this._zr;
      FD(t && t.painter && t.painter.getViewportRoot(), this._container);
      var r = this.el;
      if (r) {
        r.onmouseenter = r.onmousemove = r.onmouseleave = null;
        var n = r.parentNode;
        n && n.removeChild(r);
      }
      this.el = this._container = null;
    }, e;
  }()
), ZR = (
  /** @class */
  function() {
    function e(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), Vm(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return e.prototype.update = function(t) {
      var r = t.get("alwaysShowContent");
      r && this._moveIfResized(), this._alwaysShowContent = r;
    }, e.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, e.prototype.setContent = function(t, r, n, i, a) {
      var o = this;
      K(t) && se(""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new Wt({
        style: {
          rich: r.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: k_(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), I(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = n.get(l);
      }), I(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
        o.el.style[l] = s.get(l) || 0;
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
      });
    }, e.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, e.prototype.getSize = function() {
      var t = this.el, r = this.el.getBoundingRect(), n = Gm(t.style);
      return [r.width + n.left + n.right, r.height + n.top + n.bottom];
    }, e.prototype.moveTo = function(t, r) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        Vm(i, this._zr, t, r), t = i[0], r = i[1];
        var a = n.style, o = Or(a.borderWidth || 0), s = Gm(a);
        n.x = t + o + s.left, n.y = r + o + s.top, n.markRedraw();
      }
    }, e.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), r * this._zr.getHeight());
    }, e.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, e.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(St(this.hide, this), t)) : this.hide());
    }, e.prototype.isShow = function() {
      return this._show;
    }, e.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, e;
  }()
);
function Or(e) {
  return Math.max(0, e);
}
function Gm(e) {
  var t = Or(e.shadowBlur || 0), r = Or(e.shadowOffsetX || 0), n = Or(e.shadowOffsetY || 0);
  return {
    left: Or(t - r),
    right: Or(t + r),
    top: Or(t - n),
    bottom: Or(t + n)
  };
}
function Vm(e, t, r, n) {
  e[0] = r, e[1] = n, e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
var qR = new Lt({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), KR = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.init = function(r, n) {
      if (!(nt.node || !n.getDom())) {
        var i = r.getComponent("tooltip"), a = this._renderMode = ex(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new ZR(n) : new $R(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(r, n, i) {
      if (!(nt.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = r, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(r), a.setEnterable(r.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && r.get("transitionDuration") ? kS(this, "_updatePosition", 50, "fixRate") : Bh(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var r = this._tooltipModel, n = r.get("triggerOn");
      z1("itemTooltip", this._api, St(function(i, a, o) {
        n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var r = this._tooltipModel, n = this._ecModel, i = this._api, a = r.get("triggerOn");
      if (r.get("trigger") !== "axis" && (this._lastDataByCoordSys = null, this._cbParamsList = null), this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !i.isDisposed() && o.manuallyShowTip(r, n, i, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(r, n, i, a) {
      if (!(a.from === this.uid || nt.node || !i.getDom())) {
        var o = Hm(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, u = tO(a, n, i);
        if (u) {
          var l = u.el.getBoundingRect().clone();
          l.applyTransform(u.el.transform), this._tryShow({
            offsetX: l.x + l.width / 2,
            offsetY: l.y + l.height / 2,
            target: u.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = qR;
          f.x = a.x, f.y = a.y, f.update(), ut(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(r, n, i, a))
            return;
          var h = G1(a, n), c = h.point[0], v = h.point[1];
          c != null && v != null && this._tryShow({
            offsetX: c,
            offsetY: v,
            target: h.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (i.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: i.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, t.prototype.manuallyHideTip = function(r, n, i, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(Hm(a, i));
    }, t.prototype._manuallyAxisShowTip = function(r, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = n.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = ha([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
          if (h.get("trigger") === "axis")
            return i.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(r, n) {
      var i = r.target, a = this._tooltipModel;
      if (a) {
        this._lastX = r.offsetX, this._lastY = r.offsetY;
        var o = r.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, r);
        else if (i) {
          var s = ut(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var u, l;
          ba(i, function(f) {
            if (f.tooltipDisabled)
              return u = l = null, !0;
            u || l || (ut(f).dataIndex != null ? u = f : ut(f).tooltipConfig != null && (l = f));
          }, !0), u ? this._showSeriesItemTooltip(r, u, n) : l ? this._showComponentItemTooltip(r, l, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(n);
      }
    }, t.prototype._showOrMove = function(r, n) {
      var i = r.get("showDelay");
      n = St(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, t.prototype._showAxisTooltip = function(r, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = ha([n.tooltipOption], a), u = this._renderMode, l = [], f = Ka("section", {
        blocks: [],
        noHeader: !0
      }), h = [], c = new $l();
      I(r, function(y) {
        I(y.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), b = _.value, w = S.axis, T = w.scale.parse(b);
          if (!(!S || b == null)) {
            var x = B1(b, w, i, _.seriesDataIndices, _.valueLabelOpt), D = Ka("section", {
              header: x,
              noHeader: !nr(x),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(D), I(_.seriesDataIndices, function(C) {
              var A = i.getSeriesByIndex(C.seriesIndex), L = C.dataIndexInside, M = A.getDataParams(L);
              if (!(M.dataIndex < 0)) {
                M.axisDim = _.axisDim, M.axisIndex = _.axisIndex, M.axisType = _.axisType, M.axisId = _.axisId, M.axisValue = uu(S.axis, {
                  value: T
                }), M.axisValueLabel = x, M.marker = c.makeTooltipMarker("item", Yn(M.color), u);
                var P = Mp(A.formatTooltip(L, !0, null)), E = P.frag;
                if (E) {
                  var R = ha([A], a).get("valueFormatter");
                  D.blocks.push(R ? N({
                    valueFormatter: R
                  }, E) : E);
                }
                P.text && h.push(P.text), l.push(M);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var v = n.position, d = s.get("order"), p = Ep(f, c, u, d, i.get("useUTC"), s.get("textStyle"));
      p && h.unshift(p);
      var g = u === "richText" ? `

` : "<br/>", m = h.join(g);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(r, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, m, l, Math.random() + "", o[0], o[1], v, null, c);
      });
    }, t.prototype._showSeriesItemTooltip = function(r, n, i) {
      var a = this._ecModel, o = ut(n), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, c = l.getData(h), v = this._renderMode, d = r.positionDefault, p = ha([c.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), g = p.get("trigger");
      if (!(g != null && g !== "item")) {
        var m = l.getDataParams(f, h), y = new $l();
        m.marker = y.makeTooltipMarker("item", Yn(m.color), v);
        var _ = Mp(l.formatTooltip(f, !1, h)), S = p.get("order"), b = p.get("valueFormatter"), w = _.frag, T = w ? Ep(b ? N({
          valueFormatter: b
        }, w) : w, y, v, S, a.get("useUTC"), p.get("textStyle")) : _.text, x = "item_" + l.name + "_" + f;
        this._showOrMove(p, function() {
          this._showTooltipContent(p, T, m, x, r.offsetX, r.offsetY, r.position, r.target, y);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: c.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(r, n, i) {
      var a = this._renderMode === "html", o = ut(n), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (Y(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = ot(u), u.content = jt(u.content));
      var h = [u], c = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      c && h.push(c), h.push({
        formatter: u.content
      });
      var v = r.positionDefault, d = ha(h, this._tooltipModel, v ? {
        position: v
      } : null), p = d.get("content"), g = Math.random() + "", m = new $l();
      this._showOrMove(d, function() {
        var y = ot(d.get("formatterParams") || {});
        this._showTooltipContent(d, p, y, g, r.offsetX, r.offsetY, r.position, n, m);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(r, n, i, a, o, s, u, l, f) {
      if (this._ticket = "", !(!r.get("showContent") || !r.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(r.get("enterable"));
        var c = r.get("formatter");
        u = u || r.get("position");
        var v = n, d = this._getNearestPoint([o, s], i, r.get("trigger"), r.get("borderColor"), r.get("defaultBorderColor", !0)), p = d.color;
        if (c)
          if (Y(c)) {
            var g = r.ecModel.get("useUTC"), m = W(i) ? i[0] : i, y = m && m.axisType && m.axisType.indexOf("time") >= 0;
            v = c, y && (v = $u(m.axisValue, v, g)), v = M_(v, i, !0);
          } else if (et(c)) {
            var _ = St(function(S, b) {
              S === this._ticket && (h.setContent(b, f, r, p, u), this._updatePosition(r, u, o, s, h, i, l));
            }, this);
            this._ticket = a, v = c(i, a, _);
          } else
            v = c;
        h.setContent(v, f, r, p, u), h.show(r, p), this._updatePosition(r, u, o, s, h, i, l);
      }
    }, t.prototype._getNearestPoint = function(r, n, i, a, o) {
      if (i === "axis" || W(n))
        return {
          color: a || o
        };
      if (!W(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, t.prototype._updatePosition = function(r, n, i, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      n = n || r.get("position");
      var h = o.getSize(), c = r.get("align"), v = r.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), et(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), W(n))
        i = Tt(n[0], l), a = Tt(n[1], f);
      else if (K(n)) {
        var p = n;
        p.width = h[0], p.height = h[1];
        var g = Qr(p, {
          width: l,
          height: f
        });
        i = g.x, a = g.y, c = null, v = null;
      } else if (Y(n) && u) {
        var m = JR(n, d, h, r.get("borderWidth"));
        i = m[0], a = m[1];
      } else {
        var m = QR(i, a, o, l, f, c ? null : 20, v ? null : 20);
        i = m[0], a = m[1];
      }
      if (c && (i -= Um(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= Um(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), H1(r)) {
        var m = jR(i, a, o, l, f);
        i = m[0], a = m[1];
      }
      o.moveTo(i, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(r, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === r.length;
      return o && I(i, function(s, u) {
        var l = s.dataByAxis || [], f = r[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && I(l, function(c, v) {
          var d = h[v] || {}, p = c.seriesDataIndices || [], g = d.seriesDataIndices || [];
          o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && p.length === g.length, o && I(p, function(m, y) {
            var _ = g[y];
            o = o && m.seriesIndex === _.seriesIndex && m.dataIndex === _.dataIndex;
          }), a && I(c.seriesDataIndices, function(m) {
            var y = m.seriesIndex, _ = n[y], S = a[y];
            _ && S && S.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = r, this._cbParamsList = n, !!o;
    }, t.prototype._hide = function(r) {
      this._lastDataByCoordSys = null, this._cbParamsList = null, r({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(r, n) {
      nt.node || !n.getDom() || (Bh(this, "_updatePosition"), this._tooltipContent.dispose(), tv("itemTooltip", n), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, t.type = "tooltip", t;
  }(We)
);
function ha(e, t, r) {
  var n = t.ecModel, i;
  r ? (i = new Ct(r, n, n), i = new Ct(t.option, i, n)) : i = t;
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a];
    o && (o instanceof Ct && (o = o.get("tooltip", !0)), Y(o) && (o = {
      formatter: o
    }), o && (i = new Ct(o, i, n)));
  }
  return i;
}
function Hm(e, t) {
  return e.dispatchAction || St(t.dispatchAction, t);
}
function QR(e, t, r, n, i, a, o) {
  var s = r.getSize(), u = s[0], l = s[1];
  return a != null && (e + u + a + 2 > n ? e -= u + a : e += a), o != null && (t + l + o > i ? t -= l + o : t += o), [e, t];
}
function jR(e, t, r, n, i) {
  var a = r.getSize(), o = a[0], s = a[1];
  return e = Math.min(e + o, n) - o, t = Math.min(t + s, i) - s, e = Math.max(e, 0), t = Math.max(t, 0), [e, t];
}
function JR(e, t, r, n) {
  var i = r[0], a = r[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, u = 0, l = t.width, f = t.height;
  switch (e) {
    case "inside":
      s = t.x + l / 2 - i / 2, u = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + l / 2 - i / 2, u = t.y - a - o;
      break;
    case "bottom":
      s = t.x + l / 2 - i / 2, u = t.y + f + o;
      break;
    case "left":
      s = t.x - i - o, u = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + l + o, u = t.y + f / 2 - a / 2;
  }
  return [s, u];
}
function Um(e) {
  return e === "center" || e === "middle";
}
function tO(e, t, r) {
  var n = Mv(e).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = po(t, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = r.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = ut(l).tooltipConfig;
        if (f && f.name === e.name)
          return u = l, !0;
      }), u)
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: u
        };
    }
  }
}
function eO(e) {
  tn(V1), e.registerComponentModel(BR), e.registerComponentView(KR), e.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Ut), e.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Ut);
}
var rO = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, r;
    }
    return t.type = "title", t.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: "center",
      top: q.size.m,
      backgroundColor: q.color.transparent,
      borderColor: q.color.primary,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: q.color.primary
      },
      subtextStyle: {
        fontSize: 12,
        color: q.color.quaternary
      }
    }, t;
  }(pt)
), nO = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.render = function(r, n, i) {
      if (this.group.removeAll(), !!r.get("show")) {
        var a = this.group, o = r.getModel("textStyle"), s = r.getModel("subtextStyle"), u = r.get("textAlign"), l = $(r.get("textBaseline"), r.get("textVerticalAlign")), f = new Wt({
          style: Kr(o, {
            text: r.get("text"),
            fill: o.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), h = f.getBoundingRect(), c = r.get("subtext"), v = new Wt({
          style: Kr(s, {
            text: c,
            fill: s.getTextColor(),
            y: h.height + r.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), d = r.get("link"), p = r.get("sublink"), g = r.get("triggerEvent", !0);
        f.silent = !d && !g, v.silent = !p && !g, d && f.on("click", function() {
          Dp(d, "_" + r.get("target"));
        }), p && v.on("click", function() {
          Dp(p, "_" + r.get("subtarget"));
        }), ut(f).eventData = ut(v).eventData = g ? {
          componentType: "title",
          componentIndex: r.componentIndex
        } : null, a.add(f), c && a.add(v);
        var m = a.getBoundingRect(), y = r.getBoxLayoutParams();
        y.width = m.width, y.height = m.height;
        var _ = qu(r, i), S = Qr(y, _.refContainer, r.get("padding"));
        u || (u = r.get("left") || r.get("right"), u === "middle" && (u = "center"), u === "right" ? S.x += S.width : u === "center" && (S.x += S.width / 2)), l || (l = r.get("top") || r.get("bottom"), l === "center" && (l = "middle"), l === "bottom" ? S.y += S.height : l === "middle" && (S.y += S.height / 2), l = l || "top"), a.x = S.x, a.y = S.y, a.markRedraw();
        var b = {
          align: u,
          verticalAlign: l
        };
        f.setStyle(b), v.setStyle(b), m = a.getBoundingRect();
        var w = S.margin, T = r.getItemStyle(["color", "opacity"]);
        T.fill = r.get("backgroundColor");
        var x = new Lt({
          shape: {
            x: m.x - w[3],
            y: m.y - w[0],
            width: m.width + w[1] + w[3],
            height: m.height + w[0] + w[2],
            r: r.get("borderRadius")
          },
          style: T,
          subPixelOptimize: !0,
          silent: !0
        });
        a.add(x);
      }
    }, t.type = "title", t;
  }(We)
);
function iO(e) {
  e.registerComponentModel(rO), e.registerComponentView(nO);
}
var aO = function(e, t) {
  if (t === "all")
    return {
      type: "all",
      title: e.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: e.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, ev = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, r;
    }
    return t.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i), r.selected = r.selected || {}, this._updateSelector(r);
    }, t.prototype.mergeOption = function(r, n) {
      e.prototype.mergeOption.call(this, r, n), this._updateSelector(r);
    }, t.prototype._updateSelector = function(r) {
      var n = r.selector, i = this.ecModel;
      n === !0 && (n = r.selector = ["all", "inverse"]), W(n) && I(n, function(a, o) {
        Y(a) && (a = {
          type: a
        }), n[o] = gt(a, aO(i, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var r = this._data;
      if (r[0] && this.get("selectedMode") === "single") {
        for (var n = !1, i = 0; i < r.length; i++) {
          var a = r[i].get("name");
          if (this.isSelected(a)) {
            this.select(a), n = !0;
            break;
          }
        }
        !n && this.select(r[0].get("name"));
      }
    }, t.prototype._updateData = function(r) {
      var n = [], i = [];
      r.eachRawSeries(function(u) {
        var l = u.name;
        i.push(l);
        var f;
        if (u.legendVisualProvider) {
          var h = u.legendVisualProvider, c = h.getAllNames();
          r.isSeriesFiltered(u) || (i = i.concat(c)), c.length ? n = n.concat(c) : f = !0;
        } else
          f = !0;
        f && Av(u) && n.push(u.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = j(), s = Z(a, function(u) {
        return (Y(u) || mt(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new Ct(u, this, this.ecModel));
      }, this);
      this._data = Vt(s, function(u) {
        return !!u;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(r) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        I(a, function(o) {
          n[o.get("name")] = !1;
        });
      }
      n[r] = !0;
    }, t.prototype.unSelect = function(r) {
      this.get("selectedMode") !== "single" && (this.option.selected[r] = !1);
    }, t.prototype.toggleSelected = function(r) {
      var n = this.option.selected;
      n.hasOwnProperty(r) || (n[r] = !0), this[n[r] ? "unSelect" : "select"](r);
    }, t.prototype.allSelect = function() {
      var r = this._data, n = this.option.selected;
      I(r, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var r = this._data, n = this.option.selected;
      I(r, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, t.prototype.isSelected = function(r) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(r) && !n[r]) && ct(this._availableNames, r) >= 0;
    }, t.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      // top: 0,
      bottom: q.size.m,
      align: "auto",
      backgroundColor: q.color.transparent,
      borderColor: q.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: q.color.disabled,
      inactiveBorderColor: q.color.disabled,
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: q.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: q.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: q.color.tertiary,
        borderWidth: 1,
        borderColor: q.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: q.color.quaternary
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      },
      triggerEvent: !1
    }, t;
  }(pt)
), ci = Rt, rv = I, cs = Ft, X1 = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r.newlineDisabled = !1, r;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new cs()), this.group.add(this._selectorGroup = new cs()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(r, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!r.get("show", !0)) {
        var o = r.get("align"), s = r.get("orient");
        (!o || o === "auto") && (o = r.get("left") === "right" && s === "vertical" ? "right" : "left");
        var u = r.get("selector", !0), l = r.get("selectorPosition", !0);
        u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, r, n, i, u, s, l);
        var f = qu(r, i).refContainer, h = r.getBoxLayoutParams(), c = r.get("padding"), v = Qr(h, f, c), d = this.layoutInner(r, o, v, a, u, l), p = Qr(yt({
          width: d.width,
          height: d.height
        }, h), f, c);
        this.group.x = p.x - d.x, this.group.y = p.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = NR(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          r
        ));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this.getContentGroup(), f = j(), h = n.get("selectedMode"), c = n.get("triggerEvent"), v = [];
      i.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && v.push(d.id);
      }), rv(n.getData(), function(d, p) {
        var g = this, m = d.get("name");
        if (!this.newlineDisabled && (m === "" || m === `
`)) {
          var y = new cs();
          y.newline = !0, l.add(y);
          return;
        }
        var _ = i.getSeriesByName(m)[0];
        if (!f.get(m))
          if (_) {
            var S = _.getData(), b = S.getVisual("legendLineStyle") || {}, w = S.getVisual("legendIcon"), T = S.getVisual("style"), x = this._createItem(_, m, p, d, n, r, b, T, w, h, a);
            x.on("click", ci(Wm, m, null, a, v)).on("mouseover", ci(nv, _.name, null, a, v)).on("mouseout", ci(iv, _.name, null, a, v)), i.ssr && x.eachChild(function(D) {
              var C = ut(D);
              C.seriesIndex = _.seriesIndex, C.dataIndex = p, C.ssrType = "legend";
            }), c && x.eachChild(function(D) {
              g.packEventData(D, n, _, p, m);
            }), f.set(m, !0);
          } else
            i.eachRawSeries(function(D) {
              var C = this;
              if (!f.get(m) && D.legendVisualProvider) {
                var A = D.legendVisualProvider;
                if (!A.containName(m))
                  return;
                var L = A.indexOfName(m), M = A.getItemVisual(L, "style"), P = A.getItemVisual(L, "legendIcon"), E = Ge(M.fill);
                E && E[3] === 0 && (E[3] = 0.2, M = N(N({}, M), {
                  fill: fo(E, "rgba")
                }));
                var R = this._createItem(D, m, p, d, n, r, {}, M, P, h, a);
                R.on("click", ci(Wm, null, m, a, v)).on("mouseover", ci(nv, null, m, a, v)).on("mouseout", ci(iv, null, m, a, v)), i.ssr && R.eachChild(function(k) {
                  var O = ut(k);
                  O.seriesIndex = D.seriesIndex, O.dataIndex = p, O.ssrType = "legend";
                }), c && R.eachChild(function(k) {
                  C.packEventData(k, n, D, p, m);
                }), f.set(m, !0);
              }
            }, this);
      }, this), o && this._createSelector(o, n, a, s, u);
    }, t.prototype.packEventData = function(r, n, i, a, o) {
      var s = {
        componentType: "legend",
        componentIndex: n.componentIndex,
        dataIndex: a,
        value: o,
        seriesIndex: i.seriesIndex
      };
      ut(r).eventData = s;
    }, t.prototype._createSelector = function(r, n, i, a, o) {
      var s = this.getSelectorGroup();
      rv(r, function(l) {
        var f = l.type, h = new Wt({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            i.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: n.id
            });
          }
        });
        s.add(h);
        var c = n.getModel("selectorLabel"), v = n.getModel(["emphasis", "selectorLabel"]);
        mo(h, {
          normal: c,
          emphasis: v
        }, {
          defaultText: l.title
        }), vh(h);
      });
    }, t.prototype._createItem = function(r, n, i, a, o, s, u, l, f, h, c) {
      var v = r.visualDrawType, d = o.get("itemWidth"), p = o.get("itemHeight"), g = o.isSelected(n), m = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = oO(f, a, u, l, v, g, c), b = new cs(), w = a.getModel("textStyle");
      if (et(r.getLegendIcon) && (!_ || _ === "inherit"))
        b.add(r.getLegendIcon({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: m,
          itemStyle: S.itemStyle,
          lineStyle: S.lineStyle,
          symbolKeepAspect: y
        }));
      else {
        var T = _ === "inherit" && r.getData().getVisual("symbol") ? m === "inherit" ? r.getData().getVisual("symbolRotate") : m : 0;
        b.add(sO({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: T,
          itemStyle: S.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var x = s === "left" ? d + 5 : -5, D = s, C = o.get("formatter"), A = n;
      Y(C) && C ? A = C.replace("{name}", n ?? "") : et(C) && (A = C(n));
      var L = g ? w.getTextColor() : a.get("inactiveColor");
      b.add(new Wt({
        style: Kr(w, {
          text: A,
          x,
          y: p / 2,
          fill: L,
          align: D,
          verticalAlign: "middle"
        }, {
          inheritColor: L
        })
      }));
      var M = new Lt({
        shape: b.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && Gu({
        el: M,
        componentModel: o,
        itemName: n,
        itemTooltipOption: P.option
      }), b.add(M), b.eachChild(function(E) {
        E.silent = !0;
      }), M.silent = !h, this.getContentGroup().add(b), vh(b), b.__legendDataIndex = i, b;
    }, t.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      Ra(r.get("orient"), u, r.get("itemGap"), i.width, i.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        Ra(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          r.get("selectorItemGap", !0)
        );
        var c = l.getBoundingRect(), v = [-c.x, -c.y], d = r.get("selectorButtonGap", !0), p = r.getOrient().index, g = p === 0 ? "width" : "height", m = p === 0 ? "height" : "width", y = p === 0 ? "y" : "x";
        s === "end" ? v[p] += f[g] + d : h[p] += c[g] + d, v[1 - p] += f[m] / 2 - c[m] / 2, l.x = v[0], l.y = v[1], u.x = h[0], u.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[g] = f[g] + d + c[g], _[m] = Math.max(f[m], c[m]), _[y] = Math.min(0, c[y] + v[1 - p]), _;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  }(We)
);
function oO(e, t, r, n, i, a, o) {
  function s(g, m) {
    g.lineWidth === "auto" && (g.lineWidth = m.lineWidth > 0 ? 2 : 0), rv(g, function(y, _) {
      g[_] === "inherit" && (g[_] = m[_]);
    });
  }
  var u = t.getModel("itemStyle"), l = u.getItemStyle(), f = e.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? n.decal : Yh(h, o), l.fill === "inherit" && (l.fill = n[i]), l.stroke === "inherit" && (l.stroke = n[f]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? n : r).opacity), s(l, n);
  var c = t.getModel("lineStyle"), v = c.getLineStyle();
  if (s(v, r), l.fill === "auto" && (l.fill = n.fill), l.stroke === "auto" && (l.stroke = n.fill), v.stroke === "auto" && (v.stroke = n.fill), !a) {
    var d = t.get("inactiveBorderWidth"), p = l[f];
    l.lineWidth = d === "auto" ? n.lineWidth > 0 && p ? 2 : 0 : l.lineWidth, l.fill = t.get("inactiveColor"), l.stroke = t.get("inactiveBorderColor"), v.stroke = c.get("inactiveColor"), v.lineWidth = c.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: v
  };
}
function sO(e) {
  var t = e.icon || "roundRect", r = Bi(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill, e.symbolKeepAspect);
  return r.setStyle(e.itemStyle), r.rotation = (e.iconRotate || 0) * Math.PI / 180, r.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), t.indexOf("empty") > -1 && (r.style.stroke = r.style.fill, r.style.fill = q.color.neutral00, r.style.lineWidth = 2), r;
}
function Wm(e, t, r, n) {
  iv(e, t, r, n), r.dispatchAction({
    type: "legendToggleSelect",
    name: e ?? t
  }), nv(e, t, r, n);
}
function nv(e, t, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "highlight",
    seriesName: e,
    name: t,
    excludeSeriesId: n
  });
}
function iv(e, t, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "downplay",
    seriesName: e,
    name: t,
    excludeSeriesId: n
  });
}
function va(e, t, r) {
  var n = e === "allSelect" || e === "inverseSelect", i = {}, a = [];
  r.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    n ? s[e]() : s[e](t.name), Ym(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return r.eachComponent("legend", function(s) {
    I(i, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), Ym(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function Ym(e, t) {
  var r = t || {};
  return I(e.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = e.isSelected(i);
      te(r, i) ? r[i] = r[i] && a : r[i] = a;
    }
  }), r;
}
function uO(e) {
  e.registerAction("legendToggleSelect", "legendselectchanged", Rt(va, "toggleSelected")), e.registerAction("legendAllSelect", "legendselectall", Rt(va, "allSelect")), e.registerAction("legendInverseSelect", "legendinverseselect", Rt(va, "inverseSelect")), e.registerAction("legendSelect", "legendselected", Rt(va, "select")), e.registerAction("legendUnSelect", "legendunselected", Rt(va, "unSelect"));
}
var lO = Lv(fO);
function fO(e) {
  var t = e.findComponents({
    mainType: "legend"
  });
  t && t.length && e.filterSeries(function(r) {
    for (var n = 0; n < t.length; n++)
      if (!t[n].isSelected(r.name))
        return !1;
    return !0;
  });
}
function $1(e) {
  e.registerComponentModel(ev), e.registerComponentView(X1), e.registerProcessor(e.PRIORITY.PROCESSOR.SERIES_FILTER, lO), e.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), uO(e);
}
var hO = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r;
    }
    return t.prototype.setScrollDataIndex = function(r) {
      this.option.scrollDataIndex = r;
    }, t.prototype.init = function(r, n, i) {
      var a = _o(r);
      e.prototype.init.call(this, r, n, i), Xm(this, r, a);
    }, t.prototype.mergeOption = function(r, n) {
      e.prototype.mergeOption.call(this, r, n), Xm(this, this.option, r);
    }, t.type = "legend.scroll", t.defaultOption = d_(ev.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: q.color.accent50,
      pageIconInactiveColor: q.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: q.color.tertiary
      },
      animationDurationUpdate: 800
    }), t;
  }(ev)
);
function Xm(e, t, r) {
  var n = e.getOrient(), i = [1, 1];
  i[n.index] = 0, jr(t, r, {
    type: "box",
    ignoreSize: !!i
  });
}
var $m = Ft, Cf = ["width", "height"], Df = ["x", "y"], vO = (
  /** @class */
  function(e) {
    V(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = t.type, r.newlineDisabled = !0, r._currentIndex = 0, r;
    }
    return t.prototype.init = function() {
      e.prototype.init.call(this), this.group.add(this._containerGroup = new $m()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new $m());
    }, t.prototype.resetInner = function() {
      e.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this;
      e.prototype.renderInner.call(this, r, n, i, a, o, s, u);
      var f = this._controllerGroup, h = n.get("pageIconSize", !0), c = W(h) ? h : [h, h];
      d("pagePrev", 0);
      var v = n.getModel("pageTextStyle");
      f.add(new Wt({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: v.getTextColor(),
          font: v.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(p, g) {
        var m = p + "DataIndex", y = Yv(n.get("pageIcons", !0)[n.getOrient().name][g], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: St(l._pageGo, l, m, n, a)
        }, {
          x: -c[0] / 2,
          y: -c[1] / 2,
          width: c[0],
          height: c[1]
        });
        y.name = p, f.add(y);
      }
    }, t.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getSelectorGroup(), l = r.getOrient().index, f = Cf[l], h = Df[l], c = Cf[1 - l], v = Df[1 - l];
      o && Ra(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        r.get("selectorItemGap", !0)
      );
      var d = r.get("selectorButtonGap", !0), p = u.getBoundingRect(), g = [-p.x, -p.y], m = ot(i);
      o && (m[f] = i[f] - p[f] - d);
      var y = this._layoutContentAndController(r, a, m, l, f, c, v, h);
      if (o) {
        if (s === "end")
          g[l] += y[f] + d;
        else {
          var _ = p[f] + d;
          g[l] -= _, y[h] -= _;
        }
        y[f] += p[f] + d, g[1 - l] += y[v] + y[c] / 2 - p[c] / 2, y[c] = Math.max(y[c], p[c]), y[v] = Math.min(y[v], p[v] + g[1 - l]), u.x = g[0], u.y = g[1], u.markRedraw();
      }
      return y;
    }, t.prototype._layoutContentAndController = function(r, n, i, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
      Ra(r.get("orient"), f, r.get("itemGap"), a ? i.width : null, a ? null : i.height), Ra(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        c,
        r.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = c.getBoundingRect(), p = this._showController = v[o] > i[o], g = [-v.x, -v.y];
      n || (g[a] = f[l]);
      var m = [0, 0], y = [-d.x, -d.y], _ = $(r.get("pageButtonGap", !0), r.get("itemGap", !0));
      if (p) {
        var S = r.get("pageButtonPosition", !0);
        S === "end" ? y[a] += i[o] - d[o] : m[a] += d[o] + _;
      }
      y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(g), h.setPosition(m), c.setPosition(y);
      var b = {
        x: 0,
        y: 0
      };
      if (b[o] = p ? i[o] : v[o], b[s] = Math.max(v[s], d[s]), b[u] = Math.min(0, d[u] + y[1 - a]), h.__rectSize = i[o], p) {
        var w = {
          x: 0,
          y: 0
        };
        w[o] = Math.max(i[o] - d[o] - _, 0), w[s] = b[s], h.setClipPath(new Lt({
          shape: w
        })), h.__rectSize = w[o];
      } else
        c.eachChild(function(x) {
          x.attr({
            invisible: !0,
            silent: !0
          });
        });
      var T = this._getPageInfo(r);
      return T.pageIndex != null && re(
        f,
        {
          x: T.contentPosition[0],
          y: T.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        p ? r : null
      ), this._updatePageInfoView(r, T), b;
    }, t.prototype._pageGo = function(r, n, i) {
      var a = this._getPageInfo(n)[r];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, t.prototype._updatePageInfoView = function(r, n) {
      var i = this._controllerGroup;
      I(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", c = n[h] != null, v = i.childOfName(f);
        v && (v.setStyle("fill", c ? r.get("pageIconColor", !0) : r.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = r.get("pageFormatter"), s = n.pageIndex, u = s != null ? s + 1 : 0, l = n.pageCount;
      a && o && a.setStyle("text", Y(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, t.prototype._getPageInfo = function(r) {
      var n = r.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = r.getOrient().index, s = Cf[o], u = Df[o], l = this._findTargetItemIndex(n), f = i.children(), h = f[l], c = f.length, v = c ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: v,
        pageIndex: v - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var p = S(h);
      d.contentPosition[o] = -p.s;
      for (var g = l + 1, m = p, y = p, _ = null; g <= c; ++g)
        _ = S(f[g]), // Half of the last item is out of the window.
        (!_ && y.e > m.s + a || _ && !b(_, m.s)) && (y.i > m.i ? m = y : m = _, m && (d.pageNextDataIndex == null && (d.pageNextDataIndex = m.i), ++d.pageCount)), y = _;
      for (var g = l - 1, m = p, y = p, _ = null; g >= -1; --g)
        _ = S(f[g]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !b(y, _.s)) && m.i < y.i && (y = m, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = m.i), ++d.pageCount, ++d.pageIndex), m = _;
      return d;
      function S(w) {
        if (w) {
          var T = w.getBoundingRect(), x = T[u] + w[u];
          return {
            s: x,
            e: x + T[s],
            i: w.__legendDataIndex
          };
        }
      }
      function b(w, T) {
        return w.e >= T && w.s <= T + a;
      }
    }, t.prototype._findTargetItemIndex = function(r) {
      if (!this._showController)
        return 0;
      var n, i = this.getContentGroup(), a;
      return i.eachChild(function(o, s) {
        var u = o.__legendDataIndex;
        a == null && u != null && (a = s), u === r && (n = s);
      }), n ?? a;
    }, t.type = "legend.scroll", t;
  }(X1)
);
function cO(e) {
  e.registerAction("legendScroll", "legendscroll", function(t, r) {
    var n = t.scrollDataIndex;
    n != null && r.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(i) {
      i.setScrollDataIndex(n);
    });
  });
}
function dO(e) {
  tn($1), e.registerComponentModel(hO), e.registerComponentView(vO), cO(e);
}
function pO(e) {
  tn($1), tn(dO);
}
var Af = Math.sin, Mf = Math.cos, Z1 = Math.PI, An = Math.PI * 2, gO = 180 / Z1, q1 = function() {
  function e() {
  }
  return e.prototype.reset = function(t) {
    this._start = !0, this._d = [], this._str = "", this._p = Math.pow(10, t || 4);
  }, e.prototype.moveTo = function(t, r) {
    this._add("M", t, r);
  }, e.prototype.lineTo = function(t, r) {
    this._add("L", t, r);
  }, e.prototype.bezierCurveTo = function(t, r, n, i, a, o) {
    this._add("C", t, r, n, i, a, o);
  }, e.prototype.quadraticCurveTo = function(t, r, n, i) {
    this._add("Q", t, r, n, i);
  }, e.prototype.arc = function(t, r, n, i, a, o) {
    this.ellipse(t, r, n, n, 0, i, a, o);
  }, e.prototype.ellipse = function(t, r, n, i, a, o, s, u) {
    var l = s - o, f = !u, h = Math.abs(l), c = Br(h - An) || (f ? l >= An : -l >= An), v = l > 0 ? l % An : l % An + An, d = !1;
    c ? d = !0 : Br(h) ? d = !1 : d = v >= Z1 == !!f;
    var p = t + n * Mf(o), g = r + i * Af(o);
    this._start && this._add("M", p, g);
    var m = Math.round(a * gO);
    if (c) {
      var y = 1 / this._p, _ = (f ? 1 : -1) * (An - y);
      this._add("A", n, i, m, 1, +f, t + n * Mf(o + _), r + i * Af(o + _)), y > 0.01 && this._add("A", n, i, m, 0, +f, p, g);
    } else {
      var S = t + n * Mf(s), b = r + i * Af(s);
      this._add("A", n, i, m, +d, +f, S, b);
    }
  }, e.prototype.rect = function(t, r, n, i) {
    this._add("M", t, r), this._add("l", n, 0), this._add("l", 0, i), this._add("l", -n, 0), this._add("Z");
  }, e.prototype.closePath = function() {
    this._d.length > 0 && this._add("Z");
  }, e.prototype._add = function(t, r, n, i, a, o, s, u, l) {
    for (var f = [], h = this._p, c = 1; c < arguments.length; c++) {
      var v = arguments[c];
      if (isNaN(v)) {
        this._invalid = !0;
        return;
      }
      f.push(Math.round(v * h) / h);
    }
    this._d.push(t + f.join(" ")), this._start = t === "Z";
  }, e.prototype.generateStr = function() {
    this._str = this._invalid ? "" : this._d.join(""), this._d = [];
  }, e.prototype.getStr = function() {
    return this._str;
  }, e;
}(), Gc = "none", mO = Math.round;
function yO(e) {
  var t = e.fill;
  return t != null && t !== Gc;
}
function _O(e) {
  var t = e.stroke;
  return t != null && t !== Gc;
}
var av = ["lineCap", "miterLimit", "lineJoin"], SO = Z(av, function(e) {
  return "stroke-" + e.toLowerCase();
});
function bO(e, t, r, n) {
  var i = t.opacity == null ? 1 : t.opacity;
  if (r instanceof vr) {
    e("opacity", i);
    return;
  }
  if (yO(t)) {
    var a = Ha(t.fill);
    e("fill", a.color);
    var o = t.fillOpacity != null ? t.fillOpacity * a.opacity * i : a.opacity * i;
    o < 1 && e("fill-opacity", o);
  } else
    e("fill", Gc);
  if (_O(t)) {
    var s = Ha(t.stroke);
    e("stroke", s.color);
    var u = t.strokeNoScale ? r.getLineScale() : 1, l = u ? (t.lineWidth || 0) / u : 0, f = t.strokeOpacity != null ? t.strokeOpacity * s.opacity * i : s.opacity * i, h = t.strokeFirst;
    if (l !== 1 && e("stroke-width", l), h && e("paint-order", h ? "stroke" : "fill"), f < 1 && e("stroke-opacity", f), t.lineDash) {
      var c = Lc(r), v = c[0], d = c[1];
      v && (d = mO(d || 0), e("stroke-dasharray", v.join(",")), (d || n) && e("stroke-dashoffset", d));
    }
    for (var p = 0; p < av.length; p++) {
      var g = av[p];
      if (t[g] !== Ys[g]) {
        var m = t[g] || Ys[g];
        m && e(SO[p], m);
      }
    }
  }
}
var K1 = "http://www.w3.org/2000/svg", Q1 = "http://www.w3.org/1999/xlink", wO = "http://www.w3.org/2000/xmlns/", TO = "http://www.w3.org/XML/1998/namespace", Zm = "ecmeta_";
function j1(e) {
  return document.createElementNS(K1, e);
}
function kt(e, t, r, n, i) {
  return {
    tag: e,
    attrs: r || {},
    children: n,
    text: i,
    key: t
  };
}
function xO(e, t) {
  var r = [];
  if (t)
    for (var n in t) {
      var i = t[n], a = n;
      i !== !1 && (i !== !0 && i != null && (a += '="' + i + '"'), r.push(a));
    }
  return "<" + e + " " + r.join(" ") + ">";
}
function CO(e) {
  return "</" + e + ">";
}
function Vc(e, t) {
  t = t || {};
  var r = t.newline ? `
` : "";
  function n(i) {
    var a = i.children, o = i.tag, s = i.attrs, u = i.text;
    return xO(o, s) + (o !== "style" ? jt(u) : u || "") + (a ? "" + r + Z(a, function(l) {
      return n(l);
    }).join(r) + r : "") + CO(o);
  }
  return n(e);
}
function DO(e, t, r) {
  r = r || {};
  var n = r.newline ? `
` : "", i = " {" + n, a = n + "}", o = Z(lt(e), function(u) {
    return u + i + Z(lt(e[u]), function(l) {
      return l + ":" + e[u][l] + ";";
    }).join(n) + a;
  }).join(n), s = Z(lt(t), function(u) {
    return "@keyframes " + u + i + Z(lt(t[u]), function(l) {
      return l + i + Z(lt(t[u][l]), function(f) {
        var h = t[u][l][f];
        return f === "d" && (h = 'path("' + h + '")'), f + ":" + h + ";";
      }).join(n) + a;
    }).join(n) + a;
  }).join(n);
  return !o && !s ? "" : ["<![CDATA[", o, s, "]]>"].join(n);
}
function ov(e) {
  return {
    zrId: e,
    shadowCache: {},
    patternCache: {},
    gradientCache: {},
    clipPathCache: {},
    defs: {},
    cssNodes: {},
    cssAnims: {},
    cssStyleCache: {},
    cssAnimIdx: 0,
    shadowIdx: 0,
    gradientIdx: 0,
    patternIdx: 0,
    clipPathIdx: 0
  };
}
function qm(e, t, r, n) {
  return kt("svg", "root", {
    width: e,
    height: t,
    xmlns: K1,
    "xmlns:xlink": Q1,
    version: "1.1",
    baseProfile: "full",
    viewBox: n ? "0 0 " + e + " " + t : !1
  }, r);
}
var AO = 0;
function J1() {
  return AO++;
}
var Km = {
  cubicIn: "0.32,0,0.67,0",
  cubicOut: "0.33,1,0.68,1",
  cubicInOut: "0.65,0,0.35,1",
  quadraticIn: "0.11,0,0.5,0",
  quadraticOut: "0.5,1,0.89,1",
  quadraticInOut: "0.45,0,0.55,1",
  quarticIn: "0.5,0,0.75,0",
  quarticOut: "0.25,1,0.5,1",
  quarticInOut: "0.76,0,0.24,1",
  quinticIn: "0.64,0,0.78,0",
  quinticOut: "0.22,1,0.36,1",
  quinticInOut: "0.83,0,0.17,1",
  sinusoidalIn: "0.12,0,0.39,0",
  sinusoidalOut: "0.61,1,0.88,1",
  sinusoidalInOut: "0.37,0,0.63,1",
  exponentialIn: "0.7,0,0.84,0",
  exponentialOut: "0.16,1,0.3,1",
  exponentialInOut: "0.87,0,0.13,1",
  circularIn: "0.55,0,1,0.45",
  circularOut: "0,0.55,0.45,1",
  circularInOut: "0.85,0,0.15,1"
}, In = "transform-origin";
function MO(e, t, r) {
  var n = N({}, e.shape);
  N(n, t), e.buildPath(r, n);
  var i = new q1();
  return i.reset(zy(e)), r.rebuildPath(i, 1), i.generateStr(), i.getStr();
}
function IO(e, t) {
  var r = t.originX, n = t.originY;
  (r || n) && (e[In] = r + "px " + n + "px");
}
var LO = {
  fill: "fill",
  opacity: "opacity",
  lineWidth: "stroke-width",
  lineDashOffset: "stroke-dashoffset"
};
function tb(e, t) {
  var r = t.zrId + "-ani-" + t.cssAnimIdx++;
  return t.cssAnims[r] = e, r;
}
function PO(e, t, r) {
  var n = e.shape.paths, i = {}, a, o;
  if (I(n, function(u) {
    var l = ov(r.zrId);
    l.animation = !0, el(u, {}, l, !0);
    var f = l.cssAnims, h = l.cssNodes, c = lt(f), v = c.length;
    if (v) {
      o = c[v - 1];
      var d = f[o];
      for (var p in d) {
        var g = d[p];
        i[p] = i[p] || { d: "" }, i[p].d += g.d || "";
      }
      for (var m in h) {
        var y = h[m].animation;
        y.indexOf(o) >= 0 && (a = y);
      }
    }
  }), !!a) {
    t.d = !1;
    var s = tb(i, r);
    return a.replace(o, s);
  }
}
function Qm(e) {
  return Y(e) ? Km[e] ? "cubic-bezier(" + Km[e] + ")" : Sv(e) ? e : "" : "";
}
function el(e, t, r, n) {
  var i = e.animators, a = i.length, o = [];
  if (e instanceof M0) {
    var s = PO(e, t, r);
    if (s)
      o.push(s);
    else if (!a)
      return;
  } else if (!a)
    return;
  for (var u = {}, l = 0; l < a; l++) {
    var f = i[l], h = [f.getMaxTime() / 1e3 + "s"], c = Qm(f.getClip().easing), v = f.getDelay();
    c ? h.push(c) : h.push("linear"), v && h.push(v / 1e3 + "s"), f.getLoop() && h.push("infinite");
    var d = h.join(" ");
    u[d] = u[d] || [d, []], u[d][1].push(f);
  }
  function p(y) {
    var _ = y[1], S = _.length, b = {}, w = {}, T = {}, x = "animation-timing-function";
    function D(xt, st, bt) {
      for (var Q = xt.getTracks(), at = xt.getMaxTime(), ne = 0; ne < Q.length; ne++) {
        var At = Q[ne];
        if (At.needsAnimate()) {
          var Oe = At.keyframes, ie = At.propName;
          if (bt && (ie = bt(ie)), ie)
            for (var ke = 0; ke < Oe.length; ke++) {
              var Kn = Oe[ke], Ne = Math.round(Kn.time / at * 100) + "%", bo = Qm(Kn.easing), Qn = Kn.rawValue;
              (Y(Qn) || mt(Qn)) && (st[Ne] = st[Ne] || {}, st[Ne][ie] = Kn.rawValue, bo && (st[Ne][x] = bo));
            }
        }
      }
    }
    for (var C = 0; C < S; C++) {
      var A = _[C], L = A.targetName;
      L ? L === "shape" && D(A, w) : !n && D(A, b);
    }
    for (var M in b) {
      var P = {};
      Va(P, e), N(P, b[M]);
      var E = Gy(P), R = b[M][x];
      T[M] = E ? {
        transform: E
      } : {}, IO(T[M], P), R && (T[M][x] = R);
    }
    var k, O = !0;
    for (var M in w) {
      T[M] = T[M] || {};
      var B = !k, R = w[M][x];
      B && (k = new Zr());
      var F = k.len();
      k.reset(), T[M].d = MO(e, w[M], k);
      var G = k.len();
      if (!B && F !== G) {
        O = !1;
        break;
      }
      R && (T[M][x] = R);
    }
    if (!O)
      for (var M in T)
        delete T[M].d;
    if (!n)
      for (var C = 0; C < S; C++) {
        var A = _[C], L = A.targetName;
        L === "style" && D(A, T, function(Q) {
          return LO[Q];
        });
      }
    for (var U = lt(T), X = !0, H, C = 1; C < U.length; C++) {
      var J = U[C - 1], it = U[C];
      if (T[J][In] !== T[it][In]) {
        X = !1;
        break;
      }
      H = T[J][In];
    }
    if (X && H) {
      for (var M in T)
        T[M][In] && delete T[M][In];
      t[In] = H;
    }
    if (Vt(U, function(xt) {
      return lt(T[xt]).length > 0;
    }).length) {
      var Dt = tb(T, r);
      return Dt + " " + y[0] + " both";
    }
  }
  for (var g in u) {
    var s = p(u[g]);
    s && o.push(s);
  }
  if (o.length) {
    var m = r.zrId + "-cls-" + J1();
    r.cssNodes["." + m] = {
      animation: o.join(",")
    }, t.class = m;
  }
}
function EO(e, t, r) {
  if (!e.ignore)
    if (e.isSilent()) {
      var n = {
        "pointer-events": "none"
      };
      jm(n, t, r);
    } else {
      var i = e.states.emphasis && e.states.emphasis.style ? e.states.emphasis.style : {}, a = i.fill;
      if (!a) {
        var o = e.style && e.style.fill, s = e.states.select && e.states.select.style && e.states.select.style.fill, u = e.currentStates.indexOf("select") >= 0 && s || o;
        u && (a = Zf(u));
      }
      var l = i.lineWidth;
      if (l) {
        var f = !i.strokeNoScale && e.transform ? e.transform[0] : 1;
        l = l / f;
      }
      var n = {
        cursor: "pointer"
      };
      a && (n.fill = a), i.stroke && (n.stroke = i.stroke), l && (n["stroke-width"] = l), jm(n, t, r);
    }
}
function jm(e, t, r, n) {
  var i = JSON.stringify(e), a = r.cssStyleCache[i];
  a || (a = r.zrId + "-cls-" + J1(), r.cssStyleCache[i] = a, r.cssNodes["." + a + ":hover"] = e), t.class = t.class ? t.class + " " + a : a;
}
var no = Math.round;
function eb(e) {
  return e && Y(e.src);
}
function rb(e) {
  return e && et(e.toDataURL);
}
function Hc(e, t, r, n) {
  bO(function(i, a) {
    var o = i === "fill" || i === "stroke";
    o && Fy(a) ? ib(t, e, i, n) : o && bv(a) ? ab(r, e, i, n) : e[i] = a, o && n.ssr && a === "none" && (e["pointer-events"] = "visible");
  }, t, r, !1), zO(r, e, n);
}
function Uc(e, t) {
  var r = $P(t);
  r && (r.each(function(n, i) {
    n != null && (e[(Zm + i).toLowerCase()] = n + "");
  }), t.isSilent() && (e[Zm + "silent"] = "true"));
}
function Jm(e) {
  return Br(e[0] - 1) && Br(e[1]) && Br(e[2]) && Br(e[3] - 1);
}
function RO(e) {
  return Br(e[4]) && Br(e[5]);
}
function Wc(e, t, r) {
  if (t && !(RO(t) && Jm(t))) {
    var n = 1e4;
    e.transform = Jm(t) ? "translate(" + no(t[4] * n) / n + " " + no(t[5] * n) / n + ")" : Ow(t);
  }
}
function ty(e, t, r) {
  for (var n = e.points, i = [], a = 0; a < n.length; a++)
    i.push(no(n[a][0] * r) / r), i.push(no(n[a][1] * r) / r);
  t.points = i.join(" ");
}
function ey(e) {
  return !e.smooth;
}
function OO(e) {
  var t = Z(e, function(r) {
    return typeof r == "string" ? [r, r] : r;
  });
  return function(r, n, i) {
    for (var a = 0; a < t.length; a++) {
      var o = t[a], s = r[o[0]];
      s != null && (n[o[1]] = no(s * i) / i);
    }
  };
}
var kO = {
  circle: [OO(["cx", "cy", "r"])],
  polyline: [ty, ey],
  polygon: [ty, ey]
};
function NO(e) {
  for (var t = e.animators, r = 0; r < t.length; r++)
    if (t[r].targetName === "shape")
      return !0;
  return !1;
}
function nb(e, t) {
  var r = e.style, n = e.shape, i = kO[e.type], a = {}, o = t.animation, s = "path", u = e.style.strokePercent, l = t.compress && zy(e) || 4;
  if (i && !t.willUpdate && !(i[1] && !i[1](n)) && !(o && NO(e)) && !(u < 1)) {
    s = e.type;
    var f = Math.pow(10, l);
    i[0](n, a, f);
  } else {
    var h = !e.path || e.shapeChanged();
    e.path || e.createPathProxy();
    var c = e.path;
    h && (c.beginPath(), e.buildPath(c, e.shape), e.pathUpdated());
    var v = c.getVersion(), d = e, p = d.__svgPathBuilder;
    (d.__svgPathVersion !== v || !p || u !== d.__svgPathStrokePercent) && (p || (p = d.__svgPathBuilder = new q1()), p.reset(l), c.rebuildPath(p, u), p.generateStr(), d.__svgPathVersion = v, d.__svgPathStrokePercent = u), a.d = p.getStr();
  }
  return Wc(a, e.transform), Hc(a, r, e, t), Uc(a, e), t.animation && el(e, a, t), t.emphasis && EO(e, a, t), kt(s, e.id + "", a);
}
function BO(e, t) {
  var r = e.style, n = r.image;
  if (n && !Y(n) && (eb(n) ? n = n.src : rb(n) && (n = n.toDataURL())), !!n) {
    var i = r.x || 0, a = r.y || 0, o = r.width, s = r.height, u = {
      href: n,
      width: o,
      height: s
    };
    return i && (u.x = i), a && (u.y = a), Wc(u, e.transform), Hc(u, r, e, t), Uc(u, e), t.animation && el(e, u, t), kt("image", e.id + "", u);
  }
}
function FO(e, t) {
  var r = e.style, n = r.text;
  if (n != null && (n += ""), !(!n || isNaN(r.x) || isNaN(r.y))) {
    var i = r.font || br, a = r.x || 0, o = Nw(r.y || 0, uo(i), r.textBaseline), s = kw[r.textAlign] || r.textAlign, u = {
      "dominant-baseline": "central",
      "text-anchor": s
    };
    if (qy(r)) {
      var l = "", f = r.fontStyle, h = Zy(r.fontSize);
      if (!parseFloat(h))
        return;
      var c = r.fontFamily || cy, v = r.fontWeight;
      l += "font-size:" + h + ";font-family:" + c + ";", f && f !== "normal" && (l += "font-style:" + f + ";"), v && v !== "normal" && (l += "font-weight:" + v + ";"), u.style = l;
    } else
      u.style = "font: " + i;
    return n.match(/\s/) && (u["xml:space"] = "preserve"), a && (u.x = a), o && (u.y = o), Wc(u, e.transform), Hc(u, r, e, t), Uc(u, e), t.animation && el(e, u, t), kt("text", e.id + "", u, void 0, n);
  }
}
function ry(e, t) {
  if (e instanceof dt)
    return nb(e, t);
  if (e instanceof vr)
    return BO(e, t);
  if (e instanceof Ua)
    return FO(e, t);
}
function zO(e, t, r) {
  var n = e.style;
  if (Bw(n)) {
    var i = Fw(e), a = r.shadowCache, o = a[i];
    if (!o) {
      var s = e.getGlobalScale(), u = s[0], l = s[1];
      if (!u || !l)
        return;
      var f = n.shadowOffsetX || 0, h = n.shadowOffsetY || 0, c = n.shadowBlur, v = Ha(n.shadowColor), d = v.opacity, p = v.color, g = c / 2 / u, m = c / 2 / l, y = g + " " + m;
      o = r.zrId + "-s" + r.shadowIdx++, r.defs[o] = kt("filter", o, {
        id: o,
        x: "-100%",
        y: "-100%",
        width: "300%",
        height: "300%"
      }, [
        kt("feDropShadow", "", {
          dx: f / u,
          dy: h / l,
          stdDeviation: y,
          "flood-color": p,
          "flood-opacity": d
        })
      ]), a[i] = o;
    }
    t.filter = Pu(o);
  }
}
function ib(e, t, r, n) {
  var i = e[r], a, o = {
    gradientUnits: i.global ? "userSpaceOnUse" : "objectBoundingBox"
  };
  if (Ny(i))
    a = "linearGradient", o.x1 = i.x, o.y1 = i.y, o.x2 = i.x2, o.y2 = i.y2;
  else if (By(i))
    a = "radialGradient", o.cx = $(i.x, 0.5), o.cy = $(i.y, 0.5), o.r = $(i.r, 0.5);
  else
    return;
  for (var s = i.colorStops, u = [], l = 0, f = s.length; l < f; ++l) {
    var h = qf(s[l].offset) * 100 + "%", c = s[l].color, v = Ha(c), d = v.color, p = v.opacity, g = {
      offset: h
    };
    g["stop-color"] = d, p < 1 && (g["stop-opacity"] = p), u.push(kt("stop", l + "", g));
  }
  var m = kt(a, "", o, u), y = Vc(m), _ = n.gradientCache, S = _[y];
  S || (S = n.zrId + "-g" + n.gradientIdx++, _[y] = S, o.id = S, n.defs[S] = kt(a, S, o, u)), t[r] = Pu(S);
}
function ab(e, t, r, n) {
  var i = e.style[r], a = e.getBoundingRect(), o = {}, s = i.repeat, u = s === "no-repeat", l = s === "repeat-x", f = s === "repeat-y", h;
  if (ky(i)) {
    var c = i.imageWidth, v = i.imageHeight, d = void 0, p = i.image;
    if (Y(p) ? d = p : eb(p) ? d = p.src : rb(p) && (d = p.toDataURL()), typeof Image > "u") {
      var g = "Image width/height must been given explictly in svg-ssr renderer.";
      Ve(c, g), Ve(v, g);
    } else if (c == null || v == null) {
      var m = function(C, A) {
        if (C) {
          var L = C.elm, M = c || A.width, P = v || A.height;
          C.tag === "pattern" && (l ? (P = 1, M /= a.width) : f && (M = 1, P /= a.height)), C.attrs.width = M, C.attrs.height = P, L && (L.setAttribute("width", M), L.setAttribute("height", P));
        }
      }, y = gv(d, null, e, function(C) {
        u || m(w, C), m(h, C);
      });
      y && y.width && y.height && (c = c || y.width, v = v || y.height);
    }
    h = kt("image", "img", {
      href: d,
      width: c,
      height: v
    }), o.width = c, o.height = v;
  } else i.svgElement && (h = ot(i.svgElement), o.width = i.svgWidth, o.height = i.svgHeight);
  if (h) {
    var _, S;
    u ? _ = S = 1 : l ? (S = 1, _ = o.width / a.width) : f ? (_ = 1, S = o.height / a.height) : o.patternUnits = "userSpaceOnUse", _ != null && !isNaN(_) && (o.width = _), S != null && !isNaN(S) && (o.height = S);
    var b = Gy(i);
    b && (o.patternTransform = b);
    var w = kt("pattern", "", o, [h]), T = Vc(w), x = n.patternCache, D = x[T];
    D || (D = n.zrId + "-p" + n.patternIdx++, x[T] = D, o.id = D, w = n.defs[D] = kt("pattern", D, o, [h])), t[r] = Pu(D);
  }
}
function GO(e, t, r) {
  var n = r.clipPathCache, i = r.defs, a = n[e.id];
  if (!a) {
    a = r.zrId + "-c" + r.clipPathIdx++;
    var o = {
      id: a
    };
    n[e.id] = a, i[a] = kt("clipPath", a, o, [nb(e, r)]);
  }
  t["clip-path"] = Pu(a);
}
function ny(e) {
  return document.createTextNode(e);
}
function Pn(e, t, r) {
  e.insertBefore(t, r);
}
function iy(e, t) {
  e.removeChild(t);
}
function ay(e, t) {
  e.appendChild(t);
}
function ob(e) {
  return e.parentNode;
}
function sb(e) {
  return e.nextSibling;
}
function If(e, t) {
  e.textContent = t;
}
var oy = 58, VO = 120, HO = kt("", "");
function sv(e) {
  return e === void 0;
}
function tr(e) {
  return e !== void 0;
}
function UO(e, t, r) {
  for (var n = {}, i = t; i <= r; ++i) {
    var a = e[i].key;
    a !== void 0 && (n[a] = i);
  }
  return n;
}
function wa(e, t) {
  var r = e.key === t.key, n = e.tag === t.tag;
  return n && r;
}
function io(e) {
  var t, r = e.children, n = e.tag;
  if (tr(n)) {
    var i = e.elm = j1(n);
    if (Yc(HO, e), W(r))
      for (t = 0; t < r.length; ++t) {
        var a = r[t];
        a != null && ay(i, io(a));
      }
    else tr(e.text) && !K(e.text) && ay(i, ny(e.text));
  } else
    e.elm = ny(e.text);
  return e.elm;
}
function ub(e, t, r, n, i) {
  for (; n <= i; ++n) {
    var a = r[n];
    a != null && Pn(e, io(a), t);
  }
}
function Tu(e, t, r, n) {
  for (; r <= n; ++r) {
    var i = t[r];
    if (i != null)
      if (tr(i.tag)) {
        var a = ob(i.elm);
        iy(a, i.elm);
      } else
        iy(e, i.elm);
  }
}
function Yc(e, t) {
  var r, n = t.elm, i = e && e.attrs || {}, a = t.attrs || {};
  if (i !== a) {
    for (r in a) {
      var o = a[r], s = i[r];
      s !== o && (o === !0 ? n.setAttribute(r, "") : o === !1 ? n.removeAttribute(r) : r === "style" ? n.style.cssText = o : r.charCodeAt(0) !== VO ? n.setAttribute(r, o) : r === "xmlns:xlink" || r === "xmlns" ? n.setAttributeNS(wO, r, o) : r.charCodeAt(3) === oy ? n.setAttributeNS(TO, r, o) : r.charCodeAt(5) === oy ? n.setAttributeNS(Q1, r, o) : n.setAttribute(r, o));
    }
    for (r in i)
      r in a || n.removeAttribute(r);
  }
}
function WO(e, t, r) {
  for (var n = 0, i = 0, a = t.length - 1, o = t[0], s = t[a], u = r.length - 1, l = r[0], f = r[u], h, c, v, d; n <= a && i <= u; )
    o == null ? o = t[++n] : s == null ? s = t[--a] : l == null ? l = r[++i] : f == null ? f = r[--u] : wa(o, l) ? (gi(o, l), o = t[++n], l = r[++i]) : wa(s, f) ? (gi(s, f), s = t[--a], f = r[--u]) : wa(o, f) ? (gi(o, f), Pn(e, o.elm, sb(s.elm)), o = t[++n], f = r[--u]) : wa(s, l) ? (gi(s, l), Pn(e, s.elm, o.elm), s = t[--a], l = r[++i]) : (sv(h) && (h = UO(t, n, a)), c = h[l.key], sv(c) ? Pn(e, io(l), o.elm) : (v = t[c], v.tag !== l.tag ? Pn(e, io(l), o.elm) : (gi(v, l), t[c] = void 0, Pn(e, v.elm, o.elm))), l = r[++i]);
  (n <= a || i <= u) && (n > a ? (d = r[u + 1] == null ? null : r[u + 1].elm, ub(e, d, r, i, u)) : Tu(e, t, n, a));
}
function gi(e, t) {
  var r = t.elm = e.elm, n = e.children, i = t.children;
  e !== t && (Yc(e, t), sv(t.text) ? tr(n) && tr(i) ? n !== i && WO(r, n, i) : tr(i) ? (tr(e.text) && If(r, ""), ub(r, null, i, 0, i.length - 1)) : tr(n) ? Tu(r, n, 0, n.length - 1) : tr(e.text) && If(r, "") : e.text !== t.text && (tr(n) && Tu(r, n, 0, n.length - 1), If(r, t.text)));
}
function YO(e, t) {
  if (wa(e, t))
    gi(e, t);
  else {
    var r = e.elm, n = ob(r);
    io(t), n !== null && (Pn(n, t.elm, sb(r)), Tu(n, [e], 0, 0));
  }
  return t;
}
var XO = 0, $O = function() {
  function e(t, r, n) {
    if (this.type = "svg", this.configLayer = ZO(), this.storage = r, this._opts = n = N({}, n), this.root = t, this._id = "zr" + XO++, this._oldVNode = qm(n.width, n.height), t && !n.ssr) {
      var i = this._viewport = document.createElement("div");
      i.style.cssText = "position:relative;overflow:hidden";
      var a = this._svgDom = this._oldVNode.elm = j1("svg");
      Yc(null, this._oldVNode), i.appendChild(a), t.appendChild(i);
    }
    this.resize(n.width, n.height);
  }
  return e.prototype.getType = function() {
    return this.type;
  }, e.prototype.getViewportRoot = function() {
    return this._viewport;
  }, e.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, e.prototype.getSvgDom = function() {
    return this._svgDom;
  }, e.prototype.refresh = function() {
    if (this.root) {
      var t = this.renderToVNode({
        willUpdate: !0
      });
      t.attrs.style = "position:absolute;left:0;top:0;user-select:none", YO(this._oldVNode, t), this._oldVNode = t;
    }
  }, e.prototype.renderOneToVNode = function(t) {
    return ry(t, ov(this._id));
  }, e.prototype.renderToVNode = function(t) {
    t = t || {};
    var r = this.storage.getDisplayList(!0), n = this._width, i = this._height, a = ov(this._id);
    a.animation = t.animation, a.willUpdate = t.willUpdate, a.compress = t.compress, a.emphasis = t.emphasis, a.ssr = this._opts.ssr;
    var o = [], s = this._bgVNode = qO(n, i, this._backgroundColor, a);
    s && o.push(s);
    var u = t.compress ? null : this._mainVNode = kt("g", "main", {}, []);
    this._paintList(r, a, u ? u.children : o), u && o.push(u);
    var l = Z(lt(a.defs), function(c) {
      return a.defs[c];
    });
    if (l.length && o.push(kt("defs", "defs", {}, l)), t.animation) {
      var f = DO(a.cssNodes, a.cssAnims, { newline: !0 });
      if (f) {
        var h = kt("style", "stl", {}, [], f);
        o.push(h);
      }
    }
    return qm(n, i, o, t.useViewBox);
  }, e.prototype.renderToString = function(t) {
    return t = t || {}, Vc(this.renderToVNode({
      animation: $(t.cssAnimation, !0),
      emphasis: $(t.cssEmphasis, !0),
      willUpdate: !1,
      compress: !0,
      useViewBox: $(t.useViewBox, !0)
    }), { newline: !0 });
  }, e.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t;
  }, e.prototype.getSvgRoot = function() {
    return this._mainVNode && this._mainVNode.elm;
  }, e.prototype._paintList = function(t, r, n) {
    for (var i = t.length, a = [], o = 0, s, u, l = 0, f = 0; f < i; f++) {
      var h = t[f];
      if (!h.invisible) {
        var c = h.__clipPaths, v = c && c.length || 0, d = u && u.length || 0, p = void 0;
        for (p = Math.max(v - 1, d - 1); p >= 0 && !(c && u && c[p] === u[p]); p--)
          ;
        for (var g = d - 1; g > p; g--)
          o--, s = a[o - 1];
        for (var m = p + 1; m < v; m++) {
          var y = {};
          GO(c[m], y, r);
          var _ = kt("g", "clip-g-" + l++, y, []);
          (s ? s.children : n).push(_), a[o++] = _, s = _;
        }
        u = c;
        var S = ry(h, r);
        S && (s ? s.children : n).push(S);
      }
    }
  }, e.prototype.resize = function(t, r) {
    var n = this._opts, i = this.root, a = this._viewport;
    if (t != null && (n.width = t), r != null && (n.height = r), i && a && (a.style.display = "none", t = Ti(i, 0, n), r = Ti(i, 1, n), a.style.display = ""), this._width !== t || this._height !== r) {
      if (this._width = t, this._height = r, a) {
        var o = a.style;
        o.width = t + "px", o.height = r + "px";
      }
      if (bv(this._backgroundColor))
        this.refresh();
      else {
        var s = this._svgDom;
        s && (s.setAttribute("width", t), s.setAttribute("height", r));
        var u = this._bgVNode && this._bgVNode.elm;
        u && (u.setAttribute("width", t), u.setAttribute("height", r));
      }
    }
  }, e.prototype.getWidth = function() {
    return this._width;
  }, e.prototype.getHeight = function() {
    return this._height;
  }, e.prototype.dispose = function() {
    this.root && (this.root.innerHTML = ""), this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null;
  }, e.prototype.clear = function() {
    this._svgDom && (this._svgDom.innerHTML = null), this._oldVNode = null;
  }, e.prototype.toDataURL = function(t) {
    var r = this.renderToString(), n = "data:image/svg+xml;";
    return t ? (r = Gw(r), r && n + "base64," + r) : n + "charset=UTF-8," + encodeURIComponent(r);
  }, e;
}();
function ZO(e) {
  return function() {
  };
}
function qO(e, t, r, n) {
  var i;
  if (r && r !== "none")
    if (i = kt("rect", "bg", {
      width: e,
      height: t,
      x: "0",
      y: "0"
    }), Fy(r))
      ib({ fill: r }, i.attrs, "fill", n);
    else if (bv(r))
      ab({
        style: {
          fill: r
        },
        dirty: Ut,
        getBoundingRect: function() {
          return { width: e, height: t };
        }
      }, i.attrs, "fill", n);
    else {
      var a = Ha(r), o = a.color, s = a.opacity;
      i.attrs.fill = o, s < 1 && (i.attrs["fill-opacity"] = s);
    }
  return i;
}
function KO(e) {
  e.registerPainter("svg", $O);
}
function sy(e, t, r) {
  var n = ve.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", e)), n.width = i * r, n.height = a * r, n;
}
function Lf(e) {
  return !e.__cursors.get(E0);
}
function uy(e) {
  var t = e.__cursors.get(E0);
  return {
    startIdx: t ? t.startIdx : 0,
    endIdx: t ? t.endIdx : 0
  };
}
var lb = function(e) {
  V(t, e);
  function t(r, n, i) {
    var a = e.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = ws, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    i = i || Ws, typeof r == "string" ? o = sy(r, n, i) : K(r) && (o = r, r = o.id), a.id = r, a.dom = o;
    var s = o.style;
    return s && (_y(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return t.prototype.afterBrush = function() {
    this.__prevIdx = uy(this);
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var r = this.dpr;
    this.domBack = sy("back-" + this.id, this.painter, r), this.ctxBack = this.domBack.getContext("2d"), r !== 1 && this.ctxBack.scale(r, r);
  }, t.prototype.createRepaintRects = function(r, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new tt(0, 0, 0, 0);
    function f(S) {
      if (!(!S.isFinite() || S.isZero()))
        if (o.length === 0) {
          var b = new tt(0, 0, 0, 0);
          b.copy(S), o.push(b);
        } else {
          for (var w = !1, T = 1 / 0, x = 0, D = 0; D < o.length; ++D) {
            var C = o[D];
            if (C.intersect(S)) {
              var A = new tt(0, 0, 0, 0);
              A.copy(C), A.union(S), o[D] = A, w = !0;
              break;
            } else if (u) {
              l.copy(S), l.union(C);
              var L = S.width * S.height, M = C.width * C.height, P = l.width * l.height, E = P - L - M;
              E < T && (T = E, x = D);
            }
          }
          if (u && (o[x].union(S), w = !0), !w) {
            var b = new tt(0, 0, 0, 0);
            b.copy(S), o.push(b);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = uy(this), c = h.startIdx; c < h.endIdx; ++c) {
      var v = r[c];
      if (v) {
        var d = v.shouldBePainted(i, a, !0, !0), p = v.__isRendered && (v.__dirty & ue || !d) ? v.getPrevPaintRect() : null;
        p && f(p);
        var g = d && (v.__dirty & ue || !v.__isRendered) ? v.getPaintRect() : null;
        g && f(g);
      }
    }
    for (var m = this.__prevIdx, c = m.startIdx; c < m.endIdx; ++c) {
      var v = n[c], d = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!d || !v.__zr) && v.__isRendered) {
        var p = v.getPrevPaintRect();
        p && f(p);
      }
    }
    var y;
    do {
      y = !1;
      for (var c = 0; c < o.length; ) {
        if (o[c].isZero()) {
          o.splice(c, 1);
          continue;
        }
        for (var _ = c + 1; _ < o.length; )
          o[c].intersect(o[_]) ? (y = !0, o[c].union(o[_]), o.splice(_, 1)) : _++;
        c++;
      }
    } while (y);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(r, n) {
    var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = r + "px", o.height = n + "px"), a.width = r * i, a.height = n * i, s && (s.width = r * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
  }, t.prototype.clear = function(r, n, i) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    n = n || this.clearColor;
    var l = this.motionBlur && !r, f = this.lastFrameAlpha, h = this.dpr, c = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var v = this.domBack;
    function d(p, g, m, y) {
      if (o.clearRect(p, g, m, y), n && n !== "transparent") {
        var _ = void 0;
        if (Du(n)) {
          var S = n.global || n.__width === m && n.__height === y;
          _ = S && n.__canvasGradient || Uh(o, n, {
            x: 0,
            y: 0,
            width: m,
            height: y
          }), n.__canvasGradient = _, n.__width = m, n.__height = y;
        } else kb(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = Wh(o, n, {
          dirty: function() {
            c.setUnpainted(), c.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(p, g, m, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, p, g, m, y), o.restore());
    }
    !i || l ? d(0, 0, s, u) : i.length && I(i, function(p) {
      d(p.x * h, p.y * h, p.width * h, p.height * h);
    });
  }, t;
}(hr), ly = 1e5, Mn = 314159, Pf = void 0, QO = 1, Ef = 2;
function jO(e) {
  return e ? e.__builtin__ ? !0 : !(typeof e.resize != "function" || typeof e.refresh != "function") : !1;
}
function JO(e, t) {
  var r = document.createElement("div");
  return r.style.cssText = [
    "position:relative",
    "width:" + e + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", r;
}
function fy(e, t, r, n) {
  var i = new lb(e, t, t.dpr);
  return i.zlevel = r, i.zlevel2 = n, i.__builtin__ = !0, fb(i), i;
}
function fb(e) {
  e.__cursorStack = [], e.__cursors = j();
}
function tk(e) {
  return e.startIdx = e.drawIdx = e.endIdx = e.endIdxNew = 0, e.used = !1, e.first = e.last = NaN, e.notClearIdx = -1, e;
}
function ek(e, t) {
  var r = e.__cursors, n = +t;
  return r.get(n) || (e.__cursorStack.push(n), r.set(n, tk({ key: n })));
}
function ds(e, t) {
  for (var r = e.__cursorStack, n = 0; n < r.length; n++)
    t(e.__cursors.get(r[n]));
}
function Rf(e, t) {
  var r = e.layers;
  return r[t] || (r[t] = new Array(3));
}
function Xt(e, t, r) {
  for (var n = e.layerStack, i = 0; i < n.length; i++) {
    var a = n[i].zl, o = n[i].zl2, s = e.layers[a][o];
    (!r || (!(r & Ba) || s.__builtin__) && (!(r & uv) || !s.__builtin__) && (!(r & hb) || s !== e.hoverlayer)) && t(s, a, o, i);
  }
}
var Ba = 1, uv = 2, hb = 4, ps = Ba | hb, rk = function() {
  function e(t, r, n, i) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = N({}, n || {}), this.dpr = n.devicePixelRatio || Ws, this._singleCanvas = a, this.root = t;
    var o = t.style;
    if (o && (_y(t), t.innerHTML = ""), this.storage = r, this._prevDisplayList = [], a) {
      var u = t, l = u.width, f = u.height;
      n.width != null && (l = n.width), n.height != null && (f = n.height), this.dpr = n.devicePixelRatio || 1, u.width = l * this.dpr, u.height = f * this.dpr, this._width = l, this._height = f;
      var h = fy(u, this, Mn, ws);
      h.initContext(), this._insertLayer(h, Mn, ws, !0), this._domRoot = t;
    } else {
      this._width = Ti(t, 0, n), this._height = Ti(t, 1, n);
      var s = this._domRoot = JO(this._width, this._height);
      t.appendChild(s);
    }
  }
  return e.prototype.getType = function() {
    return "canvas";
  }, e.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, e.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, e.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, e.prototype.refresh = function(t) {
    var r;
    t && !K(t) ? r = { paintAll: !!t } : r = t || {};
    var n = $(r.refresh, !0), i = $(r.refreshHover, !1);
    if (i && (this._hoverLayerDirty = Ef), !n)
      return i && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, r.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return Xt(this._i, function(u, l, f, h) {
      u.refresh && u.refresh(h === 0 ? s : null);
    }, uv), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, e.prototype._paintHoverList = function(t) {
    var r = this._i.hoverlayer, n = this._hoverLayerDirty;
    if (this._hoverLayerDirty = Pf, n !== Pf && (!r && n === Ef && (r = this._i.hoverlayer = this._ensureLayer(ly)), !!r)) {
      r.clear();
      for (var i = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, a, o = 0, s = t.length; o < s; o++) {
        var u = t[o];
        if (u.__inHover) {
          a || (a = r.ctx, a.save());
          var l = u.__hoverStyle, f = void 0;
          l && (f = u.style, u.style = l), kn(a, u, i), l && (u.style = f);
        }
      }
      a && (Li(a, i), a.restore());
    }
  }, e.prototype.getHoverLayer = function() {
    return this._ensureLayer(ly);
  }, e.prototype.paintOne = function(t, r) {
    h1(t, r);
  }, e.prototype._paintList = function(t, r, n) {
    if (this._redrawId === n) {
      var i = this._doPaintList(t, r);
      if (this._needsManuallyCompositing && this._compositeManually(), i)
        Xt(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, ps), this._paintHoverList(t);
      else {
        var a = this;
        mu(function() {
          a._paintList(t, r, n);
        });
      }
    }
  }, e.prototype._compositeManually = function() {
    var t = this._ensureLayer(Mn).ctx, r = this._domRoot.width, n = this._domRoot.height;
    t.clearRect(0, 0, r, n), Xt(this._i, function(i) {
      i.virtual && t.drawImage(i.dom, 0, 0, r, n);
    }, Ba);
  }, e.prototype._doPaintList = function(t, r) {
    var n = this, i = !0;
    return Xt(this._i, function(a) {
      var o = !1;
      if (ds(a, function(h) {
        (h.drawIdx < h.endIdx || h.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = n._opts.useDirtyRect && !Lf(a) ? a.createRepaintRects(t, r, n._width, n._height) : null, u = n._i.layerStack[0], l = !0;
        if (a.__dirty) {
          l = !1, a.__dirty = !1;
          var f = a.zlevel === u.zl && a.zlevel2 === u.zl2 ? n._backgroundColor : null;
          a.clear(!1, f, s);
        }
        ds(a, function(h) {
          var c = n._paintPerCursor(a, h, t, s, l);
          i = i && c;
        });
      }
    }, ps), nt.wxa && Xt(this._i, function(a) {
      a && a.ctx && a.ctx.draw && a.ctx.draw();
    }), i;
  }, e.prototype._paintPerCursor = function(t, r, n, i, a) {
    var o = t.ctx;
    if (i)
      if (!i.length)
        r.drawIdx = r.endIdx;
      else
        for (var s = this.dpr, u = 0; u < i.length; ++u) {
          var l = i[u];
          o.save(), o.beginPath(), o.rect(l.x * s, l.y * s, l.width * s, l.height * s), o.clip(), this._paintPerCursorInRect(t, r, n, l, a), o.restore();
        }
    else
      o.save(), this._paintPerCursorInRect(t, r, n, null, a), o.restore();
    return r.drawIdx >= r.endIdx;
  }, e.prototype._paintPerCursorInRect = function(t, r, n, i, a) {
    for (var o = {
      inHover: !1,
      allClipped: !1,
      prevEl: null,
      viewWidth: this._width,
      viewHeight: this._height,
      beforeBrushParam: { contentRetained: a }
    }, s = t.ctx, u = Lf(t), l = u && ve.getTime(), f = r.drawIdx, h = r.notClearIdx, c = h >= 0 ? Math.min(h, f) : f; c < r.endIdx; c++) {
      var v = n[c];
      if (!(c < f && !v.notClear)) {
        if (v.__inHover && (this._hoverLayerDirty = Ef), i != null) {
          var d = v.getPaintRect();
          d && d.intersect(i) && (kn(s, v, o), v.setPrevPaintRect(d));
        } else
          kn(s, v, o);
        if (u) {
          var p = ve.getTime() - l;
          if (p > 15) {
            c++;
            break;
          }
        }
      }
    }
    Li(s, o), r.drawIdx = Math.max(c, f);
  }, e.prototype.getLayer = function(t, r) {
    return this._ensureLayer(t, 0, r);
  }, e.prototype._ensureLayer = function(t, r, n) {
    r = r || 0;
    var i = this._singleCanvas;
    i && !this._needsManuallyCompositing && (t = Mn, r = 0);
    var a = Rf(this._i, t)[r];
    return a || (a = fy("zr_" + t + "." + r, this, t, r), this._layerConfig[t] && gt(a, this._layerConfig[t], !0), (n || i && t !== Mn) && (a.virtual = !0), this._insertLayer(a, t, r, !1), a.initContext()), a;
  }, e.prototype.insertLayer = function(t, r) {
    this._insertLayer(r, t, 0, !1);
  }, e.prototype._insertLayer = function(t, r, n, i) {
    var a = this._i, o = a.layers, s = a.layerStack, u = this._domRoot, l = null;
    if (!(o[r] && o[r][n]) && jO(t)) {
      for (var f = s.length, h = 0; h < f && (s[h].zl < r || s[h].zl === r && s[h].zl2 < n); )
        h++;
      if (h > 0 && (l = Rf(a, s[h - 1].zl)[s[h - 1].zl2]), s.splice(h, 0, { zl: r, zl2: n }), Rf(a, r)[n] = t, !i && !t.virtual)
        if (l) {
          var c = l.dom;
          c.nextSibling ? u.insertBefore(t.dom, c.nextSibling) : u.appendChild(t.dom);
        } else
          u.firstChild ? u.insertBefore(t.dom, u.firstChild) : u.appendChild(t.dom);
      t.painter || (t.painter = this);
    }
  }, e.prototype.eachLayer = function(t, r) {
    return Xt(this._i, function(n, i) {
      t.call(r, n, i);
    });
  }, e.prototype.eachBuiltinLayer = function(t, r) {
    return Xt(this._i, function(n, i) {
      t.call(r, n, i);
    }, Ba);
  }, e.prototype.eachOtherLayer = function(t, r) {
    return Xt(this._i, function(n, i) {
      t.call(r, n, i);
    }, uv);
  }, e.prototype.getLayers = function() {
    var t = {};
    return Xt(this._i, function(r, n, i) {
      t[r.id] = r;
    }), t;
  }, e.prototype._updateLayerStatus = function(t, r) {
    var n = this;
    if (n._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var a = t[i];
        if (a.zlevel !== t[i - 1].zlevel || a.incremental) {
          n._needsManuallyCompositing = !0;
          break;
        }
      }
    Xt(n._i, function(g) {
      g.__dirty = !1, ds(g, function(m) {
        m.used = !1, m.endIdxNew = 0, m.notClearIdx = -1;
      });
    }, ps);
    for (var o, s = null, u = null, l = !1, f = 0, h = t.length; f < h; f++) {
      var a = t[f], c = a.zlevel, v = a.incremental, d = void 0;
      if (o !== c && (o = c, l = !1), v ? (l = !0, d = lC) : d = l ? uC : ws, (!s || c !== s.zlevel || d !== s.zlevel2) && (s = n._ensureLayer(c, d), u = null, !s.__builtin__)) {
        vv("ZLevel " + c + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!u || v !== u.key) && (u = ek(s, v), !u.used))
        if (u.used = !0, !r && u.first === a.id) {
          var p = f - u.startIdx;
          u.startIdx = f, u.drawIdx += p, u.endIdx += p;
        } else
          s.__dirty = !0, u.first = a.id, u.startIdx = u.drawIdx = f, u.endIdx = f + 1;
      u.endIdxNew = f + 1, a.__dirty & ue && !a.__inHover && ((!v || !a.notClear && f < u.drawIdx) && (s.__dirty = !0), v && a.notClear && u.notClearIdx < 0 && (u.notClearIdx = f));
    }
    Xt(n._i, function(g) {
      for (var m = g.__cursorStack, y = g.__cursors, _ = m.length - 1; _ >= 0; _--) {
        var S = y.get(m[_]);
        if (!S.used)
          g.__dirty = !0, y.removeKey(m[_]), m.splice(_, 1);
        else {
          var b = S.endIdxNew;
          (Lf(g) ? b < S.drawIdx : b !== S.endIdx || !b || t[b - 1].id !== S.last) && (g.__dirty = !0), S.endIdx = S.endIdxNew, S.last = b ? t[b - 1].id : NaN;
        }
      }
      g.__dirty && (ds(g, function(w) {
        w.drawIdx = w.startIdx;
      }), n._hoverLayerDirty === Pf && (n._hoverLayerDirty = QO));
    }, ps);
  }, e.prototype.clear = function() {
    return Xt(this._i, function(t) {
      t.clear(), fb(t);
    }, Ba), this;
  }, e.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, Xt(this._i, function(r) {
      r.setUnpainted();
    });
  }, e.prototype.configLayer = function(t, r) {
    if (r) {
      var n = this._layerConfig;
      n[t] ? gt(n[t], r, !0) : n[t] = r, Xt(this._i, function(i, a) {
        gt(i, n[a], !0);
      });
    }
  }, e.prototype.delLayer = function(t) {
    for (var r = this._i.layerStack, n = this._i.layers, i = r.length - 1; i >= 0; i--) {
      var a = r[i];
      if (a.zl === t) {
        var o = n[t][a.zl2];
        if (o.__builtin__)
          continue;
        if (r.splice(i, 1), n[t][a.zl2] = void 0, !o.virtual) {
          var s = o.dom.parentNode;
          s && s.removeChild(o.dom);
        }
      }
    }
  }, e.prototype.resize = function(t, r) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      t != null && (i.width = t), r != null && (i.height = r), t = Ti(a, 0, i), r = Ti(a, 1, i), n.style.display = "", (this._width !== t || r !== this._height) && (n.style.width = t + "px", n.style.height = r + "px", Xt(this._i, function(o) {
        o.resize(t, r);
      }), this.refresh({ paintAll: !0 })), this._width = t, this._height = r;
    } else {
      if (t == null || r == null)
        return;
      this._width = t, this._height = r, this._ensureLayer(Mn).resize(t, r);
    }
    return this;
  }, e.prototype.clearLayer = function(t) {
    I(this._i.layers[t], function(r) {
      r && !r.__builtin__ && r.clear();
    });
  }, e.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, e.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[Mn][0].dom;
    var r = new lb("image", this, t.pixelRatio || this.dpr);
    r.initContext(), r.clear(!1, t.backgroundColor || this._backgroundColor);
    var n = r.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var i = r.dom.width, a = r.dom.height;
      Xt(this._i, function(h) {
        h.__builtin__ ? n.drawImage(h.dom, 0, 0, i, a) : h.renderToCanvas && (n.save(), h.renderToCanvas(n), n.restore());
      });
    } else {
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        kn(n, f, o);
      }
      Li(n, o);
    }
    return r.dom;
  }, e.prototype.getWidth = function() {
    return this._width;
  }, e.prototype.getHeight = function() {
    return this._height;
  }, e;
}();
function nk(e) {
  e.registerPainter("canvas", rk);
}
tn([
  KL,
  iI,
  mP,
  kR,
  pO,
  iO,
  eO,
  nk,
  KO
]);
const ik = cb(
  function({
    id: t,
    className: r,
    style: n,
    option: i,
    notMerge: a = !1,
    lazyUpdate: o = !1,
    renderer: s = "canvas"
  }, u) {
    const l = Xc(null), f = Xc(null);
    return db(
      u,
      () => ({ getInstance: () => f.current }),
      []
    ), $c(() => {
      const h = l.current;
      if (!h) return;
      const c = SE(h, void 0, { renderer: s });
      f.current = c;
      const v = () => c.resize();
      if (typeof ResizeObserver < "u") {
        const d = new ResizeObserver(v);
        return d.observe(h), v(), () => {
          d.disconnect(), c.dispose(), f.current = null;
        };
      }
      return window.addEventListener("resize", v), v(), () => {
        window.removeEventListener("resize", v), c.dispose(), f.current = null;
      };
    }, [s]), $c(() => {
      var h;
      i && ((h = f.current) == null || h.setOption(i, a, o));
    }, [o, a, i, s]), /* @__PURE__ */ bb.jsx(
      "div",
      {
        id: t,
        ref: l,
        className: r,
        style: {
          width: "100%",
          minWidth: 0,
          aspectRatio: "16 / 9",
          ...n
        }
      }
    );
  }
);
ik.displayName = "DashEChartsX";
export {
  ik as DashEChartsX
};
