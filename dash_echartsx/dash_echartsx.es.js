import v0, { forwardRef as Iw, useRef as Ud, useImperativeHandle as Lw, useEffect as Wd } from "react";
var wc = { exports: {} }, Ea = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function Pw() {
  if (Yd) return Ea;
  Yd = 1;
  var t = v0, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, l) {
    var f, c = {}, h = null, v = null;
    l !== void 0 && (h = "" + l), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (f in u) n.call(u, f) && !a.hasOwnProperty(f) && (c[f] = u[f]);
    if (s && s.defaultProps) for (f in u = s.defaultProps, u) c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: e, type: s, key: h, ref: v, props: c, _owner: i.current };
  }
  return Ea.Fragment = r, Ea.jsx = o, Ea.jsxs = o, Ea;
}
var Aa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function Ow() {
  return Xd || (Xd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = v0, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), d = Symbol.iterator, p = "@@iterator";
    function g(I) {
      if (I === null || typeof I != "object")
        return null;
      var V = d && I[d] || I[p];
      return typeof V == "function" ? V : null;
    }
    var m = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(I) {
      {
        for (var V = arguments.length, Z = new Array(V > 1 ? V - 1 : 0), oe = 1; oe < V; oe++)
          Z[oe - 1] = arguments[oe];
        _("error", I, Z);
      }
    }
    function _(I, V, Z) {
      {
        var oe = m.ReactDebugCurrentFrame, we = oe.getStackAddendum();
        we !== "" && (V += "%s", Z = Z.concat([we]));
        var Le = Z.map(function(pe) {
          return String(pe);
        });
        Le.unshift("Warning: " + V), Function.prototype.apply.call(console[I], console, Le);
      }
    }
    var S = !1, b = !1, w = !1, T = !1, x = !1, D;
    D = Symbol.for("react.module.reference");
    function C(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === a || x || I === i || I === l || I === f || T || I === v || S || b || w || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === c || I.$$typeof === o || I.$$typeof === s || I.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === D || I.getModuleId !== void 0));
    }
    function E(I, V, Z) {
      var oe = I.displayName;
      if (oe)
        return oe;
      var we = V.displayName || V.name || "";
      return we !== "" ? Z + "(" + we + ")" : Z;
    }
    function L(I) {
      return I.displayName || "Context";
    }
    function A(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case s:
            var V = I;
            return L(V) + ".Consumer";
          case o:
            var Z = I;
            return L(Z._context) + ".Provider";
          case u:
            return E(I, I.render, "ForwardRef");
          case c:
            var oe = I.displayName || null;
            return oe !== null ? oe : A(I.type) || "Memo";
          case h: {
            var we = I, Le = we._payload, pe = we._init;
            try {
              return A(pe(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, O = 0, N, B, R, F, G, H, Y;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function W() {
      {
        if (O === 0) {
          N = console.log, B = console.info, R = console.warn, F = console.error, G = console.group, H = console.groupCollapsed, Y = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        O++;
      }
    }
    function ne() {
      {
        if (O--, O === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, I, {
              value: N
            }),
            info: P({}, I, {
              value: B
            }),
            warn: P({}, I, {
              value: R
            }),
            error: P({}, I, {
              value: F
            }),
            group: P({}, I, {
              value: G
            }),
            groupCollapsed: P({}, I, {
              value: H
            }),
            groupEnd: P({}, I, {
              value: Y
            })
          });
        }
        O < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = m.ReactCurrentDispatcher, Oe;
    function Ie(I, V, Z) {
      {
        if (Oe === void 0)
          try {
            throw Error();
          } catch (we) {
            var oe = we.stack.trim().match(/\n( *(at )?)/);
            Oe = oe && oe[1] || "";
          }
        return `
` + Oe + I;
      }
    }
    var he = !1, Se;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new te();
    }
    function fe(I, V) {
      if (!I || he)
        return "";
      {
        var Z = Se.get(I);
        if (Z !== void 0)
          return Z;
      }
      var oe;
      he = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = se.current, se.current = null, W();
      try {
        if (V) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (xt) {
              oe = xt;
            }
            Reflect.construct(I, [], pe);
          } else {
            try {
              pe.call();
            } catch (xt) {
              oe = xt;
            }
            I.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            oe = xt;
          }
          I();
        }
      } catch (xt) {
        if (xt && oe && typeof xt.stack == "string") {
          for (var ve = xt.stack.split(`
`), dt = oe.stack.split(`
`), Ge = ve.length - 1, We = dt.length - 1; Ge >= 1 && We >= 0 && ve[Ge] !== dt[We]; )
            We--;
          for (; Ge >= 1 && We >= 0; Ge--, We--)
            if (ve[Ge] !== dt[We]) {
              if (Ge !== 1 || We !== 1)
                do
                  if (Ge--, We--, We < 0 || ve[Ge] !== dt[We]) {
                    var Rt = `
` + ve[Ge].replace(" at new ", " at ");
                    return I.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", I.displayName)), typeof I == "function" && Se.set(I, Rt), Rt;
                  }
                while (Ge >= 1 && We >= 0);
              break;
            }
        }
      } finally {
        he = !1, se.current = Le, ne(), Error.prepareStackTrace = we;
      }
      var xi = I ? I.displayName || I.name : "", En = xi ? Ie(xi) : "";
      return typeof I == "function" && Se.set(I, En), En;
    }
    function ot(I, V, Z) {
      return fe(I, !1);
    }
    function Re(I) {
      var V = I.prototype;
      return !!(V && V.isReactComponent);
    }
    function st(I, V, Z) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return fe(I, Re(I));
      if (typeof I == "string")
        return Ie(I);
      switch (I) {
        case l:
          return Ie("Suspense");
        case f:
          return Ie("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case u:
            return ot(I.render);
          case c:
            return st(I.type, V, Z);
          case h: {
            var oe = I, we = oe._payload, Le = oe._init;
            try {
              return st(Le(we), V, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var Ue = Object.prototype.hasOwnProperty, Tt = {}, Ir = m.ReactDebugCurrentFrame;
    function ut(I) {
      if (I) {
        var V = I._owner, Z = st(I.type, I._source, V ? V.type : null);
        Ir.setExtraStackFrame(Z);
      } else
        Ir.setExtraStackFrame(null);
    }
    function wi(I, V, Z, oe, we) {
      {
        var Le = Function.call.bind(Ue);
        for (var pe in I)
          if (Le(I, pe)) {
            var ve = void 0;
            try {
              if (typeof I[pe] != "function") {
                var dt = Error((oe || "React class") + ": " + Z + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw dt.name = "Invariant Violation", dt;
              }
              ve = I[pe](V, pe, oe, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ge) {
              ve = Ge;
            }
            ve && !(ve instanceof Error) && (ut(we), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", Z, pe, typeof ve), ut(null)), ve instanceof Error && !(ve.message in Tt) && (Tt[ve.message] = !0, ut(we), y("Failed %s type: %s", Z, ve.message), ut(null));
          }
      }
    }
    var Zr = Array.isArray;
    function Dn(I) {
      return Zr(I);
    }
    function fw(I) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, Z = V && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return Z;
      }
    }
    function cw(I) {
      try {
        return Ld(I), !1;
      } catch {
        return !0;
      }
    }
    function Ld(I) {
      return "" + I;
    }
    function Pd(I) {
      if (cw(I))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fw(I)), Ld(I);
    }
    var Od = m.ReactCurrentOwner, hw = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nd, Rd;
    function vw(I) {
      if (Ue.call(I, "ref")) {
        var V = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function dw(I) {
      if (Ue.call(I, "key")) {
        var V = Object.getOwnPropertyDescriptor(I, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function pw(I, V) {
      typeof I.ref == "string" && Od.current;
    }
    function gw(I, V) {
      {
        var Z = function() {
          Nd || (Nd = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        Z.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function mw(I, V) {
      {
        var Z = function() {
          Rd || (Rd = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        Z.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var yw = function(I, V, Z, oe, we, Le, pe) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: I,
        key: V,
        ref: Z,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function _w(I, V, Z, oe, we) {
      {
        var Le, pe = {}, ve = null, dt = null;
        Z !== void 0 && (Pd(Z), ve = "" + Z), dw(V) && (Pd(V.key), ve = "" + V.key), vw(V) && (dt = V.ref, pw(V, we));
        for (Le in V)
          Ue.call(V, Le) && !hw.hasOwnProperty(Le) && (pe[Le] = V[Le]);
        if (I && I.defaultProps) {
          var Ge = I.defaultProps;
          for (Le in Ge)
            pe[Le] === void 0 && (pe[Le] = Ge[Le]);
        }
        if (ve || dt) {
          var We = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          ve && gw(pe, We), dt && mw(pe, We);
        }
        return yw(I, ve, dt, we, oe, Od.current, pe);
      }
    }
    var Fl = m.ReactCurrentOwner, kd = m.ReactDebugCurrentFrame;
    function Ti(I) {
      if (I) {
        var V = I._owner, Z = st(I.type, I._source, V ? V.type : null);
        kd.setExtraStackFrame(Z);
      } else
        kd.setExtraStackFrame(null);
    }
    var zl;
    zl = !1;
    function Gl(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function Bd() {
      {
        if (Fl.current) {
          var I = A(Fl.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function Sw(I) {
      return "";
    }
    var Vd = {};
    function bw(I) {
      {
        var V = Bd();
        if (!V) {
          var Z = typeof I == "string" ? I : I.displayName || I.name;
          Z && (V = `

Check the top-level render call using <` + Z + ">.");
        }
        return V;
      }
    }
    function Fd(I, V) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var Z = bw(V);
        if (Vd[Z])
          return;
        Vd[Z] = !0;
        var oe = "";
        I && I._owner && I._owner !== Fl.current && (oe = " It was passed a child from " + A(I._owner.type) + "."), Ti(I), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, oe), Ti(null);
      }
    }
    function zd(I, V) {
      {
        if (typeof I != "object")
          return;
        if (Dn(I))
          for (var Z = 0; Z < I.length; Z++) {
            var oe = I[Z];
            Gl(oe) && Fd(oe, V);
          }
        else if (Gl(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var we = g(I);
          if (typeof we == "function" && we !== I.entries)
            for (var Le = we.call(I), pe; !(pe = Le.next()).done; )
              Gl(pe.value) && Fd(pe.value, V);
        }
      }
    }
    function ww(I) {
      {
        var V = I.type;
        if (V == null || typeof V == "string")
          return;
        var Z;
        if (typeof V == "function")
          Z = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === c))
          Z = V.propTypes;
        else
          return;
        if (Z) {
          var oe = A(V);
          wi(Z, I.props, "prop", oe, I);
        } else if (V.PropTypes !== void 0 && !zl) {
          zl = !0;
          var we = A(V);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tw(I) {
      {
        for (var V = Object.keys(I.props), Z = 0; Z < V.length; Z++) {
          var oe = V[Z];
          if (oe !== "children" && oe !== "key") {
            Ti(I), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Ti(null);
            break;
          }
        }
        I.ref !== null && (Ti(I), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ti(null));
      }
    }
    var Gd = {};
    function Hd(I, V, Z, oe, we, Le) {
      {
        var pe = C(I);
        if (!pe) {
          var ve = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var dt = Sw();
          dt ? ve += dt : ve += Bd();
          var Ge;
          I === null ? Ge = "null" : Dn(I) ? Ge = "array" : I !== void 0 && I.$$typeof === e ? (Ge = "<" + (A(I.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof I, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, ve);
        }
        var We = _w(I, V, Z, we, Le);
        if (We == null)
          return We;
        if (pe) {
          var Rt = V.children;
          if (Rt !== void 0)
            if (oe)
              if (Dn(Rt)) {
                for (var xi = 0; xi < Rt.length; xi++)
                  zd(Rt[xi], I);
                Object.freeze && Object.freeze(Rt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zd(Rt, I);
        }
        if (Ue.call(V, "key")) {
          var En = A(I), xt = Object.keys(V).filter(function(Mw) {
            return Mw !== "key";
          }), Hl = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gd[En + Hl]) {
            var Aw = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Hl, En, Aw, En), Gd[En + Hl] = !0;
          }
        }
        return I === n ? Tw(We) : ww(We), We;
      }
    }
    function xw(I, V, Z) {
      return Hd(I, V, Z, !0);
    }
    function Cw(I, V, Z) {
      return Hd(I, V, Z, !1);
    }
    var Dw = Cw, Ew = xw;
    Aa.Fragment = n, Aa.jsx = Dw, Aa.jsxs = Ew;
  }()), Aa;
}
process.env.NODE_ENV === "production" ? wc.exports = Pw() : wc.exports = Ow();
var Nw = wc.exports;
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
var Tc = function(t, e) {
  return Tc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Tc(t, e);
};
function X(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Tc(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Kh = 12, d0 = "sans-serif", Ur = Kh + "px " + d0, Rw = 20, kw = 100, Bw = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function Vw(t) {
  var e = {};
  if (typeof JSON > "u")
    return e;
  for (var r = 0; r < t.length; r++) {
    var n = String.fromCharCode(r + 32), i = (t.charCodeAt(r) - Rw) / kw;
    e[n] = i;
  }
  return e;
}
var Fw = Vw(Bw), Pt = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ function() {
    var t, e;
    return function(r, n) {
      if (!t) {
        var i = Pt.createCanvas();
        t = i && i.getContext("2d");
      }
      if (t)
        return e !== n && (e = t.font = n || Ur), t.measureText(r);
      r = r || "", n = n || Ur;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || Kh, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * r.length;
      else
        for (var u = 0; u < r.length; u++) {
          var l = Fw[r[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(t, e, r) {
    var n = new Image();
    return n.onload = e, n.onerror = r, n.src = t, n;
  },
  getTime: function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }
}, p0 = mn([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(t, e) {
  return t["[object " + e + "]"] = !0, t;
}, {}), g0 = mn([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(t, e) {
  return t["[object " + e + "Array]"] = !0, t;
}, {}), _a = Object.prototype.toString, sl = Array.prototype, zw = sl.forEach, Gw = sl.filter, jh = sl.slice, Hw = sl.map, $d = (function() {
}).constructor, Jo = $d ? $d.prototype : null, Qh = "__proto__", Ul = 2311, Uw = Math.pow(2, 53) - 1;
function m0() {
  return Ul >= Uw && (Ul = 0), Ul++;
}
function Fr() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  typeof console < "u" && console.error.apply(console, t);
}
function ce(t) {
  if (t == null || typeof t != "object")
    return t;
  var e = t, r = _a.call(t);
  if (r === "[object Array]") {
    if (!ao(t)) {
      e = [];
      for (var n = 0, i = t.length; n < i; n++)
        e[n] = ce(t[n]);
    }
  } else if (g0[r]) {
    if (!ao(t)) {
      var a = t.constructor;
      if (a.from)
        e = a.from(t);
      else {
        e = new a(t.length);
        for (var n = 0, i = t.length; n < i; n++)
          e[n] = t[n];
      }
    }
  } else if (!p0[r] && !ao(t) && !ia(t)) {
    e = {};
    for (var o in t)
      t.hasOwnProperty(o) && o !== Qh && (e[o] = ce(t[o]));
  }
  return e;
}
function De(t, e, r) {
  if (!J(e) || !J(t))
    return r ? ce(e) : t;
  for (var n in e)
    if (e.hasOwnProperty(n) && n !== Qh) {
      var i = t[n], a = e[n];
      J(a) && J(i) && !$(a) && !$(i) && !ia(a) && !ia(i) && !Zd(a) && !Zd(i) && !ao(a) && !ao(i) ? De(i, a, r) : (r || !(n in t)) && (t[n] = ce(e[n]));
    }
  return t;
}
function z(t, e) {
  if (Object.assign)
    Object.assign(t, e);
  else
    for (var r in e)
      e.hasOwnProperty(r) && r !== Qh && (t[r] = e[r]);
  return t;
}
function Ww(t, e, r) {
  t = t || {};
  for (var n = 0; n < r.length; n++) {
    var i = r[n];
    t[i] = e[i];
  }
  return t;
}
function Ae(t, e, r) {
  for (var n = de(e), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    t[o] == null && (t[o] = e[o]);
  }
  return t;
}
function xe(t, e) {
  if (t) {
    if (t.indexOf)
      return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
      if (t[r] === e)
        return r;
  }
  return -1;
}
function Yw(t, e) {
  var r = t.prototype;
  function n() {
  }
  n.prototype = e.prototype, t.prototype = new n();
  for (var i in r)
    r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
  t.prototype.constructor = t, t.superClass = e;
}
function Er(t, e, r) {
  if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && t[a] == null && (t[a] = e[a]);
    }
  else
    Ae(t, e);
}
function It(t) {
  return !t || typeof t == "string" ? !1 : typeof t.length == "number";
}
function M(t, e, r) {
  if (t && e)
    if (t.forEach && t.forEach === zw)
      t.forEach(e, r);
    else if (t.length === +t.length)
      for (var n = 0, i = t.length; n < i; n++)
        e.call(r, t[n], n, t);
    else
      for (var a in t)
        t.hasOwnProperty(a) && e.call(r, t[a], a, t);
}
function Q(t, e, r) {
  if (!t)
    return [];
  if (!e)
    return Jh(t);
  if (t.map && t.map === Hw)
    return t.map(e, r);
  for (var n = [], i = 0, a = t.length; i < a; i++)
    n.push(e.call(r, t[i], i, t));
  return n;
}
function mn(t, e, r, n) {
  if (t && e) {
    for (var i = 0, a = t.length; i < a; i++)
      r = e.call(n, r, t[i], i, t);
    return r;
  }
}
function tt(t, e, r) {
  if (!t)
    return [];
  if (!e)
    return Jh(t);
  if (t.filter && t.filter === Gw)
    return t.filter(e, r);
  for (var n = [], i = 0, a = t.length; i < a; i++)
    e.call(r, t[i], i, t) && n.push(t[i]);
  return n;
}
function Xw(t, e, r) {
  if (t && e) {
    for (var n = 0, i = t.length; n < i; n++)
      if (e.call(r, t[n], n, t))
        return t[n];
  }
}
function de(t) {
  if (!t)
    return [];
  if (Object.keys)
    return Object.keys(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(r);
  return e;
}
function $w(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return function() {
    return t.apply(e, r.concat(jh.call(arguments)));
  };
}
var Pe = Jo && ie(Jo.bind) ? Jo.call.bind(Jo.bind) : $w;
function Xe(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return function() {
    return t.apply(this, e.concat(jh.call(arguments)));
  };
}
function $(t) {
  return Array.isArray ? Array.isArray(t) : _a.call(t) === "[object Array]";
}
function ie(t) {
  return typeof t == "function";
}
function j(t) {
  return typeof t == "string";
}
function cu(t) {
  return _a.call(t) === "[object String]";
}
function Ee(t) {
  return typeof t == "number";
}
function J(t) {
  var e = typeof t;
  return e === "function" || !!t && e === "object";
}
function Zd(t) {
  return !!p0[_a.call(t)];
}
function bt(t) {
  return !!g0[_a.call(t)];
}
function ia(t) {
  return typeof t == "object" && typeof t.nodeType == "number" && typeof t.ownerDocument == "object";
}
function ul(t) {
  return t.colorStops != null;
}
function Zw(t) {
  return t.image != null;
}
function qw(t) {
  return _a.call(t) === "[object RegExp]";
}
function aa(t) {
  return t !== t;
}
function oa() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] != null)
      return t[r];
}
function K(t, e) {
  return t ?? e;
}
function zr(t, e, r) {
  return t ?? e ?? r;
}
function Jh(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return jh.apply(t, e);
}
function ev(t) {
  if (typeof t == "number")
    return [t, t, t, t];
  var e = t.length;
  return e === 2 ? [t[0], t[1], t[0], t[1]] : e === 3 ? [t[0], t[1], t[2], t[1]] : t;
}
function k(t, e) {
  if (!t)
    throw new Error(e);
}
function Sr(t) {
  return t == null ? null : typeof t.trim == "function" ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var y0 = "__ec_primitive__";
function xc(t) {
  t[y0] = !0;
}
function ao(t) {
  return t[y0];
}
var Kw = function() {
  function t() {
    this.data = {};
  }
  return t.prototype.delete = function(e) {
    var r = this.has(e);
    return r && delete this.data[e], r;
  }, t.prototype.has = function(e) {
    return this.data.hasOwnProperty(e);
  }, t.prototype.get = function(e) {
    return this.data[e];
  }, t.prototype.set = function(e, r) {
    return this.data[e] = r, this;
  }, t.prototype.keys = function() {
    return de(this.data);
  }, t.prototype.forEach = function(e) {
    var r = this.data;
    for (var n in r)
      r.hasOwnProperty(n) && e(r[n], n);
  }, t;
}(), _0 = typeof Map == "function";
function jw() {
  return _0 ? /* @__PURE__ */ new Map() : new Kw();
}
var Qw = function() {
  function t(e) {
    var r = $(e);
    this.data = jw();
    var n = this;
    e instanceof t ? e.each(i) : e && M(e, i);
    function i(a, o) {
      r ? n.set(a, o) : n.set(o, a);
    }
  }
  return t.prototype.hasKey = function(e) {
    return this.data.has(e);
  }, t.prototype.get = function(e) {
    return this.data.get(e);
  }, t.prototype.set = function(e, r) {
    return this.data.set(e, r), r;
  }, t.prototype.each = function(e, r) {
    this.data.forEach(function(n, i) {
      e.call(r, n, i);
    });
  }, t.prototype.keys = function() {
    var e = this.data.keys();
    return _0 ? Array.from(e) : e;
  }, t.prototype.removeKey = function(e) {
    this.data.delete(e);
  }, t;
}();
function re(t) {
  return new Qw(t);
}
function Jw(t, e) {
  for (var r = new t.constructor(t.length + e.length), n = 0; n < t.length; n++)
    r[n] = t[n];
  for (var i = t.length, n = 0; n < e.length; n++)
    r[n + i] = e[n];
  return r;
}
function ll(t, e) {
  var r;
  if (Object.create)
    r = Object.create(t);
  else {
    var n = function() {
    };
    n.prototype = t, r = new n();
  }
  return e && z(r, e), r;
}
function S0(t) {
  var e = t.style;
  e.webkitUserSelect = "none", e.userSelect = "none", e.webkitTapHighlightColor = "rgba(0,0,0,0)", e["-webkit-touch-callout"] = "none";
}
function _t(t, e) {
  return t.hasOwnProperty(e);
}
function it() {
}
var Xs = 180 / Math.PI, eT = /* @__PURE__ */ function() {
  function t() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return t;
}(), tT = /* @__PURE__ */ function() {
  function t() {
    this.browser = new eT(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return t;
}(), le = new tT();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (le.wxa = !0, le.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? le.worker = !0 : !le.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (le.node = !0, le.svgSupported = !0) : rT(navigator.userAgent, le);
function rT(t, e) {
  var r = e.browser, n = t.match(/Firefox\/([\d.]+)/), i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(t);
  n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), e.svgSupported = typeof SVGRect < "u", e.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, e.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11);
  var s = e.domSupported = typeof document < "u";
  if (s) {
    var u = document.documentElement.style;
    e.transform3dSupported = (r.ie && "transition" in u || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in u) && !("OTransition" in u), e.transformSupported = e.transform3dSupported || r.ie && +r.version >= 9;
  }
}
var nT = ".", An = "___EC__COMPONENT__CONTAINER___", b0 = "___EC__EXTENDED_CLASS___";
function br(t) {
  var e = {
    main: "",
    sub: ""
  };
  if (t) {
    var r = t.split(nT);
    e.main = r[0] || "", e.sub = r[1] || "";
  }
  return e;
}
function iT(t) {
  k(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
}
function aT(t) {
  return !!(t && t[b0]);
}
function tv(t, e) {
  t.$constructor = t, t.extend = function(r) {
    process.env.NODE_ENV !== "production" && M(e, function(a) {
      r[a] || console.warn("Method `" + a + "` should be implemented" + (r.type ? " in " + r.type : "") + ".");
    });
    var n = this, i;
    return oT(n) ? i = /** @class */
    function(a) {
      X(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(n) : (i = function() {
      (r.$constructor || n).apply(this, arguments);
    }, Yw(i, this)), z(i.prototype, r), i[b0] = !0, i.extend = this.extend, i.superCall = lT, i.superApply = fT, i.superClass = n, i;
  };
}
function oT(t) {
  return ie(t) && /^class\s/.test(Function.prototype.toString.call(t));
}
function w0(t, e) {
  t.extend = e.extend;
}
var sT = Math.round(Math.random() * 10);
function uT(t) {
  var e = ["__\0is_clz", sT++].join("_");
  t.prototype[e] = !0, process.env.NODE_ENV !== "production" && k(!t.isInstance, 'The method "is" can not be defined.'), t.isInstance = function(r) {
    return !!(r && r[e]);
  };
}
function lT(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return this.superClass.prototype[e].apply(t, r);
}
function fT(t, e, r) {
  return this.superClass.prototype[e].apply(t, r);
}
function fl(t) {
  var e = {};
  t.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      iT(i), n.prototype.type = i;
      var a = br(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && e[a.main] && console.warn(a.main + " exists."), e[a.main] = n;
      else if (a.sub !== An) {
        var o = r(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, t.getClass = function(n, i, a) {
    var o = e[n];
    if (o && o[An] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, t.getClassesByMainType = function(n) {
    var i = br(n), a = [], o = e[i.main];
    return o && o[An] ? M(o, function(s, u) {
      u !== An && a.push(s);
    }) : a.push(o), a;
  }, t.hasClass = function(n) {
    var i = br(n);
    return !!e[i.main];
  }, t.getAllClassMainTypes = function() {
    var n = [];
    return M(e, function(i, a) {
      n.push(a);
    }), n;
  }, t.hasSubTypes = function(n) {
    var i = br(n), a = e[i.main];
    return a && a[An];
  };
  function r(n) {
    var i = e[n.main];
    return (!i || !i[An]) && (i = e[n.main] = {}, i[An] = !0), i;
  }
}
function bo(t, e) {
  for (var r = 0; r < t.length; r++)
    t[r][1] || (t[r][1] = t[r][0]);
  return e = e || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < t.length; s++) {
      var u = t[s][1];
      if (!(i && xe(i, u) >= 0 || a && xe(a, u) < 0)) {
        var l = n.getShallow(u, e);
        l != null && (o[t[s][0]] = l);
      }
    }
    return o;
  };
}
var cT = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], hT = bo(cT), vT = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getAreaStyle = function(e, r) {
      return hT(this, e, r);
    }, t;
  }()
), T0 = /* @__PURE__ */ function() {
  function t(e) {
    this.value = e;
  }
  return t;
}(), dT = function() {
  function t() {
    this._len = 0;
  }
  return t.prototype.insert = function(e) {
    var r = new T0(e);
    return this.insertEntry(r), r;
  }, t.prototype.insertEntry = function(e) {
    this.head ? (this.tail.next = e, e.prev = this.tail, e.next = null, this.tail = e) : this.head = this.tail = e, this._len++;
  }, t.prototype.remove = function(e) {
    var r = e.prev, n = e.next;
    r ? r.next = n : this.head = n, n ? n.prev = r : this.tail = r, e.next = e.prev = null, this._len--;
  }, t.prototype.len = function() {
    return this._len;
  }, t.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, t;
}(), sa = function() {
  function t(e) {
    this._list = new dT(), this._maxSize = 10, this._map = {}, this._maxSize = e;
  }
  return t.prototype.put = function(e, r) {
    var n = this._list, i = this._map, a = null;
    if (i[e] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = r : s = new T0(r), s.key = e, n.insertEntry(s), i[e] = s;
    }
    return a;
  }, t.prototype.get = function(e) {
    var r = this._map[e], n = this._list;
    if (r != null)
      return r !== n.tail && (n.remove(r), n.insertEntry(r)), r.value;
  }, t.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, t.prototype.len = function() {
    return this._list.len();
  }, t;
}(), Cc = new sa(50);
function pT(t) {
  if (typeof t == "string") {
    var e = Cc.get(t);
    return e && e.image;
  } else
    return t;
}
function rv(t, e, r, n, i) {
  if (t)
    if (typeof t == "string") {
      if (e && e.__zrImageSrc === t || !r)
        return e;
      var a = Cc.get(t), o = { hostEl: r, cb: n, cbPayload: i };
      return a ? (e = a.image, !cl(e) && a.pending.push(o)) : (e = Pt.loadImage(t, qd, qd), e.__zrImageSrc = t, Cc.put(t, e.__cachedImgObj = {
        image: e,
        pending: [o]
      })), e;
    } else
      return t;
  else return e;
}
function qd() {
  var t = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var e = 0; e < t.pending.length; e++) {
    var r = t.pending[e], n = r.cb;
    n && n(this, r.cbPayload), r.hostEl.dirty();
  }
  t.pending.length = 0;
}
function cl(t) {
  return t && t.width && t.height;
}
function wr() {
  return [1, 0, 0, 1, 0, 0];
}
function Fo(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
}
function nv(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
}
function oo(t, e, r) {
  var n = e[0] * r[0] + e[2] * r[1], i = e[1] * r[0] + e[3] * r[1], a = e[0] * r[2] + e[2] * r[3], o = e[1] * r[2] + e[3] * r[3], s = e[0] * r[4] + e[2] * r[5] + e[4], u = e[1] * r[4] + e[3] * r[5] + e[5];
  return t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = u, t;
}
function Dc(t, e, r) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + r[0], t[5] = e[5] + r[1], t;
}
function iv(t, e, r, n) {
  n === void 0 && (n = [0, 0]);
  var i = e[0], a = e[2], o = e[4], s = e[1], u = e[3], l = e[5], f = Math.sin(r), c = Math.cos(r);
  return t[0] = i * c + s * f, t[1] = -i * f + s * c, t[2] = a * c + u * f, t[3] = -a * f + c * u, t[4] = c * (o - n[0]) + f * (l - n[1]) + n[0], t[5] = c * (l - n[1]) - f * (o - n[0]) + n[1], t;
}
function gT(t, e, r) {
  var n = r[0], i = r[1];
  return t[0] = e[0] * n, t[1] = e[1] * i, t[2] = e[2] * n, t[3] = e[3] * i, t[4] = e[4] * n, t[5] = e[5] * i, t;
}
function zo(t, e) {
  var r = e[0], n = e[2], i = e[4], a = e[1], o = e[3], s = e[5], u = r * o - a * n;
  return u ? (u = 1 / u, t[0] = o * u, t[1] = -a * u, t[2] = -n * u, t[3] = r * u, t[4] = (n * s - o * i) * u, t[5] = (a * i - r * s) * u, t) : null;
}
function Sa(t, e) {
  return t == null && (t = 0), e == null && (e = 0), [t, e];
}
function mT(t) {
  return [t[0], t[1]];
}
function Wl(t, e, r) {
  return t[0] = e, t[1] = r, t;
}
function Kd(t, e, r) {
  return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t;
}
function yT(t, e, r) {
  return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t;
}
function _T(t) {
  return Math.sqrt(ST(t));
}
function ST(t) {
  return t[0] * t[0] + t[1] * t[1];
}
function Yl(t, e, r) {
  return t[0] = e[0] * r, t[1] = e[1] * r, t;
}
function bT(t, e) {
  var r = _T(e);
  return r === 0 ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t;
}
function Ec(t, e) {
  return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
}
var Ac = Ec;
function wT(t, e) {
  return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
}
var Qi = wT;
function Xl(t, e, r, n) {
  return t[0] = e[0] + n * (r[0] - e[0]), t[1] = e[1] + n * (r[1] - e[1]), t;
}
function Kt(t, e, r) {
  var n = e[0], i = e[1];
  return t[0] = r[0] * n + r[2] * i + r[4], t[1] = r[1] * n + r[3] * i + r[5], t;
}
function Yi(t, e, r) {
  return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t;
}
function Xi(t, e, r) {
  return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t;
}
var ue = function() {
  function t(e, r) {
    this.x = e || 0, this.y = r || 0;
  }
  return t.prototype.copy = function(e) {
    return this.x = e.x, this.y = e.y, this;
  }, t.prototype.clone = function() {
    return new t(this.x, this.y);
  }, t.prototype.set = function(e, r) {
    return this.x = e, this.y = r, this;
  }, t.prototype.equal = function(e) {
    return e.x === this.x && e.y === this.y;
  }, t.prototype.add = function(e) {
    return this.x += e.x, this.y += e.y, this;
  }, t.prototype.scale = function(e) {
    this.x *= e, this.y *= e;
  }, t.prototype.scaleAndAdd = function(e, r) {
    this.x += e.x * r, this.y += e.y * r;
  }, t.prototype.sub = function(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }, t.prototype.dot = function(e) {
    return this.x * e.x + this.y * e.y;
  }, t.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, t.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, t.prototype.normalize = function() {
    var e = this.len();
    return this.x /= e, this.y /= e, this;
  }, t.prototype.distance = function(e) {
    var r = this.x - e.x, n = this.y - e.y;
    return Math.sqrt(r * r + n * n);
  }, t.prototype.distanceSquare = function(e) {
    var r = this.x - e.x, n = this.y - e.y;
    return r * r + n * n;
  }, t.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, t.prototype.transform = function(e) {
    if (e) {
      var r = this.x, n = this.y;
      return this.x = e[0] * r + e[2] * n + e[4], this.y = e[1] * r + e[3] * n + e[5], this;
    }
  }, t.prototype.toArray = function(e) {
    return e[0] = this.x, e[1] = this.y, e;
  }, t.prototype.fromArray = function(e) {
    this.x = e[0], this.y = e[1];
  }, t.set = function(e, r, n) {
    e.x = r, e.y = n;
  }, t.copy = function(e, r) {
    e.x = r.x, e.y = r.y;
  }, t.len = function(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y);
  }, t.lenSquare = function(e) {
    return e.x * e.x + e.y * e.y;
  }, t.dot = function(e, r) {
    return e.x * r.x + e.y * r.y;
  }, t.add = function(e, r, n) {
    e.x = r.x + n.x, e.y = r.y + n.y;
  }, t.sub = function(e, r, n) {
    e.x = r.x - n.x, e.y = r.y - n.y;
  }, t.scale = function(e, r, n) {
    e.x = r.x * n, e.y = r.y * n;
  }, t.scaleAndAdd = function(e, r, n, i) {
    e.x = r.x + n.x * i, e.y = r.y + n.y * i;
  }, t.lerp = function(e, r, n, i) {
    var a = 1 - i;
    e.x = a * r.x + i * n.x, e.y = a * r.y + i * n.y;
  }, t;
}(), ni = Math.min, $i = Math.max, Mc = Math.abs, jd = ["x", "y"], TT = ["width", "height"], Mn = new ue(), In = new ue(), Ln = new ue(), Pn = new ue(), Lt = x0(), Za = Lt.minTv, Ic = Lt.maxTv, so = [0, 0], ae = function() {
  function t(e, r, n, i) {
    $l(this, e, r, n, i);
  }
  return t.set = function(e, r, n, i, a) {
    return i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), e.x = r, e.y = n, e.width = i, e.height = a, e;
  }, t.prototype.union = function(e) {
    var r = ni(e.x, this.x), n = ni(e.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = $i(e.x + e.width, this.x + this.width) - r : this.width = e.width, isFinite(this.y) && isFinite(this.height) ? this.height = $i(e.y + e.height, this.y + this.height) - n : this.height = e.height, this.x = r, this.y = n;
  }, t.prototype.applyTransform = function(e) {
    t.applyTransform(this, this, e);
  }, t.prototype.calculateTransform = function(e) {
    return xT(wr(), this, e);
  }, t.prototype.intersect = function(e, r, n) {
    return t.intersect(this, e, r, n);
  }, t.intersect = function(e, r, n, i) {
    n && ue.set(n, 0, 0);
    var a = i && i.outIntersectRect || null, o = i && i.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !e || !r)
      return !1;
    e instanceof t || (e = $l(CT, e.x, e.y, e.width, e.height)), r instanceof t || (r = $l(DT, r.x, r.y, r.width, r.height));
    var s = !!n;
    Lt.reset(i, s);
    var u = Lt.touchThreshold, l = e.x + u, f = e.x + e.width - u, c = e.y + u, h = e.y + e.height - u, v = r.x + u, d = r.x + r.width - u, p = r.y + u, g = r.y + r.height - u;
    if (l > f || c > h || v > d || p > g)
      return !1;
    var m = !(f < v || d < l || h < p || g < c);
    return (s || a) && (so[0] = 1 / 0, so[1] = 0, Jd(l, f, v, d, 0, s, a, o), Jd(c, h, p, g, 1, s, a, o), s && ue.copy(n, m ? Lt.useDir ? Lt.dirMinTv : Za : Ic)), m;
  }, t.contain = function(e, r, n) {
    return r >= e.x && r <= e.x + e.width && n >= e.y && n <= e.y + e.height;
  }, t.prototype.contain = function(e, r) {
    return t.contain(this, e, r);
  }, t.prototype.clone = function() {
    return new t(this.x, this.y, this.width, this.height);
  }, t.prototype.copy = function(e) {
    Qd(this, e);
  }, t.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, t.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, t.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, t.create = function(e) {
    return new t(e ? e.x : 0, e ? e.y : 0, e ? e.width : 0, e ? e.height : 0);
  }, t.copy = function(e, r) {
    return e.x = r.x, e.y = r.y, e.width = r.width, e.height = r.height, e;
  }, t.applyTransform = function(e, r, n) {
    if (!n) {
      e !== r && Qd(e, r);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      e.x = r.x * i + o, e.y = r.y * a + s, e.width = r.width * i, e.height = r.height * a, e.width < 0 && (e.x += e.width, e.width = -e.width), e.height < 0 && (e.y += e.height, e.height = -e.height);
      return;
    }
    Mn.x = Ln.x = r.x, Mn.y = Pn.y = r.y, In.x = Pn.x = r.x + r.width, In.y = Ln.y = r.y + r.height, Mn.transform(n), Pn.transform(n), In.transform(n), Ln.transform(n), e.x = ni(Mn.x, In.x, Ln.x, Pn.x), e.y = ni(Mn.y, In.y, Ln.y, Pn.y);
    var u = $i(Mn.x, In.x, Ln.x, Pn.x), l = $i(Mn.y, In.y, Ln.y, Pn.y);
    e.width = u - e.x, e.height = l - e.y;
  }, t.calculateTransform = function(e, r, n) {
    var i = n.width / r.width, a = n.height / r.height;
    return e = Fo(e || []), Dc(e, e, Wl(Zl, -r.x, -r.y)), gT(e, e, Wl(Zl, i, a)), Dc(e, e, Wl(Zl, n.x, n.y)), e;
  }, t;
}();
ae.create;
var $l = ae.set, Qd = ae.copy, xT = ae.calculateTransform;
ae.applyTransform;
ae.contain;
var CT = new ae(0, 0, 0, 0), DT = new ae(0, 0, 0, 0), Zl = [];
function Jd(t, e, r, n, i, a, o, s) {
  var u = Mc(e - r), l = Mc(n - t), f = ni(u, l), c = jd[i], h = jd[1 - i], v = TT[i];
  e < r || n < t ? u < l ? (a && (Ic[c] = -u), s && (o[c] = e, o[v] = 0)) : (a && (Ic[c] = l), s && (o[c] = t, o[v] = 0)) : (o && (o[c] = $i(t, r), o[v] = ni(e, n) - o[c]), a && (f < so[0] || Lt.useDir) && (so[0] = ni(f, so[0]), (u < l || !Lt.bidirectional) && (Za[c] = u, Za[h] = 0, Lt.useDir && Lt.calcDirMTV()), (u >= l || !Lt.bidirectional) && (Za[c] = -l, Za[h] = 0, Lt.useDir && Lt.calcDirMTV())));
}
function x0() {
  var t = 0, e = new ue(), r = new ue(), n = {
    minTv: new ue(),
    maxTv: new ue(),
    useDir: !1,
    dirMinTv: new ue(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      n.touchThreshold = 0, a && a.touchThreshold != null && (n.touchThreshold = $i(0, a.touchThreshold)), n.negativeSize = !1, o && (n.minTv.set(1 / 0, 1 / 0), n.maxTv.set(0, 0), n.useDir = !1, a && a.direction != null && (n.useDir = !0, n.dirMinTv.copy(n.minTv), r.copy(n.minTv), t = a.direction, n.bidirectional = a.bidirectional == null || !!a.bidirectional, n.bidirectional || e.set(Math.cos(t), Math.sin(t))));
    },
    calcDirMTV: function() {
      var a = n.minTv, o = n.dirMinTv, s = a.y * a.y + a.x * a.x, u = Math.sin(t), l = Math.cos(t), f = u * a.y + l * a.x;
      if (i(f)) {
        i(a.x) && i(a.y) && o.set(0, 0);
        return;
      }
      if (r.x = s * l / f, r.y = s * u / f, i(r.x) && i(r.y)) {
        o.set(0, 0);
        return;
      }
      (n.bidirectional || e.dot(r) > 0) && r.len() < o.len() && o.copy(r);
    }
  };
  function i(a) {
    return Mc(a) < 1e-10;
  }
  return n;
}
function Tr(t) {
  es || (es = new sa(100)), t = t || Ur;
  var e = es.get(t);
  return e || (e = {
    font: t,
    strWidthCache: new sa(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: Pt.measureText("国", t).width,
    asciiCharWidth: Pt.measureText("a", t).width
  }, es.put(t, e)), e;
}
var es;
function ET(t) {
  if (!(ql >= ep)) {
    t = t || Ur;
    for (var e = [], r = +/* @__PURE__ */ new Date(), n = 0; n <= 127; n++)
      e[n] = Pt.measureText(String.fromCharCode(n), t).width;
    var i = +/* @__PURE__ */ new Date() - r;
    return i > 16 ? ql = ep : i > 2 && ql++, e;
  }
}
var ql = 0, ep = 5;
function C0(t, e) {
  return t.asciiWidthMapTried || (t.asciiWidthMap = ET(t.font), t.asciiWidthMapTried = !0), 0 <= e && e <= 127 ? t.asciiWidthMap != null ? t.asciiWidthMap[e] : t.asciiCharWidth : t.stWideCharWidth;
}
function xr(t, e) {
  var r = t.strWidthCache, n = r.get(e);
  return n == null && (n = Pt.measureText(e, t.font).width, r.put(e, n)), n;
}
function tp(t, e, r, n) {
  var i = xr(Tr(e), t), a = Go(e), o = ua(0, i, r), s = si(0, a, n), u = new ae(o, s, i, a);
  return u;
}
function D0(t, e, r, n) {
  var i = ((t || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return tp(i[0], e, r, n);
  for (var o = new ae(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = tp(i[s], e, r, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function ua(t, e, r, n) {
  return r === "right" ? n ? t += e : t -= e : r === "center" && (n ? t += e / 2 : t -= e / 2), t;
}
function si(t, e, r, n) {
  return r === "middle" ? n ? t += e / 2 : t -= e / 2 : r === "bottom" && (n ? t += e : t -= e), t;
}
function Go(t) {
  return Tr(t).stWideCharWidth;
}
function hi(t, e) {
  return typeof t == "string" ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
}
function hu(t, e, r) {
  var n = e.position || "inside", i = e.distance != null ? e.distance : 5, a = r.height, o = r.width, s = a / 2, u = r.x, l = r.y, f = "left", c = "top";
  if (n instanceof Array)
    u += hi(n[0], r.width), l += hi(n[1], r.height), f = null, c = null;
  else
    switch (n) {
      case "left":
        u -= i, l += s, f = "right", c = "middle";
        break;
      case "right":
        u += i + o, l += s, c = "middle";
        break;
      case "top":
        u += o / 2, l -= i, f = "center", c = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + i, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", c = "middle";
        break;
      case "insideLeft":
        u += i, l += s, c = "middle";
        break;
      case "insideRight":
        u += o - i, l += s, f = "right", c = "middle";
        break;
      case "insideTop":
        u += o / 2, l += i, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - i, f = "center", c = "bottom";
        break;
      case "insideTopLeft":
        u += i, l += i;
        break;
      case "insideTopRight":
        u += o - i, l += i, f = "right";
        break;
      case "insideBottomLeft":
        u += i, l += a - i, c = "bottom";
        break;
      case "insideBottomRight":
        u += o - i, l += a - i, f = "right", c = "bottom";
        break;
    }
  return t = t || {}, t.x = u, t.y = l, t.align = f, t.verticalAlign = c, t;
}
var Kl = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function AT(t, e, r, n, i, a) {
  if (!r) {
    t.text = "", t.isTruncated = !1;
    return;
  }
  var o = (e + "").split(`
`);
  a = E0(r, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    A0(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  t.text = o.join(`
`), t.isTruncated = s;
}
function E0(t, e, r, n) {
  n = n || {};
  var i = z({}, n);
  r = K(r, "..."), i.maxIterations = K(n.maxIterations, 2);
  var a = i.minChar = K(n.minChar, 0), o = i.fontMeasureInfo = Tr(e), s = o.asciiCharWidth;
  i.placeholder = K(n.placeholder, "");
  for (var u = t = Math.max(0, t - 1), l = 0; l < a && u >= s; l++)
    u -= s;
  var f = xr(o, r);
  return f > u && (r = "", f = 0), u = t - f, i.ellipsis = r, i.ellipsisWidth = f, i.contentWidth = u, i.containerWidth = t, i;
}
function A0(t, e, r) {
  var n = r.containerWidth, i = r.contentWidth, a = r.fontMeasureInfo;
  if (!n) {
    t.textLine = "", t.isTruncated = !1;
    return;
  }
  var o = xr(a, e);
  if (o <= n) {
    t.textLine = e, t.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= i || s >= r.maxIterations) {
      e += r.ellipsis;
      break;
    }
    var u = s === 0 ? MT(e, i, a) : o > 0 ? Math.floor(e.length * i / o) : 0;
    e = e.substr(0, u), o = xr(a, e);
  }
  e === "" && (e = r.placeholder), t.textLine = e, t.isTruncated = !0;
}
function MT(t, e, r) {
  for (var n = 0, i = 0, a = t.length; i < a && n < e; i++)
    n += C0(r, t.charCodeAt(i));
  return i;
}
function IT(t, e, r, n) {
  var i = av(t), a = e.overflow, o = e.padding, s = o ? o[1] + o[3] : 0, u = o ? o[0] + o[2] : 0, l = e.font, f = a === "truncate", c = Go(l), h = K(e.lineHeight, c), v = e.lineOverflow === "truncate", d = !1, p = e.width;
  p == null && r != null && (p = r - s);
  var g = e.height;
  g == null && n != null && (g = n - u);
  var m;
  p != null && (a === "break" || a === "breakAll") ? m = i ? M0(i, e.font, p, a === "breakAll", 0).lines : [] : m = i ? i.split(`
`) : [];
  var y = m.length * h;
  if (g == null && (g = y), y > g && v) {
    var _ = Math.floor(g / h);
    d = d || m.length > _, m = m.slice(0, _), y = m.length * h;
  }
  if (i && f && p != null)
    for (var S = E0(p, l, e.ellipsis, {
      minChar: e.truncateMinChar,
      placeholder: e.placeholder
    }), b = {}, w = 0; w < m.length; w++)
      A0(b, m[w], S), m[w] = b.textLine, d = d || b.isTruncated;
  for (var T = g, x = 0, D = Tr(l), w = 0; w < m.length; w++)
    x = Math.max(xr(D, m[w]), x);
  p == null && (p = x);
  var C = p;
  return T += u, C += s, {
    lines: m,
    height: g,
    outerWidth: C,
    outerHeight: T,
    lineHeight: h,
    calculatedLineHeight: c,
    contentWidth: x,
    contentHeight: y,
    width: p,
    isTruncated: d
  };
}
var LT = /* @__PURE__ */ function() {
  function t() {
  }
  return t;
}(), rp = /* @__PURE__ */ function() {
  function t(e) {
    this.tokens = [], e && (this.tokens = e);
  }
  return t;
}(), PT = /* @__PURE__ */ function() {
  function t() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return t;
}();
function OT(t, e, r, n, i) {
  var a = new PT(), o = av(t);
  if (!o)
    return a;
  var s = e.padding, u = s ? s[1] + s[3] : 0, l = s ? s[0] + s[2] : 0, f = e.width;
  f == null && r != null && (f = r - u);
  var c = e.height;
  c == null && n != null && (c = n - l);
  for (var h = e.overflow, v = (h === "break" || h === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: h === "breakAll" } : null, d = Kl.lastIndex = 0, p; (p = Kl.exec(o)) != null; ) {
    var g = p.index;
    g > d && jl(a, o.substring(d, g), e, v), jl(a, p[2], e, v, p[1]), d = Kl.lastIndex;
  }
  d < o.length && jl(a, o.substring(d, o.length), e, v);
  var m = [], y = 0, _ = 0, S = h === "truncate", b = e.lineOverflow === "truncate", w = {};
  function T(se, Oe, Ie) {
    se.width = Oe, se.lineHeight = Ie, y += Ie, _ = Math.max(_, Oe);
  }
  e: for (var x = 0; x < a.lines.length; x++) {
    for (var D = a.lines[x], C = 0, E = 0, L = 0; L < D.tokens.length; L++) {
      var A = D.tokens[L], P = A.styleName && e.rich[A.styleName] || {}, O = A.textPadding = P.padding, N = O ? O[1] + O[3] : 0, B = A.font = P.font || e.font;
      A.contentHeight = Go(B);
      var R = K(P.height, A.contentHeight);
      if (A.innerHeight = R, O && (R += O[0] + O[2]), A.height = R, A.lineHeight = zr(P.lineHeight, e.lineHeight, R), A.align = P && P.align || i, A.verticalAlign = P && P.verticalAlign || "middle", b && c != null && y + A.lineHeight > c) {
        var F = a.lines.length;
        L > 0 ? (D.tokens = D.tokens.slice(0, L), T(D, E, C), a.lines = a.lines.slice(0, x + 1)) : a.lines = a.lines.slice(0, x), a.isTruncated = a.isTruncated || a.lines.length < F;
        break e;
      }
      var G = P.width, H = G == null || G === "auto";
      if (typeof G == "string" && G.charAt(G.length - 1) === "%")
        A.percentWidth = G, m.push(A), A.contentWidth = xr(Tr(B), A.text);
      else {
        if (H) {
          var Y = P.backgroundColor, q = Y && Y.image;
          q && (q = pT(q), cl(q) && (A.width = Math.max(A.width, q.width * R / q.height)));
        }
        var W = S && f != null ? f - E : null;
        W != null && W < A.width ? !H || W < N ? (A.text = "", A.width = A.contentWidth = 0) : (AT(w, A.text, W - N, B, e.ellipsis, { minChar: e.truncateMinChar }), A.text = w.text, a.isTruncated = a.isTruncated || w.isTruncated, A.width = A.contentWidth = xr(Tr(B), A.text)) : A.contentWidth = xr(Tr(B), A.text);
      }
      A.width += N, E += A.width, P && (C = Math.max(C, A.lineHeight));
    }
    T(D, E, C);
  }
  a.outerWidth = a.width = K(f, _), a.outerHeight = a.height = K(c, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += u, a.outerHeight += l;
  for (var x = 0; x < m.length; x++) {
    var A = m[x], ne = A.percentWidth;
    A.width = parseInt(ne, 10) / 100 * a.width;
  }
  return a;
}
function jl(t, e, r, n, i) {
  var a = e === "", o = i && r.rich[i] || {}, s = t.lines, u = o.font || r.font, l = !1, f, c;
  if (n) {
    var h = o.padding, v = h ? h[1] + h[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = hi(o.width, n.width) + v;
      s.length > 0 && d + n.accumWidth > n.width && (f = e.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var p = M0(e, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = p.accumWidth + v, c = p.linesWidths, f = p.lines;
    }
  }
  f || (f = e.split(`
`));
  for (var g = Tr(u), m = 0; m < f.length; m++) {
    var y = f[m], _ = new LT();
    if (_.styleName = i, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = c ? c[m] : xr(g, y), !m && !l) {
      var S = (s[s.length - 1] || (s[0] = new rp())).tokens, b = S.length;
      b === 1 && S[0].isLineHolder ? S[0] = _ : (y || !b || a) && S.push(_);
    } else
      s.push(new rp([_]));
  }
}
function NT(t) {
  var e = t.charCodeAt(0);
  return e >= 32 && e <= 591 || e >= 880 && e <= 4351 || e >= 4608 && e <= 5119 || e >= 7680 && e <= 8303;
}
var RT = mn(",&?/;] ".split(""), function(t, e) {
  return t[e] = !0, t;
}, {});
function kT(t) {
  return NT(t) ? !!RT[t] : !0;
}
function M0(t, e, r, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, c = Tr(e), h = 0; h < t.length; h++) {
    var v = t.charAt(h);
    if (v === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var d = C0(c, v.charCodeAt(0)), p = n ? !1 : !kT(v);
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
function np(t, e, r, n, i, a) {
  if (t.baseX = r, t.baseY = n, t.outerWidth = t.outerHeight = null, !!e) {
    var o = e.width * 2, s = e.height * 2;
    ae.set(ip, ua(r, o, i), si(n, s, a), o, s), ae.intersect(e, ip, null, ap);
    var u = ap.outIntersectRect;
    t.outerWidth = u.width, t.outerHeight = u.height, t.baseX = ua(u.x, u.width, i, !0), t.baseY = si(u.y, u.height, a, !0);
  }
}
var ip = new ae(0, 0, 0, 0), ap = { outIntersectRect: {}, clamp: !0 };
function av(t) {
  return t != null ? t += "" : t = "";
}
function BT(t) {
  var e = av(t.text), r = t.font, n = xr(Tr(r), e), i = Go(r);
  return Lc(t, n, i, null);
}
function Lc(t, e, r, n) {
  var i = new ae(ua(t.x || 0, e, t.textAlign), si(t.y || 0, r, t.textBaseline), e, r), a = n ?? (I0(t) ? t.lineWidth : 0);
  return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function I0(t) {
  var e = t.stroke;
  return e != null && e !== "none" && t.lineWidth > 0;
}
var op = Fo, sp = 5e-5;
function On(t) {
  return t > sp || t < -sp;
}
var Nn = [], Ci = [], Ql = wr(), Jl = Math.abs, Ho = function() {
  function t() {
  }
  return t.prototype.getLocalTransform = function(e) {
    return VT(this, e);
  }, t.prototype.setPosition = function(e) {
    this.x = e[0], this.y = e[1];
  }, t.prototype.setScale = function(e) {
    this.scaleX = e[0], this.scaleY = e[1];
  }, t.prototype.setSkew = function(e) {
    this.skewX = e[0], this.skewY = e[1];
  }, t.prototype.setOrigin = function(e) {
    this.originX = e[0], this.originY = e[1];
  }, t.prototype.needLocalTransform = function() {
    return On(this.rotation) || On(this.x) || On(this.y) || On(this.scaleX - 1) || On(this.scaleY - 1) || On(this.skewX) || On(this.skewY);
  }, t.prototype.updateTransform = function() {
    var e = this.parent && this.parent.transform, r = this.needLocalTransform(), n = this.transform;
    if (!(r || e)) {
      n && (op(n), this.invTransform = null);
      return;
    }
    n = n || wr(), r ? this.getLocalTransform(n) : op(n), e && (r ? oo(n, e, n) : nv(n, e)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || wr(), zo(this.invTransform, n);
  }, t.prototype._resolveGlobalScaleRatio = function(e) {
    var r = this.globalScaleRatio;
    if (r != null && r !== 1) {
      this.getGlobalScale(Nn);
      var n = Nn[0] < 0 ? -1 : 1, i = Nn[1] < 0 ? -1 : 1, a = ((Nn[0] - n) * r + n) / Nn[0] || 0, o = ((Nn[1] - i) * r + i) / Nn[1] || 0;
      e[0] *= a, e[1] *= a, e[2] *= o, e[3] *= o;
    }
  }, t.prototype.getComputedTransform = function() {
    for (var e = this, r = []; e; )
      r.push(e), e = e.parent;
    for (; e = r.pop(); )
      e.updateTransform();
    return this.transform;
  }, t.prototype.setLocalTransform = function(e) {
    if (e) {
      var r = e[0] * e[0] + e[1] * e[1], n = e[2] * e[2] + e[3] * e[3], i = Math.atan2(e[1], e[0]), a = Math.PI / 2 + i - Math.atan2(e[3], e[2]);
      n = Math.sqrt(n) * Math.cos(a), r = Math.sqrt(r), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +e[4], this.y = +e[5], this.scaleX = r, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, t.prototype.decomposeTransform = function() {
    if (this.transform) {
      var e = this.parent, r = this.transform;
      e && e.transform && (e.invTransform = e.invTransform || wr(), oo(Ci, e.invTransform, r), r = Ci);
      var n = this.originX, i = this.originY;
      (n || i) && (Ql[4] = n, Ql[5] = i, oo(Ci, r, Ql), Ci[4] -= n, Ci[5] -= i, r = Ci), this.setLocalTransform(r);
    }
  }, t.prototype.getGlobalScale = function(e) {
    var r = this.transform;
    return e = e || [], r ? (e[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), e[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (e[0] = -e[0]), r[3] < 0 && (e[1] = -e[1]), e) : (e[0] = 1, e[1] = 1, e);
  }, t.prototype.transformCoordToLocal = function(e, r) {
    var n = [e, r], i = this.invTransform;
    return i && Kt(n, n, i), n;
  }, t.prototype.transformCoordToGlobal = function(e, r) {
    var n = [e, r], i = this.transform;
    return i && Kt(n, n, i), n;
  }, t.prototype.getLineScale = function() {
    var e = this.transform;
    return e && Jl(e[0] - 1) > 1e-10 && Jl(e[3] - 1) > 1e-10 ? Math.sqrt(Jl(e[0] * e[3] - e[2] * e[1])) : 1;
  }, t.prototype.copyTransform = function(e) {
    wo(this, e);
  }, t.getLocalTransform = function(e, r) {
    r = r || [];
    var n = e.originX || 0, i = e.originY || 0, a = e.scaleX, o = e.scaleY, s = e.anchorX, u = e.anchorY, l = e.rotation || 0, f = e.x, c = e.y, h = e.skewX ? Math.tan(e.skewX) : 0, v = e.skewY ? Math.tan(-e.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, p = i + u;
      r[4] = -d * a - h * p * o, r[5] = -p * o - v * d * a;
    } else
      r[4] = r[5] = 0;
    return r[0] = a, r[3] = o, r[1] = v * a, r[2] = h * o, l && iv(r, r, l), r[4] += n + f, r[5] += i + c, r;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.scaleX = e.scaleY = e.globalScaleRatio = 1, e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0;
  }(), t;
}(), VT = Ho.getLocalTransform, hl = [
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
function wo(t, e) {
  return Ww(t, e, hl);
}
var uo = {
  linear: function(t) {
    return t;
  },
  quadraticIn: function(t) {
    return t * t;
  },
  quadraticOut: function(t) {
    return t * (2 - t);
  },
  quadraticInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
  },
  cubicIn: function(t) {
    return t * t * t;
  },
  cubicOut: function(t) {
    return --t * t * t + 1;
  },
  cubicInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
  },
  quarticIn: function(t) {
    return t * t * t * t;
  },
  quarticOut: function(t) {
    return 1 - --t * t * t * t;
  },
  quarticInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
  },
  quinticIn: function(t) {
    return t * t * t * t * t;
  },
  quinticOut: function(t) {
    return --t * t * t * t * t + 1;
  },
  quinticInOut: function(t) {
    return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  sinusoidalIn: function(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  },
  sinusoidalOut: function(t) {
    return Math.sin(t * Math.PI / 2);
  },
  sinusoidalInOut: function(t) {
    return 0.5 * (1 - Math.cos(Math.PI * t));
  },
  exponentialIn: function(t) {
    return t === 0 ? 0 : Math.pow(1024, t - 1);
  },
  exponentialOut: function(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  },
  exponentialInOut: function(t) {
    return t === 0 ? 0 : t === 1 ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
  },
  circularIn: function(t) {
    return 1 - Math.sqrt(1 - t * t);
  },
  circularOut: function(t) {
    return Math.sqrt(1 - --t * t);
  },
  circularInOut: function(t) {
    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  elasticIn: function(t) {
    var e, r = 0.1, n = 0.4;
    return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)));
  },
  elasticOut: function(t) {
    var e, r = 0.1, n = 0.4;
    return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(t) {
    var e, r = 0.1, n = 0.4;
    return t === 0 ? 0 : t === 1 ? 1 : (!r || r < 1 ? (r = 1, e = n / 4) : e = n * Math.asin(1 / r) / (2 * Math.PI), (t *= 2) < 1 ? -0.5 * (r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(t) {
    var e = 1.70158;
    return t * t * ((e + 1) * t - e);
  },
  backOut: function(t) {
    var e = 1.70158;
    return --t * t * ((e + 1) * t + e) + 1;
  },
  backInOut: function(t) {
    var e = 2.5949095;
    return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
  },
  bounceIn: function(t) {
    return 1 - uo.bounceOut(1 - t);
  },
  bounceOut: function(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  bounceInOut: function(t) {
    return t < 0.5 ? uo.bounceIn(t * 2) * 0.5 : uo.bounceOut(t * 2 - 1) * 0.5 + 0.5;
  }
}, ts = Math.pow, hn = Math.sqrt, vu = 1e-8, L0 = 1e-4, up = hn(3), rs = 1 / 3, yr = Sa(), Ut = Sa(), Ji = Sa();
function sn(t) {
  return t > -vu && t < vu;
}
function P0(t) {
  return t > vu || t < -vu;
}
function rt(t, e, r, n, i) {
  var a = 1 - i;
  return a * a * (a * t + 3 * i * e) + i * i * (i * n + 3 * a * r);
}
function lp(t, e, r, n, i) {
  var a = 1 - i;
  return 3 * (((e - t) * a + 2 * (r - e) * i) * a + (n - r) * i * i);
}
function du(t, e, r, n, i, a) {
  var o = n + 3 * (e - r) - t, s = 3 * (r - e * 2 + t), u = 3 * (e - t), l = t - i, f = s * s - 3 * o * u, c = s * u - 9 * o * l, h = u * u - 3 * s * l, v = 0;
  if (sn(f) && sn(c))
    if (sn(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var p = c * c - 4 * f * h;
    if (sn(p)) {
      var g = c / f, d = -s / o + g, m = -g / 2;
      d >= 0 && d <= 1 && (a[v++] = d), m >= 0 && m <= 1 && (a[v++] = m);
    } else if (p > 0) {
      var y = hn(p), _ = f * s + 1.5 * o * (-c + y), S = f * s + 1.5 * o * (-c - y);
      _ < 0 ? _ = -ts(-_, rs) : _ = ts(_, rs), S < 0 ? S = -ts(-S, rs) : S = ts(S, rs);
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var b = (2 * f * s - 3 * o * c) / (2 * hn(f * f * f)), w = Math.acos(b) / 3, T = hn(f), x = Math.cos(w), d = (-s - 2 * T * x) / (3 * o), m = (-s + T * (x + up * Math.sin(w))) / (3 * o), D = (-s + T * (x - up * Math.sin(w))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), m >= 0 && m <= 1 && (a[v++] = m), D >= 0 && D <= 1 && (a[v++] = D);
    }
  }
  return v;
}
function O0(t, e, r, n, i) {
  var a = 6 * r - 12 * e + 6 * t, o = 9 * e + 3 * n - 3 * t - 9 * r, s = 3 * e - 3 * t, u = 0;
  if (sn(o)) {
    if (P0(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (sn(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var c = hn(f), l = (-a + c) / (2 * o), h = (-a - c) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), h >= 0 && h <= 1 && (i[u++] = h);
    }
  }
  return u;
}
function pu(t, e, r, n, i, a) {
  var o = (e - t) * i + t, s = (r - e) * i + e, u = (n - r) * i + r, l = (s - o) * i + o, f = (u - s) * i + s, c = (f - l) * i + l;
  a[0] = t, a[1] = o, a[2] = l, a[3] = c, a[4] = c, a[5] = f, a[6] = u, a[7] = n;
}
function FT(t, e, r, n, i, a, o, s, u, l, f) {
  var c, h = 5e-3, v = 1 / 0, d, p, g, m;
  yr[0] = u, yr[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    Ut[0] = rt(t, r, i, o, y), Ut[1] = rt(e, n, a, s, y), g = Qi(yr, Ut), g < v && (c = y, v = g);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(h < L0); _++)
    d = c - h, p = c + h, Ut[0] = rt(t, r, i, o, d), Ut[1] = rt(e, n, a, s, d), g = Qi(Ut, yr), d >= 0 && g < v ? (c = d, v = g) : (Ji[0] = rt(t, r, i, o, p), Ji[1] = rt(e, n, a, s, p), m = Qi(Ji, yr), p <= 1 && m < v ? (c = p, v = m) : h *= 0.5);
  return hn(v);
}
function zT(t, e, r, n, i, a, o, s, u) {
  for (var l = t, f = e, c = 0, h = 1 / u, v = 1; v <= u; v++) {
    var d = v * h, p = rt(t, r, i, o, d), g = rt(e, n, a, s, d), m = p - l, y = g - f;
    c += Math.sqrt(m * m + y * y), l = p, f = g;
  }
  return c;
}
function Et(t, e, r, n) {
  var i = 1 - n;
  return i * (i * t + 2 * n * e) + n * n * r;
}
function fp(t, e, r, n) {
  return 2 * ((1 - n) * (e - t) + n * (r - e));
}
function GT(t, e, r, n, i) {
  var a = t - 2 * e + r, o = 2 * (e - t), s = t - n, u = 0;
  if (sn(a)) {
    if (P0(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (sn(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var c = hn(f), l = (-o + c) / (2 * a), h = (-o - c) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), h >= 0 && h <= 1 && (i[u++] = h);
    }
  }
  return u;
}
function N0(t, e, r) {
  var n = t + r - 2 * e;
  return n === 0 ? 0.5 : (t - e) / n;
}
function gu(t, e, r, n, i) {
  var a = (e - t) * n + t, o = (r - e) * n + e, s = (o - a) * n + a;
  i[0] = t, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r;
}
function HT(t, e, r, n, i, a, o, s, u) {
  var l, f = 5e-3, c = 1 / 0;
  yr[0] = o, yr[1] = s;
  for (var h = 0; h < 1; h += 0.05) {
    Ut[0] = Et(t, r, i, h), Ut[1] = Et(e, n, a, h);
    var v = Qi(yr, Ut);
    v < c && (l = h, c = v);
  }
  c = 1 / 0;
  for (var d = 0; d < 32 && !(f < L0); d++) {
    var p = l - f, g = l + f;
    Ut[0] = Et(t, r, i, p), Ut[1] = Et(e, n, a, p);
    var v = Qi(Ut, yr);
    if (p >= 0 && v < c)
      l = p, c = v;
    else {
      Ji[0] = Et(t, r, i, g), Ji[1] = Et(e, n, a, g);
      var m = Qi(Ji, yr);
      g <= 1 && m < c ? (l = g, c = m) : f *= 0.5;
    }
  }
  return hn(c);
}
function UT(t, e, r, n, i, a, o) {
  for (var s = t, u = e, l = 0, f = 1 / o, c = 1; c <= o; c++) {
    var h = c * f, v = Et(t, r, i, h), d = Et(e, n, a, h), p = v - s, g = d - u;
    l += Math.sqrt(p * p + g * g), s = v, u = d;
  }
  return l;
}
var WT = /cubic-bezier\(([0-9,\.e ]+)\)/;
function ov(t) {
  var e = t && WT.exec(t);
  if (e) {
    var r = e[1].split(","), n = +Sr(r[0]), i = +Sr(r[1]), a = +Sr(r[2]), o = +Sr(r[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : du(0, n, a, 1, u, s) && rt(0, i, o, 1, s[0]);
    };
  }
}
var YT = function() {
  function t(e) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = e.life || 1e3, this._delay = e.delay || 0, this.loop = e.loop || !1, this.onframe = e.onframe || it, this.ondestroy = e.ondestroy || it, this.onrestart = e.onrestart || it, e.easing && this.setEasing(e.easing);
  }
  return t.prototype.step = function(e, r) {
    if (this._inited || (this._startTime = e + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += r;
      return;
    }
    var n = this._life, i = e - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = i % n;
        this._startTime = e - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, t.prototype.pause = function() {
    this._paused = !0;
  }, t.prototype.resume = function() {
    this._paused = !1;
  }, t.prototype.setEasing = function(e) {
    this.easing = e, this.easingFunc = ie(e) ? e : uo[e] || ov(e);
  }, t;
}(), cp = {
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
function vn(t) {
  return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t;
}
function Pc(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function ef(t) {
  var e = t;
  return e.length && e.charAt(e.length - 1) === "%" ? vn(parseFloat(e) / 100 * 255) : vn(parseInt(e, 10));
}
function ui(t) {
  var e = t;
  return e.length && e.charAt(e.length - 1) === "%" ? Pc(parseFloat(e) / 100) : Pc(parseFloat(e));
}
function tf(t, e, r) {
  return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? t + (e - t) * r * 6 : r * 2 < 1 ? e : r * 3 < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function ns(t, e, r) {
  return t + (e - t) * r;
}
function Vt(t, e, r, n, i) {
  return t[0] = e, t[1] = r, t[2] = n, t[3] = i, t;
}
function Oc(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
}
var R0 = new sa(20), is = null;
function Di(t, e) {
  is && Oc(is, e), is = R0.put(t, is || e.slice());
}
function ir(t, e) {
  if (t) {
    e = e || [];
    var r = R0.get(t);
    if (r)
      return Oc(e, r);
    t = t + "";
    var n = t.replace(/ /g, "").toLowerCase();
    if (n in cp)
      return Oc(e, cp[n]), Di(t, e), e;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          Vt(e, 0, 0, 0, 1);
          return;
        }
        return Vt(e, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Di(t, e), e;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          Vt(e, 0, 0, 0, 1);
          return;
        }
        return Vt(e, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Di(t, e), e;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o), l = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? Vt(e, +l[0], +l[1], +l[2], 1) : Vt(e, 0, 0, 0, 1);
          f = ui(l.pop());
        case "rgb":
          if (l.length >= 3)
            return Vt(e, ef(l[0]), ef(l[1]), ef(l[2]), l.length === 3 ? f : ui(l[3])), Di(t, e), e;
          Vt(e, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            Vt(e, 0, 0, 0, 1);
            return;
          }
          return l[3] = ui(l[3]), Nc(l, e), Di(t, e), e;
        case "hsl":
          if (l.length !== 3) {
            Vt(e, 0, 0, 0, 1);
            return;
          }
          return Nc(l, e), Di(t, e), e;
        default:
          return;
      }
    }
    Vt(e, 0, 0, 0, 1);
  }
}
function Nc(t, e) {
  var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = ui(t[1]), i = ui(t[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return e = e || [], Vt(e, vn(tf(o, a, r + 1 / 3) * 255), vn(tf(o, a, r) * 255), vn(tf(o, a, r - 1 / 3) * 255), 1), t.length === 4 && (e[3] = t[3]), e;
}
function XT(t) {
  if (t) {
    var e = t[0] / 255, r = t[1] / 255, n = t[2] / 255, i = Math.min(e, r, n), a = Math.max(e, r, n), o = a - i, s = (a + i) / 2, u, l;
    if (o === 0)
      u = 0, l = 0;
    else {
      s < 0.5 ? l = o / (a + i) : l = o / (2 - a - i);
      var f = ((a - e) / 6 + o / 2) / o, c = ((a - r) / 6 + o / 2) / o, h = ((a - n) / 6 + o / 2) / o;
      e === a ? u = h - c : r === a ? u = 1 / 3 + f - h : n === a && (u = 2 / 3 + c - f), u < 0 && (u += 1), u > 1 && (u -= 1);
    }
    var v = [u * 360, l, s];
    return t[3] != null && v.push(t[3]), v;
  }
}
function hp(t, e) {
  var r = ir(t);
  if (r) {
    for (var n = 0; n < 3; n++)
      r[n] = r[n] * (1 - e) | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
    return Uo(r, r.length === 4 ? "rgba" : "rgb");
  }
}
function $T(t, e, r) {
  if (!(!(e && e.length) || !(t >= 0 && t <= 1))) {
    var n = t * (e.length - 1), i = Math.floor(n), a = Math.ceil(n), o = ir(e[i]), s = ir(e[a]), u = n - i, l = Uo([
      vn(ns(o[0], s[0], u)),
      vn(ns(o[1], s[1], u)),
      vn(ns(o[2], s[2], u)),
      Pc(ns(o[3], s[3], u))
    ], "rgba");
    return r ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
function Rc(t, e, r, n) {
  var i = ir(t);
  if (t)
    return i = XT(i), r != null && (i[1] = ui(ie(r) ? r(i[1]) : r)), n != null && (i[2] = ui(ie(n) ? n(i[2]) : n)), Uo(Nc(i), "rgba");
}
function Uo(t, e) {
  if (!(!t || !t.length)) {
    var r = t[0] + "," + t[1] + "," + t[2];
    return (e === "rgba" || e === "hsva" || e === "hsla") && (r += "," + t[3]), e + "(" + r + ")";
  }
}
function mu(t, e) {
  var r = ir(t);
  return r ? (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) * r[3] / 255 + (1 - r[3]) * e : 0;
}
var vp = new sa(100);
function kc(t) {
  if (j(t)) {
    var e = vp.get(t);
    return e || (e = hp(t, -0.1), vp.put(t, e)), e;
  } else if (ul(t)) {
    var r = z({}, t);
    return r.colorStops = Q(t.colorStops, function(n) {
      return {
        offset: n.offset,
        color: hp(n.color, -0.1)
      };
    }), r;
  }
  return t;
}
var yu = Math.round;
function To(t) {
  var e;
  if (!t || t === "transparent")
    t = "none";
  else if (typeof t == "string" && t.indexOf("rgba") > -1) {
    var r = ir(t);
    r && (t = "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")", e = r[3]);
  }
  return {
    color: t,
    opacity: e ?? 1
  };
}
var dp = 1e-4;
function un(t) {
  return t < dp && t > -dp;
}
function as(t) {
  return yu(t * 1e3) / 1e3;
}
function Bc(t) {
  return yu(t * 1e4) / 1e4;
}
function ZT(t) {
  return "matrix(" + as(t[0]) + "," + as(t[1]) + "," + as(t[2]) + "," + as(t[3]) + "," + Bc(t[4]) + "," + Bc(t[5]) + ")";
}
var qT = {
  left: "start",
  right: "end",
  center: "middle",
  middle: "middle"
};
function KT(t, e, r) {
  return r === "top" ? t += e / 2 : r === "bottom" && (t -= e / 2), t;
}
function jT(t) {
  return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY);
}
function QT(t) {
  var e = t.style, r = t.getGlobalScale();
  return [
    e.shadowColor,
    (e.shadowBlur || 0).toFixed(2),
    (e.shadowOffsetX || 0).toFixed(2),
    (e.shadowOffsetY || 0).toFixed(2),
    r[0],
    r[1]
  ].join(",");
}
function k0(t) {
  return t && !!t.image;
}
function JT(t) {
  return t && !!t.svgElement;
}
function sv(t) {
  return k0(t) || JT(t);
}
function B0(t) {
  return t.type === "linear";
}
function V0(t) {
  return t.type === "radial";
}
function F0(t) {
  return t && (t.type === "linear" || t.type === "radial");
}
function vl(t) {
  return "url(#" + t + ")";
}
function z0(t) {
  var e = t.getGlobalScale(), r = Math.max(e[0], e[1]);
  return Math.max(Math.ceil(Math.log(r) / Math.log(10)), 1);
}
function G0(t) {
  var e = t.x || 0, r = t.y || 0, n = (t.rotation || 0) * Xs, i = K(t.scaleX, 1), a = K(t.scaleY, 1), o = t.skewX || 0, s = t.skewY || 0, u = [];
  return (e || r) && u.push("translate(" + e + "px," + r + "px)"), n && u.push("rotate(" + n + ")"), (i !== 1 || a !== 1) && u.push("scale(" + i + "," + a + ")"), (o || s) && u.push("skew(" + yu(o * Xs) + "deg, " + yu(s * Xs) + "deg)"), u.join(" ");
}
var ex = function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(t) {
    return Buffer.from(t).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(t) {
    return btoa(unescape(encodeURIComponent(t)));
  } : function(t) {
    return process.env.NODE_ENV !== "production" && Fr("Base64 isn't natively supported in the current environment."), null;
  };
}(), Vc = Array.prototype.slice;
function Rr(t, e, r) {
  return (e - t) * r + t;
}
function rf(t, e, r, n) {
  for (var i = e.length, a = 0; a < i; a++)
    t[a] = Rr(e[a], r[a], n);
  return t;
}
function tx(t, e, r, n) {
  for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
    t[o] || (t[o] = []);
    for (var s = 0; s < a; s++)
      t[o][s] = Rr(e[o][s], r[o][s], n);
  }
  return t;
}
function os(t, e, r, n) {
  for (var i = e.length, a = 0; a < i; a++)
    t[a] = e[a] + r[a] * n;
  return t;
}
function pp(t, e, r, n) {
  for (var i = e.length, a = i && e[0].length, o = 0; o < i; o++) {
    t[o] || (t[o] = []);
    for (var s = 0; s < a; s++)
      t[o][s] = e[o][s] + r[o][s] * n;
  }
  return t;
}
function rx(t, e) {
  for (var r = t.length, n = e.length, i = r > n ? e : t, a = Math.min(r, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(r, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function nx(t, e, r) {
  var n = t, i = e;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(r === 1 ? i[u] : Vc.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (r === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function $s(t) {
  if (It(t)) {
    var e = t.length;
    if (It(t[0])) {
      for (var r = [], n = 0; n < e; n++)
        r.push(Vc.call(t[n]));
      return r;
    }
    return Vc.call(t);
  }
  return t;
}
function Zs(t) {
  return t[0] = Math.floor(t[0]) || 0, t[1] = Math.floor(t[1]) || 0, t[2] = Math.floor(t[2]) || 0, t[3] = t[3] == null ? 1 : t[3], "rgba(" + t.join(",") + ")";
}
function ix(t) {
  return It(t && t[0]) ? 2 : 1;
}
var ss = 0, qs = 1, H0 = 2, qa = 3, Fc = 4, zc = 5, gp = 6;
function mp(t) {
  return t === Fc || t === zc;
}
function us(t) {
  return t === qs || t === H0;
}
var Ma = [0, 0, 0, 0], ax = function() {
  function t(e) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = e;
  }
  return t.prototype.isFinished = function() {
    return this._finished;
  }, t.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, t.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, t.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, t.prototype.addKeyframe = function(e, r, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = gp, u = r;
    if (It(r)) {
      var l = ix(r);
      s = l, (l === 1 && !Ee(r[0]) || l === 2 && !Ee(r[0][0])) && (o = !0);
    } else if (Ee(r) && !aa(r))
      s = ss;
    else if (j(r))
      if (!isNaN(+r))
        s = ss;
      else {
        var f = ir(r);
        f && (u = f, s = qa);
      }
    else if (ul(r)) {
      var c = z({}, u);
      c.colorStops = Q(r.colorStops, function(v) {
        return {
          offset: v.offset,
          color: ir(v.color)
        };
      }), B0(r) ? s = Fc : V0(r) && (s = zc), u = c;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === gp) && (o = !0), this.discrete = this.discrete || o;
    var h = {
      time: e,
      value: u,
      rawValue: r,
      percent: 0
    };
    return n && (h.easing = n, h.easingFunc = ie(n) ? n : uo[n] || ov(n)), i.push(h), h;
  }, t.prototype.prepare = function(e, r) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(p, g) {
      return p.time - g.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = us(i), l = mp(i), f = 0; f < a; f++) {
      var c = n[f], h = c.value, v = o.value;
      c.percent = c.time / e, s || (u && f !== a - 1 ? nx(h, v, i) : l && rx(h.colorStops, v.colorStops));
    }
    if (!s && i !== zc && r && this.needsAnimate() && r.needsAnimate() && i === r.valType && !r._finished) {
      this._additiveTrack = r;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === ss ? n[f].additiveValue = n[f].value - d : i === qa ? n[f].additiveValue = os([], n[f].value, d, -1) : us(i) && (n[f].additiveValue = i === qs ? os([], n[f].value, d, -1) : pp([], n[f].value, d, -1));
    }
  }, t.prototype.step = function(e, r) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === qa, f, c = this._lastFr, h = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (r < 0)
          f = 0;
        else if (r < this._lastFrP) {
          var p = h(c + 1, s - 1);
          for (f = p; f >= 0 && !(o[f].percent <= r); f--)
            ;
          f = h(f, s - 2);
        } else {
          for (f = c; f < s && !(o[f].percent > r); f++)
            ;
          f = h(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (v && d) {
        this._lastFr = f, this._lastFrP = r;
        var g = d.percent - v.percent, m = g === 0 ? 1 : h((r - v.percent) / g, 1);
        d.easingFunc && (m = d.easingFunc(m));
        var y = n ? this._additiveValue : l ? Ma : e[u];
        if ((us(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          e[u] = m < 1 ? v.rawValue : d.rawValue;
        else if (us(a))
          a === qs ? rf(y, v[i], d[i], m) : tx(y, v[i], d[i], m);
        else if (mp(a)) {
          var _ = v[i], S = d[i], b = a === Fc;
          e[u] = {
            type: b ? "linear" : "radial",
            x: Rr(_.x, S.x, m),
            y: Rr(_.y, S.y, m),
            colorStops: Q(_.colorStops, function(T, x) {
              var D = S.colorStops[x];
              return {
                offset: Rr(T.offset, D.offset, m),
                color: Zs(rf([], T.color, D.color, m))
              };
            }),
            global: S.global
          }, b ? (e[u].x2 = Rr(_.x2, S.x2, m), e[u].y2 = Rr(_.y2, S.y2, m)) : e[u].r = Rr(_.r, S.r, m);
        } else if (l)
          rf(y, v[i], d[i], m), n || (e[u] = Zs(y));
        else {
          var w = Rr(v[i], d[i], m);
          n ? this._additiveValue = w : e[u] = w;
        }
        n && this._addToTarget(e);
      }
    }
  }, t.prototype._addToTarget = function(e) {
    var r = this.valType, n = this.propName, i = this._additiveValue;
    r === ss ? e[n] = e[n] + i : r === qa ? (ir(e[n], Ma), os(Ma, Ma, i, 1), e[n] = Zs(Ma)) : r === qs ? os(e[n], e[n], i, 1) : r === H0 && pp(e[n], e[n], i, 1);
  }, t;
}(), uv = function() {
  function t(e, r, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = e, this._loop = r, r && i) {
      Fr("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return t.prototype.getMaxTime = function() {
    return this._maxTime;
  }, t.prototype.getDelay = function() {
    return this._delay;
  }, t.prototype.getLoop = function() {
    return this._loop;
  }, t.prototype.getTarget = function() {
    return this._target;
  }, t.prototype.changeTarget = function(e) {
    this._target = e;
  }, t.prototype.when = function(e, r, n) {
    return this.whenWithKeys(e, r, de(r), n);
  }, t.prototype.whenWithKeys = function(e, r, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new ax(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var c = f.keyframes, h = c[c.length - 1];
          l = h && h.value, f.valType === qa && l && (l = Zs(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        e > 0 && u.addKeyframe(0, $s(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(e, $s(r[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, e), this;
  }, t.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, t.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, t.prototype.isPaused = function() {
    return !!this._paused;
  }, t.prototype.duration = function(e) {
    return this._maxTime = e, this._force = !0, this;
  }, t.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var e = this._doneCbs;
    if (e)
      for (var r = e.length, n = 0; n < r; n++)
        e[n].call(this);
  }, t.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var e = this.animation, r = this._abortedCbs;
    if (e && e.removeClip(this._clip), this._clip = null, r)
      for (var n = 0; n < r.length; n++)
        r[n].call(this);
  }, t.prototype._setTracksFinished = function() {
    for (var e = this._tracks, r = this._trackKeys, n = 0; n < r.length; n++)
      e[r[n]].setFinished();
  }, t.prototype._getAdditiveTrack = function(e) {
    var r, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(e);
        a && (r = a);
      }
    return r;
  }, t.prototype.start = function(e) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var r = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(i, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var c = l[f - 1];
            c && (r._target[s.propName] = c.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var h = new YT({
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
        this._clip = h, this.animation && this.animation.addClip(h), e && h.setEasing(e);
      } else
        this._doneCallback();
      return this;
    }
  }, t.prototype.stop = function(e) {
    if (this._clip) {
      var r = this._clip;
      e && r.onframe(1), this._abortedCallback();
    }
  }, t.prototype.delay = function(e) {
    return this._delay = e, this;
  }, t.prototype.during = function(e) {
    return e && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(e)), this;
  }, t.prototype.done = function(e) {
    return e && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(e)), this;
  }, t.prototype.aborted = function(e) {
    return e && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(e)), this;
  }, t.prototype.getClip = function() {
    return this._clip;
  }, t.prototype.getTrack = function(e) {
    return this._tracks[e];
  }, t.prototype.getTracks = function() {
    var e = this;
    return Q(this._trackKeys, function(r) {
      return e._tracks[r];
    });
  }, t.prototype.stopTracks = function(e, r) {
    if (!e.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < e.length; a++) {
      var o = n[e[a]];
      o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, t.prototype.saveTo = function(e, r, n) {
    if (e) {
      r = r || this._trackKeys;
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[n ? 0 : s.length - 1];
          u && (e[a] = $s(u.rawValue));
        }
      }
    }
  }, t.prototype.__changeFinalValue = function(e, r) {
    r = r || de(e);
    for (var n = 0; n < r.length; n++) {
      var i = r[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, e[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, t;
}(), Ar = function() {
  function t(e) {
    e && (this._$eventProcessor = e);
  }
  return t.prototype.on = function(e, r, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof r == "function" && (i = n, n = r, r = null), !n || !e)
      return this;
    var o = this._$eventProcessor;
    r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), a[e] || (a[e] = []);
    for (var s = 0; s < a[e].length; s++)
      if (a[e][s].h === n)
        return this;
    var u = {
      h: n,
      query: r,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, l = a[e].length - 1, f = a[e][l];
    return f && f.callAtLast ? a[e].splice(l, 0, u) : a[e].push(u), this;
  }, t.prototype.isSilent = function(e) {
    var r = this._$handlers;
    return !r || !r[e] || !r[e].length;
  }, t.prototype.off = function(e, r) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!e)
      return this._$handlers = {}, this;
    if (r) {
      if (n[e]) {
        for (var i = [], a = 0, o = n[e].length; a < o; a++)
          n[e][a].h !== r && i.push(n[e][a]);
        n[e] = i;
      }
      n[e] && n[e].length === 0 && delete n[e];
    } else
      delete n[e];
    return this;
  }, t.prototype.trigger = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[e], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = i.length, u = 0; u < s; u++) {
        var l = i[u];
        if (!(a && a.filter && l.query != null && !a.filter(e, l.query)))
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
    return a && a.afterTrigger && a.afterTrigger(e), this;
  }, t.prototype.triggerWithContext = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[e], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = r[o - 1], u = i.length, l = 0; l < u; l++) {
        var f = i[l];
        if (!(a && a.filter && f.query != null && !a.filter(e, f.query)))
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
    return a && a.afterTrigger && a.afterTrigger(e), this;
  }, t;
}(), U0 = 1;
le.hasGlobalWindow && (U0 = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var _u = U0, Gc = 0.4, Hc = "#333", Uc = "#ccc", ox = "#eee", Mt = 1, Ka = 2, Hi = 4, nf = "__zr_normal__", af = hl.concat(["ignore"]), sx = mn(hl, function(t, e) {
  return t[e] = !0, t;
}, { ignore: !1 }), Ei = {}, ux = new ae(0, 0, 0, 0), ls = [], Ks = 0, dl = 1, pl = function() {
  function t(e) {
    this.id = m0(), this.animators = [], this.currentStates = [], this.states = {}, this._init(e);
  }
  return t.prototype._init = function(e) {
    this.attr(e);
  }, t.prototype.drift = function(e, r, n) {
    switch (this.draggable) {
      case "horizontal":
        r = 0;
        break;
      case "vertical":
        e = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += e, i[5] += r, this.decomposeTransform(), this.markRedraw();
  }, t.prototype.beforeUpdate = function() {
  }, t.prototype.afterUpdate = function() {
  }, t.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, t.prototype.updateInnerText = function(e) {
    var r = this._textContent;
    if (r && (!r.ignore || e)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = r.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = i ? this : null;
      var l = !1;
      a.copyTransform(r);
      var f = n.position != null, c = n.autoOverflowArea, h = void 0;
      if ((c || f) && (h = ux, n.layoutRect ? h.copy(n.layoutRect) : h.copy(this.getBoundingRect()), i || h.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(Ei, n, h) : hu(Ei, n, h), a.x = Ei.x, a.y = Ei.y, o = Ei.align, s = Ei.verticalAlign;
        var v = n.origin;
        if (v && n.rotation != null) {
          var d = void 0, p = void 0;
          v === "center" ? (d = h.width * 0.5, p = h.height * 0.5) : (d = hi(v[0], h.width), p = hi(v[1], h.height)), l = !0, a.originX = -a.x + d + (i ? 0 : h.x), a.originY = -a.y + p + (i ? 0 : h.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var g = n.offset;
      g && (a.x += g[0], a.y += g[1], l || (a.originX = -g[0], a.originY = -g[1]));
      var m = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (c) {
        var y = m.overflowRect = m.overflowRect || new ae(0, 0, 0, 0);
        a.getLocalTransform(ls), zo(ls, ls), ae.copy(y, h), y.applyTransform(ls);
      } else
        m.overflowRect = null;
      var _ = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, S = void 0, b = void 0, w = void 0;
      _ && this.canBeInsideText() ? (S = n.insideFill, b = n.insideStroke, (S == null || S === "auto") && (S = this.getInsideTextFill()), (b == null || b === "auto") && (b = this.getInsideTextStroke(S), w = !0)) : (S = n.outsideFill, b = n.outsideStroke, (S == null || S === "auto") && (S = this.getOutsideFill()), (b == null || b === "auto") && (b = this.getOutsideStroke(S), w = !0)), S = S || "#000", (S !== m.fill || b !== m.stroke || w !== m.autoStroke || o !== m.align || s !== m.verticalAlign) && (u = !0, m.fill = S, m.stroke = b, m.autoStroke = w, m.align = o, m.verticalAlign = s, r.setDefaultTextStyle(m)), r.__dirty |= Mt, u && r.dirtyStyle(!0);
    }
  }, t.prototype.canBeInsideText = function() {
    return !0;
  }, t.prototype.getInsideTextFill = function() {
    return "#fff";
  }, t.prototype.getInsideTextStroke = function(e) {
    return "#000";
  }, t.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Uc : Hc;
  }, t.prototype.getOutsideStroke = function(e) {
    var r = this.__zr && this.__zr.getBackgroundColor(), n = typeof r == "string" && ir(r);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, Uo(n, "rgba");
  }, t.prototype.traverse = function(e, r) {
  }, t.prototype.attrKV = function(e, r) {
    e === "textConfig" ? this.setTextConfig(r) : e === "textContent" ? this.setTextContent(r) : e === "clipPath" ? this.setClipPath(r) : e === "extra" ? (this.extra = this.extra || {}, z(this.extra, r)) : this[e] = r;
  }, t.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, t.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, t.prototype.attr = function(e, r) {
    if (typeof e == "string")
      this.attrKV(e, r);
    else if (J(e))
      for (var n = e, i = de(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, e[o]);
      }
    return this.markRedraw(), this;
  }, t.prototype.saveCurrentToNormalState = function(e) {
    this._innerSaveToNormal(e);
    for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== nf)) {
        var o = i.targetName, s = o ? r[o] : r;
        i.saveTo(s);
      }
    }
  }, t.prototype._innerSaveToNormal = function(e) {
    var r = this._normalState;
    r || (r = this._normalState = {}), e.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(e, r, af);
  }, t.prototype._savePrimaryToNormal = function(e, r, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      e[a] != null && !(a in r) && (r[a] = this[a]);
    }
  }, t.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, t.prototype.getState = function(e) {
    return this.states[e];
  }, t.prototype.ensureState = function(e) {
    var r = this.states;
    return r[e] || (r[e] = {}), r[e];
  }, t.prototype.clearStates = function(e) {
    this.useState(nf, !1, e);
  }, t.prototype.useState = function(e, r, n, i) {
    var a = e === nf, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(xe(s, e) >= 0 && (r || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(e)), l || (l = this.states && this.states[e]), !l && !a) {
          Fr("State " + e + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = this._textContent, c = yp(this, f, l, i);
        c && !this.__inHover && (this.__inHover = c), this._applyStateObj(e, l, this._normalState, r, Sp(this, n, u), u);
        var h = this._textGuide;
        return f && f.useState(e, r, n, !!c), h && h.useState(e, r, n, !!c), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(e) : this.currentStates = [e], this._updateAnimationTargets(), this.markRedraw(), !c && this.__inHover && (this.__inHover = Ks, this.__dirty &= ~Mt), l;
      }
    }
  }, t.prototype.useStates = function(e, r, n) {
    if (!e.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = e.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (e[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = e[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, e)), f || (f = this.states[l]), f && i.push(f);
      }
      var c = i[o - 1], h = this._textContent, v = yp(this, h, c, n);
      v && !this.__inHover && (this.__inHover = v);
      var d = this._mergeStates(i), p = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(e.join(","), d, this._normalState, !1, Sp(this, r, p), p);
      var g = this._textGuide;
      h && h.useStates(e, r, !!v), g && g.useStates(e, r, !!v), this._updateAnimationTargets(), this.currentStates = e.slice(), this.markRedraw(), !v && this.__inHover && (this.__inHover = Ks, this.__dirty &= ~Mt);
    }
  }, t.prototype.isSilent = function() {
    for (var e = this; e; ) {
      if (e.silent)
        return !0;
      var r = e.__hostTarget;
      e = r ? e.ignoreHostSilent ? null : r : e.parent;
    }
    return !1;
  }, t.prototype._updateAnimationTargets = function() {
    for (var e = 0; e < this.animators.length; e++) {
      var r = this.animators[e];
      r.targetName && r.changeTarget(this[r.targetName]);
    }
  }, t.prototype.removeState = function(e) {
    var r = xe(this.currentStates, e);
    if (r >= 0) {
      var n = this.currentStates.slice();
      n.splice(r, 1), this.useStates(n);
    }
  }, t.prototype.replaceState = function(e, r, n) {
    var i = this.currentStates.slice(), a = xe(i, e), o = xe(i, r) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = r : n && !o && i.push(r), this.useStates(i);
  }, t.prototype.toggleState = function(e, r) {
    r ? this.useState(e, !0) : this.removeState(e);
  }, t.prototype._mergeStates = function(e) {
    for (var r = {}, n, i = 0; i < e.length; i++) {
      var a = e[i];
      z(r, a), a.textConfig && (n = n || {}, z(n, a.textConfig));
    }
    return n && (r.textConfig = n), r;
  }, t.prototype._applyStateObj = function(e, r, n, i, a, o) {
    if (this.__inHover !== dl) {
      var s = !(r && i);
      r && r.textConfig ? (this.textConfig = z({}, i ? this.textConfig : n.textConfig), z(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var u = {}, l = !1, f = 0; f < af.length; f++) {
        var c = af[f], h = a && sx[c];
        r && r[c] != null ? h ? (l = !0, u[c] = r[c]) : this[c] = r[c] : s && n[c] != null && (h ? (l = !0, u[c] = n[c]) : this[c] = n[c]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var v = this.animators[f], d = v.targetName;
          v.getLoop() || v.__changeFinalValue(d ? (r || n)[d] : r || n);
        }
      l && this._transitionState(e, u, o);
    }
  }, t.prototype._attachComponent = function(e) {
    if (e.__zr && !e.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (e === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var r = this.__zr;
    r && e.addSelfToZr(r), e.__zr = r, e.__hostTarget = this;
  }, t.prototype._detachComponent = function(e) {
    e.__zr && e.removeSelfFromZr(e.__zr), e.__zr = null, e.__hostTarget = null;
  }, t.prototype.getClipPath = function() {
    return this._clipPath;
  }, t.prototype.setClipPath = function(e) {
    this._clipPath && this._clipPath !== e && this.removeClipPath(), this._attachComponent(e), this._clipPath = e, this.markRedraw();
  }, t.prototype.removeClipPath = function() {
    var e = this._clipPath;
    e && (this._detachComponent(e), this._clipPath = null, this.markRedraw());
  }, t.prototype.getTextContent = function() {
    return this._textContent;
  }, t.prototype.setTextContent = function(e) {
    var r = this._textContent;
    if (r !== e) {
      if (r && r !== e && this.removeTextContent(), process.env.NODE_ENV !== "production" && e.__zr && !e.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      e.innerTransformable = new Ho(), this._attachComponent(e), this._textContent = e, this.markRedraw();
    }
  }, t.prototype.setTextConfig = function(e) {
    this.textConfig || (this.textConfig = {}), z(this.textConfig, e), this.markRedraw();
  }, t.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, t.prototype.removeTextContent = function() {
    var e = this._textContent;
    e && (e.innerTransformable = null, this._detachComponent(e), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, t.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, t.prototype.setTextGuideLine = function(e) {
    this._textGuide && this._textGuide !== e && this.removeTextGuideLine(), this._attachComponent(e), this._textGuide = e, this.markRedraw();
  }, t.prototype.removeTextGuideLine = function() {
    var e = this._textGuide;
    e && (this._detachComponent(e), this._textGuide = null, this.markRedraw());
  }, t.prototype.markRedraw = function() {
    this.__dirty |= Mt;
    var e = this.__zr;
    e && (this.__inHover ? e.refreshHover() : e.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, t.prototype.dirty = function() {
    this.markRedraw();
  }, t.prototype.addSelfToZr = function(e) {
    if (this.__zr !== e) {
      this.__zr = e;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          e.animation.addAnimator(r[n]);
      this._clipPath && this._clipPath.addSelfToZr(e), this._textContent && this._textContent.addSelfToZr(e), this._textGuide && this._textGuide.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    if (this.__zr) {
      this.__zr = null;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          e.animation.removeAnimator(r[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(e), this._textContent && this._textContent.removeSelfFromZr(e), this._textGuide && this._textGuide.removeSelfFromZr(e);
    }
  }, t.prototype.animate = function(e, r, n) {
    var i = e ? this[e] : this;
    if (process.env.NODE_ENV !== "production" && !i) {
      Fr('Property "' + e + '" is not existed in element ' + this.id);
      return;
    }
    var a = new uv(i, r, n);
    return e && (a.targetName = e), this.addAnimator(a, e), a;
  }, t.prototype.addAnimator = function(e, r) {
    var n = this.__zr, i = this;
    e.during(function() {
      i.updateDuringAnimation(r);
    }).done(function() {
      var a = i.animators, o = xe(a, e);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(e), n && n.animation.addAnimator(e), n && n.wakeUp();
  }, t.prototype.updateDuringAnimation = function(e) {
    this.markRedraw();
  }, t.prototype.stopAnimation = function(e, r) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !e || e === s.scope ? s.stop(r) : a.push(s);
    }
    return this.animators = a, this;
  }, t.prototype.animateTo = function(e, r, n) {
    of(this, e, r, n);
  }, t.prototype.animateFrom = function(e, r, n) {
    of(this, e, r, n, !0);
  }, t.prototype._transitionState = function(e, r, n, i) {
    for (var a = of(this, r, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = e;
  }, t.prototype.getBoundingRect = function() {
    return null;
  }, t.prototype.getPaintRect = function() {
    return null;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "element", e.name = "", e.ignore = e.silent = e.ignoreHostSilent = e.isGroup = e.draggable = e.dragging = e.ignoreClip = !1, e.__inHover = Ks, e.__dirty = Mt;
    var r = {};
    function n(a, o, s) {
      r[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), r[a + o + s] = !0);
    }
    function i(a, o, s, u) {
      Object.defineProperty(e, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && n(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && n(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, c) {
        Object.defineProperty(c, 0, {
          get: function() {
            return f[s];
          },
          set: function(h) {
            f[s] = h;
          }
        }), Object.defineProperty(c, 1, {
          get: function() {
            return f[u];
          },
          set: function(h) {
            f[u] = h;
          }
        });
      }
    }
    Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
  }(), t;
}();
Er(pl, Ar);
Er(pl, Ho);
function of(t, e, r, n, i) {
  r = r || {};
  var a = [];
  W0(t, "", t, e, r, n, a, i);
  var o = a.length, s = !1, u = r.done, l = r.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, c = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && r.during && a[0].during(function(d, p) {
    r.during(p);
  });
  for (var h = 0; h < a.length; h++) {
    var v = a[h];
    f && v.done(f), c && v.aborted(c), r.force && v.duration(r.duration), v.start(r.easing);
  }
  return a;
}
function sf(t, e, r) {
  for (var n = 0; n < r; n++)
    t[n] = e[n];
}
function lx(t) {
  return It(t[0]);
}
function fx(t, e, r) {
  if (It(e[r]))
    if (It(t[r]) || (t[r] = []), bt(e[r])) {
      var n = e[r].length;
      t[r].length !== n && (t[r] = new e[r].constructor(n), sf(t[r], e[r], n));
    } else {
      var i = e[r], a = t[r], o = i.length;
      if (lx(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? sf(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        sf(a, i, o);
      a.length = i.length;
    }
  else
    t[r] = e[r];
}
function cx(t, e) {
  return t === e || It(t) && It(e) && hx(t, e);
}
function hx(t, e) {
  var r = t.length;
  if (r !== e.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function W0(t, e, r, n, i, a, o, s) {
  for (var u = de(n), l = i.duration, f = i.delay, c = i.additive, h = i.setToFinal, v = !J(a), d = t.animators, p = [], g = 0; g < u.length; g++) {
    var m = u[g], y = n[m];
    if (y != null && r[m] != null && (v || a[m]))
      if (J(y) && !It(y) && !ul(y)) {
        if (e) {
          s || (r[m] = y, t.updateDuringAnimation(e));
          continue;
        }
        W0(t, m, r[m], y, i, a && a[m], o, s);
      } else
        p.push(m);
    else s || (r[m] = y, t.updateDuringAnimation(e), p.push(m));
  }
  var _ = p.length;
  if (!c && _)
    for (var S = 0; S < d.length; S++) {
      var b = d[S];
      if (b.targetName === e) {
        var w = b.stopTracks(p);
        if (w) {
          var T = xe(d, b);
          d.splice(T, 1);
        }
      }
    }
  if (i.force || (p = tt(p, function(E) {
    return !cx(n[E], r[E]);
  }), _ = p.length), _ > 0 || i.force && !o.length) {
    var x = void 0, D = void 0, C = void 0;
    if (s) {
      D = {}, h && (x = {});
      for (var S = 0; S < _; S++) {
        var m = p[S];
        D[m] = r[m], h ? x[m] = n[m] : r[m] = n[m];
      }
    } else if (h) {
      C = {};
      for (var S = 0; S < _; S++) {
        var m = p[S];
        C[m] = $s(r[m]), fx(r, n, m);
      }
    }
    var b = new uv(r, !1, !1, c ? tt(d, function(L) {
      return L.targetName === e;
    }) : null);
    b.targetName = e, i.scope && (b.scope = i.scope), h && x && b.whenWithKeys(0, x, p), C && b.whenWithKeys(0, C, p), b.whenWithKeys(l ?? 500, s ? D : n, p).delay(f || 0), t.addAnimator(b, e), o.push(b);
  }
}
function yp(t, e, r, n) {
  return !(r && r.hoverLayer || n) || _p(t) || e && _p(e) ? Ks : dl;
}
function _p(t) {
  return t.type === "text" || t.type === "tspan";
}
function Sp(t, e, r) {
  return !e && !t.__inHover && r && r.duration > 0;
}
var Wc = "__zr_style_" + Math.round(Math.random() * 10), li = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, gl = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
li[Wc] = !0;
var bp = ["z", "z2", "invisible"], vx = ["invisible"], Wo = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._init = function(r) {
    for (var n = de(r), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(r[a]) : t.prototype.attrKV.call(this, a, r[a]);
    }
    this.style || this.useStyle({});
  }, e.prototype.beforeBrush = function(r) {
  }, e.prototype.afterBrush = function() {
  }, e.prototype.innerBeforeBrush = function() {
  }, e.prototype.innerAfterBrush = function() {
  }, e.prototype.shouldBePainted = function(r, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && dx(this, r, n) || o && !o[0] && !o[3])
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
  }, e.prototype.contain = function(r, n) {
    return this.rectContain(r, n);
  }, e.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, e.prototype.rectContain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, e.prototype.getPaintRect = function() {
    var r = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      r = this._paintRect || (this._paintRect = new ae(0, 0, 0, 0)), n ? ae.applyTransform(r, i, n) : r.copy(i), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
      var l = this.dirtyRectTolerance;
      r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2));
    }
    return r;
  }, e.prototype.setPrevPaintRect = function(r) {
    r ? (this._prevPaintRect = this._prevPaintRect || new ae(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null;
  }, e.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, e.prototype.animateStyle = function(r) {
    return this.animate("style", r);
  }, e.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : this.markRedraw();
  }, e.prototype.attrKV = function(r, n) {
    r !== "style" ? t.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, e.prototype.setStyle = function(r, n) {
    return typeof r == "string" ? this.style[r] = n : z(this.style, r), this.dirtyStyle(), this;
  }, e.prototype.dirtyStyle = function(r) {
    r || this.markRedraw(), this.__dirty |= Ka, this._rect && (this._rect = null);
  }, e.prototype.dirty = function() {
    this.dirtyStyle();
  }, e.prototype.styleChanged = function() {
    return !!(this.__dirty & Ka);
  }, e.prototype.styleUpdated = function() {
    this.__dirty &= ~Ka;
  }, e.prototype.createStyle = function(r) {
    return ll(li, r);
  }, e.prototype.useStyle = function(r) {
    r[Wc] || (r = this.createStyle(r)), this.style = r, this.dirtyStyle();
  }, e.prototype._useHoverStyle = function(r) {
    this.__hoverStyle = r;
  }, e.prototype.isStyleObject = function(r) {
    return r[Wc];
  }, e.prototype._innerSaveToNormal = function(r) {
    t.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, bp);
  }, e.prototype._applyStateObj = function(r, n, i, a, o, s) {
    t.prototype._applyStateObj.call(this, r, n, i, a, o, s);
    var u = !(n && a), l = this.__inHover === dl, f;
    if (n && n.style ? o ? a ? f = n.style : (f = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(f, n.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(f, n.style)) : u && (f = i.style), f)
      if (o) {
        var c = this.style;
        if (this.style = this.createStyle(u ? {} : c), u)
          for (var h = de(c), v = 0; v < h.length; v++) {
            var d = h[v];
            d in f && (f[d] = f[d], this.style[d] = c[d]);
          }
        for (var p = de(f), v = 0; v < p.length; v++) {
          var d = p[v];
          this.style[d] = this.style[d];
        }
        this._transitionState(r, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        l ? this._useHoverStyle(f) : this.useStyle(f);
    if (!l)
      for (var g = this.__inHover ? vx : bp, v = 0; v < g.length; v++) {
        var d = g[v];
        n && n[d] != null ? this[d] = n[d] : u && i[d] != null && (this[d] = i[d]);
      }
  }, e.prototype._mergeStates = function(r) {
    for (var n = t.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, e.prototype._mergeStyle = function(r, n) {
    return z(r, n), r;
  }, e.prototype.getAnimationStyleProps = function() {
    return gl;
  }, e.initDefaultProps = function() {
    var r = e.prototype;
    r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = 0, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = Mt | Ka;
  }(), e;
}(pl), uf = new ae(0, 0, 0, 0), lf = new ae(0, 0, 0, 0);
function dx(t, e, r) {
  return uf.copy(t.getBoundingRect()), t.transform && uf.applyTransform(t.transform), lf.width = e, lf.height = r, !uf.intersect(lf);
}
var Wt = Math.min, Yt = Math.max, ff = Math.sin, cf = Math.cos, Rn = Math.PI * 2, fs = Sa(), cs = Sa(), hs = Sa();
function wp(t, e, r, n, i, a) {
  i[0] = Wt(t, r), i[1] = Wt(e, n), a[0] = Yt(t, r), a[1] = Yt(e, n);
}
var Tp = [], xp = [];
function px(t, e, r, n, i, a, o, s, u, l) {
  var f = O0, c = rt, h = f(t, r, i, o, Tp);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < h; v++) {
    var d = c(t, r, i, o, Tp[v]);
    u[0] = Wt(d, u[0]), l[0] = Yt(d, l[0]);
  }
  h = f(e, n, a, s, xp);
  for (var v = 0; v < h; v++) {
    var p = c(e, n, a, s, xp[v]);
    u[1] = Wt(p, u[1]), l[1] = Yt(p, l[1]);
  }
  u[0] = Wt(t, u[0]), l[0] = Yt(t, l[0]), u[0] = Wt(o, u[0]), l[0] = Yt(o, l[0]), u[1] = Wt(e, u[1]), l[1] = Yt(e, l[1]), u[1] = Wt(s, u[1]), l[1] = Yt(s, l[1]);
}
function gx(t, e, r, n, i, a, o, s) {
  var u = N0, l = Et, f = Yt(Wt(u(t, r, i), 1), 0), c = Yt(Wt(u(e, n, a), 1), 0), h = l(t, r, i, f), v = l(e, n, a, c);
  o[0] = Wt(t, i, h), o[1] = Wt(e, a, v), s[0] = Yt(t, i, h), s[1] = Yt(e, a, v);
}
function mx(t, e, r, n, i, a, o, s, u) {
  var l = Yi, f = Xi, c = Math.abs(i - a);
  if (c % Rn < 1e-4 && c > 1e-4) {
    s[0] = t - r, s[1] = e - n, u[0] = t + r, u[1] = e + n;
    return;
  }
  if (fs[0] = cf(i) * r + t, fs[1] = ff(i) * n + e, cs[0] = cf(a) * r + t, cs[1] = ff(a) * n + e, l(s, fs, cs), f(u, fs, cs), i = i % Rn, i < 0 && (i = i + Rn), a = a % Rn, a < 0 && (a = a + Rn), i > a && !o ? a += Rn : i < a && o && (i += Rn), o) {
    var h = a;
    a = i, i = h;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > i && (hs[0] = cf(v) * r + t, hs[1] = ff(v) * n + e, l(s, hs, s), f(u, hs, u));
}
var Te = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, kn = [], Bn = [], hr = [], qr = [], vr = [], dr = [], hf = Math.min, vf = Math.max, Vn = Math.cos, Fn = Math.sin, Lr = Math.abs, Yc = Math.PI, nn = Yc * 2, df = typeof Float32Array < "u", Ia = [];
function pf(t) {
  var e = Math.round(t / Yc * 1e8) / 1e8;
  return e % 2 * Yc;
}
function Y0(t, e) {
  var r = pf(t[0]);
  r < 0 && (r += nn);
  var n = r - t[0], i = t[1];
  i += n, !e && i - r >= nn ? i = r + nn : e && r - i >= nn ? i = r - nn : !e && r > i ? i = r + (nn - pf(r - i)) : e && r < i && (i = r - (nn - pf(i - r))), t[0] = r, t[1] = i;
}
var yn = function() {
  function t(e) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, e && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return t.prototype.increaseVersion = function() {
    this._version++;
  }, t.prototype.getVersion = function() {
    return this._version;
  }, t.prototype.setScale = function(e, r, n) {
    n = n || 0, n > 0 && (this._ux = Lr(n / _u / e) || 0, this._uy = Lr(n / _u / r) || 0);
  }, t.prototype.setDPR = function(e) {
    this.dpr = e;
  }, t.prototype.setContext = function(e) {
    this._ctx = e;
  }, t.prototype.getContext = function() {
    return this._ctx;
  }, t.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, t.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, t.prototype.moveTo = function(e, r) {
    return this._drawPendingPt(), this.addData(Te.M, e, r), this._ctx && this._ctx.moveTo(e, r), this._x0 = e, this._y0 = r, this._xi = e, this._yi = r, this;
  }, t.prototype.lineTo = function(e, r) {
    var n = Lr(e - this._xi), i = Lr(r - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(Te.L, e, r), this._ctx && a && this._ctx.lineTo(e, r), a)
      this._xi = e, this._yi = r, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = e, this._pendingPtY = r, this._pendingPtDist = o);
    }
    return this;
  }, t.prototype.bezierCurveTo = function(e, r, n, i, a, o) {
    return this._drawPendingPt(), this.addData(Te.C, e, r, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(e, r, n, i, a, o), this._xi = a, this._yi = o, this;
  }, t.prototype.quadraticCurveTo = function(e, r, n, i) {
    return this._drawPendingPt(), this.addData(Te.Q, e, r, n, i), this._ctx && this._ctx.quadraticCurveTo(e, r, n, i), this._xi = n, this._yi = i, this;
  }, t.prototype.arc = function(e, r, n, i, a, o) {
    this._drawPendingPt(), Ia[0] = i, Ia[1] = a, Y0(Ia, o), i = Ia[0], a = Ia[1];
    var s = a - i;
    return this.addData(Te.A, e, r, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(e, r, n, i, a, o), this._xi = Vn(a) * n + e, this._yi = Fn(a) * n + r, this;
  }, t.prototype.arcTo = function(e, r, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(e, r, n, i, a), this;
  }, t.prototype.rect = function(e, r, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(e, r, n, i), this.addData(Te.R, e, r, n, i), this;
  }, t.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(Te.Z);
    var e = this._ctx, r = this._x0, n = this._y0;
    return e && e.closePath(), this._xi = r, this._yi = n, this;
  }, t.prototype.fill = function(e) {
    e && e.fill(), this.toStatic();
  }, t.prototype.stroke = function(e) {
    e && e.stroke(), this.toStatic();
  }, t.prototype.len = function() {
    return this._len;
  }, t.prototype.setData = function(e) {
    if (this._saveData) {
      var r = e.length;
      !(this.data && this.data.length === r) && df && (this.data = new Float32Array(r));
      for (var n = 0; n < r; n++)
        this.data[n] = e[n];
      this._len = r;
    }
  }, t.prototype.appendPath = function(e) {
    if (this._saveData) {
      e instanceof Array || (e = [e]);
      for (var r = e.length, n = 0, i = this._len, a = 0; a < r; a++)
        n += e[a].len();
      var o = this.data;
      if (df && (o instanceof Float32Array || !o) && (this.data = new Float32Array(i + n), i > 0 && o))
        for (var s = 0; s < i; s++)
          this.data[s] = o[s];
      for (var a = 0; a < r; a++)
        for (var u = e[a].data, s = 0; s < u.length; s++)
          this.data[i++] = u[s];
      this._len = i;
    }
  }, t.prototype.addData = function(e, r, n, i, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var c = 0; c < arguments.length; c++)
        f[this._len++] = arguments[c];
    }
  }, t.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, t.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var e = [], r = 0; r < this._len; r++)
        e[r] = this.data[r];
      this.data = e;
    }
  }, t.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var e = this.data;
      e instanceof Array && (e.length = this._len, df && this._len > 11 && (this.data = new Float32Array(e)));
    }
  }, t.prototype.getBoundingRect = function() {
    hr[0] = hr[1] = vr[0] = vr[1] = Number.MAX_VALUE, qr[0] = qr[1] = dr[0] = dr[1] = -Number.MAX_VALUE;
    var e = this.data, r = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = e[o++], u = o === 1;
      switch (u && (r = e[o], n = e[o + 1], i = r, a = n), s) {
        case Te.M:
          r = i = e[o++], n = a = e[o++], vr[0] = i, vr[1] = a, dr[0] = i, dr[1] = a;
          break;
        case Te.L:
          wp(r, n, e[o], e[o + 1], vr, dr), r = e[o++], n = e[o++];
          break;
        case Te.C:
          px(r, n, e[o++], e[o++], e[o++], e[o++], e[o], e[o + 1], vr, dr), r = e[o++], n = e[o++];
          break;
        case Te.Q:
          gx(r, n, e[o++], e[o++], e[o], e[o + 1], vr, dr), r = e[o++], n = e[o++];
          break;
        case Te.A:
          var l = e[o++], f = e[o++], c = e[o++], h = e[o++], v = e[o++], d = e[o++] + v;
          o += 1;
          var p = !e[o++];
          u && (i = Vn(v) * c + l, a = Fn(v) * h + f), mx(l, f, c, h, v, d, p, vr, dr), r = Vn(d) * c + l, n = Fn(d) * h + f;
          break;
        case Te.R:
          i = r = e[o++], a = n = e[o++];
          var g = e[o++], m = e[o++];
          wp(i, a, i + g, a + m, vr, dr);
          break;
        case Te.Z:
          r = i, n = a;
          break;
      }
      Yi(hr, hr, vr), Xi(qr, qr, dr);
    }
    return o === 0 && (hr[0] = hr[1] = qr[0] = qr[1] = 0), new ae(hr[0], hr[1], qr[0] - hr[0], qr[1] - hr[1]);
  }, t.prototype._calculateLength = function() {
    var e = this.data, r = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, c = 0, h = 0; h < r; ) {
      var v = e[h++], d = h === 1;
      d && (a = e[h], o = e[h + 1], s = a, u = o);
      var p = -1;
      switch (v) {
        case Te.M:
          a = s = e[h++], o = u = e[h++];
          break;
        case Te.L: {
          var g = e[h++], m = e[h++], y = g - a, _ = m - o;
          (Lr(y) > n || Lr(_) > i || h === r - 1) && (p = Math.sqrt(y * y + _ * _), a = g, o = m);
          break;
        }
        case Te.C: {
          var S = e[h++], b = e[h++], g = e[h++], m = e[h++], w = e[h++], T = e[h++];
          p = zT(a, o, S, b, g, m, w, T, 10), a = w, o = T;
          break;
        }
        case Te.Q: {
          var S = e[h++], b = e[h++], g = e[h++], m = e[h++];
          p = UT(a, o, S, b, g, m, 10), a = g, o = m;
          break;
        }
        case Te.A:
          var x = e[h++], D = e[h++], C = e[h++], E = e[h++], L = e[h++], A = e[h++], P = A + L;
          h += 1, d && (s = Vn(L) * C + x, u = Fn(L) * E + D), p = vf(C, E) * hf(nn, Math.abs(A)), a = Vn(P) * C + x, o = Fn(P) * E + D;
          break;
        case Te.R: {
          s = a = e[h++], u = o = e[h++];
          var O = e[h++], N = e[h++];
          p = O * 2 + N * 2;
          break;
        }
        case Te.Z: {
          var y = s - a, _ = u - o;
          p = Math.sqrt(y * y + _ * _), a = s, o = u;
          break;
        }
      }
      p >= 0 && (l[c++] = p, f += p);
    }
    return this._pathLen = f, f;
  }, t.prototype.rebuildPath = function(e, r) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, c, h, v = r < 1, d, p, g = 0, m = 0, y, _ = 0, S, b;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, p = this._pathLen, y = r * p, !y)))
      e: for (var w = 0; w < o; ) {
        var T = n[w++], x = w === 1;
        switch (x && (l = n[w], f = n[w + 1], s = l, u = f), T !== Te.L && _ > 0 && (e.lineTo(S, b), _ = 0), T) {
          case Te.M:
            s = l = n[w++], u = f = n[w++], e.moveTo(l, f);
            break;
          case Te.L: {
            c = n[w++], h = n[w++];
            var D = Lr(c - l), C = Lr(h - f);
            if (D > i || C > a) {
              if (v) {
                var E = d[m++];
                if (g + E > y) {
                  var L = (y - g) / E;
                  e.lineTo(l * (1 - L) + c * L, f * (1 - L) + h * L);
                  break e;
                }
                g += E;
              }
              e.lineTo(c, h), l = c, f = h, _ = 0;
            } else {
              var A = D * D + C * C;
              A > _ && (S = c, b = h, _ = A);
            }
            break;
          }
          case Te.C: {
            var P = n[w++], O = n[w++], N = n[w++], B = n[w++], R = n[w++], F = n[w++];
            if (v) {
              var E = d[m++];
              if (g + E > y) {
                var L = (y - g) / E;
                pu(l, P, N, R, L, kn), pu(f, O, B, F, L, Bn), e.bezierCurveTo(kn[1], Bn[1], kn[2], Bn[2], kn[3], Bn[3]);
                break e;
              }
              g += E;
            }
            e.bezierCurveTo(P, O, N, B, R, F), l = R, f = F;
            break;
          }
          case Te.Q: {
            var P = n[w++], O = n[w++], N = n[w++], B = n[w++];
            if (v) {
              var E = d[m++];
              if (g + E > y) {
                var L = (y - g) / E;
                gu(l, P, N, L, kn), gu(f, O, B, L, Bn), e.quadraticCurveTo(kn[1], Bn[1], kn[2], Bn[2]);
                break e;
              }
              g += E;
            }
            e.quadraticCurveTo(P, O, N, B), l = N, f = B;
            break;
          }
          case Te.A:
            var G = n[w++], H = n[w++], Y = n[w++], q = n[w++], W = n[w++], ne = n[w++], se = n[w++], Oe = !n[w++], Ie = Y > q ? Y : q, he = Lr(Y - q) > 1e-3, Se = W + ne, te = !1;
            if (v) {
              var E = d[m++];
              g + E > y && (Se = W + ne * (y - g) / E, te = !0), g += E;
            }
            if (he && e.ellipse ? e.ellipse(G, H, Y, q, se, W, Se, Oe) : e.arc(G, H, Ie, W, Se, Oe), te)
              break e;
            x && (s = Vn(W) * Y + G, u = Fn(W) * q + H), l = Vn(Se) * Y + G, f = Fn(Se) * q + H;
            break;
          case Te.R:
            s = l = n[w], u = f = n[w + 1], c = n[w++], h = n[w++];
            var fe = n[w++], ot = n[w++];
            if (v) {
              var E = d[m++];
              if (g + E > y) {
                var Re = y - g;
                e.moveTo(c, h), e.lineTo(c + hf(Re, fe), h), Re -= fe, Re > 0 && e.lineTo(c + fe, h + hf(Re, ot)), Re -= ot, Re > 0 && e.lineTo(c + vf(fe - Re, 0), h + ot), Re -= fe, Re > 0 && e.lineTo(c, h + vf(ot - Re, 0));
                break e;
              }
              g += E;
            }
            e.rect(c, h, fe, ot);
            break;
          case Te.Z:
            if (v) {
              var E = d[m++];
              if (g + E > y) {
                var L = (y - g) / E;
                e.lineTo(l * (1 - L) + s * L, f * (1 - L) + u * L);
                break e;
              }
              g += E;
            }
            e.closePath(), l = s, f = u;
        }
      }
  }, t.prototype.clone = function() {
    var e = new t(), r = this.data;
    return e.data = r.slice ? r.slice() : Array.prototype.slice.call(r), e._len = this._len, e;
  }, t.prototype.canSave = function() {
    return !!this._saveData;
  }, t.CMD = Te, t.initDefaultProps = function() {
    var e = t.prototype;
    e._saveData = !0, e._ux = 0, e._uy = 0, e._pendingPtDist = 0, e._version = 0;
  }(), t;
}();
function Ai(t, e, r, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, u = 0, l = t;
  if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > r + s || a < t - s && a < r - s)
    return !1;
  if (t !== r)
    u = (e - n) / (t - r), l = (t * n - r * e) / (t - r);
  else
    return Math.abs(a - t) <= s / 2;
  var f = u * a - o + l, c = f * f / (u * u + 1);
  return c <= s / 2 * s / 2;
}
function yx(t, e, r, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var c = u;
  if (f > e + c && f > n + c && f > a + c && f > s + c || f < e - c && f < n - c && f < a - c && f < s - c || l > t + c && l > r + c && l > i + c && l > o + c || l < t - c && l < r - c && l < i - c && l < o - c)
    return !1;
  var h = FT(t, e, r, n, i, a, o, s, l, f);
  return h <= c / 2;
}
function _x(t, e, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > e + l && u > n + l && u > a + l || u < e - l && u < n - l && u < a - l || s > t + l && s > r + l && s > i + l || s < t - l && s < r - l && s < i - l)
    return !1;
  var f = HT(t, e, r, n, i, a, s, u);
  return f <= l / 2;
}
var Cp = Math.PI * 2;
function vs(t) {
  return t %= Cp, t < 0 && (t += Cp), t;
}
var La = Math.PI * 2;
function Sx(t, e, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= t, u -= e;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > r || f + l < r)
    return !1;
  if (Math.abs(n - i) % La < 1e-4)
    return !0;
  if (a) {
    var c = n;
    n = vs(i), i = vs(c);
  } else
    n = vs(n), i = vs(i);
  n > i && (i += La);
  var h = Math.atan2(u, s);
  return h < 0 && (h += La), h >= n && h <= i || h + La >= n && h + La <= i;
}
function zn(t, e, r, n, i, a) {
  if (a > e && a > n || a < e && a < n || n === e)
    return 0;
  var o = (a - e) / (n - e), s = n < e ? 1 : -1;
  (o === 1 || o === 0) && (s = n < e ? 0.5 : -0.5);
  var u = o * (r - t) + t;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var Kr = yn.CMD, Gn = Math.PI * 2, bx = 1e-4;
function Tx(t, e) {
  return Math.abs(t - e) < bx;
}
var pt = [-1, -1, -1], Ht = [-1, -1];
function xx() {
  var t = Ht[0];
  Ht[0] = Ht[1], Ht[1] = t;
}
function Cx(t, e, r, n, i, a, o, s, u, l) {
  if (l > e && l > n && l > a && l > s || l < e && l < n && l < a && l < s)
    return 0;
  var f = du(e, n, a, s, l, pt);
  if (f === 0)
    return 0;
  for (var c = 0, h = -1, v = void 0, d = void 0, p = 0; p < f; p++) {
    var g = pt[p], m = g === 0 || g === 1 ? 0.5 : 1, y = rt(t, r, i, o, g);
    y < u || (h < 0 && (h = O0(e, n, a, s, Ht), Ht[1] < Ht[0] && h > 1 && xx(), v = rt(e, n, a, s, Ht[0]), h > 1 && (d = rt(e, n, a, s, Ht[1]))), h === 2 ? g < Ht[0] ? c += v < e ? m : -m : g < Ht[1] ? c += d < v ? m : -m : c += s < d ? m : -m : g < Ht[0] ? c += v < e ? m : -m : c += s < v ? m : -m);
  }
  return c;
}
function Dx(t, e, r, n, i, a, o, s) {
  if (s > e && s > n && s > a || s < e && s < n && s < a)
    return 0;
  var u = GT(e, n, a, s, pt);
  if (u === 0)
    return 0;
  var l = N0(e, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, c = Et(e, n, a, l), h = 0; h < u; h++) {
      var v = pt[h] === 0 || pt[h] === 1 ? 0.5 : 1, d = Et(t, r, i, pt[h]);
      d < o || (pt[h] < l ? f += c < e ? v : -v : f += a < c ? v : -v);
    }
    return f;
  } else {
    var v = pt[0] === 0 || pt[0] === 1 ? 0.5 : 1, d = Et(t, r, i, pt[0]);
    return d < o ? 0 : a < e ? v : -v;
  }
}
function Ex(t, e, r, n, i, a, o, s) {
  if (s -= e, s > r || s < -r)
    return 0;
  var u = Math.sqrt(r * r - s * s);
  pt[0] = -u, pt[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= Gn - 1e-4) {
    n = 0, i = Gn;
    var f = a ? 1 : -1;
    return o >= pt[0] + t && o <= pt[1] + t ? f : 0;
  }
  if (n > i) {
    var c = n;
    n = i, i = c;
  }
  n < 0 && (n += Gn, i += Gn);
  for (var h = 0, v = 0; v < 2; v++) {
    var d = pt[v];
    if (d + t > o) {
      var p = Math.atan2(s, d), f = a ? 1 : -1;
      p < 0 && (p = Gn + p), (p >= n && p <= i || p + Gn >= n && p + Gn <= i) && (p > Math.PI / 2 && p < Math.PI * 1.5 && (f = -f), h += f);
    }
  }
  return h;
}
function X0(t, e, r, n, i) {
  for (var a = t.data, o = t.len(), s = 0, u = 0, l = 0, f = 0, c = 0, h, v, d = 0; d < o; ) {
    var p = a[d++], g = d === 1;
    switch (p === Kr.M && d > 1 && (r || (s += zn(u, l, f, c, n, i))), g && (u = a[d], l = a[d + 1], f = u, c = l), p) {
      case Kr.M:
        f = a[d++], c = a[d++], u = f, l = c;
        break;
      case Kr.L:
        if (r) {
          if (Ai(u, l, a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += zn(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case Kr.C:
        if (r) {
          if (yx(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += Cx(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case Kr.Q:
        if (r) {
          if (_x(u, l, a[d++], a[d++], a[d], a[d + 1], e, n, i))
            return !0;
        } else
          s += Dx(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case Kr.A:
        var m = a[d++], y = a[d++], _ = a[d++], S = a[d++], b = a[d++], w = a[d++];
        d += 1;
        var T = !!(1 - a[d++]);
        h = Math.cos(b) * _ + m, v = Math.sin(b) * S + y, g ? (f = h, c = v) : s += zn(u, l, h, v, n, i);
        var x = (n - m) * S / _ + m;
        if (r) {
          if (Sx(m, y, S, b, b + w, T, e, x, i))
            return !0;
        } else
          s += Ex(m, y, S, b, b + w, T, x, i);
        u = Math.cos(b + w) * _ + m, l = Math.sin(b + w) * S + y;
        break;
      case Kr.R:
        f = u = a[d++], c = l = a[d++];
        var D = a[d++], C = a[d++];
        if (h = f + D, v = c + C, r) {
          if (Ai(f, c, h, c, e, n, i) || Ai(h, c, h, v, e, n, i) || Ai(h, v, f, v, e, n, i) || Ai(f, v, f, c, e, n, i))
            return !0;
        } else
          s += zn(h, c, h, v, n, i), s += zn(f, v, f, c, n, i);
        break;
      case Kr.Z:
        if (r) {
          if (Ai(u, l, f, c, e, n, i))
            return !0;
        } else
          s += zn(u, l, f, c, n, i);
        u = f, l = c;
        break;
    }
  }
  return !r && !Tx(l, c) && (s += zn(u, l, f, c, n, i) || 0), s !== 0;
}
function Ax(t, e, r) {
  return X0(t, 0, !1, e, r);
}
function Mx(t, e, r, n) {
  return X0(t, e, !0, r, n);
}
var Su = Ae({
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
}, li), Ix = {
  style: Ae({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, gl.style)
}, gf = hl.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), Ce = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.update = function() {
    var r = this;
    t.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new e();
      i.buildPath === e.prototype.buildPath && (i.buildPath = function(u) {
        r.buildPath(u, r.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < gf.length; ++s)
        i[gf[s]] = this[gf[s]];
      i.__dirty |= Mt;
    } else this._decalEl && (this._decalEl = null);
  }, e.prototype.getDecalElement = function() {
    return this._decalEl;
  }, e.prototype._init = function(r) {
    var n = de(r);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = r[o];
      o === "style" ? this.style ? z(this.style, s) : this.useStyle(s) : o === "shape" ? z(this.shape, s) : t.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, e.prototype.getDefaultStyle = function() {
    return null;
  }, e.prototype.getDefaultShape = function() {
    return {};
  }, e.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, e.prototype.getInsideTextFill = function() {
    var r = this.style.fill;
    if (r !== "none") {
      if (j(r)) {
        var n = mu(r, 0);
        return n > 0.5 ? Hc : n > 0.2 ? ox : Uc;
      } else if (r)
        return Uc;
    }
    return Hc;
  }, e.prototype.getInsideTextStroke = function(r) {
    var n = this.style.fill;
    if (j(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = mu(r, 0) < Gc;
      if (a === o)
        return n;
    }
  }, e.prototype.buildPath = function(r, n, i) {
  }, e.prototype.pathUpdated = function() {
    this.__dirty &= ~Hi;
  }, e.prototype.getUpdatedPathProxy = function(r) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path;
  }, e.prototype.createPathProxy = function() {
    this.path = new yn(!1);
  }, e.prototype.hasStroke = function() {
    var r = this.style, n = r.stroke;
    return !(n == null || n === "none" || !(r.lineWidth > 0));
  }, e.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, e.prototype.getBoundingRect = function() {
    var r = this._rect, n = this.style, i = !r;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & Hi) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect();
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
  }, e.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect(), o = this.style;
    if (r = i[0], n = i[1], a.contain(r, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), Mx(s, u / l, r, n)))
          return !0;
      }
      if (this.hasFill())
        return Ax(s, r, n);
    }
    return !1;
  }, e.prototype.dirtyShape = function() {
    this.__dirty |= Hi, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, e.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, e.prototype.animateShape = function(r) {
    return this.animate("shape", r);
  }, e.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw();
  }, e.prototype.attrKV = function(r, n) {
    r === "shape" ? this.setShape(n) : t.prototype.attrKV.call(this, r, n);
  }, e.prototype.setShape = function(r, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof r == "string" ? i[r] = n : z(i, r), this.dirtyShape(), this;
  }, e.prototype.shapeChanged = function() {
    return !!(this.__dirty & Hi);
  }, e.prototype.createStyle = function(r) {
    return ll(Su, r);
  }, e.prototype._innerSaveToNormal = function(r) {
    t.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.shape && !n.shape && (n.shape = z({}, this.shape));
  }, e.prototype._applyStateObj = function(r, n, i, a, o, s) {
    if (t.prototype._applyStateObj.call(this, r, n, i, a, o, s), this.__inHover !== dl) {
      var u = !(n && a), l;
      if (n && n.shape ? o ? a ? l = n.shape : (l = z({}, i.shape), z(l, n.shape)) : (l = z({}, a ? this.shape : i.shape), z(l, n.shape)) : u && (l = i.shape), l)
        if (o) {
          this.shape = z({}, this.shape);
          for (var f = {}, c = de(l), h = 0; h < c.length; h++) {
            var v = c[h];
            typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v];
          }
          this._transitionState(r, {
            shape: f
          }, s);
        } else
          this.shape = l, this.dirtyShape();
    }
  }, e.prototype._mergeStates = function(r) {
    for (var n = t.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, e.prototype.getAnimationStyleProps = function() {
    return Ix;
  }, e.prototype.isZeroArea = function() {
    return !1;
  }, e.extend = function(r) {
    var n = function(a) {
      X(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return r.init && r.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return ce(r.style);
      }, o.prototype.getDefaultShape = function() {
        return ce(r.shape);
      }, o;
    }(e);
    for (var i in r)
      typeof r[i] == "function" && (n.prototype[i] = r[i]);
    return n;
  }, e.initDefaultProps = function() {
    var r = e.prototype;
    r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = Mt | Ka | Hi;
  }(), e;
}(Wo), Lx = Ae({
  strokeFirst: !0,
  font: Ur,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Su), xo = function(t) {
  X(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.hasStroke = function() {
    return I0(this.style);
  }, e.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, e.prototype.createStyle = function(r) {
    return ll(Lx, r);
  }, e.prototype.setBoundingRect = function(r) {
    this._rect = r;
  }, e.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = BT(this.style)), this._rect;
  }, e.initDefaultProps = function() {
    var r = e.prototype;
    r.dirtyRectTolerance = 10;
  }(), e;
}(Wo);
xo.prototype.type = "tspan";
var Px = Ae({
  x: 0,
  y: 0
}, li), Ox = {
  style: Ae({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, gl.style)
};
function Nx(t) {
  return !!(t && typeof t != "string" && t.width && t.height);
}
var Mr = function(t) {
  X(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.createStyle = function(r) {
    return ll(Px, r);
  }, e.prototype._getSize = function(r) {
    var n = this.style, i = n[r];
    if (i != null)
      return i;
    var a = Nx(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = r === "width" ? "height" : "width", s = n[o];
    return s == null ? a[r] : a[r] / a[o] * s;
  }, e.prototype.getWidth = function() {
    return this._getSize("width");
  }, e.prototype.getHeight = function() {
    return this._getSize("height");
  }, e.prototype.getAnimationStyleProps = function() {
    return Ox;
  }, e.prototype.getBoundingRect = function() {
    var r = this.style;
    return this._rect || (this._rect = new ae(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, e;
}(Wo);
Mr.prototype.type = "image";
function Rx(t, e) {
  var r = e.x, n = e.y, i = e.width, a = e.height, o = e.r, s, u, l, f;
  i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var c;
  s + u > i && (c = s + u, s *= i / c, u *= i / c), l + f > i && (c = l + f, l *= i / c, f *= i / c), u + l > a && (c = u + l, u *= a / c, l *= a / c), s + f > a && (c = s + f, s *= a / c, f *= a / c), t.moveTo(r + s, n), t.lineTo(r + i - u, n), u !== 0 && t.arc(r + i - u, n + u, u, -Math.PI / 2, 0), t.lineTo(r + i, n + a - l), l !== 0 && t.arc(r + i - l, n + a - l, l, 0, Math.PI / 2), t.lineTo(r + f, n + a), f !== 0 && t.arc(r + f, n + a - f, f, Math.PI / 2, Math.PI), t.lineTo(r, n + s), s !== 0 && t.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5), t.closePath();
}
var Zi = Math.round;
function $0(t, e, r) {
  if (e) {
    var n = e.x1, i = e.x2, a = e.y1, o = e.y2;
    t.x1 = n, t.x2 = i, t.y1 = a, t.y2 = o;
    var s = r && r.lineWidth;
    return s && (Zi(n * 2) === Zi(i * 2) && (t.x1 = t.x2 = ii(n, s, !0)), Zi(a * 2) === Zi(o * 2) && (t.y1 = t.y2 = ii(a, s, !0))), t;
  }
}
function Z0(t, e, r) {
  if (e) {
    var n = e.x, i = e.y, a = e.width, o = e.height;
    t.x = n, t.y = i, t.width = a, t.height = o;
    var s = r && r.lineWidth;
    return s && (t.x = ii(n, s, !0), t.y = ii(i, s, !0), t.width = Math.max(ii(n + a, s, !1) - t.x, a === 0 ? 0 : 1), t.height = Math.max(ii(i + o, s, !1) - t.y, o === 0 ? 0 : 1)), t;
  }
}
function ii(t, e, r) {
  if (!e)
    return t;
  var n = Zi(t * 2);
  return (n + Zi(e)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2;
}
var kx = /* @__PURE__ */ function() {
  function t() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return t;
}(), Bx = {}, ze = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new kx();
  }, e.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Z0(Bx, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? Rx(r, n) : r.rect(i, a, o, s);
  }, e.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, e;
}(Ce);
ze.prototype.type = "rect";
var Dp = {
  fill: "#000"
}, Ep = 2, pr = {}, Vx = {
  style: Ae({
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
  }, gl.style)
}, at = function(t) {
  X(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = Dp, n.attr(r), n;
  }
  return e.prototype.childrenRef = function() {
    return this._children;
  }, e.prototype.update = function() {
    t.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var r = 0; r < this._children.length; r++) {
      var n = this._children[r];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, e.prototype.updateTransform = function() {
    var r = this.innerTransformable;
    r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : t.prototype.updateTransform.call(this);
  }, e.prototype.getLocalTransform = function(r) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(r) : t.prototype.getLocalTransform.call(this, r);
  }, e.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), t.prototype.getComputedTransform.call(this);
  }, e.prototype._updateSubTexts = function() {
    this._childCursor = 0, Gx(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, e.prototype.addSelfToZr = function(r) {
    t.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = r;
  }, e.prototype.removeSelfFromZr = function(r) {
    t.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, e.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var r = new ae(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || r;
    }
    return this._rect;
  }, e.prototype.setDefaultTextStyle = function(r) {
    this._defaultStyle = r || Dp;
  }, e.prototype.setTextContent = function(r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, e.prototype._mergeStyle = function(r, n) {
    if (!n)
      return r;
    var i = n.rich, a = r.rich || i && {};
    return z(r, n), i && a ? (this._mergeRich(a, i), r.rich = a) : a && (r.rich = a), r;
  }, e.prototype._mergeRich = function(r, n) {
    for (var i = de(n), a = 0; a < i.length; a++) {
      var o = i[a];
      r[o] = r[o] || {}, z(r[o], n[o]);
    }
  }, e.prototype.getAnimationStyleProps = function() {
    return Vx;
  }, e.prototype._getOrCreateChild = function(r) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof r)) && (n = new r()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, e.prototype._updatePlainTexts = function() {
    var r = this.style, n = r.font || Ur, i = r.padding, a = this._defaultStyle, o = r.x || 0, s = r.y || 0, u = r.align || a.align || "left", l = r.verticalAlign || a.verticalAlign || "top";
    np(pr, a.overflowRect, o, s, u, l), o = pr.baseX, s = pr.baseY;
    var f = Np(r), c = IT(f, r, pr.outerWidth, pr.outerHeight), h = mf(r), v = !!r.backgroundColor, d = c.outerHeight, p = c.outerWidth, g = c.lines, m = c.lineHeight;
    this.isTruncated = !!c.isTruncated;
    var y = o, _ = si(s, c.contentHeight, l);
    if (h || i) {
      var S = ua(o, p, u), b = si(s, d, l);
      h && this._renderBackground(r, r, S, b, p, d);
    }
    _ += m / 2, i && (y = Op(o, u, i), l === "top" ? _ += i[0] : l === "bottom" && (_ -= i[2]));
    for (var w = 0, T = !1, x = !1, D = Pp("fill" in r ? r.fill : (x = !0, a.fill)), C = Lp("stroke" in r ? r.stroke : !v && (!a.autoStroke || x) ? (w = Ep, T = !0, a.stroke) : null), E = r.textShadowBlur > 0, L = 0; L < g.length; L++) {
      var A = this._getOrCreateChild(xo), P = A.createStyle();
      A.useStyle(P), P.text = g[L], P.x = y, P.y = _, P.textAlign = u, P.textBaseline = "middle", P.opacity = r.opacity, P.strokeFirst = !0, E && (P.shadowBlur = r.textShadowBlur || 0, P.shadowColor = r.textShadowColor || "transparent", P.shadowOffsetX = r.textShadowOffsetX || 0, P.shadowOffsetY = r.textShadowOffsetY || 0), P.stroke = C, P.fill = D, C && (P.lineWidth = r.lineWidth || w, P.lineDash = r.lineDash, P.lineDashOffset = r.lineDashOffset || 0), P.font = n, Mp(P, r), _ += m, A.setBoundingRect(Lc(P, c.contentWidth, c.calculatedLineHeight, T ? 0 : null));
    }
  }, e.prototype._updateRichTexts = function() {
    var r = this.style, n = this._defaultStyle, i = r.align || n.align, a = r.verticalAlign || n.verticalAlign, o = r.x || 0, s = r.y || 0;
    np(pr, n.overflowRect, o, s, i, a), o = pr.baseX, s = pr.baseY;
    var u = Np(r), l = OT(u, r, pr.outerWidth, pr.outerHeight, i), f = l.width, c = l.outerWidth, h = l.outerHeight, v = r.padding;
    this.isTruncated = !!l.isTruncated;
    var d = ua(o, c, i), p = si(s, h, a), g = d, m = p;
    v && (g += v[3], m += v[0]);
    var y = g + f;
    mf(r) && this._renderBackground(r, r, d, p, c, h);
    for (var _ = !!r.backgroundColor, S = 0; S < l.lines.length; S++) {
      for (var b = l.lines[S], w = b.tokens, T = w.length, x = b.lineHeight, D = b.width, C = 0, E = g, L = y, A = T - 1, P = void 0; C < T && (P = w[C], !P.align || P.align === "left"); )
        this._placeToken(P, r, x, m, E, "left", _), D -= P.width, E += P.width, C++;
      for (; A >= 0 && (P = w[A], P.align === "right"); )
        this._placeToken(P, r, x, m, L, "right", _), D -= P.width, L -= P.width, A--;
      for (E += (f - (E - g) - (y - L) - D) / 2; C <= A; )
        P = w[C], this._placeToken(P, r, x, m, E + P.width / 2, "center", _), E += P.width, C++;
      m += x;
    }
  }, e.prototype._placeToken = function(r, n, i, a, o, s, u) {
    var l = n.rich[r.styleName] || {};
    l.text = r.text;
    var f = r.verticalAlign, c = a + i / 2;
    f === "top" ? c = a + r.height / 2 : f === "bottom" && (c = a + i - r.height / 2);
    var h = !r.isLineHolder && mf(l);
    h && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, c - r.height / 2, r.width, r.height);
    var v = !!l.backgroundColor, d = r.textPadding;
    d && (o = Op(o, s, d), c -= r.height / 2 - d[0] - r.innerHeight / 2);
    var p = this._getOrCreateChild(xo), g = p.createStyle();
    p.useStyle(g);
    var m = this._defaultStyle, y = !1, _ = 0, S = !1, b = Pp("fill" in l ? l.fill : "fill" in n ? n.fill : (y = !0, m.fill)), w = Lp("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !v && !u && (!m.autoStroke || y) ? (_ = Ep, S = !0, m.stroke) : null), T = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    g.text = r.text, g.x = o, g.y = c, T && (g.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, g.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", g.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, g.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), g.textAlign = s, g.textBaseline = "middle", g.font = r.font || Ur, g.opacity = zr(l.opacity, n.opacity, 1), Mp(g, l), w && (g.lineWidth = zr(l.lineWidth, n.lineWidth, _), g.lineDash = K(l.lineDash, n.lineDash), g.lineDashOffset = n.lineDashOffset || 0, g.stroke = w), b && (g.fill = b), p.setBoundingRect(Lc(g, r.contentWidth, r.contentHeight, S ? 0 : null));
  }, e.prototype._renderBackground = function(r, n, i, a, o, s) {
    var u = r.backgroundColor, l = r.borderWidth, f = r.borderColor, c = u && u.image, h = u && !c, v = r.borderRadius, d = this, p, g;
    if (h || r.lineHeight || l && f) {
      p = this._getOrCreateChild(ze), p.useStyle(p.createStyle()), p.style.fill = null;
      var m = p.shape;
      m.x = i, m.y = a, m.width = o, m.height = s, m.r = v, p.dirtyShape();
    }
    if (h) {
      var y = p.style;
      y.fill = u || null, y.fillOpacity = K(r.fillOpacity, 1);
    } else if (c) {
      g = this._getOrCreateChild(Mr), g.onload = function() {
        d.dirtyStyle();
      };
      var _ = g.style;
      _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var y = p.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = K(r.strokeOpacity, 1), y.lineDash = r.borderDash, y.lineDashOffset = r.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var S = (p || g).style;
    S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = zr(r.opacity, n.opacity, 1);
  }, e.makeFont = function(r) {
    var n = "";
    return K0(r) && (n = [
      r.fontStyle,
      r.fontWeight,
      q0(r.fontSize),
      r.fontFamily || "sans-serif"
    ].join(" ")), n && Sr(n) || r.textFont || r.font;
  }, e;
}(Wo), Fx = { left: !0, right: 1, center: 1 }, zx = { top: 1, bottom: 1, middle: 1 }, Ap = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function q0(t) {
  return typeof t == "string" && (t.indexOf("px") !== -1 || t.indexOf("rem") !== -1 || t.indexOf("em") !== -1) ? t : isNaN(+t) ? Kh + "px" : t + "px";
}
function Mp(t, e) {
  for (var r = 0; r < Ap.length; r++) {
    var n = Ap[r], i = e[n];
    i != null && (t[n] = i);
  }
}
function K0(t) {
  return t.fontSize != null || t.fontFamily || t.fontWeight;
}
function Gx(t) {
  return Ip(t), M(t.rich, Ip), t;
}
function Ip(t) {
  if (t) {
    t.font = at.makeFont(t);
    var e = t.align;
    e === "middle" && (e = "center"), t.align = e == null || Fx[e] ? e : "left";
    var r = t.verticalAlign;
    r === "center" && (r = "middle"), t.verticalAlign = r == null || zx[r] ? r : "top";
    var n = t.padding;
    n && (t.padding = ev(t.padding));
  }
}
function Lp(t, e) {
  return t == null || e <= 0 || t === "transparent" || t === "none" ? null : t.image || t.colorStops ? "#000" : t;
}
function Pp(t) {
  return t == null || t === "none" ? null : t.image || t.colorStops ? "#000" : t;
}
function Op(t, e, r) {
  return e === "right" ? t - r[1] : e === "center" ? t + r[3] / 2 - r[1] / 2 : t + r[3];
}
function Np(t) {
  var e = t.text;
  return e != null && (e += ""), e;
}
function mf(t) {
  return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor);
}
var Rp = 1e-4, j0 = 20;
function Hx(t) {
  return t.replace(/^\s+|\s+$/g, "");
}
var ht = Math.min, ye = Math.max, $e = Math.abs, Wr = Math.round, vi = Math.floor, Yo = Math.ceil, yi = Math.pow, Co = Math.log, Xc = Math.LN10, Ux = Math.PI, Wx = Math.random;
function $c(t, e, r, n) {
  var i = e[0], a = e[1], o = r[0], s = r[1], u = a - i, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (t <= i)
        return o;
      if (t >= a)
        return s;
    } else {
      if (t >= i)
        return o;
      if (t <= a)
        return s;
    }
  else {
    if (t === i)
      return o;
    if (t === a)
      return s;
  }
  return (t - i) / u * l + o;
}
var ke = Yx;
function Yx(t, e, r) {
  switch (t) {
    case "center":
    case "middle":
      t = "50%";
      break;
    case "left":
    case "top":
      t = "0%";
      break;
    case "right":
    case "bottom":
      t = "100%";
      break;
  }
  return Zc(t, e, r);
}
function Zc(t, e, r) {
  return j(t) ? Xx(t) ? parseFloat(t) / 100 * e + (r || 0) : parseFloat(t) : t == null ? NaN : +t;
}
function Xx(t) {
  return !!Hx(t).match(/%$/);
}
function me(t, e, r) {
  return process.env.NODE_ENV !== "production" && k(e != null), isNaN(e) ? r ? "" + t : +t : (e = ht(ye(0, e), j0), t = (+t).toFixed(e), r ? t : +t);
}
function lv(t) {
  return t.sort(function(e, r) {
    return e - r;
  }), t;
}
function kr(t) {
  if (t = +t, isNaN(t))
    return 0;
  if (t > 1e-14) {
    for (var e = 1, r = 0; r < 15; r++, e *= 10)
      if (Wr(t * e) / e === t)
        return r;
  }
  return $x(t);
}
function $x(t) {
  var e = t.toString().toLowerCase(), r = e.indexOf("e"), n = r > 0 ? +e.slice(r + 1) : 0, i = r > 0 ? r : e.length, a = e.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return ye(0, o - n);
}
function Zx(t, e, r) {
  var n = $e(t[1] - t[0]);
  if (!isFinite(n) || n === 0)
    return NaN;
  var i = Co(2 * $e(r || 1) * $e(n)) / Xc, a = Co($e(e)) / Xc, o = ye(0, Yo(-i + a));
  return isFinite(o) || (o = NaN), o;
}
function qx(t, e) {
  var r = mn(t, function(v, d) {
    return v + (isNaN(d) ? 0 : d);
  }, 0);
  if (r === 0)
    return [];
  for (var n = yi(10, e), i = Q(t, function(v) {
    return (isNaN(v) ? 0 : v) / r * n * 100;
  }), a = n * 100, o = Q(i, function(v) {
    return vi(v);
  }), s = mn(o, function(v, d) {
    return v + d;
  }, 0), u = Q(i, function(v, d) {
    return v - o[d];
  }); s < a; ) {
    for (var l = Number.NEGATIVE_INFINITY, f = null, c = 0, h = u.length; c < h; ++c)
      u[c] > l && (l = u[c], f = c);
    ++o[f], u[f] = 0, ++s;
  }
  return Q(o, function(v) {
    return v / n;
  });
}
function Kx(t, e) {
  var r = ye(kr(t), kr(e)), n = t + e;
  return r > j0 ? n : me(n, r);
}
var kp = yi(2, 53) - 1;
function Q0(t) {
  var e = Ux * 2;
  return (t % e + e) % e;
}
function bu(t) {
  return t > -Rp && t < Rp;
}
var jx = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function ba(t) {
  if (t instanceof Date)
    return t;
  if (j(t)) {
    var e = jx.exec(t);
    if (!e)
      return /* @__PURE__ */ new Date(NaN);
    if (e[8]) {
      var r = +e[4] || 0;
      return e[8].toUpperCase() !== "Z" && (r -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, r, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0));
    } else
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0);
  } else if (t == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(Wr(t));
}
function J0(t) {
  return yi(10, fv(t));
}
function fv(t) {
  if (t === 0)
    return 0;
  var e = vi(Co(t) / Xc);
  return t / yi(10, e) >= 10 && e++, e;
}
var e_ = 2;
function cv(t, e) {
  var r = fv(t), n = yi(10, r), i = t / n, a;
  return e === e_ ? a = 1 : e ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, t = a * n, me(t, -r);
}
function wu(t) {
  var e = parseFloat(t);
  return e == t && (e !== 0 || !j(t) || t.indexOf("x") <= 0) ? e : NaN;
}
function t_(t) {
  return !isNaN(wu(t));
}
function hv() {
  return Wr(Wx() * 9);
}
function r_(t, e) {
  return e === 0 ? t : r_(e, t % e);
}
function Bp(t, e) {
  return t == null ? e : e == null ? t : t * e / r_(t, e);
}
function Ot(t) {
  return t != null && isFinite(t);
}
var Qx = "[ECharts] ", Vp = {}, Jx = typeof console < "u" && console.warn && console.log;
function ml(t, e, r) {
  if (Jx) {
    if (r) {
      if (Vp[e])
        return;
      Vp[e] = !0;
    }
    console[t](Qx + e);
  }
}
function n_(t, e) {
  ml("log", t, e);
}
function nt(t, e) {
  ml("warn", t, e);
}
function _e(t, e) {
  ml("error", t, e);
}
function Yr(t) {
  process.env.NODE_ENV !== "production" && ml("warn", "DEPRECATED: " + t, !0);
}
function Ze(t, e, r) {
  process.env.NODE_ENV !== "production" && Yr((r ? "[" + r + "]" : "") + (t + " is deprecated; use " + e + " instead."));
}
function Tu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : aa(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : ie(i) ? "function () { ... }" : qw(i) ? i + "" : null;
    };
    r = Q(t, function(i) {
      if (j(i))
        return i;
      var a = n(i);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(i, function(o, s) {
            var u = n(s);
            return u ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return r;
}
function At(t) {
  throw new Error(t);
}
function Fp(t, e, r) {
  return (e - t) * r + t;
}
var i_ = "series\0", eC = "\0_ec_\0";
function St(t) {
  return t instanceof Array ? t : t == null ? [] : [t];
}
function qc(t, e, r) {
  if (t) {
    t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
    for (var n = 0, i = r.length; n < i; n++) {
      var a = r[n];
      !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
    }
  }
}
var zp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function Xo(t) {
  return J(t) && !$(t) && !(t instanceof Date) ? t.value : t;
}
function tC(t) {
  return J(t) && !(t instanceof Array);
}
function rC(t, e, r) {
  var n = r === "normalMerge", i = r === "replaceMerge", a = r === "replaceAll";
  t = t || [], e = (e || []).slice();
  var o = re();
  M(e, function(u, l) {
    if (!J(u)) {
      e[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !Hp(u.id) && Gp(u.id), u.name != null && !Hp(u.name) && Gp(u.name));
  });
  var s = nC(t, o, r);
  return (n || i) && iC(s, t, o, e), n && aC(s, e), n || i ? oC(s, e, i) : a && sC(s, e), uC(s), s;
}
function nC(t, e, r) {
  var n = [];
  if (r === "replaceAll")
    return n;
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    a && a.id != null && e.set(a.id, i), n.push({
      existing: r === "replaceMerge" || la(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function iC(t, e, r, n) {
  M(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = lo(i.id), s = r.get(o);
      if (s != null) {
        var u = t[s];
        k(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = e[s], n[a] = null;
      }
    }
  });
}
function aC(t, e) {
  M(e, function(r, n) {
    if (!(!r || r.name == null))
      for (var i = 0; i < t.length; i++) {
        var a = t[i].existing;
        if (!t[i].newOption && a && (a.id == null || r.id == null) && !la(r) && !la(a) && a_("name", a, r)) {
          t[i].newOption = r, e[n] = null;
          return;
        }
      }
  });
}
function oC(t, e, r) {
  M(e, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = t[a]) && (i.newOption || la(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !a_("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = r) : t.push({
        newOption: n,
        brandNew: r,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function sC(t, e) {
  M(e, function(r) {
    t.push({
      newOption: r,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function uC(t) {
  var e = re();
  M(t, function(r) {
    var n = r.existing;
    n && e.set(n.id, r);
  }), M(t, function(r) {
    var n = r.newOption;
    k(!n || n.id == null || !e.get(n.id) || e.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && e.set(n.id, r), !r.keyInfo && (r.keyInfo = {});
  }), M(t, function(r, n) {
    var i = r.existing, a = r.newOption, o = r.keyInfo;
    if (J(a)) {
      if (o.name = a.name != null ? lo(a.name) : i ? i.name : i_ + n, i)
        o.id = lo(i.id);
      else if (a.id != null)
        o.id = lo(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (e.get(o.id));
      }
      e.set(o.id, r);
    }
  });
}
function a_(t, e, r) {
  var n = Cr(e[t], null), i = Cr(r[t], null);
  return n != null && i != null && n === i;
}
function lo(t) {
  if (process.env.NODE_ENV !== "production" && t == null)
    throw new Error();
  return Cr(t, "");
}
function Cr(t, e) {
  return t == null ? e : j(t) ? t : Ee(t) || cu(t) ? t + "" : e;
}
function Gp(t) {
  process.env.NODE_ENV !== "production" && nt("`" + t + "` is invalid id or name. Must be a string or number.");
}
function Hp(t) {
  return cu(t) || t_(t);
}
function vv(t) {
  var e = t.name;
  return !!(e && e.indexOf(i_));
}
function la(t) {
  return t && t.id != null && lo(t.id).indexOf(eC) === 0;
}
function lC(t, e, r) {
  M(t, function(n) {
    var i = n.newOption;
    J(i) && (n.keyInfo.mainType = e, n.keyInfo.subType = fC(e, i, n.existing, r));
  });
}
function fC(t, e, r, n) {
  var i = e.type ? e.type : r ? r.subType : n.determineSubType(t, e);
  return i;
}
function di(t, e) {
  if (e.dataIndexInside != null)
    return e.dataIndexInside;
  if (e.dataIndex != null)
    return $(e.dataIndex) ? Q(e.dataIndex, function(r) {
      return t.indexOfRawIndex(r);
    }) : t.indexOfRawIndex(e.dataIndex);
  if (e.name != null)
    return $(e.name) ? Q(e.name, function(r) {
      return t.indexOfName(r);
    }) : t.indexOfName(e.name);
}
function Me() {
  var t = "__ec_inner_" + cC++;
  return function(e) {
    return e[t] || (e[t] = {});
  };
}
var cC = hv();
function yf(t, e, r) {
  var n = dv(e, r), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = r ? r.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var c = $o(t, f, l, {
      useDefault: u === f,
      enableAll: r && r.enableAll != null ? r.enableAll : !0,
      enableNone: r && r.enableNone != null ? r.enableNone : !0
    });
    s[f + "Models"] = c.models, s[f + "Model"] = c.models[0];
  }), s;
}
function dv(t, e) {
  var r;
  if (j(t)) {
    var n = {};
    n[t + "Index"] = 0, r = n;
  } else
    r = t;
  var i = re(), a = {}, o = !1;
  return M(r, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], c = (l[2] || "").toLowerCase();
    if (!(!f || !c || e && e.includeMainTypes && xe(e.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var h = i.get(f) || i.set(f, {});
      h[c] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var $t = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function $o(t, e, r, n) {
  n = n || $t;
  var i = r.index, a = r.id, o = r.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = n.useDefault && (u = t.getComponent(e)) ? [u] : [], s;
  }
  if (i === "none" || i === !1) {
    if (n.enableNone)
      return s.models = [], s;
    process.env.NODE_ENV !== "production" && _e('`"none"` or `false` is not a valid value on index option.'), i = -1;
  }
  return i === "all" && (n.enableAll ? i = a = o = null : (process.env.NODE_ENV !== "production" && _e('`"all"` is not a valid value on index option.'), i = -1)), s.models = t.queryComponents({
    mainType: e,
    index: i,
    id: a,
    name: o
  }), s;
}
function hC(t, e, r) {
  process.env.NODE_ENV !== "production" && k(e);
  var n = {};
  n[e + "Id"] = t[e + "Id"], n[e + "Index"] = t[e + "Index"], n[e + "Name"] = t[e + "Name"];
  var i = {
    mainType: e,
    query: n
  };
  return r && (i.subType = r), i;
}
function o_(t, e, r) {
  t.setAttribute ? t.setAttribute(e, r) : t[e] = r;
}
function vC(t, e) {
  return t.getAttribute ? t.getAttribute(e) : t[e];
}
function dC(t) {
  return t === "auto" ? le.domSupported ? "html" : "richText" : t || "html";
}
function pC(t, e, r, n, i) {
  var a = e == null || e === "auto";
  if (n == null)
    return n;
  if (Ee(n)) {
    var o = Fp(r || 0, n, i);
    return me(o, a ? Math.max(kr(r || 0), kr(n)) : e);
  } else {
    if (j(n))
      return i < 1 ? r : n;
    for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), c = 0; c < f; ++c) {
      var h = t.getDimensionInfo(c);
      if (h && h.type === "ordinal")
        s[c] = (i < 1 && u ? u : l)[c];
      else {
        var v = u && u[c] ? u[c] : 0, d = l[c], o = Fp(v, d, i);
        s[c] = me(o, a ? Math.max(kr(v), kr(d)) : e);
      }
    }
    return s;
  }
}
function Xt() {
  return [1 / 0, -1 / 0];
}
function Kc(t, e) {
  Xr(e) && (e < t[0] && (t[0] = e), e > t[1] && (t[1] = e));
}
function s_(t, e) {
  Xr(e) && e < t[0] && (t[0] = e);
}
function u_(t, e) {
  Xr(e) && e > t[1] && (t[1] = e);
}
function gC(t, e) {
  fa(e[0], e[1]) && (e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1]));
}
function Xr(t) {
  return t != null && isFinite(t);
}
function fa(t, e) {
  return Xr(t) && Xr(e) && t <= e;
}
function mC(t) {
  var e = t[1] - t[0];
  return isFinite(e) && e >= 0;
}
function yC(t) {
  fa(t[0], t[1]) && t[0] > t[1] && (t[0] = t[1]);
}
function l_() {
  var t = "__ec_once_" + _C++;
  return function(e, r) {
    process.env.NODE_ENV !== "production" && k(e), _t(e, t) || (e[t] = 1, r());
  };
}
var _C = hv();
function pv(t, e, r) {
  var n = re(), i = 0;
  M(t, function(a) {
    var o = e(a);
    process.env.NODE_ENV !== "production" && k(j(o));
    var s = n.get(o) || 0;
    r && r(a, s), !s && !r && (t[i++] = a), n.set(o, s + 1);
  }), r || (t.length = i);
}
function SC(t) {
  return process.env.NODE_ENV !== "production" && k(t.value != null), t.value + "";
}
function bC(t) {
  return process.env.NODE_ENV !== "production" && k(t != null), t + "";
}
function wC(t, e) {
  return K(e, !0) ? t.seriesIndex + 2 : 0;
}
function f_(t, e, r) {
  var n = t.getData().count();
  return {
    progressiveRender: r.progressiveEnabled && e.incrementalPrepareRender && n >= r.threshold,
    large: t.get("large") && n >= t.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: t.get("progressiveChunkMode") === "mod" ? t.getData().count() : null
  };
}
function TC(t, e) {
  return {
    seriesType: t,
    overallReset: e
  };
}
function gv(t) {
  return {
    overallReset: t
  };
}
var ge = Me(), xC = function(t, e, r, n) {
  if (n) {
    var i = ge(n);
    i.dataIndex = r, i.dataType = e, i.seriesIndex = t, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = ge(a);
      o.seriesIndex = t, o.dataIndex = r, o.dataType = e, o.ssrType = "chart";
    });
  }
}, wa = "undefined", c_ = "series", jc = re(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), Nt = "original", vt = "arrayRows", tr = "objectRows", ur = "keyedColumns", Gr = "typedArray", h_ = "unknown", Dr = "column", _i = "row", CC = [
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
], v_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      M(CC, function(r) {
        this[r] = Pe(e[r], e);
      }, this);
    }
    return t;
  }()
);
function DC(t, e) {
  return e.mainType === c_ ? t.getViewOfSeriesModel(e) : t.getViewOfComponentModel(e);
}
var Up = 1, Wp = {}, d_ = Me(), mv = Me(), yv = 0, yl = 1, _l = 2, er = ["emphasis", "blur", "select"], xu = ["normal", "emphasis", "blur", "select"], EC = 10, AC = 9, fi = "highlight", js = "downplay", Cu = "select", Qc = "unselect", Du = "toggleSelect", _v = "selectchanged";
function Mi(t) {
  return t != null && t !== "none";
}
function Sl(t, e, r) {
  t.onHoverStateChange && (t.hoverState || 0) !== r && t.onHoverStateChange(e), t.hoverState = r;
}
function p_(t) {
  Sl(t, "emphasis", _l);
}
function g_(t) {
  t.hoverState === _l && Sl(t, "normal", yv);
}
function Sv(t) {
  Sl(t, "blur", yl);
}
function m_(t) {
  t.hoverState === yl && Sl(t, "normal", yv);
}
function MC(t) {
  t.selected = !0;
}
function IC(t) {
  t.selected = !1;
}
function Yp(t, e, r) {
  e(t, r);
}
function $r(t, e, r) {
  Yp(t, e, r), t.isGroup && t.traverse(function(n) {
    Yp(n, e, r);
  });
}
function Xp(t, e) {
  switch (e) {
    case "emphasis":
      t.hoverState = _l;
      break;
    case "normal":
      t.hoverState = yv;
      break;
    case "blur":
      t.hoverState = yl;
      break;
    case "select":
      t.selected = !0;
  }
}
function LC(t, e, r, n) {
  for (var i = t.style, a = {}, o = 0; o < e.length; o++) {
    var s = e[o], u = i[s];
    a[s] = u ?? (n && n[s]);
  }
  for (var o = 0; o < t.animators.length; o++) {
    var l = t.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(a, e);
  }
  return a;
}
function PC(t, e, r, n) {
  var i = r && xe(r, "select") >= 0, a = !1;
  if (t instanceof Ce) {
    var o = d_(t), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (Mi(s) || Mi(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = z({}, n), l = z({}, l), l.fill = s) : !Mi(l.fill) && Mi(s) ? (a = !0, n = z({}, n), l = z({}, l), l.fill = kc(s)) : !Mi(l.stroke) && Mi(u) && (a || (n = z({}, n), l = z({}, l)), l.stroke = kc(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = z({}, n));
    var f = t.z2EmphasisLift;
    n.z2 = t.z2 + (f ?? EC);
  }
  return n;
}
function OC(t, e, r) {
  if (r && r.z2 == null) {
    r = z({}, r);
    var n = t.z2SelectLift;
    r.z2 = t.z2 + (n ?? AC);
  }
  return r;
}
function NC(t, e, r) {
  var n = xe(t.currentStates, e) >= 0, i = t.style.opacity, a = n ? null : LC(t, ["opacity"], e, {
    opacity: 1
  });
  r = r || {};
  var o = r.style || {};
  return o.opacity == null && (r = z({}, r), o = z({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), r.style = o), r;
}
function _f(t, e) {
  var r = this.states[t];
  if (this.style) {
    if (t === "emphasis")
      return PC(this, t, e, r);
    if (t === "blur")
      return NC(this, t, r);
    if (t === "select")
      return OC(this, t, r);
  }
  return r;
}
function RC(t) {
  t.stateProxy = _f;
  var e = t.getTextContent(), r = t.getTextGuideLine();
  e && (e.stateProxy = _f), r && (r.stateProxy = _f);
}
function $p(t, e) {
  !b_(t, e) && !t.__highByOuter && $r(t, p_);
}
function Zp(t, e) {
  !b_(t, e) && !t.__highByOuter && $r(t, g_);
}
function Eu(t, e) {
  t.__highByOuter |= 1 << (e || 0), $r(t, p_);
}
function Au(t, e) {
  !(t.__highByOuter &= ~(1 << (e || 0))) && $r(t, g_);
}
function kC(t) {
  $r(t, Sv);
}
function y_(t) {
  $r(t, m_);
}
function __(t) {
  $r(t, MC);
}
function S_(t) {
  $r(t, IC);
}
function b_(t, e) {
  return t.__highDownSilentOnTouch && e.zrByTouch;
}
function w_(t) {
  var e = t.getModel(), r = [], n = [];
  e.eachComponent(function(i, a) {
    var o = mv(a), s = DC(t, a), u = i === "series";
    !u && n.push(s), o.isBlured && (s.group.traverse(function(l) {
      m_(l);
    }), u && r.push(a)), o.isBlured = !1;
  }), M(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(r, !1, e);
  });
}
function Jc(t, e, r, n) {
  var i = n.getModel();
  r = r || "coordinateSystem";
  function a(l, f) {
    for (var c = 0; c < f.length; c++) {
      var h = l.getItemGraphicEl(f[c]);
      h && y_(h);
    }
  }
  if (t != null && !(!e || e === "none")) {
    var o = i.getSeriesByIndex(t), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function(l) {
      var f = o === l, c = l.coordinateSystem;
      c && c.master && (c = c.master);
      var h = c && s ? c === s : f;
      if (!// Not blur other series if blurScope series
      (r === "series" && !f || r === "coordinateSystem" && !h || e === "series" && f)) {
        var v = n.getViewOfSeriesModel(l);
        if (v.group.traverse(function(g) {
          g.__highByOuter && f && e === "self" || Sv(g);
        }), It(e))
          a(l.getData(), e);
        else if (J(e))
          for (var d = de(e), p = 0; p < d.length; p++)
            a(l.getData(d[p]), e[d[p]]);
        u.push(l), mv(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var c = n.getViewOfComponentModel(f);
        c && c.toggleBlurSeries && c.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function eh(t, e, r) {
  if (!(t == null || e == null)) {
    var n = r.getModel().getComponent(t, e);
    if (n) {
      mv(n).isBlured = !0;
      var i = r.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        Sv(a);
      });
    }
  }
}
function BC(t, e, r) {
  var n = t.seriesIndex, i = t.getData(e.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && _e("Unknown dataType " + e.dataType);
    return;
  }
  var a = di(i, e);
  a = ($(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), u = 0; !o && u < s; )
      o = i.getItemGraphicEl(u++);
  if (o) {
    var l = ge(o);
    Jc(n, l.focus, l.blurScope, r);
  } else {
    var f = t.get(["emphasis", "focus"]), c = t.get(["emphasis", "blurScope"]);
    f != null && Jc(n, f, c, r);
  }
}
function bv(t, e, r, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (t == null || t === "series" || e == null || r == null)
    return i;
  var a = n.getModel().getComponent(t, e);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !ca(s[l]) && _e("param should be highDownDispatcher"), ge(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function VC(t, e, r) {
  process.env.NODE_ENV !== "production" && !ca(t) && _e("param should be highDownDispatcher");
  var n = ge(t), i = bv(n.componentMainType, n.componentIndex, n.componentHighDownName, r), a = i.dispatchers, o = i.focusSelf;
  a ? (o && eh(n.componentMainType, n.componentIndex, r), M(a, function(s) {
    return $p(s, e);
  })) : (Jc(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && eh(n.componentMainType, n.componentIndex, r), $p(t, e));
}
function FC(t, e, r) {
  process.env.NODE_ENV !== "production" && !ca(t) && _e("param should be highDownDispatcher"), w_(r);
  var n = ge(t), i = bv(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
  i ? M(i, function(a) {
    return Zp(a, e);
  }) : Zp(t, e);
}
function zC(t, e, r) {
  if (rh(e)) {
    var n = e.dataType, i = t.getData(n), a = di(i, e);
    $(a) || (a = [a]), t[e.type === Du ? "toggleSelect" : e.type === Cu ? "select" : "unselect"](a, n);
  }
}
function qp(t) {
  var e = t.getAllData();
  M(e, function(r) {
    var n = r.data, i = r.type;
    n.eachItemGraphicEl(function(a, o) {
      t.isSelected(o, i) ? __(a) : S_(a);
    });
  });
}
function GC(t) {
  var e = [];
  return t.eachSeries(function(r) {
    var n = r.getAllData();
    M(n, function(i) {
      i.data;
      var a = i.type, o = r.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: r.seriesIndex
        };
        a != null && (s.dataType = a), e.push(s);
      }
    });
  }), e;
}
function th(t, e, r) {
  T_(t, !0), $r(t, RC), UC(t, e, r);
}
function HC(t) {
  T_(t, !1);
}
function Do(t, e, r, n) {
  n ? HC(t) : th(t, e, r);
}
function UC(t, e, r) {
  var n = ge(t);
  e != null ? (n.focus = e, n.blurScope = r) : n.focus && (n.focus = null);
}
var Kp = ["emphasis", "blur", "select"], WC = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function Mu(t, e, r, n) {
  r = r || "itemStyle";
  for (var i = 0; i < Kp.length; i++) {
    var a = Kp[i], o = e.getModel([a, r]), s = t.ensureState(a);
    s.style = o[WC[r]]();
  }
}
function T_(t, e) {
  var r = e === !1, n = t;
  t.highDownSilentOnTouch && (n.__highDownSilentOnTouch = t.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r);
}
function ca(t) {
  return !!(t && t.__highDownDispatcher);
}
function YC(t) {
  var e = Wp[t];
  return e == null && Up <= 32 && (e = Wp[t] = Up++), e;
}
function rh(t) {
  var e = t.type;
  return e === Cu || e === Qc || e === Du;
}
function jp(t) {
  var e = t.type;
  return e === fi || e === js;
}
function XC(t) {
  var e = d_(t);
  e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
  var r = t.states.select || {};
  e.selectFill = r.style && r.style.fill || null, e.selectStroke = r.style && r.style.stroke || null;
}
var Ii = yn.CMD, $C = [[], [], []], Qp = Math.sqrt, ZC = Math.atan2;
function qC(t, e) {
  if (e) {
    var r = t.data, n = t.len(), i, a, o, s, u, l, f = Ii.M, c = Ii.C, h = Ii.L, v = Ii.R, d = Ii.A, p = Ii.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = r[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case h:
          a = 1;
          break;
        case c:
          a = 3;
          break;
        case p:
          a = 2;
          break;
        case d:
          var g = e[4], m = e[5], y = Qp(e[0] * e[0] + e[1] * e[1]), _ = Qp(e[2] * e[2] + e[3] * e[3]), S = ZC(-e[1] / _, e[0] / y);
          r[o] *= y, r[o++] += g, r[o] *= _, r[o++] += m, r[o++] *= y, r[o++] *= _, r[o++] += S, r[o++] += S, o += 2, s = o;
          break;
        case v:
          l[0] = r[o++], l[1] = r[o++], Kt(l, l, e), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Kt(l, l, e), r[s++] = l[0], r[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var b = $C[u];
        b[0] = r[o++], b[1] = r[o++], Kt(b, b, e), r[s++] = b[0], r[s++] = b[1];
      }
    }
    t.increaseVersion();
  }
}
var Sf = Math.sqrt, ds = Math.sin, ps = Math.cos, Pa = Math.PI;
function Jp(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function nh(t, e) {
  return (t[0] * e[0] + t[1] * e[1]) / (Jp(t) * Jp(e));
}
function eg(t, e) {
  return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(nh(t, e));
}
function tg(t, e, r, n, i, a, o, s, u, l, f) {
  var c = u * (Pa / 180), h = ps(c) * (t - r) / 2 + ds(c) * (e - n) / 2, v = -1 * ds(c) * (t - r) / 2 + ps(c) * (e - n) / 2, d = h * h / (o * o) + v * v / (s * s);
  d > 1 && (o *= Sf(d), s *= Sf(d));
  var p = (i === a ? -1 : 1) * Sf((o * o * (s * s) - o * o * (v * v) - s * s * (h * h)) / (o * o * (v * v) + s * s * (h * h))) || 0, g = p * o * v / s, m = p * -s * h / o, y = (t + r) / 2 + ps(c) * g - ds(c) * m, _ = (e + n) / 2 + ds(c) * g + ps(c) * m, S = eg([1, 0], [(h - g) / o, (v - m) / s]), b = [(h - g) / o, (v - m) / s], w = [(-1 * h - g) / o, (-1 * v - m) / s], T = eg(b, w);
  if (nh(b, w) <= -1 && (T = Pa), nh(b, w) >= 1 && (T = 0), T < 0) {
    var x = Math.round(T / Pa * 1e6) / 1e6;
    T = Pa * 2 + x % 2 * Pa;
  }
  f.addData(l, y, _, o, s, S, T, c, a);
}
var KC = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, jC = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function QC(t) {
  var e = new yn();
  if (!t)
    return e;
  var r = 0, n = 0, i = r, a = n, o, s = yn.CMD, u = t.match(KC);
  if (!u)
    return e;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], c = f.charAt(0), h = void 0, v = f.match(jC) || [], d = v.length, p = 0; p < d; p++)
      v[p] = parseFloat(v[p]);
    for (var g = 0; g < d; ) {
      var m = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, T = void 0, x = r, D = n, C = void 0, E = void 0;
      switch (c) {
        case "l":
          r += v[g++], n += v[g++], h = s.L, e.addData(h, r, n);
          break;
        case "L":
          r = v[g++], n = v[g++], h = s.L, e.addData(h, r, n);
          break;
        case "m":
          r += v[g++], n += v[g++], h = s.M, e.addData(h, r, n), i = r, a = n, c = "l";
          break;
        case "M":
          r = v[g++], n = v[g++], h = s.M, e.addData(h, r, n), i = r, a = n, c = "L";
          break;
        case "h":
          r += v[g++], h = s.L, e.addData(h, r, n);
          break;
        case "H":
          r = v[g++], h = s.L, e.addData(h, r, n);
          break;
        case "v":
          n += v[g++], h = s.L, e.addData(h, r, n);
          break;
        case "V":
          n = v[g++], h = s.L, e.addData(h, r, n);
          break;
        case "C":
          h = s.C, e.addData(h, v[g++], v[g++], v[g++], v[g++], v[g++], v[g++]), r = v[g - 2], n = v[g - 1];
          break;
        case "c":
          h = s.C, e.addData(h, v[g++] + r, v[g++] + n, v[g++] + r, v[g++] + n, v[g++] + r, v[g++] + n), r += v[g - 2], n += v[g - 1];
          break;
        case "S":
          m = r, y = n, C = e.len(), E = e.data, o === s.C && (m += r - E[C - 4], y += n - E[C - 3]), h = s.C, x = v[g++], D = v[g++], r = v[g++], n = v[g++], e.addData(h, m, y, x, D, r, n);
          break;
        case "s":
          m = r, y = n, C = e.len(), E = e.data, o === s.C && (m += r - E[C - 4], y += n - E[C - 3]), h = s.C, x = r + v[g++], D = n + v[g++], r += v[g++], n += v[g++], e.addData(h, m, y, x, D, r, n);
          break;
        case "Q":
          x = v[g++], D = v[g++], r = v[g++], n = v[g++], h = s.Q, e.addData(h, x, D, r, n);
          break;
        case "q":
          x = v[g++] + r, D = v[g++] + n, r += v[g++], n += v[g++], h = s.Q, e.addData(h, x, D, r, n);
          break;
        case "T":
          m = r, y = n, C = e.len(), E = e.data, o === s.Q && (m += r - E[C - 4], y += n - E[C - 3]), r = v[g++], n = v[g++], h = s.Q, e.addData(h, m, y, r, n);
          break;
        case "t":
          m = r, y = n, C = e.len(), E = e.data, o === s.Q && (m += r - E[C - 4], y += n - E[C - 3]), r += v[g++], n += v[g++], h = s.Q, e.addData(h, m, y, r, n);
          break;
        case "A":
          _ = v[g++], S = v[g++], b = v[g++], w = v[g++], T = v[g++], x = r, D = n, r = v[g++], n = v[g++], h = s.A, tg(x, D, r, n, w, T, _, S, b, h, e);
          break;
        case "a":
          _ = v[g++], S = v[g++], b = v[g++], w = v[g++], T = v[g++], x = r, D = n, r += v[g++], n += v[g++], h = s.A, tg(x, D, r, n, w, T, _, S, b, h, e);
          break;
      }
    }
    (c === "z" || c === "Z") && (h = s.Z, e.addData(h), r = i, n = a), o = h;
  }
  return e.toStatic(), e;
}
var x_ = function(t) {
  X(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.applyTransform = function(r) {
  }, e;
}(Ce);
function C_(t) {
  return t.setData != null;
}
function D_(t, e) {
  var r = QC(t), n = z({}, e);
  return n.buildPath = function(i) {
    var a = C_(i);
    if (a && i.canSave()) {
      i.appendPath(r);
      var o = i.getContext();
      o && i.rebuildPath(o, 1);
    } else {
      var o = a ? i.getContext() : i;
      o && r.rebuildPath(o, 1);
    }
  }, n.applyTransform = function(i) {
    qC(r, i), this.dirtyShape();
  }, n;
}
function JC(t, e) {
  return new x_(D_(t, e));
}
function eD(t, e) {
  var r = D_(t, e), n = function(i) {
    X(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s;
    }
    return a;
  }(x_);
  return n;
}
function tD(t, e) {
  for (var r = [], n = t.length, i = 0; i < n; i++) {
    var a = t[i];
    r.push(a.getUpdatedPathProxy(!0));
  }
  var o = new Ce(e);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (C_(s)) {
      s.appendPath(r);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var Qe = function(t) {
  X(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(r), n;
  }
  return e.prototype.childrenRef = function() {
    return this._children;
  }, e.prototype.children = function() {
    return this._children.slice();
  }, e.prototype.childAt = function(r) {
    return this._children[r];
  }, e.prototype.childOfName = function(r) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === r)
        return n[i];
  }, e.prototype.childCount = function() {
    return this._children.length;
  }, e.prototype.add = function(r) {
    if (r && (r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), process.env.NODE_ENV !== "production" && r.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, e.prototype.addBefore = function(r, n) {
    if (r && r !== this && r.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, r), this._doAdd(r));
    }
    return this;
  }, e.prototype.replace = function(r, n) {
    var i = xe(this._children, r);
    return i >= 0 && this.replaceAt(n, i), this;
  }, e.prototype.replaceAt = function(r, n) {
    var i = this._children, a = i[n];
    if (r && r !== this && r.parent !== this && r !== a) {
      i[n] = r, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(r);
    }
    return this;
  }, e.prototype._doAdd = function(r) {
    r.parent && r.parent.remove(r), r.parent = this;
    var n = this.__zr;
    n && n !== r.__zr && r.addSelfToZr(n), n && n.refresh();
  }, e.prototype.remove = function(r) {
    var n = this.__zr, i = this._children, a = xe(i, r);
    return a < 0 ? this : (i.splice(a, 1), r.parent = null, n && r.removeSelfFromZr(n), n && n.refresh(), this);
  }, e.prototype.removeAll = function() {
    for (var r = this._children, n = this.__zr, i = 0; i < r.length; i++) {
      var a = r[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return r.length = 0, this;
  }, e.prototype.eachChild = function(r, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      r.call(n, o, a);
    }
    return this;
  }, e.prototype.traverse = function(r, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = r.call(n, a);
      a.isGroup && !o && a.traverse(r, n);
    }
    return this;
  }, e.prototype.addSelfToZr = function(r) {
    t.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(r);
    }
  }, e.prototype.removeSelfFromZr = function(r) {
    t.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(r);
    }
  }, e.prototype.getBoundingRect = function(r) {
    for (var n = new ae(0, 0, 0, 0), i = r || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (ae.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, e;
}(pl);
Qe.prototype.type = "group";
var rD = /* @__PURE__ */ function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return t;
}(), bl = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new rD();
  }, e.prototype.buildPath = function(r, n) {
    r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, e;
}(Ce);
bl.prototype.type = "circle";
var nD = /* @__PURE__ */ function() {
  function t() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return t;
}(), wv = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new nD();
  }, e.prototype.buildPath = function(r, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath();
  }, e;
}(Ce);
wv.prototype.type = "ellipse";
var E_ = Math.PI, bf = E_ * 2, Hn = Math.sin, Li = Math.cos, iD = Math.acos, lt = Math.atan2, rg = Math.abs, fo = Math.sqrt, ja = Math.max, gr = Math.min, rr = 1e-4;
function aD(t, e, r, n, i, a, o, s) {
  var u = r - t, l = n - e, f = o - i, c = s - a, h = c * u - f * l;
  if (!(h * h < rr))
    return h = (f * (e - a) - c * (t - i)) / h, [t + h * u, e + h * l];
}
function gs(t, e, r, n, i, a, o) {
  var s = t - r, u = e - n, l = (o ? a : -a) / fo(s * s + u * u), f = l * u, c = -l * s, h = t + f, v = e + c, d = r + f, p = n + c, g = (h + d) / 2, m = (v + p) / 2, y = d - h, _ = p - v, S = y * y + _ * _, b = i - a, w = h * p - d * v, T = (_ < 0 ? -1 : 1) * fo(ja(0, b * b * S - w * w)), x = (w * _ - y * T) / S, D = (-w * y - _ * T) / S, C = (w * _ + y * T) / S, E = (-w * y + _ * T) / S, L = x - g, A = D - m, P = C - g, O = E - m;
  return L * L + A * A > P * P + O * O && (x = C, D = E), {
    cx: x,
    cy: D,
    x0: -f,
    y0: -c,
    x1: x * (i / b - 1),
    y1: D * (i / b - 1)
  };
}
function oD(t) {
  var e;
  if ($(t)) {
    var r = t.length;
    if (!r)
      return t;
    r === 1 ? e = [t[0], t[0], 0, 0] : r === 2 ? e = [t[0], t[0], t[1], t[1]] : r === 3 ? e = t.concat(t[2]) : e = t;
  } else
    e = [t, t, t, t];
  return e;
}
function sD(t, e) {
  var r, n = ja(e.r, 0), i = ja(e.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = e.startAngle, l = e.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = e.cx, c = e.cy, h = !!e.clockwise, v = rg(l - u), d = v > bf && v % bf;
      if (d > rr && (v = d), !(n > rr))
        t.moveTo(f, c);
      else if (v > bf - rr)
        t.moveTo(f + n * Li(u), c + n * Hn(u)), t.arc(f, c, n, u, l, !h), i > rr && (t.moveTo(f + i * Li(l), c + i * Hn(l)), t.arc(f, c, i, l, u, h));
      else {
        var p = void 0, g = void 0, m = void 0, y = void 0, _ = void 0, S = void 0, b = void 0, w = void 0, T = void 0, x = void 0, D = void 0, C = void 0, E = void 0, L = void 0, A = void 0, P = void 0, O = n * Li(u), N = n * Hn(u), B = i * Li(l), R = i * Hn(l), F = v > rr;
        if (F) {
          var G = e.cornerRadius;
          G && (r = oD(G), p = r[0], g = r[1], m = r[2], y = r[3]);
          var H = rg(n - i) / 2;
          if (_ = gr(H, m), S = gr(H, y), b = gr(H, p), w = gr(H, g), D = T = ja(_, S), C = x = ja(b, w), (T > rr || x > rr) && (E = n * Li(l), L = n * Hn(l), A = i * Li(u), P = i * Hn(u), v < E_)) {
            var Y = aD(O, N, A, P, E, L, B, R);
            if (Y) {
              var q = O - Y[0], W = N - Y[1], ne = E - Y[0], se = L - Y[1], Oe = 1 / Hn(iD((q * ne + W * se) / (fo(q * q + W * W) * fo(ne * ne + se * se))) / 2), Ie = fo(Y[0] * Y[0] + Y[1] * Y[1]);
              D = gr(T, (n - Ie) / (Oe + 1)), C = gr(x, (i - Ie) / (Oe - 1));
            }
          }
        }
        if (!F)
          t.moveTo(f + O, c + N);
        else if (D > rr) {
          var he = gr(m, D), Se = gr(y, D), te = gs(A, P, O, N, n, he, h), fe = gs(E, L, B, R, n, Se, h);
          t.moveTo(f + te.cx + te.x0, c + te.cy + te.y0), D < T && he === Se ? t.arc(f + te.cx, c + te.cy, D, lt(te.y0, te.x0), lt(fe.y0, fe.x0), !h) : (he > 0 && t.arc(f + te.cx, c + te.cy, he, lt(te.y0, te.x0), lt(te.y1, te.x1), !h), t.arc(f, c, n, lt(te.cy + te.y1, te.cx + te.x1), lt(fe.cy + fe.y1, fe.cx + fe.x1), !h), Se > 0 && t.arc(f + fe.cx, c + fe.cy, Se, lt(fe.y1, fe.x1), lt(fe.y0, fe.x0), !h));
        } else
          t.moveTo(f + O, c + N), t.arc(f, c, n, u, l, !h);
        if (!(i > rr) || !F)
          t.lineTo(f + B, c + R);
        else if (C > rr) {
          var he = gr(p, C), Se = gr(g, C), te = gs(B, R, E, L, i, -Se, h), fe = gs(O, N, A, P, i, -he, h);
          t.lineTo(f + te.cx + te.x0, c + te.cy + te.y0), C < x && he === Se ? t.arc(f + te.cx, c + te.cy, C, lt(te.y0, te.x0), lt(fe.y0, fe.x0), !h) : (Se > 0 && t.arc(f + te.cx, c + te.cy, Se, lt(te.y0, te.x0), lt(te.y1, te.x1), !h), t.arc(f, c, i, lt(te.cy + te.y1, te.cx + te.x1), lt(fe.cy + fe.y1, fe.cx + fe.x1), h), he > 0 && t.arc(f + fe.cx, c + fe.cy, he, lt(fe.y1, fe.x1), lt(fe.y0, fe.x0), !h));
        } else
          t.lineTo(f + B, c + R), t.arc(f, c, i, l, u, h);
      }
      t.closePath();
    }
  }
}
var uD = /* @__PURE__ */ function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return t;
}(), Cn = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new uD();
  }, e.prototype.buildPath = function(r, n) {
    sD(r, n);
  }, e.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, e;
}(Ce);
Cn.prototype.type = "sector";
var lD = /* @__PURE__ */ function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return t;
}(), Tv = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new lD();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    r.moveTo(i + n.r, a), r.arc(i, a, n.r, 0, o, !1), r.moveTo(i + n.r0, a), r.arc(i, a, n.r0, 0, o, !0);
  }, e;
}(Ce);
Tv.prototype.type = "ring";
function fD(t, e, r, n) {
  var i = [], a = [], o = [], s = [], u, l, f, c;
  if (n) {
    f = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0];
    for (var h = 0, v = t.length; h < v; h++)
      Yi(f, f, t[h]), Xi(c, c, t[h]);
    Yi(f, f, n[0]), Xi(c, c, n[1]);
  }
  for (var h = 0, v = t.length; h < v; h++) {
    var d = t[h];
    if (r)
      u = t[h ? h - 1 : v - 1], l = t[(h + 1) % v];
    else if (h === 0 || h === v - 1) {
      i.push(mT(t[h]));
      continue;
    } else
      u = t[h - 1], l = t[h + 1];
    yT(a, l, u), Yl(a, a, e);
    var p = Ec(d, u), g = Ec(d, l), m = p + g;
    m !== 0 && (p /= m, g /= m), Yl(o, a, -p), Yl(s, a, g);
    var y = Kd([], d, o), _ = Kd([], d, s);
    n && (Xi(y, y, f), Yi(y, y, c), Xi(_, _, f), Yi(_, _, c)), i.push(y), i.push(_);
  }
  return r && i.push(i.shift()), i;
}
function A_(t, e, r) {
  var n = e.smooth, i = e.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = fD(i, n, r, e.smoothConstraint);
      t.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (r ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = i[(s + 1) % o];
        t.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      t.moveTo(i[0][0], i[0][1]);
      for (var s = 1, c = i.length; s < c; s++)
        t.lineTo(i[s][0], i[s][1]);
    }
    r && t.closePath();
  }
}
var cD = /* @__PURE__ */ function() {
  function t() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return t;
}(), xv = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultShape = function() {
    return new cD();
  }, e.prototype.buildPath = function(r, n) {
    A_(r, n, !0);
  }, e;
}(Ce);
xv.prototype.type = "polygon";
var hD = /* @__PURE__ */ function() {
  function t() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return t;
}(), Zo = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new hD();
  }, e.prototype.buildPath = function(r, n) {
    A_(r, n, !1);
  }, e;
}(Ce);
Zo.prototype.type = "polyline";
var vD = {}, dD = /* @__PURE__ */ function() {
  function t() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return t;
}(), _n = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new dD();
  }, e.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = $0(vD, n, this.style);
      i = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var l = n.percent;
    l !== 0 && (r.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), r.lineTo(o, s));
  }, e.prototype.pointAt = function(r) {
    var n = this.shape;
    return [
      n.x1 * (1 - r) + n.x2 * r,
      n.y1 * (1 - r) + n.y2 * r
    ];
  }, e;
}(Ce);
_n.prototype.type = "line";
var Ct = [], pD = /* @__PURE__ */ function() {
  function t() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return t;
}();
function ng(t, e, r) {
  var n = t.cpx2, i = t.cpy2;
  return n != null || i != null ? [
    (r ? lp : rt)(t.x1, t.cpx1, t.cpx2, t.x2, e),
    (r ? lp : rt)(t.y1, t.cpy1, t.cpy2, t.y2, e)
  ] : [
    (r ? fp : Et)(t.x1, t.cpx1, t.x2, e),
    (r ? fp : Et)(t.y1, t.cpy1, t.y2, e)
  ];
}
var Cv = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new pD();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, c = n.cpy2, h = n.percent;
    h !== 0 && (r.moveTo(i, a), f == null || c == null ? (h < 1 && (gu(i, u, o, h, Ct), u = Ct[1], o = Ct[2], gu(a, l, s, h, Ct), l = Ct[1], s = Ct[2]), r.quadraticCurveTo(u, l, o, s)) : (h < 1 && (pu(i, u, f, o, h, Ct), u = Ct[1], f = Ct[2], o = Ct[3], pu(a, l, c, s, h, Ct), l = Ct[1], c = Ct[2], s = Ct[3]), r.bezierCurveTo(u, l, f, c, o, s)));
  }, e.prototype.pointAt = function(r) {
    return ng(this.shape, r, !1);
  }, e.prototype.tangentAt = function(r) {
    var n = ng(this.shape, r, !0);
    return bT(n, n);
  }, e;
}(Ce);
Cv.prototype.type = "bezier-curve";
var gD = /* @__PURE__ */ function() {
  function t() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return t;
}(), wl = function(t) {
  X(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, e.prototype.getDefaultShape = function() {
    return new gD();
  }, e.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), c = Math.sin(s);
    r.moveTo(f * o + i, c * o + a), r.arc(i, a, o, s, u, !l);
  }, e;
}(Ce);
wl.prototype.type = "arc";
var M_ = function(t) {
  X(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.type = "compound", r;
  }
  return e.prototype._updatePathDirty = function() {
    for (var r = this.shape.paths, n = this.shapeChanged(), i = 0; i < r.length; i++)
      n = n || r[i].shapeChanged();
    n && this.dirtyShape();
  }, e.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var r = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < r.length; i++)
      r[i].path || r[i].createPathProxy(), r[i].path.setScale(n[0], n[1], r[i].segmentIgnoreThreshold);
  }, e.prototype.buildPath = function(r, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(r, i[a].shape, !0);
  }, e.prototype.afterBrush = function() {
    for (var r = this.shape.paths || [], n = 0; n < r.length; n++)
      r[n].pathUpdated();
  }, e.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), Ce.prototype.getBoundingRect.call(this);
  }, e;
}(Ce), I_ = function() {
  function t(e) {
    this.colorStops = e || [];
  }
  return t.prototype.addColorStop = function(e, r) {
    this.colorStops.push({
      offset: e,
      color: r
    });
  }, t;
}(), L_ = function(t) {
  X(e, t);
  function e(r, n, i, a, o, s) {
    var u = t.call(this, o) || this;
    return u.x = r ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return e;
}(I_), mD = function(t) {
  X(e, t);
  function e(r, n, i, a, o) {
    var s = t.call(this, a) || this;
    return s.x = r ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return e;
}(I_), wf = Math.min, yD = Math.max, ms = Math.abs, Un = [0, 0], Wn = [0, 0], je = x0(), ys = je.minTv, _s = je.maxTv, P_ = function() {
  function t(e, r) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new ue();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new ue();
    e && this.fromBoundingRect(e, r);
  }
  return t.prototype.fromBoundingRect = function(e, r) {
    var n = this._corners, i = this._axes, a = e.x, o = e.y, s = a + e.width, u = o + e.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), r)
      for (var l = 0; l < 4; l++)
        n[l].transform(r);
    ue.sub(i[0], n[1], n[0]), ue.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, t.prototype.intersect = function(e, r, n) {
    var i = !0, a = !r;
    return r && ue.set(r, 0, 0), je.reset(n, !a), !this._intersectCheckOneSide(this, e, a, 1) && (i = !1, a) || !this._intersectCheckOneSide(e, this, a, -1) && (i = !1, a) || !a && !je.negativeSize && ue.copy(r, i ? je.useDir ? je.dirMinTv : ys : _s), i;
  }, t.prototype._intersectCheckOneSide = function(e, r, n, i) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = e._axes[o];
      if (e._getProjMinMaxOnAxis(o, e._corners, Un), e._getProjMinMaxOnAxis(o, r._corners, Wn), je.negativeSize || Un[1] < Wn[0] || Un[0] > Wn[1]) {
        if (a = !1, je.negativeSize || n)
          return a;
        var u = ms(Wn[0] - Un[1]), l = ms(Un[0] - Wn[1]);
        wf(u, l) > _s.len() && (u < l ? ue.scale(_s, s, -u * i) : ue.scale(_s, s, l * i));
      } else if (!n) {
        var u = ms(Wn[0] - Un[1]), l = ms(Un[0] - Wn[1]);
        (je.useDir || wf(u, l) < ys.len()) && ((u < l || !je.bidirectional) && (ue.scale(ys, s, u * i), je.useDir && je.calcDirMTV()), (u >= l || !je.bidirectional) && (ue.scale(ys, s, -l * i), je.useDir && je.calcDirMTV()));
      }
    }
    return a;
  }, t.prototype._getProjMinMaxOnAxis = function(e, r, n) {
    for (var i = this._axes[e], a = this._origin, o = r[0].dot(i) + a[e], s = o, u = o, l = 1; l < r.length; l++) {
      var f = r[l].dot(i) + a[e];
      s = wf(f, s), u = yD(f, u);
    }
    n[0] = s + je.touchThreshold, n[1] = u - je.touchThreshold, je.negativeSize = n[1] < n[0];
  }, t;
}(), O_ = 0, _D = 1, SD = 2, bD = 1, Qs = 0, wD = [], TD = function(t) {
  X(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.notClear = !0, r.incremental = _D, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r;
  }
  return e.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, e.prototype.useStyle = function() {
    this.style = {};
  }, e.prototype._useHoverStyle = function() {
    this.__hoverStyle = null;
  }, e.prototype.getCursor = function() {
    return this._cursor;
  }, e.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, e.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, e.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, e.prototype.addDisplayable = function(r, n) {
    n ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw();
  }, e.prototype.addDisplayables = function(r, n) {
    n = n || !1;
    for (var i = 0; i < r.length; i++)
      this.addDisplayable(r[i], n);
  }, e.prototype.getDisplayables = function() {
    return this._displayables;
  }, e.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, e.prototype.eachPendingDisplayable = function(r) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      r && r(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      r && r(this._temporaryDisplayables[n]);
  }, e.prototype.update = function() {
    this.updateTransform();
    for (var r = this._cursor; r < this._displayables.length; r++) {
      var n = this._displayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var r = 0; r < this._temporaryDisplayables.length; r++) {
      var n = this._temporaryDisplayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
  }, e.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var r = new ae(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(wD)), r.union(a);
      }
      this._rect = r;
    }
    return this._rect;
  }, e.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(r, n))
          return !0;
      }
    return !1;
  }, e;
}(Wo), xD = Me();
function CD(t, e, r, n, i) {
  var a;
  if (e && e.ecModel) {
    var o = e.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = e && e.isAnimationEnabled(), u = t === "update";
  if (s) {
    var l = void 0, f = void 0, c = void 0;
    n ? (l = K(n.duration, 200), f = K(n.easing, "cubicOut"), c = 0) : (l = e.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = e.getShallow(u ? "animationEasingUpdate" : "animationEasing"), c = e.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (c = a.delay)), ie(c) && (c = c(r, i)), ie(l) && (l = l(r));
    var h = {
      duration: l || 0,
      delay: c,
      easing: f
    };
    return h;
  } else
    return null;
}
function Dv(t, e, r, n, i, a, o) {
  var s = !1, u;
  ie(i) ? (o = a, a = i, i = null) : J(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = t === "leave";
  l || e.stopAnimation("leave");
  var f = CD(t, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(e, i) : null);
  if (f && f.duration > 0) {
    var c = f.duration, h = f.delay, v = f.easing, d = {
      duration: c,
      delay: h || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: t,
      during: o
    };
    s ? e.animateFrom(r, d) : e.animateTo(r, d);
  } else
    e.stopAnimation(), !s && e.attr(r), o && o(1), a && a();
}
function wt(t, e, r, n, i, a) {
  Dv("update", t, e, r, n, i, a);
}
function jt(t, e, r, n, i, a) {
  Dv("enter", t, e, r, n, i, a);
}
function co(t) {
  if (!t.__zr)
    return !0;
  for (var e = 0; e < t.animators.length; e++) {
    var r = t.animators[e];
    if (r.scope === "leave")
      return !0;
  }
  return !1;
}
function Iu(t, e, r, n, i, a) {
  co(t) || Dv("leave", t, e, r, n, i, a);
}
function ig(t, e, r, n) {
  t.removeTextContent(), t.removeTextGuideLine(), Iu(t, {
    style: {
      opacity: 0
    }
  }, e, r, n);
}
function ho(t, e, r) {
  function n() {
    t.parent && t.parent.remove(t);
  }
  t.isGroup ? t.traverse(function(i) {
    i.isGroup || ig(i, e, r, n);
  }) : ig(t, e, r, n);
}
function Ev(t) {
  xD(t).oldStyle = t.style;
}
var ih = {}, on = ["x", "y"], ha = ["width", "height"], N_ = 0, R_ = 1, Av = 2;
function DD(t) {
  return Ce.extend(t);
}
var ED = eD;
function AD(t, e) {
  return ED(t, e);
}
function lr(t, e) {
  ih[t] = e;
}
function MD(t) {
  if (ih.hasOwnProperty(t))
    return ih[t];
}
function Mv(t, e, r, n) {
  var i = JC(t, e);
  return r && (n === "center" && (r = B_(r, i.getBoundingRect())), V_(i, r)), i;
}
function k_(t, e, r) {
  var n = new Mr({
    style: {
      image: t,
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height
    },
    onload: function(i) {
      if (r === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(B_(e, a));
      }
    }
  });
  return n;
}
function B_(t, e) {
  var r = e.width / e.height, n = t.height * r, i;
  n <= t.width ? i = t.height : (n = t.width, i = n / r);
  var a = t.x + t.width / 2, o = t.y + t.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var ID = tD;
function V_(t, e) {
  if (t.applyTransform) {
    var r = t.getBoundingRect(), n = r.calculateTransform(e);
    t.applyTransform(n);
  }
}
function Eo(t, e) {
  return $0(t, t, {
    lineWidth: e
  }), t;
}
function LD(t, e) {
  return Z0(t, t, e), t;
}
var PD = ii;
function OD(t, e) {
  for (var r = Fo([]); t && t !== e; )
    oo(r, t.getLocalTransform(), r), t = t.parent;
  return r;
}
function Iv(t, e, r) {
  return e && !It(e) && (e = Ho.getLocalTransform(e)), r && (e = zo([], e)), Kt([], t, e);
}
function ND(t, e, r) {
  var n = e[4] === 0 || e[5] === 0 || e[0] === 0 ? 1 : $e(2 * e[4] / e[0]), i = e[4] === 0 || e[5] === 0 || e[2] === 0 ? 1 : $e(2 * e[4] / e[2]), a = [t === "left" ? -n : t === "right" ? n : 0, t === "top" ? -i : t === "bottom" ? i : 0];
  return a = Iv(a, e, r), $e(a[0]) > $e(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function ag(t) {
  return !t.isGroup;
}
function RD(t) {
  return t.shape != null;
}
function F_(t, e, r) {
  if (!t || !e)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      ag(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return RD(o) && (s.shape = ce(o.shape)), s;
  }
  var a = n(t);
  e.traverse(function(o) {
    if (ag(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), wt(o, u, r, ge(o).dataIndex);
      }
    }
  });
}
function kD(t, e) {
  return Q(t, function(r) {
    var n = r[0];
    n = ye(n, e.x), n = ht(n, e.x + e.width);
    var i = r[1];
    return i = ye(i, e.y), i = ht(i, e.y + e.height), [n, i];
  });
}
function BD(t, e) {
  var r = ye(t.x, e.x), n = ht(t.x + t.width, e.x + e.width), i = ye(t.y, e.y), a = ht(t.y + t.height, e.y + e.height);
  if (n >= r && a >= i)
    return {
      x: r,
      y: i,
      width: n - r,
      height: a - i
    };
}
function Lv(t, e, r) {
  var n = z({
    rectHover: !0
  }, e), i = n.style = {
    strokeNoScale: !0
  };
  if (r = r || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, t)
    return t.indexOf("image://") === 0 ? (i.image = t.slice(8), Ae(i, r), new Mr(n)) : Mv(t.replace("path://", ""), n, r, "center");
}
function VD(t, e, r, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (z_(t, e, r, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function z_(t, e, r, n, i, a, o, s) {
  var u = r - t, l = n - e, f = o - i, c = s - a, h = Tf(f, c, u, l);
  if (FD(h))
    return !1;
  var v = t - i, d = e - a, p = Tf(v, d, u, l) / h;
  if (p < 0 || p > 1)
    return !1;
  var g = Tf(v, d, f, c) / h;
  return !(g < 0 || g > 1);
}
function Tf(t, e, r, n) {
  return t * n - r * e;
}
function FD(t) {
  return t <= 1e-6 && t >= -1e-6;
}
function Lu(t, e, r, n, i) {
  return e == null || (Ee(e) ? Ne[0] = Ne[1] = Ne[2] = Ne[3] = e : (process.env.NODE_ENV !== "production" && k(e.length === 4), Ne[0] = e[0], Ne[1] = e[1], Ne[2] = e[2], Ne[3] = e[3]), n && (Ne[0] = ye(0, Ne[0]), Ne[1] = ye(0, Ne[1]), Ne[2] = ye(0, Ne[2]), Ne[3] = ye(0, Ne[3])), r && (Ne[0] = -Ne[0], Ne[1] = -Ne[1], Ne[2] = -Ne[2], Ne[3] = -Ne[3]), og(t, Ne, "x", "width", 3, 1, i && i[0] || 0), og(t, Ne, "y", "height", 0, 2, i && i[1] || 0)), t;
}
var Ne = [0, 0, 0, 0];
function og(t, e, r, n, i, a, o) {
  var s = e[a] + e[i], u = t[n];
  t[n] += s, o = ye(0, ht(o, u)), t[n] < o ? (t[n] = o, t[r] += e[i] >= 0 ? -e[i] : e[a] >= 0 ? u + e[a] : $e(s) > 1e-8 ? (u - o) * e[i] / s : 0) : t[r] -= e[i];
}
function Tl(t) {
  var e = t.itemTooltipOption, r = t.componentModel, n = t.itemName, i = j(e) ? {
    formatter: e
  } : e, a = r.mainType, o = r.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = t.formatterParamsExtra;
  u && M(de(u), function(f) {
    _t(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = ge(t.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: Ae({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function ah(t, e) {
  var r;
  t.isGroup && (r = e(t)), r || t.traverse(e);
}
function xl(t, e) {
  if (t)
    if ($(t))
      for (var r = 0; r < t.length; r++)
        ah(t[r], e);
    else
      ah(t, e);
}
function Pv(t) {
  return !t || $e(t[1]) < Ss && $e(t[2]) < Ss || $e(t[0]) < Ss && $e(t[3]) < Ss;
}
var Ss = 1e-5;
function Ao(t, e) {
  return t ? ae.copy(t, e) : e.clone();
}
function Ov(t, e) {
  return e ? nv(t || wr(), e) : void 0;
}
function G_(t) {
  return {
    z: t.get("z") || 0,
    zlevel: t.get("zlevel") || 0
  };
}
function zD(t) {
  var e = -1 / 0, r = 1 / 0;
  ah(t, function(a) {
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
      o > e && (e = o), o < r && (r = o);
    }
  }
  return r > e && (r = e = 0), {
    min: r,
    max: e
  };
}
function H_(t, e, r) {
  U_(t, e, r, -1 / 0);
}
function U_(t, e, r, n) {
  if (t.ignoreModelZ)
    return n;
  var i = t.getTextContent(), a = t.getTextGuideLine(), o = t.isGroup;
  if (o)
    for (var s = t.childrenRef(), u = 0; u < s.length; u++)
      n = ye(U_(s[u], e, r, n), n);
  else
    t.z = e, t.zlevel = r, n = ye(t.z2 || 0, n);
  if (i && (i.z = e, i.zlevel = r, isFinite(n) && (i.z2 = n + 2)), a) {
    var l = t.textGuideLineConfig;
    a.z = e, a.zlevel = r, isFinite(n) && (a.z2 = n + (l && l.showAbove ? 1 : -1));
  }
  return n;
}
function GD(t) {
  return t.animation = {
    duration: 0
  }, t;
}
function HD(t, e) {
  return e ? nv(Qa.transform, e) : Fo(Qa.transform), Qa.decomposeTransform(), wo(t, Qa), t;
}
var Qa = new Ho();
Qa.transform = wr();
function UD(t) {
  var e = t.getZr().painter;
  return e.getType() === "canvas" ? e : null;
}
lr("circle", bl);
lr("ellipse", wv);
lr("sector", Cn);
lr("ring", Tv);
lr("polygon", xv);
lr("polyline", Zo);
lr("rect", ze);
lr("line", _n);
lr("bezierCurve", Cv);
lr("arc", wl);
const WD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: wl,
  BezierCurve: Cv,
  BoundingRect: ae,
  Circle: bl,
  CompoundPath: M_,
  Ellipse: wv,
  Group: Qe,
  HOVER_LAYER_FOR_INCREMENTAL: Av,
  HOVER_LAYER_FROM_THRESHOLD: R_,
  HOVER_LAYER_NO: N_,
  Image: Mr,
  IncrementalDisplayable: TD,
  Line: _n,
  LinearGradient: L_,
  OrientedBoundingRect: P_,
  Path: Ce,
  Point: ue,
  Polygon: xv,
  Polyline: Zo,
  RadialGradient: mD,
  Rect: ze,
  Ring: Tv,
  Sector: Cn,
  Text: at,
  WH: ha,
  XY: on,
  applyTransform: Iv,
  calcZ2Range: zD,
  clipPointsByRect: kD,
  clipRectByRect: BD,
  createIcon: Lv,
  decomposeTransform: HD,
  ensureCopyRect: Ao,
  ensureCopyTransform: Ov,
  expandOrShrinkRect: Lu,
  extendPath: AD,
  extendShape: DD,
  getCurrentCanvasPainter: UD,
  getShapeClass: MD,
  getTransform: OD,
  groupTransition: F_,
  initProps: jt,
  isBoundingRectAxisAligned: Pv,
  isElementRemoved: co,
  lineLineIntersect: z_,
  linePolygonIntersect: VD,
  makeImage: k_,
  makePath: Mv,
  mergePath: ID,
  payloadDisableAnimation: GD,
  registerShape: lr,
  removeElement: Iu,
  removeElementWithFadeOut: ho,
  resizePath: V_,
  retrieveZInfo: G_,
  setTooltipConfig: Tl,
  subPixelOptimize: PD,
  subPixelOptimizeLine: Eo,
  subPixelOptimizeRect: LD,
  transformDirection: ND,
  traverseElements: xl,
  traverseUpdateZ: H_,
  updateProps: wt
}, Symbol.toStringTag, { value: "Module" }));
var Cl = {};
function YD(t, e) {
  for (var r = 0; r < er.length; r++) {
    var n = er[r], i = e[n], a = t.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = t.currentStates.slice();
  t.clearStates(!0), t.setStyle({
    text: e.normal
  }), t.useStates(o, !0);
}
function sg(t, e, r) {
  var n = t.labelFetcher, i = t.labelDataIndex, a = t.labelDimIndex, o = e.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), r != null ? {
    interpolatedValue: r
  } : null)), s == null && (s = ie(t.defaultText) ? t.defaultText(i, t, r) : t.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < er.length; l++) {
    var f = er[l], c = e[f];
    u[f] = K(n ? n.getFormattedLabel(i, f, null, a, c && c.get("formatter")) : null, s);
  }
  return u;
}
function qo(t, e, r, n) {
  r = r || Cl;
  for (var i = t instanceof at, a = !1, o = 0; o < xu.length; o++) {
    var s = e[xu[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? t : t.getTextContent();
  if (a) {
    i || (u || (u = new at(), t.setTextContent(u)), t.stateProxy && (u.stateProxy = t.stateProxy));
    var l = sg(r, e), f = e.normal, c = !!f.getShallow("show"), h = Sn(f, n && n.normal, r, !1, !i);
    h.text = l.normal, i || t.setTextConfig(ug(f, r, !1));
    for (var o = 0; o < er.length; o++) {
      var v = er[o], s = e[v];
      if (s) {
        var d = u.ensureState(v), p = !!K(s.getShallow("show"), c);
        if (p !== c && (d.ignore = !p), d.style = Sn(s, n && n[v], r, !0, !i), d.style.text = l[v], !i) {
          var g = t.ensureState(v);
          g.textConfig = ug(s, r, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (h.x = u.style.x), u.style.y != null && (h.y = u.style.y), u.ignore = !c, u.useStyle(h), u.dirty(), r.enableTextSetter && (Dl(u).setLabelText = function(m) {
      var y = sg(r, e, m);
      YD(u, y);
    });
  } else u && (u.ignore = !0);
  t.dirty();
}
function Ko(t, e) {
  e = e || "label";
  for (var r = {
    normal: t.getModel(e)
  }, n = 0; n < er.length; n++) {
    var i = er[n];
    r[i] = t.getModel([i, e]);
  }
  return r;
}
function Sn(t, e, r, n, i) {
  var a = {};
  return XD(a, t, r, n, i), e && z(a, e), a;
}
function ug(t, e, r) {
  e = e || {};
  var n = {}, i, a = t.getShallow("rotate"), o = K(t.getShallow("distance"), r ? null : 5), s = t.getShallow("offset");
  return i = t.getShallow("position") || (r ? null : "inside"), i === "outside" && (i = e.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = t.get("color") === "inherit" ? e.inheritColor || null : "auto", e.autoOverflowArea != null && (n.autoOverflowArea = e.autoOverflowArea), e.layoutRect != null && (n.layoutRect = e.layoutRect), n;
}
function XD(t, e, r, n, i) {
  r = r || Cl;
  var a = e.ecModel, o = a && a.option.textStyle, s = $D(e), u;
  if (s) {
    u = {};
    var l = "richInheritPlainLabel", f = K(e.get(l), a ? a.get(l) : void 0);
    for (var c in s)
      if (s.hasOwnProperty(c)) {
        var h = e.getModel(["rich", c]);
        hg(u[c] = {}, h, o, e, f, r, n, i, !1, !0);
      }
  }
  u && (t.rich = u);
  var v = e.get("overflow");
  v && (t.overflow = v);
  var d = e.get("lineOverflow");
  d && (t.lineOverflow = d);
  var p = t, g = e.get("minMargin");
  if (g != null)
    g = Ee(g) ? g / 2 : 0, p.margin = [g, g, g, g], p.__marginType = qi.minMargin;
  else {
    var m = e.get("textMargin");
    m != null && (p.margin = ev(m), p.__marginType = qi.textMargin);
  }
  hg(t, e, o, null, null, r, n, i, !0, !1);
}
function $D(t) {
  for (var e; t && t !== t.ecModel; ) {
    var r = (t.option || Cl).rich;
    if (r) {
      e = e || {};
      for (var n = de(r), i = 0; i < n.length; i++) {
        var a = n[i];
        e[a] = 1;
      }
    }
    t = t.parentModel;
  }
  return e;
}
var lg = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], fg = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], cg = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function hg(t, e, r, n, i, a, o, s, u, l) {
  r = !o && r || Cl;
  var f = a && a.inheritColor, c = e.getShallow("color"), h = e.getShallow("textBorderColor"), v = K(e.getShallow("opacity"), r.opacity);
  (c === "inherit" || c === "auto") && (process.env.NODE_ENV !== "production" && c === "auto" && Ze("color: 'auto'", "color: 'inherit'"), f ? c = f : c = null), (h === "inherit" || h === "auto") && (process.env.NODE_ENV !== "production" && h === "auto" && Ze("color: 'auto'", "color: 'inherit'"), f ? h = f : h = null), s || (c = c || r.color, h = h || r.textBorderColor), c != null && (t.fill = c), h != null && (t.stroke = h);
  var d = K(e.getShallow("textBorderWidth"), r.textBorderWidth);
  d != null && (t.lineWidth = d);
  var p = K(e.getShallow("textBorderType"), r.textBorderType);
  p != null && (t.lineDash = p);
  var g = K(e.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
  g != null && (t.lineDashOffset = g), !o && v == null && !l && (v = a && a.defaultOpacity), v != null && (t.opacity = v), !o && !s && t.fill == null && a.inheritColor && (t.fill = a.inheritColor);
  for (var m = 0; m < lg.length; m++) {
    var y = lg[m], _ = i !== !1 && n ? zr(e.getShallow(y), n.getShallow(y), r[y]) : K(e.getShallow(y), r[y]);
    _ != null && (t[y] = _);
  }
  for (var m = 0; m < fg.length; m++) {
    var y = fg[m], _ = e.getShallow(y);
    _ != null && (t[y] = _);
  }
  if (t.verticalAlign == null) {
    var S = e.getShallow("baseline");
    S != null && (t.verticalAlign = S);
  }
  if (!u || !a.disableBox) {
    for (var m = 0; m < cg.length; m++) {
      var y = cg[m], _ = e.getShallow(y);
      _ != null && (t[y] = _);
    }
    var b = e.getShallow("borderType");
    b != null && (t.borderDash = b), (t.backgroundColor === "auto" || t.backgroundColor === "inherit") && f && (process.env.NODE_ENV !== "production" && t.backgroundColor === "auto" && Ze("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), t.backgroundColor = f), (t.borderColor === "auto" || t.borderColor === "inherit") && f && (process.env.NODE_ENV !== "production" && t.borderColor === "auto" && Ze("borderColor: 'auto'", "borderColor: 'inherit'"), t.borderColor = f);
  }
}
function ZD(t, e) {
  var r = e && e.getModel("textStyle");
  return Sr([
    // FIXME in node-canvas fontWeight is before fontStyle
    t.fontStyle || r && r.getShallow("fontStyle") || "",
    t.fontWeight || r && r.getShallow("fontWeight") || "",
    (t.fontSize || r && r.getShallow("fontSize") || 12) + "px",
    t.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Dl = Me();
function qD(t, e, r, n) {
  if (t) {
    var i = Dl(t);
    i.prevValue = i.value, i.value = r;
    var a = e.normal;
    i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = e);
  }
}
var qi = {
  minMargin: 1,
  textMargin: 2
}, KD = ["textStyle", "color"], xf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Cf = new at(), jD = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getTextColor = function(e) {
      var r = this.ecModel;
      return this.getShallow("color") || (!e && r ? r.get(KD) : null);
    }, t.prototype.getFont = function() {
      return ZD({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, t.prototype.getTextRect = function(e) {
      for (var r = {
        text: e,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < xf.length; n++)
        r[xf[n]] = this.getShallow(xf[n]);
      return Cf.useStyle(r), Cf.update(), Cf.getBoundingRect();
    }, t;
  }()
), W_ = [
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
], QD = bo(W_), JD = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getLineStyle = function(e) {
      return QD(this, e);
    }, t;
  }()
), Y_ = [
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
], eE = bo(Y_), tE = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getItemStyle = function(e, r) {
      return eE(this, e, r);
    }, t;
  }()
), Be = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.parentModel = r, this.ecModel = n, this.option = e;
    }
    return t.prototype.init = function(e, r, n) {
    }, t.prototype.mergeOption = function(e, r) {
      De(this.option, e, !0);
    }, t.prototype.get = function(e, r) {
      return e == null ? this.option : this._doGet(this.parsePath(e), !r && this.parentModel);
    }, t.prototype.getShallow = function(e, r) {
      var n = this.option, i = n == null ? n : n[e];
      if (i == null && !r) {
        var a = this.parentModel;
        a && (i = a.getShallow(e));
      }
      return i;
    }, t.prototype.getModel = function(e, r) {
      var n = e != null, i = n ? this.parsePath(e) : null, a = n ? this._doGet(i) : this.option;
      return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new t(a, r, this.ecModel);
    }, t.prototype.isEmpty = function() {
      return this.option == null;
    }, t.prototype.restoreData = function() {
    }, t.prototype.clone = function() {
      var e = this.constructor;
      return new e(ce(this.option));
    }, t.prototype.parsePath = function(e) {
      return typeof e == "string" ? e.split(".") : e;
    }, t.prototype.resolveParentPath = function(e) {
      return e;
    }, t.prototype.isAnimationEnabled = function() {
      if (!le.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, t.prototype._doGet = function(e, r) {
      var n = this.option;
      if (!e)
        return n;
      for (var i = 0; i < e.length && !(e[i] && (n = n && typeof n == "object" ? n[e[i]] : null, n == null)); i++)
        ;
      return n == null && r && (n = r._doGet(this.resolveParentPath(e), r.parentModel)), n;
    }, t;
  }()
);
tv(Be);
uT(Be);
Er(Be, JD);
Er(Be, tE);
Er(Be, vT);
Er(Be, jD);
function Oa(t) {
  return t == null ? 0 : t.length || 1;
}
function vg(t) {
  return t;
}
var rE = (
  /** @class */
  function() {
    function t(e, r, n, i, a, o) {
      this._old = e, this._new = r, this._oldKeyGetter = n || vg, this._newKeyGetter = i || vg, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return t.prototype.add = function(e) {
      return this._add = e, this;
    }, t.prototype.update = function(e) {
      return this._update = e, this;
    }, t.prototype.updateManyToOne = function(e) {
      return this._updateManyToOne = e, this;
    }, t.prototype.updateOneToMany = function(e) {
      return this._updateOneToMany = e, this;
    }, t.prototype.updateManyToMany = function(e) {
      return this._updateManyToMany = e, this;
    }, t.prototype.remove = function(e) {
      return this._remove = e, this;
    }, t.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, t.prototype._executeOneToOne = function() {
      var e = this._old, r = this._new, n = {}, i = new Array(e.length), a = new Array(r.length);
      this._initIndexMap(e, null, i, "_oldKeyGetter"), this._initIndexMap(r, n, a, "_newKeyGetter");
      for (var o = 0; o < e.length; o++) {
        var s = i[o], u = n[s], l = Oa(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, t.prototype._executeMultiple = function() {
      var e = this._old, r = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(e, n, a, "_oldKeyGetter"), this._initIndexMap(r, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = n[u], f = i[u], c = Oa(l), h = Oa(f);
        if (c > 1 && h === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
        else if (c === 1 && h > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
        else if (c === 1 && h === 1)
          this._update && this._update(f, l), i[u] = null;
        else if (c > 1 && h > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
        else if (c > 1)
          for (var v = 0; v < c; v++)
            this._remove && this._remove(l[v]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }, t.prototype._performRestAdd = function(e, r) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n], a = r[i], o = Oa(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        r[i] = null;
      }
    }, t.prototype._initIndexMap = function(e, r, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < e.length; o++) {
        var s = "_ec_" + this[i](e[o], o);
        if (a || (n[o] = s), !!r) {
          var u = r[s], l = Oa(u);
          l === 0 ? (r[s] = o, a && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o);
        }
      }
    }, t;
  }()
), Je = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, X_ = Me();
function nE(t) {
  X_(t).datasetMap = re();
}
function iE(t, e, r) {
  var n = {}, i = Nv(e);
  if (!i || !t)
    return n;
  var a = [], o = [], s = e.ecModel, u = X_(s).datasetMap, l = i.uid + "_" + r.seriesLayoutBy, f, c;
  t = t.slice(), M(t, function(p, g) {
    var m = J(p) ? p : t[g] = {
      name: p
    };
    m.type === "ordinal" && f == null && (f = g, c = d(m)), n[m.name] = [];
  });
  var h = u.get(l) || u.set(l, {
    categoryWayDim: c,
    valueWayDim: 0
  });
  M(t, function(p, g) {
    var m = p.name, y = d(p);
    if (f == null) {
      var _ = h.valueWayDim;
      v(n[m], _, y), v(o, _, y), h.valueWayDim += y;
    } else if (f === g)
      v(n[m], 0, y), v(a, 0, y);
    else {
      var _ = h.categoryWayDim;
      v(n[m], _, y), v(o, _, y), h.categoryWayDim += y;
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
function aE(t, e, r) {
  var n = {}, i = Nv(t);
  if (!i)
    return n;
  var a = e.sourceFormat, o = e.dimensionsDefine, s;
  (a === tr || a === ur) && M(o, function(f, c) {
    (J(f) ? f.name : f) === "name" && (s = c);
  });
  var u = function() {
    for (var f = {}, c = {}, h = [], v = 0, d = Math.min(5, r); v < d; v++) {
      var p = Z_(e.data, a, e.seriesLayoutBy, o, e.startIndex, v);
      h.push(p);
      var g = p === Je.Not;
      if (g && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !g && h[f.n] === Je.Not) && (f.n = v), m(f) && h[f.n] !== Je.Not)
        return f;
      g || (p === Je.Might && c.v == null && v !== s && (c.v = v), (c.n == null || c.n === c.v) && (c.n = v));
    }
    function m(y) {
      return y.v != null && y.n != null;
    }
    return m(f) ? f : m(c) ? c : null;
  }();
  if (u) {
    n.value = [u.v];
    var l = s ?? u.n;
    n.itemName = [l], n.seriesName = [l];
  }
  return n;
}
function Nv(t) {
  var e = t.get("data", !0);
  if (!e)
    return $o(t.ecModel, "dataset", {
      index: t.get("datasetIndex", !0),
      id: t.get("datasetId", !0)
    }, $t).models[0];
}
function oE(t) {
  return !t.get("transform", !0) && !t.get("fromTransformResult", !0) ? [] : $o(t.ecModel, "dataset", {
    index: t.get("fromDatasetIndex", !0),
    id: t.get("fromDatasetId", !0)
  }, $t).models;
}
function $_(t, e) {
  return Z_(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
}
function Z_(t, e, r, n, i, a) {
  var o, s = 5;
  if (bt(t))
    return Je.Not;
  var u, l;
  if (n) {
    var f = n[a];
    J(f) ? (u = f.name, l = f.type) : j(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? Je.Must : Je.Not;
  if (e === vt) {
    var c = t;
    if (r === _i) {
      for (var h = c[a], v = 0; v < (h || []).length && v < s; v++)
        if ((o = S(h[i + v])) != null)
          return o;
    } else
      for (var v = 0; v < c.length && v < s; v++) {
        var d = c[i + v];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (e === tr) {
    var p = t;
    if (!u)
      return Je.Not;
    for (var v = 0; v < p.length && v < s; v++) {
      var g = p[v];
      if (g && (o = S(g[u])) != null)
        return o;
    }
  } else if (e === ur) {
    var m = t;
    if (!u)
      return Je.Not;
    var h = m[u];
    if (!h || bt(h))
      return Je.Not;
    for (var v = 0; v < h.length && v < s; v++)
      if ((o = S(h[v])) != null)
        return o;
  } else if (e === Nt)
    for (var y = t, v = 0; v < y.length && v < s; v++) {
      var g = y[v], _ = Xo(g);
      if (!$(_))
        return Je.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(b) {
    var w = j(b);
    if (b != null && isFinite(Number(b)) && b !== "")
      return w ? Je.Might : Je.Not;
    if (w && b !== "-")
      return Je.Must;
  }
  return Je.Not;
}
var El = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.data = e.data || (e.sourceFormat === ur ? {} : []), this.sourceFormat = e.sourceFormat || h_, this.seriesLayoutBy = e.seriesLayoutBy || Dr, this.startIndex = e.startIndex || 0, this.dimensionsDetectedCount = e.dimensionsDetectedCount, this.metaRawOption = e.metaRawOption;
      var r = this.dimensionsDefine = e.dimensionsDefine;
      if (r)
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          i.type == null && $_(this, n) === Je.Must && (i.type = "ordinal");
        }
    }
    return t;
  }()
);
function Rv(t) {
  return t instanceof El;
}
function oh(t, e, r) {
  r = r || K_(t);
  var n = e.seriesLayoutBy, i = uE(t, r, n, e.sourceHeader, e.dimensions), a = new El({
    data: t,
    sourceFormat: r,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: ce(e)
  });
  return a;
}
function q_(t) {
  return new El({
    data: t,
    sourceFormat: bt(t) ? Gr : Nt
  });
}
function sE(t) {
  return new El({
    data: t.data,
    sourceFormat: t.sourceFormat,
    seriesLayoutBy: t.seriesLayoutBy,
    dimensionsDefine: ce(t.dimensionsDefine),
    startIndex: t.startIndex,
    dimensionsDetectedCount: t.dimensionsDetectedCount
  });
}
function K_(t) {
  var e = h_;
  if (bt(t))
    e = Gr;
  else if ($(t)) {
    t.length === 0 && (e = vt);
    for (var r = 0, n = t.length; r < n; r++) {
      var i = t[r];
      if (i != null) {
        if ($(i) || bt(i)) {
          e = vt;
          break;
        } else if (J(i)) {
          e = tr;
          break;
        }
      }
    }
  } else if (J(t)) {
    for (var a in t)
      if (_t(t, a) && It(t[a])) {
        e = ur;
        break;
      }
  }
  return e;
}
function uE(t, e, r, n, i) {
  var a, o;
  if (!t)
    return {
      dimensionsDefine: dg(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (e === vt) {
    var s = t;
    n === "auto" || n == null ? pg(function(l) {
      l != null && l !== "-" && (j(l) ? o == null && (o = 1) : o = 0);
    }, r, s, 10) : o = Ee(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], pg(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, r, s, 1 / 0)), a = i ? i.length : r === _i ? s.length : s[0] ? s[0].length : null;
  } else if (e === tr)
    i || (i = lE(t));
  else if (e === ur)
    i || (i = [], M(t, function(l, f) {
      i.push(f);
    }));
  else if (e === Nt) {
    var u = Xo(t[0]);
    a = $(u) && u.length || 1;
  } else e === Gr && process.env.NODE_ENV !== "production" && k(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: dg(i),
    dimensionsDetectedCount: a
  };
}
function lE(t) {
  for (var e = 0, r; e < t.length && !(r = t[e++]); )
    ;
  if (r)
    return de(r);
}
function dg(t) {
  if (t) {
    var e = re();
    return Q(t, function(r, n) {
      r = J(r) ? r : {
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
      var a = e.get(i.name);
      return a ? i.name += "-" + a.count++ : e.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function pg(t, e, r, n) {
  if (e === _i)
    for (var i = 0; i < r.length && i < n; i++)
      t(r[i] ? r[i][0] : null, i);
  else
    for (var a = r[0] || [], i = 0; i < a.length && i < n; i++)
      t(a[i], i);
}
function j_(t) {
  var e = t.sourceFormat;
  return e === tr || e === ur;
}
var Yn, Xn, $n, Zn, gg, mg, Q_ = (
  /** @class */
  function() {
    function t(e, r) {
      var n = Rv(e) ? e : q_(e);
      this._source = n;
      var i = this._data = n.data, a = n.sourceFormat, o = n.seriesLayoutBy;
      if (a === Gr) {
        if (process.env.NODE_ENV !== "production" && r == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = r, this._data = i;
      }
      if (process.env.NODE_ENV !== "production") {
        var s = fE[Pu(a, o)];
        s && s(i, n.dimensionsDefine);
      }
      mg(this, i, n);
    }
    return t.prototype.getSource = function() {
      return this._source;
    }, t.prototype.count = function() {
      return 0;
    }, t.prototype.getItem = function(e, r) {
    }, t.prototype.appendData = function(e) {
    }, t.prototype.clean = function() {
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.pure = !1, e.persistent = !0;
    }(), t.internalField = function() {
      var e;
      mg = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, c = u.startIndex, h = u.dimensionsDefine, v = gg[Pu(l, f)];
        if (process.env.NODE_ENV !== "production" && k(v, "Invalide sourceFormat: " + l), z(o, v), l === Gr)
          o.getItem = r, o.count = i, o.fillStorage = n;
        else {
          var d = J_(l, f);
          o.getItem = Pe(d, null, s, c, h);
          var p = eS(l, f);
          o.count = Pe(p, null, s, c, h);
        }
      };
      var r = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, c = 0; c < l; c++)
          s[c] = u[f + c];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, c = this._dimSize, h = 0; h < c; h++) {
          for (var v = l[h], d = v[0] == null ? 1 / 0 : v[0], p = v[1] == null ? -1 / 0 : v[1], g = s - o, m = u[h], y = 0; y < g; y++) {
            var _ = f[y * c + h];
            m[o + y] = _, _ < d && (d = _), _ > p && (p = _);
          }
          v[0] = d, v[1] = p;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      gg = (e = {}, e[vt + "_" + Dr] = {
        pure: !0,
        appendData: a
      }, e[vt + "_" + _i] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, e[tr] = {
        pure: !0,
        appendData: a
      }, e[ur] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          M(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), c = 0; c < (u || []).length; c++)
              f.push(u[c]);
          });
        }
      }, e[Nt] = {
        appendData: a
      }, e[Gr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && k(bt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, e);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    }(), t;
  }()
), bs = function(t) {
  $(t) || _e("series.data or dataset.source must be an array.");
}, fE = (Yn = {}, Yn[vt + "_" + Dr] = bs, Yn[vt + "_" + _i] = bs, Yn[tr] = bs, Yn[ur] = function(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r].name;
    n == null && _e("dimension name must not be null/undefined.");
  }
}, Yn[Nt] = bs, Yn), yg = function(t, e, r, n) {
  return t[n];
}, cE = (Xn = {}, Xn[vt + "_" + Dr] = function(t, e, r, n) {
  return t[n + e];
}, Xn[vt + "_" + _i] = function(t, e, r, n, i) {
  n += e;
  for (var a = i || [], o = t, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, Xn[tr] = yg, Xn[ur] = function(t, e, r, n, i) {
  for (var a = i || [], o = 0; o < r.length; o++) {
    var s = r[o].name, u = s != null ? t[s] : null;
    a[o] = u ? u[n] : null;
  }
  return a;
}, Xn[Nt] = yg, Xn);
function J_(t, e) {
  var r = cE[Pu(t, e)];
  return process.env.NODE_ENV !== "production" && k(r, 'Do not support get item on "' + t + '", "' + e + '".'), r;
}
var _g = function(t, e, r) {
  return t.length;
}, hE = ($n = {}, $n[vt + "_" + Dr] = function(t, e, r) {
  return Math.max(0, t.length - e);
}, $n[vt + "_" + _i] = function(t, e, r) {
  var n = t[0];
  return n ? Math.max(0, n.length - e) : 0;
}, $n[tr] = _g, $n[ur] = function(t, e, r) {
  var n = r[0].name, i = n != null ? t[n] : null;
  return i ? i.length : 0;
}, $n[Nt] = _g, $n);
function eS(t, e) {
  var r = hE[Pu(t, e)];
  return process.env.NODE_ENV !== "production" && k(r, 'Do not support count on "' + t + '", "' + e + '".'), r;
}
var Df = function(t, e, r) {
  return t[e];
}, vE = (Zn = {}, Zn[vt] = Df, Zn[tr] = function(t, e, r) {
  return t[r];
}, Zn[ur] = Df, Zn[Nt] = function(t, e, r) {
  var n = Xo(t);
  return n instanceof Array ? n[e] : n;
}, Zn[Gr] = Df, Zn);
function tS(t) {
  var e = vE[t];
  return process.env.NODE_ENV !== "production" && k(e, 'Do not support get value on "' + t + '".'), e;
}
function Pu(t, e) {
  return t === vt ? t + "_" + e : t;
}
function va(t, e, r) {
  if (t) {
    var n = t.getRawDataItem(e);
    if (n != null) {
      var i = t.getStore(), a = i.getSource().sourceFormat;
      if (r != null) {
        var o = t.getDimensionIndex(r), s = i.getDimensionProperty(o);
        return tS(a)(n, o, s);
      } else {
        var u = n;
        return a === Nt && (u = Xo(n)), u;
      }
    }
  }
}
var dE = (
  /** @class */
  function() {
    function t(e, r) {
      this._encode = e, this._schema = r;
    }
    return t.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, t.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, t;
  }()
);
function pE(t, e) {
  var r = {}, n = r.encode = {}, i = re(), a = [], o = [], s = {};
  M(t.dimensions, function(h) {
    var v = t.getDimensionInfo(h), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && k(jc.get(d) == null);
      var p = v.coordDimIndex;
      Ef(n, d)[p] = h, v.isExtraCoord || (i.set(d, 1), mE(v.type) && (a[0] = h), Ef(s, d)[p] = t.getDimensionIndex(v.name)), v.defaultTooltip && o.push(h);
    }
    jc.each(function(g, m) {
      var y = Ef(n, m), _ = v.otherDims[m];
      _ != null && _ !== !1 && (y[_] = v.name);
    });
  });
  var u = [], l = {};
  i.each(function(h, v) {
    var d = n[v];
    l[v] = d[0], u = u.concat(d);
  }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = Q(u, function(h) {
    return t.getDimensionInfo(h).storeDimIndex;
  }), r.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var c = n.tooltip;
  return c && c.length ? o = c.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, r.userOutput = new dE(s, e), r;
}
function Ef(t, e) {
  return t.hasOwnProperty(e) || (t[e] = []), t[e];
}
function gE(t) {
  return t === "category" ? "ordinal" : t === "time" ? "time" : "float";
}
function mE(t) {
  return !(t === "ordinal" || t === "time");
}
var Js = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.otherDims = {}, e != null && z(this, e);
    }
    return t;
  }()
);
function eu(t, e) {
  var r = e && e.type;
  return r === "ordinal" ? t : (r === "time" && !Ee(t) && t != null && t !== "-" && (t = +ba(t)), t == null || t === "" ? NaN : Number(t));
}
re({
  number: function(t) {
    return parseFloat(t);
  },
  time: function(t) {
    return +ba(t);
  },
  trim: function(t) {
    return j(t) ? Sr(t) : t;
  }
});
var yE = (
  /** @class */
  function() {
    function t(e, r) {
      var n = e === "desc";
      this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0;
    }
    return t.prototype.evaluate = function(e, r) {
      var n = Ee(e) ? e : wu(e), i = Ee(r) ? r : wu(r), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = j(e), u = j(r);
        s && (n = u ? e : 0), u && (i = s ? r : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, t;
  }()
);
function rS(t) {
  var e = "", r = -1 / 0, n = -1 / 0, i = 1 / 0, a = 1 / 0;
  return t && (t.g != null && (e += "G" + t.g, r = t.g), t.ge != null && (e += "GE" + t.ge, n = t.ge), t.l != null && (e += "L" + t.l, i = t.l), t.le != null && (e += "LE" + t.le, a = t.le)), {
    key: e,
    g: r,
    ge: n,
    l: i,
    le: a
  };
}
function nS(t, e) {
  return e > t.g && e >= t.ge && e < t.l && e <= t.le;
}
var _E = typeof Uint32Array === wa ? Array : Uint32Array, SE = typeof Uint16Array === wa ? Array : Uint16Array, iS = typeof Int32Array === wa ? Array : Int32Array, Sg = typeof Float64Array === wa ? Array : Float64Array, aS = {
  float: Sg,
  int: iS,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Sg
}, Af;
function Pi(t) {
  return t > 65535 ? _E : SE;
}
function bE(t) {
  var e = t.constructor;
  return e === Array ? t.slice() : new e(t);
}
function bg(t, e, r, n, i) {
  var a = aS[r || "float"];
  if (i) {
    var o = t[e], s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++)
        u[l] = o[l];
      t[e] = u;
    }
  } else
    t[e] = new a(n);
}
var sh = (
  /** @class */
  function() {
    function t() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = re();
    }
    return t.prototype.initData = function(e, r, n) {
      process.env.NODE_ENV !== "production" && k(ie(e.getItem) && ie(e.count), "Invalid data provider."), this._provider = e, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = e.getSource(), a = this.defaultDimValueGetter = Af[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = j_(i);
      this._dimensions = Q(r, function(s) {
        return process.env.NODE_ENV !== "production" && o && k(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, e.count());
    }, t.prototype.getProvider = function() {
      return this._provider;
    }, t.prototype.getSource = function() {
      return this._provider.getSource();
    }, t.prototype.ensureCalculationDimension = function(e, r) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(e);
      if (a != null) {
        if (i[a].type === r)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: r
      }, n.set(e, a), this._chunks[a] = new aS[r || "float"](this._rawCount), this._rawExtent[a] = Xt(), a;
    }, t.prototype.collectOrdinalMeta = function(e, r) {
      var n = this._chunks[e], i = this._dimensions[e], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[e] = Xt());
      for (var u = a[e], l = o; l < s; l++) {
        var f = n[l] = r.parseAndCollect(n[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      i.ordinalMeta = r, i.ordinalOffset = s, i.type = "ordinal";
    }, t.prototype.getOrdinalMeta = function(e) {
      var r = this._dimensions[e], n = r.ordinalMeta;
      return n;
    }, t.prototype.getDimensionProperty = function(e) {
      var r = this._dimensions[e];
      return r && r.property;
    }, t.prototype.appendData = function(e) {
      process.env.NODE_ENV !== "production" && k(!this._indices, "appendData can only be called on raw data.");
      var r = this._provider, n = this.count();
      r.appendData(e);
      var i = r.count();
      return r.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, t.prototype.appendValues = function(e, r) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(e.length, r || 0), l = 0; l < a; l++) {
        var f = i[l];
        bg(n, l, f.type, u, !0);
      }
      for (var c = [], h = s; h < u; h++)
        for (var v = h - s, d = 0; d < a; d++) {
          var f = i[d], p = Af.arrayRows.call(this, e[v] || c, f.property, v, d);
          n[d][h] = p;
          var g = o[d];
          p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, t.prototype._initDataFromProvider = function(e, r, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = Q(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var c = o[f];
        u[f] || (u[f] = Xt()), bg(a, f, c.type, r, n);
      }
      if (i.fillStorage)
        i.fillStorage(e, r, a, u);
      else
        for (var h = [], v = e; v < r; v++) {
          h = i.getItem(v, h);
          for (var d = 0; d < s; d++) {
            var p = a[d], g = this._dimValueGetter(h, l[d], v, d);
            p[v] = g;
            var m = u[d];
            g < m[0] && (m[0] = g), g > m[1] && (m[1] = g);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = r, this._extent = [];
    }, t.prototype.count = function() {
      return this._count;
    }, t.prototype.get = function(e, r) {
      if (!(r >= 0 && r < this._count))
        return NaN;
      var n = this._chunks[e];
      return n ? n[this.getRawIndex(r)] : NaN;
    }, t.prototype.getValues = function(e, r) {
      var n = [], i = [];
      if (r == null) {
        r = e, e = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = e;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], r));
      return n;
    }, t.prototype.getByRawIndex = function(e, r) {
      if (!(r >= 0 && r < this._rawCount))
        return NaN;
      var n = this._chunks[e];
      return n ? n[r] : NaN;
    }, t.prototype.getSum = function(e) {
      var r = this._chunks[e], n = 0;
      if (r)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(e, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, t.prototype.getMedian = function(e) {
      var r = [];
      this.each([e], function(i) {
        isNaN(i) || r.push(i);
      }), lv(r);
      var n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? r[(n - 1) / 2] : (r[n / 2] + r[n / 2 - 1]) / 2;
    }, t.prototype.indexOfRawIndex = function(e) {
      if (e >= this._rawCount || e < 0)
        return -1;
      if (!this._indices)
        return e;
      var r = this._indices, n = r[e];
      if (n != null && n < this._count && n === e)
        return e;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (r[o] < e)
          i = o + 1;
        else if (r[o] > e)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, t.prototype.getIndices = function() {
      var e, r = this._indices;
      if (r) {
        var n = r.constructor, i = this._count;
        if (n === Array) {
          e = new n(i);
          for (var a = 0; a < i; a++)
            e[a] = r[a];
        } else
          e = new n(r.buffer, 0, i);
      } else {
        var n = Pi(this._rawCount);
        e = new n(this.count());
        for (var a = 0; a < e.length; a++)
          e[a] = a;
      }
      return e;
    }, t.prototype.filter = function(e, r) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = Pi(n._rawCount), o = new a(i), s = [], u = e.length, l = 0, f = e[0], c = n._chunks, h = 0; h < i; h++) {
        var v = void 0, d = n.getRawIndex(h);
        if (u === 0)
          v = r(h);
        else if (u === 1) {
          var p = c[f][d];
          v = r(p, h);
        } else {
          for (var g = 0; g < u; g++)
            s[g] = c[e[g]][d];
          s[g] = h, v = r.apply(null, s);
        }
        v && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, t.prototype.selectRange = function(e) {
      var r = this.clone(), n = r._count;
      if (!n)
        return this;
      var i = de(e), a = i.length;
      if (!a)
        return this;
      var o = r.count(), s = Pi(r._rawCount), u = new s(o), l = 0, f = i[0], c = e[f][0], h = e[f][1], v = r._chunks, d = !1;
      if (!r._indices) {
        var p = 0;
        if (a === 1) {
          for (var g = v[i[0]], m = 0; m < n; m++) {
            var y = g[m];
            (y >= c && y <= h || isNaN(y)) && (u[l++] = p), p++;
          }
          d = !0;
        } else if (a === 2) {
          for (var g = v[i[0]], _ = v[i[1]], S = e[i[1]][0], b = e[i[1]][1], m = 0; m < n; m++) {
            var y = g[m], w = _[m];
            (y >= c && y <= h || isNaN(y)) && (w >= S && w <= b || isNaN(w)) && (u[l++] = p), p++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var m = 0; m < o; m++) {
            var T = r.getRawIndex(m), y = v[i[0]][T];
            (y >= c && y <= h || isNaN(y)) && (u[l++] = T);
          }
        else
          for (var m = 0; m < o; m++) {
            for (var x = !0, T = r.getRawIndex(m), D = 0; D < a; D++) {
              var C = i[D], y = v[C][T];
              (y < e[C][0] || y > e[C][1]) && (x = !1);
            }
            x && (u[l++] = r.getRawIndex(m));
          }
      return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r;
    }, t.prototype.map = function(e, r) {
      var n = this.clone(e);
      return this._updateDims(n, e, r), n;
    }, t.prototype.modify = function(e, r) {
      this._updateDims(this, e, r);
    }, t.prototype._updateDims = function(e, r, n) {
      for (var i = e._chunks, a = [], o = r.length, s = e.count(), u = [], l = e._rawExtent, f = 0; f < r.length; f++)
        l[r[f]] = Xt();
      for (var c = 0; c < s; c++) {
        for (var h = e.getRawIndex(c), v = 0; v < o; v++)
          u[v] = i[r[v]][h];
        u[o] = c;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var p = r[f], g = d[f], m = l[p], y = i[p];
            y && (y[h] = g), g < m[0] && (m[0] = g), g > m[1] && (m[1] = g);
          }
        }
      }
    }, t.prototype.lttbDownSample = function(e, r) {
      var n = this.clone([e], !0), i = n._chunks, a = i[e], o = this.count(), s = 0, u = Math.floor(1 / r), l = this.getRawIndex(0), f, c, h, v = new (Pi(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var p = Math.min(d + u, o - 1), g = Math.min(d + u * 2, o), m = (g + p) / 2, y = 0, _ = p; _ < g; _++) {
          var S = this.getRawIndex(_), b = a[S];
          isNaN(b) || (y += b);
        }
        y /= g - p;
        var w = d, T = Math.min(d + u, o), x = d - 1, D = a[l];
        f = -1, h = w;
        for (var C = -1, E = 0, _ = w; _ < T; _++) {
          var S = this.getRawIndex(_), b = a[S];
          if (isNaN(b)) {
            E++, C < 0 && (C = S);
            continue;
          }
          c = Math.abs((x - m) * (b - D) - (x - _) * (y - D)), c > f && (f = c, h = S);
        }
        E > 0 && E < T - w && (v[s++] = Math.min(C, h), h = Math.max(C, h)), v[s++] = h, l = h;
      }
      return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n;
    }, t.prototype.minmaxDownSample = function(e, r) {
      for (var n = this.clone([e], !0), i = n._chunks, a = Math.floor(1 / r), o = i[e], s = this.count(), u = new (Pi(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var c = f, h = o[this.getRawIndex(c)], v = f, d = o[this.getRawIndex(v)], p = a;
        f + a > s && (p = s - f);
        for (var g = 0; g < p; g++) {
          var m = this.getRawIndex(f + g), y = o[m];
          y < h && (h = y, c = f + g), y > d && (d = y, v = f + g);
        }
        var _ = this.getRawIndex(c), S = this.getRawIndex(v);
        c < v ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, t.prototype.downSample = function(e, r, n, i) {
      for (var a = this.clone([e], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[e], f = this.count(), c = a._rawExtent[e] = Xt(), h = new (Pi(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var p = 0; p < u; p++) {
          var g = this.getRawIndex(d + p);
          s[p] = l[g];
        }
        var m = n(s), y = this.getRawIndex(Math.min(d + i(s, m) || 0, f - 1));
        l[y] = m, m < c[0] && (c[0] = m), m > c[1] && (c[1] = m), h[v++] = y;
      }
      return a._count = v, a._indices = h, a._updateGetRawIdx(), a;
    }, t.prototype.each = function(e, r) {
      if (this._count)
        for (var n = e.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              r(a);
              break;
            case 1:
              r(i[e[0]][s], a);
              break;
            case 2:
              r(i[e[0]][s], i[e[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++)
                l[u] = i[e[u]][s];
              l[u] = a, r.apply(null, l);
          }
        }
    }, t.prototype.getDataExtent = function(e, r) {
      var n = this._chunks[e], i = Xt();
      if (!n)
        return i;
      var a = this.count(), o = !this._indices && !r;
      if (o)
        return this._rawExtent[e].slice();
      var s = this._extent, u = s[e] || (s[e] = {}), l = rS(r), f = l.key, c = u[f];
      if (c)
        return c.slice();
      for (var h = i[0], v = i[1], d = 0; d < a; d++) {
        var p = this.getRawIndex(d), g = n[p];
        (!r || nS(l, g)) && (g < h && (h = g), g > v && (v = g));
      }
      return u[f] = [h, v];
    }, t.prototype.getRawDataItem = function(e) {
      var r = this.getRawIndex(e);
      if (this._provider.persistent)
        return this._provider.getItem(r);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][r]);
      return n;
    }, t.prototype.clone = function(e, r) {
      var n = new t(), i = this._chunks, a = e && mn(e, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? bE(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, t.prototype._copyCommonProps = function(e) {
      e._count = this._count, e._rawCount = this._rawCount, e._provider = this._provider, e._dimensions = this._dimensions, e._extent = ce(this._extent), e._rawExtent = ce(this._rawExtent);
    }, t.prototype._cloneIndices = function() {
      if (this._indices) {
        var e = this._indices.constructor, r = void 0;
        if (e === Array) {
          var n = this._indices.length;
          r = new e(n);
          for (var i = 0; i < n; i++)
            r[i] = this._indices[i];
        } else
          r = new e(this._indices);
        return r;
      }
      return null;
    }, t.prototype._getRawIdxIdentity = function(e) {
      return e;
    }, t.prototype._getRawIdx = function(e) {
      return e < this._count && e >= 0 ? this._indices[e] : -1;
    }, t.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, t.internalField = function() {
      function e(r, n, i, a) {
        return eu(r[a], this._dimensions[a]);
      }
      Af = {
        arrayRows: e,
        objectRows: function(r, n, i, a) {
          return eu(r[n], this._dimensions[a]);
        },
        keyedColumns: e,
        original: function(r, n, i, a) {
          var o = r && (r.value == null ? r : r.value);
          return eu(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(r, n, i, a) {
          return r[a];
        }
      };
    }(), t;
  }()
), wE = Me(), TE = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, oS = (
  /** @class */
  function() {
    function t(e) {
      this.dimensions = e.dimensions, this._dimOmitted = e.dimensionOmitted, this.source = e.source, this._fullDimCount = e.fullDimensionCount, this._updateDimOmitted(e.dimensionOmitted);
    }
    return t.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, t.prototype._updateDimOmitted = function(e) {
      this._dimOmitted = e, e && (this._dimNameMap || (this._dimNameMap = uS(this.source)));
    }, t.prototype.getSourceDimensionIndex = function(e) {
      return K(this._dimNameMap.get(e), -1);
    }, t.prototype.getSourceDimension = function(e) {
      var r = this.source.dimensionsDefine;
      if (r)
        return r[e];
    }, t.prototype.makeStoreSchema = function() {
      for (var e = this._fullDimCount, r = j_(this.source), n = !lS(e), i = "", a = [], o = 0, s = 0; o < e; o++) {
        var u = void 0, l = void 0, f = void 0, c = this.dimensions[s];
        if (c && c.storeDimIndex === o)
          u = r ? c.name : null, l = c.type, f = c.ordinalMeta, s++;
        else {
          var h = this.getSourceDimension(o);
          h && (u = r ? h.name : null, l = h.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), r && u != null && (!c || !c.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += TE[l] || "f", f && (i += f.uid), i += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, t.prototype.makeOutputDimensionNames = function() {
      for (var e = [], r = 0, n = 0; r < this._fullDimCount; r++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === r)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(r);
          o && (i = o.name);
        }
        e.push(i);
      }
      return e;
    }, t.prototype.appendCalculationDimension = function(e) {
      this.dimensions.push(e), e.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, t;
  }()
);
function sS(t) {
  return t instanceof oS;
}
function kv(t) {
  for (var e = re(), r = 0; r < (t || []).length; r++) {
    var n = t[r], i = J(n) ? n.name : n;
    i != null && e.get(i) == null && e.set(i, r);
  }
  return e;
}
function uS(t) {
  var e = wE(t);
  return e.dimNameMap || (e.dimNameMap = kv(t.dimensionsDefine));
}
function lS(t) {
  return t > 30;
}
var Na = J, jr = Q, xE = typeof Int32Array > "u" ? Array : Int32Array, CE = "e\0\0", wg = -1, DE = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], EE = ["_approximateExtent"], Tg, ws, Ra, Oi, Mf, ka, If, fS = (
  /** @class */
  function() {
    function t(e, r) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      sS(e) ? (n = e.dimensions, this._dimOmitted = e.isDimensionOmitted(), this._schema = e) : (i = !0, n = e), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var c = n[f], h = j(c) ? new Js({
          name: c
        }) : c instanceof Js ? c : new Js(c), v = h.name;
        h.type = h.type || "float", h.coordDim || (h.coordDim = v, h.coordDimIndex = 0);
        var d = h.otherDims = h.otherDims || {};
        o.push(v), a[v] = h, l[v] != null && (u = !0), h.createInvertedIndices && (s[v] = []), process.env.NODE_ENV !== "production" && k(i || h.storeDimIndex >= 0), i && (h.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = h.storeDimIndex), d.itemId === 0 && (this._idDimIdx = h.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
        var p = this._dimIdxToName = re();
        M(o, function(g) {
          p.set(a[g].storeDimIndex, g);
        });
      }
    }
    return t.prototype.getDimension = function(e) {
      var r = this._recognizeDimIndex(e);
      if (r == null)
        return e;
      if (r = e, !this._dimOmitted)
        return this.dimensions[r];
      var n = this._dimIdxToName.get(r);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(r);
      if (i)
        return i.name;
    }, t.prototype.getDimensionIndex = function(e) {
      var r = this._recognizeDimIndex(e);
      if (r != null)
        return r;
      if (e == null)
        return -1;
      var n = this._getDimInfo(e);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(e) : -1;
    }, t.prototype._recognizeDimIndex = function(e) {
      if (Ee(e) || e != null && !isNaN(e) && !this._getDimInfo(e) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(e) < 0))
        return +e;
    }, t.prototype._getStoreDimIndex = function(e) {
      var r = this.getDimensionIndex(e);
      if (process.env.NODE_ENV !== "production" && r == null)
        throw new Error("Unknown dimension " + e);
      return r;
    }, t.prototype.getDimensionInfo = function(e) {
      return this._getDimInfo(this.getDimension(e));
    }, t.prototype._initGetDimensionInfo = function(e) {
      var r = this._dimInfos;
      this._getDimInfo = e ? function(n) {
        return r.hasOwnProperty(n) ? r[n] : void 0;
      } : function(n) {
        return r[n];
      };
    }, t.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, t.prototype.mapDimension = function(e, r) {
      var n = this._dimSummary;
      if (r == null)
        return n.encodeFirstDimNotExtra[e];
      var i = n.encode[e];
      return i ? i[r] : null;
    }, t.prototype.mapDimensionsAll = function(e) {
      var r = this._dimSummary, n = r.encode[e];
      return (n || []).slice();
    }, t.prototype.getStore = function() {
      return this._store;
    }, t.prototype.initData = function(e, r, n) {
      var i = this, a;
      if (e instanceof sh && (a = e), !a) {
        var o = this.dimensions, s = Rv(e) || It(e) ? new Q_(e, o.length) : e;
        a = new sh();
        var u = jr(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = pE(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, t.prototype.appendData = function(e) {
      var r = this._store.appendData(e);
      this._doInit(r[0], r[1]);
    }, t.prototype.appendValues = function(e, r) {
      var n = this._store.appendValues(e, r && r.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), r)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = r[u], o && If(this, s);
        }
    }, t.prototype._updateOrdinalMeta = function() {
      for (var e = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
        var i = this._dimInfos[r[n]];
        i.ordinalMeta && e.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, t.prototype._shouldMakeIdFromName = function() {
      var e = this._store.getProvider();
      return this._idDimIdx == null && e.getSource().sourceFormat !== Gr && !e.fillStorage;
    }, t.prototype._doInit = function(e, r) {
      if (!(e >= r)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === Nt;
        if (u && !i.pure)
          for (var l = [], f = e; f < r; f++) {
            var c = i.getItem(f, l);
            if (!this.hasItemOption && tC(c) && (this.hasItemOption = !0), c) {
              var h = c.name;
              a[f] == null && h != null && (a[f] = Cr(h, null));
              var v = c.id;
              o[f] == null && v != null && (o[f] = Cr(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = e; f < r; f++)
            If(this, f);
        Tg(this);
      }
    }, t.prototype.getApproximateExtent = function(e, r) {
      return this._approximateExtent[e] || this._store.getDataExtent(this._getStoreDimIndex(e), r);
    }, t.prototype.setApproximateExtent = function(e, r) {
      r = this.getDimension(r), this._approximateExtent[r] = e.slice();
    }, t.prototype.getCalculationInfo = function(e) {
      return this._calculationInfo[e];
    }, t.prototype.setCalculationInfo = function(e, r) {
      Na(e) ? z(this._calculationInfo, e) : this._calculationInfo[e] = r;
    }, t.prototype.getName = function(e) {
      var r = this.getRawIndex(e), n = this._nameList[r];
      return n == null && this._nameDimIdx != null && (n = Ra(this, this._nameDimIdx, r)), n == null && (n = ""), n;
    }, t.prototype._getCategory = function(e, r) {
      var n = this._store.get(e, r), i = this._store.getOrdinalMeta(e);
      return i ? i.categories[n] : n;
    }, t.prototype.getId = function(e) {
      return ws(this, this.getRawIndex(e));
    }, t.prototype.count = function() {
      return this._store.count();
    }, t.prototype.get = function(e, r) {
      var n = this._store, i = this._dimInfos[e];
      if (i)
        return n.get(i.storeDimIndex, r);
    }, t.prototype.getByRawIndex = function(e, r) {
      var n = this._store, i = this._dimInfos[e];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, r);
    }, t.prototype.getIndices = function() {
      return this._store.getIndices();
    }, t.prototype.getDataExtent = function(e) {
      return this._store.getDataExtent(this._getStoreDimIndex(e), null);
    }, t.prototype.getSum = function(e) {
      return this._store.getSum(this._getStoreDimIndex(e));
    }, t.prototype.getMedian = function(e) {
      return this._store.getMedian(this._getStoreDimIndex(e));
    }, t.prototype.getValues = function(e, r) {
      var n = this, i = this._store;
      return $(e) ? i.getValues(jr(e, function(a) {
        return n._getStoreDimIndex(a);
      }), r) : i.getValues(e);
    }, t.prototype.hasValue = function(e) {
      for (var r = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = r.length; n < i; n++)
        if (isNaN(this._store.get(r[n], e)))
          return !1;
      return !0;
    }, t.prototype.indexOfName = function(e) {
      for (var r = 0, n = this._store.count(); r < n; r++)
        if (this.getName(r) === e)
          return r;
      return -1;
    }, t.prototype.getRawIndex = function(e) {
      return this._store.getRawIndex(e);
    }, t.prototype.indexOfRawIndex = function(e) {
      return this._store.indexOfRawIndex(e);
    }, t.prototype.rawIndexOf = function(e, r) {
      var n = e && this._invertedIndicesMap[e];
      if (process.env.NODE_ENV !== "production" && !n)
        throw new Error("Do not supported yet");
      var i = n && n[r];
      return i == null || isNaN(i) ? wg : i;
    }, t.prototype.each = function(e, r, n) {
      ie(e) && (n = r, r = e, e = []);
      var i = n || this, a = jr(Oi(e), this._getStoreDimIndex, this);
      this._store.each(a, i ? Pe(r, i) : r);
    }, t.prototype.filterSelf = function(e, r, n) {
      ie(e) && (n = r, r = e, e = []);
      var i = n || this, a = jr(Oi(e), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? Pe(r, i) : r), this;
    }, t.prototype.selectRange = function(e) {
      var r = this, n = {}, i = de(e);
      return M(i, function(a) {
        var o = r._getStoreDimIndex(a);
        n[o] = e[a];
      }), this._store = this._store.selectRange(n), this;
    }, t.prototype.mapArray = function(e, r, n) {
      ie(e) && (n = r, r = e, e = []), n = n || this;
      var i = [];
      return this.each(e, function() {
        i.push(r && r.apply(this, arguments));
      }, n), i;
    }, t.prototype.map = function(e, r, n, i) {
      var a = n || i || this, o = jr(Oi(e), this._getStoreDimIndex, this), s = ka(this);
      return s._store = this._store.map(o, a ? Pe(r, a) : r), s;
    }, t.prototype.modify = function(e, r, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && M(Oi(e), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = jr(Oi(e), this._getStoreDimIndex, this);
      this._store.modify(s, o ? Pe(r, o) : r);
    }, t.prototype.downSample = function(e, r, n, i) {
      var a = ka(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(e), r, n, i), a;
    }, t.prototype.minmaxDownSample = function(e, r) {
      var n = ka(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(e), r), n;
    }, t.prototype.lttbDownSample = function(e, r) {
      var n = ka(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(e), r), n;
    }, t.prototype.getRawDataItem = function(e) {
      return this._store.getRawDataItem(e);
    }, t.prototype.getItemModel = function(e) {
      var r = this.hostModel, n = this.getRawDataItem(e);
      return new Be(n, r, r && r.ecModel);
    }, t.prototype.diff = function(e) {
      var r = this;
      return new rE(e ? e.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return ws(e, n);
      }, function(n) {
        return ws(r, n);
      });
    }, t.prototype.getVisual = function(e) {
      var r = this._visual;
      return r && r[e];
    }, t.prototype.setVisual = function(e, r) {
      this._visual = this._visual || {}, Na(e) ? z(this._visual, e) : this._visual[e] = r;
    }, t.prototype.getItemVisual = function(e, r) {
      var n = this._itemVisuals[e], i = n && n[r];
      return i ?? this.getVisual(r);
    }, t.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, t.prototype.ensureUniqueItemVisual = function(e, r) {
      var n = this._itemVisuals, i = n[e];
      i || (i = n[e] = {});
      var a = i[r];
      return a == null && (a = this.getVisual(r), $(a) ? a = a.slice() : Na(a) && (a = z({}, a)), i[r] = a), a;
    }, t.prototype.setItemVisual = function(e, r, n) {
      var i = this._itemVisuals[e] || {};
      this._itemVisuals[e] = i, Na(r) ? z(i, r) : i[r] = n;
    }, t.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, t.prototype.setLayout = function(e, r) {
      Na(e) ? z(this._layout, e) : this._layout[e] = r;
    }, t.prototype.getLayout = function(e) {
      return this._layout[e];
    }, t.prototype.getItemLayout = function(e) {
      return this._itemLayouts[e];
    }, t.prototype.setItemLayout = function(e, r, n) {
      this._itemLayouts[e] = n ? z(this._itemLayouts[e] || {}, r) : r;
    }, t.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, t.prototype.setItemGraphicEl = function(e, r) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      xC(n, this.dataType, e, r), this._graphicEls[e] = r;
    }, t.prototype.getItemGraphicEl = function(e) {
      return this._graphicEls[e];
    }, t.prototype.eachItemGraphicEl = function(e, r) {
      M(this._graphicEls, function(n, i) {
        n && e && e.call(r, n, i);
      });
    }, t.prototype.cloneShallow = function(e) {
      return e || (e = new t(this._schema ? this._schema : jr(this.dimensions, this._getDimInfo, this), this.hostModel)), Mf(e, this), e._store = this._store, e;
    }, t.prototype.wrapMethod = function(e, r) {
      var n = this[e];
      ie(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(e), this[e] = function() {
        var i = n.apply(this, arguments);
        return r.apply(this, [i].concat(Jh(arguments)));
      });
    }, t.internalField = function() {
      Tg = function(e) {
        var r = e._invertedIndicesMap;
        M(r, function(n, i) {
          var a = e._dimInfos[i], o = a.ordinalMeta, s = e._store;
          if (o) {
            n = r[i] = new xE(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = wg;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, Ra = function(e, r, n) {
        return Cr(e._getCategory(r, n), null);
      }, ws = function(e, r) {
        var n = e._idList[r];
        return n == null && e._idDimIdx != null && (n = Ra(e, e._idDimIdx, r)), n == null && (n = CE + r), n;
      }, Oi = function(e) {
        return $(e) || (e = e != null ? [e] : []), e;
      }, ka = function(e) {
        var r = new t(e._schema ? e._schema : jr(e.dimensions, e._getDimInfo, e), e.hostModel);
        return Mf(r, e), r;
      }, Mf = function(e, r) {
        M(DE.concat(r.__wrappedMethods || []), function(n) {
          r.hasOwnProperty(n) && (e[n] = r[n]);
        }), e.__wrappedMethods = r.__wrappedMethods, M(EE, function(n) {
          e[n] = ce(r[n]);
        }), e._calculationInfo = z({}, r._calculationInfo);
      }, If = function(e, r) {
        var n = e._nameList, i = e._idList, a = e._nameDimIdx, o = e._idDimIdx, s = n[r], u = i[r];
        if (s == null && a != null && (n[r] = s = Ra(e, a, r)), u == null && o != null && (i[r] = u = Ra(e, o, r)), u == null && s != null) {
          var l = e._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[r] = u;
        }
      };
    }(), t;
  }()
);
function cS(t, e) {
  Rv(t) || (t = q_(t)), e = e || {};
  var r = e.coordDimensions || [], n = e.dimensionsDefine || t.dimensionsDefine || [], i = re(), a = [], o = AE(t, r, n, e.dimensionsCount), s = e.canOmitUnusedDimensions && lS(o), u = n === t.dimensionsDefine, l = u ? uS(t) : kv(n), f = e.encodeDefine;
  !f && e.encodeDefaulter && (f = e.encodeDefaulter(t, o));
  for (var c = re(f), h = new iS(o), v = 0; v < h.length; v++)
    h[v] = -1;
  function d(D) {
    var C = h[D];
    if (C < 0) {
      var E = n[D], L = J(E) ? E : {
        name: E
      }, A = new Js(), P = L.name;
      P != null && l.get(P) != null && (A.name = A.displayName = P), L.type != null && (A.type = L.type), L.displayName != null && (A.displayName = L.displayName);
      var O = a.length;
      return h[D] = O, A.storeDimIndex = D, a.push(A), A;
    }
    return a[C];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  c.each(function(D, C) {
    var E = St(D).slice();
    if (E.length === 1 && !j(E[0]) && E[0] < 0) {
      c.set(C, !1);
      return;
    }
    var L = c.set(C, []);
    M(E, function(A, P) {
      var O = j(A) ? l.get(A) : A;
      O != null && O < o && (L[P] = O, g(d(O), C, P));
    });
  });
  var p = 0;
  M(r, function(D) {
    var C, E, L, A;
    if (j(D))
      C = D, A = {};
    else {
      A = D, C = A.name;
      var P = A.ordinalMeta;
      A.ordinalMeta = null, A = z({}, A), A.ordinalMeta = P, E = A.dimsDef, L = A.otherDims, A.name = A.coordDim = A.coordDimIndex = A.dimsDef = A.otherDims = null;
    }
    var O = c.get(C);
    if (O !== !1) {
      if (O = St(O), !O.length)
        for (var N = 0; N < (E && E.length || 1); N++) {
          for (; p < o && d(p).coordDim != null; )
            p++;
          p < o && O.push(p++);
        }
      M(O, function(B, R) {
        var F = d(B);
        if (u && A.type != null && (F.type = A.type), g(Ae(F, A), C, R), F.name == null && E) {
          var G = E[R];
          !J(G) && (G = {
            name: G
          }), F.name = F.displayName = G.name, F.defaultTooltip = G.defaultTooltip;
        }
        L && Ae(F.otherDims, L);
      });
    }
  });
  function g(D, C, E) {
    jc.get(C) != null ? D.otherDims[C] = E : (D.coordDim = C, D.coordDimIndex = E, i.set(C, !0));
  }
  var m = e.generateCoord, y = e.generateCoordCount, _ = y != null;
  y = m ? y || 1 : 0;
  var S = m || "value";
  function b(D) {
    D.name == null && (D.name = D.coordDim);
  }
  if (s)
    M(a, function(D) {
      b(D);
    }), a.sort(function(D, C) {
      return D.storeDimIndex - C.storeDimIndex;
    });
  else
    for (var w = 0; w < o; w++) {
      var T = d(w), x = T.coordDim;
      x == null && (T.coordDim = ME(S, i, _), T.coordDimIndex = 0, (!m || y <= 0) && (T.isExtraCoord = !0), y--), b(T), T.type == null && ($_(t, w) === Je.Must || T.isExtraCoord && (T.otherDims.itemName != null || T.otherDims.seriesName != null)) && (T.type = "ordinal");
    }
  return pv(a, function(D) {
    return D.name;
  }, function(D, C) {
    C > 0 && (D.name = D.name + (C - 1));
  }), new oS({
    source: t,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function AE(t, e, r, n) {
  var i = Math.max(t.dimensionsDetectedCount || 1, e.length, r.length, n || 0);
  return M(e, function(a) {
    var o;
    J(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function ME(t, e, r) {
  if (r || e.hasKey(t)) {
    for (var n = 0; e.hasKey(t + n); )
      n++;
    t += n;
  }
  return e.set(t, !0), t;
}
var tu = {}, Lf = {}, Bv = (
  /** @class */
  function() {
    function t() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return t.prototype.create = function(e, r) {
      this._nonSeriesBoxMasterList = n(tu, !0), this._normalMasterList = n(Lf, !1);
      function n(i, a) {
        var o = [];
        return M(i, function(s, u) {
          var l = s.create(e, r);
          o = o.concat(l || []), process.env.NODE_ENV !== "production" && a && M(l, function(f) {
            return k(!f.update);
          });
        }), o;
      }
    }, t.prototype.update = function(e, r) {
      M(this._normalMasterList, function(n) {
        n.update && n.update(e, r);
      });
    }, t.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, t.register = function(e, r) {
      if (e === "matrix" || e === "calendar") {
        tu[e] = r;
        return;
      }
      Lf[e] = r;
    }, t.get = function(e) {
      return Lf[e] || tu[e];
    }, t;
  }()
);
function IE(t) {
  return !!tu[t];
}
var LE = 1, hS = 2;
function PE(t) {
  process.env.NODE_ENV !== "production" && k(!uh.get(t.fullType)), uh.set(t.fullType, {
    getCoord2: void 0
  }).getCoord2 = t.getCoord2;
}
var uh = re();
function vS(t) {
  var e = t.getShallow("coord", !0), r = LE;
  if (e == null) {
    var n = uh.get(t.type);
    n && n.getCoord2 && (r = hS, e = n.getCoord2(t));
  }
  return {
    coord: e,
    from: r
  };
}
var ea = 0, ru = 1, OE = 2;
function NE(t, e) {
  var r = t.getShallow("coordinateSystem"), n = t.getShallow("coordinateSystemUsage", !0), i = n != null, a = ea;
  if (r) {
    var o = t.mainType === "series";
    n == null && (n = o ? "data" : "box"), n === "data" ? (a = ru, o || (process.env.NODE_ENV !== "production" && i && e && _e('coordinateSystemUsage "data" is not supported in non-series components.'), a = ea)) : n === "box" && (a = OE, !o && !IE(r) && (process.env.NODE_ENV !== "production" && i && e && _e('coordinateSystem "' + r + '" cannot be used' + (' as coordinateSystemUsage "box" for "' + t.type + '" yet.')), a = ea));
  }
  return {
    coordSysType: r,
    kind: a
  };
}
function RE(t) {
  var e = t.targetModel, r = t.coordSysType, n = t.coordSysProvider, i = t.isDefaultDataCoordSys, a = t.allowNotFound;
  process.env.NODE_ENV !== "production" && k(!!r);
  var o = NE(e, !0), s = o.kind, u = o.coordSysType;
  if (i && s !== ru && (s = ru, u = r), s === ea || u !== r)
    return ea;
  var l = n(r, e);
  return l ? (s === ru ? (process.env.NODE_ENV !== "production" && k(e.mainType === "series"), e.coordinateSystem = l) : e.boxCoordinateSystem = l, s) : (process.env.NODE_ENV !== "production" && (a || _e(r + " cannot be found for" + (" " + e.type + " (index: " + e.componentIndex + ")."))), ea);
}
var kE = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.coordSysDims = [], this.axisMap = re(), this.categoryAxisMap = re(), this.coordSysName = e;
    }
    return t;
  }()
);
function BE(t) {
  var e = t.get("coordinateSystem"), r = new kE(e), n = VE[e];
  if (n)
    return n(t, r, r.axisMap, r.categoryAxisMap), r;
}
var VE = {
  cartesian2d: function(t, e, r, n) {
    var i = t.getReferringComponents("xAxis", $t).models[0], a = t.getReferringComponents("yAxis", $t).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + oa(t.get("xAxisIndex"), t.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + oa(t.get("xAxisIndex"), t.get("yAxisId"), 0) + '" not found');
    }
    e.coordSysDims = ["x", "y"], r.set("x", i), r.set("y", a), Ni(i) && (n.set("x", i), e.firstCategoryDimIndex = 0), Ni(a) && (n.set("y", a), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1));
  },
  singleAxis: function(t, e, r, n) {
    var i = t.getReferringComponents("singleAxis", $t).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    e.coordSysDims = ["single"], r.set("single", i), Ni(i) && (n.set("single", i), e.firstCategoryDimIndex = 0);
  },
  polar: function(t, e, r, n) {
    var i = t.getReferringComponents("polar", $t).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    e.coordSysDims = ["radius", "angle"], r.set("radius", a), r.set("angle", o), Ni(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), Ni(o) && (n.set("angle", o), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1));
  },
  geo: function(t, e, r, n) {
    e.coordSysDims = ["lng", "lat"];
  },
  parallel: function(t, e, r, n) {
    var i = t.ecModel, a = i.getComponent("parallel", t.get("parallelIndex")), o = e.coordSysDims = a.dimensions.slice();
    M(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      r.set(f, l), Ni(l) && (n.set(f, l), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = u));
    });
  },
  matrix: function(t, e, r, n) {
    var i = t.getReferringComponents("matrix", $t).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("matrix coordinate system should be specified.");
    e.coordSysDims = ["x", "y"];
    var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
    r.set("x", a), r.set("y", o), n.set("x", a), n.set("y", o);
  }
};
function Ni(t) {
  return t.get("type") === "category";
}
function FE(t, e, r) {
  r = r || {};
  var n = r.byIndex, i = r.stackedCoordDimension, a, o, s;
  zE(e) ? a = e : (o = e.schema, a = o.dimensions, s = e.store);
  var u = !!(t && t.get("stack")), l, f, c, h, v = !0;
  function d(S) {
    return S.type !== "ordinal" && S.type !== "time";
  }
  if (M(a, function(S, b) {
    j(S) && (a[b] = S = {
      name: S
    }), d(S) || (v = !1);
  }), M(a, function(S, b) {
    u && !S.isExtraCoord && (!n && !l && S.ordinalMeta && (l = S), !f && d(S) && (!v || S.coordDim !== "x" && S.coordDim !== "angle") && (!i || i === S.coordDim) && (f = S));
  }), f && !n && !l && (n = !0), f) {
    c = "__\0ecstackresult_" + t.id, h = "__\0ecstackedover_" + t.id, l && (l.createInvertedIndices = !0);
    var p = f.coordDim, g = f.type, m = 0;
    M(a, function(S) {
      S.coordDim === p && m++;
    });
    var y = {
      name: c,
      coordDim: p,
      coordDimIndex: m,
      type: g,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, _ = {
      name: h,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: h,
      coordDimIndex: m + 1,
      type: g,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (y.storeDimIndex = s.ensureCalculationDimension(h, g), _.storeDimIndex = s.ensureCalculationDimension(c, g)), o.appendCalculationDimension(y), o.appendCalculationDimension(_)) : (a.push(y), a.push(_));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: h,
    stackResultDimension: c
  };
}
function zE(t) {
  return !sS(t.schema);
}
function da(t, e) {
  return !!e && e === t.getCalculationInfo("stackedDimension");
}
function GE(t, e) {
  return da(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
}
function HE(t, e) {
  var r = t.get("coordinateSystem"), n = Bv.get(r), i;
  return e && e.coordSysDims && (i = Q(e.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = e.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = gE(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function UE(t, e, r) {
  var n, i;
  return r && M(t, function(a, o) {
    var s = a.coordDim, u = r.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), e && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (t[n].otherDims.itemName = 0), n;
}
function Vv(t, e, r) {
  r = r || {};
  var n = e.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === Nt;
  var o = BE(e), s = HE(e, o), u = r.useEncodeDefaulter, l = ie(u) ? u : u ? Xe(iE, s, e) : null, f = {
    coordDimensions: s,
    generateCoord: r.generateCoord,
    encodeDefine: e.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, c = cS(i, f), h = UE(c.dimensions, r.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(c), d = FE(e, {
    schema: c,
    store: v
  }), p = new fS(c, e);
  p.setCalculationInfo(d);
  var g = h != null && WE(i) ? function(m, y, _, S) {
    return S === h ? _ : this.defaultDimValueGetter(m, y, _, S);
  } : null;
  return p.hasItemOption = !1, p.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : v,
    null,
    g
  ), p;
}
function WE(t) {
  if (t.sourceFormat === Nt) {
    var e = YE(t.data || []);
    return !$(Xo(e));
  }
}
function YE(t) {
  for (var e = 0; e < t.length && t[e] == null; )
    e++;
  return t[e];
}
var XE = Math.round(Math.random() * 10);
function Al(t) {
  return [t || "", XE++].join("_");
}
function $E(t) {
  var e = {};
  t.registerSubTypeDefaulter = function(r, n) {
    var i = br(r);
    e[i.main] = n;
  }, t.determineSubType = function(r, n) {
    var i = n.type;
    if (!i) {
      var a = br(r).main;
      t.hasSubTypes(r) && e[a] && (i = e[a](n));
    }
    return i;
  };
}
function ZE(t, e) {
  t.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = r(o), f = l.graph, c = l.noEntryList, h = {};
    for (M(a, function(y) {
      h[y] = !0;
    }); c.length; ) {
      var v = c.pop(), d = f[v], p = !!h[v];
      p && (s.call(u, v, d.originalDeps.slice()), delete h[v]), M(d.successor, p ? m : g);
    }
    M(h, function() {
      var y = "";
      throw process.env.NODE_ENV !== "production" && (y = Tu("Circular dependency may exists: ", h, a, o)), new Error(y);
    });
    function g(y) {
      f[y].entryCount--, f[y].entryCount === 0 && c.push(y);
    }
    function m(y) {
      h[y] = !0, g(y);
    }
  };
  function r(a) {
    var o = {}, s = [];
    return M(a, function(u) {
      var l = n(o, u), f = l.originalDeps = e(u), c = i(f, a);
      l.entryCount = c.length, l.entryCount === 0 && s.push(u), M(c, function(h) {
        xe(l.predecessor, h) < 0 && l.predecessor.push(h);
        var v = n(o, h);
        xe(v.successor, h) < 0 && v.successor.push(u);
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
    return M(a, function(u) {
      xe(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function dS(t, e) {
  return De(De({}, t, !0), e, !0);
}
var qE = Math.log(2);
function lh(t, e, r, n, i, a) {
  var o = n + "-" + i, s = t.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (e === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / qE);
    return t[r][u];
  }
  for (var l = n | 1 << r, f = r + 1; n & 1 << f; )
    f++;
  for (var c = 0, h = 0, v = 0; h < s; h++) {
    var d = 1 << h;
    d & i || (c += (v % 2 ? -1 : 1) * t[r][h] * lh(t, e - 1, f, l, i | d, a), v++);
  }
  return a[o] = c, c;
}
function xg(t, e) {
  var r = [
    [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
    [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
    [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
    [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
    [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
    [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
    [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
    [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
  ], n = {}, i = lh(r, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * lh(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * e[o];
    return function(u, l, f) {
      var c = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / c, u[1] = (l * a[3] + f * a[4] + a[5]) / c;
    };
  }
}
var Ou = "___zrEVENTSAVED", Pf = [];
function KE(t, e, r, n, i) {
  return fh(Pf, e, n, i, !0) && fh(t, r, Pf[0], Pf[1]);
}
function jE(t, e) {
  t && r(t), e && r(e);
  function r(n) {
    var i = n[Ou];
    i && (i.clearMarkers && i.clearMarkers(), delete n[Ou]);
  }
}
function fh(t, e, r, n, i) {
  if (e.getBoundingClientRect && le.domSupported && !pS(e)) {
    var a = e[Ou] || (e[Ou] = {}), o = QE(e, a), s = JE(o, a, i);
    if (s)
      return s(t, r, n), !0;
  }
  return !1;
}
function QE(t, e) {
  var r = e.markers;
  if (r)
    return r;
  r = e.markers = [];
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
    ].join("!important;"), t.appendChild(o), r.push(o);
  }
  return e.clearMarkers = function() {
    M(r, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, r;
}
function JE(t, e, r) {
  for (var n = r ? "invTrans" : "trans", i = e[n], a = e.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = t[l].getBoundingClientRect(), c = 2 * l, h = f.left, v = f.top;
    o.push(h, v), u = u && a && h === a[c] && v === a[c + 1], s.push(t[l].offsetLeft, t[l].offsetTop);
  }
  return u && i ? i : (e.srcCoords = o, e[n] = r ? xg(s, o) : xg(o, s));
}
function pS(t) {
  return t.nodeName.toUpperCase() === "CANVAS";
}
var eA = /([&<>"'])/g, tA = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function mt(t) {
  return t == null ? "" : (t + "").replace(eA, function(e, r) {
    return tA[r];
  });
}
const rA = {
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
}, nA = {
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
var Nu = "ZH", Fv = "EN", ta = Fv, nu = {}, zv = {}, gS = le.domSupported ? function() {
  var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage || ta).toUpperCase();
  return t.indexOf(Nu) > -1 ? Nu : ta;
}() : ta;
function mS(t, e) {
  t = t.toUpperCase(), zv[t] = new Be(e), nu[t] = e;
}
function iA(t) {
  if (j(t)) {
    var e = nu[t.toUpperCase()] || {};
    return t === Nu || t === Fv ? ce(e) : De(ce(e), ce(nu[ta]), !1);
  } else
    return De(ce(t), ce(nu[ta]), !1);
}
function aA(t) {
  return zv[t];
}
function oA() {
  return zv[ta];
}
mS(Fv, rA);
mS(Nu, nA);
var sA = null;
function Ml() {
  return sA;
}
function yS(t, e) {
  e.breakOption;
  var r = e.breakParsed;
  return r;
}
function Gv(t) {
  var e = t.brk;
  return e ? e.breaks : [];
}
function pi(t) {
  var e = t.brk;
  return e ? e.hasBreaks() : !1;
}
var Hv = 1e3, Uv = Hv * 60, vo = Uv * 60, Zt = vo * 24, Cg = Zt * 365, uA = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, iu = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, lA = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", Ts = "{yyyy}-{MM}-{dd}", Dg = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: Ts,
  hour: Ts + " " + iu.hour,
  minute: Ts + " " + iu.minute,
  second: Ts + " " + iu.second,
  millisecond: lA
}, ci = ["year", "month", "day", "hour", "minute", "second", "millisecond"], fA = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function cA(t) {
  return !j(t) && !ie(t) ? hA(t) : t;
}
function hA(t) {
  t = t || {};
  var e = {}, r = !0;
  return M(ci, function(n) {
    r && (r = t[n] == null);
  }), M(ci, function(n, i) {
    var a = t[n];
    e[n] = {};
    for (var o = null, s = i; s >= 0; s--) {
      var u = ci[s], l = J(a) && !$(a) ? a[u] : a, f = void 0;
      $(l) ? (f = l.slice(), o = f[0] || "") : j(l) ? (o = l, f = [o]) : (o == null ? o = iu[n] : uA[u].test(o) || (o = e[u][u][0] + " " + o), f = [o], r && (f[1] = "{primary|" + o + "}")), e[n][u] = f;
    }
  }), e;
}
function Qr(t, e) {
  return t += "", "0000".substr(0, e - t.length) + t;
}
function po(t) {
  switch (t) {
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
      return t;
  }
}
function vA(t) {
  return t === po(t);
}
function dA(t) {
  switch (t) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function Il(t, e, r, n) {
  var i = ba(t), a = i[_S(r)](), o = i[Wv(r)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[Yv(r)](), l = i["get" + (r ? "UTC" : "") + "Day"](), f = i[Xv(r)](), c = (f - 1) % 12 + 1, h = i[$v(r)](), v = i[Zv(r)](), d = i[qv(r)](), p = f >= 12 ? "pm" : "am", g = p.toUpperCase(), m = n instanceof Be ? n : aA(n || gS) || oA(), y = m.getModel("time"), _ = y.get("month"), S = y.get("monthAbbr"), b = y.get("dayOfWeek"), w = y.get("dayOfWeekAbbr");
  return (e || "").replace(/{a}/g, p + "").replace(/{A}/g, g + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Qr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Qr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Qr(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, w[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Qr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Qr(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, Qr(h, 2)).replace(/{m}/g, h + "").replace(/{ss}/g, Qr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Qr(d, 3)).replace(/{S}/g, d + "");
}
function pA(t, e, r, n, i) {
  var a = null;
  if (j(r))
    a = r;
  else if (ie(r)) {
    var o = {
      time: t.time,
      level: t.time ? t.time.level : 0
    }, s = Ml();
    s && s.makeAxisLabelFormatterParamBreak(o, t.break), a = r(t.value, e, o);
  } else {
    var u = t.time;
    if (u) {
      var l = r[u.lowerTimeUnit][u.upperTimeUnit];
      a = l[Math.min(u.level, l.length - 1)] || "";
    } else {
      var f = au(t.value, i);
      a = r[f][f][0];
    }
  }
  return Il(new Date(t.value), a, i, n);
}
function au(t, e) {
  var r = ba(t), n = r[Wv(e)]() + 1, i = r[Yv(e)](), a = r[Xv(e)](), o = r[$v(e)](), s = r[Zv(e)](), u = r[qv(e)](), l = u === 0, f = l && s === 0, c = f && o === 0, h = c && a === 0, v = h && i === 1, d = v && n === 1;
  return d ? "year" : v ? "month" : h ? "day" : c ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function ch(t, e, r) {
  switch (e) {
    case "year":
      t[SS(r)](0);
    case "month":
      t[bS(r)](1);
    case "day":
      t[wS(r)](0);
    case "hour":
      t[TS(r)](0);
    case "minute":
      t[xS(r)](0);
    case "second":
      t[CS(r)](0);
  }
  return t;
}
function _S(t) {
  return t ? "getUTCFullYear" : "getFullYear";
}
function Wv(t) {
  return t ? "getUTCMonth" : "getMonth";
}
function Yv(t) {
  return t ? "getUTCDate" : "getDate";
}
function Xv(t) {
  return t ? "getUTCHours" : "getHours";
}
function $v(t) {
  return t ? "getUTCMinutes" : "getMinutes";
}
function Zv(t) {
  return t ? "getUTCSeconds" : "getSeconds";
}
function qv(t) {
  return t ? "getUTCMilliseconds" : "getMilliseconds";
}
function gA(t) {
  return t ? "setUTCFullYear" : "setFullYear";
}
function SS(t) {
  return t ? "setUTCMonth" : "setMonth";
}
function bS(t) {
  return t ? "setUTCDate" : "setDate";
}
function wS(t) {
  return t ? "setUTCHours" : "setHours";
}
function TS(t) {
  return t ? "setUTCMinutes" : "setMinutes";
}
function xS(t) {
  return t ? "setUTCSeconds" : "setSeconds";
}
function CS(t) {
  return t ? "setUTCMilliseconds" : "setMilliseconds";
}
function DS(t) {
  if (!t_(t))
    return j(t) ? t : "-";
  var e = (t + "").split(".");
  return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "");
}
function ES(t, e) {
  return t = (t || "").toLowerCase().replace(/-(.)/g, function(r, n) {
    return n.toUpperCase();
  }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
}
var Ll = ev;
function hh(t, e, r) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Sr(f) ? f : "-";
  }
  function a(f) {
    return Ot(f);
  }
  var o = e === "time", s = t instanceof Date;
  if (o || s) {
    var u = o ? ba(t) : t;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return Il(u, n, r);
  }
  if (e === "ordinal")
    return cu(t) ? i(t) : Ee(t) && a(t) ? t + "" : "-";
  var l = wu(t);
  return a(l) ? DS(l) : cu(t) ? i(t) : typeof t == "boolean" ? t + "" : "-";
}
var Eg = ["a", "b", "c", "d", "e", "f", "g"], Of = function(t, e) {
  return "{" + t + (e ?? "") + "}";
};
function AS(t, e, r) {
  $(e) || (e = [e]);
  var n = e.length;
  if (!n)
    return "";
  for (var i = e[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Eg[a];
    t = t.replace(Of(o), Of(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = e[s][i[u]];
      t = t.replace(Of(Eg[u], s), r ? mt(l) : l);
    }
  return t;
}
function mA(t, e) {
  var r = j(t) ? {
    color: t,
    extraCssText: e
  } : t || {}, n = r.color, i = r.type;
  e = r.extraCssText;
  var a = r.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + mt(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + mt(n) + ";" + (e || "") + '"></span>';
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
function gi(t, e) {
  return e = e || "transparent", j(t) ? t : J(t) && t.colorStops && (t.colorStops[0] || {}).color || e;
}
function Ag(t, e) {
  if (e === "_blank" || e === "blank") {
    var r = window.open();
    r.opener = null, r.location.href = t;
  } else
    window.open(t, e);
}
var ou = M, yA = ["left", "right", "top", "bottom", "width", "height"], xs = [["width", "left", "right"], ["height", "top", "bottom"]];
function Kv(t, e, r, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  e.eachChild(function(u, l) {
    var f = u.getBoundingRect(), c = e.childAt(l + 1), h = c && c.getBoundingRect(), v, d;
    if (t === "horizontal") {
      var p = f.width + (h ? -h.x + f.x : 0);
      v = a + p, v > n || u.newline ? (a = 0, v = p, o += s + r, s = f.height) : s = Math.max(s, f.height);
    } else {
      var g = f.height + (h ? -h.y + f.y : 0);
      d = o + g, d > i || u.newline ? (a += s + r, o = 0, d = g, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), t === "horizontal" ? a = v + r : o = d + r);
  });
}
var go = Kv;
Xe(Kv, "vertical");
Xe(Kv, "horizontal");
function _A(t, e) {
  return {
    left: t.getShallow("left", e),
    top: t.getShallow("top", e),
    right: t.getShallow("right", e),
    bottom: t.getShallow("bottom", e),
    width: t.getShallow("width", e),
    height: t.getShallow("height", e)
  };
}
function SA(t, e) {
  var r = Pl(t, e, {
    enableLayoutOnlyByCenter: !0
  }), n = t.getBoxLayoutParams(), i, a;
  if (r.type === Ja.point)
    a = r.refPoint, i = bn(n, {
      width: e.getWidth(),
      height: e.getHeight()
    });
  else {
    var o = t.get("center"), s = $(o) ? o : [o, o];
    i = bn(n, r.refContainer), a = r.boxCoordFrom === hS ? r.refPoint : [ke(s[0], i.width) + i.x, ke(s[1], i.height) + i.y];
  }
  return {
    viewRect: i,
    center: a
  };
}
function bA(t, e) {
  var r = SA(t, e), n = r.viewRect, i = r.center, a = t.get("radius");
  $(a) || (a = [0, a]);
  var o = ke(n.width, e.getWidth()), s = ke(n.height, e.getHeight()), u = Math.min(o, s), l = ke(a[0], u / 2), f = ke(a[1], u / 2);
  return {
    cx: i[0],
    cy: i[1],
    r0: l,
    r: f,
    viewRect: n
  };
}
function bn(t, e, r) {
  r = Ll(r || 0);
  var n = e.width, i = e.height, a = ke(t.left, n), o = ke(t.top, i), s = ke(t.right, n), u = ke(t.bottom, i), l = ke(t.width, n), f = ke(t.height, i), c = r[2] + r[0], h = r[1] + r[3], v = t.aspect;
  switch (isNaN(l) && (l = n - s - h - a), isNaN(f) && (f = i - u - c - o), v != null && (isNaN(l) && isNaN(f) && (v > n / i ? l = n * 0.8 : f = i * 0.8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(a) && (a = n - s - l - h), isNaN(o) && (o = i - u - f - c), t.left || t.right) {
    case "center":
      a = n / 2 - l / 2 - r[3];
      break;
    case "right":
      a = n - l - h;
      break;
  }
  switch (t.top || t.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - r[0];
      break;
    case "bottom":
      o = i - f - c;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = n - h - a - (s || 0)), isNaN(f) && (f = i - c - o - (u || 0));
  var d = new ae((e.x || 0) + a + r[3], (e.y || 0) + o + r[0], l, f);
  return d.margin = r, d;
}
var Ja = {
  rect: 1,
  point: 2
};
function Pl(t, e, r) {
  var n, i, a, o = t.boxCoordinateSystem, s;
  if (o) {
    var u = vS(t), l = u.coord, f = u.from;
    if (o.dataToLayout) {
      a = Ja.rect, s = f;
      var c = o.dataToLayout(l);
      n = c.contentRect || c.rect;
    } else r && r.enableLayoutOnlyByCenter && o.dataToPoint ? (a = Ja.point, s = f, i = o.dataToPoint(l)) : process.env.NODE_ENV !== "production" && _e(t.type + "[" + t.componentIndex + "]" + (" layout based on " + o.type + " is not supported."));
  }
  return a == null && (a = Ja.rect), a === Ja.rect && (n || (n = {
    x: 0,
    y: 0,
    width: e.getWidth(),
    height: e.getHeight()
  }), i = [n.x + n.width / 2, n.y + n.height / 2]), {
    type: a,
    refContainer: n,
    refPoint: i,
    boxCoordFrom: s
  };
}
function Mo(t) {
  var e = t.layoutMode || t.constructor.layoutMode;
  return J(e) ? e : e ? {
    type: e
  } : null;
}
function wn(t, e, r) {
  var n = r && r.ignoreSize;
  !$(n) && (n = [n, n]);
  var i = o(xs[0], 0), a = o(xs[1], 1);
  u(xs[0], t, i), u(xs[1], t, a);
  function o(l, f) {
    var c = {}, h = 0, v = {}, d = 0, p = 2;
    if (ou(l, function(y) {
      v[y] = t[y];
    }), ou(l, function(y) {
      _t(e, y) && (c[y] = v[y] = e[y]), s(c, y) && h++, s(v, y) && d++;
    }), n[f])
      return s(e, l[1]) ? v[l[2]] = null : s(e, l[2]) && (v[l[1]] = null), v;
    if (d === p || !h)
      return v;
    if (h >= p)
      return c;
    for (var g = 0; g < l.length; g++) {
      var m = l[g];
      if (!_t(c, m) && _t(t, m)) {
        c[m] = t[m];
        break;
      }
    }
    return c;
  }
  function s(l, f) {
    return l[f] != null && l[f] !== "auto";
  }
  function u(l, f, c) {
    ou(l, function(h) {
      f[h] = c[h];
    });
  }
}
function jo(t) {
  return wA({}, t);
}
function wA(t, e) {
  return e && t && ou(yA, function(r) {
    _t(e, r) && (t[r] = e[r]);
  }), t;
}
var TA = Me(), be = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r, n, i) {
      var a = t.call(this, r, n, i) || this;
      return a.uid = Al("ec_cpt_model"), a;
    }
    return e.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i);
    }, e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Mo(this), a = i ? jo(r) : {}, o = n.getTheme();
      De(r, o.get(this.mainType)), De(r, this.getDefaultOption()), i && wn(r, a, i);
    }, e.prototype.mergeOption = function(r, n) {
      De(this.option, r, !0);
      var i = Mo(this);
      i && wn(this.option, r, i);
    }, e.prototype.optionUpdated = function(r, n) {
    }, e.prototype.getDefaultOption = function() {
      var r = this.constructor;
      if (!aT(r))
        return r.defaultOption;
      var n = TA(this);
      if (!n.defaultOption) {
        for (var i = [], a = r; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, u = i.length - 1; u >= 0; u--)
          s = De(s, i[u], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, e.prototype.getReferringComponents = function(r, n) {
      var i = r + "Index", a = r + "Id";
      return $o(this.ecModel, r, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, e.prototype.getBoxLayoutParams = function() {
      return _A(this, !1);
    }, e.prototype.getZLevelKey = function() {
      return "";
    }, e.prototype.setZLevel = function(r) {
      this.option.zlevel = r;
    }, e.protoInitialize = function() {
      var r = e.prototype;
      r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0;
    }(), e;
  }(Be)
);
w0(be, Be);
fl(be);
$E(be);
ZE(be, xA);
function xA(t) {
  var e = [];
  return M(be.getClassesByMainType(t), function(r) {
    e = e.concat(r.dependencies || r.prototype.dependencies || []);
  }), e = Q(e, function(r) {
    return br(r).main;
  }), t !== "dataset" && xe(e, "dataset") <= 0 && e.unshift("dataset"), e;
}
var Mg = Me();
Me();
var jv = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getColorFromPalette = function(e, r, n) {
      var i = St(this.get("color", !0)), a = this.get("colorLayer", !0);
      return DA(this, Mg, i, a, e, r, n);
    }, t.prototype.clearColorPalette = function() {
      EA(this, Mg);
    }, t;
  }()
);
function CA(t, e) {
  for (var r = t.length, n = 0; n < r; n++)
    if (t[n].length > e)
      return t[n];
  return t[r - 1];
}
function DA(t, e, r, n, i, a, o) {
  a = a || t;
  var s = e(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? r : CA(n, o);
  if (f = f || r, !(!f || !f.length)) {
    var c = f[u];
    return i && (l[i] = c), s.paletteIdx = (u + 1) % f.length, c;
  }
}
function EA(t, e) {
  e(t).paletteIdx = 0, e(t).paletteNameMap = {};
}
var AA = /\{@(.+?)\}/g, MA = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getDataParams = function(e, r) {
      var n = this.getData(r), i = this.getRawValue(e, r), a = n.getRawIndex(e), o = n.getName(e), s = n.getRawDataItem(e), u = n.getItemVisual(e, "style"), l = u && u[n.getItemVisual(e, "drawType") || "fill"], f = u && u.stroke, c = this.mainType, h = c === "series", v = n.userOutput && n.userOutput.get();
      return {
        componentType: c,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: h ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: h ? this.id : null,
        seriesName: h ? this.name : null,
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
    }, t.prototype.getFormattedLabel = function(e, r, n, i, a, o) {
      r = r || "normal";
      var s = this.getData(n), u = this.getDataParams(e, n);
      if (o && (u.value = o.interpolatedValue), i != null && $(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(e);
        a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"]);
      }
      if (ie(a))
        return u.status = r, u.dimensionIndex = i, a(u);
      if (j(a)) {
        var f = AS(a, u);
        return f.replace(AA, function(c, h) {
          var v = h.length, d = h;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && _e("Invalide label formatter: @" + h + ", only support @[0], @[1], @[2], ..."));
          var p = va(s, e, d);
          if (o && $(o.interpolatedValue)) {
            var g = s.getDimensionIndex(d);
            g >= 0 && (p = o.interpolatedValue[g]);
          }
          return p != null ? p + "" : "";
        });
      }
    }, t.prototype.getRawValue = function(e, r) {
      return va(this.getData(r), e);
    }, t.prototype.formatTooltip = function(e, r, n) {
    }, t;
  }()
);
function Ig(t) {
  var e, r;
  return J(t) ? t.type ? r = t : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + Tu(t)) : e = t, {
    text: e,
    // markers: markers || markersExisting,
    frag: r
  };
}
function mo(t) {
  return new IA(t);
}
var IA = (
  /** @class */
  function() {
    function t(e) {
      e = e || {}, this._reset = e.reset, this._plan = e.plan, this._count = e.count, this._onDirty = e.onDirty, this._dirty = !0;
    }
    return t.prototype.perform = function(e) {
      var r = this._upstream, n = e && e.skip;
      if (this._dirty && r) {
        var i = this.context;
        i.data = i.outputData = r.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(e && e.modBy), l = e && e.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var c;
      (this._dirty || a === "reset") && (this._dirty = !1, c = this._doReset(n)), this._modBy = u, this._modDataCount = l;
      var h = e && e.step;
      if (r ? (process.env.NODE_ENV !== "production" && k(r._outputDueEnd != null), this._dueEnd = r._outputDueEnd) : (process.env.NODE_ENV !== "production" && k(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(h != null ? this._dueIndex + h : 1 / 0, this._dueEnd);
        if (!n && (c || v < d)) {
          var p = this._progress;
          if ($(p))
            for (var g = 0; g < p.length; g++)
              this._doProgress(p[g], v, d, u, l);
          else
            this._doProgress(p, v, d, u, l);
        }
        this._dueIndex = d;
        var m = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && k(m >= this._outputDueEnd), this._outputDueEnd = m;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, t.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, t.prototype._doProgress = function(e, r, n, i, a) {
      Lg.reset(r, n, i, a), this._callingProgress = e, this._callingProgress({
        start: r,
        end: n,
        count: n - r,
        next: Lg.next
      }, this.context);
    }, t.prototype._doReset = function(e) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var r, n;
      !e && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), $(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, t.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, t.prototype.pipe = function(e) {
      process.env.NODE_ENV !== "production" && k(e && !e._disposed && e !== this), (this._downstream !== e || this._dirty) && (this._downstream = e, e._upstream = this, e.dirty());
    }, t.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, t.prototype.getUpstream = function() {
      return this._upstream;
    }, t.prototype.getDownstream = function() {
      return this._downstream;
    }, t.prototype.setOutputEnd = function(e) {
      this._outputDueEnd = this._settedOutputEnd = e;
    }, t;
  }()
), Lg = /* @__PURE__ */ function() {
  var t, e, r, n, i, a = {
    reset: function(u, l, f, c) {
      e = u, t = l, r = f, n = c, i = Math.ceil(n / r), a.next = r > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return e < t ? e++ : null;
  }
  function s() {
    var u = e % i * r + Math.ceil(e / i), l = e >= t ? null : u < n ? u : e;
    return e++, l;
  }
}(), LA = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getRawData = function() {
      throw new Error("not supported");
    }, t.prototype.getRawDataItem = function(e) {
      throw new Error("not supported");
    }, t.prototype.cloneRawData = function() {
    }, t.prototype.getDimensionInfo = function(e) {
    }, t.prototype.cloneAllDimensionInfo = function() {
    }, t.prototype.count = function() {
    }, t.prototype.retrieveValue = function(e, r) {
    }, t.prototype.retrieveValueFromItem = function(e, r) {
    }, t.prototype.convertValue = function(e, r) {
      return eu(e, r);
    }, t;
  }()
);
function PA(t, e) {
  var r = new LA(), n = t.data, i = r.sourceFormat = t.sourceFormat, a = t.startIndex, o = "";
  t.seriesLayoutBy !== Dr && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), At(o));
  var s = [], u = {}, l = t.dimensionsDefine;
  if (l)
    M(l, function(p, g) {
      var m = p.name, y = {
        index: g,
        name: m,
        displayName: p.displayName
      };
      if (s.push(y), m != null) {
        var _ = "";
        _t(u, m) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + m + '" duplicated.'), At(_)), u[m] = y;
      }
    });
  else
    for (var f = 0; f < t.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var c = J_(i, Dr);
  e.__isBuiltIn && (r.getRawDataItem = function(p) {
    return c(n, a, s, p);
  }, r.getRawData = Pe(OA, null, t)), r.cloneRawData = Pe(NA, null, t);
  var h = eS(i, Dr);
  r.count = Pe(h, null, n, a, s);
  var v = tS(i);
  r.retrieveValue = function(p, g) {
    var m = c(n, a, s, p);
    return d(m, g);
  };
  var d = r.retrieveValueFromItem = function(p, g) {
    if (p != null) {
      var m = s[g];
      if (m)
        return v(p, g, m.name);
    }
  };
  return r.getDimensionInfo = Pe(RA, null, s, u), r.cloneAllDimensionInfo = Pe(kA, null, s), r;
}
function OA(t) {
  var e = t.sourceFormat;
  if (!Qv(e)) {
    var r = "";
    process.env.NODE_ENV !== "production" && (r = "`getRawData` is not supported in source format " + e), At(r);
  }
  return t.data;
}
function NA(t) {
  var e = t.sourceFormat, r = t.data;
  if (!Qv(e)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + e), At(n);
  }
  if (e === vt) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(r[a].slice());
    return i;
  } else if (e === tr) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(z({}, r[a]));
    return i;
  }
}
function RA(t, e, r) {
  if (r != null) {
    if (Ee(r) || !isNaN(r) && !_t(e, r))
      return t[r];
    if (_t(e, r))
      return e[r];
  }
}
function kA(t) {
  return ce(t);
}
var MS = re();
function BA(t) {
  t = ce(t);
  var e = t.type, r = "";
  e || (process.env.NODE_ENV !== "production" && (r = "Must have a `type` when `registerTransform`."), At(r));
  var n = e.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (r = 'Name must include namespace like "ns:regression".'), At(r));
  var i = !1;
  n[0] === "echarts" && (e = n[1], i = !0), t.__isBuiltIn = i, MS.set(e, t);
}
function VA(t, e, r) {
  var n = St(t), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), At(a));
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    e = FA(u, e, r, i === 1 ? null : o), o !== s - 1 && (e.length = Math.max(e.length, 1));
  }
  return e;
}
function FA(t, e, r, n) {
  var i = "";
  e.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), At(i)), J(t) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof t + "."), At(i));
  var a = t.type, o = MS.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), At(i));
  var s = Q(e, function(f) {
    return PA(f, o);
  }), u = St(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: ce(t.config)
  }));
  if (process.env.NODE_ENV !== "production" && t.print) {
    var l = Q(u, function(f) {
      var c = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + r.datasetIndex + c + " ===", "- transform result data:", Tu(f.data), "- transform result dimensions:", Tu(f.dimensions)].join(`
`);
    }).join(`
`);
    n_(l);
  }
  return Q(u, function(f, c) {
    var h = "";
    J(f) || (process.env.NODE_ENV !== "production" && (h = "A transform should not return some empty results."), At(h)), f.data || (process.env.NODE_ENV !== "production" && (h = "Transform result data should be not be null or undefined"), At(h));
    var v = K_(f.data);
    Qv(v) || (process.env.NODE_ENV !== "production" && (h = "Transform result data should be array rows or object rows."), At(h));
    var d, p = e[0];
    if (p && c === 0 && !f.dimensions) {
      var g = p.startIndex;
      g && (f.data = p.data.slice(0, g).concat(f.data)), d = {
        seriesLayoutBy: Dr,
        sourceHeader: g,
        dimensions: p.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Dr,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return oh(f.data, d, null);
  });
}
function Qv(t) {
  return t === vt || t === tr;
}
var zA = (
  /** @class */
  function() {
    function t(e) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = e;
    }
    return t.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, t.prototype._setLocalSource = function(e, r) {
      this._sourceList = e, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, t.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, t.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, t.prototype._createSource = function() {
      this._setLocalSource([], []);
      var e = this._sourceHost, r = this._getUpstreamSourceManagers(), n = !!r.length, i, a;
      if (Ba(e)) {
        var o = e, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = r[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = bt(s) ? Gr : Nt, a = [];
        var c = this._getSourceMetaRawOption() || {}, h = l && l.metaRawOption || {}, v = K(c.seriesLayoutBy, h.seriesLayoutBy) || null, d = K(c.sourceHeader, h.sourceHeader), p = K(c.dimensions, h.dimensions), g = v !== h.seriesLayoutBy || !!d != !!h.sourceHeader || p;
        i = g ? [oh(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: p
        }, u)] : [];
      } else {
        var m = e;
        if (n) {
          var y = this._applyTransform(r);
          i = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = m.get("source", !0);
          i = [oh(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && k(i && a), this._setLocalSource(i, a);
    }, t.prototype._applyTransform = function(e) {
      var r = this._sourceHost, n = r.get("transform", !0), i = r.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && k(i != null || n != null), i != null) {
        var a = "";
        e.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), Pg(a));
      }
      var o, s = [], u = [];
      return M(e, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), c = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (c = "Can not retrieve result by `fromTransformResult`: " + i), Pg(c)), s.push(f), u.push(l._getVersionSign());
      }), n ? o = VA(n, s, {
        datasetIndex: r.componentIndex
      }) : i != null && (o = [sE(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, t.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var e = this._getUpstreamSourceManagers(), r = 0; r < e.length; r++) {
        var n = e[r];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[r] !== n._getVersionSign()
        )
          return !0;
      }
    }, t.prototype.getSource = function(e) {
      e = e || 0;
      var r = this._sourceList[e];
      if (!r) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(e);
      }
      return r;
    }, t.prototype.getSharedDataStore = function(e) {
      process.env.NODE_ENV !== "production" && k(Ba(this._sourceHost), "Can only call getDataStore on series source manager.");
      var r = e.makeStoreSchema();
      return this._innerGetDataStore(r.dimensions, e.source, r.hash);
    }, t.prototype._innerGetDataStore = function(e, r, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        Ba(this._sourceHost) && u ? s = u._innerGetDataStore(e, r, n) : (s = new sh(), s.initData(new Q_(r, e.length), e)), o[n] = s;
      }
      return s;
    }, t.prototype._getUpstreamSourceManagers = function() {
      var e = this._sourceHost;
      if (Ba(e)) {
        var r = Nv(e);
        return r ? [r.getSourceManager()] : [];
      } else
        return Q(oE(e), function(n) {
          return n.getSourceManager();
        });
    }, t.prototype._getSourceMetaRawOption = function() {
      var e = this._sourceHost, r, n, i;
      if (Ba(e))
        r = e.get("seriesLayoutBy", !0), n = e.get("sourceHeader", !0), i = e.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = e;
        r = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: r,
        sourceHeader: n,
        dimensions: i
      };
    }, t;
  }()
);
function Ba(t) {
  return t.mainType === "series";
}
function Pg(t) {
  throw new Error(t);
}
var ee = {
  color: {},
  darkColor: {},
  size: {}
}, Ve = ee.color = {
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
z(Ve, {
  primary: Ve.neutral80,
  secondary: Ve.neutral70,
  tertiary: Ve.neutral60,
  quaternary: Ve.neutral50,
  disabled: Ve.neutral20,
  border: Ve.neutral30,
  borderTint: Ve.neutral20,
  borderShade: Ve.neutral40,
  background: Ve.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: Ve.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: Ve.neutral70,
  axisLineTint: Ve.neutral40,
  axisTick: Ve.neutral70,
  axisTickMinor: Ve.neutral60,
  axisLabel: Ve.neutral70,
  axisSplitLine: Ve.neutral15,
  axisMinorSplitLine: Ve.neutral05
});
for (var qn in Ve)
  if (Ve.hasOwnProperty(qn)) {
    var Og = Ve[qn];
    qn === "theme" ? ee.darkColor.theme = Ve.theme.slice() : qn === "highlight" ? ee.darkColor.highlight = "rgba(255,231,130,0.4)" : qn.indexOf("accent") === 0 ? ee.darkColor[qn] = Rc(Og, null, function(t) {
      return t * 0.5;
    }, function(t) {
      return Math.min(1, 1.3 - t);
    }) : ee.darkColor[qn] = Rc(Og, null, function(t) {
      return t * 0.9;
    }, function(t) {
      return 1 - Math.pow(t, 1.5);
    });
  }
ee.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var GA = "line-height:1";
function IS(t) {
  var e = t.lineHeight;
  return e == null ? GA : "line-height:" + mt(e + "") + "px";
}
function LS(t, e) {
  var r = t.color || ee.color.tertiary, n = t.fontSize || 12, i = t.fontWeight || "400", a = t.color || ee.color.secondary, o = t.fontSize || 14, s = t.fontWeight || "900";
  return e === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + mt(n + "") + "px;color:" + mt(r) + ";font-weight:" + mt(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + mt(o + "") + "px;color:" + mt(a) + ";font-weight:" + mt(s + "")
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
var HA = [0, 10, 20, 30], UA = ["", `
`, `

`, `


`];
function Io(t, e) {
  return e.type = t, e;
}
function vh(t) {
  return t.type === "section";
}
function PS(t) {
  return vh(t) ? WA : YA;
}
function OS(t) {
  if (vh(t)) {
    var e = 0, r = t.blocks.length, n = r > 1 || r > 0 && !t.noHeader;
    return M(t.blocks, function(i) {
      var a = OS(i);
      a >= e && (e = a + +(n && // 0 always can not be readable gap level.
      (!a || vh(i) && !i.noHeader)));
    }), e;
  }
  return 0;
}
function WA(t, e, r, n) {
  var i = e.noHeader, a = XA(OS(e)), o = [], s = e.blocks || [];
  k(!s || $(s)), s = s || [];
  var u = t.orderMode;
  if (e.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (_t(l, u)) {
      var f = new yE(l[u], null);
      s.sort(function(p, g) {
        return f.evaluate(p.sortParam, g.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  M(s, function(p, g) {
    var m = e.valueFormatter, y = PS(p)(
      // Inherit valueFormatter
      m ? z(z({}, t), {
        valueFormatter: m
      }) : t,
      p,
      g > 0 ? a.html : 0,
      n
    );
    y != null && o.push(y);
  });
  var c = t.renderMode === "richText" ? o.join(a.richText) : dh(n, o.join(""), i ? r : a.html);
  if (i)
    return c;
  var h = hh(e.header, "ordinal", t.useUTC), v = LS(n, t.renderMode).nameStyle, d = IS(n);
  return t.renderMode === "richText" ? NS(t, h, v) + a.richText + c : dh(n, '<div style="' + v + ";" + d + ';">' + mt(h) + "</div>" + c, r);
}
function YA(t, e, r, n) {
  var i = t.renderMode, a = e.noName, o = e.noValue, s = !e.markerType, u = e.name, l = t.useUTC, f = e.valueFormatter || t.valueFormatter || function(S) {
    return S = $(S) ? S : [S], Q(S, function(b, w) {
      return hh(b, $(v) ? v[w] : v, l);
    });
  };
  if (!(a && o)) {
    var c = s ? "" : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || ee.color.secondary, i), h = a ? "" : hh(u, "ordinal", l), v = e.valueType, d = o ? [] : f(e.value, e.rawDataIndex), p = !s || !a, g = !s && a, m = LS(n, i), y = m.nameStyle, _ = m.valueStyle;
    return i === "richText" ? (s ? "" : c) + (a ? "" : NS(t, h, y)) + (o ? "" : qA(t, d, p, g, _)) : dh(n, (s ? "" : c) + (a ? "" : $A(h, !s, y)) + (o ? "" : ZA(d, p, g, _)), r);
  }
}
function Ng(t, e, r, n, i, a) {
  if (t) {
    var o = PS(t), s = {
      useUTC: i,
      renderMode: r,
      orderMode: n,
      markupStyleCreator: e,
      valueFormatter: t.valueFormatter
    };
    return o(s, t, 0, a);
  }
}
function XA(t) {
  return {
    html: HA[t],
    richText: UA[t]
  };
}
function dh(t, e, r) {
  var n = '<div style="clear:both"></div>', i = "margin: " + r + "px 0 0", a = IS(t);
  return '<div style="' + i + ";" + a + ';">' + e + n + "</div>";
}
function $A(t, e, r) {
  var n = e ? "margin-left:2px" : "";
  return '<span style="' + r + ";" + n + '">' + mt(t) + "</span>";
}
function ZA(t, e, r, n) {
  var i = r ? "10px" : "20px", a = e ? "float:right;margin-left:" + i : "";
  return t = $(t) ? t : [t], '<span style="' + a + ";" + n + '">' + Q(t, function(o) {
    return mt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function NS(t, e, r) {
  return t.markupStyleCreator.wrapRichTextStyle(e, r);
}
function qA(t, e, r, n, i) {
  var a = [i], o = n ? 10 : 20;
  return r && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), t.markupStyleCreator.wrapRichTextStyle($(e) ? e.join("  ") : e, a);
}
function KA(t, e) {
  var r = t.getData().getItemVisual(e, "style"), n = r[t.visualDrawType];
  return gi(n);
}
function RS(t, e) {
  var r = t.get("padding");
  return r ?? (e === "richText" ? [8, 10] : 10);
}
var Nf = (
  /** @class */
  function() {
    function t() {
      this.richTextStyles = {}, this._nextStyleNameId = hv();
    }
    return t.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, t.prototype.makeTooltipMarker = function(e, r, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = mA({
        color: r,
        type: e,
        renderMode: n,
        markerId: i
      });
      return j(a) ? a : (process.env.NODE_ENV !== "production" && k(i), this.richTextStyles[i] = a.style, a.content);
    }, t.prototype.wrapRichTextStyle = function(e, r) {
      var n = {};
      $(r) ? M(r, function(a) {
        return z(n, a);
      }) : z(n, r);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + e + "}";
    }, t;
  }()
);
function jA(t) {
  var e = t.series, r = t.dataIndex, n = t.multipleSeries, i = e.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = e.getRawValue(r), u = $(s), l = KA(e, r), f, c, h, v;
  if (o > 1 || u && !o) {
    var d = QA(s, e, r, a, l);
    f = d.inlineValues, c = d.inlineValueTypes, h = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var p = i.getDimensionInfo(a[0]);
    v = f = va(i, r, a[0]), c = p.type;
  } else
    v = f = u ? s[0] : s;
  var g = vv(e), m = g && e.name || "", y = i.getName(r), _ = n ? m : y;
  return Io("section", {
    header: m,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !g,
    sortParam: v,
    blocks: [Io("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Sr(_),
      value: f,
      valueType: c,
      rawDataIndex: i.getRawIndex(r)
    })].concat(h || [])
  });
}
function QA(t, e, r, n, i) {
  var a = e.getData(), o = mn(t, function(c, h, v) {
    var d = a.getDimensionInfo(v);
    return c = c || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? M(n, function(c) {
    f(va(a, r, c), c);
  }) : M(t, f);
  function f(c, h) {
    var v = a.getDimensionInfo(h);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(Io("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: v.displayName,
      value: c,
      valueType: v.type
    })) : (s.push(c), u.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var Jr = Me();
function Cs(t, e) {
  return t.getName(e) || t.getId(e);
}
var JA = "__universalTransitionEnabled", ar = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r._selectedDataIndicesMap = {}, r;
    }
    return e.prototype.init = function(r, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = mo({
        count: tM,
        reset: rM
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(r, i);
      var a = Jr(this).sourceManager = new zA(this);
      a.prepareSource();
      var o = this.getInitialData(r, i);
      kg(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && k(o, "getInitialData returned invalid data."), Jr(this).dataBeforeProcessed = o, Rg(this), this._initSelectedMapFromData(o);
    }, e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Mo(this), a = i ? jo(r) : {}, o = this.subType;
      be.hasClass(o) && (o += "Series"), De(r, n.getTheme().get(this.subType)), De(r, this.getDefaultOption()), qc(r, "label", ["show"]), this.fillDataTextStyle(r.data), i && wn(r, a, i);
    }, e.prototype.mergeOption = function(r, n) {
      r = De(this.option, r, !0), this.fillDataTextStyle(r.data);
      var i = Mo(this);
      i && wn(this.option, r, i);
      var a = Jr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(r, n);
      kg(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Jr(this).dataBeforeProcessed = o, Rg(this), this._initSelectedMapFromData(o);
    }, e.prototype.fillDataTextStyle = function(r) {
      if (r && !bt(r))
        for (var n = ["show"], i = 0; i < r.length; i++)
          r[i] && r[i].label && qc(r[i], "label", n);
    }, e.prototype.getInitialData = function(r, n) {
    }, e.prototype.appendData = function(r) {
      var n = this.getRawData();
      n.appendData(r.data);
    }, e.prototype.getData = function(r) {
      var n = ph(this);
      if (n) {
        var i = n.context.data;
        return r == null || !i.getLinkedData ? i : i.getLinkedData(r);
      } else
        return Jr(this).data;
    }, e.prototype.getAllData = function() {
      var r = this.getData();
      return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
        data: r
      }];
    }, e.prototype.setData = function(r) {
      var n = ph(this);
      if (n) {
        var i = n.context;
        i.outputData = r, n !== this.dataTask && (i.data = r);
      }
      Jr(this).data = r;
    }, e.prototype.getEncode = function() {
      var r = this.get("encode", !0);
      if (r)
        return re(r);
    }, e.prototype.getSourceManager = function() {
      return Jr(this).sourceManager;
    }, e.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, e.prototype.getRawData = function() {
      return Jr(this).dataBeforeProcessed;
    }, e.prototype.getColorBy = function() {
      var r = this.get("colorBy");
      return r || "series";
    }, e.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, e.prototype.getBaseAxis = function() {
      var r = this.coordinateSystem;
      return r && r.getBaseAxis && r.getBaseAxis();
    }, e.prototype.indicesOfNearest = function(r, n, i, a) {
      var o = this.getData(), s = this.coordinateSystem, u = s && s.getAxis(r);
      if (!s || !u)
        return [];
      var l = u.dataToCoord(i);
      a == null && (a = 1 / 0);
      for (var f = [], c = 1 / 0, h = -1, v = 0, d = o.getDimensionIndex(n), p = o.getStore(), g = 0, m = p.count(); g < m; g++) {
        var y = p.get(d, g), _ = u.dataToCoord(y), S = l - _, b = Math.abs(S);
        b <= a && ((b < c || b === c && S >= 0 && h < 0) && (c = b, h = S, v = 0), S === h && (f[v++] = g));
      }
      return f.length = v, f;
    }, e.prototype.formatTooltip = function(r, n, i) {
      return jA({
        series: this,
        dataIndex: r,
        multipleSeries: n
      });
    }, e.prototype.isAnimationEnabled = function() {
      var r = this.ecModel;
      if (le.node && !(r && r.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, e.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, e.prototype.getColorFromPalette = function(r, n, i) {
      var a = this.ecModel, o = jv.prototype.getColorFromPalette.call(this, r, n, i);
      return o || (o = a.getColorFromPalette(r, n, i)), o;
    }, e.prototype.coordDimToDataDim = function(r) {
      return this.getRawData().mapDimensionsAll(r);
    }, e.prototype.getProgressive = function() {
      return this.get("progressive");
    }, e.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, e.prototype.select = function(r, n) {
      this._innerSelect(this.getData(n), r);
    }, e.prototype.unselect = function(r, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < r.length; s++) {
          var u = r[s], l = Cs(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, e.prototype.toggleSelect = function(r, n) {
      for (var i = [], a = 0; a < r.length; a++)
        i[0] = r[a], this.isSelected(r[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, e.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var r = this._selectedDataIndicesMap, n = de(r), i = [], a = 0; a < n.length; a++) {
        var o = r[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, e.prototype.isSelected = function(r, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[Cs(a, r)]) && !a.getItemModel(r).get(["select", "disabled"]);
    }, e.prototype.isUniversalTransitionEnabled = function() {
      if (this[JA])
        return !0;
      var r = this.option.universalTransition;
      return r ? r === !0 ? !0 : r && r.enabled : !1;
    }, e.prototype._innerSelect = function(r, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          J(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var c = n[f], h = Cs(r, c);
            l[h] = !0, this._selectedDataIndicesMap[h] = r.getRawIndex(c);
          }
        } else if (s === "single" || s === !0) {
          var v = n[u - 1], h = Cs(r, v);
          o.selectedMap = (i = {}, i[h] = !0, i), this._selectedDataIndicesMap = (a = {}, a[h] = r.getRawIndex(v), a);
        }
      }
    }, e.prototype._initSelectedMapFromData = function(r) {
      if (!this.option.selectedMap) {
        var n = [];
        r.hasItemOption && r.each(function(i) {
          var a = r.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(r, n);
      }
    }, e.registerClass = function(r) {
      return be.registerClass(r);
    }, e.protoInitialize = function() {
      var r = e.prototype;
      r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill";
    }(), e;
  }(be)
);
Er(ar, MA);
Er(ar, jv);
w0(ar, be);
function Rg(t) {
  var e = t.name;
  vv(t) || (t.name = eM(t) || e);
}
function eM(t) {
  var e = t.getRawData(), r = e.mapDimensionsAll("seriesName"), n = [];
  return M(r, function(i) {
    var a = e.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function tM(t) {
  return t.model.getRawData().count();
}
function rM(t) {
  var e = t.model;
  return e.setData(e.getRawData().cloneShallow()), nM;
}
function nM(t, e) {
  e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
}
function kg(t, e) {
  M(Jw(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function(r) {
    t.wrapMethod(r, Xe(iM, e));
  });
}
function iM(t, e) {
  var r = ph(t);
  return r && r.setOutputEnd((e || this).count()), e;
}
function ph(t) {
  var e = (t.ecModel || {}).scheduler, r = e && e.getPipeline(t.uid);
  if (r) {
    var n = r.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(t.uid));
    }
    return n;
  }
}
var aM = Ce.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.cx, n = e.cy, i = e.width / 2, a = e.height / 2;
    t.moveTo(r, n - a), t.lineTo(r + i, n + a), t.lineTo(r - i, n + a), t.closePath();
  }
}), oM = Ce.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.cx, n = e.cy, i = e.width / 2, a = e.height / 2;
    t.moveTo(r, n - a), t.lineTo(r + i, n), t.lineTo(r, n + a), t.lineTo(r - i, n), t.closePath();
  }
}), sM = Ce.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.x, n = e.y, i = e.width / 5 * 3, a = Math.max(i, e.height), o = i / 2, s = o * o / (a - o), u = n - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, c = Math.sin(l), h = Math.cos(l), v = o * 0.6, d = o * 0.7;
    t.moveTo(r - f, u + s), t.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), t.bezierCurveTo(r + f - c * v, u + s + h * v, r, n - d, r, n), t.bezierCurveTo(r, n - d, r - f + c * v, u + s + h * v, r - f, u + s), t.closePath();
  }
}), uM = Ce.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(t, e) {
    var r = e.height, n = e.width, i = e.x, a = e.y, o = n / 3 * 2;
    t.moveTo(i, a), t.lineTo(i + o, a + r), t.lineTo(i, a + r / 4 * 3), t.lineTo(i - o, a + r), t.lineTo(i, a), t.closePath();
  }
}), lM = {
  line: _n,
  rect: ze,
  roundRect: ze,
  square: ze,
  circle: bl,
  diamond: oM,
  pin: sM,
  arrow: uM,
  triangle: aM
}, fM = {
  line: function(t, e, r, n, i) {
    i.x1 = t, i.y1 = e + n / 2, i.x2 = t + r, i.y2 = e + n / 2;
  },
  rect: function(t, e, r, n, i) {
    i.x = t, i.y = e, i.width = r, i.height = n;
  },
  roundRect: function(t, e, r, n, i) {
    i.x = t, i.y = e, i.width = r, i.height = n, i.r = Math.min(r, n) / 4;
  },
  square: function(t, e, r, n, i) {
    var a = Math.min(r, n);
    i.x = t, i.y = e, i.width = a, i.height = a;
  },
  circle: function(t, e, r, n, i) {
    i.cx = t + r / 2, i.cy = e + n / 2, i.r = Math.min(r, n) / 2;
  },
  diamond: function(t, e, r, n, i) {
    i.cx = t + r / 2, i.cy = e + n / 2, i.width = r, i.height = n;
  },
  pin: function(t, e, r, n, i) {
    i.x = t + r / 2, i.y = e + n / 2, i.width = r, i.height = n;
  },
  arrow: function(t, e, r, n, i) {
    i.x = t + r / 2, i.y = e + n / 2, i.width = r, i.height = n;
  },
  triangle: function(t, e, r, n, i) {
    i.cx = t + r / 2, i.cy = e + n / 2, i.width = r, i.height = n;
  }
}, gh = {};
M(lM, function(t, e) {
  gh[e] = new t();
});
var cM = Ce.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(t, e, r) {
    var n = hu(t, e, r), i = this.shape;
    return i && i.symbolType === "pin" && e.position === "inside" && (n.y = r.y + r.height * 0.4), n;
  },
  buildPath: function(t, e, r) {
    var n = e.symbolType;
    if (n !== "none") {
      var i = gh[n];
      i || (n = "rect", i = gh[n]), fM[n](e.x, e.y, e.width, e.height, i.shape), i.buildPath(t, i.shape, r);
    }
  }
});
function hM(t, e) {
  if (this.type !== "image") {
    var r = this.style;
    this.__isEmptyBrush ? (r.stroke = t, r.fill = e || ee.color.neutral00, r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = t : r.fill = t, this.markRedraw();
  }
}
function pa(t, e, r, n, i, a, o) {
  var s = t.indexOf("empty") === 0;
  s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
  var u;
  return t.indexOf("image://") === 0 ? u = k_(t.slice(8), new ae(e, r, n, i), o ? "center" : "cover") : t.indexOf("path://") === 0 ? u = Mv(t.slice(7), {}, new ae(e, r, n, i), o ? "center" : "cover") : u = new cM({
    shape: {
      symbolType: t,
      x: e,
      y: r,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = hM, a && u.setColor(a), u;
}
function vM(t) {
  return $(t) || (t = [+t, +t]), [t[0] || 0, t[1] || 0];
}
function kS(t, e) {
  if (t != null)
    return $(t) || (t = [t, t]), [ke(t[0], e[0]) || 0, ke(K(t[1], t[0]), e[1]) || 0];
}
var dM = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.hasSymbolVisual = !0, r;
    }
    return e.prototype.getInitialData = function(r) {
      if (process.env.NODE_ENV !== "production") {
        var n = r.coordinateSystem;
        if (n !== "polar" && n !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return Vv(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getLegendIcon = function(r) {
      var n = new Qe(), i = pa("line", 0, r.itemHeight / 2, r.itemWidth, 0, r.lineStyle.stroke, !1);
      n.add(i), i.setStyle(r.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, u = r.itemHeight * 0.8, l = pa(s, (r.itemWidth - u) / 2, (r.itemHeight - u) / 2, u, u, r.itemStyle.fill);
      n.add(l), l.setStyle(r.itemStyle);
      var f = r.iconRotate === "inherit" ? o : r.iconRotate || 0;
      return l.rotation = f * Math.PI / 180, l.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), s.indexOf("empty") > -1 && (l.style.stroke = l.style.fill, l.style.fill = ee.color.neutral00, l.style.lineWidth = 2), n;
    }, e.type = "series.line", e.dependencies = ["grid", "polar"], e.defaultOption = {
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
    }, e;
  }(ar)
);
function Jv(t, e) {
  var r = t.mapDimensionsAll("defaultedLabel"), n = r.length;
  if (n === 1) {
    var i = va(t, e, r[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < r.length; o++)
      a.push(va(t, e, r[o]));
    return a.join(" ");
  }
}
function BS(t, e) {
  var r = t.mapDimensionsAll("defaultedLabel");
  if (!$(e))
    return e + "";
  for (var n = [], i = 0; i < r.length; i++) {
    var a = t.getDimensionIndex(r[i]);
    a >= 0 && n.push(e[a]);
  }
  return n.join(" ");
}
var ed = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r, n, i, a) {
      var o = t.call(this) || this;
      return o.updateData(r, n, i, a), o;
    }
    return e.prototype._createSymbol = function(r, n, i, a, o, s) {
      this.removeAll();
      var u = pa(r, -1, -1, 2, 2, null, s);
      u.attr({
        z2: K(o, 100),
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), u.drift = pM, this._symbolType = r, this.add(u);
    }, e.prototype.stopSymbolAnimation = function(r) {
      this.childAt(0).stopAnimation(null, r);
    }, e.prototype.getSymbolType = function() {
      return this._symbolType;
    }, e.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, e.prototype.highlight = function() {
      Eu(this.childAt(0));
    }, e.prototype.downplay = function() {
      Au(this.childAt(0));
    }, e.prototype.setZ = function(r, n) {
      var i = this.childAt(0);
      i.zlevel = r, i.z = n;
    }, e.prototype.setDraggable = function(r, n) {
      var i = this.childAt(0);
      i.draggable = r, i.cursor = !n && r ? "move" : i.cursor;
    }, e.prototype.updateData = function(r, n, i, a) {
      this.silent = !1;
      var o = r.getItemVisual(n, "symbol") || "circle", s = r.hostModel, u = e.getSymbolSize(r, n), l = e.getSymbolZ2(r, n), f = o !== this._symbolType, c = a && a.disableAnimation;
      if (f) {
        var h = r.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, r, n, u, l, h);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var d = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        c ? v.attr(d) : wt(v, d, s, n), Ev(v);
      }
      if (this._updateCommon(r, n, u, i, a), f) {
        var v = this.childAt(0);
        if (!c) {
          var d = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: v.style.opacity
            }
          };
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, jt(v, d, s, n);
        }
      }
      c && this.childAt(0).stopAnimation("leave");
    }, e.prototype._updateCommon = function(r, n, i, a, o) {
      var s = this.childAt(0), u = r.hostModel, l, f, c, h, v, d, p, g, m;
      if (a && (l = a.emphasisItemStyle, f = a.blurItemStyle, c = a.selectItemStyle, h = a.focus, v = a.blurScope, p = a.labelStatesModels, g = a.hoverScale, m = a.cursorStyle, d = a.emphasisDisabled), !a || r.hasItemOption) {
        var y = a && a.itemModel ? a.itemModel : r.getItemModel(n), _ = y.getModel("emphasis");
        l = _.getModel("itemStyle").getItemStyle(), c = y.getModel(["select", "itemStyle"]).getItemStyle(), f = y.getModel(["blur", "itemStyle"]).getItemStyle(), h = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), p = Ko(y), g = _.getShallow("scale"), m = y.getShallow("cursor");
      }
      var S = r.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
      var b = kS(r.getItemVisual(n, "symbolOffset"), i);
      b && (s.x = b[0], s.y = b[1]), m && s.attr("cursor", m);
      var w = r.getItemVisual(n, "style"), T = w.fill;
      if (s instanceof Mr) {
        var x = s.style;
        s.useStyle(z({
          // TODO other properties like x, y ?
          image: x.image,
          x: x.x,
          y: x.y,
          width: x.width,
          height: x.height
        }, w));
      } else
        s.__isEmptyBrush ? s.useStyle(z({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(T, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var D = r.getItemVisual(n, "liftZ"), C = this._z2;
      D != null ? C == null && (this._z2 = s.z2, s.z2 += D) : C != null && (s.z2 = C, this._z2 = null);
      var E = o && o.useNameLabel;
      qo(s, p, {
        labelFetcher: u,
        labelDataIndex: n,
        defaultText: L,
        inheritColor: T,
        defaultOpacity: w.opacity
      });
      function L(O) {
        return E ? r.getName(O) : Jv(r, O);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var A = s.ensureState("emphasis");
      A.style = l, s.ensureState("select").style = c, s.ensureState("blur").style = f;
      var P = g == null || g === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(g) && g > 0 ? +g : 1;
      A.scaleX = this._sizeX * P, A.scaleY = this._sizeY * P, this.setSymbolScale(1), Do(this, h, v, d);
    }, e.prototype.setSymbolScale = function(r) {
      this.scaleX = this.scaleY = r;
    }, e.prototype.fadeOut = function(r, n, i) {
      var a = this.childAt(0), o = ge(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var u = a.getTextContent();
        u && Iu(u, {
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
      Iu(a, {
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
    }, e.getSymbolSize = function(r, n) {
      return vM(r.getItemVisual(n, "symbolSize"));
    }, e.getSymbolZ2 = function(r, n) {
      return r.getItemVisual(n, "z2");
    }, e;
  }(Qe)
);
function pM(t, e) {
  this.parent.drift(t, e);
}
function Ds(t, e, r, n) {
  return e && !isNaN(e[0]) && !isNaN(e[1]) && !(n && n.isIgnore && n.isIgnore(r)) && !(n && n.clipShape && !n.clipShape.contain(e[0], e[1])) && t.getItemVisual(r, "symbol") !== "none";
}
function Bg(t) {
  return t != null && !J(t) && (t = {
    isIgnore: t
  }), t || {};
}
function Vg(t) {
  var e = t.hostModel, r = e.getModel("emphasis");
  return {
    emphasisItemStyle: r.getModel("itemStyle").getItemStyle(),
    blurItemStyle: e.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: e.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: r.get("focus"),
    blurScope: r.get("blurScope"),
    emphasisDisabled: r.get("disabled"),
    hoverScale: r.get("scale"),
    labelStatesModels: Ko(e),
    cursorStyle: e.get("cursor")
  };
}
function Fg(t, e, r, n, i, a, o) {
  var s = new t(e, r, n, i);
  return s.setPosition(a), e.setItemGraphicEl(r, s), o.add(s), s;
}
var gM = (
  /** @class */
  function() {
    function t(e) {
      this.group = new Qe(), this._SymbolCtor = e || ed;
    }
    return t.prototype.updateData = function(e, r) {
      this._progressiveEls = null, r = Bg(r);
      var n = this.group, i = e.hostModel, a = this._data, o = this._SymbolCtor, s = r.disableAnimation, u = this._seriesScope = Vg(e), l = {
        disableAnimation: s
      }, f = r.getSymbolPoint || function(c) {
        return e.getItemLayout(c);
      };
      a || n.removeAll(), e.diff(a).add(function(c) {
        var h = f(c);
        Ds(e, h, c, r) && Fg(o, e, c, u, l, h, n);
      }).update(function(c, h) {
        var v = a.getItemGraphicEl(h), d = f(c);
        if (!Ds(e, d, c, r)) {
          n.remove(v);
          return;
        }
        var p = e.getItemVisual(c, "symbol") || "circle", g = v && v.getSymbolType && v.getSymbolType();
        if (!v || g && g !== p)
          n.remove(v), v = new o(e, c, u, l), v.setPosition(d);
        else {
          v.updateData(e, c, u, l);
          var m = {
            x: d[0],
            y: d[1]
          };
          s ? v.attr(m) : wt(v, m, i);
        }
        n.add(v), e.setItemGraphicEl(c, v);
      }).remove(function(c) {
        var h = a.getItemGraphicEl(c);
        h && h.fadeOut(function() {
          n.remove(h);
        }, i);
      }).execute(), this._getSymbolPoint = f, this._data = e;
    }, t.prototype.updateLayout = function(e) {
      var r = this._data;
      if (r)
        for (var n = this, i = r.getStore(), a = 0, o = i.count(); a < o; a++) {
          var s = r.getItemGraphicEl(a), u = n._getSymbolPoint(a);
          Ds(r, u, a, e) ? (s = s || Fg(n._SymbolCtor, r, a, n._seriesScope, {
            disableAnimation: !0
          }, u, n.group), s.stopAnimation(), s.setPosition(u), s.markRedraw()) : s && (n.group.remove(s), r.setItemGraphicEl(a, null));
        }
    }, t.prototype.incrementalPrepareUpdate = function(e) {
      this._seriesScope = Vg(e), this._data = null, this.group.removeAll();
    }, t.prototype.incrementalUpdate = function(e, r, n, i) {
      this._progressiveEls = [], i = Bg(i);
      function a(l) {
        l.isGroup || (l.incremental = n, l.ensureState("emphasis").hoverLayer = Av);
      }
      for (var o = e.start; o < e.end; o++) {
        var s = r.getItemLayout(o);
        if (Ds(r, s, o, i)) {
          var u = new this._SymbolCtor(r, o, this._seriesScope);
          u.traverse(a), u.setPosition(s), this.group.add(u), r.setItemGraphicEl(o, u), this._progressiveEls.push(u);
        }
      }
    }, t.prototype.eachRendered = function(e) {
      xl(this._progressiveEls || this.group, e);
    }, t.prototype.remove = function(e) {
      var r = this.group, n = this._data;
      n && e ? n.eachItemGraphicEl(function(i) {
        i.fadeOut(function() {
          r.remove(i);
        }, n.hostModel);
      }) : r.removeAll();
    }, t;
  }()
);
function VS(t, e, r) {
  var n = t.getBaseAxis(), i = t.getOtherAxis(n), a = mM(i, r), o = n.dim, s = i.dim, u = e.mapDimension(s), l = e.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, c = Q(t.dimensions, function(d) {
    return e.mapDimension(d);
  }), h = !1, v = e.getCalculationInfo("stackResultDimension");
  return da(
    e,
    c[0]
    /* , dims[1] */
  ) && (h = !0, c[0] = v), da(
    e,
    c[1]
    /* , dims[0] */
  ) && (h = !0, c[1] = v), {
    dataDimsForPoint: c,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!h,
    valueDim: u,
    baseDim: l,
    baseDataOffset: f,
    stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
  };
}
function mM(t, e) {
  var r = 0, n = t.scale.getExtent();
  return e === "start" ? r = n[0] : e === "end" ? r = n[1] : Ee(e) && !isNaN(e) ? r = e : n[0] > 0 ? r = n[0] : n[1] < 0 && (r = n[1]), r;
}
function FS(t, e, r, n) {
  var i = NaN;
  t.stacked && (i = r.get(r.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = t.valueStart);
  var a = t.baseDataOffset, o = [];
  return o[a] = r.get(t.baseDim, n), o[1 - a] = i, e.dataToPoint(o);
}
function Qt(t, e) {
  return !isFinite(t) || !isFinite(e);
}
var yM = typeof Float32Array !== wa ? Float32Array : void 0, _M = typeof Float64Array !== wa ? Float64Array : void 0;
function Br(t) {
  return td({
    ctor: yM
  }, t).arr;
}
function td(t, e) {
  process.env.NODE_ENV !== "production" && k(e != null && isFinite(e) && e >= 0 && t.hasOwnProperty("ctor"));
  var r = t.arr, n = t.ctor;
  if (e > kp && (e = kp), !r || t.typed && r.length < e) {
    var i = void 0;
    if (n)
      try {
        i = new n(e), t.typed = !0, r && i.set(r);
      } catch (s) {
        process.env.NODE_ENV !== "production" && _e(s);
      }
    if (!i && (i = [], t.typed = !1, r))
      for (var a = 0, o = r.length; a < o; a++)
        i[a] = r[a];
    t.arr = i;
  }
  return t;
}
function SM(t, e) {
  var r = [];
  return e.diff(t).add(function(n) {
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
function bM(t, e, r, n, i, a, o, s) {
  for (var u = SM(t, e), l = [], f = [], c = [], h = [], v = [], d = [], p = [], g = VS(i, e, o), m = t.getLayout("points") || [], y = e.getLayout("points") || [], _ = 0; _ < u.length; _++) {
    var S = u[_], b = !0, w = void 0, T = void 0;
    switch (S.cmd) {
      case "=":
        w = S.idx * 2, T = S.idx1 * 2;
        var x = m[w], D = m[w + 1], C = y[T], E = y[T + 1];
        (isNaN(x) || isNaN(D)) && (x = C, D = E), l.push(x, D), f.push(C, E), c.push(r[w], r[w + 1]), h.push(n[T], n[T + 1]), p.push(e.getRawIndex(S.idx1));
        break;
      case "+":
        var L = S.idx, A = g.dataDimsForPoint, P = i.dataToPoint([e.get(A[0], L), e.get(A[1], L)]);
        T = L * 2, l.push(P[0], P[1]), f.push(y[T], y[T + 1]);
        var O = FS(g, i, e, L);
        c.push(O[0], O[1]), h.push(n[T], n[T + 1]), p.push(e.getRawIndex(L));
        break;
      case "-":
        b = !1;
    }
    b && (v.push(S), d.push(d.length));
  }
  d.sort(function(ne, se) {
    return p[ne] - p[se];
  });
  for (var N = l.length, B = Br(N), R = Br(N), F = Br(N), G = Br(N), H = [], _ = 0; _ < d.length; _++) {
    var Y = d[_], q = _ * 2, W = Y * 2;
    B[q] = l[W], B[q + 1] = l[W + 1], R[q] = f[W], R[q + 1] = f[W + 1], F[q] = c[W], F[q + 1] = c[W + 1], G[q] = h[W], G[q + 1] = h[W + 1], H[_] = v[Y];
  }
  return {
    current: B,
    next: R,
    stackedOnCurrent: F,
    stackedOnNext: G,
    status: H
  };
}
var en = Math.min, tn = Math.max;
function mh(t, e, r, n, i, a, o, s, u) {
  for (var l, f, c, h, v, d, p = r, g = 0; g < n; g++) {
    var m = e[p * 2], y = e[p * 2 + 1];
    if (p >= i || p < 0)
      break;
    if (Qt(m, y)) {
      if (u) {
        p += a;
        continue;
      }
      break;
    }
    if (p === r)
      t[a > 0 ? "moveTo" : "lineTo"](m, y), c = m, h = y;
    else {
      var _ = m - l, S = y - f;
      if (_ * _ + S * S < 0.5) {
        p += a;
        continue;
      }
      if (o > 0) {
        for (var b = p + a, w = e[b * 2], T = e[b * 2 + 1]; w === m && T === y && g < n; )
          g++, b += a, p += a, w = e[b * 2], T = e[b * 2 + 1], m = e[p * 2], y = e[p * 2 + 1], _ = m - l, S = y - f;
        var x = g + 1;
        if (u)
          for (; Qt(w, T) && x < n; )
            x++, b += a, w = e[b * 2], T = e[b * 2 + 1];
        var D = 0.5, C = 0, E = 0, L = void 0, A = void 0;
        if (x >= n || Qt(w, T))
          v = m, d = y;
        else {
          C = w - l, E = T - f;
          var P = m - l, O = w - m, N = y - f, B = T - y, R = void 0, F = void 0;
          if (s === "x") {
            R = Math.abs(P), F = Math.abs(O);
            var G = C > 0 ? 1 : -1;
            v = m - G * R * o, d = y, L = m + G * F * o, A = y;
          } else if (s === "y") {
            R = Math.abs(N), F = Math.abs(B);
            var H = E > 0 ? 1 : -1;
            v = m, d = y - H * R * o, L = m, A = y + H * F * o;
          } else
            R = Math.sqrt(P * P + N * N), F = Math.sqrt(O * O + B * B), D = F / (F + R), v = m - C * o * (1 - D), d = y - E * o * (1 - D), L = m + C * o * D, A = y + E * o * D, L = en(L, tn(w, m)), A = en(A, tn(T, y)), L = tn(L, en(w, m)), A = tn(A, en(T, y)), C = L - m, E = A - y, v = m - C * R / F, d = y - E * R / F, v = en(v, tn(l, m)), d = en(d, tn(f, y)), v = tn(v, en(l, m)), d = tn(d, en(f, y)), C = m - v, E = y - d, L = m + C * F / R, A = y + E * F / R;
        }
        t.bezierCurveTo(c, h, v, d, m, y), c = L, h = A;
      } else
        t.lineTo(m, y);
    }
    l = m, f = y, p += a;
  }
  return g;
}
var zS = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return t;
  }()
), wM = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.type = "ec-polyline", n;
    }
    return e.prototype.getDefaultStyle = function() {
      return {
        stroke: ee.color.neutral99,
        fill: null
      };
    }, e.prototype.getDefaultShape = function() {
      return new zS();
    }, e.prototype.buildPath = function(r, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && Qt(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && Qt(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += mh(r, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, e.prototype.getPointOn = function(r, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = yn.CMD, s, u, l = n === "x", f = [], c = 0; c < a.length; ) {
        var h = a[c++], v = void 0, d = void 0, p = void 0, g = void 0, m = void 0, y = void 0, _ = void 0;
        switch (h) {
          case o.M:
            s = a[c++], u = a[c++];
            break;
          case o.L:
            if (v = a[c++], d = a[c++], _ = l ? (r - s) / (v - s) : (r - u) / (d - u), _ <= 1 && _ >= 0) {
              var S = l ? (d - u) * _ + u : (v - s) * _ + s;
              return l ? [r, S] : [S, r];
            }
            s = v, u = d;
            break;
          case o.C:
            v = a[c++], d = a[c++], p = a[c++], g = a[c++], m = a[c++], y = a[c++];
            var b = l ? du(s, v, p, m, r, f) : du(u, d, g, y, r, f);
            if (b > 0)
              for (var w = 0; w < b; w++) {
                var T = f[w];
                if (T <= 1 && T >= 0) {
                  var S = l ? rt(u, d, g, y, T) : rt(s, v, p, m, T);
                  return l ? [r, S] : [S, r];
                }
              }
            s = m, u = y;
            break;
        }
      }
    }, e;
  }(Ce)
), TM = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  }(zS)
), xM = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.type = "ec-polygon", n;
    }
    return e.prototype.getDefaultShape = function() {
      return new TM();
    }, e.prototype.buildPath = function(r, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, u = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && Qt(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && Qt(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var l = mh(r, i, o, s, s, 1, n.smooth, u, n.connectNulls);
        mh(r, a, o + l - 1, l, s, -1, n.stackedOnSmooth, u, n.connectNulls), o += l + 1, r.closePath();
      }
    }, e;
  }(Ce)
);
function rd() {
  var t = Me();
  return function(e) {
    var r = t(e), n = e.pipelineContext, i = !!r.large, a = !!r.progressiveRender, o = r.large = !!(n && n.large), s = r.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var GS = Me(), CM = rd(), Jt = (
  /** @class */
  function() {
    function t() {
      this.group = new Qe(), this.uid = Al("viewChart"), this.renderTask = mo({
        plan: DM,
        reset: EM
      }), this.renderTask.context = {
        view: this
      };
    }
    return t.prototype.init = function(e, r) {
    }, t.prototype.render = function(e, r, n, i) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, t.prototype.highlight = function(e, r, n, i) {
      var a = e.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && _e("Unknown dataType " + i.dataType);
        return;
      }
      Gg(a, i, "emphasis");
    }, t.prototype.downplay = function(e, r, n, i) {
      var a = e.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && _e("Unknown dataType " + i.dataType);
        return;
      }
      Gg(a, i, "normal");
    }, t.prototype.remove = function(e, r) {
      this.group.removeAll();
    }, t.prototype.dispose = function(e, r) {
    }, t.prototype.updateView = function(e, r, n, i) {
      this.render(e, r, n, i);
    }, t.prototype.updateVisual = function(e, r, n, i) {
      this.render(e, r, n, i);
    }, t.prototype.eachRendered = function(e) {
      xl(this.group, e);
    }, t.markUpdateMethod = function(e, r) {
      GS(e).updateMethod = r;
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "chart";
    }(), t;
  }()
);
function zg(t, e, r) {
  t && ca(t) && (e === "emphasis" ? Eu : Au)(t, r);
}
function Gg(t, e, r) {
  var n = di(t, e), i = e && e.highlightKey != null ? YC(e.highlightKey) : null;
  n != null ? M(St(n), function(a) {
    zg(t.getItemGraphicEl(a), r, i);
  }) : t.eachItemGraphicEl(function(a) {
    zg(a, r, i);
  });
}
tv(Jt, ["dispose"]);
fl(Jt);
function DM(t) {
  return CM(t.model);
}
function EM(t) {
  var e = t.model, r = t.ecModel, n = t.api, i = t.payload, a = e.pipelineContext.progressiveRender, o = t.view, s = i && GS(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](e, r, n, i), AM[u];
}
var AM = {
  incrementalPrepareRender: {
    progress: function(t, e) {
      e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(t, e) {
      e.view.render(e.model, e.ecModel, e.api, e.payload);
    }
  }
};
function HS(t, e, r, n, i) {
  var a = t.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = r.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var c = new ze({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (e) {
    var h = t.getBaseAxis(), v = h.isHorizontal(), d = h.inverse;
    v ? (d && (c.shape.x += u), c.shape.width = 0) : (d || (c.shape.y += l), c.shape.height = 0);
    var p = ie(i) ? function(g) {
      i(g, c);
    } : null;
    jt(c, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, r, null, n, p);
  }
  return c;
}
function US(t, e, r) {
  var n = t.getArea(), i = me(n.r0, 1), a = me(n.r, 1), o = new Cn({
    shape: {
      cx: me(t.cx, 1),
      cy: me(t.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (e) {
    var s = t.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, jt(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, r);
  }
  return o;
}
function MM(t, e, r, n, i) {
  if (t) {
    if (t.type === "polar")
      return US(t, e, r);
    if (t.type === "cartesian2d")
      return HS(t, e, r, n, i);
  } else return null;
  return null;
}
function WS(t, e) {
  return t.type === e;
}
var Hg = {};
function IM(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var r = t + "^_^" + e;
    Hg[r] || (console.warn('[ECharts] DEPRECATED: "' + t + '" has been deprecated. ' + e), Hg[r] = !0);
  }
}
var fr = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.isBlank = function() {
      return this._isBlank;
    }, t.prototype.setBlank = function(e) {
      this._isBlank = e;
    }, t;
  }()
);
fl(fr);
var LM = 0, yh = (
  /** @class */
  function() {
    function t(e) {
      this.categories = e.categories || [], this._needCollect = e.needCollect, this._deduplication = e.deduplication, this.uid = ++LM, this._onCollect = e.onCollect;
    }
    return t.createByAxisModel = function(e) {
      var r = e.option, n = r.data, i = n && Q(n, PM);
      return new t({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: r.dedplication !== !1
      });
    }, t.prototype.getOrdinal = function(e) {
      return this._getOrCreateMap().get(e);
    }, t.prototype.parseAndCollect = function(e) {
      var r, n = this._needCollect;
      if (!j(e) && !n)
        return e;
      if (n && !this._deduplication)
        return r = this.categories.length, this.categories[r] = e, this._onCollect && this._onCollect(e, r), r;
      var i = this._getOrCreateMap();
      return r = i.get(e), r == null && (n ? (r = this.categories.length, this.categories[r] = e, i.set(e, r), this._onCollect && this._onCollect(e, r)) : r = NaN), r;
    }, t.prototype._getOrCreateMap = function() {
      return this._map || (this._map = re(this.categories));
    }, t;
  }()
);
function PM(t) {
  return J(t) && t.value != null ? t.value : t + "";
}
var qt = 0, Lo = 1, OM = {
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
}, NM = de(OM), Ru = 2, YS = 3;
function nd(t, e, r) {
  var n;
  return t = t || {}, kM(t, r), {
    brk: n,
    mapper: t
  };
}
function XS(t, e) {
  M(NM, function(r) {
    t[r] = e[r];
  });
}
function $S(t, e) {
  t.freeze = it, process.env.NODE_ENV !== "production" && (t.freeze = function() {
    e.freeze();
  });
}
function Po(t) {
  return t.getExtentUnsafe(qt, Ru);
}
function ku(t, e) {
  return t.getExtentUnsafe(Lo, e) || t.getExtentUnsafe(qt, e);
}
function RM(t) {
  var e = ku(t, YS);
  return e[1] - e[0];
}
function Ol(t) {
  var e = t.getExtentUnsafe(qt, YS);
  return e[1] - e[0];
}
function kM(t, e) {
  var r = t || {}, n = [];
  return r._extents = n, n[qt] = e ? e.slice() : Xt(), z(r, BM), r;
}
var BM = {
  needTransform: function() {
    return !1;
  },
  normalize: function(t) {
    var e = this._extents[Lo] || this._extents[qt];
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  },
  scale: function(t) {
    var e = this._extents[Lo] || this._extents[qt];
    return t * (e[1] - e[0]) + e[0];
  },
  transformIn: function(t) {
    return t;
  },
  transformOut: function(t) {
    return t;
  },
  contain: function(t) {
    var e = ku(this, null);
    return t >= e[0] && t <= e[1];
  },
  getExtent: function() {
    return this._extents[qt].slice();
  },
  getExtentUnsafe: function(t) {
    return this._extents[t];
  },
  setExtent: function(t, e) {
    process.env.NODE_ENV !== "production" && k(!this._frozen), Ug(this._extents, qt, t, e);
  },
  setExtent2: function(t, e, r) {
    process.env.NODE_ENV !== "production" && k(!this._frozen);
    var n = this._extents;
    n[t] || (n[t] = n[qt].slice()), Ug(n, t, e, r);
  },
  freeze: function() {
    process.env.NODE_ENV !== "production" && (this._frozen = !0);
  }
};
function Ug(t, e, r, n) {
  fa(r, n) ? (t[e][0] = r, t[e][1] = n) : process.env.NODE_ENV !== "production" && r != null && n != null && r <= n && _e("Invalid setExtent call - start: " + r + ", end: " + n);
}
function ZS(t) {
  return Bu(t) || ga(t);
}
function Bu(t) {
  return t.type === "interval";
}
function id(t) {
  return t.type === "time";
}
function ga(t) {
  return t.type === "log";
}
function cr(t) {
  return t.type === "ordinal";
}
function VM(t) {
  var e = fv(t), r = yi(10, e), n = Wr(t / r);
  return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, me(n * r, -e);
}
function mi(t) {
  return kr(t) + 2;
}
function Es(t, e) {
  return Co(t) / Co(e);
}
function Rf(t, e, r) {
  var n = r && r.lookup;
  if (n) {
    for (var i = 0; i < n.from.length; i++)
      if (t === n.from[i])
        return n.to[i];
  }
  return yi(e, t);
}
function qS(t, e, r) {
  var n = t.slice();
  if (n[0] === n[1]) {
    var i = r && r.ctnShp;
    if (n[0] !== 0) {
      var a = $e(n[0]);
      e[1] || (n[1] += a / 2), n[0] -= a / 2;
    } else
      i && (n[0] = -1), n[1] = 1;
  }
  return (!Xr(n[0]) || !Xr(n[1])) && (n[0] = 0, n[1] = 1), n[1] < n[0] && n.reverse(), n;
}
function FM(t, e) {
  return [t[0] !== e[0], t[1] !== e[1]];
}
function ad(t, e) {
  return t = t || e, Wr(ye(t, 1));
}
function KS(t, e, r) {
  var n = Po(t), i = n[0], a = t.count(), o = Math.max((e || 0) + 1, 1);
  i !== 0 && o > 1 && a / o > 2 && (i = Math.round(Math.ceil(i / o) * o)), i !== n[0] && u(n[0], !0, !0);
  for (var s = i; s <= n[1]; s += o)
    u(s, !1, s === n[0] || s === n[1]);
  s - o !== n[1] && u(n[1], !0, !0);
  function u(l, f, c) {
    r({
      value: l,
      offInterval: f
    }, c);
  }
}
var jS = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "ordinal", n.parse = e.parse, XS(n, e.decoratedMethods);
      var i = r.ordinalMeta;
      i || (i = new yh({})), $(i) && (i = new yh({
        categories: Q(i, function(o) {
          return J(o) ? o.value : o;
        })
      })), n._ordinalMeta = i;
      var a = nd(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        r.extent || [0, i.categories.length - 1]
      );
      return n._mapper = a.mapper, $S(n, a.mapper), n;
    }
    return e.parse = function(r) {
      return r == null ? r = NaN : j(r) ? (r = this._ordinalMeta.getOrdinal(r), r == null && (r = NaN)) : r = Wr(r), r;
    }, e.prototype.getTicks = function() {
      var r = [];
      return KS(this, 0, function(n) {
        r.push(n);
      }), r;
    }, e.prototype.getMinorTicks = function(r) {
    }, e.prototype.setSortInfo = function(r) {
      if (r == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = r.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = ht(s, n.length); o < u; ++o) {
        var l = i[o] = n[o];
        a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i[o] = f, a[f] = o;
      }
    }, e.prototype._getTickNumber = function(r) {
      var n = this._ticksByOrdinalNumber;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, e.prototype.getRawOrdinalNumber = function(r) {
      var n = this._ordinalNumbersByTick;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, e.prototype.getLabel = function(r) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(r.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, e.prototype.count = function() {
      var r = Po(this._mapper);
      return r[1] - r[0] + 1;
    }, e.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, e.type = "ordinal", e.decoratedMethods = {
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
        return this.getRawOrdinalNumber(Wr(this._mapper.scale(r)));
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
    }, e;
  }(fr)
);
fr.registerClass(jS);
function od(t, e, r, n) {
  for (var i = t.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = t.getExtent(), s = 1; s < i.length; s++) {
    var u = i[s], l = i[s - 1];
    if (!(l.break || u.break)) {
      for (var f = 0, c = [], h = u.value - l.value, v = h / e, d = mi(v); f < e - 1; ) {
        var p = me(l.value + (f + 1) * v, d);
        p > o[0] && p < o[1] && c.push(p), f++;
      }
      var g = Ml();
      g && g.pruneTicksByBreak("auto", c, r, function(m) {
        return m;
      }, n, o), a.push(c);
    }
  }
  return a;
}
var dn = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "interval", n.parse = e.parse, r = r || {};
      var i = yS(n, r), a = nd(n, i, null);
      return n.brk = a.brk, n._cfg = {
        interval: 0,
        intervalPrecision: 2,
        intervalCount: void 0,
        niceExtent: void 0
      }, n;
    }
    return e.parse = function(r) {
      return r == null || r === "" ? NaN : Number(r);
    }, e.prototype.getConfig = function() {
      return ce(this._cfg);
    }, e.prototype.setConfig = function(r) {
      var n = Po(this);
      process.env.NODE_ENV !== "production" && (k(r.interval != null), r.intervalCount != null && k(r.intervalCount >= -1 && r.intervalPrecision != null && !pi(this)), r.niceExtent != null && (k(isFinite(r.niceExtent[0]) && isFinite(r.niceExtent[1])), k(n[0] <= r.niceExtent[0] && r.niceExtent[1] <= n[1]), k(me(r.niceExtent[0] - r.niceExtent[1], kr(r.interval)) <= r.interval))), this._cfg = r = ce(r), r.niceExtent == null && (r.niceExtent = n.slice()), r.intervalPrecision == null && (r.intervalPrecision = mi(r.interval));
    }, e.prototype.getTicks = function(r) {
      r = r || {};
      var n = this._cfg, i = n.interval, a = Po(this), o = n.niceExtent, s = n.intervalPrecision, u = Ml(), l = this.brk, f = u, c = [];
      if (!i)
        return c;
      r.breakTicks, process.env.NODE_ENV !== "production" && k(o != null);
      var h = 3e3;
      a[0] < o[0] && c.push({
        value: r.expandToNicedExtent ? me(o[0] - i, s) : a[0]
      });
      for (var v = function(_, S) {
        return Wr((S - _) / i);
      }, d = n.intervalCount, p = o[0], g = 0; ; g++) {
        if (d == null) {
          if (p > o[1] || !isFinite(p) || !isFinite(o[1]))
            break;
        } else {
          if (g > d)
            break;
          p = ht(p, o[1]), g === d && (p = o[1]);
        }
        if (c.push({
          value: p
        }), p = me(p + i, s), l) {
          var m = l.calcNiceTickMultiple(p, v);
          m >= 0 && (p = me(p + m * i, s));
        }
        if (c.length > 0 && p === c[c.length - 1].value)
          break;
        if (c.length > h)
          return process.env.NODE_ENV !== "production" && nt('Exceed safe limit in IntervalScale["getTicks"].'), [];
      }
      var y = c.length ? c[c.length - 1].value : o[1];
      return a[1] > y && c.push({
        value: r.expandToNicedExtent ? me(y + i, s) : a[1]
      }), c;
    }, e.prototype.getMinorTicks = function(r) {
      return od(this, r, Gv(this), this._cfg.interval);
    }, e.prototype.getLabel = function(r, n) {
      if (r == null)
        return "";
      var i = n && n.precision;
      i == null ? i = kr(r.value) || 0 : i === "auto" && (i = this._cfg.intervalPrecision);
      var a = me(r.value, i, !0);
      return DS(a);
    }, e.type = "interval", e;
  }(fr)
);
fr.registerClass(dn);
var zM = function(t, e, r, n) {
  for (; r < n; ) {
    var i = r + n >>> 1;
    t[i][1] < e ? r = i + 1 : n = i;
  }
  return r;
}, QS = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "time", n.parse = e.parse, n._locale = r.locale, n._useUTC = r.useUTC, n._interval = 0;
      var i = yS(n, r), a = nd(n, i, null);
      return n.brk = a.brk, n;
    }
    return e.prototype.getLabel = function(r) {
      return Il(r.value, Dg[dA(po(this._minLevelUnit))] || Dg.second, this._useUTC, this._locale);
    }, e.prototype.getFormattedLabel = function(r, n, i) {
      return pA(r, n, i, this._locale, this._useUTC);
    }, e.prototype.getTicks = function(r) {
      var n = this._interval, i = Po(this), a = this.brk, o = [];
      if (!n)
        return o;
      var s = this._useUTC;
      o = ZM(this._minLevelUnit, this._approxInterval, s, i, Ol(this), a);
      var u = ci.length - 1, l = 0;
      return M(o, function(f) {
        f.time && (u = Math.min(u, xe(ci, f.time.upperTimeUnit)), l = Math.max(l, f.time.level));
      }), o;
    }, e.prototype.getMinorTicks = function(r) {
      return od(this, r, Gv(this), this._interval);
    }, e.prototype.setTimeInterval = function(r) {
      this._interval = r.interval, this._approxInterval = r.approxInterval, this._minLevelUnit = r.minLevelUnit;
    }, e.parse = function(r) {
      return Ee(r) ? Math.round(r) : +ba(r);
    }, e.type = "time", e;
  }(fr)
), As = [
  // Format                           interval
  ["second", Hv],
  ["minute", Uv],
  ["hour", vo],
  ["quarter-day", vo * 6],
  ["half-day", vo * 12],
  ["day", Zt * 1.2],
  ["half-week", Zt * 3.5],
  ["week", Zt * 7],
  ["month", Zt * 31],
  ["quarter", Zt * 95],
  ["half-year", Cg / 2],
  ["year", Cg]
  // 1Y
];
function GM(t, e, r, n) {
  return ch(new Date(e), t, n).getTime() === ch(new Date(r), t, n).getTime();
}
function HM(t, e) {
  return t /= Zt, t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1;
}
function UM(t) {
  var e = 30 * Zt;
  return t /= e, t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1;
}
function WM(t) {
  return t /= vo, t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1;
}
function Wg(t, e) {
  return t /= e ? Uv : Hv, t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1;
}
function YM(t) {
  return ye(cv(t, !0), 1);
}
function XM(t, e, r) {
  var n = Math.max(0, xe(ci, e) - 1);
  return ch(new Date(t), ci[n], r).getTime();
}
function $M(t, e) {
  var r = /* @__PURE__ */ new Date(0);
  r[t](1);
  var n = r.getTime();
  r[t](1 + e);
  var i = r.getTime() - n;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / i));
  };
}
function ZM(t, e, r, n, i, a) {
  var o = 3e3, s = fA, u = 0;
  function l(N, B, R, F, G, H, Y) {
    for (var q = $M(G, N), W = B, ne = new Date(W); W < R && W <= n[1]; ) {
      if (Y.push({
        value: W
      }), u++ > o) {
        process.env.NODE_ENV !== "production" && nt('Exceed safe limit in TimeScale["getTicks"].');
        break;
      }
      if (ne[G](ne[F]() + N), W = ne.getTime(), a) {
        var se = a.calcNiceTickMultiple(W, q);
        se > 0 && (ne[G](ne[F]() + se * N), W = ne.getTime());
      }
    }
    Y.push({
      value: W,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: W > n[1]
    });
  }
  function f(N, B, R) {
    var F = [], G = !B.length;
    if (!GM(po(N), n[0], n[1], r)) {
      G && (B = [{
        value: XM(n[0], N, r)
      }, {
        value: n[1]
      }]);
      for (var H = 0; H < B.length - 1; H++) {
        var Y = B[H].value, q = B[H + 1].value;
        if (Y !== q) {
          var W = void 0, ne = void 0, se = void 0, Oe = !1;
          switch (N) {
            case "year":
              W = Math.max(1, Math.round(e / Zt / 365)), ne = _S(r), se = gA(r);
              break;
            case "half-year":
            case "quarter":
            case "month":
              W = UM(e), ne = Wv(r), se = SS(r);
              break;
            case "week":
            case "half-week":
            case "day":
              W = HM(e), ne = Yv(r), se = bS(r), Oe = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              W = WM(e), ne = Xv(r), se = wS(r);
              break;
            case "minute":
              W = Wg(e, !0), ne = $v(r), se = TS(r);
              break;
            case "second":
              W = Wg(e, !1), ne = Zv(r), se = xS(r);
              break;
            case "millisecond":
              W = YM(e), ne = qv(r), se = CS(r);
              break;
          }
          q >= n[0] && Y <= n[1] && l(W, Y, q, ne, se, Oe, F), N === "year" && R.length > 1 && H === 0 && R.unshift({
            value: R[0].value - W
          });
        }
      }
      for (var H = 0; H < F.length; H++)
        R.push(F[H]);
    }
  }
  for (var c = [], h = [], v = 0, d = 0, p = 0; p < s.length; ++p) {
    var g = po(s[p]);
    if (vA(s[p])) {
      f(s[p], c[c.length - 1] || [], h);
      var m = s[p + 1] ? po(s[p + 1]) : null;
      if (g !== m) {
        if (h.length) {
          d = v, h.sort(function(N, B) {
            return N.value - B.value;
          });
          for (var y = [], _ = 0; _ < h.length; ++_) {
            var S = h[_].value;
            (_ === 0 || h[_ - 1].value !== S) && (y.push(h[_]), S >= n[0] && S <= n[1] && v++);
          }
          var b = i / e;
          if (v > b * 1.5 && d > b / 1.5 || (c.push(y), v > b || t === s[p]))
            break;
        }
        h = [];
      }
    }
  }
  for (var w = tt(Q(c, function(N) {
    return tt(N, function(B) {
      return B.value >= n[0] && B.value <= n[1] && !B.notAdd;
    });
  }), function(N) {
    return N.length > 0;
  }), T = w.length - 1, x = [], p = 0; p < w.length; ++p)
    for (var D = w[p], C = 0; C < D.length; ++C) {
      var E = au(D[C].value, r);
      x.push({
        value: D[C].value,
        time: {
          level: T - p,
          upperTimeUnit: E,
          lowerTimeUnit: E
        }
      });
    }
  pv(x, SC, null), x.sort(function(N, B) {
    return N.value - B.value;
  });
  var L = x[0], A = x[x.length - 1], P = au(n[0], r), O = au(n[1], r);
  return (!L || L.value > n[0]) && x.unshift({
    value: n[0],
    time: {
      level: 0,
      upperTimeUnit: P,
      lowerTimeUnit: P
    },
    notNice: !0
  }), (!A || A.value < n[1]) && x.push({
    value: n[1],
    time: {
      level: 0,
      upperTimeUnit: O,
      lowerTimeUnit: O
    },
    notNice: !0
  }), x;
}
var qM = function(t, e) {
  var r = t.getExtent();
  if (r[0] === r[1] && (r[0] -= Zt, r[1] += Zt), r[1] === -1 / 0 && r[0] === 1 / 0) {
    var n = /* @__PURE__ */ new Date();
    r[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), r[0] = r[1] - Zt;
  }
  t.setExtent(r[0], r[1]);
  var i = ad(e.splitNumber, 10), a = Ol(t) / i, o = e.minInterval, s = e.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var u = As.length, l = Math.min(zM(As, a, 0, u), u - 1), f = As[l][1], c = As[Math.max(l - 1, 0)][0];
  t.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: c
  });
};
fr.registerClass(QS);
var Ms = 0, Is = 1, Vu = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this) || this;
      n.type = "log", n.parse = dn.parse, n.base = r.logBase || 10;
      var i = [], a = [];
      n._lookup = {
        from: i,
        to: a
      }, i[Ms] = i[Is] = a[Ms] = a[Is] = NaN, XS(n, e.mapperMethods), r.breakOption;
      var o = {};
      return n.powStub = new dn({
        breakParsed: o.original
      }), n.intervalStub = new dn({
        breakParsed: o.transformed
      }), $S(n, n.intervalStub), n;
    }
    return e.prototype.getTicks = function(r) {
      var n = this.base, i = this.powStub, a = this.intervalStub, o = a.getExtent(), s = i.getExtent(), u = {
        lookup: {
          from: o,
          to: s
        }
      };
      return Q(a.getTicks(r || {}), function(l) {
        var f = l.value, c = Rf(f, n, u), h;
        return {
          value: c,
          break: h
        };
      }, this);
    }, e.prototype.getMinorTicks = function(r) {
      return od(
        this,
        r,
        Gv(this.powStub),
        // NOTE: minor ticks are in the log scale value to visually hint users "logarithm".
        this.intervalStub.getConfig().interval
      );
    }, e.prototype.getLabel = function(r, n) {
      return this.intervalStub.getLabel(r, n);
    }, e.type = "log", e.mapperMethods = {
      needTransform: function() {
        return !0;
      },
      normalize: function(r) {
        return this.intervalStub.normalize(Es(r, this.base));
      },
      scale: function(r) {
        return Rf(this.intervalStub.scale(r), this.base, null);
      },
      transformIn: function(r, n) {
        return r = Es(r, this.base), n && n.depth === Ru ? r : this.intervalStub.transformIn(r, n);
      },
      transformOut: function(r, n) {
        var i = n ? n.depth : null;
        return Yg.depth = i, Xg.lookup = this._lookup, Rf(i === Ru ? r : this.intervalStub.transformOut(r, Yg), this.base, Xg);
      },
      contain: function(r) {
        return this.powStub.contain(r);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(r, n) {
        this.setExtent2(qt, r, n);
      },
      setExtent2: function(r, n, i) {
        if (!(!fa(n, i) || n <= 0 || i <= 0)) {
          var a = $g, o = $g;
          if (r === qt) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(r, a[Ms] = n, a[Is] = i);
          var u = this.base;
          this.intervalStub.setExtent2(r, o[Ms] = Es(n, u), o[Is] = Es(i, u));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(r, n) {
        return fa(n[0], n[1]) && Ot(r) && r <= 0 && (r = n[0]), r;
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
    }, e;
  }(fr)
);
fr.registerClass(Vu);
var Yg = {}, Xg = {}, $g = [], JS = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, e1 = Me();
function KM(t) {
  var e = t.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (e == null || !_t(JS, e) && !fr.getClass(e)) && (e = "value"), e
  );
}
function jM(t, e, r) {
  var n;
  switch (e) {
    case "category":
      return new jS({
        ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
        extent: Xt()
      });
    case "time":
      return new QS({
        locale: t.ecModel.getLocaleModel(),
        useUTC: t.ecModel.get("useUTC"),
        breakOption: n
      });
    case "log":
      return new Vu({
        logBase: t.get("logBase"),
        breakOption: n
      });
    case "value":
      return new dn({
        breakOption: n
      });
    default:
      return new (fr.getClass(e) || dn)({});
  }
}
function QM(t, e, r) {
  var n = t.getExtentUnsafe(qt, null), i = n[0], a = n[1];
  return fa(i, a) ? i === e || a === e ? eI : i < e && a > e ? JM : _h : _h;
}
var JM = 1, eI = 2, _h = 3;
function tI(t) {
  e1(t).noOnMyZero = !0;
}
function rI(t) {
  return e1(t).noOnMyZero;
}
function Nl(t) {
  var e = t.getLabelModel().get("formatter");
  if (t.type === "time") {
    var r = cA(e);
    return function(i, a) {
      return t.scale.getFormattedLabel(i, a, r);
    };
  } else {
    if (j(e))
      return function(i) {
        var a = t.scale.getLabel(i), o = e.replace("{value}", a ?? "");
        return o;
      };
    if (ie(e)) {
      if (t.type === "category")
        return function(i, a) {
          return e(
            Fu(t, i),
            i.value - t.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var n = Ml();
      return function(i, a) {
        var o = null;
        return n && (o = n.makeAxisLabelFormatterParamBreak(o, i.break)), e(Fu(t, i), a, o);
      };
    } else
      return function(i) {
        return t.scale.getLabel(i);
      };
  }
}
function Fu(t, e) {
  var r = t.scale;
  return cr(r) ? r.getLabel(e) : e.value;
}
function sd(t) {
  var e = t.get("interval");
  return e ?? "auto";
}
function nI(t) {
  return t.type === "category" && sd(t.getLabelModel()) === 0;
}
function iI(t, e) {
  var r = {};
  return M(t.mapDimensionsAll(e), function(n) {
    r[GE(t, n)] = !0;
  }), de(r);
}
function ma(t) {
  return t === "middle" || t === "center";
}
function Oo(t) {
  return t.getShallow("show");
}
function aI(t, e, r) {
  var n = t.get("breaks", !0);
  if (n != null) {
    process.env.NODE_ENV !== "production" && _e('Must `import {AxisBreak} from "echarts/features.js"; use(AxisBreak);` first if using breaks option.');
    return;
  }
}
function t1(t, e, r, n, i, a) {
  var o = ga(t), s = o ? t.intervalStub : t;
  if (s.setExtent(n[0], n[1]), o) {
    var u = t.powStub, l = {
      depth: Ru
    }, f = t.transformOut(n[0], l), c = t.transformOut(n[1], l), h = FM(r, n);
    e[0] && !h[0] && (f = i[0]), e[1] && !h[1] && (c = i[1]), u.setExtent(f, c);
  }
  s.setConfig(a);
}
function Qo(t, e) {
  return cr(t) ? t.getRawOrdinalNumber(e.value) : e.value;
}
function r1(t, e) {
  return cr(t) && !!e.get("boundaryGap");
}
function Zg(t, e) {
  if (t.length === e.length) {
    for (var r = 0; r < t.length; r++)
      if (t[r] !== e[r])
        return;
    return !0;
  }
}
function qg(t) {
  for (var e = Xt(), r = Xt(), n = 0; n < t.length; ) {
    var i = t[n++], a = t[n++];
    Qt(i, a) || (Kc(e, i), Kc(r, a));
  }
  return [e, r];
}
function Kg(t, e) {
  var r = qg(t), n = r[0], i = r[1], a = qg(e), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(i[0] - s[0]), Math.abs(n[1] - o[1]), Math.abs(i[1] - s[1]));
}
function jg(t) {
  return Ee(t) ? t : t ? 0.5 : 0;
}
function oI(t, e, r) {
  if (r.valueDim == null)
    return [];
  for (var n = e.count(), i = Br(n * 2), a = 0; a < n; a++) {
    var o = FS(r, t, e, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function rn(t, e, r, n, i) {
  var a = r.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], u = 0, l = [], f = [], c = [], h = [];
  if (i) {
    for (u = 0; u < t.length; u += 2) {
      var v = e || t;
      Qt(v[u], v[u + 1]) || h.push(t[u], t[u + 1]);
    }
    t = h;
  }
  for (u = 0; u < t.length - 2; u += 2)
    switch (c[0] = t[u + 2], c[1] = t[u + 3], f[0] = t[u], f[1] = t[u + 1], s.push(f[0], f[1]), n) {
      case "end":
        l[o] = c[o], l[1 - o] = f[1 - o], s.push(l[0], l[1]);
        break;
      case "middle":
        var d = (f[o] + c[o]) / 2, p = [];
        l[o] = p[o] = d, l[1 - o] = f[1 - o], p[1 - o] = c[1 - o], s.push(l[0], l[1]), s.push(p[0], p[1]);
        break;
      default:
        l[o] = f[o], l[1 - o] = c[1 - o], s.push(l[0], l[1]);
    }
  return s.push(t[u++], t[u++]), s;
}
function sI(t, e) {
  var r = [], n = t.length, i, a;
  function o(f, c, h) {
    var v = f.coord, d = (h - v) / (c.coord - v), p = $T(d, [f.color, c.color]);
    return {
      coord: h,
      color: p
    };
  }
  for (var s = 0; s < n; s++) {
    var u = t[s], l = u.coord;
    if (l < 0)
      i = u;
    else if (l > e) {
      a ? r.push(o(a, u, e)) : i && r.push(o(i, u, 0), o(i, u, e));
      break;
    } else
      i && (r.push(o(i, u, 0)), i = null), r.push(u), a = u;
  }
  return r;
}
function uI(t, e, r) {
  var n = t.getVisual("visualMeta");
  if (!(!n || !n.length || !t.count())) {
    if (e.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = t.getDimensionInfo(n[o].dimension);
      if (i = s && s.coordDim, i === "x" || i === "y") {
        a = n[o];
        break;
      }
    }
    if (!a) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var u = e.getAxis(i), l = Q(a.stops, function(_) {
      return {
        coord: u.toGlobalCoord(u.dataToCoord(_.value)),
        color: _.color
      };
    }), f = l.length, c = a.outerColors.slice();
    f && l[0].coord > l[f - 1].coord && (l.reverse(), c.reverse());
    var h = sI(l, i === "x" ? r.getWidth() : r.getHeight()), v = h.length;
    if (!v && f)
      return l[0].coord < 0 ? c[1] ? c[1] : l[f - 1].color : c[0] ? c[0] : l[0].color;
    var d = 10, p = h[0].coord - d, g = h[v - 1].coord + d, m = g - p;
    if (m < 1e-3)
      return "transparent";
    M(h, function(_) {
      _.offset = (_.coord - p) / m;
    }), h.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: v ? h[v - 1].offset : 0.5,
      color: c[1] || "transparent"
    }), h.unshift({
      offset: v ? h[0].offset : 0.5,
      color: c[0] || "transparent"
    });
    var y = new L_(0, 0, 0, 0, h, !0);
    return y[i] = p, y[i + "2"] = g, y;
  }
}
function lI(t, e, r) {
  var n = t.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = r.getAxesByScale("ordinal")[0];
    if (a && !(i && fI(a, e))) {
      var o = e.mapDimension(a.dim), s = {};
      return M(a.getViewLabels(), function(u) {
        u.tick.offInterval || (s[Qo(a.scale, u.tick)] = 1);
      }), function(u) {
        return !s.hasOwnProperty(e.get(o, u));
      };
    }
  }
}
function fI(t, e) {
  var r = t.getExtent(), n = Math.abs(r[1] - r[0]) / t.scale.count();
  isNaN(n) && (n = 0);
  for (var i = e.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if (ed.getSymbolSize(
      e,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[t.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function cI(t) {
  for (var e = t.length / 2; e > 0 && Qt(t[e * 2 - 2], t[e * 2 - 1]); e--)
    ;
  return e - 1;
}
function Qg(t, e) {
  return [t[e * 2], t[e * 2 + 1]];
}
function hI(t, e, r) {
  for (var n = t.length / 2, i = r === "x" ? 0 : 1, a, o, s = 0, u = -1, l = 0; l < n; l++)
    if (o = t[l * 2 + i], !Qt(o, t[l * 2 + 1 - i])) {
      if (l === 0) {
        a = o;
        continue;
      }
      if (a <= e && o >= e || a >= e && o <= e) {
        u = l;
        break;
      }
      s = l, a = o;
    }
  return {
    range: [s, u],
    t: (e - a) / (o - a)
  };
}
function n1(t) {
  if (t.get(["endLabel", "show"]))
    return !0;
  for (var e = 0; e < er.length; e++)
    if (t.get([er[e], "endLabel", "show"]))
      return !0;
  return !1;
}
function kf(t, e, r, n) {
  if (WS(e, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, u = n1(n) ? function(v, d) {
      t._endLabelOnDuring(v, d, o, s, a, i, e);
    } : null, l = e.getBaseAxis().isHorizontal(), f = HS(e, r, n, function() {
      var v = t._endLabel;
      v && r && s.originalX != null && v.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, u);
    if (!n.get("clip", !0)) {
      var c = f.shape, h = Math.max(c.width, c.height);
      l ? (c.y -= h, c.height += h * 2) : (c.x -= h, c.width += h * 2);
    }
    return u && u(1, f), f;
  } else
    return process.env.NODE_ENV !== "production" && n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), US(e, r, n);
}
function vI(t, e) {
  var r = e.getBaseAxis(), n = r.isHorizontal(), i = r.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: t.get("align") || a,
      verticalAlign: t.get("verticalAlign") || o
    }
  };
}
var dI = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.init = function() {
      var r = new Qe(), n = new gM();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = r, this._changePolyState = Pe(this._changePolyState, this);
    }, e.prototype.render = function(r, n, i) {
      var a = r.coordinateSystem, o = this.group, s = r.getData(), u = r.getModel("lineStyle"), l = r.getModel("areaStyle"), f = s.getLayout("points") || [], c = a.type === "polar", h = this._coordSys, v = this._symbolDraw, d = this._polyline, p = this._polygon, g = this._lineGroup, m = !n.ssr && r.get("animation"), y = !l.isEmpty(), _ = l.get("origin"), S = VS(a, s, _), b = y && oI(a, s, S), w = r.get("showSymbol"), T = r.get("connectNulls"), x = w && !c && lI(r, s, a), D = this._data;
      D && D.eachItemGraphicEl(function(he, Se) {
        he.__temp && (o.remove(he), D.setItemGraphicEl(Se, null));
      }), w || v.remove(), o.add(g);
      var C = c ? !1 : r.get("step"), E;
      a && a.getArea && r.get("clip", !0) && (E = a.getArea(), E.width != null ? (E.x -= 0.1, E.y -= 0.1, E.width += 0.2, E.height += 0.2) : E.r0 && (E.r0 -= 0.5, E.r += 0.5)), this._clipShapeForSymbol = E;
      var L = uI(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && h.type === a.type && C === this._step))
        w && v.updateData(s, {
          isIgnore: x,
          clipShape: E,
          disableAnimation: !0,
          getSymbolPoint: function(he) {
            return [f[he * 2], f[he * 2 + 1]];
          }
        }), m && this._initSymbolLabelAnimation(s, a, E), C && (b && (b = rn(b, f, a, C, T)), f = rn(f, null, a, C, T)), d = this._newPolyline(f), y ? p = this._newPolygon(f, b) : p && (g.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(r, a, gi(L)), g.setClipPath(kf(this, a, !0, r));
      else {
        y && !p ? p = this._newPolygon(f, b) : p && !y && (g.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(r, a, gi(L));
        var A = g.getClipPath();
        if (A) {
          var P = kf(this, a, !1, r);
          jt(A, {
            shape: P.shape
          }, r);
        } else
          g.setClipPath(kf(this, a, !0, r));
        w && v.updateData(s, {
          isIgnore: x,
          clipShape: E,
          disableAnimation: !0,
          getSymbolPoint: function(he) {
            return [f[he * 2], f[he * 2 + 1]];
          }
        }), (!Zg(this._stackedOnPoints, b) || !Zg(this._points, f)) && (m ? this._doUpdateAnimation(s, b, a, i, C, _, T) : (C && (b && (b = rn(b, f, a, C, T)), f = rn(f, null, a, C, T)), d.setShape({
          points: f
        }), p && p.setShape({
          points: f,
          stackedOnPoints: b
        })));
      }
      var O = r.getModel("emphasis"), N = O.get("focus"), B = O.get("blurScope"), R = O.get("disabled");
      if (d.useStyle(Ae(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: L,
          lineJoin: "bevel"
        }
      )), Mu(d, r, "lineStyle"), d.style.lineWidth > 0 && r.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var F = d.getState("emphasis").style;
        F.lineWidth = +d.style.lineWidth + 1;
      }
      ge(d).seriesIndex = r.seriesIndex, Do(d, N, B, R);
      var G = jg(r.get("smooth")), H = r.get("smoothMonotone");
      if (d.setShape({
        smooth: G,
        smoothMonotone: H,
        connectNulls: T
      }), p) {
        var Y = s.getCalculationInfo("stackedOnSeries"), q = 0;
        p.useStyle(Ae(l.getAreaStyle(), {
          fill: L,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), Y && (q = jg(Y.get("smooth"))), p.setShape({
          smooth: G,
          stackedOnSmooth: q,
          smoothMonotone: H,
          connectNulls: T
        }), Mu(p, r, "areaStyle"), ge(p).seriesIndex = r.seriesIndex, Do(p, N, B, R);
      }
      var W = this._changePolyState;
      s.eachItemGraphicEl(function(he) {
        he && (he.onHoverStateChange = W);
      }), this._polyline.onHoverStateChange = W, this._data = s, this._coordSys = a, this._stackedOnPoints = b, this._points = f, this._step = C, this._valueOrigin = _;
      var ne = r.get("triggerEvent"), se = r.get("triggerLineEvent");
      process.env.NODE_ENV !== "production" && se && IM("triggerLineEvent", "Use the `triggerEvent` option instead.");
      var Oe = se === !0 || ne === !0 || ne === "line", Ie = se === !0 || ne === !0 || ne === "area";
      this.packEventData(r, d, Oe), p && this.packEventData(r, p, Ie);
    }, e.prototype.packEventData = function(r, n, i) {
      ge(n).eventData = i ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: r.componentIndex,
        seriesIndex: r.seriesIndex,
        seriesName: r.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: n === this._polygon ? "area" : "line"
      } : null;
    }, e.prototype.highlight = function(r, n, i, a) {
      var o = r.getData(), s = di(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var u = o.getLayout("points"), l = o.getItemGraphicEl(s);
        if (!l) {
          var f = u[s * 2], c = u[s * 2 + 1];
          if (Qt(f, c) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, c))
            return;
          var h = r.get("zlevel") || 0, v = r.get("z") || 0;
          l = new ed(o, s), l.x = f, l.y = c, l.setZ(h, v);
          var d = l.getSymbolPath().getTextContent();
          d && (d.zlevel = h, d.z = v, d.z2 = this._polyline.z2 + 1), l.__temp = !0, o.setItemGraphicEl(s, l), l.stopSymbolAnimation(!0), this.group.add(l);
        }
        l.highlight();
      } else
        Jt.prototype.highlight.call(this, r, n, i, a);
    }, e.prototype.downplay = function(r, n, i, a) {
      var o = r.getData(), s = di(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var u = o.getItemGraphicEl(s);
        u && (u.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(u)) : u.downplay());
      } else
        Jt.prototype.downplay.call(this, r, n, i, a);
    }, e.prototype._changePolyState = function(r) {
      var n = this._polygon;
      Xp(this._polyline, r), n && Xp(n, r);
    }, e.prototype._newPolyline = function(r) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new wM({
        shape: {
          points: r
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, e.prototype._newPolygon = function(r, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new xM({
        shape: {
          points: r,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, e.prototype._initSymbolLabelAnimation = function(r, n, i) {
      var a, o, s = n.getBaseAxis(), u = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var l = r.hostModel, f = l.get("animationDuration");
      ie(f) && (f = f(null));
      var c = l.get("animationDelay") || 0, h = ie(c) ? c(null) : c;
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
          var x = ie(c) ? c(d) : f * T + h, D = p.getSymbolPath(), C = D.getTextContent();
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
    }, e.prototype._initOrUpdateEndLabel = function(r, n, i) {
      var a = r.getModel("endLabel");
      if (n1(r)) {
        var o = r.getData(), s = this._polyline, u = o.getLayout("points");
        if (!u) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var l = this._endLabel;
        l || (l = this._endLabel = new at({
          z2: 200
          // should be higher than item symbol
        }), l.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = cI(u);
        f >= 0 && (qo(s, Ko(r, "endLabel"), {
          inheritColor: i,
          labelFetcher: r,
          labelDataIndex: f,
          defaultText: function(c, h, v) {
            return v != null ? BS(o, v) : Jv(o, c);
          },
          enableTextSetter: !0
        }, vI(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, e.prototype._endLabelOnDuring = function(r, n, i, a, o, s, u) {
      var l = this._endLabel, f = this._polyline;
      if (l) {
        r < 1 && a.originalX == null && (a.originalX = l.x, a.originalY = l.y);
        var c = i.getLayout("points"), h = i.hostModel, v = h.get("connectNulls"), d = s.get("precision"), p = s.get("distance") || 0, g = u.getBaseAxis(), m = g.isHorizontal(), y = g.inverse, _ = n.shape, S = y ? m ? _.x : _.y + _.height : m ? _.x + _.width : _.y, b = (m ? p : 0) * (y ? -1 : 1), w = (m ? 0 : -p) * (y ? -1 : 1), T = m ? "x" : "y", x = hI(c, S, T), D = x.range, C = D[1] - D[0], E = void 0;
        if (C >= 1) {
          if (C > 1 && !v) {
            var L = Qg(c, D[0]);
            l.attr({
              x: L[0] + b,
              y: L[1] + w
            }), o && (E = h.getRawValue(D[0]));
          } else {
            var L = f.getPointOn(S, T);
            L && l.attr({
              x: L[0] + b,
              y: L[1] + w
            });
            var A = h.getRawValue(D[0]), P = h.getRawValue(D[1]);
            o && (E = pC(i, d, A, P, x.t));
          }
          a.lastFrameIndex = D[0];
        } else {
          var O = r === 1 || a.lastFrameIndex > 0 ? D[0] : 0, L = Qg(c, O);
          o && (E = h.getRawValue(O)), l.attr({
            x: L[0] + b,
            y: L[1] + w
          });
        }
        if (o) {
          var N = Dl(l);
          typeof N.setLabelText == "function" && N.setLabelText(E);
        }
      }
    }, e.prototype._doUpdateAnimation = function(r, n, i, a, o, s, u) {
      var l = this._polyline, f = this._polygon, c = r.hostModel, h = bM(this._data, r, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), v = h.current, d = h.stackedOnCurrent, p = h.next, g = h.stackedOnNext;
      if (o && (d = rn(h.stackedOnCurrent, h.current, i, o, u), v = rn(h.current, null, i, o, u), g = rn(h.stackedOnNext, h.next, i, o, u), p = rn(h.next, null, i, o, u)), Kg(v, p) > 3e3 || f && Kg(d, g) > 3e3) {
        l.stopAnimation(), l.setShape({
          points: p
        }), f && (f.stopAnimation(), f.setShape({
          points: p,
          stackedOnPoints: g
        }));
        return;
      }
      l.shape.__points = h.current, l.shape.points = v;
      var m = {
        shape: {
          points: p
        }
      };
      h.current !== v && (m.shape.__points = h.next), l.stopAnimation(), wt(l, m, c), f && (f.setShape({
        // Reuse the points with polyline.
        points: v,
        stackedOnPoints: d
      }), f.stopAnimation(), wt(f, {
        shape: {
          stackedOnPoints: g
        }
      }, c), l.shape.points !== f.shape.points && (f.shape.points = l.shape.points));
      for (var y = [], _ = h.status, S = 0; S < _.length; S++) {
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
    }, e.prototype.remove = function(r) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, e.type = "line", e;
  }(Jt)
);
function pI(t, e) {
  return {
    seriesType: t,
    plan: rd(),
    reset: function(r) {
      var n = r.getData(), i = r.coordinateSystem;
      if (r.pipelineContext, !!i) {
        var a = Q(i.dimensions, function(c) {
          return n.mapDimension(c);
        }).slice(0, 2), o = a.length, s = n.getCalculationInfo("stackResultDimension");
        da(n, a[0]) && (a[0] = s), da(n, a[1]) && (a[1] = s);
        var u = n.getStore(), l = n.getDimensionIndex(a[0]), f = n.getDimensionIndex(a[1]);
        return o && {
          progress: function(c, h) {
            for (var v = c.end - c.start, d = Br(v * o), p = [], g = [], m = c.start, y = 0; m < c.end; m++) {
              var _ = void 0;
              if (o === 1) {
                var S = u.get(l, m);
                _ = i.dataToPoint(S, null, g);
              } else
                p[0] = u.get(l, m), p[1] = u.get(f, m), _ = i.dataToPoint(p, null, g);
              d[y++] = _[0], d[y++] = _[1];
            }
            h.setLayout("points", d), h.setLayout("pointsRange", {
              start: c.start,
              end: c.end
            });
          }
        };
      }
    }
  };
}
var gI = {
  average: function(t) {
    for (var e = 0, r = 0, n = 0; n < t.length; n++)
      isNaN(t[n]) || (e += t[n], r++);
    return r === 0 ? NaN : e / r;
  },
  sum: function(t) {
    for (var e = 0, r = 0; r < t.length; r++)
      e += t[r] || 0;
    return e;
  },
  max: function(t) {
    for (var e = -1 / 0, r = 0; r < t.length; r++)
      t[r] > e && (e = t[r]);
    return isFinite(e) ? e : NaN;
  },
  min: function(t) {
    for (var e = 1 / 0, r = 0; r < t.length; r++)
      t[r] < e && (e = t[r]);
    return isFinite(e) ? e : NaN;
  },
  // TODO
  // Median
  nearest: function(t) {
    return t[0];
  }
}, mI = function(t) {
  return Math.round(t.length / 2);
};
function i1(t) {
  return {
    seriesType: t,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(e, r, n) {
      var i = e.getData(), a = e.get("sampling"), o = e.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), c = n.getDevicePixelRatio(), h = Math.abs(f[1] - f[0]) * (c || 1), v = Math.round(s / h);
        if (isFinite(v) && v > 1) {
          a === "lttb" ? e.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / v)) : a === "minmax" && e.setData(i.minmaxDownSample(i.mapDimension(l.dim), 1 / v));
          var d = void 0;
          j(a) ? d = gI[a] : ie(a) && (d = a), d && e.setData(i.downSample(i.mapDimension(l.dim), 1 / v, d, mI));
        }
      }
    }
  };
}
function yI(t) {
  t.registerChartView(dI), t.registerSeriesModel(dM), t.registerLayout(pI("line")), t.registerVisual({
    seriesType: "line",
    reset: function(e) {
      var r = e.getData(), n = e.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = r.getVisual("style").fill), r.setVisual("legendLineStyle", n);
    }
  }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, i1("line"));
}
var _I = Me(), yo = Me(), or = {
  estimate: 1,
  determine: 2
};
function zu(t) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: t
  };
}
function SI(t, e) {
  var r = t.getLabelModel().get("customValues");
  if (r) {
    var n = t.scale;
    return {
      labels: Q(a1(r, n), function(i, a) {
        return {
          formattedLabel: Nl(t)(i, a),
          rawLabel: n.getLabel(i),
          tick: i
        };
      })
    };
  }
  return t.type === "category" ? wI(t, e) : xI(t);
}
function bI(t, e, r) {
  var n = t.scale, i = t.getTickModel().get("customValues");
  return i ? {
    ticks: a1(i, n)
  } : t.type === "category" ? TI(t, e) : {
    ticks: n.getTicks(r)
  };
}
function a1(t, e) {
  var r = e.getExtent(), n = [];
  return M(t, function(i) {
    i = e.parse(i), i >= r[0] && i <= r[1] && n.push(i);
  }), pv(n, bC, null), lv(n), Q(n, function(i) {
    return {
      value: i
    };
  });
}
function wI(t, e) {
  var r = t.getLabelModel(), n = o1(t, r, e);
  return !r.get("show") || t.scale.isBlank() ? {
    labels: []
  } : n;
}
function o1(t, e, r) {
  var n = DI(t), i = sd(e), a = r.kind === or.estimate;
  if (!a) {
    var o = u1(n, i);
    if (o)
      return o;
  }
  var s, u;
  ie(i) ? s = Gu(t, i, !1) : (u = i === "auto" ? EI(t, r) : i, s = Gu(t, u, !1));
  var l = {
    labels: s,
    labelCategoryInterval: u
  };
  return a ? r.out.noPxChangeTryDetermine.push(function() {
    return Sh(n, i, l), !0;
  }) : Sh(n, i, l), l;
}
function TI(t, e) {
  var r = CI(t), n = sd(e), i = u1(r, n);
  if (i)
    return i;
  var a, o;
  if ((!e.get("show") || t.scale.isBlank()) && (a = []), ie(n))
    a = Gu(t, n, !0);
  else if (n === "auto") {
    var s = o1(t, t.getLabelModel(), zu(or.determine));
    o = s.labelCategoryInterval, a = Q(s.labels, function(u) {
      return u.tick;
    });
  } else
    o = n, a = Gu(t, o, !0);
  return Sh(r, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function xI(t) {
  var e = t.scale.getTicks(), r = Nl(t);
  return {
    labels: Q(e, function(n, i) {
      return {
        formattedLabel: r(n, i),
        rawLabel: t.scale.getLabel(n),
        tick: n
      };
    })
  };
}
var CI = s1("axisTick"), DI = s1("axisLabel");
function s1(t) {
  return function(r) {
    return yo(r)[t] || (yo(r)[t] = {
      list: []
    });
  };
}
function u1(t, e) {
  for (var r = 0; r < t.list.length; r++)
    if (t.list[r].key === e)
      return t.list[r].value;
}
function Sh(t, e, r) {
  return t.list.push({
    key: e,
    value: r
  }), r;
}
function EI(t, e) {
  if (e.kind === or.estimate) {
    var r = t.calculateCategoryInterval(e);
    return e.out.noPxChangeTryDetermine.push(function() {
      return yo(t).autoInterval = r, !0;
    }), r;
  }
  var n = yo(t).autoInterval;
  return n ?? (yo(t).autoInterval = t.calculateCategoryInterval(e));
}
function AI(t, e) {
  var r = e.kind, n = II(t), i = Nl(t), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = t.scale, s = o.getExtent(), u = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var l = 1, f = 40;
  u > f && (l = Math.max(1, Math.floor(u / f)));
  for (var c = s[0], h = t.dataToCoord(c + 1) - t.dataToCoord(c), v = Math.abs(h * Math.cos(a)), d = Math.abs(h * Math.sin(a)), p = 0, g = 0; c <= s[1]; c += l) {
    var m = 0, y = 0, _ = D0(i({
      value: c
    }), n.font, "center", "top");
    m = _.width * 1.3, y = _.height * 1.3, p = Math.max(p, m, 7), g = Math.max(g, y, 7);
  }
  var S = p / v, b = g / d;
  isNaN(S) && (S = 1 / 0), isNaN(b) && (b = 1 / 0);
  var w = Math.max(0, Math.floor(Math.min(S, b)));
  if (r === or.estimate)
    return e.out.noPxChangeTryDetermine.push(Pe(MI, null, t, w, u)), w;
  var T = l1(t, w, u);
  return T ?? w;
}
function MI(t, e, r) {
  return l1(t, e, r) == null;
}
function l1(t, e, r) {
  var n = _I(t.model), i = t.getExtent(), a = n.lastAutoInterval, o = n.lastTickCount;
  if (a != null && o != null && Math.abs(a - e) <= 1 && Math.abs(o - r) <= 1 && a > e && n.axisExtent0 === i[0] && n.axisExtent1 === i[1])
    return a;
  n.lastTickCount = r, n.lastAutoInterval = e, n.axisExtent0 = i[0], n.axisExtent1 = i[1];
}
function II(t) {
  var e = t.getLabelModel();
  return {
    axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
    labelRotate: e.get("rotate") || 0,
    font: e.getFont()
  };
}
function Gu(t, e, r) {
  var n = Nl(t), i = t.scale, a = [], o = ie(e);
  return KS(i, o ? 0 : e, function(s, u) {
    var l = i.getLabel(s);
    if (o) {
      var f = !!e(s.value, l);
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
var Rl = Me();
function LI(t) {
  Rl(t).prepare = {};
}
function PI(t) {
  Rl(t).fullUpdate = {};
}
function OI(t) {
  return Rl(t).prepare;
}
function Ta(t) {
  return Rl(t).fullUpdate;
}
var NI = l_(), Hu = "|&", xa = Me(), f1 = -2, RI = -1, kI = Me(), Si;
process.env.NODE_ENV !== "production" && (Si = function(t) {
  k(t && t.model && t.model.uid && t.model.ecModel);
});
function ud(t, e) {
  var r = t.model, n = xa(Ta(r.ecModel)).keyed, i = n && n.get(e);
  return i && i.get(r.uid);
}
function BI(t, e) {
  return process.env.NODE_ENV !== "production" && (k(e != null), Si(t)), h1(ud(t, e));
}
function VI(t, e) {
  process.env.NODE_ENV !== "production" && Si(t);
  var r = [];
  return c1(t.model.ecModel, function(n) {
    for (var i = 0; i < e.length; i++)
      e[i] && n.serByIdx[e[i].seriesIndex] && r.push(h1(n));
  }), r;
}
function c1(t, e) {
  var r = xa(Ta(t)).keyed;
  r && r.each(function(n, i) {
    n.each(function(a, o) {
      e(a, i, o);
    });
  });
}
function h1(t) {
  return {
    liPosMinGap: t ? t.liPosMinGap : void 0
  };
}
function FI(t, e) {
  process.env.NODE_ENV !== "production" && Si(t);
  var r = t.model.ecModel, n = xa(Ta(r)).axSer;
  n && ld(r, n.get(t.model.uid), e);
}
function v1(t, e, r) {
  process.env.NODE_ENV !== "production" && (k(e != null), Si(t));
  var n = ud(t, e);
  n && ld(t.model.ecModel, n.sers, r);
}
function ld(t, e, r) {
  if (e)
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      t.isSeriesFiltered(i) || r(i);
    }
}
function zI(t, e, r) {
  process.env.NODE_ENV !== "production" && k(e != null);
  var n = xa(Ta(t)).keyed, i = n && n.get(e);
  i && i.each(function(a) {
    process.env.NODE_ENV !== "production" && k(a.sers.length > 0), r(a.axis);
  });
}
function d1(t, e) {
  process.env.NODE_ENV !== "production" && Si(t);
  var r = t.model, n = xa(Ta(r.ecModel)).keys;
  n && M(n.get(r.uid), function(i) {
    if (process.env.NODE_ENV !== "production") {
      var a = ud(t, i);
      k(a && a.sers.length > 0);
    }
    e(i);
  });
}
function GI(t) {
  var e = kI(OI(t)), r = e.keyed || (e.keyed = re());
  c1(t, function(n, i, a) {
    var o = r.get(i) || r.set(i, re()), s = o.get(a) || o.set(a, {});
    n.metrics.liPosMinGap && p1.liPosMinGap(t, n, s);
  });
}
function HI(t, e) {
  p1[t] = e;
}
var p1 = {};
function Jg(t, e, r) {
  if (t) {
    var n = e.ecModel, i = xa(Ta(n)), a = t.model.uid;
    if (process.env.NODE_ENV !== "production") {
      Si(t);
      var o = i.axSerPairCheck || (i.axSerPairCheck = re()), s = "" + a + Hu + e.uid;
      k(!o.get(s)), o.set(s, 1);
    }
    var u = i.axSer || (i.axSer = re()), l = u.get(a) || u.set(a, []);
    if (process.env.NODE_ENV !== "production") {
      var f = l[l.length - 1];
      f && k(f.seriesIndex < e.seriesIndex);
    }
    l.push(e);
    var c = e.subType, h = e.getBaseAxis() === t, v = Uu.get(bh(c, h, r)) || Uu.get(bh(c, h, null));
    if (v) {
      var d = i.keyed || (i.keyed = re()), p = i.keys || (i.keys = re()), g = v.key, m = d.get(g) || d.set(g, re()), y = m.get(a);
      y || (y = m.set(a, {
        axis: t,
        sers: [],
        serByIdx: []
      }), y.metrics = v.getMetrics(t), (p.get(a) || p.set(a, [])).push(g)), y.sers.push(e), y.serByIdx[e.seriesIndex] = e;
    }
  }
}
function bh(t, e, r) {
  return t + Hu + K(e, !0) + Hu + (r || "");
}
function UI(t, e) {
  var r = bh(e.seriesType, e.baseAxis, e.coordSysType);
  process.env.NODE_ENV !== "production" && (k(e.seriesType && e.key && !wh.get(e.key) && !Uu.get(r)), wh.set(e.key, 1)), Uu.set(r, e), NI(t, function() {
    t.registerProcessor(t.PRIORITY.PROCESSOR.AXIS_STATISTICS, {
      // NOTE: Theoretically, `appendData` requires `dirtyOnOverallProgress: true` here to re-calculate them.
      // But this OVERALL_STAGE_TASK is applied to all series (no `getTargetSeries` specified),
      // `dirtyOnOverallProgress: true` can cause irrelevant series (e.g., series on geo)
      // to be re-rendered when `appendData` is called, which cause `appendData` meaningless,
      // thereby not setting `dirtyOnOverallProgress: true`.
      overallReset: GI
    });
  });
}
var wh;
process.env.NODE_ENV !== "production" && (wh = re());
var Uu = re(), WI = 0.8;
function Ca(t, e) {
  e = e || {};
  var r = {
    w: NaN,
    w2: NaN
  }, n = t.scale, i = e.fromStat, a = e.min, o = RM(n);
  Ot(o) || (o = NaN);
  var s = t.getExtent(), u = $e(s[1] - s[0]);
  return cr(n) ? YI(r, t, o, u) : i ? XI(r, t, o, u, i) : a == null && process.env.NODE_ENV !== "production" && k(!1), a != null && (r.w = Ot(r.w) ? ye(a, r.w) : a), r;
}
function YI(t, e, r, n) {
  var i = e.onBand, a = r + (i ? 1 : 0);
  a === 0 && (a = 1), t.w = n / a, !i && r && n && (t.w2 = t.w * r / n);
}
function XI(t, e, r, n, i) {
  process.env.NODE_ENV !== "production" && k(i);
  var a = !1, o = -1 / 0;
  M(i.key ? [BI(e, i.key)] : VI(e, i.sers || []), function(s) {
    var u = s.liPosMinGap;
    u != null && (u > 0 ? (u > o && (o = u), a = !1) : u === f1 && (a = !0));
  }), Ot(r) && r > 0 && Ot(o) ? (t.w = n / r * o, t.w2 = o) : a && (t.w = n * WI, t.w2 = t.w * r / n);
}
var em = [0, 1], $I = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.onBand = !1, this.inverse = !1, this.dim = e, this.scale = r, this._extent = n || [0, 0];
    }
    return t.prototype.contain = function(e) {
      var r = this._extent, n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
      return e >= n && e <= i;
    }, t.prototype.containData = function(e) {
      return this.scale.contain(this.scale.parse(e));
    }, t.prototype.getExtent = function() {
      return this._extent.slice();
    }, t.prototype.setExtent = function(e, r) {
      var n = this._extent;
      n[0] = e, n[1] = r;
    }, t.prototype.dataToCoord = function(e, r) {
      var n = this.scale;
      return e = n.normalize(n.parse(e)), $c(e, em, tm(this), r);
    }, t.prototype.coordToData = function(e, r) {
      var n = $c(e, tm(this), em, r);
      return this.scale.scale(n);
    }, t.prototype.pointToData = function(e, r) {
    }, t.prototype.getTicksCoords = function(e) {
      e = e || {};
      var r = e.tickModel || this.getTickModel(), n = bI(this, r, {
        breakTicks: e.breakTicks,
        pruneByBreak: e.pruneByBreak
      }), i = Q(n.ticks, function(s) {
        return {
          coord: this.dataToCoord(Qo(this.scale, s)),
          tick: s
        };
      }, this), a = r.get("alignWithLabel"), o = ZI(this, i, a);
      return Q(i, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, t.prototype.getMinorTicksCoords = function() {
      if (cr(this.scale))
        return [];
      var e = this.model.getModel("minorTick"), r = e.get("splitNumber");
      r > 0 && r < 100 || (r = 5);
      var n = this.scale.getMinorTicks(r), i = Q(n, function(a) {
        return Q(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, t.prototype.getViewLabels = function(e) {
      return e = e || zu(or.determine), SI(this, e).labels;
    }, t.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, t.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, t.prototype.getBandWidth = function() {
      return Ca(this, {
        min: 1
      }).w;
    }, t.prototype.calculateCategoryInterval = function(e) {
      return e = e || zu(or.determine), AI(this, e);
    }, t;
  }()
);
function tm(t) {
  var e = t.getExtent();
  if (t.onBand) {
    var r = e[1] - e[0], n = r / t.scale.count() / 2;
    e[0] += n, e[1] -= n;
  }
  return e;
}
function ZI(t, e, r) {
  var n = e.length;
  if (!t.onBand || r || !n)
    return !1;
  var i = Ca(t).w;
  if (!i)
    return !1;
  M(e, function(s) {
    s.coord -= i / 2;
  });
  var a = t.scale.getExtent(), o = e[n - 1];
  return o.tick.offInterval && e.pop(), e.push({
    coord: o.coord + i,
    tick: {
      value: a[1] + 1
    }
  }), !0;
}
var g1 = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r, n, i, a, o) {
      var s = t.call(this, r, n, i) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return e.prototype.isHorizontal = function() {
      var r = this.position;
      return r === "top" || r === "bottom";
    }, e.prototype.getGlobalExtent = function(r) {
      var n = this.getExtent();
      return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), r && n[0] > n[1] && n.reverse(), n;
    }, e.prototype.pointToData = function(r, n) {
      return this.coordToData(this.toLocalCoord(r[this.dim === "x" ? 0 : 1]), n);
    }, e.prototype.setCategorySortInfo = function(r) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = r, this.scale.setSortInfo(r);
    }, e;
  }($I)
), rm = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], qI = 1, Wu = 2, m1 = qI | Wu;
function Yu(t, e, r) {
  r = r || m1, e ? t.dirty |= r : t.dirty &= ~r;
}
function y1(t, e) {
  return e = e || m1, t.dirty == null || !!(t.dirty & e);
}
function Tn(t) {
  if (t)
    return y1(t) && _1(t, t.label, t), t;
}
function _1(t, e, r) {
  var n = e.getComputedTransform();
  t.transform = Ov(t.transform, n);
  var i = t.localRect = Ao(t.localRect, e.getBoundingRect()), a = e.style, o = a.margin, s = r && r.marginForce, u = r && r.minMarginForce, l = r && r.marginDefault, f = a.__marginType;
  f == null && l && (o = l, f = qi.textMargin);
  for (var c = 0; c < 4; c++)
    Bf[c] = f === qi.minMargin && u && u[c] != null ? u[c] : s && s[c] != null ? s[c] : o ? o[c] : 0;
  f === qi.textMargin && Lu(i, Bf, !1, !1);
  var h = t.rect = Ao(t.rect, i);
  return n && h.applyTransform(n), f === qi.minMargin && Lu(h, Bf, !1, !1), t.axisAligned = Pv(n), (t.label = t.label || {}).ignore = e.ignore, Yu(t, !1), Yu(t, !0, Wu), t;
}
var Bf = [0, 0, 0, 0];
function KI(t, e, r) {
  return t.transform = Ov(t.transform, r), t.localRect = Ao(t.localRect, e), t.rect = Ao(t.rect, e), r && t.rect.applyTransform(r), t.axisAligned = Pv(r), t.obb = void 0, (t.label = t.label || {}).ignore = !1, t;
}
function jI(t, e) {
  if (t) {
    t.label.x += e.x, t.label.y += e.y, t.label.markRedraw();
    var r = t.transform;
    r && (r[4] += e.x, r[5] += e.y);
    var n = t.rect;
    n && (n.x += e.x, n.y += e.y);
    var i = t.obb;
    i && i.fromBoundingRect(t.localRect, r);
  }
}
function nm(t, e) {
  for (var r = 0; r < rm.length; r++) {
    var n = rm[r];
    t[n] == null && (t[n] = e[n]);
  }
  return Tn(t);
}
function im(t) {
  var e = t.obb;
  return (!e || y1(t, Wu)) && (t.obb = e = e || new P_(), e.fromBoundingRect(t.localRect, t.transform), Yu(t, !1, Wu)), e;
}
function QI(t, e, r, n, i) {
  var a = t.length, o = on[e], s = ha[e];
  if (a < 2)
    return !1;
  t.sort(function(T, x) {
    return T.rect[o] - x.rect[o];
  });
  for (var u = 0, l, f = !1, c = 0; c < a; c++) {
    var h = t[c], v = h.rect;
    l = v[o] - u, l < 0 && (v[o] -= l, h.label[o] -= l, f = !0), u = v[o] + v[s];
  }
  var d = t[0], p = t[a - 1], g, m;
  y(), g < 0 && b(-g, 0.8), m < 0 && b(m, 0.8), y(), _(g, m, 1), _(m, g, -1), y(), g < 0 && w(-g), m < 0 && w(m);
  function y() {
    g = d.rect[o] - r, m = n - p.rect[o] - p.rect[s];
  }
  function _(T, x, D) {
    if (T < 0) {
      var C = Math.min(x, -T);
      if (C > 0) {
        S(C * D, 0, a);
        var E = C + T;
        E < 0 && b(-E * D, 1);
      } else
        b(-T * D, 1);
    }
  }
  function S(T, x, D) {
    T !== 0 && (f = !0);
    for (var C = x; C < D; C++) {
      var E = t[C], L = E.rect;
      L[o] += T, E.label[o] += T;
    }
  }
  function b(T, x) {
    for (var D = [], C = 0, E = 1; E < a; E++) {
      var L = t[E - 1].rect, A = Math.max(t[E].rect[o] - L[o] - L[s], 0);
      D.push(A), C += A;
    }
    if (C) {
      var P = Math.min(Math.abs(T) / C, x);
      if (T > 0)
        for (var E = 0; E < a - 1; E++) {
          var O = D[E] * P;
          S(O, 0, E + 1);
        }
      else
        for (var E = a - 1; E > 0; E--) {
          var O = D[E - 1] * P;
          S(-O, E, a);
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
function JI(t) {
  var e = [];
  t.sort(function(l, f) {
    return (f.suggestIgnore ? 1 : 0) - (l.suggestIgnore ? 1 : 0) || f.priority - l.priority;
  });
  function r(l) {
    if (!l.ignore) {
      var f = l.ensureState("emphasis");
      f.ignore == null && (f.ignore = !1);
    }
    l.ignore = !0;
  }
  for (var n = 0; n < t.length; n++) {
    var i = Tn(t[n]);
    if (!i.label.ignore) {
      for (var a = i.label, o = i.labelLine, s = !1, u = 0; u < e.length; u++)
        if (fd(i, e[u], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (r(a), o && r(o)) : e.push(i);
    }
  }
}
function fd(t, e, r, n) {
  return !t || !e || t.label && t.label.ignore || e.label && e.label.ignore || !t.rect.intersect(e.rect, r, n) ? !1 : t.axisAligned && e.axisAligned ? !0 : im(t).intersect(im(e), r, n);
}
var eL = null;
function tL() {
  return eL;
}
var rL = "expandAxisBreak", ln = Math.PI, nL = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], iL = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], ya = Me(), S1 = Me(), b1 = (
  /** @class */
  function() {
    function t(e) {
      this.recordMap = {}, this.resolveAxisNameOverlap = e;
    }
    return t.prototype.ensureRecord = function(e) {
      var r = e.axis.dim, n = e.componentIndex, i = this.recordMap, a = i[r] || (i[r] = []);
      return a[n] || (a[n] = {
        ready: {}
      });
    }, t;
  }()
);
function aL(t, e, r, n) {
  var i = r.axis, a = e.ensureRecord(r), o = [], s, u = cd(t.axisName) && ma(t.nameLocation);
  M(n, function(d) {
    var p = Tn(d);
    if (!(!p || p.label.ignore)) {
      o.push(p);
      var g = a.transGroup;
      u && (g.transform ? zo(Va, g.transform) : Fo(Va), p.transform && oo(Va, Va, p.transform), ae.copy(Ls, p.localRect), Ls.applyTransform(Va), s ? s.union(Ls) : ae.copy(s = new ae(0, 0, 0, 0), Ls));
    }
  });
  var l = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[l];
  if (o.sort(function(d, p) {
    return Math.abs(d.label[l] - f) - Math.abs(p.label[l] - f);
  }), u && s) {
    var c = i.getExtent(), h = Math.min(c[0], c[1]), v = Math.max(c[0], c[1]) - h;
    s.union(new ae(h, 0, v, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var Va = wr(), Ls = new ae(0, 0, 0, 0), w1 = function(t, e, r, n, i, a) {
  if (ma(t.nameLocation)) {
    var o = a.stOccupiedRect;
    o && T1(KI({}, o, a.transGroup.transform), n, i);
  } else
    x1(a.labelInfoList, a.dirVec, n, i);
};
function T1(t, e, r) {
  var n = new ue();
  fd(t, e, n, {
    direction: Math.atan2(r.y, r.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && jI(e, n);
}
function x1(t, e, r, n) {
  for (var i = ue.dot(n, e) >= 0, a = 0, o = t.length; a < o; a++) {
    var s = t[i ? a : o - 1 - a];
    s.label.ignore || T1(s, r, n);
  }
}
var pn = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.group = new Qe(), this._axisModel = e, this._api = r, this._local = {}, this._shared = i || new b1(w1), this._resetCfgDetermined(n);
    }
    return t.prototype.updateCfg = function(e) {
      if (process.env.NODE_ENV !== "production") {
        var r = this._shared.ensureRecord(this._axisModel).ready;
        k(!r.axisLine && !r.axisTickLabelDetermine), r.axisName = r.axisTickLabelEstimate = !1;
      }
      var n = this._cfg.raw;
      n.position = e.position, n.labelOffset = e.labelOffset, this._resetCfgDetermined(n);
    }, t.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, t.prototype._resetCfgDetermined = function(e) {
      var r = this._axisModel, n = r.getDefaultOption ? r.getDefaultOption() : {}, i = K(e.axisName, r.get("name")), a = r.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = K(e.defaultNameMoveOverlap, !0));
      var o = {
        raw: e,
        position: e.position,
        rotation: e.rotation,
        nameDirection: K(e.nameDirection, 1),
        tickDirection: K(e.tickDirection, 1),
        labelDirection: K(e.labelDirection, 1),
        labelOffset: K(e.labelOffset, 0),
        silent: K(e.silent, !0),
        axisName: i,
        nameLocation: zr(r.get("nameLocation"), n.nameLocation, "end"),
        shouldNameMoveOverlap: cd(i) && a,
        optionHideOverlap: r.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: r.get(["minorTick", "show"])
      };
      process.env.NODE_ENV !== "production" && (k(o.position != null), k(o.rotation != null)), this._cfg = o;
      var s = new Qe({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var u = this._shared.ensureRecord(r);
      u.transGroup = this._transformGroup, u.dirVec = new ue(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, t.prototype.build = function(e, r) {
      var n = this;
      return e || (e = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), M(oL, function(i) {
        e[i] && sL[i](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, r || {});
      }), this;
    }, t.innerTextLayout = function(e, r, n) {
      var i = Q0(r - e), a, o;
      return bu(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : bu(i - ln) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < ln ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }, t.makeAxisEventDataBase = function(e) {
      var r = {
        componentType: e.mainType,
        componentIndex: e.componentIndex
      };
      return r[e.mainType + "Index"] = e.componentIndex, r;
    }, t.isLabelSilent = function(e) {
      var r = e.get("tooltip");
      return e.get("silent") || !(e.get("triggerEvent") || r && r.show);
    }, t;
  }()
), oL = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], sL = {
  axisLine: function(t, e, r, n, i, a, o) {
    if (process.env.NODE_ENV !== "production") {
      var s = r.ensureRecord(n).ready;
      k(!s.axisLine), s.axisLine = !0;
    }
    var u = n.get(["axisLine", "show"]);
    if (u === "auto" && (u = !0, t.raw.axisLineAutoShow != null && (u = !!t.raw.axisLineAutoShow)), !!u) {
      var l = n.axis.getExtent(), f = a.transform, c = [l[0], 0], h = [l[1], 0], v = c[0] > h[0];
      f && (Kt(c, c, f), Kt(h, h, f));
      var d = z({
        lineCap: "round"
      }, n.getModel(["axisLine", "lineStyle"]).getLineStyle()), p = {
        strokeContainThreshold: t.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: d
      };
      if (n.get(["axisLine", "breakLine"]) && pi(n.axis.scale))
        tL().buildAxisBreakLine(n, i, a, p);
      else {
        var g = new _n(z({
          shape: {
            x1: c[0],
            y1: c[1],
            x2: h[0],
            y2: h[1]
          }
        }, p));
        Eo(g.shape, g.style.lineWidth), g.anid = "line", i.add(g);
      }
      var m = n.get(["axisLine", "symbol"]);
      if (m != null) {
        var y = n.get(["axisLine", "symbolSize"]);
        j(m) && (m = [m, m]), (j(y) || Ee(y)) && (y = [y, y]);
        var _ = kS(n.get(["axisLine", "symbolOffset"]) || 0, y), S = y[0], b = y[1];
        M([{
          rotate: t.rotation + Math.PI / 2,
          offset: _[0],
          r: 0
        }, {
          rotate: t.rotation - Math.PI / 2,
          offset: _[1],
          r: Math.sqrt((c[0] - h[0]) * (c[0] - h[0]) + (c[1] - h[1]) * (c[1] - h[1]))
        }], function(w, T) {
          if (m[T] !== "none" && m[T] != null) {
            var x = pa(m[T], -S / 2, -b / 2, S, b, d.stroke, !0), D = w.r + w.offset, C = v ? h : c;
            x.attr({
              rotation: w.rotate,
              x: C[0] + D * Math.cos(t.rotation),
              y: C[1] - D * Math.sin(t.rotation),
              silent: !0,
              z2: 11
            }), i.add(x);
          }
        });
      }
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function(t, e, r, n, i, a, o, s) {
    if (process.env.NODE_ENV !== "production") {
      var u = r.ensureRecord(n).ready;
      k(!u.axisTickLabelDetermine), u.axisTickLabelEstimate = !0;
    }
    var l = om(e, i, s);
    l && am(t, e, r, n, i, a, o, or.estimate);
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function(t, e, r, n, i, a, o, s) {
    if (process.env.NODE_ENV !== "production") {
      var u = r.ensureRecord(n).ready;
      u.axisTickLabelDetermine = !0;
    }
    var l = om(e, i, s);
    l && am(t, e, r, n, i, a, o, or.determine);
    var f = cL(t, i, a, n);
    fL(t, e.labelLayoutList, f), hL(t, i, a, n, t.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(t, e, r, n, i, a, o, s) {
    var u = r.ensureRecord(n);
    if (process.env.NODE_ENV !== "production") {
      var l = u.ready;
      k(l.axisTickLabelEstimate || l.axisTickLabelDetermine), l.axisName = !0;
    }
    e.nameEl && (i.remove(e.nameEl), e.nameEl = u.nameLayout = u.nameLocation = null);
    var f = t.axisName;
    if (cd(f)) {
      var c = t.nameLocation, h = t.nameDirection, v = n.getModel("nameTextStyle"), d = n.get("nameGap") || 0, p = n.axis.getExtent(), g = n.axis.inverse ? -1 : 1, m = new ue(0, 0), y = new ue(0, 0);
      c === "start" ? (m.x = p[0] - g * d, y.x = -g) : c === "end" ? (m.x = p[1] + g * d, y.x = g) : (m.x = (p[0] + p[1]) / 2, m.y = t.labelOffset + h * d, y.y = h);
      var _ = wr();
      y.transform(iv(_, _, t.rotation));
      var S = n.get("nameRotate");
      S != null && (S = S * ln / 180);
      var b, w;
      ma(c) ? b = pn.innerTextLayout(
        t.rotation,
        S ?? t.rotation,
        // Adapt to axis.
        h
      ) : (b = uL(t.rotation, c, S || 0, p), w = t.raw.axisNameAvailableWidth, w != null && (w = Math.abs(w / Math.sin(b.rotation)), !isFinite(w) && (w = null)));
      var T = v.getFont(), x = n.get("nameTruncate", !0) || {}, D = x.ellipsis, C = oa(t.raw.nameTruncateMaxWidth, x.maxWidth, w), E = s.nameMarginLevel || 0, L = new at({
        x: m.x,
        y: m.y,
        rotation: b.rotation,
        silent: pn.isLabelSilent(n),
        style: Sn(v, {
          text: f,
          font: T,
          overflow: "truncate",
          width: C,
          ellipsis: D,
          fill: v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          align: v.get("align") || b.textAlign,
          verticalAlign: v.get("verticalAlign") || b.textVerticalAlign
        }),
        z2: 1
      });
      if (Tl({
        el: L,
        componentModel: n,
        itemName: f
      }), L.__fullText = f, L.anid = "name", n.get("triggerEvent")) {
        var A = pn.makeAxisEventDataBase(n);
        A.targetType = "axisName", A.name = f, ge(L).eventData = A;
      }
      a.add(L), L.updateTransform(), e.nameEl = L;
      var P = u.nameLayout = Tn({
        label: L,
        priority: L.z2,
        defaultAttr: {
          ignore: L.ignore
        },
        marginDefault: ma(c) ? nL[E] : iL[E]
      });
      if (u.nameLocation = c, i.add(L), L.decomposeTransform(), t.shouldNameMoveOverlap && P) {
        var O = r.ensureRecord(n);
        process.env.NODE_ENV !== "production" && k(O.labelInfoList), r.resolveAxisNameOverlap(t, r, n, P, y, O);
      }
    }
  }
};
function am(t, e, r, n, i, a, o, s) {
  D1(e) || vL(t, e, i, s, n, o);
  var u = e.labelLayoutList;
  dL(t, n, u, a), t.rotation;
  var l = t.optionHideOverlap;
  lL(n, u, l), l && JI(
    // Filter the already ignored labels by the previous overlap resolving methods.
    tt(u, function(f) {
      return f && !f.label.ignore;
    })
  ), aL(t, r, n, u);
}
function uL(t, e, r, n) {
  var i = Q0(r - t), a, o, s = n[0] > n[1], u = e === "start" && !s || e !== "start" && s;
  return bu(i - ln / 2) ? (o = u ? "bottom" : "top", a = "center") : bu(i - ln * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", i < ln * 1.5 && i > ln / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function lL(t, e, r) {
  var n = t.axis, i = t.get(["axisLabel", "customValues"]);
  if (nI(n))
    return;
  function a(l, f, c) {
    var h = Tn(e[f]), v = Tn(e[c]), d = n.scale;
    if (!(!h || !v)) {
      if (l == null) {
        if (!r && i)
          return;
        var p = ya(h.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          id(d) && p.notNice || cr(d) && p.offInterval
        ) {
          Ui(h.label);
          return;
        }
      }
      if (l === !1 || h.suggestIgnore) {
        Ui(h.label);
        return;
      }
      if (v.suggestIgnore) {
        Ui(v.label);
        return;
      }
      var g = 0.1;
      if (!r) {
        var m = [0, 0, 0, 0];
        h = nm({
          marginForce: m
        }, h), v = nm({
          marginForce: m
        }, v);
      }
      fd(h, v, null, {
        touchThreshold: g
      }) && Ui(l ? v.label : h.label);
    }
  }
  var o = t.get(["axisLabel", "showMinLabel"]), s = t.get(["axisLabel", "showMaxLabel"]), u = e.length;
  a(o, 0, 1), a(s, u - 1, u - 2);
}
function fL(t, e, r) {
  t.showMinorTicks || M(e, function(n) {
    if (n && n.label.ignore)
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = S1(a), s = ya(n.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          Ui(a);
          return;
        }
      }
  });
}
function Ui(t) {
  t && (t.ignore = !0);
}
function C1(t, e, r, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < t.length; u++) {
    var l = t[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = r, e && (Kt(o, o, e), Kt(s, s, e));
    var f = new _n({
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
    Eo(f.shape, f.style.lineWidth), f.anid = i + "_" + t[u].tickValue, a.push(f);
    var c = S1(f);
    c.onBand = !!t[u].onBand, c.tickValue = t[u].tickValue;
  }
  return a;
}
function cL(t, e, r, n) {
  var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, t.raw.axisTickAutoShow != null && (o = !!t.raw.axisTickAutoShow)), !o || i.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), u = t.tickDirection * a.get("length"), l = i.getTicksCoords(), f = C1(l, r.transform, u, Ae(s.getLineStyle(), {
    stroke: n.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), c = 0; c < f.length; c++)
    e.add(f[c]);
  return f;
}
function hL(t, e, r, n, i) {
  var a = n.axis, o = n.getModel("minorTick");
  if (!(!t.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var u = o.getModel("lineStyle"), l = i * o.get("length"), f = Ae(u.getLineStyle(), Ae(n.getModel("axisTick").getLineStyle(), {
        stroke: n.get(["axisLine", "lineStyle", "color"])
      })), c = 0; c < s.length; c++)
        for (var h = C1(s[c], r.transform, l, f, "minorticks_" + c), v = 0; v < h.length; v++)
          e.add(h[v]);
  }
}
function om(t, e, r) {
  if (D1(t)) {
    var n = t.axisLabelsCreationContext;
    process.env.NODE_ENV !== "production" && k(t.labelGroup && n);
    var i = n.out.noPxChangeTryDetermine;
    if (r.noPxChange) {
      for (var a = !0, o = 0; o < i.length; o++)
        a = a && i[o]();
      if (a)
        return !1;
    }
    i.length && (e.remove(t.labelGroup), Th(t, null, null, null));
  }
  return !0;
}
function vL(t, e, r, n, i, a) {
  var o = i.axis, s = oa(t.raw.axisLabelShow, i.get(["axisLabel", "show"])), u = new Qe();
  r.add(u);
  var l = zu(n);
  if (!s || o.scale.isBlank()) {
    Th(e, [], u, l);
    return;
  }
  var f = i.getModel("axisLabel"), c = o.getViewLabels(l), h = (oa(t.raw.labelRotate, f.get("rotate")) || 0) * ln / 180, v = pn.innerTextLayout(t.rotation, h, t.labelDirection), d = i.getCategories && i.getCategories(!0), p = [], g = i.get("triggerEvent"), m = 1 / 0, y = -1 / 0;
  M(c, function(S, b) {
    var w, T = S.tick, x = S.formattedLabel, D = S.rawLabel, C = f, E = Qo(o.scale, T);
    if (d && d[E]) {
      var L = d[E];
      J(L) && L.textStyle && (C = new Be(L.textStyle, f, i.ecModel));
    }
    var A = C.getTextColor() || i.get(["axisLine", "lineStyle", "color"]), P = C.getShallow("align", !0) || v.textAlign, O = K(C.getShallow("alignMinLabel", !0), P), N = K(C.getShallow("alignMaxLabel", !0), P), B = C.getShallow("verticalAlign", !0) || C.getShallow("baseline", !0) || v.textVerticalAlign, R = K(C.getShallow("verticalAlignMinLabel", !0), B), F = K(C.getShallow("verticalAlignMaxLabel", !0), B), G = 10 + (((w = T.time) === null || w === void 0 ? void 0 : w.level) || 0);
    m = Math.min(m, G), y = Math.max(y, G);
    var H = new at({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: pn.isLabelSilent(i),
      z2: G,
      style: Sn(C, {
        text: x,
        align: b === 0 ? O : b === c.length - 1 ? N : P,
        verticalAlign: b === 0 ? R : b === c.length - 1 ? F : B,
        fill: ie(A) ? A(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? D : o.type === "value" ? E + "" : E,
          b
        ) : A
      })
    });
    H.anid = "label_" + E;
    var Y = ya(H);
    if (Y.labelInfo = S, Y.layoutRotation = v.rotation, Tl({
      el: H,
      componentModel: i,
      itemName: x,
      formatterParamsExtra: {
        isTruncated: function() {
          return H.isTruncated;
        },
        value: D,
        tickIndex: b
      }
    }), g) {
      var q = pn.makeAxisEventDataBase(i);
      q.targetType = "axisLabel", q.value = D, q.tickIndex = b;
      var W = S.tick.break;
      if (W) {
        var ne = W.parsedBreak;
        q.break = {
          // type: labelItem.break.type,
          start: ne.vmin,
          end: ne.vmax
        };
      }
      o.type === "category" && (q.dataIndex = E), ge(H).eventData = q, W && gL(i, a, H, W);
    }
    p.push(H), u.add(H);
  });
  var _ = Q(p, function(S) {
    return {
      label: S,
      priority: ya(S).labelInfo.tick.break ? S.z2 + (y - m + 1) : S.z2,
      defaultAttr: {
        ignore: S.ignore
      }
    };
  });
  Th(e, _, u, l);
}
function D1(t) {
  return !!t.labelLayoutList;
}
function Th(t, e, r, n) {
  t.labelLayoutList = e, t.labelGroup = r, t.axisLabelsCreationContext = n;
}
function dL(t, e, r, n) {
  var i = e.get(["axisLabel", "margin"]);
  M(r, function(a, o) {
    var s = Tn(a);
    if (s) {
      var u = s.label, l = ya(u);
      s.suggestIgnore = u.ignore, u.ignore = !1, wo(Pr, pL);
      var f = e.axis;
      Pr.x = f.dataToCoord(Qo(f.scale, l.labelInfo.tick)), Pr.y = t.labelOffset + t.labelDirection * i, Pr.rotation = l.layoutRotation, n.add(Pr), Pr.updateTransform(), n.remove(Pr), Pr.decomposeTransform(), wo(u, Pr), u.markRedraw(), Yu(s, !0), Tn(s);
    }
  });
}
var Pr = new ze(), pL = new ze();
function cd(t) {
  return !!t;
}
function gL(t, e, r, n) {
  r.on("click", function(i) {
    var a = {
      type: rL,
      breaks: [{
        start: n.parsedBreak.breakOption.start,
        end: n.parsedBreak.breakOption.end
      }]
    };
    a[t.axis.dim + "AxisIndex"] = t.componentIndex, e.dispatchAction(a);
  });
}
function Xu(t, e, r) {
  r = r || {};
  var n = e.axis, i = {}, a = n.getAxesOnZeroOf()[0], o = n.position, s = a ? "onZero" : o, u = n.dim, l = [t.x, t.x + t.width, t.y, t.y + t.height], f = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, c = e.get("offset") || 0, h = u === "x" ? [l[2] - c, l[3] + c] : [l[0] - c, l[1] + c];
  if (a) {
    var v = a.toGlobalCoord(a.dataToCoord(0));
    h[f.onZero] = Math.max(Math.min(v, h[1]), h[0]);
  }
  i.position = [u === "y" ? h[f[s]] : l[0], u === "x" ? h[f[s]] : l[3]], i.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var d = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  i.labelDirection = i.tickDirection = i.nameDirection = d[o], i.labelOffset = a ? h[f[o]] - h[f.onZero] : 0, e.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), oa(r.labelInside, e.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
  var p = e.get(["axisLabel", "rotate"]);
  return i.labelRotate = s === "top" ? -p : p, i.z2 = 1, i;
}
function mL(t) {
  return t.coordinateSystem && t.coordinateSystem.type === "cartesian2d";
}
function yL(t) {
  var e = {
    xAxisModel: null,
    yAxisModel: null
  };
  return M(e, function(r, n) {
    var i = n.replace(/Model$/, ""), a = t.getReferringComponents(i, $t).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(i + ' "' + zr(t.get(i + "Index"), t.get(i + "Id"), 0) + '" not found');
    e[n] = a;
  }), e;
}
function _L(t, e, r, n, i, a) {
  for (var o = Xu(t, r), s = !1, u = !1, l = 0; l < e.length; l++)
    ZS(e[l].getOtherAxis(r.axis).scale) && (s = u = !0, r.axis.type === "category" && r.axis.onBand && (u = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = u, o.defaultNameMoveOverlap = a, new pn(r, n, o, i);
}
function SL(t, e, r) {
  var n = Xu(e, r);
  if (process.env.NODE_ENV !== "production") {
    var i = t.__getRawCfg();
    M(de(n), function(a) {
      a !== "position" && a !== "labelOffset" && k(n[a] === i[a]);
    });
  }
  t.updateCfg(n);
}
var bL = Me(), wL = 1, TL = 2, xL = 3, E1 = (
  /** @class */
  function() {
    function t(e, r, n, i, a) {
      var o = cr(e), s = o ? r.getCategories().length : null, u;
      if (o) {
        var l = r.getCategories(!0);
        u = l && !l.length;
      }
      var f = n.slice();
      (Bu(e) || ga(e) || id(e)) && (s_(f, Fa(e, r.get("dataMin", !0))), u_(f, Fa(e, r.get("dataMax", !0)))), mC(f) || (f[0] = f[1] = NaN);
      var c = [], h = [!1, !1], v = r.get("min", !0);
      v === "dataMin" ? (c[0] = f[0], h[0] = !0) : (c[0] = Fa(e, ie(v) ? v({
        min: f[0],
        max: f[1]
      }) : v), h[0] = c[0] != null);
      var d = r.get("max", !0);
      d === "dataMax" ? (c[1] = f[1], h[1] = !0) : (c[1] = Fa(e, ie(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), h[1] = c[1] != null);
      var p = CL(e, r), g = o ? null : f[1] - f[0] || Math.abs(f[0]);
      c[0] == null && (c[0] = o ? u ? f[0] : s ? 0 : NaN : f[0] - p[0] * g), c[1] == null && (c[1] = o ? u ? f[1] : s ? s - 1 : NaN : f[1] + p[1] * g), !Xr(c[0]) && (c[0] = NaN), !Xr(c[1]) && (c[1] = NaN);
      var m = u || aa(c[0]) || aa(c[1]) || o && !s, y = Bu(e), _ = y && r.needIncludeZero && r.needIncludeZero();
      _ && (c[0] > 0 && c[1] > 0 && !h[0] && (c[0] = 0), c[0] < 0 && c[1] < 0 && !h[1] && (c[1] = 0));
      var S = !1;
      c[0] > c[1] && (c.reverse(), S = !0);
      var b = Fa(e, r.get("startValue", !0)), w = b != null;
      !Ot(b) && i && (b = e.getDefaultStartValue ? e.getDefaultStartValue() : 0), Ot(b) && (w || !y || _) && (b < c[0] && !h[0] ? (c[0] = b, h[0] = !0) : b > c[1] && !h[1] && (c[1] = b, h[1] = !0));
      var T = this._i = {
        scale: e,
        dataMM: f,
        noZoomEffMM: c,
        zoomMM: [],
        fixMM: h,
        zoomFixMM: [!1, !1],
        startValue: b,
        isBlank: m,
        incl0: _,
        tggAxInv: S,
        ctnShp: a
      };
      sm(T, c);
    }
    return t.prototype.makeNoZoom = function() {
      return this._i.noZoomEffMM.slice();
    }, t.prototype.makeFinal = function() {
      var e = this._i, r = e.zoomMM, n = e.noZoomEffMM, i = e.zoomFixMM, a = e.fixMM, o = {
        fixMM: a,
        zoomFixMM: i,
        isBlank: e.isBlank,
        incl0: e.incl0,
        tggAxInv: e.tggAxInv,
        ctnShp: e.ctnShp,
        effMM: n.slice()
      }, s = o.effMM;
      return r[0] != null && (s[0] = r[0], a[0] = i[0] = !0), r[1] != null && (s[1] = r[1], a[1] = i[1] = !0), sm(e, s), o;
    }, t.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, t.prototype.setZoomMM = function(e, r) {
      this._i.zoomMM[e] = r;
    }, t;
  }()
);
function sm(t, e) {
  var r = t.scale, n = t.dataMM;
  r.sanitize && (e[0] = r.sanitize(e[0], n), e[1] = r.sanitize(e[1], n), yC(e));
}
function Fa(t, e) {
  return e == null ? null : aa(e) ? NaN : t.parse(e);
}
function CL(t, e) {
  var r;
  if (cr(t))
    r = [0, 0];
  else {
    var n = e.get("boundaryGap");
    typeof n == "boolean" && (process.env.NODE_ENV !== "production" && n === !0 && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to 0.'), n = null), r = $(n) ? n : [n, n];
  }
  return [um(r[0]), um(r[1])];
}
function um(t) {
  return hi(typeof t == "boolean" ? 0 : t, 1) || 0;
}
function A1(t) {
  var e = bL(t.scale);
  return e.extent || (e.extent = Xt()), e;
}
function DL(t, e) {
  A1(t).dimIdxInCoord = e.get(t.dim);
}
function EL(t, e) {
  var r = t.scale, n = t.model, i = t.dim;
  if (process.env.NODE_ENV !== "production" && k(r && n && i), r.rawExtentInfo) {
    process.env.NODE_ENV !== "production" && k(r.rawExtentInfo.from !== e || e === TL);
    return;
  }
  AL(r, t, i, n, e);
}
function AL(t, e, r, n, i) {
  var a = A1(e), o = a.extent, s = !1;
  FI(e, function(f) {
    if (f.boxCoordinateSystem) {
      var c = vS(f).coord, h = a.dimIdxInCoord;
      if (!(h >= 0))
        process.env.NODE_ENV !== "production" && _e('Property "series.coord" is not supported on axis ' + f.boxCoordinateSystem.type + ".");
      else if ($(c)) {
        var v = c[h];
        v != null && !$(v) && Kc(o, t.parse(v));
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var p = t.getFilter ? t.getFilter() : null;
        M(iI(d, r), function(g) {
          gC(o, d.getApproximateExtent(g, p));
        });
      }
      f.__requireStartValue && f.__requireStartValue(e) && (s = !0);
    }
  });
  var u = LL(t, e, n), l = new E1(t, n, o, s, u);
  M1(t, l, i), a.extent = null;
}
function ML(t, e) {
  var r = t.scale;
  process.env.NODE_ENV !== "production" && k(!r.rawExtentInfo), M1(r, new E1(r, t.model, e, !1, !1), xL);
}
function M1(t, e, r) {
  t.rawExtentInfo = e, e.from = r;
}
function IL(t, e) {
  process.env.NODE_ENV !== "production" && k(!$u.get(t)), $u.set(t, e);
}
var $u = re();
function I1(t, e, r, n, i) {
  process.env.NODE_ENV !== "production" && k(!0), t.rawExtentInfo || ML({
    scale: t,
    model: e
  }, Xt());
  var a = t.rawExtentInfo.makeFinal(), o = a.effMM;
  return t.setExtent(o[0], o[1]), t.setBlank(a.isBlank), n && a.tggAxInv && r && !r.get("legacyMinMaxDontInverseAxis") && (n.inverse = !n.inverse), a;
}
function LL(t, e, r) {
  var n = r1(t, r), i = r.get("containShape", !0);
  if (i == null && !n && (i = !0), !i)
    return !1;
  var a = !1;
  return d1(e, function(o) {
    a = !!$u.get(o) || a;
  }), a;
}
function PL(t, e, r, n) {
  if (r.ctnShp) {
    var i;
    if (d1(t, function(s) {
      var u = $u.get(s);
      if (u) {
        var l = u(t, n);
        l && (i = i || [0, 0], s_(i, l[0]), u_(i, l[1]), tI(t));
      }
    }), !!i) {
      var a = e.getExtent();
      if (cr(e))
        t.onBand || e.setExtent2(Lo, ht(a[0], a[0] + i[0]), ye(a[1], a[1] + i[1]));
      else {
        var o = a.slice();
        r.zoomFixMM[0] || (o[0] = ht(o[0], e.transformOut(e.transformIn(o[0], null) + i[0], null))), r.zoomFixMM[1] || (o[1] = ye(o[1], e.transformOut(e.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && e.setExtent2(Lo, o[0], o[1]);
      }
    }
  }
}
function OL() {
  HI("liPosMinGap", NL);
}
function NL(t, e, r) {
  var n = re(), i = r.serUids, a = r.liPosMinGap, o, s = e.axis, u = s.scale, l = u.needTransform(), f = u.getFilter ? u.getFilter() : null, c = rS(f);
  function h(_) {
    ld(t, e.sers, function(S) {
      var b = S.getRawData(), w = b.getDimensionIndex(b.mapDimension(s.dim));
      w >= 0 && _(w, S, b.getStore());
    });
  }
  var v = 0;
  if (h(function(_, S, b) {
    n.set(S.uid, 1), (!i || !i.hasKey(S.uid)) && (o = !0), v += b.count();
  }), (!i || i.keys().length !== n.keys().length) && (o = !0), !o && a != null) {
    e.liPosMinGap = a;
    return;
  }
  td(Kn, v);
  var d = 0;
  h(function(_, S, b) {
    for (var w = 0, T = b.count(); w < T; ++w) {
      var x = b.get(_, w);
      isFinite(x) && (!f || nS(c, x)) && (l && (x = u.transformIn(x, null)), Kn.arr[d++] = x);
    }
  });
  var p = Kn.typed ? Kn.arr.subarray(0, d) : (Kn.arr.length = d, Kn.arr);
  Kn.typed ? p.sort() : lv(p);
  for (var g = 1 / 0, m = 1; m < d; ++m) {
    var y = p[m] - p[m - 1];
    // - Different series normally have the same values (e.g., barA, barB, barC),
    //   which should be ignored.
    // - A single series with multiple same values is often not meaningful to
    //   create `bandWidth`, so it is also ignored.
    y > 0 && y < g && (g = y);
  }
  r.liPosMinGap = e.liPosMinGap = Ot(g) ? g : d > 0 ? f1 : RI, r.serUids = n;
}
var Kn = td(
  {
    ctor: _M
  },
  50
  // An arbitrary initial capability.
);
function RL(t) {
  return function(e, r) {
    var n = Ca(e, {
      fromStat: {
        key: t
      }
    });
    if (Ot(n.w2))
      return [-n.w2 / 2, n.w2 / 2];
  };
}
function kl(t, e) {
  return t + Hu + e;
}
function kL(t) {
  return OL(), {
    // non-category scale do not use `liPosMinGap` to calculate `bandWidth`.
    liPosMinGap: !cr(t.scale)
  };
}
var ra = "bar";
function BL(t, e, r, n) {
  UI(t, {
    key: e,
    seriesType: r,
    coordSysType: n,
    getMetrics: kL
  });
}
function VL(t) {
  var e = t.scale.rawExtentInfo.makeRenderInfo().startValue;
  return process.env.NODE_ENV !== "production" && k(Ot(e)), e;
}
var L1 = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, Zu = ["25%", "25%"], Hr = "cartesian2d", FL = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = jo(r.outerBounds);
      t.prototype.mergeDefaultAndTheme.apply(this, arguments), i && r.outerBounds && wn(r.outerBounds, i);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && r.outerBounds && wn(this.option.outerBounds, r.outerBounds);
    }, e.type = "grid", e.dependencies = ["xAxis", "yAxis"], e.layoutMode = "box", e.defaultOption = {
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
      outerBounds: L1,
      outerBoundsContain: "all",
      outerBoundsClampWidth: Zu[0],
      outerBoundsClampHeight: Zu[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: ee.color.transparent,
      borderWidth: 1,
      borderColor: ee.color.neutral30
    }, e;
  }(be)
), zL = l_(), GL = "__ec_stack_";
function P1(t) {
  return t.get("stack") || GL + t.seriesIndex;
}
function HL(t, e) {
  var r = UL(t, e);
  return r.columnMap = WL(r), r;
}
function UL(t, e) {
  var r = kl(e, Hr), n = [], i = Ca(t, {
    fromStat: {
      key: r
    },
    min: 1
  });
  return v1(t, r, function(a) {
    n.push({
      barWidth: ke(a.get("barWidth"), i.w),
      barMaxWidth: ke(a.get("barMaxWidth"), i.w),
      barMinWidth: ke(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        a.get("barMinWidth") || (O1(a) ? 0.5 : 1),
        i.w
      ),
      barGap: a.get("barGap"),
      barCategoryGap: a.get("barCategoryGap"),
      defaultBarGap: a.get("defaultBarGap"),
      stackId: P1(a)
    });
  }), {
    bandWidthResult: i,
    seriesInfo: n
  };
}
function WL(t) {
  var e = t.bandWidthResult.w, r = e, n = 0, i, a, o = [], s = {};
  M(t.seriesInfo, function(p, g) {
    g || (a = p.defaultBarGap || 0);
    var m = p.stackId;
    _t(s, m) || n++;
    var y = s[m];
    y || (y = s[m] = {
      width: 0,
      maxWidth: 0
    }, o.push(m));
    var _ = p.barWidth;
    _ && !y.width && (y.width = _, _ = ht(r, _), r -= _);
    var S = p.barMaxWidth;
    S && (y.maxWidth = S);
    var b = p.barMinWidth;
    b && (y.minWidth = b);
    var w = p.barGap;
    w != null && (a = w);
    var T = p.barCategoryGap;
    T != null && (i = T);
  }), i == null && (i = ye(35 - o.length * 4, 15) + "%");
  var u = ke(i, e), l = ke(a, 1), f = (r - u) / (n + (n - 1) * l);
  f = ye(f, 0), M(o, function(p) {
    var g = s[p], m = g.maxWidth, y = g.minWidth;
    if (g.width) {
      var _ = g.width;
      m && (_ = ht(_, m)), y && (_ = ye(_, y)), g.width = _, r -= _ + l * _, n--;
    } else {
      var _ = f;
      m && m < _ && (_ = ht(m, r)), y && y > _ && (_ = y), _ !== f && (g.width = _, r -= _ + l * _, n--);
    }
  }), f = (r - u) / (n + (n - 1) * l), f = ye(f, 0);
  var c = 0, h;
  M(o, function(p) {
    var g = s[p];
    g.width || (g.width = f), h = g, c += g.width * (1 + l);
  }), h && (c -= h.width * l);
  var v = {}, d = -c / 2;
  return M(o, function(p) {
    var g = s[p];
    v[p] = v[p] || {
      bandWidth: e,
      offset: d,
      width: g.width
    }, d += g.width * (1 + l);
  }), v;
}
function YL(t) {
  return {
    seriesType: t,
    overallReset: function(e) {
      var r = kl(t, Hr);
      zI(e, r, function(n) {
        process.env.NODE_ENV !== "production" && k(n instanceof g1);
        var i = HL(n, t);
        v1(n, r, function(a) {
          var o = i.columnMap[P1(a)];
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
function XL(t) {
  return {
    seriesType: t,
    plan: rd(),
    reset: function(e) {
      if (mL(e)) {
        var r = e.getData(), n = e.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = r.getDimensionIndex(r.mapDimension(a.dim)), s = r.getDimensionIndex(r.mapDimension(i.dim)), u = e.get("showBackground", !0), l = r.mapDimension(a.dim), f = r.getCalculationInfo("stackResultDimension"), c = da(r, l) && !!r.getCalculationInfo("stackedOnSeries"), h = a.isHorizontal(), v = a.toGlobalCoord(a.dataToCoord(VL(a))), d = O1(e), p = e.get("barMinHeight") || 0, g = f && r.getDimensionIndex(f), m = r.getLayout("size"), y = r.getLayout("offset");
        return {
          progress: function(_, S) {
            for (var b = _.count, w = d && Br(b * 3), T = d && u && Br(b * 3), x = d && Br(b), D = n.master.getRect(), C = h ? D.width : D.height, E, L = S.getStore(), A = 0; (E = _.next()) != null; ) {
              var P = L.get(c ? g : o, E), O = L.get(s, E), N = v, B = void 0;
              c && (B = +P - L.get(o, E));
              var R = void 0, F = void 0, G = void 0, H = void 0;
              if (h) {
                var Y = n.dataToPoint([P, O]);
                c && (N = n.dataToPoint([B, O])[0]), R = N, F = Y[1] + y, G = Y[0] - N, H = m, $e(G) < p && (G = (G < 0 ? -1 : 1) * p);
              } else {
                var Y = n.dataToPoint([O, P]);
                c && (N = n.dataToPoint([O, B])[1]), R = Y[0] + y, F = N, G = m, H = Y[1] - N, $e(H) < p && (H = (H <= 0 ? -1 : 1) * p);
              }
              d ? (w[A] = R, w[A + 1] = F, w[A + 2] = h ? G : H, T && (T[A] = h ? D.x : R, T[A + 1] = h ? F : D.y, T[A + 2] = C), x[E] = E) : S.setItemLayout(E, {
                x: R,
                y: F,
                width: G,
                height: H
              }), A += 3;
            }
            d && S.setLayout({
              largePoints: w,
              largeDataIndices: x,
              largeBackgroundPoints: T,
              valueAxisHorizontal: h
            });
          }
        };
      }
    }
  };
}
function O1(t) {
  return t.pipelineContext && t.pipelineContext.large;
}
function $L(t) {
  return RL(kl(t, Hr));
}
function ZL(t) {
  zL(t, function() {
    function e(r) {
      var n = kl(r, Hr);
      BL(t, n, r, Hr), IL(n, $L(r));
    }
    e("bar"), e("pictorialBar");
  });
}
var xh = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.getInitialData = function(r, n) {
      return Vv(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getMarkerPosition = function(r, n, i) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(r), s = a.dataToPoint(o);
        if (i)
          M(a.getAxes(), function(h, v) {
            if (h.type === "category" && n != null) {
              var d = h.getTicksCoords(), p = h.getTickModel().get("alignWithLabel"), g = o[v], m = n[v] === "x1" || n[v] === "y1";
              if (m && !p && (g += 1), d.length < 2)
                return;
              if (d.length === 2) {
                s[v] = h.toGlobalCoord(h.getExtent()[m ? 1 : 0]);
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
              _ == null && (y ? y && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[v] = h.toGlobalCoord(_);
            }
          });
        else {
          var u = this.getData(), l = u.getLayout("offset"), f = u.getLayout("size"), c = a.getBaseAxis().isHorizontal() ? 0 : 1;
          s[c] += l + f / 2;
        }
        return s;
      }
      return [NaN, NaN];
    }, e.prototype.__requireStartValue = function(r) {
      return this.getBaseAxis() !== r;
    }, e.type = "series.__base_bar__", e.defaultOption = {
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
    }, e;
  }(ar)
);
ar.registerClass(xh);
var qL = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.getInitialData = function() {
      return Vv(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, e.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, e.prototype.__preparePipelineContext = function(r, n) {
      var i = f_(this, r, n);
      return i.progressiveRender && (i.large = !0), i;
    }, e.prototype.brushSelector = function(r, n, i) {
      return i.rect(n.getItemLayout(r));
    }, e.type = "series." + ra, e.dependencies = ["grid", "polar"], e.defaultOption = dS(xh.defaultOption, {
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
          borderColor: ee.color.primary,
          borderWidth: 2
        }
      },
      realtimeSort: !1
    }), e;
  }(xh)
), qu = "\0__throttleOriginMethod", lm = "\0__throttleRate", fm = "\0__throttleType";
function hd(t, e, r) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  e = e || 0;
  function c() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, t.apply(u, l || []);
  }
  var h = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = v;
    var p = f || e, g = f || r;
    f = null, s = n - (g ? i : a) - p, clearTimeout(o), g ? o = setTimeout(c, p) : s >= 0 ? c() : o = setTimeout(c, -s), i = n;
  };
  return h.clear = function() {
    o && (clearTimeout(o), o = null);
  }, h.debounceNextCall = function(v) {
    f = v;
  }, h;
}
function N1(t, e, r, n) {
  var i = t[e];
  if (i) {
    var a = i[qu] || i, o = i[fm], s = i[lm];
    if (s !== r || o !== n) {
      if (r == null || !n)
        return t[e] = a;
      i = t[e] = hd(a, r, n === "debounce"), i[qu] = a, i[fm] = n, i[lm] = r;
    }
    return i;
  }
}
function Ch(t, e) {
  var r = t[e];
  r && r[qu] && (r.clear && r.clear(), t[e] = r[qu]);
}
var KL = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return t;
  }()
), cm = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.type = "sausage", n;
    }
    return e.prototype.getDefaultShape = function() {
      return new KL();
    }, e.prototype.buildPath = function(r, n) {
      var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), u = (s - o) * 0.5, l = o + u, f = n.startAngle, c = n.endAngle, h = n.clockwise, v = Math.PI * 2, d = h ? c - f < v : f - c < v;
      d || (f = c - (h ? v : -v));
      var p = Math.cos(f), g = Math.sin(f), m = Math.cos(c), y = Math.sin(c);
      d ? (r.moveTo(p * o + i, g * o + a), r.arc(p * l + i, g * l + a, u, -Math.PI + f, f, !h)) : r.moveTo(p * s + i, g * s + a), r.arc(i, a, s, f, c, !h), r.arc(m * l + i, y * l + a, u, c - Math.PI * 2, c - Math.PI, !h), o !== 0 && r.arc(i, a, o, c, f, h);
    }, e;
  }(Ce)
);
function jL(t, e) {
  e = e || {};
  var r = e.isRoundCap;
  return function(n, i, a) {
    var o = i.position;
    if (!o || o instanceof Array)
      return hu(n, i, a);
    var s = t(o), u = i.distance != null ? i.distance : 5, l = this.shape, f = l.cx, c = l.cy, h = l.r, v = l.r0, d = (h + v) / 2, p = l.startAngle, g = l.endAngle, m = (p + g) / 2, y = r ? Math.abs(h - v) / 2 : 0, _ = Math.cos, S = Math.sin, b = f + h * _(p), w = c + h * S(p), T = "left", x = "top";
    switch (s) {
      case "startArc":
        b = f + (v - u) * _(m), w = c + (v - u) * S(m), T = "center", x = "top";
        break;
      case "insideStartArc":
        b = f + (v + u) * _(m), w = c + (v + u) * S(m), T = "center", x = "bottom";
        break;
      case "startAngle":
        b = f + d * _(p) + Ps(p, u + y, !1), w = c + d * S(p) + Os(p, u + y, !1), T = "right", x = "middle";
        break;
      case "insideStartAngle":
        b = f + d * _(p) + Ps(p, -u + y, !1), w = c + d * S(p) + Os(p, -u + y, !1), T = "left", x = "middle";
        break;
      case "middle":
        b = f + d * _(m), w = c + d * S(m), T = "center", x = "middle";
        break;
      case "endArc":
        b = f + (h + u) * _(m), w = c + (h + u) * S(m), T = "center", x = "bottom";
        break;
      case "insideEndArc":
        b = f + (h - u) * _(m), w = c + (h - u) * S(m), T = "center", x = "top";
        break;
      case "endAngle":
        b = f + d * _(g) + Ps(g, u + y, !0), w = c + d * S(g) + Os(g, u + y, !0), T = "left", x = "middle";
        break;
      case "insideEndAngle":
        b = f + d * _(g) + Ps(g, -u + y, !0), w = c + d * S(g) + Os(g, -u + y, !0), T = "right", x = "middle";
        break;
      default:
        return hu(n, i, a);
    }
    return n = n || {}, n.x = b, n.y = w, n.align = T, n.verticalAlign = x, n;
  };
}
function QL(t, e, r, n) {
  if (Ee(n)) {
    t.setTextConfig({
      rotation: n
    });
    return;
  } else if ($(e)) {
    t.setTextConfig({
      rotation: 0
    });
    return;
  }
  var i = t.shape, a = i.clockwise ? i.startAngle : i.endAngle, o = i.clockwise ? i.endAngle : i.startAngle, s = (a + o) / 2, u, l = r(e);
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
      t.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - u;
  l === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), t.setTextConfig({
    rotation: f
  });
}
function Ps(t, e, r) {
  return e * Math.sin(t) * (r ? -1 : 1);
}
function Os(t, e, r) {
  return e * Math.cos(t) * (r ? 1 : -1);
}
function eo(t, e, r) {
  var n = t.get("borderRadius");
  if (n == null)
    return r ? {
      cornerRadius: 0
    } : null;
  $(n) || (n = [n, n, n, n]);
  var i = Math.abs(e.r || 0 - e.r0 || 0);
  return {
    cornerRadius: Q(n, function(a) {
      return hi(a, i);
    })
  };
}
var Vf = Math.max, Ff = Math.min, JL = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t.call(this) || this;
      return r.type = ra, r._isFirstFrame = !0, r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this._model = r, this._removeOnRenderedListener(i), this._updateDrawMode(r);
      var o = r.get("coordinateSystem");
      o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(r, n, i) : this._renderNormal(r, n, i, a)) : process.env.NODE_ENV !== "production" && nt("Only cartesian2d and polar supported for bar.");
    }, e.prototype.incrementalPrepareRender = function(r) {
      this._clear(), this._updateDrawMode(r), this._updateLargeClip(r);
    }, e.prototype.incrementalRender = function(r, n) {
      this._progressiveEls = [], this._incrementalRenderLarge(r, n);
    }, e.prototype.eachRendered = function(r) {
      xl(this._progressiveEls || this.group, r);
    }, e.prototype._updateDrawMode = function(r) {
      var n = r.pipelineContext.large;
      (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
    }, e.prototype._renderNormal = function(r, n, i, a) {
      var o = this.group, s = r.getData(), u = this._data, l = r.coordinateSystem, f = l.getBaseAxis(), c;
      l.type === "cartesian2d" ? c = f.isHorizontal() : l.type === "polar" && (c = f.dim === "angle");
      var h = r.isAnimationEnabled() ? r : null, v = eP(r, l);
      v && this._enableRealtimeSort(v, s, i);
      var d = r.get("clip", !0) || v, p = l.getArea();
      o.removeClipPath();
      var g = r.get("roundCap", !0), m = r.get("showBackground", !0), y = r.getModel("backgroundStyle"), _ = y.get("borderRadius") || 0, S = [], b = this._backgroundEls, w = a && a.isInitSort, T = a && a.type === "changeAxisOrder";
      function x(E) {
        var L = Ns[l.type](s, E);
        if (!L)
          return null;
        var A = sP(l, c, L);
        return A.useStyle(y.getItemStyle()), l.type === "cartesian2d" ? A.setShape("r", _) : A.setShape("cornerRadius", _), S[E] = A, A;
      }
      s.diff(u).add(function(E) {
        var L = s.getItemModel(E), A = Ns[l.type](s, E, L);
        if (A && (m && x(E), !(!s.hasValue(E) || !gm[l.type](A)))) {
          var P = !1;
          d && (P = hm[l.type](p, A));
          var O = vm[l.type](r, s, E, A, c, h, f.model, !1, g);
          v && (O.forceLabelAnimation = !0), mm(O, s, E, L, A, r, c, l.type === "polar"), w ? O.attr({
            shape: A
          }) : v ? dm(v, h, O, A, E, c, !1, !1) : jt(O, {
            shape: A
          }, r, E), s.setItemGraphicEl(E, O), o.add(O), O.ignore = P;
        }
      }).update(function(E, L) {
        var A = s.getItemModel(E), P = Ns[l.type](s, E, A);
        if (P) {
          if (m) {
            var O = void 0;
            b.length === 0 ? O = x(L) : (O = b[L], O.useStyle(y.getItemStyle()), l.type === "cartesian2d" ? O.setShape("r", _) : O.setShape("cornerRadius", _), S[E] = O);
            var N = Ns[l.type](s, E), B = k1(c, N, l);
            wt(O, {
              shape: B
            }, h, E);
          }
          var R = u.getItemGraphicEl(L);
          if (!s.hasValue(E) || !gm[l.type](P)) {
            o.remove(R);
            return;
          }
          var F = !1;
          d && (F = hm[l.type](p, P), F && o.remove(R));
          var G = R && (R.type === "sector" && g || R.type === "sausage" && !g);
          if (G && (R && ho(R, r, L), R = null), R ? Ev(R) : R = vm[l.type](r, s, E, P, c, h, f.model, !0, g), v && (R.forceLabelAnimation = !0), T) {
            var H = R.getTextContent();
            if (H) {
              var Y = Dl(H);
              Y.prevValue != null && (Y.prevValue = Y.value);
            }
          } else
            mm(R, s, E, A, P, r, c, l.type === "polar");
          w ? R.attr({
            shape: P
          }) : v ? dm(v, h, R, P, E, c, !0, T) : wt(R, {
            shape: P
          }, r, E, null), s.setItemGraphicEl(E, R), R.ignore = F, o.add(R);
        }
      }).remove(function(E) {
        var L = u.getItemGraphicEl(E);
        L && ho(L, r, E);
      }).execute();
      var D = this._backgroundGroup || (this._backgroundGroup = new Qe());
      D.removeAll();
      for (var C = 0; C < S.length; ++C)
        D.add(S[C]);
      o.add(D), this._backgroundEls = S, this._data = s;
    }, e.prototype._renderLarge = function(r, n, i) {
      this._clear(), _m(r, this.group), this._updateLargeClip(r);
    }, e.prototype._incrementalRenderLarge = function(r, n) {
      this._removeBackground(), _m(n, this.group, this._progressiveEls, !0);
    }, e.prototype._updateLargeClip = function(r) {
      var n = r.get("clip", !0) && MM(r.coordinateSystem, !1, r), i = this.group;
      n ? i.setClipPath(n) : i.removeClipPath();
    }, e.prototype._enableRealtimeSort = function(r, n, i) {
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
    }, e.prototype._dataSort = function(r, n, i) {
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
        ordinalNumbers: Q(a, function(o) {
          return o.ordinalNumber;
        })
      };
    }, e.prototype._isOrderChangedWithinSameData = function(r, n, i) {
      for (var a = i.scale, o = r.mapDimension(i.dim), s = Number.MAX_VALUE, u = 0, l = a.getOrdinalMeta().categories.length; u < l; ++u) {
        var f = r.rawIndexOf(o, a.getRawOrdinalNumber(u)), c = f < 0 ? Number.MIN_VALUE : n(r.indexOfRawIndex(f));
        if (c > s)
          return !0;
        s = c;
      }
      return !1;
    }, e.prototype._isOrderDifferentInView = function(r, n) {
      for (var i = n.scale, a = i.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], i.getOrdinalMeta().categories.length - 1); o <= s; ++o)
        if (r.ordinalNumbers[o] !== i.getRawOrdinalNumber(o))
          return !0;
    }, e.prototype._updateSortWithinSameData = function(r, n, i, a) {
      if (this._isOrderChangedWithinSameData(r, n, i)) {
        var o = this._dataSort(r, i, n);
        this._isOrderDifferentInView(o, i) && (this._removeOnRenderedListener(a), a.dispatchAction({
          type: "changeAxisOrder",
          componentType: i.dim + "Axis",
          axisId: i.index,
          sortInfo: o
        }));
      }
    }, e.prototype._dispatchInitSort = function(r, n, i) {
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
    }, e.prototype.remove = function(r, n) {
      this._clear(this._model), this._removeOnRenderedListener(n);
    }, e.prototype.dispose = function(r, n) {
      this._removeOnRenderedListener(n);
    }, e.prototype._removeOnRenderedListener = function(r) {
      this._onRendered && (r.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, e.prototype._clear = function(r) {
      var n = this.group, i = this._data;
      r && r.isAnimationEnabled() && i && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], i.eachItemGraphicEl(function(a) {
        ho(a, r, ge(a).dataIndex);
      })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, e.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, e.type = ra, e;
  }(Jt)
), hm = {
  cartesian2d: function(t, e) {
    var r = e.width < 0 ? -1 : 1, n = e.height < 0 ? -1 : 1;
    r < 0 && (e.x += e.width, e.width = -e.width), n < 0 && (e.y += e.height, e.height = -e.height);
    var i = t.x + t.width, a = t.y + t.height, o = Vf(e.x, t.x), s = Ff(e.x + e.width, i), u = Vf(e.y, t.y), l = Ff(e.y + e.height, a), f = s < o, c = l < u;
    return e.x = f && o > i ? s : o, e.y = c && u > a ? l : u, e.width = f ? 0 : s - o, e.height = c ? 0 : l - u, r < 0 && (e.x += e.width, e.width = -e.width), n < 0 && (e.y += e.height, e.height = -e.height), f || c;
  },
  polar: function(t, e) {
    var r = e.r0 <= e.r ? 1 : -1;
    if (r < 0) {
      var n = e.r;
      e.r = e.r0, e.r0 = n;
    }
    var i = Ff(e.r, t.r), a = Vf(e.r0, t.r0);
    e.r = i, e.r0 = a;
    var o = i - a < 0;
    if (r < 0) {
      var n = e.r;
      e.r = e.r0, e.r0 = n;
    }
    return o;
  }
}, vm = {
  cartesian2d: function(t, e, r, n, i, a, o, s, u) {
    var l = new ze({
      shape: z({}, n),
      z2: 1
    });
    if (l.__dataIndex = r, l.name = "item", a) {
      var f = l.shape, c = i ? "height" : "width";
      f[c] = 0;
    }
    return l;
  },
  polar: function(t, e, r, n, i, a, o, s, u) {
    var l = !i && u ? cm : Cn, f = new l({
      shape: n,
      z2: 1
    });
    f.name = "item";
    var c = R1(i);
    if (f.calculateTextPosition = jL(c, {
      isRoundCap: l === cm
    }), a) {
      var h = f.shape, v = i ? "r" : "endAngle", d = {};
      h[v] = i ? n.r0 : n.startAngle, d[v] = n[v], (s ? wt : jt)(f, {
        shape: d
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function eP(t, e) {
  var r = t.get("realtimeSort", !0), n = e.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && r && (n.type !== "category" && nt("`realtimeSort` will not work because this bar series is not based on a category axis."), e.type !== "cartesian2d" && nt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), r && n.type === "category" && e.type === "cartesian2d")
    return {
      baseAxis: n,
      otherAxis: e.getOtherAxis(n)
    };
}
function dm(t, e, r, n, i, a, o, s) {
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
  }), s || (o ? wt : jt)(r, {
    shape: u
  }, e, i, null);
  var f = e ? t.baseAxis.model : null;
  (o ? wt : jt)(r, {
    shape: l
  }, f, i);
}
function pm(t, e) {
  for (var r = 0; r < e.length; r++)
    if (!isFinite(t[e[r]]))
      return !0;
  return !1;
}
var tP = ["x", "y", "width", "height"], rP = ["cx", "cy", "r", "startAngle", "endAngle"], gm = {
  cartesian2d: function(t) {
    return !pm(t, tP);
  },
  polar: function(t) {
    return !pm(t, rP);
  }
}, Ns = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(t, e, r) {
    var n = t.getItemLayout(e);
    if (!n)
      return null;
    var i = r ? iP(r, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
    return {
      x: n.x + a * i / 2,
      y: n.y + o * i / 2,
      width: n.width - a * i,
      height: n.height - o * i
    };
  },
  polar: function(t, e, r) {
    var n = t.getItemLayout(e);
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
function nP(t) {
  return t.startAngle != null && t.endAngle != null && t.startAngle === t.endAngle;
}
function R1(t) {
  return /* @__PURE__ */ function(e) {
    var r = e ? "Arc" : "Angle";
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
  }(t);
}
function mm(t, e, r, n, i, a, o, s) {
  var u = e.getItemVisual(r, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = t.shape, c = eo(n.getModel("itemStyle"), f, !0);
      z(f, c), t.setShape(f);
    }
  } else {
    var l = n.get(["itemStyle", "borderRadius"]) || 0;
    t.setShape("r", l);
  }
  t.useStyle(u);
  var h = n.getShallow("cursor");
  h && t.attr("cursor", h);
  var v = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? uP(i, a.coordinateSystem) : lP(i, a.coordinateSystem), d = Ko(n);
  qo(t, d, {
    labelFetcher: a,
    labelDataIndex: r,
    defaultText: Jv(a.getData(), r),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: v
  });
  var p = t.getTextContent();
  if (s && p) {
    var g = n.get(["label", "position"]);
    t.textConfig.inside = g === "middle" ? !0 : null, QL(t, g === "outside" ? v : g, R1(o), n.get(["label", "rotate"]));
  }
  qD(p, d, a.getRawValue(r), function(y) {
    return BS(e, y);
  });
  var m = n.getModel(["emphasis"]);
  Do(t, m.get("focus"), m.get("blurScope"), m.get("disabled")), Mu(t, n), nP(i) && (t.style.fill = "none", t.style.stroke = "none", M(t.states, function(y) {
    y.style && (y.style.fill = y.style.stroke = "none");
  }));
}
function iP(t, e) {
  var r = t.get(["itemStyle", "borderColor"]);
  if (!r || r === "none")
    return 0;
  var n = t.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width), a = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
  return Math.min(n, i, a);
}
var aP = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
    }
    return t;
  }()
), ym = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.type = "largeBar", n;
    }
    return e.prototype.getDefaultShape = function() {
      return new aP();
    }, e.prototype.buildPath = function(r, n) {
      for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < i.length; f += 3)
        u[a] = l, u[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], r.rect(s[0], s[1], u[0], u[1]);
    }, e;
  }(Ce)
);
function _m(t, e, r, n) {
  var i = t.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), u = t.getModel("backgroundStyle"), l = i.getLayout("largeBackgroundPoints"), f = n ? wC(t) : 0;
  if (l) {
    var c = new ym({
      shape: {
        points: l
      },
      incremental: f,
      silent: !0,
      z2: 0
    });
    c.baseDimIdx = a, c.largeDataIndices = o, c.barWidth = s, c.useStyle(u.getItemStyle()), e.add(c), r && r.push(c);
  }
  var h = new ym({
    shape: {
      points: i.getLayout("largePoints")
    },
    incremental: f,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, e.add(h), h.useStyle(i.getVisual("style")), h.style.stroke = null, ge(h).seriesIndex = t.seriesIndex, t.get("silent") || (h.on("mousedown", Sm), h.on("mousemove", Sm)), r && r.push(h);
}
var Sm = hd(function(t) {
  var e = this, r = oP(e, t.offsetX, t.offsetY);
  ge(e).dataIndex = r >= 0 ? r : null;
}, 30, !1);
function oP(t, e, r) {
  for (var n = t.baseDimIdx, i = 1 - n, a = t.shape.points, o = t.largeDataIndices, s = [], u = [], l = t.barWidth, f = 0, c = a.length / 3; f < c; f++) {
    var h = f * 3;
    if (u[n] = l, u[i] = a[h + 2], s[n] = a[h + n], s[i] = a[h + i], u[i] < 0 && (s[i] += u[i], u[i] = -u[i]), e >= s[0] && e <= s[0] + u[0] && r >= s[1] && r <= s[1] + u[1])
      return o[f];
  }
  return -1;
}
function k1(t, e, r) {
  if (WS(r, "cartesian2d")) {
    var n = e, i = r.getArea();
    return {
      x: t ? n.x : i.x,
      y: t ? i.y : n.y,
      width: t ? n.width : i.width,
      height: t ? i.height : n.height
    };
  } else {
    var i = r.getArea(), a = e;
    return {
      cx: i.cx,
      cy: i.cy,
      r0: t ? i.r0 : a.r0,
      r: t ? i.r : a.r,
      startAngle: t ? a.startAngle : 0,
      endAngle: t ? a.endAngle : Math.PI * 2
    };
  }
}
function sP(t, e, r) {
  var n = t.type === "polar" ? Cn : ze;
  return new n({
    shape: k1(e, r, t),
    silent: !0,
    z2: 0
  });
}
function uP(t, e) {
  if (t.height === 0) {
    var r = e.getOtherAxis(e.getBaseAxis());
    return r.inverse ? "bottom" : "top";
  }
  return t.height > 0 ? "bottom" : "top";
}
function lP(t, e) {
  if (t.width === 0) {
    var r = e.getOtherAxis(e.getBaseAxis());
    return r.inverse ? "left" : "right";
  }
  return t.width >= 0 ? "right" : "left";
}
function fP(t) {
  t.registerChartView(JL), t.registerSeriesModel(qL), t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, YL(ra)), t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, XL(ra)), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, i1(ra)), t.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(e, r) {
    var n = e.componentType || "series";
    r.eachComponent({
      mainType: n,
      query: e
    }, function(i) {
      e.sortInfo && i.axis.setCategorySortInfo(e.sortInfo);
    });
  }), ZL(t);
}
function cP(t, e) {
  function r(n, i) {
    var a = [];
    return n.eachComponent({
      mainType: "series",
      subType: t,
      query: i
    }, function(o) {
      a.push(o.seriesIndex);
    }), a;
  }
  M([[t + "ToggleSelect", "toggleSelect"], [t + "Select", "select"], [t + "UnSelect", "unselect"]], function(n) {
    e(n[0], function(i, a, o) {
      i = z({}, i), process.env.NODE_ENV !== "production" && Ze(i.type, n[1]), o.dispatchAction(z(i, {
        type: n[1],
        seriesIndex: r(a, i)
      }));
    });
  });
}
function Ri(t, e, r, n, i) {
  var a = t + e;
  r.isSilent(a) || (process.env.NODE_ENV !== "production" && Yr("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var c = o.getData(), h = di(c, i.fromActionPayload);
        r.trigger(a, {
          type: a,
          seriesId: o.id,
          name: $(h) ? c.getName(h[0]) : c.getName(h),
          selected: j(u) ? u : z({}, u)
        });
      }
  }));
}
function hP(t, e, r) {
  t.on("selectchanged", function(n) {
    var i = r.getModel();
    n.isFromClick ? (Ri("map", "selectchanged", e, i, n), Ri("pie", "selectchanged", e, i, n)) : n.fromAction === "select" ? (Ri("map", "selected", e, i, n), Ri("pie", "selected", e, i, n)) : n.fromAction === "unselect" && (Ri("map", "unselected", e, i, n), Ri("pie", "unselected", e, i, n));
  });
}
function vP(t) {
  return {
    seriesType: t,
    reset: function(e, r) {
      var n = r.findComponents({
        mainType: "legend"
      });
      if (!(!n || !n.length)) {
        var i = e.getData();
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
function dP(t, e, r) {
  e = $(e) && {
    coordDimensions: e
  } || z({
    encodeDefine: t.getEncode()
  }, e);
  var n = t.getSource(), i = cS(n, e).dimensions, a = new fS(i, t);
  return a.initData(n, r), a;
}
var pP = (
  /** @class */
  function() {
    function t(e, r) {
      this._getDataWithEncodedVisual = e, this._getRawData = r;
    }
    return t.prototype.getAllNames = function() {
      var e = this._getRawData();
      return e.mapArray(e.getName);
    }, t.prototype.containName = function(e) {
      var r = this._getRawData();
      return r.indexOfName(e) >= 0;
    }, t.prototype.indexOfName = function(e) {
      var r = this._getDataWithEncodedVisual();
      return r.indexOfName(e);
    }, t.prototype.getItemVisual = function(e, r) {
      var n = this._getDataWithEncodedVisual();
      return n.getItemVisual(e, r);
    }, t;
  }()
), gn = "pie", gP = Me(), B1 = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.init = function(r) {
      t.prototype.init.apply(this, arguments), this.legendVisualProvider = new pP(Pe(this.getData, this), Pe(this.getRawData, this)), this._defaultLabelLine(r);
    }, e.prototype.mergeOption = function() {
      t.prototype.mergeOption.apply(this, arguments);
    }, e.prototype.getInitialData = function() {
      return dP(this, {
        coordDimensions: ["value"],
        encodeDefaulter: Xe(aE, this)
      });
    }, e.prototype.getDataParams = function(r) {
      var n = this.getData(), i = gP(n), a = i.seats;
      if (!a) {
        var o = [];
        n.each(n.mapDimension("value"), function(u) {
          o.push(u);
        }), a = i.seats = qx(o, n.hostModel.get("percentPrecision"));
      }
      var s = t.prototype.getDataParams.call(this, r);
      return s.percent = a[r] || 0, s.$vars.push("percent"), s;
    }, e.prototype._defaultLabelLine = function(r) {
      qc(r, "labelLine", ["show"]);
      var n = r.labelLine, i = r.emphasis.labelLine;
      n.show = n.show && r.label.show, i.show = i.show && r.emphasis.label.show;
    }, e.type = "series." + gn, e.defaultOption = {
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
    }, e;
  }(ar)
);
PE({
  fullType: B1.type,
  getCoord2: function(t) {
    return t.getShallow("center");
  }
});
function V1(t, e, r, n, i, a, o, s) {
  var u = i - t, l = a - e, f = r - t, c = n - e, h = Math.sqrt(f * f + c * c);
  f /= h, c /= h;
  var v = u * f + l * c, d = v / h;
  d *= h;
  var p = o[0] = t + d * f, g = o[1] = e + d * c;
  return Math.sqrt((p - i) * (p - i) + (g - a) * (g - a));
}
var fn = new ue(), Fe = new ue(), et = new ue(), cn = new ue(), _r = new ue(), Ku = [], gt = new ue();
function mP(t, e) {
  if (e <= 180 && e > 0) {
    e = e / 180 * Math.PI, fn.fromArray(t[0]), Fe.fromArray(t[1]), et.fromArray(t[2]), ue.sub(cn, fn, Fe), ue.sub(_r, et, Fe);
    var r = cn.len(), n = _r.len();
    if (!(r < 1e-3 || n < 1e-3)) {
      cn.scale(1 / r), _r.scale(1 / n);
      var i = cn.dot(_r), a = Math.cos(e);
      if (a < i) {
        var o = V1(Fe.x, Fe.y, et.x, et.y, fn.x, fn.y, Ku);
        gt.fromArray(Ku), gt.scaleAndAdd(_r, o / Math.tan(Math.PI - e));
        var s = et.x !== Fe.x ? (gt.x - Fe.x) / (et.x - Fe.x) : (gt.y - Fe.y) / (et.y - Fe.y);
        if (isNaN(s))
          return;
        s < 0 ? ue.copy(gt, Fe) : s > 1 && ue.copy(gt, et), gt.toArray(t[1]);
      }
    }
  }
}
function yP(t, e, r) {
  if (r <= 180 && r > 0) {
    r = r / 180 * Math.PI, fn.fromArray(t[0]), Fe.fromArray(t[1]), et.fromArray(t[2]), ue.sub(cn, Fe, fn), ue.sub(_r, et, Fe);
    var n = cn.len(), i = _r.len();
    if (!(n < 1e-3 || i < 1e-3)) {
      cn.scale(1 / n), _r.scale(1 / i);
      var a = cn.dot(e), o = Math.cos(r);
      if (a < o) {
        var s = V1(Fe.x, Fe.y, et.x, et.y, fn.x, fn.y, Ku);
        gt.fromArray(Ku);
        var u = Math.PI / 2, l = Math.acos(_r.dot(e)), f = u + l - r;
        if (f >= u)
          ue.copy(gt, et);
        else {
          gt.scaleAndAdd(_r, s / Math.tan(Math.PI / 2 - f));
          var c = et.x !== Fe.x ? (gt.x - Fe.x) / (et.x - Fe.x) : (gt.y - Fe.y) / (et.y - Fe.y);
          if (isNaN(c))
            return;
          c < 0 ? ue.copy(gt, Fe) : c > 1 && ue.copy(gt, et);
        }
        gt.toArray(t[1]);
      }
    }
  }
}
function zf(t, e, r, n) {
  var i = r === "normal", a = i ? t : t.ensureState(r);
  a.ignore = e;
  var o = n.get("smooth");
  o = o === !0 ? 0.3 : Math.max(+o, 0) || 0, a.shape = a.shape || {}, a.shape.smooth = o;
  var s = n.getModel("lineStyle").getLineStyle();
  i ? t.useStyle(s) : a.style = s;
}
function _P(t, e) {
  var r = e.smooth, n = e.points;
  if (n)
    if (t.moveTo(n[0][0], n[0][1]), r > 0 && n.length >= 3) {
      var i = Ac(n[0], n[1]), a = Ac(n[1], n[2]);
      if (!i || !a) {
        t.lineTo(n[1][0], n[1][1]), t.lineTo(n[2][0], n[2][1]);
        return;
      }
      var o = Math.min(i, a) * r, s = Xl([], n[1], n[0], o / i), u = Xl([], n[1], n[2], o / a), l = Xl([], s, u, 0.5);
      t.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), t.bezierCurveTo(u[0], u[1], u[0], u[1], n[2][0], n[2][1]);
    } else
      for (var f = 1; f < n.length; f++)
        t.lineTo(n[f][0], n[f][1]);
}
function SP(t, e, r) {
  var n = t.getTextGuideLine(), i = t.getTextContent();
  if (!i) {
    n && t.removeTextGuideLine();
    return;
  }
  for (var a = e.normal, o = a.get("show"), s = i.ignore, u = 0; u < xu.length; u++) {
    var l = xu[u], f = e[l], c = l === "normal";
    if (f) {
      var h = f.get("show"), v = c ? s : K(i.states[l] && i.states[l].ignore, s);
      if (v || !K(h, o)) {
        var d = c ? n : n && n.states[l];
        d && (d.ignore = !0), n && zf(n, !0, l, f);
        continue;
      }
      n || (n = new Zo(), t.setTextGuideLine(n), !c && (s || !o) && zf(n, !0, "normal", e.normal), t.stateProxy && (n.stateProxy = t.stateProxy)), zf(n, !1, l, f);
    }
  }
  if (n) {
    Ae(n.style, r), n.style.fill = null;
    var p = a.get("showAbove"), g = t.textGuideLineConfig = t.textGuideLineConfig || {};
    g.showAbove = p || !1, n.buildPath = _P;
  }
}
function bP(t, e) {
  e = e || "labelLine";
  for (var r = {
    normal: t.getModel(e)
  }, n = 0; n < er.length; n++) {
    var i = er[n];
    r[i] = t.getModel([i, e]);
  }
  return r;
}
var wP = Math.PI / 180;
function bm(t, e, r, n, i, a, o, s, u, l) {
  if (t.length < 2)
    return;
  function f(p) {
    for (var g = p.rB, m = g * g, y = 0; y < p.list.length; y++) {
      var _ = p.list[y], S = Math.abs(_.label.y - r), b = n + _.len, w = b * b, T = Math.sqrt(Math.abs((1 - S * S / m) * w)), x = e + (T + _.len2) * i, D = x - _.label.x, C = _.targetTextWidth - D * i;
      F1(_, C, !0), _.label.x = x;
    }
  }
  function c(p) {
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
          var w = _.label.x - e - _.len2 * i, T = n + _.len, x = Math.abs(w) < T ? Math.sqrt(b * b / (1 - w * w / T / T)) : T;
          S.rB = x, S.maxY = b;
        }
        S.list.push(_);
      }
    f(g), f(m);
  }
  for (var h = t.length, v = 0; v < h; v++)
    if (t[v].position === "outer" && t[v].labelAlignTo === "labelLine") {
      var d = t[v].label.x - l;
      t[v].linePoints[1][0] += d, t[v].label.x = l;
    }
  QI(t, 1, u, u + o) && c(t);
}
function TP(t, e, r, n, i, a, o, s) {
  for (var u = [], l = [], f = Number.MAX_VALUE, c = -Number.MAX_VALUE, h = 0; h < t.length; h++) {
    var v = t[h].label;
    Gf(t[h]) || (v.x < e ? (f = Math.min(f, v.x), u.push(t[h])) : (c = Math.max(c, v.x), l.push(t[h])));
  }
  for (var h = 0; h < t.length; h++) {
    var d = t[h];
    if (!Gf(d) && d.linePoints) {
      if (d.labelStyleWidth != null)
        continue;
      var v = d.label, p = d.linePoints, g = void 0;
      d.labelAlignTo === "edge" ? v.x < e ? g = p[2][0] - d.labelDistance - o - d.edgeDistance : g = o + i - d.edgeDistance - p[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < e ? g = f - o - d.bleedMargin : g = o + i - c - d.bleedMargin : v.x < e ? g = v.x - o - d.bleedMargin : g = o + i - v.x - d.bleedMargin, d.targetTextWidth = g, F1(d, g, !1);
    }
  }
  bm(l, e, r, n, 1, i, a, o, s, c), bm(u, e, r, n, -1, i, a, o, s, f);
  for (var h = 0; h < t.length; h++) {
    var d = t[h];
    if (!Gf(d) && d.linePoints) {
      var v = d.label, p = d.linePoints, m = d.labelAlignTo === "edge", y = v.style.padding, _ = y ? y[1] + y[3] : 0, S = v.style.backgroundColor ? 0 : _, b = d.rect.width + S, w = p[1][0] - p[2][0];
      m ? v.x < e ? p[2][0] = o + d.edgeDistance + b + d.labelDistance : p[2][0] = o + i - d.edgeDistance - b - d.labelDistance : (v.x < e ? p[2][0] = v.x + d.labelDistance : p[2][0] = v.x - d.labelDistance, p[1][0] = p[2][0] + w), p[1][1] = p[2][1] = v.y;
    }
  }
}
function F1(t, e, r) {
  if (t.labelStyleWidth == null) {
    var n = t.label, i = n.style, a = t.rect, o = i.backgroundColor, s = i.padding, u = s ? s[1] + s[3] : 0, l = i.overflow, f = a.width + (o ? 0 : u);
    if (e < f || r) {
      if (l && l.match("break")) {
        n.setStyle("backgroundColor", null), n.setStyle("width", e - u);
        var c = n.getBoundingRect();
        n.setStyle("width", Math.ceil(c.width)), n.setStyle("backgroundColor", o);
      } else {
        var h = e - u, v = e < f ? h : (
          // Current available width is enough, but the text may have
          // already been wrapped with a smaller available width.
          r ? h > t.unconstrainedWidth ? null : h : null
        );
        n.setStyle("width", v);
      }
      z1(a, n);
    }
  }
}
function z1(t, e) {
  wm.rect = t, _1(wm, e, xP);
}
var xP = {
  minMarginForce: [null, 0, null, 0],
  marginDefault: [1, 0, 1, 0]
}, wm = {};
function Gf(t) {
  return t.position === "center";
}
function CP(t) {
  var e = t.getData(), r = [], n, i, a = !1, o = (t.get("minShowLabelAngle") || 0) * wP, s = e.getLayout("viewRect"), u = e.getLayout("r"), l = s.width, f = s.x, c = s.y, h = s.height;
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
  e.each(function(w) {
    var T = e.getItemGraphicEl(w), x = T.shape, D = T.getTextContent(), C = T.getTextGuideLine(), E = e.getItemModel(w), L = E.getModel("label"), A = L.get("position") || E.get(["emphasis", "label", "position"]), P = L.get("distanceToLabelLine"), O = L.get("alignTo"), N = ke(L.get("edgeDistance"), l), B = L.get("bleedMargin");
    B == null && (B = Math.min(l, h) > 200 ? 10 : 2);
    var R = E.getModel("labelLine"), F = R.get("length");
    F = ke(F, l);
    var G = R.get("length2");
    if (G = ke(G, l), Math.abs(x.endAngle - x.startAngle) < o) {
      M(D.states, v), D.ignore = !0, C && (M(C.states, v), C.ignore = !0);
      return;
    }
    if (d(D)) {
      var H = (x.startAngle + x.endAngle) / 2, Y = Math.cos(H), q = Math.sin(H), W, ne, se, Oe;
      n = x.cx, i = x.cy;
      var Ie = A === "inside" || A === "inner";
      if (A === "center")
        W = x.cx, ne = x.cy, Oe = "center";
      else {
        var he = (Ie ? (x.r + x.r0) / 2 * Y : x.r * Y) + n, Se = (Ie ? (x.r + x.r0) / 2 * q : x.r * q) + i;
        if (W = he + Y * 3, ne = Se + q * 3, !Ie) {
          var te = he + Y * (F + u - x.r), fe = Se + q * (F + u - x.r), ot = te + (Y < 0 ? -1 : 1) * G, Re = fe;
          O === "edge" ? W = Y < 0 ? f + N : f + l - N : W = ot + (Y < 0 ? -P : P), ne = Re, se = [[he, Se], [te, fe], [ot, Re]];
        }
        Oe = Ie ? "center" : O === "edge" ? Y > 0 ? "right" : "left" : Y > 0 ? "left" : "right";
      }
      var st = Math.PI, Ue = 0, Tt = L.get("rotate");
      if (Ee(Tt))
        Ue = Tt * (st / 180);
      else if (A === "center")
        Ue = 0;
      else if (Tt === "radial" || Tt === !0) {
        var Ir = Y < 0 ? -H + st : -H;
        Ue = Ir;
      } else if (Tt === "tangential" || Tt === "tangential-noflip" && A !== "outside" && A !== "outer") {
        var ut = Math.atan2(Y, q);
        ut < 0 && (ut = st * 2 + ut);
        var wi = q > 0;
        wi && Tt !== "tangential-noflip" && (ut = st + ut), Ue = ut - st;
      }
      if (a = !!Ue, D.x = W, D.y = ne, D.rotation = Ue, D.setStyle({
        verticalAlign: "middle"
      }), Ie) {
        D.setStyle({
          align: Oe
        });
        var Dn = D.states.select;
        Dn && (Dn.x += D.x, Dn.y += D.y);
      } else {
        var Zr = new ae(0, 0, 0, 0);
        z1(Zr, D), r.push({
          label: D,
          labelLine: C,
          position: A,
          len: F,
          len2: G,
          minTurnAngle: R.get("minTurnAngle"),
          maxSurfaceAngle: R.get("maxSurfaceAngle"),
          surfaceNormal: new ue(Y, q),
          linePoints: se,
          textAlign: Oe,
          labelDistance: P,
          labelAlignTo: O,
          edgeDistance: N,
          bleedMargin: B,
          rect: Zr,
          unconstrainedWidth: Zr.width,
          labelStyleWidth: D.style.width
        });
      }
      T.setTextConfig({
        inside: Ie
      });
    }
  }), !a && t.get("avoidLabelOverlap") && TP(r, n, i, u, l, h, f, c);
  for (var p = 0; p < r.length; p++) {
    var g = r[p], m = g.label, y = g.labelLine, _ = isNaN(m.x) || isNaN(m.y);
    if (m) {
      m.setStyle({
        align: g.textAlign
      }), _ && (M(m.states, v), m.ignore = !0);
      var S = m.states.select;
      S && (S.x += m.x, S.y += m.y);
    }
    if (y) {
      var b = g.linePoints;
      _ || !b ? (M(y.states, v), y.ignore = !0) : (mP(b, g.minTurnAngle), yP(b, g.surfaceNormal, g.maxSurfaceAngle), y.setShape({
        points: b
      }), m.__hostTarget.textGuideLineConfig = {
        anchor: new ue(b[0][0], b[0][1])
      });
    }
  }
}
var Tm = Math.PI * 2, Rs = Math.PI / 180, DP = TC(gn, EP);
function EP(t, e) {
  t.eachSeriesByType(gn, function(r) {
    var n = r.getData(), i = n.mapDimension("value"), a = bA(r, e), o = a.cx, s = a.cy, u = a.r, l = a.r0, f = a.viewRect, c = -r.get("startAngle") * Rs, h = r.get("endAngle"), v = r.get("padAngle") * Rs;
    h = h === "auto" ? c - Tm : -h * Rs;
    var d = r.get("minAngle") * Rs, p = d + v, g = 0;
    n.each(i, function(N) {
      !isNaN(N) && g++;
    });
    var m = n.getSum(i), y = Math.PI / (m || g) * 2, _ = r.get("clockwise"), S = r.get("roseType"), b = r.get("stillShowZeroSum"), w = n.getDataExtent(i);
    w[0] = 0;
    var T = _ ? 1 : -1, x = [c, h], D = T * v / 2;
    Y0(x, !_), c = x[0], h = x[1];
    var C = G1(r);
    C.startAngle = c, C.endAngle = h, C.clockwise = _, C.cx = o, C.cy = s, C.r = u, C.r0 = l;
    var E = Math.abs(h - c), L = E, A = 0, P = c;
    if (n.setLayout({
      viewRect: f,
      r: u
    }), n.each(i, function(N, B) {
      var R;
      if (isNaN(N)) {
        n.setItemLayout(B, {
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
      S !== "area" ? R = m === 0 && b ? y : N * y : R = E / g, R < p ? (R = p, L -= p) : A += N;
      var F = P + T * R, G = 0, H = 0;
      v > R ? (G = P + T * R / 2, H = G) : (G = P + D, H = F - D), n.setItemLayout(B, {
        angle: R,
        startAngle: G,
        endAngle: H,
        clockwise: _,
        cx: o,
        cy: s,
        r0: l,
        r: S ? $c(N, w, [l, u]) : u
      }), P = F;
    }), L < Tm && g)
      if (L <= 1e-3) {
        var O = E / g;
        n.each(i, function(N, B) {
          if (!isNaN(N)) {
            var R = n.getItemLayout(B);
            R.angle = O;
            var F = 0, G = 0;
            O < v ? (F = c + T * (B + 1 / 2) * O, G = F) : (F = c + T * B * O + D, G = c + T * (B + 1) * O - D), R.startAngle = F, R.endAngle = G;
          }
        });
      } else
        y = L / A, P = c, n.each(i, function(N, B) {
          if (!isNaN(N)) {
            var R = n.getItemLayout(B), F = R.angle === p ? p : N * y, G = 0, H = 0;
            F < v ? (G = P + T * F / 2, H = G) : (G = P + D, H = P + T * F - D), R.startAngle = G, R.endAngle = H, P += T * F;
          }
        });
  });
}
var G1 = Me(), AP = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r, n, i) {
      var a = t.call(this) || this;
      a.z2 = 2;
      var o = new at();
      return a.setTextContent(o), a.updateData(r, n, i, !0), a;
    }
    return e.prototype.updateData = function(r, n, i, a) {
      var o = this, s = r.hostModel, u = r.getItemModel(n), l = u.getModel("emphasis"), f = r.getItemLayout(n), c = z(eo(u.getModel("itemStyle"), f, !0), f);
      if (isNaN(c.startAngle)) {
        o.setShape(c);
        return;
      }
      if (a) {
        o.setShape(c);
        var h = s.getShallow("animationType");
        s.ecModel.ssr ? (jt(o, {
          scaleX: 0,
          scaleY: 0
        }, s, {
          dataIndex: n,
          isFrom: !0
        }), o.originX = c.cx, o.originY = c.cy) : h === "scale" ? (o.shape.r = f.r0, jt(o, {
          shape: {
            r: f.r
          }
        }, s, n)) : i != null ? (o.setShape({
          startAngle: i,
          endAngle: i
        }), jt(o, {
          shape: {
            startAngle: f.startAngle,
            endAngle: f.endAngle
          }
        }, s, n)) : (o.shape.endAngle = f.startAngle, wt(o, {
          shape: {
            endAngle: f.endAngle
          }
        }, s, n));
      } else
        Ev(o), wt(o, {
          shape: c
        }, s, n);
      o.useStyle(r.getItemVisual(n, "style")), Mu(o, u);
      var v = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), p = Math.cos(v) * d, g = Math.sin(v) * d, m = u.getShallow("cursor");
      m && o.attr("cursor", m), this._updateLabel(s, r, n), o.ensureState("emphasis").shape = z({
        r: f.r + (l.get("scale") && l.get("scaleSize") || 0)
      }, eo(l.getModel("itemStyle"), f)), z(o.ensureState("select"), {
        x: p,
        y: g,
        shape: eo(u.getModel(["select", "itemStyle"]), f)
      }), z(o.ensureState("blur"), {
        shape: eo(u.getModel(["blur", "itemStyle"]), f)
      });
      var y = o.getTextGuideLine(), _ = o.getTextContent();
      y && z(y.ensureState("select"), {
        x: p,
        y: g
      }), z(_.ensureState("select"), {
        x: p,
        y: g
      }), Do(this, l.get("focus"), l.get("blurScope"), l.get("disabled"));
    }, e.prototype._updateLabel = function(r, n, i) {
      var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), u = n.getItemVisual(i, "style"), l = u && u.fill, f = u && u.opacity;
      qo(a, Ko(o), {
        labelFetcher: n.hostModel,
        labelDataIndex: i,
        inheritColor: l,
        defaultOpacity: f,
        defaultText: r.getFormattedLabel(i, "normal") || n.getName(i)
      });
      var c = a.getTextContent();
      a.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      }), c.attr({
        z2: 10
      });
      var h = o.get(["label", "position"]);
      if (h !== "outside" && h !== "outer")
        a.removeTextGuideLine();
      else {
        var v = this.getTextGuideLine();
        v || (v = new Zo(), this.setTextGuideLine(v)), SP(this, bP(o), {
          stroke: l,
          opacity: zr(s.get(["lineStyle", "opacity"]), f, 1)
        });
      }
    }, e;
  }(Cn)
), MP = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = gn, r.ignoreLabelLineUpdate = !0, r;
    }
    return e.prototype.render = function(r, n, i, a) {
      var o = r.getData(), s = this._data, u = this.group, l;
      if (!s && o.count() > 0) {
        for (var f = o.getItemLayout(0), c = 1; isNaN(f && f.startAngle) && c < o.count(); ++c)
          f = o.getItemLayout(c);
        f && (l = f.startAngle);
      }
      if (this._emptyCircleSector && u.remove(this._emptyCircleSector), o.count() === 0 && r.get("showEmptyCircle")) {
        var h = G1(r), v = new Cn({
          shape: ce(h)
        });
        v.useStyle(r.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = v, u.add(v);
      }
      o.diff(s).add(function(d) {
        var p = new AP(o, d, l);
        o.setItemGraphicEl(d, p), u.add(p);
      }).update(function(d, p) {
        var g = s.getItemGraphicEl(p);
        g.updateData(o, d, l), g.off("click"), u.add(g), o.setItemGraphicEl(d, g);
      }).remove(function(d) {
        var p = s.getItemGraphicEl(d);
        ho(p, r, d);
      }).execute(), CP(r), r.get("animationTypeUpdate") !== "expansion" && (this._data = o);
    }, e.prototype.dispose = function() {
    }, e.prototype.containPoint = function(r, n) {
      var i = n.getData(), a = i.getItemLayout(0);
      if (a) {
        var o = r[0] - a.cx, s = r[1] - a.cy, u = Math.sqrt(o * o + s * s);
        return u <= a.r && u >= a.r0;
      }
    }, e.type = gn, e;
  }(Jt)
);
function IP(t) {
  return {
    seriesType: t,
    reset: function(e, r) {
      var n = e.getData();
      n.filterSelf(function(i) {
        var a = n.mapDimension("value"), o = n.get(a, i);
        return !(Ee(o) && !isNaN(o) && o < 0);
      });
    }
  };
}
function LP(t) {
  t.registerChartView(MP), t.registerSeriesModel(B1), cP(gn, t.registerAction), t.registerLayout(DP), t.registerProcessor(vP(gn)), t.registerProcessor(IP(gn));
}
var ki = /* @__PURE__ */ function() {
  function t(e, r) {
    this.target = e, this.topTarget = r && r.topTarget;
  }
  return t;
}(), PP = function() {
  function t(e) {
    this.handler = e, e.on("mousedown", this._dragStart, this), e.on("mousemove", this._drag, this), e.on("mouseup", this._dragEnd, this);
  }
  return t.prototype._dragStart = function(e) {
    for (var r = e.target; r && !r.draggable; )
      r = r.parent || r.__hostTarget;
    r && (this._draggingTarget = r, r.dragging = !0, this._x = e.offsetX, this._y = e.offsetY, this.handler.dispatchToElement(new ki(r, e), "dragstart", e.event));
  }, t.prototype._drag = function(e) {
    var r = this._draggingTarget;
    if (r) {
      var n = e.offsetX, i = e.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, r.drift(a, o, e), this.handler.dispatchToElement(new ki(r, e), "drag", e.event);
      var s = this.handler.findHover(n, i, r).target, u = this._dropTarget;
      this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new ki(u, e), "dragleave", e.event), s && s !== u && this.handler.dispatchToElement(new ki(s, e), "dragenter", e.event));
    }
  }, t.prototype._dragEnd = function(e) {
    var r = this._draggingTarget;
    r && (r.dragging = !1), this.handler.dispatchToElement(new ki(r, e), "dragend", e.event), this._dropTarget && this.handler.dispatchToElement(new ki(this._dropTarget, e), "drop", e.event), this._draggingTarget = null, this._dropTarget = null;
  }, t;
}(), OP = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Hf = [], NP = le.browser.firefox && +le.browser.version.split(".")[0] < 39;
function Dh(t, e, r, n) {
  return r = r || {}, n ? xm(t, e, r) : NP && e.layerX != null && e.layerX !== e.offsetX ? (r.zrX = e.layerX, r.zrY = e.layerY) : e.offsetX != null ? (r.zrX = e.offsetX, r.zrY = e.offsetY) : xm(t, e, r), r;
}
function xm(t, e, r) {
  if (le.domSupported && t.getBoundingClientRect) {
    var n = e.clientX, i = e.clientY;
    if (pS(t)) {
      var a = t.getBoundingClientRect();
      r.zrX = n - a.left, r.zrY = i - a.top;
      return;
    } else if (fh(Hf, t, n, i)) {
      r.zrX = Hf[0], r.zrY = Hf[1];
      return;
    }
  }
  r.zrX = r.zrY = 0;
}
function vd(t) {
  return t || window.event;
}
function zt(t, e, r) {
  if (e = vd(e), e.zrX != null)
    return e;
  var n = e.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? e.targetTouches[0] : e.changedTouches[0];
    o && Dh(t, o, e, r);
  } else {
    Dh(t, e, e, r);
    var a = RP(e);
    e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3;
  }
  var s = e.button;
  return e.which == null && s !== void 0 && OP.test(e.type) && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e;
}
function RP(t) {
  var e = t.wheelDelta;
  if (e)
    return e;
  var r = t.deltaX, n = t.deltaY;
  if (r == null || n == null)
    return e;
  var i = Math.abs(n !== 0 ? n : r), a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
  return 3 * i * a;
}
function kP(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function BP(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
var H1 = function(t) {
  t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
}, VP = function() {
  function t() {
    this._track = [];
  }
  return t.prototype.recognize = function(e, r, n) {
    return this._doTrack(e, r, n), this._recognize(e);
  }, t.prototype.clear = function() {
    return this._track.length = 0, this;
  }, t.prototype._doTrack = function(e, r, n) {
    var i = e.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: r,
        event: e
      }, o = 0, s = i.length; o < s; o++) {
        var u = i[o], l = Dh(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, t.prototype._recognize = function(e) {
    for (var r in Uf)
      if (Uf.hasOwnProperty(r)) {
        var n = Uf[r](this._track, e);
        if (n)
          return n;
      }
  }, t;
}();
function Cm(t) {
  var e = t[1][0] - t[0][0], r = t[1][1] - t[0][1];
  return Math.sqrt(e * e + r * r);
}
function FP(t) {
  return [
    (t[0][0] + t[1][0]) / 2,
    (t[0][1] + t[1][1]) / 2
  ];
}
var Uf = {
  pinch: function(t, e) {
    var r = t.length;
    if (r) {
      var n = (t[r - 1] || {}).points, i = (t[r - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Cm(n) / Cm(i);
        !isFinite(a) && (a = 1), e.pinchScale = a;
        var o = FP(n);
        return e.pinchX = o[0], e.pinchY = o[1], {
          type: "pinch",
          target: t[0].target,
          event: e
        };
      }
    }
  }
}, U1 = "silent";
function zP(t, e, r) {
  return {
    type: t,
    event: r,
    target: e.target,
    topTarget: e.topTarget,
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
    stop: GP
  };
}
function GP() {
  H1(this.event);
}
var HP = function(t) {
  X(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handler = null, r;
  }
  return e.prototype.dispose = function() {
  }, e.prototype.setCursor = function() {
  }, e;
}(Ar), za = /* @__PURE__ */ function() {
  function t(e, r) {
    this.x = e, this.y = r;
  }
  return t;
}(), UP = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Wf = new ae(0, 0, 0, 0), W1 = function(t) {
  X(e, t);
  function e(r, n, i, a, o) {
    var s = t.call(this) || this;
    return s._hovered = new za(0, 0), s.storage = r, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new HP(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new PP(s), s;
  }
  return e.prototype.setHandlerProxy = function(r) {
    this.proxy && this.proxy.dispose(), r && (M(UP, function(n) {
      r.on && r.on(n, this[n], this);
    }, this), r.handler = this), this.proxy = r;
  }, e.prototype.mousemove = function(r) {
    var n = r.zrX, i = r.zrY, a = Y1(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new za(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r);
  }, e.prototype.mouseout = function(r) {
    var n = r.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: r });
  }, e.prototype.resize = function() {
    this._hovered = new za(0, 0);
  }, e.prototype.dispatch = function(r, n) {
    var i = this[r];
    i && i.call(this, n);
  }, e.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, e.prototype.setCursorStyle = function(r) {
    var n = this.proxy;
    n.setCursor && n.setCursor(r);
  }, e.prototype.dispatchToElement = function(r, n, i) {
    r = r || {};
    var a = r.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = zP(n, r, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, e.prototype.findHover = function(r, n, i) {
    var a = this.storage.getDisplayList(), o = new za(r, n);
    if (Dm(a, o, r, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new ae(r - l, n - l, u, u), c = a.length - 1; c >= 0; c--) {
        var h = a[c];
        h !== i && !h.ignore && !h.ignoreCoarsePointer && (!h.parent || !h.parent.ignoreCoarsePointer) && (Wf.copy(h.getBoundingRect()), h.transform && Wf.applyTransform(h.transform), Wf.intersect(f) && s.push(h));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, p = Math.PI * 2, g = 0; g < l; g += v)
          for (var m = 0; m < p; m += d) {
            var y = r + g * Math.cos(m), _ = n + g * Math.sin(m);
            if (Dm(s, o, y, _, i), o.target)
              return o;
          }
    }
    return o;
  }, e.prototype.processGesture = function(r, n) {
    this._gestureMgr || (this._gestureMgr = new VP());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      r.gestureEvent = o;
      var s = new za();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, e;
}(Ar);
M(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
  W1.prototype[t] = function(e) {
    var r = e.zrX, n = e.zrY, i = Y1(this, r, n), a, o;
    if ((t !== "mouseup" || !i) && (a = this.findHover(r, n), o = a.target), t === "mousedown")
      this._downEl = o, this._downPoint = [e.zrX, e.zrY], this._upEl = o;
    else if (t === "mouseup")
      this._upEl = o;
    else if (t === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Ac(this._downPoint, [e.zrX, e.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, t, e);
  };
});
function WP(t, e, r) {
  if (t[t.rectHover ? "rectContain" : "contain"](e, r)) {
    for (var n = t, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(e, r))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s ? n.ignoreHostSilent ? null : s : n.parent;
    }
    return i ? U1 : !0;
  }
  return !1;
}
function Dm(t, e, r, n, i) {
  for (var a = t.length - 1; a >= 0; a--) {
    var o = t[a], s = void 0;
    if (o !== i && !o.ignore && (s = WP(o, r, n)) && (!e.topTarget && (e.topTarget = o), s !== U1)) {
      e.target = o;
      break;
    }
  }
}
function Y1(t, e, r) {
  var n = t.painter;
  return e < 0 || e > n.getWidth() || r < 0 || r > n.getHeight();
}
var X1 = 32, Ga = 7;
function YP(t) {
  for (var e = 0; t >= X1; )
    e |= t & 1, t >>= 1;
  return t + e;
}
function Em(t, e, r, n) {
  var i = e + 1;
  if (i === r)
    return 1;
  if (n(t[i++], t[e]) < 0) {
    for (; i < r && n(t[i], t[i - 1]) < 0; )
      i++;
    XP(t, e, i);
  } else
    for (; i < r && n(t[i], t[i - 1]) >= 0; )
      i++;
  return i - e;
}
function XP(t, e, r) {
  for (r--; e < r; ) {
    var n = t[e];
    t[e++] = t[r], t[r--] = n;
  }
}
function Am(t, e, r, n, i) {
  for (n === e && n++; n < r; n++) {
    for (var a = t[n], o = e, s = n, u; o < s; )
      u = o + s >>> 1, i(a, t[u]) < 0 ? s = u : o = u + 1;
    var l = n - o;
    switch (l) {
      case 3:
        t[o + 3] = t[o + 2];
      case 2:
        t[o + 2] = t[o + 1];
      case 1:
        t[o + 1] = t[o];
        break;
      default:
        for (; l > 0; )
          t[o + l] = t[o + l - 1], l--;
    }
    t[o] = a;
  }
}
function Yf(t, e, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(t, e[r + i]) > 0) {
    for (s = n - i; u < s && a(t, e[r + i + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  } else {
    for (s = i + 1; u < s && a(t, e[r + i - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(t, e[r + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function Xf(t, e, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(t, e[r + i]) < 0) {
    for (s = i + 1; u < s && a(t, e[r + i - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  } else {
    for (s = n - i; u < s && a(t, e[r + i + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(t, e[r + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function $P(t, e) {
  var r = Ga, n, i, a = 0, o = [];
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
    var y = Xf(t[g], t, d, p, 0, e);
    d += y, p -= y, p !== 0 && (m = Yf(t[d + p - 1], t, g, m, m - 1, e), m !== 0 && (p <= m ? c(d, p, g, m) : h(d, p, g, m)));
  }
  function c(v, d, p, g) {
    var m = 0;
    for (m = 0; m < d; m++)
      o[m] = t[v + m];
    var y = 0, _ = p, S = v;
    if (t[S++] = t[_++], --g === 0) {
      for (m = 0; m < d; m++)
        t[S + m] = o[y + m];
      return;
    }
    if (d === 1) {
      for (m = 0; m < g; m++)
        t[S + m] = t[_ + m];
      t[S + g] = o[y];
      return;
    }
    for (var b = r, w, T, x; ; ) {
      w = 0, T = 0, x = !1;
      do
        if (e(t[_], o[y]) < 0) {
          if (t[S++] = t[_++], T++, w = 0, --g === 0) {
            x = !0;
            break;
          }
        } else if (t[S++] = o[y++], w++, T = 0, --d === 1) {
          x = !0;
          break;
        }
      while ((w | T) < b);
      if (x)
        break;
      do {
        if (w = Xf(t[_], o, y, d, 0, e), w !== 0) {
          for (m = 0; m < w; m++)
            t[S + m] = o[y + m];
          if (S += w, y += w, d -= w, d <= 1) {
            x = !0;
            break;
          }
        }
        if (t[S++] = t[_++], --g === 0) {
          x = !0;
          break;
        }
        if (T = Yf(o[y], t, _, g, 0, e), T !== 0) {
          for (m = 0; m < T; m++)
            t[S + m] = t[_ + m];
          if (S += T, _ += T, g -= T, g === 0) {
            x = !0;
            break;
          }
        }
        if (t[S++] = o[y++], --d === 1) {
          x = !0;
          break;
        }
        b--;
      } while (w >= Ga || T >= Ga);
      if (x)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (r = b, r < 1 && (r = 1), d === 1) {
      for (m = 0; m < g; m++)
        t[S + m] = t[_ + m];
      t[S + g] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (m = 0; m < d; m++)
        t[S + m] = o[y + m];
    }
  }
  function h(v, d, p, g) {
    var m = 0;
    for (m = 0; m < g; m++)
      o[m] = t[p + m];
    var y = v + d - 1, _ = g - 1, S = p + g - 1, b = 0, w = 0;
    if (t[S--] = t[y--], --d === 0) {
      for (b = S - (g - 1), m = 0; m < g; m++)
        t[b + m] = o[m];
      return;
    }
    if (g === 1) {
      for (S -= d, y -= d, w = S + 1, b = y + 1, m = d - 1; m >= 0; m--)
        t[w + m] = t[b + m];
      t[S] = o[_];
      return;
    }
    for (var T = r; ; ) {
      var x = 0, D = 0, C = !1;
      do
        if (e(o[_], t[y]) < 0) {
          if (t[S--] = t[y--], x++, D = 0, --d === 0) {
            C = !0;
            break;
          }
        } else if (t[S--] = o[_--], D++, x = 0, --g === 1) {
          C = !0;
          break;
        }
      while ((x | D) < T);
      if (C)
        break;
      do {
        if (x = d - Xf(o[_], t, v, d, d - 1, e), x !== 0) {
          for (S -= x, y -= x, d -= x, w = S + 1, b = y + 1, m = x - 1; m >= 0; m--)
            t[w + m] = t[b + m];
          if (d === 0) {
            C = !0;
            break;
          }
        }
        if (t[S--] = o[_--], --g === 1) {
          C = !0;
          break;
        }
        if (D = g - Yf(t[y], o, 0, g, g - 1, e), D !== 0) {
          for (S -= D, _ -= D, g -= D, w = S + 1, b = _ + 1, m = 0; m < D; m++)
            t[w + m] = o[b + m];
          if (g <= 1) {
            C = !0;
            break;
          }
        }
        if (t[S--] = t[y--], --d === 0) {
          C = !0;
          break;
        }
        T--;
      } while (x >= Ga || D >= Ga);
      if (C)
        break;
      T < 0 && (T = 0), T += 2;
    }
    if (r = T, r < 1 && (r = 1), g === 1) {
      for (S -= d, y -= d, w = S + 1, b = y + 1, m = d - 1; m >= 0; m--)
        t[w + m] = t[b + m];
      t[S] = o[_];
    } else {
      if (g === 0)
        throw new Error();
      for (b = S - (g - 1), m = 0; m < g; m++)
        t[b + m] = o[m];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function su(t, e, r, n) {
  r || (r = 0), n || (n = t.length);
  var i = n - r;
  if (!(i < 2)) {
    var a = 0;
    if (i < X1) {
      a = Em(t, r, n, e), Am(t, r, n, r + a, e);
      return;
    }
    var o = $P(t, e), s = YP(i);
    do {
      if (a = Em(t, r, n, e), a < s) {
        var u = i;
        u > s && (u = s), Am(t, r, r + u, r + a, e), a = u;
      }
      o.pushRun(r, a), o.mergeRuns(), i -= a, r += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var Mm = !1;
function $f() {
  Mm || (Mm = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Im(t, e) {
  return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
}
var ZP = function() {
  function t() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Im;
  }
  return t.prototype.traverse = function(e, r) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(e, r);
  }, t.prototype.getDisplayList = function(e, r) {
    r = r || !1;
    var n = this._displayList;
    return (e || !n.length) && this.updateDisplayList(r), n;
  }, t.prototype.updateDisplayList = function(e) {
    this._displayListLen = 0;
    for (var r = this._roots, n = this._displayList, i = 0, a = r.length; i < a; i++)
      this._updateAndAddDisplayable(r[i], null, e);
    n.length = this._displayListLen, su(n, Im);
  }, t.prototype._updateAndAddDisplayable = function(e, r, n) {
    if (!(e.ignore && !n)) {
      e.beforeUpdate(), e.update(), e.afterUpdate();
      var i = e.getClipPath(), a = r && r.length, o = 0, s = e.__clipPaths;
      if (!e.ignoreClip && (a || i)) {
        if (s || (s = e.__clipPaths = []), a)
          for (var u = 0; u < r.length; u++)
            s[o++] = r[u];
        for (var l = i, f = e; l; )
          l.parent = f, l.updateTransform(), s[o++] = l, f = l, l = l.getClipPath();
      }
      if (s && (s.length = o), e.childrenRef) {
        for (var c = e.childrenRef(), h = 0; h < c.length; h++) {
          var v = c[h];
          e.__dirty && (v.__dirty |= Mt), this._updateAndAddDisplayable(v, s, n);
        }
        e.__dirty = 0;
      } else {
        var d = e;
        isNaN(d.z) && ($f(), d.z = 0), isNaN(d.z2) && ($f(), d.z2 = 0), isNaN(d.zlevel) && ($f(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var p = e.getDecalElement && e.getDecalElement();
      p && this._updateAndAddDisplayable(p, s, n);
      var g = e.getTextGuideLine();
      g && this._updateAndAddDisplayable(g, s, n);
      var m = e.getTextContent();
      m && this._updateAndAddDisplayable(m, s, n);
    }
  }, t.prototype.addRoot = function(e) {
    e.__zr && e.__zr.storage === this || this._roots.push(e);
  }, t.prototype.delRoot = function(e) {
    if (e instanceof Array) {
      for (var r = 0, n = e.length; r < n; r++)
        this.delRoot(e[r]);
      return;
    }
    var i = xe(this._roots, e);
    i >= 0 && this._roots.splice(i, 1);
  }, t.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, t.prototype.getRoots = function() {
    return this._roots;
  }, t.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, t;
}(), ju;
ju = le.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
  return setTimeout(t, 16);
};
function Ki() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var qP = function(t) {
  X(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, r = r || {}, n.stage = r.stage || {}, n;
  }
  return e.prototype.addClip = function(r) {
    r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this;
  }, e.prototype.addAnimator = function(r) {
    r.animation = this;
    var n = r.getClip();
    n && this.addClip(n);
  }, e.prototype.removeClip = function(r) {
    if (r.animation) {
      var n = r.prev, i = r.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, r.next = r.prev = r.animation = null;
    }
  }, e.prototype.removeAnimator = function(r) {
    var n = r.getClip();
    n && this.removeClip(n), r.animation = null;
  }, e.prototype.update = function(r) {
    for (var n = Ki() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, r || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, e.prototype._startLoop = function() {
    var r = this;
    this._running = !0;
    function n() {
      r._running && (ju(n), !r._paused && r.update());
    }
    ju(n);
  }, e.prototype.start = function() {
    this._running || (this._time = Ki(), this._pausedTime = 0, this._startLoop());
  }, e.prototype.stop = function() {
    this._running = !1;
  }, e.prototype.pause = function() {
    this._paused || (this._pauseStart = Ki(), this._paused = !0);
  }, e.prototype.resume = function() {
    this._paused && (this._pausedTime += Ki() - this._pauseStart, this._paused = !1);
  }, e.prototype.clear = function() {
    for (var r = this._head; r; ) {
      var n = r.next;
      r.prev = r.next = r.animation = null, r = n;
    }
    this._head = this._tail = null;
  }, e.prototype.isFinished = function() {
    return this._head == null;
  }, e.prototype.animate = function(r, n) {
    n = n || {}, this.start();
    var i = new uv(r, n.loop);
    return this.addAnimator(i), i;
  }, e;
}(Ar), KP = 300, Zf = le.domSupported, qf = function() {
  var t = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], e = [
    "touchstart",
    "touchend",
    "touchmove"
  ], r = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = Q(t, function(i) {
    var a = i.replace("mouse", "pointer");
    return r.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: t,
    touch: e,
    pointer: n
  };
}(), Lm = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Pm = !1;
function Eh(t) {
  var e = t.pointerType;
  return e === "pen" || e === "touch";
}
function jP(t) {
  t.touching = !0, t.touchTimer != null && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function() {
    t.touching = !1, t.touchTimer = null;
  }, 700);
}
function Kf(t) {
  t && (t.zrByTouch = !0);
}
function QP(t, e) {
  return zt(t.dom, new JP(t, e), !0);
}
function $1(t, e) {
  for (var r = e, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== e && r === t.painterRoot); )
    r = r.parentNode;
  return n;
}
var JP = /* @__PURE__ */ function() {
  function t(e, r) {
    this.stopPropagation = it, this.stopImmediatePropagation = it, this.preventDefault = it, this.type = r.type, this.target = this.currentTarget = e.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY;
  }
  return t;
}(), nr = {
  mousedown: function(t) {
    t = zt(this.dom, t), this.__mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t);
  },
  mousemove: function(t) {
    t = zt(this.dom, t);
    var e = this.__mayPointerCapture;
    e && (t.zrX !== e[0] || t.zrY !== e[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", t);
  },
  mouseup: function(t) {
    t = zt(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t);
  },
  mouseout: function(t) {
    t = zt(this.dom, t);
    var e = t.toElement || t.relatedTarget;
    $1(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), this.trigger("mouseout", t));
  },
  wheel: function(t) {
    Pm = !0, t = zt(this.dom, t), this.trigger("mousewheel", t);
  },
  mousewheel: function(t) {
    Pm || (t = zt(this.dom, t), this.trigger("mousewheel", t));
  },
  touchstart: function(t) {
    t = zt(this.dom, t), Kf(t), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(t, "start"), nr.mousemove.call(this, t), nr.mousedown.call(this, t);
  },
  touchmove: function(t) {
    t = zt(this.dom, t), Kf(t), this.handler.processGesture(t, "change"), nr.mousemove.call(this, t);
  },
  touchend: function(t) {
    t = zt(this.dom, t), Kf(t), this.handler.processGesture(t, "end"), nr.mouseup.call(this, t), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < KP && nr.click.call(this, t);
  },
  pointerdown: function(t) {
    nr.mousedown.call(this, t);
  },
  pointermove: function(t) {
    Eh(t) || nr.mousemove.call(this, t);
  },
  pointerup: function(t) {
    nr.mouseup.call(this, t);
  },
  pointerout: function(t) {
    Eh(t) || nr.mouseout.call(this, t);
  }
};
M(["click", "dblclick", "contextmenu"], function(t) {
  nr[t] = function(e) {
    e = zt(this.dom, e), this.trigger(t, e);
  };
});
var Ah = {
  pointermove: function(t) {
    Eh(t) || Ah.mousemove.call(this, t);
  },
  pointerup: function(t) {
    Ah.mouseup.call(this, t);
  },
  mousemove: function(t) {
    this.trigger("mousemove", t);
  },
  mouseup: function(t) {
    var e = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));
  }
};
function eO(t, e) {
  var r = e.domHandlers;
  le.pointerEventsSupported ? M(qf.pointer, function(n) {
    uu(e, n, function(i) {
      r[n].call(t, i);
    });
  }) : (le.touchEventsSupported && M(qf.touch, function(n) {
    uu(e, n, function(i) {
      r[n].call(t, i), jP(e);
    });
  }), M(qf.mouse, function(n) {
    uu(e, n, function(i) {
      i = vd(i), e.touching || r[n].call(t, i);
    });
  }));
}
function tO(t, e) {
  le.pointerEventsSupported ? M(Lm.pointer, r) : le.touchEventsSupported || M(Lm.mouse, r);
  function r(n) {
    function i(a) {
      a = vd(a), $1(t, a.target) || (a = QP(t, a), e.domHandlers[n].call(t, a));
    }
    uu(e, n, i, { capture: !0 });
  }
}
function uu(t, e, r, n) {
  t.mounted[e] = r, t.listenerOpts[e] = n, kP(t.domTarget, e, r, n);
}
function jf(t) {
  var e = t.mounted;
  for (var r in e)
    e.hasOwnProperty(r) && BP(t.domTarget, r, e[r], t.listenerOpts[r]);
  t.mounted = {};
}
var Om = /* @__PURE__ */ function() {
  function t(e, r) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = e, this.domHandlers = r;
  }
  return t;
}(), rO = function(t) {
  X(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = r, i.painterRoot = n, i._localHandlerScope = new Om(r, nr), Zf && (i._globalHandlerScope = new Om(document, Ah)), eO(i, i._localHandlerScope), i;
  }
  return e.prototype.dispose = function() {
    jf(this._localHandlerScope), Zf && jf(this._globalHandlerScope);
  }, e.prototype.setCursor = function(r) {
    this.dom.style && (this.dom.style.cursor = r || "default");
  }, e.prototype.__togglePointerCapture = function(r) {
    if (this.__mayPointerCapture = null, Zf && +this.__pointerCapturing ^ +r) {
      this.__pointerCapturing = r;
      var n = this._globalHandlerScope;
      r ? tO(this, n) : jf(n);
    }
  }, e;
}(Ar);
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE
*/
var to = {}, Z1 = {};
function nO(t) {
  delete Z1[t];
}
function iO(t) {
  if (!t)
    return !1;
  if (typeof t == "string")
    return mu(t, 1) < Gc;
  if (t.colorStops) {
    for (var e = t.colorStops, r = 0, n = e.length, i = 0; i < n; i++)
      r += mu(e[i].color, 1);
    return r /= n, r < Gc;
  }
  return !1;
}
var aO = function() {
  function t(e, r, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n = n || {}, this.dom = r, this.id = e;
    var a = new ZP(), o = n.renderer || "canvas";
    if (to[o] || (o = de(to)[0]), process.env.NODE_ENV !== "production" && !to[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new to[o](r, a, n, e), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !le.node && !le.worker && !u ? new rO(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, c = f == null || f === "auto" ? le.touchEventsSupported : !!f, h = 44, v;
    c && (v = K(n.pointerSize, h)), this.handler = new W1(a, s, l, s.root, v), this.animation = new qP({
      stage: {
        update: u ? null : function() {
          return i._flush(!1);
        }
      }
    }), u || this.animation.start();
  }
  return t.prototype.add = function(e) {
    this._disposed || !e || (this.storage.addRoot(e), e.addSelfToZr(this), this.refresh());
  }, t.prototype.remove = function(e) {
    this._disposed || !e || (this.storage.delRoot(e), e.removeSelfFromZr(this), this.refresh());
  }, t.prototype.configLayer = function(e, r) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(e, r), this.refresh());
  }, t.prototype.setBackgroundColor = function(e) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(e), this.refresh(), this._backgroundColor = e, this._darkMode = iO(e));
  }, t.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, t.prototype.setDarkMode = function(e) {
    this._darkMode = e;
  }, t.prototype.isDarkMode = function() {
    return this._darkMode;
  }, t.prototype.refreshImmediately = function(e) {
    this._disposed || this._refresh({
      animUpdate: !e,
      refresh: !0,
      refreshHover: !1
    });
  }, t.prototype._refresh = function(e) {
    e.animUpdate && this.animation.update(!0), this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh({
      refresh: e.refresh,
      refreshHover: e.refreshHover
    }), this._needsRefresh = this._needsRefreshHover = !1;
  }, t.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, t.prototype.flush = function() {
    this._disposed || this._flush(!0);
  }, t.prototype._flush = function(e) {
    var r, n = Ki(), i = this._needsRefresh, a = this._needsRefreshHover;
    (i || a) && (r = !0, this._refresh({
      animUpdate: e,
      refresh: i,
      refreshHover: a
    }));
    var o = Ki();
    r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: o - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, t.prototype.setSleepAfterStill = function(e) {
    this._sleepAfterStill = e;
  }, t.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, t.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, t.prototype.refreshHoverImmediately = function() {
    this._disposed || this._refresh({
      animUpdate: !1,
      refresh: !1,
      refreshHover: !0
    });
  }, t.prototype.resize = function(e) {
    this._disposed || (e = e || {}, this.painter.resize(e.width, e.height), this.handler.resize());
  }, t.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, t.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, t.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, t.prototype.setCursorStyle = function(e) {
    this._disposed || this.handler.setCursorStyle(e);
  }, t.prototype.findHover = function(e, r) {
    if (!this._disposed)
      return this.handler.findHover(e, r);
  }, t.prototype.on = function(e, r, n) {
    return this._disposed || this.handler.on(e, r, n), this;
  }, t.prototype.off = function(e, r) {
    this._disposed || this.handler.off(e, r);
  }, t.prototype.trigger = function(e, r) {
    this._disposed || this.handler.trigger(e, r);
  }, t.prototype.clear = function() {
    if (!this._disposed) {
      for (var e = this.storage.getRoots(), r = 0; r < e.length; r++)
        e[r] instanceof Qe && e[r].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, t.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, nO(this.id));
  }, t;
}();
function Nm(t, e) {
  var r = new aO(m0(), t, e);
  return Z1[r.id] = r, r;
}
function oO(t, e) {
  to[t] = e;
}
var Mh;
function sO(t) {
  if (typeof Mh == "function")
    return Mh(t);
}
function uO(t) {
  Mh = t;
}
var q1 = "";
typeof navigator < "u" && (q1 = navigator.platform || "");
var Bi = "rgba(0, 0, 0, 0.2)", K1 = ee.color.theme[0], lO = Rc(K1, null, null, 0.9);
const j1 = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ee.color.theme,
  gradientColor: [lO, K1],
  aria: {
    decal: {
      decals: [{
        color: Bi,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Bi,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Bi,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Bi,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Bi,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Bi,
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
    fontFamily: q1.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
var fO = re();
function cO(t, e, r) {
  var n = fO.get(e);
  if (!n)
    return r;
  var i = n(t);
  if (!i)
    return r;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      k(la(i[a]));
  return r.concat(i);
}
var ks, Ha, Rm, Qf = "\0_ec_inner", km = 1, hO = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  matrix: "MatrixComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, vO = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  chord: "ChordChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, Qu = {};
function dO(t) {
  M(t, function(e, r) {
    if (!be.hasClass(r)) {
      var n = hO[r];
      n && !Qu[n] && (_e("Component " + r + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), Qu[n] = !0);
    }
  });
}
var dd = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.init = function(r, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Be(a), this._locale = new Be(o), this._optionManager = s;
    }, e.prototype.setOption = function(r, n, i) {
      process.env.NODE_ENV !== "production" && (k(r != null, "option is null/undefined"), k(r[Qf] !== km, "please use chart.getOption()"));
      var a = Fm(n);
      this._optionManager.setOption(r, i, a), this._resetOption(null, a);
    }, e.prototype.resetOption = function(r, n) {
      return this._resetOption(r, Fm(n));
    }, e.prototype._resetOption = function(r, n) {
      var i = !1, a = this._optionManager;
      if (!r || r === "recreate") {
        var o = a.mountOption(r === "recreate");
        process.env.NODE_ENV !== "production" && dO(o), !this.option || r === "recreate" ? Rm(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!r || r === "recreate" || r === "media") {
        var u = a.getMediaOption(this);
        u.length && M(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, e.prototype.mergeOption = function(r) {
      this._mergeOption(r, null);
    }, e.prototype._mergeOption = function(r, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = re(), l = n && n.replaceMergeMainTypeMap;
      nE(this), M(r, function(c, h) {
        c != null && (be.hasClass(h) ? h && (s.push(h), u.set(h, !0)) : i[h] = i[h] == null ? ce(c) : De(i[h], c, !0));
      }), l && l.each(function(c, h) {
        be.hasClass(h) && !u.get(h) && (s.push(h), u.set(h, !0));
      }), be.topologicalTravel(s, be.getAllClassMainTypes(), f, this);
      function f(c) {
        var h = cO(this, c, St(r[c])), v = a.get(c), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(c) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), p = rC(v, h, d);
        lC(p, c, be), i[c] = null, a.set(c, null), o.set(c, 0);
        var g = [], m = [], y = 0, _, S;
        M(p, function(b, w) {
          var T = b.existing, x = b.newOption;
          if (!x)
            T && (T.mergeOption({}, this), T.optionUpdated({}, !1));
          else {
            var D = c === "series", C = be.getClass(
              c,
              b.keyInfo.subType,
              !D
              // Give a more detailed warn later if series don't exists
            );
            if (!C) {
              if (process.env.NODE_ENV !== "production") {
                var E = b.keyInfo.subType, L = vO[E];
                Qu[E] || (Qu[E] = !0, _e(L ? "Series " + E + ` is used but not imported.
import { ` + L + ` } from 'echarts/charts';
echarts.use([` + L + "]);" : "Unknown series " + E));
              }
              return;
            }
            if (c === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (S || (nt("Currently only one tooltip component is allowed."), S = !0));
                return;
              }
              _ = !0;
            }
            if (T && T.constructor === C)
              T.name = b.keyInfo.name, T.mergeOption(x, this), T.optionUpdated(x, !1);
            else {
              var A = z({
                componentIndex: w
              }, b.keyInfo);
              T = new C(x, this, this, A), z(T, A), b.brandNew && (T.__requireNewView = !0), T.init(x, this, this), T.optionUpdated(null, !0);
            }
          }
          T ? (g.push(T.option), m.push(T), y++) : (g.push(void 0), m.push(void 0));
        }, this), i[c] = g, a.set(c, m), o.set(c, y), c === "series" && ks(this);
      }
      this._seriesIndices || ks(this);
    }, e.prototype.getOption = function() {
      var r = ce(this.option);
      return M(r, function(n, i) {
        if (be.hasClass(i)) {
          for (var a = St(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !la(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, r[i] = a;
        }
      }), delete r[Qf], r;
    }, e.prototype.setTheme = function(r) {
      this._theme = new Be(r), this._resetOption("recreate", null);
    }, e.prototype.getTheme = function() {
      return this._theme;
    }, e.prototype.getLocaleModel = function() {
      return this._locale;
    }, e.prototype.setUpdatePayload = function(r) {
      this._payload = r;
    }, e.prototype.getUpdatePayload = function() {
      return this._payload;
    }, e.prototype.getComponent = function(r, n) {
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
    }, e.prototype.queryComponents = function(r) {
      var n = r.mainType;
      if (!n)
        return [];
      var i = r.index, a = r.id, o = r.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var u;
      return i != null ? (u = [], M(St(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = Bm("id", a, s) : o != null ? u = Bm("name", o, s) : u = tt(s, function(l) {
        return !!l;
      }), Vm(u, r);
    }, e.prototype.findComponents = function(r) {
      var n = r.query, i = r.mainType, a = s(n), o = a ? this.queryComponents(a) : tt(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(Vm(o, r));
      function s(l) {
        var f = i + "Index", c = i + "Id", h = i + "Name";
        return l && (l[f] != null || l[c] != null || l[h] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: l[f],
          id: l[c],
          name: l[h]
        } : null;
      }
      function u(l) {
        return r.filter ? tt(l, r.filter) : l;
      }
    }, e.prototype.eachComponent = function(r, n, i) {
      var a = this._componentsMap;
      if (ie(r)) {
        var o = n, s = r;
        a.each(function(c, h) {
          for (var v = 0; c && v < c.length; v++) {
            var d = c[v];
            d && s.call(o, h, d, d.componentIndex);
          }
        });
      } else
        for (var u = j(r) ? a.get(r) : J(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, e.prototype.getSeriesByName = function(r) {
      var n = Cr(r, null);
      return tt(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, e.prototype.getSeriesByIndex = function(r) {
      return this._componentsMap.get("series")[r];
    }, e.prototype.getSeriesByType = function(r) {
      return tt(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === r;
      });
    }, e.prototype.getSeries = function() {
      return tt(this._componentsMap.get("series"), function(r) {
        return !!r;
      });
    }, e.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, e.prototype.eachSeries = function(r, n) {
      Ha(this), M(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        r.call(n, a, i);
      }, this);
    }, e.prototype.eachRawSeries = function(r, n) {
      M(this._componentsMap.get("series"), function(i) {
        i && r.call(n, i, i.componentIndex);
      });
    }, e.prototype.eachSeriesByType = function(r, n, i) {
      Ha(this), M(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === r && n.call(i, o, a);
      }, this);
    }, e.prototype.eachRawSeriesByType = function(r, n, i) {
      return M(this.getSeriesByType(r), n, i);
    }, e.prototype.isSeriesFiltered = function(r) {
      return Ha(this), this._seriesIndicesMap.get(r.componentIndex) == null;
    }, e.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, e.prototype.filterSeries = function(r, n) {
      Ha(this);
      var i = [];
      M(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        r.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = re(i);
    }, e.prototype.restoreData = function(r) {
      ks(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        be.hasClass(o) && i.push(o);
      }), be.topologicalTravel(i, be.getAllClassMainTypes(), function(a) {
        M(n.get(a), function(o) {
          o && (a !== "series" || !pO(o, r)) && o.restoreData();
        });
      });
    }, e.internalField = function() {
      ks = function(r) {
        var n = r._seriesIndices = [];
        M(r._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), r._seriesIndicesMap = re(n);
      }, Ha = function(r) {
        if (process.env.NODE_ENV !== "production" && !r._seriesIndices)
          throw new Error("Option should contains series.");
      }, Rm = function(r, n) {
        r.option = {}, r.option[Qf] = km, r._componentsMap = re({
          series: []
        }), r._componentsCount = re();
        var i = n.aria;
        J(i) && i.enabled == null && (i.enabled = !0), gO(n, r._theme.option), De(n, j1, !1), r._mergeOption(n, null);
      };
    }(), e;
  }(Be)
);
function pO(t, e) {
  if (e) {
    var r = e.seriesIndex, n = e.seriesId, i = e.seriesName;
    return r != null && t.componentIndex !== r || n != null && t.id !== n || i != null && t.name !== i;
  }
}
function gO(t, e) {
  var r = t.color && !t.colorLayer;
  M(e, function(n, i) {
    i === "colorLayer" && r || i === "color" && t.color || be.hasClass(i) || (typeof n == "object" ? t[i] = t[i] ? De(t[i], n, !1) : ce(n) : t[i] == null && (t[i] = n));
  });
}
function Bm(t, e, r) {
  if ($(e)) {
    var n = re();
    return M(e, function(a) {
      if (a != null) {
        var o = Cr(a, null);
        o != null && n.set(a, !0);
      }
    }), tt(r, function(a) {
      return a && n.get(a[t]);
    });
  } else {
    var i = Cr(e, null);
    return tt(r, function(a) {
      return a && i != null && a[t] === i;
    });
  }
}
function Vm(t, e) {
  return e.hasOwnProperty("subType") ? tt(t, function(r) {
    return r && r.subType === e.subType;
  }) : t;
}
function Fm(t) {
  var e = re();
  return t && M(St(t.replaceMerge), function(r) {
    process.env.NODE_ENV !== "production" && k(be.hasClass(r), '"' + r + '" is not valid component main type in "replaceMerge"'), e.set(r, !0);
  }), {
    replaceMergeMainTypeMap: e
  };
}
Er(dd, jv);
var mO = /^(min|max)?(.+)$/, yO = (
  /** @class */
  function() {
    function t(e) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = e;
    }
    return t.prototype.setOption = function(e, r, n) {
      e && (M(St(e.series), function(o) {
        o && o.data && bt(o.data) && xc(o.data);
      }), M(St(e.dataset), function(o) {
        o && o.source && bt(o.source) && xc(o.source);
      })), e = ce(e);
      var i = this._optionBackup, a = _O(e, r, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, t.prototype.mountOption = function(e) {
      var r = this._optionBackup;
      return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], ce(e ? r.baseOption : this._newBaseOption);
    }, t.prototype.getTimelineOption = function(e) {
      var r, n = this._timelineOptions;
      if (n.length) {
        var i = e.getComponent("timeline");
        i && (r = ce(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return r;
    }, t.prototype.getMediaOption = function(e) {
      var r = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var u = 0, l = i.length; u < l; u++)
        SO(i[u].query, r, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !wO(o, this._currentMediaIndices) && (s = Q(o, function(f) {
        return ce(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, t;
  }()
);
function _O(t, e, r) {
  var n = [], i, a, o = t.baseOption, s = t.timeline, u = t.options, l = t.media, f = !!t.media, c = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((c || f) && (t.options = t.media = null), a = t), f && ($(l) ? M(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && J(v.query) && J(v.query.option) && _e("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? n.push(v) : i || (i = v));
  }) : process.env.NODE_ENV !== "production" && _e("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), h(a), M(u, function(v) {
    return h(v);
  }), M(n, function(v) {
    return h(v.option);
  });
  function h(v) {
    M(e, function(d) {
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
function SO(t, e, r) {
  var n = {
    width: e,
    height: r,
    aspectratio: e / r
    // lower case for convenience.
  }, i = !0;
  return M(t, function(a, o) {
    var s = o.match(mO);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      bO(n[l], a, u) || (i = !1);
    }
  }), i;
}
function bO(t, e, r) {
  return r === "min" ? t >= e : r === "max" ? t <= e : t === e;
}
function wO(t, e) {
  return t.join(",") === e.join(",");
}
var kt = M, No = J, zm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function Jf(t) {
  var e = t && t.itemStyle;
  if (e)
    for (var r = 0, n = zm.length; r < n; r++) {
      var i = zm[r], a = e.normal, o = e.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && Ze("itemStyle.normal." + i, i), t[i] = t[i] || {}, t[i].normal ? De(t[i].normal, a[i]) : t[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && Ze("itemStyle.emphasis." + i, "emphasis." + i), t[i] = t[i] || {}, t[i].emphasis ? De(t[i].emphasis, o[i]) : t[i].emphasis = o[i], o[i] = null);
    }
}
function ct(t, e, r) {
  if (t && t[e] && (t[e].normal || t[e].emphasis)) {
    var n = t[e].normal, i = t[e].emphasis;
    n && (process.env.NODE_ENV !== "production" && Yr("'normal' hierarchy in " + e + " has been removed since 4.0. All style properties are configured in " + e + " directly now."), r ? (t[e].normal = t[e].emphasis = null, Ae(t[e], n)) : t[e] = n), i && (process.env.NODE_ENV !== "production" && Yr(e + ".emphasis has been changed to emphasis." + e + " since 4.0"), t.emphasis = t.emphasis || {}, t.emphasis[e] = i, i.focus && (t.emphasis.focus = i.focus), i.blurScope && (t.emphasis.blurScope = i.blurScope));
  }
}
function ro(t) {
  ct(t, "itemStyle"), ct(t, "lineStyle"), ct(t, "areaStyle"), ct(t, "label"), ct(t, "labelLine"), ct(t, "upperLabel"), ct(t, "edgeLabel");
}
function He(t, e) {
  var r = No(t) && t[e], n = No(r) && r.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && Yr("textStyle hierarchy in " + e + " has been removed since 4.0. All textStyle properties are configured in " + e + " directly now.");
    for (var i = 0, a = zp.length; i < a; i++) {
      var o = zp[i];
      n.hasOwnProperty(o) && (r[o] = n[o]);
    }
  }
}
function Gt(t) {
  t && (ro(t), He(t, "label"), t.emphasis && He(t.emphasis, "label"));
}
function TO(t) {
  if (No(t)) {
    Jf(t), ro(t), He(t, "label"), He(t, "upperLabel"), He(t, "edgeLabel"), t.emphasis && (He(t.emphasis, "label"), He(t.emphasis, "upperLabel"), He(t.emphasis, "edgeLabel"));
    var e = t.markPoint;
    e && (Jf(e), Gt(e));
    var r = t.markLine;
    r && (Jf(r), Gt(r));
    var n = t.markArea;
    n && Gt(n);
    var i = t.data;
    if (t.type === "graph") {
      i = i || t.nodes;
      var a = t.links || t.edges;
      if (a && !bt(a))
        for (var o = 0; o < a.length; o++)
          Gt(a[o]);
      M(t.categories, function(l) {
        ro(l);
      });
    }
    if (i && !bt(i))
      for (var o = 0; o < i.length; o++)
        Gt(i[o]);
    if (e = t.markPoint, e && e.data)
      for (var s = e.data, o = 0; o < s.length; o++)
        Gt(s[o]);
    if (r = t.markLine, r && r.data)
      for (var u = r.data, o = 0; o < u.length; o++)
        $(u[o]) ? (Gt(u[o][0]), Gt(u[o][1])) : Gt(u[o]);
    t.type === "gauge" ? (He(t, "axisLabel"), He(t, "title"), He(t, "detail")) : t.type === "treemap" ? (ct(t.breadcrumb, "itemStyle"), M(t.levels, function(l) {
      ro(l);
    })) : t.type === "tree" && ro(t.leaves);
  }
}
function Or(t) {
  return $(t) ? t : t ? [t] : [];
}
function Gm(t) {
  return ($(t) ? t[0] : t) || {};
}
function xO(t, e) {
  kt(Or(t.series), function(n) {
    No(n) && TO(n);
  });
  var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  e && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), kt(r, function(n) {
    kt(Or(t[n]), function(i) {
      i && (He(i, "axisLabel"), He(i.axisPointer, "label"));
    });
  }), kt(Or(t.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    He(i, "axisLabel"), He(i && i.axisPointer, "label");
  }), kt(Or(t.calendar), function(n) {
    ct(n, "itemStyle"), He(n, "dayLabel"), He(n, "monthLabel"), He(n, "yearLabel");
  }), kt(Or(t.radar), function(n) {
    He(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && Yr("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && Yr("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && kt(n.indicator, function(i) {
      i.text && Ze("text", "name", "radar.indicator");
    });
  }), kt(Or(t.geo), function(n) {
    No(n) && (Gt(n), kt(Or(n.regions), function(i) {
      Gt(i);
    }));
  }), kt(Or(t.timeline), function(n) {
    Gt(n), ct(n, "label"), ct(n, "itemStyle"), ct(n, "controlStyle", !0);
    var i = n.data;
    $(i) && M(i, function(a) {
      J(a) && (ct(a, "label"), ct(a, "itemStyle"));
    });
  }), kt(Or(t.toolbox), function(n) {
    ct(n, "iconStyle"), kt(n.feature, function(i) {
      ct(i, "iconStyle");
    });
  }), He(Gm(t.axisPointer), "label"), He(Gm(t.tooltip).axisPointer, "label");
}
function CO(t, e) {
  for (var r = e.split(","), n = t, i = 0; i < r.length && (n = n && n[r[i]], n != null); i++)
    ;
  return n;
}
function DO(t, e, r, n) {
  for (var i = e.split(","), a = t, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = r);
}
function Hm(t) {
  t && M(EO, function(e) {
    e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
  });
}
var EO = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], AO = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], ec = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Ua(t) {
  var e = t && t.itemStyle;
  if (e)
    for (var r = 0; r < ec.length; r++) {
      var n = ec[r][1], i = ec[r][0];
      e[n] != null && (e[i] = e[n], process.env.NODE_ENV !== "production" && Ze(n, i));
    }
}
function Um(t) {
  t && t.alignTo === "edge" && t.margin != null && t.edgeDistance == null && (process.env.NODE_ENV !== "production" && Ze("label.margin", "label.edgeDistance", "pie"), t.edgeDistance = t.margin);
}
function Wm(t) {
  t && t.downplay && !t.blur && (t.blur = t.downplay, process.env.NODE_ENV !== "production" && Ze("downplay", "blur", "sunburst"));
}
function MO(t) {
  t && t.focusNodeAdjacency != null && (t.emphasis = t.emphasis || {}, t.emphasis.focus == null && (process.env.NODE_ENV !== "production" && Ze("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), t.emphasis.focus = "adjacency"));
}
function Q1(t, e) {
  if (t)
    for (var r = 0; r < t.length; r++)
      e(t[r]), t[r] && Q1(t[r].children, e);
}
function J1(t, e) {
  xO(t, e), t.series = St(t.series), M(t.series, function(r) {
    if (J(r)) {
      var n = r.type;
      if (n === "line")
        r.clipOverflow != null && (r.clip = r.clipOverflow, process.env.NODE_ENV !== "production" && Ze("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        r.clockWise != null && (r.clockwise = r.clockWise, process.env.NODE_ENV !== "production" && Ze("clockWise", "clockwise")), Um(r.label);
        var i = r.data;
        if (i && !bt(i))
          for (var a = 0; a < i.length; a++)
            Um(i[a]);
        r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && Ze("hoverOffset", "emphasis.scaleSize"), r.emphasis.scaleSize = r.hoverOffset));
      } else if (n === "gauge") {
        var o = CO(r, "pointer.color");
        o != null && DO(r, "itemStyle.color", o);
      } else if (n === "bar") {
        Ua(r), Ua(r.backgroundStyle), Ua(r.emphasis);
        var i = r.data;
        if (i && !bt(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (Ua(i[a]), Ua(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = r.highlightPolicy;
        s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s, process.env.NODE_ENV !== "production" && Ze("highlightPolicy", "emphasis.focus", "sunburst"))), Wm(r), Q1(r.data, Wm);
      } else n === "graph" || n === "sankey" ? MO(r) : n === "map" && (r.mapType && !r.map && (process.env.NODE_ENV !== "production" && Ze("mapType", "map", "map"), r.map = r.mapType), r.mapLocation && (process.env.NODE_ENV !== "production" && Yr("`mapLocation` is not used anymore."), Ae(r, r.mapLocation)));
      r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (process.env.NODE_ENV !== "production" && Ze("hoverAnimation", "emphasis.scale"), r.emphasis.scale = r.hoverAnimation)), Hm(r);
    }
  }), t.dataRange && (t.visualMap = t.dataRange), M(AO, function(r) {
    var n = t[r];
    n && ($(n) || (n = [n]), M(n, function(i) {
      Hm(i);
    }));
  });
}
var IO = gv(LO);
function LO(t) {
  var e = re();
  t.eachSeries(function(r) {
    var n = r.get("stack");
    if (n) {
      var i = e.get(n) || e.set(n, []), a = r.getData(), o = {
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
  }), e.each(function(r) {
    if (r.length !== 0) {
      var n = r[0].seriesModel, i = n.get("stackOrder") || "seriesAsc";
      i === "seriesDesc" && r.reverse(), M(r, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? r[o - 1].seriesModel : null);
      }), PO(r);
    }
  });
}
function PO(t) {
  M(t, function(e, r) {
    var n = [], i = [NaN, NaN], a = [e.stackResultDimension, e.stackedOverDimension], o = e.data, s = e.isStackedByIndex, u = e.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, c) {
      var h = o.get(e.stackedDimension, c);
      if (isNaN(h))
        return i;
      var v, d;
      s ? d = o.getRawIndex(c) : v = o.get(e.stackedByDimension, c);
      for (var p = NaN, g = r - 1; g >= 0; g--) {
        var m = t[g];
        if (s || (d = m.data.rawIndexOf(m.stackedByDimension, v)), d >= 0) {
          var y = m.data.getByRawIndex(m.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && h >= 0 && y > 0 || u === "samesign" && h <= 0 && y < 0) {
            h = Kx(h, y), p = y;
            break;
          }
        }
      }
      return n[0] = h, n[1] = p, n;
    });
  });
}
var sr = (
  /** @class */
  function() {
    function t() {
      this.group = new Qe(), this.uid = Al("viewComponent");
    }
    return t.prototype.init = function(e, r) {
    }, t.prototype.render = function(e, r, n, i) {
    }, t.prototype.dispose = function(e, r) {
    }, t.prototype.updateView = function(e, r, n, i) {
    }, t.prototype.updateLayout = function(e, r, n, i) {
    }, t.prototype.updateVisual = function(e, r, n, i) {
    }, t.prototype.toggleBlurSeries = function(e, r, n) {
    }, t.prototype.eachRendered = function(e) {
      var r = this.group;
      r && r.traverse(e);
    }, t;
  }()
);
tv(sr);
fl(sr);
var Ym = Me(), Xm = {
  itemStyle: bo(Y_, !0),
  lineStyle: bo(W_, !0)
}, OO = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function eb(t, e) {
  var r = t.visualStyleMapper || Xm[e];
  return r || (console.warn("Unknown style type '" + e + "'."), Xm.itemStyle);
}
function tb(t, e) {
  var r = t.visualDrawType || OO[e];
  return r || (console.warn("Unknown style type '" + e + "'."), "fill");
}
var NO = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(t, e) {
    var r = t.getData(), n = t.visualStyleAccessPath || "itemStyle", i = t.getModel(n), a = eb(t, n), o = a(i), s = i.getShallow("decal");
    s && (r.setVisual("decal", s), s.dirty = !0);
    var u = tb(t, n), l = o[u], f = ie(l) ? l : null, c = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || c) {
      var h = t.getColorFromPalette(
        // TODO series count changed.
        t.name,
        null,
        e.getSeriesCount()
      );
      o[u] || (o[u] = h, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || ie(o.fill) ? h : o.fill, o.stroke = o.stroke === "auto" || ie(o.stroke) ? h : o.stroke;
    }
    if (r.setVisual("style", o), r.setVisual("drawType", u), !e.isSeriesFiltered(t) && f)
      return r.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var p = t.getDataParams(d), g = z({}, o);
          g[u] = f(p), v.setItemVisual(d, "style", g);
        }
      };
  }
}, Wa = new Be(), RO = {
  createOnAllSeries: !0,
  reset: function(t, e) {
    if (!t.ignoreStyleOnData) {
      var r = t.getData(), n = t.visualStyleAccessPath || "itemStyle", i = eb(t, n), a = r.getVisual("drawType");
      return {
        dataEach: r.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            Wa.option = u[n];
            var l = i(Wa), f = o.ensureUniqueItemVisual(s, "style");
            z(f, l), Wa.option.decal && (o.setItemVisual(s, "decal", Wa.option.decal), Wa.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, kO = {
  performRawSeries: !0,
  overallReset: function(t) {
    var e = re();
    t.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.type + "-" + r.getColorBy();
        Ym(r).scope = e.get(n) || e.set(n, {});
      }
    }), t.eachSeries(function(r) {
      if (!r.isColorBySeries()) {
        var n = r.getRawData(), i = {}, a = r.getData(), o = Ym(r).scope, s = r.visualStyleAccessPath || "itemStyle", u = tb(r, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          i[f] = l;
        }), n.each(function(l) {
          var f = i[l], c = a.getItemVisual(f, "colorFromPalette");
          if (c) {
            var h = a.ensureUniqueItemVisual(f, "style"), v = n.getName(l) || l + "", d = n.count();
            h[u] = r.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, Bs = Math.PI;
function BO(t, e) {
  e = e || {}, Ae(e, {
    text: "loading",
    textColor: ee.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: ee.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var r = new Qe(), n = new ze({
    style: {
      fill: e.maskColor
    },
    zlevel: e.zlevel,
    z: 1e4
  });
  r.add(n);
  var i = new at({
    style: {
      text: e.text,
      fill: e.textColor,
      fontSize: e.fontSize,
      fontWeight: e.fontWeight,
      fontStyle: e.fontStyle,
      fontFamily: e.fontFamily
    },
    zlevel: e.zlevel,
    z: 10001
  }), a = new ze({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: e.zlevel,
    z: 10001
  });
  r.add(a);
  var o;
  return e.showSpinner && (o = new wl({
    shape: {
      startAngle: -Bs / 2,
      endAngle: -Bs / 2 + 0.1,
      r: e.spinnerRadius
    },
    style: {
      stroke: e.color,
      lineCap: "round",
      lineWidth: e.lineWidth
    },
    zlevel: e.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: Bs * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: Bs * 3 / 2
  }).delay(300).start("circularInOut"), r.add(o)), r.resize = function() {
    var s = i.getBoundingRect().width, u = e.showSpinner ? e.spinnerRadius : 0, l = (t.getWidth() - u * 2 - (e.showSpinner && s ? 10 : 0) - s) / 2 - (e.showSpinner && s ? 0 : 5 + s / 2) + (e.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = t.getHeight() / 2;
    e.showSpinner && o.setShape({
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
      width: t.getWidth(),
      height: t.getHeight()
    });
  }, r.resize(), r;
}
var rb = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this._stageTaskMap = re(), this.ecInstance = e, this.api = r, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return t.prototype.restoreData = function(e, r) {
      e.restoreData(r), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, t.prototype.getPerformArgs = function(e, r) {
      if (e.__pipeline) {
        var n = this._pipelineMap.get(e.__pipeline.id), i = n.context, a = !r && n.progressiveEnabled && (!i || i.progressiveRender) && e.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, t.prototype.getPipeline = function(e) {
      return this._pipelineMap.get(e);
    }, t.prototype.updateStreamModes = function(e, r) {
      var n = this._pipelineMap.get(e.uid), i = e.__preparePipelineContext ? e.__preparePipelineContext(r, n) : f_(e, r, n);
      e.pipelineContext = n.context = i;
    }, t.prototype.restorePipelines = function(e, r) {
      var n = this, i = n._pipelineMap = re();
      r.eachSeries(function(a) {
        var o = e.painter.type === "canvas" && a.getProgressive(), s = a.uid;
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
    }, t.prototype.prepareStageTasks = function() {
      var e = this._stageTaskMap, r = this.api.getModel(), n = this.api;
      M(this._allHandlers, function(i) {
        var a = e.get(i.uid) || e.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), k(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, r, n), i.overallReset && this._createOverallStageTask(i, a, r, n);
      }, this);
    }, t.prototype.prepareView = function(e, r, n, i) {
      var a = e.renderTask, o = a.context;
      o.model = r, o.ecModel = n, o.api = i, a.__block = !e.incrementalPrepareRender, this._pipe(r, a);
    }, t.prototype.performDataProcessorTasks = function(e, r) {
      this._performStageTasks(this._dataProcessorHandlers, e, r, {
        block: !0
      });
    }, t.prototype.performVisualTasks = function(e, r, n) {
      this._performStageTasks(this._visualHandlers, e, r, n);
    }, t.prototype._performStageTasks = function(e, r, n, i) {
      i = i || {};
      var a = !1, o = this;
      M(e, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), c = f.seriesTaskMap, h = f.overallTask;
          if (h) {
            var v, d = h.agentStubMap;
            d.each(function(g) {
              s(i, g) && (g.dirty(), v = !0);
            }), v && h.dirty(), o.updatePayload(h, n);
            var p = o.getPerformArgs(h, i.block);
            d.each(function(g) {
              g.perform(p);
            }), h.perform(p) && (a = !0);
          } else c && c.each(function(g, m) {
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
    }, t.prototype.performSeriesTasks = function(e) {
      var r;
      e.eachSeries(function(n) {
        r = n.dataTask.perform() || r;
      }), this.unfinished = r || this.unfinished;
    }, t.prototype.plan = function() {
      this._pipelineMap.each(function(e) {
        var r = e.tail;
        do {
          if (r.__block) {
            e.blockIndex = r.__idxInPipeline;
            break;
          }
          r = r.getUpstream();
        } while (r);
      });
    }, t.prototype.updatePayload = function(e, r) {
      r !== "remain" && (e.context.payload = r);
    }, t.prototype._createSeriesStageTask = function(e, r, n, i) {
      var a = this, o = r.seriesTaskMap, s = r.seriesTaskMap = re(), u = e.seriesType, l = e.getTargetSeries;
      e.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(c) {
        var h = c.uid, v = s.set(h, o && o.get(h) || mo({
          plan: HO,
          reset: UO,
          count: YO
        }));
        v.context = {
          model: c,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: e.isVisual && !e.isLayout,
          plan: e.plan,
          reset: e.reset,
          scheduler: a
        }, a._pipe(c, v);
      }
    }, t.prototype._createOverallStageTask = function(e, r, n, i) {
      var a = this, o = r.overallTask = r.overallTask || mo({
        reset: VO
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: e.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = re(), l = e.seriesType, f = e.getTargetSeries, c = e.dirtyOnOverallProgress, h = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), k(!e.createOnAllSeries, v), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : M(n.getSeries(), d);
      function d(p) {
        var g = p.uid, m = u.set(g, s && s.get(g) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (h = !0, mo({
          reset: FO,
          onDirty: GO
        })));
        m.context = {
          model: p,
          dirtyOnOverallProgress: c
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, m.agent = o, m.__block = c, a._pipe(p, m);
      }
      h && o.dirty();
    }, t.prototype._pipe = function(e, r) {
      var n = e.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = r), i.tail && i.tail.pipe(r), i.tail = r, r.__idxInPipeline = i.count++, r.__pipeline = i;
    }, t.wrapStageHandler = function(e, r) {
      return ie(e) && (e = {
        overallReset: e,
        seriesType: XO(e)
      }), e.uid = Al("stageHandler"), r && (e.visualType = r), e;
    }, t;
  }()
);
function VO(t) {
  t.overallReset(t.ecModel, t.api, t.payload);
}
function FO(t) {
  return t.dirtyOnOverallProgress && zO;
}
function zO() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function GO() {
  this.agent && this.agent.dirty();
}
function HO(t) {
  return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
}
function UO(t) {
  t.useClearVisual && t.data.clearAllVisual();
  var e = t.resetDefines = St(t.reset(t.model, t.ecModel, t.api, t.payload));
  return e.length > 1 ? Q(e, function(r, n) {
    return nb(n);
  }) : WO;
}
var WO = nb(0);
function nb(t) {
  return function(e, r) {
    var n = r.data, i = r.resetDefines[t];
    if (i && i.dataEach)
      for (var a = e.start; a < e.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(e, n);
  };
}
function YO(t) {
  return t.data.count();
}
function XO(t) {
  Ju = null;
  try {
    t(Ro, ib);
  } catch {
  }
  return Ju;
}
var Ro = {}, ib = {}, Ju;
ab(Ro, dd);
ab(ib, v_);
Ro.eachSeriesByType = Ro.eachRawSeriesByType = function(t) {
  Ju = t;
};
Ro.eachComponent = function(t) {
  t.mainType === "series" && t.subType && (Ju = t.subType);
};
function ab(t, e) {
  for (var r in e.prototype)
    t[r] = it;
}
var U = ee.darkColor, $m = U.background, Ya = function() {
  return {
    axisLine: {
      lineStyle: {
        color: U.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: U.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [U.backgroundTint, U.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: U.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: U.axisLabel
    },
    axisName: {}
  };
}, Zm = {
  label: {
    color: U.secondary
  },
  itemStyle: {
    borderColor: U.borderTint
  },
  dividerLineStyle: {
    color: U.border
  }
}, ob = {
  darkMode: !0,
  color: U.theme,
  backgroundColor: $m,
  axisPointer: {
    lineStyle: {
      color: U.border
    },
    crossStyle: {
      color: U.borderShade
    },
    label: {
      color: U.tertiary
    }
  },
  legend: {
    textStyle: {
      color: U.secondary
    },
    pageTextStyle: {
      color: U.tertiary
    }
  },
  textStyle: {
    color: U.secondary
  },
  title: {
    textStyle: {
      color: U.primary
    },
    subtextStyle: {
      color: U.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: U.accent50
    },
    feature: {
      dataView: {
        backgroundColor: $m,
        textColor: U.primary,
        textareaColor: U.background,
        textareaBorderColor: U.border,
        buttonColor: U.accent50,
        buttonTextColor: U.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: U.neutral20,
    defaultBorderColor: U.border,
    textStyle: {
      color: U.tertiary
    }
  },
  dataZoom: {
    borderColor: U.accent10,
    textStyle: {
      color: U.tertiary
    },
    brushStyle: {
      color: U.backgroundTint
    },
    handleStyle: {
      color: U.neutral00,
      borderColor: U.accent20
    },
    moveHandleStyle: {
      color: U.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: U.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: U.accent30
      },
      areaStyle: {
        color: U.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: U.accent50
      },
      areaStyle: {
        color: U.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: U.secondary
    },
    handleStyle: {
      borderColor: U.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: U.accent10
    },
    label: {
      color: U.tertiary
    },
    controlStyle: {
      color: U.accent30,
      borderColor: U.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: U.neutral00,
      borderColor: U.neutral20
    },
    dayLabel: {
      color: U.tertiary
    },
    monthLabel: {
      color: U.secondary
    },
    yearLabel: {
      color: U.secondary
    }
  },
  matrix: {
    x: Zm,
    y: Zm,
    backgroundColor: {
      borderColor: U.axisLine
    },
    body: {
      itemStyle: {
        borderColor: U.borderTint
      }
    }
  },
  timeAxis: Ya(),
  logAxis: Ya(),
  valueAxis: Ya(),
  categoryAxis: Ya(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: U.theme
  },
  gauge: {
    title: {
      color: U.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, U.neutral05]]
      }
    },
    axisLabel: {
      color: U.axisLabel
    },
    detail: {
      color: U.primary
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
      borderColor: U.background
    }
  },
  radar: function() {
    var t = Ya();
    return t.axisName = {
      color: U.axisLabel
    }, t.axisLine.lineStyle.color = U.neutral20, t;
  }(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: U.neutral20,
        textStyle: {
          color: U.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: U.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: U.background
    }
  },
  map: {
    itemStyle: {
      borderColor: U.border,
      areaColor: U.neutral10
    },
    label: {
      color: U.tertiary
    },
    emphasis: {
      label: {
        color: U.primary
      },
      itemStyle: {
        areaColor: U.highlight
      }
    },
    select: {
      label: {
        color: U.primary
      },
      itemStyle: {
        areaColor: U.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: U.border,
      areaColor: U.neutral10
    },
    emphasis: {
      label: {
        color: U.primary
      },
      itemStyle: {
        areaColor: U.highlight
      }
    },
    select: {
      label: {
        color: U.primary
      },
      itemStyle: {
        color: U.highlight
      }
    }
  }
};
ob.categoryAxis.splitLine.show = !1;
var $O = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.normalizeQuery = function(e) {
      var r = {}, n = {}, i = {};
      if (j(e)) {
        var a = br(e);
        r.mainType = a.main || null, r.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        M(e, function(u, l) {
          for (var f = !1, c = 0; c < o.length; c++) {
            var h = o[c], v = l.lastIndexOf(h);
            if (v > 0 && v === l.length - h.length) {
              var d = l.slice(0, v);
              d !== "data" && (r.mainType = d, r[h.toLowerCase()] = u, f = !0);
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
    }, t.prototype.filter = function(e, r) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var u = r.cptQuery, l = r.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(e, r.otherQuery, i, a));
      function f(c, h, v, d) {
        return c[v] == null || h[d || v] === c[v];
      }
    }, t.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, t;
  }()
), Ih = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], qm = Ih.concat(["symbolKeepAspect"]), ZO = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(t, e) {
    var r = t.getData();
    if (t.legendIcon && r.setVisual("legendIcon", t.legendIcon), !t.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < Ih.length; o++) {
      var s = Ih[o], u = t.get(s);
      ie(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || t.defaultSymbol, r.setVisual(z({
      legendIcon: t.legendIcon || n.symbol,
      symbolKeepAspect: t.get("symbolKeepAspect")
    }, n)), e.isSeriesFiltered(t))
      return;
    var l = de(i);
    function f(c, h) {
      for (var v = t.getRawValue(h), d = t.getDataParams(h), p = 0; p < l.length; p++) {
        var g = l[p];
        c.setItemVisual(h, g, i[g](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, qO = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(t, e) {
    if (!t.hasSymbolVisual || e.isSeriesFiltered(t))
      return;
    var r = t.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < qm.length; s++) {
        var u = qm[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: r.hasItemOption ? n : null
    };
  }
};
function KO(t, e, r) {
  switch (r) {
    case "color":
      var n = t.getItemVisual(e, "style");
      return n[t.getVisual("drawType")];
    case "opacity":
      return t.getItemVisual(e, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return t.getItemVisual(e, r);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + r);
  }
}
function jO(t, e) {
  switch (e) {
    case "color":
      var r = t.getVisual("style");
      return r[t.getVisual("drawType")];
    case "opacity":
      return t.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return t.getVisual(e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function no(t, e, r) {
  for (var n; t && !(e(t) && (n = t, r)); )
    t = t.__hostTarget || t.parent;
  return n;
}
var Ft = new Ar(), el = {};
function QO(t, e) {
  process.env.NODE_ENV !== "production" && el[t] && _e("Already has an implementation of " + t + "."), el[t] = e;
}
function JO(t) {
  return process.env.NODE_ENV !== "production" && (el[t] || _e("Implementation of " + t + " doesn't exists.")), el[t];
}
var eN = Math.round(Math.random() * 9), tN = typeof Object.defineProperty == "function", rN = function() {
  function t() {
    this._id = "__ec_inner_" + eN++;
  }
  return t.prototype.get = function(e) {
    return this._guard(e)[this._id];
  }, t.prototype.set = function(e, r) {
    var n = this._guard(e);
    return tN ? Object.defineProperty(n, this._id, {
      value: r,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = r, this;
  }, t.prototype.delete = function(e) {
    return this.has(e) ? (delete this._guard(e)[this._id], !0) : !1;
  }, t.prototype.has = function(e) {
    return !!this._guard(e)[this._id];
  }, t.prototype._guard = function(e) {
    if (e !== Object(e))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return e;
  }, t;
}();
function ai(t) {
  return isFinite(t);
}
function nN(t, e, r) {
  var n = e.x == null ? 0 : e.x, i = e.x2 == null ? 1 : e.x2, a = e.y == null ? 0 : e.y, o = e.y2 == null ? 0 : e.y2;
  e.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), n = ai(n) ? n : 0, i = ai(i) ? i : 1, a = ai(a) ? a : 0, o = ai(o) ? o : 0;
  var s = t.createLinearGradient(n, a, i, o);
  return s;
}
function iN(t, e, r) {
  var n = r.width, i = r.height, a = Math.min(n, i), o = e.x == null ? 0.5 : e.x, s = e.y == null ? 0.5 : e.y, u = e.r == null ? 0.5 : e.r;
  e.global || (o = o * n + r.x, s = s * i + r.y, u = u * a), o = ai(o) ? o : 0.5, s = ai(s) ? s : 0.5, u = u >= 0 && ai(u) ? u : 0.5;
  var l = t.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Lh(t, e, r) {
  for (var n = e.type === "radial" ? iN(t, e, r) : nN(t, e, r), i = e.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function aN(t, e) {
  if (t === e || !t && !e)
    return !1;
  if (!t || !e || t.length !== e.length)
    return !0;
  for (var r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !0;
  return !1;
}
function Vs(t) {
  return parseInt(t, 10);
}
function ji(t, e, r) {
  var n = ["width", "height"][e], i = ["clientWidth", "clientHeight"][e], a = ["paddingLeft", "paddingTop"][e], o = ["paddingRight", "paddingBottom"][e];
  if (r[n] != null && r[n] !== "auto")
    return parseFloat(r[n]);
  var s = document.defaultView.getComputedStyle(t);
  return (t[i] || Vs(s[n]) || Vs(t.style[n])) - (Vs(s[a]) || 0) - (Vs(s[o]) || 0) || 0;
}
function oN(t, e) {
  return !t || t === "solid" || !(e > 0) ? null : t === "dashed" ? [4 * e, 2 * e] : t === "dotted" ? [e] : Ee(t) ? [t] : $(t) ? t : null;
}
function pd(t) {
  var e = t.style, r = e.lineDash && e.lineWidth > 0 && oN(e.lineDash, e.lineWidth), n = e.lineDashOffset;
  if (r) {
    var i = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
    i && i !== 1 && (r = Q(r, function(a) {
      return a / i;
    }), n /= i);
  }
  return [r, n];
}
var sN = new yn(!0);
function tl(t) {
  var e = t.stroke;
  return !(e == null || e === "none" || !(t.lineWidth > 0));
}
function Km(t) {
  return typeof t == "string" && t !== "none";
}
function rl(t) {
  var e = t.fill;
  return e != null && e !== "none";
}
function jm(t, e) {
  if (e.fillOpacity != null && e.fillOpacity !== 1) {
    var r = t.globalAlpha;
    t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = r;
  } else
    t.fill();
}
function Qm(t, e) {
  if (e.strokeOpacity != null && e.strokeOpacity !== 1) {
    var r = t.globalAlpha;
    t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = r;
  } else
    t.stroke();
}
function Ph(t, e, r) {
  var n = rv(e.image, e.__image, r);
  if (cl(n)) {
    var i = t.createPattern(n, e.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(e.x || 0, e.y || 0), a.rotateSelf(0, 0, (e.rotation || 0) * Xs), a.scaleSelf(e.scaleX || 1, e.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function uN(t, e, r, n, i) {
  var a, o = tl(r), s = rl(r), u = r.strokePercent, l = u < 1, f = !e.path;
  (!e.silent || l) && f && e.createPathProxy();
  var c = e.path || sN, h = e.__dirty;
  if (!n) {
    var v = r.fill, d = r.stroke, p = s && !!v.colorStops, g = o && !!d.colorStops, m = s && !!v.image, y = o && !!d.image, _ = void 0, S = void 0, b = void 0, w = void 0, T = void 0;
    (p || g) && (T = e.getBoundingRect()), p && (_ = h ? Lh(t, v, T) : e.__canvasFillGradient, e.__canvasFillGradient = _), g && (S = h ? Lh(t, d, T) : e.__canvasStrokeGradient, e.__canvasStrokeGradient = S), m && (b = h || !e.__canvasFillPattern ? Ph(t, v, e) : e.__canvasFillPattern, e.__canvasFillPattern = b), y && (w = h || !e.__canvasStrokePattern ? Ph(t, d, e) : e.__canvasStrokePattern, e.__canvasStrokePattern = w), p ? t.fillStyle = _ : m && (b ? t.fillStyle = b : s = !1), g ? t.strokeStyle = S : y && (w ? t.strokeStyle = w : o = !1);
  }
  var x = e.getGlobalScale();
  c.setScale(x[0], x[1], e.segmentIgnoreThreshold);
  var D, C;
  t.setLineDash && r.lineDash && (a = pd(e), D = a[0], C = a[1]);
  var E = !0;
  (f || h & Hi) && (c.setDPR(t.dpr), l ? c.setContext(null) : (c.setContext(t), E = !1), c.reset(), e.buildPath(c, e.shape, n), c.toStatic(), e.pathUpdated()), E && c.rebuildPath(t, l ? u : 1), D && (t.setLineDash(D), t.lineDashOffset = C), n ? (i.batchFill = s, i.batchStroke = o) : r.strokeFirst ? (o && Qm(t, r), s && jm(t, r)) : (s && jm(t, r), o && Qm(t, r)), D && t.setLineDash([]);
}
function lN(t, e, r) {
  var n = e.__image = rv(r.image, e.__image, e, e.onload);
  if (!(!n || !cl(n))) {
    var i = r.x || 0, a = r.y || 0, o = e.getWidth(), s = e.getHeight(), u = n.width / n.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), r.sWidth && r.sHeight) {
      var l = r.sx || 0, f = r.sy || 0;
      t.drawImage(n, l, f, r.sWidth, r.sHeight, i, a, o, s);
    } else if (r.sx && r.sy) {
      var l = r.sx, f = r.sy, c = o - l, h = s - f;
      t.drawImage(n, l, f, c, h, i, a, o, s);
    } else
      t.drawImage(n, i, a, o, s);
  }
}
function fN(t, e, r) {
  var n, i = r.text;
  if (i != null && (i += ""), i) {
    t.font = r.font || Ur, t.textAlign = r.textAlign, t.textBaseline = r.textBaseline;
    var a = void 0, o = void 0;
    t.setLineDash && r.lineDash && (n = pd(e), a = n[0], o = n[1]), a && (t.setLineDash(a), t.lineDashOffset = o), r.strokeFirst ? (tl(r) && t.strokeText(i, r.x, r.y), rl(r) && t.fillText(i, r.x, r.y)) : (rl(r) && t.fillText(i, r.x, r.y), tl(r) && t.strokeText(i, r.x, r.y)), a && t.setLineDash([]);
  }
}
var Jm = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], ey = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function sb(t, e, r, n, i) {
  var a = !1;
  if (!n && (r = r || {}, e === r))
    return !1;
  if (n || e.opacity !== r.opacity) {
    yt(t, i), a = !0;
    var o = Math.max(Math.min(e.opacity, 1), 0);
    t.globalAlpha = isNaN(o) ? li.opacity : o;
  }
  (n || e.blend !== r.blend) && (a || (yt(t, i), a = !0), t.globalCompositeOperation = e.blend || li.blend);
  for (var s = 0; s < Jm.length; s++) {
    var u = Jm[s];
    (n || e[u] !== r[u]) && (a || (yt(t, i), a = !0), t[u] = t.dpr * (e[u] || 0));
  }
  return (n || e.shadowColor !== r.shadowColor) && (a || (yt(t, i), a = !0), t.shadowColor = e.shadowColor || li.shadowColor), a;
}
function ty(t, e, r, n, i) {
  var a = e.style, o = n ? null : r && r.style || {};
  if (a === o)
    return !1;
  var s = sb(t, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (yt(t, i), s = !0), Km(a.fill) && (t.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (yt(t, i), s = !0), Km(a.stroke) && (t.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (yt(t, i), s = !0), t.globalAlpha = a.opacity == null ? 1 : a.opacity), e.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
    t.lineWidth !== l && (s || (yt(t, i), s = !0), t.lineWidth = l);
  }
  for (var f = 0; f < ey.length; f++) {
    var c = ey[f], h = c[0];
    (n || a[h] !== o[h]) && (s || (yt(t, i), s = !0), t[h] = a[h] || c[1]);
  }
  return s;
}
function cN(t, e, r, n, i) {
  return sb(t, e.style, r && r.style, n, i);
}
function ub(t, e) {
  var r = e.transform, n = t.dpr || 1;
  r ? t.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : t.setTransform(n, 0, 0, n, 0, 0);
}
function hN(t, e, r) {
  for (var n = !1, i = 0; i < t.length; i++) {
    var a = t[i];
    n = n || a.isZeroArea(), ub(e, a), e.beginPath(), a.buildPath(e, a.shape), e.clip();
  }
  r.allClipped = n;
}
function vN(t, e) {
  return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : !(!t && !e);
}
var ry = 1, ny = 2, iy = 3, ay = 4;
function dN(t) {
  var e = rl(t), r = tl(t);
  return !(t.lineDash || !(+e ^ +r) || e && typeof t.fill != "string" || r && typeof t.stroke != "string" || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1);
}
function yt(t, e) {
  e.batchFill && (e.batchFill = !1, t.fill()), e.batchStroke && (e.batchStroke = !1, t.stroke());
}
function lb(t, e) {
  var r = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  oi(t, e, r), na(t, r);
}
function oi(t, e, r) {
  var n = e.transform;
  if (!e.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
    e.__dirty &= ~Mt, e.__isRendered = !1;
    return;
  }
  var i = e.__clipPaths, a = r.prevElClipPaths, o = e.style, s = !1, u = !1;
  if ((!a || aN(i, a)) && (a && (yt(t, r), t.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), i && i.length && (yt(t, r), t.save(), hN(i, t, r), s = !0, r.prevElClipPaths = i)), r.allClipped) {
    e.__dirty &= ~Mt, e.__isRendered = !1;
    return;
  }
  e.beforeBrush && e.beforeBrush(r.beforeBrushParam), e.innerBeforeBrush();
  var l = r.prevEl;
  l || (u = s = !0);
  var f = e instanceof Ce && e.autoBatch && dN(o);
  s || vN(n, l.transform) ? (yt(t, r), ub(t, e)) : f || yt(t, r), e instanceof Ce ? (r.lastDrawType !== ry && (u = !0, r.lastDrawType = ry), ty(t, e, l, u, r), (!f || !r.batchFill && !r.batchStroke) && t.beginPath(), uN(t, e, o, f, r)) : e instanceof xo ? (r.lastDrawType !== iy && (u = !0, r.lastDrawType = iy), ty(t, e, l, u, r), fN(t, e, o)) : e instanceof Mr ? (r.lastDrawType !== ny && (u = !0, r.lastDrawType = ny), cN(t, e, l, u, r), lN(t, e, o)) : e.getTemporalDisplayables && (r.lastDrawType !== ay && (u = !0, r.lastDrawType = ay), pN(t, e, r)), e.innerAfterBrush(), e.afterBrush && (f && yt(t, r), e.afterBrush()), r.prevEl = e, e.__dirty = 0, e.__isRendered = !0;
}
function na(t, e) {
  yt(t, e), e.prevElClipPaths && t.restore();
}
function pN(t, e, r) {
  var n = e.getDisplayables(), i = e.getTemporalDisplayables();
  t.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: r.viewWidth,
    viewHeight: r.viewHeight,
    inHover: r.inHover,
    beforeBrushParam: {}
  }, o, s;
  for (o = e.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), oi(t, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  na(t, a);
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(r.beforeBrushParam), u.innerBeforeBrush(), oi(t, u, a), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  na(t, a), e.clearTemporalDisplayables(), e.notClear = !0, t.restore();
}
var tc = new rN(), oy = new sa(100), sy = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Oh(t, e) {
  if (t === "none")
    return null;
  var r = e.getDevicePixelRatio(), n = e.getZr(), i = n.painter.type === "svg";
  t.dirty && tc.delete(t);
  var a = tc.get(t);
  if (a)
    return a;
  var o = Ae(t, {
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
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / r, tc.set(t, s), t.dirty = !1, s;
  function u(l) {
    for (var f = [r], c = !0, h = 0; h < sy.length; ++h) {
      var v = o[sy[h]];
      if (v != null && !$(v) && !j(v) && !Ee(v) && typeof v != "boolean") {
        c = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (c) {
      d = f.join(",") + (i ? "-svg" : "");
      var p = oy.get(d);
      p && (i ? l.svgElement = p : l.image = p);
    }
    var g = cb(o.dashArrayX), m = gN(o.dashArrayY), y = fb(o.symbol), _ = mN(g), S = hb(m), b = !i && Pt.createCanvas(), w = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, T = D(), x;
    b && (b.width = T.width * r, b.height = T.height * r, x = b.getContext("2d")), C(), c && oy.put(d, b || w), l.image = b, l.svgElement = w, l.svgWidth = T.width, l.svgHeight = T.height;
    function D() {
      for (var E = 1, L = 0, A = _.length; L < A; ++L)
        E = Bp(E, _[L]);
      for (var P = 1, L = 0, A = y.length; L < A; ++L)
        P = Bp(P, y[L].length);
      E *= P;
      var O = S * _.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var N = function(B) {
          console.warn("Calculated decal size is greater than " + B + " due to decal option settings so " + B + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + B + " to be larger to avoid incontinuity.");
        };
        E > o.maxTileWidth && N("maxTileWidth"), O > o.maxTileHeight && N("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(E, o.maxTileWidth)),
        height: Math.max(1, Math.min(O, o.maxTileHeight))
      };
    }
    function C() {
      x && (x.clearRect(0, 0, b.width, b.height), o.backgroundColor && (x.fillStyle = o.backgroundColor, x.fillRect(0, 0, b.width, b.height)));
      for (var E = 0, L = 0; L < m.length; ++L)
        E += m[L];
      if (E <= 0)
        return;
      for (var A = -S, P = 0, O = 0, N = 0; A < T.height; ) {
        if (P % 2 === 0) {
          for (var B = O / 2 % y.length, R = 0, F = 0, G = 0; R < T.width * 2; ) {
            for (var H = 0, L = 0; L < g[N].length; ++L)
              H += g[N][L];
            if (H <= 0)
              break;
            if (F % 2 === 0) {
              var Y = (1 - o.symbolSize) * 0.5, q = R + g[N][F] * Y, W = A + m[P] * Y, ne = g[N][F] * o.symbolSize, se = m[P] * o.symbolSize, Oe = G / 2 % y[B].length;
              Ie(q, W, ne, se, y[B][Oe]);
            }
            R += g[N][F], ++G, ++F, F === g[N].length && (F = 0);
          }
          ++N, N === g.length && (N = 0);
        }
        A += m[P], ++O, ++P, P === m.length && (P = 0);
      }
      function Ie(he, Se, te, fe, ot) {
        var Re = i ? 1 : r, st = pa(ot, he * Re, Se * Re, te * Re, fe * Re, o.color, o.symbolKeepAspect);
        if (i) {
          var Ue = n.painter.renderOneToVNode(st);
          Ue && w.children.push(Ue);
        } else
          lb(x, st);
      }
    }
  }
}
function fb(t) {
  if (!t || t.length === 0)
    return [["rect"]];
  if (j(t))
    return [[t]];
  for (var e = !0, r = 0; r < t.length; ++r)
    if (!j(t[r])) {
      e = !1;
      break;
    }
  if (e)
    return fb([t]);
  for (var n = [], r = 0; r < t.length; ++r)
    j(t[r]) ? n.push([t[r]]) : n.push(t[r]);
  return n;
}
function cb(t) {
  if (!t || t.length === 0)
    return [[0, 0]];
  if (Ee(t)) {
    var e = Math.ceil(t);
    return [[e, e]];
  }
  for (var r = !0, n = 0; n < t.length; ++n)
    if (!Ee(t[n])) {
      r = !1;
      break;
    }
  if (r)
    return cb([t]);
  for (var i = [], n = 0; n < t.length; ++n)
    if (Ee(t[n])) {
      var e = Math.ceil(t[n]);
      i.push([e, e]);
    } else {
      var e = Q(t[n], function(s) {
        return Math.ceil(s);
      });
      e.length % 2 === 1 ? i.push(e.concat(e)) : i.push(e);
    }
  return i;
}
function gN(t) {
  if (!t || typeof t == "object" && t.length === 0)
    return [0, 0];
  if (Ee(t)) {
    var e = Math.ceil(t);
    return [e, e];
  }
  var r = Q(t, function(n) {
    return Math.ceil(n);
  });
  return t.length % 2 ? r.concat(r) : r;
}
function mN(t) {
  return Q(t, function(e) {
    return hb(e);
  });
}
function hb(t) {
  for (var e = 0, r = 0; r < t.length; ++r)
    e += t[r];
  return t.length % 2 === 1 ? e * 2 : e;
}
var yN = gv(_N);
function _N(t, e) {
  t.eachRawSeries(function(r) {
    if (!t.isSeriesFiltered(r)) {
      var n = r.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = Oh(s, e);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = Oh(i, e);
      }
    }
  });
}
var SN = 1, bN = 800, wN = 900, TN = 920, xN = 1e3, CN = 2e3, uy = 5e3, vb = 1e3, DN = 1100, gd = 2e3, db = 3e3, EN = 4e3, Bl = 4500, AN = 4600, MN = 5e3, IN = 6e3, pb = 7e3, LN = {
  PROCESSOR: {
    SERIES_FILTER: bN,
    AXIS_STATISTICS: TN,
    FILTER: xN,
    STATISTIC: uy,
    STATISTICS: uy
  },
  VISUAL: {
    LAYOUT: vb,
    PROGRESSIVE_LAYOUT: DN,
    GLOBAL: gd,
    CHART: db,
    POST_CHART_LAYOUT: AN,
    COMPONENT: EN,
    BRUSH: MN,
    CHART_ITEM: Bl,
    ARIA: IN,
    DECAL: pb
  }
}, Ye = "__flagInMainProcess", Fs = "__mainProcessVersion", Ke = "__pendingUpdate", rc = "__needsUpdateStatus", ly = /^[a-zA-Z0-9_]+$/, nc = "__connectUpdateStatus", fy = 0, PN = 1, ON = 2;
function gb(t) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    if (this.isDisposed()) {
      Dt(this.id);
      return;
    }
    return yb(this, t, e);
  };
}
function mb(t) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return yb(this, t, e);
  };
}
function yb(t, e, r) {
  return r[0] = r[0] && r[0].toLowerCase(), Ar.prototype[e].apply(t, r);
}
var _b = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  }(Ar)
), Sb = _b.prototype;
Sb.on = mb("on");
Sb.off = mb("off");
var jn, ic, zs, Nr, Gs, ac, oc, Vi, Fi, cy, hy, sc, vy, Hs, dy, bb, Bt, py, zi, wb = (
  /** @class */
  function(t) {
    X(e, t);
    function e(r, n, i) {
      var a = t.call(this, new $O()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, a.__v_skip = !0, a._dom = r;
      var o = "canvas", s = "auto", u = !1;
      if (a[Fs] = 1, process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          le.hasGlobalWindow ? window : global
        );
        l && (o = K(l.__ECHARTS__DEFAULT__RENDERER__, o), s = K(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = K(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      i.ssr && uO(function(v) {
        var d = ge(v), p = d.dataIndex;
        if (p != null) {
          var g = re();
          return g.set("series_index", d.seriesIndex), g.set("data_index", p), d.ssrType && g.set("ssr_type", d.ssrType), g;
        }
      });
      var f = a._zr = Nm(r, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: K(i.useDirtyRect, u),
        useCoarsePointer: K(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = hd(Pe(f.flush, f), 17), a._updateTheme(n), a._locale = iA(i.locale || gS), a._coordSysMgr = new Bv();
      var c = a._api = dy(a);
      function h(v, d) {
        return v.__prio - d.__prio;
      }
      return su(al, h), su(Rh, h), a._scheduler = new rb(a, c, Rh, al), a._messageCenter = new _b(), a._initEvents(), a.resize = Pe(a.resize, a), f.animation.on("frame", a._onframe, a), cy(f, a), hy(f, a), xc(a), a;
    }
    return e.prototype._onframe = function() {
      if (!this._disposed) {
        var r = this._scheduler, n = this._model, i = this._api;
        if (py(this), this[Ke]) {
          var a = this[Ke].silent;
          this[Ye] = !0, zi(this);
          try {
            jn(this), Nr.update.call(this, null, this[Ke].updateParams);
          } catch (u) {
            throw this[Ye] = !1, this[Ke] = null, u;
          }
          this._zr.flush(), this[Ye] = !1, this[Ke] = null, Vi.call(this, a), Fi.call(this, a);
        } else if (r.unfinished) {
          var o = SN;
          do {
            r.unfinished = !1;
            var s = Pt.getTime();
            r.performSeriesTasks(n), r.performDataProcessorTasks(n), ac(this, n), r.performVisualTasks(n), Hs(this, this._model, i, "remain", {}), o -= Pt.getTime() - s;
          } while (o > 0 && r.unfinished);
          r.unfinished || this._zr.flush();
        }
      }
    }, e.prototype.getDom = function() {
      return this._dom;
    }, e.prototype.getId = function() {
      return this.id;
    }, e.prototype.getZr = function() {
      return this._zr;
    }, e.prototype.isSSR = function() {
      return this._ssr;
    }, e.prototype.setOption = function(r, n, i) {
      if (this[Ye]) {
        process.env.NODE_ENV !== "production" && _e("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      var a, o, s;
      if (J(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Ye] = !0, zi(this), !this._model || n) {
        var u = new yO(this._api), l = this._theme, f = this._model = new dd();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(r, {
        replaceMerge: o
      }, kh);
      var c = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[Ke] = {
          silent: a,
          updateParams: c
        }, this[Ye] = !1, this.getZr().wakeUp();
      else {
        try {
          jn(this), Nr.update.call(this, null, c);
        } catch (h) {
          throw this[Ke] = null, this[Ye] = !1, h;
        }
        this._ssr || this._zr.flush(), this[Ke] = null, this[Ye] = !1, Vi.call(this, a), Fi.call(this, a);
      }
    }, e.prototype.setTheme = function(r, n) {
      if (this[Ye]) {
        process.env.NODE_ENV !== "production" && _e("`setTheme` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      var i = this._model;
      if (i) {
        var a = n && n.silent, o = null;
        this[Ke] && (a == null && (a = this[Ke].silent), o = this[Ke].updateParams, this[Ke] = null), this[Ye] = !0, zi(this);
        try {
          this._updateTheme(r), i.setTheme(this._theme), jn(this), Nr.update.call(this, {
            type: "setTheme"
          }, o);
        } catch (s) {
          throw this[Ye] = !1, s;
        }
        this[Ye] = !1, Vi.call(this, a), Fi.call(this, a);
      }
    }, e.prototype._updateTheme = function(r) {
      j(r) && (r = Tb[r]), r && (r = ce(r), r && J1(r, !0), this._theme = r);
    }, e.prototype.getModel = function() {
      return this._model;
    }, e.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, e.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, e.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, e.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || le.hasGlobalWindow && window.devicePixelRatio || 1;
    }, e.prototype.getRenderedCanvas = function(r) {
      return process.env.NODE_ENV !== "production" && Ze("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(r);
    }, e.prototype.renderToCanvas = function(r) {
      r = r || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return n.getRenderedCanvas({
        backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
      });
    }, e.prototype.renderToSVGString = function(r) {
      r = r || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return n.renderToString({
        useViewBox: r.useViewBox
      });
    }, e.prototype.getSvgDataURL = function() {
      var r = this._zr, n = r.storage.getDisplayList();
      return M(n, function(i) {
        i.stopAnimation(null, !0);
      }), r.painter.toDataURL();
    }, e.prototype.getDataURL = function(r) {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      r = r || {};
      var n = r.excludeComponents, i = this._model, a = [], o = this;
      M(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
      return M(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, e.prototype.getConnectedDataURL = function(r) {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      var n = r.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (gy[i]) {
        var u = s, l = s, f = -s, c = -s, h = [], v = r && r.pixelRatio || this.getDevicePixelRatio();
        M(_o, function(_, S) {
          if (_.group === i) {
            var b = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(ce(r)), w = _.getDom().getBoundingClientRect();
            u = a(w.left, u), l = a(w.top, l), f = o(w.right, f), c = o(w.bottom, c), h.push({
              dom: b,
              left: w.left,
              top: w.top
            });
          }
        }), u *= v, l *= v, f *= v, c *= v;
        var d = f - u, p = c - l, g = Pt.createCanvas(), m = Nm(g, {
          renderer: n ? "svg" : "canvas"
        });
        if (m.resize({
          width: d,
          height: p
        }), n) {
          var y = "";
          return M(h, function(_) {
            var S = _.left - u, b = _.top - l;
            y += '<g transform="translate(' + S + "," + b + ')">' + _.dom + "</g>";
          }), m.painter.getSvgRoot().innerHTML = y, r.connectedBackgroundColor && m.painter.setBackgroundColor(r.connectedBackgroundColor), m.refreshImmediately(), m.painter.toDataURL();
        } else
          return r.connectedBackgroundColor && m.add(new ze({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: p
            },
            style: {
              fill: r.connectedBackgroundColor
            }
          })), M(h, function(_) {
            var S = new Mr({
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
    }, e.prototype.convertToPixel = function(r, n, i) {
      return Gs(this, "convertToPixel", r, n, i);
    }, e.prototype.convertToLayout = function(r, n, i) {
      return Gs(this, "convertToLayout", r, n, i);
    }, e.prototype.convertFromPixel = function(r, n, i) {
      return Gs(this, "convertFromPixel", r, n, i);
    }, e.prototype.containPixel = function(r, n) {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      var i = this._model, a, o = yf(i, r);
      return M(o, function(s, u) {
        u.indexOf("Models") >= 0 && M(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var c = this._chartsMap[l.__viewId];
            c && c.containPoint ? a = a || c.containPoint(n, l) : process.env.NODE_ENV !== "production" && nt(u + ": " + (c ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && nt(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, e.prototype.getVisual = function(r, n) {
      var i = this._model, a = yf(i, r, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || nt("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? KO(s, u, n) : jO(s, n);
    }, e.prototype.getViewOfComponentModel = function(r) {
      return this._componentsMap[r.__viewId];
    }, e.prototype.getViewOfSeriesModel = function(r) {
      return this._chartsMap[r.__viewId];
    }, e.prototype._initEvents = function() {
      var r = this;
      M(NN, function(i) {
        var a = function(o) {
          var s = r.getModel(), u = o.target, l, f = i === "globalout";
          if (f ? l = {} : u && no(u, function(p) {
            var g = ge(p);
            if (g && g.dataIndex != null) {
              var m = g.dataModel || s.getSeriesByIndex(g.seriesIndex);
              return l = m && m.getDataParams(g.dataIndex, g.dataType, u) || {}, !0;
            } else if (g.eventData)
              return l = z({}, g.eventData), !0;
          }, !0), l) {
            var c = l.componentType, h = l.componentIndex;
            (c === "markLine" || c === "markPoint" || c === "markArea") && (c = "series", h = l.seriesIndex);
            var v = c && h != null && s.getComponent(c, h), d = v && r[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !f && !(v && d) && nt("model or view can not be found by params"), l.event = o, l.type = i, r._$eventProcessor.eventInfo = {
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
      M(Nh, function(i, a) {
        n.on(a, function(o) {
          r.trigger(a, o);
        });
      }), hP(n, this, this._api);
    }, e.prototype.isDisposed = function() {
      return this._disposed;
    }, e.prototype.clear = function() {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, e.prototype.dispose = function() {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      this._disposed = !0;
      var r = this.getDom();
      r && o_(this.getDom(), yd, "");
      var n = this, i = n._api, a = n._model;
      M(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), M(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete _o[n.id];
    }, e.prototype.resize = function(r) {
      if (this[Ye]) {
        process.env.NODE_ENV !== "production" && _e("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      this._zr.resize(r);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = r && r.silent;
        this[Ke] && (a == null && (a = this[Ke].silent), i = !0, this[Ke] = null), this[Ye] = !0, zi(this);
        try {
          i && jn(this), Nr.update.call(this, {
            type: "resize",
            animation: z({
              // Disable animation
              duration: 0
            }, r && r.animation)
          });
        } catch (o) {
          throw this[Ye] = !1, o;
        }
        this[Ye] = !1, Vi.call(this, a), Fi.call(this, a);
      }
    }, e.prototype.showLoading = function(r, n) {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      if (J(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !Bh[r]) {
        process.env.NODE_ENV !== "production" && nt("Loading effects " + r + " not exists.");
        return;
      }
      var i = Bh[r](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, e.prototype.hideLoading = function() {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, e.prototype.makeActionFromEvent = function(r) {
      var n = z({}, r);
      return n.type = il[r.type], n;
    }, e.prototype.dispatchAction = function(r, n) {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      if (J(n) || (n = {
        silent: !!n
      }), !!nl[r.type] && this._model) {
        if (this[Ye]) {
          this._pendingActions.push(r);
          return;
        }
        var i = n.silent;
        oc.call(this, r, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && le.browser.weChat && this._throttledZrFlush(), Vi.call(this, i), Fi.call(this, i);
      }
    }, e.prototype.updateLabelLayout = function() {
      Ft.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, e.prototype.appendData = function(r) {
      if (this._disposed) {
        Dt(this.id);
        return;
      }
      var n = r.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && k(r.data && a), a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, e.internalField = function() {
      jn = function(c) {
        LI(c._model);
        var h = c._scheduler;
        h.restorePipelines(c._zr, c._model), h.prepareStageTasks(), ic(c, !0), ic(c, !1), h.plan();
      }, ic = function(c, h) {
        for (var v = c._model, d = c._scheduler, p = h ? c._componentsViews : c._chartsViews, g = h ? c._componentsMap : c._chartsMap, m = c._zr, y = c._api, _ = 0; _ < p.length; _++)
          p[_].__alive = !1;
        h ? v.eachComponent(function(w, T) {
          w !== "series" && S(T);
        }) : v.eachSeries(S);
        function S(w) {
          var T = w.__requireNewView;
          w.__requireNewView = !1;
          var x = "_ec_" + w.id + "_" + w.type, D = !T && g[x];
          if (!D) {
            var C = br(w.type), E = h ? sr.getClass(C.main, C.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Jt.getClass(C.sub)
            );
            process.env.NODE_ENV !== "production" && k(E, C.sub + " does not exist."), D = new E(), D.init(v, y), g[x] = D, p.push(D), m.add(D.group);
          }
          w.__viewId = D.__id = x, D.__alive = !0, D.__model = w, D.group.__ecComponentInfo = {
            mainType: w.mainType,
            index: w.componentIndex
          }, !h && d.prepareView(D, w, v, y);
        }
        for (var _ = 0; _ < p.length; ) {
          var b = p[_];
          b.__alive ? _++ : (!h && b.renderTask.dispose(), m.remove(b.group), b.dispose(v, y), p.splice(_, 1), g[b.__id] === b && delete g[b.__id], b.__id = b.group.__ecComponentInfo = null);
        }
      }, zs = function(c, h, v, d, p) {
        var g = c._model;
        if (g.setUpdatePayload(v), !d) {
          M([].concat(c._componentsViews).concat(c._chartsViews), S);
          return;
        }
        var m = hC(v, d, p), y = v.excludeSeriesId, _;
        y != null && (_ = re(), M(St(y), function(b) {
          var w = Cr(b, null);
          w != null && _.set(w, !0);
        })), g && g.eachComponent(m, function(b) {
          var w = _ && _.get(b.id) != null;
          if (!w)
            if (jp(v))
              if (b instanceof ar)
                v.type === fi && !v.notBlur && !b.get(["emphasis", "disabled"]) && BC(b, v, c._api);
              else {
                var T = bv(b.mainType, b.componentIndex, v.name, c._api), x = T.focusSelf, D = T.dispatchers;
                v.type === fi && x && !v.notBlur && eh(b.mainType, b.componentIndex, c._api), D && M(D, function(C) {
                  v.type === fi ? Eu(C) : Au(C);
                });
              }
            else rh(v) && b instanceof ar && (zC(b, v, c._api), qp(b), Bt(c));
        }, c), g && g.eachComponent(m, function(b) {
          var w = _ && _.get(b.id) != null;
          w || S(c[d === "series" ? "_chartsMap" : "_componentsMap"][b.__viewId]);
        }, c);
        function S(b) {
          b && b.__alive && b[h] && b[h](b.__model, g, c._api, v);
        }
      }, Nr = {
        prepareAndUpdate: function(c) {
          jn(this), Nr.update.call(this, c, c && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: c.newOption != null
          });
        },
        update: function(c, h) {
          var v = this._model, d = this._api, p = this._zr, g = this._coordSysMgr, m = this._scheduler;
          if (v) {
            PI(v), v.setUpdatePayload(c), m.restoreData(v, c), m.performSeriesTasks(v), g.create(v, d), Ft.trigger("coordsys:aftercreate", v, d), m.performDataProcessorTasks(v, c), ac(this, v), g.update(v, d), n(v), m.performVisualTasks(v, c);
            var y = v.get("backgroundColor") || "transparent";
            p.setBackgroundColor(y);
            var _ = v.get("darkMode");
            _ != null && _ !== "auto" && p.setDarkMode(_), sc(this, v, d, c, h), Ft.trigger("afterupdate", v, d);
          }
        },
        /**
         * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
         */
        updateTransform: function(c) {
          var h = this, v = h._model, d = h._api;
          if (v) {
            v.setUpdatePayload(c);
            var p = [];
            v.eachComponent(function(m, y) {
              if (m !== c_) {
                var _ = h.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(y, v, d, c);
                    S && S.update && p.push(_);
                  } else
                    p.push(_);
              }
            });
            var g = re();
            v.eachSeries(function(m) {
              var y = h._chartsMap[m.__viewId], _ = m.pipelineContext;
              if (y.updateTransform && !_.progressiveRender) {
                var S = y.updateTransform(m, v, d, c);
                S && S.update && g.set(m.uid, 1);
              } else
                g.set(m.uid, 1);
            }), h._scheduler.performVisualTasks(v, c, {
              setDirty: !0,
              dirtyMap: g
            }), Hs(h, v, d, c, {}, g), Ft.trigger("afterupdate", v, d);
          }
        },
        updateView: function(c) {
          var h = this._model;
          h && (h.setUpdatePayload(c), Jt.markUpdateMethod(c, "updateView"), n(h), this._scheduler.performVisualTasks(h, c, {
            setDirty: !0
          }), sc(this, h, this._api, c, {}), Ft.trigger("afterupdate", h, this._api));
        },
        updateVisual: function(c) {
          var h = this, v = this._model;
          v && (v.setUpdatePayload(c), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), Jt.markUpdateMethod(c, "updateVisual"), n(v), this._scheduler.performVisualTasks(v, c, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, p) {
            if (d !== "series") {
              var g = h.getViewOfComponentModel(p);
              g && g.__alive && g.updateVisual(p, v, h._api, c);
            }
          }), v.eachSeries(function(d) {
            var p = h._chartsMap[d.__viewId];
            p.updateVisual(d, v, h._api, c);
          }), Ft.trigger("afterupdate", v, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(c) {
          Nr.update.call(this, c);
        }
      };
      function r(c, h, v, d, p) {
        if (c._disposed) {
          Dt(c.id);
          return;
        }
        for (var g = c._model, m = c._coordSysMgr.getCoordinateSystems(), y, _ = yf(g, v), S = 0; S < m.length; S++) {
          var b = m[S];
          if (b[h] && (y = b[h](g, _, d, p)) != null)
            return y;
        }
        process.env.NODE_ENV !== "production" && nt("No coordinate system that supports " + h + " found by the given finder.");
      }
      Gs = r, ac = function(c, h) {
        var v = c._chartsMap, d = c._scheduler;
        h.eachSeries(function(p) {
          d.updateStreamModes(p, v[p.__viewId]);
        });
      }, oc = function(c, h) {
        var v = this, d = this.getModel(), p = c.type, g = c.escapeConnect, m = nl[p], y = (m.update || "update").split(":"), _ = y.pop(), S = y[0] != null && br(y[0]);
        this[Ye] = !0, zi(this);
        var b = [c], w = !1;
        c.batch && (w = !0, b = Q(c.batch, function(N) {
          return N = Ae(z({}, N), c), N.batch = null, N;
        }));
        var T = [], x, D = [], C = m.nonRefinedEventType, E = rh(c), L = jp(c);
        if (L && w_(this._api), M(b, function(N) {
          var B = m.action(N, d, v._api);
          if (m.refineEvent ? D.push(B) : x = B, x = x || z({}, N), x.type = C, T.push(x), L) {
            var R = dv(c), F = R.queryOptionMap, G = R.mainTypeSpecified, H = G ? F.keys()[0] : "series";
            zs(v, _, N, H), Bt(v);
          } else E ? (zs(v, _, N, "series"), Bt(v)) : S && zs(v, _, N, S.main, S.sub);
        }), _ !== "none" && !L && !E && !S)
          try {
            this[Ke] ? (jn(this), Nr.update.call(this, c), this[Ke] = null) : Nr[_].call(this, c);
          } catch (N) {
            throw this[Ye] = !1, N;
          }
        if (w ? x = {
          type: C,
          escapeConnect: g,
          batch: T
        } : x = T[0], this[Ye] = !1, !h) {
          var A = void 0;
          if (m.refineEvent) {
            var P = m.refineEvent(D, c, d, this._api).eventContent;
            k(J(P)), A = Ae({
              type: m.refinedEventType
            }, P), A.fromAction = c.type, A.fromActionPayload = c, A.escapeConnect = !0;
          }
          var O = this._messageCenter;
          O.trigger(x.type, x), A && O.trigger(A.type, A);
        }
      }, Vi = function(c) {
        for (var h = this._pendingActions; h.length; ) {
          var v = h.shift();
          oc.call(this, v, c);
        }
      }, Fi = function(c) {
        !c && this.trigger("updated");
      }, cy = function(c, h) {
        c.on("rendered", function(v) {
          h.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          c.animation.isFinished() && !h[Ke] && !h._scheduler.unfinished && !h._pendingActions.length ? h.trigger("finished") : c.refresh();
        });
      }, hy = function(c, h) {
        c.on("mouseover", function(v) {
          var d = v.target, p = no(d, ca);
          p && (VC(p, v, h._api), Bt(h));
        }).on("mouseout", function(v) {
          var d = v.target, p = no(d, ca);
          p && (FC(p, v, h._api), Bt(h));
        }).on("click", function(v) {
          var d = v.target, p = no(d, function(y) {
            return ge(y).dataIndex != null;
          }, !0);
          if (p) {
            var g = p.selected ? "unselect" : "select", m = ge(p);
            h._api.dispatchAction({
              type: g,
              dataType: m.dataType,
              dataIndexInside: m.dataIndex,
              seriesIndex: m.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function n(c) {
        c.clearColorPalette(), c.eachSeries(function(h) {
          h.clearColorPalette();
        });
      }
      function i(c) {
        var h = [], v = [], d = !1;
        if (c.eachComponent(function(y, _) {
          var S = _.get("zlevel") || 0, b = _.get("z") || 0, w = _.getZLevelKey();
          d = d || !!w, (y === "series" ? v : h).push({
            zlevel: S,
            z: b,
            idx: _.componentIndex,
            type: y,
            key: w
          });
        }), d) {
          var p = h.concat(v), g, m;
          su(p, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), M(p, function(y) {
            var _ = c.getComponent(y.type, y.idx), S = y.zlevel, b = y.key;
            g != null && (S = Math.max(g, S)), b ? (S === g && b !== m && S++, m = b) : m && (S === g && S++, m = ""), g = S, _.setZLevel(S);
          });
        }
      }
      sc = function(c, h, v, d, p) {
        i(h), vy(c, h, v, d, p), M(c._chartsViews, function(g) {
          g.__alive = !1;
        }), Hs(c, h, v, d, p), M(c._chartsViews, function(g) {
          g.__alive || g.remove(h, v);
        });
      }, vy = function(c, h, v, d, p, g) {
        M(g || c._componentsViews, function(m) {
          var y = m.__model;
          l(y, m), m.render(y, h, v, d), u(y, m), f(y, m);
        });
      }, Hs = function(c, h, v, d, p, g) {
        var m = c._scheduler;
        p = z(p || {}, {
          updatedSeries: h.getSeries()
        }), Ft.trigger("series:beforeupdate", h, v, p);
        var y = !1;
        h.eachSeries(function(_) {
          var S = c._chartsMap[_.__viewId];
          S.__alive = !0;
          var b = S.renderTask;
          m.updatePayload(b, d), l(_, S), g && g.get(_.uid) && b.dirty(), b.perform(m.getPerformArgs(b)) && (y = !0), S.group.silent = !!_.get("silent"), s(_, S), qp(_);
        }), m.unfinished = y || m.unfinished, Ft.trigger("series:layoutlabels", h, v, p), Ft.trigger("series:transition", h, v, p), h.eachSeries(function(_) {
          var S = c._chartsMap[_.__viewId];
          u(_, S), f(_, S);
        }), o(c, h), Ft.trigger("series:afterupdate", h, v, p);
      }, Bt = function(c) {
        c[rc] = !0, c.getZr().wakeUp();
      }, zi = function(c) {
        c[Fs] = (c[Fs] + 1) % 1e6;
      }, py = function(c) {
        c[rc] && (c.getZr().storage.traverse(function(h) {
          co(h) || a(h);
        }), c[rc] = !1);
      };
      function a(c) {
        for (var h = [], v = c.currentStates, d = 0; d < v.length; d++) {
          var p = v[d];
          p === "emphasis" || p === "blur" || p === "select" || h.push(p);
        }
        c.selected && c.states.select && h.push("select"), c.hoverState === _l && c.states.emphasis ? h.push("emphasis") : c.hoverState === yl && c.states.blur && h.push("blur"), c.useStates(h);
      }
      function o(c, h) {
        var v = c._zr;
        if (v.painter.type === "canvas") {
          var d = v.storage, p = 0;
          d.traverse(function(m) {
            m.isGroup || p++;
          });
          var g = p > K(h.get("hoverLayerThreshold"), j1.hoverLayerThreshold) && !le.node && !le.worker;
          (c._usingTHL || g) && (h.eachSeries(function(m) {
            if (!m.preventUsingHoverLayer) {
              var y = c._chartsMap[m.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var S = _.states.emphasis;
                S && S.hoverLayer !== Av && (S.hoverLayer = g ? R_ : N_);
              });
            }
          }), c._usingTHL = g);
        }
      }
      function s(c, h) {
        var v = c.get("blendMode") || null;
        h.eachRendered(function(d) {
          d.isGroup || (d.style.blend = v);
        });
      }
      function u(c, h) {
        if (!c.preventAutoZ) {
          var v = G_(c);
          h.eachRendered(function(d) {
            return H_(d, v.z, v.zlevel), !0;
          });
        }
      }
      function l(c, h) {
        h.eachRendered(function(v) {
          if (!co(v)) {
            var d = v.getTextContent(), p = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), p && p.stateTransition && (p.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(c, h) {
        var v = c.getModel("stateAnimation"), d = c.isAnimationEnabled(), p = v.get("duration"), g = p > 0 ? {
          duration: p,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        h.eachRendered(function(m) {
          if (m.states && m.states.emphasis) {
            if (co(m))
              return;
            if (m instanceof Ce && XC(m), m.__dirty) {
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
      dy = function(c) {
        return new /** @class */
        (function(h) {
          X(v, h);
          function v() {
            return h !== null && h.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return c._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var p = d.__ecComponentInfo;
              if (p != null)
                return c._model.getComponent(p.mainType, p.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, p) {
            Eu(d, p), Bt(c);
          }, v.prototype.leaveEmphasis = function(d, p) {
            Au(d, p), Bt(c);
          }, v.prototype.enterBlur = function(d) {
            kC(d), Bt(c);
          }, v.prototype.leaveBlur = function(d) {
            y_(d), Bt(c);
          }, v.prototype.enterSelect = function(d) {
            __(d), Bt(c);
          }, v.prototype.leaveSelect = function(d) {
            S_(d), Bt(c);
          }, v.prototype.getModel = function() {
            return c.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return c.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return c.getViewOfSeriesModel(d);
          }, v.prototype.getECUpdateCycleVersion = function() {
            return c[Fs];
          }, v.prototype.usingTHL = function() {
            return c._usingTHL;
          }, v;
        }(v_))(c);
      }, bb = function(c) {
        function h(v, d) {
          for (var p = 0; p < v.length; p++) {
            var g = v[p];
            g[nc] = d;
          }
        }
        M(il, function(v, d) {
          c._messageCenter.on(d, function(p) {
            if (gy[c.group] && c[nc] !== fy) {
              if (p && p.escapeConnect)
                return;
              var g = c.makeActionFromEvent(p), m = [];
              M(_o, function(y) {
                y !== c && y.group === c.group && m.push(y);
              }), h(m, fy), M(m, function(y) {
                y[nc] !== PN && y.dispatchAction(g);
              }), h(m, ON);
            }
          });
        });
      };
    }(), e;
  }(Ar)
), md = wb.prototype;
md.on = gb("on");
md.off = gb("off");
md.one = function(t, e, r) {
  var n = this;
  Yr("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    e && e.apply && e.apply(this, a), n.off(t, i);
  }
  this.on.call(this, t, i, r);
};
var NN = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Dt(t) {
  process.env.NODE_ENV !== "production" && nt("Instance " + t + " has been disposed");
}
var nl = {}, il = {}, Nh = {}, Rh = [], kh = [], al = [], Tb = {}, Bh = {}, _o = {}, gy = {}, RN = +/* @__PURE__ */ new Date() - 0, yd = "_echarts_instance_";
function kN(t, e, r) {
  var n = !(r && r.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !t)
      throw new Error("Initialize failed: invalid dom.");
    var i = BN(t);
    if (i)
      return process.env.NODE_ENV !== "production" && nt("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && ia(t) && t.nodeName.toUpperCase() !== "CANVAS" && (!t.clientWidth && (!r || r.width == null) || !t.clientHeight && (!r || r.height == null)) && nt("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new wb(t, e, r);
  return a.id = "ec_" + RN++, _o[a.id] = a, n && o_(t, yd, a.id), bb(a), Ft.trigger("afterinit", a), a;
}
function BN(t) {
  return _o[vC(t, yd)];
}
function xb(t, e) {
  Tb[t] = e;
}
function Cb(t) {
  xe(kh, t) < 0 && kh.push(t);
}
function Db(t, e) {
  Sd(Rh, t, e, CN);
}
function VN(t) {
  _d("afterinit", t);
}
function FN(t) {
  _d("afterupdate", t);
}
function _d(t, e) {
  Ft.on(t, e);
}
function Da(t, e, r) {
  var n, i, a, o, s;
  ie(e) && (r = e, e = ""), J(t) ? (n = t.type, i = t.event, o = t.update, s = t.publishNonRefinedEvent, r || (r = t.action), a = t.refineEvent) : (n = t, i = e);
  function u(f) {
    return f.toLowerCase();
  }
  i = u(i || n);
  var l = a ? u(n) : i;
  nl[n] || (k(ly.test(n) && ly.test(i)), a && k(i !== n), nl[n] = {
    actionType: n,
    refinedEventType: i,
    nonRefinedEventType: l,
    update: o,
    action: r,
    refineEvent: a
  }, Nh[i] = 1, a && s && (Nh[l] = 1), process.env.NODE_ENV !== "production" && il[l] && _e(l + ' must not be shared; use "refineEvent" if you intend to share an event name.'), il[l] = n);
}
function zN(t, e) {
  Bv.register(t, e);
}
function GN(t, e) {
  Sd(al, t, e, vb, "layout", !0);
}
function bi(t, e) {
  Sd(al, t, e, db, "visual", !0);
}
var my = [];
function Sd(t, e, r, n, i, a) {
  if ((ie(e) || J(e)) && (r = e, e = n), process.env.NODE_ENV !== "production") {
    if (isNaN(e) || e == null)
      throw new Error("Illegal priority");
    M(t, function(s) {
      k(s.__raw !== r);
    });
  }
  if (!(xe(my, r) >= 0)) {
    my.push(r);
    var o = rb.wrapStageHandler(r, i);
    o.__prio = e, o.__raw = r, t.push(o), process.env.NODE_ENV !== "production" && a && k(!o.dirtyOnOverallProgress, "dirtyOnOverallProgress is not allowed in " + i + " stage; otherwise progressive rendering is disabled on all series.");
  }
}
function Eb(t, e) {
  Bh[t] = e;
}
function HN(t, e, r) {
  var n = JO("registerMap");
  n && n(t, e, r);
}
var UN = BA;
bi(gd, NO);
bi(Bl, RO);
bi(Bl, kO);
bi(gd, ZO);
bi(Bl, qO);
bi(pb, yN);
Cb(J1);
Db(wN, IO);
Eb("default", BO);
Da({
  type: fi,
  event: fi,
  update: fi
}, it);
Da({
  type: js,
  event: js,
  update: js
}, it);
Da({
  type: Cu,
  event: _v,
  update: Cu,
  action: it,
  refineEvent: bd,
  publishNonRefinedEvent: !0
});
Da({
  type: Qc,
  event: _v,
  update: Qc,
  action: it,
  refineEvent: bd,
  publishNonRefinedEvent: !0
});
Da({
  type: Du,
  event: _v,
  update: Du,
  action: it,
  refineEvent: bd,
  publishNonRefinedEvent: !0
});
function bd(t, e, r, n) {
  return {
    eventContent: {
      selected: GC(r),
      isFromClick: e.isFromClick || !1
    }
  };
}
xb("default", {});
xb("dark", ob);
var yy = [], WN = {
  registerPreprocessor: Cb,
  registerProcessor: Db,
  registerPostInit: VN,
  registerPostUpdate: FN,
  registerUpdateLifecycle: _d,
  registerAction: Da,
  registerCoordinateSystem: zN,
  registerLayout: GN,
  registerVisual: bi,
  registerTransform: UN,
  registerLoading: Eb,
  registerMap: HN,
  registerImpl: QO,
  PRIORITY: LN,
  ComponentModel: be,
  ComponentView: sr,
  SeriesModel: ar,
  ChartView: Jt,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(t) {
    be.registerClass(t);
  },
  registerComponentView: function(t) {
    sr.registerClass(t);
  },
  registerSeriesModel: function(t) {
    ar.registerClass(t);
  },
  registerChartView: function(t) {
    Jt.registerClass(t);
  },
  registerCustomSeries: function(t, e) {
  },
  registerSubTypeDefaulter: function(t, e) {
    be.registerSubTypeDefaulter(t, e);
  },
  registerPainter: function(t, e) {
    oO(t, e);
  }
};
function xn(t) {
  if ($(t)) {
    M(t, function(e) {
      xn(e);
    });
    return;
  }
  xe(yy, t) >= 0 || (yy.push(t), ie(t) && (t = {
    install: t
  }), t.install(WN));
}
var YN = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, t.prototype.getCoordSysModel = function() {
    }, t;
  }()
), Vh = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", $t).models[0];
    }, e.type = "cartesian2dAxis", e;
  }(be)
);
Er(Vh, YN);
var Ab = {
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
      color: ee.color.axisLine,
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
    color: ee.color.axisLabel,
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
      color: ee.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [ee.color.backgroundTint, ee.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: ee.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: ee.color.border,
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
}, XN = De({
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
}, Ab), wd = De({
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
      color: ee.color.axisMinorSplitLine,
      width: 1
    }
  }
}, Ab), $N = De({
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
}, wd), ZN = Ae({
  logBase: 10
}, wd);
const qN = {
  category: XN,
  value: wd,
  time: $N,
  log: ZN
};
function _y(t, e, r, n) {
  M(JS, function(i, a) {
    var o = De(De({}, qN[a], !0), n, !0), s = (
      /** @class */
      function(u) {
        X(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = e + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, c) {
          var h = Mo(this), v = h ? jo(f) : {}, d = c.getTheme();
          De(f, d.get(a + "Axis")), De(f, this.getDefaultOption()), f.type = Sy(f), h && wn(f, v, h);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = yh.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var c = this.option;
          if (c.type === "category")
            return f ? c.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.prototype.updateAxisBreaks = function(f) {
          return {
            breaks: []
          };
        }, l.type = e + "Axis." + a, l.defaultOption = o, l;
      }(r)
    );
    t.registerComponentModel(s);
  }), t.registerSubTypeDefaulter(e + "Axis", Sy);
}
function Sy(t) {
  return t.type || (t.data ? "category" : "value");
}
var KN = (
  /** @class */
  function() {
    function t(e) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = e || "";
    }
    return t.prototype.getAxis = function(e) {
      return this._axes[e];
    }, t.prototype.getAxes = function() {
      return Q(this._dimList, function(e) {
        return this._axes[e];
      }, this);
    }, t.prototype.getAxesByScale = function(e) {
      return e = e.toLowerCase(), tt(this.getAxes(), function(r) {
        return r.scale.type === e;
      });
    }, t.prototype.addAxis = function(e) {
      var r = e.dim;
      this._axes[r] = e, this._dimList.push(r);
    }, t;
  }()
), lu = ["x", "y"];
function by(t) {
  return (t.type === "interval" || t.type === "time") && !pi(t);
}
var jN = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Hr, r.dimensions = lu, r;
    }
    return e.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var r = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!by(r) || !by(n))) {
        var i = ku(r, null), a = ku(n, null), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), u = i[1] - i[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, c = (s[1] - o[1]) / l, h = o[0] - i[0] * f, v = o[1] - a[0] * c, d = this._transform = [f, 0, 0, c, h, v];
          this._invTransform = zo([], d);
        }
      }
    }, e.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, e.prototype.containPoint = function(r) {
      var n = this.getAxis("x"), i = this.getAxis("y");
      return n.contain(n.toLocalCoord(r[0])) && i.contain(i.toLocalCoord(r[1]));
    }, e.prototype.containData = function(r) {
      return this.getAxis("x").containData(r[0]) && this.getAxis("y").containData(r[1]);
    }, e.prototype.containZone = function(r, n) {
      var i = this.dataToPoint(r), a = this.dataToPoint(n), o = this.getArea(), s = new ae(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, e.prototype.dataToPoint = function(r, n, i) {
      i = i || [];
      var a = r[0], o = r[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return Kt(i, r, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = u.toGlobalCoord(u.dataToCoord(o, n)), i;
    }, e.prototype.clampData = function(r, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), u = i.parse(r[0]), l = a.parse(r[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), n;
    }, e.prototype.pointToData = function(r, n, i) {
      if (i = i || [], this._invTransform)
        return Kt(i, r, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(r[0]), n), i[1] = o.coordToData(o.toLocalCoord(r[1]), n), i;
    }, e.prototype.getOtherAxis = function(r) {
      return this.getAxis(r.dim === "x" ? "y" : "x");
    }, e.prototype.getArea = function(r) {
      r = r || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - r, o = Math.min(i[0], i[1]) - r, s = Math.max(n[0], n[1]) - a + r, u = Math.max(i[0], i[1]) - o + r;
      return new ae(a, o, s, u);
    }, e;
  }(KN)
);
function QN(t, e) {
  var r = t.scale, n = t.model;
  process.env.NODE_ENV !== "production" && k(r && n && (r instanceof dn || r instanceof Vu) && (e instanceof dn || e instanceof Vu));
  var i = I1(r, n, n.ecModel, t), a = ga(r), o = ga(e) ? e.intervalStub : e, s = a ? r.intervalStub : r, u = r.base, l = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), c = l.length - 1;
  process.env.NODE_ENV !== "production" && (k(!pi(e) && !pi(r)), k(c > 0), k(f.length === l.length), k(l[0].value <= l[c].value), k(f[0].value <= l[0].value && l[c].value <= f[c].value), c >= 2 && (k(f[1].value === l[1].value), k(f[c - 1].value === l[c - 1].value)));
  var h, v, d;
  if (c === 1)
    h = v = 0, d = 1;
  else if (c === 2) {
    var p = $e(l[0].value - l[1].value), g = $e(l[1].value - l[2].value);
    h = v = 0, p === g ? d = 2 : (d = 1, p < g ? h = p / g : v = g / p);
  } else {
    var m = o.getConfig().interval;
    h = (1 - (l[0].value - f[0].value) / m) % 1, v = (1 - (f[c].value - l[c].value) / m) % 1, d = c - (h ? 1 : 0) - (v ? 1 : 0);
  }
  process.env.NODE_ENV !== "production" && k(d >= 1);
  var y = i.zoomFixMM, _ = y[0] || y[1], S = [i.fixMM[0] || _, i.fixMM[1] || _], b = r.getExtent(), w = s.getExtent(), T = qS(w, S), x, D, C, E, L, A;
  function P(Y) {
    for (var q = 50, W = 0; W < q && !Y(); W++)
      C = a ? C * ye(u, 2) : VM(C), E = mi(C);
    process.env.NODE_ENV !== "production" && W >= q && nt("incorrect impl in `scaleCalcAlign`.");
  }
  function O() {
    x = me(A - C * h, E);
  }
  function N() {
    D = me(L + C * v, E);
  }
  function B() {
    A = h ? me(x + C * h, E) : x;
  }
  function R() {
    L = v ? me(D - C * v, E) : D;
  }
  if (S[0] && S[1]) {
    x = T[0], D = T[1], C = (D - x) / (d + h + v);
    var F = t.getExtent(), G = $e(F[1] - F[0]);
    E = Zx([D, x], G, 0.5 / d), B(), R(), Ot(E) && (C = me(C, E));
  } else {
    var H = T[1] - T[0];
    C = a ? ye(J0(H), 1) : cv(H / d, e_), E = mi(C), S[0] ? (x = T[0], P(function() {
      if (B(), L = me(A + C * d, E), N(), D >= T[1])
        return !0;
    })) : S[1] ? (D = T[1], P(function() {
      if (R(), A = me(L - C * d, E), O(), x <= T[0])
        return !0;
    })) : P(function() {
      A = me(Yo(T[0] / C) * C, E), L = me(vi(T[1] / C) * C, E);
      var Y = Wr((L - A) / C);
      if (Y <= d) {
        var q = d - Y, W = void 0, ne = i.incl0 || a;
        if (ne && T[0] === 0)
          W = [0, q];
        else if (ne && T[1] === 0)
          W = [q, 0];
        else {
          var se = vi(q / 2);
          W = q % 2 === 0 ? [se, se] : x + D < T[0] + T[1] ? [se, se + 1] : [se + 1, se];
        }
        if (A = me(A - C * W[0], E), L = me(L + C * W[1], E), O(), N(), x <= T[0] && D >= T[1])
          return !0;
      }
    });
  }
  t1(r, S, w, [x, D], b, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: C,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: E,
    niceExtent: [A, L]
  }), process.env.NODE_ENV !== "production" && r.freeze();
}
function wy(t, e) {
  var r = ga(t), n = r ? t.intervalStub : t, i = e.fixMinMax || [], a = r ? t.getExtent() : null, o = n.getExtent(), s = qS(o, i, e.rawExtentResult);
  n.setExtent(s[0], s[1]), s = n.getExtent();
  var u = r ? eR(n, e) : JN(n, e), l = u.intervalPrecision, f = u.interval, c = e.userInterval;
  c != null && (u.interval = c, u.intervalPrecision = mi(c)), i[0] || (s[0] = me(vi(s[0] / f) * f, l)), i[1] || (s[1] = me(Yo(s[1] / f) * f, l)), c != null && (u.niceExtent = s.slice()), t1(t, i, o, s, a, u);
}
function JN(t, e) {
  var r = ad(e.splitNumber, 5), n = Ol(t);
  process.env.NODE_ENV !== "production" && k(isFinite(n) && n > 0);
  var i = e.minInterval, a = e.maxInterval, o = cv(n / r, !0);
  i != null && o < i && (o = i), a != null && o > a && (o = a);
  var s = mi(o), u = t.getExtent(), l = [me(Yo(u[0] / o) * o, s), me(vi(u[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: l
  };
}
function eR(t, e) {
  var r = ad(e.splitNumber, 10), n = t.getExtent(), i = Ol(t);
  process.env.NODE_ENV !== "production" && k(isFinite(i) && i > 0);
  var a = ye(J0(i), 1), o = r / i * a;
  o <= 0.5 && (a *= 10);
  var s = mi(a), u = [me(Yo(n[0] / a) * a, s), me(vi(n[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: u
  };
}
function Ty(t) {
  var e = t.scale, r = t.model, n = r.axis, i = r.ecModel;
  process.env.NODE_ENV !== "production" && k(n && i), tR(e, r, n, i);
}
function tR(t, e, r, n, i) {
  var a = I1(t, e, n, r), o = Bu(t) || id(t);
  rR(t, {
    splitNumber: e.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: e.get("interval"),
    minInterval: o ? e.get("minInterval") : null,
    maxInterval: o ? e.get("maxInterval") : null,
    rawExtentResult: a
  }), r && n && PL(r, t, a, n), process.env.NODE_ENV !== "production" && t.freeze();
}
function rR(t, e) {
  nR[t.type](t, e);
}
var nR = {
  interval: wy,
  log: wy,
  time: qM,
  ordinal: it
}, xy = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], iR = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = lu, this._initCartesian(e, r, n), this.model = e;
    }
    return t.prototype.getRect = function() {
      return this._rect;
    }, t.prototype.update = function(e, r) {
      var n = this._axesMap;
      M(this._axesList, function(o) {
        EL(o, wL);
        var s = o.scale;
        cr(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function i(o) {
        for (var s = de(o), u = [], l = s.length - 1; l >= 0; l--) {
          var f = o[+s[l]];
          f.__alignTo ? u.push(f) : Ty(f);
        }
        M(u, function(c) {
          oR(c, c.__alignTo) ? Ty(c) : QN(c, c.__alignTo.scale);
        });
      }
      i(n.x), i(n.y);
      var a = {};
      M(n.x, function(o) {
        Cy(n, "y", o, a);
      }), M(n.y, function(o) {
        Cy(n, "x", o, a);
      }), this.resize(this.model, r);
    }, t.prototype.resize = function(e, r, n) {
      var i = Pl(e, r), a = this._rect = bn(e.getBoxLayoutParams(), i.refContainer), o = this._axesMap, s = this._coordsList, u = e.get("containLabel");
      if (Mb(o, a), !n) {
        var l = uR(a, s, o, u, r), f = void 0;
        if (u)
          process.env.NODE_ENV !== "production" && n_("Specified `grid.containLabel` but no `use(LegacyGridContainLabel)`;use `grid.outerBounds` instead.", !0), f = My(a.clone(), "axisLabel", null, a, o, l, i);
        else {
          var c = lR(e, a, i), h = c.outerBoundsRect, v = c.parsedOuterBoundsContain, d = c.outerBoundsClamp;
          h && (f = My(h, v, d, a, o, l, i));
        }
        Ib(a, o, or.determine, null, f, i), M(this._coordsList, function(p) {
          p.calcAffineTransform();
        });
      }
    }, t.prototype.getAxis = function(e, r) {
      var n = this._axesMap[e];
      if (n != null)
        return n[r || 0];
    }, t.prototype.getAxes = function() {
      return this._axesList.slice();
    }, t.prototype.getCartesian = function(e, r) {
      if (e != null && r != null) {
        var n = "x" + e + "y" + r;
        return this._coordsMap[n];
      }
      J(e) && (r = e.yAxisIndex, e = e.xAxisIndex);
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === e || a[i].getAxis("y").index === r)
          return a[i];
    }, t.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, t.prototype.convertToPixel = function(e, r, n) {
      var i = this._findConvertTarget(r);
      return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, t.prototype.convertFromPixel = function(e, r, n) {
      var i = this._findConvertTarget(r);
      return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, t.prototype._findConvertTarget = function(e) {
      var r = e.seriesModel, n = e.xAxisModel || r && r.getReferringComponents("xAxis", $t).models[0], i = e.yAxisModel || r && r.getReferringComponents("yAxis", $t).models[0], a = e.gridModel, o = this._coordsList, s, u;
      if (r)
        s = r.coordinateSystem, xe(o, s) < 0 && (s = null);
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
    }, t.prototype.containPoint = function(e) {
      var r = this._coordsList[0];
      if (r)
        return r.containPoint(e);
    }, t.prototype._initCartesian = function(e, r, n) {
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
      this._axesMap = s, M(s.x, function(f, c) {
        M(s.y, function(h, v) {
          var d = "x" + c + "y" + v, p = new jN(d);
          p.master = i, p.model = e, i._coordsMap[d] = p, i._coordsList.push(p), p.addAxis(f), p.addAxis(h);
        });
      }), Ey(s.x), Ey(s.y);
      function l(f) {
        return function(c, h) {
          if (aR(c, e)) {
            var v = c.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = KM(c), p = new g1(f, jM(c, d), [0, 0], d, v);
            p.onBand = r1(p.scale, c), p.inverse = c.get("inverse"), c.axis = p, p.model = c, p.grid = a, p.index = h, a._axesList.push(p), s[f][h] = p, u[f]++;
          }
        };
      }
    }, t.prototype.getTooltipAxes = function(e) {
      var r = [], n = [];
      return M(this.getCartesians(), function(i) {
        var a = e != null && e !== "auto" ? i.getAxis(e) : i.getBaseAxis(), o = i.getOtherAxis(a);
        xe(r, a) < 0 && r.push(a), xe(n, o) < 0 && n.push(o);
      }), {
        baseAxes: r,
        otherAxes: n
      };
    }, t.create = function(e, r) {
      var n = [];
      return e.eachComponent("grid", function(i, a) {
        var o = new t(i, e, r);
        o.name = "grid_" + a, o.resize(i, r, !0), i.coordinateSystem = o, n.push(o), M(o._axesList, function(s) {
          DL(s, t.dimIdxMap);
        });
      }), e.eachSeries(function(i) {
        var a, o;
        RE({
          targetModel: i,
          coordSysType: Hr,
          coordSysProvider: s
        });
        function s() {
          var u = yL(i), l = u.xAxisModel, f = u.yAxisModel;
          a = l.axis, o = f.axis;
          var c = l.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!c)
              throw new Error('Grid "' + zr(l.get("gridIndex"), l.get("gridId"), 0) + '" not found');
            if (l.getCoordSysModel() !== f.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var h = c.coordinateSystem;
          return h.getCartesian(l.componentIndex, f.componentIndex);
        }
        a && o && (Jg(a, i, Hr), Jg(o, i, Hr));
      }, this), n;
    }, t.dimensions = lu, t.dimIdxMap = kv(lu), t;
  }()
);
function aR(t, e) {
  return t.getCoordSysModel() === e;
}
function Cy(t, e, r, n) {
  r.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = t[e], a, o = r.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    Dy(s, i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (_t(i, l) && Dy(s, i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(c) {
    return c.dim + "_" + c.index;
  }
}
function Dy(t, e) {
  if (!e)
    return !1;
  var r = e.scale, n = QM(r, 0), i = e && e.type !== "category" && e.type !== "time" && n !== _h;
  return i && t === "auto" && rI(e) && (i = !1), i;
}
function Ey(t) {
  for (var e = de(t), r, n = [], i = e.length - 1; i >= 0; i--) {
    var a = t[+e[i]];
    ZS(a.scale) && aI(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? n.push(a) : r = a);
  }
  r || (r = n.pop()), r && M(n, function(o) {
    o.__alignTo = r;
  });
}
function oR(t, e) {
  return pi(t.scale) || pi(e.scale) || e.scale.getTicks().length < 2;
}
function sR(t, e) {
  var r = t.getExtent(), n = r[0] + r[1];
  t.toGlobalCoord = t.dim === "x" ? function(i) {
    return i + e;
  } : function(i) {
    return n - i + e;
  }, t.toLocalCoord = t.dim === "x" ? function(i) {
    return i - e;
  } : function(i) {
    return n - i + e;
  };
}
function Mb(t, e) {
  M(t.x, function(r) {
    return Ay(r, e.x, e.width);
  }), M(t.y, function(r) {
    return Ay(r, e.y, e.height);
  });
}
function Ay(t, e, r) {
  var n = [0, r], i = t.inverse ? 1 : 0;
  t.setExtent(n[i], n[1 - i]), sR(t, e);
}
function My(t, e, r, n, i, a, o) {
  process.env.NODE_ENV !== "production" && k(e === "all" || e === "axisLabel"), Ib(n, i, or.estimate, e, !1, o);
  var s = [0, 0, 0, 0];
  l(0), l(1), f(n, 0, NaN), f(n, 1, NaN);
  var u = Xw(s, function(h) {
    return h > 0;
  }) == null;
  return Lu(n, s, !0, !0, r), Mb(i, n), u;
  function l(h) {
    M(i[on[h]], function(v) {
      if (Oo(v.model)) {
        var d = a.ensureRecord(v.model), p = d.labelInfoList;
        if (p)
          for (var g = 0; g < p.length; g++) {
            var m = p[g], y = v.scale.normalize(Qo(v.scale, ya(m.label).labelInfo.tick));
            y = h === 1 ? 1 - y : y, f(m.rect, h, y), f(m.rect, 1 - h, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = ma(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, h, y), f(_.rect, 1 - h, NaN);
        }
      }
    });
  }
  function f(h, v, d) {
    var p = t[on[v]] - h[on[v]], g = h[ha[v]] + h[on[v]] - (t[ha[v]] + t[on[v]]);
    p = c(p, 1 - d), g = c(g, d);
    var m = xy[v][0], y = xy[v][1];
    s[m] = ye(s[m], p), s[y] = ye(s[y], g);
  }
  function c(h, v) {
    return h > 0 && !aa(v) && v > 1e-4 && (h /= v), h;
  }
}
function uR(t, e, r, n, i) {
  var a = new b1(fR);
  return M(r, function(o) {
    return M(o, function(s) {
      if (Oo(s.model)) {
        var u = !n;
        s.axisBuilder = _L(t, e, s.model, i, a, u);
      }
    });
  }), a;
}
function Ib(t, e, r, n, i, a) {
  var o = r === or.determine;
  M(e, function(l) {
    return M(l, function(f) {
      Oo(f.model) && (SL(f.axisBuilder, t, f.model), f.axisBuilder.build(o ? {
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
    s[on[1 - l]] = t[ha[l]] <= a.refContainer[ha[l]] * 0.5 ? 0 : 1 - l === 1 ? 2 : 1;
  }
  M(e, function(l, f) {
    return M(l, function(c) {
      Oo(c.model) && ((n === "all" || o) && c.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && c.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function lR(t, e, r) {
  var n, i = t.get("outerBoundsMode", !0);
  i === "same" ? n = e.clone() : i == null || i === "auto" ? n = bn(t.get("outerBounds", !0) || L1, r.refContainer) : i !== "none" && process.env.NODE_ENV !== "production" && _e("Invalid grid[" + t.componentIndex + "].outerBoundsMode.");
  var a = t.get("outerBoundsContain", !0), o;
  a == null || a === "auto" ? o = "all" : xe(["all", "axisLabel"], a) < 0 ? (process.env.NODE_ENV !== "production" && _e("Invalid grid[" + t.componentIndex + "].outerBoundsContain."), o = "all") : o = a;
  var s = [Zc(K(t.get("outerBoundsClampWidth", !0), Zu[0]), e.width), Zc(K(t.get("outerBoundsClampHeight", !0), Zu[1]), e.height)];
  return {
    outerBoundsRect: n,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var fR = function(t, e, r, n, i, a) {
  var o = r.axis.dim === "x" ? "y" : "x";
  w1(t, e, r, n, i, a), ma(t.nameLocation) || M(e.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && x1(s.labelInfoList, s.dirVec, n, i);
  });
};
function cR(t, e) {
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
  return hR(r, t, e), r.seriesInvolved && dR(r, t), r;
}
function hR(t, e, r) {
  var n = e.getComponent("tooltip"), i = e.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  M(r.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = ko(s.model), l = t.coordSysAxesInfo[u] = {};
    t.coordSysMap[u] = s;
    var f = s.model, c = f.getModel("tooltip", n);
    if (M(s.getAxes(), Xe(p, !1, null)), s.getTooltipAxes && n && c.get("show")) {
      var h = c.get("trigger") === "axis", v = c.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(c.get(["axisPointer", "axis"]));
      (h || v) && M(d.baseAxes, Xe(p, v ? "cross" : !0, h)), v && M(d.otherAxes, Xe(p, "cross", !1));
    }
    function p(g, m, y) {
      var _ = y.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !g && !Fh(_))) {
        m == null && (m = _.get("triggerTooltip")), _ = g ? vR(y, c, i, e, g, m) : _;
        var b = _.get("snap"), w = _.get("triggerEmphasis"), T = ko(y.model), x = m || b || y.type === "category", D = t.axesInfo[T] = {
          key: T,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: m,
          triggerEmphasis: w,
          involveSeries: x,
          snap: b,
          useHandle: Fh(_),
          seriesModels: [],
          linkGroup: null
        };
        l[T] = D, t.seriesInvolved = t.seriesInvolved || x;
        var C = pR(a, y);
        if (C != null) {
          var E = o[C] || (o[C] = {
            axesInfo: {}
          });
          E.axesInfo[T] = D, E.mapper = a[C].mapper, D.linkGroup = E;
        }
      }
    }
  });
}
function vR(t, e, r, n, i, a) {
  var o = e.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  M(s, function(h) {
    u[h] = ce(o.get(h));
  }), u.snap = t.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var c = u.lineStyle = o.get("crossStyle");
      c && Ae(l, c.textStyle);
    }
  }
  return t.model.getModel("axisPointer", new Be(u, r, n));
}
function dR(t, e) {
  e.eachSeries(function(r) {
    var n = r.coordinateSystem, i = r.get(["tooltip", "trigger"], !0), a = r.get(["tooltip", "show"], !0);
    !n || !n.model || i === "none" || i === !1 || i === "item" || a === !1 || r.get(["axisPointer", "show"], !0) === !1 || M(t.coordSysAxesInfo[ko(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(r), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += r.getData().count());
    });
  });
}
function pR(t, e) {
  for (var r = e.model, n = e.dim, i = 0; i < t.length; i++) {
    var a = t[i] || {};
    if (uc(a[n + "AxisId"], r.id) || uc(a[n + "AxisIndex"], r.componentIndex) || uc(a[n + "AxisName"], r.name))
      return i;
  }
}
function uc(t, e) {
  return t === "all" || $(t) && xe(t, e) >= 0 || t === e;
}
function gR(t) {
  var e = Td(t);
  if (e) {
    var r = e.axisPointerModel, n = e.axis.scale, i = r.option, a = r.get("status"), o = r.get("value");
    o != null && (o = n.parse(o));
    var s = Fh(r);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), i.value = o, s && (i.status = e.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Td(t) {
  var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return e && e.axesInfo[ko(t)];
}
function mR(t) {
  var e = Td(t);
  return e && e.axisPointerModel;
}
function Fh(t) {
  return !!t.get(["handle", "show"]);
}
function ko(t) {
  return t.type + "||" + t.id;
}
var lc = {}, Lb = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this.axisPointerClass && gR(r), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(r, i, !0);
    }, e.prototype.updateAxisPointer = function(r, n, i, a) {
      this._doUpdateAxisPointerClass(r, i, !1);
    }, e.prototype.remove = function(r, n) {
      var i = this._axisPointer;
      i && i.remove(n);
    }, e.prototype.dispose = function(r, n) {
      this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments);
    }, e.prototype._doUpdateAxisPointerClass = function(r, n, i) {
      var a = e.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = mR(r);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(r, o, n, i) : this._disposeAxisPointer(n);
      }
    }, e.prototype._disposeAxisPointer = function(r) {
      this._axisPointer && this._axisPointer.dispose(r), this._axisPointer = null;
    }, e.registerAxisPointerClass = function(r, n) {
      if (process.env.NODE_ENV !== "production" && lc[r])
        throw new Error("axisPointer " + r + " exists");
      lc[r] = n;
    }, e.getAxisPointerClass = function(r) {
      return r && lc[r];
    }, e.type = "axis", e;
  }(sr)
), zh = Me();
function yR(t, e, r, n) {
  var i = r.axis;
  if (!i.scale.isBlank()) {
    var a = r.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = n.coordinateSystem.getRect(), l = i.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (l.length) {
      var f = s.length, c = zh(t).splitAreaColors, h = re(), v = 0;
      if (c)
        for (var d = 0; d < l.length; d++) {
          var p = c.get(l[d].tickValue);
          if (p != null) {
            v = (p + (f - 1) * d) % f;
            break;
          }
        }
      var g = i.toGlobalCoord(l[0].coord), m = o.getAreaStyle();
      s = $(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var y = i.toGlobalCoord(l[d].coord), _ = void 0, S = void 0, b = void 0, w = void 0;
        i.isHorizontal() ? (_ = g, S = u.y, b = y - _, w = u.height, g = _ + b) : (_ = u.x, S = g, b = u.width, w = y - S, g = S + w);
        var T = l[d - 1].tickValue;
        T != null && h.set(T, v), e.add(new ze({
          anid: T != null ? "area_" + T : null,
          shape: {
            x: _,
            y: S,
            width: b,
            height: w
          },
          style: Ae({
            fill: s[v]
          }, m),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      zh(t).splitAreaColors = h;
    }
  }
}
function _R(t) {
  zh(t).splitAreaColors = null;
}
var SR = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], Pb = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.axisPointerClass = "CartesianAxisPointer", r;
    }
    return e.prototype.render = function(r, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new Qe(), this.group.add(this._axisGroup), !!Oo(r)) {
        this._axisGroup.add(r.axis.axisBuilder.group), M(SR, function(u) {
          r.get([u, "show"]) && bR[u](this, this._axisGroup, r, r.getCoordSysModel(), i);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || F_(o, this._axisGroup, r), t.prototype.render.call(this, r, n, i, a);
      }
    }, e.prototype.remove = function() {
      _R(this);
    }, e.type = "cartesianAxis", e;
  }(Lb)
), bR = {
  splitLine: function(t, e, r, n, i) {
    var a = r.axis;
    if (!a.scale.isBlank()) {
      var o = r.getModel("splitLine"), s = o.getModel("lineStyle"), u = s.get("color"), l = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      u = $(u) ? u : [u];
      for (var c = n.coordinateSystem.getRect(), h = a.isHorizontal(), v = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), p = [], g = [], m = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !l || y === d.length - 1 && !f)) {
          var S = d[y].tickValue;
          h ? (p[0] = _, p[1] = c.y, g[0] = _, g[1] = c.y + c.height) : (p[0] = c.x, p[1] = _, g[0] = c.x + c.width, g[1] = _);
          var b = v++ % u.length, w = new _n({
            anid: S != null ? "line_" + S : null,
            autoBatch: !0,
            shape: {
              x1: p[0],
              y1: p[1],
              x2: g[0],
              y2: g[1]
            },
            style: Ae({
              stroke: u[b]
            }, m),
            silent: !0
          });
          Eo(w.shape, m.lineWidth), e.add(w);
        }
      }
    }
  },
  minorSplitLine: function(t, e, r, n, i) {
    var a = r.axis, o = r.getModel("minorSplitLine"), s = o.getModel("lineStyle"), u = n.coordinateSystem.getRect(), l = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var c = [], h = [], v = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var p = 0; p < f[d].length; p++) {
          var g = a.toGlobalCoord(f[d][p].coord);
          l ? (c[0] = g, c[1] = u.y, h[0] = g, h[1] = u.y + u.height) : (c[0] = u.x, c[1] = g, h[0] = u.x + u.width, h[1] = g);
          var m = new _n({
            anid: "minor_line_" + f[d][p].tickValue,
            autoBatch: !0,
            shape: {
              x1: c[0],
              y1: c[1],
              x2: h[0],
              y2: h[1]
            },
            style: v,
            silent: !0
          });
          Eo(m.shape, v.lineWidth), e.add(m);
        }
  },
  splitArea: function(t, e, r, n, i) {
    yR(t, e, r, n);
  },
  breakArea: function(t, e, r, n, i) {
    r.axis.scale;
  }
}, Ob = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "xAxis", e;
  }(Pb)
), wR = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Ob.type, r;
    }
    return e.type = "yAxis", e;
  }(Pb)
), TR = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = "grid", r;
    }
    return e.prototype.render = function(r, n) {
      this.group.removeAll(), r.get("show") && this.group.add(new ze({
        shape: r.coordinateSystem.getRect(),
        style: Ae({
          fill: r.get("backgroundColor")
        }, r.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, e.type = "grid", e;
  }(sr)
), Iy = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function xR(t) {
  t.registerComponentView(TR), t.registerComponentModel(FL), t.registerCoordinateSystem("cartesian2d", iR), _y(t, "x", Vh, Iy), _y(t, "y", Vh, Iy), t.registerComponentView(Ob), t.registerComponentView(wR), t.registerPreprocessor(function(e) {
    e.xAxis && e.yAxis && !e.grid && (e.grid = {});
  });
}
var ti = Me(), Ly = ce, fc = Pe, CR = (
  /** @class */
  function() {
    function t() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return t.prototype.render = function(e, r, n, i) {
      var a = r.get("value"), o = r.get("status");
      if (this._axisModel = e, this._axisPointerModel = r, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, u = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), u && u.hide();
          return;
        }
        s && s.show(), u && u.show();
        var l = {};
        this.makeElOption(l, a, e, r, n);
        var f = l.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var c = this._moveAnimation = this.determineAnimation(e, r);
        if (!s)
          s = this._group = new Qe(), this.createPointerEl(s, l, e, r), this.createLabelEl(s, l, e, r), n.getZr().add(s);
        else {
          var h = Xe(Py, r, c);
          this.updatePointerEl(s, l, h), this.updateLabelEl(s, l, h, r);
        }
        Ny(s, r, !0), this._renderHandle(a);
      }
    }, t.prototype.remove = function(e) {
      this.clear(e);
    }, t.prototype.dispose = function(e) {
      this.clear(e);
    }, t.prototype.determineAnimation = function(e, r) {
      var n = r.get("animation"), i = e.axis, a = i.type === "category", o = r.get("snap");
      if (!o && !a)
        return !1;
      if (n === "auto" || n == null) {
        var s = this.animationThreshold;
        if (a && Ca(i).w > s)
          return !0;
        if (o) {
          var u = Td(e).seriesDataCount, l = i.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return n === !0;
    }, t.prototype.makeElOption = function(e, r, n, i, a) {
    }, t.prototype.createPointerEl = function(e, r, n, i) {
      var a = r.pointer;
      if (a) {
        var o = ti(e).pointerEl = new WD[a.type](Ly(r.pointer));
        e.add(o);
      }
    }, t.prototype.createLabelEl = function(e, r, n, i) {
      if (r.label) {
        var a = ti(e).labelEl = new at(Ly(r.label));
        e.add(a), Oy(a, i);
      }
    }, t.prototype.updatePointerEl = function(e, r, n) {
      var i = ti(e).pointerEl;
      i && r.pointer && (i.setStyle(r.pointer.style), n(i, {
        shape: r.pointer.shape
      }));
    }, t.prototype.updateLabelEl = function(e, r, n, i) {
      var a = ti(e).labelEl;
      a && (a.setStyle(r.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: r.label.x,
        y: r.label.y
      }), Oy(a, i));
    }, t.prototype._renderHandle = function(e) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var r = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = r.getModel("handle"), o = r.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = Lv(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            H1(l.event);
          },
          onmousedown: fc(this._onHandleDragMove, this, 0, 0),
          drift: fc(this._onHandleDragMove, this),
          ondragend: fc(this._onHandleDragEnd, this)
        }), n.add(i)), Ny(i, r, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        $(u) || (u = [u, u]), i.scaleX = u[0] / 2, i.scaleY = u[1] / 2, N1(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(e, s);
      }
    }, t.prototype._moveHandleToValue = function(e, r) {
      Py(this._axisPointerModel, !r && this._moveAnimation, this._handle, cc(this.getHandleTransform(e, this._axisModel, this._axisPointerModel)));
    }, t.prototype._onHandleDragMove = function(e, r) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(cc(n), [e, r], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(cc(i)), ti(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, t.prototype._doDispatchAxisPointer = function() {
      var e = this._handle;
      if (e) {
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
    }, t.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var e = this._handle;
      if (e) {
        var r = this._axisPointerModel.get("value");
        this._moveHandleToValue(r), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, t.prototype.clear = function(e) {
      this._lastValue = null, this._lastStatus = null;
      var r = e.getZr(), n = this._group, i = this._handle;
      r && n && (this._lastGraphicKey = null, n && r.remove(n), i && r.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), Ch(this, "_doDispatchAxisPointer");
    }, t.prototype.doClear = function() {
    }, t.prototype.buildLabel = function(e, r, n) {
      return n = n || 0, {
        x: e[n],
        y: e[1 - n],
        width: r[n],
        height: r[1 - n]
      };
    }, t;
  }()
);
function Py(t, e, r, n) {
  Nb(ti(r).lastProp, n) || (ti(r).lastProp = n, e ? wt(r, n, t) : (r.stopAnimation(), r.attr(n)));
}
function Nb(t, e) {
  if (J(t) && J(e)) {
    var r = !0;
    return M(e, function(n, i) {
      r = r && Nb(t[i], n);
    }), !!r;
  } else
    return t === e;
}
function Oy(t, e) {
  t[e.get(["label", "show"]) ? "show" : "hide"]();
}
function cc(t) {
  return {
    x: t.x || 0,
    y: t.y || 0,
    rotation: t.rotation || 0
  };
}
function Ny(t, e, r) {
  var n = e.get("z"), i = e.get("zlevel");
  t && t.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = r);
  });
}
function DR(t) {
  var e = t.get("type"), r = t.getModel(e + "Style"), n;
  return e === "line" ? (n = r.getLineStyle(), n.fill = null) : e === "shadow" && (n = r.getAreaStyle(), n.stroke = null), n;
}
function ER(t, e, r, n, i) {
  var a = r.get("value"), o = Rb(a, e.axis, e.ecModel, r.get("seriesDataIndices"), {
    precision: r.get(["label", "precision"]),
    formatter: r.get(["label", "formatter"])
  }), s = r.getModel("label"), u = Ll(s.get("padding") || 0), l = s.getFont(), f = D0(o, l), c = i.position, h = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = i.align;
  d === "right" && (c[0] -= h), d === "center" && (c[0] -= h / 2);
  var p = i.verticalAlign;
  p === "bottom" && (c[1] -= v), p === "middle" && (c[1] -= v / 2), AR(c, h, v, n);
  var g = s.get("backgroundColor");
  (!g || g === "auto") && (g = e.get(["axisLine", "lineStyle", "color"])), t.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: c[0],
    y: c[1],
    style: Sn(s, {
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
function AR(t, e, r, n) {
  var i = n.getWidth(), a = n.getHeight();
  t[0] = Math.min(t[0] + e, i) - e, t[1] = Math.min(t[1] + r, a) - r, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
}
function Rb(t, e, r, n, i) {
  t = e.scale.parse(t);
  var a = e.scale.getLabel({
    value: t
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: i.precision
  }), o = i.formatter;
  if (o) {
    var s = {
      value: Fu(e, {
        value: t
      }),
      axisDimension: e.dim,
      axisIndex: e.index,
      seriesData: []
    };
    M(n, function(u) {
      var l = r.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, c = l && l.getDataParams(f);
      c && s.seriesData.push(c);
    }), j(o) ? a = o.replace("{value}", a) : ie(o) && (a = o(s));
  }
  return a;
}
function kb(t, e, r) {
  var n = wr();
  return iv(n, n, r.rotation), Dc(n, n, r.position), Iv([t.dataToCoord(e), (r.labelOffset || 0) + (r.labelDirection || 1) * (r.labelMargin || 0)], n);
}
function MR(t, e, r, n, i, a) {
  var o = pn.innerTextLayout(r.rotation, 0, r.labelDirection);
  r.labelMargin = i.get(["label", "margin"]), ER(e, n, i, a, {
    position: kb(n.axis, t, r),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function IR(t, e, r) {
  return r = r || 0, {
    x1: t[r],
    y1: t[1 - r],
    x2: e[r],
    y2: e[1 - r]
  };
}
function LR(t, e, r) {
  return r = r || 0, {
    x: t[r],
    y: t[1 - r],
    width: e[r],
    height: e[1 - r]
  };
}
function PR(t, e, r) {
  return Ca(t, {
    fromStat: {
      sers: Q(e, function(n) {
        return r.getSeriesByIndex(n.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function OR(t, e, r) {
  return [ye(ht(e[0], e[1]), t - r / 2), ht(t + r / 2, ye(e[0], e[1]))];
}
var NR = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.makeElOption = function(r, n, i, a, o) {
      var s = i.axis, u = s.grid, l = a.get("type"), f = s.getGlobalExtent(), c = Ry(u, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var v = DR(a), d = RR[l](s, h, f, c, a.get("seriesDataIndices"), a.ecModel);
        d.style = v, r.graphicKey = d.type, r.pointer = d;
      }
      var p = Xu(u.getRect(), i);
      MR(n, r, p, i, a, o);
    }, e.prototype.getHandleTransform = function(r, n, i) {
      var a = Xu(n.axis.grid.getRect(), n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = kb(n.axis, r, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, e.prototype.updateHandleTransform = function(r, n, i, a) {
      var o = i.axis, s = o.grid, u = o.getGlobalExtent(!0), l = Ry(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, c = [r.x, r.y];
      c[f] += n[f], c[f] = ht(u[1], c[f]), c[f] = ye(u[0], c[f]);
      var h = (l[1] + l[0]) / 2, v = [h, h];
      v[f] = c[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: c[0],
        y: c[1],
        rotation: r.rotation,
        cursorPoint: v,
        tooltipOption: d[f]
      };
    }, e;
  }(CR)
);
function Ry(t, e) {
  var r = {};
  return r[e.dim + "AxisIndex"] = e.index, t.getCartesian(r);
}
var RR = {
  line: function(t, e, r, n) {
    var i = IR([e, n[0]], [e, n[1]], ky(t));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(t, e, r, n, i, a) {
    var o = PR(t, i, a), s = n[1] - n[0], u = OR(e, r, o), l = u[0], f = u[1];
    return {
      type: "Rect",
      shape: LR([l, n[0]], [f - l, s], ky(t))
    };
  }
};
function ky(t) {
  return t.dim === "x" ? 0 : 1;
}
var kR = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "axisPointer", e.defaultOption = {
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
        color: ee.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: ee.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: ee.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: ee.color.accent60,
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
        color: ee.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, e;
  }(be)
), Vr = Me(), BR = M;
function Bb(t, e, r) {
  if (!le.node) {
    var n = e.getZr();
    Vr(n).records || (Vr(n).records = {}), VR(n, e);
    var i = Vr(n).records[t] || (Vr(n).records[t] = {});
    i.handler = r;
  }
}
function VR(t, e) {
  if (Vr(t).initialized)
    return;
  Vr(t).initialized = !0, r("click", Xe(hc, "click")), r("mousemove", Xe(hc, "mousemove")), r("mousewheel", Xe(hc, "mousewheel")), r("globalout", zR);
  function r(n, i) {
    t.on(n, function(a) {
      var o = GR(e);
      BR(Vr(t).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), FR(o.pendings, e);
    });
  }
}
function FR(t, e) {
  var r = t.showTip.length, n = t.hideTip.length, i;
  r ? i = t.showTip[r - 1] : n && (i = t.hideTip[n - 1]), i && (i.dispatchAction = null, e.dispatchAction(i));
}
function zR(t, e, r) {
  t.handler("leave", null, r);
}
function hc(t, e, r, n) {
  e.handler(t, r, n);
}
function GR(t) {
  var e = {
    showTip: [],
    hideTip: []
  }, r = function(n) {
    var i = e[n.type];
    i ? i.push(n) : (n.dispatchAction = r, t.dispatchAction(n));
  };
  return {
    dispatchAction: r,
    pendings: e
  };
}
function Gh(t, e) {
  if (!le.node) {
    var r = e.getZr(), n = (Vr(r).records || {})[t];
    n && (Vr(r).records[t] = null);
  }
}
var HR = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i) {
      var a = n.getComponent("tooltip"), o = r.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      Bb("axisPointer", i, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, e.prototype.remove = function(r, n) {
      Gh("axisPointer", n);
    }, e.prototype.dispose = function(r, n) {
      Gh("axisPointer", n);
    }, e.type = "axisPointer", e;
  }(sr)
);
function Vb(t, e) {
  var r = [], n = t.seriesIndex, i;
  if (n == null || !(i = e.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = di(a, t);
  if (o == null || o < 0 || $(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = i.coordinateSystem;
  if (i.getTooltipPosition)
    r = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (t.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), c = f.dim, h = l.dim, v = c === "x" || c === "radius" ? 1 : 0, d = a.mapDimension(h), p = [];
      p[v] = a.get(d, o), p[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), r = u.dataToPoint(p) || [];
    } else
      r = u.dataToPoint(a.getValues(Q(u.dimensions, function(m) {
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
var By = Me();
function UR(t, e, r) {
  var n = t.currTrigger, i = [t.x, t.y], a = t, o = t.dispatchAction || Pe(r.dispatchAction, r), s = e.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    fu(i) && (i = Vb({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, e).point);
    var u = fu(i), l = a.axesInfo, f = s.axesInfo, c = n === "leave" || fu(i), h = {}, v = {}, d = {
      list: [],
      map: {}
    }, p = {
      showPointer: Xe(YR, v),
      showTooltip: Xe(XR, d)
    };
    M(s.coordSysMap, function(m, y) {
      var _ = u || m.containPoint(i);
      M(s.coordSysAxesInfo[y], function(S, b) {
        var w = S.axis, T = KR(l, S);
        if (!c && _ && (!l || T)) {
          var x = T && T.value;
          x == null && !u && (x = w.pointToData(i)), x != null && Vy(S, x, p, !1, h);
        }
      });
    });
    var g = {};
    return M(f, function(m, y) {
      var _ = m.linkGroup;
      _ && !v[y] && M(_.axesInfo, function(S, b) {
        var w = v[b];
        if (S !== m && w) {
          var T = w.value;
          _.mapper && (T = m.axis.scale.parse(_.mapper(T, Fy(S), Fy(m)))), g[m.key] = T;
        }
      });
    }), M(g, function(m, y) {
      Vy(f[y], m, p, !0, h);
    }), $R(v, f, h), ZR(d, i, t, o), qR(f, o, r), h;
  }
}
function Vy(t, e, r, n, i) {
  var a = t.axis;
  if (!(a.scale.isBlank() || !a.containData(e))) {
    if (!t.involveSeries) {
      r.showPointer(t, e);
      return;
    }
    var o = WR(e, t), s = o.payloadBatch, u = o.snapToValue;
    s[0] && i.seriesIndex == null && z(i, s[0]), !n && t.snap && a.containData(u) && u != null && (e = u), r.showPointer(t, e, s), r.showTooltip(t, o, u);
  }
}
function WR(t, e) {
  var r = e.axis, n = r.dim, i = t, a = [], o = Number.MAX_VALUE, s = -1;
  return M(e.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(n), c, h;
    if (u.getAxisTooltipData) {
      var v = u.getAxisTooltipData(f, t, r);
      h = v.dataIndices, c = v.nestestValue;
    } else {
      if (h = u.indicesOfNearest(
        n,
        f[0],
        t,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        r.type === "category" ? 0.5 : null
      ), !h.length)
        return;
      c = u.getData().get(f[0], h[0]);
    }
    if (Ot(c)) {
      var d = t - c, p = Math.abs(d);
      p <= o && ((p < o || d >= 0 && s < 0) && (o = p, s = d, i = c, a.length = 0), M(h, function(g) {
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
function YR(t, e, r, n) {
  t[e.key] = {
    value: r,
    payloadBatch: n
  };
}
function XR(t, e, r, n) {
  var i = r.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
  if (!(!e.triggerTooltip || !i.length)) {
    var u = e.coordSys.model, l = ko(u), f = t.map[l];
    f || (f = t.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, t.list.push(f)), f.dataByAxis.push({
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
function $R(t, e, r) {
  var n = r.axesInfo = [];
  M(e, function(i, a) {
    var o = i.axisPointerModel.option, s = t[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function ZR(t, e, r, n) {
  if (fu(e) || !t.list.length) {
    n({
      type: "hideTip"
    });
    return;
  }
  var i = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: e[0],
    y: e[1],
    tooltipOption: r.tooltipOption,
    position: r.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: t.list
  });
}
function qR(t, e, r) {
  var n = r.getZr(), i = "axisPointerLastHighlights", a = By(n)[i] || {}, o = By(n)[i] = {};
  M(t, function(f, c) {
    var h = f.axisPointerModel.option;
    h.status === "show" && f.triggerEmphasis && M(h.seriesDataIndices, function(v) {
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
  M(a, function(f, c) {
    !o[c] && u.push(l(f));
  }), M(o, function(f, c) {
    !a[c] && s.push(l(f));
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
function KR(t, e) {
  for (var r = 0; r < (t || []).length; r++) {
    var n = t[r];
    if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function Fy(t) {
  var e = t.axis.model, r = {}, n = r.axisDim = t.axis.dim;
  return r.axisIndex = r[n + "AxisIndex"] = e.componentIndex, r.axisName = r[n + "AxisName"] = e.name, r.axisId = r[n + "AxisId"] = e.id, r;
}
function fu(t) {
  return !t || t[0] == null || isNaN(t[0]) || t[1] == null || isNaN(t[1]);
}
function Fb(t) {
  Lb.registerAxisPointerClass("CartesianAxisPointer", NR), t.registerComponentModel(kR), t.registerComponentView(HR), t.registerPreprocessor(function(e) {
    if (e) {
      (!e.axisPointer || e.axisPointer.length === 0) && (e.axisPointer = {});
      var r = e.axisPointer.link;
      r && !$(r) && (e.axisPointer.link = [r]);
    }
  }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(e, r) {
      e.getComponent("axisPointer").coordSysAxesInfo = cR(e, r);
    }
  }), t.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, UR);
}
function jR(t) {
  xn(xR), xn(Fb);
}
function QR(t, e) {
  var r = Ll(e.get("padding")), n = e.getItemStyle(["color", "opacity"]);
  n.fill = e.get("backgroundColor");
  var i = new ze({
    shape: {
      x: t.x - r[3],
      y: t.y - r[0],
      width: t.width + r[1] + r[3],
      height: t.height + r[0] + r[2],
      r: e.get("borderRadius")
    },
    style: n,
    silent: !0,
    z2: -1
  });
  return i;
}
var JR = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.type = "tooltip", e.dependencies = ["axisPointer"], e.defaultOption = {
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
      backgroundColor: ee.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: ee.color.border,
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
          color: ee.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: ee.color.tertiary,
        fontSize: 14
      }
    }, e;
  }(be)
);
function zb(t) {
  var e = t.get("confine");
  return e != null ? !!e : t.get("renderMode") === "richText";
}
function Gb(t) {
  if (le.domSupported) {
    for (var e = document.documentElement.style, r = 0, n = t.length; r < n; r++)
      if (t[r] in e)
        return t[r];
  }
}
var Hb = Gb(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), e2 = Gb(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function Ub(t, e) {
  if (!t)
    return e;
  e = ES(e, !0);
  var r = t.indexOf(e);
  return t = r === -1 ? e : "-" + t.slice(0, r) + "-" + e, t.toLowerCase();
}
function t2(t, e) {
  var r = t.currentStyle || document.defaultView && document.defaultView.getComputedStyle(t);
  return r ? r[e] : null;
}
var r2 = Ub(e2, "transition"), xd = Ub(Hb, "transform"), n2 = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (le.transform3dSupported ? "will-change:transform;" : "");
function i2(t) {
  return t = t === "left" ? "right" : t === "right" ? "left" : t === "top" ? "bottom" : "top", t;
}
function a2(t, e, r) {
  if (!j(r) || r === "inside")
    return "";
  var n = t.get("backgroundColor"), i = t.get("borderWidth");
  e = gi(e);
  var a = i2(r), o = Math.max(Math.round(i) * 1.5, 6), s = "", u = xd + ":", l;
  xe(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, c = o + i, h = c * Math.abs(Math.cos(f)) + c * Math.abs(Math.sin(f)), v = Math.round(((h - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (h - c) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = e + " solid " + i + "px;", p = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + p.join("") + '"></div>';
}
function o2(t, e, r) {
  var n = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
  return r && (i = " " + t / 2 + "s " + n, a = "opacity" + i + ",visibility" + i), e || (i = " " + t + "s " + n, a += (a.length ? "," : "") + (le.transformSupported ? "" + xd + i : ",left" + i + ",top" + i)), r2 + ":" + a;
}
function zy(t, e, r) {
  var n = t.toFixed(0) + "px", i = e.toFixed(0) + "px";
  if (!le.transformSupported)
    return r ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = le.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return r ? "top:0;left:0;" + xd + ":" + o + ";" : [["top", 0], ["left", 0], [Hb, o]];
}
function s2(t) {
  var e = [], r = t.get("fontSize"), n = t.getTextColor();
  n && e.push("color:" + n), e.push("font:" + t.getFont());
  var i = K(t.get("lineHeight"), Math.round(r * 3 / 2));
  r && e.push("line-height:" + i + "px");
  var a = t.get("textShadowColor"), o = t.get("textShadowBlur") || 0, s = t.get("textShadowOffsetX") || 0, u = t.get("textShadowOffsetY") || 0;
  return a && o && e.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), M(["decoration", "align"], function(l) {
    var f = t.get(l);
    f && e.push("text-" + l + ":" + f);
  }), e.join(";");
}
function u2(t, e, r, n) {
  var i = [], a = t.get("transitionDuration"), o = t.get("backgroundColor"), s = t.get("shadowBlur"), u = t.get("shadowColor"), l = t.get("shadowOffsetX"), f = t.get("shadowOffsetY"), c = t.getModel("textStyle"), h = RS(t, "html"), v = l + "px " + f + "px " + s + "px " + u;
  return i.push("box-shadow:" + v), e && a > 0 && i.push(o2(a, r, n)), o && i.push("background-color:" + o), M(["width", "color", "radius"], function(d) {
    var p = "border-" + d, g = ES(p), m = t.get(g);
    m != null && i.push(p + ":" + m + (d === "color" ? "" : "px"));
  }), i.push(s2(c)), h != null && i.push("padding:" + Ll(h).join("px ") + "px"), i.join(";") + ";";
}
function Gy(t, e, r, n, i) {
  var a = e && e.painter;
  if (r) {
    var o = a && a.getViewportRoot();
    o && KE(t, o, r, n, i);
  } else {
    t[0] = n, t[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (t[0] += s.offsetLeft, t[1] += s.offsetTop);
  }
  t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
}
var l2 = (
  /** @class */
  function() {
    function t(e, r) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, le.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = e.getZr(), a = r.appendTo, o = a && (j(a) ? document.querySelector(a) : ia(a) ? a : ie(a) && a(e.getDom()));
      Gy(this._styleCoord, i, o, e.getWidth() / 2, e.getHeight() / 2), (o || e.getDom()).appendChild(n), this._api = e, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = i.handler, f = i.painter.getViewportRoot();
          zt(f, u, !0), l.dispatch("mousemove", u);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return t.prototype.update = function(e) {
      if (!this._container) {
        var r = this._api.getDom(), n = t2(r, "position"), i = r.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = e.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = e.get("displayTransition") && e.get("transitionDuration") > 0, this.el.className = e.get("className") || "";
    }, t.prototype.show = function(e, r) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = n2 + u2(e, !this._firstShow, this._longHide, this._enableDisplayTransition) + zy(a[0], a[1], !0) + ("border-color:" + gi(r) + ";") + (e.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, t.prototype.setContent = function(e, r, n, i, a) {
      var o = this.el;
      if (e == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (j(a) && n.get("trigger") === "item" && !zb(n) && (s = a2(n, i, a)), j(e))
        o.innerHTML = e + s;
      else if (e) {
        o.innerHTML = "", $(e) || (e = [e]);
        for (var u = 0; u < e.length; u++)
          ia(e[u]) && e[u].parentNode !== o && o.appendChild(e[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          l.innerHTML = s, o.appendChild(l);
        }
      }
    }, t.prototype.setEnterable = function(e) {
      this._enterable = e;
    }, t.prototype.getSize = function() {
      var e = this.el;
      return e ? [e.offsetWidth, e.offsetHeight] : [0, 0];
    }, t.prototype.moveTo = function(e, r) {
      if (this.el) {
        var n = this._styleCoord;
        if (Gy(n, this._zr, this._container, e, r), n[0] != null && n[1] != null) {
          var i = this.el.style, a = zy(n[0], n[1]);
          M(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, t.prototype._moveIfResized = function() {
      var e = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(e * this._zr.getWidth(), r * this._zr.getHeight());
    }, t.prototype.hide = function() {
      var e = this, r = this.el.style;
      this._enableDisplayTransition ? (r.visibility = "hidden", r.opacity = "0") : r.display = "none", le.transform3dSupported && (r.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return e._longHide = !0;
      }, 500);
    }, t.prototype.hideLater = function(e) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(Pe(this.hide, this), e)) : this.hide());
    }, t.prototype.isShow = function() {
      return this._show;
    }, t.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var e = this._zr;
      jE(e && e.painter && e.painter.getViewportRoot(), this._container);
      var r = this.el;
      if (r) {
        r.onmouseenter = r.onmousemove = r.onmouseleave = null;
        var n = r.parentNode;
        n && n.removeChild(r);
      }
      this.el = this._container = null;
    }, t;
  }()
), f2 = (
  /** @class */
  function() {
    function t(e) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = e.getZr(), Uy(this._styleCoord, this._zr, e.getWidth() / 2, e.getHeight() / 2);
    }
    return t.prototype.update = function(e) {
      var r = e.get("alwaysShowContent");
      r && this._moveIfResized(), this._alwaysShowContent = r;
    }, t.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, t.prototype.setContent = function(e, r, n, i, a) {
      var o = this;
      J(e) && At(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new at({
        style: {
          rich: r.richTextStyles,
          text: e,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: RS(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), M(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = n.get(l);
      }), M(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
        o.el.style[l] = s.get(l) || 0;
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
      });
    }, t.prototype.setEnterable = function(e) {
      this._enterable = e;
    }, t.prototype.getSize = function() {
      var e = this.el, r = this.el.getBoundingRect(), n = Hy(e.style);
      return [r.width + n.left + n.right, r.height + n.top + n.bottom];
    }, t.prototype.moveTo = function(e, r) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        Uy(i, this._zr, e, r), e = i[0], r = i[1];
        var a = n.style, o = an(a.borderWidth || 0), s = Hy(a);
        n.x = e + o + s.left, n.y = r + o + s.top, n.markRedraw();
      }
    }, t.prototype._moveIfResized = function() {
      var e = this._styleCoord[2], r = this._styleCoord[3];
      this.moveTo(e * this._zr.getWidth(), r * this._zr.getHeight());
    }, t.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, t.prototype.hideLater = function(e) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(Pe(this.hide, this), e)) : this.hide());
    }, t.prototype.isShow = function() {
      return this._show;
    }, t.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, t;
  }()
);
function an(t) {
  return Math.max(0, t);
}
function Hy(t) {
  var e = an(t.shadowBlur || 0), r = an(t.shadowOffsetX || 0), n = an(t.shadowOffsetY || 0);
  return {
    left: an(e - r),
    right: an(e + r),
    top: an(e - n),
    bottom: an(e + n)
  };
}
function Uy(t, e, r, n) {
  t[0] = r, t[1] = n, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight();
}
var c2 = new ze({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), h2 = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.init = function(r, n) {
      if (!(le.node || !n.getDom())) {
        var i = r.getComponent("tooltip"), a = this._renderMode = dC(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new f2(n) : new l2(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, e.prototype.render = function(r, n, i) {
      if (!(le.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = r, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(r), a.setEnterable(r.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && r.get("transitionDuration") ? N1(this, "_updatePosition", 50, "fixRate") : Ch(this, "_updatePosition");
      }
    }, e.prototype._initGlobalListener = function() {
      var r = this._tooltipModel, n = r.get("triggerOn");
      Bb("itemTooltip", this._api, Pe(function(i, a, o) {
        n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
      }, this));
    }, e.prototype._keepShow = function() {
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
    }, e.prototype.manuallyShowTip = function(r, n, i, a) {
      if (!(a.from === this.uid || le.node || !i.getDom())) {
        var o = Wy(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, u = g2(a, n, i);
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
          var f = c2;
          f.x = a.x, f.y = a.y, f.update(), ge(f).tooltipConfig = {
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
          var c = Vb(a, n), h = c.point[0], v = c.point[1];
          h != null && v != null && this._tryShow({
            offsetX: h,
            offsetY: v,
            target: c.el,
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
    }, e.prototype.manuallyHideTip = function(r, n, i, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(Wy(a, i));
    }, e.prototype._manuallyAxisShowTip = function(r, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = n.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), c = Xa([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
          if (c.get("trigger") === "axis")
            return i.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, e.prototype._tryShow = function(r, n) {
      var i = r.target, a = this._tooltipModel;
      if (a) {
        this._lastX = r.offsetX, this._lastY = r.offsetY;
        var o = r.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, r);
        else if (i) {
          var s = ge(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var u, l;
          no(i, function(f) {
            if (f.tooltipDisabled)
              return u = l = null, !0;
            u || l || (ge(f).dataIndex != null ? u = f : ge(f).tooltipConfig != null && (l = f));
          }, !0), u ? this._showSeriesItemTooltip(r, u, n) : l ? this._showComponentItemTooltip(r, l, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(n);
      }
    }, e.prototype._showOrMove = function(r, n) {
      var i = r.get("showDelay");
      n = Pe(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, e.prototype._showAxisTooltip = function(r, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = Xa([n.tooltipOption], a), u = this._renderMode, l = [], f = Io("section", {
        blocks: [],
        noHeader: !0
      }), c = [], h = new Nf();
      M(r, function(y) {
        M(y.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), b = _.value, w = S.axis, T = w.scale.parse(b);
          if (!(!S || b == null)) {
            var x = Rb(b, w, i, _.seriesDataIndices, _.valueLabelOpt), D = Io("section", {
              header: x,
              noHeader: !Sr(x),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(D), M(_.seriesDataIndices, function(C) {
              var E = i.getSeriesByIndex(C.seriesIndex), L = C.dataIndexInside, A = E.getDataParams(L);
              if (!(A.dataIndex < 0)) {
                A.axisDim = _.axisDim, A.axisIndex = _.axisIndex, A.axisType = _.axisType, A.axisId = _.axisId, A.axisValue = Fu(S.axis, {
                  value: T
                }), A.axisValueLabel = x, A.marker = h.makeTooltipMarker("item", gi(A.color), u);
                var P = Ig(E.formatTooltip(L, !0, null)), O = P.frag;
                if (O) {
                  var N = Xa([E], a).get("valueFormatter");
                  D.blocks.push(N ? z({
                    valueFormatter: N
                  }, O) : O);
                }
                P.text && c.push(P.text), l.push(A);
              }
            });
          }
        });
      }), f.blocks.reverse(), c.reverse();
      var v = n.position, d = s.get("order"), p = Ng(f, h, u, d, i.get("useUTC"), s.get("textStyle"));
      p && c.unshift(p);
      var g = u === "richText" ? `

` : "<br/>", m = c.join(g);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(r, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, m, l, Math.random() + "", o[0], o[1], v, null, h);
      });
    }, e.prototype._showSeriesItemTooltip = function(r, n, i) {
      var a = this._ecModel, o = ge(n), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, c = o.dataType, h = l.getData(c), v = this._renderMode, d = r.positionDefault, p = Xa([h.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), g = p.get("trigger");
      if (!(g != null && g !== "item")) {
        var m = l.getDataParams(f, c), y = new Nf();
        m.marker = y.makeTooltipMarker("item", gi(m.color), v);
        var _ = Ig(l.formatTooltip(f, !1, c)), S = p.get("order"), b = p.get("valueFormatter"), w = _.frag, T = w ? Ng(b ? z({
          valueFormatter: b
        }, w) : w, y, v, S, a.get("useUTC"), p.get("textStyle")) : _.text, x = "item_" + l.name + "_" + f;
        this._showOrMove(p, function() {
          this._showTooltipContent(p, T, m, x, r.offsetX, r.offsetY, r.position, r.target, y);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: h.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, e.prototype._showComponentItemTooltip = function(r, n, i) {
      var a = this._renderMode === "html", o = ge(n), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (j(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = ce(u), u.content = mt(u.content));
      var c = [u], h = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      h && c.push(h), c.push({
        formatter: u.content
      });
      var v = r.positionDefault, d = Xa(c, this._tooltipModel, v ? {
        position: v
      } : null), p = d.get("content"), g = Math.random() + "", m = new Nf();
      this._showOrMove(d, function() {
        var y = ce(d.get("formatterParams") || {});
        this._showTooltipContent(d, p, y, g, r.offsetX, r.offsetY, r.position, n, m);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, e.prototype._showTooltipContent = function(r, n, i, a, o, s, u, l, f) {
      if (this._ticket = "", !(!r.get("showContent") || !r.get("show"))) {
        var c = this._tooltipContent;
        c.setEnterable(r.get("enterable"));
        var h = r.get("formatter");
        u = u || r.get("position");
        var v = n, d = this._getNearestPoint([o, s], i, r.get("trigger"), r.get("borderColor"), r.get("defaultBorderColor", !0)), p = d.color;
        if (h)
          if (j(h)) {
            var g = r.ecModel.get("useUTC"), m = $(i) ? i[0] : i, y = m && m.axisType && m.axisType.indexOf("time") >= 0;
            v = h, y && (v = Il(m.axisValue, v, g)), v = AS(v, i, !0);
          } else if (ie(h)) {
            var _ = Pe(function(S, b) {
              S === this._ticket && (c.setContent(b, f, r, p, u), this._updatePosition(r, u, o, s, c, i, l));
            }, this);
            this._ticket = a, v = h(i, a, _);
          } else
            v = h;
        c.setContent(v, f, r, p, u), c.show(r, p), this._updatePosition(r, u, o, s, c, i, l);
      }
    }, e.prototype._getNearestPoint = function(r, n, i, a, o) {
      if (i === "axis" || $(n))
        return {
          color: a || o
        };
      if (!$(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, e.prototype._updatePosition = function(r, n, i, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      n = n || r.get("position");
      var c = o.getSize(), h = r.get("align"), v = r.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), ie(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: c.slice()
      })), $(n))
        i = ke(n[0], l), a = ke(n[1], f);
      else if (J(n)) {
        var p = n;
        p.width = c[0], p.height = c[1];
        var g = bn(p, {
          width: l,
          height: f
        });
        i = g.x, a = g.y, h = null, v = null;
      } else if (j(n) && u) {
        var m = p2(n, d, c, r.get("borderWidth"));
        i = m[0], a = m[1];
      } else {
        var m = v2(i, a, o, l, f, h ? null : 20, v ? null : 20);
        i = m[0], a = m[1];
      }
      if (h && (i -= Yy(h) ? c[0] / 2 : h === "right" ? c[0] : 0), v && (a -= Yy(v) ? c[1] / 2 : v === "bottom" ? c[1] : 0), zb(r)) {
        var m = d2(i, a, o, l, f);
        i = m[0], a = m[1];
      }
      o.moveTo(i, a);
    }, e.prototype._updateContentNotChangedOnAxis = function(r, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === r.length;
      return o && M(i, function(s, u) {
        var l = s.dataByAxis || [], f = r[u] || {}, c = f.dataByAxis || [];
        o = o && l.length === c.length, o && M(l, function(h, v) {
          var d = c[v] || {}, p = h.seriesDataIndices || [], g = d.seriesDataIndices || [];
          o = o && h.value === d.value && h.axisType === d.axisType && h.axisId === d.axisId && p.length === g.length, o && M(p, function(m, y) {
            var _ = g[y];
            o = o && m.seriesIndex === _.seriesIndex && m.dataIndex === _.dataIndex;
          }), a && M(h.seriesDataIndices, function(m) {
            var y = m.seriesIndex, _ = n[y], S = a[y];
            _ && S && S.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = r, this._cbParamsList = n, !!o;
    }, e.prototype._hide = function(r) {
      this._lastDataByCoordSys = null, this._cbParamsList = null, r({
        type: "hideTip",
        from: this.uid
      });
    }, e.prototype.dispose = function(r, n) {
      le.node || !n.getDom() || (Ch(this, "_updatePosition"), this._tooltipContent.dispose(), Gh("itemTooltip", n), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, e.type = "tooltip", e;
  }(sr)
);
function Xa(t, e, r) {
  var n = e.ecModel, i;
  r ? (i = new Be(r, n, n), i = new Be(e.option, i, n)) : i = e;
  for (var a = t.length - 1; a >= 0; a--) {
    var o = t[a];
    o && (o instanceof Be && (o = o.get("tooltip", !0)), j(o) && (o = {
      formatter: o
    }), o && (i = new Be(o, i, n)));
  }
  return i;
}
function Wy(t, e) {
  return t.dispatchAction || Pe(e.dispatchAction, e);
}
function v2(t, e, r, n, i, a, o) {
  var s = r.getSize(), u = s[0], l = s[1];
  return a != null && (t + u + a + 2 > n ? t -= u + a : t += a), o != null && (e + l + o > i ? e -= l + o : e += o), [t, e];
}
function d2(t, e, r, n, i) {
  var a = r.getSize(), o = a[0], s = a[1];
  return t = Math.min(t + o, n) - o, e = Math.min(e + s, i) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
}
function p2(t, e, r, n) {
  var i = r[0], a = r[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, u = 0, l = e.width, f = e.height;
  switch (t) {
    case "inside":
      s = e.x + l / 2 - i / 2, u = e.y + f / 2 - a / 2;
      break;
    case "top":
      s = e.x + l / 2 - i / 2, u = e.y - a - o;
      break;
    case "bottom":
      s = e.x + l / 2 - i / 2, u = e.y + f + o;
      break;
    case "left":
      s = e.x - i - o, u = e.y + f / 2 - a / 2;
      break;
    case "right":
      s = e.x + l + o, u = e.y + f / 2 - a / 2;
  }
  return [s, u];
}
function Yy(t) {
  return t === "center" || t === "middle";
}
function g2(t, e, r) {
  var n = dv(t).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = $o(e, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = r.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = ge(l).tooltipConfig;
        if (f && f.name === t.name)
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
function m2(t) {
  xn(Fb), t.registerComponentModel(JR), t.registerComponentView(h2), t.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, it), t.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, it);
}
var y2 = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, r;
    }
    return e.type = "title", e.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: "center",
      top: ee.size.m,
      backgroundColor: ee.color.transparent,
      borderColor: ee.color.primary,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: ee.color.primary
      },
      subtextStyle: {
        fontSize: 12,
        color: ee.color.quaternary
      }
    }, e;
  }(be)
), _2 = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.render = function(r, n, i) {
      if (this.group.removeAll(), !!r.get("show")) {
        var a = this.group, o = r.getModel("textStyle"), s = r.getModel("subtextStyle"), u = r.get("textAlign"), l = K(r.get("textBaseline"), r.get("textVerticalAlign")), f = new at({
          style: Sn(o, {
            text: r.get("text"),
            fill: o.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), c = f.getBoundingRect(), h = r.get("subtext"), v = new at({
          style: Sn(s, {
            text: h,
            fill: s.getTextColor(),
            y: c.height + r.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), d = r.get("link"), p = r.get("sublink"), g = r.get("triggerEvent", !0);
        f.silent = !d && !g, v.silent = !p && !g, d && f.on("click", function() {
          Ag(d, "_" + r.get("target"));
        }), p && v.on("click", function() {
          Ag(p, "_" + r.get("subtarget"));
        }), ge(f).eventData = ge(v).eventData = g ? {
          componentType: "title",
          componentIndex: r.componentIndex
        } : null, a.add(f), h && a.add(v);
        var m = a.getBoundingRect(), y = r.getBoxLayoutParams();
        y.width = m.width, y.height = m.height;
        var _ = Pl(r, i), S = bn(y, _.refContainer, r.get("padding"));
        u || (u = r.get("left") || r.get("right"), u === "middle" && (u = "center"), u === "right" ? S.x += S.width : u === "center" && (S.x += S.width / 2)), l || (l = r.get("top") || r.get("bottom"), l === "center" && (l = "middle"), l === "bottom" ? S.y += S.height : l === "middle" && (S.y += S.height / 2), l = l || "top"), a.x = S.x, a.y = S.y, a.markRedraw();
        var b = {
          align: u,
          verticalAlign: l
        };
        f.setStyle(b), v.setStyle(b), m = a.getBoundingRect();
        var w = S.margin, T = r.getItemStyle(["color", "opacity"]);
        T.fill = r.get("backgroundColor");
        var x = new ze({
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
    }, e.type = "title", e;
  }(sr)
);
function S2(t) {
  t.registerComponentModel(y2), t.registerComponentView(_2);
}
var b2 = function(t, e) {
  if (e === "all")
    return {
      type: "all",
      title: t.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (e === "inverse")
    return {
      type: "inverse",
      title: t.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, Hh = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.layoutMode = {
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
    return e.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i), r.selected = r.selected || {}, this._updateSelector(r);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.call(this, r, n), this._updateSelector(r);
    }, e.prototype._updateSelector = function(r) {
      var n = r.selector, i = this.ecModel;
      n === !0 && (n = r.selector = ["all", "inverse"]), $(n) && M(n, function(a, o) {
        j(a) && (a = {
          type: a
        }), n[o] = De(a, b2(i, a.type));
      });
    }, e.prototype.optionUpdated = function() {
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
    }, e.prototype._updateData = function(r) {
      var n = [], i = [];
      r.eachRawSeries(function(u) {
        var l = u.name;
        i.push(l);
        var f;
        if (u.legendVisualProvider) {
          var c = u.legendVisualProvider, h = c.getAllNames();
          r.isSeriesFiltered(u) || (i = i.concat(h)), h.length ? n = n.concat(h) : f = !0;
        } else
          f = !0;
        f && vv(u) && n.push(u.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = re(), s = Q(a, function(u) {
        return (j(u) || Ee(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new Be(u, this, this.ecModel));
      }, this);
      this._data = tt(s, function(u) {
        return !!u;
      });
    }, e.prototype.getData = function() {
      return this._data;
    }, e.prototype.select = function(r) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        M(a, function(o) {
          n[o.get("name")] = !1;
        });
      }
      n[r] = !0;
    }, e.prototype.unSelect = function(r) {
      this.get("selectedMode") !== "single" && (this.option.selected[r] = !1);
    }, e.prototype.toggleSelected = function(r) {
      var n = this.option.selected;
      n.hasOwnProperty(r) || (n[r] = !0), this[n[r] ? "unSelect" : "select"](r);
    }, e.prototype.allSelect = function() {
      var r = this._data, n = this.option.selected;
      M(r, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, e.prototype.inverseSelect = function() {
      var r = this._data, n = this.option.selected;
      M(r, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, e.prototype.isSelected = function(r) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(r) && !n[r]) && xe(this._availableNames, r) >= 0;
    }, e.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, e.type = "legend.plain", e.dependencies = ["series"], e.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      // top: 0,
      bottom: ee.size.m,
      align: "auto",
      backgroundColor: ee.color.transparent,
      borderColor: ee.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: ee.color.disabled,
      inactiveBorderColor: ee.color.disabled,
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
        inactiveColor: ee.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: ee.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: ee.color.tertiary,
        borderWidth: 1,
        borderColor: ee.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: ee.color.quaternary
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      },
      triggerEvent: !1
    }, e;
  }(be)
), Gi = Xe, Uh = M, Us = Qe, Wb = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.newlineDisabled = !1, r;
    }
    return e.prototype.init = function() {
      this.group.add(this._contentGroup = new Us()), this.group.add(this._selectorGroup = new Us()), this._isFirstRender = !0;
    }, e.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, e.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, e.prototype.render = function(r, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!r.get("show", !0)) {
        var o = r.get("align"), s = r.get("orient");
        (!o || o === "auto") && (o = r.get("left") === "right" && s === "vertical" ? "right" : "left");
        var u = r.get("selector", !0), l = r.get("selectorPosition", !0);
        u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, r, n, i, u, s, l);
        var f = Pl(r, i).refContainer, c = r.getBoxLayoutParams(), h = r.get("padding"), v = bn(c, f, h), d = this.layoutInner(r, o, v, a, u, l), p = bn(Ae({
          width: d.width,
          height: d.height
        }, c), f, h);
        this.group.x = p.x - d.x, this.group.y = p.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = QR(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          r
        ));
      }
    }, e.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, e.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this.getContentGroup(), f = re(), c = n.get("selectedMode"), h = n.get("triggerEvent"), v = [];
      i.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && v.push(d.id);
      }), Uh(n.getData(), function(d, p) {
        var g = this, m = d.get("name");
        if (!this.newlineDisabled && (m === "" || m === `
`)) {
          var y = new Us();
          y.newline = !0, l.add(y);
          return;
        }
        var _ = i.getSeriesByName(m)[0];
        if (!f.get(m)) {
          if (_) {
            var S = _.getData(), b = S.getVisual("legendLineStyle") || {}, w = S.getVisual("legendIcon"), T = S.getVisual("style"), x = this._createItem(_, m, p, d, n, r, b, T, w, c, a);
            x.on("click", Gi(Xy, m, null, a, v)).on("mouseover", Gi(Wh, _.name, null, a, v)).on("mouseout", Gi(Yh, _.name, null, a, v)), i.ssr && x.eachChild(function(D) {
              var C = ge(D);
              C.seriesIndex = _.seriesIndex, C.dataIndex = p, C.ssrType = "legend";
            }), h && x.eachChild(function(D) {
              g.packEventData(D, n, _, p, m);
            }), f.set(m, !0);
          } else
            i.eachRawSeries(function(D) {
              var C = this;
              if (!f.get(m) && D.legendVisualProvider) {
                var E = D.legendVisualProvider;
                if (!E.containName(m))
                  return;
                var L = E.indexOfName(m), A = E.getItemVisual(L, "style"), P = E.getItemVisual(L, "legendIcon"), O = ir(A.fill);
                O && O[3] === 0 && (O[3] = 0.2, A = z(z({}, A), {
                  fill: Uo(O, "rgba")
                }));
                var N = this._createItem(D, m, p, d, n, r, {}, A, P, c, a);
                N.on("click", Gi(Xy, null, m, a, v)).on("mouseover", Gi(Wh, null, m, a, v)).on("mouseout", Gi(Yh, null, m, a, v)), i.ssr && N.eachChild(function(B) {
                  var R = ge(B);
                  R.seriesIndex = D.seriesIndex, R.dataIndex = p, R.ssrType = "legend";
                }), h && N.eachChild(function(B) {
                  C.packEventData(B, n, D, p, m);
                }), f.set(m, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(m) || console.warn(m + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, n, a, s, u);
    }, e.prototype.packEventData = function(r, n, i, a, o) {
      var s = {
        componentType: "legend",
        componentIndex: n.componentIndex,
        dataIndex: a,
        value: o,
        seriesIndex: i.seriesIndex
      };
      ge(r).eventData = s;
    }, e.prototype._createSelector = function(r, n, i, a, o) {
      var s = this.getSelectorGroup();
      Uh(r, function(l) {
        var f = l.type, c = new at({
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
        s.add(c);
        var h = n.getModel("selectorLabel"), v = n.getModel(["emphasis", "selectorLabel"]);
        qo(c, {
          normal: h,
          emphasis: v
        }, {
          defaultText: l.title
        }), th(c);
      });
    }, e.prototype._createItem = function(r, n, i, a, o, s, u, l, f, c, h) {
      var v = r.visualDrawType, d = o.get("itemWidth"), p = o.get("itemHeight"), g = o.isSelected(n), m = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = w2(f, a, u, l, v, g, h), b = new Us(), w = a.getModel("textStyle");
      if (ie(r.getLegendIcon) && (!_ || _ === "inherit"))
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
        b.add(T2({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: T,
          itemStyle: S.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var x = s === "left" ? d + 5 : -5, D = s, C = o.get("formatter"), E = n;
      j(C) && C ? E = C.replace("{name}", n ?? "") : ie(C) && (E = C(n));
      var L = g ? w.getTextColor() : a.get("inactiveColor");
      b.add(new at({
        style: Sn(w, {
          text: E,
          x,
          y: p / 2,
          fill: L,
          align: D,
          verticalAlign: "middle"
        }, {
          inheritColor: L
        })
      }));
      var A = new ze({
        shape: b.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && Tl({
        el: A,
        componentModel: o,
        itemName: n,
        itemTooltipOption: P.option
      }), b.add(A), b.eachChild(function(O) {
        O.silent = !0;
      }), A.silent = !c, this.getContentGroup().add(b), th(b), b.__legendDataIndex = i, b;
    }, e.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      go(r.get("orient"), u, r.get("itemGap"), i.width, i.height);
      var f = u.getBoundingRect(), c = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        go(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          r.get("selectorItemGap", !0)
        );
        var h = l.getBoundingRect(), v = [-h.x, -h.y], d = r.get("selectorButtonGap", !0), p = r.getOrient().index, g = p === 0 ? "width" : "height", m = p === 0 ? "height" : "width", y = p === 0 ? "y" : "x";
        s === "end" ? v[p] += f[g] + d : c[p] += h[g] + d, v[1 - p] += f[m] / 2 - h[m] / 2, l.x = v[0], l.y = v[1], u.x = c[0], u.y = c[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[g] = f[g] + d + h[g], _[m] = Math.max(f[m], h[m]), _[y] = Math.min(0, h[y] + v[1 - p]), _;
      } else
        return u.x = c[0], u.y = c[1], this.group.getBoundingRect();
    }, e.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, e.type = "legend.plain", e;
  }(sr)
);
function w2(t, e, r, n, i, a, o) {
  function s(g, m) {
    g.lineWidth === "auto" && (g.lineWidth = m.lineWidth > 0 ? 2 : 0), Uh(g, function(y, _) {
      g[_] === "inherit" && (g[_] = m[_]);
    });
  }
  var u = e.getModel("itemStyle"), l = u.getItemStyle(), f = t.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", c = u.getShallow("decal");
  l.decal = !c || c === "inherit" ? n.decal : Oh(c, o), l.fill === "inherit" && (l.fill = n[i]), l.stroke === "inherit" && (l.stroke = n[f]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? n : r).opacity), s(l, n);
  var h = e.getModel("lineStyle"), v = h.getLineStyle();
  if (s(v, r), l.fill === "auto" && (l.fill = n.fill), l.stroke === "auto" && (l.stroke = n.fill), v.stroke === "auto" && (v.stroke = n.fill), !a) {
    var d = e.get("inactiveBorderWidth"), p = l[f];
    l.lineWidth = d === "auto" ? n.lineWidth > 0 && p ? 2 : 0 : l.lineWidth, l.fill = e.get("inactiveColor"), l.stroke = e.get("inactiveBorderColor"), v.stroke = h.get("inactiveColor"), v.lineWidth = h.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: v
  };
}
function T2(t) {
  var e = t.icon || "roundRect", r = pa(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill, t.symbolKeepAspect);
  return r.setStyle(t.itemStyle), r.rotation = (t.iconRotate || 0) * Math.PI / 180, r.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), e.indexOf("empty") > -1 && (r.style.stroke = r.style.fill, r.style.fill = ee.color.neutral00, r.style.lineWidth = 2), r;
}
function Xy(t, e, r, n) {
  Yh(t, e, r, n), r.dispatchAction({
    type: "legendToggleSelect",
    name: t ?? e
  }), Wh(t, e, r, n);
}
function Wh(t, e, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "highlight",
    seriesName: t,
    name: e,
    excludeSeriesId: n
  });
}
function Yh(t, e, r, n) {
  r.usingTHL() || r.dispatchAction({
    type: "downplay",
    seriesName: t,
    name: e,
    excludeSeriesId: n
  });
}
function $a(t, e, r) {
  var n = t === "allSelect" || t === "inverseSelect", i = {}, a = [];
  r.eachComponent({
    mainType: "legend",
    query: e
  }, function(s) {
    n ? s[t]() : s[t](e.name), $y(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return r.eachComponent("legend", function(s) {
    M(i, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), $y(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: e.name,
    selected: o
  };
}
function $y(t, e) {
  var r = e || {};
  return M(t.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = t.isSelected(i);
      _t(r, i) ? r[i] = r[i] && a : r[i] = a;
    }
  }), r;
}
function x2(t) {
  t.registerAction("legendToggleSelect", "legendselectchanged", Xe($a, "toggleSelected")), t.registerAction("legendAllSelect", "legendselectall", Xe($a, "allSelect")), t.registerAction("legendInverseSelect", "legendinverseselect", Xe($a, "inverseSelect")), t.registerAction("legendSelect", "legendselected", Xe($a, "select")), t.registerAction("legendUnSelect", "legendunselected", Xe($a, "unSelect"));
}
var C2 = gv(D2);
function D2(t) {
  var e = t.findComponents({
    mainType: "legend"
  });
  e && e.length && t.filterSeries(function(r) {
    for (var n = 0; n < e.length; n++)
      if (!e[n].isSelected(r.name))
        return !1;
    return !0;
  });
}
function Yb(t) {
  t.registerComponentModel(Hh), t.registerComponentView(Wb), t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, C2), t.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), x2(t);
}
var E2 = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r;
    }
    return e.prototype.setScrollDataIndex = function(r) {
      this.option.scrollDataIndex = r;
    }, e.prototype.init = function(r, n, i) {
      var a = jo(r);
      t.prototype.init.call(this, r, n, i), Zy(this, r, a);
    }, e.prototype.mergeOption = function(r, n) {
      t.prototype.mergeOption.call(this, r, n), Zy(this, this.option, r);
    }, e.type = "legend.scroll", e.defaultOption = dS(Hh.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: ee.color.accent50,
      pageIconInactiveColor: ee.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: ee.color.tertiary
      },
      animationDurationUpdate: 800
    }), e;
  }(Hh)
);
function Zy(t, e, r) {
  var n = t.getOrient(), i = [1, 1];
  i[n.index] = 0, wn(e, r, {
    type: "box",
    ignoreSize: !!i
  });
}
var qy = Qe, vc = ["width", "height"], dc = ["x", "y"], A2 = (
  /** @class */
  function(t) {
    X(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = e.type, r.newlineDisabled = !0, r._currentIndex = 0, r;
    }
    return e.prototype.init = function() {
      t.prototype.init.call(this), this.group.add(this._containerGroup = new qy()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new qy());
    }, e.prototype.resetInner = function() {
      t.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, e.prototype.renderInner = function(r, n, i, a, o, s, u) {
      var l = this;
      t.prototype.renderInner.call(this, r, n, i, a, o, s, u);
      var f = this._controllerGroup, c = n.get("pageIconSize", !0), h = $(c) ? c : [c, c];
      d("pagePrev", 0);
      var v = n.getModel("pageTextStyle");
      f.add(new at({
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
        var m = p + "DataIndex", y = Lv(n.get("pageIcons", !0)[n.getOrient().name][g], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: Pe(l._pageGo, l, m, n, a)
        }, {
          x: -h[0] / 2,
          y: -h[1] / 2,
          width: h[0],
          height: h[1]
        });
        y.name = p, f.add(y);
      }
    }, e.prototype.layoutInner = function(r, n, i, a, o, s) {
      var u = this.getSelectorGroup(), l = r.getOrient().index, f = vc[l], c = dc[l], h = vc[1 - l], v = dc[1 - l];
      o && go(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        r.get("selectorItemGap", !0)
      );
      var d = r.get("selectorButtonGap", !0), p = u.getBoundingRect(), g = [-p.x, -p.y], m = ce(i);
      o && (m[f] = i[f] - p[f] - d);
      var y = this._layoutContentAndController(r, a, m, l, f, h, v, c);
      if (o) {
        if (s === "end")
          g[l] += y[f] + d;
        else {
          var _ = p[f] + d;
          g[l] -= _, y[c] -= _;
        }
        y[f] += p[f] + d, g[1 - l] += y[v] + y[h] / 2 - p[h] / 2, y[h] = Math.max(y[h], p[h]), y[v] = Math.min(y[v], p[v] + g[1 - l]), u.x = g[0], u.y = g[1], u.markRedraw();
      }
      return y;
    }, e.prototype._layoutContentAndController = function(r, n, i, a, o, s, u, l) {
      var f = this.getContentGroup(), c = this._containerGroup, h = this._controllerGroup;
      go(r.get("orient"), f, r.get("itemGap"), a ? i.width : null, a ? null : i.height), go(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        h,
        r.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = h.getBoundingRect(), p = this._showController = v[o] > i[o], g = [-v.x, -v.y];
      n || (g[a] = f[l]);
      var m = [0, 0], y = [-d.x, -d.y], _ = K(r.get("pageButtonGap", !0), r.get("itemGap", !0));
      if (p) {
        var S = r.get("pageButtonPosition", !0);
        S === "end" ? y[a] += i[o] - d[o] : m[a] += d[o] + _;
      }
      y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(g), c.setPosition(m), h.setPosition(y);
      var b = {
        x: 0,
        y: 0
      };
      if (b[o] = p ? i[o] : v[o], b[s] = Math.max(v[s], d[s]), b[u] = Math.min(0, d[u] + y[1 - a]), c.__rectSize = i[o], p) {
        var w = {
          x: 0,
          y: 0
        };
        w[o] = Math.max(i[o] - d[o] - _, 0), w[s] = b[s], c.setClipPath(new ze({
          shape: w
        })), c.__rectSize = w[o];
      } else
        h.eachChild(function(x) {
          x.attr({
            invisible: !0,
            silent: !0
          });
        });
      var T = this._getPageInfo(r);
      return T.pageIndex != null && wt(
        f,
        {
          x: T.contentPosition[0],
          y: T.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        p ? r : null
      ), this._updatePageInfoView(r, T), b;
    }, e.prototype._pageGo = function(r, n, i) {
      var a = this._getPageInfo(n)[r];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, e.prototype._updatePageInfoView = function(r, n) {
      var i = this._controllerGroup;
      M(["pagePrev", "pageNext"], function(f) {
        var c = f + "DataIndex", h = n[c] != null, v = i.childOfName(f);
        v && (v.setStyle("fill", h ? r.get("pageIconColor", !0) : r.get("pageIconInactiveColor", !0)), v.cursor = h ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = r.get("pageFormatter"), s = n.pageIndex, u = s != null ? s + 1 : 0, l = n.pageCount;
      a && o && a.setStyle("text", j(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, e.prototype._getPageInfo = function(r) {
      var n = r.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = r.getOrient().index, s = vc[o], u = dc[o], l = this._findTargetItemIndex(n), f = i.children(), c = f[l], h = f.length, v = h ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: v,
        pageIndex: v - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!c)
        return d;
      var p = S(c);
      d.contentPosition[o] = -p.s;
      for (var g = l + 1, m = p, y = p, _ = null; g <= h; ++g)
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
    }, e.prototype._findTargetItemIndex = function(r) {
      if (!this._showController)
        return 0;
      var n, i = this.getContentGroup(), a;
      return i.eachChild(function(o, s) {
        var u = o.__legendDataIndex;
        a == null && u != null && (a = s), u === r && (n = s);
      }), n ?? a;
    }, e.type = "legend.scroll", e;
  }(Wb)
);
function M2(t) {
  t.registerAction("legendScroll", "legendscroll", function(e, r) {
    var n = e.scrollDataIndex;
    n != null && r.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: e
    }, function(i) {
      i.setScrollDataIndex(n);
    });
  });
}
function I2(t) {
  xn(Yb), t.registerComponentModel(E2), t.registerComponentView(A2), M2(t);
}
function L2(t) {
  xn(Yb), xn(I2);
}
var pc = Math.sin, gc = Math.cos, Xb = Math.PI, Qn = Math.PI * 2, P2 = 180 / Xb, $b = function() {
  function t() {
  }
  return t.prototype.reset = function(e) {
    this._start = !0, this._d = [], this._str = "", this._p = Math.pow(10, e || 4);
  }, t.prototype.moveTo = function(e, r) {
    this._add("M", e, r);
  }, t.prototype.lineTo = function(e, r) {
    this._add("L", e, r);
  }, t.prototype.bezierCurveTo = function(e, r, n, i, a, o) {
    this._add("C", e, r, n, i, a, o);
  }, t.prototype.quadraticCurveTo = function(e, r, n, i) {
    this._add("Q", e, r, n, i);
  }, t.prototype.arc = function(e, r, n, i, a, o) {
    this.ellipse(e, r, n, n, 0, i, a, o);
  }, t.prototype.ellipse = function(e, r, n, i, a, o, s, u) {
    var l = s - o, f = !u, c = Math.abs(l), h = un(c - Qn) || (f ? l >= Qn : -l >= Qn), v = l > 0 ? l % Qn : l % Qn + Qn, d = !1;
    h ? d = !0 : un(c) ? d = !1 : d = v >= Xb == !!f;
    var p = e + n * gc(o), g = r + i * pc(o);
    this._start && this._add("M", p, g);
    var m = Math.round(a * P2);
    if (h) {
      var y = 1 / this._p, _ = (f ? 1 : -1) * (Qn - y);
      this._add("A", n, i, m, 1, +f, e + n * gc(o + _), r + i * pc(o + _)), y > 0.01 && this._add("A", n, i, m, 0, +f, p, g);
    } else {
      var S = e + n * gc(s), b = r + i * pc(s);
      this._add("A", n, i, m, +d, +f, S, b);
    }
  }, t.prototype.rect = function(e, r, n, i) {
    this._add("M", e, r), this._add("l", n, 0), this._add("l", 0, i), this._add("l", -n, 0), this._add("Z");
  }, t.prototype.closePath = function() {
    this._d.length > 0 && this._add("Z");
  }, t.prototype._add = function(e, r, n, i, a, o, s, u, l) {
    for (var f = [], c = this._p, h = 1; h < arguments.length; h++) {
      var v = arguments[h];
      if (isNaN(v)) {
        this._invalid = !0;
        return;
      }
      f.push(Math.round(v * c) / c);
    }
    this._d.push(e + f.join(" ")), this._start = e === "Z";
  }, t.prototype.generateStr = function() {
    this._str = this._invalid ? "" : this._d.join(""), this._d = [];
  }, t.prototype.getStr = function() {
    return this._str;
  }, t;
}(), Cd = "none", O2 = Math.round;
function N2(t) {
  var e = t.fill;
  return e != null && e !== Cd;
}
function R2(t) {
  var e = t.stroke;
  return e != null && e !== Cd;
}
var Xh = ["lineCap", "miterLimit", "lineJoin"], k2 = Q(Xh, function(t) {
  return "stroke-" + t.toLowerCase();
});
function B2(t, e, r, n) {
  var i = e.opacity == null ? 1 : e.opacity;
  if (r instanceof Mr) {
    t("opacity", i);
    return;
  }
  if (N2(e)) {
    var a = To(e.fill);
    t("fill", a.color);
    var o = e.fillOpacity != null ? e.fillOpacity * a.opacity * i : a.opacity * i;
    o < 1 && t("fill-opacity", o);
  } else
    t("fill", Cd);
  if (R2(e)) {
    var s = To(e.stroke);
    t("stroke", s.color);
    var u = e.strokeNoScale ? r.getLineScale() : 1, l = u ? (e.lineWidth || 0) / u : 0, f = e.strokeOpacity != null ? e.strokeOpacity * s.opacity * i : s.opacity * i, c = e.strokeFirst;
    if (l !== 1 && t("stroke-width", l), c && t("paint-order", c ? "stroke" : "fill"), f < 1 && t("stroke-opacity", f), e.lineDash) {
      var h = pd(r), v = h[0], d = h[1];
      v && (d = O2(d || 0), t("stroke-dasharray", v.join(",")), (d || n) && t("stroke-dashoffset", d));
    }
    for (var p = 0; p < Xh.length; p++) {
      var g = Xh[p];
      if (e[g] !== Su[g]) {
        var m = e[g] || Su[g];
        m && t(k2[p], m);
      }
    }
  }
}
var Zb = "http://www.w3.org/2000/svg", qb = "http://www.w3.org/1999/xlink", V2 = "http://www.w3.org/2000/xmlns/", F2 = "http://www.w3.org/XML/1998/namespace", Ky = "ecmeta_";
function Kb(t) {
  return document.createElementNS(Zb, t);
}
function qe(t, e, r, n, i) {
  return {
    tag: t,
    attrs: r || {},
    children: n,
    text: i,
    key: e
  };
}
function z2(t, e) {
  var r = [];
  if (e)
    for (var n in e) {
      var i = e[n], a = n;
      i !== !1 && (i !== !0 && i != null && (a += '="' + i + '"'), r.push(a));
    }
  return "<" + t + " " + r.join(" ") + ">";
}
function G2(t) {
  return "</" + t + ">";
}
function Dd(t, e) {
  e = e || {};
  var r = e.newline ? `
` : "";
  function n(i) {
    var a = i.children, o = i.tag, s = i.attrs, u = i.text;
    return z2(o, s) + (o !== "style" ? mt(u) : u || "") + (a ? "" + r + Q(a, function(l) {
      return n(l);
    }).join(r) + r : "") + G2(o);
  }
  return n(t);
}
function H2(t, e, r) {
  r = r || {};
  var n = r.newline ? `
` : "", i = " {" + n, a = n + "}", o = Q(de(t), function(u) {
    return u + i + Q(de(t[u]), function(l) {
      return l + ":" + t[u][l] + ";";
    }).join(n) + a;
  }).join(n), s = Q(de(e), function(u) {
    return "@keyframes " + u + i + Q(de(e[u]), function(l) {
      return l + i + Q(de(e[u][l]), function(f) {
        var c = e[u][l][f];
        return f === "d" && (c = 'path("' + c + '")'), f + ":" + c + ";";
      }).join(n) + a;
    }).join(n) + a;
  }).join(n);
  return !o && !s ? "" : ["<![CDATA[", o, s, "]]>"].join(n);
}
function $h(t) {
  return {
    zrId: t,
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
function jy(t, e, r, n) {
  return qe("svg", "root", {
    width: t,
    height: e,
    xmlns: Zb,
    "xmlns:xlink": qb,
    version: "1.1",
    baseProfile: "full",
    viewBox: n ? "0 0 " + t + " " + e : !1
  }, r);
}
var U2 = 0;
function jb() {
  return U2++;
}
var Qy = {
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
}, ei = "transform-origin";
function W2(t, e, r) {
  var n = z({}, t.shape);
  z(n, e), t.buildPath(r, n);
  var i = new $b();
  return i.reset(z0(t)), r.rebuildPath(i, 1), i.generateStr(), i.getStr();
}
function Y2(t, e) {
  var r = e.originX, n = e.originY;
  (r || n) && (t[ei] = r + "px " + n + "px");
}
var X2 = {
  fill: "fill",
  opacity: "opacity",
  lineWidth: "stroke-width",
  lineDashOffset: "stroke-dashoffset"
};
function Qb(t, e) {
  var r = e.zrId + "-ani-" + e.cssAnimIdx++;
  return e.cssAnims[r] = t, r;
}
function $2(t, e, r) {
  var n = t.shape.paths, i = {}, a, o;
  if (M(n, function(u) {
    var l = $h(r.zrId);
    l.animation = !0, Vl(u, {}, l, !0);
    var f = l.cssAnims, c = l.cssNodes, h = de(f), v = h.length;
    if (v) {
      o = h[v - 1];
      var d = f[o];
      for (var p in d) {
        var g = d[p];
        i[p] = i[p] || { d: "" }, i[p].d += g.d || "";
      }
      for (var m in c) {
        var y = c[m].animation;
        y.indexOf(o) >= 0 && (a = y);
      }
    }
  }), !!a) {
    e.d = !1;
    var s = Qb(i, r);
    return a.replace(o, s);
  }
}
function Jy(t) {
  return j(t) ? Qy[t] ? "cubic-bezier(" + Qy[t] + ")" : ov(t) ? t : "" : "";
}
function Vl(t, e, r, n) {
  var i = t.animators, a = i.length, o = [];
  if (t instanceof M_) {
    var s = $2(t, e, r);
    if (s)
      o.push(s);
    else if (!a)
      return;
  } else if (!a)
    return;
  for (var u = {}, l = 0; l < a; l++) {
    var f = i[l], c = [f.getMaxTime() / 1e3 + "s"], h = Jy(f.getClip().easing), v = f.getDelay();
    h ? c.push(h) : c.push("linear"), v && c.push(v / 1e3 + "s"), f.getLoop() && c.push("infinite");
    var d = c.join(" ");
    u[d] = u[d] || [d, []], u[d][1].push(f);
  }
  function p(y) {
    var _ = y[1], S = _.length, b = {}, w = {}, T = {}, x = "animation-timing-function";
    function D(Ie, he, Se) {
      for (var te = Ie.getTracks(), fe = Ie.getMaxTime(), ot = 0; ot < te.length; ot++) {
        var Re = te[ot];
        if (Re.needsAnimate()) {
          var st = Re.keyframes, Ue = Re.propName;
          if (Se && (Ue = Se(Ue)), Ue)
            for (var Tt = 0; Tt < st.length; Tt++) {
              var Ir = st[Tt], ut = Math.round(Ir.time / fe * 100) + "%", wi = Jy(Ir.easing), Zr = Ir.rawValue;
              (j(Zr) || Ee(Zr)) && (he[ut] = he[ut] || {}, he[ut][Ue] = Ir.rawValue, wi && (he[ut][x] = wi));
            }
        }
      }
    }
    for (var C = 0; C < S; C++) {
      var E = _[C], L = E.targetName;
      L ? L === "shape" && D(E, w) : !n && D(E, b);
    }
    for (var A in b) {
      var P = {};
      wo(P, t), z(P, b[A]);
      var O = G0(P), N = b[A][x];
      T[A] = O ? {
        transform: O
      } : {}, Y2(T[A], P), N && (T[A][x] = N);
    }
    var B, R = !0;
    for (var A in w) {
      T[A] = T[A] || {};
      var F = !B, N = w[A][x];
      F && (B = new yn());
      var G = B.len();
      B.reset(), T[A].d = W2(t, w[A], B);
      var H = B.len();
      if (!F && G !== H) {
        R = !1;
        break;
      }
      N && (T[A][x] = N);
    }
    if (!R)
      for (var A in T)
        delete T[A].d;
    if (!n)
      for (var C = 0; C < S; C++) {
        var E = _[C], L = E.targetName;
        L === "style" && D(E, T, function(te) {
          return X2[te];
        });
      }
    for (var Y = de(T), q = !0, W, C = 1; C < Y.length; C++) {
      var ne = Y[C - 1], se = Y[C];
      if (T[ne][ei] !== T[se][ei]) {
        q = !1;
        break;
      }
      W = T[ne][ei];
    }
    if (q && W) {
      for (var A in T)
        T[A][ei] && delete T[A][ei];
      e[ei] = W;
    }
    if (tt(Y, function(Ie) {
      return de(T[Ie]).length > 0;
    }).length) {
      var Oe = Qb(T, r);
      return Oe + " " + y[0] + " both";
    }
  }
  for (var g in u) {
    var s = p(u[g]);
    s && o.push(s);
  }
  if (o.length) {
    var m = r.zrId + "-cls-" + jb();
    r.cssNodes["." + m] = {
      animation: o.join(",")
    }, e.class = m;
  }
}
function Z2(t, e, r) {
  if (!t.ignore)
    if (t.isSilent()) {
      var n = {
        "pointer-events": "none"
      };
      e0(n, e, r);
    } else {
      var i = t.states.emphasis && t.states.emphasis.style ? t.states.emphasis.style : {}, a = i.fill;
      if (!a) {
        var o = t.style && t.style.fill, s = t.states.select && t.states.select.style && t.states.select.style.fill, u = t.currentStates.indexOf("select") >= 0 && s || o;
        u && (a = kc(u));
      }
      var l = i.lineWidth;
      if (l) {
        var f = !i.strokeNoScale && t.transform ? t.transform[0] : 1;
        l = l / f;
      }
      var n = {
        cursor: "pointer"
      };
      a && (n.fill = a), i.stroke && (n.stroke = i.stroke), l && (n["stroke-width"] = l), e0(n, e, r);
    }
}
function e0(t, e, r, n) {
  var i = JSON.stringify(t), a = r.cssStyleCache[i];
  a || (a = r.zrId + "-cls-" + jb(), r.cssStyleCache[i] = a, r.cssNodes["." + a + ":hover"] = t), e.class = e.class ? e.class + " " + a : a;
}
var Bo = Math.round;
function Jb(t) {
  return t && j(t.src);
}
function ew(t) {
  return t && ie(t.toDataURL);
}
function Ed(t, e, r, n) {
  B2(function(i, a) {
    var o = i === "fill" || i === "stroke";
    o && F0(a) ? rw(e, t, i, n) : o && sv(a) ? nw(r, t, i, n) : t[i] = a, o && n.ssr && a === "none" && (t["pointer-events"] = "visible");
  }, e, r, !1), tk(r, t, n);
}
function Ad(t, e) {
  var r = sO(e);
  r && (r.each(function(n, i) {
    n != null && (t[(Ky + i).toLowerCase()] = n + "");
  }), e.isSilent() && (t[Ky + "silent"] = "true"));
}
function t0(t) {
  return un(t[0] - 1) && un(t[1]) && un(t[2]) && un(t[3] - 1);
}
function q2(t) {
  return un(t[4]) && un(t[5]);
}
function Md(t, e, r) {
  if (e && !(q2(e) && t0(e))) {
    var n = 1e4;
    t.transform = t0(e) ? "translate(" + Bo(e[4] * n) / n + " " + Bo(e[5] * n) / n + ")" : ZT(e);
  }
}
function r0(t, e, r) {
  for (var n = t.points, i = [], a = 0; a < n.length; a++)
    i.push(Bo(n[a][0] * r) / r), i.push(Bo(n[a][1] * r) / r);
  e.points = i.join(" ");
}
function n0(t) {
  return !t.smooth;
}
function K2(t) {
  var e = Q(t, function(r) {
    return typeof r == "string" ? [r, r] : r;
  });
  return function(r, n, i) {
    for (var a = 0; a < e.length; a++) {
      var o = e[a], s = r[o[0]];
      s != null && (n[o[1]] = Bo(s * i) / i);
    }
  };
}
var j2 = {
  circle: [K2(["cx", "cy", "r"])],
  polyline: [r0, n0],
  polygon: [r0, n0]
};
function Q2(t) {
  for (var e = t.animators, r = 0; r < e.length; r++)
    if (e[r].targetName === "shape")
      return !0;
  return !1;
}
function tw(t, e) {
  var r = t.style, n = t.shape, i = j2[t.type], a = {}, o = e.animation, s = "path", u = t.style.strokePercent, l = e.compress && z0(t) || 4;
  if (i && !e.willUpdate && !(i[1] && !i[1](n)) && !(o && Q2(t)) && !(u < 1)) {
    s = t.type;
    var f = Math.pow(10, l);
    i[0](n, a, f);
  } else {
    var c = !t.path || t.shapeChanged();
    t.path || t.createPathProxy();
    var h = t.path;
    c && (h.beginPath(), t.buildPath(h, t.shape), t.pathUpdated());
    var v = h.getVersion(), d = t, p = d.__svgPathBuilder;
    (d.__svgPathVersion !== v || !p || u !== d.__svgPathStrokePercent) && (p || (p = d.__svgPathBuilder = new $b()), p.reset(l), h.rebuildPath(p, u), p.generateStr(), d.__svgPathVersion = v, d.__svgPathStrokePercent = u), a.d = p.getStr();
  }
  return Md(a, t.transform), Ed(a, r, t, e), Ad(a, t), e.animation && Vl(t, a, e), e.emphasis && Z2(t, a, e), qe(s, t.id + "", a);
}
function J2(t, e) {
  var r = t.style, n = r.image;
  if (n && !j(n) && (Jb(n) ? n = n.src : ew(n) && (n = n.toDataURL())), !!n) {
    var i = r.x || 0, a = r.y || 0, o = r.width, s = r.height, u = {
      href: n,
      width: o,
      height: s
    };
    return i && (u.x = i), a && (u.y = a), Md(u, t.transform), Ed(u, r, t, e), Ad(u, t), e.animation && Vl(t, u, e), qe("image", t.id + "", u);
  }
}
function ek(t, e) {
  var r = t.style, n = r.text;
  if (n != null && (n += ""), !(!n || isNaN(r.x) || isNaN(r.y))) {
    var i = r.font || Ur, a = r.x || 0, o = KT(r.y || 0, Go(i), r.textBaseline), s = qT[r.textAlign] || r.textAlign, u = {
      "dominant-baseline": "central",
      "text-anchor": s
    };
    if (K0(r)) {
      var l = "", f = r.fontStyle, c = q0(r.fontSize);
      if (!parseFloat(c))
        return;
      var h = r.fontFamily || d0, v = r.fontWeight;
      l += "font-size:" + c + ";font-family:" + h + ";", f && f !== "normal" && (l += "font-style:" + f + ";"), v && v !== "normal" && (l += "font-weight:" + v + ";"), u.style = l;
    } else
      u.style = "font: " + i;
    return n.match(/\s/) && (u["xml:space"] = "preserve"), a && (u.x = a), o && (u.y = o), Md(u, t.transform), Ed(u, r, t, e), Ad(u, t), e.animation && Vl(t, u, e), qe("text", t.id + "", u, void 0, n);
  }
}
function i0(t, e) {
  if (t instanceof Ce)
    return tw(t, e);
  if (t instanceof Mr)
    return J2(t, e);
  if (t instanceof xo)
    return ek(t, e);
}
function tk(t, e, r) {
  var n = t.style;
  if (jT(n)) {
    var i = QT(t), a = r.shadowCache, o = a[i];
    if (!o) {
      var s = t.getGlobalScale(), u = s[0], l = s[1];
      if (!u || !l)
        return;
      var f = n.shadowOffsetX || 0, c = n.shadowOffsetY || 0, h = n.shadowBlur, v = To(n.shadowColor), d = v.opacity, p = v.color, g = h / 2 / u, m = h / 2 / l, y = g + " " + m;
      o = r.zrId + "-s" + r.shadowIdx++, r.defs[o] = qe("filter", o, {
        id: o,
        x: "-100%",
        y: "-100%",
        width: "300%",
        height: "300%"
      }, [
        qe("feDropShadow", "", {
          dx: f / u,
          dy: c / l,
          stdDeviation: y,
          "flood-color": p,
          "flood-opacity": d
        })
      ]), a[i] = o;
    }
    e.filter = vl(o);
  }
}
function rw(t, e, r, n) {
  var i = t[r], a, o = {
    gradientUnits: i.global ? "userSpaceOnUse" : "objectBoundingBox"
  };
  if (B0(i))
    a = "linearGradient", o.x1 = i.x, o.y1 = i.y, o.x2 = i.x2, o.y2 = i.y2;
  else if (V0(i))
    a = "radialGradient", o.cx = K(i.x, 0.5), o.cy = K(i.y, 0.5), o.r = K(i.r, 0.5);
  else {
    process.env.NODE_ENV !== "production" && Fr("Illegal gradient type.");
    return;
  }
  for (var s = i.colorStops, u = [], l = 0, f = s.length; l < f; ++l) {
    var c = Bc(s[l].offset) * 100 + "%", h = s[l].color, v = To(h), d = v.color, p = v.opacity, g = {
      offset: c
    };
    g["stop-color"] = d, p < 1 && (g["stop-opacity"] = p), u.push(qe("stop", l + "", g));
  }
  var m = qe(a, "", o, u), y = Dd(m), _ = n.gradientCache, S = _[y];
  S || (S = n.zrId + "-g" + n.gradientIdx++, _[y] = S, o.id = S, n.defs[S] = qe(a, S, o, u)), e[r] = vl(S);
}
function nw(t, e, r, n) {
  var i = t.style[r], a = t.getBoundingRect(), o = {}, s = i.repeat, u = s === "no-repeat", l = s === "repeat-x", f = s === "repeat-y", c;
  if (k0(i)) {
    var h = i.imageWidth, v = i.imageHeight, d = void 0, p = i.image;
    if (j(p) ? d = p : Jb(p) ? d = p.src : ew(p) && (d = p.toDataURL()), typeof Image > "u") {
      var g = "Image width/height must been given explictly in svg-ssr renderer.";
      k(h, g), k(v, g);
    } else if (h == null || v == null) {
      var m = function(C, E) {
        if (C) {
          var L = C.elm, A = h || E.width, P = v || E.height;
          C.tag === "pattern" && (l ? (P = 1, A /= a.width) : f && (A = 1, P /= a.height)), C.attrs.width = A, C.attrs.height = P, L && (L.setAttribute("width", A), L.setAttribute("height", P));
        }
      }, y = rv(d, null, t, function(C) {
        u || m(w, C), m(c, C);
      });
      y && y.width && y.height && (h = h || y.width, v = v || y.height);
    }
    c = qe("image", "img", {
      href: d,
      width: h,
      height: v
    }), o.width = h, o.height = v;
  } else i.svgElement && (c = ce(i.svgElement), o.width = i.svgWidth, o.height = i.svgHeight);
  if (c) {
    var _, S;
    u ? _ = S = 1 : l ? (S = 1, _ = o.width / a.width) : f ? (_ = 1, S = o.height / a.height) : o.patternUnits = "userSpaceOnUse", _ != null && !isNaN(_) && (o.width = _), S != null && !isNaN(S) && (o.height = S);
    var b = G0(i);
    b && (o.patternTransform = b);
    var w = qe("pattern", "", o, [c]), T = Dd(w), x = n.patternCache, D = x[T];
    D || (D = n.zrId + "-p" + n.patternIdx++, x[T] = D, o.id = D, w = n.defs[D] = qe("pattern", D, o, [c])), e[r] = vl(D);
  }
}
function rk(t, e, r) {
  var n = r.clipPathCache, i = r.defs, a = n[t.id];
  if (!a) {
    a = r.zrId + "-c" + r.clipPathIdx++;
    var o = {
      id: a
    };
    n[t.id] = a, i[a] = qe("clipPath", a, o, [tw(t, r)]);
  }
  e["clip-path"] = vl(a);
}
function a0(t) {
  return document.createTextNode(t);
}
function ri(t, e, r) {
  t.insertBefore(e, r);
}
function o0(t, e) {
  t.removeChild(e);
}
function s0(t, e) {
  t.appendChild(e);
}
function iw(t) {
  return t.parentNode;
}
function aw(t) {
  return t.nextSibling;
}
function mc(t, e) {
  t.textContent = e;
}
var u0 = 58, nk = 120, ik = qe("", "");
function Zh(t) {
  return t === void 0;
}
function mr(t) {
  return t !== void 0;
}
function ak(t, e, r) {
  for (var n = {}, i = e; i <= r; ++i) {
    var a = t[i].key;
    a !== void 0 && (process.env.NODE_ENV !== "production" && n[a] != null && console.error("Duplicate key " + a), n[a] = i);
  }
  return n;
}
function io(t, e) {
  var r = t.key === e.key, n = t.tag === e.tag;
  return n && r;
}
function Vo(t) {
  var e, r = t.children, n = t.tag;
  if (mr(n)) {
    var i = t.elm = Kb(n);
    if (Id(ik, t), $(r))
      for (e = 0; e < r.length; ++e) {
        var a = r[e];
        a != null && s0(i, Vo(a));
      }
    else mr(t.text) && !J(t.text) && s0(i, a0(t.text));
  } else
    t.elm = a0(t.text);
  return t.elm;
}
function ow(t, e, r, n, i) {
  for (; n <= i; ++n) {
    var a = r[n];
    a != null && ri(t, Vo(a), e);
  }
}
function ol(t, e, r, n) {
  for (; r <= n; ++r) {
    var i = e[r];
    if (i != null)
      if (mr(i.tag)) {
        var a = iw(i.elm);
        o0(a, i.elm);
      } else
        o0(t, i.elm);
  }
}
function Id(t, e) {
  var r, n = e.elm, i = t && t.attrs || {}, a = e.attrs || {};
  if (i !== a) {
    for (r in a) {
      var o = a[r], s = i[r];
      s !== o && (o === !0 ? n.setAttribute(r, "") : o === !1 ? n.removeAttribute(r) : r === "style" ? n.style.cssText = o : r.charCodeAt(0) !== nk ? n.setAttribute(r, o) : r === "xmlns:xlink" || r === "xmlns" ? n.setAttributeNS(V2, r, o) : r.charCodeAt(3) === u0 ? n.setAttributeNS(F2, r, o) : r.charCodeAt(5) === u0 ? n.setAttributeNS(qb, r, o) : n.setAttribute(r, o));
    }
    for (r in i)
      r in a || n.removeAttribute(r);
  }
}
function ok(t, e, r) {
  for (var n = 0, i = 0, a = e.length - 1, o = e[0], s = e[a], u = r.length - 1, l = r[0], f = r[u], c, h, v, d; n <= a && i <= u; )
    o == null ? o = e[++n] : s == null ? s = e[--a] : l == null ? l = r[++i] : f == null ? f = r[--u] : io(o, l) ? (Wi(o, l), o = e[++n], l = r[++i]) : io(s, f) ? (Wi(s, f), s = e[--a], f = r[--u]) : io(o, f) ? (Wi(o, f), ri(t, o.elm, aw(s.elm)), o = e[++n], f = r[--u]) : io(s, l) ? (Wi(s, l), ri(t, s.elm, o.elm), s = e[--a], l = r[++i]) : (Zh(c) && (c = ak(e, n, a)), h = c[l.key], Zh(h) ? ri(t, Vo(l), o.elm) : (v = e[h], v.tag !== l.tag ? ri(t, Vo(l), o.elm) : (Wi(v, l), e[h] = void 0, ri(t, v.elm, o.elm))), l = r[++i]);
  (n <= a || i <= u) && (n > a ? (d = r[u + 1] == null ? null : r[u + 1].elm, ow(t, d, r, i, u)) : ol(t, e, n, a));
}
function Wi(t, e) {
  var r = e.elm = t.elm, n = t.children, i = e.children;
  t !== e && (Id(t, e), Zh(e.text) ? mr(n) && mr(i) ? n !== i && ok(r, n, i) : mr(i) ? (mr(t.text) && mc(r, ""), ow(r, null, i, 0, i.length - 1)) : mr(n) ? ol(r, n, 0, n.length - 1) : mr(t.text) && mc(r, "") : t.text !== e.text && (mr(n) && ol(r, n, 0, n.length - 1), mc(r, e.text)));
}
function sk(t, e) {
  if (io(t, e))
    Wi(t, e);
  else {
    var r = t.elm, n = iw(r);
    Vo(e), n !== null && (ri(n, e.elm, aw(r)), ol(n, [t], 0, 0));
  }
  return e;
}
var uk = 0, lk = function() {
  function t(e, r, n) {
    if (this.type = "svg", this.configLayer = fk("configLayer"), this.storage = r, this._opts = n = z({}, n), this.root = e, this._id = "zr" + uk++, this._oldVNode = jy(n.width, n.height), e && !n.ssr) {
      var i = this._viewport = document.createElement("div");
      i.style.cssText = "position:relative;overflow:hidden";
      var a = this._svgDom = this._oldVNode.elm = Kb("svg");
      Id(null, this._oldVNode), i.appendChild(a), e.appendChild(i);
    }
    this.resize(n.width, n.height);
  }
  return t.prototype.getType = function() {
    return this.type;
  }, t.prototype.getViewportRoot = function() {
    return this._viewport;
  }, t.prototype.getViewportRootOffset = function() {
    var e = this.getViewportRoot();
    if (e)
      return {
        offsetLeft: e.offsetLeft || 0,
        offsetTop: e.offsetTop || 0
      };
  }, t.prototype.getSvgDom = function() {
    return this._svgDom;
  }, t.prototype.refresh = function() {
    if (this.root) {
      var e = this.renderToVNode({
        willUpdate: !0
      });
      e.attrs.style = "position:absolute;left:0;top:0;user-select:none", sk(this._oldVNode, e), this._oldVNode = e;
    }
  }, t.prototype.renderOneToVNode = function(e) {
    return i0(e, $h(this._id));
  }, t.prototype.renderToVNode = function(e) {
    e = e || {};
    var r = this.storage.getDisplayList(!0), n = this._width, i = this._height, a = $h(this._id);
    a.animation = e.animation, a.willUpdate = e.willUpdate, a.compress = e.compress, a.emphasis = e.emphasis, a.ssr = this._opts.ssr;
    var o = [], s = this._bgVNode = ck(n, i, this._backgroundColor, a);
    s && o.push(s);
    var u = e.compress ? null : this._mainVNode = qe("g", "main", {}, []);
    this._paintList(r, a, u ? u.children : o), u && o.push(u);
    var l = Q(de(a.defs), function(h) {
      return a.defs[h];
    });
    if (l.length && o.push(qe("defs", "defs", {}, l)), e.animation) {
      var f = H2(a.cssNodes, a.cssAnims, { newline: !0 });
      if (f) {
        var c = qe("style", "stl", {}, [], f);
        o.push(c);
      }
    }
    return jy(n, i, o, e.useViewBox);
  }, t.prototype.renderToString = function(e) {
    return e = e || {}, Dd(this.renderToVNode({
      animation: K(e.cssAnimation, !0),
      emphasis: K(e.cssEmphasis, !0),
      willUpdate: !1,
      compress: !0,
      useViewBox: K(e.useViewBox, !0)
    }), { newline: !0 });
  }, t.prototype.setBackgroundColor = function(e) {
    this._backgroundColor = e;
  }, t.prototype.getSvgRoot = function() {
    return this._mainVNode && this._mainVNode.elm;
  }, t.prototype._paintList = function(e, r, n) {
    for (var i = e.length, a = [], o = 0, s, u, l = 0, f = 0; f < i; f++) {
      var c = e[f];
      if (!c.invisible) {
        var h = c.__clipPaths, v = h && h.length || 0, d = u && u.length || 0, p = void 0;
        for (p = Math.max(v - 1, d - 1); p >= 0 && !(h && u && h[p] === u[p]); p--)
          ;
        for (var g = d - 1; g > p; g--)
          o--, s = a[o - 1];
        for (var m = p + 1; m < v; m++) {
          var y = {};
          rk(h[m], y, r);
          var _ = qe("g", "clip-g-" + l++, y, []);
          (s ? s.children : n).push(_), a[o++] = _, s = _;
        }
        u = h;
        var S = i0(c, r);
        S && (s ? s.children : n).push(S);
      }
    }
  }, t.prototype.resize = function(e, r) {
    var n = this._opts, i = this.root, a = this._viewport;
    if (e != null && (n.width = e), r != null && (n.height = r), i && a && (a.style.display = "none", e = ji(i, 0, n), r = ji(i, 1, n), a.style.display = ""), this._width !== e || this._height !== r) {
      if (this._width = e, this._height = r, a) {
        var o = a.style;
        o.width = e + "px", o.height = r + "px";
      }
      if (sv(this._backgroundColor))
        this.refresh();
      else {
        var s = this._svgDom;
        s && (s.setAttribute("width", e), s.setAttribute("height", r));
        var u = this._bgVNode && this._bgVNode.elm;
        u && (u.setAttribute("width", e), u.setAttribute("height", r));
      }
    }
  }, t.prototype.getWidth = function() {
    return this._width;
  }, t.prototype.getHeight = function() {
    return this._height;
  }, t.prototype.dispose = function() {
    this.root && (this.root.innerHTML = ""), this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null;
  }, t.prototype.clear = function() {
    this._svgDom && (this._svgDom.innerHTML = null), this._oldVNode = null;
  }, t.prototype.toDataURL = function(e) {
    var r = this.renderToString(), n = "data:image/svg+xml;";
    return e ? (r = ex(r), r && n + "base64," + r) : n + "charset=UTF-8," + encodeURIComponent(r);
  }, t;
}();
function fk(t) {
  return function() {
    process.env.NODE_ENV !== "production" && Fr('In SVG mode painter not support method "' + t + '"');
  };
}
function ck(t, e, r, n) {
  var i;
  if (r && r !== "none")
    if (i = qe("rect", "bg", {
      width: t,
      height: e,
      x: "0",
      y: "0"
    }), F0(r))
      rw({ fill: r }, i.attrs, "fill", n);
    else if (sv(r))
      nw({
        style: {
          fill: r
        },
        dirty: it,
        getBoundingRect: function() {
          return { width: t, height: e };
        }
      }, i.attrs, "fill", n);
    else {
      var a = To(r), o = a.color, s = a.opacity;
      i.attrs.fill = o, s < 1 && (i.attrs["fill-opacity"] = s);
    }
  return i;
}
function hk(t) {
  t.registerPainter("svg", lk);
}
function l0(t, e, r) {
  var n = Pt.createCanvas(), i = e.getWidth(), a = e.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = i * r, n.height = a * r, n;
}
function yc(t) {
  return !t.__cursors.get(O_);
}
function f0(t) {
  var e = t.__cursors.get(O_);
  return {
    startIdx: e ? e.startIdx : 0,
    endIdx: e ? e.endIdx : 0
  };
}
var sw = function(t) {
  X(e, t);
  function e(r, n, i) {
    var a = t.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = Qs, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    i = i || _u, typeof r == "string" ? o = l0(r, n, i) : J(r) && (o = r, r = o.id), a.id = r, a.dom = o;
    var s = o.style;
    return s && (S0(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return e.prototype.afterBrush = function() {
    this.__prevIdx = f0(this);
  }, e.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, e.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, e.prototype.createBackBuffer = function() {
    var r = this.dpr;
    this.domBack = l0("back-" + this.id, this.painter, r), this.ctxBack = this.domBack.getContext("2d"), r !== 1 && this.ctxBack.scale(r, r);
  }, e.prototype.createRepaintRects = function(r, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new ae(0, 0, 0, 0);
    function f(S) {
      if (!(!S.isFinite() || S.isZero()))
        if (o.length === 0) {
          var b = new ae(0, 0, 0, 0);
          b.copy(S), o.push(b);
        } else {
          for (var w = !1, T = 1 / 0, x = 0, D = 0; D < o.length; ++D) {
            var C = o[D];
            if (C.intersect(S)) {
              var E = new ae(0, 0, 0, 0);
              E.copy(C), E.union(S), o[D] = E, w = !0;
              break;
            } else if (u) {
              l.copy(S), l.union(C);
              var L = S.width * S.height, A = C.width * C.height, P = l.width * l.height, O = P - L - A;
              O < T && (T = O, x = D);
            }
          }
          if (u && (o[x].union(S), w = !0), !w) {
            var b = new ae(0, 0, 0, 0);
            b.copy(S), o.push(b);
          }
          u || (u = o.length >= s);
        }
    }
    for (var c = f0(this), h = c.startIdx; h < c.endIdx; ++h) {
      var v = r[h];
      if (v) {
        var d = v.shouldBePainted(i, a, !0, !0), p = v.__isRendered && (v.__dirty & Mt || !d) ? v.getPrevPaintRect() : null;
        p && f(p);
        var g = d && (v.__dirty & Mt || !v.__isRendered) ? v.getPaintRect() : null;
        g && f(g);
      }
    }
    for (var m = this.__prevIdx, h = m.startIdx; h < m.endIdx; ++h) {
      var v = n[h], d = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!d || !v.__zr) && v.__isRendered) {
        var p = v.getPrevPaintRect();
        p && f(p);
      }
    }
    var y;
    do {
      y = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var _ = h + 1; _ < o.length; )
          o[h].intersect(o[_]) ? (y = !0, o[h].union(o[_]), o.splice(_, 1)) : _++;
        h++;
      }
    } while (y);
    return this._paintRects = o, o;
  }, e.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, e.prototype.resize = function(r, n) {
    var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = r + "px", o.height = n + "px"), a.width = r * i, a.height = n * i, s && (s.width = r * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
  }, e.prototype.clear = function(r, n, i) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    n = n || this.clearColor;
    var l = this.motionBlur && !r, f = this.lastFrameAlpha, c = this.dpr, h = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / c, u / c));
    var v = this.domBack;
    function d(p, g, m, y) {
      if (o.clearRect(p, g, m, y), n && n !== "transparent") {
        var _ = void 0;
        if (ul(n)) {
          var S = n.global || n.__width === m && n.__height === y;
          _ = S && n.__canvasGradient || Lh(o, n, {
            x: 0,
            y: 0,
            width: m,
            height: y
          }), n.__canvasGradient = _, n.__width = m, n.__height = y;
        } else Zw(n) && (n.scaleX = n.scaleX || c, n.scaleY = n.scaleY || c, _ = Ph(o, n, {
          dirty: function() {
            h.setUnpainted(), h.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(p, g, m, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, p, g, m, y), o.restore());
    }
    !i || l ? d(0, 0, s, u) : i.length && M(i, function(p) {
      d(p.x * c, p.y * c, p.width * c, p.height * c);
    });
  }, e;
}(Ar), c0 = 1e5, Jn = 314159, _c = void 0, vk = 1, Sc = 2;
function dk(t) {
  return t ? t.__builtin__ ? !0 : !(typeof t.resize != "function" || typeof t.refresh != "function") : !1;
}
function pk(t, e) {
  var r = document.createElement("div");
  return r.style.cssText = [
    "position:relative",
    "width:" + t + "px",
    "height:" + e + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", r;
}
function h0(t, e, r, n) {
  var i = new sw(t, e, e.dpr);
  return i.zlevel = r, i.zlevel2 = n, i.__builtin__ = !0, uw(i), i;
}
function uw(t) {
  t.__cursorStack = [], t.__cursors = re();
}
function gk(t) {
  return t.startIdx = t.drawIdx = t.endIdx = t.endIdxNew = 0, t.used = !1, t.first = t.last = NaN, t.notClearIdx = -1, t;
}
function mk(t, e) {
  var r = t.__cursors, n = +e;
  return r.get(n) || (t.__cursorStack.push(n), r.set(n, gk({ key: n })));
}
function Ws(t, e) {
  for (var r = t.__cursorStack, n = 0; n < r.length; n++)
    e(t.__cursors.get(r[n]));
}
function bc(t, e) {
  var r = t.layers;
  return r[e] || (r[e] = new Array(3));
}
function ft(t, e, r) {
  for (var n = t.layerStack, i = 0; i < n.length; i++) {
    var a = n[i].zl, o = n[i].zl2, s = t.layers[a][o];
    (!r || (!(r & So) || s.__builtin__) && (!(r & qh) || !s.__builtin__) && (!(r & lw) || s !== t.hoverlayer)) && e(s, a, o, i);
  }
}
var So = 1, qh = 2, lw = 4, Ys = So | lw, yk = function() {
  function t(e, r, n, i) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !e.nodeName || e.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = z({}, n || {}), this.dpr = n.devicePixelRatio || _u, this._singleCanvas = a, this.root = e;
    var o = e.style;
    if (o && (S0(e), e.innerHTML = ""), this.storage = r, this._prevDisplayList = [], a) {
      var u = e, l = u.width, f = u.height;
      n.width != null && (l = n.width), n.height != null && (f = n.height), this.dpr = n.devicePixelRatio || 1, u.width = l * this.dpr, u.height = f * this.dpr, this._width = l, this._height = f;
      var c = h0(u, this, Jn, Qs);
      c.initContext(), this._insertLayer(c, Jn, Qs, !0), this._domRoot = e;
    } else {
      this._width = ji(e, 0, n), this._height = ji(e, 1, n);
      var s = this._domRoot = pk(this._width, this._height);
      e.appendChild(s);
    }
  }
  return t.prototype.getType = function() {
    return "canvas";
  }, t.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, t.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, t.prototype.getViewportRootOffset = function() {
    var e = this.getViewportRoot();
    if (e)
      return {
        offsetLeft: e.offsetLeft || 0,
        offsetTop: e.offsetTop || 0
      };
  }, t.prototype.refresh = function(e) {
    var r;
    e && !J(e) ? r = { paintAll: !!e } : r = e || {};
    var n = K(r.refresh, !0), i = K(r.refreshHover, !1);
    if (i && (this._hoverLayerDirty = Sc), !n)
      return i && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, r.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return ft(this._i, function(u, l, f, c) {
      u.refresh && u.refresh(c === 0 ? s : null);
    }, qh), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, t.prototype._paintHoverList = function(e) {
    var r = this._i.hoverlayer, n = this._hoverLayerDirty;
    if (this._hoverLayerDirty = _c, n !== _c && (!r && n === Sc && (r = this._i.hoverlayer = this._ensureLayer(c0)), !!r)) {
      r.clear();
      for (var i = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, a, o = 0, s = e.length; o < s; o++) {
        var u = e[o];
        if (u.__inHover) {
          a || (a = r.ctx, a.save());
          var l = u.__hoverStyle, f = void 0;
          l && (f = u.style, u.style = l), oi(a, u, i), l && (u.style = f);
        }
      }
      a && (na(a, i), a.restore());
    }
  }, t.prototype.getHoverLayer = function() {
    return this._ensureLayer(c0);
  }, t.prototype.paintOne = function(e, r) {
    lb(e, r);
  }, t.prototype._paintList = function(e, r, n) {
    if (this._redrawId === n) {
      var i = this._doPaintList(e, r);
      if (this._needsManuallyCompositing && this._compositeManually(), i)
        ft(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, Ys), this._paintHoverList(e);
      else {
        var a = this;
        ju(function() {
          a._paintList(e, r, n);
        });
      }
    }
  }, t.prototype._compositeManually = function() {
    var e = this._ensureLayer(Jn).ctx, r = this._domRoot.width, n = this._domRoot.height;
    e.clearRect(0, 0, r, n), ft(this._i, function(i) {
      i.virtual && e.drawImage(i.dom, 0, 0, r, n);
    }, So);
  }, t.prototype._doPaintList = function(e, r) {
    var n = this, i = !0;
    return ft(this._i, function(a) {
      var o = !1;
      if (Ws(a, function(c) {
        (c.drawIdx < c.endIdx || c.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = n._opts.useDirtyRect && !yc(a) ? a.createRepaintRects(e, r, n._width, n._height) : null, u = n._i.layerStack[0], l = !0;
        if (a.__dirty) {
          l = !1, a.__dirty = !1;
          var f = a.zlevel === u.zl && a.zlevel2 === u.zl2 ? n._backgroundColor : null;
          a.clear(!1, f, s);
        }
        Ws(a, function(c) {
          var h = n._paintPerCursor(a, c, e, s, l);
          i = i && h;
        });
      }
    }, Ys), le.wxa && ft(this._i, function(a) {
      a && a.ctx && a.ctx.draw && a.ctx.draw();
    }), i;
  }, t.prototype._paintPerCursor = function(e, r, n, i, a) {
    var o = e.ctx;
    if (i)
      if (!i.length)
        r.drawIdx = r.endIdx;
      else
        for (var s = this.dpr, u = 0; u < i.length; ++u) {
          var l = i[u];
          o.save(), o.beginPath(), o.rect(l.x * s, l.y * s, l.width * s, l.height * s), o.clip(), this._paintPerCursorInRect(e, r, n, l, a), o.restore();
        }
    else
      o.save(), this._paintPerCursorInRect(e, r, n, null, a), o.restore();
    return r.drawIdx >= r.endIdx;
  }, t.prototype._paintPerCursorInRect = function(e, r, n, i, a) {
    for (var o = {
      inHover: !1,
      allClipped: !1,
      prevEl: null,
      viewWidth: this._width,
      viewHeight: this._height,
      beforeBrushParam: { contentRetained: a }
    }, s = e.ctx, u = yc(e), l = u && Pt.getTime(), f = r.drawIdx, c = r.notClearIdx, h = c >= 0 ? Math.min(c, f) : f; h < r.endIdx; h++) {
      var v = n[h];
      if (!(h < f && !v.notClear)) {
        if (v.__inHover && (this._hoverLayerDirty = Sc), i != null) {
          var d = v.getPaintRect();
          d && d.intersect(i) && (oi(s, v, o), v.setPrevPaintRect(d));
        } else
          oi(s, v, o);
        if (u) {
          var p = Pt.getTime() - l;
          if (p > 15) {
            h++;
            break;
          }
        }
      }
    }
    na(s, o), r.drawIdx = Math.max(h, f);
  }, t.prototype.getLayer = function(e, r) {
    return this._ensureLayer(e, 0, r);
  }, t.prototype._ensureLayer = function(e, r, n) {
    r = r || 0;
    var i = this._singleCanvas;
    i && !this._needsManuallyCompositing && (e = Jn, r = 0);
    var a = bc(this._i, e)[r];
    return a || (a = h0("zr_" + e + "." + r, this, e, r), this._layerConfig[e] && De(a, this._layerConfig[e], !0), (n || i && e !== Jn) && (a.virtual = !0), this._insertLayer(a, e, r, !1), a.initContext()), a;
  }, t.prototype.insertLayer = function(e, r) {
    this._insertLayer(r, e, 0, !1);
  }, t.prototype._insertLayer = function(e, r, n, i) {
    var a = this._i, o = a.layers, s = a.layerStack, u = this._domRoot, l = null;
    if (o[r] && o[r][n]) {
      process.env.NODE_ENV !== "production" && Fr("ZLevel " + r + "." + n + " has been used already");
      return;
    }
    if (!dk(e)) {
      process.env.NODE_ENV !== "production" && Fr("Layer of zlevel " + r + " is not valid");
      return;
    }
    for (var f = s.length, c = 0; c < f && (s[c].zl < r || s[c].zl === r && s[c].zl2 < n); )
      c++;
    if (c > 0 && (l = bc(a, s[c - 1].zl)[s[c - 1].zl2]), s.splice(c, 0, { zl: r, zl2: n }), bc(a, r)[n] = e, !i && !e.virtual)
      if (l) {
        var h = l.dom;
        h.nextSibling ? u.insertBefore(e.dom, h.nextSibling) : u.appendChild(e.dom);
      } else
        u.firstChild ? u.insertBefore(e.dom, u.firstChild) : u.appendChild(e.dom);
    e.painter || (e.painter = this);
  }, t.prototype.eachLayer = function(e, r) {
    return ft(this._i, function(n, i) {
      e.call(r, n, i);
    });
  }, t.prototype.eachBuiltinLayer = function(e, r) {
    return ft(this._i, function(n, i) {
      e.call(r, n, i);
    }, So);
  }, t.prototype.eachOtherLayer = function(e, r) {
    return ft(this._i, function(n, i) {
      e.call(r, n, i);
    }, qh);
  }, t.prototype.getLayers = function() {
    var e = {};
    return ft(this._i, function(r, n, i) {
      e[r.id] = r;
    }), e;
  }, t.prototype._updateLayerStatus = function(e, r) {
    var n = this;
    if (n._singleCanvas)
      for (var i = 1; i < e.length; i++) {
        var a = e[i];
        if (a.zlevel !== e[i - 1].zlevel || a.incremental) {
          n._needsManuallyCompositing = !0;
          break;
        }
      }
    ft(n._i, function(g) {
      g.__dirty = !1, Ws(g, function(m) {
        m.used = !1, m.endIdxNew = 0, m.notClearIdx = -1;
      });
    }, Ys);
    for (var o, s = null, u = null, l = !1, f = 0, c = e.length; f < c; f++) {
      var a = e[f], h = a.zlevel, v = a.incremental, d = void 0;
      if (o !== h && (o = h, l = !1), v ? (l = !0, d = bD) : d = l ? SD : Qs, (!s || h !== s.zlevel || d !== s.zlevel2) && (s = n._ensureLayer(h, d), u = null, !s.__builtin__)) {
        Fr("ZLevel " + h + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!u || v !== u.key) && (u = mk(s, v), !u.used))
        if (u.used = !0, !r && u.first === a.id) {
          var p = f - u.startIdx;
          u.startIdx = f, u.drawIdx += p, u.endIdx += p;
        } else
          s.__dirty = !0, u.first = a.id, u.startIdx = u.drawIdx = f, u.endIdx = f + 1;
      u.endIdxNew = f + 1, a.__dirty & Mt && !a.__inHover && ((!v || !a.notClear && f < u.drawIdx) && (s.__dirty = !0), v && a.notClear && u.notClearIdx < 0 && (u.notClearIdx = f));
    }
    ft(n._i, function(g) {
      for (var m = g.__cursorStack, y = g.__cursors, _ = m.length - 1; _ >= 0; _--) {
        var S = y.get(m[_]);
        if (!S.used)
          g.__dirty = !0, y.removeKey(m[_]), m.splice(_, 1);
        else {
          var b = S.endIdxNew;
          (yc(g) ? b < S.drawIdx : b !== S.endIdx || !b || e[b - 1].id !== S.last) && (g.__dirty = !0), S.endIdx = S.endIdxNew, S.last = b ? e[b - 1].id : NaN;
        }
      }
      g.__dirty && (Ws(g, function(w) {
        w.drawIdx = w.startIdx;
      }), n._hoverLayerDirty === _c && (n._hoverLayerDirty = vk));
    }, Ys);
  }, t.prototype.clear = function() {
    return ft(this._i, function(e) {
      e.clear(), uw(e);
    }, So), this;
  }, t.prototype.setBackgroundColor = function(e) {
    this._backgroundColor = e, ft(this._i, function(r) {
      r.setUnpainted();
    });
  }, t.prototype.configLayer = function(e, r) {
    if (r) {
      var n = this._layerConfig;
      n[e] ? De(n[e], r, !0) : n[e] = r, ft(this._i, function(i, a) {
        De(i, n[a], !0);
      });
    }
  }, t.prototype.delLayer = function(e) {
    for (var r = this._i.layerStack, n = this._i.layers, i = r.length - 1; i >= 0; i--) {
      var a = r[i];
      if (a.zl === e) {
        var o = n[e][a.zl2];
        if (o.__builtin__)
          continue;
        if (r.splice(i, 1), n[e][a.zl2] = void 0, !o.virtual) {
          var s = o.dom.parentNode;
          s && s.removeChild(o.dom);
        }
      }
    }
  }, t.prototype.resize = function(e, r) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      e != null && (i.width = e), r != null && (i.height = r), e = ji(a, 0, i), r = ji(a, 1, i), n.style.display = "", (this._width !== e || r !== this._height) && (n.style.width = e + "px", n.style.height = r + "px", ft(this._i, function(o) {
        o.resize(e, r);
      }), this.refresh({ paintAll: !0 })), this._width = e, this._height = r;
    } else {
      if (e == null || r == null)
        return;
      this._width = e, this._height = r, this._ensureLayer(Jn).resize(e, r);
    }
    return this;
  }, t.prototype.clearLayer = function(e) {
    M(this._i.layers[e], function(r) {
      r && !r.__builtin__ && r.clear();
    });
  }, t.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, t.prototype.getRenderedCanvas = function(e) {
    if (e = e || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[Jn][0].dom;
    var r = new sw("image", this, e.pixelRatio || this.dpr);
    r.initContext(), r.clear(!1, e.backgroundColor || this._backgroundColor);
    var n = r.ctx;
    if (e.pixelRatio <= this.dpr) {
      this.refresh();
      var i = r.dom.width, a = r.dom.height;
      ft(this._i, function(c) {
        c.__builtin__ ? n.drawImage(c.dom, 0, 0, i, a) : c.renderToCanvas && (n.save(), c.renderToCanvas(n), n.restore());
      });
    } else {
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        oi(n, f, o);
      }
      na(n, o);
    }
    return r.dom;
  }, t.prototype.getWidth = function() {
    return this._width;
  }, t.prototype.getHeight = function() {
    return this._height;
  }, t;
}();
function _k(t) {
  t.registerPainter("canvas", yk);
}
xn([
  fP,
  yI,
  LP,
  jR,
  L2,
  S2,
  m2,
  _k,
  hk
]);
const Sk = Iw(
  function({
    id: e,
    className: r,
    style: n,
    option: i,
    notMerge: a = !1,
    lazyUpdate: o = !1,
    renderer: s = "canvas"
  }, u) {
    const l = Ud(null), f = Ud(null);
    return Lw(
      u,
      () => ({ getInstance: () => f.current }),
      []
    ), Wd(() => {
      const c = l.current;
      if (!c) return;
      const h = kN(c, void 0, { renderer: s });
      f.current = h;
      const v = () => h.resize();
      if (typeof ResizeObserver < "u") {
        const d = new ResizeObserver(v);
        return d.observe(c), v(), () => {
          d.disconnect(), h.dispose(), f.current = null;
        };
      }
      return window.addEventListener("resize", v), v(), () => {
        window.removeEventListener("resize", v), h.dispose(), f.current = null;
      };
    }, [s]), Wd(() => {
      var c;
      i && ((c = f.current) == null || c.setOption(i, a, o));
    }, [o, a, i, s]), /* @__PURE__ */ Nw.jsx(
      "div",
      {
        id: e,
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
Sk.displayName = "DashEChartsX";
export {
  Sk as DashEChartsX
};
