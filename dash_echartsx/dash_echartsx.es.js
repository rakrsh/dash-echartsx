import e, { forwardRef as t, useEffect as n, useImperativeHandle as r, useRef as i } from "react";
//#region \0rolldown/runtime.js
var a = Object.defineProperty, o = (e, t) => {
	let n = {};
	for (var r in e) a(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || a(n, Symbol.toStringTag, { value: "Module" }), n;
}, s = function(e, t) {
	return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, s(e, t);
};
function c(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	s(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var l = "12px sans-serif", u = 20, d = 100, f = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function p(e) {
	var t = {};
	if (typeof JSON > "u") return t;
	for (var n = 0; n < e.length; n++) {
		var r = String.fromCharCode(n + 32);
		t[r] = (e.charCodeAt(n) - u) / d;
	}
	return t;
}
var m = p(f), h = {
	createCanvas: function() {
		return typeof document < "u" && document.createElement("canvas");
	},
	measureText: (function() {
		var e, t;
		return function(n, r) {
			if (!e) {
				var i = h.createCanvas();
				e = i && i.getContext("2d");
			}
			if (e) return t !== r && (t = e.font = r || "12px sans-serif"), e.measureText(n);
			n ||= "", r ||= "12px sans-serif";
			var a = /((?:\d+)?\.?\d*)px/.exec(r), o = a && +a[1] || 12, s = 0;
			if (r.indexOf("mono") >= 0) s = o * n.length;
			else for (var c = 0; c < n.length; c++) {
				var l = m[n[c]];
				s += l == null ? o : l * o;
			}
			return { width: s };
		};
	})(),
	loadImage: function(e, t, n) {
		var r = new Image();
		return r.onload = t, r.onerror = n, r.src = e, r;
	}
};
function g(e) {
	for (var t in h) e[t] && (h[t] = e[t]);
}
//#endregion
//#region node_modules/zrender/lib/core/util.js
var _ = /* @__PURE__ */ o({
	HashMap: () => Ae,
	RADIAN_TO_DEGREE: () => Fe,
	assert: () => Se,
	bind: () => V,
	clone: () => j,
	concatArray: () => je,
	createCanvas: () => ne,
	createHashMap: () => q,
	createObject: () => Me,
	curry: () => ce,
	defaults: () => P,
	disableUserSelect: () => Ne,
	each: () => I,
	eqNaN: () => _e,
	extend: () => N,
	filter: () => R,
	find: () => z,
	guid: () => A,
	hasOwn: () => J,
	indexOf: () => F,
	inherits: () => re,
	isArray: () => H,
	isArrayLike: () => ae,
	isBuiltInObject: () => de,
	isDom: () => pe,
	isFunction: () => U,
	isGradientObject: () => me,
	isImagePatternObject: () => he,
	isNumber: () => ue,
	isObject: () => G,
	isPrimitive: () => Ee,
	isRegExp: () => ge,
	isString: () => W,
	isStringSafe: () => le,
	isTypedArray: () => fe,
	keys: () => B,
	logError: () => ee,
	map: () => L,
	merge: () => M,
	mergeAll: () => te,
	mixin: () => ie,
	noop: () => Pe,
	normalizeCssArray: () => xe,
	reduce: () => oe,
	retrieve: () => ve,
	retrieve2: () => K,
	retrieve3: () => ye,
	setAsPrimitive: () => Te,
	slice: () => be,
	trim: () => Ce
}), v = oe([
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
}, {}), y = oe([
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
}, {}), b = Object.prototype.toString, x = Array.prototype, S = x.forEach, C = x.filter, w = x.slice, T = x.map, E = function() {}.constructor, D = E ? E.prototype : null, O = "__proto__", k = 2311;
function A() {
	return k++;
}
function ee() {
	var e = [...arguments];
	typeof console < "u" && console.error.apply(console, e);
}
function j(e) {
	if (typeof e != "object" || !e) return e;
	var t = e, n = b.call(e);
	if (n === "[object Array]") {
		if (!Ee(e)) {
			t = [];
			for (var r = 0, i = e.length; r < i; r++) t[r] = j(e[r]);
		}
	} else if (y[n]) {
		if (!Ee(e)) {
			var a = e.constructor;
			if (a.from) t = a.from(e);
			else {
				t = new a(e.length);
				for (var r = 0, i = e.length; r < i; r++) t[r] = e[r];
			}
		}
	} else if (!v[n] && !Ee(e) && !pe(e)) for (var o in t = {}, e) e.hasOwnProperty(o) && o !== O && (t[o] = j(e[o]));
	return t;
}
function M(e, t, n) {
	if (!G(t) || !G(e)) return n ? j(t) : e;
	for (var r in t) if (t.hasOwnProperty(r) && r !== O) {
		var i = e[r], a = t[r];
		G(a) && G(i) && !H(a) && !H(i) && !pe(a) && !pe(i) && !de(a) && !de(i) && !Ee(a) && !Ee(i) ? M(i, a, n) : (n || !(r in e)) && (e[r] = j(t[r]));
	}
	return e;
}
function te(e, t) {
	for (var n = e[0], r = 1, i = e.length; r < i; r++) n = M(n, e[r], t);
	return n;
}
function N(e, t) {
	if (Object.assign) Object.assign(e, t);
	else for (var n in t) t.hasOwnProperty(n) && n !== O && (e[n] = t[n]);
	return e;
}
function P(e, t, n) {
	for (var r = B(t), i = 0, a = r.length; i < a; i++) {
		var o = r[i];
		(n ? t[o] != null : e[o] == null) && (e[o] = t[o]);
	}
	return e;
}
var ne = h.createCanvas;
function F(e, t) {
	if (e) {
		if (e.indexOf) return e.indexOf(t);
		for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
	}
	return -1;
}
function re(e, t) {
	var n = e.prototype;
	function r() {}
	for (var i in r.prototype = t.prototype, e.prototype = new r(), n) n.hasOwnProperty(i) && (e.prototype[i] = n[i]);
	e.prototype.constructor = e, e.superClass = t;
}
function ie(e, t, n) {
	if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames) for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
		var a = r[i];
		a !== "constructor" && (n ? t[a] != null : e[a] == null) && (e[a] = t[a]);
	}
	else P(e, t, n);
}
function ae(e) {
	return !e || typeof e == "string" ? !1 : typeof e.length == "number";
}
function I(e, t, n) {
	if (e && t) {
		if (e.forEach && e.forEach === S) e.forEach(t, n);
		else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
		else for (var a in e) e.hasOwnProperty(a) && t.call(n, e[a], a, e);
	}
}
function L(e, t, n) {
	if (!e) return [];
	if (!t) return be(e);
	if (e.map && e.map === T) return e.map(t, n);
	for (var r = [], i = 0, a = e.length; i < a; i++) r.push(t.call(n, e[i], i, e));
	return r;
}
function oe(e, t, n, r) {
	if (e && t) {
		for (var i = 0, a = e.length; i < a; i++) n = t.call(r, n, e[i], i, e);
		return n;
	}
}
function R(e, t, n) {
	if (!e) return [];
	if (!t) return be(e);
	if (e.filter && e.filter === C) return e.filter(t, n);
	for (var r = [], i = 0, a = e.length; i < a; i++) t.call(n, e[i], i, e) && r.push(e[i]);
	return r;
}
function z(e, t, n) {
	if (e && t) {
		for (var r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e)) return e[r];
	}
}
function B(e) {
	if (!e) return [];
	if (Object.keys) return Object.keys(e);
	var t = [];
	for (var n in e) e.hasOwnProperty(n) && t.push(n);
	return t;
}
function se(e, t) {
	var n = [...arguments].slice(2);
	return function() {
		return e.apply(t, n.concat(w.call(arguments)));
	};
}
var V = D && U(D.bind) ? D.call.bind(D.bind) : se;
function ce(e) {
	var t = [...arguments].slice(1);
	return function() {
		return e.apply(this, t.concat(w.call(arguments)));
	};
}
function H(e) {
	return Array.isArray ? Array.isArray(e) : b.call(e) === "[object Array]";
}
function U(e) {
	return typeof e == "function";
}
function W(e) {
	return typeof e == "string";
}
function le(e) {
	return b.call(e) === "[object String]";
}
function ue(e) {
	return typeof e == "number";
}
function G(e) {
	var t = typeof e;
	return t === "function" || !!e && t === "object";
}
function de(e) {
	return !!v[b.call(e)];
}
function fe(e) {
	return !!y[b.call(e)];
}
function pe(e) {
	return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object";
}
function me(e) {
	return e.colorStops != null;
}
function he(e) {
	return e.image != null;
}
function ge(e) {
	return b.call(e) === "[object RegExp]";
}
function _e(e) {
	return e !== e;
}
function ve() {
	for (var e = [...arguments], t = 0, n = e.length; t < n; t++) if (e[t] != null) return e[t];
}
function K(e, t) {
	return e ?? t;
}
function ye(e, t, n) {
	return e ?? t ?? n;
}
function be(e) {
	var t = [...arguments].slice(1);
	return w.apply(e, t);
}
function xe(e) {
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
function Se(e, t) {
	if (!e) throw Error(t);
}
function Ce(e) {
	return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var we = "__ec_primitive__";
function Te(e) {
	e[we] = !0;
}
function Ee(e) {
	return e[we];
}
var De = function() {
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
		return B(this.data);
	}, e.prototype.forEach = function(e) {
		var t = this.data;
		for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
	}, e;
}(), Oe = typeof Map == "function";
function ke() {
	return Oe ? /* @__PURE__ */ new Map() : new De();
}
var Ae = function() {
	function e(t) {
		var n = H(t);
		this.data = ke();
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
		return Oe ? Array.from(e) : e;
	}, e.prototype.removeKey = function(e) {
		this.data.delete(e);
	}, e;
}();
function q(e) {
	return new Ae(e);
}
function je(e, t) {
	for (var n = new e.constructor(e.length + t.length), r = 0; r < e.length; r++) n[r] = e[r];
	for (var i = e.length, r = 0; r < t.length; r++) n[r + i] = t[r];
	return n;
}
function Me(e, t) {
	var n;
	if (Object.create) n = Object.create(e);
	else {
		var r = function() {};
		r.prototype = e, n = new r();
	}
	return t && N(n, t), n;
}
function Ne(e) {
	var t = e.style;
	t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function J(e, t) {
	return e.hasOwnProperty(t);
}
function Pe() {}
var Fe = 180 / Math.PI, Ie = function() {
	function e() {
		this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
	}
	return e;
}(), Y = new (function() {
	function e() {
		this.browser = new Ie(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
	}
	return e;
}())();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (Y.wxa = !0, Y.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? Y.worker = !0 : !Y.hasGlobalWindow || "Deno" in window ? (Y.node = !0, Y.svgSupported = !0) : Le(navigator.userAgent, Y);
function Le(e, t) {
	var n = t.browser, r = e.match(/Firefox\/([\d.]+)/), i = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/), a = e.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(e);
	r && (n.firefox = !0, n.version = r[1]), i && (n.ie = !0, n.version = i[1]), a && (n.edge = !0, n.version = a[1], n.newEdge = +a[1].split(".")[0] > 18), o && (n.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge, t.pointerEventsSupported = "onpointerdown" in window && (n.edge || n.ie && +n.version >= 11), t.domSupported = typeof document < "u";
	var s = document.documentElement.style;
	t.transform3dSupported = (n.ie && "transition" in s || n.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || n.ie && +n.version >= 9;
}
//#endregion
//#region node_modules/echarts/lib/util/clazz.js
var Re = ".", ze = "___EC__COMPONENT__CONTAINER___", Be = "___EC__EXTENDED_CLASS___";
function Ve(e) {
	var t = {
		main: "",
		sub: ""
	};
	if (e) {
		var n = e.split(Re);
		t.main = n[0] || "", t.sub = n[1] || "";
	}
	return t;
}
function He(e) {
	Se(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), "componentType \"" + e + "\" illegal");
}
function Ue(e) {
	return !!(e && e[Be]);
}
function We(e, t) {
	e.$constructor = e, e.extend = function(e) {
		var t = this, n;
		return Ge(t) ? n = function(e) {
			c(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			return t;
		}(t) : (n = function() {
			(e.$constructor || t).apply(this, arguments);
		}, re(n, this)), N(n.prototype, e), n[Be] = !0, n.extend = this.extend, n.superCall = Ye, n.superApply = Xe, n.superClass = t, n;
	};
}
function Ge(e) {
	return U(e) && /^class\s/.test(Function.prototype.toString.call(e));
}
function Ke(e, t) {
	e.extend = t.extend;
}
var qe = Math.round(Math.random() * 10);
function Je(e) {
	var t = ["__\0is_clz", qe++].join("_");
	e.prototype[t] = !0, e.isInstance = function(e) {
		return !!(e && e[t]);
	};
}
function Ye(e, t) {
	var n = [...arguments].slice(2);
	return this.superClass.prototype[t].apply(e, n);
}
function Xe(e, t, n) {
	return this.superClass.prototype[t].apply(e, n);
}
function Ze(e) {
	var t = {};
	e.registerClass = function(e) {
		var r = e.type || e.prototype.type;
		if (r) {
			He(r), e.prototype.type = r;
			var i = Ve(r);
			if (!i.sub) t[i.main] = e;
			else if (i.sub !== ze) {
				var a = n(i);
				a[i.sub] = e;
			}
		}
		return e;
	}, e.getClass = function(e, n, r) {
		var i = t[e];
		if (i && i[ze] && (i = n ? i[n] : null), r && !i) throw Error(n ? "Component " + e + "." + (n || "") + " is used but not imported." : e + ".type should be specified.");
		return i;
	}, e.getClassesByMainType = function(e) {
		var n = Ve(e), r = [], i = t[n.main];
		return i && i[ze] ? I(i, function(e, t) {
			t !== ze && r.push(e);
		}) : r.push(i), r;
	}, e.hasClass = function(e) {
		return !!t[Ve(e).main];
	}, e.getAllClassMainTypes = function() {
		var e = [];
		return I(t, function(t, n) {
			e.push(n);
		}), e;
	}, e.hasSubTypes = function(e) {
		var n = t[Ve(e).main];
		return n && n[ze];
	};
	function n(e) {
		var n = t[e.main];
		return (!n || !n[ze]) && (n = t[e.main] = {}, n[ze] = !0), n;
	}
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/makeStyleMapper.js
function Qe(e, t) {
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
var $e = Qe([
	["fill", "color"],
	["shadowBlur"],
	["shadowOffsetX"],
	["shadowOffsetY"],
	["opacity"],
	["shadowColor"]
]), et = function() {
	function e() {}
	return e.prototype.getAreaStyle = function(e, t) {
		return $e(this, e, t);
	}, e;
}(), tt = function() {
	function e(e) {
		this.value = e;
	}
	return e;
}(), nt = function() {
	function e() {
		this._len = 0;
	}
	return e.prototype.insert = function(e) {
		var t = new tt(e);
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
}(), rt = function() {
	function e(e) {
		this._list = new nt(), this._maxSize = 10, this._map = {}, this._maxSize = e;
	}
	return e.prototype.put = function(e, t) {
		var n = this._list, r = this._map, i = null;
		if (r[e] == null) {
			var a = n.len(), o = this._lastRemovedEntry;
			if (a >= this._maxSize && a > 0) {
				var s = n.head;
				n.remove(s), delete r[s.key], i = s.value, this._lastRemovedEntry = s;
			}
			o ? o.value = t : o = new tt(t), o.key = e, n.insertEntry(o), r[e] = o;
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
}(), it = new rt(50);
function at(e) {
	if (typeof e == "string") {
		var t = it.get(e);
		return t && t.image;
	}
	return e;
}
function ot(e, t, n, r, i) {
	if (!e) return t;
	if (typeof e == "string") {
		if (t && t.__zrImageSrc === e || !n) return t;
		var a = it.get(e), o = {
			hostEl: n,
			cb: r,
			cbPayload: i
		};
		return a ? (t = a.image, !ct(t) && a.pending.push(o)) : (t = h.loadImage(e, st, st), t.__zrImageSrc = e, it.put(e, t.__cachedImgObj = {
			image: t,
			pending: [o]
		})), t;
	}
	return e;
}
function st() {
	var e = this.__cachedImgObj;
	this.onload = this.onerror = this.__cachedImgObj = null;
	for (var t = 0; t < e.pending.length; t++) {
		var n = e.pending[t], r = n.cb;
		r && r(this, n.cbPayload), n.hostEl.dirty();
	}
	e.pending.length = 0;
}
function ct(e) {
	return e && e.width && e.height;
}
//#endregion
//#region node_modules/zrender/lib/core/matrix.js
var lt = /* @__PURE__ */ o({
	clone: () => vt,
	copy: () => ft,
	create: () => ut,
	identity: () => dt,
	invert: () => _t,
	mul: () => pt,
	rotate: () => ht,
	scale: () => gt,
	translate: () => mt
});
function ut() {
	return [
		1,
		0,
		0,
		1,
		0,
		0
	];
}
function dt(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
}
function ft(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
}
function pt(e, t, n) {
	var r = t[0] * n[0] + t[2] * n[1], i = t[1] * n[0] + t[3] * n[1], a = t[0] * n[2] + t[2] * n[3], o = t[1] * n[2] + t[3] * n[3], s = t[0] * n[4] + t[2] * n[5] + t[4], c = t[1] * n[4] + t[3] * n[5] + t[5];
	return e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = c, e;
}
function mt(e, t, n) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + n[0], e[5] = t[5] + n[1], e;
}
function ht(e, t, n, r) {
	r === void 0 && (r = [0, 0]);
	var i = t[0], a = t[2], o = t[4], s = t[1], c = t[3], l = t[5], u = Math.sin(n), d = Math.cos(n);
	return e[0] = i * d + s * u, e[1] = -i * u + s * d, e[2] = a * d + c * u, e[3] = -a * u + d * c, e[4] = d * (o - r[0]) + u * (l - r[1]) + r[0], e[5] = d * (l - r[1]) - u * (o - r[0]) + r[1], e;
}
function gt(e, t, n) {
	var r = n[0], i = n[1];
	return e[0] = t[0] * r, e[1] = t[1] * i, e[2] = t[2] * r, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * i, e;
}
function _t(e, t) {
	var n = t[0], r = t[2], i = t[4], a = t[1], o = t[3], s = t[5], c = n * o - a * r;
	return c ? (c = 1 / c, e[0] = o * c, e[1] = -a * c, e[2] = -r * c, e[3] = n * c, e[4] = (r * s - o * i) * c, e[5] = (a * i - n * s) * c, e) : null;
}
function vt(e) {
	var t = ut();
	return ft(t, e), t;
}
//#endregion
//#region node_modules/zrender/lib/core/Point.js
var X = function() {
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
}(), yt = Math.min, bt = Math.max, xt = new X(), St = new X(), Ct = new X(), wt = new X(), Tt = new X(), Et = new X(), Z = function() {
	function e(e, t, n, r) {
		n < 0 && (e += n, n = -n), r < 0 && (t += r, r = -r), this.x = e, this.y = t, this.width = n, this.height = r;
	}
	return e.prototype.union = function(e) {
		var t = yt(e.x, this.x), n = yt(e.y, this.y);
		this.width = isFinite(this.x) && isFinite(this.width) ? bt(e.x + e.width, this.x + this.width) - t : e.width, this.height = isFinite(this.y) && isFinite(this.height) ? bt(e.y + e.height, this.y + this.height) - n : e.height, this.x = t, this.y = n;
	}, e.prototype.applyTransform = function(t) {
		e.applyTransform(this, this, t);
	}, e.prototype.calculateTransform = function(e) {
		var t = this, n = e.width / t.width, r = e.height / t.height, i = ut();
		return mt(i, i, [-t.x, -t.y]), gt(i, i, [n, r]), mt(i, i, [e.x, e.y]), i;
	}, e.prototype.intersect = function(t, n) {
		if (!t) return !1;
		t instanceof e || (t = e.create(t));
		var r = this, i = r.x, a = r.x + r.width, o = r.y, s = r.y + r.height, c = t.x, l = t.x + t.width, u = t.y, d = t.y + t.height, f = !(a < c || l < i || s < u || d < o);
		if (n) {
			var p = Infinity, m = 0, h = Math.abs(a - c), g = Math.abs(l - i), _ = Math.abs(s - u), v = Math.abs(d - o), y = Math.min(h, g), b = Math.min(_, v);
			a < c || l < i ? y > m && (m = y, h < g ? X.set(Et, -h, 0) : X.set(Et, g, 0)) : y < p && (p = y, h < g ? X.set(Tt, h, 0) : X.set(Tt, -g, 0)), s < u || d < o ? b > m && (m = b, _ < v ? X.set(Et, 0, -_) : X.set(Et, 0, v)) : y < p && (p = y, _ < v ? X.set(Tt, 0, _) : X.set(Tt, 0, -v));
		}
		return n && X.copy(n, f ? Tt : Et), f;
	}, e.prototype.contain = function(e, t) {
		var n = this;
		return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height;
	}, e.prototype.clone = function() {
		return new e(this.x, this.y, this.width, this.height);
	}, e.prototype.copy = function(t) {
		e.copy(this, t);
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
		return new e(t.x, t.y, t.width, t.height);
	}, e.copy = function(e, t) {
		e.x = t.x, e.y = t.y, e.width = t.width, e.height = t.height;
	}, e.applyTransform = function(t, n, r) {
		if (!r) t !== n && e.copy(t, n);
		else if (r[1] < 1e-5 && r[1] > -1e-5 && r[2] < 1e-5 && r[2] > -1e-5) {
			var i = r[0], a = r[3], o = r[4], s = r[5];
			t.x = n.x * i + o, t.y = n.y * a + s, t.width = n.width * i, t.height = n.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
		} else {
			xt.x = Ct.x = n.x, xt.y = wt.y = n.y, St.x = wt.x = n.x + n.width, St.y = Ct.y = n.y + n.height, xt.transform(r), wt.transform(r), St.transform(r), Ct.transform(r), t.x = yt(xt.x, St.x, Ct.x, wt.x), t.y = yt(xt.y, St.y, Ct.y, wt.y);
			var c = bt(xt.x, St.x, Ct.x, wt.x), l = bt(xt.y, St.y, Ct.y, wt.y);
			t.width = c - t.x, t.height = l - t.y;
		}
	}, e;
}(), Dt = {};
function Ot(e, t) {
	t ||= "12px sans-serif";
	var n = Dt[t];
	n ||= Dt[t] = new rt(500);
	var r = n.get(e);
	return r ?? (r = h.measureText(e, t).width, n.put(e, r)), r;
}
function kt(e, t, n, r) {
	var i = Ot(e, t), a = Nt(t);
	return new Z(jt(0, i, n), Mt(0, a, r), i, a);
}
function At(e, t, n, r) {
	var i = ((e || "") + "").split("\n");
	if (i.length === 1) return kt(i[0], t, n, r);
	for (var a = new Z(0, 0, 0, 0), o = 0; o < i.length; o++) {
		var s = kt(i[o], t, n, r);
		o === 0 ? a.copy(s) : a.union(s);
	}
	return a;
}
function jt(e, t, n) {
	return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function Mt(e, t, n) {
	return n === "middle" ? e -= t / 2 : n === "bottom" && (e -= t), e;
}
function Nt(e) {
	return Ot("国", e);
}
function Pt(e, t) {
	return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e;
}
function Ft(e, t, n) {
	var r = t.position || "inside", i = t.distance == null ? 5 : t.distance, a = n.height, o = n.width, s = a / 2, c = n.x, l = n.y, u = "left", d = "top";
	if (r instanceof Array) c += Pt(r[0], n.width), l += Pt(r[1], n.height), u = null, d = null;
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
var It = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function Lt(e, t, n, r, i) {
	var a = {};
	return Rt(a, e, t, n, r, i), a.text;
}
function Rt(e, t, n, r, i, a) {
	if (!n) e.text = "", e.isTruncated = !1;
	else {
		var o = (t + "").split("\n");
		a = zt(n, r, i, a);
		for (var s = !1, c = {}, l = 0, u = o.length; l < u; l++) Bt(c, o[l], a), o[l] = c.textLine, s ||= c.isTruncated;
		e.text = o.join("\n"), e.isTruncated = s;
	}
}
function zt(e, t, n, r) {
	r ||= {};
	var i = N({}, r);
	i.font = t, n = K(n, "..."), i.maxIterations = K(r.maxIterations, 2);
	var a = i.minChar = K(r.minChar, 0);
	i.cnCharWidth = Ot("国", t);
	var o = i.ascCharWidth = Ot("a", t);
	i.placeholder = K(r.placeholder, "");
	for (var s = e = Math.max(0, e - 1), c = 0; c < a && s >= o; c++) s -= o;
	var l = Ot(n, t);
	return l > s && (n = "", l = 0), s = e - l, i.ellipsis = n, i.ellipsisWidth = l, i.contentWidth = s, i.containerWidth = e, i;
}
function Bt(e, t, n) {
	var r = n.containerWidth, i = n.font, a = n.contentWidth;
	if (!r) e.textLine = "", e.isTruncated = !1;
	else {
		var o = Ot(t, i);
		if (o <= r) e.textLine = t, e.isTruncated = !1;
		else {
			for (var s = 0;; s++) {
				if (o <= a || s >= n.maxIterations) {
					t += n.ellipsis;
					break;
				}
				var c = s === 0 ? Vt(t, a, n.ascCharWidth, n.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
				t = t.substr(0, c), o = Ot(t, i);
			}
			t === "" && (t = n.placeholder), e.textLine = t, e.isTruncated = !0;
		}
	}
}
function Vt(e, t, n, r) {
	for (var i = 0, a = 0, o = e.length; a < o && i < t; a++) {
		var s = e.charCodeAt(a);
		i += 0 <= s && s <= 127 ? n : r;
	}
	return a;
}
function Ht(e, t) {
	e != null && (e += "");
	var n = t.overflow, r = t.padding, i = t.font, a = n === "truncate", o = Nt(i), s = K(t.lineHeight, o), c = !!t.backgroundColor, l = t.lineOverflow === "truncate", u = !1, d = t.width, f = d != null && (n === "break" || n === "breakAll") ? e ? Zt(e, t.font, d, n === "breakAll", 0).lines : [] : e ? e.split("\n") : [], p = f.length * s, m = K(t.height, p);
	if (p > m && l) {
		var h = Math.floor(m / s);
		u ||= f.length > h, f = f.slice(0, h);
	}
	if (e && a && d != null) for (var g = zt(d, i, t.ellipsis, {
		minChar: t.truncateMinChar,
		placeholder: t.placeholder
	}), _ = {}, v = 0; v < f.length; v++) Bt(_, f[v], g), f[v] = _.textLine, u ||= _.isTruncated;
	for (var y = m, b = 0, v = 0; v < f.length; v++) b = Math.max(Ot(f[v], i), b);
	d ??= b;
	var x = b;
	return r && (y += r[0] + r[2], x += r[1] + r[3], d += r[1] + r[3]), c && (x = d), {
		lines: f,
		height: m,
		outerWidth: x,
		outerHeight: y,
		lineHeight: s,
		calculatedLineHeight: o,
		contentWidth: b,
		contentHeight: p,
		width: d,
		isTruncated: u
	};
}
var Ut = function() {
	function e() {}
	return e;
}(), Wt = function() {
	function e(e) {
		this.tokens = [], e && (this.tokens = e);
	}
	return e;
}(), Gt = function() {
	function e() {
		this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
	}
	return e;
}();
function Kt(e, t) {
	var n = new Gt();
	if (e != null && (e += ""), !e) return n;
	for (var r = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && r != null ? {
		width: r,
		accumWidth: 0,
		breakAll: a === "breakAll"
	} : null, s = It.lastIndex = 0, c; (c = It.exec(e)) != null;) {
		var l = c.index;
		l > s && qt(n, e.substring(s, l), t, o), qt(n, c[2], t, o, c[1]), s = It.lastIndex;
	}
	s < e.length && qt(n, e.substring(s, e.length), t, o);
	var u = [], d = 0, f = 0, p = t.padding, m = a === "truncate", h = t.lineOverflow === "truncate", g = {};
	function _(e, t, n) {
		e.width = t, e.lineHeight = n, d += n, f = Math.max(f, t);
	}
	outer: for (var v = 0; v < n.lines.length; v++) {
		for (var y = n.lines[v], b = 0, x = 0, S = 0; S < y.tokens.length; S++) {
			var C = y.tokens[S], w = C.styleName && t.rich[C.styleName] || {}, T = C.textPadding = w.padding, E = T ? T[1] + T[3] : 0, D = C.font = w.font || t.font;
			C.contentHeight = Nt(D);
			var O = K(w.height, C.contentHeight);
			if (C.innerHeight = O, T && (O += T[0] + T[2]), C.height = O, C.lineHeight = ye(w.lineHeight, t.lineHeight, O), C.align = w && w.align || t.align, C.verticalAlign = w && w.verticalAlign || "middle", h && i != null && d + C.lineHeight > i) {
				var k = n.lines.length;
				S > 0 ? (y.tokens = y.tokens.slice(0, S), _(y, x, b), n.lines = n.lines.slice(0, v + 1)) : n.lines = n.lines.slice(0, v), n.isTruncated = n.isTruncated || n.lines.length < k;
				break outer;
			}
			var A = w.width, ee = A == null || A === "auto";
			if (typeof A == "string" && A.charAt(A.length - 1) === "%") C.percentWidth = A, u.push(C), C.contentWidth = Ot(C.text, D);
			else {
				if (ee) {
					var j = w.backgroundColor, M = j && j.image;
					M && (M = at(M), ct(M) && (C.width = Math.max(C.width, M.width * O / M.height)));
				}
				var te = m && r != null ? r - x : null;
				te != null && te < C.width ? !ee || te < E ? (C.text = "", C.width = C.contentWidth = 0) : (Rt(g, C.text, te - E, D, t.ellipsis, { minChar: t.truncateMinChar }), C.text = g.text, n.isTruncated = n.isTruncated || g.isTruncated, C.width = C.contentWidth = Ot(C.text, D)) : C.contentWidth = Ot(C.text, D);
			}
			C.width += E, x += C.width, w && (b = Math.max(b, C.lineHeight));
		}
		_(y, x, b);
	}
	n.outerWidth = n.width = K(r, f), n.outerHeight = n.height = K(i, d), n.contentHeight = d, n.contentWidth = f, p && (n.outerWidth += p[1] + p[3], n.outerHeight += p[0] + p[2]);
	for (var v = 0; v < u.length; v++) {
		var C = u[v], N = C.percentWidth;
		C.width = parseInt(N, 10) / 100 * n.width;
	}
	return n;
}
function qt(e, t, n, r, i) {
	var a = t === "", o = i && n.rich[i] || {}, s = e.lines, c = o.font || n.font, l = !1, u, d;
	if (r) {
		var f = o.padding, p = f ? f[1] + f[3] : 0;
		if (o.width != null && o.width !== "auto") {
			var m = Pt(o.width, r.width) + p;
			s.length > 0 && m + r.accumWidth > r.width && (u = t.split("\n"), l = !0), r.accumWidth = m;
		} else {
			var h = Zt(t, c, r.width, r.breakAll, r.accumWidth);
			r.accumWidth = h.accumWidth + p, d = h.linesWidths, u = h.lines;
		}
	} else u = t.split("\n");
	for (var g = 0; g < u.length; g++) {
		var _ = u[g], v = new Ut();
		if (v.styleName = i, v.text = _, v.isLineHolder = !_ && !a, v.width = typeof o.width == "number" ? o.width : d ? d[g] : Ot(_, c), !g && !l) {
			var y = (s[s.length - 1] || (s[0] = new Wt())).tokens, b = y.length;
			b === 1 && y[0].isLineHolder ? y[0] = v : (_ || !b || a) && y.push(v);
		} else s.push(new Wt([v]));
	}
}
function Jt(e) {
	var t = e.charCodeAt(0);
	return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var Yt = oe(",&?/;] ".split(""), function(e, t) {
	return e[t] = !0, e;
}, {});
function Xt(e) {
	return !Jt(e) || !!Yt[e];
}
function Zt(e, t, n, r, i) {
	for (var a = [], o = [], s = "", c = "", l = 0, u = 0, d = 0; d < e.length; d++) {
		var f = e.charAt(d);
		if (f === "\n") c && (s += c, u += l), a.push(s), o.push(u), s = "", c = "", l = 0, u = 0;
		else {
			var p = Ot(f, t), m = !r && !Xt(f);
			(a.length ? u + p > n : i + u + p > n) ? u ? (s || c) && (m ? (s || (s = c, c = "", l = 0, u = l), a.push(s), o.push(u - l), c += f, l += p, s = "", u = l) : (c && (s += c, c = "", l = 0), a.push(s), o.push(u), s = f, u = p)) : m ? (a.push(c), o.push(l), c = f, l = p) : (a.push(f), o.push(p)) : (u += p, m ? (c += f, l += p) : (c && (s += c, c = "", l = 0), s += f));
		}
	}
	return !a.length && !s && (s = e, c = "", l = 0), c && (s += c), s && (a.push(s), o.push(u)), a.length === 1 && (u += i), {
		accumWidth: u,
		lines: a,
		linesWidths: o
	};
}
//#endregion
//#region node_modules/zrender/lib/core/vector.js
var Qt = /* @__PURE__ */ o({
	add: () => rn,
	applyTransform: () => Sn,
	clone: () => tn,
	copy: () => en,
	create: () => $t,
	dist: () => _n,
	distSquare: () => yn,
	distance: () => gn,
	distanceSquare: () => vn,
	div: () => fn,
	dot: () => pn,
	len: () => sn,
	lenSquare: () => ln,
	length: () => cn,
	lengthSquare: () => un,
	lerp: () => xn,
	max: () => wn,
	min: () => Cn,
	mul: () => dn,
	negate: () => bn,
	normalize: () => hn,
	scale: () => mn,
	scaleAndAdd: () => an,
	set: () => nn,
	sub: () => on
});
function $t(e, t) {
	return e ??= 0, t ??= 0, [e, t];
}
function en(e, t) {
	return e[0] = t[0], e[1] = t[1], e;
}
function tn(e) {
	return [e[0], e[1]];
}
function nn(e, t, n) {
	return e[0] = t, e[1] = n, e;
}
function rn(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e;
}
function an(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e;
}
function on(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e;
}
function sn(e) {
	return Math.sqrt(ln(e));
}
var cn = sn;
function ln(e) {
	return e[0] * e[0] + e[1] * e[1];
}
var un = ln;
function dn(e, t, n) {
	return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e;
}
function fn(e, t, n) {
	return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e;
}
function pn(e, t) {
	return e[0] * t[0] + e[1] * t[1];
}
function mn(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e;
}
function hn(e, t) {
	var n = sn(t);
	return n === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / n, e[1] = t[1] / n), e;
}
function gn(e, t) {
	return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
}
var _n = gn;
function vn(e, t) {
	return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]);
}
var yn = vn;
function bn(e, t) {
	return e[0] = -t[0], e[1] = -t[1], e;
}
function xn(e, t, n, r) {
	return e[0] = t[0] + r * (n[0] - t[0]), e[1] = t[1] + r * (n[1] - t[1]), e;
}
function Sn(e, t, n) {
	var r = t[0], i = t[1];
	return e[0] = n[0] * r + n[2] * i + n[4], e[1] = n[1] * r + n[3] * i + n[5], e;
}
function Cn(e, t, n) {
	return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e;
}
function wn(e, t, n) {
	return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e;
}
//#endregion
//#region node_modules/zrender/lib/core/Transformable.js
var Tn = dt, En = 5e-5;
function Dn(e) {
	return e > En || e < -En;
}
var On = [], kn = [], An = ut(), jn = Math.abs, Mn = function() {
	function e() {}
	return e.prototype.getLocalTransform = function(t) {
		return e.getLocalTransform(this, t);
	}, e.prototype.setPosition = function(e) {
		this.x = e[0], this.y = e[1];
	}, e.prototype.setScale = function(e) {
		this.scaleX = e[0], this.scaleY = e[1];
	}, e.prototype.setSkew = function(e) {
		this.skewX = e[0], this.skewY = e[1];
	}, e.prototype.setOrigin = function(e) {
		this.originX = e[0], this.originY = e[1];
	}, e.prototype.needLocalTransform = function() {
		return Dn(this.rotation) || Dn(this.x) || Dn(this.y) || Dn(this.scaleX - 1) || Dn(this.scaleY - 1) || Dn(this.skewX) || Dn(this.skewY);
	}, e.prototype.updateTransform = function() {
		var e = this.parent && this.parent.transform, t = this.needLocalTransform(), n = this.transform;
		t || e ? (n ||= ut(), t ? this.getLocalTransform(n) : Tn(n), e && (t ? pt(n, e, n) : ft(n, e)), this.transform = n, this._resolveGlobalScaleRatio(n)) : n && (Tn(n), this.invTransform = null);
	}, e.prototype._resolveGlobalScaleRatio = function(e) {
		var t = this.globalScaleRatio;
		if (t != null && t !== 1) {
			this.getGlobalScale(On);
			var n = On[0] < 0 ? -1 : 1, r = On[1] < 0 ? -1 : 1, i = ((On[0] - n) * t + n) / On[0] || 0, a = ((On[1] - r) * t + r) / On[1] || 0;
			e[0] *= i, e[1] *= i, e[2] *= a, e[3] *= a;
		}
		this.invTransform = this.invTransform || ut(), _t(this.invTransform, e);
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
			e && e.transform && (e.invTransform = e.invTransform || ut(), pt(kn, e.invTransform, t), t = kn);
			var n = this.originX, r = this.originY;
			(n || r) && (An[4] = n, An[5] = r, pt(kn, t, An), kn[4] -= n, kn[5] -= r, t = kn), this.setLocalTransform(t);
		}
	}, e.prototype.getGlobalScale = function(e) {
		var t = this.transform;
		return e ||= [], t ? (e[0] = Math.sqrt(t[0] * t[0] + t[1] * t[1]), e[1] = Math.sqrt(t[2] * t[2] + t[3] * t[3]), t[0] < 0 && (e[0] = -e[0]), t[3] < 0 && (e[1] = -e[1]), e) : (e[0] = 1, e[1] = 1, e);
	}, e.prototype.transformCoordToLocal = function(e, t) {
		var n = [e, t], r = this.invTransform;
		return r && Sn(n, n, r), n;
	}, e.prototype.transformCoordToGlobal = function(e, t) {
		var n = [e, t], r = this.transform;
		return r && Sn(n, n, r), n;
	}, e.prototype.getLineScale = function() {
		var e = this.transform;
		return e && jn(e[0] - 1) > 1e-10 && jn(e[3] - 1) > 1e-10 ? Math.sqrt(jn(e[0] * e[3] - e[2] * e[1])) : 1;
	}, e.prototype.copyTransform = function(e) {
		Pn(this, e);
	}, e.getLocalTransform = function(e, t) {
		t ||= [];
		var n = e.originX || 0, r = e.originY || 0, i = e.scaleX, a = e.scaleY, o = e.anchorX, s = e.anchorY, c = e.rotation || 0, l = e.x, u = e.y, d = e.skewX ? Math.tan(e.skewX) : 0, f = e.skewY ? Math.tan(-e.skewY) : 0;
		if (n || r || o || s) {
			var p = n + o, m = r + s;
			t[4] = -p * i - d * m * a, t[5] = -m * a - f * p * i;
		} else t[4] = t[5] = 0;
		return t[0] = i, t[3] = a, t[1] = f * i, t[2] = d * a, c && ht(t, t, c), t[4] += n + l, t[5] += r + u, t;
	}, e.initDefaultProps = (function() {
		var t = e.prototype;
		t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
	})(), e;
}(), Nn = [
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
function Pn(e, t) {
	for (var n = 0; n < Nn.length; n++) {
		var r = Nn[n];
		e[r] = t[r];
	}
}
//#endregion
//#region node_modules/zrender/lib/animation/easing.js
var Fn = {
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
		return 1 - Fn.bounceOut(1 - e);
	},
	bounceOut: function(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
	},
	bounceInOut: function(e) {
		return e < .5 ? Fn.bounceIn(e * 2) * .5 : Fn.bounceOut(e * 2 - 1) * .5 + .5;
	}
}, In = Math.pow, Ln = Math.sqrt, Rn = 1e-8, zn = 1e-4, Bn = Ln(3), Vn = 1 / 3, Hn = $t(), Un = $t(), Wn = $t();
function Gn(e) {
	return e > -Rn && e < Rn;
}
function Kn(e) {
	return e > Rn || e < -Rn;
}
function qn(e, t, n, r, i) {
	var a = 1 - i;
	return a * a * (a * e + 3 * i * t) + i * i * (i * r + 3 * a * n);
}
function Jn(e, t, n, r, i) {
	var a = 1 - i;
	return 3 * (((t - e) * a + 2 * (n - t) * i) * a + (r - n) * i * i);
}
function Yn(e, t, n, r, i, a) {
	var o = r + 3 * (t - n) - e, s = 3 * (n - t * 2 + e), c = 3 * (t - e), l = e - i, u = s * s - 3 * o * c, d = s * c - 9 * o * l, f = c * c - 3 * s * l, p = 0;
	if (Gn(u) && Gn(d)) {
		if (Gn(s)) a[0] = 0;
		else {
			var m = -c / s;
			m >= 0 && m <= 1 && (a[p++] = m);
		}
	} else {
		var h = d * d - 4 * u * f;
		if (Gn(h)) {
			var g = d / u, m = -s / o + g, _ = -g / 2;
			m >= 0 && m <= 1 && (a[p++] = m), _ >= 0 && _ <= 1 && (a[p++] = _);
		} else if (h > 0) {
			var v = Ln(h), y = u * s + 1.5 * o * (-d + v), b = u * s + 1.5 * o * (-d - v);
			y = y < 0 ? -In(-y, Vn) : In(y, Vn), b = b < 0 ? -In(-b, Vn) : In(b, Vn);
			var m = (-s - (y + b)) / (3 * o);
			m >= 0 && m <= 1 && (a[p++] = m);
		} else {
			var x = (2 * u * s - 3 * o * d) / (2 * Ln(u * u * u)), S = Math.acos(x) / 3, C = Ln(u), w = Math.cos(S), m = (-s - 2 * C * w) / (3 * o), _ = (-s + C * (w + Bn * Math.sin(S))) / (3 * o), T = (-s + C * (w - Bn * Math.sin(S))) / (3 * o);
			m >= 0 && m <= 1 && (a[p++] = m), _ >= 0 && _ <= 1 && (a[p++] = _), T >= 0 && T <= 1 && (a[p++] = T);
		}
	}
	return p;
}
function Xn(e, t, n, r, i) {
	var a = 6 * n - 12 * t + 6 * e, o = 9 * t + 3 * r - 3 * e - 9 * n, s = 3 * t - 3 * e, c = 0;
	if (Gn(o)) {
		if (Kn(a)) {
			var l = -s / a;
			l >= 0 && l <= 1 && (i[c++] = l);
		}
	} else {
		var u = a * a - 4 * o * s;
		if (Gn(u)) i[0] = -a / (2 * o);
		else if (u > 0) {
			var d = Ln(u), l = (-a + d) / (2 * o), f = (-a - d) / (2 * o);
			l >= 0 && l <= 1 && (i[c++] = l), f >= 0 && f <= 1 && (i[c++] = f);
		}
	}
	return c;
}
function Zn(e, t, n, r, i, a) {
	var o = (t - e) * i + e, s = (n - t) * i + t, c = (r - n) * i + n, l = (s - o) * i + o, u = (c - s) * i + s, d = (u - l) * i + l;
	a[0] = e, a[1] = o, a[2] = l, a[3] = d, a[4] = d, a[5] = u, a[6] = c, a[7] = r;
}
function Qn(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f = .005, p = Infinity, m, h, g, _;
	Hn[0] = c, Hn[1] = l;
	for (var v = 0; v < 1; v += .05) Un[0] = qn(e, n, i, o, v), Un[1] = qn(t, r, a, s, v), g = yn(Hn, Un), g < p && (d = v, p = g);
	p = Infinity;
	for (var y = 0; y < 32 && !(f < zn); y++) m = d - f, h = d + f, Un[0] = qn(e, n, i, o, m), Un[1] = qn(t, r, a, s, m), g = yn(Un, Hn), m >= 0 && g < p ? (d = m, p = g) : (Wn[0] = qn(e, n, i, o, h), Wn[1] = qn(t, r, a, s, h), _ = yn(Wn, Hn), h <= 1 && _ < p ? (d = h, p = _) : f *= .5);
	return u && (u[0] = qn(e, n, i, o, d), u[1] = qn(t, r, a, s, d)), Ln(p);
}
function $n(e, t, n, r, i, a, o, s, c) {
	for (var l = e, u = t, d = 0, f = 1 / c, p = 1; p <= c; p++) {
		var m = p * f, h = qn(e, n, i, o, m), g = qn(t, r, a, s, m), _ = h - l, v = g - u;
		d += Math.sqrt(_ * _ + v * v), l = h, u = g;
	}
	return d;
}
function er(e, t, n, r) {
	var i = 1 - r;
	return i * (i * e + 2 * r * t) + r * r * n;
}
function tr(e, t, n, r) {
	return 2 * ((1 - r) * (t - e) + r * (n - t));
}
function nr(e, t, n, r, i) {
	var a = e - 2 * t + n, o = 2 * (t - e), s = e - r, c = 0;
	if (Gn(a)) {
		if (Kn(o)) {
			var l = -s / o;
			l >= 0 && l <= 1 && (i[c++] = l);
		}
	} else {
		var u = o * o - 4 * a * s;
		if (Gn(u)) {
			var l = -o / (2 * a);
			l >= 0 && l <= 1 && (i[c++] = l);
		} else if (u > 0) {
			var d = Ln(u), l = (-o + d) / (2 * a), f = (-o - d) / (2 * a);
			l >= 0 && l <= 1 && (i[c++] = l), f >= 0 && f <= 1 && (i[c++] = f);
		}
	}
	return c;
}
function rr(e, t, n) {
	var r = e + n - 2 * t;
	return r === 0 ? .5 : (e - t) / r;
}
function ir(e, t, n, r, i) {
	var a = (t - e) * r + e, o = (n - t) * r + t, s = (o - a) * r + a;
	i[0] = e, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = n;
}
function ar(e, t, n, r, i, a, o, s, c) {
	var l, u = .005, d = Infinity;
	Hn[0] = o, Hn[1] = s;
	for (var f = 0; f < 1; f += .05) {
		Un[0] = er(e, n, i, f), Un[1] = er(t, r, a, f);
		var p = yn(Hn, Un);
		p < d && (l = f, d = p);
	}
	d = Infinity;
	for (var m = 0; m < 32 && !(u < zn); m++) {
		var h = l - u, g = l + u;
		Un[0] = er(e, n, i, h), Un[1] = er(t, r, a, h);
		var p = yn(Un, Hn);
		if (h >= 0 && p < d) l = h, d = p;
		else {
			Wn[0] = er(e, n, i, g), Wn[1] = er(t, r, a, g);
			var _ = yn(Wn, Hn);
			g <= 1 && _ < d ? (l = g, d = _) : u *= .5;
		}
	}
	return c && (c[0] = er(e, n, i, l), c[1] = er(t, r, a, l)), Ln(d);
}
function or(e, t, n, r, i, a, o) {
	for (var s = e, c = t, l = 0, u = 1 / o, d = 1; d <= o; d++) {
		var f = d * u, p = er(e, n, i, f), m = er(t, r, a, f), h = p - s, g = m - c;
		l += Math.sqrt(h * h + g * g), s = p, c = m;
	}
	return l;
}
//#endregion
//#region node_modules/zrender/lib/animation/cubicEasing.js
var sr = /cubic-bezier\(([0-9,\.e ]+)\)/;
function cr(e) {
	var t = e && sr.exec(e);
	if (t) {
		var n = t[1].split(","), r = +Ce(n[0]), i = +Ce(n[1]), a = +Ce(n[2]), o = +Ce(n[3]);
		if (isNaN(r + i + a + o)) return;
		var s = [];
		return function(e) {
			return e <= 0 ? 0 : e >= 1 ? 1 : Yn(0, r, a, 1, e, s) && qn(0, i, o, 1, s[0]);
		};
	}
}
//#endregion
//#region node_modules/zrender/lib/animation/Clip.js
var lr = function() {
	function e(e) {
		this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = e.life || 1e3, this._delay = e.delay || 0, this.loop = e.loop || !1, this.onframe = e.onframe || Pe, this.ondestroy = e.ondestroy || Pe, this.onrestart = e.onrestart || Pe, e.easing && this.setEasing(e.easing);
	}
	return e.prototype.step = function(e, t) {
		if (this._inited ||= (this._startTime = e + this._delay, !0), this._paused) this._pausedTime += t;
		else {
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
		}
	}, e.prototype.pause = function() {
		this._paused = !0;
	}, e.prototype.resume = function() {
		this._paused = !1;
	}, e.prototype.setEasing = function(e) {
		this.easing = e, this.easingFunc = U(e) ? e : Fn[e] || cr(e);
	}, e;
}(), ur = /* @__PURE__ */ o({
	fastLerp: () => kr,
	fastMapToColor: () => Ar,
	lerp: () => jr,
	lift: () => Dr,
	liftColor: () => zr,
	lum: () => Ir,
	mapToColor: () => Mr,
	modifyAlpha: () => Pr,
	modifyHSL: () => Nr,
	parse: () => wr,
	random: () => Lr,
	stringify: () => Fr,
	toHex: () => Or
}), dr = {
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
function fr(e) {
	return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e;
}
function pr(e) {
	return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e;
}
function mr(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e;
}
function hr(e) {
	var t = e;
	return t.length && t.charAt(t.length - 1) === "%" ? fr(parseFloat(t) / 100 * 255) : fr(parseInt(t, 10));
}
function gr(e) {
	var t = e;
	return t.length && t.charAt(t.length - 1) === "%" ? mr(parseFloat(t) / 100) : mr(parseFloat(t));
}
function _r(e, t, n) {
	return n < 0 ? n += 1 : n > 1 && --n, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function vr(e, t, n) {
	return e + (t - e) * n;
}
function yr(e, t, n, r, i) {
	return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e;
}
function br(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
var xr = new rt(20), Sr = null;
function Cr(e, t) {
	Sr && br(Sr, t), Sr = xr.put(e, Sr || t.slice());
}
function wr(e, t) {
	if (e) {
		t ||= [];
		var n = xr.get(e);
		if (n) return br(t, n);
		e += "";
		var r = e.replace(/ /g, "").toLowerCase();
		if (r in dr) return br(t, dr[r]), Cr(e, t), t;
		var i = r.length;
		if (r.charAt(0) === "#") {
			if (i === 4 || i === 5) {
				var a = parseInt(r.slice(1, 4), 16);
				if (!(a >= 0 && a <= 4095)) {
					yr(t, 0, 0, 0, 1);
					return;
				}
				return yr(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(r.slice(4), 16) / 15 : 1), Cr(e, t), t;
			}
			if (i === 7 || i === 9) {
				var a = parseInt(r.slice(1, 7), 16);
				if (!(a >= 0 && a <= 16777215)) {
					yr(t, 0, 0, 0, 1);
					return;
				}
				return yr(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(r.slice(7), 16) / 255 : 1), Cr(e, t), t;
			}
		} else {
			var o = r.indexOf("("), s = r.indexOf(")");
			if (o !== -1 && s + 1 === i) {
				var c = r.substr(0, o), l = r.substr(o + 1, s - (o + 1)).split(","), u = 1;
				switch (c) {
					case "rgba":
						if (l.length !== 4) return l.length === 3 ? yr(t, +l[0], +l[1], +l[2], 1) : yr(t, 0, 0, 0, 1);
						u = gr(l.pop());
					case "rgb":
						if (l.length >= 3) return yr(t, hr(l[0]), hr(l[1]), hr(l[2]), l.length === 3 ? u : gr(l[3])), Cr(e, t), t;
						yr(t, 0, 0, 0, 1);
						return;
					case "hsla":
						if (l.length !== 4) {
							yr(t, 0, 0, 0, 1);
							return;
						}
						return l[3] = gr(l[3]), Tr(l, t), Cr(e, t), t;
					case "hsl":
						if (l.length !== 3) {
							yr(t, 0, 0, 0, 1);
							return;
						}
						return Tr(l, t), Cr(e, t), t;
					default: return;
				}
			}
			yr(t, 0, 0, 0, 1);
		}
	}
}
function Tr(e, t) {
	var n = (parseFloat(e[0]) % 360 + 360) % 360 / 360, r = gr(e[1]), i = gr(e[2]), a = i <= .5 ? i * (r + 1) : i + r - i * r, o = i * 2 - a;
	return t ||= [], yr(t, fr(_r(o, a, n + 1 / 3) * 255), fr(_r(o, a, n) * 255), fr(_r(o, a, n - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t;
}
function Er(e) {
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
function Dr(e, t) {
	var n = wr(e);
	if (n) {
		for (var r = 0; r < 3; r++) t < 0 ? n[r] = n[r] * (1 - t) | 0 : n[r] = (255 - n[r]) * t + n[r] | 0, n[r] > 255 ? n[r] = 255 : n[r] < 0 && (n[r] = 0);
		return Fr(n, n.length === 4 ? "rgba" : "rgb");
	}
}
function Or(e) {
	var t = wr(e);
	if (t) return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
}
function kr(e, t, n) {
	if (t && t.length && e >= 0 && e <= 1) {
		n ||= [];
		var r = e * (t.length - 1), i = Math.floor(r), a = Math.ceil(r), o = t[i], s = t[a], c = r - i;
		return n[0] = fr(vr(o[0], s[0], c)), n[1] = fr(vr(o[1], s[1], c)), n[2] = fr(vr(o[2], s[2], c)), n[3] = mr(vr(o[3], s[3], c)), n;
	}
}
var Ar = kr;
function jr(e, t, n) {
	if (t && t.length && e >= 0 && e <= 1) {
		var r = e * (t.length - 1), i = Math.floor(r), a = Math.ceil(r), o = wr(t[i]), s = wr(t[a]), c = r - i, l = Fr([
			fr(vr(o[0], s[0], c)),
			fr(vr(o[1], s[1], c)),
			fr(vr(o[2], s[2], c)),
			mr(vr(o[3], s[3], c))
		], "rgba");
		return n ? {
			color: l,
			leftIndex: i,
			rightIndex: a,
			value: r
		} : l;
	}
}
var Mr = jr;
function Nr(e, t, n, r) {
	var i = wr(e);
	if (e) return i = Er(i), t != null && (i[0] = pr(t)), n != null && (i[1] = gr(n)), r != null && (i[2] = gr(r)), Fr(Tr(i), "rgba");
}
function Pr(e, t) {
	var n = wr(e);
	if (n && t != null) return n[3] = mr(t), Fr(n, "rgba");
}
function Fr(e, t) {
	if (e && e.length) {
		var n = e[0] + "," + e[1] + "," + e[2];
		return (t === "rgba" || t === "hsva" || t === "hsla") && (n += "," + e[3]), t + "(" + n + ")";
	}
}
function Ir(e, t) {
	var n = wr(e);
	return n ? (.299 * n[0] + .587 * n[1] + .114 * n[2]) * n[3] / 255 + (1 - n[3]) * t : 0;
}
function Lr() {
	return Fr([
		Math.round(Math.random() * 255),
		Math.round(Math.random() * 255),
		Math.round(Math.random() * 255)
	], "rgb");
}
var Rr = new rt(100);
function zr(e) {
	if (W(e)) {
		var t = Rr.get(e);
		return t || (t = Dr(e, -.1), Rr.put(e, t)), t;
	}
	if (me(e)) {
		var n = N({}, e);
		return n.colorStops = L(e.colorStops, function(e) {
			return {
				offset: e.offset,
				color: Dr(e.color, -.1)
			};
		}), n;
	}
	return e;
}
//#endregion
//#region node_modules/zrender/lib/svg/helper.js
var Br = Math.round;
function Vr(e) {
	var t;
	if (!e || e === "transparent") e = "none";
	else if (typeof e == "string" && e.indexOf("rgba") > -1) {
		var n = wr(e);
		n && (e = "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")", t = n[3]);
	}
	return {
		color: e,
		opacity: t ?? 1
	};
}
var Hr = 1e-4;
function Ur(e) {
	return e < Hr && e > -Hr;
}
function Wr(e) {
	return Br(e * 1e3) / 1e3;
}
function Gr(e) {
	return Br(e * 1e4) / 1e4;
}
function Kr(e) {
	return "matrix(" + Wr(e[0]) + "," + Wr(e[1]) + "," + Wr(e[2]) + "," + Wr(e[3]) + "," + Gr(e[4]) + "," + Gr(e[5]) + ")";
}
var qr = {
	left: "start",
	right: "end",
	center: "middle",
	middle: "middle"
};
function Jr(e, t, n) {
	return n === "top" ? e += t / 2 : n === "bottom" && (e -= t / 2), e;
}
function Yr(e) {
	return e && (e.shadowBlur || e.shadowOffsetX || e.shadowOffsetY);
}
function Xr(e) {
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
function Zr(e) {
	return e && !!e.image;
}
function Qr(e) {
	return e && !!e.svgElement;
}
function $r(e) {
	return Zr(e) || Qr(e);
}
function ei(e) {
	return e.type === "linear";
}
function ti(e) {
	return e.type === "radial";
}
function ni(e) {
	return e && (e.type === "linear" || e.type === "radial");
}
function ri(e) {
	return "url(#" + e + ")";
}
function ii(e) {
	var t = e.getGlobalScale(), n = Math.max(t[0], t[1]);
	return Math.max(Math.ceil(Math.log(n) / Math.log(10)), 1);
}
function ai(e) {
	var t = e.x || 0, n = e.y || 0, r = (e.rotation || 0) * Fe, i = K(e.scaleX, 1), a = K(e.scaleY, 1), o = e.skewX || 0, s = e.skewY || 0, c = [];
	return (t || n) && c.push("translate(" + t + "px," + n + "px)"), r && c.push("rotate(" + r + ")"), (i !== 1 || a !== 1) && c.push("scale(" + i + "," + a + ")"), (o || s) && c.push("skew(" + Br(o * Fe) + "deg, " + Br(s * Fe) + "deg)"), c.join(" ");
}
var oi = (function() {
	return Y.hasGlobalWindow && U(window.btoa) ? function(e) {
		return window.btoa(unescape(encodeURIComponent(e)));
	} : typeof Buffer < "u" ? function(e) {
		return Buffer.from(e).toString("base64");
	} : function(e) {
		return null;
	};
})(), si = Array.prototype.slice;
function ci(e, t, n) {
	return (t - e) * n + e;
}
function li(e, t, n, r) {
	for (var i = t.length, a = 0; a < i; a++) e[a] = ci(t[a], n[a], r);
	return e;
}
function ui(e, t, n, r) {
	for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
		e[o] || (e[o] = []);
		for (var s = 0; s < a; s++) e[o][s] = ci(t[o][s], n[o][s], r);
	}
	return e;
}
function di(e, t, n, r) {
	for (var i = t.length, a = 0; a < i; a++) e[a] = t[a] + n[a] * r;
	return e;
}
function fi(e, t, n, r) {
	for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
		e[o] || (e[o] = []);
		for (var s = 0; s < a; s++) e[o][s] = t[o][s] + n[o][s] * r;
	}
	return e;
}
function pi(e, t) {
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
function mi(e, t, n) {
	var r = e, i = t;
	if (r.push && i.push) {
		var a = r.length, o = i.length;
		if (a !== o) {
			if (a > o) r.length = o;
			else for (var s = a; s < o; s++) r.push(n === 1 ? i[s] : si.call(i[s]));
		}
		for (var c = r[0] && r[0].length, s = 0; s < r.length; s++) if (n === 1) isNaN(r[s]) && (r[s] = i[s]);
		else for (var l = 0; l < c; l++) isNaN(r[s][l]) && (r[s][l] = i[s][l]);
	}
}
function hi(e) {
	if (ae(e)) {
		var t = e.length;
		if (ae(e[0])) {
			for (var n = [], r = 0; r < t; r++) n.push(si.call(e[r]));
			return n;
		}
		return si.call(e);
	}
	return e;
}
function gi(e) {
	return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")";
}
function _i(e) {
	return ae(e && e[0]) ? 2 : 1;
}
var vi = 0, yi = 1, bi = 2, xi = 3, Si = 4, Ci = 5, wi = 6;
function Ti(e) {
	return e === Si || e === Ci;
}
function Ei(e) {
	return e === yi || e === bi;
}
var Di = [
	0,
	0,
	0,
	0
], Oi = function() {
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
		var r = this.keyframes, i = r.length, a = !1, o = wi, s = t;
		if (ae(t)) {
			var c = _i(t);
			o = c, (c === 1 && !ue(t[0]) || c === 2 && !ue(t[0][0])) && (a = !0);
		} else if (ue(t) && !_e(t)) o = vi;
		else if (W(t)) {
			if (!isNaN(+t)) o = vi;
			else {
				var l = wr(t);
				l && (s = l, o = xi);
			}
		} else if (me(t)) {
			var u = N({}, s);
			u.colorStops = L(t.colorStops, function(e) {
				return {
					offset: e.offset,
					color: wr(e.color)
				};
			}), ei(t) ? o = Si : ti(t) && (o = Ci), s = u;
		}
		i === 0 ? this.valType = o : (o !== this.valType || o === wi) && (a = !0), this.discrete = this.discrete || a;
		var d = {
			time: e,
			value: s,
			rawValue: t,
			percent: 0
		};
		return n && (d.easing = n, d.easingFunc = U(n) ? n : Fn[n] || cr(n)), r.push(d), d;
	}, e.prototype.prepare = function(e, t) {
		var n = this.keyframes;
		this._needsSort && n.sort(function(e, t) {
			return e.time - t.time;
		});
		for (var r = this.valType, i = n.length, a = n[i - 1], o = this.discrete, s = Ei(r), c = Ti(r), l = 0; l < i; l++) {
			var u = n[l], d = u.value, f = a.value;
			u.percent = u.time / e, o || (s && l !== i - 1 ? mi(d, f, r) : c && pi(d.colorStops, f.colorStops));
		}
		if (!o && r !== Ci && t && this.needsAnimate() && t.needsAnimate() && r === t.valType && !t._finished) {
			this._additiveTrack = t;
			for (var p = n[0].value, l = 0; l < i; l++) r === vi ? n[l].additiveValue = n[l].value - p : r === xi ? n[l].additiveValue = di([], n[l].value, p, -1) : Ei(r) && (n[l].additiveValue = r === yi ? di([], n[l].value, p, -1) : fi([], n[l].value, p, -1));
		}
	}, e.prototype.step = function(e, t) {
		if (!this._finished) {
			this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
			var n = this._additiveTrack != null, r = n ? "additiveValue" : "value", i = this.valType, a = this.keyframes, o = a.length, s = this.propName, c = i === xi, l, u = this._lastFr, d = Math.min, f, p;
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
				var g = n ? this._additiveValue : c ? Di : e[s];
				if ((Ei(i) || c) && !g && (g = this._additiveValue = []), this.discrete) e[s] = h < 1 ? f.rawValue : p.rawValue;
				else if (Ei(i)) i === yi ? li(g, f[r], p[r], h) : ui(g, f[r], p[r], h);
				else if (Ti(i)) {
					var _ = f[r], v = p[r], y = i === Si;
					e[s] = {
						type: y ? "linear" : "radial",
						x: ci(_.x, v.x, h),
						y: ci(_.y, v.y, h),
						colorStops: L(_.colorStops, function(e, t) {
							var n = v.colorStops[t];
							return {
								offset: ci(e.offset, n.offset, h),
								color: gi(li([], e.color, n.color, h))
							};
						}),
						global: v.global
					}, y ? (e[s].x2 = ci(_.x2, v.x2, h), e[s].y2 = ci(_.y2, v.y2, h)) : e[s].r = ci(_.r, v.r, h);
				} else if (c) li(g, f[r], p[r], h), n || (e[s] = gi(g));
				else {
					var b = ci(f[r], p[r], h);
					n ? this._additiveValue = b : e[s] = b;
				}
				n && this._addToTarget(e);
			}
		}
	}, e.prototype._addToTarget = function(e) {
		var t = this.valType, n = this.propName, r = this._additiveValue;
		t === vi ? e[n] = e[n] + r : t === xi ? (wr(e[n], Di), di(Di, Di, r, 1), e[n] = gi(Di)) : t === yi ? di(e[n], e[n], r, 1) : t === bi && fi(e[n], e[n], r, 1);
	}, e;
}(), ki = function() {
	function e(e, t, n, r) {
		this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = e, this._loop = t, t && r ? ee("Can' use additive animation on looped animation.") : (this._additiveAnimators = r, this._allowDiscrete = n);
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
		return this.whenWithKeys(e, t, B(t), n);
	}, e.prototype.whenWithKeys = function(e, t, n, r) {
		for (var i = this._tracks, a = 0; a < n.length; a++) {
			var o = n[a], s = i[o];
			if (!s) {
				s = i[o] = new Oi(o);
				var c = void 0, l = this._getAdditiveTrack(o);
				if (l) {
					var u = l.keyframes, d = u[u.length - 1];
					c = d && d.value, l.valType === xi && c && (c = gi(c));
				} else c = this._target[o];
				if (c == null) continue;
				e > 0 && s.addKeyframe(0, hi(c), r), this._trackKeys.push(o);
			}
			s.addKeyframe(e, hi(t[o]), r);
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
				var d = new lr({
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
					s && (e[i] = hi(s.rawValue));
				}
			}
		}
	}, e.prototype.__changeFinalValue = function(e, t) {
		t ||= B(e);
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
}(), Ai = function() {
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
}(), ji = 1;
Y.hasGlobalWindow && (ji = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Mi = ji, Ni = .4, Pi = "#333", Fi = "#ccc", Ii = "#eee", Li = "__zr_normal__", Ri = Nn.concat(["ignore"]), zi = oe(Nn, function(e, t) {
	return e[t] = !0, e;
}, { ignore: !1 }), Bi = {}, Vi = new Z(0, 0, 0, 0), Hi = function() {
	function e(e) {
		this.id = A(), this.animators = [], this.currentStates = [], this.states = {}, this._init(e);
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
			if (i.copyTransform(t), n.position != null) {
				var l = Vi;
				n.layoutRect ? l.copy(n.layoutRect) : l.copy(this.getBoundingRect()), r || l.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Bi, n, l) : Ft(Bi, n, l), i.x = Bi.x, i.y = Bi.y, a = Bi.align, o = Bi.verticalAlign;
				var u = n.origin;
				if (u && n.rotation != null) {
					var d = void 0, f = void 0;
					u === "center" ? (d = l.width * .5, f = l.height * .5) : (d = Pt(u[0], l.width), f = Pt(u[1], l.height)), c = !0, i.originX = -i.x + d + (r ? 0 : l.x), i.originY = -i.y + f + (r ? 0 : l.y);
				}
			}
			n.rotation != null && (i.rotation = n.rotation);
			var p = n.offset;
			p && (i.x += p[0], i.y += p[1], c || (i.originX = -p[0], i.originY = -p[1]));
			var m = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, h = this._innerTextDefaultStyle ||= {}, g = void 0, _ = void 0, v = void 0;
			m && this.canBeInsideText() ? (g = n.insideFill, _ = n.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (_ == null || _ === "auto") && (_ = this.getInsideTextStroke(g), v = !0)) : (g = n.outsideFill, _ = n.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (_ == null || _ === "auto") && (_ = this.getOutsideStroke(g), v = !0)), g ||= "#000", (g !== h.fill || _ !== h.stroke || v !== h.autoStroke || a !== h.align || o !== h.verticalAlign) && (s = !0, h.fill = g, h.stroke = _, h.autoStroke = v, h.align = a, h.verticalAlign = o, t.setDefaultTextStyle(h)), t.__dirty |= 1, s && t.dirtyStyle(!0);
		}
	}, e.prototype.canBeInsideText = function() {
		return !0;
	}, e.prototype.getInsideTextFill = function() {
		return "#fff";
	}, e.prototype.getInsideTextStroke = function(e) {
		return "#000";
	}, e.prototype.getOutsideFill = function() {
		return this.__zr && this.__zr.isDarkMode() ? Fi : Pi;
	}, e.prototype.getOutsideStroke = function(e) {
		var t = this.__zr && this.__zr.getBackgroundColor(), n = typeof t == "string" && wr(t);
		n ||= [
			255,
			255,
			255,
			1
		];
		for (var r = n[3], i = this.__zr.isDarkMode(), a = 0; a < 3; a++) n[a] = n[a] * r + (i ? 0 : 255) * (1 - r);
		return n[3] = 1, Fr(n, "rgba");
	}, e.prototype.traverse = function(e, t) {}, e.prototype.attrKV = function(e, t) {
		e === "textConfig" ? this.setTextConfig(t) : e === "textContent" ? this.setTextContent(t) : e === "clipPath" ? this.setClipPath(t) : e === "extra" ? (this.extra = this.extra || {}, N(this.extra, t)) : this[e] = t;
	}, e.prototype.hide = function() {
		this.ignore = !0, this.markRedraw();
	}, e.prototype.show = function() {
		this.ignore = !1, this.markRedraw();
	}, e.prototype.attr = function(e, t) {
		if (typeof e == "string") this.attrKV(e, t);
		else if (G(e)) for (var n = B(e), r = 0; r < n.length; r++) {
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
		t ||= this._normalState = {}, e.textConfig && !t.textConfig && (t.textConfig = this.textConfig), this._savePrimaryToNormal(e, t, Ri);
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
		this.useState(Li, !1, e);
	}, e.prototype.useState = function(e, t, n, r) {
		var i = e === Li;
		if (this.hasState() || !i) {
			var a = this.currentStates, o = this.stateTransition;
			if (!(F(a, e) >= 0 && (t || a.length === 1))) {
				var s;
				if (this.stateProxy && !i && (s = this.stateProxy(e)), s ||= this.states && this.states[e], !s && !i) ee("State " + e + " not exists.");
				else {
					i || this.saveCurrentToNormalState(s);
					var c = !!(s && s.hoverLayer || r);
					c && this._toggleHoverLayerFlag(!0), this._applyStateObj(e, s, this._normalState, t, !n && !this.__inHover && o && o.duration > 0, o);
					var l = this._textContent, u = this._textGuide;
					return l && l.useState(e, t, n, c), u && u.useState(e, t, n, c), i ? (this.currentStates = [], this._normalState = {}) : t ? this.currentStates.push(e) : this.currentStates = [e], this._updateAnimationTargets(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2), s;
				}
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
			var u = r[a - 1], d = !!(u && u.hoverLayer || n);
			d && this._toggleHoverLayerFlag(!0);
			var f = this._mergeStates(r), p = this.stateTransition;
			this.saveCurrentToNormalState(f), this._applyStateObj(e.join(","), f, this._normalState, !1, !t && !this.__inHover && p && p.duration > 0, p);
			var m = this._textContent, h = this._textGuide;
			m && m.useStates(e, t, d), h && h.useStates(e, t, d), this._updateAnimationTargets(), this.currentStates = e.slice(), this.markRedraw(), !d && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2);
		}
	}, e.prototype.isSilent = function() {
		for (var e = this.silent, t = this.parent; !e && t;) {
			if (t.silent) {
				e = !0;
				break;
			}
			t = t.parent;
		}
		return e;
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
		var o = !(t && r);
		t && t.textConfig ? (this.textConfig = N({}, r ? this.textConfig : n.textConfig), N(this.textConfig, t.textConfig)) : o && n.textConfig && (this.textConfig = n.textConfig);
		for (var s = {}, c = !1, l = 0; l < Ri.length; l++) {
			var u = Ri[l], d = i && zi[u];
			t && t[u] != null ? d ? (c = !0, s[u] = t[u]) : this[u] = t[u] : o && n[u] != null && (d ? (c = !0, s[u] = n[u]) : this[u] = n[u]);
		}
		if (!i) for (var l = 0; l < this.animators.length; l++) {
			var f = this.animators[l], p = f.targetName;
			f.getLoop() || f.__changeFinalValue(p ? (t || n)[p] : t || n);
		}
		c && this._transitionState(e, s, a);
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
		t !== e && (t && t !== e && this.removeTextContent(), e.innerTransformable = new Mn(), this._attachComponent(e), this._textContent = e, this.markRedraw());
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
	}, e.prototype._toggleHoverLayerFlag = function(e) {
		this.__inHover = e;
		var t = this._textContent, n = this._textGuide;
		t && (t.__inHover = e), n && (n.__inHover = e);
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
		var r = new ki(e ? this[e] : this, t, n);
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
		Ui(this, e, t, n);
	}, e.prototype.animateFrom = function(e, t, n) {
		Ui(this, e, t, n, !0);
	}, e.prototype._transitionState = function(e, t, n, r) {
		for (var i = Ui(this, t, n, r), a = 0; a < i.length; a++) i[a].__fromStateTransition = e;
	}, e.prototype.getBoundingRect = function() {
		return null;
	}, e.prototype.getPaintRect = function() {
		return null;
	}, e.initDefaultProps = (function() {
		var t = e.prototype;
		t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = 1;
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
ie(Hi, Ai), ie(Hi, Mn);
function Ui(e, t, n, r, i) {
	n ||= {};
	var a = [];
	Yi(e, "", e, t, n, r, a, i);
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
function Wi(e, t, n) {
	for (var r = 0; r < n; r++) e[r] = t[r];
}
function Gi(e) {
	return ae(e[0]);
}
function Ki(e, t, n) {
	if (ae(t[n])) {
		if (ae(e[n]) || (e[n] = []), fe(t[n])) {
			var r = t[n].length;
			e[n].length !== r && (e[n] = new t[n].constructor(r), Wi(e[n], t[n], r));
		} else {
			var i = t[n], a = e[n], o = i.length;
			if (Gi(i)) for (var s = i[0].length, c = 0; c < o; c++) a[c] ? Wi(a[c], i[c], s) : a[c] = Array.prototype.slice.call(i[c]);
			else Wi(a, i, o);
			a.length = i.length;
		}
	} else e[n] = t[n];
}
function qi(e, t) {
	return e === t || ae(e) && ae(t) && Ji(e, t);
}
function Ji(e, t) {
	var n = e.length;
	if (n !== t.length) return !1;
	for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
	return !0;
}
function Yi(e, t, n, r, i, a, o, s) {
	for (var c = B(r), l = i.duration, u = i.delay, d = i.additive, f = i.setToFinal, p = !G(a), m = e.animators, h = [], g = 0; g < c.length; g++) {
		var _ = c[g], v = r[_];
		if (v != null && n[_] != null && (p || a[_])) {
			if (G(v) && !ae(v) && !me(v)) {
				if (t) {
					s || (n[_] = v, e.updateDuringAnimation(t));
					continue;
				}
				Yi(e, _, n[_], v, i, a && a[_], o, s);
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
	if (i.force || (h = R(h, function(e) {
		return !qi(r[e], n[e]);
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
				T[_] = hi(n[_]), Ki(n, r, _);
			}
		}
		var x = new ki(n, !1, !1, d ? R(m, function(e) {
			return e.targetName === t;
		}) : null);
		x.targetName = t, i.scope && (x.scope = i.scope), f && C && x.whenWithKeys(0, C, h), T && x.whenWithKeys(0, T, h), x.whenWithKeys(l ?? 500, s ? w : r, h).delay(u || 0), e.addAnimator(x, t), o.push(x);
	}
}
//#endregion
//#region node_modules/zrender/lib/graphic/Displayable.js
var Xi = "__zr_style_" + Math.round(Math.random() * 10), Zi = {
	shadowBlur: 0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	shadowColor: "#000",
	opacity: 1,
	blend: "source-over"
}, Qi = { style: {
	shadowBlur: !0,
	shadowOffsetX: !0,
	shadowOffsetY: !0,
	shadowColor: !0,
	opacity: !0
} };
Zi[Xi] = !0;
var $i = [
	"z",
	"z2",
	"invisible"
], ea = ["invisible"], ta = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype._init = function(t) {
		for (var n = B(t), r = 0; r < n.length; r++) {
			var i = n[r];
			i === "style" ? this.useStyle(t[i]) : e.prototype.attrKV.call(this, i, t[i]);
		}
		this.style || this.useStyle({});
	}, t.prototype.beforeBrush = function() {}, t.prototype.afterBrush = function() {}, t.prototype.innerBeforeBrush = function() {}, t.prototype.innerAfterBrush = function() {}, t.prototype.shouldBePainted = function(e, t, n, r) {
		var i = this.transform;
		if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && ia(this, e, t) || i && !i[0] && !i[3]) return !1;
		if (n && this.__clipPaths) {
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
			e = this._paintRect ||= new Z(0, 0, 0, 0), t ? Z.applyTransform(e, n, t) : e.copy(n), (i || a || o) && (e.width += i * 2 + Math.abs(a), e.height += i * 2 + Math.abs(o), e.x = Math.min(e.x, e.x + a - i), e.y = Math.min(e.y, e.y + o - i));
			var s = this.dirtyRectTolerance;
			e.isZero() || (e.x = Math.floor(e.x - s), e.y = Math.floor(e.y - s), e.width = Math.ceil(e.width + 1 + s * 2), e.height = Math.ceil(e.height + 1 + s * 2));
		}
		return e;
	}, t.prototype.setPrevPaintRect = function(e) {
		e ? (this._prevPaintRect = this._prevPaintRect || new Z(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
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
		return Me(Zi, e);
	}, t.prototype.useStyle = function(e) {
		e[Xi] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
	}, t.prototype.isStyleObject = function(e) {
		return e[Xi];
	}, t.prototype._innerSaveToNormal = function(t) {
		e.prototype._innerSaveToNormal.call(this, t);
		var n = this._normalState;
		t.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(t, n, $i);
	}, t.prototype._applyStateObj = function(t, n, r, i, a, o) {
		e.prototype._applyStateObj.call(this, t, n, r, i, a, o);
		var s = !(n && i), c;
		if (n && n.style ? a ? i ? c = n.style : (c = this._mergeStyle(this.createStyle(), r.style), this._mergeStyle(c, n.style)) : (c = this._mergeStyle(this.createStyle(), i ? this.style : r.style), this._mergeStyle(c, n.style)) : s && (c = r.style), c) {
			if (a) {
				var l = this.style;
				if (this.style = this.createStyle(s ? {} : l), s) for (var u = B(l), d = 0; d < u.length; d++) {
					var f = u[d];
					f in c && (c[f] = c[f], this.style[f] = l[f]);
				}
				for (var p = B(c), d = 0; d < p.length; d++) {
					var f = p[d];
					this.style[f] = this.style[f];
				}
				this._transitionState(t, { style: c }, o, this.getAnimationStyleProps());
			} else this.useStyle(c);
		}
		for (var m = this.__inHover ? ea : $i, d = 0; d < m.length; d++) {
			var f = m[d];
			n && n[f] != null ? this[f] = n[f] : s && r[f] != null && (this[f] = r[f]);
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
		return Qi;
	}, t.initDefaultProps = (function() {
		var e = t.prototype;
		e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = 3;
	})(), t;
}(Hi), na = new Z(0, 0, 0, 0), ra = new Z(0, 0, 0, 0);
function ia(e, t, n) {
	return na.copy(e.getBoundingRect()), e.transform && na.applyTransform(e.transform), ra.width = t, ra.height = n, !na.intersect(ra);
}
//#endregion
//#region node_modules/zrender/lib/core/bbox.js
var aa = Math.min, oa = Math.max, sa = Math.sin, ca = Math.cos, la = Math.PI * 2, ua = $t(), da = $t(), fa = $t();
function pa(e, t, n, r, i, a) {
	i[0] = aa(e, n), i[1] = aa(t, r), a[0] = oa(e, n), a[1] = oa(t, r);
}
var ma = [], ha = [];
function ga(e, t, n, r, i, a, o, s, c, l) {
	var u = Xn, d = qn, f = u(e, n, i, o, ma);
	c[0] = Infinity, c[1] = Infinity, l[0] = -Infinity, l[1] = -Infinity;
	for (var p = 0; p < f; p++) {
		var m = d(e, n, i, o, ma[p]);
		c[0] = aa(m, c[0]), l[0] = oa(m, l[0]);
	}
	f = u(t, r, a, s, ha);
	for (var p = 0; p < f; p++) {
		var h = d(t, r, a, s, ha[p]);
		c[1] = aa(h, c[1]), l[1] = oa(h, l[1]);
	}
	c[0] = aa(e, c[0]), l[0] = oa(e, l[0]), c[0] = aa(o, c[0]), l[0] = oa(o, l[0]), c[1] = aa(t, c[1]), l[1] = oa(t, l[1]), c[1] = aa(s, c[1]), l[1] = oa(s, l[1]);
}
function _a(e, t, n, r, i, a, o, s) {
	var c = rr, l = er, u = oa(aa(c(e, n, i), 1), 0), d = oa(aa(c(t, r, a), 1), 0), f = l(e, n, i, u), p = l(t, r, a, d);
	o[0] = aa(e, i, f), o[1] = aa(t, a, p), s[0] = oa(e, i, f), s[1] = oa(t, a, p);
}
function va(e, t, n, r, i, a, o, s, c) {
	var l = Cn, u = wn, d = Math.abs(i - a);
	if (d % la < 1e-4 && d > 1e-4) s[0] = e - n, s[1] = t - r, c[0] = e + n, c[1] = t + r;
	else {
		if (ua[0] = ca(i) * n + e, ua[1] = sa(i) * r + t, da[0] = ca(a) * n + e, da[1] = sa(a) * r + t, l(s, ua, da), u(c, ua, da), i %= la, i < 0 && (i += la), a %= la, a < 0 && (a += la), i > a && !o ? a += la : i < a && o && (i += la), o) {
			var f = a;
			a = i, i = f;
		}
		for (var p = 0; p < a; p += Math.PI / 2) p > i && (fa[0] = ca(p) * n + e, fa[1] = sa(p) * r + t, l(s, fa, s), u(c, fa, c));
	}
}
//#endregion
//#region node_modules/zrender/lib/core/PathProxy.js
var ya = {
	M: 1,
	L: 2,
	C: 3,
	Q: 4,
	A: 5,
	Z: 6,
	R: 7
}, ba = [], xa = [], Sa = [], Ca = [], wa = [], Ta = [], Ea = Math.min, Da = Math.max, Oa = Math.cos, ka = Math.sin, Aa = Math.abs, ja = Math.PI, Ma = ja * 2, Na = typeof Float32Array < "u", Pa = [];
function Fa(e) {
	return Math.round(e / ja * 1e8) / 1e8 % 2 * ja;
}
function Ia(e, t) {
	var n = Fa(e[0]);
	n < 0 && (n += Ma);
	var r = n - e[0], i = e[1];
	i += r, !t && i - n >= Ma ? i = n + Ma : t && n - i >= Ma ? i = n - Ma : !t && n > i ? i = n + (Ma - Fa(n - i)) : t && n < i && (i = n - (Ma - Fa(i - n))), e[0] = n, e[1] = i;
}
var La = function() {
	function e(e) {
		this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, e && (this._saveData = !1), this._saveData && (this.data = []);
	}
	return e.prototype.increaseVersion = function() {
		this._version++;
	}, e.prototype.getVersion = function() {
		return this._version;
	}, e.prototype.setScale = function(e, t, n) {
		n ||= 0, n > 0 && (this._ux = Aa(n / Mi / e) || 0, this._uy = Aa(n / Mi / t) || 0);
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
		return this._drawPendingPt(), this.addData(ya.M, e, t), this._ctx && this._ctx.moveTo(e, t), this._x0 = e, this._y0 = t, this._xi = e, this._yi = t, this;
	}, e.prototype.lineTo = function(e, t) {
		var n = Aa(e - this._xi), r = Aa(t - this._yi), i = n > this._ux || r > this._uy;
		if (this.addData(ya.L, e, t), this._ctx && i && this._ctx.lineTo(e, t), i) this._xi = e, this._yi = t, this._pendingPtDist = 0;
		else {
			var a = n * n + r * r;
			a > this._pendingPtDist && (this._pendingPtX = e, this._pendingPtY = t, this._pendingPtDist = a);
		}
		return this;
	}, e.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
		return this._drawPendingPt(), this.addData(ya.C, e, t, n, r, i, a), this._ctx && this._ctx.bezierCurveTo(e, t, n, r, i, a), this._xi = i, this._yi = a, this;
	}, e.prototype.quadraticCurveTo = function(e, t, n, r) {
		return this._drawPendingPt(), this.addData(ya.Q, e, t, n, r), this._ctx && this._ctx.quadraticCurveTo(e, t, n, r), this._xi = n, this._yi = r, this;
	}, e.prototype.arc = function(e, t, n, r, i, a) {
		this._drawPendingPt(), Pa[0] = r, Pa[1] = i, Ia(Pa, a), r = Pa[0], i = Pa[1];
		var o = i - r;
		return this.addData(ya.A, e, t, n, n, r, o, 0, +!a), this._ctx && this._ctx.arc(e, t, n, r, i, a), this._xi = Oa(i) * n + e, this._yi = ka(i) * n + t, this;
	}, e.prototype.arcTo = function(e, t, n, r, i) {
		return this._drawPendingPt(), this._ctx && this._ctx.arcTo(e, t, n, r, i), this;
	}, e.prototype.rect = function(e, t, n, r) {
		return this._drawPendingPt(), this._ctx && this._ctx.rect(e, t, n, r), this.addData(ya.R, e, t, n, r), this;
	}, e.prototype.closePath = function() {
		this._drawPendingPt(), this.addData(ya.Z);
		var e = this._ctx, t = this._x0, n = this._y0;
		return e && e.closePath(), this._xi = t, this._yi = n, this;
	}, e.prototype.fill = function(e) {
		e && e.fill(), this.toStatic();
	}, e.prototype.stroke = function(e) {
		e && e.stroke(), this.toStatic();
	}, e.prototype.len = function() {
		return this._len;
	}, e.prototype.setData = function(e) {
		var t = e.length;
		!(this.data && this.data.length === t) && Na && (this.data = new Float32Array(t));
		for (var n = 0; n < t; n++) this.data[n] = e[n];
		this._len = t;
	}, e.prototype.appendPath = function(e) {
		e instanceof Array || (e = [e]);
		for (var t = e.length, n = 0, r = this._len, i = 0; i < t; i++) n += e[i].len();
		Na && this.data instanceof Float32Array && (this.data = new Float32Array(r + n));
		for (var i = 0; i < t; i++) for (var a = e[i].data, o = 0; o < a.length; o++) this.data[r++] = a[o];
		this._len = r;
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
			e instanceof Array && (e.length = this._len, Na && this._len > 11 && (this.data = new Float32Array(e)));
		}
	}, e.prototype.getBoundingRect = function() {
		Sa[0] = Sa[1] = wa[0] = wa[1] = Number.MAX_VALUE, Ca[0] = Ca[1] = Ta[0] = Ta[1] = -Number.MAX_VALUE;
		for (var e = this.data, t = 0, n = 0, r = 0, i = 0, a = 0; a < this._len;) {
			var o = e[a++], s = a === 1;
			switch (s && (t = e[a], n = e[a + 1], r = t, i = n), o) {
				case ya.M:
					t = r = e[a++], n = i = e[a++], wa[0] = r, wa[1] = i, Ta[0] = r, Ta[1] = i;
					break;
				case ya.L:
					pa(t, n, e[a], e[a + 1], wa, Ta), t = e[a++], n = e[a++];
					break;
				case ya.C:
					ga(t, n, e[a++], e[a++], e[a++], e[a++], e[a], e[a + 1], wa, Ta), t = e[a++], n = e[a++];
					break;
				case ya.Q:
					_a(t, n, e[a++], e[a++], e[a], e[a + 1], wa, Ta), t = e[a++], n = e[a++];
					break;
				case ya.A:
					var c = e[a++], l = e[a++], u = e[a++], d = e[a++], f = e[a++], p = e[a++] + f;
					a += 1;
					var m = !e[a++];
					s && (r = Oa(f) * u + c, i = ka(f) * d + l), va(c, l, u, d, f, p, m, wa, Ta), t = Oa(p) * u + c, n = ka(p) * d + l;
					break;
				case ya.R:
					r = t = e[a++], i = n = e[a++];
					var h = e[a++], g = e[a++];
					pa(r, i, r + h, i + g, wa, Ta);
					break;
				case ya.Z: t = r, n = i;
			}
			Cn(Sa, Sa, wa), wn(Ca, Ca, Ta);
		}
		return a === 0 && (Sa[0] = Sa[1] = Ca[0] = Ca[1] = 0), new Z(Sa[0], Sa[1], Ca[0] - Sa[0], Ca[1] - Sa[1]);
	}, e.prototype._calculateLength = function() {
		var e = this.data, t = this._len, n = this._ux, r = this._uy, i = 0, a = 0, o = 0, s = 0;
		this._pathSegLen ||= [];
		for (var c = this._pathSegLen, l = 0, u = 0, d = 0; d < t;) {
			var f = e[d++], p = d === 1;
			p && (i = e[d], a = e[d + 1], o = i, s = a);
			var m = -1;
			switch (f) {
				case ya.M:
					i = o = e[d++], a = s = e[d++];
					break;
				case ya.L:
					var h = e[d++], g = e[d++], _ = h - i, v = g - a;
					(Aa(_) > n || Aa(v) > r || d === t - 1) && (m = Math.sqrt(_ * _ + v * v), i = h, a = g);
					break;
				case ya.C:
					var y = e[d++], b = e[d++], h = e[d++], g = e[d++], x = e[d++], S = e[d++];
					m = $n(i, a, y, b, h, g, x, S, 10), i = x, a = S;
					break;
				case ya.Q:
					var y = e[d++], b = e[d++], h = e[d++], g = e[d++];
					m = or(i, a, y, b, h, g, 10), i = h, a = g;
					break;
				case ya.A:
					var C = e[d++], w = e[d++], T = e[d++], E = e[d++], D = e[d++], O = e[d++], k = O + D;
					d += 1, p && (o = Oa(D) * T + C, s = ka(D) * E + w), m = Da(T, E) * Ea(Ma, Math.abs(O)), i = Oa(k) * T + C, a = ka(k) * E + w;
					break;
				case ya.R:
					o = i = e[d++], s = a = e[d++];
					var A = e[d++], ee = e[d++];
					m = A * 2 + ee * 2;
					break;
				case ya.Z:
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
			switch (C && (c = n[x], l = n[x + 1], o = c, s = l), S !== ya.L && v > 0 && (e.lineTo(y, b), v = 0), S) {
				case ya.M:
					o = c = n[x++], s = l = n[x++], e.moveTo(c, l);
					break;
				case ya.L:
					u = n[x++], d = n[x++];
					var w = Aa(u - c), T = Aa(d - l);
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
				case ya.C:
					var k = n[x++], A = n[x++], ee = n[x++], j = n[x++], M = n[x++], te = n[x++];
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var D = (_ - h) / E;
							Zn(c, k, ee, M, D, ba), Zn(l, A, j, te, D, xa), e.bezierCurveTo(ba[1], xa[1], ba[2], xa[2], ba[3], xa[3]);
							break lo;
						}
						h += E;
					}
					e.bezierCurveTo(k, A, ee, j, M, te), c = M, l = te;
					break;
				case ya.Q:
					var k = n[x++], A = n[x++], ee = n[x++], j = n[x++];
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var D = (_ - h) / E;
							ir(c, k, ee, D, ba), ir(l, A, j, D, xa), e.quadraticCurveTo(ba[1], xa[1], ba[2], xa[2]);
							break lo;
						}
						h += E;
					}
					e.quadraticCurveTo(k, A, ee, j), c = ee, l = j;
					break;
				case ya.A:
					var N = n[x++], P = n[x++], ne = n[x++], F = n[x++], re = n[x++], ie = n[x++], ae = n[x++], I = !n[x++], L = ne > F ? ne : F, oe = Aa(ne - F) > .001, R = re + ie, z = !1;
					if (f) {
						var E = p[g++];
						h + E > _ && (R = re + ie * (_ - h) / E, z = !0), h += E;
					}
					if (oe && e.ellipse ? e.ellipse(N, P, ne, F, ae, re, R, I) : e.arc(N, P, L, re, R, I), z) break lo;
					C && (o = Oa(re) * ne + N, s = ka(re) * F + P), c = Oa(R) * ne + N, l = ka(R) * F + P;
					break;
				case ya.R:
					o = c = n[x], s = l = n[x + 1], u = n[x++], d = n[x++];
					var B = n[x++], se = n[x++];
					if (f) {
						var E = p[g++];
						if (h + E > _) {
							var V = _ - h;
							e.moveTo(u, d), e.lineTo(u + Ea(V, B), d), V -= B, V > 0 && e.lineTo(u + B, d + Ea(V, se)), V -= se, V > 0 && e.lineTo(u + Da(B - V, 0), d + se), V -= B, V > 0 && e.lineTo(u, d + Da(se - V, 0));
							break lo;
						}
						h += E;
					}
					e.rect(u, d, B, se);
					break;
				case ya.Z:
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
	}, e.CMD = ya, e.initDefaultProps = (function() {
		var t = e.prototype;
		t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
	})(), e;
}();
//#endregion
//#region node_modules/zrender/lib/contain/line.js
function Ra(e, t, n, r, i, a, o) {
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
function za(e, t, n, r, i, a, o, s, c, l, u) {
	if (c === 0) return !1;
	var d = c;
	return u > t + d && u > r + d && u > a + d && u > s + d || u < t - d && u < r - d && u < a - d && u < s - d || l > e + d && l > n + d && l > i + d && l > o + d || l < e - d && l < n - d && l < i - d && l < o - d ? !1 : Qn(e, t, n, r, i, a, o, s, l, u, null) <= d / 2;
}
//#endregion
//#region node_modules/zrender/lib/contain/quadratic.js
function Ba(e, t, n, r, i, a, o, s, c) {
	if (o === 0) return !1;
	var l = o;
	return c > t + l && c > r + l && c > a + l || c < t - l && c < r - l && c < a - l || s > e + l && s > n + l && s > i + l || s < e - l && s < n - l && s < i - l ? !1 : ar(e, t, n, r, i, a, s, c, null) <= l / 2;
}
//#endregion
//#region node_modules/zrender/lib/contain/util.js
var Va = Math.PI * 2;
function Ha(e) {
	return e %= Va, e < 0 && (e += Va), e;
}
//#endregion
//#region node_modules/zrender/lib/contain/arc.js
var Ua = Math.PI * 2;
function Wa(e, t, n, r, i, a, o, s, c) {
	if (o === 0) return !1;
	var l = o;
	s -= e, c -= t;
	var u = Math.sqrt(s * s + c * c);
	if (u - l > n || u + l < n) return !1;
	if (Math.abs(r - i) % Ua < 1e-4) return !0;
	if (a) {
		var d = r;
		r = Ha(i), i = Ha(d);
	} else r = Ha(r), i = Ha(i);
	r > i && (i += Ua);
	var f = Math.atan2(c, s);
	return f < 0 && (f += Ua), f >= r && f <= i || f + Ua >= r && f + Ua <= i;
}
//#endregion
//#region node_modules/zrender/lib/contain/windingLine.js
function Ga(e, t, n, r, i, a) {
	if (a > t && a > r || a < t && a < r || r === t) return 0;
	var o = (a - t) / (r - t), s = r < t ? 1 : -1;
	(o === 1 || o === 0) && (s = r < t ? .5 : -.5);
	var c = o * (n - e) + e;
	return c === i ? Infinity : c > i ? s : 0;
}
//#endregion
//#region node_modules/zrender/lib/contain/path.js
var Ka = La.CMD, qa = Math.PI * 2, Ja = 1e-4;
function Ya(e, t) {
	return Math.abs(e - t) < Ja;
}
var Xa = [
	-1,
	-1,
	-1
], Za = [-1, -1];
function Qa() {
	var e = Za[0];
	Za[0] = Za[1], Za[1] = e;
}
function $a(e, t, n, r, i, a, o, s, c, l) {
	if (l > t && l > r && l > a && l > s || l < t && l < r && l < a && l < s) return 0;
	var u = Yn(t, r, a, s, l, Xa);
	if (u === 0) return 0;
	for (var d = 0, f = -1, p = void 0, m = void 0, h = 0; h < u; h++) {
		var g = Xa[h], _ = g === 0 || g === 1 ? .5 : 1;
		qn(e, n, i, o, g) < c || (f < 0 && (f = Xn(t, r, a, s, Za), Za[1] < Za[0] && f > 1 && Qa(), p = qn(t, r, a, s, Za[0]), f > 1 && (m = qn(t, r, a, s, Za[1]))), f === 2 ? g < Za[0] ? d += p < t ? _ : -_ : g < Za[1] ? d += m < p ? _ : -_ : d += s < m ? _ : -_ : g < Za[0] ? d += p < t ? _ : -_ : d += s < p ? _ : -_);
	}
	return d;
}
function eo(e, t, n, r, i, a, o, s) {
	if (s > t && s > r && s > a || s < t && s < r && s < a) return 0;
	var c = nr(t, r, a, s, Xa);
	if (c === 0) return 0;
	var l = rr(t, r, a);
	if (l >= 0 && l <= 1) {
		for (var u = 0, d = er(t, r, a, l), f = 0; f < c; f++) {
			var p = Xa[f] === 0 || Xa[f] === 1 ? .5 : 1, m = er(e, n, i, Xa[f]);
			m < o || (Xa[f] < l ? u += d < t ? p : -p : u += a < d ? p : -p);
		}
		return u;
	}
	var p = Xa[0] === 0 || Xa[0] === 1 ? .5 : 1, m = er(e, n, i, Xa[0]);
	return m < o ? 0 : a < t ? p : -p;
}
function to(e, t, n, r, i, a, o, s) {
	if (s -= t, s > n || s < -n) return 0;
	var c = Math.sqrt(n * n - s * s);
	Xa[0] = -c, Xa[1] = c;
	var l = Math.abs(r - i);
	if (l < 1e-4) return 0;
	if (l >= qa - 1e-4) {
		r = 0, i = qa;
		var u = a ? 1 : -1;
		return o >= Xa[0] + e && o <= Xa[1] + e ? u : 0;
	}
	if (r > i) {
		var d = r;
		r = i, i = d;
	}
	r < 0 && (r += qa, i += qa);
	for (var f = 0, p = 0; p < 2; p++) {
		var m = Xa[p];
		if (m + e > o) {
			var h = Math.atan2(s, m), u = a ? 1 : -1;
			h < 0 && (h = qa + h), (h >= r && h <= i || h + qa >= r && h + qa <= i) && (h > Math.PI / 2 && h < Math.PI * 1.5 && (u = -u), f += u);
		}
	}
	return f;
}
function no(e, t, n, r, i) {
	for (var a = e.data, o = e.len(), s = 0, c = 0, l = 0, u = 0, d = 0, f, p, m = 0; m < o;) {
		var h = a[m++], g = m === 1;
		switch (h === Ka.M && m > 1 && (n || (s += Ga(c, l, u, d, r, i))), g && (c = a[m], l = a[m + 1], u = c, d = l), h) {
			case Ka.M:
				u = a[m++], d = a[m++], c = u, l = d;
				break;
			case Ka.L:
				if (n) {
					if (Ra(c, l, a[m], a[m + 1], t, r, i)) return !0;
				} else s += Ga(c, l, a[m], a[m + 1], r, i) || 0;
				c = a[m++], l = a[m++];
				break;
			case Ka.C:
				if (n) {
					if (za(c, l, a[m++], a[m++], a[m++], a[m++], a[m], a[m + 1], t, r, i)) return !0;
				} else s += $a(c, l, a[m++], a[m++], a[m++], a[m++], a[m], a[m + 1], r, i) || 0;
				c = a[m++], l = a[m++];
				break;
			case Ka.Q:
				if (n) {
					if (Ba(c, l, a[m++], a[m++], a[m], a[m + 1], t, r, i)) return !0;
				} else s += eo(c, l, a[m++], a[m++], a[m], a[m + 1], r, i) || 0;
				c = a[m++], l = a[m++];
				break;
			case Ka.A:
				var _ = a[m++], v = a[m++], y = a[m++], b = a[m++], x = a[m++], S = a[m++];
				m += 1;
				var C = !!(1 - a[m++]);
				f = Math.cos(x) * y + _, p = Math.sin(x) * b + v, g ? (u = f, d = p) : s += Ga(c, l, f, p, r, i);
				var w = (r - _) * b / y + _;
				if (n) {
					if (Wa(_, v, b, x, x + S, C, t, w, i)) return !0;
				} else s += to(_, v, b, x, x + S, C, w, i);
				c = Math.cos(x + S) * y + _, l = Math.sin(x + S) * b + v;
				break;
			case Ka.R:
				u = c = a[m++], d = l = a[m++];
				var T = a[m++], E = a[m++];
				if (f = u + T, p = d + E, n) {
					if (Ra(u, d, f, d, t, r, i) || Ra(f, d, f, p, t, r, i) || Ra(f, p, u, p, t, r, i) || Ra(u, p, u, d, t, r, i)) return !0;
				} else s += Ga(f, d, f, p, r, i), s += Ga(u, p, u, d, r, i);
				break;
			case Ka.Z:
				if (n) {
					if (Ra(c, l, u, d, t, r, i)) return !0;
				} else s += Ga(c, l, u, d, r, i);
				c = u, l = d;
		}
	}
	return !n && !Ya(l, d) && (s += Ga(c, l, u, d, r, i) || 0), s !== 0;
}
function ro(e, t, n) {
	return no(e, 0, !1, t, n);
}
function io(e, t, n, r) {
	return no(e, t, !0, n, r);
}
//#endregion
//#region node_modules/zrender/lib/graphic/Path.js
var ao = P({
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
}, Zi), oo = { style: P({
	fill: !0,
	stroke: !0,
	strokePercent: !0,
	fillOpacity: !0,
	strokeOpacity: !0,
	lineDashOffset: !0,
	lineWidth: !0,
	miterLimit: !0
}, Qi.style) }, so = Nn.concat([
	"invisible",
	"culling",
	"z",
	"z2",
	"zlevel",
	"parent"
]), co = function(e) {
	c(t, e);
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
			for (var s = 0; s < so.length; ++s) i[so[s]] = this[so[s]];
			i.__dirty |= 1;
		} else this._decalEl &&= null;
	}, t.prototype.getDecalElement = function() {
		return this._decalEl;
	}, t.prototype._init = function(t) {
		var n = B(t);
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
			if (W(e)) {
				var t = Ir(e, 0);
				return t > .5 ? Pi : t > .2 ? Ii : Fi;
			}
			if (e) return Fi;
		}
		return Pi;
	}, t.prototype.getInsideTextStroke = function(e) {
		var t = this.style.fill;
		if (W(t)) {
			var n = this.__zr;
			if (!!(n && n.isDarkMode()) == Ir(e, 0) < .4) return t;
		}
	}, t.prototype.buildPath = function(e, t, n) {}, t.prototype.pathUpdated = function() {
		this.__dirty &= -5;
	}, t.prototype.getUpdatedPathProxy = function(e) {
		return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
	}, t.prototype.createPathProxy = function() {
		this.path = new La(!1);
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
				if (s > 1e-10 && (this.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), io(a, o / s, e, t))) return !0;
			}
			if (this.hasFill()) return ro(a, e, t);
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
		return Me(ao, e);
	}, t.prototype._innerSaveToNormal = function(t) {
		e.prototype._innerSaveToNormal.call(this, t);
		var n = this._normalState;
		t.shape && !n.shape && (n.shape = N({}, this.shape));
	}, t.prototype._applyStateObj = function(t, n, r, i, a, o) {
		e.prototype._applyStateObj.call(this, t, n, r, i, a, o);
		var s = !(n && i), c;
		if (n && n.shape ? a ? i ? c = n.shape : (c = N({}, r.shape), N(c, n.shape)) : (c = N({}, i ? this.shape : r.shape), N(c, n.shape)) : s && (c = r.shape), c) {
			if (a) {
				this.shape = N({}, this.shape);
				for (var l = {}, u = B(c), d = 0; d < u.length; d++) {
					var f = u[d];
					typeof c[f] == "object" ? this.shape[f] = c[f] : l[f] = c[f];
				}
				this._transitionState(t, { shape: l }, o);
			} else this.shape = c, this.dirtyShape();
		}
	}, t.prototype._mergeStates = function(t) {
		for (var n = e.prototype._mergeStates.call(this, t), r, i = 0; i < t.length; i++) {
			var a = t[i];
			a.shape && (r ||= {}, this._mergeStyle(r, a.shape));
		}
		return r && (n.shape = r), n;
	}, t.prototype.getAnimationStyleProps = function() {
		return oo;
	}, t.prototype.isZeroArea = function() {
		return !1;
	}, t.extend = function(e) {
		var n = function(t) {
			c(n, t);
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
}(ta), lo = P({
	strokeFirst: !0,
	font: l,
	x: 0,
	y: 0,
	textAlign: "left",
	textBaseline: "top",
	miterLimit: 2
}, ao), uo = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.hasStroke = function() {
		var e = this.style, t = e.stroke;
		return t != null && t !== "none" && e.lineWidth > 0;
	}, t.prototype.hasFill = function() {
		var e = this.style.fill;
		return e != null && e !== "none";
	}, t.prototype.createStyle = function(e) {
		return Me(lo, e);
	}, t.prototype.setBoundingRect = function(e) {
		this._rect = e;
	}, t.prototype.getBoundingRect = function() {
		var e = this.style;
		if (!this._rect) {
			var t = e.text;
			t == null ? t = "" : t += "";
			var n = At(t, e.font, e.textAlign, e.textBaseline);
			if (n.x += e.x || 0, n.y += e.y || 0, this.hasStroke()) {
				var r = e.lineWidth;
				n.x -= r / 2, n.y -= r / 2, n.width += r, n.height += r;
			}
			this._rect = n;
		}
		return this._rect;
	}, t.initDefaultProps = (function() {
		var e = t.prototype;
		e.dirtyRectTolerance = 10;
	})(), t;
}(ta);
uo.prototype.type = "tspan";
//#endregion
//#region node_modules/zrender/lib/graphic/Image.js
var fo = P({
	x: 0,
	y: 0
}, Zi), po = { style: P({
	x: !0,
	y: !0,
	width: !0,
	height: !0,
	sx: !0,
	sy: !0,
	sWidth: !0,
	sHeight: !0
}, Qi.style) };
function mo(e) {
	return !!(e && typeof e != "string" && e.width && e.height);
}
var ho = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.createStyle = function(e) {
		return Me(fo, e);
	}, t.prototype._getSize = function(e) {
		var t = this.style, n = t[e];
		if (n != null) return n;
		var r = mo(t.image) ? t.image : this.__image;
		if (!r) return 0;
		var i = e === "width" ? "height" : "width", a = t[i];
		return a == null ? r[e] : r[e] / r[i] * a;
	}, t.prototype.getWidth = function() {
		return this._getSize("width");
	}, t.prototype.getHeight = function() {
		return this._getSize("height");
	}, t.prototype.getAnimationStyleProps = function() {
		return po;
	}, t.prototype.getBoundingRect = function() {
		var e = this.style;
		return this._rect ||= new Z(e.x || 0, e.y || 0, this.getWidth(), this.getHeight()), this._rect;
	}, t;
}(ta);
ho.prototype.type = "image";
//#endregion
//#region node_modules/zrender/lib/graphic/helper/roundRect.js
function go(e, t) {
	var n = t.x, r = t.y, i = t.width, a = t.height, o = t.r, s, c, l, u;
	i < 0 && (n += i, i = -i), a < 0 && (r += a, a = -a), typeof o == "number" ? s = c = l = u = o : o instanceof Array ? o.length === 1 ? s = c = l = u = o[0] : o.length === 2 ? (s = l = o[0], c = u = o[1]) : o.length === 3 ? (s = o[0], c = u = o[1], l = o[2]) : (s = o[0], c = o[1], l = o[2], u = o[3]) : s = c = l = u = 0;
	var d;
	s + c > i && (d = s + c, s *= i / d, c *= i / d), l + u > i && (d = l + u, l *= i / d, u *= i / d), c + l > a && (d = c + l, c *= a / d, l *= a / d), s + u > a && (d = s + u, s *= a / d, u *= a / d), e.moveTo(n + s, r), e.lineTo(n + i - c, r), c !== 0 && e.arc(n + i - c, r + c, c, -Math.PI / 2, 0), e.lineTo(n + i, r + a - l), l !== 0 && e.arc(n + i - l, r + a - l, l, 0, Math.PI / 2), e.lineTo(n + u, r + a), u !== 0 && e.arc(n + u, r + a - u, u, Math.PI / 2, Math.PI), e.lineTo(n, r + s), s !== 0 && e.arc(n + s, r + s, s, Math.PI, Math.PI * 1.5);
}
//#endregion
//#region node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
var _o = Math.round;
function vo(e, t, n) {
	if (t) {
		var r = t.x1, i = t.x2, a = t.y1, o = t.y2;
		e.x1 = r, e.x2 = i, e.y1 = a, e.y2 = o;
		var s = n && n.lineWidth;
		return s && (_o(r * 2) === _o(i * 2) && (e.x1 = e.x2 = bo(r, s, !0)), _o(a * 2) === _o(o * 2) && (e.y1 = e.y2 = bo(a, s, !0))), e;
	}
}
function yo(e, t, n) {
	if (t) {
		var r = t.x, i = t.y, a = t.width, o = t.height;
		e.x = r, e.y = i, e.width = a, e.height = o;
		var s = n && n.lineWidth;
		return s && (e.x = bo(r, s, !0), e.y = bo(i, s, !0), e.width = Math.max(bo(r + a, s, !1) - e.x, a === 0 ? 0 : 1), e.height = Math.max(bo(i + o, s, !1) - e.y, o === 0 ? 0 : 1)), e;
	}
}
function bo(e, t, n) {
	if (!t) return e;
	var r = _o(e * 2);
	return (r + _o(t)) % 2 == 0 ? r / 2 : (r + (n ? 1 : -1)) / 2;
}
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Rect.js
var xo = function() {
	function e() {
		this.x = 0, this.y = 0, this.width = 0, this.height = 0;
	}
	return e;
}(), So = {}, Co = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new xo();
	}, t.prototype.buildPath = function(e, t) {
		var n, r, i, a;
		if (this.subPixelOptimize) {
			var o = yo(So, t, this.style);
			n = o.x, r = o.y, i = o.width, a = o.height, o.r = t.r, t = o;
		} else n = t.x, r = t.y, i = t.width, a = t.height;
		t.r ? go(e, t) : e.rect(n, r, i, a);
	}, t.prototype.isZeroArea = function() {
		return !this.shape.width || !this.shape.height;
	}, t;
}(co);
Co.prototype.type = "rect";
//#endregion
//#region node_modules/zrender/lib/graphic/Text.js
var wo = { fill: "#000" }, To = 2, Eo = { style: P({
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
}, Qi.style) }, Do = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.type = "text", n._children = [], n._defaultStyle = wo, n.attr(t), n;
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
		this._childCursor = 0, Po(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
	}, t.prototype.addSelfToZr = function(t) {
		e.prototype.addSelfToZr.call(this, t);
		for (var n = 0; n < this._children.length; n++) this._children[n].__zr = t;
	}, t.prototype.removeSelfFromZr = function(t) {
		e.prototype.removeSelfFromZr.call(this, t);
		for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null;
	}, t.prototype.getBoundingRect = function() {
		if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
			for (var e = new Z(0, 0, 0, 0), t = this._children, n = [], r = null, i = 0; i < t.length; i++) {
				var a = t[i], o = a.getBoundingRect(), s = a.getLocalTransform(n);
				s ? (e.copy(o), e.applyTransform(s), r ||= e.clone(), r.union(e)) : (r ||= o.clone(), r.union(o));
			}
			this._rect = r || e;
		}
		return this._rect;
	}, t.prototype.setDefaultTextStyle = function(e) {
		this._defaultStyle = e || wo;
	}, t.prototype.setTextContent = function(e) {}, t.prototype._mergeStyle = function(e, t) {
		if (!t) return e;
		var n = t.rich, r = e.rich || n && {};
		return N(e, t), n && r ? (this._mergeRich(r, n), e.rich = r) : r && (e.rich = r), e;
	}, t.prototype._mergeRich = function(e, t) {
		for (var n = B(t), r = 0; r < n.length; r++) {
			var i = n[r];
			e[i] = e[i] || {}, N(e[i], t[i]);
		}
	}, t.prototype.getAnimationStyleProps = function() {
		return Eo;
	}, t.prototype._getOrCreateChild = function(e) {
		var t = this._children[this._childCursor];
		return (!t || !(t instanceof e)) && (t = new e()), this._children[this._childCursor++] = t, t.__zr = this.__zr, t.parent = this, t;
	}, t.prototype._updatePlainTexts = function() {
		var e = this.style, t = e.font || "12px sans-serif", n = e.padding, r = Ht(zo(e), e), i = Bo(e), a = !!e.backgroundColor, o = r.outerHeight, s = r.outerWidth, c = r.contentWidth, l = r.lines, u = r.lineHeight, d = this._defaultStyle;
		this.isTruncated = !!r.isTruncated;
		var f = e.x || 0, p = e.y || 0, m = e.align || d.align || "left", h = e.verticalAlign || d.verticalAlign || "top", g = f, _ = Mt(p, r.contentHeight, h);
		if (i || n) {
			var v = jt(f, s, m), y = Mt(p, o, h);
			i && this._renderBackground(e, e, v, y, s, o);
		}
		_ += u / 2, n && (g = Ro(f, m, n), h === "top" ? _ += n[0] : h === "bottom" && (_ -= n[2]));
		for (var b = 0, x = !1, S = Lo("fill" in e ? e.fill : (x = !0, d.fill)), C = Io("stroke" in e ? e.stroke : !a && (!d.autoStroke || x) ? (b = To, d.stroke) : null), w = e.textShadowBlur > 0, T = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), E = r.calculatedLineHeight, D = 0; D < l.length; D++) {
			var O = this._getOrCreateChild(uo), k = O.createStyle();
			O.useStyle(k), k.text = l[D], k.x = g, k.y = _, m && (k.textAlign = m), k.textBaseline = "middle", k.opacity = e.opacity, k.strokeFirst = !0, w && (k.shadowBlur = e.textShadowBlur || 0, k.shadowColor = e.textShadowColor || "transparent", k.shadowOffsetX = e.textShadowOffsetX || 0, k.shadowOffsetY = e.textShadowOffsetY || 0), k.stroke = C, k.fill = S, C && (k.lineWidth = e.lineWidth || b, k.lineDash = e.lineDash, k.lineDashOffset = e.lineDashOffset || 0), k.font = t, Mo(k, e), _ += u, T && O.setBoundingRect(new Z(jt(k.x, c, k.textAlign), Mt(k.y, E, k.textBaseline), c, E));
		}
	}, t.prototype._updateRichTexts = function() {
		var e = this.style, t = Kt(zo(e), e), n = t.width, r = t.outerWidth, i = t.outerHeight, a = e.padding, o = e.x || 0, s = e.y || 0, c = this._defaultStyle, l = e.align || c.align, u = e.verticalAlign || c.verticalAlign;
		this.isTruncated = !!t.isTruncated;
		var d = jt(o, r, l), f = Mt(s, i, u), p = d, m = f;
		a && (p += a[3], m += a[0]);
		var h = p + n;
		Bo(e) && this._renderBackground(e, e, d, f, r, i);
		for (var g = !!e.backgroundColor, _ = 0; _ < t.lines.length; _++) {
			for (var v = t.lines[_], y = v.tokens, b = y.length, x = v.lineHeight, S = v.width, C = 0, w = p, T = h, E = b - 1, D = void 0; C < b && (D = y[C], !D.align || D.align === "left");) this._placeToken(D, e, x, m, w, "left", g), S -= D.width, w += D.width, C++;
			for (; E >= 0 && (D = y[E], D.align === "right");) this._placeToken(D, e, x, m, T, "right", g), S -= D.width, T -= D.width, E--;
			for (w += (n - (w - p) - (h - T) - S) / 2; C <= E;) D = y[C], this._placeToken(D, e, x, m, w + D.width / 2, "center", g), w += D.width, C++;
			m += x;
		}
	}, t.prototype._placeToken = function(e, t, n, r, i, a, o) {
		var s = t.rich[e.styleName] || {};
		s.text = e.text;
		var c = e.verticalAlign, l = r + n / 2;
		c === "top" ? l = r + e.height / 2 : c === "bottom" && (l = r + n - e.height / 2), !e.isLineHolder && Bo(s) && this._renderBackground(s, t, a === "right" ? i - e.width : a === "center" ? i - e.width / 2 : i, l - e.height / 2, e.width, e.height);
		var u = !!s.backgroundColor, d = e.textPadding;
		d && (i = Ro(i, a, d), l -= e.height / 2 - d[0] - e.innerHeight / 2);
		var f = this._getOrCreateChild(uo), p = f.createStyle();
		f.useStyle(p);
		var m = this._defaultStyle, h = !1, g = 0, _ = Lo("fill" in s ? s.fill : "fill" in t ? t.fill : (h = !0, m.fill)), v = Io("stroke" in s ? s.stroke : "stroke" in t ? t.stroke : !u && !o && (!m.autoStroke || h) ? (g = To, m.stroke) : null), y = s.textShadowBlur > 0 || t.textShadowBlur > 0;
		p.text = e.text, p.x = i, p.y = l, y && (p.shadowBlur = s.textShadowBlur || t.textShadowBlur || 0, p.shadowColor = s.textShadowColor || t.textShadowColor || "transparent", p.shadowOffsetX = s.textShadowOffsetX || t.textShadowOffsetX || 0, p.shadowOffsetY = s.textShadowOffsetY || t.textShadowOffsetY || 0), p.textAlign = a, p.textBaseline = "middle", p.font = e.font || "12px sans-serif", p.opacity = ye(s.opacity, t.opacity, 1), Mo(p, s), v && (p.lineWidth = ye(s.lineWidth, t.lineWidth, g), p.lineDash = K(s.lineDash, t.lineDash), p.lineDashOffset = t.lineDashOffset || 0, p.stroke = v), _ && (p.fill = _);
		var b = e.contentWidth, x = e.contentHeight;
		f.setBoundingRect(new Z(jt(p.x, b, p.textAlign), Mt(p.y, x, p.textBaseline), b, x));
	}, t.prototype._renderBackground = function(e, t, n, r, i, a) {
		var o = e.backgroundColor, s = e.borderWidth, c = e.borderColor, l = o && o.image, u = o && !l, d = e.borderRadius, f = this, p, m;
		if (u || e.lineHeight || s && c) {
			p = this._getOrCreateChild(Co), p.useStyle(p.createStyle()), p.style.fill = null;
			var h = p.shape;
			h.x = n, h.y = r, h.width = i, h.height = a, h.r = d, p.dirtyShape();
		}
		if (u) {
			var g = p.style;
			g.fill = o || null, g.fillOpacity = K(e.fillOpacity, 1);
		} else if (l) {
			m = this._getOrCreateChild(ho), m.onload = function() {
				f.dirtyStyle();
			};
			var _ = m.style;
			_.image = o.image, _.x = n, _.y = r, _.width = i, _.height = a;
		}
		if (s && c) {
			var g = p.style;
			g.lineWidth = s, g.stroke = c, g.strokeOpacity = K(e.strokeOpacity, 1), g.lineDash = e.borderDash, g.lineDashOffset = e.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (g.strokeFirst = !0, g.lineWidth *= 2);
		}
		var v = (p || m).style;
		v.shadowBlur = e.shadowBlur || 0, v.shadowColor = e.shadowColor || "transparent", v.shadowOffsetX = e.shadowOffsetX || 0, v.shadowOffsetY = e.shadowOffsetY || 0, v.opacity = ye(e.opacity, t.opacity, 1);
	}, t.makeFont = function(e) {
		var t = "";
		return No(e) && (t = [
			e.fontStyle,
			e.fontWeight,
			jo(e.fontSize),
			e.fontFamily || "sans-serif"
		].join(" ")), t && Ce(t) || e.textFont || e.font;
	}, t;
}(ta), Oo = {
	left: !0,
	right: 1,
	center: 1
}, ko = {
	top: 1,
	bottom: 1,
	middle: 1
}, Ao = [
	"fontStyle",
	"fontWeight",
	"fontSize",
	"fontFamily"
];
function jo(e) {
	return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? "12px" : e + "px";
}
function Mo(e, t) {
	for (var n = 0; n < Ao.length; n++) {
		var r = Ao[n], i = t[r];
		i != null && (e[r] = i);
	}
}
function No(e) {
	return e.fontSize != null || e.fontFamily || e.fontWeight;
}
function Po(e) {
	return Fo(e), I(e.rich, Fo), e;
}
function Fo(e) {
	if (e) {
		e.font = Do.makeFont(e);
		var t = e.align;
		t === "middle" && (t = "center"), e.align = t == null || Oo[t] ? t : "left";
		var n = e.verticalAlign;
		n === "center" && (n = "middle"), e.verticalAlign = n == null || ko[n] ? n : "top", e.padding &&= xe(e.padding);
	}
}
function Io(e, t) {
	return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function Lo(e) {
	return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function Ro(e, t, n) {
	return t === "right" ? e - n[1] : t === "center" ? e + n[3] / 2 - n[1] / 2 : e + n[3];
}
function zo(e) {
	var t = e.text;
	return t != null && (t += ""), t;
}
function Bo(e) {
	return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor);
}
//#endregion
//#region node_modules/echarts/lib/util/number.js
var Vo = 1e-4, Ho = 20;
function Uo(e) {
	return e.replace(/^\s+|\s+$/g, "");
}
function Wo(e, t, n, r) {
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
function Go(e, t) {
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
	return W(e) ? Uo(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : e == null ? NaN : +e;
}
function Ko(e, t, n) {
	return t ??= 10, t = Math.min(Math.max(0, t), Ho), e = (+e).toFixed(t), n ? e : +e;
}
function qo(e) {
	return e.sort(function(e, t) {
		return e - t;
	}), e;
}
function Jo(e) {
	if (e = +e, isNaN(e)) return 0;
	if (e > 1e-14) {
		for (var t = 1, n = 0; n < 15; n++, t *= 10) if (Math.round(e * t) / t === e) return n;
	}
	return Yo(e);
}
function Yo(e) {
	var t = e.toString().toLowerCase(), n = t.indexOf("e"), r = n > 0 ? +t.slice(n + 1) : 0, i = n > 0 ? n : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
	return Math.max(0, o - r);
}
function Xo(e, t) {
	var n = Math.log, r = Math.LN10, i = Math.floor(n(e[1] - e[0]) / r), a = Math.round(n(Math.abs(t[1] - t[0])) / r), o = Math.min(Math.max(-i + a, 0), 20);
	return isFinite(o) ? o : 20;
}
function Zo(e, t, n) {
	return e[t] && Qo(e, n)[t] || 0;
}
function Qo(e, t) {
	var n = oe(e, function(e, t) {
		return e + (isNaN(t) ? 0 : t);
	}, 0);
	if (n === 0) return [];
	for (var r = 10 ** t, i = L(e, function(e) {
		return (isNaN(e) ? 0 : e) / n * r * 100;
	}), a = r * 100, o = L(i, function(e) {
		return Math.floor(e);
	}), s = oe(o, function(e, t) {
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
function $o(e, t) {
	var n = Math.max(Jo(e), Jo(t)), r = e + t;
	return n > Ho ? r : Ko(r, n);
}
var es = 9007199254740991;
function ts(e) {
	var t = Math.PI * 2;
	return (e % t + t) % t;
}
function ns(e) {
	return e > -Vo && e < Vo;
}
var rs = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function is(e) {
	if (e instanceof Date) return e;
	if (W(e)) {
		var t = rs.exec(e);
		if (!t) return /* @__PURE__ */ new Date(NaN);
		if (t[8]) {
			var n = +t[4] || 0;
			return t[8].toUpperCase() !== "Z" && (n -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], (t[2] || 1) - 1, +t[3] || 1, n, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
		}
		return new Date(+t[1], (t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
	}
	return e == null ? /* @__PURE__ */ new Date(NaN) : new Date(Math.round(e));
}
function as(e) {
	return 10 ** os(e);
}
function os(e) {
	if (e === 0) return 0;
	var t = Math.floor(Math.log(e) / Math.LN10);
	return e / 10 ** t >= 10 && t++, t;
}
function ss(e, t) {
	var n = os(e), r = 10 ** n, i = e / r;
	return e = (t ? i < 1.5 ? 1 : i < 2.5 ? 2 : i < 4 ? 3 : i < 7 ? 5 : 10 : i < 1 ? 1 : i < 2 ? 2 : i < 3 ? 3 : i < 5 ? 5 : 10) * r, n >= -20 ? +e.toFixed(n < 0 ? -n : 0) : e;
}
function cs(e, t) {
	var n = (e.length - 1) * t + 1, r = Math.floor(n), i = +e[r - 1], a = n - r;
	return a ? i + a * (e[r] - i) : i;
}
function ls(e) {
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
function us(e) {
	var t = parseFloat(e);
	return t == e && (t !== 0 || !W(e) || e.indexOf("x") <= 0) ? t : NaN;
}
function ds(e) {
	return !isNaN(us(e));
}
function fs() {
	return Math.round(Math.random() * 9);
}
function ps(e, t) {
	return t === 0 ? e : ps(t, e % t);
}
function ms(e, t) {
	return e == null ? t : t == null ? e : e * t / ps(e, t);
}
function hs(e) {
	throw Error(e);
}
//#endregion
//#region node_modules/echarts/lib/util/model.js
function gs(e, t, n) {
	return (t - e) * n + e;
}
var _s = "series\0", vs = "\0_ec_\0";
function ys(e) {
	return e instanceof Array ? e : e == null ? [] : [e];
}
function bs(e, t, n) {
	if (e) {
		e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
		for (var r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			!e.emphasis[t].hasOwnProperty(a) && e[t].hasOwnProperty(a) && (e.emphasis[t][a] = e[t][a]);
		}
	}
}
var xs = /* @__PURE__ */ "fontStyle.fontWeight.fontSize.fontFamily.rich.tag.color.textBorderColor.textBorderWidth.width.height.lineHeight.align.verticalAlign.baseline.shadowColor.shadowBlur.shadowOffsetX.shadowOffsetY.textShadowColor.textShadowBlur.textShadowOffsetX.textShadowOffsetY.backgroundColor.borderColor.borderWidth.borderRadius.padding".split(".");
function Ss(e) {
	return G(e) && !H(e) && !(e instanceof Date) ? e.value : e;
}
function Cs(e) {
	return G(e) && !(e instanceof Array);
}
function ws(e, t, n) {
	var r = n === "normalMerge", i = n === "replaceMerge", a = n === "replaceAll";
	e ||= [], t = (t || []).slice();
	var o = q();
	I(t, function(e, n) {
		G(e) || (t[n] = null);
	});
	var s = Ts(e, o, n);
	return (r || i) && Es(s, e, o, t), r && Ds(s, t), r || i ? Os(s, t, i) : a && ks(s, t), As(s), s;
}
function Ts(e, t, n) {
	var r = [];
	if (n === "replaceAll") return r;
	for (var i = 0; i < e.length; i++) {
		var a = e[i];
		a && a.id != null && t.set(a.id, i), r.push({
			existing: n === "replaceMerge" || Fs(a) ? null : a,
			newOption: null,
			keyInfo: null,
			brandNew: null
		});
	}
	return r;
}
function Es(e, t, n, r) {
	I(r, function(i, a) {
		if (i && i.id != null) {
			var o = Ms(i.id), s = n.get(o);
			if (s != null) {
				var c = e[s];
				Se(!c.newOption, "Duplicated option on id \"" + o + "\"."), c.newOption = i, c.existing = t[s], r[a] = null;
			}
		}
	});
}
function Ds(e, t) {
	I(t, function(n, r) {
		if (n && n.name != null) for (var i = 0; i < e.length; i++) {
			var a = e[i].existing;
			if (!e[i].newOption && a && (a.id == null || n.id == null) && !Fs(n) && !Fs(a) && js("name", a, n)) {
				e[i].newOption = n, t[r] = null;
				return;
			}
		}
	});
}
function Os(e, t, n) {
	I(t, function(t) {
		if (t) {
			for (var r, i = 0; (r = e[i]) && (r.newOption || Fs(r.existing) || r.existing && t.id != null && !js("id", t, r.existing));) i++;
			r ? (r.newOption = t, r.brandNew = n) : e.push({
				newOption: t,
				brandNew: n,
				existing: null,
				keyInfo: null
			}), i++;
		}
	});
}
function ks(e, t) {
	I(t, function(t) {
		e.push({
			newOption: t,
			brandNew: !0,
			existing: null,
			keyInfo: null
		});
	});
}
function As(e) {
	var t = q();
	I(e, function(e) {
		var n = e.existing;
		n && t.set(n.id, e);
	}), I(e, function(e) {
		var n = e.newOption;
		Se(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
	}), I(e, function(e, n) {
		var r = e.existing, i = e.newOption, a = e.keyInfo;
		if (G(i)) {
			if (a.name = i.name == null ? r ? r.name : _s + n : Ms(i.name), r) a.id = Ms(r.id);
			else if (i.id != null) a.id = Ms(i.id);
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
function js(e, t, n) {
	var r = Ns(t[e], null), i = Ns(n[e], null);
	return r != null && i != null && r === i;
}
function Ms(e) {
	return Ns(e, "");
}
function Ns(e, t) {
	return e == null ? t : W(e) ? e : ue(e) || le(e) ? e + "" : t;
}
function Ps(e) {
	var t = e.name;
	return !!(t && t.indexOf(_s));
}
function Fs(e) {
	return e && e.id != null && Ms(e.id).indexOf(vs) === 0;
}
function Is(e, t, n) {
	I(e, function(e) {
		var r = e.newOption;
		G(r) && (e.keyInfo.mainType = t, e.keyInfo.subType = Ls(t, r, e.existing, n));
	});
}
function Ls(e, t, n, r) {
	return t.type ? t.type : n ? n.subType : r.determineSubType(e, t);
}
function Rs(e, t) {
	var n = {}, r = {};
	return i(e || [], n), i(t || [], r, n), [a(n), a(r)];
	function i(e, t, n) {
		for (var r = 0, i = e.length; r < i; r++) {
			var a = Ns(e[r].seriesId, null);
			if (a == null) return;
			for (var o = ys(e[r].dataIndex), s = n && n[a], c = 0, l = o.length; c < l; c++) {
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
function zs(e, t) {
	if (t.dataIndexInside != null) return t.dataIndexInside;
	if (t.dataIndex != null) return H(t.dataIndex) ? L(t.dataIndex, function(t) {
		return e.indexOfRawIndex(t);
	}) : e.indexOfRawIndex(t.dataIndex);
	if (t.name != null) return H(t.name) ? L(t.name, function(t) {
		return e.indexOfName(t);
	}) : e.indexOfName(t.name);
}
function Bs() {
	var e = "__ec_inner_" + Vs++;
	return function(t) {
		return t[e] || (t[e] = {});
	};
}
var Vs = fs();
function Hs(e, t, n) {
	var r = Us(t, n), i = r.mainTypeSpecified, a = r.queryOptionMap, o = r.others, s = n ? n.defaultMainType : null;
	return !i && s && a.set(s, {}), a.each(function(t, r) {
		var i = Ks(e, r, t, {
			useDefault: s === r,
			enableAll: n && n.enableAll != null ? n.enableAll : !0,
			enableNone: n && n.enableNone != null ? n.enableNone : !0
		});
		o[r + "Models"] = i.models, o[r + "Model"] = i.models[0];
	}), o;
}
function Us(e, t) {
	var n;
	if (W(e)) {
		var r = {};
		r[e + "Index"] = 0, n = r;
	} else n = e;
	var i = q(), a = {}, o = !1;
	return I(n, function(e, n) {
		if (n === "dataIndex" || n === "dataIndexInside") a[n] = e;
		else {
			var r = n.match(/^(\w+)(Index|Id|Name)$/) || [], s = r[1], c = (r[2] || "").toLowerCase();
			if (!(!s || !c || t && t.includeMainTypes && F(t.includeMainTypes, s) < 0)) {
				o ||= !!s;
				var l = i.get(s) || i.set(s, {});
				l[c] = e;
			}
		}
	}), {
		mainTypeSpecified: o,
		queryOptionMap: i,
		others: a
	};
}
var Ws = {
	useDefault: !0,
	enableAll: !1,
	enableNone: !1
}, Gs = {
	useDefault: !1,
	enableAll: !0,
	enableNone: !0
};
function Ks(e, t, n, r) {
	r ||= Ws;
	var i = n.index, a = n.id, o = n.name, s = {
		models: null,
		specified: i != null || a != null || o != null
	};
	if (!s.specified) {
		var c = void 0;
		return s.models = r.useDefault && (c = e.getComponent(t)) ? [c] : [], s;
	}
	return i === "none" || i === !1 ? (Se(r.enableNone, "`\"none\"` or `false` is not a valid value on index option."), s.models = [], s) : (i === "all" && (Se(r.enableAll, "`\"all\"` is not a valid value on index option."), i = a = o = null), s.models = e.queryComponents({
		mainType: t,
		index: i,
		id: a,
		name: o
	}), s);
}
function qs(e, t, n) {
	e.setAttribute ? e.setAttribute(t, n) : e[t] = n;
}
function Js(e, t) {
	return e.getAttribute ? e.getAttribute(t) : e[t];
}
function Ys(e) {
	return e === "auto" ? Y.domSupported ? "html" : "richText" : e || "html";
}
function Xs(e, t, n, r, i) {
	var a = t == null || t === "auto";
	if (r == null) return r;
	if (ue(r)) {
		var o = gs(n || 0, r, i);
		return Ko(o, a ? Math.max(Jo(n || 0), Jo(r)) : t);
	}
	if (W(r)) return i < 1 ? n : r;
	for (var s = [], c = n, l = r, u = Math.max(c ? c.length : 0, l.length), d = 0; d < u; ++d) {
		var f = e.getDimensionInfo(d);
		if (f && f.type === "ordinal") s[d] = (i < 1 && c ? c : l)[d];
		else {
			var p = c && c[d] ? c[d] : 0, m = l[d], o = gs(p, m, i);
			s[d] = Ko(o, a ? Math.max(Jo(p), Jo(m)) : t);
		}
	}
	return s;
}
//#endregion
//#region node_modules/echarts/lib/util/innerStore.js
var Q = Bs(), Zs = function(e, t, n, r) {
	if (r) {
		var i = Q(r);
		i.dataIndex = n, i.dataType = t, i.seriesIndex = e, i.ssrType = "chart", r.type === "group" && r.traverse(function(r) {
			var i = Q(r);
			i.seriesIndex = e, i.dataIndex = n, i.dataType = t, i.ssrType = "chart";
		});
	}
}, Qs = 1, $s = {}, ec = Bs(), tc = Bs(), nc = [
	"emphasis",
	"blur",
	"select"
], rc = [
	"normal",
	"emphasis",
	"blur",
	"select"
], ic = "highlight", ac = "downplay", oc = "select", sc = "unselect", cc = "toggleSelect";
function lc(e) {
	return e != null && e !== "none";
}
function uc(e, t, n) {
	e.onHoverStateChange && (e.hoverState || 0) !== n && e.onHoverStateChange(t), e.hoverState = n;
}
function dc(e) {
	uc(e, "emphasis", 2);
}
function fc(e) {
	e.hoverState === 2 && uc(e, "normal", 0);
}
function pc(e) {
	uc(e, "blur", 1);
}
function mc(e) {
	e.hoverState === 1 && uc(e, "normal", 0);
}
function hc(e) {
	e.selected = !0;
}
function gc(e) {
	e.selected = !1;
}
function _c(e, t, n) {
	t(e, n);
}
function vc(e, t, n) {
	_c(e, t, n), e.isGroup && e.traverse(function(e) {
		_c(e, t, n);
	});
}
function yc(e, t) {
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
function bc(e, t, n, r) {
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
function xc(e, t, n, r) {
	var i = n && F(n, "select") >= 0, a = !1;
	if (e instanceof co) {
		var o = ec(e), s = i && o.selectFill || o.normalFill, c = i && o.selectStroke || o.normalStroke;
		if (lc(s) || lc(c)) {
			r ||= {};
			var l = r.style || {};
			l.fill === "inherit" ? (a = !0, r = N({}, r), l = N({}, l), l.fill = s) : !lc(l.fill) && lc(s) ? (a = !0, r = N({}, r), l = N({}, l), l.fill = zr(s)) : !lc(l.stroke) && lc(c) && (a || (r = N({}, r), l = N({}, l)), l.stroke = zr(c)), r.style = l;
		}
	}
	if (r && r.z2 == null) {
		a || (r = N({}, r));
		var u = e.z2EmphasisLift;
		r.z2 = e.z2 + (u ?? 10);
	}
	return r;
}
function Sc(e, t, n) {
	if (n && n.z2 == null) {
		n = N({}, n);
		var r = e.z2SelectLift;
		n.z2 = e.z2 + (r ?? 9);
	}
	return n;
}
function Cc(e, t, n) {
	var r = F(e.currentStates, t) >= 0, i = e.style.opacity, a = r ? null : bc(e, ["opacity"], t, { opacity: 1 });
	n ||= {};
	var o = n.style || {};
	return o.opacity ?? (n = N({}, n), o = N({ opacity: r ? i : a.opacity * .1 }, o), n.style = o), n;
}
function wc(e, t) {
	var n = this.states[e];
	if (this.style) {
		if (e === "emphasis") return xc(this, e, t, n);
		if (e === "blur") return Cc(this, e, n);
		if (e === "select") return Sc(this, e, n);
	}
	return n;
}
function Tc(e) {
	e.stateProxy = wc;
	var t = e.getTextContent(), n = e.getTextGuideLine();
	t && (t.stateProxy = wc), n && (n.stateProxy = wc);
}
function Ec(e, t) {
	!Pc(e, t) && !e.__highByOuter && vc(e, dc);
}
function Dc(e, t) {
	!Pc(e, t) && !e.__highByOuter && vc(e, fc);
}
function Oc(e, t) {
	e.__highByOuter |= 1 << (t || 0), vc(e, dc);
}
function kc(e, t) {
	!(e.__highByOuter &= ~(1 << (t || 0))) && vc(e, fc);
}
function Ac(e) {
	vc(e, pc);
}
function jc(e) {
	vc(e, mc);
}
function Mc(e) {
	vc(e, hc);
}
function Nc(e) {
	vc(e, gc);
}
function Pc(e, t) {
	return e.__highDownSilentOnTouch && t.zrByTouch;
}
function Fc(e) {
	var t = e.getModel(), n = [], r = [];
	t.eachComponent(function(t, i) {
		var a = tc(i), o = t === "series", s = o ? e.getViewOfSeriesModel(i) : e.getViewOfComponentModel(i);
		!o && r.push(s), a.isBlured && (s.group.traverse(function(e) {
			mc(e);
		}), o && n.push(i)), a.isBlured = !1;
	}), I(r, function(e) {
		e && e.toggleBlurSeries && e.toggleBlurSeries(n, !1, t);
	});
}
function Ic(e, t, n, r) {
	var i = r.getModel();
	n ||= "coordinateSystem";
	function a(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = e.getItemGraphicEl(t[n]);
			r && jc(r);
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
					e.__highByOuter && i && t === "self" || pc(e);
				}), ae(t)) a(e.getData(), t);
				else if (G(t)) for (var u = B(t), d = 0; d < u.length; d++) a(e.getData(u[d]), t[u[d]]);
				c.push(e), tc(e).isBlured = !0;
			}
		}), i.eachComponent(function(e, t) {
			if (e !== "series") {
				var n = r.getViewOfComponentModel(t);
				n && n.toggleBlurSeries && n.toggleBlurSeries(c, !0, i);
			}
		});
	}
}
function Lc(e, t, n) {
	if (e != null && t != null) {
		var r = n.getModel().getComponent(e, t);
		if (r) {
			tc(r).isBlured = !0;
			var i = n.getViewOfComponentModel(r);
			i && i.focusBlurEnabled && i.group.traverse(function(e) {
				pc(e);
			});
		}
	}
}
function Rc(e, t, n) {
	var r = e.seriesIndex, i = e.getData(t.dataType);
	if (i) {
		var a = zs(i, t);
		a = (H(a) ? a[0] : a) || 0;
		var o = i.getItemGraphicEl(a);
		if (!o) for (var s = i.count(), c = 0; !o && c < s;) o = i.getItemGraphicEl(c++);
		if (o) {
			var l = Q(o);
			Ic(r, l.focus, l.blurScope, n);
		} else {
			var u = e.get(["emphasis", "focus"]), d = e.get(["emphasis", "blurScope"]);
			u != null && Ic(r, u, d, n);
		}
	}
}
function zc(e, t, n, r) {
	var i = {
		focusSelf: !1,
		dispatchers: null
	};
	if (e == null || e === "series" || t == null || n == null) return i;
	var a = r.getModel().getComponent(e, t);
	if (!a) return i;
	var o = r.getViewOfComponentModel(a);
	if (!o || !o.findHighDownDispatchers) return i;
	for (var s = o.findHighDownDispatchers(n), c, l = 0; l < s.length; l++) if (Q(s[l]).focus === "self") {
		c = !0;
		break;
	}
	return {
		focusSelf: c,
		dispatchers: s
	};
}
function Bc(e, t, n) {
	var r = Q(e), i = zc(r.componentMainType, r.componentIndex, r.componentHighDownName, n), a = i.dispatchers, o = i.focusSelf;
	a ? (o && Lc(r.componentMainType, r.componentIndex, n), I(a, function(e) {
		return Ec(e, t);
	})) : (Ic(r.seriesIndex, r.focus, r.blurScope, n), r.focus === "self" && Lc(r.componentMainType, r.componentIndex, n), Ec(e, t));
}
function Vc(e, t, n) {
	Fc(n);
	var r = Q(e), i = zc(r.componentMainType, r.componentIndex, r.componentHighDownName, n).dispatchers;
	i ? I(i, function(e) {
		return Dc(e, t);
	}) : Dc(e, t);
}
function Hc(e, t, n) {
	if (nl(t)) {
		var r = t.dataType, i = zs(e.getData(r), t);
		H(i) || (i = [i]), e[t.type === "toggleSelect" ? "toggleSelect" : t.type === "select" ? "select" : "unselect"](i, r);
	}
}
function Uc(e) {
	I(e.getAllData(), function(t) {
		var n = t.data, r = t.type;
		n.eachItemGraphicEl(function(t, n) {
			e.isSelected(n, r) ? Mc(t) : Nc(t);
		});
	});
}
function Wc(e) {
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
function Gc(e, t, n) {
	Qc(e, !0), vc(e, Tc), Jc(e, t, n);
}
function Kc(e) {
	Qc(e, !1);
}
function qc(e, t, n, r) {
	r ? Kc(e) : Gc(e, t, n);
}
function Jc(e, t, n) {
	var r = Q(e);
	t == null ? r.focus &&= null : (r.focus = t, r.blurScope = n);
}
var Yc = [
	"emphasis",
	"blur",
	"select"
], Xc = {
	itemStyle: "getItemStyle",
	lineStyle: "getLineStyle",
	areaStyle: "getAreaStyle"
};
function Zc(e, t, n, r) {
	n ||= "itemStyle";
	for (var i = 0; i < Yc.length; i++) {
		var a = Yc[i], o = t.getModel([a, n]), s = e.ensureState(a);
		s.style = r ? r(o) : o[Xc[n]]();
	}
}
function Qc(e, t) {
	var n = t === !1, r = e;
	e.highDownSilentOnTouch && (r.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!n || r.__highDownDispatcher) && (r.__highByOuter = r.__highByOuter || 0, r.__highDownDispatcher = !n);
}
function $c(e) {
	return !!(e && e.__highDownDispatcher);
}
function el(e, t, n) {
	var r = Q(e);
	r.componentMainType = t.mainType, r.componentIndex = t.componentIndex, r.componentHighDownName = n;
}
function tl(e) {
	var t = $s[e];
	return t == null && Qs <= 32 && (t = $s[e] = Qs++), t;
}
function nl(e) {
	var t = e.type;
	return t === "select" || t === "unselect" || t === "toggleSelect";
}
function rl(e) {
	var t = e.type;
	return t === "highlight" || t === "downplay";
}
function il(e) {
	var t = ec(e);
	t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
	var n = e.states.select || {};
	t.selectFill = n.style && n.style.fill || null, t.selectStroke = n.style && n.style.stroke || null;
}
//#endregion
//#region node_modules/zrender/lib/tool/transformPath.js
var al = La.CMD, ol = [
	[],
	[],
	[]
], sl = Math.sqrt, cl = Math.atan2;
function ll(e, t) {
	if (t) {
		var n = e.data, r = e.len(), i, a, o, s, c, l, u = al.M, d = al.C, f = al.L, p = al.R, m = al.A, h = al.Q;
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
					var g = t[4], _ = t[5], v = sl(t[0] * t[0] + t[1] * t[1]), y = sl(t[2] * t[2] + t[3] * t[3]), b = cl(-t[1] / y, t[0] / v);
					n[o] *= v, n[o++] += g, n[o] *= y, n[o++] += _, n[o++] *= v, n[o++] *= y, n[o++] += b, n[o++] += b, o += 2, s = o;
					break;
				case p: l[0] = n[o++], l[1] = n[o++], Sn(l, l, t), n[s++] = l[0], n[s++] = l[1], l[0] += n[o++], l[1] += n[o++], Sn(l, l, t), n[s++] = l[0], n[s++] = l[1];
			}
			for (c = 0; c < a; c++) {
				var x = ol[c];
				x[0] = n[o++], x[1] = n[o++], Sn(x, x, t), n[s++] = x[0], n[s++] = x[1];
			}
		}
		e.increaseVersion();
	}
}
//#endregion
//#region node_modules/zrender/lib/tool/path.js
var ul = Math.sqrt, dl = Math.sin, fl = Math.cos, pl = Math.PI;
function ml(e) {
	return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
}
function hl(e, t) {
	return (e[0] * t[0] + e[1] * t[1]) / (ml(e) * ml(t));
}
function gl(e, t) {
	return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(hl(e, t));
}
function _l(e, t, n, r, i, a, o, s, c, l, u) {
	var d = pl / 180 * c, f = fl(d) * (e - n) / 2 + dl(d) * (t - r) / 2, p = -1 * dl(d) * (e - n) / 2 + fl(d) * (t - r) / 2, m = f * f / (o * o) + p * p / (s * s);
	m > 1 && (o *= ul(m), s *= ul(m));
	var h = (i === a ? -1 : 1) * ul((o * o * (s * s) - o * o * (p * p) - s * s * (f * f)) / (o * o * (p * p) + s * s * (f * f))) || 0, g = h * o * p / s, _ = h * -s * f / o, v = (e + n) / 2 + fl(d) * g - dl(d) * _, y = (t + r) / 2 + dl(d) * g + fl(d) * _, b = gl([1, 0], [(f - g) / o, (p - _) / s]), x = [(f - g) / o, (p - _) / s], S = [(-1 * f - g) / o, (-1 * p - _) / s], C = gl(x, S);
	if (hl(x, S) <= -1 && (C = pl), hl(x, S) >= 1 && (C = 0), C < 0) {
		var w = Math.round(C / pl * 1e6) / 1e6;
		C = pl * 2 + w % 2 * pl;
	}
	u.addData(l, v, y, o, s, b, C, d, a);
}
var vl = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, yl = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function bl(e) {
	var t = new La();
	if (!e) return t;
	var n = 0, r = 0, i = n, a = r, o, s = La.CMD, c = e.match(vl);
	if (!c) return t;
	for (var l = 0; l < c.length; l++) {
		for (var u = c[l], d = u.charAt(0), f = void 0, p = u.match(yl) || [], m = p.length, h = 0; h < m; h++) p[h] = parseFloat(p[h]);
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
					y = p[g++], b = p[g++], x = p[g++], S = p[g++], C = p[g++], w = n, T = r, n = p[g++], r = p[g++], f = s.A, _l(w, T, n, r, S, C, y, b, x, f, t);
					break;
				case "a": y = p[g++], b = p[g++], x = p[g++], S = p[g++], C = p[g++], w = n, T = r, n += p[g++], r += p[g++], f = s.A, _l(w, T, n, r, S, C, y, b, x, f, t);
			}
		}
		(d === "z" || d === "Z") && (f = s.Z, t.addData(f), n = i, r = a), o = f;
	}
	return t.toStatic(), t;
}
var xl = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.applyTransform = function(e) {}, t;
}(co);
function Sl(e) {
	return e.setData != null;
}
function Cl(e, t) {
	var n = bl(e), r = N({}, t);
	return r.buildPath = function(e) {
		if (Sl(e)) {
			e.setData(n.data);
			var t = e.getContext();
			t && e.rebuildPath(t, 1);
		} else {
			var t = e;
			n.rebuildPath(t, 1);
		}
	}, r.applyTransform = function(e) {
		ll(n, e), this.dirtyShape();
	}, r;
}
function wl(e, t) {
	return new xl(Cl(e, t));
}
function Tl(e, t) {
	var n = Cl(e, t);
	return function(e) {
		c(t, e);
		function t(t) {
			var r = e.call(this, t) || this;
			return r.applyTransform = n.applyTransform, r.buildPath = n.buildPath, r;
		}
		return t;
	}(xl);
}
function El(e, t) {
	for (var n = [], r = e.length, i = 0; i < r; i++) {
		var a = e[i];
		n.push(a.getUpdatedPathProxy(!0));
	}
	var o = new co(t);
	return o.createPathProxy(), o.buildPath = function(e) {
		if (Sl(e)) {
			e.appendPath(n);
			var t = e.getContext();
			t && e.rebuildPath(t, 1);
		}
	}, o;
}
//#endregion
//#region node_modules/zrender/lib/graphic/Group.js
var Dl = function(e) {
	c(t, e);
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
		return r < 0 || (n.splice(r, 1), e.parent = null, t && e.removeSelfFromZr(t), t && t.refresh()), this;
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
		for (var t = new Z(0, 0, 0, 0), n = e || this._children, r = [], i = null, a = 0; a < n.length; a++) {
			var o = n[a];
			if (!(o.ignore || o.invisible)) {
				var s = o.getBoundingRect(), c = o.getLocalTransform(r);
				c ? (Z.applyTransform(t, s, c), i ||= t.clone(), i.union(t)) : (i ||= s.clone(), i.union(s));
			}
		}
		return i || t;
	}, t;
}(Hi);
Dl.prototype.type = "group";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Circle.js
var Ol = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r = 0;
	}
	return e;
}(), kl = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new Ol();
	}, t.prototype.buildPath = function(e, t) {
		e.moveTo(t.cx + t.r, t.cy), e.arc(t.cx, t.cy, t.r, 0, Math.PI * 2);
	}, t;
}(co);
kl.prototype.type = "circle";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Ellipse.js
var Al = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
	}
	return e;
}(), jl = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new Al();
	}, t.prototype.buildPath = function(e, t) {
		var n = .5522848, r = t.cx, i = t.cy, a = t.rx, o = t.ry, s = a * n, c = o * n;
		e.moveTo(r - a, i), e.bezierCurveTo(r - a, i - c, r - s, i - o, r, i - o), e.bezierCurveTo(r + s, i - o, r + a, i - c, r + a, i), e.bezierCurveTo(r + a, i + c, r + s, i + o, r, i + o), e.bezierCurveTo(r - s, i + o, r - a, i + c, r - a, i), e.closePath();
	}, t;
}(co);
jl.prototype.type = "ellipse";
//#endregion
//#region node_modules/zrender/lib/graphic/helper/roundSector.js
var Ml = Math.PI, Nl = Ml * 2, Pl = Math.sin, Fl = Math.cos, Il = Math.acos, Ll = Math.atan2, Rl = Math.abs, zl = Math.sqrt, Bl = Math.max, Vl = Math.min, Hl = 1e-4;
function Ul(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < Hl)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function Wl(e, t, n, r, i, a, o) {
	var s = e - n, c = t - r, l = (o ? a : -a) / zl(s * s + c * c), u = l * c, d = -l * s, f = e + u, p = t + d, m = n + u, h = r + d, g = (f + m) / 2, _ = (p + h) / 2, v = m - f, y = h - p, b = v * v + y * y, x = i - a, S = f * h - m * p, C = (y < 0 ? -1 : 1) * zl(Bl(0, x * x * b - S * S)), w = (S * y - v * C) / b, T = (-S * v - y * C) / b, E = (S * y + v * C) / b, D = (-S * v + y * C) / b, O = w - g, k = T - _, A = E - g, ee = D - _;
	return O * O + k * k > A * A + ee * ee && (w = E, T = D), {
		cx: w,
		cy: T,
		x0: -u,
		y0: -d,
		x1: w * (i / x - 1),
		y1: T * (i / x - 1)
	};
}
function Gl(e) {
	var t;
	if (H(e)) {
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
function Kl(e, t) {
	var n, r = Bl(t.r, 0), i = Bl(t.r0 || 0, 0), a = r > 0;
	if (a || i > 0) {
		if (a || (r = i, i = 0), i > r) {
			var o = r;
			r = i, i = o;
		}
		var s = t.startAngle, c = t.endAngle;
		if (!(isNaN(s) || isNaN(c))) {
			var l = t.cx, u = t.cy, d = !!t.clockwise, f = Rl(c - s), p = f > Nl && f % Nl;
			if (p > Hl && (f = p), !(r > Hl)) e.moveTo(l, u);
			else if (f > Nl - Hl) e.moveTo(l + r * Fl(s), u + r * Pl(s)), e.arc(l, u, r, s, c, !d), i > Hl && (e.moveTo(l + i * Fl(c), u + i * Pl(c)), e.arc(l, u, i, c, s, d));
			else {
				var m = void 0, h = void 0, g = void 0, _ = void 0, v = void 0, y = void 0, b = void 0, x = void 0, S = void 0, C = void 0, w = void 0, T = void 0, E = void 0, D = void 0, O = void 0, k = void 0, A = r * Fl(s), ee = r * Pl(s), j = i * Fl(c), M = i * Pl(c), te = f > Hl;
				if (te) {
					var N = t.cornerRadius;
					N && (n = Gl(N), m = n[0], h = n[1], g = n[2], _ = n[3]);
					var P = Rl(r - i) / 2;
					if (v = Vl(P, g), y = Vl(P, _), b = Vl(P, m), x = Vl(P, h), w = S = Bl(v, y), T = C = Bl(b, x), (S > Hl || C > Hl) && (E = r * Fl(c), D = r * Pl(c), O = i * Fl(s), k = i * Pl(s), f < Ml)) {
						var ne = Ul(A, ee, O, k, E, D, j, M);
						if (ne) {
							var F = A - ne[0], re = ee - ne[1], ie = E - ne[0], ae = D - ne[1], I = 1 / Pl(Il((F * ie + re * ae) / (zl(F * F + re * re) * zl(ie * ie + ae * ae))) / 2), L = zl(ne[0] * ne[0] + ne[1] * ne[1]);
							w = Vl(S, (r - L) / (I + 1)), T = Vl(C, (i - L) / (I - 1));
						}
					}
				}
				if (!te) e.moveTo(l + A, u + ee);
				else if (w > Hl) {
					var oe = Vl(g, w), R = Vl(_, w), z = Wl(O, k, A, ee, r, oe, d), B = Wl(E, D, j, M, r, R, d);
					e.moveTo(l + z.cx + z.x0, u + z.cy + z.y0), w < S && oe === R ? e.arc(l + z.cx, u + z.cy, w, Ll(z.y0, z.x0), Ll(B.y0, B.x0), !d) : (oe > 0 && e.arc(l + z.cx, u + z.cy, oe, Ll(z.y0, z.x0), Ll(z.y1, z.x1), !d), e.arc(l, u, r, Ll(z.cy + z.y1, z.cx + z.x1), Ll(B.cy + B.y1, B.cx + B.x1), !d), R > 0 && e.arc(l + B.cx, u + B.cy, R, Ll(B.y1, B.x1), Ll(B.y0, B.x0), !d));
				} else e.moveTo(l + A, u + ee), e.arc(l, u, r, s, c, !d);
				if (!(i > Hl) || !te) e.lineTo(l + j, u + M);
				else if (T > Hl) {
					var oe = Vl(m, T), R = Vl(h, T), z = Wl(j, M, E, D, i, -R, d), B = Wl(A, ee, O, k, i, -oe, d);
					e.lineTo(l + z.cx + z.x0, u + z.cy + z.y0), T < C && oe === R ? e.arc(l + z.cx, u + z.cy, T, Ll(z.y0, z.x0), Ll(B.y0, B.x0), !d) : (R > 0 && e.arc(l + z.cx, u + z.cy, R, Ll(z.y0, z.x0), Ll(z.y1, z.x1), !d), e.arc(l, u, i, Ll(z.cy + z.y1, z.cx + z.x1), Ll(B.cy + B.y1, B.cx + B.x1), d), oe > 0 && e.arc(l + B.cx, u + B.cy, oe, Ll(B.y1, B.x1), Ll(B.y0, B.x0), !d));
				} else e.lineTo(l + j, u + M), e.arc(l, u, i, c, s, d);
			}
			e.closePath();
		}
	}
}
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Sector.js
var ql = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
	}
	return e;
}(), Jl = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new ql();
	}, t.prototype.buildPath = function(e, t) {
		Kl(e, t);
	}, t.prototype.isZeroArea = function() {
		return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
	}, t;
}(co);
Jl.prototype.type = "sector";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Ring.js
var Yl = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
	}
	return e;
}(), Xl = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new Yl();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.cx, r = t.cy, i = Math.PI * 2;
		e.moveTo(n + t.r, r), e.arc(n, r, t.r, 0, i, !1), e.moveTo(n + t.r0, r), e.arc(n, r, t.r0, 0, i, !0);
	}, t;
}(co);
Xl.prototype.type = "ring";
//#endregion
//#region node_modules/zrender/lib/graphic/helper/smoothBezier.js
function Zl(e, t, n, r) {
	var i = [], a = [], o = [], s = [], c, l, u, d;
	if (r) {
		u = [Infinity, Infinity], d = [-Infinity, -Infinity];
		for (var f = 0, p = e.length; f < p; f++) Cn(u, u, e[f]), wn(d, d, e[f]);
		Cn(u, u, r[0]), wn(d, d, r[1]);
	}
	for (var f = 0, p = e.length; f < p; f++) {
		var m = e[f];
		if (n) c = e[f ? f - 1 : p - 1], l = e[(f + 1) % p];
		else if (f === 0 || f === p - 1) {
			i.push(tn(e[f]));
			continue;
		} else c = e[f - 1], l = e[f + 1];
		on(a, l, c), mn(a, a, t);
		var h = gn(m, c), g = gn(m, l), _ = h + g;
		_ !== 0 && (h /= _, g /= _), mn(o, a, -h), mn(s, a, g);
		var v = rn([], m, o), y = rn([], m, s);
		r && (wn(v, v, u), Cn(v, v, d), wn(y, y, u), Cn(y, y, d)), i.push(v), i.push(y);
	}
	return n && i.push(i.shift()), i;
}
//#endregion
//#region node_modules/zrender/lib/graphic/helper/poly.js
function Ql(e, t, n) {
	var r = t.smooth, i = t.points;
	if (i && i.length >= 2) {
		if (r) {
			var a = Zl(i, r, n, t.smoothConstraint);
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
var $l = function() {
	function e() {
		this.points = null, this.smooth = 0, this.smoothConstraint = null;
	}
	return e;
}(), eu = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultShape = function() {
		return new $l();
	}, t.prototype.buildPath = function(e, t) {
		Ql(e, t, !0);
	}, t;
}(co);
eu.prototype.type = "polygon";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Polyline.js
var tu = function() {
	function e() {
		this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
	}
	return e;
}(), nu = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new tu();
	}, t.prototype.buildPath = function(e, t) {
		Ql(e, t, !1);
	}, t;
}(co);
nu.prototype.type = "polyline";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Line.js
var ru = {}, iu = function() {
	function e() {
		this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
	}
	return e;
}(), au = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new iu();
	}, t.prototype.buildPath = function(e, t) {
		var n, r, i, a;
		if (this.subPixelOptimize) {
			var o = vo(ru, t, this.style);
			n = o.x1, r = o.y1, i = o.x2, a = o.y2;
		} else n = t.x1, r = t.y1, i = t.x2, a = t.y2;
		var s = t.percent;
		s !== 0 && (e.moveTo(n, r), s < 1 && (i = n * (1 - s) + i * s, a = r * (1 - s) + a * s), e.lineTo(i, a));
	}, t.prototype.pointAt = function(e) {
		var t = this.shape;
		return [t.x1 * (1 - e) + t.x2 * e, t.y1 * (1 - e) + t.y2 * e];
	}, t;
}(co);
au.prototype.type = "line";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/BezierCurve.js
var ou = [], su = function() {
	function e() {
		this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
	}
	return e;
}();
function cu(e, t, n) {
	var r = e.cpx2, i = e.cpy2;
	return r != null || i != null ? [(n ? Jn : qn)(e.x1, e.cpx1, e.cpx2, e.x2, t), (n ? Jn : qn)(e.y1, e.cpy1, e.cpy2, e.y2, t)] : [(n ? tr : er)(e.x1, e.cpx1, e.x2, t), (n ? tr : er)(e.y1, e.cpy1, e.y2, t)];
}
var lu = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new su();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.x1, r = t.y1, i = t.x2, a = t.y2, o = t.cpx1, s = t.cpy1, c = t.cpx2, l = t.cpy2, u = t.percent;
		u !== 0 && (e.moveTo(n, r), c == null || l == null ? (u < 1 && (ir(n, o, i, u, ou), o = ou[1], i = ou[2], ir(r, s, a, u, ou), s = ou[1], a = ou[2]), e.quadraticCurveTo(o, s, i, a)) : (u < 1 && (Zn(n, o, c, i, u, ou), o = ou[1], c = ou[2], i = ou[3], Zn(r, s, l, a, u, ou), s = ou[1], l = ou[2], a = ou[3]), e.bezierCurveTo(o, s, c, l, i, a)));
	}, t.prototype.pointAt = function(e) {
		return cu(this.shape, e, !1);
	}, t.prototype.tangentAt = function(e) {
		var t = cu(this.shape, e, !0);
		return hn(t, t);
	}, t;
}(co);
lu.prototype.type = "bezier-curve";
//#endregion
//#region node_modules/zrender/lib/graphic/shape/Arc.js
var uu = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
	}
	return e;
}(), du = function(e) {
	c(t, e);
	function t(t) {
		return e.call(this, t) || this;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new uu();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.cx, r = t.cy, i = Math.max(t.r, 0), a = t.startAngle, o = t.endAngle, s = t.clockwise, c = Math.cos(a), l = Math.sin(a);
		e.moveTo(c * i + n, l * i + r), e.arc(n, r, i, a, o, !s);
	}, t;
}(co);
du.prototype.type = "arc";
//#endregion
//#region node_modules/zrender/lib/graphic/CompoundPath.js
var fu = function(e) {
	c(t, e);
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
		return this._updatePathDirty.call(this), co.prototype.getBoundingRect.call(this);
	}, t;
}(co), pu = function() {
	function e(e) {
		this.colorStops = e || [];
	}
	return e.prototype.addColorStop = function(e, t) {
		this.colorStops.push({
			offset: e,
			color: t
		});
	}, e;
}(), mu = function(e) {
	c(t, e);
	function t(t, n, r, i, a, o) {
		var s = e.call(this, a) || this;
		return s.x = t ?? 0, s.y = n ?? 0, s.x2 = r ?? 1, s.y2 = i ?? 0, s.type = "linear", s.global = o || !1, s;
	}
	return t;
}(pu), hu = function(e) {
	c(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this, i) || this;
		return o.x = t ?? .5, o.y = n ?? .5, o.r = r ?? .5, o.type = "radial", o.global = a || !1, o;
	}
	return t;
}(pu), gu = [0, 0], _u = [0, 0], vu = new X(), yu = new X(), bu = function() {
	function e(e, t) {
		this._corners = [], this._axes = [], this._origin = [0, 0];
		for (var n = 0; n < 4; n++) this._corners[n] = new X();
		for (var n = 0; n < 2; n++) this._axes[n] = new X();
		e && this.fromBoundingRect(e, t);
	}
	return e.prototype.fromBoundingRect = function(e, t) {
		var n = this._corners, r = this._axes, i = e.x, a = e.y, o = i + e.width, s = a + e.height;
		if (n[0].set(i, a), n[1].set(o, a), n[2].set(o, s), n[3].set(i, s), t) for (var c = 0; c < 4; c++) n[c].transform(t);
		X.sub(r[0], n[1], n[0]), X.sub(r[1], n[3], n[0]), r[0].normalize(), r[1].normalize();
		for (var c = 0; c < 2; c++) this._origin[c] = r[c].dot(n[0]);
	}, e.prototype.intersect = function(e, t) {
		var n = !0, r = !t;
		return vu.set(Infinity, Infinity), yu.set(0, 0), !this._intersectCheckOneSide(this, e, vu, yu, r, 1) && (n = !1, r) || !this._intersectCheckOneSide(e, this, vu, yu, r, -1) && (n = !1, r) || r || X.copy(t, n ? vu : yu), n;
	}, e.prototype._intersectCheckOneSide = function(e, t, n, r, i, a) {
		for (var o = !0, s = 0; s < 2; s++) {
			var c = this._axes[s];
			if (this._getProjMinMaxOnAxis(s, e._corners, gu), this._getProjMinMaxOnAxis(s, t._corners, _u), gu[1] < _u[0] || gu[0] > _u[1]) {
				if (o = !1, i) return o;
				var l = Math.abs(_u[0] - gu[1]), u = Math.abs(gu[0] - _u[1]);
				Math.min(l, u) > r.len() && (l < u ? X.scale(r, c, -l * a) : X.scale(r, c, u * a));
			} else if (n) {
				var l = Math.abs(_u[0] - gu[1]), u = Math.abs(gu[0] - _u[1]);
				Math.min(l, u) < n.len() && (l < u ? X.scale(n, c, l * a) : X.scale(n, c, -u * a));
			}
		}
		return o;
	}, e.prototype._getProjMinMaxOnAxis = function(e, t, n) {
		for (var r = this._axes[e], i = this._origin, a = t[0].dot(r) + i[e], o = a, s = a, c = 1; c < t.length; c++) {
			var l = t[c].dot(r) + i[e];
			o = Math.min(l, o), s = Math.max(l, s);
		}
		n[0] = o, n[1] = s;
	}, e;
}(), xu = [], Su = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.notClear = !0, t.incremental = !0, t._displayables = [], t._temporaryDisplayables = [], t._cursor = 0, t;
	}
	return t.prototype.traverse = function(e, t) {
		e.call(t, this);
	}, t.prototype.useStyle = function() {
		this.style = {};
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
			for (var e = new Z(Infinity, Infinity, -Infinity, -Infinity), t = 0; t < this._displayables.length; t++) {
				var n = this._displayables[t], r = n.getBoundingRect().clone();
				n.needLocalTransform() && r.applyTransform(n.getLocalTransform(xu)), e.union(r);
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
}(ta), Cu = Bs();
function wu(e, t, n, r, i) {
	var a;
	if (t && t.ecModel) {
		var o = t.ecModel.getUpdatePayload();
		a = o && o.animation;
	}
	var s = t && t.isAnimationEnabled(), c = e === "update";
	if (s) {
		var l = void 0, u = void 0, d = void 0;
		return r ? (l = K(r.duration, 200), u = K(r.easing, "cubicOut"), d = 0) : (l = t.getShallow(c ? "animationDurationUpdate" : "animationDuration"), u = t.getShallow(c ? "animationEasingUpdate" : "animationEasing"), d = t.getShallow(c ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (u = a.easing), a.delay != null && (d = a.delay)), U(d) && (d = d(n, i)), U(l) && (l = l(n)), {
			duration: l || 0,
			delay: d,
			easing: u
		};
	}
	return null;
}
function Tu(e, t, n, r, i, a, o) {
	var s = !1, c;
	U(i) ? (o = a, a = i, i = null) : G(i) && (a = i.cb, o = i.during, s = i.isFrom, c = i.removeOpt, i = i.dataIndex);
	var l = e === "leave";
	l || t.stopAnimation("leave");
	var u = wu(e, r, i, l ? c || {} : null, r && r.getAnimationDelayParams ? r.getAnimationDelayParams(t, i) : null);
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
function Eu(e, t, n, r, i, a) {
	Tu("update", e, t, n, r, i, a);
}
function Du(e, t, n, r, i, a) {
	Tu("enter", e, t, n, r, i, a);
}
function Ou(e) {
	if (!e.__zr) return !0;
	for (var t = 0; t < e.animators.length; t++) if (e.animators[t].scope === "leave") return !0;
	return !1;
}
function ku(e, t, n, r, i, a) {
	Ou(e) || Tu("leave", e, t, n, r, i, a);
}
function Au(e, t, n, r) {
	e.removeTextContent(), e.removeTextGuideLine(), ku(e, { style: { opacity: 0 } }, t, n, r);
}
function ju(e, t, n) {
	function r() {
		e.parent && e.parent.remove(e);
	}
	e.isGroup ? e.traverse(function(e) {
		e.isGroup || Au(e, t, n, r);
	}) : Au(e, t, n, r);
}
function Mu(e) {
	Cu(e).oldStyle = e.style;
}
//#endregion
//#region node_modules/echarts/lib/util/graphic.js
var Nu = /* @__PURE__ */ o({
	Arc: () => du,
	BezierCurve: () => lu,
	BoundingRect: () => Z,
	Circle: () => kl,
	CompoundPath: () => fu,
	Ellipse: () => jl,
	Group: () => Dl,
	Image: () => ho,
	IncrementalDisplayable: () => Su,
	Line: () => au,
	LinearGradient: () => mu,
	OrientedBoundingRect: () => bu,
	Path: () => co,
	Point: () => X,
	Polygon: () => eu,
	Polyline: () => nu,
	RadialGradient: () => hu,
	Rect: () => Co,
	Ring: () => Xl,
	Sector: () => Jl,
	Text: () => Do,
	applyTransform: () => Zu,
	clipPointsByRect: () => nd,
	clipRectByRect: () => rd,
	createIcon: () => id,
	extendPath: () => zu,
	extendShape: () => Lu,
	getShapeClass: () => Vu,
	getTransform: () => Xu,
	groupTransition: () => td,
	initProps: () => Du,
	isElementRemoved: () => Ou,
	lineLineIntersect: () => od,
	linePolygonIntersect: () => ad,
	makeImage: () => Uu,
	makePath: () => Hu,
	mergePath: () => Gu,
	registerShape: () => Bu,
	removeElement: () => ku,
	removeElementWithFadeOut: () => ju,
	resizePath: () => Ku,
	setTooltipConfig: () => ld,
	subPixelOptimize: () => Yu,
	subPixelOptimizeLine: () => qu,
	subPixelOptimizeRect: () => Ju,
	transformDirection: () => Qu,
	traverseElements: () => dd,
	updateProps: () => Eu
}), Pu = Math.max, Fu = Math.min, Iu = {};
function Lu(e) {
	return co.extend(e);
}
var Ru = Tl;
function zu(e, t) {
	return Ru(e, t);
}
function Bu(e, t) {
	Iu[e] = t;
}
function Vu(e) {
	if (Iu.hasOwnProperty(e)) return Iu[e];
}
function Hu(e, t, n, r) {
	var i = wl(e, t);
	return n && (r === "center" && (n = Wu(n, i.getBoundingRect())), Ku(i, n)), i;
}
function Uu(e, t, n) {
	var r = new ho({
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
				r.setStyle(Wu(t, i));
			}
		}
	});
	return r;
}
function Wu(e, t) {
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
var Gu = El;
function Ku(e, t) {
	if (e.applyTransform) {
		var n = e.getBoundingRect().calculateTransform(t);
		e.applyTransform(n);
	}
}
function qu(e, t) {
	return vo(e, e, { lineWidth: t }), e;
}
function Ju(e) {
	return yo(e.shape, e.shape, e.style), e;
}
var Yu = bo;
function Xu(e, t) {
	for (var n = dt([]); e && e !== t;) pt(n, e.getLocalTransform(), n), e = e.parent;
	return n;
}
function Zu(e, t, n) {
	return t && !ae(t) && (t = Mn.getLocalTransform(t)), n && (t = _t([], t)), Sn([], e, t);
}
function Qu(e, t, n) {
	var r = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [e === "left" ? -r : e === "right" ? r : 0, e === "top" ? -i : e === "bottom" ? i : 0];
	return a = Zu(a, t, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function $u(e) {
	return !e.isGroup;
}
function ed(e) {
	return e.shape != null;
}
function td(e, t, n) {
	if (!e || !t) return;
	function r(e) {
		var t = {};
		return e.traverse(function(e) {
			$u(e) && e.anid && (t[e.anid] = e);
		}), t;
	}
	function i(e) {
		var t = {
			x: e.x,
			y: e.y,
			rotation: e.rotation
		};
		return ed(e) && (t.shape = N({}, e.shape)), t;
	}
	var a = r(e);
	t.traverse(function(e) {
		if ($u(e) && e.anid) {
			var t = a[e.anid];
			if (t) {
				var r = i(e);
				e.attr(i(t)), Eu(e, r, n, Q(e).dataIndex);
			}
		}
	});
}
function nd(e, t) {
	return L(e, function(e) {
		var n = e[0];
		n = Pu(n, t.x), n = Fu(n, t.x + t.width);
		var r = e[1];
		return r = Pu(r, t.y), r = Fu(r, t.y + t.height), [n, r];
	});
}
function rd(e, t) {
	var n = Pu(e.x, t.x), r = Fu(e.x + e.width, t.x + t.width), i = Pu(e.y, t.y), a = Fu(e.y + e.height, t.y + t.height);
	if (r >= n && a >= i) return {
		x: n,
		y: i,
		width: r - n,
		height: a - i
	};
}
function id(e, t, n) {
	var r = N({ rectHover: !0 }, t), i = r.style = { strokeNoScale: !0 };
	if (n ||= {
		x: -1,
		y: -1,
		width: 2,
		height: 2
	}, e) return e.indexOf("image://") === 0 ? (i.image = e.slice(8), P(i, n), new ho(r)) : Hu(e.replace("path://", ""), r, n, "center");
}
function ad(e, t, n, r, i) {
	for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
		var s = i[a];
		if (od(e, t, n, r, s[0], s[1], o[0], o[1])) return !0;
		o = s;
	}
}
function od(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = sd(u, d, c, l);
	if (cd(f)) return !1;
	var p = e - i, m = t - a, h = sd(p, m, c, l) / f;
	if (h < 0 || h > 1) return !1;
	var g = sd(p, m, u, d) / f;
	return !(g < 0 || g > 1);
}
function sd(e, t, n, r) {
	return e * r - n * t;
}
function cd(e) {
	return e <= 1e-6 && e >= -1e-6;
}
function ld(e) {
	var t = e.itemTooltipOption, n = e.componentModel, r = e.itemName, i = W(t) ? { formatter: t } : t, a = n.mainType, o = n.componentIndex, s = {
		componentType: a,
		name: r,
		$vars: ["name"]
	};
	s[a + "Index"] = o;
	var c = e.formatterParamsExtra;
	c && I(B(c), function(e) {
		J(s, e) || (s[e] = c[e], s.$vars.push(e));
	});
	var l = Q(e.el);
	l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
		name: r,
		option: P({
			content: r,
			encodeHTMLContent: !0,
			formatterParams: s
		}, i)
	};
}
function ud(e, t) {
	var n;
	e.isGroup && (n = t(e)), n || e.traverse(t);
}
function dd(e, t) {
	if (e) {
		if (H(e)) for (var n = 0; n < e.length; n++) ud(e[n], t);
		else ud(e, t);
	}
}
Bu("circle", kl), Bu("ellipse", jl), Bu("sector", Jl), Bu("ring", Xl), Bu("polygon", eu), Bu("polyline", nu), Bu("rect", Co), Bu("line", au), Bu("bezierCurve", lu), Bu("arc", du);
//#endregion
//#region node_modules/echarts/lib/label/labelStyle.js
var fd = {};
function pd(e, t) {
	for (var n = 0; n < nc.length; n++) {
		var r = nc[n], i = t[r], a = e.ensureState(r);
		a.style = a.style || {}, a.style.text = i;
	}
	var o = e.currentStates.slice();
	e.clearStates(!0), e.setStyle({ text: t.normal }), e.useStates(o, !0);
}
function md(e, t, n) {
	var r = e.labelFetcher, i = e.labelDataIndex, a = e.labelDimIndex, o = t.normal, s;
	r && (s = r.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), n == null ? null : { interpolatedValue: n })), s ??= U(e.defaultText) ? e.defaultText(i, e, n) : e.defaultText;
	for (var c = { normal: s }, l = 0; l < nc.length; l++) {
		var u = nc[l], d = t[u];
		c[u] = K(r ? r.getFormattedLabel(i, u, null, a, d && d.get("formatter")) : null, s);
	}
	return c;
}
function hd(e, t, n, r) {
	n ||= fd;
	for (var i = e instanceof Do, a = !1, o = 0; o < rc.length; o++) {
		var s = t[rc[o]];
		if (s && s.getShallow("show")) {
			a = !0;
			break;
		}
	}
	var c = i ? e : e.getTextContent();
	if (a) {
		i || (c || (c = new Do(), e.setTextContent(c)), e.stateProxy && (c.stateProxy = e.stateProxy));
		var l = md(n, t), u = t.normal, d = !!u.getShallow("show"), f = _d(u, r && r.normal, n, !1, !i);
		f.text = l.normal, i || e.setTextConfig(vd(u, n, !1));
		for (var o = 0; o < nc.length; o++) {
			var p = nc[o], s = t[p];
			if (s) {
				var m = c.ensureState(p), h = !!K(s.getShallow("show"), d);
				if (h !== d && (m.ignore = !h), m.style = _d(s, r && r[p], n, !0, !i), m.style.text = l[p], !i) {
					var g = e.ensureState(p);
					g.textConfig = vd(s, n, !0);
				}
			}
		}
		c.silent = !!u.getShallow("silent"), c.style.x != null && (f.x = c.style.x), c.style.y != null && (f.y = c.style.y), c.ignore = !d, c.useStyle(f), c.dirty(), n.enableTextSetter && (Ed(c).setLabelText = function(e) {
			var r = md(n, t, e);
			pd(c, r);
		});
	} else c && (c.ignore = !0);
	e.dirty();
}
function gd(e, t) {
	t ||= "label";
	for (var n = { normal: e.getModel(t) }, r = 0; r < nc.length; r++) {
		var i = nc[r];
		n[i] = e.getModel([i, t]);
	}
	return n;
}
function _d(e, t, n, r, i) {
	var a = {};
	return yd(a, e, n, r, i), t && N(a, t), a;
}
function vd(e, t, n) {
	t ||= {};
	var r = {}, i, a = e.getShallow("rotate"), o = K(e.getShallow("distance"), n ? null : 5), s = e.getShallow("offset");
	return i = e.getShallow("position") || (n ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (r.position = i), s != null && (r.offset = s), a != null && (a *= Math.PI / 180, r.rotation = a), o != null && (r.distance = o), r.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", r;
}
function yd(e, t, n, r, i) {
	n ||= fd;
	var a = t.ecModel, o = a && a.option.textStyle, s = bd(t), c;
	if (s) {
		for (var l in c = {}, s) if (s.hasOwnProperty(l)) {
			var u = t.getModel(["rich", l]);
			wd(c[l] = {}, u, o, n, r, i, !1, !0);
		}
	}
	c && (e.rich = c);
	var d = t.get("overflow");
	d && (e.overflow = d);
	var f = t.get("minMargin");
	f != null && (e.margin = f), wd(e, t, o, n, r, i, !0, !1);
}
function bd(e) {
	for (var t; e && e !== e.ecModel;) {
		var n = (e.option || fd).rich;
		if (n) {
			t ||= {};
			for (var r = B(n), i = 0; i < r.length; i++) {
				var a = r[i];
				t[a] = 1;
			}
		}
		e = e.parentModel;
	}
	return t;
}
var xd = [
	"fontStyle",
	"fontWeight",
	"fontSize",
	"fontFamily",
	"textShadowColor",
	"textShadowBlur",
	"textShadowOffsetX",
	"textShadowOffsetY"
], Sd = [
	"align",
	"lineHeight",
	"width",
	"height",
	"tag",
	"verticalAlign",
	"ellipsis"
], Cd = [
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
function wd(e, t, n, r, i, a, o, s) {
	n = !i && n || fd;
	var c = r && r.inheritColor, l = t.getShallow("color"), u = t.getShallow("textBorderColor"), d = K(t.getShallow("opacity"), n.opacity);
	(l === "inherit" || l === "auto") && (l = c || null), (u === "inherit" || u === "auto") && (u = c || null), a || (l ||= n.color, u ||= n.textBorderColor), l != null && (e.fill = l), u != null && (e.stroke = u);
	var f = K(t.getShallow("textBorderWidth"), n.textBorderWidth);
	f != null && (e.lineWidth = f);
	var p = K(t.getShallow("textBorderType"), n.textBorderType);
	p != null && (e.lineDash = p);
	var m = K(t.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
	m != null && (e.lineDashOffset = m), !i && d == null && !s && (d = r && r.defaultOpacity), d != null && (e.opacity = d), !i && !a && e.fill == null && r.inheritColor && (e.fill = r.inheritColor);
	for (var h = 0; h < xd.length; h++) {
		var g = xd[h], _ = K(t.getShallow(g), n[g]);
		_ != null && (e[g] = _);
	}
	for (var h = 0; h < Sd.length; h++) {
		var g = Sd[h], _ = t.getShallow(g);
		_ != null && (e[g] = _);
	}
	if (e.verticalAlign == null) {
		var v = t.getShallow("baseline");
		v != null && (e.verticalAlign = v);
	}
	if (!o || !r.disableBox) {
		for (var h = 0; h < Cd.length; h++) {
			var g = Cd[h], _ = t.getShallow(g);
			_ != null && (e[g] = _);
		}
		var y = t.getShallow("borderType");
		y != null && (e.borderDash = y), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && c && (e.backgroundColor = c), (e.borderColor === "auto" || e.borderColor === "inherit") && c && (e.borderColor = c);
	}
}
function Td(e, t) {
	var n = t && t.getModel("textStyle");
	return Ce([
		e.fontStyle || n && n.getShallow("fontStyle") || "",
		e.fontWeight || n && n.getShallow("fontWeight") || "",
		(e.fontSize || n && n.getShallow("fontSize") || 12) + "px",
		e.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"
	].join(" "));
}
var Ed = Bs();
function Dd(e, t, n, r) {
	if (e) {
		var i = Ed(e);
		i.prevValue = i.value, i.value = n;
		var a = t.normal;
		i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = r, i.statesModels = t);
	}
}
function Od(e, t, n, r, i) {
	var a = Ed(e);
	if (!a.valueAnimation || a.prevValue === a.value) return;
	var o = a.defaultInterpolatedText, s = K(a.interpolatedValue, a.prevValue), c = a.value;
	function l(r) {
		var l = Xs(n, a.precision, s, c, r);
		a.interpolatedValue = r === 1 ? null : l, pd(e, md({
			labelDataIndex: t,
			labelFetcher: i,
			defaultText: o ? o(l) : l + ""
		}, a.statesModels, l));
	}
	e.percent = 0, (a.prevValue == null ? Du : Eu)(e, { percent: 1 }, r, t, null, l);
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/textStyle.js
var kd = ["textStyle", "color"], Ad = [
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
], jd = new Do(), Md = function() {
	function e() {}
	return e.prototype.getTextColor = function(e) {
		var t = this.ecModel;
		return this.getShallow("color") || (!e && t ? t.get(kd) : null);
	}, e.prototype.getFont = function() {
		return Td({
			fontStyle: this.getShallow("fontStyle"),
			fontWeight: this.getShallow("fontWeight"),
			fontSize: this.getShallow("fontSize"),
			fontFamily: this.getShallow("fontFamily")
		}, this.ecModel);
	}, e.prototype.getTextRect = function(e) {
		for (var t = {
			text: e,
			verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
		}, n = 0; n < Ad.length; n++) t[Ad[n]] = this.getShallow(Ad[n]);
		return jd.useStyle(t), jd.update(), jd.getBoundingRect();
	}, e;
}(), Nd = [
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
], Pd = Qe(Nd), Fd = function() {
	function e() {}
	return e.prototype.getLineStyle = function(e) {
		return Pd(this, e);
	}, e;
}(), Id = [
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
], Ld = Qe(Id), Rd = function() {
	function e() {}
	return e.prototype.getItemStyle = function(e, t) {
		return Ld(this, e, t);
	}, e;
}(), zd = function() {
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
		if (!Y.node && this.option) {
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
We(zd), Je(zd), ie(zd, Fd), ie(zd, Rd), ie(zd, et), ie(zd, Md);
//#endregion
//#region node_modules/echarts/lib/data/DataDiffer.js
function Bd(e) {
	return e == null ? 0 : e.length || 1;
}
function Vd(e) {
	return e;
}
var Hd = function() {
	function e(e, t, n, r, i, a) {
		this._old = e, this._new = t, this._oldKeyGetter = n || Vd, this._newKeyGetter = r || Vd, this.context = i, this._diffModeMultiple = a === "multiple";
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
			var o = r[a], s = n[o], c = Bd(s);
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
			var s = i[o], c = n[s], l = r[s], u = Bd(c), d = Bd(l);
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
			var r = e[n], i = t[r], a = Bd(i);
			if (a > 1) for (var o = 0; o < a; o++) this._add && this._add(i[o]);
			else a === 1 && this._add && this._add(i);
			t[r] = null;
		}
	}, e.prototype._initIndexMap = function(e, t, n, r) {
		for (var i = this._diffModeMultiple, a = 0; a < e.length; a++) {
			var o = "_ec_" + this[r](e[a], a);
			if (i || (n[a] = o), t) {
				var s = t[o], c = Bd(s);
				c === 0 ? (t[o] = a, i && n.push(o)) : c === 1 ? t[o] = [s, a] : s.push(a);
			}
		}
	}, e;
}(), Ud = q([
	"tooltip",
	"label",
	"itemName",
	"itemId",
	"itemGroupId",
	"itemChildGroupId",
	"seriesName"
]), Wd = "original", Gd = "arrayRows", Kd = "objectRows", qd = "keyedColumns", Jd = "typedArray", Yd = "unknown", Xd = "column", Zd = {
	Must: 1,
	Might: 2,
	Not: 3
}, Qd = Bs();
function $d(e) {
	Qd(e).datasetMap = q();
}
function ef(e, t, n) {
	var r = {}, i = nf(t);
	if (!i || !e) return r;
	var a = [], o = [], s = t.ecModel, c = Qd(s).datasetMap, l = i.uid + "_" + n.seriesLayoutBy, u, d;
	e = e.slice(), I(e, function(t, n) {
		var i = G(t) ? t : e[n] = { name: t };
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
function tf(e, t, n) {
	var r = {};
	if (!nf(e)) return r;
	var i = t.sourceFormat, a = t.dimensionsDefine, o;
	(i === "objectRows" || i === "keyedColumns") && I(a, function(e, t) {
		(G(e) ? e.name : e) === "name" && (o = t);
	});
	var s = function() {
		for (var e = {}, r = {}, s = [], c = 0, l = Math.min(5, n); c < l; c++) {
			var u = of(t.data, i, t.seriesLayoutBy, a, t.startIndex, c);
			s.push(u);
			var d = u === Zd.Not;
			if (d && e.v == null && c !== o && (e.v = c), (e.n == null || e.n === e.v || !d && s[e.n] === Zd.Not) && (e.n = c), f(e) && s[e.n] !== Zd.Not) return e;
			d || (u === Zd.Might && r.v == null && c !== o && (r.v = c), (r.n == null || r.n === r.v) && (r.n = c));
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
function nf(e) {
	if (!e.get("data", !0)) return Ks(e.ecModel, "dataset", {
		index: e.get("datasetIndex", !0),
		id: e.get("datasetId", !0)
	}, Ws).models[0];
}
function rf(e) {
	return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : Ks(e.ecModel, "dataset", {
		index: e.get("fromDatasetIndex", !0),
		id: e.get("fromDatasetId", !0)
	}, Ws).models;
}
function af(e, t) {
	return of(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t);
}
function of(e, t, n, r, i, a) {
	var o, s = 5;
	if (fe(e)) return Zd.Not;
	var c, l;
	if (r) {
		var u = r[a];
		G(u) ? (c = u.name, l = u.type) : W(u) && (c = u);
	}
	if (l != null) return l === "ordinal" ? Zd.Must : Zd.Not;
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
		if (!c) return Zd.Not;
		for (var p = 0; p < h.length && p < s; p++) {
			var g = h[p];
			if (g && (o = b(g[c])) != null) return o;
		}
	} else if (t === "keyedColumns") {
		var _ = e;
		if (!c) return Zd.Not;
		var f = _[c];
		if (!f || fe(f)) return Zd.Not;
		for (var p = 0; p < f.length && p < s; p++) if ((o = b(f[p])) != null) return o;
	} else if (t === "original") for (var v = e, p = 0; p < v.length && p < s; p++) {
		var g = v[p], y = Ss(g);
		if (!H(y)) return Zd.Not;
		if ((o = b(y[a])) != null) return o;
	}
	function b(e) {
		var t = W(e);
		if (e != null && Number.isFinite(Number(e)) && e !== "") return t ? Zd.Might : Zd.Not;
		if (t && e !== "-") return Zd.Must;
	}
	return Zd.Not;
}
//#endregion
//#region node_modules/echarts/lib/data/Source.js
var sf = function() {
	function e(e) {
		this.data = e.data || (e.sourceFormat === "keyedColumns" ? {} : []), this.sourceFormat = e.sourceFormat || "unknown", this.seriesLayoutBy = e.seriesLayoutBy || "column", this.startIndex = e.startIndex || 0, this.dimensionsDetectedCount = e.dimensionsDetectedCount, this.metaRawOption = e.metaRawOption;
		var t = this.dimensionsDefine = e.dimensionsDefine;
		if (t) for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.type == null && af(this, n) === Zd.Must && (r.type = "ordinal");
		}
	}
	return e;
}();
function cf(e) {
	return e instanceof sf;
}
function lf(e, t, n) {
	n ||= ff(e);
	var r = t.seriesLayoutBy, i = pf(e, n, r, t.sourceHeader, t.dimensions);
	return new sf({
		data: e,
		sourceFormat: n,
		seriesLayoutBy: r,
		dimensionsDefine: i.dimensionsDefine,
		startIndex: i.startIndex,
		dimensionsDetectedCount: i.dimensionsDetectedCount,
		metaRawOption: j(t)
	});
}
function uf(e) {
	return new sf({
		data: e,
		sourceFormat: fe(e) ? Jd : Wd
	});
}
function df(e) {
	return new sf({
		data: e.data,
		sourceFormat: e.sourceFormat,
		seriesLayoutBy: e.seriesLayoutBy,
		dimensionsDefine: j(e.dimensionsDefine),
		startIndex: e.startIndex,
		dimensionsDetectedCount: e.dimensionsDetectedCount
	});
}
function ff(e) {
	var t = Yd;
	if (fe(e)) t = Jd;
	else if (H(e)) {
		e.length === 0 && (t = Gd);
		for (var n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			if (i != null) {
				if (H(i) || fe(i)) {
					t = Gd;
					break;
				}
				if (G(i)) {
					t = Kd;
					break;
				}
			}
		}
	} else if (G(e)) {
		for (var a in e) if (J(e, a) && ae(e[a])) {
			t = qd;
			break;
		}
	}
	return t;
}
function pf(e, t, n, r, i) {
	var a, o;
	if (!e) return {
		dimensionsDefine: hf(i),
		startIndex: o,
		dimensionsDetectedCount: a
	};
	if (t === "arrayRows") {
		var s = e;
		r === "auto" || r == null ? gf(function(e) {
			e != null && e !== "-" && (W(e) ? o ??= 1 : o = 0);
		}, n, s, 10) : o = ue(r) ? r : +!!r, !i && o === 1 && (i = [], gf(function(e, t) {
			i[t] = e == null ? "" : e + "";
		}, n, s, Infinity)), a = i ? i.length : n === "row" ? s.length : s[0] ? s[0].length : null;
	} else if (t === "objectRows") i ||= mf(e);
	else if (t === "keyedColumns") i || (i = [], I(e, function(e, t) {
		i.push(t);
	}));
	else if (t === "original") {
		var c = Ss(e[0]);
		a = H(c) && c.length || 1;
	}
	return {
		startIndex: o,
		dimensionsDefine: hf(i),
		dimensionsDetectedCount: a
	};
}
function mf(e) {
	for (var t = 0, n; t < e.length && !(n = e[t++]););
	if (n) return B(n);
}
function hf(e) {
	if (e) {
		var t = q();
		return L(e, function(e, n) {
			e = G(e) ? e : { name: e };
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
function gf(e, t, n, r) {
	if (t === "row") for (var i = 0; i < n.length && i < r; i++) e(n[i] ? n[i][0] : null, i);
	else for (var a = n[0] || [], i = 0; i < a.length && i < r; i++) e(a[i], i);
}
function _f(e) {
	var t = e.sourceFormat;
	return t === "objectRows" || t === "keyedColumns";
}
//#endregion
//#region node_modules/echarts/lib/data/helper/dataProvider.js
var vf, yf, bf, xf, Sf, Cf = function() {
	function e(e, t) {
		var n = cf(e) ? e : uf(e);
		this._source = n;
		var r = this._data = n.data;
		n.sourceFormat === "typedArray" && (this._offset = 0, this._dimSize = t, this._data = r), Sf(this, r, n);
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
		Sf = function(e, i, a) {
			var o = a.sourceFormat, s = a.seriesLayoutBy, c = a.startIndex, l = a.dimensionsDefine, u = xf[Nf(o, s)];
			N(e, u), o === "typedArray" ? (e.getItem = t, e.count = r, e.fillStorage = n) : (e.getItem = V(Ef(o, s), null, i, c, l), e.count = V(kf(o, s), null, i, c, l));
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
		xf = (e = {}, e[Gd + "_" + Xd] = {
			pure: !0,
			appendData: i
		}, e[Gd + "_row"] = {
			pure: !0,
			appendData: function() {
				throw Error("Do not support appendData when set seriesLayoutBy: \"row\".");
			}
		}, e[Kd] = {
			pure: !0,
			appendData: i
		}, e[qd] = {
			pure: !0,
			appendData: function(e) {
				var t = this._data;
				I(e, function(e, n) {
					for (var r = t[n] || (t[n] = []), i = 0; i < (e || []).length; i++) r.push(e[i]);
				});
			}
		}, e[Wd] = { appendData: i }, e[Jd] = {
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
}(), wf = function(e, t, n, r) {
	return e[r];
}, Tf = (vf = {}, vf[Gd + "_" + Xd] = function(e, t, n, r) {
	return e[r + t];
}, vf[Gd + "_row"] = function(e, t, n, r, i) {
	r += t;
	for (var a = i || [], o = e, s = 0; s < o.length; s++) {
		var c = o[s];
		a[s] = c ? c[r] : null;
	}
	return a;
}, vf[Kd] = wf, vf[qd] = function(e, t, n, r, i) {
	for (var a = i || [], o = 0; o < n.length; o++) {
		var s = e[n[o].name];
		a[o] = s ? s[r] : null;
	}
	return a;
}, vf[Wd] = wf, vf);
function Ef(e, t) {
	return Tf[Nf(e, t)];
}
var Df = function(e, t, n) {
	return e.length;
}, Of = (yf = {}, yf[Gd + "_" + Xd] = function(e, t, n) {
	return Math.max(0, e.length - t);
}, yf[Gd + "_row"] = function(e, t, n) {
	var r = e[0];
	return r ? Math.max(0, r.length - t) : 0;
}, yf[Kd] = Df, yf[qd] = function(e, t, n) {
	var r = e[n[0].name];
	return r ? r.length : 0;
}, yf[Wd] = Df, yf);
function kf(e, t) {
	return Of[Nf(e, t)];
}
var Af = function(e, t, n) {
	return e[t];
}, jf = (bf = {}, bf[Gd] = Af, bf[Kd] = function(e, t, n) {
	return e[n];
}, bf[qd] = Af, bf[Wd] = function(e, t, n) {
	var r = Ss(e);
	return r instanceof Array ? r[t] : r;
}, bf[Jd] = Af, bf);
function Mf(e) {
	return jf[e];
}
function Nf(e, t) {
	return e === "arrayRows" ? e + "_" + t : e;
}
function Pf(e, t, n) {
	if (e) {
		var r = e.getRawDataItem(t);
		if (r != null) {
			var i = e.getStore(), a = i.getSource().sourceFormat;
			if (n != null) {
				var o = e.getDimensionIndex(n), s = i.getDimensionProperty(o);
				return Mf(a)(r, o, s);
			}
			var c = r;
			return a === "original" && (c = Ss(r)), c;
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/data/helper/dimensionHelper.js
var Ff = function() {
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
function If(e, t) {
	var n = {}, r = n.encode = {}, i = q(), a = [], o = [], s = {};
	I(e.dimensions, function(t) {
		var n = e.getDimensionInfo(t), c = n.coordDim;
		if (c) {
			var l = n.coordDimIndex;
			Lf(r, c)[l] = t, n.isExtraCoord || (i.set(c, 1), zf(n.type) && (a[0] = t), Lf(s, c)[l] = e.getDimensionIndex(n.name)), n.defaultTooltip && o.push(t);
		}
		Ud.each(function(e, t) {
			var i = Lf(r, t), a = n.otherDims[t];
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
	return d && d.length ? o = d.slice() : o.length || (o = a.slice()), r.defaultedLabel = a, r.defaultedTooltip = o, n.userOutput = new Ff(s, t), n;
}
function Lf(e, t) {
	return e.hasOwnProperty(t) || (e[t] = []), e[t];
}
function Rf(e) {
	return e === "category" ? "ordinal" : e === "time" ? "time" : "float";
}
function zf(e) {
	return e !== "ordinal" && e !== "time";
}
//#endregion
//#region node_modules/echarts/lib/data/SeriesDimensionDefine.js
var Bf = function() {
	function e(e) {
		this.otherDims = {}, e != null && N(this, e);
	}
	return e;
}();
//#endregion
//#region node_modules/echarts/lib/data/helper/dataValueHelper.js
function Vf(e, t) {
	var n = t && t.type;
	return n === "ordinal" ? e : (n === "time" && !ue(e) && e != null && e !== "-" && (e = +is(e)), e == null || e === "" ? NaN : Number(e));
}
q({
	number: function(e) {
		return parseFloat(e);
	},
	time: function(e) {
		return +is(e);
	},
	trim: function(e) {
		return W(e) ? Ce(e) : e;
	}
});
var Hf = {
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
		ue(t) || hs(""), this._opFn = Hf[e], this._rvalFloat = us(t);
	}
	return e.prototype.evaluate = function(e) {
		return ue(e) ? this._opFn(e, this._rvalFloat) : this._opFn(us(e), this._rvalFloat);
	}, e;
})();
var Uf = function() {
	function e(e, t) {
		var n = e === "desc";
		this._resultLT = n ? 1 : -1, t ??= n ? "min" : "max", this._incomparable = t === "min" ? -Infinity : Infinity;
	}
	return e.prototype.evaluate = function(e, t) {
		var n = ue(e) ? e : us(e), r = ue(t) ? t : us(t), i = isNaN(n), a = isNaN(r);
		if (i && (n = this._incomparable), a && (r = this._incomparable), i && a) {
			var o = W(e), s = W(t);
			o && (n = s ? e : 0), s && (r = o ? t : 0);
		}
		return n < r ? this._resultLT : n > r ? -this._resultLT : 0;
	}, e;
}();
(function() {
	function e(e, t) {
		this._rval = t, this._isEQ = e, this._rvalTypeof = typeof t, this._rvalFloat = us(t);
	}
	return e.prototype.evaluate = function(e) {
		var t = e === this._rval;
		if (!t) {
			var n = typeof e;
			n !== this._rvalTypeof && (n === "number" || this._rvalTypeof === "number") && (t = us(e) === this._rvalFloat);
		}
		return this._isEQ ? t : !t;
	}, e;
})();
//#endregion
//#region node_modules/echarts/lib/data/DataStore.js
var Wf = "undefined", Gf = typeof Uint32Array === Wf ? Array : Uint32Array, Kf = typeof Uint16Array === Wf ? Array : Uint16Array, qf = typeof Int32Array === Wf ? Array : Int32Array, Jf = typeof Float64Array === Wf ? Array : Float64Array, Yf = {
	float: Jf,
	int: qf,
	ordinal: Array,
	number: Array,
	time: Jf
}, Xf;
function Zf(e) {
	return e > 65535 ? Gf : Kf;
}
function Qf() {
	return [Infinity, -Infinity];
}
function $f(e) {
	var t = e.constructor;
	return t === Array ? e.slice() : new t(e);
}
function ep(e, t, n, r, i) {
	var a = Yf[n || "float"];
	if (i) {
		var o = e[t], s = o && o.length;
		if (s !== r) {
			for (var c = new a(r), l = 0; l < s; l++) c[l] = o[l];
			e[t] = c;
		}
	} else e[t] = new a(r);
}
var tp = function() {
	function e() {
		this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = q();
	}
	return e.prototype.initData = function(e, t, n) {
		this._provider = e, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
		var r = e.getSource(), i = this.defaultDimValueGetter = Xf[r.sourceFormat];
		this._dimValueGetter = n || i, this._rawExtent = [], _f(r), this._dimensions = L(t, function(e) {
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
		return r[i] = { type: t }, n.set(e, i), this._chunks[i] = new Yf[t || "float"](this._rawCount), this._rawExtent[i] = Qf(), i;
	}, e.prototype.collectOrdinalMeta = function(e, t) {
		var n = this._chunks[e], r = this._dimensions[e], i = this._rawExtent, a = r.ordinalOffset || 0, o = n.length;
		a === 0 && (i[e] = Qf());
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
			ep(n, c, l.type, s, !0);
		}
		for (var u = [], d = o; d < s; d++) for (var f = d - o, p = 0; p < i; p++) {
			var l = r[p], m = Xf.arrayRows.call(this, e[f] || u, l.property, f, p);
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
			s[l] || (s[l] = Qf()), ep(i, l, u.type, t, n);
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
		});
		var n = t.sort(function(e, t) {
			return e - t;
		}), r = this.count();
		return r === 0 ? 0 : r % 2 == 1 ? n[(r - 1) / 2] : (n[r / 2] + n[r / 2 - 1]) / 2;
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
	}, e.prototype.indicesOfNearest = function(e, t, n) {
		var r = this._chunks[e], i = [];
		if (!r) return i;
		n ??= Infinity;
		for (var a = Infinity, o = -1, s = 0, c = 0, l = this.count(); c < l; c++) {
			var u = t - r[this.getRawIndex(c)], d = Math.abs(u);
			d <= n && ((d < a || d === a && u >= 0 && o < 0) && (a = d, o = u, s = 0), u === o && (i[s++] = c));
		}
		return i.length = s, i;
	}, e.prototype.getIndices = function() {
		var e, t = this._indices;
		if (t) {
			var n = t.constructor, r = this._count;
			if (n === Array) {
				e = new n(r);
				for (var i = 0; i < r; i++) e[i] = t[i];
			} else e = new n(t.buffer, 0, r);
		} else {
			var n = Zf(this._rawCount);
			e = new n(this.count());
			for (var i = 0; i < e.length; i++) e[i] = i;
		}
		return e;
	}, e.prototype.filter = function(e, t) {
		if (!this._count) return this;
		for (var n = this.clone(), r = n.count(), i = new (Zf(n._rawCount))(r), a = [], o = e.length, s = 0, c = e[0], l = n._chunks, u = 0; u < r; u++) {
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
		var r = B(e), i = r.length;
		if (!i) return this;
		var a = t.count(), o = new (Zf(t._rawCount))(a), s = 0, c = r[0], l = e[c][0], u = e[c][1], d = t._chunks, f = !1;
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
		for (var r = e._chunks, i = [], a = t.length, o = e.count(), s = [], c = e._rawExtent, l = 0; l < t.length; l++) c[t[l]] = Qf();
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
		var n = this.clone([e], !0), r = n._chunks[e], i = this.count(), a = 0, o = Math.floor(1 / t), s = this.getRawIndex(0), c, l, u, d = new (Zf(this._rawCount))(Math.min((Math.ceil(i / o) + 2) * 2, i));
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
				isNaN(y) ? (T++, w < 0 && (w = v)) : (l = Math.abs((S - h) * (y - C) - (S - _) * (g - C)), l > c && (c = l, u = v));
			}
			T > 0 && T < x - b && (d[a++] = Math.min(w, u), u = Math.max(w, u)), d[a++] = u, s = u;
		}
		return d[a++] = this.getRawIndex(i - 1), n._count = a, n._indices = d, n.getRawIndex = this._getRawIdx, n;
	}, e.prototype.minmaxDownSample = function(e, t) {
		for (var n = this.clone([e], !0), r = n._chunks, i = Math.floor(1 / t), a = r[e], o = this.count(), s = new (Zf(this._rawCount))(Math.ceil(o / i) * 2), c = 0, l = 0; l < o; l += i) {
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
		for (var i = this.clone([e], !0), a = i._chunks, o = [], s = Math.floor(1 / t), c = a[e], l = this.count(), u = i._rawExtent[e] = Qf(), d = new (Zf(this._rawCount))(Math.ceil(l / s)), f = 0, p = 0; p < l; p += s) {
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
	}, e.prototype.getDataExtent = function(e) {
		var t = this._chunks[e], n = Qf();
		if (!t) return n;
		var r = this.count(), i = !this._indices, a;
		if (i) return this._rawExtent[e].slice();
		if (a = this._extent[e], a) return a.slice();
		a = n;
		for (var o = a[0], s = a[1], c = 0; c < r; c++) {
			var l = t[this.getRawIndex(c)];
			l < o && (o = l), l > s && (s = l);
		}
		return a = [o, s], this._extent[e] = a, a;
	}, e.prototype.getRawDataItem = function(e) {
		var t = this.getRawIndex(e);
		if (this._provider.persistent) return this._provider.getItem(t);
		for (var n = [], r = this._chunks, i = 0; i < r.length; i++) n.push(r[i][t]);
		return n;
	}, e.prototype.clone = function(t, n) {
		var r = new e(), i = this._chunks, a = t && oe(t, function(e, t) {
			return e[t] = !0, e;
		}, {});
		if (a) for (var o = 0; o < i.length; o++) r._chunks[o] = a[o] ? $f(i[o]) : i[o];
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
			return Vf(e[r], this._dimensions[r]);
		}
		Xf = {
			arrayRows: e,
			objectRows: function(e, t, n, r) {
				return Vf(e[t], this._dimensions[r]);
			},
			keyedColumns: e,
			original: function(e, t, n, r) {
				var i = e && (e.value == null ? e : e.value);
				return Vf(i instanceof Array ? i[r] : i, this._dimensions[r]);
			},
			typedArray: function(e, t, n, r) {
				return e[r];
			}
		};
	}(), e;
}(), np = Bs(), rp = {
	float: "f",
	int: "i",
	ordinal: "o",
	number: "n",
	time: "t"
}, ip = function() {
	function e(e) {
		this.dimensions = e.dimensions, this._dimOmitted = e.dimensionOmitted, this.source = e.source, this._fullDimCount = e.fullDimensionCount, this._updateDimOmitted(e.dimensionOmitted);
	}
	return e.prototype.isDimensionOmitted = function() {
		return this._dimOmitted;
	}, e.prototype._updateDimOmitted = function(e) {
		this._dimOmitted = e, e && (this._dimNameMap ||= sp(this.source));
	}, e.prototype.getSourceDimensionIndex = function(e) {
		return K(this._dimNameMap.get(e), -1);
	}, e.prototype.getSourceDimension = function(e) {
		var t = this.source.dimensionsDefine;
		if (t) return t[e];
	}, e.prototype.makeStoreSchema = function() {
		for (var e = this._fullDimCount, t = _f(this.source), n = !cp(e), r = "", i = [], a = 0, o = 0; a < e; a++) {
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
			}), t && s != null && (!u || !u.isCalculationCoord) && (r += n ? s.replace(/\`/g, "`1").replace(/\$/g, "`2") : s), r += "$", r += rp[c] || "f", l && (r += l.uid), r += "$";
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
function ap(e) {
	return e instanceof ip;
}
function op(e) {
	for (var t = q(), n = 0; n < (e || []).length; n++) {
		var r = e[n], i = G(r) ? r.name : r;
		i != null && t.get(i) == null && t.set(i, n);
	}
	return t;
}
function sp(e) {
	var t = np(e);
	return t.dimNameMap ||= op(e.dimensionsDefine);
}
function cp(e) {
	return e > 30;
}
//#endregion
//#region node_modules/echarts/lib/data/SeriesData.js
var lp = G, up = L, dp = typeof Int32Array > "u" ? Array : Int32Array, fp = "e\0\0", pp = -1, mp = [
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
], hp = ["_approximateExtent"], gp, _p, vp, yp, bp, xp, Sp, Cp = function() {
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
		ap(e) ? (n = e.dimensions, this._dimOmitted = e.isDimensionOmitted(), this._schema = e) : (r = !0, n = e), n ||= ["x", "y"];
		for (var i = {}, a = [], o = {}, s = !1, c = {}, l = 0; l < n.length; l++) {
			var u = n[l], d = W(u) ? new Bf({ name: u }) : u instanceof Bf ? u : new Bf(u), f = d.name;
			d.type = d.type || "float", d.coordDim || (d.coordDim = f, d.coordDimIndex = 0);
			var p = d.otherDims = d.otherDims || {};
			a.push(f), i[f] = d, c[f] != null && (s = !0), d.createInvertedIndices && (o[f] = []), p.itemName === 0 && (this._nameDimIdx = l), p.itemId === 0 && (this._idDimIdx = l), r && (d.storeDimIndex = l);
		}
		if (this.dimensions = a, this._dimInfos = i, this._initGetDimensionInfo(s), this.hostModel = t, this._invertedIndicesMap = o, this._dimOmitted) {
			var m = this._dimIdxToName = q();
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
		if (ue(e) || e != null && !isNaN(e) && !this._getDimInfo(e) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(e) < 0)) return +e;
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
		if (e instanceof tp && (i = e), !i) {
			var a = this.dimensions, o = cf(e) || ae(e) ? new Cf(e, a.length) : e;
			i = new tp();
			var s = up(a, function(e) {
				return {
					type: r._dimInfos[e].type,
					property: e
				};
			});
			i.initData(o, s, n);
		}
		this._store = i, this._nameList = (t || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i.count()), this._dimSummary = If(this, this._schema), this.userOutput = this._dimSummary.userOutput;
	}, e.prototype.appendData = function(e) {
		var t = this._store.appendData(e);
		this._doInit(t[0], t[1]);
	}, e.prototype.appendValues = function(e, t) {
		var n = this._store.appendValues(e, t && t.length), r = n.start, i = n.end, a = this._shouldMakeIdFromName();
		if (this._updateOrdinalMeta(), t) for (var o = r; o < i; o++) {
			var s = o - r;
			this._nameList[o] = t[s], a && Sp(this, o);
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
				if (!this.hasItemOption && Cs(s) && (this.hasItemOption = !0), s) {
					var c = s.name;
					r[o] == null && c != null && (r[o] = Ns(c, null));
					var l = s.id;
					i[o] == null && l != null && (i[o] = Ns(l, null));
				}
			}
			if (this._shouldMakeIdFromName()) for (var o = e; o < t; o++) Sp(this, o);
			gp(this);
		}
	}, e.prototype.getApproximateExtent = function(e) {
		return this._approximateExtent[e] || this._store.getDataExtent(this._getStoreDimIndex(e));
	}, e.prototype.setApproximateExtent = function(e, t) {
		t = this.getDimension(t), this._approximateExtent[t] = e.slice();
	}, e.prototype.getCalculationInfo = function(e) {
		return this._calculationInfo[e];
	}, e.prototype.setCalculationInfo = function(e, t) {
		lp(e) ? N(this._calculationInfo, e) : this._calculationInfo[e] = t;
	}, e.prototype.getName = function(e) {
		var t = this.getRawIndex(e), n = this._nameList[t];
		return n == null && this._nameDimIdx != null && (n = vp(this, this._nameDimIdx, t)), n ??= "", n;
	}, e.prototype._getCategory = function(e, t) {
		var n = this._store.get(e, t), r = this._store.getOrdinalMeta(e);
		return r ? r.categories[n] : n;
	}, e.prototype.getId = function(e) {
		return _p(this, this.getRawIndex(e));
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
		return this._store.getDataExtent(this._getStoreDimIndex(e));
	}, e.prototype.getSum = function(e) {
		return this._store.getSum(this._getStoreDimIndex(e));
	}, e.prototype.getMedian = function(e) {
		return this._store.getMedian(this._getStoreDimIndex(e));
	}, e.prototype.getValues = function(e, t) {
		var n = this, r = this._store;
		return H(e) ? r.getValues(up(e, function(e) {
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
		return r == null || isNaN(r) ? pp : r;
	}, e.prototype.indicesOfNearest = function(e, t, n) {
		return this._store.indicesOfNearest(this._getStoreDimIndex(e), t, n);
	}, e.prototype.each = function(e, t, n) {
		U(e) && (n = t, t = e, e = []);
		var r = n || this, i = up(yp(e), this._getStoreDimIndex, this);
		this._store.each(i, r ? V(t, r) : t);
	}, e.prototype.filterSelf = function(e, t, n) {
		U(e) && (n = t, t = e, e = []);
		var r = n || this, i = up(yp(e), this._getStoreDimIndex, this);
		return this._store = this._store.filter(i, r ? V(t, r) : t), this;
	}, e.prototype.selectRange = function(e) {
		var t = this, n = {}, r = B(e), i = [];
		return I(r, function(r) {
			var a = t._getStoreDimIndex(r);
			n[a] = e[r], i.push(a);
		}), this._store = this._store.selectRange(n), this;
	}, e.prototype.mapArray = function(e, t, n) {
		U(e) && (n = t, t = e, e = []), n ||= this;
		var r = [];
		return this.each(e, function() {
			r.push(t && t.apply(this, arguments));
		}, n), r;
	}, e.prototype.map = function(e, t, n, r) {
		var i = n || r || this, a = up(yp(e), this._getStoreDimIndex, this), o = xp(this);
		return o._store = this._store.map(a, i ? V(t, i) : t), o;
	}, e.prototype.modify = function(e, t, n, r) {
		var i = n || r || this, a = up(yp(e), this._getStoreDimIndex, this);
		this._store.modify(a, i ? V(t, i) : t);
	}, e.prototype.downSample = function(e, t, n, r) {
		var i = xp(this);
		return i._store = this._store.downSample(this._getStoreDimIndex(e), t, n, r), i;
	}, e.prototype.minmaxDownSample = function(e, t) {
		var n = xp(this);
		return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(e), t), n;
	}, e.prototype.lttbDownSample = function(e, t) {
		var n = xp(this);
		return n._store = this._store.lttbDownSample(this._getStoreDimIndex(e), t), n;
	}, e.prototype.getRawDataItem = function(e) {
		return this._store.getRawDataItem(e);
	}, e.prototype.getItemModel = function(e) {
		var t = this.hostModel;
		return new zd(this.getRawDataItem(e), t, t && t.ecModel);
	}, e.prototype.diff = function(e) {
		var t = this;
		return new Hd(e ? e.getStore().getIndices() : [], this.getStore().getIndices(), function(t) {
			return _p(e, t);
		}, function(e) {
			return _p(t, e);
		});
	}, e.prototype.getVisual = function(e) {
		var t = this._visual;
		return t && t[e];
	}, e.prototype.setVisual = function(e, t) {
		this._visual = this._visual || {}, lp(e) ? N(this._visual, e) : this._visual[e] = t;
	}, e.prototype.getItemVisual = function(e, t) {
		var n = this._itemVisuals[e];
		return (n && n[t]) ?? this.getVisual(t);
	}, e.prototype.hasItemVisual = function() {
		return this._itemVisuals.length > 0;
	}, e.prototype.ensureUniqueItemVisual = function(e, t) {
		var n = this._itemVisuals, r = n[e];
		r ||= n[e] = {};
		var i = r[t];
		return i ?? (i = this.getVisual(t), H(i) ? i = i.slice() : lp(i) && (i = N({}, i)), r[t] = i), i;
	}, e.prototype.setItemVisual = function(e, t, n) {
		var r = this._itemVisuals[e] || {};
		this._itemVisuals[e] = r, lp(t) ? N(r, t) : r[t] = n;
	}, e.prototype.clearAllVisual = function() {
		this._visual = {}, this._itemVisuals = [];
	}, e.prototype.setLayout = function(e, t) {
		lp(e) ? N(this._layout, e) : this._layout[e] = t;
	}, e.prototype.getLayout = function(e) {
		return this._layout[e];
	}, e.prototype.getItemLayout = function(e) {
		return this._itemLayouts[e];
	}, e.prototype.setItemLayout = function(e, t, n) {
		this._itemLayouts[e] = n ? N(this._itemLayouts[e] || {}, t) : t;
	}, e.prototype.clearItemLayouts = function() {
		this._itemLayouts.length = 0;
	}, e.prototype.setItemGraphicEl = function(e, t) {
		Zs(this.hostModel && this.hostModel.seriesIndex, this.dataType, e, t), this._graphicEls[e] = t;
	}, e.prototype.getItemGraphicEl = function(e) {
		return this._graphicEls[e];
	}, e.prototype.eachItemGraphicEl = function(e, t) {
		I(this._graphicEls, function(n, r) {
			n && e && e.call(t, n, r);
		});
	}, e.prototype.cloneShallow = function(t) {
		return t ||= new e(this._schema ? this._schema : up(this.dimensions, this._getDimInfo, this), this.hostModel), bp(t, this), t._store = this._store, t;
	}, e.prototype.wrapMethod = function(e, t) {
		var n = this[e];
		U(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(e), this[e] = function() {
			var e = n.apply(this, arguments);
			return t.apply(this, [e].concat(be(arguments)));
		});
	}, e.internalField = function() {
		gp = function(e) {
			var t = e._invertedIndicesMap;
			I(t, function(n, r) {
				var i = e._dimInfos[r], a = i.ordinalMeta, o = e._store;
				if (a) {
					n = t[r] = new dp(a.categories.length);
					for (var s = 0; s < n.length; s++) n[s] = pp;
					for (var s = 0; s < o.count(); s++) n[o.get(i.storeDimIndex, s)] = s;
				}
			});
		}, vp = function(e, t, n) {
			return Ns(e._getCategory(t, n), null);
		}, _p = function(e, t) {
			var n = e._idList[t];
			return n == null && e._idDimIdx != null && (n = vp(e, e._idDimIdx, t)), n ??= fp + t, n;
		}, yp = function(e) {
			return H(e) || (e = e == null ? [] : [e]), e;
		}, xp = function(t) {
			var n = new e(t._schema ? t._schema : up(t.dimensions, t._getDimInfo, t), t.hostModel);
			return bp(n, t), n;
		}, bp = function(e, t) {
			I(mp.concat(t.__wrappedMethods || []), function(n) {
				t.hasOwnProperty(n) && (e[n] = t[n]);
			}), e.__wrappedMethods = t.__wrappedMethods, I(hp, function(n) {
				e[n] = j(t[n]);
			}), e._calculationInfo = N({}, t._calculationInfo);
		}, Sp = function(e, t) {
			var n = e._nameList, r = e._idList, i = e._nameDimIdx, a = e._idDimIdx, o = n[t], s = r[t];
			if (o == null && i != null && (n[t] = o = vp(e, i, t)), s == null && a != null && (r[t] = s = vp(e, a, t)), s == null && o != null) {
				var c = e._nameRepeatCount, l = c[o] = (c[o] || 0) + 1;
				s = o, l > 1 && (s += "__ec__" + l), r[t] = s;
			}
		};
	}(), e;
}();
//#endregion
//#region node_modules/echarts/lib/data/helper/createDimensions.js
function wp(e, t) {
	return Tp(e, t).dimensions;
}
function Tp(e, t) {
	cf(e) || (e = uf(e)), t ||= {};
	var n = t.coordDimensions || [], r = t.dimensionsDefine || e.dimensionsDefine || [], i = q(), a = [], o = Dp(e, n, r, t.dimensionsCount), s = t.canOmitUnusedDimensions && cp(o), c = r === e.dimensionsDefine, l = c ? sp(e) : op(r), u = t.encodeDefine;
	!u && t.encodeDefaulter && (u = t.encodeDefaulter(e, o));
	for (var d = q(u), f = new qf(o), p = 0; p < f.length; p++) f[p] = -1;
	function m(e) {
		var t = f[e];
		if (t < 0) {
			var n = r[e], i = G(n) ? n : { name: n }, o = new Bf(), s = i.name;
			return s != null && l.get(s) != null && (o.name = o.displayName = s), i.type != null && (o.type = i.type), i.displayName != null && (o.displayName = i.displayName), f[e] = a.length, o.storeDimIndex = e, a.push(o), o;
		}
		return a[t];
	}
	if (!s) for (var p = 0; p < o; p++) m(p);
	d.each(function(e, t) {
		var n = ys(e).slice();
		if (n.length === 1 && !W(n[0]) && n[0] < 0) d.set(t, !1);
		else {
			var r = d.set(t, []);
			I(n, function(e, n) {
				var i = W(e) ? l.get(e) : e;
				i != null && i < o && (r[n] = i, g(m(i), t, n));
			});
		}
	});
	var h = 0;
	I(n, function(e) {
		var t, n, r, i;
		if (W(e)) t = e, i = {};
		else {
			i = e, t = i.name;
			var a = i.ordinalMeta;
			i.ordinalMeta = null, i = N({}, i), i.ordinalMeta = a, n = i.dimsDef, r = i.otherDims, i.name = i.coordDim = i.coordDimIndex = i.dimsDef = i.otherDims = null;
		}
		var s = d.get(t);
		if (s !== !1) {
			if (s = ys(s), !s.length) for (var l = 0; l < (n && n.length || 1); l++) {
				for (; h < o && m(h).coordDim != null;) h++;
				h < o && s.push(h++);
			}
			I(s, function(e, a) {
				var o = m(e);
				if (c && i.type != null && (o.type = i.type), g(P(o, i), t, a), o.name == null && n) {
					var s = n[a];
					!G(s) && (s = { name: s }), o.name = o.displayName = s.name, o.defaultTooltip = s.defaultTooltip;
				}
				r && P(o.otherDims, r);
			});
		}
	});
	function g(e, t, n) {
		Ud.get(t) == null ? (e.coordDim = t, e.coordDimIndex = n, i.set(t, !0)) : e.otherDims[t] = n;
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
		C.coordDim ?? (C.coordDim = Op(b, i, y), C.coordDimIndex = 0, (!_ || v <= 0) && (C.isExtraCoord = !0), v--), x(C), C.type == null && (af(e, S) === Zd.Must || C.isExtraCoord && (C.otherDims.itemName != null || C.otherDims.seriesName != null)) && (C.type = "ordinal");
	}
	return Ep(a), new ip({
		source: e,
		dimensions: a,
		fullDimensionCount: o,
		dimensionOmitted: s
	});
}
function Ep(e) {
	for (var t = q(), n = 0; n < e.length; n++) {
		var r = e[n], i = r.name, a = t.get(i) || 0;
		a > 0 && (r.name = i + (a - 1)), a++, t.set(i, a);
	}
}
function Dp(e, t, n, r) {
	var i = Math.max(e.dimensionsDetectedCount || 1, t.length, n.length, r || 0);
	return I(t, function(e) {
		var t;
		G(e) && (t = e.dimsDef) && (i = Math.max(i, t.length));
	}), i;
}
function Op(e, t, n) {
	if (n || t.hasKey(e)) {
		for (var r = 0; t.hasKey(e + r);) r++;
		e += r;
	}
	return t.set(e, !0), e;
}
//#endregion
//#region node_modules/echarts/lib/core/CoordinateSystem.js
var kp = {}, Ap = function() {
	function e() {
		this._coordinateSystems = [];
	}
	return e.prototype.create = function(e, t) {
		var n = [];
		I(kp, function(r, i) {
			var a = r.create(e, t);
			n = n.concat(a || []);
		}), this._coordinateSystems = n;
	}, e.prototype.update = function(e, t) {
		I(this._coordinateSystems, function(n) {
			n.update && n.update(e, t);
		});
	}, e.prototype.getCoordinateSystems = function() {
		return this._coordinateSystems.slice();
	}, e.register = function(e, t) {
		kp[e] = t;
	}, e.get = function(e) {
		return kp[e];
	}, e;
}(), jp = function() {
	function e(e) {
		this.coordSysDims = [], this.axisMap = q(), this.categoryAxisMap = q(), this.coordSysName = e;
	}
	return e;
}();
function Mp(e) {
	var t = e.get("coordinateSystem"), n = new jp(t), r = Np[t];
	if (r) return r(e, n, n.axisMap, n.categoryAxisMap), n;
}
var Np = {
	cartesian2d: function(e, t, n, r) {
		var i = e.getReferringComponents("xAxis", Ws).models[0], a = e.getReferringComponents("yAxis", Ws).models[0];
		t.coordSysDims = ["x", "y"], n.set("x", i), n.set("y", a), Pp(i) && (r.set("x", i), t.firstCategoryDimIndex = 0), Pp(a) && (r.set("y", a), t.firstCategoryDimIndex ??= 1);
	},
	singleAxis: function(e, t, n, r) {
		var i = e.getReferringComponents("singleAxis", Ws).models[0];
		t.coordSysDims = ["single"], n.set("single", i), Pp(i) && (r.set("single", i), t.firstCategoryDimIndex = 0);
	},
	polar: function(e, t, n, r) {
		var i = e.getReferringComponents("polar", Ws).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
		t.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Pp(a) && (r.set("radius", a), t.firstCategoryDimIndex = 0), Pp(o) && (r.set("angle", o), t.firstCategoryDimIndex ??= 1);
	},
	geo: function(e, t, n, r) {
		t.coordSysDims = ["lng", "lat"];
	},
	parallel: function(e, t, n, r) {
		var i = e.ecModel, a = i.getComponent("parallel", e.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
		I(a.parallelAxisIndex, function(e, a) {
			var s = i.getComponent("parallelAxis", e), c = o[a];
			n.set(c, s), Pp(s) && (r.set(c, s), t.firstCategoryDimIndex ??= a);
		});
	}
};
function Pp(e) {
	return e.get("type") === "category";
}
//#endregion
//#region node_modules/echarts/lib/data/helper/dataStackHelper.js
function Fp(e, t, n) {
	n ||= {};
	var r = n.byIndex, i = n.stackedCoordDimension, a, o, s;
	Ip(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
	var c = !!(e && e.get("stack")), l, u, d, f;
	if (I(a, function(e, t) {
		W(e) && (a[t] = e = { name: e }), c && !e.isExtraCoord && (!r && !l && e.ordinalMeta && (l = e), !u && e.type !== "ordinal" && e.type !== "time" && (!i || i === e.coordDim) && (u = e));
	}), u && !r && !l && (r = !0), u) {
		d = "__\0ecstackresult_" + e.id, f = "__\0ecstackedover_" + e.id, l && (l.createInvertedIndices = !0);
		var p = u.coordDim, m = u.type, h = 0;
		I(a, function(e) {
			e.coordDim === p && h++;
		});
		var g = {
			name: d,
			coordDim: p,
			coordDimIndex: h,
			type: m,
			isExtraCoord: !0,
			isCalculationCoord: !0,
			storeDimIndex: a.length
		}, _ = {
			name: f,
			coordDim: f,
			coordDimIndex: h + 1,
			type: m,
			isExtraCoord: !0,
			isCalculationCoord: !0,
			storeDimIndex: a.length + 1
		};
		o ? (s && (g.storeDimIndex = s.ensureCalculationDimension(f, m), _.storeDimIndex = s.ensureCalculationDimension(d, m)), o.appendCalculationDimension(g), o.appendCalculationDimension(_)) : (a.push(g), a.push(_));
	}
	return {
		stackedDimension: u && u.name,
		stackedByDimension: l && l.name,
		isStackedByIndex: r,
		stackedOverDimension: f,
		stackResultDimension: d
	};
}
function Ip(e) {
	return !ap(e.schema);
}
function Lp(e, t) {
	return !!t && t === e.getCalculationInfo("stackedDimension");
}
function Rp(e, t) {
	return Lp(e, t) ? e.getCalculationInfo("stackResultDimension") : t;
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/createSeriesData.js
function zp(e, t) {
	var n = e.get("coordinateSystem"), r = Ap.get(n), i;
	return t && t.coordSysDims && (i = L(t.coordSysDims, function(e) {
		var n = { name: e }, r = t.axisMap.get(e);
		return r && (n.type = Rf(r.get("type"))), n;
	})), i ||= r && (r.getDimensionsInfo ? r.getDimensionsInfo() : r.dimensions.slice()) || ["x", "y"], i;
}
function Bp(e, t, n) {
	var r, i;
	return n && I(e, function(e, a) {
		var o = e.coordDim, s = n.categoryAxisMap.get(o);
		s && (r ??= a, e.ordinalMeta = s.getOrdinalMeta(), t && (e.createInvertedIndices = !0)), e.otherDims.itemName != null && (i = !0);
	}), !i && r != null && (e[r].otherDims.itemName = 0), r;
}
function Vp(e, t, n) {
	n ||= {};
	var r = t.getSourceManager(), i, a = !1;
	e ? (a = !0, i = uf(e)) : (i = r.getSource(), a = i.sourceFormat === Wd);
	var o = Mp(t), s = zp(t, o), c = n.useEncodeDefaulter, l = U(c) ? c : c ? ce(ef, s, t) : null, u = {
		coordDimensions: s,
		generateCoord: n.generateCoord,
		encodeDefine: t.getEncode(),
		encodeDefaulter: l,
		canOmitUnusedDimensions: !a
	}, d = Tp(i, u), f = Bp(d.dimensions, n.createInvertedIndices, o), p = a ? null : r.getSharedDataStore(d), m = Fp(t, {
		schema: d,
		store: p
	}), h = new Cp(d, t);
	h.setCalculationInfo(m);
	var g = f != null && Hp(i) ? function(e, t, n, r) {
		return r === f ? n : this.defaultDimValueGetter(e, t, n, r);
	} : null;
	return h.hasItemOption = !1, h.initData(a ? i : p, null, g), h;
}
function Hp(e) {
	if (e.sourceFormat === "original") return !H(Ss(Up(e.data || [])));
}
function Up(e) {
	for (var t = 0; t < e.length && e[t] == null;) t++;
	return e[t];
}
//#endregion
//#region node_modules/echarts/lib/util/component.js
var Wp = Math.round(Math.random() * 10);
function Gp(e) {
	return [e || "", Wp++].join("_");
}
function Kp(e) {
	var t = {};
	e.registerSubTypeDefaulter = function(e, n) {
		var r = Ve(e);
		t[r.main] = n;
	}, e.determineSubType = function(n, r) {
		var i = r.type;
		if (!i) {
			var a = Ve(n).main;
			e.hasSubTypes(n) && t[a] && (i = t[a](r));
		}
		return i;
	};
}
function qp(e, t) {
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
function Jp(e, t) {
	return M(M({}, e, !0), t, !0);
}
//#endregion
//#region node_modules/zrender/lib/core/fourPointsTransform.js
var Yp = Math.log(2);
function Xp(e, t, n, r, i, a) {
	var o = r + "-" + i, s = e.length;
	if (a.hasOwnProperty(o)) return a[o];
	if (t === 1) {
		var c = Math.round(Math.log((1 << s) - 1 & ~i) / Yp);
		return e[n][c];
	}
	for (var l = r | 1 << n, u = n + 1; r & 1 << u;) u++;
	for (var d = 0, f = 0, p = 0; f < s; f++) {
		var m = 1 << f;
		m & i || (d += (p % 2 ? -1 : 1) * e[n][f] * Xp(e, t - 1, u, l, i | m, a), p++);
	}
	return a[o] = d, d;
}
function Zp(e, t) {
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
	], r = {}, i = Xp(n, 8, 0, 0, 0, r);
	if (i !== 0) {
		for (var a = [], o = 0; o < 8; o++) for (var s = 0; s < 8; s++) a[s] ?? (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Xp(n, 7, +(o === 0), 1 << o, 1 << s, r) / i * t[o];
		return function(e, t, n) {
			var r = t * a[6] + n * a[7] + 1;
			e[0] = (t * a[0] + n * a[1] + a[2]) / r, e[1] = (t * a[3] + n * a[4] + a[5]) / r;
		};
	}
}
//#endregion
//#region node_modules/zrender/lib/core/dom.js
var Qp = "___zrEVENTSAVED", $p = [];
function em(e, t, n, r, i) {
	return tm($p, t, r, i, !0) && tm(e, n, $p[0], $p[1]);
}
function tm(e, t, n, r, i) {
	if (t.getBoundingClientRect && Y.domSupported && !im(t)) {
		var a = t[Qp] || (t[Qp] = {}), o = rm(nm(t, a), a, i);
		if (o) return o(e, n, r), !0;
	}
	return !1;
}
function nm(e, t) {
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
	return n;
}
function rm(e, t, n) {
	for (var r = n ? "invTrans" : "trans", i = t[r], a = t.srcCoords, o = [], s = [], c = !0, l = 0; l < 4; l++) {
		var u = e[l].getBoundingClientRect(), d = 2 * l, f = u.left, p = u.top;
		o.push(f, p), c = c && a && f === a[d] && p === a[d + 1], s.push(e[l].offsetLeft, e[l].offsetTop);
	}
	return c && i ? i : (t.srcCoords = o, t[r] = n ? Zp(s, o) : Zp(o, s));
}
function im(e) {
	return e.nodeName.toUpperCase() === "CANVAS";
}
var am = /([&<>"'])/g, om = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function sm(e) {
	return e == null ? "" : (e + "").replace(am, function(e, t) {
		return om[t];
	});
}
//#endregion
//#region node_modules/echarts/lib/i18n/langEN.js
var cm = {
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
}, lm = {
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
}, um = "ZH", dm = "EN", fm = dm, pm = {}, mm = {}, hm = Y.domSupported ? function() {
	return (document.documentElement.lang || navigator.language || navigator.browserLanguage || fm).toUpperCase().indexOf(um) > -1 ? um : fm;
}() : fm;
function gm(e, t) {
	e = e.toUpperCase(), mm[e] = new zd(t), pm[e] = t;
}
function _m(e) {
	if (W(e)) {
		var t = pm[e.toUpperCase()] || {};
		return e === um || e === dm ? j(t) : M(j(t), j(pm[fm]), !1);
	}
	return M(j(e), j(pm[fm]), !1);
}
function vm(e) {
	return mm[e];
}
function ym() {
	return mm[fm];
}
gm(dm, cm), gm(um, lm);
//#endregion
//#region node_modules/echarts/lib/util/time.js
var bm = 1e3, xm = bm * 60, Sm = xm * 60, Cm = Sm * 24, wm = Cm * 365, Tm = {
	year: "{yyyy}",
	month: "{MMM}",
	day: "{d}",
	hour: "{HH}:{mm}",
	minute: "{HH}:{mm}",
	second: "{HH}:{mm}:{ss}",
	millisecond: "{HH}:{mm}:{ss} {SSS}",
	none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
}, Em = "{yyyy}-{MM}-{dd}", Dm = {
	year: "{yyyy}",
	month: "{yyyy}-{MM}",
	day: Em,
	hour: Em + " " + Tm.hour,
	minute: Em + " " + Tm.minute,
	second: Em + " " + Tm.second,
	millisecond: Tm.none
}, Om = [
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"millisecond"
], km = [
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
function Am(e, t) {
	return e += "", "0000".substr(0, t - e.length) + e;
}
function jm(e) {
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
function Mm(e) {
	return e === jm(e);
}
function Nm(e) {
	switch (e) {
		case "year":
		case "month": return "day";
		case "millisecond": return "millisecond";
		default: return "second";
	}
}
function Pm(e, t, n, r) {
	var i = is(e), a = i[Rm(n)](), o = i[zm(n)]() + 1, s = Math.floor((o - 1) / 3) + 1, c = i[Bm(n)](), l = i["get" + (n ? "UTC" : "") + "Day"](), u = i[Vm(n)](), d = (u - 1) % 12 + 1, f = i[Hm(n)](), p = i[Um(n)](), m = i[Wm(n)](), h = u >= 12 ? "pm" : "am", g = h.toUpperCase(), _ = (r instanceof zd ? r : vm(r || hm) || ym()).getModel("time"), v = _.get("month"), y = _.get("monthAbbr"), b = _.get("dayOfWeek"), x = _.get("dayOfWeekAbbr");
	return (t || "").replace(/{a}/g, h + "").replace(/{A}/g, g + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Am(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, v[o - 1]).replace(/{MMM}/g, y[o - 1]).replace(/{MM}/g, Am(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Am(c, 2)).replace(/{d}/g, c + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, x[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Am(u, 2)).replace(/{H}/g, u + "").replace(/{hh}/g, Am(d + "", 2)).replace(/{h}/g, d + "").replace(/{mm}/g, Am(f, 2)).replace(/{m}/g, f + "").replace(/{ss}/g, Am(p, 2)).replace(/{s}/g, p + "").replace(/{SSS}/g, Am(m, 3)).replace(/{S}/g, m + "");
}
function Fm(e, t, n, r, i) {
	var a = null;
	if (W(n)) a = n;
	else if (U(n)) a = n(e.value, t, { level: e.level });
	else {
		var o = N({}, Tm);
		if (e.level > 0) for (var s = 0; s < Om.length; ++s) o[Om[s]] = "{primary|" + o[Om[s]] + "}";
		var c = n ? n.inherit === !1 ? n : P(n, o) : o, l = Im(e.value, i);
		if (c[l]) a = c[l];
		else if (c.inherit) {
			for (var s = km.indexOf(l) - 1; s >= 0; --s) if (c[l]) {
				a = c[l];
				break;
			}
			a ||= o.none;
		}
		if (H(a)) {
			var u = e.level == null ? 0 : e.level >= 0 ? e.level : a.length + e.level;
			u = Math.min(u, a.length - 1), a = a[u];
		}
	}
	return Pm(new Date(e.value), a, i, r);
}
function Im(e, t) {
	var n = is(e), r = n[zm(t)]() + 1, i = n[Bm(t)](), a = n[Vm(t)](), o = n[Hm(t)](), s = n[Um(t)](), c = n[Wm(t)]() === 0, l = c && s === 0, u = l && o === 0, d = u && a === 0, f = d && i === 1;
	return f && r === 1 ? "year" : f ? "month" : d ? "day" : u ? "hour" : l ? "minute" : c ? "second" : "millisecond";
}
function Lm(e, t, n) {
	var r = ue(e) ? is(e) : e;
	switch (t ||= Im(e, n), t) {
		case "year": return r[Rm(n)]();
		case "half-year": return +(r[zm(n)]() >= 6);
		case "quarter": return Math.floor((r[zm(n)]() + 1) / 4);
		case "month": return r[zm(n)]();
		case "day": return r[Bm(n)]();
		case "half-day": return r[Vm(n)]() / 24;
		case "hour": return r[Vm(n)]();
		case "minute": return r[Hm(n)]();
		case "second": return r[Um(n)]();
		case "millisecond": return r[Wm(n)]();
	}
}
function Rm(e) {
	return e ? "getUTCFullYear" : "getFullYear";
}
function zm(e) {
	return e ? "getUTCMonth" : "getMonth";
}
function Bm(e) {
	return e ? "getUTCDate" : "getDate";
}
function Vm(e) {
	return e ? "getUTCHours" : "getHours";
}
function Hm(e) {
	return e ? "getUTCMinutes" : "getMinutes";
}
function Um(e) {
	return e ? "getUTCSeconds" : "getSeconds";
}
function Wm(e) {
	return e ? "getUTCMilliseconds" : "getMilliseconds";
}
function Gm(e) {
	return e ? "setUTCFullYear" : "setFullYear";
}
function Km(e) {
	return e ? "setUTCMonth" : "setMonth";
}
function qm(e) {
	return e ? "setUTCDate" : "setDate";
}
function Jm(e) {
	return e ? "setUTCHours" : "setHours";
}
function Ym(e) {
	return e ? "setUTCMinutes" : "setMinutes";
}
function Xm(e) {
	return e ? "setUTCSeconds" : "setSeconds";
}
function Zm(e) {
	return e ? "setUTCMilliseconds" : "setMilliseconds";
}
//#endregion
//#region node_modules/echarts/lib/legacy/getTextRect.js
function Qm(e, t, n, r, i, a, o, s) {
	return new Do({ style: {
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
function $m(e) {
	if (!ds(e)) return W(e) ? e : "-";
	var t = (e + "").split(".");
	return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function eh(e, t) {
	return e = (e || "").toLowerCase().replace(/-(.)/g, function(e, t) {
		return t.toUpperCase();
	}), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e;
}
var th = xe;
function nh(e, t, n) {
	var r = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
	function i(e) {
		return e && Ce(e) ? e : "-";
	}
	function a(e) {
		return !(e == null || isNaN(e) || !isFinite(e));
	}
	var o = t === "time", s = e instanceof Date;
	if (o || s) {
		var c = o ? is(e) : e;
		if (!isNaN(+c)) return Pm(c, r, n);
		if (s) return "-";
	}
	if (t === "ordinal") return le(e) ? i(e) : ue(e) && a(e) ? e + "" : "-";
	var l = us(e);
	return a(l) ? $m(l) : le(e) ? i(e) : typeof e == "boolean" ? e + "" : "-";
}
var rh = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g"
], ih = function(e, t) {
	return "{" + e + (t ?? "") + "}";
};
function ah(e, t, n) {
	H(t) || (t = [t]);
	var r = t.length;
	if (!r) return "";
	for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
		var o = rh[a];
		e = e.replace(ih(o), ih(o, 0));
	}
	for (var s = 0; s < r; s++) for (var c = 0; c < i.length; c++) {
		var l = t[s][i[c]];
		e = e.replace(ih(rh[c], s), n ? sm(l) : l);
	}
	return e;
}
function oh(e, t) {
	var n = W(e) ? {
		color: e,
		extraCssText: t
	} : e || {}, r = n.color, i = n.type;
	t = n.extraCssText;
	var a = n.renderMode || "html";
	return r ? a === "html" ? i === "subItem" ? "<span style=\"display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:" + sm(r) + ";" + (t || "") + "\"></span>" : "<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:" + sm(r) + ";" + (t || "") + "\"></span>" : {
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
function sh(e, t, n) {
	(e === "week" || e === "month" || e === "quarter" || e === "half-year" || e === "year") && (e = "MM-dd\nyyyy");
	var r = is(t), i = n ? "getUTC" : "get", a = r[i + "FullYear"](), o = r[i + "Month"]() + 1, s = r[i + "Date"](), c = r[i + "Hours"](), l = r[i + "Minutes"](), u = r[i + "Seconds"](), d = r[i + "Milliseconds"]();
	return e = e.replace("MM", Am(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", Am(a % 100 + "", 2)).replace("dd", Am(s, 2)).replace("d", s).replace("hh", Am(c, 2)).replace("h", c).replace("mm", Am(l, 2)).replace("m", l).replace("ss", Am(u, 2)).replace("s", u).replace("SSS", Am(d, 3)), e;
}
function ch(e) {
	return e && e.charAt(0).toUpperCase() + e.substr(1);
}
function lh(e, t) {
	return t ||= "transparent", W(e) ? e : G(e) && e.colorStops && (e.colorStops[0] || {}).color || t;
}
function uh(e, t) {
	if (t === "_blank" || t === "blank") {
		var n = window.open();
		n.opener = null, n.location.href = e;
	} else window.open(e, t);
}
//#endregion
//#region node_modules/echarts/lib/util/layout.js
var dh = I, fh = [
	"left",
	"right",
	"top",
	"bottom",
	"width",
	"height"
], ph = [[
	"width",
	"left",
	"right"
], [
	"height",
	"top",
	"bottom"
]];
function mh(e, t, n, r, i) {
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
var hh = mh;
ce(mh, "vertical"), ce(mh, "horizontal");
function gh(e, t, n) {
	n = th(n || 0);
	var r = t.width, i = t.height, a = Go(e.left, r), o = Go(e.top, i), s = Go(e.right, r), c = Go(e.bottom, i), l = Go(e.width, r), u = Go(e.height, i), d = n[2] + n[0], f = n[1] + n[3], p = e.aspect;
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
	var m = new Z(a + n[3], o + n[0], l, u);
	return m.margin = n, m;
}
function _h(e, t, n, r, i, a) {
	var o = !i || !i.hv || i.hv[0], s = !i || !i.hv || i.hv[1], c = i && i.boundingMode || "all";
	if (a ||= e, a.x = e.x, a.y = e.y, !o && !s) return !1;
	var l;
	if (c === "raw") l = e.type === "group" ? new Z(0, 0, +t.width || 0, +t.height || 0) : e.getBoundingRect();
	else if (l = e.getBoundingRect(), e.needLocalTransform()) {
		var u = e.getLocalTransform();
		l = l.clone(), l.applyTransform(u);
	}
	var d = gh(P({
		width: l.width,
		height: l.height
	}, t), n, r), f = o ? d.x - l.x : 0, p = s ? d.y - l.y : 0;
	return c === "raw" ? (a.x = f, a.y = p) : (a.x += f, a.y += p), a === e && e.markRedraw(), !0;
}
function vh(e) {
	var t = e.layoutMode || e.constructor.layoutMode;
	return G(t) ? t : t ? { type: t } : null;
}
function yh(e, t, n) {
	var r = n && n.ignoreSize;
	!H(r) && (r = [r, r]);
	var i = o(ph[0], 0), a = o(ph[1], 1);
	l(ph[0], e, i), l(ph[1], e, a);
	function o(n, i) {
		var a = {}, o = 0, l = {}, u = 0, d = 2;
		if (dh(n, function(t) {
			l[t] = e[t];
		}), dh(n, function(e) {
			s(t, e) && (a[e] = l[e] = t[e]), c(a, e) && o++, c(l, e) && u++;
		}), r[i]) return c(t, n[1]) ? l[n[2]] = null : c(t, n[2]) && (l[n[1]] = null), l;
		if (u === d || !o) return l;
		if (o >= d) return a;
		for (var f = 0; f < n.length; f++) {
			var p = n[f];
			if (!s(a, p) && s(e, p)) {
				a[p] = e[p];
				break;
			}
		}
		return a;
	}
	function s(e, t) {
		return e.hasOwnProperty(t);
	}
	function c(e, t) {
		return e[t] != null && e[t] !== "auto";
	}
	function l(e, t, n) {
		dh(e, function(e) {
			t[e] = n[e];
		});
	}
}
function bh(e) {
	return xh({}, e);
}
function xh(e, t) {
	return t && e && dh(fh, function(n) {
		t.hasOwnProperty(n) && (e[n] = t[n]);
	}), e;
}
//#endregion
//#region node_modules/echarts/lib/model/Component.js
var Sh = Bs(), $ = function(e) {
	c(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return i.uid = Gp("ec_cpt_model"), i;
	}
	return t.prototype.init = function(e, t, n) {
		this.mergeDefaultAndTheme(e, n);
	}, t.prototype.mergeDefaultAndTheme = function(e, t) {
		var n = vh(this), r = n ? bh(e) : {};
		M(e, t.getTheme().get(this.mainType)), M(e, this.getDefaultOption()), n && yh(e, r, n);
	}, t.prototype.mergeOption = function(e, t) {
		M(this.option, e, !0);
		var n = vh(this);
		n && yh(this.option, e, n);
	}, t.prototype.optionUpdated = function(e, t) {}, t.prototype.getDefaultOption = function() {
		var e = this.constructor;
		if (!Ue(e)) return e.defaultOption;
		var t = Sh(this);
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
		return Ks(this.ecModel, e, {
			index: this.get(n, !0),
			id: this.get(r, !0)
		}, t);
	}, t.prototype.getBoxLayoutParams = function() {
		var e = this;
		return {
			left: e.get("left"),
			top: e.get("top"),
			right: e.get("right"),
			bottom: e.get("bottom"),
			width: e.get("width"),
			height: e.get("height")
		};
	}, t.prototype.getZLevelKey = function() {
		return "";
	}, t.prototype.setZLevel = function(e) {
		this.option.zlevel = e;
	}, t.protoInitialize = function() {
		var e = t.prototype;
		e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
	}(), t;
}(zd);
Ke($, zd), Ze($), Kp($), qp($, Ch);
function Ch(e) {
	var t = [];
	return I($.getClassesByMainType(e), function(e) {
		t = t.concat(e.dependencies || e.prototype.dependencies || []);
	}), t = L(t, function(e) {
		return Ve(e).main;
	}), e !== "dataset" && F(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/palette.js
var wh = Bs();
Bs();
var Th = function() {
	function e() {}
	return e.prototype.getColorFromPalette = function(e, t, n) {
		var r = ys(this.get("color", !0)), i = this.get("colorLayer", !0);
		return Dh(this, wh, r, i, e, t, n);
	}, e.prototype.clearColorPalette = function() {
		Oh(this, wh);
	}, e;
}();
function Eh(e, t) {
	for (var n = e.length, r = 0; r < n; r++) if (e[r].length > t) return e[r];
	return e[n - 1];
}
function Dh(e, t, n, r, i, a, o) {
	a ||= e;
	var s = t(a), c = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
	if (l.hasOwnProperty(i)) return l[i];
	var u = o == null || !r ? n : Eh(r, o);
	if (u ||= n, u && u.length) {
		var d = u[c];
		return i && (l[i] = d), s.paletteIdx = (c + 1) % u.length, d;
	}
}
function Oh(e, t) {
	t(e).paletteIdx = 0, t(e).paletteNameMap = {};
}
//#endregion
//#region node_modules/echarts/lib/model/mixin/dataFormat.js
var kh = /\{@(.+?)\}/g, Ah = function() {
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
		if (a && (s.value = a.interpolatedValue), r != null && H(s.value) && (s.value = s.value[r]), i ||= o.getItemModel(e).get(t === "normal" ? ["label", "formatter"] : [
			t,
			"label",
			"formatter"
		]), U(i)) return s.status = t, s.dimensionIndex = r, i(s);
		if (W(i)) return ah(i, s).replace(kh, function(t, n) {
			var r = n.length, i = n;
			i.charAt(0) === "[" && i.charAt(r - 1) === "]" && (i = +i.slice(1, r - 1));
			var s = Pf(o, e, i);
			if (a && H(a.interpolatedValue)) {
				var c = o.getDimensionIndex(i);
				c >= 0 && (s = a.interpolatedValue[c]);
			}
			return s == null ? "" : s + "";
		});
	}, e.prototype.getRawValue = function(e, t) {
		return Pf(this.getData(t), e);
	}, e.prototype.formatTooltip = function(e, t, n) {}, e;
}();
function jh(e) {
	var t, n;
	return G(e) ? e.type && (n = e) : t = e, {
		text: t,
		frag: n
	};
}
//#endregion
//#region node_modules/echarts/lib/core/task.js
function Mh(e) {
	return new Nh(e);
}
var Nh = function() {
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
				if (H(m)) for (var h = 0; h < m.length; h++) this._doProgress(m[h], f, p, s, c);
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
		Ph.reset(t, n, r, i), this._callingProgress = e, this._callingProgress({
			start: t,
			end: n,
			count: n - t,
			next: Ph.next
		}, this.context);
	}, e.prototype._doReset = function(e) {
		this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
		var t, n;
		!e && this._reset && (t = this._reset(this.context), t && t.progress && (n = t.forceFirstProgress, t = t.progress), H(t) && !t.length && (t = null)), this._progress = t, this._modBy = this._modDataCount = null;
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
}(), Ph = function() {
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
}(), Fh = function() {
	function e() {}
	return e.prototype.getRawData = function() {
		throw Error("not supported");
	}, e.prototype.getRawDataItem = function(e) {
		throw Error("not supported");
	}, e.prototype.cloneRawData = function() {}, e.prototype.getDimensionInfo = function(e) {}, e.prototype.cloneAllDimensionInfo = function() {}, e.prototype.count = function() {}, e.prototype.retrieveValue = function(e, t) {}, e.prototype.retrieveValueFromItem = function(e, t) {}, e.prototype.convertValue = function(e, t) {
		return Vf(e, t);
	}, e;
}();
function Ih(e, t) {
	var n = new Fh(), r = e.data, i = n.sourceFormat = e.sourceFormat, a = e.startIndex;
	e.seriesLayoutBy !== "column" && hs("");
	var o = [], s = {}, c = e.dimensionsDefine;
	if (c) I(c, function(e, t) {
		var n = e.name, r = {
			index: t,
			name: n,
			displayName: e.displayName
		};
		o.push(r), n != null && (J(s, n) && hs(""), s[n] = r);
	});
	else for (var l = 0; l < e.dimensionsDetectedCount; l++) o.push({ index: l });
	var u = Ef(i, Xd);
	t.__isBuiltIn && (n.getRawDataItem = function(e) {
		return u(r, a, o, e);
	}, n.getRawData = V(Lh, null, e)), n.cloneRawData = V(Rh, null, e), n.count = V(kf(i, Xd), null, r, a, o);
	var d = Mf(i);
	n.retrieveValue = function(e, t) {
		return f(u(r, a, o, e), t);
	};
	var f = n.retrieveValueFromItem = function(e, t) {
		if (e != null) {
			var n = o[t];
			if (n) return d(e, t, n.name);
		}
	};
	return n.getDimensionInfo = V(zh, null, o, s), n.cloneAllDimensionInfo = V(Bh, null, o), n;
}
function Lh(e) {
	var t = e.sourceFormat;
	return Gh(t) || hs(""), e.data;
}
function Rh(e) {
	var t = e.sourceFormat, n = e.data;
	if (Gh(t) || hs(""), t === "arrayRows") {
		for (var r = [], i = 0, a = n.length; i < a; i++) r.push(n[i].slice());
		return r;
	}
	if (t === "objectRows") {
		for (var r = [], i = 0, a = n.length; i < a; i++) r.push(N({}, n[i]));
		return r;
	}
}
function zh(e, t, n) {
	if (n != null) {
		if (ue(n) || !isNaN(n) && !J(t, n)) return e[n];
		if (J(t, n)) return t[n];
	}
}
function Bh(e) {
	return j(e);
}
var Vh = q();
function Hh(e) {
	e = j(e);
	var t = e.type, n = "";
	t || hs(n);
	var r = t.split(":");
	r.length !== 2 && hs(n);
	var i = !1;
	r[0] === "echarts" && (t = r[1], i = !0), e.__isBuiltIn = i, Vh.set(t, e);
}
function Uh(e, t, n) {
	var r = ys(e), i = r.length;
	i || hs("");
	for (var a = 0, o = i; a < o; a++) {
		var s = r[a];
		t = Wh(s, t, n, i === 1 ? null : a), a !== o - 1 && (t.length = Math.max(t.length, 1));
	}
	return t;
}
function Wh(e, t, n, r) {
	var i = "";
	t.length || hs(i), G(e) || hs(i);
	var a = e.type, o = Vh.get(a);
	o || hs(i);
	var s = L(t, function(e) {
		return Ih(e, o);
	});
	return L(ys(o.transform({
		upstream: s[0],
		upstreamList: s,
		config: j(e.config)
	})), function(e, n) {
		var r = "";
		G(e) || hs(r), e.data || hs(r), Gh(ff(e.data)) || hs(r);
		var i, a = t[0];
		if (a && n === 0 && !e.dimensions) {
			var o = a.startIndex;
			o && (e.data = a.data.slice(0, o).concat(e.data)), i = {
				seriesLayoutBy: Xd,
				sourceHeader: o,
				dimensions: a.metaRawOption.dimensions
			};
		} else i = {
			seriesLayoutBy: Xd,
			sourceHeader: 0,
			dimensions: e.dimensions
		};
		return lf(e.data, i, null);
	});
}
function Gh(e) {
	return e === "arrayRows" || e === "objectRows";
}
//#endregion
//#region node_modules/echarts/lib/data/helper/sourceManager.js
var Kh = function() {
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
		if (Jh(e)) {
			var a = e, o = void 0, s = void 0, c = void 0;
			if (n) {
				var l = t[0];
				l.prepareSource(), c = l.getSource(), o = c.data, s = c.sourceFormat, i = [l._getVersionSign()];
			} else o = a.get("data", !0), s = fe(o) ? Jd : Wd, i = [];
			var u = this._getSourceMetaRawOption() || {}, d = c && c.metaRawOption || {}, f = K(u.seriesLayoutBy, d.seriesLayoutBy) || null, p = K(u.sourceHeader, d.sourceHeader), m = K(u.dimensions, d.dimensions);
			r = f !== d.seriesLayoutBy || !!p != !!d.sourceHeader || m ? [lf(o, {
				seriesLayoutBy: f,
				sourceHeader: p,
				dimensions: m
			}, s)] : [];
		} else {
			var h = e;
			if (n) {
				var g = this._applyTransform(t);
				r = g.sourceList, i = g.upstreamSignList;
			} else r = [lf(h.get("source", !0), this._getSourceMetaRawOption(), null)], i = [];
		}
		this._setLocalSource(r, i);
	}, e.prototype._applyTransform = function(e) {
		var t = this._sourceHost, n = t.get("transform", !0), r = t.get("fromTransformResult", !0);
		r != null && e.length !== 1 && Yh("");
		var i, a = [], o = [];
		return I(e, function(e) {
			e.prepareSource();
			var t = e.getSource(r || 0);
			r != null && !t && Yh(""), a.push(t), o.push(e._getVersionSign());
		}), n ? i = Uh(n, a, { datasetIndex: t.componentIndex }) : r != null && (i = [df(a[0])]), {
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
			Jh(this._sourceHost) && s ? o = s._innerGetDataStore(e, t, n) : (o = new tp(), o.initData(new Cf(t, e.length), e)), a[n] = o;
		}
		return o;
	}, e.prototype._getUpstreamSourceManagers = function() {
		var e = this._sourceHost;
		if (Jh(e)) {
			var t = nf(e);
			return t ? [t.getSourceManager()] : [];
		}
		return L(rf(e), function(e) {
			return e.getSourceManager();
		});
	}, e.prototype._getSourceMetaRawOption = function() {
		var e = this._sourceHost, t, n, r;
		if (Jh(e)) t = e.get("seriesLayoutBy", !0), n = e.get("sourceHeader", !0), r = e.get("dimensions", !0);
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
function qh(e) {
	e.option.transform && Te(e.option.transform);
}
function Jh(e) {
	return e.mainType === "series";
}
function Yh(e) {
	throw Error(e);
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var Xh = "line-height:1";
function Zh(e) {
	var t = e.lineHeight;
	return t == null ? Xh : "line-height:" + sm(t + "") + "px";
}
function Qh(e, t) {
	var n = e.color || "#6e7079", r = e.fontSize || 12, i = e.fontWeight || "400", a = e.color || "#464646", o = e.fontSize || 14, s = e.fontWeight || "900";
	return t === "html" ? {
		nameStyle: "font-size:" + sm(r + "") + "px;color:" + sm(n) + ";font-weight:" + sm(i + ""),
		valueStyle: "font-size:" + sm(o + "") + "px;color:" + sm(a) + ";font-weight:" + sm(s + "")
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
var $h = [
	0,
	10,
	20,
	30
], eg = [
	"",
	"\n",
	"\n\n",
	"\n\n\n"
];
function tg(e, t) {
	return t.type = e, t;
}
function ng(e) {
	return e.type === "section";
}
function rg(e) {
	return ng(e) ? ag : og;
}
function ig(e) {
	if (ng(e)) {
		var t = 0, n = e.blocks.length, r = n > 1 || n > 0 && !e.noHeader;
		return I(e.blocks, function(e) {
			var n = ig(e);
			n >= t && (t = n + +(r && (!n || ng(e) && !e.noHeader)));
		}), t;
	}
	return 0;
}
function ag(e, t, n, r) {
	var i = t.noHeader, a = cg(ig(t)), o = [], s = t.blocks || [];
	Se(!s || H(s)), s ||= [];
	var c = e.orderMode;
	if (t.sortBlocks && c) {
		s = s.slice();
		var l = {
			valueAsc: "asc",
			valueDesc: "desc"
		};
		if (J(l, c)) {
			var u = new Uf(l[c], null);
			s.sort(function(e, t) {
				return u.evaluate(e.sortParam, t.sortParam);
			});
		} else c === "seriesDesc" && s.reverse();
	}
	I(s, function(n, i) {
		var s = t.valueFormatter, c = rg(n)(s ? N(N({}, e), { valueFormatter: s }) : e, n, i > 0 ? a.html : 0, r);
		c != null && o.push(c);
	});
	var d = e.renderMode === "richText" ? o.join(a.richText) : lg(r, o.join(""), i ? n : a.html);
	if (i) return d;
	var f = nh(t.header, "ordinal", e.useUTC), p = Qh(r, e.renderMode).nameStyle, m = Zh(r);
	return e.renderMode === "richText" ? fg(e, f, p) + a.richText + d : lg(r, "<div style=\"" + p + ";" + m + ";\">" + sm(f) + "</div>" + d, n);
}
function og(e, t, n, r) {
	var i = e.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, c = t.name, l = e.useUTC, u = t.valueFormatter || e.valueFormatter || function(e) {
		return e = H(e) ? e : [e], L(e, function(e, t) {
			return nh(e, H(p) ? p[t] : p, l);
		});
	};
	if (!(a && o)) {
		var d = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), f = a ? "" : nh(c, "ordinal", l), p = t.valueType, m = o ? [] : u(t.value, t.dataIndex), h = !s || !a, g = !s && a, _ = Qh(r, i), v = _.nameStyle, y = _.valueStyle;
		return i === "richText" ? (s ? "" : d) + (a ? "" : fg(e, f, v)) + (o ? "" : pg(e, m, h, g, y)) : lg(r, (s ? "" : d) + (a ? "" : ug(f, !s, v)) + (o ? "" : dg(m, h, g, y)), n);
	}
}
function sg(e, t, n, r, i, a) {
	if (e) return rg(e)({
		useUTC: i,
		renderMode: n,
		orderMode: r,
		markupStyleCreator: t,
		valueFormatter: e.valueFormatter
	}, e, 0, a);
}
function cg(e) {
	return {
		html: $h[e],
		richText: eg[e]
	};
}
function lg(e, t, n) {
	var r = "<div style=\"clear:both\"></div>", i = "margin: " + n + "px 0 0", a = Zh(e);
	return "<div style=\"" + i + ";" + a + ";\">" + t + r + "</div>";
}
function ug(e, t, n) {
	var r = t ? "margin-left:2px" : "";
	return "<span style=\"" + n + ";" + r + "\">" + sm(e) + "</span>";
}
function dg(e, t, n, r) {
	var i = t ? "float:right;margin-left:" + (n ? "10px" : "20px") : "";
	return e = H(e) ? e : [e], "<span style=\"" + i + ";" + r + "\">" + L(e, function(e) {
		return sm(e);
	}).join("&nbsp;&nbsp;") + "</span>";
}
function fg(e, t, n) {
	return e.markupStyleCreator.wrapRichTextStyle(t, n);
}
function pg(e, t, n, r, i) {
	var a = [i], o = r ? 10 : 20;
	return n && a.push({
		padding: [
			0,
			0,
			0,
			o
		],
		align: "right"
	}), e.markupStyleCreator.wrapRichTextStyle(H(t) ? t.join("  ") : t, a);
}
function mg(e, t) {
	var n = e.getData().getItemVisual(t, "style")[e.visualDrawType];
	return lh(n);
}
function hg(e, t) {
	return e.get("padding") ?? (t === "richText" ? [8, 10] : 10);
}
var gg = function() {
	function e() {
		this.richTextStyles = {}, this._nextStyleNameId = fs();
	}
	return e.prototype._generateStyleName = function() {
		return "__EC_aUTo_" + this._nextStyleNameId++;
	}, e.prototype.makeTooltipMarker = function(e, t, n) {
		var r = n === "richText" ? this._generateStyleName() : null, i = oh({
			color: t,
			type: e,
			renderMode: n,
			markerId: r
		});
		return W(i) ? i : (this.richTextStyles[r] = i.style, i.content);
	}, e.prototype.wrapRichTextStyle = function(e, t) {
		var n = {};
		H(t) ? I(t, function(e) {
			return N(n, e);
		}) : N(n, t);
		var r = this._generateStyleName();
		return this.richTextStyles[r] = n, "{" + r + "|" + e + "}";
	}, e;
}();
//#endregion
//#region node_modules/echarts/lib/component/tooltip/seriesFormatTooltip.js
function _g(e) {
	var t = e.series, n = e.dataIndex, r = e.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(n), c = H(s), l = mg(t, n), u, d, f, p;
	if (o > 1 || c && !o) {
		var m = vg(s, t, n, a, l);
		u = m.inlineValues, d = m.inlineValueTypes, f = m.blocks, p = m.inlineValues[0];
	} else if (o) {
		var h = i.getDimensionInfo(a[0]);
		p = u = Pf(i, n, a[0]), d = h.type;
	} else p = u = c ? s[0] : s;
	var g = Ps(t), _ = g && t.name || "", v = i.getName(n), y = r ? _ : v;
	return tg("section", {
		header: _,
		noHeader: r || !g,
		sortParam: p,
		blocks: [tg("nameValue", {
			markerType: "item",
			markerColor: l,
			name: y,
			noName: !Ce(y),
			value: u,
			valueType: d,
			dataIndex: n
		})].concat(f || [])
	});
}
function vg(e, t, n, r, i) {
	var a = t.getData(), o = oe(e, function(e, t, n) {
		var r = a.getDimensionInfo(n);
		return e ||= r && r.tooltip !== !1 && r.displayName != null;
	}, !1), s = [], c = [], l = [];
	r.length ? I(r, function(e) {
		u(Pf(a, n, e), e);
	}) : I(e, u);
	function u(e, t) {
		var n = a.getDimensionInfo(t);
		n && n.otherDims.tooltip !== !1 && (o ? l.push(tg("nameValue", {
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
var yg = Bs();
function bg(e, t) {
	return e.getName(t) || e.getId(t);
}
var xg = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t._selectedDataIndicesMap = {}, t;
	}
	return t.prototype.init = function(e, t, n) {
		this.seriesIndex = this.componentIndex, this.dataTask = Mh({
			count: wg,
			reset: Tg
		}), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(e, n), (yg(this).sourceManager = new Kh(this)).prepareSource();
		var r = this.getInitialData(e, n);
		Dg(r, this), this.dataTask.context.data = r, yg(this).dataBeforeProcessed = r, Sg(this), this._initSelectedMapFromData(r);
	}, t.prototype.mergeDefaultAndTheme = function(e, t) {
		var n = vh(this), r = n ? bh(e) : {}, i = this.subType;
		$.hasClass(i) && (i += "Series"), M(e, t.getTheme().get(this.subType)), M(e, this.getDefaultOption()), bs(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && yh(e, r, n);
	}, t.prototype.mergeOption = function(e, t) {
		e = M(this.option, e, !0), this.fillDataTextStyle(e.data);
		var n = vh(this);
		n && yh(this.option, e, n);
		var r = yg(this).sourceManager;
		r.dirty(), r.prepareSource();
		var i = this.getInitialData(e, t);
		Dg(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, yg(this).dataBeforeProcessed = i, Sg(this), this._initSelectedMapFromData(i);
	}, t.prototype.fillDataTextStyle = function(e) {
		if (e && !fe(e)) for (var t = ["show"], n = 0; n < e.length; n++) e[n] && e[n].label && bs(e[n], "label", t);
	}, t.prototype.getInitialData = function(e, t) {}, t.prototype.appendData = function(e) {
		this.getRawData().appendData(e.data);
	}, t.prototype.getData = function(e) {
		var t = kg(this);
		if (t) {
			var n = t.context.data;
			return e == null || !n.getLinkedData ? n : n.getLinkedData(e);
		}
		return yg(this).data;
	}, t.prototype.getAllData = function() {
		var e = this.getData();
		return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{ data: e }];
	}, t.prototype.setData = function(e) {
		var t = kg(this);
		if (t) {
			var n = t.context;
			n.outputData = e, t !== this.dataTask && (n.data = e);
		}
		yg(this).data = e;
	}, t.prototype.getEncode = function() {
		var e = this.get("encode", !0);
		if (e) return q(e);
	}, t.prototype.getSourceManager = function() {
		return yg(this).sourceManager;
	}, t.prototype.getSource = function() {
		return this.getSourceManager().getSource();
	}, t.prototype.getRawData = function() {
		return yg(this).dataBeforeProcessed;
	}, t.prototype.getColorBy = function() {
		return this.get("colorBy") || "series";
	}, t.prototype.isColorBySeries = function() {
		return this.getColorBy() === "series";
	}, t.prototype.getBaseAxis = function() {
		var e = this.coordinateSystem;
		return e && e.getBaseAxis && e.getBaseAxis();
	}, t.prototype.formatTooltip = function(e, t, n) {
		return _g({
			series: this,
			dataIndex: e,
			multipleSeries: t
		});
	}, t.prototype.isAnimationEnabled = function() {
		var e = this.ecModel;
		if (Y.node && !(e && e.ssr)) return !1;
		var t = this.getShallow("animation");
		return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), !!t;
	}, t.prototype.restoreData = function() {
		this.dataTask.dirty();
	}, t.prototype.getColorFromPalette = function(e, t, n) {
		var r = this.ecModel, i = Th.prototype.getColorFromPalette.call(this, e, t, n);
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
			if (r === "series" || n === "all") this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
			else for (var a = 0; a < e.length; a++) {
				var o = e[a], s = bg(i, o);
				n[s] = !1, this._selectedDataIndicesMap[s] = -1;
			}
		}
	}, t.prototype.toggleSelect = function(e, t) {
		for (var n = [], r = 0; r < e.length; r++) n[0] = e[r], this.isSelected(e[r], t) ? this.unselect(n, t) : this.select(n, t);
	}, t.prototype.getSelectedDataIndices = function() {
		if (this.option.selectedMap === "all") return [].slice.call(this.getData().getIndices());
		for (var e = this._selectedDataIndicesMap, t = B(e), n = [], r = 0; r < t.length; r++) {
			var i = e[t[r]];
			i >= 0 && n.push(i);
		}
		return n;
	}, t.prototype.isSelected = function(e, t) {
		var n = this.option.selectedMap;
		if (!n) return !1;
		var r = this.getData(t);
		return (n === "all" || n[bg(r, e)]) && !r.getItemModel(e).get(["select", "disabled"]);
	}, t.prototype.isUniversalTransitionEnabled = function() {
		if (this.__universalTransitionEnabled) return !0;
		var e = this.option.universalTransition;
		return e ? e === !0 || e && e.enabled : !1;
	}, t.prototype._innerSelect = function(e, t) {
		var n, r, i = this.option, a = i.selectedMode, o = t.length;
		if (a && o) {
			if (a === "series") i.selectedMap = "all";
			else if (a === "multiple") {
				G(i.selectedMap) || (i.selectedMap = {});
				for (var s = i.selectedMap, c = 0; c < o; c++) {
					var l = t[c], u = bg(e, l);
					s[u] = !0, this._selectedDataIndicesMap[u] = e.getRawIndex(l);
				}
			} else if (a === "single" || a === !0) {
				var d = t[o - 1], u = bg(e, d);
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
		return $.registerClass(e);
	}, t.protoInitialize = function() {
		var e = t.prototype;
		e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
	}(), t;
}($);
ie(xg, Ah), ie(xg, Th), Ke(xg, $);
function Sg(e) {
	var t = e.name;
	Ps(e) || (e.name = Cg(e) || t);
}
function Cg(e) {
	var t = e.getRawData(), n = t.mapDimensionsAll("seriesName"), r = [];
	return I(n, function(e) {
		var n = t.getDimensionInfo(e);
		n.displayName && r.push(n.displayName);
	}), r.join(" ");
}
function wg(e) {
	return e.model.getRawData().count();
}
function Tg(e) {
	var t = e.model;
	return t.setData(t.getRawData().cloneShallow()), Eg;
}
function Eg(e, t) {
	t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Dg(e, t) {
	I(je(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function(n) {
		e.wrapMethod(n, ce(Og, t));
	});
}
function Og(e, t) {
	var n = kg(e);
	return n && n.setOutputEnd((t || this).count()), t;
}
function kg(e) {
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
var Ag = co.extend({
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
}), jg = {
	line: au,
	rect: Co,
	roundRect: Co,
	square: Co,
	circle: kl,
	diamond: co.extend({
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
	pin: co.extend({
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
	arrow: co.extend({
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
	triangle: Ag
}, Mg = {
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
}, Ng = {};
I(jg, function(e, t) {
	Ng[t] = new e();
});
var Pg = co.extend({
	type: "symbol",
	shape: {
		symbolType: "",
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	calculateTextPosition: function(e, t, n) {
		var r = Ft(e, t, n), i = this.shape;
		return i && i.symbolType === "pin" && t.position === "inside" && (r.y = n.y + n.height * .4), r;
	},
	buildPath: function(e, t, n) {
		var r = t.symbolType;
		if (r !== "none") {
			var i = Ng[r];
			i ||= (r = "rect", Ng[r]), Mg[r](t.x, t.y, t.width, t.height, i.shape), i.buildPath(e, i.shape, n);
		}
	}
});
function Fg(e, t) {
	if (this.type !== "image") {
		var n = this.style;
		this.__isEmptyBrush ? (n.stroke = e, n.fill = t || "#fff", n.lineWidth = 2) : this.shape.symbolType === "line" ? n.stroke = e : n.fill = e, this.markRedraw();
	}
}
function Ig(e, t, n, r, i, a, o) {
	var s = e.indexOf("empty") === 0;
	s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
	var c = e.indexOf("image://") === 0 ? Uu(e.slice(8), new Z(t, n, r, i), o ? "center" : "cover") : e.indexOf("path://") === 0 ? Hu(e.slice(7), {}, new Z(t, n, r, i), o ? "center" : "cover") : new Pg({ shape: {
		symbolType: e,
		x: t,
		y: n,
		width: r,
		height: i
	} });
	return c.__isEmptyBrush = s, c.setColor = Fg, a && c.setColor(a), c;
}
function Lg(e) {
	return H(e) || (e = [+e, +e]), [e[0] || 0, e[1] || 0];
}
function Rg(e, t) {
	if (e != null) return H(e) || (e = [e, e]), [Go(e[0], t[0]) || 0, Go(K(e[1], e[0]), t[1]) || 0];
}
//#endregion
//#region node_modules/echarts/lib/chart/line/LineSeries.js
var zg = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.hasSymbolVisual = !0, n;
	}
	return t.prototype.getInitialData = function(e) {
		return Vp(null, this, { useEncodeDefaulter: !0 });
	}, t.prototype.getLegendIcon = function(e) {
		var t = new Dl(), n = Ig("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
		t.add(n), n.setStyle(e.lineStyle);
		var r = this.getData().getVisual("symbol"), i = this.getData().getVisual("symbolRotate"), a = r === "none" ? "circle" : r, o = e.itemHeight * .8, s = Ig(a, (e.itemWidth - o) / 2, (e.itemHeight - o) / 2, o, o, e.itemStyle.fill);
		return t.add(s), s.setStyle(e.itemStyle), s.rotation = (e.iconRotate === "inherit" ? i : e.iconRotate || 0) * Math.PI / 180, s.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), a.indexOf("empty") > -1 && (s.style.stroke = s.style.fill, s.style.fill = "#fff", s.style.lineWidth = 2), t;
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
		symbolSize: 4,
		symbolRotate: null,
		showSymbol: !0,
		showAllSymbol: "auto",
		connectNulls: !1,
		sampling: "none",
		animationEasing: "linear",
		progressive: 0,
		hoverLayerThreshold: Infinity,
		universalTransition: { divideShape: "clone" },
		triggerLineEvent: !1
	}, t;
}(xg);
//#endregion
//#region node_modules/echarts/lib/chart/helper/labelHelper.js
function Bg(e, t) {
	var n = e.mapDimensionsAll("defaultedLabel"), r = n.length;
	if (r === 1) {
		var i = Pf(e, t, n[0]);
		return i == null ? null : i + "";
	}
	if (r) {
		for (var a = [], o = 0; o < n.length; o++) a.push(Pf(e, t, n[o]));
		return a.join(" ");
	}
}
function Vg(e, t) {
	var n = e.mapDimensionsAll("defaultedLabel");
	if (!H(t)) return t + "";
	for (var r = [], i = 0; i < n.length; i++) {
		var a = e.getDimensionIndex(n[i]);
		a >= 0 && r.push(t[a]);
	}
	return r.join(" ");
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/Symbol.js
var Hg = function(e) {
	c(t, e);
	function t(t, n, r, i) {
		var a = e.call(this) || this;
		return a.updateData(t, n, r, i), a;
	}
	return t.prototype._createSymbol = function(e, t, n, r, i) {
		this.removeAll();
		var a = Ig(e, -1, -1, 2, 2, null, i);
		a.attr({
			z2: 100,
			culling: !0,
			scaleX: r[0] / 2,
			scaleY: r[1] / 2
		}), a.drift = Ug, this._symbolType = e, this.add(a);
	}, t.prototype.stopSymbolAnimation = function(e) {
		this.childAt(0).stopAnimation(null, e);
	}, t.prototype.getSymbolType = function() {
		return this._symbolType;
	}, t.prototype.getSymbolPath = function() {
		return this.childAt(0);
	}, t.prototype.highlight = function() {
		Oc(this.childAt(0));
	}, t.prototype.downplay = function() {
		kc(this.childAt(0));
	}, t.prototype.setZ = function(e, t) {
		var n = this.childAt(0);
		n.zlevel = e, n.z = t;
	}, t.prototype.setDraggable = function(e, t) {
		var n = this.childAt(0);
		n.draggable = e, n.cursor = !t && e ? "move" : n.cursor;
	}, t.prototype.updateData = function(e, n, r, i) {
		this.silent = !1;
		var a = e.getItemVisual(n, "symbol") || "circle", o = e.hostModel, s = t.getSymbolSize(e, n), c = a !== this._symbolType, l = i && i.disableAnimation;
		if (c) {
			var u = e.getItemVisual(n, "symbolKeepAspect");
			this._createSymbol(a, e, n, s, u);
		} else {
			var d = this.childAt(0);
			d.silent = !1;
			var f = {
				scaleX: s[0] / 2,
				scaleY: s[1] / 2
			};
			l ? d.attr(f) : Eu(d, f, o, n), Mu(d);
		}
		if (this._updateCommon(e, n, s, r, i), c) {
			var d = this.childAt(0);
			if (!l) {
				var f = {
					scaleX: this._sizeX,
					scaleY: this._sizeY,
					style: { opacity: d.style.opacity }
				};
				d.scaleX = d.scaleY = 0, d.style.opacity = 0, Du(d, f, o, n);
			}
		}
		l && this.childAt(0).stopAnimation("leave");
	}, t.prototype._updateCommon = function(e, t, n, r, i) {
		var a = this.childAt(0), o = e.hostModel, s, c, l, u, d, f, p, m, h;
		if (r && (s = r.emphasisItemStyle, c = r.blurItemStyle, l = r.selectItemStyle, u = r.focus, d = r.blurScope, p = r.labelStatesModels, m = r.hoverScale, h = r.cursorStyle, f = r.emphasisDisabled), !r || e.hasItemOption) {
			var g = r && r.itemModel ? r.itemModel : e.getItemModel(t), _ = g.getModel("emphasis");
			s = _.getModel("itemStyle").getItemStyle(), l = g.getModel(["select", "itemStyle"]).getItemStyle(), c = g.getModel(["blur", "itemStyle"]).getItemStyle(), u = _.get("focus"), d = _.get("blurScope"), f = _.get("disabled"), p = gd(g), m = _.getShallow("scale"), h = g.getShallow("cursor");
		}
		var v = e.getItemVisual(t, "symbolRotate");
		a.attr("rotation", (v || 0) * Math.PI / 180 || 0);
		var y = Rg(e.getItemVisual(t, "symbolOffset"), n);
		y && (a.x = y[0], a.y = y[1]), h && a.attr("cursor", h);
		var b = e.getItemVisual(t, "style"), x = b.fill;
		if (a instanceof ho) {
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
		hd(a, p, {
			labelFetcher: o,
			labelDataIndex: t,
			defaultText: E,
			inheritColor: x,
			defaultOpacity: b.opacity
		});
		function E(t) {
			return T ? e.getName(t) : Bg(e, t);
		}
		this._sizeX = n[0] / 2, this._sizeY = n[1] / 2;
		var D = a.ensureState("emphasis");
		D.style = s, a.ensureState("select").style = l, a.ensureState("blur").style = c;
		var O = m == null || m === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(m) && m > 0 ? +m : 1;
		D.scaleX = this._sizeX * O, D.scaleY = this._sizeY * O, this.setSymbolScale(1), qc(this, u, d, f);
	}, t.prototype.setSymbolScale = function(e) {
		this.scaleX = this.scaleY = e;
	}, t.prototype.fadeOut = function(e, t, n) {
		var r = this.childAt(0), i = Q(this).dataIndex, a = n && n.animation;
		if (this.silent = r.silent = !0, n && n.fadeLabel) {
			var o = r.getTextContent();
			o && ku(o, { style: { opacity: 0 } }, t, {
				dataIndex: i,
				removeOpt: a,
				cb: function() {
					r.removeTextContent();
				}
			});
		} else r.removeTextContent();
		ku(r, {
			style: { opacity: 0 },
			scaleX: 0,
			scaleY: 0
		}, t, {
			dataIndex: i,
			cb: e,
			removeOpt: a
		});
	}, t.getSymbolSize = function(e, t) {
		return Lg(e.getItemVisual(t, "symbolSize"));
	}, t;
}(Dl);
function Ug(e, t) {
	this.parent.drift(e, t);
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/SymbolDraw.js
function Wg(e, t, n, r) {
	return t && !isNaN(t[0]) && !isNaN(t[1]) && !(r.isIgnore && r.isIgnore(n)) && !(r.clipShape && !r.clipShape.contain(t[0], t[1])) && e.getItemVisual(n, "symbol") !== "none";
}
function Gg(e) {
	return e != null && !G(e) && (e = { isIgnore: e }), e || {};
}
function Kg(e) {
	var t = e.hostModel, n = t.getModel("emphasis");
	return {
		emphasisItemStyle: n.getModel("itemStyle").getItemStyle(),
		blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
		selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
		focus: n.get("focus"),
		blurScope: n.get("blurScope"),
		emphasisDisabled: n.get("disabled"),
		hoverScale: n.get("scale"),
		labelStatesModels: gd(t),
		cursorStyle: t.get("cursor")
	};
}
var qg = function() {
	function e(e) {
		this.group = new Dl(), this._SymbolCtor = e || Hg;
	}
	return e.prototype.updateData = function(e, t) {
		this._progressiveEls = null, t = Gg(t);
		var n = this.group, r = e.hostModel, i = this._data, a = this._SymbolCtor, o = t.disableAnimation, s = Kg(e), c = { disableAnimation: o }, l = t.getSymbolPoint || function(t) {
			return e.getItemLayout(t);
		};
		i || n.removeAll(), e.diff(i).add(function(r) {
			var i = l(r);
			if (Wg(e, i, r, t)) {
				var o = new a(e, r, s, c);
				o.setPosition(i), e.setItemGraphicEl(r, o), n.add(o);
			}
		}).update(function(u, d) {
			var f = i.getItemGraphicEl(d), p = l(u);
			if (!Wg(e, p, u, t)) n.remove(f);
			else {
				var m = e.getItemVisual(u, "symbol") || "circle", h = f && f.getSymbolType && f.getSymbolType();
				if (!f || h && h !== m) n.remove(f), f = new a(e, u, s, c), f.setPosition(p);
				else {
					f.updateData(e, u, s, c);
					var g = {
						x: p[0],
						y: p[1]
					};
					o ? f.attr(g) : Eu(f, g, r);
				}
				n.add(f), e.setItemGraphicEl(u, f);
			}
		}).remove(function(e) {
			var t = i.getItemGraphicEl(e);
			t && t.fadeOut(function() {
				n.remove(t);
			}, r);
		}).execute(), this._getSymbolPoint = l, this._data = e;
	}, e.prototype.updateLayout = function() {
		var e = this, t = this._data;
		t && t.eachItemGraphicEl(function(t, n) {
			var r = e._getSymbolPoint(n);
			t.setPosition(r), t.markRedraw();
		});
	}, e.prototype.incrementalPrepareUpdate = function(e) {
		this._seriesScope = Kg(e), this._data = null, this.group.removeAll();
	}, e.prototype.incrementalUpdate = function(e, t, n) {
		this._progressiveEls = [], n = Gg(n);
		function r(e) {
			e.isGroup || (e.incremental = !0, e.ensureState("emphasis").hoverLayer = !0);
		}
		for (var i = e.start; i < e.end; i++) {
			var a = t.getItemLayout(i);
			if (Wg(t, a, i, n)) {
				var o = new this._SymbolCtor(t, i, this._seriesScope);
				o.traverse(r), o.setPosition(a), this.group.add(o), t.setItemGraphicEl(i, o), this._progressiveEls.push(o);
			}
		}
	}, e.prototype.eachRendered = function(e) {
		dd(this._progressiveEls || this.group, e);
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
function Jg(e, t, n) {
	var r = e.getBaseAxis(), i = e.getOtherAxis(r), a = Yg(i, n), o = r.dim, s = i.dim, c = t.mapDimension(s), l = t.mapDimension(o), u = +(s === "x" || s === "radius"), d = L(e.dimensions, function(e) {
		return t.mapDimension(e);
	}), f = !1, p = t.getCalculationInfo("stackResultDimension");
	return Lp(t, d[0]) && (f = !0, d[0] = p), Lp(t, d[1]) && (f = !0, d[1] = p), {
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
function Yg(e, t) {
	var n = 0, r = e.scale.getExtent();
	return t === "start" ? n = r[0] : t === "end" ? n = r[1] : ue(t) && !isNaN(t) ? n = t : r[0] > 0 ? n = r[0] : r[1] < 0 && (n = r[1]), n;
}
function Xg(e, t, n, r) {
	var i = NaN;
	e.stacked && (i = n.get(n.getCalculationInfo("stackedOverDimension"), r)), isNaN(i) && (i = e.valueStart);
	var a = e.baseDataOffset, o = [];
	return o[a] = n.get(e.baseDim, r), o[1 - a] = i, t.dataToPoint(o);
}
//#endregion
//#region node_modules/echarts/lib/util/vendor.js
var Zg = typeof Float32Array < "u", Qg = Zg ? Float32Array : Array;
function $g(e) {
	return H(e) ? Zg ? new Float32Array(e) : e : new Qg(e);
}
//#endregion
//#region node_modules/echarts/lib/chart/line/lineAnimationDiff.js
function e_(e, t) {
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
function t_(e, t, n, r, i, a, o, s) {
	for (var c = e_(e, t), l = [], u = [], d = [], f = [], p = [], m = [], h = [], g = Jg(i, t, o), _ = e.getLayout("points") || [], v = t.getLayout("points") || [], y = 0; y < c.length; y++) {
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
				var ee = Xg(g, i, t, O);
				d.push(ee[0], ee[1]), f.push(r[C], r[C + 1]), h.push(t.getRawIndex(O));
				break;
			case "-": x = !1;
		}
		x && (p.push(b), m.push(m.length));
	}
	m.sort(function(e, t) {
		return h[e] - h[t];
	});
	for (var j = l.length, M = $g(j), te = $g(j), N = $g(j), P = $g(j), ne = [], y = 0; y < m.length; y++) {
		var F = m[y], re = y * 2, ie = F * 2;
		M[re] = l[ie], M[re + 1] = l[ie + 1], te[re] = u[ie], te[re + 1] = u[ie + 1], N[re] = d[ie], N[re + 1] = d[ie + 1], P[re] = f[ie], P[re + 1] = f[ie + 1], ne[y] = p[F];
	}
	return {
		current: M,
		next: te,
		stackedOnCurrent: N,
		stackedOnNext: P,
		status: ne
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/line/poly.js
var n_ = Math.min, r_ = Math.max;
function i_(e, t) {
	return isNaN(e) || isNaN(t);
}
function a_(e, t, n, r, i, a, o, s, c) {
	for (var l, u, d, f, p, m, h = n, g = 0; g < r; g++) {
		var _ = t[h * 2], v = t[h * 2 + 1];
		if (h >= i || h < 0) break;
		if (i_(_, v)) {
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
				if (c) for (; i_(S, C) && w < r;) w++, x += a, S = t[x * 2], C = t[x * 2 + 1];
				var T = .5, E = 0, D = 0, O = void 0, k = void 0;
				if (w >= r || i_(S, C)) p = _, m = v;
				else {
					E = S - l, D = C - u;
					var A = _ - l, ee = S - _, j = v - u, M = C - v, te = void 0, N = void 0;
					if (s === "x") {
						te = Math.abs(A), N = Math.abs(ee);
						var P = E > 0 ? 1 : -1;
						p = _ - P * te * o, m = v, O = _ + P * N * o, k = v;
					} else if (s === "y") {
						te = Math.abs(j), N = Math.abs(M);
						var ne = D > 0 ? 1 : -1;
						p = _, m = v - ne * te * o, O = _, k = v + ne * N * o;
					} else te = Math.sqrt(A * A + j * j), N = Math.sqrt(ee * ee + M * M), T = N / (N + te), p = _ - E * o * (1 - T), m = v - D * o * (1 - T), O = _ + E * o * T, k = v + D * o * T, O = n_(O, r_(S, _)), k = n_(k, r_(C, v)), O = r_(O, n_(S, _)), k = r_(k, n_(C, v)), E = O - _, D = k - v, p = _ - E * te / N, m = v - D * te / N, p = n_(p, r_(l, _)), m = n_(m, r_(u, v)), p = r_(p, n_(l, _)), m = r_(m, n_(u, v)), E = _ - p, D = v - m, O = _ + E * N / te, k = v + D * N / te;
				}
				e.bezierCurveTo(d, f, p, m, _, v), d = O, f = k;
			} else e.lineTo(_, v);
		}
		l = _, u = v, h += a;
	}
	return g;
}
var o_ = function() {
	function e() {
		this.smooth = 0, this.smoothConstraint = !0;
	}
	return e;
}(), s_ = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "ec-polyline", n;
	}
	return t.prototype.getDefaultStyle = function() {
		return {
			stroke: "#000",
			fill: null
		};
	}, t.prototype.getDefaultShape = function() {
		return new o_();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.points, r = 0, i = n.length / 2;
		if (t.connectNulls) {
			for (; i > 0 && i_(n[i * 2 - 2], n[i * 2 - 1]); i--);
			for (; r < i && i_(n[r * 2], n[r * 2 + 1]); r++);
		}
		for (; r < i;) r += a_(e, n, r, i, i, 1, t.smooth, t.smoothMonotone, t.connectNulls) + 1;
	}, t.prototype.getPointOn = function(e, t) {
		this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
		for (var n = this.path.data, r = La.CMD, i, a, o = t === "x", s = [], c = 0; c < n.length;) {
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
					var v = o ? Yn(i, u, f, m, e, s) : Yn(a, d, p, h, e, s);
					if (v > 0) for (var y = 0; y < v; y++) {
						var b = s[y];
						if (b <= 1 && b >= 0) {
							var _ = o ? qn(a, d, p, h, b) : qn(i, u, f, m, b);
							return o ? [e, _] : [_, e];
						}
					}
					i = m, a = h;
			}
		}
	}, t;
}(co), c_ = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(o_), l_ = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "ec-polygon", n;
	}
	return t.prototype.getDefaultShape = function() {
		return new c_();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.points, r = t.stackedOnPoints, i = 0, a = n.length / 2, o = t.smoothMonotone;
		if (t.connectNulls) {
			for (; a > 0 && i_(n[a * 2 - 2], n[a * 2 - 1]); a--);
			for (; i < a && i_(n[i * 2], n[i * 2 + 1]); i++);
		}
		for (; i < a;) {
			var s = a_(e, n, i, a, a, 1, t.smooth, o, t.connectNulls);
			a_(e, r, i + s - 1, s, a, -1, t.stackedOnSmooth, o, t.connectNulls), i += s + 1, e.closePath();
		}
	}, t;
}(co);
//#endregion
//#region node_modules/echarts/lib/chart/helper/createRenderPlanner.js
function u_() {
	var e = Bs();
	return function(t) {
		var n = e(t), r = t.pipelineContext, i = !!n.large, a = !!n.progressiveRender, o = n.large = !!(r && r.large), s = n.progressiveRender = !!(r && r.progressiveRender);
		return (i !== o || a !== s) && "reset";
	};
}
//#endregion
//#region node_modules/echarts/lib/view/Chart.js
var d_ = Bs(), f_ = u_(), p_ = function() {
	function e() {
		this.group = new Dl(), this.uid = Gp("viewChart"), this.renderTask = Mh({
			plan: g_,
			reset: __
		}), this.renderTask.context = { view: this };
	}
	return e.prototype.init = function(e, t) {}, e.prototype.render = function(e, t, n, r) {}, e.prototype.highlight = function(e, t, n, r) {
		var i = e.getData(r && r.dataType);
		i && h_(i, r, "emphasis");
	}, e.prototype.downplay = function(e, t, n, r) {
		var i = e.getData(r && r.dataType);
		i && h_(i, r, "normal");
	}, e.prototype.remove = function(e, t) {
		this.group.removeAll();
	}, e.prototype.dispose = function(e, t) {}, e.prototype.updateView = function(e, t, n, r) {
		this.render(e, t, n, r);
	}, e.prototype.updateLayout = function(e, t, n, r) {
		this.render(e, t, n, r);
	}, e.prototype.updateVisual = function(e, t, n, r) {
		this.render(e, t, n, r);
	}, e.prototype.eachRendered = function(e) {
		dd(this.group, e);
	}, e.markUpdateMethod = function(e, t) {
		d_(e).updateMethod = t;
	}, e.protoInitialize = function() {
		var t = e.prototype;
		t.type = "chart";
	}(), e;
}();
function m_(e, t, n) {
	e && $c(e) && (t === "emphasis" ? Oc : kc)(e, n);
}
function h_(e, t, n) {
	var r = zs(e, t), i = t && t.highlightKey != null ? tl(t.highlightKey) : null;
	r == null ? e.eachItemGraphicEl(function(e) {
		m_(e, n, i);
	}) : I(ys(r), function(t) {
		m_(e.getItemGraphicEl(t), n, i);
	});
}
We(p_, ["dispose"]), Ze(p_);
function g_(e) {
	return f_(e.model);
}
function __(e) {
	var t = e.model, n = e.ecModel, r = e.api, i = e.payload, a = t.pipelineContext.progressiveRender, o = e.view, s = i && d_(i).updateMethod, c = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
	return c !== "render" && o[c](t, n, r, i), v_[c];
}
var v_ = {
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
function y_(e, t, n, r, i) {
	var a = e.getArea(), o = a.x, s = a.y, c = a.width, l = a.height, u = n.get(["lineStyle", "width"]) || 0;
	o -= u / 2, s -= u / 2, c += u, l += u, c = Math.ceil(c), o !== Math.floor(o) && (o = Math.floor(o), c++);
	var d = new Co({ shape: {
		x: o,
		y: s,
		width: c,
		height: l
	} });
	if (t) {
		var f = e.getBaseAxis(), p = f.isHorizontal(), m = f.inverse;
		p ? (m && (d.shape.x += c), d.shape.width = 0) : (m || (d.shape.y += l), d.shape.height = 0);
		var h = U(i) ? function(e) {
			i(e, d);
		} : null;
		Du(d, { shape: {
			width: c,
			height: l,
			x: o,
			y: s
		} }, n, null, r, h);
	}
	return d;
}
function b_(e, t, n) {
	var r = e.getArea(), i = Ko(r.r0, 1), a = Ko(r.r, 1), o = new Jl({ shape: {
		cx: Ko(e.cx, 1),
		cy: Ko(e.cy, 1),
		r0: i,
		r: a,
		startAngle: r.startAngle,
		endAngle: r.endAngle,
		clockwise: r.clockwise
	} });
	return t && (e.getBaseAxis().dim === "angle" ? o.shape.endAngle = r.startAngle : o.shape.r = i, Du(o, { shape: {
		endAngle: r.endAngle,
		r: a
	} }, n)), o;
}
function x_(e, t, n, r, i) {
	return e ? e.type === "polar" ? b_(e, t, n) : e.type === "cartesian2d" ? y_(e, t, n, r, i) : null : null;
}
//#endregion
//#region node_modules/echarts/lib/coord/CoordinateSystem.js
function S_(e, t) {
	return e.type === t;
}
//#endregion
//#region node_modules/echarts/lib/chart/line/LineView.js
function C_(e, t) {
	if (e.length === t.length) {
		for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return;
		return !0;
	}
}
function w_(e) {
	for (var t = Infinity, n = Infinity, r = -Infinity, i = -Infinity, a = 0; a < e.length;) {
		var o = e[a++], s = e[a++];
		isNaN(o) || (t = Math.min(o, t), r = Math.max(o, r)), isNaN(s) || (n = Math.min(s, n), i = Math.max(s, i));
	}
	return [[t, n], [r, i]];
}
function T_(e, t) {
	var n = w_(e), r = n[0], i = n[1], a = w_(t), o = a[0], s = a[1];
	return Math.max(Math.abs(r[0] - o[0]), Math.abs(r[1] - o[1]), Math.abs(i[0] - s[0]), Math.abs(i[1] - s[1]));
}
function E_(e) {
	return ue(e) ? e : e ? .5 : 0;
}
function D_(e, t, n) {
	if (!n.valueDim) return [];
	for (var r = t.count(), i = $g(r * 2), a = 0; a < r; a++) {
		var o = Xg(n, e, t, a);
		i[a * 2] = o[0], i[a * 2 + 1] = o[1];
	}
	return i;
}
function O_(e, t, n, r, i) {
	var a = n.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], c = 0, l = [], u = [], d = [], f = [];
	if (i) {
		for (c = 0; c < e.length; c += 2) {
			var p = t || e;
			!isNaN(p[c]) && !isNaN(p[c + 1]) && f.push(e[c], e[c + 1]);
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
function k_(e, t) {
	var n = [], r = e.length, i, a;
	function o(e, t, n) {
		var r = e.coord;
		return {
			coord: n,
			color: jr((n - r) / (t.coord - r), [e.color, t.color])
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
function A_(e, t, n) {
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
			var f = k_(l, i === "x" ? n.getWidth() : n.getHeight()), p = f.length;
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
			var v = new mu(0, 0, 0, 0, f, !0);
			return v[i] = h, v[i + "2"] = g, v;
		}
	}
}
function j_(e, t, n) {
	var r = e.get("showAllSymbol"), i = r === "auto";
	if (!r || i) {
		var a = n.getAxesByScale("ordinal")[0];
		if (a && !(i && M_(a, t))) {
			var o = t.mapDimension(a.dim), s = {};
			return I(a.getViewLabels(), function(e) {
				var t = a.scale.getRawOrdinalNumber(e.tickValue);
				s[t] = 1;
			}), function(e) {
				return !s.hasOwnProperty(t.get(o, e));
			};
		}
	}
}
function M_(e, t) {
	var n = e.getExtent(), r = Math.abs(n[1] - n[0]) / e.scale.count();
	isNaN(r) && (r = 0);
	for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a) if (Hg.getSymbolSize(t, o)[+!!e.isHorizontal()] * 1.5 > r) return !1;
	return !0;
}
function N_(e, t) {
	return isNaN(e) || isNaN(t);
}
function P_(e) {
	for (var t = e.length / 2; t > 0 && N_(e[t * 2 - 2], e[t * 2 - 1]); t--);
	return t - 1;
}
function F_(e, t) {
	return [e[t * 2], e[t * 2 + 1]];
}
function I_(e, t, n) {
	for (var r = e.length / 2, i = n === "x" ? 0 : 1, a, o, s = 0, c = -1, l = 0; l < r; l++) if (o = e[l * 2 + i], !(isNaN(o) || isNaN(e[l * 2 + 1 - i]))) {
		if (l === 0) a = o;
		else {
			if (a <= t && o >= t || a >= t && o <= t) {
				c = l;
				break;
			}
			s = l, a = o;
		}
	}
	return {
		range: [s, c],
		t: (t - a) / (o - a)
	};
}
function L_(e) {
	if (e.get(["endLabel", "show"])) return !0;
	for (var t = 0; t < nc.length; t++) if (e.get([
		nc[t],
		"endLabel",
		"show"
	])) return !0;
	return !1;
}
function R_(e, t, n, r) {
	if (S_(t, "cartesian2d")) {
		var i = r.getModel("endLabel"), a = i.get("valueAnimation"), o = r.getData(), s = { lastFrameIndex: 0 }, c = L_(r) ? function(n, r) {
			e._endLabelOnDuring(n, r, o, s, a, i, t);
		} : null, l = t.getBaseAxis().isHorizontal(), u = y_(t, n, r, function() {
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
	return b_(t, n, r);
}
function z_(e, t) {
	var n = t.getBaseAxis(), r = n.isHorizontal(), i = n.inverse, a = r ? i ? "right" : "left" : "center", o = r ? "middle" : i ? "top" : "bottom";
	return { normal: {
		align: e.get("align") || a,
		verticalAlign: e.get("verticalAlign") || o
	} };
}
var B_ = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.init = function() {
		var e = new Dl(), t = new qg();
		this.group.add(t.group), this._symbolDraw = t, this._lineGroup = e, this._changePolyState = V(this._changePolyState, this);
	}, t.prototype.render = function(e, t, n) {
		var r = e.coordinateSystem, i = this.group, a = e.getData(), o = e.getModel("lineStyle"), s = e.getModel("areaStyle"), c = a.getLayout("points") || [], l = r.type === "polar", u = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, m = this._lineGroup, h = !t.ssr && e.get("animation"), g = !s.isEmpty(), _ = s.get("origin"), v = Jg(r, a, _), y = g && D_(r, a, v), b = e.get("showSymbol"), x = e.get("connectNulls"), S = b && !l && j_(e, a, r), C = this._data;
		C && C.eachItemGraphicEl(function(e, t) {
			e.__temp && (i.remove(e), C.setItemGraphicEl(t, null));
		}), b || d.remove(), i.add(m);
		var w = !l && e.get("step"), T;
		r && r.getArea && e.get("clip", !0) && (T = r.getArea(), T.width == null ? T.r0 && (T.r0 -= .5, T.r += .5) : (T.x -= .1, T.y -= .1, T.width += .2, T.height += .2)), this._clipShapeForSymbol = T;
		var E = A_(a, r, n) || a.getVisual("style")[a.getVisual("drawType")];
		if (!(f && u.type === r.type && w === this._step)) b && d.updateData(a, {
			isIgnore: S,
			clipShape: T,
			disableAnimation: !0,
			getSymbolPoint: function(e) {
				return [c[e * 2], c[e * 2 + 1]];
			}
		}), h && this._initSymbolLabelAnimation(a, r, T), w && (y &&= O_(y, c, r, w, x), c = O_(c, null, r, w, x)), f = this._newPolyline(c), g ? p = this._newPolygon(c, y) : p &&= (m.remove(p), this._polygon = null), l || this._initOrUpdateEndLabel(e, r, lh(E)), m.setClipPath(R_(this, r, !0, e));
		else {
			g && !p ? p = this._newPolygon(c, y) : p && !g && (m.remove(p), p = this._polygon = null), l || this._initOrUpdateEndLabel(e, r, lh(E));
			var D = m.getClipPath();
			D ? Du(D, { shape: R_(this, r, !1, e).shape }, e) : m.setClipPath(R_(this, r, !0, e)), b && d.updateData(a, {
				isIgnore: S,
				clipShape: T,
				disableAnimation: !0,
				getSymbolPoint: function(e) {
					return [c[e * 2], c[e * 2 + 1]];
				}
			}), (!C_(this._stackedOnPoints, y) || !C_(this._points, c)) && (h ? this._doUpdateAnimation(a, y, r, n, w, _, x) : (w && (y &&= O_(y, c, r, w, x), c = O_(c, null, r, w, x)), f.setShape({ points: c }), p && p.setShape({
				points: c,
				stackedOnPoints: y
			})));
		}
		var O = e.getModel("emphasis"), k = O.get("focus"), A = O.get("blurScope"), ee = O.get("disabled");
		if (f.useStyle(P(o.getLineStyle(), {
			fill: "none",
			stroke: E,
			lineJoin: "bevel"
		})), Zc(f, e, "lineStyle"), f.style.lineWidth > 0 && e.get([
			"emphasis",
			"lineStyle",
			"width"
		]) === "bolder") {
			var j = f.getState("emphasis").style;
			j.lineWidth = +f.style.lineWidth + 1;
		}
		Q(f).seriesIndex = e.seriesIndex, qc(f, k, A, ee);
		var M = E_(e.get("smooth")), te = e.get("smoothMonotone");
		if (f.setShape({
			smooth: M,
			smoothMonotone: te,
			connectNulls: x
		}), p) {
			var N = a.getCalculationInfo("stackedOnSeries"), ne = 0;
			p.useStyle(P(s.getAreaStyle(), {
				fill: E,
				opacity: .7,
				lineJoin: "bevel",
				decal: a.getVisual("style").decal
			})), N && (ne = E_(N.get("smooth"))), p.setShape({
				smooth: M,
				stackedOnSmooth: ne,
				smoothMonotone: te,
				connectNulls: x
			}), Zc(p, e, "areaStyle"), Q(p).seriesIndex = e.seriesIndex, qc(p, k, A, ee);
		}
		var F = this._changePolyState;
		a.eachItemGraphicEl(function(e) {
			e && (e.onHoverStateChange = F);
		}), this._polyline.onHoverStateChange = F, this._data = a, this._coordSys = r, this._stackedOnPoints = y, this._points = c, this._step = w, this._valueOrigin = _, e.get("triggerLineEvent") && (this.packEventData(e, f), p && this.packEventData(e, p));
	}, t.prototype.packEventData = function(e, t) {
		Q(t).eventData = {
			componentType: "series",
			componentSubType: "line",
			componentIndex: e.componentIndex,
			seriesIndex: e.seriesIndex,
			seriesName: e.name,
			seriesType: "line"
		};
	}, t.prototype.highlight = function(e, t, n, r) {
		var i = e.getData(), a = zs(i, r);
		if (this._changePolyState("emphasis"), !(a instanceof Array) && a != null && a >= 0) {
			var o = i.getLayout("points"), s = i.getItemGraphicEl(a);
			if (!s) {
				var c = o[a * 2], l = o[a * 2 + 1];
				if (isNaN(c) || isNaN(l) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(c, l)) return;
				var u = e.get("zlevel") || 0, d = e.get("z") || 0;
				s = new Hg(i, a), s.x = c, s.y = l, s.setZ(u, d);
				var f = s.getSymbolPath().getTextContent();
				f && (f.zlevel = u, f.z = d, f.z2 = this._polyline.z2 + 1), s.__temp = !0, i.setItemGraphicEl(a, s), s.stopSymbolAnimation(!0), this.group.add(s);
			}
			s.highlight();
		} else p_.prototype.highlight.call(this, e, t, n, r);
	}, t.prototype.downplay = function(e, t, n, r) {
		var i = e.getData(), a = zs(i, r);
		if (this._changePolyState("normal"), a != null && a >= 0) {
			var o = i.getItemGraphicEl(a);
			o && (o.__temp ? (i.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
		} else p_.prototype.downplay.call(this, e, t, n, r);
	}, t.prototype._changePolyState = function(e) {
		var t = this._polygon;
		yc(this._polyline, e), t && yc(t, e);
	}, t.prototype._newPolyline = function(e) {
		var t = this._polyline;
		return t && this._lineGroup.remove(t), t = new s_({
			shape: { points: e },
			segmentIgnoreThreshold: 2,
			z2: 10
		}), this._lineGroup.add(t), this._polyline = t, t;
	}, t.prototype._newPolygon = function(e, t) {
		var n = this._polygon;
		return n && this._lineGroup.remove(n), n = new l_({
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
		U(c) && (c = c(null));
		var l = s.get("animationDelay") || 0, u = U(l) ? l(null) : l;
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
				var y = U(l) ? l(a) : c * v + u, b = s.getSymbolPath(), x = b.getTextContent();
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
		if (L_(e)) {
			var i = e.getData(), a = this._polyline, o = i.getLayout("points");
			if (!o) {
				a.removeTextContent(), this._endLabel = null;
				return;
			}
			var s = this._endLabel;
			s || (s = this._endLabel = new Do({ z2: 200 }), s.ignoreClip = !0, a.setTextContent(this._endLabel), a.disableLabelAnimation = !0);
			var c = P_(o);
			c >= 0 && (hd(a, gd(e, "endLabel"), {
				inheritColor: n,
				labelFetcher: e,
				labelDataIndex: c,
				defaultText: function(e, t, n) {
					return n == null ? Bg(i, e) : Vg(i, n);
				},
				enableTextSetter: !0
			}, z_(r, t)), a.textConfig.position = null);
		} else this._endLabel &&= (this._polyline.removeTextContent(), null);
	}, t.prototype._endLabelOnDuring = function(e, t, n, r, i, a, o) {
		var s = this._endLabel, c = this._polyline;
		if (s) {
			e < 1 && r.originalX == null && (r.originalX = s.x, r.originalY = s.y);
			var l = n.getLayout("points"), u = n.hostModel, d = u.get("connectNulls"), f = a.get("precision"), p = a.get("distance") || 0, m = o.getBaseAxis(), h = m.isHorizontal(), g = m.inverse, _ = t.shape, v = g ? h ? _.x : _.y + _.height : h ? _.x + _.width : _.y, y = (h ? p : 0) * (g ? -1 : 1), b = (h ? 0 : -p) * (g ? -1 : 1), x = h ? "x" : "y", S = I_(l, v, x), C = S.range, w = C[1] - C[0], T = void 0;
			if (w >= 1) {
				if (w > 1 && !d) {
					var E = F_(l, C[0]);
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
					i && (T = Xs(n, f, D, O, S.t));
				}
				r.lastFrameIndex = C[0];
			} else {
				var k = e === 1 || r.lastFrameIndex > 0 ? C[0] : 0, E = F_(l, k);
				i && (T = u.getRawValue(k)), s.attr({
					x: E[0] + y,
					y: E[1] + b
				});
			}
			if (i) {
				var A = Ed(s);
				typeof A.setLabelText == "function" && A.setLabelText(T);
			}
		}
	}, t.prototype._doUpdateAnimation = function(e, t, n, r, i, a, o) {
		var s = this._polyline, c = this._polygon, l = e.hostModel, u = t_(this._data, e, this._stackedOnPoints, t, this._coordSys, n, this._valueOrigin, a), d = u.current, f = u.stackedOnCurrent, p = u.next, m = u.stackedOnNext;
		if (i && (f = O_(u.stackedOnCurrent, u.current, n, i, o), d = O_(u.current, null, n, i, o), m = O_(u.stackedOnNext, u.next, n, i, o), p = O_(u.next, null, n, i, o)), T_(d, p) > 3e3 || c && T_(f, m) > 3e3) s.stopAnimation(), s.setShape({ points: p }), c && (c.stopAnimation(), c.setShape({
			points: p,
			stackedOnPoints: m
		}));
		else {
			s.shape.__points = u.current, s.shape.points = d;
			var h = { shape: { points: p } };
			u.current !== d && (h.shape.__points = u.next), s.stopAnimation(), Eu(s, h, l), c && (c.setShape({
				points: d,
				stackedOnPoints: f
			}), c.stopAnimation(), Eu(c, { shape: { stackedOnPoints: m } }, l), s.shape.points !== c.shape.points && (c.shape.points = s.shape.points));
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
		}
	}, t.prototype.remove = function(e) {
		var t = this.group, n = this._data;
		this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function(e, r) {
			e.__temp && (t.remove(e), n.setItemGraphicEl(r, null));
		}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
	}, t.type = "line", t;
}(p_);
//#endregion
//#region node_modules/echarts/lib/layout/points.js
function V_(e, t) {
	return {
		seriesType: e,
		plan: u_(),
		reset: function(e) {
			var n = e.getData(), r = e.coordinateSystem, i = e.pipelineContext, a = t || i.large;
			if (r) {
				var o = L(r.dimensions, function(e) {
					return n.mapDimension(e);
				}).slice(0, 2), s = o.length, c = n.getCalculationInfo("stackResultDimension");
				Lp(n, o[0]) && (o[0] = c), Lp(n, o[1]) && (o[1] = c);
				var l = n.getStore(), u = n.getDimensionIndex(o[0]), d = n.getDimensionIndex(o[1]);
				return s && { progress: function(e, t) {
					for (var n = e.end - e.start, i = a && $g(n * s), o = [], c = [], f = e.start, p = 0; f < e.end; f++) {
						var m = void 0;
						if (s === 1) {
							var h = l.get(u, f);
							m = r.dataToPoint(h, null, c);
						} else o[0] = l.get(u, f), o[1] = l.get(d, f), m = r.dataToPoint(o, null, c);
						a ? (i[p++] = m[0], i[p++] = m[1]) : t.setItemLayout(f, m.slice());
					}
					a && t.setLayout("points", i);
				} };
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/processor/dataSample.js
var H_ = {
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
}, U_ = function(e) {
	return Math.round(e.length / 2);
};
function W_(e) {
	return {
		seriesType: e,
		reset: function(e, t, n) {
			var r = e.getData(), i = e.get("sampling"), a = e.coordinateSystem, o = r.count();
			if (o > 10 && a.type === "cartesian2d" && i) {
				var s = a.getBaseAxis(), c = a.getOtherAxis(s), l = s.getExtent(), u = n.getDevicePixelRatio(), d = Math.abs(l[1] - l[0]) * (u || 1), f = Math.round(o / d);
				if (isFinite(f) && f > 1) {
					i === "lttb" ? e.setData(r.lttbDownSample(r.mapDimension(c.dim), 1 / f)) : i === "minmax" && e.setData(r.minmaxDownSample(r.mapDimension(c.dim), 1 / f));
					var p = void 0;
					W(i) ? p = H_[i] : U(i) && (p = i), p && e.setData(r.downSample(r.mapDimension(c.dim), 1 / f, p, U_));
				}
			}
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/line/install.js
function G_(e) {
	e.registerChartView(B_), e.registerSeriesModel(zg), e.registerLayout(V_("line", !0)), e.registerVisual({
		seriesType: "line",
		reset: function(e) {
			var t = e.getData(), n = e.getModel("lineStyle").getLineStyle();
			n && !n.stroke && (n.stroke = t.getVisual("style").fill), t.setVisual("legendLineStyle", n);
		}
	}), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, W_("line"));
}
//#endregion
//#region node_modules/echarts/lib/layout/barGrid.js
var K_ = "__ec_stack_";
function q_(e) {
	return e.get("stack") || K_ + e.seriesIndex;
}
function J_(e) {
	return e.dim + e.index;
}
function Y_(e) {
	var t = [], n = e.axis, r = "axis0";
	if (n.type === "category") {
		for (var i = n.getBandWidth(), a = 0; a < e.count; a++) t.push(P({
			bandWidth: i,
			axisKey: r,
			stackId: K_ + a
		}, e));
		for (var o = $_(t), s = [], a = 0; a < e.count; a++) {
			var c = o[r][K_ + a];
			c.offsetCenter = c.offset + c.width / 2, s.push(c);
		}
		return s;
	}
}
function X_(e, t) {
	var n = [];
	return t.eachSeriesByType(e, function(e) {
		rv(e) && n.push(e);
	}), n;
}
function Z_(e) {
	var t = {};
	I(e, function(e) {
		var n = e.coordinateSystem.getBaseAxis();
		if (n.type === "time" || n.type === "value") for (var r = e.getData(), i = n.dim + "_" + n.index, a = r.getDimensionIndex(r.mapDimension(n.dim)), o = r.getStore(), s = 0, c = o.count(); s < c; ++s) {
			var l = o.get(a, s);
			t[i] ? t[i].push(l) : t[i] = [l];
		}
	});
	var n = {};
	for (var r in t) if (t.hasOwnProperty(r)) {
		var i = t[r];
		if (i) {
			i.sort(function(e, t) {
				return e - t;
			});
			for (var a = null, o = 1; o < i.length; ++o) {
				var s = i[o] - i[o - 1];
				s > 0 && (a = a === null ? s : Math.min(a, s));
			}
			n[r] = a;
		}
	}
	return n;
}
function Q_(e) {
	var t = Z_(e), n = [];
	return I(e, function(e) {
		var r = e.coordinateSystem.getBaseAxis(), i = r.getExtent(), a;
		if (r.type === "category") a = r.getBandWidth();
		else if (r.type === "value" || r.type === "time") {
			var o = t[r.dim + "_" + r.index], s = Math.abs(i[1] - i[0]), c = r.scale.getExtent(), l = Math.abs(c[1] - c[0]);
			a = o ? s / l * o : s;
		} else {
			var u = e.getData();
			a = Math.abs(i[1] - i[0]) / u.count();
		}
		var d = Go(e.get("barWidth"), a), f = Go(e.get("barMaxWidth"), a), p = Go(e.get("barMinWidth") || (iv(e) ? .5 : 1), a), m = e.get("barGap"), h = e.get("barCategoryGap");
		n.push({
			bandWidth: a,
			barWidth: d,
			barMaxWidth: f,
			barMinWidth: p,
			barGap: m,
			barCategoryGap: h,
			axisKey: J_(r),
			stackId: q_(e)
		});
	}), $_(n);
}
function $_(e) {
	var t = {};
	I(e, function(e, n) {
		var r = e.axisKey, i = e.bandWidth, a = t[r] || {
			bandWidth: i,
			remainedWidth: i,
			autoWidthCount: 0,
			categoryGap: null,
			gap: "20%",
			stacks: {}
		}, o = a.stacks;
		t[r] = a;
		var s = e.stackId;
		o[s] || a.autoWidthCount++, o[s] = o[s] || {
			width: 0,
			maxWidth: 0
		};
		var c = e.barWidth;
		c && !o[s].width && (o[s].width = c, c = Math.min(a.remainedWidth, c), a.remainedWidth -= c);
		var l = e.barMaxWidth;
		l && (o[s].maxWidth = l);
		var u = e.barMinWidth;
		u && (o[s].minWidth = u);
		var d = e.barGap;
		d != null && (a.gap = d);
		var f = e.barCategoryGap;
		f != null && (a.categoryGap = f);
	});
	var n = {};
	return I(t, function(e, t) {
		n[t] = {};
		var r = e.stacks, i = e.bandWidth, a = e.categoryGap;
		if (a == null) {
			var o = B(r).length;
			a = Math.max(35 - o * 4, 15) + "%";
		}
		var s = Go(a, i), c = Go(e.gap, 1), l = e.remainedWidth, u = e.autoWidthCount, d = (l - s) / (u + (u - 1) * c);
		d = Math.max(d, 0), I(r, function(e) {
			var t = e.maxWidth, n = e.minWidth;
			if (e.width) {
				var r = e.width;
				t && (r = Math.min(r, t)), n && (r = Math.max(r, n)), e.width = r, l -= r + c * r, u--;
			} else {
				var r = d;
				t && t < r && (r = Math.min(t, l)), n && n > r && (r = n), r !== d && (e.width = r, l -= r + c * r, u--);
			}
		}), d = (l - s) / (u + (u - 1) * c), d = Math.max(d, 0);
		var f = 0, p;
		I(r, function(e, t) {
			e.width ||= d, p = e, f += e.width * (1 + c);
		}), p && (f -= p.width * c);
		var m = -f / 2;
		I(r, function(e, r) {
			n[t][r] = n[t][r] || {
				bandWidth: i,
				offset: m,
				width: e.width
			}, m += e.width * (1 + c);
		});
	}), n;
}
function ev(e, t, n) {
	if (e && t) {
		var r = e[J_(t)];
		return r != null && n != null ? r[q_(n)] : r;
	}
}
function tv(e, t) {
	var n = X_(e, t), r = Q_(n);
	I(n, function(e) {
		var t = e.getData(), n = e.coordinateSystem.getBaseAxis(), i = q_(e), a = r[J_(n)][i], o = a.offset, s = a.width;
		t.setLayout({
			bandWidth: a.bandWidth,
			offset: o,
			size: s
		});
	});
}
function nv(e) {
	return {
		seriesType: e,
		plan: u_(),
		reset: function(e) {
			if (rv(e)) {
				var t = e.getData(), n = e.coordinateSystem, r = n.getBaseAxis(), i = n.getOtherAxis(r), a = t.getDimensionIndex(t.mapDimension(i.dim)), o = t.getDimensionIndex(t.mapDimension(r.dim)), s = e.get("showBackground", !0), c = t.mapDimension(i.dim), l = t.getCalculationInfo("stackResultDimension"), u = Lp(t, c) && !!t.getCalculationInfo("stackedOnSeries"), d = i.isHorizontal(), f = av(r, i), p = iv(e), m = e.get("barMinHeight") || 0, h = l && t.getDimensionIndex(l), g = t.getLayout("size"), _ = t.getLayout("offset");
				return { progress: function(e, t) {
					for (var r = e.count, i = p && $g(r * 3), c = p && s && $g(r * 3), l = p && $g(r), v = n.master.getRect(), y = d ? v.width : v.height, b, x = t.getStore(), S = 0; (b = e.next()) != null;) {
						var C = x.get(u ? h : a, b), w = x.get(o, b), T = f, E = void 0;
						u && (E = +C - x.get(a, b));
						var D = void 0, O = void 0, k = void 0, A = void 0;
						if (d) {
							var ee = n.dataToPoint([C, w]);
							if (u) {
								var j = n.dataToPoint([E, w]);
								T = j[0];
							}
							D = T, O = ee[1] + _, k = ee[0] - T, A = g, Math.abs(k) < m && (k = (k < 0 ? -1 : 1) * m);
						} else {
							var ee = n.dataToPoint([w, C]);
							if (u) {
								var j = n.dataToPoint([w, E]);
								T = j[1];
							}
							D = ee[0] + _, O = T, k = g, A = ee[1] - T, Math.abs(A) < m && (A = (A <= 0 ? -1 : 1) * m);
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
function rv(e) {
	return e.coordinateSystem && e.coordinateSystem.type === "cartesian2d";
}
function iv(e) {
	return e.pipelineContext && e.pipelineContext.large;
}
function av(e, t) {
	var n = t.model.get("startValue");
	return n ||= 0, t.toGlobalCoord(t.dataToCoord(t.type === "log" ? n > 0 ? n : 1 : n));
}
//#endregion
//#region node_modules/echarts/lib/chart/bar/BaseBarSeries.js
var ov = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.getInitialData = function(e, t) {
		return Vp(null, this, { useEncodeDefaulter: !0 });
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
	}, t.type = "series.__base_bar__", t.defaultOption = {
		z: 2,
		coordinateSystem: "cartesian2d",
		legendHoverLink: !0,
		barMinHeight: 0,
		barMinAngle: 0,
		large: !1,
		largeThreshold: 400,
		progressive: 3e3,
		progressiveChunkMode: "mod"
	}, t;
}(xg);
xg.registerClass(ov);
//#endregion
//#region node_modules/echarts/lib/chart/bar/BarSeries.js
var sv = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.getInitialData = function() {
		return Vp(null, this, {
			useEncodeDefaulter: !0,
			createInvertedIndices: !!this.get("realtimeSort", !0) || null
		});
	}, t.prototype.getProgressive = function() {
		return this.get("large") ? this.get("progressive") : !1;
	}, t.prototype.getProgressiveThreshold = function() {
		var e = this.get("progressiveThreshold"), t = this.get("largeThreshold");
		return t > e && (e = t), e;
	}, t.prototype.brushSelector = function(e, t, n) {
		return n.rect(t.getItemLayout(e));
	}, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = Jp(ov.defaultOption, {
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
		select: { itemStyle: { borderColor: "#212121" } },
		realtimeSort: !1
	}), t;
}(ov), cv = "\0__throttleOriginMethod", lv = "\0__throttleRate", uv = "\0__throttleType";
function dv(e, t, n) {
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
function fv(e, t, n, r) {
	var i = e[t];
	if (i) {
		var a = i[cv] || i, o = i[uv];
		if (i[lv] !== n || o !== r) {
			if (n == null || !r) return e[t] = a;
			i = e[t] = dv(a, n, r === "debounce"), i[cv] = a, i[uv] = r, i[lv] = n;
		}
		return i;
	}
}
function pv(e, t) {
	var n = e[t];
	n && n[cv] && (n.clear && n.clear(), e[t] = n[cv]);
}
//#endregion
//#region node_modules/echarts/lib/util/shape/sausage.js
var mv = function() {
	function e() {
		this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
	}
	return e;
}(), hv = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "sausage", n;
	}
	return t.prototype.getDefaultShape = function() {
		return new mv();
	}, t.prototype.buildPath = function(e, t) {
		var n = t.cx, r = t.cy, i = Math.max(t.r0 || 0, 0), a = Math.max(t.r, 0), o = (a - i) * .5, s = i + o, c = t.startAngle, l = t.endAngle, u = t.clockwise, d = Math.PI * 2, f = u ? l - c < d : c - l < d;
		f || (c = l - (u ? d : -d));
		var p = Math.cos(c), m = Math.sin(c), h = Math.cos(l), g = Math.sin(l);
		f ? (e.moveTo(p * i + n, m * i + r), e.arc(p * s + n, m * s + r, o, -Math.PI + c, c, !u)) : e.moveTo(p * a + n, m * a + r), e.arc(n, r, a, c, l, !u), e.arc(h * s + n, g * s + r, o, l - Math.PI * 2, l - Math.PI, !u), i !== 0 && e.arc(n, r, i, l, c, u);
	}, t;
}(co);
//#endregion
//#region node_modules/echarts/lib/label/sectorLabel.js
function gv(e, t) {
	t ||= {};
	var n = t.isRoundCap;
	return function(t, r, i) {
		var a = r.position;
		if (!a || a instanceof Array) return Ft(t, r, i);
		var o = e(a), s = r.distance == null ? 5 : r.distance, c = this.shape, l = c.cx, u = c.cy, d = c.r, f = c.r0, p = (d + f) / 2, m = c.startAngle, h = c.endAngle, g = (m + h) / 2, _ = n ? Math.abs(d - f) / 2 : 0, v = Math.cos, y = Math.sin, b = l + d * v(m), x = u + d * y(m), S = "left", C = "top";
		switch (o) {
			case "startArc":
				b = l + (f - s) * v(g), x = u + (f - s) * y(g), S = "center", C = "top";
				break;
			case "insideStartArc":
				b = l + (f + s) * v(g), x = u + (f + s) * y(g), S = "center", C = "bottom";
				break;
			case "startAngle":
				b = l + p * v(m) + vv(m, s + _, !1), x = u + p * y(m) + yv(m, s + _, !1), S = "right", C = "middle";
				break;
			case "insideStartAngle":
				b = l + p * v(m) + vv(m, -s + _, !1), x = u + p * y(m) + yv(m, -s + _, !1), S = "left", C = "middle";
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
				b = l + p * v(h) + vv(h, s + _, !0), x = u + p * y(h) + yv(h, s + _, !0), S = "left", C = "middle";
				break;
			case "insideEndAngle":
				b = l + p * v(h) + vv(h, -s + _, !0), x = u + p * y(h) + yv(h, -s + _, !0), S = "right", C = "middle";
				break;
			default: return Ft(t, r, i);
		}
		return t ||= {}, t.x = b, t.y = x, t.align = S, t.verticalAlign = C, t;
	};
}
function _v(e, t, n, r) {
	if (ue(r)) e.setTextConfig({ rotation: r });
	else if (H(t)) e.setTextConfig({ rotation: 0 });
	else {
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
}
function vv(e, t, n) {
	return t * Math.sin(e) * (n ? -1 : 1);
}
function yv(e, t, n) {
	return t * Math.cos(e) * (n ? 1 : -1);
}
//#endregion
//#region node_modules/echarts/lib/chart/helper/sectorHelper.js
function bv(e, t, n) {
	var r = e.get("borderRadius");
	if (r == null) return n ? { cornerRadius: 0 } : null;
	H(r) || (r = [
		r,
		r,
		r,
		r
	]);
	var i = Math.abs(t.r || 0 - t.r0 || 0);
	return { cornerRadius: L(r, function(e) {
		return Pt(e, i);
	}) };
}
//#endregion
//#region node_modules/echarts/lib/chart/bar/BarView.js
var xv = Math.max, Sv = Math.min;
function Cv(e, t) {
	var n = e.getArea && e.getArea();
	if (S_(e, "cartesian2d")) {
		var r = e.getBaseAxis();
		if (r.type !== "category" || !r.onBand) {
			var i = t.getLayout("bandWidth");
			r.isHorizontal() ? (n.x -= i, n.width += i * 2) : (n.y -= i, n.height += i * 2);
		}
	}
	return n;
}
var wv = function(e) {
	c(t, e);
	function t() {
		var n = e.call(this) || this;
		return n.type = t.type, n._isFirstFrame = !0, n;
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
		dd(this._progressiveEls || this.group, e);
	}, t.prototype._updateDrawMode = function(e) {
		var t = e.pipelineContext.large;
		(this._isLargeDraw == null || t !== this._isLargeDraw) && (this._isLargeDraw = t, this._clear());
	}, t.prototype._renderNormal = function(e, t, n, r) {
		var i = this.group, a = e.getData(), o = this._data, s = e.coordinateSystem, c = s.getBaseAxis(), l;
		s.type === "cartesian2d" ? l = c.isHorizontal() : s.type === "polar" && (l = c.dim === "angle");
		var u = e.isAnimationEnabled() ? e : null, d = Dv(e, s);
		d && this._enableRealtimeSort(d, a, n);
		var f = e.get("clip", !0) || d, p = Cv(s, a);
		i.removeClipPath();
		var m = e.get("roundCap", !0), h = e.get("showBackground", !0), g = e.getModel("backgroundStyle"), _ = g.get("borderRadius") || 0, v = [], y = this._backgroundEls, b = r && r.isInitSort, x = r && r.type === "changeAxisOrder";
		function S(e) {
			var t = Nv[s.type](a, e), n = Wv(s, l, t);
			return n.useStyle(g.getItemStyle()), s.type === "cartesian2d" ? n.setShape("r", _) : n.setShape("cornerRadius", _), v[e] = n, n;
		}
		a.diff(o).add(function(t) {
			var n = a.getItemModel(t), r = Nv[s.type](a, t, n);
			if (h && S(t), a.hasValue(t) && Mv[s.type](r)) {
				var o = !1;
				f && (o = Tv[s.type](p, r));
				var g = Ev[s.type](e, a, t, r, l, u, c.model, !1, m);
				d && (g.forceLabelAnimation = !0), Iv(g, a, t, n, r, e, l, s.type === "polar"), b ? g.attr({ shape: r }) : d ? Ov(d, u, g, r, t, l, !1, !1) : Du(g, { shape: r }, e, t), a.setItemGraphicEl(t, g), i.add(g), g.ignore = o;
			}
		}).update(function(t, n) {
			var r = a.getItemModel(t), C = Nv[s.type](a, t, r);
			if (h) {
				var w = void 0;
				y.length === 0 ? w = S(n) : (w = y[n], w.useStyle(g.getItemStyle()), s.type === "cartesian2d" ? w.setShape("r", _) : w.setShape("cornerRadius", _), v[t] = w);
				var T = Nv[s.type](a, t), E = Uv(l, T, s);
				Eu(w, { shape: E }, u, t);
			}
			var D = o.getItemGraphicEl(n);
			if (!a.hasValue(t) || !Mv[s.type](C)) i.remove(D);
			else {
				var O = !1;
				if (f && (O = Tv[s.type](p, C), O && i.remove(D)), D ? Mu(D) : D = Ev[s.type](e, a, t, C, l, u, c.model, !!D, m), d && (D.forceLabelAnimation = !0), x) {
					var k = D.getTextContent();
					if (k) {
						var A = Ed(k);
						A.prevValue != null && (A.prevValue = A.value);
					}
				} else Iv(D, a, t, r, C, e, l, s.type === "polar");
				b ? D.attr({ shape: C }) : d ? Ov(d, u, D, C, t, l, !0, x) : Eu(D, { shape: C }, e, t, null), a.setItemGraphicEl(t, D), D.ignore = O, i.add(D);
			}
		}).remove(function(t) {
			var n = o.getItemGraphicEl(t);
			n && ju(n, e, t);
		}).execute();
		var C = this._backgroundGroup ||= new Dl();
		C.removeAll();
		for (var w = 0; w < v.length; ++w) C.add(v[w]);
		i.add(C), this._backgroundEls = v, this._data = a;
	}, t.prototype._renderLarge = function(e, t, n) {
		this._clear(), Bv(e, this.group), this._updateLargeClip(e);
	}, t.prototype._incrementalRenderLarge = function(e, t) {
		this._removeBackground(), Bv(t, this.group, this._progressiveEls, !0);
	}, t.prototype._updateLargeClip = function(e) {
		var t = e.get("clip", !0) && x_(e.coordinateSystem, !1, e), n = this.group;
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
			ju(t, e, Q(t).dataIndex);
		})) : t.removeAll(), this._data = null, this._isFirstFrame = !0;
	}, t.prototype._removeBackground = function() {
		this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
	}, t.type = "bar", t;
}(p_), Tv = {
	cartesian2d: function(e, t) {
		var n = t.width < 0 ? -1 : 1, r = t.height < 0 ? -1 : 1;
		n < 0 && (t.x += t.width, t.width = -t.width), r < 0 && (t.y += t.height, t.height = -t.height);
		var i = e.x + e.width, a = e.y + e.height, o = xv(t.x, e.x), s = Sv(t.x + t.width, i), c = xv(t.y, e.y), l = Sv(t.y + t.height, a), u = s < o, d = l < c;
		return t.x = u && o > i ? s : o, t.y = d && c > a ? l : c, t.width = u ? 0 : s - o, t.height = d ? 0 : l - c, n < 0 && (t.x += t.width, t.width = -t.width), r < 0 && (t.y += t.height, t.height = -t.height), u || d;
	},
	polar: function(e, t) {
		var n = t.r0 <= t.r ? 1 : -1;
		if (n < 0) {
			var r = t.r;
			t.r = t.r0, t.r0 = r;
		}
		var i = Sv(t.r, e.r), a = xv(t.r0, e.r0);
		t.r = i, t.r0 = a;
		var o = i - a < 0;
		if (n < 0) {
			var r = t.r;
			t.r = t.r0, t.r0 = r;
		}
		return o;
	}
}, Ev = {
	cartesian2d: function(e, t, n, r, i, a, o, s, c) {
		var l = new Co({
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
		var l = !i && c ? hv : Jl, u = new l({
			shape: r,
			z2: 1
		});
		if (u.name = "item", u.calculateTextPosition = gv(Fv(i), { isRoundCap: l === hv }), a) {
			var d = u.shape, f = i ? "r" : "endAngle", p = {};
			d[f] = i ? r.r0 : r.startAngle, p[f] = r[f], (s ? Eu : Du)(u, { shape: p }, a);
		}
		return u;
	}
};
function Dv(e, t) {
	var n = e.get("realtimeSort", !0), r = t.getBaseAxis();
	if (n && r.type === "category" && t.type === "cartesian2d") return {
		baseAxis: r,
		otherAxis: t.getOtherAxis(r)
	};
}
function Ov(e, t, n, r, i, a, o, s) {
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
	}), s || (o ? Eu : Du)(n, { shape: c }, t, i, null);
	var u = t ? e.baseAxis.model : null;
	(o ? Eu : Du)(n, { shape: l }, u, i);
}
function kv(e, t) {
	for (var n = 0; n < t.length; n++) if (!isFinite(e[t[n]])) return !0;
	return !1;
}
var Av = [
	"x",
	"y",
	"width",
	"height"
], jv = [
	"cx",
	"cy",
	"r",
	"startAngle",
	"endAngle"
], Mv = {
	cartesian2d: function(e) {
		return !kv(e, Av);
	},
	polar: function(e) {
		return !kv(e, jv);
	}
}, Nv = {
	cartesian2d: function(e, t, n) {
		var r = e.getItemLayout(t), i = n ? Lv(n, r) : 0, a = r.width > 0 ? 1 : -1, o = r.height > 0 ? 1 : -1;
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
function Pv(e) {
	return e.startAngle != null && e.endAngle != null && e.startAngle === e.endAngle;
}
function Fv(e) {
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
function Iv(e, t, n, r, i, a, o, s) {
	var c = t.getItemVisual(n, "style");
	if (!s) {
		var l = r.get(["itemStyle", "borderRadius"]) || 0;
		e.setShape("r", l);
	} else if (!a.get("roundCap")) {
		var u = e.shape;
		N(u, bv(r.getModel("itemStyle"), u, !0)), e.setShape(u);
	}
	e.useStyle(c);
	var d = r.getShallow("cursor");
	d && e.attr("cursor", d);
	var f = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? i.height >= 0 ? "bottom" : "top" : i.width >= 0 ? "right" : "left", p = gd(r);
	hd(e, p, {
		labelFetcher: a,
		labelDataIndex: n,
		defaultText: Bg(a.getData(), n),
		inheritColor: c.fill,
		defaultOpacity: c.opacity,
		defaultOutsidePosition: f
	});
	var m = e.getTextContent();
	if (s && m) {
		var h = r.get(["label", "position"]);
		e.textConfig.inside = h === "middle" || null, _v(e, h === "outside" ? f : h, Fv(o), r.get(["label", "rotate"]));
	}
	Dd(m, p, a.getRawValue(n), function(e) {
		return Vg(t, e);
	});
	var g = r.getModel(["emphasis"]);
	qc(e, g.get("focus"), g.get("blurScope"), g.get("disabled")), Zc(e, r), Pv(i) && (e.style.fill = "none", e.style.stroke = "none", I(e.states, function(e) {
		e.style && (e.style.fill = e.style.stroke = "none");
	}));
}
function Lv(e, t) {
	var n = e.get(["itemStyle", "borderColor"]);
	if (!n || n === "none") return 0;
	var r = e.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
	return Math.min(r, i, a);
}
var Rv = function() {
	function e() {}
	return e;
}(), zv = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "largeBar", n;
	}
	return t.prototype.getDefaultShape = function() {
		return new Rv();
	}, t.prototype.buildPath = function(e, t) {
		for (var n = t.points, r = this.baseDimIdx, i = 1 - this.baseDimIdx, a = [], o = [], s = this.barWidth, c = 0; c < n.length; c += 3) o[r] = s, o[i] = n[c + 2], a[r] = n[c + r], a[i] = n[c + i], e.rect(a[0], a[1], o[0], o[1]);
	}, t;
}(co);
function Bv(e, t, n, r) {
	var i = e.getData(), a = +!!i.getLayout("valueAxisHorizontal"), o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), c = e.getModel("backgroundStyle"), l = i.getLayout("largeBackgroundPoints");
	if (l) {
		var u = new zv({
			shape: { points: l },
			incremental: !!r,
			silent: !0,
			z2: 0
		});
		u.baseDimIdx = a, u.largeDataIndices = o, u.barWidth = s, u.useStyle(c.getItemStyle()), t.add(u), n && n.push(u);
	}
	var d = new zv({
		shape: { points: i.getLayout("largePoints") },
		incremental: !!r,
		ignoreCoarsePointer: !0,
		z2: 1
	});
	d.baseDimIdx = a, d.largeDataIndices = o, d.barWidth = s, t.add(d), d.useStyle(i.getVisual("style")), d.style.stroke = null, Q(d).seriesIndex = e.seriesIndex, e.get("silent") || (d.on("mousedown", Vv), d.on("mousemove", Vv)), n && n.push(d);
}
var Vv = dv(function(e) {
	var t = this, n = Hv(t, e.offsetX, e.offsetY);
	Q(t).dataIndex = n >= 0 ? n : null;
}, 30, !1);
function Hv(e, t, n) {
	for (var r = e.baseDimIdx, i = 1 - r, a = e.shape.points, o = e.largeDataIndices, s = [], c = [], l = e.barWidth, u = 0, d = a.length / 3; u < d; u++) {
		var f = u * 3;
		if (c[r] = l, c[i] = a[f + 2], s[r] = a[f + r], s[i] = a[f + i], c[i] < 0 && (s[i] += c[i], c[i] = -c[i]), t >= s[0] && t <= s[0] + c[0] && n >= s[1] && n <= s[1] + c[1]) return o[u];
	}
	return -1;
}
function Uv(e, t, n) {
	if (S_(n, "cartesian2d")) {
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
function Wv(e, t, n) {
	return new (e.type === "polar" ? Jl : Co)({
		shape: Uv(t, n, e),
		silent: !0,
		z2: 0
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/bar/install.js
function Gv(e) {
	e.registerChartView(wv), e.registerSeriesModel(sv), e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, ce(tv, "bar")), e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, nv("bar")), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, W_("bar")), e.registerAction({
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
	});
}
//#endregion
//#region node_modules/echarts/lib/legacy/dataSelectAction.js
function Kv(e, t) {
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
function qv(e, t, n, r, i) {
	var a = e + t;
	n.isSilent(a) || r.eachComponent({
		mainType: "series",
		subType: "pie"
	}, function(e) {
		for (var t = e.seriesIndex, r = e.option.selectedMap, o = i.selected, s = 0; s < o.length; s++) if (o[s].seriesIndex === t) {
			var c = e.getData(), l = zs(c, i.fromActionPayload);
			n.trigger(a, {
				type: a,
				seriesId: e.id,
				name: H(l) ? c.getName(l[0]) : c.getName(l),
				selected: W(r) ? r : N({}, r)
			});
		}
	});
}
function Jv(e, t, n) {
	e.on("selectchanged", function(e) {
		var r = n.getModel();
		e.isFromClick ? (qv("map", "selectchanged", t, r, e), qv("pie", "selectchanged", t, r, e)) : e.fromAction === "select" ? (qv("map", "selected", t, r, e), qv("pie", "selected", t, r, e)) : e.fromAction === "unselect" && (qv("map", "unselected", t, r, e), qv("pie", "unselected", t, r, e));
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/pieLayout.js
var Yv = Math.PI * 2, Xv = Math.PI / 180;
function Zv(e, t) {
	return gh(e.getBoxLayoutParams(), {
		width: t.getWidth(),
		height: t.getHeight()
	});
}
function Qv(e, t) {
	var n = Zv(e, t), r = e.get("center"), i = e.get("radius");
	H(i) || (i = [0, i]);
	var a = Go(n.width, t.getWidth()), o = Go(n.height, t.getHeight()), s = Math.min(a, o), c = Go(i[0], s / 2), l = Go(i[1], s / 2), u, d, f = e.coordinateSystem;
	if (f) {
		var p = f.dataToPoint(r);
		u = p[0] || 0, d = p[1] || 0;
	} else H(r) || (r = [r, r]), u = Go(r[0], a) + n.x, d = Go(r[1], o) + n.y;
	return {
		cx: u,
		cy: d,
		r0: c,
		r: l
	};
}
function $v(e, t, n) {
	t.eachSeriesByType(e, function(e) {
		var t = e.getData(), r = t.mapDimension("value"), i = Zv(e, n), a = Qv(e, n), o = a.cx, s = a.cy, c = a.r, l = a.r0, u = -e.get("startAngle") * Xv, d = e.get("endAngle"), f = e.get("padAngle") * Xv;
		d = d === "auto" ? u - Yv : -d * Xv;
		var p = e.get("minAngle") * Xv + f, m = 0;
		t.each(r, function(e) {
			!isNaN(e) && m++;
		});
		var h = t.getSum(r), g = Math.PI / (h || m) * 2, _ = e.get("clockwise"), v = e.get("roseType"), y = e.get("stillShowZeroSum"), b = t.getDataExtent(r);
		b[0] = 0;
		var x = _ ? 1 : -1, S = [u, d], C = x * f / 2;
		Ia(S, !_), u = S[0], d = S[1];
		var w = ey(e);
		w.startAngle = u, w.endAngle = d, w.clockwise = _;
		var T = Math.abs(d - u), E = T, D = 0, O = u;
		if (t.setLayout({
			viewRect: i,
			r: c
		}), t.each(r, function(e, n) {
			var r;
			if (isNaN(e)) t.setItemLayout(n, {
				angle: NaN,
				startAngle: NaN,
				endAngle: NaN,
				clockwise: _,
				cx: o,
				cy: s,
				r0: l,
				r: v ? NaN : c
			});
			else {
				r = v === "area" ? T / m : h === 0 && y ? g : e * g, r < p ? (r = p, E -= p) : D += e;
				var i = O + x * r, a = 0, u = 0;
				f > r ? (a = O + x * r / 2, u = a) : (a = O + C, u = i - C), t.setItemLayout(n, {
					angle: r,
					startAngle: a,
					endAngle: u,
					clockwise: _,
					cx: o,
					cy: s,
					r0: l,
					r: v ? Wo(e, b, [l, c]) : c
				}), O = i;
			}
		}), E < Yv && m) {
			if (E <= .001) {
				var k = T / m;
				t.each(r, function(e, n) {
					if (!isNaN(e)) {
						var r = t.getItemLayout(n);
						r.angle = k;
						var i = 0, a = 0;
						k < f ? (i = u + x * (n + 1 / 2) * k, a = i) : (i = u + x * n * k + C, a = u + x * (n + 1) * k - C), r.startAngle = i, r.endAngle = a;
					}
				});
			} else g = E / D, O = u, t.each(r, function(e, n) {
				if (!isNaN(e)) {
					var r = t.getItemLayout(n), i = r.angle === p ? p : e * g, a = 0, o = 0;
					i < f ? (a = O + x * i / 2, o = a) : (a = O + C, o = O + x * i - C), r.startAngle = a, r.endAngle = o, O += x * i;
				}
			});
		}
	});
}
var ey = Bs();
//#endregion
//#region node_modules/echarts/lib/processor/dataFilter.js
function ty(e) {
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
//#region node_modules/echarts/lib/label/labelGuideHelper.js
var ny = Math.PI * 2, ry = La.CMD, iy = [
	"top",
	"right",
	"bottom",
	"left"
];
function ay(e, t, n, r, i) {
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
function oy(e, t, n, r, i, a, o, s, c) {
	o -= e, s -= t;
	var l = Math.sqrt(o * o + s * s);
	o /= l, s /= l;
	var u = o * n + e, d = s * n + t;
	if (Math.abs(r - i) % ny < 1e-4) return c[0] = u, c[1] = d, l - n;
	if (a) {
		var f = r;
		r = Ha(i), i = Ha(f);
	} else r = Ha(r), i = Ha(i);
	r > i && (i += ny);
	var p = Math.atan2(s, o);
	if (p < 0 && (p += ny), p >= r && p <= i || p + ny >= r && p + ny <= i) return c[0] = u, c[1] = d, l - n;
	var m = n * Math.cos(r) + e, h = n * Math.sin(r) + t, g = n * Math.cos(i) + e, _ = n * Math.sin(i) + t, v = (m - o) * (m - o) + (h - s) * (h - s), y = (g - o) * (g - o) + (_ - s) * (_ - s);
	return v < y ? (c[0] = m, c[1] = h, Math.sqrt(v)) : (c[0] = g, c[1] = _, Math.sqrt(y));
}
function sy(e, t, n, r, i, a, o, s) {
	var c = i - e, l = a - t, u = n - e, d = r - t, f = Math.sqrt(u * u + d * d);
	u /= f, d /= f;
	var p = (c * u + l * d) / f;
	s && (p = Math.min(Math.max(p, 0), 1)), p *= f;
	var m = o[0] = e + p * u, h = o[1] = t + p * d;
	return Math.sqrt((m - i) * (m - i) + (h - a) * (h - a));
}
function cy(e, t, n, r, i, a, o) {
	n < 0 && (e += n, n = -n), r < 0 && (t += r, r = -r);
	var s = e + n, c = t + r, l = o[0] = Math.min(Math.max(i, e), s), u = o[1] = Math.min(Math.max(a, t), c);
	return Math.sqrt((l - i) * (l - i) + (u - a) * (u - a));
}
var ly = [];
function uy(e, t, n) {
	var r = cy(t.x, t.y, t.width, t.height, e.x, e.y, ly);
	return n.set(ly[0], ly[1]), r;
}
function dy(e, t, n) {
	for (var r = 0, i = 0, a = 0, o = 0, s, c, l = Infinity, u = t.data, d = e.x, f = e.y, p = 0; p < u.length;) {
		var m = u[p++];
		p === 1 && (r = u[p], i = u[p + 1], a = r, o = i);
		var h = l;
		switch (m) {
			case ry.M:
				a = u[p++], o = u[p++], r = a, i = o;
				break;
			case ry.L:
				h = sy(r, i, u[p], u[p + 1], d, f, ly, !0), r = u[p++], i = u[p++];
				break;
			case ry.C:
				h = Qn(r, i, u[p++], u[p++], u[p++], u[p++], u[p], u[p + 1], d, f, ly), r = u[p++], i = u[p++];
				break;
			case ry.Q:
				h = ar(r, i, u[p++], u[p++], u[p], u[p + 1], d, f, ly), r = u[p++], i = u[p++];
				break;
			case ry.A:
				var g = u[p++], _ = u[p++], v = u[p++], y = u[p++], b = u[p++], x = u[p++];
				p += 1;
				var S = !!(1 - u[p++]);
				s = Math.cos(b) * v + g, c = Math.sin(b) * y + _, p <= 1 && (a = s, o = c);
				var C = (d - g) * y / v + g;
				h = oy(g, _, y, b, b + x, S, C, f, ly), r = Math.cos(b + x) * v + g, i = Math.sin(b + x) * y + _;
				break;
			case ry.R:
				a = r = u[p++], o = i = u[p++];
				var w = u[p++], T = u[p++];
				h = cy(a, o, w, T, d, f, ly);
				break;
			case ry.Z: h = sy(r, i, a, o, d, f, ly, !0), r = a, i = o;
		}
		h < l && (l = h, n.set(ly[0], ly[1]));
	}
	return l;
}
var fy = new X(), py = new X(), my = new X(), hy = new X(), gy = new X();
function _y(e, t) {
	if (e) {
		var n = e.getTextGuideLine(), r = e.getTextContent();
		if (r && n) {
			var i = e.textGuideLineConfig || {}, a = [
				[0, 0],
				[0, 0],
				[0, 0]
			], o = i.candidates || iy, s = r.getBoundingRect().clone();
			s.applyTransform(r.getComputedTransform());
			var c = Infinity, l = i.anchor, u = e.getComputedTransform(), d = u && _t([], u), f = t.get("length2") || 0;
			l && my.copy(l);
			for (var p = 0; p < o.length; p++) {
				var m = o[p];
				ay(m, 0, s, fy, hy), X.scaleAndAdd(py, fy, hy, f), py.transform(d);
				var h = e.getBoundingRect(), g = l ? l.distance(py) : e instanceof co ? dy(py, e.path, my) : uy(py, h, my);
				g < c && (c = g, py.transform(u), my.transform(u), my.toArray(a[0]), py.toArray(a[1]), fy.toArray(a[2]));
			}
			by(a, t.get("minTurnAngle")), n.setShape({ points: a });
		}
	}
}
var vy = [], yy = new X();
function by(e, t) {
	if (t <= 180 && t > 0) {
		t = t / 180 * Math.PI, fy.fromArray(e[0]), py.fromArray(e[1]), my.fromArray(e[2]), X.sub(hy, fy, py), X.sub(gy, my, py);
		var n = hy.len(), r = gy.len();
		if (!(n < .001 || r < .001)) {
			hy.scale(1 / n), gy.scale(1 / r);
			var i = hy.dot(gy);
			if (Math.cos(t) < i) {
				var a = sy(py.x, py.y, my.x, my.y, fy.x, fy.y, vy, !1);
				yy.fromArray(vy), yy.scaleAndAdd(gy, a / Math.tan(Math.PI - t));
				var o = my.x === py.x ? (yy.y - py.y) / (my.y - py.y) : (yy.x - py.x) / (my.x - py.x);
				if (isNaN(o)) return;
				o < 0 ? X.copy(yy, py) : o > 1 && X.copy(yy, my), yy.toArray(e[1]);
			}
		}
	}
}
function xy(e, t, n) {
	if (n <= 180 && n > 0) {
		n = n / 180 * Math.PI, fy.fromArray(e[0]), py.fromArray(e[1]), my.fromArray(e[2]), X.sub(hy, py, fy), X.sub(gy, my, py);
		var r = hy.len(), i = gy.len();
		if (!(r < .001 || i < .001) && (hy.scale(1 / r), gy.scale(1 / i), hy.dot(t) < Math.cos(n))) {
			var a = sy(py.x, py.y, my.x, my.y, fy.x, fy.y, vy, !1);
			yy.fromArray(vy);
			var o = Math.PI / 2, s = o + Math.acos(gy.dot(t)) - n;
			if (s >= o) X.copy(yy, my);
			else {
				yy.scaleAndAdd(gy, a / Math.tan(Math.PI / 2 - s));
				var c = my.x === py.x ? (yy.y - py.y) / (my.y - py.y) : (yy.x - py.x) / (my.x - py.x);
				if (isNaN(c)) return;
				c < 0 ? X.copy(yy, py) : c > 1 && X.copy(yy, my);
			}
			yy.toArray(e[1]);
		}
	}
}
function Sy(e, t, n, r) {
	var i = n === "normal", a = i ? e : e.ensureState(n);
	a.ignore = t;
	var o = r.get("smooth");
	o && o === !0 && (o = .3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
	var s = r.getModel("lineStyle").getLineStyle();
	i ? e.useStyle(s) : a.style = s;
}
function Cy(e, t) {
	var n = t.smooth, r = t.points;
	if (r) {
		if (e.moveTo(r[0][0], r[0][1]), n > 0 && r.length >= 3) {
			var i = _n(r[0], r[1]), a = _n(r[1], r[2]);
			if (!i || !a) {
				e.lineTo(r[1][0], r[1][1]), e.lineTo(r[2][0], r[2][1]);
				return;
			}
			var o = Math.min(i, a) * n, s = xn([], r[1], r[0], o / i), c = xn([], r[1], r[2], o / a), l = xn([], s, c, .5);
			e.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), e.bezierCurveTo(c[0], c[1], c[0], c[1], r[2][0], r[2][1]);
		} else for (var u = 1; u < r.length; u++) e.lineTo(r[u][0], r[u][1]);
	}
}
function wy(e, t, n) {
	var r = e.getTextGuideLine(), i = e.getTextContent();
	if (!i) r && e.removeTextGuideLine();
	else {
		for (var a = t.normal, o = a.get("show"), s = i.ignore, c = 0; c < rc.length; c++) {
			var l = rc[c], u = t[l], d = l === "normal";
			if (u) {
				var f = u.get("show");
				if ((d ? s : K(i.states[l] && i.states[l].ignore, s)) || !K(f, o)) {
					var p = d ? r : r && r.states[l];
					p && (p.ignore = !0), r && Sy(r, !0, l, u);
					continue;
				}
				r || (r = new nu(), e.setTextGuideLine(r), !d && (s || !o) && Sy(r, !0, "normal", t.normal), e.stateProxy && (r.stateProxy = e.stateProxy)), Sy(r, !1, l, u);
			}
		}
		if (r) {
			P(r.style, n), r.style.fill = null;
			var m = a.get("showAbove"), h = e.textGuideLineConfig = e.textGuideLineConfig || {};
			h.showAbove = m || !1, r.buildPath = Cy;
		}
	}
}
function Ty(e, t) {
	t ||= "labelLine";
	for (var n = { normal: e.getModel(t) }, r = 0; r < nc.length; r++) {
		var i = nc[r];
		n[i] = e.getModel([i, t]);
	}
	return n;
}
//#endregion
//#region node_modules/echarts/lib/label/labelLayoutHelper.js
function Ey(e) {
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		if (!r.defaultAttr.ignore) {
			var i = r.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, c = i.style.margin || 0, l = o.clone();
			l.applyTransform(a), l.x -= c / 2, l.y -= c / 2, l.width += c, l.height += c;
			var u = s ? new bu(o, a) : null;
			t.push({
				label: i,
				labelLine: r.labelLine,
				rect: l,
				localRect: o,
				obb: u,
				priority: r.priority,
				defaultAttr: r.defaultAttr,
				layoutOption: r.computedLayoutOption,
				axisAligned: s,
				transform: a
			});
		}
	}
	return t;
}
function Dy(e, t, n, r, i, a) {
	var o = e.length;
	if (o < 2) return;
	e.sort(function(e, n) {
		return e.rect[t] - n.rect[t];
	});
	for (var s = 0, c, l = !1, u = [], d = 0, f = 0; f < o; f++) {
		var p = e[f], m = p.rect;
		c = m[t] - s, c < 0 && (m[t] -= c, p.label[t] -= c, l = !0);
		var h = Math.max(-c, 0);
		u.push(h), d += h, s = m[t] + m[n];
	}
	d > 0 && a && S(-d / o, 0, o);
	var g = e[0], _ = e[o - 1], v, y;
	b(), v < 0 && C(-v, .8), y < 0 && C(y, .8), b(), x(v, y, 1), x(y, v, -1), b(), v < 0 && w(-v), y < 0 && w(y);
	function b() {
		v = g.rect[t] - r, y = i - _.rect[t] - _.rect[n];
	}
	function x(e, t, n) {
		if (e < 0) {
			var r = Math.min(t, -e);
			if (r > 0) {
				S(r * n, 0, o);
				var i = r + e;
				i < 0 && C(-i * n, 1);
			} else C(-e * n, 1);
		}
	}
	function S(n, r, i) {
		n !== 0 && (l = !0);
		for (var a = r; a < i; a++) {
			var o = e[a], s = o.rect;
			s[t] += n, o.label[t] += n;
		}
	}
	function C(r, i) {
		for (var a = [], s = 0, c = 1; c < o; c++) {
			var l = e[c - 1].rect, u = Math.max(e[c].rect[t] - l[t] - l[n], 0);
			a.push(u), s += u;
		}
		if (s) {
			var d = Math.min(Math.abs(r) / s, i);
			if (r > 0) for (var c = 0; c < o - 1; c++) {
				var f = a[c] * d;
				S(f, 0, c + 1);
			}
			else for (var c = o - 1; c > 0; c--) {
				var f = a[c - 1] * d;
				S(-f, c, o);
			}
		}
	}
	function w(e) {
		var t = e < 0 ? -1 : 1;
		e = Math.abs(e);
		for (var n = Math.ceil(e / (o - 1)), r = 0; r < o - 1; r++) if (t > 0 ? S(n, 0, r + 1) : S(-n, o - r - 1, o), e -= n, e <= 0) return;
	}
	return l;
}
function Oy(e, t, n, r) {
	return Dy(e, "x", "width", t, n, r);
}
function ky(e, t, n, r) {
	return Dy(e, "y", "height", t, n, r);
}
function Ay(e) {
	var t = [];
	e.sort(function(e, t) {
		return t.priority - e.priority;
	});
	var n = new Z(0, 0, 0, 0);
	function r(e) {
		if (!e.ignore) {
			var t = e.ensureState("emphasis");
			t.ignore ??= !1;
		}
		e.ignore = !0;
	}
	for (var i = 0; i < e.length; i++) {
		var a = e[i], o = a.axisAligned, s = a.localRect, c = a.transform, l = a.label, u = a.labelLine;
		n.copy(a.rect), n.width -= .1, n.height -= .1, n.x += .05, n.y += .05;
		for (var d = a.obb, f = !1, p = 0; p < t.length; p++) {
			var m = t[p];
			if (n.intersect(m.rect) && (o && m.axisAligned || (m.obb ||= new bu(m.localRect, m.transform), d ||= new bu(s, c), d.intersect(m.obb)))) {
				f = !0;
				break;
			}
		}
		f ? (r(l), u && r(u)) : (l.attr("ignore", a.defaultAttr.ignore), u && u.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
	}
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/labelLayout.js
var jy = Math.PI / 180;
function My(e, t, n, r, i, a, o, s, c, l) {
	if (e.length < 2) return;
	function u(e) {
		for (var a = e.rB, o = a * a, s = 0; s < e.list.length; s++) {
			var c = e.list[s], l = Math.abs(c.label.y - n), u = r + c.len, d = u * u, f = t + (Math.sqrt(Math.abs((1 - l * l / o) * d)) + c.len2) * i, p = f - c.label.x;
			Py(c, c.targetTextWidth - p * i, !0), c.label.x = f;
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
	ky(e, c, c + o) && d(e);
}
function Ny(e, t, n, r, i, a, o, s) {
	for (var c = [], l = [], u = Number.MAX_VALUE, d = -Number.MAX_VALUE, f = 0; f < e.length; f++) {
		var p = e[f].label;
		Fy(e[f]) || (p.x < t ? (u = Math.min(u, p.x), c.push(e[f])) : (d = Math.max(d, p.x), l.push(e[f])));
	}
	for (var f = 0; f < e.length; f++) {
		var m = e[f];
		if (!Fy(m) && m.linePoints) {
			if (m.labelStyleWidth != null) continue;
			var p = m.label, h = m.linePoints, g = void 0;
			g = m.labelAlignTo === "edge" ? p.x < t ? h[2][0] - m.labelDistance - o - m.edgeDistance : o + i - m.edgeDistance - h[2][0] - m.labelDistance : m.labelAlignTo === "labelLine" ? p.x < t ? u - o - m.bleedMargin : o + i - d - m.bleedMargin : p.x < t ? p.x - o - m.bleedMargin : o + i - p.x - m.bleedMargin, m.targetTextWidth = g, Py(m, g);
		}
	}
	My(l, t, n, r, 1, i, a, o, s, d), My(c, t, n, r, -1, i, a, o, s, u);
	for (var f = 0; f < e.length; f++) {
		var m = e[f];
		if (!Fy(m) && m.linePoints) {
			var p = m.label, h = m.linePoints, _ = m.labelAlignTo === "edge", v = p.style.padding, y = v ? v[1] + v[3] : 0, b = p.style.backgroundColor ? 0 : y, x = m.rect.width + b, S = h[1][0] - h[2][0];
			_ ? p.x < t ? h[2][0] = o + m.edgeDistance + x + m.labelDistance : h[2][0] = o + i - m.edgeDistance - x - m.labelDistance : (p.x < t ? h[2][0] = p.x + m.labelDistance : h[2][0] = p.x - m.labelDistance, h[1][0] = h[2][0] + S), h[1][1] = h[2][1] = p.y;
		}
	}
}
function Py(e, t, n) {
	if (n === void 0 && (n = !1), e.labelStyleWidth == null) {
		var r = e.label, i = r.style, a = e.rect, o = i.backgroundColor, s = i.padding, c = s ? s[1] + s[3] : 0, l = i.overflow, u = a.width + (o ? 0 : c);
		if (t < u || n) {
			var d = a.height;
			if (l && l.match("break")) {
				r.setStyle("backgroundColor", null), r.setStyle("width", t - c);
				var f = r.getBoundingRect();
				r.setStyle("width", Math.ceil(f.width)), r.setStyle("backgroundColor", o);
			} else {
				var p = t - c, m = t < u ? p : n ? p > e.unconstrainedWidth ? null : p : null;
				r.setStyle("width", m);
			}
			var h = r.getBoundingRect();
			a.width = h.width;
			var g = (r.style.margin || 0) + 2.1;
			a.height = h.height + g, a.y -= (a.height - d) / 2;
		}
	}
}
function Fy(e) {
	return e.position === "center";
}
function Iy(e) {
	var t = e.getData(), n = [], r, i, a = !1, o = (e.get("minShowLabelAngle") || 0) * jy, s = t.getLayout("viewRect"), c = t.getLayout("r"), l = s.width, u = s.x, d = s.y, f = s.height;
	function p(e) {
		e.ignore = !0;
	}
	function m(e) {
		if (!e.ignore) return !0;
		for (var t in e.states) if (e.states[t].ignore === !1) return !0;
		return !1;
	}
	t.each(function(e) {
		var s = t.getItemGraphicEl(e), d = s.shape, f = s.getTextContent(), h = s.getTextGuideLine(), g = t.getItemModel(e), _ = g.getModel("label"), v = _.get("position") || g.get([
			"emphasis",
			"label",
			"position"
		]), y = _.get("distanceToLabelLine"), b = _.get("alignTo"), x = Go(_.get("edgeDistance"), l), S = _.get("bleedMargin"), C = g.getModel("labelLine"), w = C.get("length");
		w = Go(w, l);
		var T = C.get("length2");
		if (T = Go(T, l), Math.abs(d.endAngle - d.startAngle) < o) I(f.states, p), f.ignore = !0, h && (I(h.states, p), h.ignore = !0);
		else if (m(f)) {
			var E = (d.startAngle + d.endAngle) / 2, D = Math.cos(E), O = Math.sin(E), k, A, ee, j;
			r = d.cx, i = d.cy;
			var M = v === "inside" || v === "inner";
			if (v === "center") k = d.cx, A = d.cy, j = "center";
			else {
				var te = (M ? (d.r + d.r0) / 2 * D : d.r * D) + r, N = (M ? (d.r + d.r0) / 2 * O : d.r * O) + i;
				if (k = te + D * 3, A = N + O * 3, !M) {
					var P = te + D * (w + c - d.r), ne = N + O * (w + c - d.r), F = P + (D < 0 ? -1 : 1) * T, re = ne;
					k = b === "edge" ? D < 0 ? u + x : u + l - x : F + (D < 0 ? -y : y), A = re, ee = [
						[te, N],
						[P, ne],
						[F, re]
					];
				}
				j = M ? "center" : b === "edge" ? D > 0 ? "right" : "left" : D > 0 ? "left" : "right";
			}
			var ie = Math.PI, ae = 0, L = _.get("rotate");
			if (ue(L)) ae = ie / 180 * L;
			else if (v === "center") ae = 0;
			else if (L === "radial" || L === !0) ae = D < 0 ? -E + ie : -E;
			else if (L === "tangential" && v !== "outside" && v !== "outer") {
				var oe = Math.atan2(D, O);
				oe < 0 && (oe = ie * 2 + oe), O > 0 && (oe = ie + oe), ae = oe - ie;
			}
			if (a = !!ae, f.x = k, f.y = A, f.rotation = ae, f.setStyle({ verticalAlign: "middle" }), M) {
				f.setStyle({ align: j });
				var R = f.states.select;
				R && (R.x += f.x, R.y += f.y);
			} else {
				var z = f.getBoundingRect().clone();
				z.applyTransform(f.getComputedTransform());
				var B = (f.style.margin || 0) + 2.1;
				z.y -= B / 2, z.height += B, n.push({
					label: f,
					labelLine: h,
					position: v,
					len: w,
					len2: T,
					minTurnAngle: C.get("minTurnAngle"),
					maxSurfaceAngle: C.get("maxSurfaceAngle"),
					surfaceNormal: new X(D, O),
					linePoints: ee,
					textAlign: j,
					labelDistance: y,
					labelAlignTo: b,
					edgeDistance: x,
					bleedMargin: S,
					rect: z,
					unconstrainedWidth: z.width,
					labelStyleWidth: f.style.width
				});
			}
			s.setTextConfig({ inside: M });
		}
	}), !a && e.get("avoidLabelOverlap") && Ny(n, r, i, c, l, f, u, d);
	for (var h = 0; h < n.length; h++) {
		var g = n[h], _ = g.label, v = g.labelLine, y = isNaN(_.x) || isNaN(_.y);
		if (_) {
			_.setStyle({ align: g.textAlign }), y && (I(_.states, p), _.ignore = !0);
			var b = _.states.select;
			b && (b.x += _.x, b.y += _.y);
		}
		if (v) {
			var x = g.linePoints;
			y || !x ? (I(v.states, p), v.ignore = !0) : (by(x, g.minTurnAngle), xy(x, g.surfaceNormal, g.maxSurfaceAngle), v.setShape({ points: x }), _.__hostTarget.textGuideLineConfig = { anchor: new X(x[0][0], x[0][1]) });
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/PieView.js
var Ly = function(e) {
	c(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.z2 = 2;
		var a = new Do();
		return i.setTextContent(a), i.updateData(t, n, r, !0), i;
	}
	return t.prototype.updateData = function(e, t, n, r) {
		var i = this, a = e.hostModel, o = e.getItemModel(t), s = o.getModel("emphasis"), c = e.getItemLayout(t), l = N(bv(o.getModel("itemStyle"), c, !0), c);
		if (isNaN(l.startAngle)) i.setShape(l);
		else {
			if (r) {
				i.setShape(l);
				var u = a.getShallow("animationType");
				a.ecModel.ssr ? (Du(i, {
					scaleX: 0,
					scaleY: 0
				}, a, {
					dataIndex: t,
					isFrom: !0
				}), i.originX = l.cx, i.originY = l.cy) : u === "scale" ? (i.shape.r = c.r0, Du(i, { shape: { r: c.r } }, a, t)) : n == null ? (i.shape.endAngle = c.startAngle, Eu(i, { shape: { endAngle: c.endAngle } }, a, t)) : (i.setShape({
					startAngle: n,
					endAngle: n
				}), Du(i, { shape: {
					startAngle: c.startAngle,
					endAngle: c.endAngle
				} }, a, t));
			} else Mu(i), Eu(i, { shape: l }, a, t);
			i.useStyle(e.getItemVisual(t, "style")), Zc(i, o);
			var d = (c.startAngle + c.endAngle) / 2, f = a.get("selectedOffset"), p = Math.cos(d) * f, m = Math.sin(d) * f, h = o.getShallow("cursor");
			h && i.attr("cursor", h), this._updateLabel(a, e, t), i.ensureState("emphasis").shape = N({ r: c.r + (s.get("scale") && s.get("scaleSize") || 0) }, bv(s.getModel("itemStyle"), c)), N(i.ensureState("select"), {
				x: p,
				y: m,
				shape: bv(o.getModel(["select", "itemStyle"]), c)
			}), N(i.ensureState("blur"), { shape: bv(o.getModel(["blur", "itemStyle"]), c) });
			var g = i.getTextGuideLine(), _ = i.getTextContent();
			g && N(g.ensureState("select"), {
				x: p,
				y: m
			}), N(_.ensureState("select"), {
				x: p,
				y: m
			}), qc(this, s.get("focus"), s.get("blurScope"), s.get("disabled"));
		}
	}, t.prototype._updateLabel = function(e, t, n) {
		var r = this, i = t.getItemModel(n), a = i.getModel("labelLine"), o = t.getItemVisual(n, "style"), s = o && o.fill, c = o && o.opacity;
		hd(r, gd(i), {
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
		var u = e.get(["label", "position"]);
		if (u !== "outside" && u !== "outer") r.removeTextGuideLine();
		else {
			var d = this.getTextGuideLine();
			d || (d = new nu(), this.setTextGuideLine(d)), wy(this, Ty(i), {
				stroke: s,
				opacity: ye(a.get(["lineStyle", "opacity"]), c, 1)
			});
		}
	}, t;
}(Jl), Ry = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.ignoreLabelLineUpdate = !0, t;
	}
	return t.prototype.render = function(e, t, n, r) {
		var i = e.getData(), a = this._data, o = this.group, s;
		if (!a && i.count() > 0) {
			for (var c = i.getItemLayout(0), l = 1; isNaN(c && c.startAngle) && l < i.count(); ++l) c = i.getItemLayout(l);
			c && (s = c.startAngle);
		}
		if (this._emptyCircleSector && o.remove(this._emptyCircleSector), i.count() === 0 && e.get("showEmptyCircle")) {
			var u = ey(e), d = new Jl({ shape: N(Qv(e, n), u) });
			d.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = d, o.add(d);
		}
		i.diff(a).add(function(e) {
			var t = new Ly(i, e, s);
			i.setItemGraphicEl(e, t), o.add(t);
		}).update(function(e, t) {
			var n = a.getItemGraphicEl(t);
			n.updateData(i, e, s), n.off("click"), o.add(n), i.setItemGraphicEl(e, n);
		}).remove(function(t) {
			ju(a.getItemGraphicEl(t), e, t);
		}).execute(), Iy(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = i);
	}, t.prototype.dispose = function() {}, t.prototype.containPoint = function(e, t) {
		var n = t.getData().getItemLayout(0);
		if (n) {
			var r = e[0] - n.cx, i = e[1] - n.cy, a = Math.sqrt(r * r + i * i);
			return a <= n.r && a >= n.r0;
		}
	}, t.type = "pie", t;
}(p_);
//#endregion
//#region node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
function zy(e, t, n) {
	t = H(t) && { coordDimensions: t } || N({ encodeDefine: e.getEncode() }, t);
	var r = e.getSource(), i = Tp(r, t).dimensions, a = new Cp(i, e);
	return a.initData(r, n), a;
}
//#endregion
//#region node_modules/echarts/lib/visual/LegendVisualProvider.js
var By = function() {
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
}(), Vy = Bs(), Hy = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.init = function(t) {
		e.prototype.init.apply(this, arguments), this.legendVisualProvider = new By(V(this.getData, this), V(this.getRawData, this)), this._defaultLabelLine(t);
	}, t.prototype.mergeOption = function() {
		e.prototype.mergeOption.apply(this, arguments);
	}, t.prototype.getInitialData = function() {
		return zy(this, {
			coordDimensions: ["value"],
			encodeDefaulter: ce(tf, this)
		});
	}, t.prototype.getDataParams = function(t) {
		var n = this.getData(), r = Vy(n), i = r.seats;
		if (!i) {
			var a = [];
			n.each(n.mapDimension("value"), function(e) {
				a.push(e);
			}), i = r.seats = Qo(a, n.hostModel.get("percentPrecision"));
		}
		var o = e.prototype.getDataParams.call(this, t);
		return o.percent = i[t] || 0, o.$vars.push("percent"), o;
	}, t.prototype._defaultLabelLine = function(e) {
		bs(e, "labelLine", ["show"]);
		var t = e.labelLine, n = e.emphasis.labelLine;
		t.show = t.show && e.label.show, n.show = n.show && e.emphasis.label.show;
	}, t.type = "series.pie", t.defaultOption = {
		z: 2,
		legendHoverLink: !0,
		colorBy: "data",
		center: ["50%", "50%"],
		radius: [0, "75%"],
		clockwise: !0,
		startAngle: 90,
		endAngle: "auto",
		padAngle: 0,
		minAngle: 0,
		minShowLabelAngle: 0,
		selectedOffset: 10,
		percentPrecision: 2,
		stillShowZeroSum: !0,
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
			bleedMargin: 10,
			distanceToLabelLine: 5
		},
		labelLine: {
			show: !0,
			length: 15,
			length2: 15,
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
}(xg);
//#endregion
//#region node_modules/echarts/lib/processor/negativeDataFilter.js
function Uy(e) {
	return {
		seriesType: e,
		reset: function(e, t) {
			var n = e.getData();
			n.filterSelf(function(e) {
				var t = n.mapDimension("value"), r = n.get(t, e);
				return !(ue(r) && !isNaN(r) && r < 0);
			});
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/chart/pie/install.js
function Wy(e) {
	e.registerChartView(Ry), e.registerSeriesModel(Hy), Kv("pie", e.registerAction), e.registerLayout(ce($v, "pie")), e.registerProcessor(ty("pie")), e.registerProcessor(Uy("pie"));
}
//#endregion
//#region node_modules/zrender/lib/mixin/Draggable.js
var Gy = function() {
	function e(e, t) {
		this.target = e, this.topTarget = t && t.topTarget;
	}
	return e;
}(), Ky = function() {
	function e(e) {
		this.handler = e, e.on("mousedown", this._dragStart, this), e.on("mousemove", this._drag, this), e.on("mouseup", this._dragEnd, this);
	}
	return e.prototype._dragStart = function(e) {
		for (var t = e.target; t && !t.draggable;) t = t.parent || t.__hostTarget;
		t && (this._draggingTarget = t, t.dragging = !0, this._x = e.offsetX, this._y = e.offsetY, this.handler.dispatchToElement(new Gy(t, e), "dragstart", e.event));
	}, e.prototype._drag = function(e) {
		var t = this._draggingTarget;
		if (t) {
			var n = e.offsetX, r = e.offsetY, i = n - this._x, a = r - this._y;
			this._x = n, this._y = r, t.drift(i, a, e), this.handler.dispatchToElement(new Gy(t, e), "drag", e.event);
			var o = this.handler.findHover(n, r, t).target, s = this._dropTarget;
			this._dropTarget = o, t !== o && (s && o !== s && this.handler.dispatchToElement(new Gy(s, e), "dragleave", e.event), o && o !== s && this.handler.dispatchToElement(new Gy(o, e), "dragenter", e.event));
		}
	}, e.prototype._dragEnd = function(e) {
		var t = this._draggingTarget;
		t && (t.dragging = !1), this.handler.dispatchToElement(new Gy(t, e), "dragend", e.event), this._dropTarget && this.handler.dispatchToElement(new Gy(this._dropTarget, e), "drop", e.event), this._draggingTarget = null, this._dropTarget = null;
	}, e;
}(), qy = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Jy = [], Yy = Y.browser.firefox && +Y.browser.version.split(".")[0] < 39;
function Xy(e, t, n, r) {
	return n ||= {}, r ? Zy(e, t, n) : Yy && t.layerX != null && t.layerX !== t.offsetX ? (n.zrX = t.layerX, n.zrY = t.layerY) : t.offsetX == null ? Zy(e, t, n) : (n.zrX = t.offsetX, n.zrY = t.offsetY), n;
}
function Zy(e, t, n) {
	if (Y.domSupported && e.getBoundingClientRect) {
		var r = t.clientX, i = t.clientY;
		if (im(e)) {
			var a = e.getBoundingClientRect();
			n.zrX = r - a.left, n.zrY = i - a.top;
			return;
		}
		if (tm(Jy, e, r, i)) {
			n.zrX = Jy[0], n.zrY = Jy[1];
			return;
		}
	}
	n.zrX = n.zrY = 0;
}
function Qy(e) {
	return e || window.event;
}
function $y(e, t, n) {
	if (t = Qy(t), t.zrX != null) return t;
	var r = t.type;
	if (r && r.indexOf("touch") >= 0) {
		var i = r === "touchend" ? t.changedTouches[0] : t.targetTouches[0];
		i && Xy(e, i, t, n);
	} else {
		Xy(e, t, t, n);
		var a = eb(t);
		t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
	}
	var o = t.button;
	return t.which == null && o !== void 0 && qy.test(t.type) && (t.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), t;
}
function eb(e) {
	var t = e.wheelDelta;
	if (t) return t;
	var n = e.deltaX, r = e.deltaY;
	if (n == null || r == null) return t;
	var i = Math.abs(r === 0 ? n : r), a = r > 0 ? -1 : r < 0 ? 1 : n > 0 ? -1 : 1;
	return 3 * i * a;
}
function tb(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function nb(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var rb = function(e) {
	e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0;
};
function ib(e) {
	return e.which === 2 || e.which === 3;
}
//#endregion
//#region node_modules/zrender/lib/core/GestureMgr.js
var ab = function() {
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
				var s = r[a], c = Xy(n, s, {});
				i.points.push([c.zrX, c.zrY]), i.touches.push(s);
			}
			this._track.push(i);
		}
	}, e.prototype._recognize = function(e) {
		for (var t in cb) if (cb.hasOwnProperty(t)) {
			var n = cb[t](this._track, e);
			if (n) return n;
		}
	}, e;
}();
function ob(e) {
	var t = e[1][0] - e[0][0], n = e[1][1] - e[0][1];
	return Math.sqrt(t * t + n * n);
}
function sb(e) {
	return [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2];
}
var cb = { pinch: function(e, t) {
	var n = e.length;
	if (n) {
		var r = (e[n - 1] || {}).points, i = (e[n - 2] || {}).points || r;
		if (i && i.length > 1 && r && r.length > 1) {
			var a = ob(r) / ob(i);
			!isFinite(a) && (a = 1), t.pinchScale = a;
			var o = sb(r);
			return t.pinchX = o[0], t.pinchY = o[1], {
				type: "pinch",
				target: e[0].target,
				event: t
			};
		}
	}
} }, lb = "silent";
function ub(e, t, n) {
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
		stop: db
	};
}
function db() {
	rb(this.event);
}
var fb = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.handler = null, t;
	}
	return t.prototype.dispose = function() {}, t.prototype.setCursor = function() {}, t;
}(Ai), pb = function() {
	function e(e, t) {
		this.x = e, this.y = t;
	}
	return e;
}(), mb = [
	"click",
	"dblclick",
	"mousewheel",
	"mouseout",
	"mouseup",
	"mousedown",
	"mousemove",
	"contextmenu"
], hb = new Z(0, 0, 0, 0), gb = function(e) {
	c(t, e);
	function t(t, n, r, i, a) {
		var o = e.call(this) || this;
		return o._hovered = new pb(0, 0), o.storage = t, o.painter = n, o.painterRoot = i, o._pointerSize = a, r ||= new fb(), o.proxy = null, o.setHandlerProxy(r), o._draggingMgr = new Ky(o), o;
	}
	return t.prototype.setHandlerProxy = function(e) {
		this.proxy && this.proxy.dispose(), e && (I(mb, function(t) {
			e.on && e.on(t, this[t], this);
		}, this), e.handler = this), this.proxy = e;
	}, t.prototype.mousemove = function(e) {
		var t = e.zrX, n = e.zrY, r = yb(this, t, n), i = this._hovered, a = i.target;
		a && !a.__zr && (i = this.findHover(i.x, i.y), a = i.target);
		var o = this._hovered = r ? new pb(t, n) : this.findHover(t, n), s = o.target, c = this.proxy;
		c.setCursor && c.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(i, "mouseout", e), this.dispatchToElement(o, "mousemove", e), s && s !== a && this.dispatchToElement(o, "mouseover", e);
	}, t.prototype.mouseout = function(e) {
		var t = e.zrEventControl;
		t !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), t !== "no_globalout" && this.trigger("globalout", {
			type: "globalout",
			event: e
		});
	}, t.prototype.resize = function() {
		this._hovered = new pb(0, 0);
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
			for (var i = "on" + t, a = ub(t, e, n); r && (r[i] && (a.cancelBubble = !!r[i].call(r, a)), r.trigger(t, a), r = r.__hostTarget ? r.__hostTarget : r.parent, !a.cancelBubble););
			a.cancelBubble || (this.trigger(t, a), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(e) {
				typeof e[i] == "function" && e[i].call(e, a), e.trigger && e.trigger(t, a);
			}));
		}
	}, t.prototype.findHover = function(e, t, n) {
		var r = this.storage.getDisplayList(), i = new pb(e, t);
		if (vb(r, i, e, t, n), this._pointerSize && !i.target) {
			for (var a = [], o = this._pointerSize, s = o / 2, c = new Z(e - s, t - s, o, o), l = r.length - 1; l >= 0; l--) {
				var u = r[l];
				u !== n && !u.ignore && !u.ignoreCoarsePointer && (!u.parent || !u.parent.ignoreCoarsePointer) && (hb.copy(u.getBoundingRect()), u.transform && hb.applyTransform(u.transform), hb.intersect(c) && a.push(u));
			}
			if (a.length) {
				for (var d = 4, f = Math.PI / 12, p = Math.PI * 2, m = 0; m < s; m += d) for (var h = 0; h < p; h += f) if (vb(a, i, e + m * Math.cos(h), t + m * Math.sin(h), n), i.target) return i;
			}
		}
		return i;
	}, t.prototype.processGesture = function(e, t) {
		this._gestureMgr ||= new ab();
		var n = this._gestureMgr;
		t === "start" && n.clear();
		var r = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
		if (t === "end" && n.clear(), r) {
			var i = r.type;
			e.gestureEvent = i;
			var a = new pb();
			a.target = r.target, this.dispatchToElement(a, i, r.event);
		}
	}, t;
}(Ai);
I([
	"click",
	"mousedown",
	"mouseup",
	"mousewheel",
	"dblclick",
	"contextmenu"
], function(e) {
	gb.prototype[e] = function(t) {
		var n = t.zrX, r = t.zrY, i = yb(this, n, r), a, o;
		if ((e !== "mouseup" || !i) && (a = this.findHover(n, r), o = a.target), e === "mousedown") this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
		else if (e === "mouseup") this._upEl = o;
		else if (e === "click") {
			if (this._downEl !== this._upEl || !this._downPoint || _n(this._downPoint, [t.zrX, t.zrY]) > 4) return;
			this._downPoint = null;
		}
		this.dispatchToElement(a, e, t);
	};
});
function _b(e, t, n) {
	if (e[e.rectHover ? "rectContain" : "contain"](t, n)) {
		for (var r = e, i = void 0, a = !1; r;) {
			if (r.ignoreClip && (a = !0), !a) {
				var o = r.getClipPath();
				if (o && !o.contain(t, n)) return !1;
			}
			r.silent && (i = !0), r = r.__hostTarget || r.parent;
		}
		return !i || lb;
	}
	return !1;
}
function vb(e, t, n, r, i) {
	for (var a = e.length - 1; a >= 0; a--) {
		var o = e[a], s = void 0;
		if (o !== i && !o.ignore && (s = _b(o, n, r)) && (!t.topTarget && (t.topTarget = o), s !== lb)) {
			t.target = o;
			break;
		}
	}
}
function yb(e, t, n) {
	var r = e.painter;
	return t < 0 || t > r.getWidth() || n < 0 || n > r.getHeight();
}
//#endregion
//#region node_modules/zrender/lib/core/timsort.js
var bb = 32, xb = 7;
function Sb(e) {
	for (var t = 0; e >= bb;) t |= e & 1, e >>= 1;
	return e + t;
}
function Cb(e, t, n, r) {
	var i = t + 1;
	if (i === n) return 1;
	if (r(e[i++], e[t]) < 0) {
		for (; i < n && r(e[i], e[i - 1]) < 0;) i++;
		wb(e, t, i);
	} else for (; i < n && r(e[i], e[i - 1]) >= 0;) i++;
	return i - t;
}
function wb(e, t, n) {
	for (n--; t < n;) {
		var r = e[t];
		e[t++] = e[n], e[n--] = r;
	}
}
function Tb(e, t, n, r, i) {
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
function Eb(e, t, n, r, i, a) {
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
function Db(e, t, n, r, i, a) {
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
function Ob(e, t) {
	var n = xb, r, i, a = 0, o = [];
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
		var u = Db(e[c], e, o, s, 0, t);
		o += u, s -= u, s !== 0 && (l = Eb(e[o + s - 1], e, c, l, l - 1, t), l !== 0 && (s <= l ? d(o, s, c, l) : f(o, s, c, l)));
	}
	function d(r, i, a, s) {
		var c = 0;
		for (c = 0; c < i; c++) o[c] = e[r + c];
		var l = 0, u = a, d = r;
		if (e[d++] = e[u++], --s === 0) for (c = 0; c < i; c++) e[d + c] = o[l + c];
		else if (i === 1) {
			for (c = 0; c < s; c++) e[d + c] = e[u + c];
			e[d + s] = o[l];
		} else {
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
					if (p = Db(e[u], o, l, i, 0, t), p !== 0) {
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
					if (m = Eb(o[l], e, u, s, 0, t), m !== 0) {
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
				} while (p >= xb || m >= xb);
				if (h) break;
				f < 0 && (f = 0), f += 2;
			}
			if (n = f, n < 1 && (n = 1), i === 1) {
				for (c = 0; c < s; c++) e[d + c] = e[u + c];
				e[d + s] = o[l];
			} else if (i === 0) throw Error();
			else for (c = 0; c < i; c++) e[d + c] = o[l + c];
		}
	}
	function f(r, i, a, s) {
		var c = 0;
		for (c = 0; c < s; c++) o[c] = e[a + c];
		var l = r + i - 1, u = s - 1, d = a + s - 1, f = 0, p = 0;
		if (e[d--] = e[l--], --i === 0) for (f = d - (s - 1), c = 0; c < s; c++) e[f + c] = o[c];
		else if (s === 1) {
			for (d -= i, l -= i, p = d + 1, f = l + 1, c = i - 1; c >= 0; c--) e[p + c] = e[f + c];
			e[d] = o[u];
		} else {
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
					if (h = i - Db(o[u], e, r, i, i - 1, t), h !== 0) {
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
					if (g = s - Eb(e[l], o, 0, s, s - 1, t), g !== 0) {
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
				} while (h >= xb || g >= xb);
				if (_) break;
				m < 0 && (m = 0), m += 2;
			}
			if (n = m, n < 1 && (n = 1), s === 1) {
				for (d -= i, l -= i, p = d + 1, f = l + 1, c = i - 1; c >= 0; c--) e[p + c] = e[f + c];
				e[d] = o[u];
			} else if (s === 0) throw Error();
			else for (f = d - (s - 1), c = 0; c < s; c++) e[f + c] = o[c];
		}
	}
	return {
		mergeRuns: c,
		forceMergeRuns: l,
		pushRun: s
	};
}
function kb(e, t, n, r) {
	n ||= 0, r ||= e.length;
	var i = r - n;
	if (!(i < 2)) {
		var a = 0;
		if (i < bb) a = Cb(e, n, r, t), Tb(e, n, r, n + a, t);
		else {
			var o = Ob(e, t), s = Sb(i);
			do {
				if (a = Cb(e, n, r, t), a < s) {
					var c = i;
					c > s && (c = s), Tb(e, n, n + c, n + a, t), a = c;
				}
				o.pushRun(n, a), o.mergeRuns(), i -= a, n += a;
			} while (i !== 0);
			o.forceMergeRuns();
		}
	}
}
//#endregion
//#region node_modules/zrender/lib/Storage.js
var Ab = !1;
function jb() {
	Ab || (Ab = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Mb(e, t) {
	return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel;
}
var Nb = function() {
	function e() {
		this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Mb;
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
		n.length = this._displayListLen, kb(n, Mb);
	}, e.prototype._updateAndAddDisplayable = function(e, t, n) {
		if (!e.ignore || n) {
			e.beforeUpdate(), e.update(), e.afterUpdate();
			var r = e.getClipPath();
			if (e.ignoreClip) t = null;
			else if (r) {
				t = t ? t.slice() : [];
				for (var i = r, a = e; i;) i.parent = a, i.updateTransform(), t.push(i), a = i, i = i.getClipPath();
			}
			if (e.childrenRef) {
				for (var o = e.childrenRef(), s = 0; s < o.length; s++) {
					var c = o[s];
					e.__dirty && (c.__dirty |= 1), this._updateAndAddDisplayable(c, t, n);
				}
				e.__dirty = 0;
			} else {
				var l = e;
				t && t.length ? l.__clipPaths = t : l.__clipPaths && l.__clipPaths.length > 0 && (l.__clipPaths = []), isNaN(l.z) && (jb(), l.z = 0), isNaN(l.z2) && (jb(), l.z2 = 0), isNaN(l.zlevel) && (jb(), l.zlevel = 0), this._displayList[this._displayListLen++] = l;
			}
			var u = e.getDecalElement && e.getDecalElement();
			u && this._updateAndAddDisplayable(u, t, n);
			var d = e.getTextGuideLine();
			d && this._updateAndAddDisplayable(d, t, n);
			var f = e.getTextContent();
			f && this._updateAndAddDisplayable(f, t, n);
		}
	}, e.prototype.addRoot = function(e) {
		e.__zr && e.__zr.storage === this || this._roots.push(e);
	}, e.prototype.delRoot = function(e) {
		if (e instanceof Array) for (var t = 0, n = e.length; t < n; t++) this.delRoot(e[t]);
		else {
			var r = F(this._roots, e);
			r >= 0 && this._roots.splice(r, 1);
		}
	}, e.prototype.delAllRoots = function() {
		this._roots = [], this._displayList = [], this._displayListLen = 0;
	}, e.prototype.getRoots = function() {
		return this._roots;
	}, e.prototype.dispose = function() {
		this._displayList = null, this._roots = null;
	}, e;
}(), Pb = Y.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(e) {
	return setTimeout(e, 16);
};
//#endregion
//#region node_modules/zrender/lib/animation/Animation.js
function Fb() {
	return (/* @__PURE__ */ new Date()).getTime();
}
var Ib = function(e) {
	c(t, e);
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
		for (var t = Fb() - this._pausedTime, n = t - this._time, r = this._head; r;) {
			var i = r.next;
			r.step(t, n) && (r.ondestroy(), this.removeClip(r)), r = i;
		}
		this._time = t, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
	}, t.prototype._startLoop = function() {
		var e = this;
		this._running = !0;
		function t() {
			e._running && (Pb(t), !e._paused && e.update());
		}
		Pb(t);
	}, t.prototype.start = function() {
		this._running || (this._time = Fb(), this._pausedTime = 0, this._startLoop());
	}, t.prototype.stop = function() {
		this._running = !1;
	}, t.prototype.pause = function() {
		this._paused ||= (this._pauseStart = Fb(), !0);
	}, t.prototype.resume = function() {
		this._paused &&= (this._pausedTime += Fb() - this._pauseStart, !1);
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
		var n = new ki(e, t.loop);
		return this.addAnimator(n), n;
	}, t;
}(Ai), Lb = 300, Rb = Y.domSupported, zb = (function() {
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
})(), Bb = {
	mouse: ["mousemove", "mouseup"],
	pointer: ["pointermove", "pointerup"]
}, Vb = !1;
function Hb(e) {
	var t = e.pointerType;
	return t === "pen" || t === "touch";
}
function Ub(e) {
	e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function() {
		e.touching = !1, e.touchTimer = null;
	}, 700);
}
function Wb(e) {
	e && (e.zrByTouch = !0);
}
function Gb(e, t) {
	return $y(e.dom, new qb(e, t), !0);
}
function Kb(e, t) {
	for (var n = t, r = !1; n && n.nodeType !== 9 && !(r = n.domBelongToZr || n !== t && n === e.painterRoot);) n = n.parentNode;
	return r;
}
var qb = function() {
	function e(e, t) {
		this.stopPropagation = Pe, this.stopImmediatePropagation = Pe, this.preventDefault = Pe, this.type = t.type, this.target = this.currentTarget = e.dom, this.pointerType = t.pointerType, this.clientX = t.clientX, this.clientY = t.clientY;
	}
	return e;
}(), Jb = {
	mousedown: function(e) {
		e = $y(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e);
	},
	mousemove: function(e) {
		e = $y(this.dom, e);
		var t = this.__mayPointerCapture;
		t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e);
	},
	mouseup: function(e) {
		e = $y(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e);
	},
	mouseout: function(e) {
		e = $y(this.dom, e);
		var t = e.toElement || e.relatedTarget;
		Kb(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e));
	},
	wheel: function(e) {
		Vb = !0, e = $y(this.dom, e), this.trigger("mousewheel", e);
	},
	mousewheel: function(e) {
		Vb || (e = $y(this.dom, e), this.trigger("mousewheel", e));
	},
	touchstart: function(e) {
		e = $y(this.dom, e), Wb(e), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(e, "start"), Jb.mousemove.call(this, e), Jb.mousedown.call(this, e);
	},
	touchmove: function(e) {
		e = $y(this.dom, e), Wb(e), this.handler.processGesture(e, "change"), Jb.mousemove.call(this, e);
	},
	touchend: function(e) {
		e = $y(this.dom, e), Wb(e), this.handler.processGesture(e, "end"), Jb.mouseup.call(this, e), +/* @__PURE__ */ new Date() - this.__lastTouchMoment < Lb && Jb.click.call(this, e);
	},
	pointerdown: function(e) {
		Jb.mousedown.call(this, e);
	},
	pointermove: function(e) {
		Hb(e) || Jb.mousemove.call(this, e);
	},
	pointerup: function(e) {
		Jb.mouseup.call(this, e);
	},
	pointerout: function(e) {
		Hb(e) || Jb.mouseout.call(this, e);
	}
};
I([
	"click",
	"dblclick",
	"contextmenu"
], function(e) {
	Jb[e] = function(t) {
		t = $y(this.dom, t), this.trigger(e, t);
	};
});
var Yb = {
	pointermove: function(e) {
		Hb(e) || Yb.mousemove.call(this, e);
	},
	pointerup: function(e) {
		Yb.mouseup.call(this, e);
	},
	mousemove: function(e) {
		this.trigger("mousemove", e);
	},
	mouseup: function(e) {
		var t = this.__pointerCapturing;
		this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e));
	}
};
function Xb(e, t) {
	var n = t.domHandlers;
	Y.pointerEventsSupported ? I(zb.pointer, function(r) {
		Qb(t, r, function(t) {
			n[r].call(e, t);
		});
	}) : (Y.touchEventsSupported && I(zb.touch, function(r) {
		Qb(t, r, function(i) {
			n[r].call(e, i), Ub(t);
		});
	}), I(zb.mouse, function(r) {
		Qb(t, r, function(i) {
			i = Qy(i), t.touching || n[r].call(e, i);
		});
	}));
}
function Zb(e, t) {
	Y.pointerEventsSupported ? I(Bb.pointer, n) : Y.touchEventsSupported || I(Bb.mouse, n);
	function n(n) {
		function r(r) {
			r = Qy(r), Kb(e, r.target) || (r = Gb(e, r), t.domHandlers[n].call(e, r));
		}
		Qb(t, n, r, { capture: !0 });
	}
}
function Qb(e, t, n, r) {
	e.mounted[t] = n, e.listenerOpts[t] = r, tb(e.domTarget, t, n, r);
}
function $b(e) {
	var t = e.mounted;
	for (var n in t) t.hasOwnProperty(n) && nb(e.domTarget, n, t[n], e.listenerOpts[n]);
	e.mounted = {};
}
var ex = function() {
	function e(e, t) {
		this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = e, this.domHandlers = t;
	}
	return e;
}(), tx = function(e) {
	c(t, e);
	function t(t, n) {
		var r = e.call(this) || this;
		return r.__pointerCapturing = !1, r.dom = t, r.painterRoot = n, r._localHandlerScope = new ex(t, Jb), Rb && (r._globalHandlerScope = new ex(document, Yb)), Xb(r, r._localHandlerScope), r;
	}
	return t.prototype.dispose = function() {
		$b(this._localHandlerScope), Rb && $b(this._globalHandlerScope);
	}, t.prototype.setCursor = function(e) {
		this.dom.style && (this.dom.style.cursor = e || "default");
	}, t.prototype.__togglePointerCapture = function(e) {
		if (this.__mayPointerCapture = null, Rb && +this.__pointerCapturing ^ e) {
			this.__pointerCapturing = e;
			var t = this._globalHandlerScope;
			e ? Zb(this, t) : $b(t);
		}
	}, t;
}(Ai), nx = /* @__PURE__ */ o({
	dispose: () => lx,
	disposeAll: () => ux,
	getElementSSRData: () => mx,
	getInstance: () => dx,
	init: () => cx,
	registerPainter: () => fx,
	registerSSRDataGetter: () => hx,
	version: () => gx
}), rx = {}, ix = {};
function ax(e) {
	delete ix[e];
}
function ox(e) {
	if (!e) return !1;
	if (typeof e == "string") return Ir(e, 1) < Ni;
	if (e.colorStops) {
		for (var t = e.colorStops, n = 0, r = t.length, i = 0; i < r; i++) n += Ir(t[i].color, 1);
		return n /= r, n < Ni;
	}
	return !1;
}
var sx = function() {
	function e(e, t, n) {
		var r = this;
		this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n ||= {}, this.dom = t, this.id = e;
		var i = new Nb(), a = n.renderer || "canvas";
		rx[a] || (a = B(rx)[0]), n.useDirtyRect = n.useDirtyRect != null && n.useDirtyRect;
		var o = new rx[a](t, i, n, e), s = n.ssr || o.ssrOnly;
		this.storage = i, this.painter = o;
		var c = !Y.node && !Y.worker && !s ? new tx(o.getViewportRoot(), o.root) : null, l = n.useCoarsePointer, u = l == null || l === "auto" ? Y.touchEventsSupported : !!l, d = 44, f;
		u && (f = K(n.pointerSize, d)), this.handler = new gb(i, o, c, o.root, f), this.animation = new Ib({ stage: { update: s ? null : function() {
			return r._flush(!0);
		} } }), s || this.animation.start();
	}
	return e.prototype.add = function(e) {
		!this._disposed && e && (this.storage.addRoot(e), e.addSelfToZr(this), this.refresh());
	}, e.prototype.remove = function(e) {
		!this._disposed && e && (this.storage.delRoot(e), e.removeSelfFromZr(this), this.refresh());
	}, e.prototype.configLayer = function(e, t) {
		this._disposed || (this.painter.configLayer && this.painter.configLayer(e, t), this.refresh());
	}, e.prototype.setBackgroundColor = function(e) {
		this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(e), this.refresh(), this._backgroundColor = e, this._darkMode = ox(e));
	}, e.prototype.getBackgroundColor = function() {
		return this._backgroundColor;
	}, e.prototype.setDarkMode = function(e) {
		this._darkMode = e;
	}, e.prototype.isDarkMode = function() {
		return this._darkMode;
	}, e.prototype.refreshImmediately = function(e) {
		this._disposed || (e || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1);
	}, e.prototype.refresh = function() {
		this._disposed || (this._needsRefresh = !0, this.animation.start());
	}, e.prototype.flush = function() {
		this._disposed || this._flush(!1);
	}, e.prototype._flush = function(e) {
		var t, n = Fb();
		this._needsRefresh && (t = !0, this.refreshImmediately(e)), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately());
		var r = Fb();
		t ? (this._stillFrameAccum = 0, this.trigger("rendered", { elapsedTime: r - n })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
	}, e.prototype.setSleepAfterStill = function(e) {
		this._sleepAfterStill = e;
	}, e.prototype.wakeUp = function() {
		this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
	}, e.prototype.refreshHover = function() {
		this._needsRefreshHover = !0;
	}, e.prototype.refreshHoverImmediately = function() {
		this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
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
			for (var e = this.storage.getRoots(), t = 0; t < e.length; t++) e[t] instanceof Dl && e[t].removeSelfFromZr(this);
			this.storage.delAllRoots(), this.painter.clear();
		}
	}, e.prototype.dispose = function() {
		this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, ax(this.id));
	}, e;
}();
function cx(e, t) {
	var n = new sx(A(), e, t);
	return ix[n.id] = n, n;
}
function lx(e) {
	e.dispose();
}
function ux() {
	for (var e in ix) ix.hasOwnProperty(e) && ix[e].dispose();
	ix = {};
}
function dx(e) {
	return ix[e];
}
function fx(e, t) {
	rx[e] = t;
}
var px;
function mx(e) {
	if (typeof px == "function") return px(e);
}
function hx(e) {
	px = e;
}
var gx = "5.6.1", _x = "";
typeof navigator < "u" && (_x = navigator.platform || "");
var vx = "rgba(0, 0, 0, 0.2)", yx = {
	darkMode: "auto",
	colorBy: "series",
	color: [
		"#5470c6",
		"#91cc75",
		"#fac858",
		"#ee6666",
		"#73c0de",
		"#3ba272",
		"#fc8452",
		"#9a60b4",
		"#ea7ccc"
	],
	gradientColor: [
		"#f6efa6",
		"#d88273",
		"#bf444c"
	],
	aria: { decal: { decals: [
		{
			color: vx,
			dashArrayX: [1, 0],
			dashArrayY: [2, 5],
			symbolSize: 1,
			rotation: Math.PI / 6
		},
		{
			color: vx,
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
			color: vx,
			dashArrayX: [1, 0],
			dashArrayY: [4, 3],
			rotation: -Math.PI / 4
		},
		{
			color: vx,
			dashArrayX: [[6, 6], [
				0,
				6,
				6,
				0
			]],
			dashArrayY: [6, 0]
		},
		{
			color: vx,
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
			color: vx,
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
		fontFamily: _x.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
}, bx = q();
function xx(e, t, n) {
	var r = bx.get(t);
	if (!r) return n;
	var i = r(e);
	return i ? n.concat(i) : n;
}
//#endregion
//#region node_modules/echarts/lib/model/Global.js
var Sx, Cx, Tx, Ex = "\0_ec_inner", Dx = 1, Ox = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.init = function(e, t, n, r, i, a) {
		r ||= {}, this.option = null, this._theme = new zd(r), this._locale = new zd(i), this._optionManager = a;
	}, t.prototype.setOption = function(e, t, n) {
		var r = Nx(t);
		this._optionManager.setOption(e, n, r), this._resetOption(null, r);
	}, t.prototype.resetOption = function(e, t) {
		return this._resetOption(e, Nx(t));
	}, t.prototype._resetOption = function(e, t) {
		var n = !1, r = this._optionManager;
		if (!e || e === "recreate") {
			var i = r.mountOption(e === "recreate");
			!this.option || e === "recreate" ? Tx(this, i) : (this.restoreData(), this._mergeOption(i, t)), n = !0;
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
		var n = this.option, r = this._componentsMap, i = this._componentsCount, a = [], o = q(), s = t && t.replaceMergeMainTypeMap;
		$d(this), I(e, function(e, t) {
			e != null && ($.hasClass(t) ? t && (a.push(t), o.set(t, !0)) : n[t] = n[t] == null ? j(e) : M(n[t], e, !0));
		}), s && s.each(function(e, t) {
			$.hasClass(t) && !o.get(t) && (a.push(t), o.set(t, !0));
		}), $.topologicalTravel(a, $.getAllClassMainTypes(), c, this);
		function c(t) {
			var a = xx(this, t, ys(e[t])), o = r.get(t), c = ws(o, a, o ? s && s.get(t) ? "replaceMerge" : "normalMerge" : "replaceAll");
			Is(c, t, $), n[t] = null, r.set(t, null), i.set(t, 0);
			var l = [], u = [], d = 0, f;
			I(c, function(e, n) {
				var r = e.existing, i = e.newOption;
				if (!i) r && (r.mergeOption({}, this), r.optionUpdated({}, !1));
				else {
					var a = t === "series", o = $.getClass(t, e.keyInfo.subType, !a);
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
			}, this), n[t] = l, r.set(t, u), i.set(t, d), t === "series" && Sx(this);
		}
		this._seriesIndices || Sx(this);
	}, t.prototype.getOption = function() {
		var e = j(this.option);
		return I(e, function(t, n) {
			if ($.hasClass(n)) {
				for (var r = ys(t), i = r.length, a = !1, o = i - 1; o >= 0; o--) r[o] && !Fs(r[o]) ? a = !0 : (r[o] = null, !a && i--);
				r.length = i, e[n] = r;
			}
		}), delete e[Ex], e;
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
		return n == null ? o = r == null ? i == null ? R(a, function(e) {
			return !!e;
		}) : jx("name", i, a) : jx("id", r, a) : (o = [], I(ys(n), function(e) {
			a[e] && o.push(a[e]);
		})), Mx(o, e);
	}, t.prototype.findComponents = function(e) {
		var t = e.query, n = e.mainType, r = i(t);
		return a(Mx(r ? this.queryComponents(r) : R(this._componentsMap.get(n), function(e) {
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
			return e.filter ? R(t, e.filter) : t;
		}
	}, t.prototype.eachComponent = function(e, t, n) {
		var r = this._componentsMap;
		if (U(e)) {
			var i = t, a = e;
			r.each(function(e, t) {
				for (var n = 0; e && n < e.length; n++) {
					var r = e[n];
					r && a.call(i, t, r, r.componentIndex);
				}
			});
		} else for (var o = W(e) ? r.get(e) : G(e) ? this.findComponents(e) : null, s = 0; o && s < o.length; s++) {
			var c = o[s];
			c && t.call(n, c, c.componentIndex);
		}
	}, t.prototype.getSeriesByName = function(e) {
		var t = Ns(e, null);
		return R(this._componentsMap.get("series"), function(e) {
			return !!e && t != null && e.name === t;
		});
	}, t.prototype.getSeriesByIndex = function(e) {
		return this._componentsMap.get("series")[e];
	}, t.prototype.getSeriesByType = function(e) {
		return R(this._componentsMap.get("series"), function(t) {
			return !!t && t.subType === e;
		});
	}, t.prototype.getSeries = function() {
		return R(this._componentsMap.get("series"), function(e) {
			return !!e;
		});
	}, t.prototype.getSeriesCount = function() {
		return this._componentsCount.get("series");
	}, t.prototype.eachSeries = function(e, t) {
		Cx(this), I(this._seriesIndices, function(n) {
			var r = this._componentsMap.get("series")[n];
			e.call(t, r, n);
		}, this);
	}, t.prototype.eachRawSeries = function(e, t) {
		I(this._componentsMap.get("series"), function(n) {
			n && e.call(t, n, n.componentIndex);
		});
	}, t.prototype.eachSeriesByType = function(e, t, n) {
		Cx(this), I(this._seriesIndices, function(r) {
			var i = this._componentsMap.get("series")[r];
			i.subType === e && t.call(n, i, r);
		}, this);
	}, t.prototype.eachRawSeriesByType = function(e, t, n) {
		return I(this.getSeriesByType(e), t, n);
	}, t.prototype.isSeriesFiltered = function(e) {
		return Cx(this), this._seriesIndicesMap.get(e.componentIndex) == null;
	}, t.prototype.getCurrentSeriesIndices = function() {
		return (this._seriesIndices || []).slice();
	}, t.prototype.filterSeries = function(e, t) {
		Cx(this);
		var n = [];
		I(this._seriesIndices, function(r) {
			var i = this._componentsMap.get("series")[r];
			e.call(t, i, r) && n.push(r);
		}, this), this._seriesIndices = n, this._seriesIndicesMap = q(n);
	}, t.prototype.restoreData = function(e) {
		Sx(this);
		var t = this._componentsMap, n = [];
		t.each(function(e, t) {
			$.hasClass(t) && n.push(t);
		}), $.topologicalTravel(n, $.getAllClassMainTypes(), function(n) {
			I(t.get(n), function(t) {
				t && (n !== "series" || !kx(t, e)) && t.restoreData();
			});
		});
	}, t.internalField = function() {
		Sx = function(e) {
			var t = e._seriesIndices = [];
			I(e._componentsMap.get("series"), function(e) {
				e && t.push(e.componentIndex);
			}), e._seriesIndicesMap = q(t);
		}, Cx = function(e) {}, Tx = function(e, t) {
			e.option = {}, e.option[Ex] = Dx, e._componentsMap = q({ series: [] }), e._componentsCount = q();
			var n = t.aria;
			G(n) && n.enabled == null && (n.enabled = !0), Ax(t, e._theme.option), M(t, yx, !1), e._mergeOption(t, null);
		};
	}(), t;
}(zd);
function kx(e, t) {
	if (t) {
		var n = t.seriesIndex, r = t.seriesId, i = t.seriesName;
		return n != null && e.componentIndex !== n || r != null && e.id !== r || i != null && e.name !== i;
	}
}
function Ax(e, t) {
	var n = e.color && !e.colorLayer;
	I(t, function(t, r) {
		r === "colorLayer" && n || $.hasClass(r) || (typeof t == "object" ? e[r] = e[r] ? M(e[r], t, !1) : j(t) : e[r] ?? (e[r] = t));
	});
}
function jx(e, t, n) {
	if (H(t)) {
		var r = q();
		return I(t, function(e) {
			e != null && Ns(e, null) != null && r.set(e, !0);
		}), R(n, function(t) {
			return t && r.get(t[e]);
		});
	}
	var i = Ns(t, null);
	return R(n, function(t) {
		return t && i != null && t[e] === i;
	});
}
function Mx(e, t) {
	return t.hasOwnProperty("subType") ? R(e, function(e) {
		return e && e.subType === t.subType;
	}) : e;
}
function Nx(e) {
	var t = q();
	return e && I(ys(e.replaceMerge), function(e) {
		t.set(e, !0);
	}), { replaceMergeMainTypeMap: t };
}
ie(Ox, Th);
//#endregion
//#region node_modules/echarts/lib/core/ExtensionAPI.js
var Px = [
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
], Fx = function() {
	function e(e) {
		I(Px, function(t) {
			this[t] = V(e[t], e);
		}, this);
	}
	return e;
}(), Ix = /^(min|max)?(.+)$/, Lx = function() {
	function e(e) {
		this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = e;
	}
	return e.prototype.setOption = function(e, t, n) {
		e && (I(ys(e.series), function(e) {
			e && e.data && fe(e.data) && Te(e.data);
		}), I(ys(e.dataset), function(e) {
			e && e.source && fe(e.source) && Te(e.source);
		})), e = j(e);
		var r = this._optionBackup, i = Rx(e, t, !r);
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
		for (var s = 0, c = r.length; s < c; s++) zx(r[s].query, t, n) && a.push(s);
		return !a.length && i && (a = [-1]), a.length && !Vx(a, this._currentMediaIndices) && (o = L(a, function(e) {
			return j(e === -1 ? i.option : r[e].option);
		})), this._currentMediaIndices = a, o;
	}, e;
}();
function Rx(e, t, n) {
	var r = [], i, a, o = e.baseOption, s = e.timeline, c = e.options, l = e.media, u = !!e.media, d = !!(c || s || o && o.timeline);
	o ? (a = o, a.timeline || (a.timeline = s)) : ((d || u) && (e.options = e.media = null), a = e), u && H(l) && I(l, function(e) {
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
function zx(e, t, n) {
	var r = {
		width: t,
		height: n,
		aspectratio: t / n
	}, i = !0;
	return I(e, function(e, t) {
		var n = t.match(Ix);
		if (n && n[1] && n[2]) {
			var a = n[1];
			Bx(r[n[2].toLowerCase()], e, a) || (i = !1);
		}
	}), i;
}
function Bx(e, t, n) {
	return n === "min" ? e >= t : n === "max" ? e <= t : e === t;
}
function Vx(e, t) {
	return e.join(",") === t.join(",");
}
//#endregion
//#region node_modules/echarts/lib/preprocessor/helper/compatStyle.js
var Hx = I, Ux = G, Wx = [
	"areaStyle",
	"lineStyle",
	"nodeStyle",
	"linkStyle",
	"chordStyle",
	"label",
	"labelLine"
];
function Gx(e) {
	var t = e && e.itemStyle;
	if (t) for (var n = 0, r = Wx.length; n < r; n++) {
		var i = Wx[n], a = t.normal, o = t.emphasis;
		a && a[i] && (e[i] = e[i] || {}, e[i].normal ? M(e[i].normal, a[i]) : e[i].normal = a[i], a[i] = null), o && o[i] && (e[i] = e[i] || {}, e[i].emphasis ? M(e[i].emphasis, o[i]) : e[i].emphasis = o[i], o[i] = null);
	}
}
function Kx(e, t, n) {
	if (e && e[t] && (e[t].normal || e[t].emphasis)) {
		var r = e[t].normal, i = e[t].emphasis;
		r && (n ? (e[t].normal = e[t].emphasis = null, P(e[t], r)) : e[t] = r), i && (e.emphasis = e.emphasis || {}, e.emphasis[t] = i, i.focus && (e.emphasis.focus = i.focus), i.blurScope && (e.emphasis.blurScope = i.blurScope));
	}
}
function qx(e) {
	Kx(e, "itemStyle"), Kx(e, "lineStyle"), Kx(e, "areaStyle"), Kx(e, "label"), Kx(e, "labelLine"), Kx(e, "upperLabel"), Kx(e, "edgeLabel");
}
function Jx(e, t) {
	var n = Ux(e) && e[t], r = Ux(n) && n.textStyle;
	if (r) for (var i = 0, a = xs.length; i < a; i++) {
		var o = xs[i];
		r.hasOwnProperty(o) && (n[o] = r[o]);
	}
}
function Yx(e) {
	e && (qx(e), Jx(e, "label"), e.emphasis && Jx(e.emphasis, "label"));
}
function Xx(e) {
	if (Ux(e)) {
		Gx(e), qx(e), Jx(e, "label"), Jx(e, "upperLabel"), Jx(e, "edgeLabel"), e.emphasis && (Jx(e.emphasis, "label"), Jx(e.emphasis, "upperLabel"), Jx(e.emphasis, "edgeLabel"));
		var t = e.markPoint;
		t && (Gx(t), Yx(t));
		var n = e.markLine;
		n && (Gx(n), Yx(n));
		var r = e.markArea;
		r && Yx(r);
		var i = e.data;
		if (e.type === "graph") {
			i ||= e.nodes;
			var a = e.links || e.edges;
			if (a && !fe(a)) for (var o = 0; o < a.length; o++) Yx(a[o]);
			I(e.categories, function(e) {
				qx(e);
			});
		}
		if (i && !fe(i)) for (var o = 0; o < i.length; o++) Yx(i[o]);
		if (t = e.markPoint, t && t.data) for (var s = t.data, o = 0; o < s.length; o++) Yx(s[o]);
		if (n = e.markLine, n && n.data) for (var c = n.data, o = 0; o < c.length; o++) H(c[o]) ? (Yx(c[o][0]), Yx(c[o][1])) : Yx(c[o]);
		e.type === "gauge" ? (Jx(e, "axisLabel"), Jx(e, "title"), Jx(e, "detail")) : e.type === "treemap" ? (Kx(e.breadcrumb, "itemStyle"), I(e.levels, function(e) {
			qx(e);
		})) : e.type === "tree" && qx(e.leaves);
	}
}
function Zx(e) {
	return H(e) ? e : e ? [e] : [];
}
function Qx(e) {
	return (H(e) ? e[0] : e) || {};
}
function $x(e, t) {
	Hx(Zx(e.series), function(e) {
		Ux(e) && Xx(e);
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
	t && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Hx(n, function(t) {
		Hx(Zx(e[t]), function(e) {
			e && (Jx(e, "axisLabel"), Jx(e.axisPointer, "label"));
		});
	}), Hx(Zx(e.parallel), function(e) {
		var t = e && e.parallelAxisDefault;
		Jx(t, "axisLabel"), Jx(t && t.axisPointer, "label");
	}), Hx(Zx(e.calendar), function(e) {
		Kx(e, "itemStyle"), Jx(e, "dayLabel"), Jx(e, "monthLabel"), Jx(e, "yearLabel");
	}), Hx(Zx(e.radar), function(e) {
		Jx(e, "name"), e.name && e.axisName == null && (e.axisName = e.name, delete e.name), e.nameGap != null && e.axisNameGap == null && (e.axisNameGap = e.nameGap, delete e.nameGap);
	}), Hx(Zx(e.geo), function(e) {
		Ux(e) && (Yx(e), Hx(Zx(e.regions), function(e) {
			Yx(e);
		}));
	}), Hx(Zx(e.timeline), function(e) {
		Yx(e), Kx(e, "label"), Kx(e, "itemStyle"), Kx(e, "controlStyle", !0);
		var t = e.data;
		H(t) && I(t, function(e) {
			G(e) && (Kx(e, "label"), Kx(e, "itemStyle"));
		});
	}), Hx(Zx(e.toolbox), function(e) {
		Kx(e, "iconStyle"), Hx(e.feature, function(e) {
			Kx(e, "iconStyle");
		});
	}), Jx(Qx(e.axisPointer), "label"), Jx(Qx(e.tooltip).axisPointer, "label");
}
//#endregion
//#region node_modules/echarts/lib/preprocessor/backwardCompat.js
function eS(e, t) {
	for (var n = t.split(","), r = e, i = 0; i < n.length && (r &&= r[n[i]], r != null); i++);
	return r;
}
function tS(e, t, n, r) {
	for (var i = t.split(","), a = e, o, s = 0; s < i.length - 1; s++) o = i[s], a[o] ?? (a[o] = {}), a = a[o];
	(r || a[i[s]] == null) && (a[i[s]] = n);
}
function nS(e) {
	e && I(rS, function(t) {
		t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
	});
}
var rS = [
	["x", "left"],
	["y", "top"],
	["x2", "right"],
	["y2", "bottom"]
], iS = [
	"grid",
	"geo",
	"parallel",
	"legend",
	"toolbox",
	"title",
	"visualMap",
	"dataZoom",
	"timeline"
], aS = [
	["borderRadius", "barBorderRadius"],
	["borderColor", "barBorderColor"],
	["borderWidth", "barBorderWidth"]
];
function oS(e) {
	var t = e && e.itemStyle;
	if (t) for (var n = 0; n < aS.length; n++) {
		var r = aS[n][1], i = aS[n][0];
		t[r] != null && (t[i] = t[r]);
	}
}
function sS(e) {
	e && e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (e.edgeDistance = e.margin);
}
function cS(e) {
	e && e.downplay && !e.blur && (e.blur = e.downplay);
}
function lS(e) {
	e && e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus ?? (e.emphasis.focus = "adjacency"));
}
function uS(e, t) {
	if (e) for (var n = 0; n < e.length; n++) t(e[n]), e[n] && uS(e[n].children, t);
}
function dS(e, t) {
	$x(e, t), e.series = ys(e.series), I(e.series, function(e) {
		if (G(e)) {
			var t = e.type;
			if (t === "line") e.clipOverflow != null && (e.clip = e.clipOverflow);
			else if (t === "pie" || t === "gauge") {
				e.clockWise != null && (e.clockwise = e.clockWise), sS(e.label);
				var n = e.data;
				if (n && !fe(n)) for (var r = 0; r < n.length; r++) sS(n[r]);
				e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (e.emphasis.scaleSize = e.hoverOffset));
			} else if (t === "gauge") {
				var i = eS(e, "pointer.color");
				i != null && tS(e, "itemStyle.color", i);
			} else if (t === "bar") {
				oS(e), oS(e.backgroundStyle), oS(e.emphasis);
				var n = e.data;
				if (n && !fe(n)) for (var r = 0; r < n.length; r++) typeof n[r] == "object" && (oS(n[r]), oS(n[r] && n[r].emphasis));
			} else if (t === "sunburst") {
				var a = e.highlightPolicy;
				a && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = a)), cS(e), uS(e.data, cS);
			} else t === "graph" || t === "sankey" ? lS(e) : t === "map" && (e.mapType && !e.map && (e.map = e.mapType), e.mapLocation && P(e, e.mapLocation));
			e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (e.emphasis.scale = e.hoverAnimation)), nS(e);
		}
	}), e.dataRange && (e.visualMap = e.dataRange), I(iS, function(t) {
		var n = e[t];
		n && (H(n) || (n = [n]), I(n, function(e) {
			nS(e);
		}));
	});
}
//#endregion
//#region node_modules/echarts/lib/processor/dataStack.js
function fS(e) {
	var t = q();
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
			r.length && i.setCalculationInfo("stackedOnSeries", r[r.length - 1].seriesModel), r.push(a);
		}
	}), t.each(pS);
}
function pS(e) {
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
						d = $o(d, _), m = _;
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
var mS = function() {
	function e() {
		this.group = new Dl(), this.uid = Gp("viewComponent");
	}
	return e.prototype.init = function(e, t) {}, e.prototype.render = function(e, t, n, r) {}, e.prototype.dispose = function(e, t) {}, e.prototype.updateView = function(e, t, n, r) {}, e.prototype.updateLayout = function(e, t, n, r) {}, e.prototype.updateVisual = function(e, t, n, r) {}, e.prototype.toggleBlurSeries = function(e, t, n) {}, e.prototype.eachRendered = function(e) {
		var t = this.group;
		t && t.traverse(e);
	}, e;
}();
We(mS), Ze(mS);
//#endregion
//#region node_modules/echarts/lib/visual/style.js
var hS = Bs(), gS = {
	itemStyle: Qe(Id, !0),
	lineStyle: Qe(Nd, !0)
}, _S = {
	lineStyle: "stroke",
	itemStyle: "fill"
};
function vS(e, t) {
	return e.visualStyleMapper || gS[t] || (console.warn("Unknown style type '" + t + "'."), gS.itemStyle);
}
function yS(e, t) {
	return e.visualDrawType || _S[t] || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var bS = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		var n = e.getData(), r = e.visualStyleAccessPath || "itemStyle", i = e.getModel(r), a = vS(e, r)(i), o = i.getShallow("decal");
		o && (n.setVisual("decal", o), o.dirty = !0);
		var s = yS(e, r), c = a[s], l = U(c) ? c : null, u = a.fill === "auto" || a.stroke === "auto";
		if (!a[s] || l || u) {
			var d = e.getColorFromPalette(e.name, null, t.getSeriesCount());
			a[s] || (a[s] = d, n.setVisual("colorFromPalette", !0)), a.fill = a.fill === "auto" || U(a.fill) ? d : a.fill, a.stroke = a.stroke === "auto" || U(a.stroke) ? d : a.stroke;
		}
		if (n.setVisual("style", a), n.setVisual("drawType", s), !t.isSeriesFiltered(e) && l) return n.setVisual("colorFromPalette", !1), { dataEach: function(t, n) {
			var r = e.getDataParams(n), i = N({}, a);
			i[s] = l(r), t.setItemVisual(n, "style", i);
		} };
	}
}, xS = new zd(), SS = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		if (!(e.ignoreStyleOnData || t.isSeriesFiltered(e))) {
			var n = e.getData(), r = e.visualStyleAccessPath || "itemStyle", i = vS(e, r), a = n.getVisual("drawType");
			return { dataEach: n.hasItemOption ? function(e, t) {
				var n = e.getRawDataItem(t);
				if (n && n[r]) {
					xS.option = n[r];
					var o = i(xS);
					N(e.ensureUniqueItemVisual(t, "style"), o), xS.option.decal && (e.setItemVisual(t, "decal", xS.option.decal), xS.option.decal.dirty = !0), a in o && e.setItemVisual(t, "colorFromPalette", !1);
				}
			} : null };
		}
	}
}, CS = {
	performRawSeries: !0,
	overallReset: function(e) {
		var t = q();
		e.eachSeries(function(e) {
			var n = e.getColorBy();
			if (!e.isColorBySeries()) {
				var r = e.type + "-" + n, i = t.get(r);
				i || (i = {}, t.set(r, i)), hS(e).scope = i;
			}
		}), e.eachSeries(function(t) {
			if (!(t.isColorBySeries() || e.isSeriesFiltered(t))) {
				var n = t.getRawData(), r = {}, i = t.getData(), a = hS(t).scope, o = yS(t, t.visualStyleAccessPath || "itemStyle");
				i.each(function(e) {
					var t = i.getRawIndex(e);
					r[t] = e;
				}), n.each(function(e) {
					var s = r[e];
					if (i.getItemVisual(s, "colorFromPalette")) {
						var c = i.ensureUniqueItemVisual(s, "style"), l = n.getName(e) || e + "", u = n.count();
						c[o] = t.getColorFromPalette(l, a, u);
					}
				});
			}
		});
	}
}, wS = Math.PI;
function TS(e, t) {
	t ||= {}, P(t, {
		text: "loading",
		textColor: "#000",
		fontSize: 12,
		fontWeight: "normal",
		fontStyle: "normal",
		fontFamily: "sans-serif",
		maskColor: "rgba(255, 255, 255, 0.8)",
		showSpinner: !0,
		color: "#5470c6",
		spinnerRadius: 10,
		lineWidth: 5,
		zlevel: 0
	});
	var n = new Dl(), r = new Co({
		style: { fill: t.maskColor },
		zlevel: t.zlevel,
		z: 1e4
	});
	n.add(r);
	var i = new Do({
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
	}), a = new Co({
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
	return t.showSpinner && (o = new du({
		shape: {
			startAngle: -wS / 2,
			endAngle: -wS / 2 + .1,
			r: t.spinnerRadius
		},
		style: {
			stroke: t.color,
			lineCap: "round",
			lineWidth: t.lineWidth
		},
		zlevel: t.zlevel,
		z: 10001
	}), o.animateShape(!0).when(1e3, { endAngle: wS * 3 / 2 }).start("circularInOut"), o.animateShape(!0).when(1e3, { startAngle: wS * 3 / 2 }).delay(300).start("circularInOut"), n.add(o)), n.resize = function() {
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
var ES = function() {
	function e(e, t, n, r) {
		this._stageTaskMap = q(), this.ecInstance = e, this.api = t, n = this._dataProcessorHandlers = n.slice(), r = this._visualHandlers = r.slice(), this._allHandlers = n.concat(r);
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
		var n = this._pipelineMap.get(e.uid), r = e.getData().count(), i = n.progressiveEnabled && t.incrementalPrepareRender && r >= n.threshold, a = e.get("large") && r >= e.get("largeThreshold");
		e.pipelineContext = n.context = {
			progressiveRender: i,
			modDataCount: e.get("progressiveChunkMode") === "mod" ? r : null,
			large: a
		};
	}, e.prototype.restorePipelines = function(e) {
		var t = this, n = t._pipelineMap = q();
		e.eachSeries(function(e) {
			var r = e.getProgressive(), i = e.uid;
			n.set(i, {
				id: i,
				head: null,
				tail: null,
				threshold: e.getProgressiveThreshold(),
				progressiveEnabled: r && !(e.preventIncremental && e.preventIncremental()),
				blockIndex: -1,
				step: Math.round(r || 700),
				count: 0
			}), t._pipe(e, e.dataTask);
		});
	}, e.prototype.prepareStageTasks = function() {
		var e = this._stageTaskMap, t = this.api.getModel(), n = this.api;
		I(this._allHandlers, function(r) {
			var i = e.get(r.uid) || e.set(r.uid, {});
			Se(!(r.reset && r.overallReset), ""), r.reset && this._createSeriesStageTask(r, i, t, n), r.overallReset && this._createOverallStageTask(r, i, t, n);
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
		var i = this, a = t.seriesTaskMap, o = t.seriesTaskMap = q(), s = e.seriesType, c = e.getTargetSeries;
		e.createOnAllSeries ? n.eachRawSeries(l) : s ? n.eachRawSeriesByType(s, l) : c && c(n, r).each(l);
		function l(t) {
			var s = t.uid, c = o.set(s, a && a.get(s) || Mh({
				plan: jS,
				reset: MS,
				count: FS
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
		var i = this, a = t.overallTask = t.overallTask || Mh({ reset: DS });
		a.context = {
			ecModel: n,
			api: r,
			overallReset: e.overallReset,
			scheduler: i
		};
		var o = a.agentStubMap, s = a.agentStubMap = q(), c = e.seriesType, l = e.getTargetSeries, u = !0, d = !1;
		Se(!e.createOnAllSeries, ""), c ? n.eachRawSeriesByType(c, f) : l ? l(n, r).each(f) : (u = !1, I(n.getSeries(), f));
		function f(e) {
			var t = e.uid, n = s.set(t, o && o.get(t) || (d = !0, Mh({
				reset: OS,
				onDirty: AS
			})));
			n.context = {
				model: e,
				overallProgress: u
			}, n.agent = a, n.__block = u, i._pipe(e, n);
		}
		d && a.dirty();
	}, e.prototype._pipe = function(e, t) {
		var n = e.uid, r = this._pipelineMap.get(n);
		!r.head && (r.head = t), r.tail && r.tail.pipe(t), r.tail = t, t.__idxInPipeline = r.count++, t.__pipeline = r;
	}, e.wrapStageHandler = function(e, t) {
		return U(e) && (e = {
			overallReset: e,
			seriesType: IS(e)
		}), e.uid = Gp("stageHandler"), t && (e.visualType = t), e;
	}, e;
}();
function DS(e) {
	e.overallReset(e.ecModel, e.api, e.payload);
}
function OS(e) {
	return e.overallProgress && kS;
}
function kS() {
	this.agent.dirty(), this.getDownstream().dirty();
}
function AS() {
	this.agent && this.agent.dirty();
}
function jS(e) {
	return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null;
}
function MS(e) {
	e.useClearVisual && e.data.clearAllVisual();
	var t = e.resetDefines = ys(e.reset(e.model, e.ecModel, e.api, e.payload));
	return t.length > 1 ? L(t, function(e, t) {
		return PS(t);
	}) : NS;
}
var NS = PS(0);
function PS(e) {
	return function(t, n) {
		var r = n.data, i = n.resetDefines[e];
		if (i && i.dataEach) for (var a = t.start; a < t.end; a++) i.dataEach(r, a);
		else i && i.progress && i.progress(t, r);
	};
}
function FS(e) {
	return e.data.count();
}
function IS(e) {
	zS = null;
	try {
		e(LS, RS);
	} catch {}
	return zS;
}
var LS = {}, RS = {}, zS;
BS(LS, Ox), BS(RS, Fx), LS.eachSeriesByType = LS.eachRawSeriesByType = function(e) {
	zS = e;
}, LS.eachComponent = function(e) {
	e.mainType === "series" && e.subType && (zS = e.subType);
};
function BS(e, t) {
	for (var n in t.prototype) e[n] = Pe;
}
//#endregion
//#region node_modules/echarts/lib/theme/light.js
var VS = [
	"#37A2DA",
	"#32C5E9",
	"#67E0E3",
	"#9FE6B8",
	"#FFDB5C",
	"#ff9f7f",
	"#fb7293",
	"#E062AE",
	"#E690D1",
	"#e7bcf3",
	"#9d96f5",
	"#8378EA",
	"#96BFFF"
], HS = {
	color: VS,
	colorLayer: [
		[
			"#37A2DA",
			"#ffd85c",
			"#fd7b5f"
		],
		[
			"#37A2DA",
			"#67E0E3",
			"#FFDB5C",
			"#ff9f7f",
			"#E062AE",
			"#9d96f5"
		],
		[
			"#37A2DA",
			"#32C5E9",
			"#9FE6B8",
			"#FFDB5C",
			"#ff9f7f",
			"#fb7293",
			"#e7bcf3",
			"#8378EA",
			"#96BFFF"
		],
		VS
	]
}, US = "#B9B8CE", WS = "#100C2A", GS = function() {
	return {
		axisLine: { lineStyle: { color: US } },
		splitLine: { lineStyle: { color: "#484753" } },
		splitArea: { areaStyle: { color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"] } },
		minorSplitLine: { lineStyle: { color: "#20203B" } }
	};
}, KS = [
	"#4992ff",
	"#7cffb2",
	"#fddd60",
	"#ff6e76",
	"#58d9f9",
	"#05c091",
	"#ff8a45",
	"#8d48e3",
	"#dd79ff"
], qS = {
	darkMode: !0,
	color: KS,
	backgroundColor: WS,
	axisPointer: {
		lineStyle: { color: "#817f91" },
		crossStyle: { color: "#817f91" },
		label: { color: "#fff" }
	},
	legend: {
		textStyle: { color: US },
		pageTextStyle: { color: US }
	},
	textStyle: { color: US },
	title: {
		textStyle: { color: "#EEF1FA" },
		subtextStyle: { color: "#B9B8CE" }
	},
	toolbox: { iconStyle: { borderColor: US } },
	dataZoom: {
		borderColor: "#71708A",
		textStyle: { color: US },
		brushStyle: { color: "rgba(135,163,206,0.3)" },
		handleStyle: {
			color: "#353450",
			borderColor: "#C5CBE3"
		},
		moveHandleStyle: {
			color: "#B0B6C3",
			opacity: .3
		},
		fillerColor: "rgba(135,163,206,0.2)",
		emphasis: {
			handleStyle: {
				borderColor: "#91B7F2",
				color: "#4D587D"
			},
			moveHandleStyle: {
				color: "#636D9A",
				opacity: .7
			}
		},
		dataBackground: {
			lineStyle: {
				color: "#71708A",
				width: 1
			},
			areaStyle: { color: "#71708A" }
		},
		selectedDataBackground: {
			lineStyle: { color: "#87A3CE" },
			areaStyle: { color: "#87A3CE" }
		}
	},
	visualMap: { textStyle: { color: US } },
	timeline: {
		lineStyle: { color: US },
		label: { color: US },
		controlStyle: {
			color: US,
			borderColor: US
		}
	},
	calendar: {
		itemStyle: { color: WS },
		dayLabel: { color: US },
		monthLabel: { color: US },
		yearLabel: { color: US }
	},
	timeAxis: GS(),
	logAxis: GS(),
	valueAxis: GS(),
	categoryAxis: GS(),
	line: { symbol: "circle" },
	graph: { color: KS },
	gauge: {
		title: { color: US },
		axisLine: { lineStyle: { color: [[1, "rgba(207,212,219,0.2)"]] } },
		axisLabel: { color: US },
		detail: { color: "#EEF1FA" }
	},
	candlestick: { itemStyle: {
		color: "#f64e56",
		color0: "#54ea92",
		borderColor: "#f64e56",
		borderColor0: "#54ea92"
	} }
};
qS.categoryAxis.splitLine.show = !1;
//#endregion
//#region node_modules/echarts/lib/util/ECEventProcessor.js
var JS = function() {
	function e() {}
	return e.prototype.normalizeQuery = function(e) {
		var t = {}, n = {}, r = {};
		if (W(e)) {
			var i = Ve(e);
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
}(), YS = [
	"symbol",
	"symbolSize",
	"symbolRotate",
	"symbolOffset"
], XS = YS.concat(["symbolKeepAspect"]), ZS = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		var n = e.getData();
		if (e.legendIcon && n.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual) return;
		for (var r = {}, i = {}, a = !1, o = 0; o < YS.length; o++) {
			var s = YS[o], c = e.get(s);
			U(c) ? (a = !0, i[s] = c) : r[s] = c;
		}
		if (r.symbol = r.symbol || e.defaultSymbol, n.setVisual(N({
			legendIcon: e.legendIcon || r.symbol,
			symbolKeepAspect: e.get("symbolKeepAspect")
		}, r)), t.isSeriesFiltered(e)) return;
		var l = B(i);
		function u(t, n) {
			for (var r = e.getRawValue(n), a = e.getDataParams(n), o = 0; o < l.length; o++) {
				var s = l[o];
				t.setItemVisual(n, s, i[s](r, a));
			}
		}
		return { dataEach: a ? u : null };
	}
}, QS = {
	createOnAllSeries: !0,
	performRawSeries: !0,
	reset: function(e, t) {
		if (!e.hasSymbolVisual || t.isSeriesFiltered(e)) return;
		var n = e.getData();
		function r(e, t) {
			for (var n = e.getItemModel(t), r = 0; r < XS.length; r++) {
				var i = XS[r], a = n.getShallow(i, !0);
				a != null && e.setItemVisual(t, i, a);
			}
		}
		return { dataEach: n.hasItemOption ? r : null };
	}
};
//#endregion
//#region node_modules/echarts/lib/visual/helper.js
function $S(e, t, n) {
	switch (n) {
		case "color": return e.getItemVisual(t, "style")[e.getVisual("drawType")];
		case "opacity": return e.getItemVisual(t, "style").opacity;
		case "symbol":
		case "symbolSize":
		case "liftZ": return e.getItemVisual(t, n);
	}
}
function eC(e, t) {
	switch (t) {
		case "color": return e.getVisual("style")[e.getVisual("drawType")];
		case "opacity": return e.getVisual("style").opacity;
		case "symbol":
		case "symbolSize":
		case "liftZ": return e.getVisual(t);
	}
}
function tC(e, t, n, r) {
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
function nC(e, t, n) {
	for (var r; e && !(t(e) && (r = e, n));) e = e.__hostTarget || e.parent;
	return r;
}
//#endregion
//#region node_modules/zrender/lib/core/WeakMap.js
var rC = Math.round(Math.random() * 9), iC = typeof Object.defineProperty == "function", aC = function() {
	function e() {
		this._id = "__ec_inner_" + rC++;
	}
	return e.prototype.get = function(e) {
		return this._guard(e)[this._id];
	}, e.prototype.set = function(e, t) {
		var n = this._guard(e);
		return iC ? Object.defineProperty(n, this._id, {
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
function oC(e) {
	return isFinite(e);
}
function sC(e, t, n) {
	var r = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
	return t.global || (r = r * n.width + n.x, i = i * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), r = oC(r) ? r : 0, i = oC(i) ? i : 1, a = oC(a) ? a : 0, o = oC(o) ? o : 0, e.createLinearGradient(r, a, i, o);
}
function cC(e, t, n) {
	var r = n.width, i = n.height, a = Math.min(r, i), o = t.x == null ? .5 : t.x, s = t.y == null ? .5 : t.y, c = t.r == null ? .5 : t.r;
	return t.global || (o = o * r + n.x, s = s * i + n.y, c *= a), o = oC(o) ? o : .5, s = oC(s) ? s : .5, c = c >= 0 && oC(c) ? c : .5, e.createRadialGradient(o, s, 0, o, s, c);
}
function lC(e, t, n) {
	for (var r = t.type === "radial" ? cC(e, t, n) : sC(e, t, n), i = t.colorStops, a = 0; a < i.length; a++) r.addColorStop(i[a].offset, i[a].color);
	return r;
}
function uC(e, t) {
	if (e === t || !e && !t) return !1;
	if (!e || !t || e.length !== t.length) return !0;
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
	return !1;
}
function dC(e) {
	return parseInt(e, 10);
}
function fC(e, t, n) {
	var r = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
	if (n[r] != null && n[r] !== "auto") return parseFloat(n[r]);
	var s = document.defaultView.getComputedStyle(e);
	return (e[i] || dC(s[r]) || dC(e.style[r])) - (dC(s[a]) || 0) - (dC(s[o]) || 0) | 0;
}
//#endregion
//#region node_modules/zrender/lib/canvas/dashStyle.js
function pC(e, t) {
	return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : ue(e) ? [e] : H(e) ? e : null;
}
function mC(e) {
	var t = e.style, n = t.lineDash && t.lineWidth > 0 && pC(t.lineDash, t.lineWidth), r = t.lineDashOffset;
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
var hC = new La(!0);
function gC(e) {
	var t = e.stroke;
	return !(t == null || t === "none" || !(e.lineWidth > 0));
}
function _C(e) {
	return typeof e == "string" && e !== "none";
}
function vC(e) {
	var t = e.fill;
	return t != null && t !== "none";
}
function yC(e, t) {
	if (t.fillOpacity != null && t.fillOpacity !== 1) {
		var n = e.globalAlpha;
		e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = n;
	} else e.fill();
}
function bC(e, t) {
	if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
		var n = e.globalAlpha;
		e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = n;
	} else e.stroke();
}
function xC(e, t, n) {
	var r = ot(t.image, t.__image, n);
	if (ct(r)) {
		var i = e.createPattern(r, t.repeat || "repeat");
		if (typeof DOMMatrix == "function" && i && i.setTransform) {
			var a = new DOMMatrix();
			a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Fe), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
		}
		return i;
	}
}
function SC(e, t, n, r) {
	var i, a = gC(n), o = vC(n), s = n.strokePercent, c = s < 1, l = !t.path;
	(!t.silent || c) && l && t.createPathProxy();
	var u = t.path || hC, d = t.__dirty;
	if (!r) {
		var f = n.fill, p = n.stroke, m = o && !!f.colorStops, h = a && !!p.colorStops, g = o && !!f.image, _ = a && !!p.image, v = void 0, y = void 0, b = void 0, x = void 0, S = void 0;
		(m || h) && (S = t.getBoundingRect()), m && (v = d ? lC(e, f, S) : t.__canvasFillGradient, t.__canvasFillGradient = v), h && (y = d ? lC(e, p, S) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = y), g && (b = d || !t.__canvasFillPattern ? xC(e, f, t) : t.__canvasFillPattern, t.__canvasFillPattern = b), _ && (x = d || !t.__canvasStrokePattern ? xC(e, p, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = b), m ? e.fillStyle = v : g && (b ? e.fillStyle = b : o = !1), h ? e.strokeStyle = y : _ && (x ? e.strokeStyle = x : a = !1);
	}
	var C = t.getGlobalScale();
	u.setScale(C[0], C[1], t.segmentIgnoreThreshold);
	var w, T;
	e.setLineDash && n.lineDash && (i = mC(t), w = i[0], T = i[1]);
	var E = !0;
	(l || d & 4) && (u.setDPR(e.dpr), c ? u.setContext(null) : (u.setContext(e), E = !1), u.reset(), t.buildPath(u, t.shape, r), u.toStatic(), t.pathUpdated()), E && u.rebuildPath(e, c ? s : 1), w && (e.setLineDash(w), e.lineDashOffset = T), r || (n.strokeFirst ? (a && bC(e, n), o && yC(e, n)) : (o && yC(e, n), a && bC(e, n))), w && e.setLineDash([]);
}
function CC(e, t, n) {
	var r = t.__image = ot(n.image, t.__image, t, t.onload);
	if (r && ct(r)) {
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
function wC(e, t, n) {
	var r, i = n.text;
	if (i != null && (i += ""), i) {
		e.font = n.font || "12px sans-serif", e.textAlign = n.textAlign, e.textBaseline = n.textBaseline;
		var a = void 0, o = void 0;
		e.setLineDash && n.lineDash && (r = mC(t), a = r[0], o = r[1]), a && (e.setLineDash(a), e.lineDashOffset = o), n.strokeFirst ? (gC(n) && e.strokeText(i, n.x, n.y), vC(n) && e.fillText(i, n.x, n.y)) : (vC(n) && e.fillText(i, n.x, n.y), gC(n) && e.strokeText(i, n.x, n.y)), a && e.setLineDash([]);
	}
}
var TC = [
	"shadowBlur",
	"shadowOffsetX",
	"shadowOffsetY"
], EC = [
	["lineCap", "butt"],
	["lineJoin", "miter"],
	["miterLimit", 10]
];
function DC(e, t, n, r, i) {
	var a = !1;
	if (!r && (n ||= {}, t === n)) return !1;
	if (r || t.opacity !== n.opacity) {
		RC(e, i), a = !0;
		var o = Math.max(Math.min(t.opacity, 1), 0);
		e.globalAlpha = isNaN(o) ? Zi.opacity : o;
	}
	(r || t.blend !== n.blend) && (a ||= (RC(e, i), !0), e.globalCompositeOperation = t.blend || Zi.blend);
	for (var s = 0; s < TC.length; s++) {
		var c = TC[s];
		(r || t[c] !== n[c]) && (a ||= (RC(e, i), !0), e[c] = e.dpr * (t[c] || 0));
	}
	return (r || t.shadowColor !== n.shadowColor) && (a ||= (RC(e, i), !0), e.shadowColor = t.shadowColor || Zi.shadowColor), a;
}
function OC(e, t, n, r, i) {
	var a = zC(t, i.inHover), o = r ? null : n && zC(n, i.inHover) || {};
	if (a === o) return !1;
	var s = DC(e, a, o, r, i);
	if ((r || a.fill !== o.fill) && (s ||= (RC(e, i), !0), _C(a.fill) && (e.fillStyle = a.fill)), (r || a.stroke !== o.stroke) && (s ||= (RC(e, i), !0), _C(a.stroke) && (e.strokeStyle = a.stroke)), (r || a.opacity !== o.opacity) && (s ||= (RC(e, i), !0), e.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
		var c = a.lineWidth / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
		e.lineWidth !== c && (s ||= (RC(e, i), !0), e.lineWidth = c);
	}
	for (var l = 0; l < EC.length; l++) {
		var u = EC[l], d = u[0];
		(r || a[d] !== o[d]) && (s ||= (RC(e, i), !0), e[d] = a[d] || u[1]);
	}
	return s;
}
function kC(e, t, n, r, i) {
	return DC(e, zC(t, i.inHover), n && zC(n, i.inHover), r, i);
}
function AC(e, t) {
	var n = t.transform, r = e.dpr || 1;
	n ? e.setTransform(r * n[0], r * n[1], r * n[2], r * n[3], r * n[4], r * n[5]) : e.setTransform(r, 0, 0, r, 0, 0);
}
function jC(e, t, n) {
	for (var r = !1, i = 0; i < e.length; i++) {
		var a = e[i];
		r ||= a.isZeroArea(), AC(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
	}
	n.allClipped = r;
}
function MC(e, t) {
	return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t);
}
var NC = 1, PC = 2, FC = 3, IC = 4;
function LC(e) {
	var t = vC(e), n = gC(e);
	return !(e.lineDash || !(+t ^ n) || t && typeof e.fill != "string" || n && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1);
}
function RC(e, t) {
	t.batchFill && e.fill(), t.batchStroke && e.stroke(), t.batchFill = "", t.batchStroke = "";
}
function zC(e, t) {
	return t && e.__hoverStyle || e.style;
}
function BC(e, t) {
	VC(e, t, {
		inHover: !1,
		viewWidth: 0,
		viewHeight: 0
	}, !0);
}
function VC(e, t, n, r) {
	var i = t.transform;
	if (!t.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) t.__dirty &= -2, t.__isRendered = !1;
	else {
		var a = t.__clipPaths, o = n.prevElClipPaths, s = !1, c = !1;
		if ((!o || uC(a, o)) && (o && o.length && (RC(e, n), e.restore(), c = s = !0, n.prevElClipPaths = null, n.allClipped = !1, n.prevEl = null), a && a.length && (RC(e, n), e.save(), jC(a, e, n), s = !0), n.prevElClipPaths = a), n.allClipped) t.__isRendered = !1;
		else {
			t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
			var l = n.prevEl;
			l || (c = s = !0);
			var u = t instanceof co && t.autoBatch && LC(t.style);
			s || MC(i, l.transform) ? (RC(e, n), AC(e, t)) : u || RC(e, n);
			var d = zC(t, n.inHover);
			t instanceof co ? (n.lastDrawType !== NC && (c = !0, n.lastDrawType = NC), OC(e, t, l, c, n), (!u || !n.batchFill && !n.batchStroke) && e.beginPath(), SC(e, t, d, u), u && (n.batchFill = d.fill || "", n.batchStroke = d.stroke || "")) : t instanceof uo ? (n.lastDrawType !== FC && (c = !0, n.lastDrawType = FC), OC(e, t, l, c, n), wC(e, t, d)) : t instanceof ho ? (n.lastDrawType !== PC && (c = !0, n.lastDrawType = PC), kC(e, t, l, c, n), CC(e, t, d)) : t.getTemporalDisplayables && (n.lastDrawType !== IC && (c = !0, n.lastDrawType = IC), HC(e, t, n)), u && r && RC(e, n), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), n.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
		}
	}
}
function HC(e, t, n) {
	var r = t.getDisplayables(), i = t.getTemporalDisplayables();
	e.save();
	for (var a = {
		prevElClipPaths: null,
		prevEl: null,
		allClipped: !1,
		viewWidth: n.viewWidth,
		viewHeight: n.viewHeight,
		inHover: n.inHover
	}, o = t.getCursor(), s = r.length; o < s; o++) {
		var c = r[o];
		c.beforeBrush && c.beforeBrush(), c.innerBeforeBrush(), VC(e, c, a, o === s - 1), c.innerAfterBrush(), c.afterBrush && c.afterBrush(), a.prevEl = c;
	}
	for (var l = 0, u = i.length; l < u; l++) {
		var c = i[l];
		c.beforeBrush && c.beforeBrush(), c.innerBeforeBrush(), VC(e, c, a, l === u - 1), c.innerAfterBrush(), c.afterBrush && c.afterBrush(), a.prevEl = c;
	}
	t.clearTemporalDisplayables(), t.notClear = !0, e.restore();
}
//#endregion
//#region node_modules/echarts/lib/util/decal.js
var UC = new aC(), WC = new rt(100), GC = [
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
function KC(e, t) {
	if (e === "none") return null;
	var n = t.getDevicePixelRatio(), r = t.getZr(), i = r.painter.type === "svg";
	e.dirty && UC.delete(e);
	var a = UC.get(e);
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
	return c(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / n, UC.set(e, s), e.dirty = !1, s;
	function c(e) {
		for (var t = [n], a = !0, s = 0; s < GC.length; ++s) {
			var c = o[GC[s]];
			if (c != null && !H(c) && !W(c) && !ue(c) && typeof c != "boolean") {
				a = !1;
				break;
			}
			t.push(c);
		}
		var l;
		if (a) {
			l = t.join(",") + (i ? "-svg" : "");
			var u = WC.get(l);
			u && (i ? e.svgElement = u : e.image = u);
		}
		var d = JC(o.dashArrayX), f = YC(o.dashArrayY), p = qC(o.symbol), m = XC(d), g = ZC(f), _ = !i && h.createCanvas(), v = i && {
			tag: "g",
			attrs: {},
			key: "dcl",
			children: []
		}, y = x(), b;
		_ && (_.width = y.width * n, _.height = y.height * n, b = _.getContext("2d")), S(), a && WC.put(l, _ || v), e.image = _, e.svgElement = v, e.svgWidth = y.width, e.svgHeight = y.height;
		function x() {
			for (var e = 1, t = 0, n = m.length; t < n; ++t) e = ms(e, m[t]);
			for (var r = 1, t = 0, n = p.length; t < n; ++t) r = ms(r, p[t].length);
			e *= r;
			var i = g * m.length * p.length;
			return {
				width: Math.max(1, Math.min(e, o.maxTileWidth)),
				height: Math.max(1, Math.min(i, o.maxTileHeight))
			};
		}
		function S() {
			b && (b.clearRect(0, 0, _.width, _.height), o.backgroundColor && (b.fillStyle = o.backgroundColor, b.fillRect(0, 0, _.width, _.height)));
			for (var e = 0, t = 0; t < f.length; ++t) e += f[t];
			if (e <= 0) return;
			for (var a = -g, s = 0, c = 0, l = 0; a < y.height;) {
				if (s % 2 == 0) {
					for (var u = c / 2 % p.length, m = 0, h = 0, x = 0; m < y.width * 2;) {
						for (var S = 0, t = 0; t < d[l].length; ++t) S += d[l][t];
						if (S <= 0) break;
						if (h % 2 == 0) {
							var C = (1 - o.symbolSize) * .5, w = m + d[l][h] * C, T = a + f[s] * C, E = d[l][h] * o.symbolSize, D = f[s] * o.symbolSize, O = x / 2 % p[u].length;
							k(w, T, E, D, p[u][O]);
						}
						m += d[l][h], ++x, ++h, h === d[l].length && (h = 0);
					}
					++l, l === d.length && (l = 0);
				}
				a += f[s], ++c, ++s, s === f.length && (s = 0);
			}
			function k(e, t, a, s, c) {
				var l = i ? 1 : n, u = Ig(c, e * l, t * l, a * l, s * l, o.color, o.symbolKeepAspect);
				if (i) {
					var d = r.painter.renderOneToVNode(u);
					d && v.children.push(d);
				} else BC(b, u);
			}
		}
	}
}
function qC(e) {
	if (!e || e.length === 0) return [["rect"]];
	if (W(e)) return [[e]];
	for (var t = !0, n = 0; n < e.length; ++n) if (!W(e[n])) {
		t = !1;
		break;
	}
	if (t) return qC([e]);
	for (var r = [], n = 0; n < e.length; ++n) W(e[n]) ? r.push([e[n]]) : r.push(e[n]);
	return r;
}
function JC(e) {
	if (!e || e.length === 0) return [[0, 0]];
	if (ue(e)) {
		var t = Math.ceil(e);
		return [[t, t]];
	}
	for (var n = !0, r = 0; r < e.length; ++r) if (!ue(e[r])) {
		n = !1;
		break;
	}
	if (n) return JC([e]);
	for (var i = [], r = 0; r < e.length; ++r) if (ue(e[r])) {
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
function YC(e) {
	if (!e || typeof e == "object" && e.length === 0) return [0, 0];
	if (ue(e)) {
		var t = Math.ceil(e);
		return [t, t];
	}
	var n = L(e, function(e) {
		return Math.ceil(e);
	});
	return e.length % 2 ? n.concat(n) : n;
}
function XC(e) {
	return L(e, function(e) {
		return ZC(e);
	});
}
function ZC(e) {
	for (var t = 0, n = 0; n < e.length; ++n) t += e[n];
	return e.length % 2 == 1 ? t * 2 : t;
}
//#endregion
//#region node_modules/echarts/lib/visual/decal.js
function QC(e, t) {
	e.eachRawSeries(function(n) {
		if (!e.isSeriesFiltered(n)) {
			var r = n.getData();
			r.hasItemVisual() && r.each(function(e) {
				var n = r.getItemVisual(e, "decal");
				if (n) {
					var i = r.ensureUniqueItemVisual(e, "style");
					i.decal = KC(n, t);
				}
			});
			var i = r.getVisual("decal");
			if (i) {
				var a = r.getVisual("style");
				a.decal = KC(i, t);
			}
		}
	});
}
//#endregion
//#region node_modules/echarts/lib/core/lifecycle.js
var $C = new Ai(), ew = {};
function tw(e, t) {
	ew[e] = t;
}
function nw(e) {
	return ew[e];
}
//#endregion
//#region node_modules/echarts/lib/core/echarts.js
var rw = "5.6.0", iw = { zrender: "5.6.1" }, aw = 1, ow = 800, sw = 900, cw = 1e3, lw = 2e3, uw = 5e3, dw = 1e3, fw = 1100, pw = 2e3, mw = 3e3, hw = 4e3, gw = 4500, _w = 4600, vw = 5e3, yw = 6e3, bw = 7e3, xw = {
	PROCESSOR: {
		FILTER: cw,
		SERIES_FILTER: ow,
		STATISTIC: uw
	},
	VISUAL: {
		LAYOUT: dw,
		PROGRESSIVE_LAYOUT: fw,
		GLOBAL: pw,
		CHART: mw,
		POST_CHART_LAYOUT: _w,
		COMPONENT: hw,
		BRUSH: vw,
		CHART_ITEM: gw,
		ARIA: yw,
		DECAL: bw
	}
}, Sw = "__flagInMainProcess", Cw = "__pendingUpdate", ww = "__needsUpdateStatus", Tw = /^[a-zA-Z0-9_]+$/, Ew = "__connectUpdateStatus", Dw = 0, Ow = 1, kw = 2;
function Aw(e) {
	return function() {
		var t = [...arguments];
		if (this.isDisposed()) this.id;
		else return Mw(this, e, t);
	};
}
function jw(e) {
	return function() {
		var t = [...arguments];
		return Mw(this, e, t);
	};
}
function Mw(e, t, n) {
	return n[0] = n[0] && n[0].toLowerCase(), Ai.prototype[t].apply(e, n);
}
var Nw = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t;
}(Ai), Pw = Nw.prototype;
Pw.on = jw("on"), Pw.off = jw("off");
var Fw, Iw, Lw, Rw, zw, Bw, Vw, Hw, Uw, Ww, Gw, Kw, qw, Jw, Yw, Xw, Zw, Qw, $w = function(e) {
	c(t, e);
	function t(t, n, r) {
		var i = e.call(this, new JS()) || this;
		i._chartsViews = [], i._chartsMap = {}, i._componentsViews = [], i._componentsMap = {}, i._pendingActions = [], r ||= {}, W(n) && (n = sT[n]), i._dom = t;
		var a = "canvas", o = "auto", s = !1;
		r.ssr && hx(function(e) {
			var t = Q(e), n = t.dataIndex;
			if (n != null) {
				var r = q();
				return r.set("series_index", t.seriesIndex), r.set("data_index", n), t.ssrType && r.set("ssr_type", t.ssrType), r;
			}
		});
		var c = i._zr = cx(t, {
			renderer: r.renderer || a,
			devicePixelRatio: r.devicePixelRatio,
			width: r.width,
			height: r.height,
			ssr: r.ssr,
			useDirtyRect: K(r.useDirtyRect, s),
			useCoarsePointer: K(r.useCoarsePointer, o),
			pointerSize: r.pointerSize
		});
		i._ssr = r.ssr, i._throttledZrFlush = dv(V(c.flush, c), 17), n = j(n), n && dS(n, !0), i._theme = n, i._locale = _m(r.locale || hm), i._coordSysMgr = new Ap();
		var l = i._api = Yw(i);
		function u(e, t) {
			return e.__prio - t.__prio;
		}
		return kb(oT, u), kb(iT, u), i._scheduler = new ES(i, l, iT, oT), i._messageCenter = new Nw(), i._initEvents(), i.resize = V(i.resize, i), c.animation.on("frame", i._onframe, i), Ww(c, i), Gw(c, i), Te(i), i;
	}
	return t.prototype._onframe = function() {
		if (!this._disposed) {
			Qw(this);
			var e = this._scheduler;
			if (this[Cw]) {
				var t = this[Cw].silent;
				this[Sw] = !0;
				try {
					Fw(this), Rw.update.call(this, null, this[Cw].updateParams);
				} catch (e) {
					throw this[Sw] = !1, this[Cw] = null, e;
				}
				this._zr.flush(), this[Sw] = !1, this[Cw] = null, Hw.call(this, t), Uw.call(this, t);
			} else if (e.unfinished) {
				var n = aw, r = this._model, i = this._api;
				e.unfinished = !1;
				do {
					var a = +/* @__PURE__ */ new Date();
					e.performSeriesTasks(r), e.performDataProcessorTasks(r), Bw(this, r), e.performVisualTasks(r), Jw(this, this._model, i, "remain", {}), n -= +/* @__PURE__ */ new Date() - a;
				} while (n > 0 && e.unfinished);
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
		if (!this[Sw]) {
			if (this._disposed) this.id;
			else {
				var r, i, a;
				if (G(t) && (n = t.lazyUpdate, r = t.silent, i = t.replaceMerge, a = t.transition, t = t.notMerge), this[Sw] = !0, !this._model || t) {
					var o = new Lx(this._api), s = this._theme, c = this._model = new Ox();
					c.scheduler = this._scheduler, c.ssr = this._ssr, c.init(null, null, null, s, this._locale, o);
				}
				this._model.setOption(e, { replaceMerge: i }, aT);
				var l = {
					seriesTransition: a,
					optionChanged: !0
				};
				if (n) this[Cw] = {
					silent: r,
					updateParams: l
				}, this[Sw] = !1, this.getZr().wakeUp();
				else {
					try {
						Fw(this), Rw.update.call(this, null, l);
					} catch (e) {
						throw this[Cw] = null, this[Sw] = !1, e;
					}
					this._ssr || this._zr.flush(), this[Cw] = null, this[Sw] = !1, Hw.call(this, r), Uw.call(this, r);
				}
			}
		}
	}, t.prototype.setTheme = function() {}, t.prototype.getModel = function() {
		return this._model;
	}, t.prototype.getOption = function() {
		return this._model && this._model.getOption();
	}, t.prototype.getWidth = function() {
		return this._zr.getWidth();
	}, t.prototype.getHeight = function() {
		return this._zr.getHeight();
	}, t.prototype.getDevicePixelRatio = function() {
		return this._zr.painter.dpr || Y.hasGlobalWindow && window.devicePixelRatio || 1;
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
		if (Y.svgSupported) {
			var e = this._zr;
			return I(e.storage.getDisplayList(), function(e) {
				e.stopAnimation(null, !0);
			}), e.painter.toDataURL();
		}
	}, t.prototype.getDataURL = function(e) {
		if (this._disposed) this.id;
		else {
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
		}
	}, t.prototype.getConnectedDataURL = function(e) {
		if (this._disposed) this.id;
		else {
			var t = e.type === "svg", n = this.group, r = Math.min, i = Math.max, a = Infinity;
			if (uT[n]) {
				var o = a, s = a, c = -a, l = -a, u = [], d = e && e.pixelRatio || this.getDevicePixelRatio();
				I(lT, function(a, d) {
					if (a.group === n) {
						var f = t ? a.getZr().painter.getSvgDom().innerHTML : a.renderToCanvas(j(e)), p = a.getDom().getBoundingClientRect();
						o = r(p.left, o), s = r(p.top, s), c = i(p.right, c), l = i(p.bottom, l), u.push({
							dom: f,
							left: p.left,
							top: p.top
						});
					}
				}), o *= d, s *= d, c *= d, l *= d;
				var f = c - o, p = l - s, m = h.createCanvas(), g = cx(m, { renderer: t ? "svg" : "canvas" });
				if (g.resize({
					width: f,
					height: p
				}), t) {
					var _ = "";
					return I(u, function(e) {
						var t = e.left - o, n = e.top - s;
						_ += "<g transform=\"translate(" + t + "," + n + ")\">" + e.dom + "</g>";
					}), g.painter.getSvgRoot().innerHTML = _, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
				}
				return e.connectedBackgroundColor && g.add(new Co({
					shape: {
						x: 0,
						y: 0,
						width: f,
						height: p
					},
					style: { fill: e.connectedBackgroundColor }
				})), I(u, function(e) {
					var t = new ho({ style: {
						x: e.left * d - o,
						y: e.top * d - s,
						image: e.dom
					} });
					g.add(t);
				}), g.refreshImmediately(), m.toDataURL("image/" + (e && e.type || "png"));
			}
			return this.getDataURL(e);
		}
	}, t.prototype.convertToPixel = function(e, t) {
		return zw(this, "convertToPixel", e, t);
	}, t.prototype.convertFromPixel = function(e, t) {
		return zw(this, "convertFromPixel", e, t);
	}, t.prototype.containPixel = function(e, t) {
		if (this._disposed) this.id;
		else {
			var n = this._model, r;
			return I(Hs(n, e), function(e, n) {
				n.indexOf("Models") >= 0 && I(e, function(e) {
					var i = e.coordinateSystem;
					if (i && i.containPoint) r ||= !!i.containPoint(t);
					else if (n === "seriesModels") {
						var a = this._chartsMap[e.__viewId];
						a && a.containPoint && (r ||= a.containPoint(t, e));
					}
				}, this);
			}, this), !!r;
		}
	}, t.prototype.getVisual = function(e, t) {
		var n = this._model, r = Hs(n, e, { defaultMainType: "series" }), i = r.seriesModel.getData(), a = r.hasOwnProperty("dataIndexInside") ? r.dataIndexInside : r.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(r.dataIndex) : null;
		return a == null ? eC(i, t) : $S(i, a, t);
	}, t.prototype.getViewOfComponentModel = function(e) {
		return this._componentsMap[e.__viewId];
	}, t.prototype.getViewOfSeriesModel = function(e) {
		return this._chartsMap[e.__viewId];
	}, t.prototype._initEvents = function() {
		var e = this;
		I(tT, function(t) {
			var n = function(n) {
				var r = e.getModel(), i = n.target, a;
				if (t === "globalout" ? a = {} : i && nC(i, function(e) {
					var t = Q(e);
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
		}), I(rT, function(t, n) {
			e._messageCenter.on(n, function(e) {
				this.trigger(n, e);
			}, e);
		}), I(["selectchanged"], function(t) {
			e._messageCenter.on(t, function(e) {
				this.trigger(t, e);
			}, e);
		}), Jv(this._messageCenter, this, this._api);
	}, t.prototype.isDisposed = function() {
		return this._disposed;
	}, t.prototype.clear = function() {
		this._disposed ? this.id : this.setOption({ series: [] }, !0);
	}, t.prototype.dispose = function() {
		if (this._disposed) this.id;
		else {
			this._disposed = !0, this.getDom() && qs(this.getDom(), pT, "");
			var e = this, t = e._api, n = e._model;
			I(e._componentsViews, function(e) {
				e.dispose(n, t);
			}), I(e._chartsViews, function(e) {
				e.dispose(n, t);
			}), e._zr.dispose(), e._dom = e._model = e._chartsMap = e._componentsMap = e._chartsViews = e._componentsViews = e._scheduler = e._api = e._zr = e._throttledZrFlush = e._theme = e._coordSysMgr = e._messageCenter = null, delete lT[e.id];
		}
	}, t.prototype.resize = function(e) {
		if (!this[Sw]) {
			if (this._disposed) this.id;
			else {
				this._zr.resize(e);
				var t = this._model;
				if (this._loadingFX && this._loadingFX.resize(), t) {
					var n = t.resetOption("media"), r = e && e.silent;
					this[Cw] && (r ??= this[Cw].silent, n = !0, this[Cw] = null), this[Sw] = !0;
					try {
						n && Fw(this), Rw.update.call(this, {
							type: "resize",
							animation: N({ duration: 0 }, e && e.animation)
						});
					} catch (e) {
						throw this[Sw] = !1, e;
					}
					this[Sw] = !1, Hw.call(this, r), Uw.call(this, r);
				}
			}
		}
	}, t.prototype.showLoading = function(e, t) {
		if (this._disposed) this.id;
		else if (G(e) && (t = e, e = ""), e ||= "default", this.hideLoading(), cT[e]) {
			var n = cT[e](this._api, t), r = this._zr;
			this._loadingFX = n, r.add(n);
		}
	}, t.prototype.hideLoading = function() {
		this._disposed ? this.id : (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null);
	}, t.prototype.makeActionFromEvent = function(e) {
		var t = N({}, e);
		return t.type = rT[e.type], t;
	}, t.prototype.dispatchAction = function(e, t) {
		if (this._disposed) this.id;
		else if (G(t) || (t = { silent: !!t }), nT[e.type] && this._model) {
			if (this[Sw]) this._pendingActions.push(e);
			else {
				var n = t.silent;
				Vw.call(this, e, n);
				var r = t.flush;
				r ? this._zr.flush() : r !== !1 && Y.browser.weChat && this._throttledZrFlush(), Hw.call(this, n), Uw.call(this, n);
			}
		}
	}, t.prototype.updateLabelLayout = function() {
		$C.trigger("series:layoutlabels", this._model, this._api, { updatedSeries: [] });
	}, t.prototype.appendData = function(e) {
		if (this._disposed) this.id;
		else {
			var t = e.seriesIndex;
			this.getModel().getSeriesByIndex(t).appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
		}
	}, t.internalField = function() {
		Fw = function(e) {
			var t = e._scheduler;
			t.restorePipelines(e._model), t.prepareStageTasks(), Iw(e, !0), Iw(e, !1), t.plan();
		}, Iw = function(e, t) {
			for (var n = e._model, r = e._scheduler, i = t ? e._componentsViews : e._chartsViews, a = t ? e._componentsMap : e._chartsMap, o = e._zr, s = e._api, c = 0; c < i.length; c++) i[c].__alive = !1;
			t ? n.eachComponent(function(e, t) {
				e !== "series" && l(t);
			}) : n.eachSeries(l);
			function l(e) {
				var c = e.__requireNewView;
				e.__requireNewView = !1;
				var l = "_ec_" + e.id + "_" + e.type, u = !c && a[l];
				if (!u) {
					var d = Ve(e.type);
					u = new (t ? mS.getClass(d.main, d.sub) : p_.getClass(d.sub))(), u.init(n, s), a[l] = u, i.push(u), o.add(u.group);
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
		}, Lw = function(e, t, n, r, i) {
			var a = e._model;
			if (a.setUpdatePayload(n), !r) {
				I([].concat(e._componentsViews, e._chartsViews), u);
				return;
			}
			var o = {};
			o[r + "Id"] = n[r + "Id"], o[r + "Index"] = n[r + "Index"], o[r + "Name"] = n[r + "Name"];
			var s = {
				mainType: r,
				query: o
			};
			i && (s.subType = i);
			var c = n.excludeSeriesId, l;
			c != null && (l = q(), I(ys(c), function(e) {
				var t = Ns(e, null);
				t != null && l.set(t, !0);
			})), a && a.eachComponent(s, function(t) {
				if (!(l && l.get(t.id) != null)) {
					if (rl(n)) {
						if (t instanceof xg) n.type === "highlight" && !n.notBlur && !t.get(["emphasis", "disabled"]) && Rc(t, n, e._api);
						else {
							var r = zc(t.mainType, t.componentIndex, n.name, e._api), i = r.focusSelf, a = r.dispatchers;
							n.type === "highlight" && i && !n.notBlur && Lc(t.mainType, t.componentIndex, e._api), a && I(a, function(e) {
								n.type === "highlight" ? Oc(e) : kc(e);
							});
						}
					} else nl(n) && t instanceof xg && (Hc(t, n, e._api), Uc(t), Zw(e));
				}
			}, e), a && a.eachComponent(s, function(t) {
				l && l.get(t.id) != null || u(e[r === "series" ? "_chartsMap" : "_componentsMap"][t.__viewId]);
			}, e);
			function u(r) {
				r && r.__alive && r[t] && r[t](r.__model, a, e._api, n);
			}
		}, Rw = {
			prepareAndUpdate: function(e) {
				Fw(this), Rw.update.call(this, e, { optionChanged: e.newOption != null });
			},
			update: function(t, n) {
				var r = this._model, i = this._api, a = this._zr, o = this._coordSysMgr, s = this._scheduler;
				if (r) {
					r.setUpdatePayload(t), s.restoreData(r, t), s.performSeriesTasks(r), o.create(r, i), s.performDataProcessorTasks(r, t), Bw(this, r), o.update(r, i), e(r), s.performVisualTasks(r, t), Kw(this, r, i, t, n);
					var c = r.get("backgroundColor") || "transparent", l = r.get("darkMode");
					a.setBackgroundColor(c), l != null && l !== "auto" && a.setDarkMode(l), $C.trigger("afterupdate", r, i);
				}
			},
			updateTransform: function(t) {
				var n = this, r = this._model, i = this._api;
				if (r) {
					r.setUpdatePayload(t);
					var a = [];
					r.eachComponent(function(e, o) {
						if (e !== "series") {
							var s = n.getViewOfComponentModel(o);
							if (s && s.__alive) {
								if (s.updateTransform) {
									var c = s.updateTransform(o, r, i, t);
									c && c.update && a.push(s);
								} else a.push(s);
							}
						}
					});
					var o = q();
					r.eachSeries(function(e) {
						var a = n._chartsMap[e.__viewId];
						if (a.updateTransform) {
							var s = a.updateTransform(e, r, i, t);
							s && s.update && o.set(e.uid, 1);
						} else o.set(e.uid, 1);
					}), e(r), this._scheduler.performVisualTasks(r, t, {
						setDirty: !0,
						dirtyMap: o
					}), Jw(this, r, i, t, {}, o), $C.trigger("afterupdate", r, i);
				}
			},
			updateView: function(t) {
				var n = this._model;
				n && (n.setUpdatePayload(t), p_.markUpdateMethod(t, "updateView"), e(n), this._scheduler.performVisualTasks(n, t, { setDirty: !0 }), Kw(this, n, this._api, t, {}), $C.trigger("afterupdate", n, this._api));
			},
			updateVisual: function(t) {
				var n = this, r = this._model;
				r && (r.setUpdatePayload(t), r.eachSeries(function(e) {
					e.getData().clearAllVisual();
				}), p_.markUpdateMethod(t, "updateVisual"), e(r), this._scheduler.performVisualTasks(r, t, {
					visualType: "visual",
					setDirty: !0
				}), r.eachComponent(function(e, i) {
					if (e !== "series") {
						var a = n.getViewOfComponentModel(i);
						a && a.__alive && a.updateVisual(i, r, n._api, t);
					}
				}), r.eachSeries(function(e) {
					n._chartsMap[e.__viewId].updateVisual(e, r, n._api, t);
				}), $C.trigger("afterupdate", r, this._api));
			},
			updateLayout: function(e) {
				Rw.update.call(this, e);
			}
		}, zw = function(e, t, n, r) {
			if (e._disposed) e.id;
			else for (var i = e._model, a = e._coordSysMgr.getCoordinateSystems(), o, s = Hs(i, n), c = 0; c < a.length; c++) {
				var l = a[c];
				if (l[t] && (o = l[t](i, s, r)) != null) return o;
			}
		}, Bw = function(e, t) {
			var n = e._chartsMap, r = e._scheduler;
			t.eachSeries(function(e) {
				r.updateStreamModes(e, n[e.__viewId]);
			});
		}, Vw = function(e, t) {
			var n = this, r = this.getModel(), i = e.type, a = e.escapeConnect, o = nT[i], s = o.actionInfo, c = (s.update || "update").split(":"), l = c.pop(), u = c[0] != null && Ve(c[0]);
			this[Sw] = !0;
			var d = [e], f = !1;
			e.batch && (f = !0, d = L(e.batch, function(t) {
				return t = P(N({}, t), e), t.batch = null, t;
			}));
			var p = [], m, h = nl(e), g = rl(e);
			if (g && Fc(this._api), I(d, function(t) {
				if (m = o.action(t, n._model, n._api), m ||= N({}, t), m.type = s.event || m.type, p.push(m), g) {
					var r = Us(e), i = r.queryOptionMap, a = r.mainTypeSpecified ? i.keys()[0] : "series";
					Lw(n, l, t, a), Zw(n);
				} else h ? (Lw(n, l, t, "series"), Zw(n)) : u && Lw(n, l, t, u.main, u.sub);
			}), l !== "none" && !g && !h && !u) try {
				this[Cw] ? (Fw(this), Rw.update.call(this, e), this[Cw] = null) : Rw[l].call(this, e);
			} catch (e) {
				throw this[Sw] = !1, e;
			}
			if (m = f ? {
				type: s.event || i,
				escapeConnect: a,
				batch: p
			} : p[0], this[Sw] = !1, !t) {
				var _ = this._messageCenter;
				if (_.trigger(m.type, m), h) {
					var v = {
						type: "selectchanged",
						escapeConnect: a,
						selected: Wc(r),
						isFromClick: e.isFromClick || !1,
						fromAction: e.type,
						fromActionPayload: e
					};
					_.trigger(v.type, v);
				}
			}
		}, Hw = function(e) {
			for (var t = this._pendingActions; t.length;) {
				var n = t.shift();
				Vw.call(this, n, e);
			}
		}, Uw = function(e) {
			!e && this.trigger("updated");
		}, Ww = function(e, t) {
			e.on("rendered", function(n) {
				t.trigger("rendered", n), e.animation.isFinished() && !t[Cw] && !t._scheduler.unfinished && !t._pendingActions.length && t.trigger("finished");
			});
		}, Gw = function(e, t) {
			e.on("mouseover", function(e) {
				var n = e.target, r = nC(n, $c);
				r && (Bc(r, e, t._api), Zw(t));
			}).on("mouseout", function(e) {
				var n = e.target, r = nC(n, $c);
				r && (Vc(r, e, t._api), Zw(t));
			}).on("click", function(e) {
				var n = e.target, r = nC(n, function(e) {
					return Q(e).dataIndex != null;
				}, !0);
				if (r) {
					var i = r.selected ? "unselect" : "select", a = Q(r);
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
		function e(e) {
			e.clearColorPalette(), e.eachSeries(function(e) {
				e.clearColorPalette();
			});
		}
		function t(e) {
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
				kb(i, function(e, t) {
					return e.zlevel === t.zlevel ? e.z - t.z : e.zlevel - t.zlevel;
				}), I(i, function(t) {
					var n = e.getComponent(t.type, t.idx), r = t.zlevel, i = t.key;
					a != null && (r = Math.max(a, r)), i ? (r === a && i !== o && r++, o = i) : o &&= (r === a && r++, ""), a = r, n.setZLevel(r);
				});
			}
		}
		Kw = function(e, n, r, i, a) {
			t(n), qw(e, n, r, i, a), I(e._chartsViews, function(e) {
				e.__alive = !1;
			}), Jw(e, n, r, i, a), I(e._chartsViews, function(e) {
				e.__alive || e.remove(n, r);
			});
		}, qw = function(e, t, n, r, i, o) {
			I(o || e._componentsViews, function(e) {
				var i = e.__model;
				s(i, e), e.render(i, t, n, r), a(i, e), l(i, e);
			});
		}, Jw = function(e, t, n, o, c, u) {
			var d = e._scheduler;
			c = N(c || {}, { updatedSeries: t.getSeries() }), $C.trigger("series:beforeupdate", t, n, c);
			var f = !1;
			t.eachSeries(function(t) {
				var n = e._chartsMap[t.__viewId];
				n.__alive = !0;
				var r = n.renderTask;
				d.updatePayload(r, o), s(t, n), u && u.get(t.uid) && r.dirty(), r.perform(d.getPerformArgs(r)) && (f = !0), n.group.silent = !!t.get("silent"), i(t, n), Uc(t);
			}), d.unfinished = f || d.unfinished, $C.trigger("series:layoutlabels", t, n, c), $C.trigger("series:transition", t, n, c), t.eachSeries(function(t) {
				var n = e._chartsMap[t.__viewId];
				a(t, n), l(t, n);
			}), r(e, t), $C.trigger("series:afterupdate", t, n, c);
		}, Zw = function(e) {
			e[ww] = !0, e.getZr().wakeUp();
		}, Qw = function(e) {
			e[ww] && (e.getZr().storage.traverse(function(e) {
				Ou(e) || n(e);
			}), e[ww] = !1);
		};
		function n(e) {
			for (var t = [], n = e.currentStates, r = 0; r < n.length; r++) {
				var i = n[r];
				i !== "emphasis" && i !== "blur" && i !== "select" && t.push(i);
			}
			e.selected && e.states.select && t.push("select"), e.hoverState === 2 && e.states.emphasis ? t.push("emphasis") : e.hoverState === 1 && e.states.blur && t.push("blur"), e.useStates(t);
		}
		function r(e, t) {
			var n = e._zr.storage, r = 0;
			n.traverse(function(e) {
				e.isGroup || r++;
			}), r > t.get("hoverLayerThreshold") && !Y.node && !Y.worker && t.eachSeries(function(t) {
				if (!t.preventUsingHoverLayer) {
					var n = e._chartsMap[t.__viewId];
					n.__alive && n.eachRendered(function(e) {
						e.states.emphasis && (e.states.emphasis.hoverLayer = !0);
					});
				}
			});
		}
		function i(e, t) {
			var n = e.get("blendMode") || null;
			t.eachRendered(function(e) {
				e.isGroup || (e.style.blend = n);
			});
		}
		function a(e, t) {
			if (!e.preventAutoZ) {
				var n = e.get("z") || 0, r = e.get("zlevel") || 0;
				t.eachRendered(function(e) {
					return o(e, n, r, -Infinity), !0;
				});
			}
		}
		function o(e, t, n, r) {
			var i = e.getTextContent(), a = e.getTextGuideLine();
			if (e.isGroup) for (var s = e.childrenRef(), c = 0; c < s.length; c++) r = Math.max(o(s[c], t, n, r), r);
			else e.z = t, e.zlevel = n, r = Math.max(e.z2, r);
			if (i && (i.z = t, i.zlevel = n, isFinite(r) && (i.z2 = r + 2)), a) {
				var l = e.textGuideLineConfig;
				a.z = t, a.zlevel = n, isFinite(r) && (a.z2 = r + (l && l.showAbove ? 1 : -1));
			}
			return r;
		}
		function s(e, t) {
			t.eachRendered(function(e) {
				if (!Ou(e)) {
					var t = e.getTextContent(), n = e.getTextGuideLine();
					e.stateTransition &&= null, t && t.stateTransition && (t.stateTransition = null), n && n.stateTransition && (n.stateTransition = null), e.hasState() ? (e.prevStates = e.currentStates, e.clearStates()) : e.prevStates &&= null;
				}
			});
		}
		function l(e, t) {
			var r = e.getModel("stateAnimation"), i = e.isAnimationEnabled(), a = r.get("duration"), o = a > 0 ? {
				duration: a,
				delay: r.get("delay"),
				easing: r.get("easing")
			} : null;
			t.eachRendered(function(e) {
				if (e.states && e.states.emphasis) {
					if (Ou(e)) return;
					if (e instanceof co && il(e), e.__dirty) {
						var t = e.prevStates;
						t && e.useStates(t);
					}
					if (i) {
						e.stateTransition = o;
						var r = e.getTextContent(), a = e.getTextGuideLine();
						r && (r.stateTransition = o), a && (a.stateTransition = o);
					}
					e.__dirty && n(e);
				}
			});
		}
		Yw = function(e) {
			return new (function(t) {
				c(n, t);
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
					Oc(t, n), Zw(e);
				}, n.prototype.leaveEmphasis = function(t, n) {
					kc(t, n), Zw(e);
				}, n.prototype.enterBlur = function(t) {
					Ac(t), Zw(e);
				}, n.prototype.leaveBlur = function(t) {
					jc(t), Zw(e);
				}, n.prototype.enterSelect = function(t) {
					Mc(t), Zw(e);
				}, n.prototype.leaveSelect = function(t) {
					Nc(t), Zw(e);
				}, n.prototype.getModel = function() {
					return e.getModel();
				}, n.prototype.getViewOfComponentModel = function(t) {
					return e.getViewOfComponentModel(t);
				}, n.prototype.getViewOfSeriesModel = function(t) {
					return e.getViewOfSeriesModel(t);
				}, n;
			}(Fx))(e);
		}, Xw = function(e) {
			function t(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r[Ew] = t;
				}
			}
			I(rT, function(n, r) {
				e._messageCenter.on(r, function(n) {
					if (uT[e.group] && e[Ew] !== Dw) {
						if (n && n.escapeConnect) return;
						var r = e.makeActionFromEvent(n), i = [];
						I(lT, function(t) {
							t !== e && t.group === e.group && i.push(t);
						}), t(i, Dw), I(i, function(e) {
							e[Ew] !== Ow && e.dispatchAction(r);
						}), t(i, kw);
					}
				});
			});
		};
	}(), t;
}(Ai), eT = $w.prototype;
eT.on = Aw("on"), eT.off = Aw("off"), eT.one = function(e, t, n) {
	var r = this;
	function i() {
		var n = [...arguments];
		t && t.apply && t.apply(this, n), r.off(e, i);
	}
	this.on.call(this, e, i, n);
};
var tT = [
	"click",
	"dblclick",
	"mouseover",
	"mouseout",
	"mousemove",
	"mousedown",
	"mouseup",
	"globalout",
	"contextmenu"
], nT = {}, rT = {}, iT = [], aT = [], oT = [], sT = {}, cT = {}, lT = {}, uT = {}, dT = /* @__PURE__ */ new Date() - 0, fT = /* @__PURE__ */ new Date() - 0, pT = "_echarts_instance_";
function mT(e, t, n) {
	var r = !(n && n.ssr);
	if (r) {
		var i = yT(e);
		if (i) return i;
	}
	var a = new $w(e, t, n);
	return a.id = "ec_" + dT++, lT[a.id] = a, r && qs(e, pT, a.id), Xw(a), $C.trigger("afterinit", a), a;
}
function hT(e) {
	if (H(e)) {
		var t = e;
		e = null, I(t, function(t) {
			t.group != null && (e = t.group);
		}), e ||= "g_" + fT++, I(t, function(t) {
			t.group = e;
		});
	}
	return uT[e] = !0, e;
}
function gT(e) {
	uT[e] = !1;
}
var _T = gT;
function vT(e) {
	W(e) ? e = lT[e] : e instanceof $w || (e = yT(e)), e instanceof $w && !e.isDisposed() && e.dispose();
}
function yT(e) {
	return lT[Js(e, pT)];
}
function bT(e) {
	return lT[e];
}
function xT(e, t) {
	sT[e] = t;
}
function ST(e) {
	F(aT, e) < 0 && aT.push(e);
}
function CT(e, t) {
	NT(iT, e, t, lw);
}
function wT(e) {
	ET("afterinit", e);
}
function TT(e) {
	ET("afterupdate", e);
}
function ET(e, t) {
	$C.on(e, t);
}
function DT(e, t, n) {
	U(t) && (n = t, t = "");
	var r = G(e) ? e.type : [e, e = { event: t }][0];
	e.event = (e.event || r).toLowerCase(), t = e.event, !rT[t] && (Se(Tw.test(r) && Tw.test(t)), nT[r] || (nT[r] = {
		action: n,
		actionInfo: e
	}), rT[t] = r);
}
function OT(e, t) {
	Ap.register(e, t);
}
function kT(e) {
	var t = Ap.get(e);
	if (t) return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
}
function AT(e, t) {
	NT(oT, e, t, dw, "layout");
}
function jT(e, t) {
	NT(oT, e, t, mw, "visual");
}
var MT = [];
function NT(e, t, n, r, i) {
	if ((U(t) || G(t)) && (n = t, t = r), !(F(MT, n) >= 0)) {
		MT.push(n);
		var a = ES.wrapStageHandler(n, i);
		a.__prio = t, a.__raw = n, e.push(a);
	}
}
function PT(e, t) {
	cT[e] = t;
}
function FT(e) {
	g({ createCanvas: e });
}
function IT(e, t, n) {
	var r = nw("registerMap");
	r && r(e, t, n);
}
function LT(e) {
	var t = nw("getMap");
	return t && t(e);
}
var RT = Hh;
jT(pw, bS), jT(gw, SS), jT(gw, CS), jT(pw, ZS), jT(gw, QS), jT(bw, QC), ST(dS), CT(sw, fS), PT("default", TS), DT({
	type: ic,
	event: ic,
	update: ic
}, Pe), DT({
	type: ac,
	event: ac,
	update: ac
}, Pe), DT({
	type: oc,
	event: oc,
	update: oc
}, Pe), DT({
	type: sc,
	event: sc,
	update: sc
}, Pe), DT({
	type: cc,
	event: cc,
	update: cc
}, Pe), xT("light", HS), xT("dark", qS);
var zT = {}, BT = [], VT = {
	registerPreprocessor: ST,
	registerProcessor: CT,
	registerPostInit: wT,
	registerPostUpdate: TT,
	registerUpdateLifecycle: ET,
	registerAction: DT,
	registerCoordinateSystem: OT,
	registerLayout: AT,
	registerVisual: jT,
	registerTransform: RT,
	registerLoading: PT,
	registerMap: IT,
	registerImpl: tw,
	PRIORITY: xw,
	ComponentModel: $,
	ComponentView: mS,
	SeriesModel: xg,
	ChartView: p_,
	registerComponentModel: function(e) {
		$.registerClass(e);
	},
	registerComponentView: function(e) {
		mS.registerClass(e);
	},
	registerSeriesModel: function(e) {
		xg.registerClass(e);
	},
	registerChartView: function(e) {
		p_.registerClass(e);
	},
	registerSubTypeDefaulter: function(e, t) {
		$.registerSubTypeDefaulter(e, t);
	},
	registerPainter: function(e, t) {
		fx(e, t);
	}
};
function HT(e) {
	H(e) ? I(e, function(e) {
		HT(e);
	}) : F(BT, e) >= 0 || (BT.push(e), U(e) && (e = { install: e }), e.install(VT));
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/GridModel.js
var UT = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
		show: !1,
		z: 0,
		left: "10%",
		top: 60,
		right: "10%",
		bottom: 70,
		containLabel: !1,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 1,
		borderColor: "#ccc"
	}, t;
}($), WT = function() {
	function e() {}
	return e.prototype.getNeedCrossZero = function() {
		return !this.option.scale;
	}, e.prototype.getCoordSysModel = function() {}, e;
}(), GT = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.getCoordSysModel = function() {
		return this.getReferringComponents("grid", Ws).models[0];
	}, t.type = "cartesian2dAxis", t;
}($);
ie(GT, WT);
//#endregion
//#region node_modules/echarts/lib/coord/axisDefault.js
var KT = {
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
		onZero: !0,
		onZeroAxisIndex: null,
		lineStyle: {
			color: "#6E7079",
			width: 1,
			type: "solid"
		},
		symbol: ["none", "none"],
		symbolSize: [10, 15]
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
		fontSize: 12
	},
	splitLine: {
		show: !0,
		showMinLine: !0,
		showMaxLine: !0,
		lineStyle: {
			color: ["#E0E6F1"],
			width: 1,
			type: "solid"
		}
	},
	splitArea: {
		show: !1,
		areaStyle: { color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"] }
	}
}, qT = M({
	boundaryGap: !0,
	deduplication: null,
	splitLine: { show: !1 },
	axisTick: {
		alignWithLabel: !1,
		interval: "auto"
	},
	axisLabel: { interval: "auto" }
}, KT), JT = M({
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
			color: "#F4F7FD",
			width: 1
		}
	}
}, KT), YT = {
	category: qT,
	value: JT,
	time: M({
		splitNumber: 6,
		axisLabel: {
			showMinLabel: !1,
			showMaxLabel: !1,
			rich: { primary: { fontWeight: "bold" } }
		},
		splitLine: { show: !1 }
	}, JT),
	log: P({ logBase: 10 }, JT)
}, XT = 0, ZT = function() {
	function e(e) {
		this.categories = e.categories || [], this._needCollect = e.needCollect, this._deduplication = e.deduplication, this.uid = ++XT;
	}
	return e.createByAxisModel = function(t) {
		var n = t.option, r = n.data, i = r && L(r, QT);
		return new e({
			categories: i,
			needCollect: !i,
			deduplication: n.dedplication !== !1
		});
	}, e.prototype.getOrdinal = function(e) {
		return this._getOrCreateMap().get(e);
	}, e.prototype.parseAndCollect = function(e) {
		var t, n = this._needCollect;
		if (!W(e) && !n) return e;
		if (n && !this._deduplication) return t = this.categories.length, this.categories[t] = e, t;
		var r = this._getOrCreateMap();
		return t = r.get(e), t ?? (n ? (t = this.categories.length, this.categories[t] = e, r.set(e, t)) : t = NaN), t;
	}, e.prototype._getOrCreateMap = function() {
		return this._map ||= q(this.categories);
	}, e;
}();
function QT(e) {
	return G(e) && e.value != null ? e.value : e + "";
}
//#endregion
//#region node_modules/echarts/lib/coord/axisCommonTypes.js
var $T = {
	value: 1,
	category: 1,
	time: 1,
	log: 1
};
//#endregion
//#region node_modules/echarts/lib/coord/axisModelCreator.js
function eE(e, t, n, r) {
	I($T, function(i, a) {
		var o = M(M({}, YT[a], !0), r, !0), s = function(e) {
			c(n, e);
			function n() {
				var n = e !== null && e.apply(this, arguments) || this;
				return n.type = t + "Axis." + a, n;
			}
			return n.prototype.mergeDefaultAndTheme = function(e, t) {
				var n = vh(this), r = n ? bh(e) : {};
				M(e, t.getTheme().get(a + "Axis")), M(e, this.getDefaultOption()), e.type = tE(e), n && yh(e, r, n);
			}, n.prototype.optionUpdated = function() {
				this.option.type === "category" && (this.__ordinalMeta = ZT.createByAxisModel(this));
			}, n.prototype.getCategories = function(e) {
				var t = this.option;
				if (t.type === "category") return e ? t.data : this.__ordinalMeta.categories;
			}, n.prototype.getOrdinalMeta = function() {
				return this.__ordinalMeta;
			}, n.type = t + "Axis." + a, n.defaultOption = o, n;
		}(n);
		e.registerComponentModel(s);
	}), e.registerSubTypeDefaulter(t + "Axis", tE);
}
function tE(e) {
	return e.type || (e.data ? "category" : "value");
}
//#endregion
//#region node_modules/echarts/lib/scale/Scale.js
var nE = function() {
	function e(e) {
		this._setting = e || {}, this._extent = [Infinity, -Infinity];
	}
	return e.prototype.getSetting = function(e) {
		return this._setting[e];
	}, e.prototype.unionExtent = function(e) {
		var t = this._extent;
		e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1]);
	}, e.prototype.unionExtentFromData = function(e, t) {
		this.unionExtent(e.getApproximateExtent(t));
	}, e.prototype.getExtent = function() {
		return this._extent.slice();
	}, e.prototype.setExtent = function(e, t) {
		var n = this._extent;
		isNaN(e) || (n[0] = e), isNaN(t) || (n[1] = t);
	}, e.prototype.isInExtentRange = function(e) {
		return this._extent[0] <= e && this._extent[1] >= e;
	}, e.prototype.isBlank = function() {
		return this._isBlank;
	}, e.prototype.setBlank = function(e) {
		this._isBlank = e;
	}, e;
}();
Ze(nE);
//#endregion
//#region node_modules/echarts/lib/scale/helper.js
function rE(e) {
	return e.type === "interval" || e.type === "log";
}
function iE(e, t, n, r) {
	var i = {}, a = i.interval = ss((e[1] - e[0]) / t, !0);
	n != null && a < n && (a = i.interval = n), r != null && a > r && (a = i.interval = r);
	var o = i.intervalPrecision = oE(a);
	return cE(i.niceTickExtent = [Ko(Math.ceil(e[0] / a) * a, o), Ko(Math.floor(e[1] / a) * a, o)], e), i;
}
function aE(e) {
	var t = 10 ** os(e), n = e / t;
	return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, Ko(n * t);
}
function oE(e) {
	return Jo(e) + 2;
}
function sE(e, t, n) {
	e[t] = Math.max(Math.min(e[t], n[1]), n[0]);
}
function cE(e, t) {
	!isFinite(e[0]) && (e[0] = t[0]), !isFinite(e[1]) && (e[1] = t[1]), sE(e, 0, t), sE(e, 1, t), e[0] > e[1] && (e[0] = e[1]);
}
function lE(e, t) {
	return e >= t[0] && e <= t[1];
}
function uE(e, t) {
	return t[1] === t[0] ? .5 : (e - t[0]) / (t[1] - t[0]);
}
function dE(e, t) {
	return e * (t[1] - t[0]) + t[0];
}
//#endregion
//#region node_modules/echarts/lib/scale/Ordinal.js
var fE = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		n.type = "ordinal";
		var r = n.getSetting("ordinalMeta");
		return r ||= new ZT({}), H(r) && (r = new ZT({ categories: L(r, function(e) {
			return G(e) ? e.value : e;
		}) })), n._ordinalMeta = r, n._extent = n.getSetting("extent") || [0, r.categories.length - 1], n;
	}
	return t.prototype.parse = function(e) {
		return e == null ? NaN : W(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
	}, t.prototype.contain = function(e) {
		return e = this.parse(e), lE(e, this._extent) && this._ordinalMeta.categories[e] != null;
	}, t.prototype.normalize = function(e) {
		return e = this._getTickNumber(this.parse(e)), uE(e, this._extent);
	}, t.prototype.scale = function(e) {
		return e = Math.round(dE(e, this._extent)), this.getRawOrdinalNumber(e);
	}, t.prototype.getTicks = function() {
		for (var e = [], t = this._extent, n = t[0]; n <= t[1];) e.push({ value: n }), n++;
		return e;
	}, t.prototype.getMinorTicks = function(e) {}, t.prototype.setSortInfo = function(e) {
		if (e == null) this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
		else {
			for (var t = e.ordinalNumbers, n = this._ordinalNumbersByTick = [], r = this._ticksByOrdinalNumber = [], i = 0, a = this._ordinalMeta.categories.length, o = Math.min(a, t.length); i < o; ++i) {
				var s = t[i];
				n[i] = s, r[s] = i;
			}
			for (var c = 0; i < a; ++i) {
				for (; r[c] != null;) c++;
				n.push(c), r[c] = i;
			}
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
		return this._extent[1] - this._extent[0] + 1;
	}, t.prototype.unionExtentFromData = function(e, t) {
		this.unionExtent(e.getApproximateExtent(t));
	}, t.prototype.isInExtentRange = function(e) {
		return e = this._getTickNumber(e), this._extent[0] <= e && this._extent[1] >= e;
	}, t.prototype.getOrdinalMeta = function() {
		return this._ordinalMeta;
	}, t.prototype.calcNiceTicks = function() {}, t.prototype.calcNiceExtent = function() {}, t.type = "ordinal", t;
}(nE);
nE.registerClass(fE);
//#endregion
//#region node_modules/echarts/lib/scale/Interval.js
var pE = Ko, mE = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "interval", t._interval = 0, t._intervalPrecision = 2, t;
	}
	return t.prototype.parse = function(e) {
		return e;
	}, t.prototype.contain = function(e) {
		return lE(e, this._extent);
	}, t.prototype.normalize = function(e) {
		return uE(e, this._extent);
	}, t.prototype.scale = function(e) {
		return dE(e, this._extent);
	}, t.prototype.setExtent = function(e, t) {
		var n = this._extent;
		isNaN(e) || (n[0] = parseFloat(e)), isNaN(t) || (n[1] = parseFloat(t));
	}, t.prototype.unionExtent = function(e) {
		var t = this._extent;
		e[0] < t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1]), this.setExtent(t[0], t[1]);
	}, t.prototype.getInterval = function() {
		return this._interval;
	}, t.prototype.setInterval = function(e) {
		this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = oE(e);
	}, t.prototype.getTicks = function(e) {
		var t = this._interval, n = this._extent, r = this._niceExtent, i = this._intervalPrecision, a = [];
		if (!t) return a;
		var o = 1e4;
		n[0] < r[0] && (e ? a.push({ value: pE(r[0] - t, i) }) : a.push({ value: n[0] }));
		for (var s = r[0]; s <= r[1] && (a.push({ value: s }), s = pE(s + t, i), s !== a[a.length - 1].value);) if (a.length > o) return [];
		var c = a.length ? a[a.length - 1].value : r[1];
		return n[1] > c && (e ? a.push({ value: pE(c + t, i) }) : a.push({ value: n[1] })), a;
	}, t.prototype.getMinorTicks = function(e) {
		for (var t = this.getTicks(!0), n = [], r = this.getExtent(), i = 1; i < t.length; i++) {
			for (var a = t[i], o = t[i - 1], s = 0, c = [], l = (a.value - o.value) / e; s < e - 1;) {
				var u = pE(o.value + (s + 1) * l);
				u > r[0] && u < r[1] && c.push(u), s++;
			}
			n.push(c);
		}
		return n;
	}, t.prototype.getLabel = function(e, t) {
		if (e == null) return "";
		var n = t && t.precision;
		return n == null ? n = Jo(e.value) || 0 : n === "auto" && (n = this._intervalPrecision), $m(pE(e.value, n, !0));
	}, t.prototype.calcNiceTicks = function(e, t, n) {
		e ||= 5;
		var r = this._extent, i = r[1] - r[0];
		if (isFinite(i)) {
			i < 0 && (i = -i, r.reverse());
			var a = iE(r, e, t, n);
			this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
		}
	}, t.prototype.calcNiceExtent = function(e) {
		var t = this._extent;
		if (t[0] === t[1]) {
			if (t[0] !== 0) {
				var n = Math.abs(t[0]);
				e.fixMax || (t[1] += n / 2), t[0] -= n / 2;
			} else t[1] = 1;
		}
		var r = t[1] - t[0];
		isFinite(r) || (t[0] = 0, t[1] = 1), this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
		var i = this._interval;
		e.fixMin || (t[0] = pE(Math.floor(t[0] / i) * i)), e.fixMax || (t[1] = pE(Math.ceil(t[1] / i) * i));
	}, t.prototype.setNiceExtent = function(e, t) {
		this._niceExtent = [e, t];
	}, t.type = "interval", t;
}(nE);
nE.registerClass(mE);
//#endregion
//#region node_modules/echarts/lib/scale/Time.js
var hE = function(e, t, n, r) {
	for (; n < r;) {
		var i = n + r >>> 1;
		e[i][1] < t ? n = i + 1 : r = i;
	}
	return n;
}, gE = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.type = "time", n;
	}
	return t.prototype.getLabel = function(e) {
		var t = this.getSetting("useUTC");
		return Pm(e.value, Dm[Nm(jm(this._minLevelUnit))] || Dm.second, t, this.getSetting("locale"));
	}, t.prototype.getFormattedLabel = function(e, t, n) {
		var r = this.getSetting("useUTC");
		return Fm(e, t, n, this.getSetting("locale"), r);
	}, t.prototype.getTicks = function() {
		var e = this._interval, t = this._extent, n = [];
		if (!e) return n;
		n.push({
			value: t[0],
			level: 0
		});
		var r = this.getSetting("useUTC"), i = TE(this._minLevelUnit, this._approxInterval, r, t);
		return n = n.concat(i), n.push({
			value: t[1],
			level: 0
		}), n;
	}, t.prototype.calcNiceExtent = function(e) {
		var t = this._extent;
		if (t[0] === t[1] && (t[0] -= Cm, t[1] += Cm), t[1] === -Infinity && t[0] === Infinity) {
			var n = /* @__PURE__ */ new Date();
			t[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), t[0] = t[1] - Cm;
		}
		this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
	}, t.prototype.calcNiceTicks = function(e, t, n) {
		e ||= 10;
		var r = this._extent, i = r[1] - r[0];
		this._approxInterval = i / e, t != null && this._approxInterval < t && (this._approxInterval = t), n != null && this._approxInterval > n && (this._approxInterval = n);
		var a = _E.length, o = Math.min(hE(_E, this._approxInterval, 0, a), a - 1);
		this._interval = _E[o][1], this._minLevelUnit = _E[Math.max(o - 1, 0)][0];
	}, t.prototype.parse = function(e) {
		return ue(e) ? e : +is(e);
	}, t.prototype.contain = function(e) {
		return lE(this.parse(e), this._extent);
	}, t.prototype.normalize = function(e) {
		return uE(this.parse(e), this._extent);
	}, t.prototype.scale = function(e) {
		return dE(e, this._extent);
	}, t.type = "time", t;
}(mE), _E = [
	["second", bm],
	["minute", xm],
	["hour", Sm],
	["quarter-day", Sm * 6],
	["half-day", Sm * 12],
	["day", Cm * 1.2],
	["half-week", Cm * 3.5],
	["week", Cm * 7],
	["month", Cm * 31],
	["quarter", Cm * 95],
	["half-year", wm / 2],
	["year", wm]
];
function vE(e, t, n, r) {
	var i = is(t), a = is(n), o = function(e) {
		return Lm(i, e, r) === Lm(a, e, r);
	}, s = function() {
		return o("year");
	}, c = function() {
		return s() && o("month");
	}, l = function() {
		return c() && o("day");
	}, u = function() {
		return l() && o("hour");
	}, d = function() {
		return u() && o("minute");
	}, f = function() {
		return d() && o("second");
	}, p = function() {
		return f() && o("millisecond");
	};
	switch (e) {
		case "year": return s();
		case "month": return c();
		case "day": return l();
		case "hour": return u();
		case "minute": return d();
		case "second": return f();
		case "millisecond": return p();
	}
}
function yE(e, t) {
	return e /= Cm, e > 16 ? 16 : e > 7.5 ? 7 : e > 3.5 ? 4 : e > 1.5 ? 2 : 1;
}
function bE(e) {
	var t = 30 * Cm;
	return e /= t, e > 6 ? 6 : e > 3 ? 3 : e > 2 ? 2 : 1;
}
function xE(e) {
	return e /= Sm, e > 12 ? 12 : e > 6 ? 6 : e > 3.5 ? 4 : e > 2 ? 2 : 1;
}
function SE(e, t) {
	return e /= t ? xm : bm, e > 30 ? 30 : e > 20 ? 20 : e > 15 ? 15 : e > 10 ? 10 : e > 5 ? 5 : e > 2 ? 2 : 1;
}
function CE(e) {
	return ss(e, !0);
}
function wE(e, t, n) {
	var r = new Date(e);
	switch (jm(t)) {
		case "year":
		case "month": r[Km(n)](0);
		case "day": r[qm(n)](1);
		case "hour": r[Jm(n)](0);
		case "minute": r[Ym(n)](0);
		case "second": r[Xm(n)](0), r[Zm(n)](0);
	}
	return r.getTime();
}
function TE(e, t, n, r) {
	var i = 1e4, a = km, o = 0;
	function s(e, t, n, i, a, o, s) {
		for (var c = new Date(t), l = t, u = c[i](); l < n && l <= r[1];) s.push({ value: l }), u += e, c[a](u), l = c.getTime();
		s.push({
			value: l,
			notAdd: !0
		});
	}
	function c(e, i, a) {
		var o = [], c = !i.length;
		if (!vE(jm(e), r[0], r[1], n)) {
			c && (i = [{ value: wE(new Date(r[0]), e, n) }, { value: r[1] }]);
			for (var l = 0; l < i.length - 1; l++) {
				var u = i[l].value, d = i[l + 1].value;
				if (u !== d) {
					var f = void 0, p = void 0, m = void 0, h = !1;
					switch (e) {
						case "year":
							f = Math.max(1, Math.round(t / Cm / 365)), p = Rm(n), m = Gm(n);
							break;
						case "half-year":
						case "quarter":
						case "month":
							f = bE(t), p = zm(n), m = Km(n);
							break;
						case "week":
						case "half-week":
						case "day":
							f = yE(t, 31), p = Bm(n), m = qm(n), h = !0;
							break;
						case "half-day":
						case "quarter-day":
						case "hour":
							f = xE(t), p = Vm(n), m = Jm(n);
							break;
						case "minute":
							f = SE(t, !0), p = Hm(n), m = Ym(n);
							break;
						case "second":
							f = SE(t, !1), p = Um(n), m = Xm(n);
							break;
						case "millisecond": f = CE(t), p = Wm(n), m = Zm(n);
					}
					s(f, u, d, p, m, h, o), e === "year" && a.length > 1 && l === 0 && a.unshift({ value: a[0].value - f });
				}
			}
			for (var l = 0; l < o.length; l++) a.push(o[l]);
			return o;
		}
	}
	for (var l = [], u = [], d = 0, f = 0, p = 0; p < a.length && o++ < i; ++p) {
		var m = jm(a[p]);
		if (Mm(a[p]) && (c(a[p], l[l.length - 1] || [], u), m !== (a[p + 1] ? jm(a[p + 1]) : null))) {
			if (u.length) {
				f = d, u.sort(function(e, t) {
					return e.value - t.value;
				});
				for (var h = [], g = 0; g < u.length; ++g) {
					var _ = u[g].value;
					(g === 0 || u[g - 1].value !== _) && (h.push(u[g]), _ >= r[0] && _ <= r[1] && d++);
				}
				var v = (r[1] - r[0]) / t;
				if (d > v * 1.5 && f > v / 1.5 || (l.push(h), d > v || e === a[p])) break;
			}
			u = [];
		}
	}
	for (var y = R(L(l, function(e) {
		return R(e, function(e) {
			return e.value >= r[0] && e.value <= r[1] && !e.notAdd;
		});
	}), function(e) {
		return e.length > 0;
	}), b = [], x = y.length - 1, p = 0; p < y.length; ++p) for (var S = y[p], C = 0; C < S.length; ++C) b.push({
		value: S[C].value,
		level: x - p
	});
	b.sort(function(e, t) {
		return e.value - t.value;
	});
	for (var w = [], p = 0; p < b.length; ++p) (p === 0 || b[p].value !== b[p - 1].value) && w.push(b[p]);
	return w;
}
nE.registerClass(gE);
//#endregion
//#region node_modules/echarts/lib/scale/Log.js
var EE = nE.prototype, DE = mE.prototype, OE = Ko, kE = Math.floor, AE = Math.ceil, jE = Math.pow, ME = Math.log, NE = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "log", t.base = 10, t._originalScale = new mE(), t._interval = 0, t;
	}
	return t.prototype.getTicks = function(e) {
		var t = this._originalScale, n = this._extent, r = t.getExtent();
		return L(DE.getTicks.call(this, e), function(e) {
			var t = e.value, i = Ko(jE(this.base, t));
			return i = t === n[0] && this._fixMin ? FE(i, r[0]) : i, i = t === n[1] && this._fixMax ? FE(i, r[1]) : i, { value: i };
		}, this);
	}, t.prototype.setExtent = function(e, t) {
		var n = ME(this.base);
		e = ME(Math.max(0, e)) / n, t = ME(Math.max(0, t)) / n, DE.setExtent.call(this, e, t);
	}, t.prototype.getExtent = function() {
		var e = this.base, t = EE.getExtent.call(this);
		t[0] = jE(e, t[0]), t[1] = jE(e, t[1]);
		var n = this._originalScale.getExtent();
		return this._fixMin && (t[0] = FE(t[0], n[0])), this._fixMax && (t[1] = FE(t[1], n[1])), t;
	}, t.prototype.unionExtent = function(e) {
		this._originalScale.unionExtent(e);
		var t = this.base;
		e[0] = ME(e[0]) / ME(t), e[1] = ME(e[1]) / ME(t), EE.unionExtent.call(this, e);
	}, t.prototype.unionExtentFromData = function(e, t) {
		this.unionExtent(e.getApproximateExtent(t));
	}, t.prototype.calcNiceTicks = function(e) {
		e ||= 10;
		var t = this._extent, n = t[1] - t[0];
		if (!(n === Infinity || n <= 0)) {
			var r = as(n);
			for (e / n * r <= .5 && (r *= 10); !isNaN(r) && Math.abs(r) < 1 && Math.abs(r) > 0;) r *= 10;
			var i = [Ko(AE(t[0] / r) * r), Ko(kE(t[1] / r) * r)];
			this._interval = r, this._niceExtent = i;
		}
	}, t.prototype.calcNiceExtent = function(e) {
		DE.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
	}, t.prototype.parse = function(e) {
		return e;
	}, t.prototype.contain = function(e) {
		return e = ME(e) / ME(this.base), lE(e, this._extent);
	}, t.prototype.normalize = function(e) {
		return e = ME(e) / ME(this.base), uE(e, this._extent);
	}, t.prototype.scale = function(e) {
		return e = dE(e, this._extent), jE(this.base, e);
	}, t.type = "log", t;
}(nE), PE = NE.prototype;
PE.getMinorTicks = DE.getMinorTicks, PE.getLabel = DE.getLabel;
function FE(e, t) {
	return OE(e, Jo(t));
}
nE.registerClass(NE);
//#endregion
//#region node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var IE = function() {
	function e(e, t, n) {
		this._prepareParams(e, t, n);
	}
	return e.prototype._prepareParams = function(e, t, n) {
		n[1] < n[0] && (n = [NaN, NaN]), this._dataMin = n[0], this._dataMax = n[1];
		var r = this._isOrdinal = e.type === "ordinal";
		this._needCrossZero = e.type === "interval" && t.getNeedCrossZero && t.getNeedCrossZero();
		var i = t.get("min", !0);
		i ??= t.get("startValue", !0);
		var a = this._modelMinRaw = i;
		U(a) ? this._modelMinNum = BE(e, a({
			min: n[0],
			max: n[1]
		})) : a !== "dataMin" && (this._modelMinNum = BE(e, a));
		var o = this._modelMaxRaw = t.get("max", !0);
		if (U(o) ? this._modelMaxNum = BE(e, o({
			min: n[0],
			max: n[1]
		})) : o !== "dataMax" && (this._modelMaxNum = BE(e, o)), r) this._axisDataLen = t.getCategories().length;
		else {
			var s = t.get("boundaryGap"), c = H(s) ? s : [s || 0, s || 0];
			this._boundaryGapInner = typeof c[0] == "boolean" || typeof c[1] == "boolean" ? [0, 0] : [Pt(c[0], 1), Pt(c[1], 1)];
		}
	}, e.prototype.calculate = function() {
		var e = this._isOrdinal, t = this._dataMin, n = this._dataMax, r = this._axisDataLen, i = this._boundaryGapInner, a = e ? null : n - t || Math.abs(t), o = this._modelMinRaw === "dataMin" ? t : this._modelMinNum, s = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, c = o != null, l = s != null;
		o ??= e ? r ? 0 : NaN : t - i[0] * a, s ??= e ? r ? r - 1 : NaN : n + i[1] * a, (o == null || !isFinite(o)) && (o = NaN), (s == null || !isFinite(s)) && (s = NaN);
		var u = _e(o) || _e(s) || e && !r;
		this._needCrossZero && (o > 0 && s > 0 && !c && (o = 0), o < 0 && s < 0 && !l && (s = 0));
		var d = this._determinedMin, f = this._determinedMax;
		return d != null && (o = d, c = !0), f != null && (s = f, l = !0), {
			min: o,
			max: s,
			minFixed: c,
			maxFixed: l,
			isBlank: u
		};
	}, e.prototype.modifyDataMinMax = function(e, t) {
		this[RE[e]] = t;
	}, e.prototype.setDeterminedMinMax = function(e, t) {
		var n = LE[e];
		this[n] = t;
	}, e.prototype.freeze = function() {
		this.frozen = !0;
	}, e;
}(), LE = {
	min: "_determinedMin",
	max: "_determinedMax"
}, RE = {
	min: "_dataMin",
	max: "_dataMax"
};
function zE(e, t, n) {
	var r = e.rawExtentInfo;
	return r || (r = new IE(e, t, n), e.rawExtentInfo = r, r);
}
function BE(e, t) {
	return t == null ? null : _e(t) ? NaN : e.parse(t);
}
//#endregion
//#region node_modules/echarts/lib/coord/axisHelper.js
function VE(e, t) {
	var n = e.type, r = zE(e, t, e.getExtent()).calculate();
	e.setBlank(r.isBlank);
	var i = r.min, a = r.max, o = t.ecModel;
	if (o && n === "time") {
		var s = X_("bar", o), c = !1;
		if (I(s, function(e) {
			c ||= e.getBaseAxis() === t.axis;
		}), c) {
			var l = Q_(s), u = HE(i, a, t, l);
			i = u.min, a = u.max;
		}
	}
	return {
		extent: [i, a],
		fixMin: r.minFixed,
		fixMax: r.maxFixed
	};
}
function HE(e, t, n, r) {
	var i = n.axis.getExtent(), a = Math.abs(i[1] - i[0]), o = ev(r, n.axis);
	if (o === void 0) return {
		min: e,
		max: t
	};
	var s = Infinity;
	I(o, function(e) {
		s = Math.min(e.offset, s);
	});
	var c = -Infinity;
	I(o, function(e) {
		c = Math.max(e.offset + e.width, c);
	}), s = Math.abs(s), c = Math.abs(c);
	var l = s + c, u = t - e, d = u / (1 - (s + c) / a) - u;
	return t += c / l * d, e -= s / l * d, {
		min: e,
		max: t
	};
}
function UE(e, t) {
	var n = t, r = VE(e, n), i = r.extent, a = n.get("splitNumber");
	e instanceof NE && (e.base = n.get("logBase"));
	var o = e.type, s = n.get("interval"), c = o === "interval" || o === "time";
	e.setExtent(i[0], i[1]), e.calcNiceExtent({
		splitNumber: a,
		fixMin: r.fixMin,
		fixMax: r.fixMax,
		minInterval: c ? n.get("minInterval") : null,
		maxInterval: c ? n.get("maxInterval") : null
	}), s != null && e.setInterval && e.setInterval(s);
}
function WE(e, t) {
	if (t ||= e.get("type"), t) switch (t) {
		case "category": return new fE({
			ordinalMeta: e.getOrdinalMeta ? e.getOrdinalMeta() : e.getCategories(),
			extent: [Infinity, -Infinity]
		});
		case "time": return new gE({
			locale: e.ecModel.getLocaleModel(),
			useUTC: e.ecModel.get("useUTC")
		});
		default: return new ((nE.getClass(t)) || mE)();
	}
}
function GE(e) {
	var t = e.scale.getExtent(), n = t[0], r = t[1];
	return !(n > 0 && r > 0 || n < 0 && r < 0);
}
function KE(e) {
	var t = e.getLabelModel().get("formatter"), n = e.type === "category" ? e.scale.getExtent()[0] : null;
	return e.scale.type === "time" ? function(t) {
		return function(n, r) {
			return e.scale.getFormattedLabel(n, r, t);
		};
	}(t) : W(t) ? function(t) {
		return function(n) {
			var r = e.scale.getLabel(n);
			return t.replace("{value}", r ?? "");
		};
	}(t) : U(t) ? function(t) {
		return function(r, i) {
			return n != null && (i = r.value - n), t(qE(e, r), i, r.level == null ? null : { level: r.level });
		};
	}(t) : function(t) {
		return e.scale.getLabel(t);
	};
}
function qE(e, t) {
	return e.type === "category" ? e.scale.getLabel(t) : t.value;
}
function JE(e) {
	var t = e.model, n = e.scale;
	if (t.get(["axisLabel", "show"]) && !n.isBlank()) {
		var r, i, a = n.getExtent();
		n instanceof fE ? i = n.count() : (r = n.getTicks(), i = r.length);
		var o = e.getLabelModel(), s = KE(e), c, l = 1;
		i > 40 && (l = Math.ceil(i / 40));
		for (var u = 0; u < i; u += l) {
			var d = s(r ? r[u] : { value: a[0] + u }, u), f = YE(o.getTextRect(d), o.get("rotate") || 0);
			c ? c.union(f) : c = f;
		}
		return c;
	}
}
function YE(e, t) {
	var n = t * Math.PI / 180, r = e.width, i = e.height, a = r * Math.abs(Math.cos(n)) + Math.abs(i * Math.sin(n)), o = r * Math.abs(Math.sin(n)) + Math.abs(i * Math.cos(n));
	return new Z(e.x, e.y, a, o);
}
function XE(e) {
	return e.get("interval") ?? "auto";
}
function ZE(e) {
	return e.type === "category" && XE(e.getLabelModel()) === 0;
}
function QE(e, t) {
	var n = {};
	return I(e.mapDimensionsAll(t), function(t) {
		n[Rp(e, t)] = !0;
	}), B(n);
}
function $E(e, t, n) {
	t && I(QE(t, n), function(n) {
		var r = t.getApproximateExtent(n);
		r[0] < e[0] && (e[0] = r[0]), r[1] > e[1] && (e[1] = r[1]);
	});
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/Cartesian.js
var eD = function() {
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
		return e = e.toLowerCase(), R(this.getAxes(), function(t) {
			return t.scale.type === e;
		});
	}, e.prototype.addAxis = function(e) {
		var t = e.dim;
		this._axes[t] = e, this._dimList.push(t);
	}, e;
}(), tD = ["x", "y"];
function nD(e) {
	return e.type === "interval" || e.type === "time";
}
var rD = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "cartesian2d", t.dimensions = tD, t;
	}
	return t.prototype.calcAffineTransform = function() {
		this._transform = this._invTransform = null;
		var e = this.getAxis("x").scale, t = this.getAxis("y").scale;
		if (nD(e) && nD(t)) {
			var n = e.getExtent(), r = t.getExtent(), i = this.dataToPoint([n[0], r[0]]), a = this.dataToPoint([n[1], r[1]]), o = n[1] - n[0], s = r[1] - r[0];
			if (o && s) {
				var c = (a[0] - i[0]) / o, l = (a[1] - i[1]) / s, u = i[0] - n[0] * c, d = i[1] - r[0] * l, f = this._transform = [
					c,
					0,
					0,
					l,
					u,
					d
				];
				this._invTransform = _t([], f);
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
		var n = this.dataToPoint(e), r = this.dataToPoint(t), i = this.getArea(), a = new Z(n[0], n[1], r[0] - n[0], r[1] - n[1]);
		return i.intersect(a);
	}, t.prototype.dataToPoint = function(e, t, n) {
		n ||= [];
		var r = e[0], i = e[1];
		if (this._transform && r != null && isFinite(r) && i != null && isFinite(i)) return Sn(n, e, this._transform);
		var a = this.getAxis("x"), o = this.getAxis("y");
		return n[0] = a.toGlobalCoord(a.dataToCoord(r, t)), n[1] = o.toGlobalCoord(o.dataToCoord(i, t)), n;
	}, t.prototype.clampData = function(e, t) {
		var n = this.getAxis("x").scale, r = this.getAxis("y").scale, i = n.getExtent(), a = r.getExtent(), o = n.parse(e[0]), s = r.parse(e[1]);
		return t ||= [], t[0] = Math.min(Math.max(Math.min(i[0], i[1]), o), Math.max(i[0], i[1])), t[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), t;
	}, t.prototype.pointToData = function(e, t) {
		var n = [];
		if (this._invTransform) return Sn(n, e, this._invTransform);
		var r = this.getAxis("x"), i = this.getAxis("y");
		return n[0] = r.coordToData(r.toLocalCoord(e[0]), t), n[1] = i.coordToData(i.toLocalCoord(e[1]), t), n;
	}, t.prototype.getOtherAxis = function(e) {
		return this.getAxis(e.dim === "x" ? "y" : "x");
	}, t.prototype.getArea = function(e) {
		e ||= 0;
		var t = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), r = Math.min(t[0], t[1]) - e, i = Math.min(n[0], n[1]) - e;
		return new Z(r, i, Math.max(t[0], t[1]) - r + e, Math.max(n[0], n[1]) - i + e);
	}, t;
}(eD), iD = Bs();
function aD(e, t) {
	var n = L(t, function(t) {
		return e.scale.parse(t);
	});
	return e.type === "time" && n.length > 0 && (n.sort(), n.unshift(n[0]), n.push(n[n.length - 1])), n;
}
function oD(e) {
	var t = e.getLabelModel().get("customValues");
	if (t) {
		var n = KE(e), r = e.scale.getExtent();
		return { labels: L(R(aD(e, t), function(e) {
			return e >= r[0] && e <= r[1];
		}), function(t) {
			var r = { value: t };
			return {
				formattedLabel: n(r),
				rawLabel: e.scale.getLabel(r),
				tickValue: t
			};
		}) };
	}
	return e.type === "category" ? cD(e) : dD(e);
}
function sD(e, t) {
	var n = e.getTickModel().get("customValues");
	if (n) {
		var r = e.scale.getExtent();
		return { ticks: R(aD(e, n), function(e) {
			return e >= r[0] && e <= r[1];
		}) };
	}
	return e.type === "category" ? uD(e, t) : { ticks: L(e.scale.getTicks(), function(e) {
		return e.value;
	}) };
}
function cD(e) {
	var t = e.getLabelModel(), n = lD(e, t);
	return !t.get("show") || e.scale.isBlank() ? {
		labels: [],
		labelCategoryInterval: n.labelCategoryInterval
	} : n;
}
function lD(e, t) {
	var n = fD(e, "labels"), r = XE(t), i = pD(n, r);
	if (i) return i;
	var a, o;
	return U(r) ? a = yD(e, r) : (o = r === "auto" ? hD(e) : r, a = vD(e, o)), mD(n, r, {
		labels: a,
		labelCategoryInterval: o
	});
}
function uD(e, t) {
	var n = fD(e, "ticks"), r = XE(t), i = pD(n, r);
	if (i) return i;
	var a, o;
	if ((!t.get("show") || e.scale.isBlank()) && (a = []), U(r)) a = yD(e, r, !0);
	else if (r === "auto") {
		var s = lD(e, e.getLabelModel());
		o = s.labelCategoryInterval, a = L(s.labels, function(e) {
			return e.tickValue;
		});
	} else o = r, a = vD(e, o, !0);
	return mD(n, r, {
		ticks: a,
		tickCategoryInterval: o
	});
}
function dD(e) {
	var t = e.scale.getTicks(), n = KE(e);
	return { labels: L(t, function(t, r) {
		return {
			level: t.level,
			formattedLabel: n(t, r),
			rawLabel: e.scale.getLabel(t),
			tickValue: t.value
		};
	}) };
}
function fD(e, t) {
	return iD(e)[t] || (iD(e)[t] = []);
}
function pD(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].key === t) return e[n].value;
}
function mD(e, t, n) {
	return e.push({
		key: t,
		value: n
	}), n;
}
function hD(e) {
	return iD(e).autoInterval ?? (iD(e).autoInterval = e.calculateCategoryInterval());
}
function gD(e) {
	var t = _D(e), n = KE(e), r = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = e.scale, a = i.getExtent(), o = i.count();
	if (a[1] - a[0] < 1) return 0;
	var s = 1;
	o > 40 && (s = Math.max(1, Math.floor(o / 40)));
	for (var c = a[0], l = e.dataToCoord(c + 1) - e.dataToCoord(c), u = Math.abs(l * Math.cos(r)), d = Math.abs(l * Math.sin(r)), f = 0, p = 0; c <= a[1]; c += s) {
		var m = 0, h = 0, g = At(n({ value: c }), t.font, "center", "top");
		m = g.width * 1.3, h = g.height * 1.3, f = Math.max(f, m, 7), p = Math.max(p, h, 7);
	}
	var _ = f / u, v = p / d;
	isNaN(_) && (_ = Infinity), isNaN(v) && (v = Infinity);
	var y = Math.max(0, Math.floor(Math.min(_, v))), b = iD(e.model), x = e.getExtent(), S = b.lastAutoInterval, C = b.lastTickCount;
	return S != null && C != null && Math.abs(S - y) <= 1 && Math.abs(C - o) <= 1 && S > y && b.axisExtent0 === x[0] && b.axisExtent1 === x[1] ? y = S : (b.lastTickCount = o, b.lastAutoInterval = y, b.axisExtent0 = x[0], b.axisExtent1 = x[1]), y;
}
function _D(e) {
	var t = e.getLabelModel();
	return {
		axisRotate: e.getRotate ? e.getRotate() : e.isHorizontal && !e.isHorizontal() ? 90 : 0,
		labelRotate: t.get("rotate") || 0,
		font: t.getFont()
	};
}
function vD(e, t, n) {
	var r = KE(e), i = e.scale, a = i.getExtent(), o = e.getLabelModel(), s = [], c = Math.max((t || 0) + 1, 1), l = a[0], u = i.count();
	l !== 0 && c > 1 && u / c > 2 && (l = Math.round(Math.ceil(l / c) * c));
	var d = ZE(e), f = o.get("showMinLabel") || d, p = o.get("showMaxLabel") || d;
	f && l !== a[0] && h(a[0]);
	for (var m = l; m <= a[1]; m += c) h(m);
	p && m - c !== a[1] && h(a[1]);
	function h(e) {
		var t = { value: e };
		s.push(n ? e : {
			formattedLabel: r(t),
			rawLabel: i.getLabel(t),
			tickValue: e
		});
	}
	return s;
}
function yD(e, t, n) {
	var r = e.scale, i = KE(e), a = [];
	return I(r.getTicks(), function(e) {
		var o = r.getLabel(e), s = e.value;
		t(e.value, o) && a.push(n ? s : {
			formattedLabel: i(e),
			rawLabel: o,
			tickValue: s
		});
	}), a;
}
//#endregion
//#region node_modules/echarts/lib/coord/Axis.js
var bD = [0, 1], xD = function() {
	function e(e, t, n) {
		this.onBand = !1, this.inverse = !1, this.dim = e, this.scale = t, this._extent = n || [0, 0];
	}
	return e.prototype.contain = function(e) {
		var t = this._extent, n = Math.min(t[0], t[1]), r = Math.max(t[0], t[1]);
		return e >= n && e <= r;
	}, e.prototype.containData = function(e) {
		return this.scale.contain(e);
	}, e.prototype.getExtent = function() {
		return this._extent.slice();
	}, e.prototype.getPixelPrecision = function(e) {
		return Xo(e || this.scale.getExtent(), this._extent);
	}, e.prototype.setExtent = function(e, t) {
		var n = this._extent;
		n[0] = e, n[1] = t;
	}, e.prototype.dataToCoord = function(e, t) {
		var n = this._extent, r = this.scale;
		return e = r.normalize(e), this.onBand && r.type === "ordinal" && (n = n.slice(), SD(n, r.count())), Wo(e, bD, n, t);
	}, e.prototype.coordToData = function(e, t) {
		var n = this._extent, r = this.scale;
		this.onBand && r.type === "ordinal" && (n = n.slice(), SD(n, r.count()));
		var i = Wo(e, n, bD, t);
		return this.scale.scale(i);
	}, e.prototype.pointToData = function(e, t) {}, e.prototype.getTicksCoords = function(e) {
		e ||= {};
		var t = e.tickModel || this.getTickModel(), n = sD(this, t).ticks, r = L(n, function(e) {
			return {
				coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(e) : e),
				tickValue: e
			};
		}, this), i = t.get("alignWithLabel");
		return CD(this, r, i, e.clamp), r;
	}, e.prototype.getMinorTicksCoords = function() {
		if (this.scale.type === "ordinal") return [];
		var e = this.model.getModel("minorTick").get("splitNumber");
		return e > 0 && e < 100 || (e = 5), L(this.scale.getMinorTicks(e), function(e) {
			return L(e, function(e) {
				return {
					coord: this.dataToCoord(e),
					tickValue: e
				};
			}, this);
		}, this);
	}, e.prototype.getViewLabels = function() {
		return oD(this).labels;
	}, e.prototype.getLabelModel = function() {
		return this.model.getModel("axisLabel");
	}, e.prototype.getTickModel = function() {
		return this.model.getModel("axisTick");
	}, e.prototype.getBandWidth = function() {
		var e = this._extent, t = this.scale.getExtent(), n = t[1] - t[0] + +!!this.onBand;
		n === 0 && (n = 1);
		var r = Math.abs(e[1] - e[0]);
		return Math.abs(r) / n;
	}, e.prototype.calculateCategoryInterval = function() {
		return gD(this);
	}, e;
}();
function SD(e, t) {
	var n = (e[1] - e[0]) / t / 2;
	e[0] += n, e[1] -= n;
}
function CD(e, t, n, r) {
	var i = t.length;
	if (!e.onBand || n || !i) return;
	var a = e.getExtent(), o, s;
	if (i === 1) t[0].coord = a[0], o = t[1] = {
		coord: a[1],
		tickValue: t[0].tickValue
	};
	else {
		var c = t[i - 1].tickValue - t[0].tickValue, l = (t[i - 1].coord - t[0].coord) / c;
		I(t, function(e) {
			e.coord -= l / 2;
		});
		var u = e.scale.getExtent();
		s = 1 + u[1] - t[i - 1].tickValue, o = {
			coord: t[i - 1].coord + l * s,
			tickValue: u[1] + 1
		}, t.push(o);
	}
	var d = a[0] > a[1];
	f(t[0].coord, a[0]) && (r ? t[0].coord = a[0] : t.shift()), r && f(a[0], t[0].coord) && t.unshift({ coord: a[0] }), f(a[1], o.coord) && (r ? o.coord = a[1] : t.pop()), r && f(o.coord, a[1]) && t.push({ coord: a[1] });
	function f(e, t) {
		return e = Ko(e), t = Ko(t), d ? e > t : e < t;
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/Axis2D.js
var wD = function(e) {
	c(t, e);
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
}(xD);
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
function TD(e, t, n) {
	n ||= {};
	var r = e.coordinateSystem, i = t.axis, a = {}, o = i.getAxesOnZeroOf()[0], s = i.position, c = o ? "onZero" : s, l = i.dim, u = r.getRect(), d = [
		u.x,
		u.x + u.width,
		u.y,
		u.y + u.height
	], f = {
		left: 0,
		right: 1,
		top: 0,
		bottom: 1,
		onZero: 2
	}, p = t.get("offset") || 0, m = l === "x" ? [d[2] - p, d[3] + p] : [d[0] - p, d[1] + p];
	if (o) {
		var h = o.toGlobalCoord(o.dataToCoord(0));
		m[f.onZero] = Math.max(Math.min(h, m[1]), m[0]);
	}
	a.position = [l === "y" ? m[f[c]] : d[0], l === "x" ? m[f[c]] : d[3]], a.rotation = Math.PI / 2 * (l === "x" ? 0 : 1), a.labelDirection = a.tickDirection = a.nameDirection = {
		top: -1,
		bottom: 1,
		left: -1,
		right: 1
	}[s], a.labelOffset = o ? m[f[s]] - m[f.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), ve(n.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
	var g = t.get(["axisLabel", "rotate"]);
	return a.labelRotate = c === "top" ? -g : g, a.z2 = 1, a;
}
function ED(e) {
	return e.get("coordinateSystem") === "cartesian2d";
}
function DD(e) {
	var t = {
		xAxisModel: null,
		yAxisModel: null
	};
	return I(t, function(n, r) {
		var i = r.replace(/Model$/, "");
		t[r] = e.getReferringComponents(i, Ws).models[0];
	}), t;
}
//#endregion
//#region node_modules/echarts/lib/coord/axisAlignTicks.js
var OD = Math.log;
function kD(e, t, n) {
	var r = mE.prototype, i = r.getTicks.call(n), a = r.getTicks.call(n, !0), o = i.length - 1, s = r.getInterval.call(n), c = VE(e, t), l = c.extent, u = c.fixMin, d = c.fixMax;
	if (e.type === "log") {
		var f = OD(e.base);
		l = [OD(l[0]) / f, OD(l[1]) / f];
	}
	e.setExtent(l[0], l[1]), e.calcNiceExtent({
		splitNumber: o,
		fixMin: u,
		fixMax: d
	});
	var p = r.getExtent.call(e);
	u && (l[0] = p[0]), d && (l[1] = p[1]);
	var m = r.getInterval.call(e), h = l[0], g = l[1];
	if (u && d) m = (g - h) / o;
	else if (u) for (g = l[0] + m * o; g < l[1] && isFinite(g) && isFinite(l[1]);) m = aE(m), g = l[0] + m * o;
	else if (d) for (h = l[1] - m * o; h > l[0] && isFinite(h) && isFinite(l[0]);) m = aE(m), h = l[1] - m * o;
	else {
		e.getTicks().length - 1 > o && (m = aE(m));
		var _ = m * o;
		g = Math.ceil(l[1] / m) * m, h = Ko(g - _), h < 0 && l[0] >= 0 ? (h = 0, g = Ko(_)) : g > 0 && l[1] <= 0 && (g = 0, h = -Ko(_));
	}
	var v = (i[0].value - a[0].value) / s, y = (i[o].value - a[o].value) / s;
	r.setExtent.call(e, h + m * v, g + m * y), r.setInterval.call(e, m), (v || y) && r.setNiceExtent.call(e, h + m, g - m);
}
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/Grid.js
var AD = function() {
	function e(e, t, n) {
		this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = tD, this._initCartesian(e, t, n), this.model = e;
	}
	return e.prototype.getRect = function() {
		return this._rect;
	}, e.prototype.update = function(e, t) {
		var n = this._axesMap;
		this._updateScale(e, this.model);
		function r(e) {
			var t, n = B(e), r = n.length;
			if (r) {
				for (var i = [], a = r - 1; a >= 0; a--) {
					var o = e[+n[a]], s = o.model, c = o.scale;
					rE(c) && s.get("alignTicks") && s.get("interval") == null ? i.push(o) : (UE(c, s), rE(c) && (t = o));
				}
				i.length && (t || (t = i.pop(), UE(t.scale, t.model)), I(i, function(e) {
					kD(e.scale, e.model, t.scale);
				}));
			}
		}
		r(n.x), r(n.y);
		var i = {};
		I(n.x, function(e) {
			MD(n, "y", e, i);
		}), I(n.y, function(e) {
			MD(n, "x", e, i);
		}), this.resize(this.model, t);
	}, e.prototype.resize = function(e, t, n) {
		var r = e.getBoxLayoutParams(), i = !n && e.get("containLabel"), a = gh(r, {
			width: t.getWidth(),
			height: t.getHeight()
		});
		this._rect = a;
		var o = this._axesList;
		s(), i && (I(o, function(e) {
			if (!e.model.get(["axisLabel", "inside"])) {
				var t = JE(e);
				if (t) {
					var n = e.isHorizontal() ? "height" : "width", r = e.model.get(["axisLabel", "margin"]);
					a[n] -= t[n] + r, e.position === "top" ? a.y += t.height + r : e.position === "left" && (a.x += t.width + r);
				}
			}
		}), s()), I(this._coordsList, function(e) {
			e.calcAffineTransform();
		});
		function s() {
			I(o, function(e) {
				var t = e.isHorizontal(), n = t ? [0, a.width] : [0, a.height], r = +!!e.inverse;
				e.setExtent(n[r], n[1 - r]), PD(e, t ? a.x : a.y);
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
		G(e) && (t = e.yAxisIndex, e = e.xAxisIndex);
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
		var t = e.seriesModel, n = e.xAxisModel || t && t.getReferringComponents("xAxis", Ws).models[0], r = e.yAxisModel || t && t.getReferringComponents("yAxis", Ws).models[0], i = e.gridModel, a = this._coordsList, o, s;
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
				var o = "x" + n + "y" + a, s = new rD(o);
				s.master = r, s.model = e, r._coordsMap[o] = s, r._coordsList.push(s), s.addAxis(t), s.addAxis(i);
			});
		});
		function c(t) {
			return function(n, r) {
				if (jD(n, e)) {
					var c = n.get("position");
					t === "x" ? c !== "top" && c !== "bottom" && (c = a.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = a.left ? "right" : "left"), a[c] = !0;
					var l = new wD(t, WE(n), [0, 0], n.get("type"), c);
					l.onBand = l.type === "category" && n.get("boundaryGap"), l.inverse = n.get("inverse"), n.axis = l, l.model = n, l.grid = i, l.index = r, i._axesList.push(l), o[t][r] = l, s[t]++;
				}
			};
		}
	}, e.prototype._updateScale = function(e, t) {
		I(this._axesList, function(e) {
			if (e.scale.setExtent(Infinity, -Infinity), e.type === "category") {
				var t = e.model.get("categorySortInfo");
				e.scale.setSortInfo(t);
			}
		}), e.eachSeries(function(e) {
			if (ED(e)) {
				var r = DD(e), i = r.xAxisModel, a = r.yAxisModel;
				if (!jD(i, t) || !jD(a, t)) return;
				var o = this.getCartesian(i.componentIndex, a.componentIndex), s = e.getData(), c = o.getAxis("x"), l = o.getAxis("y");
				n(s, c), n(s, l);
			}
		}, this);
		function n(e, t) {
			I(QE(e, t.dim), function(n) {
				t.scale.unionExtentFromData(e, n);
			});
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
			o.name = "grid_" + a, o.resize(i, n, !0), i.coordinateSystem = o, r.push(o);
		}), t.eachSeries(function(e) {
			if (ED(e)) {
				var t = DD(e), n = t.xAxisModel, r = t.yAxisModel;
				e.coordinateSystem = n.getCoordSysModel().coordinateSystem.getCartesian(n.componentIndex, r.componentIndex);
			}
		}), r;
	}, e.dimensions = tD, e;
}();
function jD(e, t) {
	return e.getCoordSysModel() === t;
}
function MD(e, t, n, r) {
	n.getAxesOnZeroOf = function() {
		return a ? [a] : [];
	};
	var i = e[t], a, o = n.model, s = o.get(["axisLine", "onZero"]), c = o.get(["axisLine", "onZeroAxisIndex"]);
	if (!s) return;
	if (c != null) ND(i[c]) && (a = i[c]);
	else for (var l in i) if (i.hasOwnProperty(l) && ND(i[l]) && !r[u(i[l])]) {
		a = i[l];
		break;
	}
	a && (r[u(a)] = !0);
	function u(e) {
		return e.dim + "_" + e.index;
	}
}
function ND(e) {
	return e && e.type !== "category" && e.type !== "time" && GE(e);
}
function PD(e, t) {
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
//#endregion
//#region node_modules/echarts/lib/component/axis/AxisBuilder.js
var FD = Math.PI, ID = function() {
	function e(e, t) {
		this.group = new Dl(), this.opt = t, this.axisModel = e, P(t, {
			labelOffset: 0,
			nameDirection: 1,
			tickDirection: 1,
			labelDirection: 1,
			silent: !0,
			handleAutoShown: function() {
				return !0;
			}
		});
		var n = new Dl({
			x: t.position[0],
			y: t.position[1],
			rotation: t.rotation
		});
		n.updateTransform(), this._transformGroup = n;
	}
	return e.prototype.hasBuilder = function(e) {
		return !!LD[e];
	}, e.prototype.add = function(e) {
		LD[e](this.opt, this.axisModel, this.group, this._transformGroup);
	}, e.prototype.getGroup = function() {
		return this.group;
	}, e.innerTextLayout = function(e, t, n) {
		var r = ts(t - e), i, a;
		return ns(r) ? (a = n > 0 ? "top" : "bottom", i = "center") : ns(r - FD) ? (a = n > 0 ? "bottom" : "top", i = "center") : (a = "middle", i = r > 0 && r < FD ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
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
}(), LD = {
	axisLine: function(e, t, n, r) {
		var i = t.get(["axisLine", "show"]);
		if (i === "auto" && e.handleAutoShown && (i = e.handleAutoShown("axisLine")), i) {
			var a = t.axis.getExtent(), o = r.transform, s = [a[0], 0], c = [a[1], 0], l = s[0] > c[0];
			o && (Sn(s, s, o), Sn(c, c, o));
			var u = N({ lineCap: "round" }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), d = new au({
				shape: {
					x1: s[0],
					y1: s[1],
					x2: c[0],
					y2: c[1]
				},
				style: u,
				strokeContainThreshold: e.strokeContainThreshold || 5,
				silent: !0,
				z2: 1
			});
			qu(d.shape, d.style.lineWidth), d.anid = "line", n.add(d);
			var f = t.get(["axisLine", "symbol"]);
			if (f != null) {
				var p = t.get(["axisLine", "symbolSize"]);
				W(f) && (f = [f, f]), (W(p) || ue(p)) && (p = [p, p]);
				var m = Rg(t.get(["axisLine", "symbolOffset"]) || 0, p), h = p[0], g = p[1];
				I([{
					rotate: e.rotation + Math.PI / 2,
					offset: m[0],
					r: 0
				}, {
					rotate: e.rotation - Math.PI / 2,
					offset: m[1],
					r: Math.sqrt((s[0] - c[0]) * (s[0] - c[0]) + (s[1] - c[1]) * (s[1] - c[1]))
				}], function(t, r) {
					if (f[r] !== "none" && f[r] != null) {
						var i = Ig(f[r], -h / 2, -g / 2, h, g, u.stroke, !0), a = t.r + t.offset, o = l ? c : s;
						i.attr({
							rotation: t.rotate,
							x: o[0] + a * Math.cos(e.rotation),
							y: o[1] - a * Math.sin(e.rotation),
							silent: !0,
							z2: 11
						}), n.add(i);
					}
				});
			}
		}
	},
	axisTickLabel: function(e, t, n, r) {
		var i = WD(n, r, t, e), a = KD(n, r, t, e);
		zD(t, a, i), GD(n, r, t, e.tickDirection), t.get(["axisLabel", "hideOverlap"]) && Ay(Ey(L(a, function(e) {
			return {
				label: e,
				priority: e.z2,
				defaultAttr: { ignore: e.ignore }
			};
		})));
	},
	axisName: function(e, t, n, r) {
		var i = ve(e.axisName, t.get("name"));
		if (i) {
			var a = t.get("nameLocation"), o = e.nameDirection, s = t.getModel("nameTextStyle"), c = t.get("nameGap") || 0, l = t.axis.getExtent(), u = l[0] > l[1] ? -1 : 1, d = [a === "start" ? l[0] - u * c : a === "end" ? l[1] + u * c : (l[0] + l[1]) / 2, HD(a) ? e.labelOffset + o * c : 0], f, p = t.get("nameRotate");
			p != null && (p = p * FD / 180);
			var m;
			HD(a) ? f = ID.innerTextLayout(e.rotation, p ?? e.rotation, o) : (f = RD(e.rotation, a, p || 0, l), m = e.axisNameAvailableWidth, m != null && (m = Math.abs(m / Math.sin(f.rotation)), !isFinite(m) && (m = null)));
			var h = s.getFont(), g = t.get("nameTruncate", !0) || {}, _ = g.ellipsis, v = ve(e.nameTruncateMaxWidth, g.maxWidth, m), y = new Do({
				x: d[0],
				y: d[1],
				rotation: f.rotation,
				silent: ID.isLabelSilent(t),
				style: _d(s, {
					text: i,
					font: h,
					overflow: "truncate",
					width: v,
					ellipsis: _,
					fill: s.getTextColor() || t.get([
						"axisLine",
						"lineStyle",
						"color"
					]),
					align: s.get("align") || f.textAlign,
					verticalAlign: s.get("verticalAlign") || f.textVerticalAlign
				}),
				z2: 1
			});
			if (ld({
				el: y,
				componentModel: t,
				itemName: i
			}), y.__fullText = i, y.anid = "name", t.get("triggerEvent")) {
				var b = ID.makeAxisEventDataBase(t);
				b.targetType = "axisName", b.name = i, Q(y).eventData = b;
			}
			r.add(y), y.updateTransform(), n.add(y), y.decomposeTransform();
		}
	}
};
function RD(e, t, n, r) {
	var i = ts(n - e), a, o, s = r[0] > r[1], c = t === "start" && !s || t !== "start" && s;
	return ns(i - FD / 2) ? (o = c ? "bottom" : "top", a = "center") : ns(i - FD * 1.5) ? (o = c ? "top" : "bottom", a = "center") : (o = "middle", a = i < FD * 1.5 && i > FD / 2 ? c ? "left" : "right" : c ? "right" : "left"), {
		rotation: i,
		textAlign: a,
		textVerticalAlign: o
	};
}
function zD(e, t, n) {
	if (!ZE(e.axis)) {
		var r = e.get(["axisLabel", "showMinLabel"]), i = e.get(["axisLabel", "showMaxLabel"]);
		t ||= [], n ||= [];
		var a = t[0], o = t[1], s = t[t.length - 1], c = t[t.length - 2], l = n[0], u = n[1], d = n[n.length - 1], f = n[n.length - 2];
		r === !1 ? (BD(a), BD(l)) : VD(a, o) && (r ? (BD(o), BD(u)) : (BD(a), BD(l))), i === !1 ? (BD(s), BD(d)) : VD(c, s) && (i ? (BD(c), BD(f)) : (BD(s), BD(d)));
	}
}
function BD(e) {
	e && (e.ignore = !0);
}
function VD(e, t) {
	var n = e && e.getBoundingRect().clone(), r = t && t.getBoundingRect().clone();
	if (n && r) {
		var i = dt([]);
		return ht(i, i, -e.rotation), n.applyTransform(pt([], i, e.getLocalTransform())), r.applyTransform(pt([], i, t.getLocalTransform())), n.intersect(r);
	}
}
function HD(e) {
	return e === "middle" || e === "center";
}
function UD(e, t, n, r, i) {
	for (var a = [], o = [], s = [], c = 0; c < e.length; c++) {
		var l = e[c].coord;
		o[0] = l, o[1] = 0, s[0] = l, s[1] = n, t && (Sn(o, o, t), Sn(s, s, t));
		var u = new au({
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
		qu(u.shape, u.style.lineWidth), u.anid = i + "_" + e[c].tickValue, a.push(u);
	}
	return a;
}
function WD(e, t, n, r) {
	var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
	if (o === "auto" && r.handleAutoShown && (o = r.handleAutoShown("axisTick")), o && !i.scale.isBlank()) {
		for (var s = a.getModel("lineStyle"), c = r.tickDirection * a.get("length"), l = UD(i.getTicksCoords(), t.transform, c, P(s.getLineStyle(), { stroke: n.get([
			"axisLine",
			"lineStyle",
			"color"
		]) }), "ticks"), u = 0; u < l.length; u++) e.add(l[u]);
		return l;
	}
}
function GD(e, t, n, r) {
	var i = n.axis, a = n.getModel("minorTick");
	if (a.get("show") && !i.scale.isBlank()) {
		var o = i.getMinorTicksCoords();
		if (o.length) for (var s = a.getModel("lineStyle"), c = r * a.get("length"), l = P(s.getLineStyle(), P(n.getModel("axisTick").getLineStyle(), { stroke: n.get([
			"axisLine",
			"lineStyle",
			"color"
		]) })), u = 0; u < o.length; u++) for (var d = UD(o[u], t.transform, c, l, "minorticks_" + u), f = 0; f < d.length; f++) e.add(d[f]);
	}
}
function KD(e, t, n, r) {
	var i = n.axis;
	if (ve(r.axisLabelShow, n.get(["axisLabel", "show"])) && !i.scale.isBlank()) {
		var a = n.getModel("axisLabel"), o = a.get("margin"), s = i.getViewLabels(), c = (ve(r.labelRotate, a.get("rotate")) || 0) * FD / 180, l = ID.innerTextLayout(r.rotation, c, r.labelDirection), u = n.getCategories && n.getCategories(!0), d = [], f = ID.isLabelSilent(n), p = n.get("triggerEvent");
		return I(s, function(c, m) {
			var h = i.scale.type === "ordinal" ? i.scale.getRawOrdinalNumber(c.tickValue) : c.tickValue, g = c.formattedLabel, _ = c.rawLabel, v = a;
			if (u && u[h]) {
				var y = u[h];
				G(y) && y.textStyle && (v = new zd(y.textStyle, a, n.ecModel));
			}
			var b = v.getTextColor() || n.get([
				"axisLine",
				"lineStyle",
				"color"
			]), x = i.dataToCoord(h), S = v.getShallow("align", !0) || l.textAlign, C = K(v.getShallow("alignMinLabel", !0), S), w = K(v.getShallow("alignMaxLabel", !0), S), T = v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || l.textVerticalAlign, E = K(v.getShallow("verticalAlignMinLabel", !0), T), D = K(v.getShallow("verticalAlignMaxLabel", !0), T), O = new Do({
				x,
				y: r.labelOffset + r.labelDirection * o,
				rotation: l.rotation,
				silent: f,
				z2: 10 + (c.level || 0),
				style: _d(v, {
					text: g,
					align: m === 0 ? C : m === s.length - 1 ? w : S,
					verticalAlign: m === 0 ? E : m === s.length - 1 ? D : T,
					fill: U(b) ? b(i.type === "category" ? _ : i.type === "value" ? h + "" : h, m) : b
				})
			});
			if (O.anid = "label_" + h, ld({
				el: O,
				componentModel: n,
				itemName: g,
				formatterParamsExtra: {
					isTruncated: function() {
						return O.isTruncated;
					},
					value: _,
					tickIndex: m
				}
			}), p) {
				var k = ID.makeAxisEventDataBase(n);
				k.targetType = "axisLabel", k.value = _, k.tickIndex = m, i.type === "category" && (k.dataIndex = h), Q(O).eventData = k;
			}
			t.add(O), O.updateTransform(), d.push(O), e.add(O), O.decomposeTransform();
		}), d;
	}
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/modelHelper.js
function qD(e, t) {
	var n = {
		axesInfo: {},
		seriesInvolved: !1,
		coordSysAxesInfo: {},
		coordSysMap: {}
	};
	return JD(n, e, t), n.seriesInvolved && XD(n, e), n;
}
function JD(e, t, n) {
	var r = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
	I(n.getCoordinateSystems(), function(n) {
		if (!n.axisPointerEnabled) return;
		var s = rO(n.model), c = e.coordSysAxesInfo[s] = {};
		e.coordSysMap[s] = n;
		var l = n.model.getModel("tooltip", r);
		if (I(n.getAxes(), ce(p, !1, null)), n.getTooltipAxes && r && l.get("show")) {
			var u = l.get("trigger") === "axis", d = l.get(["axisPointer", "type"]) === "cross", f = n.getTooltipAxes(l.get(["axisPointer", "axis"]));
			(u || d) && I(f.baseAxes, ce(p, !d || "cross", u)), d && I(f.otherAxes, ce(p, "cross", !1));
		}
		function p(r, s, u) {
			var d = u.model.getModel("axisPointer", i), f = d.get("show");
			if (f && (f !== "auto" || r || nO(d))) {
				s ??= d.get("triggerTooltip"), d = r ? YD(u, l, i, t, r, s) : d;
				var p = d.get("snap"), m = d.get("triggerEmphasis"), h = rO(u.model), g = s || p || u.type === "category", _ = e.axesInfo[h] = {
					key: h,
					axis: u,
					coordSys: n,
					axisPointerModel: d,
					triggerTooltip: s,
					triggerEmphasis: m,
					involveSeries: g,
					snap: p,
					useHandle: nO(d),
					seriesModels: [],
					linkGroup: null
				};
				c[h] = _, e.seriesInvolved = e.seriesInvolved || g;
				var v = ZD(a, u);
				if (v != null) {
					var y = o[v] || (o[v] = { axesInfo: {} });
					y.axesInfo[h] = _, y.mapper = a[v].mapper, _.linkGroup = y;
				}
			}
		}
	});
}
function YD(e, t, n, r, i, a) {
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
	return e.model.getModel("axisPointer", new zd(c, n, r));
}
function XD(e, t) {
	t.eachSeries(function(t) {
		var n = t.coordinateSystem, r = t.get(["tooltip", "trigger"], !0), i = t.get(["tooltip", "show"], !0);
		n && r !== "none" && r !== !1 && r !== "item" && i !== !1 && t.get(["axisPointer", "show"], !0) !== !1 && I(e.coordSysAxesInfo[rO(n.model)], function(e) {
			var r = e.axis;
			n.getAxis(r.dim) === r && (e.seriesModels.push(t), e.seriesDataCount ??= 0, e.seriesDataCount += t.getData().count());
		});
	});
}
function ZD(e, t) {
	for (var n = t.model, r = t.dim, i = 0; i < e.length; i++) {
		var a = e[i] || {};
		if (QD(a[r + "AxisId"], n.id) || QD(a[r + "AxisIndex"], n.componentIndex) || QD(a[r + "AxisName"], n.name)) return i;
	}
}
function QD(e, t) {
	return e === "all" || H(e) && F(e, t) >= 0 || e === t;
}
function $D(e) {
	var t = eO(e);
	if (t) {
		var n = t.axisPointerModel, r = t.axis.scale, i = n.option, a = n.get("status"), o = n.get("value");
		o != null && (o = r.parse(o));
		var s = nO(n);
		a ?? (i.status = s ? "show" : "hide");
		var c = r.getExtent().slice();
		c[0] > c[1] && c.reverse(), (o == null || o > c[1]) && (o = c[1]), o < c[0] && (o = c[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
	}
}
function eO(e) {
	var t = (e.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
	return t && t.axesInfo[rO(e)];
}
function tO(e) {
	var t = eO(e);
	return t && t.axisPointerModel;
}
function nO(e) {
	return !!e.get(["handle", "show"]);
}
function rO(e) {
	return e.type + "||" + e.id;
}
//#endregion
//#region node_modules/echarts/lib/component/axis/AxisView.js
var iO = {}, aO = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(t, n, r, i) {
		this.axisPointerClass && $D(t), e.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(t, r, !0);
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
			var a = tO(e);
			a ? (this._axisPointer ||= new i()).render(e, a, n, r) : this._disposeAxisPointer(n);
		}
	}, t.prototype._disposeAxisPointer = function(e) {
		this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
	}, t.registerAxisPointerClass = function(e, t) {
		iO[e] = t;
	}, t.getAxisPointerClass = function(e) {
		return e && iO[e];
	}, t.type = "axis", t;
}(mS), oO = Bs();
function sO(e, t, n, r) {
	var i = n.axis;
	if (!i.scale.isBlank()) {
		var a = n.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), c = r.coordinateSystem.getRect(), l = i.getTicksCoords({
			tickModel: a,
			clamp: !0
		});
		if (l.length) {
			var u = s.length, d = oO(e).splitAreaColors, f = q(), p = 0;
			if (d) for (var m = 0; m < l.length; m++) {
				var h = d.get(l[m].tickValue);
				if (h != null) {
					p = (h + (u - 1) * m) % u;
					break;
				}
			}
			var g = i.toGlobalCoord(l[0].coord), _ = o.getAreaStyle();
			s = H(s) ? s : [s];
			for (var m = 1; m < l.length; m++) {
				var v = i.toGlobalCoord(l[m].coord), y = void 0, b = void 0, x = void 0, S = void 0;
				i.isHorizontal() ? (y = g, b = c.y, x = v - y, S = c.height, g = y + x) : (y = c.x, b = g, x = c.width, S = v - b, g = b + S);
				var C = l[m - 1].tickValue;
				C != null && f.set(C, p), t.add(new Co({
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
			oO(e).splitAreaColors = f;
		}
	}
}
function cO(e) {
	oO(e).splitAreaColors = null;
}
//#endregion
//#region node_modules/echarts/lib/component/axis/CartesianAxisView.js
var lO = [
	"axisLine",
	"axisTickLabel",
	"axisName"
], uO = [
	"splitArea",
	"splitLine",
	"minorSplitLine"
], dO = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.axisPointerClass = "CartesianAxisPointer", n;
	}
	return t.prototype.render = function(t, n, r, i) {
		this.group.removeAll();
		var a = this._axisGroup;
		if (this._axisGroup = new Dl(), this.group.add(this._axisGroup), t.get("show")) {
			var o = t.getCoordSysModel(), s = new ID(t, N({ handleAutoShown: function(e) {
				for (var n = o.coordinateSystem.getCartesians(), r = 0; r < n.length; r++) if (rE(n[r].getOtherAxis(t.axis).scale)) return !0;
				return !1;
			} }, TD(o, t)));
			I(lO, s.add, s), this._axisGroup.add(s.getGroup()), I(uO, function(e) {
				t.get([e, "show"]) && fO[e](this, this._axisGroup, t, o);
			}, this), i && i.type === "changeAxisOrder" && i.isInitSort || td(a, this._axisGroup, t), e.prototype.render.call(this, t, n, r, i);
		}
	}, t.prototype.remove = function() {
		cO(this);
	}, t.type = "cartesianAxis", t;
}(aO), fO = {
	splitLine: function(e, t, n, r) {
		var i = n.axis;
		if (!i.scale.isBlank()) {
			var a = n.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color"), c = a.get("showMinLine") !== !1, l = a.get("showMaxLine") !== !1;
			s = H(s) ? s : [s];
			for (var u = r.coordinateSystem.getRect(), d = i.isHorizontal(), f = 0, p = i.getTicksCoords({ tickModel: a }), m = [], h = [], g = o.getLineStyle(), _ = 0; _ < p.length; _++) {
				var v = i.toGlobalCoord(p[_].coord);
				if (!(_ === 0 && !c || _ === p.length - 1 && !l)) {
					var y = p[_].tickValue;
					d ? (m[0] = v, m[1] = u.y, h[0] = v, h[1] = u.y + u.height) : (m[0] = u.x, m[1] = v, h[0] = u.x + u.width, h[1] = v);
					var b = f++ % s.length, x = new au({
						anid: y == null ? null : "line_" + y,
						autoBatch: !0,
						shape: {
							x1: m[0],
							y1: m[1],
							x2: h[0],
							y2: h[1]
						},
						style: P({ stroke: s[b] }, g),
						silent: !0
					});
					qu(x.shape, g.lineWidth), t.add(x);
				}
			}
		}
	},
	minorSplitLine: function(e, t, n, r) {
		var i = n.axis, a = n.getModel("minorSplitLine").getModel("lineStyle"), o = r.coordinateSystem.getRect(), s = i.isHorizontal(), c = i.getMinorTicksCoords();
		if (c.length) for (var l = [], u = [], d = a.getLineStyle(), f = 0; f < c.length; f++) for (var p = 0; p < c[f].length; p++) {
			var m = i.toGlobalCoord(c[f][p].coord);
			s ? (l[0] = m, l[1] = o.y, u[0] = m, u[1] = o.y + o.height) : (l[0] = o.x, l[1] = m, u[0] = o.x + o.width, u[1] = m);
			var h = new au({
				anid: "minor_line_" + c[f][p].tickValue,
				autoBatch: !0,
				shape: {
					x1: l[0],
					y1: l[1],
					x2: u[0],
					y2: u[1]
				},
				style: d,
				silent: !0
			});
			qu(h.shape, d.lineWidth), t.add(h);
		}
	},
	splitArea: function(e, t, n, r) {
		sO(e, t, n, r);
	}
}, pO = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "xAxis", t;
}(dO), mO = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = pO.type, t;
	}
	return t.type = "yAxis", t;
}(dO), hO = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "grid", t;
	}
	return t.prototype.render = function(e, t) {
		this.group.removeAll(), e.get("show") && this.group.add(new Co({
			shape: e.coordinateSystem.getRect(),
			style: P({ fill: e.get("backgroundColor") }, e.getItemStyle()),
			silent: !0,
			z2: -1
		}));
	}, t.type = "grid", t;
}(mS), gO = { offset: 0 };
function _O(e) {
	e.registerComponentView(hO), e.registerComponentModel(UT), e.registerCoordinateSystem("cartesian2d", AD), eE(e, "x", GT, gO), eE(e, "y", GT, gO), e.registerComponentView(pO), e.registerComponentView(mO), e.registerPreprocessor(function(e) {
		e.xAxis && e.yAxis && !e.grid && (e.grid = {});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/helper/interactionMutex.js
var vO = "\0_ec_interaction_mutex";
function yO(e, t) {
	return !!bO(e)[t];
}
function bO(e) {
	return e[vO] || (e[vO] = {});
}
DT({
	type: "takeGlobalCursor",
	event: "globalCursorTaken",
	update: "update"
}, Pe);
//#endregion
//#region node_modules/echarts/lib/component/helper/RoamController.js
var xO = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this) || this;
		n._zr = t;
		var r = V(n._mousedownHandler, n), i = V(n._mousemoveHandler, n), a = V(n._mouseupHandler, n), o = V(n._mousewheelHandler, n), s = V(n._pinchHandler, n);
		return n.enable = function(e, n) {
			this.disable(), this._opt = P(j(n) || {}, {
				zoomOnMouseWheel: !0,
				moveOnMouseMove: !0,
				moveOnMouseWheel: !1,
				preventDefaultMouseMove: !0
			}), e ??= !0, (e === !0 || e === "move" || e === "pan") && (t.on("mousedown", r), t.on("mousemove", i), t.on("mouseup", a)), (e === !0 || e === "scale" || e === "zoom") && (t.on("mousewheel", o), t.on("pinch", s));
		}, n.disable = function() {
			t.off("mousedown", r), t.off("mousemove", i), t.off("mouseup", a), t.off("mousewheel", o), t.off("pinch", s);
		}, n;
	}
	return t.prototype.isDragging = function() {
		return this._dragging;
	}, t.prototype.isPinching = function() {
		return this._pinching;
	}, t.prototype.setPointerChecker = function(e) {
		this.pointerChecker = e;
	}, t.prototype.dispose = function() {
		this.disable();
	}, t.prototype._mousedownHandler = function(e) {
		if (!ib(e)) {
			for (var t = e.target; t;) {
				if (t.draggable) return;
				t = t.__hostTarget || t.parent;
			}
			var n = e.offsetX, r = e.offsetY;
			this.pointerChecker && this.pointerChecker(e, n, r) && (this._x = n, this._y = r, this._dragging = !0);
		}
	}, t.prototype._mousemoveHandler = function(e) {
		if (this._dragging && wO("moveOnMouseMove", e, this._opt) && e.gestureEvent !== "pinch" && !yO(this._zr, "globalPan")) {
			var t = e.offsetX, n = e.offsetY, r = this._x, i = this._y, a = t - r, o = n - i;
			this._x = t, this._y = n, this._opt.preventDefaultMouseMove && rb(e.event), CO(this, "pan", "moveOnMouseMove", e, {
				dx: a,
				dy: o,
				oldX: r,
				oldY: i,
				newX: t,
				newY: n,
				isAvailableBehavior: null
			});
		}
	}, t.prototype._mouseupHandler = function(e) {
		ib(e) || (this._dragging = !1);
	}, t.prototype._mousewheelHandler = function(e) {
		var t = wO("zoomOnMouseWheel", e, this._opt), n = wO("moveOnMouseWheel", e, this._opt), r = e.wheelDelta, i = Math.abs(r), a = e.offsetX, o = e.offsetY;
		if (r !== 0 && (t || n)) {
			if (t) {
				var s = i > 3 ? 1.4 : i > 1 ? 1.2 : 1.1, c = r > 0 ? s : 1 / s;
				SO(this, "zoom", "zoomOnMouseWheel", e, {
					scale: c,
					originX: a,
					originY: o,
					isAvailableBehavior: null
				});
			}
			if (n) {
				var l = Math.abs(r), u = (r > 0 ? 1 : -1) * (l > 3 ? .4 : l > 1 ? .15 : .05);
				SO(this, "scrollMove", "moveOnMouseWheel", e, {
					scrollDelta: u,
					originX: a,
					originY: o,
					isAvailableBehavior: null
				});
			}
		}
	}, t.prototype._pinchHandler = function(e) {
		if (!yO(this._zr, "globalPan")) {
			var t = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
			SO(this, "zoom", null, e, {
				scale: t,
				originX: e.pinchX,
				originY: e.pinchY,
				isAvailableBehavior: null
			});
		}
	}, t;
}(Ai);
function SO(e, t, n, r, i) {
	e.pointerChecker && e.pointerChecker(r, i.originX, i.originY) && (rb(r.event), CO(e, t, n, r, i));
}
function CO(e, t, n, r, i) {
	i.isAvailableBehavior = V(wO, null, n, r), e.trigger(t, i);
}
function wO(e, t, n) {
	var r = n[e];
	return !e || r && (!W(r) || t.event[r + "Key"]);
}
//#endregion
//#region node_modules/echarts/lib/component/helper/roamHelper.js
function TO(e, t, n) {
	var r = e.target;
	r.x += t, r.y += n, r.dirty();
}
function EO(e, t, n, r) {
	var i = e.target, a = e.zoomLimit, o = e.zoom = e.zoom || 1;
	if (o *= t, a) {
		var s = a.min || 0, c = a.max || Infinity;
		o = Math.max(Math.min(c, o), s);
	}
	var l = o / e.zoom;
	e.zoom = o, i.x -= (n - i.x) * (l - 1), i.y -= (r - i.y) * (l - 1), i.scaleX *= l, i.scaleY *= l, i.dirty();
}
//#endregion
//#region node_modules/echarts/lib/component/helper/cursorHelper.js
var DO = {
	axisPointer: 1,
	tooltip: 1,
	brush: 1
};
function OO(e, t, n) {
	var r = t.getComponentByElement(e.topTarget), i = r && r.coordinateSystem;
	return r && r !== n && !DO.hasOwnProperty(r.mainType) && i && i.model !== n;
}
//#endregion
//#region node_modules/zrender/lib/tool/parseXML.js
function kO(e) {
	W(e) && (e = new DOMParser().parseFromString(e, "text/xml"));
	var t = e;
	for (t.nodeType === 9 && (t = t.firstChild); t.nodeName.toLowerCase() !== "svg" || t.nodeType !== 1;) t = t.nextSibling;
	return t;
}
//#endregion
//#region node_modules/zrender/lib/tool/parseSVG.js
var AO, jO = {
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
}, MO = B(jO), NO = {
	"alignment-baseline": "textBaseline",
	"stop-color": "stopColor"
}, PO = B(NO), FO = function() {
	function e() {
		this._defs = {}, this._root = null;
	}
	return e.prototype.parse = function(e, t) {
		t ||= {};
		var n = kO(e);
		this._defsUsePending = [];
		var r = new Dl();
		this._root = r;
		var i = [], a = n.getAttribute("viewBox") || "", o = parseFloat(n.getAttribute("width") || t.width), s = parseFloat(n.getAttribute("height") || t.height);
		isNaN(o) && (o = null), isNaN(s) && (s = null), VO(n, r, null, !0, !1);
		for (var c = n.firstChild; c;) this._parseNode(c, r, i, null, !1, !1), c = c.nextSibling;
		GO(this._defs, this._defsUsePending), this._defsUsePending = [];
		var l, u;
		if (a) {
			var d = qO(a);
			d.length >= 4 && (l = {
				x: parseFloat(d[0] || 0),
				y: parseFloat(d[1] || 0),
				width: parseFloat(d[2]),
				height: parseFloat(d[3])
			});
		}
		if (l && o != null && s != null && (u = ek(l, {
			x: 0,
			y: 0,
			width: o,
			height: s
		}), !t.ignoreViewBox)) {
			var f = r;
			r = new Dl(), r.add(f), f.scaleX = f.scaleY = u.scale, f.x = u.x, f.y = u.y;
		}
		return !t.ignoreRootClip && o != null && s != null && r.setClipPath(new Co({ shape: {
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
				var l = AO[o];
				if (l && J(AO, o)) {
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
			var f = IO[o];
			if (f && J(IO, o)) {
				var p = f.call(this, e), m = e.getAttribute("id");
				m && (this._defs[m] = p);
			}
		}
		if (s && s.isGroup) for (var h = e.firstChild; h;) h.nodeType === 1 ? this._parseNode(h, s, n, c, i, a) : h.nodeType === 3 && a && this._parseText(h, s), h = h.nextSibling;
	}, e.prototype._parseText = function(e, t) {
		var n = new uo({
			style: { text: e.textContent },
			silent: !0,
			x: this._textX || 0,
			y: this._textY || 0
		});
		zO(t, n), VO(e, n, this._defsUsePending, !1, !1), HO(n, t);
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
		AO = {
			g: function(e, t) {
				var n = new Dl();
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n;
			},
			rect: function(e, t) {
				var n = new Co();
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n.setShape({
					x: parseFloat(e.getAttribute("x") || "0"),
					y: parseFloat(e.getAttribute("y") || "0"),
					width: parseFloat(e.getAttribute("width") || "0"),
					height: parseFloat(e.getAttribute("height") || "0")
				}), n.silent = !0, n;
			},
			circle: function(e, t) {
				var n = new kl();
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n.setShape({
					cx: parseFloat(e.getAttribute("cx") || "0"),
					cy: parseFloat(e.getAttribute("cy") || "0"),
					r: parseFloat(e.getAttribute("r") || "0")
				}), n.silent = !0, n;
			},
			line: function(e, t) {
				var n = new au();
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n.setShape({
					x1: parseFloat(e.getAttribute("x1") || "0"),
					y1: parseFloat(e.getAttribute("y1") || "0"),
					x2: parseFloat(e.getAttribute("x2") || "0"),
					y2: parseFloat(e.getAttribute("y2") || "0")
				}), n.silent = !0, n;
			},
			ellipse: function(e, t) {
				var n = new jl();
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n.setShape({
					cx: parseFloat(e.getAttribute("cx") || "0"),
					cy: parseFloat(e.getAttribute("cy") || "0"),
					rx: parseFloat(e.getAttribute("rx") || "0"),
					ry: parseFloat(e.getAttribute("ry") || "0")
				}), n.silent = !0, n;
			},
			polygon: function(e, t) {
				var n = e.getAttribute("points"), r;
				n && (r = BO(n));
				var i = new eu({
					shape: { points: r || [] },
					silent: !0
				});
				return zO(t, i), VO(e, i, this._defsUsePending, !1, !1), i;
			},
			polyline: function(e, t) {
				var n = e.getAttribute("points"), r;
				n && (r = BO(n));
				var i = new nu({
					shape: { points: r || [] },
					silent: !0
				});
				return zO(t, i), VO(e, i, this._defsUsePending, !1, !1), i;
			},
			image: function(e, t) {
				var n = new ho();
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n.setStyle({
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
				var o = new Dl();
				return zO(t, o), VO(e, o, this._defsUsePending, !1, !0), o;
			},
			tspan: function(e, t) {
				var n = e.getAttribute("x"), r = e.getAttribute("y");
				n != null && (this._textX = parseFloat(n)), r != null && (this._textY = parseFloat(r));
				var i = e.getAttribute("dx") || "0", a = e.getAttribute("dy") || "0", o = new Dl();
				return zO(t, o), VO(e, o, this._defsUsePending, !1, !0), this._textX += parseFloat(i), this._textY += parseFloat(a), o;
			},
			path: function(e, t) {
				var n = wl(e.getAttribute("d") || "");
				return zO(t, n), VO(e, n, this._defsUsePending, !1, !1), n.silent = !0, n;
			}
		};
	})(), e;
}(), IO = {
	lineargradient: function(e) {
		var t = new mu(parseInt(e.getAttribute("x1") || "0", 10), parseInt(e.getAttribute("y1") || "0", 10), parseInt(e.getAttribute("x2") || "10", 10), parseInt(e.getAttribute("y2") || "0", 10));
		return LO(e, t), RO(e, t), t;
	},
	radialgradient: function(e) {
		var t = new hu(parseInt(e.getAttribute("cx") || "0", 10), parseInt(e.getAttribute("cy") || "0", 10), parseInt(e.getAttribute("r") || "0", 10));
		return LO(e, t), RO(e, t), t;
	}
};
function LO(e, t) {
	e.getAttribute("gradientUnits") === "userSpaceOnUse" && (t.global = !0);
}
function RO(e, t) {
	for (var n = e.firstChild; n;) {
		if (n.nodeType === 1 && n.nodeName.toLocaleLowerCase() === "stop") {
			var r = n.getAttribute("offset"), i = void 0;
			i = r && r.indexOf("%") > 0 ? parseInt(r, 10) / 100 : r ? parseFloat(r) : 0;
			var a = {};
			QO(n, a, a);
			var o = a.stopColor || n.getAttribute("stop-color") || "#000000";
			t.colorStops.push({
				offset: i,
				color: o
			});
		}
		n = n.nextSibling;
	}
}
function zO(e, t) {
	e && e.__inheritedStyle && (t.__inheritedStyle ||= {}, P(t.__inheritedStyle, e.__inheritedStyle));
}
function BO(e) {
	for (var t = qO(e), n = [], r = 0; r < t.length; r += 2) {
		var i = parseFloat(t[r]), a = parseFloat(t[r + 1]);
		n.push([i, a]);
	}
	return n;
}
function VO(e, t, n, r, i) {
	var a = t, o = a.__inheritedStyle = a.__inheritedStyle || {}, s = {};
	e.nodeType === 1 && (XO(e, t), QO(e, o, s), r || $O(e, o, s)), a.style = a.style || {}, o.fill != null && (a.style.fill = WO(a, "fill", o.fill, n)), o.stroke != null && (a.style.stroke = WO(a, "stroke", o.stroke, n)), I([
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
	}), i && (a.__selfStyle = s), o.lineDash && (a.style.lineDash = L(qO(o.lineDash), function(e) {
		return parseFloat(e);
	})), (o.visibility === "hidden" || o.visibility === "collapse") && (a.invisible = !0), o.display === "none" && (a.ignore = !0);
}
function HO(e, t) {
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
var UO = /^url\(\s*#(.*?)\)/;
function WO(e, t, n, r) {
	var i = n && n.match(UO);
	if (i) {
		var a = Ce(i[1]);
		r.push([
			e,
			t,
			a
		]);
	} else return n === "none" && (n = null), n;
}
function GO(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r[0].style[r[1]] = e[r[2]];
	}
}
var KO = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function qO(e) {
	return e.match(KO) || [];
}
var JO = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g, YO = Math.PI / 180;
function XO(e, t) {
	var n = e.getAttribute("transform");
	if (n) {
		n = n.replace(/,/g, " ");
		var r = [], i = null;
		n.replace(JO, function(e, t, n) {
			return r.push(t, n), "";
		});
		for (var a = r.length - 1; a > 0; a -= 2) {
			var o = r[a], s = r[a - 1], c = qO(o);
			switch (i ||= ut(), s) {
				case "translate":
					mt(i, i, [parseFloat(c[0]), parseFloat(c[1] || "0")]);
					break;
				case "scale":
					gt(i, i, [parseFloat(c[0]), parseFloat(c[1] || c[0])]);
					break;
				case "rotate":
					ht(i, i, -parseFloat(c[0]) * YO, [parseFloat(c[1] || "0"), parseFloat(c[2] || "0")]);
					break;
				case "skewX":
					var l = Math.tan(parseFloat(c[0]) * YO);
					pt(i, [
						1,
						0,
						l,
						1,
						0,
						0
					], i);
					break;
				case "skewY":
					var u = Math.tan(parseFloat(c[0]) * YO);
					pt(i, [
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
var ZO = /([^\s:;]+)\s*:\s*([^:;]+)/g;
function QO(e, t, n) {
	var r = e.getAttribute("style");
	if (r) {
		ZO.lastIndex = 0;
		for (var i; (i = ZO.exec(r)) != null;) {
			var a = i[1], o = J(jO, a) ? jO[a] : null;
			o && (t[o] = i[2]);
			var s = J(NO, a) ? NO[a] : null;
			s && (n[s] = i[2]);
		}
	}
}
function $O(e, t, n) {
	for (var r = 0; r < MO.length; r++) {
		var i = MO[r], a = e.getAttribute(i);
		a != null && (t[jO[i]] = a);
	}
	for (var r = 0; r < PO.length; r++) {
		var i = PO[r], a = e.getAttribute(i);
		a != null && (n[NO[i]] = a);
	}
}
function ek(e, t) {
	var n = t.width / e.width, r = t.height / e.height, i = Math.min(n, r);
	return {
		scale: i,
		x: -(e.x + e.width / 2) * i + (t.x + t.width / 2),
		y: -(e.y + e.height / 2) * i + (t.y + t.height / 2)
	};
}
function tk(e, t) {
	return new FO().parse(e, t);
}
//#endregion
//#region node_modules/zrender/lib/contain/polygon.js
var nk = 1e-8;
function rk(e, t) {
	return Math.abs(e - t) < nk;
}
function ik(e, t, n) {
	var r = 0, i = e[0];
	if (!i) return !1;
	for (var a = 1; a < e.length; a++) {
		var o = e[a];
		r += Ga(i[0], i[1], o[0], o[1], t, n), i = o;
	}
	var s = e[0];
	return (!rk(i[0], s[0]) || !rk(i[1], s[1])) && (r += Ga(i[0], i[1], s[0], s[1], t, n)), r !== 0;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/Region.js
var ak = [];
function ok(e, t) {
	for (var n = 0; n < e.length; n++) Sn(e[n], e[n], t);
}
function sk(e, t, n, r) {
	for (var i = 0; i < e.length; i++) {
		var a = e[i];
		r && (a = r.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (Cn(t, t, a), wn(n, n, a));
	}
}
function ck(e) {
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
var lk = function() {
	function e(e) {
		this.name = e;
	}
	return e.prototype.setCenter = function(e) {
		this._center = e;
	}, e.prototype.getCenter = function() {
		var e = this._center;
		return e ||= this._center = this.calcCenter(), e;
	}, e;
}(), uk = function() {
	function e(e, t) {
		this.type = "polygon", this.exterior = e, this.interiors = t;
	}
	return e;
}(), dk = function() {
	function e(e) {
		this.type = "linestring", this.points = e;
	}
	return e;
}(), fk = function(e) {
	c(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.type = "geoJSON", i.geometries = n, i._center = r && [r[0], r[1]], i;
	}
	return t.prototype.calcCenter = function() {
		for (var e = this.geometries, t, n = 0, r = 0; r < e.length; r++) {
			var i = e[r], a = i.exterior, o = a && a.length;
			o > n && (t = i, n = o);
		}
		if (t) return ck(t.exterior);
		var s = this.getBoundingRect();
		return [s.x + s.width / 2, s.y + s.height / 2];
	}, t.prototype.getBoundingRect = function(e) {
		var t = this._rect;
		if (t && !e) return t;
		var n = [Infinity, Infinity], r = [-Infinity, -Infinity], i = this.geometries;
		return I(i, function(t) {
			t.type === "polygon" ? sk(t.exterior, n, r, e) : I(t.points, function(t) {
				sk(t, n, r, e);
			});
		}), isFinite(n[0]) && isFinite(n[1]) && isFinite(r[0]) && isFinite(r[1]) || (n[0] = n[1] = r[0] = r[1] = 0), t = new Z(n[0], n[1], r[0] - n[0], r[1] - n[1]), e || (this._rect = t), t;
	}, t.prototype.contain = function(e) {
		var t = this.getBoundingRect(), n = this.geometries;
		if (!t.contain(e[0], e[1])) return !1;
		loopGeo: for (var r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			if (a.type === "polygon") {
				var o = a.exterior, s = a.interiors;
				if (ik(o, e[0], e[1])) {
					for (var c = 0; c < (s ? s.length : 0); c++) if (ik(s[c], e[0], e[1])) continue loopGeo;
					return !0;
				}
			}
		}
		return !1;
	}, t.prototype.transformTo = function(e, t, n, r) {
		var i = this.getBoundingRect(), a = i.width / i.height;
		n ? r ||= n / a : n = a * r;
		for (var o = new Z(e, t, n, r), s = i.calculateTransform(o), c = this.geometries, l = 0; l < c.length; l++) {
			var u = c[l];
			u.type === "polygon" ? (ok(u.exterior, s), I(u.interiors, function(e) {
				ok(e, s);
			})) : I(u.points, function(e) {
				ok(e, s);
			});
		}
		i = this._rect, i.copy(o), this._center = [i.x + i.width / 2, i.y + i.height / 2];
	}, t.prototype.cloneShallow = function(e) {
		e ??= this.name;
		var n = new t(e, this.geometries, this._center);
		return n._rect = this._rect, n.transformTo = null, n;
	}, t;
}(lk), pk = function(e) {
	c(t, e);
	function t(t, n) {
		var r = e.call(this, t) || this;
		return r.type = "geoSVG", r._elOnlyForCalculate = n, r;
	}
	return t.prototype.calcCenter = function() {
		for (var e = this._elOnlyForCalculate, t = e.getBoundingRect(), n = [t.x + t.width / 2, t.y + t.height / 2], r = dt(ak), i = e; i && !i.isGeoSVGGraphicRoot;) pt(r, i.getLocalTransform(), r), i = i.parent;
		return _t(r, r), Sn(n, n, r), n;
	}, t;
}(lk), mk = q([
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
]), hk = function() {
	function e(e, t) {
		this.type = "geoSVG", this._usedGraphicMap = q(), this._freedGraphics = [], this._mapName = e, this._parsedXML = kO(t);
	}
	return e.prototype.load = function() {
		var e = this._firstGraphic;
		if (!e) {
			e = this._firstGraphic = this._buildGraphic(this._parsedXML), this._freedGraphics.push(e), this._boundingRect = this._firstGraphic.boundingRect.clone();
			var t = _k(e.named), n = t.regions, r = t.regionsMap;
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
			t = e && tk(e, {
				ignoreViewBox: !0,
				ignoreRootClip: !0
			}) || {}, n = t.root, Se(n != null);
		} catch (e) {
			throw Error("Invalid svg format\n" + e.message);
		}
		var r = new Dl();
		r.add(n), r.isGeoSVGGraphicRoot = !0;
		var i = t.width, a = t.height, o = t.viewBoxRect, s = this._boundingRect;
		if (!s) {
			var c = void 0, l = void 0, u = void 0, d = void 0;
			if (i == null ? o && (c = o.x, u = o.width) : (c = 0, u = i), a == null ? o && (l = o.y, d = o.height) : (l = 0, d = a), c == null || l == null) {
				var f = n.getBoundingRect();
				c ?? (c = f.x, u = f.width), l ?? (l = f.y, d = f.height);
			}
			s = this._boundingRect = new Z(c, l, u, d);
		}
		if (o) {
			var p = ek(o, s);
			n.scaleX = n.scaleY = p.scale, n.x = p.x, n.y = p.y;
		}
		r.setClipPath(new Co({ shape: s.plain() }));
		var m = [];
		return I(t.named, function(e) {
			mk.get(e.svgNodeTagLower) != null && (m.push(e), gk(e.el));
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
function gk(e) {
	e.silent = !1, e.isGroup && e.traverse(function(e) {
		e.silent = !1;
	});
}
function _k(e) {
	var t = [], n = q();
	return I(e, function(e) {
		if (e.namedFrom == null) {
			var r = new pk(e.name, e.el);
			t.push(r), n.set(e.name, r);
		}
	}), {
		regions: t,
		regionsMap: n
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/parseGeoJson.js
function vk(e) {
	if (!e.UTF8Encoding) return e;
	var t = e, n = t.UTF8Scale;
	n ??= 1024;
	var r = t.features;
	return I(r, function(e) {
		var t = e.geometry, r = t.encodeOffsets, i = t.coordinates;
		if (r) switch (t.type) {
			case "LineString":
				t.coordinates = bk(i, r, n);
				break;
			case "Polygon":
				yk(i, r, n);
				break;
			case "MultiLineString":
				yk(i, r, n);
				break;
			case "MultiPolygon": I(i, function(e, t) {
				return yk(e, r[t], n);
			});
		}
	}), t.UTF8Encoding = !1, t;
}
function yk(e, t, n) {
	for (var r = 0; r < e.length; r++) e[r] = bk(e[r], t[r], n);
}
function bk(e, t, n) {
	for (var r = [], i = t[0], a = t[1], o = 0; o < e.length; o += 2) {
		var s = e.charCodeAt(o) - 64, c = e.charCodeAt(o + 1) - 64;
		s = s >> 1 ^ -(s & 1), c = c >> 1 ^ -(c & 1), s += i, c += a, i = s, a = c, r.push([s / n, c / n]);
	}
	return r;
}
function xk(e, t) {
	return e = vk(e), L(R(e.features, function(e) {
		return e.geometry && e.properties && e.geometry.coordinates.length > 0;
	}), function(e) {
		var n = e.properties, r = e.geometry, i = [];
		switch (r.type) {
			case "Polygon":
				var a = r.coordinates;
				i.push(new uk(a[0], a.slice(1)));
				break;
			case "MultiPolygon":
				I(r.coordinates, function(e) {
					e[0] && i.push(new uk(e[0], e.slice(1)));
				});
				break;
			case "LineString":
				i.push(new dk([r.coordinates]));
				break;
			case "MultiLineString": i.push(new dk(r.coordinates));
		}
		var o = new fk(n[t || "name"], i, n.cp);
		return o.properties = n, o;
	});
}
for (var Sk = [126, 25], Ck = "南海诸岛", wk = [
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
], Tk = 0; Tk < wk.length; Tk++) for (var Ek = 0; Ek < wk[Tk].length; Ek++) wk[Tk][Ek][0] /= 10.5, wk[Tk][Ek][1] /= -14, wk[Tk][Ek][0] += Sk[0], wk[Tk][Ek][1] += Sk[1];
function Dk(e, t) {
	if (e === "china") {
		for (var n = 0; n < t.length; n++) if (t[n].name === Ck) return;
		t.push(new fk(Ck, L(wk, function(e) {
			return {
				type: "polygon",
				exterior: e
			};
		}), Sk));
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/fix/textCoord.js
var Ok = {
	南海诸岛: [32, 80],
	广东: [0, -10],
	香港: [10, 5],
	澳门: [-10, 10],
	天津: [5, 5]
};
function kk(e, t) {
	if (e === "china") {
		var n = Ok[t.name];
		if (n) {
			var r = t.getCenter();
			r[0] += n[0] / 10.5, r[1] += -n[1] / 14, t.setCenter(r);
		}
	}
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js
var Ak = [[
	[123.45165252685547, 25.73527164402261],
	[123.49731445312499, 25.73527164402261],
	[123.49731445312499, 25.750734064600884],
	[123.45165252685547, 25.750734064600884],
	[123.45165252685547, 25.73527164402261]
]];
function jk(e, t) {
	e === "china" && t.name === "台湾" && t.geometries.push({
		type: "polygon",
		exterior: Ak[0]
	});
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/GeoJSONResource.js
var Mk = "name", Nk = function() {
	function e(e, t, n) {
		this.type = "geoJSON", this._parsedMap = q(), this._mapName = e, this._specialAreas = n, this._geoJSON = Fk(t);
	}
	return e.prototype.load = function(e, t) {
		t ||= Mk;
		var n = this._parsedMap.get(t);
		if (!n) {
			var r = this._parseToRegions(t);
			n = this._parsedMap.set(t, {
				regions: r,
				boundingRect: Pk(r)
			});
		}
		var i = q(), a = [];
		return I(n.regions, function(t) {
			var n = t.name;
			e && J(e, n) && (t = t.cloneShallow(n = e[n])), a.push(t), i.set(n, t);
		}), {
			regions: a,
			boundingRect: n.boundingRect || new Z(0, 0, 0, 0),
			regionsMap: i
		};
	}, e.prototype._parseToRegions = function(e) {
		var t = this._mapName, n = this._geoJSON, r;
		try {
			r = n ? xk(n, e) : [];
		} catch (e) {
			throw Error("Invalid geoJson format\n" + e.message);
		}
		return Dk(t, r), I(r, function(e) {
			var n = e.name;
			kk(t, e), jk(t, e);
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
function Pk(e) {
	for (var t, n = 0; n < e.length; n++) {
		var r = e[n].getBoundingRect();
		t ||= r.clone(), t.union(r);
	}
	return t;
}
function Fk(e) {
	return W(e) ? typeof JSON < "u" && JSON.parse ? JSON.parse(e) : Function("return (" + e + ");")() : e;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/geoSourceManager.js
var Ik = q(), Lk = {
	registerMap: function(e, t, n) {
		if (t.svg) {
			var r = new hk(e, t.svg);
			Ik.set(e, r);
		} else {
			var i = t.geoJson || t.geoJSON;
			i && !t.features ? n = t.specialAreas : i = t;
			var r = new Nk(e, i, n);
			Ik.set(e, r);
		}
	},
	getGeoResource: function(e) {
		return Ik.get(e);
	},
	getMapForUser: function(e) {
		var t = Ik.get(e);
		return t && t.type === "geoJSON" && t.getMapForUser();
	},
	load: function(e, t, n) {
		var r = Ik.get(e);
		if (r) return r.load(t, n);
	}
}, Rk = [
	"rect",
	"circle",
	"line",
	"ellipse",
	"polygon",
	"polyline",
	"path"
], zk = q(Rk), Bk = q(Rk.concat(["g"])), Vk = q(Rk.concat(["g"])), Hk = Bs();
function Uk(e) {
	var t = e.getItemStyle(), n = e.get("areaColor");
	return n != null && (t.fill = n), t;
}
function Wk(e) {
	var t = e.style;
	t && (t.stroke = t.stroke || t.fill, t.fill = null);
}
var Gk = function() {
	function e(e) {
		var t = new Dl();
		this.uid = Gp("ec_map_draw"), this._controller = new xO(e.getZr()), this._controllerHost = { target: t }, this.group = t, t.add(this._regionsGroup = new Dl()), t.add(this._svgGroup = new Dl());
	}
	return e.prototype.draw = function(e, t, n, r, i) {
		var a = e.mainType === "geo", o = e.getData && e.getData();
		a && t.eachComponent({
			mainType: "series",
			subType: "map"
		}, function(t) {
			!o && t.getHostGeoModel() === e && (o = t.getData());
		});
		var s = e.coordinateSystem, c = this._regionsGroup, l = this.group, u = s.getTransformInfo(), d = u.raw, f = u.roam;
		!c.childAt(0) || i ? (l.x = f.x, l.y = f.y, l.scaleX = f.scaleX, l.scaleY = f.scaleY, l.dirty()) : Eu(l, f, e);
		var p = o && o.getVisual("visualMeta") && o.getVisual("visualMeta").length > 0, m = {
			api: n,
			geo: s,
			mapOrGeoModel: e,
			data: o,
			isVisualEncodedByVisualMap: p,
			isGeo: a,
			transformInfoRaw: d
		};
		s.resourceType === "geoJSON" ? this._buildGeoJSON(m) : s.resourceType === "geoSVG" && this._buildSVG(m), this._updateController(e, t, n), this._updateMapSelectHandler(e, c, n, r);
	}, e.prototype._buildGeoJSON = function(e) {
		var t = this._regionsGroupByName = q(), n = q(), r = this._regionsGroup, i = e.transformInfoRaw, a = e.mapOrGeoModel, o = e.data, s = e.geo.projection, c = s && s.stream;
		function l(e, t) {
			return t && (e = t(e)), e && [e[0] * i.scaleX + i.x, e[1] * i.scaleY + i.y];
		}
		function u(e) {
			for (var t = [], n = !c && s && s.project, r = 0; r < e.length; ++r) {
				var i = l(e[r], n);
				i && t.push(i);
			}
			return t;
		}
		function d(e) {
			return { shape: { points: u(e) } };
		}
		r.removeAll(), I(e.geo.regions, function(i) {
			var u = i.name, f = t.get(u), p = n.get(u) || {}, m = p.dataIdx, h = p.regionModel;
			if (!f) {
				f = t.set(u, new Dl()), r.add(f), m = o ? o.indexOfName(u) : null, h = e.isGeo ? a.getRegionModel(u) : o ? o.getItemModel(m) : null;
				var g = h.get("silent", !0);
				g != null && (f.silent = g), n.set(u, {
					dataIdx: m,
					regionModel: h
				});
			}
			var _ = [], v = [];
			I(i.geometries, function(e) {
				if (e.type === "polygon") {
					var t = [e.exterior].concat(e.interiors || []);
					c && (t = Zk(t, c)), I(t, function(e) {
						_.push(new eu(d(e)));
					});
				} else {
					var n = e.points;
					c && (n = Zk(n, c, !0)), I(n, function(e) {
						v.push(new nu(d(e)));
					});
				}
			});
			var y = l(i.getCenter(), s && s.project);
			function b(t, n) {
				if (t.length) {
					var r = new fu({
						culling: !0,
						segmentIgnoreThreshold: 1,
						shape: { paths: t }
					});
					f.add(r), Kk(e, r, m, h), qk(e, r, u, h, a, m, y), n && (Wk(r), I(r.states, Wk));
				}
			}
			b(_), b(v, !0);
		}), t.each(function(t, r) {
			var i = n.get(r), o = i.dataIdx, s = i.regionModel;
			Jk(e, t, r, s, a, o), Yk(e, t, r, s, a), Xk(e, t, r, s, a);
		}, this);
	}, e.prototype._buildSVG = function(e) {
		var t = e.geo.map, n = e.transformInfoRaw;
		this._svgGroup.x = n.x, this._svgGroup.y = n.y, this._svgGroup.scaleX = n.scaleX, this._svgGroup.scaleY = n.scaleY, this._svgResourceChanged(t) && (this._freeSVG(), this._useSVG(t));
		var r = this._svgDispatcherMap = q(), i = !1;
		I(this._svgGraphicRecord.named, function(t) {
			var n = t.name, a = e.mapOrGeoModel, o = e.data, s = t.svgNodeTagLower, c = t.el, l = o ? o.indexOfName(n) : null, u = a.getRegionModel(n);
			zk.get(s) != null && c instanceof ta && Kk(e, c, l, u), c instanceof ta && (c.culling = !0);
			var d = u.get("silent", !0);
			d != null && (c.silent = d), c.z2EmphasisLift = 0, t.namedFrom || (Vk.get(s) != null && qk(e, c, n, u, a, l, null), Jk(e, c, n, u, a, l), Yk(e, c, n, u, a), Bk.get(s) != null && (Xk(e, c, n, u, a) === "self" && (i = !0), (r.get(n) || r.set(n, [])).push(c)));
		}, this), this._enableBlurEntireSVG(i, e);
	}, e.prototype._enableBlurEntireSVG = function(e, t) {
		if (e && t.isGeo) {
			var n = t.mapOrGeoModel.getModel(["blur", "itemStyle"]).getItemStyle().opacity;
			this._svgGraphicRecord.root.traverse(function(e) {
				if (!e.isGroup) {
					Tc(e);
					var t = e.ensureState("blur").style || {};
					t.opacity == null && n != null && (t.opacity = n), e.ensureState("emphasis");
				}
			});
		}
	}, e.prototype.remove = function() {
		this._regionsGroup.removeAll(), this._regionsGroupByName = null, this._svgGroup.removeAll(), this._freeSVG(), this._controller.dispose(), this._controllerHost = null;
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
		var t = Lk.getGeoResource(e);
		if (t && t.type === "geoSVG") {
			var n = t.useGraphic(this.uid);
			this._svgGroup.add(n.root), this._svgGraphicRecord = n, this._svgMapName = e;
		}
	}, e.prototype._freeSVG = function() {
		var e = this._svgMapName;
		if (e != null) {
			var t = Lk.getGeoResource(e);
			t && t.type === "geoSVG" && t.freeGraphic(this.uid), this._svgGraphicRecord = null, this._svgDispatcherMap = null, this._svgGroup.removeAll(), this._svgMapName = null;
		}
	}, e.prototype._updateController = function(e, t, n) {
		var r = e.coordinateSystem, i = this._controller, a = this._controllerHost;
		a.zoomLimit = e.get("scaleLimit"), a.zoom = r.getZoom(), i.enable(e.get("roam") || !1);
		var o = e.mainType;
		function s() {
			var t = {
				type: "geoRoam",
				componentType: o
			};
			return t[o + "Id"] = e.id, t;
		}
		i.off("pan").on("pan", function(e) {
			this._mouseDownFlag = !1, TO(a, e.dx, e.dy), n.dispatchAction(N(s(), {
				dx: e.dx,
				dy: e.dy,
				animation: { duration: 0 }
			}));
		}, this), i.off("zoom").on("zoom", function(e) {
			this._mouseDownFlag = !1, EO(a, e.scale, e.originX, e.originY), n.dispatchAction(N(s(), {
				totalZoom: a.zoom,
				zoom: e.scale,
				originX: e.originX,
				originY: e.originY,
				animation: { duration: 0 }
			}));
		}, this), i.setPointerChecker(function(t, i, a) {
			return r.containPoint([i, a]) && !OO(t, n, e);
		});
	}, e.prototype.resetForLabelLayout = function() {
		this.group.traverse(function(e) {
			var t = e.getTextContent();
			t && (t.ignore = Hk(t).ignore);
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
function Kk(e, t, n, r) {
	var i = r.getModel("itemStyle"), a = r.getModel(["emphasis", "itemStyle"]), o = r.getModel(["blur", "itemStyle"]), s = r.getModel(["select", "itemStyle"]), c = Uk(i), l = Uk(a), u = Uk(s), d = Uk(o), f = e.data;
	if (f) {
		var p = f.getItemVisual(n, "style"), m = f.getItemVisual(n, "decal");
		e.isVisualEncodedByVisualMap && p.fill && (c.fill = p.fill), m && (c.decal = KC(m, e.api));
	}
	t.setStyle(c), t.style.strokeNoScale = !0, t.ensureState("emphasis").style = l, t.ensureState("select").style = u, t.ensureState("blur").style = d, Tc(t);
}
function qk(e, t, n, r, i, a, o) {
	var s = e.data, c = e.isGeo, l = s && isNaN(s.get(s.mapDimension("value"), a)), u = s && s.getItemLayout(a);
	if (c || l || u && u.showLabel) {
		var d = c ? n : a, f = void 0;
		(!s || a >= 0) && (f = i);
		var p = o ? { normal: {
			align: "center",
			verticalAlign: "middle"
		} } : null;
		hd(t, gd(r), {
			labelFetcher: f,
			labelDataIndex: d,
			defaultText: n
		}, p);
		var m = t.getTextContent();
		if (m && (Hk(m).ignore = m.ignore, t.textConfig && o)) {
			var h = t.getBoundingRect().clone();
			t.textConfig.layoutRect = h, t.textConfig.position = [(o[0] - h.x) / h.width * 100 + "%", (o[1] - h.y) / h.height * 100 + "%"];
		}
		t.disableLabelAnimation = !0;
	} else t.removeTextContent(), t.removeTextConfig(), t.disableLabelAnimation = null;
}
function Jk(e, t, n, r, i, a) {
	e.data ? e.data.setItemGraphicEl(a, t) : Q(t).eventData = {
		componentType: "geo",
		componentIndex: i.componentIndex,
		geoIndex: i.componentIndex,
		name: n,
		region: r && r.option || {}
	};
}
function Yk(e, t, n, r, i) {
	e.data || ld({
		el: t,
		componentModel: i,
		itemName: n,
		itemTooltipOption: r.get("tooltip")
	});
}
function Xk(e, t, n, r, i) {
	t.highDownSilentOnTouch = !!i.get("selectedMode");
	var a = r.getModel("emphasis"), o = a.get("focus");
	return qc(t, o, a.get("blurScope"), a.get("disabled")), e.isGeo && el(t, i, n), o;
}
function Zk(e, t, n) {
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
//#endregion
//#region node_modules/echarts/lib/chart/map/MapView.js
var Qk = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n, r) {
		if (!(r && r.type === "mapToggleSelect" && r.from === this.uid)) {
			var i = this.group;
			if (i.removeAll(), !e.getHostGeoModel()) {
				if (this._mapDraw && r && r.type === "geoRoam" && this._mapDraw.resetForLabelLayout(), r && r.type === "geoRoam" && r.componentType === "series" && r.seriesId === e.id) {
					var a = this._mapDraw;
					a && i.add(a.group);
				} else if (e.needsDrawMap) {
					var a = this._mapDraw || new Gk(n);
					i.add(a.group), a.draw(e, t, n, this, r), this._mapDraw = a;
				} else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
				e.get("showLegendSymbol") && t.getComponent("legend") && this._renderSymbols(e, t, n);
			}
		}
	}, t.prototype.remove = function() {
		this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll();
	}, t.prototype.dispose = function() {
		this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
	}, t.prototype._renderSymbols = function(e, t, n) {
		var r = e.originalData, i = this.group;
		r.each(r.mapDimension("value"), function(t, n) {
			if (!isNaN(t)) {
				var a = r.getItemLayout(n);
				if (a && a.point) {
					var o = a.point, s = a.offset, c = new kl({
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
						var l = e.mainSeries.getData(), u = r.getName(n), d = l.indexOfName(u), f = r.getItemModel(n), p = f.getModel("label"), m = l.getItemGraphicEl(d);
						hd(c, gd(f), {
							labelFetcher: { getFormattedLabel: function(t, n) {
								return e.getFormattedLabel(d, n);
							} },
							defaultText: u
						}), c.disableLabelAnimation = !0, p.get("position") || c.setTextConfig({ position: "bottom" }), m.onHoverStateChange = function(e) {
							yc(c, e);
						};
					}
					i.add(c);
				}
			}
		});
	}, t.type = "map", t;
}(p_), $k = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.needsDrawMap = !1, n.seriesGroup = [], n.getTooltipPosition = function(e) {
			if (e != null) {
				var t = this.getData().getName(e), n = this.coordinateSystem, r = n.getRegion(t);
				return r && n.dataToPoint(r.getCenter());
			}
		}, n;
	}
	return t.prototype.getInitialData = function(e) {
		for (var t = zy(this, {
			coordDimensions: ["value"],
			encodeDefaulter: ce(tf, this)
		}), n = q(), r = [], i = 0, a = t.count(); i < a; i++) {
			var o = t.getName(i);
			n.set(o, i);
		}
		return I(Lk.load(this.getMapType(), this.option.nameMap, this.option.nameProperty).regions, function(e) {
			var i = e.name, a = n.get(i), o = e.properties && e.properties.echartsStyle, s;
			a == null ? (s = { name: i }, r.push(s)) : s = t.getRawDataItem(a), o && M(s, o);
		}), t.appendData(r), t;
	}, t.prototype.getHostGeoModel = function() {
		var e = this.option.geoIndex;
		return e == null ? null : this.ecModel.getComponent("geo", e);
	}, t.prototype.getMapType = function() {
		return (this.getHostGeoModel() || this).option.map;
	}, t.prototype.getRawValue = function(e) {
		var t = this.getData();
		return t.get(t.mapDimension("value"), e);
	}, t.prototype.getRegionModel = function(e) {
		var t = this.getData();
		return t.getItemModel(t.indexOfName(e));
	}, t.prototype.formatTooltip = function(e, t, n) {
		for (var r = this.getData(), i = this.getRawValue(e), a = r.getName(e), o = this.seriesGroup, s = [], c = 0; c < o.length; c++) {
			var l = o[c].originalData.indexOfName(a), u = r.mapDimension("value");
			isNaN(o[c].originalData.get(u, l)) || s.push(o[c].name);
		}
		return tg("section", {
			header: s.join(", "),
			noHeader: !s.length,
			blocks: [tg("nameValue", {
				name: a,
				value: i
			})]
		});
	}, t.prototype.setZoom = function(e) {
		this.option.zoom = e;
	}, t.prototype.setCenter = function(e) {
		this.option.center = e;
	}, t.prototype.getLegendIcon = function(e) {
		var t = e.icon || "roundRect", n = Ig(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill);
		return n.setStyle(e.itemStyle), n.style.stroke = "none", t.indexOf("empty") > -1 && (n.style.stroke = n.style.fill, n.style.fill = "#fff", n.style.lineWidth = 2), n;
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
			color: "#000"
		},
		itemStyle: {
			borderWidth: .5,
			borderColor: "#444",
			areaColor: "#eee"
		},
		emphasis: {
			label: {
				show: !0,
				color: "rgb(100,0,0)"
			},
			itemStyle: { areaColor: "rgba(255,215,0,0.8)" }
		},
		select: {
			label: {
				show: !0,
				color: "rgb(100,0,0)"
			},
			itemStyle: { color: "rgba(255,215,0,0.8)" }
		},
		nameProperty: "name"
	}, t;
}(xg);
//#endregion
//#region node_modules/echarts/lib/chart/map/mapDataStatistic.js
function eA(e, t) {
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
function tA(e) {
	var t = {};
	e.eachSeriesByType("map", function(e) {
		var n = e.getHostGeoModel(), r = n ? "o" + n.id : "i" + e.getMapType();
		(t[r] = t[r] || []).push(e);
	}), I(t, function(e, t) {
		for (var n = eA(L(e, function(e) {
			return e.getData();
		}), e[0].get("mapValueCalculation")), r = 0; r < e.length; r++) e[r].originalData = e[r].getData();
		for (var r = 0; r < e.length; r++) e[r].seriesGroup = e, e[r].needsDrawMap = r === 0 && !e[r].getHostGeoModel(), e[r].setData(n.cloneShallow()), e[r].mainSeries = e[0];
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/map/mapSymbolLayout.js
function nA(e) {
	var t = {};
	e.eachSeriesByType("map", function(n) {
		var r = n.getMapType();
		if (!(n.getHostGeoModel() || t[r])) {
			var i = {};
			I(n.seriesGroup, function(t) {
				var n = t.coordinateSystem, r = t.originalData;
				t.get("showLegendSymbol") && e.getComponent("legend") && r.each(r.mapDimension("value"), function(e, t) {
					var a = r.getName(t), o = n.getRegion(a);
					if (o && !isNaN(e)) {
						var s = i[a] || 0, c = n.dataToPoint(o.getCenter());
						i[a] = s + 1, r.setItemLayout(t, {
							point: c,
							offset: s
						});
					}
				});
			});
			var a = n.getData();
			a.each(function(e) {
				var t = a.getName(e), n = a.getItemLayout(e) || {};
				n.showLabel = !i[t], a.setItemLayout(e, n);
			}), t[r] = !0;
		}
	});
}
//#endregion
//#region node_modules/echarts/lib/coord/View.js
var rA = Sn, iA = function(e) {
	c(t, e);
	function t(t) {
		var n = e.call(this) || this;
		return n.type = "view", n.dimensions = ["x", "y"], n._roamTransformable = new Mn(), n._rawTransformable = new Mn(), n.name = t, n;
	}
	return t.prototype.setBoundingRect = function(e, t, n, r) {
		return this._rect = new Z(e, t, n, r), this._rect;
	}, t.prototype.getBoundingRect = function() {
		return this._rect;
	}, t.prototype.setViewRect = function(e, t, n, r) {
		this._transformTo(e, t, n, r), this._viewRect = new Z(e, t, n, r);
	}, t.prototype._transformTo = function(e, t, n, r) {
		var i = this.getBoundingRect(), a = this._rawTransformable;
		a.transform = i.calculateTransform(new Z(e, t, n, r));
		var o = a.parent;
		a.parent = null, a.decomposeTransform(), a.parent = o, this._updateTransform();
	}, t.prototype.setCenter = function(e, t) {
		e && (this._center = [Go(e[0], t.getWidth()), Go(e[1], t.getHeight())], this._updateCenterAndZoom());
	}, t.prototype.setZoom = function(e) {
		e ||= 1;
		var t = this.zoomLimit;
		t && (t.max != null && (e = Math.min(t.max, e)), t.min != null && (e = Math.max(t.min, e))), this._zoom = e, this._updateCenterAndZoom();
	}, t.prototype.getDefaultCenter = function() {
		var e = this.getBoundingRect();
		return [e.x + e.width / 2, e.y + e.height / 2];
	}, t.prototype.getCenter = function() {
		return this._center || this.getDefaultCenter();
	}, t.prototype.getZoom = function() {
		return this._zoom || 1;
	}, t.prototype.getRoamTransform = function() {
		return this._roamTransformable.getLocalTransform();
	}, t.prototype._updateCenterAndZoom = function() {
		var e = this._rawTransformable.getLocalTransform(), t = this._roamTransformable, n = this.getDefaultCenter(), r = this.getCenter(), i = this.getZoom();
		r = Sn([], r, e), n = Sn([], n, e), t.originX = r[0], t.originY = r[1], t.x = n[0] - r[0], t.y = n[1] - r[1], t.scaleX = t.scaleY = i, this._updateTransform();
	}, t.prototype._updateTransform = function() {
		var e = this._roamTransformable, t = this._rawTransformable;
		t.parent = e, e.updateTransform(), t.updateTransform(), ft(this.transform ||= [], t.transform || ut()), this._rawTransform = t.getLocalTransform(), this.invTransform = this.invTransform || [], _t(this.invTransform, this.transform), this.decomposeTransform();
	}, t.prototype.getTransformInfo = function() {
		var e = this._rawTransformable, t = this._roamTransformable, n = new Mn();
		return n.transform = t.transform, n.decomposeTransform(), {
			roam: {
				x: n.x,
				y: n.y,
				scaleX: n.scaleX,
				scaleY: n.scaleY
			},
			raw: {
				x: e.x,
				y: e.y,
				scaleX: e.scaleX,
				scaleY: e.scaleY
			}
		};
	}, t.prototype.getViewRect = function() {
		return this._viewRect;
	}, t.prototype.getViewRectAfterRoam = function() {
		var e = this.getBoundingRect().clone();
		return e.applyTransform(this.transform), e;
	}, t.prototype.dataToPoint = function(e, t, n) {
		var r = t ? this._rawTransform : this.transform;
		return n ||= [], r ? rA(n, e, r) : en(n, e);
	}, t.prototype.pointToData = function(e) {
		var t = this.invTransform;
		return t ? rA([], e, t) : [e[0], e[1]];
	}, t.prototype.convertToPixel = function(e, t, n) {
		var r = aA(t);
		return r === this ? r.dataToPoint(n) : null;
	}, t.prototype.convertFromPixel = function(e, t, n) {
		var r = aA(t);
		return r === this ? r.pointToData(n) : null;
	}, t.prototype.containPoint = function(e) {
		return this.getViewRectAfterRoam().contain(e[0], e[1]);
	}, t.dimensions = ["x", "y"], t;
}(Mn);
function aA(e) {
	var t = e.seriesModel;
	return t ? t.coordinateSystem : null;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/Geo.js
var oA = {
	geoJSON: {
		aspectScale: .75,
		invertLongitute: !0
	},
	geoSVG: {
		aspectScale: 1,
		invertLongitute: !1
	}
}, sA = ["lng", "lat"], cA = function(e) {
	c(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		i.dimensions = sA, i.type = "geo", i._nameCoordMap = q(), i.map = n;
		var a = r.projection, o = Lk.load(n, r.nameMap, r.nameProperty), s = Lk.getGeoResource(n);
		i.resourceType = s ? s.type : null;
		var c = i.regions = o.regions, l = oA[s.type];
		i._regionsMap = o.regionsMap, i.regions = o.regions, i.projection = a;
		var u;
		if (a) for (var d = 0; d < c.length; d++) {
			var f = c[d].getBoundingRect(a);
			u ||= f.clone(), u.union(f);
		}
		else u = o.boundingRect;
		return i.setBoundingRect(u.x, u.y, u.width, u.height), i.aspectScale = a ? 1 : K(r.aspectScale, l.aspectScale), i._invertLongitute = !a && l.invertLongitute, i;
	}
	return t.prototype._transformTo = function(e, t, n, r) {
		var i = this.getBoundingRect(), a = this._invertLongitute;
		i = i.clone(), a && (i.y = -i.y - i.height);
		var o = this._rawTransformable;
		o.transform = i.calculateTransform(new Z(e, t, n, r));
		var s = o.parent;
		o.parent = null, o.decomposeTransform(), o.parent = s, a && (o.scaleY = -o.scaleY), this._updateTransform();
	}, t.prototype.getRegion = function(e) {
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
		if (W(e) && (e = this.getGeoCoord(e)), e) {
			var r = this.projection;
			return r && (e = r.project(e)), e && this.projectedToPoint(e, t, n);
		}
	}, t.prototype.pointToData = function(e) {
		var t = this.projection;
		return t && (e = t.unproject(e)), e && this.pointToProjected(e);
	}, t.prototype.pointToProjected = function(t) {
		return e.prototype.pointToData.call(this, t);
	}, t.prototype.projectedToPoint = function(t, n, r) {
		return e.prototype.dataToPoint.call(this, t, n, r);
	}, t.prototype.convertToPixel = function(e, t, n) {
		var r = lA(t);
		return r === this ? r.dataToPoint(n) : null;
	}, t.prototype.convertFromPixel = function(e, t, n) {
		var r = lA(t);
		return r === this ? r.pointToData(n) : null;
	}, t;
}(iA);
ie(cA, iA);
function lA(e) {
	var t = e.geoModel, n = e.seriesModel;
	return t ? t.coordinateSystem : n ? n.coordinateSystem || (n.getReferringComponents("geo", Ws).models[0] || {}).coordinateSystem : null;
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/geoCreator.js
function uA(e, t) {
	var n = e.get("boundingCoords");
	if (n != null) {
		var r = n[0], i = n[1];
		if (isFinite(r[0]) && isFinite(r[1]) && isFinite(i[0]) && isFinite(i[1])) {
			var a = this.projection;
			if (a) {
				var o = r[0], s = r[1], c = i[0], l = i[1];
				r = [Infinity, Infinity], i = [-Infinity, -Infinity];
				var u = function(e, t, n, o) {
					for (var s = n - e, c = o - t, l = 0; l <= 100; l++) {
						var u = l / 100, d = a.project([e + s * u, t + c * u]);
						Cn(r, r, d), wn(i, i, d);
					}
				};
				u(o, s, c, s), u(c, s, c, l), u(c, l, o, l), u(o, l, c, s);
			}
			this.setBoundingRect(r[0], r[1], i[0] - r[0], i[1] - r[1]);
		}
	}
	var d = this.getBoundingRect(), f = e.get("layoutCenter"), p = e.get("layoutSize"), m = t.getWidth(), h = t.getHeight(), g = d.width / d.height * this.aspectScale, _ = !1, v, y;
	f && p && (v = [Go(f[0], m), Go(f[1], h)], y = Go(p, Math.min(m, h)), !isNaN(v[0]) && !isNaN(v[1]) && !isNaN(y) && (_ = !0));
	var b;
	if (_) b = {}, g > 1 ? (b.width = y, b.height = y / g) : (b.height = y, b.width = y * g), b.y = v[1] - b.height / 2, b.x = v[0] - b.width / 2;
	else {
		var x = e.getBoxLayoutParams();
		x.aspect = g, b = gh(x, {
			width: m,
			height: h
		});
	}
	this.setViewRect(b.x, b.y, b.width, b.height), this.setCenter(e.get("center"), t), this.setZoom(e.get("zoom"));
}
function dA(e, t) {
	I(t.get("geoCoord"), function(t, n) {
		e.addGeoCoord(n, t);
	});
}
var fA = new (function() {
	function e() {
		this.dimensions = sA;
	}
	return e.prototype.create = function(e, t) {
		var n = [];
		function r(e) {
			return {
				nameProperty: e.get("nameProperty"),
				aspectScale: e.get("aspectScale"),
				projection: e.get("projection")
			};
		}
		e.eachComponent("geo", function(e, i) {
			var a = e.get("map"), o = new cA(a + i, a, N({ nameMap: e.get("nameMap") }, r(e)));
			o.zoomLimit = e.get("scaleLimit"), n.push(o), e.coordinateSystem = o, o.model = e, o.resize = uA, o.resize(e, t);
		}), e.eachSeries(function(e) {
			e.get("coordinateSystem") === "geo" && (e.coordinateSystem = n[e.get("geoIndex") || 0]);
		});
		var i = {};
		return e.eachSeriesByType("map", function(e) {
			if (!e.getHostGeoModel()) {
				var t = e.getMapType();
				i[t] = i[t] || [], i[t].push(e);
			}
		}), I(i, function(e, i) {
			var a = new cA(i, i, N({ nameMap: te(L(e, function(e) {
				return e.get("nameMap");
			})) }, r(e[0])));
			a.zoomLimit = ve.apply(null, L(e, function(e) {
				return e.get("scaleLimit");
			})), n.push(a), a.resize = uA, a.resize(e[0], t), I(e, function(e) {
				e.coordinateSystem = a, dA(a, e);
			});
		}), n;
	}, e.prototype.getFilledRegions = function(e, t, n, r) {
		for (var i = (e || []).slice(), a = q(), o = 0; o < i.length; o++) a.set(i[o].name, i[o]);
		return I(Lk.load(t, n, r).regions, function(e) {
			var t = e.name, n = a.get(t), r = e.properties && e.properties.echartsStyle;
			n || (n = { name: t }, i.push(n)), r && M(n, r);
		}), i;
	}, e;
}())(), pA = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.init = function(e, t, n) {
		var r = Lk.getGeoResource(e.map);
		if (r && r.type === "geoJSON") {
			var i = e.itemStyle = e.itemStyle || {};
			"color" in i || (i.color = "#eee");
		}
		this.mergeDefaultAndTheme(e, n), bs(e, "label", ["show"]);
	}, t.prototype.optionUpdated = function() {
		var e = this, t = this.option;
		t.regions = fA.getFilledRegions(t.regions, t.map, t.nameMap, t.nameProperty);
		var n = {};
		this._optionModelMap = oe(t.regions || [], function(t, r) {
			var i = r.name;
			return i && (t.set(i, new zd(r, e, e.ecModel)), r.selected && (n[i] = !0)), t;
		}, q()), t.selectedMap ||= n;
	}, t.prototype.getRegionModel = function(e) {
		return this._optionModelMap.get(e) || new zd(null, this, this.ecModel);
	}, t.prototype.getFormattedLabel = function(e, t) {
		var n = this.getRegionModel(e), r = t === "normal" ? n.get(["label", "formatter"]) : n.get([
			"emphasis",
			"label",
			"formatter"
		]), i = { name: e };
		if (U(r)) return i.status = t, r(i);
		if (W(r)) return r.replace("{a}", e ?? "");
	}, t.prototype.setZoom = function(e) {
		this.option.zoom = e;
	}, t.prototype.setCenter = function(e) {
		this.option.center = e;
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
			color: "#000"
		},
		itemStyle: {
			borderWidth: .5,
			borderColor: "#444"
		},
		emphasis: {
			label: {
				show: !0,
				color: "rgb(100,0,0)"
			},
			itemStyle: { color: "rgba(255,215,0,0.8)" }
		},
		select: {
			label: {
				show: !0,
				color: "rgb(100,0,0)"
			},
			itemStyle: { color: "rgba(255,215,0,0.8)" }
		},
		regions: []
	}, t;
}($);
//#endregion
//#region node_modules/echarts/lib/action/roamHelper.js
function mA(e, t) {
	return e.pointToProjected ? e.pointToProjected(t) : e.pointToData(t);
}
function hA(e, t, n, r) {
	var i = e.getZoom(), a = e.getCenter(), o = t.zoom, s = e.projectedToPoint ? e.projectedToPoint(a) : e.dataToPoint(a);
	if (t.dx != null && t.dy != null && (s[0] -= t.dx, s[1] -= t.dy, e.setCenter(mA(e, s), r)), o != null) {
		if (n) {
			var c = n.min || 0, l = n.max || Infinity;
			o = Math.max(Math.min(i * o, l), c) / i;
		}
		e.scaleX *= o, e.scaleY *= o;
		var u = (t.originX - e.x) * (o - 1), d = (t.originY - e.y) * (o - 1);
		e.x -= u, e.y -= d, e.updateTransform(), e.setCenter(mA(e, s), r), e.setZoom(o * i);
	}
	return {
		center: e.getCenter(),
		zoom: e.getZoom()
	};
}
//#endregion
//#region node_modules/echarts/lib/component/geo/GeoView.js
var gA = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.focusBlurEnabled = !0, n;
	}
	return t.prototype.init = function(e, t) {
		this._api = t;
	}, t.prototype.render = function(e, t, n, r) {
		if (this._model = e, !e.get("show")) this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
		else {
			this._mapDraw ||= new Gk(n);
			var i = this._mapDraw;
			i.draw(e, t, n, this, r), i.group.on("click", this._handleRegionClick, this), i.group.silent = e.get("silent"), this.group.add(i.group), this.updateSelectStatus(e, t, n);
		}
	}, t.prototype._handleRegionClick = function(e) {
		var t;
		nC(e.target, function(e) {
			return (t = Q(e).eventData) != null;
		}, !0), t && this._api.dispatchAction({
			type: "geoToggleSelect",
			geoId: this._model.id,
			name: t.name
		});
	}, t.prototype.updateSelectStatus = function(e, t, n) {
		var r = this;
		this._mapDraw.group.traverse(function(e) {
			var t = Q(e).eventData;
			if (t) return r._model.isSelected(t.name) ? n.enterSelect(e) : n.leaveSelect(e), !0;
		});
	}, t.prototype.findHighDownDispatchers = function(e) {
		return this._mapDraw && this._mapDraw.findHighDownDispatchers(e, this._model);
	}, t.prototype.dispose = function() {
		this._mapDraw && this._mapDraw.remove();
	}, t.type = "geo", t;
}(mS);
//#endregion
//#region node_modules/echarts/lib/component/geo/install.js
function _A(e, t, n) {
	Lk.registerMap(e, t, n);
}
function vA(e) {
	e.registerCoordinateSystem("geo", fA), e.registerComponentModel(pA), e.registerComponentView(gA), e.registerImpl("registerMap", _A), e.registerImpl("getMap", function(e) {
		return Lk.getMapForUser(e);
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
		var r = e.componentType || "series";
		t.eachComponent({
			mainType: r,
			query: e
		}, function(t) {
			var i = t.coordinateSystem;
			if (i.type === "geo") {
				var a = hA(i, e, t.get("scaleLimit"), n);
				t.setCenter && t.setCenter(a.center), t.setZoom && t.setZoom(a.zoom), r === "series" && I(t.seriesGroup, function(e) {
					e.setCenter(a.center), e.setZoom(a.zoom);
				});
			}
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/chart/map/install.js
function yA(e) {
	HT(vA), e.registerChartView(Qk), e.registerSeriesModel($k), e.registerLayout(nA), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, tA), Kv("map", e.registerAction);
}
//#endregion
//#region node_modules/echarts/lib/visual/VisualMapping.js
var bA = I, xA = G, SA = -1, CA = function() {
	function e(t) {
		var n = t.mappingMethod, r = t.type, i = this.option = j(t);
		this.type = r, this.mappingMethod = n, this._normalizeData = FA[n];
		var a = e.visualHandlers[r];
		this.applyVisual = a.applyVisual, this.getColorMapper = a.getColorMapper, this._normalizedToVisual = a._normalizedToVisual[n], n === "piecewise" ? (EA(i), wA(i)) : n === "category" ? i.categories ? TA(i) : EA(i, !0) : (Se(n !== "linear" || i.dataExtent), EA(i));
	}
	return e.prototype.mapValueToVisual = function(e) {
		var t = this._normalizeData(e);
		return this._normalizedToVisual(t, e);
	}, e.prototype.getNormalizer = function() {
		return V(this._normalizeData, this);
	}, e.listVisualTypes = function() {
		return B(e.visualHandlers);
	}, e.isValidType = function(t) {
		return e.visualHandlers.hasOwnProperty(t);
	}, e.eachVisual = function(e, t, n) {
		G(e) ? I(e, t, n) : t.call(n, e);
	}, e.mapVisual = function(t, n, r) {
		var i, a = H(t) ? [] : G(t) ? {} : (i = !0, null);
		return e.eachVisual(t, function(e, t) {
			var o = n.call(r, e, t);
			i ? a = o : a[t] = o;
		}), a;
	}, e.retrieveVisuals = function(t) {
		var n = {}, r;
		return t && bA(e.visualHandlers, function(e, i) {
			t.hasOwnProperty(i) && (n[i] = t[i], r = !0);
		}), r ? n : null;
	}, e.prepareVisualTypes = function(e) {
		if (H(e)) e = e.slice();
		else if (xA(e)) {
			var t = [];
			bA(e, function(e, n) {
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
				if (s === e || W(s) && s === e + "") return a;
				n && d(s, a);
			}
		}
		for (var a = 0, o = t.length; a < o; a++) {
			var c = t[a], l = c.interval, u = c.close;
			if (l) {
				if (l[0] === -Infinity) {
					if (IA(u[1], e, l[1])) return a;
				} else if (l[1] === Infinity) {
					if (IA(u[0], l[0], e)) return a;
				} else if (IA(u[0], l[0], e) && IA(u[1], e, l[1])) return a;
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
			applyVisual: kA("color"),
			getColorMapper: function() {
				var e = this.option;
				return V(e.mappingMethod === "category" ? function(e, t) {
					return !t && (e = this._normalizeData(e)), AA.call(this, e);
				} : function(t, n, r) {
					var i = !!r;
					return !n && (t = this._normalizeData(t)), r = kr(t, e.parsedVisual, r), i ? r : Fr(r, "rgba");
				}, this);
			},
			_normalizedToVisual: {
				linear: function(e) {
					return Fr(kr(e, this.option.parsedVisual), "rgba");
				},
				category: AA,
				piecewise: function(e, t) {
					var n = NA.call(this, t);
					return n ??= Fr(kr(e, this.option.parsedVisual), "rgba"), n;
				},
				fixed: jA
			}
		},
		colorHue: DA(function(e, t) {
			return Nr(e, t);
		}),
		colorSaturation: DA(function(e, t) {
			return Nr(e, null, t);
		}),
		colorLightness: DA(function(e, t) {
			return Nr(e, null, null, t);
		}),
		colorAlpha: DA(function(e, t) {
			return Pr(e, t);
		}),
		decal: {
			applyVisual: kA("decal"),
			_normalizedToVisual: {
				linear: null,
				category: AA,
				piecewise: null,
				fixed: null
			}
		},
		opacity: {
			applyVisual: kA("opacity"),
			_normalizedToVisual: MA([0, 1])
		},
		liftZ: {
			applyVisual: kA("liftZ"),
			_normalizedToVisual: {
				linear: jA,
				category: jA,
				piecewise: jA,
				fixed: jA
			}
		},
		symbol: {
			applyVisual: function(e, t, n) {
				n("symbol", this.mapValueToVisual(e));
			},
			_normalizedToVisual: {
				linear: OA,
				category: AA,
				piecewise: function(e, t) {
					var n = NA.call(this, t);
					return n ??= OA.call(this, e), n;
				},
				fixed: jA
			}
		},
		symbolSize: {
			applyVisual: kA("symbolSize"),
			_normalizedToVisual: MA([0, 1])
		}
	}, e;
}();
function wA(e) {
	var t = e.pieceList;
	e.hasSpecialVisual = !1, I(t, function(t, n) {
		t.originIndex = n, t.visual != null && (e.hasSpecialVisual = !0);
	});
}
function TA(e) {
	var t = e.categories, n = e.categoryMap = {}, r = e.visual;
	if (bA(t, function(e, t) {
		n[e] = t;
	}), !H(r)) {
		var i = [];
		G(r) ? bA(r, function(e, t) {
			var r = n[t];
			i[r ?? SA] = e;
		}) : i[SA] = r, r = PA(e, i);
	}
	for (var a = t.length - 1; a >= 0; a--) r[a] ?? (delete n[t[a]], t.pop());
}
function EA(e, t) {
	var n = e.visual, r = [];
	G(n) ? bA(n, function(e) {
		r.push(e);
	}) : n != null && r.push(n), !t && r.length === 1 && !{
		color: 1,
		symbol: 1
	}.hasOwnProperty(e.type) && (r[1] = r[0]), PA(e, r);
}
function DA(e) {
	return {
		applyVisual: function(t, n, r) {
			var i = this.mapValueToVisual(t);
			r("color", e(n("color"), i));
		},
		_normalizedToVisual: MA([0, 1])
	};
}
function OA(e) {
	var t = this.option.visual;
	return t[Math.round(Wo(e, [0, 1], [0, t.length - 1], !0))] || {};
}
function kA(e) {
	return function(t, n, r) {
		r(e, this.mapValueToVisual(t));
	};
}
function AA(e) {
	var t = this.option.visual;
	return t[this.option.loop && e !== SA ? e % t.length : e];
}
function jA() {
	return this.option.visual[0];
}
function MA(e) {
	return {
		linear: function(t) {
			return Wo(t, e, this.option.visual, !0);
		},
		category: AA,
		piecewise: function(t, n) {
			var r = NA.call(this, n);
			return r ??= Wo(t, e, this.option.visual, !0), r;
		},
		fixed: jA
	};
}
function NA(e) {
	var t = this.option, n = t.pieceList;
	if (t.hasSpecialVisual) {
		var r = n[CA.findPieceIndex(e, n)];
		if (r && r.visual) return r.visual[this.type];
	}
}
function PA(e, t) {
	return e.visual = t, e.type === "color" && (e.parsedVisual = L(t, function(e) {
		return wr(e) || [
			0,
			0,
			0,
			1
		];
	})), t;
}
var FA = {
	linear: function(e) {
		return Wo(e, this.option.dataExtent, [0, 1], !0);
	},
	piecewise: function(e) {
		var t = this.option.pieceList, n = CA.findPieceIndex(e, t, !0);
		if (n != null) return Wo(n, [0, t.length - 1], [0, 1], !0);
	},
	category: function(e) {
		return (this.option.categories ? this.option.categoryMap[e] : e) ?? SA;
	},
	fixed: Pe
};
function IA(e, t, n) {
	return e ? t <= n : t < n;
}
//#endregion
//#region node_modules/echarts/lib/component/helper/sliderMove.js
function LA(e, t, n, r, i, a) {
	e ||= 0;
	var o = n[1] - n[0];
	if (i != null && (i = zA(i, [0, o])), a != null && (a = Math.max(a, i ?? 0)), r === "all") {
		var s = Math.abs(t[1] - t[0]);
		s = zA(s, [0, o]), i = a = zA(s, [i, a]), r = 0;
	}
	t[0] = zA(t[0], n), t[1] = zA(t[1], n);
	var c = RA(t, r);
	t[r] += e;
	var l = i || 0, u = n.slice();
	c.sign < 0 ? u[0] += l : u[1] -= l, t[r] = zA(t[r], u);
	var d = RA(t, r);
	return i != null && (d.sign !== c.sign || d.span < i) && (t[1 - r] = t[r] + c.sign * i), d = RA(t, r), a != null && d.span > a && (t[1 - r] = t[r] + d.sign * a), t;
}
function RA(e, t) {
	var n = e[t] - e[1 - t];
	return {
		span: Math.abs(n),
		sign: n > 0 ? -1 : n < 0 ? 1 : t ? -1 : 1
	};
}
function zA(e, t) {
	return Math.min(t[1] == null ? Infinity : t[1], Math.max(t[0] == null ? -Infinity : t[0], e));
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/CustomSeries.js
var BA = {
	color: "fill",
	borderColor: "stroke"
}, VA = {
	symbol: 1,
	symbolSize: 1,
	symbolKeepAspect: 1,
	legendIcon: 1,
	visualMeta: 1,
	liftZ: 1,
	decal: 1
}, HA = Bs(), UA = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.optionUpdated = function() {
		this.currentZLevel = this.get("zlevel", !0), this.currentZ = this.get("z", !0);
	}, t.prototype.getInitialData = function(e, t) {
		return Vp(null, this);
	}, t.prototype.getDataParams = function(t, n, r) {
		var i = e.prototype.getDataParams.call(this, t, n);
		return r && (i.info = HA(r).info), i;
	}, t.type = "series.custom", t.dependencies = [
		"grid",
		"polar",
		"geo",
		"singleAxis",
		"calendar"
	], t.defaultOption = {
		coordinateSystem: "cartesian2d",
		z: 2,
		legendHoverLink: !0,
		clip: !1
	}, t;
}(xg);
//#endregion
//#region node_modules/echarts/lib/coord/cartesian/prepareCustom.js
function WA(e, t) {
	return t ||= [0, 0], L(["x", "y"], function(n, r) {
		var i = this.getAxis(n), a = t[r], o = e[r] / 2;
		return i.type === "category" ? i.getBandWidth() : Math.abs(i.dataToCoord(a - o) - i.dataToCoord(a + o));
	}, this);
}
function GA(e) {
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
			size: V(WA, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/geo/prepareCustom.js
function KA(e, t) {
	return t ||= [0, 0], L([0, 1], function(n) {
		var r = t[n], i = e[n] / 2, a = [], o = [];
		return a[n] = r - i, o[n] = r + i, a[1 - n] = o[1 - n] = t[1 - n], Math.abs(this.dataToPoint(a)[n] - this.dataToPoint(o)[n]);
	}, this);
}
function qA(e) {
	var t = e.getBoundingRect();
	return {
		coordSys: {
			type: "geo",
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height,
			zoom: e.getZoom()
		},
		api: {
			coord: function(t) {
				return e.dataToPoint(t);
			},
			size: V(KA, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/single/prepareCustom.js
function JA(e, t) {
	var n = this.getAxis(), r = t instanceof Array ? t[0] : t, i = (e instanceof Array ? e[0] : e) / 2;
	return n.type === "category" ? n.getBandWidth() : Math.abs(n.dataToCoord(r - i) - n.dataToCoord(r + i));
}
function YA(e) {
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
			size: V(JA, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/polar/prepareCustom.js
function XA(e, t) {
	return t ||= [0, 0], L(["Radius", "Angle"], function(n, r) {
		var i = "get" + n + "Axis", a = this[i](), o = t[r], s = e[r] / 2, c = a.type === "category" ? a.getBandWidth() : Math.abs(a.dataToCoord(o - s) - a.dataToCoord(o + s));
		return n === "Angle" && (c = c * Math.PI / 180), c;
	}, this);
}
function ZA(e) {
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
			size: V(XA, e)
		}
	};
}
//#endregion
//#region node_modules/echarts/lib/coord/calendar/prepareCustom.js
function QA(e) {
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
		api: { coord: function(t, n) {
			return e.dataToPoint(t, n);
		} }
	};
}
//#endregion
//#region node_modules/echarts/lib/util/styleCompat.js
function $A(e, t, n, r) {
	return e && (e.legacy || e.legacy !== !1 && !n && !r && t !== "tspan" && (t === "text" || J(e, "text")));
}
function ej(e, t, n) {
	var r = e, i, a, o;
	if (t === "text") o = r;
	else {
		o = {}, J(r, "text") && (o.text = r.text), J(r, "rich") && (o.rich = r.rich), J(r, "textFill") && (o.fill = r.textFill), J(r, "textStroke") && (o.stroke = r.textStroke), J(r, "fontFamily") && (o.fontFamily = r.fontFamily), J(r, "fontSize") && (o.fontSize = r.fontSize), J(r, "fontStyle") && (o.fontStyle = r.fontStyle), J(r, "fontWeight") && (o.fontWeight = r.fontWeight), a = {
			type: "text",
			style: o,
			silent: !0
		}, i = {};
		var s = J(r, "textPosition");
		n ? i.position = s ? r.textPosition : "inside" : s && (i.position = r.textPosition), J(r, "textPosition") && (i.position = r.textPosition), J(r, "textOffset") && (i.offset = r.textOffset), J(r, "textRotation") && (i.rotation = r.textRotation), J(r, "textDistance") && (i.distance = r.textDistance);
	}
	return tj(o, e), I(o.rich, function(e) {
		tj(e, e);
	}), {
		textConfig: i,
		textContent: a
	};
}
function tj(e, t) {
	t && (t.font = t.textFont || t.font, J(t, "textStrokeWidth") && (e.lineWidth = t.textStrokeWidth), J(t, "textAlign") && (e.align = t.textAlign), J(t, "textVerticalAlign") && (e.verticalAlign = t.textVerticalAlign), J(t, "textLineHeight") && (e.lineHeight = t.textLineHeight), J(t, "textWidth") && (e.width = t.textWidth), J(t, "textHeight") && (e.height = t.textHeight), J(t, "textBackgroundColor") && (e.backgroundColor = t.textBackgroundColor), J(t, "textPadding") && (e.padding = t.textPadding), J(t, "textBorderColor") && (e.borderColor = t.textBorderColor), J(t, "textBorderWidth") && (e.borderWidth = t.textBorderWidth), J(t, "textBorderRadius") && (e.borderRadius = t.textBorderRadius), J(t, "textBoxShadowColor") && (e.shadowColor = t.textBoxShadowColor), J(t, "textBoxShadowBlur") && (e.shadowBlur = t.textBoxShadowBlur), J(t, "textBoxShadowOffsetX") && (e.shadowOffsetX = t.textBoxShadowOffsetX), J(t, "textBoxShadowOffsetY") && (e.shadowOffsetY = t.textBoxShadowOffsetY));
}
function nj(e, t, n) {
	var r = e;
	r.textPosition = r.textPosition || n.position || "inside", n.offset != null && (r.textOffset = n.offset), n.rotation != null && (r.textRotation = n.rotation), n.distance != null && (r.textDistance = n.distance);
	var i = r.textPosition.indexOf("inside") >= 0, a = e.fill || "#000";
	rj(r, t);
	var o = r.textFill == null;
	return i ? o && (r.textFill = n.insideFill || "#fff", !r.textStroke && n.insideStroke && (r.textStroke = n.insideStroke), !r.textStroke && (r.textStroke = a), r.textStrokeWidth ??= 2) : (o && (r.textFill = e.fill || n.outsideFill || "#000"), !r.textStroke && n.outsideStroke && (r.textStroke = n.outsideStroke)), r.text = t.text, r.rich = t.rich, I(t.rich, function(e) {
		rj(e, e);
	}), r;
}
function rj(e, t) {
	t && (J(t, "fill") && (e.textFill = t.fill), J(t, "stroke") && (e.textStroke = t.fill), J(t, "lineWidth") && (e.textStrokeWidth = t.lineWidth), J(t, "font") && (e.font = t.font), J(t, "fontStyle") && (e.fontStyle = t.fontStyle), J(t, "fontWeight") && (e.fontWeight = t.fontWeight), J(t, "fontSize") && (e.fontSize = t.fontSize), J(t, "fontFamily") && (e.fontFamily = t.fontFamily), J(t, "align") && (e.textAlign = t.align), J(t, "verticalAlign") && (e.textVerticalAlign = t.verticalAlign), J(t, "lineHeight") && (e.textLineHeight = t.lineHeight), J(t, "width") && (e.textWidth = t.width), J(t, "height") && (e.textHeight = t.height), J(t, "backgroundColor") && (e.textBackgroundColor = t.backgroundColor), J(t, "padding") && (e.textPadding = t.padding), J(t, "borderColor") && (e.textBorderColor = t.borderColor), J(t, "borderWidth") && (e.textBorderWidth = t.borderWidth), J(t, "borderRadius") && (e.textBorderRadius = t.borderRadius), J(t, "shadowColor") && (e.textBoxShadowColor = t.shadowColor), J(t, "shadowBlur") && (e.textBoxShadowBlur = t.shadowBlur), J(t, "shadowOffsetX") && (e.textBoxShadowOffsetX = t.shadowOffsetX), J(t, "shadowOffsetY") && (e.textBoxShadowOffsetY = t.shadowOffsetY), J(t, "textShadowColor") && (e.textShadowColor = t.textShadowColor), J(t, "textShadowBlur") && (e.textShadowBlur = t.textShadowBlur), J(t, "textShadowOffsetX") && (e.textShadowOffsetX = t.textShadowOffsetX), J(t, "textShadowOffsetY") && (e.textShadowOffsetY = t.textShadowOffsetY));
}
//#endregion
//#region node_modules/echarts/lib/animation/customGraphicTransition.js
var ij = {
	position: ["x", "y"],
	scale: ["scaleX", "scaleY"],
	origin: ["originX", "originY"]
}, aj = B(ij);
oe(Nn, function(e, t) {
	return e[t] = 1, e;
}, {}), Nn.join(", ");
var oj = [
	"",
	"style",
	"shape",
	"extra"
], sj = Bs();
function cj(e, t, n, r, i) {
	var a = e + "Animation", o = wu(e, r, i) || {}, s = sj(t).userDuring;
	return o.duration > 0 && (o.during = s ? V(vj, {
		el: t,
		userDuring: s
	}) : null, o.setToFinal = !0, o.scope = e), N(o, n[a]), o;
}
function lj(e, t, n, r) {
	r ||= {};
	var i = r.dataIndex, a = r.isInit, o = r.clearStyle, s = n.isAnimationEnabled(), c = sj(e), l = t.style;
	c.userDuring = t.during;
	var u = {}, d = {};
	if (Sj(e, t, d), bj("shape", t, d), bj("extra", t, d), !a && s && (xj(e, t, u), yj("shape", e, t, u), yj("extra", e, t, u), Cj(e, t, l, u)), d.style = l, pj(e, d, o), hj(e, t), s) {
		if (a) {
			var f = {};
			I(oj, function(e) {
				var n = e ? t[e] : t;
				n && n.enterFrom && (e && (f[e] = f[e] || {}), N(e ? f[e] : f, n.enterFrom));
			});
			var p = cj("enter", e, t, n, i);
			p.duration > 0 && e.animateFrom(f, p);
		} else mj(e, t, i || 0, n, u);
	}
	uj(e, t), l ? e.dirty() : e.markRedraw();
}
function uj(e, t) {
	for (var n = sj(e).leaveToProps, r = 0; r < oj.length; r++) {
		var i = oj[r], a = i ? t[i] : t;
		a && a.leaveTo && (n ||= sj(e).leaveToProps = {}, i && (n[i] = n[i] || {}), N(i ? n[i] : n, a.leaveTo));
	}
}
function dj(e, t, n, r) {
	if (e) {
		var i = e.parent, a = sj(e).leaveToProps;
		if (a) {
			var o = cj("update", e, t, n, 0);
			o.done = function() {
				i.remove(e), r && r();
			}, e.animateTo(a, o);
		} else i.remove(e), r && r();
	}
}
function fj(e) {
	return e === "all";
}
function pj(e, t, n) {
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
function mj(e, t, n, r, i) {
	if (i) {
		var a = cj("update", e, t, r, n);
		a.duration > 0 && e.animateFrom(i, a);
	}
}
function hj(e, t) {
	J(t, "silent") && (e.silent = t.silent), J(t, "ignore") && (e.ignore = t.ignore), e instanceof ta && J(t, "invisible") && (e.invisible = t.invisible), e instanceof co && J(t, "autoBatch") && (e.autoBatch = t.autoBatch);
}
var gj = {}, _j = {
	setTransform: function(e, t) {
		return gj.el[e] = t, this;
	},
	getTransform: function(e) {
		return gj.el[e];
	},
	setShape: function(e, t) {
		var n = gj.el, r = n.shape ||= {};
		return r[e] = t, n.dirtyShape && n.dirtyShape(), this;
	},
	getShape: function(e) {
		var t = gj.el.shape;
		if (t) return t[e];
	},
	setStyle: function(e, t) {
		var n = gj.el, r = n.style;
		return r && (r[e] = t, n.dirtyStyle && n.dirtyStyle()), this;
	},
	getStyle: function(e) {
		var t = gj.el.style;
		if (t) return t[e];
	},
	setExtra: function(e, t) {
		var n = gj.el.extra || (gj.el.extra = {});
		return n[e] = t, this;
	},
	getExtra: function(e) {
		var t = gj.el.extra;
		if (t) return t[e];
	}
};
function vj() {
	var e = this, t = e.el;
	if (t) {
		var n = sj(t).userDuring, r = e.userDuring;
		n === r ? (gj.el = t, r(_j)) : e.el = e.userDuring = null;
	}
}
function yj(e, t, n, r) {
	var i = n[e];
	if (i) {
		var a = t[e], o;
		if (a) {
			var s = n.transition, c = i.transition;
			if (c) {
				if (!o && (o = r[e] = {}), fj(c)) N(o, a);
				else for (var l = ys(c), u = 0; u < l.length; u++) {
					var d = l[u], f = a[d];
					o[d] = f;
				}
			} else if (fj(s) || F(s, e) >= 0) {
				!o && (o = r[e] = {});
				for (var p = B(a), u = 0; u < p.length; u++) {
					var d = p[u], f = a[d];
					wj(i[d], f) && (o[d] = f);
				}
			}
		}
	}
}
function bj(e, t, n) {
	var r = t[e];
	if (r) for (var i = n[e] = {}, a = B(r), o = 0; o < a.length; o++) {
		var s = a[o];
		i[s] = hi(r[s]);
	}
}
function xj(e, t, n) {
	for (var r = t.transition, i = fj(r) ? Nn : ys(r || []), a = 0; a < i.length; a++) {
		var o = i[a];
		o !== "style" && o !== "shape" && o !== "extra" && (n[o] = e[o]);
	}
}
function Sj(e, t, n) {
	for (var r = 0; r < aj.length; r++) {
		var i = aj[r], a = ij[i], o = t[i];
		o && (n[a[0]] = o[0], n[a[1]] = o[1]);
	}
	for (var r = 0; r < Nn.length; r++) {
		var s = Nn[r];
		t[s] != null && (n[s] = t[s]);
	}
}
function Cj(e, t, n, r) {
	if (n) {
		var i = e.style, a;
		if (i) {
			var o = n.transition, s = t.transition;
			if (o && !fj(o)) {
				var c = ys(o);
				!a && (a = r.style = {});
				for (var l = 0; l < c.length; l++) {
					var u = c[l], d = i[u];
					a[u] = d;
				}
			} else if (e.getAnimationStyleProps && (fj(s) || fj(o) || F(s, "style") >= 0)) {
				var f = e.getAnimationStyleProps(), p = f ? f.style : null;
				if (p) {
					!a && (a = r.style = {});
					for (var m = B(n), l = 0; l < m.length; l++) {
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
function wj(e, t) {
	return ae(e) ? e !== t : e != null && isFinite(e);
}
//#endregion
//#region node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js
var Tj = Bs(), Ej = [
	"percent",
	"easing",
	"shape",
	"style",
	"extra"
];
function Dj(e) {
	e.stopAnimation("keyframe"), e.attr(Tj(e));
}
function Oj(e, t, n) {
	if (n.isAnimationEnabled() && t) {
		if (H(t)) I(t, function(t) {
			Oj(e, t, n);
		});
		else {
			var r = t.keyframes, i = t.duration;
			if (n && i == null) {
				var a = wu("enter", n, 0);
				i = a && a.duration;
			}
			if (r && i) {
				var o = Tj(e);
				I(oj, function(n) {
					if (!n || e[n]) {
						var a;
						r.sort(function(e, t) {
							return e.percent - t.percent;
						}), I(r, function(r) {
							var s = e.animators, c = n ? r[n] : r;
							if (c) {
								var l = B(c);
								if (n || (l = R(l, function(e) {
									return F(Ej, e) < 0;
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
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/CustomView.js
var kj = "emphasis", Aj = "normal", jj = "blur", Mj = "select", Nj = [
	Aj,
	kj,
	jj,
	Mj
], Pj = {
	normal: ["itemStyle"],
	emphasis: [kj, "itemStyle"],
	blur: [jj, "itemStyle"],
	select: [Mj, "itemStyle"]
}, Fj = {
	normal: ["label"],
	emphasis: [kj, "label"],
	blur: [jj, "label"],
	select: [Mj, "label"]
}, Ij = ["x", "y"], Lj = "e\0\0", Rj = {
	normal: {},
	emphasis: {},
	blur: {},
	select: {}
}, zj = {
	cartesian2d: GA,
	geo: qA,
	single: YA,
	polar: ZA,
	calendar: QA
};
function Bj(e) {
	return e instanceof co;
}
function Vj(e) {
	return e instanceof ta;
}
function Hj(e, t) {
	t.copyTransform(e), Vj(t) && Vj(e) && (t.setStyle(e.style), t.z = e.z, t.z2 = e.z2, t.zlevel = e.zlevel, t.invisible = e.invisible, t.ignore = e.ignore, Bj(t) && Bj(e) && t.setShape(e.shape));
}
var Uj = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n, r) {
		this._progressiveEls = null;
		var i = this._data, a = e.getData(), o = this.group, s = Yj(e, a, t, n);
		i || o.removeAll(), a.diff(i).add(function(t) {
			Zj(n, null, t, s(t, r), e, o, a);
		}).remove(function(t) {
			var n = i.getItemGraphicEl(t);
			n && dj(n, HA(n).option, e);
		}).update(function(t, c) {
			Zj(n, i.getItemGraphicEl(c), t, s(t, r), e, o, a);
		}).execute();
		var c = e.get("clip", !0) ? x_(e.coordinateSystem, !1, e) : null;
		c ? o.setClipPath(c) : o.removeClipPath(), this._data = a;
	}, t.prototype.incrementalPrepareRender = function(e, t, n) {
		this.group.removeAll(), this._data = null;
	}, t.prototype.incrementalRender = function(e, t, n, r, i) {
		var a = t.getData(), o = Yj(t, a, n, r), s = this._progressiveEls = [];
		function c(e) {
			e.isGroup || (e.incremental = !0, e.ensureState("emphasis").hoverLayer = !0);
		}
		for (var l = e.start; l < e.end; l++) {
			var u = Zj(null, null, l, o(l, i), t, this.group, a);
			u && (u.traverse(c), s.push(u));
		}
	}, t.prototype.eachRendered = function(e) {
		dd(this._progressiveEls || this.group, e);
	}, t.prototype.filterForExposedEvent = function(e, t, n, r) {
		var i = t.element;
		if (i == null || n.name === i) return !0;
		for (; (n = n.__hostTarget || n.parent) && n !== this.group;) if (n.name === i) return !0;
		return !1;
	}, t.type = "custom", t;
}(p_);
function Wj(e) {
	var t = e.type, n;
	if (t === "path") {
		var r = e.shape, i = r.width != null && r.height != null ? {
			x: r.x || 0,
			y: r.y || 0,
			width: r.width,
			height: r.height
		} : null, a = dM(r);
		n = Hu(a, null, i, r.layout || "center"), HA(n).customPathData = a;
	} else if (t === "image") n = new ho({}), HA(n).customImagePath = e.style.image;
	else if (t === "text") n = new Do({});
	else if (t === "group") n = new Dl();
	else if (t === "compoundPath") throw Error("\"compoundPath\" is not supported yet.");
	else {
		var o = Vu(t);
		o || hs(""), n = new o();
	}
	return HA(n).customGraphicType = t, n.name = e.name, n.z2EmphasisLift = 1, n.z2SelectLift = 1, n;
}
function Gj(e, t, n, r, i, a, o) {
	Dj(t);
	var s = i && i.normal.cfg;
	s && t.setTextConfig(s), r && r.transition == null && (r.transition = Ij);
	var c = r && r.style;
	if (c) {
		if (t.type === "text") {
			var l = c;
			J(l, "textFill") && (l.fill = l.textFill), J(l, "textStroke") && (l.stroke = l.textStroke);
		}
		var u = void 0, d = Bj(t) ? c.decal : null;
		e && d && (d.dirty = !0, u = KC(d, e)), c.__decalPattern = u;
	}
	if (Vj(t) && c) {
		var u = c.__decalPattern;
		u && (c.decal = u);
	}
	lj(t, r, a, {
		dataIndex: n,
		isInit: o,
		clearStyle: !0
	}), Oj(t, r.keyframeAnimation, a);
}
function Kj(e, t, n, r, i) {
	var a = t.isGroup ? null : t, o = i && i[e].cfg;
	if (a) {
		var s = a.ensureState(e);
		if (r === !1) {
			var c = a.getState(e);
			c && (c.style = null);
		} else s.style = r || null;
		o && (s.textConfig = o), Tc(a);
	}
}
function qj(e, t, n) {
	if (!e.isGroup) {
		var r = e, i = n.currentZ, a = n.currentZLevel;
		r.z = i, r.zlevel = a;
		var o = t.z2;
		o != null && (r.z2 = o || 0);
		for (var s = 0; s < Nj.length; s++) Jj(r, t, Nj[s]);
	}
}
function Jj(e, t, n) {
	var r = n === Aj, i = r ? t : rM(t, n), a = i ? i.z2 : null, o;
	a != null && (o = r ? e : e.ensureState(n), o.z2 = a || 0);
}
function Yj(e, t, n, r) {
	var i = e.get("renderItem"), a = e.coordinateSystem, o = {};
	a && (o = a.prepareCustoms ? a.prepareCustoms(a) : zj[a.type](a));
	for (var s = P({
		getWidth: r.getWidth,
		getHeight: r.getHeight,
		getZr: r.getZr,
		getDevicePixelRatio: r.getDevicePixelRatio,
		value: b,
		style: S,
		ordinalRawValue: x,
		styleEmphasis: C,
		visual: E,
		barLayout: D,
		currentSeriesIndices: O,
		font: k
	}, o.api || {}), c = {
		context: {},
		seriesId: e.id,
		seriesName: e.name,
		seriesIndex: e.seriesIndex,
		coordSys: o.coordSys,
		dataInsideLength: t.count(),
		encode: Xj(e.getData())
	}, l, u, d = {}, f = {}, p = {}, m = {}, h = 0; h < Nj.length; h++) {
		var g = Nj[h];
		p[g] = e.getModel(Pj[g]), m[g] = e.getModel(Fj[g]);
	}
	function _(e) {
		return e === l ? u ||= t.getItemModel(e) : t.getItemModel(e);
	}
	function v(e, n) {
		return t.hasItemOption ? e === l ? d[n] || (d[n] = _(e).getModel(Pj[n])) : _(e).getModel(Pj[n]) : p[n];
	}
	function y(e, n) {
		return t.hasItemOption ? e === l ? f[n] || (f[n] = _(e).getModel(Fj[n])) : _(e).getModel(Fj[n]) : m[n];
	}
	return function(e, n) {
		return l = e, u = null, d = {}, f = {}, i && i(P({
			dataIndexInside: e,
			dataIndex: t.getRawIndex(e),
			actionType: n ? n.type : null
		}, c), s);
	};
	function b(e, n) {
		return n ??= l, t.getStore().get(t.getDimensionIndex(e || 0), n);
	}
	function x(e, n) {
		n ??= l, e ||= 0;
		var r = t.getDimensionInfo(e);
		if (!r) {
			var i = t.getDimensionIndex(e);
			return i >= 0 ? t.getStore().get(i, n) : void 0;
		}
		var a = t.get(r.name, n), o = r && r.ordinalMeta;
		return o ? o.categories[a] : a;
	}
	function S(n, r) {
		r ??= l;
		var i = t.getItemVisual(r, "style"), a = i && i.fill, o = i && i.opacity, s = v(r, Aj).getItemStyle();
		a != null && (s.fill = a), o != null && (s.opacity = o);
		var c = { inheritColor: W(a) ? a : "#000" }, u = y(r, Aj), d = _d(u, null, c, !1, !0);
		d.text = u.getShallow("show") ? K(e.getFormattedLabel(r, Aj), Bg(t, r)) : null;
		var f = vd(u, c, !1);
		return T(n, s), s = nj(s, d, f), n && w(s, n), s.legacy = !0, s;
	}
	function C(n, r) {
		r ??= l;
		var i = v(r, kj).getItemStyle(), a = y(r, kj), o = _d(a, null, null, !0, !0);
		o.text = a.getShallow("show") ? ye(e.getFormattedLabel(r, kj), e.getFormattedLabel(r, Aj), Bg(t, r)) : null;
		var s = vd(a, null, !0);
		return T(n, i), i = nj(i, o, s), n && w(i, n), i.legacy = !0, i;
	}
	function w(e, t) {
		for (var n in t) J(t, n) && (e[n] = t[n]);
	}
	function T(e, t) {
		e && (e.textFill && (t.textFill = e.textFill), e.textPosition && (t.textPosition = e.textPosition));
	}
	function E(e, n) {
		if (n ??= l, J(BA, e)) {
			var r = t.getItemVisual(n, "style");
			return r ? r[BA[e]] : null;
		}
		if (J(VA, e)) return t.getItemVisual(n, e);
	}
	function D(e) {
		if (a.type === "cartesian2d") return Y_(P({ axis: a.getBaseAxis() }, e));
	}
	function O() {
		return n.getCurrentSeriesIndices();
	}
	function k(e) {
		return Td(e, n);
	}
}
function Xj(e) {
	var t = {};
	return I(e.dimensions, function(n) {
		var r = e.getDimensionInfo(n);
		if (!r.isExtraCoord) {
			var i = r.coordDim, a = t[i] = t[i] || [];
			a[r.coordDimIndex] = e.getDimensionIndex(n);
		}
	}), t;
}
function Zj(e, t, n, r, i, a, o) {
	if (!r) a.remove(t);
	else {
		var s = Qj(e, t, n, r, i, a);
		return s && o.setItemGraphicEl(n, s), s && qc(s, r.focus, r.blurScope, r.emphasisDisabled), s;
	}
}
function Qj(e, t, n, r, i, a) {
	var o = -1, s = t;
	t && $j(t, r, i) && (o = F(a.childrenRef(), t), t = null);
	var c = !t, l = t;
	l ? l.clearStates() : (l = Wj(r), s && Hj(s, l)), r.morph === !1 ? l.disableMorphing = !0 : l.disableMorphing && (l.disableMorphing = !1), Rj.normal.cfg = Rj.normal.conOpt = Rj.emphasis.cfg = Rj.emphasis.conOpt = Rj.blur.cfg = Rj.blur.conOpt = Rj.select.cfg = Rj.select.conOpt = null, Rj.isLegacy = !1, tM(l, n, r, i, c, Rj), eM(l, n, r, i, c), Gj(e, l, n, r, Rj, i, c), J(r, "info") && (HA(l).info = r.info);
	for (var u = 0; u < Nj.length; u++) {
		var d = Nj[u];
		if (d !== Aj) {
			var f = rM(r, d), p = iM(r, f, d);
			Kj(d, l, f, p, Rj);
		}
	}
	return qj(l, r, i), r.type === "group" && aM(e, l, n, r, i), o >= 0 ? a.replaceAt(l, o) : a.add(l), l;
}
function $j(e, t, n) {
	var r = HA(e), i = t.type, a = t.shape, o = t.style;
	return n.isUniversalTransitionEnabled() || i != null && i !== r.customGraphicType || i === "path" && fM(a) && dM(a) !== r.customPathData || i === "image" && J(o, "image") && o.image !== r.customImagePath;
}
function eM(e, t, n, r, i) {
	var a = n.clipPath;
	if (a === !1) e && e.getClipPath() && e.removeClipPath();
	else if (a) {
		var o = e.getClipPath();
		o && $j(o, a, r) && (o = null), o || (o = Wj(a), e.setClipPath(o)), Gj(null, o, t, a, null, r, i);
	}
}
function tM(e, t, n, r, i, a) {
	if (!e.isGroup) {
		nM(n, null, a), nM(n, kj, a);
		var o = a.normal.conOpt, s = a.emphasis.conOpt, c = a.blur.conOpt, l = a.select.conOpt;
		if (o != null || s != null || l != null || c != null) {
			var u = e.getTextContent();
			if (o === !1) u && e.removeTextContent();
			else {
				o = a.normal.conOpt = o || { type: "text" }, u ? u.clearStates() : (u = Wj(o), e.setTextContent(u)), Gj(null, u, t, o, null, r, i);
				for (var d = o && o.style, f = 0; f < Nj.length; f++) {
					var p = Nj[f];
					if (p !== Aj) {
						var m = a[p].conOpt;
						Kj(p, u, m, iM(o, m, p), null);
					}
				}
				d ? u.dirty() : u.markRedraw();
			}
		}
	}
}
function nM(e, t, n) {
	var r = t ? rM(e, t) : e, i = t ? iM(e, r, kj) : e.style, a = e.type, o = r ? r.textConfig : null, s = e.textContent, c = s ? t ? rM(s, t) : s : null;
	if (i && (n.isLegacy || $A(i, a, !!o, !!c))) {
		n.isLegacy = !0;
		var l = ej(i, a, !t);
		!o && l.textConfig && (o = l.textConfig), !c && l.textContent && (c = l.textContent);
	}
	if (!t && c) {
		var u = c;
		!u.type && (u.type = "text");
	}
	var d = t ? n[t] : n.normal;
	d.cfg = o, d.conOpt = c;
}
function rM(e, t) {
	return t ? e ? e[t] : null : e;
}
function iM(e, t, n) {
	var r = t && t.style;
	return r == null && n === kj && e && (r = e.styleEmphasis), r;
}
function aM(e, t, n, r, i) {
	var a = r.children, o = a ? a.length : 0, s = r.$mergeChildren, c = s === "byName" || r.diffChildrenByName, l = s === !1;
	if (o || c || l) {
		if (c) sM({
			api: e,
			oldChildren: t.children() || [],
			newChildren: a || [],
			dataIndex: n,
			seriesModel: i,
			group: t
		});
		else {
			l && t.removeAll();
			for (var u = 0; u < o; u++) {
				var d = a[u], f = t.childAt(u);
				d ? (d.ignore ??= !1, Qj(e, f, n, d, i, t)) : f.ignore = !0;
			}
			for (var p = t.childCount() - 1; p >= u; p--) oM(t, t.childAt(p), i);
		}
	}
}
function oM(e, t, n) {
	t && dj(t, HA(e).option, n);
}
function sM(e) {
	new Hd(e.oldChildren, e.newChildren, cM, cM, e).add(lM).update(lM).remove(uM).execute();
}
function cM(e, t) {
	return (e && e.name) ?? Lj + t;
}
function lM(e, t) {
	var n = this.context, r = e == null ? null : n.newChildren[e], i = t == null ? null : n.oldChildren[t];
	Qj(n.api, i, n.dataIndex, r, n.seriesModel, n.group);
}
function uM(e) {
	var t = this.context, n = t.oldChildren[e];
	n && dj(n, HA(n).option, t.seriesModel);
}
function dM(e) {
	return e && (e.pathData || e.d);
}
function fM(e) {
	return e && (J(e, "pathData") || J(e, "d"));
}
//#endregion
//#region node_modules/echarts/lib/chart/custom/install.js
function pM(e) {
	e.registerChartView(Uj), e.registerSeriesModel(UA);
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js
var mM = Bs(), hM = j, gM = V, _M = function() {
	function e() {
		this._dragging = !1, this.animationThreshold = 15;
	}
	return e.prototype.render = function(e, t, n, r) {
		var i = t.get("value"), a = t.get("status");
		if (this._axisModel = e, this._axisPointerModel = t, this._api = n, r || this._lastValue !== i || this._lastStatus !== a) {
			this._lastValue = i, this._lastStatus = a;
			var o = this._group, s = this._handle;
			if (!a || a === "hide") o && o.hide(), s && s.hide();
			else {
				o && o.show(), s && s.show();
				var c = {};
				this.makeElOption(c, i, e, t, n);
				var l = c.graphicKey;
				l !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = l;
				var u = this._moveAnimation = this.determineAnimation(e, t);
				if (!o) o = this._group = new Dl(), this.createPointerEl(o, c, e, t), this.createLabelEl(o, c, e, t), n.getZr().add(o);
				else {
					var d = ce(vM, t, u);
					this.updatePointerEl(o, c, d), this.updateLabelEl(o, c, d, t);
				}
				SM(o, t, !0), this._renderHandle(i);
			}
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
			if (i && r.getBandWidth() > o) return !0;
			if (a) {
				var s = eO(e).seriesDataCount, c = r.getExtent();
				return Math.abs(c[0] - c[1]) / s > o;
			}
			return !1;
		}
		return n === !0;
	}, e.prototype.makeElOption = function(e, t, n, r, i) {}, e.prototype.createPointerEl = function(e, t, n, r) {
		var i = t.pointer;
		if (i) {
			var a = mM(e).pointerEl = new Nu[i.type](hM(t.pointer));
			e.add(a);
		}
	}, e.prototype.createLabelEl = function(e, t, n, r) {
		if (t.label) {
			var i = mM(e).labelEl = new Do(hM(t.label));
			e.add(i), bM(i, r);
		}
	}, e.prototype.updatePointerEl = function(e, t, n) {
		var r = mM(e).pointerEl;
		r && t.pointer && (r.setStyle(t.pointer.style), n(r, { shape: t.pointer.shape }));
	}, e.prototype.updateLabelEl = function(e, t, n, r) {
		var i = mM(e).labelEl;
		i && (i.setStyle(t.label.style), n(i, {
			x: t.label.x,
			y: t.label.y
		}), bM(i, r));
	}, e.prototype._renderHandle = function(e) {
		if (!this._dragging && this.updateHandleTransform) {
			var t = this._axisPointerModel, n = this._api.getZr(), r = this._handle, i = t.getModel("handle"), a = t.get("status");
			if (!i.get("show") || !a || a === "hide") r && n.remove(r), this._handle = null;
			else {
				var o;
				this._handle || (o = !0, r = this._handle = id(i.get("icon"), {
					cursor: "move",
					draggable: !0,
					onmousemove: function(e) {
						rb(e.event);
					},
					onmousedown: gM(this._onHandleDragMove, this, 0, 0),
					drift: gM(this._onHandleDragMove, this),
					ondragend: gM(this._onHandleDragEnd, this)
				}), n.add(r)), SM(r, t, !1), r.setStyle(i.getItemStyle(null, [
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
				H(s) || (s = [s, s]), r.scaleX = s[0] / 2, r.scaleY = s[1] / 2, fv(this, "_doDispatchAxisPointer", i.get("throttle") || 0, "fixRate"), this._moveHandleToValue(e, o);
			}
		}
	}, e.prototype._moveHandleToValue = function(e, t) {
		vM(this._axisPointerModel, !t && this._moveAnimation, this._handle, xM(this.getHandleTransform(e, this._axisModel, this._axisPointerModel)));
	}, e.prototype._onHandleDragMove = function(e, t) {
		var n = this._handle;
		if (n) {
			this._dragging = !0;
			var r = this.updateHandleTransform(xM(n), [e, t], this._axisModel, this._axisPointerModel);
			this._payloadInfo = r, n.stopAnimation(), n.attr(xM(r)), mM(n).lastProp = null, this._doDispatchAxisPointer();
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
		t && n && (this._lastGraphicKey = null, n && t.remove(n), r && t.remove(r), this._group = null, this._handle = null, this._payloadInfo = null), pv(this, "_doDispatchAxisPointer");
	}, e.prototype.doClear = function() {}, e.prototype.buildLabel = function(e, t, n) {
		return n ||= 0, {
			x: e[n],
			y: e[1 - n],
			width: t[n],
			height: t[1 - n]
		};
	}, e;
}();
function vM(e, t, n, r) {
	yM(mM(n).lastProp, r) || (mM(n).lastProp = r, t ? Eu(n, r, e) : (n.stopAnimation(), n.attr(r)));
}
function yM(e, t) {
	if (G(e) && G(t)) {
		var n = !0;
		return I(t, function(t, r) {
			n &&= yM(e[r], t);
		}), !!n;
	}
	return e === t;
}
function bM(e, t) {
	e[t.get(["label", "show"]) ? "show" : "hide"]();
}
function xM(e) {
	return {
		x: e.x || 0,
		y: e.y || 0,
		rotation: e.rotation || 0
	};
}
function SM(e, t, n) {
	var r = t.get("z"), i = t.get("zlevel");
	e && e.traverse(function(e) {
		e.type !== "group" && (r != null && (e.z = r), i != null && (e.zlevel = i), e.silent = n);
	});
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/viewHelper.js
function CM(e) {
	var t = e.get("type"), n = e.getModel(t + "Style"), r;
	return t === "line" ? (r = n.getLineStyle(), r.fill = null) : t === "shadow" && (r = n.getAreaStyle(), r.stroke = null), r;
}
function wM(e, t, n, r, i) {
	var a = EM(n.get("value"), t.axis, t.ecModel, n.get("seriesDataIndices"), {
		precision: n.get(["label", "precision"]),
		formatter: n.get(["label", "formatter"])
	}), o = n.getModel("label"), s = th(o.get("padding") || 0), c = o.getFont(), l = At(a, c), u = i.position, d = l.width + s[1] + s[3], f = l.height + s[0] + s[2], p = i.align;
	p === "right" && (u[0] -= d), p === "center" && (u[0] -= d / 2);
	var m = i.verticalAlign;
	m === "bottom" && (u[1] -= f), m === "middle" && (u[1] -= f / 2), TM(u, d, f, r);
	var h = o.get("backgroundColor");
	(!h || h === "auto") && (h = t.get([
		"axisLine",
		"lineStyle",
		"color"
	])), e.label = {
		x: u[0],
		y: u[1],
		style: _d(o, {
			text: a,
			font: c,
			fill: o.getTextColor(),
			padding: s,
			backgroundColor: h
		}),
		z2: 10
	};
}
function TM(e, t, n, r) {
	var i = r.getWidth(), a = r.getHeight();
	e[0] = Math.min(e[0] + t, i) - t, e[1] = Math.min(e[1] + n, a) - n, e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0);
}
function EM(e, t, n, r, i) {
	e = t.scale.parse(e);
	var a = t.scale.getLabel({ value: e }, { precision: i.precision }), o = i.formatter;
	if (o) {
		var s = {
			value: qE(t, { value: e }),
			axisDimension: t.dim,
			axisIndex: t.index,
			seriesData: []
		};
		I(r, function(e) {
			var t = n.getSeriesByIndex(e.seriesIndex), r = e.dataIndexInside, i = t && t.getDataParams(r);
			i && s.seriesData.push(i);
		}), W(o) ? a = o.replace("{value}", a) : U(o) && (a = o(s));
	}
	return a;
}
function DM(e, t, n) {
	var r = ut();
	return ht(r, r, n.rotation), mt(r, r, n.position), Zu([e.dataToCoord(t), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], r);
}
function OM(e, t, n, r, i, a) {
	var o = ID.innerTextLayout(n.rotation, 0, n.labelDirection);
	n.labelMargin = i.get(["label", "margin"]), wM(t, r, i, a, {
		position: DM(r.axis, e, n),
		align: o.textAlign,
		verticalAlign: o.textVerticalAlign
	});
}
function kM(e, t, n) {
	return n ||= 0, {
		x1: e[n],
		y1: e[1 - n],
		x2: t[n],
		y2: t[1 - n]
	};
}
function AM(e, t, n) {
	return n ||= 0, {
		x: e[n],
		y: e[1 - n],
		width: t[n],
		height: t[1 - n]
	};
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js
var jM = function(e) {
	c(t, e);
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return t.prototype.makeElOption = function(e, t, n, r, i) {
		var a = n.axis, o = a.grid, s = r.get("type"), c = MM(o, a).getOtherAxis(a).getGlobalExtent(), l = a.toGlobalCoord(a.dataToCoord(t, !0));
		if (s && s !== "none") {
			var u = CM(r), d = NM[s](a, l, c);
			d.style = u, e.graphicKey = d.type, e.pointer = d;
		}
		OM(t, e, TD(o.model, n), n, r, i);
	}, t.prototype.getHandleTransform = function(e, t, n) {
		var r = TD(t.axis.grid.model, t, { labelInside: !1 });
		r.labelMargin = n.get(["handle", "margin"]);
		var i = DM(t.axis, e, r);
		return {
			x: i[0],
			y: i[1],
			rotation: r.rotation + (r.labelDirection < 0 ? Math.PI : 0)
		};
	}, t.prototype.updateHandleTransform = function(e, t, n, r) {
		var i = n.axis, a = i.grid, o = i.getGlobalExtent(!0), s = MM(a, i).getOtherAxis(i).getGlobalExtent(), c = i.dim === "x" ? 0 : 1, l = [e.x, e.y];
		l[c] += t[c], l[c] = Math.min(o[1], l[c]), l[c] = Math.max(o[0], l[c]);
		var u = (s[1] + s[0]) / 2, d = [u, u];
		return d[c] = l[c], {
			x: l[0],
			y: l[1],
			rotation: e.rotation,
			cursorPoint: d,
			tooltipOption: [{ verticalAlign: "middle" }, { align: "center" }][c]
		};
	}, t;
}(_M);
function MM(e, t) {
	var n = {};
	return n[t.dim + "AxisIndex"] = t.index, e.getCartesian(n);
}
var NM = {
	line: function(e, t, n) {
		return {
			type: "Line",
			subPixelOptimize: !0,
			shape: kM([t, n[0]], [t, n[1]], PM(e))
		};
	},
	shadow: function(e, t, n) {
		var r = Math.max(1, e.getBandWidth()), i = n[1] - n[0];
		return {
			type: "Rect",
			shape: AM([t - r / 2, n[0]], [r, i], PM(e))
		};
	}
};
function PM(e) {
	return e.dim === "x" ? 0 : 1;
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js
var FM = function(e) {
	c(t, e);
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
			color: "#B9BEC9",
			width: 1,
			type: "dashed"
		},
		shadowStyle: { color: "rgba(210,219,238,0.2)" },
		label: {
			show: !0,
			formatter: null,
			precision: "auto",
			margin: 3,
			color: "#fff",
			padding: [
				5,
				7,
				5,
				7
			],
			backgroundColor: "auto",
			borderColor: null,
			borderWidth: 0,
			borderRadius: 3
		},
		handle: {
			show: !1,
			icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
			size: 45,
			margin: 50,
			color: "#333",
			shadowBlur: 3,
			shadowColor: "#aaa",
			shadowOffsetX: 0,
			shadowOffsetY: 2,
			throttle: 40
		}
	}, t;
}($), IM = Bs(), LM = I;
function RM(e, t, n) {
	if (!Y.node) {
		var r = t.getZr();
		IM(r).records || (IM(r).records = {}), zM(r, t);
		var i = IM(r).records[e] || (IM(r).records[e] = {});
		i.handler = n;
	}
}
function zM(e, t) {
	if (IM(e).initialized) return;
	IM(e).initialized = !0, n("click", ce(HM, "click")), n("mousemove", ce(HM, "mousemove")), n("globalout", VM);
	function n(n, r) {
		e.on(n, function(n) {
			var i = UM(t);
			LM(IM(e).records, function(e) {
				e && r(e, n, i.dispatchAction);
			}), BM(i.pendings, t);
		});
	}
}
function BM(e, t) {
	var n = e.showTip.length, r = e.hideTip.length, i;
	n ? i = e.showTip[n - 1] : r && (i = e.hideTip[r - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function VM(e, t, n) {
	e.handler("leave", null, n);
}
function HM(e, t, n, r) {
	t.handler(e, n, r);
}
function UM(e) {
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
function WM(e, t) {
	if (!Y.node) {
		var n = t.getZr();
		(IM(n).records || {})[e] && (IM(n).records[e] = null);
	}
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/AxisPointerView.js
var GM = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n) {
		var r = t.getComponent("tooltip"), i = e.get("triggerOn") || r && r.get("triggerOn") || "mousemove|click";
		RM("axisPointer", n, function(e, t, n) {
			i !== "none" && (e === "leave" || i.indexOf(e) >= 0) && n({
				type: "updateAxisPointer",
				currTrigger: e,
				x: t && t.offsetX,
				y: t && t.offsetY
			});
		});
	}, t.prototype.remove = function(e, t) {
		WM("axisPointer", t);
	}, t.prototype.dispose = function(e, t) {
		WM("axisPointer", t);
	}, t.type = "axisPointer", t;
}(mS);
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
function KM(e, t) {
	var n = [], r = e.seriesIndex, i;
	if (r == null || !(i = t.getSeriesByIndex(r))) return { point: [] };
	var a = i.getData(), o = zs(a, e);
	if (o == null || o < 0 || H(o)) return { point: [] };
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
var qM = Bs();
function JM(e, t, n) {
	var r = e.currTrigger, i = [e.x, e.y], a = e, o = e.dispatchAction || V(n.dispatchAction, n), s = t.getComponent("axisPointer").coordSysAxesInfo;
	if (s) {
		iN(i) && (i = KM({
			seriesIndex: a.seriesIndex,
			dataIndex: a.dataIndex
		}, t).point);
		var c = iN(i), l = a.axesInfo, u = s.axesInfo, d = r === "leave" || iN(i), f = {}, p = {}, m = {
			list: [],
			map: {}
		}, h = {
			showPointer: ce(ZM, p),
			showTooltip: ce(QM, m)
		};
		I(s.coordSysMap, function(e, t) {
			var n = c || e.containPoint(i);
			I(s.coordSysAxesInfo[t], function(e, t) {
				var r = e.axis, a = nN(l, e);
				if (!d && n && (!l || a)) {
					var o = a && a.value;
					o == null && !c && (o = r.pointToData(i)), o != null && YM(e, o, h, !1, f);
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
					n.mapper && (a = e.axis.scale.parse(n.mapper(a, rN(t), rN(e)))), g[e.key] = a;
				}
			});
		}), I(g, function(e, t) {
			YM(u[t], e, h, !0, f);
		}), $M(p, u, f), eN(m, i, e, o), tN(u, o, n), f;
	}
}
function YM(e, t, n, r, i) {
	var a = e.axis;
	if (!a.scale.isBlank() && a.containData(t)) {
		if (!e.involveSeries) n.showPointer(e, t);
		else {
			var o = XM(t, e), s = o.payloadBatch, c = o.snapToValue;
			s[0] && i.seriesIndex == null && N(i, s[0]), !r && e.snap && a.containData(c) && c != null && (t = c), n.showPointer(e, t, s), n.showTooltip(e, o, c);
		}
	}
}
function XM(e, t) {
	var n = t.axis, r = n.dim, i = e, a = [], o = Number.MAX_VALUE, s = -1;
	return I(t.seriesModels, function(t, c) {
		var l = t.getData().mapDimensionsAll(r), u, d;
		if (t.getAxisTooltipData) {
			var f = t.getAxisTooltipData(l, e, n);
			d = f.dataIndices, u = f.nestestValue;
		} else {
			if (d = t.getData().indicesOfNearest(l[0], e, n.type === "category" ? .5 : null), !d.length) return;
			u = t.getData().get(l[0], d[0]);
		}
		if (u != null && isFinite(u)) {
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
function ZM(e, t, n, r) {
	e[t.key] = {
		value: n,
		payloadBatch: r
	};
}
function QM(e, t, n, r) {
	var i = n.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
	if (t.triggerTooltip && i.length) {
		var c = t.coordSys.model, l = rO(c), u = e.map[l];
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
function $M(e, t, n) {
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
function eN(e, t, n, r) {
	if (iN(t) || !e.list.length) r({ type: "hideTip" });
	else {
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
}
function tN(e, t, n) {
	var r = n.getZr(), i = "axisPointerLastHighlights", a = qM(r)[i] || {}, o = qM(r)[i] = {};
	I(e, function(e, t) {
		var n = e.axisPointerModel.option;
		n.status === "show" && e.triggerEmphasis && I(n.seriesDataIndices, function(e) {
			var t = e.seriesIndex + " | " + e.dataIndex;
			o[t] = e;
		});
	});
	var s = [], c = [];
	I(a, function(e, t) {
		!o[t] && c.push(e);
	}), I(o, function(e, t) {
		!a[t] && s.push(e);
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
function nN(e, t) {
	for (var n = 0; n < (e || []).length; n++) {
		var r = e[n];
		if (t.axis.dim === r.axisDim && t.axis.model.componentIndex === r.axisIndex) return r;
	}
}
function rN(e) {
	var t = e.axis.model, n = {}, r = n.axisDim = e.axis.dim;
	return n.axisIndex = n[r + "AxisIndex"] = t.componentIndex, n.axisName = n[r + "AxisName"] = t.name, n.axisId = n[r + "AxisId"] = t.id, n;
}
function iN(e) {
	return !e || e[0] == null || isNaN(e[0]) || e[1] == null || isNaN(e[1]);
}
//#endregion
//#region node_modules/echarts/lib/component/axisPointer/install.js
function aN(e) {
	aO.registerAxisPointerClass("CartesianAxisPointer", jM), e.registerComponentModel(FM), e.registerComponentView(GM), e.registerPreprocessor(function(e) {
		if (e) {
			(!e.axisPointer || e.axisPointer.length === 0) && (e.axisPointer = {});
			var t = e.axisPointer.link;
			t && !H(t) && (e.axisPointer.link = [t]);
		}
	}), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, function(e, t) {
		e.getComponent("axisPointer").coordSysAxesInfo = qD(e, t);
	}), e.registerAction({
		type: "updateAxisPointer",
		event: "updateAxisPointer",
		update: ":updateAxisPointer"
	}, JM);
}
//#endregion
//#region node_modules/echarts/lib/component/grid/install.js
function oN(e) {
	HT(_O), HT(aN);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/helper.js
var sN = [
	"x",
	"y",
	"radius",
	"angle",
	"single"
], cN = [
	"cartesian2d",
	"polar",
	"singleAxis"
];
function lN(e) {
	return F(cN, e.get("coordinateSystem")) >= 0;
}
function uN(e) {
	return e + "Axis";
}
function dN(e, t) {
	var n = q(), r = [], i = q();
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
function fN(e) {
	var t = e.ecModel, n = {
		infoList: [],
		infoMap: q()
	};
	return e.eachTargetAxis(function(e, r) {
		var i = t.getComponent(uN(e), r);
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
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
var pN = function() {
	function e() {
		this.indexList = [], this.indexMap = [];
	}
	return e.prototype.add = function(e) {
		this.indexMap[e] || (this.indexList.push(e), this.indexMap[e] = !0);
	}, e;
}(), mN = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._autoThrottle = !0, n._noTarget = !0, n._rangePropMode = ["percent", "percent"], n;
	}
	return t.prototype.init = function(e, t, n) {
		var r = hN(e);
		this.settledOption = r, this.mergeDefaultAndTheme(e, n), this._doInit(r);
	}, t.prototype.mergeOption = function(e) {
		var t = hN(e);
		M(this.option, e, !0), M(this.settledOption, t, !0), this._doInit(t);
	}, t.prototype._doInit = function(e) {
		var t = this.option;
		this._setDefaultThrottle(e), this._updateRangeUse(e);
		var n = this.settledOption;
		I([["start", "startValue"], ["end", "endValue"]], function(e, r) {
			this._rangePropMode[r] === "value" && (t[e[0]] = n[e[0]] = null);
		}, this), this._resetTarget();
	}, t.prototype._resetTarget = function() {
		var e = this.get("orient", !0), t = this._targetAxisInfoMap = q();
		this._fillSpecifiedTargetAxis(t) ? this._orient = e || this._makeAutoOrientByTargetAxis() : (this._orient = e || "horizontal", this._fillAutoTargetAxisByOrient(t, this._orient)), this._noTarget = !0, t.each(function(e) {
			e.indexList.length && (this._noTarget = !1);
		}, this);
	}, t.prototype._fillSpecifiedTargetAxis = function(e) {
		var t = !1;
		return I(sN, function(n) {
			var r = this.getReferringComponents(uN(n), Gs);
			if (r.specified) {
				t = !0;
				var i = new pN();
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
				var a = new pN();
				if (a.add(i.componentIndex), e.set(n, a), r = !1, n === "x" || n === "y") {
					var o = i.getReferringComponents("grid", Ws).models[0];
					o && I(t, function(e) {
						i.componentIndex !== e.componentIndex && o === e.getReferringComponents("grid", Ws).models[0] && a.add(e.componentIndex);
					});
				}
			}
		}
		r && I(sN, function(t) {
			if (r) {
				var i = n.findComponents({
					mainType: uN(t),
					filter: function(e) {
						return e.get("type", !0) === "category";
					}
				});
				if (i[0]) {
					var a = new pN();
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
			e ??= this.ecModel.getComponent(uN(t), n);
		}, this), e;
	}, t.prototype.eachTargetAxis = function(e, t) {
		this._targetAxisInfoMap.each(function(n, r) {
			I(n.indexList, function(n) {
				e.call(t, r, n);
			});
		});
	}, t.prototype.getAxisProxy = function(e, t) {
		var n = this.getAxisModel(e, t);
		if (n) return n.__dzAxisProxy;
	}, t.prototype.getAxisModel = function(e, t) {
		var n = this._targetAxisInfoMap.get(e);
		if (n && n.indexMap[t]) return this.ecModel.getComponent(uN(e), t);
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
		if (e) return e.getDataPercentWindow();
	}, t.prototype.getValueRange = function(e, t) {
		if (e == null && t == null) {
			var n = this.findRepresentativeAxisProxy();
			if (n) return n.getDataValueWindow();
		} else return this.getAxisProxy(e, t).getDataValueWindow();
	}, t.prototype.findRepresentativeAxisProxy = function(e) {
		if (e) return e.__dzAxisProxy;
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
}($);
function hN(e) {
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
var gN = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n, r) {
		this.dataZoomModel = e, this.ecModel = t, this.api = n;
	}, t.type = "dataZoom", t;
}(mS), _N = I, vN = qo, yN = function() {
	function e(e, t, n, r) {
		this._dimName = e, this._axisIndex = t, this.ecModel = r, this._dataZoomModel = n;
	}
	return e.prototype.hostedBy = function(e) {
		return this._dataZoomModel === e;
	}, e.prototype.getDataValueWindow = function() {
		return this._valueWindow.slice();
	}, e.prototype.getDataPercentWindow = function() {
		return this._percentWindow.slice();
	}, e.prototype.getTargetSeriesModels = function() {
		var e = [];
		return this.ecModel.eachSeries(function(t) {
			if (lN(t)) {
				var n = uN(this._dimName), r = t.getReferringComponents(n, Ws).models[0];
				r && this._axisIndex === r.componentIndex && e.push(t);
			}
		}, this), e;
	}, e.prototype.getAxisModel = function() {
		return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
	}, e.prototype.getMinMaxSpan = function() {
		return j(this._minMaxSpan);
	}, e.prototype.calculateDataWindow = function(e) {
		var t = this._dataExtent, n = this.getAxisModel().axis.scale, r = this._dataZoomModel.getRangePropMode(), i = [0, 100], a = [], o = [], s;
		_N(["start", "end"], function(c, l) {
			var u = e[c], d = e[c + "Value"];
			r[l] === "percent" ? (u ??= i[l], d = n.parse(Wo(u, i, t))) : (s = !0, d = d == null ? t[l] : n.parse(d), u = Wo(d, t, i)), o[l] = d == null || isNaN(d) ? t[l] : d, a[l] = u == null || isNaN(u) ? i[l] : u;
		}), vN(o), vN(a);
		var c = this._minMaxSpan;
		s ? l(o, a, t, i, !1) : l(a, o, i, t, !0);
		function l(e, t, r, i, a) {
			var o = a ? "Span" : "ValueSpan";
			LA(0, e, r, "all", c["min" + o], c["max" + o]);
			for (var s = 0; s < 2; s++) t[s] = Wo(e[s], r, i, !0), a && (t[s] = n.parse(t[s]));
		}
		return {
			valueWindow: o,
			percentWindow: a
		};
	}, e.prototype.reset = function(e) {
		if (e === this._dataZoomModel) {
			var t = this.getTargetSeriesModels();
			this._dataExtent = bN(this, this._dimName, t), this._updateMinMaxSpan();
			var n = this.calculateDataWindow(e.settledOption);
			this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, this._setAxisModel();
		}
	}, e.prototype.filterData = function(e, t) {
		if (e !== this._dataZoomModel) return;
		var n = this._dimName, r = this.getTargetSeriesModels(), i = e.get("filterMode"), a = this._valueWindow;
		if (i === "none") return;
		_N(r, function(e) {
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
				} else _N(r, function(n) {
					if (i === "empty") e.setData(t = t.map(n, function(e) {
						return o(e) ? e : NaN;
					}));
					else {
						var r = {};
						r[n] = a, t.selectRange(r);
					}
				});
				_N(r, function(e) {
					t.setApproximateExtent(a, e);
				});
			}
		});
		function o(e) {
			return e >= a[0] && e <= a[1];
		}
	}, e.prototype._updateMinMaxSpan = function() {
		var e = this._minMaxSpan = {}, t = this._dataZoomModel, n = this._dataExtent;
		_N(["min", "max"], function(r) {
			var i = t.get(r + "Span"), a = t.get(r + "ValueSpan");
			a != null && (a = this.getAxisModel().axis.scale.parse(a)), a == null ? i != null && (a = Wo(i, [0, 100], n, !0) - n[0]) : i = Wo(n[0] + a, n, [0, 100], !0), e[r + "Span"] = i, e[r + "ValueSpan"] = a;
		}, this);
	}, e.prototype._setAxisModel = function() {
		var e = this.getAxisModel(), t = this._percentWindow, n = this._valueWindow;
		if (t) {
			var r = Xo(n, [0, 500]);
			r = Math.min(r, 20);
			var i = e.axis.scale.rawExtentInfo;
			t[0] !== 0 && i.setDeterminedMinMax("min", +n[0].toFixed(r)), t[1] !== 100 && i.setDeterminedMinMax("max", +n[1].toFixed(r)), i.freeze();
		}
	}, e;
}();
function bN(e, t, n) {
	var r = [Infinity, -Infinity];
	_N(n, function(e) {
		$E(r, e.getData(), t);
	});
	var i = e.getAxisModel(), a = zE(i.axis.scale, i, r).calculate();
	return [a.min, a.max];
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js
var xN = {
	getTargetSeries: function(e) {
		function t(t) {
			e.eachComponent("dataZoom", function(n) {
				n.eachTargetAxis(function(r, i) {
					t(r, i, e.getComponent(uN(r), i), n);
				});
			});
		}
		t(function(e, t, n, r) {
			n.__dzAxisProxy = null;
		});
		var n = [];
		t(function(t, r, i, a) {
			i.__dzAxisProxy || (i.__dzAxisProxy = new yN(t, r, a, e), n.push(i.__dzAxisProxy));
		});
		var r = q();
		return I(n, function(e) {
			I(e.getTargetSeriesModels(), function(e) {
				r.set(e.uid, e);
			});
		}), r;
	},
	overallReset: function(e, t) {
		e.eachComponent("dataZoom", function(e) {
			e.eachTargetAxis(function(t, n) {
				e.getAxisProxy(t, n).reset(e);
			}), e.eachTargetAxis(function(n, r) {
				e.getAxisProxy(n, r).filterData(e, t);
			});
		}), e.eachComponent("dataZoom", function(e) {
			var t = e.findRepresentativeAxisProxy();
			if (t) {
				var n = t.getDataPercentWindow(), r = t.getDataValueWindow();
				e.setCalculatedRange({
					start: n[0],
					end: n[1],
					startValue: r[0],
					endValue: r[1]
				});
			}
		});
	}
};
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/dataZoomAction.js
function SN(e) {
	e.registerAction("dataZoom", function(e, t) {
		I(dN(t, e), function(t) {
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
var CN = !1;
function wN(e) {
	CN || (CN = !0, e.registerProcessor(e.PRIORITY.PROCESSOR.FILTER, xN), SN(e), e.registerSubTypeDefaulter("dataZoom", function() {
		return "slider";
	}));
}
//#endregion
//#region node_modules/echarts/lib/component/helper/listComponent.js
function TN(e, t) {
	var n = th(t.get("padding")), r = t.getItemStyle(["color", "opacity"]);
	return r.fill = t.get("backgroundColor"), e = new Co({
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
	}), e;
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/TooltipModel.js
var EN = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
		z: 60,
		show: !0,
		showContent: !0,
		trigger: "item",
		triggerOn: "mousemove|click",
		alwaysShowContent: !1,
		displayMode: "single",
		renderMode: "auto",
		confine: null,
		showDelay: 0,
		hideDelay: 100,
		transitionDuration: .4,
		enterable: !1,
		backgroundColor: "#fff",
		shadowBlur: 10,
		shadowColor: "rgba(0, 0, 0, .2)",
		shadowOffsetX: 1,
		shadowOffsetY: 2,
		borderRadius: 4,
		borderWidth: 1,
		padding: null,
		extraCssText: "",
		axisPointer: {
			type: "line",
			axis: "auto",
			animation: "auto",
			animationDurationUpdate: 200,
			animationEasingUpdate: "exponentialOut",
			crossStyle: {
				color: "#999",
				width: 1,
				type: "dashed",
				textStyle: {}
			}
		},
		textStyle: {
			color: "#666",
			fontSize: 14
		}
	}, t;
}($);
//#endregion
//#region node_modules/echarts/lib/component/tooltip/helper.js
function DN(e) {
	var t = e.get("confine");
	return t == null ? e.get("renderMode") === "richText" : !!t;
}
function ON(e) {
	if (Y.domSupported) {
		for (var t = document.documentElement.style, n = 0, r = e.length; n < r; n++) if (e[n] in t) return e[n];
	}
}
var kN = ON([
	"transform",
	"webkitTransform",
	"OTransform",
	"MozTransform",
	"msTransform"
]), AN = ON([
	"webkitTransition",
	"transition",
	"OTransition",
	"MozTransition",
	"msTransition"
]);
function jN(e, t) {
	if (!e) return t;
	t = eh(t, !0);
	var n = e.indexOf(t);
	return e = n === -1 ? t : "-" + e.slice(0, n) + "-" + t, e.toLowerCase();
}
function MN(e, t) {
	var n = e.currentStyle || document.defaultView && document.defaultView.getComputedStyle(e);
	return n ? t ? n[t] : n : null;
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js
var NN = jN(AN, "transition"), PN = jN(kN, "transform"), FN = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (Y.transform3dSupported ? "will-change:transform;" : "");
function IN(e) {
	return e = e === "left" ? "right" : e === "right" ? "left" : e === "top" ? "bottom" : "top", e;
}
function LN(e, t, n) {
	if (!W(n) || n === "inside") return "";
	var r = e.get("backgroundColor"), i = e.get("borderWidth");
	t = lh(t);
	var a = IN(n), o = Math.max(Math.round(i) * 1.5, 6), s = "", c = PN + ":", l;
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
function RN(e, t) {
	var n = "cubic-bezier(0.23,1,0.32,1)", r = " " + e / 2 + "s " + n, i = "opacity" + r + ",visibility" + r;
	return t || (r = " " + e + "s " + n, i += Y.transformSupported ? "," + PN + r : ",left" + r + ",top" + r), NN + ":" + i;
}
function zN(e, t, n) {
	var r = e.toFixed(0) + "px", i = t.toFixed(0) + "px";
	if (!Y.transformSupported) return n ? "top:" + i + ";left:" + r + ";" : [["top", i], ["left", r]];
	var a = Y.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + r + "," + i + (a ? ",0" : "") + ")";
	return n ? "top:0;left:0;" + PN + ":" + o + ";" : [
		["top", 0],
		["left", 0],
		[kN, o]
	];
}
function BN(e) {
	var t = [], n = e.get("fontSize"), r = e.getTextColor();
	r && t.push("color:" + r), t.push("font:" + e.getFont());
	var i = K(e.get("lineHeight"), Math.round(n * 3 / 2));
	n && t.push("line-height:" + i + "px");
	var a = e.get("textShadowColor"), o = e.get("textShadowBlur") || 0, s = e.get("textShadowOffsetX") || 0, c = e.get("textShadowOffsetY") || 0;
	return a && o && t.push("text-shadow:" + s + "px " + c + "px " + o + "px " + a), I(["decoration", "align"], function(n) {
		var r = e.get(n);
		r && t.push("text-" + n + ":" + r);
	}), t.join(";");
}
function VN(e, t, n) {
	var r = [], i = e.get("transitionDuration"), a = e.get("backgroundColor"), o = e.get("shadowBlur"), s = e.get("shadowColor"), c = e.get("shadowOffsetX"), l = e.get("shadowOffsetY"), u = e.getModel("textStyle"), d = hg(e, "html"), f = c + "px " + l + "px " + o + "px " + s;
	return r.push("box-shadow:" + f), t && i && r.push(RN(i, n)), a && r.push("background-color:" + a), I([
		"width",
		"color",
		"radius"
	], function(t) {
		var n = "border-" + t, i = eh(n), a = e.get(i);
		a != null && r.push(n + ":" + a + (t === "color" ? "" : "px"));
	}), r.push(BN(u)), d != null && r.push("padding:" + th(d).join("px ") + "px"), r.join(";") + ";";
}
function HN(e, t, n, r, i) {
	var a = t && t.painter;
	if (n) {
		var o = a && a.getViewportRoot();
		o && em(e, o, n, r, i);
	} else {
		e[0] = r, e[1] = i;
		var s = a && a.getViewportRootOffset();
		s && (e[0] += s.offsetLeft, e[1] += s.offsetTop);
	}
	e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
var UN = function() {
	function e(e, t) {
		if (this._show = !1, this._styleCoord = [
			0,
			0,
			0,
			0
		], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, Y.wxa) return null;
		var n = document.createElement("div");
		n.domBelongToZr = !0, this.el = n;
		var r = this._zr = e.getZr(), i = t.appendTo, a = i && (W(i) ? document.querySelector(i) : pe(i) ? i : U(i) && i(e.getDom()));
		HN(this._styleCoord, r, a, e.getWidth() / 2, e.getHeight() / 2), (a || e.getDom()).appendChild(n), this._api = e, this._container = a;
		var o = this;
		n.onmouseenter = function() {
			o._enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0;
		}, n.onmousemove = function(e) {
			if (e ||= window.event, !o._enterable) {
				var t = r.handler;
				$y(r.painter.getViewportRoot(), e, !0), t.dispatch("mousemove", e);
			}
		}, n.onmouseleave = function() {
			o._inContent = !1, o._enterable && o._show && o.hideLater(o._hideDelay);
		};
	}
	return e.prototype.update = function(e) {
		if (!this._container) {
			var t = this._api.getDom(), n = MN(t, "position"), r = t.style;
			r.position !== "absolute" && n !== "absolute" && (r.position = "relative");
		}
		var i = e.get("alwaysShowContent");
		i && this._moveIfResized(), this._alwaysShowContent = i, this.el.className = e.get("className") || "";
	}, e.prototype.show = function(e, t) {
		clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
		var n = this.el, r = n.style, i = this._styleCoord;
		n.innerHTML ? r.cssText = FN + VN(e, !this._firstShow, this._longHide) + zN(i[0], i[1], !0) + ("border-color:" + lh(t) + ";") + (e.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : r.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
	}, e.prototype.setContent = function(e, t, n, r, i) {
		var a = this.el;
		if (e == null) a.innerHTML = "";
		else {
			var o = "";
			if (W(i) && n.get("trigger") === "item" && !DN(n) && (o = LN(n, r, i)), W(e)) a.innerHTML = e + o;
			else if (e) {
				a.innerHTML = "", H(e) || (e = [e]);
				for (var s = 0; s < e.length; s++) pe(e[s]) && e[s].parentNode !== a && a.appendChild(e[s]);
				if (o && a.childNodes.length) {
					var c = document.createElement("div");
					c.innerHTML = o, a.appendChild(c);
				}
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
			if (HN(n, this._zr, this._container, e, t), n[0] != null && n[1] != null) {
				var r = this.el.style;
				I(zN(n[0], n[1]), function(e) {
					r[e[0]] = e[1];
				});
			}
		}
	}, e.prototype._moveIfResized = function() {
		var e = this._styleCoord[2], t = this._styleCoord[3];
		this.moveTo(e * this._zr.getWidth(), t * this._zr.getHeight());
	}, e.prototype.hide = function() {
		var e = this, t = this.el.style;
		t.visibility = "hidden", t.opacity = "0", Y.transform3dSupported && (t.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
			return e._longHide = !0;
		}, 500);
	}, e.prototype.hideLater = function(e) {
		this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(V(this.hide, this), e)) : this.hide());
	}, e.prototype.isShow = function() {
		return this._show;
	}, e.prototype.dispose = function() {
		clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
		var e = this.el.parentNode;
		e && e.removeChild(this.el), this.el = this._container = null;
	}, e;
}(), WN = function() {
	function e(e) {
		this._show = !1, this._styleCoord = [
			0,
			0,
			0,
			0
		], this._alwaysShowContent = !1, this._enterable = !0, this._zr = e.getZr(), qN(this._styleCoord, this._zr, e.getWidth() / 2, e.getHeight() / 2);
	}
	return e.prototype.update = function(e) {
		var t = e.get("alwaysShowContent");
		t && this._moveIfResized(), this._alwaysShowContent = t;
	}, e.prototype.show = function() {
		this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
	}, e.prototype.setContent = function(e, t, n, r, i) {
		var a = this;
		G(e) && hs(""), this.el && this._zr.remove(this.el);
		var o = n.getModel("textStyle");
		this.el = new Do({
			style: {
				rich: t.richTextStyles,
				text: e,
				lineHeight: 22,
				borderWidth: 1,
				borderColor: r,
				textShadowColor: o.get("textShadowColor"),
				fill: n.get(["textStyle", "color"]),
				padding: hg(n, "richText"),
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
		var e = this.el, t = this.el.getBoundingRect(), n = KN(e.style);
		return [t.width + n.left + n.right, t.height + n.top + n.bottom];
	}, e.prototype.moveTo = function(e, t) {
		var n = this.el;
		if (n) {
			var r = this._styleCoord;
			qN(r, this._zr, e, t), e = r[0], t = r[1];
			var i = n.style, a = GN(i.borderWidth || 0), o = KN(i);
			n.x = e + a + o.left, n.y = t + a + o.top, n.markRedraw();
		}
	}, e.prototype._moveIfResized = function() {
		var e = this._styleCoord[2], t = this._styleCoord[3];
		this.moveTo(e * this._zr.getWidth(), t * this._zr.getHeight());
	}, e.prototype.hide = function() {
		this.el && this.el.hide(), this._show = !1;
	}, e.prototype.hideLater = function(e) {
		this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (e ? (this._hideDelay = e, this._show = !1, this._hideTimeout = setTimeout(V(this.hide, this), e)) : this.hide());
	}, e.prototype.isShow = function() {
		return this._show;
	}, e.prototype.dispose = function() {
		this._zr.remove(this.el);
	}, e;
}();
function GN(e) {
	return Math.max(0, e);
}
function KN(e) {
	var t = GN(e.shadowBlur || 0), n = GN(e.shadowOffsetX || 0), r = GN(e.shadowOffsetY || 0);
	return {
		left: GN(t - n),
		right: GN(t + n),
		top: GN(t - r),
		bottom: GN(t + r)
	};
}
function qN(e, t, n, r) {
	e[0] = n, e[1] = r, e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
//#endregion
//#region node_modules/echarts/lib/component/tooltip/TooltipView.js
var JN = new Co({ shape: {
	x: -1,
	y: -1,
	width: 2,
	height: 2
} }), YN = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.init = function(e, t) {
		if (!Y.node && t.getDom()) {
			var n = e.getComponent("tooltip"), r = this._renderMode = Ys(n.get("renderMode"));
			this._tooltipContent = r === "richText" ? new WN(t) : new UN(t, { appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0) });
		}
	}, t.prototype.render = function(e, t, n) {
		if (!Y.node && n.getDom()) {
			this.group.removeAll(), this._tooltipModel = e, this._ecModel = t, this._api = n;
			var r = this._tooltipContent;
			r.update(e), r.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? fv(this, "_updatePosition", 50, "fixRate") : pv(this, "_updatePosition");
		}
	}, t.prototype._initGlobalListener = function() {
		var e = this._tooltipModel.get("triggerOn");
		RM("itemTooltip", this._api, V(function(t, n, r) {
			e !== "none" && (e.indexOf(t) >= 0 ? this._tryShow(n, r) : t === "leave" && this._hide(r));
		}, this));
	}, t.prototype._keepShow = function() {
		var e = this._tooltipModel, t = this._ecModel, n = this._api, r = e.get("triggerOn");
		if (this._lastX != null && this._lastY != null && r !== "none" && r !== "click") {
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
		if (r.from !== this.uid && !Y.node && n.getDom()) {
			var i = ZN(r, n);
			this._ticket = "";
			var a = r.dataByCoordSys, o = nP(r, t, n);
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
				var c = JN;
				c.x = r.x, c.y = r.y, c.update(), Q(c).tooltipConfig = {
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
				var l = KM(r, t), u = l.point[0], d = l.point[1];
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
		this._tooltipModel && i.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, r.from !== this.uid && this._hide(ZN(r, n));
	}, t.prototype._manuallyAxisShowTip = function(e, t, n, r) {
		var i = r.seriesIndex, a = r.dataIndex, o = t.getComponent("axisPointer").coordSysAxesInfo;
		if (i != null && a != null && o != null) {
			var s = t.getSeriesByIndex(i);
			if (s && XN([
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
				if (Q(n).ssrType === "legend") return;
				this._lastDataByCoordSys = null;
				var i, a;
				nC(n, function(e) {
					if (Q(e).dataIndex != null) return i = e, !0;
					if (Q(e).tooltipConfig != null) return a = e, !0;
				}, !0), i ? this._showSeriesItemTooltip(e, i, t) : a ? this._showComponentItemTooltip(e, a, t) : this._hide(t);
			} else this._lastDataByCoordSys = null, this._hide(t);
		}
	}, t.prototype._showOrMove = function(e, t) {
		var n = e.get("showDelay");
		t = V(t, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(t, n) : t();
	}, t.prototype._showAxisTooltip = function(e, t) {
		var n = this._ecModel, r = this._tooltipModel, i = [t.offsetX, t.offsetY], a = XN([t.tooltipOption], r), o = this._renderMode, s = [], c = tg("section", {
			blocks: [],
			noHeader: !0
		}), l = [], u = new gg();
		I(e, function(e) {
			I(e.dataByAxis, function(e) {
				var t = n.getComponent(e.axisDim + "Axis", e.axisIndex), i = e.value;
				if (t && i != null) {
					var a = EM(i, t.axis, n, e.seriesDataIndices, e.valueLabelOpt), d = tg("section", {
						header: a,
						noHeader: !Ce(a),
						sortBlocks: !0,
						blocks: []
					});
					c.blocks.push(d), I(e.seriesDataIndices, function(c) {
						var f = n.getSeriesByIndex(c.seriesIndex), p = c.dataIndexInside, m = f.getDataParams(p);
						if (!(m.dataIndex < 0)) {
							m.axisDim = e.axisDim, m.axisIndex = e.axisIndex, m.axisType = e.axisType, m.axisId = e.axisId, m.axisValue = qE(t.axis, { value: i }), m.axisValueLabel = a, m.marker = u.makeTooltipMarker("item", lh(m.color), o);
							var h = jh(f.formatTooltip(p, !0, null)), g = h.frag;
							if (g) {
								var _ = XN([f], r).get("valueFormatter");
								d.blocks.push(_ ? N({ valueFormatter: _ }, g) : g);
							}
							h.text && l.push(h.text), s.push(m);
						}
					});
				}
			});
		}), c.blocks.reverse(), l.reverse();
		var d = t.position, f = sg(c, u, o, a.get("order"), n.get("useUTC"), a.get("textStyle"));
		f && l.unshift(f);
		var p = o === "richText" ? "\n\n" : "<br/>", m = l.join(p);
		this._showOrMove(a, function() {
			this._updateContentNotChangedOnAxis(e, s) ? this._updatePosition(a, d, i[0], i[1], this._tooltipContent, s) : this._showTooltipContent(a, m, s, Math.random() + "", i[0], i[1], d, null, u);
		});
	}, t.prototype._showSeriesItemTooltip = function(e, t, n) {
		var r = this._ecModel, i = Q(t), a = i.seriesIndex, o = r.getSeriesByIndex(a), s = i.dataModel || o, c = i.dataIndex, l = i.dataType, u = s.getData(l), d = this._renderMode, f = e.positionDefault, p = XN([
			u.getItemModel(c),
			s,
			o && (o.coordinateSystem || {}).model
		], this._tooltipModel, f ? { position: f } : null), m = p.get("trigger");
		if (m == null || m === "item") {
			var h = s.getDataParams(c, l), g = new gg();
			h.marker = g.makeTooltipMarker("item", lh(h.color), d);
			var _ = jh(s.formatTooltip(c, !1, l)), v = p.get("order"), y = p.get("valueFormatter"), b = _.frag, x = b ? sg(y ? N({ valueFormatter: y }, b) : b, g, d, v, r.get("useUTC"), p.get("textStyle")) : _.text, S = "item_" + s.name + "_" + c;
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
		var r = this._renderMode === "html", i = Q(t), a = i.tooltipConfig.option || {}, o = a.encodeHTMLContent;
		if (W(a)) {
			var s = a;
			a = {
				content: s,
				formatter: s
			}, o = !0;
		}
		o && r && a.content && (a = j(a), a.content = sm(a.content));
		var c = [a], l = this._ecModel.getComponent(i.componentMainType, i.componentIndex);
		l && c.push(l), c.push({ formatter: a.content });
		var u = e.positionDefault, d = XN(c, this._tooltipModel, u ? { position: u } : null), f = d.get("content"), p = Math.random() + "", m = new gg();
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
			var d = t, f = this._getNearestPoint([i, a], n, e.get("trigger"), e.get("borderColor")).color;
			if (u) {
				if (W(u)) {
					var p = e.ecModel.get("useUTC"), m = H(n) ? n[0] : n, h = m && m.axisType && m.axisType.indexOf("time") >= 0;
					d = u, h && (d = Pm(m.axisValue, d, p)), d = ah(d, n, !0);
				} else if (U(u)) {
					var g = V(function(t, r) {
						t === this._ticket && (l.setContent(r, c, e, f, o), this._updatePosition(e, o, i, a, l, n, s));
					}, this);
					this._ticket = r, d = u(n, r, g);
				} else d = u;
			}
			l.setContent(d, c, e, f, o), l.show(e, f), this._updatePosition(e, o, i, a, l, n, s);
		}
	}, t.prototype._getNearestPoint = function(e, t, n, r) {
		if (n === "axis" || H(t)) return { color: r || (this._renderMode === "html" ? "#fff" : "none") };
		if (!H(t)) return { color: r || t.color || t.borderColor };
	}, t.prototype._updatePosition = function(e, t, n, r, i, a, o) {
		var s = this._api.getWidth(), c = this._api.getHeight();
		t ||= e.get("position");
		var l = i.getSize(), u = e.get("align"), d = e.get("verticalAlign"), f = o && o.getBoundingRect().clone();
		if (o && f.applyTransform(o.transform), U(t) && (t = t([n, r], a, i.el, f, {
			viewSize: [s, c],
			contentSize: l.slice()
		})), H(t)) n = Go(t[0], s), r = Go(t[1], c);
		else if (G(t)) {
			var p = t;
			p.width = l[0], p.height = l[1];
			var m = gh(p, {
				width: s,
				height: c
			});
			n = m.x, r = m.y, u = null, d = null;
		} else if (W(t) && o) {
			var h = eP(t, f, l, e.get("borderWidth"));
			n = h[0], r = h[1];
		} else {
			var h = QN(n, r, i, s, c, u ? null : 20, d ? null : 20);
			n = h[0], r = h[1];
		}
		if (u && (n -= tP(u) ? l[0] / 2 : u === "right" ? l[0] : 0), d && (r -= tP(d) ? l[1] / 2 : d === "bottom" ? l[1] : 0), DN(e)) {
			var h = $N(n, r, i, s, c);
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
		this._lastDataByCoordSys = null, e({
			type: "hideTip",
			from: this.uid
		});
	}, t.prototype.dispose = function(e, t) {
		!Y.node && t.getDom() && (pv(this, "_updatePosition"), this._tooltipContent.dispose(), WM("itemTooltip", t));
	}, t.type = "tooltip", t;
}(mS);
function XN(e, t, n) {
	var r = t.ecModel, i;
	n ? (i = new zd(n, r, r), i = new zd(t.option, i, r)) : i = t;
	for (var a = e.length - 1; a >= 0; a--) {
		var o = e[a];
		o && (o instanceof zd && (o = o.get("tooltip", !0)), W(o) && (o = { formatter: o }), o && (i = new zd(o, i, r)));
	}
	return i;
}
function ZN(e, t) {
	return e.dispatchAction || V(t.dispatchAction, t);
}
function QN(e, t, n, r, i, a, o) {
	var s = n.getSize(), c = s[0], l = s[1];
	return a != null && (e + c + a + 2 > r ? e -= c + a : e += a), o != null && (t + l + o > i ? t -= l + o : t += o), [e, t];
}
function $N(e, t, n, r, i) {
	var a = n.getSize(), o = a[0], s = a[1];
	return e = Math.min(e + o, r) - o, t = Math.min(t + s, i) - s, e = Math.max(e, 0), t = Math.max(t, 0), [e, t];
}
function eP(e, t, n, r) {
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
function tP(e) {
	return e === "center" || e === "middle";
}
function nP(e, t, n) {
	var r = Us(e).queryOptionMap, i = r.keys()[0];
	if (i && i !== "series") {
		var a = Ks(t, i, r.get(i), {
			useDefault: !1,
			enableAll: !1,
			enableNone: !1
		}).models[0];
		if (a) {
			var o = n.getViewOfComponentModel(a), s;
			if (o.group.traverse(function(t) {
				var n = Q(t).tooltipConfig;
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
function rP(e) {
	HT(aN), e.registerComponentModel(EN), e.registerComponentView(YN), e.registerAction({
		type: "showTip",
		event: "showTip",
		update: "tooltip:manuallyShowTip"
	}, Pe), e.registerAction({
		type: "hideTip",
		event: "hideTip",
		update: "tooltip:manuallyHideTip"
	}, Pe);
}
//#endregion
//#region node_modules/echarts/lib/visual/visualSolution.js
var iP = I;
function aP(e) {
	if (e) {
		for (var t in e) if (e.hasOwnProperty(t)) return !0;
	}
}
function oP(e, t, n) {
	var r = {};
	return iP(t, function(t) {
		var a = r[t] = i();
		iP(e[t], function(e, r) {
			if (CA.isValidType(r)) {
				var i = {
					type: r,
					visual: e
				};
				n && n(i, t), a[r] = new CA(i), r === "opacity" && (i = j(i), i.type = "colorAlpha", a.__hidden.__alphaForOpacity = new CA(i));
			}
		});
	}), r;
	function i() {
		var e = function() {};
		return e.prototype.__hidden = e.prototype, new e();
	}
}
function sP(e, t, n) {
	var r;
	I(n, function(e) {
		t.hasOwnProperty(e) && aP(t[e]) && (r = !0);
	}), r && I(n, function(n) {
		t.hasOwnProperty(n) && aP(t[n]) ? e[n] = j(t[n]) : delete e[n];
	});
}
function cP(e, t, n, r) {
	var i = {};
	return I(e, function(e) {
		i[e] = CA.prepareVisualTypes(t[e]);
	}), { progress: function(e, a) {
		var o;
		r != null && (o = a.getDimensionIndex(r));
		function s(e) {
			return $S(a, l, e);
		}
		function c(e, t) {
			tC(a, l, e, t);
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
var lP = function(e) {
	c(t, e);
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
		left: 0,
		top: 0,
		backgroundColor: "rgba(0,0,0,0)",
		borderColor: "#ccc",
		borderWidth: 0,
		padding: 5,
		itemGap: 10,
		textStyle: {
			fontSize: 18,
			fontWeight: "bold",
			color: "#464646"
		},
		subtextStyle: {
			fontSize: 12,
			color: "#6E7079"
		}
	}, t;
}($), uP = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.render = function(e, t, n) {
		if (this.group.removeAll(), e.get("show")) {
			var r = this.group, i = e.getModel("textStyle"), a = e.getModel("subtextStyle"), o = e.get("textAlign"), s = K(e.get("textBaseline"), e.get("textVerticalAlign")), c = new Do({
				style: _d(i, {
					text: e.get("text"),
					fill: i.getTextColor()
				}, { disableBox: !0 }),
				z2: 10
			}), l = c.getBoundingRect(), u = e.get("subtext"), d = new Do({
				style: _d(a, {
					text: u,
					fill: a.getTextColor(),
					y: l.height + e.get("itemGap"),
					verticalAlign: "top"
				}, { disableBox: !0 }),
				z2: 10
			}), f = e.get("link"), p = e.get("sublink"), m = e.get("triggerEvent", !0);
			c.silent = !f && !m, d.silent = !p && !m, f && c.on("click", function() {
				uh(f, "_" + e.get("target"));
			}), p && d.on("click", function() {
				uh(p, "_" + e.get("subtarget"));
			}), Q(c).eventData = Q(d).eventData = m ? {
				componentType: "title",
				componentIndex: e.componentIndex
			} : null, r.add(c), u && r.add(d);
			var h = r.getBoundingRect(), g = e.getBoxLayoutParams();
			g.width = h.width, g.height = h.height;
			var _ = gh(g, {
				width: n.getWidth(),
				height: n.getHeight()
			}, e.get("padding"));
			o || (o = e.get("left") || e.get("right"), o === "middle" && (o = "center"), o === "right" ? _.x += _.width : o === "center" && (_.x += _.width / 2)), s || (s = e.get("top") || e.get("bottom"), s === "center" && (s = "middle"), s === "bottom" ? _.y += _.height : s === "middle" && (_.y += _.height / 2), s ||= "top"), r.x = _.x, r.y = _.y, r.markRedraw();
			var v = {
				align: o,
				verticalAlign: s
			};
			c.setStyle(v), d.setStyle(v), h = r.getBoundingRect();
			var y = _.margin, b = e.getItemStyle(["color", "opacity"]);
			b.fill = e.get("backgroundColor");
			var x = new Co({
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
}(mS);
function dP(e) {
	e.registerComponentModel(lP), e.registerComponentView(uP);
}
//#endregion
//#region node_modules/echarts/lib/component/legend/LegendModel.js
var fP = function(e, t) {
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
}, pP = function(e) {
	c(t, e);
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
		t === !0 && (t = e.selector = ["all", "inverse"]), H(t) && I(t, function(e, r) {
			W(e) && (e = { type: e }), t[r] = M(e, fP(n, e.type));
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
			a && Ps(r) && t.push(r.name);
		}), this._availableNames = n;
		var r = this.get("data") || t, i = q(), a = L(r, function(e) {
			return (W(e) || ue(e)) && (e = { name: e }), i.get(e.name) ? null : (i.set(e.name, !0), new zd(e, this, this.ecModel));
		}, this);
		this._data = R(a, function(e) {
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
		top: 0,
		align: "auto",
		backgroundColor: "rgba(0,0,0,0)",
		borderColor: "#ccc",
		borderRadius: 0,
		borderWidth: 0,
		padding: 5,
		itemGap: 10,
		itemWidth: 25,
		itemHeight: 14,
		symbolRotate: "inherit",
		symbolKeepAspect: !0,
		inactiveColor: "#ccc",
		inactiveBorderColor: "#ccc",
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
			inactiveColor: "#ccc",
			inactiveWidth: 2,
			opacity: "inherit",
			type: "inherit",
			cap: "inherit",
			join: "inherit",
			dashOffset: "inherit",
			miterLimit: "inherit"
		},
		textStyle: { color: "#333" },
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
			color: "#666",
			borderWidth: 1,
			borderColor: "#666"
		},
		emphasis: { selectorLabel: {
			show: !0,
			color: "#eee",
			backgroundColor: "#666"
		} },
		selectorPosition: "auto",
		selectorItemGap: 7,
		selectorButtonGap: 10,
		tooltip: { show: !1 }
	}, t;
}($), mP = ce, hP = I, gP = Dl, _P = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.newlineDisabled = !1, n;
	}
	return t.prototype.init = function() {
		this.group.add(this._contentGroup = new gP()), this.group.add(this._selectorGroup = new gP()), this._isFirstRender = !0;
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
			var c = e.getBoxLayoutParams(), l = {
				width: n.getWidth(),
				height: n.getHeight()
			}, u = e.get("padding"), d = gh(c, l, u), f = this.layoutInner(e, i, d, r, o, s), p = gh(P({
				width: f.width,
				height: f.height
			}, c), l, u);
			this.group.x = p.x - f.x, this.group.y = p.y - f.y, this.group.markRedraw(), this.group.add(this._backgroundEl = TN(f, e));
		}
	}, t.prototype.resetInner = function() {
		this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
	}, t.prototype.renderInner = function(e, t, n, r, i, a, o) {
		var s = this.getContentGroup(), c = q(), l = t.get("selectedMode"), u = [];
		n.eachRawSeries(function(e) {
			!e.get("legendHoverLink") && u.push(e.id);
		}), hP(t.getData(), function(i, a) {
			var o = i.get("name");
			if (!this.newlineDisabled && (o === "" || o === "\n")) {
				var d = new gP();
				d.newline = !0, s.add(d);
			} else {
				var f = n.getSeriesByName(o)[0];
				if (!c.get(o)) {
					if (f) {
						var p = f.getData(), m = p.getVisual("legendLineStyle") || {}, h = p.getVisual("legendIcon"), g = p.getVisual("style"), _ = this._createItem(f, o, a, i, t, e, m, g, h, l, r);
						_.on("click", mP(bP, o, null, r, u)).on("mouseover", mP(SP, f.name, null, r, u)).on("mouseout", mP(CP, f.name, null, r, u)), n.ssr && _.eachChild(function(e) {
							var t = Q(e);
							t.seriesIndex = f.seriesIndex, t.dataIndex = a, t.ssrType = "legend";
						}), c.set(o, !0);
					} else n.eachRawSeries(function(s) {
						if (!c.get(o) && s.legendVisualProvider) {
							var d = s.legendVisualProvider;
							if (!d.containName(o)) return;
							var f = d.indexOfName(o), p = d.getItemVisual(f, "style"), m = d.getItemVisual(f, "legendIcon"), h = wr(p.fill);
							h && h[3] === 0 && (h[3] = .2, p = N(N({}, p), { fill: Fr(h, "rgba") }));
							var g = this._createItem(s, o, a, i, t, e, {}, p, m, l, r);
							g.on("click", mP(bP, null, o, r, u)).on("mouseover", mP(SP, null, o, r, u)).on("mouseout", mP(CP, null, o, r, u)), n.ssr && g.eachChild(function(e) {
								var t = Q(e);
								t.seriesIndex = s.seriesIndex, t.dataIndex = a, t.ssrType = "legend";
							}), c.set(o, !0);
						}
					}, this);
				}
			}
		}, this), i && this._createSelector(i, t, r, a, o);
	}, t.prototype._createSelector = function(e, t, n, r, i) {
		var a = this.getSelectorGroup();
		hP(e, function(e) {
			var r = e.type, i = new Do({
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
			a.add(i), hd(i, {
				normal: t.getModel("selectorLabel"),
				emphasis: t.getModel(["emphasis", "selectorLabel"])
			}, { defaultText: e.title }), Gc(i);
		});
	}, t.prototype._createItem = function(e, t, n, r, i, a, o, s, c, l, u) {
		var d = e.visualDrawType, f = i.get("itemWidth"), p = i.get("itemHeight"), m = i.isSelected(t), h = r.get("symbolRotate"), g = r.get("symbolKeepAspect"), _ = r.get("icon");
		c = _ || c || "roundRect";
		var v = vP(c, r, o, s, d, m, u), y = new gP(), b = r.getModel("textStyle");
		if (U(e.getLegendIcon) && (!_ || _ === "inherit")) y.add(e.getLegendIcon({
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
			y.add(yP({
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
		W(w) && w ? T = w.replace("{name}", t ?? "") : U(w) && (T = w(t));
		var E = m ? b.getTextColor() : r.get("inactiveColor");
		y.add(new Do({ style: _d(b, {
			text: T,
			x: S,
			y: p / 2,
			fill: E,
			align: C,
			verticalAlign: "middle"
		}, { inheritColor: E }) }));
		var D = new Co({
			shape: y.getBoundingRect(),
			style: { fill: "transparent" }
		}), O = r.getModel("tooltip");
		return O.get("show") && ld({
			el: D,
			componentModel: i,
			itemName: t,
			itemTooltipOption: O.option
		}), y.add(D), y.eachChild(function(e) {
			e.silent = !0;
		}), D.silent = !l, this.getContentGroup().add(y), Gc(y), y.__legendDataIndex = n, y;
	}, t.prototype.layoutInner = function(e, t, n, r, i, a) {
		var o = this.getContentGroup(), s = this.getSelectorGroup();
		hh(e.get("orient"), o, e.get("itemGap"), n.width, n.height);
		var c = o.getBoundingRect(), l = [-c.x, -c.y];
		if (s.markRedraw(), o.markRedraw(), i) {
			hh("horizontal", s, e.get("selectorItemGap", !0));
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
}(mS);
function vP(e, t, n, r, i, a, o) {
	function s(e, t) {
		e.lineWidth === "auto" && (e.lineWidth = t.lineWidth > 0 ? 2 : 0), hP(e, function(n, r) {
			e[r] === "inherit" && (e[r] = t[r]);
		});
	}
	var c = t.getModel("itemStyle"), l = c.getItemStyle(), u = e.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", d = c.getShallow("decal");
	l.decal = !d || d === "inherit" ? r.decal : KC(d, o), l.fill === "inherit" && (l.fill = r[i]), l.stroke === "inherit" && (l.stroke = r[u]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? r : n).opacity), s(l, r);
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
function yP(e) {
	var t = e.icon || "roundRect", n = Ig(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill, e.symbolKeepAspect);
	return n.setStyle(e.itemStyle), n.rotation = (e.iconRotate || 0) * Math.PI / 180, n.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), t.indexOf("empty") > -1 && (n.style.stroke = n.style.fill, n.style.fill = "#fff", n.style.lineWidth = 2), n;
}
function bP(e, t, n, r) {
	CP(e, t, n, r), n.dispatchAction({
		type: "legendToggleSelect",
		name: e ?? t
	}), SP(e, t, n, r);
}
function xP(e) {
	for (var t = e.getZr().storage.getDisplayList(), n, r = 0, i = t.length; r < i && !(n = t[r].states.emphasis);) r++;
	return n && n.hoverLayer;
}
function SP(e, t, n, r) {
	xP(n) || n.dispatchAction({
		type: "highlight",
		seriesName: e,
		name: t,
		excludeSeriesId: r
	});
}
function CP(e, t, n, r) {
	xP(n) || n.dispatchAction({
		type: "downplay",
		seriesName: e,
		name: t,
		excludeSeriesId: r
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/legendFilter.js
function wP(e) {
	var t = e.findComponents({ mainType: "legend" });
	t && t.length && e.filterSeries(function(e) {
		for (var n = 0; n < t.length; n++) if (!t[n].isSelected(e.name)) return !1;
		return !0;
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/legendAction.js
function TP(e, t, n) {
	var r = e === "allSelect" || e === "inverseSelect", i = {}, a = [];
	n.eachComponent({
		mainType: "legend",
		query: t
	}, function(n) {
		r ? n[e]() : n[e](t.name), EP(n, i), a.push(n.componentIndex);
	});
	var o = {};
	return n.eachComponent("legend", function(e) {
		I(i, function(t, n) {
			e[t ? "select" : "unSelect"](n);
		}), EP(e, o);
	}), r ? {
		selected: o,
		legendIndex: a
	} : {
		name: t.name,
		selected: o
	};
}
function EP(e, t) {
	var n = t || {};
	return I(e.getData(), function(t) {
		var r = t.get("name");
		if (r !== "\n" && r !== "") {
			var i = e.isSelected(r);
			n[r] = J(n, r) ? n[r] && i : i;
		}
	}), n;
}
function DP(e) {
	e.registerAction("legendToggleSelect", "legendselectchanged", ce(TP, "toggleSelected")), e.registerAction("legendAllSelect", "legendselectall", ce(TP, "allSelect")), e.registerAction("legendInverseSelect", "legendinverseselect", ce(TP, "inverseSelect")), e.registerAction("legendSelect", "legendselected", ce(TP, "select")), e.registerAction("legendUnSelect", "legendunselected", ce(TP, "unSelect"));
}
//#endregion
//#region node_modules/echarts/lib/component/legend/installLegendPlain.js
function OP(e) {
	e.registerComponentModel(pP), e.registerComponentView(_P), e.registerProcessor(e.PRIORITY.PROCESSOR.SERIES_FILTER, wP), e.registerSubTypeDefaulter("legend", function() {
		return "plain";
	}), DP(e);
}
//#endregion
//#region node_modules/echarts/lib/component/legend/ScrollableLegendModel.js
var kP = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.setScrollDataIndex = function(e) {
		this.option.scrollDataIndex = e;
	}, t.prototype.init = function(t, n, r) {
		var i = bh(t);
		e.prototype.init.call(this, t, n, r), AP(this, t, i);
	}, t.prototype.mergeOption = function(t, n) {
		e.prototype.mergeOption.call(this, t, n), AP(this, this.option, t);
	}, t.type = "legend.scroll", t.defaultOption = Jp(pP.defaultOption, {
		scrollDataIndex: 0,
		pageButtonItemGap: 5,
		pageButtonGap: null,
		pageButtonPosition: "end",
		pageFormatter: "{current}/{total}",
		pageIcons: {
			horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
			vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
		},
		pageIconColor: "#2f4554",
		pageIconInactiveColor: "#aaa",
		pageIconSize: 15,
		pageTextStyle: { color: "#333" },
		animationDurationUpdate: 800
	}), t;
}(pP);
function AP(e, t, n) {
	var r = e.getOrient(), i = [1, 1];
	i[r.index] = 0, yh(t, n, {
		type: "box",
		ignoreSize: !!i
	});
}
//#endregion
//#region node_modules/echarts/lib/component/legend/ScrollableLegendView.js
var jP = Dl, MP = ["width", "height"], NP = ["x", "y"], PP = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n.newlineDisabled = !0, n._currentIndex = 0, n;
	}
	return t.prototype.init = function() {
		e.prototype.init.call(this), this.group.add(this._containerGroup = new jP()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new jP());
	}, t.prototype.resetInner = function() {
		e.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
	}, t.prototype.renderInner = function(t, n, r, i, a, o, s) {
		var c = this;
		e.prototype.renderInner.call(this, t, n, r, i, a, o, s);
		var l = this._controllerGroup, u = n.get("pageIconSize", !0), d = H(u) ? u : [u, u];
		p("pagePrev", 0);
		var f = n.getModel("pageTextStyle");
		l.add(new Do({
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
			var r = e + "DataIndex", a = id(n.get("pageIcons", !0)[n.getOrient().name][t], { onclick: V(c._pageGo, c, r, n, i) }, {
				x: -d[0] / 2,
				y: -d[1] / 2,
				width: d[0],
				height: d[1]
			});
			a.name = e, l.add(a);
		}
	}, t.prototype.layoutInner = function(e, t, n, r, i, a) {
		var o = this.getSelectorGroup(), s = e.getOrient().index, c = MP[s], l = NP[s], u = MP[1 - s], d = NP[1 - s];
		i && hh("horizontal", o, e.get("selectorItemGap", !0));
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
		hh(e.get("orient"), c, e.get("itemGap"), r ? n.width : null, r ? null : n.height), hh("horizontal", u, e.get("pageButtonItemGap", !0));
		var d = c.getBoundingRect(), f = u.getBoundingRect(), p = this._showController = d[i] > n[i], m = [-d.x, -d.y];
		t || (m[r] = c[s]);
		var h = [0, 0], g = [-f.x, -f.y], _ = K(e.get("pageButtonGap", !0), e.get("itemGap", !0));
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
			y[i] = Math.max(n[i] - f[i] - _, 0), y[a] = v[a], l.setClipPath(new Co({ shape: y })), l.__rectSize = y[i];
		} else u.eachChild(function(e) {
			e.attr({
				invisible: !0,
				silent: !0
			});
		});
		var b = this._getPageInfo(e);
		return b.pageIndex != null && Eu(c, {
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
		r && i && r.setStyle("text", W(i) ? i.replace("{current}", o == null ? "" : o + "").replace("{total}", s == null ? "" : s + "") : i({
			current: o,
			total: s
		}));
	}, t.prototype._getPageInfo = function(e) {
		var t = e.get("scrollDataIndex", !0), n = this.getContentGroup(), r = this._containerGroup.__rectSize, i = e.getOrient().index, a = MP[i], o = NP[i], s = this._findTargetItemIndex(t), c = n.children(), l = c[s], u = c.length, d = +!!u, f = {
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
}(_P);
//#endregion
//#region node_modules/echarts/lib/component/legend/scrollableLegendAction.js
function FP(e) {
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
function IP(e) {
	HT(OP), e.registerComponentModel(kP), e.registerComponentView(PP), FP(e);
}
//#endregion
//#region node_modules/echarts/lib/component/legend/install.js
function LP(e) {
	HT(OP), HT(IP);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/InsideZoomModel.js
var RP = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "dataZoom.inside", t.defaultOption = Jp(mN.defaultOption, {
		disabled: !1,
		zoomLock: !1,
		zoomOnMouseWheel: !0,
		moveOnMouseMove: !0,
		moveOnMouseWheel: !1,
		preventDefaultMouseMove: !0
	}), t;
}(mN), zP = Bs();
function BP(e, t, n) {
	zP(e).coordSysRecordMap.each(function(e) {
		var r = e.dataZoomInfoMap.get(t.uid);
		r && (r.getRange = n);
	});
}
function VP(e, t) {
	for (var n = zP(e).coordSysRecordMap, r = n.keys(), i = 0; i < r.length; i++) {
		var a = r[i], o = n.get(a), s = o.dataZoomInfoMap;
		if (s) {
			var c = t.uid;
			s.get(c) && (s.removeKey(c), s.keys().length || HP(n, o));
		}
	}
}
function HP(e, t) {
	if (t) {
		e.removeKey(t.model.uid);
		var n = t.controller;
		n && n.dispose();
	}
}
function UP(e, t) {
	var n = {
		model: t,
		containsPoint: ce(GP, t),
		dispatchAction: ce(WP, e),
		dataZoomInfoMap: null,
		controller: null
	}, r = n.controller = new xO(e.getZr());
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
function WP(e, t) {
	e.isDisposed() || e.dispatchAction({
		type: "dataZoom",
		animation: {
			easing: "cubicOut",
			duration: 100
		},
		batch: t
	});
}
function GP(e, t, n, r) {
	return e.coordinateSystem.containPoint([n, r]);
}
function KP(e) {
	var t, n = "type_", r = {
		type_true: 2,
		type_move: 1,
		type_false: 0,
		type_undefined: -1
	}, i = !0;
	return e.each(function(e) {
		var a = e.model, o = a.get("disabled", !0) ? !1 : !a.get("zoomLock", !0) || "move";
		r[n + o] > r[n + t] && (t = o), i &&= a.get("preventDefaultMouseMove", !0);
	}), {
		controlType: t,
		opt: {
			zoomOnMouseWheel: !0,
			moveOnMouseMove: !0,
			moveOnMouseWheel: !0,
			preventDefaultMouseMove: !!i
		}
	};
}
function qP(e) {
	e.registerProcessor(e.PRIORITY.PROCESSOR.FILTER, function(e, t) {
		var n = zP(t), r = n.coordSysRecordMap ||= q();
		r.each(function(e) {
			e.dataZoomInfoMap = null;
		}), e.eachComponent({
			mainType: "dataZoom",
			subType: "inside"
		}, function(e) {
			I(fN(e).infoList, function(n) {
				var i = n.model.uid, a = r.get(i) || r.set(i, UP(t, n.model));
				(a.dataZoomInfoMap ||= q()).set(e.uid, {
					dzReferCoordSysInfo: n,
					model: e,
					getRange: null
				});
			});
		}), r.each(function(e) {
			var t = e.controller, n, i = e.dataZoomInfoMap;
			if (i) {
				var a = i.keys()[0];
				a != null && (n = i.get(a));
			}
			if (!n) HP(r, e);
			else {
				var o = KP(i);
				t.enable(o.controlType, o.opt), t.setPointerChecker(e.containsPoint), fv(e, "dispatchAction", n.model.get("throttle", !0), "fixRate");
			}
		});
	});
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/InsideZoomView.js
var JP = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "dataZoom.inside", t;
	}
	return t.prototype.render = function(t, n, r) {
		e.prototype.render.apply(this, arguments), t.noTarget() ? this._clear() : (this.range = t.getPercentRange(), BP(r, t, {
			pan: V(YP.pan, this),
			zoom: V(YP.zoom, this),
			scrollMove: V(YP.scrollMove, this)
		}));
	}, t.prototype.dispose = function() {
		this._clear(), e.prototype.dispose.apply(this, arguments);
	}, t.prototype._clear = function() {
		VP(this.api, this.dataZoomModel), this.range = null;
	}, t.type = "dataZoom.inside", t;
}(gN), YP = {
	zoom: function(e, t, n, r) {
		var i = this.range, a = i.slice(), o = e.axisModels[0];
		if (o) {
			var s = ZP[t](null, [r.originX, r.originY], o, n, e), c = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (a[1] - a[0]) + a[0], l = Math.max(1 / r.scale, 0);
			a[0] = (a[0] - c) * l + c, a[1] = (a[1] - c) * l + c;
			var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
			if (LA(0, a, [0, 100], 0, u.minSpan, u.maxSpan), this.range = a, i[0] !== a[0] || i[1] !== a[1]) return a;
		}
	},
	pan: XP(function(e, t, n, r, i, a) {
		var o = ZP[r]([a.oldX, a.oldY], [a.newX, a.newY], t, i, n);
		return o.signal * (e[1] - e[0]) * o.pixel / o.pixelLength;
	}),
	scrollMove: XP(function(e, t, n, r, i, a) {
		return ZP[r]([0, 0], [a.scrollDelta, a.scrollDelta], t, i, n).signal * (e[1] - e[0]) * a.scrollDelta;
	})
};
function XP(e) {
	return function(t, n, r, i) {
		var a = this.range, o = a.slice(), s = t.axisModels[0];
		if (s && (LA(e(o, s, t, n, r, i), o, [0, 100], "all"), this.range = o, a[0] !== o[0] || a[1] !== o[1])) return o;
	};
}
var ZP = {
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
function QP(e) {
	wN(e), e.registerComponentModel(RP), e.registerComponentView(JP), qP(e);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/SliderZoomModel.js
var $P = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.type = "dataZoom.slider", t.layoutMode = "box", t.defaultOption = Jp(mN.defaultOption, {
		show: !0,
		right: "ph",
		top: "ph",
		width: "ph",
		height: "ph",
		left: null,
		bottom: null,
		borderColor: "#d2dbee",
		borderRadius: 3,
		backgroundColor: "rgba(47,69,84,0)",
		dataBackground: {
			lineStyle: {
				color: "#d2dbee",
				width: .5
			},
			areaStyle: {
				color: "#d2dbee",
				opacity: .2
			}
		},
		selectedDataBackground: {
			lineStyle: {
				color: "#8fb0f7",
				width: .5
			},
			areaStyle: {
				color: "#8fb0f7",
				opacity: .2
			}
		},
		fillerColor: "rgba(135,175,274,0.2)",
		handleIcon: "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
		handleSize: "100%",
		handleStyle: {
			color: "#fff",
			borderColor: "#ACB8D1"
		},
		moveHandleSize: 7,
		moveHandleIcon: "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",
		moveHandleStyle: {
			color: "#D2DBEE",
			opacity: .7
		},
		showDetail: !0,
		showDataShadow: "auto",
		realtime: !0,
		zoomLock: !1,
		textStyle: { color: "#6E7079" },
		brushSelect: !0,
		brushStyle: { color: "rgba(135,175,274,0.15)" },
		emphasis: {
			handleLabel: { show: !0 },
			handleStyle: { borderColor: "#8FB0F7" },
			moveHandleStyle: { color: "#8FB0F7" }
		}
	}), t;
}(mN), eF = Co, tF = 7, nF = 1, rF = 30, iF = 7, aF = "horizontal", oF = "vertical", sF = 5, cF = [
	"line",
	"bar",
	"candlestick",
	"scatter"
], lF = {
	easing: "cubicOut",
	duration: 100,
	delay: 0
}, uF = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._displayables = {}, n;
	}
	return t.prototype.init = function(e, t) {
		this.api = t, this._onBrush = V(this._onBrush, this), this._onBrushEnd = V(this._onBrushEnd, this);
	}, t.prototype.render = function(t, n, r, i) {
		e.prototype.render.apply(this, arguments), fv(this, "_dispatchZoomAction", t.get("throttle"), "fixRate"), this._orient = t.getOrient(), t.get("show") === !1 ? this.group.removeAll() : t.noTarget() ? (this._clear(), this.group.removeAll()) : ((!i || i.type !== "dataZoom" || i.from !== this.uid) && this._buildView(), this._updateView());
	}, t.prototype.dispose = function() {
		this._clear(), e.prototype.dispose.apply(this, arguments);
	}, t.prototype._clear = function() {
		pv(this, "_dispatchZoomAction");
		var e = this.api.getZr();
		e.off("mousemove", this._onBrush), e.off("mouseup", this._onBrushEnd);
	}, t.prototype._buildView = function() {
		var e = this.group;
		e.removeAll(), this._brushing = !1, this._displayables.brushRect = null, this._resetLocation(), this._resetInterval();
		var t = this._displayables.sliderGroup = new Dl();
		this._renderBackground(), this._renderHandle(), this._renderDataShadow(), e.add(t), this._positionGroup();
	}, t.prototype._resetLocation = function() {
		var e = this.dataZoomModel, t = this.api, n = e.get("brushSelect") ? iF : 0, r = this._findCoordRect(), i = {
			width: t.getWidth(),
			height: t.getHeight()
		}, a = this._orient === aF ? {
			right: i.width - r.x - r.width,
			top: i.height - rF - tF - n,
			width: r.width,
			height: rF
		} : {
			right: tF,
			top: r.y,
			width: rF,
			height: r.height
		}, o = bh(e.option);
		I([
			"right",
			"top",
			"width",
			"height"
		], function(e) {
			o[e] === "ph" && (o[e] = a[e]);
		});
		var s = gh(o, i);
		this._location = {
			x: s.x,
			y: s.y
		}, this._size = [s.width, s.height], this._orient === oF && this._size.reverse();
	}, t.prototype._positionGroup = function() {
		var e = this.group, t = this._location, n = this._orient, r = this.dataZoomModel.getFirstTargetAxisModel(), i = r && r.get("inverse"), a = this._displayables.sliderGroup, o = (this._dataShadowInfo || {}).otherAxisInverse;
		a.attr(n === aF && !i ? {
			scaleY: o ? 1 : -1,
			scaleX: 1
		} : n === aF && i ? {
			scaleY: o ? 1 : -1,
			scaleX: -1
		} : n === oF && !i ? {
			scaleY: o ? -1 : 1,
			scaleX: 1,
			rotation: Math.PI / 2
		} : {
			scaleY: o ? -1 : 1,
			scaleX: -1,
			rotation: Math.PI / 2
		});
		var s = e.getBoundingRect([a]);
		e.x = t.x - s.x, e.y = t.y - s.y, e.markRedraw();
	}, t.prototype._getViewExtent = function() {
		return [0, this._size[0]];
	}, t.prototype._renderBackground = function() {
		var e = this.dataZoomModel, t = this._size, n = this._displayables.sliderGroup, r = e.get("brushSelect");
		n.add(new eF({
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
		var i = new eF({
			shape: {
				x: 0,
				y: 0,
				width: t[0],
				height: t[1]
			},
			style: { fill: "transparent" },
			z2: 0,
			onclick: V(this._onClickPanel, this)
		}), a = this.api.getZr();
		r ? (i.on("mousedown", this._onBrushStart, this), i.cursor = "crosshair", a.on("mousemove", this._onBrush), a.on("mouseup", this._onBrushEnd)) : (a.off("mousemove", this._onBrush), a.off("mouseup", this._onBrushEnd)), n.add(i);
	}, t.prototype._renderDataShadow = function() {
		var e = this._dataShadowInfo = this._prepareDataShadowInfo();
		if (this._displayables.dataShadowSegs = [], !e) return;
		var t = this._size, n = this._shadowSize || [], r = e.series, i = r.getRawData(), a = r.getShadowDim && r.getShadowDim(), o = a && i.getDimensionInfo(a) ? r.getShadowDim() : e.otherDim;
		if (o == null) return;
		var s = this._shadowPolygonPts, c = this._shadowPolylinePts;
		if (i !== this._shadowData || o !== this._shadowDim || t[0] !== n[0] || t[1] !== n[1]) {
			var l = i.getDataExtent(o), u = (l[1] - l[0]) * .3;
			l = [l[0] - u, l[1] + u];
			var d = [0, t[1]], f = [0, t[0]], p = [[t[0], 0], [0, 0]], m = [], h = f[1] / (i.count() - 1), g = 0, _ = Math.round(i.count() / t[0]), v;
			i.each([o], function(e, t) {
				if (_ > 0 && t % _) g += h;
				else {
					var n = e == null || isNaN(e) || e === "", r = n ? 0 : Wo(e, l, d, !0);
					n && !v && t ? (p.push([p[p.length - 1][0], 0]), m.push([m[m.length - 1][0], 0])) : !n && v && (p.push([g, 0]), m.push([g, 0])), p.push([g, r]), m.push([g, r]), g += h, v = n;
				}
			}), s = this._shadowPolygonPts = p, c = this._shadowPolylinePts = m;
		}
		this._shadowData = i, this._shadowDim = o, this._shadowSize = [t[0], t[1]];
		var y = this.dataZoomModel;
		function b(e) {
			var t = y.getModel(e ? "selectedDataBackground" : "dataBackground"), n = new Dl(), r = new eu({
				shape: { points: s },
				segmentIgnoreThreshold: 1,
				style: t.getModel("areaStyle").getAreaStyle(),
				silent: !0,
				z2: -20
			}), i = new nu({
				shape: { points: c },
				segmentIgnoreThreshold: 1,
				style: t.getModel("lineStyle").getLineStyle(),
				silent: !0,
				z2: -19
			});
			return n.add(r), n.add(i), n;
		}
		for (var x = 0; x < 3; x++) {
			var S = b(x === 1);
			this._displayables.sliderGroup.add(S), this._displayables.dataShadowSegs.push(S);
		}
	}, t.prototype._prepareDataShadowInfo = function() {
		var e = this.dataZoomModel, t = e.get("showDataShadow");
		if (t !== !1) {
			var n, r = this.ecModel;
			return e.eachTargetAxis(function(i, a) {
				I(e.getAxisProxy(i, a).getTargetSeriesModels(), function(e) {
					if (!n && !(t !== !0 && F(cF, e.get("type")) < 0)) {
						var o = r.getComponent(uN(i), a).axis, s = dF(i), c, l = e.coordinateSystem;
						s != null && l.getOtherAxis && (c = l.getOtherAxis(o).inverse), s = e.getData().mapDimension(s), n = {
							thisAxis: o,
							series: e,
							thisDim: i,
							otherDim: s,
							otherAxisInverse: c
						};
					}
				}, this);
			}, this), n;
		}
	}, t.prototype._renderHandle = function() {
		var e = this.group, t = this._displayables, n = t.handles = [null, null], r = t.handleLabels = [null, null], i = this._displayables.sliderGroup, a = this._size, o = this.dataZoomModel, s = this.api, c = o.get("borderRadius") || 0, l = o.get("brushSelect"), u = t.filler = new eF({
			silent: l,
			style: { fill: o.get("fillerColor") },
			textConfig: { position: "inside" }
		});
		i.add(u), i.add(new eF({
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
				lineWidth: nF,
				fill: "rgba(0,0,0,0)"
			}
		})), I([0, 1], function(t) {
			var a = o.get("handleIcon");
			!Ng[a] && a.indexOf("path://") < 0 && a.indexOf("image://") < 0 && (a = "path://" + a);
			var s = Ig(a, -1, 0, 2, 2, null, !0);
			s.attr({
				cursor: fF(this._orient),
				draggable: !0,
				drift: V(this._onDragMove, this, t),
				ondragend: V(this._onDragEnd, this),
				onmouseover: V(this._showDataInfo, this, !0),
				onmouseout: V(this._showDataInfo, this, !1),
				z2: 5
			});
			var c = s.getBoundingRect(), l = o.get("handleSize");
			this._handleHeight = Go(l, this._size[1]), this._handleWidth = c.width / c.height * this._handleHeight, s.setStyle(o.getModel("handleStyle").getItemStyle()), s.style.strokeNoScale = !0, s.rectHover = !0, s.ensureState("emphasis").style = o.getModel(["emphasis", "handleStyle"]).getItemStyle(), Gc(s);
			var u = o.get("handleColor");
			u != null && (s.style.fill = u), i.add(n[t] = s);
			var d = o.getModel("textStyle"), f = (o.get("handleLabel") || {}).show || !1;
			e.add(r[t] = new Do({
				silent: !0,
				invisible: !f,
				style: _d(d, {
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
			var f = Go(o.get("moveHandleSize"), a[1]), p = t.moveHandle = new Co({
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
			}), m = f * .8, h = t.moveHandleIcon = Ig(o.get("moveHandleIcon"), -m / 2, -m / 2, m, m, "#fff", !0);
			h.silent = !0, h.y = a[1] + f / 2 - .5, p.ensureState("emphasis").style = o.getModel(["emphasis", "moveHandleStyle"]).getItemStyle();
			var g = Math.min(a[1] / 2, Math.max(f, 10));
			d = t.moveZone = new Co({
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
			cursor: fF(this._orient),
			drift: V(this._onDragMove, this, "all"),
			ondragstart: V(this._showDataInfo, this, !0),
			ondragend: V(this._onDragEnd, this),
			onmouseover: V(this._showDataInfo, this, !0),
			onmouseout: V(this._showDataInfo, this, !1)
		});
	}, t.prototype._resetInterval = function() {
		var e = this._range = this.dataZoomModel.getPercentRange(), t = this._getViewExtent();
		this._handleEnds = [Wo(e[0], [0, 100], t, !0), Wo(e[1], [0, 100], t, !0)];
	}, t.prototype._updateInterval = function(e, t) {
		var n = this.dataZoomModel, r = this._handleEnds, i = this._getViewExtent(), a = n.findRepresentativeAxisProxy().getMinMaxSpan(), o = [0, 100];
		LA(t, r, i, n.get("zoomLock") ? "all" : e, a.minSpan == null ? null : Wo(a.minSpan, o, i, !0), a.maxSpan == null ? null : Wo(a.maxSpan, o, i, !0));
		var s = this._range, c = this._range = qo([Wo(r[0], i, o, !0), Wo(r[1], i, o, !0)]);
		return !s || s[0] !== c[0] || s[1] !== c[1];
	}, t.prototype._updateView = function(e) {
		var t = this._displayables, n = this._handleEnds, r = qo(n.slice()), i = this._size;
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
			u || (u = new Co(), l.setClipPath(u)), u.setShape({
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
			var o = t.findRepresentativeAxisProxy();
			if (o) {
				var s = o.getAxisModel().axis, c = this._range, l = e ? o.calculateDataWindow({
					start: c[0],
					end: c[1]
				}).valueWindow : o.getDataValueWindow();
				a = [this._formatLabel(l[0], s), this._formatLabel(l[1], s)];
			}
		}
		var u = qo(this._handleEnds.slice());
		d.call(this, 0), d.call(this, 1);
		function d(e) {
			var t = Xu(n.handles[e].parent, this.group), o = Qu(e === 0 ? "right" : "left", t), s = this._handleWidth / 2 + sF, c = Zu([u[e] + (e === 0 ? -s : s), this._size[1] / 2], t);
			r[e].setStyle({
				x: c[0],
				y: c[1],
				verticalAlign: i === aF ? "middle" : o,
				align: i === aF ? o : "center",
				text: a[e]
			});
		}
	}, t.prototype._formatLabel = function(e, t) {
		var n = this.dataZoomModel, r = n.get("labelFormatter"), i = n.get("labelPrecision");
		(i == null || i === "auto") && (i = t.getPixelPrecision());
		var a = e == null || isNaN(e) ? "" : t.type === "category" || t.type === "time" ? t.scale.getLabel({ value: Math.round(e) }) : e.toFixed(Math.min(i, 20));
		return U(r) ? r(e, a) : W(r) ? r.replace("{value}", a) : a;
	}, t.prototype._showDataInfo = function(e) {
		var t = (this.dataZoomModel.get("handleLabel") || {}).show || !1, n = this.dataZoomModel.getModel(["emphasis", "handleLabel"]).get("show") || !1, r = e || this._dragging ? n : t, i = this._displayables, a = i.handleLabels;
		a[0].attr("invisible", !r), a[1].attr("invisible", !r), i.moveHandle && this.api[r ? "enterEmphasis" : "leaveEmphasis"](i.moveHandle, 1);
	}, t.prototype._onDragMove = function(e, t, n, r) {
		this._dragging = !0, rb(r.event);
		var i = this._displayables.sliderGroup.getLocalTransform(), a = Zu([t, n], i, !0), o = this._updateInterval(e, a[0]), s = this.dataZoomModel.get("realtime");
		this._updateView(!s), o && s && this._dispatchZoomAction(!0);
	}, t.prototype._onDragEnd = function() {
		this._dragging = !1, this._showDataInfo(!1), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction(!1);
	}, t.prototype._onClickPanel = function(e) {
		var t = this._size, n = this._displayables.sliderGroup.transformCoordToLocal(e.offsetX, e.offsetY);
		if (!(n[0] < 0 || n[0] > t[0] || n[1] < 0 || n[1] > t[1])) {
			var r = this._handleEnds, i = (r[0] + r[1]) / 2, a = this._updateInterval("all", n[0] - i);
			this._updateView(), a && this._dispatchZoomAction(!1);
		}
	}, t.prototype._onBrushStart = function(e) {
		var t = e.offsetX, n = e.offsetY;
		this._brushStart = new X(t, n), this._brushing = !0, this._brushStartTime = +/* @__PURE__ */ new Date();
	}, t.prototype._onBrushEnd = function(e) {
		if (this._brushing) {
			var t = this._displayables.brushRect;
			if (this._brushing = !1, t) {
				t.attr("ignore", !0);
				var n = t.shape;
				if (!(+/* @__PURE__ */ new Date() - this._brushStartTime < 200 && Math.abs(n.width) < 5)) {
					var r = this._getViewExtent(), i = [0, 100];
					this._range = qo([Wo(n.x, r, i, !0), Wo(n.x + n.width, r, i, !0)]), this._handleEnds = [n.x, n.x + n.width], this._updateView(), this._dispatchZoomAction(!1);
				}
			}
		}
	}, t.prototype._onBrush = function(e) {
		this._brushing && (rb(e.event), this._updateBrushRect(e.offsetX, e.offsetY));
	}, t.prototype._updateBrushRect = function(e, t) {
		var n = this._displayables, r = this.dataZoomModel, i = n.brushRect;
		i || (i = n.brushRect = new eF({
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
			animation: e ? lF : null,
			start: t[0],
			end: t[1]
		});
	}, t.prototype._findCoordRect = function() {
		var e, t = fN(this.dataZoomModel).infoList;
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
}(gN);
function dF(e) {
	return {
		x: "y",
		y: "x",
		radius: "angle",
		angle: "radius"
	}[e];
}
function fF(e) {
	return e === "vertical" ? "ns-resize" : "ew-resize";
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js
function pF(e) {
	e.registerComponentModel($P), e.registerComponentView(uF), wN(e);
}
//#endregion
//#region node_modules/echarts/lib/component/dataZoom/install.js
function mF(e) {
	HT(QP), HT(pF);
}
//#endregion
//#region node_modules/echarts/lib/visual/visualDefault.js
var hF = { get: function(e, t, n) {
	var r = j((gF[e] || {})[t]);
	return n && H(r) ? r[r.length - 1] : r;
} }, gF = {
	color: {
		active: ["#006edd", "#e0ffff"],
		inactive: ["rgba(0,0,0,0)"]
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
}, _F = CA.mapVisual, vF = CA.eachVisual, yF = H, bF = I, xF = qo, SF = Wo, CF = function(e) {
	c(t, e);
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
		!t && sP(n, e, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption();
	}, t.prototype.resetVisual = function(e) {
		var t = this.stateList;
		e = V(e, this), this.controllerVisuals = oP(this.option.controller, t, e), this.targetVisuals = oP(this.option.target, t, e);
	}, t.prototype.getItemSymbol = function() {
		return null;
	}, t.prototype.getTargetSeriesIndices = function() {
		var e = this.option.seriesIndex, t = [];
		return e == null || e === "all" ? this.ecModel.eachSeries(function(e, n) {
			t.push(n);
		}) : t = ys(e), t;
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
		n ||= ["<", ">"], H(e) && (e = e.slice(), s = !0);
		var c = t ? e : s ? [l(e[0]), l(e[1])] : l(e);
		return W(o) ? o.replace("{value}", s ? c[0] : c).replace("{value2}", s ? c[1] : c) : U(o) ? s ? o(e[0], e[1]) : o(e) : s ? e[0] === a[0] ? n[0] + " " + c[1] : e[1] === a[1] ? n[1] + " " + c[0] : c[0] + " - " + c[1] : c;
		function l(e) {
			return e === a[0] ? "min" : e === a[1] ? "max" : (+e).toFixed(Math.min(i, 20));
		}
	}, t.prototype.resetExtent = function() {
		var e = this.option, t = xF([e.min, e.max]);
		this._dataExtent = t;
	}, t.prototype.getDataDimensionIndex = function(e) {
		var t = this.option.dimension;
		if (t != null) return e.getDimensionIndex(t);
		for (var n = e.dimensions, r = n.length - 1; r >= 0; r--) {
			var i = n[r], a = e.getDimensionInfo(i);
			if (!a.isCalculationCoord) return a.storeDimIndex;
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
			yF(t.color) && !n.inRange && (n.inRange = { color: t.color.slice().reverse() }), n.inRange = n.inRange || { color: e.get("gradientColor") };
		}
		function s(e, t, n) {
			var r = e[t], i = e[n];
			r && !i && (i = e[n] = {}, bF(r, function(e, t) {
				if (CA.isValidType(t)) {
					var n = hF.get(t, "inactive", a);
					n != null && (i[t] = n, t === "color" && !i.hasOwnProperty("opacity") && !i.hasOwnProperty("colorAlpha") && (i.opacity = [0, 0]));
				}
			}));
		}
		function c(e) {
			var t = (e.inRange || {}).symbol || (e.outOfRange || {}).symbol, n = (e.inRange || {}).symbolSize || (e.outOfRange || {}).symbolSize, r = this.get("inactiveColor"), i = this.getItemSymbol() || "roundRect";
			bF(this.stateList, function(o) {
				var s = this.itemSize, c = e[o];
				c ||= e[o] = { color: a ? r : [r] }, c.symbol ?? (c.symbol = t && j(t) || (a ? i : [i])), c.symbolSize ?? (c.symbolSize = n && j(n) || (a ? s[0] : [s[0], s[0]])), c.symbol = _F(c.symbol, function(e) {
					return e === "none" ? i : e;
				});
				var l = c.symbolSize;
				if (l != null) {
					var u = -Infinity;
					vF(l, function(e) {
						e > u && (u = e);
					}), c.symbolSize = _F(l, function(e) {
						return SF(e, [0, u], [0, s[0]], !0);
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
		seriesIndex: "all",
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
		backgroundColor: "rgba(0,0,0,0)",
		borderColor: "#ccc",
		contentColor: "#5793f3",
		inactiveColor: "#aaa",
		borderWidth: 0,
		padding: 5,
		textGap: 10,
		precision: 0,
		textStyle: { color: "#333" }
	}, t;
}($), wF = [20, 140], TF = function(e) {
	c(t, e);
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
		(t[0] == null || isNaN(t[0])) && (t[0] = wF[0]), (t[1] == null || isNaN(t[1])) && (t[1] = wF[1]);
	}, t.prototype._resetRange = function() {
		var e = this.getExtent(), t = this.option.range;
		!t || t.auto ? (e.auto = 1, this.option.range = e) : H(t) && (t[0] > t[1] && t.reverse(), t[0] = Math.max(t[0], e[0]), t[1] = Math.min(t[1], e[1]));
	}, t.prototype.completeVisualOption = function() {
		e.prototype.completeVisualOption.apply(this, arguments), I(this.stateList, function(e) {
			var t = this.option.controller[e].symbolSize;
			t && t[0] !== t[1] && (t[0] = t[1] / 3);
		}, this);
	}, t.prototype.setSelected = function(e) {
		this.option.range = e.slice(), this._resetRange();
	}, t.prototype.getSelected = function() {
		var e = this.getExtent(), t = qo((this.get("range") || []).slice());
		return t[0] > e[1] && (t[0] = e[1]), t[1] > e[1] && (t[1] = e[1]), t[0] < e[0] && (t[0] = e[0]), t[1] < e[0] && (t[1] = e[0]), t;
	}, t.prototype.getValueState = function(e) {
		var t = this.option.range, n = this.getExtent();
		return (t[0] <= n[0] || t[0] <= e) && (t[1] >= n[1] || e <= t[1]) ? "inRange" : "outOfRange";
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
		var t = EF(this, "outOfRange", this.getExtent()), n = EF(this, "inRange", this.option.range.slice()), r = [];
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
	}, t.type = "visualMap.continuous", t.defaultOption = Jp(CF.defaultOption, {
		align: "auto",
		calculable: !1,
		hoverLink: !0,
		realtime: !0,
		handleIcon: "path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",
		handleSize: "120%",
		handleStyle: {
			borderColor: "#fff",
			borderWidth: 1
		},
		indicatorIcon: "circle",
		indicatorSize: "50%",
		indicatorStyle: {
			borderColor: "#fff",
			borderWidth: 2,
			shadowBlur: 2,
			shadowOffsetX: 1,
			shadowOffsetY: 1,
			shadowColor: "rgba(0,0,0,0.2)"
		}
	}), t;
}(CF);
function EF(e, t, n) {
	if (n[0] === n[1]) return n.slice();
	for (var r = 200, i = (n[1] - n[0]) / r, a = n[0], o = [], s = 0; s <= r && a < n[1]; s++) o.push(a), a += i;
	return o.push(n[1]), o;
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/VisualMapView.js
var DF = function(e) {
	c(t, e);
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
		this.visualMapModel = e, e.get("show") === !1 ? this.group.removeAll() : this.doRender(e, t, n, r);
	}, t.prototype.renderBackground = function(e) {
		var t = this.visualMapModel, n = th(t.get("padding") || 0), r = e.getBoundingRect();
		e.add(new Co({
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
		return I(CA.prepareVisualTypes(c), function(r) {
			var i = c[r];
			n.convertOpacityToAlpha && r === "opacity" && (r = "colorAlpha", i = c.__alphaForOpacity), CA.dependsOn(r, t) && i && i.applyVisual(e, o, s);
		}), a[t];
	}, t.prototype.positionGroup = function(e) {
		var t = this.visualMapModel, n = this.api;
		_h(e, t.getBoxLayoutParams(), {
			width: n.getWidth(),
			height: n.getHeight()
		});
	}, t.prototype.doRender = function(e, t, n, r) {}, t.type = "visualMap", t;
}(mS), OF = [[
	"left",
	"right",
	"width"
], [
	"top",
	"bottom",
	"height"
]];
function kF(e, t, n) {
	var r = e.option, i = r.align;
	if (i != null && i !== "auto") return i;
	for (var a = {
		width: t.getWidth(),
		height: t.getHeight()
	}, o = +(r.orient === "horizontal"), s = OF[o], c = [
		0,
		null,
		10
	], l = {}, u = 0; u < 3; u++) l[OF[1 - o][u]] = c[u], l[s[u]] = u === 2 ? n[0] : r[s[u]];
	var d = [[
		"x",
		"width",
		3
	], [
		"y",
		"height",
		0
	]][o], f = gh(l, a, r.padding);
	return s[(f.margin[d[2]] || 0) + f[d[0]] + f[d[1]] * .5 < a[d[1]] * .5 ? 0 : 1];
}
function AF(e, t) {
	return I(e || [], function(e) {
		e.dataIndex != null && (e.dataIndexInside = e.dataIndex, e.dataIndex = null), e.highlightKey = "visualMap" + (t ? t.componentIndex : "");
	}), e;
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/ContinuousView.js
var jF = Wo, MF = I, NF = Math.min, PF = Math.max, FF = 12, IF = 6, LF = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._shapes = {}, n._dataInterval = [], n._handleEnds = [], n._hoverLinkDataIndices = [], n;
	}
	return t.prototype.init = function(t, n) {
		e.prototype.init.call(this, t, n), this._hoverLinkFromSeriesMouseOver = V(this._hoverLinkFromSeriesMouseOver, this), this._hideIndicator = V(this._hideIndicator, this);
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
			this.group.add(new Do({ style: _d(d, {
				x: c[0],
				y: c[1],
				verticalAlign: u === "horizontal" ? "middle" : l,
				align: u === "horizontal" ? l : "center",
				text: r
			}) }));
		}
	}, t.prototype._renderBar = function(e) {
		var t = this.visualMapModel, n = this._shapes, r = t.itemSize, i = this._orient, a = this._useHandle, o = kF(t, this.api, r), s = n.mainGroup = this._createBarGroup(o), c = new Dl();
		s.add(c), c.add(n.outOfRange = RF()), c.add(n.inRange = RF(null, a ? VF(this._orient) : null, V(this._dragHandle, this, "all", !1), V(this._dragHandle, this, "all", !0))), c.setClipPath(new Co({ shape: {
			x: 0,
			y: 0,
			width: r[0],
			height: r[1],
			r: 3
		} }));
		var l = t.textStyleModel.getTextRect("国"), u = PF(l.width, l.height);
		a && (n.handleThumbs = [], n.handleLabels = [], n.handleLabelPoints = [], this._createHandle(t, s, 0, r, u, i), this._createHandle(t, s, 1, r, u, i)), this._createIndicator(t, s, r, u, i), e.add(s);
	}, t.prototype._createHandle = function(e, t, n, r, i, a) {
		var o = V(this._dragHandle, this, n, !1), s = V(this._dragHandle, this, n, !0), c = Pt(e.get("handleSize"), r[0]), l = Ig(e.get("handleIcon"), -c / 2, -c / 2, c, c, null, !0), u = VF(this._orient);
		l.attr({
			cursor: u,
			draggable: !0,
			drift: o,
			ondragend: s,
			onmousemove: function(e) {
				rb(e.event);
			}
		}), l.x = r[0] / 2, l.useStyle(e.getModel("handleStyle").getItemStyle()), l.setStyle({
			strokeNoScale: !0,
			strokeFirst: !0
		}), l.style.lineWidth *= 2, l.ensureState("emphasis").style = e.getModel(["emphasis", "handleStyle"]).getItemStyle(), Qc(l, !0), t.add(l);
		var d = this.visualMapModel.textStyleModel, f = new Do({
			cursor: u,
			draggable: !0,
			drift: o,
			onmousemove: function(e) {
				rb(e.event);
			},
			ondragend: s,
			style: _d(d, {
				x: 0,
				y: 0,
				text: ""
			})
		});
		f.ensureState("blur").style = { opacity: .1 }, f.stateTransition = { duration: 200 }, this.group.add(f);
		var p = [c, 0], m = this._shapes;
		m.handleThumbs[n] = l, m.handleLabelPoints[n] = p, m.handleLabels[n] = f;
	}, t.prototype._createIndicator = function(e, t, n, r, i) {
		var a = Pt(e.get("indicatorSize"), n[0]), o = Ig(e.get("indicatorIcon"), -a / 2, -a / 2, a, a, null, !0);
		o.attr({
			cursor: "move",
			invisible: !0,
			silent: !0,
			x: n[0] / 2
		});
		var s = e.getModel("indicatorStyle").getItemStyle();
		if (o instanceof ho) {
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
		var l = this.visualMapModel.textStyleModel, u = new Do({
			silent: !0,
			invisible: !0,
			style: _d(l, {
				x: 0,
				y: 0,
				text: ""
			})
		});
		this.group.add(u);
		var d = [(i === "horizontal" ? r / 2 : IF) + n[0] / 2, 0], f = this._shapes;
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
			}), t ? !this._hovering && this._clearHoverLinkToSeries() : BF(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[e], !1);
		}
	}, t.prototype._resetInterval = function() {
		var e = this.visualMapModel, t = this._dataInterval = e.getSelected(), n = e.getExtent(), r = [0, e.itemSize[1]];
		this._handleEnds = [jF(t[0], n, r, !0), jF(t[1], n, r, !0)];
	}, t.prototype._updateInterval = function(e, t) {
		t ||= 0;
		var n = this.visualMapModel, r = this._handleEnds, i = [0, n.itemSize[1]];
		LA(t, r, i, e, 0);
		var a = n.getExtent();
		this._dataInterval = [jF(r[0], i, a, !0), jF(r[1], i, a, !0)];
	}, t.prototype._updateView = function(e) {
		var t = this.visualMapModel, n = t.getExtent(), r = this._shapes, i = [0, t.itemSize[1]], a = e ? i : this._handleEnds, o = this._createBarVisual(this._dataInterval, n, a, "inRange"), s = this._createBarVisual(n, n, i, "outOfRange");
		r.inRange.setStyle({ fill: o.barColor }).setShape("points", o.barPoints), r.outOfRange.setStyle({ fill: s.barColor }).setShape("points", s.barPoints), this._updateHandle(a, o);
	}, t.prototype._createBarVisual = function(e, t, n, r) {
		var i = {
			forceState: r,
			convertOpacityToAlpha: !0
		}, a = this._makeColorGradient(e, i), o = [this.getControllerVisual(e[0], "symbolSize", i), this.getControllerVisual(e[1], "symbolSize", i)], s = this._createBarPoints(n, o);
		return {
			barColor: new mu(0, 0, 0, 1, a),
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
		return new Dl(t === "horizontal" && !n ? {
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
			MF([0, 1], function(l) {
				var u = i[l];
				u.setStyle("fill", t.handlesColor[l]), u.y = e[l];
				var d = jF(e[l], [0, o[1]], s, !0), f = this.getControllerVisual(d, "symbolSize");
				u.scaleX = u.scaleY = f / o[0], u.x = o[0] - f / 2;
				var p = Zu(n.handleLabelPoints[l], Xu(u, this.group));
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
			var u = this.getControllerVisual(e, "color", { convertOpacityToAlpha: !0 }), d = this.getControllerVisual(e, "symbolSize"), f = jF(e, a, s, !0), p = o[0] - d / 2, m = {
				x: l.x,
				y: l.y
			};
			l.y = f, l.x = p;
			var h = Zu(c.indicatorLabelPoint, Xu(l, this.group)), g = c.indicatorLabel;
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
				r[1] = NF(PF(0, r[1]), n[1]), e._doHoverLinkToSeries(r[1], 0 <= r[0] && r[0] <= n[0]);
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
			e = NF(PF(i[0], e), i[1]);
			var o = zF(n, a, i), s = [e - o, e + o], c = jF(e, i, a, !0), l = [jF(s[0], i, a, !0), jF(s[1], i, a, !0)];
			s[0] < i[0] && (l[0] = -Infinity), s[1] > i[1] && (l[1] = Infinity), t && (l[0] === -Infinity ? this._showIndicator(c, l[1], "< ", o) : l[1] === Infinity ? this._showIndicator(c, l[0], "> ", o) : this._showIndicator(c, c, "≈ ", o));
			var u = this._hoverLinkDataIndices, d = [];
			(t || BF(n)) && (d = this._hoverLinkDataIndices = n.findTargetDataIndices(l));
			var f = Rs(u, d);
			this._dispatchHighDown("downplay", AF(f[0], n)), this._dispatchHighDown("highlight", AF(f[1], n));
		}
	}, t.prototype._hoverLinkFromSeriesMouseOver = function(e) {
		var t;
		if (nC(e.target, function(e) {
			var n = Q(e);
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
		this._dispatchHighDown("downplay", AF(e, this.visualMapModel)), e.length = 0;
	}, t.prototype._clearHoverLinkFromSeries = function() {
		this._hideIndicator();
		var e = this.api.getZr();
		e.off("mouseover", this._hoverLinkFromSeriesMouseOver), e.off("mouseout", this._hideIndicator);
	}, t.prototype._applyTransform = function(e, t, n, r) {
		var i = Xu(t, r ? null : this.group);
		return H(e) ? Zu(e, i, n) : Qu(e, i, n);
	}, t.prototype._dispatchHighDown = function(e, t) {
		t && t.length && this.api.dispatchAction({
			type: e,
			batch: t
		});
	}, t.prototype.dispose = function() {
		this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
	}, t.type = "visualMap.continuous", t;
}(DF);
function RF(e, t, n, r) {
	return new eu({
		shape: { points: e },
		draggable: !!n,
		cursor: t,
		drift: n,
		onmousemove: function(e) {
			rb(e.event);
		},
		ondragend: r
	});
}
function zF(e, t, n) {
	var r = FF / 2, i = e.get("hoverLinkDataSize");
	return i && (r = jF(i, t, n, !0) / 2), r;
}
function BF(e) {
	return !!(e.get("hoverLinkOnHandle") ?? e.get("realtime"));
}
function VF(e) {
	return e === "vertical" ? "ns-resize" : "ew-resize";
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/visualMapAction.js
var HF = {
	type: "selectDataRange",
	event: "dataRangeSelected",
	update: "update"
}, UF = function(e, t) {
	t.eachComponent({
		mainType: "visualMap",
		query: e
	}, function(t) {
		t.setSelected(e.selected);
	});
}, WF = [{
	createOnAllSeries: !0,
	reset: function(e, t) {
		var n = [];
		return t.eachComponent("visualMap", function(t) {
			var r = e.pipelineContext;
			!t.isTargetSeries(e) || r && r.large || n.push(cP(t.stateList, t.targetVisuals, V(t.getValueState, t), t.getDataDimensionIndex(e.getData())));
		}), n;
	}
}, {
	createOnAllSeries: !0,
	reset: function(e, t) {
		var n = e.getData(), r = [];
		t.eachComponent("visualMap", function(t) {
			if (t.isTargetSeries(e)) {
				var i = t.getVisualMeta(V(GF, null, e, t)) || {
					stops: [],
					outerColors: []
				}, a = t.getDataDimensionIndex(n);
				a >= 0 && (i.dimension = a, r.push(i));
			}
		}), e.getData().setVisual("visualMeta", r);
	}
}];
function GF(e, t, n, r) {
	for (var i = t.targetVisuals[r], a = CA.prepareVisualTypes(i), o = { color: eC(e.getData(), "color") }, s = 0, c = a.length; s < c; s++) {
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
var KF = I;
function qF(e) {
	var t = e && e.visualMap;
	H(t) || (t = t ? [t] : []), KF(t, function(e) {
		if (e) {
			JF(e, "splitList") && !JF(e, "pieces") && (e.pieces = e.splitList, delete e.splitList);
			var t = e.pieces;
			t && H(t) && KF(t, function(e) {
				G(e) && (JF(e, "start") && !JF(e, "min") && (e.min = e.start), JF(e, "end") && !JF(e, "max") && (e.max = e.end));
			});
		}
	});
}
function JF(e, t) {
	return e && e.hasOwnProperty && e.hasOwnProperty(t);
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/installCommon.js
var YF = !1;
function XF(e) {
	YF || (YF = !0, e.registerSubTypeDefaulter("visualMap", function(e) {
		return !e.categories && (!(e.pieces ? e.pieces.length > 0 : e.splitNumber > 0) || e.calculable) ? "continuous" : "piecewise";
	}), e.registerAction(HF, UF), I(WF, function(t) {
		e.registerVisual(e.PRIORITY.VISUAL.COMPONENT, t);
	}), e.registerPreprocessor(qF));
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js
function ZF(e) {
	e.registerComponentModel(TF), e.registerComponentView(LF), XF(e);
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/PiecewiseModel.js
var QF = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n._pieceList = [], n;
	}
	return t.prototype.optionUpdated = function(t, n) {
		e.prototype.optionUpdated.apply(this, arguments), this.resetExtent();
		var r = this._mode = this._determineMode();
		this._pieceList = [], $F[this._mode].call(this, this._pieceList), this._resetSelected(t, n);
		var i = this.option.categories;
		this.resetVisual(function(e, t) {
			r === "categories" ? (e.mappingMethod = "category", e.categories = j(i)) : (e.dataExtent = this.getExtent(), e.mappingMethod = "piecewise", e.pieceList = L(this._pieceList, function(e) {
				return e = j(e), t !== "inRange" && (e.visual = null), e;
			}));
		});
	}, t.prototype.completeVisualOption = function() {
		var t = this.option, n = {}, r = CA.listVisualTypes(), i = this.isCategory();
		I(t.pieces, function(e) {
			I(r, function(t) {
				e.hasOwnProperty(t) && (n[t] = 1);
			});
		}), I(n, function(e, n) {
			var r = !1;
			I(this.stateList, function(e) {
				r = r || a(t, e, n) || a(t.target, e, n);
			}, this), !r && I(this.stateList, function(e) {
				(t[e] || (t[e] = {}))[n] = hF.get(n, e === "inRange" ? "active" : "inactive", i);
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
		var t = CA.findPieceIndex(e, this._pieceList);
		return t == null ? "outOfRange" : this.option.selected[this.getSelectedMapKey(this._pieceList[t])] ? "inRange" : "outOfRange";
	}, t.prototype.findTargetDataIndices = function(e) {
		var t = [], n = this._pieceList;
		return this.eachTargetSeries(function(r) {
			var i = [], a = r.getData();
			a.each(this.getDataDimensionIndex(a), function(t, r) {
				CA.findPieceIndex(t, n) === e && i.push(r);
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
	}, t.type = "visualMap.piecewise", t.defaultOption = Jp(CF.defaultOption, {
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
}(CF), $F = {
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
		}), ls(e), I(e, function(e, t) {
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
		}, this), eI(t, e);
	},
	pieces: function(e) {
		var t = this.option;
		I(t.pieces, function(t, n) {
			G(t) || (t = { value: t });
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
			r.visual = CA.retrieveVisuals(t), e.push(r);
		}, this), eI(t, e), ls(e), I(e, function(e) {
			var t = e.close, n = [["<", "≤"][t[1]], [">", "≥"][t[0]]];
			e.text = e.text || this.formatValueText(e.value == null ? e.interval : e.value, !1, n);
		}, this);
	}
};
function eI(e, t) {
	var n = e.inverse;
	(e.orient === "vertical" ? !n : n) && t.reverse();
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/PiecewiseView.js
var tI = function(e) {
	c(t, e);
	function t() {
		var n = e !== null && e.apply(this, arguments) || this;
		return n.type = t.type, n;
	}
	return t.prototype.doRender = function() {
		var e = this.group;
		e.removeAll();
		var t = this.visualMapModel, n = t.get("textGap"), r = t.textStyleModel, i = r.getFont(), a = r.getTextColor(), o = this._getItemAlign(), s = t.itemSize, c = this._getViewData(), l = c.endsText, u = ve(t.get("showLabel", !0), !l), d = !t.get("selectedMode");
		l && this._renderEndsText(e, l[0], s, u, o), I(c.viewPieceList, function(r) {
			var c = r.piece, l = new Dl();
			l.onclick = V(this._onItemClick, this, c), this._enableHoverLink(l, r.indexInModelPieceList);
			var f = t.getRepresentValue(c);
			if (this._createItemSymbol(l, f, [
				0,
				0,
				s[0],
				s[1]
			], d), u) {
				var p = this.visualMapModel.getValueState(f);
				l.add(new Do({
					style: {
						x: o === "right" ? -n : s[0] + n,
						y: s[1] / 2,
						text: c.text,
						verticalAlign: "middle",
						align: o,
						font: i,
						fill: a,
						opacity: p === "outOfRange" ? .5 : 1
					},
					silent: d
				}));
			}
			e.add(l);
		}, this), l && this._renderEndsText(e, l[1], s, u, o), hh(t.get("orient"), e, t.get("itemGap")), this.renderBackground(e), this.positionGroup(e);
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
				batch: AF(r.findTargetDataIndices(t), r)
			});
		};
	}, t.prototype._getItemAlign = function() {
		var e = this.visualMapModel, t = e.option;
		if (t.orient === "vertical") return kF(e, this.api, e.itemSize);
		var n = t.align;
		return (!n || n === "auto") && (n = "left"), n;
	}, t.prototype._renderEndsText = function(e, t, n, r, i) {
		if (t) {
			var a = new Dl(), o = this.visualMapModel.textStyleModel;
			a.add(new Do({ style: _d(o, {
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
		var i = Ig(this.getControllerVisual(t, "symbol"), n[0], n[1], n[2], n[3], this.getControllerVisual(t, "color"));
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
}(DF);
//#endregion
//#region node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js
function nI(e) {
	e.registerComponentModel(QF), e.registerComponentView(tI), XF(e);
}
//#endregion
//#region node_modules/echarts/lib/component/visualMap/install.js
function rI(e) {
	HT(ZF), HT(nI);
}
//#endregion
//#region node_modules/echarts/lib/component/dataset/install.js
var iI = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "dataset", t;
	}
	return t.prototype.init = function(t, n, r) {
		e.prototype.init.call(this, t, n, r), this._sourceManager = new Kh(this), qh(this);
	}, t.prototype.mergeOption = function(t, n) {
		e.prototype.mergeOption.call(this, t, n), qh(this);
	}, t.prototype.optionUpdated = function() {
		this._sourceManager.dirty();
	}, t.prototype.getSourceManager = function() {
		return this._sourceManager;
	}, t.type = "dataset", t.defaultOption = { seriesLayoutBy: Xd }, t;
}($), aI = function(e) {
	c(t, e);
	function t() {
		var t = e !== null && e.apply(this, arguments) || this;
		return t.type = "dataset", t;
	}
	return t.type = "dataset", t;
}(mS);
function oI(e) {
	e.registerComponentModel(iI), e.registerComponentView(aI);
}
//#endregion
//#region node_modules/echarts/lib/export/api/helper.js
var sI = /* @__PURE__ */ o({
	createDimensions: () => wp,
	createList: () => cI,
	createScale: () => uI,
	createSymbol: () => Ig,
	createTextStyle: () => fI,
	dataStack: () => lI,
	enableHoverEmphasis: () => Gc,
	getECData: () => Q,
	getLayoutRect: () => gh,
	mixinAxisModelCommonMethods: () => dI
});
function cI(e) {
	return Vp(null, e);
}
var lI = {
	isDimensionStacked: Lp,
	enableDataStack: Fp,
	getStackedDimension: Rp
};
function uI(e, t) {
	var n = t;
	t instanceof zd || (n = new zd(t));
	var r = WE(n);
	return r.setExtent(e[0], e[1]), UE(r, n), r;
}
function dI(e) {
	ie(e, WT);
}
function fI(e, t) {
	return t ||= {}, _d(e, null, null, t.state !== "normal");
}
//#endregion
//#region node_modules/echarts/lib/export/api/number.js
var pI = /* @__PURE__ */ o({
	MAX_SAFE_INTEGER: () => es,
	asc: () => qo,
	getPercentWithPrecision: () => Zo,
	getPixelPrecision: () => Xo,
	getPrecision: () => Jo,
	getPrecisionSafe: () => Yo,
	isNumeric: () => ds,
	isRadianAroundZero: () => ns,
	linearMap: () => Wo,
	nice: () => ss,
	numericToNumber: () => us,
	parseDate: () => is,
	quantile: () => cs,
	quantity: () => as,
	quantityExponent: () => os,
	reformIntervals: () => ls,
	remRadian: () => ts,
	round: () => Ko
}), mI = /* @__PURE__ */ o({
	format: () => Pm,
	parse: () => is
}), hI = /* @__PURE__ */ o({
	Arc: () => du,
	BezierCurve: () => lu,
	BoundingRect: () => Z,
	Circle: () => kl,
	CompoundPath: () => fu,
	Ellipse: () => jl,
	Group: () => Dl,
	Image: () => ho,
	IncrementalDisplayable: () => Su,
	Line: () => au,
	LinearGradient: () => mu,
	Polygon: () => eu,
	Polyline: () => nu,
	RadialGradient: () => hu,
	Rect: () => Co,
	Ring: () => Xl,
	Sector: () => Jl,
	Text: () => Do,
	clipPointsByRect: () => nd,
	clipRectByRect: () => rd,
	createIcon: () => id,
	extendPath: () => zu,
	extendShape: () => Lu,
	getShapeClass: () => Vu,
	getTransform: () => Xu,
	initProps: () => Du,
	makeImage: () => Uu,
	makePath: () => Hu,
	mergePath: () => Gu,
	registerShape: () => Bu,
	resizePath: () => Ku,
	updateProps: () => Eu
}), gI = /* @__PURE__ */ o({
	addCommas: () => $m,
	capitalFirst: () => ch,
	encodeHTML: () => sm,
	formatTime: () => sh,
	formatTpl: () => ah,
	getTextRect: () => Qm,
	getTooltipMarker: () => oh,
	normalizeCssArray: () => th,
	toCamelCase: () => eh,
	truncateText: () => Lt
}), _I = /* @__PURE__ */ o({
	bind: () => V,
	clone: () => j,
	curry: () => ce,
	defaults: () => P,
	each: () => I,
	extend: () => N,
	filter: () => R,
	indexOf: () => F,
	inherits: () => re,
	isArray: () => H,
	isFunction: () => U,
	isObject: () => G,
	isString: () => W,
	map: () => L,
	merge: () => M,
	reduce: () => oe
});
//#endregion
//#region node_modules/echarts/lib/export/api.js
function vI(e) {
	var t = $.extend(e);
	return $.registerClass(t), t;
}
function yI(e) {
	var t = mS.extend(e);
	return mS.registerClass(t), t;
}
function bI(e) {
	var t = xg.extend(e);
	return xg.registerClass(t), t;
}
function xI(e) {
	var t = p_.extend(e);
	return p_.registerClass(t), t;
}
//#endregion
//#region node_modules/echarts/lib/label/LabelManager.js
function SI(e) {
	if (e) {
		for (var t = [], n = 0; n < e.length; n++) t.push(e[n].slice());
		return t;
	}
}
function CI(e, t) {
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
		labelLinePoints: SI(r && r.shape.points)
	};
}
var wI = [
	"align",
	"verticalAlign",
	"width",
	"height",
	"fontSize"
], TI = new Mn(), EI = Bs(), DI = Bs();
function OI(e, t, n) {
	for (var r = 0; r < n.length; r++) {
		var i = n[r];
		t[i] != null && (e[i] = t[i]);
	}
}
var kI = [
	"x",
	"y",
	"rotation"
], AI = function() {
	function e() {
		this._labelList = [], this._chartViewList = [];
	}
	return e.prototype.clearLabels = function() {
		this._labelList = [], this._chartViewList = [];
	}, e.prototype._addLabel = function(e, t, n, r, i) {
		var a = r.style, o = r.__hostTarget.textConfig || {}, s = r.getComputedTransform(), c = r.getBoundingRect().plain();
		Z.applyTransform(c, c, s), s ? TI.setLocalTransform(s) : (TI.x = TI.y = TI.rotation = TI.originX = TI.originY = 0, TI.scaleX = TI.scaleY = 1), TI.rotation = Ha(TI.rotation);
		var l = r.__hostTarget, u;
		if (l) {
			u = l.getBoundingRect().plain();
			var d = l.getComputedTransform();
			Z.applyTransform(u, u, d);
		}
		var f = u && l.getTextGuideLine();
		this._labelList.push({
			label: r,
			labelLine: f,
			seriesModel: n,
			dataIndex: e,
			dataType: t,
			layoutOption: i,
			computedLayoutOption: null,
			rect: c,
			hostRect: u,
			priority: u ? u.width * u.height : 0,
			defaultAttr: {
				ignore: r.ignore,
				labelGuideIgnore: f && f.ignore,
				x: TI.x,
				y: TI.y,
				scaleX: TI.scaleX,
				scaleY: TI.scaleY,
				rotation: TI.rotation,
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
		(U(r) || B(r).length) && e.group.traverse(function(e) {
			if (e.ignore) return !0;
			var i = e.getTextContent(), a = Q(e);
			i && !i.disableLabelLayout && t._addLabel(a.dataIndex, a.dataType, n, i, r);
		});
	}, e.prototype.updateLayoutConfig = function(e) {
		var t = e.getWidth(), n = e.getHeight();
		function r(e, t) {
			return function() {
				_y(e, t);
			};
		}
		for (var i = 0; i < this._labelList.length; i++) {
			var a = this._labelList[i], o = a.label, s = o.__hostTarget, c = a.defaultAttr, l = void 0;
			l = U(a.layoutOption) ? a.layoutOption(CI(a, s)) : a.layoutOption, l ||= {}, a.computedLayoutOption = l;
			var u = Math.PI / 180;
			s && s.setTextConfig({
				local: !1,
				position: l.x != null || l.y != null ? null : c.attachedPos,
				rotation: l.rotate == null ? c.attachedRot : l.rotate * u,
				offset: [l.dx || 0, l.dy || 0]
			});
			var d = !1;
			if (l.x == null ? (o.x = c.x, o.setStyle("x", c.style.x)) : (o.x = Go(l.x, t), o.setStyle("x", 0), d = !0), l.y == null ? (o.y = c.y, o.setStyle("y", c.style.y)) : (o.y = Go(l.y, n), o.setStyle("y", 0), d = !0), l.labelLinePoints) {
				var f = s.getTextGuideLine();
				f && (f.setShape({ points: l.labelLinePoints }), d = !1);
			}
			var p = EI(o);
			p.needsUpdateLabelLine = d, o.rotation = l.rotate == null ? c.rotation : l.rotate * u, o.scaleX = c.scaleX, o.scaleY = c.scaleY;
			for (var m = 0; m < wI.length; m++) {
				var h = wI[m];
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
		var t = e.getWidth(), n = e.getHeight(), r = Ey(this._labelList), i = R(r, function(e) {
			return e.layoutOption.moveOverlap === "shiftX";
		}), a = R(r, function(e) {
			return e.layoutOption.moveOverlap === "shiftY";
		});
		Oy(i, 0, t), ky(a, 0, n), Ay(R(r, function(e) {
			return e.layoutOption.hideOverlap;
		}));
	}, e.prototype.processLabelsOverall = function() {
		var e = this;
		I(this._chartViewList, function(t) {
			var n = t.__model, r = t.ignoreLabelLineUpdate, i = n.isAnimationEnabled();
			t.group.traverse(function(t) {
				if (t.ignore && !t.forceLabelAnimation) return !0;
				var a = !r, o = t.getTextContent();
				!a && o && (a = EI(o).needsUpdateLabelLine), a && e._updateLabelLine(t, n), i && e._animateLabels(t, n);
			});
		});
	}, e.prototype._updateLabelLine = function(e, t) {
		var n = e.getTextContent(), r = Q(e), i = r.dataIndex;
		if (n && i != null) {
			var a = t.getData(r.dataType), o = a.getItemModel(i), s = {}, c = a.getItemVisual(i, "style");
			c && (s.stroke = c[a.getVisual("drawType")]);
			var l = o.getModel("labelLine");
			wy(e, Ty(o), s), _y(e, l);
		}
	}, e.prototype._animateLabels = function(e, t) {
		var n = e.getTextContent(), r = e.getTextGuideLine();
		if (n && (e.forceLabelAnimation || !n.ignore && !n.invisible && !e.disableLabelAnimation && !Ou(e))) {
			var i = EI(n), a = i.oldLayout, o = Q(e), s = o.dataIndex, c = {
				x: n.x,
				y: n.y,
				rotation: n.rotation
			}, l = t.getData(o.dataType);
			if (a) {
				n.attr(a);
				var u = e.prevStates;
				u && (F(u, "select") >= 0 && n.attr(i.oldLayoutSelect), F(u, "emphasis") >= 0 && n.attr(i.oldLayoutEmphasis)), Eu(n, c, t, s);
			} else if (n.attr(c), !Ed(n).valueAnimation) {
				var d = K(n.style.opacity, 1);
				n.style.opacity = 0, Du(n, { style: { opacity: d } }, t, s);
			}
			if (i.oldLayout = c, n.states.select) {
				var f = i.oldLayoutSelect = {};
				OI(f, c, kI), OI(f, n.states.select, kI);
			}
			if (n.states.emphasis) {
				var p = i.oldLayoutEmphasis = {};
				OI(p, c, kI), OI(p, n.states.emphasis, kI);
			}
			Od(n, s, l, t, t);
		}
		if (r && !r.ignore && !r.invisible) {
			var i = DI(r), a = i.oldLayout, m = { points: r.shape.points };
			a ? (r.attr({ shape: a }), Eu(r, { shape: m }, t)) : (r.setShape(m), r.style.strokePercent = 0, Du(r, { style: { strokePercent: 1 } }, t)), i.oldLayout = m;
		}
	}, e;
}(), jI = Bs();
function MI(e) {
	e.registerUpdateLifecycle("series:beforeupdate", function(e, t, n) {
		var r = jI(t).labelManager;
		r ||= jI(t).labelManager = new AI(), r.clearLabels();
	}), e.registerUpdateLifecycle("series:layoutlabels", function(e, t, n) {
		var r = jI(t).labelManager;
		n.updatedSeries.forEach(function(e) {
			r.addLabelsOfSeries(t.getViewOfSeriesModel(e));
		}), r.updateLayoutConfig(t), r.layout(t), r.processLabelsOverall();
	});
}
//#endregion
//#region node_modules/echarts/core.js
var NI = /* @__PURE__ */ o({
	Axis: () => xD,
	ChartView: () => p_,
	ComponentModel: () => $,
	ComponentView: () => mS,
	List: () => Cp,
	Model: () => zd,
	PRIORITY: () => xw,
	SeriesModel: () => xg,
	color: () => ur,
	connect: () => hT,
	dataTool: () => zT,
	dependencies: () => iw,
	disConnect: () => _T,
	disconnect: () => gT,
	dispose: () => vT,
	env: () => Y,
	extendChartView: () => xI,
	extendComponentModel: () => vI,
	extendComponentView: () => yI,
	extendSeriesModel: () => bI,
	format: () => gI,
	getCoordinateSystemDimensions: () => kT,
	getInstanceByDom: () => yT,
	getInstanceById: () => bT,
	getMap: () => LT,
	graphic: () => hI,
	helper: () => sI,
	init: () => mT,
	innerDrawElementOnCanvas: () => BC,
	matrix: () => lt,
	number: () => pI,
	parseGeoJSON: () => xk,
	parseGeoJson: () => xk,
	registerAction: () => DT,
	registerCoordinateSystem: () => OT,
	registerLayout: () => AT,
	registerLoading: () => PT,
	registerLocale: () => gm,
	registerMap: () => IT,
	registerPostInit: () => wT,
	registerPostUpdate: () => TT,
	registerPreprocessor: () => ST,
	registerProcessor: () => CT,
	registerTheme: () => xT,
	registerTransform: () => RT,
	registerUpdateLifecycle: () => ET,
	registerVisual: () => jT,
	setCanvasCreator: () => FT,
	setPlatformAPI: () => g,
	throttle: () => dv,
	time: () => mI,
	use: () => HT,
	util: () => _I,
	vector: () => Qt,
	version: () => rw,
	zrUtil: () => _,
	zrender: () => nx
}), PI = Math.sin, FI = Math.cos, II = Math.PI, LI = Math.PI * 2, RI = 180 / II, zI = function() {
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
		var c = o - a, l = !s, u = Math.abs(c), d = Ur(u - LI) || (l ? c >= LI : -c >= LI), f = c > 0 ? c % LI : c % LI + LI, p = !1;
		p = d ? !0 : !Ur(u) && f >= II == !!l;
		var m = e + n * FI(a), h = t + r * PI(a);
		this._start && this._add("M", m, h);
		var g = Math.round(i * RI);
		if (d) {
			var _ = 1 / this._p, v = (l ? 1 : -1) * (LI - _);
			this._add("A", n, r, g, 1, +l, e + n * FI(a + v), t + r * PI(a + v)), _ > .01 && this._add("A", n, r, g, 0, +l, m, h);
		} else {
			var y = e + n * FI(o), b = t + r * PI(o);
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
}(), BI = "none", VI = Math.round;
function HI(e) {
	var t = e.fill;
	return t != null && t !== BI;
}
function UI(e) {
	var t = e.stroke;
	return t != null && t !== BI;
}
var WI = [
	"lineCap",
	"miterLimit",
	"lineJoin"
], GI = L(WI, function(e) {
	return "stroke-" + e.toLowerCase();
});
function KI(e, t, n, r) {
	var i = t.opacity == null ? 1 : t.opacity;
	if (n instanceof ho) e("opacity", i);
	else {
		if (HI(t)) {
			var a = Vr(t.fill);
			e("fill", a.color);
			var o = t.fillOpacity == null ? a.opacity * i : t.fillOpacity * a.opacity * i;
			(r || o < 1) && e("fill-opacity", o);
		} else e("fill", BI);
		if (UI(t)) {
			var s = Vr(t.stroke);
			e("stroke", s.color);
			var c = t.strokeNoScale ? n.getLineScale() : 1, l = c ? (t.lineWidth || 0) / c : 0, u = t.strokeOpacity == null ? s.opacity * i : t.strokeOpacity * s.opacity * i, d = t.strokeFirst;
			if ((r || l !== 1) && e("stroke-width", l), (r || d) && e("paint-order", d ? "stroke" : "fill"), (r || u < 1) && e("stroke-opacity", u), t.lineDash) {
				var f = mC(n), p = f[0], m = f[1];
				p && (m = VI(m || 0), e("stroke-dasharray", p.join(",")), (m || r) && e("stroke-dashoffset", m));
			} else r && e("stroke-dasharray", BI);
			for (var h = 0; h < WI.length; h++) {
				var g = WI[h];
				if (r || t[g] !== ao[g]) {
					var _ = t[g] || ao[g];
					_ && e(GI[h], _);
				}
			}
		} else r && e("stroke", BI);
	}
}
//#endregion
//#region node_modules/zrender/lib/svg/core.js
var qI = "http://www.w3.org/2000/svg", JI = "http://www.w3.org/1999/xlink", YI = "http://www.w3.org/2000/xmlns/", XI = "http://www.w3.org/XML/1998/namespace", ZI = "ecmeta_";
function QI(e) {
	return document.createElementNS(qI, e);
}
function $I(e, t, n, r, i) {
	return {
		tag: e,
		attrs: n || {},
		children: r,
		text: i,
		key: t
	};
}
function eL(e, t) {
	var n = [];
	if (t) for (var r in t) {
		var i = t[r], a = r;
		i !== !1 && (i !== !0 && i != null && (a += "=\"" + i + "\""), n.push(a));
	}
	return "<" + e + " " + n.join(" ") + ">";
}
function tL(e) {
	return "</" + e + ">";
}
function nL(e, t) {
	t ||= {};
	var n = t.newline ? "\n" : "";
	function r(e) {
		var t = e.children, i = e.tag, a = e.attrs, o = e.text;
		return eL(i, a) + (i === "style" ? o || "" : sm(o)) + (t ? "" + n + L(t, function(e) {
			return r(e);
		}).join(n) + n : "") + tL(i);
	}
	return r(e);
}
function rL(e, t, n) {
	n ||= {};
	var r = n.newline ? "\n" : "", i = " {" + r, a = r + "}", o = L(B(e), function(t) {
		return t + i + L(B(e[t]), function(n) {
			return n + ":" + e[t][n] + ";";
		}).join(r) + a;
	}).join(r), s = L(B(t), function(e) {
		return "@keyframes " + e + i + L(B(t[e]), function(n) {
			return n + i + L(B(t[e][n]), function(r) {
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
function iL(e) {
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
function aL(e, t, n, r) {
	return $I("svg", "root", {
		width: e,
		height: t,
		xmlns: qI,
		"xmlns:xlink": JI,
		version: "1.1",
		baseProfile: "full",
		viewBox: r ? "0 0 " + e + " " + t : !1
	}, n);
}
//#endregion
//#region node_modules/zrender/lib/svg/cssClassId.js
var oL = 0;
function sL() {
	return oL++;
}
//#endregion
//#region node_modules/zrender/lib/svg/cssAnimation.js
var cL = {
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
}, lL = "transform-origin";
function uL(e, t, n) {
	var r = N({}, e.shape);
	N(r, t), e.buildPath(n, r);
	var i = new zI();
	return i.reset(ii(e)), n.rebuildPath(i, 1), i.generateStr(), i.getStr();
}
function dL(e, t) {
	var n = t.originX, r = t.originY;
	(n || r) && (e[lL] = n + "px " + r + "px");
}
var fL = {
	fill: "fill",
	opacity: "opacity",
	lineWidth: "stroke-width",
	lineDashOffset: "stroke-dashoffset"
};
function pL(e, t) {
	var n = t.zrId + "-ani-" + t.cssAnimIdx++;
	return t.cssAnims[n] = e, n;
}
function mL(e, t, n) {
	var r = e.shape.paths, i = {}, a, o;
	if (I(r, function(e) {
		var t = iL(n.zrId);
		t.animation = !0, gL(e, {}, t, !0);
		var r = t.cssAnims, s = t.cssNodes, c = B(r), l = c.length;
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
		var s = pL(i, n);
		return a.replace(o, s);
	}
}
function hL(e) {
	return W(e) ? cL[e] ? "cubic-bezier(" + cL[e] + ")" : cr(e) ? e : "" : "";
}
function gL(e, t, n, r) {
	var i = e.animators, a = i.length, o = [];
	if (e instanceof fu) {
		var s = mL(e, t, n);
		if (s) o.push(s);
		else if (!a) return;
	} else if (!a) return;
	for (var c = {}, l = 0; l < a; l++) {
		var u = i[l], d = [u.getMaxTime() / 1e3 + "s"], f = hL(u.getClip().easing), p = u.getDelay();
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
						var d = s[l], f = Math.round(d.time / i * 100) + "%", p = hL(d.easing), m = d.rawValue;
						(W(m) || ue(m)) && (t[f] = t[f] || {}, t[f][c] = d.rawValue, p && (t[f][u] = p));
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
			Pn(g, e), N(g, s[h]);
			var _ = ai(g), v = s[h][u];
			l[h] = _ ? { transform: _ } : {}, dL(l[h], g), v && (l[h][u] = v);
		}
		var y, b = !0;
		for (var h in c) {
			l[h] = l[h] || {};
			var x = !y, v = c[h][u];
			x && (y = new La());
			var S = y.len();
			y.reset(), l[h].d = uL(e, c[h], y);
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
				return fL[e];
			});
		}
		for (var w = B(l), T = !0, E, f = 1; f < w.length; f++) {
			var D = w[f - 1], O = w[f];
			if (l[D][lL] !== l[O][lL]) {
				T = !1;
				break;
			}
			E = l[D][lL];
		}
		if (T && E) {
			for (var h in l) l[h][lL] && delete l[h][lL];
			t[lL] = E;
		}
		if (R(w, function(e) {
			return B(l[e]).length > 0;
		}).length) return pL(l, n) + " " + i[0] + " both";
	}
	for (var g in c) {
		var s = h(c[g]);
		s && o.push(s);
	}
	if (o.length) {
		var _ = n.zrId + "-cls-" + sL();
		n.cssNodes["." + _] = { animation: o.join(",") }, t.class = _;
	}
}
//#endregion
//#region node_modules/zrender/lib/svg/cssEmphasis.js
function _L(e, t, n) {
	if (!e.ignore) {
		if (e.isSilent()) {
			var r = { "pointer-events": "none" };
			vL(r, t, n, !0);
		} else {
			var i = e.states.emphasis && e.states.emphasis.style ? e.states.emphasis.style : {}, a = i.fill;
			if (!a) {
				var o = e.style && e.style.fill, s = e.states.select && e.states.select.style && e.states.select.style.fill, c = e.currentStates.indexOf("select") >= 0 && s || o;
				c && (a = zr(c));
			}
			var l = i.lineWidth;
			if (l) {
				var u = !i.strokeNoScale && e.transform ? e.transform[0] : 1;
				l /= u;
			}
			var r = { cursor: "pointer" };
			a && (r.fill = a), i.stroke && (r.stroke = i.stroke), l && (r["stroke-width"] = l), vL(r, t, n, !0);
		}
	}
}
function vL(e, t, n, r) {
	var i = JSON.stringify(e), a = n.cssStyleCache[i];
	a || (a = n.zrId + "-cls-" + sL(), n.cssStyleCache[i] = a, n.cssNodes["." + a + (r ? ":hover" : "")] = e), t.class = t.class ? t.class + " " + a : a;
}
//#endregion
//#region node_modules/zrender/lib/svg/graphic.js
var yL = Math.round;
function bL(e) {
	return e && W(e.src);
}
function xL(e) {
	return e && U(e.toDataURL);
}
function SL(e, t, n, r) {
	KI(function(i, a) {
		var o = i === "fill" || i === "stroke";
		o && ni(a) ? LL(t, e, i, r) : o && $r(a) ? RL(n, e, i, r) : e[i] = a, o && r.ssr && a === "none" && (e["pointer-events"] = "visible");
	}, t, n, !1), IL(n, e, r);
}
function CL(e, t) {
	var n = mx(t);
	n && (n.each(function(t, n) {
		t != null && (e[("ecmeta_" + n).toLowerCase()] = t + "");
	}), t.isSilent() && (e[ZI + "silent"] = "true"));
}
function wL(e) {
	return Ur(e[0] - 1) && Ur(e[1]) && Ur(e[2]) && Ur(e[3] - 1);
}
function TL(e) {
	return Ur(e[4]) && Ur(e[5]);
}
function EL(e, t, n) {
	if (t && !(TL(t) && wL(t))) {
		var r = n ? 10 : 1e4;
		e.transform = wL(t) ? "translate(" + yL(t[4] * r) / r + " " + yL(t[5] * r) / r + ")" : Kr(t);
	}
}
function DL(e, t, n) {
	for (var r = e.points, i = [], a = 0; a < r.length; a++) i.push(yL(r[a][0] * n) / n), i.push(yL(r[a][1] * n) / n);
	t.points = i.join(" ");
}
function OL(e) {
	return !e.smooth;
}
function kL(e) {
	var t = L(e, function(e) {
		return typeof e == "string" ? [e, e] : e;
	});
	return function(e, n, r) {
		for (var i = 0; i < t.length; i++) {
			var a = t[i], o = e[a[0]];
			o != null && (n[a[1]] = yL(o * r) / r);
		}
	};
}
var AL = {
	circle: [kL([
		"cx",
		"cy",
		"r"
	])],
	polyline: [DL, OL],
	polygon: [DL, OL]
};
function jL(e) {
	for (var t = e.animators, n = 0; n < t.length; n++) if (t[n].targetName === "shape") return !0;
	return !1;
}
function ML(e, t) {
	var n = e.style, r = e.shape, i = AL[e.type], a = {}, o = t.animation, s = "path", c = e.style.strokePercent, l = t.compress && ii(e) || 4;
	if (i && !t.willUpdate && (!i[1] || i[1](r)) && !(o && jL(e)) && !(c < 1)) {
		s = e.type;
		var u = 10 ** l;
		i[0](r, a, u);
	} else {
		var d = !e.path || e.shapeChanged();
		e.path || e.createPathProxy();
		var f = e.path;
		d && (f.beginPath(), e.buildPath(f, e.shape), e.pathUpdated());
		var p = f.getVersion(), m = e, h = m.__svgPathBuilder;
		(m.__svgPathVersion !== p || !h || c !== m.__svgPathStrokePercent) && (h ||= m.__svgPathBuilder = new zI(), h.reset(l), f.rebuildPath(h, c), h.generateStr(), m.__svgPathVersion = p, m.__svgPathStrokePercent = c), a.d = h.getStr();
	}
	return EL(a, e.transform), SL(a, n, e, t), CL(a, e), t.animation && gL(e, a, t), t.emphasis && _L(e, a, t), $I(s, e.id + "", a);
}
function NL(e, t) {
	var n = e.style, r = n.image;
	if (r && !W(r) && (bL(r) ? r = r.src : xL(r) && (r = r.toDataURL())), r) {
		var i = n.x || 0, a = n.y || 0, o = n.width, s = n.height, c = {
			href: r,
			width: o,
			height: s
		};
		return i && (c.x = i), a && (c.y = a), EL(c, e.transform), SL(c, n, e, t), CL(c, e), t.animation && gL(e, c, t), $I("image", e.id + "", c);
	}
}
function PL(e, t) {
	var n = e.style, r = n.text;
	if (r != null && (r += ""), !(!r || isNaN(n.x) || isNaN(n.y))) {
		var i = n.font || "12px sans-serif", a = n.x || 0, o = Jr(n.y || 0, Nt(i), n.textBaseline), s = {
			"dominant-baseline": "central",
			"text-anchor": qr[n.textAlign] || n.textAlign
		};
		if (No(n)) {
			var c = "", l = n.fontStyle, u = jo(n.fontSize);
			if (!parseFloat(u)) return;
			var d = n.fontFamily || "sans-serif", f = n.fontWeight;
			c += "font-size:" + u + ";font-family:" + d + ";", l && l !== "normal" && (c += "font-style:" + l + ";"), f && f !== "normal" && (c += "font-weight:" + f + ";"), s.style = c;
		} else s.style = "font: " + i;
		return r.match(/\s/) && (s["xml:space"] = "preserve"), a && (s.x = a), o && (s.y = o), EL(s, e.transform), SL(s, n, e, t), CL(s, e), t.animation && gL(e, s, t), $I("text", e.id + "", s, void 0, r);
	}
}
function FL(e, t) {
	if (e instanceof co) return ML(e, t);
	if (e instanceof ho) return NL(e, t);
	if (e instanceof uo) return PL(e, t);
}
function IL(e, t, n) {
	var r = e.style;
	if (Yr(r)) {
		var i = Xr(e), a = n.shadowCache, o = a[i];
		if (!o) {
			var s = e.getGlobalScale(), c = s[0], l = s[1];
			if (!c || !l) return;
			var u = r.shadowOffsetX || 0, d = r.shadowOffsetY || 0, f = r.shadowBlur, p = Vr(r.shadowColor), m = p.opacity, h = p.color, g = f / 2 / c, _ = f / 2 / l, v = g + " " + _;
			o = n.zrId + "-s" + n.shadowIdx++, n.defs[o] = $I("filter", o, {
				id: o,
				x: "-100%",
				y: "-100%",
				width: "300%",
				height: "300%"
			}, [$I("feDropShadow", "", {
				dx: u / c,
				dy: d / l,
				stdDeviation: v,
				"flood-color": h,
				"flood-opacity": m
			})]), a[i] = o;
		}
		t.filter = ri(o);
	}
}
function LL(e, t, n, r) {
	var i = e[n], a, o = { gradientUnits: i.global ? "userSpaceOnUse" : "objectBoundingBox" };
	if (ei(i)) a = "linearGradient", o.x1 = i.x, o.y1 = i.y, o.x2 = i.x2, o.y2 = i.y2;
	else if (ti(i)) a = "radialGradient", o.cx = K(i.x, .5), o.cy = K(i.y, .5), o.r = K(i.r, .5);
	else return;
	for (var s = i.colorStops, c = [], l = 0, u = s.length; l < u; ++l) {
		var d = Gr(s[l].offset) * 100 + "%", f = s[l].color, p = Vr(f), m = p.color, h = p.opacity, g = { offset: d };
		g["stop-color"] = m, h < 1 && (g["stop-opacity"] = h), c.push($I("stop", l + "", g));
	}
	var _ = nL($I(a, "", o, c)), v = r.gradientCache, y = v[_];
	y || (y = r.zrId + "-g" + r.gradientIdx++, v[_] = y, o.id = y, r.defs[y] = $I(a, y, o, c)), t[n] = ri(y);
}
function RL(e, t, n, r) {
	var i = e.style[n], a = e.getBoundingRect(), o = {}, s = i.repeat, c = s === "no-repeat", l = s === "repeat-x", u = s === "repeat-y", d;
	if (Zr(i)) {
		var f = i.imageWidth, p = i.imageHeight, m = void 0, h = i.image;
		if (W(h) ? m = h : bL(h) ? m = h.src : xL(h) && (m = h.toDataURL()), typeof Image > "u") {
			var g = "Image width/height must been given explictly in svg-ssr renderer.";
			Se(f, g), Se(p, g);
		} else if (f == null || p == null) {
			var _ = function(e, t) {
				if (e) {
					var n = e.elm, r = f || t.width, i = p || t.height;
					e.tag === "pattern" && (l ? (i = 1, r /= a.width) : u && (r = 1, i /= a.height)), e.attrs.width = r, e.attrs.height = i, n && (n.setAttribute("width", r), n.setAttribute("height", i));
				}
			}, v = ot(m, null, e, function(e) {
				c || _(S, e), _(d, e);
			});
			v && v.width && v.height && (f ||= v.width, p ||= v.height);
		}
		d = $I("image", "img", {
			href: m,
			width: f,
			height: p
		}), o.width = f, o.height = p;
	} else i.svgElement && (d = j(i.svgElement), o.width = i.svgWidth, o.height = i.svgHeight);
	if (d) {
		var y, b;
		c ? y = b = 1 : l ? (b = 1, y = o.width / a.width) : u ? (y = 1, b = o.height / a.height) : o.patternUnits = "userSpaceOnUse", y != null && !isNaN(y) && (o.width = y), b != null && !isNaN(b) && (o.height = b);
		var x = ai(i);
		x && (o.patternTransform = x);
		var S = $I("pattern", "", o, [d]), C = nL(S), w = r.patternCache, T = w[C];
		T || (T = r.zrId + "-p" + r.patternIdx++, w[C] = T, o.id = T, S = r.defs[T] = $I("pattern", T, o, [d])), t[n] = ri(T);
	}
}
function zL(e, t, n) {
	var r = n.clipPathCache, i = n.defs, a = r[e.id];
	if (!a) {
		a = n.zrId + "-c" + n.clipPathIdx++;
		var o = { id: a };
		r[e.id] = a, i[a] = $I("clipPath", a, o, [ML(e, n)]);
	}
	t["clip-path"] = ri(a);
}
//#endregion
//#region node_modules/zrender/lib/svg/domapi.js
function BL(e) {
	return document.createTextNode(e);
}
function VL(e, t, n) {
	e.insertBefore(t, n);
}
function HL(e, t) {
	e.removeChild(t);
}
function UL(e, t) {
	e.appendChild(t);
}
function WL(e) {
	return e.parentNode;
}
function GL(e) {
	return e.nextSibling;
}
function KL(e, t) {
	e.textContent = t;
}
//#endregion
//#region node_modules/zrender/lib/svg/patch.js
var qL = 58, JL = 120, YL = $I("", "");
function XL(e) {
	return e === void 0;
}
function ZL(e) {
	return e !== void 0;
}
function QL(e, t, n) {
	for (var r = {}, i = t; i <= n; ++i) {
		var a = e[i].key;
		a !== void 0 && (r[a] = i);
	}
	return r;
}
function $L(e, t) {
	var n = e.key === t.key;
	return e.tag === t.tag && n;
}
function eR(e) {
	var t, n = e.children, r = e.tag;
	if (ZL(r)) {
		var i = e.elm = QI(r);
		if (rR(YL, e), H(n)) for (t = 0; t < n.length; ++t) {
			var a = n[t];
			a != null && UL(i, eR(a));
		}
		else ZL(e.text) && !G(e.text) && UL(i, BL(e.text));
	} else e.elm = BL(e.text);
	return e.elm;
}
function tR(e, t, n, r, i) {
	for (; r <= i; ++r) {
		var a = n[r];
		a != null && VL(e, eR(a), t);
	}
}
function nR(e, t, n, r) {
	for (; n <= r; ++n) {
		var i = t[n];
		i != null && (ZL(i.tag) ? HL(WL(i.elm), i.elm) : HL(e, i.elm));
	}
}
function rR(e, t) {
	var n, r = t.elm, i = e && e.attrs || {}, a = t.attrs || {};
	if (i !== a) {
		for (n in a) {
			var o = a[n];
			i[n] !== o && (o === !0 ? r.setAttribute(n, "") : o === !1 ? r.removeAttribute(n) : n === "style" ? r.style.cssText = o : n.charCodeAt(0) === JL ? n === "xmlns:xlink" || n === "xmlns" ? r.setAttributeNS(YI, n, o) : n.charCodeAt(3) === qL ? r.setAttributeNS(XI, n, o) : n.charCodeAt(5) === qL ? r.setAttributeNS(JI, n, o) : r.setAttribute(n, o) : r.setAttribute(n, o));
		}
		for (n in i) n in a || r.removeAttribute(n);
	}
}
function iR(e, t, n) {
	for (var r = 0, i = 0, a = t.length - 1, o = t[0], s = t[a], c = n.length - 1, l = n[0], u = n[c], d, f, p, m; r <= a && i <= c;) o == null ? o = t[++r] : s == null ? s = t[--a] : l == null ? l = n[++i] : u == null ? u = n[--c] : $L(o, l) ? (aR(o, l), o = t[++r], l = n[++i]) : $L(s, u) ? (aR(s, u), s = t[--a], u = n[--c]) : $L(o, u) ? (aR(o, u), VL(e, o.elm, GL(s.elm)), o = t[++r], u = n[--c]) : $L(s, l) ? (aR(s, l), VL(e, s.elm, o.elm), s = t[--a], l = n[++i]) : (XL(d) && (d = QL(t, r, a)), f = d[l.key], XL(f) ? VL(e, eR(l), o.elm) : (p = t[f], p.tag === l.tag ? (aR(p, l), t[f] = void 0, VL(e, p.elm, o.elm)) : VL(e, eR(l), o.elm)), l = n[++i]);
	(r <= a || i <= c) && (r > a ? (m = n[c + 1] == null ? null : n[c + 1].elm, tR(e, m, n, i, c)) : nR(e, t, r, a));
}
function aR(e, t) {
	var n = t.elm = e.elm, r = e.children, i = t.children;
	e !== t && (rR(e, t), XL(t.text) ? ZL(r) && ZL(i) ? r !== i && iR(n, r, i) : ZL(i) ? (ZL(e.text) && KL(n, ""), tR(n, null, i, 0, i.length - 1)) : ZL(r) ? nR(n, r, 0, r.length - 1) : ZL(e.text) && KL(n, "") : e.text !== t.text && (ZL(r) && nR(n, r, 0, r.length - 1), KL(n, t.text)));
}
function oR(e, t) {
	if ($L(e, t)) aR(e, t);
	else {
		var n = e.elm, r = WL(n);
		eR(t), r !== null && (VL(r, t.elm, GL(n)), nR(r, [e], 0, 0));
	}
	return t;
}
//#endregion
//#region node_modules/zrender/lib/svg/Painter.js
var sR = 0, cR = function() {
	function e(e, t, n) {
		if (this.type = "svg", this.refreshHover = lR("refreshHover"), this.configLayer = lR("configLayer"), this.storage = t, this._opts = n = N({}, n), this.root = e, this._id = "zr" + sR++, this._oldVNode = aL(n.width, n.height), e && !n.ssr) {
			var r = this._viewport = document.createElement("div");
			r.style.cssText = "position:relative;overflow:hidden";
			var i = this._svgDom = this._oldVNode.elm = QI("svg");
			rR(null, this._oldVNode), r.appendChild(i), e.appendChild(r);
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
			e.attrs.style = "position:absolute;left:0;top:0;user-select:none", oR(this._oldVNode, e), this._oldVNode = e;
		}
	}, e.prototype.renderOneToVNode = function(e) {
		return FL(e, iL(this._id));
	}, e.prototype.renderToVNode = function(e) {
		e ||= {};
		var t = this.storage.getDisplayList(!0), n = this._width, r = this._height, i = iL(this._id);
		i.animation = e.animation, i.willUpdate = e.willUpdate, i.compress = e.compress, i.emphasis = e.emphasis, i.ssr = this._opts.ssr;
		var a = [], o = this._bgVNode = uR(n, r, this._backgroundColor, i);
		o && a.push(o);
		var s = e.compress ? null : this._mainVNode = $I("g", "main", {}, []);
		this._paintList(t, i, s ? s.children : a), s && a.push(s);
		var c = L(B(i.defs), function(e) {
			return i.defs[e];
		});
		if (c.length && a.push($I("defs", "defs", {}, c)), e.animation) {
			var l = rL(i.cssNodes, i.cssAnims, { newline: !0 });
			if (l) {
				var u = $I("style", "stl", {}, [], l);
				a.push(u);
			}
		}
		return aL(n, r, a, e.useViewBox);
	}, e.prototype.renderToString = function(e) {
		return e ||= {}, nL(this.renderToVNode({
			animation: K(e.cssAnimation, !0),
			emphasis: K(e.cssEmphasis, !0),
			willUpdate: !1,
			compress: !0,
			useViewBox: K(e.useViewBox, !0)
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
					zL(d[g], _, t);
					var v = $I("g", "clip-g-" + c++, _, []);
					(o ? o.children : n).push(v), i[a++] = v, o = v;
				}
				s = d;
				var y = FL(u, t);
				y && (o ? o.children : n).push(y);
			}
		}
	}, e.prototype.resize = function(e, t) {
		var n = this._opts, r = this.root, i = this._viewport;
		if (e != null && (n.width = e), t != null && (n.height = t), r && i && (i.style.display = "none", e = fC(r, 0, n), t = fC(r, 1, n), i.style.display = ""), this._width !== e || this._height !== t) {
			if (this._width = e, this._height = t, i) {
				var a = i.style;
				a.width = e + "px", a.height = t + "px";
			}
			if ($r(this._backgroundColor)) this.refresh();
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
		return e ? (t = oi(t), t && n + "base64," + t) : n + "charset=UTF-8," + encodeURIComponent(t);
	}, e;
}();
function lR(e) {
	return function() {};
}
function uR(e, t, n, r) {
	var i;
	if (n && n !== "none") {
		if (i = $I("rect", "bg", {
			width: e,
			height: t,
			x: "0",
			y: "0"
		}), ni(n)) LL({ fill: n }, i.attrs, "fill", r);
		else if ($r(n)) RL({
			style: { fill: n },
			dirty: Pe,
			getBoundingRect: function() {
				return {
					width: e,
					height: t
				};
			}
		}, i.attrs, "fill", r);
		else {
			var a = Vr(n), o = a.color, s = a.opacity;
			i.attrs.fill = o, s < 1 && (i.attrs["fill-opacity"] = s);
		}
	}
	return i;
}
//#endregion
//#region node_modules/echarts/lib/renderer/installSVGRenderer.js
function dR(e) {
	e.registerPainter("svg", cR);
}
//#endregion
//#region node_modules/zrender/lib/canvas/Layer.js
function fR(e, t, n) {
	var r = h.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = r.style;
	return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", r.setAttribute("data-zr-dom-id", e)), r.width = i * n, r.height = a * n, r;
}
var pR = function(e) {
	c(t, e);
	function t(t, n, r) {
		var i = e.call(this) || this;
		i.motionBlur = !1, i.lastFrameAlpha = .7, i.dpr = 1, i.virtual = !1, i.config = {}, i.incremental = !1, i.zlevel = 0, i.maxRepaintRectCount = 5, i.__dirty = !0, i.__firstTimePaint = !0, i.__used = !1, i.__drawIndex = 0, i.__startIndex = 0, i.__endIndex = 0, i.__prevStartIndex = null, i.__prevEndIndex = null;
		var a;
		r ||= Mi, typeof t == "string" ? a = fR(t, n, r) : G(t) && (a = t, t = a.id), i.id = t, i.dom = a;
		var o = a.style;
		return o && (Ne(a), a.onselectstart = function() {
			return !1;
		}, o.padding = "0", o.margin = "0", o.borderWidth = "0"), i.painter = n, i.dpr = r, i;
	}
	return t.prototype.getElementCount = function() {
		return this.__endIndex - this.__startIndex;
	}, t.prototype.afterBrush = function() {
		this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
	}, t.prototype.initContext = function() {
		this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
	}, t.prototype.setUnpainted = function() {
		this.__firstTimePaint = !0;
	}, t.prototype.createBackBuffer = function() {
		var e = this.dpr;
		this.domBack = fR("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
	}, t.prototype.createRepaintRects = function(e, t, n, r) {
		if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
		var i = [], a = this.maxRepaintRectCount, o = !1, s = new Z(0, 0, 0, 0);
		function c(e) {
			if (e.isFinite() && !e.isZero()) {
				if (i.length === 0) {
					var t = new Z(0, 0, 0, 0);
					t.copy(e), i.push(t);
				} else {
					for (var n = !1, r = Infinity, c = 0, l = 0; l < i.length; ++l) {
						var u = i[l];
						if (u.intersect(e)) {
							var d = new Z(0, 0, 0, 0);
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
						var t = new Z(0, 0, 0, 0);
						t.copy(e), i.push(t);
					}
					o ||= i.length >= a;
				}
			}
		}
		for (var l = this.__startIndex; l < this.__endIndex; ++l) {
			var u = e[l];
			if (u) {
				var d = u.shouldBePainted(n, r, !0, !0), f = u.__isRendered && (u.__dirty & 1 || !d) ? u.getPrevPaintRect() : null;
				f && c(f);
				var p = d && (u.__dirty & 1 || !u.__isRendered) ? u.getPaintRect() : null;
				p && c(p);
			}
		}
		for (var l = this.__prevStartIndex; l < this.__prevEndIndex; ++l) {
			var u = t[l], d = u && u.shouldBePainted(n, r, !0, !0);
			if (u && (!d || !u.__zr) && u.__isRendered) {
				var f = u.getPrevPaintRect();
				f && c(f);
			}
		}
		var m;
		do {
			m = !1;
			for (var l = 0; l < i.length;) if (i[l].isZero()) i.splice(l, 1);
			else {
				for (var h = l + 1; h < i.length;) i[l].intersect(i[h]) ? (m = !0, i[l].union(i[h]), i.splice(h, 1)) : h++;
				l++;
			}
		} while (m);
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
				me(t) ? (o = (t.global || t.__width === r && t.__height === a) && t.__canvasGradient || lC(i, t, {
					x: 0,
					y: 0,
					width: r,
					height: a
				}), t.__canvasGradient = o, t.__width = r, t.__height = a) : he(t) && (t.scaleX = t.scaleX || l, t.scaleY = t.scaleY || l, o = xC(i, t, { dirty: function() {
					u.setUnpainted(), u.painter.refresh();
				} })), i.save(), i.fillStyle = o || t, i.fillRect(e, n, r, a), i.restore();
			}
			s && (i.save(), i.globalAlpha = c, i.drawImage(d, e, n, r, a), i.restore());
		}
		!n || s ? f(0, 0, a, o) : n.length && I(n, function(e) {
			f(e.x * l, e.y * l, e.width * l, e.height * l);
		});
	}, t;
}(Ai), mR = 1e5, hR = 314159, gR = .01, _R = .001;
function vR(e) {
	return e ? e.__builtin__ ? !0 : typeof e.resize == "function" && typeof e.refresh == "function" : !1;
}
function yR(e, t) {
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
var bR = function() {
	function e(e, t, n, r) {
		this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
		var i = !e.nodeName || e.nodeName.toUpperCase() === "CANVAS";
		this._opts = n = N({}, n || {}), this.dpr = n.devicePixelRatio || Mi, this._singleCanvas = i, this.root = e, e.style && (Ne(e), e.innerHTML = ""), this.storage = t;
		var a = this._zlevelList;
		this._prevDisplayList = [];
		var o = this._layers;
		if (i) {
			var s = e, c = s.width, l = s.height;
			n.width != null && (c = n.width), n.height != null && (l = n.height), this.dpr = n.devicePixelRatio || 1, s.width = c * this.dpr, s.height = l * this.dpr, this._width = c, this._height = l;
			var u = new pR(s, this, this.dpr);
			u.__builtin__ = !0, u.initContext(), o[hR] = u, u.zlevel = hR, a.push(hR), this._domRoot = e;
		} else {
			this._width = fC(e, 0, n), this._height = fC(e, 1, n);
			var d = this._domRoot = yR(this._width, this._height);
			e.appendChild(d);
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
		var t = this.storage.getDisplayList(!0), n = this._prevDisplayList, r = this._zlevelList;
		this._redrawId = Math.random(), this._paintList(t, n, e, this._redrawId);
		for (var i = 0; i < r.length; i++) {
			var a = r[i], o = this._layers[a];
			if (!o.__builtin__ && o.refresh) {
				var s = i === 0 ? this._backgroundColor : null;
				o.refresh(s);
			}
		}
		return this._opts.useDirtyRect && (this._prevDisplayList = t.slice()), this;
	}, e.prototype.refreshHover = function() {
		this._paintHoverList(this.storage.getDisplayList(!1));
	}, e.prototype._paintHoverList = function(e) {
		var t = e.length, n = this._hoverlayer;
		if (n && n.clear(), t) {
			for (var r = {
				inHover: !0,
				viewWidth: this._width,
				viewHeight: this._height
			}, i, a = 0; a < t; a++) {
				var o = e[a];
				o.__inHover && (n ||= this._hoverlayer = this.getLayer(mR), i || (i = n.ctx, i.save()), VC(i, o, r, a === t - 1));
			}
			i && i.restore();
		}
	}, e.prototype.getHoverLayer = function() {
		return this.getLayer(mR);
	}, e.prototype.paintOne = function(e, t) {
		BC(e, t);
	}, e.prototype._paintList = function(e, t, n, r) {
		if (this._redrawId === r) {
			n ||= !1, this._updateLayerStatus(e);
			var i = this._doPaintList(e, t, n), a = i.finished, o = i.needsRefreshHover;
			if (this._needsManuallyCompositing && this._compositeManually(), o && this._paintHoverList(e), a) this.eachLayer(function(e) {
				e.afterBrush && e.afterBrush();
			});
			else {
				var s = this;
				Pb(function() {
					s._paintList(e, t, n, r);
				});
			}
		}
	}, e.prototype._compositeManually = function() {
		var e = this.getLayer(hR).ctx, t = this._domRoot.width, n = this._domRoot.height;
		e.clearRect(0, 0, t, n), this.eachBuiltinLayer(function(r) {
			r.virtual && e.drawImage(r.dom, 0, 0, t, n);
		});
	}, e.prototype._doPaintList = function(e, t, n) {
		for (var r = this, i = [], a = this._opts.useDirtyRect, o = 0; o < this._zlevelList.length; o++) {
			var s = this._zlevelList[o], c = this._layers[s];
			c.__builtin__ && c !== this._hoverlayer && (c.__dirty || n) && i.push(c);
		}
		for (var l = !0, u = !1, d = function(o) {
			var s = i[o], c = s.ctx, d = a && s.createRepaintRects(e, t, f._width, f._height), p = n ? s.__startIndex : s.__drawIndex, m = !n && s.incremental && Date.now, h = m && Date.now(), g = s.zlevel === f._zlevelList[0] ? f._backgroundColor : null;
			if (s.__startIndex === s.__endIndex) s.clear(!1, g, d);
			else if (p === s.__startIndex) {
				var _ = e[p];
				(!_.incremental || !_.notClear || n) && s.clear(!1, g, d);
			}
			p === -1 && (console.error("For some unknown reason. drawIndex is -1"), p = s.__startIndex);
			var v, y = function(t) {
				var n = {
					inHover: !1,
					allClipped: !1,
					prevEl: null,
					viewWidth: r._width,
					viewHeight: r._height
				};
				for (v = p; v < s.__endIndex; v++) {
					var i = e[v];
					if (i.__inHover && (u = !0), r._doPaintEl(i, s, a, t, n, v === s.__endIndex - 1), m && Date.now() - h > 15) break;
				}
				n.prevElClipPaths && c.restore();
			};
			if (d) {
				if (d.length === 0) v = s.__endIndex;
				else for (var b = f.dpr, x = 0; x < d.length; ++x) {
					var S = d[x];
					c.save(), c.beginPath(), c.rect(S.x * b, S.y * b, S.width * b, S.height * b), c.clip(), y(S), c.restore();
				}
			} else c.save(), y(), c.restore();
			s.__drawIndex = v, s.__drawIndex < s.__endIndex && (l = !1);
		}, f = this, p = 0; p < i.length; p++) d(p);
		return Y.wxa && I(this._layers, function(e) {
			e && e.ctx && e.ctx.draw && e.ctx.draw();
		}), {
			finished: l,
			needsRefreshHover: u
		};
	}, e.prototype._doPaintEl = function(e, t, n, r, i, a) {
		var o = t.ctx;
		if (n) {
			var s = e.getPaintRect();
			(!r || s && s.intersect(r)) && (VC(o, e, i, a), e.setPrevPaintRect(s));
		} else VC(o, e, i, a);
	}, e.prototype.getLayer = function(e, t) {
		this._singleCanvas && !this._needsManuallyCompositing && (e = hR);
		var n = this._layers[e];
		return n || (n = new pR("zr_" + e, this, this.dpr), n.zlevel = e, n.__builtin__ = !0, this._layerConfig[e] ? M(n, this._layerConfig[e], !0) : this._layerConfig[e - gR] && M(n, this._layerConfig[e - gR], !0), t && (n.virtual = t), this.insertLayer(e, n), n.initContext()), n;
	}, e.prototype.insertLayer = function(e, t) {
		var n = this._layers, r = this._zlevelList, i = r.length, a = this._domRoot, o = null, s = -1;
		if (!n[e] && vR(t)) {
			if (i > 0 && e > r[0]) {
				for (s = 0; s < i - 1 && !(r[s] < e && r[s + 1] > e); s++);
				o = n[r[s]];
			}
			if (r.splice(s + 1, 0, e), n[e] = t, !t.virtual) {
				if (o) {
					var c = o.dom;
					c.nextSibling ? a.insertBefore(t.dom, c.nextSibling) : a.appendChild(t.dom);
				} else a.firstChild ? a.insertBefore(t.dom, a.firstChild) : a.appendChild(t.dom);
			}
			t.painter ||= this;
		}
	}, e.prototype.eachLayer = function(e, t) {
		for (var n = this._zlevelList, r = 0; r < n.length; r++) {
			var i = n[r];
			e.call(t, this._layers[i], i);
		}
	}, e.prototype.eachBuiltinLayer = function(e, t) {
		for (var n = this._zlevelList, r = 0; r < n.length; r++) {
			var i = n[r], a = this._layers[i];
			a.__builtin__ && e.call(t, a, i);
		}
	}, e.prototype.eachOtherLayer = function(e, t) {
		for (var n = this._zlevelList, r = 0; r < n.length; r++) {
			var i = n[r], a = this._layers[i];
			a.__builtin__ || e.call(t, a, i);
		}
	}, e.prototype.getLayers = function() {
		return this._layers;
	}, e.prototype._updateLayerStatus = function(e) {
		this.eachBuiltinLayer(function(e, t) {
			e.__dirty = e.__used = !1;
		});
		function t(e) {
			i && (i.__endIndex !== e && (i.__dirty = !0), i.__endIndex = e);
		}
		if (this._singleCanvas) for (var n = 1; n < e.length; n++) {
			var r = e[n];
			if (r.zlevel !== e[n - 1].zlevel || r.incremental) {
				this._needsManuallyCompositing = !0;
				break;
			}
		}
		for (var i = null, a = 0, o, s = 0; s < e.length; s++) {
			var r = e[s], c = r.zlevel, l = void 0;
			o !== c && (o = c, a = 0), r.incremental ? (l = this.getLayer(c + _R, this._needsManuallyCompositing), l.incremental = !0, a = 1) : l = this.getLayer(c + (a > 0 ? gR : 0), this._needsManuallyCompositing), l.__builtin__ || ee("ZLevel " + c + " has been used by unkown layer " + l.id), l !== i && (l.__used = !0, l.__startIndex !== s && (l.__dirty = !0), l.__startIndex = s, l.incremental ? l.__drawIndex = -1 : l.__drawIndex = s, t(s), i = l), r.__dirty & 1 && !r.__inHover && (l.__dirty = !0, l.incremental && l.__drawIndex < 0 && (l.__drawIndex = s));
		}
		t(s), this.eachBuiltinLayer(function(e, t) {
			!e.__used && e.getElementCount() > 0 && (e.__dirty = !0, e.__startIndex = e.__endIndex = e.__drawIndex = 0), e.__dirty && e.__drawIndex < 0 && (e.__drawIndex = e.__startIndex);
		});
	}, e.prototype.clear = function() {
		return this.eachBuiltinLayer(this._clearLayer), this;
	}, e.prototype._clearLayer = function(e) {
		e.clear();
	}, e.prototype.setBackgroundColor = function(e) {
		this._backgroundColor = e, I(this._layers, function(e) {
			e.setUnpainted();
		});
	}, e.prototype.configLayer = function(e, t) {
		if (t) {
			var n = this._layerConfig;
			n[e] ? M(n[e], t, !0) : n[e] = t;
			for (var r = 0; r < this._zlevelList.length; r++) {
				var i = this._zlevelList[r];
				if (i === e || i === e + gR) {
					var a = this._layers[i];
					M(a, n[e], !0);
				}
			}
		}
	}, e.prototype.delLayer = function(e) {
		var t = this._layers, n = this._zlevelList, r = t[e];
		r && (r.dom.parentNode.removeChild(r.dom), delete t[e], n.splice(F(n, e), 1));
	}, e.prototype.resize = function(e, t) {
		if (this._domRoot.style) {
			var n = this._domRoot;
			n.style.display = "none";
			var r = this._opts, i = this.root;
			if (e != null && (r.width = e), t != null && (r.height = t), e = fC(i, 0, r), t = fC(i, 1, r), n.style.display = "", this._width !== e || t !== this._height) {
				for (var a in n.style.width = e + "px", n.style.height = t + "px", this._layers) this._layers.hasOwnProperty(a) && this._layers[a].resize(e, t);
				this.refresh(!0);
			}
			this._width = e, this._height = t;
		} else {
			if (e == null || t == null) return;
			this._width = e, this._height = t, this.getLayer(hR).resize(e, t);
		}
		return this;
	}, e.prototype.clearLayer = function(e) {
		var t = this._layers[e];
		t && t.clear();
	}, e.prototype.dispose = function() {
		this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
	}, e.prototype.getRenderedCanvas = function(e) {
		if (e ||= {}, this._singleCanvas && !this._compositeManually) return this._layers[hR].dom;
		var t = new pR("image", this, e.pixelRatio || this.dpr);
		t.initContext(), t.clear(!1, e.backgroundColor || this._backgroundColor);
		var n = t.ctx;
		if (e.pixelRatio <= this.dpr) {
			this.refresh();
			var r = t.dom.width, i = t.dom.height;
			this.eachLayer(function(e) {
				e.__builtin__ ? n.drawImage(e.dom, 0, 0, r, i) : e.renderToCanvas && (n.save(), e.renderToCanvas(n), n.restore());
			});
		} else for (var a = {
			inHover: !1,
			viewWidth: this._width,
			viewHeight: this._height
		}, o = this.storage.getDisplayList(!0), s = 0, c = o.length; s < c; s++) {
			var l = o[s];
			VC(n, l, a, s === c - 1);
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
function xR(e) {
	e.registerPainter("canvas", bR);
}
//#endregion
//#region src/lib/utils/resolveJavaScriptFunctions.ts
var SR = "__js_eval__";
function CR(e) {
	if (typeof e != "object" || !e) return e;
	if (Array.isArray(e)) return e.map(CR);
	let t = Object.entries(e);
	if (Object.prototype.hasOwnProperty.call(e, SR)) {
		if (t.length !== 1 || typeof e[SR] != "string") throw TypeError(`[DashEChartsX] ${SR} must be the only key in an object and contain JavaScript source.`);
		let n = e[SR], r = Function(`return (${n});`)();
		if (typeof r != "function") throw TypeError(`[DashEChartsX] ${SR} must evaluate to a JavaScript function.`);
		return r;
	}
	return Object.fromEntries(t.map(([e, t]) => [e, CR(t)]));
}
//#endregion
//#region src/lib/utils/loadEChartsGL.ts
var wR;
function TR() {
	let e = Array.from(document.scripts).find((e) => {
		if (!e.src) return !1;
		let t = new URL(e.src, document.baseURI).pathname.split("/").pop();
		return /^dash_echartsx(?:\.v.+)?\.umd\.js$/.test(t ?? "");
	});
	if (!e) throw Error("[DashEChartsX] Cannot determine the optional ECharts-GL bundle URL. Set gl_bundle_url explicitly.");
	return new URL("dash_echartsx.gl.umd.js", e.src).href;
}
function ER(e) {
	let t = window;
	return t.dash_echartsx_gl ? Promise.resolve() : wR || (wR = new Promise((n, r) => {
		let i = e ?? TR(), a = document.createElement("script");
		a.async = !0, a.src = i, a.onload = () => {
			t.dash_echartsx_gl ? n() : (a.remove(), r(/* @__PURE__ */ Error(`[DashEChartsX] ECharts-GL bundle loaded without registering its runtime: ${i}`)));
		}, a.onerror = () => {
			a.remove(), r(/* @__PURE__ */ Error(`[DashEChartsX] Unable to load ECharts-GL bundle: ${i}`));
		}, document.head.appendChild(a);
	}).catch((e) => {
		throw wR = void 0, e;
	}), wR);
}
//#endregion
//#region src/lib/components/DashEChartsX.tsx
HT([
	Gv,
	pM,
	G_,
	yA,
	Wy,
	mF,
	vA,
	oN,
	LP,
	dP,
	rP,
	rI,
	xR,
	dR
]);
var DR = {
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
}, OR = /* @__PURE__ */ new Set([
	"highlight",
	"downplay",
	"showTip",
	"hideTip",
	"selectDataRange",
	"legendSelect"
]);
function kR(e, t) {
	if (!t || typeof t != "object" || Array.isArray(t)) {
		console.warn("[DashEChartsX] dispatch_action must be an object with a supported string 'type'.");
		return;
	}
	let n = t;
	if (typeof n.type != "string" || !OR.has(n.type)) console.warn(`[DashEChartsX] Ignoring unsupported dispatch_action type: ${String(n.type)}. Supported types: ${[...OR].join(", ")}.`);
	else try {
		e.dispatchAction(n);
	} catch (e) {
		console.warn(`[DashEChartsX] Failed to dispatch ECharts action '${n.type}'.`, e);
	}
}
function AR(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) return {};
	let n = e, r = {};
	for (let e of t) if (e in n) try {
		let t = JSON.stringify(n[e]);
		t !== void 0 && (r[e] = JSON.parse(t));
	} catch {}
	return r;
}
var jR = t(function(t, a) {
	let { id: o, className: s, style: c, option: l, maps: u, enable_gl: d = !1, gl_bundle_url: f, notMerge: p = !1, lazyUpdate: m = !1, renderer: h = "canvas", theme: g, dispatch_action: _ } = t, v = t.setProps, y = i(null), b = i(null), x = i(void 0);
	return n(() => {
		x.current = v;
	}, [v]), r(a, () => ({ getInstance: () => b.current }), []), n(() => {
		let e = y.current;
		if (!e) return;
		let t = mT(e, typeof g == "string" ? DR[g] : g, { renderer: h });
		b.current = t;
		let n = [
			["click", (e) => x.current?.({ click_data: AR(e, [
				"seriesIndex",
				"dataIndex",
				"name",
				"value"
			]) })],
			["dblclick", (e) => x.current?.({ dblclick_data: AR(e, [
				"seriesIndex",
				"dataIndex",
				"name",
				"value"
			]) })],
			["mouseover", (e) => x.current?.({ hover_data: AR(e, [
				"seriesIndex",
				"dataIndex",
				"name",
				"value"
			]) })],
			["selectchanged", (e) => x.current?.({ selected_data: AR(e, [
				"type",
				"fromAction",
				"isFromClick",
				"seriesIndex",
				"dataIndex",
				"name",
				"value",
				"selected"
			]) })],
			["legendselectchanged", (e) => x.current?.({ legend_status: AR(e, ["name", "selected"]) })],
			["legendselected", (e) => x.current?.({ legend_status: AR(e, ["name", "selected"]) })],
			["datazoom", (e) => x.current?.({ zoom_data: AR(e, [
				"dataZoomId",
				"dataZoomIndex",
				"start",
				"end",
				"startValue",
				"endValue",
				"batch"
			]) })]
		];
		n.forEach(([e, n]) => t.on(e, n));
		let r = null, i = () => {
			r === null && (r = requestAnimationFrame(() => {
				r = null, e.clientWidth > 0 && e.clientHeight > 0 && t.resize();
			}));
		}, a = () => {
			r !== null && (cancelAnimationFrame(r), r = null);
		};
		if (typeof ResizeObserver < "u") {
			let r = new ResizeObserver(i);
			return r.observe(e), i(), () => {
				r.disconnect(), a(), n.forEach(([e, n]) => t.off(e, n)), t.dispose(), b.current = null;
			};
		}
		return window.addEventListener("resize", i), i(), () => {
			window.removeEventListener("resize", i), a(), n.forEach(([e, n]) => t.off(e, n)), t.dispose(), b.current = null;
		};
	}, [h, g]), n(() => {
		u?.forEach(({ name: e, geoJSON: t, specialAreas: n }) => {
			IT(e, t, n);
		});
	}, [u]), n(() => {
		let e = !0, t = () => {
			e && l && b.current?.setOption(CR(l), p, m);
		};
		return d ? ER(f).then(t).catch((e) => {
			console.error("[DashEChartsX] Failed to load the optional ECharts-GL bundle.", e);
		}) : t(), () => {
			e = !1;
		};
	}, [
		d,
		f,
		m,
		u,
		p,
		l,
		h,
		g
	]), n(() => {
		_ !== void 0 && b.current && kR(b.current, _);
	}, [_]), /* @__PURE__ */ e.createElement("div", {
		id: o,
		ref: y,
		className: s,
		style: {
			width: "100%",
			minWidth: 0,
			aspectRatio: "16 / 9",
			...c
		}
	});
});
jR.displayName = "DashEChartsX";
//#endregion
//#region node_modules/echarts/lib/echarts.js
var MR = /* @__PURE__ */ o({
	Axis: () => xD,
	ChartView: () => p_,
	ComponentModel: () => $,
	ComponentView: () => mS,
	List: () => Cp,
	Model: () => zd,
	PRIORITY: () => xw,
	SeriesModel: () => xg,
	color: () => ur,
	connect: () => hT,
	dataTool: () => zT,
	default: () => NR,
	dependencies: () => iw,
	disConnect: () => _T,
	disconnect: () => gT,
	dispose: () => vT,
	env: () => Y,
	extendChartView: () => xI,
	extendComponentModel: () => vI,
	extendComponentView: () => yI,
	extendSeriesModel: () => bI,
	format: () => gI,
	getCoordinateSystemDimensions: () => kT,
	getInstanceByDom: () => yT,
	getInstanceById: () => bT,
	getMap: () => LT,
	graphic: () => hI,
	helper: () => sI,
	init: () => mT,
	innerDrawElementOnCanvas: () => BC,
	matrix: () => lt,
	number: () => pI,
	parseGeoJSON: () => xk,
	parseGeoJson: () => xk,
	registerAction: () => DT,
	registerCoordinateSystem: () => OT,
	registerLayout: () => AT,
	registerLoading: () => PT,
	registerLocale: () => gm,
	registerMap: () => IT,
	registerPostInit: () => wT,
	registerPostUpdate: () => TT,
	registerPreprocessor: () => ST,
	registerProcessor: () => CT,
	registerTheme: () => xT,
	registerTransform: () => RT,
	registerUpdateLifecycle: () => ET,
	registerVisual: () => jT,
	setCanvasCreator: () => FT,
	setPlatformAPI: () => g,
	throttle: () => dv,
	time: () => mI,
	use: () => HT,
	util: () => _I,
	vector: () => Qt,
	version: () => rw,
	zrUtil: () => _,
	zrender: () => nx
});
HT([xR, oI]);
var NR = { init: function() {
	return mT.apply(null, arguments);
} };
HT(MI);
//#endregion
export { jR as DashEChartsX, NI as _echartsCore, MR as _echartsLib };
