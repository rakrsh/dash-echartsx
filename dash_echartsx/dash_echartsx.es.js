import e, { forwardRef as t, useEffect as n, useImperativeHandle as r, useRef as i, useState as a } from "react";
//#region \0rolldown/runtime.js
var o = Object.defineProperty, s = (e, t) => {
	let n = {};
	for (var r in e) o(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || o(n, Symbol.toStringTag, { value: "Module" }), n;
}, c = function(e, t) {
	return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, c(e, t);
};
function l(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	c(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var u = "12px sans-serif", d = 20, f = 100, p = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function m(e) {
	var t = {};
	if (typeof JSON > "u") return t;
	for (var n = 0; n < e.length; n++) {
		var r = String.fromCharCode(n + 32);
		t[r] = (e.charCodeAt(n) - d) / f;
	}
	return t;
}
var h = m(p), g = {
	createCanvas: function() {
		return typeof document < "u" && document.createElement("canvas");
	},
	measureText: (function() {
		var e, t;
		return function(n, r) {
			if (!e) {
				var i = g.createCanvas();
				e = i && i.getContext("2d");
			}
			if (e) return t !== r && (t = e.font = r || "12px sans-serif"), e.measureText(n);
			n ||= "", r ||= "12px sans-serif";
			var a = /((?:\d+)?\.?\d*)px/.exec(r), o = a && +a[1] || 12, s = 0;
			if (r.indexOf("mono") >= 0) s = o * n.length;
			else for (var c = 0; c < n.length; c++) {
				var l = h[n[c]];
				s += l == null ? o : l * o;
			}
			return { width: s };
		};
	})(),
	loadImage: function(e, t, n) {
		var r = new Image();
		return r.onload = t, r.onerror = n, r.src = e, r;
	},
	getTime: function() {
		return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
	}
};
function _(e) {
	for (var t in g) g.hasOwnProperty(t) && e[t] && (g[t] = e[t]);
}
//#endregion
//#region node_modules/zrender/lib/core/util.js
var v = /* @__PURE__ */ s({
	EPSILON: () => Be,
	HashMap: () => Pe,
	RADIAN_TO_DEGREE: () => ze,
	assert: () => Ee,
	assignProps: () => ie,
	bind: () => B,
	clone: () => j,
	concatArray: () => Fe,
	createCanvas: () => ae,
	createHashMap: () => K,
	createObject: () => Ie,
	curry: () => fe,
	defaults: () => P,
	disableUserSelect: () => Le,
	each: () => I,
	eqNaN: () => xe,
	extend: () => N,
	filter: () => le,
	find: () => ue,
	guid: () => te,
	hasOwn: () => q,
	indexOf: () => F,
	inherits: () => oe,
	isArray: () => V,
	isArrayLike: () => ce,
	isBuiltInObject: () => he,
	isDom: () => _e,
	isFunction: () => H,
	isGradientObject: () => ve,
	isImagePatternObject: () => ye,
	isNumber: () => me,
	isObject: () => W,
	isPrimitive: () => Ae,
	isRegExp: () => be,
	isString: () => U,
	isStringSafe: () => pe,
	isTypedArray: () => ge,
	keys: () => z,
	logError: () => ne,
	map: () => L,
	merge: () => M,
	mergeAll: () => re,
	mixin: () => se,
	noop: () => Re,
	normalizeCssArray: () => Te,
	reduce: () => R,
	retrieve: () => Se,
	retrieve2: () => G,
	retrieve3: () => Ce,
	setAsPrimitive: () => ke,
	slice: () => we,
	trim: () => De
}), y = R([
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
}, {}), b = R([
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
}, {}), x = Object.prototype.toString, S = Array.prototype, C = S.forEach, w = S.filter, T = S.slice, E = S.map, D = function() {}.constructor, O = D ? D.prototype : null, k = "__proto__", A = 2311, ee = 2 ** 53 - 1;
function te() {
	return A >= ee && (A = 0), A++;
}
function ne() {
	var e = [...arguments];
	typeof console < "u" && console.error.apply(console, e);
}
function j(e) {
	if (typeof e != "object" || !e) return e;
	var t = e, n = x.call(e);
	if (n === "[object Array]") {
		if (!Ae(e)) {
			t = [];
			for (var r = 0, i = e.length; r < i; r++) t[r] = j(e[r]);
		}
	} else if (b[n]) {
		if (!Ae(e)) {
			var a = e.constructor;
			if (a.from) t = a.from(e);
			else {
				t = new a(e.length);
				for (var r = 0, i = e.length; r < i; r++) t[r] = e[r];
			}
		}
	} else if (!y[n] && !Ae(e) && !_e(e)) for (var o in t = {}, e) e.hasOwnProperty(o) && o !== k && (t[o] = j(e[o]));
	return t;
}
function M(e, t, n) {
	if (!W(t) || !W(e)) return n ? j(t) : e;
	for (var r in t) if (t.hasOwnProperty(r) && r !== k) {
		var i = e[r], a = t[r];
		W(a) && W(i) && !V(a) && !V(i) && !_e(a) && !_e(i) && !he(a) && !he(i) && !Ae(a) && !Ae(i) ? M(i, a, n) : (n || !(r in e)) && (e[r] = j(t[r]));
	}
	return e;
}
function re(e, t) {
	for (var n = e[0], r = 1, i = e.length; r < i; r++) n = M(n, e[r], t);
	return n;
}
function N(e, t) {
	if (Object.assign) Object.assign(e, t);
	else for (var n in t) t.hasOwnProperty(n) && n !== k && (e[n] = t[n]);
	return e;
}
function ie(e, t, n) {
	e ||= {};
	for (var r = 0; r < n.length; r++) {
		var i = n[r];
		e[i] = t[i];
	}
	return e;
}
function P(e, t, n) {
	for (var r = z(t), i = 0, a = r.length; i < a; i++) {
		var o = r[i];
		(n ? t[o] != null : e[o] == null) && (e[o] = t[o]);
	}
	return e;
}
var ae = g.createCanvas;
function F(e, t) {
	if (e) {
		if (e.indexOf) return e.indexOf(t);
		for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
	}
	return -1;
}
function oe(e, t) {
	var n = e.prototype;
	function r() {}
	for (var i in r.prototype = t.prototype, e.prototype = new r(), n) n.hasOwnProperty(i) && (e.prototype[i] = n[i]);
	e.prototype.constructor = e, e.superClass = t;
}
function se(e, t, n) {
	if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames) for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
		var a = r[i];
		a !== "constructor" && (n ? t[a] != null : e[a] == null) && (e[a] = t[a]);
	}
	else P(e, t, n);
}
function ce(e) {
	return !e || typeof e == "string" ? !1 : typeof e.length == "number";
}
function I(e, t, n) {
	if (e && t) {
		if (e.forEach && e.forEach === C) e.forEach(t, n);
		else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
		else for (var a in e) e.hasOwnProperty(a) && t.call(n, e[a], a, e);
	}
}
function L(e, t, n) {
	if (!e) return [];
	if (!t) return we(e);
	if (e.map && e.map === E) return e.map(t, n);
	for (var r = [], i = 0, a = e.length; i < a; i++) r.push(t.call(n, e[i], i, e));
	return r;
}
function R(e, t, n, r) {
	if (e && t) {
		for (var i = 0, a = e.length; i < a; i++) n = t.call(r, n, e[i], i, e);
		return n;
	}
}
function le(e, t, n) {
	if (!e) return [];
	if (!t) return we(e);
	if (e.filter && e.filter === w) return e.filter(t, n);
	for (var r = [], i = 0, a = e.length; i < a; i++) t.call(n, e[i], i, e) && r.push(e[i]);
	return r;
}
function ue(e, t, n) {
	if (e && t) {
		for (var r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e)) return e[r];
	}
}
function z(e) {
	if (!e) return [];
	if (Object.keys) return Object.keys(e);
	var t = [];
	for (var n in e) e.hasOwnProperty(n) && t.push(n);
	return t;
}
function de(e, t) {
	var n = [...arguments].slice(2);
	return function() {
		return e.apply(t, n.concat(T.call(arguments)));
	};
}
var B = O && H(O.bind) ? O.call.bind(O.bind) : de;
function fe(e) {
	var t = [...arguments].slice(1);
	return function() {
		return e.apply(this, t.concat(T.call(arguments)));
	};
}
function V(e) {
	return Array.isArray ? Array.isArray(e) : x.call(e) === "[object Array]";
}
function H(e) {
	return typeof e == "function";
}
function U(e) {
	return typeof e == "string";
}
function pe(e) {
	return x.call(e) === "[object String]";
}
function me(e) {
	return typeof e == "number";
}
function W(e) {
	var t = typeof e;
	return t === "function" || !!e && t === "object";
}
function he(e) {
	return !!y[x.call(e)];
}
function ge(e) {
	return !!b[x.call(e)];
}
function _e(e) {
	return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object";
}
function ve(e) {
	return e.colorStops != null;
}
function ye(e) {
	return e.image != null;
}
function be(e) {
	return x.call(e) === "[object RegExp]";
}
function xe(e) {
	return e !== e;
}
function Se() {
	for (var e = [...arguments], t = 0, n = e.length; t < n; t++) if (e[t] != null) return e[t];
}
function G(e, t) {
	return e ?? t;
}
function Ce(e, t, n) {
	return e ?? t ?? n;
}
function we(e) {
	var t = [...arguments].slice(1);
	return T.apply(e, t);
}
function Te(e) {
	if (typeof e == "number") return [
		e,
		e,
		e,
		e
	];
	var t = e.length;
	return t === 2 ? [
		e[0],
		e[1],
		e[0],
		e[1]
	] : t === 3 ? [
		e[0],
		e[1],
		e[2],
		e[1]
	] : e;
}
function Ee(e, t) {
	if (!e) throw Error(t);
}
function De(e) {
	return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Oe = "__ec_primitive__";
function ke(e) {
	e[Oe] = !0;
}
function Ae(e) {
	return e[Oe];
}
var je = function() {
	function e() {
		this.data = {};
	}
	return e.prototype.delete = function(e) {
		var t = this.has(e);
		return t && delete this.data[e], t;
	}, e.prototype.has = function(e) {
		return this.data.hasOwnProperty(e);
	}, e.prototype.get = function(e) {
		return this.data[e];
	}, e.prototype.set = function(e, t) {
		return this.data[e] = t, this;
	}, e.prototype.keys = function() {
		return z(this.data);
	}, e.prototype.forEach = function(e) {
		var t = this.data;
		for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
	}, e;
}(), Me = typeof Map == "function";
function Ne() {
	return Me ? /* @__PURE__ */ new Map() : new je();
}
var Pe = function() {
	function e(t) {
		var n = V(t);
		this.data = Ne();
		var r = this;
		t instanceof e ? t.each(i) : t && I(t, i);
		function i(e, t) {
			n ? r.set(e, t) : r.set(t, e);
		}
	}
	return e.prototype.hasKey = function(e) {
		return this.data.has(e);
	}, e.prototype.get = function(e) {
		return this.data.get(e);
	}, e.prototype.set = function(e, t) {
		return this.data.set(e, t), t;
	}, e.prototype.each = function(e, t) {
		this.data.forEach(function(n, r) {
			e.call(t, n, r);
		});
	}, e.prototype.keys = function() {
		var e = this.data.keys();
		return Me ? Array.from(e) : e;
	}, e.prototype.removeKey = function(e) {
		this.data.delete(e);
	}, e;
}();
function K(e) {
	return new Pe(e);
}
function Fe(e, t) {
	for (var n = new e.constructor(e.length + t.length), r = 0; r < e.length; r++) n[r] = e[r];
	for (var i = e.length, r = 0; r < t.length; r++) n[r + i] = t[r];
	return n;
}
function Ie(e, t) {
	var n;
	if (Object.create) n = Object.create(e);
	else {
		var r = function() {};
		r.prototype = e, n = new r();
	}
	return t && N(n, t), n;
}
function Le(e) {
	var t = e.style;
	t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function q(e, t) {
	return e.hasOwnProperty(t);
}
function Re() {}
var ze = 180 / Math.PI, Be = 2 ** -52 || 2 ** -52, Ve = function() {
	function e() {
		this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
	}
	return e;
}(), J = new (function() {
	function e() {
		this.browser = new Ve(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
	}
	return e;
}())();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (J.wxa = !0, J.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? J.worker = !0 : !J.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (J.node = !0, J.svgSupported = !0) : He(navigator.userAgent, J);
function He(e, t) {
	var n = t.browser, r = e.match(/Firefox\/([\d.]+)/), i = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/), a = e.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(e);
	if (r && (n.firefox = !0, n.version = r[1]), i && (n.ie = !0, n.version = i[1]), a && (n.edge = !0, n.version = a[1], n.newEdge = +a[1].split(".")[0] > 18), o && (n.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge, t.pointerEventsSupported = "onpointerdown" in window && (n.edge || n.ie && +n.version >= 11), t.domSupported = typeof document < "u") {
		var s = document.documentElement.style;
		t.transform3dSupported = (n.ie && "transition" in s || n.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || n.ie && +n.version >= 9;
	}
}
//#endregion
//#region node_modules/echarts/lib/util/clazz.js
var Ue = ".", We = "___EC__COMPONENT__CONTAINER___", Ge = "___EC__EXTENDED_CLASS___";
function Ke(e) {
	var t = {
		main: "",
		sub: ""
	};
	if (e) {
		var n = e.split(Ue);
		t.main = n[0] || "", t.sub = n[1] || "";
	}
	return t;
}
function qe(e) {
	Ee(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), "componentType \"" + e + "\" illegal");
}
function Je(e) {
	return !!(e && e[Ge]);
}
function Ye(e, t) {
	e.$constructor = e, e.extend = function(e) {
		var t = this, n;
		return Xe(t) ? n = function(e) {
			l(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			return t;
		}(t) : (n = function() {
			(e.$constructor || t).apply(this, arguments);
		}, oe(n, this)), N(n.prototype, e), n[Ge] = !0, n.extend = this.extend, n.superCall = et, n.superApply = tt, n.superClass = t, n;
	};
}
function Xe(e) {
	return H(e) && /^class\s/.test(Function.prototype.toString.call(e));
}
function Ze(e, t) {
	e.extend = t.extend;
}
var Qe = Math.round(Math.random() * 10);
function $e(e) {
	var t = ["__\0is_clz", Qe++].join("_");
	e.prototype[t] = !0, e.isInstance = function(e) {
		return !!(e && e[t]);
	};
}
function et(e, t) {
	var n = [...arguments].slice(2);
	return this.superClass.prototype[t].apply(e, n);
}
function tt(e, t, n) {
	return this.superClass.prototype[t].apply(e, n);
}
function nt(e) {
	var t = {};
	e.registerClass = function(e) {
		var r = e.type || e.prototype.type;
		if (r) {
			qe(r), e.prototype.type = r;
			var i = Ke(r);
			if (!i.sub) t[i.main] = e;
			else if (i.sub !== We) {
				var a = n(i);
				a[i.sub] = e;
			}
		}
		return e;
	}, e.getClass = function(e, n, r) {
		var i = t[e];
		if (i && i[We] && (i = n ? i[n] : null), r && !i) throw Error(n ? "Component " + e + "." + (n || "") + " is used but not imported." : e + ".type should be specified.");
		return i;
	}, e.getClassesByMainType = function(e) {
		var n = Ke(e), r = [], i = t[n.main];
		return i && i[We] ? I(i, function(e, t) {
			t !== We && r.push(e);
		}) : r.push(i), r;
	}, e.hasClass = function(e) {
		return !!t[Ke(e).main];
	}, e.getAllClassMainTypes = function() {
		var e = [];
		return I(t, function(t, n) {
			e.push(n);
		}), e;
	}, e.hasSubTypes = function(e) {
		var n = t[Ke(e).main];
		return n && n[We];
	};
	function n(e) {
		var n = t[e.main];
		return (!n || !n[We]) && (n = t[e.main] = {}, n[We] = !0), n;
	}
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/makeStyleMapper.js
function rt(e, t) {
	for (var n = 0; n < e.length; n++) e[n][1] || (e[n][1] = e[n][0]);
	return t ||= !1, function(n, r, i) {
		for (var a = {}, o = 0; o < e.length; o++) {
			var s = e[o][1];
			if (!(r && F(r, s) >= 0 || i && F(i, s) < 0)) {
				var c = n.getShallow(s, t);
				c != null && (a[e[o][0]] = c);
			}
		}
		return a;
	};
}
var it = rt([
	["fill", "color"],
	["shadowBlur"],
	["shadowOffsetX"],
	["shadowOffsetY"],
	["opacity"],
	["shadowColor"]
]), at = function() {
	function e() {}
	return e.prototype.getAreaStyle = function(e, t) {
		return it(this, e, t);
	}, e;
}(), ot = function() {
	function e(e) {
		this.value = e;
	}
	return e;
}(), st = function() {
	function e() {
		this._len = 0;
	}
	return e.prototype.insert = function(e) {
		var t = new ot(e);
		return this.insertEntry(t), t;
	}, e.prototype.insertEntry = function(e) {
		this.head ? (this.tail.next = e, e.prev = this.tail, e.next = null, this.tail = e) : this.head = this.tail = e, this._len++;
	}, e.prototype.remove = function(e) {
		var t = e.prev, n = e.next;
		t ? t.next = n : this.head = n, n ? n.prev = t : this.tail = t, e.next = e.prev = null, this._len--;
	}, e.prototype.len = function() {
		return this._len;
	}, e.prototype.clear = function() {
		this.head = this.tail = null, this._len = 0;
	}, e;
}(), ct = function() {
	function e(e) {
		this._list = new st(), this._maxSize = 10, this._map = {}, this._maxSize = e;
	}
	return e.prototype.put = function(e, t) {
		var n = this._list, r = this._map, i = null;
		if (r[e] == null) {
			var a = n.len(), o = this._lastRemovedEntry;
			if (a >= this._maxSize && a > 0) {
				var s = n.head;
				n.remove(s), delete r[s.key], i = s.value, this._lastRemovedEntry = s;
			}
			o ? o.value = t : o = new ot(t), o.key = e, n.insertEntry(o), r[e] = o;
		}
		return i;
	}, e.prototype.get = function(e) {
		var t = this._map[e], n = this._list;
		if (t != null) return t !== n.tail && (n.remove(t), n.insertEntry(t)), t.value;
	}, e.prototype.clear = function() {
		this._list.clear(), this._map = {};
	}, e.prototype.len = function() {
		return this._list.len();
	}, e;
}(), lt = new ct(50);
function ut(e) {
	if (typeof e == "string") {
		var t = lt.get(e);
		return t && t.image;
	}
	return e;
}
function dt(e, t, n, r, i) {
	if (!e) return t;
	if (typeof e == "string") {
		if (t && t.__zrImageSrc === e || !n) return t;
		var a = lt.get(e), o = {
			hostEl: n,
			cb: r,
			cbPayload: i
		};
		return a ? (t = a.image, !pt(t) && a.pending.push(o)) : (t = g.loadImage(e, ft, ft), t.__zrImageSrc = e, lt.put(e, t.__cachedImgObj = {
			image: t,
			pending: [o]
		})), t;
	}
	return e;
}
function ft() {
	var e = this.__cachedImgObj;
	this.onload = this.onerror = this.__cachedImgObj = null;
	for (var t = 0; t < e.pending.length; t++) {
		var n = e.pending[t], r = n.cb;
		r && r(this, n.cbPayload), n.hostEl.dirty();
	}
	e.pending.length = 0;
}
function pt(e) {
	return e && e.width && e.height;
}
//#endregion
//#region node_modules/zrender/lib/core/matrix.js
var mt = /* @__PURE__ */ s({
	clone: () => Ct,
	copy: () => _t,
	create: () => ht,
	identity: () => gt,
	invert: () => St,
	mul: () => vt,
	rotate: () => bt,
	scale: () => xt,
	translate: () => yt
});
function ht() {
	return [
		1,
		0,
		0,
		1,
		0,
		0
	];
}
function gt(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
}
function _t(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
}
function vt(e, t, n) {
	var r = t[0] * n[0] + t[2] * n[1], i = t[1] * n[0] + t[3] * n[1], a = t[0] * n[2] + t[2] * n[3], o = t[1] * n[2] + t[3] * n[3], s = t[0] * n[4] + t[2] * n[5] + t[4], c = t[1] * n[4] + t[3] * n[5] + t[5];
	return e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = c, e;
}
function yt(e, t, n) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + n[0], e[5] = t[5] + n[1], e;
}
function bt(e, t, n, r) {
	r === void 0 && (r = [0, 0]);
	var i = t[0], a = t[2], o = t[4], s = t[1], c = t[3], l = t[5], u = Math.sin(n), d = Math.cos(n);
	return e[0] = i * d + s * u, e[1] = -i * u + s * d, e[2] = a * d + c * u, e[3] = -a * u + d * c, e[4] = d * (o - r[0]) + u * (l - r[1]) + r[0], e[5] = d * (l - r[1]) - u * (o - r[0]) + r[1], e;
}
function xt(e, t, n) {
	var r = n[0], i = n[1];
	return e[0] = t[0] * r, e[1] = t[1] * i, e[2] = t[2] * r, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * i, e;
}
function St(e, t) {
	var n = t[0], r = t[2], i = t[4], a = t[1], o = t[3], s = t[5], c = n * o - a * r;
	return c ? (c = 1 / c, e[0] = o * c, e[1] = -a * c, e[2] = -r * c, e[3] = n * c, e[4] = (r * s - o * i) * c, e[5] = (a * i - n * s) * c, e) : null;
}
function Ct(e) {
	var t = ht();
	return _t(t, e), t;
}
//#endregion
//#region node_modules/zrender/lib/core/vector.js
var wt = /* @__PURE__ */ s({
	add: () => kt,
	applyTransform: () => qt,
	clone: () => Dt,
	copy: () => Et,
	create: () => Tt,
	dist: () => Ht,
	distSquare: () => Wt,
	distance: () => Vt,
	distanceSquare: () => Ut,
	div: () => Lt,
	dot: () => Rt,
	len: () => Mt,
	lenSquare: () => Pt,
	length: () => Nt,
	lengthSquare: () => Ft,
	lerp: () => Kt,
	max: () => Yt,
	min: () => Jt,
	mul: () => It,
	negate: () => Gt,
	normalize: () => Bt,
	scale: () => zt,
	scaleAndAdd: () => At,
	set: () => Ot,
	sub: () => jt
});
function Tt(e, t) {
	return e ??= 0, t ??= 0, [e, t];
}
function Et(e, t) {
	return e[0] = t[0], e[1] = t[1], e;
}
function Dt(e) {
	return [e[0], e[1]];
}
function Ot(e, t, n) {
	return e[0] = t, e[1] = n, e;
}
function kt(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e;
}
function At(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e;
}
function jt(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e;
}
function Mt(e) {
	return Math.sqrt(Pt(e));
}
var Nt = Mt;
function Pt(e) {
	return e[0] * e[0] + e[1] * e[1];
}
var Ft = Pt;
function It(e, t, n) {
	return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e;
}
function Lt(e, t, n) {
	return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e;
}
function Rt(e, t) {
	return e[0] * t[0] + e[1] * t[1];
}
function zt(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e;
}
function Bt(e, t) {
	var n = Mt(t);
	return n === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / n, e[1] = t[1] / n), e;
}
function Vt(e, t) {
	return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
}
var Ht = Vt;
function Ut(e, t) {
	return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]);
}
var Wt = Ut;
function Gt(e, t) {
	return e[0] = -t[0], e[1] = -t[1], e;
}
function Kt(e, t, n, r) {
	return e[0] = t[0] + r * (n[0] - t[0]), e[1] = t[1] + r * (n[1] - t[1]), e;
}
function qt(e, t, n) {
	var r = t[0], i = t[1];
	return e[0] = n[0] * r + n[2] * i + n[4], e[1] = n[1] * r + n[3] * i + n[5], e;
}
function Jt(e, t, n) {
	return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e;
}
function Yt(e, t, n) {
	return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e;
}
//#endregion
//#region node_modules/zrender/lib/core/Point.js
var Y = function() {
	function e(e, t) {
		this.x = e || 0, this.y = t || 0;
	}
	return e.prototype.copy = function(e) {
		return this.x = e.x, this.y = e.y, this;
	}, e.prototype.clone = function() {
		return new e(this.x, this.y);
	}, e.prototype.set = function(e, t) {
		return this.x = e, this.y = t, this;
	}, e.prototype.equal = function(e) {
		return e.x === this.x && e.y === this.y;
	}, e.prototype.add = function(e) {
		return this.x += e.x, this.y += e.y, this;
	}, e.prototype.scale = function(e) {
		this.x *= e, this.y *= e;
	}, e.prototype.scaleAndAdd = function(e, t) {
		this.x += e.x * t, this.y += e.y * t;
	}, e.prototype.sub = function(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}, e.prototype.dot = function(e) {
		return this.x * e.x + this.y * e.y;
	}, e.prototype.len = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}, e.prototype.lenSquare = function() {
		return this.x * this.x + this.y * this.y;
	}, e.prototype.normalize = function() {
		var e = this.len();
		return this.x /= e, this.y /= e, this;
	}, e.prototype.distance = function(e) {
		var t = this.x - e.x, n = this.y - e.y;
		return Math.sqrt(t * t + n * n);
	}, e.prototype.distanceSquare = function(e) {
		var t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}, e.prototype.negate = function() {
		return this.x = -this.x, this.y = -this.y, this;
	}, e.prototype.transform = function(e) {
		if (e) {
			var t = this.x, n = this.y;
			return this.x = e[0] * t + e[2] * n + e[4], this.y = e[1] * t + e[3] * n + e[5], this;
		}
	}, e.prototype.toArray = function(e) {
		return e[0] = this.x, e[1] = this.y, e;
	}, e.prototype.fromArray = function(e) {
		this.x = e[0], this.y = e[1];
	}, e.set = function(e, t, n) {
		e.x = t, e.y = n;
	}, e.copy = function(e, t) {
		e.x = t.x, e.y = t.y;
	}, e.len = function(e) {
		return Math.sqrt(e.x * e.x + e.y * e.y);
	}, e.lenSquare = function(e) {
		return e.x * e.x + e.y * e.y;
	}, e.dot = function(e, t) {
		return e.x * t.x + e.y * t.y;
	}, e.add = function(e, t, n) {
		e.x = t.x + n.x, e.y = t.y + n.y;
	}, e.sub = function(e, t, n) {
		e.x = t.x - n.x, e.y = t.y - n.y;
	}, e.scale = function(e, t, n) {
		e.x = t.x * n, e.y = t.y * n;
	}, e.scaleAndAdd = function(e, t, n, r) {
		e.x = t.x + n.x * r, e.y = t.y + n.y * r;
	}, e.lerp = function(e, t, n, r) {
		var i = 1 - r;
		e.x = i * t.x + r * n.x, e.y = i * t.y + r * n.y;
	}, e;
}(), Xt = Math.min, Zt = Math.max, Qt = Math.abs, $t = ["x", "y"], en = ["width", "height"], tn = new Y(), nn = new Y(), rn = new Y(), an = new Y(), on = bn(), sn = on.minTv, cn = on.maxTv, ln = [0, 0], X = function() {
	function e(e, t, n, r) {
		dn(this, e, t, n, r);
	}
	return e.set = function(e, t, n, r, i) {
		return r < 0 && (t += r, r = -r), i < 0 && (n += i, i = -i), e.x = t, e.y = n, e.width = r, e.height = i, e;
	}, e.prototype.union = function(e) {
		var t = Xt(e.x, this.x), n = Xt(e.y, this.y);
		this.width = isFinite(this.x) && isFinite(this.width) ? Zt(e.x + e.width, this.x + this.width) - t : e.width, this.height = isFinite(this.y) && isFinite(this.height) ? Zt(e.y + e.height, this.y + this.height) - n : e.height, this.x = t, this.y = n;
	}, e.prototype.applyTransform = function(t) {
		e.applyTransform(this, this, t);
	}, e.prototype.calculateTransform = function(e) {
		return pn(ht(), this, e);
	}, e.prototype.intersect = function(t, n, r) {
		return e.intersect(this, t, n, r);
	}, e.intersect = function(t, n, r, i) {
		r && Y.set(r, 0, 0);
		var a = i && i.outIntersectRect || null, o = i && i.clamp;
		if (a && (a.x = a.y = a.width = a.height = NaN), !t || !n) return !1;
		t instanceof e || (t = dn(gn, t.x, t.y, t.width, t.height)), n instanceof e || (n = dn(_n, n.x, n.y, n.width, n.height));
		var s = !!r;
		on.reset(i, s);
		var c = on.touchThreshold, l = t.x + c, u = t.x + t.width - c, d = t.y + c, f = t.y + t.height - c, p = n.x + c, m = n.x + n.width - c, h = n.y + c, g = n.y + n.height - c;
		if (l > u || d > f || p > m || h > g) return !1;
		var _ = !(u < p || m < l || f < h || g < d);
		return (s || a) && (ln[0] = Infinity, ln[1] = 0, yn(l, u, p, m, 0, s, a, o), yn(d, f, h, g, 1, s, a, o), s && Y.copy(r, _ ? on.useDir ? on.dirMinTv : sn : cn)), _;
	}, e.contain = function(e, t, n) {
		return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
	}, e.prototype.contain = function(t, n) {
		return e.contain(this, t, n);
	}, e.prototype.clone = function() {
		return new e(this.x, this.y, this.width, this.height);
	}, e.prototype.copy = function(e) {
		fn(this, e);
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
	}, e.copy = function(e, t) {
		return e.x = t.x, e.y = t.y, e.width = t.width, e.height = t.height, e;
	}, e.applyTransform = function(e, t, n) {
		if (!n) {
			e !== t && fn(e, t);
			return;
		}
		if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
			var r = n[0], i = n[3], a = n[4], o = n[5];
			e.x = t.x * r + a, e.y = t.y * i + o, e.width = t.width * r, e.height = t.height * i, e.width < 0 && (e.x += e.width, e.width = -e.width), e.height < 0 && (e.y += e.height, e.height = -e.height);
			return;
		}
		tn.x = rn.x = t.x, tn.y = an.y = t.y, nn.x = an.x = t.x + t.width, nn.y = rn.y = t.y + t.height, tn.transform(n), an.transform(n), nn.transform(n), rn.transform(n), e.x = Xt(tn.x, nn.x, rn.x, an.x), e.y = Xt(tn.y, nn.y, rn.y, an.y);
		var s = Zt(tn.x, nn.x, rn.x, an.x), c = Zt(tn.y, nn.y, rn.y, an.y);
		e.width = s - e.x, e.height = c - e.y;
	}, e.calculateTransform = function(e, t, n) {
		var r = n.width / t.width, i = n.height / t.height;
		return e = gt(e || []), yt(e, e, Ot(vn, -t.x, -t.y)), xt(e, e, Ot(vn, r, i)), yt(e, e, Ot(vn, n.x, n.y)), e;
	}, e;
}(), un = X.create, dn = X.set, fn = X.copy, pn = X.calculateTransform, mn = X.applyTransform, hn = X.contain, gn = new X(0, 0, 0, 0), _n = new X(0, 0, 0, 0), vn = [];
function yn(e, t, n, r, i, a, o, s) {
	var c = Qt(t - n), l = Qt(r - e), u = Xt(c, l), d = $t[i], f = $t[1 - i], p = en[i];
	t < n || r < e ? c < l ? (a && (cn[d] = -c), s && (o[d] = t, o[p] = 0)) : (a && (cn[d] = l), s && (o[d] = e, o[p] = 0)) : (o && (o[d] = Zt(e, n), o[p] = Xt(t, r) - o[d]), a && (u < ln[0] || on.useDir) && (ln[0] = Xt(u, ln[0]), (c < l || !on.bidirectional) && (sn[d] = c, sn[f] = 0, on.useDir && on.calcDirMTV()), (c >= l || !on.bidirectional) && (sn[d] = -l, sn[f] = 0, on.useDir && on.calcDirMTV())));
}
function bn() {
	var e = 0, t = new Y(), n = new Y(), r = {
		minTv: new Y(),
		maxTv: new Y(),
		useDir: !1,
		dirMinTv: new Y(),
		touchThreshold: 0,
		bidirectional: !0,
		negativeSize: !1,
		reset: function(i, a) {
			r.touchThreshold = 0, i && i.touchThreshold != null && (r.touchThreshold = Zt(0, i.touchThreshold)), r.negativeSize = !1, a && (r.minTv.set(Infinity, Infinity), r.maxTv.set(0, 0), r.useDir = !1, i && i.direction != null && (r.useDir = !0, r.dirMinTv.copy(r.minTv), n.copy(r.minTv), e = i.direction, r.bidirectional = i.bidirectional == null || !!i.bidirectional, r.bidirectional || t.set(Math.cos(e), Math.sin(e))));
		},
		calcDirMTV: function() {
			var a = r.minTv, o = r.dirMinTv, s = a.y * a.y + a.x * a.x, c = Math.sin(e), l = Math.cos(e), u = c * a.y + l * a.x;
			if (i(u)) {
				i(a.x) && i(a.y) && o.set(0, 0);
				return;
			}
			if (n.x = s * l / u, n.y = s * c / u, i(n.x) && i(n.y)) {
				o.set(0, 0);
				return;
			}
			(r.bidirectional || t.dot(n) > 0) && n.len() < o.len() && o.copy(n);
		}
	};
	function i(e) {
		return Qt(e) < 1e-10;
	}
	return r;
}
//#endregion
//#region node_modules/zrender/lib/contain/text.js
function xn(e) {
	Sn ||= new ct(100), e ||= "12px sans-serif";
	var t = Sn.get(e);
	return t || (t = {
		font: e,
		strWidthCache: new ct(500),
		asciiWidthMap: null,
		asciiWidthMapTried: !1,
		stWideCharWidth: g.measureText("国", e).width,
		asciiCharWidth: g.measureText("a", e).width
	}, Sn.put(e, t)), t;
}
var Sn;
function Cn(e) {
	if (!(wn >= Tn)) {
		e ||= "12px sans-serif";
		for (var t = [], n = +/* @__PURE__ */ new Date(), r = 0; r <= 127; r++) t[r] = g.measureText(String.fromCharCode(r), e).width;
		var i = +/* @__PURE__ */ new Date() - n;
		return i > 16 ? wn = Tn : i > 2 && wn++, t;
	}
}
var wn = 0, Tn = 5;
function En(e, t) {
	return e.asciiWidthMapTried ||= (e.asciiWidthMap = Cn(e.font), !0), 0 <= t && t <= 127 ? e.asciiWidthMap == null ? e.asciiCharWidth : e.asciiWidthMap[t] : e.stWideCharWidth;
}
function Dn(e, t) {
	var n = e.strWidthCache, r = n.get(t);
	return r ?? (r = g.measureText(t, e.font).width, n.put(t, r)), r;
}
function On(e, t, n, r) {
	var i = Dn(xn(t), e), a = Mn(t);
	return new X(An(0, i, n), jn(0, a, r), i, a);
}
function kn(e, t, n, r) {
	var i = ((e || "") + "").split("\n");
	if (i.length === 1) return On(i[0], t, n, r);
	for (var a = new X(0, 0, 0, 0), o = 0; o < i.length; o++) {
		var s = On(i[o], t, n, r);
		o === 0 ? a.copy(s) : a.union(s);
	}
	return a;
}
function An(e, t, n, r) {
	return n === "right" ? r ? e += t : e -= t : n === "center" && (r ? e += t / 2 : e -= t / 2), e;
}
function jn(e, t, n, r) {
	return n === "middle" ? r ? e += t / 2 : e -= t / 2 : n === "bottom" && (r ? e += t : e -= t), e;
}
function Mn(e) {
	return xn(e).stWideCharWidth;
}
function Nn(e, t) {
	return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e;
}
function Pn(e, t, n) {
	var r = t.position || "inside", i = t.distance == null ? 5 : t.distance, a = n.height, o = n.width, s = a / 2, c = n.x, l = n.y, u = "left", d = "top";
	if (r instanceof Array) c += Nn(r[0], n.width), l += Nn(r[1], n.height), u = null, d = null;
	else switch (r) {
		case "left":
			c -= i, l += s, u = "right", d = "middle";
			break;
		case "right":
			c += i + o, l += s, d = "middle";
			break;
		case "top":
			c += o / 2, l -= i, u = "center", d = "bottom";
			break;
		case "bottom":
			c += o / 2, l += a + i, u = "center";
			break;
		case "inside":
			c += o / 2, l += s, u = "center", d = "middle";
			break;
		case "insideLeft":
			c += i, l += s, d = "middle";
			break;
		case "insideRight":
			c += o - i, l += s, u = "right", d = "middle";
			break;
		case "insideTop":
			c += o / 2, l += i, u = "center";
			break;
		case "insideBottom":
			c += o / 2, l += a - i, u = "center", d = "bottom";
			break;
		case "insideTopLeft":
			c += i, l += i;
			break;
		case "insideTopRight":
			c += o - i, l += i, u = "right";
			break;
		case "insideBottomLeft":
			c += i, l += a - i, d = "bottom";
			break;
		case "insideBottomRight": c += o - i, l += a - i, u = "right", d = "bottom";
	}
	return e ||= {}, e.x = c, e.y = l, e.align = u, e.verticalAlign = d, e;
}
//#endregion
//#region node_modules/zrender/lib/graphic/helper/parseText.js
var Fn = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function In(e, t, n, r, i) {
	var a = {};
	return Ln(a, e, t, n, r, i), a.text;
}
function Ln(e, t, n, r, i, a) {
	if (!n) {
		e.text = "", e.isTruncated = !1;
		return;
	}
	var o = (t + "").split("\n");
	a = Rn(n, r, i, a);
	for (var s = !1, c = {}, l = 0, u = o.length; l < u; l++) zn(c, o[l], a), o[l] = c.textLine, s ||= c.isTruncated;
	e.text = o.join("\n"), e.isTruncated = s;
}
function Rn(e, t, n, r) {
	r ||= {};
	var i = N({}, r);
	n = G(n, "..."), i.maxIterations = G(r.maxIterations, 2);
	var a = i.minChar = G(r.minChar, 0), o = i.fontMeasureInfo = xn(t), s = o.asciiCharWidth;
	i.placeholder = G(r.placeholder, "");
	for (var c = e = Math.max(0, e - 1), l = 0; l < a && c >= s; l++) c -= s;
	var u = Dn(o, n);
	return u > c && (n = "", u = 0), c = e - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = c, i.containerWidth = e, i;
}
function zn(e, t, n) {
	var r = n.containerWidth, i = n.contentWidth, a = n.fontMeasureInfo;
	if (!r) {
		e.textLine = "", e.isTruncated = !1;
		return;
	}
	var o = Dn(a, t);
	if (o <= r) {
		e.textLine = t, e.isTruncated = !1;
		return;
	}
	for (var s = 0;; s++) {
		if (o <= i || s >= n.maxIterations) {
			t += n.ellipsis;
			break;
		}
		var c = s === 0 ? Bn(t, i, a) : o > 0 ? Math.floor(t.length * i / o) : 0;
		t = t.substr(0, c), o = Dn(a, t);
	}
	t === "" && (t = n.placeholder), e.textLine = t, e.isTruncated = !0;
}
function Bn(e, t, n) {
	for (var r = 0, i = 0, a = e.length; i < a && r < t; i++) r += En(n, e.charCodeAt(i));
	return i;
}
function Vn(e, t, n, r) {
	var i = er(e), a = t.overflow, o = t.padding, s = o ? o[1] + o[3] : 0, c = o ? o[0] + o[2] : 0, l = t.font, u = a === "truncate", d = Mn(l), f = G(t.lineHeight, d), p = t.lineOverflow === "truncate", m = !1, h = t.width;
	h == null && n != null && (h = n - s);
	var g = t.height;
	g == null && r != null && (g = r - c);
	var _ = h != null && (a === "break" || a === "breakAll") ? i ? Xn(i, t.font, h, a === "breakAll", 0).lines : [] : i ? i.split("\n") : [], v = _.length * f;
	if (g ??= v, v > g && p) {
		var y = Math.floor(g / f);
		m ||= _.length > y, _ = _.slice(0, y), v = _.length * f;
	}
	if (i && u && h != null) for (var b = Rn(h, l, t.ellipsis, {
		minChar: t.truncateMinChar,
		placeholder: t.placeholder
	}), x = {}, S = 0; S < _.length; S++) zn(x, _[S], b), _[S] = x.textLine, m ||= x.isTruncated;
	for (var C = g, w = 0, T = xn(l), S = 0; S < _.length; S++) w = Math.max(Dn(T, _[S]), w);
	h ??= w;
	var E = h;
	return C += c, E += s, {
		lines: _,
		height: g,
		outerWidth: E,
		outerHeight: C,
		lineHeight: f,
		calculatedLineHeight: d,
		contentWidth: w,
		contentHeight: v,
		width: h,
		isTruncated: m
	};
}
var Hn = function() {
	function e() {}
	return e;
}(), Un = function() {
	function e(e) {
		this.tokens = [], e && (this.tokens = e);
	}
	return e;
}(), Wn = function() {
	function e() {
		this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
	}
	return e;
}();
function Gn(e, t, n, r, i) {
	var a = new Wn(), o = er(e);
	if (!o) return a;
	var s = t.padding, c = s ? s[1] + s[3] : 0, l = s ? s[0] + s[2] : 0, u = t.width;
	u == null && n != null && (u = n - c);
	var d = t.height;
	d == null && r != null && (d = r - l);
	for (var f = t.overflow, p = (f === "break" || f === "breakAll") && u != null ? {
		width: u,
		accumWidth: 0,
		breakAll: f === "breakAll"
	} : null, m = Fn.lastIndex = 0, h; (h = Fn.exec(o)) != null;) {
		var g = h.index;
		g > m && Kn(a, o.substring(m, g), t, p), Kn(a, h[2], t, p, h[1]), m = Fn.lastIndex;
	}
	m < o.length && Kn(a, o.substring(m, o.length), t, p);
	var _ = [], v = 0, y = 0, b = f === "truncate", x = t.lineOverflow === "truncate", S = {};
	function C(e, t, n) {
		e.width = t, e.lineHeight = n, v += n, y = Math.max(y, t);
	}
	outer: for (var w = 0; w < a.lines.length; w++) {
		for (var T = a.lines[w], E = 0, D = 0, O = 0; O < T.tokens.length; O++) {
			var k = T.tokens[O], A = k.styleName && t.rich[k.styleName] || {}, ee = k.textPadding = A.padding, te = ee ? ee[1] + ee[3] : 0, ne = k.font = A.font || t.font;
			k.contentHeight = Mn(ne);
			var j = G(A.height, k.contentHeight);
			if (k.innerHeight = j, ee && (j += ee[0] + ee[2]), k.height = j, k.lineHeight = Ce(A.lineHeight, t.lineHeight, j), k.align = A && A.align || i, k.verticalAlign = A && A.verticalAlign || "middle", x && d != null && v + k.lineHeight > d) {
				var M = a.lines.length;
				O > 0 ? (T.tokens = T.tokens.slice(0, O), C(T, D, E), a.lines = a.lines.slice(0, w + 1)) : a.lines = a.lines.slice(0, w), a.isTruncated = a.isTruncated || a.lines.length < M;
				break outer;
			}
			var re = A.width, N = re == null || re === "auto";
			if (typeof re == "string" && re.charAt(re.length - 1) === "%") k.percentWidth = re, _.push(k), k.contentWidth = Dn(xn(ne), k.text);
			else {
				if (N) {
					var ie = A.backgroundColor, P = ie && ie.image;
					P && (P = ut(P), pt(P) && (k.width = Math.max(k.width, P.width * j / P.height)));
				}
				var ae = b && u != null ? u - D : null;
				ae != null && ae < k.width ? !N || ae < te ? (k.text = "", k.width = k.contentWidth = 0) : (Ln(S, k.text, ae - te, ne, t.ellipsis, { minChar: t.truncateMinChar }), k.text = S.text, a.isTruncated = a.isTruncated || S.isTruncated, k.width = k.contentWidth = Dn(xn(ne), k.text)) : k.contentWidth = Dn(xn(ne), k.text);
			}
			k.width += te, D += k.width, A && (E = Math.max(E, k.lineHeight));
		}
		C(T, D, E);
	}
	a.outerWidth = a.width = G(u, y), a.outerHeight = a.height = G(d, v), a.contentHeight = v, a.contentWidth = y, a.outerWidth += c, a.outerHeight += l;
	for (var w = 0; w < _.length; w++) {
		var k = _[w], F = k.percentWidth;
		k.width = parseInt(F, 10) / 100 * a.width;
	}
	return a;
}
function Kn(e, t, n, r, i) {
	var a = t === "", o = i && n.rich[i] || {}, s = e.lines, c = o.font || n.font, l = !1, u, d;
	if (r) {
		var f = o.padding, p = f ? f[1] + f[3] : 0;
		if (o.width != null && o.width !== "auto") {
			var m = Nn(o.width, r.width) + p;
			s.length > 0 && m + r.accumWidth > r.width && (u = t.split("\n"), l = !0), r.accumWidth = m;
		} else {
			var h = Xn(t, c, r.width, r.breakAll, r.accumWidth);
			r.accumWidth = h.accumWidth + p, d = h.linesWidths, u = h.lines;
		}
	}
	u ||= t.split("\n");
	for (var g = xn(c), _ = 0; _ < u.length; _++) {
		var v = u[_], y = new Hn();
		if (y.styleName = i, y.text = v, y.isLineHolder = !v && !a, y.width = typeof o.width == "number" ? o.width : d ? d[_] : Dn(g, v), !_ && !l) {
			var b = (s[s.length - 1] || (s[0] = new Un())).tokens, x = b.length;
			x === 1 && b[0].isLineHolder ? b[0] = y : (v || !x || a) && b.push(y);
		} else s.push(new Un([y]));
	}
}
function qn(e) {
	var t = e.charCodeAt(0);
	return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var Jn = R(",&?/;] ".split(""), function(e, t) {
	return e[t] = !0, e;
}, {});
function Yn(e) {
	return !qn(e) || !!Jn[e];
}
function Xn(e, t, n, r, i) {
	for (var a = [], o = [], s = "", c = "", l = 0, u = 0, d = xn(t), f = 0; f < e.length; f++) {
		var p = e.charAt(f);
		if (p === "\n") {
			c && (s += c, u += l), a.push(s), o.push(u), s = "", c = "", l = 0, u = 0;
			continue;
		}
		var m = En(d, p.charCodeAt(0)), h = !r && !Yn(p);
		if (a.length ? u + m > n : i + u + m > n) {
			u ? (s || c) && (h ? (s || (s = c, c = "", l = 0, u = l), a.push(s), o.push(u - l), c += p, l += m, s = "", u = l) : (c && (s += c, c = "", l = 0), a.push(s), o.push(u), s = p, u = m)) : h ? (a.push(c), o.push(l), c = p, l = m) : (a.push(p), o.push(m));
			continue;
		}
		u += m, h ? (c += p, l += m) : (c && (s += c, c = "", l = 0), s += p);
	}
	return c && (s += c), s && (a.push(s), o.push(u)), a.length === 1 && (u += i), {
		accumWidth: u,
		lines: a,
		linesWidths: o
	};
}
function Zn(e, t, n, r, i, a) {
	if (e.baseX = n, e.baseY = r, e.outerWidth = e.outerHeight = null, t) {
		var o = t.width * 2, s = t.height * 2;
		X.set(Qn, An(n, o, i), jn(r, s, a), o, s), X.intersect(t, Qn, null, $n);
		var c = $n.outIntersectRect;
		e.outerWidth = c.width, e.outerHeight = c.height, e.baseX = An(c.x, c.width, i, !0), e.baseY = jn(c.y, c.height, a, !0);
	}
}
var Qn = new X(0, 0, 0, 0), $n = {
	outIntersectRect: {},
	clamp: !0
};
function er(e) {
	return e == null ? e = "" : e += "";
}
function tr(e) {
	var t = er(e.text), n = e.font;
	return nr(e, Dn(xn(n), t), Mn(n), null);
}
function nr(e, t, n, r) {
	var i = new X(An(e.x || 0, t, e.textAlign), jn(e.y || 0, n, e.textBaseline), t, n), a = r ?? (rr(e) ? e.lineWidth : 0);
	return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function rr(e) {
	var t = e.stroke;
	return t != null && t !== "none" && e.lineWidth > 0;
}
//#endregion
//#region node_modules/zrender/lib/core/Transformable.js
var ir = gt, ar = 5e-5;
function or(e) {
	return e > ar || e < -ar;
}
var sr = [], cr = [], lr = ht(), ur = Math.abs, dr = function() {
	function e() {}
	return e.prototype.getLocalTransform = function(e) {
		return fr(this, e);
	}, e.prototype.setPosition = function(e) {
		this.x = e[0], this.y = e[1];
	}, e.prototype.setScale = function(e) {
		this.scaleX = e[0], this.scaleY = e[1];
	}, e.prototype.setSkew = function(e) {
		this.skewX = e[0], this.skewY = e[1];
	}, e.prototype.setOrigin = function(e) {
		this.originX = e[0], this.originY = e[1];
	}, e.prototype.needLocalTransform = function() {
		return or(this.rotation) || or(this.x) || or(this.y) || or(this.scaleX - 1) || or(this.scaleY - 1) || or(this.skewX) || or(this.skewY);
	}, e.prototype.updateTransform = function() {
		var e = this.parent && this.parent.transform, t = this.needLocalTransform(), n = this.transform;
		if (!(t || e)) {
			n && (ir(n), this.invTransform = null);
			return;
		}
		n ||= ht(), t ? this.getLocalTransform(n) : ir(n), e && (t ? vt(n, e, n) : _t(n, e)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || ht(), St(this.invTransform, n);
	}, e.prototype._resolveGlobalScaleRatio = function(e) {
		var t = this.globalScaleRatio;
		if (t != null && t !== 1) {
			this.getGlobalScale(sr);
			var n = sr[0] < 0 ? -1 : 1, r = sr[1] < 0 ? -1 : 1, i = ((sr[0] - n) * t + n) / sr[0] || 0, a = ((sr[1] - r) * t + r) / sr[1] || 0;
			e[0] *= i, e[1] *= i, e[2] *= a, e[3] *= a;
		}
	}, e.prototype.getComputedTransform = function() {
		for (var e = this, t = []; e;) t.push(e), e = e.parent;
		for (; e = t.pop();) e.updateTransform();
		return this.transform;
	}, e.prototype.setLocalTransform = function(e) {
		if (e) {
			var t = e[0] * e[0] + e[1] * e[1], n = e[2] * e[2] + e[3] * e[3], r = Math.atan2(e[1], e[0]), i = Math.PI / 2 + r - Math.atan2(e[3], e[2]);
			n = Math.sqrt(n) * Math.cos(i), t = Math.sqrt(t), this.skewX = i, this.skewY = 0, this.rotation = -r, this.x = +e[4], this.y = +e[5], this.scaleX = t, this.scaleY = n, this.originX = 0, this.originY = 0;
		}
	}, e.prototype.decomposeTransform = function() {
		if (this.transform) {
			var e = this.parent, t = this.transform;
			e && e.transform && (e.invTransform = e.invTransform || ht(), vt(cr, e.invTransform, t), t = cr);
			var n = this.originX, r = this.originY;
			(n || r) && (lr[4] = n, lr[5] = r, vt(cr, t, lr), cr[4] -= n, cr[5] -= r, t = cr), this.setLocalTransform(t);
		}
	}, e.prototype.getGlobalScale = function(e) {
		var t = this.transform;
		return e ||= [], t ? (e[0] = Math.sqrt(t[0] * t[0] + t[1] * t[1]), e[1] = Math.sqrt(t[2] * t[2] + t[3] * t[3]), t[0] < 0 && (e[0] = -e[0]), t[3] < 0 && (e[1] = -e[1]), e) : (e[0] = 1, e[1] = 1, e);
	}, e.prototype.transformCoordToLocal = function(e, t) {
		var n = [e, t], r = this.invTransform;
		return r && qt(n, n, r), n;
	}, e.prototype.transformCoordToGlobal = function(e, t) {
		var n = [e, t], r = this.transform;
		return r && qt(n, n, r), n;
	}, e.prototype.getLineScale = function() {
		var e = this.transform;
		return e && ur(e[0] - 1) > 1e-10 && ur(e[3] - 1) > 1e-10 ? Math.sqrt(ur(e[0] * e[3] - e[2] * e[1])) : 1;
	}, e.prototype.copyTransform = function(e) {
		hr(this, e);
	}, e.getLocalTransform = function(e, t) {
		t ||= [];
		var n = e.originX || 0, r = e.originY || 0, i = e.scaleX, a = e.scaleY, o = e.anchorX, s = e.anchorY, c = e.rotation || 0, l = e.x, u = e.y, d = e.skewX ? Math.tan(e.skewX) : 0, f = e.skewY ? Math.tan(-e.skewY) : 0;
		if (n || r || o || s) {
			var p = n + o, m = r + s;
			t[4] = -p * i - d * m * a, t[5] = -m * a - f * p * i;
		} else t[4] = t[5] = 0;
		return t[0] = i, t[3] = a, t[1] = f * i, t[2] = d * a, c && bt(t, t, c), t[4] += n + l, t[5] += r + u, t;
	}, e.initDefaultProps = (function() {
		var t = e.prototype;
		t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
	})(), e;
}(), fr = dr.getLocalTransform;
function pr() {
	return new dr();
}
var mr = [
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
function hr(e, t) {
	return ie(e, t, mr);
}
//#endregion
//#region node_modules/zrender/lib/animation/easing.js
var gr = {
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
		return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1);
	},
	cubicIn: function(e) {
		return e * e * e;
	},
	cubicOut: function(e) {
		return --e * e * e + 1;
	},
	cubicInOut: function(e) {
		return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2);
	},
	quarticIn: function(e) {
		return e * e * e * e;
	},
	quarticOut: function(e) {
		return 1 - --e * e * e * e;
	},
	quarticInOut: function(e) {
		return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2);
	},
	quinticIn: function(e) {
		return e * e * e * e * e;
	},
	quinticOut: function(e) {
		return --e * e * e * e * e + 1;
	},
	quinticInOut: function(e) {
		return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2);
	},
	sinusoidalIn: function(e) {
		return 1 - Math.cos(e * Math.PI / 2);
	},
	sinusoidalOut: function(e) {
		return Math.sin(e * Math.PI / 2);
	},
	sinusoidalInOut: function(e) {
		return .5 * (1 - Math.cos(Math.PI * e));
	},
	exponentialIn: function(e) {
		return e === 0 ? 0 : 1024 ** (e - 1);
	},
	exponentialOut: function(e) {
		return e === 1 ? 1 : 1 - 2 ** (-10 * e);
	},
	exponentialInOut: function(e) {
		return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * 1024 ** (e - 1) : .5 * (-(2 ** (-10 * (e - 1))) + 2);
	},
	circularIn: function(e) {
		return 1 - Math.sqrt(1 - e * e);
	},
	circularOut: function(e) {
		return Math.sqrt(1 - --e * e);
	},
	circularInOut: function(e) {
		return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
	},
	elasticIn: function(e) {
		var t, n = .1, r = .4;
		return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), -(n * 2 ** (10 * --e) * Math.sin((e - t) * (2 * Math.PI) / r)));
	},
	elasticOut: function(e) {
		var t, n = .1, r = .4;
		return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), n * 2 ** (-10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1);
	},
	elasticInOut: function(e) {
		var t, n = .1, r = .4;
		return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (n * 2 ** (10 * --e) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * 2 ** (-10 * --e) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1);
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
		return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
	},
	bounceIn: function(e) {
		return 1 - gr.bounceOut(1 - e);
	},
	bounceOut: function(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
	},
	bounceInOut: function(e) {
		return e < .5 ? gr.bounceIn(e * 2) * .5 : gr.bounceOut(e * 2 - 1) * .5 + .5;
	}
}, _r = Math.pow, vr = Math.sqrt, yr = 1e-8, br = 1e-4, xr = vr(3), Sr = 1 / 3, Cr = Tt(), wr = Tt(), Tr = Tt();
function Er(e) {
	return e > -yr && e < yr;
}
function Dr(e) {
	return e > yr || e < -yr;
}
function Or(e, t, n, r, i) {
	var a = 1 - i;
	return a * a * (a * e + 3 * i * t) + i * i * (i * r + 3 * a * n);
}
function kr(e, t, n, r, i) {
	var a = 1 - i;
	return 3 * (((t - e) * a + 2 * (n - t) * i) * a + (r - n) * i * i);
}
function Ar(e, t, n, r, i, a) {
	var o = r + 3 * (t - n) - e, s = 3 * (n - t * 2 + e), c = 3 * (t - e), l = e - i, u = s * s - 3 * o * c, d = s * c - 9 * o * l, f = c * c - 3 * s * l, p = 0;
	if (Er(u) && Er(d)) {
		if (Er(s)) a[0] = 0;
		else {
			var m = -c / s;
			m >= 0 && m <= 1 && (a[p++] = m);
		}
	} else {
		var h = d * d - 4 * u * f;
		if (Er(h)) {
			var g = d / u, m = -s / o + g, _ = -g / 2;
			m >= 0 && m <= 1 && (a[p++] = m), _ >= 0 && _ <= 1 && (a[p++] = _);
		} else if (h > 0) {
			var v = vr(h), y = u * s + 1.5 * o * (-d + v), b = u * s + 1.5 * o * (-d - v);
			y = y < 0 ? -_r(-y, Sr) : _r(y, Sr), b = b < 0 ? -_r(-b, Sr) : _r(b, Sr);
			var m = (-s - (y + b)) / (3 * o);
			m >= 0 && m <= 1 && (a[p++] = m);
		} else {
			var x = (2 * u * s - 3 * o * d) / (2 * vr(u * u * u)), S = Math.acos(x) / 3, C = vr(u), w = Math.cos(S), m = (-s - 2 * C * w) / (3 * o), _ = (-s + C * (w + xr * Math.sin(S))) / (3 * o), T = (-s + C * (w - xr * Math.sin(S))) / (3 * o);
			m >= 0 && m <= 1 && (a[p++] = m), _ >= 0 && _ <= 1 && (a[p++] = _), T >= 0 && T <= 1 && (a[p++] = T);
		}
	}
	return p;
}
function jr(e, t, n, r, i) {
	var a = 6 * n - 12 * t + 6 * e, o = 9 * t + 3 * r - 3 * e - 9 * n, s = 3 * t - 3 * e, c = 0;
	if (Er(o)) {
		if (Dr(a)) {
			var l = -s / a;
			l >= 0 && l <= 1 && (i[c++] = l);
		}
	} else {
		var u = a * a - 4 * o * s;
		if (Er(u)) i[0] = -a / (2 * o);
		else if (u > 0) {
			var d = vr(u), l = (-a + d) / (2 * o), f = (-a - d) / (2 * o);
			l >= 0 && l <= 1 && (i[c++] = l), f >= 0 && f <= 1 && (i[c++] = f);
		}
	}
	return c;
}
function Mr(e, t, n, r, i, a) {
	var o = (t - e) * i + e, s = (n - t) * i + t, c = (r - n) * i + n, l = (s - o) * i + o, u = (c - s) * i + s, d = (u - l) * i + l;
	a[0] = e, a[1] = o, a[2] = l, a[3] = d, a[4] = d, a[5] = u, a[6] = c, a[7] = r;
}
function Nr(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f = .005, p = Infinity, m, h, g, _;
	Cr[0] = c, Cr[1] = l;
	for (var v = 0; v < 1; v += .05) wr[0] = Or(e, n, i, o, v), wr[1] = Or(t, r, a, s, v), g = Wt(Cr, wr), g < p && (d = v, p = g);
	p = Infinity;
	for (var y = 0; y < 32 && !(f < br); y++) m = d - f, h = d + f, wr[0] = Or(e, n, i, o, m), wr[1] = Or(t, r, a, s, m), g = Wt(wr, Cr), m >= 0 && g < p ? (d = m, p = g) : (Tr[0] = Or(e, n, i, o, h), Tr[1] = Or(t, r, a, s, h), _ = Wt(Tr, Cr), h <= 1 && _ < p ? (d = h, p = _) : f *= .5);
	return u && (u[0] = Or(e, n, i, o, d), u[1] = Or(t, r, a, s, d)), vr(p);
}
function Pr(e, t, n, r, i, a, o, s, c) {
	for (var l = e, u = t, d = 0, f = 1 / c, p = 1; p <= c; p++) {
		var m = p * f, h = Or(e, n, i, o, m), g = Or(t, r, a, s, m), _ = h - l, v = g - u;
		d += Math.sqrt(_ * _ + v * v), l = h, u = g;
	}
	return d;
}
function Fr(e, t, n, r) {
	var i = 1 - r;
	return i * (i * e + 2 * r * t) + r * r * n;
}
function Ir(e, t, n, r) {
	return 2 * ((1 - r) * (t - e) + r * (n - t));
}
function Lr(e, t, n, r, i) {
	var a = e - 2 * t + n, o = 2 * (t - e), s = e - r, c = 0;
	if (Er(a)) {
		if (Dr(o)) {
			var l = -s / o;
			l >= 0 && l <= 1 && (i[c++] = l);
		}
	} else {
		var u = o * o - 4 * a * s;
		if (Er(u)) {
			var l = -o / (2 * a);
			l >= 0 && l <= 1 && (i[c++] = l);
		} else if (u > 0) {
			var d = vr(u), l = (-o + d) / (2 * a), f = (-o - d) / (2 * a);
			l >= 0 && l <= 1 && (i[c++] = l), f >= 0 && f <= 1 && (i[c++] = f);
		}
	}
	return c;
}
function Rr(e, t, n) {
	var r = e + n - 2 * t;
	return r === 0 ? .5 : (e - t) / r;
}
function zr(e, t, n, r, i) {
	var a = (t - e) * r + e, o = (n - t) * r + t, s = (o - a) * r + a;
	i[0] = e, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = n;
}
function Br(e, t, n, r, i, a, o, s, c) {
	var l, u = .005, d = Infinity;
	Cr[0] = o, Cr[1] = s;
	for (var f = 0; f < 1; f += .05) {
		wr[0] = Fr(e, n, i, f), wr[1] = Fr(t, r, a, f);
		var p = Wt(Cr, wr);
		p < d && (l = f, d = p);
	}
	d = Infinity;
	for (var m = 0; m < 32 && !(u < br); m++) {
		var h = l - u, g = l + u;
		wr[0] = Fr(e, n, i, h), wr[1] = Fr(t, r, a, h);
		var p = Wt(wr, Cr);
		if (h >= 0 && p < d) l = h, d = p;
		else {
			Tr[0] = Fr(e, n, i, g), Tr[1] = Fr(t, r, a, g);
			var _ = Wt(Tr, Cr);
			g <= 1 && _ < d ? (l = g, d = _) : u *= .5;
		}
	}
	return c && (c[0] = Fr(e, n, i, l), c[1] = Fr(t, r, a, l)), vr(d);
}
function Vr(e, t, n, r, i, a, o) {
	for (var s = e, c = t, l = 0, u = 1 / o, d = 1; d <= o; d++) {
		var f = d * u, p = Fr(e, n, i, f), m = Fr(t, r, a, f), h = p - s, g = m - c;
		l += Math.sqrt(h * h + g * g), s = p, c = m;
	}
	return l;
}
//#endregion
//#region node_modules/zrender/lib/animation/cubicEasing.js
var Hr = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Ur(e) {
	var t = e && Hr.exec(e);
	if (t) {
		var n = t[1].split(","), r = +De(n[0]), i = +De(n[1]), a = +De(n[2]), o = +De(n[3]);
		if (isNaN(r + i + a + o)) return;
		var s = [];
		return function(e) {
			return e <= 0 ? 0 : e >= 1 ? 1 : Ar(0, r, a, 1, e, s) && Or(0, i, o, 1, s[0]);
		};
	}
}
//#endregion
//#region node_modules/zrender/lib/animation/Clip.js
var Wr = function() {
	function e(e) {
		this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = e.life || 1e3, this._delay = e.delay || 0, this.loop = e.loop || !1, this.onframe = e.onframe || Re, this.ondestroy = e.ondestroy || Re, this.onrestart = e.onrestart || Re, e.easing && this.setEasing(e.easing);
	}
	return e.prototype.step = function(e, t) {
		if (this._inited ||= (this._startTime = e + this._delay, !0), this._paused) {
			this._pausedTime += t;
			return;
		}
		var n = this._life, r = e - this._startTime - this._pausedTime, i = r / n;
		i < 0 && (i = 0), i = Math.min(i, 1);
		var a = this.easingFunc, o = a ? a(i) : i;
		if (this.onframe(o), i === 1) {
			if (this.loop) {
				var s = r % n;
				this._startTime = e - s, this._pausedTime = 0, this.onrestart();
			} else return !0;
		}
		return !1;
	}, e.prototype.pause = function() {
		this._paused = !0;
	}, e.prototype.resume = function() {
		this._paused = !1;
	}, e.prototype.setEasing = function(e) {
		this.easing = e, this.easingFunc = H(e) ? e : gr[e] || Ur(e);
	}, e;
}(), Gr = /* @__PURE__ */ s({
	fastLerp: () => ui,
	fastMapToColor: () => di,
	lerp: () => fi,
	lift: () => ci,
	liftColor: () => bi,
	lum: () => _i,
	mapToColor: () => pi,
	modifyAlpha: () => hi,
	modifyHSL: () => mi,
	parse: () => ai,
	parseCssFloat: () => Zr,
	parseCssInt: () => Xr,
	random: () => vi,
	stringify: () => gi,
	toHex: () => li
}), Kr = {
	transparent: [
		0,
		0,
		0,
		0
	],
	aliceblue: [
		240,
		248,
		255,
		1
	],
	antiquewhite: [
		250,
		235,
		215,
		1
	],
	aqua: [
		0,
		255,
		255,
		1
	],
	aquamarine: [
		127,
		255,
		212,
		1
	],
	azure: [
		240,
		255,
		255,
		1
	],
	beige: [
		245,
		245,
		220,
		1
	],
	bisque: [
		255,
		228,
		196,
		1
	],
	black: [
		0,
		0,
		0,
		1
	],
	blanchedalmond: [
		255,
		235,
		205,
		1
	],
	blue: [
		0,
		0,
		255,
		1
	],
	blueviolet: [
		138,
		43,
		226,
		1
	],
	brown: [
		165,
		42,
		42,
		1
	],
	burlywood: [
		222,
		184,
		135,
		1
	],
	cadetblue: [
		95,
		158,
		160,
		1
	],
	chartreuse: [
		127,
		255,
		0,
		1
	],
	chocolate: [
		210,
		105,
		30,
		1
	],
	coral: [
		255,
		127,
		80,
		1
	],
	cornflowerblue: [
		100,
		149,
		237,
		1
	],
	cornsilk: [
		255,
		248,
		220,
		1
	],
	crimson: [
		220,
		20,
		60,
		1
	],
	cyan: [
		0,
		255,
		255,
		1
	],
	darkblue: [
		0,
		0,
		139,
		1
	],
	darkcyan: [
		0,
		139,
		139,
		1
	],
	darkgoldenrod: [
		184,
		134,
		11,
		1
	],
	darkgray: [
		169,
		169,
		169,
		1
	],
	darkgreen: [
		0,
		100,
		0,
		1
	],
	darkgrey: [
		169,
		169,
		169,
		1
	],
	darkkhaki: [
		189,
		183,
		107,
		1
	],
	darkmagenta: [
		139,
		0,
		139,
		1
	],
	darkolivegreen: [
		85,
		107,
		47,
		1
	],
	darkorange: [
		255,
		140,
		0,
		1
	],
	darkorchid: [
		153,
		50,
		204,
		1
	],
	darkred: [
		139,
		0,
		0,
		1
	],
	darksalmon: [
		233,
		150,
		122,
		1
	],
	darkseagreen: [
		143,
		188,
		143,
		1
	],
	darkslateblue: [
		72,
		61,
		139,
		1
	],
	darkslategray: [
		47,
		79,
		79,
		1
	],
	darkslategrey: [
		47,
		79,
		79,
		1
	],
	darkturquoise: [
		0,
		206,
		209,
		1
	],
	darkviolet: [
		148,
		0,
		211,
		1
	],
	deeppink: [
		255,
		20,
		147,
		1
	],
	deepskyblue: [
		0,
		191,
		255,
		1
	],
	dimgray: [
		105,
		105,
		105,
		1
	],
	dimgrey: [
		105,
		105,
		105,
		1
	],
	dodgerblue: [
		30,
		144,
		255,
		1
	],
	firebrick: [
		178,
		34,
		34,
		1
	],
	floralwhite: [
		255,
		250,
		240,
		1
	],
	forestgreen: [
		34,
		139,
		34,
		1
	],
	fuchsia: [
		255,
		0,
		255,
		1
	],
	gainsboro: [
		220,
		220,
		220,
		1
	],
	ghostwhite: [
		248,
		248,
		255,
		1
	],
	gold: [
		255,
		215,
		0,
		1
	],
	goldenrod: [
		218,
		165,
		32,
		1
	],
	gray: [
		128,
		128,
		128,
		1
	],
	green: [
		0,
		128,
		0,
		1
	],
	greenyellow: [
		173,
		255,
		47,
		1
	],
	grey: [
		128,
		128,
		128,
		1
	],
	honeydew: [
		240,
		255,
		240,
		1
	],
	hotpink: [
		255,
		105,
		180,
		1
	],
	indianred: [
		205,
		92,
		92,
		1
	],
	indigo: [
		75,
		0,
		130,
		1
	],
	ivory: [
		255,
		255,
		240,
		1
	],
	khaki: [
		240,
		230,
		140,
		1
	],
	lavender: [
		230,
		230,
		250,
		1
	],
	lavenderblush: [
		255,
		240,
		245,
		1
	],
	lawngreen: [
		124,
		252,
		0,
		1
	],
	lemonchiffon: [
		255,
		250,
		205,
		1
	],
	lightblue: [
		173,
		216,
		230,
		1
	],
	lightcoral: [
		240,
		128,
		128,
		1
	],
	lightcyan: [
		224,
		255,
		255,
		1
	],
	lightgoldenrodyellow: [
		250,
		250,
		210,
		1
	],
	lightgray: [
		211,
		211,
		211,
		1
	],
	lightgreen: [
		144,
		238,
		144,
		1
	],
	lightgrey: [
		211,
		211,
		211,
		1
	],
	lightpink: [
		255,
		182,
		193,
		1
	],
	lightsalmon: [
		255,
		160,
		122,
		1
	],
	lightseagreen: [
		32,
		178,
		170,
		1
	],
	lightskyblue: [
		135,
		206,
		250,
		1
	],
	lightslategray: [
		119,
		136,
		153,
		1
	],
	lightslategrey: [
		119,
		136,
		153,
		1
	],
	lightsteelblue: [
		176,
		196,
		222,
		1
	],
	lightyellow: [
		255,
		255,
		224,
		1
	],
	lime: [
		0,
		255,
		0,
		1
	],
	limegreen: [
		50,
		205,
		50,
		1
	],
	linen: [
		250,
		240,
		230,
		1
	],
	magenta: [
		255,
		0,
		255,
		1
	],
	maroon: [
		128,
		0,
		0,
		1
	],
	mediumaquamarine: [
		102,
		205,
		170,
		1
	],
	mediumblue: [
		0,
		0,
		205,
		1
	],
	mediumorchid: [
		186,
		85,
		211,
		1
	],
	mediumpurple: [
		147,
		112,
		219,
		1
	],
	mediumseagreen: [
		60,
		179,
		113,
		1
	],
	mediumslateblue: [
		123,
		104,
		238,
		1
	],
	mediumspringgreen: [
		0,
		250,
		154,
		1
	],
	mediumturquoise: [
		72,
		209,
		204,
		1
	],
	mediumvioletred: [
		199,
		21,
		133,
		1
	],
	midnightblue: [
		25,
		25,
		112,
		1
	],
	mintcream: [
		245,
		255,
		250,
		1
	],
	mistyrose: [
		255,
		228,
		225,
		1
	],
	moccasin: [
		255,
		228,
		181,
		1
	],
	navajowhite: [
		255,
		222,
		173,
		1
	],
	navy: [
		0,
		0,
		128,
		1
	],
	oldlace: [
		253,
		245,
		230,
		1
	],
	olive: [
		128,
		128,
		0,
		1
	],
	olivedrab: [
		107,
		142,
		35,
		1
	],
	orange: [
		255,
		165,
		0,
		1
	],
	orangered: [
		255,
		69,
		0,
		1
	],
	orchid: [
		218,
		112,
		214,
		1
	],
	palegoldenrod: [
		238,
		232,
		170,
		1
	],
	palegreen: [
		152,
		251,
		152,
		1
	],
	paleturquoise: [
		175,
		238,
		238,
		1
	],
	palevioletred: [
		219,
		112,
		147,
		1
	],
	papayawhip: [
		255,
		239,
		213,
		1
	],
	peachpuff: [
		255,
		218,
		185,
		1
	],
	peru: [
		205,
		133,
		63,
		1
	],
	pink: [
		255,
		192,
		203,
		1
	],
	plum: [
		221,
		160,
		221,
		1
	],
	powderblue: [
		176,
		224,
		230,
		1
	],
	purple: [
		128,
		0,
		128,
		1
	],
	red: [
		255,
		0,
		0,
		1
	],
	rosybrown: [
		188,
		143,
		143,
		1
	],
	royalblue: [
		65,
		105,
		225,
		1
	],
	saddlebrown: [
		139,
		69,
		19,
		1
	],
	salmon: [
		250,
		128,
		114,
		1
	],
	sandybrown: [
		244,
		164,
		96,
		1
	],
	seagreen: [
		46,
		139,
		87,
		1
	],
	seashell: [
		255,
		245,
		238,
		1
	],
	sienna: [
		160,
		82,
		45,
		1
	],
	silver: [
		192,
		192,
		192,
		1
	],
	skyblue: [
		135,
		206,
		235,
		1
	],
	slateblue: [
		106,
		90,
		205,
		1
	],
	slategray: [
		112,
		128,
		144,
		1
	],
	slategrey: [
		112,
		128,
		144,
		1
	],
	snow: [
		255,
		250,
		250,
		1
	],
	springgreen: [
		0,
		255,
		127,
		1
	],
	steelblue: [
		70,
		130,
		180,
		1
	],
	tan: [
		210,
		180,
		140,
		1
	],
	teal: [
		0,
		128,
		128,
		1
	],
	thistle: [
		216,
		191,
		216,
		1
	],
	tomato: [
		255,
		99,
		71,
		1
	],
	turquoise: [
		64,
		224,
		208,
		1
	],
	violet: [
		238,
		130,
		238,
		1
	],
	wheat: [
		245,
		222,
		179,
		1
	],
	white: [
		255,
		255,
		255,
		1
	],
	whitesmoke: [
		245,
		245,
		245,
		1
	],
	yellow: [
		255,
		255,
		0,
		1
	],
	yellowgreen: [
		154,
		205,
		50,
		1
	]
};
function qr(e) {
	return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e;
}
function Jr(e) {
	return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e;
}
function Yr(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e;
}
function Xr(e) {
	var t = e;
	return t.length && t.charAt(t.length - 1) === "%" ? qr(parseFloat(t) / 100 * 255) : qr(parseInt(t, 10));
}
function Zr(e) {
	var t = e;
	return t.length && t.charAt(t.length - 1) === "%" ? Yr(parseFloat(t) / 100) : Yr(parseFloat(t));
}
function Qr(e, t, n) {
	return n < 0 ? n += 1 : n > 1 && --n, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function $r(e, t, n) {
	return e + (t - e) * n;
}
function ei(e, t, n, r, i) {
	return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e;
}
function ti(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
var ni = new ct(20), ri = null;
function ii(e, t) {
	ri && ti(ri, t), ri = ni.put(e, ri || t.slice());
}
function ai(e, t) {
	if (e) {
		t ||= [];
		var n = ni.get(e);
		if (n) return ti(t, n);
		e += "";
		var r = e.replace(/ /g, "").toLowerCase();
		if (r in Kr) return ti(t, Kr[r]), ii(e, t), t;
		var i = r.length;
		if (r.charAt(0) === "#") {
			if (i === 4 || i === 5) {
				var a = parseInt(r.slice(1, 4), 16);
				if (!(a >= 0 && a <= 4095)) {
					ei(t, 0, 0, 0, 1);
					return;
				}
				return ei(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(r.slice(4), 16) / 15 : 1), ii(e, t), t;
			}
			if (i === 7 || i === 9) {
				var a = parseInt(r.slice(1, 7), 16);
				if (!(a >= 0 && a <= 16777215)) {
					ei(t, 0, 0, 0, 1);
					return;
				}
				return ei(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(r.slice(7), 16) / 255 : 1), ii(e, t), t;
			}
			return;
		}
		var o = r.indexOf("("), s = r.indexOf(")");
		if (o !== -1 && s + 1 === i) {
			var c = r.substr(0, o), l = r.substr(o + 1, s - (o + 1)).split(","), u = 1;
			switch (c) {
				case "rgba":
					if (l.length !== 4) return l.length === 3 ? ei(t, +l[0], +l[1], +l[2], 1) : ei(t, 0, 0, 0, 1);
					u = Zr(l.pop());
				case "rgb":
					if (l.length >= 3) return ei(t, Xr(l[0]), Xr(l[1]), Xr(l[2]), l.length === 3 ? u : Zr(l[3])), ii(e, t), t;
					ei(t, 0, 0, 0, 1);
					return;
				case "hsla":
					if (l.length !== 4) {
						ei(t, 0, 0, 0, 1);
						return;
					}
					return l[3] = Zr(l[3]), oi(l, t), ii(e, t), t;
				case "hsl":
					if (l.length !== 3) {
						ei(t, 0, 0, 0, 1);
						return;
					}
					return oi(l, t), ii(e, t), t;
				default: return;
			}
		}
		ei(t, 0, 0, 0, 1);
	}
}
function oi(e, t) {
	var n = (parseFloat(e[0]) % 360 + 360) % 360 / 360, r = Zr(e[1]), i = Zr(e[2]), a = i <= .5 ? i * (r + 1) : i + r - i * r, o = i * 2 - a;
	return t ||= [], ei(t, qr(Qr(o, a, n + 1 / 3) * 255), qr(Qr(o, a, n) * 255), qr(Qr(o, a, n - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t;
}
function si(e) {
	if (e) {
		var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = a - i, s = (a + i) / 2, c, l;
		if (o === 0) c = 0, l = 0;
		else {
			l = s < .5 ? o / (a + i) : o / (2 - a - i);
			var u = ((a - t) / 6 + o / 2) / o, d = ((a - n) / 6 + o / 2) / o, f = ((a - r) / 6 + o / 2) / o;
			t === a ? c = f - d : n === a ? c = 1 / 3 + u - f : r === a && (c = 2 / 3 + d - u), c < 0 && (c += 1), c > 1 && --c;
		}
		var p = [
			c * 360,
			l,
			s
		];
		return e[3] != null && p.push(e[3]), p;
	}
}
function ci(e, t) {
	var n = ai(e);
	if (n) {
		for (var r = 0; r < 3; r++) t < 0 ? n[r] = n[r] * (1 - t) | 0 : n[r] = (255 - n[r]) * t + n[r] | 0, n[r] > 255 ? n[r] = 255 : n[r] < 0 && (n[r] = 0);
		return gi(n, n.length === 4 ? "rgba" : "rgb");
	}
}
function li(e) {
	var t = ai(e);
	if (t) return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
}
function ui(e, t, n) {
	if (t && t.length && e >= 0 && e <= 1) {
		n ||= [];
		var r = e * (t.length - 1), i = Math.floor(r), a = Math.ceil(r), o = t[i], s = t[a], c = r - i;
		return n[0] = qr($r(o[0], s[0], c)), n[1] = qr($r(o[1], s[1], c)), n[2] = qr($r(o[2], s[2], c)), n[3] = Yr($r(o[3], s[3], c)), n;
	}
}
var di = ui;
function fi(e, t, n) {
	if (t && t.length && e >= 0 && e <= 1) {
		var r = e * (t.length - 1), i = Math.floor(r), a = Math.ceil(r), o = ai(t[i]), s = ai(t[a]), c = r - i, l = gi([
			qr($r(o[0], s[0], c)),
			qr($r(o[1], s[1], c)),
			qr($r(o[2], s[2], c)),
			Yr($r(o[3], s[3], c))
		], "rgba");
		return n ? {
			color: l,
			leftIndex: i,
			rightIndex: a,
			value: r
		} : l;
	}
}
var pi = fi;
function mi(e, t, n, r) {
	var i = ai(e);
	if (e) return i = si(i), t != null && (i[0] = Jr(H(t) ? t(i[0]) : t)), n != null && (i[1] = Zr(H(n) ? n(i[1]) : n)), r != null && (i[2] = Zr(H(r) ? r(i[2]) : r)), gi(oi(i), "rgba");
}
function hi(e, t) {
	var n = ai(e);
	if (n && t != null) return n[3] = Yr(t), gi(n, "rgba");
}
function gi(e, t) {
	if (e && e.length) {
		var n = e[0] + "," + e[1] + "," + e[2];
		return (t === "rgba" || t === "hsva" || t === "hsla") && (n += "," + e[3]), t + "(" + n + ")";
	}
}
function _i(e, t) {
	var n = ai(e);
	return n ? (.299 * n[0] + .587 * n[1] + .114 * n[2]) * n[3] / 255 + (1 - n[3]) * t : 0;
}
function vi() {
	return gi([
		Math.round(Math.random() * 255),
		Math.round(Math.random() * 255),
		Math.round(Math.random() * 255)
	], "rgb");
}
var yi = new ct(100);
function bi(e) {
	if (U(e)) {
		var t = yi.get(e);
		return t || (t = ci(e, -.1), yi.put(e, t)), t;
	}
	if (ve(e)) {
		var n = N({}, e);
		return n.colorStops = L(e.colorStops, function(e) {
			return {
				offset: e.offset,
				color: ci(e.color, -.1)
			};
		}), n;
	}
	return e;
}
//#endregion
//#region node_modules/zrender/lib/svg/helper.js
var xi = Math.round;
function Si(e) {
	var t;
	if (!e || e === "transparent") e = "none";
	else if (typeof e == "string" && e.indexOf("rgba") > -1) {
		var n = ai(e);
		n && (e = "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")", t = n[3]);
	}
	return {
		color: e,
		opacity: t ?? 1
	};
}
var Ci = 1e-4;
function wi(e) {
	return e < Ci && e > -Ci;
}
function Ti(e) {
	return xi(e * 1e3) / 1e3;
}
function Ei(e) {
	return xi(e * 1e4) / 1e4;
}
function Di(e) {
	return "matrix(" + Ti(e[0]) + "," + Ti(e[1]) + "," + Ti(e[2]) + "," + Ti(e[3]) + "," + Ei(e[4]) + "," + Ei(e[5]) + ")";
}
var Oi = {
	left: "start",
	right: "end",
	center: "middle",
	middle: "middle"
};
function ki(e, t, n) {
	return n === "top" ? e += t / 2 : n === "bottom" && (e -= t / 2), e;
}
function Ai(e) {
	return e && (e.shadowBlur || e.shadowOffsetX || e.shadowOffsetY);
}
function ji(e) {
	var t = e.style, n = e.getGlobalScale();
	return [
		t.shadowColor,
		(t.shadowBlur || 0).toFixed(2),
		(t.shadowOffsetX || 0).toFixed(2),
		(t.shadowOffsetY || 0).toFixed(2),
		n[0],
		n[1]
	].join(",");
}
function Mi(e) {
	return e && !!e.image;
}
function Ni(e) {
	return e && !!e.svgElement;
}
function Pi(e) {
	return Mi(e) || Ni(e);
}
function Fi(e) {
	return e.type === "linear";
}
function Ii(e) {
	return e.type === "radial";
}
function Li(e) {
	return e && (e.type === "linear" || e.type === "radial");
}
function Ri(e) {
	return "url(#" + e + ")";
}
function zi(e) {
	var t = e.getGlobalScale(), n = Math.max(t[0], t[1]);
	return Math.max(Math.ceil(Math.log(n) / Math.log(10)), 1);
}
function Bi(e) {
	var t = e.x || 0, n = e.y || 0, r = (e.rotation || 0) * ze, i = G(e.scaleX, 1), a = G(e.scaleY, 1), o = e.skewX || 0, s = e.skewY || 0, c = [];
	return (t || n) && c.push("translate(" + t + "px," + n + "px)"), r && c.push("rotate(" + r + ")"), (i !== 1 || a !== 1) && c.push("scale(" + i + "," + a + ")"), (o || s) && c.push("skew(" + xi(o * ze) + "deg, " + xi(s * ze) + "deg)"), c.join(" ");
}
var Vi = (function() {
	return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(e) {
		return Buffer.from(e).toString("base64");
	} : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(e) {
		return btoa(unescape(encodeURIComponent(e)));
	} : function(e) {
		return null;
	};
})(), Hi = Array.prototype.slice;
function Ui(e, t, n) {
	return (t - e) * n + e;
}
function Wi(e, t, n, r) {
	for (var i = t.length, a = 0; a < i; a++) e[a] = Ui(t[a], n[a], r);
	return e;
}
function Gi(e, t, n, r) {
	for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
		e[o] || (e[o] = []);
		for (var s = 0; s < a; s++) e[o][s] = Ui(t[o][s], n[o][s], r);
	}
	return e;
}
function Ki(e, t, n, r) {
	for (var i = t.length, a = 0; a < i; a++) e[a] = t[a] + n[a] * r;
	return e;
}
function qi(e, t, n, r) {
	for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
		e[o] || (e[o] = []);
		for (var s = 0; s < a; s++) e[o][s] = t[o][s] + n[o][s] * r;
	}
	return e;
}
function Ji(e, t) {
	for (var n = e.length, r = t.length, i = n > r ? t : e, a = Math.min(n, r), o = i[a - 1] || {
		color: [
			0,
			0,
			0,
			0
		],
		offset: 0
	}, s = a; s < Math.max(n, r); s++) i.push({
		offset: o.offset,
		color: o.color.slice()
	});
}
function Yi(e, t, n) {
	var r = e, i = t;
	if (r.push && i.push) {
		var a = r.length, o = i.length;
		if (a !== o) {
			if (a > o) r.length = o;
			else for (var s = a; s < o; s++) r.push(n === 1 ? i[s] : Hi.call(i[s]));
		}
		for (var c = r[0] && r[0].length, s = 0; s < r.length; s++) if (n === 1) isNaN(r[s]) && (r[s] = i[s]);
		else for (var l = 0; l < c; l++) isNaN(r[s][l]) && (r[s][l] = i[s][l]);
	}
}
function Xi(e) {
	if (ce(e)) {
		var t = e.length;
		if (ce(e[0])) {
			for (var n = [], r = 0; r < t; r++) n.push(Hi.call(e[r]));
			return n;
		}
		return Hi.call(e);
	}
	return e;
}
function Zi(e) {
	return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")";
}
function Qi(e) {
	return ce(e && e[0]) ? 2 : 1;
}
var $i = 0, ea = 1, ta = 2, na = 3, ra = 4, ia = 5, aa = 6;
function oa(e) {
	return e === ra || e === ia;
}
function sa(e) {
	return e === ea || e === ta;
}
var ca = [
	0,
	0,
	0,
	0
], la = function() {
	function e(e) {
		this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = e;
	}
	return e.prototype.isFinished = function() {
		return this._finished;
	}, e.prototype.setFinished = function() {
		this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
	}, e.prototype.needsAnimate = function() {
		return this.keyframes.length >= 1;
	}, e.prototype.getAdditiveTrack = function() {
		return this._additiveTrack;
	}, e.prototype.addKeyframe = function(e, t, n) {
		this._needsSort = !0;
		var r = this.keyframes, i = r.length, a = !1, o = aa, s = t;
		if (ce(t)) {
			var c = Qi(t);
			o = c, (c === 1 && !me(t[0]) || c === 2 && !me(t[0][0])) && (a = !0);
		} else if (me(t) && !xe(t)) o = $i;
		else if (U(t)) {
			if (!isNaN(+t)) o = $i;
			else {
				var l = ai(t);
				l && (s = l, o = na);
			}
		} else if (ve(t)) {
			var u = N({}, s);
			u.colorStops = L(t.colorStops, function(e) {
				return {
					offset: e.offset,
					color: ai(e.color)
				};
			}), Fi(t) ? o = ra : Ii(t) && (o = ia), s = u;
		}
		i === 0 ? this.valType = o : (o !== this.valType || o === aa) && (a = !0), this.discrete = this.discrete || a;
		var d = {
			time: e,
			value: s,
			rawValue: t,
			percent: 0
		};
		return n && (d.easing = n, d.easingFunc = H(n) ? n : gr[n] || Ur(n)), r.push(d), d;
	}, e.prototype.prepare = function(e, t) {
		var n = this.keyframes;
		this._needsSort && n.sort(function(e, t) {
			return e.time - t.time;
		});
		for (var r = this.valType, i = n.length, a = n[i - 1], o = this.discrete, s = sa(r), c = oa(r), l = 0; l < i; l++) {
			var u = n[l], d = u.value, f = a.value;
			u.percent = u.time / e, o || (s && l !== i - 1 ? Yi(d, f, r) : c && Ji(d.colorStops, f.colorStops));
		}
		if (!o && r !== ia && t && this.needsAnimate() && t.needsAnimate() && r === t.valType && !t._finished) {
			this._additiveTrack = t;
			for (var p = n[0].value, l = 0; l < i; l++) r === $i ? n[l].additiveValue = n[l].value - p : r === na ? n[l].additiveValue = Ki([], n[l].value, p, -1) : sa(r) && (n[l].additiveValue = r === ea ? Ki([], n[l].value, p, -1) : qi([], n[l].value, p, -1));
		}
	}, e.prototype.step = function(e, t) {
		if (!this._finished) {
			this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
			var n = this._additiveTrack != null, r = n ? "additiveValue" : "value", i = this.valType, a = this.keyframes, o = a.length, s = this.propName, c = i === na, l, u = this._lastFr, d = Math.min, f, p;
			if (o === 1) f = p = a[0];
			else {
				if (t < 0) l = 0;
				else if (t < this._lastFrP) {
					for (l = d(u + 1, o - 1); l >= 0 && !(a[l].percent <= t); l--);
					l = d(l, o - 2);
				} else {
					for (l = u; l < o && !(a[l].percent > t); l++);
					l = d(l - 1, o - 2);
				}
				p = a[l + 1], f = a[l];
			}
			if (f && p) {
				this._lastFr = l, this._lastFrP = t;
				var m = p.percent - f.percent, h = m === 0 ? 1 : d((t - f.percent) / m, 1);
				p.easingFunc && (h = p.easingFunc(h));
				var g = n ? this._additiveValue : c ? ca : e[s];
				if ((sa(i) || c) && !g && (g = this._additiveValue = []), this.discrete) e[s] = h < 1 ? f.rawValue : p.rawValue;
				else if (sa(i)) i === ea ? Wi(g, f[r], p[r], h) : Gi(g, f[r], p[r], h);
				else if (oa(i)) {
					var _ = f[r], v = p[r], y = i === ra;
					e[s] = {
						type: y ? "linear" : "radial",
						x: Ui(_.x, v.x, h),
						y: Ui(_.y, v.y, h),
						colorStops: L(_.colorStops, function(e, t) {
							var n = v.colorStops[t];
							return {
								offset: Ui(e.offset, n.offset, h),
								color: Zi(Wi([], e.color, n.color, h))
							};
						}),
						global: v.global
					}, y ? (e[s].x2 = Ui(_.x2, v.x2, h), e[s].y2 = Ui(_.y2, v.y2, h)) : e[s].r = Ui(_.r, v.r, h);
				} else if (c) Wi(g, f[r], p[r], h), n || (e[s] = Zi(g));
				else {
					var b = Ui(f[r], p[r], h);
					n ? this._additiveValue = b : e[s] = b;
				}
				n && this._addToTarget(e);
			}
		}
	}, e.prototype._addToTarget = function(e) {
		var t = this.valType, n = this.propName, r = this._additiveValue;
		t === $i ? e[n] = e[n] + r : t === na ? (ai(e[n], ca), Ki(ca, ca, r, 1), e[n] = Zi(ca)) : t === ea ? Ki(e[n], e[n], r, 1) : t === ta && qi(e[n], e[n], r, 1);
	}, e;
}(), ua = function() {
	function e(e, t, n, r) {
		if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = e, this._loop = t, t && r) {
			ne("Can' use additive animation on looped animation.");
			return;
		}
		this._additiveAnimators = r, this._allowDiscrete = n;
	}
	return e.prototype.getMaxTime = function() {
		return this._maxTime;
	}, e.prototype.getDelay = function() {
		return this._delay;
	}, e.prototype.getLoop = function() {
		return this._loop;
	}, e.prototype.getTarget = function() {
		return this._target;
	}, e.prototype.changeTarget = function(e) {
		this._target = e;
	}, e.prototype.when = function(e, t, n) {
		return this.whenWithKeys(e, t, z(t), n);
	}, e.prototype.whenWithKeys = function(e, t, n, r) {
		for (var i = this._tracks, a = 0; a < n.length; a++) {
			var o = n[a], s = i[o];
			if (!s) {
				s = i[o] = new la(o);
				var c = void 0, l = this._getAdditiveTrack(o);
				if (l) {
					var u = l.keyframes, d = u[u.length - 1];
					c = d && d.value, l.valType === na && c && (c = Zi(c));
				} else c = this._target[o];
				if (c == null) continue;
				e > 0 && s.addKeyframe(0, Xi(c), r), this._trackKeys.push(o);
			}
			s.addKeyframe(e, Xi(t[o]), r);
		}
		return this._maxTime = Math.max(this._maxTime, e), this;
	}, e.prototype.pause = function() {
		this._clip.pause(), this._paused = !0;
	}, e.prototype.resume = function() {
		this._clip.resume(), this._paused = !1;
	}, e.prototype.isPaused = function() {
		return !!this._paused;
	}, e.prototype.duration = function(e) {
		return this._maxTime = e, this._force = !0, this;
	}, e.prototype._doneCallback = function() {
		this._setTracksFinished(), this._clip = null;
		var e = this._doneCbs;
		if (e) for (var t = e.length, n = 0; n < t; n++) e[n].call(this);
	}, e.prototype._abortedCallback = function() {
		this._setTracksFinished();
		var e = this.animation, t = this._abortedCbs;
		if (e && e.removeClip(this._clip), this._clip = null, t) for (var n = 0; n < t.length; n++) t[n].call(this);
	}, e.prototype._setTracksFinished = function() {
		for (var e = this._tracks, t = this._trackKeys, n = 0; n < t.length; n++) e[t[n]].setFinished();
	}, e.prototype._getAdditiveTrack = function(e) {
		var t, n = this._additiveAnimators;
		if (n) for (var r = 0; r < n.length; r++) {
			var i = n[r].getTrack(e);
			i && (t = i);
		}
		return t;
	}, e.prototype.start = function(e) {
		if (!(this._started > 0)) {
			this._started = 1;
			for (var t = this, n = [], r = this._maxTime || 0, i = 0; i < this._trackKeys.length; i++) {
				var a = this._trackKeys[i], o = this._tracks[a], s = this._getAdditiveTrack(a), c = o.keyframes, l = c.length;
				if (o.prepare(r, s), o.needsAnimate()) {
					if (!this._allowDiscrete && o.discrete) {
						var u = c[l - 1];
						u && (t._target[o.propName] = u.rawValue), o.setFinished();
					} else n.push(o);
				}
			}
			if (n.length || this._force) {
				var d = new Wr({
					life: r,
					loop: this._loop,
					delay: this._delay || 0,
					onframe: function(e) {
						t._started = 2;
						var r = t._additiveAnimators;
						if (r) {
							for (var i = !1, a = 0; a < r.length; a++) if (r[a]._clip) {
								i = !0;
								break;
							}
							i || (t._additiveAnimators = null);
						}
						for (var a = 0; a < n.length; a++) n[a].step(t._target, e);
						var o = t._onframeCbs;
						if (o) for (var a = 0; a < o.length; a++) o[a](t._target, e);
					},
					ondestroy: function() {
						t._doneCallback();
					}
				});
				this._clip = d, this.animation && this.animation.addClip(d), e && d.setEasing(e);
			} else this._doneCallback();
			return this;
		}
	}, e.prototype.stop = function(e) {
		if (this._clip) {
			var t = this._clip;
			e && t.onframe(1), this._abortedCallback();
		}
	}, e.prototype.delay = function(e) {
		return this._delay = e, this;
	}, e.prototype.during = function(e) {
		return e && (this._onframeCbs ||= [], this._onframeCbs.push(e)), this;
	}, e.prototype.done = function(e) {
		return e && (this._doneCbs ||= [], this._doneCbs.push(e)), this;
	}, e.prototype.aborted = function(e) {
		return e && (this._abortedCbs ||= [], this._abortedCbs.push(e)), this;
	}, e.prototype.getClip = function() {
		return this._clip;
	}, e.prototype.getTrack = function(e) {
		return this._tracks[e];
	}, e.prototype.getTracks = function() {
		var e = this;
		return L(this._trackKeys, function(t) {
			return e._tracks[t];
		});
	}, e.prototype.stopTracks = function(e, t) {
		if (!e.length || !this._clip) return !0;
		for (var n = this._tracks, r = this._trackKeys, i = 0; i < e.length; i++) {
			var a = n[e[i]];
			a && !a.isFinished() && (t ? a.step(this._target, 1) : this._started === 1 && a.step(this._target, 0), a.setFinished());
		}
		for (var o = !0, i = 0; i < r.length; i++) if (!n[r[i]].isFinished()) {
			o = !1;
			break;
		}
		return o && this._abortedCallback(), o;
	}, e.prototype.saveTo = function(e, t, n) {
		if (e) {
			t ||= this._trackKeys;
			for (var r = 0; r < t.length; r++) {
				var i = t[r], a = this._tracks[i];
				if (a && !a.isFinished()) {
					var o = a.keyframes, s = o[n ? 0 : o.length - 1];
					s && (e[i] = Xi(s.rawValue));
				}
			}
		}
	}, e.prototype.__changeFinalValue = function(e, t) {
		t ||= z(e);
		for (var n = 0; n < t.length; n++) {
			var r = t[n], i = this._tracks[r];
			if (i) {
				var a = i.keyframes;
				if (a.length > 1) {
					var o = a.pop();
					i.addKeyframe(o.time, e[r]), i.prepare(this._maxTime, i.getAdditiveTrack());
				}
			}
		}
	}, e;
}(), da = function() {
	function e(e) {
		e && (this._$eventProcessor = e);
	}
	return e.prototype.on = function(e, t, n, r) {
		this._$handlers ||= {};
		var i = this._$handlers;
		if (typeof t == "function" && (r = n, n = t, t = null), !n || !e) return this;
		var a = this._$eventProcessor;
		t != null && a && a.normalizeQuery && (t = a.normalizeQuery(t)), i[e] || (i[e] = []);
		for (var o = 0; o < i[e].length; o++) if (i[e][o].h === n) return this;
		var s = {
			h: n,
			query: t,
			ctx: r || this,
			callAtLast: n.zrEventfulCallAtLast
		}, c = i[e].length - 1, l = i[e][c];
		return l && l.callAtLast ? i[e].splice(c, 0, s) : i[e].push(s), this;
	}, e.prototype.isSilent = function(e) {
		var t = this._$handlers;
		return !t || !t[e] || !t[e].length;
	}, e.prototype.off = function(e, t) {
		var n = this._$handlers;
		if (!n) return this;
		if (!e) return this._$handlers = {}, this;
		if (t) {
			if (n[e]) {
				for (var r = [], i = 0, a = n[e].length; i < a; i++) n[e][i].h !== t && r.push(n[e][i]);
				n[e] = r;
			}
			n[e] && n[e].length === 0 && delete n[e];
		} else delete n[e];
		return this;
	}, e.prototype.trigger = function(e) {
		var t = [...arguments].slice(1);
		if (!this._$handlers) return this;
		var n = this._$handlers[e], r = this._$eventProcessor;
		if (n) for (var i = t.length, a = n.length, o = 0; o < a; o++) {
			var s = n[o];
			if (!(r && r.filter && s.query != null && !r.filter(e, s.query))) switch (i) {
				case 0:
					s.h.call(s.ctx);
					break;
				case 1:
					s.h.call(s.ctx, t[0]);
					break;
				case 2:
					s.h.call(s.ctx, t[0], t[1]);
					break;
				default: s.h.apply(s.ctx, t);
			}
		}
		return r && r.afterTrigger && r.afterTrigger(e), this;
	}, e.prototype.triggerWithContext = function(e) {
		var t = [...arguments].slice(1);
		if (!this._$handlers) return this;
		var n = this._$handlers[e], r = this._$eventProcessor;
		if (n) for (var i = t.length, a = t[i - 1], o = n.length, s = 0; s < o; s++) {
			var c = n[s];
			if (!(r && r.filter && c.query != null && !r.filter(e, c.query))) switch (i) {
				case 0:
					c.h.call(a);
					break;
				case 1:
					c.h.call(a, t[0]);
					break;
				case 2:
					c.h.call(a, t[0], t[1]);
					break;
				default: c.h.apply(a, t.slice(1, i - 1));
			}
		}
		return r && r.afterTrigger && r.afterTrigger(e), this;
	}, e;
}(), fa = 1;
J.hasGlobalWindow && (fa = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var pa = fa, ma = .4, ha = "#333", ga = "#ccc", _a = "#eee", va = "__zr_normal__", ya = mr.concat(["ignore"]), ba = R(mr, function(e, t) {
	return e[t] = !0, e;
}, { ignore: !1 }), xa = {}, Sa = new X(0, 0, 0, 0), Ca = [], wa = function() {
	function e(e) {
		this.id = te(), this.animators = [], this.currentStates = [], this.states = {}, this._init(e);
	}
	return e.prototype._init = function(e) {
		this.attr(e);
	}, e.prototype.drift = function(e, t, n) {
		switch (this.draggable) {
			case "horizontal":
				t = 0;
				break;
			case "vertical": e = 0;
		}
		var r = this.transform;
		r ||= this.transform = [
			1,
			0,
			0,
			1,
			0,
			0
		], r[4] += e, r[5] += t, this.decomposeTransform(), this.markRedraw();
	}, e.prototype.beforeUpdate = function() {}, e.prototype.afterUpdate = function() {}, e.prototype.update = function() {
		this.updateTransform(), this.__dirty && this.updateInnerText();
	}, e.prototype.updateInnerText = function(e) {
		var t = this._textContent;
		if (t && (!t.ignore || e)) {
			this.textConfig ||= {};
			var n = this.textConfig, r = n.local, i = t.innerTransformable, a = void 0, o = void 0, s = !1;
			i.parent = r ? this : null;
			var c = !1;
			i.copyTransform(t);
			var l = n.position != null, u = n.autoOverflowArea, d = void 0;
			if ((u || l) && (d = Sa, n.layoutRect ? d.copy(n.layoutRect) : d.copy(this.getBoundingRect()), r || d.applyTransform(this.transform)), l) {
				this.calculateTextPosition ? this.calculateTextPosition(xa, n, d) : Pn(xa, n, d), i.x = xa.x, i.y = xa.y, a = xa.align, o = xa.verticalAlign;
				var f = n.origin;
				if (f && n.rotation != null) {
					var p = void 0, m = void 0;
					f === "center" ? (p = d.width * .5, m = d.height * .5) : (p = Nn(f[0], d.width), m = Nn(f[1], d.height)), c = !0, i.originX = -i.x + p + (r ? 0 : d.x), i.originY = -i.y + m + (r ? 0 : d.y);
				}
			}
			n.rotation != null && (i.rotation = n.rotation);
			var h = n.offset;
			h && (i.x += h[0], i.y += h[1], c || (i.originX = -h[0], i.originY = -h[1]));
			var g = this._innerTextDefaultStyle ||= {};
			if (u) {
				var _ = g.overflowRect = g.overflowRect || new X(0, 0, 0, 0);
				i.getLocalTransform(Ca), St(Ca, Ca), X.copy(_, d), _.applyTransform(Ca);
			} else g.overflowRect = null;
			var v = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, y = void 0, b = void 0, x = void 0;
			v && this.canBeInsideText() ? (y = n.insideFill, b = n.insideStroke, (y == null || y === "auto") && (y = this.getInsideTextFill()), (b == null || b === "auto") && (b = this.getInsideTextStroke(y), x = !0)) : (y = n.outsideFill, b = n.outsideStroke, (y == null || y === "auto") && (y = this.getOutsideFill()), (b == null || b === "auto") && (b = this.getOutsideStroke(y), x = !0)), y ||= "#000", (y !== g.fill || b !== g.stroke || x !== g.autoStroke || a !== g.align || o !== g.verticalAlign) && (s = !0, g.fill = y, g.stroke = b, g.autoStroke = x, g.align = a, g.verticalAlign = o, t.setDefaultTextStyle(g)), t.__dirty |= 1, s && t.dirtyStyle(!0);
		}
	}, e.prototype.canBeInsideText = function() {
		return !0;
	}, e.prototype.getInsideTextFill = function() {
		return "#fff";
	}, e.prototype.getInsideTextStroke = function(e) {
		return "#000";
	}, e.prototype.getOutsideFill = function() {
		return this.__zr && this.__zr.isDarkMode() ? ga : ha;
	}, e.prototype.getOutsideStroke = function(e) {
		var t = this.__zr && this.__zr.getBackgroundColor(), n = typeof t == "string" && ai(t);
		n ||= [
			255,
			255,
			255,
			1
		];
		for (var r = n[3], i = this.__zr.isDarkMode(), a = 0; a < 3; a++) n[a] = n[a] * r + (i ? 0 : 255) * (1 - r);
		return n[3] = 1, gi(n, "rgba");
	}, e.prototype.traverse = function(e, t) {}, e.prototype.attrKV = function(e, t) {
		e === "textConfig" ? this.setTextConfig(t) : e === "textContent" ? this.setTextContent(t) : e === "clipPath" ? this.setClipPath(t) : e === "extra" ? (this.extra = this.extra || {}, N(this.extra, t)) : this[e] = t;
	}, e.prototype.hide = function() {
		this.ignore = !0, this.markRedraw();
	}, e.prototype.show = function() {
		this.ignore = !1, this.markRedraw();
	}, e.prototype.attr = function(e, t) {
		if (typeof e == "string") this.attrKV(e, t);
		else if (W(e)) for (var n = z(e), r = 0; r < n.length; r++) {
			var i = n[r];
			this.attrKV(i, e[i]);
		}
		return this.markRedraw(), this;
	}, e.prototype.saveCurrentToNormalState = function(e) {
		this._innerSaveToNormal(e);
		for (var t = this._normalState, n = 0; n < this.animators.length; n++) {
			var r = this.animators[n], i = r.__fromStateTransition;
			if (!(r.getLoop() || i && i !== "__zr_normal__")) {
				var a = r.targetName, o = a ? t[a] : t;
				r.saveTo(o);
			}
		}
	}, e.prototype._innerSaveToNormal = function(e) {
		var t = this._normalState;
		t ||= this._normalState = {}, e.textConfig && !t.textConfig && (t.textConfig = this.textConfig), this._savePrimaryToNormal(e, t, ya);
	}, e.prototype._savePrimaryToNormal = function(e, t, n) {
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e[i] != null && !(i in t) && (t[i] = this[i]);
		}
	}, e.prototype.hasState = function() {
		return this.currentStates.length > 0;
	}, e.prototype.getState = function(e) {
		return this.states[e];
	}, e.prototype.ensureState = function(e) {
		var t = this.states;
		return t[e] || (t[e] = {}), t[e];
	}, e.prototype.clearStates = function(e) {
		this.useState(va, !1, e);
	}, e.prototype.useState = function(e, t, n, r) {
		var i = e === va;
		if (this.hasState() || !i) {
			var a = this.currentStates, o = this.stateTransition;
			if (!(F(a, e) >= 0 && (t || a.length === 1))) {
				var s;
				if (this.stateProxy && !i && (s = this.stateProxy(e)), s ||= this.states && this.states[e], !s && !i) {
					ne("State " + e + " not exists.");
					return;
				}
				i || this.saveCurrentToNormalState(s);
				var c = this._textContent, l = Ma(this, c, s, r);
				l && !this.__inHover && (this.__inHover = l), this._applyStateObj(e, s, this._normalState, t, Pa(this, n, o), o);
				var u = this._textGuide;
				return c && c.useState(e, t, n, !!l), u && u.useState(e, t, n, !!l), i ? (this.currentStates = [], this._normalState = {}) : t ? this.currentStates.push(e) : this.currentStates = [e], this._updateAnimationTargets(), this.markRedraw(), !l && this.__inHover && (this.__inHover = 0, this.__dirty &= -2), s;
			}
		}
	}, e.prototype.useStates = function(e, t, n) {
		if (!e.length) this.clearStates();
		else {
			var r = [], i = this.currentStates, a = e.length, o = a === i.length;
			if (o) {
				for (var s = 0; s < a; s++) if (e[s] !== i[s]) {
					o = !1;
					break;
				}
			}
			if (o) return;
			for (var s = 0; s < a; s++) {
				var c = e[s], l = void 0;
				this.stateProxy && (l = this.stateProxy(c, e)), l ||= this.states[c], l && r.push(l);
			}
			var u = r[a - 1], d = this._textContent, f = Ma(this, d, u, n);
			f && !this.__inHover && (this.__inHover = f);
			var p = this._mergeStates(r), m = this.stateTransition;
			this.saveCurrentToNormalState(p), this._applyStateObj(e.join(","), p, this._normalState, !1, Pa(this, t, m), m);
			var h = this._textGuide;
			d && d.useStates(e, t, !!f), h && h.useStates(e, t, !!f), this._updateAnimationTargets(), this.currentStates = e.slice(), this.markRedraw(), !f && this.__inHover && (this.__inHover = 0, this.__dirty &= -2);
		}
	}, e.prototype.isSilent = function() {
		for (var e = this; e;) {
			if (e.silent) return !0;
			var t = e.__hostTarget;
			e = t ? e.ignoreHostSilent ? null : t : e.parent;
		}
		return !1;
	}, e.prototype._updateAnimationTargets = function() {
		for (var e = 0; e < this.animators.length; e++) {
			var t = this.animators[e];
			t.targetName && t.changeTarget(this[t.targetName]);
		}
	}, e.prototype.removeState = function(e) {
		var t = F(this.currentStates, e);
		if (t >= 0) {
			var n = this.currentStates.slice();
			n.splice(t, 1), this.useStates(n);
		}
	}, e.prototype.replaceState = function(e, t, n) {
		var r = this.currentStates.slice(), i = F(r, e), a = F(r, t) >= 0;
		i >= 0 ? a ? r.splice(i, 1) : r[i] = t : n && !a && r.push(t), this.useStates(r);
	}, e.prototype.toggleState = function(e, t) {
		t ? this.useState(e, !0) : this.removeState(e);
	}, e.prototype._mergeStates = function(e) {
		for (var t = {}, n, r = 0; r < e.length; r++) {
			var i = e[r];
			N(t, i), i.textConfig && (n ||= {}, N(n, i.textConfig));
		}
		return n && (t.textConfig = n), t;
	}, e.prototype._applyStateObj = function(e, t, n, r, i, a) {
		if (this.__inHover !== 1) {
			var o = !(t && r);
			t && t.textConfig ? (this.textConfig = N({}, r ? this.textConfig : n.textConfig), N(this.textConfig, t.textConfig)) : o && n.textConfig && (this.textConfig = n.textConfig);
			for (var s = {}, c = !1, l = 0; l < ya.length; l++) {
				var u = ya[l], d = i && ba[u];
				t && t[u] != null ? d ? (c = !0, s[u] = t[u]) : this[u] = t[u] : o && n[u] != null && (d ? (c = !0, s[u] = n[u]) : this[u] = n[u]);
			}
			if (!i) for (var l = 0; l < this.animators.length; l++) {
				var f = this.animators[l], p = f.targetName;
				f.getLoop() || f.__changeFinalValue(p ? (t || n)[p] : t || n);
			}
			c && this._transitionState(e, s, a);
		}
	}, e.prototype._attachComponent = function(e) {
		if ((!e.__zr || e.__hostTarget) && e !== this) {
			var t = this.__zr;
			t && e.addSelfToZr(t), e.__zr = t, e.__hostTarget = this;
		}
	}, e.prototype._detachComponent = function(e) {
		e.__zr && e.removeSelfFromZr(e.__zr), e.__zr = null, e.__hostTarget = null;
	}, e.prototype.getClipPath = function() {
		return this._clipPath;
	}, e.prototype.setClipPath = function(e) {
		this._clipPath && this._clipPath !== e && this.removeClipPath(), this._attachComponent(e), this._clipPath = e, this.markRedraw();
	}, e.prototype.removeClipPath = function() {
		var e = this._clipPath;
		e && (this._detachComponent(e), this._clipPath = null, this.markRedraw());
	}, e.prototype.getTextContent = function() {
		return this._textContent;
	}, e.prototype.setTextContent = function(e) {
		var t = this._textContent;
		t !== e && (t && t !== e && this.removeTextContent(), e.innerTransformable = new dr(), this._attachComponent(e), this._textContent = e, this.markRedraw());
	}, e.prototype.setTextConfig = function(e) {
		this.textConfig ||= {}, N(this.textConfig, e), this.markRedraw();
	}, e.prototype.removeTextConfig = function() {
		this.textConfig = null, this.markRedraw();
	}, e.prototype.removeTextContent = function() {
		var e = this._textContent;
		e && (e.innerTransformable = null, this._detachComponent(e), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
	}, e.prototype.getTextGuideLine = function() {
		return this._textGuide;
	}, e.prototype.setTextGuideLine = function(e) {
		this._textGuide && this._textGuide !== e && this.removeTextGuideLine(), this._attachComponent(e), this._textGuide = e, this.markRedraw();
	}, e.prototype.removeTextGuideLine = function() {
		var e = this._textGuide;
		e && (this._detachComponent(e), this._textGuide = null, this.markRedraw());
	}, e.prototype.markRedraw = function() {
		this.__dirty |= 1;
		var e = this.__zr;
		e && (this.__inHover ? e.refreshHover() : e.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
	}, e.prototype.dirty = function() {
		this.markRedraw();
	}, e.prototype.addSelfToZr = function(e) {
		if (this.__zr !== e) {
			this.__zr = e;
			var t = this.animators;
			if (t) for (var n = 0; n < t.length; n++) e.animation.addAnimator(t[n]);
			this._clipPath && this._clipPath.addSelfToZr(e), this._textContent && this._textContent.addSelfToZr(e), this._textGuide && this._textGuide.addSelfToZr(e);
		}
	}, e.prototype.removeSelfFromZr = function(e) {
		if (this.__zr) {
			this.__zr = null;
			var t = this.animators;
			if (t) for (var n = 0; n < t.length; n++) e.animation.removeAnimator(t[n]);
			this._clipPath && this._clipPath.removeSelfFromZr(e), this._textContent && this._textContent.removeSelfFromZr(e), this._textGuide && this._textGuide.removeSelfFromZr(e);
		}
	}, e.prototype.animate = function(e, t, n) {
		var r = new ua(e ? this[e] : this, t, n);
		return e && (r.targetName = e), this.addAnimator(r, e), r;
	}, e.prototype.addAnimator = function(e, t) {
		var n = this.__zr, r = this;
		e.during(function() {
			r.updateDuringAnimation(t);
		}).done(function() {
			var t = r.animators, n = F(t, e);
			n >= 0 && t.splice(n, 1);
		}), this.animators.push(e), n && n.animation.addAnimator(e), n && n.wakeUp();
	}, e.prototype.updateDuringAnimation = function(e) {
		this.markRedraw();
	}, e.prototype.stopAnimation = function(e, t) {
		for (var n = this.animators, r = n.length, i = [], a = 0; a < r; a++) {
			var o = n[a];
			!e || e === o.scope ? o.stop(t) : i.push(o);
		}
		return this.animators = i, this;
	}, e.prototype.animateTo = function(e, t, n) {
		Ta(this, e, t, n);
	}, e.prototype.animateFrom = function(e, t, n) {
		Ta(this, e, t, n, !0);
	}, e.prototype._transitionState = function(e, t, n, r) {
		for (var i = Ta(this, t, n, r), a = 0; a < i.length; a++) i[a].__fromStateTransition = e;
	}, e.prototype.getBoundingRect = function() {
		return null;
	}, e.prototype.getPaintRect = function() {
		return null;
	}, e.initDefaultProps = (function() {
		var t = e.prototype;
		t.type = "element", t.name = "", t.ignore = t.silent = t.ignoreHostSilent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = !1, t.__inHover = 0, t.__dirty = 1;
		function n(e, n, r, i) {
			Object.defineProperty(t, e, {
				get: function() {
					if (!this[n]) {
						var e = this[n] = [];
						a(this, e);
					}
					return this[n];
				},
				set: function(e) {
					this[r] = e[0], this[i] = e[1], this[n] = e, a(this, e);
				}
			});
			function a(e, t) {
				Object.defineProperty(t, 0, {
					get: function() {
						return e[r];
					},
					set: function(t) {
						e[r] = t;
					}
				}), Object.defineProperty(t, 1, {
					get: function() {
						return e[i];
					},
					set: function(t) {
						e[i] = t;
					}
				});
			}
		}
		Object.defineProperty && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"));
	})(), e;
}();
se(wa, da), se(wa, dr);
function Ta(e, t, n, r, i) {
	n ||= {};
	var a = [];
	ja(e, "", e, t, n, r, a, i);
	var o = a.length, s = !1, c = n.done, l = n.aborted, u = function() {
		s = !0, o--, o <= 0 && (s ? c && c() : l && l());
	}, d = function() {
		o--, o <= 0 && (s ? c && c() : l && l());
	};
	o || c && c(), a.length > 0 && n.during && a[0].during(function(e, t) {
		n.during(t);
	});
	for (var f = 0; f < a.length; f++) {
		var p = a[f];
		u && p.done(u), d && p.aborted(d), n.force && p.duration(n.duration), p.start(n.easing);
	}
	return a;
}
function Ea(e, t, n) {
	for (var r = 0; r < n; r++) e[r] = t[r];
}
function Da(e) {
	return ce(e[0]);
}
function Oa(e, t, n) {
	if (ce(t[n])) {
		if (ce(e[n]) || (e[n] = []), ge(t[n])) {
			var r = t[n].length;
			e[n].length !== r && (e[n] = new t[n].constructor(r), Ea(e[n], t[n], r));
		} else {
			var i = t[n], a = e[n], o = i.length;
			if (Da(i)) for (var s = i[0].length, c = 0; c < o; c++) a[c] ? Ea(a[c], i[c], s) : a[c] = Array.prototype.slice.call(i[c]);
			else Ea(a, i, o);
			a.length = i.length;
		}
	} else e[n] = t[n];
}
function ka(e, t) {
	return e === t || ce(e) && ce(t) && Aa(e, t);
}
function Aa(e, t) {
	var n = e.length;
	if (n !== t.length) return !1;
	for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
	return !0;
}
function ja(e, t, n, r, i, a, o, s) {
	for (var c = z(r), l = i.duration, u = i.delay, d = i.additive, f = i.setToFinal, p = !W(a), m = e.animators, h = [], g = 0; g < c.length; g++) {
		var _ = c[g], v = r[_];
		if (v != null && n[_] != null && (p || a[_])) {
			if (W(v) && !ce(v) && !ve(v)) {
				if (t) {
					s || (n[_] = v, e.updateDuringAnimation(t));
					continue;
				}
				ja(e, _, n[_], v, i, a && a[_], o, s);
			} else h.push(_);
		} else s || (n[_] = v, e.updateDuringAnimation(t), h.push(_));
	}
	var y = h.length;
	if (!d && y) for (var b = 0; b < m.length; b++) {
		var x = m[b];
		if (x.targetName === t && x.stopTracks(h)) {
			var S = F(m, x);
			m.splice(S, 1);
		}
	}
	if (i.force || (h = le(h, function(e) {
		return !ka(r[e], n[e]);
	}), y = h.length), y > 0 || i.force && !o.length) {
		var C = void 0, w = void 0, T = void 0;
		if (s) {
			w = {}, f && (C = {});
			for (var b = 0; b < y; b++) {
				var _ = h[b];
				w[_] = n[_], f ? C[_] = r[_] : n[_] = r[_];
			}
		} else if (f) {
			T = {};
			for (var b = 0; b < y; b++) {
				var _ = h[b];
				T[_] = Xi(n[_]), Oa(n, r, _);
			}
		}
		var x = new ua(n, !1, !1, d ? le(m, function(e) {
			return e.targetName === t;
		}) : null);
		x.targetName = t, i.scope && (x.scope = i.scope), f && C && x.whenWithKeys(0, C, h), T && x.whenWithKeys(0, T, h), x.whenWithKeys(l ?? 500, s ? w : r, h).delay(u || 0), e.addAnimator(x, t), o.push(x);
	}
}
function Ma(e, t, n, r) {
	return !(n && n.hoverLayer || r) || Na(e) || t && Na(t) ? 0 : 1;
}
function Na(e) {
	return e.type === "text" || e.type === "tspan";
}
function Pa(e, t, n) {
	return !t && !e.__inHover && n && n.duration > 0;
}
//#endregion
//#region node_modules/zrender/lib/graphic/Displayable.js
var Fa = "__zr_style_" + Math.round(Math.random() * 10), Ia = {
	shadowBlur: 0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	shadowColor: "#000",
	opacity: 1,
	blend: "source-over"
}, La = { style: {
	shadowBlur: !0,
	shadowOffsetX: !0,
	shadowOffsetY: !0,
	shadowColor: !0,
	opacity: !0
} };
Ia[Fa] = !0;
var Ra = [
	"z",
	"z2",
	"invisible"
], za = ["invisible"], Ba = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype._init = function(t) {
		for (var n = z(t), r = 0; r < n.length; r++) {
			var i = n[r];
			i === "style" ? this.useStyle(t[i]) : e.prototype.attrKV.call(this, i, t[i]);
		}
		this.style || this.useStyle({});
	}, t.prototype.beforeBrush = function(e) {}, t.prototype.afterBrush = function() {}, t.prototype.innerBeforeBrush = function() {}, t.prototype.innerAfterBrush = function() {}, t.prototype.shouldBePainted = function(e, t, n, r) {
		var i = this.transform;
		if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && Ua(this, e, t) || i && !i[0] && !i[3]) return !1;
		if (n && this.__clipPaths && this.__clipPaths.length) {
			for (var a = 0; a < this.__clipPaths.length; ++a) if (this.__clipPaths[a].isZeroArea()) return !1;
		}
		if (r && this.parent) for (var o = this.parent; o;) {
			if (o.ignore) return !1;
			o = o.parent;
		}
		return !0;
	}, t.prototype.contain = function(e, t) {
		return this.rectContain(e, t);
	}, t.prototype.traverse = function(e, t) {
		e.call(t, this);
	}, t.prototype.rectContain = function(e, t) {
		var n = this.transformCoordToLocal(e, t);
		return this.getBoundingRect().contain(n[0], n[1]);
	}, t.prototype.getPaintRect = function() {
		var e = this._paintRect;
		if (!this._paintRect || this.__dirty) {
			var t = this.transform, n = this.getBoundingRect(), r = this.style, i = r.shadowBlur || 0, a = r.shadowOffsetX || 0, o = r.shadowOffsetY || 0;
			e = this._paintRect ||= new X(0, 0, 0, 0), t ? X.applyTransform(e, n, t) : e.copy(n), (i || a || o) && (e.width += i * 2 + Math.abs(a), e.height += i * 2 + Math.abs(o), e.x = Math.min(e.x, e.x + a - i), e.y = Math.min(e.y, e.y + o - i));
			var s = this.dirtyRectTolerance;
			e.isZero() || (e.x = Math.floor(e.x - s), e.y = Math.floor(e.y - s), e.width = Math.ceil(e.width + 1 + s * 2), e.height = Math.ceil(e.height + 1 + s * 2));
		}
		return e;
	}, t.prototype.setPrevPaintRect = function(e) {
		e ? (this._prevPaintRect = this._prevPaintRect || new X(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
	}, t.prototype.getPrevPaintRect = function() {
		return this._prevPaintRect;
	}, t.prototype.animateStyle = function(e) {
		return this.animate("style", e);
	}, t.prototype.updateDuringAnimation = function(e) {
		e === "style" ? this.dirtyStyle() : this.markRedraw();
	}, t.prototype.attrKV = function(t, n) {
		t === "style" ? this.style ? this.setStyle(n) : this.useStyle(n) : e.prototype.attrKV.call(this, t, n);
	}, t.prototype.setStyle = function(e, t) {
		return typeof e == "string" ? this.style[e] = t : N(this.style, e), this.dirtyStyle(), this;
	}, t.prototype.dirtyStyle = function(e) {
		e || this.markRedraw(), this.__dirty |= 2, this._rect &&= null;
	}, t.prototype.dirty = function() {
		this.dirtyStyle();
	}, t.prototype.styleChanged = function() {
		return !!(this.__dirty & 2);
	}, t.prototype.styleUpdated = function() {
		this.__dirty &= -3;
	}, t.prototype.createStyle = function(e) {
		return Ie(Ia, e);
	}, t.prototype.useStyle = function(e) {
		e[Fa] || (e = this.createStyle(e)), this.style = e, this.dirtyStyle();
	}, t.prototype._useHoverStyle = function(e) {
		this.__hoverStyle = e;
	}, t.prototype.isStyleObject = function(e) {
		return e[Fa];
	}, t.prototype._innerSaveToNormal = function(t) {
		e.prototype._innerSaveToNormal.call(this, t);
		var n = this._normalState;
		t.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(t, n, Ra);
	}, t.prototype._applyStateObj = function(t, n, r, i, a, o) {
		e.prototype._applyStateObj.call(this, t, n, r, i, a, o);
		var s = !(n && i), c = this.__inHover === 1, l;
		if (n && n.style ? a ? i ? l = n.style : (l = this._mergeStyle(this.createStyle(), r.style), this._mergeStyle(l, n.style)) : (l = this._mergeStyle(this.createStyle(), i ? this.style : r.style), this._mergeStyle(l, n.style)) : s && (l = r.style), l) {
			if (a) {
				var u = this.style;
				if (this.style = this.createStyle(s ? {} : u), s) for (var d = z(u), f = 0; f < d.length; f++) {
					var p = d[f];
					p in l && (l[p] = l[p], this.style[p] = u[p]);
				}
				for (var m = z(l), f = 0; f < m.length; f++) {
					var p = m[f];
					this.style[p] = this.style[p];
				}
				this._transitionState(t, { style: l }, o, this.getAnimationStyleProps());
			} else c ? this._useHoverStyle(l) : this.useStyle(l);
		}
		if (!c) for (var h = this.__inHover ? za : Ra, f = 0; f < h.length; f++) {
			var p = h[f];
			n && n[p] != null ? this[p] = n[p] : s && r[p] != null && (this[p] = r[p]);
		}
	}, t.prototype._mergeStates = function(t) {
		for (var n = e.prototype._mergeStates.call(this, t), r, i = 0; i < t.length; i++) {
			var a = t[i];
			a.style && (r ||= {}, this._mergeStyle(r, a.style));
		}
		return r && (n.style = r), n;
	}, t.prototype._mergeStyle = function(e, t) {
		return N(e, t), e;
	}, t.prototype.getAnimationStyleProps = function() {
		return La;
	}, t.initDefaultProps = (function() {
		var e = t.prototype;
		e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = 0, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = 3;
	})(), t;
}(wa), Va = new X(0, 0, 0, 0), Ha = new X(0, 0, 0, 0);
function Ua(e, t, n) {
	return Va.copy(e.getBoundingRect()), e.transform && Va.applyTransform(e.transform), Ha.width = t, Ha.height = n, !Va.intersect(Ha);
}
//#endregion
//#region node_modules/zrender/lib/core/bbox.js
var Wa = Math.min, Ga = Math.max, Ka = Math.sin, qa = Math.cos, Ja = Math.PI * 2, Ya = Tt(), Xa = Tt(), Za = Tt();
function Qa(e, t, n, r, i, a) {
	i[0] = Wa(e, n), i[1] = Wa(t, r), a[0] = Ga(e, n), a[1] = Ga(t, r);
}
var $a = [], eo = [];
function to(e, t, n, r, i, a, o, s, c, l) {
	var u = jr, d = Or, f = u(e, n, i, o, $a);
	c[0] = Infinity, c[1] = Infinity, l[0] = -Infinity, l[1] = -Infinity;
	for (var p = 0; p < f; p++) {
		var m = d(e, n, i, o, $a[p]);
		c[0] = Wa(m, c[0]), l[0] = Ga(m, l[0]);
	}
	f = u(t, r, a, s, eo);
	for (var p = 0; p < f; p++) {
		var h = d(t, r, a, s, eo[p]);
		c[1] = Wa(h, c[1]), l[1] = Ga(h, l[1]);
	}
	c[0] = Wa(e, c[0]), l[0] = Ga(e, l[0]), c[0] = Wa(o, c[0]), l[0] = Ga(o, l[0]), c[1] = Wa(t, c[1]), l[1] = Ga(t, l[1]), c[1] = Wa(s, c[1]), l[1] = Ga(s, l[1]);
}
function no(e, t, n, r, i, a, o, s) {
	var c = Rr, l = Fr, u = Ga(Wa(c(e, n, i), 1), 0), d = Ga(Wa(c(t, r, a), 1), 0), f = l(e, n, i, u), p = l(t, r, a, d);
	o[0] = Wa(e, i, f), o[1] = Wa(t, a, p), s[0] = Ga(e, i, f), s[1] = Ga(t, a, p);
}
function ro(e, t, n, r, i, a, o, s, c) {
	var l = Jt, u = Yt, d = Math.abs(i - a);
	if (d % Ja < 1e-4 && d > 1e-4) {
		s[0] = e - n, s[1] = t - r, c[0] = e + n, c[1] = t + r;
		return;
	}
	if (Ya[0] = qa(i) * n + e, Ya[1] = Ka(i) * r + t, Xa[0] = qa(a) * n + e, Xa[1] = Ka(a) * r + t, l(s, Ya, Xa), u(c, Ya, Xa), i %= Ja, i < 0 && (i += Ja), a %= Ja, a < 0 && (a += Ja), i > a && !o ? a += Ja : i < a && o && (i += Ja), o) {
		var f = a;
		a = i, i = f;
	}
	for (var p = 0; p < a; p += Math.PI / 2) p > i && (Za[0] = qa(p) * n + e, Za[1] = Ka(p) * r + t, l(s, Za, s), u(c, Za, c));
}
//#endregion
//#region node_modules/zrender/lib/core/PathProxy.js
var io = {
	M: 1,
	L: 2,
	C: 3,
	Q: 4,
	A: 5,
	Z: 6,
	R: 7
}, ao = [], oo = [], so = [], co = [], lo = [], uo = [], fo = Math.min, po = Math.max, mo = Math.cos, ho = Math.sin, go = Math.abs, _o = Math.PI, vo = _o * 2, yo = typeof Float32Array < "u", bo = [];
function xo(e) {
	return Math.round(e / _o * 1e8) / 1e8 % 2 * _o;
}
function So(e, t) {
	var n = xo(e[0]);
	n < 0 && (n += vo);
	var r = n - e[0], i = e[1];
	i += r, !t && i - n >= vo ? i = n + vo : t && n - i >= vo ? i = n - vo : !t && n > i ? i = n + (vo - xo(n - i)) : t && n < i && (i = n - (vo - xo(i - n))), e[0] = n, e[1] = i;
}
var Co = function() {
	function e(e) {
		this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, e && (this._saveData = !1), this._saveData && (this.data = []);
	}
	return e.prototype.increaseVersion = function() {
		this._version++;
	}, e.prototype.getVersion = function() {
		return this._version;
	}, e.prototype.setScale = function(e, t, n) {
		n ||= 0, n > 0 && (this._ux = go(n / pa / e) || 0, this._uy = go(n / pa / t) || 0);
	}, e.prototype.setDPR = function(e) {
		this.dpr = e;
	}, e.prototype.setContext = function(e) {
		this._ctx = e;
	}, e.prototype.getContext = function() {
		return this._ctx;
	}, e.prototype.beginPath = function() {
		return this._ctx && this._ctx.beginPath(), this.reset(), this;
	}, e.prototype.reset = function() {
		this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
	}, e.prototype.moveTo = function(e, t) {
		return this._drawPendingPt(), this.addData(io.M, e, t), this._ctx && this._ctx.moveTo(e, t), this._x0 = e, this._y0 = t, this._xi = e, this._yi = t, this;
	}, e.prototype.lineTo = function(e, t) {
		var n = go(e - this._xi), r = go(t - this._yi), i = n > this._ux || r > this._uy;
		if (this.addData(io.L, e, t), this._ctx && i && this._ctx.lineTo(e, t), i) this._xi = e, this._yi = t, this._pendingPtDist = 0;
		else {
			var a = n * n + r * r;
			a > this._pendingPtDist && (this._pendingPtX = e, this._pendingPtY = t, this._pendingPtDist = a);
		}
		return this;
	}, e.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
		return this._drawPendingPt(), this.addData(io.C, e, t, n, r, i, a), this._ctx && this._ctx.bezierCurveTo(e, t, n, r, i, a), this._xi = i, this._yi = a, this;
	}, e.prototype.quadraticCurveTo = function(e, t, n, r) {
		return this._drawPendingPt(), this.addData(io.Q, e, t, n, r), this._ctx && this._ctx.quadraticCurveTo(e, t, n, r), this._xi = n, this._yi = r, this;
	}, e.prototype.arc = function(e, t, n, r, i, a) {
		this._drawPendingPt(), bo[0] = r, bo[1] = i, So(bo, a), r = bo[0], i = bo[1];
		var o = i - r;
		return this.addData(io.A, e, t, n, n, r, o, 0, +!a), this._ctx && this._ctx.arc(e, t, n, r, i, a), this._xi = mo(i) * n + e, this._yi = ho(i) * n + t, this;
	}, e.prototype.arcTo = function(e, t, n, r, i) {
		return this._drawPendingPt(), this._ctx && this._ctx.arcTo(e, t, n, r, i), this;
	}, e.prototype.rect = function(e, t, n, r) {
		return this._drawPendingPt(), this._ctx && this._ctx.rect(e, t, n, r), this.addData(io.R, e, t, n, r), this;
	}, e.prototype.closePath = function() {
		this._drawPendingPt(), this.addData(io.Z);
		var e = this._ctx, t = this._x0, n = this._y0;
		return e && e.closePath(), this._xi = t, this._yi = n, this;
	}, e.prototype.fill = function(e) {
		e && e.fill(), this.toStatic();
	}, e.prototype.stroke = function(e) {
		e && e.stroke(), this.toStatic();
	}, e.prototype.len = function() {
		return this._len;
	}, e.prototype.setData = function(e) {
		if (this._saveData) {
			var t = e.length;
			!(this.data && this.data.length === t) && yo && (this.data = new Float32Array(t));
			for (var n = 0; n < t; n++) this.data[n] = e[n];
			this._len = t;
		}
	}, e.prototype.appendPath = function(e) {
		if (this._saveData) {
			e instanceof Array || (e = [e]);
			for (var t = e.length, n = 0, r = this._len, i = 0; i < t; i++) n += e[i].len();
			var a = this.data;
			if (yo && (a instanceof Float32Array || !a) && (this.data = new Float32Array(r + n), r > 0 && a)) for (var o = 0; o < r; o++) this.data[o] = a[o];
			for (var i = 0; i < t; i++) for (var s = e[i].data, o = 0; o < s.length; o++) this.data[r++] = s[o];
			this._len = r;
		}
	}, e.prototype.addData = function(e, t, n, r, i, a, o, s, c) {
		if (this._saveData) {
			var l = this.data;
			this._len + arguments.length > l.length && (this._expandData(), l = this.data);
			for (var u = 0; u < arguments.length; u++) l[this._len++] = arguments[u];
		}
	}, e.prototype._drawPendingPt = function() {
		this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
	}, e.prototype._expandData = function() {
		if (!(this.data instanceof Array)) {
			for (var e = [], t = 0; t < this._len; t++) e[t] = this.data[t];
			this.data = e;
		}
	}, e.prototype.toStatic = function() {
		if (this._saveData) {
			this._drawPendingPt();
			var e = this.data;
			e instanceof Array && (e.length = this._len, yo && this._len > 11 && (this.data = new Float32Array(e)));
		}
	}, e.prototype.getBoundingRect = function() {
		so[0] = so[1] = lo[0] = lo[1] = Number.MAX_VALUE, co[0] = co[1] = uo[0] = uo[1] = -Number.MAX_VALUE;
		for (var e = this.data, t = 0, n = 0, r = 0, i = 0, a = 0; a < this._len;) {
			var o = e[a++], s = a === 1;
			switch (s && (t = e[a], n = e[a + 1], r = t, i = n), o) {
				case io.M:
					t = r = e[a++], n = i = e[a++], lo[0] = r, lo[1] = i, uo[0] = r, uo[1] = i;
					break;
				case io.L:
					Qa(t, n, e[a], e[a + 1], lo, uo), t = e[a++], n = e[a++];
					break;
				case io.C:
					to(t, n, e[a++], e[a++], e[a++], e[a++], e[a], e[a + 1], lo, uo), t = e[a++], n = e[a++];
					break;
				case io.Q:
					no(t, n, e[a++], e[a++], e[a], e[a + 1], lo, uo), t = e[a++], n = e[a++];
					break;
				case io.A:
					var c = e[a++], l = e[a++], u = e[a++], d = e[a++], f = e[a++], p = e[a++] + f;
					a += 1;
					var m = !e[a++];
					s && (r = mo(f) * u + c, i = ho(f) * d + l), ro(c, l, u, d, f, p, m, lo, uo), t = mo(p) * u + c, n = ho(p) * d + l;
					break;
				case io.R:
					r = t = e[a++], i = n = e[a++];
					var h = e[a++], g = e[a++];
					Qa(r, i, r + h, i + g, lo, uo);
					break;
				case io.Z: t = r, n = i;
			}
			Jt(so, so, lo), Yt(co, co, uo);
		}
		return a === 0 && (so[0] = so[1] = co[0] = co[1] = 0), new X(so[0], so[1], co[0] - so[0], co[1] - so[1]);
	}, e.prototype._calculateLength = function() {
		var e = this.data, t = this._len, n = this._ux, r = this._uy, i = 0, a = 0, o = 0, s = 0;
		this._pathSegLen ||= [];
		for (var c = this._pathSegLen, l = 0, u = 0, d = 0; d < t;) {
			var f = e[d++], p = d === 1;
			p && (i = e[d], a = e[d + 1], o = i, s = a);
			var m = -1;
			switch (f) {
				case io.M:
					i = o = e[d++], a = s = e[d++];
					break;
				case io.L:
					var h = e[d++], g = e[d++], _ = h - i, v = g - a;
					(go(_) > n || go(v) > r || d === t - 1) && (m = Math.sqrt(_ * _ + v * v), i = h, a = g);
					break;
				case io.C:
					var y = e[d++], b = e[d++], h = e[d++], g = e[d++], x = e[d++], S = e[d++];
					m = Pr(i, a, y, b, h, g, x, S, 10), i = x, a = S;
					break;
				case io.Q:
					var y = e[d++], b = e[d++], h = e[d++], g = e[d++];
					m = Vr(i, a, y, b, h, g, 10), i = h, a = g;
					break;
				case io.A:
					var C = e[d++], w = e[d++], T = e[d++], E = e[d++], D = e[d++], O = e[d++], k = O + D;
					d += 1, p && (o = mo(D) * T + C, s = ho(D) * E + w), m = po(T, E) * fo(vo, Math.abs(O)), i = mo(k) * T + C, a = ho(k) * E + w;
					break;
				case io.R:
					o = i = e[d++], s = a = e[d++];
					var A = e[d++], ee = e[d++];
					m = A * 2 + ee * 2;
					break;
				case io.Z:
					var _ = o - i, v = s - a;
					m = Math.sqrt(_ * _ + v * v), i = o, a = s;
			}
			m >= 0 && (c[u++] = m, l += m);
		}
		return this._pathLen = l, l;
	}, e.prototype.rebuildPath = function(e, t) {
		var n = this.data, r = this._ux, i = this._uy, a = this._len, o, s, c, l, u, d, f = t < 1, p, m, h = 0, g = 0, _, v = 0, y, b;
		if (!(f && (this._pathSegLen || this._calculateLength(), p = this._pathSegLen, m = this._pathLen, _ = t * m, !_))) lo: for (var x = 0; x < a;) {
			var S = n[x++], C = x === 1;
			switch (C && (c = n[x], l = n[x + 1], o = c, s = l), S !== io.L && v > 0 && (e.lineTo(y, b), v = 0), S) {
				case io.M:
					o = c = n[x++], s = l = n[x++], e.moveTo(c, l);
					break;
				case io.L:
					u = n[x++], d = n[x++];
					var w = go(u - c), T = go(d - l);
					if (w > r || T > i) {
						if (f) {
							var E = p[g++];
							if (h + E > _) {
								var D = (_ - h) / E;
								e.lineTo(c * (1 - D) + u * D, l * (1 - D) + d * D);
								break lo;
							}
							h += E;
						}
						e.lineTo(u, d), c = u, l = d, v = 0;
					} else {
						var O = w * w + T * T;
						O > v && (y = u, b = d, v = O);
					}
					break;
				case io.C:
					var k = n[x++], A = n[x++], ee = n[x++], te = n[x++], ne = n[x++], j = n[x++];
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var D = (_ - h) / E;
							Mr(c, k, ee, ne, D, ao), Mr(l, A, te, j, D, oo), e.bezierCurveTo(ao[1], oo[1], ao[2], oo[2], ao[3], oo[3]);
							break lo;
						}
						h += E;
					}
					e.bezierCurveTo(k, A, ee, te, ne, j), c = ne, l = j;
					break;
				case io.Q:
					var k = n[x++], A = n[x++], ee = n[x++], te = n[x++];
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var D = (_ - h) / E;
							zr(c, k, ee, D, ao), zr(l, A, te, D, oo), e.quadraticCurveTo(ao[1], oo[1], ao[2], oo[2]);
							break lo;
						}
						h += E;
					}
					e.quadraticCurveTo(k, A, ee, te), c = ee, l = te;
					break;
				case io.A:
					var M = n[x++], re = n[x++], N = n[x++], ie = n[x++], P = n[x++], ae = n[x++], F = n[x++], oe = !n[x++], se = N > ie ? N : ie, ce = go(N - ie) > .001, I = P + ae, L = !1;
					if (f) {
						var E = p[g++];
						h + E > _ && (I = P + ae * (_ - h) / E, L = !0), h += E;
					}
					if (ce && e.ellipse ? e.ellipse(M, re, N, ie, F, P, I, oe) : e.arc(M, re, se, P, I, oe), L) break lo;
					C && (o = mo(P) * N + M, s = ho(P) * ie + re), c = mo(I) * N + M, l = ho(I) * ie + re;
					break;
				case io.R:
					o = c = n[x], s = l = n[x + 1], u = n[x++], d = n[x++];
					var R = n[x++], le = n[x++];
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var ue = _ - h;
							e.moveTo(u, d), e.lineTo(u + fo(ue, R), d), ue -= R, ue > 0 && e.lineTo(u + R, d + fo(ue, le)), ue -= le, ue > 0 && e.lineTo(u + po(R - ue, 0), d + le), ue -= R, ue > 0 && e.lineTo(u, d + po(le - ue, 0));
							break lo;
						}
						h += E;
					}
					e.rect(u, d, R, le);
					break;
				case io.Z:
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var D = (_ - h) / E;
							e.lineTo(c * (1 - D) + o * D, l * (1 - D) + s * D);
							break lo;
						}
						h += E;
					}
					e.closePath(), c = o, l = s;
			}
		}
	}, e.prototype.clone = function() {
		var t = new e(), n = this.data;
		return t.data = n.slice ? n.slice() : Array.prototype.slice.call(n), t._len = this._len, t;
	}, e.prototype.canSave = function() {
		return !!this._saveData;
	}, e.CMD = io, e.initDefaultProps = (function() {
		var t = e.prototype;
		t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
	})(), e;
}();
//#endregion
//#region node_modules/zrender/lib/contain/line.js
function wo(e, t, n, r, i, a, o) {
	if (i === 0) return !1;
	var s = i, c = 0, l = e;
	if (o > t + s && o > r + s || o < t - s && o < r - s || a > e + s && a > n + s || a < e - s && a < n - s) return !1;
	if (e !== n) c = (t - r) / (e - n), l = (e * r - n * t) / (e - n);
	else return Math.abs(a - e) <= s / 2;
	var u = c * a - o + l;
	return u * u / (c * c + 1) <= s / 2 * s / 2;
}
//#endregion
//#region node_modules/zrender/lib/contain/cubic.js
function To(e, t, n, r, i, a, o, s, c, l, u) {
	if (c === 0) return !1;
	var d = c;
	return u > t + d && u > r + d && u > a + d && u > s + d || u < t - d && u < r - d && u < a - d && u < s - d || l > e + d && l > n + d && l > i + d && l > o + d || l < e - d && l < n - d && l < i - d && l < o - d ? !1 : Nr(e, t, n, r, i, a, o, s, l, u, null) <= d / 2;
}
//#endregion
//#region node_modules/zrender/lib/contain/quadratic.js
function Eo(e, t, n, r, i, a, o, s, c) {
	if (o === 0) return !1;
	var l = o;
	return c > t + l && c > r + l && c > a + l || c < t - l && c < r - l && c < a - l || s > e + l && s > n + l && s > i + l || s < e - l && s < n - l && s < i - l ? !1 : Br(e, t, n, r, i, a, s, c, null) <= l / 2;
}
//#endregion
//#region node_modules/zrender/lib/contain/util.js
var Do = Math.PI * 2;
function Oo(e) {
	return e %= Do, e < 0 && (e += Do), e;
}
//#endregion
//#region node_modules/zrender/lib/contain/arc.js
var ko = Math.PI * 2;
function Ao(e, t, n, r, i, a, o, s, c) {
	if (o === 0) return !1;
	var l = o;
	s -= e, c -= t;
	var u = Math.sqrt(s * s + c * c);
	if (u - l > n || u + l < n) return !1;
	if (Math.abs(r - i) % ko < 1e-4) return !0;
	if (a) {
		var d = r;
		r = Oo(i), i = Oo(d);
	} else r = Oo(r), i = Oo(i);
	r > i && (i += ko);
	var f = Math.atan2(c, s);
	return f < 0 && (f += ko), f >= r && f <= i || f + ko >= r && f + ko <= i;
}
//#endregion
//#region node_modules/zrender/lib/contain/windingLine.js
function jo(e, t, n, r, i, a) {
	if (a > t && a > r || a < t && a < r || r === t) return 0;
	var o = (a - t) / (r - t), s = r < t ? 1 : -1;
	(o === 1 || o === 0) && (s = r < t ? .5 : -.5);
	var c = o * (n - e) + e;
	return c === i ? Infinity : c > i ? s : 0;
}
//#endregion
//#region node_modules/zrender/lib/contain/path.js
var Mo = Co.CMD, No = Math.PI * 2, Po = 1e-4;
function Fo(e, t) {
	return Math.abs(e - t) < Po;
}
var Io = [
	-1,
	-1,
	-1
], Lo = [-1, -1];
function Ro() {
	var e = Lo[0];
	Lo[0] = Lo[1], Lo[1] = e;
}
function zo(e, t, n, r, i, a, o, s, c, l) {
	if (l > t && l > r && l > a && l > s || l < t && l < r && l < a && l < s) return 0;
	var u = Ar(t, r, a, s, l, Io);
	if (u === 0) return 0;
	for (var d = 0, f = -1, p = void 0, m = void 0, h = 0; h < u; h++) {
		var g = Io[h], _ = g === 0 || g === 1 ? .5 : 1;
		Or(e, n, i, o, g) < c || (f < 0 && (f = jr(t, r, a, s, Lo), Lo[1] < Lo[0] && f > 1 && Ro(), p = Or(t, r, a, s, Lo[0]), f > 1 && (m = Or(t, r, a, s, Lo[1]))), f === 2 ? g < Lo[0] ? d += p < t ? _ : -_ : g < Lo[1] ? d += m < p ? _ : -_ : d += s < m ? _ : -_ : g < Lo[0] ? d += p < t ? _ : -_ : d += s < p ? _ : -_);
	}
	return d;
}
function Bo(e, t, n, r, i, a, o, s) {
	if (s > t && s > r && s > a || s < t && s < r && s < a) return 0;
	var c = Lr(t, r, a, s, Io);
	if (c === 0) return 0;
	var l = Rr(t, r, a);
	if (l >= 0 && l <= 1) {
		for (var u = 0, d = Fr(t, r, a, l), f = 0; f < c; f++) {
			var p = Io[f] === 0 || Io[f] === 1 ? .5 : 1, m = Fr(e, n, i, Io[f]);
			m < o || (Io[f] < l ? u += d < t ? p : -p : u += a < d ? p : -p);
		}
		return u;
	}
	var p = Io[0] === 0 || Io[0] === 1 ? .5 : 1, m = Fr(e, n, i, Io[0]);
	return m < o ? 0 : a < t ? p : -p;
}
function Vo(e, t, n, r, i, a, o, s) {
	if (s -= t, s > n || s < -n) return 0;
	var c = Math.sqrt(n * n - s * s);
	Io[0] = -c, Io[1] = c;
	var l = Math.abs(r - i);
	if (l < 1e-4) return 0;
	if (l >= No - 1e-4) {
		r = 0, i = No;
		var u = a ? 1 : -1;
		return o >= Io[0] + e && o <= Io[1] + e ? u : 0;
	}
	if (r > i) {
		var d = r;
		r = i, i = d;
	}
	r < 0 && (r += No, i += No);
	for (var f = 0, p = 0; p < 2; p++) {
		var m = Io[p];
		if (m + e > o) {
			var h = Math.atan2(s, m), u = a ? 1 : -1;
			h < 0 && (h = No + h), (h >= r && h <= i || h + No >= r && h + No <= i) && (h > Math.PI / 2 && h < Math.PI * 1.5 && (u = -u), f += u);
		}
	}
	return f;
}
function Ho(e, t, n, r, i) {
	for (var a = e.data, o = e.len(), s = 0, c = 0, l = 0, u = 0, d = 0, f, p, m = 0; m < o;) {
		var h = a[m++], g = m === 1;
		switch (h === Mo.M && m > 1 && (n || (s += jo(c, l, u, d, r, i))), g && (c = a[m], l = a[m + 1], u = c, d = l), h) {
			case Mo.M:
				u = a[m++], d = a[m++], c = u, l = d;
				break;
			case Mo.L:
				if (n) {
					if (wo(c, l, a[m], a[m + 1], t, r, i)) return !0;
				} else s += jo(c, l, a[m], a[m + 1], r, i) || 0;
				c = a[m++], l = a[m++];
				break;
			case Mo.C:
				if (n) {
					if (To(c, l, a[m++], a[m++], a[m++], a[m++], a[m], a[m + 1], t, r, i)) return !0;
				} else s += zo(c, l, a[m++], a[m++], a[m++], a[m++], a[m], a[m + 1], r, i) || 0;
				c = a[m++], l = a[m++];
				break;
			case Mo.Q:
				if (n) {
					if (Eo(c, l, a[m++], a[m++], a[m], a[m + 1], t, r, i)) return !0;
				} else s += Bo(c, l, a[m++], a[m++], a[m], a[m + 1], r, i) || 0;
				c = a[m++], l = a[m++];
				break;
			case Mo.A:
				var _ = a[m++], v = a[m++], y = a[m++], b = a[m++], x = a[m++], S = a[m++];
				m += 1;
				var C = !!(1 - a[m++]);
				f = Math.cos(x) * y + _, p = Math.sin(x) * b + v, g ? (u = f, d = p) : s += jo(c, l, f, p, r, i);
				var w = (r - _) * b / y + _;
				if (n) {
					if (Ao(_, v, b, x, x + S, C, t, w, i)) return !0;
				} else s += Vo(_, v, b, x, x + S, C, w, i);
				c = Math.cos(x + S) * y + _, l = Math.sin(x + S) * b + v;
				break;
			case Mo.R:
				u = c = a[m++], d = l = a[m++];
				var T = a[m++], E = a[m++];
				if (f = u + T, p = d + E, n) {
					if (wo(u, d, f, d, t, r, i) || wo(f, d, f, p, t, r, i) || wo(f, p, u, p, t, r, i) || wo(u, p, u, d, t, r, i)) return !0;
				} else s += jo(f, d, f, p, r, i), s += jo(u, p, u, d, r, i);
				break;
			case Mo.Z:
				if (n) {
					if (wo(c, l, u, d, t, r, i)) return !0;
				} else s += jo(c, l, u, d, r, i);
				c = u, l = d;
		}
	}
	return !n && !Fo(l, d) && (s += jo(c, l, u, d, r, i) || 0), s !== 0;
}
function Uo(e, t, n) {
	return Ho(e, 0, !1, t, n);
}
function Wo(e, t, n, r) {
	return Ho(e, t, !0, n, r);
}
//#endregion
//#region node_modules/zrender/lib/graphic/Path.js
var Go = P({
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
}, Ia), Ko = { style: P({
	fill: !0,
	stroke: !0,
	strokePercent: !0,
	fillOpacity: !0,
	strokeOpacity: !0,
	lineDashOffset: !0,
	lineWidth: !0,
	miterLimit: !0
}, La.style) }, qo = mr.concat([
	"invisible",
	"culling",
	"z",
	"z2",
	"zlevel",
	"parent"
]), Jo = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.update = function() {
		var n = this;
		e.prototype.update.call(this);
		var r = this.style;
		if (r.decal) {
			var i = this._decalEl = this._decalEl || new t();
			i.buildPath === t.prototype.buildPath && (i.buildPath = function(e) {
				n.buildPath(e, n.shape);
			}), i.silent = !0;
			var a = i.style;
			for (var o in r) a[o] !== r[o] && (a[o] = r[o]);
			a.fill = r.fill ? r.decal : null, a.decal = null, a.shadowColor = null, r.strokeFirst && (a.stroke = null);
			for (var s = 0; s < qo.length; ++s) i[qo[s]] = this[qo[s]];
			i.__dirty |= 1;
		} else this._decalEl &&= null;
	}, t.prototype.getDecalElement = function() {
		return this._decalEl;
	}, t.prototype._init = function(t) {
		var n = z(t);
		this.shape = this.getDefaultShape();
		var r = this.getDefaultStyle();
		r && this.useStyle(r);
		for (var i = 0; i < n.length; i++) {
			var a = n[i], o = t[a];
			a === "style" ? this.style ? N(this.style, o) : this.useStyle(o) : a === "shape" ? N(this.shape, o) : e.prototype.attrKV.call(this, a, o);
		}
		this.style || this.useStyle({});
	}, t.prototype.getDefaultStyle = function() {
		return null;
	}, t.prototype.getDefaultShape = function() {
		return {};
	}, t.prototype.canBeInsideText = function() {
		return this.hasFill();
	}, t.prototype.getInsideTextFill = function() {
		var e = this.style.fill;
		if (e !== "none") {
			if (U(e)) {
				var t = _i(e, 0);
				return t > .5 ? ha : t > .2 ? _a : ga;
			}
			if (e) return ga;
		}
		return ha;
	}, t.prototype.getInsideTextStroke = function(e) {
		var t = this.style.fill;
		if (U(t)) {
			var n = this.__zr;
			if (!!(n && n.isDarkMode()) == _i(e, 0) < .4) return t;
		}
	}, t.prototype.buildPath = function(e, t, n) {}, t.prototype.pathUpdated = function() {
		this.__dirty &= -5;
	}, t.prototype.getUpdatedPathProxy = function(e) {
		return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
	}, t.prototype.createPathProxy = function() {
		this.path = new Co(!1);
	}, t.prototype.hasStroke = function() {
		var e = this.style, t = e.stroke;
		return !(t == null || t === "none" || !(e.lineWidth > 0));
	}, t.prototype.hasFill = function() {
		var e = this.style.fill;
		return e != null && e !== "none";
	}, t.prototype.getBoundingRect = function() {
		var e = this._rect, t = this.style, n = !e;
		if (n) {
			var r = !1;
			this.path || (r = !0, this.createPathProxy());
			var i = this.path;
			(r || this.__dirty & 4) && (i.beginPath(), this.buildPath(i, this.shape, !1), this.pathUpdated()), e = i.getBoundingRect();
		}
		if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
			var a = this._rectStroke ||= e.clone();
			if (this.__dirty || n) {
				a.copy(e);
				var o = t.strokeNoScale ? this.getLineScale() : 1, s = t.lineWidth;
				if (!this.hasFill()) {
					var c = this.strokeContainThreshold;
					s = Math.max(s, c ?? 4);
				}
				o > 1e-10 && (a.width += s / o, a.height += s / o, a.x -= s / o / 2, a.y -= s / o / 2);
			}
			return a;
		}
		return e;
	}, t.prototype.contain = function(e, t) {
		var n = this.transformCoordToLocal(e, t), r = this.getBoundingRect(), i = this.style;
		if (e = n[0], t = n[1], r.contain(e, t)) {
			var a = this.path;
			if (this.hasStroke()) {
				var o = i.lineWidth, s = i.strokeNoScale ? this.getLineScale() : 1;
				if (s > 1e-10 && (this.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Wo(a, o / s, e, t))) return !0;
			}
			if (this.hasFill()) return Uo(a, e, t);
		}
		return !1;
	}, t.prototype.dirtyShape = function() {
		this.__dirty |= 4, this._rect &&= null, this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
	}, t.prototype.dirty = function() {
		this.dirtyStyle(), this.dirtyShape();
	}, t.prototype.animateShape = function(e) {
		return this.animate("shape", e);
	}, t.prototype.updateDuringAnimation = function(e) {
		e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
	}, t.prototype.attrKV = function(t, n) {
		t === "shape" ? this.setShape(n) : e.prototype.attrKV.call(this, t, n);
	}, t.prototype.setShape = function(e, t) {
		var n = this.shape;
		return n ||= this.shape = {}, typeof e == "string" ? n[e] = t : N(n, e), this.dirtyShape(), this;
	}, t.prototype.shapeChanged = function() {
		return !!(this.__dirty & 4);
	}, t.prototype.createStyle = function(e) {
		return Ie(Go, e);
	}, t.prototype._innerSaveToNormal = function(t) {
		e.prototype._innerSaveToNormal.call(this, t);
		var n = this._normalState;
		t.shape && !n.shape && (n.shape = N({}, this.shape));
	}, t.prototype._applyStateObj = function(t, n, r, i, a, o) {
		if (e.prototype._applyStateObj.call(this, t, n, r, i, a, o), this.__inHover !== 1) {
			var s = !(n && i), c;
			if (n && n.shape ? a ? i ? c = n.shape : (c = N({}, r.shape), N(c, n.shape)) : (c = N({}, i ? this.shape : r.shape), N(c, n.shape)) : s && (c = r.shape), c) {
				if (a) {
					this.shape = N({}, this.shape);
					for (var l = {}, u = z(c), d = 0; d < u.length; d++) {
						var f = u[d];
						typeof c[f] == "object" ? this.shape[f] = c[f] : l[f] = c[f];
					}
					this._transitionState(t, { shape: l }, o);
				} else this.shape = c, this.dirtyShape();
			}
		}
	}, t.prototype._mergeStates = function(t) {
		for (var n = e.prototype._mergeStates.call(this, t), r, i = 0; i < t.length; i++) {
			var a = t[i];
			a.shape && (r ||= {}, this._mergeStyle(r, a.shape));
		}
		return r && (n.shape = r), n;
	}, t.prototype.getAnimationStyleProps = function() {
		return Ko;
	}, t.prototype.isZeroArea = function() {
		return !1;
	}, t.extend = function(e) {
		var n = function(t) {
			l(n, t);
			function n(n) {
				var r = t.call(this, n) || this;
				return e.init && e.init.call(r, n), r;
			}
			return n.prototype.getDefaultStyle = function() {
				return j(e.style);
			}, n.prototype.getDefaultShape = function() {
				return j(e.shape);
			}, n;
		}(t);
		for (var r in e) typeof e[r] == "function" && (n.prototype[r] = e[r]);
		return n;
	}, t.initDefaultProps = (function() {
		var e = t.prototype;
		e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = 7;
	})(), t;
}(Ba), Yo = P({
	strokeFirst: !0,
	font: u,
	x: 0,
	y: 0,
	textAlign: "left",
	textBaseline: "top",
	miterLimit: 2
}, Go), Xo = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.hasStroke = function() {
		return rr(this.style);
	}, t.prototype.hasFill = function() {
		var e = this.style.fill;
		return e != null && e !== "none";
	}, t.prototype.createStyle = function(e) {
		return Ie(Yo, e);
	}, t.prototype.setBoundingRect = function(e) {
		this._rect = e;
	}, t.prototype.getBoundingRect = function() {
		return this._rect ||= tr(this.style), this._rect;
	}, t.initDefaultProps = (function() {
		var e = t.prototype;
		e.dirtyRectTolerance = 10;
	})(), t;
}(Ba);
Xo.prototype.type = "tspan";
//#endregion
//#region node_modules/zrender/lib/graphic/Image.js
var Zo = P({
	x: 0,
	y: 0
}, Ia), Qo = { style: P({
	x: !0,
	y: !0,
	width: !0,
	height: !0,
	sx: !0,
	sy: !0,
	sWidth: !0,
	sHeight: !0
}, La.style) };
function $o(e) {
	return !!(e && typeof e != "string" && e.width && e.height);
}
var es = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.createStyle = function(e) {
		return Ie(Zo, e);
	}, t.prototype._getSize = function(e) {
		var t = this.style, n = t[e];
		if (n != null) return n;
		var r = $o(t.image) ? t.image : this.__image;
		if (!r) return 0;
		var i = e === "width" ? "height" : "width", a = t[i];
		return a == null ? r[e] : r[e] / r[i] * a;
	}, t.prototype.getWidth = function() {
		return this._getSize("width");
	}, t.prototype.getHeight = function() {
		return this._getSize("height");
	}, t.prototype.getAnimationStyleProps = function() {
		return Qo;
	}, t.prototype.getBoundingRect = function() {
		var e = this.style;
		return this._rect ||= new X(e.x || 0, e.y || 0, this.getWidth(), this.getHeight()), this._rect;
	}, t;
}(Ba);
es.prototype.type = "image";
//#endregion
//#region node_modules/zrender/lib/graphic/helper/roundRect.js
function ts(e, t) {
	var n = t.x, r = t.y, i = t.width, a = t.height, o = t.r, s, c, l, u;
	i < 0 && (n += i, i = -i), a < 0 && (r += a, a = -a), typeof o == "number" ? s = c = l = u = o : o instanceof Array ? o.length === 1 ? s = c = l = u = o[0] : o.length === 2 ? (s = l = o[0], c = u = o[1]) : o.length === 3 ? (s = o[0], c = u = o[1], l = o[2]) : (s = o[0], c = o[1], l = o[2], u = o[3]) : s = c = l = u = 0;
	var d;
	s + c > i && (d = s + c, s *= i / d, c *= i / d), l + u > i && (d = l + u, l *= i / d, u *= i / d), c + l > a && (d = c + l, c *= a / d, l *= a / d), s + u > a && (d = s + u, s *= a / d, u *= a / d), e.moveTo(n + s, r), e.lineTo(n + i - c, r), c !== 0 && e.arc(n + i - c, r + c, c, -Math.PI / 2, 0), e.lineTo(n + i, r + a - l), l !== 0 && e.arc(n + i - l, r + a - l, l, 0, Math.PI / 2), e.lineTo(n + u, r + a), u !== 0 && e.arc(n + u, r + a - u, u, Math.PI / 2, Math.PI), e.lineTo(n, r + s), s !== 0 && e.arc(n + s, r + s, s, Math.PI, Math.PI * 1.5), e.closePath();
}
//#endregion
//#region node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
var ns = Math.round;
function rs(e, t, n) {
	if (t) {
		var r = t.x1, i = t.x2, a = t.y1, o = t.y2;
		e.x1 = r, e.x2 = i, e.y1 = a, e.y2 = o;
		var s = n && n.lineWidth;
		return s ? (ns(r * 2) === ns(i * 2) && (e.x1 = e.x2 = as(r, s, !0)), ns(a * 2) === ns(o * 2) && (e.y1 = e.y2 = as(a, s, !0)), e) : e;
	}
}
function is(e, t, n) {
	if (t) {
		var r = t.x, i = t.y, a = t.width, o = t.height;
		e.x = r, e.y = i, e.width = a, e.height = o;
		var s = n && n.lineWidth;
		return s ? (e.x = as(r, s, !0), e.y = as(i, s, !0), e.width = Math.max(as(r + a, s, !1) - e.x, a === 0 ? 0 : 1), e.height = Math.max(as(i + o, s, !1) - e.y, o === 0 ? 0 : 1), e) : e;
	}
}
function as(e, t, n) {
	if (!t) return e;
	var r = ns(e * 2);
	return (r + ns(t)) % 2 == 0 ? r / 2 : (r + (n ? 1 : -1)) / 2;
}
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Rect.js
var os = function() {
	function e() {
		this.x = 0, this.y = 0, this.width = 0, this.height = 0;
	}
	return e;
}(), ss = {}, cs = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new os();
	}, t.prototype.buildPath = function(e, t) {
		var n, r, i, a;
		if (this.subPixelOptimize) {
			var o = is(ss, t, this.style);
			n = o.x, r = o.y, i = o.width, a = o.height, o.r = t.r, t = o;
		} else n = t.x, r = t.y, i = t.width, a = t.height;
		t.r ? ts(e, t) : e.rect(n, r, i, a);
	}, t.prototype.isZeroArea = function() {
		return !this.shape.width || !this.shape.height;
	}, t;
}(Jo);
cs.prototype.type = "rect";
//#endregion
//#region node_modules/zrender/lib/graphic/Text.js
var ls = { fill: "#000" }, us = 2, ds = {}, fs = { style: P({
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
}, La.style) }, ps = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.type = "text", n._children = [], n._defaultStyle = ls, n.attr(t), n;
	}
	return t.prototype.childrenRef = function() {
		return this._children;
	}, t.prototype.update = function() {
		e.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
		for (var t = 0; t < this._children.length; t++) {
			var n = this._children[t];
			n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
		}
	}, t.prototype.updateTransform = function() {
		var t = this.innerTransformable;
		t ? (t.updateTransform(), t.transform && (this.transform = t.transform)) : e.prototype.updateTransform.call(this);
	}, t.prototype.getLocalTransform = function(t) {
		var n = this.innerTransformable;
		return n ? n.getLocalTransform(t) : e.prototype.getLocalTransform.call(this, t);
	}, t.prototype.getComputedTransform = function() {
		return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), e.prototype.getComputedTransform.call(this);
	}, t.prototype._updateSubTexts = function() {
		this._childCursor = 0, bs(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
	}, t.prototype.addSelfToZr = function(t) {
		e.prototype.addSelfToZr.call(this, t);
		for (var n = 0; n < this._children.length; n++) this._children[n].__zr = t;
	}, t.prototype.removeSelfFromZr = function(t) {
		e.prototype.removeSelfFromZr.call(this, t);
		for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null;
	}, t.prototype.getBoundingRect = function() {
		if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
			for (var e = new X(0, 0, 0, 0), t = this._children, n = [], r = null, i = 0; i < t.length; i++) {
				var a = t[i], o = a.getBoundingRect(), s = a.getLocalTransform(n);
				s ? (e.copy(o), e.applyTransform(s), r ||= e.clone(), r.union(e)) : (r ||= o.clone(), r.union(o));
			}
			this._rect = r || e;
		}
		return this._rect;
	}, t.prototype.setDefaultTextStyle = function(e) {
		this._defaultStyle = e || ls;
	}, t.prototype.setTextContent = function(e) {}, t.prototype._mergeStyle = function(e, t) {
		if (!t) return e;
		var n = t.rich, r = e.rich || n && {};
		return N(e, t), n && r ? (this._mergeRich(r, n), e.rich = r) : r && (e.rich = r), e;
	}, t.prototype._mergeRich = function(e, t) {
		for (var n = z(t), r = 0; r < n.length; r++) {
			var i = n[r];
			e[i] = e[i] || {}, N(e[i], t[i]);
		}
	}, t.prototype.getAnimationStyleProps = function() {
		return fs;
	}, t.prototype._getOrCreateChild = function(e) {
		var t = this._children[this._childCursor];
		return (!t || !(t instanceof e)) && (t = new e()), this._children[this._childCursor++] = t, t.__zr = this.__zr, t.parent = this, t;
	}, t.prototype._updatePlainTexts = function() {
		var e = this.style, t = e.font || "12px sans-serif", n = e.padding, r = this._defaultStyle, i = e.x || 0, a = e.y || 0, o = e.align || r.align || "left", s = e.verticalAlign || r.verticalAlign || "top";
		Zn(ds, r.overflowRect, i, a, o, s), i = ds.baseX, a = ds.baseY;
		var c = Vn(Ts(e), e, ds.outerWidth, ds.outerHeight), l = Es(e), u = !!e.backgroundColor, d = c.outerHeight, f = c.outerWidth, p = c.lines, m = c.lineHeight;
		this.isTruncated = !!c.isTruncated;
		var h = i, g = jn(a, c.contentHeight, s);
		if (l || n) {
			var _ = An(i, f, o), v = jn(a, d, s);
			l && this._renderBackground(e, e, _, v, f, d);
		}
		g += m / 2, n && (h = ws(i, o, n), s === "top" ? g += n[0] : s === "bottom" && (g -= n[2]));
		for (var y = 0, b = !1, x = !1, S = Cs("fill" in e ? e.fill : (x = !0, r.fill)), C = Ss("stroke" in e ? e.stroke : !u && (!r.autoStroke || x) ? (y = us, b = !0, r.stroke) : null), w = e.textShadowBlur > 0, T = 0; T < p.length; T++) {
			var E = this._getOrCreateChild(Xo), D = E.createStyle();
			E.useStyle(D), D.text = p[T], D.x = h, D.y = g, o && (D.textAlign = o), D.textBaseline = "middle", D.opacity = e.opacity, D.strokeFirst = !0, w && (D.shadowBlur = e.textShadowBlur || 0, D.shadowColor = e.textShadowColor || "transparent", D.shadowOffsetX = e.textShadowOffsetX || 0, D.shadowOffsetY = e.textShadowOffsetY || 0), D.stroke = C, D.fill = S, C && (D.lineWidth = e.lineWidth || y, D.lineDash = e.lineDash, D.lineDashOffset = e.lineDashOffset || 0), D.font = t, vs(D, e), g += m, E.setBoundingRect(nr(D, c.contentWidth, c.calculatedLineHeight, b ? 0 : null));
		}
	}, t.prototype._updateRichTexts = function() {
		var e = this.style, t = this._defaultStyle, n = e.align || t.align, r = e.verticalAlign || t.verticalAlign, i = e.x || 0, a = e.y || 0;
		Zn(ds, t.overflowRect, i, a, n, r), i = ds.baseX, a = ds.baseY;
		var o = Gn(Ts(e), e, ds.outerWidth, ds.outerHeight, n), s = o.width, c = o.outerWidth, l = o.outerHeight, u = e.padding;
		this.isTruncated = !!o.isTruncated;
		var d = An(i, c, n), f = jn(a, l, r), p = d, m = f;
		u && (p += u[3], m += u[0]);
		var h = p + s;
		Es(e) && this._renderBackground(e, e, d, f, c, l);
		for (var g = !!e.backgroundColor, _ = 0; _ < o.lines.length; _++) {
			for (var v = o.lines[_], y = v.tokens, b = y.length, x = v.lineHeight, S = v.width, C = 0, w = p, T = h, E = b - 1, D = void 0; C < b && (D = y[C], !D.align || D.align === "left");) this._placeToken(D, e, x, m, w, "left", g), S -= D.width, w += D.width, C++;
			for (; E >= 0 && (D = y[E], D.align === "right");) this._placeToken(D, e, x, m, T, "right", g), S -= D.width, T -= D.width, E--;
			for (w += (s - (w - p) - (h - T) - S) / 2; C <= E;) D = y[C], this._placeToken(D, e, x, m, w + D.width / 2, "center", g), w += D.width, C++;
			m += x;
		}
	}, t.prototype._placeToken = function(e, t, n, r, i, a, o) {
		var s = t.rich[e.styleName] || {};
		s.text = e.text;
		var c = e.verticalAlign, l = r + n / 2;
		c === "top" ? l = r + e.height / 2 : c === "bottom" && (l = r + n - e.height / 2), !e.isLineHolder && Es(s) && this._renderBackground(s, t, a === "right" ? i - e.width : a === "center" ? i - e.width / 2 : i, l - e.height / 2, e.width, e.height);
		var u = !!s.backgroundColor, d = e.textPadding;
		d && (i = ws(i, a, d), l -= e.height / 2 - d[0] - e.innerHeight / 2);
		var f = this._getOrCreateChild(Xo), p = f.createStyle();
		f.useStyle(p);
		var m = this._defaultStyle, h = !1, g = 0, _ = !1, v = Cs("fill" in s ? s.fill : "fill" in t ? t.fill : (h = !0, m.fill)), y = Ss("stroke" in s ? s.stroke : "stroke" in t ? t.stroke : !u && !o && (!m.autoStroke || h) ? (g = us, _ = !0, m.stroke) : null), b = s.textShadowBlur > 0 || t.textShadowBlur > 0;
		p.text = e.text, p.x = i, p.y = l, b && (p.shadowBlur = s.textShadowBlur || t.textShadowBlur || 0, p.shadowColor = s.textShadowColor || t.textShadowColor || "transparent", p.shadowOffsetX = s.textShadowOffsetX || t.textShadowOffsetX || 0, p.shadowOffsetY = s.textShadowOffsetY || t.textShadowOffsetY || 0), p.textAlign = a, p.textBaseline = "middle", p.font = e.font || "12px sans-serif", p.opacity = Ce(s.opacity, t.opacity, 1), vs(p, s), y && (p.lineWidth = Ce(s.lineWidth, t.lineWidth, g), p.lineDash = G(s.lineDash, t.lineDash), p.lineDashOffset = t.lineDashOffset || 0, p.stroke = y), v && (p.fill = v), f.setBoundingRect(nr(p, e.contentWidth, e.contentHeight, _ ? 0 : null));
	}, t.prototype._renderBackground = function(e, t, n, r, i, a) {
		var o = e.backgroundColor, s = e.borderWidth, c = e.borderColor, l = o && o.image, u = o && !l, d = e.borderRadius, f = this, p, m;
		if (u || e.lineHeight || s && c) {
			p = this._getOrCreateChild(cs), p.useStyle(p.createStyle()), p.style.fill = null;
			var h = p.shape;
			h.x = n, h.y = r, h.width = i, h.height = a, h.r = d, p.dirtyShape();
		}
		if (u) {
			var g = p.style;
			g.fill = o || null, g.fillOpacity = G(e.fillOpacity, 1);
		} else if (l) {
			m = this._getOrCreateChild(es), m.onload = function() {
				f.dirtyStyle();
			};
			var _ = m.style;
			_.image = o.image, _.x = n, _.y = r, _.width = i, _.height = a;
		}
		if (s && c) {
			var g = p.style;
			g.lineWidth = s, g.stroke = c, g.strokeOpacity = G(e.strokeOpacity, 1), g.lineDash = e.borderDash, g.lineDashOffset = e.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (g.strokeFirst = !0, g.lineWidth *= 2);
		}
		var v = (p || m).style;
		v.shadowBlur = e.shadowBlur || 0, v.shadowColor = e.shadowColor || "transparent", v.shadowOffsetX = e.shadowOffsetX || 0, v.shadowOffsetY = e.shadowOffsetY || 0, v.opacity = Ce(e.opacity, t.opacity, 1);
	}, t.makeFont = function(e) {
		var t = "";
		return ys(e) && (t = [
			e.fontStyle,
			e.fontWeight,
			_s(e.fontSize),
			e.fontFamily || "sans-serif"
		].join(" ")), t && De(t) || e.textFont || e.font;
	}, t;
}(Ba), ms = {
	left: !0,
	right: 1,
	center: 1
}, hs = {
	top: 1,
	bottom: 1,
	middle: 1
}, gs = [
	"fontStyle",
	"fontWeight",
	"fontSize",
	"fontFamily"
];
function _s(e) {
	return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? "12px" : e + "px";
}
function vs(e, t) {
	for (var n = 0; n < gs.length; n++) {
		var r = gs[n], i = t[r];
		i != null && (e[r] = i);
	}
}
function ys(e) {
	return e.fontSize != null || e.fontFamily || e.fontWeight;
}
function bs(e) {
	return xs(e), I(e.rich, xs), e;
}
function xs(e) {
	if (e) {
		e.font = ps.makeFont(e);
		var t = e.align;
		t === "middle" && (t = "center"), e.align = t == null || ms[t] ? t : "left";
		var n = e.verticalAlign;
		n === "center" && (n = "middle"), e.verticalAlign = n == null || hs[n] ? n : "top", e.padding &&= Te(e.padding);
	}
}
function Ss(e, t) {
	return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function Cs(e) {
	return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function ws(e, t, n) {
	return t === "right" ? e - n[1] : t === "center" ? e + n[3] / 2 - n[1] / 2 : e + n[3];
}
function Ts(e) {
	var t = e.text;
	return t != null && (t += ""), t;
}
function Es(e) {
	return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor);
}
//#endregion
//#region node_modules/echarts/lib/util/number.js
var Ds = 1e-4, Os = 20;
function ks(e) {
	return e.replace(/^\s+|\s+$/g, "");
}
var As = Math.min, js = Math.max, Ms = Math.abs, Ns = Math.round, Ps = Math.floor, Fs = Math.ceil, Is = Math.pow, Ls = Math.log, Rs = Math.LN10, zs = Math.PI, Bs = Math.random;
function Vs(e, t, n, r) {
	var i = t[0], a = t[1], o = n[0], s = n[1], c = a - i, l = s - o;
	if (c === 0) return l === 0 ? o : (o + s) / 2;
	if (r) {
		if (c > 0) {
			if (e <= i) return o;
			if (e >= a) return s;
		} else if (e >= i) return o;
		else if (e <= a) return s;
	} else {
		if (e === i) return o;
		if (e === a) return s;
	}
	return (e - i) / c * l + o;
}
var Hs = Us;
function Us(e, t, n) {
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
		case "bottom": e = "100%";
	}
	return Ws(e, t, n);
}
function Ws(e, t, n) {
	return U(e) ? Ks(e) ? parseFloat(e) / 100 * t + (n || 0) : parseFloat(e) : e == null ? NaN : +e;
}
function Gs(e) {
	return U(e) && Ks(e);
}
function Ks(e) {
	return !!ks(e).match(/%$/);
}
function qs(e, t, n) {
	return isNaN(t) ? n ? "" + e : +e : (t = As(js(0, t), Os), e = (+e).toFixed(t), n ? e : +e);
}
function Js(e, t, n) {
	return t ??= 10, qs(e, t, n);
}
function Ys(e) {
	return e.sort(function(e, t) {
		return e - t;
	}), e;
}
function Xs(e) {
	if (e = +e, isNaN(e)) return 0;
	if (e > 1e-14) {
		for (var t = 1, n = 0; n < 15; n++, t *= 10) if (Ns(e * t) / t === e) return n;
	}
	return Zs(e);
}
function Zs(e) {
	var t = e.toString().toLowerCase(), n = t.indexOf("e"), r = n > 0 ? +t.slice(n + 1) : 0, i = n > 0 ? n : t.length, a = t.indexOf(".");
	return js(0, (a < 0 ? 0 : i - 1 - a) - r);
}
function Qs(e, t) {
	var n = Ps(Ls(e[1] - e[0]) / Rs), r = Ns(Ls(Ms(t[1] - t[0])) / Rs), i = As(js(-n + r, 0), Os);
	return isFinite(i) ? i : Os;
}
function $s(e, t, n) {
	var r = Ms(e[1] - e[0]);
	if (!isFinite(r) || r === 0) return NaN;
	var i = Ls(2 * Ms(n || 1) * Ms(r)) / Rs, a = Ls(Ms(t)) / Rs, o = js(0, Fs(-i + a));
	return isFinite(o) || (o = NaN), o;
}
function ec(e, t, n) {
	return e[t] && tc(e, n)[t] || 0;
}
function tc(e, t) {
	var n = R(e, function(e, t) {
		return e + (isNaN(t) ? 0 : t);
	}, 0);
	if (n === 0) return [];
	for (var r = Is(10, t), i = L(e, function(e) {
		return (isNaN(e) ? 0 : e) / n * r * 100;
	}), a = r * 100, o = L(i, function(e) {
		return Ps(e);
	}), s = R(o, function(e, t) {
		return e + t;
	}, 0), c = L(i, function(e, t) {
		return e - o[t];
	}); s < a;) {
		for (var l = -Infinity, u = null, d = 0, f = c.length; d < f; ++d) c[d] > l && (l = c[d], u = d);
		++o[u], c[u] = 0, ++s;
	}
	return L(o, function(e) {
		return e / r;
	});
}
function nc(e, t) {
	var n = js(Xs(e), Xs(t)), r = e + t;
	return n > Os ? r : qs(r, n);
}
var rc = Is(2, 53) - 1;
function ic(e) {
	var t = zs * 2;
	return (e % t + t) % t;
}
function ac(e) {
	return e > -Ds && e < Ds;
}
var oc = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function sc(e) {
	if (e instanceof Date) return e;
	if (U(e)) {
		var t = oc.exec(e);
		if (!t) return /* @__PURE__ */ new Date(NaN);
		if (t[8]) {
			var n = +t[4] || 0;
			return t[8].toUpperCase() !== "Z" && (n -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], (t[2] || 1) - 1, +t[3] || 1, n, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
		}
		return new Date(+t[1], (t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
	}
	return e == null ? /* @__PURE__ */ new Date(NaN) : new Date(Ns(e));
}
function cc(e) {
	return Is(10, lc(e));
}
function lc(e) {
	if (e === 0) return 0;
	var t = Ps(Ls(e) / Rs);
	return e / Is(10, t) >= 10 && t++, t;
}
function uc(e, t) {
	var n = lc(e), r = Is(10, n), i = e / r;
	return e = (t === 2 ? 1 : t ? i < 1.5 ? 1 : i < 2.5 ? 2 : i < 4 ? 3 : i < 7 ? 5 : 10 : i < 1 ? 1 : i < 2 ? 2 : i < 3 ? 3 : i < 5 ? 5 : 10) * r, qs(e, -n);
}
function dc(e, t) {
	var n = (e.length - 1) * t + 1, r = Ps(n), i = +e[r - 1], a = n - r;
	return a ? i + a * (e[r] - i) : i;
}
function fc(e) {
	e.sort(function(e, t) {
		return s(e, t, 0) ? -1 : 1;
	});
	for (var t = -Infinity, n = 1, r = 0; r < e.length;) {
		for (var i = e[r].interval, a = e[r].close, o = 0; o < 2; o++) i[o] <= t && (i[o] = t, a[o] = o ? 1 : 1 - n), t = i[o], n = a[o];
		i[0] === i[1] && a[0] * a[1] !== 1 ? e.splice(r, 1) : r++;
	}
	return e;
	function s(e, t, n) {
		return e.interval[n] < t.interval[n] || e.interval[n] === t.interval[n] && (e.close[n] - t.close[n] === (n ? -1 : 1) || !n && s(e, t, 1));
	}
}
function pc(e) {
	var t = parseFloat(e);
	return t == e && (t !== 0 || !U(e) || e.indexOf("x") <= 0) ? t : NaN;
}
function mc(e) {
	return !isNaN(pc(e));
}
function hc() {
	return Ns(Bs() * 9);
}
function gc(e, t) {
	return t === 0 ? e : gc(t, e % t);
}
function _c(e, t) {
	return e == null ? t : t == null ? e : e * t / gc(e, t);
}
function vc(e) {
	return e != null && isFinite(e);
}
//#endregion
//#region node_modules/echarts/lib/util/log.js
var yc = "[ECharts] ", bc = {}, xc = typeof console < "u" && console.warn && console.log;
function Sc(e, t, n) {
	if (xc) {
		if (n) {
			if (bc[t]) return;
			bc[t] = !0;
		}
		console[e](yc + t);
	}
}
function Cc(e, t) {
	Sc("error", e, t);
}
function wc(e) {
	throw Error(e);
}
//#endregion
//#region node_modules/echarts/lib/util/model.js
function Tc(e, t, n) {
	return (t - e) * n + e;
}
var Ec = "series\0", Dc = "\0_ec_\0";
function Oc(e) {
	return e instanceof Array ? e : e == null ? [] : [e];
}
function kc(e, t, n) {
	if (e) {
		e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
		for (var r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			!e.emphasis[t].hasOwnProperty(a) && e[t].hasOwnProperty(a) && (e.emphasis[t][a] = e[t][a]);
		}
	}
}
var Ac = /* @__PURE__ */ "fontStyle.fontWeight.fontSize.fontFamily.rich.tag.color.textBorderColor.textBorderWidth.width.height.lineHeight.align.verticalAlign.baseline.shadowColor.shadowBlur.shadowOffsetX.shadowOffsetY.textShadowColor.textShadowBlur.textShadowOffsetX.textShadowOffsetY.backgroundColor.borderColor.borderWidth.borderRadius.padding".split(".");
function jc(e) {
	return W(e) && !V(e) && !(e instanceof Date) ? e.value : e;
}
function Mc(e) {
	return W(e) && !(e instanceof Array);
}
function Nc(e, t, n) {
	var r = n === "normalMerge", i = n === "replaceMerge", a = n === "replaceAll";
	e ||= [], t = (t || []).slice();
	var o = K();
	I(t, function(e, n) {
		if (!W(e)) {
			t[n] = null;
			return;
		}
	});
	var s = Pc(e, o, n);
	return (r || i) && Fc(s, e, o, t), r && Ic(s, t), r || i ? Lc(s, t, i) : a && Rc(s, t), zc(s), s;
}
function Pc(e, t, n) {
	var r = [];
	if (n === "replaceAll") return r;
	for (var i = 0; i < e.length; i++) {
		var a = e[i];
		a && a.id != null && t.set(a.id, i), r.push({
			existing: n === "replaceMerge" || Wc(a) ? null : a,
			newOption: null,
			keyInfo: null,
			brandNew: null
		});
	}
	return r;
}
function Fc(e, t, n, r) {
	I(r, function(i, a) {
		if (i && i.id != null) {
			var o = Vc(i.id), s = n.get(o);
			if (s != null) {
				var c = e[s];
				Ee(!c.newOption, "Duplicated option on id \"" + o + "\"."), c.newOption = i, c.existing = t[s], r[a] = null;
			}
		}
	});
}
function Ic(e, t) {
	I(t, function(n, r) {
		if (n && n.name != null) for (var i = 0; i < e.length; i++) {
			var a = e[i].existing;
			if (!e[i].newOption && a && (a.id == null || n.id == null) && !Wc(n) && !Wc(a) && Bc("name", a, n)) {
				e[i].newOption = n, t[r] = null;
				return;
			}
		}
	});
}
function Lc(e, t, n) {
	I(t, function(t) {
		if (t) {
			for (var r, i = 0; (r = e[i]) && (r.newOption || Wc(r.existing) || r.existing && t.id != null && !Bc("id", t, r.existing));) i++;
			r ? (r.newOption = t, r.brandNew = n) : e.push({
				newOption: t,
				brandNew: n,
				existing: null,
				keyInfo: null
			}), i++;
		}
	});
}
function Rc(e, t) {
	I(t, function(t) {
		e.push({
			newOption: t,
			brandNew: !0,
			existing: null,
			keyInfo: null
		});
	});
}
function zc(e) {
	var t = K();
	I(e, function(e) {
		var n = e.existing;
		n && t.set(n.id, e);
	}), I(e, function(e) {
		var n = e.newOption;
		Ee(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
	}), I(e, function(e, n) {
		var r = e.existing, i = e.newOption, a = e.keyInfo;
		if (W(i)) {
			if (a.name = i.name == null ? r ? r.name : Ec + n : Vc(i.name), r) a.id = Vc(r.id);
			else if (i.id != null) a.id = Vc(i.id);
			else {
				var o = 0;
				do
					a.id = "\0" + a.name + "\0" + o++;
				while (t.get(a.id));
			}
			t.set(a.id, e);
		}
	});
}
function Bc(e, t, n) {
	var r = Hc(t[e], null), i = Hc(n[e], null);
	return r != null && i != null && r === i;
}
function Vc(e) {
	return Hc(e, "");
}
function Hc(e, t) {
	return e == null ? t : U(e) ? e : me(e) || pe(e) ? e + "" : t;
}
function Uc(e) {
	var t = e.name;
	return !!(t && t.indexOf(Ec));
}
function Wc(e) {
	return e && e.id != null && Vc(e.id).indexOf(Dc) === 0;
}
function Gc(e, t, n) {
	I(e, function(e) {
		var r = e.newOption;
		W(r) && (e.keyInfo.mainType = t, e.keyInfo.subType = Kc(t, r, e.existing, n));
	});
}
function Kc(e, t, n, r) {
	return t.type ? t.type : n ? n.subType : r.determineSubType(e, t);
}
function qc(e, t) {
	var n = {}, r = {};
	return i(e || [], n), i(t || [], r, n), [a(n), a(r)];
	function i(e, t, n) {
		for (var r = 0, i = e.length; r < i; r++) {
			var a = Hc(e[r].seriesId, null);
			if (a == null) return;
			for (var o = Oc(e[r].dataIndex), s = n && n[a], c = 0, l = o.length; c < l; c++) {
				var u = o[c];
				s && s[u] ? s[u] = null : (t[a] || (t[a] = {}))[u] = 1;
			}
		}
	}
	function a(e, t) {
		var n = [];
		for (var r in e) if (e.hasOwnProperty(r) && e[r] != null) {
			if (t) n.push(+r);
			else {
				var i = a(e[r], !0);
				i.length && n.push({
					seriesId: r,
					dataIndex: i
				});
			}
		}
		return n;
	}
}
function Jc(e, t) {
	if (t.dataIndexInside != null) return t.dataIndexInside;
	if (t.dataIndex != null) return V(t.dataIndex) ? L(t.dataIndex, function(t) {
		return e.indexOfRawIndex(t);
	}) : e.indexOfRawIndex(t.dataIndex);
	if (t.name != null) return V(t.name) ? L(t.name, function(t) {
		return e.indexOfName(t);
	}) : e.indexOfName(t.name);
}
function Yc() {
	var e = "__ec_inner_" + Xc++;
	return function(t) {
		return t[e] || (t[e] = {});
	};
}
var Xc = hc();
function Zc(e, t, n) {
	var r = Qc(t, n), i = r.mainTypeSpecified, a = r.queryOptionMap, o = r.others, s = n ? n.defaultMainType : null;
	return !i && s && a.set(s, {}), a.each(function(t, r) {
		var i = tl(e, r, t, {
			useDefault: s === r,
			enableAll: n && n.enableAll != null ? n.enableAll : !0,
			enableNone: n && n.enableNone != null ? n.enableNone : !0
		});
		o[r + "Models"] = i.models, o[r + "Model"] = i.models[0];
	}), o;
}
function Qc(e, t) {
	var n;
	if (U(e)) {
		var r = {};
		r[e + "Index"] = 0, n = r;
	} else n = e;
	var i = K(), a = {}, o = !1;
	return I(n, function(e, n) {
		if (n === "dataIndex" || n === "dataIndexInside") {
			a[n] = e;
			return;
		}
		var r = n.match(/^(\w+)(Index|Id|Name)$/) || [], s = r[1], c = (r[2] || "").toLowerCase();
		if (!(!s || !c || t && t.includeMainTypes && F(t.includeMainTypes, s) < 0)) {
			o ||= !!s;
			var l = i.get(s) || i.set(s, {});
			l[c] = e;
		}
	}), {
		mainTypeSpecified: o,
		queryOptionMap: i,
		others: a
	};
}
var $c = {
	useDefault: !0,
	enableAll: !1,
	enableNone: !1
}, el = {
	useDefault: !1,
	enableAll: !0,
	enableNone: !0
};
function tl(e, t, n, r) {
	r ||= $c;
	var i = n.index, a = n.id, o = n.name, s = {
		models: null,
		specified: i != null || a != null || o != null
	};
	if (!s.specified) {
		var c = void 0;
		return s.models = r.useDefault && (c = e.getComponent(t)) ? [c] : [], s;
	}
	if (i === "none" || i === !1) {
		if (r.enableNone) return s.models = [], s;
		i = -1;
	}
	return i === "all" && (i = r.enableAll ? a = o = null : -1), s.models = e.queryComponents({
		mainType: t,
		index: i,
		id: a,
		name: o
	}), s;
}
function nl(e, t, n) {
	var r = {};
	r[t + "Id"] = e[t + "Id"], r[t + "Index"] = e[t + "Index"], r[t + "Name"] = e[t + "Name"];
	var i = {
		mainType: t,
		query: r
	};
	return n && (i.subType = n), i;
}
function rl(e, t, n) {
	e.setAttribute ? e.setAttribute(t, n) : e[t] = n;
}
function il(e, t) {
	return e.getAttribute ? e.getAttribute(t) : e[t];
}
function al(e) {
	return e === "auto" ? J.domSupported ? "html" : "richText" : e || "html";
}
function ol(e, t, n, r, i) {
	var a = t == null || t === "auto";
	if (r == null) return r;
	if (me(r)) {
		var o = Tc(n || 0, r, i);
		return qs(o, a ? Math.max(Xs(n || 0), Xs(r)) : t);
	}
	if (U(r)) return i < 1 ? n : r;
	for (var s = [], c = n, l = r, u = Math.max(c ? c.length : 0, l.length), d = 0; d < u; ++d) {
		var f = e.getDimensionInfo(d);
		if (f && f.type === "ordinal") s[d] = (i < 1 && c ? c : l)[d];
		else {
			var p = c && c[d] ? c[d] : 0, m = l[d], o = Tc(p, m, i);
			s[d] = qs(o, a ? Math.max(Xs(p), Xs(m)) : t);
		}
	}
	return s;
}
(function() {
	function e() {}
	return e.prototype.reset = function(e, t, n, r) {
		return this._list = e, this._step = r ||= 1, this._idx = t, this._end = n ?? (r > 0 ? e.length : 0), this.item = null, this.key = NaN, this;
	}, e.prototype.next = function() {
		return (this._step > 0 ? this._idx < this._end : this._idx >= this._end) && (this.item = this._list[this._idx], this.key = this._idx += this._step, !0);
	}, e;
})();
function sl() {
	return [Infinity, -Infinity];
}
function cl(e, t) {
	fl(t) && (t < e[0] && (e[0] = t), t > e[1] && (e[1] = t));
}
function ll(e, t) {
	fl(t) && t < e[0] && (e[0] = t);
}
function ul(e, t) {
	fl(t) && t > e[1] && (e[1] = t);
}
function dl(e, t) {
	pl(t[0], t[1]) && (t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]));
}
function fl(e) {
	return e != null && isFinite(e);
}
function pl(e, t) {
	return fl(e) && fl(t) && e <= t;
}
function ml(e) {
	var t = e[1] - e[0];
	return isFinite(t) && t >= 0;
}
function hl(e) {
	pl(e[0], e[1]) && e[0] > e[1] && (e[0] = e[1]);
}
function gl() {
	var e = "__ec_once_" + _l++;
	return function(t, n) {
		q(t, e) || (t[e] = 1, n());
	};
}
var _l = hc();
function vl(e, t, n) {
	var r = K(), i = 0;
	I(e, function(a) {
		var o = t(a), s = r.get(o) || 0;
		n && n(a, s), !s && !n && (e[i++] = a), r.set(o, s + 1);
	}), n || (e.length = i);
}
function yl(e) {
	return e.value + "";
}
function bl(e) {
	return e + "";
}
function xl(e, t) {
	return G(t, !0) ? e.seriesIndex + 2 : 0;
}
function Sl(e, t, n) {
	var r = e.getData().count();
	return {
		progressiveRender: n.progressiveEnabled && t.incrementalPrepareRender && r >= n.threshold,
		large: e.get("large") && r >= e.get("largeThreshold"),
		modDataCount: e.get("progressiveChunkMode") === "mod" ? e.getData().count() : null
	};
}
function Cl(e, t) {
	return {
		seriesType: e,
		overallReset: t
	};
}
function wl(e) {
	return { overallReset: e };
}
//#endregion
//#region node_modules/echarts/lib/util/innerStore.js
var Z = Yc(), Tl = function(e, t, n, r) {
	if (r) {
		var i = Z(r);
		i.dataIndex = n, i.dataType = t, i.seriesIndex = e, i.ssrType = "chart", r.type === "group" && r.traverse(function(r) {
			var i = Z(r);
			i.seriesIndex = e, i.dataIndex = n, i.dataType = t, i.ssrType = "chart";
		});
	}
}, El = "series", Dl = K([
	"tooltip",
	"label",
	"itemName",
	"itemId",
	"itemGroupId",
	"itemChildGroupId",
	"seriesName"
]), Ol = "original", kl = "arrayRows", Al = "objectRows", jl = "keyedColumns", Ml = "typedArray", Nl = "unknown", Pl = "column", Fl = "Roam", Il = [
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
	"getOption",
	"getId",
	"updateLabelLayout"
], Ll = function() {
	function e(e) {
		I(Il, function(t) {
			this[t] = B(e[t], e);
		}, this);
	}
	return e;
}();
function Rl(e, t) {
	return t.mainType === "series" ? e.getViewOfSeriesModel(t) : e.getViewOfComponentModel(t);
}
//#endregion
//#region node_modules/echarts/lib/util/states.js
var zl = 1, Bl = {}, Vl = Yc(), Hl = Yc(), Ul = [
	"emphasis",
	"blur",
	"select"
], Wl = [
	"normal",
	"emphasis",
	"blur",
	"select"
], Gl = "highlight", Kl = "downplay", ql = "select", Jl = "unselect", Yl = "toggleSelect", Xl = "selectchanged";
function Zl(e) {
	return e != null && e !== "none";
}
function Ql(e, t, n) {
	e.onHoverStateChange && (e.hoverState || 0) !== n && e.onHoverStateChange(t), e.hoverState = n;
}
function $l(e) {
	Ql(e, "emphasis", 2);
}
function eu(e) {
	e.hoverState === 2 && Ql(e, "normal", 0);
}
function tu(e) {
	Ql(e, "blur", 1);
}
function nu(e) {
	e.hoverState === 1 && Ql(e, "normal", 0);
}
function ru(e) {
	e.selected = !0;
}
function iu(e) {
	e.selected = !1;
}
function au(e, t, n) {
	t(e, n);
}
function ou(e, t, n) {
	au(e, t, n), e.isGroup && e.traverse(function(e) {
		au(e, t, n);
	});
}
function su(e, t) {
	switch (t) {
		case "emphasis":
			e.hoverState = 2;
			break;
		case "normal":
			e.hoverState = 0;
			break;
		case "blur":
			e.hoverState = 1;
			break;
		case "select": e.selected = !0;
	}
}
function cu(e, t, n, r) {
	for (var i = e.style, a = {}, o = 0; o < t.length; o++) {
		var s = t[o];
		a[s] = i[s] ?? (r && r[s]);
	}
	for (var o = 0; o < e.animators.length; o++) {
		var c = e.animators[o];
		c.__fromStateTransition && c.__fromStateTransition.indexOf(n) < 0 && c.targetName === "style" && c.saveTo(a, t);
	}
	return a;
}
function lu(e, t, n, r) {
	var i = n && F(n, "select") >= 0, a = !1;
	if (e instanceof Jo) {
		var o = Vl(e), s = i && o.selectFill || o.normalFill, c = i && o.selectStroke || o.normalStroke;
		if (Zl(s) || Zl(c)) {
			r ||= {};
			var l = r.style || {};
			l.fill === "inherit" ? (a = !0, r = N({}, r), l = N({}, l), l.fill = s) : !Zl(l.fill) && Zl(s) ? (a = !0, r = N({}, r), l = N({}, l), l.fill = bi(s)) : !Zl(l.stroke) && Zl(c) && (a || (r = N({}, r), l = N({}, l)), l.stroke = bi(c)), r.style = l;
		}
	}
	if (r && r.z2 == null) {
		a || (r = N({}, r));
		var u = e.z2EmphasisLift;
		r.z2 = e.z2 + (u ?? 10);
	}
	return r;
}
function uu(e, t, n) {
	if (n && n.z2 == null) {
		n = N({}, n);
		var r = e.z2SelectLift;
		n.z2 = e.z2 + (r ?? 9);
	}
	return n;
}
function du(e, t, n) {
	var r = F(e.currentStates, t) >= 0, i = e.style.opacity, a = r ? null : cu(e, ["opacity"], t, { opacity: 1 });
	n ||= {};
	var o = n.style || {};
	return o.opacity ?? (n = N({}, n), o = N({ opacity: r ? i : a.opacity * .1 }, o), n.style = o), n;
}
function fu(e, t) {
	var n = this.states[e];
	if (this.style) {
		if (e === "emphasis") return lu(this, e, t, n);
		if (e === "blur") return du(this, e, n);
		if (e === "select") return uu(this, e, n);
	}
	return n;
}
function pu(e) {
	e.stateProxy = fu;
	var t = e.getTextContent(), n = e.getTextGuideLine();
	t && (t.stateProxy = fu), n && (n.stateProxy = fu);
}
function mu(e, t) {
	!Su(e, t) && !e.__highByOuter && ou(e, $l);
}
function hu(e, t) {
	!Su(e, t) && !e.__highByOuter && ou(e, eu);
}
function gu(e, t) {
	e.__highByOuter |= 1 << (t || 0), ou(e, $l);
}
function _u(e, t) {
	!(e.__highByOuter &= ~(1 << (t || 0))) && ou(e, eu);
}
function vu(e) {
	ou(e, tu);
}
function yu(e) {
	ou(e, nu);
}
function bu(e) {
	ou(e, ru);
}
function xu(e) {
	ou(e, iu);
}
function Su(e, t) {
	return e.__highDownSilentOnTouch && t.zrByTouch;
}
function Cu(e) {
	var t = e.getModel(), n = [], r = [];
	t.eachComponent(function(t, i) {
		var a = Hl(i), o = Rl(e, i), s = t === "series";
		!s && r.push(o), a.isBlured && (o.group.traverse(function(e) {
			nu(e);
		}), s && n.push(i)), a.isBlured = !1;
	}), I(r, function(e) {
		e && e.toggleBlurSeries && e.toggleBlurSeries(n, !1, t);
	});
}
function wu(e, t, n, r) {
	var i = r.getModel();
	n ||= "coordinateSystem";
	function a(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = e.getItemGraphicEl(t[n]);
			r && yu(r);
		}
	}
	if (e != null && t && t !== "none") {
		var o = i.getSeriesByIndex(e), s = o.coordinateSystem;
		s && s.master && (s = s.master);
		var c = [];
		i.eachSeries(function(e) {
			var i = o === e, l = e.coordinateSystem;
			if (l && l.master && (l = l.master), !(n === "series" && !i || n === "coordinateSystem" && !(l && s ? l === s : i) || t === "series" && i)) {
				if (r.getViewOfSeriesModel(e).group.traverse(function(e) {
					e.__highByOuter && i && t === "self" || tu(e);
				}), ce(t)) a(e.getData(), t);
				else if (W(t)) for (var u = z(t), d = 0; d < u.length; d++) a(e.getData(u[d]), t[u[d]]);
				c.push(e), Hl(e).isBlured = !0;
			}
		}), i.eachComponent(function(e, t) {
			if (e !== "series") {
				var n = r.getViewOfComponentModel(t);
				n && n.toggleBlurSeries && n.toggleBlurSeries(c, !0, i);
			}
		});
	}
}
function Tu(e, t, n) {
	if (e != null && t != null) {
		var r = n.getModel().getComponent(e, t);
		if (r) {
			Hl(r).isBlured = !0;
			var i = n.getViewOfComponentModel(r);
			i && i.focusBlurEnabled && i.group.traverse(function(e) {
				tu(e);
			});
		}
	}
}
function Eu(e, t, n) {
	var r = e.seriesIndex, i = e.getData(t.dataType);
	if (i) {
		var a = Jc(i, t);
		a = (V(a) ? a[0] : a) || 0;
		var o = i.getItemGraphicEl(a);
		if (!o) for (var s = i.count(), c = 0; !o && c < s;) o = i.getItemGraphicEl(c++);
		if (o) {
			var l = Z(o);
			wu(r, l.focus, l.blurScope, n);
		} else {
			var u = e.get(["emphasis", "focus"]), d = e.get(["emphasis", "blurScope"]);
			u != null && wu(r, u, d, n);
		}
	}
}
function Du(e, t, n, r) {
	var i = {
		focusSelf: !1,
		dispatchers: null
	};
	if (e == null || e === "series" || t == null || n == null) return i;
	var a = r.getModel().getComponent(e, t);
	if (!a) return i;
	var o = r.getViewOfComponentModel(a);
	if (!o || !o.findHighDownDispatchers) return i;
	for (var s = o.findHighDownDispatchers(n), c, l = 0; l < s.length; l++) if (Z(s[l]).focus === "self") {
		c = !0;
		break;
	}
	return {
		focusSelf: c,
		dispatchers: s
	};
}
function Ou(e, t, n) {
	var r = Z(e), i = Du(r.componentMainType, r.componentIndex, r.componentHighDownName, n), a = i.dispatchers, o = i.focusSelf;
	a ? (o && Tu(r.componentMainType, r.componentIndex, n), I(a, function(e) {
		return mu(e, t);
	})) : (wu(r.seriesIndex, r.focus, r.blurScope, n), r.focus === "self" && Tu(r.componentMainType, r.componentIndex, n), mu(e, t));
}
function ku(e, t, n) {
	Cu(n);
	var r = Z(e), i = Du(r.componentMainType, r.componentIndex, r.componentHighDownName, n).dispatchers;
	i ? I(i, function(e) {
		return hu(e, t);
	}) : hu(e, t);
}
function Au(e, t, n) {
	if (Wu(t)) {
		var r = t.dataType, i = Jc(e.getData(r), t);
		V(i) || (i = [i]), e[t.type === "toggleSelect" ? "toggleSelect" : t.type === "select" ? "select" : "unselect"](i, r);
	}
}
function ju(e) {
	I(e.getAllData(), function(t) {
		var n = t.data, r = t.type;
		n.eachItemGraphicEl(function(t, n) {
			e.isSelected(n, r) ? bu(t) : xu(t);
		});
	});
}
function Mu(e) {
	var t = [];
	return e.eachSeries(function(e) {
		I(e.getAllData(), function(n) {
			n.data;
			var r = n.type, i = e.getSelectedDataIndices();
			if (i.length > 0) {
				var a = {
					dataIndex: i,
					seriesIndex: e.seriesIndex
				};
				r != null && (a.dataType = r), t.push(a);
			}
		});
	}), t;
}
function Nu(e, t, n) {
	Bu(e, !0), ou(e, pu), Iu(e, t, n);
}
function Pu(e) {
	Bu(e, !1);
}
function Fu(e, t, n, r) {
	r ? Pu(e) : Nu(e, t, n);
}
function Iu(e, t, n) {
	var r = Z(e);
	t == null ? r.focus &&= null : (r.focus = t, r.blurScope = n);
}
var Lu = [
	"emphasis",
	"blur",
	"select"
], Ru = {
	itemStyle: "getItemStyle",
	lineStyle: "getLineStyle",
	areaStyle: "getAreaStyle"
};
function zu(e, t, n, r) {
	n ||= "itemStyle";
	for (var i = 0; i < Lu.length; i++) {
		var a = Lu[i], o = t.getModel([a, n]), s = e.ensureState(a);
		s.style = r ? r(o) : o[Ru[n]]();
	}
}
function Bu(e, t) {
	var n = t === !1, r = e;
	e.highDownSilentOnTouch && (r.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!n || r.__highDownDispatcher) && (r.__highByOuter = r.__highByOuter || 0, r.__highDownDispatcher = !n);
}
function Vu(e) {
	return !!(e && e.__highDownDispatcher);
}
function Hu(e, t, n) {
	var r = Z(e);
	r.componentMainType = t.mainType, r.componentIndex = t.componentIndex, r.componentHighDownName = n;
}
function Uu(e) {
	var t = Bl[e];
	return t == null && zl <= 32 && (t = Bl[e] = zl++), t;
}
function Wu(e) {
	var t = e.type;
	return t === "select" || t === "unselect" || t === "toggleSelect";
}
function Gu(e) {
	var t = e.type;
	return t === "highlight" || t === "downplay";
}
function Ku(e) {
	var t = Vl(e);
	t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
	var n = e.states.select || {};
	t.selectFill = n.style && n.style.fill || null, t.selectStroke = n.style && n.style.stroke || null;
}
//#endregion
//#region node_modules/zrender/lib/tool/transformPath.js
var qu = Co.CMD, Ju = [
	[],
	[],
	[]
], Yu = Math.sqrt, Xu = Math.atan2;
function Zu(e, t) {
	if (t) {
		var n = e.data, r = e.len(), i, a, o, s, c, l, u = qu.M, d = qu.C, f = qu.L, p = qu.R, m = qu.A, h = qu.Q;
		for (o = 0, s = 0; o < r;) {
			switch (i = n[o++], s = o, a = 0, i) {
				case u:
					a = 1;
					break;
				case f:
					a = 1;
					break;
				case d:
					a = 3;
					break;
				case h:
					a = 2;
					break;
				case m:
					var g = t[4], _ = t[5], v = Yu(t[0] * t[0] + t[1] * t[1]), y = Yu(t[2] * t[2] + t[3] * t[3]), b = Xu(-t[1] / y, t[0] / v);
					n[o] *= v, n[o++] += g, n[o] *= y, n[o++] += _, n[o++] *= v, n[o++] *= y, n[o++] += b, n[o++] += b, o += 2, s = o;
					break;
				case p: l[0] = n[o++], l[1] = n[o++], qt(l, l, t), n[s++] = l[0], n[s++] = l[1], l[0] += n[o++], l[1] += n[o++], qt(l, l, t), n[s++] = l[0], n[s++] = l[1];
			}
			for (c = 0; c < a; c++) {
				var x = Ju[c];
				x[0] = n[o++], x[1] = n[o++], qt(x, x, t), n[s++] = x[0], n[s++] = x[1];
			}
		}
		e.increaseVersion();
	}
}
//#endregion
//#region node_modules/zrender/lib/tool/path.js
var Qu = Math.sqrt, $u = Math.sin, ed = Math.cos, td = Math.PI;
function nd(e) {
	return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
}
function rd(e, t) {
	return (e[0] * t[0] + e[1] * t[1]) / (nd(e) * nd(t));
}
function id(e, t) {
	return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(rd(e, t));
}
function ad(e, t, n, r, i, a, o, s, c, l, u) {
	var d = td / 180 * c, f = ed(d) * (e - n) / 2 + $u(d) * (t - r) / 2, p = -1 * $u(d) * (e - n) / 2 + ed(d) * (t - r) / 2, m = f * f / (o * o) + p * p / (s * s);
	m > 1 && (o *= Qu(m), s *= Qu(m));
	var h = (i === a ? -1 : 1) * Qu((o * o * (s * s) - o * o * (p * p) - s * s * (f * f)) / (o * o * (p * p) + s * s * (f * f))) || 0, g = h * o * p / s, _ = h * -s * f / o, v = (e + n) / 2 + ed(d) * g - $u(d) * _, y = (t + r) / 2 + $u(d) * g + ed(d) * _, b = id([1, 0], [(f - g) / o, (p - _) / s]), x = [(f - g) / o, (p - _) / s], S = [(-1 * f - g) / o, (-1 * p - _) / s], C = id(x, S);
	if (rd(x, S) <= -1 && (C = td), rd(x, S) >= 1 && (C = 0), C < 0) {
		var w = Math.round(C / td * 1e6) / 1e6;
		C = td * 2 + w % 2 * td;
	}
	u.addData(l, v, y, o, s, b, C, d, a);
}
var od = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, sd = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function cd(e) {
	var t = new Co();
	if (!e) return t;
	var n = 0, r = 0, i = n, a = r, o, s = Co.CMD, c = e.match(od);
	if (!c) return t;
	for (var l = 0; l < c.length; l++) {
		for (var u = c[l], d = u.charAt(0), f = void 0, p = u.match(sd) || [], m = p.length, h = 0; h < m; h++) p[h] = parseFloat(p[h]);
		for (var g = 0; g < m;) {
			var _ = void 0, v = void 0, y = void 0, b = void 0, x = void 0, S = void 0, C = void 0, w = n, T = r, E = void 0, D = void 0;
			switch (d) {
				case "l":
					n += p[g++], r += p[g++], f = s.L, t.addData(f, n, r);
					break;
				case "L":
					n = p[g++], r = p[g++], f = s.L, t.addData(f, n, r);
					break;
				case "m":
					n += p[g++], r += p[g++], f = s.M, t.addData(f, n, r), i = n, a = r, d = "l";
					break;
				case "M":
					n = p[g++], r = p[g++], f = s.M, t.addData(f, n, r), i = n, a = r, d = "L";
					break;
				case "h":
					n += p[g++], f = s.L, t.addData(f, n, r);
					break;
				case "H":
					n = p[g++], f = s.L, t.addData(f, n, r);
					break;
				case "v":
					r += p[g++], f = s.L, t.addData(f, n, r);
					break;
				case "V":
					r = p[g++], f = s.L, t.addData(f, n, r);
					break;
				case "C":
					f = s.C, t.addData(f, p[g++], p[g++], p[g++], p[g++], p[g++], p[g++]), n = p[g - 2], r = p[g - 1];
					break;
				case "c":
					f = s.C, t.addData(f, p[g++] + n, p[g++] + r, p[g++] + n, p[g++] + r, p[g++] + n, p[g++] + r), n += p[g - 2], r += p[g - 1];
					break;
				case "S":
					_ = n, v = r, E = t.len(), D = t.data, o === s.C && (_ += n - D[E - 4], v += r - D[E - 3]), f = s.C, w = p[g++], T = p[g++], n = p[g++], r = p[g++], t.addData(f, _, v, w, T, n, r);
					break;
				case "s":
					_ = n, v = r, E = t.len(), D = t.data, o === s.C && (_ += n - D[E - 4], v += r - D[E - 3]), f = s.C, w = n + p[g++], T = r + p[g++], n += p[g++], r += p[g++], t.addData(f, _, v, w, T, n, r);
					break;
				case "Q":
					w = p[g++], T = p[g++], n = p[g++], r = p[g++], f = s.Q, t.addData(f, w, T, n, r);
					break;
				case "q":
					w = p[g++] + n, T = p[g++] + r, n += p[g++], r += p[g++], f = s.Q, t.addData(f, w, T, n, r);
					break;
				case "T":
					_ = n, v = r, E = t.len(), D = t.data, o === s.Q && (_ += n - D[E - 4], v += r - D[E - 3]), n = p[g++], r = p[g++], f = s.Q, t.addData(f, _, v, n, r);
					break;
				case "t":
					_ = n, v = r, E = t.len(), D = t.data, o === s.Q && (_ += n - D[E - 4], v += r - D[E - 3]), n += p[g++], r += p[g++], f = s.Q, t.addData(f, _, v, n, r);
					break;
				case "A":
					y = p[g++], b = p[g++], x = p[g++], S = p[g++], C = p[g++], w = n, T = r, n = p[g++], r = p[g++], f = s.A, ad(w, T, n, r, S, C, y, b, x, f, t);
					break;
				case "a": y = p[g++], b = p[g++], x = p[g++], S = p[g++], C = p[g++], w = n, T = r, n += p[g++], r += p[g++], f = s.A, ad(w, T, n, r, S, C, y, b, x, f, t);
			}
		}
		(d === "z" || d === "Z") && (f = s.Z, t.addData(f), n = i, r = a), o = f;
	}
	return t.toStatic(), t;
}
var ld = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.applyTransform = function(e) {}, t;
}(Jo);
function ud(e) {
	return e.setData != null;
}
function dd(e, t) {
	var n = cd(e), r = N({}, t);
	return r.buildPath = function(e) {
		var t = ud(e);
		if (t && e.canSave()) {
			e.appendPath(n);
			var r = e.getContext();
			r && e.rebuildPath(r, 1);
		} else {
			var r = t ? e.getContext() : e;
			r && n.rebuildPath(r, 1);
		}
	}, r.applyTransform = function(e) {
		Zu(n, e), this.dirtyShape();
	}, r;
}
function fd(e, t) {
	return new ld(dd(e, t));
}
function pd(e, t) {
	var n = dd(e, t);
	return function(e) {
		l(t, e);
		function t(t) {
			var r = e.call(this, t) || this;
			return r.applyTransform = n.applyTransform, r.buildPath = n.buildPath, r;
		}
		return t;
	}(ld);
}
function md(e, t) {
	for (var n = [], r = e.length, i = 0; i < r; i++) {
		var a = e[i];
		n.push(a.getUpdatedPathProxy(!0));
	}
	var o = new Jo(t);
	return o.createPathProxy(), o.buildPath = function(e) {
		if (ud(e)) {
			e.appendPath(n);
			var t = e.getContext();
			t && e.rebuildPath(t, 1);
		}
	}, o;
}
//#endregion
//#region node_modules/zrender/lib/graphic/Group.js
var hd = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.isGroup = !0, n._children = [], n.attr(t), n;
	}
	return t.prototype.childrenRef = function() {
		return this._children;
	}, t.prototype.children = function() {
		return this._children.slice();
	}, t.prototype.childAt = function(e) {
		return this._children[e];
	}, t.prototype.childOfName = function(e) {
		for (var t = this._children, n = 0; n < t.length; n++) if (t[n].name === e) return t[n];
	}, t.prototype.childCount = function() {
		return this._children.length;
	}, t.prototype.add = function(e) {
		return e && e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), this;
	}, t.prototype.addBefore = function(e, t) {
		if (e && e !== this && e.parent !== this && t && t.parent === this) {
			var n = this._children, r = n.indexOf(t);
			r >= 0 && (n.splice(r, 0, e), this._doAdd(e));
		}
		return this;
	}, t.prototype.replace = function(e, t) {
		var n = F(this._children, e);
		return n >= 0 && this.replaceAt(t, n), this;
	}, t.prototype.replaceAt = function(e, t) {
		var n = this._children, r = n[t];
		if (e && e !== this && e.parent !== this && e !== r) {
			n[t] = e, r.parent = null;
			var i = this.__zr;
			i && r.removeSelfFromZr(i), this._doAdd(e);
		}
		return this;
	}, t.prototype._doAdd = function(e) {
		e.parent && e.parent.remove(e), e.parent = this;
		var t = this.__zr;
		t && t !== e.__zr && e.addSelfToZr(t), t && t.refresh();
	}, t.prototype.remove = function(e) {
		var t = this.__zr, n = this._children, r = F(n, e);
		return r < 0 ? this : (n.splice(r, 1), e.parent = null, t && e.removeSelfFromZr(t), t && t.refresh(), this);
	}, t.prototype.removeAll = function() {
		for (var e = this._children, t = this.__zr, n = 0; n < e.length; n++) {
			var r = e[n];
			t && r.removeSelfFromZr(t), r.parent = null;
		}
		return e.length = 0, this;
	}, t.prototype.eachChild = function(e, t) {
		for (var n = this._children, r = 0; r < n.length; r++) {
			var i = n[r];
			e.call(t, i, r);
		}
		return this;
	}, t.prototype.traverse = function(e, t) {
		for (var n = 0; n < this._children.length; n++) {
			var r = this._children[n], i = e.call(t, r);
			r.isGroup && !i && r.traverse(e, t);
		}
		return this;
	}, t.prototype.addSelfToZr = function(t) {
		e.prototype.addSelfToZr.call(this, t);
		for (var n = 0; n < this._children.length; n++) this._children[n].addSelfToZr(t);
	}, t.prototype.removeSelfFromZr = function(t) {
		e.prototype.removeSelfFromZr.call(this, t);
		for (var n = 0; n < this._children.length; n++) this._children[n].removeSelfFromZr(t);
	}, t.prototype.getBoundingRect = function(e) {
		for (var t = new X(0, 0, 0, 0), n = e || this._children, r = [], i = null, a = 0; a < n.length; a++) {
			var o = n[a];
			if (!(o.ignore || o.invisible)) {
				var s = o.getBoundingRect(), c = o.getLocalTransform(r);
				c ? (X.applyTransform(t, s, c), i ||= t.clone(), i.union(t)) : (i ||= s.clone(), i.union(s));
			}
		}
		return i || t;
	}, t;
}(wa);
hd.prototype.type = "group";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Circle.js
var gd = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r = 0;
	}
	return e;
}(), _d = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new gd();
	}, t.prototype.buildPath = function(e, t) {
		e.moveTo(t.cx + t.r, t.cy), e.arc(t.cx, t.cy, t.r, 0, Math.PI * 2);
	}, t;
}(Jo);
_d.prototype.type = "circle";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Ellipse.js
var vd = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
	}
	return e;
}(), yd = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new vd();
	}, t.prototype.buildPath = function(e, t) {
		var n = .5522848, r = t.cx, i = t.cy, a = t.rx, o = t.ry, s = a * n, c = o * n;
		e.moveTo(r - a, i), e.bezierCurveTo(r - a, i - c, r - s, i - o, r, i - o), e.bezierCurveTo(r + s, i - o, r + a, i - c, r + a, i), e.bezierCurveTo(r + a, i + c, r + s, i + o, r, i + o), e.bezierCurveTo(r - s, i + o, r - a, i + c, r - a, i), e.closePath();
	}, t;
}(Jo);
yd.prototype.type = "ellipse";
//#endregion
//#region node_modules/zrender/lib/graphic/helper/roundSector.js
var bd = Math.PI, xd = bd * 2, Sd = Math.sin, Cd = Math.cos, wd = Math.acos, Td = Math.atan2, Ed = Math.abs, Dd = Math.sqrt, Od = Math.max, kd = Math.min, Ad = 1e-4;
function jd(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < Ad)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function Md(e, t, n, r, i, a, o) {
	var s = e - n, c = t - r, l = (o ? a : -a) / Dd(s * s + c * c), u = l * c, d = -l * s, f = e + u, p = t + d, m = n + u, h = r + d, g = (f + m) / 2, _ = (p + h) / 2, v = m - f, y = h - p, b = v * v + y * y, x = i - a, S = f * h - m * p, C = (y < 0 ? -1 : 1) * Dd(Od(0, x * x * b - S * S)), w = (S * y - v * C) / b, T = (-S * v - y * C) / b, E = (S * y + v * C) / b, D = (-S * v + y * C) / b, O = w - g, k = T - _, A = E - g, ee = D - _;
	return O * O + k * k > A * A + ee * ee && (w = E, T = D), {
		cx: w,
		cy: T,
		x0: -u,
		y0: -d,
		x1: w * (i / x - 1),
		y1: T * (i / x - 1)
	};
}
function Nd(e) {
	var t;
	if (V(e)) {
		var n = e.length;
		if (!n) return e;
		t = n === 1 ? [
			e[0],
			e[0],
			0,
			0
		] : n === 2 ? [
			e[0],
			e[0],
			e[1],
			e[1]
		] : n === 3 ? e.concat(e[2]) : e;
	} else t = [
		e,
		e,
		e,
		e
	];
	return t;
}
function Pd(e, t) {
	var n, r = Od(t.r, 0), i = Od(t.r0 || 0, 0), a = r > 0;
	if (a || i > 0) {
		if (a || (r = i, i = 0), i > r) {
			var o = r;
			r = i, i = o;
		}
		var s = t.startAngle, c = t.endAngle;
		if (!(isNaN(s) || isNaN(c))) {
			var l = t.cx, u = t.cy, d = !!t.clockwise, f = Ed(c - s), p = f > xd && f % xd;
			if (p > Ad && (f = p), !(r > Ad)) e.moveTo(l, u);
			else if (f > xd - Ad) e.moveTo(l + r * Cd(s), u + r * Sd(s)), e.arc(l, u, r, s, c, !d), i > Ad && (e.moveTo(l + i * Cd(c), u + i * Sd(c)), e.arc(l, u, i, c, s, d));
			else {
				var m = void 0, h = void 0, g = void 0, _ = void 0, v = void 0, y = void 0, b = void 0, x = void 0, S = void 0, C = void 0, w = void 0, T = void 0, E = void 0, D = void 0, O = void 0, k = void 0, A = r * Cd(s), ee = r * Sd(s), te = i * Cd(c), ne = i * Sd(c), j = f > Ad;
				if (j) {
					var M = t.cornerRadius;
					M && (n = Nd(M), m = n[0], h = n[1], g = n[2], _ = n[3]);
					var re = Ed(r - i) / 2;
					if (v = kd(re, g), y = kd(re, _), b = kd(re, m), x = kd(re, h), w = S = Od(v, y), T = C = Od(b, x), (S > Ad || C > Ad) && (E = r * Cd(c), D = r * Sd(c), O = i * Cd(s), k = i * Sd(s), f < bd)) {
						var N = jd(A, ee, O, k, E, D, te, ne);
						if (N) {
							var ie = A - N[0], P = ee - N[1], ae = E - N[0], F = D - N[1], oe = 1 / Sd(wd((ie * ae + P * F) / (Dd(ie * ie + P * P) * Dd(ae * ae + F * F))) / 2), se = Dd(N[0] * N[0] + N[1] * N[1]);
							w = kd(S, (r - se) / (oe + 1)), T = kd(C, (i - se) / (oe - 1));
						}
					}
				}
				if (!j) e.moveTo(l + A, u + ee);
				else if (w > Ad) {
					var ce = kd(g, w), I = kd(_, w), L = Md(O, k, A, ee, r, ce, d), R = Md(E, D, te, ne, r, I, d);
					e.moveTo(l + L.cx + L.x0, u + L.cy + L.y0), w < S && ce === I ? e.arc(l + L.cx, u + L.cy, w, Td(L.y0, L.x0), Td(R.y0, R.x0), !d) : (ce > 0 && e.arc(l + L.cx, u + L.cy, ce, Td(L.y0, L.x0), Td(L.y1, L.x1), !d), e.arc(l, u, r, Td(L.cy + L.y1, L.cx + L.x1), Td(R.cy + R.y1, R.cx + R.x1), !d), I > 0 && e.arc(l + R.cx, u + R.cy, I, Td(R.y1, R.x1), Td(R.y0, R.x0), !d));
				} else e.moveTo(l + A, u + ee), e.arc(l, u, r, s, c, !d);
				if (!(i > Ad) || !j) e.lineTo(l + te, u + ne);
				else if (T > Ad) {
					var ce = kd(m, T), I = kd(h, T), L = Md(te, ne, E, D, i, -I, d), R = Md(A, ee, O, k, i, -ce, d);
					e.lineTo(l + L.cx + L.x0, u + L.cy + L.y0), T < C && ce === I ? e.arc(l + L.cx, u + L.cy, T, Td(L.y0, L.x0), Td(R.y0, R.x0), !d) : (I > 0 && e.arc(l + L.cx, u + L.cy, I, Td(L.y0, L.x0), Td(L.y1, L.x1), !d), e.arc(l, u, i, Td(L.cy + L.y1, L.cx + L.x1), Td(R.cy + R.y1, R.cx + R.x1), d), ce > 0 && e.arc(l + R.cx, u + R.cy, ce, Td(R.y1, R.x1), Td(R.y0, R.x0), !d));
				} else e.lineTo(l + te, u + ne), e.arc(l, u, i, c, s, d);
			}
			e.closePath();
		}
	}
}
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Sector.js
var Fd = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
	}
	return e;
}(), Id = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new Fd();
	}, t.prototype.buildPath = function(e, t) {
		Pd(e, t);
	}, t.prototype.isZeroArea = function() {
		return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
	}, t;
}(Jo);
Id.prototype.type = "sector";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Ring.js
var Ld = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
	}
	return e;
}(), Rd = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new Ld();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.cx, r = t.cy, i = Math.PI * 2;
		e.moveTo(n + t.r, r), e.arc(n, r, t.r, 0, i, !1), e.moveTo(n + t.r0, r), e.arc(n, r, t.r0, 0, i, !0);
	}, t;
}(Jo);
Rd.prototype.type = "ring";
//#endregion
//#region node_modules/zrender/lib/graphic/helper/smoothBezier.js
function zd(e, t, n, r) {
	var i = [], a = [], o = [], s = [], c, l, u, d;
	if (r) {
		u = [Infinity, Infinity], d = [-Infinity, -Infinity];
		for (var f = 0, p = e.length; f < p; f++) Jt(u, u, e[f]), Yt(d, d, e[f]);
		Jt(u, u, r[0]), Yt(d, d, r[1]);
	}
	for (var f = 0, p = e.length; f < p; f++) {
		var m = e[f];
		if (n) c = e[f ? f - 1 : p - 1], l = e[(f + 1) % p];
		else if (f === 0 || f === p - 1) {
			i.push(Dt(e[f]));
			continue;
		} else c = e[f - 1], l = e[f + 1];
		jt(a, l, c), zt(a, a, t);
		var h = Vt(m, c), g = Vt(m, l), _ = h + g;
		_ !== 0 && (h /= _, g /= _), zt(o, a, -h), zt(s, a, g);
		var v = kt([], m, o), y = kt([], m, s);
		r && (Yt(v, v, u), Jt(v, v, d), Yt(y, y, u), Jt(y, y, d)), i.push(v), i.push(y);
	}
	return n && i.push(i.shift()), i;
}
//#endregion
//#region node_modules/zrender/lib/graphic/helper/poly.js
function Bd(e, t, n) {
	var r = t.smooth, i = t.points;
	if (i && i.length >= 2) {
		if (r) {
			var a = zd(i, r, n, t.smoothConstraint);
			e.moveTo(i[0][0], i[0][1]);
			for (var o = i.length, s = 0; s < (n ? o : o - 1); s++) {
				var c = a[s * 2], l = a[s * 2 + 1], u = i[(s + 1) % o];
				e.bezierCurveTo(c[0], c[1], l[0], l[1], u[0], u[1]);
			}
		} else {
			e.moveTo(i[0][0], i[0][1]);
			for (var s = 1, d = i.length; s < d; s++) e.lineTo(i[s][0], i[s][1]);
		}
		n && e.closePath();
	}
}
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Polygon.js
var Vd = function() {
	function e() {
		this.points = null, this.smooth = 0, this.smoothConstraint = null;
	}
	return e;
}(), Hd = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new Vd();
	}, t.prototype.buildPath = function(e, t) {
		Bd(e, t, !0);
	}, t;
}(Jo);
Hd.prototype.type = "polygon";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Polyline.js
var Ud = function() {
	function e() {
		this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
	}
	return e;
}(), Wd = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new Ud();
	}, t.prototype.buildPath = function(e, t) {
		Bd(e, t, !1);
	}, t;
}(Jo);
Wd.prototype.type = "polyline";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Line.js
var Gd = {}, Kd = function() {
	function e() {
		this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
	}
	return e;
}(), qd = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new Kd();
	}, t.prototype.buildPath = function(e, t) {
		var n, r, i, a;
		if (this.subPixelOptimize) {
			var o = rs(Gd, t, this.style);
			n = o.x1, r = o.y1, i = o.x2, a = o.y2;
		} else n = t.x1, r = t.y1, i = t.x2, a = t.y2;
		var s = t.percent;
		s !== 0 && (e.moveTo(n, r), s < 1 && (i = n * (1 - s) + i * s, a = r * (1 - s) + a * s), e.lineTo(i, a));
	}, t.prototype.pointAt = function(e) {
		var t = this.shape;
		return [t.x1 * (1 - e) + t.x2 * e, t.y1 * (1 - e) + t.y2 * e];
	}, t;
}(Jo);
qd.prototype.type = "line";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/BezierCurve.js
var Jd = [], Yd = function() {
	function e() {
		this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
	}
	return e;
}();
function Xd(e, t, n) {
	var r = e.cpx2, i = e.cpy2;
	return r != null || i != null ? [(n ? kr : Or)(e.x1, e.cpx1, e.cpx2, e.x2, t), (n ? kr : Or)(e.y1, e.cpy1, e.cpy2, e.y2, t)] : [(n ? Ir : Fr)(e.x1, e.cpx1, e.x2, t), (n ? Ir : Fr)(e.y1, e.cpy1, e.y2, t)];
}
var Zd = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new Yd();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.x1, r = t.y1, i = t.x2, a = t.y2, o = t.cpx1, s = t.cpy1, c = t.cpx2, l = t.cpy2, u = t.percent;
		u !== 0 && (e.moveTo(n, r), c == null || l == null ? (u < 1 && (zr(n, o, i, u, Jd), o = Jd[1], i = Jd[2], zr(r, s, a, u, Jd), s = Jd[1], a = Jd[2]), e.quadraticCurveTo(o, s, i, a)) : (u < 1 && (Mr(n, o, c, i, u, Jd), o = Jd[1], c = Jd[2], i = Jd[3], Mr(r, s, l, a, u, Jd), s = Jd[1], l = Jd[2], a = Jd[3]), e.bezierCurveTo(o, s, c, l, i, a)));
	}, t.prototype.pointAt = function(e) {
		return Xd(this.shape, e, !1);
	}, t.prototype.tangentAt = function(e) {
		var t = Xd(this.shape, e, !0);
		return Bt(t, t);
	}, t;
}(Jo);
Zd.prototype.type = "bezier-curve";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Arc.js
var Qd = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
	}
	return e;
}(), $d = function(e) {
	l(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new Qd();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.cx, r = t.cy, i = Math.max(t.r, 0), a = t.startAngle, o = t.endAngle, s = t.clockwise, c = Math.cos(a), l = Math.sin(a);
		e.moveTo(c * i + n, l * i + r), e.arc(n, r, i, a, o, !s);
	}, t;
}(Jo);
$d.prototype.type = "arc";
//#endregion
//#region node_modules/zrender/lib/graphic/CompoundPath.js
var ef = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "compound", t;
	}
	return t.prototype._updatePathDirty = function() {
		for (var e = this.shape.paths, t = this.shapeChanged(), n = 0; n < e.length; n++) t ||= e[n].shapeChanged();
		t && this.dirtyShape();
	}, t.prototype.beforeBrush = function() {
		this._updatePathDirty();
		for (var e = this.shape.paths || [], t = this.getGlobalScale(), n = 0; n < e.length; n++) e[n].path || e[n].createPathProxy(), e[n].path.setScale(t[0], t[1], e[n].segmentIgnoreThreshold);
	}, t.prototype.buildPath = function(e, t) {
		for (var n = t.paths || [], r = 0; r < n.length; r++) n[r].buildPath(e, n[r].shape, !0);
	}, t.prototype.afterBrush = function() {
		for (var e = this.shape.paths || [], t = 0; t < e.length; t++) e[t].pathUpdated();
	}, t.prototype.getBoundingRect = function() {
		return this._updatePathDirty.call(this), Jo.prototype.getBoundingRect.call(this);
	}, t;
}(Jo), tf = function() {
	function e(e) {
		this.colorStops = e || [];
	}
	return e.prototype.addColorStop = function(e, t) {
		this.colorStops.push({
			offset: e,
			color: t
		});
	}, e;
}(), nf = function(e) {
	l(t, e);
	function t(t, n, r, i, a, o) {
		var s = e.call(this, a) || this;
		return s.x = t ?? 0, s.y = n ?? 0, s.x2 = r ?? 1, s.y2 = i ?? 0, s.type = "linear", s.global = o || !1, s;
	}
	return t;
}(tf), rf = function(e) {
	l(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this, i) || this;
		return o.x = t ?? .5, o.y = n ?? .5, o.r = r ?? .5, o.type = "radial", o.global = a || !1, o;
	}
	return t;
}(tf), af = Math.min, of = Math.max, sf = Math.abs, cf = [0, 0], lf = [0, 0], uf = bn(), df = uf.minTv, ff = uf.maxTv, pf = function() {
	function e(e, t) {
		this._corners = [], this._axes = [], this._origin = [0, 0];
		for (var n = 0; n < 4; n++) this._corners[n] = new Y();
		for (var n = 0; n < 2; n++) this._axes[n] = new Y();
		e && this.fromBoundingRect(e, t);
	}
	return e.prototype.fromBoundingRect = function(e, t) {
		var n = this._corners, r = this._axes, i = e.x, a = e.y, o = i + e.width, s = a + e.height;
		if (n[0].set(i, a), n[1].set(o, a), n[2].set(o, s), n[3].set(i, s), t) for (var c = 0; c < 4; c++) n[c].transform(t);
		Y.sub(r[0], n[1], n[0]), Y.sub(r[1], n[3], n[0]), r[0].normalize(), r[1].normalize();
		for (var c = 0; c < 2; c++) this._origin[c] = r[c].dot(n[0]);
	}, e.prototype.intersect = function(e, t, n) {
		var r = !0, i = !t;
		return t && Y.set(t, 0, 0), uf.reset(n, !i), !this._intersectCheckOneSide(this, e, i, 1) && (r = !1, i) || !this._intersectCheckOneSide(e, this, i, -1) && (r = !1, i) || !i && !uf.negativeSize && Y.copy(t, r ? uf.useDir ? uf.dirMinTv : df : ff), r;
	}, e.prototype._intersectCheckOneSide = function(e, t, n, r) {
		for (var i = !0, a = 0; a < 2; a++) {
			var o = e._axes[a];
			if (e._getProjMinMaxOnAxis(a, e._corners, cf), e._getProjMinMaxOnAxis(a, t._corners, lf), uf.negativeSize || cf[1] < lf[0] || cf[0] > lf[1]) {
				if (i = !1, uf.negativeSize || n) return i;
				var s = sf(lf[0] - cf[1]), c = sf(cf[0] - lf[1]);
				af(s, c) > ff.len() && (s < c ? Y.scale(ff, o, -s * r) : Y.scale(ff, o, c * r));
			} else if (!n) {
				var s = sf(lf[0] - cf[1]), c = sf(cf[0] - lf[1]);
				(uf.useDir || af(s, c) < df.len()) && ((s < c || !uf.bidirectional) && (Y.scale(df, o, s * r), uf.useDir && uf.calcDirMTV()), (s >= c || !uf.bidirectional) && (Y.scale(df, o, -c * r), uf.useDir && uf.calcDirMTV()));
			}
		}
		return i;
	}, e.prototype._getProjMinMaxOnAxis = function(e, t, n) {
		for (var r = this._axes[e], i = this._origin, a = t[0].dot(r) + i[e], o = a, s = a, c = 1; c < t.length; c++) {
			var l = t[c].dot(r) + i[e];
			o = af(l, o), s = of(l, s);
		}
		n[0] = o + uf.touchThreshold, n[1] = s - uf.touchThreshold, uf.negativeSize = n[1] < n[0];
	}, e;
}(), mf = [], hf = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.notClear = !0, t.incremental = 1, t._displayables = [], t._temporaryDisplayables = [], t._cursor = 0, t;
	}
	return t.prototype.traverse = function(e, t) {
		e.call(t, this);
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
	}, t.prototype.addDisplayable = function(e, t) {
		t ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
	}, t.prototype.addDisplayables = function(e, t) {
		t ||= !1;
		for (var n = 0; n < e.length; n++) this.addDisplayable(e[n], t);
	}, t.prototype.getDisplayables = function() {
		return this._displayables;
	}, t.prototype.getTemporalDisplayables = function() {
		return this._temporaryDisplayables;
	}, t.prototype.eachPendingDisplayable = function(e) {
		for (var t = this._cursor; t < this._displayables.length; t++) e && e(this._displayables[t]);
		for (var t = 0; t < this._temporaryDisplayables.length; t++) e && e(this._temporaryDisplayables[t]);
	}, t.prototype.update = function() {
		this.updateTransform();
		for (var e = this._cursor; e < this._displayables.length; e++) {
			var t = this._displayables[e];
			t.parent = this, t.update(), t.parent = null;
		}
		for (var e = 0; e < this._temporaryDisplayables.length; e++) {
			var t = this._temporaryDisplayables[e];
			t.parent = this, t.update(), t.parent = null;
		}
	}, t.prototype.getBoundingRect = function() {
		if (!this._rect) {
			for (var e = new X(Infinity, Infinity, -Infinity, -Infinity), t = 0; t < this._displayables.length; t++) {
				var n = this._displayables[t], r = n.getBoundingRect().clone();
				n.needLocalTransform() && r.applyTransform(n.getLocalTransform(mf)), e.union(r);
			}
			this._rect = e;
		}
		return this._rect;
	}, t.prototype.contain = function(e, t) {
		var n = this.transformCoordToLocal(e, t);
		if (this.getBoundingRect().contain(n[0], n[1])) {
			for (var r = 0; r < this._displayables.length; r++) if (this._displayables[r].contain(e, t)) return !0;
		}
		return !1;
	}, t;
}(Ba), gf = Yc();
function _f(e, t, n, r, i) {
	var a;
	if (t && t.ecModel) {
		var o = t.ecModel.getUpdatePayload();
		a = o && o.animation;
	}
	var s = t && t.isAnimationEnabled(), c = e === "update";
	if (s) {
		var l = void 0, u = void 0, d = void 0;
		return r ? (l = G(r.duration, 200), u = G(r.easing, "cubicOut"), d = 0) : (l = t.getShallow(c ? "animationDurationUpdate" : "animationDuration"), u = t.getShallow(c ? "animationEasingUpdate" : "animationEasing"), d = t.getShallow(c ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (u = a.easing), a.delay != null && (d = a.delay)), H(d) && (d = d(n, i)), H(l) && (l = l(n)), {
			duration: l || 0,
			delay: d,
			easing: u
		};
	}
	return null;
}
function vf(e, t, n, r, i, a, o) {
	var s = !1, c;
	H(i) ? (o = a, a = i, i = null) : W(i) && (a = i.cb, o = i.during, s = i.isFrom, c = i.removeOpt, i = i.dataIndex);
	var l = e === "leave";
	l || t.stopAnimation("leave");
	var u = _f(e, r, i, l ? c || {} : null, r && r.getAnimationDelayParams ? r.getAnimationDelayParams(t, i) : null);
	if (u && u.duration > 0) {
		var d = u.duration, f = u.delay, p = u.easing, m = {
			duration: d,
			delay: f || 0,
			easing: p,
			done: a,
			force: !!a || !!o,
			setToFinal: !l,
			scope: e,
			during: o
		};
		s ? t.animateFrom(n, m) : t.animateTo(n, m);
	} else t.stopAnimation(), !s && t.attr(n), o && o(1), a && a();
}
function yf(e, t, n, r, i, a) {
	vf("update", e, t, n, r, i, a);
}
function bf(e, t, n, r, i, a) {
	vf("enter", e, t, n, r, i, a);
}
function xf(e) {
	if (!e.__zr) return !0;
	for (var t = 0; t < e.animators.length; t++) if (e.animators[t].scope === "leave") return !0;
	return !1;
}
function Sf(e, t, n, r, i, a) {
	xf(e) || vf("leave", e, t, n, r, i, a);
}
function Cf(e, t, n, r) {
	e.removeTextContent(), e.removeTextGuideLine(), Sf(e, { style: { opacity: 0 } }, t, n, r);
}
function wf(e, t, n) {
	function r() {
		e.parent && e.parent.remove(e);
	}
	e.isGroup ? e.traverse(function(e) {
		e.isGroup || Cf(e, t, n, r);
	}) : Cf(e, t, n, r);
}
function Tf(e) {
	gf(e).oldStyle = e.style;
}
//#endregion
//#region node_modules/echarts/lib/util/graphic.js
var Ef = /* @__PURE__ */ s({
	Arc: () => $d,
	BezierCurve: () => Zd,
	BoundingRect: () => X,
	Circle: () => _d,
	CompoundPath: () => ef,
	Ellipse: () => yd,
	Group: () => hd,
	HOVER_LAYER_FOR_INCREMENTAL: () => 2,
	HOVER_LAYER_FROM_THRESHOLD: () => 1,
	HOVER_LAYER_NO: () => 0,
	Image: () => es,
	IncrementalDisplayable: () => hf,
	Line: () => qd,
	LinearGradient: () => nf,
	OrientedBoundingRect: () => pf,
	Path: () => Jo,
	Point: () => Y,
	Polygon: () => Hd,
	Polyline: () => Wd,
	RadialGradient: () => rf,
	Rect: () => cs,
	Ring: () => Rd,
	Sector: () => Id,
	Text: () => ps,
	WH: () => kf,
	XY: () => Of,
	applyTransform: () => Wf,
	calcZ2Range: () => pp,
	clipPointsByRect: () => Yf,
	clipRectByRect: () => Xf,
	createIcon: () => Zf,
	decomposeTransform: () => _p,
	ensureCopyRect: () => up,
	ensureCopyTransform: () => dp,
	expandOrShrinkRect: () => np,
	extendPath: () => Mf,
	extendShape: () => Af,
	getCurrentCanvasPainter: () => yp,
	getShapeClass: () => Pf,
	getTransform: () => Uf,
	groupTransition: () => Jf,
	initProps: () => bf,
	isBoundingRectAxisAligned: () => cp,
	isElementRemoved: () => xf,
	lineLineIntersect: () => $f,
	linePolygonIntersect: () => Qf,
	makeImage: () => If,
	makePath: () => Ff,
	mergePath: () => Rf,
	payloadDisableAnimation: () => gp,
	registerShape: () => Nf,
	removeElement: () => Sf,
	removeElementWithFadeOut: () => wf,
	resizePath: () => zf,
	retrieveZInfo: () => fp,
	setTooltipConfig: () => ap,
	subPixelOptimize: () => Hf,
	subPixelOptimizeLine: () => Bf,
	subPixelOptimizeRect: () => Vf,
	transformDirection: () => Gf,
	traverseElements: () => sp,
	traverseUpdateZ: () => mp,
	updateProps: () => yf
}), Df = {}, Of = ["x", "y"], kf = ["width", "height"];
function Af(e) {
	return Jo.extend(e);
}
var jf = pd;
function Mf(e, t) {
	return jf(e, t);
}
function Nf(e, t) {
	Df[e] = t;
}
function Pf(e) {
	if (Df.hasOwnProperty(e)) return Df[e];
}
function Ff(e, t, n, r) {
	var i = fd(e, t);
	return n && (r === "center" && (n = Lf(n, i.getBoundingRect())), zf(i, n)), i;
}
function If(e, t, n) {
	var r = new es({
		style: {
			image: e,
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height
		},
		onload: function(e) {
			if (n === "center") {
				var i = {
					width: e.width,
					height: e.height
				};
				r.setStyle(Lf(t, i));
			}
		}
	});
	return r;
}
function Lf(e, t) {
	var n = t.width / t.height, r = e.height * n, i;
	r <= e.width ? i = e.height : (r = e.width, i = r / n);
	var a = e.x + e.width / 2, o = e.y + e.height / 2;
	return {
		x: a - r / 2,
		y: o - i / 2,
		width: r,
		height: i
	};
}
var Rf = md;
function zf(e, t) {
	if (e.applyTransform) {
		var n = e.getBoundingRect().calculateTransform(t);
		e.applyTransform(n);
	}
}
function Bf(e, t) {
	return rs(e, e, { lineWidth: t }), e;
}
function Vf(e, t) {
	return is(e, e, t), e;
}
var Hf = as;
function Uf(e, t) {
	for (var n = gt([]); e && e !== t;) vt(n, e.getLocalTransform(), n), e = e.parent;
	return n;
}
function Wf(e, t, n) {
	return t && !ce(t) && (t = dr.getLocalTransform(t)), n && (t = St([], t)), qt([], e, t);
}
function Gf(e, t, n) {
	var r = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Ms(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Ms(2 * t[4] / t[2]), a = [e === "left" ? -r : e === "right" ? r : 0, e === "top" ? -i : e === "bottom" ? i : 0];
	return a = Wf(a, t, n), Ms(a[0]) > Ms(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Kf(e) {
	return !e.isGroup;
}
function qf(e) {
	return e.shape != null;
}
function Jf(e, t, n) {
	if (!e || !t) return;
	function r(e) {
		var t = {};
		return e.traverse(function(e) {
			Kf(e) && e.anid && (t[e.anid] = e);
		}), t;
	}
	function i(e) {
		var t = {
			x: e.x,
			y: e.y,
			rotation: e.rotation
		};
		return qf(e) && (t.shape = j(e.shape)), t;
	}
	var a = r(e);
	t.traverse(function(e) {
		if (Kf(e) && e.anid) {
			var t = a[e.anid];
			if (t) {
				var r = i(e);
				e.attr(i(t)), yf(e, r, n, Z(e).dataIndex);
			}
		}
	});
}
function Yf(e, t) {
	return L(e, function(e) {
		var n = e[0];
		n = js(n, t.x), n = As(n, t.x + t.width);
		var r = e[1];
		return r = js(r, t.y), r = As(r, t.y + t.height), [n, r];
	});
}
function Xf(e, t) {
	var n = js(e.x, t.x), r = As(e.x + e.width, t.x + t.width), i = js(e.y, t.y), a = As(e.y + e.height, t.y + t.height);
	if (r >= n && a >= i) return {
		x: n,
		y: i,
		width: r - n,
		height: a - i
	};
}
function Zf(e, t, n) {
	var r = N({ rectHover: !0 }, t), i = r.style = { strokeNoScale: !0 };
	if (n ||= {
		x: -1,
		y: -1,
		width: 2,
		height: 2
	}, e) return e.indexOf("image://") === 0 ? (i.image = e.slice(8), P(i, n), new es(r)) : Ff(e.replace("path://", ""), r, n, "center");
}
function Qf(e, t, n, r, i) {
	for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
		var s = i[a];
		if ($f(e, t, n, r, s[0], s[1], o[0], o[1])) return !0;
		o = s;
	}
}
function $f(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = ep(u, d, c, l);
	if (tp(f)) return !1;
	var p = e - i, m = t - a, h = ep(p, m, c, l) / f;
	if (h < 0 || h > 1) return !1;
	var g = ep(p, m, u, d) / f;
	return !(g < 0 || g > 1);
}
function ep(e, t, n, r) {
	return e * r - n * t;
}
function tp(e) {
	return e <= 1e-6 && e >= -1e-6;
}
function np(e, t, n, r, i) {
	return t == null ? e : (me(t) ? rp[0] = rp[1] = rp[2] = rp[3] = t : (rp[0] = t[0], rp[1] = t[1], rp[2] = t[2], rp[3] = t[3]), r && (rp[0] = js(0, rp[0]), rp[1] = js(0, rp[1]), rp[2] = js(0, rp[2]), rp[3] = js(0, rp[3])), n && (rp[0] = -rp[0], rp[1] = -rp[1], rp[2] = -rp[2], rp[3] = -rp[3]), ip(e, rp, "x", "width", 3, 1, i && i[0] || 0), ip(e, rp, "y", "height", 0, 2, i && i[1] || 0), e);
}
var rp = [
	0,
	0,
	0,
	0
];
function ip(e, t, n, r, i, a, o) {
	var s = t[a] + t[i], c = e[r];
	e[r] += s, o = js(0, As(o, c)), e[r] < o ? (e[r] = o, e[n] += t[i] >= 0 ? -t[i] : t[a] >= 0 ? c + t[a] : Ms(s) > 1e-8 ? (c - o) * t[i] / s : 0) : e[n] -= t[i];
}
function ap(e) {
	var t = e.itemTooltipOption, n = e.componentModel, r = e.itemName, i = U(t) ? { formatter: t } : t, a = n.mainType, o = n.componentIndex, s = {
		componentType: a,
		name: r,
		$vars: ["name"]
	};
	s[a + "Index"] = o;
	var c = e.formatterParamsExtra;
	c && I(z(c), function(e) {
		q(s, e) || (s[e] = c[e], s.$vars.push(e));
	});
	var l = Z(e.el);
	l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
		name: r,
		option: P({
			content: r,
			encodeHTMLContent: !0,
			formatterParams: s
		}, i)
	};
}
function op(e, t) {
	var n;
	e.isGroup && (n = t(e)), n || e.traverse(t);
}
function sp(e, t) {
	if (e) {
		if (V(e)) for (var n = 0; n < e.length; n++) op(e[n], t);
		else op(e, t);
	}
}
function cp(e) {
	return !e || Ms(e[1]) < lp && Ms(e[2]) < lp || Ms(e[0]) < lp && Ms(e[3]) < lp;
}
var lp = 1e-5;
function up(e, t) {
	return e ? X.copy(e, t) : t.clone();
}
function dp(e, t) {
	return t ? _t(e || ht(), t) : void 0;
}
function fp(e) {
	return {
		z: e.get("z") || 0,
		zlevel: e.get("zlevel") || 0
	};
}
function pp(e) {
	var t = -Infinity, n = Infinity;
	op(e, function(e) {
		r(e), r(e.getTextContent()), r(e.getTextGuideLine());
	});
	function r(e) {
		if (e && !e.isGroup) {
			var t = e.currentStates;
			if (t.length) for (var n = 0; n < t.length; n++) i(e.states[t[n]]);
			i(e);
		}
	}
	function i(e) {
		if (e) {
			var r = e.z2;
			r > t && (t = r), r < n && (n = r);
		}
	}
	return n > t && (n = t = 0), {
		min: n,
		max: t
	};
}
function mp(e, t, n) {
	hp(e, t, n, -Infinity);
}
function hp(e, t, n, r) {
	if (e.ignoreModelZ) return r;
	var i = e.getTextContent(), a = e.getTextGuideLine();
	if (e.isGroup) for (var o = e.childrenRef(), s = 0; s < o.length; s++) r = js(hp(o[s], t, n, r), r);
	else e.z = t, e.zlevel = n, r = js(e.z2 || 0, r);
	if (i && (i.z = t, i.zlevel = n, isFinite(r) && (i.z2 = r + 2)), a) {
		var c = e.textGuideLineConfig;
		a.z = t, a.zlevel = n, isFinite(r) && (a.z2 = r + (c && c.showAbove ? 1 : -1));
	}
	return r;
}
function gp(e) {
	return e.animation = { duration: 0 }, e;
}
function _p(e, t) {
	return t ? _t(vp.transform, t) : gt(vp.transform), vp.decomposeTransform(), hr(e, vp), e;
}
var vp = new dr();
vp.transform = ht();
function yp(e) {
	var t = e.getZr().painter;
	return t.getType() === "canvas" ? t : null;
}
Nf("circle", _d), Nf("ellipse", yd), Nf("sector", Id), Nf("ring", Rd), Nf("polygon", Hd), Nf("polyline", Wd), Nf("rect", cs), Nf("line", qd), Nf("bezierCurve", Zd), Nf("arc", $d);
//#endregion
//#region node_modules/echarts/lib/label/labelStyle.js
var bp = {};
function xp(e, t) {
	for (var n = 0; n < Ul.length; n++) {
		var r = Ul[n], i = t[r], a = e.ensureState(r);
		a.style = a.style || {}, a.style.text = i;
	}
	var o = e.currentStates.slice();
	e.clearStates(!0), e.setStyle({ text: t.normal }), e.useStates(o, !0);
}
function Sp(e, t, n) {
	var r = e.labelFetcher, i = e.labelDataIndex, a = e.labelDimIndex, o = t.normal, s;
	r && (s = r.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), n == null ? null : { interpolatedValue: n })), s ??= H(e.defaultText) ? e.defaultText(i, e, n) : e.defaultText;
	for (var c = { normal: s }, l = 0; l < Ul.length; l++) {
		var u = Ul[l], d = t[u];
		c[u] = G(r ? r.getFormattedLabel(i, u, null, a, d && d.get("formatter")) : null, s);
	}
	return c;
}
function Cp(e, t, n, r) {
	n ||= bp;
	for (var i = e instanceof ps, a = !1, o = 0; o < Wl.length; o++) {
		var s = t[Wl[o]];
		if (s && s.getShallow("show")) {
			a = !0;
			break;
		}
	}
	var c = i ? e : e.getTextContent();
	if (a) {
		i || (c || (c = new ps(), e.setTextContent(c)), e.stateProxy && (c.stateProxy = e.stateProxy));
		var l = Sp(n, t), u = t.normal, d = !!u.getShallow("show"), f = Tp(u, r && r.normal, n, !1, !i);
		f.text = l.normal, i || e.setTextConfig(Ep(u, n, !1));
		for (var o = 0; o < Ul.length; o++) {
			var p = Ul[o], s = t[p];
			if (s) {
				var m = c.ensureState(p), h = !!G(s.getShallow("show"), d);
				if (h !== d && (m.ignore = !h), m.style = Tp(s, r && r[p], n, !0, !i), m.style.text = l[p], !i) {
					var g = e.ensureState(p);
					g.textConfig = Ep(s, n, !0);
				}
			}
		}
		c.silent = !!u.getShallow("silent"), c.style.x != null && (f.x = c.style.x), c.style.y != null && (f.y = c.style.y), c.ignore = !d, c.useStyle(f), c.dirty(), n.enableTextSetter && (Pp(c).setLabelText = function(e) {
			var r = Sp(n, t, e);
			xp(c, r);
		});
	} else c && (c.ignore = !0);
	e.dirty();
}
function wp(e, t) {
	t ||= "label";
	for (var n = { normal: e.getModel(t) }, r = 0; r < Ul.length; r++) {
		var i = Ul[r];
		n[i] = e.getModel([i, t]);
	}
	return n;
}
function Tp(e, t, n, r, i) {
	var a = {};
	return Dp(a, e, n, r, i), t && N(a, t), a;
}
function Ep(e, t, n) {
	t ||= {};
	var r = {}, i, a = e.getShallow("rotate"), o = G(e.getShallow("distance"), n ? null : 5), s = e.getShallow("offset");
	return i = e.getShallow("position") || (n ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (r.position = i), s != null && (r.offset = s), a != null && (a *= Math.PI / 180, r.rotation = a), o != null && (r.distance = o), r.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", t.autoOverflowArea != null && (r.autoOverflowArea = t.autoOverflowArea), t.layoutRect != null && (r.layoutRect = t.layoutRect), r;
}
function Dp(e, t, n, r, i) {
	n ||= bp;
	var a = t.ecModel, o = a && a.option.textStyle, s = Op(t), c;
	if (s) {
		c = {};
		var l = "richInheritPlainLabel", u = G(t.get(l), a ? a.get(l) : void 0);
		for (var d in s) if (s.hasOwnProperty(d)) {
			var f = t.getModel(["rich", d]);
			Mp(c[d] = {}, f, o, t, u, n, r, i, !1, !0);
		}
	}
	c && (e.rich = c);
	var p = t.get("overflow");
	p && (e.overflow = p);
	var m = t.get("lineOverflow");
	m && (e.lineOverflow = m);
	var h = e, g = t.get("minMargin");
	if (g != null) g = me(g) ? g / 2 : 0, h.margin = [
		g,
		g,
		g,
		g
	], h.__marginType = Lp.minMargin;
	else {
		var _ = t.get("textMargin");
		_ != null && (h.margin = Te(_), h.__marginType = Lp.textMargin);
	}
	Mp(e, t, o, null, null, n, r, i, !0, !1);
}
function Op(e) {
	for (var t; e && e !== e.ecModel;) {
		var n = (e.option || bp).rich;
		if (n) {
			t ||= {};
			for (var r = z(n), i = 0; i < r.length; i++) {
				var a = r[i];
				t[a] = 1;
			}
		}
		e = e.parentModel;
	}
	return t;
}
var kp = [
	"fontStyle",
	"fontWeight",
	"fontSize",
	"fontFamily",
	"textShadowColor",
	"textShadowBlur",
	"textShadowOffsetX",
	"textShadowOffsetY"
], Ap = [
	"align",
	"lineHeight",
	"width",
	"height",
	"tag",
	"verticalAlign",
	"ellipsis"
], jp = [
	"padding",
	"borderWidth",
	"borderRadius",
	"borderDashOffset",
	"backgroundColor",
	"borderColor",
	"shadowColor",
	"shadowBlur",
	"shadowOffsetX",
	"shadowOffsetY"
];
function Mp(e, t, n, r, i, a, o, s, c, l) {
	n = !o && n || bp;
	var u = a && a.inheritColor, d = t.getShallow("color"), f = t.getShallow("textBorderColor"), p = G(t.getShallow("opacity"), n.opacity);
	(d === "inherit" || d === "auto") && (d = u || null), (f === "inherit" || f === "auto") && (f = u || null), s || (d ||= n.color, f ||= n.textBorderColor), d != null && (e.fill = d), f != null && (e.stroke = f);
	var m = G(t.getShallow("textBorderWidth"), n.textBorderWidth);
	m != null && (e.lineWidth = m);
	var h = G(t.getShallow("textBorderType"), n.textBorderType);
	h != null && (e.lineDash = h);
	var g = G(t.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
	g != null && (e.lineDashOffset = g), !o && p == null && !l && (p = a && a.defaultOpacity), p != null && (e.opacity = p), !o && !s && e.fill == null && a.inheritColor && (e.fill = a.inheritColor);
	for (var _ = 0; _ < kp.length; _++) {
		var v = kp[_], y = i !== !1 && r ? Ce(t.getShallow(v), r.getShallow(v), n[v]) : G(t.getShallow(v), n[v]);
		y != null && (e[v] = y);
	}
	for (var _ = 0; _ < Ap.length; _++) {
		var v = Ap[_], y = t.getShallow(v);
		y != null && (e[v] = y);
	}
	if (e.verticalAlign == null) {
		var b = t.getShallow("baseline");
		b != null && (e.verticalAlign = b);
	}
	if (!c || !a.disableBox) {
		for (var _ = 0; _ < jp.length; _++) {
			var v = jp[_], y = t.getShallow(v);
			y != null && (e[v] = y);
		}
		var x = t.getShallow("borderType");
		x != null && (e.borderDash = x), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && u && (e.backgroundColor = u), (e.borderColor === "auto" || e.borderColor === "inherit") && u && (e.borderColor = u);
	}
}
function Np(e, t) {
	var n = t && t.getModel("textStyle");
	return De([
		e.fontStyle || n && n.getShallow("fontStyle") || "",
		e.fontWeight || n && n.getShallow("fontWeight") || "",
		(e.fontSize || n && n.getShallow("fontSize") || 12) + "px",
		e.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"
	].join(" "));
}
var Pp = Yc();
function Fp(e, t, n, r) {
	if (e) {
		var i = Pp(e);
		i.prevValue = i.value, i.value = n;
		var a = t.normal;
		i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = r, i.statesModels = t);
	}
}
function Ip(e, t, n, r, i) {
	var a = Pp(e);
	if (!a.valueAnimation || a.prevValue === a.value) return;
	var o = a.defaultInterpolatedText, s = G(a.interpolatedValue, a.prevValue), c = a.value;
	function l(r) {
		var l = ol(n, a.precision, s, c, r);
		a.interpolatedValue = r === 1 ? null : l, xp(e, Sp({
			labelDataIndex: t,
			labelFetcher: i,
			defaultText: o ? o(l) : l + ""
		}, a.statesModels, l));
	}
	e.percent = 0, (a.prevValue == null ? bf : yf)(e, { percent: 1 }, r, t, null, l);
}
var Lp = {
	minMargin: 1,
	textMargin: 2
}, Rp = ["textStyle", "color"], zp = [
	"fontStyle",
	"fontWeight",
	"fontSize",
	"fontFamily",
	"padding",
	"lineHeight",
	"rich",
	"width",
	"height",
	"overflow"
], Bp = new ps(), Vp = function() {
	function e() {}
	return e.prototype.getTextColor = function(e) {
		var t = this.ecModel;
		return this.getShallow("color") || (!e && t ? t.get(Rp) : null);
	}, e.prototype.getFont = function() {
		return Np({
			fontStyle: this.getShallow("fontStyle"),
			fontWeight: this.getShallow("fontWeight"),
			fontSize: this.getShallow("fontSize"),
			fontFamily: this.getShallow("fontFamily")
		}, this.ecModel);
	}, e.prototype.getTextRect = function(e) {
		for (var t = {
			text: e,
			verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
		}, n = 0; n < zp.length; n++) t[zp[n]] = this.getShallow(zp[n]);
		return Bp.useStyle(t), Bp.update(), Bp.getBoundingRect();
	}, e;
}(), Hp = [
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
], Up = rt(Hp), Wp = function() {
	function e() {}
	return e.prototype.getLineStyle = function(e) {
		return Up(this, e);
	}, e;
}(), Gp = [
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
], Kp = rt(Gp), qp = function() {
	function e() {}
	return e.prototype.getItemStyle = function(e, t) {
		return Kp(this, e, t);
	}, e;
}(), Jp = function() {
	function e(e, t, n) {
		this.parentModel = t, this.ecModel = n, this.option = e;
	}
	return e.prototype.init = function(e, t, n) {}, e.prototype.mergeOption = function(e, t) {
		M(this.option, e, !0);
	}, e.prototype.get = function(e, t) {
		return e == null ? this.option : this._doGet(this.parsePath(e), !t && this.parentModel);
	}, e.prototype.getShallow = function(e, t) {
		var n = this.option, r = n == null ? n : n[e];
		if (r == null && !t) {
			var i = this.parentModel;
			i && (r = i.getShallow(e));
		}
		return r;
	}, e.prototype.getModel = function(t, n) {
		var r = t != null, i = r ? this.parsePath(t) : null, a = r ? this._doGet(i) : this.option;
		return n ||= this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new e(a, n, this.ecModel);
	}, e.prototype.isEmpty = function() {
		return this.option == null;
	}, e.prototype.restoreData = function() {}, e.prototype.clone = function() {
		var e = this.constructor;
		return new e(j(this.option));
	}, e.prototype.parsePath = function(e) {
		return typeof e == "string" ? e.split(".") : e;
	}, e.prototype.resolveParentPath = function(e) {
		return e;
	}, e.prototype.isAnimationEnabled = function() {
		if (!J.node && this.option) {
			if (this.option.animation != null) return !!this.option.animation;
			if (this.parentModel) return this.parentModel.isAnimationEnabled();
		}
	}, e.prototype._doGet = function(e, t) {
		var n = this.option;
		if (!e) return n;
		for (var r = 0; r < e.length && !(e[r] && (n = n && typeof n == "object" ? n[e[r]] : null, n == null)); r++);
		return n == null && t && (n = t._doGet(this.resolveParentPath(e), t.parentModel)), n;
	}, e;
}();
Ye(Jp), $e(Jp), se(Jp, Wp), se(Jp, qp), se(Jp, at), se(Jp, Vp);
//#endregion
//#region node_modules/echarts/lib/data/DataDiffer.js
function Yp(e) {
	return e == null ? 0 : e.length || 1;
}
function Xp(e) {
	return e;
}
var Zp = function() {
	function e(e, t, n, r, i, a) {
		this._old = e, this._new = t, this._oldKeyGetter = n || Xp, this._newKeyGetter = r || Xp, this.context = i, this._diffModeMultiple = a === "multiple";
	}
	return e.prototype.add = function(e) {
		return this._add = e, this;
	}, e.prototype.update = function(e) {
		return this._update = e, this;
	}, e.prototype.updateManyToOne = function(e) {
		return this._updateManyToOne = e, this;
	}, e.prototype.updateOneToMany = function(e) {
		return this._updateOneToMany = e, this;
	}, e.prototype.updateManyToMany = function(e) {
		return this._updateManyToMany = e, this;
	}, e.prototype.remove = function(e) {
		return this._remove = e, this;
	}, e.prototype.execute = function() {
		this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
	}, e.prototype._executeOneToOne = function() {
		var e = this._old, t = this._new, n = {}, r = Array(e.length), i = Array(t.length);
		this._initIndexMap(e, null, r, "_oldKeyGetter"), this._initIndexMap(t, n, i, "_newKeyGetter");
		for (var a = 0; a < e.length; a++) {
			var o = r[a], s = n[o], c = Yp(s);
			if (c > 1) {
				var l = s.shift();
				s.length === 1 && (n[o] = s[0]), this._update && this._update(l, a);
			} else c === 1 ? (n[o] = null, this._update && this._update(s, a)) : this._remove && this._remove(a);
		}
		this._performRestAdd(i, n);
	}, e.prototype._executeMultiple = function() {
		var e = this._old, t = this._new, n = {}, r = {}, i = [], a = [];
		this._initIndexMap(e, n, i, "_oldKeyGetter"), this._initIndexMap(t, r, a, "_newKeyGetter");
		for (var o = 0; o < i.length; o++) {
			var s = i[o], c = n[s], l = r[s], u = Yp(c), d = Yp(l);
			if (u > 1 && d === 1) this._updateManyToOne && this._updateManyToOne(l, c), r[s] = null;
			else if (u === 1 && d > 1) this._updateOneToMany && this._updateOneToMany(l, c), r[s] = null;
			else if (u === 1 && d === 1) this._update && this._update(l, c), r[s] = null;
			else if (u > 1 && d > 1) this._updateManyToMany && this._updateManyToMany(l, c), r[s] = null;
			else if (u > 1) for (var f = 0; f < u; f++) this._remove && this._remove(c[f]);
			else this._remove && this._remove(c);
		}
		this._performRestAdd(a, r);
	}, e.prototype._performRestAdd = function(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = t[r], a = Yp(i);
			if (a > 1) for (var o = 0; o < a; o++) this._add && this._add(i[o]);
			else a === 1 && this._add && this._add(i);
			t[r] = null;
		}
	}, e.prototype._initIndexMap = function(e, t, n, r) {
		for (var i = this._diffModeMultiple, a = 0; a < e.length; a++) {
			var o = "_ec_" + this[r](e[a], a);
			if (i || (n[a] = o), t) {
				var s = t[o], c = Yp(s);
				c === 0 ? (t[o] = a, i && n.push(o)) : c === 1 ? t[o] = [s, a] : s.push(a);
			}
		}
	}, e;
}(), Qp = {
	Must: 1,
	Might: 2,
	Not: 3
}, $p = Yc();
function em(e) {
	$p(e).datasetMap = K();
}
function tm(e, t, n) {
	var r = {}, i = rm(t);
	if (!i || !e) return r;
	var a = [], o = [], s = t.ecModel, c = $p(s).datasetMap, l = i.uid + "_" + n.seriesLayoutBy, u, d;
	e = e.slice(), I(e, function(t, n) {
		var i = W(t) ? t : e[n] = { name: t };
		i.type === "ordinal" && u == null && (u = n, d = m(i)), r[i.name] = [];
	});
	var f = c.get(l) || c.set(l, {
		categoryWayDim: d,
		valueWayDim: 0
	});
	I(e, function(e, t) {
		var n = e.name, i = m(e);
		if (u == null) {
			var s = f.valueWayDim;
			p(r[n], s, i), p(o, s, i), f.valueWayDim += i;
		} else if (u === t) p(r[n], 0, i), p(a, 0, i);
		else {
			var s = f.categoryWayDim;
			p(r[n], s, i), p(o, s, i), f.categoryWayDim += i;
		}
	});
	function p(e, t, n) {
		for (var r = 0; r < n; r++) e.push(t + r);
	}
	function m(e) {
		var t = e.dimsDef;
		return t ? t.length : 1;
	}
	return a.length && (r.itemName = a), o.length && (r.seriesName = o), r;
}
function nm(e, t, n) {
	var r = {};
	if (!rm(e)) return r;
	var i = t.sourceFormat, a = t.dimensionsDefine, o;
	(i === "objectRows" || i === "keyedColumns") && I(a, function(e, t) {
		(W(e) ? e.name : e) === "name" && (o = t);
	});
	var s = function() {
		for (var e = {}, r = {}, s = [], c = 0, l = Math.min(5, n); c < l; c++) {
			var u = om(t.data, i, t.seriesLayoutBy, a, t.startIndex, c);
			s.push(u);
			var d = u === Qp.Not;
			if (d && e.v == null && c !== o && (e.v = c), (e.n == null || e.n === e.v || !d && s[e.n] === Qp.Not) && (e.n = c), f(e) && s[e.n] !== Qp.Not) return e;
			d || (u === Qp.Might && r.v == null && c !== o && (r.v = c), (r.n == null || r.n === r.v) && (r.n = c));
		}
		function f(e) {
			return e.v != null && e.n != null;
		}
		return f(e) ? e : f(r) ? r : null;
	}();
	if (s) {
		r.value = [s.v];
		var c = o ?? s.n;
		r.itemName = [c], r.seriesName = [c];
	}
	return r;
}
function rm(e) {
	if (!e.get("data", !0)) return tl(e.ecModel, "dataset", {
		index: e.get("datasetIndex", !0),
		id: e.get("datasetId", !0)
	}, $c).models[0];
}
function im(e) {
	return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : tl(e.ecModel, "dataset", {
		index: e.get("fromDatasetIndex", !0),
		id: e.get("fromDatasetId", !0)
	}, $c).models;
}
function am(e, t) {
	return om(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t);
}
function om(e, t, n, r, i, a) {
	var o, s = 5;
	if (ge(e)) return Qp.Not;
	var c, l;
	if (r) {
		var u = r[a];
		W(u) ? (c = u.name, l = u.type) : U(u) && (c = u);
	}
	if (l != null) return l === "ordinal" ? Qp.Must : Qp.Not;
	if (t === "arrayRows") {
		var d = e;
		if (n === "row") {
			for (var f = d[a], p = 0; p < (f || []).length && p < s; p++) if ((o = b(f[i + p])) != null) return o;
		} else for (var p = 0; p < d.length && p < s; p++) {
			var m = d[i + p];
			if (m && (o = b(m[a])) != null) return o;
		}
	} else if (t === "objectRows") {
		var h = e;
		if (!c) return Qp.Not;
		for (var p = 0; p < h.length && p < s; p++) {
			var g = h[p];
			if (g && (o = b(g[c])) != null) return o;
		}
	} else if (t === "keyedColumns") {
		var _ = e;
		if (!c) return Qp.Not;
		var f = _[c];
		if (!f || ge(f)) return Qp.Not;
		for (var p = 0; p < f.length && p < s; p++) if ((o = b(f[p])) != null) return o;
	} else if (t === "original") for (var v = e, p = 0; p < v.length && p < s; p++) {
		var g = v[p], y = jc(g);
		if (!V(y)) return Qp.Not;
		if ((o = b(y[a])) != null) return o;
	}
	function b(e) {
		var t = U(e);
		if (e != null && isFinite(Number(e)) && e !== "") return t ? Qp.Might : Qp.Not;
		if (t && e !== "-") return Qp.Must;
	}
	return Qp.Not;
}
//#endregion
//#region node_modules/echarts/lib/data/Source.js
var sm = function() {
	function e(e) {
		this.data = e.data || (e.sourceFormat === "keyedColumns" ? {} : []), this.sourceFormat = e.sourceFormat || "unknown", this.seriesLayoutBy = e.seriesLayoutBy || "column", this.startIndex = e.startIndex || 0, this.dimensionsDetectedCount = e.dimensionsDetectedCount, this.metaRawOption = e.metaRawOption;
		var t = this.dimensionsDefine = e.dimensionsDefine;
		if (t) for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.type == null && am(this, n) === Qp.Must && (r.type = "ordinal");
		}
	}
	return e;
}();
function cm(e) {
	return e instanceof sm;
}
function lm(e, t, n) {
	n ||= fm(e);
	var r = t.seriesLayoutBy, i = pm(e, n, r, t.sourceHeader, t.dimensions);
	return new sm({
		data: e,
		sourceFormat: n,
		seriesLayoutBy: r,
		dimensionsDefine: i.dimensionsDefine,
		startIndex: i.startIndex,
		dimensionsDetectedCount: i.dimensionsDetectedCount,
		metaRawOption: j(t)
	});
}
function um(e) {
	return new sm({
		data: e,
		sourceFormat: ge(e) ? Ml : Ol
	});
}
function dm(e) {
	return new sm({
		data: e.data,
		sourceFormat: e.sourceFormat,
		seriesLayoutBy: e.seriesLayoutBy,
		dimensionsDefine: j(e.dimensionsDefine),
		startIndex: e.startIndex,
		dimensionsDetectedCount: e.dimensionsDetectedCount
	});
}
function fm(e) {
	var t = Nl;
	if (ge(e)) t = Ml;
	else if (V(e)) {
		e.length === 0 && (t = kl);
		for (var n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			if (i != null) {
				if (V(i) || ge(i)) {
					t = kl;
					break;
				}
				if (W(i)) {
					t = Al;
					break;
				}
			}
		}
	} else if (W(e)) {
		for (var a in e) if (q(e, a) && ce(e[a])) {
			t = jl;
			break;
		}
	}
	return t;
}
function pm(e, t, n, r, i) {
	var a, o;
	if (!e) return {
		dimensionsDefine: hm(i),
		startIndex: o,
		dimensionsDetectedCount: a
	};
	if (t === "arrayRows") {
		var s = e;
		r === "auto" || r == null ? gm(function(e) {
			e != null && e !== "-" && (U(e) ? o ??= 1 : o = 0);
		}, n, s, 10) : o = me(r) ? r : +!!r, !i && o === 1 && (i = [], gm(function(e, t) {
			i[t] = e == null ? "" : e + "";
		}, n, s, Infinity)), a = i ? i.length : n === "row" ? s.length : s[0] ? s[0].length : null;
	} else if (t === "objectRows") i ||= mm(e);
	else if (t === "keyedColumns") i || (i = [], I(e, function(e, t) {
		i.push(t);
	}));
	else if (t === "original") {
		var c = jc(e[0]);
		a = V(c) && c.length || 1;
	}
	return {
		startIndex: o,
		dimensionsDefine: hm(i),
		dimensionsDetectedCount: a
	};
}
function mm(e) {
	for (var t = 0, n; t < e.length && !(n = e[t++]););
	if (n) return z(n);
}
function hm(e) {
	if (e) {
		var t = K();
		return L(e, function(e, n) {
			e = W(e) ? e : { name: e };
			var r = {
				name: e.name,
				displayName: e.displayName,
				type: e.type
			};
			if (r.name == null) return r;
			r.name += "", r.displayName ??= r.name;
			var i = t.get(r.name);
			return i ? r.name += "-" + i.count++ : t.set(r.name, { count: 1 }), r;
		});
	}
}
function gm(e, t, n, r) {
	if (t === "row") for (var i = 0; i < n.length && i < r; i++) e(n[i] ? n[i][0] : null, i);
	else for (var a = n[0] || [], i = 0; i < a.length && i < r; i++) e(a[i], i);
}
function _m(e) {
	var t = e.sourceFormat;
	return t === "objectRows" || t === "keyedColumns";
}
//#endregion
//#region node_modules/echarts/lib/data/helper/dataProvider.js
var vm, ym, bm, xm, Sm, Cm, wm = function() {
	function e(e, t) {
		var n = cm(e) ? e : um(e);
		this._source = n;
		var r = this._data = n.data, i = n.sourceFormat;
		n.seriesLayoutBy, i === "typedArray" && (this._offset = 0, this._dimSize = t, this._data = r), Cm(this, r, n);
	}
	return e.prototype.getSource = function() {
		return this._source;
	}, e.prototype.count = function() {
		return 0;
	}, e.prototype.getItem = function(e, t) {}, e.prototype.appendData = function(e) {}, e.prototype.clean = function() {}, e.protoInitialize = function() {
		var t = e.prototype;
		t.pure = !1, t.persistent = !0;
	}(), e.internalField = function() {
		var e;
		Cm = function(e, i, a) {
			var o = a.sourceFormat, s = a.seriesLayoutBy, c = a.startIndex, l = a.dimensionsDefine, u = Sm[Fm(o, s)];
			N(e, u), o === "typedArray" ? (e.getItem = t, e.count = r, e.fillStorage = n) : (e.getItem = B(Om(o, s), null, i, c, l), e.count = B(jm(o, s), null, i, c, l));
		};
		var t = function(e, t) {
			e -= this._offset, t ||= [];
			for (var n = this._data, r = this._dimSize, i = r * e, a = 0; a < r; a++) t[a] = n[i + a];
			return t;
		}, n = function(e, t, n, r) {
			for (var i = this._data, a = this._dimSize, o = 0; o < a; o++) {
				for (var s = r[o], c = s[0] == null ? Infinity : s[0], l = s[1] == null ? -Infinity : s[1], u = t - e, d = n[o], f = 0; f < u; f++) {
					var p = i[f * a + o];
					d[e + f] = p, p < c && (c = p), p > l && (l = p);
				}
				s[0] = c, s[1] = l;
			}
		}, r = function() {
			return this._data ? this._data.length / this._dimSize : 0;
		};
		Sm = (e = {}, e[kl + "_" + Pl] = {
			pure: !0,
			appendData: i
		}, e[kl + "_row"] = {
			pure: !0,
			appendData: function() {
				throw Error("Do not support appendData when set seriesLayoutBy: \"row\".");
			}
		}, e[Al] = {
			pure: !0,
			appendData: i
		}, e[jl] = {
			pure: !0,
			appendData: function(e) {
				var t = this._data;
				I(e, function(e, n) {
					for (var r = t[n] || (t[n] = []), i = 0; i < (e || []).length; i++) r.push(e[i]);
				});
			}
		}, e[Ol] = { appendData: i }, e[Ml] = {
			persistent: !1,
			pure: !0,
			appendData: function(e) {
				this._data = e;
			},
			clean: function() {
				this._offset += this.count(), this._data = null;
			}
		}, e);
		function i(e) {
			for (var t = 0; t < e.length; t++) this._data.push(e[t]);
		}
	}(), e;
}(), Tm = function(e) {
	V(e) || Cc("series.data or dataset.source must be an array.");
};
vm = {}, vm[kl + "_" + Pl] = Tm, vm[kl + "_row"] = Tm, vm[Al] = Tm, vm[jl] = function(e, t) {
	for (var n = 0; n < t.length; n++) t[n].name ?? Cc("dimension name must not be null/undefined.");
}, vm[Ol] = Tm;
var Em = function(e, t, n, r) {
	return e[r];
}, Dm = (ym = {}, ym[kl + "_" + Pl] = function(e, t, n, r) {
	return e[r + t];
}, ym[kl + "_row"] = function(e, t, n, r, i) {
	r += t;
	for (var a = i || [], o = e, s = 0; s < o.length; s++) {
		var c = o[s];
		a[s] = c ? c[r] : null;
	}
	return a;
}, ym[Al] = Em, ym[jl] = function(e, t, n, r, i) {
	for (var a = i || [], o = 0; o < n.length; o++) {
		var s = n[o].name, c = s == null ? null : e[s];
		a[o] = c ? c[r] : null;
	}
	return a;
}, ym[Ol] = Em, ym);
function Om(e, t) {
	return Dm[Fm(e, t)];
}
var km = function(e, t, n) {
	return e.length;
}, Am = (bm = {}, bm[kl + "_" + Pl] = function(e, t, n) {
	return Math.max(0, e.length - t);
}, bm[kl + "_row"] = function(e, t, n) {
	var r = e[0];
	return r ? Math.max(0, r.length - t) : 0;
}, bm[Al] = km, bm[jl] = function(e, t, n) {
	var r = n[0].name, i = r == null ? null : e[r];
	return i ? i.length : 0;
}, bm[Ol] = km, bm);
function jm(e, t) {
	return Am[Fm(e, t)];
}
var Mm = function(e, t, n) {
	return e[t];
}, Nm = (xm = {}, xm[kl] = Mm, xm[Al] = function(e, t, n) {
	return e[n];
}, xm[jl] = Mm, xm[Ol] = function(e, t, n) {
	var r = jc(e);
	return r instanceof Array ? r[t] : r;
}, xm[Ml] = Mm, xm);
function Pm(e) {
	return Nm[e];
}
function Fm(e, t) {
	return e === "arrayRows" ? e + "_" + t : e;
}
function Im(e, t, n) {
	if (e) {
		var r = e.getRawDataItem(t);
		if (r != null) {
			var i = e.getStore(), a = i.getSource().sourceFormat;
			if (n != null) {
				var o = e.getDimensionIndex(n), s = i.getDimensionProperty(o);
				return Pm(a)(r, o, s);
			}
			var c = r;
			return a === "original" && (c = jc(r)), c;
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/data/helper/dimensionHelper.js
var Lm = function() {
	function e(e, t) {
		this._encode = e, this._schema = t;
	}
	return e.prototype.get = function() {
		return {
			fullDimensions: this._getFullDimensionNames(),
			encode: this._encode
		};
	}, e.prototype._getFullDimensionNames = function() {
		return this._cachedDimNames ||= this._schema ? this._schema.makeOutputDimensionNames() : [], this._cachedDimNames;
	}, e;
}();
function Rm(e, t) {
	var n = {}, r = n.encode = {}, i = K(), a = [], o = [], s = {};
	I(e.dimensions, function(t) {
		var n = e.getDimensionInfo(t), c = n.coordDim;
		if (c) {
			var l = n.coordDimIndex;
			zm(r, c)[l] = t, n.isExtraCoord || (i.set(c, 1), Vm(n.type) && (a[0] = t), zm(s, c)[l] = e.getDimensionIndex(n.name)), n.defaultTooltip && o.push(t);
		}
		Dl.each(function(e, t) {
			var i = zm(r, t), a = n.otherDims[t];
			a != null && a !== !1 && (i[a] = n.name);
		});
	});
	var c = [], l = {};
	i.each(function(e, t) {
		var n = r[t];
		l[t] = n[0], c = c.concat(n);
	}), n.dataDimsOnCoord = c, n.dataDimIndicesOnCoord = L(c, function(t) {
		return e.getDimensionInfo(t).storeDimIndex;
	}), n.encodeFirstDimNotExtra = l;
	var u = r.label;
	u && u.length && (a = u.slice());
	var d = r.tooltip;
	return d && d.length ? o = d.slice() : o.length || (o = a.slice()), r.defaultedLabel = a, r.defaultedTooltip = o, n.userOutput = new Lm(s, t), n;
}
function zm(e, t) {
	return e.hasOwnProperty(t) || (e[t] = []), e[t];
}
function Bm(e) {
	return e === "category" ? "ordinal" : e === "time" ? "time" : "float";
}
function Vm(e) {
	return e !== "ordinal" && e !== "time";
}
//#endregion
//#region node_modules/echarts/lib/data/SeriesDimensionDefine.js
var Hm = function() {
	function e(e) {
		this.otherDims = {}, e != null && N(this, e);
	}
	return e;
}();
//#endregion
//#region node_modules/echarts/lib/data/helper/dataValueHelper.js
function Um(e, t) {
	var n = t && t.type;
	return n === "ordinal" ? e : (n === "time" && !me(e) && e != null && e !== "-" && (e = +sc(e)), e == null || e === "" ? NaN : Number(e));
}
K({
	number: function(e) {
		return parseFloat(e);
	},
	time: function(e) {
		return +sc(e);
	},
	trim: function(e) {
		return U(e) ? De(e) : e;
	}
});
var Wm = {
	lt: function(e, t) {
		return e < t;
	},
	lte: function(e, t) {
		return e <= t;
	},
	gt: function(e, t) {
		return e > t;
	},
	gte: function(e, t) {
		return e >= t;
	}
};
(function() {
	function e(e, t) {
		me(t) || wc(""), this._opFn = Wm[e], this._rvalFloat = pc(t);
	}
	return e.prototype.evaluate = function(e) {
		return me(e) ? this._opFn(e, this._rvalFloat) : this._opFn(pc(e), this._rvalFloat);
	}, e;
})();
var Gm = function() {
	function e(e, t) {
		var n = e === "desc";
		this._resultLT = n ? 1 : -1, t ??= n ? "min" : "max", this._incomparable = t === "min" ? -Infinity : Infinity;
	}
	return e.prototype.evaluate = function(e, t) {
		var n = me(e) ? e : pc(e), r = me(t) ? t : pc(t), i = isNaN(n), a = isNaN(r);
		if (i && (n = this._incomparable), a && (r = this._incomparable), i && a) {
			var o = U(e), s = U(t);
			o && (n = s ? e : 0), s && (r = o ? t : 0);
		}
		return n < r ? this._resultLT : n > r ? -this._resultLT : 0;
	}, e;
}();
(function() {
	function e(e, t) {
		this._rval = t, this._isEQ = e, this._rvalTypeof = typeof t, this._rvalFloat = pc(t);
	}
	return e.prototype.evaluate = function(e) {
		var t = e === this._rval;
		if (!t) {
			var n = typeof e;
			n !== this._rvalTypeof && (n === "number" || this._rvalTypeof === "number") && (t = pc(e) === this._rvalFloat);
		}
		return this._isEQ ? t : !t;
	}, e;
})();
function Km(e) {
	var t = "", n = -Infinity, r = -Infinity, i = Infinity, a = Infinity;
	return e && (e.g != null && (t += "G" + e.g, n = e.g), e.ge != null && (t += "GE" + e.ge, r = e.ge), e.l != null && (t += "L" + e.l, i = e.l), e.le != null && (t += "LE" + e.le, a = e.le)), {
		key: t,
		g: n,
		ge: r,
		l: i,
		le: a
	};
}
function qm(e, t) {
	return t > e.g && t >= e.ge && t < e.l && t <= e.le;
}
//#endregion
//#region node_modules/echarts/lib/data/DataStore.js
var Jm = typeof Uint32Array > "u" ? Array : Uint32Array, Ym = typeof Uint16Array > "u" ? Array : Uint16Array, Xm = typeof Int32Array > "u" ? Array : Int32Array, Zm = typeof Float64Array > "u" ? Array : Float64Array, Qm = {
	float: Zm,
	int: Xm,
	ordinal: Array,
	number: Array,
	time: Zm
}, $m;
function eh(e) {
	return e > 65535 ? Jm : Ym;
}
function th(e) {
	var t = e.constructor;
	return t === Array ? e.slice() : new t(e);
}
function nh(e, t, n, r, i) {
	var a = Qm[n || "float"];
	if (i) {
		var o = e[t], s = o && o.length;
		if (s !== r) {
			for (var c = new a(r), l = 0; l < s; l++) c[l] = o[l];
			e[t] = c;
		}
	} else e[t] = new a(r);
}
var rh = function() {
	function e() {
		this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = K();
	}
	return e.prototype.initData = function(e, t, n) {
		this._provider = e, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
		var r = e.getSource(), i = this.defaultDimValueGetter = $m[r.sourceFormat];
		this._dimValueGetter = n || i, this._rawExtent = [], _m(r), this._dimensions = L(t, function(e) {
			return {
				type: e.type,
				property: e.property
			};
		}), this._initDataFromProvider(0, e.count());
	}, e.prototype.getProvider = function() {
		return this._provider;
	}, e.prototype.getSource = function() {
		return this._provider.getSource();
	}, e.prototype.ensureCalculationDimension = function(e, t) {
		var n = this._calcDimNameToIdx, r = this._dimensions, i = n.get(e);
		if (i != null) {
			if (r[i].type === t) return i;
		} else i = r.length;
		return r[i] = { type: t }, n.set(e, i), this._chunks[i] = new Qm[t || "float"](this._rawCount), this._rawExtent[i] = sl(), i;
	}, e.prototype.collectOrdinalMeta = function(e, t) {
		var n = this._chunks[e], r = this._dimensions[e], i = this._rawExtent, a = r.ordinalOffset || 0, o = n.length;
		a === 0 && (i[e] = sl());
		for (var s = i[e], c = a; c < o; c++) {
			var l = n[c] = t.parseAndCollect(n[c]);
			isNaN(l) || (s[0] = Math.min(l, s[0]), s[1] = Math.max(l, s[1]));
		}
		r.ordinalMeta = t, r.ordinalOffset = o, r.type = "ordinal";
	}, e.prototype.getOrdinalMeta = function(e) {
		return this._dimensions[e].ordinalMeta;
	}, e.prototype.getDimensionProperty = function(e) {
		var t = this._dimensions[e];
		return t && t.property;
	}, e.prototype.appendData = function(e) {
		var t = this._provider, n = this.count();
		t.appendData(e);
		var r = t.count();
		return t.persistent || (r += n), n < r && this._initDataFromProvider(n, r, !0), [n, r];
	}, e.prototype.appendValues = function(e, t) {
		for (var n = this._chunks, r = this._dimensions, i = r.length, a = this._rawExtent, o = this.count(), s = o + Math.max(e.length, t || 0), c = 0; c < i; c++) {
			var l = r[c];
			nh(n, c, l.type, s, !0);
		}
		for (var u = [], d = o; d < s; d++) for (var f = d - o, p = 0; p < i; p++) {
			var l = r[p], m = $m.arrayRows.call(this, e[f] || u, l.property, f, p);
			n[p][d] = m;
			var h = a[p];
			m < h[0] && (h[0] = m), m > h[1] && (h[1] = m);
		}
		return this._rawCount = this._count = s, {
			start: o,
			end: s
		};
	}, e.prototype._initDataFromProvider = function(e, t, n) {
		for (var r = this._provider, i = this._chunks, a = this._dimensions, o = a.length, s = this._rawExtent, c = L(a, function(e) {
			return e.property;
		}), l = 0; l < o; l++) {
			var u = a[l];
			s[l] || (s[l] = sl()), nh(i, l, u.type, t, n);
		}
		if (r.fillStorage) r.fillStorage(e, t, i, s);
		else for (var d = [], f = e; f < t; f++) {
			d = r.getItem(f, d);
			for (var p = 0; p < o; p++) {
				var m = i[p], h = this._dimValueGetter(d, c[p], f, p);
				m[f] = h;
				var g = s[p];
				h < g[0] && (g[0] = h), h > g[1] && (g[1] = h);
			}
		}
		!r.persistent && r.clean && r.clean(), this._rawCount = this._count = t, this._extent = [];
	}, e.prototype.count = function() {
		return this._count;
	}, e.prototype.get = function(e, t) {
		if (!(t >= 0 && t < this._count)) return NaN;
		var n = this._chunks[e];
		return n ? n[this.getRawIndex(t)] : NaN;
	}, e.prototype.getValues = function(e, t) {
		var n = [], r = [];
		if (t == null) {
			t = e, e = [];
			for (var i = 0; i < this._dimensions.length; i++) r.push(i);
		} else r = e;
		for (var i = 0, a = r.length; i < a; i++) n.push(this.get(r[i], t));
		return n;
	}, e.prototype.getByRawIndex = function(e, t) {
		if (!(t >= 0 && t < this._rawCount)) return NaN;
		var n = this._chunks[e];
		return n ? n[t] : NaN;
	}, e.prototype.getSum = function(e) {
		var t = this._chunks[e], n = 0;
		if (t) for (var r = 0, i = this.count(); r < i; r++) {
			var a = this.get(e, r);
			isNaN(a) || (n += a);
		}
		return n;
	}, e.prototype.getMedian = function(e) {
		var t = [];
		this.each([e], function(e) {
			isNaN(e) || t.push(e);
		}), Ys(t);
		var n = this.count();
		return n === 0 ? 0 : n % 2 == 1 ? t[(n - 1) / 2] : (t[n / 2] + t[n / 2 - 1]) / 2;
	}, e.prototype.indexOfRawIndex = function(e) {
		if (e >= this._rawCount || e < 0) return -1;
		if (!this._indices) return e;
		var t = this._indices, n = t[e];
		if (n != null && n < this._count && n === e) return e;
		for (var r = 0, i = this._count - 1; r <= i;) {
			var a = (r + i) / 2 | 0;
			if (t[a] < e) r = a + 1;
			else if (t[a] > e) i = a - 1;
			else return a;
		}
		return -1;
	}, e.prototype.getIndices = function() {
		var e, t = this._indices;
		if (t) {
			var n = t.constructor, r = this._count;
			if (n === Array) {
				e = new n(r);
				for (var i = 0; i < r; i++) e[i] = t[i];
			} else e = new n(t.buffer, 0, r);
		} else {
			var n = eh(this._rawCount);
			e = new n(this.count());
			for (var i = 0; i < e.length; i++) e[i] = i;
		}
		return e;
	}, e.prototype.filter = function(e, t) {
		if (!this._count) return this;
		for (var n = this.clone(), r = n.count(), i = new (eh(n._rawCount))(r), a = [], o = e.length, s = 0, c = e[0], l = n._chunks, u = 0; u < r; u++) {
			var d = void 0, f = n.getRawIndex(u);
			if (o === 0) d = t(u);
			else if (o === 1) {
				var p = l[c][f];
				d = t(p, u);
			} else {
				for (var m = 0; m < o; m++) a[m] = l[e[m]][f];
				a[m] = u, d = t.apply(null, a);
			}
			d && (i[s++] = f);
		}
		return s < r && (n._indices = i), n._count = s, n._extent = [], n._updateGetRawIdx(), n;
	}, e.prototype.selectRange = function(e) {
		var t = this.clone(), n = t._count;
		if (!n) return this;
		var r = z(e), i = r.length;
		if (!i) return this;
		var a = t.count(), o = new (eh(t._rawCount))(a), s = 0, c = r[0], l = e[c][0], u = e[c][1], d = t._chunks, f = !1;
		if (!t._indices) {
			var p = 0;
			if (i === 1) {
				for (var m = d[r[0]], h = 0; h < n; h++) {
					var g = m[h];
					(g >= l && g <= u || isNaN(g)) && (o[s++] = p), p++;
				}
				f = !0;
			} else if (i === 2) {
				for (var m = d[r[0]], _ = d[r[1]], v = e[r[1]][0], y = e[r[1]][1], h = 0; h < n; h++) {
					var g = m[h], b = _[h];
					(g >= l && g <= u || isNaN(g)) && (b >= v && b <= y || isNaN(b)) && (o[s++] = p), p++;
				}
				f = !0;
			}
		}
		if (!f) {
			if (i === 1) for (var h = 0; h < a; h++) {
				var x = t.getRawIndex(h), g = d[r[0]][x];
				(g >= l && g <= u || isNaN(g)) && (o[s++] = x);
			}
			else for (var h = 0; h < a; h++) {
				for (var S = !0, x = t.getRawIndex(h), C = 0; C < i; C++) {
					var w = r[C], g = d[w][x];
					(g < e[w][0] || g > e[w][1]) && (S = !1);
				}
				S && (o[s++] = t.getRawIndex(h));
			}
		}
		return s < a && (t._indices = o), t._count = s, t._extent = [], t._updateGetRawIdx(), t;
	}, e.prototype.map = function(e, t) {
		var n = this.clone(e);
		return this._updateDims(n, e, t), n;
	}, e.prototype.modify = function(e, t) {
		this._updateDims(this, e, t);
	}, e.prototype._updateDims = function(e, t, n) {
		for (var r = e._chunks, i = [], a = t.length, o = e.count(), s = [], c = e._rawExtent, l = 0; l < t.length; l++) c[t[l]] = sl();
		for (var u = 0; u < o; u++) {
			for (var d = e.getRawIndex(u), f = 0; f < a; f++) s[f] = r[t[f]][d];
			s[a] = u;
			var p = n && n.apply(null, s);
			if (p != null) {
				typeof p != "object" && (i[0] = p, p = i);
				for (var l = 0; l < p.length; l++) {
					var m = t[l], h = p[l], g = c[m], _ = r[m];
					_ && (_[d] = h), h < g[0] && (g[0] = h), h > g[1] && (g[1] = h);
				}
			}
		}
	}, e.prototype.lttbDownSample = function(e, t) {
		var n = this.clone([e], !0), r = n._chunks[e], i = this.count(), a = 0, o = Math.floor(1 / t), s = this.getRawIndex(0), c, l, u, d = new (eh(this._rawCount))(Math.min((Math.ceil(i / o) + 2) * 2, i));
		d[a++] = s;
		for (var f = 1; f < i - 1; f += o) {
			for (var p = Math.min(f + o, i - 1), m = Math.min(f + o * 2, i), h = (m + p) / 2, g = 0, _ = p; _ < m; _++) {
				var v = this.getRawIndex(_), y = r[v];
				isNaN(y) || (g += y);
			}
			g /= m - p;
			var b = f, x = Math.min(f + o, i), S = f - 1, C = r[s];
			c = -1, u = b;
			for (var w = -1, T = 0, _ = b; _ < x; _++) {
				var v = this.getRawIndex(_), y = r[v];
				if (isNaN(y)) {
					T++, w < 0 && (w = v);
					continue;
				}
				l = Math.abs((S - h) * (y - C) - (S - _) * (g - C)), l > c && (c = l, u = v);
			}
			T > 0 && T < x - b && (d[a++] = Math.min(w, u), u = Math.max(w, u)), d[a++] = u, s = u;
		}
		return d[a++] = this.getRawIndex(i - 1), n._count = a, n._indices = d, n.getRawIndex = this._getRawIdx, n;
	}, e.prototype.minmaxDownSample = function(e, t) {
		for (var n = this.clone([e], !0), r = n._chunks, i = Math.floor(1 / t), a = r[e], o = this.count(), s = new (eh(this._rawCount))(Math.ceil(o / i) * 2), c = 0, l = 0; l < o; l += i) {
			var u = l, d = a[this.getRawIndex(u)], f = l, p = a[this.getRawIndex(f)], m = i;
			l + i > o && (m = o - l);
			for (var h = 0; h < m; h++) {
				var g = a[this.getRawIndex(l + h)];
				g < d && (d = g, u = l + h), g > p && (p = g, f = l + h);
			}
			var _ = this.getRawIndex(u), v = this.getRawIndex(f);
			u < f ? (s[c++] = _, s[c++] = v) : (s[c++] = v, s[c++] = _);
		}
		return n._count = c, n._indices = s, n._updateGetRawIdx(), n;
	}, e.prototype.downSample = function(e, t, n, r) {
		for (var i = this.clone([e], !0), a = i._chunks, o = [], s = Math.floor(1 / t), c = a[e], l = this.count(), u = i._rawExtent[e] = sl(), d = new (eh(this._rawCount))(Math.ceil(l / s)), f = 0, p = 0; p < l; p += s) {
			s > l - p && (s = l - p, o.length = s);
			for (var m = 0; m < s; m++) {
				var h = this.getRawIndex(p + m);
				o[m] = c[h];
			}
			var g = n(o), _ = this.getRawIndex(Math.min(p + r(o, g) || 0, l - 1));
			c[_] = g, g < u[0] && (u[0] = g), g > u[1] && (u[1] = g), d[f++] = _;
		}
		return i._count = f, i._indices = d, i._updateGetRawIdx(), i;
	}, e.prototype.each = function(e, t) {
		if (this._count) for (var n = e.length, r = this._chunks, i = 0, a = this.count(); i < a; i++) {
			var o = this.getRawIndex(i);
			switch (n) {
				case 0:
					t(i);
					break;
				case 1:
					t(r[e[0]][o], i);
					break;
				case 2:
					t(r[e[0]][o], r[e[1]][o], i);
					break;
				default:
					for (var s = 0, c = []; s < n; s++) c[s] = r[e[s]][o];
					c[s] = i, t.apply(null, c);
			}
		}
	}, e.prototype.getDataExtent = function(e, t) {
		var n = this._chunks[e], r = sl();
		if (!n) return r;
		var i = this.count();
		if (!this._indices && !t) return this._rawExtent[e].slice();
		var a = this._extent, o = a[e] || (a[e] = {}), s = Km(t), c = s.key, l = o[c];
		if (l) return l.slice();
		for (var u = r[0], d = r[1], f = 0; f < i; f++) {
			var p = n[this.getRawIndex(f)];
			(!t || qm(s, p)) && (p < u && (u = p), p > d && (d = p));
		}
		return o[c] = [u, d];
	}, e.prototype.getRawDataItem = function(e) {
		var t = this.getRawIndex(e);
		if (this._provider.persistent) return this._provider.getItem(t);
		for (var n = [], r = this._chunks, i = 0; i < r.length; i++) n.push(r[i][t]);
		return n;
	}, e.prototype.clone = function(t, n) {
		var r = new e(), i = this._chunks, a = t && R(t, function(e, t) {
			return e[t] = !0, e;
		}, {});
		if (a) for (var o = 0; o < i.length; o++) r._chunks[o] = a[o] ? th(i[o]) : i[o];
		else r._chunks = i;
		return this._copyCommonProps(r), n || (r._indices = this._cloneIndices()), r._updateGetRawIdx(), r;
	}, e.prototype._copyCommonProps = function(e) {
		e._count = this._count, e._rawCount = this._rawCount, e._provider = this._provider, e._dimensions = this._dimensions, e._extent = j(this._extent), e._rawExtent = j(this._rawExtent);
	}, e.prototype._cloneIndices = function() {
		if (this._indices) {
			var e = this._indices.constructor, t = void 0;
			if (e === Array) {
				var n = this._indices.length;
				t = new e(n);
				for (var r = 0; r < n; r++) t[r] = this._indices[r];
			} else t = new e(this._indices);
			return t;
		}
		return null;
	}, e.prototype._getRawIdxIdentity = function(e) {
		return e;
	}, e.prototype._getRawIdx = function(e) {
		return e < this._count && e >= 0 ? this._indices[e] : -1;
	}, e.prototype._updateGetRawIdx = function() {
		this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
	}, e.internalField = function() {
		function e(e, t, n, r) {
			return Um(e[r], this._dimensions[r]);
		}
		$m = {
			arrayRows: e,
			objectRows: function(e, t, n, r) {
				return Um(e[t], this._dimensions[r]);
			},
			keyedColumns: e,
			original: function(e, t, n, r) {
				var i = e && (e.value == null ? e : e.value);
				return Um(i instanceof Array ? i[r] : i, this._dimensions[r]);
			},
			typedArray: function(e, t, n, r) {
				return e[r];
			}
		};
	}(), e;
}(), ih = Yc(), ah = {
	float: "f",
	int: "i",
	ordinal: "o",
	number: "n",
	time: "t"
}, oh = function() {
	function e(e) {
		this.dimensions = e.dimensions, this._dimOmitted = e.dimensionOmitted, this.source = e.source, this._fullDimCount = e.fullDimensionCount, this._updateDimOmitted(e.dimensionOmitted);
	}
	return e.prototype.isDimensionOmitted = function() {
		return this._dimOmitted;
	}, e.prototype._updateDimOmitted = function(e) {
		this._dimOmitted = e, e && (this._dimNameMap ||= lh(this.source));
	}, e.prototype.getSourceDimensionIndex = function(e) {
		return G(this._dimNameMap.get(e), -1);
	}, e.prototype.getSourceDimension = function(e) {
		var t = this.source.dimensionsDefine;
		if (t) return t[e];
	}, e.prototype.makeStoreSchema = function() {
		for (var e = this._fullDimCount, t = _m(this.source), n = !uh(e), r = "", i = [], a = 0, o = 0; a < e; a++) {
			var s = void 0, c = void 0, l = void 0, u = this.dimensions[o];
			if (u && u.storeDimIndex === a) s = t ? u.name : null, c = u.type, l = u.ordinalMeta, o++;
			else {
				var d = this.getSourceDimension(a);
				d && (s = t ? d.name : null, c = d.type);
			}
			i.push({
				property: s,
				type: c,
				ordinalMeta: l
			}), t && s != null && (!u || !u.isCalculationCoord) && (r += n ? s.replace(/\`/g, "`1").replace(/\$/g, "`2") : s), r += "$", r += ah[c] || "f", l && (r += l.uid), r += "$";
		}
		var f = this.source;
		return {
			dimensions: i,
			hash: [
				f.seriesLayoutBy,
				f.startIndex,
				r
			].join("$$")
		};
	}, e.prototype.makeOutputDimensionNames = function() {
		for (var e = [], t = 0, n = 0; t < this._fullDimCount; t++) {
			var r = void 0, i = this.dimensions[n];
			if (i && i.storeDimIndex === t) i.isCalculationCoord || (r = i.name), n++;
			else {
				var a = this.getSourceDimension(t);
				a && (r = a.name);
			}
			e.push(r);
		}
		return e;
	}, e.prototype.appendCalculationDimension = function(e) {
		this.dimensions.push(e), e.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
	}, e;
}();
function sh(e) {
	return e instanceof oh;
}
function ch(e) {
	for (var t = K(), n = 0; n < (e || []).length; n++) {
		var r = e[n], i = W(r) ? r.name : r;
		i != null && t.get(i) == null && t.set(i, n);
	}
	return t;
}
function lh(e) {
	var t = ih(e);
	return t.dimNameMap ||= ch(e.dimensionsDefine);
}
function uh(e) {
	return e > 30;
}
//#endregion
//#region node_modules/echarts/lib/data/SeriesData.js
var dh = W, fh = L, ph = typeof Int32Array > "u" ? Array : Int32Array, mh = "e\0\0", hh = -1, gh = [
	"hasItemOption",
	"_nameList",
	"_idList",
	"_invertedIndicesMap",
	"_dimSummary",
	"userOutput",
	"_rawData",
	"_dimValueGetter",
	"_nameDimIdx",
	"_idDimIdx",
	"_nameRepeatCount"
], _h = ["_approximateExtent"], vh, yh, bh, xh, Sh, Ch, wh, Th = function() {
	function e(e, t) {
		this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = [
			"cloneShallow",
			"downSample",
			"minmaxDownSample",
			"lttbDownSample",
			"map"
		], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = [
			"downSample",
			"minmaxDownSample",
			"lttbDownSample"
		];
		var n, r = !1;
		sh(e) ? (n = e.dimensions, this._dimOmitted = e.isDimensionOmitted(), this._schema = e) : (r = !0, n = e), n ||= ["x", "y"];
		for (var i = {}, a = [], o = {}, s = !1, c = {}, l = 0; l < n.length; l++) {
			var u = n[l], d = U(u) ? new Hm({ name: u }) : u instanceof Hm ? u : new Hm(u), f = d.name;
			d.type = d.type || "float", d.coordDim || (d.coordDim = f, d.coordDimIndex = 0);
			var p = d.otherDims = d.otherDims || {};
			a.push(f), i[f] = d, c[f] != null && (s = !0), d.createInvertedIndices && (o[f] = []), r && (d.storeDimIndex = l), p.itemName === 0 && (this._nameDimIdx = d.storeDimIndex), p.itemId === 0 && (this._idDimIdx = d.storeDimIndex);
		}
		if (this.dimensions = a, this._dimInfos = i, this._initGetDimensionInfo(s), this.hostModel = t, this._invertedIndicesMap = o, this._dimOmitted) {
			var m = this._dimIdxToName = K();
			I(a, function(e) {
				m.set(i[e].storeDimIndex, e);
			});
		}
	}
	return e.prototype.getDimension = function(e) {
		var t = this._recognizeDimIndex(e);
		if (t == null) return e;
		if (t = e, !this._dimOmitted) return this.dimensions[t];
		var n = this._dimIdxToName.get(t);
		if (n != null) return n;
		var r = this._schema.getSourceDimension(t);
		if (r) return r.name;
	}, e.prototype.getDimensionIndex = function(e) {
		var t = this._recognizeDimIndex(e);
		if (t != null) return t;
		if (e == null) return -1;
		var n = this._getDimInfo(e);
		return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(e) : -1;
	}, e.prototype._recognizeDimIndex = function(e) {
		if (me(e) || e != null && !isNaN(e) && !this._getDimInfo(e) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(e) < 0)) return +e;
	}, e.prototype._getStoreDimIndex = function(e) {
		return this.getDimensionIndex(e);
	}, e.prototype.getDimensionInfo = function(e) {
		return this._getDimInfo(this.getDimension(e));
	}, e.prototype._initGetDimensionInfo = function(e) {
		var t = this._dimInfos;
		this._getDimInfo = e ? function(e) {
			return t.hasOwnProperty(e) ? t[e] : void 0;
		} : function(e) {
			return t[e];
		};
	}, e.prototype.getDimensionsOnCoord = function() {
		return this._dimSummary.dataDimsOnCoord.slice();
	}, e.prototype.mapDimension = function(e, t) {
		var n = this._dimSummary;
		if (t == null) return n.encodeFirstDimNotExtra[e];
		var r = n.encode[e];
		return r ? r[t] : null;
	}, e.prototype.mapDimensionsAll = function(e) {
		return (this._dimSummary.encode[e] || []).slice();
	}, e.prototype.getStore = function() {
		return this._store;
	}, e.prototype.initData = function(e, t, n) {
		var r = this, i;
		if (e instanceof rh && (i = e), !i) {
			var a = this.dimensions, o = cm(e) || ce(e) ? new wm(e, a.length) : e;
			i = new rh();
			var s = fh(a, function(e) {
				return {
					type: r._dimInfos[e].type,
					property: e
				};
			});
			i.initData(o, s, n);
		}
		this._store = i, this._nameList = (t || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i.count()), this._dimSummary = Rm(this, this._schema), this.userOutput = this._dimSummary.userOutput;
	}, e.prototype.appendData = function(e) {
		var t = this._store.appendData(e);
		this._doInit(t[0], t[1]);
	}, e.prototype.appendValues = function(e, t) {
		var n = this._store.appendValues(e, t && t.length), r = n.start, i = n.end, a = this._shouldMakeIdFromName();
		if (this._updateOrdinalMeta(), t) for (var o = r; o < i; o++) {
			var s = o - r;
			this._nameList[o] = t[s], a && wh(this, o);
		}
	}, e.prototype._updateOrdinalMeta = function() {
		for (var e = this._store, t = this.dimensions, n = 0; n < t.length; n++) {
			var r = this._dimInfos[t[n]];
			r.ordinalMeta && e.collectOrdinalMeta(r.storeDimIndex, r.ordinalMeta);
		}
	}, e.prototype._shouldMakeIdFromName = function() {
		var e = this._store.getProvider();
		return this._idDimIdx == null && e.getSource().sourceFormat !== "typedArray" && !e.fillStorage;
	}, e.prototype._doInit = function(e, t) {
		if (!(e >= t)) {
			var n = this._store.getProvider();
			this._updateOrdinalMeta();
			var r = this._nameList, i = this._idList;
			if (n.getSource().sourceFormat === "original" && !n.pure) for (var a = [], o = e; o < t; o++) {
				var s = n.getItem(o, a);
				if (!this.hasItemOption && Mc(s) && (this.hasItemOption = !0), s) {
					var c = s.name;
					r[o] == null && c != null && (r[o] = Hc(c, null));
					var l = s.id;
					i[o] == null && l != null && (i[o] = Hc(l, null));
				}
			}
			if (this._shouldMakeIdFromName()) for (var o = e; o < t; o++) wh(this, o);
			vh(this);
		}
	}, e.prototype.getApproximateExtent = function(e, t) {
		return this._approximateExtent[e] || this._store.getDataExtent(this._getStoreDimIndex(e), t);
	}, e.prototype.setApproximateExtent = function(e, t) {
		t = this.getDimension(t), this._approximateExtent[t] = e.slice();
	}, e.prototype.getCalculationInfo = function(e) {
		return this._calculationInfo[e];
	}, e.prototype.setCalculationInfo = function(e, t) {
		dh(e) ? N(this._calculationInfo, e) : this._calculationInfo[e] = t;
	}, e.prototype.getName = function(e) {
		var t = this.getRawIndex(e), n = this._nameList[t];
		return n == null && this._nameDimIdx != null && (n = bh(this, this._nameDimIdx, t)), n ??= "", n;
	}, e.prototype._getCategory = function(e, t) {
		var n = this._store.get(e, t), r = this._store.getOrdinalMeta(e);
		return r ? r.categories[n] : n;
	}, e.prototype.getId = function(e) {
		return yh(this, this.getRawIndex(e));
	}, e.prototype.count = function() {
		return this._store.count();
	}, e.prototype.get = function(e, t) {
		var n = this._store, r = this._dimInfos[e];
		if (r) return n.get(r.storeDimIndex, t);
	}, e.prototype.getByRawIndex = function(e, t) {
		var n = this._store, r = this._dimInfos[e];
		if (r) return n.getByRawIndex(r.storeDimIndex, t);
	}, e.prototype.getIndices = function() {
		return this._store.getIndices();
	}, e.prototype.getDataExtent = function(e) {
		return this._store.getDataExtent(this._getStoreDimIndex(e), null);
	}, e.prototype.getSum = function(e) {
		return this._store.getSum(this._getStoreDimIndex(e));
	}, e.prototype.getMedian = function(e) {
		return this._store.getMedian(this._getStoreDimIndex(e));
	}, e.prototype.getValues = function(e, t) {
		var n = this, r = this._store;
		return V(e) ? r.getValues(fh(e, function(e) {
			return n._getStoreDimIndex(e);
		}), t) : r.getValues(e);
	}, e.prototype.hasValue = function(e) {
		for (var t = this._dimSummary.dataDimIndicesOnCoord, n = 0, r = t.length; n < r; n++) if (isNaN(this._store.get(t[n], e))) return !1;
		return !0;
	}, e.prototype.indexOfName = function(e) {
		for (var t = 0, n = this._store.count(); t < n; t++) if (this.getName(t) === e) return t;
		return -1;
	}, e.prototype.getRawIndex = function(e) {
		return this._store.getRawIndex(e);
	}, e.prototype.indexOfRawIndex = function(e) {
		return this._store.indexOfRawIndex(e);
	}, e.prototype.rawIndexOf = function(e, t) {
		var n = e && this._invertedIndicesMap[e], r = n && n[t];
		return r == null || isNaN(r) ? hh : r;
	}, e.prototype.each = function(e, t, n) {
		H(e) && (n = t, t = e, e = []);
		var r = n || this, i = fh(xh(e), this._getStoreDimIndex, this);
		this._store.each(i, r ? B(t, r) : t);
	}, e.prototype.filterSelf = function(e, t, n) {
		H(e) && (n = t, t = e, e = []);
		var r = n || this, i = fh(xh(e), this._getStoreDimIndex, this);
		return this._store = this._store.filter(i, r ? B(t, r) : t), this;
	}, e.prototype.selectRange = function(e) {
		var t = this, n = {}, r = z(e), i = [];
		return I(r, function(r) {
			var a = t._getStoreDimIndex(r);
			n[a] = e[r], i.push(a);
		}), this._store = this._store.selectRange(n), this;
	}, e.prototype.mapArray = function(e, t, n) {
		H(e) && (n = t, t = e, e = []), n ||= this;
		var r = [];
		return this.each(e, function() {
			r.push(t && t.apply(this, arguments));
		}, n), r;
	}, e.prototype.map = function(e, t, n, r) {
		var i = n || r || this, a = fh(xh(e), this._getStoreDimIndex, this), o = Ch(this);
		return o._store = this._store.map(a, i ? B(t, i) : t), o;
	}, e.prototype.modify = function(e, t, n, r) {
		var i = n || r || this, a = fh(xh(e), this._getStoreDimIndex, this);
		this._store.modify(a, i ? B(t, i) : t);
	}, e.prototype.downSample = function(e, t, n, r) {
		var i = Ch(this);
		return i._store = this._store.downSample(this._getStoreDimIndex(e), t, n, r), i;
	}, e.prototype.minmaxDownSample = function(e, t) {
		var n = Ch(this);
		return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(e), t), n;
	}, e.prototype.lttbDownSample = function(e, t) {
		var n = Ch(this);
		return n._store = this._store.lttbDownSample(this._getStoreDimIndex(e), t), n;
	}, e.prototype.getRawDataItem = function(e) {
		return this._store.getRawDataItem(e);
	}, e.prototype.getItemModel = function(e) {
		var t = this.hostModel;
		return new Jp(this.getRawDataItem(e), t, t && t.ecModel);
	}, e.prototype.diff = function(e) {
		var t = this;
		return new Zp(e ? e.getStore().getIndices() : [], this.getStore().getIndices(), function(t) {
			return yh(e, t);
		}, function(e) {
			return yh(t, e);
		});
	}, e.prototype.getVisual = function(e) {
		var t = this._visual;
		return t && t[e];
	}, e.prototype.setVisual = function(e, t) {
		this._visual = this._visual || {}, dh(e) ? N(this._visual, e) : this._visual[e] = t;
	}, e.prototype.getItemVisual = function(e, t) {
		var n = this._itemVisuals[e];
		return (n && n[t]) ?? this.getVisual(t);
	}, e.prototype.hasItemVisual = function() {
		return this._itemVisuals.length > 0;
	}, e.prototype.ensureUniqueItemVisual = function(e, t) {
		var n = this._itemVisuals, r = n[e];
		r ||= n[e] = {};
		var i = r[t];
		return i ?? (i = this.getVisual(t), V(i) ? i = i.slice() : dh(i) && (i = N({}, i)), r[t] = i), i;
	}, e.prototype.setItemVisual = function(e, t, n) {
		var r = this._itemVisuals[e] || {};
		this._itemVisuals[e] = r, dh(t) ? N(r, t) : r[t] = n;
	}, e.prototype.clearAllVisual = function() {
		this._visual = {}, this._itemVisuals = [];
	}, e.prototype.setLayout = function(e, t) {
		dh(e) ? N(this._layout, e) : this._layout[e] = t;
	}, e.prototype.getLayout = function(e) {
		return this._layout[e];
	}, e.prototype.getItemLayout = function(e) {
		return this._itemLayouts[e];
	}, e.prototype.setItemLayout = function(e, t, n) {
		this._itemLayouts[e] = n ? N(this._itemLayouts[e] || {}, t) : t;
	}, e.prototype.clearItemLayouts = function() {
		this._itemLayouts.length = 0;
	}, e.prototype.setItemGraphicEl = function(e, t) {
		Tl(this.hostModel && this.hostModel.seriesIndex, this.dataType, e, t), this._graphicEls[e] = t;
	}, e.prototype.getItemGraphicEl = function(e) {
		return this._graphicEls[e];
	}, e.prototype.eachItemGraphicEl = function(e, t) {
		I(this._graphicEls, function(n, r) {
			n && e && e.call(t, n, r);
		});
	}, e.prototype.cloneShallow = function(t) {
		return t ||= new e(this._schema ? this._schema : fh(this.dimensions, this._getDimInfo, this), this.hostModel), Sh(t, this), t._store = this._store, t;
	}, e.prototype.wrapMethod = function(e, t) {
		var n = this[e];
		H(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(e), this[e] = function() {
			var e = n.apply(this, arguments);
			return t.apply(this, [e].concat(we(arguments)));
		});
	}, e.internalField = function() {
		vh = function(e) {
			var t = e._invertedIndicesMap;
			I(t, function(n, r) {
				var i = e._dimInfos[r], a = i.ordinalMeta, o = e._store;
				if (a) {
					n = t[r] = new ph(a.categories.length);
					for (var s = 0; s < n.length; s++) n[s] = hh;
					for (var s = 0; s < o.count(); s++) n[o.get(i.storeDimIndex, s)] = s;
				}
			});
		}, bh = function(e, t, n) {
			return Hc(e._getCategory(t, n), null);
		}, yh = function(e, t) {
			var n = e._idList[t];
			return n == null && e._idDimIdx != null && (n = bh(e, e._idDimIdx, t)), n ??= mh + t, n;
		}, xh = function(e) {
			return V(e) || (e = e == null ? [] : [e]), e;
		}, Ch = function(t) {
			var n = new e(t._schema ? t._schema : fh(t.dimensions, t._getDimInfo, t), t.hostModel);
			return Sh(n, t), n;
		}, Sh = function(e, t) {
			I(gh.concat(t.__wrappedMethods || []), function(n) {
				t.hasOwnProperty(n) && (e[n] = t[n]);
			}), e.__wrappedMethods = t.__wrappedMethods, I(_h, function(n) {
				e[n] = j(t[n]);
			}), e._calculationInfo = N({}, t._calculationInfo);
		}, wh = function(e, t) {
			var n = e._nameList, r = e._idList, i = e._nameDimIdx, a = e._idDimIdx, o = n[t], s = r[t];
			if (o == null && i != null && (n[t] = o = bh(e, i, t)), s == null && a != null && (r[t] = s = bh(e, a, t)), s == null && o != null) {
				var c = e._nameRepeatCount, l = c[o] = (c[o] || 0) + 1;
				s = o, l > 1 && (s += "__ec__" + l), r[t] = s;
			}
		};
	}(), e;
}();
//#endregion
//#region node_modules/echarts/lib/data/helper/createDimensions.js
function Eh(e, t) {
	return Dh(e, t).dimensions;
}
function Dh(e, t) {
	cm(e) || (e = um(e)), t ||= {};
	var n = t.coordDimensions || [], r = t.dimensionsDefine || e.dimensionsDefine || [], i = K(), a = [], o = Oh(e, n, r, t.dimensionsCount), s = t.canOmitUnusedDimensions && uh(o), c = r === e.dimensionsDefine, l = c ? lh(e) : ch(r), u = t.encodeDefine;
	!u && t.encodeDefaulter && (u = t.encodeDefaulter(e, o));
	for (var d = K(u), f = new Xm(o), p = 0; p < f.length; p++) f[p] = -1;
	function m(e) {
		var t = f[e];
		if (t < 0) {
			var n = r[e], i = W(n) ? n : { name: n }, o = new Hm(), s = i.name;
			return s != null && l.get(s) != null && (o.name = o.displayName = s), i.type != null && (o.type = i.type), i.displayName != null && (o.displayName = i.displayName), f[e] = a.length, o.storeDimIndex = e, a.push(o), o;
		}
		return a[t];
	}
	if (!s) for (var p = 0; p < o; p++) m(p);
	d.each(function(e, t) {
		var n = Oc(e).slice();
		if (n.length === 1 && !U(n[0]) && n[0] < 0) {
			d.set(t, !1);
			return;
		}
		var r = d.set(t, []);
		I(n, function(e, n) {
			var i = U(e) ? l.get(e) : e;
			i != null && i < o && (r[n] = i, g(m(i), t, n));
		});
	});
	var h = 0;
	I(n, function(e) {
		var t, n, r, i;
		if (U(e)) t = e, i = {};
		else {
			i = e, t = i.name;
			var a = i.ordinalMeta;
			i.ordinalMeta = null, i = N({}, i), i.ordinalMeta = a, n = i.dimsDef, r = i.otherDims, i.name = i.coordDim = i.coordDimIndex = i.dimsDef = i.otherDims = null;
		}
		var s = d.get(t);
		if (s !== !1) {
			if (s = Oc(s), !s.length) for (var l = 0; l < (n && n.length || 1); l++) {
				for (; h < o && m(h).coordDim != null;) h++;
				h < o && s.push(h++);
			}
			I(s, function(e, a) {
				var o = m(e);
				if (c && i.type != null && (o.type = i.type), g(P(o, i), t, a), o.name == null && n) {
					var s = n[a];
					!W(s) && (s = { name: s }), o.name = o.displayName = s.name, o.defaultTooltip = s.defaultTooltip;
				}
				r && P(o.otherDims, r);
			});
		}
	});
	function g(e, t, n) {
		Dl.get(t) == null ? (e.coordDim = t, e.coordDimIndex = n, i.set(t, !0)) : e.otherDims[t] = n;
	}
	var _ = t.generateCoord, v = t.generateCoordCount, y = v != null;
	v = _ ? v || 1 : 0;
	var b = _ || "value";
	function x(e) {
		e.name ??= e.coordDim;
	}
	if (s) I(a, function(e) {
		x(e);
	}), a.sort(function(e, t) {
		return e.storeDimIndex - t.storeDimIndex;
	});
	else for (var S = 0; S < o; S++) {
		var C = m(S);
		C.coordDim ?? (C.coordDim = kh(b, i, y), C.coordDimIndex = 0, (!_ || v <= 0) && (C.isExtraCoord = !0), v--), x(C), C.type == null && (am(e, S) === Qp.Must || C.isExtraCoord && (C.otherDims.itemName != null || C.otherDims.seriesName != null)) && (C.type = "ordinal");
	}
	return vl(a, function(e) {
		return e.name;
	}, function(e, t) {
		t > 0 && (e.name += t - 1);
	}), new oh({
		source: e,
		dimensions: a,
		fullDimensionCount: o,
		dimensionOmitted: s
	});
}
function Oh(e, t, n, r) {
	var i = Math.max(e.dimensionsDetectedCount || 1, t.length, n.length, r || 0);
	return I(t, function(e) {
		var t;
		W(e) && (t = e.dimsDef) && (i = Math.max(i, t.length));
	}), i;
}
function kh(e, t, n) {
	if (n || t.hasKey(e)) {
		for (var r = 0; t.hasKey(e + r);) r++;
		e += r;
	}
	return t.set(e, !0), e;
}
//#endregion
//#region node_modules/echarts/lib/core/CoordinateSystem.js
var Ah = {}, jh = {}, Mh = function() {
	function e() {
		this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
	}
	return e.prototype.create = function(e, t) {
		this._nonSeriesBoxMasterList = n(Ah, !0), this._normalMasterList = n(jh, !1);
		function n(n, r) {
			var i = [];
			return I(n, function(n, r) {
				var a = n.create(e, t);
				i = i.concat(a || []);
			}), i;
		}
	}, e.prototype.update = function(e, t) {
		I(this._normalMasterList, function(n) {
			n.update && n.update(e, t);
		});
	}, e.prototype.getCoordinateSystems = function() {
		return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
	}, e.register = function(e, t) {
		if (e === "matrix" || e === "calendar") {
			Ah[e] = t;
			return;
		}
		jh[e] = t;
	}, e.get = function(e) {
		return jh[e] || Ah[e];
	}, e;
}();
function Nh(e) {
	return !!Ah[e];
}
function Ph(e) {
	Fh.set(e.fullType, { getCoord2: void 0 }).getCoord2 = e.getCoord2;
}
var Fh = K();
function Ih(e) {
	var t = e.getShallow("coord", !0), n = 1;
	if (t == null) {
		var r = Fh.get(e.type);
		r && r.getCoord2 && (n = 2, t = r.getCoord2(e));
	}
	return {
		coord: t,
		from: n
	};
}
function Lh(e, t) {
	var n = e.getShallow("coordinateSystem"), r = e.getShallow("coordinateSystemUsage", !0), i = 0;
	if (n) {
		var a = e.mainType === "series";
		r ??= a ? "data" : "box", r === "data" ? (i = 1, a || (i = 0)) : r === "box" && (i = 2, !a && !Nh(n) && (i = 0));
	}
	return {
		coordSysType: n,
		kind: i
	};
}
function Rh(e) {
	var t = e.targetModel, n = e.coordSysType, r = e.coordSysProvider, i = e.isDefaultDataCoordSys;
	e.allowNotFound;
	var a = Lh(t, !0), o = a.kind, s = a.coordSysType;
	if (i && o !== 1 && (o = 1, s = n), o === 0 || s !== n) return 0;
	var c = r(n, t);
	return c ? (o === 1 ? t.coordinateSystem = c : t.boxCoordinateSystem = c, o) : 0;
}
//#endregion
//#region node_modules/echarts/lib/model/referHelper.js
var zh = function() {
	function e(e) {
		this.coordSysDims = [], this.axisMap = K(), this.categoryAxisMap = K(), this.coordSysName = e;
	}
	return e;
}();
function Bh(e) {
	var t = e.get("coordinateSystem"), n = new zh(t), r = Vh[t];
	if (r) return r(e, n, n.axisMap, n.categoryAxisMap), n;
}
var Vh = {
	cartesian2d: function(e, t, n, r) {
		var i = e.getReferringComponents("xAxis", $c).models[0], a = e.getReferringComponents("yAxis", $c).models[0];
		t.coordSysDims = ["x", "y"], n.set("x", i), n.set("y", a), Hh(i) && (r.set("x", i), t.firstCategoryDimIndex = 0), Hh(a) && (r.set("y", a), t.firstCategoryDimIndex ??= 1);
	},
	singleAxis: function(e, t, n, r) {
		var i = e.getReferringComponents("singleAxis", $c).models[0];
		t.coordSysDims = ["single"], n.set("single", i), Hh(i) && (r.set("single", i), t.firstCategoryDimIndex = 0);
	},
	polar: function(e, t, n, r) {
		var i = e.getReferringComponents("polar", $c).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
		t.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Hh(a) && (r.set("radius", a), t.firstCategoryDimIndex = 0), Hh(o) && (r.set("angle", o), t.firstCategoryDimIndex ??= 1);
	},
	geo: function(e, t, n, r) {
		t.coordSysDims = ["lng", "lat"];
	},
	parallel: function(e, t, n, r) {
		var i = e.ecModel, a = i.getComponent("parallel", e.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
		I(a.parallelAxisIndex, function(e, a) {
			var s = i.getComponent("parallelAxis", e), c = o[a];
			n.set(c, s), Hh(s) && (r.set(c, s), t.firstCategoryDimIndex ??= a);
		});
	},
	matrix: function(e, t, n, r) {
		var i = e.getReferringComponents("matrix", $c).models[0];
		t.coordSysDims = ["x", "y"];
		var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
		n.set("x", a), n.set("y", o), r.set("x", a), r.set("y", o);
	}
};
function Hh(e) {
	return e.get("type") === "category";
}
//#endregion
//#region node_modules/echarts/lib/data/helper/dataStackHelper.js
function Uh(e, t, n) {
	n ||= {};
	var r = n.byIndex, i = n.stackedCoordDimension, a, o, s;
	Wh(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
	var c = !!(e && e.get("stack")), l, u, d, f, p = !0;
	function m(e) {
		return e.type !== "ordinal" && e.type !== "time";
	}
	if (I(a, function(e, t) {
		U(e) && (a[t] = e = { name: e }), m(e) || (p = !1);
	}), I(a, function(e, t) {
		c && !e.isExtraCoord && (!r && !l && e.ordinalMeta && (l = e), !u && m(e) && (!p || e.coordDim !== "x" && e.coordDim !== "angle") && (!i || i === e.coordDim) && (u = e));
	}), u && !r && !l && (r = !0), u) {
		d = "__\0ecstackresult_" + e.id, f = "__\0ecstackedover_" + e.id, l && (l.createInvertedIndices = !0);
		var h = u.coordDim, g = u.type, _ = 0;
		I(a, function(e) {
			e.coordDim === h && _++;
		});
		var v = {
			name: d,
			coordDim: h,
			coordDimIndex: _,
			type: g,
			isExtraCoord: !0,
			isCalculationCoord: !0,
			storeDimIndex: a.length
		}, y = {
			name: f,
			coordDim: f,
			coordDimIndex: _ + 1,
			type: g,
			isExtraCoord: !0,
			isCalculationCoord: !0,
			storeDimIndex: a.length + 1
		};
		o ? (s && (v.storeDimIndex = s.ensureCalculationDimension(f, g), y.storeDimIndex = s.ensureCalculationDimension(d, g)), o.appendCalculationDimension(v), o.appendCalculationDimension(y)) : (a.push(v), a.push(y));
	}
	return {
		stackedDimension: u && u.name,
		stackedByDimension: l && l.name,
		isStackedByIndex: r,
		stackedOverDimension: f,
		stackResultDimension: d
	};
}
function Wh(e) {
	return !sh(e.schema);
}
function Gh(e, t) {
	return !!t && t === e.getCalculationInfo("stackedDimension");
}
function Kh(e, t) {
	return Gh(e, t) ? e.getCalculationInfo("stackResultDimension") : t;
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/createSeriesData.js
function qh(e, t) {
	var n = e.get("coordinateSystem"), r = Mh.get(n), i;
	return t && t.coordSysDims && (i = L(t.coordSysDims, function(e) {
		var n = { name: e }, r = t.axisMap.get(e);
		return r && (n.type = Bm(r.get("type"))), n;
	})), i ||= r && (r.getDimensionsInfo ? r.getDimensionsInfo() : r.dimensions.slice()) || ["x", "y"], i;
}
function Jh(e, t, n) {
	var r, i;
	return n && I(e, function(e, a) {
		var o = e.coordDim, s = n.categoryAxisMap.get(o);
		s && (r ??= a, e.ordinalMeta = s.getOrdinalMeta(), t && (e.createInvertedIndices = !0)), e.otherDims.itemName != null && (i = !0);
	}), !i && r != null && (e[r].otherDims.itemName = 0), r;
}
function Yh(e, t, n) {
	n ||= {};
	var r = t.getSourceManager(), i, a = !1;
	e ? (a = !0, i = um(e)) : (i = r.getSource(), a = i.sourceFormat === Ol);
	var o = Bh(t), s = qh(t, o), c = n.useEncodeDefaulter, l = H(c) ? c : c ? fe(tm, s, t) : null, u = {
		coordDimensions: s,
		generateCoord: n.generateCoord,
		encodeDefine: t.getEncode(),
		encodeDefaulter: l,
		canOmitUnusedDimensions: !a
	}, d = Dh(i, u), f = Jh(d.dimensions, n.createInvertedIndices, o), p = a ? null : r.getSharedDataStore(d), m = Uh(t, {
		schema: d,
		store: p
	}), h = new Th(d, t);
	h.setCalculationInfo(m);
	var g = f != null && Xh(i) ? function(e, t, n, r) {
		return r === f ? n : this.defaultDimValueGetter(e, t, n, r);
	} : null;
	return h.hasItemOption = !1, h.initData(a ? i : p, null, g), h;
}
function Xh(e) {
	if (e.sourceFormat === "original") return !V(jc(Zh(e.data || [])));
}
function Zh(e) {
	for (var t = 0; t < e.length && e[t] == null;) t++;
	return e[t];
}
//#endregion
//#region node_modules/echarts/lib/util/component.js
var Qh = Math.round(Math.random() * 10);
function $h(e) {
	return [e || "", Qh++].join("_");
}
function eg(e) {
	var t = {};
	e.registerSubTypeDefaulter = function(e, n) {
		var r = Ke(e);
		t[r.main] = n;
	}, e.determineSubType = function(n, r) {
		var i = r.type;
		if (!i) {
			var a = Ke(n).main;
			e.hasSubTypes(n) && t[a] && (i = t[a](r));
		}
		return i;
	};
}
function tg(e, t) {
	e.topologicalTravel = function(e, t, r, i) {
		if (!e.length) return;
		var a = n(t), o = a.graph, s = a.noEntryList, c = {};
		for (I(e, function(e) {
			c[e] = !0;
		}); s.length;) {
			var l = s.pop(), u = o[l], d = !!c[l];
			d && (r.call(i, l, u.originalDeps.slice()), delete c[l]), I(u.successor, d ? p : f);
		}
		I(c, function() {
			throw Error("");
		});
		function f(e) {
			o[e].entryCount--, o[e].entryCount === 0 && s.push(e);
		}
		function p(e) {
			c[e] = !0, f(e);
		}
	};
	function n(e) {
		var n = {}, a = [];
		return I(e, function(o) {
			var s = r(n, o), c = i(s.originalDeps = t(o), e);
			s.entryCount = c.length, s.entryCount === 0 && a.push(o), I(c, function(e) {
				F(s.predecessor, e) < 0 && s.predecessor.push(e);
				var t = r(n, e);
				F(t.successor, e) < 0 && t.successor.push(o);
			});
		}), {
			graph: n,
			noEntryList: a
		};
	}
	function r(e, t) {
		return e[t] || (e[t] = {
			predecessor: [],
			successor: []
		}), e[t];
	}
	function i(e, t) {
		var n = [];
		return I(e, function(e) {
			F(t, e) >= 0 && n.push(e);
		}), n;
	}
}
function ng(e, t) {
	return M(M({}, e, !0), t, !0);
}
//#endregion
//#region node_modules/zrender/lib/core/fourPointsTransform.js
var rg = Math.log(2);
function ig(e, t, n, r, i, a) {
	var o = r + "-" + i, s = e.length;
	if (a.hasOwnProperty(o)) return a[o];
	if (t === 1) {
		var c = Math.round(Math.log((1 << s) - 1 & ~i) / rg);
		return e[n][c];
	}
	for (var l = r | 1 << n, u = n + 1; r & 1 << u;) u++;
	for (var d = 0, f = 0, p = 0; f < s; f++) {
		var m = 1 << f;
		m & i || (d += (p % 2 ? -1 : 1) * e[n][f] * ig(e, t - 1, u, l, i | m, a), p++);
	}
	return a[o] = d, d;
}
function ag(e, t) {
	var n = [
		[
			e[0],
			e[1],
			1,
			0,
			0,
			0,
			-t[0] * e[0],
			-t[0] * e[1]
		],
		[
			0,
			0,
			0,
			e[0],
			e[1],
			1,
			-t[1] * e[0],
			-t[1] * e[1]
		],
		[
			e[2],
			e[3],
			1,
			0,
			0,
			0,
			-t[2] * e[2],
			-t[2] * e[3]
		],
		[
			0,
			0,
			0,
			e[2],
			e[3],
			1,
			-t[3] * e[2],
			-t[3] * e[3]
		],
		[
			e[4],
			e[5],
			1,
			0,
			0,
			0,
			-t[4] * e[4],
			-t[4] * e[5]
		],
		[
			0,
			0,
			0,
			e[4],
			e[5],
			1,
			-t[5] * e[4],
			-t[5] * e[5]
		],
		[
			e[6],
			e[7],
			1,
			0,
			0,
			0,
			-t[6] * e[6],
			-t[6] * e[7]
		],
		[
			0,
			0,
			0,
			e[6],
			e[7],
			1,
			-t[7] * e[6],
			-t[7] * e[7]
		]
	], r = {}, i = ig(n, 8, 0, 0, 0, r);
	if (i !== 0) {
		for (var a = [], o = 0; o < 8; o++) for (var s = 0; s < 8; s++) a[s] ?? (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * ig(n, 7, +(o === 0), 1 << o, 1 << s, r) / i * t[o];
		return function(e, t, n) {
			var r = t * a[6] + n * a[7] + 1;
			e[0] = (t * a[0] + n * a[1] + a[2]) / r, e[1] = (t * a[3] + n * a[4] + a[5]) / r;
		};
	}
}
//#endregion
//#region node_modules/zrender/lib/core/dom.js
var og = "___zrEVENTSAVED", sg = [];
function cg(e, t, n, r, i) {
	return ug(sg, t, r, i, !0) && ug(e, n, sg[0], sg[1]);
}
function lg(e, t) {
	e && n(e), t && n(t);
	function n(e) {
		var t = e[og];
		t && (t.clearMarkers && t.clearMarkers(), delete e[og]);
	}
}
function ug(e, t, n, r, i) {
	if (t.getBoundingClientRect && J.domSupported && !pg(t)) {
		var a = t[og] || (t[og] = {}), o = fg(dg(t, a), a, i);
		if (o) return o(e, n, r), !0;
	}
	return !1;
}
function dg(e, t) {
	var n = t.markers;
	if (n) return n;
	n = t.markers = [];
	for (var r = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
		var o = document.createElement("div"), s = o.style, c = a % 2, l = (a >> 1) % 2;
		s.cssText = [
			"position: absolute",
			"visibility: hidden",
			"padding: 0",
			"margin: 0",
			"border-width: 0",
			"user-select: none",
			"width:0",
			"height:0",
			r[c] + ":0",
			i[l] + ":0",
			r[1 - c] + ":auto",
			i[1 - l] + ":auto",
			""
		].join("!important;"), e.appendChild(o), n.push(o);
	}
	return t.clearMarkers = function() {
		I(n, function(e) {
			e.parentNode && e.parentNode.removeChild(e);
		});
	}, n;
}
function fg(e, t, n) {
	for (var r = n ? "invTrans" : "trans", i = t[r], a = t.srcCoords, o = [], s = [], c = !0, l = 0; l < 4; l++) {
		var u = e[l].getBoundingClientRect(), d = 2 * l, f = u.left, p = u.top;
		o.push(f, p), c = c && a && f === a[d] && p === a[d + 1], s.push(e[l].offsetLeft, e[l].offsetTop);
	}
	return c && i ? i : (t.srcCoords = o, t[r] = n ? ag(s, o) : ag(o, s));
}
function pg(e) {
	return e.nodeName.toUpperCase() === "CANVAS";
}
var mg = /([&<>"'])/g, hg = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function gg(e) {
	return e == null ? "" : (e + "").replace(mg, function(e, t) {
		return hg[t];
	});
}
//#endregion
//#region node_modules/echarts/lib/i18n/langEN.js
var _g = {
	time: {
		month: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthAbbr: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		dayOfWeek: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayOfWeekAbbr: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		]
	},
	legend: { selector: {
		all: "All",
		inverse: "Inv"
	} },
	toolbox: {
		brush: { title: {
			rect: "Box Select",
			polygon: "Lasso Select",
			lineX: "Horizontally Select",
			lineY: "Vertically Select",
			keep: "Keep Selections",
			clear: "Clear Selections"
		} },
		dataView: {
			title: "Data View",
			lang: [
				"Data View",
				"Close",
				"Refresh"
			]
		},
		dataZoom: { title: {
			zoom: "Zoom",
			back: "Zoom Reset"
		} },
		magicType: { title: {
			line: "Switch to Line Chart",
			bar: "Switch to Bar Chart",
			stack: "Stack",
			tiled: "Tile"
		} },
		restore: { title: "Restore" },
		saveAsImage: {
			title: "Save as Image",
			lang: ["Right Click to Save Image"]
		}
	},
	series: { typeNames: {
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
	} },
	aria: {
		general: {
			withTitle: "This is a chart about \"{title}\"",
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
}, vg = {
	time: {
		month: [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月",
			"八月",
			"九月",
			"十月",
			"十一月",
			"十二月"
		],
		monthAbbr: [
			"1月",
			"2月",
			"3月",
			"4月",
			"5月",
			"6月",
			"7月",
			"8月",
			"9月",
			"10月",
			"11月",
			"12月"
		],
		dayOfWeek: [
			"星期日",
			"星期一",
			"星期二",
			"星期三",
			"星期四",
			"星期五",
			"星期六"
		],
		dayOfWeekAbbr: [
			"日",
			"一",
			"二",
			"三",
			"四",
			"五",
			"六"
		]
	},
	legend: { selector: {
		all: "全选",
		inverse: "反选"
	} },
	toolbox: {
		brush: { title: {
			rect: "矩形选择",
			polygon: "圈选",
			lineX: "横向选择",
			lineY: "纵向选择",
			keep: "保持选择",
			clear: "清除选择"
		} },
		dataView: {
			title: "数据视图",
			lang: [
				"数据视图",
				"关闭",
				"刷新"
			]
		},
		dataZoom: { title: {
			zoom: "区域缩放",
			back: "区域缩放还原"
		} },
		magicType: { title: {
			line: "切换为折线图",
			bar: "切换为柱状图",
			stack: "切换为堆叠",
			tiled: "切换为平铺"
		} },
		restore: { title: "还原" },
		saveAsImage: {
			title: "保存为图片",
			lang: ["右键另存为图片"]
		}
	},
	series: { typeNames: {
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
	} },
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
}, yg = "ZH", bg = "EN", xg = bg, Sg = {}, Cg = {}, wg = J.domSupported ? function() {
	return (document.documentElement.lang || navigator.language || navigator.browserLanguage || xg).toUpperCase().indexOf(yg) > -1 ? yg : xg;
}() : xg;
function Tg(e, t) {
	e = e.toUpperCase(), Cg[e] = new Jp(t), Sg[e] = t;
}
function Eg(e) {
	if (U(e)) {
		var t = Sg[e.toUpperCase()] || {};
		return e === yg || e === bg ? j(t) : M(j(t), j(Sg[xg]), !1);
	}
	return M(j(e), j(Sg[xg]), !1);
}
function Dg(e) {
	return Cg[e];
}
function Og() {
	return Cg[xg];
}
Tg(bg, _g), Tg(yg, vg);
//#endregion
//#region node_modules/echarts/lib/scale/break.js
var kg = null;
function Ag() {
	return kg;
}
function jg(e, t) {
	var n = Ag(), r = t.breakOption, i = t.breakParsed;
	return !i && n && (i = n.parseAxisBreakOption(r, e)), i;
}
function Mg(e) {
	var t = e.brk;
	return t ? t.breaks : [];
}
function Ng(e) {
	var t = e.brk;
	return t ? t.hasBreaks() : !1;
}
//#endregion
//#region node_modules/echarts/lib/util/time.js
var Pg = 1e3, Fg = Pg * 60, Ig = Fg * 60, Lg = Ig * 24, Rg = Lg * 365, zg = {
	year: /({yyyy}|{yy})/,
	month: /({MMMM}|{MMM}|{MM}|{M})/,
	day: /({dd}|{d})/,
	hour: /({HH}|{H}|{hh}|{h})/,
	minute: /({mm}|{m})/,
	second: /({ss}|{s})/,
	millisecond: /({SSS}|{S})/
}, Bg = {
	year: "{yyyy}",
	month: "{MMM}",
	day: "{d}",
	hour: "{HH}:{mm}",
	minute: "{HH}:{mm}",
	second: "{HH}:{mm}:{ss}",
	millisecond: "{HH}:{mm}:{ss} {SSS}"
}, Vg = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", Hg = "{yyyy}-{MM}-{dd}", Ug = {
	year: "{yyyy}",
	month: "{yyyy}-{MM}",
	day: Hg,
	hour: Hg + " " + Bg.hour,
	minute: Hg + " " + Bg.minute,
	second: Hg + " " + Bg.second,
	millisecond: Vg
}, Wg = [
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"millisecond"
], Gg = [
	"year",
	"half-year",
	"quarter",
	"month",
	"week",
	"half-week",
	"day",
	"half-day",
	"quarter-day",
	"hour",
	"minute",
	"second",
	"millisecond"
];
function Kg(e) {
	return !U(e) && !H(e) ? qg(e) : e;
}
function qg(e) {
	e ||= {};
	var t = {}, n = !0;
	return I(Wg, function(t) {
		n &&= e[t] == null;
	}), I(Wg, function(r, i) {
		var a = e[r];
		t[r] = {};
		for (var o = null, s = i; s >= 0; s--) {
			var c = Wg[s], l = W(a) && !V(a) ? a[c] : a, u = void 0;
			V(l) ? (u = l.slice(), o = u[0] || "") : U(l) ? (o = l, u = [o]) : (o == null ? o = Bg[r] : zg[c].test(o) || (o = t[c][c][0] + " " + o), u = [o], n && (u[1] = "{primary|" + o + "}")), t[r][c] = u;
		}
	}), t;
}
function Jg(e, t) {
	return e += "", "0000".substr(0, t - e.length) + e;
}
function Yg(e) {
	switch (e) {
		case "half-year":
		case "quarter": return "month";
		case "week":
		case "half-week": return "day";
		case "half-day":
		case "quarter-day": return "hour";
		default: return e;
	}
}
function Xg(e) {
	return e === Yg(e);
}
function Zg(e) {
	switch (e) {
		case "year":
		case "month": return "day";
		case "millisecond": return "millisecond";
		default: return "second";
	}
}
function Qg(e, t, n, r) {
	var i = sc(e), a = i[n_(n)](), o = i[r_(n)]() + 1, s = Math.floor((o - 1) / 3) + 1, c = i[i_(n)](), l = i["get" + (n ? "UTC" : "") + "Day"](), u = i[a_(n)](), d = (u - 1) % 12 + 1, f = i[o_(n)](), p = i[s_(n)](), m = i[c_(n)](), h = u >= 12 ? "pm" : "am", g = h.toUpperCase(), _ = (r instanceof Jp ? r : Dg(r || wg) || Og()).getModel("time"), v = _.get("month"), y = _.get("monthAbbr"), b = _.get("dayOfWeek"), x = _.get("dayOfWeekAbbr");
	return (t || "").replace(/{a}/g, h + "").replace(/{A}/g, g + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Jg(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, v[o - 1]).replace(/{MMM}/g, y[o - 1]).replace(/{MM}/g, Jg(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Jg(c, 2)).replace(/{d}/g, c + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, x[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Jg(u, 2)).replace(/{H}/g, u + "").replace(/{hh}/g, Jg(d + "", 2)).replace(/{h}/g, d + "").replace(/{mm}/g, Jg(f, 2)).replace(/{m}/g, f + "").replace(/{ss}/g, Jg(p, 2)).replace(/{s}/g, p + "").replace(/{SSS}/g, Jg(m, 3)).replace(/{S}/g, m + "");
}
function $g(e, t, n, r, i) {
	var a = null;
	if (U(n)) a = n;
	else if (H(n)) {
		var o = {
			time: e.time,
			level: e.time ? e.time.level : 0
		}, s = Ag();
		s && s.makeAxisLabelFormatterParamBreak(o, e.break), a = n(e.value, t, o);
	} else {
		var c = e.time;
		if (c) {
			var l = n[c.lowerTimeUnit][c.upperTimeUnit];
			a = l[Math.min(c.level, l.length - 1)] || "";
		} else {
			var u = e_(e.value, i);
			a = n[u][u][0];
		}
	}
	return Qg(new Date(e.value), a, i, r);
}
function e_(e, t) {
	var n = sc(e), r = n[r_(t)]() + 1, i = n[i_(t)](), a = n[a_(t)](), o = n[o_(t)](), s = n[s_(t)](), c = n[c_(t)]() === 0, l = c && s === 0, u = l && o === 0, d = u && a === 0, f = d && i === 1;
	return f && r === 1 ? "year" : f ? "month" : d ? "day" : u ? "hour" : l ? "minute" : c ? "second" : "millisecond";
}
function t_(e, t, n) {
	switch (t) {
		case "year": e[u_(n)](0);
		case "month": e[d_(n)](1);
		case "day": e[f_(n)](0);
		case "hour": e[p_(n)](0);
		case "minute": e[m_(n)](0);
		case "second": e[h_(n)](0);
	}
	return e;
}
function n_(e) {
	return e ? "getUTCFullYear" : "getFullYear";
}
function r_(e) {
	return e ? "getUTCMonth" : "getMonth";
}
function i_(e) {
	return e ? "getUTCDate" : "getDate";
}
function a_(e) {
	return e ? "getUTCHours" : "getHours";
}
function o_(e) {
	return e ? "getUTCMinutes" : "getMinutes";
}
function s_(e) {
	return e ? "getUTCSeconds" : "getSeconds";
}
function c_(e) {
	return e ? "getUTCMilliseconds" : "getMilliseconds";
}
function l_(e) {
	return e ? "setUTCFullYear" : "setFullYear";
}
function u_(e) {
	return e ? "setUTCMonth" : "setMonth";
}
function d_(e) {
	return e ? "setUTCDate" : "setDate";
}
function f_(e) {
	return e ? "setUTCHours" : "setHours";
}
function p_(e) {
	return e ? "setUTCMinutes" : "setMinutes";
}
function m_(e) {
	return e ? "setUTCSeconds" : "setSeconds";
}
function h_(e) {
	return e ? "setUTCMilliseconds" : "setMilliseconds";
}
//#endregion
//#region node_modules/echarts/lib/legacy/getTextRect.js
function g_(e, t, n, r, i, a, o, s) {
	return new ps({ style: {
		text: e,
		font: t,
		align: n,
		verticalAlign: r,
		padding: i,
		rich: a,
		overflow: o ? "truncate" : null,
		lineHeight: s
	} }).getBoundingRect();
}
//#endregion
//#region node_modules/echarts/lib/util/format.js
function __(e) {
	if (!mc(e)) return U(e) ? e : "-";
	var t = (e + "").split(".");
	return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function v_(e, t) {
	return e = (e || "").toLowerCase().replace(/-(.)/g, function(e, t) {
		return t.toUpperCase();
	}), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e;
}
var y_ = Te;
function b_(e, t, n) {
	var r = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
	function i(e) {
		return e && De(e) ? e : "-";
	}
	function a(e) {
		return vc(e);
	}
	var o = t === "time", s = e instanceof Date;
	if (o || s) {
		var c = o ? sc(e) : e;
		if (!isNaN(+c)) return Qg(c, r, n);
		if (s) return "-";
	}
	if (t === "ordinal") return pe(e) ? i(e) : me(e) && a(e) ? e + "" : "-";
	var l = pc(e);
	return a(l) ? __(l) : pe(e) ? i(e) : typeof e == "boolean" ? e + "" : "-";
}
var x_ = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g"
], S_ = function(e, t) {
	return "{" + e + (t ?? "") + "}";
};
function C_(e, t, n) {
	V(t) || (t = [t]);
	var r = t.length;
	if (!r) return "";
	for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
		var o = x_[a];
		e = e.replace(S_(o), S_(o, 0));
	}
	for (var s = 0; s < r; s++) for (var c = 0; c < i.length; c++) {
		var l = t[s][i[c]];
		e = e.replace(S_(x_[c], s), n ? gg(l) : l);
	}
	return e;
}
function w_(e, t) {
	var n = U(e) ? {
		color: e,
		extraCssText: t
	} : e || {}, r = n.color, i = n.type;
	t = n.extraCssText;
	var a = n.renderMode || "html";
	return r ? a === "html" ? i === "subItem" ? "<span style=\"display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:" + gg(r) + ";" + (t || "") + "\"></span>" : "<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:" + gg(r) + ";" + (t || "") + "\"></span>" : {
		renderMode: a,
		content: "{" + (n.markerId || "markerX") + "|}  ",
		style: i === "subItem" ? {
			width: 4,
			height: 4,
			borderRadius: 2,
			backgroundColor: r
		} : {
			width: 10,
			height: 10,
			borderRadius: 5,
			backgroundColor: r
		}
	} : "";
}
function T_(e, t, n) {
	(e === "week" || e === "month" || e === "quarter" || e === "half-year" || e === "year") && (e = "MM-dd\nyyyy");
	var r = sc(t), i = n ? "getUTC" : "get", a = r[i + "FullYear"](), o = r[i + "Month"]() + 1, s = r[i + "Date"](), c = r[i + "Hours"](), l = r[i + "Minutes"](), u = r[i + "Seconds"](), d = r[i + "Milliseconds"]();
	return e = e.replace("MM", Jg(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", Jg(a % 100 + "", 2)).replace("dd", Jg(s, 2)).replace("d", s).replace("hh", Jg(c, 2)).replace("h", c).replace("mm", Jg(l, 2)).replace("m", l).replace("ss", Jg(u, 2)).replace("s", u).replace("SSS", Jg(d, 3)), e;
}
function E_(e) {
	return e && e.charAt(0).toUpperCase() + e.substr(1);
}
function D_(e, t) {
	return t ||= "transparent", U(e) ? e : W(e) && e.colorStops && (e.colorStops[0] || {}).color || t;
}
function O_(e, t) {
	if (t === "_blank" || t === "blank") {
		var n = window.open();
		n.opener = null, n.location.href = e;
	} else window.open(e, t);
}
//#endregion
//#region node_modules/echarts/lib/util/layout.js
var k_ = I, A_ = [
	"left",
	"right",
	"top",
	"bottom",
	"width",
	"height"
], j_ = [[
	"width",
	"left",
	"right"
], [
	"height",
	"top",
	"bottom"
]];
function M_(e, t, n, r, i) {
	var a = 0, o = 0;
	r ??= Infinity, i ??= Infinity;
	var s = 0;
	t.eachChild(function(c, l) {
		var u = c.getBoundingRect(), d = t.childAt(l + 1), f = d && d.getBoundingRect(), p, m;
		if (e === "horizontal") {
			var h = u.width + (f ? -f.x + u.x : 0);
			p = a + h, p > r || c.newline ? (a = 0, p = h, o += s + n, s = u.height) : s = Math.max(s, u.height);
		} else {
			var g = u.height + (f ? -f.y + u.y : 0);
			m = o + g, m > i || c.newline ? (a += s + n, o = 0, m = g, s = u.width) : s = Math.max(s, u.width);
		}
		c.newline || (c.x = a, c.y = o, c.markRedraw(), e === "horizontal" ? a = p + n : o = m + n);
	});
}
var N_ = M_;
fe(M_, "vertical"), fe(M_, "horizontal");
function P_(e, t) {
	return {
		left: e.getShallow("left", t),
		top: e.getShallow("top", t),
		right: e.getShallow("right", t),
		bottom: e.getShallow("bottom", t),
		width: e.getShallow("width", t),
		height: e.getShallow("height", t)
	};
}
function F_(e, t) {
	var n = B_(e, t, { enableLayoutOnlyByCenter: !0 }), r = e.getBoxLayoutParams(), i, a;
	if (n.type === z_.point) a = n.refPoint, i = L_(r, {
		width: t.getWidth(),
		height: t.getHeight()
	});
	else {
		var o = e.get("center"), s = V(o) ? o : [o, o];
		i = L_(r, n.refContainer), a = n.boxCoordFrom === 2 ? n.refPoint : [Hs(s[0], i.width) + i.x, Hs(s[1], i.height) + i.y];
	}
	return {
		viewRect: i,
		center: a
	};
}
function I_(e, t) {
	var n = F_(e, t), r = n.viewRect, i = n.center, a = e.get("radius");
	V(a) || (a = [0, a]);
	var o = Hs(r.width, t.getWidth()), s = Hs(r.height, t.getHeight()), c = Math.min(o, s), l = Hs(a[0], c / 2), u = Hs(a[1], c / 2);
	return {
		cx: i[0],
		cy: i[1],
		r0: l,
		r: u,
		viewRect: r
	};
}
function L_(e, t, n) {
	n = y_(n || 0);
	var r = t.width, i = t.height, a = Hs(e.left, r), o = Hs(e.top, i), s = Hs(e.right, r), c = Hs(e.bottom, i), l = Hs(e.width, r), u = Hs(e.height, i), d = n[2] + n[0], f = n[1] + n[3], p = e.aspect;
	switch (isNaN(l) && (l = r - s - f - a), isNaN(u) && (u = i - c - d - o), p != null && (isNaN(l) && isNaN(u) && (p > r / i ? l = r * .8 : u = i * .8), isNaN(l) && (l = p * u), isNaN(u) && (u = l / p)), isNaN(a) && (a = r - s - l - f), isNaN(o) && (o = i - c - u - d), e.left || e.right) {
		case "center":
			a = r / 2 - l / 2 - n[3];
			break;
		case "right": a = r - l - f;
	}
	switch (e.top || e.bottom) {
		case "middle":
		case "center":
			o = i / 2 - u / 2 - n[0];
			break;
		case "bottom": o = i - u - d;
	}
	a ||= 0, o ||= 0, isNaN(l) && (l = r - f - a - (s || 0)), isNaN(u) && (u = i - d - o - (c || 0));
	var m = new X((t.x || 0) + a + n[3], (t.y || 0) + o + n[0], l, u);
	return m.margin = n, m;
}
function R_(e, t, n) {
	var r = e.getShallow("preserveAspect", !0);
	if (!r) return t;
	var i = t.width / t.height;
	if (Math.abs(Math.atan(n) - Math.atan(i)) < 1e-9) return t;
	var a = e.getShallow("preserveAspectAlign", !0), o = e.getShallow("preserveAspectVerticalAlign", !0), s = {
		width: t.width,
		height: t.height
	}, c = r === "cover";
	return i > n && !c || i < n && c ? (s.width = t.height * n, a === "left" ? s.left = 0 : a === "right" ? s.right = 0 : s.left = "center") : (s.height = t.width / n, o === "top" ? s.top = 0 : o === "bottom" ? s.bottom = 0 : s.top = "middle"), L_(s, t);
}
var z_ = {
	rect: 1,
	point: 2
};
function B_(e, t, n) {
	var r, i, a, o = e.boxCoordinateSystem, s;
	if (o) {
		var c = Ih(e), l = c.coord, u = c.from;
		if (o.dataToLayout) {
			a = z_.rect, s = u;
			var d = o.dataToLayout(l);
			r = d.contentRect || d.rect;
		} else n && n.enableLayoutOnlyByCenter && o.dataToPoint && (a = z_.point, s = u, i = o.dataToPoint(l));
	}
	return a ??= z_.rect, a === z_.rect && (r ||= {
		x: 0,
		y: 0,
		width: t.getWidth(),
		height: t.getHeight()
	}, i = [r.x + r.width / 2, r.y + r.height / 2]), {
		type: a,
		refContainer: r,
		refPoint: i,
		boxCoordFrom: s
	};
}
function V_(e, t, n, r, i, a) {
	var o = !i || !i.hv || i.hv[0], s = !i || !i.hv || i.hv[1], c = i && i.boundingMode || "all";
	if (a ||= e, a.x = e.x, a.y = e.y, !o && !s) return !1;
	var l;
	if (c === "raw") l = e.type === "group" ? new X(0, 0, +t.width || 0, +t.height || 0) : e.getBoundingRect();
	else if (l = e.getBoundingRect(), e.needLocalTransform()) {
		var u = e.getLocalTransform();
		l = l.clone(), l.applyTransform(u);
	}
	var d = L_(P({
		width: l.width,
		height: l.height
	}, t), n, r), f = o ? d.x - l.x : 0, p = s ? d.y - l.y : 0;
	return c === "raw" ? (a.x = f, a.y = p) : (a.x += f, a.y += p), a === e && e.markRedraw(), !0;
}
function H_(e) {
	var t = e.layoutMode || e.constructor.layoutMode;
	return W(t) ? t : t ? { type: t } : null;
}
function U_(e, t, n) {
	var r = n && n.ignoreSize;
	!V(r) && (r = [r, r]);
	var i = o(j_[0], 0), a = o(j_[1], 1);
	c(j_[0], e, i), c(j_[1], e, a);
	function o(n, i) {
		var a = {}, o = 0, c = {}, l = 0, u = 2;
		if (k_(n, function(t) {
			c[t] = e[t];
		}), k_(n, function(e) {
			q(t, e) && (a[e] = c[e] = t[e]), s(a, e) && o++, s(c, e) && l++;
		}), r[i]) return s(t, n[1]) ? c[n[2]] = null : s(t, n[2]) && (c[n[1]] = null), c;
		if (l === u || !o) return c;
		if (o >= u) return a;
		for (var d = 0; d < n.length; d++) {
			var f = n[d];
			if (!q(a, f) && q(e, f)) {
				a[f] = e[f];
				break;
			}
		}
		return a;
	}
	function s(e, t) {
		return e[t] != null && e[t] !== "auto";
	}
	function c(e, t, n) {
		k_(e, function(e) {
			t[e] = n[e];
		});
	}
}
function W_(e) {
	return G_({}, e);
}
function G_(e, t) {
	return t && e && k_(A_, function(n) {
		q(t, n) && (e[n] = t[n]);
	}), e;
}
//#endregion
//#region node_modules/echarts/lib/model/Component.js
var K_ = Yc(), q_ = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return i.uid = $h("ec_cpt_model"), i;
	}
	return t.prototype.init = function(e, t, n) {
		this.mergeDefaultAndTheme(e, n);
	}, t.prototype.mergeDefaultAndTheme = function(e, t) {
		var n = H_(this), r = n ? W_(e) : {};
		M(e, t.getTheme().get(this.mainType)), M(e, this.getDefaultOption()), n && U_(e, r, n);
	}, t.prototype.mergeOption = function(e, t) {
		M(this.option, e, !0);
		var n = H_(this);
		n && U_(this.option, e, n);
	}, t.prototype.optionUpdated = function(e, t) {}, t.prototype.getDefaultOption = function() {
		var e = this.constructor;
		if (!Je(e)) return e.defaultOption;
		var t = K_(this);
		if (!t.defaultOption) {
			for (var n = [], r = e; r;) {
				var i = r.prototype.defaultOption;
				i && n.push(i), r = r.superClass;
			}
			for (var a = {}, o = n.length - 1; o >= 0; o--) a = M(a, n[o], !0);
			t.defaultOption = a;
		}
		return t.defaultOption;
	}, t.prototype.getReferringComponents = function(e, t) {
		var n = e + "Index", r = e + "Id";
		return tl(this.ecModel, e, {
			index: this.get(n, !0),
			id: this.get(r, !0)
		}, t);
	}, t.prototype.getBoxLayoutParams = function() {
		return P_(this, !1);
	}, t.prototype.getZLevelKey = function() {
		return "";
	}, t.prototype.setZLevel = function(e) {
		this.option.zlevel = e;
	}, t.protoInitialize = function() {
		var e = t.prototype;
		e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
	}(), t;
}(Jp);
Ze(q_, Jp), nt(q_), eg(q_), tg(q_, J_);
function J_(e) {
	var t = [];
	return I(q_.getClassesByMainType(e), function(e) {
		t = t.concat(e.dependencies || e.prototype.dependencies || []);
	}), t = L(t, function(e) {
		return Ke(e).main;
	}), e !== "dataset" && F(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/palette.js
var Y_ = Yc();
Yc();
var X_ = function() {
	function e() {}
	return e.prototype.getColorFromPalette = function(e, t, n) {
		var r = Oc(this.get("color", !0)), i = this.get("colorLayer", !0);
		return Q_(this, Y_, r, i, e, t, n);
	}, e.prototype.clearColorPalette = function() {
		$_(this, Y_);
	}, e;
}();
function Z_(e, t) {
	for (var n = e.length, r = 0; r < n; r++) if (e[r].length > t) return e[r];
	return e[n - 1];
}
function Q_(e, t, n, r, i, a, o) {
	a ||= e;
	var s = t(a), c = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
	if (l.hasOwnProperty(i)) return l[i];
	var u = o == null || !r ? n : Z_(r, o);
	if (u ||= n, u && u.length) {
		var d = u[c];
		return i && (l[i] = d), s.paletteIdx = (c + 1) % u.length, d;
	}
}
function $_(e, t) {
	t(e).paletteIdx = 0, t(e).paletteNameMap = {};
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/dataFormat.js
var ev = /\{@(.+?)\}/g, tv = function() {
	function e() {}
	return e.prototype.getDataParams = function(e, t) {
		var n = this.getData(t), r = this.getRawValue(e, t), i = n.getRawIndex(e), a = n.getName(e), o = n.getRawDataItem(e), s = n.getItemVisual(e, "style"), c = s && s[n.getItemVisual(e, "drawType") || "fill"], l = s && s.stroke, u = this.mainType, d = u === "series", f = n.userOutput && n.userOutput.get();
		return {
			componentType: u,
			componentSubType: this.subType,
			componentIndex: this.componentIndex,
			seriesType: d ? this.subType : null,
			seriesIndex: this.seriesIndex,
			seriesId: d ? this.id : null,
			seriesName: d ? this.name : null,
			name: a,
			dataIndex: i,
			data: o,
			dataType: t,
			value: r,
			color: c,
			borderColor: l,
			dimensionNames: f ? f.fullDimensions : null,
			encode: f ? f.encode : null,
			$vars: [
				"seriesName",
				"name",
				"value"
			]
		};
	}, e.prototype.getFormattedLabel = function(e, t, n, r, i, a) {
		t ||= "normal";
		var o = this.getData(n), s = this.getDataParams(e, n);
		if (a && (s.value = a.interpolatedValue), r != null && V(s.value) && (s.value = s.value[r]), i ||= o.getItemModel(e).get(t === "normal" ? ["label", "formatter"] : [
			t,
			"label",
			"formatter"
		]), H(i)) return s.status = t, s.dimensionIndex = r, i(s);
		if (U(i)) return C_(i, s).replace(ev, function(t, n) {
			var r = n.length, i = n;
			i.charAt(0) === "[" && i.charAt(r - 1) === "]" && (i = +i.slice(1, r - 1));
			var s = Im(o, e, i);
			if (a && V(a.interpolatedValue)) {
				var c = o.getDimensionIndex(i);
				c >= 0 && (s = a.interpolatedValue[c]);
			}
			return s == null ? "" : s + "";
		});
	}, e.prototype.getRawValue = function(e, t) {
		return Im(this.getData(t), e);
	}, e.prototype.formatTooltip = function(e, t, n) {}, e;
}();
function nv(e) {
	var t, n;
	return W(e) ? e.type && (n = e) : t = e, {
		text: t,
		frag: n
	};
}
//#endregion
//#region node_modules/echarts/lib/core/task.js
function rv(e) {
	return new iv(e);
}
var iv = function() {
	function e(e) {
		e ||= {}, this._reset = e.reset, this._plan = e.plan, this._count = e.count, this._onDirty = e.onDirty, this._dirty = !0;
	}
	return e.prototype.perform = function(e) {
		var t = this._upstream, n = e && e.skip;
		if (this._dirty && t) {
			var r = this.context;
			r.data = r.outputData = t.context.outputData;
		}
		this.__pipeline && (this.__pipeline.currentTask = this);
		var i;
		this._plan && !n && (i = this._plan(this.context));
		var a = l(this._modBy), o = this._modDataCount || 0, s = l(e && e.modBy), c = e && e.modDataCount || 0;
		(a !== s || o !== c) && (i = "reset");
		function l(e) {
			return !(e >= 1) && (e = 1), e;
		}
		var u;
		(this._dirty || i === "reset") && (this._dirty = !1, u = this._doReset(n)), this._modBy = s, this._modDataCount = c;
		var d = e && e.step;
		if (this._dueEnd = t ? t._outputDueEnd : this._count ? this._count(this.context) : Infinity, this._progress) {
			var f = this._dueIndex, p = Math.min(d == null ? Infinity : this._dueIndex + d, this._dueEnd);
			if (!n && (u || f < p)) {
				var m = this._progress;
				if (V(m)) for (var h = 0; h < m.length; h++) this._doProgress(m[h], f, p, s, c);
				else this._doProgress(m, f, p, s, c);
			}
			this._dueIndex = p;
			var g = this._settedOutputEnd == null ? p : this._settedOutputEnd;
			this._outputDueEnd = g;
		} else this._dueIndex = this._outputDueEnd = this._settedOutputEnd == null ? this._dueEnd : this._settedOutputEnd;
		return this.unfinished();
	}, e.prototype.dirty = function() {
		this._dirty = !0, this._onDirty && this._onDirty(this.context);
	}, e.prototype._doProgress = function(e, t, n, r, i) {
		av.reset(t, n, r, i), this._callingProgress = e, this._callingProgress({
			start: t,
			end: n,
			count: n - t,
			next: av.next
		}, this.context);
	}, e.prototype._doReset = function(e) {
		this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
		var t, n;
		!e && this._reset && (t = this._reset(this.context), t && t.progress && (n = t.forceFirstProgress, t = t.progress), V(t) && !t.length && (t = null)), this._progress = t, this._modBy = this._modDataCount = null;
		var r = this._downstream;
		return r && r.dirty(), n;
	}, e.prototype.unfinished = function() {
		return this._progress && this._dueIndex < this._dueEnd;
	}, e.prototype.pipe = function(e) {
		(this._downstream !== e || this._dirty) && (this._downstream = e, e._upstream = this, e.dirty());
	}, e.prototype.dispose = function() {
		this._disposed ||= (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, !0);
	}, e.prototype.getUpstream = function() {
		return this._upstream;
	}, e.prototype.getDownstream = function() {
		return this._downstream;
	}, e.prototype.setOutputEnd = function(e) {
		this._outputDueEnd = this._settedOutputEnd = e;
	}, e;
}(), av = function() {
	var e, t, n, r, i, a = { reset: function(c, l, u, d) {
		t = c, e = l, n = u, r = d, i = Math.ceil(r / n), a.next = n > 1 && r > 0 ? s : o;
	} };
	return a;
	function o() {
		return t < e ? t++ : null;
	}
	function s() {
		var a = t % i * n + Math.ceil(t / i), o = t >= e ? null : a < r ? a : t;
		return t++, o;
	}
}(), ov = function() {
	function e() {}
	return e.prototype.getRawData = function() {
		throw Error("not supported");
	}, e.prototype.getRawDataItem = function(e) {
		throw Error("not supported");
	}, e.prototype.cloneRawData = function() {}, e.prototype.getDimensionInfo = function(e) {}, e.prototype.cloneAllDimensionInfo = function() {}, e.prototype.count = function() {}, e.prototype.retrieveValue = function(e, t) {}, e.prototype.retrieveValueFromItem = function(e, t) {}, e.prototype.convertValue = function(e, t) {
		return Um(e, t);
	}, e;
}();
function sv(e, t) {
	var n = new ov(), r = e.data, i = n.sourceFormat = e.sourceFormat, a = e.startIndex;
	e.seriesLayoutBy !== "column" && wc("");
	var o = [], s = {}, c = e.dimensionsDefine;
	if (c) I(c, function(e, t) {
		var n = e.name, r = {
			index: t,
			name: n,
			displayName: e.displayName
		};
		o.push(r), n != null && (q(s, n) && wc(""), s[n] = r);
	});
	else for (var l = 0; l < e.dimensionsDetectedCount; l++) o.push({ index: l });
	var u = Om(i, Pl);
	t.__isBuiltIn && (n.getRawDataItem = function(e) {
		return u(r, a, o, e);
	}, n.getRawData = B(cv, null, e)), n.cloneRawData = B(lv, null, e), n.count = B(jm(i, Pl), null, r, a, o);
	var d = Pm(i);
	n.retrieveValue = function(e, t) {
		return f(u(r, a, o, e), t);
	};
	var f = n.retrieveValueFromItem = function(e, t) {
		if (e != null) {
			var n = o[t];
			if (n) return d(e, t, n.name);
		}
	};
	return n.getDimensionInfo = B(uv, null, o, s), n.cloneAllDimensionInfo = B(dv, null, o), n;
}
function cv(e) {
	var t = e.sourceFormat;
	return gv(t) || wc(""), e.data;
}
function lv(e) {
	var t = e.sourceFormat, n = e.data;
	if (gv(t) || wc(""), t === "arrayRows") {
		for (var r = [], i = 0, a = n.length; i < a; i++) r.push(n[i].slice());
		return r;
	}
	if (t === "objectRows") {
		for (var r = [], i = 0, a = n.length; i < a; i++) r.push(N({}, n[i]));
		return r;
	}
}
function uv(e, t, n) {
	if (n != null) {
		if (me(n) || !isNaN(n) && !q(t, n)) return e[n];
		if (q(t, n)) return t[n];
	}
}
function dv(e) {
	return j(e);
}
var fv = K();
function pv(e) {
	e = j(e);
	var t = e.type, n = "";
	t || wc(n);
	var r = t.split(":");
	r.length !== 2 && wc(n);
	var i = !1;
	r[0] === "echarts" && (t = r[1], i = !0), e.__isBuiltIn = i, fv.set(t, e);
}
function mv(e, t, n) {
	var r = Oc(e), i = r.length;
	i || wc("");
	for (var a = 0, o = i; a < o; a++) {
		var s = r[a];
		t = hv(s, t, n, i === 1 ? null : a), a !== o - 1 && (t.length = Math.max(t.length, 1));
	}
	return t;
}
function hv(e, t, n, r) {
	var i = "";
	t.length || wc(i), W(e) || wc(i);
	var a = e.type, o = fv.get(a);
	o || wc(i);
	var s = L(t, function(e) {
		return sv(e, o);
	});
	return L(Oc(o.transform({
		upstream: s[0],
		upstreamList: s,
		config: j(e.config)
	})), function(e, n) {
		var r = "";
		W(e) || wc(r), e.data || wc(r), gv(fm(e.data)) || wc(r);
		var i, a = t[0];
		if (a && n === 0 && !e.dimensions) {
			var o = a.startIndex;
			o && (e.data = a.data.slice(0, o).concat(e.data)), i = {
				seriesLayoutBy: Pl,
				sourceHeader: o,
				dimensions: a.metaRawOption.dimensions
			};
		} else i = {
			seriesLayoutBy: Pl,
			sourceHeader: 0,
			dimensions: e.dimensions
		};
		return lm(e.data, i, null);
	});
}
function gv(e) {
	return e === "arrayRows" || e === "objectRows";
}
//#endregion
//#region node_modules/echarts/lib/data/helper/sourceManager.js
var _v = function() {
	function e(e) {
		this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = e;
	}
	return e.prototype.dirty = function() {
		this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
	}, e.prototype._setLocalSource = function(e, t) {
		this._sourceList = e, this._upstreamSignList = t, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
	}, e.prototype._getVersionSign = function() {
		return this._sourceHost.uid + "_" + this._versionSignBase;
	}, e.prototype.prepareSource = function() {
		this._isDirty() && (this._createSource(), this._dirty = !1);
	}, e.prototype._createSource = function() {
		this._setLocalSource([], []);
		var e = this._sourceHost, t = this._getUpstreamSourceManagers(), n = !!t.length, r, i;
		if (yv(e)) {
			var a = e, o = void 0, s = void 0, c = void 0;
			if (n) {
				var l = t[0];
				l.prepareSource(), c = l.getSource(), o = c.data, s = c.sourceFormat, i = [l._getVersionSign()];
			} else o = a.get("data", !0), s = ge(o) ? Ml : Ol, i = [];
			var u = this._getSourceMetaRawOption() || {}, d = c && c.metaRawOption || {}, f = G(u.seriesLayoutBy, d.seriesLayoutBy) || null, p = G(u.sourceHeader, d.sourceHeader), m = G(u.dimensions, d.dimensions);
			r = f !== d.seriesLayoutBy || !!p != !!d.sourceHeader || m ? [lm(o, {
				seriesLayoutBy: f,
				sourceHeader: p,
				dimensions: m
			}, s)] : [];
		} else {
			var h = e;
			if (n) {
				var g = this._applyTransform(t);
				r = g.sourceList, i = g.upstreamSignList;
			} else r = [lm(h.get("source", !0), this._getSourceMetaRawOption(), null)], i = [];
		}
		this._setLocalSource(r, i);
	}, e.prototype._applyTransform = function(e) {
		var t = this._sourceHost, n = t.get("transform", !0), r = t.get("fromTransformResult", !0);
		r != null && e.length !== 1 && bv("");
		var i, a = [], o = [];
		return I(e, function(e) {
			e.prepareSource();
			var t = e.getSource(r || 0);
			r != null && !t && bv(""), a.push(t), o.push(e._getVersionSign());
		}), n ? i = mv(n, a, { datasetIndex: t.componentIndex }) : r != null && (i = [dm(a[0])]), {
			sourceList: i,
			upstreamSignList: o
		};
	}, e.prototype._isDirty = function() {
		if (this._dirty) return !0;
		for (var e = this._getUpstreamSourceManagers(), t = 0; t < e.length; t++) {
			var n = e[t];
			if (n._isDirty() || this._upstreamSignList[t] !== n._getVersionSign()) return !0;
		}
	}, e.prototype.getSource = function(e) {
		e ||= 0;
		var t = this._sourceList[e];
		if (!t) {
			var n = this._getUpstreamSourceManagers();
			return n[0] && n[0].getSource(e);
		}
		return t;
	}, e.prototype.getSharedDataStore = function(e) {
		var t = e.makeStoreSchema();
		return this._innerGetDataStore(t.dimensions, e.source, t.hash);
	}, e.prototype._innerGetDataStore = function(e, t, n) {
		var r = 0, i = this._storeList, a = i[r];
		a ||= i[r] = {};
		var o = a[n];
		if (!o) {
			var s = this._getUpstreamSourceManagers()[0];
			yv(this._sourceHost) && s ? o = s._innerGetDataStore(e, t, n) : (o = new rh(), o.initData(new wm(t, e.length), e)), a[n] = o;
		}
		return o;
	}, e.prototype._getUpstreamSourceManagers = function() {
		var e = this._sourceHost;
		if (yv(e)) {
			var t = rm(e);
			return t ? [t.getSourceManager()] : [];
		}
		return L(im(e), function(e) {
			return e.getSourceManager();
		});
	}, e.prototype._getSourceMetaRawOption = function() {
		var e = this._sourceHost, t, n, r;
		if (yv(e)) t = e.get("seriesLayoutBy", !0), n = e.get("sourceHeader", !0), r = e.get("dimensions", !0);
		else if (!this._getUpstreamSourceManagers().length) {
			var i = e;
			t = i.get("seriesLayoutBy", !0), n = i.get("sourceHeader", !0), r = i.get("dimensions", !0);
		}
		return {
			seriesLayoutBy: t,
			sourceHeader: n,
			dimensions: r
		};
	}, e;
}();
function vv(e) {
	e.option.transform && ke(e.option.transform);
}
function yv(e) {
	return e.mainType === "series";
}
function bv(e) {
	throw Error(e);
}
//#endregion
//#region node_modules/echarts/lib/visual/tokens.js
var Q = {
	color: {},
	darkColor: {},
	size: {}
}, xv = Q.color = {
	theme: [
		"#5070dd",
		"#b6d634",
		"#505372",
		"#ff994d",
		"#0ca8df",
		"#ffd10a",
		"#fb628b",
		"#785db0",
		"#3fbe95"
	],
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
for (var Sv in N(xv, {
	primary: xv.neutral80,
	secondary: xv.neutral70,
	tertiary: xv.neutral60,
	quaternary: xv.neutral50,
	disabled: xv.neutral20,
	border: xv.neutral30,
	borderTint: xv.neutral20,
	borderShade: xv.neutral40,
	background: xv.neutral05,
	backgroundTint: "rgba(234,237,245,0.5)",
	backgroundTransparent: "rgba(255,255,255,0)",
	backgroundShade: xv.neutral10,
	shadow: "rgba(0,0,0,0.2)",
	shadowTint: "rgba(129,130,136,0.2)",
	axisLine: xv.neutral70,
	axisLineTint: xv.neutral40,
	axisTick: xv.neutral70,
	axisTickMinor: xv.neutral60,
	axisLabel: xv.neutral70,
	axisSplitLine: xv.neutral15,
	axisMinorSplitLine: xv.neutral05
}), xv) if (xv.hasOwnProperty(Sv)) {
	var Cv = xv[Sv];
	Sv === "theme" ? Q.darkColor.theme = xv.theme.slice() : Sv === "highlight" ? Q.darkColor.highlight = "rgba(255,231,130,0.4)" : Sv.indexOf("accent") === 0 ? Q.darkColor[Sv] = mi(Cv, null, function(e) {
		return e * .5;
	}, function(e) {
		return Math.min(1, 1.3 - e);
	}) : Q.darkColor[Sv] = mi(Cv, null, function(e) {
		return e * .9;
	}, function(e) {
		return 1 - e ** 1.5;
	});
}
Q.size = {
	xxs: 2,
	xs: 5,
	s: 10,
	m: 15,
	l: 20,
	xl: 30,
	xxl: 40,
	xxxl: 50
};
//#endregion
//#region node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var wv = "line-height:1";
function Tv(e) {
	var t = e.lineHeight;
	return t == null ? wv : "line-height:" + gg(t + "") + "px";
}
function Ev(e, t) {
	var n = e.color || Q.color.tertiary, r = e.fontSize || 12, i = e.fontWeight || "400", a = e.color || Q.color.secondary, o = e.fontSize || 14, s = e.fontWeight || "900";
	return t === "html" ? {
		nameStyle: "font-size:" + gg(r + "") + "px;color:" + gg(n) + ";font-weight:" + gg(i + ""),
		valueStyle: "font-size:" + gg(o + "") + "px;color:" + gg(a) + ";font-weight:" + gg(s + "")
	} : {
		nameStyle: {
			fontSize: r,
			fill: n,
			fontWeight: i
		},
		valueStyle: {
			fontSize: o,
			fill: a,
			fontWeight: s
		}
	};
}
var Dv = [
	0,
	10,
	20,
	30
], Ov = [
	"",
	"\n",
	"\n\n",
	"\n\n\n"
];
function kv(e, t) {
	return t.type = e, t;
}
function Av(e) {
	return e.type === "section";
}
function jv(e) {
	return Av(e) ? Nv : Pv;
}
function Mv(e) {
	if (Av(e)) {
		var t = 0, n = e.blocks.length, r = n > 1 || n > 0 && !e.noHeader;
		return I(e.blocks, function(e) {
			var n = Mv(e);
			n >= t && (t = n + +(r && (!n || Av(e) && !e.noHeader)));
		}), t;
	}
	return 0;
}
function Nv(e, t, n, r) {
	var i = t.noHeader, a = Iv(Mv(t)), o = [], s = t.blocks || [];
	Ee(!s || V(s)), s ||= [];
	var c = e.orderMode;
	if (t.sortBlocks && c) {
		s = s.slice();
		var l = {
			valueAsc: "asc",
			valueDesc: "desc"
		};
		if (q(l, c)) {
			var u = new Gm(l[c], null);
			s.sort(function(e, t) {
				return u.evaluate(e.sortParam, t.sortParam);
			});
		} else c === "seriesDesc" && s.reverse();
	}
	I(s, function(n, i) {
		var s = t.valueFormatter, c = jv(n)(s ? N(N({}, e), { valueFormatter: s }) : e, n, i > 0 ? a.html : 0, r);
		c != null && o.push(c);
	});
	var d = e.renderMode === "richText" ? o.join(a.richText) : Lv(r, o.join(""), i ? n : a.html);
	if (i) return d;
	var f = b_(t.header, "ordinal", e.useUTC), p = Ev(r, e.renderMode).nameStyle, m = Tv(r);
	return e.renderMode === "richText" ? Bv(e, f, p) + a.richText + d : Lv(r, "<div style=\"" + p + ";" + m + ";\">" + gg(f) + "</div>" + d, n);
}
function Pv(e, t, n, r) {
	var i = e.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, c = t.name, l = e.useUTC, u = t.valueFormatter || e.valueFormatter || function(e) {
		return e = V(e) ? e : [e], L(e, function(e, t) {
			return b_(e, V(p) ? p[t] : p, l);
		});
	};
	if (!(a && o)) {
		var d = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || Q.color.secondary, i), f = a ? "" : b_(c, "ordinal", l), p = t.valueType, m = o ? [] : u(t.value, t.rawDataIndex), h = !s || !a, g = !s && a, _ = Ev(r, i), v = _.nameStyle, y = _.valueStyle;
		return i === "richText" ? (s ? "" : d) + (a ? "" : Bv(e, f, v)) + (o ? "" : Vv(e, m, h, g, y)) : Lv(r, (s ? "" : d) + (a ? "" : Rv(f, !s, v)) + (o ? "" : zv(m, h, g, y)), n);
	}
}
function Fv(e, t, n, r, i, a) {
	if (e) return jv(e)({
		useUTC: i,
		renderMode: n,
		orderMode: r,
		markupStyleCreator: t,
		valueFormatter: e.valueFormatter
	}, e, 0, a);
}
function Iv(e) {
	return {
		html: Dv[e],
		richText: Ov[e]
	};
}
function Lv(e, t, n) {
	var r = "<div style=\"clear:both\"></div>", i = "margin: " + n + "px 0 0", a = Tv(e);
	return "<div style=\"" + i + ";" + a + ";\">" + t + r + "</div>";
}
function Rv(e, t, n) {
	var r = t ? "margin-left:2px" : "";
	return "<span style=\"" + n + ";" + r + "\">" + gg(e) + "</span>";
}
function zv(e, t, n, r) {
	var i = t ? "float:right;margin-left:" + (n ? "10px" : "20px") : "";
	return e = V(e) ? e : [e], "<span style=\"" + i + ";" + r + "\">" + L(e, function(e) {
		return gg(e);
	}).join("&nbsp;&nbsp;") + "</span>";
}
function Bv(e, t, n) {
	return e.markupStyleCreator.wrapRichTextStyle(t, n);
}
function Vv(e, t, n, r, i) {
	var a = [i], o = r ? 10 : 20;
	return n && a.push({
		padding: [
			0,
			0,
			0,
			o
		],
		align: "right"
	}), e.markupStyleCreator.wrapRichTextStyle(V(t) ? t.join("  ") : t, a);
}
function Hv(e, t) {
	var n = e.getData().getItemVisual(t, "style")[e.visualDrawType];
	return D_(n);
}
function Uv(e, t) {
	return e.get("padding") ?? (t === "richText" ? [8, 10] : 10);
}
var Wv = function() {
	function e() {
		this.richTextStyles = {}, this._nextStyleNameId = hc();
	}
	return e.prototype._generateStyleName = function() {
		return "__EC_aUTo_" + this._nextStyleNameId++;
	}, e.prototype.makeTooltipMarker = function(e, t, n) {
		var r = n === "richText" ? this._generateStyleName() : null, i = w_({
			color: t,
			type: e,
			renderMode: n,
			markerId: r
		});
		return U(i) ? i : (this.richTextStyles[r] = i.style, i.content);
	}, e.prototype.wrapRichTextStyle = function(e, t) {
		var n = {};
		V(t) ? I(t, function(e) {
			return N(n, e);
		}) : N(n, t);
		var r = this._generateStyleName();
		return this.richTextStyles[r] = n, "{" + r + "|" + e + "}";
	}, e;
}();
//#endregion
//#region node_modules/echarts/lib/component/tooltip/seriesFormatTooltip.js
function Gv(e) {
	var t = e.series, n = e.dataIndex, r = e.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(n), c = V(s), l = Hv(t, n), u, d, f, p;
	if (o > 1 || c && !o) {
		var m = Kv(s, t, n, a, l);
		u = m.inlineValues, d = m.inlineValueTypes, f = m.blocks, p = m.inlineValues[0];
	} else if (o) {
		var h = i.getDimensionInfo(a[0]);
		p = u = Im(i, n, a[0]), d = h.type;
	} else p = u = c ? s[0] : s;
	var g = Uc(t), _ = g && t.name || "", v = i.getName(n), y = r ? _ : v;
	return kv("section", {
		header: _,
		noHeader: r || !g,
		sortParam: p,
		blocks: [kv("nameValue", {
			markerType: "item",
			markerColor: l,
			name: y,
			noName: !De(y),
			value: u,
			valueType: d,
			rawDataIndex: i.getRawIndex(n)
		})].concat(f || [])
	});
}
function Kv(e, t, n, r, i) {
	var a = t.getData(), o = R(e, function(e, t, n) {
		var r = a.getDimensionInfo(n);
		return e ||= r && r.tooltip !== !1 && r.displayName != null;
	}, !1), s = [], c = [], l = [];
	r.length ? I(r, function(e) {
		u(Im(a, n, e), e);
	}) : I(e, u);
	function u(e, t) {
		var n = a.getDimensionInfo(t);
		n && n.otherDims.tooltip !== !1 && (o ? l.push(kv("nameValue", {
			markerType: "subItem",
			markerColor: i,
			name: n.displayName,
			value: e,
			valueType: n.type
		})) : (s.push(e), c.push(n.type)));
	}
	return {
		inlineValues: s,
		inlineValueTypes: c,
		blocks: l
	};
}
//#endregion
//#region node_modules/echarts/lib/model/Series.js
var qv = Yc();
function Jv(e, t) {
	return e.getName(t) || e.getId(t);
}
var Yv = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t._selectedDataIndicesMap = {}, t;
	}
	return t.prototype.init = function(e, t, n) {
		this.seriesIndex = this.componentIndex, this.dataTask = rv({
			count: Qv,
			reset: $v
		}), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(e, n), (qv(this).sourceManager = new _v(this)).prepareSource();
		var r = this.getInitialData(e, n);
		ty(r, this), this.dataTask.context.data = r, qv(this).dataBeforeProcessed = r, Xv(this), this._initSelectedMapFromData(r);
	}, t.prototype.mergeDefaultAndTheme = function(e, t) {
		var n = H_(this), r = n ? W_(e) : {}, i = this.subType;
		q_.hasClass(i) && (i += "Series"), M(e, t.getTheme().get(this.subType)), M(e, this.getDefaultOption()), kc(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && U_(e, r, n);
	}, t.prototype.mergeOption = function(e, t) {
		e = M(this.option, e, !0), this.fillDataTextStyle(e.data);
		var n = H_(this);
		n && U_(this.option, e, n);
		var r = qv(this).sourceManager;
		r.dirty(), r.prepareSource();
		var i = this.getInitialData(e, t);
		ty(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, qv(this).dataBeforeProcessed = i, Xv(this), this._initSelectedMapFromData(i);
	}, t.prototype.fillDataTextStyle = function(e) {
		if (e && !ge(e)) for (var t = ["show"], n = 0; n < e.length; n++) e[n] && e[n].label && kc(e[n], "label", t);
	}, t.prototype.getInitialData = function(e, t) {}, t.prototype.appendData = function(e) {
		this.getRawData().appendData(e.data);
	}, t.prototype.getData = function(e) {
		var t = ry(this);
		if (t) {
			var n = t.context.data;
			return e == null || !n.getLinkedData ? n : n.getLinkedData(e);
		}
		return qv(this).data;
	}, t.prototype.getAllData = function() {
		var e = this.getData();
		return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{ data: e }];
	}, t.prototype.setData = function(e) {
		var t = ry(this);
		if (t) {
			var n = t.context;
			n.outputData = e, t !== this.dataTask && (n.data = e);
		}
		qv(this).data = e;
	}, t.prototype.getEncode = function() {
		var e = this.get("encode", !0);
		if (e) return K(e);
	}, t.prototype.getSourceManager = function() {
		return qv(this).sourceManager;
	}, t.prototype.getSource = function() {
		return this.getSourceManager().getSource();
	}, t.prototype.getRawData = function() {
		return qv(this).dataBeforeProcessed;
	}, t.prototype.getColorBy = function() {
		return this.get("colorBy") || "series";
	}, t.prototype.isColorBySeries = function() {
		return this.getColorBy() === "series";
	}, t.prototype.getBaseAxis = function() {
		var e = this.coordinateSystem;
		return e && e.getBaseAxis && e.getBaseAxis();
	}, t.prototype.indicesOfNearest = function(e, t, n, r) {
		var i = this.getData(), a = this.coordinateSystem, o = a && a.getAxis(e);
		if (!a || !o) return [];
		var s = o.dataToCoord(n);
		r ??= Infinity;
		for (var c = [], l = Infinity, u = -1, d = 0, f = i.getDimensionIndex(t), p = i.getStore(), m = 0, h = p.count(); m < h; m++) {
			var g = p.get(f, m), _ = s - o.dataToCoord(g), v = Math.abs(_);
			v <= r && ((v < l || v === l && _ >= 0 && u < 0) && (l = v, u = _, d = 0), _ === u && (c[d++] = m));
		}
		return c.length = d, c;
	}, t.prototype.formatTooltip = function(e, t, n) {
		return Gv({
			series: this,
			dataIndex: e,
			multipleSeries: t
		});
	}, t.prototype.isAnimationEnabled = function() {
		var e = this.ecModel;
		if (J.node && !(e && e.ssr)) return !1;
		var t = this.getShallow("animation");
		return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), !!t;
	}, t.prototype.restoreData = function() {
		this.dataTask.dirty();
	}, t.prototype.getColorFromPalette = function(e, t, n) {
		var r = this.ecModel, i = X_.prototype.getColorFromPalette.call(this, e, t, n);
		return i ||= r.getColorFromPalette(e, t, n), i;
	}, t.prototype.coordDimToDataDim = function(e) {
		return this.getRawData().mapDimensionsAll(e);
	}, t.prototype.getProgressive = function() {
		return this.get("progressive");
	}, t.prototype.getProgressiveThreshold = function() {
		return this.get("progressiveThreshold");
	}, t.prototype.select = function(e, t) {
		this._innerSelect(this.getData(t), e);
	}, t.prototype.unselect = function(e, t) {
		var n = this.option.selectedMap;
		if (n) {
			var r = this.option.selectedMode, i = this.getData(t);
			if (r === "series" || n === "all") {
				this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
				return;
			}
			for (var a = 0; a < e.length; a++) {
				var o = e[a], s = Jv(i, o);
				n[s] = !1, this._selectedDataIndicesMap[s] = -1;
			}
		}
	}, t.prototype.toggleSelect = function(e, t) {
		for (var n = [], r = 0; r < e.length; r++) n[0] = e[r], this.isSelected(e[r], t) ? this.unselect(n, t) : this.select(n, t);
	}, t.prototype.getSelectedDataIndices = function() {
		if (this.option.selectedMap === "all") return [].slice.call(this.getData().getIndices());
		for (var e = this._selectedDataIndicesMap, t = z(e), n = [], r = 0; r < t.length; r++) {
			var i = e[t[r]];
			i >= 0 && n.push(i);
		}
		return n;
	}, t.prototype.isSelected = function(e, t) {
		var n = this.option.selectedMap;
		if (!n) return !1;
		var r = this.getData(t);
		return (n === "all" || n[Jv(r, e)]) && !r.getItemModel(e).get(["select", "disabled"]);
	}, t.prototype.isUniversalTransitionEnabled = function() {
		if (this.__universalTransitionEnabled) return !0;
		var e = this.option.universalTransition;
		return e ? e === !0 || e && e.enabled : !1;
	}, t.prototype._innerSelect = function(e, t) {
		var n, r, i = this.option, a = i.selectedMode, o = t.length;
		if (a && o) {
			if (a === "series") i.selectedMap = "all";
			else if (a === "multiple") {
				W(i.selectedMap) || (i.selectedMap = {});
				for (var s = i.selectedMap, c = 0; c < o; c++) {
					var l = t[c], u = Jv(e, l);
					s[u] = !0, this._selectedDataIndicesMap[u] = e.getRawIndex(l);
				}
			} else if (a === "single" || a === !0) {
				var d = t[o - 1], u = Jv(e, d);
				i.selectedMap = (n = {}, n[u] = !0, n), this._selectedDataIndicesMap = (r = {}, r[u] = e.getRawIndex(d), r);
			}
		}
	}, t.prototype._initSelectedMapFromData = function(e) {
		if (!this.option.selectedMap) {
			var t = [];
			e.hasItemOption && e.each(function(n) {
				var r = e.getRawDataItem(n);
				r && r.selected && t.push(n);
			}), t.length > 0 && this._innerSelect(e, t);
		}
	}, t.registerClass = function(e) {
		return q_.registerClass(e);
	}, t.protoInitialize = function() {
		var e = t.prototype;
		e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
	}(), t;
}(q_);
se(Yv, tv), se(Yv, X_), Ze(Yv, q_);
function Xv(e) {
	var t = e.name;
	Uc(e) || (e.name = Zv(e) || t);
}
function Zv(e) {
	var t = e.getRawData(), n = t.mapDimensionsAll("seriesName"), r = [];
	return I(n, function(e) {
		var n = t.getDimensionInfo(e);
		n.displayName && r.push(n.displayName);
	}), r.join(" ");
}
function Qv(e) {
	return e.model.getRawData().count();
}
function $v(e) {
	var t = e.model;
	return t.setData(t.getRawData().cloneShallow()), ey;
}
function ey(e, t) {
	t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function ty(e, t) {
	I(Fe(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function(n) {
		e.wrapMethod(n, fe(ny, t));
	});
}
function ny(e, t) {
	var n = ry(e);
	return n && n.setOutputEnd((t || this).count()), t;
}
function ry(e) {
	var t = (e.ecModel || {}).scheduler, n = t && t.getPipeline(e.uid);
	if (n) {
		var r = n.currentTask;
		if (r) {
			var i = r.agentStubMap;
			i && (r = i.get(e.uid));
		}
		return r;
	}
}
//#endregion
//#region node_modules/echarts/lib/util/symbol.js
var iy = Jo.extend({
	type: "triangle",
	shape: {
		cx: 0,
		cy: 0,
		width: 0,
		height: 0
	},
	buildPath: function(e, t) {
		var n = t.cx, r = t.cy, i = t.width / 2, a = t.height / 2;
		e.moveTo(n, r - a), e.lineTo(n + i, r + a), e.lineTo(n - i, r + a), e.closePath();
	}
}), ay = {
	line: qd,
	rect: cs,
	roundRect: cs,
	square: cs,
	circle: _d,
	diamond: Jo.extend({
		type: "diamond",
		shape: {
			cx: 0,
			cy: 0,
			width: 0,
			height: 0
		},
		buildPath: function(e, t) {
			var n = t.cx, r = t.cy, i = t.width / 2, a = t.height / 2;
			e.moveTo(n, r - a), e.lineTo(n + i, r), e.lineTo(n, r + a), e.lineTo(n - i, r), e.closePath();
		}
	}),
	pin: Jo.extend({
		type: "pin",
		shape: {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		buildPath: function(e, t) {
			var n = t.x, r = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), c = r - a + o + s, l = Math.asin(s / o), u = Math.cos(l) * o, d = Math.sin(l), f = Math.cos(l), p = o * .6, m = o * .7;
			e.moveTo(n - u, c + s), e.arc(n, c, o, Math.PI - l, Math.PI * 2 + l), e.bezierCurveTo(n + u - d * p, c + s + f * p, n, r - m, n, r), e.bezierCurveTo(n, r - m, n - u + d * p, c + s + f * p, n - u, c + s), e.closePath();
		}
	}),
	arrow: Jo.extend({
		type: "arrow",
		shape: {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		buildPath: function(e, t) {
			var n = t.height, r = t.width, i = t.x, a = t.y, o = r / 3 * 2;
			e.moveTo(i, a), e.lineTo(i + o, a + n), e.lineTo(i, a + n / 4 * 3), e.lineTo(i - o, a + n), e.lineTo(i, a), e.closePath();
		}
	}),
	triangle: iy
}, oy = {
	line: function(e, t, n, r, i) {
		i.x1 = e, i.y1 = t + r / 2, i.x2 = e + n, i.y2 = t + r / 2;
	},
	rect: function(e, t, n, r, i) {
		i.x = e, i.y = t, i.width = n, i.height = r;
	},
	roundRect: function(e, t, n, r, i) {
		i.x = e, i.y = t, i.width = n, i.height = r, i.r = Math.min(n, r) / 4;
	},
	square: function(e, t, n, r, i) {
		var a = Math.min(n, r);
		i.x = e, i.y = t, i.width = a, i.height = a;
	},
	circle: function(e, t, n, r, i) {
		i.cx = e + n / 2, i.cy = t + r / 2, i.r = Math.min(n, r) / 2;
	},
	diamond: function(e, t, n, r, i) {
		i.cx = e + n / 2, i.cy = t + r / 2, i.width = n, i.height = r;
	},
	pin: function(e, t, n, r, i) {
		i.x = e + n / 2, i.y = t + r / 2, i.width = n, i.height = r;
	},
	arrow: function(e, t, n, r, i) {
		i.x = e + n / 2, i.y = t + r / 2, i.width = n, i.height = r;
	},
	triangle: function(e, t, n, r, i) {
		i.cx = e + n / 2, i.cy = t + r / 2, i.width = n, i.height = r;
	}
}, sy = {};
I(ay, function(e, t) {
	sy[t] = new e();
});
var cy = Jo.extend({
	type: "symbol",
	shape: {
		symbolType: "",
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	calculateTextPosition: function(e, t, n) {
		var r = Pn(e, t, n), i = this.shape;
		return i && i.symbolType === "pin" && t.position === "inside" && (r.y = n.y + n.height * .4), r;
	},
	buildPath: function(e, t, n) {
		var r = t.symbolType;
		if (r !== "none") {
			var i = sy[r];
			i ||= (r = "rect", sy[r]), oy[r](t.x, t.y, t.width, t.height, i.shape), i.buildPath(e, i.shape, n);
		}
	}
});
function ly(e, t) {
	if (this.type !== "image") {
		var n = this.style;
		this.__isEmptyBrush ? (n.stroke = e, n.fill = t || Q.color.neutral00, n.lineWidth = 2) : this.shape.symbolType === "line" ? n.stroke = e : n.fill = e, this.markRedraw();
	}
}
function uy(e, t, n, r, i, a, o) {
	var s = e.indexOf("empty") === 0;
	s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
	var c = e.indexOf("image://") === 0 ? If(e.slice(8), new X(t, n, r, i), o ? "center" : "cover") : e.indexOf("path://") === 0 ? Ff(e.slice(7), {}, new X(t, n, r, i), o ? "center" : "cover") : new cy({ shape: {
		symbolType: e,
		x: t,
		y: n,
		width: r,
		height: i
	} });
	return c.__isEmptyBrush = s, c.setColor = ly, a && c.setColor(a), c;
}
function dy(e) {
	return V(e) || (e = [+e, +e]), [e[0] || 0, e[1] || 0];
}
function fy(e, t) {
	if (e != null) return V(e) || (e = [e, e]), [Hs(e[0], t[0]) || 0, Hs(G(e[1], e[0]), t[1]) || 0];
}
//#endregion
//#region node_modules/echarts/lib/chart/line/LineSeries.js
var py = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.hasSymbolVisual = !0, n;
	}
	return t.prototype.getInitialData = function(e) {
		return Yh(null, this, { useEncodeDefaulter: !0 });
	}, t.prototype.getLegendIcon = function(e) {
		var t = new hd(), n = uy("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
		t.add(n), n.setStyle(e.lineStyle);
		var r = this.getData().getVisual("symbol"), i = this.getData().getVisual("symbolRotate"), a = r === "none" ? "circle" : r, o = e.itemHeight * .8, s = uy(a, (e.itemWidth - o) / 2, (e.itemHeight - o) / 2, o, o, e.itemStyle.fill);
		return t.add(s), s.setStyle(e.itemStyle), s.rotation = (e.iconRotate === "inherit" ? i : e.iconRotate || 0) * Math.PI / 180, s.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), a.indexOf("empty") > -1 && (s.style.stroke = s.style.fill, s.style.fill = Q.color.neutral00, s.style.lineWidth = 2), t;
	}, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
		z: 3,
		coordinateSystem: "cartesian2d",
		legendHoverLink: !0,
		clip: !0,
		label: { position: "top" },
		endLabel: {
			show: !1,
			valueAnimation: !0,
			distance: 8
		},
		lineStyle: {
			width: 2,
			type: "solid"
		},
		emphasis: { scale: !0 },
		step: !1,
		smooth: !1,
		smoothMonotone: null,
		symbol: "emptyCircle",
		symbolSize: 6,
		symbolRotate: null,
		showSymbol: !0,
		showAllSymbol: "auto",
		connectNulls: !1,
		sampling: "none",
		animationEasing: "linear",
		progressive: 0,
		hoverLayerThreshold: Infinity,
		universalTransition: { divideShape: "clone" },
		triggerLineEvent: !1,
		triggerEvent: !1
	}, t;
}(Yv);
//#endregion
//#region node_modules/echarts/lib/chart/helper/labelHelper.js
function my(e, t) {
	var n = e.mapDimensionsAll("defaultedLabel"), r = n.length;
	if (r === 1) {
		var i = Im(e, t, n[0]);
		return i == null ? null : i + "";
	}
	if (r) {
		for (var a = [], o = 0; o < n.length; o++) a.push(Im(e, t, n[o]));
		return a.join(" ");
	}
}
function hy(e, t) {
	var n = e.mapDimensionsAll("defaultedLabel");
	if (!V(t)) return t + "";
	for (var r = [], i = 0; i < n.length; i++) {
		var a = e.getDimensionIndex(n[i]);
		a >= 0 && r.push(t[a]);
	}
	return r.join(" ");
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/Symbol.js
var gy = function(e) {
	l(t, e);
	function t(t, n, r, i) {
		var a = e.call(this) || this;
		return a.updateData(t, n, r, i), a;
	}
	return t.prototype._createSymbol = function(e, t, n, r, i, a) {
		this.removeAll();
		var o = uy(e, -1, -1, 2, 2, null, a);
		o.attr({
			z2: G(i, 100),
			culling: !0,
			scaleX: r[0] / 2,
			scaleY: r[1] / 2
		}), o.drift = _y, this._symbolType = e, this.add(o);
	}, t.prototype.stopSymbolAnimation = function(e) {
		this.childAt(0).stopAnimation(null, e);
	}, t.prototype.getSymbolType = function() {
		return this._symbolType;
	}, t.prototype.getSymbolPath = function() {
		return this.childAt(0);
	}, t.prototype.highlight = function() {
		gu(this.childAt(0));
	}, t.prototype.downplay = function() {
		_u(this.childAt(0));
	}, t.prototype.setZ = function(e, t) {
		var n = this.childAt(0);
		n.zlevel = e, n.z = t;
	}, t.prototype.setDraggable = function(e, t) {
		var n = this.childAt(0);
		n.draggable = e, n.cursor = !t && e ? "move" : n.cursor;
	}, t.prototype.updateData = function(e, n, r, i) {
		this.silent = !1;
		var a = e.getItemVisual(n, "symbol") || "circle", o = e.hostModel, s = t.getSymbolSize(e, n), c = t.getSymbolZ2(e, n), l = a !== this._symbolType, u = i && i.disableAnimation;
		if (l) {
			var d = e.getItemVisual(n, "symbolKeepAspect");
			this._createSymbol(a, e, n, s, c, d);
		} else {
			var f = this.childAt(0);
			f.silent = !1;
			var p = {
				scaleX: s[0] / 2,
				scaleY: s[1] / 2
			};
			u ? f.attr(p) : yf(f, p, o, n), Tf(f);
		}
		if (this._updateCommon(e, n, s, r, i), l) {
			var f = this.childAt(0);
			if (!u) {
				var p = {
					scaleX: this._sizeX,
					scaleY: this._sizeY,
					style: { opacity: f.style.opacity }
				};
				f.scaleX = f.scaleY = 0, f.style.opacity = 0, bf(f, p, o, n);
			}
		}
		u && this.childAt(0).stopAnimation("leave");
	}, t.prototype._updateCommon = function(e, t, n, r, i) {
		var a = this.childAt(0), o = e.hostModel, s, c, l, u, d, f, p, m, h;
		if (r && (s = r.emphasisItemStyle, c = r.blurItemStyle, l = r.selectItemStyle, u = r.focus, d = r.blurScope, p = r.labelStatesModels, m = r.hoverScale, h = r.cursorStyle, f = r.emphasisDisabled), !r || e.hasItemOption) {
			var g = r && r.itemModel ? r.itemModel : e.getItemModel(t), _ = g.getModel("emphasis");
			s = _.getModel("itemStyle").getItemStyle(), l = g.getModel(["select", "itemStyle"]).getItemStyle(), c = g.getModel(["blur", "itemStyle"]).getItemStyle(), u = _.get("focus"), d = _.get("blurScope"), f = _.get("disabled"), p = wp(g), m = _.getShallow("scale"), h = g.getShallow("cursor");
		}
		var v = e.getItemVisual(t, "symbolRotate");
		a.attr("rotation", (v || 0) * Math.PI / 180 || 0);
		var y = fy(e.getItemVisual(t, "symbolOffset"), n);
		y && (a.x = y[0], a.y = y[1]), h && a.attr("cursor", h);
		var b = e.getItemVisual(t, "style"), x = b.fill;
		if (a instanceof es) {
			var S = a.style;
			a.useStyle(N({
				image: S.image,
				x: S.x,
				y: S.y,
				width: S.width,
				height: S.height
			}, b));
		} else a.__isEmptyBrush ? a.useStyle(N({}, b)) : a.useStyle(b), a.style.decal = null, a.setColor(x, i && i.symbolInnerColor), a.style.strokeNoScale = !0;
		var C = e.getItemVisual(t, "liftZ"), w = this._z2;
		C == null ? w != null && (a.z2 = w, this._z2 = null) : w ?? (this._z2 = a.z2, a.z2 += C);
		var T = i && i.useNameLabel;
		Cp(a, p, {
			labelFetcher: o,
			labelDataIndex: t,
			defaultText: E,
			inheritColor: x,
			defaultOpacity: b.opacity
		});
		function E(t) {
			return T ? e.getName(t) : my(e, t);
		}
		this._sizeX = n[0] / 2, this._sizeY = n[1] / 2;
		var D = a.ensureState("emphasis");
		D.style = s, a.ensureState("select").style = l, a.ensureState("blur").style = c;
		var O = m == null || m === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(m) && m > 0 ? +m : 1;
		D.scaleX = this._sizeX * O, D.scaleY = this._sizeY * O, this.setSymbolScale(1), Fu(this, u, d, f);
	}, t.prototype.setSymbolScale = function(e) {
		this.scaleX = this.scaleY = e;
	}, t.prototype.fadeOut = function(e, t, n) {
		var r = this.childAt(0), i = Z(this).dataIndex, a = n && n.animation;
		if (this.silent = r.silent = !0, n && n.fadeLabel) {
			var o = r.getTextContent();
			o && Sf(o, { style: { opacity: 0 } }, t, {
				dataIndex: i,
				removeOpt: a,
				cb: function() {
					r.removeTextContent();
				}
			});
		} else r.removeTextContent();
		Sf(r, {
			style: { opacity: 0 },
			scaleX: 0,
			scaleY: 0
		}, t, {
			dataIndex: i,
			cb: e,
			removeOpt: a
		});
	}, t.getSymbolSize = function(e, t) {
		return dy(e.getItemVisual(t, "symbolSize"));
	}, t.getSymbolZ2 = function(e, t) {
		return e.getItemVisual(t, "z2");
	}, t;
}(hd);
function _y(e, t) {
	this.parent.drift(e, t);
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/SymbolDraw.js
function vy(e, t, n, r) {
	return t && !isNaN(t[0]) && !isNaN(t[1]) && !(r && r.isIgnore && r.isIgnore(n)) && !(r && r.clipShape && !r.clipShape.contain(t[0], t[1])) && e.getItemVisual(n, "symbol") !== "none";
}
function yy(e) {
	return e != null && !W(e) && (e = { isIgnore: e }), e || {};
}
function by(e) {
	var t = e.hostModel, n = t.getModel("emphasis");
	return {
		emphasisItemStyle: n.getModel("itemStyle").getItemStyle(),
		blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
		selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
		focus: n.get("focus"),
		blurScope: n.get("blurScope"),
		emphasisDisabled: n.get("disabled"),
		hoverScale: n.get("scale"),
		labelStatesModels: wp(t),
		cursorStyle: t.get("cursor")
	};
}
function xy(e, t, n, r, i, a, o) {
	var s = new e(t, n, r, i);
	return s.setPosition(a), t.setItemGraphicEl(n, s), o.add(s), s;
}
var Sy = function() {
	function e(e) {
		this.group = new hd(), this._SymbolCtor = e || gy;
	}
	return e.prototype.updateData = function(e, t) {
		this._progressiveEls = null, t = yy(t);
		var n = this.group, r = e.hostModel, i = this._data, a = this._SymbolCtor, o = t.disableAnimation, s = this._seriesScope = by(e), c = { disableAnimation: o }, l = t.getSymbolPoint || function(t) {
			return e.getItemLayout(t);
		};
		i || n.removeAll(), e.diff(i).add(function(r) {
			var i = l(r);
			vy(e, i, r, t) && xy(a, e, r, s, c, i, n);
		}).update(function(u, d) {
			var f = i.getItemGraphicEl(d), p = l(u);
			if (!vy(e, p, u, t)) {
				n.remove(f);
				return;
			}
			var m = e.getItemVisual(u, "symbol") || "circle", h = f && f.getSymbolType && f.getSymbolType();
			if (!f || h && h !== m) n.remove(f), f = new a(e, u, s, c), f.setPosition(p);
			else {
				f.updateData(e, u, s, c);
				var g = {
					x: p[0],
					y: p[1]
				};
				o ? f.attr(g) : yf(f, g, r);
			}
			n.add(f), e.setItemGraphicEl(u, f);
		}).remove(function(e) {
			var t = i.getItemGraphicEl(e);
			t && t.fadeOut(function() {
				n.remove(t);
			}, r);
		}).execute(), this._getSymbolPoint = l, this._data = e;
	}, e.prototype.updateLayout = function(e) {
		var t = this._data;
		if (t) for (var n = this, r = t.getStore(), i = 0, a = r.count(); i < a; i++) {
			var o = t.getItemGraphicEl(i), s = n._getSymbolPoint(i);
			vy(t, s, i, e) ? (o ||= xy(n._SymbolCtor, t, i, n._seriesScope, { disableAnimation: !0 }, s, n.group), o.stopAnimation(), o.setPosition(s), o.markRedraw()) : o && (n.group.remove(o), t.setItemGraphicEl(i, null));
		}
	}, e.prototype.incrementalPrepareUpdate = function(e) {
		this._seriesScope = by(e), this._data = null, this.group.removeAll();
	}, e.prototype.incrementalUpdate = function(e, t, n, r) {
		this._progressiveEls = [], r = yy(r);
		function i(e) {
			e.isGroup || (e.incremental = n, e.ensureState("emphasis").hoverLayer = 2);
		}
		for (var a = e.start; a < e.end; a++) {
			var o = t.getItemLayout(a);
			if (vy(t, o, a, r)) {
				var s = new this._SymbolCtor(t, a, this._seriesScope);
				s.traverse(i), s.setPosition(o), this.group.add(s), t.setItemGraphicEl(a, s), this._progressiveEls.push(s);
			}
		}
	}, e.prototype.eachRendered = function(e) {
		sp(this._progressiveEls || this.group, e);
	}, e.prototype.remove = function(e) {
		var t = this.group, n = this._data;
		n && e ? n.eachItemGraphicEl(function(e) {
			e.fadeOut(function() {
				t.remove(e);
			}, n.hostModel);
		}) : t.removeAll();
	}, e;
}();
//#endregion
//#region node_modules/echarts/lib/chart/line/helper.js
function Cy(e, t, n) {
	var r = e.getBaseAxis(), i = e.getOtherAxis(r), a = wy(i, n), o = r.dim, s = i.dim, c = t.mapDimension(s), l = t.mapDimension(o), u = +(s === "x" || s === "radius"), d = L(e.dimensions, function(e) {
		return t.mapDimension(e);
	}), f = !1, p = t.getCalculationInfo("stackResultDimension");
	return Gh(t, d[0]) && (f = !0, d[0] = p), Gh(t, d[1]) && (f = !0, d[1] = p), {
		dataDimsForPoint: d,
		valueStart: a,
		valueAxisDim: s,
		baseAxisDim: o,
		stacked: !!f,
		valueDim: c,
		baseDim: l,
		baseDataOffset: u,
		stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
	};
}
function wy(e, t) {
	var n = 0, r = e.scale.getExtent();
	return t === "start" ? n = r[0] : t === "end" ? n = r[1] : me(t) && !isNaN(t) ? n = t : r[0] > 0 ? n = r[0] : r[1] < 0 && (n = r[1]), n;
}
function Ty(e, t, n, r) {
	var i = NaN;
	e.stacked && (i = n.get(n.getCalculationInfo("stackedOverDimension"), r)), isNaN(i) && (i = e.valueStart);
	var a = e.baseDataOffset, o = [];
	return o[a] = n.get(e.baseDim, r), o[1 - a] = i, t.dataToPoint(o);
}
function Ey(e, t) {
	return !isFinite(e) || !isFinite(t);
}
//#endregion
//#region node_modules/echarts/lib/util/vendor.js
var Dy = typeof Float32Array < "u" ? Float32Array : void 0, Oy = typeof Float64Array < "u" ? Float64Array : void 0;
function ky(e) {
	return Ay({ ctor: Dy }, e).arr;
}
function Ay(e, t) {
	var n = e.arr, r = e.ctor;
	if (t > rc && (t = rc), !n || e.typed && n.length < t) {
		var i = void 0;
		if (r) try {
			i = new r(t), e.typed = !0, n && i.set(n);
		} catch {}
		if (!i && (i = [], e.typed = !1, n)) for (var a = 0, o = n.length; a < o; a++) i[a] = n[a];
		e.arr = i;
	}
	return e;
}
//#endregion
//#region node_modules/echarts/lib/chart/line/lineAnimationDiff.js
function jy(e, t) {
	var n = [];
	return t.diff(e).add(function(e) {
		n.push({
			cmd: "+",
			idx: e
		});
	}).update(function(e, t) {
		n.push({
			cmd: "=",
			idx: t,
			idx1: e
		});
	}).remove(function(e) {
		n.push({
			cmd: "-",
			idx: e
		});
	}).execute(), n;
}
function My(e, t, n, r, i, a, o, s) {
	for (var c = jy(e, t), l = [], u = [], d = [], f = [], p = [], m = [], h = [], g = Cy(i, t, o), _ = e.getLayout("points") || [], v = t.getLayout("points") || [], y = 0; y < c.length; y++) {
		var b = c[y], x = !0, S = void 0, C = void 0;
		switch (b.cmd) {
			case "=":
				S = b.idx * 2, C = b.idx1 * 2;
				var w = _[S], T = _[S + 1], E = v[C], D = v[C + 1];
				(isNaN(w) || isNaN(T)) && (w = E, T = D), l.push(w, T), u.push(E, D), d.push(n[S], n[S + 1]), f.push(r[C], r[C + 1]), h.push(t.getRawIndex(b.idx1));
				break;
			case "+":
				var O = b.idx, k = g.dataDimsForPoint, A = i.dataToPoint([t.get(k[0], O), t.get(k[1], O)]);
				C = O * 2, l.push(A[0], A[1]), u.push(v[C], v[C + 1]);
				var ee = Ty(g, i, t, O);
				d.push(ee[0], ee[1]), f.push(r[C], r[C + 1]), h.push(t.getRawIndex(O));
				break;
			case "-": x = !1;
		}
		x && (p.push(b), m.push(m.length));
	}
	m.sort(function(e, t) {
		return h[e] - h[t];
	});
	for (var te = l.length, ne = ky(te), j = ky(te), M = ky(te), re = ky(te), N = [], y = 0; y < m.length; y++) {
		var ie = m[y], P = y * 2, ae = ie * 2;
		ne[P] = l[ae], ne[P + 1] = l[ae + 1], j[P] = u[ae], j[P + 1] = u[ae + 1], M[P] = d[ae], M[P + 1] = d[ae + 1], re[P] = f[ae], re[P + 1] = f[ae + 1], N[y] = p[ie];
	}
	return {
		current: ne,
		next: j,
		stackedOnCurrent: M,
		stackedOnNext: re,
		status: N
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/line/poly.js
var Ny = Math.min, Py = Math.max;
function Fy(e, t, n, r, i, a, o, s, c) {
	for (var l, u, d, f, p, m, h = n, g = 0; g < r; g++) {
		var _ = t[h * 2], v = t[h * 2 + 1];
		if (h >= i || h < 0) break;
		if (Ey(_, v)) {
			if (c) {
				h += a;
				continue;
			}
			break;
		}
		if (h === n) e[a > 0 ? "moveTo" : "lineTo"](_, v), d = _, f = v;
		else {
			var y = _ - l, b = v - u;
			if (y * y + b * b < .5) {
				h += a;
				continue;
			}
			if (o > 0) {
				for (var x = h + a, S = t[x * 2], C = t[x * 2 + 1]; S === _ && C === v && g < r;) g++, x += a, h += a, S = t[x * 2], C = t[x * 2 + 1], _ = t[h * 2], v = t[h * 2 + 1], y = _ - l, b = v - u;
				var w = g + 1;
				if (c) for (; Ey(S, C) && w < r;) w++, x += a, S = t[x * 2], C = t[x * 2 + 1];
				var T = .5, E = 0, D = 0, O = void 0, k = void 0;
				if (w >= r || Ey(S, C)) p = _, m = v;
				else {
					E = S - l, D = C - u;
					var A = _ - l, ee = S - _, te = v - u, ne = C - v, j = void 0, M = void 0;
					if (s === "x") {
						j = Math.abs(A), M = Math.abs(ee);
						var re = E > 0 ? 1 : -1;
						p = _ - re * j * o, m = v, O = _ + re * M * o, k = v;
					} else if (s === "y") {
						j = Math.abs(te), M = Math.abs(ne);
						var N = D > 0 ? 1 : -1;
						p = _, m = v - N * j * o, O = _, k = v + N * M * o;
					} else j = Math.sqrt(A * A + te * te), M = Math.sqrt(ee * ee + ne * ne), T = M / (M + j), p = _ - E * o * (1 - T), m = v - D * o * (1 - T), O = _ + E * o * T, k = v + D * o * T, O = Ny(O, Py(S, _)), k = Ny(k, Py(C, v)), O = Py(O, Ny(S, _)), k = Py(k, Ny(C, v)), E = O - _, D = k - v, p = _ - E * j / M, m = v - D * j / M, p = Ny(p, Py(l, _)), m = Ny(m, Py(u, v)), p = Py(p, Ny(l, _)), m = Py(m, Ny(u, v)), E = _ - p, D = v - m, O = _ + E * M / j, k = v + D * M / j;
				}
				e.bezierCurveTo(d, f, p, m, _, v), d = O, f = k;
			} else e.lineTo(_, v);
		}
		l = _, u = v, h += a;
	}
	return g;
}
var Iy = function() {
	function e() {
		this.smooth = 0, this.smoothConstraint = !0;
	}
	return e;
}(), Ly = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "ec-polyline", n;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: Q.color.neutral99,
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new Iy();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.points, r = 0, i = n.length / 2;
		if (t.connectNulls) {
			for (; i > 0 && Ey(n[i * 2 - 2], n[i * 2 - 1]); i--);
			for (; r < i && Ey(n[r * 2], n[r * 2 + 1]); r++);
		}
		for (; r < i;) r += Fy(e, n, r, i, i, 1, t.smooth, t.smoothMonotone, t.connectNulls) + 1;
	}, t.prototype.getPointOn = function(e, t) {
		this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
		for (var n = this.path.data, r = Co.CMD, i, a, o = t === "x", s = [], c = 0; c < n.length;) {
			var l = n[c++], u = void 0, d = void 0, f = void 0, p = void 0, m = void 0, h = void 0, g = void 0;
			switch (l) {
				case r.M:
					i = n[c++], a = n[c++];
					break;
				case r.L:
					if (u = n[c++], d = n[c++], g = o ? (e - i) / (u - i) : (e - a) / (d - a), g <= 1 && g >= 0) {
						var _ = o ? (d - a) * g + a : (u - i) * g + i;
						return o ? [e, _] : [_, e];
					}
					i = u, a = d;
					break;
				case r.C:
					u = n[c++], d = n[c++], f = n[c++], p = n[c++], m = n[c++], h = n[c++];
					var v = o ? Ar(i, u, f, m, e, s) : Ar(a, d, p, h, e, s);
					if (v > 0) for (var y = 0; y < v; y++) {
						var b = s[y];
						if (b <= 1 && b >= 0) {
							var _ = o ? Or(a, d, p, h, b) : Or(i, u, f, m, b);
							return o ? [e, _] : [_, e];
						}
					}
					i = m, a = h;
			}
		}
	}, t;
}(Jo), Ry = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(Iy), zy = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "ec-polygon", n;
	}
	return t.prototype.getDefaultShape = function() {
		return new Ry();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.points, r = t.stackedOnPoints, i = 0, a = n.length / 2, o = t.smoothMonotone;
		if (t.connectNulls) {
			for (; a > 0 && Ey(n[a * 2 - 2], n[a * 2 - 1]); a--);
			for (; i < a && Ey(n[i * 2], n[i * 2 + 1]); i++);
		}
		for (; i < a;) {
			var s = Fy(e, n, i, a, a, 1, t.smooth, o, t.connectNulls);
			Fy(e, r, i + s - 1, s, a, -1, t.stackedOnSmooth, o, t.connectNulls), i += s + 1, e.closePath();
		}
	}, t;
}(Jo);
//#endregion
//#region node_modules/echarts/lib/chart/helper/createRenderPlanner.js
function By() {
	var e = Yc();
	return function(t) {
		var n = e(t), r = t.pipelineContext, i = !!n.large, a = !!n.progressiveRender, o = n.large = !!(r && r.large), s = n.progressiveRender = !!(r && r.progressiveRender);
		return (i !== o || a !== s) && "reset";
	};
}
//#endregion
//#region node_modules/echarts/lib/view/Chart.js
var Vy = Yc(), Hy = By(), Uy = function() {
	function e() {
		this.group = new hd(), this.uid = $h("viewChart"), this.renderTask = rv({
			plan: Ky,
			reset: qy
		}), this.renderTask.context = { view: this };
	}
	return e.prototype.init = function(e, t) {}, e.prototype.render = function(e, t, n, r) {}, e.prototype.highlight = function(e, t, n, r) {
		var i = e.getData(r && r.dataType);
		i && Gy(i, r, "emphasis");
	}, e.prototype.downplay = function(e, t, n, r) {
		var i = e.getData(r && r.dataType);
		i && Gy(i, r, "normal");
	}, e.prototype.remove = function(e, t) {
		this.group.removeAll();
	}, e.prototype.dispose = function(e, t) {}, e.prototype.updateView = function(e, t, n, r) {
		this.render(e, t, n, r);
	}, e.prototype.updateVisual = function(e, t, n, r) {
		this.render(e, t, n, r);
	}, e.prototype.eachRendered = function(e) {
		sp(this.group, e);
	}, e.markUpdateMethod = function(e, t) {
		Vy(e).updateMethod = t;
	}, e.protoInitialize = function() {
		var t = e.prototype;
		t.type = "chart";
	}(), e;
}();
function Wy(e, t, n) {
	e && Vu(e) && (t === "emphasis" ? gu : _u)(e, n);
}
function Gy(e, t, n) {
	var r = Jc(e, t), i = t && t.highlightKey != null ? Uu(t.highlightKey) : null;
	r == null ? e.eachItemGraphicEl(function(e) {
		Wy(e, n, i);
	}) : I(Oc(r), function(t) {
		Wy(e.getItemGraphicEl(t), n, i);
	});
}
Ye(Uy, ["dispose"]), nt(Uy);
function Ky(e) {
	return Hy(e.model);
}
function qy(e) {
	var t = e.model, n = e.ecModel, r = e.api, i = e.payload, a = t.pipelineContext.progressiveRender, o = e.view, s = i && Vy(i).updateMethod, c = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
	return c !== "render" && o[c](t, n, r, i), Jy[c];
}
var Jy = {
	incrementalPrepareRender: { progress: function(e, t) {
		t.view.incrementalRender(e, t.model, t.ecModel, t.api, t.payload);
	} },
	render: {
		forceFirstProgress: !0,
		progress: function(e, t) {
			t.view.render(t.model, t.ecModel, t.api, t.payload);
		}
	}
};
//#endregion
//#region node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
function Yy(e, t, n, r, i) {
	var a = e.getArea(), o = a.x, s = a.y, c = a.width, l = a.height, u = n.get(["lineStyle", "width"]) || 0;
	o -= u / 2, s -= u / 2, c += u, l += u, c = Math.ceil(c), o !== Math.floor(o) && (o = Math.floor(o), c++);
	var d = new cs({ shape: {
		x: o,
		y: s,
		width: c,
		height: l
	} });
	if (t) {
		var f = e.getBaseAxis(), p = f.isHorizontal(), m = f.inverse;
		p ? (m && (d.shape.x += c), d.shape.width = 0) : (m || (d.shape.y += l), d.shape.height = 0);
		var h = H(i) ? function(e) {
			i(e, d);
		} : null;
		bf(d, { shape: {
			width: c,
			height: l,
			x: o,
			y: s
		} }, n, null, r, h);
	}
	return d;
}
function Xy(e, t, n) {
	var r = e.getArea(), i = qs(r.r0, 1), a = qs(r.r, 1), o = new Id({ shape: {
		cx: qs(e.cx, 1),
		cy: qs(e.cy, 1),
		r0: i,
		r: a,
		startAngle: r.startAngle,
		endAngle: r.endAngle,
		clockwise: r.clockwise
	} });
	return t && (e.getBaseAxis().dim === "angle" ? o.shape.endAngle = r.startAngle : o.shape.r = i, bf(o, { shape: {
		endAngle: r.endAngle,
		r: a
	} }, n)), o;
}
function Zy(e, t, n, r, i) {
	return e ? e.type === "polar" ? Xy(e, t, n) : e.type === "cartesian2d" ? Yy(e, t, n, r, i) : null : null;
}
//#endregion
//#region node_modules/echarts/lib/coord/CoordinateSystem.js
function Qy(e, t) {
	return e.type === t;
}
//#endregion
//#region node_modules/echarts/lib/util/styleCompat.js
function $y(e, t, n, r) {
	return e && (e.legacy || e.legacy !== !1 && !n && !r && t !== "tspan" && (t === "text" || q(e, "text")));
}
function eb(e, t, n) {
	var r = e, i, a, o;
	if (t === "text") o = r;
	else {
		o = {}, q(r, "text") && (o.text = r.text), q(r, "rich") && (o.rich = r.rich), q(r, "textFill") && (o.fill = r.textFill), q(r, "textStroke") && (o.stroke = r.textStroke), q(r, "fontFamily") && (o.fontFamily = r.fontFamily), q(r, "fontSize") && (o.fontSize = r.fontSize), q(r, "fontStyle") && (o.fontStyle = r.fontStyle), q(r, "fontWeight") && (o.fontWeight = r.fontWeight), a = {
			type: "text",
			style: o,
			silent: !0
		}, i = {};
		var s = q(r, "textPosition");
		n ? i.position = s ? r.textPosition : "inside" : s && (i.position = r.textPosition), q(r, "textPosition") && (i.position = r.textPosition), q(r, "textOffset") && (i.offset = r.textOffset), q(r, "textRotation") && (i.rotation = r.textRotation), q(r, "textDistance") && (i.distance = r.textDistance);
	}
	return tb(o, e), I(o.rich, function(e) {
		tb(e, e);
	}), {
		textConfig: i,
		textContent: a
	};
}
function tb(e, t) {
	t && (t.font = t.textFont || t.font, q(t, "textStrokeWidth") && (e.lineWidth = t.textStrokeWidth), q(t, "textAlign") && (e.align = t.textAlign), q(t, "textVerticalAlign") && (e.verticalAlign = t.textVerticalAlign), q(t, "textLineHeight") && (e.lineHeight = t.textLineHeight), q(t, "textWidth") && (e.width = t.textWidth), q(t, "textHeight") && (e.height = t.textHeight), q(t, "textBackgroundColor") && (e.backgroundColor = t.textBackgroundColor), q(t, "textPadding") && (e.padding = t.textPadding), q(t, "textBorderColor") && (e.borderColor = t.textBorderColor), q(t, "textBorderWidth") && (e.borderWidth = t.textBorderWidth), q(t, "textBorderRadius") && (e.borderRadius = t.textBorderRadius), q(t, "textBoxShadowColor") && (e.shadowColor = t.textBoxShadowColor), q(t, "textBoxShadowBlur") && (e.shadowBlur = t.textBoxShadowBlur), q(t, "textBoxShadowOffsetX") && (e.shadowOffsetX = t.textBoxShadowOffsetX), q(t, "textBoxShadowOffsetY") && (e.shadowOffsetY = t.textBoxShadowOffsetY));
}
function nb(e, t, n) {
	var r = e;
	r.textPosition = r.textPosition || n.position || "inside", n.offset != null && (r.textOffset = n.offset), n.rotation != null && (r.textRotation = n.rotation), n.distance != null && (r.textDistance = n.distance);
	var i = r.textPosition.indexOf("inside") >= 0, a = e.fill || Q.color.neutral99;
	rb(r, t);
	var o = r.textFill == null;
	return i ? o && (r.textFill = n.insideFill || Q.color.neutral00, !r.textStroke && n.insideStroke && (r.textStroke = n.insideStroke), !r.textStroke && (r.textStroke = a), r.textStrokeWidth ??= 2) : (o && (r.textFill = e.fill || n.outsideFill || Q.color.neutral00), !r.textStroke && n.outsideStroke && (r.textStroke = n.outsideStroke)), r.text = t.text, r.rich = t.rich, I(t.rich, function(e) {
		rb(e, e);
	}), r;
}
function rb(e, t) {
	t && (q(t, "fill") && (e.textFill = t.fill), q(t, "stroke") && (e.textStroke = t.fill), q(t, "lineWidth") && (e.textStrokeWidth = t.lineWidth), q(t, "font") && (e.font = t.font), q(t, "fontStyle") && (e.fontStyle = t.fontStyle), q(t, "fontWeight") && (e.fontWeight = t.fontWeight), q(t, "fontSize") && (e.fontSize = t.fontSize), q(t, "fontFamily") && (e.fontFamily = t.fontFamily), q(t, "align") && (e.textAlign = t.align), q(t, "verticalAlign") && (e.textVerticalAlign = t.verticalAlign), q(t, "lineHeight") && (e.textLineHeight = t.lineHeight), q(t, "width") && (e.textWidth = t.width), q(t, "height") && (e.textHeight = t.height), q(t, "backgroundColor") && (e.textBackgroundColor = t.backgroundColor), q(t, "padding") && (e.textPadding = t.padding), q(t, "borderColor") && (e.textBorderColor = t.borderColor), q(t, "borderWidth") && (e.textBorderWidth = t.borderWidth), q(t, "borderRadius") && (e.textBorderRadius = t.borderRadius), q(t, "shadowColor") && (e.textBoxShadowColor = t.shadowColor), q(t, "shadowBlur") && (e.textBoxShadowBlur = t.shadowBlur), q(t, "shadowOffsetX") && (e.textBoxShadowOffsetX = t.shadowOffsetX), q(t, "shadowOffsetY") && (e.textBoxShadowOffsetY = t.shadowOffsetY), q(t, "textShadowColor") && (e.textShadowColor = t.textShadowColor), q(t, "textShadowBlur") && (e.textShadowBlur = t.textShadowBlur), q(t, "textShadowOffsetX") && (e.textShadowOffsetX = t.textShadowOffsetX), q(t, "textShadowOffsetY") && (e.textShadowOffsetY = t.textShadowOffsetY));
}
//#endregion
//#region node_modules/echarts/lib/scale/Scale.js
var ib = function() {
	function e() {}
	return e.prototype.isBlank = function() {
		return this._isBlank;
	}, e.prototype.setBlank = function(e) {
		this._isBlank = e;
	}, e;
}();
nt(ib);
//#endregion
//#region node_modules/echarts/lib/data/OrdinalMeta.js
var ab = 0, ob = function() {
	function e(e) {
		this.categories = e.categories || [], this._needCollect = e.needCollect, this._deduplication = e.deduplication, this.uid = ++ab, this._onCollect = e.onCollect;
	}
	return e.createByAxisModel = function(t) {
		var n = t.option, r = n.data, i = r && L(r, sb);
		return new e({
			categories: i,
			needCollect: !i,
			deduplication: n.dedplication !== !1
		});
	}, e.prototype.getOrdinal = function(e) {
		return this._getOrCreateMap().get(e);
	}, e.prototype.parseAndCollect = function(e) {
		var t, n = this._needCollect;
		if (!U(e) && !n) return e;
		if (n && !this._deduplication) return t = this.categories.length, this.categories[t] = e, this._onCollect && this._onCollect(e, t), t;
		var r = this._getOrCreateMap();
		return t = r.get(e), t ?? (n ? (t = this.categories.length, this.categories[t] = e, r.set(e, t), this._onCollect && this._onCollect(e, t)) : t = NaN), t;
	}, e.prototype._getOrCreateMap = function() {
		return this._map ||= K(this.categories);
	}, e;
}();
function sb(e) {
	return W(e) && e.value != null ? e.value : e + "";
}
var cb = z({
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
});
function lb(e, t, n) {
	var r;
	e ||= {};
	var i = Ag();
	if (i) {
		var a = i.createBreakScaleMapper(t, n);
		a.hasBreaks() && (I(cb, function(t) {
			a[t] && (e[t] = B(a[t], a));
		}), r = a);
	}
	return r ?? gb(e, n), {
		brk: r,
		mapper: e
	};
}
function ub(e, t) {
	I(cb, function(n) {
		e[n] = t[n];
	});
}
function db(e, t) {
	e.freeze = Re;
}
function fb(e) {
	return e.getExtentUnsafe(0, 2);
}
function pb(e, t) {
	return e.getExtentUnsafe(1, t) || e.getExtentUnsafe(0, t);
}
function mb(e) {
	var t = pb(e, 3);
	return t[1] - t[0];
}
function hb(e) {
	var t = e.getExtentUnsafe(0, 3);
	return t[1] - t[0];
}
function gb(e, t) {
	var n = e || {}, r = [];
	return n._extents = r, r[0] = t ? t.slice() : sl(), N(n, _b), n;
}
var _b = {
	needTransform: function() {
		return !1;
	},
	normalize: function(e) {
		var t = this._extents[1] || this._extents[0];
		return t[1] === t[0] ? .5 : (e - t[0]) / (t[1] - t[0]);
	},
	scale: function(e) {
		var t = this._extents[1] || this._extents[0];
		return e * (t[1] - t[0]) + t[0];
	},
	transformIn: function(e) {
		return e;
	},
	transformOut: function(e) {
		return e;
	},
	contain: function(e) {
		var t = pb(this, null);
		return e >= t[0] && e <= t[1];
	},
	getExtent: function() {
		return this._extents[0].slice();
	},
	getExtentUnsafe: function(e) {
		return this._extents[e];
	},
	setExtent: function(e, t) {
		vb(this._extents, 0, e, t);
	},
	setExtent2: function(e, t, n) {
		var r = this._extents;
		r[e] || (r[e] = r[0].slice()), vb(r, e, t, n);
	},
	freeze: function() {}
};
function vb(e, t, n, r) {
	pl(n, r) && (e[t][0] = n, e[t][1] = r);
}
//#endregion
//#region node_modules/echarts/lib/scale/helper.js
function yb(e) {
	return bb(e) || Sb(e);
}
function bb(e) {
	return e.type === "interval";
}
function xb(e) {
	return e.type === "time";
}
function Sb(e) {
	return e.type === "log";
}
function Cb(e) {
	return e.type === "ordinal";
}
function wb(e) {
	var t = lc(e), n = Is(10, t), r = Ns(e / n);
	return r ? r === 2 ? r = 3 : r === 3 ? r = 5 : r *= 2 : r = 1, qs(r * n, -t);
}
function Tb(e) {
	return Xs(e) + 2;
}
function Eb(e, t) {
	return Ls(e) / Ls(t);
}
function Db(e, t, n) {
	var r = n && n.lookup;
	if (r) {
		for (var i = 0; i < r.from.length; i++) if (e === r.from[i]) return r.to[i];
	}
	return Is(t, e);
}
function Ob(e, t, n) {
	var r = e.slice();
	if (r[0] === r[1]) {
		var i = n && n.ctnShp;
		if (r[0] !== 0) {
			var a = Ms(r[0]);
			t[1] || (r[1] += a / 2), r[0] -= a / 2;
		} else i && (r[0] = -1), r[1] = 1;
	}
	return (!fl(r[0]) || !fl(r[1])) && (r[0] = 0, r[1] = 1), r[1] < r[0] && r.reverse(), r;
}
function kb(e, t) {
	return [e[0] !== t[0], e[1] !== t[1]];
}
function Ab(e, t) {
	return e ||= t, Ns(js(e, 1));
}
function jb(e, t, n) {
	var r = fb(e), i = r[0], a = e.count(), o = Math.max((t || 0) + 1, 1);
	i !== 0 && o > 1 && a / o > 2 && (i = Math.round(Math.ceil(i / o) * o)), i !== r[0] && c(r[0], !0, !0);
	for (var s = i; s <= r[1]; s += o) c(s, !1, s === r[0] || s === r[1]);
	s - o !== r[1] && c(r[1], !0, !0);
	function c(e, t, r) {
		n({
			value: e,
			offInterval: t
		}, r);
	}
}
//#endregion
//#region node_modules/echarts/lib/scale/Ordinal.js
var Mb = function(e) {
	l(t, e);
	function t(n) {
		var r = e.call(this) || this;
		r.type = "ordinal", r.parse = t.parse, ub(r, t.decoratedMethods);
		var i = n.ordinalMeta;
		i ||= new ob({}), V(i) && (i = new ob({ categories: L(i, function(e) {
			return W(e) ? e.value : e;
		}) })), r._ordinalMeta = i;
		var a = lb(null, null, n.extent || [0, i.categories.length - 1]);
		return r._mapper = a.mapper, db(r, a.mapper), r;
	}
	return t.parse = function(e) {
		return e == null ? e = NaN : U(e) ? (e = this._ordinalMeta.getOrdinal(e), e ??= NaN) : e = Ns(e), e;
	}, t.prototype.getTicks = function() {
		var e = [];
		return jb(this, 0, function(t) {
			e.push(t);
		}), e;
	}, t.prototype.getMinorTicks = function(e) {}, t.prototype.setSortInfo = function(e) {
		if (e == null) {
			this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
			return;
		}
		for (var t = e.ordinalNumbers, n = this._ordinalNumbersByTick = [], r = this._ticksByOrdinalNumber = [], i = 0, a = this._ordinalMeta.categories.length, o = As(a, t.length); i < o; ++i) {
			var s = n[i] = t[i];
			r[s] = i;
		}
		for (var c = 0; i < a; ++i) {
			for (; r[c] != null;) c++;
			n[i] = c, r[c] = i;
		}
	}, t.prototype._getTickNumber = function(e) {
		var t = this._ticksByOrdinalNumber;
		return t && e >= 0 && e < t.length ? t[e] : e;
	}, t.prototype.getRawOrdinalNumber = function(e) {
		var t = this._ordinalNumbersByTick;
		return t && e >= 0 && e < t.length ? t[e] : e;
	}, t.prototype.getLabel = function(e) {
		if (!this.isBlank()) {
			var t = this.getRawOrdinalNumber(e.value), n = this._ordinalMeta.categories[t];
			return n == null ? "" : n + "";
		}
	}, t.prototype.count = function() {
		var e = fb(this._mapper);
		return e[1] - e[0] + 1;
	}, t.prototype.getOrdinalMeta = function() {
		return this._ordinalMeta;
	}, t.type = "ordinal", t.decoratedMethods = {
		needTransform: function() {
			return this._mapper.needTransform();
		},
		contain: function(e) {
			return this._mapper.contain(this._getTickNumber(e)) && e >= 0 && e < this._ordinalMeta.categories.length;
		},
		normalize: function(e) {
			return this._mapper.normalize(this._getTickNumber(e));
		},
		scale: function(e) {
			return this.getRawOrdinalNumber(Ns(this._mapper.scale(e)));
		},
		transformIn: function(e, t) {
			return this._mapper.transformIn(this._getTickNumber(e), t);
		},
		transformOut: function(e, t) {
			return this.getRawOrdinalNumber(this._mapper.transformOut(e, t));
		},
		getExtent: function() {
			return this._mapper.getExtent();
		},
		getExtentUnsafe: function(e, t) {
			return this._mapper.getExtentUnsafe(e, t);
		},
		setExtent: function(e, t) {
			return this._mapper.setExtent(e, t);
		},
		setExtent2: function(e, t, n) {
			return this._mapper.setExtent2(e, t, n);
		}
	}, t;
}(ib);
ib.registerClass(Mb);
//#endregion
//#region node_modules/echarts/lib/scale/minorTicks.js
function Nb(e, t, n, r) {
	for (var i = e.getTicks({ expandToNicedExtent: !0 }), a = [], o = e.getExtent(), s = 1; s < i.length; s++) {
		var c = i[s], l = i[s - 1];
		if (!(l.break || c.break)) {
			for (var u = 0, d = [], f = (c.value - l.value) / t, p = Tb(f); u < t - 1;) {
				var m = qs(l.value + (u + 1) * f, p);
				m > o[0] && m < o[1] && d.push(m), u++;
			}
			var h = Ag();
			h && h.pruneTicksByBreak("auto", d, n, function(e) {
				return e;
			}, r, o), a.push(d);
		}
	}
	return a;
}
//#endregion
//#region node_modules/echarts/lib/scale/Interval.js
var Pb = function(e) {
	l(t, e);
	function t(n) {
		var r = e.call(this) || this;
		return r.type = "interval", r.parse = t.parse, n ||= {}, r.brk = lb(r, jg(r, n), null).brk, r._cfg = {
			interval: 0,
			intervalPrecision: 2,
			intervalCount: void 0,
			niceExtent: void 0
		}, r;
	}
	return t.parse = function(e) {
		return e == null || e === "" ? NaN : Number(e);
	}, t.prototype.getConfig = function() {
		return j(this._cfg);
	}, t.prototype.setConfig = function(e) {
		var t = fb(this);
		this._cfg = e = j(e), e.niceExtent ?? (e.niceExtent = t.slice()), e.intervalPrecision ?? (e.intervalPrecision = Tb(e.interval));
	}, t.prototype.getTicks = function(e) {
		e ||= {};
		var t = this._cfg, n = t.interval, r = fb(this), i = t.niceExtent, a = t.intervalPrecision, o = Ag(), s = this.brk, c = o && s, l = [];
		if (!n) return l;
		if (e.breakTicks === "only_break" && c) return o.addBreaksToTicks(l, s.breaks, r), l;
		var u = 3e3;
		r[0] < i[0] && l.push({ value: e.expandToNicedExtent ? qs(i[0] - n, a) : r[0] });
		for (var d = function(e, t) {
			return Ns((t - e) / n);
		}, f = t.intervalCount, p = i[0], m = 0;; m++) {
			if (f == null) {
				if (p > i[1] || !isFinite(p) || !isFinite(i[1])) break;
			} else {
				if (m > f) break;
				p = As(p, i[1]), m === f && (p = i[1]);
			}
			if (l.push({ value: p }), p = qs(p + n, a), s) {
				var h = s.calcNiceTickMultiple(p, d);
				h >= 0 && (p = qs(p + h * n, a));
			}
			if (l.length > 0 && p === l[l.length - 1].value) break;
			if (l.length > u) return [];
		}
		var g = l.length ? l[l.length - 1].value : i[1];
		return r[1] > g && l.push({ value: e.expandToNicedExtent ? qs(g + n, a) : r[1] }), c && o.pruneTicksByBreak(e.pruneByBreak, l, s.breaks, function(e) {
			return e.value;
		}, t.interval, r), c && e.breakTicks !== "none" && o.addBreaksToTicks(l, s.breaks, r), l;
	}, t.prototype.getMinorTicks = function(e) {
		return Nb(this, e, Mg(this), this._cfg.interval);
	}, t.prototype.getLabel = function(e, t) {
		if (e == null) return "";
		var n = t && t.precision;
		return n == null ? n = Xs(e.value) || 0 : n === "auto" && (n = this._cfg.intervalPrecision), __(qs(e.value, n, !0));
	}, t.type = "interval", t;
}(ib);
ib.registerClass(Pb);
//#endregion
//#region node_modules/echarts/lib/scale/Time.js
var Fb = function(e, t, n, r) {
	for (; n < r;) {
		var i = n + r >>> 1;
		e[i][1] < t ? n = i + 1 : r = i;
	}
	return n;
}, Ib = function(e) {
	l(t, e);
	function t(n) {
		var r = e.call(this) || this;
		return r.type = "time", r.parse = t.parse, r._locale = n.locale, r._useUTC = n.useUTC, r._interval = 0, r.brk = lb(r, jg(r, n), null).brk, r;
	}
	return t.prototype.getLabel = function(e) {
		return Qg(e.value, Ug[Zg(Yg(this._minLevelUnit))] || Ug.second, this._useUTC, this._locale);
	}, t.prototype.getFormattedLabel = function(e, t, n) {
		return $g(e, t, n, this._locale, this._useUTC);
	}, t.prototype.getTicks = function(e) {
		e ||= {};
		var t = this._interval, n = fb(this), r = Ag(), i = this.brk, a = r && i, o = [];
		if (!t) return o;
		var s = this._useUTC;
		if (a && e.breakTicks === "only_break") return Ag().addBreaksToTicks(o, i.breaks, n), o;
		o = Kb(this._minLevelUnit, this._approxInterval, s, n, hb(this), i);
		var c = Wg.length - 1, l = 0;
		return I(o, function(e) {
			e.time && (c = Math.min(c, F(Wg, e.time.upperTimeUnit)), l = Math.max(l, e.time.level));
		}), a && Ag().pruneTicksByBreak(e.pruneByBreak, o, i.breaks, function(e) {
			return e.value;
		}, this._approxInterval, n), a && e.breakTicks !== "none" && Ag().addBreaksToTicks(o, i.breaks, n, function(e) {
			for (var t = Math.max(F(Wg, e_(e.vmin, s)), F(Wg, e_(e.vmax, s))), n = 0, r = 0; r < Wg.length; r++) if (!Rb(Wg[r], e.vmin, e.vmax, s)) {
				n = r;
				break;
			}
			var i = Math.min(n, c);
			return {
				level: l,
				lowerTimeUnit: Wg[Math.max(i, t)],
				upperTimeUnit: Wg[i]
			};
		}), o;
	}, t.prototype.getMinorTicks = function(e) {
		return Nb(this, e, Mg(this), this._interval);
	}, t.prototype.setTimeInterval = function(e) {
		this._interval = e.interval, this._approxInterval = e.approxInterval, this._minLevelUnit = e.minLevelUnit;
	}, t.parse = function(e) {
		return me(e) ? Math.round(e) : +sc(e);
	}, t.type = "time", t;
}(ib), Lb = [
	["second", Pg],
	["minute", Fg],
	["hour", Ig],
	["quarter-day", Ig * 6],
	["half-day", Ig * 12],
	["day", Lg * 1.2],
	["half-week", Lg * 3.5],
	["week", Lg * 7],
	["month", Lg * 31],
	["quarter", Lg * 95],
	["half-year", Rg / 2],
	["year", Rg]
];
function Rb(e, t, n, r) {
	return t_(new Date(t), e, r).getTime() === t_(new Date(n), e, r).getTime();
}
function zb(e, t) {
	return e /= Lg, e > 16 ? 16 : e > 7.5 ? 7 : e > 3.5 ? 4 : e > 1.5 ? 2 : 1;
}
function Bb(e) {
	var t = 30 * Lg;
	return e /= t, e > 6 ? 6 : e > 3 ? 3 : e > 2 ? 2 : 1;
}
function Vb(e) {
	return e /= Ig, e > 12 ? 12 : e > 6 ? 6 : e > 3.5 ? 4 : e > 2 ? 2 : 1;
}
function Hb(e, t) {
	return e /= t ? Fg : Pg, e > 30 ? 30 : e > 20 ? 20 : e > 15 ? 15 : e > 10 ? 10 : e > 5 ? 5 : e > 2 ? 2 : 1;
}
function Ub(e) {
	return js(uc(e, !0), 1);
}
function Wb(e, t, n) {
	var r = Math.max(0, F(Wg, t) - 1);
	return t_(new Date(e), Wg[r], n).getTime();
}
function Gb(e, t) {
	var n = /* @__PURE__ */ new Date(0);
	n[e](1);
	var r = n.getTime();
	n[e](1 + t);
	var i = n.getTime() - r;
	return function(e, t) {
		return Math.max(0, Math.round((t - e) / i));
	};
}
function Kb(e, t, n, r, i, a) {
	var o = Gg, s = 0;
	function c(e, t, n, i, o, c, l) {
		for (var u = Gb(o, e), d = t, f = new Date(d); d < n && d <= r[1] && (l.push({ value: d }), !(s++ > 3e3));) if (f[o](f[i]() + e), d = f.getTime(), a) {
			var p = a.calcNiceTickMultiple(d, u);
			p > 0 && (f[o](f[i]() + p * e), d = f.getTime());
		}
		l.push({
			value: d,
			notAdd: d > r[1]
		});
	}
	function l(e, i, a) {
		var o = [], s = !i.length;
		if (!Rb(Yg(e), r[0], r[1], n)) {
			s && (i = [{ value: Wb(r[0], e, n) }, { value: r[1] }]);
			for (var l = 0; l < i.length - 1; l++) {
				var u = i[l].value, d = i[l + 1].value;
				if (u !== d) {
					var f = void 0, p = void 0, m = void 0, h = !1;
					switch (e) {
						case "year":
							f = Math.max(1, Math.round(t / Lg / 365)), p = n_(n), m = l_(n);
							break;
						case "half-year":
						case "quarter":
						case "month":
							f = Bb(t), p = r_(n), m = u_(n);
							break;
						case "week":
						case "half-week":
						case "day":
							f = zb(t, 31), p = i_(n), m = d_(n), h = !0;
							break;
						case "half-day":
						case "quarter-day":
						case "hour":
							f = Vb(t), p = a_(n), m = f_(n);
							break;
						case "minute":
							f = Hb(t, !0), p = o_(n), m = p_(n);
							break;
						case "second":
							f = Hb(t, !1), p = s_(n), m = m_(n);
							break;
						case "millisecond": f = Ub(t), p = c_(n), m = h_(n);
					}
					d >= r[0] && u <= r[1] && c(f, u, d, p, m, h, o), e === "year" && a.length > 1 && l === 0 && a.unshift({ value: a[0].value - f });
				}
			}
			for (var l = 0; l < o.length; l++) a.push(o[l]);
		}
	}
	for (var u = [], d = [], f = 0, p = 0, m = 0; m < o.length; ++m) {
		var h = Yg(o[m]);
		if (Xg(o[m]) && (l(o[m], u[u.length - 1] || [], d), h !== (o[m + 1] ? Yg(o[m + 1]) : null))) {
			if (d.length) {
				p = f, d.sort(function(e, t) {
					return e.value - t.value;
				});
				for (var g = [], _ = 0; _ < d.length; ++_) {
					var v = d[_].value;
					(_ === 0 || d[_ - 1].value !== v) && (g.push(d[_]), v >= r[0] && v <= r[1] && f++);
				}
				var y = i / t;
				if (f > y * 1.5 && p > y / 1.5 || (u.push(g), f > y || e === o[m])) break;
			}
			d = [];
		}
	}
	for (var b = le(L(u, function(e) {
		return le(e, function(e) {
			return e.value >= r[0] && e.value <= r[1] && !e.notAdd;
		});
	}), function(e) {
		return e.length > 0;
	}), x = b.length - 1, S = [], m = 0; m < b.length; ++m) for (var C = b[m], w = 0; w < C.length; ++w) {
		var T = e_(C[w].value, n);
		S.push({
			value: C[w].value,
			time: {
				level: x - m,
				upperTimeUnit: T,
				lowerTimeUnit: T
			}
		});
	}
	vl(S, yl, null), S.sort(function(e, t) {
		return e.value - t.value;
	});
	var E = S[0], D = S[S.length - 1], O = e_(r[0], n), k = e_(r[1], n);
	return (!E || E.value > r[0]) && S.unshift({
		value: r[0],
		time: {
			level: 0,
			upperTimeUnit: O,
			lowerTimeUnit: O
		},
		notNice: !0
	}), (!D || D.value < r[1]) && S.push({
		value: r[1],
		time: {
			level: 0,
			upperTimeUnit: k,
			lowerTimeUnit: k
		},
		notNice: !0
	}), S;
}
var qb = function(e, t) {
	var n = e.getExtent();
	if (n[0] === n[1] && (n[0] -= Lg, n[1] += Lg), n[1] === -Infinity && n[0] === Infinity) {
		var r = /* @__PURE__ */ new Date();
		n[1] = +new Date(r.getFullYear(), r.getMonth(), r.getDate()), n[0] = n[1] - Lg;
	}
	e.setExtent(n[0], n[1]);
	var i = Ab(t.splitNumber, 10), a = hb(e) / i, o = t.minInterval, s = t.maxInterval;
	o != null && a < o && (a = o), s != null && a > s && (a = s);
	var c = Lb.length, l = Math.min(Fb(Lb, a, 0, c), c - 1), u = Lb[l][1], d = Lb[Math.max(l - 1, 0)][0];
	e.setTimeInterval({
		approxInterval: a,
		interval: u,
		minLevelUnit: d
	});
};
ib.registerClass(Ib);
//#endregion
//#region node_modules/echarts/lib/scale/Log.js
var Jb = 0, Yb = 1, Xb = 2, Zb = function(e) {
	l(t, e);
	function t(n) {
		var r = e.call(this) || this;
		r.type = "log", r.parse = Pb.parse, r.base = n.logBase || 10;
		var i = [], a = [], o = r._lookup = {
			from: i,
			to: a
		};
		i[Jb] = i[Yb] = a[Jb] = a[Yb] = NaN, ub(r, t.mapperMethods);
		var s = Ag(), c = n.breakOption, l = { lookup: o };
		return s && s.parseAxisBreakOptionInwardTransform(c, r, { noNegative: !0 }, Xb, l), r.powStub = new Pb({ breakParsed: l.original }), r.intervalStub = new Pb({ breakParsed: l.transformed }), db(r, r.intervalStub), r;
	}
	return t.prototype.getTicks = function(e) {
		var t = this.base, n = this.powStub, r = Ag(), i = this.intervalStub, a = { lookup: {
			from: i.getExtent(),
			to: n.getExtent()
		} };
		return L(i.getTicks(e || {}), function(e) {
			var i = e.value, o = Db(i, t, a), s;
			if (r) {
				var c = r.getTicksBreakOutwardTransform(this, e, Mg(n), this._lookup);
				c && (s = c.vBreak, o = c.tickVal);
			}
			return {
				value: o,
				break: s
			};
		}, this);
	}, t.prototype.getMinorTicks = function(e) {
		return Nb(this, e, Mg(this.powStub), this.intervalStub.getConfig().interval);
	}, t.prototype.getLabel = function(e, t) {
		return this.intervalStub.getLabel(e, t);
	}, t.type = "log", t.mapperMethods = {
		needTransform: function() {
			return !0;
		},
		normalize: function(e) {
			return this.intervalStub.normalize(Eb(e, this.base));
		},
		scale: function(e) {
			return Db(this.intervalStub.scale(e), this.base, null);
		},
		transformIn: function(e, t) {
			return e = Eb(e, this.base), t && t.depth === 2 ? e : this.intervalStub.transformIn(e, t);
		},
		transformOut: function(e, t) {
			var n = t ? t.depth : null;
			return Qb.depth = n, $b.lookup = this._lookup, Db(n === 2 ? e : this.intervalStub.transformOut(e, Qb), this.base, $b);
		},
		contain: function(e) {
			return this.powStub.contain(e);
		},
		setExtent: function(e, t) {
			this.setExtent2(0, e, t);
		},
		setExtent2: function(e, t, n) {
			if (!(!pl(t, n) || t <= 0 || n <= 0)) {
				var r = ex, i = ex;
				if (e === 0) {
					var a = this._lookup;
					r = a.to, i = a.from;
				}
				this.powStub.setExtent2(e, r[Jb] = t, r[Yb] = n);
				var o = this.base;
				this.intervalStub.setExtent2(e, i[Jb] = Eb(t, o), i[Yb] = Eb(n, o));
			}
		},
		getFilter: function() {
			return { g: 0 };
		},
		sanitize: function(e, t) {
			return pl(t[0], t[1]) && vc(e) && e <= 0 && (e = t[0]), e;
		},
		getDefaultStartValue: function() {
			return 1;
		},
		getExtent: function() {
			return this.powStub.getExtent();
		},
		getExtentUnsafe: function(e, t) {
			return t === null ? this.powStub.getExtentUnsafe(e, null) : this.intervalStub.getExtentUnsafe(e, t);
		}
	}, t;
}(ib);
ib.registerClass(Zb);
var Qb = {}, $b = {}, ex = [], tx = {
	value: 1,
	category: 1,
	time: 1,
	log: 1
}, nx = Yc();
function rx(e) {
	var t = e.get("type");
	return (t == null || !q(tx, t) && !ib.getClass(t)) && (t = "value"), t;
}
function ix(e, t, n) {
	var r = Ag(), i;
	switch (r && (i = hx(e, t, n)), t) {
		case "category": return new Mb({
			ordinalMeta: e.getOrdinalMeta ? e.getOrdinalMeta() : e.getCategories(),
			extent: sl()
		});
		case "time": return new Ib({
			locale: e.ecModel.getLocaleModel(),
			useUTC: e.ecModel.get("useUTC"),
			breakOption: i
		});
		case "log": return new Zb({
			logBase: e.get("logBase"),
			breakOption: i
		});
		case "value": return new Pb({ breakOption: i });
		default: return new ((ib.getClass(t)) || Pb)({});
	}
}
function ax(e, t, n) {
	var r = n ? pb(e, null) : e.getExtentUnsafe(0, null), i = r[0], a = r[1];
	return pl(i, a) ? i === t || a === t ? 2 : i < t && a > t ? 1 : 3 : 3;
}
function ox(e) {
	nx(e).noOnMyZero = !0;
}
function sx(e) {
	return nx(e).noOnMyZero;
}
function cx(e) {
	var t = e.getLabelModel().get("formatter");
	if (e.type === "time") {
		var n = Kg(t);
		return function(t, r) {
			return e.scale.getFormattedLabel(t, r, n);
		};
	}
	if (U(t)) return function(n) {
		var r = e.scale.getLabel(n);
		return t.replace("{value}", r ?? "");
	};
	if (H(t)) {
		if (e.type === "category") return function(n, r) {
			return t(lx(e, n), n.value - e.scale.getExtent()[0], null);
		};
		var r = Ag();
		return function(n, i) {
			var a = null;
			return r && (a = r.makeAxisLabelFormatterParamBreak(a, n.break)), t(lx(e, n), i, a);
		};
	}
	return function(t) {
		return e.scale.getLabel(t);
	};
}
function lx(e, t) {
	var n = e.scale;
	return Cb(n) ? n.getLabel(t) : t.value;
}
function ux(e) {
	return e.get("interval") ?? "auto";
}
function dx(e) {
	return e.type === "category" && ux(e.getLabelModel()) === 0;
}
function fx(e, t) {
	var n = {};
	return I(e.mapDimensionsAll(t), function(t) {
		n[Kh(e, t)] = !0;
	}), z(n);
}
function px(e) {
	return e === "middle" || e === "center";
}
function mx(e) {
	return e.getShallow("show");
}
function hx(e, t, n) {
	var r = e.get("breaks", !0);
	if (r != null) return !Ag() || !n || !gx(t) ? void 0 : r;
}
function gx(e) {
	return e !== "category";
}
function _x(e, t, n, r, i, a) {
	var o = Sb(e), s = o ? e.intervalStub : e;
	if (s.setExtent(r[0], r[1]), o) {
		var c = e.powStub, l = { depth: 2 }, u = e.transformOut(r[0], l), d = e.transformOut(r[1], l), f = kb(n, r);
		t[0] && !f[0] && (u = i[0]), t[1] && !f[1] && (d = i[1]), c.setExtent(u, d);
	}
	s.setConfig(a);
}
function vx(e, t) {
	return Cb(e) ? e.getRawOrdinalNumber(t.value) : t.value;
}
function yx(e, t) {
	return Cb(e) && !!t.get("boundaryGap");
}
//#endregion
//#region node_modules/echarts/lib/chart/line/LineView.js
function bx(e, t) {
	if (e.length === t.length) {
		for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return;
		return !0;
	}
}
function xx(e) {
	for (var t = sl(), n = sl(), r = 0; r < e.length;) {
		var i = e[r++], a = e[r++];
		Ey(i, a) || (cl(t, i), cl(n, a));
	}
	return [t, n];
}
function Sx(e, t) {
	var n = xx(e), r = n[0], i = n[1], a = xx(t), o = a[0], s = a[1];
	return Math.max(Math.abs(r[0] - o[0]), Math.abs(i[0] - s[0]), Math.abs(r[1] - o[1]), Math.abs(i[1] - s[1]));
}
function Cx(e) {
	return me(e) ? e : e ? .5 : 0;
}
function Tx(e, t, n) {
	if (n.valueDim == null) return [];
	for (var r = t.count(), i = ky(r * 2), a = 0; a < r; a++) {
		var o = Ty(n, e, t, a);
		i[a * 2] = o[0], i[a * 2 + 1] = o[1];
	}
	return i;
}
function Ex(e, t, n, r, i) {
	var a = n.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], c = 0, l = [], u = [], d = [], f = [];
	if (i) {
		for (c = 0; c < e.length; c += 2) {
			var p = t || e;
			Ey(p[c], p[c + 1]) || f.push(e[c], e[c + 1]);
		}
		e = f;
	}
	for (c = 0; c < e.length - 2; c += 2) switch (d[0] = e[c + 2], d[1] = e[c + 3], u[0] = e[c], u[1] = e[c + 1], s.push(u[0], u[1]), r) {
		case "end":
			l[o] = d[o], l[1 - o] = u[1 - o], s.push(l[0], l[1]);
			break;
		case "middle":
			var m = (u[o] + d[o]) / 2, h = [];
			l[o] = h[o] = m, l[1 - o] = u[1 - o], h[1 - o] = d[1 - o], s.push(l[0], l[1]), s.push(h[0], h[1]);
			break;
		default: l[o] = u[o], l[1 - o] = d[1 - o], s.push(l[0], l[1]);
	}
	return s.push(e[c++], e[c++]), s;
}
function Dx(e, t) {
	var n = [], r = e.length, i, a;
	function o(e, t, n) {
		var r = e.coord;
		return {
			coord: n,
			color: fi((n - r) / (t.coord - r), [e.color, t.color])
		};
	}
	for (var s = 0; s < r; s++) {
		var c = e[s], l = c.coord;
		if (l < 0) i = c;
		else if (l > t) {
			a ? n.push(o(a, c, t)) : i && n.push(o(i, c, 0), o(i, c, t));
			break;
		} else i &&= (n.push(o(i, c, 0)), null), n.push(c), a = c;
	}
	return n;
}
function Ox(e, t, n) {
	var r = e.getVisual("visualMeta");
	if (r && r.length && e.count() && t.type === "cartesian2d") {
		for (var i, a, o = r.length - 1; o >= 0; o--) {
			var s = e.getDimensionInfo(r[o].dimension);
			if (i = s && s.coordDim, i === "x" || i === "y") {
				a = r[o];
				break;
			}
		}
		if (a) {
			var c = t.getAxis(i), l = L(a.stops, function(e) {
				return {
					coord: c.toGlobalCoord(c.dataToCoord(e.value)),
					color: e.color
				};
			}), u = l.length, d = a.outerColors.slice();
			u && l[0].coord > l[u - 1].coord && (l.reverse(), d.reverse());
			var f = Dx(l, i === "x" ? n.getWidth() : n.getHeight()), p = f.length;
			if (!p && u) return l[0].coord < 0 ? d[1] ? d[1] : l[u - 1].color : d[0] ? d[0] : l[0].color;
			var m = 10, h = f[0].coord - m, g = f[p - 1].coord + m, _ = g - h;
			if (_ < .001) return "transparent";
			I(f, function(e) {
				e.offset = (e.coord - h) / _;
			}), f.push({
				offset: p ? f[p - 1].offset : .5,
				color: d[1] || "transparent"
			}), f.unshift({
				offset: p ? f[0].offset : .5,
				color: d[0] || "transparent"
			});
			var v = new nf(0, 0, 0, 0, f, !0);
			return v[i] = h, v[i + "2"] = g, v;
		}
	}
}
function kx(e, t, n) {
	var r = e.get("showAllSymbol"), i = r === "auto";
	if (!r || i) {
		var a = n.getAxesByScale("ordinal")[0];
		if (a && !(i && Ax(a, t))) {
			var o = t.mapDimension(a.dim), s = {};
			return I(a.getViewLabels(), function(e) {
				e.tick.offInterval || (s[vx(a.scale, e.tick)] = 1);
			}), function(e) {
				return !s.hasOwnProperty(t.get(o, e));
			};
		}
	}
}
function Ax(e, t) {
	var n = e.getExtent(), r = Math.abs(n[1] - n[0]) / e.scale.count();
	isNaN(r) && (r = 0);
	for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a) if (gy.getSymbolSize(t, o)[+!!e.isHorizontal()] * 1.5 > r) return !1;
	return !0;
}
function jx(e) {
	for (var t = e.length / 2; t > 0 && Ey(e[t * 2 - 2], e[t * 2 - 1]); t--);
	return t - 1;
}
function Mx(e, t) {
	return [e[t * 2], e[t * 2 + 1]];
}
function Nx(e, t, n) {
	for (var r = e.length / 2, i = n === "x" ? 0 : 1, a, o, s = 0, c = -1, l = 0; l < r; l++) if (o = e[l * 2 + i], !Ey(o, e[l * 2 + 1 - i])) {
		if (l === 0) {
			a = o;
			continue;
		}
		if (a <= t && o >= t || a >= t && o <= t) {
			c = l;
			break;
		}
		s = l, a = o;
	}
	return {
		range: [s, c],
		t: (t - a) / (o - a)
	};
}
function Px(e) {
	if (e.get(["endLabel", "show"])) return !0;
	for (var t = 0; t < Ul.length; t++) if (e.get([
		Ul[t],
		"endLabel",
		"show"
	])) return !0;
	return !1;
}
function Fx(e, t, n, r) {
	if (Qy(t, "cartesian2d")) {
		var i = r.getModel("endLabel"), a = i.get("valueAnimation"), o = r.getData(), s = { lastFrameIndex: 0 }, c = Px(r) ? function(n, r) {
			e._endLabelOnDuring(n, r, o, s, a, i, t);
		} : null, l = t.getBaseAxis().isHorizontal(), u = Yy(t, n, r, function() {
			var t = e._endLabel;
			t && n && s.originalX != null && t.attr({
				x: s.originalX,
				y: s.originalY
			});
		}, c);
		if (!r.get("clip", !0)) {
			var d = u.shape, f = Math.max(d.width, d.height);
			l ? (d.y -= f, d.height += f * 2) : (d.x -= f, d.width += f * 2);
		}
		return c && c(1, u), u;
	}
	return Xy(t, n, r);
}
function Ix(e, t) {
	var n = t.getBaseAxis(), r = n.isHorizontal(), i = n.inverse, a = r ? i ? "right" : "left" : "center", o = r ? "middle" : i ? "top" : "bottom";
	return { normal: {
		align: e.get("align") || a,
		verticalAlign: e.get("verticalAlign") || o
	} };
}
var Lx = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.init = function() {
		var e = new hd(), t = new Sy();
		this.group.add(t.group), this._symbolDraw = t, this._lineGroup = e, this._changePolyState = B(this._changePolyState, this);
	}, t.prototype.render = function(e, t, n) {
		var r = e.coordinateSystem, i = this.group, a = e.getData(), o = e.getModel("lineStyle"), s = e.getModel("areaStyle"), c = a.getLayout("points") || [], l = r.type === "polar", u = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, m = this._lineGroup, h = !t.ssr && e.get("animation"), g = !s.isEmpty(), _ = s.get("origin"), v = Cy(r, a, _), y = g && Tx(r, a, v), b = e.get("showSymbol"), x = e.get("connectNulls"), S = b && !l && kx(e, a, r), C = this._data;
		C && C.eachItemGraphicEl(function(e, t) {
			e.__temp && (i.remove(e), C.setItemGraphicEl(t, null));
		}), b || d.remove(), i.add(m);
		var w = !l && e.get("step"), T;
		r && r.getArea && e.get("clip", !0) && (T = r.getArea(), T.width == null ? T.r0 && (T.r0 -= .5, T.r += .5) : (T.x -= .1, T.y -= .1, T.width += .2, T.height += .2)), this._clipShapeForSymbol = T;
		var E = Ox(a, r, n) || a.getVisual("style")[a.getVisual("drawType")];
		if (!(f && u.type === r.type && w === this._step)) b && d.updateData(a, {
			isIgnore: S,
			clipShape: T,
			disableAnimation: !0,
			getSymbolPoint: function(e) {
				return [c[e * 2], c[e * 2 + 1]];
			}
		}), h && this._initSymbolLabelAnimation(a, r, T), w && (y &&= Ex(y, c, r, w, x), c = Ex(c, null, r, w, x)), f = this._newPolyline(c), g ? p = this._newPolygon(c, y) : p &&= (m.remove(p), this._polygon = null), l || this._initOrUpdateEndLabel(e, r, D_(E)), m.setClipPath(Fx(this, r, !0, e));
		else {
			g && !p ? p = this._newPolygon(c, y) : p && !g && (m.remove(p), p = this._polygon = null), l || this._initOrUpdateEndLabel(e, r, D_(E));
			var D = m.getClipPath();
			D ? bf(D, { shape: Fx(this, r, !1, e).shape }, e) : m.setClipPath(Fx(this, r, !0, e)), b && d.updateData(a, {
				isIgnore: S,
				clipShape: T,
				disableAnimation: !0,
				getSymbolPoint: function(e) {
					return [c[e * 2], c[e * 2 + 1]];
				}
			}), (!bx(this._stackedOnPoints, y) || !bx(this._points, c)) && (h ? this._doUpdateAnimation(a, y, r, n, w, _, x) : (w && (y &&= Ex(y, c, r, w, x), c = Ex(c, null, r, w, x)), f.setShape({ points: c }), p && p.setShape({
				points: c,
				stackedOnPoints: y
			})));
		}
		var O = e.getModel("emphasis"), k = O.get("focus"), A = O.get("blurScope"), ee = O.get("disabled");
		if (f.useStyle(P(o.getLineStyle(), {
			fill: "none",
			stroke: E,
			lineJoin: "bevel"
		})), zu(f, e, "lineStyle"), f.style.lineWidth > 0 && e.get([
			"emphasis",
			"lineStyle",
			"width"
		]) === "bolder") {
			var te = f.getState("emphasis").style;
			te.lineWidth = +f.style.lineWidth + 1;
		}
		Z(f).seriesIndex = e.seriesIndex, Fu(f, k, A, ee);
		var ne = Cx(e.get("smooth")), j = e.get("smoothMonotone");
		if (f.setShape({
			smooth: ne,
			smoothMonotone: j,
			connectNulls: x
		}), p) {
			var M = a.getCalculationInfo("stackedOnSeries"), re = 0;
			p.useStyle(P(s.getAreaStyle(), {
				fill: E,
				opacity: .7,
				lineJoin: "bevel",
				decal: a.getVisual("style").decal
			})), M && (re = Cx(M.get("smooth"))), p.setShape({
				smooth: ne,
				stackedOnSmooth: re,
				smoothMonotone: j,
				connectNulls: x
			}), zu(p, e, "areaStyle"), Z(p).seriesIndex = e.seriesIndex, Fu(p, k, A, ee);
		}
		var N = this._changePolyState;
		a.eachItemGraphicEl(function(e) {
			e && (e.onHoverStateChange = N);
		}), this._polyline.onHoverStateChange = N, this._data = a, this._coordSys = r, this._stackedOnPoints = y, this._points = c, this._step = w, this._valueOrigin = _;
		var ie = e.get("triggerEvent"), ae = e.get("triggerLineEvent"), F = ae === !0 || ie === !0 || ie === "line", oe = ae === !0 || ie === !0 || ie === "area";
		this.packEventData(e, f, F), p && this.packEventData(e, p, oe);
	}, t.prototype.packEventData = function(e, t, n) {
		Z(t).eventData = n ? {
			componentType: "series",
			componentSubType: "line",
			componentIndex: e.componentIndex,
			seriesIndex: e.seriesIndex,
			seriesName: e.name,
			seriesType: "line",
			selfType: t === this._polygon ? "area" : "line"
		} : null;
	}, t.prototype.highlight = function(e, t, n, r) {
		var i = e.getData(), a = Jc(i, r);
		if (this._changePolyState("emphasis"), !(a instanceof Array) && a != null && a >= 0) {
			var o = i.getLayout("points"), s = i.getItemGraphicEl(a);
			if (!s) {
				var c = o[a * 2], l = o[a * 2 + 1];
				if (Ey(c, l) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(c, l)) return;
				var u = e.get("zlevel") || 0, d = e.get("z") || 0;
				s = new gy(i, a), s.x = c, s.y = l, s.setZ(u, d);
				var f = s.getSymbolPath().getTextContent();
				f && (f.zlevel = u, f.z = d, f.z2 = this._polyline.z2 + 1), s.__temp = !0, i.setItemGraphicEl(a, s), s.stopSymbolAnimation(!0), this.group.add(s);
			}
			s.highlight();
		} else Uy.prototype.highlight.call(this, e, t, n, r);
	}, t.prototype.downplay = function(e, t, n, r) {
		var i = e.getData(), a = Jc(i, r);
		if (this._changePolyState("normal"), a != null && a >= 0) {
			var o = i.getItemGraphicEl(a);
			o && (o.__temp ? (i.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
		} else Uy.prototype.downplay.call(this, e, t, n, r);
	}, t.prototype._changePolyState = function(e) {
		var t = this._polygon;
		su(this._polyline, e), t && su(t, e);
	}, t.prototype._newPolyline = function(e) {
		var t = this._polyline;
		return t && this._lineGroup.remove(t), t = new Ly({
			shape: { points: e },
			segmentIgnoreThreshold: 2,
			z2: 10
		}), this._lineGroup.add(t), this._polyline = t, t;
	}, t.prototype._newPolygon = function(e, t) {
		var n = this._polygon;
		return n && this._lineGroup.remove(n), n = new zy({
			shape: {
				points: e,
				stackedOnPoints: t
			},
			segmentIgnoreThreshold: 2
		}), this._lineGroup.add(n), this._polygon = n, n;
	}, t.prototype._initSymbolLabelAnimation = function(e, t, n) {
		var r, i, a = t.getBaseAxis(), o = a.inverse;
		t.type === "cartesian2d" ? (r = a.isHorizontal(), i = !1) : t.type === "polar" && (r = a.dim === "angle", i = !0);
		var s = e.hostModel, c = s.get("animationDuration");
		H(c) && (c = c(null));
		var l = s.get("animationDelay") || 0, u = H(l) ? l(null) : l;
		e.eachItemGraphicEl(function(e, a) {
			var s = e;
			if (s) {
				var d = [e.x, e.y], f = void 0, p = void 0, m = void 0;
				if (n) {
					if (i) {
						var h = n, g = t.pointToCoord(d);
						r ? (f = h.startAngle, p = h.endAngle, m = -g[1] / 180 * Math.PI) : (f = h.r0, p = h.r, m = g[0]);
					} else {
						var _ = n;
						r ? (f = _.x, p = _.x + _.width, m = e.x) : (f = _.y + _.height, p = _.y, m = e.y);
					}
				}
				var v = p === f ? 0 : (m - f) / (p - f);
				o && (v = 1 - v);
				var y = H(l) ? l(a) : c * v + u, b = s.getSymbolPath(), x = b.getTextContent();
				s.attr({
					scaleX: 0,
					scaleY: 0
				}), s.animateTo({
					scaleX: 1,
					scaleY: 1
				}, {
					duration: 200,
					setToFinal: !0,
					delay: y
				}), x && x.animateFrom({ style: { opacity: 0 } }, {
					duration: 300,
					delay: y
				}), b.disableLabelAnimation = !0;
			}
		});
	}, t.prototype._initOrUpdateEndLabel = function(e, t, n) {
		var r = e.getModel("endLabel");
		if (Px(e)) {
			var i = e.getData(), a = this._polyline, o = i.getLayout("points");
			if (!o) {
				a.removeTextContent(), this._endLabel = null;
				return;
			}
			var s = this._endLabel;
			s || (s = this._endLabel = new ps({ z2: 200 }), s.ignoreClip = !0, a.setTextContent(this._endLabel), a.disableLabelAnimation = !0);
			var c = jx(o);
			c >= 0 && (Cp(a, wp(e, "endLabel"), {
				inheritColor: n,
				labelFetcher: e,
				labelDataIndex: c,
				defaultText: function(e, t, n) {
					return n == null ? my(i, e) : hy(i, n);
				},
				enableTextSetter: !0
			}, Ix(r, t)), a.textConfig.position = null);
		} else this._endLabel &&= (this._polyline.removeTextContent(), null);
	}, t.prototype._endLabelOnDuring = function(e, t, n, r, i, a, o) {
		var s = this._endLabel, c = this._polyline;
		if (s) {
			e < 1 && r.originalX == null && (r.originalX = s.x, r.originalY = s.y);
			var l = n.getLayout("points"), u = n.hostModel, d = u.get("connectNulls"), f = a.get("precision"), p = a.get("distance") || 0, m = o.getBaseAxis(), h = m.isHorizontal(), g = m.inverse, _ = t.shape, v = g ? h ? _.x : _.y + _.height : h ? _.x + _.width : _.y, y = (h ? p : 0) * (g ? -1 : 1), b = (h ? 0 : -p) * (g ? -1 : 1), x = h ? "x" : "y", S = Nx(l, v, x), C = S.range, w = C[1] - C[0], T = void 0;
			if (w >= 1) {
				if (w > 1 && !d) {
					var E = Mx(l, C[0]);
					s.attr({
						x: E[0] + y,
						y: E[1] + b
					}), i && (T = u.getRawValue(C[0]));
				} else {
					var E = c.getPointOn(v, x);
					E && s.attr({
						x: E[0] + y,
						y: E[1] + b
					});
					var D = u.getRawValue(C[0]), O = u.getRawValue(C[1]);
					i && (T = ol(n, f, D, O, S.t));
				}
				r.lastFrameIndex = C[0];
			} else {
				var k = e === 1 || r.lastFrameIndex > 0 ? C[0] : 0, E = Mx(l, k);
				i && (T = u.getRawValue(k)), s.attr({
					x: E[0] + y,
					y: E[1] + b
				});
			}
			if (i) {
				var A = Pp(s);
				typeof A.setLabelText == "function" && A.setLabelText(T);
			}
		}
	}, t.prototype._doUpdateAnimation = function(e, t, n, r, i, a, o) {
		var s = this._polyline, c = this._polygon, l = e.hostModel, u = My(this._data, e, this._stackedOnPoints, t, this._coordSys, n, this._valueOrigin, a), d = u.current, f = u.stackedOnCurrent, p = u.next, m = u.stackedOnNext;
		if (i && (f = Ex(u.stackedOnCurrent, u.current, n, i, o), d = Ex(u.current, null, n, i, o), m = Ex(u.stackedOnNext, u.next, n, i, o), p = Ex(u.next, null, n, i, o)), Sx(d, p) > 3e3 || c && Sx(f, m) > 3e3) {
			s.stopAnimation(), s.setShape({ points: p }), c && (c.stopAnimation(), c.setShape({
				points: p,
				stackedOnPoints: m
			}));
			return;
		}
		s.shape.__points = u.current, s.shape.points = d;
		var h = { shape: { points: p } };
		u.current !== d && (h.shape.__points = u.next), s.stopAnimation(), yf(s, h, l), c && (c.setShape({
			points: d,
			stackedOnPoints: f
		}), c.stopAnimation(), yf(c, { shape: { stackedOnPoints: m } }, l), s.shape.points !== c.shape.points && (c.shape.points = s.shape.points));
		for (var g = [], _ = u.status, v = 0; v < _.length; v++) if (_[v].cmd === "=") {
			var y = e.getItemGraphicEl(_[v].idx1);
			y && g.push({
				el: y,
				ptIdx: v
			});
		}
		s.animators && s.animators.length && s.animators[0].during(function() {
			c && c.dirtyShape();
			for (var e = s.shape.__points, t = 0; t < g.length; t++) {
				var n = g[t].el, r = g[t].ptIdx * 2;
				n.x = e[r], n.y = e[r + 1], n.markRedraw();
			}
		});
	}, t.prototype.remove = function(e) {
		var t = this.group, n = this._data;
		this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function(e, r) {
			e.__temp && (t.remove(e), n.setItemGraphicEl(r, null));
		}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
	}, t.type = "line", t;
}(Uy);
//#endregion
//#region node_modules/echarts/lib/layout/points.js
function Rx(e, t) {
	return {
		seriesType: e,
		plan: By(),
		reset: function(e) {
			var n = e.getData(), r = e.coordinateSystem, i = e.pipelineContext, a = t || i.large;
			if (r) {
				var o = L(r.dimensions, function(e) {
					return n.mapDimension(e);
				}).slice(0, 2), s = o.length, c = n.getCalculationInfo("stackResultDimension");
				Gh(n, o[0]) && (o[0] = c), Gh(n, o[1]) && (o[1] = c);
				var l = n.getStore(), u = n.getDimensionIndex(o[0]), d = n.getDimensionIndex(o[1]);
				return s && { progress: function(e, t) {
					for (var n = e.end - e.start, i = a && ky(n * s), o = [], c = [], f = e.start, p = 0; f < e.end; f++) {
						var m = void 0;
						if (s === 1) {
							var h = l.get(u, f);
							m = r.dataToPoint(h, null, c);
						} else o[0] = l.get(u, f), o[1] = l.get(d, f), m = r.dataToPoint(o, null, c);
						a ? (i[p++] = m[0], i[p++] = m[1]) : t.setItemLayout(f, m.slice());
					}
					a && (t.setLayout("points", i), t.setLayout("pointsRange", {
						start: e.start,
						end: e.end
					}));
				} };
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/processor/dataSample.js
var zx = {
	average: function(e) {
		for (var t = 0, n = 0, r = 0; r < e.length; r++) isNaN(e[r]) || (t += e[r], n++);
		return n === 0 ? NaN : t / n;
	},
	sum: function(e) {
		for (var t = 0, n = 0; n < e.length; n++) t += e[n] || 0;
		return t;
	},
	max: function(e) {
		for (var t = -Infinity, n = 0; n < e.length; n++) e[n] > t && (t = e[n]);
		return isFinite(t) ? t : NaN;
	},
	min: function(e) {
		for (var t = Infinity, n = 0; n < e.length; n++) e[n] < t && (t = e[n]);
		return isFinite(t) ? t : NaN;
	},
	nearest: function(e) {
		return e[0];
	}
}, Bx = function(e) {
	return Math.round(e.length / 2);
};
function Vx(e) {
	return {
		seriesType: e,
		reset: function(e, t, n) {
			var r = e.getData(), i = e.get("sampling"), a = e.coordinateSystem, o = r.count();
			if (o > 10 && a.type === "cartesian2d" && i) {
				var s = a.getBaseAxis(), c = a.getOtherAxis(s), l = s.getExtent(), u = n.getDevicePixelRatio(), d = Math.abs(l[1] - l[0]) * (u || 1), f = Math.round(o / d);
				if (isFinite(f) && f > 1) {
					i === "lttb" ? e.setData(r.lttbDownSample(r.mapDimension(c.dim), 1 / f)) : i === "minmax" && e.setData(r.minmaxDownSample(r.mapDimension(c.dim), 1 / f));
					var p = void 0;
					U(i) ? p = zx[i] : H(i) && (p = i), p && e.setData(r.downSample(r.mapDimension(c.dim), 1 / f, p, Bx));
				}
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/line/install.js
function Hx(e) {
	e.registerChartView(Lx), e.registerSeriesModel(py), e.registerLayout(Rx("line", !0)), e.registerVisual({
		seriesType: "line",
		reset: function(e) {
			var t = e.getData(), n = e.getModel("lineStyle").getLineStyle();
			n && !n.stroke && (n.stroke = t.getVisual("style").fill), t.setVisual("legendLineStyle", n);
		}
	}), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, Vx("line"));
}
//#endregion
//#region node_modules/echarts/lib/coord/axisTickLabelBuilder.js
var Ux = Yc(), Wx = Yc(), Gx = {
	estimate: 1,
	determine: 2
};
function Kx(e) {
	return {
		out: { noPxChangeTryDetermine: [] },
		kind: e
	};
}
function qx(e, t) {
	var n = e.getLabelModel().get("customValues");
	if (n) {
		var r = e.scale;
		return { labels: L(Yx(n, r), function(t, n) {
			return {
				formattedLabel: cx(e)(t, n),
				rawLabel: r.getLabel(t),
				tick: t
			};
		}) };
	}
	return e.type === "category" ? Xx(e, t) : $x(e);
}
function Jx(e, t, n) {
	var r = e.scale, i = e.getTickModel().get("customValues");
	return i ? { ticks: Yx(i, r) } : e.type === "category" ? Qx(e, t) : { ticks: r.getTicks(n) };
}
function Yx(e, t) {
	var n = t.getExtent(), r = [];
	return I(e, function(e) {
		e = t.parse(e), e >= n[0] && e <= n[1] && r.push(e);
	}), vl(r, bl, null), Ys(r), L(r, function(e) {
		return { value: e };
	});
}
function Xx(e, t) {
	var n = e.getLabelModel(), r = Zx(e, n, t);
	return !n.get("show") || e.scale.isBlank() ? { labels: [] } : r;
}
function Zx(e, t, n) {
	var r = tS(e), i = ux(t), a = n.kind === Gx.estimate;
	if (!a) {
		var o = rS(r, i);
		if (o) return o;
	}
	var s, c;
	H(i) ? s = uS(e, i, !1) : (c = i === "auto" ? aS(e, n) : i, s = uS(e, c, !1));
	var l = {
		labels: s,
		labelCategoryInterval: c
	};
	return a ? n.out.noPxChangeTryDetermine.push(function() {
		return iS(r, i, l), !0;
	}) : iS(r, i, l), l;
}
function Qx(e, t) {
	var n = eS(e), r = ux(t), i = rS(n, r);
	if (i) return i;
	var a, o;
	if ((!t.get("show") || e.scale.isBlank()) && (a = []), H(r)) a = uS(e, r, !0);
	else if (r === "auto") {
		var s = Zx(e, e.getLabelModel(), Kx(Gx.determine));
		o = s.labelCategoryInterval, a = L(s.labels, function(e) {
			return e.tick;
		});
	} else o = r, a = uS(e, o, !0);
	return iS(n, r, {
		ticks: a,
		tickCategoryInterval: o
	});
}
function $x(e) {
	var t = e.scale.getTicks(), n = cx(e);
	return { labels: L(t, function(t, r) {
		return {
			formattedLabel: n(t, r),
			rawLabel: e.scale.getLabel(t),
			tick: t
		};
	}) };
}
var eS = nS("axisTick"), tS = nS("axisLabel");
function nS(e) {
	return function(t) {
		return Wx(t)[e] || (Wx(t)[e] = { list: [] });
	};
}
function rS(e, t) {
	for (var n = 0; n < e.list.length; n++) if (e.list[n].key === t) return e.list[n].value;
}
function iS(e, t, n) {
	return e.list.push({
		key: t,
		value: n
	}), n;
}
function aS(e, t) {
	if (t.kind === Gx.estimate) {
		var n = e.calculateCategoryInterval(t);
		return t.out.noPxChangeTryDetermine.push(function() {
			return Wx(e).autoInterval = n, !0;
		}), n;
	}
	return Wx(e).autoInterval ?? (Wx(e).autoInterval = e.calculateCategoryInterval(t));
}
function oS(e, t) {
	var n = t.kind, r = lS(e), i = cx(e), a = (r.axisRotate - r.labelRotate) / 180 * Math.PI, o = e.scale, s = o.getExtent(), c = o.count();
	if (s[1] - s[0] < 1) return 0;
	var l = 1, u = 40;
	c > u && (l = Math.max(1, Math.floor(c / u)));
	for (var d = s[0], f = e.dataToCoord(d + 1) - e.dataToCoord(d), p = Math.abs(f * Math.cos(a)), m = Math.abs(f * Math.sin(a)), h = 0, g = 0; d <= s[1]; d += l) {
		var _ = 0, v = 0, y = kn(i({ value: d }), r.font, "center", "top");
		_ = y.width * 1.3, v = y.height * 1.3, h = Math.max(h, _, 7), g = Math.max(g, v, 7);
	}
	var b = h / p, x = g / m;
	isNaN(b) && (b = Infinity), isNaN(x) && (x = Infinity);
	var S = Math.max(0, Math.floor(Math.min(b, x)));
	return n === Gx.estimate ? (t.out.noPxChangeTryDetermine.push(B(sS, null, e, S, c)), S) : cS(e, S, c) ?? S;
}
function sS(e, t, n) {
	return cS(e, t, n) == null;
}
function cS(e, t, n) {
	var r = Ux(e.model), i = e.getExtent(), a = r.lastAutoInterval, o = r.lastTickCount;
	if (a != null && o != null && Math.abs(a - t) <= 1 && Math.abs(o - n) <= 1 && a > t && r.axisExtent0 === i[0] && r.axisExtent1 === i[1]) return a;
	r.lastTickCount = n, r.lastAutoInterval = t, r.axisExtent0 = i[0], r.axisExtent1 = i[1];
}
function lS(e) {
	var t = e.getLabelModel();
	return {
		axisRotate: e.getRotate ? e.getRotate() : e.isHorizontal && !e.isHorizontal() ? 90 : 0,
		labelRotate: t.get("rotate") || 0,
		font: t.getFont()
	};
}
function uS(e, t, n) {
	var r = cx(e), i = e.scale, a = [], o = H(t);
	return jb(i, o ? 0 : t, function(e, s) {
		var c = i.getLabel(e);
		if (o) {
			var l = !!t(e.value, c);
			if (e.offInterval = !l, !l && !s) return;
		}
		a.push(n ? e : {
			formattedLabel: r(e),
			rawLabel: c,
			tick: e
		});
	}), a;
}
//#endregion
//#region node_modules/echarts/lib/util/cycleCache.js
var dS = Yc();
function fS(e) {
	dS(e).prepare = {};
}
function pS(e) {
	dS(e).fullUpdate = {};
}
function mS(e) {
	return dS(e).prepare;
}
function hS(e) {
	return dS(e).fullUpdate;
}
//#endregion
//#region node_modules/echarts/lib/coord/axisStatistics.js
var gS = gl(), _S = Yc(), vS = Yc();
function yS(e, t) {
	var n = e.model, r = _S(hS(n.ecModel)).keyed, i = r && r.get(t);
	return i && i.get(n.uid);
}
function bS(e, t) {
	return CS(yS(e, t));
}
function xS(e, t) {
	var n = [];
	return SS(e.model.ecModel, function(e) {
		for (var r = 0; r < t.length; r++) t[r] && e.serByIdx[t[r].seriesIndex] && n.push(CS(e));
	}), n;
}
function SS(e, t) {
	var n = _S(hS(e)).keyed;
	n && n.each(function(e, n) {
		e.each(function(e, r) {
			t(e, n, r);
		});
	});
}
function CS(e) {
	return { liPosMinGap: e ? e.liPosMinGap : void 0 };
}
function wS(e, t) {
	var n = e.model.ecModel, r = _S(hS(n)).axSer;
	r && ES(n, r.get(e.model.uid), t);
}
function TS(e, t, n) {
	var r = yS(e, t);
	r && ES(e.model.ecModel, r.sers, n);
}
function ES(e, t, n) {
	if (t) for (var r = 0; r < t.length; r++) {
		var i = t[r];
		e.isSeriesFiltered(i) || n(i);
	}
}
function DS(e, t, n) {
	var r = _S(hS(e)).keyed, i = r && r.get(t);
	i && i.each(function(e) {
		n(e.axis);
	});
}
function OS(e, t) {
	var n = e.model, r = _S(hS(n.ecModel)).keys;
	r && I(r.get(n.uid), function(e) {
		t(e);
	});
}
function kS(e) {
	var t = vS(mS(e)), n = t.keyed ||= K();
	SS(e, function(t, r, i) {
		var a = n.get(r) || n.set(r, K()), o = a.get(i) || a.set(i, {});
		t.metrics.liPosMinGap && jS.liPosMinGap(e, t, o);
	});
}
function AS(e, t) {
	jS[e] = t;
}
var jS = {};
function MS(e, t, n) {
	if (e) {
		var r = t.ecModel, i = _S(hS(r)), a = e.model.uid, o = i.axSer ||= K();
		(o.get(a) || o.set(a, [])).push(t);
		var s = t.subType, c = t.getBaseAxis() === e, l = FS.get(NS(s, c, n)) || FS.get(NS(s, c, null));
		if (l) {
			var u = i.keyed ||= K(), d = i.keys ||= K(), f = l.key, p = u.get(f) || u.set(f, K()), m = p.get(a);
			m || (m = p.set(a, {
				axis: e,
				sers: [],
				serByIdx: []
			}), m.metrics = l.getMetrics(e), (d.get(a) || d.set(a, [])).push(f)), m.sers.push(t), m.serByIdx[t.seriesIndex] = t;
		}
	}
}
function NS(e, t, n) {
	return e + "|&" + G(t, !0) + "|&" + (n || "");
}
function PS(e, t) {
	var n = NS(t.seriesType, t.baseAxis, t.coordSysType);
	FS.set(n, t), gS(e, function() {
		e.registerProcessor(e.PRIORITY.PROCESSOR.AXIS_STATISTICS, { overallReset: kS });
	});
}
var FS = K(), IS = .8;
function LS(e, t) {
	t ||= {};
	var n = {
		w: NaN,
		w2: NaN
	}, r = e.scale, i = t.fromStat, a = t.min, o = mb(r);
	vc(o) || (o = NaN);
	var s = e.getExtent(), c = Ms(s[1] - s[0]);
	return Cb(r) ? RS(n, e, o, c) : i && zS(n, e, o, c, i), a != null && (n.w = vc(n.w) ? js(a, n.w) : a), n;
}
function RS(e, t, n, r) {
	var i = t.onBand, a = n + +!!i;
	a === 0 && (a = 1), e.w = r / a, !i && n && r && (e.w2 = e.w * n / r);
}
function zS(e, t, n, r, i) {
	var a = !1, o = -Infinity;
	I(i.key ? [bS(t, i.key)] : xS(t, i.sers || []), function(e) {
		var t = e.liPosMinGap;
		t != null && (t > 0 ? (t > o && (o = t), a = !1) : t === -2 && (a = !0));
	}), vc(n) && n > 0 && vc(o) ? (e.w = r / n * o, e.w2 = o) : a && (e.w = r * IS, e.w2 = e.w * n / r);
}
//#endregion
//#region node_modules/echarts/lib/coord/Axis.js
var BS = [0, 1], VS = function() {
	function e(e, t, n) {
		this.onBand = !1, this.inverse = !1, this.dim = e, this.scale = t, this._extent = n || [0, 0];
	}
	return e.prototype.contain = function(e) {
		var t = this._extent, n = Math.min(t[0], t[1]), r = Math.max(t[0], t[1]);
		return e >= n && e <= r;
	}, e.prototype.containData = function(e) {
		return this.scale.contain(this.scale.parse(e));
	}, e.prototype.getExtent = function() {
		return this._extent.slice();
	}, e.prototype.setExtent = function(e, t) {
		var n = this._extent;
		n[0] = e, n[1] = t;
	}, e.prototype.dataToCoord = function(e, t) {
		var n = this.scale;
		return e = n.normalize(n.parse(e)), Vs(e, BS, HS(this), t);
	}, e.prototype.coordToData = function(e, t) {
		var n = Vs(e, HS(this), BS, t);
		return this.scale.scale(n);
	}, e.prototype.pointToData = function(e, t) {}, e.prototype.getTicksCoords = function(e) {
		e ||= {};
		var t = e.tickModel || this.getTickModel(), n = L(Jx(this, t, {
			breakTicks: e.breakTicks,
			pruneByBreak: e.pruneByBreak
		}).ticks, function(e) {
			return {
				coord: this.dataToCoord(vx(this.scale, e)),
				tick: e
			};
		}, this), r = t.get("alignWithLabel"), i = US(this, n, r);
		return L(n, function(e) {
			return {
				coord: e.coord,
				tickValue: e.tick.value,
				onBand: i
			};
		});
	}, e.prototype.getMinorTicksCoords = function() {
		if (Cb(this.scale)) return [];
		var e = this.model.getModel("minorTick").get("splitNumber");
		return e > 0 && e < 100 || (e = 5), L(this.scale.getMinorTicks(e), function(e) {
			return L(e, function(e) {
				return {
					coord: this.dataToCoord(e),
					tickValue: e
				};
			}, this);
		}, this);
	}, e.prototype.getViewLabels = function(e) {
		return e ||= Kx(Gx.determine), qx(this, e).labels;
	}, e.prototype.getLabelModel = function() {
		return this.model.getModel("axisLabel");
	}, e.prototype.getTickModel = function() {
		return this.model.getModel("axisTick");
	}, e.prototype.getBandWidth = function() {
		return LS(this, { min: 1 }).w;
	}, e.prototype.calculateCategoryInterval = function(e) {
		return e ||= Kx(Gx.determine), oS(this, e);
	}, e;
}();
function HS(e) {
	var t = e.getExtent();
	if (e.onBand) {
		var n = (t[1] - t[0]) / e.scale.count() / 2;
		t[0] += n, t[1] -= n;
	}
	return t;
}
function US(e, t, n) {
	var r = t.length;
	if (!e.onBand || n || !r) return !1;
	var i = LS(e).w;
	if (!i) return !1;
	I(t, function(e) {
		e.coord -= i / 2;
	});
	var a = e.scale.getExtent(), o = t[r - 1];
	return o.tick.offInterval && t.pop(), t.push({
		coord: o.coord + i,
		tick: { value: a[1] + 1 }
	}), !0;
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/Axis2D.js
var WS = function(e) {
	l(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this, t, n, r) || this;
		return o.index = 0, o.type = i || "value", o.position = a || "bottom", o;
	}
	return t.prototype.isHorizontal = function() {
		var e = this.position;
		return e === "top" || e === "bottom";
	}, t.prototype.getGlobalExtent = function(e) {
		var t = this.getExtent();
		return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), e && t[0] > t[1] && t.reverse(), t;
	}, t.prototype.pointToData = function(e, t) {
		return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), t);
	}, t.prototype.setCategorySortInfo = function(e) {
		if (this.type !== "category") return !1;
		this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
	}, t;
}(VS), GS = [
	"label",
	"labelLine",
	"layoutOption",
	"priority",
	"defaultAttr",
	"marginForce",
	"minMarginForce",
	"marginDefault",
	"suggestIgnore"
], KS = 1, qS = 2, JS = KS | qS;
function YS(e, t, n) {
	n ||= JS, t ? e.dirty |= n : e.dirty &= ~n;
}
function XS(e, t) {
	return t ||= JS, e.dirty == null || !!(e.dirty & t);
}
function ZS(e) {
	if (e) return XS(e) && QS(e, e.label, e), e;
}
function QS(e, t, n) {
	var r = t.getComputedTransform();
	e.transform = dp(e.transform, r);
	var i = e.localRect = up(e.localRect, t.getBoundingRect()), a = t.style, o = a.margin, s = n && n.marginForce, c = n && n.minMarginForce, l = n && n.marginDefault, u = a.__marginType;
	u == null && l && (o = l, u = Lp.textMargin);
	for (var d = 0; d < 4; d++) $S[d] = u === Lp.minMargin && c && c[d] != null ? c[d] : s && s[d] != null ? s[d] : o ? o[d] : 0;
	u === Lp.textMargin && np(i, $S, !1, !1);
	var f = e.rect = up(e.rect, i);
	return r && f.applyTransform(r), u === Lp.minMargin && np(f, $S, !1, !1), e.axisAligned = cp(r), (e.label = e.label || {}).ignore = t.ignore, YS(e, !1), YS(e, !0, qS), e;
}
var $S = [
	0,
	0,
	0,
	0
];
function eC(e, t, n) {
	return e.transform = dp(e.transform, n), e.localRect = up(e.localRect, t), e.rect = up(e.rect, t), n && e.rect.applyTransform(n), e.axisAligned = cp(n), e.obb = void 0, (e.label = e.label || {}).ignore = !1, e;
}
function tC(e, t) {
	if (e) {
		e.label.x += t.x, e.label.y += t.y, e.label.markRedraw();
		var n = e.transform;
		n && (n[4] += t.x, n[5] += t.y);
		var r = e.rect;
		r && (r.x += t.x, r.y += t.y);
		var i = e.obb;
		i && i.fromBoundingRect(e.localRect, n);
	}
}
function nC(e, t) {
	for (var n = 0; n < GS.length; n++) {
		var r = GS[n];
		e[r] ?? (e[r] = t[r]);
	}
	return ZS(e);
}
function rC(e) {
	var t = e.obb;
	return (!t || XS(e, qS)) && (e.obb = t ||= new pf(), t.fromBoundingRect(e.localRect, e.transform), YS(e, !1, qS)), t;
}
function iC(e, t, n, r, i) {
	var a = e.length, o = Of[t], s = kf[t];
	if (a < 2) return !1;
	e.sort(function(e, t) {
		return e.rect[o] - t.rect[o];
	});
	for (var c = 0, l, u = !1, d = 0, f = 0; f < a; f++) {
		var p = e[f], m = p.rect;
		l = m[o] - c, l < 0 && (m[o] -= l, p.label[o] -= l, u = !0);
		var h = Math.max(-l, 0);
		d += h, c = m[o] + m[s];
	}
	d > 0 && i && S(-d / a, 0, a);
	var g = e[0], _ = e[a - 1], v, y;
	b(), v < 0 && C(-v, .8), y < 0 && C(y, .8), b(), x(v, y, 1), x(y, v, -1), b(), v < 0 && w(-v), y < 0 && w(y);
	function b() {
		v = g.rect[o] - n, y = r - _.rect[o] - _.rect[s];
	}
	function x(e, t, n) {
		if (e < 0) {
			var r = Math.min(t, -e);
			if (r > 0) {
				S(r * n, 0, a);
				var i = r + e;
				i < 0 && C(-i * n, 1);
			} else C(-e * n, 1);
		}
	}
	function S(t, n, r) {
		t !== 0 && (u = !0);
		for (var i = n; i < r; i++) {
			var a = e[i], s = a.rect;
			s[o] += t, a.label[o] += t;
		}
	}
	function C(t, n) {
		for (var r = [], i = 0, c = 1; c < a; c++) {
			var l = e[c - 1].rect, u = Math.max(e[c].rect[o] - l[o] - l[s], 0);
			r.push(u), i += u;
		}
		if (i) {
			var d = Math.min(Math.abs(t) / i, n);
			if (t > 0) for (var c = 0; c < a - 1; c++) {
				var f = r[c] * d;
				S(f, 0, c + 1);
			}
			else for (var c = a - 1; c > 0; c--) {
				var f = r[c - 1] * d;
				S(-f, c, a);
			}
		}
	}
	function w(e) {
		var t = e < 0 ? -1 : 1;
		e = Math.abs(e);
		for (var n = Math.ceil(e / (a - 1)), r = 0; r < a - 1; r++) if (t > 0 ? S(n, 0, r + 1) : S(-n, a - r - 1, a), e -= n, e <= 0) return;
	}
	return u;
}
function aC(e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t], r = n.defaultAttr, i = n.labelLine;
		n.label.attr("ignore", r.ignore), i && i.attr("ignore", r.labelGuideIgnore);
	}
}
function oC(e) {
	var t = [];
	e.sort(function(e, t) {
		return +!!t.suggestIgnore - !!e.suggestIgnore || t.priority - e.priority;
	});
	function n(e) {
		if (!e.ignore) {
			var t = e.ensureState("emphasis");
			t.ignore ??= !1;
		}
		e.ignore = !0;
	}
	for (var r = 0; r < e.length; r++) {
		var i = ZS(e[r]);
		if (!i.label.ignore) {
			for (var a = i.label, o = i.labelLine, s = !1, c = 0; c < t.length; c++) if (sC(i, t[c], null, { touchThreshold: .05 })) {
				s = !0;
				break;
			}
			s ? (n(a), o && n(o)) : t.push(i);
		}
	}
}
function sC(e, t, n, r) {
	return !e || !t || e.label && e.label.ignore || t.label && t.label.ignore || !e.rect.intersect(t.rect, n, r) ? !1 : e.axisAligned && t.axisAligned ? !0 : rC(e).intersect(rC(t), n, r);
}
//#endregion
//#region node_modules/echarts/lib/component/axis/axisBreakHelper.js
var cC = null;
function lC() {
	return cC;
}
//#endregion
//#region node_modules/echarts/lib/component/axis/axisAction.js
var uC = "expandAxisBreak", dC = Math.PI, fC = [
	[
		1,
		2,
		1,
		2
	],
	[
		5,
		3,
		5,
		3
	],
	[
		8,
		3,
		8,
		3
	]
], pC = [
	[
		0,
		1,
		0,
		1
	],
	[
		0,
		3,
		0,
		3
	],
	[
		0,
		3,
		0,
		3
	]
], mC = Yc(), hC = Yc(), gC = function() {
	function e(e) {
		this.recordMap = {}, this.resolveAxisNameOverlap = e;
	}
	return e.prototype.ensureRecord = function(e) {
		var t = e.axis.dim, n = e.componentIndex, r = this.recordMap, i = r[t] || (r[t] = []);
		return i[n] || (i[n] = { ready: {} });
	}, e;
}();
function _C(e, t, n, r) {
	var i = n.axis, a = t.ensureRecord(n), o = [], s, c = VC(e.axisName) && px(e.nameLocation);
	I(r, function(e) {
		var t = ZS(e);
		if (t && !t.label.ignore) {
			o.push(t);
			var n = a.transGroup;
			c && (n.transform ? St(vC, n.transform) : gt(vC), t.transform && vt(vC, vC, t.transform), X.copy(yC, t.localRect), yC.applyTransform(vC), s ? s.union(yC) : X.copy(s = new X(0, 0, 0, 0), yC));
		}
	});
	var l = Math.abs(a.dirVec.x) > .1 ? "x" : "y", u = a.transGroup[l];
	if (o.sort(function(e, t) {
		return Math.abs(e.label[l] - u) - Math.abs(t.label[l] - u);
	}), c && s) {
		var d = i.getExtent(), f = Math.min(d[0], d[1]), p = Math.max(d[0], d[1]) - f;
		s.union(new X(f, 0, p, 1));
	}
	a.stOccupiedRect = s, a.labelInfoList = o;
}
var vC = ht(), yC = new X(0, 0, 0, 0), bC = function(e, t, n, r, i, a) {
	if (px(e.nameLocation)) {
		var o = a.stOccupiedRect;
		o && xC(eC({}, o, a.transGroup.transform), r, i);
	} else SC(a.labelInfoList, a.dirVec, r, i);
};
function xC(e, t, n) {
	var r = new Y();
	sC(e, t, r, {
		direction: Math.atan2(n.y, n.x),
		bidirectional: !1,
		touchThreshold: .05
	}) && tC(t, r);
}
function SC(e, t, n, r) {
	for (var i = Y.dot(r, t) >= 0, a = 0, o = e.length; a < o; a++) {
		var s = e[i ? a : o - 1 - a];
		s.label.ignore || xC(s, n, r);
	}
}
var CC = function() {
	function e(e, t, n, r) {
		this.group = new hd(), this._axisModel = e, this._api = t, this._local = {}, this._shared = r || new gC(bC), this._resetCfgDetermined(n);
	}
	return e.prototype.updateCfg = function(e) {
		var t = this._cfg.raw;
		t.position = e.position, t.labelOffset = e.labelOffset, this._resetCfgDetermined(t);
	}, e.prototype.__getRawCfg = function() {
		return this._cfg.raw;
	}, e.prototype._resetCfgDetermined = function(e) {
		var t = this._axisModel, n = t.getDefaultOption ? t.getDefaultOption() : {}, r = G(e.axisName, t.get("name")), i = t.get("nameMoveOverlap");
		(i == null || i === "auto") && (i = G(e.defaultNameMoveOverlap, !0));
		var a = {
			raw: e,
			position: e.position,
			rotation: e.rotation,
			nameDirection: G(e.nameDirection, 1),
			tickDirection: G(e.tickDirection, 1),
			labelDirection: G(e.labelDirection, 1),
			labelOffset: G(e.labelOffset, 0),
			silent: G(e.silent, !0),
			axisName: r,
			nameLocation: Ce(t.get("nameLocation"), n.nameLocation, "end"),
			shouldNameMoveOverlap: VC(r) && i,
			optionHideOverlap: t.get(["axisLabel", "hideOverlap"]),
			showMinorTicks: t.get(["minorTick", "show"])
		};
		this._cfg = a;
		var o = new hd({
			x: a.position[0],
			y: a.position[1],
			rotation: a.rotation
		});
		o.updateTransform(), this._transformGroup = o;
		var s = this._shared.ensureRecord(t);
		s.transGroup = this._transformGroup, s.dirVec = new Y(Math.cos(-a.rotation), Math.sin(-a.rotation));
	}, e.prototype.build = function(e, t) {
		var n = this;
		return e ||= {
			axisLine: !0,
			axisTickLabelEstimate: !1,
			axisTickLabelDetermine: !0,
			axisName: !0
		}, I(wC, function(r) {
			e[r] && TC[r](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, t || {});
		}), this;
	}, e.innerTextLayout = function(e, t, n) {
		var r = ic(t - e), i, a;
		return ac(r) ? (a = n > 0 ? "top" : "bottom", i = "center") : ac(r - dC) ? (a = n > 0 ? "bottom" : "top", i = "center") : (a = "middle", i = r > 0 && r < dC ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
			rotation: r,
			textAlign: i,
			textVerticalAlign: a
		};
	}, e.makeAxisEventDataBase = function(e) {
		var t = {
			componentType: e.mainType,
			componentIndex: e.componentIndex
		};
		return t[e.mainType + "Index"] = e.componentIndex, t;
	}, e.isLabelSilent = function(e) {
		var t = e.get("tooltip");
		return e.get("silent") || !(e.get("triggerEvent") || t && t.show);
	}, e;
}(), wC = [
	"axisLine",
	"axisTickLabelEstimate",
	"axisTickLabelDetermine",
	"axisName"
], TC = {
	axisLine: function(e, t, n, r, i, a, o) {
		var s = r.get(["axisLine", "show"]);
		if (s === "auto" && (s = !0, e.raw.axisLineAutoShow != null && (s = !!e.raw.axisLineAutoShow)), s) {
			var c = r.axis.getExtent(), l = a.transform, u = [c[0], 0], d = [c[1], 0], f = u[0] > d[0];
			l && (qt(u, u, l), qt(d, d, l));
			var p = N({ lineCap: "round" }, r.getModel(["axisLine", "lineStyle"]).getLineStyle()), m = {
				strokeContainThreshold: e.raw.strokeContainThreshold || 5,
				silent: !0,
				z2: 1,
				style: p
			};
			if (r.get(["axisLine", "breakLine"]) && Ng(r.axis.scale)) lC().buildAxisBreakLine(r, i, a, m);
			else {
				var h = new qd(N({ shape: {
					x1: u[0],
					y1: u[1],
					x2: d[0],
					y2: d[1]
				} }, m));
				Bf(h.shape, h.style.lineWidth), h.anid = "line", i.add(h);
			}
			var g = r.get(["axisLine", "symbol"]);
			if (g != null) {
				var _ = r.get(["axisLine", "symbolSize"]);
				U(g) && (g = [g, g]), (U(_) || me(_)) && (_ = [_, _]);
				var v = fy(r.get(["axisLine", "symbolOffset"]) || 0, _), y = _[0], b = _[1];
				I([{
					rotate: e.rotation + Math.PI / 2,
					offset: v[0],
					r: 0
				}, {
					rotate: e.rotation - Math.PI / 2,
					offset: v[1],
					r: Math.sqrt((u[0] - d[0]) * (u[0] - d[0]) + (u[1] - d[1]) * (u[1] - d[1]))
				}], function(t, n) {
					if (g[n] !== "none" && g[n] != null) {
						var r = uy(g[n], -y / 2, -b / 2, y, b, p.stroke, !0), a = t.r + t.offset, o = f ? d : u;
						r.attr({
							rotation: t.rotate,
							x: o[0] + a * Math.cos(e.rotation),
							y: o[1] - a * Math.sin(e.rotation),
							silent: !0,
							z2: 11
						}), i.add(r);
					}
				});
			}
		}
	},
	axisTickLabelEstimate: function(e, t, n, r, i, a, o, s) {
		PC(t, i, s) && EC(e, t, n, r, i, a, o, Gx.estimate);
	},
	axisTickLabelDetermine: function(e, t, n, r, i, a, o, s) {
		PC(t, i, s) && EC(e, t, n, r, i, a, o, Gx.determine);
		var c = MC(e, i, a, r);
		kC(e, t.labelLayoutList, c), NC(e, i, a, r, e.tickDirection);
	},
	axisName: function(e, t, n, r, i, a, o, s) {
		var c = n.ensureRecord(r);
		t.nameEl &&= (i.remove(t.nameEl), c.nameLayout = c.nameLocation = null);
		var l = e.axisName;
		if (VC(l)) {
			var u = e.nameLocation, d = e.nameDirection, f = r.getModel("nameTextStyle"), p = r.get("nameGap") || 0, m = r.axis.getExtent(), h = r.axis.inverse ? -1 : 1, g = new Y(0, 0), _ = new Y(0, 0);
			u === "start" ? (g.x = m[0] - h * p, _.x = -h) : u === "end" ? (g.x = m[1] + h * p, _.x = h) : (g.x = (m[0] + m[1]) / 2, g.y = e.labelOffset + d * p, _.y = d);
			var v = ht();
			_.transform(bt(v, v, e.rotation));
			var y = r.get("nameRotate");
			y != null && (y = y * dC / 180);
			var b, x;
			px(u) ? b = CC.innerTextLayout(e.rotation, y ?? e.rotation, d) : (b = DC(e.rotation, u, y || 0, m), x = e.raw.axisNameAvailableWidth, x != null && (x = Math.abs(x / Math.sin(b.rotation)), !isFinite(x) && (x = null)));
			var S = f.getFont(), C = r.get("nameTruncate", !0) || {}, w = C.ellipsis, T = Se(e.raw.nameTruncateMaxWidth, C.maxWidth, x), E = s.nameMarginLevel || 0, D = new ps({
				x: g.x,
				y: g.y,
				rotation: b.rotation,
				silent: CC.isLabelSilent(r),
				style: Tp(f, {
					text: l,
					font: S,
					overflow: "truncate",
					width: T,
					ellipsis: w,
					fill: f.getTextColor() || r.get([
						"axisLine",
						"lineStyle",
						"color"
					]),
					align: f.get("align") || b.textAlign,
					verticalAlign: f.get("verticalAlign") || b.textVerticalAlign
				}),
				z2: 1
			});
			if (ap({
				el: D,
				componentModel: r,
				itemName: l
			}), D.__fullText = l, D.anid = "name", r.get("triggerEvent")) {
				var O = CC.makeAxisEventDataBase(r);
				O.targetType = "axisName", O.name = l, Z(D).eventData = O;
			}
			a.add(D), D.updateTransform(), t.nameEl = D;
			var k = c.nameLayout = ZS({
				label: D,
				priority: D.z2,
				defaultAttr: { ignore: D.ignore },
				marginDefault: px(u) ? fC[E] : pC[E]
			});
			if (c.nameLocation = u, i.add(D), D.decomposeTransform(), e.shouldNameMoveOverlap && k) {
				var A = n.ensureRecord(r);
				n.resolveAxisNameOverlap(e, n, r, k, _, A);
			}
		}
	}
};
function EC(e, t, n, r, i, a, o, s) {
	IC(t) || FC(e, t, i, s, r, o);
	var c = t.labelLayoutList;
	RC(e, r, c, a), UC(r, e.rotation, c);
	var l = e.optionHideOverlap;
	OC(r, c, l), l && oC(le(c, function(e) {
		return e && !e.label.ignore;
	})), _C(e, n, r, c);
}
function DC(e, t, n, r) {
	var i = ic(n - e), a, o, s = r[0] > r[1], c = t === "start" && !s || t !== "start" && s;
	return ac(i - dC / 2) ? (o = c ? "bottom" : "top", a = "center") : ac(i - dC * 1.5) ? (o = c ? "top" : "bottom", a = "center") : (o = "middle", a = i < dC * 1.5 && i > dC / 2 ? c ? "left" : "right" : c ? "right" : "left"), {
		rotation: i,
		textAlign: a,
		textVerticalAlign: o
	};
}
function OC(e, t, n) {
	var r = e.axis, i = e.get(["axisLabel", "customValues"]);
	if (dx(r)) return;
	function a(e, a, o) {
		var s = ZS(t[a]), c = ZS(t[o]), l = r.scale;
		if (s && c) {
			if (e == null) {
				if (!n && i) return;
				var u = mC(s.label).labelInfo.tick;
				if (xb(l) && u.notNice || Cb(l) && u.offInterval) {
					AC(s.label);
					return;
				}
			}
			if (e === !1 || s.suggestIgnore) {
				AC(s.label);
				return;
			}
			if (c.suggestIgnore) {
				AC(c.label);
				return;
			}
			var d = .1;
			if (!n) {
				var f = [
					0,
					0,
					0,
					0
				];
				s = nC({ marginForce: f }, s), c = nC({ marginForce: f }, c);
			}
			sC(s, c, null, { touchThreshold: d }) && AC(e ? c.label : s.label);
		}
	}
	var o = e.get(["axisLabel", "showMinLabel"]), s = e.get(["axisLabel", "showMaxLabel"]), c = t.length;
	a(o, 0, 1), a(s, c - 1, c - 2);
}
function kC(e, t, n) {
	e.showMinorTicks || I(t, function(e) {
		if (e && e.label.ignore) for (var t = 0; t < n.length; t++) {
			var r = n[t], i = hC(r), a = mC(e.label);
			if (i.tickValue != null && !i.onBand && i.tickValue === a.labelInfo.tick.value) {
				AC(r);
				return;
			}
		}
	});
}
function AC(e) {
	e && (e.ignore = !0);
}
function jC(e, t, n, r, i) {
	for (var a = [], o = [], s = [], c = 0; c < e.length; c++) {
		var l = e[c].coord;
		o[0] = l, o[1] = 0, s[0] = l, s[1] = n, t && (qt(o, o, t), qt(s, s, t));
		var u = new qd({
			shape: {
				x1: o[0],
				y1: o[1],
				x2: s[0],
				y2: s[1]
			},
			style: r,
			z2: 2,
			autoBatch: !0,
			silent: !0
		});
		Bf(u.shape, u.style.lineWidth), u.anid = i + "_" + e[c].tickValue, a.push(u);
		var d = hC(u);
		d.onBand = !!e[c].onBand, d.tickValue = e[c].tickValue;
	}
	return a;
}
function MC(e, t, n, r) {
	var i = r.axis, a = r.getModel("axisTick"), o = a.get("show");
	if (o === "auto" && (o = !0, e.raw.axisTickAutoShow != null && (o = !!e.raw.axisTickAutoShow)), !o || i.scale.isBlank()) return [];
	for (var s = a.getModel("lineStyle"), c = e.tickDirection * a.get("length"), l = jC(i.getTicksCoords(), n.transform, c, P(s.getLineStyle(), { stroke: r.get([
		"axisLine",
		"lineStyle",
		"color"
	]) }), "ticks"), u = 0; u < l.length; u++) t.add(l[u]);
	return l;
}
function NC(e, t, n, r, i) {
	var a = r.axis, o = r.getModel("minorTick");
	if (e.showMinorTicks && !a.scale.isBlank()) {
		var s = a.getMinorTicksCoords();
		if (s.length) for (var c = o.getModel("lineStyle"), l = i * o.get("length"), u = P(c.getLineStyle(), P(r.getModel("axisTick").getLineStyle(), { stroke: r.get([
			"axisLine",
			"lineStyle",
			"color"
		]) })), d = 0; d < s.length; d++) for (var f = jC(s[d], n.transform, l, u, "minorticks_" + d), p = 0; p < f.length; p++) t.add(f[p]);
	}
}
function PC(e, t, n) {
	if (IC(e)) {
		var r = e.axisLabelsCreationContext.out.noPxChangeTryDetermine;
		if (n.noPxChange) {
			for (var i = !0, a = 0; a < r.length; a++) i &&= r[a]();
			if (i) return !1;
		}
		r.length && (t.remove(e.labelGroup), LC(e, null, null, null));
	}
	return !0;
}
function FC(e, t, n, r, i, a) {
	var o = i.axis, s = Se(e.raw.axisLabelShow, i.get(["axisLabel", "show"])), c = new hd();
	n.add(c);
	var l = Kx(r);
	if (!s || o.scale.isBlank()) {
		LC(t, [], c, l);
		return;
	}
	var u = i.getModel("axisLabel"), d = o.getViewLabels(l), f = (Se(e.raw.labelRotate, u.get("rotate")) || 0) * dC / 180, p = CC.innerTextLayout(e.rotation, f, e.labelDirection), m = i.getCategories && i.getCategories(!0), h = [], g = i.get("triggerEvent"), _ = Infinity, v = -Infinity;
	I(d, function(e, t) {
		var n = e.tick, r = e.formattedLabel, s = e.rawLabel, l = u, f = vx(o.scale, n);
		if (m && m[f]) {
			var y = m[f];
			W(y) && y.textStyle && (l = new Jp(y.textStyle, u, i.ecModel));
		}
		var b = l.getTextColor() || i.get([
			"axisLine",
			"lineStyle",
			"color"
		]), x = l.getShallow("align", !0) || p.textAlign, S = G(l.getShallow("alignMinLabel", !0), x), C = G(l.getShallow("alignMaxLabel", !0), x), w = l.getShallow("verticalAlign", !0) || l.getShallow("baseline", !0) || p.textVerticalAlign, T = G(l.getShallow("verticalAlignMinLabel", !0), w), E = G(l.getShallow("verticalAlignMaxLabel", !0), w), D = 10 + (n.time?.level || 0);
		_ = Math.min(_, D), v = Math.max(v, D);
		var O = new ps({
			x: 0,
			y: 0,
			rotation: 0,
			silent: CC.isLabelSilent(i),
			z2: D,
			style: Tp(l, {
				text: r,
				align: t === 0 ? S : t === d.length - 1 ? C : x,
				verticalAlign: t === 0 ? T : t === d.length - 1 ? E : w,
				fill: H(b) ? b(o.type === "category" ? s : o.type === "value" ? f + "" : f, t) : b
			})
		});
		O.anid = "label_" + f;
		var k = mC(O);
		if (k.labelInfo = e, k.layoutRotation = p.rotation, ap({
			el: O,
			componentModel: i,
			itemName: r,
			formatterParamsExtra: {
				isTruncated: function() {
					return O.isTruncated;
				},
				value: s,
				tickIndex: t
			}
		}), g) {
			var A = CC.makeAxisEventDataBase(i);
			A.targetType = "axisLabel", A.value = s, A.tickIndex = t;
			var ee = e.tick.break;
			if (ee) {
				var te = ee.parsedBreak;
				A.break = {
					start: te.vmin,
					end: te.vmax
				};
			}
			o.type === "category" && (A.dataIndex = f), Z(O).eventData = A, ee && HC(i, a, O, ee);
		}
		h.push(O), c.add(O);
	}), LC(t, L(h, function(e) {
		return {
			label: e,
			priority: mC(e).labelInfo.tick.break ? e.z2 + (v - _ + 1) : e.z2,
			defaultAttr: { ignore: e.ignore }
		};
	}), c, l);
}
function IC(e) {
	return !!e.labelLayoutList;
}
function LC(e, t, n, r) {
	e.labelLayoutList = t, e.labelGroup = n, e.axisLabelsCreationContext = r;
}
function RC(e, t, n, r) {
	var i = t.get(["axisLabel", "margin"]);
	I(n, function(n, a) {
		var o = ZS(n);
		if (o) {
			var s = o.label, c = mC(s);
			o.suggestIgnore = s.ignore, s.ignore = !1, hr(zC, BC);
			var l = t.axis;
			zC.x = l.dataToCoord(vx(l.scale, c.labelInfo.tick)), zC.y = e.labelOffset + e.labelDirection * i, zC.rotation = c.layoutRotation, r.add(zC), zC.updateTransform(), r.remove(zC), zC.decomposeTransform(), hr(s, zC), s.markRedraw(), YS(o, !0), ZS(o);
		}
	});
}
var zC = new cs(), BC = new cs();
function VC(e) {
	return !!e;
}
function HC(e, t, n, r) {
	n.on("click", function(n) {
		var i = {
			type: uC,
			breaks: [{
				start: r.parsedBreak.breakOption.start,
				end: r.parsedBreak.breakOption.end
			}]
		};
		i[e.axis.dim + "AxisIndex"] = e.componentIndex, t.dispatchAction(i);
	});
}
function UC(e, t, n) {
	var r = Ag();
	if (r) {
		var i = r.retrieveAxisBreakPairs(n, function(e) {
			return e && mC(e.label).labelInfo.tick.break;
		}, !0), a = e.get(["breakLabelLayout", "moveOverlap"], !0);
		(a === !0 || a === "auto") && I(i, function(r) {
			lC().adjustBreakLabelPair(e.axis.inverse, t, [ZS(n[r[0]]), ZS(n[r[1]])]);
		});
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
function WC(e, t, n) {
	n ||= {};
	var r = t.axis, i = {}, a = r.getAxesOnZeroOf()[0], o = r.position, s = a ? "onZero" : o, c = r.dim, l = [
		e.x,
		e.x + e.width,
		e.y,
		e.y + e.height
	], u = {
		left: 0,
		right: 1,
		top: 0,
		bottom: 1,
		onZero: 2
	}, d = t.get("offset") || 0, f = c === "x" ? [l[2] - d, l[3] + d] : [l[0] - d, l[1] + d];
	if (a) {
		var p = a.toGlobalCoord(a.dataToCoord(0));
		f[u.onZero] = Math.max(Math.min(p, f[1]), f[0]);
	}
	i.position = [c === "y" ? f[u[s]] : l[0], c === "x" ? f[u[s]] : l[3]], i.rotation = Math.PI / 2 * (c === "x" ? 0 : 1), i.labelDirection = i.tickDirection = i.nameDirection = {
		top: -1,
		bottom: 1,
		left: -1,
		right: 1
	}[o], i.labelOffset = a ? f[u[o]] - f[u.onZero] : 0, t.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), Se(n.labelInside, t.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
	var m = t.get(["axisLabel", "rotate"]);
	return i.labelRotate = s === "top" ? -m : m, i.z2 = 1, i;
}
function GC(e) {
	return e.coordinateSystem && e.coordinateSystem.type === "cartesian2d";
}
function KC(e) {
	var t = {
		xAxisModel: null,
		yAxisModel: null
	};
	return I(t, function(n, r) {
		var i = r.replace(/Model$/, "");
		t[r] = e.getReferringComponents(i, $c).models[0];
	}), t;
}
function qC(e, t, n, r, i, a) {
	for (var o = WC(e, n), s = !1, c = !1, l = 0; l < t.length; l++) yb(t[l].getOtherAxis(n.axis).scale) && (s = c = !0, n.axis.type === "category" && n.axis.onBand && (c = !1));
	return o.axisLineAutoShow = s, o.axisTickAutoShow = c, o.defaultNameMoveOverlap = a, new CC(n, r, o, i);
}
function JC(e, t, n) {
	var r = WC(t, n);
	e.updateCfg(r);
}
//#endregion
//#region node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var YC = Yc(), XC = 3, ZC = function() {
	function e(e, t, n, r, i) {
		var a = Cb(e), o = a ? t.getCategories().length : null, s;
		if (a) {
			var c = t.getCategories(!0);
			s = c && !c.length;
		}
		var l = n.slice();
		(bb(e) || Sb(e) || xb(e)) && (ll(l, $C(e, t.get("dataMin", !0))), ul(l, $C(e, t.get("dataMax", !0)))), ml(l) || (l[0] = l[1] = NaN);
		var u = [], d = [!1, !1], f = t.get("min", !0);
		f === "dataMin" ? (u[0] = l[0], d[0] = !0) : (u[0] = $C(e, H(f) ? f({
			min: l[0],
			max: l[1]
		}) : f), d[0] = u[0] != null);
		var p = t.get("max", !0);
		p === "dataMax" ? (u[1] = l[1], d[1] = !0) : (u[1] = $C(e, H(p) ? p({
			min: l[0],
			max: l[1]
		}) : p), d[1] = u[1] != null);
		var m = ew(e, t), h = a ? null : l[1] - l[0] || Math.abs(l[0]);
		u[0] ??= a ? s ? l[0] : o ? 0 : NaN : l[0] - m[0] * h, u[1] ??= a ? s ? l[1] : o ? o - 1 : NaN : l[1] + m[1] * h, !fl(u[0]) && (u[0] = NaN), !fl(u[1]) && (u[1] = NaN);
		var g = s || xe(u[0]) || xe(u[1]) || a && !o, _ = bb(e), v = _ && t.needIncludeZero && t.needIncludeZero();
		v && (u[0] > 0 && u[1] > 0 && !d[0] && (u[0] = 0), u[0] < 0 && u[1] < 0 && !d[1] && (u[1] = 0));
		var y = !1;
		u[0] > u[1] && (u.reverse(), y = !0);
		var b = $C(e, t.get("startValue", !0)), x = b != null;
		!vc(b) && r && (b = e.getDefaultStartValue ? e.getDefaultStartValue() : 0), vc(b) && (x || !_ || v) && (b < u[0] && !d[0] ? (u[0] = b, d[0] = !0) : b > u[1] && !d[1] && (u[1] = b, d[1] = !0)), QC(this._i = {
			scale: e,
			dataMM: l,
			noZoomEffMM: u,
			zoomMM: [],
			fixMM: d,
			zoomFixMM: [!1, !1],
			startValue: b,
			isBlank: g,
			incl0: v,
			tggAxInv: y,
			ctnShp: i
		}, u);
	}
	return e.prototype.makeNoZoom = function() {
		return this._i.noZoomEffMM.slice();
	}, e.prototype.makeFinal = function() {
		var e = this._i, t = e.zoomMM, n = e.noZoomEffMM, r = e.zoomFixMM, i = e.fixMM, a = {
			fixMM: i,
			zoomFixMM: r,
			isBlank: e.isBlank,
			incl0: e.incl0,
			tggAxInv: e.tggAxInv,
			ctnShp: e.ctnShp,
			effMM: n.slice()
		}, o = a.effMM;
		return t[0] != null && (o[0] = t[0], i[0] = r[0] = !0), t[1] != null && (o[1] = t[1], i[1] = r[1] = !0), QC(e, o), a;
	}, e.prototype.makeRenderInfo = function() {
		return { startValue: this._i.startValue };
	}, e.prototype.setZoomMM = function(e, t) {
		this._i.zoomMM[e] = t;
	}, e;
}();
function QC(e, t) {
	var n = e.scale, r = e.dataMM;
	n.sanitize && (t[0] = n.sanitize(t[0], r), t[1] = n.sanitize(t[1], r), hl(t));
}
function $C(e, t) {
	return t == null ? null : xe(t) ? NaN : e.parse(t);
}
function ew(e, t) {
	var n;
	if (Cb(e)) n = [0, 0];
	else {
		var r = t.get("boundaryGap");
		typeof r == "boolean" && (r = null), n = V(r) ? r : [r, r];
	}
	return [tw(n[0]), tw(n[1])];
}
function tw(e) {
	return Nn(typeof e == "boolean" ? 0 : e, 1) || 0;
}
function nw(e) {
	var t = YC(e.scale);
	return t.extent ||= sl(), t;
}
function rw(e, t) {
	nw(e).dimIdxInCoord = t.get(e.dim);
}
function iw(e, t) {
	var n = e.scale, r = e.model, i = e.dim;
	n.rawExtentInfo || aw(n, e, i, r, t);
}
function aw(e, t, n, r, i) {
	var a = nw(t), o = a.extent, s = !1;
	wS(t, function(r) {
		if (r.boxCoordinateSystem) {
			var i = Ih(r).coord, c = a.dimIdxInCoord;
			if (c >= 0 && V(i)) {
				var l = i[c];
				l != null && !V(l) && cl(o, e.parse(l));
			}
		} else if (r.coordinateSystem) {
			var u = r.getData();
			if (u) {
				var d = e.getFilter ? e.getFilter() : null;
				I(fx(u, n), function(e) {
					dl(o, u.getApproximateExtent(e, d));
				});
			}
			r.__requireStartValue && r.__requireStartValue(t) && (s = !0);
		}
	});
	var c = dw(e, t, r);
	sw(e, new ZC(e, r, o, s, c), i), a.extent = null;
}
function ow(e, t) {
	var n = e.scale;
	sw(n, new ZC(n, e.model, t, !1, !1), XC);
}
function sw(e, t, n) {
	e.rawExtentInfo = t, t.from = n;
}
function cw(e, t) {
	lw.set(e, t);
}
var lw = K();
function uw(e, t, n, r, i) {
	e.rawExtentInfo || ow({
		scale: e,
		model: t
	}, i || sl());
	var a = e.rawExtentInfo.makeFinal(), o = a.effMM;
	return e.setExtent(o[0], o[1]), e.setBlank(a.isBlank), r && a.tggAxInv && n && !n.get("legacyMinMaxDontInverseAxis") && (r.inverse = !r.inverse), a;
}
function dw(e, t, n) {
	var r = yx(e, n), i = n.get("containShape", !0);
	if (i == null && !r && (i = !0), !i) return !1;
	var a = !1;
	return OS(t, function(e) {
		a = !!lw.get(e) || a;
	}), a;
}
function fw(e, t, n, r) {
	if (n.ctnShp) {
		var i;
		if (OS(e, function(t) {
			var n = lw.get(t);
			if (n) {
				var a = n(e, r);
				a && (i ||= [0, 0], ll(i, a[0]), ul(i, a[1]), ox(e));
			}
		}), i) {
			var a = t.getExtent();
			if (Cb(t)) e.onBand || t.setExtent2(1, As(a[0], a[0] + i[0]), js(a[1], a[1] + i[1]));
			else {
				var o = a.slice();
				n.zoomFixMM[0] || (o[0] = As(o[0], t.transformOut(t.transformIn(o[0], null) + i[0], null))), n.zoomFixMM[1] || (o[1] = js(o[1], t.transformOut(t.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && t.setExtent2(1, o[0], o[1]);
			}
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/axisStatisticsMetricsImpl.js
function pw() {
	AS("liPosMinGap", mw);
}
function mw(e, t, n) {
	var r = K(), i = n.serUids, a = n.liPosMinGap, o, s = t.axis, c = s.scale, l = c.needTransform(), u = c.getFilter ? c.getFilter() : null, d = Km(u);
	function f(n) {
		ES(e, t.sers, function(e) {
			var t = e.getRawData(), r = t.getDimensionIndex(t.mapDimension(s.dim));
			r >= 0 && n(r, e, t.getStore());
		});
	}
	var p = 0;
	if (f(function(e, t, n) {
		r.set(t.uid, 1), (!i || !i.hasKey(t.uid)) && (o = !0), p += n.count();
	}), (!i || i.keys().length !== r.keys().length) && (o = !0), !o && a != null) {
		t.liPosMinGap = a;
		return;
	}
	Ay(hw, p);
	var m = 0;
	f(function(e, t, n) {
		for (var r = 0, i = n.count(); r < i; ++r) {
			var a = n.get(e, r);
			isFinite(a) && (!u || qm(d, a)) && (l && (a = c.transformIn(a, null)), hw.arr[m++] = a);
		}
	});
	var h = hw.typed ? hw.arr.subarray(0, m) : (hw.arr.length = m, hw.arr);
	hw.typed ? h.sort() : Ys(h);
	for (var g = Infinity, _ = 1; _ < m; ++_) {
		var v = h[_] - h[_ - 1];
		v > 0 && v < g && (g = v);
	}
	n.liPosMinGap = t.liPosMinGap = vc(g) ? g : m > 0 ? -2 : -1, n.serUids = r;
}
var hw = Ay({ ctor: Oy }, 50);
//#endregion
//#region node_modules/echarts/lib/chart/helper/axisSnippets.js
function gw(e) {
	return function(t, n) {
		var r = LS(t, { fromStat: { key: e } });
		if (vc(r.w2)) return [-r.w2 / 2, r.w2 / 2];
	};
}
function _w(e, t) {
	return e + "|&" + t;
}
function vw(e) {
	return pw(), { liPosMinGap: !Cb(e.scale) };
}
//#endregion
//#region node_modules/echarts/lib/layout/barCommon.js
function yw(e, t, n, r) {
	PS(e, {
		key: t,
		seriesType: n,
		coordSysType: r,
		getMetrics: vw
	});
}
function bw(e) {
	return e.scale.rawExtentInfo.makeRenderInfo().startValue;
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/GridModel.js
var xw = {
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
}, Sw = ["25%", "25%"], Cw = "cartesian2d", ww = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.mergeDefaultAndTheme = function(t, n) {
		var r = W_(t.outerBounds);
		e.prototype.mergeDefaultAndTheme.apply(this, arguments), r && t.outerBounds && U_(t.outerBounds, r);
	}, t.prototype.mergeOption = function(t, n) {
		e.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && t.outerBounds && U_(this.option.outerBounds, t.outerBounds);
	}, t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
		show: !1,
		z: 0,
		left: "15%",
		top: 65,
		right: "10%",
		bottom: 80,
		containLabel: !1,
		outerBoundsMode: "auto",
		outerBounds: xw,
		outerBoundsContain: "all",
		outerBoundsClampWidth: Sw[0],
		outerBoundsClampHeight: Sw[1],
		backgroundColor: Q.color.transparent,
		borderWidth: 1,
		borderColor: Q.color.neutral30
	}, t;
}(q_), Tw = gl(), Ew = "__ec_stack_";
function Dw(e) {
	return e.get("stack") || Ew + e.seriesIndex;
}
function Ow(e) {
	if (Cb(e.axis.scale)) {
		for (var t = LS(e.axis), n = [], r = 0; r < e.count; r++) n.push(P({ stackId: Ew + r }, e));
		for (var i = jw({
			bandWidthResult: t,
			seriesInfo: n
		}), a = [], r = 0; r < e.count; r++) {
			var o = i[Ew + r];
			o.offsetCenter = o.offset + o.width / 2, a.push(o);
		}
		return a;
	}
}
function kw(e, t) {
	var n = Aw(e, t);
	return n.columnMap = jw(n), n;
}
function Aw(e, t) {
	var n = _w(t, Cw), r = [], i = LS(e, {
		fromStat: { key: n },
		min: 1
	});
	return TS(e, n, function(e) {
		r.push({
			barWidth: Hs(e.get("barWidth"), i.w),
			barMaxWidth: Hs(e.get("barMaxWidth"), i.w),
			barMinWidth: Hs(e.get("barMinWidth") || (Pw(e) ? .5 : 1), i.w),
			barGap: e.get("barGap"),
			barCategoryGap: e.get("barCategoryGap"),
			defaultBarGap: e.get("defaultBarGap"),
			stackId: Dw(e)
		});
	}), {
		bandWidthResult: i,
		seriesInfo: r
	};
}
function jw(e) {
	var t = e.bandWidthResult.w, n = t, r = 0, i, a, o = [], s = {};
	I(e.seriesInfo, function(e, t) {
		t || (a = e.defaultBarGap || 0);
		var c = e.stackId;
		q(s, c) || r++;
		var l = s[c];
		l || (l = s[c] = {
			width: 0,
			maxWidth: 0
		}, o.push(c));
		var u = e.barWidth;
		u && !l.width && (l.width = u, u = As(n, u), n -= u);
		var d = e.barMaxWidth;
		d && (l.maxWidth = d);
		var f = e.barMinWidth;
		f && (l.minWidth = f);
		var p = e.barGap;
		p != null && (a = p);
		var m = e.barCategoryGap;
		m != null && (i = m);
	}), i ??= js(35 - o.length * 4, 15) + "%";
	var c = Hs(i, t), l = Hs(a, 1), u = (n - c) / (r + (r - 1) * l);
	u = js(u, 0), I(o, function(e) {
		var t = s[e], i = t.maxWidth, a = t.minWidth;
		if (t.width) {
			var o = t.width;
			i && (o = As(o, i)), a && (o = js(o, a)), t.width = o, n -= o + l * o, r--;
		} else {
			var o = u;
			i && i < o && (o = As(i, n)), a && a > o && (o = a), o !== u && (t.width = o, n -= o + l * o, r--);
		}
	}), u = (n - c) / (r + (r - 1) * l), u = js(u, 0);
	var d = 0, f;
	I(o, function(e) {
		var t = s[e];
		t.width ||= u, f = t, d += t.width * (1 + l);
	}), f && (d -= f.width * l);
	var p = {}, m = -d / 2;
	return I(o, function(e) {
		var n = s[e];
		p[e] = p[e] || {
			bandWidth: t,
			offset: m,
			width: n.width
		}, m += n.width * (1 + l);
	}), p;
}
function Mw(e) {
	return {
		seriesType: e,
		overallReset: function(t) {
			var n = _w(e, Cw);
			DS(t, n, function(t) {
				var r = kw(t, e);
				TS(t, n, function(e) {
					var t = r.columnMap[Dw(e)];
					e.getData().setLayout({
						bandWidth: t.bandWidth,
						offset: t.offset,
						size: t.width
					});
				});
			});
		}
	};
}
function Nw(e) {
	return {
		seriesType: e,
		plan: By(),
		reset: function(e) {
			if (GC(e)) {
				var t = e.getData(), n = e.coordinateSystem, r = n.getBaseAxis(), i = n.getOtherAxis(r), a = t.getDimensionIndex(t.mapDimension(i.dim)), o = t.getDimensionIndex(t.mapDimension(r.dim)), s = e.get("showBackground", !0), c = t.mapDimension(i.dim), l = t.getCalculationInfo("stackResultDimension"), u = Gh(t, c) && !!t.getCalculationInfo("stackedOnSeries"), d = i.isHorizontal(), f = i.toGlobalCoord(i.dataToCoord(bw(i))), p = Pw(e), m = e.get("barMinHeight") || 0, h = l && t.getDimensionIndex(l), g = t.getLayout("size"), _ = t.getLayout("offset");
				return { progress: function(e, t) {
					for (var r = e.count, i = p && ky(r * 3), c = p && s && ky(r * 3), l = p && ky(r), v = n.master.getRect(), y = d ? v.width : v.height, b, x = t.getStore(), S = 0; (b = e.next()) != null;) {
						var C = x.get(u ? h : a, b), w = x.get(o, b), T = f, E = void 0;
						u && (E = +C - x.get(a, b));
						var D = void 0, O = void 0, k = void 0, A = void 0;
						if (d) {
							var ee = n.dataToPoint([C, w]);
							u && (T = n.dataToPoint([E, w])[0]), D = T, O = ee[1] + _, k = ee[0] - T, A = g, Ms(k) < m && (k = (k < 0 ? -1 : 1) * m);
						} else {
							var ee = n.dataToPoint([w, C]);
							u && (T = n.dataToPoint([w, E])[1]), D = ee[0] + _, O = T, k = g, A = ee[1] - T, Ms(A) < m && (A = (A <= 0 ? -1 : 1) * m);
						}
						p ? (i[S] = D, i[S + 1] = O, i[S + 2] = d ? k : A, c && (c[S] = d ? v.x : D, c[S + 1] = d ? O : v.y, c[S + 2] = y), l[b] = b) : t.setItemLayout(b, {
							x: D,
							y: O,
							width: k,
							height: A
						}), S += 3;
					}
					p && t.setLayout({
						largePoints: i,
						largeDataIndices: l,
						largeBackgroundPoints: c,
						valueAxisHorizontal: d
					});
				} };
			}
		}
	};
}
function Pw(e) {
	return e.pipelineContext && e.pipelineContext.large;
}
function Fw(e) {
	return gw(_w(e, Cw));
}
function Iw(e) {
	Tw(e, function() {
		function t(t) {
			var n = _w(t, Cw);
			yw(e, n, t, Cw), cw(n, Fw(t));
		}
		t("bar"), t("pictorialBar");
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/bar/BaseBarSeries.js
var Lw = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.getInitialData = function(e, t) {
		return Yh(null, this, { useEncodeDefaulter: !0 });
	}, t.prototype.getMarkerPosition = function(e, t, n) {
		var r = this.coordinateSystem;
		if (r && r.clampData) {
			var i = r.clampData(e), a = r.dataToPoint(i);
			if (n) I(r.getAxes(), function(e, n) {
				if (e.type === "category" && t != null) {
					var r = e.getTicksCoords(), o = e.getTickModel().get("alignWithLabel"), s = i[n], c = t[n] === "x1" || t[n] === "y1";
					if (c && !o && (s += 1), r.length < 2) return;
					if (r.length === 2) {
						a[n] = e.toGlobalCoord(e.getExtent()[+!!c]);
						return;
					}
					for (var l = void 0, u = void 0, d = 1, f = 0; f < r.length; f++) {
						var p = r[f].coord, m = f === r.length - 1 ? r[f - 1].tickValue + d : r[f].tickValue;
						if (m === s) {
							u = p;
							break;
						}
						if (m < s) l = p;
						else if (l != null && m > s) {
							u = (p + l) / 2;
							break;
						}
						f === 1 && (d = m - r[0].tickValue);
					}
					u ?? (l ? l && (u = r[r.length - 1].coord) : u = r[0].coord), a[n] = e.toGlobalCoord(u);
				}
			});
			else {
				var o = this.getData(), s = o.getLayout("offset"), c = o.getLayout("size"), l = +!r.getBaseAxis().isHorizontal();
				a[l] += s + c / 2;
			}
			return a;
		}
		return [NaN, NaN];
	}, t.prototype.__requireStartValue = function(e) {
		return this.getBaseAxis() !== e;
	}, t.type = "series.__base_bar__", t.defaultOption = {
		z: 2,
		coordinateSystem: "cartesian2d",
		legendHoverLink: !0,
		barMinHeight: 0,
		barMinAngle: 0,
		large: !1,
		largeThreshold: 400,
		progressive: 3e3,
		progressiveChunkMode: "mod",
		defaultBarGap: "10%"
	}, t;
}(Yv);
Yv.registerClass(Lw);
//#endregion
//#region node_modules/echarts/lib/chart/bar/BarSeries.js
var Rw = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.getInitialData = function() {
		return Yh(null, this, {
			useEncodeDefaulter: !0,
			createInvertedIndices: !!this.get("realtimeSort", !0) || null
		});
	}, t.prototype.getProgressive = function() {
		return this.get("large") ? this.get("progressive") : !1;
	}, t.prototype.__preparePipelineContext = function(e, t) {
		var n = Sl(this, e, t);
		return n.progressiveRender && (n.large = !0), n;
	}, t.prototype.brushSelector = function(e, t, n) {
		return n.rect(t.getItemLayout(e));
	}, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = ng(Lw.defaultOption, {
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
		select: { itemStyle: {
			borderColor: Q.color.primary,
			borderWidth: 2
		} },
		realtimeSort: !1
	}), t;
}(Lw), zw = "\0__throttleOriginMethod", Bw = "\0__throttleRate", Vw = "\0__throttleType";
function Hw(e, t, n) {
	var r, i = 0, a = 0, o = null, s, c, l, u;
	t ||= 0;
	function d() {
		a = (/* @__PURE__ */ new Date()).getTime(), o = null, e.apply(c, l || []);
	}
	var f = function() {
		var e = [...arguments];
		r = (/* @__PURE__ */ new Date()).getTime(), c = this, l = e;
		var f = u || t, p = u || n;
		u = null, s = r - (p ? i : a) - f, clearTimeout(o), p ? o = setTimeout(d, f) : s >= 0 ? d() : o = setTimeout(d, -s), i = r;
	};
	return f.clear = function() {
		o &&= (clearTimeout(o), null);
	}, f.debounceNextCall = function(e) {
		u = e;
	}, f;
}
function Uw(e, t, n, r) {
	var i = e[t];
	if (i) {
		var a = i[zw] || i, o = i[Vw];
		if (i[Bw] !== n || o !== r) {
			if (n == null || !r) return e[t] = a;
			i = e[t] = Hw(a, n, r === "debounce"), i[zw] = a, i[Vw] = r, i[Bw] = n;
		}
		return i;
	}
}
function Ww(e, t) {
	var n = e[t];
	n && n[zw] && (n.clear && n.clear(), e[t] = n[zw]);
}
//#endregion
//#region node_modules/echarts/lib/util/shape/sausage.js
var Gw = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
	}
	return e;
}(), Kw = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "sausage", n;
	}
	return t.prototype.getDefaultShape = function() {
		return new Gw();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.cx, r = t.cy, i = Math.max(t.r0 || 0, 0), a = Math.max(t.r, 0), o = (a - i) * .5, s = i + o, c = t.startAngle, l = t.endAngle, u = t.clockwise, d = Math.PI * 2, f = u ? l - c < d : c - l < d;
		f || (c = l - (u ? d : -d));
		var p = Math.cos(c), m = Math.sin(c), h = Math.cos(l), g = Math.sin(l);
		f ? (e.moveTo(p * i + n, m * i + r), e.arc(p * s + n, m * s + r, o, -Math.PI + c, c, !u)) : e.moveTo(p * a + n, m * a + r), e.arc(n, r, a, c, l, !u), e.arc(h * s + n, g * s + r, o, l - Math.PI * 2, l - Math.PI, !u), i !== 0 && e.arc(n, r, i, l, c, u);
	}, t;
}(Jo);
//#endregion
//#region node_modules/echarts/lib/label/sectorLabel.js
function qw(e, t) {
	t ||= {};
	var n = t.isRoundCap;
	return function(t, r, i) {
		var a = r.position;
		if (!a || a instanceof Array) return Pn(t, r, i);
		var o = e(a), s = r.distance == null ? 5 : r.distance, c = this.shape, l = c.cx, u = c.cy, d = c.r, f = c.r0, p = (d + f) / 2, m = c.startAngle, h = c.endAngle, g = (m + h) / 2, _ = n ? Math.abs(d - f) / 2 : 0, v = Math.cos, y = Math.sin, b = l + d * v(m), x = u + d * y(m), S = "left", C = "top";
		switch (o) {
			case "startArc":
				b = l + (f - s) * v(g), x = u + (f - s) * y(g), S = "center", C = "top";
				break;
			case "insideStartArc":
				b = l + (f + s) * v(g), x = u + (f + s) * y(g), S = "center", C = "bottom";
				break;
			case "startAngle":
				b = l + p * v(m) + Yw(m, s + _, !1), x = u + p * y(m) + Xw(m, s + _, !1), S = "right", C = "middle";
				break;
			case "insideStartAngle":
				b = l + p * v(m) + Yw(m, -s + _, !1), x = u + p * y(m) + Xw(m, -s + _, !1), S = "left", C = "middle";
				break;
			case "middle":
				b = l + p * v(g), x = u + p * y(g), S = "center", C = "middle";
				break;
			case "endArc":
				b = l + (d + s) * v(g), x = u + (d + s) * y(g), S = "center", C = "bottom";
				break;
			case "insideEndArc":
				b = l + (d - s) * v(g), x = u + (d - s) * y(g), S = "center", C = "top";
				break;
			case "endAngle":
				b = l + p * v(h) + Yw(h, s + _, !0), x = u + p * y(h) + Xw(h, s + _, !0), S = "left", C = "middle";
				break;
			case "insideEndAngle":
				b = l + p * v(h) + Yw(h, -s + _, !0), x = u + p * y(h) + Xw(h, -s + _, !0), S = "right", C = "middle";
				break;
			default: return Pn(t, r, i);
		}
		return t ||= {}, t.x = b, t.y = x, t.align = S, t.verticalAlign = C, t;
	};
}
function Jw(e, t, n, r) {
	if (me(r)) {
		e.setTextConfig({ rotation: r });
		return;
	}
	if (V(t)) {
		e.setTextConfig({ rotation: 0 });
		return;
	}
	var i = e.shape, a = i.clockwise ? i.startAngle : i.endAngle, o = i.clockwise ? i.endAngle : i.startAngle, s = (a + o) / 2, c, l = n(t);
	switch (l) {
		case "startArc":
		case "insideStartArc":
		case "middle":
		case "insideEndArc":
		case "endArc":
			c = s;
			break;
		case "startAngle":
		case "insideStartAngle":
			c = a;
			break;
		case "endAngle":
		case "insideEndAngle":
			c = o;
			break;
		default:
			e.setTextConfig({ rotation: 0 });
			return;
	}
	var u = Math.PI * 1.5 - c;
	l === "middle" && u > Math.PI / 2 && u < Math.PI * 1.5 && (u -= Math.PI), e.setTextConfig({ rotation: u });
}
function Yw(e, t, n) {
	return t * Math.sin(e) * (n ? -1 : 1);
}
function Xw(e, t, n) {
	return t * Math.cos(e) * (n ? 1 : -1);
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/sectorHelper.js
function Zw(e, t, n) {
	var r = e.get("borderRadius");
	if (r == null) return n ? { cornerRadius: 0 } : null;
	V(r) || (r = [
		r,
		r,
		r,
		r
	]);
	var i = Math.abs(t.r || 0 - t.r0 || 0);
	return { cornerRadius: L(r, function(e) {
		return Nn(e, i);
	}) };
}
//#endregion
//#region node_modules/echarts/lib/chart/bar/BarView.js
var Qw = Math.max, $w = Math.min, eT = function(e) {
	l(t, e);
	function t() {
		var t = e.call(this) || this;
		return t.type = "bar", t._isFirstFrame = !0, t;
	}
	return t.prototype.render = function(e, t, n, r) {
		this._model = e, this._removeOnRenderedListener(n), this._updateDrawMode(e);
		var i = e.get("coordinateSystem");
		(i === "cartesian2d" || i === "polar") && (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, t, n) : this._renderNormal(e, t, n, r));
	}, t.prototype.incrementalPrepareRender = function(e) {
		this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
	}, t.prototype.incrementalRender = function(e, t) {
		this._progressiveEls = [], this._incrementalRenderLarge(e, t);
	}, t.prototype.eachRendered = function(e) {
		sp(this._progressiveEls || this.group, e);
	}, t.prototype._updateDrawMode = function(e) {
		var t = e.pipelineContext.large;
		(this._isLargeDraw == null || t !== this._isLargeDraw) && (this._isLargeDraw = t, this._clear());
	}, t.prototype._renderNormal = function(e, t, n, r) {
		var i = this.group, a = e.getData(), o = this._data, s = e.coordinateSystem, c = s.getBaseAxis(), l;
		s.type === "cartesian2d" ? l = c.isHorizontal() : s.type === "polar" && (l = c.dim === "angle");
		var u = e.isAnimationEnabled() ? e : null, d = rT(e, s);
		d && this._enableRealtimeSort(d, a, n);
		var f = e.get("clip", !0) || d, p = s.getArea();
		i.removeClipPath();
		var m = e.get("roundCap", !0), h = e.get("showBackground", !0), g = e.getModel("backgroundStyle"), _ = g.get("borderRadius") || 0, v = [], y = this._backgroundEls, b = r && r.isInitSort, x = r && r.type === "changeAxisOrder";
		function S(e) {
			var t = lT[s.type](a, e);
			if (!t) return null;
			var n = bT(s, l, t);
			return n.useStyle(g.getItemStyle()), s.type === "cartesian2d" ? n.setShape("r", _) : n.setShape("cornerRadius", _), v[e] = n, n;
		}
		a.diff(o).add(function(t) {
			var n = a.getItemModel(t), r = lT[s.type](a, t, n);
			if (r && (h && S(t), a.hasValue(t) && cT[s.type](r))) {
				var o = !1;
				f && (o = tT[s.type](p, r));
				var g = nT[s.type](e, a, t, r, l, u, c.model, !1, m);
				d && (g.forceLabelAnimation = !0), fT(g, a, t, n, r, e, l, s.type === "polar"), b ? g.attr({ shape: r }) : d ? iT(d, u, g, r, t, l, !1, !1) : bf(g, { shape: r }, e, t), a.setItemGraphicEl(t, g), i.add(g), g.ignore = o;
			}
		}).update(function(t, n) {
			var r = a.getItemModel(t), C = lT[s.type](a, t, r);
			if (C) {
				if (h) {
					var w = void 0;
					y.length === 0 ? w = S(n) : (w = y[n], w.useStyle(g.getItemStyle()), s.type === "cartesian2d" ? w.setShape("r", _) : w.setShape("cornerRadius", _), v[t] = w);
					var T = lT[s.type](a, t), E = yT(l, T, s);
					yf(w, { shape: E }, u, t);
				}
				var D = o.getItemGraphicEl(n);
				if (!a.hasValue(t) || !cT[s.type](C)) {
					i.remove(D);
					return;
				}
				var O = !1;
				if (f && (O = tT[s.type](p, C), O && i.remove(D)), D && (D.type === "sector" && m || D.type === "sausage" && !m) && (D && wf(D, e, n), D = null), D ? Tf(D) : D = nT[s.type](e, a, t, C, l, u, c.model, !0, m), d && (D.forceLabelAnimation = !0), x) {
					var k = D.getTextContent();
					if (k) {
						var A = Pp(k);
						A.prevValue != null && (A.prevValue = A.value);
					}
				} else fT(D, a, t, r, C, e, l, s.type === "polar");
				b ? D.attr({ shape: C }) : d ? iT(d, u, D, C, t, l, !0, x) : yf(D, { shape: C }, e, t, null), a.setItemGraphicEl(t, D), D.ignore = O, i.add(D);
			}
		}).remove(function(t) {
			var n = o.getItemGraphicEl(t);
			n && wf(n, e, t);
		}).execute();
		var C = this._backgroundGroup ||= new hd();
		C.removeAll();
		for (var w = 0; w < v.length; ++w) C.add(v[w]);
		i.add(C), this._backgroundEls = v, this._data = a;
	}, t.prototype._renderLarge = function(e, t, n) {
		this._clear(), gT(e, this.group), this._updateLargeClip(e);
	}, t.prototype._incrementalRenderLarge = function(e, t) {
		this._removeBackground(), gT(t, this.group, this._progressiveEls, !0);
	}, t.prototype._updateLargeClip = function(e) {
		var t = e.get("clip", !0) && Zy(e.coordinateSystem, !1, e), n = this.group;
		t ? n.setClipPath(t) : n.removeClipPath();
	}, t.prototype._enableRealtimeSort = function(e, t, n) {
		var r = this;
		if (t.count()) {
			var i = e.baseAxis;
			if (this._isFirstFrame) this._dispatchInitSort(t, e, n), this._isFirstFrame = !1;
			else {
				var a = function(e) {
					var n = t.getItemGraphicEl(e), r = n && n.shape;
					return r && Math.abs(i.isHorizontal() ? r.height : r.width) || 0;
				};
				this._onRendered = function() {
					r._updateSortWithinSameData(t, a, i, n);
				}, n.getZr().on("rendered", this._onRendered);
			}
		}
	}, t.prototype._dataSort = function(e, t, n) {
		var r = [];
		return e.each(e.mapDimension(t.dim), function(e, t) {
			var i = n(t);
			i ??= NaN, r.push({
				dataIndex: t,
				mappedValue: i,
				ordinalNumber: e
			});
		}), r.sort(function(e, t) {
			return t.mappedValue - e.mappedValue;
		}), { ordinalNumbers: L(r, function(e) {
			return e.ordinalNumber;
		}) };
	}, t.prototype._isOrderChangedWithinSameData = function(e, t, n) {
		for (var r = n.scale, i = e.mapDimension(n.dim), a = Number.MAX_VALUE, o = 0, s = r.getOrdinalMeta().categories.length; o < s; ++o) {
			var c = e.rawIndexOf(i, r.getRawOrdinalNumber(o)), l = c < 0 ? Number.MIN_VALUE : t(e.indexOfRawIndex(c));
			if (l > a) return !0;
			a = l;
		}
		return !1;
	}, t.prototype._isOrderDifferentInView = function(e, t) {
		for (var n = t.scale, r = n.getExtent(), i = Math.max(0, r[0]), a = Math.min(r[1], n.getOrdinalMeta().categories.length - 1); i <= a; ++i) if (e.ordinalNumbers[i] !== n.getRawOrdinalNumber(i)) return !0;
	}, t.prototype._updateSortWithinSameData = function(e, t, n, r) {
		if (this._isOrderChangedWithinSameData(e, t, n)) {
			var i = this._dataSort(e, n, t);
			this._isOrderDifferentInView(i, n) && (this._removeOnRenderedListener(r), r.dispatchAction({
				type: "changeAxisOrder",
				componentType: n.dim + "Axis",
				axisId: n.index,
				sortInfo: i
			}));
		}
	}, t.prototype._dispatchInitSort = function(e, t, n) {
		var r = t.baseAxis, i = this._dataSort(e, r, function(n) {
			return e.get(e.mapDimension(t.otherAxis.dim), n);
		});
		n.dispatchAction({
			type: "changeAxisOrder",
			componentType: r.dim + "Axis",
			isInitSort: !0,
			axisId: r.index,
			sortInfo: i
		});
	}, t.prototype.remove = function(e, t) {
		this._clear(this._model), this._removeOnRenderedListener(t);
	}, t.prototype.dispose = function(e, t) {
		this._removeOnRenderedListener(t);
	}, t.prototype._removeOnRenderedListener = function(e) {
		this._onRendered &&= (e.getZr().off("rendered", this._onRendered), null);
	}, t.prototype._clear = function(e) {
		var t = this.group, n = this._data;
		e && e.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function(t) {
			wf(t, e, Z(t).dataIndex);
		})) : t.removeAll(), this._data = null, this._isFirstFrame = !0;
	}, t.prototype._removeBackground = function() {
		this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
	}, t.type = "bar", t;
}(Uy), tT = {
	cartesian2d: function(e, t) {
		var n = t.width < 0 ? -1 : 1, r = t.height < 0 ? -1 : 1;
		n < 0 && (t.x += t.width, t.width = -t.width), r < 0 && (t.y += t.height, t.height = -t.height);
		var i = e.x + e.width, a = e.y + e.height, o = Qw(t.x, e.x), s = $w(t.x + t.width, i), c = Qw(t.y, e.y), l = $w(t.y + t.height, a), u = s < o, d = l < c;
		return t.x = u && o > i ? s : o, t.y = d && c > a ? l : c, t.width = u ? 0 : s - o, t.height = d ? 0 : l - c, n < 0 && (t.x += t.width, t.width = -t.width), r < 0 && (t.y += t.height, t.height = -t.height), u || d;
	},
	polar: function(e, t) {
		var n = t.r0 <= t.r ? 1 : -1;
		if (n < 0) {
			var r = t.r;
			t.r = t.r0, t.r0 = r;
		}
		var i = $w(t.r, e.r), a = Qw(t.r0, e.r0);
		t.r = i, t.r0 = a;
		var o = i - a < 0;
		if (n < 0) {
			var r = t.r;
			t.r = t.r0, t.r0 = r;
		}
		return o;
	}
}, nT = {
	cartesian2d: function(e, t, n, r, i, a, o, s, c) {
		var l = new cs({
			shape: N({}, r),
			z2: 1
		});
		if (l.__dataIndex = n, l.name = "item", a) {
			var u = l.shape, d = i ? "height" : "width";
			u[d] = 0;
		}
		return l;
	},
	polar: function(e, t, n, r, i, a, o, s, c) {
		var l = !i && c ? Kw : Id, u = new l({
			shape: r,
			z2: 1
		});
		if (u.name = "item", u.calculateTextPosition = qw(dT(i), { isRoundCap: l === Kw }), a) {
			var d = u.shape, f = i ? "r" : "endAngle", p = {};
			d[f] = i ? r.r0 : r.startAngle, p[f] = r[f], (s ? yf : bf)(u, { shape: p }, a);
		}
		return u;
	}
};
function rT(e, t) {
	var n = e.get("realtimeSort", !0), r = t.getBaseAxis();
	if (n && r.type === "category" && t.type === "cartesian2d") return {
		baseAxis: r,
		otherAxis: t.getOtherAxis(r)
	};
}
function iT(e, t, n, r, i, a, o, s) {
	var c, l;
	a ? (l = {
		x: r.x,
		width: r.width
	}, c = {
		y: r.y,
		height: r.height
	}) : (l = {
		y: r.y,
		height: r.height
	}, c = {
		x: r.x,
		width: r.width
	}), s || (o ? yf : bf)(n, { shape: c }, t, i, null);
	var u = t ? e.baseAxis.model : null;
	(o ? yf : bf)(n, { shape: l }, u, i);
}
function aT(e, t) {
	for (var n = 0; n < t.length; n++) if (!isFinite(e[t[n]])) return !0;
	return !1;
}
var oT = [
	"x",
	"y",
	"width",
	"height"
], sT = [
	"cx",
	"cy",
	"r",
	"startAngle",
	"endAngle"
], cT = {
	cartesian2d: function(e) {
		return !aT(e, oT);
	},
	polar: function(e) {
		return !aT(e, sT);
	}
}, lT = {
	cartesian2d: function(e, t, n) {
		var r = e.getItemLayout(t);
		if (!r) return null;
		var i = n ? pT(n, r) : 0, a = r.width > 0 ? 1 : -1, o = r.height > 0 ? 1 : -1;
		return {
			x: r.x + a * i / 2,
			y: r.y + o * i / 2,
			width: r.width - a * i,
			height: r.height - o * i
		};
	},
	polar: function(e, t, n) {
		var r = e.getItemLayout(t);
		return {
			cx: r.cx,
			cy: r.cy,
			r0: r.r0,
			r: r.r,
			startAngle: r.startAngle,
			endAngle: r.endAngle,
			clockwise: r.clockwise
		};
	}
};
function uT(e) {
	return e.startAngle != null && e.endAngle != null && e.startAngle === e.endAngle;
}
function dT(e) {
	return function(e) {
		var t = e ? "Arc" : "Angle";
		return function(e) {
			switch (e) {
				case "start":
				case "insideStart":
				case "end":
				case "insideEnd": return e + t;
				default: return e;
			}
		};
	}(e);
}
function fT(e, t, n, r, i, a, o, s) {
	var c = t.getItemVisual(n, "style");
	if (!s) {
		var l = r.get(["itemStyle", "borderRadius"]) || 0;
		e.setShape("r", l);
	} else if (!a.get("roundCap")) {
		var u = e.shape;
		N(u, Zw(r.getModel("itemStyle"), u, !0)), e.setShape(u);
	}
	e.useStyle(c);
	var d = r.getShallow("cursor");
	d && e.attr("cursor", d);
	var f = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? xT(i, a.coordinateSystem) : ST(i, a.coordinateSystem), p = wp(r);
	Cp(e, p, {
		labelFetcher: a,
		labelDataIndex: n,
		defaultText: my(a.getData(), n),
		inheritColor: c.fill,
		defaultOpacity: c.opacity,
		defaultOutsidePosition: f
	});
	var m = e.getTextContent();
	if (s && m) {
		var h = r.get(["label", "position"]);
		e.textConfig.inside = h === "middle" || null, Jw(e, h === "outside" ? f : h, dT(o), r.get(["label", "rotate"]));
	}
	Fp(m, p, a.getRawValue(n), function(e) {
		return hy(t, e);
	});
	var g = r.getModel(["emphasis"]);
	Fu(e, g.get("focus"), g.get("blurScope"), g.get("disabled")), zu(e, r), uT(i) && (e.style.fill = "none", e.style.stroke = "none", I(e.states, function(e) {
		e.style && (e.style.fill = e.style.stroke = "none");
	}));
}
function pT(e, t) {
	var n = e.get(["itemStyle", "borderColor"]);
	if (!n || n === "none") return 0;
	var r = e.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
	return Math.min(r, i, a);
}
var mT = function() {
	function e() {}
	return e;
}(), hT = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "largeBar", n;
	}
	return t.prototype.getDefaultShape = function() {
		return new mT();
	}, t.prototype.buildPath = function(e, t) {
		for (var n = t.points, r = this.baseDimIdx, i = 1 - this.baseDimIdx, a = [], o = [], s = this.barWidth, c = 0; c < n.length; c += 3) o[r] = s, o[i] = n[c + 2], a[r] = n[c + r], a[i] = n[c + i], e.rect(a[0], a[1], o[0], o[1]);
	}, t;
}(Jo);
function gT(e, t, n, r) {
	var i = e.getData(), a = +!!i.getLayout("valueAxisHorizontal"), o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), c = e.getModel("backgroundStyle"), l = i.getLayout("largeBackgroundPoints"), u = r ? xl(e) : 0;
	if (l) {
		var d = new hT({
			shape: { points: l },
			incremental: u,
			silent: !0,
			z2: 0
		});
		d.baseDimIdx = a, d.largeDataIndices = o, d.barWidth = s, d.useStyle(c.getItemStyle()), t.add(d), n && n.push(d);
	}
	var f = new hT({
		shape: { points: i.getLayout("largePoints") },
		incremental: u,
		ignoreCoarsePointer: !0,
		z2: 1
	});
	f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, t.add(f), f.useStyle(i.getVisual("style")), f.style.stroke = null, Z(f).seriesIndex = e.seriesIndex, e.get("silent") || (f.on("mousedown", _T), f.on("mousemove", _T)), n && n.push(f);
}
var _T = Hw(function(e) {
	var t = this, n = vT(t, e.offsetX, e.offsetY);
	Z(t).dataIndex = n >= 0 ? n : null;
}, 30, !1);
function vT(e, t, n) {
	for (var r = e.baseDimIdx, i = 1 - r, a = e.shape.points, o = e.largeDataIndices, s = [], c = [], l = e.barWidth, u = 0, d = a.length / 3; u < d; u++) {
		var f = u * 3;
		if (c[r] = l, c[i] = a[f + 2], s[r] = a[f + r], s[i] = a[f + i], c[i] < 0 && (s[i] += c[i], c[i] = -c[i]), t >= s[0] && t <= s[0] + c[0] && n >= s[1] && n <= s[1] + c[1]) return o[u];
	}
	return -1;
}
function yT(e, t, n) {
	if (Qy(n, "cartesian2d")) {
		var r = t, i = n.getArea();
		return {
			x: e ? r.x : i.x,
			y: e ? i.y : r.y,
			width: e ? r.width : i.width,
			height: e ? i.height : r.height
		};
	}
	var i = n.getArea(), a = t;
	return {
		cx: i.cx,
		cy: i.cy,
		r0: e ? i.r0 : a.r0,
		r: e ? i.r : a.r,
		startAngle: e ? a.startAngle : 0,
		endAngle: e ? a.endAngle : Math.PI * 2
	};
}
function bT(e, t, n) {
	return new (e.type === "polar" ? Id : cs)({
		shape: yT(t, n, e),
		silent: !0,
		z2: 0
	});
}
function xT(e, t) {
	return e.height === 0 ? t.getOtherAxis(t.getBaseAxis()).inverse ? "bottom" : "top" : e.height > 0 ? "bottom" : "top";
}
function ST(e, t) {
	return e.width === 0 ? t.getOtherAxis(t.getBaseAxis()).inverse ? "left" : "right" : e.width >= 0 ? "right" : "left";
}
//#endregion
//#region node_modules/echarts/lib/chart/bar/install.js
function CT(e) {
	e.registerChartView(eT), e.registerSeriesModel(Rw), e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, Mw("bar")), e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, Nw("bar")), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, Vx("bar")), e.registerAction({
		type: "changeAxisOrder",
		event: "changeAxisOrder",
		update: "update"
	}, function(e, t) {
		var n = e.componentType || "series";
		t.eachComponent({
			mainType: n,
			query: e
		}, function(t) {
			e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo);
		});
	}), Iw(e);
}
//#endregion
//#region node_modules/echarts/lib/legacy/dataSelectAction.js
function wT(e, t) {
	function n(t, n) {
		var r = [];
		return t.eachComponent({
			mainType: "series",
			subType: e,
			query: n
		}, function(e) {
			r.push(e.seriesIndex);
		}), r;
	}
	I([
		[e + "ToggleSelect", "toggleSelect"],
		[e + "Select", "select"],
		[e + "UnSelect", "unselect"]
	], function(e) {
		t(e[0], function(t, r, i) {
			t = N({}, t), i.dispatchAction(N(t, {
				type: e[1],
				seriesIndex: n(r, t)
			}));
		});
	});
}
function TT(e, t, n, r, i) {
	var a = e + t;
	n.isSilent(a) || r.eachComponent({
		mainType: "series",
		subType: "pie"
	}, function(e) {
		for (var t = e.seriesIndex, r = e.option.selectedMap, o = i.selected, s = 0; s < o.length; s++) if (o[s].seriesIndex === t) {
			var c = e.getData(), l = Jc(c, i.fromActionPayload);
			n.trigger(a, {
				type: a,
				seriesId: e.id,
				name: V(l) ? c.getName(l[0]) : c.getName(l),
				selected: U(r) ? r : N({}, r)
			});
		}
	});
}
function ET(e, t, n) {
	e.on("selectchanged", function(e) {
		var r = n.getModel();
		e.isFromClick ? (TT("map", "selectchanged", t, r, e), TT("pie", "selectchanged", t, r, e)) : e.fromAction === "select" ? (TT("map", "selected", t, r, e), TT("pie", "selected", t, r, e)) : e.fromAction === "unselect" && (TT("map", "unselected", t, r, e), TT("pie", "unselected", t, r, e));
	});
}
//#endregion
//#region node_modules/echarts/lib/processor/dataFilter.js
function DT(e) {
	return {
		seriesType: e,
		reset: function(e, t) {
			var n = t.findComponents({ mainType: "legend" });
			if (n && n.length) {
				var r = e.getData();
				r.filterSelf(function(e) {
					for (var t = r.getName(e), i = 0; i < n.length; i++) if (!n[i].isSelected(t)) return !1;
					return !0;
				});
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
function OT(e, t, n) {
	t = V(t) && { coordDimensions: t } || N({ encodeDefine: e.getEncode() }, t);
	var r = e.getSource(), i = Dh(r, t).dimensions, a = new Th(i, e);
	return a.initData(r, n), a;
}
//#endregion
//#region node_modules/echarts/lib/visual/LegendVisualProvider.js
var kT = function() {
	function e(e, t) {
		this._getDataWithEncodedVisual = e, this._getRawData = t;
	}
	return e.prototype.getAllNames = function() {
		var e = this._getRawData();
		return e.mapArray(e.getName);
	}, e.prototype.containName = function(e) {
		return this._getRawData().indexOfName(e) >= 0;
	}, e.prototype.indexOfName = function(e) {
		return this._getDataWithEncodedVisual().indexOfName(e);
	}, e.prototype.getItemVisual = function(e, t) {
		return this._getDataWithEncodedVisual().getItemVisual(e, t);
	}, e;
}(), AT = Yc(), jT = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.init = function(t) {
		e.prototype.init.apply(this, arguments), this.legendVisualProvider = new kT(B(this.getData, this), B(this.getRawData, this)), this._defaultLabelLine(t);
	}, t.prototype.mergeOption = function() {
		e.prototype.mergeOption.apply(this, arguments);
	}, t.prototype.getInitialData = function() {
		return OT(this, {
			coordDimensions: ["value"],
			encodeDefaulter: fe(nm, this)
		});
	}, t.prototype.getDataParams = function(t) {
		var n = this.getData(), r = AT(n), i = r.seats;
		if (!i) {
			var a = [];
			n.each(n.mapDimension("value"), function(e) {
				a.push(e);
			}), i = r.seats = tc(a, n.hostModel.get("percentPrecision"));
		}
		var o = e.prototype.getDataParams.call(this, t);
		return o.percent = i[t] || 0, o.$vars.push("percent"), o;
	}, t.prototype._defaultLabelLine = function(e) {
		kc(e, "labelLine", ["show"]);
		var t = e.labelLine, n = e.emphasis.labelLine;
		t.show = t.show && e.label.show, n.show = n.show && e.emphasis.label.show;
	}, t.type = "series.pie", t.defaultOption = {
		z: 2,
		legendHoverLink: !0,
		colorBy: "data",
		center: ["50%", "50%"],
		radius: [0, "50%"],
		clockwise: !0,
		startAngle: 90,
		endAngle: "auto",
		padAngle: 0,
		minAngle: 0,
		minShowLabelAngle: 0,
		selectedOffset: 10,
		percentPrecision: 2,
		stillShowZeroSum: !0,
		coordinateSystemUsage: "box",
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: null,
		height: null,
		label: {
			rotate: 0,
			show: !0,
			overflow: "truncate",
			position: "outer",
			alignTo: "none",
			edgeDistance: "25%",
			distanceToLabelLine: 5
		},
		labelLine: {
			show: !0,
			length: 15,
			length2: 30,
			smooth: !1,
			minTurnAngle: 90,
			maxSurfaceAngle: 90,
			lineStyle: {
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
		labelLayout: { hideOverlap: !0 },
		emphasis: {
			scale: !0,
			scaleSize: 5
		},
		avoidLabelOverlap: !0,
		animationType: "expansion",
		animationDuration: 1e3,
		animationTypeUpdate: "transition",
		animationEasingUpdate: "cubicInOut",
		animationDurationUpdate: 500,
		animationEasing: "cubicInOut"
	}, t;
}(Yv);
Ph({
	fullType: jT.type,
	getCoord2: function(e) {
		return e.getShallow("center");
	}
});
//#endregion
//#region node_modules/echarts/lib/label/labelGuideHelper.js
var MT = Math.PI * 2, NT = Co.CMD, PT = [
	"top",
	"right",
	"bottom",
	"left"
];
function FT(e, t, n, r, i) {
	var a = n.width, o = n.height;
	switch (e) {
		case "top":
			r.set(n.x + a / 2, n.y - t), i.set(0, -1);
			break;
		case "bottom":
			r.set(n.x + a / 2, n.y + o + t), i.set(0, 1);
			break;
		case "left":
			r.set(n.x - t, n.y + o / 2), i.set(-1, 0);
			break;
		case "right": r.set(n.x + a + t, n.y + o / 2), i.set(1, 0);
	}
}
function IT(e, t, n, r, i, a, o, s, c) {
	o -= e, s -= t;
	var l = Math.sqrt(o * o + s * s);
	o /= l, s /= l;
	var u = o * n + e, d = s * n + t;
	if (Math.abs(r - i) % MT < 1e-4) return c[0] = u, c[1] = d, l - n;
	if (a) {
		var f = r;
		r = Oo(i), i = Oo(f);
	} else r = Oo(r), i = Oo(i);
	r > i && (i += MT);
	var p = Math.atan2(s, o);
	if (p < 0 && (p += MT), p >= r && p <= i || p + MT >= r && p + MT <= i) return c[0] = u, c[1] = d, l - n;
	var m = n * Math.cos(r) + e, h = n * Math.sin(r) + t, g = n * Math.cos(i) + e, _ = n * Math.sin(i) + t, v = (m - o) * (m - o) + (h - s) * (h - s), y = (g - o) * (g - o) + (_ - s) * (_ - s);
	return v < y ? (c[0] = m, c[1] = h, Math.sqrt(v)) : (c[0] = g, c[1] = _, Math.sqrt(y));
}
function LT(e, t, n, r, i, a, o, s) {
	var c = i - e, l = a - t, u = n - e, d = r - t, f = Math.sqrt(u * u + d * d);
	u /= f, d /= f;
	var p = (c * u + l * d) / f;
	s && (p = Math.min(Math.max(p, 0), 1)), p *= f;
	var m = o[0] = e + p * u, h = o[1] = t + p * d;
	return Math.sqrt((m - i) * (m - i) + (h - a) * (h - a));
}
function RT(e, t, n, r, i, a, o) {
	n < 0 && (e += n, n = -n), r < 0 && (t += r, r = -r);
	var s = e + n, c = t + r, l = o[0] = Math.min(Math.max(i, e), s), u = o[1] = Math.min(Math.max(a, t), c);
	return Math.sqrt((l - i) * (l - i) + (u - a) * (u - a));
}
var zT = [];
function BT(e, t, n) {
	var r = RT(t.x, t.y, t.width, t.height, e.x, e.y, zT);
	return n.set(zT[0], zT[1]), r;
}
function VT(e, t, n) {
	for (var r = 0, i = 0, a = 0, o = 0, s, c, l = Infinity, u = t.data, d = e.x, f = e.y, p = 0; p < u.length;) {
		var m = u[p++];
		p === 1 && (r = u[p], i = u[p + 1], a = r, o = i);
		var h = l;
		switch (m) {
			case NT.M:
				a = u[p++], o = u[p++], r = a, i = o;
				break;
			case NT.L:
				h = LT(r, i, u[p], u[p + 1], d, f, zT, !0), r = u[p++], i = u[p++];
				break;
			case NT.C:
				h = Nr(r, i, u[p++], u[p++], u[p++], u[p++], u[p], u[p + 1], d, f, zT), r = u[p++], i = u[p++];
				break;
			case NT.Q:
				h = Br(r, i, u[p++], u[p++], u[p], u[p + 1], d, f, zT), r = u[p++], i = u[p++];
				break;
			case NT.A:
				var g = u[p++], _ = u[p++], v = u[p++], y = u[p++], b = u[p++], x = u[p++];
				p += 1;
				var S = !!(1 - u[p++]);
				s = Math.cos(b) * v + g, c = Math.sin(b) * y + _, p <= 1 && (a = s, o = c);
				var C = (d - g) * y / v + g;
				h = IT(g, _, y, b, b + x, S, C, f, zT), r = Math.cos(b + x) * v + g, i = Math.sin(b + x) * y + _;
				break;
			case NT.R:
				a = r = u[p++], o = i = u[p++];
				var w = u[p++], T = u[p++];
				h = RT(a, o, w, T, d, f, zT);
				break;
			case NT.Z: h = LT(r, i, a, o, d, f, zT, !0), r = a, i = o;
		}
		h < l && (l = h, n.set(zT[0], zT[1]));
	}
	return l;
}
var HT = new Y(), UT = new Y(), WT = new Y(), GT = new Y(), KT = new Y();
function qT(e, t) {
	if (e) {
		var n = e.getTextGuideLine(), r = e.getTextContent();
		if (r && n) {
			var i = e.textGuideLineConfig || {}, a = [
				[0, 0],
				[0, 0],
				[0, 0]
			], o = i.candidates || PT, s = r.getBoundingRect().clone();
			s.applyTransform(r.getComputedTransform());
			var c = Infinity, l = i.anchor, u = e.getComputedTransform(), d = u && St([], u), f = t.get("length2") || 0;
			l && WT.copy(l);
			for (var p = 0; p < o.length; p++) {
				var m = o[p];
				FT(m, 0, s, HT, GT), Y.scaleAndAdd(UT, HT, GT, f), UT.transform(d);
				var h = e.getBoundingRect(), g = l ? l.distance(UT) : e instanceof Jo ? VT(UT, e.path, WT) : BT(UT, h, WT);
				g < c && (c = g, UT.transform(u), WT.transform(u), WT.toArray(a[0]), UT.toArray(a[1]), HT.toArray(a[2]));
			}
			XT(a, t.get("minTurnAngle")), n.setShape({ points: a });
		}
	}
}
var JT = [], YT = new Y();
function XT(e, t) {
	if (t <= 180 && t > 0) {
		t = t / 180 * Math.PI, HT.fromArray(e[0]), UT.fromArray(e[1]), WT.fromArray(e[2]), Y.sub(GT, HT, UT), Y.sub(KT, WT, UT);
		var n = GT.len(), r = KT.len();
		if (!(n < .001 || r < .001)) {
			GT.scale(1 / n), KT.scale(1 / r);
			var i = GT.dot(KT);
			if (Math.cos(t) < i) {
				var a = LT(UT.x, UT.y, WT.x, WT.y, HT.x, HT.y, JT, !1);
				YT.fromArray(JT), YT.scaleAndAdd(KT, a / Math.tan(Math.PI - t));
				var o = WT.x === UT.x ? (YT.y - UT.y) / (WT.y - UT.y) : (YT.x - UT.x) / (WT.x - UT.x);
				if (isNaN(o)) return;
				o < 0 ? Y.copy(YT, UT) : o > 1 && Y.copy(YT, WT), YT.toArray(e[1]);
			}
		}
	}
}
function ZT(e, t, n) {
	if (n <= 180 && n > 0) {
		n = n / 180 * Math.PI, HT.fromArray(e[0]), UT.fromArray(e[1]), WT.fromArray(e[2]), Y.sub(GT, UT, HT), Y.sub(KT, WT, UT);
		var r = GT.len(), i = KT.len();
		if (!(r < .001 || i < .001) && (GT.scale(1 / r), KT.scale(1 / i), GT.dot(t) < Math.cos(n))) {
			var a = LT(UT.x, UT.y, WT.x, WT.y, HT.x, HT.y, JT, !1);
			YT.fromArray(JT);
			var o = Math.PI / 2, s = o + Math.acos(KT.dot(t)) - n;
			if (s >= o) Y.copy(YT, WT);
			else {
				YT.scaleAndAdd(KT, a / Math.tan(Math.PI / 2 - s));
				var c = WT.x === UT.x ? (YT.y - UT.y) / (WT.y - UT.y) : (YT.x - UT.x) / (WT.x - UT.x);
				if (isNaN(c)) return;
				c < 0 ? Y.copy(YT, UT) : c > 1 && Y.copy(YT, WT);
			}
			YT.toArray(e[1]);
		}
	}
}
function QT(e, t, n, r) {
	var i = n === "normal", a = i ? e : e.ensureState(n);
	a.ignore = t;
	var o = r.get("smooth");
	o = o === !0 ? .3 : Math.max(+o, 0) || 0, a.shape = a.shape || {}, a.shape.smooth = o;
	var s = r.getModel("lineStyle").getLineStyle();
	i ? e.useStyle(s) : a.style = s;
}
function $T(e, t) {
	var n = t.smooth, r = t.points;
	if (r) {
		if (e.moveTo(r[0][0], r[0][1]), n > 0 && r.length >= 3) {
			var i = Ht(r[0], r[1]), a = Ht(r[1], r[2]);
			if (!i || !a) {
				e.lineTo(r[1][0], r[1][1]), e.lineTo(r[2][0], r[2][1]);
				return;
			}
			var o = Math.min(i, a) * n, s = Kt([], r[1], r[0], o / i), c = Kt([], r[1], r[2], o / a), l = Kt([], s, c, .5);
			e.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), e.bezierCurveTo(c[0], c[1], c[0], c[1], r[2][0], r[2][1]);
		} else for (var u = 1; u < r.length; u++) e.lineTo(r[u][0], r[u][1]);
	}
}
function eE(e, t, n) {
	var r = e.getTextGuideLine(), i = e.getTextContent();
	if (!i) {
		r && e.removeTextGuideLine();
		return;
	}
	for (var a = t.normal, o = a.get("show"), s = i.ignore, c = 0; c < Wl.length; c++) {
		var l = Wl[c], u = t[l], d = l === "normal";
		if (u) {
			var f = u.get("show");
			if ((d ? s : G(i.states[l] && i.states[l].ignore, s)) || !G(f, o)) {
				var p = d ? r : r && r.states[l];
				p && (p.ignore = !0), r && QT(r, !0, l, u);
				continue;
			}
			r || (r = new Wd(), e.setTextGuideLine(r), !d && (s || !o) && QT(r, !0, "normal", t.normal), e.stateProxy && (r.stateProxy = e.stateProxy)), QT(r, !1, l, u);
		}
	}
	if (r) {
		P(r.style, n), r.style.fill = null;
		var m = a.get("showAbove"), h = e.textGuideLineConfig = e.textGuideLineConfig || {};
		h.showAbove = m || !1, r.buildPath = $T;
	}
}
function tE(e, t) {
	t ||= "labelLine";
	for (var n = { normal: e.getModel(t) }, r = 0; r < Ul.length; r++) {
		var i = Ul[r];
		n[i] = e.getModel([i, t]);
	}
	return n;
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/labelLayout.js
var nE = Math.PI / 180;
function rE(e, t, n, r, i, a, o, s, c, l) {
	if (e.length < 2) return;
	function u(e) {
		for (var a = e.rB, o = a * a, s = 0; s < e.list.length; s++) {
			var c = e.list[s], l = Math.abs(c.label.y - n), u = r + c.len, d = u * u, f = t + (Math.sqrt(Math.abs((1 - l * l / o) * d)) + c.len2) * i, p = f - c.label.x;
			aE(c, c.targetTextWidth - p * i, !0), c.label.x = f;
		}
	}
	function d(e) {
		for (var a = {
			list: [],
			maxY: 0
		}, o = {
			list: [],
			maxY: 0
		}, s = 0; s < e.length; s++) if (e[s].labelAlignTo === "none") {
			var c = e[s], l = c.label.y > n ? o : a, d = Math.abs(c.label.y - n);
			if (d >= l.maxY) {
				var f = c.label.x - t - c.len2 * i, p = r + c.len;
				l.rB = Math.abs(f) < p ? Math.sqrt(d * d / (1 - f * f / p / p)) : p, l.maxY = d;
			}
			l.list.push(c);
		}
		u(a), u(o);
	}
	for (var f = e.length, p = 0; p < f; p++) if (e[p].position === "outer" && e[p].labelAlignTo === "labelLine") {
		var m = e[p].label.x - l;
		e[p].linePoints[1][0] += m, e[p].label.x = l;
	}
	iC(e, 1, c, c + o) && d(e);
}
function iE(e, t, n, r, i, a, o, s) {
	for (var c = [], l = [], u = Number.MAX_VALUE, d = -Number.MAX_VALUE, f = 0; f < e.length; f++) {
		var p = e[f].label;
		lE(e[f]) || (p.x < t ? (u = Math.min(u, p.x), c.push(e[f])) : (d = Math.max(d, p.x), l.push(e[f])));
	}
	for (var f = 0; f < e.length; f++) {
		var m = e[f];
		if (!lE(m) && m.linePoints) {
			if (m.labelStyleWidth != null) continue;
			var p = m.label, h = m.linePoints, g = void 0;
			g = m.labelAlignTo === "edge" ? p.x < t ? h[2][0] - m.labelDistance - o - m.edgeDistance : o + i - m.edgeDistance - h[2][0] - m.labelDistance : m.labelAlignTo === "labelLine" ? p.x < t ? u - o - m.bleedMargin : o + i - d - m.bleedMargin : p.x < t ? p.x - o - m.bleedMargin : o + i - p.x - m.bleedMargin, m.targetTextWidth = g, aE(m, g, !1);
		}
	}
	rE(l, t, n, r, 1, i, a, o, s, d), rE(c, t, n, r, -1, i, a, o, s, u);
	for (var f = 0; f < e.length; f++) {
		var m = e[f];
		if (!lE(m) && m.linePoints) {
			var p = m.label, h = m.linePoints, _ = m.labelAlignTo === "edge", v = p.style.padding, y = v ? v[1] + v[3] : 0, b = p.style.backgroundColor ? 0 : y, x = m.rect.width + b, S = h[1][0] - h[2][0];
			_ ? p.x < t ? h[2][0] = o + m.edgeDistance + x + m.labelDistance : h[2][0] = o + i - m.edgeDistance - x - m.labelDistance : (p.x < t ? h[2][0] = p.x + m.labelDistance : h[2][0] = p.x - m.labelDistance, h[1][0] = h[2][0] + S), h[1][1] = h[2][1] = p.y;
		}
	}
}
function aE(e, t, n) {
	if (e.labelStyleWidth == null) {
		var r = e.label, i = r.style, a = e.rect, o = i.backgroundColor, s = i.padding, c = s ? s[1] + s[3] : 0, l = i.overflow, u = a.width + (o ? 0 : c);
		if (t < u || n) {
			if (l && l.match("break")) {
				r.setStyle("backgroundColor", null), r.setStyle("width", t - c);
				var d = r.getBoundingRect();
				r.setStyle("width", Math.ceil(d.width)), r.setStyle("backgroundColor", o);
			} else {
				var f = t - c, p = t < u ? f : n ? f > e.unconstrainedWidth ? null : f : null;
				r.setStyle("width", p);
			}
			oE(a, r);
		}
	}
}
function oE(e, t) {
	cE.rect = e, QS(cE, t, sE);
}
var sE = {
	minMarginForce: [
		null,
		0,
		null,
		0
	],
	marginDefault: [
		1,
		0,
		1,
		0
	]
}, cE = {};
function lE(e) {
	return e.position === "center";
}
function uE(e) {
	var t = e.getData(), n = [], r, i, a = !1, o = (e.get("minShowLabelAngle") || 0) * nE, s = t.getLayout("viewRect"), c = t.getLayout("r"), l = s.width, u = s.x, d = s.y, f = s.height;
	function p(e) {
		e.ignore = !0;
	}
	function m(e) {
		if (!e.ignore) return !0;
		for (var t in e.states) if (e.states[t].ignore === !1) return !0;
		return !1;
	}
	t.each(function(e) {
		var s = t.getItemGraphicEl(e), d = s.shape, h = s.getTextContent(), g = s.getTextGuideLine(), _ = t.getItemModel(e), v = _.getModel("label"), y = v.get("position") || _.get([
			"emphasis",
			"label",
			"position"
		]), b = v.get("distanceToLabelLine"), x = v.get("alignTo"), S = Hs(v.get("edgeDistance"), l), C = v.get("bleedMargin");
		C ??= Math.min(l, f) > 200 ? 10 : 2;
		var w = _.getModel("labelLine"), T = w.get("length");
		T = Hs(T, l);
		var E = w.get("length2");
		if (E = Hs(E, l), Math.abs(d.endAngle - d.startAngle) < o) {
			I(h.states, p), h.ignore = !0, g && (I(g.states, p), g.ignore = !0);
			return;
		}
		if (m(h)) {
			var D = (d.startAngle + d.endAngle) / 2, O = Math.cos(D), k = Math.sin(D), A, ee, te, ne;
			r = d.cx, i = d.cy;
			var j = y === "inside" || y === "inner";
			if (y === "center") A = d.cx, ee = d.cy, ne = "center";
			else {
				var M = (j ? (d.r + d.r0) / 2 * O : d.r * O) + r, re = (j ? (d.r + d.r0) / 2 * k : d.r * k) + i;
				if (A = M + O * 3, ee = re + k * 3, !j) {
					var N = M + O * (T + c - d.r), ie = re + k * (T + c - d.r), P = N + (O < 0 ? -1 : 1) * E, ae = ie;
					A = x === "edge" ? O < 0 ? u + S : u + l - S : P + (O < 0 ? -b : b), ee = ae, te = [
						[M, re],
						[N, ie],
						[P, ae]
					];
				}
				ne = j ? "center" : x === "edge" ? O > 0 ? "right" : "left" : O > 0 ? "left" : "right";
			}
			var F = Math.PI, oe = 0, se = v.get("rotate");
			if (me(se)) oe = F / 180 * se;
			else if (y === "center") oe = 0;
			else if (se === "radial" || se === !0) oe = O < 0 ? -D + F : -D;
			else if (se === "tangential" || se === "tangential-noflip" && y !== "outside" && y !== "outer") {
				var ce = Math.atan2(O, k);
				ce < 0 && (ce = F * 2 + ce), k > 0 && se !== "tangential-noflip" && (ce = F + ce), oe = ce - F;
			}
			if (a = !!oe, h.x = A, h.y = ee, h.rotation = oe, h.setStyle({ verticalAlign: "middle" }), j) {
				h.setStyle({ align: ne });
				var L = h.states.select;
				L && (L.x += h.x, L.y += h.y);
			} else {
				var R = new X(0, 0, 0, 0);
				oE(R, h), n.push({
					label: h,
					labelLine: g,
					position: y,
					len: T,
					len2: E,
					minTurnAngle: w.get("minTurnAngle"),
					maxSurfaceAngle: w.get("maxSurfaceAngle"),
					surfaceNormal: new Y(O, k),
					linePoints: te,
					textAlign: ne,
					labelDistance: b,
					labelAlignTo: x,
					edgeDistance: S,
					bleedMargin: C,
					rect: R,
					unconstrainedWidth: R.width,
					labelStyleWidth: h.style.width
				});
			}
			s.setTextConfig({ inside: j });
		}
	}), !a && e.get("avoidLabelOverlap") && iE(n, r, i, c, l, f, u, d);
	for (var h = 0; h < n.length; h++) {
		var g = n[h], _ = g.label, v = g.labelLine, y = isNaN(_.x) || isNaN(_.y);
		if (_) {
			_.setStyle({ align: g.textAlign }), y && (I(_.states, p), _.ignore = !0);
			var b = _.states.select;
			b && (b.x += _.x, b.y += _.y);
		}
		if (v) {
			var x = g.linePoints;
			y || !x ? (I(v.states, p), v.ignore = !0) : (XT(x, g.minTurnAngle), ZT(x, g.surfaceNormal, g.maxSurfaceAngle), v.setShape({ points: x }), _.__hostTarget.textGuideLineConfig = { anchor: new Y(x[0][0], x[0][1]) });
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/pieLayout.js
var dE = Math.PI * 2, fE = Math.PI / 180, pE = Cl("pie", mE);
function mE(e, t) {
	e.eachSeriesByType("pie", function(e) {
		var n = e.getData(), r = n.mapDimension("value"), i = I_(e, t), a = i.cx, o = i.cy, s = i.r, c = i.r0, l = i.viewRect, u = -e.get("startAngle") * fE, d = e.get("endAngle"), f = e.get("padAngle") * fE;
		d = d === "auto" ? u - dE : -d * fE;
		var p = e.get("minAngle") * fE + f, m = 0;
		n.each(r, function(e) {
			!isNaN(e) && m++;
		});
		var h = n.getSum(r), g = Math.PI / (h || m) * 2, _ = e.get("clockwise"), v = e.get("roseType"), y = e.get("stillShowZeroSum"), b = n.getDataExtent(r);
		b[0] = 0;
		var x = _ ? 1 : -1, S = [u, d], C = x * f / 2;
		So(S, !_), u = S[0], d = S[1];
		var w = hE(e);
		w.startAngle = u, w.endAngle = d, w.clockwise = _, w.cx = a, w.cy = o, w.r = s, w.r0 = c;
		var T = Math.abs(d - u), E = T, D = 0, O = u;
		if (n.setLayout({
			viewRect: l,
			r: s
		}), n.each(r, function(e, t) {
			var r;
			if (isNaN(e)) {
				n.setItemLayout(t, {
					angle: NaN,
					startAngle: NaN,
					endAngle: NaN,
					clockwise: _,
					cx: a,
					cy: o,
					r0: c,
					r: v ? NaN : s
				});
				return;
			}
			r = v === "area" ? T / m : h === 0 && y ? g : e * g, r < p ? (r = p, E -= p) : D += e;
			var i = O + x * r, l = 0, u = 0;
			f > r ? (l = O + x * r / 2, u = l) : (l = O + C, u = i - C), n.setItemLayout(t, {
				angle: r,
				startAngle: l,
				endAngle: u,
				clockwise: _,
				cx: a,
				cy: o,
				r0: c,
				r: v ? Vs(e, b, [c, s]) : s
			}), O = i;
		}), E < dE && m) {
			if (E <= .001) {
				var k = T / m;
				n.each(r, function(e, t) {
					if (!isNaN(e)) {
						var r = n.getItemLayout(t);
						r.angle = k;
						var i = 0, a = 0;
						k < f ? (i = u + x * (t + 1 / 2) * k, a = i) : (i = u + x * t * k + C, a = u + x * (t + 1) * k - C), r.startAngle = i, r.endAngle = a;
					}
				});
			} else g = E / D, O = u, n.each(r, function(e, t) {
				if (!isNaN(e)) {
					var r = n.getItemLayout(t), i = r.angle === p ? p : e * g, a = 0, o = 0;
					i < f ? (a = O + x * i / 2, o = a) : (a = O + C, o = O + x * i - C), r.startAngle = a, r.endAngle = o, O += x * i;
				}
			});
		}
	});
}
var hE = Yc(), gE = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.z2 = 2;
		var a = new ps();
		return i.setTextContent(a), i.updateData(t, n, r, !0), i;
	}
	return t.prototype.updateData = function(e, t, n, r) {
		var i = this, a = e.hostModel, o = e.getItemModel(t), s = o.getModel("emphasis"), c = e.getItemLayout(t), l = N(Zw(o.getModel("itemStyle"), c, !0), c);
		if (isNaN(l.startAngle)) {
			i.setShape(l);
			return;
		}
		if (r) {
			i.setShape(l);
			var u = a.getShallow("animationType");
			a.ecModel.ssr ? (bf(i, {
				scaleX: 0,
				scaleY: 0
			}, a, {
				dataIndex: t,
				isFrom: !0
			}), i.originX = l.cx, i.originY = l.cy) : u === "scale" ? (i.shape.r = c.r0, bf(i, { shape: { r: c.r } }, a, t)) : n == null ? (i.shape.endAngle = c.startAngle, yf(i, { shape: { endAngle: c.endAngle } }, a, t)) : (i.setShape({
				startAngle: n,
				endAngle: n
			}), bf(i, { shape: {
				startAngle: c.startAngle,
				endAngle: c.endAngle
			} }, a, t));
		} else Tf(i), yf(i, { shape: l }, a, t);
		i.useStyle(e.getItemVisual(t, "style")), zu(i, o);
		var d = (c.startAngle + c.endAngle) / 2, f = a.get("selectedOffset"), p = Math.cos(d) * f, m = Math.sin(d) * f, h = o.getShallow("cursor");
		h && i.attr("cursor", h), this._updateLabel(a, e, t), i.ensureState("emphasis").shape = N({ r: c.r + (s.get("scale") && s.get("scaleSize") || 0) }, Zw(s.getModel("itemStyle"), c)), N(i.ensureState("select"), {
			x: p,
			y: m,
			shape: Zw(o.getModel(["select", "itemStyle"]), c)
		}), N(i.ensureState("blur"), { shape: Zw(o.getModel(["blur", "itemStyle"]), c) });
		var g = i.getTextGuideLine(), _ = i.getTextContent();
		g && N(g.ensureState("select"), {
			x: p,
			y: m
		}), N(_.ensureState("select"), {
			x: p,
			y: m
		}), Fu(this, s.get("focus"), s.get("blurScope"), s.get("disabled"));
	}, t.prototype._updateLabel = function(e, t, n) {
		var r = this, i = t.getItemModel(n), a = i.getModel("labelLine"), o = t.getItemVisual(n, "style"), s = o && o.fill, c = o && o.opacity;
		Cp(r, wp(i), {
			labelFetcher: t.hostModel,
			labelDataIndex: n,
			inheritColor: s,
			defaultOpacity: c,
			defaultText: e.getFormattedLabel(n, "normal") || t.getName(n)
		});
		var l = r.getTextContent();
		r.setTextConfig({
			position: null,
			rotation: null
		}), l.attr({ z2: 10 });
		var u = i.get(["label", "position"]);
		if (u !== "outside" && u !== "outer") r.removeTextGuideLine();
		else {
			var d = this.getTextGuideLine();
			d || (d = new Wd(), this.setTextGuideLine(d)), eE(this, tE(i), {
				stroke: s,
				opacity: Ce(a.get(["lineStyle", "opacity"]), c, 1)
			});
		}
	}, t;
}(Id), _E = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "pie", t.ignoreLabelLineUpdate = !0, t;
	}
	return t.prototype.render = function(e, t, n, r) {
		var i = e.getData(), a = this._data, o = this.group, s;
		if (!a && i.count() > 0) {
			for (var c = i.getItemLayout(0), l = 1; isNaN(c && c.startAngle) && l < i.count(); ++l) c = i.getItemLayout(l);
			c && (s = c.startAngle);
		}
		if (this._emptyCircleSector && o.remove(this._emptyCircleSector), i.count() === 0 && e.get("showEmptyCircle")) {
			var u = new Id({ shape: j(hE(e)) });
			u.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = u, o.add(u);
		}
		i.diff(a).add(function(e) {
			var t = new gE(i, e, s);
			i.setItemGraphicEl(e, t), o.add(t);
		}).update(function(e, t) {
			var n = a.getItemGraphicEl(t);
			n.updateData(i, e, s), n.off("click"), o.add(n), i.setItemGraphicEl(e, n);
		}).remove(function(t) {
			wf(a.getItemGraphicEl(t), e, t);
		}).execute(), uE(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = i);
	}, t.prototype.dispose = function() {}, t.prototype.containPoint = function(e, t) {
		var n = t.getData().getItemLayout(0);
		if (n) {
			var r = e[0] - n.cx, i = e[1] - n.cy, a = Math.sqrt(r * r + i * i);
			return a <= n.r && a >= n.r0;
		}
	}, t.type = "pie", t;
}(Uy);
//#endregion
//#region node_modules/echarts/lib/processor/negativeDataFilter.js
function vE(e) {
	return {
		seriesType: e,
		reset: function(e, t) {
			var n = e.getData();
			n.filterSelf(function(e) {
				var t = n.mapDimension("value"), r = n.get(t, e);
				return !(me(r) && !isNaN(r) && r < 0);
			});
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/install.js
function yE(e) {
	e.registerChartView(_E), e.registerSeriesModel(jT), wT("pie", e.registerAction), e.registerLayout(pE), e.registerProcessor(DT("pie")), e.registerProcessor(vE("pie"));
}
//#endregion
//#region node_modules/zrender/lib/mixin/Draggable.js
var bE = function() {
	function e(e, t) {
		this.target = e, this.topTarget = t && t.topTarget;
	}
	return e;
}(), xE = function() {
	function e(e) {
		this.handler = e, e.on("mousedown", this._dragStart, this), e.on("mousemove", this._drag, this), e.on("mouseup", this._dragEnd, this);
	}
	return e.prototype._dragStart = function(e) {
		for (var t = e.target; t && !t.draggable;) t = t.parent || t.__hostTarget;
		t && (this._draggingTarget = t, t.dragging = !0, this._x = e.offsetX, this._y = e.offsetY, this.handler.dispatchToElement(new bE(t, e), "dragstart", e.event));
	}, e.prototype._drag = function(e) {
		var t = this._draggingTarget;
		if (t) {
			var n = e.offsetX, r = e.offsetY, i = n - this._x, a = r - this._y;
			this._x = n, this._y = r, t.drift(i, a, e), this.handler.dispatchToElement(new bE(t, e), "drag", e.event);
			var o = this.handler.findHover(n, r, t).target, s = this._dropTarget;
			this._dropTarget = o, t !== o && (s && o !== s && this.handler.dispatchToElement(new bE(s, e), "dragleave", e.event), o && o !== s && this.handler.dispatchToElement(new bE(o, e), "dragenter", e.event));
		}
	}, e.prototype._dragEnd = function(e) {
		var t = this._draggingTarget;
		t && (t.dragging = !1), this.handler.dispatchToElement(new bE(t, e), "dragend", e.event), this._dropTarget && this.handler.dispatchToElement(new bE(this._dropTarget, e), "drop", e.event), this._draggingTarget = null, this._dropTarget = null;
	}, e;
}(), SE = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, CE = [], wE = J.browser.firefox && +J.browser.version.split(".")[0] < 39;
function TE(e, t, n, r) {
	return n ||= {}, r ? EE(e, t, n) : wE && t.layerX != null && t.layerX !== t.offsetX ? (n.zrX = t.layerX, n.zrY = t.layerY) : t.offsetX == null ? EE(e, t, n) : (n.zrX = t.offsetX, n.zrY = t.offsetY), n;
}
function EE(e, t, n) {
	if (J.domSupported && e.getBoundingClientRect) {
		var r = t.clientX, i = t.clientY;
		if (pg(e)) {
			var a = e.getBoundingClientRect();
			n.zrX = r - a.left, n.zrY = i - a.top;
			return;
		}
		if (ug(CE, e, r, i)) {
			n.zrX = CE[0], n.zrY = CE[1];
			return;
		}
	}
	n.zrX = n.zrY = 0;
}
function DE(e) {
	return e || window.event;
}
function OE(e, t, n) {
	if (t = DE(t), t.zrX != null) return t;
	var r = t.type;
	if (r && r.indexOf("touch") >= 0) {
		var i = r === "touchend" ? t.changedTouches[0] : t.targetTouches[0];
		i && TE(e, i, t, n);
	} else {
		TE(e, t, t, n);
		var a = kE(t);
		t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
	}
	var o = t.button;
	return t.which == null && o !== void 0 && SE.test(t.type) && (t.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), t;
}
function kE(e) {
	var t = e.wheelDelta;
	if (t) return t;
	var n = e.deltaX, r = e.deltaY;
	if (n == null || r == null) return t;
	var i = Math.abs(r === 0 ? n : r), a = r > 0 ? -1 : r < 0 ? 1 : n > 0 ? -1 : 1;
	return 3 * i * a;
}
function AE(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function jE(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ME = function(e) {
	e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0;
};
function NE(e) {
	return e.which === 2 || e.which === 3;
}
//#endregion
//#region node_modules/zrender/lib/core/GestureMgr.js
var PE = function() {
	function e() {
		this._track = [];
	}
	return e.prototype.recognize = function(e, t, n) {
		return this._doTrack(e, t, n), this._recognize(e);
	}, e.prototype.clear = function() {
		return this._track.length = 0, this;
	}, e.prototype._doTrack = function(e, t, n) {
		var r = e.touches;
		if (r) {
			for (var i = {
				points: [],
				touches: [],
				target: t,
				event: e
			}, a = 0, o = r.length; a < o; a++) {
				var s = r[a], c = TE(n, s, {});
				i.points.push([c.zrX, c.zrY]), i.touches.push(s);
			}
			this._track.push(i);
		}
	}, e.prototype._recognize = function(e) {
		for (var t in LE) if (LE.hasOwnProperty(t)) {
			var n = LE[t](this._track, e);
			if (n) return n;
		}
	}, e;
}();
function FE(e) {
	var t = e[1][0] - e[0][0], n = e[1][1] - e[0][1];
	return Math.sqrt(t * t + n * n);
}
function IE(e) {
	return [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2];
}
var LE = { pinch: function(e, t) {
	var n = e.length;
	if (n) {
		var r = (e[n - 1] || {}).points, i = (e[n - 2] || {}).points || r;
		if (i && i.length > 1 && r && r.length > 1) {
			var a = FE(r) / FE(i);
			!isFinite(a) && (a = 1), t.pinchScale = a;
			var o = IE(r);
			return t.pinchX = o[0], t.pinchY = o[1], {
				type: "pinch",
				target: e[0].target,
				event: t
			};
		}
	}
} }, RE = "silent";
function zE(e, t, n) {
	return {
		type: e,
		event: n,
		target: t.target,
		topTarget: t.topTarget,
		cancelBubble: !1,
		offsetX: n.zrX,
		offsetY: n.zrY,
		gestureEvent: n.gestureEvent,
		pinchX: n.pinchX,
		pinchY: n.pinchY,
		pinchScale: n.pinchScale,
		wheelDelta: n.zrDelta,
		zrByTouch: n.zrByTouch,
		which: n.which,
		stop: BE
	};
}
function BE() {
	ME(this.event);
}
var VE = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.handler = null, t;
	}
	return t.prototype.dispose = function() {}, t.prototype.setCursor = function() {}, t;
}(da), HE = function() {
	function e(e, t) {
		this.x = e, this.y = t;
	}
	return e;
}(), UE = [
	"click",
	"dblclick",
	"mousewheel",
	"mouseout",
	"mouseup",
	"mousedown",
	"mousemove",
	"contextmenu"
], WE = new X(0, 0, 0, 0), GE = function(e) {
	l(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this) || this;
		return o._hovered = new HE(0, 0), o.storage = t, o.painter = n, o.painterRoot = i, o._pointerSize = a, r ||= new VE(), o.proxy = null, o.setHandlerProxy(r), o._draggingMgr = new xE(o), o;
	}
	return t.prototype.setHandlerProxy = function(e) {
		this.proxy && this.proxy.dispose(), e && (I(UE, function(t) {
			e.on && e.on(t, this[t], this);
		}, this), e.handler = this), this.proxy = e;
	}, t.prototype.mousemove = function(e) {
		var t = e.zrX, n = e.zrY, r = JE(this, t, n), i = this._hovered, a = i.target;
		a && !a.__zr && (i = this.findHover(i.x, i.y), a = i.target);
		var o = this._hovered = r ? new HE(t, n) : this.findHover(t, n), s = o.target, c = this.proxy;
		c.setCursor && c.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(i, "mouseout", e), this.dispatchToElement(o, "mousemove", e), s && s !== a && this.dispatchToElement(o, "mouseover", e);
	}, t.prototype.mouseout = function(e) {
		var t = e.zrEventControl;
		t !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), t !== "no_globalout" && this.trigger("globalout", {
			type: "globalout",
			event: e
		});
	}, t.prototype.resize = function() {
		this._hovered = new HE(0, 0);
	}, t.prototype.dispatch = function(e, t) {
		var n = this[e];
		n && n.call(this, t);
	}, t.prototype.dispose = function() {
		this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
	}, t.prototype.setCursorStyle = function(e) {
		var t = this.proxy;
		t.setCursor && t.setCursor(e);
	}, t.prototype.dispatchToElement = function(e, t, n) {
		e ||= {};
		var r = e.target;
		if (!(r && r.silent)) {
			for (var i = "on" + t, a = zE(t, e, n); r && (r[i] && (a.cancelBubble = !!r[i].call(r, a)), r.trigger(t, a), r = r.__hostTarget ? r.__hostTarget : r.parent, !a.cancelBubble););
			a.cancelBubble || (this.trigger(t, a), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(e) {
				typeof e[i] == "function" && e[i].call(e, a), e.trigger && e.trigger(t, a);
			}));
		}
	}, t.prototype.findHover = function(e, t, n) {
		var r = this.storage.getDisplayList(), i = new HE(e, t);
		if (qE(r, i, e, t, n), this._pointerSize && !i.target) {
			for (var a = [], o = this._pointerSize, s = o / 2, c = new X(e - s, t - s, o, o), l = r.length - 1; l >= 0; l--) {
				var u = r[l];
				u !== n && !u.ignore && !u.ignoreCoarsePointer && (!u.parent || !u.parent.ignoreCoarsePointer) && (WE.copy(u.getBoundingRect()), u.transform && WE.applyTransform(u.transform), WE.intersect(c) && a.push(u));
			}
			if (a.length) {
				for (var d = 4, f = Math.PI / 12, p = Math.PI * 2, m = 0; m < s; m += d) for (var h = 0; h < p; h += f) if (qE(a, i, e + m * Math.cos(h), t + m * Math.sin(h), n), i.target) return i;
			}
		}
		return i;
	}, t.prototype.processGesture = function(e, t) {
		this._gestureMgr ||= new PE();
		var n = this._gestureMgr;
		t === "start" && n.clear();
		var r = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
		if (t === "end" && n.clear(), r) {
			var i = r.type;
			e.gestureEvent = i;
			var a = new HE();
			a.target = r.target, this.dispatchToElement(a, i, r.event);
		}
	}, t;
}(da);
I([
	"click",
	"mousedown",
	"mouseup",
	"mousewheel",
	"dblclick",
	"contextmenu"
], function(e) {
	GE.prototype[e] = function(t) {
		var n = t.zrX, r = t.zrY, i = JE(this, n, r), a, o;
		if ((e !== "mouseup" || !i) && (a = this.findHover(n, r), o = a.target), e === "mousedown") this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
		else if (e === "mouseup") this._upEl = o;
		else if (e === "click") {
			if (this._downEl !== this._upEl || !this._downPoint || Ht(this._downPoint, [t.zrX, t.zrY]) > 4) return;
			this._downPoint = null;
		}
		this.dispatchToElement(a, e, t);
	};
});
function KE(e, t, n) {
	if (e[e.rectHover ? "rectContain" : "contain"](t, n)) {
		for (var r = e, i = void 0, a = !1; r;) {
			if (r.ignoreClip && (a = !0), !a) {
				var o = r.getClipPath();
				if (o && !o.contain(t, n)) return !1;
			}
			r.silent && (i = !0);
			var s = r.__hostTarget;
			r = s ? r.ignoreHostSilent ? null : s : r.parent;
		}
		return !i || RE;
	}
	return !1;
}
function qE(e, t, n, r, i) {
	for (var a = e.length - 1; a >= 0; a--) {
		var o = e[a], s = void 0;
		if (o !== i && !o.ignore && (s = KE(o, n, r)) && (!t.topTarget && (t.topTarget = o), s !== RE)) {
			t.target = o;
			break;
		}
	}
}
function JE(e, t, n) {
	var r = e.painter;
	return t < 0 || t > r.getWidth() || n < 0 || n > r.getHeight();
}
//#endregion
//#region node_modules/zrender/lib/core/timsort.js
var YE = 32, XE = 7;
function ZE(e) {
	for (var t = 0; e >= YE;) t |= e & 1, e >>= 1;
	return e + t;
}
function QE(e, t, n, r) {
	var i = t + 1;
	if (i === n) return 1;
	if (r(e[i++], e[t]) < 0) {
		for (; i < n && r(e[i], e[i - 1]) < 0;) i++;
		$E(e, t, i);
	} else for (; i < n && r(e[i], e[i - 1]) >= 0;) i++;
	return i - t;
}
function $E(e, t, n) {
	for (n--; t < n;) {
		var r = e[t];
		e[t++] = e[n], e[n--] = r;
	}
}
function eD(e, t, n, r, i) {
	for (r === t && r++; r < n; r++) {
		for (var a = e[r], o = t, s = r, c; o < s;) c = o + s >>> 1, i(a, e[c]) < 0 ? s = c : o = c + 1;
		var l = r - o;
		switch (l) {
			case 3: e[o + 3] = e[o + 2];
			case 2: e[o + 2] = e[o + 1];
			case 1:
				e[o + 1] = e[o];
				break;
			default: for (; l > 0;) e[o + l] = e[o + l - 1], l--;
		}
		e[o] = a;
	}
}
function tD(e, t, n, r, i, a) {
	var o = 0, s = 0, c = 1;
	if (a(e, t[n + i]) > 0) {
		for (s = r - i; c < s && a(e, t[n + i + c]) > 0;) o = c, c = (c << 1) + 1, c <= 0 && (c = s);
		c > s && (c = s), o += i, c += i;
	} else {
		for (s = i + 1; c < s && a(e, t[n + i - c]) <= 0;) o = c, c = (c << 1) + 1, c <= 0 && (c = s);
		c > s && (c = s);
		var l = o;
		o = i - c, c = i - l;
	}
	for (o++; o < c;) {
		var u = o + (c - o >>> 1);
		a(e, t[n + u]) > 0 ? o = u + 1 : c = u;
	}
	return c;
}
function nD(e, t, n, r, i, a) {
	var o = 0, s = 0, c = 1;
	if (a(e, t[n + i]) < 0) {
		for (s = i + 1; c < s && a(e, t[n + i - c]) < 0;) o = c, c = (c << 1) + 1, c <= 0 && (c = s);
		c > s && (c = s);
		var l = o;
		o = i - c, c = i - l;
	} else {
		for (s = r - i; c < s && a(e, t[n + i + c]) >= 0;) o = c, c = (c << 1) + 1, c <= 0 && (c = s);
		c > s && (c = s), o += i, c += i;
	}
	for (o++; o < c;) {
		var u = o + (c - o >>> 1);
		a(e, t[n + u]) < 0 ? c = u : o = u + 1;
	}
	return c;
}
function rD(e, t) {
	var n = XE, r, i, a = 0, o = [];
	r = [], i = [];
	function s(e, t) {
		r[a] = e, i[a] = t, a += 1;
	}
	function c() {
		for (; a > 1;) {
			var e = a - 2;
			if (e >= 1 && i[e - 1] <= i[e] + i[e + 1] || e >= 2 && i[e - 2] <= i[e] + i[e - 1]) i[e - 1] < i[e + 1] && e--;
			else if (i[e] > i[e + 1]) break;
			u(e);
		}
	}
	function l() {
		for (; a > 1;) {
			var e = a - 2;
			e > 0 && i[e - 1] < i[e + 1] && e--, u(e);
		}
	}
	function u(n) {
		var o = r[n], s = i[n], c = r[n + 1], l = i[n + 1];
		i[n] = s + l, n === a - 3 && (r[n + 1] = r[n + 2], i[n + 1] = i[n + 2]), a--;
		var u = nD(e[c], e, o, s, 0, t);
		o += u, s -= u, s !== 0 && (l = tD(e[o + s - 1], e, c, l, l - 1, t), l !== 0 && (s <= l ? d(o, s, c, l) : f(o, s, c, l)));
	}
	function d(r, i, a, s) {
		var c = 0;
		for (c = 0; c < i; c++) o[c] = e[r + c];
		var l = 0, u = a, d = r;
		if (e[d++] = e[u++], --s === 0) {
			for (c = 0; c < i; c++) e[d + c] = o[l + c];
			return;
		}
		if (i === 1) {
			for (c = 0; c < s; c++) e[d + c] = e[u + c];
			e[d + s] = o[l];
			return;
		}
		for (var f = n, p, m, h;;) {
			p = 0, m = 0, h = !1;
			do
				if (t(e[u], o[l]) < 0) {
					if (e[d++] = e[u++], m++, p = 0, --s === 0) {
						h = !0;
						break;
					}
				} else if (e[d++] = o[l++], p++, m = 0, --i === 1) {
					h = !0;
					break;
				}
			while ((p | m) < f);
			if (h) break;
			do {
				if (p = nD(e[u], o, l, i, 0, t), p !== 0) {
					for (c = 0; c < p; c++) e[d + c] = o[l + c];
					if (d += p, l += p, i -= p, i <= 1) {
						h = !0;
						break;
					}
				}
				if (e[d++] = e[u++], --s === 0) {
					h = !0;
					break;
				}
				if (m = tD(o[l], e, u, s, 0, t), m !== 0) {
					for (c = 0; c < m; c++) e[d + c] = e[u + c];
					if (d += m, u += m, s -= m, s === 0) {
						h = !0;
						break;
					}
				}
				if (e[d++] = o[l++], --i === 1) {
					h = !0;
					break;
				}
				f--;
			} while (p >= XE || m >= XE);
			if (h) break;
			f < 0 && (f = 0), f += 2;
		}
		if (n = f, n < 1 && (n = 1), i === 1) {
			for (c = 0; c < s; c++) e[d + c] = e[u + c];
			e[d + s] = o[l];
		} else if (i === 0) throw Error();
		else for (c = 0; c < i; c++) e[d + c] = o[l + c];
	}
	function f(r, i, a, s) {
		var c = 0;
		for (c = 0; c < s; c++) o[c] = e[a + c];
		var l = r + i - 1, u = s - 1, d = a + s - 1, f = 0, p = 0;
		if (e[d--] = e[l--], --i === 0) {
			for (f = d - (s - 1), c = 0; c < s; c++) e[f + c] = o[c];
			return;
		}
		if (s === 1) {
			for (d -= i, l -= i, p = d + 1, f = l + 1, c = i - 1; c >= 0; c--) e[p + c] = e[f + c];
			e[d] = o[u];
			return;
		}
		for (var m = n;;) {
			var h = 0, g = 0, _ = !1;
			do
				if (t(o[u], e[l]) < 0) {
					if (e[d--] = e[l--], h++, g = 0, --i === 0) {
						_ = !0;
						break;
					}
				} else if (e[d--] = o[u--], g++, h = 0, --s === 1) {
					_ = !0;
					break;
				}
			while ((h | g) < m);
			if (_) break;
			do {
				if (h = i - nD(o[u], e, r, i, i - 1, t), h !== 0) {
					for (d -= h, l -= h, i -= h, p = d + 1, f = l + 1, c = h - 1; c >= 0; c--) e[p + c] = e[f + c];
					if (i === 0) {
						_ = !0;
						break;
					}
				}
				if (e[d--] = o[u--], --s === 1) {
					_ = !0;
					break;
				}
				if (g = s - tD(e[l], o, 0, s, s - 1, t), g !== 0) {
					for (d -= g, u -= g, s -= g, p = d + 1, f = u + 1, c = 0; c < g; c++) e[p + c] = o[f + c];
					if (s <= 1) {
						_ = !0;
						break;
					}
				}
				if (e[d--] = e[l--], --i === 0) {
					_ = !0;
					break;
				}
				m--;
			} while (h >= XE || g >= XE);
			if (_) break;
			m < 0 && (m = 0), m += 2;
		}
		if (n = m, n < 1 && (n = 1), s === 1) {
			for (d -= i, l -= i, p = d + 1, f = l + 1, c = i - 1; c >= 0; c--) e[p + c] = e[f + c];
			e[d] = o[u];
		} else if (s === 0) throw Error();
		else for (f = d - (s - 1), c = 0; c < s; c++) e[f + c] = o[c];
	}
	return {
		mergeRuns: c,
		forceMergeRuns: l,
		pushRun: s
	};
}
function iD(e, t, n, r) {
	n ||= 0, r ||= e.length;
	var i = r - n;
	if (!(i < 2)) {
		var a = 0;
		if (i < YE) {
			a = QE(e, n, r, t), eD(e, n, r, n + a, t);
			return;
		}
		var o = rD(e, t), s = ZE(i);
		do {
			if (a = QE(e, n, r, t), a < s) {
				var c = i;
				c > s && (c = s), eD(e, n, n + c, n + a, t), a = c;
			}
			o.pushRun(n, a), o.mergeRuns(), i -= a, n += a;
		} while (i !== 0);
		o.forceMergeRuns();
	}
}
//#endregion
//#region node_modules/zrender/lib/Storage.js
var aD = !1;
function oD() {
	aD || (aD = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function sD(e, t) {
	return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel;
}
var cD = function() {
	function e() {
		this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = sD;
	}
	return e.prototype.traverse = function(e, t) {
		for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(e, t);
	}, e.prototype.getDisplayList = function(e, t) {
		t ||= !1;
		var n = this._displayList;
		return (e || !n.length) && this.updateDisplayList(t), n;
	}, e.prototype.updateDisplayList = function(e) {
		this._displayListLen = 0;
		for (var t = this._roots, n = this._displayList, r = 0, i = t.length; r < i; r++) this._updateAndAddDisplayable(t[r], null, e);
		n.length = this._displayListLen, iD(n, sD);
	}, e.prototype._updateAndAddDisplayable = function(e, t, n) {
		if (!e.ignore || n) {
			e.beforeUpdate(), e.update(), e.afterUpdate();
			var r = e.getClipPath(), i = t && t.length, a = 0, o = e.__clipPaths;
			if (!e.ignoreClip && (i || r)) {
				if (o ||= e.__clipPaths = [], i) for (var s = 0; s < t.length; s++) o[a++] = t[s];
				for (var c = r, l = e; c;) c.parent = l, c.updateTransform(), o[a++] = c, l = c, c = c.getClipPath();
			}
			if (o && (o.length = a), e.childrenRef) {
				for (var u = e.childrenRef(), d = 0; d < u.length; d++) {
					var f = u[d];
					e.__dirty && (f.__dirty |= 1), this._updateAndAddDisplayable(f, o, n);
				}
				e.__dirty = 0;
			} else {
				var p = e;
				isNaN(p.z) && (oD(), p.z = 0), isNaN(p.z2) && (oD(), p.z2 = 0), isNaN(p.zlevel) && (oD(), p.zlevel = 0), this._displayList[this._displayListLen++] = p;
			}
			var m = e.getDecalElement && e.getDecalElement();
			m && this._updateAndAddDisplayable(m, o, n);
			var h = e.getTextGuideLine();
			h && this._updateAndAddDisplayable(h, o, n);
			var g = e.getTextContent();
			g && this._updateAndAddDisplayable(g, o, n);
		}
	}, e.prototype.addRoot = function(e) {
		e.__zr && e.__zr.storage === this || this._roots.push(e);
	}, e.prototype.delRoot = function(e) {
		if (e instanceof Array) {
			for (var t = 0, n = e.length; t < n; t++) this.delRoot(e[t]);
			return;
		}
		var r = F(this._roots, e);
		r >= 0 && this._roots.splice(r, 1);
	}, e.prototype.delAllRoots = function() {
		this._roots = [], this._displayList = [], this._displayListLen = 0;
	}, e.prototype.getRoots = function() {
		return this._roots;
	}, e.prototype.dispose = function() {
		this._displayList = null, this._roots = null;
	}, e;
}(), lD = J.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(e) {
	return setTimeout(e, 16);
};
//#endregion
//#region node_modules/zrender/lib/animation/Animation.js
function uD() {
	return (/* @__PURE__ */ new Date()).getTime();
}
var dD = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, t ||= {}, n.stage = t.stage || {}, n;
	}
	return t.prototype.addClip = function(e) {
		e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
	}, t.prototype.addAnimator = function(e) {
		e.animation = this;
		var t = e.getClip();
		t && this.addClip(t);
	}, t.prototype.removeClip = function(e) {
		if (e.animation) {
			var t = e.prev, n = e.next;
			t ? t.next = n : this._head = n, n ? n.prev = t : this._tail = t, e.next = e.prev = e.animation = null;
		}
	}, t.prototype.removeAnimator = function(e) {
		var t = e.getClip();
		t && this.removeClip(t), e.animation = null;
	}, t.prototype.update = function(e) {
		for (var t = uD() - this._pausedTime, n = t - this._time, r = this._head; r;) {
			var i = r.next;
			r.step(t, n) ? (r.ondestroy(), this.removeClip(r), r = i) : r = i;
		}
		this._time = t, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
	}, t.prototype._startLoop = function() {
		var e = this;
		this._running = !0;
		function t() {
			e._running && (lD(t), !e._paused && e.update());
		}
		lD(t);
	}, t.prototype.start = function() {
		this._running || (this._time = uD(), this._pausedTime = 0, this._startLoop());
	}, t.prototype.stop = function() {
		this._running = !1;
	}, t.prototype.pause = function() {
		this._paused ||= (this._pauseStart = uD(), !0);
	}, t.prototype.resume = function() {
		this._paused &&= (this._pausedTime += uD() - this._pauseStart, !1);
	}, t.prototype.clear = function() {
		for (var e = this._head; e;) {
			var t = e.next;
			e.prev = e.next = e.animation = null, e = t;
		}
		this._head = this._tail = null;
	}, t.prototype.isFinished = function() {
		return this._head == null;
	}, t.prototype.animate = function(e, t) {
		t ||= {}, this.start();
		var n = new ua(e, t.loop);
		return this.addAnimator(n), n;
	}, t;
}(da), fD = 300, pD = J.domSupported, mD = (function() {
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
	], n = {
		pointerdown: 1,
		pointerup: 1,
		pointermove: 1,
		pointerout: 1
	};
	return {
		mouse: e,
		touch: t,
		pointer: L(e, function(e) {
			var t = e.replace("mouse", "pointer");
			return n.hasOwnProperty(t) ? t : e;
		})
	};
})(), hD = {
	mouse: ["mousemove", "mouseup"],
	pointer: ["pointermove", "pointerup"]
}, gD = !1;
function _D(e) {
	var t = e.pointerType;
	return t === "pen" || t === "touch";
}
function vD(e) {
	e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function() {
		e.touching = !1, e.touchTimer = null;
	}, 700);
}
function yD(e) {
	e && (e.zrByTouch = !0);
}
function bD(e, t) {
	return OE(e.dom, new SD(e, t), !0);
}
function xD(e, t) {
	for (var n = t, r = !1; n && n.nodeType !== 9 && !(r = n.domBelongToZr || n !== t && n === e.painterRoot);) n = n.parentNode;
	return r;
}
var SD = function() {
	function e(e, t) {
		this.stopPropagation = Re, this.stopImmediatePropagation = Re, this.preventDefault = Re, this.type = t.type, this.target = this.currentTarget = e.dom, this.pointerType = t.pointerType, this.clientX = t.clientX, this.clientY = t.clientY;
	}
	return e;
}(), CD = {
	mousedown: function(e) {
		e = OE(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e);
	},
	mousemove: function(e) {
		e = OE(this.dom, e);
		var t = this.__mayPointerCapture;
		t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e);
	},
	mouseup: function(e) {
		e = OE(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e);
	},
	mouseout: function(e) {
		e = OE(this.dom, e);
		var t = e.toElement || e.relatedTarget;
		xD(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e));
	},
	wheel: function(e) {
		gD = !0, e = OE(this.dom, e), this.trigger("mousewheel", e);
	},
	mousewheel: function(e) {
		gD || (e = OE(this.dom, e), this.trigger("mousewheel", e));
	},
	touchstart: function(e) {
		e = OE(this.dom, e), yD(e), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(e, "start"), CD.mousemove.call(this, e), CD.mousedown.call(this, e);
	},
	touchmove: function(e) {
		e = OE(this.dom, e), yD(e), this.handler.processGesture(e, "change"), CD.mousemove.call(this, e);
	},
	touchend: function(e) {
		e = OE(this.dom, e), yD(e), this.handler.processGesture(e, "end"), CD.mouseup.call(this, e), +/* @__PURE__ */ new Date() - this.__lastTouchMoment < fD && CD.click.call(this, e);
	},
	pointerdown: function(e) {
		CD.mousedown.call(this, e);
	},
	pointermove: function(e) {
		_D(e) || CD.mousemove.call(this, e);
	},
	pointerup: function(e) {
		CD.mouseup.call(this, e);
	},
	pointerout: function(e) {
		_D(e) || CD.mouseout.call(this, e);
	}
};
I([
	"click",
	"dblclick",
	"contextmenu"
], function(e) {
	CD[e] = function(t) {
		t = OE(this.dom, t), this.trigger(e, t);
	};
});
var wD = {
	pointermove: function(e) {
		_D(e) || wD.mousemove.call(this, e);
	},
	pointerup: function(e) {
		wD.mouseup.call(this, e);
	},
	mousemove: function(e) {
		this.trigger("mousemove", e);
	},
	mouseup: function(e) {
		var t = this.__pointerCapturing;
		this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e));
	}
};
function TD(e, t) {
	var n = t.domHandlers;
	J.pointerEventsSupported ? I(mD.pointer, function(r) {
		DD(t, r, function(t) {
			n[r].call(e, t);
		});
	}) : (J.touchEventsSupported && I(mD.touch, function(r) {
		DD(t, r, function(i) {
			n[r].call(e, i), vD(t);
		});
	}), I(mD.mouse, function(r) {
		DD(t, r, function(i) {
			i = DE(i), t.touching || n[r].call(e, i);
		});
	}));
}
function ED(e, t) {
	J.pointerEventsSupported ? I(hD.pointer, n) : J.touchEventsSupported || I(hD.mouse, n);
	function n(n) {
		function r(r) {
			r = DE(r), xD(e, r.target) || (r = bD(e, r), t.domHandlers[n].call(e, r));
		}
		DD(t, n, r, { capture: !0 });
	}
}
function DD(e, t, n, r) {
	e.mounted[t] = n, e.listenerOpts[t] = r, AE(e.domTarget, t, n, r);
}
function OD(e) {
	var t = e.mounted;
	for (var n in t) t.hasOwnProperty(n) && jE(e.domTarget, n, t[n], e.listenerOpts[n]);
	e.mounted = {};
}
var kD = function() {
	function e(e, t) {
		this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = e, this.domHandlers = t;
	}
	return e;
}(), AD = function(e) {
	l(t, e);
	function t(t, n) {
		var r = e.call(this) || this;
		return r.__pointerCapturing = !1, r.dom = t, r.painterRoot = n, r._localHandlerScope = new kD(t, CD), pD && (r._globalHandlerScope = new kD(document, wD)), TD(r, r._localHandlerScope), r;
	}
	return t.prototype.dispose = function() {
		OD(this._localHandlerScope), pD && OD(this._globalHandlerScope);
	}, t.prototype.setCursor = function(e) {
		this.dom.style && (this.dom.style.cursor = e || "default");
	}, t.prototype.__togglePointerCapture = function(e) {
		if (this.__mayPointerCapture = null, pD && +this.__pointerCapturing ^ e) {
			this.__pointerCapturing = e;
			var t = this._globalHandlerScope;
			e ? ED(this, t) : OD(t);
		}
	}, t;
}(da), jD = /* @__PURE__ */ s({
	dispose: () => RD,
	disposeAll: () => zD,
	getElementSSRData: () => UD,
	getInstance: () => BD,
	init: () => LD,
	registerPainter: () => VD,
	registerSSRDataGetter: () => WD,
	version: () => GD
}), MD = {}, ND = {};
function PD(e) {
	delete ND[e];
}
function FD(e) {
	if (!e) return !1;
	if (typeof e == "string") return _i(e, 1) < ma;
	if (e.colorStops) {
		for (var t = e.colorStops, n = 0, r = t.length, i = 0; i < r; i++) n += _i(t[i].color, 1);
		return n /= r, n < ma;
	}
	return !1;
}
var ID = function() {
	function e(e, t, n) {
		var r = this;
		this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n ||= {}, this.dom = t, this.id = e;
		var i = new cD(), a = n.renderer || "canvas";
		MD[a] || (a = z(MD)[0]), n.useDirtyRect = n.useDirtyRect != null && n.useDirtyRect;
		var o = new MD[a](t, i, n, e), s = n.ssr || o.ssrOnly;
		this.storage = i, this.painter = o;
		var c = !J.node && !J.worker && !s ? new AD(o.getViewportRoot(), o.root) : null, l = n.useCoarsePointer, u = l == null || l === "auto" ? J.touchEventsSupported : !!l, d = 44, f;
		u && (f = G(n.pointerSize, d)), this.handler = new GE(i, o, c, o.root, f), this.animation = new dD({ stage: { update: s ? null : function() {
			return r._flush(!1);
		} } }), s || this.animation.start();
	}
	return e.prototype.add = function(e) {
		!this._disposed && e && (this.storage.addRoot(e), e.addSelfToZr(this), this.refresh());
	}, e.prototype.remove = function(e) {
		!this._disposed && e && (this.storage.delRoot(e), e.removeSelfFromZr(this), this.refresh());
	}, e.prototype.configLayer = function(e, t) {
		this._disposed || (this.painter.configLayer && this.painter.configLayer(e, t), this.refresh());
	}, e.prototype.setBackgroundColor = function(e) {
		this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(e), this.refresh(), this._backgroundColor = e, this._darkMode = FD(e));
	}, e.prototype.getBackgroundColor = function() {
		return this._backgroundColor;
	}, e.prototype.setDarkMode = function(e) {
		this._darkMode = e;
	}, e.prototype.isDarkMode = function() {
		return this._darkMode;
	}, e.prototype.refreshImmediately = function(e) {
		this._disposed || this._refresh({
			animUpdate: !e,
			refresh: !0,
			refreshHover: !1
		});
	}, e.prototype._refresh = function(e) {
		e.animUpdate && this.animation.update(!0), this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh({
			refresh: e.refresh,
			refreshHover: e.refreshHover
		}), this._needsRefresh = this._needsRefreshHover = !1;
	}, e.prototype.refresh = function() {
		this._disposed || (this._needsRefresh = !0, this.animation.start());
	}, e.prototype.flush = function() {
		this._disposed || this._flush(!0);
	}, e.prototype._flush = function(e) {
		var t, n = uD(), r = this._needsRefresh, i = this._needsRefreshHover;
		(r || i) && (t = !0, this._refresh({
			animUpdate: e,
			refresh: r,
			refreshHover: i
		}));
		var a = uD();
		t ? (this._stillFrameAccum = 0, this.trigger("rendered", { elapsedTime: a - n })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
	}, e.prototype.setSleepAfterStill = function(e) {
		this._sleepAfterStill = e;
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
	}, e.prototype.resize = function(e) {
		this._disposed || (e ||= {}, this.painter.resize(e.width, e.height), this.handler.resize());
	}, e.prototype.clearAnimation = function() {
		this._disposed || this.animation.clear();
	}, e.prototype.getWidth = function() {
		if (!this._disposed) return this.painter.getWidth();
	}, e.prototype.getHeight = function() {
		if (!this._disposed) return this.painter.getHeight();
	}, e.prototype.setCursorStyle = function(e) {
		this._disposed || this.handler.setCursorStyle(e);
	}, e.prototype.findHover = function(e, t) {
		if (!this._disposed) return this.handler.findHover(e, t);
	}, e.prototype.on = function(e, t, n) {
		return this._disposed || this.handler.on(e, t, n), this;
	}, e.prototype.off = function(e, t) {
		this._disposed || this.handler.off(e, t);
	}, e.prototype.trigger = function(e, t) {
		this._disposed || this.handler.trigger(e, t);
	}, e.prototype.clear = function() {
		if (!this._disposed) {
			for (var e = this.storage.getRoots(), t = 0; t < e.length; t++) e[t] instanceof hd && e[t].removeSelfFromZr(this);
			this.storage.delAllRoots(), this.painter.clear();
		}
	}, e.prototype.dispose = function() {
		this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, PD(this.id));
	}, e;
}();
function LD(e, t) {
	var n = new ID(te(), e, t);
	return ND[n.id] = n, n;
}
function RD(e) {
	e.dispose();
}
function zD() {
	for (var e in ND) ND.hasOwnProperty(e) && ND[e].dispose();
	ND = {};
}
function BD(e) {
	return ND[e];
}
function VD(e, t) {
	MD[e] = t;
}
var HD;
function UD(e) {
	if (typeof HD == "function") return HD(e);
}
function WD(e) {
	HD = e;
}
var GD = "6.1.0", KD = "";
typeof navigator < "u" && (KD = navigator.platform || "");
var qD = "rgba(0, 0, 0, 0.2)", JD = Q.color.theme[0], YD = mi(JD, null, null, .9), XD = {
	darkMode: "auto",
	colorBy: "series",
	color: Q.color.theme,
	gradientColor: [YD, JD],
	aria: { decal: { decals: [
		{
			color: qD,
			dashArrayX: [1, 0],
			dashArrayY: [2, 5],
			symbolSize: 1,
			rotation: Math.PI / 6
		},
		{
			color: qD,
			symbol: "circle",
			dashArrayX: [[8, 8], [
				0,
				8,
				8,
				0
			]],
			dashArrayY: [6, 0],
			symbolSize: .8
		},
		{
			color: qD,
			dashArrayX: [1, 0],
			dashArrayY: [4, 3],
			rotation: -Math.PI / 4
		},
		{
			color: qD,
			dashArrayX: [[6, 6], [
				0,
				6,
				6,
				0
			]],
			dashArrayY: [6, 0]
		},
		{
			color: qD,
			dashArrayX: [[1, 0], [1, 6]],
			dashArrayY: [
				1,
				0,
				6,
				0
			],
			rotation: Math.PI / 4
		},
		{
			color: qD,
			symbol: "triangle",
			dashArrayX: [[9, 9], [
				0,
				9,
				9,
				0
			]],
			dashArrayY: [7, 2],
			symbolSize: .75
		}
	] } },
	textStyle: {
		fontFamily: KD.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal"
	},
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
	progressiveThreshold: 3e3,
	progressive: 400,
	hoverLayerThreshold: 3e3,
	useUTC: !1
}, ZD = K();
function QD(e, t, n) {
	var r = ZD.get(t);
	if (!r) return n;
	var i = r(e);
	return i ? n.concat(i) : n;
}
//#endregion
//#region node_modules/echarts/lib/model/Global.js
var $D, eO, tO, nO = "\0_ec_inner", rO = 1, iO = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.init = function(e, t, n, r, i, a) {
		r ||= {}, this.option = null, this._theme = new Jp(r), this._locale = new Jp(i), this._optionManager = a;
	}, t.prototype.setOption = function(e, t, n) {
		var r = lO(t);
		this._optionManager.setOption(e, n, r), this._resetOption(null, r);
	}, t.prototype.resetOption = function(e, t) {
		return this._resetOption(e, lO(t));
	}, t.prototype._resetOption = function(e, t) {
		var n = !1, r = this._optionManager;
		if (!e || e === "recreate") {
			var i = r.mountOption(e === "recreate");
			!this.option || e === "recreate" ? tO(this, i) : (this.restoreData(), this._mergeOption(i, t)), n = !0;
		}
		if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
			var a = r.getTimelineOption(this);
			a && (n = !0, this._mergeOption(a, t));
		}
		if (!e || e === "recreate" || e === "media") {
			var o = r.getMediaOption(this);
			o.length && I(o, function(e) {
				n = !0, this._mergeOption(e, t);
			}, this);
		}
		return n;
	}, t.prototype.mergeOption = function(e) {
		this._mergeOption(e, null);
	}, t.prototype._mergeOption = function(e, t) {
		var n = this.option, r = this._componentsMap, i = this._componentsCount, a = [], o = K(), s = t && t.replaceMergeMainTypeMap;
		em(this), I(e, function(e, t) {
			e != null && (q_.hasClass(t) ? t && (a.push(t), o.set(t, !0)) : n[t] = n[t] == null ? j(e) : M(n[t], e, !0));
		}), s && s.each(function(e, t) {
			q_.hasClass(t) && !o.get(t) && (a.push(t), o.set(t, !0));
		}), q_.topologicalTravel(a, q_.getAllClassMainTypes(), c, this);
		function c(t) {
			var a = QD(this, t, Oc(e[t])), o = r.get(t), c = Nc(o, a, o ? s && s.get(t) ? "replaceMerge" : "normalMerge" : "replaceAll");
			Gc(c, t, q_), n[t] = null, r.set(t, null), i.set(t, 0);
			var l = [], u = [], d = 0, f;
			I(c, function(e, n) {
				var r = e.existing, i = e.newOption;
				if (!i) r && (r.mergeOption({}, this), r.optionUpdated({}, !1));
				else {
					var a = t === "series", o = q_.getClass(t, e.keyInfo.subType, !a);
					if (!o) return;
					if (t === "tooltip") {
						if (f) return;
						f = !0;
					}
					if (r && r.constructor === o) r.name = e.keyInfo.name, r.mergeOption(i, this), r.optionUpdated(i, !1);
					else {
						var s = N({ componentIndex: n }, e.keyInfo);
						r = new o(i, this, this, s), N(r, s), e.brandNew && (r.__requireNewView = !0), r.init(i, this, this), r.optionUpdated(null, !0);
					}
				}
				r ? (l.push(r.option), u.push(r), d++) : (l.push(void 0), u.push(void 0));
			}, this), n[t] = l, r.set(t, u), i.set(t, d), t === "series" && $D(this);
		}
		this._seriesIndices || $D(this);
	}, t.prototype.getOption = function() {
		var e = j(this.option);
		return I(e, function(t, n) {
			if (q_.hasClass(n)) {
				for (var r = Oc(t), i = r.length, a = !1, o = i - 1; o >= 0; o--) r[o] && !Wc(r[o]) ? a = !0 : (r[o] = null, !a && i--);
				r.length = i, e[n] = r;
			}
		}), delete e[nO], e;
	}, t.prototype.setTheme = function(e) {
		this._theme = new Jp(e), this._resetOption("recreate", null);
	}, t.prototype.getTheme = function() {
		return this._theme;
	}, t.prototype.getLocaleModel = function() {
		return this._locale;
	}, t.prototype.setUpdatePayload = function(e) {
		this._payload = e;
	}, t.prototype.getUpdatePayload = function() {
		return this._payload;
	}, t.prototype.getComponent = function(e, t) {
		var n = this._componentsMap.get(e);
		if (n) {
			var r = n[t || 0];
			if (r) return r;
			if (t == null) {
				for (var i = 0; i < n.length; i++) if (n[i]) return n[i];
			}
		}
	}, t.prototype.queryComponents = function(e) {
		var t = e.mainType;
		if (!t) return [];
		var n = e.index, r = e.id, i = e.name, a = this._componentsMap.get(t);
		if (!a || !a.length) return [];
		var o;
		return n == null ? o = r == null ? i == null ? le(a, function(e) {
			return !!e;
		}) : sO("name", i, a) : sO("id", r, a) : (o = [], I(Oc(n), function(e) {
			a[e] && o.push(a[e]);
		})), cO(o, e);
	}, t.prototype.findComponents = function(e) {
		var t = e.query, n = e.mainType, r = i(t);
		return a(cO(r ? this.queryComponents(r) : le(this._componentsMap.get(n), function(e) {
			return !!e;
		}), e));
		function i(e) {
			var t = n + "Index", r = n + "Id", i = n + "Name";
			return e && (e[t] != null || e[r] != null || e[i] != null) ? {
				mainType: n,
				index: e[t],
				id: e[r],
				name: e[i]
			} : null;
		}
		function a(t) {
			return e.filter ? le(t, e.filter) : t;
		}
	}, t.prototype.eachComponent = function(e, t, n) {
		var r = this._componentsMap;
		if (H(e)) {
			var i = t, a = e;
			r.each(function(e, t) {
				for (var n = 0; e && n < e.length; n++) {
					var r = e[n];
					r && a.call(i, t, r, r.componentIndex);
				}
			});
		} else for (var o = U(e) ? r.get(e) : W(e) ? this.findComponents(e) : null, s = 0; o && s < o.length; s++) {
			var c = o[s];
			c && t.call(n, c, c.componentIndex);
		}
	}, t.prototype.getSeriesByName = function(e) {
		var t = Hc(e, null);
		return le(this._componentsMap.get("series"), function(e) {
			return !!e && t != null && e.name === t;
		});
	}, t.prototype.getSeriesByIndex = function(e) {
		return this._componentsMap.get("series")[e];
	}, t.prototype.getSeriesByType = function(e) {
		return le(this._componentsMap.get("series"), function(t) {
			return !!t && t.subType === e;
		});
	}, t.prototype.getSeries = function() {
		return le(this._componentsMap.get("series"), function(e) {
			return !!e;
		});
	}, t.prototype.getSeriesCount = function() {
		return this._componentsCount.get("series");
	}, t.prototype.eachSeries = function(e, t) {
		eO(this), I(this._seriesIndices, function(n) {
			var r = this._componentsMap.get("series")[n];
			e.call(t, r, n);
		}, this);
	}, t.prototype.eachRawSeries = function(e, t) {
		I(this._componentsMap.get("series"), function(n) {
			n && e.call(t, n, n.componentIndex);
		});
	}, t.prototype.eachSeriesByType = function(e, t, n) {
		eO(this), I(this._seriesIndices, function(r) {
			var i = this._componentsMap.get("series")[r];
			i.subType === e && t.call(n, i, r);
		}, this);
	}, t.prototype.eachRawSeriesByType = function(e, t, n) {
		return I(this.getSeriesByType(e), t, n);
	}, t.prototype.isSeriesFiltered = function(e) {
		return eO(this), this._seriesIndicesMap.get(e.componentIndex) == null;
	}, t.prototype.getCurrentSeriesIndices = function() {
		return (this._seriesIndices || []).slice();
	}, t.prototype.filterSeries = function(e, t) {
		eO(this);
		var n = [];
		I(this._seriesIndices, function(r) {
			var i = this._componentsMap.get("series")[r];
			e.call(t, i, r) && n.push(r);
		}, this), this._seriesIndices = n, this._seriesIndicesMap = K(n);
	}, t.prototype.restoreData = function(e) {
		$D(this);
		var t = this._componentsMap, n = [];
		t.each(function(e, t) {
			q_.hasClass(t) && n.push(t);
		}), q_.topologicalTravel(n, q_.getAllClassMainTypes(), function(n) {
			I(t.get(n), function(t) {
				t && (n !== "series" || !aO(t, e)) && t.restoreData();
			});
		});
	}, t.internalField = function() {
		$D = function(e) {
			var t = e._seriesIndices = [];
			I(e._componentsMap.get("series"), function(e) {
				e && t.push(e.componentIndex);
			}), e._seriesIndicesMap = K(t);
		}, eO = function(e) {}, tO = function(e, t) {
			e.option = {}, e.option[nO] = rO, e._componentsMap = K({ series: [] }), e._componentsCount = K();
			var n = t.aria;
			W(n) && n.enabled == null && (n.enabled = !0), oO(t, e._theme.option), M(t, XD, !1), e._mergeOption(t, null);
		};
	}(), t;
}(Jp);
function aO(e, t) {
	if (t) {
		var n = t.seriesIndex, r = t.seriesId, i = t.seriesName;
		return n != null && e.componentIndex !== n || r != null && e.id !== r || i != null && e.name !== i;
	}
}
function oO(e, t) {
	var n = e.color && !e.colorLayer;
	I(t, function(t, r) {
		r === "colorLayer" && n || r === "color" && e.color || q_.hasClass(r) || (typeof t == "object" ? e[r] = e[r] ? M(e[r], t, !1) : j(t) : e[r] ?? (e[r] = t));
	});
}
function sO(e, t, n) {
	if (V(t)) {
		var r = K();
		return I(t, function(e) {
			e != null && Hc(e, null) != null && r.set(e, !0);
		}), le(n, function(t) {
			return t && r.get(t[e]);
		});
	}
	var i = Hc(t, null);
	return le(n, function(t) {
		return t && i != null && t[e] === i;
	});
}
function cO(e, t) {
	return t.hasOwnProperty("subType") ? le(e, function(e) {
		return e && e.subType === t.subType;
	}) : e;
}
function lO(e) {
	var t = K();
	return e && I(Oc(e.replaceMerge), function(e) {
		t.set(e, !0);
	}), { replaceMergeMainTypeMap: t };
}
se(iO, X_);
//#endregion
//#region node_modules/echarts/lib/model/OptionManager.js
var uO = /^(min|max)?(.+)$/, dO = function() {
	function e(e) {
		this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = e;
	}
	return e.prototype.setOption = function(e, t, n) {
		e && (I(Oc(e.series), function(e) {
			e && e.data && ge(e.data) && ke(e.data);
		}), I(Oc(e.dataset), function(e) {
			e && e.source && ge(e.source) && ke(e.source);
		})), e = j(e);
		var r = this._optionBackup, i = fO(e, t, !r);
		this._newBaseOption = i.baseOption, r ? (i.timelineOptions.length && (r.timelineOptions = i.timelineOptions), i.mediaList.length && (r.mediaList = i.mediaList), i.mediaDefault && (r.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
	}, e.prototype.mountOption = function(e) {
		var t = this._optionBackup;
		return this._timelineOptions = t.timelineOptions, this._mediaList = t.mediaList, this._mediaDefault = t.mediaDefault, this._currentMediaIndices = [], j(e ? t.baseOption : this._newBaseOption);
	}, e.prototype.getTimelineOption = function(e) {
		var t, n = this._timelineOptions;
		if (n.length) {
			var r = e.getComponent("timeline");
			r && (t = j(n[r.getCurrentIndex()]));
		}
		return t;
	}, e.prototype.getMediaOption = function(e) {
		var t = this._api.getWidth(), n = this._api.getHeight(), r = this._mediaList, i = this._mediaDefault, a = [], o = [];
		if (!r.length && !i) return o;
		for (var s = 0, c = r.length; s < c; s++) pO(r[s].query, t, n) && a.push(s);
		return !a.length && i && (a = [-1]), a.length && !hO(a, this._currentMediaIndices) && (o = L(a, function(e) {
			return j(e === -1 ? i.option : r[e].option);
		})), this._currentMediaIndices = a, o;
	}, e;
}();
function fO(e, t, n) {
	var r = [], i, a, o = e.baseOption, s = e.timeline, c = e.options, l = e.media, u = !!e.media, d = !!(c || s || o && o.timeline);
	o ? (a = o, a.timeline || (a.timeline = s)) : ((d || u) && (e.options = e.media = null), a = e), u && V(l) && I(l, function(e) {
		e && e.option && (e.query ? r.push(e) : i ||= e);
	}), f(a), I(c, function(e) {
		return f(e);
	}), I(r, function(e) {
		return f(e.option);
	});
	function f(e) {
		I(t, function(t) {
			t(e, n);
		});
	}
	return {
		baseOption: a,
		timelineOptions: c || [],
		mediaDefault: i,
		mediaList: r
	};
}
function pO(e, t, n) {
	var r = {
		width: t,
		height: n,
		aspectratio: t / n
	}, i = !0;
	return I(e, function(e, t) {
		var n = t.match(uO);
		if (n && n[1] && n[2]) {
			var a = n[1];
			mO(r[n[2].toLowerCase()], e, a) || (i = !1);
		}
	}), i;
}
function mO(e, t, n) {
	return n === "min" ? e >= t : n === "max" ? e <= t : e === t;
}
function hO(e, t) {
	return e.join(",") === t.join(",");
}
//#endregion
//#region node_modules/echarts/lib/preprocessor/helper/compatStyle.js
var gO = I, _O = W, vO = [
	"areaStyle",
	"lineStyle",
	"nodeStyle",
	"linkStyle",
	"chordStyle",
	"label",
	"labelLine"
];
function yO(e) {
	var t = e && e.itemStyle;
	if (t) for (var n = 0, r = vO.length; n < r; n++) {
		var i = vO[n], a = t.normal, o = t.emphasis;
		a && a[i] && (e[i] = e[i] || {}, e[i].normal ? M(e[i].normal, a[i]) : e[i].normal = a[i], a[i] = null), o && o[i] && (e[i] = e[i] || {}, e[i].emphasis ? M(e[i].emphasis, o[i]) : e[i].emphasis = o[i], o[i] = null);
	}
}
function bO(e, t, n) {
	if (e && e[t] && (e[t].normal || e[t].emphasis)) {
		var r = e[t].normal, i = e[t].emphasis;
		r && (n ? (e[t].normal = e[t].emphasis = null, P(e[t], r)) : e[t] = r), i && (e.emphasis = e.emphasis || {}, e.emphasis[t] = i, i.focus && (e.emphasis.focus = i.focus), i.blurScope && (e.emphasis.blurScope = i.blurScope));
	}
}
function xO(e) {
	bO(e, "itemStyle"), bO(e, "lineStyle"), bO(e, "areaStyle"), bO(e, "label"), bO(e, "labelLine"), bO(e, "upperLabel"), bO(e, "edgeLabel");
}
function SO(e, t) {
	var n = _O(e) && e[t], r = _O(n) && n.textStyle;
	if (r) for (var i = 0, a = Ac.length; i < a; i++) {
		var o = Ac[i];
		r.hasOwnProperty(o) && (n[o] = r[o]);
	}
}
function CO(e) {
	e && (xO(e), SO(e, "label"), e.emphasis && SO(e.emphasis, "label"));
}
function wO(e) {
	if (_O(e)) {
		yO(e), xO(e), SO(e, "label"), SO(e, "upperLabel"), SO(e, "edgeLabel"), e.emphasis && (SO(e.emphasis, "label"), SO(e.emphasis, "upperLabel"), SO(e.emphasis, "edgeLabel"));
		var t = e.markPoint;
		t && (yO(t), CO(t));
		var n = e.markLine;
		n && (yO(n), CO(n));
		var r = e.markArea;
		r && CO(r);
		var i = e.data;
		if (e.type === "graph") {
			i ||= e.nodes;
			var a = e.links || e.edges;
			if (a && !ge(a)) for (var o = 0; o < a.length; o++) CO(a[o]);
			I(e.categories, function(e) {
				xO(e);
			});
		}
		if (i && !ge(i)) for (var o = 0; o < i.length; o++) CO(i[o]);
		if (t = e.markPoint, t && t.data) for (var s = t.data, o = 0; o < s.length; o++) CO(s[o]);
		if (n = e.markLine, n && n.data) for (var c = n.data, o = 0; o < c.length; o++) V(c[o]) ? (CO(c[o][0]), CO(c[o][1])) : CO(c[o]);
		e.type === "gauge" ? (SO(e, "axisLabel"), SO(e, "title"), SO(e, "detail")) : e.type === "treemap" ? (bO(e.breadcrumb, "itemStyle"), I(e.levels, function(e) {
			xO(e);
		})) : e.type === "tree" && xO(e.leaves);
	}
}
function TO(e) {
	return V(e) ? e : e ? [e] : [];
}
function EO(e) {
	return (V(e) ? e[0] : e) || {};
}
function DO(e, t) {
	gO(TO(e.series), function(e) {
		_O(e) && wO(e);
	});
	var n = [
		"xAxis",
		"yAxis",
		"radiusAxis",
		"angleAxis",
		"singleAxis",
		"parallelAxis",
		"radar"
	];
	t && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), gO(n, function(t) {
		gO(TO(e[t]), function(e) {
			e && (SO(e, "axisLabel"), SO(e.axisPointer, "label"));
		});
	}), gO(TO(e.parallel), function(e) {
		var t = e && e.parallelAxisDefault;
		SO(t, "axisLabel"), SO(t && t.axisPointer, "label");
	}), gO(TO(e.calendar), function(e) {
		bO(e, "itemStyle"), SO(e, "dayLabel"), SO(e, "monthLabel"), SO(e, "yearLabel");
	}), gO(TO(e.radar), function(e) {
		SO(e, "name"), e.name && e.axisName == null && (e.axisName = e.name, delete e.name), e.nameGap != null && e.axisNameGap == null && (e.axisNameGap = e.nameGap, delete e.nameGap);
	}), gO(TO(e.geo), function(e) {
		_O(e) && (CO(e), gO(TO(e.regions), function(e) {
			CO(e);
		}));
	}), gO(TO(e.timeline), function(e) {
		CO(e), bO(e, "label"), bO(e, "itemStyle"), bO(e, "controlStyle", !0);
		var t = e.data;
		V(t) && I(t, function(e) {
			W(e) && (bO(e, "label"), bO(e, "itemStyle"));
		});
	}), gO(TO(e.toolbox), function(e) {
		bO(e, "iconStyle"), gO(e.feature, function(e) {
			bO(e, "iconStyle");
		});
	}), SO(EO(e.axisPointer), "label"), SO(EO(e.tooltip).axisPointer, "label");
}
//#endregion
//#region node_modules/echarts/lib/preprocessor/backwardCompat.js
function OO(e, t) {
	for (var n = t.split(","), r = e, i = 0; i < n.length && (r &&= r[n[i]], r != null); i++);
	return r;
}
function kO(e, t, n, r) {
	for (var i = t.split(","), a = e, o, s = 0; s < i.length - 1; s++) o = i[s], a[o] ?? (a[o] = {}), a = a[o];
	(r || a[i[s]] == null) && (a[i[s]] = n);
}
function AO(e) {
	e && I(jO, function(t) {
		t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
	});
}
var jO = [
	["x", "left"],
	["y", "top"],
	["x2", "right"],
	["y2", "bottom"]
], MO = [
	"grid",
	"geo",
	"parallel",
	"legend",
	"toolbox",
	"title",
	"visualMap",
	"dataZoom",
	"timeline"
], NO = [
	["borderRadius", "barBorderRadius"],
	["borderColor", "barBorderColor"],
	["borderWidth", "barBorderWidth"]
];
function PO(e) {
	var t = e && e.itemStyle;
	if (t) for (var n = 0; n < NO.length; n++) {
		var r = NO[n][1], i = NO[n][0];
		t[r] != null && (t[i] = t[r]);
	}
}
function FO(e) {
	e && e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (e.edgeDistance = e.margin);
}
function IO(e) {
	e && e.downplay && !e.blur && (e.blur = e.downplay);
}
function LO(e) {
	e && e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus ?? (e.emphasis.focus = "adjacency"));
}
function RO(e, t) {
	if (e) for (var n = 0; n < e.length; n++) t(e[n]), e[n] && RO(e[n].children, t);
}
function zO(e, t) {
	DO(e, t), e.series = Oc(e.series), I(e.series, function(e) {
		if (W(e)) {
			var t = e.type;
			if (t === "line") e.clipOverflow != null && (e.clip = e.clipOverflow);
			else if (t === "pie" || t === "gauge") {
				e.clockWise != null && (e.clockwise = e.clockWise), FO(e.label);
				var n = e.data;
				if (n && !ge(n)) for (var r = 0; r < n.length; r++) FO(n[r]);
				e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (e.emphasis.scaleSize = e.hoverOffset));
			} else if (t === "gauge") {
				var i = OO(e, "pointer.color");
				i != null && kO(e, "itemStyle.color", i);
			} else if (t === "bar") {
				PO(e), PO(e.backgroundStyle), PO(e.emphasis);
				var n = e.data;
				if (n && !ge(n)) for (var r = 0; r < n.length; r++) typeof n[r] == "object" && (PO(n[r]), PO(n[r] && n[r].emphasis));
			} else if (t === "sunburst") {
				var a = e.highlightPolicy;
				a && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = a)), IO(e), RO(e.data, IO);
			} else t === "graph" || t === "sankey" ? LO(e) : t === "map" && (e.mapType && !e.map && (e.map = e.mapType), e.mapLocation && P(e, e.mapLocation));
			e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (e.emphasis.scale = e.hoverAnimation)), AO(e);
		}
	}), e.dataRange && (e.visualMap = e.dataRange), I(MO, function(t) {
		var n = e[t];
		n && (V(n) || (n = [n]), I(n, function(e) {
			AO(e);
		}));
	});
}
//#endregion
//#region node_modules/echarts/lib/processor/dataStack.js
var BO = wl(VO);
function VO(e) {
	var t = K();
	e.eachSeries(function(e) {
		var n = e.get("stack");
		if (n) {
			var r = t.get(n) || t.set(n, []), i = e.getData(), a = {
				stackResultDimension: i.getCalculationInfo("stackResultDimension"),
				stackedOverDimension: i.getCalculationInfo("stackedOverDimension"),
				stackedDimension: i.getCalculationInfo("stackedDimension"),
				stackedByDimension: i.getCalculationInfo("stackedByDimension"),
				isStackedByIndex: i.getCalculationInfo("isStackedByIndex"),
				data: i,
				seriesModel: e
			};
			if (!a.stackedDimension || !(a.isStackedByIndex || a.stackedByDimension)) return;
			r.push(a);
		}
	}), t.each(function(e) {
		e.length !== 0 && ((e[0].seriesModel.get("stackOrder") || "seriesAsc") === "seriesDesc" && e.reverse(), I(e, function(t, n) {
			t.data.setCalculationInfo("stackedOnSeries", n > 0 ? e[n - 1].seriesModel : null);
		}), HO(e));
	});
}
function HO(e) {
	I(e, function(t, n) {
		var r = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, c = t.seriesModel.get("stackStrategy") || "samesign";
		o.modify(a, function(a, l, u) {
			var d = o.get(t.stackedDimension, u);
			if (isNaN(d)) return i;
			var f, p;
			s ? p = o.getRawIndex(u) : f = o.get(t.stackedByDimension, u);
			for (var m = NaN, h = n - 1; h >= 0; h--) {
				var g = e[h];
				if (s || (p = g.data.rawIndexOf(g.stackedByDimension, f)), p >= 0) {
					var _ = g.data.getByRawIndex(g.stackResultDimension, p);
					if (c === "all" || c === "positive" && _ > 0 || c === "negative" && _ < 0 || c === "samesign" && d >= 0 && _ > 0 || c === "samesign" && d <= 0 && _ < 0) {
						d = nc(d, _), m = _;
						break;
					}
				}
			}
			return r[0] = d, r[1] = m, r;
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/view/Component.js
var UO = function() {
	function e() {
		this.group = new hd(), this.uid = $h("viewComponent");
	}
	return e.prototype.init = function(e, t) {}, e.prototype.render = function(e, t, n, r) {}, e.prototype.dispose = function(e, t) {}, e.prototype.updateView = function(e, t, n, r) {}, e.prototype.updateLayout = function(e, t, n, r) {}, e.prototype.updateVisual = function(e, t, n, r) {}, e.prototype.toggleBlurSeries = function(e, t, n) {}, e.prototype.eachRendered = function(e) {
		var t = this.group;
		t && t.traverse(e);
	}, e;
}();
Ye(UO), nt(UO);
//#endregion
//#region node_modules/echarts/lib/visual/style.js
var WO = Yc(), GO = {
	itemStyle: rt(Gp, !0),
	lineStyle: rt(Hp, !0)
}, KO = {
	lineStyle: "stroke",
	itemStyle: "fill"
};
function qO(e, t) {
	return e.visualStyleMapper || GO[t] || (console.warn("Unknown style type '" + t + "'."), GO.itemStyle);
}
function JO(e, t) {
	return e.visualDrawType || KO[t] || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var YO = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		var n = e.getData(), r = e.visualStyleAccessPath || "itemStyle", i = e.getModel(r), a = qO(e, r)(i), o = i.getShallow("decal");
		o && (n.setVisual("decal", o), o.dirty = !0);
		var s = JO(e, r), c = a[s], l = H(c) ? c : null, u = a.fill === "auto" || a.stroke === "auto";
		if (!a[s] || l || u) {
			var d = e.getColorFromPalette(e.name, null, t.getSeriesCount());
			a[s] || (a[s] = d, n.setVisual("colorFromPalette", !0)), a.fill = a.fill === "auto" || H(a.fill) ? d : a.fill, a.stroke = a.stroke === "auto" || H(a.stroke) ? d : a.stroke;
		}
		if (n.setVisual("style", a), n.setVisual("drawType", s), !t.isSeriesFiltered(e) && l) return n.setVisual("colorFromPalette", !1), { dataEach: function(t, n) {
			var r = e.getDataParams(n), i = N({}, a);
			i[s] = l(r), t.setItemVisual(n, "style", i);
		} };
	}
}, XO = new Jp(), ZO = {
	createOnAllSeries: !0,
	reset: function(e, t) {
		if (!e.ignoreStyleOnData) {
			var n = e.getData(), r = e.visualStyleAccessPath || "itemStyle", i = qO(e, r), a = n.getVisual("drawType");
			return { dataEach: n.hasItemOption ? function(e, t) {
				var n = e.getRawDataItem(t);
				if (n && n[r]) {
					XO.option = n[r];
					var o = i(XO);
					N(e.ensureUniqueItemVisual(t, "style"), o), XO.option.decal && (e.setItemVisual(t, "decal", XO.option.decal), XO.option.decal.dirty = !0), a in o && e.setItemVisual(t, "colorFromPalette", !1);
				}
			} : null };
		}
	}
}, QO = {
	performRawSeries: !0,
	overallReset: function(e) {
		var t = K();
		e.eachSeries(function(e) {
			if (!e.isColorBySeries()) {
				var n = e.type + "-" + e.getColorBy();
				WO(e).scope = t.get(n) || t.set(n, {});
			}
		}), e.eachSeries(function(e) {
			if (!e.isColorBySeries()) {
				var t = e.getRawData(), n = {}, r = e.getData(), i = WO(e).scope, a = JO(e, e.visualStyleAccessPath || "itemStyle");
				r.each(function(e) {
					var t = r.getRawIndex(e);
					n[t] = e;
				}), t.each(function(o) {
					var s = n[o];
					if (r.getItemVisual(s, "colorFromPalette")) {
						var c = r.ensureUniqueItemVisual(s, "style"), l = t.getName(o) || o + "", u = t.count();
						c[a] = e.getColorFromPalette(l, i, u);
					}
				});
			}
		});
	}
}, $O = Math.PI;
function ek(e, t) {
	t ||= {}, P(t, {
		text: "loading",
		textColor: Q.color.primary,
		fontSize: 12,
		fontWeight: "normal",
		fontStyle: "normal",
		fontFamily: "sans-serif",
		maskColor: "rgba(255,255,255,0.8)",
		showSpinner: !0,
		color: Q.color.theme[0],
		spinnerRadius: 10,
		lineWidth: 5,
		zlevel: 0
	});
	var n = new hd(), r = new cs({
		style: { fill: t.maskColor },
		zlevel: t.zlevel,
		z: 1e4
	});
	n.add(r);
	var i = new ps({
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
	}), a = new cs({
		style: { fill: "none" },
		textContent: i,
		textConfig: {
			position: "right",
			distance: 10
		},
		zlevel: t.zlevel,
		z: 10001
	});
	n.add(a);
	var o;
	return t.showSpinner && (o = new $d({
		shape: {
			startAngle: -$O / 2,
			endAngle: -$O / 2 + .1,
			r: t.spinnerRadius
		},
		style: {
			stroke: t.color,
			lineCap: "round",
			lineWidth: t.lineWidth
		},
		zlevel: t.zlevel,
		z: 10001
	}), o.animateShape(!0).when(1e3, { endAngle: $O * 3 / 2 }).start("circularInOut"), o.animateShape(!0).when(1e3, { startAngle: $O * 3 / 2 }).delay(300).start("circularInOut"), n.add(o)), n.resize = function() {
		var n = i.getBoundingRect().width, s = t.showSpinner ? t.spinnerRadius : 0, c = (e.getWidth() - s * 2 - (t.showSpinner && n ? 10 : 0) - n) / 2 - (t.showSpinner && n ? 0 : 5 + n / 2) + (t.showSpinner ? 0 : n / 2) + (n ? 0 : s), l = e.getHeight() / 2;
		t.showSpinner && o.setShape({
			cx: c,
			cy: l
		}), a.setShape({
			x: c - s,
			y: l - s,
			width: s * 2,
			height: s * 2
		}), r.setShape({
			x: 0,
			y: 0,
			width: e.getWidth(),
			height: e.getHeight()
		});
	}, n.resize(), n;
}
//#endregion
//#region node_modules/echarts/lib/core/Scheduler.js
var tk = function() {
	function e(e, t, n, r) {
		this._stageTaskMap = K(), this.ecInstance = e, this.api = t, n = this._dataProcessorHandlers = n.slice(), r = this._visualHandlers = r.slice(), this._allHandlers = n.concat(r);
	}
	return e.prototype.restoreData = function(e, t) {
		e.restoreData(t), this._stageTaskMap.each(function(e) {
			var t = e.overallTask;
			t && t.dirty();
		});
	}, e.prototype.getPerformArgs = function(e, t) {
		if (e.__pipeline) {
			var n = this._pipelineMap.get(e.__pipeline.id), r = n.context, i = !t && n.progressiveEnabled && (!r || r.progressiveRender) && e.__idxInPipeline > n.blockIndex ? n.step : null, a = r && r.modDataCount;
			return {
				step: i,
				modBy: a == null ? null : Math.ceil(a / i),
				modDataCount: a
			};
		}
	}, e.prototype.getPipeline = function(e) {
		return this._pipelineMap.get(e);
	}, e.prototype.updateStreamModes = function(e, t) {
		var n = this._pipelineMap.get(e.uid);
		e.pipelineContext = n.context = e.__preparePipelineContext ? e.__preparePipelineContext(t, n) : Sl(e, t, n);
	}, e.prototype.restorePipelines = function(e, t) {
		var n = this, r = n._pipelineMap = K();
		t.eachSeries(function(t) {
			var i = e.painter.type === "canvas" && t.getProgressive(), a = t.uid;
			r.set(a, {
				id: a,
				head: null,
				tail: null,
				threshold: t.getProgressiveThreshold(),
				progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
				blockIndex: -1,
				step: Math.round(i || 700),
				count: 0
			}), n._pipe(t, t.dataTask);
		});
	}, e.prototype.prepareStageTasks = function() {
		var e = this._stageTaskMap, t = this.api.getModel(), n = this.api;
		I(this._allHandlers, function(r) {
			var i = e.get(r.uid) || e.set(r.uid, {});
			Ee(!(r.reset && r.overallReset), ""), r.reset && this._createSeriesStageTask(r, i, t, n), r.overallReset && this._createOverallStageTask(r, i, t, n);
		}, this);
	}, e.prototype.prepareView = function(e, t, n, r) {
		var i = e.renderTask, a = i.context;
		a.model = t, a.ecModel = n, a.api = r, i.__block = !e.incrementalPrepareRender, this._pipe(t, i);
	}, e.prototype.performDataProcessorTasks = function(e, t) {
		this._performStageTasks(this._dataProcessorHandlers, e, t, { block: !0 });
	}, e.prototype.performVisualTasks = function(e, t, n) {
		this._performStageTasks(this._visualHandlers, e, t, n);
	}, e.prototype._performStageTasks = function(e, t, n, r) {
		r ||= {};
		var i = !1, a = this;
		I(e, function(e, s) {
			if (!(r.visualType && r.visualType !== e.visualType)) {
				var c = a._stageTaskMap.get(e.uid), l = c.seriesTaskMap, u = c.overallTask;
				if (u) {
					var d, f = u.agentStubMap;
					f.each(function(e) {
						o(r, e) && (e.dirty(), d = !0);
					}), d && u.dirty(), a.updatePayload(u, n);
					var p = a.getPerformArgs(u, r.block);
					f.each(function(e) {
						e.perform(p);
					}), u.perform(p) && (i = !0);
				} else l && l.each(function(s, c) {
					o(r, s) && s.dirty();
					var l = a.getPerformArgs(s, r.block);
					l.skip = !e.performRawSeries && t.isSeriesFiltered(s.context.model), a.updatePayload(s, n), s.perform(l) && (i = !0);
				});
			}
		});
		function o(e, t) {
			return e.setDirty && (!e.dirtyMap || e.dirtyMap.get(t.__pipeline.id));
		}
		this.unfinished = i || this.unfinished;
	}, e.prototype.performSeriesTasks = function(e) {
		var t;
		e.eachSeries(function(e) {
			t = e.dataTask.perform() || t;
		}), this.unfinished = t || this.unfinished;
	}, e.prototype.plan = function() {
		this._pipelineMap.each(function(e) {
			var t = e.tail;
			do {
				if (t.__block) {
					e.blockIndex = t.__idxInPipeline;
					break;
				}
				t = t.getUpstream();
			} while (t);
		});
	}, e.prototype.updatePayload = function(e, t) {
		t !== "remain" && (e.context.payload = t);
	}, e.prototype._createSeriesStageTask = function(e, t, n, r) {
		var i = this, a = t.seriesTaskMap, o = t.seriesTaskMap = K(), s = e.seriesType, c = e.getTargetSeries;
		e.createOnAllSeries ? n.eachRawSeries(l) : s ? n.eachRawSeriesByType(s, l) : c && c(n, r).each(l);
		function l(t) {
			var s = t.uid, c = o.set(s, a && a.get(s) || rv({
				plan: ok,
				reset: sk,
				count: uk
			}));
			c.context = {
				model: t,
				ecModel: n,
				api: r,
				useClearVisual: e.isVisual && !e.isLayout,
				plan: e.plan,
				reset: e.reset,
				scheduler: i
			}, i._pipe(t, c);
		}
	}, e.prototype._createOverallStageTask = function(e, t, n, r) {
		var i = this, a = t.overallTask = t.overallTask || rv({ reset: nk });
		a.context = {
			ecModel: n,
			api: r,
			overallReset: e.overallReset,
			scheduler: i
		};
		var o = a.agentStubMap, s = a.agentStubMap = K(), c = e.seriesType, l = e.getTargetSeries, u = e.dirtyOnOverallProgress, d = !1;
		Ee(!e.createOnAllSeries, ""), c ? n.eachRawSeriesByType(c, f) : l ? l(n, r).each(f) : I(n.getSeries(), f);
		function f(e) {
			var t = e.uid, n = s.set(t, o && o.get(t) || (d = !0, rv({
				reset: rk,
				onDirty: ak
			})));
			n.context = {
				model: e,
				dirtyOnOverallProgress: u
			}, n.agent = a, n.__block = u, i._pipe(e, n);
		}
		d && a.dirty();
	}, e.prototype._pipe = function(e, t) {
		var n = e.uid, r = this._pipelineMap.get(n);
		!r.head && (r.head = t), r.tail && r.tail.pipe(t), r.tail = t, t.__idxInPipeline = r.count++, t.__pipeline = r;
	}, e.wrapStageHandler = function(e, t) {
		return H(e) && (e = {
			overallReset: e,
			seriesType: dk(e)
		}), e.uid = $h("stageHandler"), t && (e.visualType = t), e;
	}, e;
}();
function nk(e) {
	e.overallReset(e.ecModel, e.api, e.payload);
}
function rk(e) {
	return e.dirtyOnOverallProgress && ik;
}
function ik() {
	this.agent.dirty(), this.getDownstream().dirty();
}
function ak() {
	this.agent && this.agent.dirty();
}
function ok(e) {
	return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null;
}
function sk(e) {
	e.useClearVisual && e.data.clearAllVisual();
	var t = e.resetDefines = Oc(e.reset(e.model, e.ecModel, e.api, e.payload));
	return t.length > 1 ? L(t, function(e, t) {
		return lk(t);
	}) : ck;
}
var ck = lk(0);
function lk(e) {
	return function(t, n) {
		var r = n.data, i = n.resetDefines[e];
		if (i && i.dataEach) for (var a = t.start; a < t.end; a++) i.dataEach(r, a);
		else i && i.progress && i.progress(t, r);
	};
}
function uk(e) {
	return e.data.count();
}
function dk(e) {
	mk = null;
	try {
		e(fk, pk);
	} catch {}
	return mk;
}
var fk = {}, pk = {}, mk;
hk(fk, iO), hk(pk, Ll), fk.eachSeriesByType = fk.eachRawSeriesByType = function(e) {
	mk = e;
}, fk.eachComponent = function(e) {
	e.mainType === "series" && e.subType && (mk = e.subType);
};
function hk(e, t) {
	for (var n in t.prototype) e[n] = Re;
}
//#endregion
//#region node_modules/echarts/lib/theme/dark.js
var $ = Q.darkColor, gk = $.background, _k = function() {
	return {
		axisLine: { lineStyle: { color: $.axisLine } },
		splitLine: { lineStyle: { color: $.axisSplitLine } },
		splitArea: { areaStyle: { color: [$.backgroundTint, $.backgroundTransparent] } },
		minorSplitLine: { lineStyle: { color: $.axisMinorSplitLine } },
		axisLabel: { color: $.axisLabel },
		axisName: {}
	};
}, vk = {
	label: { color: $.secondary },
	itemStyle: { borderColor: $.borderTint },
	dividerLineStyle: { color: $.border }
}, yk = {
	darkMode: !0,
	color: $.theme,
	backgroundColor: gk,
	axisPointer: {
		lineStyle: { color: $.border },
		crossStyle: { color: $.borderShade },
		label: { color: $.tertiary }
	},
	legend: {
		textStyle: { color: $.secondary },
		pageTextStyle: { color: $.tertiary }
	},
	textStyle: { color: $.secondary },
	title: {
		textStyle: { color: $.primary },
		subtextStyle: { color: $.quaternary }
	},
	toolbox: {
		iconStyle: { borderColor: $.accent50 },
		feature: { dataView: {
			backgroundColor: gk,
			textColor: $.primary,
			textareaColor: $.background,
			textareaBorderColor: $.border,
			buttonColor: $.accent50,
			buttonTextColor: $.neutral00
		} }
	},
	tooltip: {
		backgroundColor: $.neutral20,
		defaultBorderColor: $.border,
		textStyle: { color: $.tertiary }
	},
	dataZoom: {
		borderColor: $.accent10,
		textStyle: { color: $.tertiary },
		brushStyle: { color: $.backgroundTint },
		handleStyle: {
			color: $.neutral00,
			borderColor: $.accent20
		},
		moveHandleStyle: { color: $.accent40 },
		emphasis: { handleStyle: { borderColor: $.accent50 } },
		dataBackground: {
			lineStyle: { color: $.accent30 },
			areaStyle: { color: $.accent20 }
		},
		selectedDataBackground: {
			lineStyle: { color: $.accent50 },
			areaStyle: { color: $.accent30 }
		}
	},
	visualMap: {
		textStyle: { color: $.secondary },
		handleStyle: { borderColor: $.neutral30 }
	},
	timeline: {
		lineStyle: { color: $.accent10 },
		label: { color: $.tertiary },
		controlStyle: {
			color: $.accent30,
			borderColor: $.accent30
		}
	},
	calendar: {
		itemStyle: {
			color: $.neutral00,
			borderColor: $.neutral20
		},
		dayLabel: { color: $.tertiary },
		monthLabel: { color: $.secondary },
		yearLabel: { color: $.secondary }
	},
	matrix: {
		x: vk,
		y: vk,
		backgroundColor: { borderColor: $.axisLine },
		body: { itemStyle: { borderColor: $.borderTint } }
	},
	timeAxis: _k(),
	logAxis: _k(),
	valueAxis: _k(),
	categoryAxis: _k(),
	line: { symbol: "circle" },
	graph: { color: $.theme },
	gauge: {
		title: { color: $.secondary },
		axisLine: { lineStyle: { color: [[1, $.neutral05]] } },
		axisLabel: { color: $.axisLabel },
		detail: { color: $.primary }
	},
	candlestick: { itemStyle: {
		color: "#f64e56",
		color0: "#54ea92",
		borderColor: "#f64e56",
		borderColor0: "#54ea92"
	} },
	funnel: { itemStyle: { borderColor: $.background } },
	radar: function() {
		var e = _k();
		return e.axisName = { color: $.axisLabel }, e.axisLine.lineStyle.color = $.neutral20, e;
	}(),
	treemap: { breadcrumb: {
		itemStyle: {
			color: $.neutral20,
			textStyle: { color: $.secondary }
		},
		emphasis: { itemStyle: { color: $.neutral30 } }
	} },
	sunburst: { itemStyle: { borderColor: $.background } },
	map: {
		itemStyle: {
			borderColor: $.border,
			areaColor: $.neutral10
		},
		label: { color: $.tertiary },
		emphasis: {
			label: { color: $.primary },
			itemStyle: { areaColor: $.highlight }
		},
		select: {
			label: { color: $.primary },
			itemStyle: { areaColor: $.highlight }
		}
	},
	geo: {
		itemStyle: {
			borderColor: $.border,
			areaColor: $.neutral10
		},
		emphasis: {
			label: { color: $.primary },
			itemStyle: { areaColor: $.highlight }
		},
		select: {
			label: { color: $.primary },
			itemStyle: { color: $.highlight }
		}
	}
};
yk.categoryAxis.splitLine.show = !1;
//#endregion
//#region node_modules/echarts/lib/util/ECEventProcessor.js
var bk = function() {
	function e() {}
	return e.prototype.normalizeQuery = function(e) {
		var t = {}, n = {}, r = {};
		if (U(e)) {
			var i = Ke(e);
			t.mainType = i.main || null, t.subType = i.sub || null;
		} else {
			var a = [
				"Index",
				"Name",
				"Id"
			], o = {
				name: 1,
				dataIndex: 1,
				dataType: 1
			};
			I(e, function(e, i) {
				for (var s = !1, c = 0; c < a.length; c++) {
					var l = a[c], u = i.lastIndexOf(l);
					if (u > 0 && u === i.length - l.length) {
						var d = i.slice(0, u);
						d !== "data" && (t.mainType = d, t[l.toLowerCase()] = e, s = !0);
					}
				}
				o.hasOwnProperty(i) && (n[i] = e, s = !0), s || (r[i] = e);
			});
		}
		return {
			cptQuery: t,
			dataQuery: n,
			otherQuery: r
		};
	}, e.prototype.filter = function(e, t) {
		var n = this.eventInfo;
		if (!n) return !0;
		var r = n.targetEl, i = n.packedEvent, a = n.model, o = n.view;
		if (!a || !o) return !0;
		var s = t.cptQuery, c = t.dataQuery;
		return l(s, a, "mainType") && l(s, a, "subType") && l(s, a, "index", "componentIndex") && l(s, a, "name") && l(s, a, "id") && l(c, i, "name") && l(c, i, "dataIndex") && l(c, i, "dataType") && (!o.filterForExposedEvent || o.filterForExposedEvent(e, t.otherQuery, r, i));
		function l(e, t, n, r) {
			return e[n] == null || t[r || n] === e[n];
		}
	}, e.prototype.afterTrigger = function() {
		this.eventInfo = null;
	}, e;
}(), xk = [
	"symbol",
	"symbolSize",
	"symbolRotate",
	"symbolOffset"
], Sk = xk.concat(["symbolKeepAspect"]), Ck = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		var n = e.getData();
		if (e.legendIcon && n.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual) return;
		for (var r = {}, i = {}, a = !1, o = 0; o < xk.length; o++) {
			var s = xk[o], c = e.get(s);
			H(c) ? (a = !0, i[s] = c) : r[s] = c;
		}
		if (r.symbol = r.symbol || e.defaultSymbol, n.setVisual(N({
			legendIcon: e.legendIcon || r.symbol,
			symbolKeepAspect: e.get("symbolKeepAspect")
		}, r)), t.isSeriesFiltered(e)) return;
		var l = z(i);
		function u(t, n) {
			for (var r = e.getRawValue(n), a = e.getDataParams(n), o = 0; o < l.length; o++) {
				var s = l[o];
				t.setItemVisual(n, s, i[s](r, a));
			}
		}
		return { dataEach: a ? u : null };
	}
}, wk = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		if (!e.hasSymbolVisual || t.isSeriesFiltered(e)) return;
		var n = e.getData();
		function r(e, t) {
			for (var n = e.getItemModel(t), r = 0; r < Sk.length; r++) {
				var i = Sk[r], a = n.getShallow(i, !0);
				a != null && e.setItemVisual(t, i, a);
			}
		}
		return { dataEach: n.hasItemOption ? r : null };
	}
};
//#endregion
//#region node_modules/echarts/lib/visual/helper.js
function Tk(e, t, n) {
	switch (n) {
		case "color": return e.getItemVisual(t, "style")[e.getVisual("drawType")];
		case "opacity": return e.getItemVisual(t, "style").opacity;
		case "symbol":
		case "symbolSize":
		case "liftZ": return e.getItemVisual(t, n);
	}
}
function Ek(e, t) {
	switch (t) {
		case "color": return e.getVisual("style")[e.getVisual("drawType")];
		case "opacity": return e.getVisual("style").opacity;
		case "symbol":
		case "symbolSize":
		case "liftZ": return e.getVisual(t);
	}
}
function Dk(e, t, n, r) {
	switch (n) {
		case "color":
			var i = e.ensureUniqueItemVisual(t, "style");
			i[e.getVisual("drawType")] = r, e.setItemVisual(t, "colorFromPalette", !1);
			break;
		case "opacity":
			e.ensureUniqueItemVisual(t, "style").opacity = r;
			break;
		case "symbol":
		case "symbolSize":
		case "liftZ": e.setItemVisual(t, n, r);
	}
}
//#endregion
//#region node_modules/echarts/lib/util/event.js
function Ok(e, t, n) {
	for (var r; e && !(t(e) && (r = e, n));) e = e.__hostTarget || e.parent;
	return r;
}
//#endregion
//#region node_modules/echarts/lib/core/lifecycle.js
var kk = new da(), Ak = {};
function jk(e, t) {
	Ak[e] = t;
}
function Mk(e) {
	return Ak[e];
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/customSeriesRegister.js
var Nk = {};
function Pk(e, t) {
	Nk[e] = t;
}
function Fk(e) {
	return Nk[e];
}
//#endregion
//#region node_modules/zrender/lib/core/WeakMap.js
var Ik = Math.round(Math.random() * 9), Lk = typeof Object.defineProperty == "function", Rk = function() {
	function e() {
		this._id = "__ec_inner_" + Ik++;
	}
	return e.prototype.get = function(e) {
		return this._guard(e)[this._id];
	}, e.prototype.set = function(e, t) {
		var n = this._guard(e);
		return Lk ? Object.defineProperty(n, this._id, {
			value: t,
			enumerable: !1,
			configurable: !0
		}) : n[this._id] = t, this;
	}, e.prototype.delete = function(e) {
		return this.has(e) ? (delete this._guard(e)[this._id], !0) : !1;
	}, e.prototype.has = function(e) {
		return !!this._guard(e)[this._id];
	}, e.prototype._guard = function(e) {
		if (e !== Object(e)) throw TypeError("Value of WeakMap is not a non-null object.");
		return e;
	}, e;
}();
//#endregion
//#region node_modules/zrender/lib/canvas/helper.js
function zk(e) {
	return isFinite(e);
}
function Bk(e, t, n) {
	var r = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
	return t.global || (r = r * n.width + n.x, i = i * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), r = zk(r) ? r : 0, i = zk(i) ? i : 1, a = zk(a) ? a : 0, o = zk(o) ? o : 0, e.createLinearGradient(r, a, i, o);
}
function Vk(e, t, n) {
	var r = n.width, i = n.height, a = Math.min(r, i), o = t.x == null ? .5 : t.x, s = t.y == null ? .5 : t.y, c = t.r == null ? .5 : t.r;
	return t.global || (o = o * r + n.x, s = s * i + n.y, c *= a), o = zk(o) ? o : .5, s = zk(s) ? s : .5, c = c >= 0 && zk(c) ? c : .5, e.createRadialGradient(o, s, 0, o, s, c);
}
function Hk(e, t, n) {
	for (var r = t.type === "radial" ? Vk(e, t, n) : Bk(e, t, n), i = t.colorStops, a = 0; a < i.length; a++) r.addColorStop(i[a].offset, i[a].color);
	return r;
}
function Uk(e, t) {
	if (e === t || !e && !t) return !1;
	if (!e || !t || e.length !== t.length) return !0;
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
	return !1;
}
function Wk(e) {
	return parseInt(e, 10);
}
function Gk(e, t, n) {
	var r = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
	if (n[r] != null && n[r] !== "auto") return parseFloat(n[r]);
	var s = document.defaultView.getComputedStyle(e);
	return (e[i] || Wk(s[r]) || Wk(e.style[r])) - (Wk(s[a]) || 0) - (Wk(s[o]) || 0) || 0;
}
//#endregion
//#region node_modules/zrender/lib/canvas/dashStyle.js
function Kk(e, t) {
	return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : me(e) ? [e] : V(e) ? e : null;
}
function qk(e) {
	var t = e.style, n = t.lineDash && t.lineWidth > 0 && Kk(t.lineDash, t.lineWidth), r = t.lineDashOffset;
	if (n) {
		var i = t.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
		i && i !== 1 && (n = L(n, function(e) {
			return e / i;
		}), r /= i);
	}
	return [n, r];
}
//#endregion
//#region node_modules/zrender/lib/canvas/graphic.js
var Jk = new Co(!0);
function Yk(e) {
	var t = e.stroke;
	return !(t == null || t === "none" || !(e.lineWidth > 0));
}
function Xk(e) {
	return typeof e == "string" && e !== "none";
}
function Zk(e) {
	var t = e.fill;
	return t != null && t !== "none";
}
function Qk(e, t) {
	if (t.fillOpacity != null && t.fillOpacity !== 1) {
		var n = e.globalAlpha;
		e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = n;
	} else e.fill();
}
function $k(e, t) {
	if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
		var n = e.globalAlpha;
		e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = n;
	} else e.stroke();
}
function eA(e, t, n) {
	var r = dt(t.image, t.__image, n);
	if (pt(r)) {
		var i = e.createPattern(r, t.repeat || "repeat");
		if (typeof DOMMatrix == "function" && i && i.setTransform) {
			var a = new DOMMatrix();
			a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * ze), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
		}
		return i;
	}
}
function tA(e, t, n, r, i) {
	var a, o = Yk(n), s = Zk(n), c = n.strokePercent, l = c < 1, u = !t.path;
	(!t.silent || l) && u && t.createPathProxy();
	var d = t.path || Jk, f = t.__dirty;
	if (!r) {
		var p = n.fill, m = n.stroke, h = s && !!p.colorStops, g = o && !!m.colorStops, _ = s && !!p.image, v = o && !!m.image, y = void 0, b = void 0, x = void 0, S = void 0, C = void 0;
		(h || g) && (C = t.getBoundingRect()), h && (y = f ? Hk(e, p, C) : t.__canvasFillGradient, t.__canvasFillGradient = y), g && (b = f ? Hk(e, m, C) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = b), _ && (x = f || !t.__canvasFillPattern ? eA(e, p, t) : t.__canvasFillPattern, t.__canvasFillPattern = x), v && (S = f || !t.__canvasStrokePattern ? eA(e, m, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), h ? e.fillStyle = y : _ && (x ? e.fillStyle = x : s = !1), g ? e.strokeStyle = b : v && (S ? e.strokeStyle = S : o = !1);
	}
	var w = t.getGlobalScale();
	d.setScale(w[0], w[1], t.segmentIgnoreThreshold);
	var T, E;
	e.setLineDash && n.lineDash && (a = qk(t), T = a[0], E = a[1]);
	var D = !0;
	(u || f & 4) && (d.setDPR(e.dpr), l ? d.setContext(null) : (d.setContext(e), D = !1), d.reset(), t.buildPath(d, t.shape, r), d.toStatic(), t.pathUpdated()), D && d.rebuildPath(e, l ? c : 1), T && (e.setLineDash(T), e.lineDashOffset = E), r ? (i.batchFill = s, i.batchStroke = o) : n.strokeFirst ? (o && $k(e, n), s && Qk(e, n)) : (s && Qk(e, n), o && $k(e, n)), T && e.setLineDash([]);
}
function nA(e, t, n) {
	var r = t.__image = dt(n.image, t.__image, t, t.onload);
	if (r && pt(r)) {
		var i = n.x || 0, a = n.y || 0, o = t.getWidth(), s = t.getHeight(), c = r.width / r.height;
		if (o == null && s != null ? o = s * c : s == null && o != null ? s = o / c : o == null && s == null && (o = r.width, s = r.height), n.sWidth && n.sHeight) {
			var l = n.sx || 0, u = n.sy || 0;
			e.drawImage(r, l, u, n.sWidth, n.sHeight, i, a, o, s);
		} else if (n.sx && n.sy) {
			var l = n.sx, u = n.sy, d = o - l, f = s - u;
			e.drawImage(r, l, u, d, f, i, a, o, s);
		} else e.drawImage(r, i, a, o, s);
	}
}
function rA(e, t, n) {
	var r, i = n.text;
	if (i != null && (i += ""), i) {
		e.font = n.font || "12px sans-serif", e.textAlign = n.textAlign, e.textBaseline = n.textBaseline;
		var a = void 0, o = void 0;
		e.setLineDash && n.lineDash && (r = qk(t), a = r[0], o = r[1]), a && (e.setLineDash(a), e.lineDashOffset = o), n.strokeFirst ? (Yk(n) && e.strokeText(i, n.x, n.y), Zk(n) && e.fillText(i, n.x, n.y)) : (Zk(n) && e.fillText(i, n.x, n.y), Yk(n) && e.strokeText(i, n.x, n.y)), a && e.setLineDash([]);
	}
}
var iA = [
	"shadowBlur",
	"shadowOffsetX",
	"shadowOffsetY"
], aA = [
	["lineCap", "butt"],
	["lineJoin", "miter"],
	["miterLimit", 10]
];
function oA(e, t, n, r, i) {
	var a = !1;
	if (!r && (n ||= {}, t === n)) return !1;
	if (r || t.opacity !== n.opacity) {
		_A(e, i), a = !0;
		var o = Math.max(Math.min(t.opacity, 1), 0);
		e.globalAlpha = isNaN(o) ? Ia.opacity : o;
	}
	(r || t.blend !== n.blend) && (a ||= (_A(e, i), !0), e.globalCompositeOperation = t.blend || Ia.blend);
	for (var s = 0; s < iA.length; s++) {
		var c = iA[s];
		(r || t[c] !== n[c]) && (a ||= (_A(e, i), !0), e[c] = e.dpr * (t[c] || 0));
	}
	return (r || t.shadowColor !== n.shadowColor) && (a ||= (_A(e, i), !0), e.shadowColor = t.shadowColor || Ia.shadowColor), a;
}
function sA(e, t, n, r, i) {
	var a = t.style, o = r ? null : n && n.style || {};
	if (a === o) return !1;
	var s = oA(e, a, o, r, i);
	if ((r || a.fill !== o.fill) && (s ||= (_A(e, i), !0), Xk(a.fill) && (e.fillStyle = a.fill)), (r || a.stroke !== o.stroke) && (s ||= (_A(e, i), !0), Xk(a.stroke) && (e.strokeStyle = a.stroke)), (r || a.opacity !== o.opacity) && (s ||= (_A(e, i), !0), e.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
		var c = a.lineWidth / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
		e.lineWidth !== c && (s ||= (_A(e, i), !0), e.lineWidth = c);
	}
	for (var l = 0; l < aA.length; l++) {
		var u = aA[l], d = u[0];
		(r || a[d] !== o[d]) && (s ||= (_A(e, i), !0), e[d] = a[d] || u[1]);
	}
	return s;
}
function cA(e, t, n, r, i) {
	return oA(e, t.style, n && n.style, r, i);
}
function lA(e, t) {
	var n = t.transform, r = e.dpr || 1;
	n ? e.setTransform(r * n[0], r * n[1], r * n[2], r * n[3], r * n[4], r * n[5]) : e.setTransform(r, 0, 0, r, 0, 0);
}
function uA(e, t, n) {
	for (var r = !1, i = 0; i < e.length; i++) {
		var a = e[i];
		r ||= a.isZeroArea(), lA(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
	}
	n.allClipped = r;
}
function dA(e, t) {
	return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t);
}
var fA = 1, pA = 2, mA = 3, hA = 4;
function gA(e) {
	var t = Zk(e), n = Yk(e);
	return !(e.lineDash || !(+t ^ n) || t && typeof e.fill != "string" || n && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1);
}
function _A(e, t) {
	t.batchFill && (t.batchFill = !1, e.fill()), t.batchStroke && (t.batchStroke = !1, e.stroke());
}
function vA(e, t) {
	var n = {
		inHover: !1,
		viewWidth: 0,
		viewHeight: 0,
		beforeBrushParam: {}
	};
	yA(e, t, n), bA(e, n);
}
function yA(e, t, n) {
	var r = t.transform;
	if (!t.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) {
		t.__dirty &= -2, t.__isRendered = !1;
		return;
	}
	var i = t.__clipPaths, a = n.prevElClipPaths, o = t.style, s = !1, c = !1;
	if ((!a || Uk(i, a)) && (a && (_A(e, n), e.restore(), c = s = !0, n.prevElClipPaths = null, n.allClipped = !1, n.prevEl = null), i && i.length && (_A(e, n), e.save(), uA(i, e, n), s = !0, n.prevElClipPaths = i)), n.allClipped) {
		t.__dirty &= -2, t.__isRendered = !1;
		return;
	}
	t.beforeBrush && t.beforeBrush(n.beforeBrushParam), t.innerBeforeBrush();
	var l = n.prevEl;
	l || (c = s = !0);
	var u = t instanceof Jo && t.autoBatch && gA(o);
	s || dA(r, l.transform) ? (_A(e, n), lA(e, t)) : u || _A(e, n), t instanceof Jo ? (n.lastDrawType !== fA && (c = !0, n.lastDrawType = fA), sA(e, t, l, c, n), (!u || !n.batchFill && !n.batchStroke) && e.beginPath(), tA(e, t, o, u, n)) : t instanceof Xo ? (n.lastDrawType !== mA && (c = !0, n.lastDrawType = mA), sA(e, t, l, c, n), rA(e, t, o)) : t instanceof es ? (n.lastDrawType !== pA && (c = !0, n.lastDrawType = pA), cA(e, t, l, c, n), nA(e, t, o)) : t.getTemporalDisplayables && (n.lastDrawType !== hA && (c = !0, n.lastDrawType = hA), xA(e, t, n)), t.innerAfterBrush(), t.afterBrush && (u && _A(e, n), t.afterBrush()), n.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function bA(e, t) {
	_A(e, t), t.prevElClipPaths && e.restore();
}
function xA(e, t, n) {
	var r = t.getDisplayables(), i = t.getTemporalDisplayables();
	e.save();
	for (var a = {
		prevElClipPaths: null,
		prevEl: null,
		allClipped: !1,
		viewWidth: n.viewWidth,
		viewHeight: n.viewHeight,
		inHover: n.inHover,
		beforeBrushParam: {}
	}, o = t.getCursor(), s = r.length; o < s; o++) {
		var c = r[o];
		c.beforeBrush && c.beforeBrush(n.beforeBrushParam), c.innerBeforeBrush(), yA(e, c, a), c.innerAfterBrush(), c.afterBrush && c.afterBrush(), a.prevEl = c;
	}
	bA(e, a);
	for (var l = 0, u = i.length; l < u; l++) {
		var c = i[l];
		c.beforeBrush && c.beforeBrush(n.beforeBrushParam), c.innerBeforeBrush(), yA(e, c, a), c.innerAfterBrush(), c.afterBrush && c.afterBrush(), a.prevEl = c;
	}
	bA(e, a), t.clearTemporalDisplayables(), t.notClear = !0, e.restore();
}
//#endregion
//#region node_modules/echarts/lib/util/decal.js
var SA = new Rk(), CA = new ct(100), wA = [
	"symbol",
	"symbolSize",
	"symbolKeepAspect",
	"color",
	"backgroundColor",
	"dashArrayX",
	"dashArrayY",
	"maxTileWidth",
	"maxTileHeight"
];
function TA(e, t) {
	if (e === "none") return null;
	var n = t.getDevicePixelRatio(), r = t.getZr(), i = r.painter.type === "svg";
	e.dirty && SA.delete(e);
	var a = SA.get(e);
	if (a) return a;
	var o = P(e, {
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
	var s = { repeat: "repeat" };
	return c(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / n, SA.set(e, s), e.dirty = !1, s;
	function c(e) {
		for (var t = [n], a = !0, s = 0; s < wA.length; ++s) {
			var c = o[wA[s]];
			if (c != null && !V(c) && !U(c) && !me(c) && typeof c != "boolean") {
				a = !1;
				break;
			}
			t.push(c);
		}
		var l;
		if (a) {
			l = t.join(",") + (i ? "-svg" : "");
			var u = CA.get(l);
			u && (i ? e.svgElement = u : e.image = u);
		}
		var d = DA(o.dashArrayX), f = OA(o.dashArrayY), p = EA(o.symbol), m = kA(d), h = AA(f), _ = !i && g.createCanvas(), v = i && {
			tag: "g",
			attrs: {},
			key: "dcl",
			children: []
		}, y = x(), b;
		_ && (_.width = y.width * n, _.height = y.height * n, b = _.getContext("2d")), S(), a && CA.put(l, _ || v), e.image = _, e.svgElement = v, e.svgWidth = y.width, e.svgHeight = y.height;
		function x() {
			for (var e = 1, t = 0, n = m.length; t < n; ++t) e = _c(e, m[t]);
			for (var r = 1, t = 0, n = p.length; t < n; ++t) r = _c(r, p[t].length);
			e *= r;
			var i = h * m.length * p.length;
			return {
				width: Math.max(1, Math.min(e, o.maxTileWidth)),
				height: Math.max(1, Math.min(i, o.maxTileHeight))
			};
		}
		function S() {
			b && (b.clearRect(0, 0, _.width, _.height), o.backgroundColor && (b.fillStyle = o.backgroundColor, b.fillRect(0, 0, _.width, _.height)));
			for (var e = 0, t = 0; t < f.length; ++t) e += f[t];
			if (e <= 0) return;
			for (var a = -h, s = 0, c = 0, l = 0; a < y.height;) {
				if (s % 2 == 0) {
					for (var u = c / 2 % p.length, m = 0, g = 0, x = 0; m < y.width * 2;) {
						for (var S = 0, t = 0; t < d[l].length; ++t) S += d[l][t];
						if (S <= 0) break;
						if (g % 2 == 0) {
							var C = (1 - o.symbolSize) * .5, w = m + d[l][g] * C, T = a + f[s] * C, E = d[l][g] * o.symbolSize, D = f[s] * o.symbolSize, O = x / 2 % p[u].length;
							k(w, T, E, D, p[u][O]);
						}
						m += d[l][g], ++x, ++g, g === d[l].length && (g = 0);
					}
					++l, l === d.length && (l = 0);
				}
				a += f[s], ++c, ++s, s === f.length && (s = 0);
			}
			function k(e, t, a, s, c) {
				var l = i ? 1 : n, u = uy(c, e * l, t * l, a * l, s * l, o.color, o.symbolKeepAspect);
				if (i) {
					var d = r.painter.renderOneToVNode(u);
					d && v.children.push(d);
				} else vA(b, u);
			}
		}
	}
}
function EA(e) {
	if (!e || e.length === 0) return [["rect"]];
	if (U(e)) return [[e]];
	for (var t = !0, n = 0; n < e.length; ++n) if (!U(e[n])) {
		t = !1;
		break;
	}
	if (t) return EA([e]);
	for (var r = [], n = 0; n < e.length; ++n) U(e[n]) ? r.push([e[n]]) : r.push(e[n]);
	return r;
}
function DA(e) {
	if (!e || e.length === 0) return [[0, 0]];
	if (me(e)) {
		var t = Math.ceil(e);
		return [[t, t]];
	}
	for (var n = !0, r = 0; r < e.length; ++r) if (!me(e[r])) {
		n = !1;
		break;
	}
	if (n) return DA([e]);
	for (var i = [], r = 0; r < e.length; ++r) if (me(e[r])) {
		var t = Math.ceil(e[r]);
		i.push([t, t]);
	} else {
		var t = L(e[r], function(e) {
			return Math.ceil(e);
		});
		t.length % 2 == 1 ? i.push(t.concat(t)) : i.push(t);
	}
	return i;
}
function OA(e) {
	if (!e || typeof e == "object" && e.length === 0) return [0, 0];
	if (me(e)) {
		var t = Math.ceil(e);
		return [t, t];
	}
	var n = L(e, function(e) {
		return Math.ceil(e);
	});
	return e.length % 2 ? n.concat(n) : n;
}
function kA(e) {
	return L(e, function(e) {
		return AA(e);
	});
}
function AA(e) {
	for (var t = 0, n = 0; n < e.length; ++n) t += e[n];
	return e.length % 2 == 1 ? t * 2 : t;
}
//#endregion
//#region node_modules/echarts/lib/visual/decal.js
var jA = wl(MA);
function MA(e, t) {
	e.eachRawSeries(function(n) {
		if (!e.isSeriesFiltered(n)) {
			var r = n.getData();
			r.hasItemVisual() && r.each(function(e) {
				var n = r.getItemVisual(e, "decal");
				if (n) {
					var i = r.ensureUniqueItemVisual(e, "style");
					i.decal = TA(n, t);
				}
			});
			var i = r.getVisual("decal");
			if (i) {
				var a = r.getVisual("style");
				a.decal = TA(i, t);
			}
		}
	});
}
//#endregion
//#region node_modules/echarts/lib/core/echarts.js
var NA = "6.1.0", PA = { zrender: "6.1.0" }, FA = 1, IA = 800, LA = 900, RA = 920, zA = 1e3, BA = 2e3, VA = 5e3, HA = 1e3, UA = 1100, WA = 2e3, GA = 3e3, KA = 4e3, qA = 4500, JA = 4600, YA = 5e3, XA = 6e3, ZA = 7e3, QA = {
	PROCESSOR: {
		SERIES_FILTER: IA,
		AXIS_STATISTICS: RA,
		FILTER: zA,
		STATISTIC: VA,
		STATISTICS: VA
	},
	VISUAL: {
		LAYOUT: HA,
		PROGRESSIVE_LAYOUT: UA,
		GLOBAL: WA,
		CHART: GA,
		POST_CHART_LAYOUT: JA,
		COMPONENT: KA,
		BRUSH: YA,
		CHART_ITEM: qA,
		ARIA: XA,
		DECAL: ZA
	}
}, $A = "__flagInMainProcess", ej = "__mainProcessVersion", tj = "__pendingUpdate", nj = "__needsUpdateStatus", rj = /^[a-zA-Z0-9_]+$/, ij = "__connectUpdateStatus", aj = 0, oj = 1, sj = 2;
function cj(e) {
	return function() {
		var t = [...arguments];
		if (this.isDisposed()) {
			this.id;
			return;
		}
		return uj(this, e, t);
	};
}
function lj(e) {
	return function() {
		var t = [...arguments];
		return uj(this, e, t);
	};
}
function uj(e, t, n) {
	return n[0] = n[0] && n[0].toLowerCase(), da.prototype[t].apply(e, n);
}
var dj = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(da), fj = dj.prototype;
fj.on = lj("on"), fj.off = lj("off");
var pj, mj, hj, gj, _j, vj, yj, bj, xj, Sj, Cj, wj, Tj, Ej, Dj, Oj, kj, Aj, jj, Mj = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this, new bk()) || this;
		i._chartsViews = [], i._chartsMap = {}, i._componentsViews = [], i._componentsMap = {}, i._pendingActions = [], r ||= {}, i.__v_skip = !0, i._dom = t;
		var a = "canvas", o = "auto", s = !1;
		i[ej] = 1, r.ssr && WD(function(e) {
			var t = Z(e), n = t.dataIndex;
			if (n != null) {
				var r = K();
				return r.set("series_index", t.seriesIndex), r.set("data_index", n), t.ssrType && r.set("ssr_type", t.ssrType), r;
			}
		});
		var c = i._zr = LD(t, {
			renderer: r.renderer || a,
			devicePixelRatio: r.devicePixelRatio,
			width: r.width,
			height: r.height,
			ssr: r.ssr,
			useDirtyRect: G(r.useDirtyRect, s),
			useCoarsePointer: G(r.useCoarsePointer, o),
			pointerSize: r.pointerSize
		});
		i._ssr = r.ssr, i._throttledZrFlush = Hw(B(c.flush, c), 17), i._updateTheme(n), i._locale = Eg(r.locale || wg), i._coordSysMgr = new Mh();
		var l = i._api = Dj(i);
		function u(e, t) {
			return e.__prio - t.__prio;
		}
		return iD(Bj, u), iD(Rj, u), i._scheduler = new tk(i, l, Rj, Bj), i._messageCenter = new dj(), i._initEvents(), i.resize = B(i.resize, i), c.animation.on("frame", i._onframe, i), Sj(c, i), Cj(c, i), ke(i), i;
	}
	return t.prototype._onframe = function() {
		if (!this._disposed) {
			var e = this._scheduler, t = this._model, n = this._api;
			if (Aj(this), this[tj]) {
				var r = this[tj].silent;
				this[$A] = !0, jj(this);
				try {
					pj(this), gj.update.call(this, null, this[tj].updateParams);
				} catch (e) {
					throw this[$A] = !1, this[tj] = null, e;
				}
				this._zr.flush(), this[$A] = !1, this[tj] = null, bj.call(this, r), xj.call(this, r);
			} else if (e.unfinished) {
				var i = FA;
				do {
					e.unfinished = !1;
					var a = g.getTime();
					e.performSeriesTasks(t), e.performDataProcessorTasks(t), vj(this, t), e.performVisualTasks(t), Ej(this, this._model, n, "remain", {}), i -= g.getTime() - a;
				} while (i > 0 && e.unfinished);
				e.unfinished || this._zr.flush();
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
	}, t.prototype.setOption = function(e, t, n) {
		if (!this[$A]) {
			if (this._disposed) {
				this.id;
				return;
			}
			var r, i, a;
			if (W(t) && (n = t.lazyUpdate, r = t.silent, i = t.replaceMerge, a = t.transition, t = t.notMerge), this[$A] = !0, jj(this), !this._model || t) {
				var o = new dO(this._api), s = this._theme, c = this._model = new iO();
				c.scheduler = this._scheduler, c.ssr = this._ssr, c.init(null, null, null, s, this._locale, o);
			}
			this._model.setOption(e, { replaceMerge: i }, zj);
			var l = {
				seriesTransition: a,
				optionChanged: !0
			};
			if (n) this[tj] = {
				silent: r,
				updateParams: l
			}, this[$A] = !1, this.getZr().wakeUp();
			else {
				try {
					pj(this), gj.update.call(this, null, l);
				} catch (e) {
					throw this[tj] = null, this[$A] = !1, e;
				}
				this._ssr || this._zr.flush(), this[tj] = null, this[$A] = !1, bj.call(this, r), xj.call(this, r);
			}
		}
	}, t.prototype.setTheme = function(e, t) {
		if (!this[$A]) {
			if (this._disposed) {
				this.id;
				return;
			}
			var n = this._model;
			if (n) {
				var r = t && t.silent, i = null;
				this[tj] && (r ??= this[tj].silent, i = this[tj].updateParams, this[tj] = null), this[$A] = !0, jj(this);
				try {
					this._updateTheme(e), n.setTheme(this._theme), pj(this), gj.update.call(this, { type: "setTheme" }, i);
				} catch (e) {
					throw this[$A] = !1, e;
				}
				this[$A] = !1, bj.call(this, r), xj.call(this, r);
			}
		}
	}, t.prototype._updateTheme = function(e) {
		U(e) && (e = Vj[e]), e && (e = j(e), e && zO(e, !0), this._theme = e);
	}, t.prototype.getModel = function() {
		return this._model;
	}, t.prototype.getOption = function() {
		return this._model && this._model.getOption();
	}, t.prototype.getWidth = function() {
		return this._zr.getWidth();
	}, t.prototype.getHeight = function() {
		return this._zr.getHeight();
	}, t.prototype.getDevicePixelRatio = function() {
		return this._zr.painter.dpr || J.hasGlobalWindow && window.devicePixelRatio || 1;
	}, t.prototype.getRenderedCanvas = function(e) {
		return this.renderToCanvas(e);
	}, t.prototype.renderToCanvas = function(e) {
		return e ||= {}, this._zr.painter.getRenderedCanvas({
			backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
			pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
		});
	}, t.prototype.renderToSVGString = function(e) {
		return e ||= {}, this._zr.painter.renderToString({ useViewBox: e.useViewBox });
	}, t.prototype.getSvgDataURL = function() {
		var e = this._zr;
		return I(e.storage.getDisplayList(), function(e) {
			e.stopAnimation(null, !0);
		}), e.painter.toDataURL();
	}, t.prototype.getDataURL = function(e) {
		if (this._disposed) {
			this.id;
			return;
		}
		e ||= {};
		var t = e.excludeComponents, n = this._model, r = [], i = this;
		I(t, function(e) {
			n.eachComponent({ mainType: e }, function(e) {
				var t = i._componentsMap[e.__viewId];
				t.group.ignore || (r.push(t), t.group.ignore = !0);
			});
		});
		var a = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
		return I(r, function(e) {
			e.group.ignore = !1;
		}), a;
	}, t.prototype.getConnectedDataURL = function(e) {
		if (this._disposed) {
			this.id;
			return;
		}
		var t = e.type === "svg", n = this.group, r = Math.min, i = Math.max, a = Infinity;
		if (Wj[n]) {
			var o = a, s = a, c = -a, l = -a, u = [], d = e && e.pixelRatio || this.getDevicePixelRatio();
			I(Uj, function(a, d) {
				if (a.group === n) {
					var f = t ? a.getZr().painter.getSvgDom().innerHTML : a.renderToCanvas(j(e)), p = a.getDom().getBoundingClientRect();
					o = r(p.left, o), s = r(p.top, s), c = i(p.right, c), l = i(p.bottom, l), u.push({
						dom: f,
						left: p.left,
						top: p.top
					});
				}
			}), o *= d, s *= d, c *= d, l *= d;
			var f = c - o, p = l - s, m = g.createCanvas(), h = LD(m, { renderer: t ? "svg" : "canvas" });
			if (h.resize({
				width: f,
				height: p
			}), t) {
				var _ = "";
				return I(u, function(e) {
					var t = e.left - o, n = e.top - s;
					_ += "<g transform=\"translate(" + t + "," + n + ")\">" + e.dom + "</g>";
				}), h.painter.getSvgRoot().innerHTML = _, e.connectedBackgroundColor && h.painter.setBackgroundColor(e.connectedBackgroundColor), h.refreshImmediately(), h.painter.toDataURL();
			}
			return e.connectedBackgroundColor && h.add(new cs({
				shape: {
					x: 0,
					y: 0,
					width: f,
					height: p
				},
				style: { fill: e.connectedBackgroundColor }
			})), I(u, function(e) {
				var t = new es({ style: {
					x: e.left * d - o,
					y: e.top * d - s,
					image: e.dom
				} });
				h.add(t);
			}), h.refreshImmediately(), m.toDataURL("image/" + (e && e.type || "png"));
		}
		return this.getDataURL(e);
	}, t.prototype.convertToPixel = function(e, t, n) {
		return _j(this, "convertToPixel", e, t, n);
	}, t.prototype.convertToLayout = function(e, t, n) {
		return _j(this, "convertToLayout", e, t, n);
	}, t.prototype.convertFromPixel = function(e, t, n) {
		return _j(this, "convertFromPixel", e, t, n);
	}, t.prototype.containPixel = function(e, t) {
		if (this._disposed) {
			this.id;
			return;
		}
		var n = this._model, r;
		return I(Zc(n, e), function(e, n) {
			n.indexOf("Models") >= 0 && I(e, function(e) {
				var i = e.coordinateSystem;
				if (i && i.containPoint) r ||= !!i.containPoint(t);
				else if (n === "seriesModels") {
					var a = this._chartsMap[e.__viewId];
					a && a.containPoint && (r ||= a.containPoint(t, e));
				}
			}, this);
		}, this), !!r;
	}, t.prototype.getVisual = function(e, t) {
		var n = this._model, r = Zc(n, e, { defaultMainType: "series" }), i = r.seriesModel.getData(), a = r.hasOwnProperty("dataIndexInside") ? r.dataIndexInside : r.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(r.dataIndex) : null;
		return a == null ? Ek(i, t) : Tk(i, a, t);
	}, t.prototype.getViewOfComponentModel = function(e) {
		return this._componentsMap[e.__viewId];
	}, t.prototype.getViewOfSeriesModel = function(e) {
		return this._chartsMap[e.__viewId];
	}, t.prototype._initEvents = function() {
		var e = this;
		I(Pj, function(t) {
			var n = function(n) {
				var r = e.getModel(), i = n.target, a;
				if (t === "globalout" ? a = {} : i && Ok(i, function(e) {
					var t = Z(e);
					if (t && t.dataIndex != null) {
						var n = t.dataModel || r.getSeriesByIndex(t.seriesIndex);
						return a = n && n.getDataParams(t.dataIndex, t.dataType, i) || {}, !0;
					}
					if (t.eventData) return a = N({}, t.eventData), !0;
				}, !0), a) {
					var o = a.componentType, s = a.componentIndex;
					(o === "markLine" || o === "markPoint" || o === "markArea") && (o = "series", s = a.seriesIndex);
					var c = o && s != null && r.getComponent(o, s), l = c && e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
					a.event = n, a.type = t, e._$eventProcessor.eventInfo = {
						targetEl: i,
						packedEvent: a,
						model: c,
						view: l
					}, e.trigger(t, a);
				}
			};
			n.zrEventfulCallAtLast = !0, e._zr.on(t, n, e);
		});
		var t = this._messageCenter;
		I(Lj, function(n, r) {
			t.on(r, function(t) {
				e.trigger(r, t);
			});
		}), ET(t, this, this._api);
	}, t.prototype.isDisposed = function() {
		return this._disposed;
	}, t.prototype.clear = function() {
		if (this._disposed) {
			this.id;
			return;
		}
		this.setOption({ series: [] }, !0);
	}, t.prototype.dispose = function() {
		if (this._disposed) {
			this.id;
			return;
		}
		this._disposed = !0, this.getDom() && rl(this.getDom(), qj, "");
		var e = this, t = e._api, n = e._model;
		I(e._componentsViews, function(e) {
			e.dispose(n, t);
		}), I(e._chartsViews, function(e) {
			e.dispose(n, t);
		}), e._zr.dispose(), e._dom = e._model = e._chartsMap = e._componentsMap = e._chartsViews = e._componentsViews = e._scheduler = e._api = e._zr = e._throttledZrFlush = e._theme = e._coordSysMgr = e._messageCenter = null, delete Uj[e.id];
	}, t.prototype.resize = function(e) {
		if (!this[$A]) {
			if (this._disposed) {
				this.id;
				return;
			}
			this._zr.resize(e);
			var t = this._model;
			if (this._loadingFX && this._loadingFX.resize(), t) {
				var n = t.resetOption("media"), r = e && e.silent;
				this[tj] && (r ??= this[tj].silent, n = !0, this[tj] = null), this[$A] = !0, jj(this);
				try {
					n && pj(this), gj.update.call(this, {
						type: "resize",
						animation: N({ duration: 0 }, e && e.animation)
					});
				} catch (e) {
					throw this[$A] = !1, e;
				}
				this[$A] = !1, bj.call(this, r), xj.call(this, r);
			}
		}
	}, t.prototype.showLoading = function(e, t) {
		if (this._disposed) {
			this.id;
			return;
		}
		if (W(e) && (t = e, e = ""), e ||= "default", this.hideLoading(), Hj[e]) {
			var n = Hj[e](this._api, t), r = this._zr;
			this._loadingFX = n, r.add(n);
		}
	}, t.prototype.hideLoading = function() {
		if (this._disposed) {
			this.id;
			return;
		}
		this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
	}, t.prototype.makeActionFromEvent = function(e) {
		var t = N({}, e);
		return t.type = Ij[e.type], t;
	}, t.prototype.dispatchAction = function(e, t) {
		if (this._disposed) {
			this.id;
			return;
		}
		if (W(t) || (t = { silent: !!t }), Fj[e.type] && this._model) {
			if (this[$A]) {
				this._pendingActions.push(e);
				return;
			}
			var n = t.silent;
			yj.call(this, e, n);
			var r = t.flush;
			r ? this._zr.flush() : r !== !1 && J.browser.weChat && this._throttledZrFlush(), bj.call(this, n), xj.call(this, n);
		}
	}, t.prototype.updateLabelLayout = function() {
		kk.trigger("series:layoutlabels", this._model, this._api, { updatedSeries: [] });
	}, t.prototype.appendData = function(e) {
		if (this._disposed) {
			this.id;
			return;
		}
		var t = e.seriesIndex;
		this.getModel().getSeriesByIndex(t).appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
	}, t.internalField = function() {
		pj = function(e) {
			fS(e._model);
			var t = e._scheduler;
			t.restorePipelines(e._zr, e._model), t.prepareStageTasks(), mj(e, !0), mj(e, !1), t.plan();
		}, mj = function(e, t) {
			for (var n = e._model, r = e._scheduler, i = t ? e._componentsViews : e._chartsViews, a = t ? e._componentsMap : e._chartsMap, o = e._zr, s = e._api, c = 0; c < i.length; c++) i[c].__alive = !1;
			t ? n.eachComponent(function(e, t) {
				e !== "series" && l(t);
			}) : n.eachSeries(l);
			function l(e) {
				var c = e.__requireNewView;
				e.__requireNewView = !1;
				var l = "_ec_" + e.id + "_" + e.type, u = !c && a[l];
				if (!u) {
					var d = Ke(e.type);
					u = new (t ? UO.getClass(d.main, d.sub) : Uy.getClass(d.sub))(), u.init(n, s), a[l] = u, i.push(u), o.add(u.group);
				}
				e.__viewId = u.__id = l, u.__alive = !0, u.__model = e, u.group.__ecComponentInfo = {
					mainType: e.mainType,
					index: e.componentIndex
				}, !t && r.prepareView(u, e, n, s);
			}
			for (var c = 0; c < i.length;) {
				var u = i[c];
				u.__alive ? c++ : (!t && u.renderTask.dispose(), o.remove(u.group), u.dispose(n, s), i.splice(c, 1), a[u.__id] === u && delete a[u.__id], u.__id = u.group.__ecComponentInfo = null);
			}
		}, hj = function(e, t, n, r, i) {
			var a = e._model;
			if (a.setUpdatePayload(n), !r) {
				I([].concat(e._componentsViews, e._chartsViews), l);
				return;
			}
			var o = nl(n, r, i), s = n.excludeSeriesId, c;
			s != null && (c = K(), I(Oc(s), function(e) {
				var t = Hc(e, null);
				t != null && c.set(t, !0);
			})), a && a.eachComponent(o, function(t) {
				if (!(c && c.get(t.id) != null)) {
					if (Gu(n)) {
						if (t instanceof Yv) n.type === "highlight" && !n.notBlur && !t.get(["emphasis", "disabled"]) && Eu(t, n, e._api);
						else {
							var r = Du(t.mainType, t.componentIndex, n.name, e._api), i = r.focusSelf, a = r.dispatchers;
							n.type === "highlight" && i && !n.notBlur && Tu(t.mainType, t.componentIndex, e._api), a && I(a, function(e) {
								n.type === "highlight" ? gu(e) : _u(e);
							});
						}
					} else Wu(n) && t instanceof Yv && (Au(t, n, e._api), ju(t), kj(e));
				}
			}, e), a && a.eachComponent(o, function(t) {
				c && c.get(t.id) != null || l(e[r === "series" ? "_chartsMap" : "_componentsMap"][t.__viewId]);
			}, e);
			function l(r) {
				r && r.__alive && r[t] && r[t](r.__model, a, e._api, n);
			}
		}, gj = {
			prepareAndUpdate: function(e) {
				pj(this), gj.update.call(this, e, e && { optionChanged: e.newOption != null });
			},
			update: function(e, n) {
				var r = this._model, i = this._api, a = this._zr, o = this._coordSysMgr, s = this._scheduler;
				if (r) {
					pS(r), r.setUpdatePayload(e), s.restoreData(r, e), s.performSeriesTasks(r), o.create(r, i), kk.trigger("coordsys:aftercreate", r, i), s.performDataProcessorTasks(r, e), vj(this, r), o.update(r, i), t(r), s.performVisualTasks(r, e);
					var c = r.get("backgroundColor") || "transparent";
					a.setBackgroundColor(c);
					var l = r.get("darkMode");
					l != null && l !== "auto" && a.setDarkMode(l), wj(this, r, i, e, n), kk.trigger("afterupdate", r, i);
				}
			},
			updateTransform: function(e) {
				var t = this, n = t._model, r = t._api;
				if (n) {
					n.setUpdatePayload(e);
					var i = [];
					n.eachComponent(function(a, o) {
						if (a !== "series") {
							var s = t.getViewOfComponentModel(o);
							if (s && s.__alive) {
								if (s.updateTransform) {
									var c = s.updateTransform(o, n, r, e);
									c && c.update && i.push(s);
								} else i.push(s);
							}
						}
					});
					var a = K();
					n.eachSeries(function(i) {
						var o = t._chartsMap[i.__viewId], s = i.pipelineContext;
						if (o.updateTransform && !s.progressiveRender) {
							var c = o.updateTransform(i, n, r, e);
							c && c.update && a.set(i.uid, 1);
						} else a.set(i.uid, 1);
					}), t._scheduler.performVisualTasks(n, e, {
						setDirty: !0,
						dirtyMap: a
					}), Ej(t, n, r, e, {}, a), kk.trigger("afterupdate", n, r);
				}
			},
			updateView: function(e) {
				var n = this._model;
				n && (n.setUpdatePayload(e), Uy.markUpdateMethod(e, "updateView"), t(n), this._scheduler.performVisualTasks(n, e, { setDirty: !0 }), wj(this, n, this._api, e, {}), kk.trigger("afterupdate", n, this._api));
			},
			updateVisual: function(e) {
				var n = this, r = this._model;
				r && (r.setUpdatePayload(e), r.eachSeries(function(e) {
					e.getData().clearAllVisual();
				}), Uy.markUpdateMethod(e, "updateVisual"), t(r), this._scheduler.performVisualTasks(r, e, {
					visualType: "visual",
					setDirty: !0
				}), r.eachComponent(function(t, i) {
					if (t !== "series") {
						var a = n.getViewOfComponentModel(i);
						a && a.__alive && a.updateVisual(i, r, n._api, e);
					}
				}), r.eachSeries(function(t) {
					n._chartsMap[t.__viewId].updateVisual(t, r, n._api, e);
				}), kk.trigger("afterupdate", r, this._api));
			},
			updateLayout: function(e) {
				gj.update.call(this, e);
			}
		};
		function e(e, t, n, r, i) {
			if (e._disposed) {
				e.id;
				return;
			}
			for (var a = e._model, o = e._coordSysMgr.getCoordinateSystems(), s, c = Zc(a, n), l = 0; l < o.length; l++) {
				var u = o[l];
				if (u[t] && (s = u[t](a, c, r, i)) != null) return s;
			}
		}
		_j = e, vj = function(e, t) {
			var n = e._chartsMap, r = e._scheduler;
			t.eachSeries(function(e) {
				r.updateStreamModes(e, n[e.__viewId]);
			});
		}, yj = function(e, t) {
			var n = this, r = this.getModel(), i = e.type, a = e.escapeConnect, o = Fj[i], s = (o.update || "update").split(":"), c = s.pop(), l = s[0] != null && Ke(s[0]);
			this[$A] = !0, jj(this);
			var u = [e], d = !1;
			e.batch && (d = !0, u = L(e.batch, function(t) {
				return t = P(N({}, t), e), t.batch = null, t;
			}));
			var f = [], p, m = [], h = o.nonRefinedEventType, g = Wu(e), _ = Gu(e);
			if (_ && Cu(this._api), I(u, function(t) {
				var i = o.action(t, r, n._api);
				if (o.refineEvent ? m.push(i) : p = i, p ||= N({}, t), p.type = h, f.push(p), _) {
					var a = Qc(e), s = a.queryOptionMap, u = a.mainTypeSpecified ? s.keys()[0] : "series";
					hj(n, c, t, u), kj(n);
				} else g ? (hj(n, c, t, "series"), kj(n)) : l && hj(n, c, t, l.main, l.sub);
			}), c !== "none" && !_ && !g && !l) try {
				this[tj] ? (pj(this), gj.update.call(this, e), this[tj] = null) : gj[c].call(this, e);
			} catch (e) {
				throw this[$A] = !1, e;
			}
			if (p = d ? {
				type: h,
				escapeConnect: a,
				batch: f
			} : f[0], this[$A] = !1, !t) {
				var v = void 0;
				if (o.refineEvent) {
					var y = o.refineEvent(m, e, r, this._api).eventContent;
					Ee(W(y)), v = P({ type: o.refinedEventType }, y), v.fromAction = e.type, v.fromActionPayload = e, v.escapeConnect = !0;
				}
				var b = this._messageCenter;
				b.trigger(p.type, p), v && b.trigger(v.type, v);
			}
		}, bj = function(e) {
			for (var t = this._pendingActions; t.length;) {
				var n = t.shift();
				yj.call(this, n, e);
			}
		}, xj = function(e) {
			!e && this.trigger("updated");
		}, Sj = function(e, t) {
			e.on("rendered", function(n) {
				t.trigger("rendered", n), e.animation.isFinished() && !t[tj] && !t._scheduler.unfinished && !t._pendingActions.length ? t.trigger("finished") : e.refresh();
			});
		}, Cj = function(e, t) {
			e.on("mouseover", function(e) {
				var n = e.target, r = Ok(n, Vu);
				r && (Ou(r, e, t._api), kj(t));
			}).on("mouseout", function(e) {
				var n = e.target, r = Ok(n, Vu);
				r && (ku(r, e, t._api), kj(t));
			}).on("click", function(e) {
				var n = e.target, r = Ok(n, function(e) {
					return Z(e).dataIndex != null;
				}, !0);
				if (r) {
					var i = r.selected ? "unselect" : "select", a = Z(r);
					t._api.dispatchAction({
						type: i,
						dataType: a.dataType,
						dataIndexInside: a.dataIndex,
						seriesIndex: a.seriesIndex,
						isFromClick: !0
					});
				}
			});
		};
		function t(e) {
			e.clearColorPalette(), e.eachSeries(function(e) {
				e.clearColorPalette();
			});
		}
		function n(e) {
			var t = [], n = [], r = !1;
			if (e.eachComponent(function(e, i) {
				var a = i.get("zlevel") || 0, o = i.get("z") || 0, s = i.getZLevelKey();
				r ||= !!s, (e === "series" ? n : t).push({
					zlevel: a,
					z: o,
					idx: i.componentIndex,
					type: e,
					key: s
				});
			}), r) {
				var i = t.concat(n), a, o;
				iD(i, function(e, t) {
					return e.zlevel === t.zlevel ? e.z - t.z : e.zlevel - t.zlevel;
				}), I(i, function(t) {
					var n = e.getComponent(t.type, t.idx), r = t.zlevel, i = t.key;
					a != null && (r = Math.max(a, r)), i ? (r === a && i !== o && r++, o = i) : o &&= (r === a && r++, ""), a = r, n.setZLevel(r);
				});
			}
		}
		wj = function(e, t, r, i, a) {
			n(t), Tj(e, t, r, i, a), I(e._chartsViews, function(e) {
				e.__alive = !1;
			}), Ej(e, t, r, i, a), I(e._chartsViews, function(e) {
				e.__alive || e.remove(t, r);
			});
		}, Tj = function(e, t, n, r, i, a) {
			I(a || e._componentsViews, function(e) {
				var i = e.__model;
				s(i, e), e.render(i, t, n, r), o(i, e), c(i, e);
			});
		}, Ej = function(e, t, n, r, l, u) {
			var d = e._scheduler;
			l = N(l || {}, { updatedSeries: t.getSeries() }), kk.trigger("series:beforeupdate", t, n, l);
			var f = !1;
			t.eachSeries(function(t) {
				var n = e._chartsMap[t.__viewId];
				n.__alive = !0;
				var i = n.renderTask;
				d.updatePayload(i, r), s(t, n), u && u.get(t.uid) && i.dirty(), i.perform(d.getPerformArgs(i)) && (f = !0), n.group.silent = !!t.get("silent"), a(t, n), ju(t);
			}), d.unfinished = f || d.unfinished, kk.trigger("series:layoutlabels", t, n, l), kk.trigger("series:transition", t, n, l), t.eachSeries(function(t) {
				var n = e._chartsMap[t.__viewId];
				o(t, n), c(t, n);
			}), i(e, t), kk.trigger("series:afterupdate", t, n, l);
		}, kj = function(e) {
			e[nj] = !0, e.getZr().wakeUp();
		}, jj = function(e) {
			e[ej] = (e[ej] + 1) % 1e6;
		}, Aj = function(e) {
			e[nj] && (e.getZr().storage.traverse(function(e) {
				xf(e) || r(e);
			}), e[nj] = !1);
		};
		function r(e) {
			for (var t = [], n = e.currentStates, r = 0; r < n.length; r++) {
				var i = n[r];
				i !== "emphasis" && i !== "blur" && i !== "select" && t.push(i);
			}
			e.selected && e.states.select && t.push("select"), e.hoverState === 2 && e.states.emphasis ? t.push("emphasis") : e.hoverState === 1 && e.states.blur && t.push("blur"), e.useStates(t);
		}
		function i(e, t) {
			var n = e._zr;
			if (n.painter.type === "canvas") {
				var r = n.storage, i = 0;
				r.traverse(function(e) {
					e.isGroup || i++;
				});
				var a = i > G(t.get("hoverLayerThreshold"), XD.hoverLayerThreshold) && !J.node && !J.worker;
				(e._usingTHL || a) && (t.eachSeries(function(t) {
					if (!t.preventUsingHoverLayer) {
						var n = e._chartsMap[t.__viewId];
						n.__alive && n.eachRendered(function(e) {
							var t = e.states.emphasis;
							t && t.hoverLayer !== 2 && (t.hoverLayer = +!!a);
						});
					}
				}), e._usingTHL = a);
			}
		}
		function a(e, t) {
			var n = e.get("blendMode") || null;
			t.eachRendered(function(e) {
				e.isGroup || (e.style.blend = n);
			});
		}
		function o(e, t) {
			if (!e.preventAutoZ) {
				var n = fp(e);
				t.eachRendered(function(e) {
					return mp(e, n.z, n.zlevel), !0;
				});
			}
		}
		function s(e, t) {
			t.eachRendered(function(e) {
				if (!xf(e)) {
					var t = e.getTextContent(), n = e.getTextGuideLine();
					e.stateTransition &&= null, t && t.stateTransition && (t.stateTransition = null), n && n.stateTransition && (n.stateTransition = null), e.hasState() ? (e.prevStates = e.currentStates, e.clearStates()) : e.prevStates &&= null;
				}
			});
		}
		function c(e, t) {
			var n = e.getModel("stateAnimation"), i = e.isAnimationEnabled(), a = n.get("duration"), o = a > 0 ? {
				duration: a,
				delay: n.get("delay"),
				easing: n.get("easing")
			} : null;
			t.eachRendered(function(e) {
				if (e.states && e.states.emphasis) {
					if (xf(e)) return;
					if (e instanceof Jo && Ku(e), e.__dirty) {
						var t = e.prevStates;
						t && e.useStates(t);
					}
					if (i) {
						e.stateTransition = o;
						var n = e.getTextContent(), a = e.getTextGuideLine();
						n && (n.stateTransition = o), a && (a.stateTransition = o);
					}
					e.__dirty && r(e);
				}
			});
		}
		Dj = function(e) {
			return new (function(t) {
				l(n, t);
				function n() {
					return t !== null && t.apply(this, arguments) || this;
				}
				return n.prototype.getCoordinateSystems = function() {
					return e._coordSysMgr.getCoordinateSystems();
				}, n.prototype.getComponentByElement = function(t) {
					for (; t;) {
						var n = t.__ecComponentInfo;
						if (n != null) return e._model.getComponent(n.mainType, n.index);
						t = t.parent;
					}
				}, n.prototype.enterEmphasis = function(t, n) {
					gu(t, n), kj(e);
				}, n.prototype.leaveEmphasis = function(t, n) {
					_u(t, n), kj(e);
				}, n.prototype.enterBlur = function(t) {
					vu(t), kj(e);
				}, n.prototype.leaveBlur = function(t) {
					yu(t), kj(e);
				}, n.prototype.enterSelect = function(t) {
					bu(t), kj(e);
				}, n.prototype.leaveSelect = function(t) {
					xu(t), kj(e);
				}, n.prototype.getModel = function() {
					return e.getModel();
				}, n.prototype.getViewOfComponentModel = function(t) {
					return e.getViewOfComponentModel(t);
				}, n.prototype.getViewOfSeriesModel = function(t) {
					return e.getViewOfSeriesModel(t);
				}, n.prototype.getECUpdateCycleVersion = function() {
					return e[ej];
				}, n.prototype.usingTHL = function() {
					return e._usingTHL;
				}, n;
			}(Ll))(e);
		}, Oj = function(e) {
			function t(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r[ij] = t;
				}
			}
			I(Ij, function(n, r) {
				e._messageCenter.on(r, function(n) {
					if (Wj[e.group] && e[ij] !== aj) {
						if (n && n.escapeConnect) return;
						var r = e.makeActionFromEvent(n), i = [];
						I(Uj, function(t) {
							t !== e && t.group === e.group && i.push(t);
						}), t(i, aj), I(i, function(e) {
							e[ij] !== oj && e.dispatchAction(r);
						}), t(i, sj);
					}
				});
			});
		};
	}(), t;
}(da), Nj = Mj.prototype;
Nj.on = cj("on"), Nj.off = cj("off"), Nj.one = function(e, t, n) {
	var r = this;
	function i() {
		var n = [...arguments];
		t && t.apply && t.apply(this, n), r.off(e, i);
	}
	this.on.call(this, e, i, n);
};
var Pj = [
	"click",
	"dblclick",
	"mouseover",
	"mouseout",
	"mousemove",
	"mousedown",
	"mouseup",
	"globalout",
	"contextmenu"
], Fj = {}, Ij = {}, Lj = {}, Rj = [], zj = [], Bj = [], Vj = {}, Hj = {}, Uj = {}, Wj = {}, Gj = /* @__PURE__ */ new Date() - 0, Kj = /* @__PURE__ */ new Date() - 0, qj = "_echarts_instance_";
function Jj(e, t, n) {
	var r = !(n && n.ssr);
	if (r) {
		var i = $j(e);
		if (i) return i;
	}
	var a = new Mj(e, t, n);
	return a.id = "ec_" + Gj++, Uj[a.id] = a, r && rl(e, qj, a.id), Oj(a), kk.trigger("afterinit", a), a;
}
function Yj(e) {
	if (V(e)) {
		var t = e;
		e = null, I(t, function(t) {
			t.group != null && (e = t.group);
		}), e ||= "g_" + Kj++, I(t, function(t) {
			t.group = e;
		});
	}
	return Wj[e] = !0, e;
}
function Xj(e) {
	Wj[e] = !1;
}
var Zj = Xj;
function Qj(e) {
	U(e) ? e = Uj[e] : e instanceof Mj || (e = $j(e)), e instanceof Mj && !e.isDisposed() && e.dispose();
}
function $j(e) {
	return Uj[il(e, qj)];
}
function eM(e) {
	return Uj[e];
}
function tM(e, t) {
	Vj[e] = t;
}
function nM(e) {
	F(zj, e) < 0 && zj.push(e);
}
function rM(e, t) {
	mM(Rj, e, t, BA);
}
function iM(e) {
	oM("afterinit", e);
}
function aM(e) {
	oM("afterupdate", e);
}
function oM(e, t) {
	kk.on(e, t);
}
function sM(e, t, n) {
	var r, i, a, o, s;
	H(t) && (n = t, t = ""), W(e) ? (r = e.type, i = e.event, o = e.update, s = e.publishNonRefinedEvent, n ||= e.action, a = e.refineEvent) : (r = e, i = t);
	function c(e) {
		return e.toLowerCase();
	}
	i = c(i || r);
	var l = a ? c(r) : i;
	Fj[r] || (Ee(rj.test(r) && rj.test(i)), a && Ee(i !== r), Fj[r] = {
		actionType: r,
		refinedEventType: i,
		nonRefinedEventType: l,
		update: o,
		action: n,
		refineEvent: a
	}, Lj[i] = 1, a && s && (Lj[l] = 1), Ij[l] = r);
}
function cM(e, t) {
	Mh.register(e, t);
}
function lM(e) {
	var t = Mh.get(e);
	if (t) return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
}
function uM(e, t) {
	Pk(e, t);
}
function dM(e, t) {
	mM(Bj, e, t, HA, "layout", !0);
}
function fM(e, t) {
	mM(Bj, e, t, GA, "visual", !0);
}
var pM = [];
function mM(e, t, n, r, i, a) {
	if ((H(t) || W(t)) && (n = t, t = r), !(F(pM, n) >= 0)) {
		pM.push(n);
		var o = tk.wrapStageHandler(n, i);
		o.__prio = t, o.__raw = n, e.push(o);
	}
}
function hM(e, t) {
	Hj[e] = t;
}
function gM(e) {
	_({ createCanvas: e });
}
function _M(e, t, n) {
	var r = Mk("registerMap");
	r && r(e, t, n);
}
function vM(e) {
	var t = Mk("getMap");
	return t && t(e);
}
var yM = pv;
fM(WA, YO), fM(qA, ZO), fM(qA, QO), fM(WA, Ck), fM(qA, wk), fM(ZA, jA), nM(zO), rM(LA, BO), hM("default", ek), sM({
	type: Gl,
	event: Gl,
	update: Gl
}, Re), sM({
	type: Kl,
	event: Kl,
	update: Kl
}, Re), sM({
	type: ql,
	event: Xl,
	update: ql,
	action: Re,
	refineEvent: bM,
	publishNonRefinedEvent: !0
}), sM({
	type: Jl,
	event: Xl,
	update: Jl,
	action: Re,
	refineEvent: bM,
	publishNonRefinedEvent: !0
}), sM({
	type: Yl,
	event: Xl,
	update: Yl,
	action: Re,
	refineEvent: bM,
	publishNonRefinedEvent: !0
});
function bM(e, t, n, r) {
	return { eventContent: {
		selected: Mu(n),
		isFromClick: t.isFromClick || !1
	} };
}
tM("default", {}), tM("dark", yk);
var xM = {}, SM = [], CM = {
	registerPreprocessor: nM,
	registerProcessor: rM,
	registerPostInit: iM,
	registerPostUpdate: aM,
	registerUpdateLifecycle: oM,
	registerAction: sM,
	registerCoordinateSystem: cM,
	registerLayout: dM,
	registerVisual: fM,
	registerTransform: yM,
	registerLoading: hM,
	registerMap: _M,
	registerImpl: jk,
	PRIORITY: QA,
	ComponentModel: q_,
	ComponentView: UO,
	SeriesModel: Yv,
	ChartView: Uy,
	registerComponentModel: function(e) {
		q_.registerClass(e);
	},
	registerComponentView: function(e) {
		UO.registerClass(e);
	},
	registerSeriesModel: function(e) {
		Yv.registerClass(e);
	},
	registerChartView: function(e) {
		Uy.registerClass(e);
	},
	registerCustomSeries: function(e, t) {
		Pk(e, t);
	},
	registerSubTypeDefaulter: function(e, t) {
		q_.registerSubTypeDefaulter(e, t);
	},
	registerPainter: function(e, t) {
		VD(e, t);
	}
};
function wM(e) {
	if (V(e)) {
		I(e, function(e) {
			wM(e);
		});
		return;
	}
	F(SM, e) >= 0 || (SM.push(e), H(e) && (e = { install: e }), e.install(CM));
}
//#endregion
//#region node_modules/echarts/lib/coord/axisModelCommonMixin.js
var TM = function() {
	function e() {}
	return e.prototype.needIncludeZero = function() {
		return !this.option.scale;
	}, e.prototype.getCoordSysModel = function() {}, e;
}(), EM = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.getCoordSysModel = function() {
		return this.getReferringComponents("grid", $c).models[0];
	}, t.type = "cartesian2dAxis", t;
}(q_);
se(EM, TM);
//#endregion
//#region node_modules/echarts/lib/coord/axisDefault.js
var DM = {
	show: !0,
	z: 0,
	inverse: !1,
	name: "",
	nameLocation: "end",
	nameRotate: null,
	nameTruncate: {
		maxWidth: null,
		ellipsis: "...",
		placeholder: "."
	},
	nameTextStyle: {},
	nameGap: 15,
	silent: !1,
	triggerEvent: !1,
	tooltip: { show: !1 },
	axisPointer: {},
	axisLine: {
		show: !0,
		onZero: "auto",
		onZeroAxisIndex: null,
		lineStyle: {
			color: Q.color.axisLine,
			width: 1,
			type: "solid"
		},
		symbol: ["none", "none"],
		symbolSize: [10, 15],
		breakLine: !0
	},
	axisTick: {
		show: !0,
		inside: !1,
		length: 5,
		lineStyle: { width: 1 }
	},
	axisLabel: {
		show: !0,
		inside: !1,
		rotate: 0,
		showMinLabel: null,
		showMaxLabel: null,
		margin: 8,
		fontSize: 12,
		color: Q.color.axisLabel,
		textMargin: [0, 3]
	},
	splitLine: {
		show: !0,
		showMinLine: !0,
		showMaxLine: !0,
		lineStyle: {
			color: Q.color.axisSplitLine,
			width: 1,
			type: "solid"
		}
	},
	splitArea: {
		show: !1,
		areaStyle: { color: [Q.color.backgroundTint, Q.color.backgroundTransparent] }
	},
	breakArea: {
		show: !0,
		itemStyle: {
			color: Q.color.neutral00,
			borderColor: Q.color.border,
			borderWidth: 1,
			borderType: [3, 3],
			opacity: .6
		},
		zigzagAmplitude: 4,
		zigzagMinSpan: 4,
		zigzagMaxSpan: 20,
		zigzagZ: 100,
		expandOnClick: !0
	},
	breakLabelLayout: { moveOverlap: "auto" }
}, OM = M({
	boundaryGap: !0,
	deduplication: null,
	jitter: 0,
	jitterOverlap: !0,
	jitterMargin: 2,
	splitLine: { show: !1 },
	axisTick: {
		alignWithLabel: !1,
		interval: "auto",
		show: "auto"
	},
	axisLabel: { interval: "auto" }
}, DM), kM = M({
	boundaryGap: [0, 0],
	axisLine: { show: "auto" },
	axisTick: { show: "auto" },
	splitNumber: 5,
	minorTick: {
		show: !1,
		splitNumber: 5,
		length: 3,
		lineStyle: {}
	},
	minorSplitLine: {
		show: !1,
		lineStyle: {
			color: Q.color.axisMinorSplitLine,
			width: 1
		}
	}
}, DM), AM = {
	category: OM,
	value: kM,
	time: M({
		splitNumber: 6,
		axisLabel: { rich: { primary: { fontWeight: "bold" } } },
		splitLine: { show: !1 }
	}, kM),
	log: P({ logBase: 10 }, kM)
};
//#endregion
//#region node_modules/echarts/lib/coord/axisModelCreator.js
function jM(e, t, n, r) {
	I(tx, function(i, a) {
		var o = M(M({}, AM[a], !0), r, !0), s = function(e) {
			l(n, e);
			function n() {
				var n = e !== null && e.apply(this, arguments) || this;
				return n.type = t + "Axis." + a, n;
			}
			return n.prototype.mergeDefaultAndTheme = function(e, t) {
				var n = H_(this), r = n ? W_(e) : {};
				M(e, t.getTheme().get(a + "Axis")), M(e, this.getDefaultOption()), e.type = MM(e), n && U_(e, r, n);
			}, n.prototype.optionUpdated = function() {
				this.option.type === "category" && (this.__ordinalMeta = ob.createByAxisModel(this));
			}, n.prototype.getCategories = function(e) {
				var t = this.option;
				if (t.type === "category") return e ? t.data : this.__ordinalMeta.categories;
			}, n.prototype.getOrdinalMeta = function() {
				return this.__ordinalMeta;
			}, n.prototype.updateAxisBreaks = function(e) {
				var t = lC();
				return t ? t.updateModelAxisBreak(this, e) : { breaks: [] };
			}, n.type = t + "Axis." + a, n.defaultOption = o, n;
		}(n);
		e.registerComponentModel(s);
	}), e.registerSubTypeDefaulter(t + "Axis", MM);
}
function MM(e) {
	return e.type || (e.data ? "category" : "value");
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/Cartesian.js
var NM = function() {
	function e(e) {
		this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = e || "";
	}
	return e.prototype.getAxis = function(e) {
		return this._axes[e];
	}, e.prototype.getAxes = function() {
		return L(this._dimList, function(e) {
			return this._axes[e];
		}, this);
	}, e.prototype.getAxesByScale = function(e) {
		return e = e.toLowerCase(), le(this.getAxes(), function(t) {
			return t.scale.type === e;
		});
	}, e.prototype.addAxis = function(e) {
		var t = e.dim;
		this._axes[t] = e, this._dimList.push(t);
	}, e;
}(), PM = ["x", "y"];
function FM(e) {
	return (e.type === "interval" || e.type === "time") && !Ng(e);
}
var IM = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = Cw, t.dimensions = PM, t;
	}
	return t.prototype.calcAffineTransform = function() {
		this._transform = this._invTransform = null;
		var e = this.getAxis("x").scale, t = this.getAxis("y").scale;
		if (FM(e) && FM(t)) {
			var n = pb(e, null), r = pb(t, null), i = this.dataToPoint([n[0], r[0]]), a = this.dataToPoint([n[1], r[1]]), o = n[1] - n[0], s = r[1] - r[0];
			if (o && s) {
				var c = (a[0] - i[0]) / o, l = (a[1] - i[1]) / s, u = i[0] - n[0] * c, d = i[1] - r[0] * l, f = this._transform = [
					c,
					0,
					0,
					l,
					u,
					d
				];
				this._invTransform = St([], f);
			}
		}
	}, t.prototype.getBaseAxis = function() {
		return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
	}, t.prototype.containPoint = function(e) {
		var t = this.getAxis("x"), n = this.getAxis("y");
		return t.contain(t.toLocalCoord(e[0])) && n.contain(n.toLocalCoord(e[1]));
	}, t.prototype.containData = function(e) {
		return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
	}, t.prototype.containZone = function(e, t) {
		var n = this.dataToPoint(e), r = this.dataToPoint(t), i = this.getArea(), a = new X(n[0], n[1], r[0] - n[0], r[1] - n[1]);
		return i.intersect(a);
	}, t.prototype.dataToPoint = function(e, t, n) {
		n ||= [];
		var r = e[0], i = e[1];
		if (this._transform && r != null && isFinite(r) && i != null && isFinite(i)) return qt(n, e, this._transform);
		var a = this.getAxis("x"), o = this.getAxis("y");
		return n[0] = a.toGlobalCoord(a.dataToCoord(r, t)), n[1] = o.toGlobalCoord(o.dataToCoord(i, t)), n;
	}, t.prototype.clampData = function(e, t) {
		var n = this.getAxis("x").scale, r = this.getAxis("y").scale, i = n.getExtent(), a = r.getExtent(), o = n.parse(e[0]), s = r.parse(e[1]);
		return t ||= [], t[0] = Math.min(Math.max(Math.min(i[0], i[1]), o), Math.max(i[0], i[1])), t[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), t;
	}, t.prototype.pointToData = function(e, t, n) {
		if (n ||= [], this._invTransform) return qt(n, e, this._invTransform);
		var r = this.getAxis("x"), i = this.getAxis("y");
		return n[0] = r.coordToData(r.toLocalCoord(e[0]), t), n[1] = i.coordToData(i.toLocalCoord(e[1]), t), n;
	}, t.prototype.getOtherAxis = function(e) {
		return this.getAxis(e.dim === "x" ? "y" : "x");
	}, t.prototype.getArea = function(e) {
		e ||= 0;
		var t = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), r = Math.min(t[0], t[1]) - e, i = Math.min(n[0], n[1]) - e;
		return new X(r, i, Math.max(t[0], t[1]) - r + e, Math.max(n[0], n[1]) - i + e);
	}, t;
}(NM);
//#endregion
//#region node_modules/echarts/lib/coord/axisAlignTicks.js
function LM(e, t) {
	var n = e.scale, r = e.model, i = uw(n, r, r.ecModel, e, null), a = Sb(n), o = Sb(t) ? t.intervalStub : t, s = a ? n.intervalStub : n, c = n.base, l = o.getTicks(), u = o.getTicks({ expandToNicedExtent: !0 }), d = l.length - 1, f, p, m;
	if (d === 1) f = p = 0, m = 1;
	else if (d === 2) {
		var h = Ms(l[0].value - l[1].value), g = Ms(l[1].value - l[2].value);
		f = p = 0, h === g ? m = 2 : (m = 1, h < g ? f = h / g : p = g / h);
	} else {
		var _ = o.getConfig().interval;
		f = (1 - (l[0].value - u[0].value) / _) % 1, p = (1 - (u[d].value - l[d].value) / _) % 1, m = d - +!!f - !!p;
	}
	var v = i.zoomFixMM, y = v[0] || v[1], b = [i.fixMM[0] || y, i.fixMM[1] || y], x = n.getExtent(), S = s.getExtent(), C = Ob(S, b), w, T, E, D, O, k;
	function A(e) {
		for (var t = 50, n = 0; n < t && !e(); n++) E = a ? E * js(c, 2) : wb(E), D = Tb(E);
	}
	function ee() {
		w = qs(k - E * f, D);
	}
	function te() {
		T = qs(O + E * p, D);
	}
	function ne() {
		k = f ? qs(w + E * f, D) : w;
	}
	function j() {
		O = p ? qs(T - E * p, D) : T;
	}
	if (b[0] && b[1]) {
		w = C[0], T = C[1], E = (T - w) / (m + f + p);
		var M = e.getExtent(), re = Ms(M[1] - M[0]);
		D = $s([T, w], re, .5 / m), ne(), j(), vc(D) && (E = qs(E, D));
	} else {
		var N = C[1] - C[0];
		E = a ? js(cc(N), 1) : uc(N / m, 2), D = Tb(E), b[0] ? (w = C[0], A(function() {
			if (ne(), O = qs(k + E * m, D), te(), T >= C[1]) return !0;
		})) : b[1] ? (T = C[1], A(function() {
			if (j(), k = qs(O - E * m, D), ee(), w <= C[0]) return !0;
		})) : A(function() {
			k = qs(Fs(C[0] / E) * E, D), O = qs(Ps(C[1] / E) * E, D);
			var e = Ns((O - k) / E);
			if (e <= m) {
				var t = m - e, n = void 0, r = i.incl0 || a;
				if (r && C[0] === 0) n = [0, t];
				else if (r && C[1] === 0) n = [t, 0];
				else {
					var o = Ps(t / 2);
					n = t % 2 == 0 ? [o, o] : w + T < C[0] + C[1] ? [o, o + 1] : [o + 1, o];
				}
				if (k = qs(k - E * n[0], D), O = qs(O + E * n[1], D), ee(), te(), w <= C[0] && T >= C[1]) return !0;
			}
		});
	}
	_x(n, b, S, [w, T], x, {
		interval: E,
		intervalCount: m,
		intervalPrecision: D,
		niceExtent: [k, O]
	});
}
//#endregion
//#region node_modules/echarts/lib/coord/axisNiceTicks.js
function RM(e, t) {
	var n = Sb(e), r = n ? e.intervalStub : e, i = t.fixMinMax || [], a = n ? e.getExtent() : null, o = r.getExtent(), s = Ob(o, i, t.rawExtentResult);
	r.setExtent(s[0], s[1]), s = r.getExtent();
	var c = n ? BM(r, t) : zM(r, t), l = c.intervalPrecision, u = c.interval, d = t.userInterval;
	d != null && (c.interval = d, c.intervalPrecision = Tb(d)), i[0] || (s[0] = qs(Ps(s[0] / u) * u, l)), i[1] || (s[1] = qs(Fs(s[1] / u) * u, l)), d != null && (c.niceExtent = s.slice()), _x(e, i, o, s, a, c);
}
function zM(e, t) {
	var n = Ab(t.splitNumber, 5), r = hb(e), i = t.minInterval, a = t.maxInterval, o = uc(r / n, !0);
	i != null && o < i && (o = i), a != null && o > a && (o = a);
	var s = Tb(o), c = e.getExtent(), l = [qs(Fs(c[0] / o) * o, s), qs(Ps(c[1] / o) * o, s)];
	return {
		interval: o,
		intervalPrecision: s,
		niceExtent: l
	};
}
function BM(e, t) {
	var n = Ab(t.splitNumber, 10), r = e.getExtent(), i = hb(e), a = js(cc(i), 1);
	n / i * a <= .5 && (a *= 10);
	var o = Tb(a), s = [qs(Fs(r[0] / a) * a, o), qs(Ps(r[1] / a) * a, o)];
	return {
		intervalPrecision: o,
		interval: a,
		niceExtent: s
	};
}
function VM(e) {
	var t = e.scale, n = e.model, r = n.axis, i = n.ecModel;
	HM(t, n, r, i, null);
}
function HM(e, t, n, r, i) {
	var a = uw(e, t, r, n, i), o = bb(e) || xb(e);
	UM(e, {
		splitNumber: t.get("splitNumber"),
		fixMinMax: a.fixMM,
		userInterval: t.get("interval"),
		minInterval: o ? t.get("minInterval") : null,
		maxInterval: o ? t.get("maxInterval") : null,
		rawExtentResult: a
	}), n && r && fw(n, e, a, r);
}
function UM(e, t) {
	WM[e.type](e, t);
}
var WM = {
	interval: RM,
	log: RM,
	time: qb,
	ordinal: Re
}, GM = [[3, 1], [0, 2]], KM = function() {
	function e(e, t, n) {
		this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = PM, this._initCartesian(e, t, n), this.model = e;
	}
	return e.prototype.getRect = function() {
		return this._rect;
	}, e.prototype.update = function(e, t) {
		var n = this._axesMap;
		I(this._axesList, function(e) {
			iw(e, 1);
			var t = e.scale;
			Cb(t) && t.setSortInfo(e.model.get("categorySortInfo"));
		});
		function r(e) {
			for (var t = z(e), n = [], r = t.length - 1; r >= 0; r--) {
				var i = e[+t[r]];
				i.__alignTo ? n.push(i) : VM(i);
			}
			I(n, function(e) {
				ZM(e, e.__alignTo) ? VM(e) : LM(e, e.__alignTo.scale);
			});
		}
		r(n.x), r(n.y);
		var i = {};
		I(n.x, function(e) {
			JM(n, "y", e, i);
		}), I(n.y, function(e) {
			JM(n, "x", e, i);
		}), this.resize(this.model, t);
	}, e.prototype.resize = function(e, t, n) {
		var r = B_(e, t), i = this._rect = L_(e.getBoxLayoutParams(), r.refContainer), a = this._axesMap, o = this._coordsList, s = e.get("containLabel");
		if ($M(a, i), !n) {
			var c = rN(i, o, a, s, t), l = void 0;
			if (s) tN ? (tN(this._axesList, i), $M(a, i)) : l = nN(i.clone(), "axisLabel", null, i, a, c, r);
			else {
				var u = aN(e, i, r), d = u.outerBoundsRect, f = u.parsedOuterBoundsContain, p = u.outerBoundsClamp;
				d && (l = nN(d, f, p, i, a, c, r));
			}
			iN(i, a, Gx.determine, null, l, r), I(this._coordsList, function(e) {
				e.calcAffineTransform();
			});
		}
	}, e.prototype.getAxis = function(e, t) {
		var n = this._axesMap[e];
		if (n != null) return n[t || 0];
	}, e.prototype.getAxes = function() {
		return this._axesList.slice();
	}, e.prototype.getCartesian = function(e, t) {
		if (e != null && t != null) {
			var n = "x" + e + "y" + t;
			return this._coordsMap[n];
		}
		W(e) && (t = e.yAxisIndex, e = e.xAxisIndex);
		for (var r = 0, i = this._coordsList; r < i.length; r++) if (i[r].getAxis("x").index === e || i[r].getAxis("y").index === t) return i[r];
	}, e.prototype.getCartesians = function() {
		return this._coordsList.slice();
	}, e.prototype.convertToPixel = function(e, t, n) {
		var r = this._findConvertTarget(t);
		return r.cartesian ? r.cartesian.dataToPoint(n) : r.axis ? r.axis.toGlobalCoord(r.axis.dataToCoord(n)) : null;
	}, e.prototype.convertFromPixel = function(e, t, n) {
		var r = this._findConvertTarget(t);
		return r.cartesian ? r.cartesian.pointToData(n) : r.axis ? r.axis.coordToData(r.axis.toLocalCoord(n)) : null;
	}, e.prototype._findConvertTarget = function(e) {
		var t = e.seriesModel, n = e.xAxisModel || t && t.getReferringComponents("xAxis", $c).models[0], r = e.yAxisModel || t && t.getReferringComponents("yAxis", $c).models[0], i = e.gridModel, a = this._coordsList, o, s;
		return t ? (o = t.coordinateSystem, F(a, o) < 0 && (o = null)) : n && r ? o = this.getCartesian(n.componentIndex, r.componentIndex) : n ? s = this.getAxis("x", n.componentIndex) : r ? s = this.getAxis("y", r.componentIndex) : i && i.coordinateSystem === this && (o = this._coordsList[0]), {
			cartesian: o,
			axis: s
		};
	}, e.prototype.containPoint = function(e) {
		var t = this._coordsList[0];
		if (t) return t.containPoint(e);
	}, e.prototype._initCartesian = function(e, t, n) {
		var r = this, i = this, a = {
			left: !1,
			right: !1,
			top: !1,
			bottom: !1
		}, o = {
			x: {},
			y: {}
		}, s = {
			x: 0,
			y: 0
		};
		if (t.eachComponent("xAxis", c("x"), this), t.eachComponent("yAxis", c("y"), this), !s.x || !s.y) {
			this._axesMap = {}, this._axesList = [];
			return;
		}
		this._axesMap = o, I(o.x, function(t, n) {
			I(o.y, function(i, a) {
				var o = "x" + n + "y" + a, s = new IM(o);
				s.master = r, s.model = e, r._coordsMap[o] = s, r._coordsList.push(s), s.addAxis(t), s.addAxis(i);
			});
		}), XM(o.x), XM(o.y);
		function c(t) {
			return function(n, r) {
				if (qM(n, e)) {
					var c = n.get("position");
					t === "x" ? c !== "top" && c !== "bottom" && (c = a.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = a.left ? "right" : "left"), a[c] = !0;
					var l = rx(n), u = new WS(t, ix(n, l, !0), [0, 0], l, c);
					u.onBand = yx(u.scale, n), u.inverse = n.get("inverse"), n.axis = u, u.model = n, u.grid = i, u.index = r, i._axesList.push(u), o[t][r] = u, s[t]++;
				}
			};
		}
	}, e.prototype.getTooltipAxes = function(e) {
		var t = [], n = [];
		return I(this.getCartesians(), function(r) {
			var i = e != null && e !== "auto" ? r.getAxis(e) : r.getBaseAxis(), a = r.getOtherAxis(i);
			F(t, i) < 0 && t.push(i), F(n, a) < 0 && n.push(a);
		}), {
			baseAxes: t,
			otherAxes: n
		};
	}, e.create = function(t, n) {
		var r = [];
		return t.eachComponent("grid", function(i, a) {
			var o = new e(i, t, n);
			o.name = "grid_" + a, o.resize(i, n, !0), i.coordinateSystem = o, r.push(o), I(o._axesList, function(t) {
				rw(t, e.dimIdxMap);
			});
		}), t.eachSeries(function(e) {
			var t, n;
			Rh({
				targetModel: e,
				coordSysType: Cw,
				coordSysProvider: r
			});
			function r() {
				var r = KC(e), i = r.xAxisModel, a = r.yAxisModel;
				return t = i.axis, n = a.axis, i.getCoordSysModel().coordinateSystem.getCartesian(i.componentIndex, a.componentIndex);
			}
			t && n && (MS(t, e, Cw), MS(n, e, Cw));
		}, this), r;
	}, e.dimensions = PM, e.dimIdxMap = ch(PM), e;
}();
function qM(e, t) {
	return e.getCoordSysModel() === t;
}
function JM(e, t, n, r) {
	n.getAxesOnZeroOf = function() {
		return a ? [a] : [];
	};
	var i = e[t], a, o = n.model, s = o.get(["axisLine", "onZero"]), c = o.get(["axisLine", "onZeroAxisIndex"]);
	if (!s) return;
	if (c != null) YM(s, i[c]) && (a = i[c]);
	else for (var l in i) if (q(i, l) && YM(s, i[l]) && !r[u(i[l])]) {
		a = i[l];
		break;
	}
	a && (r[u(a)] = !0);
	function u(e) {
		return e.dim + "_" + e.index;
	}
}
function YM(e, t) {
	if (!t) return !1;
	var n = t.scale, r = ax(n, 0, !1), i = t && t.type !== "category" && t.type !== "time" && r !== 3;
	return i && e === "auto" && sx(t) && (i = !1), i;
}
function XM(e) {
	for (var t = z(e), n, r = [], i = t.length - 1; i >= 0; i--) {
		var a = e[+t[i]];
		yb(a.scale) && hx(a.model, a.type, !0) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? r.push(a) : n = a);
	}
	n ||= r.pop(), n && I(r, function(e) {
		e.__alignTo = n;
	});
}
function ZM(e, t) {
	return Ng(e.scale) || Ng(t.scale) || t.scale.getTicks().length < 2;
}
function QM(e, t) {
	var n = e.getExtent(), r = n[0] + n[1];
	e.toGlobalCoord = e.dim === "x" ? function(e) {
		return e + t;
	} : function(e) {
		return r - e + t;
	}, e.toLocalCoord = e.dim === "x" ? function(e) {
		return e - t;
	} : function(e) {
		return r - e + t;
	};
}
function $M(e, t) {
	I(e.x, function(e) {
		return eN(e, t.x, t.width);
	}), I(e.y, function(e) {
		return eN(e, t.y, t.height);
	});
}
function eN(e, t, n) {
	var r = [0, n], i = +!!e.inverse;
	e.setExtent(r[i], r[1 - i]), QM(e, t);
}
var tN;
function nN(e, t, n, r, i, a, o) {
	iN(r, i, Gx.estimate, t, !1, o);
	var s = [
		0,
		0,
		0,
		0
	];
	l(0), l(1), u(r, 0, NaN), u(r, 1, NaN);
	var c = ue(s, function(e) {
		return e > 0;
	}) == null;
	return np(r, s, !0, !0, n), $M(i, r), c;
	function l(e) {
		I(i[Of[e]], function(t) {
			if (mx(t.model)) {
				var n = a.ensureRecord(t.model), r = n.labelInfoList;
				if (r) for (var i = 0; i < r.length; i++) {
					var o = r[i], s = t.scale.normalize(vx(t.scale, mC(o.label).labelInfo.tick));
					s = e === 1 ? 1 - s : s, u(o.rect, e, s), u(o.rect, 1 - e, NaN);
				}
				var c = n.nameLayout;
				if (c) {
					var s = px(n.nameLocation) ? .5 : NaN;
					u(c.rect, e, s), u(c.rect, 1 - e, NaN);
				}
			}
		});
	}
	function u(t, n, r) {
		var i = e[Of[n]] - t[Of[n]], a = t[kf[n]] + t[Of[n]] - (e[kf[n]] + e[Of[n]]);
		i = d(i, 1 - r), a = d(a, r);
		var o = GM[n][0], c = GM[n][1];
		s[o] = js(s[o], i), s[c] = js(s[c], a);
	}
	function d(e, t) {
		return e > 0 && !xe(t) && t > 1e-4 && (e /= t), e;
	}
}
function rN(e, t, n, r, i) {
	var a = new gC(oN);
	return I(n, function(n) {
		return I(n, function(n) {
			if (mx(n.model)) {
				var o = !r;
				n.axisBuilder = qC(e, t, n.model, i, a, o);
			}
		});
	}), a;
}
function iN(e, t, n, r, i, a) {
	var o = n === Gx.determine;
	I(t, function(t) {
		return I(t, function(t) {
			mx(t.model) && (JC(t.axisBuilder, e, t.model), t.axisBuilder.build(o ? { axisTickLabelDetermine: !0 } : { axisTickLabelEstimate: !0 }, { noPxChange: i }));
		});
	});
	var s = {
		x: 0,
		y: 0
	};
	c(0), c(1);
	function c(t) {
		s[Of[1 - t]] = e[kf[t]] <= a.refContainer[kf[t]] * .5 ? 0 : 1 - t == 1 ? 2 : 1;
	}
	I(t, function(e, t) {
		return I(e, function(e) {
			mx(e.model) && ((r === "all" || o) && e.axisBuilder.build({ axisName: !0 }, { nameMarginLevel: s[t] }), o && e.axisBuilder.build({ axisLine: !0 }));
		});
	});
}
function aN(e, t, n) {
	var r, i = e.get("outerBoundsMode", !0);
	i === "same" ? r = t.clone() : (i == null || i === "auto") && (r = L_(e.get("outerBounds", !0) || xw, n.refContainer));
	var a = e.get("outerBoundsContain", !0), o = a == null || a === "auto" || F(["all", "axisLabel"], a) < 0 ? "all" : a, s = [Ws(G(e.get("outerBoundsClampWidth", !0), Sw[0]), t.width), Ws(G(e.get("outerBoundsClampHeight", !0), Sw[1]), t.height)];
	return {
		outerBoundsRect: r,
		parsedOuterBoundsContain: o,
		outerBoundsClamp: s
	};
}
var oN = function(e, t, n, r, i, a) {
	var o = n.axis.dim === "x" ? "y" : "x";
	bC(e, t, n, r, i, a), px(e.nameLocation) || I(t.recordMap[o], function(e) {
		e && e.labelInfoList && e.dirVec && SC(e.labelInfoList, e.dirVec, r, i);
	});
};
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/modelHelper.js
function sN(e, t) {
	var n = {
		axesInfo: {},
		seriesInvolved: !1,
		coordSysAxesInfo: {},
		coordSysMap: {}
	};
	return cN(n, e, t), n.seriesInvolved && uN(n, e), n;
}
function cN(e, t, n) {
	var r = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
	I(n.getCoordinateSystems(), function(n) {
		if (!n.axisPointerEnabled) return;
		var s = _N(n.model), c = e.coordSysAxesInfo[s] = {};
		e.coordSysMap[s] = n;
		var l = n.model.getModel("tooltip", r);
		if (I(n.getAxes(), fe(p, !1, null)), n.getTooltipAxes && r && l.get("show")) {
			var u = l.get("trigger") === "axis", d = l.get(["axisPointer", "type"]) === "cross", f = n.getTooltipAxes(l.get(["axisPointer", "axis"]));
			(u || d) && I(f.baseAxes, fe(p, !d || "cross", u)), d && I(f.otherAxes, fe(p, "cross", !1));
		}
		function p(r, s, u) {
			var d = u.model.getModel("axisPointer", i), f = d.get("show");
			if (f && (f !== "auto" || r || gN(d))) {
				s ??= d.get("triggerTooltip"), d = r ? lN(u, l, i, t, r, s) : d;
				var p = d.get("snap"), m = d.get("triggerEmphasis"), h = _N(u.model), g = s || p || u.type === "category", _ = e.axesInfo[h] = {
					key: h,
					axis: u,
					coordSys: n,
					axisPointerModel: d,
					triggerTooltip: s,
					triggerEmphasis: m,
					involveSeries: g,
					snap: p,
					useHandle: gN(d),
					seriesModels: [],
					linkGroup: null
				};
				c[h] = _, e.seriesInvolved = e.seriesInvolved || g;
				var v = dN(a, u);
				if (v != null) {
					var y = o[v] || (o[v] = { axesInfo: {} });
					y.axesInfo[h] = _, y.mapper = a[v].mapper, _.linkGroup = y;
				}
			}
		}
	});
}
function lN(e, t, n, r, i, a) {
	var o = t.getModel("axisPointer"), s = [
		"type",
		"snap",
		"lineStyle",
		"shadowStyle",
		"label",
		"animation",
		"animationDurationUpdate",
		"animationEasingUpdate",
		"z"
	], c = {};
	I(s, function(e) {
		c[e] = j(o.get(e));
	}), c.snap = e.type !== "category" && !!a, o.get("type") === "cross" && (c.type = "line");
	var l = c.label ||= {};
	if (l.show ??= !1, i === "cross" && (l.show = o.get(["label", "show"]) ?? !0, !a)) {
		var u = c.lineStyle = o.get("crossStyle");
		u && P(l, u.textStyle);
	}
	return e.model.getModel("axisPointer", new Jp(c, n, r));
}
function uN(e, t) {
	t.eachSeries(function(t) {
		var n = t.coordinateSystem, r = t.get(["tooltip", "trigger"], !0), i = t.get(["tooltip", "show"], !0);
		n && n.model && r !== "none" && r !== !1 && r !== "item" && i !== !1 && t.get(["axisPointer", "show"], !0) !== !1 && I(e.coordSysAxesInfo[_N(n.model)], function(e) {
			var r = e.axis;
			n.getAxis(r.dim) === r && (e.seriesModels.push(t), e.seriesDataCount ??= 0, e.seriesDataCount += t.getData().count());
		});
	});
}
function dN(e, t) {
	for (var n = t.model, r = t.dim, i = 0; i < e.length; i++) {
		var a = e[i] || {};
		if (fN(a[r + "AxisId"], n.id) || fN(a[r + "AxisIndex"], n.componentIndex) || fN(a[r + "AxisName"], n.name)) return i;
	}
}
function fN(e, t) {
	return e === "all" || V(e) && F(e, t) >= 0 || e === t;
}
function pN(e) {
	var t = mN(e);
	if (t) {
		var n = t.axisPointerModel, r = t.axis.scale, i = n.option, a = n.get("status"), o = n.get("value");
		o != null && (o = r.parse(o));
		var s = gN(n);
		a ?? (i.status = s ? "show" : "hide");
		var c = r.getExtent();
		(o == null || o > c[1]) && (o = c[1]), o < c[0] && (o = c[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
	}
}
function mN(e) {
	var t = (e.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
	return t && t.axesInfo[_N(e)];
}
function hN(e) {
	var t = mN(e);
	return t && t.axisPointerModel;
}
function gN(e) {
	return !!e.get(["handle", "show"]);
}
function _N(e) {
	return e.type + "||" + e.id;
}
//#endregion
//#region node_modules/echarts/lib/component/axis/AxisView.js
var vN = {}, yN = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(t, n, r, i) {
		this.axisPointerClass && pN(t), e.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(t, r, !0);
	}, t.prototype.updateAxisPointer = function(e, t, n, r) {
		this._doUpdateAxisPointerClass(e, n, !1);
	}, t.prototype.remove = function(e, t) {
		var n = this._axisPointer;
		n && n.remove(t);
	}, t.prototype.dispose = function(t, n) {
		this._disposeAxisPointer(n), e.prototype.dispose.apply(this, arguments);
	}, t.prototype._doUpdateAxisPointerClass = function(e, n, r) {
		var i = t.getAxisPointerClass(this.axisPointerClass);
		if (i) {
			var a = hN(e);
			a ? (this._axisPointer ||= new i()).render(e, a, n, r) : this._disposeAxisPointer(n);
		}
	}, t.prototype._disposeAxisPointer = function(e) {
		this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
	}, t.registerAxisPointerClass = function(e, t) {
		vN[e] = t;
	}, t.getAxisPointerClass = function(e) {
		return e && vN[e];
	}, t.type = "axis", t;
}(UO), bN = Yc();
function xN(e, t, n, r) {
	var i = n.axis;
	if (!i.scale.isBlank()) {
		var a = n.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), c = r.coordinateSystem.getRect(), l = i.getTicksCoords({
			tickModel: a,
			breakTicks: "none",
			pruneByBreak: "preserve_extent_bound"
		});
		if (l.length) {
			var u = s.length, d = bN(e).splitAreaColors, f = K(), p = 0;
			if (d) for (var m = 0; m < l.length; m++) {
				var h = d.get(l[m].tickValue);
				if (h != null) {
					p = (h + (u - 1) * m) % u;
					break;
				}
			}
			var g = i.toGlobalCoord(l[0].coord), _ = o.getAreaStyle();
			s = V(s) ? s : [s];
			for (var m = 1; m < l.length; m++) {
				var v = i.toGlobalCoord(l[m].coord), y = void 0, b = void 0, x = void 0, S = void 0;
				i.isHorizontal() ? (y = g, b = c.y, x = v - y, S = c.height, g = y + x) : (y = c.x, b = g, x = c.width, S = v - b, g = b + S);
				var C = l[m - 1].tickValue;
				C != null && f.set(C, p), t.add(new cs({
					anid: C == null ? null : "area_" + C,
					shape: {
						x: y,
						y: b,
						width: x,
						height: S
					},
					style: P({ fill: s[p] }, _),
					autoBatch: !0,
					silent: !0
				})), p = (p + 1) % u;
			}
			bN(e).splitAreaColors = f;
		}
	}
}
function SN(e) {
	bN(e).splitAreaColors = null;
}
//#endregion
//#region node_modules/echarts/lib/component/axis/CartesianAxisView.js
var CN = [
	"splitArea",
	"splitLine",
	"minorSplitLine",
	"breakArea"
], wN = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.axisPointerClass = "CartesianAxisPointer", n;
	}
	return t.prototype.render = function(t, n, r, i) {
		this.group.removeAll();
		var a = this._axisGroup;
		this._axisGroup = new hd(), this.group.add(this._axisGroup), mx(t) && (this._axisGroup.add(t.axis.axisBuilder.group), I(CN, function(e) {
			t.get([e, "show"]) && TN[e](this, this._axisGroup, t, t.getCoordSysModel(), r);
		}, this), i && i.type === "changeAxisOrder" && i.isInitSort || Jf(a, this._axisGroup, t), e.prototype.render.call(this, t, n, r, i));
	}, t.prototype.remove = function() {
		SN(this);
	}, t.type = "cartesianAxis", t;
}(yN), TN = {
	splitLine: function(e, t, n, r, i) {
		var a = n.axis;
		if (!a.scale.isBlank()) {
			var o = n.getModel("splitLine"), s = o.getModel("lineStyle"), c = s.get("color"), l = o.get("showMinLine") !== !1, u = o.get("showMaxLine") !== !1;
			c = V(c) ? c : [c];
			for (var d = r.coordinateSystem.getRect(), f = a.isHorizontal(), p = 0, m = a.getTicksCoords({
				tickModel: o,
				breakTicks: "none",
				pruneByBreak: "preserve_extent_bound"
			}), h = [], g = [], _ = s.getLineStyle(), v = 0; v < m.length; v++) {
				var y = a.toGlobalCoord(m[v].coord);
				if (!(v === 0 && !l || v === m.length - 1 && !u)) {
					var b = m[v].tickValue;
					f ? (h[0] = y, h[1] = d.y, g[0] = y, g[1] = d.y + d.height) : (h[0] = d.x, h[1] = y, g[0] = d.x + d.width, g[1] = y);
					var x = p++ % c.length, S = new qd({
						anid: b == null ? null : "line_" + b,
						autoBatch: !0,
						shape: {
							x1: h[0],
							y1: h[1],
							x2: g[0],
							y2: g[1]
						},
						style: P({ stroke: c[x] }, _),
						silent: !0
					});
					Bf(S.shape, _.lineWidth), t.add(S);
				}
			}
		}
	},
	minorSplitLine: function(e, t, n, r, i) {
		var a = n.axis, o = n.getModel("minorSplitLine").getModel("lineStyle"), s = r.coordinateSystem.getRect(), c = a.isHorizontal(), l = a.getMinorTicksCoords();
		if (l.length) for (var u = [], d = [], f = o.getLineStyle(), p = 0; p < l.length; p++) for (var m = 0; m < l[p].length; m++) {
			var h = a.toGlobalCoord(l[p][m].coord);
			c ? (u[0] = h, u[1] = s.y, d[0] = h, d[1] = s.y + s.height) : (u[0] = s.x, u[1] = h, d[0] = s.x + s.width, d[1] = h);
			var g = new qd({
				anid: "minor_line_" + l[p][m].tickValue,
				autoBatch: !0,
				shape: {
					x1: u[0],
					y1: u[1],
					x2: d[0],
					y2: d[1]
				},
				style: f,
				silent: !0
			});
			Bf(g.shape, f.lineWidth), t.add(g);
		}
	},
	splitArea: function(e, t, n, r, i) {
		xN(e, t, n, r);
	},
	breakArea: function(e, t, n, r, i) {
		var a = lC(), o = n.axis.scale;
		a && o.type !== "ordinal" && a.rectCoordBuildBreakAxis(t, e, n, r.coordinateSystem.getRect(), i);
	}
}, EN = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "xAxis", t;
}(wN), DN = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = EN.type, t;
	}
	return t.type = "yAxis", t;
}(wN), ON = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "grid", t;
	}
	return t.prototype.render = function(e, t) {
		this.group.removeAll(), e.get("show") && this.group.add(new cs({
			shape: e.coordinateSystem.getRect(),
			style: P({ fill: e.get("backgroundColor") }, e.getItemStyle()),
			silent: !0,
			z2: -1
		}));
	}, t.type = "grid", t;
}(UO), kN = { offset: 0 };
function AN(e) {
	e.registerComponentView(ON), e.registerComponentModel(ww), e.registerCoordinateSystem("cartesian2d", KM), jM(e, "x", EM, kN), jM(e, "y", EM, kN), e.registerComponentView(EN), e.registerComponentView(DN), e.registerPreprocessor(function(e) {
		e.xAxis && e.yAxis && !e.grid && (e.grid = {});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/helper/interactionMutex.js
var jN = Yc();
function MN(e, t) {
	return !!jN(e)[t];
}
sM({
	type: "takeGlobalCursor",
	event: "globalCursorTaken",
	update: "update"
}, Re);
//#endregion
//#region node_modules/echarts/lib/component/helper/cursorHelper.js
var NN = {
	axisPointer: 1,
	tooltip: 1,
	brush: 1
};
function PN(e, t, n) {
	var r = t.getComponentByElement(e.topTarget);
	if (!r || r === n || NN.hasOwnProperty(r.mainType)) return !1;
	var i = r.coordinateSystem;
	if (!i || i.model === n) return !1;
	var a = fp(r), o = fp(n);
	return !((a.zlevel - o.zlevel || a.z - o.z) <= 0);
}
//#endregion
//#region node_modules/echarts/lib/component/helper/RoamController.js
var FN = function(e) {
	l(t, e);
	function t(t) {
		var n = e.call(this) || this;
		n._zr = t;
		var r = B(n._mousedownHandler, n), i = B(n._mousemoveHandler, n), a = B(n._mouseupHandler, n), o = B(n._mousewheelHandler, n), s = B(n._pinchHandler, n);
		return n.enable = function(e, n) {
			var c = n.zInfo, l = fp(c.component), u = l.z, d = l.zlevel, f = {
				component: c.component,
				z: u,
				zlevel: d,
				z2: G(c.z2, -Infinity)
			}, p = N({}, n.triggerInfo);
			this._opt = P(N({}, n), {
				zoomOnMouseWheel: !0,
				moveOnMouseMove: !0,
				moveOnMouseWheel: !1,
				preventDefaultMouseMove: !0,
				zInfoParsed: f,
				triggerInfo: p,
				cursorGrab: "grab",
				cursorGrabbing: "grabbing"
			}), e ??= !0, (!this._enabled || this._controlType !== e) && (this.disable(), this._enabled = !0, (e === !0 || e === "move" || e === "pan") && (zN(t, "mousedown", r, f), zN(t, "mousemove", i, f), zN(t, "mouseup", a, f)), (e === !0 || e === "scale" || e === "zoom") && (zN(t, "mousewheel", o, f), zN(t, "pinch", s, f)));
		}, n.disable = function() {
			this._enabled && (this._enabled = !1, BN(t, "mousedown", r), BN(t, "mousemove", i), BN(t, "mouseup", a), BN(t, "mousewheel", o), BN(t, "pinch", s));
		}, n;
	}
	return t.prototype.isDragging = function() {
		return this._dragging;
	}, t.prototype.isPinching = function() {
		return this._pinching;
	}, t.prototype._checkPointer = function(e, t, n) {
		var r = this._opt, i = r.zInfoParsed;
		if (PN(e, r.api, i.component)) return !1;
		var a = r.triggerInfo, o = a.roamTrigger, s = !1;
		return o === "global" && (s = !0), s ||= a.isInSelf(e, t, n), s && a.isInClip && !a.isInClip(e, t, n) && (s = !1), s;
	}, t.prototype._decideCursorStyle = function(e, t, n, r) {
		var i = e.target;
		if (!i && this._checkPointer(e, t, n)) return this._opt.cursorGrab;
		if (r) return i && i.cursor || "default";
	}, t.prototype.dispose = function() {
		this.disable();
	}, t.prototype._mousedownHandler = function(e) {
		if (!(NE(e) || IN(e))) {
			for (var t = e.target; t;) {
				if (t.draggable) return;
				t = t.__hostTarget || t.parent;
			}
			var n = e.offsetX, r = e.offsetY;
			this._checkPointer(e, n, r) && (this._x = n, this._y = r, this._dragging = !0);
		}
	}, t.prototype._mousemoveHandler = function(e) {
		var t = this._zr;
		if (!(e.gestureEvent === "pinch" || MN(t, "globalPan") || IN(e))) {
			var n = e.offsetX, r = e.offsetY;
			if (!this._dragging || !WN("moveOnMouseMove", e, this._opt)) {
				var i = this._decideCursorStyle(e, n, r, !1);
				i && t.setCursorStyle(i);
				return;
			}
			t.setCursorStyle(this._opt.cursorGrabbing);
			var a = this._x, o = this._y, s = n - a, c = r - o;
			this._x = n, this._y = r, this._opt.preventDefaultMouseMove && ME(e.event), e.__ecRoamConsumed = !0, UN(this, "pan", "moveOnMouseMove", e, {
				dx: s,
				dy: c,
				oldX: a,
				oldY: o,
				newX: n,
				newY: r,
				isAvailableBehavior: null
			});
		}
	}, t.prototype._mouseupHandler = function(e) {
		if (!IN(e)) {
			var t = this._zr;
			if (!NE(e)) {
				this._dragging = !1;
				var n = this._decideCursorStyle(e, e.offsetX, e.offsetY, !0);
				n && t.setCursorStyle(n);
			}
		}
	}, t.prototype._mousewheelHandler = function(e) {
		if (!IN(e)) {
			var t = WN("zoomOnMouseWheel", e, this._opt), n = WN("moveOnMouseWheel", e, this._opt), r = e.wheelDelta, i = Math.abs(r), a = e.offsetX, o = e.offsetY;
			if (r !== 0 && (t || n)) {
				if (t) {
					var s = i > 3 ? 1.4 : i > 1 ? 1.2 : 1.1, c = r > 0 ? s : 1 / s;
					this._checkTriggerMoveZoom(this, "zoom", "zoomOnMouseWheel", e, {
						scale: c,
						originX: a,
						originY: o,
						isAvailableBehavior: null
					});
				}
				if (n) {
					var l = Math.abs(r), u = (r > 0 ? 1 : -1) * (l > 3 ? .4 : l > 1 ? .15 : .05);
					this._checkTriggerMoveZoom(this, "scrollMove", "moveOnMouseWheel", e, {
						scrollDelta: u,
						originX: a,
						originY: o,
						isAvailableBehavior: null
					});
				}
			}
		}
	}, t.prototype._pinchHandler = function(e) {
		if (!(MN(this._zr, "globalPan") || IN(e))) {
			var t = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
			this._checkTriggerMoveZoom(this, "zoom", null, e, {
				scale: t,
				originX: e.pinchX,
				originY: e.pinchY,
				isAvailableBehavior: null
			});
		}
	}, t.prototype._checkTriggerMoveZoom = function(e, t, n, r, i) {
		e._checkPointer(r, i.originX, i.originY) && (ME(r.event), r.__ecRoamConsumed = !0, UN(e, t, n, r, i));
	}, t;
}(da);
function IN(e) {
	return e.__ecRoamConsumed;
}
var LN = Yc();
function RN(e) {
	var t = LN(e);
	return t.roam = t.roam || {}, t.uniform = t.uniform || {}, t;
}
function zN(e, t, n, r) {
	for (var i = RN(e).roam, a = i[t] = i[t] || [], o = 0; o < a.length; o++) {
		var s = a[o].zInfoParsed;
		if ((s.zlevel - r.zlevel || s.z - r.z || s.z2 - r.z2) <= 0) break;
	}
	a.splice(o, 0, {
		listener: n,
		zInfoParsed: r
	}), VN(e, t);
}
function BN(e, t, n) {
	for (var r = RN(e).roam[t] || [], i = 0; i < r.length; i++) if (r[i].listener === n) {
		r.splice(i, 1), r.length || HN(e, t);
		return;
	}
}
function VN(e, t) {
	var n = RN(e);
	n.uniform[t] || e.on(t, n.uniform[t] = function(e) {
		var r = n.roam[t];
		if (r) for (var i = 0; i < r.length; i++) r[i].listener(e);
	});
}
function HN(e, t) {
	var n = RN(e).uniform;
	n[t] && (e.off(t, n[t]), n[t] = null);
}
function UN(e, t, n, r, i) {
	i.isAvailableBehavior = B(WN, null, n, r), e.trigger(t, i);
}
function WN(e, t, n) {
	var r = n[e];
	return !e || r && (!U(r) || t.event[r + "Key"]);
}
//#endregion
//#region node_modules/zrender/lib/tool/parseXML.js
function GN(e) {
	U(e) && (e = new DOMParser().parseFromString(e, "text/xml"));
	var t = e;
	for (t.nodeType === 9 && (t = t.firstChild); t.nodeName.toLowerCase() !== "svg" || t.nodeType !== 1;) t = t.nextSibling;
	return t;
}
//#endregion
//#region node_modules/zrender/lib/tool/parseSVG.js
var KN, qN = {
	fill: "fill",
	stroke: "stroke",
	"stroke-width": "lineWidth",
	opacity: "opacity",
	"fill-opacity": "fillOpacity",
	"stroke-opacity": "strokeOpacity",
	"stroke-dasharray": "lineDash",
	"stroke-dashoffset": "lineDashOffset",
	"stroke-linecap": "lineCap",
	"stroke-linejoin": "lineJoin",
	"stroke-miterlimit": "miterLimit",
	"font-family": "fontFamily",
	"font-size": "fontSize",
	"font-style": "fontStyle",
	"font-weight": "fontWeight",
	"text-anchor": "textAlign",
	visibility: "visibility",
	display: "display"
}, JN = z(qN), YN = {
	"alignment-baseline": "textBaseline",
	"stop-color": "stopColor"
}, XN = z(YN), ZN = function() {
	function e() {
		this._defs = {}, this._root = null;
	}
	return e.prototype.parse = function(e, t) {
		t ||= {};
		var n = GN(e);
		this._defsUsePending = [];
		var r = new hd();
		this._root = r;
		var i = [], a = n.getAttribute("viewBox") || "", o = parseFloat(n.getAttribute("width") || t.width), s = parseFloat(n.getAttribute("height") || t.height);
		isNaN(o) && (o = null), isNaN(s) && (s = null), rP(n, r, null, !0, !1);
		for (var c = n.firstChild; c;) this._parseNode(c, r, i, null, !1, !1), c = c.nextSibling;
		sP(this._defs, this._defsUsePending), this._defsUsePending = [];
		var l, u;
		if (a) {
			var d = lP(a);
			d.length >= 4 && (l = {
				x: parseFloat(d[0] || 0),
				y: parseFloat(d[1] || 0),
				width: parseFloat(d[2]),
				height: parseFloat(d[3])
			});
		}
		if (l && o != null && s != null && (u = gP(l, {
			x: 0,
			y: 0,
			width: o,
			height: s
		}), !t.ignoreViewBox)) {
			var f = r;
			r = new hd(), r.add(f), f.scaleX = f.scaleY = u.scale, f.x = u.x, f.y = u.y;
		}
		return !t.ignoreRootClip && o != null && s != null && r.setClipPath(new cs({ shape: {
			x: 0,
			y: 0,
			width: o,
			height: s
		} })), {
			root: r,
			width: o,
			height: s,
			viewBoxRect: l,
			viewBoxTransform: u,
			named: i
		};
	}, e.prototype._parseNode = function(e, t, n, r, i, a) {
		var o = e.nodeName.toLowerCase(), s, c = r;
		if (o === "defs" && (i = !0), o === "text" && (a = !0), o === "defs" || o === "switch") s = t;
		else {
			if (!i) {
				var l = KN[o];
				if (l && q(KN, o)) {
					s = l.call(this, e, t);
					var u = e.getAttribute("name");
					if (u) {
						var d = {
							name: u,
							namedFrom: null,
							svgNodeTagLower: o,
							el: s
						};
						n.push(d), o === "g" && (c = d);
					} else r && n.push({
						name: r.name,
						namedFrom: r,
						svgNodeTagLower: o,
						el: s
					});
					t.add(s);
				}
			}
			var f = QN[o];
			if (f && q(QN, o)) {
				var p = f.call(this, e), m = e.getAttribute("id");
				m && (this._defs[m] = p);
			}
		}
		if (s && s.isGroup) for (var h = e.firstChild; h;) h.nodeType === 1 ? this._parseNode(h, s, n, c, i, a) : h.nodeType === 3 && a && this._parseText(h, s), h = h.nextSibling;
	}, e.prototype._parseText = function(e, t) {
		var n = new Xo({
			style: { text: e.textContent },
			silent: !0,
			x: this._textX || 0,
			y: this._textY || 0
		});
		tP(t, n), rP(e, n, this._defsUsePending, !1, !1), iP(n, t);
		var r = n.style, i = r.fontSize;
		i && i < 9 && (r.fontSize = 9, n.scaleX *= i / 9, n.scaleY *= i / 9), r.font = (r.fontSize || r.fontFamily) && [
			r.fontStyle,
			r.fontWeight,
			(r.fontSize || 12) + "px",
			r.fontFamily || "sans-serif"
		].join(" ");
		var a = n.getBoundingRect();
		return this._textX += a.width, t.add(n), n;
	}, e.internalField = (function() {
		KN = {
			g: function(e, t) {
				var n = new hd();
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n;
			},
			rect: function(e, t) {
				var n = new cs();
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n.setShape({
					x: parseFloat(e.getAttribute("x") || "0"),
					y: parseFloat(e.getAttribute("y") || "0"),
					width: parseFloat(e.getAttribute("width") || "0"),
					height: parseFloat(e.getAttribute("height") || "0")
				}), n.silent = !0, n;
			},
			circle: function(e, t) {
				var n = new _d();
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n.setShape({
					cx: parseFloat(e.getAttribute("cx") || "0"),
					cy: parseFloat(e.getAttribute("cy") || "0"),
					r: parseFloat(e.getAttribute("r") || "0")
				}), n.silent = !0, n;
			},
			line: function(e, t) {
				var n = new qd();
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n.setShape({
					x1: parseFloat(e.getAttribute("x1") || "0"),
					y1: parseFloat(e.getAttribute("y1") || "0"),
					x2: parseFloat(e.getAttribute("x2") || "0"),
					y2: parseFloat(e.getAttribute("y2") || "0")
				}), n.silent = !0, n;
			},
			ellipse: function(e, t) {
				var n = new yd();
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n.setShape({
					cx: parseFloat(e.getAttribute("cx") || "0"),
					cy: parseFloat(e.getAttribute("cy") || "0"),
					rx: parseFloat(e.getAttribute("rx") || "0"),
					ry: parseFloat(e.getAttribute("ry") || "0")
				}), n.silent = !0, n;
			},
			polygon: function(e, t) {
				var n = e.getAttribute("points"), r;
				n && (r = nP(n));
				var i = new Hd({
					shape: { points: r || [] },
					silent: !0
				});
				return tP(t, i), rP(e, i, this._defsUsePending, !1, !1), i;
			},
			polyline: function(e, t) {
				var n = e.getAttribute("points"), r;
				n && (r = nP(n));
				var i = new Wd({
					shape: { points: r || [] },
					silent: !0
				});
				return tP(t, i), rP(e, i, this._defsUsePending, !1, !1), i;
			},
			image: function(e, t) {
				var n = new es();
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n.setStyle({
					image: e.getAttribute("xlink:href") || e.getAttribute("href"),
					x: +e.getAttribute("x"),
					y: +e.getAttribute("y"),
					width: +e.getAttribute("width"),
					height: +e.getAttribute("height")
				}), n.silent = !0, n;
			},
			text: function(e, t) {
				var n = e.getAttribute("x") || "0", r = e.getAttribute("y") || "0", i = e.getAttribute("dx") || "0", a = e.getAttribute("dy") || "0";
				this._textX = parseFloat(n) + parseFloat(i), this._textY = parseFloat(r) + parseFloat(a);
				var o = new hd();
				return tP(t, o), rP(e, o, this._defsUsePending, !1, !0), o;
			},
			tspan: function(e, t) {
				var n = e.getAttribute("x"), r = e.getAttribute("y");
				n != null && (this._textX = parseFloat(n)), r != null && (this._textY = parseFloat(r));
				var i = e.getAttribute("dx") || "0", a = e.getAttribute("dy") || "0", o = new hd();
				return tP(t, o), rP(e, o, this._defsUsePending, !1, !0), this._textX += parseFloat(i), this._textY += parseFloat(a), o;
			},
			path: function(e, t) {
				var n = fd(e.getAttribute("d") || "");
				return tP(t, n), rP(e, n, this._defsUsePending, !1, !1), n.silent = !0, n;
			}
		};
	})(), e;
}(), QN = {
	lineargradient: function(e) {
		var t = new nf(parseInt(e.getAttribute("x1") || "0", 10), parseInt(e.getAttribute("y1") || "0", 10), parseInt(e.getAttribute("x2") || "10", 10), parseInt(e.getAttribute("y2") || "0", 10));
		return $N(e, t), eP(e, t), t;
	},
	radialgradient: function(e) {
		var t = new rf(parseInt(e.getAttribute("cx") || "0", 10), parseInt(e.getAttribute("cy") || "0", 10), parseInt(e.getAttribute("r") || "0", 10));
		return $N(e, t), eP(e, t), t;
	}
};
function $N(e, t) {
	e.getAttribute("gradientUnits") === "userSpaceOnUse" && (t.global = !0);
}
function eP(e, t) {
	for (var n = e.firstChild; n;) {
		if (n.nodeType === 1 && n.nodeName.toLocaleLowerCase() === "stop") {
			var r = n.getAttribute("offset"), i = void 0;
			i = r && r.indexOf("%") > 0 ? parseInt(r, 10) / 100 : r ? parseFloat(r) : 0;
			var a = {};
			mP(n, a, a);
			var o = a.stopColor || n.getAttribute("stop-color") || "#000000", s = a.stopOpacity || n.getAttribute("stop-opacity");
			if (s) {
				var c = ai(o);
				c && c[3] && (c[3] *= Zr(s), o = gi(c, "rgba"));
			}
			t.colorStops.push({
				offset: i,
				color: o
			});
		}
		n = n.nextSibling;
	}
}
function tP(e, t) {
	e && e.__inheritedStyle && (t.__inheritedStyle ||= {}, P(t.__inheritedStyle, e.__inheritedStyle));
}
function nP(e) {
	for (var t = lP(e), n = [], r = 0; r < t.length; r += 2) {
		var i = parseFloat(t[r]), a = parseFloat(t[r + 1]);
		n.push([i, a]);
	}
	return n;
}
function rP(e, t, n, r, i) {
	var a = t, o = a.__inheritedStyle = a.__inheritedStyle || {}, s = {};
	e.nodeType === 1 && (fP(e, t), mP(e, o, s), r || hP(e, o, s)), a.style = a.style || {}, o.fill != null && (a.style.fill = oP(a, "fill", o.fill, n)), o.stroke != null && (a.style.stroke = oP(a, "stroke", o.stroke, n)), I([
		"lineWidth",
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"miterLimit",
		"fontSize"
	], function(e) {
		o[e] != null && (a.style[e] = parseFloat(o[e]));
	}), I([
		"lineDashOffset",
		"lineCap",
		"lineJoin",
		"fontWeight",
		"fontFamily",
		"fontStyle",
		"textAlign"
	], function(e) {
		o[e] != null && (a.style[e] = o[e]);
	}), i && (a.__selfStyle = s), o.lineDash && (a.style.lineDash = L(lP(o.lineDash), function(e) {
		return parseFloat(e);
	})), (o.visibility === "hidden" || o.visibility === "collapse") && (a.invisible = !0), o.display === "none" && (a.ignore = !0);
}
function iP(e, t) {
	var n = t.__selfStyle;
	if (n) {
		var r = n.textBaseline, i = r;
		!r || r === "auto" || r === "baseline" ? i = "alphabetic" : r === "before-edge" || r === "text-before-edge" ? i = "top" : r === "after-edge" || r === "text-after-edge" ? i = "bottom" : (r === "central" || r === "mathematical") && (i = "middle"), e.style.textBaseline = i;
	}
	var a = t.__inheritedStyle;
	if (a) {
		var o = a.textAlign, s = o;
		o && (o === "middle" && (s = "center"), e.style.textAlign = s);
	}
}
var aP = /^url\(\s*#(.*?)\)/;
function oP(e, t, n, r) {
	var i = n && n.match(aP);
	if (i) {
		var a = De(i[1]);
		r.push([
			e,
			t,
			a
		]);
		return;
	}
	return n === "none" && (n = null), n;
}
function sP(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r[0].style[r[1]] = e[r[2]];
	}
}
var cP = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function lP(e) {
	return e.match(cP) || [];
}
var uP = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g, dP = Math.PI / 180;
function fP(e, t) {
	var n = e.getAttribute("transform");
	if (n) {
		n = n.replace(/,/g, " ");
		var r = [], i = null;
		n.replace(uP, function(e, t, n) {
			return r.push(t, n), "";
		});
		for (var a = r.length - 1; a > 0; a -= 2) {
			var o = r[a], s = r[a - 1], c = lP(o);
			switch (i ||= ht(), s) {
				case "translate":
					yt(i, i, [parseFloat(c[0]), parseFloat(c[1] || "0")]);
					break;
				case "scale":
					xt(i, i, [parseFloat(c[0]), parseFloat(c[1] || c[0])]);
					break;
				case "rotate":
					bt(i, i, -parseFloat(c[0]) * dP, [parseFloat(c[1] || "0"), parseFloat(c[2] || "0")]);
					break;
				case "skewX":
					var l = Math.tan(parseFloat(c[0]) * dP);
					vt(i, [
						1,
						0,
						l,
						1,
						0,
						0
					], i);
					break;
				case "skewY":
					var u = Math.tan(parseFloat(c[0]) * dP);
					vt(i, [
						1,
						u,
						0,
						1,
						0,
						0
					], i);
					break;
				case "matrix": i[0] = parseFloat(c[0]), i[1] = parseFloat(c[1]), i[2] = parseFloat(c[2]), i[3] = parseFloat(c[3]), i[4] = parseFloat(c[4]), i[5] = parseFloat(c[5]);
			}
		}
		t.setLocalTransform(i);
	}
}
var pP = /([^\s:;]+)\s*:\s*([^:;]+)/g;
function mP(e, t, n) {
	var r = e.getAttribute("style");
	if (r) {
		pP.lastIndex = 0;
		for (var i; (i = pP.exec(r)) != null;) {
			var a = i[1], o = q(qN, a) ? qN[a] : null;
			o && (t[o] = i[2]);
			var s = q(YN, a) ? YN[a] : null;
			s && (n[s] = i[2]);
		}
	}
}
function hP(e, t, n) {
	for (var r = 0; r < JN.length; r++) {
		var i = JN[r], a = e.getAttribute(i);
		a != null && (t[qN[i]] = a);
	}
	for (var r = 0; r < XN.length; r++) {
		var i = XN[r], a = e.getAttribute(i);
		a != null && (n[YN[i]] = a);
	}
}
function gP(e, t) {
	var n = t.width / e.width, r = t.height / e.height, i = Math.min(n, r);
	return {
		scale: i,
		x: -(e.x + e.width / 2) * i + (t.x + t.width / 2),
		y: -(e.y + e.height / 2) * i + (t.y + t.height / 2)
	};
}
function _P(e, t) {
	return new ZN().parse(e, t);
}
//#endregion
//#region node_modules/zrender/lib/contain/polygon.js
var vP = 1e-8;
function yP(e, t) {
	return Math.abs(e - t) < vP;
}
function bP(e, t, n) {
	var r = 0, i = e[0];
	if (!i) return !1;
	for (var a = 1; a < e.length; a++) {
		var o = e[a];
		r += jo(i[0], i[1], o[0], o[1], t, n), i = o;
	}
	var s = e[0];
	return (!yP(i[0], s[0]) || !yP(i[1], s[1])) && (r += jo(i[0], i[1], s[0], s[1], t, n)), r !== 0;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/Region.js
var xP = [];
function SP(e, t) {
	for (var n = 0; n < e.length; n++) qt(e[n], e[n], t);
}
function CP(e, t, n, r) {
	for (var i = 0; i < e.length; i++) {
		var a = e[i];
		r && (a = r.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (Jt(t, t, a), Yt(n, n, a));
	}
}
function wP(e) {
	for (var t = 0, n = 0, r = 0, i = e.length, a = e[i - 1][0], o = e[i - 1][1], s = 0; s < i; s++) {
		var c = e[s][0], l = e[s][1], u = a * l - c * o;
		t += u, n += (a + c) * u, r += (o + l) * u, a = c, o = l;
	}
	return t ? [
		n / t / 3,
		r / t / 3,
		t
	] : [e[0][0] || 0, e[0][1] || 0];
}
var TP = function() {
	function e(e) {
		this.name = e;
	}
	return e.prototype.setCenter = function(e) {
		this._center = e;
	}, e.prototype.getCenter = function() {
		var e = this._center;
		return e ||= this._center = this.calcCenter(), e;
	}, e;
}(), EP = function() {
	function e(e, t) {
		this.type = "polygon", this.exterior = e, this.interiors = t;
	}
	return e;
}(), DP = function() {
	function e(e) {
		this.type = "linestring", this.points = e;
	}
	return e;
}(), OP = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.type = "geoJSON", i.geometries = n, i._center = r && [r[0], r[1]], i;
	}
	return t.prototype.calcCenter = function() {
		for (var e = this.geometries, t, n = 0, r = 0; r < e.length; r++) {
			var i = e[r], a = i.exterior, o = a && a.length;
			o > n && (t = i, n = o);
		}
		if (t) return wP(t.exterior);
		var s = this.getBoundingRect();
		return [s.x + s.width / 2, s.y + s.height / 2];
	}, t.prototype.getBoundingRect = function(e) {
		var t = this._rect;
		if (t && !e) return t;
		var n = [Infinity, Infinity], r = [-Infinity, -Infinity], i = this.geometries;
		return I(i, function(t) {
			t.type === "polygon" ? CP(t.exterior, n, r, e) : I(t.points, function(t) {
				CP(t, n, r, e);
			});
		}), isFinite(n[0]) && isFinite(n[1]) && isFinite(r[0]) && isFinite(r[1]) || (n[0] = n[1] = r[0] = r[1] = 0), t = new X(n[0], n[1], r[0] - n[0], r[1] - n[1]), e || (this._rect = t), t;
	}, t.prototype.contain = function(e) {
		var t = this.getBoundingRect(), n = this.geometries;
		if (!t.contain(e[0], e[1])) return !1;
		loopGeo: for (var r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			if (a.type === "polygon") {
				var o = a.exterior, s = a.interiors;
				if (bP(o, e[0], e[1])) {
					for (var c = 0; c < (s ? s.length : 0); c++) if (bP(s[c], e[0], e[1])) continue loopGeo;
					return !0;
				}
			}
		}
		return !1;
	}, t.prototype.transformTo = function(e, t, n, r) {
		var i = this.getBoundingRect(), a = i.width / i.height;
		n ? r ||= n / a : n = a * r;
		for (var o = new X(e, t, n, r), s = i.calculateTransform(o), c = this.geometries, l = 0; l < c.length; l++) {
			var u = c[l];
			u.type === "polygon" ? (SP(u.exterior, s), I(u.interiors, function(e) {
				SP(e, s);
			})) : I(u.points, function(e) {
				SP(e, s);
			});
		}
		i = this._rect, i.copy(o), this._center = [i.x + i.width / 2, i.y + i.height / 2];
	}, t.prototype.cloneShallow = function(e) {
		e ??= this.name;
		var n = new t(e, this.geometries, this._center);
		return n._rect = this._rect, n.transformTo = null, n;
	}, t;
}(TP), kP = function(e) {
	l(t, e);
	function t(t, n) {
		var r = e.call(this, t) || this;
		return r.type = "geoSVG", r._elOnlyForCalculate = n, r;
	}
	return t.prototype.calcCenter = function() {
		for (var e = this._elOnlyForCalculate, t = e.getBoundingRect(), n = [t.x + t.width / 2, t.y + t.height / 2], r = gt(xP), i = e; i && !i.isGeoSVGGraphicRoot;) vt(r, i.getLocalTransform(), r), i = i.parent;
		return St(r, r), qt(n, n, r), n;
	}, t;
}(TP), AP = K([
	"rect",
	"circle",
	"line",
	"ellipse",
	"polygon",
	"polyline",
	"path",
	"text",
	"tspan",
	"g"
]), jP = function() {
	function e(e, t) {
		this.type = "geoSVG", this._usedGraphicMap = K(), this._freedGraphics = [], this._mapName = e, this._parsedXML = GN(t);
	}
	return e.prototype.load = function() {
		var e = this._firstGraphic;
		if (!e) {
			e = this._firstGraphic = this._buildGraphic(this._parsedXML), this._freedGraphics.push(e), this._boundingRect = this._firstGraphic.boundingRect.clone();
			var t = NP(e.named), n = t.regions, r = t.regionsMap;
			this._regions = n, this._regionsMap = r;
		}
		return {
			boundingRect: this._boundingRect,
			regions: this._regions,
			regionsMap: this._regionsMap
		};
	}, e.prototype._buildGraphic = function(e) {
		var t, n;
		try {
			t = e && _P(e, {
				ignoreViewBox: !0,
				ignoreRootClip: !0
			}) || {}, n = t.root, Ee(n != null);
		} catch (e) {
			throw Error("Invalid svg format\n" + e.message);
		}
		var r = new hd();
		r.add(n), r.isGeoSVGGraphicRoot = !0;
		var i = t.width, a = t.height, o = t.viewBoxRect, s = this._boundingRect;
		if (!s) {
			var c = void 0, l = void 0, u = void 0, d = void 0;
			if (i == null ? o && (c = o.x, u = o.width) : (c = 0, u = i), a == null ? o && (l = o.y, d = o.height) : (l = 0, d = a), c == null || l == null) {
				var f = n.getBoundingRect();
				c ?? (c = f.x, u = f.width), l ?? (l = f.y, d = f.height);
			}
			s = this._boundingRect = new X(c, l, u, d);
		}
		if (o) {
			var p = gP(o, s);
			n.scaleX = n.scaleY = p.scale, n.x = p.x, n.y = p.y;
		}
		r.setClipPath(new cs({ shape: s.plain() }));
		var m = [];
		return I(t.named, function(e) {
			AP.get(e.svgNodeTagLower) != null && (m.push(e), MP(e.el));
		}), {
			root: r,
			boundingRect: s,
			named: m
		};
	}, e.prototype.useGraphic = function(e) {
		var t = this._usedGraphicMap, n = t.get(e);
		return n || (n = this._freedGraphics.pop() || this._buildGraphic(this._parsedXML), t.set(e, n), n);
	}, e.prototype.freeGraphic = function(e) {
		var t = this._usedGraphicMap, n = t.get(e);
		n && (t.removeKey(e), this._freedGraphics.push(n));
	}, e;
}();
function MP(e) {
	e.silent = !1, e.isGroup && e.traverse(function(e) {
		e.silent = !1;
	});
}
function NP(e) {
	var t = [], n = K();
	return I(e, function(e) {
		if (e.namedFrom == null) {
			var r = new kP(e.name, e.el);
			t.push(r), n.set(e.name, r);
		}
	}), {
		regions: t,
		regionsMap: n
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/parseGeoJson.js
function PP(e) {
	if (!e.UTF8Encoding) return e;
	var t = e, n = t.UTF8Scale;
	n ??= 1024;
	var r = t.features;
	return I(r, function(e) {
		var t = e.geometry, r = t.encodeOffsets, i = t.coordinates;
		if (r) switch (t.type) {
			case "LineString":
				t.coordinates = IP(i, r, n);
				break;
			case "Polygon":
				FP(i, r, n);
				break;
			case "MultiLineString":
				FP(i, r, n);
				break;
			case "MultiPolygon": I(i, function(e, t) {
				return FP(e, r[t], n);
			});
		}
	}), t.UTF8Encoding = !1, t;
}
function FP(e, t, n) {
	for (var r = 0; r < e.length; r++) e[r] = IP(e[r], t[r], n);
}
function IP(e, t, n) {
	for (var r = [], i = t[0], a = t[1], o = 0; o < e.length; o += 2) {
		var s = e.charCodeAt(o) - 64, c = e.charCodeAt(o + 1) - 64;
		s = s >> 1 ^ -(s & 1), c = c >> 1 ^ -(c & 1), s += i, c += a, i = s, a = c, r.push([s / n, c / n]);
	}
	return r;
}
function LP(e, t) {
	return e = PP(e), L(le(e.features, function(e) {
		return e.geometry && e.properties && e.geometry.coordinates.length > 0;
	}), function(e) {
		var n = e.properties, r = e.geometry, i = [];
		switch (r.type) {
			case "Polygon":
				var a = r.coordinates;
				i.push(new EP(a[0], a.slice(1)));
				break;
			case "MultiPolygon":
				I(r.coordinates, function(e) {
					e[0] && i.push(new EP(e[0], e.slice(1)));
				});
				break;
			case "LineString":
				i.push(new DP([r.coordinates]));
				break;
			case "MultiLineString": i.push(new DP(r.coordinates));
		}
		var o = new OP(n[t || "name"], i, n.cp);
		return o.properties = n, o;
	});
}
for (var RP = [126, 25], zP = "南海诸岛", BP = [
	[
		[0, 3.5],
		[7, 11.2],
		[15, 11.9],
		[30, 7],
		[42, .7],
		[52, .7],
		[56, 7.7],
		[59, .7],
		[64, .7],
		[64, 0],
		[5, 0],
		[0, 3.5]
	],
	[
		[13, 16.1],
		[19, 14.7],
		[16, 21.7],
		[11, 23.1],
		[13, 16.1]
	],
	[
		[12, 32.2],
		[14, 38.5],
		[15, 38.5],
		[13, 32.2],
		[12, 32.2]
	],
	[
		[16, 47.6],
		[12, 53.2],
		[13, 53.2],
		[18, 47.6],
		[16, 47.6]
	],
	[
		[6, 64.4],
		[8, 70],
		[9, 70],
		[8, 64.4],
		[6, 64.4]
	],
	[
		[23, 82.6],
		[29, 79.8],
		[30, 79.8],
		[25, 82.6],
		[23, 82.6]
	],
	[
		[37, 70.7],
		[43, 62.3],
		[44, 62.3],
		[39, 70.7],
		[37, 70.7]
	],
	[
		[48, 51.1],
		[51, 45.5],
		[53, 45.5],
		[50, 51.1],
		[48, 51.1]
	],
	[
		[51, 35],
		[51, 28.7],
		[53, 28.7],
		[53, 35],
		[51, 35]
	],
	[
		[52, 22.4],
		[55, 17.5],
		[56, 17.5],
		[53, 22.4],
		[52, 22.4]
	],
	[
		[58, 12.6],
		[62, 7],
		[63, 7],
		[60, 12.6],
		[58, 12.6]
	],
	[
		[0, 3.5],
		[0, 93.1],
		[64, 93.1],
		[64, 0],
		[63, 0],
		[63, 92.4],
		[1, 92.4],
		[1, 3.5],
		[0, 3.5]
	]
], VP = 0; VP < BP.length; VP++) for (var HP = 0; HP < BP[VP].length; HP++) BP[VP][HP][0] /= 10.5, BP[VP][HP][1] /= -14, BP[VP][HP][0] += RP[0], BP[VP][HP][1] += RP[1];
function UP(e, t) {
	if (e === "china") {
		for (var n = 0; n < t.length; n++) if (t[n].name === zP) return;
		t.push(new OP(zP, L(BP, function(e) {
			return {
				type: "polygon",
				exterior: e
			};
		}), RP));
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/fix/textCoord.js
var WP = {
	南海诸岛: [32, 80],
	广东: [0, -10],
	香港: [10, 5],
	澳门: [-10, 10],
	天津: [5, 5]
};
function GP(e, t) {
	if (e === "china") {
		var n = WP[t.name];
		if (n) {
			var r = t.getCenter();
			r[0] += n[0] / 10.5, r[1] += -n[1] / 14, t.setCenter(r);
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js
var KP = [[
	[123.45165252685547, 25.73527164402261],
	[123.49731445312499, 25.73527164402261],
	[123.49731445312499, 25.750734064600884],
	[123.45165252685547, 25.750734064600884],
	[123.45165252685547, 25.73527164402261]
]];
function qP(e, t) {
	e === "china" && t.name === "台湾" && t.geometries.push({
		type: "polygon",
		exterior: KP[0]
	});
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/GeoJSONResource.js
var JP = "name", YP = function() {
	function e(e, t, n) {
		this.type = "geoJSON", this._parsedMap = K(), this._mapName = e, this._specialAreas = n, this._geoJSON = ZP(t);
	}
	return e.prototype.load = function(e, t) {
		t ||= JP;
		var n = this._parsedMap.get(t);
		if (!n) {
			var r = this._parseToRegions(t);
			n = this._parsedMap.set(t, {
				regions: r,
				boundingRect: XP(r)
			});
		}
		var i = K(), a = [];
		return I(n.regions, function(t) {
			var n = t.name;
			e && q(e, n) && (t = t.cloneShallow(n = e[n])), a.push(t), i.set(n, t);
		}), {
			regions: a,
			boundingRect: n.boundingRect || new X(0, 0, 0, 0),
			regionsMap: i
		};
	}, e.prototype._parseToRegions = function(e) {
		var t = this._mapName, n = this._geoJSON, r;
		try {
			r = n ? LP(n, e) : [];
		} catch (e) {
			throw Error("Invalid geoJson format\n" + e.message);
		}
		return UP(t, r), I(r, function(e) {
			var n = e.name;
			GP(t, e), qP(t, e);
			var r = this._specialAreas && this._specialAreas[n];
			r && e.transformTo(r.left, r.top, r.width, r.height);
		}, this), r;
	}, e.prototype.getMapForUser = function() {
		return {
			geoJson: this._geoJSON,
			geoJSON: this._geoJSON,
			specialAreas: this._specialAreas
		};
	}, e;
}();
function XP(e) {
	for (var t, n = 0; n < e.length; n++) {
		var r = e[n].getBoundingRect();
		t ||= r.clone(), t.union(r);
	}
	return t;
}
function ZP(e) {
	return U(e) ? typeof JSON < "u" && JSON.parse ? JSON.parse(e) : Function("return (" + e + ");")() : e;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/geoSourceManager.js
var QP = K(), $P = {
	registerMap: function(e, t, n) {
		if (t.svg) {
			var r = new jP(e, t.svg);
			QP.set(e, r);
		} else {
			var i = t.geoJson || t.geoJSON;
			i && !t.features ? n = t.specialAreas : i = t;
			var r = new YP(e, i, n);
			QP.set(e, r);
		}
	},
	getGeoResource: function(e) {
		return QP.get(e);
	},
	getMapForUser: function(e) {
		var t = QP.get(e);
		return t && t.type === "geoJSON" && t.getMapForUser();
	},
	load: function(e, t, n) {
		var r = QP.get(e);
		if (r) return r.load(t, n);
	}
};
function eF(e) {
	return e;
}
var tF = "view", nF = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.type = tF, i.dimensions = ["x", "y"];
		var a = eF(i);
		a.invertY = t, a.lgCt = n, a.lgGeo = r;
		var o = a.trans = [];
		return o[0] = pr(), o[1] = pr(), o[2] = pr(), a.mtRaw = ht(), a.mtRawInv = ht(), a.mtOverall = ht(), a.mtOverallInv = ht(), a.zoom = 1, i;
	}
	return t.prototype.getBoundingRect = function() {
		return aF(null, this);
	}, t.prototype.getViewRect = function() {
		return oF(null, this);
	}, t.prototype.getRoamTransform = function() {
		return fr(eF(this).trans[1]);
	}, t.prototype.dataToPoint = function(e, t, n) {
		var r = t ? eF(this).mtRaw : eF(this).mtOverall;
		return n ||= [], r ? qt(n, e, r) : Et(n, e);
	}, t.prototype.pointToData = function(e, t, n) {
		n ||= [];
		var r = eF(this).mtOverallInv;
		return r ? qt(n, e, r) : Et(n, e);
	}, t.prototype.convertToPixel = function(e, t, n) {
		var r = EF(t);
		return r === this ? r.dataToPoint(n) : null;
	}, t.prototype.convertFromPixel = function(e, t, n) {
		var r = EF(t);
		return r === this ? r.pointToData(n) : null;
	}, t.prototype.containPoint = function(e) {
		var t = eF(this);
		return fn(rF, t.dataRect), mn(rF, rF, t.mtOverall), hn(rF, e[0], e[1]);
	}, t.dimensions = ["x", "y"], t;
}(dr), rF = un();
function iF(e) {
	return eF(e).zoom;
}
function aF(e, t) {
	return fn(e || un(), eF(t).dataRect);
}
function oF(e, t) {
	return fn(e || un(), eF(t).viewRect);
}
function sF(e, t, n) {
	return hr(e || pr(), eF(t).trans[n]);
}
function cF(e) {
	return !!(e.dataRect && e.viewRect);
}
function lF(e, t, n, r) {
	r === 1 ? CF(e, t.trans[0], n) : hr(e, n);
}
function uF(e, t, n) {
	fr(n, dF), vt(dF, dF, t.mtRawInv), _p(e, dF);
}
var dF = ht();
function fF(e, t) {
	var n = eF(e);
	n.centerOption = t.getShallow("center");
	var r = n.zoomLimit = t.getShallow("scaleLimit");
	n.zoom = GF(t.getShallow("zoom") || 1, r) || 1, cF(n) && hF(n);
}
function pF(e, t, n, r, i) {
	var a = eF(e);
	a.dataRect = new X(t, n, r, i), cF(a) && hF(a);
}
function mF(e, t, n, r, i) {
	var a = eF(e);
	a.viewRect = new X(t, n, r, i), cF(a) && hF(a);
}
function hF(e) {
	gF(e), yF(e), xF(e);
}
function gF(e) {
	var t = e.dataRect, n = e.viewRect, r = e.trans[0], i = e.invertY;
	i && (t = fn(vF, t), t.y = -t.y - t.height), pn(_F, t, n), _p(r, _F), i && (r.scaleY = -r.scaleY);
	var a = fr(r, e.mtRaw);
	St(e.mtRawInv, a);
}
var _F = ht(), vF = un();
function yF(e) {
	var t = DF(e), n = RF(bF, e, e.centerOption) ? qt(bF, bF, e.mtRaw) : t, r = e.zoom, i = e.trans[1];
	i.x = t[0] - r * n[0], i.y = t[1] - r * n[1], i.scaleX = i.scaleY = r;
}
var bF = [];
function xF(e) {
	var t = e.trans, n = t[1], r = t[0], i = t[2];
	CF(i, r, n);
	var a = fr(i, e.mtOverall), o = St(e.mtOverallInv, a);
	SF(e, i, a, o), SF(e.lgGeo, i, a, o);
}
function SF(e, t, n, r) {
	e && (hr(e, t), _t(e.transform ||= [], n), _t(e.invTransform ||= [], r));
}
function CF(e, t, n) {
	fr(t, wF), fr(n, TF), vt(TF, TF, wF), _p(e, TF);
}
var wF = ht(), TF = ht();
function EF(e) {
	var t = e.seriesModel;
	return t ? t.coordinateSystem : null;
}
function DF(e) {
	var t = e.viewRect;
	return OF[0] = t.x + t.width / 2, OF[1] = t.y + t.height / 2, OF;
}
var OF = [];
function kF(e, t, n, r) {
	var i = eF(n);
	i.syncBackEl = e, i.syncBackType = t, r ? yf(e, sF(null, n, t), r) : (sF(e, n, t), e.dirty());
}
function AF(e, t, n, r) {
	var i = eF(e), a = i.syncBackEl;
	a ? (a.stopAnimation(), lF(jF, i, a, i.syncBackType)) : hr(jF, i.trans[2]), uF(MF, i, jF), r ? IF(jF, MF, i, r) : hr(jF, MF), uF(jF, i, jF), HF(i, t, n, jF);
}
var jF = pr(), MF = pr();
function NF(e, t, n) {
	var r = PF(t);
	r && (AF(r, t, n, e), fF(r, t));
}
function PF(e) {
	return e.__ownRoamView ? e.__ownRoamView() : null;
}
function FF(e, t, n, r) {
	n.setUpdatePayload(gp(e));
	var i = Rl(r, t);
	i && i.__updateOnOwnRoam && i.__updateOnOwnRoam(e, t, r);
}
function IF(e, t, n, r) {
	r.dx != null && r.dy != null && (e.x += r.dx, e.y += r.dy);
	var i = r.zoom;
	if (i != null) {
		var a = LF(t), o = GF(a * i, n.zoomLimit) / a;
		e.x -= (r.originX - e.x) * (o - 1), e.y -= (r.originY - e.y) * (o - 1), e.scaleX *= o, e.scaleY *= o;
	}
}
function LF(e) {
	return e.scaleX;
}
function RF(e, t, n) {
	var r = t.dataRect;
	if (!n) return !1;
	var i = t.lgCt;
	return i ? Ot(e, Hs(n[0], i.w), Hs(n[1], i.h)) : r && Ot(e, Hs(n[0], r.width, r.x), Hs(n[1], r.height, r.y)), !0;
}
function zF(e, t) {
	var n = e.centerOption, r = e.dataRect;
	return !n || e.lgCt ? t.slice() : [BF(0, t, n, r), BF(1, t, n, r)];
}
function BF(e, t, n, r) {
	return n && r && r[kf[e]] && Gs(n[e]) ? (t[e] - r[Of[e]]) / r[kf[e]] * 100 + "%" : t[e];
}
function VF(e, t) {
	return t && e && e.getShallow("legacyViewCoordSysCenterBase") ? {
		w: t.getWidth(),
		h: t.getHeight()
	} : null;
}
function HF(e, t, n, r) {
	var i = DF(e), a = LF(r), o = Ms(a) > 1e-6;
	UF[0] = o ? (i[0] - r.x) / a : i[0], UF[1] = o ? (i[1] - r.y) / a : i[1], qt(UF, UF, e.mtRawInv);
	var s = zF(e, UF);
	WF(t, s, a), I(n, function(e) {
		e !== t && WF(e, s.slice(), a);
	});
}
var UF = [];
function WF(e, t, n) {
	var r = e.option;
	r.center = t, r.zoom = n;
}
function GF(e, t) {
	if (t) {
		var n = t.min || 0, r = t.max || Infinity;
		e = Math.max(Math.min(r, e), n);
	}
	return e;
}
//#endregion
//#region node_modules/echarts/lib/component/helper/roamHelper.js
function KF(e, t, n, r, i, a, o, s) {
	if (!PF(e)) {
		n.disable();
		return;
	}
	n.enable(G(e.get("roam"), o), {
		api: t,
		zInfo: { component: e },
		triggerInfo: {
			roamTrigger: e.get("roamTrigger"),
			isInSelf: r,
			isInClip: function(e, t, n) {
				return !i || i.contain(t, n);
			}
		}
	});
	function c(n) {
		var r = e.mainType, i = gp(P({ type: qF(r, e.subType, Fl) }, n));
		s && (i.componentType = r), i[r + "Id"] = e.id, t.dispatchAction(i);
	}
	n.off("pan").off("zoom").on("pan", function(e) {
		a && a("pan"), c({
			dx: e.dx,
			dy: e.dy
		});
	}).on("zoom", function(e) {
		a && a("zoom"), c({
			zoom: e.scale,
			originX: e.originX,
			originY: e.originY
		});
	});
}
new X(0, 0, 0, 0);
function qF(e, t, n) {
	return (e === "series" ? t === "map" ? "geo" : t : e) + n;
}
//#endregion
//#region node_modules/echarts/lib/component/helper/MapDraw.js
var JF = [
	"rect",
	"circle",
	"line",
	"ellipse",
	"polygon",
	"polyline",
	"path"
], YF = K(JF), XF = K(JF.concat(["g"])), ZF = K(JF.concat(["g"])), QF = Yc();
function $F(e) {
	var t = e.getItemStyle(), n = e.get("areaColor");
	return n != null && (t.fill = n), t;
}
function eI(e) {
	var t = e.style;
	t && (t.stroke = t.stroke || t.fill, t.fill = null);
}
var tI = function() {
	function e(e) {
		var t = this.group = new hd(), n = this._transformGroup = new hd();
		t.add(n), this.uid = $h("ec_map_draw"), this._controller = new FN(e.getZr()), n.add(this._regionsGroup = new hd()), n.add(this._svgGroup = new hd());
	}
	return e.prototype.draw = function(e, t, n, r, i) {
		var a = this, o = e.getData && e.getData();
		cI(e) && t.eachComponent({
			mainType: "series",
			subType: "map"
		}, function(t) {
			!o && t.getHostGeoModel() === e && (o = t.getData());
		});
		var s = e.coordinateSystem, c = s.view, l = this._regionsGroup, u = this._transformGroup, d = !l.childAt(0) || i, f;
		s.shouldClip() ? (f = oF(null, c), this.group.setClipPath(new cs({ shape: f.clone() }))) : this.group.removeClipPath(), kF(u, 1, c, d ? null : e);
		var p = o && o.getVisual("visualMeta") && o.getVisual("visualMeta").length > 0;
		s.resourceType === "geoJSON" ? this._buildGeoJSON(c, n, s, e, o, p) : s.resourceType === "geoSVG" && this._buildSVG(c, n, s, e, o, p), KF(e, n, this._controller, function(t, n, r) {
			return e.coordinateSystem.containPoint([n, r]);
		}, f, function() {
			a._mouseDownFlag = !1;
		}, !1, !0), this._updateMapSelectHandler(e, l, n, r);
	}, e.prototype.__updateOnOwnRoam = function(e) {
		kF(this._transformGroup, 1, e.coordinateSystem.view, null);
	}, e.prototype._buildGeoJSON = function(e, t, n, r, i, a) {
		var o = this._regionsGroupByName = K(), s = K(), c = this._regionsGroup, l = n.projection, u = l && l.stream, d = fr(sF(null, e, 0));
		function f(e, t) {
			return t && (e = t(e)), e && qt([], e, d);
		}
		function p(e) {
			for (var t = [], n = !u && l && l.project, r = 0; r < e.length; ++r) {
				var i = f(e[r], n);
				i && t.push(i);
			}
			return t;
		}
		function m(e) {
			return { shape: { points: p(e) } };
		}
		c.removeAll(), I(n.regions, function(e) {
			var n = e.name, d = o.get(n), p = s.get(n) || {}, h = p.dataIdx, g = p.regionModel;
			if (!d) {
				d = o.set(n, new hd()), c.add(d), h = i ? i.indexOfName(n) : null, g = cI(r) ? r.getRegionModel(n) : i ? i.getItemModel(h) : null;
				var _ = g.get("silent", !0);
				_ != null && (d.silent = _), s.set(n, {
					dataIdx: h,
					regionModel: g
				});
			}
			var v = [], y = [];
			I(e.geometries, function(e) {
				if (e.type === "polygon") {
					var t = [e.exterior].concat(e.interiors || []);
					u && (t = sI(t, u)), I(t, function(e) {
						v.push(new Hd(m(e)));
					});
				} else {
					var n = e.points;
					u && (n = sI(n, u, !0)), I(n, function(e) {
						y.push(new Wd(m(e)));
					});
				}
			});
			var b = f(e.getCenter(), l && l.project);
			function x(e, o) {
				if (e.length) {
					var s = new ef({
						culling: !0,
						segmentIgnoreThreshold: 1,
						shape: { paths: e }
					});
					d.add(s), nI(t, i, a, s, h, g), rI(r, i, s, n, g, h, b), o && (eI(s), I(s.states, eI));
				}
			}
			x(v), x(y, !0);
		}), o.each(function(e, t) {
			var n = s.get(t), a = n.dataIdx, o = n.regionModel;
			iI(r, i, e, t, o, a), aI(r, i, e, t, o), oI(r, e, t, o);
		}, this);
	}, e.prototype._buildSVG = function(e, t, n, r, i, a) {
		var o = n.map;
		sF(this._svgGroup, e, 0), this._svgResourceChanged(o) && (this._freeSVG(), this._useSVG(o));
		var s = this._svgDispatcherMap = K(), c = !1;
		I(this._svgGraphicRecord.named, function(e) {
			var n = e.name, o = e.svgNodeTagLower, l = e.el, u = i ? i.indexOfName(n) : null, d = r.getRegionModel(n);
			YF.get(o) != null && l instanceof Ba && nI(t, i, a, l, u, d), l instanceof Ba && (l.culling = !0);
			var f = d.get("silent", !0);
			f != null && (l.silent = f), l.z2EmphasisLift = 0, e.namedFrom || (ZF.get(o) != null && rI(r, i, l, n, d, u, null), iI(r, i, l, n, d, u), aI(r, i, l, n, d), XF.get(o) != null && (oI(r, l, n, d) === "self" && (c = !0), (s.get(n) || s.set(n, [])).push(l)));
		}, this), this._enableBlurEntireSVG(c, r);
	}, e.prototype._enableBlurEntireSVG = function(e, t) {
		if (e && cI(t)) {
			var n = t.getModel(["blur", "itemStyle"]).getItemStyle().opacity;
			this._svgGraphicRecord.root.traverse(function(e) {
				if (!e.isGroup) {
					pu(e);
					var t = e.ensureState("blur").style || {};
					t.opacity == null && n != null && (t.opacity = n), e.ensureState("emphasis");
				}
			});
		}
	}, e.prototype.remove = function() {
		this._regionsGroup.removeAll(), this._regionsGroupByName = null, this._svgGroup.removeAll(), this._freeSVG(), this._controller.disable();
	}, e.prototype.findHighDownDispatchers = function(e, t) {
		if (e == null) return [];
		var n = t.coordinateSystem;
		if (n.resourceType === "geoJSON") {
			var r = this._regionsGroupByName;
			if (r) {
				var i = r.get(e);
				return i ? [i] : [];
			}
		} else if (n.resourceType === "geoSVG") return this._svgDispatcherMap && this._svgDispatcherMap.get(e) || [];
	}, e.prototype._svgResourceChanged = function(e) {
		return this._svgMapName !== e;
	}, e.prototype._useSVG = function(e) {
		var t = $P.getGeoResource(e);
		if (t && t.type === "geoSVG") {
			var n = t.useGraphic(this.uid);
			this._svgGroup.add(n.root), this._svgGraphicRecord = n, this._svgMapName = e;
		}
	}, e.prototype._freeSVG = function() {
		var e = this._svgMapName;
		if (e != null) {
			var t = $P.getGeoResource(e);
			t && t.type === "geoSVG" && t.freeGraphic(this.uid), this._svgGraphicRecord = null, this._svgDispatcherMap = null, this._svgGroup.removeAll(), this._svgMapName = null;
		}
	}, e.prototype.resetForLabelLayout = function() {
		this.group.traverse(function(e) {
			var t = e.getTextContent();
			t && (t.ignore = QF(t).ignore);
		});
	}, e.prototype._updateMapSelectHandler = function(e, t, n, r) {
		var i = this;
		t.off("mousedown"), t.off("click"), e.get("selectedMode") && (t.on("mousedown", function() {
			i._mouseDownFlag = !0;
		}), t.on("click", function(e) {
			i._mouseDownFlag &&= !1;
		}));
	}, e;
}();
function nI(e, t, n, r, i, a) {
	var o = a.getModel("itemStyle"), s = a.getModel(["emphasis", "itemStyle"]), c = a.getModel(["blur", "itemStyle"]), l = a.getModel(["select", "itemStyle"]), u = $F(o), d = $F(s), f = $F(l), p = $F(c);
	if (t) {
		var m = t.getItemVisual(i, "style"), h = t.getItemVisual(i, "decal");
		n && m.fill && (u.fill = m.fill), h && (u.decal = TA(h, e));
	}
	r.setStyle(u), r.style.strokeNoScale = !0, r.ensureState("emphasis").style = d, r.ensureState("select").style = f, r.ensureState("blur").style = p, pu(r);
}
function rI(e, t, n, r, i, a, o) {
	var s = t && isNaN(t.get(t.mapDimension("value"), a)), c = t && t.getItemLayout(a);
	if (cI(e) || s || c && c.showLabel) {
		var l = cI(e) ? r : a, u = void 0;
		(!t || a >= 0) && (u = e);
		var d = o ? { normal: {
			align: "center",
			verticalAlign: "middle"
		} } : null;
		Cp(n, wp(i), {
			labelFetcher: u,
			labelDataIndex: l,
			defaultText: r
		}, d);
		var f = n.getTextContent();
		if (f && (QF(f).ignore = f.ignore, n.textConfig && o)) {
			var p = n.getBoundingRect().clone();
			n.textConfig.layoutRect = p, n.textConfig.position = [(o[0] - p.x) / p.width * 100 + "%", (o[1] - p.y) / p.height * 100 + "%"];
		}
		n.disableLabelAnimation = !0;
	} else n.removeTextContent(), n.removeTextConfig(), n.disableLabelAnimation = null;
}
function iI(e, t, n, r, i, a) {
	t ? t.setItemGraphicEl(a, n) : Z(n).eventData = {
		componentType: "geo",
		componentIndex: e.componentIndex,
		geoIndex: e.componentIndex,
		name: r,
		region: i && i.option || {}
	};
}
function aI(e, t, n, r, i) {
	t || ap({
		el: n,
		componentModel: e,
		itemName: r,
		itemTooltipOption: i.get("tooltip")
	});
}
function oI(e, t, n, r) {
	t.highDownSilentOnTouch = !!e.get("selectedMode");
	var i = r.getModel("emphasis"), a = i.get("focus");
	return Fu(t, a, i.get("blurScope"), i.get("disabled")), cI(e) && Hu(t, e, n), a;
}
function sI(e, t, n) {
	var r = [], i;
	function a() {
		i = [];
	}
	function o() {
		i.length && (r.push(i), i = []);
	}
	var s = t({
		polygonStart: a,
		polygonEnd: o,
		lineStart: a,
		lineEnd: o,
		point: function(e, t) {
			isFinite(e) && isFinite(t) && i.push([e, t]);
		},
		sphere: function() {}
	});
	return !n && s.polygonStart(), I(e, function(e) {
		s.lineStart();
		for (var t = 0; t < e.length; t++) s.point(e[t][0], e[t][1]);
		s.lineEnd();
	}), !n && s.polygonEnd(), r;
}
function cI(e) {
	return e.mainType === "geo";
}
var lI = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.getTooltipPosition = function(e) {
			if (e != null) {
				var t = this.getData().getName(e), n = this.coordinateSystem, r = n.getRegion(t);
				return r && n.dataToPoint(r.getCenter());
			}
		}, n;
	}
	return t.prototype.getInitialData = function(e) {
		for (var t = OT(this, {
			coordDimensions: ["value"],
			encodeDefaulter: fe(nm, this)
		}), n = K(), r = [], i = 0, a = t.count(); i < a; i++) {
			var o = t.getName(i);
			n.set(o, i);
		}
		return I($P.load(this.getMapType(), this.option.nameMap, this.option.nameProperty).regions, function(e) {
			var i = e.name, a = n.get(i), o = e.properties && e.properties.echartsStyle, s;
			a == null ? (s = { name: i }, r.push(s)) : s = t.getRawDataItem(a), o && M(s, o);
		}), t.appendData(r), t;
	}, t.prototype.getHostGeoModel = function() {
		if (Lh(this).kind !== 2) return this.getReferringComponents("geo", {
			useDefault: !1,
			enableAll: !1,
			enableNone: !1
		}).models[0];
	}, t.prototype.getMapType = function() {
		return (this.getHostGeoModel() || this).option.map;
	}, t.prototype.getRawValue = function(e) {
		var t = this.getData();
		return t.get(t.mapDimension("value"), e);
	}, t.prototype.getRegionModel = function(e) {
		var t = this.getData();
		return t.getItemModel(t.indexOfName(e));
	}, t.prototype.formatTooltip = function(e, t, n) {
		var r = this.getData(), i = this.getRawValue(e), a = r.getName(e), o = [];
		return I(this.seriesGroup.f, function(e) {
			var t = e.originalData.indexOfName(a), n = r.mapDimension("value");
			isNaN(e.originalData.get(n, t)) || o.push(e.name);
		}), kv("section", {
			header: o.join(", "),
			noHeader: !o.length,
			blocks: [kv("nameValue", {
				name: a,
				value: i
			})]
		});
	}, t.prototype.getLegendIcon = function(e) {
		var t = e.icon || "roundRect", n = uy(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill);
		return n.setStyle(e.itemStyle), n.style.stroke = "none", t.indexOf("empty") > -1 && (n.style.stroke = n.style.fill, n.style.fill = Q.color.neutral00, n.style.lineWidth = 2), n;
	}, t.prototype.__ownRoamView = function() {
		return dI(this) ? this.coordinateSystem.view : null;
	}, t.type = "series.map", t.dependencies = ["geo"], t.layoutMode = "box", t.defaultOption = {
		z: 2,
		coordinateSystem: "geo",
		map: "",
		left: "center",
		top: "center",
		aspectScale: null,
		showLegendSymbol: !0,
		boundingCoords: null,
		center: null,
		zoom: 1,
		scaleLimit: null,
		selectedMode: !0,
		label: {
			show: !1,
			color: Q.color.tertiary
		},
		itemStyle: {
			borderWidth: .5,
			borderColor: Q.color.border,
			areaColor: Q.color.background
		},
		emphasis: {
			label: {
				show: !0,
				color: Q.color.primary
			},
			itemStyle: { areaColor: Q.color.highlight }
		},
		select: {
			label: {
				show: !0,
				color: Q.color.primary
			},
			itemStyle: { color: Q.color.highlight }
		},
		nameProperty: "name"
	}, t;
}(Yv);
function uI(e) {
	return e.indexOf("i") === 0;
}
function dI(e) {
	return fI(e.seriesGroup) === e && !e.getHostGeoModel();
}
function fI(e) {
	return e.f[0];
}
function pI(e, t) {
	var n = {};
	return e.eachRawSeriesByType("map", function(r) {
		var i = r.getHostGeoModel(), a = i ? "o" + i.id : "i" + r.getMapType(), o = n[a] = n[a] || {
			f: [],
			r: []
		};
		!e.isSeriesFiltered(r) && !t && o.f.push(r), o.r.push(r);
	}), n;
}
//#endregion
//#region node_modules/echarts/lib/chart/map/MapView.js
var mI = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "map", t;
	}
	return t.prototype.render = function(e, t, n, r) {
		if (!(r && r.type === "mapToggleSelect" && r.from === this.uid)) {
			var i = this.group;
			if (i.removeAll(), !e.getHostGeoModel()) {
				var a = this._mapDraw;
				a && r && r.type === "geoRoam" && a.resetForLabelLayout(), r && r.type === "geoRoam" && r.componentType === "series" && r.seriesId === e.id ? a && i.add(a.group) : dI(e) ? (a ||= this._mapDraw = new tI(n), i.add(a.group), a.draw(e, t, n, this, r)) : this._clearMapDraw(), e.get("showLegendSymbol") && t.getComponent("legend") && this._renderSymbols(e);
			}
		}
	}, t.prototype.__updateOnOwnRoam = function(e, t, n) {
		var r = this._mapDraw;
		dI(t) && r && r.__updateOnOwnRoam(t);
	}, t.prototype.remove = function() {
		this._clearMapDraw(), this.group.removeAll();
	}, t.prototype.dispose = function() {
		this._clearMapDraw();
	}, t.prototype._clearMapDraw = function() {
		this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
	}, t.prototype._renderSymbols = function(e) {
		var t = e.originalData, n = this.group;
		t.each(t.mapDimension("value"), function(r, i) {
			if (!isNaN(r)) {
				var a = t.getItemLayout(i);
				if (a && a.point) {
					var o = a.point, s = a.offset, c = new _d({
						style: { fill: e.getData().getVisual("style").fill },
						shape: {
							cx: o[0] + s * 9,
							cy: o[1],
							r: 3
						},
						silent: !0,
						z2: 8 + (s ? 0 : 11)
					});
					if (!s) {
						var l = fI(e.seriesGroup).getData(), u = t.getName(i), d = l.indexOfName(u), f = t.getItemModel(i), p = f.getModel("label"), m = l.getItemGraphicEl(d);
						Cp(c, wp(f), {
							labelFetcher: { getFormattedLabel: function(t, n) {
								return e.getFormattedLabel(d, n);
							} },
							defaultText: u
						}), c.disableLabelAnimation = !0, p.get("position") || c.setTextConfig({ position: "bottom" }), m.onHoverStateChange = function(e) {
							su(c, e);
						};
					}
					n.add(c);
				}
			}
		});
	}, t.type = "map", t;
}(Uy), hI = {
	geoJSON: {
		aspectScale: .75,
		invertLongitute: !0
	},
	geoSVG: {
		aspectScale: 1,
		invertLongitute: !1
	}
}, gI = ["lng", "lat"], _I = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.dimensions = gI, i.type = "geo", i._nameCoordMap = K(), i.name = t;
		var a = r.projection, o = $P.load(n, r.nameMap, r.nameProperty), s = $P.getGeoResource(n);
		i.resourceType = s ? s.type : null;
		var c = i.regions = o.regions, l = hI[s.type];
		i._clip = r.clip, i.view = new nF(!a && l.invertLongitute, VF(r.ecModel, r.api), i), i.map = n, i._regionsMap = o.regionsMap, i.regions = o.regions, i.projection = a;
		var u;
		if (a) for (var d = 0; d < c.length; d++) {
			var f = c[d].getBoundingRect(a);
			u ||= f.clone(), u.union(f);
		}
		else u = o.boundingRect;
		return pF(i.view, u.x, u.y, u.width, u.height), i.aspectScale = a ? 1 : G(r.aspectScale, l.aspectScale), i;
	}
	return t.prototype.getRegion = function(e) {
		return this._regionsMap.get(e);
	}, t.prototype.getRegionByCoord = function(e) {
		for (var t = this.regions, n = 0; n < t.length; n++) {
			var r = t[n];
			if (r.type === "geoJSON" && r.contain(e)) return t[n];
		}
	}, t.prototype.addGeoCoord = function(e, t) {
		this._nameCoordMap.set(e, t);
	}, t.prototype.getGeoCoord = function(e) {
		var t = this._regionsMap.get(e);
		return this._nameCoordMap.get(e) || t && t.getCenter();
	}, t.prototype.dataToPoint = function(e, t, n) {
		if (U(e) && (e = this.getGeoCoord(e)), e) {
			var r = this.projection;
			return r && (e = r.project(e)), e && this.view.dataToPoint(e, t, n);
		}
	}, t.prototype.pointToData = function(e, t, n) {
		var r = this.projection;
		return r && (e = r.unproject(e)), e && this.view.pointToData(e, n);
	}, t.prototype.convertToPixel = function(e, t, n) {
		var r = vI(t);
		return r === this ? r.dataToPoint(n) : null;
	}, t.prototype.convertFromPixel = function(e, t, n) {
		var r = vI(t);
		return r === this ? r.pointToData(n) : null;
	}, t.prototype.containPoint = function(e) {
		return this.view.containPoint(e);
	}, t.prototype.getArea = function(e) {
		e ||= 0;
		var t = oF(null, this.view);
		return t.x -= e, t.y -= e, t.width += 2 * e, t.height += 2 * e, t;
	}, t.prototype.shouldClip = function() {
		return this._clip;
	}, t.prototype.getBoundingRect = function() {
		return this.view.getBoundingRect();
	}, t.prototype.getViewRect = function() {
		return this.view.getViewRect();
	}, t.prototype.getRoamTransform = function() {
		return this.view.getRoamTransform();
	}, t;
}(dr);
function vI(e) {
	var t = e.geoModel, n = e.seriesModel;
	return t ? t.coordinateSystem : n ? n.coordinateSystem || (n.getReferringComponents("geo", $c).models[0] || {}).coordinateSystem : null;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/geoCreator.js
function yI(e, t) {
	var n = this.view, r = e.get("boundingCoords");
	if (r != null) {
		var i = r[0], a = r[1];
		if (isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1])) {
			var o = this.projection;
			if (o) {
				var s = i[0], c = i[1], l = a[0], u = a[1];
				i = [Infinity, Infinity], a = [-Infinity, -Infinity];
				var d = function(e, t, n, r) {
					for (var s = n - e, c = r - t, l = 0; l <= 100; l++) {
						var u = l / 100, d = o.project([e + s * u, t + c * u]);
						Jt(i, i, d), Yt(a, a, d);
					}
				};
				d(s, c, l, c), d(l, c, l, u), d(l, u, s, u), d(s, u, l, c);
			}
			pF(n, i[0], i[1], a[0] - i[0], a[1] - i[1]);
		}
	}
	var f = n.getBoundingRect(), p = e.get("layoutCenter"), m = e.get("layoutSize"), h = B_(e, t).refContainer, g = f.width / f.height * this.aspectScale, _ = !1, v, y;
	p && m && (v = [Hs(p[0], h.width) + h.x, Hs(p[1], h.height) + h.y], y = Hs(m, Math.min(h.width, h.height)), !isNaN(v[0]) && !isNaN(v[1]) && !isNaN(y) && (_ = !0));
	var b;
	if (_) b = {}, g > 1 ? (b.width = y, b.height = y / g) : (b.height = y, b.width = y * g), b.y = v[1] - b.height / 2, b.x = v[0] - b.width / 2;
	else {
		var x = e.getBoxLayoutParams();
		x.aspect = g, b = L_(x, h), b = R_(e, b, g);
	}
	mF(n, b.x, b.y, b.width, b.height), fF(n, e);
}
function bI(e, t) {
	I(t.get("geoCoord"), function(t, n) {
		e.addGeoCoord(n, t);
	});
}
var xI = new (function() {
	function e() {
		this.dimensions = gI;
	}
	return e.prototype.create = function(e, t) {
		var n = [];
		function r(e) {
			return {
				nameProperty: e.get("nameProperty"),
				aspectScale: e.get("aspectScale"),
				projection: e.get("projection"),
				clip: e.getShallow("clip", !0)
			};
		}
		return e.eachComponent("geo", function(i, a) {
			var o = i.get("map"), s = new _I(o + a, o, N({
				nameMap: i.get("nameMap"),
				api: t,
				ecModel: e
			}, r(i)));
			n.push(s), i.coordinateSystem = s, s.model = i, s.resize = yI, s.resize(i, t);
		}), e.eachSeries(function(e) {
			Rh({
				targetModel: e,
				coordSysType: "geo",
				coordSysProvider: function() {
					var t = e.subType === "map" ? e.getHostGeoModel() : e.getReferringComponents("geo", $c).models[0];
					return t && t.coordinateSystem;
				},
				allowNotFound: !0
			});
		}), I(pI(e, !0), function(i, a) {
			if (uI(a)) {
				var o = i.r[0], s = [];
				I(i.r, function(e) {
					s.push(e.get("nameMap")), e.seriesGroup = null;
				});
				var c = a.slice(1), l = new _I(c, c, N({
					nameMap: re(s),
					api: t,
					ecModel: e
				}, r(o))), u;
				I(i.r, function(e) {
					u = G(u, e.get("scaleLimit"));
				}), n.push(l), l.resize = yI, l.resize(o, t), I(i.r, function(e) {
					e.coordinateSystem = l, bI(l, e);
				});
			}
		}), n;
	}, e.prototype.getFilledRegions = function(e, t, n, r) {
		for (var i = (e || []).slice(), a = K(), o = 0; o < i.length; o++) a.set(i[o].name, i[o]);
		return I($P.load(t, n, r).regions, function(e) {
			var t = e.name, n = a.get(t), r = e.properties && e.properties.echartsStyle;
			n || (n = { name: t }, i.push(n)), r && M(n, r);
		}), i;
	}, e;
}())(), SI = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.init = function(e, t, n) {
		this.mergeDefaultAndTheme(e, n);
		var r = $P.getGeoResource(e.map);
		if (r && r.type === "geoJSON") {
			var i = e.itemStyle = e.itemStyle || {};
			"color" in i || (i.color = e.defaultItemStyleColor || Q.color.backgroundTint);
		}
		kc(e, "label", ["show"]);
	}, t.prototype.optionUpdated = function() {
		var e = this, t = this.option;
		t.regions = xI.getFilledRegions(t.regions, t.map, t.nameMap, t.nameProperty);
		var n = {};
		this._optionModelMap = R(t.regions || [], function(t, r) {
			var i = r.name;
			return i && (t.set(i, new Jp(r, e, e.ecModel)), r.selected && (n[i] = !0)), t;
		}, K()), t.selectedMap ||= n;
	}, t.prototype.getRegionModel = function(e) {
		return this._optionModelMap.get(e) || new Jp(null, this, this.ecModel);
	}, t.prototype.getFormattedLabel = function(e, t) {
		var n = this.getRegionModel(e), r = t === "normal" ? n.get(["label", "formatter"]) : n.get([
			"emphasis",
			"label",
			"formatter"
		]), i = { name: e };
		if (H(r)) return i.status = t, r(i);
		if (U(r)) return r.replace("{a}", e ?? "");
	}, t.prototype.select = function(e) {
		var t = this.option, n = t.selectedMode;
		if (n) {
			n !== "multiple" && (t.selectedMap = null);
			var r = t.selectedMap ||= {};
			r[e] = !0;
		}
	}, t.prototype.unSelect = function(e) {
		var t = this.option.selectedMap;
		t && (t[e] = !1);
	}, t.prototype.toggleSelected = function(e) {
		this[this.isSelected(e) ? "unSelect" : "select"](e);
	}, t.prototype.isSelected = function(e) {
		var t = this.option.selectedMap;
		return !!(t && t[e]);
	}, t.prototype.__ownRoamView = function() {
		return this.coordinateSystem.view;
	}, t.type = "geo", t.layoutMode = "box", t.defaultOption = {
		z: 0,
		show: !0,
		left: "center",
		top: "center",
		aspectScale: null,
		silent: !1,
		map: "",
		boundingCoords: null,
		center: null,
		zoom: 1,
		scaleLimit: null,
		label: {
			show: !1,
			color: Q.color.tertiary
		},
		itemStyle: {
			borderWidth: .5,
			borderColor: Q.color.border
		},
		emphasis: {
			label: {
				show: !0,
				color: Q.color.primary
			},
			itemStyle: { color: Q.color.highlight }
		},
		select: {
			label: {
				show: !0,
				color: Q.color.primary
			},
			itemStyle: { color: Q.color.highlight }
		},
		regions: []
	}, t;
}(q_), CI = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.focusBlurEnabled = !0, n;
	}
	return t.prototype.init = function(e, t) {
		this._api = t;
	}, t.prototype.render = function(e, t, n, r) {
		if (this._model = e, !e.get("show")) {
			this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
			return;
		}
		this._mapDraw ||= new tI(n);
		var i = this._mapDraw;
		i.draw(e, t, n, this, r), i.group.on("click", this._handleRegionClick, this), i.group.silent = e.get("silent"), this.group.add(i.group), this.updateSelectStatus(e, t, n);
	}, t.prototype.__updateOnOwnRoam = function(e, t, n) {
		var r = this._mapDraw;
		r && r.__updateOnOwnRoam(t);
	}, t.prototype._handleRegionClick = function(e) {
		var t;
		Ok(e.target, function(e) {
			return (t = Z(e).eventData) != null;
		}, !0), t && this._api.dispatchAction({
			type: "geoToggleSelect",
			geoId: this._model.id,
			name: t.name
		});
	}, t.prototype.updateSelectStatus = function(e, t, n) {
		var r = this;
		this._mapDraw.group.traverse(function(e) {
			var t = Z(e).eventData;
			if (t) return r._model.isSelected(t.name) ? n.enterSelect(e) : n.leaveSelect(e), !0;
		});
	}, t.prototype.findHighDownDispatchers = function(e) {
		return this._mapDraw && this._mapDraw.findHighDownDispatchers(e, this._model);
	}, t.prototype.dispose = function() {
		this._mapDraw && this._mapDraw.remove();
	}, t.type = "geo", t;
}(UO);
//#endregion
//#region node_modules/echarts/lib/component/geo/install.js
function wI(e, t, n) {
	$P.registerMap(e, t, n);
}
function TI(e) {
	e.registerCoordinateSystem("geo", xI), e.registerComponentModel(SI), e.registerComponentView(CI), e.registerImpl("registerMap", wI), e.registerImpl("getMap", function(e) {
		return $P.getMapForUser(e);
	});
	function t(t, n) {
		n.update = "geo:updateSelectStatus", e.registerAction(n, function(e, n) {
			var r = {}, i = [];
			return n.eachComponent({
				mainType: "geo",
				query: e
			}, function(n) {
				n[t](e.name);
				var a = n.coordinateSystem;
				I(a.regions, function(e) {
					r[e.name] = n.isSelected(e.name) || !1;
				});
				var o = [];
				I(r, function(e, t) {
					r[t] && o.push(t);
				}), i.push({
					geoIndex: n.componentIndex,
					name: o
				});
			}), {
				selected: r,
				allSelected: i,
				name: e.name
			};
		});
	}
	t("toggleSelected", {
		type: "geoToggleSelect",
		event: "geoselectchanged"
	}), t("select", {
		type: "geoSelect",
		event: "geoselected"
	}), t("unSelect", {
		type: "geoUnSelect",
		event: "geounselected"
	}), e.registerAction({
		type: "geoRoam",
		event: "geoRoam",
		update: "updateTransform"
	}, function(e, t, n) {
		var r = e.componentType || (e.geoId != null || e.geoName != null || e.geoIndex != null ? "geo" : "series"), i = r === El;
		if (r === "geo" || i) {
			var a = i ? "map" : null;
			t.eachComponent(nl(e, r, a), function(r) {
				(!i || dI(r)) && (NF(e, r, i ? r.seriesGroup.r : null), FF(e, r, t, n));
			});
		}
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/map/mapSymbolLayout.js
var EI = Cl("map", DI);
function DI(e) {
	I(pI(e), function(t, n) {
		if (fI(t) && uI(n)) {
			var r = {};
			I(t.f, function(t) {
				var n = t.coordinateSystem, i = t.originalData;
				t.get("showLegendSymbol") && e.getComponent("legend") && i.each(i.mapDimension("value"), function(e, t) {
					var a = i.getName(t), o = n.getRegion(a);
					if (o && !isNaN(e)) {
						var s = r[a] || 0, c = n.dataToPoint(o.getCenter());
						r[a] = s + 1, i.setItemLayout(t, {
							point: c,
							offset: s
						});
					}
				});
			});
			var i = fI(t).getData();
			i.each(function(e) {
				var t = i.getName(e), n = i.getItemLayout(e) || {};
				n.showLabel = !r[t], i.setItemLayout(e, n);
			});
		}
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/map/mapDataStatistic.js
function OI(e, t) {
	var n = {};
	return I(e, function(e) {
		e.each(e.mapDimension("value"), function(t, r) {
			var i = "ec-" + e.getName(r);
			n[i] = n[i] || [], isNaN(t) || n[i].push(t);
		});
	}), e[0].map(e[0].mapDimension("value"), function(r, i) {
		for (var a = "ec-" + e[0].getName(i), o = 0, s = Infinity, c = -Infinity, l = n[a].length, u = 0; u < l; u++) s = Math.min(s, n[a][u]), c = Math.max(c, n[a][u]), o += n[a][u];
		var d = t === "min" ? s : t === "max" ? c : t === "average" ? o / l : o;
		return l === 0 ? NaN : d;
	});
}
var kI = Cl("map", AI);
function AI(e) {
	I(pI(e), function(e) {
		var t = fI(e);
		if (t) {
			var n = OI(L(e.f, function(e) {
				return e.getData();
			}), t.get("mapValueCalculation"));
			I(e.f, function(t) {
				t.seriesGroup = e, t.originalData = t.getData(), t.setData(n.cloneShallow());
			});
		}
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/map/install.js
function jI(e) {
	wM(TI), e.registerChartView(mI), e.registerSeriesModel(lI), e.registerLayout(EI), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, kI), wT("map", e.registerAction);
}
//#endregion
//#region node_modules/echarts/lib/visual/VisualMapping.js
var MI = I, NI = W, PI = -1, FI = function() {
	function e(t) {
		var n = t.mappingMethod, r = t.type, i = this.option = j(t);
		this.type = r, this.mappingMethod = n, this._normalizeData = qI[n];
		var a = e.visualHandlers[r];
		this.applyVisual = a.applyVisual, this.getColorMapper = a.getColorMapper, this._normalizedToVisual = a._normalizedToVisual[n], n === "piecewise" ? (RI(i), II(i)) : n === "category" ? i.categories ? LI(i) : RI(i, !0) : (Ee(n !== "linear" || i.dataExtent), RI(i));
	}
	return e.prototype.mapValueToVisual = function(e) {
		var t = this._normalizeData(e);
		return this._normalizedToVisual(t, e);
	}, e.prototype.getNormalizer = function() {
		return B(this._normalizeData, this);
	}, e.listVisualTypes = function() {
		return z(e.visualHandlers);
	}, e.isValidType = function(t) {
		return e.visualHandlers.hasOwnProperty(t);
	}, e.eachVisual = function(e, t, n) {
		W(e) ? I(e, t, n) : t.call(n, e);
	}, e.mapVisual = function(t, n, r) {
		var i, a = V(t) ? [] : W(t) ? {} : (i = !0, null);
		return e.eachVisual(t, function(e, t) {
			var o = n.call(r, e, t);
			i ? a = o : a[t] = o;
		}), a;
	}, e.retrieveVisuals = function(t) {
		var n = {}, r;
		return t && MI(e.visualHandlers, function(e, i) {
			t.hasOwnProperty(i) && (n[i] = t[i], r = !0);
		}), r ? n : null;
	}, e.prepareVisualTypes = function(e) {
		if (V(e)) e = e.slice();
		else if (NI(e)) {
			var t = [];
			MI(e, function(e, n) {
				t.push(n);
			}), e = t;
		} else return [];
		return e.sort(function(e, t) {
			return t === "color" && e !== "color" && e.indexOf("color") === 0 ? 1 : -1;
		}), e;
	}, e.dependsOn = function(e, t) {
		return t === "color" ? !!(e && e.indexOf(t) === 0) : e === t;
	}, e.findPieceIndex = function(e, t, n) {
		for (var r, i = Infinity, a = 0, o = t.length; a < o; a++) {
			var s = t[a].value;
			if (s != null) {
				if (s === e || U(s) && s === e + "") return a;
				n && d(s, a);
			}
		}
		for (var a = 0, o = t.length; a < o; a++) {
			var c = t[a], l = c.interval, u = c.close;
			if (l) {
				if (l[0] === -Infinity) {
					if (JI(u[1], e, l[1])) return a;
				} else if (l[1] === Infinity) {
					if (JI(u[0], l[0], e)) return a;
				} else if (JI(u[0], l[0], e) && JI(u[1], e, l[1])) return a;
				n && d(l[0], a), n && d(l[1], a);
			}
		}
		if (n) return e === Infinity ? t.length - 1 : e === -Infinity ? 0 : r;
		function d(t, n) {
			var a = Math.abs(t - e);
			a < i && (i = a, r = n);
		}
	}, e.visualHandlers = {
		color: {
			applyVisual: VI("color"),
			getColorMapper: function() {
				var e = this.option;
				return B(e.mappingMethod === "category" ? function(e, t) {
					return !t && (e = this._normalizeData(e)), HI.call(this, e);
				} : function(t, n, r) {
					var i = !!r;
					return !n && (t = this._normalizeData(t)), r = ui(t, e.parsedVisual, r), i ? r : gi(r, "rgba");
				}, this);
			},
			_normalizedToVisual: {
				linear: function(e) {
					return gi(ui(e, this.option.parsedVisual), "rgba");
				},
				category: HI,
				piecewise: function(e, t) {
					var n = GI.call(this, t);
					return n ??= gi(ui(e, this.option.parsedVisual), "rgba"), n;
				},
				fixed: UI
			}
		},
		colorHue: zI(function(e, t) {
			return mi(e, t);
		}),
		colorSaturation: zI(function(e, t) {
			return mi(e, null, t);
		}),
		colorLightness: zI(function(e, t) {
			return mi(e, null, null, t);
		}),
		colorAlpha: zI(function(e, t) {
			return hi(e, t);
		}),
		decal: {
			applyVisual: VI("decal"),
			_normalizedToVisual: {
				linear: null,
				category: HI,
				piecewise: null,
				fixed: null
			}
		},
		opacity: {
			applyVisual: VI("opacity"),
			_normalizedToVisual: WI([0, 1])
		},
		liftZ: {
			applyVisual: VI("liftZ"),
			_normalizedToVisual: {
				linear: UI,
				category: UI,
				piecewise: UI,
				fixed: UI
			}
		},
		symbol: {
			applyVisual: function(e, t, n) {
				n("symbol", this.mapValueToVisual(e));
			},
			_normalizedToVisual: {
				linear: BI,
				category: HI,
				piecewise: function(e, t) {
					var n = GI.call(this, t);
					return n ??= BI.call(this, e), n;
				},
				fixed: UI
			}
		},
		symbolSize: {
			applyVisual: VI("symbolSize"),
			_normalizedToVisual: WI([0, 1])
		}
	}, e;
}();
function II(e) {
	var t = e.pieceList;
	e.hasSpecialVisual = !1, I(t, function(t, n) {
		t.originIndex = n, t.visual != null && (e.hasSpecialVisual = !0);
	});
}
function LI(e) {
	var t = e.categories, n = e.categoryMap = {}, r = e.visual;
	if (MI(t, function(e, t) {
		n[e] = t;
	}), !V(r)) {
		var i = [];
		W(r) ? MI(r, function(e, t) {
			var r = n[t];
			i[r ?? PI] = e;
		}) : i[PI] = r, r = KI(e, i);
	}
	for (var a = t.length - 1; a >= 0; a--) r[a] ?? (delete n[t[a]], t.pop());
}
function RI(e, t) {
	var n = e.visual, r = [];
	W(n) ? MI(n, function(e) {
		r.push(e);
	}) : n != null && r.push(n), !t && r.length === 1 && !{
		color: 1,
		symbol: 1
	}.hasOwnProperty(e.type) && (r[1] = r[0]), KI(e, r);
}
function zI(e) {
	return {
		applyVisual: function(t, n, r) {
			var i = this.mapValueToVisual(t);
			r("color", e(n("color"), i));
		},
		_normalizedToVisual: WI([0, 1])
	};
}
function BI(e) {
	var t = this.option.visual;
	return t[Math.round(Vs(e, [0, 1], [0, t.length - 1], !0))] || {};
}
function VI(e) {
	return function(t, n, r) {
		r(e, this.mapValueToVisual(t));
	};
}
function HI(e) {
	var t = this.option.visual;
	return t[this.option.loop && e !== PI ? e % t.length : e];
}
function UI() {
	return this.option.visual[0];
}
function WI(e) {
	return {
		linear: function(t) {
			return Vs(t, e, this.option.visual, !0);
		},
		category: HI,
		piecewise: function(t, n) {
			var r = GI.call(this, n);
			return r ??= Vs(t, e, this.option.visual, !0), r;
		},
		fixed: UI
	};
}
function GI(e) {
	var t = this.option, n = t.pieceList;
	if (t.hasSpecialVisual) {
		var r = n[FI.findPieceIndex(e, n)];
		if (r && r.visual) return r.visual[this.type];
	}
}
function KI(e, t) {
	return e.visual = t, e.type === "color" && (e.parsedVisual = L(t, function(e) {
		return ai(e) || [
			0,
			0,
			0,
			1
		];
	})), t;
}
var qI = {
	linear: function(e) {
		return Vs(e, this.option.dataExtent, [0, 1], !0);
	},
	piecewise: function(e) {
		var t = this.option.pieceList, n = FI.findPieceIndex(e, t, !0);
		if (n != null) return Vs(n, [0, t.length - 1], [0, 1], !0);
	},
	category: function(e) {
		return (this.option.categories ? this.option.categoryMap[e] : e) ?? PI;
	},
	fixed: Re
};
function JI(e, t, n) {
	return e ? t <= n : t < n;
}
//#endregion
//#region node_modules/echarts/lib/component/helper/sliderMove.js
function YI(e, t, n, r, i, a) {
	e ||= 0;
	var o = nc(n[1], -n[0]);
	if (i != null && (i = ZI(i, [0, o])), a != null && (a = Math.max(a, i ?? 0)), r === "all") {
		var s = Math.abs(nc(t[1], -t[0]));
		s = ZI(s, [0, o]), i = a = ZI(s, [i, a]), r = 0;
	}
	t[0] = ZI(t[0], n), t[1] = ZI(t[1], n);
	var c = XI(t, r);
	t[r] += e;
	var l = i || 0, u = n.slice();
	c.sign < 0 ? u[0] = nc(u[0], l) : u[1] = nc(u[1], -l), t[r] = ZI(t[r], u);
	var d = XI(t, r);
	return i != null && (d.sign !== c.sign || d.span < i) && (t[1 - r] = nc(t[r], c.sign * i)), d = XI(t, r), a != null && d.span > a && (t[1 - r] = nc(t[r], d.sign * a)), t;
}
function XI(e, t) {
	var n = e[t] - e[1 - t];
	return {
		span: Math.abs(n),
		sign: n > 0 ? -1 : n < 0 ? 1 : t ? -1 : 1
	};
}
function ZI(e, t) {
	return Math.min(t[1] == null ? Infinity : t[1], Math.max(t[0] == null ? -Infinity : t[0], e));
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/CustomSeries.js
var QI = {
	color: "fill",
	borderColor: "stroke"
}, $I = {
	symbol: 1,
	symbolSize: 1,
	symbolKeepAspect: 1,
	legendIcon: 1,
	visualMeta: 1,
	liftZ: 1,
	decal: 1
}, eL = Yc(), tL = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.optionUpdated = function() {
		this.currentZLevel = this.get("zlevel", !0), this.currentZ = this.get("z", !0);
	}, t.prototype.getInitialData = function(e, t) {
		return Yh(null, this);
	}, t.prototype.getDataParams = function(t, n, r) {
		var i = e.prototype.getDataParams.call(this, t, n);
		return r && (i.info = eL(r).info), i;
	}, t.type = "series.custom", t.dependencies = [
		"grid",
		"polar",
		"geo",
		"singleAxis",
		"calendar",
		"matrix"
	], t.defaultOption = {
		coordinateSystem: "cartesian2d",
		z: 2,
		legendHoverLink: !0,
		clip: !1
	}, t;
}(Yv);
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/prepareCustom.js
function nL(e, t) {
	return t ||= [0, 0], L(["x", "y"], function(n, r) {
		var i = this.getAxis(n), a = t[r], o = e[r] / 2;
		return i.type === "category" ? LS(i).w : Math.abs(i.dataToCoord(a - o) - i.dataToCoord(a + o));
	}, this);
}
function rL(e) {
	var t = e.master.getRect();
	return {
		coordSys: {
			type: "cartesian2d",
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height
		},
		api: {
			coord: function(t) {
				return e.dataToPoint(t);
			},
			size: B(nL, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/prepareCustom.js
function iL(e, t) {
	return t ||= [0, 0], L([0, 1], function(n) {
		var r = t[n], i = e[n] / 2, a = [], o = [];
		return a[n] = r - i, o[n] = r + i, a[1 - n] = o[1 - n] = t[1 - n], Math.abs(this.dataToPoint(a)[n] - this.dataToPoint(o)[n]);
	}, this);
}
function aL(e) {
	var t = e.view, n = t.getBoundingRect();
	return {
		coordSys: {
			type: "geo",
			x: n.x,
			y: n.y,
			width: n.width,
			height: n.height,
			zoom: iF(t)
		},
		api: {
			coord: function(t) {
				return e.dataToPoint(t);
			},
			size: B(iL, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/single/prepareCustom.js
function oL(e, t) {
	var n = this.getAxis(), r = t instanceof Array ? t[0] : t, i = (e instanceof Array ? e[0] : e) / 2;
	return n.type === "category" ? LS(n).w : Math.abs(n.dataToCoord(r - i) - n.dataToCoord(r + i));
}
function sL(e) {
	var t = e.getRect();
	return {
		coordSys: {
			type: "singleAxis",
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height
		},
		api: {
			coord: function(t) {
				return e.dataToPoint(t);
			},
			size: B(oL, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/polar/prepareCustom.js
function cL(e, t) {
	return t ||= [0, 0], L(["Radius", "Angle"], function(n, r) {
		var i = "get" + n + "Axis", a = this[i](), o = t[r], s = e[r] / 2, c = a.type === "category" ? LS(a).w : Math.abs(a.dataToCoord(o - s) - a.dataToCoord(o + s));
		return n === "Angle" && (c = c * Math.PI / 180), c;
	}, this);
}
function lL(e) {
	var t = e.getRadiusAxis(), n = e.getAngleAxis(), r = t.getExtent();
	return r[0] > r[1] && r.reverse(), {
		coordSys: {
			type: "polar",
			cx: e.cx,
			cy: e.cy,
			r: r[1],
			r0: r[0]
		},
		api: {
			coord: function(r) {
				var i = t.dataToRadius(r[0]), a = n.dataToAngle(r[1]), o = e.coordToPoint([i, a]);
				return o.push(i, a * Math.PI / 180), o;
			},
			size: B(cL, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/calendar/prepareCustom.js
function uL(e) {
	var t = e.getRect(), n = e.getRangeInfo();
	return {
		coordSys: {
			type: "calendar",
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height,
			cellWidth: e.getCellWidth(),
			cellHeight: e.getCellHeight(),
			rangeInfo: {
				start: n.start,
				end: n.end,
				weeks: n.weeks,
				dayCount: n.allDay
			}
		},
		api: {
			coord: function(t, n) {
				return e.dataToPoint(t, n);
			},
			layout: function(t, n) {
				return e.dataToLayout(t, n);
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/matrix/prepareCustom.js
function dL(e) {
	var t = e.getRect();
	return {
		coordSys: {
			type: "matrix",
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height
		},
		api: {
			coord: function(t, n) {
				return e.dataToPoint(t, n);
			},
			layout: function(t, n) {
				return e.dataToLayout(t, n);
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/animation/customGraphicTransition.js
var fL = {
	position: ["x", "y"],
	scale: ["scaleX", "scaleY"],
	origin: ["originX", "originY"]
}, pL = z(fL);
R(mr, function(e, t) {
	return e[t] = 1, e;
}, {}), mr.join(", ");
var mL = [
	"",
	"style",
	"shape",
	"extra"
], hL = Yc();
function gL(e, t, n, r, i) {
	var a = e + "Animation", o = _f(e, r, i) || {}, s = hL(t).userDuring;
	return o.duration > 0 && (o.during = s ? B(EL, {
		el: t,
		userDuring: s
	}) : null, o.setToFinal = !0, o.scope = e), N(o, n[a]), o;
}
function _L(e, t, n, r) {
	r ||= {};
	var i = r.dataIndex, a = r.isInit, o = r.clearStyle, s = n.isAnimationEnabled(), c = hL(e), l = t.style;
	c.userDuring = t.during;
	var u = {}, d = {};
	if (AL(e, t, d), e.type === "compound") for (var f = e.shape.paths, p = t.shape.paths, m = 0; m < p.length; m++) {
		var h = p[m];
		OL("shape", h, f[m]);
	}
	else OL("shape", t, d), OL("extra", t, d);
	if (!a && s && (kL(e, t, u), DL("shape", e, t, u), DL("extra", e, t, u), jL(e, t, l, u)), d.style = l, xL(e, d, o), CL(e, t), s) {
		if (a) {
			var g = {};
			I(mL, function(e) {
				var n = e ? t[e] : t;
				n && n.enterFrom && (e && (g[e] = g[e] || {}), N(e ? g[e] : g, n.enterFrom));
			});
			var _ = gL("enter", e, t, n, i);
			_.duration > 0 && e.animateFrom(g, _);
		} else SL(e, t, i || 0, n, u);
	}
	vL(e, t), l ? e.dirty() : e.markRedraw();
}
function vL(e, t) {
	for (var n = hL(e).leaveToProps, r = 0; r < mL.length; r++) {
		var i = mL[r], a = i ? t[i] : t;
		a && a.leaveTo && (n ||= hL(e).leaveToProps = {}, i && (n[i] = n[i] || {}), N(i ? n[i] : n, a.leaveTo));
	}
}
function yL(e, t, n, r) {
	if (e) {
		var i = e.parent, a = hL(e).leaveToProps;
		if (a) {
			var o = gL("update", e, t, n, 0);
			o.done = function() {
				i && i.remove(e), r && r();
			}, e.animateTo(a, o);
		} else i && i.remove(e), r && r();
	}
}
function bL(e) {
	return e === "all";
}
function xL(e, t, n) {
	var r = t.style;
	if (!e.isGroup && r) {
		if (n) {
			e.useStyle({});
			for (var i = e.animators, a = 0; a < i.length; a++) {
				var o = i[a];
				o.targetName === "style" && o.changeTarget(e.style);
			}
		}
		e.setStyle(r);
	}
	t && (t.style = null, t && e.attr(t), t.style = r);
}
function SL(e, t, n, r, i) {
	if (i) {
		var a = gL("update", e, t, r, n);
		a.duration > 0 && e.animateFrom(i, a);
	}
}
function CL(e, t) {
	q(t, "silent") && (e.silent = t.silent), q(t, "ignore") && (e.ignore = t.ignore), e instanceof Ba && q(t, "invisible") && (e.invisible = t.invisible), e instanceof Jo && q(t, "autoBatch") && (e.autoBatch = t.autoBatch);
}
var wL = {}, TL = {
	setTransform: function(e, t) {
		return wL.el[e] = t, this;
	},
	getTransform: function(e) {
		return wL.el[e];
	},
	setShape: function(e, t) {
		var n = wL.el, r = n.shape ||= {};
		return r[e] = t, n.dirtyShape && n.dirtyShape(), this;
	},
	getShape: function(e) {
		var t = wL.el.shape;
		if (t) return t[e];
	},
	setStyle: function(e, t) {
		var n = wL.el, r = n.style;
		return r && (r[e] = t, n.dirtyStyle && n.dirtyStyle()), this;
	},
	getStyle: function(e) {
		var t = wL.el.style;
		if (t) return t[e];
	},
	setExtra: function(e, t) {
		var n = wL.el.extra || (wL.el.extra = {});
		return n[e] = t, this;
	},
	getExtra: function(e) {
		var t = wL.el.extra;
		if (t) return t[e];
	}
};
function EL() {
	var e = this, t = e.el;
	if (t) {
		var n = hL(t).userDuring, r = e.userDuring;
		if (n !== r) {
			e.el = e.userDuring = null;
			return;
		}
		wL.el = t, r(TL);
	}
}
function DL(e, t, n, r) {
	var i = n[e];
	if (i) {
		var a = t[e], o;
		if (a) {
			var s = n.transition, c = i.transition;
			if (c) {
				if (!o && (o = r[e] = {}), bL(c)) N(o, a);
				else for (var l = Oc(c), u = 0; u < l.length; u++) {
					var d = l[u], f = a[d];
					o[d] = f;
				}
			} else if (bL(s) || F(s, e) >= 0) {
				!o && (o = r[e] = {});
				for (var p = z(a), u = 0; u < p.length; u++) {
					var d = p[u], f = a[d];
					ML(i[d], f) && (o[d] = f);
				}
			}
		}
	}
}
function OL(e, t, n) {
	var r = t[e];
	if (r) for (var i = n[e] = {}, a = z(r), o = 0; o < a.length; o++) {
		var s = a[o];
		i[s] = Xi(r[s]);
	}
}
function kL(e, t, n) {
	for (var r = t.transition, i = bL(r) ? mr : Oc(r || []), a = 0; a < i.length; a++) {
		var o = i[a];
		o !== "style" && o !== "shape" && o !== "extra" && (n[o] = e[o]);
	}
}
function AL(e, t, n) {
	for (var r = 0; r < pL.length; r++) {
		var i = pL[r], a = fL[i], o = t[i];
		o && (n[a[0]] = o[0], n[a[1]] = o[1]);
	}
	for (var r = 0; r < mr.length; r++) {
		var s = mr[r];
		t[s] != null && (n[s] = t[s]);
	}
}
function jL(e, t, n, r) {
	if (n) {
		var i = e.style, a;
		if (i) {
			var o = n.transition, s = t.transition;
			if (o && !bL(o)) {
				var c = Oc(o);
				!a && (a = r.style = {});
				for (var l = 0; l < c.length; l++) {
					var u = c[l], d = i[u];
					a[u] = d;
				}
			} else if (e.getAnimationStyleProps && (bL(s) || bL(o) || F(s, "style") >= 0)) {
				var f = e.getAnimationStyleProps(), p = f ? f.style : null;
				if (p) {
					!a && (a = r.style = {});
					for (var m = z(n), l = 0; l < m.length; l++) {
						var u = m[l];
						if (p[u]) {
							var d = i[u];
							a[u] = d;
						}
					}
				}
			}
		}
	}
}
function ML(e, t) {
	return ce(e) ? e !== t : e != null && isFinite(e);
}
//#endregion
//#region node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js
var NL = Yc(), PL = [
	"percent",
	"easing",
	"shape",
	"style",
	"extra"
];
function FL(e) {
	e.stopAnimation("keyframe"), e.attr(NL(e));
}
function IL(e, t, n) {
	if (n.isAnimationEnabled() && t) {
		if (V(t)) {
			I(t, function(t) {
				IL(e, t, n);
			});
			return;
		}
		var r = t.keyframes, i = t.duration;
		if (n && i == null) {
			var a = _f("enter", n, 0);
			i = a && a.duration;
		}
		if (r && i) {
			var o = NL(e);
			I(mL, function(n) {
				if (!n || e[n]) {
					var a;
					r.sort(function(e, t) {
						return e.percent - t.percent;
					}), I(r, function(r) {
						var s = e.animators, c = n ? r[n] : r;
						if (c) {
							var l = z(c);
							if (n || (l = le(l, function(e) {
								return F(PL, e) < 0;
							})), l.length) {
								a || (a = e.animate(n, t.loop, !0), a.scope = "keyframe");
								for (var u = 0; u < s.length; u++) s[u] !== a && s[u].targetName === a.targetName && s[u].stopTracks(l);
								n && (o[n] = o[n] || {});
								var d = n ? o[n] : o;
								I(l, function(t) {
									d[t] = ((n ? e[n] : e) || {})[t];
								}), a.whenWithKeys(i * r.percent, c, l, r.easing);
							}
						}
					}), a && a.delay(t.delay || 0).duration(i).start(t.easing);
				}
			});
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/CustomView.js
var LL = "emphasis", RL = "normal", zL = "blur", BL = "select", VL = [
	RL,
	LL,
	zL,
	BL
], HL = {
	normal: ["itemStyle"],
	emphasis: [LL, "itemStyle"],
	blur: [zL, "itemStyle"],
	select: [BL, "itemStyle"]
}, UL = {
	normal: ["label"],
	emphasis: [LL, "label"],
	blur: [zL, "label"],
	select: [BL, "label"]
}, WL = ["x", "y"], GL = "e\0\0", KL = {
	normal: {},
	emphasis: {},
	blur: {},
	select: {}
}, qL = {
	cartesian2d: rL,
	geo: aL,
	single: sL,
	polar: lL,
	calendar: uL,
	matrix: dL
};
function JL(e) {
	return e instanceof Jo;
}
function YL(e) {
	return e instanceof Ba;
}
function XL(e, t) {
	t.copyTransform(e), YL(t) && YL(e) && (t.setStyle(e.style), t.z = e.z, t.z2 = e.z2, t.zlevel = e.zlevel, t.invisible = e.invisible, t.ignore = e.ignore, JL(t) && JL(e) && t.setShape(e.shape));
}
var ZL = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n, r) {
		this._progressiveEls = null;
		var i = this._data, a = e.getData(), o = this.group, s = rR(e, a, t, n);
		i || o.removeAll(), a.diff(i).add(function(t) {
			aR(n, null, t, s(t, r), e, o, a);
		}).remove(function(t) {
			var n = i.getItemGraphicEl(t);
			n && yL(n, eL(n).option, e);
		}).update(function(t, c) {
			aR(n, i.getItemGraphicEl(c), t, s(t, r), e, o, a);
		}).execute();
		var c = e.get("clip", !0) ? Zy(e.coordinateSystem, !1, e) : null;
		c ? o.setClipPath(c) : o.removeClipPath(), this._data = a;
	}, t.prototype.incrementalPrepareRender = function(e, t, n) {
		this.group.removeAll(), this._data = null;
	}, t.prototype.incrementalRender = function(e, t, n, r, i) {
		var a = t.getData(), o = rR(t, a, n, r), s = this._progressiveEls = [];
		function c(e) {
			e.isGroup || (e.incremental = xl(t), e.ensureState("emphasis").hoverLayer = 2);
		}
		for (var l = e.start; l < e.end; l++) {
			var u = aR(null, null, l, o(l, i), t, this.group, a);
			u && (u.traverse(c), s.push(u));
		}
	}, t.prototype.eachRendered = function(e) {
		sp(this._progressiveEls || this.group, e);
	}, t.prototype.filterForExposedEvent = function(e, t, n, r) {
		var i = t.element;
		if (i == null || n.name === i) return !0;
		for (; (n = n.__hostTarget || n.parent) && n !== this.group;) if (n.name === i) return !0;
		return !1;
	}, t.type = "custom", t;
}(Uy);
function QL(e) {
	var t = e.type, n;
	if (t === "path") {
		var r = e.shape, i = r.width != null && r.height != null ? {
			x: r.x || 0,
			y: r.y || 0,
			width: r.width,
			height: r.height
		} : null, a = yR(r);
		n = Ff(a, null, i, r.layout || "center"), eL(n).customPathData = a;
	} else if (t === "image") n = new es({}), eL(n).customImagePath = e.style.image;
	else if (t === "text") n = new ps({});
	else if (t === "group") n = new hd();
	else if (t === "compoundPath") {
		var r = e.shape;
		if (!r || !r.paths) {
			var o = "";
			wc(o);
		}
		n = new ef({ shape: { paths: L(r.paths, function(e) {
			if (e.type === "path") return Ff(e.shape.pathData, e, null);
			var t = Pf(e.type);
			return t || wc(""), new t();
		}) } });
	} else {
		var s = Pf(t);
		if (!s) {
			var o = "";
			wc(o);
		}
		n = new s();
	}
	return eL(n).customGraphicType = t, n.name = e.name, n.z2EmphasisLift = 1, n.z2SelectLift = 1, n;
}
function $L(e, t, n, r, i, a, o) {
	FL(t);
	var s = i && i.normal.cfg;
	s && t.setTextConfig(s), r && r.transition == null && (r.transition = WL);
	var c = r && r.style;
	if (c) {
		if (t.type === "text") {
			var l = c;
			q(l, "textFill") && (l.fill = l.textFill), q(l, "textStroke") && (l.stroke = l.textStroke);
		}
		var u = void 0, d = JL(t) ? c.decal : null;
		e && d && (d.dirty = !0, u = TA(d, e)), c.__decalPattern = u;
	}
	if (YL(t) && c) {
		var u = c.__decalPattern;
		u && (c.decal = u);
	}
	_L(t, r, a, {
		dataIndex: n,
		isInit: o,
		clearStyle: !0
	}), IL(t, r.keyframeAnimation, a);
}
function eR(e, t, n, r, i) {
	var a = t.isGroup ? null : t, o = i && i[e].cfg;
	if (a) {
		var s = a.ensureState(e);
		if (r === !1) {
			var c = a.getState(e);
			c && (c.style = null);
		} else s.style = r || null;
		o && (s.textConfig = o), pu(a);
	}
}
function tR(e, t, n) {
	if (!e.isGroup) {
		var r = e, i = n.currentZ, a = n.currentZLevel;
		r.z = i, r.zlevel = a;
		var o = t.z2;
		o != null && (r.z2 = o || 0);
		for (var s = 0; s < VL.length; s++) nR(r, t, VL[s]);
	}
}
function nR(e, t, n) {
	var r = n === RL, i = r ? t : dR(t, n), a = i ? i.z2 : null, o;
	a != null && (o = r ? e : e.ensureState(n), o.z2 = a || 0);
}
function rR(e, t, n, r) {
	var i = e.get("renderItem");
	if (typeof i == "string") {
		var a = Fk(i);
		a && (i = a);
	}
	var o = e.coordinateSystem, s = {};
	o && (s = o.prepareCustoms ? o.prepareCustoms(o) : qL[o.type](o));
	for (var c = P({
		getWidth: r.getWidth,
		getHeight: r.getHeight,
		getZr: r.getZr,
		getDevicePixelRatio: r.getDevicePixelRatio,
		value: x,
		style: C,
		ordinalRawValue: S,
		styleEmphasis: w,
		visual: D,
		barLayout: O,
		currentSeriesIndices: k,
		font: A
	}, s.api || {}), l = {
		context: {},
		seriesId: e.id,
		seriesName: e.name,
		seriesIndex: e.seriesIndex,
		coordSys: s.coordSys,
		dataInsideLength: t.count(),
		encode: iR(e.getData()),
		itemPayload: e.get("itemPayload") || {}
	}, u, d, f = {}, p = {}, m = {}, h = {}, g = 0; g < VL.length; g++) {
		var _ = VL[g];
		m[_] = e.getModel(HL[_]), h[_] = e.getModel(UL[_]);
	}
	function v(e) {
		return e === u ? d ||= t.getItemModel(e) : t.getItemModel(e);
	}
	function y(e, n) {
		return t.hasItemOption ? e === u ? f[n] || (f[n] = v(e).getModel(HL[n])) : v(e).getModel(HL[n]) : m[n];
	}
	function b(e, n) {
		return t.hasItemOption ? e === u ? p[n] || (p[n] = v(e).getModel(UL[n])) : v(e).getModel(UL[n]) : h[n];
	}
	return function(e, n) {
		return u = e, d = null, f = {}, p = {}, i && i(P({
			dataIndexInside: e,
			dataIndex: t.getRawIndex(e),
			actionType: n ? n.type : null
		}, l), c);
	};
	function x(e, n) {
		return n ??= u, t.getStore().get(t.getDimensionIndex(e || 0), n);
	}
	function S(e, n) {
		n ??= u, e ||= 0;
		var r = t.getDimensionInfo(e);
		if (!r) {
			var i = t.getDimensionIndex(e);
			return i >= 0 ? t.getStore().get(i, n) : void 0;
		}
		var a = t.get(r.name, n), o = r && r.ordinalMeta;
		return o ? o.categories[a] : a;
	}
	function C(n, r) {
		r ??= u;
		var i = t.getItemVisual(r, "style"), a = i && i.fill, o = i && i.opacity, s = y(r, RL).getItemStyle();
		a != null && (s.fill = a), o != null && (s.opacity = o);
		var c = { inheritColor: U(a) ? a : Q.color.neutral99 }, l = b(r, RL), d = Tp(l, null, c, !1, !0);
		d.text = l.getShallow("show") ? G(e.getFormattedLabel(r, RL), my(t, r)) : null;
		var f = Ep(l, c, !1);
		return E(n, s), s = nb(s, d, f), n && T(s, n), s.legacy = !0, s;
	}
	function w(n, r) {
		r ??= u;
		var i = y(r, LL).getItemStyle(), a = b(r, LL), o = Tp(a, null, null, !0, !0);
		o.text = a.getShallow("show") ? Ce(e.getFormattedLabel(r, LL), e.getFormattedLabel(r, RL), my(t, r)) : null;
		var s = Ep(a, null, !0);
		return E(n, i), i = nb(i, o, s), n && T(i, n), i.legacy = !0, i;
	}
	function T(e, t) {
		for (var n in t) q(t, n) && (e[n] = t[n]);
	}
	function E(e, t) {
		e && (e.textFill && (t.textFill = e.textFill), e.textPosition && (t.textPosition = e.textPosition));
	}
	function D(e, n) {
		if (n ??= u, q(QI, e)) {
			var r = t.getItemVisual(n, "style");
			return r ? r[QI[e]] : null;
		}
		if (q($I, e)) return t.getItemVisual(n, e);
	}
	function O(e) {
		if (o.type === "cartesian2d") return Ow(P({ axis: o.getBaseAxis() }, e));
	}
	function k() {
		return n.getCurrentSeriesIndices();
	}
	function A(e) {
		return Np(e, n);
	}
}
function iR(e) {
	var t = {};
	return I(e.dimensions, function(n) {
		var r = e.getDimensionInfo(n);
		if (!r.isExtraCoord) {
			var i = r.coordDim, a = t[i] = t[i] || [];
			a[r.coordDimIndex] = e.getDimensionIndex(n);
		}
	}), t;
}
function aR(e, t, n, r, i, a, o) {
	if (!r) {
		a.remove(t);
		return;
	}
	var s = oR(e, t, n, r, i, a);
	return s && o.setItemGraphicEl(n, s), s && Fu(s, r.focus, r.blurScope, r.emphasisDisabled), s;
}
function oR(e, t, n, r, i, a) {
	var o = -1, s = t;
	t && sR(t, r, i) && (o = F(a.childrenRef(), t), t = null);
	var c = !t, l = t;
	l ? l.clearStates() : (l = QL(r), s && XL(s, l)), r.morph === !1 ? l.disableMorphing = !0 : l.disableMorphing && (l.disableMorphing = !1), r.tooltipDisabled && (l.tooltipDisabled = !0), KL.normal.cfg = KL.normal.conOpt = KL.emphasis.cfg = KL.emphasis.conOpt = KL.blur.cfg = KL.blur.conOpt = KL.select.cfg = KL.select.conOpt = null, KL.isLegacy = !1, lR(l, n, r, i, c, KL), cR(l, n, r, i, c), $L(e, l, n, r, KL, i, c), q(r, "info") && (eL(l).info = r.info);
	for (var u = 0; u < VL.length; u++) {
		var d = VL[u];
		if (d !== RL) {
			var f = dR(r, d), p = fR(r, f, d);
			eR(d, l, f, p, KL);
		}
	}
	return tR(l, r, i), r.type === "group" && pR(e, l, n, r, i), o >= 0 ? a.replaceAt(l, o) : a.add(l), l;
}
function sR(e, t, n) {
	var r = eL(e), i = t.type, a = t.shape, o = t.style;
	return n.isUniversalTransitionEnabled() || i != null && i !== r.customGraphicType || i === "path" && bR(a) && yR(a) !== r.customPathData || i === "image" && q(o, "image") && o.image !== r.customImagePath;
}
function cR(e, t, n, r, i) {
	var a = n.clipPath;
	if (a === !1) e && e.getClipPath() && e.removeClipPath();
	else if (a) {
		var o = e.getClipPath();
		o && sR(o, a, r) && (o = null), o || (o = QL(a), e.setClipPath(o)), $L(null, o, t, a, null, r, i);
	}
}
function lR(e, t, n, r, i, a) {
	if (!(e.isGroup || e.type === "compoundPath")) {
		uR(n, null, a), uR(n, LL, a);
		var o = a.normal.conOpt, s = a.emphasis.conOpt, c = a.blur.conOpt, l = a.select.conOpt;
		if (o != null || s != null || l != null || c != null) {
			var u = e.getTextContent();
			if (o === !1) u && e.removeTextContent();
			else {
				o = a.normal.conOpt = o || { type: "text" }, u ? u.clearStates() : (u = QL(o), e.setTextContent(u)), $L(null, u, t, o, null, r, i);
				for (var d = o && o.style, f = 0; f < VL.length; f++) {
					var p = VL[f];
					if (p !== RL) {
						var m = a[p].conOpt;
						eR(p, u, m, fR(o, m, p), null);
					}
				}
				d ? u.dirty() : u.markRedraw();
			}
		}
	}
}
function uR(e, t, n) {
	var r = t ? dR(e, t) : e, i = t ? fR(e, r, LL) : e.style, a = e.type, o = r ? r.textConfig : null, s = e.textContent, c = s ? t ? dR(s, t) : s : null;
	if (i && (n.isLegacy || $y(i, a, !!o, !!c))) {
		n.isLegacy = !0;
		var l = eb(i, a, !t);
		!o && l.textConfig && (o = l.textConfig), !c && l.textContent && (c = l.textContent);
	}
	if (!t && c) {
		var u = c;
		!u.type && (u.type = "text");
	}
	var d = t ? n[t] : n.normal;
	d.cfg = o, d.conOpt = c;
}
function dR(e, t) {
	return t ? e ? e[t] : null : e;
}
function fR(e, t, n) {
	var r = t && t.style;
	return r == null && n === LL && e && (r = e.styleEmphasis), r;
}
function pR(e, t, n, r, i) {
	var a = r.children, o = a ? a.length : 0, s = r.$mergeChildren, c = s === "byName" || r.diffChildrenByName, l = s === !1;
	if (o || c || l) {
		if (c) {
			hR({
				api: e,
				oldChildren: t.children() || [],
				newChildren: a || [],
				dataIndex: n,
				seriesModel: i,
				group: t
			});
			return;
		}
		l && t.removeAll();
		for (var u = 0; u < o; u++) {
			var d = a[u], f = t.childAt(u);
			d ? (d.ignore ??= !1, oR(e, f, n, d, i, t)) : f.ignore = !0;
		}
		for (var p = t.childCount() - 1; p >= u; p--) mR(t, t.childAt(p), i);
	}
}
function mR(e, t, n) {
	t && yL(t, eL(e).option, n);
}
function hR(e) {
	new Zp(e.oldChildren, e.newChildren, gR, gR, e).add(_R).update(_R).remove(vR).execute();
}
function gR(e, t) {
	return (e && e.name) ?? GL + t;
}
function _R(e, t) {
	var n = this.context, r = e == null ? null : n.newChildren[e], i = t == null ? null : n.oldChildren[t];
	oR(n.api, i, n.dataIndex, r, n.seriesModel, n.group);
}
function vR(e) {
	var t = this.context, n = t.oldChildren[e];
	n && yL(n, eL(n).option, t.seriesModel);
}
function yR(e) {
	return e && (e.pathData || e.d);
}
function bR(e) {
	return e && (q(e, "pathData") || q(e, "d"));
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/install.js
function xR(e) {
	e.registerChartView(ZL), e.registerSeriesModel(tL);
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js
var SR = Yc(), CR = j, wR = B, TR = function() {
	function e() {
		this._dragging = !1, this.animationThreshold = 15;
	}
	return e.prototype.render = function(e, t, n, r) {
		var i = t.get("value"), a = t.get("status");
		if (this._axisModel = e, this._axisPointerModel = t, this._api = n, r || this._lastValue !== i || this._lastStatus !== a) {
			this._lastValue = i, this._lastStatus = a;
			var o = this._group, s = this._handle;
			if (!a || a === "hide") {
				o && o.hide(), s && s.hide();
				return;
			}
			o && o.show(), s && s.show();
			var c = {};
			this.makeElOption(c, i, e, t, n);
			var l = c.graphicKey;
			l !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = l;
			var u = this._moveAnimation = this.determineAnimation(e, t);
			if (!o) o = this._group = new hd(), this.createPointerEl(o, c, e, t), this.createLabelEl(o, c, e, t), n.getZr().add(o);
			else {
				var d = fe(ER, t, u);
				this.updatePointerEl(o, c, d), this.updateLabelEl(o, c, d, t);
			}
			AR(o, t, !0), this._renderHandle(i);
		}
	}, e.prototype.remove = function(e) {
		this.clear(e);
	}, e.prototype.dispose = function(e) {
		this.clear(e);
	}, e.prototype.determineAnimation = function(e, t) {
		var n = t.get("animation"), r = e.axis, i = r.type === "category", a = t.get("snap");
		if (!a && !i) return !1;
		if (n === "auto" || n == null) {
			var o = this.animationThreshold;
			if (i && LS(r).w > o) return !0;
			if (a) {
				var s = mN(e).seriesDataCount, c = r.getExtent();
				return Math.abs(c[0] - c[1]) / s > o;
			}
			return !1;
		}
		return n === !0;
	}, e.prototype.makeElOption = function(e, t, n, r, i) {}, e.prototype.createPointerEl = function(e, t, n, r) {
		var i = t.pointer;
		if (i) {
			var a = SR(e).pointerEl = new Ef[i.type](CR(t.pointer));
			e.add(a);
		}
	}, e.prototype.createLabelEl = function(e, t, n, r) {
		if (t.label) {
			var i = SR(e).labelEl = new ps(CR(t.label));
			e.add(i), OR(i, r);
		}
	}, e.prototype.updatePointerEl = function(e, t, n) {
		var r = SR(e).pointerEl;
		r && t.pointer && (r.setStyle(t.pointer.style), n(r, { shape: t.pointer.shape }));
	}, e.prototype.updateLabelEl = function(e, t, n, r) {
		var i = SR(e).labelEl;
		i && (i.setStyle(t.label.style), n(i, {
			x: t.label.x,
			y: t.label.y
		}), OR(i, r));
	}, e.prototype._renderHandle = function(e) {
		if (!this._dragging && this.updateHandleTransform) {
			var t = this._axisPointerModel, n = this._api.getZr(), r = this._handle, i = t.getModel("handle"), a = t.get("status");
			if (!i.get("show") || !a || a === "hide") {
				r && n.remove(r), this._handle = null;
				return;
			}
			var o;
			this._handle || (o = !0, r = this._handle = Zf(i.get("icon"), {
				cursor: "move",
				draggable: !0,
				onmousemove: function(e) {
					ME(e.event);
				},
				onmousedown: wR(this._onHandleDragMove, this, 0, 0),
				drift: wR(this._onHandleDragMove, this),
				ondragend: wR(this._onHandleDragEnd, this)
			}), n.add(r)), AR(r, t, !1), r.setStyle(i.getItemStyle(null, [
				"color",
				"borderColor",
				"borderWidth",
				"opacity",
				"shadowColor",
				"shadowBlur",
				"shadowOffsetX",
				"shadowOffsetY"
			]));
			var s = i.get("size");
			V(s) || (s = [s, s]), r.scaleX = s[0] / 2, r.scaleY = s[1] / 2, Uw(this, "_doDispatchAxisPointer", i.get("throttle") || 0, "fixRate"), this._moveHandleToValue(e, o);
		}
	}, e.prototype._moveHandleToValue = function(e, t) {
		ER(this._axisPointerModel, !t && this._moveAnimation, this._handle, kR(this.getHandleTransform(e, this._axisModel, this._axisPointerModel)));
	}, e.prototype._onHandleDragMove = function(e, t) {
		var n = this._handle;
		if (n) {
			this._dragging = !0;
			var r = this.updateHandleTransform(kR(n), [e, t], this._axisModel, this._axisPointerModel);
			this._payloadInfo = r, n.stopAnimation(), n.attr(kR(r)), SR(n).lastProp = null, this._doDispatchAxisPointer();
		}
	}, e.prototype._doDispatchAxisPointer = function() {
		if (this._handle) {
			var e = this._payloadInfo, t = this._axisModel;
			this._api.dispatchAction({
				type: "updateAxisPointer",
				x: e.cursorPoint[0],
				y: e.cursorPoint[1],
				tooltipOption: e.tooltipOption,
				axesInfo: [{
					axisDim: t.axis.dim,
					axisIndex: t.componentIndex
				}]
			});
		}
	}, e.prototype._onHandleDragEnd = function() {
		if (this._dragging = !1, this._handle) {
			var e = this._axisPointerModel.get("value");
			this._moveHandleToValue(e), this._api.dispatchAction({ type: "hideTip" });
		}
	}, e.prototype.clear = function(e) {
		this._lastValue = null, this._lastStatus = null;
		var t = e.getZr(), n = this._group, r = this._handle;
		t && n && (this._lastGraphicKey = null, n && t.remove(n), r && t.remove(r), this._group = null, this._handle = null, this._payloadInfo = null), Ww(this, "_doDispatchAxisPointer");
	}, e.prototype.doClear = function() {}, e.prototype.buildLabel = function(e, t, n) {
		return n ||= 0, {
			x: e[n],
			y: e[1 - n],
			width: t[n],
			height: t[1 - n]
		};
	}, e;
}();
function ER(e, t, n, r) {
	DR(SR(n).lastProp, r) || (SR(n).lastProp = r, t ? yf(n, r, e) : (n.stopAnimation(), n.attr(r)));
}
function DR(e, t) {
	if (W(e) && W(t)) {
		var n = !0;
		return I(t, function(t, r) {
			n &&= DR(e[r], t);
		}), !!n;
	}
	return e === t;
}
function OR(e, t) {
	e[t.get(["label", "show"]) ? "show" : "hide"]();
}
function kR(e) {
	return {
		x: e.x || 0,
		y: e.y || 0,
		rotation: e.rotation || 0
	};
}
function AR(e, t, n) {
	var r = t.get("z"), i = t.get("zlevel");
	e && e.traverse(function(e) {
		e.type !== "group" && (r != null && (e.z = r), i != null && (e.zlevel = i), e.silent = n);
	});
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/viewHelper.js
function jR(e) {
	var t = e.get("type"), n = e.getModel(t + "Style"), r;
	return t === "line" ? (r = n.getLineStyle(), r.fill = null) : t === "shadow" && (r = n.getAreaStyle(), r.stroke = null), r;
}
function MR(e, t, n, r, i) {
	var a = PR(n.get("value"), t.axis, t.ecModel, n.get("seriesDataIndices"), {
		precision: n.get(["label", "precision"]),
		formatter: n.get(["label", "formatter"])
	}), o = n.getModel("label"), s = y_(o.get("padding") || 0), c = o.getFont(), l = kn(a, c), u = i.position, d = l.width + s[1] + s[3], f = l.height + s[0] + s[2], p = i.align;
	p === "right" && (u[0] -= d), p === "center" && (u[0] -= d / 2);
	var m = i.verticalAlign;
	m === "bottom" && (u[1] -= f), m === "middle" && (u[1] -= f / 2), NR(u, d, f, r);
	var h = o.get("backgroundColor");
	(!h || h === "auto") && (h = t.get([
		"axisLine",
		"lineStyle",
		"color"
	])), e.label = {
		x: u[0],
		y: u[1],
		style: Tp(o, {
			text: a,
			font: c,
			fill: o.getTextColor(),
			padding: s,
			backgroundColor: h
		}),
		z2: 10
	};
}
function NR(e, t, n, r) {
	var i = r.getWidth(), a = r.getHeight();
	e[0] = Math.min(e[0] + t, i) - t, e[1] = Math.min(e[1] + n, a) - n, e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0);
}
function PR(e, t, n, r, i) {
	e = t.scale.parse(e);
	var a = t.scale.getLabel({ value: e }, { precision: i.precision }), o = i.formatter;
	if (o) {
		var s = {
			value: lx(t, { value: e }),
			axisDimension: t.dim,
			axisIndex: t.index,
			seriesData: []
		};
		I(r, function(e) {
			var t = n.getSeriesByIndex(e.seriesIndex), r = e.dataIndexInside, i = t && t.getDataParams(r);
			i && s.seriesData.push(i);
		}), U(o) ? a = o.replace("{value}", a) : H(o) && (a = o(s));
	}
	return a;
}
function FR(e, t, n) {
	var r = ht();
	return bt(r, r, n.rotation), yt(r, r, n.position), Wf([e.dataToCoord(t), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], r);
}
function IR(e, t, n, r, i, a) {
	var o = CC.innerTextLayout(n.rotation, 0, n.labelDirection);
	n.labelMargin = i.get(["label", "margin"]), MR(t, r, i, a, {
		position: FR(r.axis, e, n),
		align: o.textAlign,
		verticalAlign: o.textVerticalAlign
	});
}
function LR(e, t, n) {
	return n ||= 0, {
		x1: e[n],
		y1: e[1 - n],
		x2: t[n],
		y2: t[1 - n]
	};
}
function RR(e, t, n) {
	return n ||= 0, {
		x: e[n],
		y: e[1 - n],
		width: t[n],
		height: t[1 - n]
	};
}
function zR(e, t, n) {
	return LS(e, {
		fromStat: { sers: L(t, function(e) {
			return n.getSeriesByIndex(e.seriesIndex);
		}) },
		min: 1
	}).w;
}
function BR(e, t, n) {
	return [js(As(t[0], t[1]), e - n / 2), As(e + n / 2, js(t[0], t[1]))];
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js
var VR = function(e) {
	l(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.makeElOption = function(e, t, n, r, i) {
		var a = n.axis, o = a.grid, s = r.get("type"), c = a.getGlobalExtent(), l = HR(o, a).getOtherAxis(a).getGlobalExtent(), u = a.toGlobalCoord(a.dataToCoord(t, !0));
		if (s && s !== "none") {
			var d = jR(r), f = UR[s](a, u, c, l, r.get("seriesDataIndices"), r.ecModel);
			f.style = d, e.graphicKey = f.type, e.pointer = f;
		}
		IR(t, e, WC(o.getRect(), n), n, r, i);
	}, t.prototype.getHandleTransform = function(e, t, n) {
		var r = WC(t.axis.grid.getRect(), t, { labelInside: !1 });
		r.labelMargin = n.get(["handle", "margin"]);
		var i = FR(t.axis, e, r);
		return {
			x: i[0],
			y: i[1],
			rotation: r.rotation + (r.labelDirection < 0 ? Math.PI : 0)
		};
	}, t.prototype.updateHandleTransform = function(e, t, n, r) {
		var i = n.axis, a = i.grid, o = i.getGlobalExtent(!0), s = HR(a, i).getOtherAxis(i).getGlobalExtent(), c = i.dim === "x" ? 0 : 1, l = [e.x, e.y];
		l[c] += t[c], l[c] = As(o[1], l[c]), l[c] = js(o[0], l[c]);
		var u = (s[1] + s[0]) / 2, d = [u, u];
		return d[c] = l[c], {
			x: l[0],
			y: l[1],
			rotation: e.rotation,
			cursorPoint: d,
			tooltipOption: [{ verticalAlign: "middle" }, { align: "center" }][c]
		};
	}, t;
}(TR);
function HR(e, t) {
	var n = {};
	return n[t.dim + "AxisIndex"] = t.index, e.getCartesian(n);
}
var UR = {
	line: function(e, t, n, r) {
		return {
			type: "Line",
			subPixelOptimize: !0,
			shape: LR([t, r[0]], [t, r[1]], WR(e))
		};
	},
	shadow: function(e, t, n, r, i, a) {
		var o = zR(e, i, a), s = r[1] - r[0], c = BR(t, n, o), l = c[0], u = c[1];
		return {
			type: "Rect",
			shape: RR([l, r[0]], [u - l, s], WR(e))
		};
	}
};
function WR(e) {
	return e.dim === "x" ? 0 : 1;
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js
var GR = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "axisPointer", t.defaultOption = {
		show: "auto",
		z: 50,
		type: "line",
		snap: !1,
		triggerTooltip: !0,
		triggerEmphasis: !0,
		value: null,
		status: null,
		link: [],
		animation: null,
		animationDurationUpdate: 200,
		lineStyle: {
			color: Q.color.border,
			width: 1,
			type: "dashed"
		},
		shadowStyle: { color: Q.color.shadowTint },
		label: {
			show: !0,
			formatter: null,
			precision: "auto",
			margin: 3,
			color: Q.color.neutral00,
			padding: [
				5,
				7,
				5,
				7
			],
			backgroundColor: Q.color.accent60,
			borderColor: null,
			borderWidth: 0,
			borderRadius: 3
		},
		handle: {
			show: !1,
			icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
			size: 45,
			margin: 50,
			color: Q.color.accent40,
			throttle: 40
		}
	}, t;
}(q_), KR = Yc(), qR = I;
function JR(e, t, n) {
	if (!J.node) {
		var r = t.getZr();
		KR(r).records || (KR(r).records = {}), YR(r, t);
		var i = KR(r).records[e] || (KR(r).records[e] = {});
		i.handler = n;
	}
}
function YR(e, t) {
	if (KR(e).initialized) return;
	KR(e).initialized = !0, n("click", fe(QR, "click")), n("mousemove", fe(QR, "mousemove")), n("mousewheel", fe(QR, "mousewheel")), n("globalout", ZR);
	function n(n, r) {
		e.on(n, function(n) {
			var i = $R(t);
			qR(KR(e).records, function(e) {
				e && r(e, n, i.dispatchAction);
			}), XR(i.pendings, t);
		});
	}
}
function XR(e, t) {
	var n = e.showTip.length, r = e.hideTip.length, i;
	n ? i = e.showTip[n - 1] : r && (i = e.hideTip[r - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function ZR(e, t, n) {
	e.handler("leave", null, n);
}
function QR(e, t, n, r) {
	t.handler(e, n, r);
}
function $R(e) {
	var t = {
		showTip: [],
		hideTip: []
	}, n = function(r) {
		var i = t[r.type];
		i ? i.push(r) : (r.dispatchAction = n, e.dispatchAction(r));
	};
	return {
		dispatchAction: n,
		pendings: t
	};
}
function ez(e, t) {
	if (!J.node) {
		var n = t.getZr();
		(KR(n).records || {})[e] && (KR(n).records[e] = null);
	}
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/AxisPointerView.js
var tz = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n) {
		var r = t.getComponent("tooltip"), i = e.get("triggerOn") || r && r.get("triggerOn") || "mousemove|click|mousewheel";
		JR("axisPointer", n, function(e, t, n) {
			i !== "none" && (e === "leave" || i.indexOf(e) >= 0) && n({
				type: "updateAxisPointer",
				currTrigger: e,
				x: t && t.offsetX,
				y: t && t.offsetY
			});
		});
	}, t.prototype.remove = function(e, t) {
		ez("axisPointer", t);
	}, t.prototype.dispose = function(e, t) {
		ez("axisPointer", t);
	}, t.type = "axisPointer", t;
}(UO);
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
function nz(e, t) {
	var n = [], r = e.seriesIndex, i;
	if (r == null || !(i = t.getSeriesByIndex(r))) return { point: [] };
	var a = i.getData(), o = Jc(a, e);
	if (o == null || o < 0 || V(o)) return { point: [] };
	var s = a.getItemGraphicEl(o), c = i.coordinateSystem;
	if (i.getTooltipPosition) n = i.getTooltipPosition(o) || [];
	else if (c && c.dataToPoint) {
		if (e.isStacked) {
			var l = c.getBaseAxis(), u = c.getOtherAxis(l).dim, d = l.dim, f = +(u === "x" || u === "radius"), p = a.mapDimension(d), m = [];
			m[f] = a.get(p, o), m[1 - f] = a.get(a.getCalculationInfo("stackResultDimension"), o), n = c.dataToPoint(m) || [];
		} else n = c.dataToPoint(a.getValues(L(c.dimensions, function(e) {
			return a.mapDimension(e);
		}), o)) || [];
	} else if (s) {
		var h = s.getBoundingRect().clone();
		h.applyTransform(s.transform), n = [h.x + h.width / 2, h.y + h.height / 2];
	}
	return {
		point: n,
		el: s
	};
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/axisTrigger.js
var rz = Yc();
function iz(e, t, n) {
	var r = e.currTrigger, i = [e.x, e.y], a = e, o = e.dispatchAction || B(n.dispatchAction, n), s = t.getComponent("axisPointer").coordSysAxesInfo;
	if (s) {
		mz(i) && (i = nz({
			seriesIndex: a.seriesIndex,
			dataIndex: a.dataIndex
		}, t).point);
		var c = mz(i), l = a.axesInfo, u = s.axesInfo, d = r === "leave" || mz(i), f = {}, p = {}, m = {
			list: [],
			map: {}
		}, h = {
			showPointer: fe(sz, p),
			showTooltip: fe(cz, m)
		};
		I(s.coordSysMap, function(e, t) {
			var n = c || e.containPoint(i);
			I(s.coordSysAxesInfo[t], function(e, t) {
				var r = e.axis, a = fz(l, e);
				if (!d && n && (!l || a)) {
					var o = a && a.value;
					o == null && !c && (o = r.pointToData(i)), o != null && az(e, o, h, !1, f);
				}
			});
		});
		var g = {};
		return I(u, function(e, t) {
			var n = e.linkGroup;
			n && !p[t] && I(n.axesInfo, function(t, r) {
				var i = p[r];
				if (t !== e && i) {
					var a = i.value;
					n.mapper && (a = e.axis.scale.parse(n.mapper(a, pz(t), pz(e)))), g[e.key] = a;
				}
			});
		}), I(g, function(e, t) {
			az(u[t], e, h, !0, f);
		}), lz(p, u, f), uz(m, i, e, o), dz(u, o, n), f;
	}
}
function az(e, t, n, r, i) {
	var a = e.axis;
	if (!a.scale.isBlank() && a.containData(t)) {
		if (!e.involveSeries) {
			n.showPointer(e, t);
			return;
		}
		var o = oz(t, e), s = o.payloadBatch, c = o.snapToValue;
		s[0] && i.seriesIndex == null && N(i, s[0]), !r && e.snap && a.containData(c) && c != null && (t = c), n.showPointer(e, t, s), n.showTooltip(e, o, c);
	}
}
function oz(e, t) {
	var n = t.axis, r = n.dim, i = e, a = [], o = Number.MAX_VALUE, s = -1;
	return I(t.seriesModels, function(t, c) {
		var l = t.getData().mapDimensionsAll(r), u, d;
		if (t.getAxisTooltipData) {
			var f = t.getAxisTooltipData(l, e, n);
			d = f.dataIndices, u = f.nestestValue;
		} else {
			if (d = t.indicesOfNearest(r, l[0], e, n.type === "category" ? .5 : null), !d.length) return;
			u = t.getData().get(l[0], d[0]);
		}
		if (vc(u)) {
			var p = e - u, m = Math.abs(p);
			m <= o && ((m < o || p >= 0 && s < 0) && (o = m, s = p, i = u, a.length = 0), I(d, function(e) {
				a.push({
					seriesIndex: t.seriesIndex,
					dataIndexInside: e,
					dataIndex: t.getData().getRawIndex(e)
				});
			}));
		}
	}), {
		payloadBatch: a,
		snapToValue: i
	};
}
function sz(e, t, n, r) {
	e[t.key] = {
		value: n,
		payloadBatch: r
	};
}
function cz(e, t, n, r) {
	var i = n.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
	if (t.triggerTooltip && i.length) {
		var c = t.coordSys.model, l = _N(c), u = e.map[l];
		u || (u = e.map[l] = {
			coordSysId: c.id,
			coordSysIndex: c.componentIndex,
			coordSysType: c.type,
			coordSysMainType: c.mainType,
			dataByAxis: []
		}, e.list.push(u)), u.dataByAxis.push({
			axisDim: a.dim,
			axisIndex: o.componentIndex,
			axisType: o.type,
			axisId: o.id,
			value: r,
			valueLabelOpt: {
				precision: s.get(["label", "precision"]),
				formatter: s.get(["label", "formatter"])
			},
			seriesDataIndices: i.slice()
		});
	}
}
function lz(e, t, n) {
	var r = n.axesInfo = [];
	I(t, function(t, n) {
		var i = t.axisPointerModel.option, a = e[n];
		a ? (!t.useHandle && (i.status = "show"), i.value = a.value, i.seriesDataIndices = (a.payloadBatch || []).slice()) : !t.useHandle && (i.status = "hide"), i.status === "show" && r.push({
			axisDim: t.axis.dim,
			axisIndex: t.axis.model.componentIndex,
			value: i.value
		});
	});
}
function uz(e, t, n, r) {
	if (mz(t) || !e.list.length) {
		r({ type: "hideTip" });
		return;
	}
	var i = ((e.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
	r({
		type: "showTip",
		escapeConnect: !0,
		x: t[0],
		y: t[1],
		tooltipOption: n.tooltipOption,
		position: n.position,
		dataIndexInside: i.dataIndexInside,
		dataIndex: i.dataIndex,
		seriesIndex: i.seriesIndex,
		dataByCoordSys: e.list
	});
}
function dz(e, t, n) {
	var r = n.getZr(), i = "axisPointerLastHighlights", a = rz(r)[i] || {}, o = rz(r)[i] = {};
	I(e, function(e, t) {
		var n = e.axisPointerModel.option;
		n.status === "show" && e.triggerEmphasis && I(n.seriesDataIndices, function(e) {
			o[e.seriesIndex + "|" + e.dataIndex] = e;
		});
	});
	var s = [], c = [];
	function l(e) {
		return {
			seriesIndex: e.seriesIndex,
			dataIndex: e.dataIndex
		};
	}
	I(a, function(e, t) {
		!o[t] && c.push(l(e));
	}), I(o, function(e, t) {
		!a[t] && s.push(l(e));
	}), c.length && n.dispatchAction({
		type: "downplay",
		escapeConnect: !0,
		notBlur: !0,
		batch: c
	}), s.length && n.dispatchAction({
		type: "highlight",
		escapeConnect: !0,
		notBlur: !0,
		batch: s
	});
}
function fz(e, t) {
	for (var n = 0; n < (e || []).length; n++) {
		var r = e[n];
		if (t.axis.dim === r.axisDim && t.axis.model.componentIndex === r.axisIndex) return r;
	}
}
function pz(e) {
	var t = e.axis.model, n = {}, r = n.axisDim = e.axis.dim;
	return n.axisIndex = n[r + "AxisIndex"] = t.componentIndex, n.axisName = n[r + "AxisName"] = t.name, n.axisId = n[r + "AxisId"] = t.id, n;
}
function mz(e) {
	return !e || e[0] == null || isNaN(e[0]) || e[1] == null || isNaN(e[1]);
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/install.js
function hz(e) {
	yN.registerAxisPointerClass("CartesianAxisPointer", VR), e.registerComponentModel(GR), e.registerComponentView(tz), e.registerPreprocessor(function(e) {
		if (e) {
			(!e.axisPointer || e.axisPointer.length === 0) && (e.axisPointer = {});
			var t = e.axisPointer.link;
			t && !V(t) && (e.axisPointer.link = [t]);
		}
	}), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, { overallReset: function(e, t) {
		e.getComponent("axisPointer").coordSysAxesInfo = sN(e, t);
	} }), e.registerAction({
		type: "updateAxisPointer",
		event: "updateAxisPointer",
		update: ":updateAxisPointer"
	}, iz);
}
//#endregion
//#region node_modules/echarts/lib/component/grid/install.js
function gz(e) {
	wM(AN), wM(hz);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/helper.js
var _z = [
	"x",
	"y",
	"radius",
	"angle",
	"single"
], vz = Yc(), yz = [
	"cartesian2d",
	"polar",
	"singleAxis"
];
function bz(e) {
	return F(yz, e.get("coordinateSystem")) >= 0;
}
function xz(e) {
	return e + "Axis";
}
function Sz(e, t) {
	var n = K(), r = [], i = K();
	e.eachComponent({
		mainType: "dataZoom",
		query: t
	}, function(e) {
		i.get(e.uid) || s(e);
	});
	var a;
	do
		a = !1, e.eachComponent("dataZoom", o);
	while (a);
	function o(e) {
		!i.get(e.uid) && c(e) && (s(e), a = !0);
	}
	function s(e) {
		i.set(e.uid, !0), r.push(e), l(e);
	}
	function c(e) {
		var t = !1;
		return e.eachTargetAxis(function(e, r) {
			var i = n.get(e);
			i && i[r] && (t = !0);
		}), t;
	}
	function l(e) {
		e.eachTargetAxis(function(e, t) {
			(n.get(e) || n.set(e, []))[t] = !0;
		});
	}
	return r;
}
function Cz(e) {
	var t = e.ecModel, n = {
		infoList: [],
		infoMap: K()
	};
	return e.eachTargetAxis(function(e, r) {
		var i = t.getComponent(xz(e), r);
		if (i) {
			var a = i.getCoordSysModel();
			if (a) {
				var o = a.uid, s = n.infoMap.get(o);
				s || (s = {
					model: a,
					axisModels: []
				}, n.infoList.push(s), n.infoMap.set(o, s)), s.axisModels.push(i);
			}
		}
	}), n;
}
function wz(e) {
	var t = vz(mS(e));
	return t.axisProxyMap ||= K();
}
function Tz(e) {
	if (e) return wz(e.ecModel).get(e.uid);
}
function Ez(e, t) {
	wz(e.ecModel).set(e.uid, t);
}
function Dz(e, t) {
	var n = t.getAxisModel().axis.__alignTo;
	return n && e.getAxisProxy(n.dim, n.model.componentIndex) ? Tz(n.model) : null;
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
var Oz = function() {
	function e() {
		this.indexList = [], this.indexMap = [];
	}
	return e.prototype.add = function(e) {
		this.indexMap[e] || (this.indexList.push(e), this.indexMap[e] = !0);
	}, e;
}(), kz = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._autoThrottle = !0, n._noTarget = !0, n._rangePropMode = ["percent", "percent"], n;
	}
	return t.prototype.init = function(e, t, n) {
		var r = Az(e);
		this.settledOption = r, this.mergeDefaultAndTheme(e, n), this._doInit(r);
	}, t.prototype.mergeOption = function(e) {
		var t = Az(e);
		M(this.option, e, !0), M(this.settledOption, t, !0), this._doInit(t);
	}, t.prototype._doInit = function(e) {
		var t = this.option;
		this._setDefaultThrottle(e), this._updateRangeUse(e);
		var n = this.settledOption;
		I([["start", "startValue"], ["end", "endValue"]], function(e, r) {
			this._rangePropMode[r] === "value" && (t[e[0]] = n[e[0]] = null);
		}, this), this._resetTarget();
	}, t.prototype._resetTarget = function() {
		var e = this.get("orient", !0), t = this._targetAxisInfoMap = K();
		this._fillSpecifiedTargetAxis(t) ? this._orient = e || this._makeAutoOrientByTargetAxis() : (this._orient = e || "horizontal", this._fillAutoTargetAxisByOrient(t, this._orient)), this._noTarget = !0, t.each(function(e) {
			e.indexList.length && (this._noTarget = !1);
		}, this);
	}, t.prototype._fillSpecifiedTargetAxis = function(e) {
		var t = !1;
		return I(_z, function(n) {
			var r = this.getReferringComponents(xz(n), el);
			if (r.specified) {
				t = !0;
				var i = new Oz();
				I(r.models, function(e) {
					i.add(e.componentIndex);
				}), e.set(n, i);
			}
		}, this), t;
	}, t.prototype._fillAutoTargetAxisByOrient = function(e, t) {
		var n = this.ecModel, r = !0;
		if (r) {
			var i = t === "vertical" ? "y" : "x", a = n.findComponents({ mainType: i + "Axis" });
			o(a, i);
		}
		if (r) {
			var a = n.findComponents({
				mainType: "singleAxis",
				filter: function(e) {
					return e.get("orient", !0) === t;
				}
			});
			o(a, "single");
		}
		function o(t, n) {
			var i = t[0];
			if (i) {
				var a = new Oz();
				if (a.add(i.componentIndex), e.set(n, a), r = !1, n === "x" || n === "y") {
					var o = i.getReferringComponents("grid", $c).models[0];
					o && I(t, function(e) {
						i.componentIndex !== e.componentIndex && o === e.getReferringComponents("grid", $c).models[0] && a.add(e.componentIndex);
					});
				}
			}
		}
		r && I(_z, function(t) {
			if (r) {
				var i = n.findComponents({
					mainType: xz(t),
					filter: function(e) {
						return e.get("type", !0) === "category";
					}
				});
				if (i[0]) {
					var a = new Oz();
					a.add(i[0].componentIndex), e.set(t, a), r = !1;
				}
			}
		}, this);
	}, t.prototype._makeAutoOrientByTargetAxis = function() {
		var e;
		return this.eachTargetAxis(function(t) {
			!e && (e = t);
		}, this), e === "y" ? "vertical" : "horizontal";
	}, t.prototype._setDefaultThrottle = function(e) {
		if (e.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
			var t = this.ecModel.option;
			this.option.throttle = t.animation && t.animationDurationUpdate > 0 ? 100 : 20;
		}
	}, t.prototype._updateRangeUse = function(e) {
		var t = this._rangePropMode, n = this.get("rangeMode");
		I([["start", "startValue"], ["end", "endValue"]], function(r, i) {
			var a = e[r[0]] != null, o = e[r[1]] != null;
			a && !o ? t[i] = "percent" : !a && o ? t[i] = "value" : n ? t[i] = n[i] : a && (t[i] = "percent");
		});
	}, t.prototype.noTarget = function() {
		return this._noTarget;
	}, t.prototype.getFirstTargetAxisModel = function() {
		var e;
		return this.eachTargetAxis(function(t, n) {
			e ??= this.ecModel.getComponent(xz(t), n);
		}, this), e;
	}, t.prototype.eachTargetAxis = function(e, t) {
		this._targetAxisInfoMap.each(function(n, r) {
			I(n.indexList, function(n) {
				e.call(t, r, n);
			});
		});
	}, t.prototype.getAxisProxy = function(e, t) {
		return Tz(this.getAxisModel(e, t));
	}, t.prototype.getAxisModel = function(e, t) {
		var n = this._targetAxisInfoMap.get(e);
		if (n && n.indexMap[t]) return this.ecModel.getComponent(xz(e), t);
	}, t.prototype.setRawRange = function(e) {
		var t = this.option, n = this.settledOption;
		I([["start", "startValue"], ["end", "endValue"]], function(r) {
			(e[r[0]] != null || e[r[1]] != null) && (t[r[0]] = n[r[0]] = e[r[0]], t[r[1]] = n[r[1]] = e[r[1]]);
		}, this), this._updateRangeUse(e);
	}, t.prototype.setCalculatedRange = function(e) {
		var t = this.option;
		I([
			"start",
			"startValue",
			"end",
			"endValue"
		], function(n) {
			t[n] = e[n];
		});
	}, t.prototype.getPercentRange = function() {
		var e = this.findRepresentativeAxisProxy();
		if (e) return e.getWindow().percent;
	}, t.prototype.getValueRange = function(e, t) {
		if (e == null && t == null) {
			var n = this.findRepresentativeAxisProxy();
			if (n) return n.getWindow().value;
		} else return this.getAxisProxy(e, t).getWindow().value;
	}, t.prototype.findRepresentativeAxisProxy = function(e) {
		if (e) return Tz(e);
		for (var t, n = this._targetAxisInfoMap.keys(), r = 0; r < n.length; r++) for (var i = n[r], a = this._targetAxisInfoMap.get(i), o = 0; o < a.indexList.length; o++) {
			var s = this.getAxisProxy(i, a.indexList[o]);
			if (s.hostedBy(this)) return s;
			t ||= s;
		}
		return t;
	}, t.prototype.getRangePropMode = function() {
		return this._rangePropMode.slice();
	}, t.prototype.getOrient = function() {
		return this._orient;
	}, t.type = "dataZoom", t.dependencies = [
		"xAxis",
		"yAxis",
		"radiusAxis",
		"angleAxis",
		"singleAxis",
		"series",
		"toolbox"
	], t.defaultOption = {
		z: 4,
		filterMode: "filter",
		start: 0,
		end: 100
	}, t;
}(q_);
function Az(e) {
	var t = {};
	return I([
		"start",
		"end",
		"startValue",
		"endValue",
		"throttle"
	], function(n) {
		e.hasOwnProperty(n) && (t[n] = e[n]);
	}), t;
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/DataZoomView.js
var jz = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n, r) {
		this.dataZoomModel = e, this.ecModel = t, this.api = n;
	}, t.type = "dataZoom", t;
}(UO), Mz = function() {
	function e(e, t, n, r) {
		this._dimName = e, this._axisIndex = t, this.ecModel = r, this._dataZoomModel = n;
	}
	return e.prototype.hostedBy = function(e) {
		return this._dataZoomModel === e;
	}, e.prototype.getWindow = function() {
		return j(this._window);
	}, e.prototype.getTargetSeriesModels = function() {
		var e = [];
		return this.ecModel.eachSeries(function(t) {
			if (bz(t)) {
				var n = xz(this._dimName), r = t.getReferringComponents(n, $c).models[0];
				r && this._axisIndex === r.componentIndex && e.push(t);
			}
		}, this), e;
	}, e.prototype.getAxisModel = function() {
		return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
	}, e.prototype.getMinMaxSpan = function() {
		return j(this._minMaxSpan);
	}, e.prototype.calculateDataWindow = function(e) {
		var t = this._extent, n = this.getAxisModel().axis, r = n.scale, i = this._dataZoomModel.getRangePropMode(), a = [0, 100], o = [], s = [], c, l = [!1, !1];
		I(["start", "end"], function(n, u) {
			var d = e[n], f = e[n + "Value"];
			i[u] === "percent" ? (d ??= a[u], f = Vs(d, a, t), l[u] = !0) : (c = !0, f == null ? f = t[u] : (f = r.parse(f), r.sanitize && (f = r.sanitize(f, t))), d = Vs(f, t, a)), s[u] = f == null || isNaN(f) ? t[u] : f, o[u] = d == null || isNaN(d) ? a[u] : d;
		}), Ys(s), Ys(o);
		var u = this._minMaxSpan;
		c ? d(s, o, t, a, !1) : d(o, s, a, t, !0);
		function d(e, t, n, r, i) {
			var a = i ? "Span" : "ValueSpan";
			YI(0, e, n, "all", u["min" + a], u["max" + a]);
			for (var o = 0; o < 2; o++) t[o] = Vs(e[o], n, r, !0), i && (t[o] = t[o], l[o] = !0);
			hl(t);
		}
		var f = Cb(r) || xb(r), p = n.getExtent(), m = Ms(p[1] - p[0]), h = f ? 0 : $s(s, m, .5);
		I([[0, Fs], [1, Ps]], function(e) {
			var n = e[0], r = e[1];
			l[n] && isFinite(h) && (s[n] = qs(s[n], h), s[n] = As(t[1], js(t[0], s[n])), o[n] === a[n] && (s[n] = t[n], f && (s[n] = r(s[n]))));
		}), hl(s);
		var g = [Vs(s[0], t, a, !0), Vs(s[1], t, a, !0)];
		return hl(g), {
			value: s,
			percent: o,
			percentInverted: g,
			valuePrecision: h
		};
	}, e.prototype.reset = function(e, t) {
		if (this.hostedBy(e)) {
			var n = this.getAxisModel().axis;
			iw(n, 2);
			var r = n.scale.rawExtentInfo;
			this._extent = r.makeNoZoom(), this._updateMinMaxSpan();
			var i = e.settledOption;
			t && (i = P({
				start: t[0],
				end: t[1]
			}, i));
			var a = this._window = this.calculateDataWindow(i), o = a.percent, s = a.value;
			o[0] !== 0 && r.setZoomMM(0, s[0]), o[1] !== 100 && r.setZoomMM(1, s[1]);
		}
	}, e.prototype.filterData = function(e, t) {
		if (!this.hostedBy(e)) return;
		var n = this._dimName, r = this.getTargetSeriesModels(), i = e.get("filterMode"), a = this._window.value;
		if (i === "none") return;
		I(r, function(e) {
			var t = e.getData(), r = t.mapDimensionsAll(n);
			if (r.length) {
				if (i === "weakFilter") {
					var s = t.getStore(), c = L(r, function(e) {
						return t.getDimensionIndex(e);
					}, t);
					t.filterSelf(function(e) {
						for (var t, n, i, o = 0; o < r.length; o++) {
							var l = s.get(c[o], e), u = !isNaN(l), d = l < a[0], f = l > a[1];
							if (u && !d && !f) return !0;
							u && (i = !0), d && (t = !0), f && (n = !0);
						}
						return i && t && n;
					});
				} else I(r, function(n) {
					if (i === "empty") e.setData(t = t.map(n, function(e) {
						return o(e) ? e : NaN;
					}));
					else {
						var r = {};
						r[n] = a, t.selectRange(r);
					}
				});
				I(r, function(e) {
					t.setApproximateExtent(a, e);
				});
			}
		});
		function o(e) {
			return e >= a[0] && e <= a[1];
		}
	}, e.prototype._updateMinMaxSpan = function() {
		var e = this._minMaxSpan = {}, t = this._dataZoomModel, n = this._extent;
		I(["min", "max"], function(r) {
			var i = t.get(r + "Span"), a = t.get(r + "ValueSpan");
			a != null && (a = this.getAxisModel().axis.scale.parse(a)), a == null ? i != null && (a = Vs(i, [0, 100], n, !0) - n[0]) : i = Vs(n[0] + a, n, [0, 100], !0), e[r + "Span"] = i, e[r + "ValueSpan"] = a;
		}, this);
	}, e;
}(), Nz = {
	dirtyOnOverallProgress: !0,
	getTargetSeries: function(e) {
		function t(t) {
			e.eachComponent("dataZoom", function(n) {
				n.eachTargetAxis(function(r, i) {
					t(r, i, e.getComponent(xz(r), i), n);
				});
			});
		}
		var n = [];
		t(function(t, r, i, a) {
			if (!Tz(i)) {
				var o = new Mz(t, r, a, e);
				n.push(o), Ez(i, o);
			}
		});
		var r = K();
		return I(n, function(e) {
			I(e.getTargetSeriesModels(), function(e) {
				r.set(e.uid, e);
			});
		}), r;
	},
	overallReset: function(e, t) {
		e.eachComponent("dataZoom", function(e) {
			var n = [];
			e.eachTargetAxis(function(t, r) {
				var i = e.getAxisProxy(t, r), a = Dz(e, i);
				a ? n.push([i, a]) : i.reset(e, null);
			}), I(n, function(t) {
				t[0].reset(e, t[1].getWindow().percentInverted);
			}), e.eachTargetAxis(function(n, r) {
				e.getAxisProxy(n, r).filterData(e, t);
			});
		}), e.eachComponent("dataZoom", function(e) {
			var t = e.findRepresentativeAxisProxy();
			if (t) {
				var n = t.getWindow(), r = n.percent, i = n.value;
				e.setCalculatedRange({
					start: r[0],
					end: r[1],
					startValue: i[0],
					endValue: i[1]
				});
			}
		});
	}
};
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/dataZoomAction.js
function Pz(e) {
	e.registerAction("dataZoom", function(e, t) {
		I(Sz(t, e), function(t) {
			t.setRawRange({
				start: e.start,
				end: e.end,
				startValue: e.startValue,
				endValue: e.endValue
			});
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/installCommon.js
var Fz = gl();
function Iz(e) {
	Fz(e, function() {
		e.registerProcessor(e.PRIORITY.PROCESSOR.FILTER, Nz), Pz(e), e.registerSubTypeDefaulter("dataZoom", function() {
			return "slider";
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/helper/listComponent.js
function Lz(e, t) {
	var n = y_(t.get("padding")), r = t.getItemStyle(["color", "opacity"]);
	return r.fill = t.get("backgroundColor"), new cs({
		shape: {
			x: e.x - n[3],
			y: e.y - n[0],
			width: e.width + n[1] + n[3],
			height: e.height + n[0] + n[2],
			r: t.get("borderRadius")
		},
		style: r,
		silent: !0,
		z2: -1
	});
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/TooltipModel.js
var Rz = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
		z: 60,
		show: !0,
		showContent: !0,
		trigger: "item",
		triggerOn: "mousemove|click|mousewheel",
		alwaysShowContent: !1,
		renderMode: "auto",
		confine: null,
		showDelay: 0,
		hideDelay: 100,
		transitionDuration: .4,
		displayTransition: !0,
		enterable: !1,
		backgroundColor: Q.color.neutral00,
		shadowBlur: 10,
		shadowColor: "rgba(0, 0, 0, .2)",
		shadowOffsetX: 1,
		shadowOffsetY: 2,
		borderRadius: 4,
		borderWidth: 1,
		defaultBorderColor: Q.color.border,
		padding: null,
		extraCssText: "",
		axisPointer: {
			type: "line",
			axis: "auto",
			animation: "auto",
			animationDurationUpdate: 200,
			animationEasingUpdate: "exponentialOut",
			crossStyle: {
				color: Q.color.borderShade,
				width: 1,
				type: "dashed",
				textStyle: {}
			}
		},
		textStyle: {
			color: Q.color.tertiary,
			fontSize: 14
		}
	}, t;
}(q_);
//#endregion
//#region node_modules/echarts/lib/component/tooltip/helper.js
function zz(e) {
	var t = e.get("confine");
	return t == null ? e.get("renderMode") === "richText" : !!t;
}
function Bz(e) {
	if (J.domSupported) {
		for (var t = document.documentElement.style, n = 0, r = e.length; n < r; n++) if (e[n] in t) return e[n];
	}
}
var Vz = Bz([
	"transform",
	"webkitTransform",
	"OTransform",
	"MozTransform",
	"msTransform"
]), Hz = Bz([
	"webkitTransition",
	"transition",
	"OTransition",
	"MozTransition",
	"msTransition"
]);
function Uz(e, t) {
	if (!e) return t;
	t = v_(t, !0);
	var n = e.indexOf(t);
	return e = n === -1 ? t : "-" + e.slice(0, n) + "-" + t, e.toLowerCase();
}
function Wz(e, t) {
	var n = e.currentStyle || document.defaultView && document.defaultView.getComputedStyle(e);
	return n ? t ? n[t] : n : null;
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js
var Gz = Uz(Hz, "transition"), Kz = Uz(Vz, "transform"), qz = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (J.transform3dSupported ? "will-change:transform;" : "");
function Jz(e) {
	return e = e === "left" ? "right" : e === "right" ? "left" : e === "top" ? "bottom" : "top", e;
}
function Yz(e, t, n) {
	if (!U(n) || n === "inside") return "";
	var r = e.get("backgroundColor"), i = e.get("borderWidth");
	t = D_(t);
	var a = Jz(n), o = Math.max(Math.round(i) * 1.5, 6), s = "", c = Kz + ":", l;
	F(["left", "right"], a) > -1 ? (s += "top:50%", c += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", c += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
	var u = l * Math.PI / 180, d = o + i, f = d * Math.abs(Math.cos(u)) + d * Math.abs(Math.sin(u)), p = Math.round(((f - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (f - d) / 2) * 100) / 100;
	s += ";" + a + ":-" + p + "px";
	var m = t + " solid " + i + "px;";
	return "<div style=\"" + [
		"position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;",
		s + ";" + c + ";",
		"border-bottom:" + m,
		"border-right:" + m,
		"background-color:" + r + ";"
	].join("") + "\"></div>";
}
function Xz(e, t, n) {
	var r = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
	return n && (i = " " + e / 2 + "s " + r, a = "opacity" + i + ",visibility" + i), t || (i = " " + e + "s " + r, a += (a.length ? "," : "") + (J.transformSupported ? "" + Kz + i : ",left" + i + ",top" + i)), Gz + ":" + a;
}
function Zz(e, t, n) {
	var r = e.toFixed(0) + "px", i = t.toFixed(0) + "px";
	if (!J.transformSupported) return n ? "top:" + i + ";left:" + r + ";" : [["top", i], ["left", r]];
	var a = J.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + r + "," + i + (a ? ",0" : "") + ")";
	return n ? "top:0;left:0;" + Kz + ":" + o + ";" : [
		["top", 0],
		["left", 0],
		[Vz, o]
	];
}
function Qz(e) {
	var t = [], n = e.get("fontSize"), r = e.getTextColor();
	r && t.push("color:" + r), t.push("font:" + e.getFont());
	var i = G(e.get("lineHeight"), Math.round(n * 3 / 2));
	n && t.push("line-height:" + i + "px");
	var a = e.get("textShadowColor"), o = e.get("textShadowBlur") || 0, s = e.get("textShadowOffsetX") || 0, c = e.get("textShadowOffsetY") || 0;
	return a && o && t.push("text-shadow:" + s + "px " + c + "px " + o + "px " + a), I(["decoration", "align"], function(n) {
		var r = e.get(n);
		r && t.push("text-" + n + ":" + r);
	}), t.join(";");
}
function $z(e, t, n, r) {
	var i = [], a = e.get("transitionDuration"), o = e.get("backgroundColor"), s = e.get("shadowBlur"), c = e.get("shadowColor"), l = e.get("shadowOffsetX"), u = e.get("shadowOffsetY"), d = e.getModel("textStyle"), f = Uv(e, "html"), p = l + "px " + u + "px " + s + "px " + c;
	return i.push("box-shadow:" + p), t && a > 0 && i.push(Xz(a, n, r)), o && i.push("background-color:" + o), I([
		"width",
		"color",
		"radius"
	], function(t) {
		var n = "border-" + t, r = v_(n), a = e.get(r);
		a != null && i.push(n + ":" + a + (t === "color" ? "" : "px"));
	}), i.push(Qz(d)), f != null && i.push("padding:" + y_(f).join("px ") + "px"), i.join(";") + ";";
}
function eB(e, t, n, r, i) {
	var a = t && t.painter;
	if (n) {
		var o = a && a.getViewportRoot();
		o && cg(e, o, n, r, i);
	} else {
		e[0] = r, e[1] = i;
		var s = a && a.getViewportRootOffset();
		s && (e[0] += s.offsetLeft, e[1] += s.offsetTop);
	}
	e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
var tB = function() {
	function e(e, t) {
		if (this._show = !1, this._styleCoord = [
			0,
			0,
			0,
			0
		], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, J.wxa) return null;
		var n = document.createElement("div");
		n.domBelongToZr = !0, this.el = n;
		var r = this._zr = e.getZr(), i = t.appendTo, a = i && (U(i) ? document.querySelector(i) : _e(i) ? i : H(i) && i(e.getDom()));
		eB(this._styleCoord, r, a, e.getWidth() / 2, e.getHeight() / 2), (a || e.getDom()).appendChild(n), this._api = e, this._container = a;
		var o = this;
		n.onmouseenter = function() {
			o._enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0;
		}, n.onmousemove = function(e) {
			if (e ||= window.event, !o._enterable) {
				var t = r.handler;
				OE(r.painter.getViewportRoot(), e, !0), t.dispatch("mousemove", e);
			}
		}, n.onmouseleave = function() {
			o._inContent = !1, o._enterable && o._show && o.hideLater(o._hideDelay);
		};
	}
	return e.prototype.update = function(e) {
		if (!this._container) {
			var t = this._api.getDom(), n = Wz(t, "position"), r = t.style;
			r.position !== "absolute" && n !== "absolute" && (r.position = "relative");
		}
		var i = e.get("alwaysShowContent");
		i && this._moveIfResized(), this._alwaysShowContent = i, this._enableDisplayTransition = e.get("displayTransition") && e.get("transitionDuration") > 0, this.el.className = e.get("className") || "";
	}, e.prototype.show = function(e, t) {
		clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
		var n = this.el, r = n.style, i = this._styleCoord;
		n.innerHTML ? r.cssText = qz + $z(e, !this._firstShow, this._longHide, this._enableDisplayTransition) + Zz(i[0], i[1], !0) + ("border-color:" + D_(t) + ";") + (e.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : r.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
	}, e.prototype.setContent = function(e, t, n, r, i) {
		var a = this.el;
		if (e == null) {
			a.innerHTML = "";
			return;
		}
		var o = "";
		if (U(i) && n.get("trigger") === "item" && !zz(n) && (o = Yz(n, r, i)), U(e)) a.innerHTML = e + o;
		else if (e) {
			a.innerHTML = "", V(e) || (e = [e]);
			for (var s = 0; s < e.length; s++) _e(e[s]) && e[s].parentNode !== a && a.appendChild(e[s]);
			if (o && a.childNodes.length) {
				var c = document.createElement("div");
				c.innerHTML = o, a.appendChild(c);
			}
		}
	}, e.prototype.setEnterable = function(e) {
		this._enterable = e;
	}, e.prototype.getSize = function() {
		var e = this.el;
		return e ? [e.offsetWidth, e.offsetHeight] : [0, 0];
	}, e.prototype.moveTo = function(e, t) {
		if (this.el) {
			var n = this._styleCoord;
			if (eB(n, this._zr, this._container, e, t), n[0] != null && n[1] != null) {
				var r = this.el.style;
				I(Zz(n[0], n[1]), function(e) {
					r[e[0]] = e[1];
				});
			}
		}
	}, e.prototype._moveIfResized = function() {
		var e = this._styleCoord[2], t = this._styleCoord[3];
		this.moveTo(e * this._zr.getWidth(), t * this._zr.getHeight());
	}, e.prototype.hide = function() {
		var e = this, t = this.el.style;
		this._enableDisplayTransition ? (t.visibility = "hidden", t.opacity = "0") : t.display = "none", J.transform3dSupported && (t.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
			return e._longHide = !0;
		}, 500);
	}, e.prototype.hideLater = function(e) {
		this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(B(this.hide, this), e)) : this.hide());
	}, e.prototype.isShow = function() {
		return this._show;
	}, e.prototype.dispose = function() {
		clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
		var e = this._zr;
		lg(e && e.painter && e.painter.getViewportRoot(), this._container);
		var t = this.el;
		if (t) {
			t.onmouseenter = t.onmousemove = t.onmouseleave = null;
			var n = t.parentNode;
			n && n.removeChild(t);
		}
		this.el = this._container = null;
	}, e;
}(), nB = function() {
	function e(e) {
		this._show = !1, this._styleCoord = [
			0,
			0,
			0,
			0
		], this._alwaysShowContent = !1, this._enterable = !0, this._zr = e.getZr(), aB(this._styleCoord, this._zr, e.getWidth() / 2, e.getHeight() / 2);
	}
	return e.prototype.update = function(e) {
		var t = e.get("alwaysShowContent");
		t && this._moveIfResized(), this._alwaysShowContent = t;
	}, e.prototype.show = function() {
		this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
	}, e.prototype.setContent = function(e, t, n, r, i) {
		var a = this;
		W(e) && wc(""), this.el && this._zr.remove(this.el);
		var o = n.getModel("textStyle");
		this.el = new ps({
			style: {
				rich: t.richTextStyles,
				text: e,
				lineHeight: 22,
				borderWidth: 1,
				borderColor: r,
				textShadowColor: o.get("textShadowColor"),
				fill: n.get(["textStyle", "color"]),
				padding: Uv(n, "richText"),
				verticalAlign: "top",
				align: "left"
			},
			z: n.get("z")
		}), I([
			"backgroundColor",
			"borderRadius",
			"shadowColor",
			"shadowBlur",
			"shadowOffsetX",
			"shadowOffsetY"
		], function(e) {
			a.el.style[e] = n.get(e);
		}), I([
			"textShadowBlur",
			"textShadowOffsetX",
			"textShadowOffsetY"
		], function(e) {
			a.el.style[e] = o.get(e) || 0;
		}), this._zr.add(this.el);
		var s = this;
		this.el.on("mouseover", function() {
			s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
		}), this.el.on("mouseout", function() {
			s._enterable && s._show && s.hideLater(s._hideDelay), s._inContent = !1;
		});
	}, e.prototype.setEnterable = function(e) {
		this._enterable = e;
	}, e.prototype.getSize = function() {
		var e = this.el, t = this.el.getBoundingRect(), n = iB(e.style);
		return [t.width + n.left + n.right, t.height + n.top + n.bottom];
	}, e.prototype.moveTo = function(e, t) {
		var n = this.el;
		if (n) {
			var r = this._styleCoord;
			aB(r, this._zr, e, t), e = r[0], t = r[1];
			var i = n.style, a = rB(i.borderWidth || 0), o = iB(i);
			n.x = e + a + o.left, n.y = t + a + o.top, n.markRedraw();
		}
	}, e.prototype._moveIfResized = function() {
		var e = this._styleCoord[2], t = this._styleCoord[3];
		this.moveTo(e * this._zr.getWidth(), t * this._zr.getHeight());
	}, e.prototype.hide = function() {
		this.el && this.el.hide(), this._show = !1;
	}, e.prototype.hideLater = function(e) {
		this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(B(this.hide, this), e)) : this.hide());
	}, e.prototype.isShow = function() {
		return this._show;
	}, e.prototype.dispose = function() {
		this._zr.remove(this.el);
	}, e;
}();
function rB(e) {
	return Math.max(0, e);
}
function iB(e) {
	var t = rB(e.shadowBlur || 0), n = rB(e.shadowOffsetX || 0), r = rB(e.shadowOffsetY || 0);
	return {
		left: rB(t - n),
		right: rB(t + n),
		top: rB(t - r),
		bottom: rB(t + r)
	};
}
function aB(e, t, n, r) {
	e[0] = n, e[1] = r, e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/TooltipView.js
var oB = new cs({ shape: {
	x: -1,
	y: -1,
	width: 2,
	height: 2
} }), sB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.init = function(e, t) {
		if (!J.node && t.getDom()) {
			var n = e.getComponent("tooltip"), r = this._renderMode = al(n.get("renderMode"));
			this._tooltipContent = r === "richText" ? new nB(t) : new tB(t, { appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0) });
		}
	}, t.prototype.render = function(e, t, n) {
		if (!J.node && n.getDom()) {
			this.group.removeAll(), this._tooltipModel = e, this._ecModel = t, this._api = n;
			var r = this._tooltipContent;
			r.update(e), r.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? Uw(this, "_updatePosition", 50, "fixRate") : Ww(this, "_updatePosition");
		}
	}, t.prototype._initGlobalListener = function() {
		var e = this._tooltipModel.get("triggerOn");
		JR("itemTooltip", this._api, B(function(t, n, r) {
			e !== "none" && (e.indexOf(t) >= 0 ? this._tryShow(n, r) : t === "leave" && this._hide(r));
		}, this));
	}, t.prototype._keepShow = function() {
		var e = this._tooltipModel, t = this._ecModel, n = this._api, r = e.get("triggerOn");
		if (e.get("trigger") !== "axis" && (this._lastDataByCoordSys = null, this._cbParamsList = null), this._lastX != null && this._lastY != null && r !== "none" && r !== "click") {
			var i = this;
			clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
				!n.isDisposed() && i.manuallyShowTip(e, t, n, {
					x: i._lastX,
					y: i._lastY,
					dataByCoordSys: i._lastDataByCoordSys
				});
			});
		}
	}, t.prototype.manuallyShowTip = function(e, t, n, r) {
		if (r.from !== this.uid && !J.node && n.getDom()) {
			var i = lB(r, n);
			this._ticket = "";
			var a = r.dataByCoordSys, o = mB(r, t, n);
			if (o) {
				var s = o.el.getBoundingRect().clone();
				s.applyTransform(o.el.transform), this._tryShow({
					offsetX: s.x + s.width / 2,
					offsetY: s.y + s.height / 2,
					target: o.el,
					position: r.position,
					positionDefault: "bottom"
				}, i);
			} else if (r.tooltip && r.x != null && r.y != null) {
				var c = oB;
				c.x = r.x, c.y = r.y, c.update(), Z(c).tooltipConfig = {
					name: null,
					option: r.tooltip
				}, this._tryShow({
					offsetX: r.x,
					offsetY: r.y,
					target: c
				}, i);
			} else if (a) this._tryShow({
				offsetX: r.x,
				offsetY: r.y,
				position: r.position,
				dataByCoordSys: a,
				tooltipOption: r.tooltipOption
			}, i);
			else if (r.seriesIndex != null) {
				if (this._manuallyAxisShowTip(e, t, n, r)) return;
				var l = nz(r, t), u = l.point[0], d = l.point[1];
				u != null && d != null && this._tryShow({
					offsetX: u,
					offsetY: d,
					target: l.el,
					position: r.position,
					positionDefault: "bottom"
				}, i);
			} else r.x != null && r.y != null && (n.dispatchAction({
				type: "updateAxisPointer",
				x: r.x,
				y: r.y
			}), this._tryShow({
				offsetX: r.x,
				offsetY: r.y,
				position: r.position,
				target: n.getZr().findHover(r.x, r.y).target
			}, i));
		}
	}, t.prototype.manuallyHideTip = function(e, t, n, r) {
		var i = this._tooltipContent;
		this._tooltipModel && i.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, r.from !== this.uid && this._hide(lB(r, n));
	}, t.prototype._manuallyAxisShowTip = function(e, t, n, r) {
		var i = r.seriesIndex, a = r.dataIndex, o = t.getComponent("axisPointer").coordSysAxesInfo;
		if (i != null && a != null && o != null) {
			var s = t.getSeriesByIndex(i);
			if (s && cB([
				s.getData().getItemModel(a),
				s,
				(s.coordinateSystem || {}).model
			], this._tooltipModel).get("trigger") === "axis") return n.dispatchAction({
				type: "updateAxisPointer",
				seriesIndex: i,
				dataIndex: a,
				position: r.position
			}), !0;
		}
	}, t.prototype._tryShow = function(e, t) {
		var n = e.target;
		if (this._tooltipModel) {
			this._lastX = e.offsetX, this._lastY = e.offsetY;
			var r = e.dataByCoordSys;
			if (r && r.length) this._showAxisTooltip(r, e);
			else if (n) {
				if (Z(n).ssrType === "legend") return;
				this._lastDataByCoordSys = null, this._cbParamsList = null;
				var i, a;
				Ok(n, function(e) {
					if (e.tooltipDisabled) return i = a = null, !0;
					i || a || (Z(e).dataIndex == null ? Z(e).tooltipConfig != null && (a = e) : i = e);
				}, !0), i ? this._showSeriesItemTooltip(e, i, t) : a ? this._showComponentItemTooltip(e, a, t) : this._hide(t);
			} else this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(t);
		}
	}, t.prototype._showOrMove = function(e, t) {
		var n = e.get("showDelay");
		t = B(t, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(t, n) : t();
	}, t.prototype._showAxisTooltip = function(e, t) {
		var n = this._ecModel, r = this._tooltipModel, i = [t.offsetX, t.offsetY], a = cB([t.tooltipOption], r), o = this._renderMode, s = [], c = kv("section", {
			blocks: [],
			noHeader: !0
		}), l = [], u = new Wv();
		I(e, function(e) {
			I(e.dataByAxis, function(e) {
				var t = n.getComponent(e.axisDim + "Axis", e.axisIndex), i = e.value, a = t.axis, d = a.scale.parse(i);
				if (t && i != null) {
					var f = PR(i, a, n, e.seriesDataIndices, e.valueLabelOpt), p = kv("section", {
						header: f,
						noHeader: !De(f),
						sortBlocks: !0,
						blocks: []
					});
					c.blocks.push(p), I(e.seriesDataIndices, function(i) {
						var a = n.getSeriesByIndex(i.seriesIndex), c = i.dataIndexInside, m = a.getDataParams(c);
						if (!(m.dataIndex < 0)) {
							m.axisDim = e.axisDim, m.axisIndex = e.axisIndex, m.axisType = e.axisType, m.axisId = e.axisId, m.axisValue = lx(t.axis, { value: d }), m.axisValueLabel = f, m.marker = u.makeTooltipMarker("item", D_(m.color), o);
							var h = nv(a.formatTooltip(c, !0, null)), g = h.frag;
							if (g) {
								var _ = cB([a], r).get("valueFormatter");
								p.blocks.push(_ ? N({ valueFormatter: _ }, g) : g);
							}
							h.text && l.push(h.text), s.push(m);
						}
					});
				}
			});
		}), c.blocks.reverse(), l.reverse();
		var d = t.position, f = Fv(c, u, o, a.get("order"), n.get("useUTC"), a.get("textStyle"));
		f && l.unshift(f);
		var p = o === "richText" ? "\n\n" : "<br/>", m = l.join(p);
		this._showOrMove(a, function() {
			this._updateContentNotChangedOnAxis(e, s) ? this._updatePosition(a, d, i[0], i[1], this._tooltipContent, s) : this._showTooltipContent(a, m, s, Math.random() + "", i[0], i[1], d, null, u);
		});
	}, t.prototype._showSeriesItemTooltip = function(e, t, n) {
		var r = this._ecModel, i = Z(t), a = i.seriesIndex, o = r.getSeriesByIndex(a), s = i.dataModel || o, c = i.dataIndex, l = i.dataType, u = s.getData(l), d = this._renderMode, f = e.positionDefault, p = cB([
			u.getItemModel(c),
			s,
			o && (o.coordinateSystem || {}).model
		], this._tooltipModel, f ? { position: f } : null), m = p.get("trigger");
		if (m == null || m === "item") {
			var h = s.getDataParams(c, l), g = new Wv();
			h.marker = g.makeTooltipMarker("item", D_(h.color), d);
			var _ = nv(s.formatTooltip(c, !1, l)), v = p.get("order"), y = p.get("valueFormatter"), b = _.frag, x = b ? Fv(y ? N({ valueFormatter: y }, b) : b, g, d, v, r.get("useUTC"), p.get("textStyle")) : _.text, S = "item_" + s.name + "_" + c;
			this._showOrMove(p, function() {
				this._showTooltipContent(p, x, h, S, e.offsetX, e.offsetY, e.position, e.target, g);
			}), n({
				type: "showTip",
				dataIndexInside: c,
				dataIndex: u.getRawIndex(c),
				seriesIndex: a,
				from: this.uid
			});
		}
	}, t.prototype._showComponentItemTooltip = function(e, t, n) {
		var r = this._renderMode === "html", i = Z(t), a = i.tooltipConfig.option || {}, o = a.encodeHTMLContent;
		if (U(a)) {
			var s = a;
			a = {
				content: s,
				formatter: s
			}, o = !0;
		}
		o && r && a.content && (a = j(a), a.content = gg(a.content));
		var c = [a], l = this._ecModel.getComponent(i.componentMainType, i.componentIndex);
		l && c.push(l), c.push({ formatter: a.content });
		var u = e.positionDefault, d = cB(c, this._tooltipModel, u ? { position: u } : null), f = d.get("content"), p = Math.random() + "", m = new Wv();
		this._showOrMove(d, function() {
			var n = j(d.get("formatterParams") || {});
			this._showTooltipContent(d, f, n, p, e.offsetX, e.offsetY, e.position, t, m);
		}), n({
			type: "showTip",
			from: this.uid
		});
	}, t.prototype._showTooltipContent = function(e, t, n, r, i, a, o, s, c) {
		if (this._ticket = "", e.get("showContent") && e.get("show")) {
			var l = this._tooltipContent;
			l.setEnterable(e.get("enterable"));
			var u = e.get("formatter");
			o ||= e.get("position");
			var d = t, f = this._getNearestPoint([i, a], n, e.get("trigger"), e.get("borderColor"), e.get("defaultBorderColor", !0)).color;
			if (u) {
				if (U(u)) {
					var p = e.ecModel.get("useUTC"), m = V(n) ? n[0] : n, h = m && m.axisType && m.axisType.indexOf("time") >= 0;
					d = u, h && (d = Qg(m.axisValue, d, p)), d = C_(d, n, !0);
				} else if (H(u)) {
					var g = B(function(t, r) {
						t === this._ticket && (l.setContent(r, c, e, f, o), this._updatePosition(e, o, i, a, l, n, s));
					}, this);
					this._ticket = r, d = u(n, r, g);
				} else d = u;
			}
			l.setContent(d, c, e, f, o), l.show(e, f), this._updatePosition(e, o, i, a, l, n, s);
		}
	}, t.prototype._getNearestPoint = function(e, t, n, r, i) {
		if (n === "axis" || V(t)) return { color: r || i };
		if (!V(t)) return { color: r || t.color || t.borderColor };
	}, t.prototype._updatePosition = function(e, t, n, r, i, a, o) {
		var s = this._api.getWidth(), c = this._api.getHeight();
		t ||= e.get("position");
		var l = i.getSize(), u = e.get("align"), d = e.get("verticalAlign"), f = o && o.getBoundingRect().clone();
		if (o && f.applyTransform(o.transform), H(t) && (t = t([n, r], a, i.el, f, {
			viewSize: [s, c],
			contentSize: l.slice()
		})), V(t)) n = Hs(t[0], s), r = Hs(t[1], c);
		else if (W(t)) {
			var p = t;
			p.width = l[0], p.height = l[1];
			var m = L_(p, {
				width: s,
				height: c
			});
			n = m.x, r = m.y, u = null, d = null;
		} else if (U(t) && o) {
			var h = fB(t, f, l, e.get("borderWidth"));
			n = h[0], r = h[1];
		} else {
			var h = uB(n, r, i, s, c, u ? null : 20, d ? null : 20);
			n = h[0], r = h[1];
		}
		if (u && (n -= pB(u) ? l[0] / 2 : u === "right" ? l[0] : 0), d && (r -= pB(d) ? l[1] / 2 : d === "bottom" ? l[1] : 0), zz(e)) {
			var h = dB(n, r, i, s, c);
			n = h[0], r = h[1];
		}
		i.moveTo(n, r);
	}, t.prototype._updateContentNotChangedOnAxis = function(e, t) {
		var n = this._lastDataByCoordSys, r = this._cbParamsList, i = !!n && n.length === e.length;
		return i && I(n, function(n, a) {
			var o = n.dataByAxis || [], s = (e[a] || {}).dataByAxis || [];
			i &&= o.length === s.length, i && I(o, function(e, n) {
				var a = s[n] || {}, o = e.seriesDataIndices || [], c = a.seriesDataIndices || [];
				i = i && e.value === a.value && e.axisType === a.axisType && e.axisId === a.axisId && o.length === c.length, i && I(o, function(e, t) {
					var n = c[t];
					i = i && e.seriesIndex === n.seriesIndex && e.dataIndex === n.dataIndex;
				}), r && I(e.seriesDataIndices, function(e) {
					var n = e.seriesIndex, a = t[n], o = r[n];
					a && o && o.data !== a.data && (i = !1);
				});
			});
		}), this._lastDataByCoordSys = e, this._cbParamsList = t, !!i;
	}, t.prototype._hide = function(e) {
		this._lastDataByCoordSys = null, this._cbParamsList = null, e({
			type: "hideTip",
			from: this.uid
		});
	}, t.prototype.dispose = function(e, t) {
		!J.node && t.getDom() && (Ww(this, "_updatePosition"), this._tooltipContent.dispose(), ez("itemTooltip", t), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
	}, t.type = "tooltip", t;
}(UO);
function cB(e, t, n) {
	var r = t.ecModel, i;
	n ? (i = new Jp(n, r, r), i = new Jp(t.option, i, r)) : i = t;
	for (var a = e.length - 1; a >= 0; a--) {
		var o = e[a];
		o && (o instanceof Jp && (o = o.get("tooltip", !0)), U(o) && (o = { formatter: o }), o && (i = new Jp(o, i, r)));
	}
	return i;
}
function lB(e, t) {
	return e.dispatchAction || B(t.dispatchAction, t);
}
function uB(e, t, n, r, i, a, o) {
	var s = n.getSize(), c = s[0], l = s[1];
	return a != null && (e + c + a + 2 > r ? e -= c + a : e += a), o != null && (t + l + o > i ? t -= l + o : t += o), [e, t];
}
function dB(e, t, n, r, i) {
	var a = n.getSize(), o = a[0], s = a[1];
	return e = Math.min(e + o, r) - o, t = Math.min(t + s, i) - s, e = Math.max(e, 0), t = Math.max(t, 0), [e, t];
}
function fB(e, t, n, r) {
	var i = n[0], a = n[1], o = Math.ceil(Math.SQRT2 * r) + 8, s = 0, c = 0, l = t.width, u = t.height;
	switch (e) {
		case "inside":
			s = t.x + l / 2 - i / 2, c = t.y + u / 2 - a / 2;
			break;
		case "top":
			s = t.x + l / 2 - i / 2, c = t.y - a - o;
			break;
		case "bottom":
			s = t.x + l / 2 - i / 2, c = t.y + u + o;
			break;
		case "left":
			s = t.x - i - o, c = t.y + u / 2 - a / 2;
			break;
		case "right": s = t.x + l + o, c = t.y + u / 2 - a / 2;
	}
	return [s, c];
}
function pB(e) {
	return e === "center" || e === "middle";
}
function mB(e, t, n) {
	var r = Qc(e).queryOptionMap, i = r.keys()[0];
	if (i && i !== "series") {
		var a = tl(t, i, r.get(i), {
			useDefault: !1,
			enableAll: !1,
			enableNone: !1
		}).models[0];
		if (a) {
			var o = n.getViewOfComponentModel(a), s;
			if (o.group.traverse(function(t) {
				var n = Z(t).tooltipConfig;
				if (n && n.name === e.name) return s = t, !0;
			}), s) return {
				componentMainType: i,
				componentIndex: a.componentIndex,
				el: s
			};
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/install.js
function hB(e) {
	wM(hz), e.registerComponentModel(Rz), e.registerComponentView(sB), e.registerAction({
		type: "showTip",
		event: "showTip",
		update: "tooltip:manuallyShowTip"
	}, Re), e.registerAction({
		type: "hideTip",
		event: "hideTip",
		update: "tooltip:manuallyHideTip"
	}, Re);
}
//#endregion
//#region node_modules/echarts/lib/visual/visualSolution.js
var gB = I;
function _B(e) {
	if (e) {
		for (var t in e) if (e.hasOwnProperty(t)) return !0;
	}
}
function vB(e, t, n) {
	var r = {};
	return gB(t, function(t) {
		var a = r[t] = i();
		gB(e[t], function(e, r) {
			if (FI.isValidType(r)) {
				var i = {
					type: r,
					visual: e
				};
				n && n(i, t), a[r] = new FI(i), r === "opacity" && (i = j(i), i.type = "colorAlpha", a.__hidden.__alphaForOpacity = new FI(i));
			}
		});
	}), r;
	function i() {
		var e = function() {};
		return e.prototype.__hidden = e.prototype, new e();
	}
}
function yB(e, t, n) {
	var r;
	I(n, function(e) {
		t.hasOwnProperty(e) && _B(t[e]) && (r = !0);
	}), r && I(n, function(n) {
		t.hasOwnProperty(n) && _B(t[n]) ? e[n] = j(t[n]) : delete e[n];
	});
}
function bB(e, t, n, r) {
	var i = {};
	return I(e, function(e) {
		i[e] = FI.prepareVisualTypes(t[e]);
	}), { progress: function(e, a) {
		var o;
		r != null && (o = a.getDimensionIndex(r));
		function s(e) {
			return Tk(a, l, e);
		}
		function c(e, t) {
			Dk(a, l, e, t);
		}
		for (var l, u = a.getStore(); (l = e.next()) != null;) {
			var d = a.getRawDataItem(l);
			if (!(d && d.visualMap === !1)) for (var f = r == null ? l : u.get(o, l), p = n(f), m = t[p], h = i[p], g = 0, _ = h.length; g < _; g++) {
				var v = h[g];
				m[v] && m[v].applyVisual(f, s, c);
			}
		}
	} };
}
//#endregion
//#region node_modules/echarts/lib/component/title/install.js
var xB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.layoutMode = {
			type: "box",
			ignoreSize: !0
		}, n;
	}
	return t.type = "title", t.defaultOption = {
		z: 6,
		show: !0,
		text: "",
		target: "blank",
		subtext: "",
		subtarget: "blank",
		left: "center",
		top: Q.size.m,
		backgroundColor: Q.color.transparent,
		borderColor: Q.color.primary,
		borderWidth: 0,
		padding: 5,
		itemGap: 10,
		textStyle: {
			fontSize: 18,
			fontWeight: "bold",
			color: Q.color.primary
		},
		subtextStyle: {
			fontSize: 12,
			color: Q.color.quaternary
		}
	}, t;
}(q_), SB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n) {
		if (this.group.removeAll(), e.get("show")) {
			var r = this.group, i = e.getModel("textStyle"), a = e.getModel("subtextStyle"), o = e.get("textAlign"), s = G(e.get("textBaseline"), e.get("textVerticalAlign")), c = new ps({
				style: Tp(i, {
					text: e.get("text"),
					fill: i.getTextColor()
				}, { disableBox: !0 }),
				z2: 10
			}), l = c.getBoundingRect(), u = e.get("subtext"), d = new ps({
				style: Tp(a, {
					text: u,
					fill: a.getTextColor(),
					y: l.height + e.get("itemGap"),
					verticalAlign: "top"
				}, { disableBox: !0 }),
				z2: 10
			}), f = e.get("link"), p = e.get("sublink"), m = e.get("triggerEvent", !0);
			c.silent = !f && !m, d.silent = !p && !m, f && c.on("click", function() {
				O_(f, "_" + e.get("target"));
			}), p && d.on("click", function() {
				O_(p, "_" + e.get("subtarget"));
			}), Z(c).eventData = Z(d).eventData = m ? {
				componentType: "title",
				componentIndex: e.componentIndex
			} : null, r.add(c), u && r.add(d);
			var h = r.getBoundingRect(), g = e.getBoxLayoutParams();
			g.width = h.width, g.height = h.height;
			var _ = L_(g, B_(e, n).refContainer, e.get("padding"));
			o || (o = e.get("left") || e.get("right"), o === "middle" && (o = "center"), o === "right" ? _.x += _.width : o === "center" && (_.x += _.width / 2)), s || (s = e.get("top") || e.get("bottom"), s === "center" && (s = "middle"), s === "bottom" ? _.y += _.height : s === "middle" && (_.y += _.height / 2), s ||= "top"), r.x = _.x, r.y = _.y, r.markRedraw();
			var v = {
				align: o,
				verticalAlign: s
			};
			c.setStyle(v), d.setStyle(v), h = r.getBoundingRect();
			var y = _.margin, b = e.getItemStyle(["color", "opacity"]);
			b.fill = e.get("backgroundColor");
			var x = new cs({
				shape: {
					x: h.x - y[3],
					y: h.y - y[0],
					width: h.width + y[1] + y[3],
					height: h.height + y[0] + y[2],
					r: e.get("borderRadius")
				},
				style: b,
				subPixelOptimize: !0,
				silent: !0
			});
			r.add(x);
		}
	}, t.type = "title", t;
}(UO);
function CB(e) {
	e.registerComponentModel(xB), e.registerComponentView(SB);
}
//#endregion
//#region node_modules/echarts/lib/component/legend/LegendModel.js
var wB = function(e, t) {
	if (t === "all") return {
		type: "all",
		title: e.getLocaleModel().get([
			"legend",
			"selector",
			"all"
		])
	};
	if (t === "inverse") return {
		type: "inverse",
		title: e.getLocaleModel().get([
			"legend",
			"selector",
			"inverse"
		])
	};
}, TB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.layoutMode = {
			type: "box",
			ignoreSize: !0
		}, n;
	}
	return t.prototype.init = function(e, t, n) {
		this.mergeDefaultAndTheme(e, n), e.selected = e.selected || {}, this._updateSelector(e);
	}, t.prototype.mergeOption = function(t, n) {
		e.prototype.mergeOption.call(this, t, n), this._updateSelector(t);
	}, t.prototype._updateSelector = function(e) {
		var t = e.selector, n = this.ecModel;
		t === !0 && (t = e.selector = ["all", "inverse"]), V(t) && I(t, function(e, r) {
			U(e) && (e = { type: e }), t[r] = M(e, wB(n, e.type));
		});
	}, t.prototype.optionUpdated = function() {
		this._updateData(this.ecModel);
		var e = this._data;
		if (e[0] && this.get("selectedMode") === "single") {
			for (var t = !1, n = 0; n < e.length; n++) {
				var r = e[n].get("name");
				if (this.isSelected(r)) {
					this.select(r), t = !0;
					break;
				}
			}
			!t && this.select(e[0].get("name"));
		}
	}, t.prototype._updateData = function(e) {
		var t = [], n = [];
		e.eachRawSeries(function(r) {
			var i = r.name;
			n.push(i);
			var a;
			if (r.legendVisualProvider) {
				var o = r.legendVisualProvider.getAllNames();
				e.isSeriesFiltered(r) || (n = n.concat(o)), o.length ? t = t.concat(o) : a = !0;
			} else a = !0;
			a && Uc(r) && t.push(r.name);
		}), this._availableNames = n;
		var r = this.get("data") || t, i = K(), a = L(r, function(e) {
			return (U(e) || me(e)) && (e = { name: e }), i.get(e.name) ? null : (i.set(e.name, !0), new Jp(e, this, this.ecModel));
		}, this);
		this._data = le(a, function(e) {
			return !!e;
		});
	}, t.prototype.getData = function() {
		return this._data;
	}, t.prototype.select = function(e) {
		var t = this.option.selected;
		if (this.get("selectedMode") === "single") {
			var n = this._data;
			I(n, function(e) {
				t[e.get("name")] = !1;
			});
		}
		t[e] = !0;
	}, t.prototype.unSelect = function(e) {
		this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
	}, t.prototype.toggleSelected = function(e) {
		var t = this.option.selected;
		t.hasOwnProperty(e) || (t[e] = !0), this[t[e] ? "unSelect" : "select"](e);
	}, t.prototype.allSelect = function() {
		var e = this._data, t = this.option.selected;
		I(e, function(e) {
			t[e.get("name", !0)] = !0;
		});
	}, t.prototype.inverseSelect = function() {
		var e = this._data, t = this.option.selected;
		I(e, function(e) {
			var n = e.get("name", !0);
			t.hasOwnProperty(n) || (t[n] = !0), t[n] = !t[n];
		});
	}, t.prototype.isSelected = function(e) {
		var t = this.option.selected;
		return !(t.hasOwnProperty(e) && !t[e]) && F(this._availableNames, e) >= 0;
	}, t.prototype.getOrient = function() {
		return this.get("orient") === "vertical" ? {
			index: 1,
			name: "vertical"
		} : {
			index: 0,
			name: "horizontal"
		};
	}, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
		z: 4,
		show: !0,
		orient: "horizontal",
		left: "center",
		bottom: Q.size.m,
		align: "auto",
		backgroundColor: Q.color.transparent,
		borderColor: Q.color.border,
		borderRadius: 0,
		borderWidth: 0,
		padding: 5,
		itemGap: 8,
		itemWidth: 25,
		itemHeight: 14,
		symbolRotate: "inherit",
		symbolKeepAspect: !0,
		inactiveColor: Q.color.disabled,
		inactiveBorderColor: Q.color.disabled,
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
			inactiveColor: Q.color.disabled,
			inactiveWidth: 2,
			opacity: "inherit",
			type: "inherit",
			cap: "inherit",
			join: "inherit",
			dashOffset: "inherit",
			miterLimit: "inherit"
		},
		textStyle: { color: Q.color.secondary },
		selectedMode: !0,
		selector: !1,
		selectorLabel: {
			show: !0,
			borderRadius: 10,
			padding: [
				3,
				5,
				3,
				5
			],
			fontSize: 12,
			fontFamily: "sans-serif",
			color: Q.color.tertiary,
			borderWidth: 1,
			borderColor: Q.color.border
		},
		emphasis: { selectorLabel: {
			show: !0,
			color: Q.color.quaternary
		} },
		selectorPosition: "auto",
		selectorItemGap: 7,
		selectorButtonGap: 10,
		tooltip: { show: !1 },
		triggerEvent: !1
	}, t;
}(q_), EB = fe, DB = I, OB = hd, kB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.newlineDisabled = !1, n;
	}
	return t.prototype.init = function() {
		this.group.add(this._contentGroup = new OB()), this.group.add(this._selectorGroup = new OB()), this._isFirstRender = !0;
	}, t.prototype.getContentGroup = function() {
		return this._contentGroup;
	}, t.prototype.getSelectorGroup = function() {
		return this._selectorGroup;
	}, t.prototype.render = function(e, t, n) {
		var r = this._isFirstRender;
		if (this._isFirstRender = !1, this.resetInner(), e.get("show", !0)) {
			var i = e.get("align"), a = e.get("orient");
			(!i || i === "auto") && (i = e.get("left") === "right" && a === "vertical" ? "right" : "left");
			var o = e.get("selector", !0), s = e.get("selectorPosition", !0);
			o && (!s || s === "auto") && (s = a === "horizontal" ? "end" : "start"), this.renderInner(i, e, t, n, o, a, s);
			var c = B_(e, n).refContainer, l = e.getBoxLayoutParams(), u = e.get("padding"), d = L_(l, c, u), f = this.layoutInner(e, i, d, r, o, s), p = L_(P({
				width: f.width,
				height: f.height
			}, l), c, u);
			this.group.x = p.x - f.x, this.group.y = p.y - f.y, this.group.markRedraw(), this.group.add(this._backgroundEl = Lz(f, e));
		}
	}, t.prototype.resetInner = function() {
		this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
	}, t.prototype.renderInner = function(e, t, n, r, i, a, o) {
		var s = this.getContentGroup(), c = K(), l = t.get("selectedMode"), u = t.get("triggerEvent"), d = [];
		n.eachRawSeries(function(e) {
			!e.get("legendHoverLink") && d.push(e.id);
		}), DB(t.getData(), function(i, a) {
			var o = this, f = i.get("name");
			if (!this.newlineDisabled && (f === "" || f === "\n")) {
				var p = new OB();
				p.newline = !0, s.add(p);
				return;
			}
			var m = n.getSeriesByName(f)[0];
			if (!c.get(f)) {
				if (m) {
					var h = m.getData(), g = h.getVisual("legendLineStyle") || {}, _ = h.getVisual("legendIcon"), v = h.getVisual("style"), y = this._createItem(m, f, a, i, t, e, g, v, _, l, r);
					y.on("click", EB(MB, f, null, r, d)).on("mouseover", EB(NB, m.name, null, r, d)).on("mouseout", EB(PB, m.name, null, r, d)), n.ssr && y.eachChild(function(e) {
						var t = Z(e);
						t.seriesIndex = m.seriesIndex, t.dataIndex = a, t.ssrType = "legend";
					}), u && y.eachChild(function(e) {
						o.packEventData(e, t, m, a, f);
					}), c.set(f, !0);
				} else n.eachRawSeries(function(o) {
					var s = this;
					if (!c.get(f) && o.legendVisualProvider) {
						var p = o.legendVisualProvider;
						if (!p.containName(f)) return;
						var m = p.indexOfName(f), h = p.getItemVisual(m, "style"), g = p.getItemVisual(m, "legendIcon"), _ = ai(h.fill);
						_ && _[3] === 0 && (_[3] = .2, h = N(N({}, h), { fill: gi(_, "rgba") }));
						var v = this._createItem(o, f, a, i, t, e, {}, h, g, l, r);
						v.on("click", EB(MB, null, f, r, d)).on("mouseover", EB(NB, null, f, r, d)).on("mouseout", EB(PB, null, f, r, d)), n.ssr && v.eachChild(function(e) {
							var t = Z(e);
							t.seriesIndex = o.seriesIndex, t.dataIndex = a, t.ssrType = "legend";
						}), u && v.eachChild(function(e) {
							s.packEventData(e, t, o, a, f);
						}), c.set(f, !0);
					}
				}, this);
			}
		}, this), i && this._createSelector(i, t, r, a, o);
	}, t.prototype.packEventData = function(e, t, n, r, i) {
		var a = {
			componentType: "legend",
			componentIndex: t.componentIndex,
			dataIndex: r,
			value: i,
			seriesIndex: n.seriesIndex
		};
		Z(e).eventData = a;
	}, t.prototype._createSelector = function(e, t, n, r, i) {
		var a = this.getSelectorGroup();
		DB(e, function(e) {
			var r = e.type, i = new ps({
				style: {
					x: 0,
					y: 0,
					align: "center",
					verticalAlign: "middle"
				},
				onclick: function() {
					n.dispatchAction({
						type: r === "all" ? "legendAllSelect" : "legendInverseSelect",
						legendId: t.id
					});
				}
			});
			a.add(i), Cp(i, {
				normal: t.getModel("selectorLabel"),
				emphasis: t.getModel(["emphasis", "selectorLabel"])
			}, { defaultText: e.title }), Nu(i);
		});
	}, t.prototype._createItem = function(e, t, n, r, i, a, o, s, c, l, u) {
		var d = e.visualDrawType, f = i.get("itemWidth"), p = i.get("itemHeight"), m = i.isSelected(t), h = r.get("symbolRotate"), g = r.get("symbolKeepAspect"), _ = r.get("icon");
		c = _ || c || "roundRect";
		var v = AB(c, r, o, s, d, m, u), y = new OB(), b = r.getModel("textStyle");
		if (H(e.getLegendIcon) && (!_ || _ === "inherit")) y.add(e.getLegendIcon({
			itemWidth: f,
			itemHeight: p,
			icon: c,
			iconRotate: h,
			itemStyle: v.itemStyle,
			lineStyle: v.lineStyle,
			symbolKeepAspect: g
		}));
		else {
			var x = _ === "inherit" && e.getData().getVisual("symbol") ? h === "inherit" ? e.getData().getVisual("symbolRotate") : h : 0;
			y.add(jB({
				itemWidth: f,
				itemHeight: p,
				icon: c,
				iconRotate: x,
				itemStyle: v.itemStyle,
				lineStyle: v.lineStyle,
				symbolKeepAspect: g
			}));
		}
		var S = a === "left" ? f + 5 : -5, C = a, w = i.get("formatter"), T = t;
		U(w) && w ? T = w.replace("{name}", t ?? "") : H(w) && (T = w(t));
		var E = m ? b.getTextColor() : r.get("inactiveColor");
		y.add(new ps({ style: Tp(b, {
			text: T,
			x: S,
			y: p / 2,
			fill: E,
			align: C,
			verticalAlign: "middle"
		}, { inheritColor: E }) }));
		var D = new cs({
			shape: y.getBoundingRect(),
			style: { fill: "transparent" }
		}), O = r.getModel("tooltip");
		return O.get("show") && ap({
			el: D,
			componentModel: i,
			itemName: t,
			itemTooltipOption: O.option
		}), y.add(D), y.eachChild(function(e) {
			e.silent = !0;
		}), D.silent = !l, this.getContentGroup().add(y), Nu(y), y.__legendDataIndex = n, y;
	}, t.prototype.layoutInner = function(e, t, n, r, i, a) {
		var o = this.getContentGroup(), s = this.getSelectorGroup();
		N_(e.get("orient"), o, e.get("itemGap"), n.width, n.height);
		var c = o.getBoundingRect(), l = [-c.x, -c.y];
		if (s.markRedraw(), o.markRedraw(), i) {
			N_("horizontal", s, e.get("selectorItemGap", !0));
			var u = s.getBoundingRect(), d = [-u.x, -u.y], f = e.get("selectorButtonGap", !0), p = e.getOrient().index, m = p === 0 ? "width" : "height", h = p === 0 ? "height" : "width", g = p === 0 ? "y" : "x";
			a === "end" ? d[p] += c[m] + f : l[p] += u[m] + f, d[1 - p] += c[h] / 2 - u[h] / 2, s.x = d[0], s.y = d[1], o.x = l[0], o.y = l[1];
			var _ = {
				x: 0,
				y: 0
			};
			return _[m] = c[m] + f + u[m], _[h] = Math.max(c[h], u[h]), _[g] = Math.min(0, u[g] + d[1 - p]), _;
		}
		return o.x = l[0], o.y = l[1], this.group.getBoundingRect();
	}, t.prototype.remove = function() {
		this.getContentGroup().removeAll(), this._isFirstRender = !0;
	}, t.type = "legend.plain", t;
}(UO);
function AB(e, t, n, r, i, a, o) {
	function s(e, t) {
		e.lineWidth === "auto" && (e.lineWidth = t.lineWidth > 0 ? 2 : 0), DB(e, function(n, r) {
			e[r] === "inherit" && (e[r] = t[r]);
		});
	}
	var c = t.getModel("itemStyle"), l = c.getItemStyle(), u = e.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", d = c.getShallow("decal");
	l.decal = !d || d === "inherit" ? r.decal : TA(d, o), l.fill === "inherit" && (l.fill = r[i]), l.stroke === "inherit" && (l.stroke = r[u]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? r : n).opacity), s(l, r);
	var f = t.getModel("lineStyle"), p = f.getLineStyle();
	if (s(p, n), l.fill === "auto" && (l.fill = r.fill), l.stroke === "auto" && (l.stroke = r.fill), p.stroke === "auto" && (p.stroke = r.fill), !a) {
		var m = t.get("inactiveBorderWidth"), h = l[u];
		l.lineWidth = m === "auto" ? r.lineWidth > 0 && h ? 2 : 0 : l.lineWidth, l.fill = t.get("inactiveColor"), l.stroke = t.get("inactiveBorderColor"), p.stroke = f.get("inactiveColor"), p.lineWidth = f.get("inactiveWidth");
	}
	return {
		itemStyle: l,
		lineStyle: p
	};
}
function jB(e) {
	var t = e.icon || "roundRect", n = uy(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill, e.symbolKeepAspect);
	return n.setStyle(e.itemStyle), n.rotation = (e.iconRotate || 0) * Math.PI / 180, n.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), t.indexOf("empty") > -1 && (n.style.stroke = n.style.fill, n.style.fill = Q.color.neutral00, n.style.lineWidth = 2), n;
}
function MB(e, t, n, r) {
	PB(e, t, n, r), n.dispatchAction({
		type: "legendToggleSelect",
		name: e ?? t
	}), NB(e, t, n, r);
}
function NB(e, t, n, r) {
	n.usingTHL() || n.dispatchAction({
		type: "highlight",
		seriesName: e,
		name: t,
		excludeSeriesId: r
	});
}
function PB(e, t, n, r) {
	n.usingTHL() || n.dispatchAction({
		type: "downplay",
		seriesName: e,
		name: t,
		excludeSeriesId: r
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/legendAction.js
function FB(e, t, n) {
	var r = e === "allSelect" || e === "inverseSelect", i = {}, a = [];
	n.eachComponent({
		mainType: "legend",
		query: t
	}, function(n) {
		r ? n[e]() : n[e](t.name), IB(n, i), a.push(n.componentIndex);
	});
	var o = {};
	return n.eachComponent("legend", function(e) {
		I(i, function(t, n) {
			e[t ? "select" : "unSelect"](n);
		}), IB(e, o);
	}), r ? {
		selected: o,
		legendIndex: a
	} : {
		name: t.name,
		selected: o
	};
}
function IB(e, t) {
	var n = t || {};
	return I(e.getData(), function(t) {
		var r = t.get("name");
		if (r !== "\n" && r !== "") {
			var i = e.isSelected(r);
			n[r] = q(n, r) ? n[r] && i : i;
		}
	}), n;
}
function LB(e) {
	e.registerAction("legendToggleSelect", "legendselectchanged", fe(FB, "toggleSelected")), e.registerAction("legendAllSelect", "legendselectall", fe(FB, "allSelect")), e.registerAction("legendInverseSelect", "legendinverseselect", fe(FB, "inverseSelect")), e.registerAction("legendSelect", "legendselected", fe(FB, "select")), e.registerAction("legendUnSelect", "legendunselected", fe(FB, "unSelect"));
}
//#endregion
//#region node_modules/echarts/lib/component/legend/legendFilter.js
var RB = wl(zB);
function zB(e) {
	var t = e.findComponents({ mainType: "legend" });
	t && t.length && e.filterSeries(function(e) {
		for (var n = 0; n < t.length; n++) if (!t[n].isSelected(e.name)) return !1;
		return !0;
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/installLegendPlain.js
function BB(e) {
	e.registerComponentModel(TB), e.registerComponentView(kB), e.registerProcessor(e.PRIORITY.PROCESSOR.SERIES_FILTER, RB), e.registerSubTypeDefaulter("legend", function() {
		return "plain";
	}), LB(e);
}
//#endregion
//#region node_modules/echarts/lib/component/legend/ScrollableLegendModel.js
var VB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.setScrollDataIndex = function(e) {
		this.option.scrollDataIndex = e;
	}, t.prototype.init = function(t, n, r) {
		var i = W_(t);
		e.prototype.init.call(this, t, n, r), HB(this, t, i);
	}, t.prototype.mergeOption = function(t, n) {
		e.prototype.mergeOption.call(this, t, n), HB(this, this.option, t);
	}, t.type = "legend.scroll", t.defaultOption = ng(TB.defaultOption, {
		scrollDataIndex: 0,
		pageButtonItemGap: 5,
		pageButtonGap: null,
		pageButtonPosition: "end",
		pageFormatter: "{current}/{total}",
		pageIcons: {
			horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
			vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
		},
		pageIconColor: Q.color.accent50,
		pageIconInactiveColor: Q.color.accent10,
		pageIconSize: 15,
		pageTextStyle: { color: Q.color.tertiary },
		animationDurationUpdate: 800
	}), t;
}(TB);
function HB(e, t, n) {
	var r = e.getOrient(), i = [1, 1];
	i[r.index] = 0, U_(t, n, {
		type: "box",
		ignoreSize: !!i
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/ScrollableLegendView.js
var UB = hd, WB = ["width", "height"], GB = ["x", "y"], KB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.newlineDisabled = !0, n._currentIndex = 0, n;
	}
	return t.prototype.init = function() {
		e.prototype.init.call(this), this.group.add(this._containerGroup = new UB()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new UB());
	}, t.prototype.resetInner = function() {
		e.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
	}, t.prototype.renderInner = function(t, n, r, i, a, o, s) {
		var c = this;
		e.prototype.renderInner.call(this, t, n, r, i, a, o, s);
		var l = this._controllerGroup, u = n.get("pageIconSize", !0), d = V(u) ? u : [u, u];
		p("pagePrev", 0);
		var f = n.getModel("pageTextStyle");
		l.add(new ps({
			name: "pageText",
			style: {
				text: "xx/xx",
				fill: f.getTextColor(),
				font: f.getFont(),
				verticalAlign: "middle",
				align: "center"
			},
			silent: !0
		})), p("pageNext", 1);
		function p(e, t) {
			var r = e + "DataIndex", a = Zf(n.get("pageIcons", !0)[n.getOrient().name][t], { onclick: B(c._pageGo, c, r, n, i) }, {
				x: -d[0] / 2,
				y: -d[1] / 2,
				width: d[0],
				height: d[1]
			});
			a.name = e, l.add(a);
		}
	}, t.prototype.layoutInner = function(e, t, n, r, i, a) {
		var o = this.getSelectorGroup(), s = e.getOrient().index, c = WB[s], l = GB[s], u = WB[1 - s], d = GB[1 - s];
		i && N_("horizontal", o, e.get("selectorItemGap", !0));
		var f = e.get("selectorButtonGap", !0), p = o.getBoundingRect(), m = [-p.x, -p.y], h = j(n);
		i && (h[c] = n[c] - p[c] - f);
		var g = this._layoutContentAndController(e, r, h, s, c, u, d, l);
		if (i) {
			if (a === "end") m[s] += g[c] + f;
			else {
				var _ = p[c] + f;
				m[s] -= _, g[l] -= _;
			}
			g[c] += p[c] + f, m[1 - s] += g[d] + g[u] / 2 - p[u] / 2, g[u] = Math.max(g[u], p[u]), g[d] = Math.min(g[d], p[d] + m[1 - s]), o.x = m[0], o.y = m[1], o.markRedraw();
		}
		return g;
	}, t.prototype._layoutContentAndController = function(e, t, n, r, i, a, o, s) {
		var c = this.getContentGroup(), l = this._containerGroup, u = this._controllerGroup;
		N_(e.get("orient"), c, e.get("itemGap"), r ? n.width : null, r ? null : n.height), N_("horizontal", u, e.get("pageButtonItemGap", !0));
		var d = c.getBoundingRect(), f = u.getBoundingRect(), p = this._showController = d[i] > n[i], m = [-d.x, -d.y];
		t || (m[r] = c[s]);
		var h = [0, 0], g = [-f.x, -f.y], _ = G(e.get("pageButtonGap", !0), e.get("itemGap", !0));
		p && (e.get("pageButtonPosition", !0) === "end" ? g[r] += n[i] - f[i] : h[r] += f[i] + _), g[1 - r] += d[a] / 2 - f[a] / 2, c.setPosition(m), l.setPosition(h), u.setPosition(g);
		var v = {
			x: 0,
			y: 0
		};
		if (v[i] = p ? n[i] : d[i], v[a] = Math.max(d[a], f[a]), v[o] = Math.min(0, f[o] + g[1 - r]), l.__rectSize = n[i], p) {
			var y = {
				x: 0,
				y: 0
			};
			y[i] = Math.max(n[i] - f[i] - _, 0), y[a] = v[a], l.setClipPath(new cs({ shape: y })), l.__rectSize = y[i];
		} else u.eachChild(function(e) {
			e.attr({
				invisible: !0,
				silent: !0
			});
		});
		var b = this._getPageInfo(e);
		return b.pageIndex != null && yf(c, {
			x: b.contentPosition[0],
			y: b.contentPosition[1]
		}, p ? e : null), this._updatePageInfoView(e, b), v;
	}, t.prototype._pageGo = function(e, t, n) {
		var r = this._getPageInfo(t)[e];
		r != null && n.dispatchAction({
			type: "legendScroll",
			scrollDataIndex: r,
			legendId: t.id
		});
	}, t.prototype._updatePageInfoView = function(e, t) {
		var n = this._controllerGroup;
		I(["pagePrev", "pageNext"], function(r) {
			var i = t[r + "DataIndex"] != null, a = n.childOfName(r);
			a && (a.setStyle("fill", i ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), a.cursor = i ? "pointer" : "default");
		});
		var r = n.childOfName("pageText"), i = e.get("pageFormatter"), a = t.pageIndex, o = a == null ? 0 : a + 1, s = t.pageCount;
		r && i && r.setStyle("text", U(i) ? i.replace("{current}", o == null ? "" : o + "").replace("{total}", s == null ? "" : s + "") : i({
			current: o,
			total: s
		}));
	}, t.prototype._getPageInfo = function(e) {
		var t = e.get("scrollDataIndex", !0), n = this.getContentGroup(), r = this._containerGroup.__rectSize, i = e.getOrient().index, a = WB[i], o = GB[i], s = this._findTargetItemIndex(t), c = n.children(), l = c[s], u = c.length, d = +!!u, f = {
			contentPosition: [n.x, n.y],
			pageCount: d,
			pageIndex: d - 1,
			pagePrevDataIndex: null,
			pageNextDataIndex: null
		};
		if (!l) return f;
		var p = v(l);
		f.contentPosition[i] = -p.s;
		for (var m = s + 1, h = p, g = p, _ = null; m <= u; ++m) _ = v(c[m]), (!_ && g.e > h.s + r || _ && !y(_, h.s)) && (h = g.i > h.i ? g : _, h && (f.pageNextDataIndex ??= h.i, ++f.pageCount)), g = _;
		for (var m = s - 1, h = p, g = p, _ = null; m >= -1; --m) _ = v(c[m]), (!_ || !y(g, _.s)) && h.i < g.i && (g = h, f.pagePrevDataIndex ??= h.i, ++f.pageCount, ++f.pageIndex), h = _;
		return f;
		function v(e) {
			if (e) {
				var t = e.getBoundingRect(), n = t[o] + e[o];
				return {
					s: n,
					e: n + t[a],
					i: e.__legendDataIndex
				};
			}
		}
		function y(e, t) {
			return e.e >= t && e.s <= t + r;
		}
	}, t.prototype._findTargetItemIndex = function(e) {
		if (!this._showController) return 0;
		var t, n = this.getContentGroup(), r;
		return n.eachChild(function(n, i) {
			var a = n.__legendDataIndex;
			r == null && a != null && (r = i), a === e && (t = i);
		}), t ?? r;
	}, t.type = "legend.scroll", t;
}(kB);
//#endregion
//#region node_modules/echarts/lib/component/legend/scrollableLegendAction.js
function qB(e) {
	e.registerAction("legendScroll", "legendscroll", function(e, t) {
		var n = e.scrollDataIndex;
		n != null && t.eachComponent({
			mainType: "legend",
			subType: "scroll",
			query: e
		}, function(e) {
			e.setScrollDataIndex(n);
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/installLegendScroll.js
function JB(e) {
	wM(BB), e.registerComponentModel(VB), e.registerComponentView(KB), qB(e);
}
//#endregion
//#region node_modules/echarts/lib/component/legend/install.js
function YB(e) {
	wM(BB), wM(JB);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/InsideZoomModel.js
var XB = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "dataZoom.inside", t.defaultOption = ng(kz.defaultOption, {
		disabled: !1,
		zoomLock: !1,
		zoomOnMouseWheel: !0,
		moveOnMouseMove: !0,
		moveOnMouseWheel: !1,
		preventDefaultMouseMove: !0
	}), t;
}(kz), ZB = Yc();
function QB(e, t, n) {
	ZB(e).coordSysRecordMap.each(function(e) {
		var r = e.dataZoomInfoMap.get(t.uid);
		r && (r.getRange = n);
	});
}
function $B(e, t) {
	for (var n = ZB(e).coordSysRecordMap, r = n.keys(), i = 0; i < r.length; i++) {
		var a = r[i], o = n.get(a), s = o.dataZoomInfoMap;
		if (s) {
			var c = t.uid;
			s.get(c) && (s.removeKey(c), s.keys().length || eV(n, o));
		}
	}
}
function eV(e, t) {
	if (t) {
		e.removeKey(t.model.uid);
		var n = t.controller;
		n && n.dispose();
	}
}
function tV(e, t) {
	var n = {
		model: t,
		containsPoint: fe(rV, t),
		dispatchAction: fe(nV, e),
		dataZoomInfoMap: null,
		controller: null
	}, r = n.controller = new FN(e.getZr());
	return I([
		"pan",
		"zoom",
		"scrollMove"
	], function(e) {
		r.on(e, function(t) {
			var r = [];
			n.dataZoomInfoMap.each(function(i) {
				if (t.isAvailableBehavior(i.model.option)) {
					var a = (i.getRange || {})[e], o = a && a(i.dzReferCoordSysInfo, n.model.mainType, n.controller, t);
					!i.model.get("disabled", !0) && o && r.push({
						dataZoomId: i.model.id,
						start: o[0],
						end: o[1]
					});
				}
			}), r.length && n.dispatchAction(r);
		});
	}), n;
}
function nV(e, t) {
	e.isDisposed() || e.dispatchAction({
		type: "dataZoom",
		animation: {
			easing: "cubicOut",
			duration: 100
		},
		batch: t
	});
}
function rV(e, t, n, r) {
	return e.coordinateSystem.containPoint([n, r]);
}
function iV(e, t, n) {
	var r, i = "type_", a = {
		type_true: 2,
		type_move: 1,
		type_false: 0,
		type_undefined: -1
	}, o = !0, s, c;
	return e.each(function(e) {
		var t = e.model, n = t.get("disabled", !0) ? !1 : !t.get("zoomLock", !0) || "move";
		a[i + n] > a[i + r] && (r = n), o &&= t.get("preventDefaultMouseMove", !0), s = G(t.get("cursorGrab", !0), s), c = G(t.get("cursorGrabbing", !0), c);
	}), {
		controlType: r,
		opt: {
			zoomOnMouseWheel: !0,
			moveOnMouseMove: !0,
			moveOnMouseWheel: !0,
			preventDefaultMouseMove: !!o,
			api: n,
			zInfo: { component: t.model },
			triggerInfo: {
				roamTrigger: null,
				isInSelf: t.containsPoint
			},
			cursorGrab: s,
			cursorGrabbing: c
		}
	};
}
function aV(e) {
	e.registerUpdateLifecycle("coordsys:aftercreate", function(e, t) {
		var n = ZB(t), r = n.coordSysRecordMap ||= K();
		r.each(function(e) {
			e.dataZoomInfoMap = null;
		}), e.eachComponent({
			mainType: "dataZoom",
			subType: "inside"
		}, function(e) {
			I(Cz(e).infoList, function(n) {
				var i = n.model.uid, a = r.get(i) || r.set(i, tV(t, n.model));
				(a.dataZoomInfoMap ||= K()).set(e.uid, {
					dzReferCoordSysInfo: n,
					model: e,
					getRange: null
				});
			});
		}), r.each(function(e) {
			var n = e.controller, i, a = e.dataZoomInfoMap;
			if (a) {
				var o = a.keys()[0];
				o != null && (i = a.get(o));
			}
			if (!i) {
				eV(r, e);
				return;
			}
			var s = iV(a, e, t);
			n.enable(s.controlType, s.opt), Uw(e, "dispatchAction", i.model.get("throttle", !0), "fixRate");
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/InsideZoomView.js
var oV = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "dataZoom.inside", t;
	}
	return t.prototype.render = function(t, n, r) {
		if (e.prototype.render.apply(this, arguments), t.noTarget()) {
			this._clear();
			return;
		}
		this.range = t.getPercentRange(), QB(r, t, {
			pan: B(sV.pan, this),
			zoom: B(sV.zoom, this),
			scrollMove: B(sV.scrollMove, this)
		});
	}, t.prototype.dispose = function() {
		this._clear(), e.prototype.dispose.apply(this, arguments);
	}, t.prototype._clear = function() {
		$B(this.api, this.dataZoomModel), this.range = null;
	}, t.type = "dataZoom.inside", t;
}(jz), sV = {
	zoom: function(e, t, n, r) {
		var i = this.range, a = i.slice(), o = e.axisModels[0];
		if (o) {
			var s = lV[t](null, [r.originX, r.originY], o, n, e), c = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (a[1] - a[0]) + a[0], l = Math.max(1 / r.scale, 0);
			a[0] = (a[0] - c) * l + c, a[1] = (a[1] - c) * l + c;
			var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
			if (YI(0, a, [0, 100], 0, u.minSpan, u.maxSpan), this.range = a, i[0] !== a[0] || i[1] !== a[1]) return a;
		}
	},
	pan: cV(function(e, t, n, r, i, a) {
		var o = lV[r]([a.oldX, a.oldY], [a.newX, a.newY], t, i, n);
		return o.signal * (e[1] - e[0]) * o.pixel / o.pixelLength;
	}),
	scrollMove: cV(function(e, t, n, r, i, a) {
		return lV[r]([0, 0], [a.scrollDelta, a.scrollDelta], t, i, n).signal * (e[1] - e[0]) * a.scrollDelta;
	})
};
function cV(e) {
	return function(t, n, r, i) {
		var a = this.range, o = a.slice(), s = t.axisModels[0];
		if (s && (YI(e(o, s, t, n, r, i), o, [0, 100], "all"), this.range = o, a[0] !== o[0] || a[1] !== o[1])) return o;
	};
}
var lV = {
	grid: function(e, t, n, r, i) {
		var a = n.axis, o = {}, s = i.model.coordinateSystem.getRect();
		return e ||= [0, 0], a.dim === "x" ? (o.pixel = t[0] - e[0], o.pixelLength = s.width, o.pixelStart = s.x, o.signal = a.inverse ? 1 : -1) : (o.pixel = t[1] - e[1], o.pixelLength = s.height, o.pixelStart = s.y, o.signal = a.inverse ? -1 : 1), o;
	},
	polar: function(e, t, n, r, i) {
		var a = n.axis, o = {}, s = i.model.coordinateSystem, c = s.getRadiusAxis().getExtent(), l = s.getAngleAxis().getExtent();
		return e = e ? s.pointToCoord(e) : [0, 0], t = s.pointToCoord(t), n.mainType === "radiusAxis" ? (o.pixel = t[0] - e[0], o.pixelLength = c[1] - c[0], o.pixelStart = c[0], o.signal = a.inverse ? 1 : -1) : (o.pixel = t[1] - e[1], o.pixelLength = l[1] - l[0], o.pixelStart = l[0], o.signal = a.inverse ? -1 : 1), o;
	},
	singleAxis: function(e, t, n, r, i) {
		var a = n.axis, o = i.model.coordinateSystem.getRect(), s = {};
		return e ||= [0, 0], a.orient === "horizontal" ? (s.pixel = t[0] - e[0], s.pixelLength = o.width, s.pixelStart = o.x, s.signal = a.inverse ? 1 : -1) : (s.pixel = t[1] - e[1], s.pixelLength = o.height, s.pixelStart = o.y, s.signal = a.inverse ? -1 : 1), s;
	}
};
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js
function uV(e) {
	Iz(e), e.registerComponentModel(XB), e.registerComponentView(oV), aV(e);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/SliderZoomModel.js
var dV = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "dataZoom.slider", t.layoutMode = "box", t.defaultOption = ng(kz.defaultOption, {
		show: !0,
		right: "ph",
		top: "ph",
		width: "ph",
		height: "ph",
		left: null,
		bottom: null,
		borderColor: Q.color.accent10,
		borderRadius: 0,
		backgroundColor: Q.color.transparent,
		dataBackground: {
			lineStyle: {
				color: Q.color.accent30,
				width: .5
			},
			areaStyle: {
				color: Q.color.accent20,
				opacity: .2
			}
		},
		selectedDataBackground: {
			lineStyle: {
				color: Q.color.accent40,
				width: .5
			},
			areaStyle: {
				color: Q.color.accent20,
				opacity: .3
			}
		},
		fillerColor: "rgba(135,175,274,0.2)",
		handleIcon: "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
		handleSize: "100%",
		handleStyle: {
			color: Q.color.neutral00,
			borderColor: Q.color.accent20
		},
		moveHandleSize: 7,
		moveHandleIcon: "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",
		moveHandleStyle: {
			color: Q.color.accent40,
			opacity: .5
		},
		showDetail: !0,
		showDataShadow: "auto",
		realtime: !0,
		zoomLock: !1,
		textStyle: { color: Q.color.tertiary },
		brushSelect: !0,
		brushStyle: {
			color: Q.color.accent30,
			opacity: .3
		},
		emphasis: {
			handleLabel: { show: !0 },
			handleStyle: { borderColor: Q.color.accent40 },
			moveHandleStyle: { opacity: .8 }
		},
		defaultLocationEdgeGap: 15
	}), t;
}(kz), fV = cs, pV = 1, mV = 30, hV = 7, gV = "horizontal", _V = "vertical", vV = 5, yV = [
	"line",
	"bar",
	"candlestick",
	"scatter"
], bV = {
	easing: "cubicOut",
	duration: 100,
	delay: 0
}, xV = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._displayables = {}, n;
	}
	return t.prototype.init = function(e, t) {
		this.api = t, this._onBrush = B(this._onBrush, this), this._onBrushEnd = B(this._onBrushEnd, this);
	}, t.prototype.render = function(t, n, r, i) {
		if (e.prototype.render.apply(this, arguments), Uw(this, "_dispatchZoomAction", t.get("throttle"), "fixRate"), this._orient = t.getOrient(), t.get("show") === !1) {
			this.group.removeAll();
			return;
		}
		if (t.noTarget()) {
			this._clear(), this.group.removeAll();
			return;
		}
		(!i || i.type !== "dataZoom" || i.from !== this.uid) && this._buildView(), this._updateView();
	}, t.prototype.dispose = function() {
		this._clear(), e.prototype.dispose.apply(this, arguments);
	}, t.prototype._clear = function() {
		Ww(this, "_dispatchZoomAction");
		var e = this.api.getZr();
		e.off("mousemove", this._onBrush), e.off("mouseup", this._onBrushEnd);
	}, t.prototype._buildView = function() {
		var e = this.group;
		e.removeAll(), this._brushing = !1, this._displayables.brushRect = null, this._resetLocation(), this._resetInterval();
		var t = this._displayables.sliderGroup = new hd();
		this._renderBackground(), this._renderHandle(), this._renderDataShadow(), e.add(t), this._positionGroup();
	}, t.prototype._resetLocation = function() {
		var e = this.dataZoomModel, t = this.api, n = e.get("brushSelect") ? hV : 0, r = B_(e, t).refContainer, i = this._findCoordRect(), a = e.get("defaultLocationEdgeGap", !0) || 0, o = this._orient === gV ? {
			right: r.width - i.x - i.width,
			top: r.height - mV - a - n,
			width: i.width,
			height: mV
		} : {
			right: a,
			top: i.y,
			width: mV,
			height: i.height
		}, s = W_(e.option);
		I([
			"right",
			"top",
			"width",
			"height"
		], function(e) {
			s[e] === "ph" && (s[e] = o[e]);
		});
		var c = L_(s, r);
		this._location = {
			x: c.x,
			y: c.y
		}, this._size = [c.width, c.height], this._orient === _V && this._size.reverse();
	}, t.prototype._positionGroup = function() {
		var e = this.group, t = this._location, n = this._orient, r = this.dataZoomModel.getFirstTargetAxisModel(), i = r && r.get("inverse"), a = this._displayables.sliderGroup, o = (this._dataShadowInfo || {}).otherAxisInverse;
		a.attr(n === gV && !i ? {
			scaleY: o ? 1 : -1,
			scaleX: 1
		} : n === gV && i ? {
			scaleY: o ? 1 : -1,
			scaleX: -1
		} : n === _V && !i ? {
			scaleY: o ? -1 : 1,
			scaleX: 1,
			rotation: Math.PI / 2
		} : {
			scaleY: o ? -1 : 1,
			scaleX: -1,
			rotation: Math.PI / 2
		});
		var s = e.getBoundingRect([a]), c = isNaN(s.x) ? 0 : s.x, l = isNaN(s.y) ? 0 : s.y;
		e.x = t.x - c, e.y = t.y - l, e.markRedraw();
	}, t.prototype._getViewExtent = function() {
		return [0, this._size[0]];
	}, t.prototype._renderBackground = function() {
		var e = this.dataZoomModel, t = this._size, n = this._displayables.sliderGroup, r = e.get("brushSelect");
		n.add(new fV({
			silent: !0,
			shape: {
				x: 0,
				y: 0,
				width: t[0],
				height: t[1]
			},
			style: { fill: e.get("backgroundColor") },
			z2: -40
		}));
		var i = new fV({
			shape: {
				x: 0,
				y: 0,
				width: t[0],
				height: t[1]
			},
			style: { fill: "transparent" },
			z2: 0,
			onclick: B(this._onClickPanel, this)
		}), a = this.api.getZr();
		r ? (i.on("mousedown", this._onBrushStart, this), i.cursor = "crosshair", a.on("mousemove", this._onBrush), a.on("mouseup", this._onBrushEnd)) : (a.off("mousemove", this._onBrush), a.off("mouseup", this._onBrushEnd)), n.add(i);
	}, t.prototype._renderDataShadow = function() {
		var e = this._dataShadowInfo = this._prepareDataShadowInfo();
		if (this._displayables.dataShadowSegs = [], !e) return;
		var t = this._size, n = this._shadowSize || [], r = e.series, i = r.getRawData(), a = r.getShadowDim && r.getShadowDim(), o = a && i.getDimensionInfo(a) ? r.getShadowDim() : e.otherDim;
		if (o == null) return;
		var s = this._shadowPolygonPts, c = this._shadowPolylinePts;
		if (i !== this._shadowData || o !== this._shadowDim || t[0] !== n[0] || t[1] !== n[1]) {
			var l = i.getDataExtent(e.thisDim), u = i.getDataExtent(o), d = (u[1] - u[0]) * .3;
			u = [u[0] - d, u[1] + d];
			var f = [0, t[1]], p = [0, t[0]], m = [[t[0], 0], [0, 0]], h = [], g = p[1] / Math.max(1, i.count() - 1), _ = t[0] / (l[1] - l[0]), v = e.thisAxis.type === "time", y = -g, b = Math.round(i.count() / t[0]), x;
			i.each([e.thisDim, o], function(e, t, n) {
				if (b > 0 && n % b) {
					v || (y += g);
					return;
				}
				y = v ? (+e - l[0]) * _ : y + g;
				var r = t == null || isNaN(t) || t === "", i = r ? 0 : Vs(t, u, f, !0);
				r && !x && n ? (m.push([m[m.length - 1][0], 0]), h.push([h[h.length - 1][0], 0])) : !r && x && (m.push([y, 0]), h.push([y, 0])), r || (m.push([y, i]), h.push([y, i])), x = r;
			}), s = this._shadowPolygonPts = m, c = this._shadowPolylinePts = h;
		}
		this._shadowData = i, this._shadowDim = o, this._shadowSize = [t[0], t[1]];
		var S = this.dataZoomModel;
		function C(e) {
			var t = S.getModel(e ? "selectedDataBackground" : "dataBackground"), n = new hd(), r = new Hd({
				shape: { points: s },
				segmentIgnoreThreshold: 1,
				style: t.getModel("areaStyle").getAreaStyle(),
				silent: !0,
				z2: -20
			}), i = new Wd({
				shape: { points: c },
				segmentIgnoreThreshold: 1,
				style: t.getModel("lineStyle").getLineStyle(),
				silent: !0,
				z2: -19
			});
			return n.add(r), n.add(i), n;
		}
		for (var w = 0; w < 3; w++) {
			var T = C(w === 1);
			this._displayables.sliderGroup.add(T), this._displayables.dataShadowSegs.push(T);
		}
	}, t.prototype._prepareDataShadowInfo = function() {
		var e = this.dataZoomModel, t = e.get("showDataShadow");
		if (t !== !1) {
			var n, r = this.ecModel;
			return e.eachTargetAxis(function(i, a) {
				I(e.getAxisProxy(i, a).getTargetSeriesModels(), function(e) {
					if (!n && !(t !== !0 && F(yV, e.get("type")) < 0)) {
						var o = r.getComponent(xz(i), a).axis, s = CV(i), c, l = e.coordinateSystem;
						s != null && l.getOtherAxis && (c = l.getOtherAxis(o).inverse), s = e.getData().mapDimension(s), n = {
							thisAxis: o,
							series: e,
							thisDim: e.getData().mapDimension(i),
							otherDim: s,
							otherAxisInverse: c
						};
					}
				}, this);
			}, this), n;
		}
	}, t.prototype._renderHandle = function() {
		var e = this.group, t = this._displayables, n = t.handles = [null, null], r = t.handleLabels = [null, null], i = this._displayables.sliderGroup, a = this._size, o = this.dataZoomModel, s = this.api, c = o.get("borderRadius") || 0, l = o.get("brushSelect"), u = t.filler = new fV({
			silent: l,
			style: { fill: o.get("fillerColor") },
			textConfig: { position: "inside" }
		});
		i.add(u), i.add(new fV({
			silent: !0,
			subPixelOptimize: !0,
			shape: {
				x: 0,
				y: 0,
				width: a[0],
				height: a[1],
				r: c
			},
			style: {
				stroke: o.get("dataBackgroundColor") || o.get("borderColor"),
				lineWidth: pV,
				fill: Q.color.transparent
			}
		})), I([0, 1], function(t) {
			var a = o.get("handleIcon");
			!sy[a] && a.indexOf("path://") < 0 && a.indexOf("image://") < 0 && (a = "path://" + a);
			var s = uy(a, -1, 0, 2, 2, null, !0);
			s.attr({
				cursor: wV(this._orient),
				draggable: !0,
				drift: B(this._onDragMove, this, t),
				ondragend: B(this._onDragEnd, this),
				onmouseover: B(this._onOverDataInfoTriggerArea, this, !0),
				onmouseout: B(this._onOverDataInfoTriggerArea, this, !1),
				z2: 5
			});
			var c = s.getBoundingRect(), l = o.get("handleSize");
			this._handleHeight = Hs(l, this._size[1]), this._handleWidth = c.width / c.height * this._handleHeight, s.setStyle(o.getModel("handleStyle").getItemStyle()), s.style.strokeNoScale = !0, s.rectHover = !0, s.ensureState("emphasis").style = o.getModel(["emphasis", "handleStyle"]).getItemStyle(), Nu(s);
			var u = o.get("handleColor");
			u != null && (s.style.fill = u), i.add(n[t] = s);
			var d = o.getModel("textStyle"), f = (o.get("handleLabel") || {}).show || !1;
			e.add(r[t] = new ps({
				silent: !0,
				invisible: !f,
				style: Tp(d, {
					x: 0,
					y: 0,
					text: "",
					verticalAlign: "middle",
					align: "center",
					fill: d.getTextColor(),
					font: d.getFont()
				}),
				z2: 10
			}));
		}, this);
		var d = u;
		if (l) {
			var f = Hs(o.get("moveHandleSize"), a[1]), p = t.moveHandle = new cs({
				style: o.getModel("moveHandleStyle").getItemStyle(),
				silent: !0,
				shape: {
					r: [
						0,
						0,
						2,
						2
					],
					y: a[1] - .5,
					height: f
				}
			}), m = f * .8, h = t.moveHandleIcon = uy(o.get("moveHandleIcon"), -m / 2, -m / 2, m, m, Q.color.neutral00, !0);
			h.silent = !0, h.y = a[1] + f / 2 - .5, p.ensureState("emphasis").style = o.getModel(["emphasis", "moveHandleStyle"]).getItemStyle();
			var g = Math.min(a[1] / 2, Math.max(f, 10));
			d = t.moveZone = new cs({
				invisible: !0,
				shape: {
					y: a[1] - g,
					height: f + g
				}
			}), d.on("mouseover", function() {
				s.enterEmphasis(p);
			}).on("mouseout", function() {
				s.leaveEmphasis(p);
			}), i.add(p), i.add(h), i.add(d);
		}
		d.attr({
			draggable: !0,
			cursor: "grab",
			drift: B(this._onActualMoveZoneDrift, this),
			ondragstart: B(this._onActualMoveZoneDragStart, this),
			ondragend: B(this._onActualMoveZoneDragEnd, this),
			onmouseover: B(this._onOverDataInfoTriggerArea, this, !0),
			onmouseout: B(this._onOverDataInfoTriggerArea, this, !1)
		});
	}, t.prototype._resetInterval = function() {
		var e = this._range = this.dataZoomModel.getPercentRange(), t = this._getViewExtent();
		this._handleEnds = [Vs(e[0], [0, 100], t, !0), Vs(e[1], [0, 100], t, !0)];
	}, t.prototype._updateInterval = function(e, t) {
		var n = this.dataZoomModel, r = this._handleEnds, i = this._getViewExtent(), a = n.findRepresentativeAxisProxy().getMinMaxSpan(), o = [0, 100];
		YI(t, r, i, n.get("zoomLock") ? "all" : e, a.minSpan == null ? null : Vs(a.minSpan, o, i, !0), a.maxSpan == null ? null : Vs(a.maxSpan, o, i, !0));
		var s = this._range, c = this._range = Ys([Vs(r[0], i, o, !0), Vs(r[1], i, o, !0)]);
		return !s || s[0] !== c[0] || s[1] !== c[1];
	}, t.prototype._updateView = function(e) {
		var t = this._displayables, n = this._handleEnds, r = Ys(n.slice()), i = this._size;
		I([0, 1], function(e) {
			var r = t.handles[e], a = this._handleHeight;
			r.attr({
				scaleX: a / 2,
				scaleY: a / 2,
				x: n[e] + (e ? -1 : 1),
				y: i[1] / 2 - a / 2
			});
		}, this), t.filler.setShape({
			x: r[0],
			y: 0,
			width: r[1] - r[0],
			height: i[1]
		});
		var a = {
			x: r[0],
			width: r[1] - r[0]
		};
		t.moveHandle && (t.moveHandle.setShape(a), t.moveZone.setShape(a), t.moveZone.getBoundingRect(), t.moveHandleIcon && t.moveHandleIcon.attr("x", a.x + a.width / 2));
		for (var o = t.dataShadowSegs, s = [
			0,
			r[0],
			r[1],
			i[0]
		], c = 0; c < o.length; c++) {
			var l = o[c], u = l.getClipPath();
			u || (u = new cs(), l.setClipPath(u)), u.setShape({
				x: s[c],
				y: 0,
				width: s[c + 1] - s[c],
				height: i[1]
			});
		}
		this._updateDataInfo(e);
	}, t.prototype._updateDataInfo = function(e) {
		var t = this.dataZoomModel, n = this._displayables, r = n.handleLabels, i = this._orient, a = ["", ""];
		if (t.get("showDetail")) {
			var o = t.findRepresentativeAxisProxy(), s = o.getAxisModel().axis.scale;
			if (o) {
				var c = this._range, l;
				if (e) {
					var u = {
						start: c[0],
						end: c[1]
					}, d = Dz(t, o);
					if (d) {
						var f = d.calculateDataWindow(u).percentInverted;
						u = {
							start: f[0],
							end: f[1]
						};
					}
					l = o.calculateDataWindow(u);
				} else l = o.getWindow();
				a = [SV(t, 0, l, s), SV(t, 1, l, s)];
			}
		}
		var p = Ys(this._handleEnds.slice());
		m.call(this, 0), m.call(this, 1);
		function m(e) {
			var t = Uf(n.handles[e].parent, this.group), o = Gf(e === 0 ? "right" : "left", t), s = this._handleWidth / 2 + vV, c = Wf([p[e] + (e === 0 ? -s : s), this._size[1] / 2], t);
			r[e].setStyle({
				x: c[0],
				y: c[1],
				verticalAlign: i === gV ? "middle" : o,
				align: i === gV ? o : "center",
				text: a[e]
			});
		}
	}, t.prototype._onOverDataInfoTriggerArea = function(e) {
		this._isOverDataInfoTriggerArea = e, this._showDataInfo(e);
	}, t.prototype._showDataInfo = function(e) {
		var t = (this.dataZoomModel.get("handleLabel") || {}).show || !1, n = this.dataZoomModel.getModel(["emphasis", "handleLabel"]).get("show") || !1, r = e || this._dragging ? n : t, i = this._displayables, a = i.handleLabels;
		a[0].attr("invisible", !r), a[1].attr("invisible", !r), i.moveHandle && this.api[r ? "enterEmphasis" : "leaveEmphasis"](i.moveHandle, 1);
	}, t.prototype._onActualMoveZoneDrift = function(e, t, n) {
		this.api.getZr().setCursorStyle("grabbing"), this._onDragMove("all", e, t, n);
	}, t.prototype._onActualMoveZoneDragStart = function(e) {
		e.target.attr("cursor", "grabbing"), this._showDataInfo(!0);
	}, t.prototype._onActualMoveZoneDragEnd = function(e) {
		e.target.attr("cursor", "grab"), this._onDragEnd();
	}, t.prototype._onDragMove = function(e, t, n, r) {
		this._dragging = !0, ME(r.event);
		var i = this._displayables.sliderGroup.getLocalTransform(), a = Wf([t, n], i, !0), o = this._updateInterval(e, a[0]), s = this.dataZoomModel.get("realtime");
		this._updateView(!s), o && s && this._dispatchZoomAction(!0);
	}, t.prototype._onDragEnd = function() {
		this._dragging = !1, this._isOverDataInfoTriggerArea || this._showDataInfo(!1), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction(!1);
	}, t.prototype._onClickPanel = function(e) {
		var t = this._size, n = this._displayables.sliderGroup.transformCoordToLocal(e.offsetX, e.offsetY);
		if (!(n[0] < 0 || n[0] > t[0] || n[1] < 0 || n[1] > t[1])) {
			var r = this._handleEnds, i = (r[0] + r[1]) / 2, a = this._updateInterval("all", n[0] - i);
			this._updateView(), a && this._dispatchZoomAction(!1);
		}
	}, t.prototype._onBrushStart = function(e) {
		var t = e.offsetX, n = e.offsetY;
		this._brushStart = new Y(t, n), this._brushing = !0, this._brushStartTime = +/* @__PURE__ */ new Date();
	}, t.prototype._onBrushEnd = function(e) {
		if (this._brushing) {
			var t = this._displayables.brushRect;
			if (this._brushing = !1, t) {
				t.attr("ignore", !0);
				var n = t.shape;
				if (!(+/* @__PURE__ */ new Date() - this._brushStartTime < 200 && Math.abs(n.width) < 5)) {
					var r = this._getViewExtent(), i = [0, 100], a = this._handleEnds = [n.x, n.x + n.width], o = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
					YI(0, a, r, 0, o.minSpan == null ? null : Vs(o.minSpan, i, r, !0), o.maxSpan == null ? null : Vs(o.maxSpan, i, r, !0)), this._range = Ys([Vs(a[0], r, i, !0), Vs(a[1], r, i, !0)]), this._updateView(), this._dispatchZoomAction(!1);
				}
			}
		}
	}, t.prototype._onBrush = function(e) {
		this._brushing && (ME(e.event), this._updateBrushRect(e.offsetX, e.offsetY));
	}, t.prototype._updateBrushRect = function(e, t) {
		var n = this._displayables, r = this.dataZoomModel, i = n.brushRect;
		i || (i = n.brushRect = new fV({
			silent: !0,
			style: r.getModel("brushStyle").getItemStyle()
		}), n.sliderGroup.add(i)), i.attr("ignore", !1);
		var a = this._brushStart, o = this._displayables.sliderGroup, s = o.transformCoordToLocal(e, t), c = o.transformCoordToLocal(a.x, a.y), l = this._size;
		s[0] = Math.max(Math.min(l[0], s[0]), 0), i.setShape({
			x: c[0],
			y: 0,
			width: s[0] - c[0],
			height: l[1]
		});
	}, t.prototype._dispatchZoomAction = function(e) {
		var t = this._range;
		this.api.dispatchAction({
			type: "dataZoom",
			from: this.uid,
			dataZoomId: this.dataZoomModel.id,
			animation: e ? bV : null,
			start: t[0],
			end: t[1]
		});
	}, t.prototype._findCoordRect = function() {
		var e, t = Cz(this.dataZoomModel).infoList;
		if (!e && t.length) {
			var n = t[0].model.coordinateSystem;
			e = n.getRect && n.getRect();
		}
		if (!e) {
			var r = this.api.getWidth(), i = this.api.getHeight();
			e = {
				x: r * .2,
				y: i * .2,
				width: r * .6,
				height: i * .6
			};
		}
		return e;
	}, t.type = "dataZoom.slider", t;
}(jz);
function SV(e, t, n, r) {
	var i = e.get("labelFormatter"), a = e.get("labelPrecision");
	(a == null || a === "auto") && (a = n.valuePrecision);
	var o = n.value[t], s = o == null || isNaN(o) ? "" : Cb(r) || xb(r) ? r.getLabel({ value: Math.round(o) }) : isFinite(a) ? qs(o, a, !0) : o + "";
	return H(i) ? i(o, s) : U(i) ? i.replace("{value}", s) : s;
}
function CV(e) {
	return {
		x: "y",
		y: "x",
		radius: "angle",
		angle: "radius"
	}[e];
}
function wV(e) {
	return e === "vertical" ? "ns-resize" : "ew-resize";
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js
function TV(e) {
	e.registerComponentModel(dV), e.registerComponentView(xV), Iz(e);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/install.js
function EV(e) {
	wM(uV), wM(TV);
}
//#endregion
//#region node_modules/echarts/lib/visual/visualDefault.js
var DV = { get: function(e, t, n) {
	var r = j((OV[e] || {})[t]);
	return n && V(r) ? r[r.length - 1] : r;
} }, OV = {
	color: {
		active: ["#006edd", "#e0ffff"],
		inactive: [Q.color.transparent]
	},
	colorHue: {
		active: [0, 360],
		inactive: [0, 0]
	},
	colorSaturation: {
		active: [.3, 1],
		inactive: [0, 0]
	},
	colorLightness: {
		active: [.9, .5],
		inactive: [0, 0]
	},
	colorAlpha: {
		active: [.3, 1],
		inactive: [0, 0]
	},
	opacity: {
		active: [.3, 1],
		inactive: [0, 0]
	},
	symbol: {
		active: [
			"circle",
			"roundRect",
			"diamond"
		],
		inactive: ["none"]
	},
	symbolSize: {
		active: [10, 50],
		inactive: [0, 0]
	}
}, kV = FI.mapVisual, AV = FI.eachVisual, jV = V, MV = I, NV = Ys, PV = Vs, FV = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.stateList = ["inRange", "outOfRange"], n.replacableOptionKeys = [
			"inRange",
			"outOfRange",
			"target",
			"controller",
			"color"
		], n.layoutMode = {
			type: "box",
			ignoreSize: !0
		}, n.dataBound = [-Infinity, Infinity], n.targetVisuals = {}, n.controllerVisuals = {}, n;
	}
	return t.prototype.init = function(e, t, n) {
		this.mergeDefaultAndTheme(e, n);
	}, t.prototype.optionUpdated = function(e, t) {
		var n = this.option;
		!t && yB(n, e, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption();
	}, t.prototype.resetVisual = function(e) {
		var t = this.stateList;
		e = B(e, this), this.controllerVisuals = vB(this.option.controller, t, e), this.targetVisuals = vB(this.option.target, t, e);
	}, t.prototype.getItemSymbol = function() {
		return null;
	}, t.prototype.getTargetSeriesIndices = function() {
		var e = this, t = this.option.seriesTargets;
		if (t) {
			var n = [];
			return MV(t, function(t) {
				if (t.seriesIndex != null) n.push(t.seriesIndex);
				else if (t.seriesId != null) {
					var r;
					e.ecModel.eachSeries(function(e) {
						e.id === t.seriesId && (r = e);
					}), r && n.push(r.componentIndex);
				}
			}), n;
		}
		var r = this.option.seriesId, i = this.option.seriesIndex;
		i == null && r == null && (i = "all");
		var a = tl(this.ecModel, "series", {
			index: i,
			id: r
		}, {
			useDefault: !1,
			enableAll: !0,
			enableNone: !1
		}).models;
		return L(a, function(e) {
			return e.componentIndex;
		});
	}, t.prototype.eachTargetSeries = function(e, t) {
		I(this.getTargetSeriesIndices(), function(n) {
			var r = this.ecModel.getSeriesByIndex(n);
			r && e.call(t, r);
		}, this);
	}, t.prototype.isTargetSeries = function(e) {
		var t = !1;
		return this.eachTargetSeries(function(n) {
			n === e && (t = !0);
		}), t;
	}, t.prototype.formatValueText = function(e, t, n) {
		var r = this.option, i = r.precision, a = this.dataBound, o = r.formatter, s;
		n ||= ["<", ">"], V(e) && (e = e.slice(), s = !0);
		var c = t ? e : s ? [l(e[0]), l(e[1])] : l(e);
		return U(o) ? o.replace("{value}", s ? c[0] : c).replace("{value2}", s ? c[1] : c) : H(o) ? s ? o(e[0], e[1]) : o(e) : s ? e[0] === a[0] ? n[0] + " " + c[1] : e[1] === a[1] ? n[1] + " " + c[0] : c[0] + " - " + c[1] : c;
		function l(e) {
			return e === a[0] ? "min" : e === a[1] ? "max" : (+e).toFixed(Math.min(i, 20));
		}
	}, t.prototype.resetExtent = function() {
		var e = this.option, t = NV([e.min, e.max]);
		this._dataExtent = t;
	}, t.prototype.getDimension = function(e) {
		var t = this, n = this.option.seriesTargets;
		if (n) {
			var r = ue(n, function(n) {
				return n.seriesIndex != null && n.seriesIndex === e || n.seriesId != null && n.seriesId === t.ecModel.getSeriesByIndex(e).id;
			});
			if (r) return r.dimension;
		}
		return this.option.dimension;
	}, t.prototype.getDataDimensionIndex = function(e) {
		var t = e.hostModel.seriesIndex, n = this.getDimension(t);
		if (n != null) return e.getDimensionIndex(n);
		for (var r = e.dimensions, i = r.length - 1; i >= 0; i--) {
			var a = r[i], o = e.getDimensionInfo(a);
			if (!o.isCalculationCoord) return o.storeDimIndex;
		}
	}, t.prototype.getExtent = function() {
		return this._dataExtent.slice();
	}, t.prototype.completeVisualOption = function() {
		var e = this.ecModel, t = this.option, n = {
			inRange: t.inRange,
			outOfRange: t.outOfRange
		}, r = t.target ||= {}, i = t.controller ||= {};
		M(r, n), M(i, n);
		var a = this.isCategory();
		o.call(this, r), o.call(this, i), s.call(this, r, "inRange", "outOfRange"), c.call(this, i);
		function o(n) {
			jV(t.color) && !n.inRange && (n.inRange = { color: t.color.slice().reverse() }), n.inRange = n.inRange || { color: e.get("gradientColor") };
		}
		function s(e, t, n) {
			var r = e[t], i = e[n];
			r && !i && (i = e[n] = {}, MV(r, function(e, t) {
				if (FI.isValidType(t)) {
					var n = DV.get(t, "inactive", a);
					n != null && (i[t] = n, t === "color" && !i.hasOwnProperty("opacity") && !i.hasOwnProperty("colorAlpha") && (i.opacity = [0, 0]));
				}
			}));
		}
		function c(e) {
			var t = (e.inRange || {}).symbol || (e.outOfRange || {}).symbol, n = (e.inRange || {}).symbolSize || (e.outOfRange || {}).symbolSize, r = this.get("inactiveColor"), i = this.getItemSymbol() || "roundRect";
			MV(this.stateList, function(o) {
				var s = this.itemSize, c = e[o];
				c ||= e[o] = { color: a ? r : [r] }, c.symbol ?? (c.symbol = t && j(t) || (a ? i : [i])), c.symbolSize ?? (c.symbolSize = n && j(n) || (a ? s[0] : [s[0], s[0]])), c.symbol = kV(c.symbol, function(e) {
					return e === "none" ? i : e;
				});
				var l = c.symbolSize;
				if (l != null) {
					var u = -Infinity;
					AV(l, function(e) {
						e > u && (u = e);
					}), c.symbolSize = kV(l, function(e) {
						return PV(e, [0, u], [0, s[0]], !0);
					});
				}
			}, this);
		}
	}, t.prototype.resetItemSize = function() {
		this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))];
	}, t.prototype.isCategory = function() {
		return !!this.option.categories;
	}, t.prototype.setSelected = function(e) {}, t.prototype.getSelected = function() {
		return null;
	}, t.prototype.getValueState = function(e) {
		return null;
	}, t.prototype.getVisualMeta = function(e) {
		return null;
	}, t.type = "visualMap", t.dependencies = ["series"], t.defaultOption = {
		show: !0,
		z: 4,
		min: 0,
		max: 200,
		left: 0,
		right: null,
		top: null,
		bottom: 0,
		itemWidth: null,
		itemHeight: null,
		inverse: !1,
		orient: "vertical",
		backgroundColor: Q.color.transparent,
		borderColor: Q.color.borderTint,
		contentColor: Q.color.theme[0],
		inactiveColor: Q.color.disabled,
		borderWidth: 0,
		padding: Q.size.m,
		textGap: 10,
		precision: 0,
		textStyle: { color: Q.color.secondary }
	}, t;
}(q_), IV = [20, 140], LV = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.optionUpdated = function(t, n) {
		e.prototype.optionUpdated.apply(this, arguments), this.resetExtent(), this.resetVisual(function(e) {
			e.mappingMethod = "linear", e.dataExtent = this.getExtent();
		}), this._resetRange();
	}, t.prototype.resetItemSize = function() {
		e.prototype.resetItemSize.apply(this, arguments);
		var t = this.itemSize;
		(t[0] == null || isNaN(t[0])) && (t[0] = IV[0]), (t[1] == null || isNaN(t[1])) && (t[1] = IV[1]);
	}, t.prototype._resetRange = function() {
		var e = this.getExtent(), t = this.option.range;
		!t || t.auto ? (e.auto = 1, this.option.range = e) : V(t) && (t[0] > t[1] && t.reverse(), t[0] = Math.max(t[0], e[0]), t[1] = Math.min(t[1], e[1]));
	}, t.prototype.completeVisualOption = function() {
		e.prototype.completeVisualOption.apply(this, arguments), I(this.stateList, function(e) {
			var t = this.option.controller[e].symbolSize;
			t && t[0] !== t[1] && (t[0] = t[1] / 3);
		}, this);
	}, t.prototype.setSelected = function(e) {
		this.option.range = e.slice(), this._resetRange();
	}, t.prototype.getSelected = function() {
		var e = this.getExtent(), t = Ys((this.get("range") || []).slice());
		return t[0] > e[1] && (t[0] = e[1]), t[1] > e[1] && (t[1] = e[1]), t[0] < e[0] && (t[0] = e[0]), t[1] < e[0] && (t[1] = e[0]), t;
	}, t.prototype.getValueState = function(e) {
		var t = this.option.range, n = this.getExtent(), r = G(this.option.unboundedRange, !0);
		return (r && t[0] <= n[0] || t[0] <= e) && (r && t[1] >= n[1] || e <= t[1]) ? "inRange" : "outOfRange";
	}, t.prototype.findTargetDataIndices = function(e) {
		var t = [];
		return this.eachTargetSeries(function(n) {
			var r = [], i = n.getData();
			i.each(this.getDataDimensionIndex(i), function(t, n) {
				e[0] <= t && t <= e[1] && r.push(n);
			}, this), t.push({
				seriesId: n.id,
				dataIndex: r
			});
		}, this), t;
	}, t.prototype.getVisualMeta = function(e) {
		var t = RV(this, "outOfRange", this.getExtent()), n = RV(this, "inRange", this.option.range.slice()), r = [];
		function i(t, n) {
			r.push({
				value: t,
				color: e(t, n)
			});
		}
		for (var a = 0, o = 0, s = n.length, c = t.length; o < c && (!n.length || t[o] <= n[0]); o++) t[o] < n[a] && i(t[o], "outOfRange");
		for (var l = 1; a < s; a++, l = 0) l && r.length && i(n[a], "outOfRange"), i(n[a], "inRange");
		for (var l = 1; o < c; o++) (!n.length || n[n.length - 1] < t[o]) && (l &&= (r.length && i(r[r.length - 1].value, "outOfRange"), 0), i(t[o], "outOfRange"));
		var u = r.length;
		return {
			stops: r,
			outerColors: [u ? r[0].color : "transparent", u ? r[u - 1].color : "transparent"]
		};
	}, t.type = "visualMap.continuous", t.defaultOption = ng(FV.defaultOption, {
		align: "auto",
		calculable: !1,
		hoverLink: !0,
		realtime: !0,
		handleIcon: "path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",
		handleSize: "120%",
		handleStyle: {
			borderColor: Q.color.neutral00,
			borderWidth: 1
		},
		indicatorIcon: "circle",
		indicatorSize: "50%",
		indicatorStyle: {
			borderColor: Q.color.neutral00,
			borderWidth: 2,
			shadowBlur: 2,
			shadowOffsetX: 1,
			shadowOffsetY: 1,
			shadowColor: Q.color.shadow
		}
	}), t;
}(FV);
function RV(e, t, n) {
	if (n[0] === n[1]) return n.slice();
	for (var r = 200, i = (n[1] - n[0]) / r, a = n[0], o = [], s = 0; s <= r && a < n[1]; s++) o.push(a), a += i;
	return o.push(n[1]), o;
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/VisualMapView.js
var zV = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.autoPositionValues = {
			left: 1,
			right: 1,
			top: 1,
			bottom: 1
		}, n;
	}
	return t.prototype.init = function(e, t) {
		this.ecModel = e, this.api = t;
	}, t.prototype.render = function(e, t, n, r) {
		if (this.visualMapModel = e, e.get("show") === !1) {
			this.group.removeAll();
			return;
		}
		this.doRender(e, t, n, r);
	}, t.prototype.renderBackground = function(e) {
		var t = this.visualMapModel, n = y_(t.get("padding") || 0), r = e.getBoundingRect();
		e.add(new cs({
			z2: -1,
			silent: !0,
			shape: {
				x: r.x - n[3],
				y: r.y - n[0],
				width: r.width + n[3] + n[1],
				height: r.height + n[0] + n[2]
			},
			style: {
				fill: t.get("backgroundColor"),
				stroke: t.get("borderColor"),
				lineWidth: t.get("borderWidth")
			}
		}));
	}, t.prototype.getControllerVisual = function(e, t, n) {
		n ||= {};
		var r = n.forceState, i = this.visualMapModel, a = {};
		t === "color" && (a.color = i.get("contentColor"));
		function o(e) {
			return a[e];
		}
		function s(e, t) {
			a[e] = t;
		}
		var c = i.controllerVisuals[r || i.getValueState(e)];
		return I(FI.prepareVisualTypes(c), function(r) {
			var i = c[r];
			n.convertOpacityToAlpha && r === "opacity" && (r = "colorAlpha", i = c.__alphaForOpacity), FI.dependsOn(r, t) && i && i.applyVisual(e, o, s);
		}), a[t];
	}, t.prototype.positionGroup = function(e) {
		var t = this.visualMapModel, n = this.api, r = B_(t, n).refContainer;
		V_(e, t.getBoxLayoutParams(), r);
	}, t.prototype.doRender = function(e, t, n, r) {}, t.type = "visualMap", t;
}(UO), BV = [[
	"left",
	"right",
	"width"
], [
	"top",
	"bottom",
	"height"
]];
function VV(e, t, n) {
	var r = e.option, i = r.align;
	if (i != null && i !== "auto") return i;
	for (var a = {
		width: t.getWidth(),
		height: t.getHeight()
	}, o = +(r.orient === "horizontal"), s = BV[o], c = [
		0,
		null,
		10
	], l = {}, u = 0; u < 3; u++) l[BV[1 - o][u]] = c[u], l[s[u]] = u === 2 ? n[0] : r[s[u]];
	var d = [[
		"x",
		"width",
		3
	], [
		"y",
		"height",
		0
	]][o], f = L_(l, a, r.padding);
	return s[(f.margin[d[2]] || 0) + f[d[0]] + f[d[1]] * .5 < a[d[1]] * .5 ? 0 : 1];
}
function HV(e, t) {
	return I(e || [], function(e) {
		e.dataIndex != null && (e.dataIndexInside = e.dataIndex, e.dataIndex = null), e.highlightKey = "visualMap" + (t ? t.componentIndex : "");
	}), e;
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/ContinuousView.js
var UV = Vs, WV = I, GV = Math.min, KV = Math.max, qV = 12, JV = 6, YV = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._shapes = {}, n._dataInterval = [], n._handleEnds = [], n._hoverLinkDataIndices = [], n;
	}
	return t.prototype.init = function(t, n) {
		e.prototype.init.call(this, t, n), this._hoverLinkFromSeriesMouseOver = B(this._hoverLinkFromSeriesMouseOver, this), this._hideIndicator = B(this._hideIndicator, this);
	}, t.prototype.doRender = function(e, t, n, r) {
		(!r || r.type !== "selectDataRange" || r.from !== this.uid) && this._buildView();
	}, t.prototype._buildView = function() {
		this.group.removeAll();
		var e = this.visualMapModel, t = this.group;
		this._orient = e.get("orient"), this._useHandle = e.get("calculable"), this._resetInterval(), this._renderBar(t);
		var n = e.get("text");
		this._renderEndsText(t, n, 0), this._renderEndsText(t, n, 1), this._updateView(!0), this.renderBackground(t), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(t);
	}, t.prototype._renderEndsText = function(e, t, n) {
		if (t) {
			var r = t[1 - n];
			r = r == null ? "" : r + "";
			var i = this.visualMapModel, a = i.get("textGap"), o = i.itemSize, s = this._shapes.mainGroup, c = this._applyTransform([o[0] / 2, n === 0 ? -a : o[1] + a], s), l = this._applyTransform(n === 0 ? "bottom" : "top", s), u = this._orient, d = this.visualMapModel.textStyleModel;
			this.group.add(new ps({ style: Tp(d, {
				x: c[0],
				y: c[1],
				verticalAlign: d.get("verticalAlign") || (u === "horizontal" ? "middle" : l),
				align: d.get("align") || (u === "horizontal" ? l : "center"),
				text: r
			}) }));
		}
	}, t.prototype._renderBar = function(e) {
		var t = this.visualMapModel, n = this._shapes, r = t.itemSize, i = this._orient, a = this._useHandle, o = VV(t, this.api, r), s = n.mainGroup = this._createBarGroup(o), c = new hd();
		s.add(c), c.add(n.outOfRange = XV()), c.add(n.inRange = XV(null, a ? $V(this._orient) : null, B(this._dragHandle, this, "all", !1), B(this._dragHandle, this, "all", !0))), c.setClipPath(new cs({ shape: {
			x: 0,
			y: 0,
			width: r[0],
			height: r[1],
			r: 3
		} }));
		var l = t.textStyleModel.getTextRect("国"), u = KV(l.width, l.height);
		a && (n.handleThumbs = [], n.handleLabels = [], n.handleLabelPoints = [], this._createHandle(t, s, 0, r, u, i), this._createHandle(t, s, 1, r, u, i)), this._createIndicator(t, s, r, u, i), e.add(s);
	}, t.prototype._createHandle = function(e, t, n, r, i, a) {
		var o = B(this._dragHandle, this, n, !1), s = B(this._dragHandle, this, n, !0), c = Nn(e.get("handleSize"), r[0]), l = uy(e.get("handleIcon"), -c / 2, -c / 2, c, c, null, !0), u = $V(this._orient);
		l.attr({
			cursor: u,
			draggable: !0,
			drift: o,
			ondragend: s,
			onmousemove: function(e) {
				ME(e.event);
			}
		}), l.x = r[0] / 2, l.useStyle(e.getModel("handleStyle").getItemStyle()), l.setStyle({
			strokeNoScale: !0,
			strokeFirst: !0
		}), l.style.lineWidth *= 2, l.ensureState("emphasis").style = e.getModel(["emphasis", "handleStyle"]).getItemStyle(), Bu(l, !0), t.add(l);
		var d = this.visualMapModel.textStyleModel, f = new ps({
			cursor: u,
			draggable: !0,
			drift: o,
			onmousemove: function(e) {
				ME(e.event);
			},
			ondragend: s,
			style: Tp(d, {
				x: 0,
				y: 0,
				text: ""
			})
		});
		f.ensureState("blur").style = { opacity: .1 }, f.stateTransition = { duration: 200 }, this.group.add(f);
		var p = [c, 0], m = this._shapes;
		m.handleThumbs[n] = l, m.handleLabelPoints[n] = p, m.handleLabels[n] = f;
	}, t.prototype._createIndicator = function(e, t, n, r, i) {
		var a = Nn(e.get("indicatorSize"), n[0]), o = uy(e.get("indicatorIcon"), -a / 2, -a / 2, a, a, null, !0);
		o.attr({
			cursor: "move",
			invisible: !0,
			silent: !0,
			x: n[0] / 2
		});
		var s = e.getModel("indicatorStyle").getItemStyle();
		if (o instanceof es) {
			var c = o.style;
			o.useStyle(N({
				image: c.image,
				x: c.x,
				y: c.y,
				width: c.width,
				height: c.height
			}, s));
		} else o.useStyle(s);
		t.add(o);
		var l = this.visualMapModel.textStyleModel, u = new ps({
			silent: !0,
			invisible: !0,
			style: Tp(l, {
				x: 0,
				y: 0,
				text: ""
			})
		});
		this.group.add(u);
		var d = [(i === "horizontal" ? r / 2 : JV) + n[0] / 2, 0], f = this._shapes;
		f.indicator = o, f.indicatorLabel = u, f.indicatorLabelPoint = d, this._firstShowIndicator = !0;
	}, t.prototype._dragHandle = function(e, t, n, r) {
		if (this._useHandle) {
			if (this._dragging = !t, !t) {
				var i = this._applyTransform([n, r], this._shapes.mainGroup, !0);
				this._updateInterval(e, i[1]), this._hideIndicator(), this._updateView();
			}
			t === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
				type: "selectDataRange",
				from: this.uid,
				visualMapId: this.visualMapModel.id,
				selected: this._dataInterval.slice()
			}), t ? !this._hovering && this._clearHoverLinkToSeries() : QV(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[e], !1);
		}
	}, t.prototype._resetInterval = function() {
		var e = this.visualMapModel, t = this._dataInterval = e.getSelected(), n = e.getExtent(), r = [0, e.itemSize[1]];
		this._handleEnds = [UV(t[0], n, r, !0), UV(t[1], n, r, !0)];
	}, t.prototype._updateInterval = function(e, t) {
		t ||= 0;
		var n = this.visualMapModel, r = this._handleEnds, i = [0, n.itemSize[1]];
		YI(t, r, i, e, 0);
		var a = n.getExtent();
		this._dataInterval = [UV(r[0], i, a, !0), UV(r[1], i, a, !0)];
	}, t.prototype._updateView = function(e) {
		var t = this.visualMapModel, n = t.getExtent(), r = this._shapes, i = [0, t.itemSize[1]], a = e ? i : this._handleEnds, o = this._createBarVisual(this._dataInterval, n, a, "inRange"), s = this._createBarVisual(n, n, i, "outOfRange");
		r.inRange.setStyle({ fill: o.barColor }).setShape("points", o.barPoints), r.outOfRange.setStyle({ fill: s.barColor }).setShape("points", s.barPoints), this._updateHandle(a, o);
	}, t.prototype._createBarVisual = function(e, t, n, r) {
		var i = {
			forceState: r,
			convertOpacityToAlpha: !0
		}, a = this._makeColorGradient(e, i), o = [this.getControllerVisual(e[0], "symbolSize", i), this.getControllerVisual(e[1], "symbolSize", i)], s = this._createBarPoints(n, o);
		return {
			barColor: new nf(0, 0, 0, 1, a),
			barPoints: s,
			handlesColor: [a[0].color, a[a.length - 1].color]
		};
	}, t.prototype._makeColorGradient = function(e, t) {
		var n = 100, r = [], i = (e[1] - e[0]) / n;
		r.push({
			color: this.getControllerVisual(e[0], "color", t),
			offset: 0
		});
		for (var a = 1; a < n; a++) {
			var o = e[0] + i * a;
			if (o > e[1]) break;
			r.push({
				color: this.getControllerVisual(o, "color", t),
				offset: a / n
			});
		}
		return r.push({
			color: this.getControllerVisual(e[1], "color", t),
			offset: 1
		}), r;
	}, t.prototype._createBarPoints = function(e, t) {
		var n = this.visualMapModel.itemSize;
		return [
			[n[0] - t[0], e[0]],
			[n[0], e[0]],
			[n[0], e[1]],
			[n[0] - t[1], e[1]]
		];
	}, t.prototype._createBarGroup = function(e) {
		var t = this._orient, n = this.visualMapModel.get("inverse");
		return new hd(t === "horizontal" && !n ? {
			scaleX: e === "bottom" ? 1 : -1,
			rotation: Math.PI / 2
		} : t === "horizontal" && n ? {
			scaleX: e === "bottom" ? -1 : 1,
			rotation: -Math.PI / 2
		} : t === "vertical" && !n ? {
			scaleX: e === "left" ? 1 : -1,
			scaleY: -1
		} : { scaleX: e === "left" ? 1 : -1 });
	}, t.prototype._updateHandle = function(e, t) {
		if (this._useHandle) {
			var n = this._shapes, r = this.visualMapModel, i = n.handleThumbs, a = n.handleLabels, o = r.itemSize, s = r.getExtent(), c = this._applyTransform("left", n.mainGroup);
			WV([0, 1], function(l) {
				var u = i[l];
				u.setStyle("fill", t.handlesColor[l]), u.y = e[l];
				var d = UV(e[l], [0, o[1]], s, !0), f = this.getControllerVisual(d, "symbolSize");
				u.scaleX = u.scaleY = f / o[0], u.x = o[0] - f / 2;
				var p = Wf(n.handleLabelPoints[l], Uf(u, this.group));
				if (this._orient === "horizontal") {
					var m = c === "left" || c === "top" ? (o[0] - f) / 2 : (o[0] - f) / -2;
					p[1] += m;
				}
				a[l].setStyle({
					x: p[0],
					y: p[1],
					text: r.formatValueText(this._dataInterval[l]),
					verticalAlign: "middle",
					align: this._orient === "vertical" ? this._applyTransform("left", n.mainGroup) : "center"
				});
			}, this);
		}
	}, t.prototype._showIndicator = function(e, t, n, r) {
		var i = this.visualMapModel, a = i.getExtent(), o = i.itemSize, s = [0, o[1]], c = this._shapes, l = c.indicator;
		if (l) {
			l.attr("invisible", !1);
			var u = this.getControllerVisual(e, "color", { convertOpacityToAlpha: !0 }), d = this.getControllerVisual(e, "symbolSize"), f = UV(e, a, s, !0), p = o[0] - d / 2, m = {
				x: l.x,
				y: l.y
			};
			l.y = f, l.x = p;
			var h = Wf(c.indicatorLabelPoint, Uf(l, this.group)), g = c.indicatorLabel;
			g.attr("invisible", !1);
			var _ = this._applyTransform("left", c.mainGroup), v = this._orient === "horizontal";
			g.setStyle({
				text: (n || "") + i.formatValueText(t),
				verticalAlign: v ? _ : "middle",
				align: v ? "center" : _
			});
			var y = {
				x: p,
				y: f,
				style: { fill: u }
			}, b = { style: {
				x: h[0],
				y: h[1]
			} };
			if (i.ecModel.isAnimationEnabled() && !this._firstShowIndicator) {
				var x = {
					duration: 100,
					easing: "cubicInOut",
					additive: !0
				};
				l.x = m.x, l.y = m.y, l.animateTo(y, x), g.animateTo(b, x);
			} else l.attr(y), g.attr(b);
			this._firstShowIndicator = !1;
			var S = this._shapes.handleLabels;
			if (S) for (var C = 0; C < S.length; C++) this.api.enterBlur(S[C]);
		}
	}, t.prototype._enableHoverLinkToSeries = function() {
		var e = this;
		this._shapes.mainGroup.on("mousemove", function(t) {
			if (e._hovering = !0, !e._dragging) {
				var n = e.visualMapModel.itemSize, r = e._applyTransform([t.offsetX, t.offsetY], e._shapes.mainGroup, !0, !0);
				r[1] = GV(KV(0, r[1]), n[1]), e._doHoverLinkToSeries(r[1], 0 <= r[0] && r[0] <= n[0]);
			}
		}).on("mouseout", function() {
			e._hovering = !1, !e._dragging && e._clearHoverLinkToSeries();
		});
	}, t.prototype._enableHoverLinkFromSeries = function() {
		var e = this.api.getZr();
		this.visualMapModel.option.hoverLink ? (e.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), e.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries();
	}, t.prototype._doHoverLinkToSeries = function(e, t) {
		var n = this.visualMapModel, r = n.itemSize;
		if (n.option.hoverLink) {
			var i = [0, r[1]], a = n.getExtent();
			e = GV(KV(i[0], e), i[1]);
			var o = ZV(n, a, i), s = [e - o, e + o], c = UV(e, i, a, !0), l = [UV(s[0], i, a, !0), UV(s[1], i, a, !0)];
			s[0] < i[0] && (l[0] = -Infinity), s[1] > i[1] && (l[1] = Infinity), t && (l[0] === -Infinity ? this._showIndicator(c, l[1], "< ", o) : l[1] === Infinity ? this._showIndicator(c, l[0], "> ", o) : this._showIndicator(c, c, "≈ ", o));
			var u = this._hoverLinkDataIndices, d = [];
			(t || QV(n)) && (d = this._hoverLinkDataIndices = n.findTargetDataIndices(l));
			var f = qc(u, d);
			this._dispatchHighDown("downplay", HV(f[0], n)), this._dispatchHighDown("highlight", HV(f[1], n));
		}
	}, t.prototype._hoverLinkFromSeriesMouseOver = function(e) {
		var t;
		if (Ok(e.target, function(e) {
			var n = Z(e);
			if (n.dataIndex != null) return t = n, !0;
		}, !0), t) {
			var n = this.ecModel.getSeriesByIndex(t.seriesIndex), r = this.visualMapModel;
			if (r.isTargetSeries(n)) {
				var i = n.getData(t.dataType), a = i.getStore().get(r.getDataDimensionIndex(i), t.dataIndex);
				isNaN(a) || this._showIndicator(a, a);
			}
		}
	}, t.prototype._hideIndicator = function() {
		var e = this._shapes;
		e.indicator && e.indicator.attr("invisible", !0), e.indicatorLabel && e.indicatorLabel.attr("invisible", !0);
		var t = this._shapes.handleLabels;
		if (t) for (var n = 0; n < t.length; n++) this.api.leaveBlur(t[n]);
	}, t.prototype._clearHoverLinkToSeries = function() {
		this._hideIndicator();
		var e = this._hoverLinkDataIndices;
		this._dispatchHighDown("downplay", HV(e, this.visualMapModel)), e.length = 0;
	}, t.prototype._clearHoverLinkFromSeries = function() {
		this._hideIndicator();
		var e = this.api.getZr();
		e.off("mouseover", this._hoverLinkFromSeriesMouseOver), e.off("mouseout", this._hideIndicator);
	}, t.prototype._applyTransform = function(e, t, n, r) {
		var i = Uf(t, r ? null : this.group);
		return V(e) ? Wf(e, i, n) : Gf(e, i, n);
	}, t.prototype._dispatchHighDown = function(e, t) {
		t && t.length && this.api.dispatchAction({
			type: e,
			batch: t
		});
	}, t.prototype.dispose = function() {
		this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
	}, t.type = "visualMap.continuous", t;
}(zV);
function XV(e, t, n, r) {
	return new Hd({
		shape: { points: e },
		draggable: !!n,
		cursor: t,
		drift: n,
		onmousemove: function(e) {
			ME(e.event);
		},
		ondragend: r
	});
}
function ZV(e, t, n) {
	var r = qV / 2, i = e.get("hoverLinkDataSize");
	return i && (r = UV(i, t, n, !0) / 2), r;
}
function QV(e) {
	return !!(e.get("hoverLinkOnHandle") ?? e.get("realtime"));
}
function $V(e) {
	return e === "vertical" ? "ns-resize" : "ew-resize";
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/visualMapAction.js
var eH = {
	type: "selectDataRange",
	event: "dataRangeSelected",
	update: "update"
}, tH = function(e, t) {
	t.eachComponent({
		mainType: "visualMap",
		query: e
	}, function(t) {
		t.setSelected(e.selected);
	});
}, nH = [{
	createOnAllSeries: !0,
	reset: function(e, t) {
		var n = [];
		return t.eachComponent("visualMap", function(t) {
			var r = e.pipelineContext;
			!t.isTargetSeries(e) || r && r.large || n.push(bB(t.stateList, t.targetVisuals, B(t.getValueState, t), t.getDataDimensionIndex(e.getData())));
		}), n;
	}
}, {
	createOnAllSeries: !0,
	reset: function(e, t) {
		var n = e.getData(), r = [];
		t.eachComponent("visualMap", function(t) {
			if (t.isTargetSeries(e)) {
				var i = t.getVisualMeta(B(rH, null, e, t)) || {
					stops: [],
					outerColors: []
				}, a = t.getDataDimensionIndex(n);
				a >= 0 && (i.dimension = a, r.push(i));
			}
		}), e.getData().setVisual("visualMeta", r);
	}
}];
function rH(e, t, n, r) {
	for (var i = t.targetVisuals[r], a = FI.prepareVisualTypes(i), o = { color: Ek(e.getData(), "color") }, s = 0, c = a.length; s < c; s++) {
		var l = a[s], u = i[l === "opacity" ? "__alphaForOpacity" : l];
		u && u.applyVisual(n, d, f);
	}
	return o.color;
	function d(e) {
		return o[e];
	}
	function f(e, t) {
		o[e] = t;
	}
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/preprocessor.js
var iH = I;
function aH(e) {
	var t = e && e.visualMap;
	V(t) || (t = t ? [t] : []), iH(t, function(e) {
		if (e) {
			oH(e, "splitList") && !oH(e, "pieces") && (e.pieces = e.splitList, delete e.splitList);
			var t = e.pieces;
			t && V(t) && iH(t, function(e) {
				W(e) && (oH(e, "start") && !oH(e, "min") && (e.min = e.start), oH(e, "end") && !oH(e, "max") && (e.max = e.end));
			});
		}
	});
}
function oH(e, t) {
	return e && e.hasOwnProperty && e.hasOwnProperty(t);
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/installCommon.js
var sH = !1;
function cH(e) {
	sH || (sH = !0, e.registerSubTypeDefaulter("visualMap", function(e) {
		return !e.categories && (!(e.pieces ? e.pieces.length > 0 : e.splitNumber > 0) || e.calculable) ? "continuous" : "piecewise";
	}), e.registerAction(eH, tH), I(nH, function(t) {
		e.registerVisual(e.PRIORITY.VISUAL.COMPONENT, t);
	}), e.registerPreprocessor(aH));
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js
function lH(e) {
	e.registerComponentModel(LV), e.registerComponentView(YV), cH(e);
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/PiecewiseModel.js
var uH = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._pieceList = [], n;
	}
	return t.prototype.optionUpdated = function(t, n) {
		e.prototype.optionUpdated.apply(this, arguments), this.resetExtent();
		var r = this._mode = this._determineMode();
		this._pieceList = [], dH[this._mode].call(this, this._pieceList), this._resetSelected(t, n);
		var i = this.option.categories;
		this.resetVisual(function(e, t) {
			r === "categories" ? (e.mappingMethod = "category", e.categories = j(i)) : (e.dataExtent = this.getExtent(), e.mappingMethod = "piecewise", e.pieceList = L(this._pieceList, function(e) {
				return e = j(e), t !== "inRange" && (e.visual = null), e;
			}));
		});
	}, t.prototype.completeVisualOption = function() {
		var t = this.option, n = {}, r = FI.listVisualTypes(), i = this.isCategory();
		I(t.pieces, function(e) {
			I(r, function(t) {
				e.hasOwnProperty(t) && (n[t] = 1);
			});
		}), I(n, function(e, n) {
			var r = !1;
			I(this.stateList, function(e) {
				r = r || a(t, e, n) || a(t.target, e, n);
			}, this), !r && I(this.stateList, function(e) {
				(t[e] || (t[e] = {}))[n] = DV.get(n, e === "inRange" ? "active" : "inactive", i);
			});
		}, this);
		function a(e, t, n) {
			return e && e[t] && e[t].hasOwnProperty(n);
		}
		e.prototype.completeVisualOption.apply(this, arguments);
	}, t.prototype._resetSelected = function(e, t) {
		var n = this.option, r = this._pieceList, i = (t ? n : e).selected || {};
		if (n.selected = i, I(r, function(e, t) {
			var n = this.getSelectedMapKey(e);
			i.hasOwnProperty(n) || (i[n] = !0);
		}, this), n.selectedMode === "single") {
			var a = !1;
			I(r, function(e, t) {
				var n = this.getSelectedMapKey(e);
				i[n] && (a ? i[n] = !1 : a = !0);
			}, this);
		}
	}, t.prototype.getItemSymbol = function() {
		return this.get("itemSymbol");
	}, t.prototype.getSelectedMapKey = function(e) {
		return this._mode === "categories" ? e.value + "" : e.index + "";
	}, t.prototype.getPieceList = function() {
		return this._pieceList;
	}, t.prototype._determineMode = function() {
		var e = this.option;
		return e.pieces && e.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber";
	}, t.prototype.setSelected = function(e) {
		this.option.selected = j(e);
	}, t.prototype.getValueState = function(e) {
		var t = FI.findPieceIndex(e, this._pieceList);
		return t == null ? "outOfRange" : this.option.selected[this.getSelectedMapKey(this._pieceList[t])] ? "inRange" : "outOfRange";
	}, t.prototype.findTargetDataIndices = function(e) {
		var t = [], n = this._pieceList;
		return this.eachTargetSeries(function(r) {
			var i = [], a = r.getData();
			a.each(this.getDataDimensionIndex(a), function(t, r) {
				FI.findPieceIndex(t, n) === e && i.push(r);
			}, this), t.push({
				seriesId: r.id,
				dataIndex: i
			});
		}, this), t;
	}, t.prototype.getRepresentValue = function(e) {
		var t;
		if (this.isCategory()) t = e.value;
		else if (e.value != null) t = e.value;
		else {
			var n = e.interval || [];
			t = n[0] === -Infinity && n[1] === Infinity ? 0 : (n[0] + n[1]) / 2;
		}
		return t;
	}, t.prototype.getVisualMeta = function(e) {
		if (this.isCategory()) return;
		var t = [], n = ["", ""], r = this;
		function i(i, a) {
			var o = r.getRepresentValue({ interval: i });
			a ||= r.getValueState(o);
			var s = e(o, a);
			i[0] === -Infinity ? n[0] = s : i[1] === Infinity ? n[1] = s : t.push({
				value: i[0],
				color: s
			}, {
				value: i[1],
				color: s
			});
		}
		var a = this._pieceList.slice();
		if (!a.length) a.push({ interval: [-Infinity, Infinity] });
		else {
			var o = a[0].interval[0];
			o !== -Infinity && a.unshift({ interval: [-Infinity, o] }), o = a[a.length - 1].interval[1], o !== Infinity && a.push({ interval: [o, Infinity] });
		}
		var s = -Infinity;
		return I(a, function(e) {
			var t = e.interval;
			t && (t[0] > s && i([s, t[0]], "outOfRange"), i(t.slice()), s = t[1]);
		}, this), {
			stops: t,
			outerColors: n
		};
	}, t.type = "visualMap.piecewise", t.defaultOption = ng(FV.defaultOption, {
		selected: null,
		minOpen: !1,
		maxOpen: !1,
		align: "auto",
		itemWidth: 20,
		itemHeight: 14,
		itemSymbol: "roundRect",
		pieces: null,
		categories: null,
		splitNumber: 5,
		selectedMode: "multiple",
		itemGap: 10,
		hoverLink: !0
	}), t;
}(FV), dH = {
	splitNumber: function(e) {
		var t = this.option, n = Math.min(t.precision, 20), r = this.getExtent(), i = t.splitNumber;
		i = Math.max(parseInt(i, 10), 1), t.splitNumber = i;
		for (var a = (r[1] - r[0]) / i; +a.toFixed(n) !== a && n < 5;) n++;
		t.precision = n, a = +a.toFixed(n), t.minOpen && e.push({
			interval: [-Infinity, r[0]],
			close: [0, 0]
		});
		for (var o = 0, s = r[0]; o < i; s += a, o++) {
			var c = o === i - 1 ? r[1] : s + a;
			e.push({
				interval: [s, c],
				close: [1, 1]
			});
		}
		t.maxOpen && e.push({
			interval: [r[1], Infinity],
			close: [0, 0]
		}), fc(e), I(e, function(e, t) {
			e.index = t, e.text = this.formatValueText(e.interval);
		}, this);
	},
	categories: function(e) {
		var t = this.option;
		I(t.categories, function(t) {
			e.push({
				text: this.formatValueText(t, !0),
				value: t
			});
		}, this), fH(t, e);
	},
	pieces: function(e) {
		var t = this.option;
		I(t.pieces, function(t, n) {
			W(t) || (t = { value: t });
			var r = {
				text: "",
				index: n
			};
			if (t.label != null && (r.text = t.label), t.hasOwnProperty("value")) {
				var i = r.value = t.value;
				r.interval = [i, i], r.close = [1, 1];
			} else {
				for (var a = r.interval = [], o = r.close = [0, 0], s = [
					1,
					0,
					1
				], c = [-Infinity, Infinity], l = [], u = 0; u < 2; u++) {
					for (var d = [[
						"gte",
						"gt",
						"min"
					], [
						"lte",
						"lt",
						"max"
					]][u], f = 0; f < 3 && a[u] == null; f++) a[u] = t[d[f]], o[u] = s[f], l[u] = f === 2;
					a[u] ?? (a[u] = c[u]);
				}
				l[0] && a[1] === Infinity && (o[0] = 0), l[1] && a[0] === -Infinity && (o[1] = 0), a[0] === a[1] && o[0] && o[1] && (r.value = a[0]);
			}
			r.visual = FI.retrieveVisuals(t), e.push(r);
		}, this), fH(t, e), fc(e), I(e, function(e) {
			var t = e.close, n = [["<", "≤"][t[1]], [">", "≥"][t[0]]];
			e.text = e.text || this.formatValueText(e.value == null ? e.interval : e.value, !1, n);
		}, this);
	}
};
function fH(e, t) {
	var n = e.inverse;
	(e.orient === "vertical" ? !n : n) && t.reverse();
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/PiecewiseView.js
var pH = function(e) {
	l(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.doRender = function() {
		var e = this.group;
		e.removeAll();
		var t = this.visualMapModel, n = t.get("textGap"), r = t.textStyleModel, i = this._getItemAlign(), a = t.itemSize, o = this._getViewData(), s = o.endsText, c = Se(t.get("showLabel", !0), !s), l = !t.get("selectedMode");
		s && this._renderEndsText(e, s[0], a, c, i), I(o.viewPieceList, function(o) {
			var s = o.piece, u = new hd();
			u.onclick = B(this._onItemClick, this, s), this._enableHoverLink(u, o.indexInModelPieceList);
			var d = t.getRepresentValue(s);
			if (this._createItemSymbol(u, d, [
				0,
				0,
				a[0],
				a[1]
			], l), c) {
				var f = this.visualMapModel.getValueState(d), p = r.get("align") || i;
				u.add(new ps({
					style: Tp(r, {
						x: p === "right" ? -n : a[0] + n,
						y: a[1] / 2,
						text: s.text,
						verticalAlign: r.get("verticalAlign") || "middle",
						align: p,
						opacity: G(r.get("opacity"), f === "outOfRange" ? .5 : 1)
					}),
					silent: l
				}));
			}
			e.add(u);
		}, this), s && this._renderEndsText(e, s[1], a, c, i), N_(t.get("orient"), e, t.get("itemGap")), this.renderBackground(e), this.positionGroup(e);
	}, t.prototype._enableHoverLink = function(e, t) {
		var n = this;
		e.on("mouseover", function() {
			return r("highlight");
		}).on("mouseout", function() {
			return r("downplay");
		});
		var r = function(e) {
			var r = n.visualMapModel;
			r.option.hoverLink && n.api.dispatchAction({
				type: e,
				batch: HV(r.findTargetDataIndices(t), r)
			});
		};
	}, t.prototype._getItemAlign = function() {
		var e = this.visualMapModel, t = e.option;
		if (t.orient === "vertical") return VV(e, this.api, e.itemSize);
		var n = t.align;
		return (!n || n === "auto") && (n = "left"), n;
	}, t.prototype._renderEndsText = function(e, t, n, r, i) {
		if (t) {
			var a = new hd(), o = this.visualMapModel.textStyleModel;
			a.add(new ps({ style: Tp(o, {
				x: r ? i === "right" ? n[0] : 0 : n[0] / 2,
				y: n[1] / 2,
				verticalAlign: "middle",
				align: r ? i : "center",
				text: t
			}) })), e.add(a);
		}
	}, t.prototype._getViewData = function() {
		var e = this.visualMapModel, t = L(e.getPieceList(), function(e, t) {
			return {
				piece: e,
				indexInModelPieceList: t
			};
		}), n = e.get("text"), r = e.get("orient"), i = e.get("inverse");
		return (r === "horizontal" ? i : !i) ? t.reverse() : n &&= n.slice().reverse(), {
			viewPieceList: t,
			endsText: n
		};
	}, t.prototype._createItemSymbol = function(e, t, n, r) {
		var i = uy(this.getControllerVisual(t, "symbol"), n[0], n[1], n[2], n[3], this.getControllerVisual(t, "color"));
		i.silent = r, e.add(i);
	}, t.prototype._onItemClick = function(e) {
		var t = this.visualMapModel, n = t.option, r = n.selectedMode;
		if (r) {
			var i = j(n.selected), a = t.getSelectedMapKey(e);
			r === "single" || r === !0 ? (i[a] = !0, I(i, function(e, t) {
				i[t] = t === a;
			})) : i[a] = !i[a], this.api.dispatchAction({
				type: "selectDataRange",
				from: this.uid,
				visualMapId: this.visualMapModel.id,
				selected: i
			});
		}
	}, t.type = "visualMap.piecewise", t;
}(zV);
//#endregion
//#region node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js
function mH(e) {
	e.registerComponentModel(uH), e.registerComponentView(pH), cH(e);
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/install.js
function hH(e) {
	wM(lH), wM(mH);
}
//#endregion
//#region node_modules/echarts/lib/component/dataset/install.js
var gH = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "dataset", t;
	}
	return t.prototype.init = function(t, n, r) {
		e.prototype.init.call(this, t, n, r), this._sourceManager = new _v(this), vv(this);
	}, t.prototype.mergeOption = function(t, n) {
		e.prototype.mergeOption.call(this, t, n), vv(this);
	}, t.prototype.optionUpdated = function() {
		this._sourceManager.dirty();
	}, t.prototype.getSourceManager = function() {
		return this._sourceManager;
	}, t.type = "dataset", t.defaultOption = { seriesLayoutBy: Pl }, t;
}(q_), _H = function(e) {
	l(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "dataset", t;
	}
	return t.type = "dataset", t;
}(UO);
function vH(e) {
	e.registerComponentModel(gH), e.registerComponentView(_H);
}
//#endregion
//#region node_modules/echarts/lib/export/api/helper.js
var yH = /* @__PURE__ */ s({
	createDimensions: () => Eh,
	createList: () => bH,
	createScale: () => SH,
	createSymbol: () => uy,
	createTextStyle: () => wH,
	dataStack: () => xH,
	enableHoverEmphasis: () => Nu,
	getECData: () => Z,
	getLayoutRect: () => L_,
	mixinAxisModelCommonMethods: () => CH
});
function bH(e) {
	return Yh(null, e);
}
var xH = {
	isDimensionStacked: Gh,
	enableDataStack: Uh,
	getStackedDimension: Kh
};
function SH(e, t) {
	var n = t;
	t instanceof Jp || (n = new Jp(t));
	var r = rx(n), i = ix(n, r, !1);
	return e[1] < e[0] && (e = e.slice().reverse()), HM(i, n, null, null, e), i;
}
function CH(e) {
	se(e, TM);
}
function wH(e, t) {
	return t ||= {}, Tp(e, null, null, t.state !== "normal");
}
//#endregion
//#region node_modules/echarts/lib/export/api/number.js
var TH = /* @__PURE__ */ s({
	MAX_SAFE_INTEGER: () => rc,
	asc: () => Ys,
	getPercentWithPrecision: () => ec,
	getPixelPrecision: () => Qs,
	getPrecision: () => Xs,
	getPrecisionSafe: () => Zs,
	isNumeric: () => mc,
	isRadianAroundZero: () => ac,
	linearMap: () => Vs,
	nice: () => uc,
	numericToNumber: () => pc,
	parseDate: () => sc,
	parsePercent: () => Hs,
	quantile: () => dc,
	quantity: () => cc,
	quantityExponent: () => lc,
	reformIntervals: () => fc,
	remRadian: () => ic,
	round: () => Js
}), EH = /* @__PURE__ */ s({
	format: () => Qg,
	parse: () => sc,
	roundTime: () => t_
}), DH = /* @__PURE__ */ s({
	Arc: () => $d,
	BezierCurve: () => Zd,
	BoundingRect: () => X,
	Circle: () => _d,
	CompoundPath: () => ef,
	Ellipse: () => yd,
	Group: () => hd,
	Image: () => es,
	IncrementalDisplayable: () => hf,
	Line: () => qd,
	LinearGradient: () => nf,
	Polygon: () => Hd,
	Polyline: () => Wd,
	RadialGradient: () => rf,
	Rect: () => cs,
	Ring: () => Rd,
	Sector: () => Id,
	Text: () => ps,
	clipPointsByRect: () => Yf,
	clipRectByRect: () => Xf,
	createIcon: () => Zf,
	extendPath: () => Mf,
	extendShape: () => Af,
	getShapeClass: () => Pf,
	getTransform: () => Uf,
	initProps: () => bf,
	makeImage: () => If,
	makePath: () => Ff,
	mergePath: () => Rf,
	registerShape: () => Nf,
	resizePath: () => zf,
	updateProps: () => yf
}), OH = /* @__PURE__ */ s({
	addCommas: () => __,
	capitalFirst: () => E_,
	encodeHTML: () => gg,
	formatTime: () => T_,
	formatTpl: () => C_,
	getTextRect: () => g_,
	getTooltipMarker: () => w_,
	normalizeCssArray: () => y_,
	toCamelCase: () => v_,
	truncateText: () => In
}), kH = /* @__PURE__ */ s({
	bind: () => B,
	clone: () => j,
	curry: () => fe,
	defaults: () => P,
	each: () => I,
	extend: () => N,
	filter: () => le,
	indexOf: () => F,
	inherits: () => oe,
	isArray: () => V,
	isFunction: () => H,
	isObject: () => W,
	isString: () => U,
	map: () => L,
	merge: () => M,
	reduce: () => R
});
//#endregion
//#region node_modules/echarts/lib/export/api.js
function AH(e) {
	var t = q_.extend(e);
	return q_.registerClass(t), t;
}
function jH(e) {
	var t = UO.extend(e);
	return UO.registerClass(t), t;
}
function MH(e) {
	var t = Yv.extend(e);
	return Yv.registerClass(t), t;
}
function NH(e) {
	var t = Uy.extend(e);
	return Uy.registerClass(t), t;
}
//#endregion
//#region node_modules/echarts/lib/label/LabelManager.js
function PH(e) {
	if (e) {
		for (var t = [], n = 0; n < e.length; n++) t.push(e[n].slice());
		return t;
	}
}
function FH(e, t) {
	var n = e.label, r = t && t.getTextGuideLine();
	return {
		dataIndex: e.dataIndex,
		dataType: e.dataType,
		seriesIndex: e.seriesModel.seriesIndex,
		text: e.label.style.text,
		rect: e.hostRect,
		labelRect: e.rect,
		align: n.style.align,
		verticalAlign: n.style.verticalAlign,
		labelLinePoints: PH(r && r.shape.points)
	};
}
var IH = [
	"align",
	"verticalAlign",
	"width",
	"height",
	"fontSize"
], LH = new dr(), RH = Yc(), zH = Yc();
function BH(e, t, n) {
	for (var r = 0; r < n.length; r++) {
		var i = n[r];
		t[i] != null && (e[i] = t[i]);
	}
}
var VH = [
	"x",
	"y",
	"rotation"
], HH = function() {
	function e() {
		this._labelList = [], this._chartViewList = [];
	}
	return e.prototype.clearLabels = function() {
		this._labelList = [], this._chartViewList = [];
	}, e.prototype._addLabel = function(e, t, n, r, i) {
		var a = r.style, o = r.__hostTarget.textConfig || {}, s = r.getComputedTransform(), c = r.getBoundingRect().plain();
		X.applyTransform(c, c, s), s ? LH.setLocalTransform(s) : (LH.x = LH.y = LH.rotation = LH.originX = LH.originY = 0, LH.scaleX = LH.scaleY = 1), LH.rotation = Oo(LH.rotation);
		var l = r.__hostTarget, u;
		if (l) {
			u = l.getBoundingRect().plain();
			var d = l.getComputedTransform();
			X.applyTransform(u, u, d);
		}
		var f = u && l.getTextGuideLine();
		this._labelList.push({
			label: r,
			labelLine: f,
			seriesModel: n,
			dataIndex: e,
			dataType: t,
			layoutOptionOrCb: i,
			layoutOption: null,
			rect: c,
			hostRect: u,
			priority: u ? u.width * u.height : 0,
			defaultAttr: {
				ignore: r.ignore,
				labelGuideIgnore: f && f.ignore,
				x: LH.x,
				y: LH.y,
				scaleX: LH.scaleX,
				scaleY: LH.scaleY,
				rotation: LH.rotation,
				style: {
					x: a.x,
					y: a.y,
					align: a.align,
					verticalAlign: a.verticalAlign,
					width: a.width,
					height: a.height,
					fontSize: a.fontSize
				},
				cursor: r.cursor,
				attachedPos: o.position,
				attachedRot: o.rotation
			}
		});
	}, e.prototype.addLabelsOfSeries = function(e) {
		var t = this;
		this._chartViewList.push(e);
		var n = e.__model, r = n.get("labelLayout");
		(H(r) || z(r).length) && e.group.traverse(function(e) {
			if (e.ignore) return !0;
			var i = e.getTextContent(), a = Z(e);
			i && !i.disableLabelLayout && t._addLabel(a.dataIndex, a.dataType, n, i, r);
		});
	}, e.prototype.updateLayoutConfig = function(e) {
		var t = e.getWidth(), n = e.getHeight();
		function r(e, t) {
			return function() {
				qT(e, t);
			};
		}
		for (var i = 0; i < this._labelList.length; i++) {
			var a = this._labelList[i], o = a.label, s = o.__hostTarget, c = a.defaultAttr, l = void 0;
			l = H(a.layoutOptionOrCb) ? a.layoutOptionOrCb(FH(a, s)) : a.layoutOptionOrCb, l ||= {}, a.layoutOption = l;
			var u = Math.PI / 180;
			s && s.setTextConfig({
				local: !1,
				position: l.x != null || l.y != null ? null : c.attachedPos,
				rotation: l.rotate == null ? c.attachedRot : l.rotate * u,
				offset: [l.dx || 0, l.dy || 0]
			});
			var d = !1;
			if (l.x == null ? (o.x = c.x, o.setStyle("x", c.style.x)) : (o.x = Hs(l.x, t), o.setStyle("x", 0), d = !0), l.y == null ? (o.y = c.y, o.setStyle("y", c.style.y)) : (o.y = Hs(l.y, n), o.setStyle("y", 0), d = !0), l.labelLinePoints) {
				var f = s.getTextGuideLine();
				f && (f.setShape({ points: l.labelLinePoints }), d = !1);
			}
			var p = RH(o);
			p.needsUpdateLabelLine = d, o.rotation = l.rotate == null ? c.rotation : l.rotate * u, o.scaleX = c.scaleX, o.scaleY = c.scaleY;
			for (var m = 0; m < IH.length; m++) {
				var h = IH[m];
				o.setStyle(h, l[h] == null ? c.style[h] : l[h]);
			}
			if (l.draggable) {
				if (o.draggable = !0, o.cursor = "move", s) {
					var g = a.seriesModel;
					a.dataIndex != null && (g = a.seriesModel.getData(a.dataType).getItemModel(a.dataIndex)), o.on("drag", r(s, g.getModel("labelLine")));
				}
			} else o.off("drag"), o.cursor = c.cursor;
		}
	}, e.prototype.layout = function(e) {
		var t = e.getWidth(), n = e.getHeight(), r = [];
		I(this._labelList, function(e) {
			e.defaultAttr.ignore || r.push(nC({}, e));
		});
		var i = le(r, function(e) {
			return e.layoutOption.moveOverlap === "shiftX";
		}), a = le(r, function(e) {
			return e.layoutOption.moveOverlap === "shiftY";
		});
		iC(i, 0, 0, t), iC(a, 1, 0, n);
		var o = le(r, function(e) {
			return e.layoutOption.hideOverlap;
		});
		aC(o), oC(o);
	}, e.prototype.processLabelsOverall = function() {
		var e = this;
		I(this._chartViewList, function(t) {
			var n = t.__model, r = t.ignoreLabelLineUpdate, i = n.isAnimationEnabled();
			t.group.traverse(function(t) {
				if (t.ignore && !t.forceLabelAnimation) return !0;
				var a = !r, o = t.getTextContent();
				!a && o && (a = RH(o).needsUpdateLabelLine), a && e._updateLabelLine(t, n), i && e._animateLabels(t, n);
			});
		});
	}, e.prototype._updateLabelLine = function(e, t) {
		var n = e.getTextContent(), r = Z(e), i = r.dataIndex;
		if (n && i != null) {
			var a = t.getData(r.dataType), o = a.getItemModel(i), s = {}, c = a.getItemVisual(i, "style");
			c && (s.stroke = c[a.getVisual("drawType")]);
			var l = o.getModel("labelLine");
			eE(e, tE(o), s), qT(e, l);
		}
	}, e.prototype._animateLabels = function(e, t) {
		var n = e.getTextContent(), r = e.getTextGuideLine();
		if (n && (e.forceLabelAnimation || !n.ignore && !n.invisible && !e.disableLabelAnimation && !xf(e))) {
			var i = RH(n), a = i.oldLayout, o = Z(e), s = o.dataIndex, c = {
				x: n.x,
				y: n.y,
				rotation: n.rotation
			}, l = t.getData(o.dataType);
			if (a) {
				n.attr(a);
				var u = e.prevStates;
				u && (F(u, "select") >= 0 && n.attr(i.oldLayoutSelect), F(u, "emphasis") >= 0 && n.attr(i.oldLayoutEmphasis)), yf(n, c, t, s);
			} else if (n.attr(c), !Pp(n).valueAnimation) {
				var d = G(n.style.opacity, 1);
				n.style.opacity = 0, bf(n, { style: { opacity: d } }, t, s);
			}
			if (i.oldLayout = c, n.states.select) {
				var f = i.oldLayoutSelect = {};
				BH(f, c, VH), BH(f, n.states.select, VH);
			}
			if (n.states.emphasis) {
				var p = i.oldLayoutEmphasis = {};
				BH(p, c, VH), BH(p, n.states.emphasis, VH);
			}
			Ip(n, s, l, t, t);
		}
		if (r && !r.ignore && !r.invisible) {
			var i = zH(r), a = i.oldLayout, m = { points: r.shape.points };
			a ? (r.attr({ shape: a }), yf(r, { shape: m }, t)) : (r.setShape(m), r.style.strokePercent = 0, bf(r, { style: { strokePercent: 1 } }, t)), i.oldLayout = m;
		}
	}, e;
}(), UH = Yc();
function WH(e) {
	e.registerUpdateLifecycle("series:beforeupdate", function(e, t, n) {
		var r = UH(t).labelManager;
		r ||= UH(t).labelManager = new HH(), r.clearLabels();
	}), e.registerUpdateLifecycle("series:layoutlabels", function(e, t, n) {
		var r = UH(t).labelManager;
		I(n.updatedSeries, function(e) {
			r.addLabelsOfSeries(t.getViewOfSeriesModel(e));
		}), r.updateLayoutConfig(t), r.layout(t), r.processLabelsOverall();
	});
}
//#endregion
//#region node_modules/echarts/core.js
var GH = /* @__PURE__ */ s({
	Axis: () => VS,
	ChartView: () => Uy,
	ComponentModel: () => q_,
	ComponentView: () => UO,
	List: () => Th,
	Model: () => Jp,
	PRIORITY: () => QA,
	SeriesModel: () => Yv,
	color: () => Gr,
	connect: () => Yj,
	dataTool: () => xM,
	dependencies: () => PA,
	disConnect: () => Zj,
	disconnect: () => Xj,
	dispose: () => Qj,
	env: () => J,
	extendChartView: () => NH,
	extendComponentModel: () => AH,
	extendComponentView: () => jH,
	extendSeriesModel: () => MH,
	format: () => OH,
	getCoordinateSystemDimensions: () => lM,
	getInstanceByDom: () => $j,
	getInstanceById: () => eM,
	getMap: () => vM,
	graphic: () => DH,
	helper: () => yH,
	init: () => Jj,
	innerDrawElementOnCanvas: () => vA,
	matrix: () => mt,
	number: () => TH,
	parseGeoJSON: () => LP,
	parseGeoJson: () => LP,
	registerAction: () => sM,
	registerCoordinateSystem: () => cM,
	registerCustomSeries: () => uM,
	registerLayout: () => dM,
	registerLoading: () => hM,
	registerLocale: () => Tg,
	registerMap: () => _M,
	registerPostInit: () => iM,
	registerPostUpdate: () => aM,
	registerPreprocessor: () => nM,
	registerProcessor: () => rM,
	registerTheme: () => tM,
	registerTransform: () => yM,
	registerUpdateLifecycle: () => oM,
	registerVisual: () => fM,
	setCanvasCreator: () => gM,
	setPlatformAPI: () => _,
	throttle: () => Hw,
	time: () => EH,
	use: () => wM,
	util: () => kH,
	vector: () => wt,
	version: () => NA,
	zrUtil: () => v,
	zrender: () => jD
}), KH = Math.sin, qH = Math.cos, JH = Math.PI, YH = Math.PI * 2, XH = 180 / JH, ZH = function() {
	function e() {}
	return e.prototype.reset = function(e) {
		this._start = !0, this._d = [], this._str = "", this._p = 10 ** (e || 4);
	}, e.prototype.moveTo = function(e, t) {
		this._add("M", e, t);
	}, e.prototype.lineTo = function(e, t) {
		this._add("L", e, t);
	}, e.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
		this._add("C", e, t, n, r, i, a);
	}, e.prototype.quadraticCurveTo = function(e, t, n, r) {
		this._add("Q", e, t, n, r);
	}, e.prototype.arc = function(e, t, n, r, i, a) {
		this.ellipse(e, t, n, n, 0, r, i, a);
	}, e.prototype.ellipse = function(e, t, n, r, i, a, o, s) {
		var c = o - a, l = !s, u = Math.abs(c), d = wi(u - YH) || (l ? c >= YH : -c >= YH), f = c > 0 ? c % YH : c % YH + YH, p = !1;
		p = d ? !0 : !wi(u) && f >= JH == !!l;
		var m = e + n * qH(a), h = t + r * KH(a);
		this._start && this._add("M", m, h);
		var g = Math.round(i * XH);
		if (d) {
			var _ = 1 / this._p, v = (l ? 1 : -1) * (YH - _);
			this._add("A", n, r, g, 1, +l, e + n * qH(a + v), t + r * KH(a + v)), _ > .01 && this._add("A", n, r, g, 0, +l, m, h);
		} else {
			var y = e + n * qH(o), b = t + r * KH(o);
			this._add("A", n, r, g, +p, +l, y, b);
		}
	}, e.prototype.rect = function(e, t, n, r) {
		this._add("M", e, t), this._add("l", n, 0), this._add("l", 0, r), this._add("l", -n, 0), this._add("Z");
	}, e.prototype.closePath = function() {
		this._d.length > 0 && this._add("Z");
	}, e.prototype._add = function(e, t, n, r, i, a, o, s, c) {
		for (var l = [], u = this._p, d = 1; d < arguments.length; d++) {
			var f = arguments[d];
			if (isNaN(f)) {
				this._invalid = !0;
				return;
			}
			l.push(Math.round(f * u) / u);
		}
		this._d.push(e + l.join(" ")), this._start = e === "Z";
	}, e.prototype.generateStr = function() {
		this._str = this._invalid ? "" : this._d.join(""), this._d = [];
	}, e.prototype.getStr = function() {
		return this._str;
	}, e;
}(), QH = "none", $H = Math.round;
function eU(e) {
	var t = e.fill;
	return t != null && t !== QH;
}
function tU(e) {
	var t = e.stroke;
	return t != null && t !== QH;
}
var nU = [
	"lineCap",
	"miterLimit",
	"lineJoin"
], rU = L(nU, function(e) {
	return "stroke-" + e.toLowerCase();
});
function iU(e, t, n, r) {
	var i = t.opacity == null ? 1 : t.opacity;
	if (n instanceof es) {
		e("opacity", i);
		return;
	}
	if (eU(t)) {
		var a = Si(t.fill);
		e("fill", a.color);
		var o = t.fillOpacity == null ? a.opacity * i : t.fillOpacity * a.opacity * i;
		(r || o < 1) && e("fill-opacity", o);
	} else e("fill", QH);
	if (tU(t)) {
		var s = Si(t.stroke);
		e("stroke", s.color);
		var c = t.strokeNoScale ? n.getLineScale() : 1, l = c ? (t.lineWidth || 0) / c : 0, u = t.strokeOpacity == null ? s.opacity * i : t.strokeOpacity * s.opacity * i, d = t.strokeFirst;
		if ((r || l !== 1) && e("stroke-width", l), (r || d) && e("paint-order", d ? "stroke" : "fill"), (r || u < 1) && e("stroke-opacity", u), t.lineDash) {
			var f = qk(n), p = f[0], m = f[1];
			p && (m = $H(m || 0), e("stroke-dasharray", p.join(",")), (m || r) && e("stroke-dashoffset", m));
		} else r && e("stroke-dasharray", QH);
		for (var h = 0; h < nU.length; h++) {
			var g = nU[h];
			if (r || t[g] !== Go[g]) {
				var _ = t[g] || Go[g];
				_ && e(rU[h], _);
			}
		}
	} else r && e("stroke", QH);
}
//#endregion
//#region node_modules/zrender/lib/svg/core.js
var aU = "http://www.w3.org/2000/svg", oU = "http://www.w3.org/1999/xlink", sU = "http://www.w3.org/2000/xmlns/", cU = "http://www.w3.org/XML/1998/namespace", lU = "ecmeta_";
function uU(e) {
	return document.createElementNS(aU, e);
}
function dU(e, t, n, r, i) {
	return {
		tag: e,
		attrs: n || {},
		children: r,
		text: i,
		key: t
	};
}
function fU(e, t) {
	var n = [];
	if (t) for (var r in t) {
		var i = t[r], a = r;
		i !== !1 && (i !== !0 && i != null && (a += "=\"" + i + "\""), n.push(a));
	}
	return "<" + e + " " + n.join(" ") + ">";
}
function pU(e) {
	return "</" + e + ">";
}
function mU(e, t) {
	t ||= {};
	var n = t.newline ? "\n" : "";
	function r(e) {
		var t = e.children, i = e.tag, a = e.attrs, o = e.text;
		return fU(i, a) + (i === "style" ? o || "" : gg(o)) + (t ? "" + n + L(t, function(e) {
			return r(e);
		}).join(n) + n : "") + pU(i);
	}
	return r(e);
}
function hU(e, t, n) {
	n ||= {};
	var r = n.newline ? "\n" : "", i = " {" + r, a = r + "}", o = L(z(e), function(t) {
		return t + i + L(z(e[t]), function(n) {
			return n + ":" + e[t][n] + ";";
		}).join(r) + a;
	}).join(r), s = L(z(t), function(e) {
		return "@keyframes " + e + i + L(z(t[e]), function(n) {
			return n + i + L(z(t[e][n]), function(r) {
				var i = t[e][n][r];
				return r === "d" && (i = "path(\"" + i + "\")"), r + ":" + i + ";";
			}).join(r) + a;
		}).join(r) + a;
	}).join(r);
	return !o && !s ? "" : [
		"<![CDATA[",
		o,
		s,
		"]]>"
	].join(r);
}
function gU(e) {
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
function _U(e, t, n, r) {
	return dU("svg", "root", {
		width: e,
		height: t,
		xmlns: aU,
		"xmlns:xlink": oU,
		version: "1.1",
		baseProfile: "full",
		viewBox: r ? "0 0 " + e + " " + t : !1
	}, n);
}
//#endregion
//#region node_modules/zrender/lib/svg/cssClassId.js
var vU = 0;
function yU() {
	return vU++;
}
//#endregion
//#region node_modules/zrender/lib/svg/cssAnimation.js
var bU = {
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
}, xU = "transform-origin";
function SU(e, t, n) {
	var r = N({}, e.shape);
	N(r, t), e.buildPath(n, r);
	var i = new ZH();
	return i.reset(zi(e)), n.rebuildPath(i, 1), i.generateStr(), i.getStr();
}
function CU(e, t) {
	var n = t.originX, r = t.originY;
	(n || r) && (e[xU] = n + "px " + r + "px");
}
var wU = {
	fill: "fill",
	opacity: "opacity",
	lineWidth: "stroke-width",
	lineDashOffset: "stroke-dashoffset"
};
function TU(e, t) {
	var n = t.zrId + "-ani-" + t.cssAnimIdx++;
	return t.cssAnims[n] = e, n;
}
function EU(e, t, n) {
	var r = e.shape.paths, i = {}, a, o;
	if (I(r, function(e) {
		var t = gU(n.zrId);
		t.animation = !0, OU(e, {}, t, !0);
		var r = t.cssAnims, s = t.cssNodes, c = z(r), l = c.length;
		if (l) {
			o = c[l - 1];
			var u = r[o];
			for (var d in u) {
				var f = u[d];
				i[d] = i[d] || { d: "" }, i[d].d += f.d || "";
			}
			for (var p in s) {
				var m = s[p].animation;
				m.indexOf(o) >= 0 && (a = m);
			}
		}
	}), a) {
		t.d = !1;
		var s = TU(i, n);
		return a.replace(o, s);
	}
}
function DU(e) {
	return U(e) ? bU[e] ? "cubic-bezier(" + bU[e] + ")" : Ur(e) ? e : "" : "";
}
function OU(e, t, n, r) {
	var i = e.animators, a = i.length, o = [];
	if (e instanceof ef) {
		var s = EU(e, t, n);
		if (s) o.push(s);
		else if (!a) return;
	} else if (!a) return;
	for (var c = {}, l = 0; l < a; l++) {
		var u = i[l], d = [u.getMaxTime() / 1e3 + "s"], f = DU(u.getClip().easing), p = u.getDelay();
		f ? d.push(f) : d.push("linear"), p && d.push(p / 1e3 + "s"), u.getLoop() && d.push("infinite");
		var m = d.join(" ");
		c[m] = c[m] || [m, []], c[m][1].push(u);
	}
	function h(i) {
		var a = i[1], o = a.length, s = {}, c = {}, l = {}, u = "animation-timing-function";
		function d(e, t, n) {
			for (var r = e.getTracks(), i = e.getMaxTime(), a = 0; a < r.length; a++) {
				var o = r[a];
				if (o.needsAnimate()) {
					var s = o.keyframes, c = o.propName;
					if (n && (c = n(c)), c) for (var l = 0; l < s.length; l++) {
						var d = s[l], f = Math.round(d.time / i * 100) + "%", p = DU(d.easing), m = d.rawValue;
						(U(m) || me(m)) && (t[f] = t[f] || {}, t[f][c] = d.rawValue, p && (t[f][u] = p));
					}
				}
			}
		}
		for (var f = 0; f < o; f++) {
			var p = a[f], m = p.targetName;
			m ? m === "shape" && d(p, c) : !r && d(p, s);
		}
		for (var h in s) {
			var g = {};
			hr(g, e), N(g, s[h]);
			var _ = Bi(g), v = s[h][u];
			l[h] = _ ? { transform: _ } : {}, CU(l[h], g), v && (l[h][u] = v);
		}
		var y, b = !0;
		for (var h in c) {
			l[h] = l[h] || {};
			var x = !y, v = c[h][u];
			x && (y = new Co());
			var S = y.len();
			y.reset(), l[h].d = SU(e, c[h], y);
			var C = y.len();
			if (!x && S !== C) {
				b = !1;
				break;
			}
			v && (l[h][u] = v);
		}
		if (!b) for (var h in l) delete l[h].d;
		if (!r) for (var f = 0; f < o; f++) {
			var p = a[f], m = p.targetName;
			m === "style" && d(p, l, function(e) {
				return wU[e];
			});
		}
		for (var w = z(l), T = !0, E, f = 1; f < w.length; f++) {
			var D = w[f - 1], O = w[f];
			if (l[D][xU] !== l[O][xU]) {
				T = !1;
				break;
			}
			E = l[D][xU];
		}
		if (T && E) {
			for (var h in l) l[h][xU] && delete l[h][xU];
			t[xU] = E;
		}
		if (le(w, function(e) {
			return z(l[e]).length > 0;
		}).length) return TU(l, n) + " " + i[0] + " both";
	}
	for (var g in c) {
		var s = h(c[g]);
		s && o.push(s);
	}
	if (o.length) {
		var _ = n.zrId + "-cls-" + yU();
		n.cssNodes["." + _] = { animation: o.join(",") }, t.class = _;
	}
}
//#endregion
//#region node_modules/zrender/lib/svg/cssEmphasis.js
function kU(e, t, n) {
	if (!e.ignore) {
		if (e.isSilent()) {
			var r = { "pointer-events": "none" };
			AU(r, t, n, !0);
		} else {
			var i = e.states.emphasis && e.states.emphasis.style ? e.states.emphasis.style : {}, a = i.fill;
			if (!a) {
				var o = e.style && e.style.fill, s = e.states.select && e.states.select.style && e.states.select.style.fill, c = e.currentStates.indexOf("select") >= 0 && s || o;
				c && (a = bi(c));
			}
			var l = i.lineWidth;
			if (l) {
				var u = !i.strokeNoScale && e.transform ? e.transform[0] : 1;
				l /= u;
			}
			var r = { cursor: "pointer" };
			a && (r.fill = a), i.stroke && (r.stroke = i.stroke), l && (r["stroke-width"] = l), AU(r, t, n, !0);
		}
	}
}
function AU(e, t, n, r) {
	var i = JSON.stringify(e), a = n.cssStyleCache[i];
	a || (a = n.zrId + "-cls-" + yU(), n.cssStyleCache[i] = a, n.cssNodes["." + a + (r ? ":hover" : "")] = e), t.class = t.class ? t.class + " " + a : a;
}
//#endregion
//#region node_modules/zrender/lib/svg/graphic.js
var jU = Math.round;
function MU(e) {
	return e && U(e.src);
}
function NU(e) {
	return e && H(e.toDataURL);
}
function PU(e, t, n, r) {
	iU(function(i, a) {
		var o = i === "fill" || i === "stroke";
		o && Li(a) ? YU(t, e, i, r) : o && Pi(a) ? XU(n, e, i, r) : e[i] = a, o && r.ssr && a === "none" && (e["pointer-events"] = "visible");
	}, t, n, !1), JU(n, e, r);
}
function FU(e, t) {
	var n = UD(t);
	n && (n.each(function(t, n) {
		t != null && (e[("ecmeta_" + n).toLowerCase()] = t + "");
	}), t.isSilent() && (e[lU + "silent"] = "true"));
}
function IU(e) {
	return wi(e[0] - 1) && wi(e[1]) && wi(e[2]) && wi(e[3] - 1);
}
function LU(e) {
	return wi(e[4]) && wi(e[5]);
}
function RU(e, t, n) {
	if (t && !(LU(t) && IU(t))) {
		var r = n ? 10 : 1e4;
		e.transform = IU(t) ? "translate(" + jU(t[4] * r) / r + " " + jU(t[5] * r) / r + ")" : Di(t);
	}
}
function zU(e, t, n) {
	for (var r = e.points, i = [], a = 0; a < r.length; a++) i.push(jU(r[a][0] * n) / n), i.push(jU(r[a][1] * n) / n);
	t.points = i.join(" ");
}
function BU(e) {
	return !e.smooth;
}
function VU(e) {
	var t = L(e, function(e) {
		return typeof e == "string" ? [e, e] : e;
	});
	return function(e, n, r) {
		for (var i = 0; i < t.length; i++) {
			var a = t[i], o = e[a[0]];
			o != null && (n[a[1]] = jU(o * r) / r);
		}
	};
}
var HU = {
	circle: [VU([
		"cx",
		"cy",
		"r"
	])],
	polyline: [zU, BU],
	polygon: [zU, BU]
};
function UU(e) {
	for (var t = e.animators, n = 0; n < t.length; n++) if (t[n].targetName === "shape") return !0;
	return !1;
}
function WU(e, t) {
	var n = e.style, r = e.shape, i = HU[e.type], a = {}, o = t.animation, s = "path", c = e.style.strokePercent, l = t.compress && zi(e) || 4;
	if (i && !t.willUpdate && (!i[1] || i[1](r)) && !(o && UU(e)) && !(c < 1)) {
		s = e.type;
		var u = 10 ** l;
		i[0](r, a, u);
	} else {
		var d = !e.path || e.shapeChanged();
		e.path || e.createPathProxy();
		var f = e.path;
		d && (f.beginPath(), e.buildPath(f, e.shape), e.pathUpdated());
		var p = f.getVersion(), m = e, h = m.__svgPathBuilder;
		(m.__svgPathVersion !== p || !h || c !== m.__svgPathStrokePercent) && (h ||= m.__svgPathBuilder = new ZH(), h.reset(l), f.rebuildPath(h, c), h.generateStr(), m.__svgPathVersion = p, m.__svgPathStrokePercent = c), a.d = h.getStr();
	}
	return RU(a, e.transform), PU(a, n, e, t), FU(a, e), t.animation && OU(e, a, t), t.emphasis && kU(e, a, t), dU(s, e.id + "", a);
}
function GU(e, t) {
	var n = e.style, r = n.image;
	if (r && !U(r) && (MU(r) ? r = r.src : NU(r) && (r = r.toDataURL())), r) {
		var i = n.x || 0, a = n.y || 0, o = n.width, s = n.height, c = {
			href: r,
			width: o,
			height: s
		};
		return i && (c.x = i), a && (c.y = a), RU(c, e.transform), PU(c, n, e, t), FU(c, e), t.animation && OU(e, c, t), dU("image", e.id + "", c);
	}
}
function KU(e, t) {
	var n = e.style, r = n.text;
	if (r != null && (r += ""), !(!r || isNaN(n.x) || isNaN(n.y))) {
		var i = n.font || "12px sans-serif", a = n.x || 0, o = ki(n.y || 0, Mn(i), n.textBaseline), s = {
			"dominant-baseline": "central",
			"text-anchor": Oi[n.textAlign] || n.textAlign
		};
		if (ys(n)) {
			var c = "", l = n.fontStyle, u = _s(n.fontSize);
			if (!parseFloat(u)) return;
			var d = n.fontFamily || "sans-serif", f = n.fontWeight;
			c += "font-size:" + u + ";font-family:" + d + ";", l && l !== "normal" && (c += "font-style:" + l + ";"), f && f !== "normal" && (c += "font-weight:" + f + ";"), s.style = c;
		} else s.style = "font: " + i;
		return r.match(/\s/) && (s["xml:space"] = "preserve"), a && (s.x = a), o && (s.y = o), RU(s, e.transform), PU(s, n, e, t), FU(s, e), t.animation && OU(e, s, t), dU("text", e.id + "", s, void 0, r);
	}
}
function qU(e, t) {
	if (e instanceof Jo) return WU(e, t);
	if (e instanceof es) return GU(e, t);
	if (e instanceof Xo) return KU(e, t);
}
function JU(e, t, n) {
	var r = e.style;
	if (Ai(r)) {
		var i = ji(e), a = n.shadowCache, o = a[i];
		if (!o) {
			var s = e.getGlobalScale(), c = s[0], l = s[1];
			if (!c || !l) return;
			var u = r.shadowOffsetX || 0, d = r.shadowOffsetY || 0, f = r.shadowBlur, p = Si(r.shadowColor), m = p.opacity, h = p.color, g = f / 2 / c, _ = f / 2 / l, v = g + " " + _;
			o = n.zrId + "-s" + n.shadowIdx++, n.defs[o] = dU("filter", o, {
				id: o,
				x: "-100%",
				y: "-100%",
				width: "300%",
				height: "300%"
			}, [dU("feDropShadow", "", {
				dx: u / c,
				dy: d / l,
				stdDeviation: v,
				"flood-color": h,
				"flood-opacity": m
			})]), a[i] = o;
		}
		t.filter = Ri(o);
	}
}
function YU(e, t, n, r) {
	var i = e[n], a, o = { gradientUnits: i.global ? "userSpaceOnUse" : "objectBoundingBox" };
	if (Fi(i)) a = "linearGradient", o.x1 = i.x, o.y1 = i.y, o.x2 = i.x2, o.y2 = i.y2;
	else if (Ii(i)) a = "radialGradient", o.cx = G(i.x, .5), o.cy = G(i.y, .5), o.r = G(i.r, .5);
	else return;
	for (var s = i.colorStops, c = [], l = 0, u = s.length; l < u; ++l) {
		var d = Ei(s[l].offset) * 100 + "%", f = s[l].color, p = Si(f), m = p.color, h = p.opacity, g = { offset: d };
		g["stop-color"] = m, h < 1 && (g["stop-opacity"] = h), c.push(dU("stop", l + "", g));
	}
	var _ = mU(dU(a, "", o, c)), v = r.gradientCache, y = v[_];
	y || (y = r.zrId + "-g" + r.gradientIdx++, v[_] = y, o.id = y, r.defs[y] = dU(a, y, o, c)), t[n] = Ri(y);
}
function XU(e, t, n, r) {
	var i = e.style[n], a = e.getBoundingRect(), o = {}, s = i.repeat, c = s === "no-repeat", l = s === "repeat-x", u = s === "repeat-y", d;
	if (Mi(i)) {
		var f = i.imageWidth, p = i.imageHeight, m = void 0, h = i.image;
		if (U(h) ? m = h : MU(h) ? m = h.src : NU(h) && (m = h.toDataURL()), typeof Image > "u") {
			var g = "Image width/height must been given explictly in svg-ssr renderer.";
			Ee(f, g), Ee(p, g);
		} else if (f == null || p == null) {
			var _ = function(e, t) {
				if (e) {
					var n = e.elm, r = f || t.width, i = p || t.height;
					e.tag === "pattern" && (l ? (i = 1, r /= a.width) : u && (r = 1, i /= a.height)), e.attrs.width = r, e.attrs.height = i, n && (n.setAttribute("width", r), n.setAttribute("height", i));
				}
			}, v = dt(m, null, e, function(e) {
				c || _(S, e), _(d, e);
			});
			v && v.width && v.height && (f ||= v.width, p ||= v.height);
		}
		d = dU("image", "img", {
			href: m,
			width: f,
			height: p
		}), o.width = f, o.height = p;
	} else i.svgElement && (d = j(i.svgElement), o.width = i.svgWidth, o.height = i.svgHeight);
	if (d) {
		var y, b;
		c ? y = b = 1 : l ? (b = 1, y = o.width / a.width) : u ? (y = 1, b = o.height / a.height) : o.patternUnits = "userSpaceOnUse", y != null && !isNaN(y) && (o.width = y), b != null && !isNaN(b) && (o.height = b);
		var x = Bi(i);
		x && (o.patternTransform = x);
		var S = dU("pattern", "", o, [d]), C = mU(S), w = r.patternCache, T = w[C];
		T || (T = r.zrId + "-p" + r.patternIdx++, w[C] = T, o.id = T, S = r.defs[T] = dU("pattern", T, o, [d])), t[n] = Ri(T);
	}
}
function ZU(e, t, n) {
	var r = n.clipPathCache, i = n.defs, a = r[e.id];
	if (!a) {
		a = n.zrId + "-c" + n.clipPathIdx++;
		var o = { id: a };
		r[e.id] = a, i[a] = dU("clipPath", a, o, [WU(e, n)]);
	}
	t["clip-path"] = Ri(a);
}
//#endregion
//#region node_modules/zrender/lib/svg/domapi.js
function QU(e) {
	return document.createTextNode(e);
}
function $U(e, t, n) {
	e.insertBefore(t, n);
}
function eW(e, t) {
	e.removeChild(t);
}
function tW(e, t) {
	e.appendChild(t);
}
function nW(e) {
	return e.parentNode;
}
function rW(e) {
	return e.nextSibling;
}
function iW(e, t) {
	e.textContent = t;
}
//#endregion
//#region node_modules/zrender/lib/svg/patch.js
var aW = 58, oW = 120, sW = dU("", "");
function cW(e) {
	return e === void 0;
}
function lW(e) {
	return e !== void 0;
}
function uW(e, t, n) {
	for (var r = {}, i = t; i <= n; ++i) {
		var a = e[i].key;
		a !== void 0 && (r[a] = i);
	}
	return r;
}
function dW(e, t) {
	var n = e.key === t.key;
	return e.tag === t.tag && n;
}
function fW(e) {
	var t, n = e.children, r = e.tag;
	if (lW(r)) {
		var i = e.elm = uU(r);
		if (hW(sW, e), V(n)) for (t = 0; t < n.length; ++t) {
			var a = n[t];
			a != null && tW(i, fW(a));
		}
		else lW(e.text) && !W(e.text) && tW(i, QU(e.text));
	} else e.elm = QU(e.text);
	return e.elm;
}
function pW(e, t, n, r, i) {
	for (; r <= i; ++r) {
		var a = n[r];
		a != null && $U(e, fW(a), t);
	}
}
function mW(e, t, n, r) {
	for (; n <= r; ++n) {
		var i = t[n];
		i != null && (lW(i.tag) ? eW(nW(i.elm), i.elm) : eW(e, i.elm));
	}
}
function hW(e, t) {
	var n, r = t.elm, i = e && e.attrs || {}, a = t.attrs || {};
	if (i !== a) {
		for (n in a) {
			var o = a[n];
			i[n] !== o && (o === !0 ? r.setAttribute(n, "") : o === !1 ? r.removeAttribute(n) : n === "style" ? r.style.cssText = o : n.charCodeAt(0) === oW ? n === "xmlns:xlink" || n === "xmlns" ? r.setAttributeNS(sU, n, o) : n.charCodeAt(3) === aW ? r.setAttributeNS(cU, n, o) : n.charCodeAt(5) === aW ? r.setAttributeNS(oU, n, o) : r.setAttribute(n, o) : r.setAttribute(n, o));
		}
		for (n in i) n in a || r.removeAttribute(n);
	}
}
function gW(e, t, n) {
	for (var r = 0, i = 0, a = t.length - 1, o = t[0], s = t[a], c = n.length - 1, l = n[0], u = n[c], d, f, p, m; r <= a && i <= c;) o == null ? o = t[++r] : s == null ? s = t[--a] : l == null ? l = n[++i] : u == null ? u = n[--c] : dW(o, l) ? (_W(o, l), o = t[++r], l = n[++i]) : dW(s, u) ? (_W(s, u), s = t[--a], u = n[--c]) : dW(o, u) ? (_W(o, u), $U(e, o.elm, rW(s.elm)), o = t[++r], u = n[--c]) : dW(s, l) ? (_W(s, l), $U(e, s.elm, o.elm), s = t[--a], l = n[++i]) : (cW(d) && (d = uW(t, r, a)), f = d[l.key], cW(f) ? $U(e, fW(l), o.elm) : (p = t[f], p.tag === l.tag ? (_W(p, l), t[f] = void 0, $U(e, p.elm, o.elm)) : $U(e, fW(l), o.elm)), l = n[++i]);
	(r <= a || i <= c) && (r > a ? (m = n[c + 1] == null ? null : n[c + 1].elm, pW(e, m, n, i, c)) : mW(e, t, r, a));
}
function _W(e, t) {
	var n = t.elm = e.elm, r = e.children, i = t.children;
	e !== t && (hW(e, t), cW(t.text) ? lW(r) && lW(i) ? r !== i && gW(n, r, i) : lW(i) ? (lW(e.text) && iW(n, ""), pW(n, null, i, 0, i.length - 1)) : lW(r) ? mW(n, r, 0, r.length - 1) : lW(e.text) && iW(n, "") : e.text !== t.text && (lW(r) && mW(n, r, 0, r.length - 1), iW(n, t.text)));
}
function vW(e, t) {
	if (dW(e, t)) _W(e, t);
	else {
		var n = e.elm, r = nW(n);
		fW(t), r !== null && ($U(r, t.elm, rW(n)), mW(r, [e], 0, 0));
	}
	return t;
}
//#endregion
//#region node_modules/zrender/lib/svg/Painter.js
var yW = 0, bW = function() {
	function e(e, t, n) {
		if (this.type = "svg", this.configLayer = xW("configLayer"), this.storage = t, this._opts = n = N({}, n), this.root = e, this._id = "zr" + yW++, this._oldVNode = _U(n.width, n.height), e && !n.ssr) {
			var r = this._viewport = document.createElement("div");
			r.style.cssText = "position:relative;overflow:hidden";
			var i = this._svgDom = this._oldVNode.elm = uU("svg");
			hW(null, this._oldVNode), r.appendChild(i), e.appendChild(r);
		}
		this.resize(n.width, n.height);
	}
	return e.prototype.getType = function() {
		return this.type;
	}, e.prototype.getViewportRoot = function() {
		return this._viewport;
	}, e.prototype.getViewportRootOffset = function() {
		var e = this.getViewportRoot();
		if (e) return {
			offsetLeft: e.offsetLeft || 0,
			offsetTop: e.offsetTop || 0
		};
	}, e.prototype.getSvgDom = function() {
		return this._svgDom;
	}, e.prototype.refresh = function() {
		if (this.root) {
			var e = this.renderToVNode({ willUpdate: !0 });
			e.attrs.style = "position:absolute;left:0;top:0;user-select:none", vW(this._oldVNode, e), this._oldVNode = e;
		}
	}, e.prototype.renderOneToVNode = function(e) {
		return qU(e, gU(this._id));
	}, e.prototype.renderToVNode = function(e) {
		e ||= {};
		var t = this.storage.getDisplayList(!0), n = this._width, r = this._height, i = gU(this._id);
		i.animation = e.animation, i.willUpdate = e.willUpdate, i.compress = e.compress, i.emphasis = e.emphasis, i.ssr = this._opts.ssr;
		var a = [], o = this._bgVNode = SW(n, r, this._backgroundColor, i);
		o && a.push(o);
		var s = e.compress ? null : this._mainVNode = dU("g", "main", {}, []);
		this._paintList(t, i, s ? s.children : a), s && a.push(s);
		var c = L(z(i.defs), function(e) {
			return i.defs[e];
		});
		if (c.length && a.push(dU("defs", "defs", {}, c)), e.animation) {
			var l = hU(i.cssNodes, i.cssAnims, { newline: !0 });
			if (l) {
				var u = dU("style", "stl", {}, [], l);
				a.push(u);
			}
		}
		return _U(n, r, a, e.useViewBox);
	}, e.prototype.renderToString = function(e) {
		return e ||= {}, mU(this.renderToVNode({
			animation: G(e.cssAnimation, !0),
			emphasis: G(e.cssEmphasis, !0),
			willUpdate: !1,
			compress: !0,
			useViewBox: G(e.useViewBox, !0)
		}), { newline: !0 });
	}, e.prototype.setBackgroundColor = function(e) {
		this._backgroundColor = e;
	}, e.prototype.getSvgRoot = function() {
		return this._mainVNode && this._mainVNode.elm;
	}, e.prototype._paintList = function(e, t, n) {
		for (var r = e.length, i = [], a = 0, o, s, c = 0, l = 0; l < r; l++) {
			var u = e[l];
			if (!u.invisible) {
				var d = u.__clipPaths, f = d && d.length || 0, p = s && s.length || 0, m = void 0;
				for (m = Math.max(f - 1, p - 1); m >= 0 && !(d && s && d[m] === s[m]); m--);
				for (var h = p - 1; h > m; h--) a--, o = i[a - 1];
				for (var g = m + 1; g < f; g++) {
					var _ = {};
					ZU(d[g], _, t);
					var v = dU("g", "clip-g-" + c++, _, []);
					(o ? o.children : n).push(v), i[a++] = v, o = v;
				}
				s = d;
				var y = qU(u, t);
				y && (o ? o.children : n).push(y);
			}
		}
	}, e.prototype.resize = function(e, t) {
		var n = this._opts, r = this.root, i = this._viewport;
		if (e != null && (n.width = e), t != null && (n.height = t), r && i && (i.style.display = "none", e = Gk(r, 0, n), t = Gk(r, 1, n), i.style.display = ""), this._width !== e || this._height !== t) {
			if (this._width = e, this._height = t, i) {
				var a = i.style;
				a.width = e + "px", a.height = t + "px";
			}
			if (Pi(this._backgroundColor)) this.refresh();
			else {
				var o = this._svgDom;
				o && (o.setAttribute("width", e), o.setAttribute("height", t));
				var s = this._bgVNode && this._bgVNode.elm;
				s && (s.setAttribute("width", e), s.setAttribute("height", t));
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
	}, e.prototype.toDataURL = function(e) {
		var t = this.renderToString(), n = "data:image/svg+xml;";
		return e ? (t = Vi(t), t && n + "base64," + t) : n + "charset=UTF-8," + encodeURIComponent(t);
	}, e;
}();
function xW(e) {
	return function() {};
}
function SW(e, t, n, r) {
	var i;
	if (n && n !== "none") {
		if (i = dU("rect", "bg", {
			width: e,
			height: t,
			x: "0",
			y: "0"
		}), Li(n)) YU({ fill: n }, i.attrs, "fill", r);
		else if (Pi(n)) XU({
			style: { fill: n },
			dirty: Re,
			getBoundingRect: function() {
				return {
					width: e,
					height: t
				};
			}
		}, i.attrs, "fill", r);
		else {
			var a = Si(n), o = a.color, s = a.opacity;
			i.attrs.fill = o, s < 1 && (i.attrs["fill-opacity"] = s);
		}
	}
	return i;
}
//#endregion
//#region node_modules/echarts/lib/renderer/installSVGRenderer.js
function CW(e) {
	e.registerPainter("svg", bW);
}
//#endregion
//#region node_modules/zrender/lib/canvas/Layer.js
function wW(e, t, n) {
	var r = g.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = r.style;
	return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", r.setAttribute("data-zr-dom-id", e)), r.width = i * n, r.height = a * n, r;
}
function TW(e) {
	return !e.__cursors.get(0);
}
function EW(e) {
	var t = e.__cursors.get(0);
	return {
		startIdx: t ? t.startIdx : 0,
		endIdx: t ? t.endIdx : 0
	};
}
var DW = function(e) {
	l(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.motionBlur = !1, i.lastFrameAlpha = .7, i.dpr = 1, i.virtual = !1, i.config = {}, i.zlevel = 0, i.zlevel2 = 0, i.maxRepaintRectCount = 5, i.__dirty = !0, i.__firstTimePaint = !0, i.__prevIdx = {
			startIdx: 0,
			endIdx: 0
		};
		var a;
		r ||= pa, typeof t == "string" ? a = wW(t, n, r) : W(t) && (a = t, t = a.id), i.id = t, i.dom = a;
		var o = a.style;
		return o && (Le(a), a.onselectstart = function() {
			return !1;
		}, o.padding = "0", o.margin = "0", o.borderWidth = "0"), i.painter = n, i.dpr = r, i;
	}
	return t.prototype.afterBrush = function() {
		this.__prevIdx = EW(this);
	}, t.prototype.initContext = function() {
		this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
	}, t.prototype.setUnpainted = function() {
		this.__firstTimePaint = !0;
	}, t.prototype.createBackBuffer = function() {
		var e = this.dpr;
		this.domBack = wW("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
	}, t.prototype.createRepaintRects = function(e, t, n, r) {
		if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
		var i = [], a = this.maxRepaintRectCount, o = !1, s = new X(0, 0, 0, 0);
		function c(e) {
			if (e.isFinite() && !e.isZero()) {
				if (i.length === 0) {
					var t = new X(0, 0, 0, 0);
					t.copy(e), i.push(t);
				} else {
					for (var n = !1, r = Infinity, c = 0, l = 0; l < i.length; ++l) {
						var u = i[l];
						if (u.intersect(e)) {
							var d = new X(0, 0, 0, 0);
							d.copy(u), d.union(e), i[l] = d, n = !0;
							break;
						}
						if (o) {
							s.copy(e), s.union(u);
							var f = e.width * e.height, p = u.width * u.height, m = s.width * s.height - f - p;
							m < r && (r = m, c = l);
						}
					}
					if (o && (i[c].union(e), n = !0), !n) {
						var t = new X(0, 0, 0, 0);
						t.copy(e), i.push(t);
					}
					o ||= i.length >= a;
				}
			}
		}
		for (var l = EW(this), u = l.startIdx; u < l.endIdx; ++u) {
			var d = e[u];
			if (d) {
				var f = d.shouldBePainted(n, r, !0, !0), p = d.__isRendered && (d.__dirty & 1 || !f) ? d.getPrevPaintRect() : null;
				p && c(p);
				var m = f && (d.__dirty & 1 || !d.__isRendered) ? d.getPaintRect() : null;
				m && c(m);
			}
		}
		for (var h = this.__prevIdx, u = h.startIdx; u < h.endIdx; ++u) {
			var d = t[u], f = d && d.shouldBePainted(n, r, !0, !0);
			if (d && (!f || !d.__zr) && d.__isRendered) {
				var p = d.getPrevPaintRect();
				p && c(p);
			}
		}
		var g;
		do {
			g = !1;
			for (var u = 0; u < i.length;) {
				if (i[u].isZero()) {
					i.splice(u, 1);
					continue;
				}
				for (var _ = u + 1; _ < i.length;) i[u].intersect(i[_]) ? (g = !0, i[u].union(i[_]), i.splice(_, 1)) : _++;
				u++;
			}
		} while (g);
		return this._paintRects = i, i;
	}, t.prototype.debugGetPaintRects = function() {
		return (this._paintRects || []).slice();
	}, t.prototype.resize = function(e, t) {
		var n = this.dpr, r = this.dom, i = r.style, a = this.domBack;
		i && (i.width = e + "px", i.height = t + "px"), r.width = e * n, r.height = t * n, a && (a.width = e * n, a.height = t * n, n !== 1 && this.ctxBack.scale(n, n));
	}, t.prototype.clear = function(e, t, n) {
		var r = this.dom, i = this.ctx, a = r.width, o = r.height;
		t ||= this.clearColor;
		var s = this.motionBlur && !e, c = this.lastFrameAlpha, l = this.dpr, u = this;
		s && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(r, 0, 0, a / l, o / l));
		var d = this.domBack;
		function f(e, n, r, a) {
			if (i.clearRect(e, n, r, a), t && t !== "transparent") {
				var o = void 0;
				ve(t) ? (o = (t.global || t.__width === r && t.__height === a) && t.__canvasGradient || Hk(i, t, {
					x: 0,
					y: 0,
					width: r,
					height: a
				}), t.__canvasGradient = o, t.__width = r, t.__height = a) : ye(t) && (t.scaleX = t.scaleX || l, t.scaleY = t.scaleY || l, o = eA(i, t, { dirty: function() {
					u.setUnpainted(), u.painter.refresh();
				} })), i.save(), i.fillStyle = o || t, i.fillRect(e, n, r, a), i.restore();
			}
			s && (i.save(), i.globalAlpha = c, i.drawImage(d, e, n, r, a), i.restore());
		}
		!n || s ? f(0, 0, a, o) : n.length && I(n, function(e) {
			f(e.x * l, e.y * l, e.width * l, e.height * l);
		});
	}, t;
}(da), OW = 1e5, kW = 314159, AW = void 0, jW = 1, MW = 2;
function NW(e) {
	return e ? e.__builtin__ ? !0 : typeof e.resize == "function" && typeof e.refresh == "function" : !1;
}
function PW(e, t) {
	var n = document.createElement("div");
	return n.style.cssText = [
		"position:relative",
		"width:" + e + "px",
		"height:" + t + "px",
		"padding:0",
		"margin:0",
		"border-width:0"
	].join(";") + ";", n;
}
function FW(e, t, n, r) {
	var i = new DW(e, t, t.dpr);
	return i.zlevel = n, i.zlevel2 = r, i.__builtin__ = !0, IW(i), i;
}
function IW(e) {
	e.__cursorStack = [], e.__cursors = K();
}
function LW(e) {
	return e.startIdx = e.drawIdx = e.endIdx = e.endIdxNew = 0, e.used = !1, e.first = e.last = NaN, e.notClearIdx = -1, e;
}
function RW(e, t) {
	var n = e.__cursors, r = +t;
	return n.get(r) || (e.__cursorStack.push(r), n.set(r, LW({ key: r })));
}
function zW(e, t) {
	for (var n = e.__cursorStack, r = 0; r < n.length; r++) t(e.__cursors.get(n[r]));
}
function BW(e, t) {
	var n = e.layers;
	return n[t] || (n[t] = [
		,
		,
		,
	]);
}
function VW(e, t, n) {
	for (var r = e.layerStack, i = 0; i < r.length; i++) {
		var a = r[i].zl, o = r[i].zl2, s = e.layers[a][o];
		(!n || (!(n & HW) || s.__builtin__) && (!(n & UW) || !s.__builtin__) && (!(n & WW) || s !== e.hoverlayer)) && t(s, a, o, i);
	}
}
var HW = 1, UW = 2, WW = 4, GW = HW | WW, KW = function() {
	function e(e, t, n, r) {
		this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
			layerStack: [],
			layers: []
		};
		var i = !e.nodeName || e.nodeName.toUpperCase() === "CANVAS";
		if (this._opts = n = N({}, n || {}), this.dpr = n.devicePixelRatio || pa, this._singleCanvas = i, this.root = e, e.style && (Le(e), e.innerHTML = ""), this.storage = t, this._prevDisplayList = [], i) {
			var a = e, o = a.width, s = a.height;
			n.width != null && (o = n.width), n.height != null && (s = n.height), this.dpr = n.devicePixelRatio || 1, a.width = o * this.dpr, a.height = s * this.dpr, this._width = o, this._height = s;
			var c = FW(a, this, kW, 0);
			c.initContext(), this._insertLayer(c, kW, 0, !0), this._domRoot = e;
		} else {
			this._width = Gk(e, 0, n), this._height = Gk(e, 1, n);
			var l = this._domRoot = PW(this._width, this._height);
			e.appendChild(l);
		}
	}
	return e.prototype.getType = function() {
		return "canvas";
	}, e.prototype.isSingleCanvas = function() {
		return this._singleCanvas;
	}, e.prototype.getViewportRoot = function() {
		return this._domRoot;
	}, e.prototype.getViewportRootOffset = function() {
		var e = this.getViewportRoot();
		if (e) return {
			offsetLeft: e.offsetLeft || 0,
			offsetTop: e.offsetTop || 0
		};
	}, e.prototype.refresh = function(e) {
		var t = e && !W(e) ? { paintAll: !!e } : e || {}, n = G(t.refresh, !0), r = G(t.refreshHover, !1);
		if (r && (this._hoverLayerDirty = MW), !n) return r && this._paintHoverList(this.storage.getDisplayList(!1)), this;
		var i = this.storage.getDisplayList(!0);
		this._updateLayerStatus(i, t.paintAll), this._redrawId = Math.random();
		var a = this._prevDisplayList;
		this._paintList(i, a, this._redrawId);
		var o = this._backgroundColor;
		return VW(this._i, function(e, t, n, r) {
			e.refresh && e.refresh(r === 0 ? o : null);
		}, UW), this._opts.useDirtyRect && (this._prevDisplayList = i.slice()), this;
	}, e.prototype._paintHoverList = function(e) {
		var t = this._i.hoverlayer, n = this._hoverLayerDirty;
		if (this._hoverLayerDirty = AW, n !== AW && (!t && n === MW && (t = this._i.hoverlayer = this._ensureLayer(OW)), t)) {
			t.clear();
			for (var r = {
				inHover: !0,
				viewWidth: this._width,
				viewHeight: this._height,
				beforeBrushParam: {}
			}, i, a = 0, o = e.length; a < o; a++) {
				var s = e[a];
				if (s.__inHover) {
					i || (i = t.ctx, i.save());
					var c = s.__hoverStyle, l = void 0;
					c && (l = s.style, s.style = c), yA(i, s, r), c && (s.style = l);
				}
			}
			i && (bA(i, r), i.restore());
		}
	}, e.prototype.getHoverLayer = function() {
		return this._ensureLayer(OW);
	}, e.prototype.paintOne = function(e, t) {
		vA(e, t);
	}, e.prototype._paintList = function(e, t, n) {
		if (this._redrawId === n) {
			var r = this._doPaintList(e, t);
			if (this._needsManuallyCompositing && this._compositeManually(), r) VW(this._i, function(e) {
				e.afterBrush && e.afterBrush();
			}, GW), this._paintHoverList(e);
			else {
				var i = this;
				lD(function() {
					i._paintList(e, t, n);
				});
			}
		}
	}, e.prototype._compositeManually = function() {
		var e = this._ensureLayer(kW).ctx, t = this._domRoot.width, n = this._domRoot.height;
		e.clearRect(0, 0, t, n), VW(this._i, function(r) {
			r.virtual && e.drawImage(r.dom, 0, 0, t, n);
		}, HW);
	}, e.prototype._doPaintList = function(e, t) {
		var n = this, r = !0;
		return VW(this._i, function(i) {
			var a = !1;
			if (zW(i, function(e) {
				(e.drawIdx < e.endIdx || e.notClearIdx >= 0) && (a = !0);
			}), a || i.__dirty) {
				var o = n._opts.useDirtyRect && !TW(i) ? i.createRepaintRects(e, t, n._width, n._height) : null, s = n._i.layerStack[0], c = !0;
				if (i.__dirty) {
					c = !1, i.__dirty = !1;
					var l = i.zlevel === s.zl && i.zlevel2 === s.zl2 ? n._backgroundColor : null;
					i.clear(!1, l, o);
				}
				zW(i, function(t) {
					var a = n._paintPerCursor(i, t, e, o, c);
					r &&= a;
				});
			}
		}, GW), J.wxa && VW(this._i, function(e) {
			e && e.ctx && e.ctx.draw && e.ctx.draw();
		}), r;
	}, e.prototype._paintPerCursor = function(e, t, n, r, i) {
		var a = e.ctx;
		if (r) {
			if (!r.length) t.drawIdx = t.endIdx;
			else for (var o = this.dpr, s = 0; s < r.length; ++s) {
				var c = r[s];
				a.save(), a.beginPath(), a.rect(c.x * o, c.y * o, c.width * o, c.height * o), a.clip(), this._paintPerCursorInRect(e, t, n, c, i), a.restore();
			}
		} else a.save(), this._paintPerCursorInRect(e, t, n, null, i), a.restore();
		return t.drawIdx >= t.endIdx;
	}, e.prototype._paintPerCursorInRect = function(e, t, n, r, i) {
		for (var a = {
			inHover: !1,
			allClipped: !1,
			prevEl: null,
			viewWidth: this._width,
			viewHeight: this._height,
			beforeBrushParam: { contentRetained: i }
		}, o = e.ctx, s = TW(e), c = s && g.getTime(), l = t.drawIdx, u = t.notClearIdx, d = u >= 0 ? Math.min(u, l) : l; d < t.endIdx; d++) {
			var f = n[d];
			if (!(d < l && !f.notClear)) {
				if (f.__inHover && (this._hoverLayerDirty = MW), r != null) {
					var p = f.getPaintRect();
					p && p.intersect(r) && (yA(o, f, a), f.setPrevPaintRect(p));
				} else yA(o, f, a);
				if (s && g.getTime() - c > 15) {
					d++;
					break;
				}
			}
		}
		bA(o, a), t.drawIdx = Math.max(d, l);
	}, e.prototype.getLayer = function(e, t) {
		return this._ensureLayer(e, 0, t);
	}, e.prototype._ensureLayer = function(e, t, n) {
		t ||= 0;
		var r = this._singleCanvas;
		r && !this._needsManuallyCompositing && (e = kW, t = 0);
		var i = BW(this._i, e)[t];
		return i || (i = FW("zr_" + e + "." + t, this, e, t), this._layerConfig[e] && M(i, this._layerConfig[e], !0), (n || r && e !== kW) && (i.virtual = !0), this._insertLayer(i, e, t, !1), i.initContext()), i;
	}, e.prototype.insertLayer = function(e, t) {
		this._insertLayer(t, e, 0, !1);
	}, e.prototype._insertLayer = function(e, t, n, r) {
		var i = this._i, a = i.layers, o = i.layerStack, s = this._domRoot, c = null;
		if (!(a[t] && a[t][n]) && NW(e)) {
			for (var l = o.length, u = 0; u < l && (o[u].zl < t || o[u].zl === t && o[u].zl2 < n);) u++;
			if (u > 0 && (c = BW(i, o[u - 1].zl)[o[u - 1].zl2]), o.splice(u, 0, {
				zl: t,
				zl2: n
			}), BW(i, t)[n] = e, !r && !e.virtual) {
				if (c) {
					var d = c.dom;
					d.nextSibling ? s.insertBefore(e.dom, d.nextSibling) : s.appendChild(e.dom);
				} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
			}
			e.painter ||= this;
		}
	}, e.prototype.eachLayer = function(e, t) {
		return VW(this._i, function(n, r) {
			e.call(t, n, r);
		});
	}, e.prototype.eachBuiltinLayer = function(e, t) {
		return VW(this._i, function(n, r) {
			e.call(t, n, r);
		}, HW);
	}, e.prototype.eachOtherLayer = function(e, t) {
		return VW(this._i, function(n, r) {
			e.call(t, n, r);
		}, UW);
	}, e.prototype.getLayers = function() {
		var e = {};
		return VW(this._i, function(t, n, r) {
			e[t.id] = t;
		}), e;
	}, e.prototype._updateLayerStatus = function(e, t) {
		var n = this;
		if (n._singleCanvas) for (var r = 1; r < e.length; r++) {
			var i = e[r];
			if (i.zlevel !== e[r - 1].zlevel || i.incremental) {
				n._needsManuallyCompositing = !0;
				break;
			}
		}
		VW(n._i, function(e) {
			e.__dirty = !1, zW(e, function(e) {
				e.used = !1, e.endIdxNew = 0, e.notClearIdx = -1;
			});
		}, GW);
		for (var a, o = null, s = null, c = !1, l = 0, u = e.length; l < u; l++) {
			var i = e[l], d = i.zlevel, f = i.incremental, p = void 0;
			if (a !== d && (a = d, c = !1), f ? (c = !0, p = 1) : p = c ? 2 : 0, (!o || d !== o.zlevel || p !== o.zlevel2) && (o = n._ensureLayer(d, p), s = null, !o.__builtin__)) {
				ne("ZLevel " + d + " has been used by unknown layer " + o.id);
				continue;
			}
			if ((!s || f !== s.key) && (s = RW(o, f), !s.used)) {
				if (s.used = !0, !t && s.first === i.id) {
					var m = l - s.startIdx;
					s.startIdx = l, s.drawIdx += m, s.endIdx += m;
				} else o.__dirty = !0, s.first = i.id, s.startIdx = s.drawIdx = l, s.endIdx = l + 1;
			}
			s.endIdxNew = l + 1, i.__dirty & 1 && !i.__inHover && ((!f || !i.notClear && l < s.drawIdx) && (o.__dirty = !0), f && i.notClear && s.notClearIdx < 0 && (s.notClearIdx = l));
		}
		VW(n._i, function(t) {
			for (var r = t.__cursorStack, i = t.__cursors, a = r.length - 1; a >= 0; a--) {
				var o = i.get(r[a]);
				if (!o.used) t.__dirty = !0, i.removeKey(r[a]), r.splice(a, 1);
				else {
					var s = o.endIdxNew;
					(TW(t) ? s < o.drawIdx : s !== o.endIdx || !s || e[s - 1].id !== o.last) && (t.__dirty = !0), o.endIdx = o.endIdxNew, o.last = s ? e[s - 1].id : NaN;
				}
			}
			t.__dirty && (zW(t, function(e) {
				e.drawIdx = e.startIdx;
			}), n._hoverLayerDirty === AW && (n._hoverLayerDirty = jW));
		}, GW);
	}, e.prototype.clear = function() {
		return VW(this._i, function(e) {
			e.clear(), IW(e);
		}, HW), this;
	}, e.prototype.setBackgroundColor = function(e) {
		this._backgroundColor = e, VW(this._i, function(e) {
			e.setUnpainted();
		});
	}, e.prototype.configLayer = function(e, t) {
		if (t) {
			var n = this._layerConfig;
			n[e] ? M(n[e], t, !0) : n[e] = t, VW(this._i, function(e, t) {
				M(e, n[t], !0);
			});
		}
	}, e.prototype.delLayer = function(e) {
		for (var t = this._i.layerStack, n = this._i.layers, r = t.length - 1; r >= 0; r--) {
			var i = t[r];
			if (i.zl === e) {
				var a = n[e][i.zl2];
				if (a.__builtin__) continue;
				if (t.splice(r, 1), n[e][i.zl2] = void 0, !a.virtual) {
					var o = a.dom.parentNode;
					o && o.removeChild(a.dom);
				}
			}
		}
	}, e.prototype.resize = function(e, t) {
		if (this._domRoot.style) {
			var n = this._domRoot;
			n.style.display = "none";
			var r = this._opts, i = this.root;
			e != null && (r.width = e), t != null && (r.height = t), e = Gk(i, 0, r), t = Gk(i, 1, r), n.style.display = "", (this._width !== e || t !== this._height) && (n.style.width = e + "px", n.style.height = t + "px", VW(this._i, function(n) {
				n.resize(e, t);
			}), this.refresh({ paintAll: !0 })), this._width = e, this._height = t;
		} else {
			if (e == null || t == null) return;
			this._width = e, this._height = t, this._ensureLayer(kW).resize(e, t);
		}
		return this;
	}, e.prototype.clearLayer = function(e) {
		I(this._i.layers[e], function(e) {
			e && !e.__builtin__ && e.clear();
		});
	}, e.prototype.dispose = function() {
		this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
	}, e.prototype.getRenderedCanvas = function(e) {
		if (e ||= {}, this._singleCanvas && !this._compositeManually) return this._i.layers[kW][0].dom;
		var t = new DW("image", this, e.pixelRatio || this.dpr);
		t.initContext(), t.clear(!1, e.backgroundColor || this._backgroundColor);
		var n = t.ctx;
		if (e.pixelRatio <= this.dpr) {
			this.refresh();
			var r = t.dom.width, i = t.dom.height;
			VW(this._i, function(e) {
				e.__builtin__ ? n.drawImage(e.dom, 0, 0, r, i) : e.renderToCanvas && (n.save(), e.renderToCanvas(n), n.restore());
			});
		} else {
			for (var a = {
				inHover: !1,
				viewWidth: this._width,
				viewHeight: this._height,
				beforeBrushParam: {}
			}, o = this.storage.getDisplayList(!0), s = 0, c = o.length; s < c; s++) {
				var l = o[s];
				yA(n, l, a);
			}
			bA(n, a);
		}
		return t.dom;
	}, e.prototype.getWidth = function() {
		return this._width;
	}, e.prototype.getHeight = function() {
		return this._height;
	}, e;
}();
//#endregion
//#region node_modules/echarts/lib/renderer/installCanvasRenderer.js
function qW(e) {
	e.registerPainter("canvas", KW);
}
//#endregion
//#region src/lib/utils/resolveJavaScriptFunctions.ts
var JW = "__js_eval__";
function YW(e) {
	if (typeof e != "object" || !e) return e;
	if (Array.isArray(e)) return e.map(YW);
	let t = Object.entries(e);
	if (Object.prototype.hasOwnProperty.call(e, JW)) {
		if (t.length !== 1 || typeof e[JW] != "string") throw TypeError(`[DashEChartsX] ${JW} must be the only key in an object and contain JavaScript source.`);
		let n = e[JW], r = Function(`return (${n});`)();
		if (typeof r != "function") throw TypeError(`[DashEChartsX] ${JW} must evaluate to a JavaScript function.`);
		return r;
	}
	return Object.fromEntries(t.map(([e, t]) => [e, YW(t)]));
}
//#endregion
//#region src/lib/utils/loadEChartsGL.ts
var XW;
function ZW() {
	let e = Array.from(document.scripts).find((e) => {
		if (!e.src) return !1;
		let t = new URL(e.src, document.baseURI).pathname.split("/").pop();
		return /^dash_echartsx(?:\.v.+)?\.umd\.js$/.test(t ?? "");
	});
	if (!e) throw Error("[DashEChartsX] Cannot determine the optional ECharts-GL bundle URL. Set gl_bundle_url explicitly.");
	return new URL("dash_echartsx.gl.umd.js", e.src).href;
}
function QW(e) {
	let t = window;
	return t.dash_echartsx_gl ? Promise.resolve() : XW || (XW = new Promise((n, r) => {
		let i = e ?? ZW(), a = document.createElement("script");
		a.async = !0, a.src = i, a.onload = () => {
			t.dash_echartsx_gl ? n() : (a.remove(), r(/* @__PURE__ */ Error(`[DashEChartsX] ECharts-GL bundle loaded without registering its runtime: ${i}`)));
		}, a.onerror = () => {
			a.remove(), r(/* @__PURE__ */ Error(`[DashEChartsX] Unable to load ECharts-GL bundle: ${i}`));
		}, document.head.appendChild(a);
	}).catch((e) => {
		throw XW = void 0, e;
	}), XW);
}
//#endregion
//#region src/lib/components/DashEChartsX.tsx
wM([
	CT,
	xR,
	Hx,
	jI,
	yE,
	EV,
	TI,
	gz,
	YB,
	CB,
	hB,
	hH,
	qW,
	CW
]);
var $W = {
	light: {
		backgroundColor: "transparent",
		color: [
			"#5470c6",
			"#91cc75",
			"#fac858",
			"#ee6666",
			"#73c0de"
		],
		textStyle: { color: "#333333" }
	},
	dark: {
		backgroundColor: "#202124",
		color: [
			"#4992ff",
			"#7cffb2",
			"#fddd60",
			"#ff6e76",
			"#58d9f9"
		],
		textStyle: { color: "#e8eaed" }
	}
}, eG = /* @__PURE__ */ new Set([
	"highlight",
	"downplay",
	"showTip",
	"hideTip",
	"selectDataRange",
	"legendSelect"
]);
function tG(e, t) {
	if (!t || typeof t != "object" || Array.isArray(t)) {
		console.warn("[DashEChartsX] dispatch_action must be an object with a supported string 'type'.");
		return;
	}
	let n = t;
	if (typeof n.type != "string" || !eG.has(n.type)) {
		console.warn(`[DashEChartsX] Ignoring unsupported dispatch_action type: ${String(n.type)}. Supported types: ${[...eG].join(", ")}.`);
		return;
	}
	try {
		e.dispatchAction(n);
	} catch (e) {
		console.warn(`[DashEChartsX] Failed to dispatch ECharts action '${n.type}'.`, e);
	}
}
function nG(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) return {};
	let n = e, r = {};
	for (let e of t) if (e in n) try {
		let t = JSON.stringify(n[e]);
		t !== void 0 && (r[e] = JSON.parse(t));
	} catch {}
	return r;
}
var rG = t(function(t, o) {
	let { id: s, className: c, style: l, option: u, maps: d, enable_gl: f = !1, gl_bundle_url: p, notMerge: m = !1, lazyUpdate: h = !1, renderer: g = "canvas", theme: _, dispatch_action: v, append_data: y } = t, b = t.setProps, x = i(null), S = i(null), C = i(void 0), w = i(void 0), [T, E] = a(!1);
	return n(() => {
		C.current = b;
	}, [b]), r(o, () => ({ getInstance: () => S.current }), []), n(() => {
		let e, t = !1, n = () => {
			if (t) return;
			let n = x.current;
			if (!n) return;
			let r = Jj(n, typeof _ == "string" ? $W[_] : _, { renderer: g });
			S.current = r;
			let i = [
				["click", (e) => C.current?.({ click_data: nG(e, [
					"seriesIndex",
					"dataIndex",
					"name",
					"value"
				]) })],
				["dblclick", (e) => C.current?.({ dblclick_data: nG(e, [
					"seriesIndex",
					"dataIndex",
					"name",
					"value"
				]) })],
				["mouseover", (e) => C.current?.({ hover_data: nG(e, [
					"seriesIndex",
					"dataIndex",
					"name",
					"value"
				]) })],
				["selectchanged", (e) => C.current?.({ selected_data: nG(e, [
					"type",
					"fromAction",
					"isFromClick",
					"seriesIndex",
					"dataIndex",
					"name",
					"value",
					"selected"
				]) })],
				["legendselectchanged", (e) => C.current?.({ legend_status: nG(e, ["name", "selected"]) })],
				["legendselected", (e) => C.current?.({ legend_status: nG(e, ["name", "selected"]) })],
				["datazoom", (e) => C.current?.({ zoom_data: nG(e, [
					"dataZoomId",
					"dataZoomIndex",
					"start",
					"end",
					"startValue",
					"endValue",
					"batch"
				]) })]
			];
			i.forEach(([e, t]) => r.on(e, t));
			let a = null, o = () => {
				a === null && (a = requestAnimationFrame(() => {
					a = null, n.clientWidth > 0 && n.clientHeight > 0 && r.resize();
				}));
			}, s = () => {
				a !== null && (cancelAnimationFrame(a), a = null);
			}, c = () => {
				s(), i.forEach(([e, t]) => r.off(e, t)), r.dispose(), S.current = null, E(!1);
			};
			if (typeof ResizeObserver < "u") {
				let t = new ResizeObserver(o);
				t.observe(n), o(), e = () => {
					t.disconnect(), c();
				};
			} else window.addEventListener("resize", o), o(), e = () => {
				window.removeEventListener("resize", o), c();
			};
			E(!0);
		};
		return f ? QW(p).then(n).catch((e) => {
			console.error("[DashEChartsX] Failed to load the optional ECharts-GL bundle.", e);
		}) : n(), () => {
			t = !0, e?.();
		};
	}, [
		f,
		p,
		g,
		_
	]), n(() => {
		d?.forEach(({ name: e, geoJSON: t, specialAreas: n }) => {
			_M(e, t, n);
		});
	}, [d]), n(() => {
		T && u && S.current?.setOption(YW(u), m, h);
	}, [
		T,
		h,
		d,
		m,
		u,
		g,
		_
	]), n(() => {
		T && v !== void 0 && S.current && tG(S.current, v);
	}, [T, v]), n(() => {
		if (y === void 0) {
			w.current = void 0;
			return;
		}
		T && y !== w.current && S.current && (S.current.appendData(y), w.current = y);
	}, [y, T]), /* @__PURE__ */ e.createElement("div", {
		id: s,
		ref: x,
		className: c,
		style: {
			width: "100%",
			minWidth: 0,
			aspectRatio: "16 / 9",
			...l
		}
	});
});
rG.displayName = "DashEChartsX";
//#endregion
//#region node_modules/echarts/lib/echarts.js
var iG = /* @__PURE__ */ s({
	Axis: () => VS,
	ChartView: () => Uy,
	ComponentModel: () => q_,
	ComponentView: () => UO,
	List: () => Th,
	Model: () => Jp,
	PRIORITY: () => QA,
	SeriesModel: () => Yv,
	color: () => Gr,
	connect: () => Yj,
	dataTool: () => xM,
	default: () => aG,
	dependencies: () => PA,
	disConnect: () => Zj,
	disconnect: () => Xj,
	dispose: () => Qj,
	env: () => J,
	extendChartView: () => NH,
	extendComponentModel: () => AH,
	extendComponentView: () => jH,
	extendSeriesModel: () => MH,
	format: () => OH,
	getCoordinateSystemDimensions: () => lM,
	getInstanceByDom: () => $j,
	getInstanceById: () => eM,
	getMap: () => vM,
	graphic: () => DH,
	helper: () => yH,
	init: () => Jj,
	innerDrawElementOnCanvas: () => vA,
	matrix: () => mt,
	number: () => TH,
	parseGeoJSON: () => LP,
	parseGeoJson: () => LP,
	registerAction: () => sM,
	registerCoordinateSystem: () => cM,
	registerCustomSeries: () => uM,
	registerLayout: () => dM,
	registerLoading: () => hM,
	registerLocale: () => Tg,
	registerMap: () => _M,
	registerPostInit: () => iM,
	registerPostUpdate: () => aM,
	registerPreprocessor: () => nM,
	registerProcessor: () => rM,
	registerTheme: () => tM,
	registerTransform: () => yM,
	registerUpdateLifecycle: () => oM,
	registerVisual: () => fM,
	setCanvasCreator: () => gM,
	setPlatformAPI: () => _,
	throttle: () => Hw,
	time: () => EH,
	use: () => wM,
	util: () => kH,
	vector: () => wt,
	version: () => NA,
	zrUtil: () => v,
	zrender: () => jD
});
wM([qW, vH]);
var aG = { init: function() {
	return Jj.apply(null, arguments);
} };
wM(WH);
//#endregion
export { rG as DashEChartsX, GH as _echartsCore, iG as _echartsLib };
