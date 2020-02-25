!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(r, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 137)
}([function(t, e) {
    var n = t.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = n)
}
, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(t, e, n) {
    var r = n(27)("wks")
      , o = n(19)
      , i = n(1).Symbol
      , a = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }
    ).store = r
}
, function(t, e, n) {
    var r = n(1)
      , o = n(0)
      , i = n(15)
      , a = n(9)
      , s = n(8)
      , c = function(t, e, n) {
        var l, u, f, h = t & c.F, d = t & c.G, p = t & c.S, y = t & c.P, v = t & c.B, g = t & c.W, x = d ? o : o[e] || (o[e] = {}), m = x.prototype, b = d ? r : p ? r[e] : (r[e] || {}).prototype;
        for (l in d && (n = e),
        n)
            (u = !h && b && void 0 !== b[l]) && s(x, l) || (f = u ? b[l] : n[l],
            x[l] = d && "function" != typeof b[l] ? n[l] : v && u ? i(f, r) : g && b[l] == f ? function(t) {
                var e = function(e, n, r) {
					//console.log(e, n)
                    if (this instanceof t) {
                        switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e,n)
                        }
                        return new t(e,n,r)
                    }
					
                    return t.apply(this, arguments)
                };
				// console.log(e)
                return e.prototype = t.prototype,
                e
            }(f) : y && "function" == typeof f ? i(Function.call, f) : f,
            y && ((x.virtual || (x.virtual = {}))[l] = f,
            t & c.R && m && !m[l] && a(m, l, f)))
    };
    c.F = 1,
    c.G = 2,
    c.S = 4,
    c.P = 8,
    c.B = 16,
    c.W = 32,
    c.U = 64,
    c.R = 128,
    t.exports = c
}
, function(t, e, n) {
    var r = n(7);
    t.exports = function(t) {
        if (!r(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, function(t, e, n) {
    t.exports = !n(10)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    var r = n(4)
      , o = n(40)
      , i = n(29)
      , a = Object.defineProperty;
    e.f = n(5) ? Object.defineProperty : function(t, e, n) {
        if (r(t),
        e = i(e, !0),
        r(n),
        o)
            try {
                return a(t, e, n)
            } catch (t) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (t[e] = n.value),
        t
    }
}
, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}
, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}
, function(t, e, n) {
    var r = n(6)
      , o = n(21);
    t.exports = n(5) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}
, function(t, e, n) {
    var r = n(47)
      , o = n(25);
    t.exports = function(t) {
        return r(o(t))
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(n(75));
    e.default = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                (0,
                r.default)(t, o.key, o)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
}
, function(t, e) {
    t.exports = !0
}
, function(t, e, n) {
    var r = n(20);
    t.exports = function(t, e, n) {
        if (r(t),
        void 0 === e)
            return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}
, function(t, e) {
    t.exports = {}
}
, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}
, function(t, e, n) {
    var r = n(25);
    t.exports = function(t) {
        return Object(r(t))
    }
}
, function(t, e) {
    var n = 0
      , r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}
, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}
, function(t, e, n) {
    var r = n(46)
      , o = n(32);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}
, function(t, e, n) {
    var r = n(6).f
      , o = n(8)
      , i = n(2)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}
, function(t, e) {
    e.f = {}.propertyIsEnumerable
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, e, n) {
    var r = n(27)("keys")
      , o = n(19);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}
, function(t, e, n) {
    var r = n(0)
      , o = n(1)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(14) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(t, e, n) {
    var r = n(7)
      , o = n(1).document
      , i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}
, function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
        if (!r(t))
            return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
            return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, e) {
    var n = Math.ceil
      , r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}
, function(t, e, n) {
    var r = n(4)
      , o = n(82)
      , i = n(32)
      , a = n(26)("IE_PROTO")
      , s = function() {}
      , c = function() {
        var t, e = n(28)("iframe"), r = i.length;
        for (e.style.display = "none",
        n(49).appendChild(e),
        e.src = "javascript:",
        (t = e.contentWindow.document).open(),
        t.write("<script>document.F=Object<\/script>"),
        t.close(),
        c = t.F; r--; )
            delete c.prototype[i[r]];
        return c()
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t),
        n = new s,
        s.prototype = null,
        n[a] = t) : n = c(),
        void 0 === e ? n : o(n, e)
    }
}
, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e, n) {
    e.f = n(2)
}
, function(t, e, n) {
    var r = n(1)
      , o = n(0)
      , i = n(14)
      , a = n(33)
      , s = n(6).f;
    t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}
, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}
, function(t, e, n) {
    "use strict";
    var r = n(20);
    t.exports.f = function(t) {
        return new function(t) {
            var e, n;
            this.promise = new t(function(t, r) {
                if (void 0 !== e || void 0 !== n)
                    throw TypeError("Bad Promise constructor");
                e = t,
                n = r
            }
            ),
            this.resolve = r(e),
            this.reject = r(n)
        }
        (t)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(117),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(72),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(8)
      , o = n(18)
      , i = n(26)("IE_PROTO")
      , a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}
, function(t, e, n) {
    t.exports = !n(5) && !n(10)(function() {
        return 7 != Object.defineProperty(n(28)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(n(42));
    e.default = function(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0,
        r.default)(e)) && "function" != typeof e ? t : e
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = a(n(78))
      , o = a(n(88))
      , i = "function" == typeof o.default && "symbol" == typeof r.default ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t
    }
    ;
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(t) {
        return void 0 === t ? "undefined" : i(t)
    }
    : function(t) {
        return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : i(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(80)(!0);
    n(44)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(14)
      , o = n(3)
      , i = n(45)
      , a = n(9)
      , s = n(16)
      , c = n(81)
      , l = n(23)
      , u = n(39)
      , f = n(2)("iterator")
      , h = !([].keys && "next"in [].keys())
      , d = function() {
        return this
    };
    t.exports = function(t, e, n, p, y, v, g) {
        c(n, e, p);
        var x, m, b, w = function(t) {
            if (!h && t in S)
                return S[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this,t)
            }
        }, k = e + " Iterator", A = "values" == y, E = !1, S = t.prototype, L = S[f] || S["@@iterator"] || y && S[y], _ = L || w(y), H = y ? A ? w("entries") : _ : void 0, F = "Array" == e && S.entries || L;
        if (F && (b = u(F.call(new t))) !== Object.prototype && b.next && (l(b, k, !0),
        r || "function" == typeof b[f] || a(b, f, d)),
        A && L && "values" !== L.name && (E = !0,
        _ = function() {
            return L.call(this)
        }
        ),
        r && !g || !h && !E && S[f] || a(S, f, _),
        s[e] = _,
        s[k] = d,
        y)
            if (x = {
                values: A ? _ : w("values"),
                keys: v ? _ : w("keys"),
                entries: H
            },
            g)
                for (m in x)
                    m in S || i(S, m, x[m]);
            else
                o(o.P + o.F * (h || E), e, x);
        return x
    }
}
, function(t, e, n) {
    t.exports = n(9)
}
, function(t, e, n) {
    var r = n(8)
      , o = n(11)
      , i = n(83)(!1)
      , a = n(26)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t), c = 0, l = [];
        for (n in s)
            n != a && r(s, n) && l.push(n);
        for (; e.length > c; )
            r(s, n = e[c++]) && (~i(l, n) || l.push(n));
        return l
    }
}
, function(t, e, n) {
    var r = n(17);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}
, function(t, e, n) {
    var r = n(30)
      , o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}
, function(t, e, n) {
    var r = n(1).document;
    t.exports = r && r.documentElement
}
, function(t, e, n) {
    n(85);
    for (var r = n(1), o = n(9), i = n(16), a = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var l = s[c]
          , u = r[l]
          , f = u && u.prototype;
        f && !f[a] && o(f, a, l),
        i[l] = i.Array
    }
}
, function(t, e, n) {
    var r = n(46)
      , o = n(32).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, o)
    }
}
, function(t, e, n) {
    var r = n(24)
      , o = n(21)
      , i = n(11)
      , a = n(29)
      , s = n(8)
      , c = n(40)
      , l = Object.getOwnPropertyDescriptor;
    e.f = n(5) ? l : function(t, e) {
        if (t = i(t),
        e = a(e, !0),
        c)
            try {
                return l(t, e)
            } catch (t) {}
        if (s(t, e))
            return o(!r.f.call(t, e), t[e])
    }
}
, function(t, e) {}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = a(n(97))
      , o = a(n(101))
      , i = a(n(42));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0,
            i.default)(e)));
        t.prototype = (0,
        o.default)(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (r.default ? (0,
        r.default)(t, e) : t.__proto__ = e)
    }
}
, function(t, e) {
    t.exports = React
}
, function(t, e) {
    t.exports = tycReducer
}
, function(t, e, n) {
    t.exports = {
        default: n(106),
        __esModule: !0
    }
}
, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || ""
                      , r = t[3];
                    if (!r)
                        return n;
                    if (e && "function" == typeof btoa) {
                        var o = function(t) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                        }(r)
                          , i = r.sources.map(function(t) {
                            return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }
        ,
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a))
            }
        }
        ,
        e
    }
}
, function(t, e, n) {
    var r = {}
      , o = function(t) {
        var e;
        return function() {
            return void 0 === e && (e = t.apply(this, arguments)),
            e
        }
    }(function() {
        return window && document && document.all && !window.atob
    })
      , i = function(t) {
        var e = {};
        return function(t) {
            if ("function" == typeof t)
                return t();
            if (void 0 === e[t]) {
                var n = function(t) {
                    return document.querySelector(t)
                }
                .call(this, t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                e[t] = n
            }
            return e[t]
        }
    }()
      , a = null
      , s = 0
      , c = []
      , l = n(110);
    function u(t, e) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n]
              , i = r[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++)
                    i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++)
                    i.parts.push(v(o.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < o.parts.length; a++)
                    s.push(v(o.parts[a], e));
                r[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function f(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o]
              , a = e.base ? i[0] + e.base : i[0]
              , s = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
    function h(t, e) {
        var n = i(t.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === t.insertAt)
            r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
            c.push(e);
        else if ("bottom" === t.insertAt)
            n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = i(t.insertInto + " " + t.insertAt.before);
            n.insertBefore(e, o)
        }
    }
    function d(t) {
        if (null === t.parentNode)
            return !1;
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
    }
    function p(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        y(e, t.attrs),
        h(t, e),
        e
    }
    function y(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }
    function v(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
            if (!(i = e.transform(t.css)))
                return function() {}
                ;
            t.css = i
        }
        if (e.singleton) {
            var c = s++;
            n = a || (a = p(e)),
            r = x.bind(null, n, c, !1),
            o = x.bind(null, n, c, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                t.attrs.rel = "stylesheet",
                y(e, t.attrs),
                h(t, e),
                e
            }(e),
            r = function(t, e, n) {
                var r = n.css
                  , o = n.sourceMap
                  , i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = l(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([r],{
                    type: "text/css"
                })
                  , s = t.href;
                t.href = URL.createObjectURL(a),
                s && URL.revokeObjectURL(s)
            }
            .bind(null, n, e),
            o = function() {
                d(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = p(e),
            r = function(t, e) {
                var n = e.css
                  , r = e.media;
                r && t.setAttribute("media", r);
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, n),
            o = function() {
                d(n)
            }
            );
        return r(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                r(t = e)
            } else
                o()
        }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
        var n = f(t, e);
        return u(n, e),
        function(t) {
            for (var o = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (s = r[a.id]).refs--,
                o.push(s)
            }
            t && u(f(t, e), e);
            for (i = 0; i < o.length; i++) {
                var s;
                if (0 === (s = o[i]).refs) {
                    for (var c = 0; c < s.parts.length; c++)
                        s.parts[c]();
                    delete r[s.id]
                }
            }
        }
    }
    ;
    var g = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n,
            t.filter(Boolean).join("\n")
        }
    }();
    function x(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet)
            t.styleSheet.cssText = g(e, o);
        else {
            var i = document.createTextNode(o)
              , a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }
}
, function(t, e, n) {
    var r = n(17)
      , o = n(2)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}
, function(t, e, n) {
    var r = n(4)
      , o = n(20)
      , i = n(2)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n)
    }
}
, function(t, e, n) {
    var r, o, i, a = n(15), s = n(124), c = n(49), l = n(28), u = n(1), f = u.process, h = u.setImmediate, d = u.clearImmediate, p = u.MessageChannel, y = u.Dispatch, v = 0, g = {}, x = function() {
        var t = +this;
        if (g.hasOwnProperty(t)) {
            var e = g[t];
            delete g[t],
            e()
        }
    }, m = function(t) {
        x.call(t.data)
    };
    h && d || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
        return g[++v] = function() {
            s("function" == typeof t ? t : Function(t), e)
        }
        ,
        r(v),
        v
    }
    ,
    d = function(t) {
        delete g[t]
    }
    ,
    "process" == n(17)(f) ? r = function(t) {
        f.nextTick(a(x, t, 1))
    }
    : y && y.now ? r = function(t) {
        y.now(a(x, t, 1))
    }
    : p ? (i = (o = new p).port2,
    o.port1.onmessage = m,
    r = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function(t) {
        u.postMessage(t + "", "*")
    }
    ,
    u.addEventListener("message", m, !1)) : r = "onreadystatechange"in l("script") ? function(t) {
        c.appendChild(l("script")).onreadystatechange = function() {
            c.removeChild(this),
            x.call(t)
        }
    }
    : function(t) {
        setTimeout(a(x, t, 1), 0)
    }
    ),
    t.exports = {
        set: h,
        clear: d
    }
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}
, function(t, e, n) {
    var r = n(4)
      , o = n(7)
      , i = n(36);
    t.exports = function(t, e) {
        if (r(t),
        o(e) && e.constructor === t)
            return e;
        var n = i.f(t);
        return (0,
        n.resolve)(e),
        n.promise
    }
}
, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.pre_relation_company = exports.getUserInfo = exports.getEnterpriseMap = void 0;
    var _regenerator = __webpack_require__(113)
      , _regenerator2 = _interopRequireDefault(_regenerator)
      , _asyncToGenerator2 = __webpack_require__(116)
      , _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2)
      , _promise = __webpack_require__(37)
      , _promise2 = _interopRequireDefault(_promise);
	  //console.log(_promise)
      var getEnterpriseMap = exports.getEnterpriseMap = function() {
        var _ref = (0,
        _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(nodeId) {
            var res, data, arr, fnStr, i, fxck, fxckStr;
            return _regenerator2.default.wrap(function _callee$(_context) {
				//console.log(_context)
                for (; ; )
                    switch (_context.prev = _context.next) {
                    case 0:
                        return _context.next = 2,
                        pre_relation_company(nodeId);
                    case 2:
                        // for (res = _context.sent,
                        // data = res.data,
                        // arr = data.v.split(","),
                        // fnStr = "",
                        // i = 0; i < arr.length; i++)
                        //     fnStr += String.fromCharCode(arr[i]);
                        // if (eval(fnStr),
                        // window.$SoGou$ = (0,
                        // _ms2.default)(nodeId),
                        // window.wtf) {
                        //     for (fxck = window.wtf().split(","),
                        //     fxckStr = "",
                        //     i = 0; i < fxck.length; i++)
                        //         fxckStr += window.$SoGou$[fxck[i]];
                        //     document.cookie = "_rutm=" + fxckStr + ";path=/;",
                        //     delete window.wtf
                        // }
                        return _context.next = 12,
                        get("/dis/enterpriseMap.json", {
                            id: '10517725' || nodeId
                        });
                    case 12:
                        return _context.abrupt("return", _context.sent);
                    case 13:
                    case "end":
                        return _context.stop()
                    }
            }, _callee, this)
        }));
        return function(t) {
            return _ref.apply(this, arguments)
        }
    }()
      , getUserInfo = exports.getUserInfo = function() {
        var t = (0,
        _asyncToGenerator3.default)(_regenerator2.default.mark(function t() {
            var e;
            return _regenerator2.default.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return (e = window.location.host).indexOf("dissss.tianyancha.com") >= 0 || e.indexOf("yufastd.tianyancha.com") >= 0 ? e = "https://capisss.tianyancha.com/" : e.indexOf("dis.tianyancha.com") >= 0 || e.indexOf("std.tianyancha.com") >= 0 ? e = "https://capi.tianyancha.com/" : (e.indexOf(!1) || e.indexOf(!1)) && (e = "http://10.2.20.63:10003/"),
                        t.next = 4,
                        get(e + "service-auth/service/disCheck");
                    case 4:
                        return t.abrupt("return", t.sent);
                    case 5:
                    case "end":
                        return t.stop()
                    }
            }, t, this)
        }));
        return function() {
            return t.apply(this, arguments)
        }
    }()
      , pre_relation_company = exports.pre_relation_company = function() {
        var t = (0,
        _asyncToGenerator3.default)(_regenerator2.default.mark(function t(e) {
            return _regenerator2.default.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        get("/qq/" + e + ".json?random=" + Date.now());
                    case 2:
                        return t.abrupt("return", t.sent);
                    case 3:
                    case "end":
                        return t.stop()
                    }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()
      , _axios = __webpack_require__(132)
      , _axios2 = _interopRequireDefault(_axios)
      , _ms = __webpack_require__(133)
      , _ms2 = _interopRequireDefault(_ms);
	  
	  
	  
	  
    function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    _axios2.default.interceptors.request.use(function(t) {
        return window._APP_AUTH && (window._APP_AUTH.token && (t.headers["X-AUTH-TOKEN"] = window._APP_AUTH.token),
        window._APP_AUTH.version && (t.headers.version = window._APP_AUTH.version),
        window._APP_AUTH.auth && (t.headers.Authorization = window._APP_AUTH.auth),
        window._APP_AUTH.channelID && (t.headers.channelID = window._APP_AUTH.channelID),
        window._APP_AUTH.deviceID && (t.headers.deviceID = window._APP_AUTH.deviceID)),
        t
    }, function(t) {
        return _promise2.default.reject(t)
    });
    var fmtUrl = function(t) {
        return "" + t
    }
      , cloud_get = function(t, e, n) {
        return t = fmtUrl(t),
        n = n || {},
        new _promise2.default(function(r, o) {
            _axios2.default.get(t, {
                headers: n,
                params: e,
                withCredentials: !0
            }).then(function(t) {
                r(t.data)
            }).catch(function(t) {
                o(t)
            })
        }
        )
    }
      , cloud_post = function(t, e, n) {
        return t = fmtUrl(t),
        n = n || {},
        new _promise2.default(function(r, o) {
            _axios2.default.post(t, e, {
                headers: n,
                withCredentials: !0
            }).then(function(t) {
                200 === t.status && r(t.data)
            }).catch(function(t) {
                o(t)
            })
        }
        )
    }
      , get = function(t, e) {
		  //console.log(t,e)
		// console.log(_promise2.default)
				return new _promise2.default(function(n, r) {
					//console.log(n)
					_axios2.default.get(t, {
						params: e
					}).then(function(t) {
						200 === t.status && n(t.data)
					}).catch(function(t) {
						//console.log(r)
						r(t)
					})
				}
				)
    }
      , post = function(t, e, n) {
        return n = n || {},
        new _promise2.default(function(r, o) {
            _axios2.default.post(t, e, {
                headers: n
            }).then(function(t) {
                200 === t.status && r(t.data)
            }).catch(function(t) {
                o(t)
            })
        }
        )
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(n(12))
      , o = i(n(13));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = function() {
        function t() {
            (0,
            r.default)(this, t),
            this.log = []
        }
        return (0,
        o.default)(t, [{
            key: "push",
            value: function(t) {
                this.log.push({
                    text: t,
                    time: Date.now()
                })
            }
        }, {
            key: "time_line",
            value: function() {
                return this.log.reduce(function(t, e) {
                    var n = t.value
                      , r = t.pre;
                    return null === r ? {
                        value: [],
                        pre: e
                    } : (n.push({
                        text: e.text,
                        time: e.time - r.time
                    }),
                    {
                        value: n,
                        pre: e
                    })
                }, {
                    value: [],
                    pre: null
                })
            }
        }, {
            key: "console",
            value: function(t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }
                ,
                e
            }(function() {
                var t = this.time_line();
                console.log(t.value.map(function(t) {
                    return t.text + ":" + t.time + "\n"
                }).join(""))
            })
        }]),
        t
    }();
    e.default = a
}
, function(t, e) {
    t.exports = tycD3
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.nameLength = function(t) {
        if (t) {
            var e = 0;
            /[\u0391-\uFFE5]/i.test(t) && (e = t.match(/[\u0391-\uFFE5]/g).length);
            var n = 0;
            return /[A-Z]/i.test(t) && (n = t.match(/[A-Z]/g).length),
            t.length + e + n / 3
        }
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = l(n(57))
      , o = l(n(12))
      , i = l(n(13))
      , a = l(n(66))
      , s = l(n(67))
      , c = n(68);
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = function() {
        function t(e, n) {
            var r = this;
            (0,
            o.default)(this, t),
            n = n || {},
            this.width = n.width || window.innerWidth,
            this.height = n.height || window.innerHeight,
            this.nodeHeight = 28,
            this.spacing = 10,
            this.nodePaddingLeft = 16,
            this.nodePaddingTop = 5,
            this.nodeTextFontSize = "12px",
            this.tagPaddingLeft = 4,
            this.tagPaddingTop = 14,
            this.showAllSpacing = 21,
            this.tittleSpacing = 8,
            this.imagePadding = {
                x: 100,
                y: 100
            },
            this.extendStatus = {
                branch: !0,
                invest: !0,
                holder: !0,
                executives: !0,
                historyHolder: !0,
                historyLegal: !0
            },
            this.mainLinkStart = {},
            this.nodeClassMap = {
                branch: "branch-node",
                invest: "invest-node",
                holder: "holder-node",
                executives: "executives-node",
                historyHolder: "history-holder-node",
                historyLegal: "history-legal-node"
            },
            this.nameMap = {
                branch: "分支机构",
                invest: "对外投资",
                holder: "股东",
                executives: "高管",
                historyHolder: "历史股东",
                historyLegal: "历史法定代表人"
            },
            this.buttonClass = {
                branch: "branch-button",
                invest: "invest-button",
                holder: "holder-button",
                executives: "executives-button",
                historyHolder: "history-holder-button",
                historyLegal: "history-legal-button"
            },
            this.navparamMap = {
                holder: "nav-main-holderCount",
                invest: "nav-main-inverstCount",
                branch: "nav-main-branchCount",
                executives: "nav-main-staffCount",
                historyHolder: "nav-main-pastHolderCount",
                historyLegal: ""
            },
            this.sweepFlagMap = {
                branch: 0,
                invest: 1,
                holder: 0,
                executives: 1,
                historyHolder: 0,
                historyLegal: 0
            },
            this.nodeInitPosition = {
                branch: {
                    baseOffset: {
                        x: 244,
                        y: 0
                    },
                    direction: 1,
                    alignment: 1,
                    positionX: 1
                },
                invest: {
                    baseOffset: {
                        x: 244,
                        y: -96
                    },
                    direction: -1,
                    alignment: 1,
                    positionX: 1
                },
                holder: {
                    baseOffset: {
                        x: -244,
                        y: -94
                    },
                    direction: -1,
                    alignment: -1,
                    positionX: -1
                },
                executives: {
                    baseOffset: {
                        x: -244,
                        y: 0
                    },
                    direction: 1,
                    alignment: -1,
                    positionX: -1
                },
                historyHolder: {
                    baseOffset: {
                        x: -126,
                        y: 163
                    },
                    direction: 1,
                    alignment: 1,
                    positionX: -1
                },
                historyLegal: {
                    baseOffset: {
                        x: 66,
                        y: 163
                    },
                    direction: 1,
                    alignment: 1,
                    positionX: 1
                }
            },
            this.buttonPosition = {
                branch: {
                    x: 68,
                    y: -28,
                    alignment: 1
                },
                invest: {
                    x: 68,
                    y: -123,
                    alignment: 1
                },
                holder: {
                    x: -160,
                    y: -123,
                    alignment: -1
                },
                executives: {
                    x: -160,
                    y: -28,
                    alignment: -1
                },
                historyHolder: {
                    x: -160,
                    y: 69,
                    alignment: -1
                },
                historyLegal: {
                    x: 32,
                    y: 69,
                    alignment: -1
                }
            },
            this.nodeLimit = 99,
            this.data = {},
            this.svg = e,
            this.scale = n.scale || 1,
            this.platform = n.platform,
            this.sysTimeLog = new a.default,
            this.d3svg = s.default.select("svg"),
            this.centerPointX = this.width / 2,
            this.centerPointY = this.height / 2;
            var i = this.zoom = s.default.zoom().scaleExtent([.4, 2]).on("zoom", function() {
                r.container.attr("transform", s.default.event.transform)
            });
            this.d3svg.attr("width", this.width).attr("height", this.height).call(i).on("dblclick.zoom", function() {})
        }
        return (0,
        i.default)(t, [{
            key: "clickHandler",
            value: function(t, e, n) {
                throw new Error("no implement")
            }
        }, {
            key: "setup",
            value: function(t) {
                var e = this;
                this.d3svg.on("click", function(t) {
					console.log("主板块")
                    "bg" === s.default.event.target.id && e.clickHandler()
                }),
                this.initData(t),
                this.draw()
            }
        }, {
            key: "initData",
            value: function(t) {
				// 初始化数据
				//console.log(t)
                this.root = {
                    id: t.id,
                    name: t.name,
                    entityType: t.entityType
                },
                this.generateNodeData(t.inverst, "invest"),  // 中心和几个箭头
                this.generateNodeData(t.holder, "holder"),  
                this.generateNodeData(t.branch, "branch"),
                this.generateNodeData(t.staff, "executives"),
                this.generateNodeData(t.historyHolder, "historyHolder"),
                this.generateNodeData(t.historyLegal, "historyLegal")
            }
        }, {
            key: "generateNodeData",
            value: function(t, e) {
                var n = this.spacing
                  , o = this.nodeHeight
                  , i = this.showAllSpacing
                  , a = this.navparamMap;
                this.blockWidth = "app" === this.platform ? 120 : 200;
                var s = this.nodeInitPosition[e].baseOffset
                  , c = this.nodeInitPosition[e].direction
                  , l = this.nodeInitPosition[e].alignment
                  , u = this.nodeInitPosition[e].positionX
                  , f = 0
                  , h = 84 * l;
                "historyLegal" !== e && "historyHolder" !== e || (h = 20 * l),
                t = t || [],
                this.data[e] = {
                    node: [],
                    link: [],
                    mainLink: [],
                    count: t.length
                };
                for (var d = this.data[e].mainLink, p = t.length > this.nodeLimit ? this.nodeLimit : t.length, y = {
                    y: s.y,
                    height: 0
                }, v = 0; v < p; v++) {
                    f = 0;
                    var g = (0,
                    r.default)({}, t[v])
                      , x = {
                        x: s.x - 60 * l + this.blockWidth / 2 * u
                    };
                    if ("historyLegal" != e && "historyHolder" != e || (x.x = s.x - 20 * l + this.blockWidth / 2 * u),
                    g.x = s.x + this.blockWidth / 2 * u,
                    g.amount && (f = 24),
                    g.tagList && g.tagList.length > 0 && (f = 28),
                    "historyHolder" == e && g.name.length > 5 || "historyLegal" == e && g.name.length > 18) {
                        var m = "historyLegal" == e ? 5 : 18;
                        f = 14 * parseInt(g.name.length / m)
                    }
                    if (g.y = 0 == v ? y.y : y.y + (y.height / 2 + (o + f) / 2 + n) * c,
                    0 == v) {
                        var b = {
                            x: s.x - h + this.blockWidth / 2 * u
                        };
                        b.y = "historyLegal" != e && "historyHolder" != e ? g.y : g.y - 38,
                        this.mainLinkStart[e] = b,
                        d.push(b)
                    }
                    x.y = 0 != v || "historyLegal" == e && "historyHolder" == e ? g.y - 2 * c : g.y;
                    var w = {
                        type: e,
                        start: x,
                        end: {
                            x: g.x - .5 * l,
                            y: g.y
                        }
                    };
                    g.height = o + f,
                    g.direction = c,
                    this.data[e].node.push(g),
                    this.data[e].link.push(w),
                    y.y = g.y,
                    y.height = g.height
                }
                if (t.length > this.nodeLimit) {
                    var k = {
                        type: 1,
                        nodeType: e,
                        isShowAll: !0,
                        name: "查看全部",
                        direction: c,
                        x: s.x + this.blockWidth / 2 * u,
                        id: this.root.id,
                        param: "nav=" + a[e],
                        height: o / 2,
                        entityType: this.root.entityType,
                        y: y.y + (y.height / 2 + o / 4 + i) * c
                    }
                      , A = {
                        type: e,
                        start: {
                            x: k.x - 60 * l,
                            y: k.y - 2 * c
                        },
                        end: {
                            x: k.x,
                            y: k.y
                        }
                    };
                    this.data[e].node.push(k),
                    this.data[e].link.push(A)
                }
                this.data[e].link.length > 0 && d.push({
                    x: this.data[e].link[this.data[e].link.length - 1].start.x,
                    y: this.data[e].link[this.data[e].link.length - 1].start.y
                })
            }
        }, {
            key: "draw",
            value: function() {
                var t = this;
                this.d3svg.empty(),
                this.d3svg.append("defs").append("pattern").attr("id", "watermark").attr("patternUnits", "userSpaceOnUse").attr("width", function() {
                    return "app" != t.platform ? 280 : 400
                }).attr("height", function() {
                    return "app" != t.platform ? 180 : 300
                }).attr("x", "0").attr("y", function() {
                    return "app" != t.platform ? 0 : 100
                }).append("image").attr("width", function() {
                    return "app" != t.platform ? 280 : 400
                }).attr("height", function() {
                    return "app" != t.platform ? 180 : 300
                })
				// .attr("x", "0").attr("y", "0").attr("xlink:href", "data:image/png;base64,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");
                var e = this.bgContainer = this.d3svg.append("rect");
                this.offsetWidth = 100,
                e.attr("width", this.width).attr("id", "bg").attr("height", this.height).attr("fill", "url(#watermark)"),
                this.container = this.d3svg.append("g"),
                this.eventContainer = this.container.append("g"),
                this.zoom.translateBy(this.d3svg, this.centerPointX, this.centerPointY),
                this.zoom.scaleTo(this.d3svg, this.scale),
                this.drawRoot(),
                this.drawArrow(),
                this.drawButtons("holder"),  // 绘制大分类的按钮
                this.drawButtons("executives"),
                this.drawButtons("invest"),
                this.drawButtons("branch"),  
                this.drawButtons("historyHolder"),
                this.drawButtons("historyLegal"),
                this.drawNodes("holder"),   // 绘制list数据
                this.drawNodes("invest"),
                this.drawNodes("branch"),
                this.drawNodes("executives"),
                this.drawNodes("historyLegal"),
                this.drawNodes("historyHolder")
            }
        }, {
            key: "drawRoot",
            value: function() {
                var t = this
                  , e = this.eventContainer.append("g")
                  , n = this.root.name
                  , r = "app" === this.platform ? 6 : 12
                  , o = this.blockWidth
                  , i = "app" === this.platform ? 14 : 16
                  , a = 0
                  , s = e.append("rect").style("fill", "#0084FF").style("opacity", .8).transition().duration(function() {
                    return "app" != t.platform ? 500 : 0
                }).attr("width", this.blockWidth).attr("x", 0).attr("y", 0).attr("rx", 2).attr("ry", 2);
                e.append("text").style("fill", "#fff").style("font-size", "14px").style("font-weight", "bold").attr("y", i + 3).selectAll("tspan.text").data(function(e) {
                    return t.chunkString(n, r)
                }).enter().append("tspan").text(function(t) {
                    return t
                }).classed("text", !0).attr("x", function(t) {
                    return (o - this.getComputedTextLength()) / 2
                }).attr("dy", function(t, e) {
                    return a++,
                    0 == e ? "1em" : 20
                }),
                s.attr("height", function() {
                    return t.blockHeight = 20 * a + 2 * i,
                    t.blockHeight
                }),
                e.attr("transform", function(e) {
                    return "translate(" + -t.blockWidth / 2 + "," + -t.blockHeight / 2 + ")"
                })
            }
        }, {
            key: "drawArrow",
            value: function() {
                var t = "0,0 20,0 20,-6 30,1 20,8 20,2 0,2"
                  , e = "translate(" + (this.blockWidth / 2 + 19) + ",0)";
                this.drawPolygon(this.eventContainer, t, "#0084FF", .5, e);
                var n = "translate(" + -(this.blockWidth / 2 + 49) + ",0)";
                this.drawPolygon(this.eventContainer, t, "#0084FF", .5, n);
                var r = "translate(" + (this.blockWidth / 2 + 19) + ",-38),rotate(-30)";
                this.drawPolygon(this.eventContainer, t, "#0084FF", .5, r);
                var o = "translate(" + (this.blockWidth / 2 + 45.9) + ",55.6),rotate(-150)";
                this.drawPolygon(this.eventContainer, t, "#0084FF", .5, o);
                var i = "translate(" + -(this.blockWidth / 2 + 45) + ",-53.5),rotate(30)";
                this.drawPolygon(this.eventContainer, t, "#0084FF", .5, i);
                var a = "translate(" + -(this.blockWidth / 2 + 46.4) + ",54.2),rotate(-30)";
                this.drawPolygon(this.eventContainer, t, "#0084FF", .5, a)
            }
        }, {
            key: "drawButtons",
            value: function(t) {
                var e = this
                  , n = this.eventContainer
                  , r = this.nodeTextFontSize
                  , o = this.nameMap[t]
                  , i = this.data[t].count || 0
                  , a = this.buttonClass[t]
                  , c = this.buttonPosition[t].alignment
                  , l = -1 == t.indexOf("history") ? 92 : 128
                  , u = -1 == t.indexOf("history") ? 48 : 84
                  , f = this.buttonPosition[t]
                  , h = f.x > 0 ? 1 : -1;
                f.x = f.x + h * this.blockWidth / 2;
                var d = -1 == c ? 28 : 16
                  , p = 10
                  , y = -1 == c ? 14 : 78
                  , v = 28
                  , g = n.append("g").classed(a + " pointer", !0).attr("transform", "translate(" + f.x + "," + f.y + ")").on("click", function() {
                    console.log("大分类")
					!function(t) {
                        e.extendStatus[t] = !e.extendStatus[t];
                        var n = e.extendStatus[t] ? "M-4 -1 H4 V1 H-4 Z" : "M-4 -1 H-1 V-4 H1 V-1 H4 V1 H1 V4 H-1 V1 H-4 Z";
                        s.default.select("#" + a + "-cross").attr("d", n),
                        e.drawNodes(t)
                    }(t)
                })
                  , x = (g.append("g").append("rect").attr("class", a + "-rect").attr("width", l).attr("height", 56).attr("rx", 2).attr("ry", 2),
                g.append("g").attr("transform", "translate(" + d + "," + p + ")"));
                x.append("text").text(o).style("font-size", r).attr("x", function() {
                    return (u - this.getBBox().width) / 2
                }).attr("y", function() {
                    return 14
                }).attr("fill", "#333").style("font-weight", "bold"),
                x.append("text").text(i).style("font-size", r).attr("y", function() {
                    return 32
                }).attr("x", function() {
                    return (u - this.getBBox().width) / 2
                }).attr("fill", "#666");
                if (i > 0) {
                    var m = g.append("g").attr("transform", "translate(" + y + "," + v + ")");
                    m.append("circle").attr("class", a + "-circle pointer").attr("r", 6),
                    m.append("path").attr("class", a + "-cross pointer").attr("x", 0).attr("y", 0).attr("id", a + "-cross").attr("d", "M-4 -1 H4 V1 H-4 Z")
                }
            }
        }, {
            key: "drawNodes",
            value: function(t) {
                var e = this
                  , n = this.eventContainer
                  , r = this.nodePaddingLeft
                  , o = this.nodePaddingTop
                  , i = this.nodeTextFontSize
                  , a = (this.tagPaddingLeft,
                this.tagPaddingTop,
                this.tittleSpacing)
                  , l = this.nodeClassMap[t]
                  , u = this.extendStatus[t] ? this.data[t].node : []
                  , f = this.extendStatus[t] ? this.data[t].link : []
                  , h = this.extendStatus[t] ? this.data[t].mainLink : []
                  , d = this.nodeInitPosition[t].alignment
                  , p = (this.nodeInitPosition[t].baseOffset,
                n.selectAll("." + l + ",." + l + "-nohover").data(u))
                  , y = n.selectAll("." + l + "-link").data(f)
                  , v = n.selectAll("." + l + "-main-link").data(h)
                  , g = p.enter()
                  , x = p.exit()
                  , m = y.enter()
                  , b = y.exit()
                  , w = v.enter()
                  , k = v.exit()
                  , A = g.append("g")
                  , E = m.append("g")
                  , S = w.append("g")
                  , L = s.default.line().x(function(t) {
                    return t.x
                }).y(function(t) {
                    return t.y
                }).curve(s.default.curveStepAfter);
                S.append("path").attr("class", l + "-main-link").attr("stroke-width", "1px").attr("fill", "none"),
                S.select("path").attr("d", function() {
                    return e.mainLinkStart[t] ? L([{
                        x: e.mainLinkStart[t].x,
                        y: e.mainLinkStart[t].y
                    }, {
                        x: e.mainLinkStart[t].x,
                        y: e.mainLinkStart[t].y
                    }]) : ""
                }).transition().duration(500).attr("d", L(h)),
                E.append("path").attr("class", l + "-link").attr("stroke-width", "1px").attr("fill", "none").attr("d", this.drawRadiusPathInit.bind(this)).transition().duration(500).attr("d", this.drawRadiusPath.bind(this)),
                A.attr("class", function(t) {
                    return t.isShowAll ? l + "-more" : 1 == t.type || 2 == t.type ? "app" === e.platform ? l + "-nohover" : l + " pointer" : l + "-nohover"
                }).attr("transform", function(n) {
                    return "translate(" + e.buttonPosition[t].x + "," + e.buttonPosition[t].y + ")"
                }),
                "app" === this.platform ? A.on("touchstart", function(t) {
					console.log("list数据")
					console.log(t.type, t.id, t.cid, t.param, t.name, t.nodeType, t.entityType, t.isShowAll)
					console.log(e)
                    e.clickHandler(t.type, t.id, t.cid, t.param, t.name, t.nodeType, t.entityType, t.isShowAll)
                }) : A.on("click", function(t) {
					console.log("list数据")
					console.log(t.type, t.id, t.cid, t.param, t.name, t.nodeType, t.entityType, t.isShowAll)
					console.log(e)
                    e.clickHandler(t.type, t.id, t.cid, t.param, t.name, t.nodeType, t.entityType, t.isShowAll),
                    s.default.event.stopPropagation(),
                    s.default.event.preventDefault()
                });
                var _ = A.append("rect").classed(l + "-rect", !0).attr("rx", 2).attr("ry", 2).style("fill", "#fff").style("fill-opacity", .3).attr("height", function(t) {
                    return t.height
                })
                  , H = void 0;
                if ("historyLegal" == t || "historyHolder" == t) {
                    var F = "historyLegal" == t ? 5 : 18;
                    (H = A.append("text").attr("x", 16).attr("y", 5)).selectAll("tspan.text").data(function(n) {
                        var r = e.chunkString(n.name, F);
                        return r.length > 1 ? n.textWidth = "historyLegal" == t ? 64 : 216 : n.textWidth = 6 * (0,
                        c.nameLength)(n.name),
                        r
                    }).enter().append("tspan").text(function(t) {
                        return t
                    }).classed("text", !0).attr("x", 16).attr("dy", 14)
                } else
                    H = A.append("text").text(function(t) {
                        return t.name
                    }).attr("font-size", function(t) {
                        return t.isShowAll && "app" == e.platform ? 14 : i
                    }).each(function(t) {
                        t.textWidth = this.getBBox().width
                    }).attr("y", function(t) {
                        return t.isShowAll ? this.getBBox().height : 14 + o
                    });
                var I = A.filter(function(t) {
                    return !!t.typeJoin
                }).append("text").text(function(t) {
                    return t.typeJoin.replace(",", "，")
                }).classed("executives-node-text-type", !0).attr("y", function(t) {
                    return t.isShowAll ? this.getBBox().height : 14 + o
                }).each(function(t) {
                    t.tittleWidth = this.getBBox().width
                });
                this.drawTag(A),
                this.drawInvestAmount(A),
                _.attr("width", function(t) {
                    var e = t.tittleWidth ? t.textWidth + t.tittleWidth + a : t.textWidth;
                    return t.tagWidth && e < t.tagWidth && (e = t.tagWidth),
                    t.amountWidth && e < t.amountWidth && (e = t.amountWidth),
                    e + 2 * r
                }).style("fill-opacity", 0).style("opacity", 0).attr("x", function(t) {
                    return t.rectX = -1 == d ? d * this.getBBox().width : 0,
                    t.rectX
                }),
                H.attr("x", function(e) {
                    return "holder" != t ? e.rectX + r : d * (r + this.getBBox().width)
                }).attr("class", function(t) {
                    return t.isShowAll && "app" != e.platform ? l + "-text-more link" : l + "-text"
                }).style("opacity", 0),
                I.attr("x", function(t) {
                    return t.rectX + r + t.textWidth + a
                }),
                A.append("text").filter(function(t) {
                    return t.percent && "-" != t.percent
                }).text(function(t) {
                    return parseFloat(t.percent) + "%"
                }).classed(l + "-percent", !0).style("opacity", 0).attr("x", function(e) {
                    return "invest" === t ? 0 - (this.getBBox().width + 8) : 8
                }).attr("y", function(t) {
                    return t.height / 2 - 6
                });
                var O = A.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + (t.y - t.height / 2) + ")"
                });
                O.select("." + l + "-rect").style("fill-opacity", .3).style("opacity", 1),
                O.select("." + l + "-text").style("opacity", 1),
                O.select("." + l + "-text-more").style("opacity", 1),
                O.select("." + l + "-percent").style("opacity", .8);
                var P = x.transition().duration(500).attr("transform", function(n) {
                    return "translate(" + e.buttonPosition[t].x + "," + e.buttonPosition[t].y + ")"
                }).remove();
                P.select("." + l + "-rect").style("fill-opacity", 0).style("opacity", 0),
                P.select("." + l + "-text").style("opacity", 0),
                P.select("." + l + "-text-more").style("opacity", 0),
                P.select("." + l + "-percent").style("opacity", 0),
                P.select(".tag-group").style("opacity", 0),
                P.select(".amount-text").style("opacity", 0);
                b.transition().duration(500).attr("d", this.drawRadiusPathInit.bind(this)).remove(),
                k.transition().duration(500).attr("d", function() {
                    return e.mainLinkStart[t] ? L([{
                        x: e.mainLinkStart[t].x,
                        y: e.mainLinkStart[t].y
                    }, {
                        x: e.mainLinkStart[t].x,
                        y: e.mainLinkStart[t].y
                    }]) : ""
                }).remove()
            }
        }, {
            key: "drawPolygon",
            value: function(t, e, n, r, o) {
                return t.append("g").append("polygon").attr("points", e).style("fill", n).style("opacity", r).attr("transform", o)
            }
        }, {
            key: "drawRadiusPathInit",
            value: function(t) {
                var e = t.start.x
                  , n = t.start.y
                  , r = (t.end.x,
                t.end.y)
                  , o = this.sweepFlagMap[t.type]
                  , i = "M" + e + " " + n;
                return n != r && (i = i + " A 2 2 0 0 " + o + " " + e + " " + n),
                i = i + " H " + e
            }
        }, {
            key: "drawRadiusPath",
            value: function(t) {
                var e = t.start.x
                  , n = t.start.y
                  , r = t.end.x
                  , o = t.end.y
                  , i = this.sweepFlagMap[t.type]
                  , a = "M" + e + " " + n;
                return n != o && (a = e > r ? a + " A 2 2 0 0 " + i + " " + (e - 2) + " " + o : a + " A 2 2 0 0 " + i + " " + (e + 2) + " " + o),
                a = a + " H " + r
            }
        }, {
            key: "drawTag",
            value: function(t) {
                var e = []
                  , n = t.append("g").classed("tag-group", !0)
                  , r = n.filter(function(t) {
                    return t.tagList && t.tagList.length > 0
                }).selectAll(".tag").data(function(t) {
                    return e = t.tagList,
                    t.tagList
                }).enter().append("g").attr("transform", function(t) {
                    return "translate(" + (1 == t.type || 2 == t.type && 1 == e.length ? 0 : 52) + ",28)"
                });
                r.append("rect").attr("width", function(t) {
                    return 1 == t.type ? 44 : 68
                }).attr("class", function(t) {
                    return "tag " + (1 == t.type ? "major-holder" : "final-beneficial-owner")
                }).attr("height", 20).attr("rx", 2).attr("ry", 2),
                r.append("text").text(function(t) {
                    return t.name
                }).attr("class", "tag-name").attr("x", 4).attr("y", 14),
                n.attr("transform", function(t) {
                    return t.tagWidth = this.getBBox().width,
                    "translate(" + (0 - (t.tagWidth + 16)) + ",0)"
                })
            }
        }, {
            key: "drawInvestAmount",
            value: function(t) {
                t.filter(function(t) {
                    return !!t.amount
                }).append("text").attr("class", "amount-text").text(function(t) {
                    return "认缴金额：" + t.amount
                }).attr("x", 16).attr("y", function(t) {
                    return t.amountWidth = this.getBBox().width,
                    42
                })
            }
        }, {
            key: "zoomOut",
            value: function() {
                this.scale >= 1.5 || (this.scale += .25,
                this.zoom.scaleTo(this.d3svg, this.scale))
            }
        }, {
            key: "zoomIn",
            value: function() {
                this.scale <= .5 || (this.scale -= .25,
                this.zoom.scaleTo(this.d3svg, this.scale))
            }
        }, {
            key: "save",  // 真正被执行的方法
            value: function(t) {
                var e = this.imagePadding
                  , n = this;
                this.d3svg.style("background", "#fff");
                var r = this.svg.cloneNode(!0);  // 获取页面上的svg标签
                this.read_Element(r, this.svg);
                var o = s.default.select(r)
                  , i = this.d3svg.select("g").attr("transform")
                  , a = i.substring(i.indexOf("(") + 1, i.indexOf(")")).split(",");
                o.select("g").attr("transform", "translate(" + a[0] + "," + a[1] + ") scale(1)");
                var c = this.d3svg.select("g").select("g").node().getBBox();
                o.select("g").select("g").attr("transform", function(t) {
                    return "translate(" + (-c.x - a[0] + e.x) + "," + (-c.y - a[1] + e.y) + ")"
                }),
                o.select("rect").attr("width", c.width + 2 * e.x).attr("height", c.height + 2 * e.y),
                r.setAttribute("width", c.width + 2 * e.x),
                r.setAttribute("height", c.height + 2 * e.y);  // 调整位置
				
                var l = (new XMLSerializer).serializeToString(r);  // 把标签转成字符串
                l = '<?xml version="1.0" standalone="no"?>\r\n' + l; // 添加前缀
				
                var u = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(l);  // 把标签转码
				// 创建画布
                var f = document.createElement("canvas");
                f.width = r.getAttribute("width"),
                f.height = r.getAttribute("height");
                var h = f.getContext("2d")
                  , d = new Image;
                d.src = u;
				
                d.onload = function() {
					console.log(d)
                    if (t)  // t是指参数回调
                        h.drawImage(d, 0, 0),  
                        t(f.toDataURL());
                    else if (this.isIE) {   //  this.isIE 可以改成 true
                        var e = document.createElement("iframe");
                        document.body.appendChild(e);
                        var r = e.contentWindow || e.contentDocument;
                        r.document && (r = r.document),
                        r.open("image/svg+xml", "replace"),
                        r.write(l),
                        r.close(),
                        r.execCommand("SaveAs", !0, "企业架构图—天眼查.svg")
                    } else {
                        h.drawImage(d, 0, 0);
                        var o = document.createElement("a");
                        if (f.msToBlob) {
                            var i = f.msToBlob();
                            window.navigator.msSaveBlob(i, "企业架构图—" + this.root.name + "—天眼查.png")
                        } else
                            f.toBlob(function(t) {
								// t 就是 blob 对象
                                var e = URL.createObjectURL(t);
                                o.href = e,
                                o.download = "企业架构图—" + n.root.name + "—天眼查.png";
                                var r = document.createEvent("MouseEvents");
                                r.initEvent("click", !0, !0),
                                o.dispatchEvent(r),
                                URL.revokeObjectURL(e)
                            })
                    }
                }
            }
        }, {
            key: "appSave",
            value: function(t) {
                this.save(function(e) {
                    t(e)
                })
            }
        }, {
            key: "read_Element",
            value: function(t, e) {
                for (var n = ["svg", "g"], r = {
                    rect: ["fill", "stroke", "stroke-width", "fill-opacity", "opacity"],
                    path: ["fill", "stroke", "stroke-width", "fill-opacity"],
                    circle: ["fill", "stroke", "stroke-width"],
                    line: ["stroke", "stroke-width"],
                    text: ["fill", "font-size", "text-anchor", "font-family"],
                    polygon: ["stroke", "fill"]
                }, o = t.childNodes, i = e.childNodes, a = 0; a < o.length; a++) {
                    var s = o[a]
                      , c = s.tagName;
                    if (-1 != n.indexOf(c))
                        this.read_Element(s, i[a]);
                    else if (c in r) {
                        for (var l = window.getComputedStyle(i[a]), u = "", f = 0; f < r[c].length; f++)
                            u += r[c][f] + ":" + l.getPropertyValue(r[c][f]) + "; ";
                        s.setAttribute("style", u)
                    }
                }
            }
        }, {
            key: "chunkString",
            value: function(t, e) {
                return t.match(new RegExp(".{1," + e + "}","g"))
            }
        }]),
        t
    }();
    e.default = u
}
, function(t, e, n) {
    t.exports = {
        default: n(71),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(0)
      , o = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    t.exports = function(t) {
        return o.stringify.apply(o, arguments)
    }
}
, function(t, e, n) {
    n(73),
    t.exports = n(0).Object.getPrototypeOf
}
, function(t, e, n) {
    var r = n(18)
      , o = n(39);
    n(74)("getPrototypeOf", function() {
        return function(t) {
            return o(r(t))
        }
    })
}
, function(t, e, n) {
    var r = n(3)
      , o = n(0)
      , i = n(10);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t]
          , a = {};
        a[t] = e(n),
        r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(76),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(77);
    var r = n(0).Object;
    t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
    }
}
, function(t, e, n) {
    var r = n(3);
    r(r.S + r.F * !n(5), "Object", {
        defineProperty: n(6).f
    })
}
, function(t, e, n) {
    t.exports = {
        default: n(79),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(43),
    n(50),
    t.exports = n(33).f("iterator")
}
, function(t, e, n) {
    var r = n(30)
      , o = n(25);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, s = String(o(e)), c = r(n), l = s.length;
            return c < 0 || c >= l ? t ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(31)
      , o = n(21)
      , i = n(23)
      , a = {};
    n(9)(a, n(2)("iterator"), function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
}
, function(t, e, n) {
    var r = n(6)
      , o = n(4)
      , i = n(22);
    t.exports = n(5) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, a = i(e), s = a.length, c = 0; s > c; )
            r.f(t, n = a[c++], e[n]);
        return t
    }
}
, function(t, e, n) {
    var r = n(11)
      , o = n(48)
      , i = n(84);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = r(e), l = o(c.length), u = i(a, l);
            if (t && n != n) {
                for (; l > u; )
                    if ((s = c[u++]) != s)
                        return !0
            } else
                for (; l > u; u++)
                    if ((t || u in c) && c[u] === n)
                        return t || u || 0;
            return !t && -1
        }
    }
}
, function(t, e, n) {
    var r = n(30)
      , o = Math.max
      , i = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(86)
      , o = n(87)
      , i = n(16)
      , a = n(11);
    t.exports = n(44)(Array, "Array", function(t, e) {
        this._t = a(t),
        this._i = 0,
        this._k = e
    }, function() {
        var t = this._t
          , e = this._k
          , n = this._i++;
        return !t || n >= t.length ? (this._t = void 0,
        o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(t, e) {
    t.exports = function() {}
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(89),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(90),
    n(53),
    n(95),
    n(96),
    t.exports = n(0).Symbol
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(8)
      , i = n(5)
      , a = n(3)
      , s = n(45)
      , c = n(91).KEY
      , l = n(10)
      , u = n(27)
      , f = n(23)
      , h = n(19)
      , d = n(2)
      , p = n(33)
      , y = n(34)
      , v = n(92)
      , g = n(93)
      , x = n(4)
      , m = n(7)
      , b = n(18)
      , w = n(11)
      , k = n(29)
      , A = n(21)
      , E = n(31)
      , S = n(94)
      , L = n(52)
      , _ = n(35)
      , H = n(6)
      , F = n(22)
      , I = L.f
      , O = H.f
      , P = S.f
      , B = r.Symbol
      , M = r.JSON
      , j = M && M.stringify
      , C = d("_hidden")
      , N = d("toPrimitive")
      , T = {}.propertyIsEnumerable
      , D = u("symbol-registry")
      , R = u("symbols")
      , V = u("op-symbols")
      , W = Object.prototype
      , U = "function" == typeof B && !!_.f
      , z = r.QObject
      , Q = !z || !z.prototype || !z.prototype.findChild
      , G = i && l(function() {
        return 7 != E(O({}, "a", {
            get: function() {
                return O(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(t, e, n) {
        var r = I(W, e);
        r && delete W[e],
        O(t, e, n),
        r && t !== W && O(W, e, r)
    }
    : O
      , Z = function(t) {
        var e = R[t] = E(B.prototype);
        return e._k = t,
        e
    }
      , q = U && "symbol" == typeof B.iterator ? function(t) {
        return "symbol" == typeof t
    }
    : function(t) {
        return t instanceof B
    }
      , K = function(t, e, n) {
        return t === W && K(V, e, n),
        x(t),
        e = k(e, !0),
        x(n),
        o(R, e) ? (n.enumerable ? (o(t, C) && t[C][e] && (t[C][e] = !1),
        n = E(n, {
            enumerable: A(0, !1)
        })) : (o(t, C) || O(t, C, A(1, {})),
        t[C][e] = !0),
        G(t, e, n)) : O(t, e, n)
    }
      , X = function(t, e) {
        x(t);
        for (var n, r = v(e = w(e)), o = 0, i = r.length; i > o; )
            K(t, n = r[o++], e[n]);
        return t
    }
      , J = function(t) {
        var e = T.call(this, t = k(t, !0));
        return !(this === W && o(R, t) && !o(V, t)) && (!(e || !o(this, t) || !o(R, t) || o(this, C) && this[C][t]) || e)
    }
      , Y = function(t, e) {
        if (t = w(t),
        e = k(e, !0),
        t !== W || !o(R, e) || o(V, e)) {
            var n = I(t, e);
            return !n || !o(R, e) || o(t, C) && t[C][e] || (n.enumerable = !0),
            n
        }
    }
      , $ = function(t) {
        for (var e, n = P(w(t)), r = [], i = 0; n.length > i; )
            o(R, e = n[i++]) || e == C || e == c || r.push(e);
        return r
    }
      , tt = function(t) {
        for (var e, n = t === W, r = P(n ? V : w(t)), i = [], a = 0; r.length > a; )
            !o(R, e = r[a++]) || n && !o(W, e) || i.push(R[e]);
        return i
    };
    U || (s((B = function() {
        if (this instanceof B)
            throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0)
          , e = function(n) {
            this === W && e.call(V, n),
            o(this, C) && o(this[C], t) && (this[C][t] = !1),
            G(this, t, A(1, n))
        };
        return i && Q && G(W, t, {
            configurable: !0,
            set: e
        }),
        Z(t)
    }
    ).prototype, "toString", function() {
        return this._k
    }),
    L.f = Y,
    H.f = K,
    n(51).f = S.f = $,
    n(24).f = J,
    _.f = tt,
    i && !n(14) && s(W, "propertyIsEnumerable", J, !0),
    p.f = function(t) {
        return Z(d(t))
    }
    ),
    a(a.G + a.W + a.F * !U, {
        Symbol: B
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt; )
        d(et[nt++]);
    for (var rt = F(d.store), ot = 0; rt.length > ot; )
        y(rt[ot++]);
    a(a.S + a.F * !U, "Symbol", {
        for: function(t) {
            return o(D, t += "") ? D[t] : D[t] = B(t)
        },
        keyFor: function(t) {
            if (!q(t))
                throw TypeError(t + " is not a symbol!");
            for (var e in D)
                if (D[e] === t)
                    return e
        },
        useSetter: function() {
            Q = !0
        },
        useSimple: function() {
            Q = !1
        }
    }),
    a(a.S + a.F * !U, "Object", {
        create: function(t, e) {
            return void 0 === e ? E(t) : X(E(t), e)
        },
        defineProperty: K,
        defineProperties: X,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: tt
    });
    var it = l(function() {
        _.f(1)
    });
    a(a.S + a.F * it, "Object", {
        getOwnPropertySymbols: function(t) {
            return _.f(b(t))
        }
    }),
    M && a(a.S + a.F * (!U || l(function() {
        var t = B();
        return "[null]" != j([t]) || "{}" != j({
            a: t
        }) || "{}" != j(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
            if (n = e = r[1],
            (m(e) || void 0 !== t) && !q(t))
                return g(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)),
                    !q(e))
                        return e
                }
                ),
                r[1] = e,
                j.apply(M, r)
        }
    }),
    B.prototype[N] || n(9)(B.prototype, N, B.prototype.valueOf),
    f(B, "Symbol"),
    f(Math, "Math", !0),
    f(r.JSON, "JSON", !0)
}
, function(t, e, n) {
    var r = n(19)("meta")
      , o = n(7)
      , i = n(8)
      , a = n(6).f
      , s = 0
      , c = Object.isExtensible || function() {
        return !0
    }
      , l = !n(10)(function() {
        return c(Object.preventExtensions({}))
    })
      , u = function(t) {
        a(t, r, {
            value: {
                i: "O" + ++s,
                w: {}
            }
        })
    }
      , f = t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(t, e) {
            if (!o(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
                if (!c(t))
                    return "F";
                if (!e)
                    return "E";
                u(t)
            }
            return t[r].i
        },
        getWeak: function(t, e) {
            if (!i(t, r)) {
                if (!c(t))
                    return !0;
                if (!e)
                    return !1;
                u(t)
            }
            return t[r].w
        },
        onFreeze: function(t) {
            return l && f.NEED && c(t) && !i(t, r) && u(t),
            t
        }
    }
}
, function(t, e, n) {
    var r = n(22)
      , o = n(35)
      , i = n(24);
    t.exports = function(t) {
        var e = r(t)
          , n = o.f;
        if (n)
            for (var a, s = n(t), c = i.f, l = 0; s.length > l; )
                c.call(t, a = s[l++]) && e.push(a);
        return e
    }
}
, function(t, e, n) {
    var r = n(17);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}
, function(t, e, n) {
    var r = n(11)
      , o = n(51).f
      , i = {}.toString
      , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == i.call(t) ? function(t) {
            try {
                return o(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : o(r(t))
    }
}
, function(t, e, n) {
    n(34)("asyncIterator")
}
, function(t, e, n) {
    n(34)("observable")
}
, function(t, e, n) {
    t.exports = {
        default: n(98),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(99),
    t.exports = n(0).Object.setPrototypeOf
}
, function(t, e, n) {
    var r = n(3);
    r(r.S, "Object", {
        setPrototypeOf: n(100).set
    })
}
, function(t, e, n) {
    var r = n(7)
      , o = n(4)
      , i = function(t, e) {
        if (o(t),
        !r(e) && null !== e)
            throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, r) {
            try {
                (r = n(15)(Function.call, n(52).f(Object.prototype, "__proto__").set, 2))(t, []),
                e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n),
                e ? t.__proto__ = n : r(t, n),
                t
            }
        }({}, !1) : void 0),
        check: i
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(102),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(103);
    var r = n(0).Object;
    t.exports = function(t, e) {
        return r.create(t, e)
    }
}
, function(t, e, n) {
    var r = n(3);
    r(r.S, "Object", {
        create: n(31)
    })
}
, function(t, e) {
    t.exports = ReactDOM
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(n(57))
      , o = n(109);
    var i = {};
    e.default = function(t, e) {
        switch (t = t || i,
        e.type) {
        case o.ACTION_CURRENT_DETAIL:
            var n = (0,
            r.default)({}, t);
            return n.currentDetail = e.currentDetail,
            n;
        default:
            return t
        }
    }
}
, function(t, e, n) {
    n(107),
    t.exports = n(0).Object.assign
}
, function(t, e, n) {
    var r = n(3);
    r(r.S + r.F, "Object", {
        assign: n(108)
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , o = n(22)
      , i = n(35)
      , a = n(24)
      , s = n(18)
      , c = n(47)
      , l = Object.assign;
    t.exports = !l || n(10)(function() {
        var t = {}
          , e = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return t[n] = 7,
        r.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != r
    }) ? function(t, e) {
        for (var n = s(t), l = arguments.length, u = 1, f = i.f, h = a.f; l > u; )
            for (var d, p = c(arguments[u++]), y = f ? o(p).concat(f(p)) : o(p), v = y.length, g = 0; v > g; )
                d = y[g++],
                r && !h.call(p, d) || (n[d] = p[d]);
        return n
    }
    : l
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ACTION_CURRENT_DETAIL = "ACTION_CURRENT_DETAIL"
}
, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e)
            throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t)
            return t;
        var n = e.protocol + "//" + e.host
          , r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var o, i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
            "url(" + JSON.stringify(o) + ")")
        })
    }
}
, function(t, e, n) {
    var r = n(112);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(59)(r, o);
    r.locals && (t.exports = r.locals)
}
, function(t, e, n) {
    (t.exports = n(58)(!1)).push([t.i, "* {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-appearance: none;\n}\nbody,\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  box-sizing: border-box;\n}\nbody {\n  overflow: hidden;\n}\n.canvas-main {\n  width: 100vw;\n  height: 100vh;\n  cursor: pointer;\n}\na {\n  color: #0084ff;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n}\n.text-left {\n  text-align: left;\n}\n.w80 {\n  width: 80px;\n}\n.w50 {\n  width: 50px;\n}\ntable {\n  font-size: 14px;\n  border: 1px solid #eaf4ff;\n  width: 100%;\n  border-spacing: 0;\n}\ntable thead {\n  border: 0 solid #eaf4ff;\n  background: rgba(0, 132, 255, 0.03);\n  border-bottom-width: 1px;\n}\ntable th,\ntable td {\n  font-weight: normal;\n  border: 0 solid #eaf4ff;\n  border-left-width: 1px;\n  padding: 8px;\n  text-align: center;\n  border-bottom: 1px solid #eaf4ff;\n}\ntable th:first-child,\ntable td:first-child {\n  border-left-width: 0;\n}\ncircle {\n  cursor: pointer;\n}\n.link {\n  cursor: pointer;\n}\n.link:hover {\n  text-decoration: underline;\n}\n.history-legal-node-link,\n.history-legal-node-main-link {\n  stroke: #FFCBA3;\n  stroke-width: 1;\n  fill-opacity: 0;\n}\n.invest-node-link,\n.invest-node-main-link {\n  stroke: #DBC5E9;\n  stroke-width: 1;\n  fill-opacity: 0;\n}\n.branch-node-link,\n.branch-node-main-link {\n  stroke: #BAD5B3;\n  stroke-width: 1;\n  fill-opacity: 0;\n}\n.holder-node-link,\n.holder-node-main-link {\n  stroke: #F3BDB6;\n  stroke-width: 1;\n  fill-opacity: 0;\n}\n.history-holder-node-link,\n.history-holder-node-main-link {\n  stroke: #FFCBA3;\n  stroke-width: 1;\n  fill-opacity: 0;\n}\n.executives-node-link,\n.executives-node-main-link {\n  stroke: #A4D3E3;\n  stroke-width: 1;\n  fill-opacity: 0;\n}\n.invest-node-more {\n  fill: #A66FC8;\n}\n.holder-node-more {\n  fill: #E05A48;\n}\n.executives-node-more {\n  fill: #1B91BA;\n}\n.branch-node-more {\n  fill: #4C955A;\n}\n.history-legal-node-more {\n  fill: #FF7D18;\n}\n.history-holder-node-more {\n  fill: #FF7D18;\n}\n.invest-node,\n.invest-node-nohover {\n  font-size: 12px;\n}\n.invest-node .invest-node-rect,\n.invest-node-nohover .invest-node-rect {\n  fill: #fff;\n  fill-opacity: 0.5;\n  stroke: #DBC5E9;\n  stroke-width: 1;\n}\n.invest-node .invest-node-text,\n.invest-node-nohover .invest-node-text {\n  fill: #333;\n  font-size: 12px;\n  stroke-width: 0;\n  fill-opacity: 1;\n}\n.invest-node .invest-node-percent,\n.invest-node-nohover .invest-node-percent {\n  fill: #B88CD3;\n}\n.invest-node:hover .invest-node-rect {\n  stroke: #A66FC8;\n}\n.invest-node:hover .invest-node-text {\n  font-weight: bold;\n}\n.holder-node,\n.holder-node-nohover {\n  font-size: 12px;\n}\n.holder-node .holder-node-rect,\n.holder-node-nohover .holder-node-rect {\n  fill: #fff;\n  fill-opacity: 0.5;\n  stroke: #F3BDB6;\n  stroke-width: 1;\n}\n.holder-node .holder-node-text,\n.holder-node-nohover .holder-node-text,\n.holder-node .holder-node-text-percent,\n.holder-node-nohover .holder-node-text-percent {\n  fill: #333;\n  font-size: 12px;\n  stroke-width: 0;\n  fill-opacity: 1;\n}\n.holder-node .holder-node-percent,\n.holder-node-nohover .holder-node-percent {\n  fill: #E67B6D;\n}\n.holder-node:hover .holder-node-rect {\n  stroke: #E05A48;\n}\n.holder-node:hover .holder-node-text {\n  font-weight: bold;\n}\n.executives-node .executives-node-rect,\n.executives-node-nohover .executives-node-rect {\n  fill: #fff;\n  fill-opacity: 0.5;\n  stroke: #A4D3E3;\n  stroke-width: 1;\n}\n.executives-node .executives-node-text,\n.executives-node-nohover .executives-node-text,\n.executives-node .executives-node-text-type,\n.executives-node-nohover .executives-node-text-type {\n  fill: #333;\n  font-size: 12px;\n  stroke-width: 10;\n  fill-opacity: 1;\n}\n.executives-node .executives-node-text-type,\n.executives-node-nohover .executives-node-text-type {\n  fill: #666;\n}\n.executives-node:hover .executives-node-rect {\n  stroke: #1B91BA;\n}\n.executives-node:hover .executives-node-text {\n  font-weight: bold;\n}\n.history-legal-node .history-legal-node-rect,\n.history-legal-node-nohover .history-legal-node-rect {\n  fill: #fff;\n  fill-opacity: 0.5;\n  stroke: #FFCBA3;\n  stroke-width: 1;\n}\n.history-legal-node .history-legal-node-text,\n.history-legal-node-nohover .history-legal-node-text {\n  fill: #333;\n  font-size: 12px;\n  stroke-width: 0;\n  fill-opacity: 1;\n}\n.history-legal-node:hover .history-legal-node-rect {\n  stroke: #FF7D18;\n}\n.history-legal-node:hover .history-legal-node-text {\n  font-weight: bold;\n}\n.history-holder-node .history-holder-node-rect,\n.history-holder-node-nohover .history-holder-node-rect {\n  fill: #fff;\n  fill-opacity: 0.5;\n  stroke: #FFCBA3;\n  stroke-width: 1;\n}\n.history-holder-node .history-holder-node-text,\n.history-holder-node-nohover .history-holder-node-text {\n  fill: #333;\n  font-size: 12px;\n  stroke-width: 0;\n  fill-opacity: 1;\n}\n.history-holder-node:hover .history-holder-node-rect {\n  stroke: #FF7D18;\n}\n.history-holder-node:hover .history-holder-node-text {\n  font-weight: bold;\n}\n.branch-node .branch-node-rect,\n.branch-node-nohover .branch-node-rect {\n  fill: #fff;\n  fill-opacity: 0.5;\n  stroke: #BAD5B3;\n  stroke-width: 1;\n}\n.branch-node .branch-node-text,\n.branch-node-nohover .branch-node-text {\n  fill: #333;\n  font-size: 12px;\n  stroke-width: 0;\n  fill-opacity: 1;\n}\n.branch-node:hover .branch-node-rect {\n  stroke: #4C955A;\n}\n.branch-node:hover .branch-node-text {\n  font-weight: bold;\n}\n.branch-button .branch-button-rect {\n  fill: #4C955A;\n  opacity: 0.15;\n}\n.branch-button:hover .branch-button-rect {\n  opacity: 0.2;\n}\n.branch-button .branch-button-circle {\n  fill: none;\n  stroke: #4C955A;\n  stroke-width: 1;\n}\n.branch-button .branch-button-cross {\n  fill: #4C955A;\n}\n.invest-button .invest-button-rect {\n  fill: #A66FC8;\n  opacity: 0.15;\n}\n.invest-button:hover .invest-button-rect {\n  opacity: 0.2;\n}\n.invest-button .invest-button-circle {\n  fill: none;\n  stroke: #A66FC8;\n  stroke-width: 1;\n}\n.invest-button .invest-button-cross {\n  fill: #A66FC8;\n}\n.history-legal-button .history-legal-button-rect {\n  fill: #FF7D18;\n  opacity: 0.15;\n}\n.history-legal-button:hover .history-legal-button-rect {\n  opacity: 0.2;\n}\n.history-legal-button .history-legal-button-circle {\n  fill: none;\n  stroke: #FF7D18;\n  stroke-width: 1;\n}\n.history-legal-button .history-legal-button-cross {\n  fill: #FF7D18;\n}\n.history-holder-button .history-holder-button-rect {\n  fill: #FF7D18;\n  opacity: 0.15;\n}\n.history-holder-button:hover .history-holder-button-rect {\n  opacity: 0.2;\n}\n.history-holder-button .history-holder-button-circle {\n  fill: none;\n  stroke: #FF7D18;\n  stroke-width: 1;\n}\n.history-holder-button .history-holder-button-cross {\n  fill: #FF7D18;\n}\n.executives-button .executives-button-rect {\n  fill: #1B91BA;\n  opacity: 0.15;\n}\n.executives-button:hover .executives-button-rect {\n  opacity: 0.2;\n}\n.executives-button .executives-button-circle {\n  fill: none;\n  stroke: #1B91BA;\n  stroke-width: 1;\n}\n.executives-button .executives-button-cross {\n  fill: #1B91BA;\n}\n.holder-button .holder-button-rect {\n  fill: #E05A48;\n  opacity: 0.15;\n}\n.holder-button:hover .holder-button-rect {\n  opacity: 0.2;\n}\n.holder-button .holder-button-circle {\n  fill: none;\n  stroke: #E05A48;\n  stroke-width: 1;\n}\n.holder-button .holder-button-cross {\n  fill: #E05A48;\n}\n.tag.major-holder {\n  fill: #E05A48;\n  fill-opacity: 0.1;\n}\n.tag.major-holder + .tag-name {\n  font-size: 12px;\n  fill: #E05A48;\n}\n.tag.final-beneficial-owner {\n  fill: #0084FF;\n  fill-opacity: 0.1;\n}\n.tag.final-beneficial-owner + .tag-name {\n  font-size: 12px;\n  fill: #0084FF;\n}\n.amount-text {\n  fill: #666;\n  font-size: 12px;\n}\n", ""])
}
, function(t, e, n) {
    t.exports = n(114)
}
, function(t, e, n) {
    var r = function() {
        return this
    }() || Function("return this")()
      , o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0
      , i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0,
    t.exports = n(115),
    o)
        r.regeneratorRuntime = i;
    else
        try {
            delete r.regeneratorRuntime
        } catch (t) {
            r.regeneratorRuntime = void 0
        }
}
, function(t, e) {
    !function(e) {
        "use strict";
        var n, r = Object.prototype, o = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag", l = "object" == typeof t, u = e.regeneratorRuntime;
        if (u)
            l && (t.exports = u);
        else {
            (u = e.regeneratorRuntime = l ? t.exports : {}).wrap = b;
            var f = "suspendedStart"
              , h = "suspendedYield"
              , d = "executing"
              , p = "completed"
              , y = {}
              , v = {};
            v[a] = function() {
                return this
            }
            ;
            var g = Object.getPrototypeOf
              , x = g && g(g(O([])));
            x && x !== r && o.call(x, a) && (v = x);
            var m = E.prototype = k.prototype = Object.create(v);
            A.prototype = m.constructor = E,
            E.constructor = A,
            E[c] = A.displayName = "GeneratorFunction",
            u.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === A || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            u.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E,
                c in t || (t[c] = "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            u.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            S(L.prototype),
            L.prototype[s] = function() {
                return this
            }
            ,
            u.AsyncIterator = L,
            u.async = function(t, e, n, r) {
                var o = new L(b(t, e, n, r));
                return u.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }
            ,
            S(m),
            m[c] = "Generator",
            m[a] = function() {
                return this
            }
            ,
            m.toString = function() {
                return "[object Generator]"
            }
            ,
            u.keys = function(t) {
                var e = [];
                for (var n in t)
                    e.push(n);
                return e.reverse(),
                function n() {
                    for (; e.length; ) {
                        var r = e.pop();
                        if (r in t)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            u.values = O,
            I.prototype = {
                constructor: I,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = n,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = n,
                    this.tryEntries.forEach(F),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function r(r, o) {
                        return s.type = "throw",
                        s.arg = t,
                        e.next = r,
                        o && (e.method = "next",
                        e.arg = n),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , s = a.completion;
                        if ("root" === a.tryLoc)
                            return r("end");
                        if (a.tryLoc <= this.prev) {
                            var c = o.call(a, "catchLoc")
                              , l = o.call(a, "finallyLoc");
                            if (c && l) {
                                if (this.prev < a.catchLoc)
                                    return r(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return r(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc)
                                    return r(a.catchLoc, !0)
                            } else {
                                if (!l)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return r(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    y) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    y
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            F(n),
                            y
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                F(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: O(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = n),
                    y
                }
            }
        }
        function b(t, e, n, r) {
            var o = e && e.prototype instanceof k ? e : k
              , i = Object.create(o.prototype)
              , a = new I(r || []);
            return i._invoke = function(t, e, n) {
                var r = f;
                return function(o, i) {
                    if (r === d)
                        throw new Error("Generator is already running");
                    if (r === p) {
                        if ("throw" === o)
                            throw i;
                        return P()
                    }
                    for (n.method = o,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var s = _(a, n);
                            if (s) {
                                if (s === y)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === f)
                                throw r = p,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = d;
                        var c = w(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? p : h,
                            c.arg === y)
                                continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = p,
                        n.method = "throw",
                        n.arg = c.arg)
                    }
                }
            }(t, n, a),
            i
        }
        function w(t, e, n) {
			// 这个t就是上面的get()
			// var n = {"state":"ok","message":"","special":"","vipMessage":"","isLogin":0,"data":{"id":10517725,"holder":[{"id":18426592,"tagList":[{"type":1,"name":"大股东"},{"type":2,"name":"最终受益人"}],"percent":"100.00%","type":1,"name":"伊藤忠商事株式会社"}],"staff":[{"id":2038302246,"typeJoin":"董事长","type":2,"cid":10517725,"name":"池添洋一"},{"id":2023306884,"typeJoin":"董事,总经理","type":2,"cid":10517725,"name":"森常隆"},{"id":2276620061,"typeJoin":"董事","type":2,"cid":10517725,"name":"香月俊哉"},{"id":3214456100,"typeJoin":"监事","type":2,"cid":10517725,"name":"福岛昇"},{"id":3309779329,"typeJoin":"董事","type":2,"cid":10517725,"name":"福田祐士"}],"historyHolder":[],"name":"伊藤忠（中国）集团有限公司","branch":[{"type":1,"id":3375850810,"name":"伊藤忠（中国）集团有限公司哈尔滨分公司"},{"type":1,"id":3375817620,"name":"伊藤忠（中国）集团有限公司沈阳分公司"},{"type":1,"id":2345096084,"name":"伊藤忠（中国）集团有限公司四川分公司"},{"type":1,"id":100346517,"name":"伊藤忠（中国）集团有限公司日本中华投资性公司"},{"type":1,"id":2347264038,"name":"伊藤忠（中国）集团有限公司."}],"inverst":[{"id":6739334,"amount":"450.0万美元","percent":"100.00%","type":1,"name":"北京伊藤忠华糖综合加工有限公司"},{"id":585414489,"amount":"10510.0万美元","percent":"100.00%","type":1,"name":"上海伊藤忠商事有限公司"},{"id":335131422,"amount":"100.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（天津）有限公司"},{"id":247658698,"amount":"150.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（青岛）有限公司"},{"id":2344832184,"amount":"600.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（大连）有限公司"},{"id":2344493802,"amount":"100.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（重庆）贸易有限公司"},{"id":2316264751,"amount":"1275.0万人民币","percent":"85.00%","type":1,"name":"杭州新花海商贸有限公司"},{"id":2963495484,"amount":"686.0万美元","percent":"49.00%","type":1,"name":"伊藤忠（上海）房地产开发有限公司"},{"id":2962896205,"amount":"72.0万美元","percent":"40.00%","type":1,"name":"上海伊隆保龄球有限公司"},{"id":2410781735,"amount":"26.0万美元","percent":"40.00%","type":1,"name":"创领信息技术（上海）有限公司"},{"id":379439356,"amount":"290.0万美元","percent":"40.00%","type":1,"name":"互腾贸易（上海）有限公司"},{"id":50170327,"amount":"480.0万美元","percent":"40.00%","type":1,"name":"伊藤忠纤维贸易（中国）有限公司"},{"id":14460637,"amount":"150.28万美元","percent":"40.00%","type":1,"name":"北京华藤示范米业有限公司"},{"id":1055962345,"amount":"7.0万美元","percent":"35.00%","type":1,"name":"爱美克思（上海）船务咨询有限公司"},{"id":2962911791,"amount":"9.0万美元","percent":"30.00%","type":1,"name":"上海伊纺国际贸易有限公司"},{"id":2963399551,"amount":"4.0万美元","percent":"20.00%","type":1,"name":"上海科尔摩斯咨询有限公司"},{"id":866409183,"amount":"13.0万美元","percent":"20.00%","type":1,"name":"腾新机械（上海）有限公司"},{"id":864561630,"amount":"4365.0万人民币","percent":"20.00%","type":1,"name":"山东龙大肉食品股份有限公司"},{"id":2410179681,"amount":"200.0万美元","percent":"20.00%","type":1,"name":"盛世利（中国）租赁有限公司"},{"id":24767958,"amount":"270.0万美元","percent":"20.00%","type":1,"name":"伊藤忠物流（中国）有限公司"},{"id":335261614,"amount":"441.0万美元","percent":"14.70%","type":1,"name":"天津物产天伊国际贸易有限公司"},{"id":1427839957,"amount":"125.0万美元","percent":"10.00%","type":1,"name":"烟台龙荣食品有限公司"},{"id":2406684636,"amount":"30.0万人民币","percent":"10.00%","type":1,"name":"山西能源清洁发展机制项目开发服务有限公司"},{"id":2349056052,"amount":"50.0万美元","percent":"10.00%","type":1,"name":"杰斯比塑料（无锡）有限公司"},{"id":1638491187,"amount":"121.752万美元","percent":"6.28%","type":1,"name":"烟台日世食品有限公司"},{"id":810350279,"amount":"58.8万人民币","percent":"4.90%","type":1,"name":"上海沂庆贸易有限公司"},{"id":1459600653,"amount":"200.0万美元","percent":"4.21%","type":1,"name":"东瑞盛世利融资租赁有限公司"},{"id":55870026,"amount":"648.0万人民币","percent":"2.76%","type":1,"name":"杉杉集团有限公司"},{"id":21118801,"amount":"8910.0万人民币","percent":"2.20%","type":1,"name":"山东如意科技集团有限公司"},{"id":2349636584,"amount":"18.742777万美元","percent":"2.11%","type":1,"name":"天健医疗科技（苏州）有限公司"},{"id":10517437,"amount":"108.32万美元","percent":"1.67%","type":1,"name":"华糖洋华堂商业有限公司"},{"id":2370667275,"amount":"18.32万美元","percent":"0.97%","type":1,"name":"上海尤妮佳有限公司"},{"id":2558339373,"percent":"-","type":1,"name":"黑龙江藤光粮油食品有限公司"}],"entityType":1,"historyLegal":[{"id":1759346874,"type":2,"cid":10517725,"name":"上田明裕"}]}}
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        function k() {}
        function A() {}
        function E() {}
        function S(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }
        function L(t) {
            var e;
            this._invoke = function(n, r) {
                function i() {
                    return new Promise(function(e, i) {
                        !function e(n, r, i, a) {
                            var s = w(t[n], t, r);
                            if ("throw" !== s.type) {
                                var c = s.arg
                                  , l = c.value;
                                return l && "object" == typeof l && o.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
                                    e("next", t, i, a)
                                }, function(t) {
                                    e("throw", t, i, a)
                                }) : Promise.resolve(l).then(function(t) {
                                    c.value = t,
                                    i(c)
                                }, a)
                            }
                            a(s.arg)
                        }(n, r, e, i)
                    }
                    )
                }
                return e = e ? e.then(i, i) : i()
            }
        }
        function _(t, e) {
            var r = t.iterator[e.method];
            if (r === n) {
                if (e.delegate = null,
                "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return",
                    e.arg = n,
                    _(t, e),
                    "throw" === e.method))
                        return y;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var o = w(r, t.iterator, e.arg);
            if ("throw" === o.type)
                return e.method = "throw",
                e.arg = o.arg,
                e.delegate = null,
                y;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value,
            e.next = t.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = n),
            e.delegate = null,
            y) : i : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            y)
        }
        function H(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function F(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function I(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(H, this),
            this.reset(!0)
        }
        function O(t) {
            if (t) {
                var e = t[a];
                if (e)
                    return e.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var r = -1
                      , i = function e() {
                        for (; ++r < t.length; )
                            if (o.call(t, r))
                                return e.value = t[r],
                                e.done = !1,
                                e;
                        return e.value = n,
                        e.done = !0,
                        e
                    };
                    return i.next = i
                }
            }
            return {
                next: P
            }
        }
        function P() {
            return {
                value: n,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(n(37));
    e.default = function(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new r.default(function(t, n) {
                return function o(i, a) {
                    try {
                        var s = e[i](a)
                          , c = s.value
                    } catch (t) {
                        return void n(t)
                    }
                    if (!s.done)
                        return r.default.resolve(c).then(function(t) {
                            o("next", t)
                        }, function(t) {
                            o("throw", t)
                        });
                    t(c)
                }("next")
            }
            )
        }
    }
}
, function(t, e, n) {
    n(53),
    n(43),
    n(50),
    n(118),
    n(130),
    n(131),
    t.exports = n(0).Promise
}
, function(t, e, n) {
    "use strict";
    var r, o, i, a, s = n(14), c = n(1), l = n(15), u = n(60), f = n(3), h = n(7), d = n(20), p = n(119), y = n(120), v = n(61), g = n(62).set, x = n(125)(), m = n(36), b = n(63), w = n(126), k = n(64), A = c.TypeError, E = c.process, S = E && E.versions, L = S && S.v8 || "", _ = c.Promise, H = "process" == u(E), F = function() {}, I = o = m.f, O = !!function() {
        try {
            var t = _.resolve(1)
              , e = (t.constructor = {})[n(2)("species")] = function(t) {
                t(F, F)
            }
            ;
            return (H || "function" == typeof PromiseRejectionEvent) && t.then(F)instanceof e && 0 !== L.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
        } catch (t) {}
    }(), P = function(t) {
        var e;
        return !(!h(t) || "function" != typeof (e = t.then)) && e
    }, B = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            x(function() {
                for (var r = t._v, o = 1 == t._s, i = 0, a = function(e) {
                    var n, i, a, s = o ? e.ok : e.fail, c = e.resolve, l = e.reject, u = e.domain;
                    try {
                        s ? (o || (2 == t._h && C(t),
                        t._h = 1),
                        !0 === s ? n = r : (u && u.enter(),
                        n = s(r),
                        u && (u.exit(),
                        a = !0)),
                        n === e.promise ? l(A("Promise-chain cycle")) : (i = P(n)) ? i.call(n, c, l) : c(n)) : l(r)
                    } catch (t) {
                        u && !a && u.exit(),
                        l(t)
                    }
                }; n.length > i; )
                    a(n[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && M(t)
            })
        }
    }, M = function(t) {
        g.call(c, function() {
            var e, n, r, o = t._v, i = j(t);
            if (i && (e = b(function() {
                H ? E.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
            }),
            t._h = H || j(t) ? 2 : 1),
            t._a = void 0,
            i && e.e)
                throw e.v
        })
    }, j = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
    }, C = function(t) {
        g.call(c, function() {
            var e;
            H ? E.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, N = function(t) {
        var e = this;
        e._d || (e._d = !0,
        (e = e._w || e)._v = t,
        e._s = 2,
        e._a || (e._a = e._c.slice()),
        B(e, !0))
    }, T = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t)
                    throw A("Promise can't be resolved itself");
                (e = P(t)) ? x(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, l(T, r, 1), l(N, r, 1))
                    } catch (t) {
                        N.call(r, t)
                    }
                }) : (n._v = t,
                n._s = 1,
                B(n, !1))
            } catch (t) {
                N.call({
                    _w: n,
                    _d: !1
                }, t)
            }
        }
    };
    O || (_ = function(t) {
        p(this, _, "Promise", "_h"),
        d(t),
        r.call(this);
        try {
            t(l(T, this, 1), l(N, this, 1))
        } catch (t) {
            N.call(this, t)
        }
    }
    ,
    (r = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = n(127)(_.prototype, {
        then: function(t, e) {
            var n = I(v(this, _));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = H ? E.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && B(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    i = function() {
        var t = new r;
        this.promise = t,
        this.resolve = l(T, t, 1),
        this.reject = l(N, t, 1)
    }
    ,
    m.f = I = function(t) {
        return t === _ || t === a ? new i(t) : o(t)
    }
    ),
    f(f.G + f.W + f.F * !O, {
        Promise: _
    }),
    n(23)(_, "Promise"),
    n(128)("Promise"),
    a = n(0).Promise,
    f(f.S + f.F * !O, "Promise", {
        reject: function(t) {
            var e = I(this);
            return (0,
            e.reject)(t),
            e.promise
        }
    }),
    f(f.S + f.F * (s || !O), "Promise", {
        resolve: function(t) {
            return k(s && this === a ? _ : this, t)
        }
    }),
    f(f.S + f.F * !(O && n(129)(function(t) {
        _.all(t).catch(F)
    })), "Promise", {
        all: function(t) {
            var e = this
              , n = I(e)
              , r = n.resolve
              , o = n.reject
              , i = b(function() {
                var n = []
                  , i = 0
                  , a = 1;
                y(t, !1, function(t) {
                    var s = i++
                      , c = !1;
                    n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                        c || (c = !0,
                        n[s] = t,
                        --a || r(n))
                    }, o)
                }),
                --a || r(n)
            });
            return i.e && o(i.v),
            n.promise
        },
        race: function(t) {
            var e = this
              , n = I(e)
              , r = n.reject
              , o = b(function() {
                y(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return o.e && r(o.v),
            n.promise
        }
    })
}
, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t)
            throw TypeError(n + ": incorrect invocation!");
        return t
    }
}
, function(t, e, n) {
    var r = n(15)
      , o = n(121)
      , i = n(122)
      , a = n(4)
      , s = n(48)
      , c = n(123)
      , l = {}
      , u = {};
    (e = t.exports = function(t, e, n, f, h) {
        var d, p, y, v, g = h ? function() {
            return t
        }
        : c(t), x = r(n, f, e ? 2 : 1), m = 0;
        if ("function" != typeof g)
            throw TypeError(t + " is not iterable!");
        if (i(g)) {
            for (d = s(t.length); d > m; m++)
                if ((v = e ? x(a(p = t[m])[0], p[1]) : x(t[m])) === l || v === u)
                    return v
        } else
            for (y = g.call(t); !(p = y.next()).done; )
                if ((v = o(y, x, p.value, e)) === l || v === u)
                    return v
    }
    ).BREAK = l,
    e.RETURN = u
}
, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
}
, function(t, e, n) {
    var r = n(16)
      , o = n(2)("iterator")
      , i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}
, function(t, e, n) {
    var r = n(60)
      , o = n(2)("iterator")
      , i = n(16);
    t.exports = n(0).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[o] || t["@@iterator"] || i[r(t)]
    }
}
, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
        case 0:
            return r ? t() : t.call(n);
        case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}
, function(t, e, n) {
    var r = n(1)
      , o = n(62).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , a = r.process
      , s = r.Promise
      , c = "process" == n(17)(a);
    t.exports = function() {
        var t, e, n, l = function() {
            var r, o;
            for (c && (r = a.domain) && r.exit(); t; ) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? n() : e = void 0,
                    r
                }
            }
            e = void 0,
            r && r.enter()
        };
        if (c)
            n = function() {
                a.nextTick(l)
            }
            ;
        else if (!i || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var u = s.resolve(void 0);
                n = function() {
                    u.then(l)
                }
            } else
                n = function() {
                    o.call(r, l)
                }
                ;
        else {
            var f = !0
              , h = document.createTextNode("");
            new i(l).observe(h, {
                characterData: !0
            }),
            n = function() {
                h.data = f = !f
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o,
            n()),
            e = o
        }
    }
}
, function(t, e, n) {
    var r = n(1).navigator;
    t.exports = r && r.userAgent || ""
}
, function(t, e, n) {
    var r = n(9);
    t.exports = function(t, e, n) {
        for (var o in e)
            n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(0)
      , i = n(6)
      , a = n(5)
      , s = n(2)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        a && e && !e[s] && i.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, e, n) {
    var r = n(2)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return a
            }
            ,
            t(i)
        } catch (t) {}
        return n
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , o = n(0)
      , i = n(1)
      , a = n(61)
      , s = n(64);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, o.Promise || i.Promise)
              , n = "function" == typeof t;
            return this.then(n ? function(n) {
                return s(e, t()).then(function() {
                    return n
                })
            }
            : t, n ? function(n) {
                return s(e, t()).then(function() {
                    throw n
                })
            }
            : t)
        }
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , o = n(36)
      , i = n(63);
    r(r.S, "Promise", {
        try: function(t) {
            var e = o.f(this)
              , n = i(t);
            return (n.e ? e.reject : e.resolve)(n.v),
            e.promise
        }
    })
}
, function(t, e) {
    t.exports = axios
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = a(n(12))
      , o = a(n(13))
      , i = a(n(134));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = function() {
        function t() {
            (0,
            r.default)(this, t),
            this._bb = []
        }
        return (0,
        o.default)(t, [{
            key: "_tt",
            value: function(t, e, n) {
                n ? this._bb.push(n) : this._bb[t].push(e)
            }
        }, {
            key: "_ff",
            value: function(t) {
                return this._bb[t]
            }
        }]),
        t
    }();
    e.default = function(t) {
        if ((t = String(t)) && t.length) {
            var e = i.default.split(",")
              , n = new s;
            e.forEach(function(t) {
                var e = t.split("");
                if (e.length > 0)
                    for (var r = 1; r < e.length; r++)
                        n._tt(e[0], e[r]);
                else
                    n._tt(void 0, void 0, [])
            });
            var r = t.charCodeAt(0) + "";
            return r = r.length > 1 ? r[1] : r,
            n._ff(r)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = ",,06btf2,,0zl5whqisecpmu98y,,1,,118oszunvmb9fd7hcpy203j-ilktq46raw5exg,,,0kjrxn-034d1ao7vg,2s6h0pg3nmyldxeakzuf4rb-7oci8v219q,2wtj5,3x70digacthupf6veq4b5kw9s-jly3onzm21r8,4zj3l1us45gch7ot2ka-exybn8i6qp0drvmwf9,,68q-udk7tz4xfvwp2e9om5g1jin63rlbhycas0,5jhpx3d658ktlzb4nrvymga01c9-27qewusfoi,,,7d49moi5kqncs6bjyxlav3tuh-rz207gp8f1we,87-gx65nuqzwtm0hoypifks9lr12v4e8cbadj3,91t8zofl52yq9pgrxesd4nbuamchj3vi0-w7k6"
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getQueryString = function(t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
          , n = window.location.search.substr(1).match(e);
        if (null != n)
            return decodeURIComponent(n[2]);
        if (window.location.hash.indexOf("?") && null != (n = window.location.hash.substr(window.location.hash.lastIndexOf("?")).substr(1).match(e)))
            return decodeURIComponent(n[2]);
        return null
    }
}
, , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = x(n(70))
      , o = x(n(38))
      , i = x(n(12))
      , a = x(n(13))
      , s = x(n(41))
      , c = x(n(54))
      , l = n(55)
      , u = x(l)
      , f = x(n(104))
      , h = n(56)
      , d = x(n(105))
      , p = x(n(138));
    n(111);
    var y = n(65)
      , v = n(135)
      , g = (n(141),
    x(n(69)));
    function x(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var m = (0,
    h.createStore)(d.default, (0,
    h.applyMiddleware)(h.thunk))
      , b = function(t) {
        function e() {
            (0,
            i.default)(this, e);
            var t = (0,
            s.default)(this, (e.__proto__ || (0,
            o.default)(e)).call(this));
            return t.state = {
                showToolbar: !1
            },
            t.zoomOut = t.zoomOut.bind(t),
            t.zoomIn = t.zoomIn.bind(t),
            t.save = t.save.bind(t),
            t.eventMap = {
                toggleFullScreen: "native",
                zoomOut: t.zoomOut,
                zoomIn: t.zoomIn,
                rescale: "native",
                save: t.save
            },
            t
        }
        return (0,
        c.default)(e, t),
        (0,
        a.default)(e, [{
            key: "zoomOut",
            value: function() {
                this.enterpriseSvg.zoomOut()
            }
        }, {
            key: "zoomIn",
            value: function() {
                this.enterpriseSvg.zoomIn()
            }
        }, {
            key: "save",
            value: function() {
                this.enterpriseSvg.save()    // 这个方法在2049行 , key: "save"
            }
        }, {
            key: "componentDidMount",
            value: function(t) {
                var e = this
                  , n = this.state.id;
                this.enterpriseSvg = new g.default(this.refs.enterpriseSvg),
                this.enterpriseSvg.clickHandler = function(t, n, o, i) {
					console.log('clickHandler')
					if(t===1){
						window.open('http://www.baidu.com?id='+n)
					}
                    // var a = e.state
                    //   , s = a.origin
                    //   , c = a.time
                    //   , l = n
                    //   , u = o;
                    // 1 === t ? window.parent !== window && window.parent.postMessage((0,
                    // r.default)({
                    //     action: "company",
                    //     companyId: String(l),
                    //     param: i,
                    //     time: c
                    // }), s) : 2 === t && window.parent !== window && window.parent.postMessage((0,
                    // r.default)({
                    //     action: "human",
                    //     companyId: String(u),
                    //     humanId: String(l),
                    //     time: c
                    // }), s)
                }
                ,
                (0,
                y.getEnterpriseMap)(n).then(function(t) {
					console.log("核心")
					var t = {"state":"ok","message":"","special":"","vipMessage":"","isLogin":0,"data":{"id":10517725,"holder":[{"id":18426592,"tagList":[{"type":1,"name":"大股东"},{"type":2,"name":"最终受益人"}],"percent":"100.00%","type":1,"name":"伊藤忠商事株式会社"}],"staff":[{"id":2038302246,"typeJoin":"董事长","type":2,"cid":10517725,"name":"池添洋一"},{"id":2023306884,"typeJoin":"董事,总经理","type":2,"cid":10517725,"name":"森常隆"},{"id":2276620061,"typeJoin":"董事","type":2,"cid":10517725,"name":"香月俊哉"},{"id":3214456100,"typeJoin":"监事","type":2,"cid":10517725,"name":"福岛昇"},{"id":3309779329,"typeJoin":"董事","type":2,"cid":10517725,"name":"福田祐士"}],"historyHolder":[],"name":"伊藤忠（中国）集团有限公司","branch":[{"type":1,"id":3375850810,"name":"伊藤忠（中国）集团有限公司哈尔滨分公司"},{"type":1,"id":3375817620,"name":"伊藤忠（中国）集团有限公司沈阳分公司"},{"type":1,"id":2345096084,"name":"伊藤忠（中国）集团有限公司四川分公司"},{"type":1,"id":100346517,"name":"伊藤忠（中国）集团有限公司日本中华投资性公司"},{"type":1,"id":2347264038,"name":"伊藤忠（中国）集团有限公司."}],"inverst":[{"id":6739334,"amount":"450.0万美元","percent":"100.00%","type":1,"name":"北京伊藤忠华糖综合加工有限公司"},{"id":585414489,"amount":"10510.0万美元","percent":"100.00%","type":1,"name":"上海伊藤忠商事有限公司"},{"id":335131422,"amount":"100.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（天津）有限公司"},{"id":247658698,"amount":"150.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（青岛）有限公司"},{"id":2344832184,"amount":"600.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（大连）有限公司"},{"id":2344493802,"amount":"100.0万美元","percent":"100.00%","type":1,"name":"伊藤忠（重庆）贸易有限公司"},{"id":2316264751,"amount":"1275.0万人民币","percent":"85.00%","type":1,"name":"杭州新花海商贸有限公司"},{"id":2963495484,"amount":"686.0万美元","percent":"49.00%","type":1,"name":"伊藤忠（上海）房地产开发有限公司"},{"id":2962896205,"amount":"72.0万美元","percent":"40.00%","type":1,"name":"上海伊隆保龄球有限公司"},{"id":2410781735,"amount":"26.0万美元","percent":"40.00%","type":1,"name":"创领信息技术（上海）有限公司"},{"id":379439356,"amount":"290.0万美元","percent":"40.00%","type":1,"name":"互腾贸易（上海）有限公司"},{"id":50170327,"amount":"480.0万美元","percent":"40.00%","type":1,"name":"伊藤忠纤维贸易（中国）有限公司"},{"id":14460637,"amount":"150.28万美元","percent":"40.00%","type":1,"name":"北京华藤示范米业有限公司"},{"id":1055962345,"amount":"7.0万美元","percent":"35.00%","type":1,"name":"爱美克思（上海）船务咨询有限公司"},{"id":2962911791,"amount":"9.0万美元","percent":"30.00%","type":1,"name":"上海伊纺国际贸易有限公司"},{"id":2963399551,"amount":"4.0万美元","percent":"20.00%","type":1,"name":"上海科尔摩斯咨询有限公司"},{"id":866409183,"amount":"13.0万美元","percent":"20.00%","type":1,"name":"腾新机械（上海）有限公司"},{"id":864561630,"amount":"4365.0万人民币","percent":"20.00%","type":1,"name":"山东龙大肉食品股份有限公司"},{"id":2410179681,"amount":"200.0万美元","percent":"20.00%","type":1,"name":"盛世利（中国）租赁有限公司"},{"id":24767958,"amount":"270.0万美元","percent":"20.00%","type":1,"name":"伊藤忠物流（中国）有限公司"},{"id":335261614,"amount":"441.0万美元","percent":"14.70%","type":1,"name":"天津物产天伊国际贸易有限公司"},{"id":1427839957,"amount":"125.0万美元","percent":"10.00%","type":1,"name":"烟台龙荣食品有限公司"},{"id":2406684636,"amount":"30.0万人民币","percent":"10.00%","type":1,"name":"山西能源清洁发展机制项目开发服务有限公司"},{"id":2349056052,"amount":"50.0万美元","percent":"10.00%","type":1,"name":"杰斯比塑料（无锡）有限公司"},{"id":1638491187,"amount":"121.752万美元","percent":"6.28%","type":1,"name":"烟台日世食品有限公司"},{"id":810350279,"amount":"58.8万人民币","percent":"4.90%","type":1,"name":"上海沂庆贸易有限公司"},{"id":1459600653,"amount":"200.0万美元","percent":"4.21%","type":1,"name":"东瑞盛世利融资租赁有限公司"},{"id":55870026,"amount":"648.0万人民币","percent":"2.76%","type":1,"name":"杉杉集团有限公司"},{"id":21118801,"amount":"8910.0万人民币","percent":"2.20%","type":1,"name":"山东如意科技集团有限公司"},{"id":2349636584,"amount":"18.742777万美元","percent":"2.11%","type":1,"name":"天健医疗科技（苏州）有限公司"},{"id":10517437,"amount":"108.32万美元","percent":"1.67%","type":1,"name":"华糖洋华堂商业有限公司"},{"id":2370667275,"amount":"18.32万美元","percent":"0.97%","type":1,"name":"上海尤妮佳有限公司"},{"id":2558339373,"percent":"-","type":1,"name":"黑龙江藤光粮油食品有限公司"}],"entityType":1,"historyLegal":[{"id":1759346874,"type":2,"cid":10517725,"name":"上田明裕"}]}}
                    "ok" === t.state && e.enterpriseSvg.setup(t.data)
                })
            }
        }, {
            key: "componentWillMount",
            value: function(t) {
                var e = (0,
                v.getQueryString)("id")
                  , n = (0,
                v.getQueryString)("mobile") || ""
                  , r = (0,
                v.getQueryString)("time") || ""
                  , o = (0,
                v.getQueryString)("key") || ""
                  , i = (0,
                v.getQueryString)("origin") || ""
                  , a = -1 != window.location.href.indexOf("full");
                this.setState({
                    id: e,
                    mobile: n,
                    time: r,
                    key: o,
                    origin: i,
                    showToolbar: a
                }),
                window.addEventListener && window.addEventListener("message", function(t) {
                    if (String(t.origin) === i && t.data) {
                        var e = JSON.parse(t.data);
                        if (String(e.time) !== r)
                            return;
                        e.action,
                        e.action
                    }
                }
                .bind(this), !1)
            }
        }, {
            key: "render",
            value: function() {
                var t = this.state.showToolbar;
                return u.default.createElement("div", {
                    className: "main pt-80"
                }, u.default.createElement("svg", {
                    ref: "enterpriseSvg"
                }), true ? u.default.createElement(p.default, {  // 原本的true 是 t
                    eventMap: this.eventMap
                }) : "")
            }
        }]),
        e
    }(l.Component);
    e.default = b,
    f.default.render(u.default.createElement(h.Provider, {
        store: m
    }, u.default.createElement(b, null)), document.getElementById("enterprise_ws"))
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = u(n(38))
      , o = u(n(12))
      , i = u(n(13))
      , a = u(n(41))
      , s = u(n(54))
      , c = n(55)
      , l = u(c);
    n(56);
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    n(139);
    var f = function(t) {
        function e(t) {
            (0,
            o.default)(this, e);
            var n = (0,
            a.default)(this, (e.__proto__ || (0,
            r.default)(e)).call(this, t));
            return n.state = {},
            n.eventMap = n.props.eventMap,
            n.toggleFullScreen = n.toggleFullScreen.bind(n),
            n.rescale = n.rescale.bind(n),
            ["", "webkit", "moz", "ms"].forEach(function(t) {
                return document.addEventListener(t + "fullscreenchange", function() {
                    n.refs.screenToggle.className = "toggleScreen-full" == n.refs.screenToggle.className ? "toggleScreen-abbr" : "toggleScreen-full",
                    n.refs.screenToggleIcon.className = "tpp tpp-caozuotiaoquanping" == n.refs.screenToggleIcon.className ? "tpp tpp-caozuotiaotuichu" : "tpp tpp-caozuotiaoquanping"
                }, !1)
            }),
            n
        }
        return (0,
        s.default)(e, t),
        (0,
        i.default)(e, [{
            key: "toggleFullScreen",
            value: function() {
                if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
                    var t = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen;
                    if (document.webkitExitFullscreen)
                        return void document.webkitExitFullscreen();
                    if (document.webkitCancelFullScreen)
                        return void document.webkitCancelFullScreen();
                    void 0 !== t && t && t.call(document)
                }
                var e = document.documentElement
                  , n = e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullScreen;
                void 0 !== n && n && n.call(e)
            }
        }, {
            key: "rescale",
            value: function() {
                window.location.reload()
            }
        }, {
            key: "componentDidMount",
            value: function(t) {}
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "graph-web-toolbar",
                    id: "graph-web-toolbar"
                }, l.default.createElement("ul", null, this.eventMap.toggleFullScreen ? l.default.createElement("li", {
                    ref: "screenToggle",
                    onClick: this.toggleFullScreen,
                    className: "toggleScreen-full"
                }, l.default.createElement("span", {
                    ref: "screenToggleIcon",
                    className: "tpp tpp-caozuotiaoquanping"
                })) : "", this.eventMap.zoomOut ? l.default.createElement("li", {
                    onClick: this.eventMap.zoomOut
                }, l.default.createElement("span", {
                    className: "tpp tpp-caozuotiaofangda"
                }), "放大") : "", this.eventMap.zoomIn ? l.default.createElement("li", {
                    onClick: this.eventMap.zoomIn
                }, l.default.createElement("span", {
                    className: "tpp tpp-caozuotiaosuoxiao"
                }), "缩小") : "", this.eventMap.rescale ? l.default.createElement("li", {
                    onClick: this.rescale
                }, l.default.createElement("span", {
                    className: "tpp tpp-caozuotiaohuanyuan"
                }), "还原") : "", this.eventMap.toggleName ? l.default.createElement("li", {
                    ref: "nameToggle",
                    className: "toggleName-abbr",
                    onClick: this.eventMap.toggleByName
                }, l.default.createElement("span", {
                    ref: "nameToggleIcon",
                    className: "tpp tpp-caozuotiaojiancheng"
                })) : "", this.eventMap.save ? l.default.createElement("li", {
                    onClick: this.eventMap.save   // 点击保存执行,实际是执行 this.enterpriseSvg.save()
                }, l.default.createElement("span", {
                    className: "tpp tpp-Addtodownload"
                }), "保存") : ""))
            }
        }]),
        e
    }(c.Component);
    e.default = f
}
, function(t, e, n) {
    var r = n(140);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(59)(r, o);
    r.locals && (t.exports = r.locals)
}
, function(t, e, n) {
    (t.exports = n(58)(!1)).push([t.i, '.graph-web-toolbar{\n  display: block;\n  position: absolute;\n  width: 48px;\n  right: 12px;\n  bottom: 120px;\n  font-size: 14px;\n  color: #666666;\n  z-index: 20;\n  background: #fff;\n  cursor:pointer;\n}\n.graph-web-toolbar>ul{\n\n  margin:0px;\n  box-sizing: border-box;\n  text-align: center;\n  padding: 0px;\n  border-top: 1px solid #DEDEDE;\n  border-bottom: 1px solid #DEDEDE;\n}\n\n\n.graph-web-toolbar ul>li{\n  width: 48px;\n  height: 64px;\n  padding-top: 12px;\n  list-style:none;\n  border-left: 1px solid #DEDEDE;\n  border-right: 1px solid #DEDEDE;\n}\n\n.graph-web-toolbar .tpp{\n  color:#999;\n}\n\n.graph-web-toolbar ul>li:hover{\n  background-color: #0084FF;\n  color:#FFFFFF;\n}\n\n.graph-web-toolbar>ul>li:hover .tpp{\n  color:#fff;\n}\n.graph-web-toolbar>ul>li>span{\n  font-size:24px;\n  display: block;\n  margin: 0 auto;\n}\n.toggleScreen-full:after{\n  content:"\\5168\\5C4F"\n}\n\n.toggleScreen-abbr:after{\n  content:"\\9000\\51FA"\n}\n.toggleName-full:after{\n  content:"\\5168\\79F0"\n}\n.toggleName-abbr:after{\n  content:"\\7B80\\79F0"\n}\n', ""])
}
, function(t, e, n) {
	
	// 下面是点击保存的功能
	
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = c(n(12))
      , o = c(n(13))
      , i = c(n(66))
      , a = c(n(67))
      , s = n(68);
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = function() {
        function t(e, n) {
            var o = this;
            (0,
            r.default)(this, t),
            n = n || {},
            this.width = n.width || window.innerWidth,
            this.height = n.height || window.innerHeight,
            this.branchExtend = !0,
            this.investExtend = !0,
            this.historyLegalExtend = !0,
            this.historyHolderExtend = !0,
            this.staffExtend = !0,
            this.holderExtend = !0,
            this.svg = e,
            this.scale = 1,
            this.options = n,
            this.sysTimeLog = new i.default,
            this.d3svg = a.default.select("svg");
            var s = a.default.zoom().scaleExtent([.4, 2]).on("zoom", function() {
                o.scale = a.default.event.transform.k,
                o.evnetContainer.attr("transform", a.default.event.transform)
            });
            this.d3svg.attr("width", this.width).attr("height", this.height).call(s)
        }
        return (0,
        o.default)(t, [{
            key: "clickHandler",
            value: function(t, e, n) {
                // console.log(t, e, n)
            }
        }, {
            key: "create",
            value: function(t) {
				console.log(t)
                this.root = {
                    id: t.id,
                    name: t.name
                },
                this.inverstNodes = t.inverst || [],
                this.holderNodes = t.holder || [],
                this.branchNodes = t.branch || [],
                this.staffNodes = t.staff || [],
                this.historyHolder = t.historyHolder || [],
                this.historyLegal = t.historyLegal || [],
                this.inverstLinks = [],
                this.holderLinks = [],
                this.branchLinks = [],
                this.staffLinks = [],
                this.historyHolderLinks = [],
                this.historyLegalLinks = [],
                this.draw()
            }
        }, {
            key: "draw",
            value: function() {
                this.d3svg.empty();
                for (var t = this.bgContainer = this.d3svg.append("g"), e = this.width, n = this.height, r = Math.ceil(e / 350), o = Math.ceil(n / 107), i = -1; i < r + 2; i++)
                    for (var a = 0; a < o + 2; a++)
                        t.append("image").attr("xlink:href", "https://cdn.tianyancha.com/dis/resources/images/water_mark_new.png").attr("x", 457 * i).attr("y", 214 * a).attr("width", 350).attr("height", 107).attr("transform", "rotate(-20)");
                this.evnetContainer = this.d3svg.append("g"),
                this.container = this.evnetContainer.append("g");
                var s = this.width / 2
                  , c = this.height / 2;
                this.container.attr("transform", "translate(" + s + ",+" + c + ")"),
                this.drawRoot(),
                this.initNodes(),
                this.drawArrow(),
                this.drawButton(),
                this.drawInverstNodes(),
                this.drawHolderNodes(),
                this.drawBranchNodes(),
                this.drawStaffNodes(),
                this.drawHistoryHolder(),
                this.drawHistoryLegal()
            }
        }, {
            key: "destory",
            value: function() {}
        }, {
            key: "drawRoot",
            value: function() {
                var t = Math.ceil(this.root.name.length / 20)
                  , e = this.container.append("g")
                  , n = this.root.name
                  , r = 280;
                t < 2 ? (r = 32 + 6 * (0,
                s.nameLength)(n),
                this.offsetWidth = (r - 80) / 2) : this.offsetWidth = 100;
                var o = 15 * t + 20;
                e.append("rect").style("fill", "#128bed").transition().duration(500).attr("width", r).attr("height", o).style("opacity", .73).attr("rx", 4).attr("ry", 4);
                for (var i = 0; i < t; i++)
                    e.append("text").attr("x", 10).attr("y", 20 + 15 * i).text(n.substr(20 * i, 20)).style("fill", "#ffffff").style("font-size", "13px");
                e.attr("transform", "translate(" + -r / 2 + "," + -o / 2 + ")")
            }
        }, {
            key: "drawArrow",
            value: function() {
                var t = this.offsetWidth;
                this.width,
                this.height;
                this.container.append("g").append("polygon").attr("points", "0,0 15,0 15,-4.25 20.5,1 15,6.25 15,2 0,2").style("fill", "#128bed").style("opacity", .73).attr("transform", "translate(" + (50 + t) + ",0)"),
                this.container.append("g").append("polygon").attr("points", "0,0 15,0 15,-4.25 20.5,1 15,6.25 15,2 0,2").style("fill", "#128bed").style("opacity", .73).attr("transform", "translate(" + (-70.5 - t) + ",0)"),
                this.container.append("g").append("polygon").attr("points", "0,0 15,0 15,-4.25 20.5,1 15,6.25 15,2 0,2").style("fill", "#128bed").style("opacity", .73).attr("transform", "translate(" + (50 + t) + "," + -40 + "),rotate(-30)"),
                this.container.append("g").append("polygon").attr("points", "0,0 15,0 15,-4.25 20.5,1 15,6.25 15,2 0,2").style("fill", "#128bed").style("opacity", .73).attr("transform", "translate(" + (68 + t) + ",50),rotate(-150)"),
                this.container.append("g").append("polygon").attr("points", "0,0 15,0 15,-4.25 20.5,1 15,6.25 15,2 0,2").style("fill", "#128bed").style("opacity", .73).attr("transform", "translate(" + (-70.5 - t) + "," + -50 + "),rotate(30)"),
                this.container.append("g").append("polygon").attr("points", "0,0 15,0 15,-4.25 20.5,1 15,6.25 15,2 0,2").style("fill", "#128bed").style("opacity", .73).attr("transform", "translate(" + (-70.5 - t) + ",50),rotate(-30)")
            }
        }, {
            key: "drawButton",
            value: function() {
                var t = this
                  , e = this.container
                  , n = this.offsetWidth
                  , r = this.container.append("g").attr("transform", "translate(" + (80 + n) + "," + -15.5 + ")").on("click", function() {
                    t.branchExtend = !t.branchExtend,
                    t.drawBranchNodes()
                });
                r.append("rect").attr("width", 90).attr("height", 33).style("fill", "#EECB5F").style("opacity", .2).attr("rx", 4).attr("ry", 4),
                this.branchNodes.length > 0 && (r.append("circle").attr("cx", 12).attr("cy", 16).attr("r", 6).attr("fill", "none").attr("stroke", "#666666").attr("stroke-width", "0.5").attr("class", "pointer"),
                r.append("path").attr("id", "branch-path").attr("d", "M7 15 H17 V17 H7 Z").attr("fill", "#666666").attr("class", "pointer")),
                r.append("text").attr("x", 25).attr("y", 20).text("分支机构").attr("fill", "#333333").style("font-weight", "bold").style("font-size", "12px");
                
				var o = e.append("g").attr("transform", "translate(" + (80 + n) + "," + -85 + ")").on("click", function() {
                    t.investExtend = !t.investExtend,
                    t.drawInverstNodes()
                });
                o.append("rect").attr("width", 90).attr("height", 33).style("fill", "#9E77F2").style("opacity", .2).attr("rx", 4).attr("ry", 4),
                this.inverstNodes.length > 0 && (o.append("circle").attr("cx", 12).attr("cy", 16).attr("r", 6).attr("fill", "none").attr("stroke", "#666666").attr("stroke-width", "0.5").attr("class", "pointer"),
                o.append("path").attr("id", "invest-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z").attr("fill", "#666666").attr("class", "pointer")),
                o.append("text").attr("x", 25).attr("y", 20).text("对外投资").attr("fill", "#333333").style("font-weight", "bold").style("font-size", "12px");
                
				var i = e.append("g").attr("transform", "translate(" + (80 + n) + ",50)").on("click", function() {
                    t.historyLegalExtend = !t.historyLegalExtend,
                    t.drawHistoryLegal()
                });
                i.append("rect").attr("width", 90).attr("height", 33).style("fill", "#ED6D5C").style("opacity", .2).attr("rx", 4).attr("ry", 4),
                this.historyLegal.length > 0 && (i.append("circle").attr("cx", 12).attr("cy", 16).attr("r", 6).attr("fill", "none").attr("stroke", "#666666").attr("stroke-width", "0.5").attr("class", "pointer"),
                i.append("path").attr("id", "hoper-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z").attr("fill", "#666666").attr("class", "pointer")),
                i.append("text").attr("x", 25).attr("y", 20).text("历史法人").style("font-weight", "bold").attr("fill", "#333333").style("font-size", "12px");
                var a = e.append("g").attr("transform", "translate(" + (-170 - n) + ",50)").on("click", function() {
                    t.historyHolderExtend = !t.historyHolderExtend,
                    t.drawHistoryHolder()
                });
                a.append("rect").attr("width", 90).attr("height", 33).style("fill", "#ED6D5C").style("opacity", .2).attr("rx", 4).attr("ry", 4),
                this.historyHolder.length > 0 && (a.append("circle").attr("cx", 12).attr("cy", 16).attr("r", 6).attr("fill", "none").attr("stroke", "#666666").attr("stroke-width", "0.5").attr("class", "pointer"),
                a.append("path").attr("id", "hstock-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z").attr("fill", "#666666").attr("class", "pointer")),
                a.append("text").attr("x", 25).attr("y", 20).text("历史股东").attr("fill", "#333333").style("font-weight", "bold").style("font-size", "12px");
                var s = e.append("g").attr("transform", "translate(" + (-170 - n) + "," + -15.5 + ")").on("click", function() {
                    t.staffExtend = !t.staffExtend,
                    t.drawStaffNodes()
                });
                s.append("rect").attr("width", 90).attr("height", 33).style("fill", "#67AEF5").style("opacity", .2).attr("rx", 4).attr("ry", 4),
                this.staffNodes.length > 0 && (s.append("circle").attr("cx", 12).attr("cy", 16).attr("r", 6).attr("fill", "none").attr("stroke", "#666666").attr("stroke-width", "0.5").attr("class", "pointer"),
                s.append("path").attr("id", "employ-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z").attr("fill", "#666666").attr("class", "pointer")),
                s.append("text").attr("x", 25).attr("y", 20).text("高管").attr("fill", "#333333").style("font-weight", "bold").style("font-size", "12px");
                var c = e.append("g").attr("transform", "translate(" + (-170 - n) + "," + -85 + ")").on("click", function() {
                    t.holderExtend = !t.holderExtend,
                    t.drawHolderNodes()
                });
                c.append("rect").attr("width", 90).attr("height", 33).style("fill", "#84DB56").style("opacity", .2).attr("rx", 4).attr("ry", 4),
                this.holderNodes.length > 0 && (c.append("circle").attr("cx", 12).attr("cy", 16).attr("r", 6).attr("fill", "none").attr("stroke", "#666666").attr("stroke-width", "0.5").attr("class", "pointer"),
                c.append("path").attr("id", "stock-path").attr("d", "M7 15 H17 V17 H7 Z").attr("fill", "#666666").attr("class", "pointer")),
                c.append("text").attr("x", 25).attr("y", 20).text("股东").attr("fill", "#333333").style("font-weight", "bold").style("font-size", "12px")
            }
        }, {
            key: "initNodes",
            value: function() {
                for (var t = this.offsetWidth, e = this.branchNodes, n = this.inverstNodes, r = this.historyLegal, o = this.historyHolder, i = this.staffNodes, a = this.holderNodes, s = this.branchLinks, c = this.inverstLinks, l = this.historyLegalLinks, u = this.historyHolderLinks, f = this.staffLinks, h = this.holderLinks, d = 0, p = 0, y = 0, v = 0, g = 0; g < e.length; g++)
                    e[g].x = 220 + t,
                    e[g].y = 38 * g - 14,
                    s.push({
                        source: {
                            x: e[g].x - 25,
                            y: e[g].y + 14
                        },
                        target: {
                            x: e[g].x,
                            y: e[g].y + 14
                        }
                    }),
                    e[g].y - 0 > v && (v = e[g].y - 0);
                e.length > 0 && (s.push({
                    source: {
                        x: 170 + t,
                        y: 0
                    },
                    target: {
                        x: 195 + t,
                        y: 0
                    }
                }),
                s.push({
                    source: {
                        x: 195 + t,
                        y: 0
                    },
                    target: {
                        x: 195 + t,
                        y: e[e.length - 1].y + 14
                    }
                }));
                for (g = 0; g < n.length; g++) {
                    n[g].x = 220 + t,
                    n[g].y = -85 - 38 * g,
                    (w = n[g].y) < p && (p = w),
                    c.push({
                        source: {
                            x: n[g].x - 25,
                            y: n[g].y + 14
                        },
                        target: {
                            x: n[g].x,
                            y: n[g].y + 14
                        }
                    }),
                    n[g].y - 0 < y && (y = n[g].y - 0)
                }
                n.length > 0 && (c.push({
                    source: {
                        x: 170 + t,
                        y: -71
                    },
                    target: {
                        x: 195 + t,
                        y: -71
                    }
                }),
                c.push({
                    source: {
                        x: 195 + t,
                        y: -71
                    },
                    target: {
                        x: 195 + t,
                        y: n[n.length - 1].y + 14
                    }
                }));
                var x = 0;
                for (g = 0; g < r.length; g++) {
                    if (r[g].x = 100 + t,
                    0 == g)
                        r[g].y = 90;
                    else
                        x += 22 + 16 * Math.ceil(r[g - 1].name.length / 6),
                        r[g].y = 90 + x;
                    l.push({
                        source: {
                            x: r[g].x - 20,
                            y: r[g].y + 14
                        },
                        target: {
                            x: r[g].x,
                            y: r[g].y + 14
                        }
                    }),
                    r[g].y - 0 > v && (v = r[g].y - 0)
                }
                r.length > 0 && l.push({
                    source: {
                        x: 80 + t,
                        y: 80
                    },
                    target: {
                        x: 80 + t,
                        y: r[r.length - 1].y + 14
                    }
                });
                var m = 0;
                for (g = 0; g < o.length; g++) {
                    if (o[g].x = -150 - t,
                    0 == g)
                        o[g].y = 90;
                    else
                        m += 22 + 16 * Math.ceil(o[g - 1].name.length / 16),
                        o[g].y = 90 + m;
                    u.push({
                        source: {
                            x: o[g].x - 20,
                            y: o[g].y + 14
                        },
                        target: {
                            x: o[g].x,
                            y: o[g].y + 14
                        }
                    }),
                    o[g].y - 0 > v && (v = o[g].y - 0)
                }
                o.length > 0 && u.push({
                    source: {
                        x: -170 - t,
                        y: 80
                    },
                    target: {
                        x: -170 - t,
                        y: o[o.length - 1].y + 14
                    }
                });
                for (g = 0; g < i.length; g++) {
                    i[g].x = -220 - t,
                    i[g].y = 38 * g - 14;
                    var b = d;
                    i[g].name ? b = i[g].typeJoin ? i[g].x - 40 - 12 * i[g].name.length - 12 * i[g].typeJoin.length : i[g].x - 30 - 12 * i[g].name.length : minx = i[g].x - 90,
                    b < d && (d = b),
                    f.push({
                        source: {
                            x: i[g].x + 25,
                            y: i[g].y + 14
                        },
                        target: {
                            x: i[g].x,
                            y: i[g].y + 14
                        }
                    }),
                    i[g].y - 0 > v && (v = i[g].y - 0)
                }
                i.length > 0 && (f.push({
                    source: {
                        x: -170 - t,
                        y: 0
                    },
                    target: {
                        x: -195 - t,
                        y: 0
                    }
                }),
                f.push({
                    source: {
                        x: -195 - t,
                        y: 0
                    },
                    target: {
                        x: -195 - t,
                        y: i[i.length - 1].y + 14
                    }
                }));
                for (g = 0; g < a.length; g++) {
                    a[g].x = -220 - t,
                    a[g].y = -85 - 38 * g;
                    var w;
                    b = d;
                    a[g].name ? b = a[g].percent ? a[g].x - 40 - 12 * a[g].name.length - 12 * a[g].percent.length : a[g].x - 30 - 12 * a[g].name.length : minx = a[g].x - 90,
                    b < d && (d = b),
                    (w = a[g].y) < p && (p = w),
                    h.push({
                        source: {
                            x: a[g].x + 25,
                            y: a[g].y + 14
                        },
                        target: {
                            x: a[g].x,
                            y: a[g].y + 14
                        }
                    }),
                    a[g].y - 0 < y && (y = a[g].y - 0)
                }
                a.length > 0 && (h.push({
                    source: {
                        x: -170 - t,
                        y: -71
                    },
                    target: {
                        x: -195 - t,
                        y: -71
                    }
                }),
                h.push({
                    source: {
                        x: -195 - t,
                        y: -71
                    },
                    target: {
                        x: -195 - t,
                        y: a[a.length - 1].y + 14
                    }
                }))
            }
        }, {
            key: "drawInverstNodes",
            value: function() {
                var t = this
                  , e = this.investExtend
                  , n = this.inverstNodes
                  , r = this.inverstLinks
                  , o = this.offsetWidth
                  , i = this.container
                  , c = []
                  , l = [];
                e ? (c = n,
                l = r,
                a.default.select("#invest-path").attr("d", "M7 15 H17 V17 H7 Z")) : (c = [],
                l = [],
                a.default.select("#invest-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z"));
                var u = i.selectAll(".invest-node").data(c)
                  , f = u.enter()
                  , h = u.exit()
                  , d = f.append("g").classed("invest-node", !0).classed("pointer", !0).attr("transform", function(t) {
                    return "translate(" + (80 + o) + "," + -85 + ")"
                });
                d.on("click", function(e) {
                    t.clickHandler(e.type, e.id, e.cid)
                }),
                d.append("rect").attr("width", function(t) {
                    return t.name ? 30 + 6 * (0,
                    s.nameLength)(t.name) : 90
                }).attr("height", 28).style("fill", "#9E77F2").style("opacity", 0).attr("rx", 4).attr("ry", 4),
                d.append("text").attr("x", 15).attr("y", 18).text(function(t) {
                    return t.name
                }).attr("fill", "#333333").style("font-size", "12px").style("opacity", 0);
                var p = d.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + t.y + ")"
                });
                p.select("rect").style("opacity", .2),
                p.select("text").style("opacity", 1);
                var y = h.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + (80 + o) + "," + -85 + ")"
                }).remove();
                y.select("rect").style("fill-opacity", 0),
                y.select("text").style("fill-opacity", 0);
                var v = i.selectAll(".invest-link").data(l)
                  , g = v.enter()
                  , x = v.exit();
                g.append("line").attr("class", "invest-link").attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).transition().duration(500).attr("x2", function(t) {
                    return t.target.x
                }).attr("y2", function(t) {
                    return t.target.y
                }).style("stroke", "#B4B4B4").style("stroke-width", 1),
                x.transition().duration(500).attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).remove()
            }
        }, {
            key: "drawHolderNodes",
            value: function() {
                var t = this
                  , e = this.holderExtend
                  , n = this.holderNodes
                  , r = this.holderLinks
                  , o = this.container
                  , i = this.offsetWidth
                  , c = []
                  , l = [];
                e ? (c = n,
                l = r,
                a.default.select("#stock-path").attr("d", "M7 15 H17 V17 H7 Z")) : (c = [],
                l = [],
                a.default.select("#stock-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z"));
                var u = o.selectAll(".stock-node").data(c)
                  , f = u.enter()
                  , h = u.exit()
                  , d = f.append("g").attr("class", "stock-node").classed("pointer", !0).attr("transform", function(t) {
                    return "translate(" + (-170 - i) + "," + -85 + ")"
                });
                d.on("click", function(e) {
                    t.clickHandler(e.type, e.id, e.cid)
                }),
                d.append("rect").attr("width", function(t) {
                    return t.name ? t.percent ? 40 + 6 * (0,
                    s.nameLength)(t.name) + 6 * (0,
                    s.nameLength)(t.percent) : 30 + 12 * t.name.length : 90
                }).attr("height", 28).attr("x", function(t) {
                    return t.name ? t.percent ? -40 - 6 * (0,
                    s.nameLength)(t.name) - 6 * (0,
                    s.nameLength)(t.percent) : -30 - 6 * (0,
                    s.nameLength)(t.name) : -90
                }).style("fill", "#84DB56").style("opacity", 0).attr("rx", 4).attr("ry", 4),
                d.append("text").attr("x", function(t) {
                    return t.name ? t.percent ? -25 - 6 * (0,
                    s.nameLength)(t.name) - 6 * (0,
                    s.nameLength)(t.percent) : -15 - 6 * (0,
                    s.nameLength)(t.name) : -70
                }).attr("y", 18).text(function(t) {
                    return t.name
                }).attr("class", "stock-name").attr("fill", "#333333").style("font-size", "12px").style("opacity", 0),
                d.append("text").attr("x", function(t) {
                    return t.name ? -15 - 6 * (0,
                    s.nameLength)(t.percent) : -70
                }).attr("y", 18).text(function(t) {
                    return t.percent
                }).attr("class", "stock-job").attr("fill", "#8a8a8a").style("font-size", "12px").style("opacity", 0);
                var p = d.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + t.y + ")"
                });
                p.select("rect").style("opacity", .2),
                p.select(".stock-name").style("opacity", 1),
                p.select(".stock-job").style("opacity", 1);
                var y = h.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + (-170 - i) + "," + -85 + ")"
                }).remove();
                y.select("rect").style("fill-opacity", 0),
                y.select(".stock-name").style("fill-opacity", 0),
                y.select(".stock-job").style("fill-opacity", 0);
                var v = o.selectAll(".stock-link").data(l)
                  , g = v.enter()
                  , x = v.exit();
                g.append("line").attr("class", "stock-link").attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).transition().duration(500).attr("x2", function(t) {
                    return t.target.x
                }).attr("y2", function(t) {
                    return t.target.y
                }).style("stroke", "#B4B4B4").style("stroke-width", 1),
                x.transition().duration(500).attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).remove()
            }
        }, {
            key: "drawBranchNodes",
            value: function() {
                var t = this
                  , e = []
                  , n = []
                  , r = this.container
                  , o = this.branchLinks
                  , i = this.offsetWidth;
                this.branchExtend ? (e = this.branchNodes,
                n = o,
                a.default.select("#branch-path").attr("d", "M7 15 H17 V17 H7 Z")) : (e = [],
                n = [],
                a.default.select("#branch-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z"));
                var c = r.selectAll(".branch-node").data(e)
                  , l = c.enter()
                  , u = c.exit()
                  , f = l.append("g").attr("class", "branch-node").classed("pointer", !0).attr("transform", function(t) {
                    return "translate(" + (80 + i) + "," + -15.5 + ")"
                });
                f.on("click", function(e) {
                    t.clickHandler(e.type, e.id, e.cid)
                }),
                f.append("rect").attr("width", function(t) {
                    return t.name ? 30 + 6 * (0,
                    s.nameLength)(t.name) : 90
                }).attr("height", 28).style("fill", "#EECB5F").style("opacity", 0).attr("rx", 4).attr("ry", 4),
                f.append("text").attr("x", 15).attr("y", 18).text(function(t) {
                    return t.name
                }).attr("fill", "#333333").style("font-size", "12px").style("opacity", 0);
                var h = f.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + t.y + ")"
                });
                h.select("rect").style("opacity", .2),
                h.select("text").style("opacity", 1);
                var d = u.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + (80 + i) + "," + -15.5 + ")"
                }).remove();
                d.select("rect").style("fill-opacity", 0),
                d.select("text").style("fill-opacity", 0);
                var p = r.selectAll(".branch-link").data(n)
                  , y = p.enter()
                  , v = p.exit();
                y.append("line").attr("class", "branch-link").attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).transition().duration(500).attr("x2", function(t) {
                    return t.target.x
                }).attr("y2", function(t) {
                    return t.target.y
                }).style("stroke", "#B4B4B4").style("stroke-width", 1),
                v.transition().duration(500).attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).remove()
            }
        }, {
            key: "drawStaffNodes",
            value: function() {
                var t = this
                  , e = this.staffExtend
                  , n = this.staffNodes
                  , r = this.staffLinks
                  , o = this.container
                  , i = this.offsetWidth
                  , c = []
                  , l = [];
                e ? (c = n,
                l = r,
                a.default.select("#employ-path").attr("d", "M7 15 H17 V17 H7 Z")) : (c = [],
                l = [],
                a.default.select("#employ-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z"));
                var u = o.selectAll(".employ-node").data(c)
                  , f = u.enter()
                  , h = u.exit()
                  , d = f.append("g").attr("class", "employ-node").classed("pointer", !0).attr("transform", function(t) {
                    return "translate(" + (-170 - i) + "," + -15.5 + ")"
                });
                d.on("click", function(e) {
                    t.clickHandler(e.type, e.id, e.cid)
                }),
                d.append("rect").attr("width", function(t) {
                    return t.name ? t.typeJoin ? 40 + 6 * (0,
                    s.nameLength)(t.name) + 6 * (0,
                    s.nameLength)(t.typeJoin) : 30 + 12 * t.name.length : 90
                }).attr("height", 28).attr("x", function(t) {
                    return t.name ? t.typeJoin ? -40 - 6 * (0,
                    s.nameLength)(t.name) - 6 * (0,
                    s.nameLength)(t.typeJoin) : -30 - 6 * (0,
                    s.nameLength)(t.name) : -90
                }).style("fill", "#67AEF5").style("opacity", 0).attr("rx", 4).attr("ry", 4),
                this.isIE ? d.append("text").attr("x", function(t) {
                    return t.name ? t.typeJoin ? -25 - 6 * (0,
                    s.nameLength)(t.name) - 6 * (0,
                    s.nameLength)(t.typeJoin) : -15 - 6 * (0,
                    s.nameLength)(t.name) : -70
                }).attr("y", 18).text(function(t) {
                    return t.name
                }).attr("class", "employ-name").attr("fill", "#333333").style("font-size", "12px").style("opacity", 0) : d.append("text").attr("x", function(t) {
                    return t.name ? t.typeJoin ? -25 - 6 * (0,
                    s.nameLength)(t.name) - 6 * (0,
                    s.nameLength)(t.typeJoin) : -15 - 6 * (0,
                    s.nameLength)(t.name) : -70
                }).attr("y", 18).html(function(t) {
                    return t.name
                }).attr("class", "employ-name").attr("fill", "#333333").style("font-size", "12px").style("opacity", 0),
                d.append("text").attr("x", function(t) {
                    return t.name ? -15 - 6 * (0,
                    s.nameLength)(t.typeJoin) : -70
                }).attr("y", 18).text(function(t) {
                    return t.typeJoin
                }).attr("class", "employ-job").attr("fill", "#8a8a8a").style("font-size", "12px").style("opacity", 0);
                var p = d.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + t.y + ")"
                });
                p.select("rect").style("opacity", .2),
                p.select(".employ-name").style("opacity", 1),
                p.select(".employ-job").style("opacity", 1);
                var y = h.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + (-170 - i) + "," + -15.5 + ")"
                }).remove();
                y.select("rect").style("fill-opacity", 0),
                y.select(".employ-name").style("fill-opacity", 0),
                y.select(".employ-job").style("fill-opacity", 0);
                var v = o.selectAll(".employ-link").data(l)
                  , g = v.enter()
                  , x = v.exit();
                g.append("line").attr("class", "employ-link").attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).transition().duration(500).attr("x2", function(t) {
                    return t.target.x
                }).attr("y2", function(t) {
                    return t.target.y
                }).style("stroke", "#B4B4B4").style("stroke-width", 1),
                x.transition().duration(500).attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).remove()
            }
        }, {
            key: "drawHistoryHolder",
            value: function() {
                var t = this
                  , e = this.historyHolderExtend
                  , n = this.historyHolder
                  , r = this.historyHolderLinks
                  , o = this.container
                  , i = this.offsetWidth
                  , c = []
                  , l = [];
                e ? (c = n,
                l = r,
                a.default.select("#hstock-path").attr("d", "M7 15 H17 V17 H7 Z")) : (c = [],
                l = [],
                a.default.select("#hstock-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z"));
                var u = o.selectAll(".hstock-node").data(c)
                  , f = u.enter()
                  , h = u.exit()
                  , d = f.append("g").attr("class", "hstock-node").classed("pointer", !0).attr("transform", function(t) {
                    return "translate(" + (-170 - i) + ",55)"
                });
                d.on("click", function(e) {
                    t.clickHandler(e.type, e.id, e.cid)
                }),
                d.append("rect").attr("width", function(t) {
                    return t.name ? Math.ceil(t.name.length / 16) > 1 ? 222 : 30 + 6 * (0,
                    s.nameLength)(t.name) : 90
                }).attr("height", function(t) {
                    return t.name && Math.ceil(t.name.length / 16) > 1 ? 12 + 16 * Math.ceil(t.name.length / 16) : 28
                }).style("fill", "#ED6D5C").style("opacity", 0).attr("rx", 4).attr("ry", 4),
                d.each(function(t) {
                    for (var e = 0; e < Math.ceil(t.name.length / 16); e++)
                        a.default.select(this).append("text").text(function(t) {
                            return t.name.substr(16 * e, 16)
                        }).attr("x", 15).attr("y", 18 + 16 * e).attr("fill", "#333333").style("font-size", "12px").style("opacity", 0)
                });
                var p = d.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + t.y + ")"
                });
                p.select("rect").style("opacity", .2),
                p.selectAll("text").style("opacity", 1);
                var y = h.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + (-170 - i) + ",55)"
                }).remove();
                y.select("rect").style("fill-opacity", 0),
                y.selectAll("text").style("fill-opacity", 0);
                var v = o.selectAll(".hstock-link").data(l)
                  , g = v.enter()
                  , x = v.exit();
                g.append("line").attr("class", "hstock-link").attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).transition().duration(500).attr("x2", function(t) {
                    return t.target.x
                }).attr("y2", function(t) {
                    return t.target.y
                }).style("stroke", "#B4B4B4").style("stroke-width", 1),
                x.transition().duration(500).attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).remove()
            }
        }, {
            key: "drawHistoryLegal",
            value: function() {
                var t = this
                  , e = this.historyLegalExtend
                  , n = this.historyLegal
                  , r = this.historyLegalLinks
                  , o = this.container
                  , i = this.offsetWidth
                  , c = []
                  , l = [];
                e ? (c = n,
                l = r,
                a.default.select("#hoper-path").attr("d", "M7 15 H17 V17 H7 Z")) : (c = [],
                l = [],
                a.default.select("#hoper-path").attr("d", "M7 15 H11 V11 H13 V15 H17 V17 H13 V21 H11 V17 H7 Z"));
                var u = o.selectAll(".hoper-node").data(c)
                  , f = u.enter()
                  , h = u.exit()
                  , d = f.append("g").attr("class", "hoper-node").classed("pointer", !0).attr("transform", function(t) {
                    return "translate(" + (80 + i) + ",55)"
                });
                d.on("click", function(e) {
                    t.clickHandler(e.type, e.id, e.cid)
                }),
                d.append("rect").attr("width", function(t) {
                    return t.name ? Math.ceil(t.name.length / 6) > 1 ? 90 : 30 + 6 * (0,
                    s.nameLength)(t.name) : 90
                }).attr("height", function(t) {
                    return t.name && Math.ceil(t.name.length / 6) > 1 ? 12 + 16 * Math.ceil(t.name.length / 6) : 28
                }).style("fill", "#ED6D5C").style("opacity", 0).attr("rx", 4).attr("ry", 4),
                d.each(function(t) {
                    for (var e = 0; e < Math.ceil(t.name.length / 6); e++)
                        a.default.select(this).append("text").text(function(t) {
                            return t.name.substr(6 * e, 6)
                        }).attr("x", 15).attr("y", 18 + 16 * e).attr("fill", "#333333").style("font-size", "12px").style("opacity", 0)
                });
                var p = d.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + t.x + "," + t.y + ")"
                });
                p.select("rect").style("opacity", .2),
                p.selectAll("text").style("opacity", 1);
                var y = h.transition().duration(500).attr("transform", function(t) {
                    return "translate(" + (80 + i) + ",55)"
                }).remove();
                y.select("rect").style("fill-opacity", 0),
                y.selectAll("text").style("fill-opacity", 0);
                var v = o.selectAll(".hoper-link").data(l)
                  , g = v.enter()
                  , x = v.exit();
                g.append("line").attr("class", "hoper-link").attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).transition().duration(500).attr("x2", function(t) {
                    return t.target.x
                }).attr("y2", function(t) {
                    return t.target.y
                }).style("stroke", "#B4B4B4").style("stroke-width", 1),
                x.transition().duration(500).attr("x1", function(t) {
                    return t.source.x
                }).attr("y1", function(t) {
                    return t.source.y
                }).attr("x2", function(t) {
                    return t.source.x
                }).attr("y2", function(t) {
                    return t.source.y
                }).remove()
            }
        }]),
        t
    }();
    e.default = l
}
]);
