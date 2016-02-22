function uiUploader(a) {
    "use strict";

    function b(a) {
        for (var b = 0; b < a.length; b++) i.files.push(a[b])
    }

    function c() {
        return i.files
    }

    function d(a) {
        i.options = a;
        for (var b = 0; b < i.files.length && i.activeUploads != i.options.concurrency; b++) i.files[b].active || h(i.files[b], i.options.url)
    }

    function e(a) {
        i.files.splice(i.files.indexOf(a), 1)
    }

    function f() {
        i.files.splice(0, i.files.length)
    }

    function g(a) {
        var b = ["n/a", "bytes", "KiB", "MiB", "GiB", "TB", "PB", "EiB", "ZiB", "YiB"],
            c = +Math.floor(Math.log(a) / Math.log(1024));
        return (a / Math.pow(1024, c)).toFixed(c ? 1 : 0) + " " + b[isNaN(a) ? 0 : c + 1]
    }

    function h(a, b) {
        var c, e, f, h = "",
            j = "file";
        if (i.activeUploads += 1, a.active = !0, c = new window.XMLHttpRequest, e = new window.FormData, c.open("POST", b), c.upload.onloadstart = function() {}, c.upload.onprogress = function(b) {
                b.lengthComputable && (a.loaded = b.loaded, a.humanSize = g(b.loaded), i.options.onProgress(a))
            }, c.onload = function() {
                i.activeUploads -= 1, d(i.options), i.options.onCompleted(a, c.responseText)
            }, c.onerror = function() {}, h)
            for (f in h) h.hasOwnProperty(f) && e.append(f, h[f]);
        return e.append(j, a, a.name), c.send(e), c
    }
    var i = this;
    return i.files = [], i.options = {}, i.activeUploads = 0, a.info("uiUploader loaded"), {
        addFiles: b,
        getFiles: c,
        files: i.files,
        startUpload: d,
        removeFile: e,
        removeAll: f
    }
}
if (function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = _.type(a);
            return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (_.isFunction(b)) return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return _.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ha.test(b)) return _.filter(b, a, c);
                b = _.filter(b, a)
            }
            return _.grep(a, function(a) {
                return U.call(b, a) >= 0 !== c
            })
        }

        function e(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function f(a) {
            var b = oa[a] = {};
            return _.each(a.match(na) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
        }

        function h() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = _.expando + h.uid++
        }

        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                    } catch (e) {}
                    sa.set(a, b, c)
                } else c = void 0;
            return c
        }

        function j() {
            return !0
        }

        function k() {
            return !1
        }

        function l() {
            try {
                return Z.activeElement
            } catch (a) {}
        }

        function m(a, b) {
            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function n(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function o(a) {
            var b = Ka.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function p(a, b) {
            for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
        }

        function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
                }
                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
            }
        }

        function r(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
        }

        function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function t(b, c) {
            var d, e = _(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
            return e.detach(), f
        }

        function u(a) {
            var b = Z,
                c = Oa[a];
            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
        }

        function v(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function w(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function x(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                if (b = Xa[e] + c, b in a) return b;
            return d
        }

        function y(a, b, c) {
            var d = Ta.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function z(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
            return g
        }

        function A(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = "border-box" === _.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e)
        }

        function D() {
            return setTimeout(function() {
                Ya = void 0
            }), Ya = _.now()
        }

        function E(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function F(a, b, c) {
            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function G(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && xa(a),
                p = ra.get(a, "fxshow");
            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], $a.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || _.style(a, d)
                } else j = void 0;
            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                    _(a).hide()
                }), l.done(function() {
                    var b;
                    ra.remove(a, "fxshow");
                    for (b in m) _.style(a, b, m[b])
                });
                for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function I(a, b, c) {
            var d, e, f = 0,
                g = bb.length,
                h = _.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: _.extend({}, b),
                    opts: _.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Ya || D(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (H(k, j.opts.specialEasing); g > f; f++)
                if (d = bb[f].call(j, a, k, j.opts)) return d;
            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function J(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(na) || [];
                if (_.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function K(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, _.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === tb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function L(a, b) {
            var c, d, e = _.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && _.extend(!0, a, d), a
        }

        function M(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function N(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function O(a, b, c, d) {
            var e;
            if (_.isArray(b)) _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== _.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d)
        }

        function P(a) {
            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function(a, b) {
                return new _.fn.init(a, b)
            },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function(a, b) {
                return b.toUpperCase()
            };
        _.fn = _.prototype = {
            jquery: $,
            constructor: _,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
            },
            pushStack: function(a) {
                var b = _.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return _.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(_.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice
        }, _.extend = _.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, _.extend({
            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === _.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ba, "ms-").replace(ca, da)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(aa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : U.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return S.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(R.call(arguments)))
                }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
            },
            now: Date.now,
            support: Y
        }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            V["[object " + b + "]"] = b.toLowerCase()
        });
        var ea = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b
                    }, g, !0), j = n(function(a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function() {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[u] = h(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                    var d, e, f, g, h, i, j, k = S[a + " "];
                    if (k) return c ? 0 : k.slice(0);
                    for (h = a, i = [], j = w.preFilter; h;) {
                        (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                            value: d,
                            type: e[0].replace(ia, " ")
                        }), h = h.slice(d.length));
                        for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                        if (!d) break
                    }
                    return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
                }, A = b.compile = function(a, b) {
                    var c, d = [],
                        e = [],
                        f = T[a + " "];
                    if (!f) {
                        for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                        f = T(a, t(e, d)), f.selector = a
                    }
                    return f
                }, B = b.select = function(a, b, c, d) {
                    var e, f, g, h, i, j = "function" == typeof a && a,
                        l = !d && z(a = j.selector || a);
                    if (c = c || [], 1 === l.length) {
                        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                            if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                            j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                        }
                        for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                            if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                                if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                                break
                            }
                    }
                    return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
                }, v.sortStable = N.split("").sort(U).join("") === N,
                v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                    return 1 & a.compareDocumentPosition(G.createElement("div"))
                }), e(function(a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || f("type|href|height|width", function(a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), v.attributes && e(function(a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || f("value", function(a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }), e(function(a) {
                    return null == a.getAttribute("disabled")
                }) || f(ba, function(a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }), b
        }(a);
        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
        _.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, _.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
            }
        });
        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
            };
        ka.prototype = _.fn, ia = _(Z);
        var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        _.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && _(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), _.fn.extend({
            has: function(a) {
                var b = _(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (_.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? _.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), _.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return _.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return _.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return _.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return _.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return _.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return _.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return _.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return _.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || _.merge([], a.childNodes)
            }
        }, function(a, b) {
            _.fn[a] = function(c, d) {
                var e = _.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var na = /\S+/g,
            oa = {};
        _.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var c = i.length;
                            ! function f(b) {
                                _.each(b, function(b, c) {
                                    var d = _.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function() {
                        return i && _.each(arguments, function(a, b) {
                            for (var c;
                                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], g = 0, this
                    },
                    disable: function() {
                        return i = j = b = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, b || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return l
        }, _.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", _.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return _.Deferred(function(c) {
                                _.each(b, function(b, f) {
                                    var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? _.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, _.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var pa;
        _.fn.ready = function(a) {
            return _.ready.promise().done(a), this
        }, _.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? _.readyWait++ : _.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
            }
        }), _.ready.promise = function(b) {
            return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
        }, _.ready.promise();
        var qa = _.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === _.type(c)) {
                e = !0;
                for (h in c) _.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(_(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        };
        _.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
            key: function(a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = h.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, _.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                    for (; c--;) delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !_.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
        _.extend({
            hasData: function(a) {
                return sa.hasData(a) || ra.hasData(a)
            },
            data: function(a, b, c) {
                return sa.access(a, b, c)
            },
            removeData: function(a, b) {
                sa.remove(a, b)
            },
            _data: function(a, b, c) {
                return ra.access(a, b, c)
            },
            _removeData: function(a, b) {
                ra.remove(a, b)
            }
        }), _.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                        ra.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    sa.set(this, a)
                }) : qa(this, function(b) {
                    var c, d = _.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = sa.get(f, a), void 0 !== c) return c;
                        if (c = sa.get(f, d), void 0 !== c) return c;
                        if (c = i(f, d, void 0), void 0 !== c) return c
                    } else this.each(function() {
                        var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    sa.remove(this, a)
                })
            }
        }), _.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function() {
                        _.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function() {
                        ra.remove(a, [b + "queue", c])
                    })
                })
            }
        }), _.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = _.queue(this, a, b);
                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    _.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function(a, b) {
                return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
            },
            ya = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var za = "undefined";
        Y.focusinBubbles = "onfocusin" in a;
        var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
        _.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(na) || [""], j = b.length; j--;)
                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !_.isWindow(d)) {
                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            dispatch: function(a) {
                a = _.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (ra.get(this, "events") || {})[a.type] || [],
                    j = _.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = _.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[_.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return _.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = _.extend(new _.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, _.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, _.Event = function(a, b) {
            return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
        }, _.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, _.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            _.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), Y.focusinBubbles || _.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                _.event.simulate(b, a.target, _.event.fix(a), !0)
            };
            _.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                }
            }
        }), _.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                else if (!d) return this;
                return 1 === e && (f = d, d = function(a) {
                    return _().off(a), f.apply(this, arguments)
                }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                    _.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                    _.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    _.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? _.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a);
                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                    if (e = a[m], e || 0 === e)
                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                        else if (Ga.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                        if (b.events)
                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                        ra.cache[e] && delete ra.cache[e]
                    }
                    delete sa.cache[c[sa.expando]]
                }
            }
        }), _.fn.extend({
            text: function(a) {
                return qa(this, function(a) {
                    return void 0 === a ? _.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return _.clone(this, a, b)
                })
            },
            html: function(a) {
                return qa(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ea, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = S.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m);
                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                    for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                    if (f)
                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                }
                return this
            }
        }), _.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            _.fn[a] = function(a) {
                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Na, Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            };
        ! function() {
            function b() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
            }
            var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return null == d && b(), d
                },
                reliableMarginRight: function() {
                    var b, c = g.appendChild(Z.createElement("div"));
                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                }
            }))
        }(), _.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Wa = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xa = ["Webkit", "O", "Moz", "ms"];
        _.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = v(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = _.camelCase(b),
                        i = a.style;
                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = _.camelCase(b);
                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
            }
        }), _.each(["height", "width"], function(a, b) {
            _.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                        return A(a, b, d)
                    }) : A(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
            return b ? _.swap(a, {
                display: "inline-block"
            }, v, [a, "marginRight"]) : void 0
        }), _.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            _.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Pa.test(a) || (_.cssHooks[a + b].set = y)
        }), _.fn.extend({
            css: function(a, b) {
                return qa(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (_.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    xa(this) ? _(this).show() : _(this).hide()
                })
            }
        }), _.Tween = C, C.prototype = {
            constructor: C,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = C.propHooks[this.prop];
                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = C.propHooks[this.prop];
                return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
            }
        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, _.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, _.fx = C.prototype.init, _.fx.step = {};
        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        _.Animation = _.extend(I, {
                tweener: function(a, b) {
                    _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? bb.unshift(a) : bb.push(a)
                }
            }), _.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? _.extend({}, a) : {
                    complete: c || !c && b || _.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !_.isFunction(b) && b
                };
                return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
                    (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                        _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
                    }, d
            }, _.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(xa).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = _.isEmptyObject(a),
                        f = _.speed(b, c, d),
                        g = function() {
                            var b = I(this, _.extend({}, a), f);
                            (e || ra.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = _.timers,
                            g = ra.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && _.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ra.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = _.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), _.each(["toggle", "show", "hide"], function(a, b) {
                var c = _.fn[b];
                _.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                }
            }), _.each({
                slideDown: E("show"),
                slideUp: E("hide"),
                slideToggle: E("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                _.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), _.timers = [], _.fx.tick = function() {
                var a, b = 0,
                    c = _.timers;
                for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || _.fx.stop(), Ya = void 0
            }, _.fx.timer = function(a) {
                _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
            }, _.fx.interval = 13, _.fx.start = function() {
                Za || (Za = setInterval(_.fx.tick, _.fx.interval))
            }, _.fx.stop = function() {
                clearInterval(Za), Za = null
            }, _.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, _.fn.delay = function(a, b) {
                return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
            }();
        var db, eb, fb = _.expr.attrHandle;
        _.fn.extend({
            attr: function(a, b) {
                return qa(this, _.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    _.removeAttr(this, a)
                })
            }
        }), _.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(na);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), eb = {
            set: function(a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = fb[b] || _.find.attr;
            fb[b] = function(a, b, d) {
                var e, f;
                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
            }
        });
        var gb = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({
            prop: function(a, b) {
                return qa(this, _.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[_.propFix[a] || a]
                })
            }
        }), _.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (_.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            _.propFix[this.toLowerCase()] = this
        });
        var hb = /[\t\r\n\f]/g;
        _.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = _.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        });
        var ib = /\r/g;
        _.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
                }
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = _.find.attr(a, "value");
                        return null != b ? b : _.trim(_.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                                if (b = _(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function() {
            _.valHooks[this] = {
                set: function(a, b) {
                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                }
            }, Y.checkOn || (_.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            _.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), _.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var jb = _.now(),
            kb = /\?/;
        _.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, _.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
        };
        var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vb,
                type: "GET",
                isLocal: ob.test(wb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": _.parseJSON,
                    "text xml": _.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
            },
            ajaxPrefilter: J(sb),
            ajaxTransport: J(tb),
            ajax: function(a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    o = _.Deferred(),
                    p = _.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!g)
                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return d && d.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[k](l[k]);
                if (d = K(tb, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return _.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return _.get(a, void 0, b, "script")
            }
        }), _.each(["get", "post"], function(a, b) {
            _[b] = function(a, c, d, e) {
                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), _._evalUrl = function(a) {
            return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, _.fn.extend({
            wrapAll: function(a) {
                var b;
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = _(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = _.isFunction(a);
                return this.each(function(c) {
                    _(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                }).end()
            }
        }), _.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, _.expr.filters.visible = function(a) {
            return !_.expr.filters.hidden(a)
        };
        var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
        _.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(xb, "+")
        }, _.fn.extend({
            serialize: function() {
                return _.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = _.prop(this, "elements");
                    return a ? _.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                }).map(function(a, b) {
                    var c = _(this).val();
                    return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(zb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(zb, "\r\n")
                    }
                }).get()
            }
        }), _.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var Cb = 0,
            Db = {},
            Eb = {
                0: 200,
                1223: 204
            },
            Fb = _.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Db) Db[a]()
        }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
            var b;
            return Y.cors || Fb && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Cb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b) throw h
                    }
                },
                abort: function() {
                    b && b()
                }
            } : void 0
        }), _.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return _.globalEval(a), a
                }
            }
        }), _.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), _.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = _("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Gb.pop() || _.expando + "_" + jb++;
                return this[a] = !0, a
            }
        }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || _.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), _.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = ga.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
        };
        var Ib = _.fn.load;
        _.fn.load = function(a, b, c) {
            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            _.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), _.expr.filters.animated = function(a) {
            return _.grep(_.timers, function(b) {
                return a === b.elem
            }).length
        };
        var Jb = a.document.documentElement;
        _.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                    l = _(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, _.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - _.css(c, "marginTop", !0),
                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                    return a || Jb
                })
            }
        }), _.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            _.fn[b] = function(e) {
                return qa(this, function(b, e, f) {
                    var g = P(b);
                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }), _.each(["top", "left"], function(a, b) {
            _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
            })
        }), _.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            _.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                _.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return qa(this, function(b, c, d) {
                        var e;
                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), _.fn.size = function() {
            return this.length
        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return _
        });
        var Kb = a.jQuery,
            Lb = a.$;
        return _.noConflict = function(b) {
            return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        }, typeof b === za && (a.jQuery = a.$ = _), _
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.4", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
            b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = c(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.4", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.4", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a(document.body).height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a, b, c) {
    "use strict";

    function d(a, b) {
        return b = b || Error,
            function() {
                var c, d, e = 2,
                    f = arguments,
                    g = f[0],
                    h = "[" + (a ? a + ":" : "") + g + "] ",
                    i = f[1];
                for (h += i.replace(/\{\d+\}/g, function(a) {
                        var b = +a.slice(1, -1),
                            c = b + e;
                        return c < f.length ? ta(f[c]) : a
                    }), h += "\nhttp://errors.angularjs.org/1.4.7/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
                return new b(h)
            }
    }

    function e(a) {
        if (null == a || C(a)) return !1;
        var b = "length" in Object(a) && a.length;
        return a.nodeType === Ud && b ? !0 : x(a) || Ld(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d, g;
        if (a)
            if (A(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (Ld(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
        else if (w(a))
            for (d in a) b.call(c, a[d], d, a);
        else if ("function" == typeof a.hasOwnProperty)
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        else
            for (d in a) ud.call(a, d) && b.call(c, a[d], d, a);
        return a
    }

    function g(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function h(a) {
        return function(b, c) {
            a(c, b)
        }
    }

    function i() {
        return ++Jd
    }

    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function k(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
            var g = b[e];
            if (v(g) || A(g))
                for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
                    var m = h[i],
                        n = g[m];
                    c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : B(n) ? a[m] = new RegExp(n) : (v(a[m]) || (a[m] = Ld(n) ? [] : {}), k(a[m], [n], !0)) : a[m] = n
                }
        }
        return j(a, d), a
    }

    function l(a) {
        return k(a, Cd.call(arguments, 1), !1)
    }

    function m(a) {
        return k(a, Cd.call(arguments, 1), !0)
    }

    function n(a) {
        return parseInt(a, 10)
    }

    function o(a, b) {
        return l(Object.create(a), b)
    }

    function p() {}

    function q(a) {
        return a
    }

    function r(a) {
        return function() {
            return a
        }
    }

    function s(a) {
        return A(a.toString) && a.toString !== Object.prototype.toString
    }

    function t(a) {
        return "undefined" == typeof a
    }

    function u(a) {
        return "undefined" != typeof a
    }

    function v(a) {
        return null !== a && "object" == typeof a
    }

    function w(a) {
        return null !== a && "object" == typeof a && !Gd(a)
    }

    function x(a) {
        return "string" == typeof a
    }

    function y(a) {
        return "number" == typeof a
    }

    function z(a) {
        return "[object Date]" === Fd.call(a)
    }

    function A(a) {
        return "function" == typeof a
    }

    function B(a) {
        return "[object RegExp]" === Fd.call(a)
    }

    function C(a) {
        return a && a.window === a
    }

    function D(a) {
        return a && a.$evalAsync && a.$watch
    }

    function E(a) {
        return "[object File]" === Fd.call(a)
    }

    function F(a) {
        return "[object FormData]" === Fd.call(a)
    }

    function G(a) {
        return "[object Blob]" === Fd.call(a)
    }

    function H(a) {
        return "boolean" == typeof a
    }

    function I(a) {
        return a && A(a.then)
    }

    function J(a) {
        return Md.test(Fd.call(a))
    }

    function K(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function L(a) {
        var b, c = {},
            d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function M(a) {
        return td(a.nodeName || a[0] && a[0].nodeName)
    }

    function N(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c
    }

    function O(a, b, c, d) {
        if (C(a) || D(a)) throw Hd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (J(b)) throw Hd("cpta", "Can't copy! TypedArray destination cannot be mutated.");
        if (b) {
            if (a === b) throw Hd("cpi", "Can't copy! Source and destination are identical.");
            c = c || [], d = d || [], v(a) && (c.push(a), d.push(b));
            var e;
            if (Ld(a)) {
                b.length = 0;
                for (var g = 0; g < a.length; g++) b.push(O(a[g], null, c, d))
            } else {
                var h = b.$$hashKey;
                if (Ld(b) ? b.length = 0 : f(b, function(a, c) {
                        delete b[c]
                    }), w(a))
                    for (e in a) b[e] = O(a[e], null, c, d);
                else if (a && "function" == typeof a.hasOwnProperty)
                    for (e in a) a.hasOwnProperty(e) && (b[e] = O(a[e], null, c, d));
                else
                    for (e in a) ud.call(a, e) && (b[e] = O(a[e], null, c, d));
                j(b, h)
            }
        } else if (b = a, v(a)) {
            var i;
            if (c && -1 !== (i = c.indexOf(a))) return d[i];
            if (Ld(a)) return O(a, [], c, d);
            if (J(a)) b = new a.constructor(a);
            else if (z(a)) b = new Date(a.getTime());
            else if (B(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex;
            else {
                if (!A(a.cloneNode)) {
                    var k = Object.create(Gd(a));
                    return O(a, k, c, d)
                }
                b = a.cloneNode(!0)
            }
            d && (c.push(a), d.push(b))
        }
        return b
    }

    function P(a, b) {
        if (Ld(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
        } else if (v(a)) {
            b = b || {};
            for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
        }
        return b || a
    }

    function Q(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var c, d, e, f = typeof a,
            g = typeof b;
        if (f == g && "object" == f) {
            if (!Ld(a)) {
                if (z(a)) return z(b) ? Q(a.getTime(), b.getTime()) : !1;
                if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
                if (D(a) || D(b) || C(a) || C(b) || Ld(b) || z(b) || B(b)) return !1;
                e = qa();
                for (d in a)
                    if ("$" !== d.charAt(0) && !A(a[d])) {
                        if (!Q(a[d], b[d])) return !1;
                        e[d] = !0
                    }
                for (d in b)
                    if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d])) return !1;
                return !0
            }
            if (!Ld(b)) return !1;
            if ((c = a.length) == b.length) {
                for (d = 0; c > d; d++)
                    if (!Q(a[d], b[d])) return !1;
                return !0
            }
        }
        return !1
    }

    function R(a, b, c) {
        return a.concat(Cd.call(b, c))
    }

    function S(a, b) {
        return Cd.call(a, b || 0)
    }

    function T(a, b) {
        var c = arguments.length > 2 ? S(arguments, 2) : [];
        return !A(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, R(c, arguments, 0)) : b.apply(a, c)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function U(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : C(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : D(d) && (e = "$SCOPE"), e
    }

    function V(a, b) {
        return "undefined" == typeof a ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b))
    }

    function W(a) {
        return x(a) ? JSON.parse(a) : a
    }

    function X(a, b) {
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c
    }

    function Y(a, b) {
        return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
    }

    function Z(a, b, c) {
        c = c ? -1 : 1;
        var d = X(b, a.getTimezoneOffset());
        return Y(a, c * (d - a.getTimezoneOffset()))
    }

    function $(a) {
        a = zd(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var c = zd("<div>").append(a).html();
        try {
            return a[0].nodeType === Wd ? td(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + td(b)
            })
        } catch (b) {
            return td(c)
        }
    }

    function _(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function aa(a) {
        var b = {};
        return f((a || "").split("&"), function(a) {
            var c, d, e;
            a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), e = a.substring(c + 1)), d = _(d), u(d) && (e = u(e) ? _(e) : !0, ud.call(b, d) ? Ld(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
        }), b
    }

    function ba(a) {
        var b = [];
        return f(a, function(a, c) {
            Ld(a) ? f(a, function(a) {
                b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
            }) : b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function ca(a) {
        return da(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function da(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ea(a, b) {
        var c, d, e = Rd.length;
        for (d = 0; e > d; ++d)
            if (c = Rd[d] + b, x(c = a.getAttribute(c))) return c;
        return null
    }

    function fa(a, b) {
        var c, d, e = {};
        f(Rd, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
        }), f(Rd, function(b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
        }), c && (e.strictDi = null !== ea(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function ga(c, d, e) {
        v(e) || (e = {});
        var g = {
            strictDi: !1
        };
        e = l(g, e);
        var h = function() {
                if (c = zd(c), c.injector()) {
                    var a = c[0] === b ? "document" : $(c);
                    throw Hd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                d = d || [], d.unshift(["$provide", function(a) {
                    a.value("$rootElement", c)
                }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]), d.unshift("ng");
                var f = $a(d, e.strictDi);
                return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d), c(b)(a)
                    })
                }]), f
            },
            i = /^NG_ENABLE_DEBUG_INFO!/,
            j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Id.resumeBootstrap = function(a) {
            return f(a, function(a) {
                d.push(a)
            }), h()
        }, void(A(Id.resumeDeferredBootstrap) && Id.resumeDeferredBootstrap()))
    }

    function ha() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ia(a) {
        var b = Id.element(a).injector();
        if (!b) throw Hd("test", "no injector found for element argument to getTestability");
        return b.get("$$testability")
    }

    function ja(a, b) {
        return b = b || "_", a.replace(Sd, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function ka() {
        var b;
        if (!Td) {
            var d = Qd();
            Ad = t(d) ? a.jQuery : d ? a[d] : c, Ad && Ad.fn.on ? (zd = Ad, l(Ad.fn, {
                scope: me.scope,
                isolateScope: me.isolateScope,
                controller: me.controller,
                injector: me.injector,
                inheritedData: me.inheritedData
            }), b = Ad.cleanData, Ad.cleanData = function(a) {
                var c;
                if (Kd) Kd = !1;
                else
                    for (var d, e = 0; null != (d = a[e]); e++) c = Ad._data(d, "events"), c && c.$destroy && Ad(d).triggerHandler("$destroy");
                b(a)
            }) : zd = Ca, Id.element = zd, Td = !0
        }
    }

    function la(a, b, c) {
        if (!a) throw Hd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function ma(a, b, c) {
        return c && Ld(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function na(a, b) {
        if ("hasOwnProperty" === a) throw Hd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function oa(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
        return !c && A(a) ? T(f, a) : a
    }

    function pa(a) {
        for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = zd(Cd.call(a, 0, e))), b.push(c));
        return b || a
    }

    function qa() {
        return Object.create(null)
    }

    function ra(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng"),
            f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, b, c, d) {
                        return d || (d = e),
                            function() {
                                return d[c || "push"]([a, b, arguments]), k
                            }
                    }

                    function b(a, b) {
                        return function(c, f) {
                            return f && A(f) && (f.$$moduleName = d), e.push([a, b, arguments]), k
                        }
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var e = [],
                        h = [],
                        i = [],
                        j = a("$injector", "invoke", "push", h),
                        k = {
                            _invokeQueue: e,
                            _configBlocks: h,
                            _runBlocks: i,
                            requires: f,
                            name: d,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: b("$provide", "decorator"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            config: j,
                            run: function(a) {
                                return i.push(a), this
                            }
                        };
                    return g && j(g), k
                })
            }
        })
    }

    function sa(a) {
        var b = [];
        return JSON.stringify(a, function(a, c) {
            if (c = U(a, c), v(c)) {
                if (b.indexOf(c) >= 0) return "...";
                b.push(c)
            }
            return c
        })
    }

    function ta(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : t(a) ? "undefined" : "string" != typeof a ? sa(a) : a
    }

    function ua(b) {
        l(b, {
            bootstrap: ga,
            copy: O,
            extend: l,
            merge: m,
            equals: Q,
            element: zd,
            forEach: f,
            injector: $a,
            noop: p,
            bind: T,
            toJson: V,
            fromJson: W,
            identity: q,
            isUndefined: t,
            isDefined: u,
            isString: x,
            isFunction: A,
            isObject: v,
            isNumber: y,
            isElement: K,
            isArray: Ld,
            version: $d,
            isDate: z,
            lowercase: td,
            uppercase: vd,
            callbacks: {
                counter: 0
            },
            getTestability: ia,
            $$minErr: d,
            $$csp: Pd,
            reloadWithDebugInfo: ha
        }), (Bd = ra(a))("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: qc
            }), a.provider("$compile", ib).directive({
                a: nf,
                input: Ef,
                textarea: Ef,
                form: sf,
                script: wg,
                select: zg,
                style: Bg,
                option: Ag,
                ngBind: Hf,
                ngBindHtml: Jf,
                ngBindTemplate: If,
                ngClass: Lf,
                ngClassEven: Nf,
                ngClassOdd: Mf,
                ngCloak: Of,
                ngController: Pf,
                ngForm: tf,
                ngHide: qg,
                ngIf: Sf,
                ngInclude: Tf,
                ngInit: Vf,
                ngNonBindable: hg,
                ngPluralize: lg,
                ngRepeat: mg,
                ngShow: pg,
                ngStyle: rg,
                ngSwitch: sg,
                ngSwitchWhen: tg,
                ngSwitchDefault: ug,
                ngOptions: kg,
                ngTransclude: vg,
                ngModel: eg,
                ngList: Wf,
                ngChange: Kf,
                pattern: Dg,
                ngPattern: Dg,
                required: Cg,
                ngRequired: Cg,
                minlength: Fg,
                ngMinlength: Fg,
                maxlength: Eg,
                ngMaxlength: Eg,
                ngValue: Gf,
                ngModelOptions: gg
            }).directive({
                ngInclude: Uf
            }).directive(of).directive(Qf), a.provider({
                $anchorScroll: _a,
                $animate: Be,
                $animateCss: Ce,
                $$animateQueue: Ae,
                $$AnimateRunner: ze,
                $browser: fb,
                $cacheFactory: gb,
                $controller: nb,
                $document: ob,
                $exceptionHandler: pb,
                $filter: Ec,
                $$forceReflow: He,
                $interpolate: Db,
                $interval: Eb,
                $http: zb,
                $httpParamSerializer: rb,
                $httpParamSerializerJQLike: sb,
                $httpBackend: Bb,
                $xhrFactory: Ab,
                $location: Sb,
                $log: Tb,
                $parse: kc,
                $rootScope: pc,
                $q: lc,
                $$q: mc,
                $sce: uc,
                $sceDelegate: tc,
                $sniffer: vc,
                $templateCache: hb,
                $templateRequest: wc,
                $$testability: xc,
                $timeout: yc,
                $window: Bc,
                $$rAF: oc,
                $$jqLite: Va,
                $$HashMap: qe,
                $$cookieReader: Dc
            })
        }])
    }

    function va() {
        return ++ae
    }

    function wa(a) {
        return a.replace(de, function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(ee, "Moz$1")
    }

    function xa(a) {
        return !ie.test(a)
    }

    function ya(a) {
        var b = a.nodeType;
        return b === Ud || !b || b === Yd
    }

    function za(a) {
        for (var b in _d[a.ng339]) return !0;
        return !1
    }

    function Aa(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(),
            i = [];
        if (xa(a)) i.push(b.createTextNode(a));
        else {
            for (c = c || h.appendChild(b.createElement("div")), d = (je.exec(a) || ["", ""])[1].toLowerCase(), e = le[d] || le._default, c.innerHTML = e[1] + a.replace(ke, "<$1></$2>") + e[2], g = e[0]; g--;) c = c.lastChild;
            i = R(i, c.childNodes), c = h.firstChild, c.textContent = ""
        }
        return h.textContent = "", h.innerHTML = "", f(i, function(a) {
            h.appendChild(a)
        }), h
    }

    function Ba(a, c) {
        c = c || b;
        var d;
        return (d = he.exec(a)) ? [c.createElement(d[1])] : (d = Aa(a, c)) ? d.childNodes : []
    }

    function Ca(a) {
        if (a instanceof Ca) return a;
        var b;
        if (x(a) && (a = Nd(a), b = !0), !(this instanceof Ca)) {
            if (b && "<" != a.charAt(0)) throw ge("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Ca(a)
        }
        b ? Ma(this, Ba(a)) : Ma(this, a)
    }

    function Da(a) {
        return a.cloneNode(!0)
    }

    function Ea(a, b) {
        if (b || Ga(a), a.querySelectorAll)
            for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ga(c[d])
    }

    function Fa(a, b, c, d) {
        if (u(d)) throw ge("offargs", "jqLite#off() does not support the `selector` argument");
        var e = Ha(a),
            g = e && e.events,
            h = e && e.handle;
        if (h)
            if (b) f(b.split(" "), function(b) {
                if (u(c)) {
                    var d = g[b];
                    if (N(d || [], c), d && d.length > 0) return
                }
                ce(a, b, h), delete g[b]
            });
            else
                for (b in g) "$destroy" !== b && ce(a, b, h), delete g[b]
    }

    function Ga(a, b) {
        var d = a.ng339,
            e = d && _d[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Fa(a)), delete _d[d], a.ng339 = c
        }
    }

    function Ha(a, b) {
        var d = a.ng339,
            e = d && _d[d];
        return b && !e && (a.ng339 = d = va(), e = _d[d] = {
            events: {},
            data: {},
            handle: c
        }), e
    }

    function Ia(a, b, c) {
        if (ya(a)) {
            var d = u(c),
                e = !d && b && !v(b),
                f = !b,
                g = Ha(a, !e),
                h = g && g.data;
            if (d) h[b] = c;
            else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b)
            }
        }
    }

    function Ja(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function Ka(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", Nd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Nd(b) + " ", " ")))
        })
    }

    function La(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = Nd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", Nd(c))
        }
    }

    function Ma(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)
                        for (var d = 0; c > d; d++) a[a.length++] = b[d]
                } else a[a.length++] = b
            }
    }

    function Na(a, b) {
        return Oa(a, "$" + (b || "ngController") + "Controller")
    }

    function Oa(a, b, c) {
        a.nodeType == Yd && (a = a.documentElement);
        for (var d = Ld(b) ? b : [b]; a;) {
            for (var e = 0, f = d.length; f > e; e++)
                if (u(c = zd.data(a, d[e]))) return c;
            a = a.parentNode || a.nodeType === Zd && a.host
        }
    }

    function Pa(a) {
        for (Ea(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Qa(a, b) {
        b || Ea(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function Ra(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : zd(c).on("load", b)
    }

    function Sa(a, b) {
        var c = ne[b.toLowerCase()];
        return c && oe[M(a)] && c
    }

    function Ta(a) {
        return pe[a]
    }

    function Ua(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var e = b[d || c.type],
                f = e ? e.length : 0;
            if (f) {
                if (t(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return c.immediatePropagationStopped === !0
                }, f > 1 && (e = P(e));
                for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
            }
        };
        return c.elem = a, c
    }

    function Va() {
        this.$get = function() {
            return l(Ca, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Ja(a, b)
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), La(a, b)
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), Ka(a, b)
                }
            })
        }
    }

    function Wa(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a
    }

    function Xa(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        f(a, this.put, this)
    }

    function Ya(a) {
        var b = a.toString().replace(ue, ""),
            c = b.match(re);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Za(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw x(c) && c || (c = a.name || Ya(a)), ve("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(ue, ""), g = e.match(re), f(g[1].split(se), function(a) {
                        a.replace(te, function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else Ld(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
        return d
    }

    function $a(a, b) {
        function d(a) {
            return function(b, c) {
                return v(b) ? void f(b, h(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (na(a, "service"), (A(b) || Ld(b)) && (b = y.instantiate(b)), !b.$get) throw ve("pget", "Provider '{0}' must define $get factory method.", a);
            return w[a + q] = b
        }

        function g(a, b) {
            return function() {
                var c = B.invoke(b, this);
                if (t(c)) throw ve("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c
            }
        }

        function i(a, b, c) {
            return e(a, {
                $get: c !== !1 ? g(a, b) : b
            })
        }

        function j(a, b) {
            return i(a, ["$injector", function(a) {
                return a.instantiate(b)
            }])
        }

        function k(a, b) {
            return i(a, r(b), !1)
        }

        function l(a, b) {
            na(a, "constant"), w[a] = b, z[a] = b
        }

        function m(a, b) {
            var c = y.get(a + q),
                d = c.$get;
            c.$get = function() {
                var a = B.invoke(d, c);
                return B.invoke(b, null, {
                    $delegate: a
                })
            }
        }

        function n(a) {
            la(t(a) || Ld(a), "modulesToLoad", "not an array");
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b],
                            e = y.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }
                if (!u.get(a)) {
                    u.put(a, !0);
                    try {
                        x(a) ? (b = Bd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Ld(a) ? c.push(y.invoke(a)) : ma(a, "module")
                    } catch (e) {
                        throw Ld(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ve("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                    }
                }
            }), c
        }

        function o(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === p) throw ve("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
                    return a[b]
                }
                try {
                    return s.unshift(b), a[b] = p, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === p && delete a[b], e
                } finally {
                    s.shift()
                }
            }

            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [],
                    k = $a.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw ve("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return Ld(a) && (a = a[g]), a.apply(c, j)
            }

            function f(a, b, c) {
                var d = Object.create((Ld(a) ? a[a.length - 1] : a).prototype || null),
                    f = e(a, d, b, c);
                return v(f) || A(f) ? f : d
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: $a.$$annotate,
                has: function(b) {
                    return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
                }
            }
        }
        b = b === !0;
        var p = {},
            q = "Provider",
            s = [],
            u = new Xa([], !0),
            w = {
                $provide: {
                    provider: d(e),
                    factory: d(i),
                    service: d(j),
                    value: d(k),
                    constant: d(l),
                    decorator: m
                }
            },
            y = w.$injector = o(w, function(a, b) {
                throw Id.isString(b) && s.push(b), ve("unpr", "Unknown provider: {0}", s.join(" <- "))
            }),
            z = {},
            B = z.$injector = o(z, function(a, b) {
                var d = y.get(a + q, b);
                return B.invoke(d.$get, d, c, a)
            });
        return f(n(a), function(a) {
            a && B.invoke(a)
        }), B
    }

    function _a() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === M(a) ? (b = a, !0) : void 0
                }), b
            }

            function f() {
                var a = h.yOffset;
                if (A(a)) a = a();
                else if (K(a)) {
                    var c = a[0],
                        d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                } else y(a) || (a = 0);
                return a
            }

            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c)
                    }
                } else b.scrollTo(0, 0)
            }

            function h(a) {
                a = x(a) ? a : c.hash();
                var b;
                a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
            }
            var i = b.document;
            return a && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                (a !== b || "" !== a) && Ra(function() {
                    d.$evalAsync(h)
                })
            }), h
        }]
    }

    function ab(a, b) {
        return a || b ? a ? b ? (Ld(a) && (a = a.join(" ")), Ld(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function bb(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType === xe) return c
        }
    }

    function cb(a) {
        x(a) && (a = a.split(" "));
        var b = qa();
        return f(a, function(a) {
            a.length && (b[a] = !0)
        }), b
    }

    function db(a) {
        return v(a) ? a : {}
    }

    function eb(a, b, c, d) {
        function e(a) {
            try {
                a.apply(null, S(arguments, 1))
            } finally {
                if (s--, 0 === s)
                    for (; u.length;) try {
                        u.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function g(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b)
        }

        function h() {
            z = null, j(), k()
        }

        function i() {
            try {
                return n.state
            } catch (a) {}
        }

        function j() {
            v = i(), v = t(v) ? null : v, Q(v, C) && (v = C), C = v
        }

        function k() {
            (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function(a) {
                a(l.url(), v)
            }))
        }
        var l = this,
            m = (b[0], a.location),
            n = a.history,
            o = a.setTimeout,
            q = a.clearTimeout,
            r = {};
        l.isMock = !1;
        var s = 0,
            u = [];
        l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function() {
            s++
        }, l.notifyWhenNoOutstandingRequests = function(a) {
            0 === s ? a() : u.push(a)
        };
        var v, w, x = m.href,
            y = b.find("base"),
            z = null;
        j(), w = v, l.url = function(b, c, e) {
            if (t(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
                var f = w === e;
                if (x === b && (!d.history || f)) return l;
                var h = x && Jb(x) === Jb(b);
                return x = b, w = e, !d.history || h && f ? ((!h || z) && (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b, m.href !== b && (z = b)) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), w = v), l
            }
            return z || m.href.replace(/%27/g, "'")
        }, l.state = function() {
            return v
        };
        var A = [],
            B = !1,
            C = null;
        l.onUrlChange = function(b) {
            return B || (d.history && zd(a).on("popstate", h), zd(a).on("hashchange", h), B = !0), A.push(b), b
        }, l.$$applicationDestroyed = function() {
            zd(a).off("hashchange popstate", h)
        }, l.$$checkUrlChange = k, l.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, l.defer = function(a, b) {
            var c;
            return s++, c = o(function() {
                delete r[c], e(a)
            }, b || 0), r[c] = !0, c
        }, l.defer.cancel = function(a) {
            return r[a] ? (delete r[a], q(a), e(p), !0) : !1
        }
    }

    function fb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new eb(a, d, b, c)
        }]
    }

    function gb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0,
                    h = l({}, c, {
                        id: a
                    }),
                    i = {},
                    j = c && c.capacity || Number.MAX_VALUE,
                    k = {},
                    m = null,
                    n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (!t(b)) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        }
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                        }
                        delete i[a], g--
                    },
                    removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null
                    },
                    destroy: function() {
                        i = null, h = null, k = null, delete b[a]
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function(a) {
                return b[a]
            }, a
        }
    }

    function hb() {
        this.$get = ["$cacheFactory", function(a) {
            return a("templates")
        }]
    }

    function ib(a, d) {
        function e(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = {};
            return f(a, function(a, f) {
                var g = a.match(d);
                if (!g) throw De("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                }
            }), e
        }

        function g(a, b) {
            var c = {
                isolateScope: null,
                bindToController: null
            };
            if (v(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), v(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), v(c.bindToController)) {
                var d = a.controller,
                    f = a.controllerAs;
                if (!d) throw De("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
                if (!mb(d, f)) throw De("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
            }
            return c
        }

        function i(a) {
            var b = a.charAt(0);
            if (!b || b !== td(b)) throw De("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
            if (a !== a.trim()) throw De("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
        }
        var j = {},
            k = "Directive",
            m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            s = L("ngSrc,ngSrcset,src,srcset"),
            w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            y = /^(on[a-z]+|formaction)$/;
        this.directive = function B(b, c) {
            return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], a.factory(b + k, ["$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(j[b], function(e, f) {
                    try {
                        var h = a.invoke(e);
                        A(h) ? h = {
                            compile: r(h)
                        } : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
                        var i = h.$$bindings = g(h, h.name);
                        v(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), h.$$moduleName = e.$$moduleName, d.push(h)
                    } catch (j) {
                        c(j)
                    }
                }), d
            }])), j[b].push(c)) : f(b, h(B)), this
        }, this.aHrefSanitizationWhitelist = function(a) {
            return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var z = !0;
        this.debugInfoEnabled = function(a) {
            return u(a) ? (z = a, this) : z
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, g, h, i, r, u, B, C, E) {
            function F(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function G(a, b, c, d, e) {
                a instanceof zd || (a = zd(a)), f(a, function(b, c) {
                    b.nodeType == Wd && b.nodeValue.match(/\S+/) && (a[c] = zd(b).wrap("<span></span>").parent()[0])
                });
                var g = I(a, b, a, c, d, e);
                G.$$addScopeClass(a);
                var h = null;
                return function(b, c, d) {
                    la(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn,
                        f = d.transcludeControllers,
                        i = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = H(i));
                    var j;
                    if (j = "html" !== h ? zd(_(h, zd("<div>").append(a).html())) : c ? me.clone.call(a) : a, f)
                        for (var k in f) j.data("$" + k + "Controller", f[k].instance);
                    return G.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                }
            }

            function H(a) {
                var b = a && a[0];
                return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html"
            }

            function I(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
                    } else q = d;
                    for (k = 0, l = p.length; l > k;)
                        if (i = q[p[k++]], g = p[k++], h = p[k++], g) {
                            if (g.scope) {
                                j = a.$new(), G.$$addScopeInfo(zd(i), j);
                                var s = g.$$destroyBindings;
                                s && (g.$$destroyBindings = null, j.$on("$destroyed", s))
                            } else j = a;
                            n = g.transcludeOnThisElement ? J(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? J(a, b) : null, g(h, j, i, e, n, g)
                        } else h && h(a, i.childNodes, c, f)
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new ga, j = K(a[q], [], i, 0 === q ? e : c, f), k = j.length ? P(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && G.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : I(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null
            }

            function J(a, b, c) {
                var d = function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                };
                return d
            }

            function K(a, b, c, d, e) {
                var f, g, h = a.nodeType,
                    i = c.$attr;
                switch (h) {
                    case Ud:
                        T(b, jb(M(a)), "E", d, e);
                        for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                            var u = !1,
                                w = !1;
                            j = r[s], k = j.name, p = Nd(j.value), o = jb(k), (q = ma.test(o)) && (k = k.replace(Ee, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            }));
                            var y = o.replace(/(Start|End)$/, "");
                            U(y) && o === y + "Start" && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = jb(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Sa(a, l) && (c[l] = !0)), ba(a, b, p, l, q), T(b, l, "A", d, e, u, w)
                        }
                        if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g)
                            for (; f = n.exec(g);) l = jb(f[2]), T(b, l, "C", d, e) && (c[l] = Nd(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case Wd:
                        if (11 === yd)
                            for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Wd;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        Z(b, a.nodeValue);
                        break;
                    case Xd:
                        try {
                            f = m.exec(a.nodeValue), f && (l = jb(f[1]), T(b, l, "M", d, e) && (c[l] = Nd(f[2])))
                        } catch (z) {}
                }
                return b.sort(X), b
            }

            function L(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw De("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == Ud && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return zd(d)
            }

            function O(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = L(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function P(a, d, f, g, h, j, k, l, m) {
                function n(a, b, c, d) {
                    a && (c && (a = O(a, c, d)), a.require = r.require, a.directiveName = s, (E === r || r.$$isolateScope) && (a = da(a, {
                        isolateScope: !0
                    })), k.push(a)), b && (c && (b = O(b, c, d)), b.require = r.require, b.directiveName = s, (E === r || r.$$isolateScope) && (b = da(b, {
                        isolateScope: !0
                    })), l.push(b))
                }

                function o(a, b, c, d) {
                    var e;
                    if (x(b)) {
                        var f = b.match(w),
                            g = b.substring(f[0].length),
                            h = f[1] || f[3],
                            i = "?" === f[2];
                        if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
                            var j = "$" + g + "Controller";
                            e = h ? c.inheritedData(j) : c.data(j)
                        }
                        if (!e && !i) throw De("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a)
                    } else if (Ld(b)) {
                        e = [];
                        for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d)
                    }
                    return e || null
                }

                function p(a, b, c, d, e, f) {
                    var g = qa();
                    for (var h in d) {
                        var j = d[h],
                            k = {
                                $scope: j === E || j.$$isolateScope ? e : f,
                                $element: a,
                                $attrs: b,
                                $transclude: c
                            },
                            l = j.controller;
                        "@" == l && (l = b[j.name]);
                        var m = i(l, k, !0, j.controllerAs);
                        g[j.name] = m, M || a.data("$" + j.name + "Controller", m.instance)
                    }
                    return g
                }

                function q(a, b, e, g, h, i) {
                    function j(a, b, d) {
                        var e;
                        return D(a) || (d = b, b = a, a = c), M && (e = t), d || (d = M ? v.parent() : v), h(a, b, e, d, H)
                    }
                    var m, n, q, r, s, t, u, v, w;
                    if (d === e ? (w = f, v = f.$$element) : (v = zd(e), w = new ga(v, f)), E && (s = b.$new(!0)), h && (u = j, u.$$boundTransclude = h), C && (t = p(v, w, u, C, s, b)), E && (G.$$addScopeInfo(v, s, !0, !(F && (F === E || F === E.$$originalDirective))), G.$$addScopeClass(v, !0), s.$$isolateBindings = E.$$isolateBindings, fa(b, w, s, s.$$isolateBindings, E, s)), t) {
                        var x, y, z = E || B;
                        z && t[z.name] && (x = z.$$bindings.bindToController, r = t[z.name], r && r.identifier && x && (y = r, i.$$destroyBindings = fa(b, w, r.instance, x, z)));
                        for (m in t) {
                            r = t[m];
                            var A = r();
                            A !== r.instance && (r.instance = A, v.data("$" + m + "Controller", A), r === y && (i.$$destroyBindings(), i.$$destroyBindings = fa(b, w, A, x, z)))
                        }
                    }
                    for (m = 0, n = k.length; n > m; m++) q = k[m], ea(q, q.isolateScope ? s : b, v, w, q.require && o(q.directiveName, q.require, v, t), u);
                    var H = b;
                    for (E && (E.template || null === E.templateUrl) && (H = s), a && a(H, e.childNodes, c, h), m = l.length - 1; m >= 0; m--) q = l[m], ea(q, q.isolateScope ? s : b, v, w, q.require && o(q.directiveName, q.require, v, t), u)
                }
                m = m || {};
                for (var r, s, t, u, y, z = -Number.MAX_VALUE, B = m.newScopeDirective, C = m.controllerDirectives, E = m.newIsolateScopeDirective, F = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, J = !1, M = m.hasElementTranscludeDirective, N = f.$$element = zd(d), P = j, Q = g, T = 0, U = a.length; U > T; T++) {
                    r = a[T];
                    var X = r.$$start,
                        Z = r.$$end;
                    if (X && (N = L(d, X, Z)), t = c, z > r.priority) break;
                    if ((y = r.scope) && (r.templateUrl || (v(y) ? (Y("new/isolated scope", E || B, r, N), E = r) : Y("new/isolated scope", E, r, N)), B = B || r), s = r.name, !r.templateUrl && r.controller && (y = r.controller, C = C || qa(), Y("'" + s + "' controller", C[s], r, N), C[s] = r), (y = r.transclude) && (I = !0, r.$$tlb || (Y("transclusion", H, r, N), H = r), "element" == y ? (M = !0, z = r.priority, t = N, N = f.$$element = zd(b.createComment(" " + s + ": " + f[s] + " ")), d = N[0], ca(h, S(t), d), Q = G(t, g, z, P && P.name, {
                            nonTlbTranscludeDirective: H
                        })) : (t = zd(Da(d)).contents(), N.empty(), Q = G(t, g))), r.template)
                        if (J = !0, Y("template", F, r, N), F = r, y = A(r.template) ? r.template(N, f) : r.template, y = ka(y), r.replace) {
                            if (P = r, t = xa(y) ? [] : lb(_(r.templateNamespace, Nd(y))), d = t[0], 1 != t.length || d.nodeType !== Ud) throw De("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
                            ca(h, N, d);
                            var aa = {
                                    $attr: {}
                                },
                                ba = K(d, [], aa),
                                ha = a.splice(T + 1, a.length - (T + 1));
                            E && R(ba), a = a.concat(ba).concat(ha), V(f, aa), U = a.length
                        } else N.html(y);
                    if (r.templateUrl) J = !0, Y("template", F, r, N), F = r, r.replace && (P = r), q = W(a.splice(T, a.length - T), N, f, h, I && Q, k, l, {
                        controllerDirectives: C,
                        newScopeDirective: B !== r && B,
                        newIsolateScopeDirective: E,
                        templateDirective: F,
                        nonTlbTranscludeDirective: H
                    }), U = a.length;
                    else if (r.compile) try {
                        u = r.compile(N, f, Q), A(u) ? n(null, u, X, Z) : u && n(u.pre, u.post, X, Z)
                    } catch (ia) {
                        e(ia, $(N))
                    }
                    r.terminal && (q.terminal = !0, z = Math.max(z, r.priority))
                }
                return q.scope = B && B.scope === !0, q.transcludeOnThisElement = I, q.templateOnThisElement = J, q.transclude = Q, m.hasElementTranscludeDirective = M, q
            }

            function R(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = o(a[b], {
                    $$isolateScope: !0
                })
            }

            function T(b, c, d, f, g, h, i) {
                if (c === g) return null;
                var l = null;
                if (j.hasOwnProperty(c))
                    for (var m, n = a.get(c + k), p = 0, q = n.length; q > p; p++) try {
                        m = n[p], (t(f) || f > m.priority) && -1 != m.restrict.indexOf(d) && (h && (m = o(m, {
                            $$start: h,
                            $$end: i
                        })), b.push(m), l = m)
                    } catch (r) {
                        e(r)
                    }
                return l
            }

            function U(b) {
                if (j.hasOwnProperty(b))
                    for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
                        if (c = d[e], c.multiElement) return !0;
                return !1
            }

            function V(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function(b, f) {
                    "class" == f ? (F(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function W(a, b, c, d, e, h, i, j) {
                var k, l, m = [],
                    n = b[0],
                    p = a.shift(),
                    q = o(p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }),
                    r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                    s = p.templateNamespace;
                return b.empty(), g(r).then(function(g) {
                        var o, t, u, w;
                        if (g = ka(g), p.replace) {
                            if (u = xa(g) ? [] : lb(_(s, Nd(g))), o = u[0], 1 != u.length || o.nodeType !== Ud) throw De("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                            t = {
                                $attr: {}
                            }, ca(d, b, o);
                            var x = K(o, [], t);
                            v(p.scope) && R(x), a = x.concat(a), V(c, t)
                        } else o = n, b.html(g);
                        for (a.unshift(q), k = P(a, o, c, e, b, p, h, i, j), f(d, function(a, c) {
                                a == o && (d[c] = b[0])
                            }), l = I(b[0].childNodes, e); m.length;) {
                            var y = m.shift(),
                                z = m.shift(),
                                A = m.shift(),
                                B = m.shift(),
                                C = b[0];
                            if (!y.$$destroyed) {
                                if (z !== n) {
                                    var D = z.className;
                                    j.hasElementTranscludeDirective && p.replace || (C = Da(o)), ca(A, zd(z), C), F(zd(C), D)
                                }
                                w = k.transcludeOnThisElement ? J(y, k.transclude, B) : B, k(l, y, C, d, w, k)
                            }
                        }
                        m = null
                    }),
                    function(a, b, c, d, e) {
                        var f = e;
                        b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = J(b, k.transclude, e)), k(l, b, c, d, f, k)))
                    }
            }

            function X(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Y(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }
                if (b) throw De("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d))
            }

            function Z(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(),
                            d = !!b.length;
                        return d && G.$$addBindingClass(b),
                            function(a, b) {
                                var e = b.parent();
                                d || G.$$addBindingClass(e), G.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                    b[0].nodeValue = a
                                })
                            }
                    }
                })
            }

            function _(a, c) {
                switch (a = td(a || "html")) {
                    case "svg":
                    case "math":
                        var d = b.createElement("div");
                        return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function aa(a, b) {
                if ("srcdoc" == b) return B.HTML;
                var c = M(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
            }

            function ba(a, b, c, e, f) {
                var g = aa(a, e);
                f = s[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === M(a)) throw De("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    var j = i.$$observers || (i.$$observers = qa());
                                    if (y.test(e)) throw De("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ca(a, c, d) {
                var e, f, g = c[0],
                    h = c.length,
                    i = g.parentNode;
                if (a)
                    for (e = 0, f = a.length; f > e; e++)
                        if (a[e] == g) {
                            a[e++] = d;
                            for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                            a.length -= h - 1, a.context === g && (a.context = d);
                            break
                        }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), zd.hasData(g) && (zd(d).data(zd(g).data()), Ad ? (Kd = !0, Ad.cleanData([g])) : delete zd.cache[g[zd.expando]]);
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    zd(p).remove(), m.appendChild(p), delete c[n]
                }
                c[0] = d, c.length = 1
            }

            function da(a, b) {
                return l(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function ea(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (h) {
                    e(h, $(c))
                }
            }

            function fa(a, b, c, e, g, i) {
                var j;
                f(e, function(e, f) {
                    var i, k, l, m, n = e.attrName,
                        o = e.optional,
                        q = e.mode;
                    switch (q) {
                        case "@":
                            o || ud.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function(a) {
                                x(a) && (c[f] = a)
                            }), b.$$observers[n].$$scope = a, x(b[n]) && (c[f] = d(b[n])(a));
                            break;
                        case "=":
                            if (!ud.call(b, n)) {
                                if (o) break;
                                b[n] = void 0
                            }
                            if (o && !b[n]) break;
                            k = h(b[n]), m = k.literal ? Q : function(a, b) {
                                return a === b || a !== a && b !== b
                            }, l = k.assign || function() {
                                throw i = c[f] = k(a), De("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[n], g.name)
                            }, i = c[f] = k(a);
                            var r = function(b) {
                                return m(b, c[f]) || (m(b, i) ? l(a, b = c[f]) : c[f] = b), i = b
                            };
                            r.$stateful = !0;
                            var s;
                            s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(h(b[n], r), null, k.literal), j = j || [], j.push(s);
                            break;
                        case "&":
                            if (k = b.hasOwnProperty(n) ? h(b[n]) : p, k === p && o) break;
                            c[f] = function(b) {
                                return k(a, b)
                            }
                    }
                });
                var k = j ? function() {
                    for (var a = 0, b = j.length; b > a; ++a) j[a]()
                } : p;
                return i && k !== p ? (i.$on("$destroy", k), p) : k
            }
            var ga = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            };
            ga.prototype = {
                $normalize: jb,
                $addClass: function(a) {
                    a && a.length > 0 && C.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && a.length > 0 && C.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = kb(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    var d = kb(b, a);
                    d && d.length && C.removeClass(this.$$element, d)
                },
                $set: function(a, b, c, d) {
                    var g, h = this.$$element[0],
                        i = Sa(h, a),
                        j = Ta(a),
                        k = a;
                    if (i ? (this.$$element.prop(a, b),
                            d = i) : j && (this[j] = b, k = j), this[a] = b, d ? this.$attr[a] = d : (d = this.$attr[a], d || (this.$attr[a] = d = ja(a, "-"))), g = M(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = E(b, "src" === a);
                    else if ("img" === g && "srcset" === a) {
                        for (var l = "", m = Nd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), r = 0; q > r; r++) {
                            var s = 2 * r;
                            l += E(Nd(p[s]), !0), l += " " + Nd(p[s + 1])
                        }
                        var u = Nd(p[2 * r]).split(/\s/);
                        l += E(Nd(u[0]), !0), 2 === u.length && (l += " " + Nd(u[1])), this[a] = b = l
                    }
                    c !== !1 && (null === b || t(b) ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    var v = this.$$observers;
                    v && f(v[k], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            e(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = qa()),
                        e = d[a] || (d[a] = []);
                    return e.push(b), r.$evalAsync(function() {
                            e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a])
                        }),
                        function() {
                            N(e, b)
                        }
                }
            };
            var ha = d.startSymbol(),
                ia = d.endSymbol(),
                ka = "{{" == ha || "}}" == ia ? q : function(a) {
                    return a.replace(/\{\{/g, ha).replace(/}}/g, ia)
                },
                ma = /^ngAttr[A-Z]/;
            return G.$$addBindingInfo = z ? function(a, b) {
                var c = a.data("$binding") || [];
                Ld(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : p, G.$$addBindingClass = z ? function(a) {
                F(a, "ng-binding")
            } : p, G.$$addScopeInfo = z ? function(a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b)
            } : p, G.$$addScopeClass = z ? function(a, b) {
                F(a, b ? "ng-isolate-scope" : "ng-scope")
            } : p, G
        }]
    }

    function jb(a) {
        return wa(a.replace(Ee, ""))
    }

    function kb(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function lb(a) {
        a = zd(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) {
            var c = a[b];
            c.nodeType === Xd && Dd.call(a, b, 1)
        }
        return a
    }

    function mb(a, b) {
        if (b && x(b)) return b;
        if (x(a)) {
            var c = Ge.exec(a);
            if (c) return c[3]
        }
    }

    function nb() {
        var a = {},
            b = !1;
        this.register = function(b, c) {
            na(b, "controller"), v(b) ? l(a, b) : a[b] = c
        }, this.allowGlobals = function() {
            b = !0
        }, this.$get = ["$injector", "$window", function(e, f) {
            function g(a, b, c, e) {
                if (!a || !v(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c
            }
            return function(d, h, i, j) {
                var k, m, n, o;
                if (i = i === !0, j && x(j) && (o = j), x(d)) {
                    if (m = d.match(Ge), !m) throw Fe("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                    n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), ma(d, n, !0)
                }
                if (i) {
                    var p = (Ld(d) ? d[d.length - 1] : d).prototype;
                    k = Object.create(p || null), o && g(h, o, k, n || d.name);
                    var q;
                    return q = l(function() {
                        var a = e.invoke(d, k, h, n);
                        return a !== k && (v(a) || A(a)) && (k = a, o && g(h, o, k, n || d.name)), k
                    }, {
                        instance: k,
                        identifier: o
                    })
                }
                return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k
            }
        }]
    }

    function ob() {
        this.$get = ["$window", function(a) {
            return zd(a.document)
        }]
    }

    function pb() {
        this.$get = ["$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function qb(a) {
        return v(a) ? z(a) ? a.toISOString() : V(a) : a
    }

    function rb() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                return g(a, function(a, c) {
                    null === a || t(a) || (Ld(a) ? f(a, function(a, d) {
                        b.push(da(c) + "=" + da(qb(a)))
                    }) : b.push(da(c) + "=" + da(qb(a))))
                }), b.join("&")
            }
        }
    }

    function sb() {
        this.$get = function() {
            return function(a) {
                function b(a, d, e) {
                    null === a || t(a) || (Ld(a) ? f(a, function(a, c) {
                        b(a, d + "[" + (v(a) ? c : "") + "]")
                    }) : v(a) && !z(a) ? g(a, function(a, c) {
                        b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
                    }) : c.push(da(d) + "=" + da(qb(a))))
                }
                if (!a) return "";
                var c = [];
                return b(a, "", !0), c.join("&")
            }
        }
    }

    function tb(a, b) {
        if (x(a)) {
            var c = a.replace(Me, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Ie) || ub(c)) && (a = W(c))
            }
        }
        return a
    }

    function ub(a) {
        var b = a.match(Ke);
        return b && Le[b[0]].test(a)
    }

    function vb(a) {
        function b(a, b) {
            a && (d[a] = d[a] ? d[a] + ", " + b : b)
        }
        var c, d = qa();
        return x(a) ? f(a.split("\n"), function(a) {
            c = a.indexOf(":"), b(td(Nd(a.substr(0, c))), Nd(a.substr(c + 1)))
        }) : v(a) && f(a, function(a, c) {
            b(td(c), Nd(a))
        }), d
    }

    function wb(a) {
        var b;
        return function(c) {
            if (b || (b = vb(a)), c) {
                var d = b[td(c)];
                return void 0 === d && (d = null), d
            }
            return b
        }
    }

    function xb(a, b, c, d) {
        return A(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c)
        }), a)
    }

    function yb(a) {
        return a >= 200 && 300 > a
    }

    function zb() {
        var a = this.defaults = {
                transformResponse: [tb],
                transformRequest: [function(a) {
                    return !v(a) || E(a) || G(a) || F(a) ? a : V(a)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: P(Je),
                    put: P(Je),
                    patch: P(Je)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            b = !1;
        this.useApplyAsync = function(a) {
            return u(a) ? (b = !!a, this) : b
        };
        var e = !0;
        this.useLegacyPromiseExtensions = function(a) {
            return u(a) ? (e = !!a, this) : e
        };
        var g = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(h, i, j, k, m, n) {
            function o(b) {
                function g(a) {
                    var b = l({}, a);
                    return a.data ? b.data = xb(a.data, a.headers, a.status, j.transformResponse) : b.data = a.data, yb(a.status) ? b : m.reject(b)
                }

                function h(a, b) {
                    var c, d = {};
                    return f(a, function(a, e) {
                        A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    }), d
                }

                function i(b) {
                    var c, d, e, f = a.headers,
                        g = l({}, b.headers);
                    f = l({}, f.common, f[td(b.method)]);
                    a: for (c in f) {
                        d = td(c);
                        for (e in g)
                            if (td(e) === d) continue a;
                        g[c] = f[c]
                    }
                    return h(g, P(b))
                }
                if (!Id.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                var j = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                j.headers = i(b), j.method = vd(j.method), j.paramSerializer = x(j.paramSerializer) ? n.get(j.paramSerializer) : j.paramSerializer;
                var k = function(b) {
                        var d = b.headers,
                            e = xb(b.data, wb(d), c, b.transformRequest);
                        return t(e) && f(d, function(a, b) {
                            "content-type" === td(b) && delete d[b]
                        }), t(b.withCredentials) && !t(a.withCredentials) && (b.withCredentials = a.withCredentials), r(b, e).then(g, g)
                    },
                    o = [k, c],
                    p = m.when(j);
                for (f(y, function(a) {
                        (a.request || a.requestError) && o.unshift(a.request, a.requestError), (a.response || a.responseError) && o.push(a.response, a.responseError)
                    }); o.length;) {
                    var q = o.shift(),
                        s = o.shift();
                    p = p.then(q, s)
                }
                return e ? (p.success = function(a) {
                    return ma(a, "fn"), p.then(function(b) {
                        a(b.data, b.status, b.headers, j)
                    }), p
                }, p.error = function(a) {
                    return ma(a, "fn"), p.then(null, function(b) {
                        a(b.data, b.status, b.headers, j)
                    }), p
                }) : (p.success = Oe("success"), p.error = Oe("error")), p
            }

            function p(a) {
                f(arguments, function(a) {
                    o[a] = function(b, c) {
                        return o(l({}, c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }

            function q(a) {
                f(arguments, function(a) {
                    o[a] = function(b, c, d) {
                        return o(l({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }

            function r(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        g(c, a, d, e)
                    }
                    n && (yb(a) ? n.put(y, [a, c, vb(d), e]) : n.remove(y)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                }

                function g(a, b, c, e) {
                    b = b >= -1 ? b : 0, (yb(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: wb(c),
                        config: d,
                        statusText: e
                    })
                }

                function j(a) {
                    g(a.data, a.status, P(a.headers()), a.statusText)
                }

                function l() {
                    var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
                }
                var n, p, q = m.defer(),
                    r = q.promise,
                    x = d.headers,
                    y = s(d.url, d.paramSerializer(d.params));
                if (o.pendingRequests.push(d), r.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w), n && (p = n.get(y), u(p) ? I(p) ? p.then(j, j) : Ld(p) ? g(p[1], p[0], P(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, r)), t(p)) {
                    var z = Ac(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
                    z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), h(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
                }
                return r
            }

            function s(a, b) {
                return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            }
            var w = j("$http");
            a.paramSerializer = x(a.paramSerializer) ? n.get(a.paramSerializer) : a.paramSerializer;
            var y = [];
            return f(g, function(a) {
                y.unshift(x(a) ? n.get(a) : n.invoke(a))
            }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
        }]
    }

    function Ab() {
        this.$get = function() {
            return function() {
                return new a.XMLHttpRequest
            }
        }
    }

    function Bb() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(a, b, c, d) {
            return Cb(a, d, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function Cb(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"),
                g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                ce(f, "load", g), ce(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1,
                    i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, be(f, "load", g), be(f, "error", g), e.body.appendChild(f), g
        }
        return function(e, h, i, j, k, l, m, n) {
            function o() {
                s && s(), v && v.abort()
            }

            function q(b, d, e, f, g) {
                u(y) && c.cancel(y), s = v = null, b(d, e, f, g), a.$$completeOutstandingRequest(p)
            }
            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == td(e)) {
                var r = "_" + (d.counter++).toString(36);
                d[r] = function(a) {
                    d[r].data = a, d[r].called = !0
                };
                var s = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function(a, b) {
                    q(j, a, d[r].data, "", b), d[r] = p
                })
            } else {
                var v = b(e, h);
                v.open(e, h, !0), f(k, function(a, b) {
                    u(a) && v.setRequestHeader(b, a)
                }), v.onload = function() {
                    var a = v.statusText || "",
                        b = "response" in v ? v.response : v.responseText,
                        c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == zc(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a)
                };
                var w = function() {
                    q(j, -1, null, null, "")
                };
                if (v.onerror = w, v.onabort = w, m && (v.withCredentials = !0), n) try {
                    v.responseType = n
                } catch (x) {
                    if ("json" !== n) throw x
                }
                v.send(t(i) ? null : i)
            }
            if (l > 0) var y = c(o, l);
            else I(l) && l.then(o)
        }
    }

    function Db() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(m, a).replace(n, b)
            }

            function h(a) {
                if (null == a) return "";
                switch (typeof a) {
                    case "string":
                        break;
                    case "number":
                        a = "" + a;
                        break;
                    default:
                        a = V(a)
                }
                return a
            }

            function i(f, i, m, n) {
                function o(a) {
                    try {
                        return a = C(a), n && !u(a) ? a : h(a)
                    } catch (b) {
                        d(Pe.interr(f, b))
                    }
                }
                n = !!n;
                for (var p, q, r, s = 0, v = [], w = [], x = f.length, y = [], z = []; x > s;) {
                    if (-1 == (p = f.indexOf(a, s)) || -1 == (q = f.indexOf(b, p + j))) {
                        s !== x && y.push(g(f.substring(s)));
                        break
                    }
                    s !== p && y.push(g(f.substring(s, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), s = q + k, z.push(y.length), y.push("")
                }
                if (m && y.length > 1 && Pe.throwNoconcat(f), !i || v.length) {
                    var B = function(a) {
                            for (var b = 0, c = v.length; c > b; b++) {
                                if (n && t(a[b])) return;
                                y[z[b]] = a[b]
                            }
                            return y.join("")
                        },
                        C = function(a) {
                            return m ? e.getTrusted(m, a) : e.valueOf(a)
                        };
                    return l(function(a) {
                        var b = 0,
                            c = v.length,
                            e = new Array(c);
                        try {
                            for (; c > b; b++) e[b] = w[b](a);
                            return B(e)
                        } catch (g) {
                            d(Pe.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(w, function(d, e) {
                                var f = B(d);
                                A(b) && b.call(this, f, d !== e ? c : f, a), c = f
                            })
                        }
                    })
                }
            }
            var j = a.length,
                k = b.length,
                m = new RegExp(a.replace(/./g, f), "g"),
                n = new RegExp(b.replace(/./g, f), "g");
            return i.startSymbol = function() {
                return a
            }, i.endSymbol = function() {
                return b
            }, i
        }]
    }

    function Eb() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = arguments.length > 4,
                    k = j ? S(arguments, 4) : [],
                    l = b.setInterval,
                    m = b.clearInterval,
                    n = 0,
                    o = u(i) && !i,
                    p = (o ? d : c).defer(),
                    q = p.promise;
                return h = u(h) ? h : 0, q.then(null, null, j ? function() {
                    e.apply(null, k)
                } : e), q.$$intervalId = l(function() {
                    p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
                }, g), f[q.$$intervalId] = p, q
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
            }, e
        }]
    }

    function Fb(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = ca(b[c]);
        return b.join("/")
    }

    function Gb(a, b) {
        var c = zc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Re[c.protocol] || null
    }

    function Hb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = zc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function Ib(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function Jb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function Kb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function Lb(a) {
        return a.substr(0, Jb(a).lastIndexOf("/") + 1)
    }

    function Mb(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function Nb(a, b, c) {
        this.$$html5 = !0, c = c || "", Gb(a, this), this.$$parse = function(a) {
            var c = Ib(b, a);
            if (!x(c)) throw Se("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
            Hb(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var a = ba(this.$$search),
                c = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g, h;
            return u(f = Ib(a, d)) ? (g = f, h = u(f = Ib(c, f)) ? b + (Ib("/", f) || f) : a + g) : u(f = Ib(b, d)) ? h = b + f : b == d + "/" && (h = b), h && this.$$parse(h), !!h
        }
    }

    function Ob(a, b, c) {
        Gb(a, this), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }
            var f, g = Ib(a, d) || Ib(b, d);
            t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Ib(c, g), t(f) && (f = g)), Hb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
        }, this.$$compose = function() {
            var b = ba(this.$$search),
                d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
        }, this.$$parseLinkUrl = function(b, c) {
            return Jb(a) == Jb(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function Pb(a, b, c) {
        this.$$html5 = !0, Ob.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Jb(d) ? f = d : (g = Ib(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
        }, this.$$compose = function() {
            var b = ba(this.$$search),
                d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
        }
    }

    function Qb(a) {
        return function() {
            return this[a]
        }
    }

    function Rb(a, b) {
        return function(c) {
            return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function Sb() {
        var a = "",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(b) {
            return u(b) ? (a = b, this) : a
        }, this.html5Mode = function(a) {
            return H(a) ? (b.enabled = a, this) : v(a) ? (H(a.enabled) && (b.enabled = a.enabled), H(a.requireBase) && (b.requireBase = a.requireBase), H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(),
                    f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (g) {
                    throw j.url(e), j.$$state = f, g
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }
            var j, k, l, m = d.baseHref(),
                n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw Se("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = Mb(n) + (m || "/"), k = e.history ? Nb : Pb
            } else l = Jb(n), k = Ob;
            var o = Lb(l);
            j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = zd(a.target);
                        "a" !== M(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        i = e.attr("href") || e.attr("xlink:href");
                    v(h) && "[object SVGAnimatedString]" === h.toString() && (h = zc(h.animVal).href), p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), Kb(j.absUrl()) != Kb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return d.onUrlChange(function(a, b) {
                return t(Ib(o, a)) ? void(g.location.href = a) : (c.$evalAsync(function() {
                    var d, e = j.absUrl(),
                        f = j.$$state;
                    j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)))
                }), void(c.$$phase || c.$digest()))
            }), c.$watch(function() {
                var a = Kb(d.url()),
                    b = Kb(j.absUrl()),
                    f = d.state(),
                    g = j.$$replace,
                    k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (q || k) && (q = !1, c.$evalAsync(function() {
                    var b = j.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function Tb() {
        var a = !0,
            b = this;
        this.debugEnabled = function(b) {
            return u(b) ? (a = b, this) : a
        }, this.$get = ["$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || p,
                    g = !1;
                try {
                    g = !!e.apply
                } catch (h) {}
                return g ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Ub(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Ue("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }

    function Vb(a, b) {
        if (a += "", !x(a)) throw Ue("iseccst", "Cannot convert object to primitive value! Expression: {0}", b);
        return a
    }

    function Wb(a, b) {
        if (a) {
            if (a.constructor === a) throw Ue("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw Ue("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Ue("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw Ue("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function Xb(a, b) {
        if (a) {
            if (a.constructor === a) throw Ue("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Ve || a === We || a === Xe) throw Ue("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }

    function Yb(a, b) {
        if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw Ue("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b)
    }

    function Zb(a, b) {
        return "undefined" != typeof a ? a : b
    }

    function $b(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function _b(a, b) {
        var c = a(b);
        return !c.$stateful
    }

    function ac(a, b) {
        var c, d;
        switch (a.type) {
            case _e.Program:
                c = !0, f(a.body, function(a) {
                    ac(a.expression, b), c = c && a.expression.constant
                }), a.constant = c;
                break;
            case _e.Literal:
                a.constant = !0, a.toWatch = [];
                break;
            case _e.UnaryExpression:
                ac(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
                break;
            case _e.BinaryExpression:
                ac(a.left, b), ac(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case _e.LogicalExpression:
                ac(a.left, b), ac(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case _e.ConditionalExpression:
                ac(a.test, b), ac(a.alternate, b), ac(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case _e.Identifier:
                a.constant = !1, a.toWatch = [a];
                break;
            case _e.MemberExpression:
                ac(a.object, b), a.computed && ac(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
                break;
            case _e.CallExpression:
                c = a.filter ? _b(b, a.callee.name) : !1, d = [], f(a.arguments, function(a) {
                    ac(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = a.filter && _b(b, a.callee.name) ? d : [a];
                break;
            case _e.AssignmentExpression:
                ac(a.left, b), ac(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
                break;
            case _e.ArrayExpression:
                c = !0, d = [], f(a.elements, function(a) {
                    ac(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case _e.ObjectExpression:
                c = !0, d = [], f(a.properties, function(a) {
                    ac(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case _e.ThisExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function bc(a) {
        if (1 == a.length) {
            var b = a[0].expression,
                d = b.toWatch;
            return 1 !== d.length ? d : d[0] !== b ? d : c
        }
    }

    function cc(a) {
        return a.type === _e.Identifier || a.type === _e.MemberExpression
    }

    function dc(a) {
        return 1 === a.body.length && cc(a.body[0].expression) ? {
            type: _e.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: _e.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function ec(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === _e.Literal || a.body[0].expression.type === _e.ArrayExpression || a.body[0].expression.type === _e.ObjectExpression)
    }

    function fc(a) {
        return a.constant
    }

    function gc(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function hc(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function ic(a) {
        return "constructor" == a
    }

    function jc(a) {
        return A(a.valueOf) ? a.valueOf() : bf.call(a)
    }

    function kc() {
        var a = qa(),
            b = qa();
        this.$get = ["$filter", function(d) {
            function e(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = jc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function g(a, b, d, f, g) {
                var h, i = f.inputs;
                if (1 === i.length) {
                    var j = e;
                    return i = i[0], a.$watch(function(a) {
                        var b = i(a);
                        return e(b, j) || (h = f(a, c, c, [b]), j = b && jc(b)), h
                    }, b, d, g)
                }
                for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = e, l[m] = null;
                return a.$watch(function(a) {
                    for (var b = !1, d = 0, g = i.length; g > d; d++) {
                        var j = i[d](a);
                        (b || (b = !e(j, k[d]))) && (l[d] = j, k[d] = j && jc(j))
                    }
                    return b && (h = f(a, c, c, l)), h
                }, b, d, g)
            }

            function h(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function() {
                        u(f) && e()
                    })
                }, c)
            }

            function i(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        u(a) || (b = !1)
                    }), b
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    h = a, A(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g()
                    })
                }, c)
            }

            function j(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    A(b) && b.apply(this, arguments), e()
                }, c)
            }

            function k(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = c !== i && c !== h,
                    e = d ? function(c, d, e, f) {
                        var g = a(c, d, e, f);
                        return b(g, c, d)
                    } : function(c, d, e, f) {
                        var g = a(c, d, e, f),
                            h = b(g, c, d);
                        return u(g) ? h : g
                    };
                return a.$$watchDelegate && a.$$watchDelegate !== g ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = g, e.inputs = a.inputs ? a.inputs : [a]), e
            }
            var l = Pd().noUnsafeEval,
                m = {
                    csp: l,
                    expensiveChecks: !1
                },
                n = {
                    csp: l,
                    expensiveChecks: !0
                };
            return function(c, e, f) {
                var l, o, q;
                switch (typeof c) {
                    case "string":
                        c = c.trim(), q = c;
                        var r = f ? b : a;
                        if (l = r[q], !l) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
                            var s = f ? n : m,
                                t = new $e(s),
                                u = new af(t, d, s);
                            l = u.parse(c), l.constant ? l.$$watchDelegate = j : o ? l.$$watchDelegate = l.literal ? i : h : l.inputs && (l.$$watchDelegate = g), r[q] = l
                        }
                        return k(l, e);
                    case "function":
                        return k(c, e);
                    default:
                        return p
                }
            }
        }]
    }

    function lc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
            return nc(function(b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function mc() {
        this.$get = ["$browser", "$exceptionHandler", function(a, b) {
            return nc(function(b) {
                a.defer(b)
            }, b)
        }]
    }

    function nc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function g() {
            this.$$state = {
                status: 0
            }
        }

        function h(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    A(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                } catch (i) {
                    e.reject(i), b(i)
                }
            }
        }

        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                i(b)
            }))
        }

        function k() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }

        function m(a) {
            var b = new k,
                c = 0,
                d = Ld(a) ? [] : {};
            return f(a, function(a, e) {
                c++, s(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }
        var n = d("$q", TypeError),
            o = function() {
                return new k
            };
        l(g.prototype, {
            then: function(a, b, c) {
                if (t(a) && t(b) && t(c)) return this;
                var d = new k;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return r(b, !0, a)
                }, function(b) {
                    return r(b, !1, a)
                }, b)
            }
        }), l(k.prototype, {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(n("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (v(a) || A(a)) && (c = a && a.then), A(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(A(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var p = function(a) {
                var b = new k;
                return b.reject(a), b.promise
            },
            q = function(a, b) {
                var c = new k;
                return b ? c.resolve(a) : c.reject(a), c.promise
            },
            r = function(a, b, c) {
                var d = null;
                try {
                    A(c) && (d = c())
                } catch (e) {
                    return q(e, !1)
                }
                return I(d) ? d.then(function() {
                    return q(a, b)
                }, function(a) {
                    return q(a, !1)
                }) : q(a, b)
            },
            s = function(a, b, c, d) {
                var e = new k;
                return e.resolve(a), e.promise.then(b, c, d)
            },
            u = s,
            w = function x(a) {
                function b(a) {
                    d.resolve(a)
                }

                function c(a) {
                    d.reject(a)
                }
                if (!A(a)) throw n("norslvr", "Expected resolverFn, got '{0}'", a);
                if (!(this instanceof x)) return new x(a);
                var d = new k;
                return a(b, c), d.promise
            };
        return w.defer = o, w.reject = p, w.when = s, w.resolve = u, w.all = m, w
    }

    function oc() {
        this.$get = ["$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(a) {
                    var c = b(a, 16.66, !1);
                    return function() {
                        b.cancel(c)
                    }
                };
            return f.supported = e, f
        }]
    }

    function pc() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), this.$$ChildScope = null
            }
            return b.prototype = a, b
        }
        var b = 10,
            c = d("$rootScope"),
            g = null,
            h = null;
        this.digestTtl = function(a) {
            return arguments.length && (b = a), b
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, j, k, l) {
            function m(a) {
                a.currentScope.$$destroyed = !0
            }

            function n() {
                this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function o(a) {
                if (y.$$phase) throw c("inprog", "{0} already in progress", y.$$phase);
                y.$$phase = a
            }

            function q() {
                y.$$phase = null
            }

            function r(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function s(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function u() {}

            function w() {
                for (; C.length;) try {
                    C.shift()()
                } catch (a) {
                    j(a)
                }
                h = null
            }

            function x() {
                null === h && (h = l.defer(function() {
                    y.$apply(w)
                }))
            }
            n.prototype = {
                constructor: n,
                $new: function(b, c) {
                    var d;
                    return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
                },
                $watch: function(a, b, c, d) {
                    var e = k(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
                    var f = this,
                        h = f.$$watchers,
                        i = {
                            fn: b,
                            last: u,
                            get: e,
                            exp: d || a,
                            eq: !!c
                        };
                    return g = null, A(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), r(this, 1),
                        function() {
                            N(h, i) >= 0 && r(f, -1), g = null
                        }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                    }
                    var d = new Array(a.length),
                        e = new Array(a.length),
                        g = [],
                        h = this,
                        i = !1,
                        j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                                k && b(e, e, h)
                            }),
                            function() {
                                k = !1
                            }
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function() {
                        for (; g.length;) g.shift()()
                    })
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (!t(f)) {
                            if (v(f))
                                if (e(f)) {
                                    g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                    for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                                } else {
                                    g !== o && (g = o = {}, q = 0, l++), b = 0;
                                    for (c in f) ud.call(f, c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                    if (q > b) {
                                        l++;
                                        for (c in g) ud.call(f, c) || (q--, delete g[c])
                                    }
                                }
                            else g !== f && (g = f, l++);
                            return l
                        }
                    }

                    function d() {
                        if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)
                            if (v(f))
                                if (e(f)) {
                                    h = new Array(f.length);
                                    for (var a = 0; a < f.length; a++) h[a] = f[a]
                                } else {
                                    h = {};
                                    for (var c in f) ud.call(f, c) && (h[c] = f[c])
                                }
                        else h = f
                    }
                    c.$stateful = !0;
                    var f, g, h, i = this,
                        j = b.length > 1,
                        l = 0,
                        m = k(a, c),
                        n = [],
                        o = {},
                        p = !0,
                        q = 0;
                    return this.$watch(m, d)
                },
                $digest: function() {
                    var a, d, e, f, i, k, m, n, p, r, s = b,
                        t = this,
                        v = [];
                    o("$digest"), l.$$checkUrlChange(), this === y && null !== h && (l.defer.cancel(h), w()), g = null;
                    do {
                        for (k = !1, n = t; z.length;) {
                            try {
                                r = z.shift(), r.scope.$eval(r.expression, r.locals)
                            } catch (x) {
                                j(x)
                            }
                            g = null
                        }
                        a: do {
                            if (f = n.$$watchers)
                                for (i = f.length; i--;) try {
                                    if (a = f[i])
                                        if ((d = a.get(n)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                            if (a === g) {
                                                k = !1;
                                                break a
                                            }
                                        } else k = !0, g = a, a.last = a.eq ? O(d, null) : d, a.fn(d, e === u ? d : e, n), 5 > s && (p = 4 - s, v[p] || (v[p] = []), v[p].push({
                                            msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            newVal: d,
                                            oldVal: e
                                        }))
                                } catch (x) {
                                    j(x)
                                }
                            if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling))
                                for (; n !== t && !(m = n.$$nextSibling);) n = n.$parent
                        } while (n = m);
                        if ((k || z.length) && !s--) throw q(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, v)
                    } while (k || z.length);
                    for (q(); B.length;) try {
                        B.shift()()
                    } catch (x) {
                        j(x)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === y && l.$$applicationDestroyed(), r(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) s(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                            return p
                        }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                    }
                },
                $eval: function(a, b) {
                    return k(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    y.$$phase || z.length || l.defer(function() {
                        z.length && y.$digest()
                    }), z.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    B.push(a)
                },
                $apply: function(a) {
                    try {
                        o("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            q()
                        }
                    } catch (b) {
                        j(b)
                    } finally {
                        try {
                            y.$digest()
                        } catch (b) {
                            throw j(b), b
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && C.push(b), x()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, s(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c, d, e, f = [],
                        g = this,
                        h = !1,
                        i = {
                            name: a,
                            targetScope: g,
                            stopPropagation: function() {
                                h = !0
                            },
                            preventDefault: function() {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = R([i], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++)
                            if (c[d]) try {
                                c[d].apply(null, k)
                            } catch (l) {
                                j(l)
                            } else c.splice(d, 1), d--, e--;
                        if (h) return i.currentScope = null, i;
                        g = g.$parent
                    } while (g);
                    return i.currentScope = null, i
                },
                $broadcast: function(a, b) {
                    var c = this,
                        d = c,
                        e = c,
                        f = {
                            name: a,
                            targetScope: c,
                            preventDefault: function() {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!c.$$listenerCount[a]) return f;
                    for (var g, h, i, k = R([f], arguments, 1); d = e;) {
                        for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++)
                            if (g[h]) try {
                                g[h].apply(null, k)
                            } catch (l) {
                                j(l)
                            } else g.splice(h, 1), h--, i--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
                            for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
                    }
                    return f.currentScope = null, f
                }
            };
            var y = new n,
                z = y.$$asyncQueue = [],
                B = y.$$postDigestQueue = [],
                C = y.$$applyAsyncQueue = [];
            return y
        }]
    }

    function qc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return u(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (b = a, this) : b
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = zc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function rc(a) {
        if ("self" === a) return a;
        if (x(a)) {
            if (a.indexOf("***") > -1) throw cf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Od(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (B(a)) return new RegExp("^" + a.source + "$");
        throw cf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function sc(a) {
        var b = [];
        return u(a) && f(a, function(a) {
            b.push(rc(a))
        }), b
    }

    function tc() {
        this.SCE_CONTEXTS = df;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = sc(b)), a
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = sc(a)), b
        }, this.$get = ["$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Ac(b) : !!a.exec(b.href)
            }

            function e(c) {
                var e, f, g = zc(c.toString()),
                    h = !1;
                for (e = 0, f = a.length; f > e; e++)
                    if (d(a[e], g)) {
                        h = !0;
                        break
                    }
                if (h)
                    for (e = 0, f = b.length; f > e; e++)
                        if (d(b[e], g)) {
                            h = !1;
                            break
                        }
                return h
            }

            function f(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            function g(a, b) {
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (!c) throw cf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || t(b) || "" === b) return b;
                if ("string" != typeof b) throw cf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new c(b)
            }

            function h(a) {
                return a instanceof k ? a.$$unwrapTrustedValue() : a
            }

            function i(a, b) {
                if (null === b || t(b) || "" === b) return b;
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (c && b instanceof c) return b.$$unwrapTrustedValue();
                if (a === df.RESOURCE_URL) {
                    if (e(b)) return b;
                    throw cf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === df.HTML) return j(b);
                throw cf("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var j = function(a) {
                throw cf("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(),
                l = {};
            return l[df.HTML] = f(k), l[df.CSS] = f(k), l[df.URL] = f(k), l[df.JS] = f(k), l[df.RESOURCE_URL] = f(l[df.URL]), {
                trustAs: g,
                getTrusted: i,
                valueOf: h
            }
        }]
    }

    function uc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > yd) throw cf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = P(df);
            d.isEnabled = function() {
                return a
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = q), d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function(b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs,
                g = d.getTrusted,
                h = d.trustAs;
            return f(df, function(a, b) {
                var c = td(b);
                d[wa("parse_as_" + c)] = function(b) {
                    return e(a, b)
                }, d[wa("get_trusted_" + c)] = function(b) {
                    return g(a, b)
                }, d[wa("trust_as_" + c)] = function(b) {
                    return h(a, b)
                }
            }), d
        }]
    }

    function vc() {
        this.$get = ["$window", "$document", function(a, b) {
            var c, d, e = {},
                f = n((/android (\d+)/.exec(td((a.navigator || {}).userAgent)) || [])[1]),
                g = /Boxee/i.test((a.navigator || {}).userAgent),
                h = b[0] || {},
                i = /^(Moz|webkit|ms)(?=[A-Z])/,
                j = h.body && h.body.style,
                k = !1,
                l = !1;
            if (j) {
                for (var m in j)
                    if (d = i.exec(m)) {
                        c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        break
                    }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = x(j.webkitTransition), l = x(j.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= yd) return !1;
                    if (t(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b
                    }
                    return e[a]
                },
                csp: Pd(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            }
        }]
    }

    function wc() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
            function e(f, g) {
                function h(a) {
                    if (!g) throw De("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
                    return c.reject(a)
                }
                e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
                var i = b.defaults && b.defaults.transformResponse;
                Ld(i) ? i = i.filter(function(a) {
                    return a !== tb
                }) : i === tb && (i = null);
                var j = {
                    cache: a,
                    transformResponse: i
                };
                return b.get(f, j)["finally"](function() {
                    e.totalPendingRequests--
                }).then(function(b) {
                    return a.put(f, b.data), b.data
                }, h)
            }
            return e.totalPendingRequests = 0, e
        }]
    }

    function xc() {
        this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
            var d = {};
            return d.findBindings = function(a, b, c) {
                var d = a.getElementsByClassName("ng-binding"),
                    e = [];
                return f(d, function(a) {
                    var d = Id.element(a).data("$binding");
                    d && f(d, function(d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + Od(b) + "(\\s|\\||$)");
                            f.test(d) && e.push(a)
                        } else -1 != d.indexOf(b) && e.push(a)
                    })
                }), e
            }, d.findModels = function(a, b, c) {
                for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=",
                        g = "[" + d[e] + "model" + f + '"' + b + '"]',
                        h = a.querySelectorAll(g);
                    if (h.length) return h
                }
            }, d.getLocation = function() {
                return c.url()
            }, d.setLocation = function(b) {
                b !== c.url() && (c.url(b), a.$digest())
            }, d.whenStable = function(a) {
                b.notifyWhenNoOutstandingRequests(a)
            }, d
        }]
    }

    function yc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                A(f) || (i = h, h = f, f = p);
                var j, k = S(arguments, 3),
                    l = u(i) && !i,
                    m = (l ? d : c).defer(),
                    n = m.promise;
                return j = b.defer(function() {
                    try {
                        m.resolve(f.apply(null, k))
                    } catch (b) {
                        m.reject(b), e(b)
                    } finally {
                        delete g[n.$$timeoutId]
                    }
                    l || a.$apply()
                }, h), n.$$timeoutId = j, g[j] = m, n
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function zc(a) {
        var b = a;
        return yd && (ef.setAttribute("href", b), b = ef.href), ef.setAttribute("href", b), {
            href: ef.href,
            protocol: ef.protocol ? ef.protocol.replace(/:$/, "") : "",
            host: ef.host,
            search: ef.search ? ef.search.replace(/^\?/, "") : "",
            hash: ef.hash ? ef.hash.replace(/^#/, "") : "",
            hostname: ef.hostname,
            port: ef.port,
            pathname: "/" === ef.pathname.charAt(0) ? ef.pathname : "/" + ef.pathname
        }
    }

    function Ac(a) {
        var b = x(a) ? zc(a) : a;
        return b.protocol === ff.protocol && b.host === ff.host
    }

    function Bc() {
        this.$get = r(a)
    }

    function Cc(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var c = a[0] || {},
            d = {},
            e = "";
        return function() {
            var a, f, g, h, i, j = c.cookie || "";
            if (j !== e)
                for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++) f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), t(d[i]) && (d[i] = b(f.substring(h + 1))));
            return d
        }
    }

    function Dc() {
        this.$get = Cc
    }

    function Ec(a) {
        function b(d, e) {
            if (v(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b, this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }], b("currency", Jc), b("date", Wc), b("filter", Fc), b("json", Xc), b("limitTo", Yc), b("lowercase", lf), b("number", Kc), b("orderBy", Zc), b("uppercase", mf)
    }

    function Fc() {
        return function(a, b, c) {
            if (!e(a)) {
                if (null == a) return a;
                throw d("filter")("notarray", "Expected array but received: {0}", a)
            }
            var f, g, h = Ic(b);
            switch (h) {
                case "function":
                    f = b;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    g = !0;
                case "object":
                    f = Gc(b, c, g);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, f)
        }
    }

    function Gc(a, b, c) {
        var d, e = v(a) && "$" in a;
        return b === !0 ? b = Q : A(b) || (b = function(a, b) {
            return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = td("" + a), b = td("" + b), -1 !== a.indexOf(b))
        }), d = function(d) {
            return e && !v(d) ? Hc(d, a.$, b, !1) : Hc(d, a, b, c)
        }
    }

    function Hc(a, b, c, d, e) {
        var f = Ic(a),
            g = Ic(b);
        if ("string" === g && "!" === b.charAt(0)) return !Hc(a, b.substring(1), c, d);
        if (Ld(a)) return a.some(function(a) {
            return Hc(a, b, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && Hc(a[h], b, c, !0)) return !0;
                    return e ? !1 : Hc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b) {
                        var i = b[h];
                        if (!A(i) && !t(i)) {
                            var j = "$" === h,
                                k = j ? a : a[h];
                            if (!Hc(k, i, c, j, j)) return !1
                        }
                    }
                    return !0
                }
                return c(a, b);
            case "function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function Ic(a) {
        return null === a ? "null" : typeof a
    }

    function Jc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Lc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function Kc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Lc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Lc(a, b, c, d, e) {
        if (v(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a === 1 / 0;
        if (!g && !isFinite(a)) return "";
        var h = a + "",
            i = "",
            j = !1,
            k = [];
        if (g && (i = "∞"), !g && -1 !== h.indexOf("e")) {
            var l = h.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? a = 0 : (i = h, j = !0)
        }
        if (g || j) e > 0 && 1 > a && (i = a.toFixed(e), a = parseFloat(i), i = i.replace(gf, d));
        else {
            var m = (h.split(gf)[1] || "").length;
            t(e) && (e = Math.min(Math.max(b.minFrac, m), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var n = ("" + a).split(gf),
                o = n[0];
            n = n[1] || "";
            var p, q = 0,
                r = b.lgSize,
                s = b.gSize;
            if (o.length >= r + s)
                for (q = o.length - r, p = 0; q > p; p++)(q - p) % s === 0 && 0 !== p && (i += c), i += o.charAt(p);
            for (p = q; p < o.length; p++)(o.length - p) % r === 0 && 0 !== p && (i += c), i += o.charAt(p);
            for (; n.length < e;) n += "0";
            e && "0" !== e && (i += d + n.substr(0, e))
        }
        return 0 === a && (f = !1), k.push(f ? b.negPre : b.posPre, i, f ? b.negSuf : b.posSuf), k.join("")
    }

    function Mc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function Nc(a, b, c, d) {
        return c = c || 0,
            function(e) {
                var f = e["get" + a]();
                return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Mc(f, b, d)
            }
    }

    function Oc(a, b) {
        return function(c, d) {
            var e = c["get" + a](),
                f = vd(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Pc(a, b, c) {
        var d = -1 * c,
            e = d >= 0 ? "+" : "";
        return e += Mc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Mc(Math.abs(d % 60), 2)
    }

    function Qc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Rc(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function Sc(a) {
        return function(b) {
            var c = Qc(b.getFullYear()),
                d = Rc(b),
                e = +d - +c,
                f = 1 + Math.round(e / 6048e5);
            return Mc(f, a)
        }
    }

    function Tc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Uc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function Vc(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function Wc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0),
                    e = 0,
                    f = 0,
                    g = b[8] ? d.setUTCFullYear : d.setFullYear,
                    h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
                var i = n(b[4] || 0) - e,
                    j = n(b[5] || 0) - f,
                    k = n(b[6] || 0),
                    l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "",
                j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = kf.test(c) ? n(c) : b(c)), y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime())) return c;
            for (; d;) h = jf.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            var k = c.getTimezoneOffset();
            return e && (k = X(e, c.getTimezoneOffset()), c = Z(c, e, !0)), f(j, function(b) {
                g = hf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function Xc() {
        return function(a, b) {
            return t(b) && (b = 2), V(a, b)
        }
    }

    function Yc() {
        return function(a, b, c) {
            return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), Ld(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c && c >= -a.length ? a.length + c : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
        }
    }

    function Zc(a) {
        function b(b, c) {
            return c = c ? -1 : 1, b.map(function(b) {
                var d = 1,
                    e = q;
                if (A(b)) e = b;
                else if (x(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (e = a(b), e.constant))) {
                    var f = e();
                    e = function(a) {
                        return a[f]
                    }
                }
                return {
                    get: e,
                    descending: d * c
                }
            })
        }

        function c(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function d(a, b) {
            return "function" == typeof a.valueOf && (a = a.valueOf(), c(a)) ? a : s(a) && (a = a.toString(), c(a)) ? a : b
        }

        function f(a, b) {
            var c = typeof a;
            return null === a ? (c = "string", a = "null") : "string" === c ? a = a.toLowerCase() : "object" === c && (a = d(a, b)), {
                value: a,
                type: c
            }
        }

        function g(a, b) {
            var c = 0;
            return a.type === b.type ? a.value !== b.value && (c = a.value < b.value ? -1 : 1) : c = a.type < b.type ? -1 : 1, c
        }
        return function(a, c, d) {
            function h(a, b) {
                return {
                    value: a,
                    predicateValues: j.map(function(c) {
                        return f(c.get(a), b)
                    })
                }
            }

            function i(a, b) {
                for (var c = 0, d = 0, e = j.length; e > d && !(c = g(a.predicateValues[d], b.predicateValues[d]) * j[d].descending); ++d);
                return c
            }
            if (!e(a)) return a;
            Ld(c) || (c = [c]), 0 === c.length && (c = ["+"]);
            var j = b(c, d);
            j.push({
                get: function() {
                    return {}
                },
                descending: d ? -1 : 1
            });
            var k = Array.prototype.map.call(a, h);
            return k.sort(i), a = k.map(function(a) {
                return a.value
            })
        }
    }

    function $c(a) {
        return A(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", r(a)
    }

    function _c(a, b) {
        a.$name = b
    }

    function ad(a, b, d, e, g) {
        var h = this,
            i = [];
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, h.$$parentForm = pf, h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function(a) {
            na(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a), a.$$parentForm = h
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a)
            }), N(i, a), a.$$parentForm = pf
        }, pd({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c); - 1 === e && d.push(c)
                } else a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (N(d, c), 0 === d.length && delete a[b])
            },
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, Zf), e.addClass(a, $f), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty()
        }, h.$setPristine = function() {
            e.setClass(a, Zf, $f + " " + qf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function() {
            e.addClass(a, qf), h.$submitted = !0, h.$$parentForm.$setSubmitted()
        }
    }

    function bd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function cd(a, b, c, d, e, f) {
        dd(a, b, c, d, e, f), bd(d)
    }

    function dd(a, b, c, d, e, f) {
        var g = td(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function(a) {
                h = !0
            }), b.on("compositionend", function() {
                h = !1, i()
            })
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(),
                    i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Nd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
            }
        };
        if (e.hasEvent("input")) b.on("input", i);
        else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function() {
            var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function ed(a, b) {
        if (z(a)) return a;
        if (x(a)) {
            Af.lastIndex = 0;
            var c = Af.exec(a);
            if (c) {
                var d = +c[1],
                    e = +c[2],
                    f = 0,
                    g = 0,
                    h = 0,
                    i = 0,
                    j = Qc(d),
                    k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
            }
        }
        return NaN
    }

    function fd(a, b) {
        return function(c, d) {
            var e, g;
            if (z(c)) return c;
            if (x(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), uf.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a)
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return NaN
        }
    }

    function gd(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return u(a) && !z(a) ? d(a) || c : a
            }
            hd(f, g, h, i), dd(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                    if (i.$isEmpty(a)) return null;
                    if (b.test(a)) {
                        var e = d(a, o);
                        return p && (e = Z(e, p)), e
                    }
                    return c
                }), i.$formatters.push(function(a) {
                    if (a && !z(a)) throw cg("datefmt", "Expected `{0}` to be a date", a);
                    return m(a) ? (o = a, o && p && (o = Z(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
                }), u(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function(a) {
                    return !m(a) || t(q) || d(a) >= q
                }, h.$observe("min", function(a) {
                    q = n(a), i.$validate()
                })
            }
            if (u(h.max) || h.ngMax) {
                var r;
                i.$validators.max = function(a) {
                    return !m(a) || t(r) || d(a) <= r
                }, h.$observe("max", function(a) {
                    r = n(a), i.$validate()
                })
            }
        }
    }

    function hd(a, b, d, e) {
        var f = b[0],
            g = e.$$hasNativeValidators = v(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(sd) || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }

    function id(a, b, d, e, f, g) {
        if (hd(a, b, d, e), dd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                return e.$isEmpty(a) ? null : xf.test(a) ? parseFloat(a) : c
            }), e.$formatters.push(function(a) {
                if (!e.$isEmpty(a)) {
                    if (!y(a)) throw cg("numfmt", "Expected `{0}` to be a number", a);
                    a = a.toString()
                }
                return a
            }), u(d.min) || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
                return e.$isEmpty(a) || t(h) || a >= h
            }, d.$observe("min", function(a) {
                u(a) && !y(a) && (a = parseFloat(a, 10)), h = y(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
        if (u(d.max) || d.ngMax) {
            var i;
            e.$validators.max = function(a) {
                return e.$isEmpty(a) || t(i) || i >= a
            }, d.$observe("max", function(a) {
                u(a) && !y(a) && (a = parseFloat(a, 10)), i = y(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
    }

    function jd(a, b, c, d, e, f) {
        dd(a, b, c, d, e, f), bd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || vf.test(c)
        }
    }

    function kd(a, b, c, d, e, f) {
        dd(a, b, c, d, e, f), bd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || wf.test(c)
        }
    }

    function ld(a, b, c, d) {
        t(c.name) && b.attr("name", i());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type)
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function md(a, b, c, d, e) {
        var f;
        if (u(d)) {
            if (f = a(d), !f.constant) throw cg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
            return f(b)
        }
        return e
    }

    function nd(a, b, c, d, e, f, g, h) {
        var i = md(h, a, "ngTrueValue", c.ngTrueValue, !0),
            j = md(h, a, "ngFalseValue", c.ngFalseValue, !1),
            k = function(a) {
                d.$setViewValue(b[0].checked, a && a.type)
            };
        b.on("click", k), d.$render = function() {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function(a) {
            return a === !1
        }, d.$formatters.push(function(a) {
            return Q(a, i)
        }), d.$parsers.push(function(a) {
            return a ? i : j
        })
    }

    function od(a, b) {
        return a = "ngClass" + a, ["$animate", function(c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)
                        if (e == b[f]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return Ld(a) ? (f(a, function(a) {
                    b = b.concat(e(a))
                }), b) : x(a) ? a.split(" ") : v(a) ? (f(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }

                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b)
                    }

                    function l(a, b) {
                        var c = h.data("$classCounts") || qa(),
                            d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }), h.data("$classCounts", c), d.join(" ")
                    }

                    function m(a, b) {
                        var e = d(b, a),
                            f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                    }

                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!Q(a, o)) {
                                    var d = e(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = P(a)
                    }
                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function(b) {
                        n(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h)
                        }
                    })
                }
            }
        }]
    }

    function pd(a) {
        function b(a, b, i) {
            t(b) ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(bg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(bg, !1), h.$valid = qd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), h.$$parentForm.$setValidity(a, j, h)
        }

        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c)
        }

        function e(a, b, d) {
            h[a] && l(h[a], b, d), qd(h[a]) && (h[a] = c)
        }

        function f(a, b) {
            b && !j[a] ? (m.addClass(i, a), j[a] = !0) : !b && j[a] && (m.removeClass(i, a), j[a] = !1)
        }

        function g(a, b) {
            a = a ? "-" + ja(a, "-") : "", f(Xf + a, b === !0), f(Yf + a, b === !1)
        }
        var h = a.ctrl,
            i = a.$element,
            j = {},
            k = a.set,
            l = a.unset,
            m = a.$animate;
        j[Yf] = !(j[Xf] = i.hasClass(Xf)), h.$setValidity = b
    }

    function qd(a) {
        if (a)
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
        return !0
    }
    var rd = /^\/(.+)\/([a-z]*)$/,
        sd = "validity",
        td = function(a) {
            return x(a) ? a.toLowerCase() : a
        },
        ud = Object.prototype.hasOwnProperty,
        vd = function(a) {
            return x(a) ? a.toUpperCase() : a
        },
        wd = function(a) {
            return x(a) ? a.replace(/[A-Z]/g, function(a) {
                return String.fromCharCode(32 | a.charCodeAt(0))
            }) : a
        },
        xd = function(a) {
            return x(a) ? a.replace(/[a-z]/g, function(a) {
                return String.fromCharCode(-33 & a.charCodeAt(0))
            }) : a
        };
    "i" !== "I".toLowerCase() && (td = wd, vd = xd);
    var yd, zd, Ad, Bd, Cd = [].slice,
        Dd = [].splice,
        Ed = [].push,
        Fd = Object.prototype.toString,
        Gd = Object.getPrototypeOf,
        Hd = d("ng"),
        Id = a.angular || (a.angular = {}),
        Jd = 0;
    yd = b.documentMode, p.$inject = [], q.$inject = [];
    var Kd, Ld = Array.isArray,
        Md = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
        Nd = function(a) {
            return x(a) ? a.trim() : a
        },
        Od = function(a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Pd = function() {
            function a() {
                try {
                    return new Function(""), !1
                } catch (a) {
                    return !0
                }
            }
            if (!u(Pd.rules)) {
                var c = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
                if (c) {
                    var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
                    Pd.rules = {
                        noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
                        noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
                    }
                } else Pd.rules = {
                    noUnsafeEval: a(),
                    noInlineStyle: !1
                }
            }
            return Pd.rules
        },
        Qd = function() {
            if (u(Qd.name_)) return Qd.name_;
            var a, c, d, e, f = Rd.length;
            for (c = 0; f > c; ++c)
                if (d = Rd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
                    e = a.getAttribute(d + "jq");
                    break
                }
            return Qd.name_ = e
        },
        Rd = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Sd = /[A-Z]/g,
        Td = !1,
        Ud = 1,
        Vd = 2,
        Wd = 3,
        Xd = 8,
        Yd = 9,
        Zd = 11,
        $d = {
            full: "1.4.7",
            major: 1,
            minor: 4,
            dot: 7,
            codeName: "dark-luminescence"
        };
    Ca.expando = "ng339";
    var _d = Ca.cache = {},
        ae = 1,
        be = function(a, b, c) {
            a.addEventListener(b, c, !1)
        },
        ce = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        };
    Ca._data = function(a) {
        return this.cache[a[this.expando]] || {}
    };
    var de = /([\:\-\_]+(.))/g,
        ee = /^moz([A-Z])/,
        fe = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        ge = d("jqLite"),
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ie = /<|&#?\w+;/,
        je = /<([\w:-]+)/,
        ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        le = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
    var me = Ca.prototype = {
            ready: function(c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Ca(a).on("load", d))
            },
            toString: function() {
                var a = [];
                return f(this, function(b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return zd(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: Ed,
            sort: [].sort,
            splice: [].splice
        },
        ne = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        ne[td(a)] = a
    });
    var oe = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        oe[a] = !0
    });
    var pe = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: Ia,
        removeData: Ga,
        hasData: za
    }, function(a, b) {
        Ca[b] = a
    }), f({
        data: Ia,
        inheritedData: Oa,
        scope: function(a) {
            return zd.data(a, "$scope") || Oa(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return zd.data(a, "$isolateScope") || zd.data(a, "$isolateScopeNoTemplate")
        },
        controller: Na,
        injector: function(a) {
            return Oa(a, "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: Ja,
        css: function(a, b, c) {
            return b = wa(b), u(c) ? void(a.style[b] = c) : a.style[b]
        },
        attr: function(a, b, d) {
            var e = a.nodeType;
            if (e !== Wd && e !== Vd && e !== Xd) {
                var f = td(b);
                if (ne[f]) {
                    if (!u(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
                    d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
                } else if (u(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var g = a.getAttribute(b, 2);
                    return null === g ? c : g
                }
            }
        },
        prop: function(a, b, c) {
            return u(c) ? void(a[b] = c) : a[b]
        },
        text: function() {
            function a(a, b) {
                if (t(b)) {
                    var c = a.nodeType;
                    return c === Ud || c === Wd ? a.textContent : ""
                }
                a.textContent = b
            }
            return a.$dv = "", a
        }(),
        val: function(a, b) {
            if (t(b)) {
                if (a.multiple && "select" === M(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            return t(b) ? a.innerHTML : (Ea(a, !0), void(a.innerHTML = b))
        },
        empty: Pa
    }, function(a, b) {
        Ca.prototype[b] = function(b, c) {
            var d, e, f = this.length;
            if (a !== Pa && t(2 == a.length && a !== Ja && a !== Na ? b : c)) {
                if (v(b)) {
                    for (d = 0; f > d; d++)
                        if (a === Ia) a(this[d], b);
                        else
                            for (e in b) a(this[d], e, b[e]);
                    return this
                }
                for (var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0; h > i; i++) {
                    var j = a(this[i], b, c);
                    g = g ? g + j : j
                }
                return g
            }
            for (d = 0; f > d; d++) a(this[d], b, c);
            return this
        }
    }), f({
        removeData: Ga,
        on: function Gg(a, b, c, d) {
            if (u(d)) throw ge("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ya(a)) {
                var e = Ha(a, !0),
                    f = e.events,
                    g = e.handle;
                g || (g = e.handle = Ua(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Gg(a, fe[b], function(a) {
                        var c = this,
                            d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b)
                    }) : "$destroy" !== b && be(a, b, g), j = f[b]), j.push(c)
                }
            }
        },
        off: Fa,
        one: function(a, b, c) {
            a = zd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            Ea(a), f(new Ca(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === Ud && b.push(a)
            }), b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === Ud || c === Zd) {
                b = new Ca(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === Ud) {
                var c = a.firstChild;
                f(new Ca(b), function(b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function(a, b) {
            b = zd(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: Qa,
        detach: function(a) {
            Qa(a, !0)
        },
        after: function(a, b) {
            var c = a,
                d = a.parentNode;
            b = new Ca(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        },
        addClass: La,
        removeClass: Ka,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                t(d) && (d = !Ja(a, b)), (d ? La : Ka)(a, b)
            })
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== Zd ? b : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: Da,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b,
                i = Ha(a),
                j = i && i.events,
                k = j && j[h];
            k && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = P(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }
    }, function(a, b) {
        Ca.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) t(e) ? (e = a(this[f], b, c, d), u(e) && (e = zd(e))) : Ma(e, a(this[f], b, c, d));
            return u(e) ? e : this
        }, Ca.prototype.bind = Ca.prototype.on, Ca.prototype.unbind = Ca.prototype.off
    }), Xa.prototype = {
        put: function(a, b) {
            this[Wa(a, this.nextUid)] = b
        },
        get: function(a) {
            return this[Wa(a, this.nextUid)]
        },
        remove: function(a) {
            var b = this[a = Wa(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var qe = [function() {
            this.$get = [function() {
                return Xa
            }]
        }],
        re = /^[^\(]*\(\s*([^\)]*)\)/m,
        se = /,/,
        te = /^\s*(_?)(\S+?)\1\s*$/,
        ue = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        ve = d("$injector");
    $a.$$annotate = Za;
    var we = d("$animate"),
        xe = 1,
        ye = "ng-animate",
        ze = function() {
            this.$get = ["$q", "$$rAF", function(a, b) {
                function c() {}
                return c.all = p, c.chain = p, c.prototype = {
                    end: p,
                    cancel: p,
                    resume: p,
                    pause: p,
                    complete: p,
                    then: function(c, d) {
                        return a(function(a) {
                            b(function() {
                                a()
                            })
                        }).then(c, d)
                    }
                }, c
            }]
        },
        Ae = function() {
            var a = new Xa,
                b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(c, d) {
                function e(a, b, c) {
                    var d = !1;
                    return b && (b = x(b) ? b.split(" ") : Ld(b) ? b : [], f(b, function(b) {
                        b && (d = !0, a[b] = c)
                    })), d
                }

                function g() {
                    f(b, function(b) {
                        var c = a.get(b);
                        if (c) {
                            var d = cb(b.attr("class")),
                                e = "",
                                g = "";
                            f(c, function(a, b) {
                                var c = !!d[b];
                                a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                            }), f(b, function(a) {
                                e && La(a, e), g && Ka(a, g)
                            }), a.remove(b)
                        }
                    }), b.length = 0
                }

                function h(c, f, h) {
                    var i = a.get(c) || {},
                        j = e(i, f, !0),
                        k = e(i, h, !1);
                    (j || k) && (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g))
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function(a, b, d, e) {
                        return e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass), new c
                    }
                }
            }]
        },
        Be = ["$provide", function(a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
                if (c && "." !== c.charAt(0)) throw we("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
                var e = c + "-animation";
                b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
            }, this.classNameFilter = function(a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
                    var b = new RegExp("(\\s+|\\/)" + ye + "(\\s+|\\/)");
                    if (b.test(this.$$classNameFilter.toString())) throw we("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ye)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function(a) {
                function b(a, b, c) {
                    if (c) {
                        var d = bb(c);
                        !d || d.parentNode || d.previousElementSibling || (c = null)
                    }
                    c ? c.after(a) : b.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function(a) {
                        a.end && a.end()
                    },
                    enter: function(c, d, e, f) {
                        return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", db(f))
                    },
                    move: function(c, d, e, f) {
                        return d = d && zd(d), e = e && zd(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", db(f))
                    },
                    leave: function(b, c) {
                        return a.push(b, "leave", db(c), function() {
                            b.remove()
                        })
                    },
                    addClass: function(b, c, d) {
                        return d = db(d), d.addClass = ab(d.addclass, c), a.push(b, "addClass", d)
                    },
                    removeClass: function(b, c, d) {
                        return d = db(d), d.removeClass = ab(d.removeClass, c), a.push(b, "removeClass", d)
                    },
                    setClass: function(b, c, d, e) {
                        return e = db(e), e.addClass = ab(e.addClass, c), e.removeClass = ab(e.removeClass, d), a.push(b, "setClass", e)
                    },
                    animate: function(b, c, d, e, f) {
                        return f = db(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = ab(f.tempClasses, e), a.push(b, "animate", f)
                    }
                }
            }]
        }],
        Ce = function() {
            this.$get = ["$$rAF", "$q", function(a, b) {
                var c = function() {};
                return c.prototype = {
                        done: function(a) {
                            this.defer && this.defer[a === !0 ? "reject" : "resolve"]()
                        },
                        end: function() {
                            this.done()
                        },
                        cancel: function() {
                            this.done(!0)
                        },
                        getPromise: function() {
                            return this.defer || (this.defer = b.defer()), this.defer.promise
                        },
                        then: function(a, b) {
                            return this.getPromise().then(a, b)
                        },
                        "catch": function(a) {
                            return this.getPromise()["catch"](a)
                        },
                        "finally": function(a) {
                            return this.getPromise()["finally"](a)
                        }
                    },
                    function(b, d) {
                        function e() {
                            return a(function() {
                                f(), g || h.done(), g = !0
                            }), h
                        }

                        function f() {
                            d.addClass && (b.addClass(d.addClass),
                                d.addClass = null), d.removeClass && (b.removeClass(d.removeClass), d.removeClass = null), d.to && (b.css(d.to), d.to = null)
                        }
                        d.cleanupStyles && (d.from = d.to = null), d.from && (b.css(d.from), d.from = null);
                        var g, h = new c;
                        return {
                            start: e,
                            end: e
                        }
                    }
            }]
        },
        De = d("$compile");
    ib.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ee = /^((?:x|data)[\:\-_])/i,
        Fe = d("$controller"),
        Ge = /^(\S+)(\s+as\s+(\w+))?$/,
        He = function() {
            this.$get = ["$document", function(a) {
                return function(b) {
                    return b ? !b.nodeType && b instanceof zd && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
                }
            }]
        },
        Ie = "application/json",
        Je = {
            "Content-Type": Ie + ";charset=utf-8"
        },
        Ke = /^\[|^\{(?!\{)/,
        Le = {
            "[": /]$/,
            "{": /}$/
        },
        Me = /^\)\]\}',?\n/,
        Ne = d("$http"),
        Oe = function(a) {
            return function() {
                throw Ne("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a)
            }
        },
        Pe = Id.$interpolateMinErr = d("$interpolate");
    Pe.throwNoconcat = function(a) {
        throw Pe("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
    }, Pe.interr = function(a, b) {
        return Pe("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
    };
    var Qe = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Re = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Se = d("$location"),
        Te = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Qb("$$absUrl"),
            url: function(a) {
                if (t(a)) return this.$$url;
                var b = Qe.exec(a);
                return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
            },
            protocol: Qb("$$protocol"),
            host: Qb("$$host"),
            port: Qb("$$port"),
            path: Rb("$$path", function(a) {
                return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (x(a) || y(a)) a = a.toString(), this.$$search = aa(a);
                        else {
                            if (!v(a)) throw Se("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            a = O(a, {}), f(a, function(b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        t(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            },
            hash: Rb("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    f([Pb, Ob, Nb], function(a) {
        a.prototype = Object.create(Te), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== Nb || !this.$$html5) throw Se("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = t(b) ? null : b, this
        }
    });
    var Ue = d("$parse"),
        Ve = Function.prototype.call,
        We = Function.prototype.apply,
        Xe = Function.prototype.bind,
        Ye = qa();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        Ye[a] = !0
    });
    var Ze = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "\x0B",
            "'": "'",
            '"': '"'
        },
        $e = function(a) {
            this.options = a
        };
    $e.prototype = {
        constructor: $e,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b);
                else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(b)) this.readIdent();
                else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++;
                else if (this.isWhitespace(b)) this.index++;
                else {
                    var c = b + this.peek(),
                        d = c + this.peek(2),
                        e = Ye[b],
                        f = Ye[c],
                        g = Ye[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({
                            index: this.index,
                            text: h,
                            operator: !0
                        }), this.index += h.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "\x0B" === a || " " === a
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw Ue("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = td(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = Ze[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var _e = function(a, b) {
        this.lexer = a, this.options = b
    };
    _e.Program = "Program", _e.ExpressionStatement = "ExpressionStatement", _e.AssignmentExpression = "AssignmentExpression", _e.ConditionalExpression = "ConditionalExpression", _e.LogicalExpression = "LogicalExpression", _e.BinaryExpression = "BinaryExpression", _e.UnaryExpression = "UnaryExpression", _e.CallExpression = "CallExpression", _e.MemberExpression = "MemberExpression", _e.Identifier = "Identifier", _e.Literal = "Literal", _e.ArrayExpression = "ArrayExpression", _e.Property = "Property", _e.ObjectExpression = "ObjectExpression", _e.ThisExpression = "ThisExpression", _e.NGValueParameter = "NGValueParameter", _e.prototype = {
        ast: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
        },
        program: function() {
            for (var a = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: _e.Program,
                    body: a
                }
        },
        expressionStatement: function() {
            return {
                type: _e.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
            return b
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: _e.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
                type: _e.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: _e.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&");) a = {
                type: _e.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
                type: _e.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
                type: _e.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
                type: _e.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
                type: _e.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: _e.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: _e.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: _e.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: _e.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function(a) {
            for (var b = [a], c = {
                    type: _e.CallExpression,
                    callee: this.identifier(),
                    arguments: b,
                    filter: !0
                }; this.expect(":");) b.push(this.expression());
            return c
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text)
                do a.push(this.expression()); while (this.expect(","));
            return a
        },
        identifier: function() {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: _e.Identifier,
                name: a.text
            }
        },
        constant: function() {
            return {
                type: _e.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: _e.ArrayExpression,
                elements: a
            }
        },
        object: function() {
            var a, b = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    a = {
                        type: _e.Property,
                        kind: "init"
                    }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
                } while (this.expect(","));
            return this.consume("}"), {
                type: _e.ObjectExpression,
                properties: b
            }
        },
        throwError: function(a, b) {
            throw Ue("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw Ue("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Ue("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a],
                    g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
            }
            return !1
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1
        },
        constants: {
            "true": {
                type: _e.Literal,
                value: !0
            },
            "false": {
                type: _e.Literal,
                value: !1
            },
            "null": {
                type: _e.Literal,
                value: null
            },
            undefined: {
                type: _e.Literal,
                value: c
            },
            "this": {
                type: _e.ThisExpression
            }
        }
    }, gc.prototype = {
        compile: function(a, b) {
            var d = this,
                e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, ac(e, d.$filter);
            var g, h = "";
            if (this.stage = "assign", g = dc(e)) {
                this.state.computing = "assign";
                var i = this.nextId();
                this.recurse(g, i), this.return_(i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var j = bc(e.body);
            d.stage = "inputs", f(j, function(a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                }, d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
            var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;",
                l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", k)(this.$filter, Ub, Wb, Xb, Vb, Yb, Zb, $b, a);
            return this.state = this.stage = c, l.literal = ec(e), l.constant = fc(e), l
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [],
                b = this.state.inputs,
                c = this;
            return f(b, function(b) {
                a.push("var " + b + "=" + c.generateFunction(b, "s"))
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function() {
            var a = [],
                b = this;
            return f(this.state.filters, function(c, d) {
                a.push(c + "=$filter(" + b.escape(d) + ")")
            }), a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function(a) {
            return this.state[a].body.join("")
        },
        recurse: function(a, b, d, e, g, h) {
            var i, j, k, l, m = this;
            if (e = e || p, !h && u(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
            switch (a.type) {
                case _e.Program:
                    f(a.body, function(b, d) {
                        m.recurse(b.expression, c, c, function(a) {
                            j = a
                        }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
                    });
                    break;
                case _e.Literal:
                    l = this.escape(a.value), this.assign(b, l), e(l);
                    break;
                case _e.UnaryExpression:
                    this.recurse(a.argument, c, c, function(a) {
                        j = a
                    }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
                    break;
                case _e.BinaryExpression:
                    this.recurse(a.left, c, c, function(a) {
                        i = a
                    }), this.recurse(a.right, c, c, function(a) {
                        j = a
                    }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
                    break;
                case _e.LogicalExpression:
                    b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
                    break;
                case _e.ConditionalExpression:
                    b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
                    break;
                case _e.Identifier:
                    b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Ub(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
                        m.if_("inputs" === m.stage || "s", function() {
                            g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
                        })
                    }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || ic(a.name)) && m.addEnsureSafeObject(b), e(b);
                    break;
                case _e.MemberExpression:
                    i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
                        m.if_(m.notNull(i), function() {
                            a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.getStringValue(j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Ub(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || ic(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name))
                        }, function() {
                            m.assign(b, "undefined")
                        }), e(b)
                    }, !!g);
                    break;
                case _e.CallExpression:
                    b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function(a) {
                        var b = m.nextId();
                        m.recurse(a, b), k.push(b)
                    }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function() {
                        m.if_(m.notNull(j), function() {
                            m.addEnsureSafeFunction(j), f(a.arguments, function(a) {
                                m.recurse(a, m.nextId(), c, function(a) {
                                    k.push(m.ensureSafeObject(a))
                                })
                            }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l)
                        }, function() {
                            m.assign(b, "undefined")
                        }), e(b)
                    }));
                    break;
                case _e.AssignmentExpression:
                    if (j = this.nextId(), i = {}, !cc(a.left)) throw Ue("lval", "Trying to assing a value to a non l-value");
                    this.recurse(a.left, c, i, function() {
                        m.if_(m.notNull(i.context), function() {
                            m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
                        })
                    }, 1);
                    break;
                case _e.ArrayExpression:
                    k = [], f(a.elements, function(a) {
                        m.recurse(a, m.nextId(), c, function(a) {
                            k.push(a)
                        })
                    }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
                    break;
                case _e.ObjectExpression:
                    k = [], f(a.properties, function(a) {
                        m.recurse(a.value, m.nextId(), c, function(b) {
                            k.push(m.escape(a.key.type === _e.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
                    break;
                case _e.ThisExpression:
                    this.assign(b, "s"), e("s");
                    break;
                case _e.NGValueParameter:
                    this.assign(b, "v"), e("v")
            }
        },
        getHasOwnProperty: function(a, b) {
            var c = a + "." + b,
                d = this.current().own;
            return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
        },
        assign: function(a, b) {
            return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
        },
        filter: function(a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";")
        },
        if_: function(a, b, c) {
            if (a === !0) b();
            else {
                var d = this.current().body;
                d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
            }
        },
        not: function(a) {
            return "!(" + a + ")"
        },
        notNull: function(a) {
            return a + "!=null"
        },
        nonComputedMember: function(a, b) {
            return a + "." + b
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]"
        },
        member: function(a, b, c) {
            return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        addEnsureSafeAssignContext: function(a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)"
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ",text)")
        },
        ensureSafeAssignContext: function(a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        },
        lazyRecurse: function(a, b, c, d, e, f) {
            var g = this;
            return function() {
                g.recurse(a, b, c, d, e, f)
            }
        },
        lazyAssign: function(a, b) {
            var c = this;
            return function() {
                c.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(a) {
            if (x(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (y(a)) return a.toString();
            if (a === !0) return "true";
            if (a === !1) return "false";
            if (null === a) return "null";
            if ("undefined" == typeof a) return "undefined";
            throw Ue("esc", "IMPOSSIBLE")
        },
        nextId: function(a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, hc.prototype = {
        compile: function(a, b) {
            var c = this,
                d = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, ac(d, c.$filter);
            var e, g;
            (e = dc(d)) && (g = this.recurse(e));
            var h, i = bc(d.body);
            i && (h = [], f(i, function(a, b) {
                var d = c.recurse(a);
                a.input = d, h.push(d), a.watchId = b
            }));
            var j = [];
            f(d.body, function(a) {
                j.push(c.recurse(a.expression))
            });
            var k = 0 === d.body.length ? function() {} : 1 === d.body.length ? j[0] : function(a, b) {
                var c;
                return f(j, function(d) {
                    c = d(a, b)
                }), c
            };
            return g && (k.assign = function(a, b, c) {
                return g(a, c, b)
            }), h && (k.inputs = h), k.literal = ec(d), k.constant = fc(d), k
        },
        recurse: function(a, b, d) {
            var e, g, h, i = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case _e.Literal:
                    return this.value(a.value, b);
                case _e.UnaryExpression:
                    return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
                case _e.BinaryExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case _e.LogicalExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case _e.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case _e.Identifier:
                    return Ub(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || ic(a.name), b, d, i.expression);
                case _e.MemberExpression:
                    return e = this.recurse(a.object, !1, !!d), a.computed || (Ub(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
                case _e.CallExpression:
                    return h = [], f(a.arguments, function(a) {
                        h.push(i.recurse(a))
                    }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function(a, d, e, f) {
                        for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                        var k = g.apply(c, i, f);
                        return b ? {
                            context: c,
                            name: c,
                            value: k
                        } : k
                    } : function(a, c, d, e) {
                        var f, j = g(a, c, d, e);
                        if (null != j.value) {
                            Wb(j.context, i.expression), Xb(j.value, i.expression);
                            for (var k = [], l = 0; l < h.length; ++l) k.push(Wb(h[l](a, c, d, e), i.expression));
                            f = Wb(j.value.apply(j.context, k), i.expression)
                        }
                        return b ? {
                            value: f
                        } : f
                    };
                case _e.AssignmentExpression:
                    return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right),
                        function(a, c, d, f) {
                            var h = e(a, c, d, f),
                                j = g(a, c, d, f);
                            return Wb(h.value, i.expression), Yb(h.context), h.context[h.name] = j, b ? {
                                value: j
                            } : j
                        };
                case _e.ArrayExpression:
                    return h = [], f(a.elements, function(a) {
                            h.push(i.recurse(a))
                        }),
                        function(a, c, d, e) {
                            for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        };
                case _e.ObjectExpression:
                    return h = [], f(a.properties, function(a) {
                            h.push({
                                key: a.key.type === _e.Identifier ? a.key.name : "" + a.key.value,
                                value: i.recurse(a.value)
                            })
                        }),
                        function(a, c, d, e) {
                            for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        };
                case _e.ThisExpression:
                    return function(a) {
                        return b ? {
                            value: a
                        } : a
                    };
                case _e.NGValueParameter:
                    return function(a, c, d, e) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function(a, b) {
            return function(c, d, e, f) {
                var g = a(c, d, e, f);
                return g = u(g) ? +g : 0, b ? {
                    value: g
                } : g
            }
        },
        "unary-": function(a, b) {
            return function(c, d, e, f) {
                var g = a(c, d, e, f);
                return g = u(g) ? -g : 0, b ? {
                    value: g
                } : g
            }
        },
        "unary!": function(a, b) {
            return function(c, d, e, f) {
                var g = !a(c, d, e, f);
                return b ? {
                    value: g
                } : g
            }
        },
        "binary+": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g),
                    i = b(d, e, f, g),
                    j = $b(h, i);
                return c ? {
                    value: j
                } : j
            }
        },
        "binary-": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g),
                    i = b(d, e, f, g),
                    j = (u(h) ? h : 0) - (u(i) ? i : 0);
                return c ? {
                    value: j
                } : j
            }
        },
        "binary*": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) * b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary/": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) / b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary%": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) % b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary===": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) === b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary!==": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) !== b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary==": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) == b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary!=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) != b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary<": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) < b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary>": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) > b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary<=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) <= b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary>=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) >= b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary&&": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) && b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary||": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) || b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "ternary?:": function(a, b, c, d) {
            return function(e, f, g, h) {
                var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
                return d ? {
                    value: i
                } : i
            }
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: c,
                    name: c,
                    value: a
                } : a
            }
        },
        identifier: function(a, b, d, e, f) {
            return function(g, h, i, j) {
                var k = h && a in h ? h : g;
                e && 1 !== e && k && !k[a] && (k[a] = {});
                var l = k ? k[a] : c;
                return b && Wb(l, f), d ? {
                    context: k,
                    name: a,
                    value: l
                } : l
            }
        },
        computedMember: function(a, b, c, d, e) {
            return function(f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), j = Vb(j), Ub(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Wb(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k
            }
        },
        nonComputedMember: function(a, b, d, e, f, g) {
            return function(h, i, j, k) {
                var l = a(h, i, j, k);
                f && 1 !== f && l && !l[b] && (l[b] = {});
                var m = null != l ? l[b] : c;
                return (d || ic(b)) && Wb(m, g), e ? {
                    context: l,
                    name: b,
                    value: m
                } : m
            }
        },
        inputs: function(a, b) {
            return function(c, d, e, f) {
                return f ? f[b] : a(c, d, e)
            }
        }
    };
    var af = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new _e(this.lexer), this.astCompiler = c.csp ? new hc(this.ast, b) : new gc(this.ast, b)
    };
    af.prototype = {
        constructor: af,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var bf = (qa(), qa(), Object.prototype.valueOf),
        cf = d("$sce"),
        df = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        De = d("$compile"),
        ef = b.createElement("a"),
        ff = zc(a.location.href);
    Cc.$inject = ["$document"], Ec.$inject = ["$provide"], Jc.$inject = ["$locale"], Kc.$inject = ["$locale"];
    var gf = ".",
        hf = {
            yyyy: Nc("FullYear", 4),
            yy: Nc("FullYear", 2, 0, !0),
            y: Nc("FullYear", 1),
            MMMM: Oc("Month"),
            MMM: Oc("Month", !0),
            MM: Nc("Month", 2, 1),
            M: Nc("Month", 1, 1),
            dd: Nc("Date", 2),
            d: Nc("Date", 1),
            HH: Nc("Hours", 2),
            H: Nc("Hours", 1),
            hh: Nc("Hours", 2, -12),
            h: Nc("Hours", 1, -12),
            mm: Nc("Minutes", 2),
            m: Nc("Minutes", 1),
            ss: Nc("Seconds", 2),
            s: Nc("Seconds", 1),
            sss: Nc("Milliseconds", 3),
            EEEE: Oc("Day"),
            EEE: Oc("Day", !0),
            a: Tc,
            Z: Pc,
            ww: Sc(2),
            w: Sc(1),
            G: Uc,
            GG: Uc,
            GGG: Uc,
            GGGG: Vc
        },
        jf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        kf = /^\-?\d+$/;
    Wc.$inject = ["$locale"];
    var lf = r(td),
        mf = r(vd);
    Zc.$inject = ["$parse"];
    var nf = r({
            restrict: "E",
            compile: function(a, b) {
                return b.href || b.xlinkHref ? void 0 : function(a, b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var c = "[object SVGAnimatedString]" === Fd.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) {
                            b.attr(c) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        of = {};
    f(ne, function(a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function(a) {
                e.$set(b, !!a)
            })
        }
        if ("multiple" != a) {
            var d = jb("ng-" + b),
                e = c;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[d] && c(a, b, e)
            }), of[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    }), f(pe, function(a, b) {
        of[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(rd);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), f(["src", "srcset", "href"], function(a) {
        var b = jb("ng-" + a);
        of[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === Fd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void(yd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                    })
                }
            }
        }
    });
    var pf = {
            $addControl: p,
            $$renameControl: _c,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        },
        qf = "ng-submitted";
    ad.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var rf = function(a) {
            return ["$timeout", "$parse", function(b, d) {
                function e(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || p
                }
                var f = {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: ad,
                    compile: function(d, f) {
                        d.addClass(Zf).addClass(Xf);
                        var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(a, d, f, h) {
                                var i = h[0];
                                if (!("action" in f)) {
                                    var j = function(b) {
                                        a.$apply(function() {
                                            i.$commitViewValue(), i.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    be(d[0], "submit", j), d.on("$destroy", function() {
                                        b(function() {
                                            ce(d[0], "submit", j)
                                        }, 0, !1)
                                    })
                                }
                                var k = h[1] || i.$$parentForm;
                                k.$addControl(i);
                                var m = g ? e(i.$name) : p;
                                g && (m(a, i), f.$observe(g, function(b) {
                                    i.$name !== b && (m(a, c), i.$$parentForm.$$renameControl(i, b), (m = e(i.$name))(a, i))
                                })), d.on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i), m(a, c), l(i, pf)
                                })
                            }
                        }
                    }
                };
                return f
            }]
        },
        sf = rf(),
        tf = rf(!0),
        uf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        vf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        wf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        xf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        yf = /^(\d{4})-(\d{2})-(\d{2})$/,
        zf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Af = /^(\d{4})-W(\d\d)$/,
        Bf = /^(\d{4})-(\d\d)$/,
        Cf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Df = {
            text: cd,
            date: gd("date", yf, fd(yf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": gd("datetimelocal", zf, fd(zf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: gd("time", Cf, fd(Cf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: gd("week", Af, ed, "yyyy-Www"),
            month: gd("month", Bf, fd(Bf, ["yyyy", "MM"]), "yyyy-MM"),
            number: id,
            url: jd,
            email: kd,
            radio: ld,
            checkbox: nd,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        Ef = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(e, f, g, h) {
                        h[0] && (Df[td(g.type)] || Df.text)(e, f, g, h[0], b, a, c, d)
                    }
                }
            }
        }],
        Ff = /^(true|false|\d+)$/,
        Gf = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, b) {
                    return Ff.test(b.ngValue) ? function(a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function(a, b, c) {
                        a.$watch(c.ngValue, function(a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        },
        Hf = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(b) {
                    return a.$$addBindingClass(b),
                        function(b, c, d) {
                            a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function(a) {
                                c.textContent = t(a) ? "" : a
                            })
                        }
                }
            }
        }],
        If = ["$interpolate", "$compile", function(a, b) {
            return {
                compile: function(c) {
                    return b.$$addBindingClass(c),
                        function(c, d, e) {
                            var f = a(d.attr(e.$attr.ngBindTemplate));
                            b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function(a) {
                                d.textContent = t(a) ? "" : a
                            })
                        }
                }
            }
        }],
        Jf = ["$sce", "$parse", "$compile", function(a, b, c) {
            return {
                restrict: "A",
                compile: function(d, e) {
                    var f = b(e.ngBindHtml),
                        g = b(e.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    return c.$$addBindingClass(d),
                        function(b, d, e) {
                            c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                                d.html(a.getTrustedHtml(f(b)) || "")
                            })
                        }
                }
            }
        }],
        Kf = r({
            restrict: "A",
            require: "ngModel",
            link: function(a, b, c, d) {
                d.$viewChangeListeners.push(function() {
                    a.$eval(c.ngChange)
                })
            }
        }),
        Lf = od("", !0),
        Mf = od("Odd", 0),
        Nf = od("Even", 1),
        Of = $c({
            compile: function(a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        Pf = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Qf = {},
        Rf = {
            blur: !0,
            focus: !0
        };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = jb("ng-" + a);
        Qf[b] = ["$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b], null, !0);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                })
                            };
                            Rf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Sf = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function(c) {
                        c ? i || g(function(c, f) {
                            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                clone: c
                            }, a.enter(c, d.parent(), d)
                        }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = pa(h.clone), a.leave(j).then(function() {
                            j = null
                        }), h = null))
                    })
                }
            }
        }],
        Tf = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Id.noop,
                compile: function(d, e) {
                    var f = e.ngInclude || e.src,
                        g = e.onload || "",
                        h = e.autoscroll;
                    return function(d, e, i, j, k) {
                        var l, m, n, o = 0,
                            p = function() {
                                m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                                    m = null
                                }), m = n, n = null)
                            };
                        d.$watch(f, function(f) {
                            var i = function() {
                                    !u(h) || h && !d.$eval(h) || b()
                                },
                                m = ++o;
                            f ? (a(f, !0).then(function(a) {
                                if (m === o) {
                                    var b = d.$new();
                                    j.template = a;
                                    var h = k(b, function(a) {
                                        p(), c.enter(a, null, e).then(i)
                                    });
                                    l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
                                }
                            }, function() {
                                m === o && (p(), d.$emit("$includeContentError", f))
                            }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
                        })
                    }
                }
            }
        }],
        Uf = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    return /SVG/.test(d[0].toString()) ? (d.empty(), void a(Aa(f.template, b).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), void a(d.contents())(c))
                }
            }
        }],
        Vf = $c({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        Wf = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, b, d, e) {
                    var g = b.attr(d.$attr.ngList) || ", ",
                        h = "false" !== d.ngTrim,
                        i = h ? Nd(g) : g,
                        j = function(a) {
                            if (!t(a)) {
                                var b = [];
                                return a && f(a.split(i), function(a) {
                                    a && b.push(h ? Nd(a) : a)
                                }), b
                            }
                        };
                    e.$parsers.push(j), e.$formatters.push(function(a) {
                        return Ld(a) ? a.join(g) : c
                    }), e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        Xf = "ng-valid",
        Yf = "ng-invalid",
        Zf = "ng-pristine",
        $f = "ng-dirty",
        _f = "ng-untouched",
        ag = "ng-touched",
        bg = "ng-pending",
        cg = d("ngModel"),
        dg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = pf;
            var m, n = g(d.ngModel),
                o = n.assign,
                q = n,
                r = o,
                s = null,
                v = this;
            this.$$setOptions = function(a) {
                if (v.$options = a, a && a.getterSetter) {
                    var b = g(d.ngModel + "()"),
                        c = g(d.ngModel + "($$$p)");
                    q = function(a) {
                        var c = n(a);
                        return A(c) && (c = b(a)), c
                    }, r = function(a, b) {
                        A(n(a)) ? c(a, {
                            $$$p: v.$modelValue
                        }) : o(a, v.$modelValue)
                    }
                } else if (!n.assign) throw cg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e))
            }, this.$render = p, this.$isEmpty = function(a) {
                return t(a) || "" === a || null === a || a !== a
            };
            var w = 0;
            pd({
                ctrl: this,
                $element: e,
                set: function(a, b) {
                    a[b] = !0
                },
                unset: function(a, b) {
                    delete a[b]
                },
                $animate: h
            }), this.$setPristine = function() {
                v.$dirty = !1, v.$pristine = !0, h.removeClass(e, $f), h.addClass(e, Zf)
            }, this.$setDirty = function() {
                v.$dirty = !0, v.$pristine = !1, h.removeClass(e, Zf), h.addClass(e, $f), v.$$parentForm.$setDirty()
            }, this.$setUntouched = function() {
                v.$touched = !1, v.$untouched = !0, h.setClass(e, _f, ag)
            }, this.$setTouched = function() {
                v.$touched = !0, v.$untouched = !1, h.setClass(e, ag, _f)
            }, this.$rollbackViewValue = function() {
                i.cancel(s), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
            }, this.$validate = function() {
                if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
                    var a = v.$$lastCommittedViewValue,
                        b = v.$$rawModelValue,
                        d = v.$valid,
                        e = v.$modelValue,
                        f = v.$options && v.$options.allowInvalid;
                    v.$$runValidators(b, a, function(a) {
                        f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(a, b, d) {
                function e() {
                    var a = v.$$parserName || "parse";
                    return t(m) ? (i(a, null), !0) : (m || (f(v.$validators, function(a, b) {
                        i(b, null)
                    }), f(v.$asyncValidators, function(a, b) {
                        i(b, null)
                    })), i(a, m), m)
                }

                function g() {
                    var c = !0;
                    return f(v.$validators, function(d, e) {
                        var f = d(a, b);
                        c = c && f, i(e, f)
                    }), c ? !0 : (f(v.$asyncValidators, function(a, b) {
                        i(b, null)
                    }), !1)
                }

                function h() {
                    var d = [],
                        e = !0;
                    f(v.$asyncValidators, function(f, g) {
                        var h = f(a, b);
                        if (!I(h)) throw cg("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                        i(g, c), d.push(h.then(function() {
                            i(g, !0)
                        }, function(a) {
                            e = !1, i(g, !1)
                        }))
                    }), d.length ? k.all(d).then(function() {
                        j(e)
                    }, p) : j(!0)
                }

                function i(a, b) {
                    l === w && v.$setValidity(a, b)
                }

                function j(a) {
                    l === w && d(a)
                }
                w++;
                var l = w;
                return e() && g() ? void h() : void j(!1)
            }, this.$commitViewValue = function() {
                var a = v.$viewValue;
                i.cancel(s), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function b() {
                    v.$modelValue !== g && v.$$writeModelToScope()
                }
                var d = v.$$lastCommittedViewValue,
                    e = d;
                if (m = t(e) ? c : !0)
                    for (var f = 0; f < v.$parsers.length; f++)
                        if (e = v.$parsers[f](e), t(e)) {
                            m = !1;
                            break
                        }
                y(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
                var g = v.$modelValue,
                    h = v.$options && v.$options.allowInvalid;
                v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function(a) {
                    h || (v.$modelValue = a ? e : c, b())
                })
            }, this.$$writeModelToScope = function() {
                r(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function(a, b) {
                v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function(b) {
                var c, d = 0,
                    e = v.$options;
                e && u(e.debounce) && (c = e.debounce, y(c) ? d = c : y(c[b]) ? d = c[b] : y(c["default"]) && (d = c["default"])), i.cancel(s), d ? s = i(function() {
                    v.$commitViewValue()
                }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
                    v.$commitViewValue()
                })
            }, a.$watch(function() {
                var b = q(a);
                if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
                    v.$modelValue = v.$$rawModelValue = b, m = c;
                    for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                    v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
                }
                return b
            })
        }],
        eg = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: dg,
                priority: 1,
                compile: function(b) {
                    return b.addClass(Zf).addClass(_f).addClass(Xf), {
                        pre: function(a, b, c, d) {
                            var e = d[0],
                                f = d[1] || e.$$parentForm;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                                e.$name !== a && e.$$parentForm.$$renameControl(e, a)
                            }), a.$on("$destroy", function() {
                                e.$$parentForm.$removeControl(e)
                            })
                        },
                        post: function(b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function(c) {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        fg = /(\s+|^)default(\s+|$)/,
        gg = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, b) {
                    var c = this;
                    this.$options = O(a.$eval(b.ngModelOptions)), u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Nd(this.$options.updateOn.replace(fg, function() {
                        return c.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        hg = $c({
            terminal: !0,
            priority: 1e3
        }),
        ig = d("ngOptions"),
        jg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        kg = ["$compile", "$parse", function(a, c) {
            function d(a, b, d) {
                function f(a, b, c, d, e) {
                    this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
                }

                function g(a) {
                    var b;
                    if (!j && e(a)) b = a;
                    else {
                        b = [];
                        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }
                var h = a.match(jg);
                if (!h) throw ig("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
                var i = h[5] || h[7],
                    j = h[6],
                    k = / as /.test(h[0]) && h[1],
                    l = h[9],
                    m = c(h[2] ? h[1] : i),
                    n = k && c(k),
                    o = n || m,
                    p = l && c(l),
                    q = l ? function(a, b) {
                        return p(d, b)
                    } : function(a) {
                        return Wa(a)
                    },
                    r = function(a, b) {
                        return q(a, x(a, b))
                    },
                    s = c(h[2] || h[1]),
                    t = c(h[3] || ""),
                    u = c(h[4] || ""),
                    v = c(h[8]),
                    w = {},
                    x = j ? function(a, b) {
                        return w[j] = b, w[i] = a, w
                    } : function(a) {
                        return w[i] = a, w
                    };
                return {
                    trackBy: l,
                    getTrackByValue: r,
                    getWatchables: c(v, function(a) {
                        var b = [];
                        a = a || [];
                        for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                            var i = a === c ? f : c[f],
                                j = (a[i], x(a[i], i)),
                                k = q(a[i], j);
                            if (b.push(k), h[2] || h[1]) {
                                var l = s(d, j);
                                b.push(l)
                            }
                            if (h[4]) {
                                var m = u(d, j);
                                b.push(m)
                            }
                        }
                        return b
                    }),
                    getOptions: function() {
                        for (var a = [], b = {}, c = v(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
                            var j = c === e ? i : e[i],
                                k = c[j],
                                m = x(k, j),
                                n = o(d, m),
                                p = q(n, m),
                                w = s(d, m),
                                y = t(d, m),
                                z = u(d, m),
                                A = new f(p, n, w, y, z);
                            a.push(A), b[p] = A
                        }
                        return {
                            items: a,
                            selectValueMap: b,
                            getOptionFromViewValue: function(a) {
                                return b[r(a)]
                            },
                            getViewValueFromOption: function(a) {
                                return l ? Id.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }
            var g = b.createElement("option"),
                h = b.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "?ngModel"],
                link: function(b, c, e, i) {
                    function j(a, b) {
                        a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
                    }

                    function k(a, b, c, d) {
                        var e;
                        return b && td(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), e
                    }

                    function l(a) {
                        for (var b; a;) b = a.nextSibling, Qa(a), a = b
                    }

                    function m(a) {
                        var b = p && p[0],
                            c = w && w[0];
                        if (b || c)
                            for (; a && (a === b || a === c || b && b.nodeType === Xd);) a = a.nextSibling;
                        return a
                    }

                    function n() {
                        var a = x && q.readValue();
                        x = y.getOptions();
                        var b = {},
                            d = c[0].firstChild;
                        if (v && c.prepend(p), d = m(d), x.items.forEach(function(a) {
                                var e, f, i;
                                a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", h), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
                                    groupElement: f,
                                    currentOptionElement: f.firstChild
                                }), i = k(e.groupElement, e.currentOptionElement, "option", g), j(a, i), e.currentOptionElement = i.nextSibling) : (i = k(c[0], d, "option", g), j(a, i), d = i.nextSibling)
                            }), Object.keys(b).forEach(function(a) {
                                l(b[a].currentOptionElement)
                            }), l(d), o.$render(), !o.$isEmpty(a)) {
                            var e = q.readValue();
                            (y.trackBy ? Q(a, e) : a === e) || (o.$setViewValue(e), o.$render())
                        }
                    }
                    var o = i[1];
                    if (o) {
                        for (var p, q = i[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++)
                            if ("" === t[s].value) {
                                p = t.eq(s);
                                break
                            }
                        var v = !!p,
                            w = zd(g.cloneNode(!1));
                        w.val("?");
                        var x, y = d(e.ngOptions, c, b),
                            z = function() {
                                v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)
                            },
                            A = function() {
                                v || p.remove()
                            },
                            B = function() {
                                c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
                            },
                            C = function() {
                                w.remove()
                            };
                        r ? (o.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        }, q.writeValue = function(a) {
                            x.items.forEach(function(a) {
                                a.element.selected = !1
                            }), a && a.forEach(function(a) {
                                var b = x.getOptionFromViewValue(a);
                                b && !b.disabled && (b.element.selected = !0)
                            })
                        }, q.readValue = function() {
                            var a = c.val() || [],
                                b = [];
                            return f(a, function(a) {
                                var c = x.selectValueMap[a];
                                c && !c.disabled && b.push(x.getViewValueFromOption(c))
                            }), b
                        }, y.trackBy && b.$watchCollection(function() {
                            return Ld(o.$viewValue) ? o.$viewValue.map(function(a) {
                                return y.getTrackByValue(a)
                            }) : void 0
                        }, function() {
                            o.$render()
                        })) : (q.writeValue = function(a) {
                            var b = x.getOptionFromViewValue(a);
                            b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), z()) : (A(), B())
                        }, q.readValue = function() {
                            var a = x.selectValueMap[c.val()];
                            return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null
                        }, y.trackBy && b.$watch(function() {
                            return y.getTrackByValue(o.$viewValue)
                        }, function() {
                            o.$render()
                        })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = zd(g.cloneNode(!1)), n(), b.$watchCollection(y.getWatchables, n)
                    }
                }
            }
        }],
        lg = ["$locale", "$interpolate", "$log", function(a, b, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                link: function(g, h, i) {
                    function j(a) {
                        h.text(a || "")
                    }
                    var k, l = i.count,
                        m = i.$attr.when && h.attr(i.$attr.when),
                        n = i.offset || 0,
                        o = g.$eval(m) || {},
                        q = {},
                        r = b.startSymbol(),
                        s = b.endSymbol(),
                        u = r + l + "-" + n + s,
                        v = Id.noop;
                    f(i, function(a, b) {
                        var c = e.exec(b);
                        if (c) {
                            var d = (c[1] ? "-" : "") + td(c[2]);
                            o[d] = h.attr(i.$attr[b])
                        }
                    }), f(o, function(a, c) {
                        q[c] = b(a.replace(d, u))
                    }), g.$watch(l, function(b) {
                        var d = parseFloat(b),
                            e = isNaN(d);
                        if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && y(k) && isNaN(k))) {
                            v();
                            var f = q[d];
                            t(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = p, j()) : v = g.$watch(f, j), k = d
                        }
                    })
                }
            }
        }],
        mg = ["$parse", "$animate", function(a, g) {
            var h = "$$NG_REMOVED",
                i = d("ngRepeat"),
                j = function(a, b, c, d, e, f, g) {
                    a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                },
                k = function(a) {
                    return a.clone[0]
                },
                l = function(a) {
                    return a.clone[a.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(d, m) {
                    var n = m.ngRepeat,
                        o = b.createComment(" end ngRepeat: " + n + " "),
                        p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                    var q = p[1],
                        r = p[2],
                        s = p[3],
                        t = p[4];
                    if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                    var u = p[3] || p[1],
                        v = p[2];
                    if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                    var w, x, y, z, A = {
                        $id: Wa
                    };
                    return t ? w = a(t) : (y = function(a, b) {
                            return Wa(b)
                        }, z = function(a) {
                            return a
                        }),
                        function(a, b, d, m, p) {
                            w && (x = function(b, c, d) {
                                return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                            });
                            var q = qa();
                            a.$watchCollection(r, function(d) {
                                var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                                    J = qa();
                                if (s && (a[s] = d), e(d)) E = d, D = x || y;
                                else {
                                    D = x || z, E = [];
                                    for (var K in d) ud.call(d, K) && "$" !== K.charAt(0) && E.push(K)
                                }
                                for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                                    if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                                    else {
                                        if (J[C]) throw f(G, function(a) {
                                            a && a.scope && (q[a.id] = a)
                                        }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                        G[m] = {
                                            id: C,
                                            scope: c,
                                            clone: c
                                        }, J[C] = !0
                                    }
                                for (var L in q) {
                                    if (F = q[L], H = pa(F.clone), g.leave(H), H[0].parentNode)
                                        for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                                    F.scope.$destroy()
                                }
                                for (m = 0; w > m; m++)
                                    if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                        t = I;
                                        do t = t.nextSibling; while (t && t[h]);
                                        k(F) != t && g.move(pa(F.clone), null, zd(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                                    } else p(function(a, b) {
                                        F.scope = b;
                                        var c = o.cloneNode(!1);
                                        a[a.length++] = c, g.enter(a, null, zd(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                                    });
                                q = J
                            })
                        }
                }
            }
        }],
        ng = "ng-hide",
        og = "ng-hide-animate",
        pg = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[b ? "removeClass" : "addClass"](c, ng, {
                            tempClasses: og
                        })
                    })
                }
            }
        }],
        qg = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[b ? "addClass" : "removeClass"](c, ng, {
                            tempClasses: og
                        })
                    })
                }
            }
        }],
        rg = $c(function(a, b, c) {
            a.$watch(c.ngStyle, function(a, c) {
                c && a !== c && f(c, function(a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }),
        sg = ["$animate", function(a) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, g) {
                    var h = e.ngSwitch || e.on,
                        i = [],
                        j = [],
                        k = [],
                        l = [],
                        m = function(a, b) {
                            return function() {
                                a.splice(b, 1)
                            }
                        };
                    c.$watch(h, function(c) {
                        var d, e;
                        for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                        for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                            var h = pa(j[d].clone);
                            l[d].$destroy();
                            var n = k[d] = a.leave(h);
                            n.then(m(k, d))
                        }
                        j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                            c.transclude(function(d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                var g = {
                                    clone: d
                                };
                                j.push(g), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        tg = $c({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        ug = $c({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        vg = $c({
            restrict: "EAC",
            link: function(a, b, c, e, f) {
                if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
                f(function(a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        wg = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id,
                            e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }],
        xg = {
            $setViewValue: p,
            $render: p
        },
        yg = ["$element", "$scope", "$attrs", function(a, d, e) {
            var f = this,
                g = new Xa;
            f.ngModelCtrl = xg, f.unknownOption = zd(b.createElement("option")), f.renderUnknownOption = function(b) {
                var c = "? " + Wa(b) + " ?";
                f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c)
            }, d.$on("$destroy", function() {
                f.renderUnknownOption = p
            }), f.removeUnknownOption = function() {
                f.unknownOption.parent() && f.unknownOption.remove()
            }, f.readValue = function() {
                return f.removeUnknownOption(), a.val()
            }, f.writeValue = function(b) {
                f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
            }, f.addOption = function(a, b) {
                na(a, '"option value"'), "" === a && (f.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1)
            }, f.removeOption = function(a) {
                var b = g.get(a);
                b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
            }, f.hasOption = function(a) {
                return !!g.get(a)
            }
        }],
        zg = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: yg,
                link: function(a, b, c, d) {
                    var e = d[1];
                    if (e) {
                        var g = d[0];
                        if (g.ngModelCtrl = e, e.$render = function() {
                                g.writeValue(e.$viewValue)
                            }, b.on("change", function() {
                                a.$apply(function() {
                                    e.$setViewValue(g.readValue())
                                })
                            }), c.multiple) {
                            g.readValue = function() {
                                var a = [];
                                return f(b.find("option"), function(b) {
                                    b.selected && a.push(b.value)
                                }), a
                            }, g.writeValue = function(a) {
                                var c = new Xa(a);
                                f(b.find("option"), function(a) {
                                    a.selected = u(c.get(a.value))
                                })
                            };
                            var h, i = NaN;
                            a.$watch(function() {
                                i !== e.$viewValue || Q(h, e.$viewValue) || (h = P(e.$viewValue), e.$render()), i = e.$viewValue
                            }), e.$isEmpty = function(a) {
                                return !a || 0 === a.length
                            }
                        }
                    }
                }
            }
        },
        Ag = ["$interpolate", function(a) {
            function b(a) {
                a[0].hasAttribute("selected") && (a[0].selected = !0)
            }
            return {
                restrict: "E",
                priority: 100,
                compile: function(c, d) {
                    if (u(d.value)) var e = a(d.value, !0);
                    else {
                        var f = a(c.text(), !0);
                        f || d.$set("value", c.text())
                    }
                    return function(a, c, d) {
                        function g(a) {
                            j.addOption(a, c), j.ngModelCtrl.$render(), b(c)
                        }
                        var h = "$selectController",
                            i = c.parent(),
                            j = i.data(h) || i.parent().data(h);
                        if (j && j.ngModelCtrl) {
                            if (e) {
                                var k;
                                d.$observe("value", function(a) {
                                    u(k) && j.removeOption(k), k = a, g(a)
                                })
                            } else f ? a.$watch(f, function(a, b) {
                                d.$set("value", a), b !== a && j.removeOption(b), g(a)
                            }) : g(d.value);
                            c.on("$destroy", function() {
                                j.removeOption(d.value), j.ngModelCtrl.$render()
                            })
                        }
                    }
                }
            }
        }],
        Bg = r({
            restrict: "E",
            terminal: !1
        }),
        Cg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function(a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function() {
                        d.$validate()
                    }))
                }
            }
        },
        Dg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function(a) {
                            if (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, $(b));
                            g = a || c, f.$validate()
                        }), f.$validators.pattern = function(a, b) {
                            return f.$isEmpty(b) || t(g) || g.test(b)
                        }
                    }
                }
            }
        },
        Eg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function(a) {
                            var b = n(a);
                            e = isNaN(b) ? -1 : b, d.$validate()
                        }), d.$validators.maxlength = function(a, b) {
                            return 0 > e || d.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        },
        Fg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function(a) {
                            e = n(a) || 0, d.$validate()
                        }), d.$validators.minlength = function(a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ka(), ua(Id), Id.module("ngLocale", [], ["$provide", function(a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }

        function d(a, d) {
            var e = d;
            c === e && (e = Math.min(b(a), 3));
            var f = Math.pow(10, e),
                g = (a * f | 0) % f;
            return {
                v: e,
                f: g
            }
        }
        var e = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            pluralCat: function(a, b) {
                var c = 0 | a,
                    f = d(a, b);
                return 1 == c && 0 == f.v ? e.ONE : e.OTHER
            }
        })
    }]), void zd(b).ready(function() {
        fa(b, ga)
    }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function(a, b, c) {
        "use strict";

        function d(a, b, c) {
            if (!a) throw ngMinErr("areq", "Argument '{0}' is {1}", b || "?", c || "required");
            return a
        }

        function e(a, b) {
            return a || b ? a ? b ? (Q(a) && (a = a.join(" ")), Q(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
        }

        function f(a) {
            var b = {};
            return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
        }

        function g(a, b, c) {
            var d = "";
            return a = Q(a) ? a : a && R(a) && a.length ? a.split(/\s+/) : [], P(a, function(a, e) {
                a && a.length > 0 && (d += e > 0 ? " " : "", d += c ? b + a : a + b)
            }), d
        }

        function h(a, b) {
            var c = a.indexOf(b);
            b >= 0 && a.splice(c, 1)
        }

        function i(a) {
            if (a instanceof O) switch (a.length) {
                case 0:
                    return [];
                case 1:
                    if (a[0].nodeType === X) return a;
                    break;
                default:
                    return O(j(a))
            }
            return a.nodeType === X ? O(a) : void 0
        }

        function j(a) {
            if (!a[0]) return a;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.nodeType == X) return c
            }
        }

        function k(a, b, c) {
            P(b, function(b) {
                a.addClass(b, c)
            })
        }

        function l(a, b, c) {
            P(b, function(b) {
                a.removeClass(b, c)
            })
        }

        function m(a) {
            return function(b, c) {
                c.addClass && (k(a, b, c.addClass), c.addClass = null), c.removeClass && (l(a, b, c.removeClass), c.removeClass = null)
            }
        }

        function n(a) {
            if (a = a || {}, !a.$$prepared) {
                var b = a.domOperation || M;
                a.domOperation = function() {
                    a.$$domOperationFired = !0, b(), b = M
                }, a.$$prepared = !0
            }
            return a
        }

        function o(a, b) {
            p(a, b), q(a, b)
        }

        function p(a, b) {
            b.from && (a.css(b.from), b.from = null)
        }

        function q(a, b) {
            b.to && (a.css(b.to), b.to = null)
        }

        function r(a, b, c) {
            var d = (b.addClass || "") + " " + (c.addClass || ""),
                e = (b.removeClass || "") + " " + (c.removeClass || ""),
                f = s(a.attr("class"), d, e);
            c.preparationClasses && (b.preparationClasses = z(c.preparationClasses, b.preparationClasses), delete c.preparationClasses);
            var g = b.domOperation !== M ? b.domOperation : null;
            return N(b, c), g && (b.domOperation = g), f.addClass ? b.addClass = f.addClass : b.addClass = null, f.removeClass ? b.removeClass = f.removeClass : b.removeClass = null, b
        }

        function s(a, b, c) {
            function d(a) {
                R(a) && (a = a.split(" "));
                var b = {};
                return P(a, function(a) {
                    a.length && (b[a] = !0)
                }), b
            }
            var e = 1,
                f = -1,
                g = {};
            a = d(a), b = d(b), P(b, function(a, b) {
                g[b] = e
            }), c = d(c), P(c, function(a, b) {
                g[b] = g[b] === e ? null : f
            });
            var h = {
                addClass: "",
                removeClass: ""
            };
            return P(g, function(b, c) {
                var d, g;
                b === e ? (d = "addClass", g = !a[c]) : b === f && (d = "removeClass", g = a[c]), g && (h[d].length && (h[d] += " "), h[d] += c)
            }), h
        }

        function t(a) {
            return a instanceof b.element ? a[0] : a
        }

        function u(a, b, c) {
            var d = "";
            b && (d = g(b, $, !0)), c.addClass && (d = z(d, g(c.addClass, Y))), c.removeClass && (d = z(d, g(c.removeClass, Z))), d.length && (c.preparationClasses = d, a.addClass(d))
        }

        function v(a, b) {
            b.preparationClasses && (a.removeClass(b.preparationClasses), b.preparationClasses = null), b.activeClasses && (a.removeClass(b.activeClasses), b.activeClasses = null)
        }

        function w(a, b) {
            var c = b ? "-" + b + "s" : "";
            return y(a, [ma, c]), [ma, c]
        }

        function x(a, b) {
            var c = b ? "paused" : "",
                d = K + ia;
            return y(a, [d, c]), [d, c]
        }

        function y(a, b) {
            var c = b[0],
                d = b[1];
            a.style[c] = d
        }

        function z(a, b) {
            return a ? b ? a + " " + b : a : b
        }

        function A(a) {
            return [la, a + "s"]
        }

        function B(a, b) {
            var c = b ? ka : ma;
            return [c, a + "s"]
        }

        function C(a, b, c) {
            var d = Object.create(null),
                e = a.getComputedStyle(b) || {};
            return P(c, function(a, b) {
                var c = e[a];
                if (c) {
                    var f = c.charAt(0);
                    ("-" === f || "+" === f || f >= 0) && (c = D(c)), 0 === c && (c = null), d[b] = c
                }
            }), d
        }

        function D(a) {
            var b = 0,
                c = a.split(/\s*,\s*/);
            return P(c, function(a) {
                "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
            }), b
        }

        function E(a) {
            return 0 === a || null != a
        }

        function F(a, b) {
            var c = I,
                d = a + "s";
            return b ? c += da : d += " linear all", [c, d]
        }

        function G() {
            var a = Object.create(null);
            return {
                flush: function() {
                    a = Object.create(null)
                },
                count: function(b) {
                    var c = a[b];
                    return c ? c.total : 0
                },
                get: function(b) {
                    var c = a[b];
                    return c && c.value
                },
                put: function(b, c) {
                    a[b] ? a[b].total++ : a[b] = {
                        total: 1,
                        value: c
                    }
                }
            }
        }

        function H(a, b, c) {
            P(c, function(c) {
                a[c] = U(a[c]) ? a[c] : b.style.getPropertyValue(c)
            })
        }
        var I, J, K, L, M = b.noop,
            N = b.extend,
            O = b.element,
            P = b.forEach,
            Q = b.isArray,
            R = b.isString,
            S = b.isObject,
            T = b.isUndefined,
            U = b.isDefined,
            V = b.isFunction,
            W = b.isElement,
            X = 1,
            Y = "-add",
            Z = "-remove",
            $ = "ng-",
            _ = "-active",
            aa = "ng-animate",
            ba = "$$ngAnimateChildren",
            ca = "";
        T(a.ontransitionend) && U(a.onwebkittransitionend) ? (ca = "-webkit-", I = "WebkitTransition", J = "webkitTransitionEnd transitionend") : (I = "transition", J = "transitionend"), T(a.onanimationend) && U(a.onwebkitanimationend) ? (ca = "-webkit-", K = "WebkitAnimation", L = "webkitAnimationEnd animationend") : (K = "animation", L = "animationend");
        var da = "Duration",
            ea = "Property",
            fa = "Delay",
            ga = "TimingFunction",
            ha = "IterationCount",
            ia = "PlayState",
            ja = 9999,
            ka = K + fa,
            la = K + da,
            ma = I + fa,
            na = I + da,
            oa = ["$$rAF", function(a) {
                function b(a) {
                    d = d.concat(a), c()
                }

                function c() {
                    if (d.length) {
                        for (var b = d.shift(), f = 0; f < b.length; f++) b[f]();
                        e || a(function() {
                            e || c()
                        })
                    }
                }
                var d, e;
                return d = b.queue = [], b.waitUntilQuiet = function(b) {
                    e && e(), e = a(function() {
                        e = null, b(), c()
                    })
                }, b
            }],
            pa = [function() {
                return function(a, c, d) {
                    var e = d.ngAnimateChildren;
                    b.isString(e) && 0 === e.length ? c.data(ba, !0) : d.$observe("ngAnimateChildren", function(a) {
                        a = "on" === a || "true" === a, c.data(ba, a)
                    })
                }
            }],
            qa = "$$animateCss",
            ra = 1e3,
            sa = 3,
            ta = 1.5,
            ua = {
                transitionDuration: na,
                transitionDelay: ma,
                transitionProperty: I + ea,
                animationDuration: la,
                animationDelay: ka,
                animationIterationCount: K + ha
            },
            va = {
                transitionDuration: na,
                transitionDelay: ma,
                animationDuration: la,
                animationDelay: ka
            },
            wa = ["$animateProvider", function(a) {
                var b = G(),
                    c = G();
                this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$animate", function(a, d, e, i, j, k, l, r) {
                    function s(a, b) {
                        var c = "$$ngAnimateParentKey",
                            d = a.parentNode,
                            e = d[c] || (d[c] = ++N);
                        return e + "-" + a.getAttribute("class") + "-" + b
                    }

                    function u(c, d, e, f) {
                        var g = b.get(e);
                        return g || (g = C(a, c, f), "infinite" === g.animationIterationCount && (g.animationIterationCount = 1)), b.put(e, g), g
                    }

                    function v(e, f, h, i) {
                        var j;
                        if (b.count(h) > 0 && (j = c.get(h), !j)) {
                            var k = g(f, "-stagger");
                            d.addClass(e, k), j = C(a, e, i), j.animationDuration = Math.max(j.animationDuration, 0), j.transitionDuration = Math.max(j.transitionDuration, 0), d.removeClass(e, k), c.put(h, j)
                        }
                        return j || {}
                    }

                    function z(a) {
                        O.push(a), l.waitUntilQuiet(function() {
                            b.flush(), c.flush();
                            for (var a = j(), d = 0; d < O.length; d++) O[d](a);
                            O.length = 0
                        })
                    }

                    function D(a, b, c) {
                        var d = u(a, b, c, ua),
                            e = d.animationDelay,
                            f = d.transitionDelay;
                        return d.maxDelay = e && f ? Math.max(e, f) : e || f, d.maxDuration = Math.max(d.animationDuration * d.animationIterationCount, d.transitionDuration), d
                    }
                    var G = m(d),
                        N = 0,
                        O = [];
                    return function(a, c) {
                        function j() {
                            m()
                        }

                        function l() {
                            m(!0)
                        }

                        function m(b) {
                            S || U && T || (S = !0, T = !1, c.$$skipPreparationClasses || d.removeClass(a, na), d.removeClass(a, pa), x(R, !1), w(R, !1), P(da, function(a) {
                                R.style[a[0]] = ""
                            }), G(a, c), o(a, c), Object.keys(O).length && P(O, function(a, b) {
                                a ? R.style.setProperty(b, a) : R.style.removeProperty(b)
                            }), c.onDone && c.onDone(), V && V.complete(!b))
                        }

                        function u(a) {
                            Ia.blockTransition && w(R, a), Ia.blockKeyframeAnimation && x(R, !!a)
                        }

                        function C() {
                            return V = new e({
                                end: j,
                                cancel: l
                            }), z(M), m(), {
                                $$willAnimate: !1,
                                start: function() {
                                    return V
                                },
                                end: j
                            }
                        }

                        function N() {
                            function b() {
                                if (!S) {
                                    if (u(!1), P(da, function(a) {
                                            var b = a[0],
                                                c = a[1];
                                            R.style[b] = c
                                        }), G(a, c), d.addClass(a, pa), Ia.recalculateTimingStyles) {
                                        if (oa = R.className + " " + na, xa = s(R, oa), Ga = D(R, oa, xa), Ha = Ga.maxDelay, X = Math.max(Ha, 0), ba = Ga.maxDuration, 0 === ba) return void m();
                                        Ia.hasTransitions = Ga.transitionDuration > 0, Ia.hasAnimations = Ga.animationDuration > 0
                                    }
                                    if (Ia.applyAnimationDelay && (Ha = "boolean" != typeof c.delay && E(c.delay) ? parseFloat(c.delay) : Ha, X = Math.max(Ha, 0), Ga.animationDelay = Ha, Ja = B(Ha, !0), da.push(Ja), R.style[Ja[0]] = Ja[1]), aa = X * ra, ca = ba * ra, c.easing) {
                                        var b, h = c.easing;
                                        Ia.hasTransitions && (b = I + ga, da.push([b, h]), R.style[b] = h), Ia.hasAnimations && (b = K + ga, da.push([b, h]), R.style[b] = h)
                                    }
                                    Ga.transitionDuration && j.push(J), Ga.animationDuration && j.push(L), g = Date.now();
                                    var k = aa + ta * ca,
                                        l = g + k,
                                        n = a.data(qa) || [],
                                        o = !0;
                                    if (n.length) {
                                        var p = n[0];
                                        o = l > p.expectedEndTime, o ? i.cancel(p.timer) : n.push(m)
                                    }
                                    if (o) {
                                        var r = i(e, k, !1);
                                        n[0] = {
                                            timer: r,
                                            expectedEndTime: l
                                        }, n.push(m), a.data(qa, n)
                                    }
                                    a.on(j.join(" "), f), c.to && (c.cleanupStyles && H(O, R, Object.keys(c.to)), q(a, c))
                                }
                            }

                            function e() {
                                var b = a.data(qa);
                                if (b) {
                                    for (var c = 1; c < b.length; c++) b[c]();
                                    a.removeData(qa)
                                }
                            }

                            function f(a) {
                                a.stopPropagation();
                                var b = a.originalEvent || a,
                                    c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                                    d = parseFloat(b.elapsedTime.toFixed(sa));
                                Math.max(c - g, 0) >= aa && d >= ba && (U = !0, m())
                            }
                            if (!S) {
                                if (!R.parentNode) return void m();
                                var g, j = [],
                                    k = function(a) {
                                        if (U) T && a && (T = !1, m());
                                        else if (T = !a, Ga.animationDuration) {
                                            var b = x(R, T);
                                            T ? da.push(b) : h(da, b)
                                        }
                                    },
                                    l = Ea > 0 && (Ga.transitionDuration && 0 === ya.transitionDuration || Ga.animationDuration && 0 === ya.animationDuration) && Math.max(ya.animationDelay, ya.transitionDelay);
                                l ? i(b, Math.floor(l * Ea * ra), !1) : b(), W.resume = function() {
                                    k(!0)
                                }, W.pause = function() {
                                    k(!1)
                                }
                            }
                        }
                        var O = {},
                            R = t(a);
                        if (!R || !R.parentNode || !r.enabled()) return C();
                        c = n(c);
                        var S, T, U, V, W, X, aa, ba, ca, da = [],
                            fa = a.attr("class"),
                            ha = f(c);
                        if (0 === c.duration || !k.animations && !k.transitions) return C();
                        var ia = c.event && Q(c.event) ? c.event.join(" ") : c.event,
                            ka = ia && c.structural,
                            la = "",
                            ma = "";
                        ka ? la = g(ia, $, !0) : ia && (la = ia), c.addClass && (ma += g(c.addClass, Y)), c.removeClass && (ma.length && (ma += " "), ma += g(c.removeClass, Z)), c.applyClassesEarly && ma.length && G(a, c);
                        var na = [la, ma].join(" ").trim(),
                            oa = fa + " " + na,
                            pa = g(na, _),
                            ua = ha.to && Object.keys(ha.to).length > 0,
                            wa = (c.keyframeStyle || "").length > 0;
                        if (!wa && !ua && !na) return C();
                        var xa, ya;
                        if (c.stagger > 0) {
                            var za = parseFloat(c.stagger);
                            ya = {
                                transitionDelay: za,
                                animationDelay: za,
                                transitionDuration: 0,
                                animationDuration: 0
                            }
                        } else xa = s(R, oa), ya = v(R, na, xa, va);
                        c.$$skipPreparationClasses || d.addClass(a, na);
                        var Aa;
                        if (c.transitionStyle) {
                            var Ba = [I, c.transitionStyle];
                            y(R, Ba), da.push(Ba)
                        }
                        if (c.duration >= 0) {
                            Aa = R.style[I].length > 0;
                            var Ca = F(c.duration, Aa);
                            y(R, Ca), da.push(Ca)
                        }
                        if (c.keyframeStyle) {
                            var Da = [K, c.keyframeStyle];
                            y(R, Da), da.push(Da)
                        }
                        var Ea = ya ? c.staggerIndex >= 0 ? c.staggerIndex : b.count(xa) : 0,
                            Fa = 0 === Ea;
                        Fa && !c.skipBlocking && w(R, ja);
                        var Ga = D(R, oa, xa),
                            Ha = Ga.maxDelay;
                        X = Math.max(Ha, 0), ba = Ga.maxDuration;
                        var Ia = {};
                        if (Ia.hasTransitions = Ga.transitionDuration > 0, Ia.hasAnimations = Ga.animationDuration > 0, Ia.hasTransitionAll = Ia.hasTransitions && "all" == Ga.transitionProperty, Ia.applyTransitionDuration = ua && (Ia.hasTransitions && !Ia.hasTransitionAll || Ia.hasAnimations && !Ia.hasTransitions), Ia.applyAnimationDuration = c.duration && Ia.hasAnimations, Ia.applyTransitionDelay = E(c.delay) && (Ia.applyTransitionDuration || Ia.hasTransitions), Ia.applyAnimationDelay = E(c.delay) && Ia.hasAnimations, Ia.recalculateTimingStyles = ma.length > 0, (Ia.applyTransitionDuration || Ia.applyAnimationDuration) && (ba = c.duration ? parseFloat(c.duration) : ba, Ia.applyTransitionDuration && (Ia.hasTransitions = !0, Ga.transitionDuration = ba, Aa = R.style[I + ea].length > 0, da.push(F(ba, Aa))), Ia.applyAnimationDuration && (Ia.hasAnimations = !0, Ga.animationDuration = ba, da.push(A(ba)))), 0 === ba && !Ia.recalculateTimingStyles) return C();
                        if (null != c.delay) {
                            var Ja = parseFloat(c.delay);
                            Ia.applyTransitionDelay && da.push(B(Ja)), Ia.applyAnimationDelay && da.push(B(Ja, !0))
                        }
                        return null == c.duration && Ga.transitionDuration > 0 && (Ia.recalculateTimingStyles = Ia.recalculateTimingStyles || Fa), aa = X * ra, ca = ba * ra, c.skipBlocking || (Ia.blockTransition = Ga.transitionDuration > 0, Ia.blockKeyframeAnimation = Ga.animationDuration > 0 && ya.animationDelay > 0 && 0 === ya.animationDuration), c.from && (c.cleanupStyles && H(O, R, Object.keys(c.from)), p(a, c)), Ia.blockTransition || Ia.blockKeyframeAnimation ? u(ba) : c.skipBlocking || w(R, !1), {
                            $$willAnimate: !0,
                            end: j,
                            start: function() {
                                return S ? void 0 : (W = {
                                    end: j,
                                    cancel: l,
                                    resume: null,
                                    pause: null
                                }, V = new e(W), z(N), V)
                            }
                        }
                    }
                }]
            }],
            xa = ["$$animationProvider", function(a) {
                function b(a) {
                    return a.parentNode && 11 === a.parentNode.nodeType
                }
                a.drivers.push("$$animateCssDriver");
                var c = "ng-animate-shim",
                    d = "ng-anchor",
                    e = "ng-anchor-out",
                    f = "ng-anchor-in";
                this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(a, g, h, i, j, k, l) {
                    function n(a) {
                        return a.replace(/\bng-\S+\b/g, "")
                    }

                    function o(a, b) {
                        return R(a) && (a = a.split(" ")), R(b) && (b = b.split(" ")), a.filter(function(a) {
                            return -1 === b.indexOf(a)
                        }).join(" ")
                    }

                    function p(b, g, i) {
                        function j(a) {
                            var b = {},
                                c = t(a).getBoundingClientRect();
                            return P(["width", "height", "top", "left"], function(a) {
                                var d = c[a];
                                switch (a) {
                                    case "top":
                                        d += s.scrollTop;
                                        break;
                                    case "left":
                                        d += s.scrollLeft
                                }
                                b[a] = Math.floor(d) + "px"
                            }), b
                        }

                        function k() {
                            var b = a(q, {
                                addClass: e,
                                delay: !0,
                                from: j(g)
                            });
                            return b.$$willAnimate ? b : null
                        }

                        function l(a) {
                            return a.attr("class") || ""
                        }

                        function m() {
                            var b = n(l(i)),
                                c = o(b, r),
                                d = o(r, b),
                                g = a(q, {
                                    to: j(i),
                                    addClass: f + " " + c,
                                    removeClass: e + " " + d,
                                    delay: !0
                                });
                            return g.$$willAnimate ? g : null
                        }

                        function p() {
                            q.remove(), g.removeClass(c), i.removeClass(c)
                        }
                        var q = O(t(g).cloneNode(!0)),
                            r = n(l(q));
                        g.addClass(c), i.addClass(c), q.addClass(d), v.append(q);
                        var u, w = k();
                        if (!w && (u = m(), !u)) return p();
                        var x = w || u;
                        return {
                            start: function() {
                                function a() {
                                    c && c.end()
                                }
                                var b, c = x.start();
                                return c.done(function() {
                                    return c = null, !u && (u = m()) ? (c = u.start(), c.done(function() {
                                        c = null, p(), b.complete()
                                    }), c) : (p(), void b.complete())
                                }), b = new h({
                                    end: a,
                                    cancel: a
                                })
                            }
                        }
                    }

                    function q(a, b, c, d) {
                        var e = r(a, M),
                            f = r(b, M),
                            g = [];
                        return P(d, function(a) {
                            var b = a.out,
                                d = a["in"],
                                e = p(c, b, d);
                            e && g.push(e)
                        }), e || f || 0 !== g.length ? {
                            start: function() {
                                function a() {
                                    P(b, function(a) {
                                        a.end()
                                    })
                                }
                                var b = [];
                                e && b.push(e.start()), f && b.push(f.start()), P(g, function(a) {
                                    b.push(a.start())
                                });
                                var c = new h({
                                    end: a,
                                    cancel: a
                                });
                                return h.all(b, function(a) {
                                    c.complete(a)
                                }), c
                            }
                        } : void 0
                    }

                    function r(b) {
                        var c = b.element,
                            d = b.options || {};
                        b.structural && (d.event = b.event, d.structural = !0, d.applyClassesEarly = !0, "leave" === b.event && (d.onDone = d.domOperation)), d.preparationClasses && (d.event = z(d.event, d.preparationClasses));
                        var e = a(c, d);
                        return e.$$willAnimate ? e : null
                    }
                    if (!j.animations && !j.transitions) return M;
                    var s = l[0].body,
                        u = t(i),
                        v = O(b(u) || s.contains(u) ? u : s);
                    m(k);
                    return function(a) {
                        return a.from && a.to ? q(a.from, a.to, a.classes, a.anchors) : r(a)
                    }
                }]
            }],
            ya = ["$animateProvider", function(a) {
                this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(b, c, d) {
                    function e(c) {
                        c = Q(c) ? c : c.split(" ");
                        for (var d = [], e = {}, f = 0; f < c.length; f++) {
                            var g = c[f],
                                h = a.$$registeredAnimations[g];
                            h && !e[g] && (d.push(b.get(h)), e[g] = !0)
                        }
                        return d
                    }
                    var f = m(d);
                    return function(a, b, d, g) {
                        function h() {
                            g.domOperation(), f(a, g)
                        }

                        function i(a, b, d, e, f) {
                            var g;
                            switch (d) {
                                case "animate":
                                    g = [b, e.from, e.to, f];
                                    break;
                                case "setClass":
                                    g = [b, p, q, f];
                                    break;
                                case "addClass":
                                    g = [b, p, f];
                                    break;
                                case "removeClass":
                                    g = [b, q, f];
                                    break;
                                default:
                                    g = [b, f]
                            }
                            g.push(e);
                            var h = a.apply(a, g);
                            if (h)
                                if (V(h.start) && (h = h.start()), h instanceof c) h.done(f);
                                else if (V(h)) return h;
                            return M
                        }

                        function j(a, b, d, e, f) {
                            var g = [];
                            return P(e, function(e) {
                                var h = e[f];
                                h && g.push(function() {
                                    var e, f, g = !1,
                                        j = function(a) {
                                            g || (g = !0, (f || M)(a), e.complete(!a))
                                        };
                                    return e = new c({
                                        end: function() {
                                            j()
                                        },
                                        cancel: function() {
                                            j(!0)
                                        }
                                    }), f = i(h, a, b, d, function(a) {
                                        var b = a === !1;
                                        j(b)
                                    }), e
                                })
                            }), g
                        }

                        function k(a, b, d, e, f) {
                            var g = j(a, b, d, e, f);
                            if (0 === g.length) {
                                var h, i;
                                "beforeSetClass" === f ? (h = j(a, "removeClass", d, e, "beforeRemoveClass"), i = j(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = j(a, "removeClass", d, e, "removeClass"), i = j(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), i && (g = g.concat(i))
                            }
                            if (0 !== g.length) return function(a) {
                                var b = [];
                                return g.length && P(g, function(a) {
                                        b.push(a())
                                    }), b.length ? c.all(b, a) : a(),
                                    function(a) {
                                        P(b, function(b) {
                                            a ? b.cancel() : b.end()
                                        })
                                    }
                            }
                        }
                        3 === arguments.length && S(d) && (g = d, d = null), g = n(g), d || (d = a.attr("class") || "", g.addClass && (d += " " + g.addClass), g.removeClass && (d += " " + g.removeClass));
                        var l, m, p = g.addClass,
                            q = g.removeClass,
                            r = e(d);
                        if (r.length) {
                            var s, t;
                            "leave" == b ? (t = "leave", s = "afterLeave") : (t = "before" + b.charAt(0).toUpperCase() + b.substr(1), s = b), "enter" !== b && "move" !== b && (l = k(a, b, g, r, t)), m = k(a, b, g, r, s)
                        }
                        return l || m ? {
                            start: function() {
                                function b(b) {
                                    i = !0, h(), o(a, g), j.complete(b)
                                }

                                function d(a) {
                                    i || ((e || M)(a), b(a))
                                }
                                var e, f = [];
                                l && f.push(function(a) {
                                    e = l(a)
                                }), f.length ? f.push(function(a) {
                                    h(), a(!0)
                                }) : h(), m && f.push(function(a) {
                                    e = m(a)
                                });
                                var i = !1,
                                    j = new c({
                                        end: function() {
                                            d()
                                        },
                                        cancel: function() {
                                            d(!0)
                                        }
                                    });
                                return c.chain(f, b), j
                            }
                        } : void 0
                    }
                }]
            }],
            za = ["$$animationProvider", function(a) {
                a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(a, b) {
                    function c(b) {
                        var c = b.element,
                            d = b.event,
                            e = b.options,
                            f = b.classes;
                        return a(c, d, f, e)
                    }
                    return function(a) {
                        if (a.from && a.to) {
                            var d = c(a.from),
                                e = c(a.to);
                            if (!d && !e) return;
                            return {
                                start: function() {
                                    function a() {
                                        return function() {
                                            P(f, function(a) {
                                                a.end()
                                            })
                                        }
                                    }

                                    function c(a) {
                                        g.complete(a)
                                    }
                                    var f = [];
                                    d && f.push(d.start()), e && f.push(e.start()), b.all(f, c);
                                    var g = new b({
                                        end: a(),
                                        cancel: a()
                                    });
                                    return g
                                }
                            }
                        }
                        return c(a)
                    }
                }]
            }],
            Aa = "data-ng-animate",
            Ba = "$ngAnimatePin",
            Ca = ["$animateProvider", function(a) {
                function b(a, b, c, d) {
                    return g[a].some(function(a) {
                        return a(b, c, d)
                    })
                }

                function c(a, b) {
                    a = a || {};
                    var c = (a.addClass || "").length > 0,
                        d = (a.removeClass || "").length > 0;
                    return b ? c && d : c || d
                }
                var e = 1,
                    f = 2,
                    g = this.rules = {
                        skip: [],
                        cancel: [],
                        join: []
                    };
                g.join.push(function(a, b, d) {
                    return !b.structural && c(b.options)
                }), g.skip.push(function(a, b, d) {
                    return !b.structural && !c(b.options)
                }), g.skip.push(function(a, b, c) {
                    return "leave" == c.event && b.structural
                }), g.skip.push(function(a, b, c) {
                    return c.structural && c.state === f && !b.structural
                }), g.cancel.push(function(a, b, c) {
                    return c.structural && b.structural
                }), g.cancel.push(function(a, b, c) {
                    return c.state === f && b.structural
                }), g.cancel.push(function(a, b, c) {
                    var d = b.options,
                        e = c.options;
                    return d.addClass && d.addClass === e.removeClass || d.removeClass && d.removeClass === e.addClass
                }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(g, h, k, l, p, q, s, w, x, y) {
                    function z() {
                        var a = !1;
                        return function(b) {
                            a ? b() : h.$$postDigest(function() {
                                a = !0, b()
                            })
                        }
                    }

                    function A(a, b) {
                        return r(a, b, {})
                    }

                    function B(a, b) {
                        var c = t(a),
                            d = [],
                            e = M[b];
                        return e && P(e, function(a) {
                            a.node.contains(c) && d.push(a.callback)
                        }), d
                    }

                    function C(a, d, j) {
                        function k(b, c, d, e) {
                            x(function() {
                                var b = B(a, c);
                                b.length && g(function() {
                                    P(b, function(b) {
                                        b(a, d, e)
                                    })
                                })
                            }), b.progress(c, d, e)
                        }

                        function l(b) {
                            v(a, j), Z(a, j), o(a, j), j.domOperation(), w.complete(!b)
                        }
                        var m, p;
                        a = i(a), a && (m = t(a), p = a.parent()), j = n(j);
                        var w = new s,
                            x = z();
                        if (Q(j.addClass) && (j.addClass = j.addClass.join(" ")), j.addClass && !R(j.addClass) && (j.addClass = null), Q(j.removeClass) && (j.removeClass = j.removeClass.join(" ")), j.removeClass && !R(j.removeClass) && (j.removeClass = null), j.from && !S(j.from) && (j.from = null), j.to && !S(j.to) && (j.to = null), !m) return l(), w;
                        var y = [m.className, j.addClass, j.removeClass].join(" ");
                        if (!Y(y)) return l(), w;
                        var C = ["enter", "move", "leave"].indexOf(d) >= 0,
                            F = !K || J.get(m),
                            L = !F && I.get(m) || {},
                            M = !!L.state;
                        if (F || M && L.state == e || (F = !G(a, p, d)), F) return l(), w;
                        C && D(a);
                        var N = {
                            structural: C,
                            element: a,
                            event: d,
                            close: l,
                            options: j,
                            runner: w
                        };
                        if (M) {
                            var O = b("skip", a, N, L);
                            if (O) return L.state === f ? (l(), w) : (r(a, L.options, j), L.runner);
                            var T = b("cancel", a, N, L);
                            if (T)
                                if (L.state === f) L.runner.end();
                                else {
                                    if (!L.structural) return r(a, L.options, N.options), L.runner;
                                    L.close()
                                }
                            else {
                                var U = b("join", a, N, L);
                                if (U) {
                                    if (L.state !== f) return u(a, C ? d : null, j), d = N.event = L.event, j = r(a, L.options, N.options), L.runner;
                                    A(a, j)
                                }
                            }
                        } else A(a, j);
                        var V = N.structural;
                        if (V || (V = "animate" === N.event && Object.keys(N.options.to || {}).length > 0 || c(N.options)), !V) return l(), E(a), w;
                        var W = (L.counter || 0) + 1;
                        return N.counter = W, H(a, e, N), h.$$postDigest(function() {
                            var b = I.get(m),
                                e = !b;
                            b = b || {};
                            var g = a.parent() || [],
                                h = g.length > 0 && ("animate" === b.event || b.structural || c(b.options));
                            if (e || b.counter !== W || !h) return e && (Z(a, j), o(a, j)), (e || C && b.event !== d) && (j.domOperation(), w.end()), void(h || E(a));
                            d = !b.structural && c(b.options, !0) ? "setClass" : b.event, H(a, f);
                            var i = q(a, d, b.options);
                            i.done(function(b) {
                                l(!b);
                                var c = I.get(m);
                                c && c.counter === W && E(t(a)), k(w, d, "close", {})
                            }), w.setHost(i), k(w, d, "start", {})
                        }), w
                    }

                    function D(a) {
                        var b = t(a),
                            c = b.querySelectorAll("[" + Aa + "]");
                        P(c, function(a) {
                            var b = parseInt(a.getAttribute(Aa)),
                                c = I.get(a);
                            switch (b) {
                                case f:
                                    c.runner.end();
                                case e:
                                    c && I.remove(a)
                            }
                        })
                    }

                    function E(a) {
                        var b = t(a);
                        b.removeAttribute(Aa), I.remove(b)
                    }

                    function F(a, b) {
                        return t(a) === t(b)
                    }

                    function G(a, b, c) {
                        var d, e = O(l[0].body),
                            f = F(a, e) || "HTML" === a[0].nodeName,
                            g = F(a, k),
                            h = !1,
                            i = a.data(Ba);
                        for (i && (b = i); b && b.length;) {
                            g || (g = F(b, k));
                            var j = b[0];
                            if (j.nodeType !== X) break;
                            var m = I.get(j) || {};
                            if (h || (h = m.structural || J.get(j)), T(d) || d === !0) {
                                var n = b.data(ba);
                                U(n) && (d = n)
                            }
                            if (h && d === !1) break;
                            g || (g = F(b, k), g || (i = b.data(Ba), i && (b = i))), f || (f = F(b, e)), b = b.parent()
                        }
                        var o = !h || d;
                        return o && g && f
                    }

                    function H(a, b, c) {
                        c = c || {}, c.state = b;
                        var d = t(a);
                        d.setAttribute(Aa, b);
                        var e = I.get(d),
                            f = e ? N(e, c) : c;
                        I.put(d, f)
                    }
                    var I = new p,
                        J = new p,
                        K = null,
                        L = h.$watch(function() {
                            return 0 === w.totalPendingRequests
                        }, function(a) {
                            a && (L(), h.$$postDigest(function() {
                                h.$$postDigest(function() {
                                    null === K && (K = !0)
                                })
                            }))
                        }),
                        M = {},
                        V = a.classNameFilter(),
                        Y = V ? function(a) {
                            return V.test(a)
                        } : function() {
                            return !0
                        },
                        Z = m(x);
                    return {
                        on: function(a, b, c) {
                            var d = j(b);
                            M[a] = M[a] || [], M[a].push({
                                node: d,
                                callback: c
                            })
                        },
                        off: function(a, b, c) {
                            function d(a, b, c) {
                                var d = j(b);
                                return a.filter(function(a) {
                                    var b = a.node === d && (!c || a.callback === c);
                                    return !b
                                })
                            }
                            var e = M[a];
                            e && (M[a] = 1 === arguments.length ? null : d(e, b, c))
                        },
                        pin: function(a, b) {
                            d(W(a), "element", "not an element"), d(W(b), "parentElement", "not an element"), a.data(Ba, b)
                        },
                        push: function(a, b, c, d) {
                            return c = c || {}, c.domOperation = d, C(a, b, c)
                        },
                        enabled: function(a, b) {
                            var c = arguments.length;
                            if (0 === c) b = !!K;
                            else {
                                var d = W(a);
                                if (d) {
                                    var e = t(a),
                                        f = J.get(e);
                                    1 === c ? b = !f : (b = !!b, b ? f && J.remove(e) : J.put(e, !0))
                                } else b = K = !!a
                            }
                            return b
                        }
                    }
                }]
            }],
            Da = ["$$rAF", function(a) {
                function b(b) {
                    c.push(b), c.length > 1 || a(function() {
                        for (var a = 0; a < c.length; a++) c[a]();
                        c = []
                    })
                }
                var c = [];
                return function() {
                    var a = !1;
                    return b(function() {
                            a = !0
                        }),
                        function(c) {
                            a ? c() : b(c)
                        }
                }
            }],
            Ea = ["$q", "$sniffer", "$$animateAsyncRun", function(a, b, c) {
                function d(a) {
                    this.setHost(a), this._doneCallbacks = [], this._runInAnimationFrame = c(), this._state = 0
                }
                var e = 0,
                    f = 1,
                    g = 2;
                return d.chain = function(a, b) {
                    function c() {
                        return d === a.length ? void b(!0) : void a[d](function(a) {
                            return a === !1 ? void b(!1) : (d++, void c())
                        })
                    }
                    var d = 0;
                    c()
                }, d.all = function(a, b) {
                    function c(c) {
                        e = e && c, ++d === a.length && b(e)
                    }
                    var d = 0,
                        e = !0;
                    P(a, function(a) {
                        a.done(c)
                    })
                }, d.prototype = {
                    setHost: function(a) {
                        this.host = a || {}
                    },
                    done: function(a) {
                        this._state === g ? a() : this._doneCallbacks.push(a)
                    },
                    progress: M,
                    getPromise: function() {
                        if (!this.promise) {
                            var b = this;
                            this.promise = a(function(a, c) {
                                b.done(function(b) {
                                    b === !1 ? c() : a()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(a, b) {
                        return this.getPromise().then(a, b)
                    },
                    "catch": function(a) {
                        return this.getPromise()["catch"](a)
                    },
                    "finally": function(a) {
                        return this.getPromise()["finally"](a)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(a) {
                        var b = this;
                        b._state === e && (b._state = f, b._runInAnimationFrame(function() {
                            b._resolve(a)
                        }))
                    },
                    _resolve: function(a) {
                        this._state !== g && (P(this._doneCallbacks, function(b) {
                            b(a)
                        }), this._doneCallbacks.length = 0, this._state = g)
                    }
                }, d
            }],
            Fa = ["$animateProvider", function(a) {
                function b(a, b) {
                    a.data(h, b)
                }

                function c(a) {
                    a.removeData(h)
                }

                function d(a) {
                    return a.data(h)
                }
                var f = "ng-animate-ref",
                    g = this.drivers = [],
                    h = "$$animationRunner";
                this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(a, h, i, j, k, l) {
                    function p(a) {
                        function b(a) {
                            if (a.processed) return a;
                            a.processed = !0;
                            var c = a.domNode,
                                d = c.parentNode;
                            f.put(c, a);
                            for (var g; d;) {
                                if (g = f.get(d)) {
                                    g.processed || (g = b(g));
                                    break
                                }
                                d = d.parentNode
                            }
                            return (g || e).children.push(a), a
                        }

                        function c(a) {
                            var b, c = [],
                                d = [];
                            for (b = 0; b < a.children.length; b++) d.push(a.children[b]);
                            var e = d.length,
                                f = 0,
                                g = [];
                            for (b = 0; b < d.length; b++) {
                                var h = d[b];
                                0 >= e && (e = f, f = 0, c.push(g), g = []), g.push(h.fn), h.children.forEach(function(a) {
                                    f++, d.push(a)
                                }), e--
                            }
                            return g.length && c.push(g), c
                        }
                        var d, e = {
                                children: []
                            },
                            f = new k;
                        for (d = 0; d < a.length; d++) {
                            var g = a[d];
                            f.put(g.domNode, a[d] = {
                                domNode: g.domNode,
                                fn: g.fn,
                                children: []
                            })
                        }
                        for (d = 0; d < a.length; d++) b(a[d]);
                        return c(e)
                    }
                    var q = [],
                        r = m(a);
                    return function(k, m, s) {
                        function u(a) {
                            var b = "[" + f + "]",
                                c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b),
                                d = [];
                            return P(c, function(a) {
                                var b = a.getAttribute(f);
                                b && b.length && d.push(a)
                            }), d
                        }

                        function v(a) {
                            var b = [],
                                c = {};
                            P(a, function(a, d) {
                                var e = a.element,
                                    g = t(e),
                                    h = a.event,
                                    i = ["enter", "move"].indexOf(h) >= 0,
                                    j = a.structural ? u(g) : [];
                                if (j.length) {
                                    var k = i ? "to" : "from";
                                    P(j, function(a) {
                                        var b = a.getAttribute(f);
                                        c[b] = c[b] || {}, c[b][k] = {
                                            animationID: d,
                                            element: O(a)
                                        }
                                    })
                                } else b.push(a)
                            });
                            var d = {},
                                e = {};
                            return P(c, function(c, f) {
                                var g = c.from,
                                    h = c.to;
                                if (!g || !h) {
                                    var i = g ? g.animationID : h.animationID,
                                        j = i.toString();
                                    return void(d[j] || (d[j] = !0, b.push(a[i])))
                                }
                                var k = a[g.animationID],
                                    l = a[h.animationID],
                                    m = g.animationID.toString();
                                if (!e[m]) {
                                    var n = e[m] = {
                                        structural: !0,
                                        beforeStart: function() {
                                            k.beforeStart(), l.beforeStart()
                                        },
                                        close: function() {
                                            k.close(), l.close()
                                        },
                                        classes: w(k.classes, l.classes),
                                        from: k,
                                        to: l,
                                        anchors: []
                                    };
                                    n.classes.length ? b.push(n) : (b.push(k), b.push(l))
                                }
                                e[m].anchors.push({
                                    out: g.element,
                                    "in": h.element
                                })
                            }), b
                        }

                        function w(a, b) {
                            a = a.split(" "), b = b.split(" ");
                            for (var c = [], d = 0; d < a.length; d++) {
                                var e = a[d];
                                if ("ng-" !== e.substring(0, 3))
                                    for (var f = 0; f < b.length; f++)
                                        if (e === b[f]) {
                                            c.push(e);
                                            break
                                        }
                            }
                            return c.join(" ")
                        }

                        function x(a) {
                            for (var b = g.length - 1; b >= 0; b--) {
                                var c = g[b];
                                if (i.has(c)) {
                                    var d = i.get(c),
                                        e = d(a);
                                    if (e) return e
                                }
                            }
                        }

                        function y() {
                            k.addClass(aa), F && a.addClass(k, F)
                        }

                        function z(a, b) {
                            function c(a) {
                                d(a).setHost(b)
                            }
                            a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
                        }

                        function A() {
                            var a = d(k);
                            !a || "leave" === m && s.$$domOperationFired || a.end()
                        }

                        function B(b) {
                            k.off("$destroy", A), c(k), r(k, s), o(k, s), s.domOperation(), F && a.removeClass(k, F), k.removeClass(aa), D.complete(!b)
                        }
                        s = n(s);
                        var C = ["enter", "move", "leave"].indexOf(m) >= 0,
                            D = new j({
                                end: function() {
                                    B()
                                },
                                cancel: function() {
                                    B(!0)
                                }
                            });
                        if (!g.length) return B(), D;
                        b(k, D);
                        var E = e(k.attr("class"), e(s.addClass, s.removeClass)),
                            F = s.tempClasses;
                        return F && (E += " " + F, s.tempClasses = null), q.push({
                            element: k,
                            classes: E,
                            event: m,
                            structural: C,
                            options: s,
                            beforeStart: y,
                            close: B
                        }), k.on("$destroy", A), q.length > 1 ? D : (h.$$postDigest(function() {
                            var a = [];
                            P(q, function(b) {
                                d(b.element) ? a.push(b) : b.close()
                            }), q.length = 0;
                            var b = v(a),
                                c = [];
                            P(b, function(a) {
                                c.push({
                                    domNode: t(a.from ? a.from.element : a.element),
                                    fn: function() {
                                        a.beforeStart();
                                        var b, c = a.close,
                                            e = a.anchors ? a.from.element || a.to.element : a.element;
                                        if (d(e)) {
                                            var f = x(a);
                                            f && (b = f.start)
                                        }
                                        if (b) {
                                            var g = b();
                                            g.done(function(a) {
                                                c(!a)
                                            }), z(a, g)
                                        } else c()
                                    }
                                })
                            }), l(p(c))
                        }), D)
                    }
                }]
            }];
        b.module("ngAnimate", []).directive("ngAnimateChildren", pa).factory("$$rAFScheduler", oa).factory("$$AnimateRunner", Ea).factory("$$animateAsyncRun", Da).provider("$$animateQueue", Ca).provider("$$animation", Fa).provider("$animateCss", wa).provider("$$animateCssDriver", xa).provider("$$animateJs", ya).provider("$$animateJsDriver", za)
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d() {
            function a(a, b, d, e) {
                return function(f, h, i) {
                    var j = i.$normalize(b);
                    !c[j] || g(h, d) || i[j] || f.$watch(i[a], function(a) {
                        a = e ? !a : !!a, h.attr(b, a)
                    })
                }
            }
            var c = {
                ariaHidden: !0,
                ariaChecked: !0,
                ariaDisabled: !0,
                ariaRequired: !0,
                ariaInvalid: !0,
                ariaMultiline: !0,
                ariaValue: !0,
                tabindex: !0,
                bindKeypress: !0,
                bindRoleForClick: !0
            };
            this.config = function(a) {
                c = b.extend(c, a)
            }, this.$get = function() {
                return {
                    config: function(a) {
                        return c[a]
                    },
                    $$watchExpr: a
                }
            }
        }
        var e = b.module("ngAria", ["ng"]).provider("$aria", d),
            f = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "DETAILS", "SUMMARY"],
            g = function(a, b) {
                return -1 !== b.indexOf(a[0].nodeName) ? !0 : void 0
            };
        e.directive("ngShow", ["$aria", function(a) {
            return a.$$watchExpr("ngShow", "aria-hidden", [], !0)
        }]).directive("ngHide", ["$aria", function(a) {
            return a.$$watchExpr("ngHide", "aria-hidden", [], !1)
        }]).directive("ngModel", ["$aria", function(a) {
            function b(b, c, d) {
                return a.config(c) && !d.attr(b)
            }

            function c(a, b) {
                return !b.attr("role") && b.attr("type") === a && "INPUT" !== b[0].nodeName
            }

            function d(a, b) {
                var c = a.type,
                    d = a.role;
                return "checkbox" === (c || d) || "menuitemcheckbox" === d ? "checkbox" : "radio" === (c || d) || "menuitemradio" === d ? "radio" : "range" === c || "progressbar" === d || "slider" === d ? "range" : "textbox" === (c || d) || "TEXTAREA" === b[0].nodeName ? "multiline" : ""
            }
            return {
                restrict: "A",
                require: "?ngModel",
                priority: 200,
                compile: function(e, f) {
                    var g = d(f, e);
                    return {
                        pre: function(a, b, c, d) {
                            "checkbox" === g && "checkbox" !== c.type && (d.$isEmpty = function(a) {
                                return a === !1
                            })
                        },
                        post: function(d, e, f, h) {
                            function i() {
                                return h.$modelValue
                            }

                            function j() {
                                return l ? (l = !1, function(a) {
                                    var b = f.value == h.$viewValue;
                                    e.attr("aria-checked", b), e.attr("tabindex", 0 - !b)
                                }) : function(a) {
                                    e.attr("aria-checked", f.value == h.$viewValue)
                                }
                            }

                            function k() {
                                e.attr("aria-checked", !h.$isEmpty(h.$viewValue))
                            }
                            var l = b("tabindex", "tabindex", e);
                            switch (g) {
                                case "radio":
                                case "checkbox":
                                    c(g, e) && e.attr("role", g), b("aria-checked", "ariaChecked", e) && d.$watch(i, "radio" === g ? j() : k), l && e.attr("tabindex", 0);
                                    break;
                                case "range":
                                    if (c(g, e) && e.attr("role", "slider"), a.config("ariaValue")) {
                                        var m = !e.attr("aria-valuemin") && (f.hasOwnProperty("min") || f.hasOwnProperty("ngMin")),
                                            n = !e.attr("aria-valuemax") && (f.hasOwnProperty("max") || f.hasOwnProperty("ngMax")),
                                            o = !e.attr("aria-valuenow");
                                        m && f.$observe("min", function(a) {
                                            e.attr("aria-valuemin", a)
                                        }), n && f.$observe("max", function(a) {
                                            e.attr("aria-valuemax", a)
                                        }), o && d.$watch(i, function(a) {
                                            e.attr("aria-valuenow", a)
                                        })
                                    }
                                    l && e.attr("tabindex", 0);
                                    break;
                                case "multiline":
                                    b("aria-multiline", "ariaMultiline", e) && e.attr("aria-multiline", !0)
                            }
                            h.$validators.required && b("aria-required", "ariaRequired", e) && d.$watch(function() {
                                return h.$error.required
                            }, function(a) {
                                e.attr("aria-required", !!a)
                            }), b("aria-invalid", "ariaInvalid", e) && d.$watch(function() {
                                return h.$invalid
                            }, function(a) {
                                e.attr("aria-invalid", !!a)
                            })
                        }
                    }
                }
            }
        }]).directive("ngDisabled", ["$aria", function(a) {
            return a.$$watchExpr("ngDisabled", "aria-disabled", [])
        }]).directive("ngMessages", function() {
            return {
                restrict: "A",
                require: "?ngMessages",
                link: function(a, b, c, d) {
                    b.attr("aria-live") || b.attr("aria-live", "assertive")
                }
            }
        }).directive("ngClick", ["$aria", "$parse", function(a, b) {
            return {
                restrict: "A",
                compile: function(c, d) {
                    var e = b(d.ngClick, null, !0);
                    return function(b, c, d) {
                        g(c, f) || (a.config("bindRoleForClick") && !c.attr("role") && c.attr("role", "button"), a.config("tabindex") && !c.attr("tabindex") && c.attr("tabindex", 0), a.config("bindKeypress") && !d.ngKeypress && c.on("keypress", function(a) {
                            function c() {
                                e(b, {
                                    $event: a
                                })
                            }
                            var d = a.which || a.keyCode;
                            (32 === d || 13 === d) && b.$apply(c)
                        }))
                    }
                }
            }
        }]).directive("ngDblclick", ["$aria", function(a) {
            return function(b, c, d) {
                !a.config("tabindex") || c.attr("tabindex") || g(c, f) || c.attr("tabindex", 0)
            }
        }])
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a, c, d) {
            function e(a, d, e) {
                var g, h;
                e = e || {}, h = e.expires, g = b.isDefined(e.path) ? e.path : f, b.isUndefined(d) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", d = ""), b.isString(h) && (h = new Date(h));
                var i = encodeURIComponent(a) + "=" + encodeURIComponent(d);
                i += g ? ";path=" + g : "", i += e.domain ? ";domain=" + e.domain : "", i += h ? ";expires=" + h.toUTCString() : "", i += e.secure ? ";secure" : "";
                var j = i.length + 1;
                return j > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + j + " > 4096 bytes)!"), i
            }
            var f = d.baseHref(),
                g = a[0];
            return function(a, b, c) {
                g.cookie = e(a, b, c)
            }
        }
        b.module("ngCookies", ["ng"]).provider("$cookies", [function() {
            function a(a) {
                return a ? b.extend({}, d, a) : d
            }
            var d = this.defaults = {};
            this.$get = ["$$cookieReader", "$$cookieWriter", function(d, e) {
                return {
                    get: function(a) {
                        return d()[a]
                    },
                    getObject: function(a) {
                        var c = this.get(a);
                        return c ? b.fromJson(c) : c
                    },
                    getAll: function() {
                        return d()
                    },
                    put: function(b, c, d) {
                        e(b, c, a(d))
                    },
                    putObject: function(a, c, d) {
                        this.put(a, b.toJson(c), d)
                    },
                    remove: function(b, d) {
                        e(b, c, a(d))
                    }
                }
            }]
        }]), b.module("ngCookies").factory("$cookieStore", ["$cookies", function(a) {
            return {
                get: function(b) {
                    return a.getObject(b)
                },
                put: function(b, c) {
                    a.putObject(b, c)
                },
                remove: function(b) {
                    a.remove(b)
                }
            }
        }]), d.$inject = ["$document", "$log", "$browser"], b.module("ngCookies").provider("$$cookieWriter", function() {
            this.$get = d
        })
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a) {
            function b(a, b) {
                return a ? e(a) ? a.indexOf(b) >= 0 : a.hasOwnProperty(b) : void 0
            }
            return ["$animate", function(a) {
                return {
                    restrict: "AE",
                    transclude: "element",
                    terminal: !0,
                    require: "^^ngMessages",
                    link: function(c, d, f, g, h) {
                        var i, j = d[0],
                            k = f.ngMessage || f.when,
                            l = f.ngMessageExp || f.whenExp,
                            m = function(a) {
                                i = a ? e(a) ? a : a.split(/[\s,]+/) : null, g.reRender()
                            };
                        l ? (m(c.$eval(l)), c.$watchCollection(l, m)) : m(k);
                        var n, o;
                        g.register(j, o = {
                            test: function(a) {
                                return b(i, a)
                            },
                            attach: function() {
                                n || h(c, function(b) {
                                    a.enter(b, null, d), n = b;
                                    var c = n.$$attachId = g.getAttachId();
                                    n.on("$destroy", function() {
                                        n && n.$$attachId === c && (g.deregister(j), o.detach())
                                    })
                                })
                            },
                            detach: function() {
                                if (n) {
                                    var b = n;
                                    n = null, a.leave(b)
                                }
                            }
                        })
                    }
                }
            }]
        }
        var e = b.isArray,
            f = b.forEach,
            g = b.isString,
            h = b.element;
        b.module("ngMessages", []).directive("ngMessages", ["$animate", function(a) {
            function b(a, b) {
                return g(b) && 0 === b.length || c(a.$eval(b))
            }

            function c(a) {
                return g(a) ? a.length : !!a
            }
            var d = "ng-active",
                e = "ng-inactive";
            return {
                require: "ngMessages",
                restrict: "AE",
                controller: ["$element", "$scope", "$attrs", function(g, h, i) {
                    function j(a, b) {
                        for (var c = b, d = []; c && c !== a;) {
                            var e = c.$$ngMessageNode;
                            if (e && e.length) return r[e];
                            c.childNodes.length && -1 == d.indexOf(c) ? (d.push(c), c = c.childNodes[c.childNodes.length - 1]) : c = c.previousSibling || c.parentNode
                        }
                    }

                    function k(a, b, c) {
                        var d = r[c];
                        if (m.head) {
                            var e = j(a, b);
                            e ? (d.next = e.next, e.next = d) : (d.next = m.head, m.head = d)
                        } else m.head = d
                    }

                    function l(a, b, c) {
                        var d = r[c],
                            e = j(a, b);
                        e ? e.next = d.next : m.head = d.next
                    }
                    var m = this,
                        n = 0,
                        o = 0;
                    this.getAttachId = function() {
                        return o++
                    };
                    var p, q, r = this.messages = {};
                    this.render = function(j) {
                        j = j || {}, p = !1, q = j;
                        for (var k = b(h, i.ngMessagesMultiple) || b(h, i.multiple), l = [], n = {}, o = m.head, r = !1, s = 0; null != o;) {
                            s++;
                            var t = o.message,
                                u = !1;
                            r || f(j, function(a, b) {
                                if (!u && c(a) && t.test(b)) {
                                    if (n[b]) return;
                                    n[b] = !0, u = !0, t.attach()
                                }
                            }), u ? r = !k : l.push(t), o = o.next
                        }
                        f(l, function(a) {
                            a.detach()
                        }), l.length !== s ? a.setClass(g, d, e) : a.setClass(g, e, d)
                    }, h.$watchCollection(i.ngMessages || i["for"], m.render), this.reRender = function() {
                        p || (p = !0, h.$evalAsync(function() {
                            p && q && m.render(q)
                        }))
                    }, this.register = function(a, b) {
                        var c = n.toString();
                        r[c] = {
                            message: b
                        }, k(g[0], a, c), a.$$ngMessageNode = c, n++, m.reRender()
                    }, this.deregister = function(a) {
                        var b = a.$$ngMessageNode;
                        delete a.$$ngMessageNode, l(g[0], a, b), delete r[b], m.reRender()
                    }
                }]
            }
        }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function(a, b, c) {
            return {
                restrict: "AE",
                require: "^^ngMessages",
                link: function(d, e, f) {
                    var g = f.ngMessagesInclude || f.src;
                    a(g).then(function(a) {
                        c(a)(d, function(a) {
                            e.after(a);
                            var c = h(b[0].createComment(" ngMessagesInclude: " + g + " "));
                            e.after(c), e.remove()
                        })
                    })
                }
            }
        }]).directive("ngMessage", d("AE")).directive("ngMessageExp", d("A"))
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
        }

        function e(a, e) {
            if (!d(e)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', e);
            for (var f = e.split("."), h = 0, i = f.length; i > h && b.isDefined(a); h++) {
                var j = f[h];
                a = null !== a ? a[j] : c
            }
            return a
        }

        function f(a, c) {
            c = c || {}, b.forEach(c, function(a, b) {
                delete c[b]
            });
            for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
            return c
        }
        var g = b.$$minErr("$resource"),
            h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
        b.module("ngResource", ["ng"]).provider("$resource", function() {
            var a = /^https?:\/\/[^\/]*/,
                d = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                actions: {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                }
            }, this.$get = ["$http", "$q", function(h, i) {
                function j(a) {
                    return k(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                }

                function k(a, b) {
                    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
                }

                function l(a, b) {
                    this.template = a, this.defaults = p({}, d.defaults, b), this.urlParams = {}
                }

                function m(a, j, k, s) {
                    function t(a, b) {
                        var c = {};
                        return b = p({}, j, b), o(b, function(b, d) {
                            r(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                        }), c
                    }

                    function u(a) {
                        return a.resource
                    }

                    function v(a) {
                        f(a || {}, this)
                    }
                    var w = new l(a, s);
                    return k = p({}, d.defaults.actions, k), v.prototype.toJSON = function() {
                        var a = p({}, this);
                        return delete a.$promise, delete a.$resolved, a
                    }, o(k, function(a, d) {
                        var e = /^(POST|PUT|PATCH)$/i.test(a.method);
                        v[d] = function(j, k, l, m) {
                            var s, x, y, z = {};
                            switch (arguments.length) {
                                case 4:
                                    y = m, x = l;
                                case 3:
                                case 2:
                                    if (!r(k)) {
                                        z = j, s = k, x = l;
                                        break
                                    }
                                    if (r(j)) {
                                        x = j, y = k;
                                        break
                                    }
                                    x = k, y = l;
                                case 1:
                                    r(j) ? x = j : e ? s = j : z = j;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var A = this instanceof v,
                                B = A ? s : a.isArray ? [] : new v(s),
                                C = {},
                                D = a.interceptor && a.interceptor.response || u,
                                E = a.interceptor && a.interceptor.responseError || c;
                            o(a, function(a, b) {
                                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = q(a))
                            }), e && (C.data = s), w.setUrlParams(C, p({}, t(s, a.params || {}), z), a.url);
                            var F = h(C).then(function(c) {
                                var e = c.data,
                                    h = B.$promise;
                                if (e) {
                                    if (b.isArray(e) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", d, a.isArray ? "array" : "object", b.isArray(e) ? "array" : "object", C.method, C.url);
                                    a.isArray ? (B.length = 0, o(e, function(a) {
                                        "object" == typeof a ? B.push(new v(a)) : B.push(a)
                                    })) : (f(e, B), B.$promise = h)
                                }
                                return B.$resolved = !0, c.resource = B, c
                            }, function(a) {
                                return B.$resolved = !0, (y || n)(a), i.reject(a)
                            });
                            return F = F.then(function(a) {
                                var b = D(a);
                                return (x || n)(b, a.headers), b
                            }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
                        }, v.prototype["$" + d] = function(a, b, c) {
                            r(a) && (c = b, b = a, a = {});
                            var e = v[d].call(this, a, this, b, c);
                            return e.$promise || e
                        }
                    }), v.bind = function(b) {
                        return m(a, p({}, j, b), k)
                    }, v
                }
                var n = b.noop,
                    o = b.forEach,
                    p = b.extend,
                    q = b.copy,
                    r = b.isFunction;
                return l.prototype = {
                    setUrlParams: function(c, d, e) {
                        var f, h, i = this,
                            k = e || i.template,
                            l = "",
                            m = i.urlParams = {};
                        o(k.split(/\W/), function(a) {
                            if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(k) && (m[a] = !0)
                        }), k = k.replace(/\\:/g, ":"), k = k.replace(a, function(a) {
                            return l = a, ""
                        }), d = d || {}, o(i.urlParams, function(a, c) {
                            f = d.hasOwnProperty(c) ? d[c] : i.defaults[c], b.isDefined(f) && null !== f ? (h = j(f), k = k.replace(new RegExp(":" + c + "(\\W|$)", "g"), function(a, b) {
                                return h + b
                            })) : k = k.replace(new RegExp("(/?):" + c + "(\\W|$)", "g"), function(a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c
                            })
                        }), i.defaults.stripTrailingSlashes && (k = k.replace(/\/+$/, "") || "/"), k = k.replace(/\/\.(?=\w+($|\?))/, "."), c.url = l + k.replace(/\/\\\./, "/."), o(d, function(a, b) {
                            i.urlParams[b] || (c.params = c.params || {}, c.params[b] = a)
                        })
                    }
                }, m
            }]
        })
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d() {
            this.$get = ["$$sanitizeUri", function(a) {
                return function(b) {
                    var c = [];
                    return g(b, j(c, function(b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }]
        }

        function e(a) {
            var c = [],
                d = j(c, b.noop);
            return d.chars(a), c.join("")
        }

        function f(a, c) {
            var d, e = {},
                f = a.split(",");
            for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d]) : f[d]] = !0;
            return e
        }

        function g(a, c) {
            function d(a, d, f, g) {
                if (d = b.lowercase(d), z[d])
                    for (; t.last() && A[t.last()];) e("", t.last());
                y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d);
                var i = {};
                f.replace(n, function(a, b, c, d, e) {
                    var f = c || d || e || "";
                    i[b] = h(f)
                }), c.start && c.start(d, i, g)
            }

            function e(a, d) {
                var e, f = 0;
                if (d = b.lowercase(d))
                    for (f = t.length - 1; f >= 0 && t[f] != d; f--);
                if (f >= 0) {
                    for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                    t.length = f
                }
            }
            "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
            var f, g, i, j, t = [],
                u = a;
            for (t.last = function() {
                    return t[t.length - 1]
                }; a;) {
                if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) {
                        return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
                    }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
                u = a
            }
            e()
        }

        function h(a) {
            return a ? (I.innerHTML = a.replace(/</g, "&lt;"), I.textContent) : ""
        }

        function i(a) {
            return a.replace(/&/g, "&amp;").replace(t, function(a) {
                var b = a.charCodeAt(0),
                    c = a.charCodeAt(1);
                return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
            }).replace(u, function(a) {
                return "&#" + a.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function j(a, c) {
            var d = !1,
                e = b.bind(a, a.push);
            return {
                start: function(a, f, g) {
                    a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
                        var g = b.lowercase(f),
                            h = "img" === a && "src" === g || "background" === g;
                        H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
                    }), e(g ? "/>" : ">"))
                },
                end: function(a) {
                    a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
                },
                chars: function(a) {
                    d || e(i(a))
                }
            }
        }
        var k = b.$$minErr("$sanitize"),
            l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            m = /^<\/\s*([\w:-]+)[^>]*>/,
            n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            o = /^</,
            p = /^<\//,
            q = /<!--(.*?)-->/g,
            r = /<!DOCTYPE([^>]*?)>/i,
            s = /<!\[CDATA\[(.*?)]]>/g,
            t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            u = /([^\#-~| |!])/g,
            v = f("area,br,col,hr,img,wbr"),
            w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            x = f("rp,rt"),
            y = b.extend({}, x, w),
            z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            B = f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
            C = f("script,style"),
            D = b.extend({}, v, z, A, y, B),
            E = f("background,cite,href,longdesc,src,usemap,xlink:href"),
            F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            H = b.extend({}, E, G, F),
            I = document.createElement("pre");
        b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
            var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
                d = /^mailto:/i;
            return function(f, g) {
                function h(a) {
                    a && n.push(e(a))
                }

                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
                }
                if (!f) return f;
                for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }])
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return b.lowercase(a.nodeName || a[0] && a[0].nodeName)
        }

        function e(a, c, d) {
            f.directive(a, ["$parse", "$swipe", function(e, f) {
                var g = 75,
                    h = .3,
                    i = 30;
                return function(j, k, l) {
                    function m(a) {
                        if (!n) return !1;
                        var b = Math.abs(a.y - n.y),
                            d = (a.x - n.x) * c;
                        return o && g > b && d > 0 && d > i && h > b / d
                    }
                    var n, o, p = e(l[a]),
                        q = ["touch"];
                    b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
                        start: function(a, b) {
                            n = a, o = !0
                        },
                        cancel: function(a) {
                            o = !1
                        },
                        end: function(a, b) {
                            m(a) && j.$apply(function() {
                                k.triggerHandler(d), p(j, {
                                    $event: b
                                })
                            })
                        }
                    }, q)
                }
            }])
        }
        var f = b.module("ngTouch", []);
        f.factory("$swipe", [function() {
            function a(a) {
                var b = a.originalEvent || a,
                    c = b.touches && b.touches.length ? b.touches : [b],
                    d = b.changedTouches && b.changedTouches[0] || c[0];
                return {
                    x: d.clientX,
                    y: d.clientY
                }
            }

            function c(a, c) {
                var d = [];
                return b.forEach(a, function(a) {
                    var b = e[a][c];
                    b && d.push(b)
                }), d.join(" ")
            }
            var d = 10,
                e = {
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    }
                };
            return {
                bind: function(b, e, f) {
                    var g, h, i, j, k = !1;
                    f = f || ["mouse", "touch"], b.on(c(f, "start"), function(b) {
                        i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                    });
                    var l = c(f, "cancel");
                    l && b.on(l, function(a) {
                        k = !1, e.cancel && e.cancel(a)
                    }), b.on(c(f, "move"), function(b) {
                        if (k && i) {
                            var c = a(b);
                            if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
                        }
                    }), b.on(c(f, "end"), function(b) {
                        k && (k = !1, e.end && e.end(a(b), b))
                    })
                }
            }
        }]), f.config(["$provide", function(a) {
            a.decorator("ngClickDirective", ["$delegate", function(a) {
                return a.shift(), a
            }])
        }]), f.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(a, c, e) {
            function f(a, b, c, d) {
                return Math.abs(a - c) < q && Math.abs(b - d) < q
            }

            function g(a, b, c) {
                for (var d = 0; d < a.length; d += 2)
                    if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
                return !1
            }

            function h(a) {
                if (!(Date.now() - k > p)) {
                    var b = a.touches && a.touches.length ? a.touches : [a],
                        c = b[0].clientX,
                        e = b[0].clientY;
                    1 > c && 1 > e || m && m[0] === c && m[1] === e || (m && (m = null), "label" === d(a.target) && (m = [c, e]), g(l, c, e) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur()))
                }
            }

            function i(a) {
                var b = a.touches && a.touches.length ? a.touches : [a],
                    d = b[0].clientX,
                    e = b[0].clientY;
                l.push(d, e), c(function() {
                    for (var a = 0; a < l.length; a += 2)
                        if (l[a] == d && l[a + 1] == e) return void l.splice(a, a + 2)
                }, p, !1)
            }

            function j(a, b) {
                l || (e[0].addEventListener("click", h, !0), e[0].addEventListener("touchstart", i, !0), l = []), k = Date.now(), g(l, a, b)
            }
            var k, l, m, n = 750,
                o = 12,
                p = 2500,
                q = 25,
                r = "ng-click-active";
            return function(c, d, e) {
                function f() {
                    m = !1, d.removeClass(r)
                }
                var g, h, i, k, l = a(e.ngClick),
                    m = !1;
                d.on("touchstart", function(a) {
                    m = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(r), h = Date.now();
                    var b = a.originalEvent || a,
                        c = b.touches && b.touches.length ? b.touches : [b],
                        e = c[0];
                    i = e.clientX, k = e.clientY
                }), d.on("touchcancel", function(a) {
                    f()
                }), d.on("touchend", function(a) {
                    var c = Date.now() - h,
                        l = a.originalEvent || a,
                        p = l.changedTouches && l.changedTouches.length ? l.changedTouches : l.touches && l.touches.length ? l.touches : [l],
                        q = p[0],
                        r = q.clientX,
                        s = q.clientY,
                        t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
                    m && n > c && o > t && (j(r, s), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
                }), d.onclick = function(a) {}, d.on("click", function(a, b) {
                    c.$apply(function() {
                        l(c, {
                            $event: b || a
                        })
                    })
                }), d.on("mousedown", function(a) {
                    d.addClass(r)
                }), d.on("mousemove mouseup", function(a) {
                    d.removeClass(r)
                })
            }
        }]), e("ngSwipeLeft", -1, "swipeleft"), e("ngSwipeRight", 1, "swiperight")
    }(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(a, b, c) {
        "use strict";

        function d(a, b) {
            return R(new(R(function() {}, {
                prototype: a
            })), b)
        }

        function e(a) {
            return Q(arguments, function(b) {
                b !== a && Q(b, function(b, c) {
                    a.hasOwnProperty(c) || (a[c] = b)
                })
            }), a
        }

        function f(a, b) {
            var c = [];
            for (var d in a.path) {
                if (a.path[d] !== b.path[d]) break;
                c.push(a.path[d])
            }
            return c
        }

        function g(a) {
            if (Object.keys) return Object.keys(a);
            var b = [];
            return Q(a, function(a, c) {
                b.push(c)
            }), b
        }

        function h(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
            var c = a.length >>> 0,
                d = Number(arguments[2]) || 0;
            for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)
                if (d in a && a[d] === b) return d;
            return -1
        }

        function i(a, b, c, d) {
            var e, i = f(c, d),
                j = {},
                k = [];
            for (var l in i)
                if (i[l] && i[l].params && (e = g(i[l].params), e.length))
                    for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
            return R({}, j, b)
        }

        function j(a, b, c) {
            if (!c) {
                c = [];
                for (var d in a) c.push(d)
            }
            for (var e = 0; e < c.length; e++) {
                var f = c[e];
                if (a[f] != b[f]) return !1
            }
            return !0
        }

        function k(a, b) {
            var c = {};
            return Q(a, function(a) {
                c[a] = b[a]
            }), c
        }

        function l(a) {
            var b = {},
                c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return Q(c, function(c) {
                c in a && (b[c] = a[c])
            }), b
        }

        function m(a) {
            var b = {},
                c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var d in a) - 1 == h(c, d) && (b[d] = a[d]);
            return b
        }

        function n(a, b) {
            var c = P(a),
                d = c ? [] : {};
            return Q(a, function(a, e) {
                b(a, e) && (d[c ? d.length : e] = a)
            }), d
        }

        function o(a, b) {
            var c = P(a) ? [] : {};
            return Q(a, function(a, d) {
                c[d] = b(a, d)
            }), c
        }

        function p(a, b) {
            var d = 1,
                f = 2,
                i = {},
                j = [],
                k = i,
                l = R(a.when(i), {
                    $$promises: i,
                    $$values: i
                });
            this.study = function(i) {
                function n(a, c) {
                    if (s[c] !== f) {
                        if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                        if (s[c] = d, N(a)) q.push(c, [function() {
                            return b.get(a)
                        }], j);
                        else {
                            var e = b.annotate(a);
                            Q(e, function(a) {
                                a !== c && i.hasOwnProperty(a) && n(i[a], a)
                            }), q.push(c, a, e)
                        }
                        r.pop(), s[c] = f
                    }
                }

                function o(a) {
                    return O(a) && a.then && a.$$promises
                }
                if (!O(i)) throw new Error("'invocables' must be an object");
                var p = g(i || {}),
                    q = [],
                    r = [],
                    s = {};
                return Q(i, n), i = r = s = null,
                    function(d, f, g) {
                        function h() {
                            --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
                        }

                        function i(a) {
                            r.$$failure = a, n.reject(a)
                        }

                        function j(c, e, f) {
                            function j(a) {
                                l.reject(a), i(a)
                            }

                            function k() {
                                if (!L(r.$$failure)) try {
                                    l.resolve(b.invoke(e, g, t)), l.promise.then(function(a) {
                                        t[c] = a, h()
                                    }, j)
                                } catch (a) {
                                    j(a)
                                }
                            }
                            var l = a.defer(),
                                m = 0;
                            Q(f, function(a) {
                                s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function(b) {
                                    t[a] = b, --m || k()
                                }, j))
                            }), m || k(), s[c] = l.promise
                        }
                        if (o(d) && g === c && (g = f, f = d, d = null), d) {
                            if (!O(d)) throw new Error("'locals' must be an object")
                        } else d = k;
                        if (f) {
                            if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else f = l;
                        var n = a.defer(),
                            r = n.promise,
                            s = r.$$promises = {},
                            t = R({}, d),
                            u = 1 + q.length / 3,
                            v = !1;
                        if (L(f.$$failure)) return i(f.$$failure), r;
                        f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), R(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));
                        for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
                        return r
                    }
            }, this.resolve = function(a, b, c, d) {
                return this.study(a)(b, c, d)
            }
        }

        function q(a, b, c) {
            this.fromConfig = function(a, b, c) {
                return L(a.template) ? this.fromString(a.template, b) : L(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : L(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
            }, this.fromString = function(a, b) {
                return M(a) ? a(b) : a
            }, this.fromUrl = function(c, d) {
                return M(c) && (c = c(d)), null == c ? null : a.get(c, {
                    cache: b,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(a) {
                    return a.data
                })
            }, this.fromProvider = function(a, b, d) {
                return c.invoke(a, null, d || {
                    params: b
                })
            }
        }

        function r(a, b, e) {
            function f(b, c, d, e) {
                if (q.push(b), o[b]) return o[b];
                if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
                if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
                return p[b] = new U.Param(b, c, d, e), p[b]
            }

            function g(a, b, c, d) {
                var e = ["", ""],
                    f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!b) return f;
                switch (c) {
                    case !1:
                        e = ["(", ")" + (d ? "?" : "")];
                        break;
                    case !0:
                        f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];
                        break;
                    default:
                        e = ["(" + c + "|", ")?"]
                }
                return f + e[0] + b + e[1]
            }

            function h(e, f) {
                var g, h, i, j, k;
                return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = U.type(h) || d(U.type("string"), {
                    pattern: new RegExp(h, b.caseInsensitive ? "i" : c)
                })), {
                    id: g,
                    regexp: h,
                    segment: i,
                    type: j,
                    cfg: k
                }
            }
            b = R({
                params: {}
            }, O(b) ? b : {});
            var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                l = "^",
                m = 0,
                n = this.segments = [],
                o = e ? e.params : {},
                p = this.params = e ? e.params.$$new() : new U.ParamSet,
                q = [];
            this.source = a;
            for (var r, s, t;
                (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
            t = a.substring(m);
            var u = t.indexOf("?");
            if (u >= 0) {
                var v = this.sourceSearch = t.substring(u);
                if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0)
                    for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
            } else this.sourcePath = a, this.sourceSearch = "";
            l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
        }

        function s(a) {
            R(this, a)
        }

        function t() {
            function a(a) {
                return null != a ? a.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : a
            }

            function e(a) {
                return null != a ? a.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : a
            }

            function f() {
                return {
                    strict: p,
                    caseInsensitive: m
                }
            }

            function i(a) {
                return M(a) || P(a) && M(a[a.length - 1])
            }

            function j() {
                for (; w.length;) {
                    var a = w.shift();
                    if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    b.extend(u[a.name], l.invoke(a.def))
                }
            }

            function k(a) {
                R(this, a || {})
            }
            U = this;
            var l, m = !1,
                p = !0,
                q = !1,
                u = {},
                v = !0,
                w = [],
                x = {
                    string: {
                        encode: a,
                        decode: e,
                        is: function(a) {
                            return null == a || !L(a) || "string" == typeof a
                        },
                        pattern: /[^\/]*/
                    },
                    "int": {
                        encode: a,
                        decode: function(a) {
                            return parseInt(a, 10)
                        },
                        is: function(a) {
                            return L(a) && this.decode(a.toString()) === a
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(a) {
                            return a ? 1 : 0
                        },
                        decode: function(a) {
                            return 0 !== parseInt(a, 10)
                        },
                        is: function(a) {
                            return a === !0 || a === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(a) {
                            return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
                        },
                        decode: function(a) {
                            if (this.is(a)) return a;
                            var b = this.capture.exec(a);
                            return b ? new Date(b[1], b[2] - 1, b[3]) : c
                        },
                        is: function(a) {
                            return a instanceof Date && !isNaN(a.valueOf())
                        },
                        equals: function(a, b) {
                            return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: b.toJson,
                        decode: b.fromJson,
                        is: b.isObject,
                        equals: b.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: b.identity,
                        decode: b.identity,
                        equals: b.equals,
                        pattern: /.*/
                    }
                };
            t.$$getDefaultValue = function(a) {
                if (!i(a.value)) return a.value;
                if (!l) throw new Error("Injectable functions cannot be called at configuration time");
                return l.invoke(a.value)
            }, this.caseInsensitive = function(a) {
                return L(a) && (m = a), m
            }, this.strictMode = function(a) {
                return L(a) && (p = a), p
            }, this.defaultSquashPolicy = function(a) {
                if (!L(a)) return q;
                if (a !== !0 && a !== !1 && !N(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
                return q = a, a
            }, this.compile = function(a, b) {
                return new r(a, R(f(), b))
            }, this.isMatcher = function(a) {
                if (!O(a)) return !1;
                var b = !0;
                return Q(r.prototype, function(c, d) {
                    M(c) && (b = b && L(a[d]) && M(a[d]))
                }), b
            }, this.type = function(a, b, c) {
                if (!L(b)) return u[a];
                if (u.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
                return u[a] = new s(R({
                    name: a
                }, b)), c && (w.push({
                    name: a,
                    def: c
                }), v || j()), this
            }, Q(x, function(a, b) {
                u[b] = new s(R({
                    name: b
                }, a))
            }), u = d(u, {}), this.$get = ["$injector", function(a) {
                return l = a, v = !1, j(), Q(x, function(a, b) {
                    u[b] || (u[b] = new s(a))
                }), this
            }], this.Param = function(a, d, e, f) {
                function j(a) {
                    var b = O(a) ? g(a) : [],
                        c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
                    return c && (a = {
                        value: a
                    }), a.$$fn = i(a.value) ? a.value : function() {
                        return a.value
                    }, a
                }

                function k(c, d, e) {
                    if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");
                    return d ? d : c.type ? b.isString(c.type) ? u[c.type] : c.type instanceof s ? c.type : new s(c.type) : "config" === e ? u.any : u.string
                }

                function m() {
                    var b = {
                            array: "search" === f ? "auto" : !1
                        },
                        c = a.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return R(b, c, e).array
                }

                function p(a, b) {
                    var c = a.squash;
                    if (!b || c === !1) return !1;
                    if (!L(c) || null == c) return q;
                    if (c === !0 || N(c)) return c;
                    throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
                }

                function r(a, b, d, e) {
                    var f, g, i = [{
                        from: "",
                        to: d || b ? c : ""
                    }, {
                        from: null,
                        to: d || b ? c : ""
                    }];
                    return f = P(a.replace) ? a.replace : [], N(e) && f.push({
                        from: e,
                        to: c
                    }), g = o(f, function(a) {
                        return a.from
                    }), n(i, function(a) {
                        return -1 === h(g, a.from)
                    }).concat(f)
                }

                function t() {
                    if (!l) throw new Error("Injectable functions cannot be called at configuration time");
                    var a = l.invoke(e.$$fn);
                    if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
                    return a
                }

                function v(a) {
                    function b(a) {
                        return function(b) {
                            return b.from === a
                        }
                    }

                    function c(a) {
                        var c = o(n(x.replace, b(a)), function(a) {
                            return a.to
                        });
                        return c.length ? c[0] : a
                    }
                    return a = c(a), L(a) ? x.type.$normalize(a) : t()
                }

                function w() {
                    return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}"
                }
                var x = this;
                e = j(e), d = k(e, d, f);
                var y = m();
                d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");
                var z = e.value !== c,
                    A = p(e, z),
                    B = r(e, y, z, A);
                R(this, {
                    id: a,
                    type: d,
                    location: f,
                    array: y,
                    squash: A,
                    replace: B,
                    isOptional: z,
                    value: v,
                    dynamic: c,
                    config: e,
                    toString: w
                })
            }, k.prototype = {
                $$new: function() {
                    return d(this, R(new k, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var a = [], b = [], c = this, d = g(k.prototype); c;) b.push(c), c = c.$$parent;
                    return b.reverse(), Q(b, function(b) {
                        Q(g(b), function(b) {
                            -1 === h(a, b) && -1 === h(d, b) && a.push(b)
                        })
                    }), a
                },
                $$values: function(a) {
                    var b = {},
                        c = this;
                    return Q(c.$$keys(), function(d) {
                        b[d] = c[d].value(a && a[d])
                    }), b
                },
                $$equals: function(a, b) {
                    var c = !0,
                        d = this;
                    return Q(d.$$keys(), function(e) {
                        var f = a && a[e],
                            g = b && b[e];
                        d[e].type.equals(f, g) || (c = !1)
                    }), c
                },
                $$validates: function(a) {
                    var d, e, f, g, h, i = this.$$keys();
                    for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
                        if (g = e.type.$normalize(f), !e.type.is(g)) return !1;
                        if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1
                    }
                    return !0
                },
                $$parent: c
            }, this.ParamSet = k
        }

        function u(a, d) {
            function e(a) {
                var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
                return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
            }

            function f(a, b) {
                return a.replace(/\$(\$|\d{1,2})/, function(a, c) {
                    return b["$" === c ? 0 : Number(c)]
                })
            }

            function g(a, b, c) {
                if (!c) return !1;
                var d = a.invoke(b, b, {
                    $match: c
                });
                return L(d) ? d : !0
            }

            function h(d, e, f, g, h) {
                function m(a, b, c) {
                    return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a
                }

                function n(a) {
                    function b(a) {
                        var b = a(f, d);
                        return b ? (N(b) && d.replace().url(b), !0) : !1
                    }
                    if (!a || !a.defaultPrevented) {
                        p && d.url() === p;
                        p = c;
                        var e, g = j.length;
                        for (e = 0; g > e; e++)
                            if (b(j[e])) return;
                        k && b(k)
                    }
                }

                function o() {
                    return i = i || e.$on("$locationChangeSuccess", n)
                }
                var p, q = g.baseHref(),
                    r = d.url();
                return l || o(), {
                    sync: function() {
                        n()
                    },
                    listen: function() {
                        return o()
                    },
                    update: function(a) {
                        return a ? void(r = d.url()) : void(d.url() !== r && (d.url(r), d.replace()))
                    },
                    push: function(a, b, e) {
                        var f = a.format(b || {});
                        null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
                    },
                    href: function(c, e, f) {
                        if (!c.validates(e)) return null;
                        var g = a.html5Mode();
                        b.isObject(g) && (g = g.enabled), g = g && h.history;
                        var i = c.format(e);
                        if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;
                        var j = !g && i ? "/" : "",
                            k = d.port();
                        return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
                    }
                }
            }
            var i, j = [],
                k = null,
                l = !1;
            this.rule = function(a) {
                if (!M(a)) throw new Error("'rule' must be a function");
                return j.push(a), this
            }, this.otherwise = function(a) {
                if (N(a)) {
                    var b = a;
                    a = function() {
                        return b
                    }
                } else if (!M(a)) throw new Error("'rule' must be a function");
                return k = a, this
            }, this.when = function(a, b) {
                var c, h = N(b);
                if (N(a) && (a = d.compile(a)), !h && !M(b) && !P(b)) throw new Error("invalid 'handler' in when()");
                var i = {
                        matcher: function(a, b) {
                            return h && (c = d.compile(b), b = ["$match", function(a) {
                                return c.format(a)
                            }]), R(function(c, d) {
                                return g(c, b, a.exec(d.path(), d.search()))
                            }, {
                                prefix: N(a.prefix) ? a.prefix : ""
                            })
                        },
                        regex: function(a, b) {
                            if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return h && (c = b, b = ["$match", function(a) {
                                return f(c, a)
                            }]), R(function(c, d) {
                                return g(c, b, a.exec(d.path()))
                            }, {
                                prefix: e(a)
                            })
                        }
                    },
                    j = {
                        matcher: d.isMatcher(a),
                        regex: a instanceof RegExp
                    };
                for (var k in j)
                    if (j[k]) return this.rule(i[k](a, b));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(a) {
                a === c && (a = !0), l = a
            }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
        }

        function v(a, e) {
            function f(a) {
                return 0 === a.indexOf(".") || 0 === a.indexOf("^")
            }

            function m(a, b) {
                if (!a) return c;
                var d = N(a),
                    e = d ? a : a.name,
                    g = f(e);
                if (g) {
                    if (!b) throw new Error("No reference point given for path '" + e + "'");
                    b = m(b);
                    for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)
                        if ("" !== h[i] || 0 !== i) {
                            if ("^" !== h[i]) break;
                            if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                            k = k.parent
                        } else k = b;
                    h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
                }
                var l = z[e];
                return !l || !d && (d || l !== a && l.self !== a) ? c : l
            }

            function n(a, b) {
                A[a] || (A[a] = []), A[a].push(b)
            }

            function p(a) {
                for (var b = A[a] || []; b.length;) q(b.shift())
            }

            function q(b) {
                b = d(b, {
                    self: b,
                    resolve: b.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var c = b.name;
                if (!N(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (z.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");
                var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : N(b.parent) ? b.parent : O(b.parent) && N(b.parent.name) ? b.parent.name : "";
                if (e && !z[e]) return n(e, b.self);
                for (var f in C) M(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
                return z[c] = b, !b[B] && b.url && a.when(b.url, ["$match", "$stateParams", function(a, c) {
                    y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {
                        inherit: !0,
                        location: !1
                    })
                }]), p(c), b
            }

            function r(a) {
                return a.indexOf("*") > -1
            }

            function s(a) {
                for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
                return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length ? !1 : c.join("") === b.join("")
            }

            function t(a, b) {
                return N(a) && !L(b) ? C[a] : M(b) && N(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), C[a] = b, this) : this
            }

            function u(a, b) {
                return O(a) ? b = a : b.name = a, q(b), this
            }

            function v(a, e, f, h, l, n, p, q, t) {
                function u(b, c, d, f) {
                    var g = a.$broadcast("$stateNotFound", b, c, d);
                    if (g.defaultPrevented) return p.update(), D;
                    if (!g.retry) return null;
                    if (f.$retry) return p.update(), E;
                    var h = y.transition = e.when(g.retry);
                    return h.then(function() {
                        return h !== y.transition ? A : (b.options.$retry = !0, y.transitionTo(b.to, b.toParams, b.options))
                    }, function() {
                        return D
                    }), p.update(), h
                }

                function v(a, c, d, g, i, j) {
                    function m() {
                        var c = [];
                        return Q(a.views, function(d, e) {
                            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
                            g.$template = [function() {
                                return f.load(e, {
                                    view: d,
                                    locals: i.globals,
                                    params: n,
                                    notify: j.notify
                                }) || ""
                            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function(c) {
                                if (M(d.controllerProvider) || P(d.controllerProvider)) {
                                    var f = b.extend({}, g, i.globals);
                                    c.$$controller = h.invoke(d.controllerProvider, null, f)
                                } else c.$$controller = d.controller;
                                c.$$state = a, c.$$controllerAs = d.controllerAs, i[e] = c
                            }))
                        }), e.all(c).then(function() {
                            return i.globals
                        })
                    }
                    var n = d ? c : k(a.params.$$keys(), c),
                        o = {
                            $stateParams: n
                        };
                    i.resolve = l.resolve(a.resolve, o, i.resolve, a);
                    var p = [i.resolve.then(function(a) {
                        i.globals = a
                    })];
                    return g && p.push(g), e.all(p).then(m).then(function(a) {
                        return i
                    })
                }
                var A = e.reject(new Error("transition superseded")),
                    C = e.reject(new Error("transition prevented")),
                    D = e.reject(new Error("transition aborted")),
                    E = e.reject(new Error("transition failed"));
                return x.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, y = {
                    params: {},
                    current: x.self,
                    $current: x,
                    transition: null
                }, y.reload = function(a) {
                    return y.transitionTo(y.current, n, {
                        reload: a || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, y.go = function(a, b, c) {
                    return y.transitionTo(a, b, R({
                        inherit: !0,
                        relative: y.$current
                    }, c))
                }, y.transitionTo = function(b, c, f) {
                    c = c || {}, f = R({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, f || {});
                    var g, j = y.$current,
                        l = y.params,
                        o = j.path,
                        q = m(b, f.relative),
                        r = c["#"];
                    if (!L(q)) {
                        var s = {
                                to: b,
                                toParams: c,
                                options: f
                            },
                            t = u(s, j.self, l, f);
                        if (t) return t;
                        if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !L(q)) {
                            if (!f.relative) throw new Error("No such state '" + b + "'");
                            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                        }
                    }
                    if (q[B]) throw new Error("Cannot transition to abstract state '" + b + "'");
                    if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) return E;
                    c = q.params.$$values(c), b = q;
                    var z = b.path,
                        D = 0,
                        F = z[D],
                        G = x.locals,
                        H = [];
                    if (f.reload) {
                        if (N(f.reload) || O(f.reload)) {
                            if (O(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
                            var I = f.reload === !0 ? o[0] : m(f.reload);
                            if (f.reload && !I) throw new Error("No such reload state '" + (N(f.reload) ? f.reload : f.reload.name) + "'");
                            for (; F && F === o[D] && F !== I;) G = H[D] = F.locals, D++, F = z[D]
                        }
                    } else
                        for (; F && F === o[D] && F.ownParams.$$equals(c, l);) G = H[D] = F.locals, D++, F = z[D];
                    if (w(b, c, j, l, G, f)) return r && (c["#"] = r), y.params = c, S(y.params, n), S(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {
                        $$avoidResync: !0,
                        replace: "replace" === f.location
                    }), p.update(!0)), y.transition = null, e.when(y.current);
                    if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == y.transition && p.update(), C;
                    for (var J = e.when(G), K = D; K < z.length; K++, F = z[K]) G = H[K] = d(G), J = v(F, c, F === b, J, G, f);
                    var M = y.transition = J.then(function() {
                        var d, e, g;
                        if (y.transition !== M) return A;
                        for (d = o.length - 1; d >= D; d--) g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                        for (d = D; d < z.length; d++) e = z[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                        return y.transition !== M ? A : (y.$current = b, y.current = b.self, y.params = c, S(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === f.location
                        }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(!0), y.current)
                    }, function(d) {
                        return y.transition !== M ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || p.update(), e.reject(d))
                    });
                    return M
                }, y.is = function(a, b, d) {
                    d = R({
                        relative: y.$current
                    }, d || {});
                    var e = m(a, d.relative);
                    return L(e) ? y.$current !== e ? !1 : b ? j(e.params.$$values(b), n) : !0 : c
                }, y.includes = function(a, b, d) {
                    if (d = R({
                            relative: y.$current
                        }, d || {}), N(a) && r(a)) {
                        if (!s(a)) return !1;
                        a = y.$current.name
                    }
                    var e = m(a, d.relative);
                    return L(e) ? L(y.$current.includes[e.name]) ? b ? j(e.params.$$values(b), n, g(b)) : !0 : !1 : c
                }, y.href = function(a, b, d) {
                    d = R({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: y.$current
                    }, d || {});
                    var e = m(a, d.relative);
                    if (!L(e)) return null;
                    d.inherit && (b = i(n, b || {}, y.$current, e));
                    var f = e && d.lossy ? e.navigable : e;
                    return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {
                        absolute: d.absolute
                    }) : null
                }, y.get = function(a, b) {
                    if (0 === arguments.length) return o(g(z), function(a) {
                        return z[a].self
                    });
                    var c = m(a, b || y.$current);
                    return c && c.self ? c.self : null
                }, y
            }

            function w(a, b, c, d, e, f) {
                function g(a, b, c) {
                    function d(b) {
                        return "search" != a.params[b].location
                    }
                    var e = a.params.$$keys().filter(d),
                        f = l.apply({}, [a.params].concat(e)),
                        g = new U.ParamSet(f);
                    return g.$$equals(b, c)
                }
                return !f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b)) ? !0 : void 0
            }
            var x, y, z = {},
                A = {},
                B = "abstract",
                C = {
                    parent: function(a) {
                        if (L(a.parent) && a.parent) return m(a.parent);
                        var b = /^(.+)\.[^.]+$/.exec(a.name);
                        return b ? m(b[1]) : x
                    },
                    data: function(a) {
                        return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data
                    },
                    url: function(a) {
                        var b = a.url,
                            c = {
                                params: a.params || {}
                            };
                        if (N(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c);
                        if (!b || e.isMatcher(b)) return b;
                        throw new Error("Invalid url '" + b + "' in state '" + a + "'")
                    },
                    navigable: function(a) {
                        return a.url ? a : a.parent ? a.parent.navigable : null
                    },
                    ownParams: function(a) {
                        var b = a.url && a.url.params || new U.ParamSet;
                        return Q(a.params || {}, function(a, c) {
                            b[c] || (b[c] = new U.Param(c, null, a, "config"))
                        }), b
                    },
                    params: function(a) {
                        var b = l(a.ownParams, a.ownParams.$$keys());
                        return a.parent && a.parent.params ? R(a.parent.params.$$new(), b) : new U.ParamSet
                    },
                    views: function(a) {
                        var b = {};
                        return Q(L(a.views) ? a.views : {
                            "": a
                        }, function(c, d) {
                            d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
                        }), b
                    },
                    path: function(a) {
                        return a.parent ? a.parent.path.concat(a) : []
                    },
                    includes: function(a) {
                        var b = a.parent ? R({}, a.parent.includes) : {};
                        return b[a.name] = !0, b
                    },
                    $delegates: {}
                };
            x = q({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function w() {
            function a(a, b) {
                return {
                    load: function(a, c) {
                        var d, e = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return c = R(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d
                    }
                }
            }
            this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
        }

        function x() {
            var a = !1;
            this.useAnchorScroll = function() {
                a = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(b, c) {
                return a ? b : function(a) {
                    return c(function() {
                        a[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function y(a, c, d, e) {
            function f() {
                return c.has ? function(a) {
                    return c.has(a) ? c.get(a) : null
                } : function(a) {
                    try {
                        return c.get(a)
                    } catch (b) {
                        return null
                    }
                }
            }

            function g(a, c) {
                function d(a) {
                    return 1 === V && W >= 4 ? !!j.enabled(a) : 1 === V && W >= 2 ? !!j.enabled() : !!i
                }
                var e = {
                    enter: function(a, b, c) {
                        b.after(a), c()
                    },
                    leave: function(a, b) {
                        a.remove(), b()
                    }
                };
                if (a.noanimation) return e;
                if (j) return {
                    enter: function(a, c, f) {
                        d(a) ? b.version.minor > 2 ? j.enter(a, null, c).then(f) : j.enter(a, null, c, f) : e.enter(a, c, f)
                    },
                    leave: function(a, c) {
                        d(a) ? b.version.minor > 2 ? j.leave(a).then(c) : j.leave(a, c) : e.leave(a, c)
                    }
                };
                if (i) {
                    var f = i && i(c, a);
                    return {
                        enter: function(a, b, c) {
                            f.enter(a, null, b), c()
                        },
                        leave: function(a, b) {
                            f.leave(a), b()
                        }
                    }
                }
                return e
            }
            var h = f(),
                i = h("$animator"),
                j = h("$animate"),
                k = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(c, f, h) {
                        return function(c, f, i) {
                            function j() {
                                function a() {
                                    b && b.remove(), c && c.$destroy()
                                }
                                var b = l,
                                    c = n;
                                c && (c._willBeDestroyed = !0), m ? (r.leave(m, function() {
                                    a(), l = null
                                }), l = m) : (a(), l = null), m = null, n = null
                            }

                            function k(g) {
                                var k, l = A(c, i, f, e),
                                    s = l && a.$current && a.$current.locals[l];
                                if ((g || s !== o) && !c._willBeDestroyed) {
                                    k = c.$new(), o = a.$current.locals[l], k.$emit("$viewContentLoading", l);
                                    var t = h(k, function(a) {
                                        r.enter(a, f, function() {
                                            n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                                        }), j()
                                    });
                                    m = t, n = k, n.$emit("$viewContentLoaded", l), n.$eval(p)
                                }
                            }
                            var l, m, n, o, p = i.onload || "",
                                q = i.autoscroll,
                                r = g(i, c);
                            c.$on("$stateChangeSuccess", function() {
                                k(!1)
                            }), k(!0)
                        }
                    }
                };
            return k
        }

        function z(a, b, c, d) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(e) {
                    var f = e.html();
                    return function(e, g, h) {
                        var i = c.$current,
                            j = A(e, h, g, d),
                            k = i && i.locals[j];
                        if (k) {
                            g.data("$uiView", {
                                name: j,
                                state: k.$$state
                            }), g.html(k.$template ? k.$template : f);
                            var l = a(g.contents());
                            if (k.$$controller) {
                                k.$scope = e, k.$element = g;
                                var m = b(k.$$controller, k);
                                k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
                            }
                            l(e)
                        }
                    }
                }
            }
        }

        function A(a, b, c, d) {
            var e = d(b.uiView || b.name || "")(a),
                f = c.inheritedData("$uiView");
            return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
        }

        function B(a, b) {
            var c, d = a.match(/^\s*({[^}]*})\s*$/);
            if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
            return {
                state: c[1],
                paramExpr: c[3] || null
            }
        }

        function C(a) {
            var b = a.parent().inheritedData("$uiView");
            return b && b.state && b.state.name ? b.state : void 0
        }

        function D(a) {
            var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
                c = "FORM" === a[0].nodeName;
            return {
                attr: c ? "action" : b ? "xlink:href" : "href",
                isAnchor: "A" === a.prop("tagName").toUpperCase(),
                clickable: !c
            }
        }

        function E(a, b, c, d, e) {
            return function(f) {
                var g = f.which || f.button,
                    h = e();
                if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
                    var i = c(function() {
                        b.go(h.state, h.params, h.options)
                    });
                    f.preventDefault();
                    var j = d.isAnchor && !h.href ? 1 : 0;
                    f.preventDefault = function() {
                        j-- <= 0 && c.cancel(i)
                    }
                }
            }
        }

        function F(a, b) {
            return {
                relative: C(a) || b.$current,
                inherit: !0
            }
        }

        function G(a, c) {
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(d, e, f, g) {
                    var h = B(f.uiSref, a.current.name),
                        i = {
                            state: h.state,
                            href: null,
                            params: null
                        },
                        j = D(e),
                        k = g[1] || g[0];
                    i.options = R(F(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});
                    var l = function(c) {
                        c && (i.params = b.copy(c)), i.href = a.href(h.state, i.params, i.options), k && k.$$addStateInfo(h.state, i.params), null !== i.href && f.$set(j.attr, i.href)
                    };
                    h.paramExpr && (d.$watch(h.paramExpr, function(a) {
                        a !== i.params && l(a)
                    }, !0), i.params = b.copy(d.$eval(h.paramExpr))), l(), j.clickable && e.bind("click", E(e, a, c, j, function() {
                        return i
                    }))
                }
            }
        }

        function H(a, b) {
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(c, d, e, f) {
                    function g(b) {
                        l.state = b[0], l.params = b[1], l.options = b[2], l.href = a.href(l.state, l.params, l.options), i && i.$$addStateInfo(l.state, l.params), l.href && e.$set(h.attr, l.href)
                    }
                    var h = D(d),
                        i = f[1] || f[0],
                        j = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
                        k = "[" + j.map(function(a) {
                            return a || "null"
                        }).join(", ") + "]",
                        l = {
                            state: null,
                            params: null,
                            options: null,
                            href: null
                        };
                    c.$watch(k, g, !0), g(c.$eval(k)), h.clickable && d.bind("click", E(d, a, b, h, function() {
                        return l
                    }))
                }
            }
        }

        function I(a, b, c) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", "$timeout", function(b, d, e, f) {
                    function g(b, c, e) {
                        var f = a.get(b, C(d)),
                            g = h(b, c);
                        p.push({
                            state: f || {
                                name: b
                            },
                            params: c,
                            hash: g
                        }), q[g] = e
                    }

                    function h(a, c) {
                        if (!N(a)) throw new Error("state should be a string");
                        return O(c) ? a + T(c) : (c = b.$eval(c), O(c) ? a + T(c) : a)
                    }

                    function i() {
                        for (var a = 0; a < p.length; a++) l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n)
                    }

                    function j(a, b) {
                        f(function() {
                            a.addClass(b)
                        })
                    }

                    function k(a, b) {
                        a.removeClass(b)
                    }

                    function l(b, c) {
                        return a.includes(b.name, c)
                    }

                    function m(b, c) {
                        return a.is(b.name, c)
                    }
                    var n, o, p = [],
                        q = {};
                    n = c(e.uiSrefActiveEq || "", !1)(b);
                    try {
                        o = b.$eval(e.uiSrefActive)
                    } catch (r) {}
                    o = o || c(e.uiSrefActive || "", !1)(b), O(o) && Q(o, function(c, d) {
                        if (N(c)) {
                            var e = B(c, a.current.name);
                            g(e.state, b.$eval(e.paramExpr), d)
                        }
                    }), this.$$addStateInfo = function(a, b) {
                        O(o) && p.length > 0 || (g(a, b, o), i())
                    }, b.$on("$stateChangeSuccess", i), i()
                }]
            }
        }

        function J(a) {
            var b = function(b, c) {
                return a.is(b, c)
            };
            return b.$stateful = !0, b
        }

        function K(a) {
            var b = function(b, c, d) {
                return a.includes(b, c, d)
            };
            return b.$stateful = !0, b
        }
        var L = b.isDefined,
            M = b.isFunction,
            N = b.isString,
            O = b.isObject,
            P = b.isArray,
            Q = b.forEach,
            R = b.extend,
            S = b.copy,
            T = b.toJson;
        b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", p), q.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", q);
        var U;
        r.prototype.concat = function(a, b) {
            var c = {
                caseInsensitive: U.caseInsensitive(),
                strict: U.strictMode(),
                squash: U.defaultSquashPolicy()
            };
            return new r(this.sourcePath + a + this.sourceSearch, R(c, b), this)
        }, r.prototype.toString = function() {
            return this.source
        }, r.prototype.exec = function(a, b) {
            function c(a) {
                function b(a) {
                    return a.split("").reverse().join("");
                }

                function c(a) {
                    return a.replace(/\\-/g, "-")
                }
                var d = b(a).split(/-(?!\\)/),
                    e = o(d, b);
                return o(e, c).reverse()
            }
            var d = this.regexp.exec(a);
            if (!d) return null;
            b = b || {};
            var e, f, g, h = this.parameters(),
                i = h.length,
                j = this.segments.length - 1,
                k = {};
            if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            var l, m;
            for (e = 0; j > e; e++) {
                for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
                m && l.array === !0 && (m = c(m)), L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
            }
            for (; i > e; e++) {
                for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
                L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
            }
            return k
        }, r.prototype.parameters = function(a) {
            return L(a) ? this.params[a] || null : this.$$paramNames
        }, r.prototype.validates = function(a) {
            return this.params.$$validates(a)
        }, r.prototype.format = function(a) {
            function b(a) {
                return encodeURIComponent(a).replace(/-/g, function(a) {
                    return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            a = a || {};
            var c = this.segments,
                d = this.parameters(),
                e = this.params;
            if (!this.validates(a)) return null;
            var f, g = !1,
                h = c.length - 1,
                i = d.length,
                j = c[0];
            for (f = 0; i > f; f++) {
                var k = h > f,
                    l = d[f],
                    m = e[l],
                    n = m.value(a[l]),
                    p = m.isOptional && m.type.equals(m.value(), n),
                    q = p ? m.squash : !1,
                    r = m.type.encode(n);
                if (k) {
                    var s = c[f + 1],
                        t = f + 1 === h;
                    if (q === !1) null != r && (j += P(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s;
                    else if (q === !0) {
                        var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        j += s.match(u)[1]
                    } else N(q) && (j += q + s);
                    t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1))
                } else {
                    if (null == r || p && q !== !1) continue;
                    if (P(r) || (r = [r]), 0 === r.length) continue;
                    r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
                }
            }
            return j
        }, s.prototype.is = function(a, b) {
            return !0
        }, s.prototype.encode = function(a, b) {
            return a
        }, s.prototype.decode = function(a, b) {
            return a
        }, s.prototype.equals = function(a, b) {
            return a == b
        }, s.prototype.$subPattern = function() {
            var a = this.pattern.toString();
            return a.substr(1, a.length - 2)
        }, s.prototype.pattern = /.*/, s.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, s.prototype.$normalize = function(a) {
            return this.is(a) ? a : this.decode(a)
        }, s.prototype.$asArray = function(a, b) {
            function d(a, b) {
                function d(a, b) {
                    return function() {
                        return a[b].apply(a, arguments)
                    }
                }

                function e(a) {
                    return P(a) ? a : L(a) ? [a] : []
                }

                function f(a) {
                    switch (a.length) {
                        case 0:
                            return c;
                        case 1:
                            return "auto" === b ? a[0] : a;
                        default:
                            return a
                    }
                }

                function g(a) {
                    return !a
                }

                function h(a, b) {
                    return function(c) {
                        if (P(c) && 0 === c.length) return c;
                        c = e(c);
                        var d = o(c, a);
                        return b === !0 ? 0 === n(d, g).length : f(d)
                    }
                }

                function i(a) {
                    return function(b, c) {
                        var d = e(b),
                            f = e(c);
                        if (d.length !== f.length) return !1;
                        for (var g = 0; g < d.length; g++)
                            if (!a(d[g], f[g])) return !1;
                        return !0
                    }
                }
                this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b
            }
            if (!a) return this;
            if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
            return new d(this, a)
        }, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run(["$urlMatcherFactory", function(a) {}]), u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", u), v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function() {
            return {}
        }).provider("$state", v), w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x);
        var V = b.version.major,
            W = b.version.minor;
        y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], z.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), G.$inject = ["$state", "$timeout"], H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", G).directive("uiSrefActive", I).directive("uiSrefActiveEq", I).directive("uiState", H), J.$inject = ["$state"], K.$inject = ["$state"], b.module("ui.router.state").filter("isState", J).filter("includedByState", K)
    }(window, window.angular),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["angular"], b) : a.hasOwnProperty("angular") ? b(a.angular) : "object" == typeof exports && (module.exports = b(require("angular")))
    }(this, function(a) {
        "use strict";

        function b(b) {
            return function() {
                var c = "ngStorage-";
                this.setKeyPrefix = function(a) {
                    if ("string" != typeof a) throw new TypeError("[ngStorage] - " + b + "Provider.setKeyPrefix() expects a String.");
                    c = a
                };
                var d = a.toJson,
                    e = a.fromJson;
                this.setSerializer = function(a) {
                    if ("function" != typeof a) throw new TypeError("[ngStorage] - " + b + "Provider.setSerializer expects a function.");
                    d = a
                }, this.setDeserializer = function(a) {
                    if ("function" != typeof a) throw new TypeError("[ngStorage] - " + b + "Provider.setDeserializer expects a function.");
                    e = a
                }, this.get = function(a) {
                    return e(window[b].getItem(c + a))
                }, this.set = function(a, e) {
                    return window[b].setItem(c + a, d(e))
                }, this.$get = ["$rootScope", "$window", "$log", "$timeout", "$document", function(f, g, h, i, j) {
                    function k(a) {
                        var b;
                        try {
                            b = g[a]
                        } catch (c) {
                            b = !1
                        }
                        if (b && "localStorage" === a) {
                            var d = "__" + Math.round(1e7 * Math.random());
                            try {
                                localStorage.setItem(d, d), localStorage.removeItem(d)
                            } catch (c) {
                                b = !1
                            }
                        }
                        return b
                    }
                    var l, m, n = c.length,
                        o = k(b) || (h.warn("This browser does not support Web Storage!"), {
                            setItem: a.noop,
                            getItem: a.noop,
                            removeItem: a.noop
                        }),
                        p = {
                            $default: function(b) {
                                for (var c in b) a.isDefined(p[c]) || (p[c] = a.copy(b[c]));
                                return p.$sync(), p
                            },
                            $reset: function(a) {
                                for (var b in p) "$" === b[0] || delete p[b] && o.removeItem(c + b);
                                return p.$default(a)
                            },
                            $sync: function() {
                                for (var a, b = 0, d = o.length; d > b; b++)(a = o.key(b)) && c === a.slice(0, n) && (p[a.slice(n)] = e(o.getItem(a)))
                            },
                            $apply: function() {
                                var b;
                                if (m = null, !a.equals(p, l)) {
                                    b = a.copy(l), a.forEach(p, function(e, f) {
                                        a.isDefined(e) && "$" !== f[0] && (o.setItem(c + f, d(e)), delete b[f])
                                    });
                                    for (var e in b) o.removeItem(c + e);
                                    l = a.copy(p)
                                }
                            }
                        };
                    return p.$sync(), l = a.copy(p), f.$watch(function() {
                        m || (m = i(p.$apply, 100, !1))
                    }), g.addEventListener && g.addEventListener("storage", function(b) {
                        if (b.key) {
                            var d = j[0];
                            d.hasFocus && d.hasFocus() || c !== b.key.slice(0, n) || (b.newValue ? p[b.key.slice(n)] = e(b.newValue) : delete p[b.key.slice(n)], l = a.copy(p), f.$apply())
                        }
                    }), g.addEventListener && g.addEventListener("beforeunload", function() {
                        p.$apply()
                    }), p
                }]
            }
        }
        return a = a && a.module ? a : window.angular, a.module("ngStorage", []).provider("$localStorage", b("localStorage")).provider("$sessionStorage", b("sessionStorage"))
    }), angular.module("ui.alias", []).config(["$compileProvider", "uiAliasConfig", function(a, b) {
        "use strict";
        b = b || {}, angular.forEach(b, function(b, c) {
            angular.isString(b) && (b = {
                replace: !0,
                template: b
            }), a.directive(c, function() {
                return b
            })
        })
    }]), angular.module("ui.event", []).directive("uiEvent", ["$parse", function(a) {
        "use strict";
        return function(b, c, d) {
            var e = b.$eval(d.uiEvent);
            angular.forEach(e, function(d, e) {
                var f = a(d);
                c.bind(e, function(a) {
                    var c = Array.prototype.slice.call(arguments);
                    c = c.splice(1), f(b, {
                        $event: a,
                        $params: c
                    }), b.$$phase || b.$apply()
                })
            })
        }
    }]), angular.module("ui.format", []).filter("format", function() {
        "use strict";
        return function(a, b) {
            var c = a;
            if (angular.isString(c) && void 0 !== b)
                if (angular.isArray(b) || angular.isObject(b) || (b = [b]), angular.isArray(b)) {
                    var d = b.length,
                        e = function(a, c) {
                            return c = parseInt(c, 10), c >= 0 && d > c ? b[c] : a
                        };
                    c = c.replace(/\$([0-9]+)/g, e)
                } else angular.forEach(b, function(a, b) {
                    c = c.split(":" + b).join(a)
                });
            return c
        }
    }), angular.module("ui.highlight", []).filter("highlight", function() {
        "use strict";
        return function(a, b, c) {
            return a && (b || angular.isNumber(b)) ? (a = a.toString(), b = b.toString(), c ? a.split(b).join('<span class="ui-match">' + b + "</span>") : a.replace(new RegExp(b, "gi"), '<span class="ui-match">$&</span>')) : a
        }
    }), angular.module("ui.include", []).directive("uiInclude", ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, b, c, d) {
        "use strict";
        return {
            restrict: "ECA",
            terminal: !0,
            compile: function(e, f) {
                var g = f.uiInclude || f.src,
                    h = f.fragment || "",
                    i = f.onload || "",
                    j = f.autoscroll;
                return function(e, f) {
                    function k() {
                        var k = ++m,
                            o = e.$eval(g),
                            p = e.$eval(h);
                        o ? a.get(o, {
                            cache: b
                        }).success(function(a) {
                            if (k === m) {
                                l && l.$destroy(), l = e.$new();
                                var b;
                                b = p ? angular.element("<div/>").html(a).find(p) : angular.element("<div/>").html(a).contents(), f.html(b), d(b)(l), !angular.isDefined(j) || j && !e.$eval(j) || c(), l.$emit("$includeContentLoaded"), e.$eval(i)
                            }
                        }).error(function() {
                            k === m && n()
                        }) : n()
                    }
                    var l, m = 0,
                        n = function() {
                            l && (l.$destroy(), l = null), f.html("")
                        };
                    e.$watch(h, k), e.$watch(g, k)
                }
            }
        }
    }]), angular.module("ui.indeterminate", []).directive("uiIndeterminate", [function() {
        "use strict";
        return {
            compile: function(a, b) {
                return b.type && "checkbox" === b.type.toLowerCase() ? function(a, b, c) {
                    a.$watch(c.uiIndeterminate, function(a) {
                        b[0].indeterminate = !!a
                    })
                } : angular.noop
            }
        }
    }]), angular.module("ui.inflector", []).filter("inflector", function() {
        "use strict";

        function a(a) {
            return a = a.replace(/([A-Z])|([\-|\_])/g, function(a, b) {
                return " " + (b || "")
            }), a.replace(/\s\s+/g, " ").trim().toLowerCase().split(" ")
        }

        function b(a) {
            var b = [];
            return angular.forEach(a, function(a) {
                b.push(a.charAt(0).toUpperCase() + a.substr(1))
            }), b
        }
        var c = {
            humanize: function(c) {
                return b(a(c)).join(" ")
            },
            underscore: function(b) {
                return a(b).join("_")
            },
            variable: function(c) {
                return c = a(c), c = c[0] + b(c.slice(1)).join("")
            }
        };
        return function(a, b) {
            return b !== !1 && angular.isString(a) ? (b = b || "humanize", c[b](a)) : a
        }
    }), angular.module("ui.jq", []).value("uiJqConfig", {}).directive("uiJq", ["uiJqConfig", "$timeout", function(a, b) {
        "use strict";
        return {
            restrict: "A",
            compile: function(c, d) {
                if (!angular.isFunction(c[d.uiJq])) throw new Error('ui-jq: The "' + d.uiJq + '" function does not exist');
                var e = a && a[d.uiJq];
                return function(a, c, d) {
                    function f() {
                        var b = [];
                        return d.uiOptions ? (b = a.$eval("[" + d.uiOptions + "]"), angular.isObject(e) && angular.isObject(b[0]) && (b[0] = angular.extend({}, e, b[0]))) : e && (b = [e]), b
                    }

                    function g() {
                        b(function() {
                            c[d.uiJq].apply(c, f())
                        }, 0, !1)
                    }
                    d.ngModel && c.is("select,input,textarea") && c.bind("change", function() {
                        c.trigger("input")
                    }), d.uiRefresh && a.$watch(d.uiRefresh, function() {
                        g()
                    }), g()
                }
            }
        }
    }]), angular.module("ui.keypress", []).factory("keypressHelper", ["$parse", function(a) {
        "use strict";
        var b = {
                8: "backspace",
                9: "tab",
                13: "enter",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "delete"
            },
            c = function(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            };
        return function(d, e, f, g) {
            var h, i = [];
            h = e.$eval(g["ui" + c(d)]), angular.forEach(h, function(b, c) {
                var d, e;
                e = a(b), angular.forEach(c.split(" "), function(a) {
                    d = {
                        expression: e,
                        keys: {}
                    }, angular.forEach(a.split("-"), function(a) {
                        d.keys[a] = !0
                    }), i.push(d)
                })
            }), f.bind(d, function(a) {
                var c = !(!a.metaKey || a.ctrlKey),
                    f = !!a.altKey,
                    g = !!a.ctrlKey,
                    h = !!a.shiftKey,
                    j = a.keyCode;
                "keypress" === d && !h && j >= 97 && 122 >= j && (j -= 32), angular.forEach(i, function(d) {
                    var i = d.keys[b[j]] || d.keys[j.toString()],
                        k = !!d.keys.meta,
                        l = !!d.keys.alt,
                        m = !!d.keys.ctrl,
                        n = !!d.keys.shift;
                    i && k === c && l === f && m === g && n === h && e.$apply(function() {
                        d.expression(e, {
                            $event: a
                        })
                    })
                })
            })
        }
    }]), angular.module("ui.keypress").directive("uiKeydown", ["keypressHelper", function(a) {
        "use strict";
        return {
            link: function(b, c, d) {
                a("keydown", b, c, d)
            }
        }
    }]), angular.module("ui.keypress").directive("uiKeypress", ["keypressHelper", function(a) {
        "use strict";
        return {
            link: function(b, c, d) {
                a("keypress", b, c, d)
            }
        }
    }]), angular.module("ui.keypress").directive("uiKeyup", ["keypressHelper", function(a) {
        "use strict";
        return {
            link: function(b, c, d) {
                a("keyup", b, c, d)
            }
        }
    }]), angular.module("ui.mask", []).value("uiMaskConfig", {
        maskDefinitions: {
            9: /\d/,
            A: /[a-zA-Z]/,
            "*": /[a-zA-Z0-9]/
        },
        clearOnBlur: !0
    }).directive("uiMask", ["uiMaskConfig", "$parse", function(a, b) {
        "use strict";
        return {
            priority: 100,
            require: "ngModel",
            restrict: "A",
            compile: function() {
                var c = a;
                return function(a, d, e, f) {
                    function g(a) {
                        return angular.isDefined(a) ? (t(a), O ? (l(), m(), !0) : k()) : k()
                    }

                    function h(a) {
                        angular.isDefined(a) && (E = a, O && x())
                    }

                    function i(a) {
                        return O ? (H = p(a || ""), J = o(H), f.$setValidity("mask", J), J && H.length ? q(H) : void 0) : a
                    }

                    function j(a) {
                        return O ? (H = p(a || ""), J = o(H), f.$viewValue = H.length ? q(H) : "", f.$setValidity("mask", J), "" === H && e.required && f.$setValidity("required", !f.$error.required), J ? H : void 0) : a
                    }

                    function k() {
                        return O = !1, n(), angular.isDefined(Q) ? d.attr("placeholder", Q) : d.removeAttr("placeholder"), angular.isDefined(R) ? d.attr("maxlength", R) : d.removeAttr("maxlength"), d.val(f.$modelValue), f.$viewValue = f.$modelValue, !1
                    }

                    function l() {
                        H = L = p(f.$viewValue || ""), I = K = q(H), J = o(H);
                        var a = J && H.length ? I : "";
                        e.maxlength && d.attr("maxlength", 2 * C[C.length - 1]), d.attr("placeholder", E), d.val(a), f.$viewValue = a
                    }

                    function m() {
                        P || (d.bind("blur", u), d.bind("mousedown mouseup", v), d.bind("input keyup click focus", x), P = !0)
                    }

                    function n() {
                        P && (d.unbind("blur", u), d.unbind("mousedown", v), d.unbind("mouseup", v), d.unbind("input", x), d.unbind("keyup", x), d.unbind("click", x), d.unbind("focus", x), P = !1)
                    }

                    function o(a) {
                        return a.length ? a.length >= G : !0
                    }

                    function p(a) {
                        var b = "",
                            c = D.slice();
                        return a = a.toString(), angular.forEach(F, function(b) {
                            a = a.replace(b, "")
                        }), angular.forEach(a.split(""), function(a) {
                            c.length && c[0].test(a) && (b += a, c.shift())
                        }), b
                    }

                    function q(a) {
                        var b = "",
                            c = C.slice();
                        return angular.forEach(E.split(""), function(d, e) {
                            a.length && e === c[0] ? (b += a.charAt(0) || "_", a = a.substr(1), c.shift()) : b += d
                        }), b
                    }

                    function r(a) {
                        var b = e.placeholder;
                        return "undefined" != typeof b && b[a] ? b[a] : "_"
                    }

                    function s() {
                        return E.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
                    }

                    function t(a) {
                        var b = 0;
                        if (C = [], D = [], E = "", "string" == typeof a) {
                            G = 0;
                            var c = !1,
                                d = 0,
                                e = a.split("");
                            angular.forEach(e, function(a, e) {
                                S.maskDefinitions[a] ? (C.push(b), E += r(e - d), D.push(S.maskDefinitions[a]), b++, c || G++) : "?" === a ? (c = !0, d++) : (E += a, b++)
                            })
                        }
                        C.push(C.slice().pop() + 1), F = s(), O = C.length > 1 ? !0 : !1
                    }

                    function u() {
                        S.clearOnBlur && (M = 0, N = 0, J && 0 !== H.length || (I = "", d.val(""), a.$apply(function() {
                            f.$setViewValue("")
                        })))
                    }

                    function v(a) {
                        "mousedown" === a.type ? d.bind("mouseout", w) : d.unbind("mouseout", w)
                    }

                    function w() {
                        N = B(this), d.unbind("mouseout", w)
                    }

                    function x(b) {
                        b = b || {};
                        var c = b.which,
                            e = b.type;
                        if (16 !== c && 91 !== c) {
                            var g, h = d.val(),
                                i = K,
                                j = p(h),
                                k = L,
                                l = !1,
                                m = z(this) || 0,
                                n = M || 0,
                                o = m - n,
                                r = C[0],
                                s = C[j.length] || C.slice().shift(),
                                t = N || 0,
                                u = B(this) > 0,
                                v = t > 0,
                                w = h.length > i.length || t && h.length > i.length - t,
                                x = h.length < i.length || t && h.length === i.length - t,
                                D = c >= 37 && 40 >= c && b.shiftKey,
                                E = 37 === c,
                                F = 8 === c || "keyup" !== e && x && -1 === o,
                                G = 46 === c || "keyup" !== e && x && 0 === o && !v,
                                H = (E || F || "click" === e) && m > r;
                            if (N = B(this), !D && (!u || "click" !== e && "keyup" !== e)) {
                                if ("input" === e && x && !v && j === k) {
                                    for (; F && m > r && !y(m);) m--;
                                    for (; G && s > m && -1 === C.indexOf(m);) m++;
                                    var I = C.indexOf(m);
                                    j = j.substring(0, I) + j.substring(I + 1), l = !0
                                }
                                for (g = q(j), K = g, L = j, d.val(g), l && a.$apply(function() {
                                        f.$setViewValue(j)
                                    }), w && r >= m && (m = r + 1), H && m--, m = m > s ? s : r > m ? r : m; !y(m) && m > r && s > m;) m += H ? -1 : 1;
                                (H && s > m || w && !y(n)) && m++, M = m, A(this, m)
                            }
                        }
                    }

                    function y(a) {
                        return C.indexOf(a) > -1
                    }

                    function z(a) {
                        if (!a) return 0;
                        if (void 0 !== a.selectionStart) return a.selectionStart;
                        if (document.selection) {
                            a.focus();
                            var b = document.selection.createRange();
                            return b.moveStart("character", a.value ? -a.value.length : 0), b.text.length
                        }
                        return 0
                    }

                    function A(a, b) {
                        if (!a) return 0;
                        if (0 !== a.offsetWidth && 0 !== a.offsetHeight)
                            if (a.setSelectionRange) a.focus(), a.setSelectionRange(b, b);
                            else if (a.createTextRange) {
                            var c = a.createTextRange();
                            c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
                        }
                    }

                    function B(a) {
                        return a ? void 0 !== a.selectionStart ? a.selectionEnd - a.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
                    }
                    var C, D, E, F, G, H, I, J, K, L, M, N, O = !1,
                        P = !1,
                        Q = e.placeholder,
                        R = e.maxlength,
                        S = {};
                    e.uiOptions ? (S = a.$eval("[" + e.uiOptions + "]"), angular.isObject(S[0]) && (S = function(a, b) {
                        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (void 0 === b[c] ? b[c] = angular.copy(a[c]) : angular.extend(b[c], a[c]));
                        return b
                    }(c, S[0]))) : S = c, e.$observe("uiMask", g), e.$observe("placeholder", h);
                    var T = !1;
                    e.$observe("modelViewValue", function(a) {
                        "true" === a && (T = !0)
                    }), a.$watch(e.ngModel, function(c) {
                        if (T && c) {
                            var d = b(e.ngModel);
                            d.assign(a, f.$viewValue)
                        }
                    }), f.$formatters.push(i), f.$parsers.push(j), d.bind("mousedown mouseup", v), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                        if (null === this) throw new TypeError;
                        var b = Object(this),
                            c = b.length >>> 0;
                        if (0 === c) return -1;
                        var d = 0;
                        if (arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
                        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                            if (e in b && b[e] === a) return e;
                        return -1
                    })
                }
            }
        }
    }]), angular.module("ui.reset", []).value("uiResetConfig", null).directive("uiReset", ["uiResetConfig", function(a) {
        "use strict";
        var b = null;
        return void 0 !== a && (b = a), {
            require: "ngModel",
            link: function(a, c, d, e) {
                var f;
                f = angular.element('<a class="ui-reset" />'), c.wrap('<span class="ui-resetwrap" />').after(f), f.bind("click", function(c) {
                    c.preventDefault(), a.$apply(function() {
                        d.uiReset ? e.$setViewValue(a.$eval(d.uiReset)) : e.$setViewValue(b), e.$render()
                    })
                })
            }
        }
    }]), angular.module("ui.route", []).directive("uiRoute", ["$location", "$parse", function(a, b) {
        "use strict";
        return {
            restrict: "AC",
            scope: !0,
            compile: function(c, d) {
                var e;
                if (d.uiRoute) e = "uiRoute";
                else if (d.ngHref) e = "ngHref";
                else {
                    if (!d.href) throw new Error("uiRoute missing a route or href property on " + c[0]);
                    e = "href"
                }
                return function(c, d, f) {
                    function g(b) {
                        var d = b.indexOf("#");
                        d > -1 && (b = b.substr(d + 1)), (j = function() {
                            i(c, a.path().indexOf(b) > -1)
                        })()
                    }

                    function h(b) {
                        var d = b.indexOf("#");
                        d > -1 && (b = b.substr(d + 1)), (j = function() {
                            var d = new RegExp("^" + b + "$", ["i"]);
                            i(c, d.test(a.path()))
                        })()
                    }
                    var i = b(f.ngModel || f.routeModel || "$uiRoute").assign,
                        j = angular.noop;
                    switch (e) {
                        case "uiRoute":
                            f.uiRoute ? h(f.uiRoute) : f.$observe("uiRoute", h);
                            break;
                        case "ngHref":
                            f.ngHref ? g(f.ngHref) : f.$observe("ngHref", g);
                            break;
                        case "href":
                            g(f.href)
                    }
                    c.$on("$routeChangeSuccess", function() {
                        j()
                    }), c.$on("$stateChangeSuccess", function() {
                        j()
                    })
                }
            }
        }
    }]), angular.module("ui.scroll.jqlite", ["ui.scroll"]).service("jqLiteExtras", ["$log", "$window", function(a, b) {
        "use strict";
        return {
            registerFor: function(a) {
                var c, d, e, f, g, h, i;
                return d = angular.element.prototype.css, a.prototype.css = function(a, b) {
                    var c, e;
                    return e = this, c = e[0], c && 3 !== c.nodeType && 8 !== c.nodeType && c.style ? d.call(e, a, b) : void 0
                }, h = function(a) {
                    return a && a.document && a.location && a.alert && a.setInterval
                }, i = function(a, b, c) {
                    var d, e, f, g, i;
                    return d = a[0], i = {
                        top: ["scrollTop", "pageYOffset", "scrollLeft"],
                        left: ["scrollLeft", "pageXOffset", "scrollTop"]
                    }[b], e = i[0], g = i[1], f = i[2], h(d) ? angular.isDefined(c) ? d.scrollTo(a[f].call(a), c) : g in d ? d[g] : d.document.documentElement[e] : angular.isDefined(c) ? d[e] = c : d[e]
                }, b.getComputedStyle ? (f = function(a) {
                    return b.getComputedStyle(a, null)
                }, c = function(a, b) {
                    return parseFloat(b)
                }) : (f = function(a) {
                    return a.currentStyle
                }, c = function(a, b) {
                    var c, d, e, f, g, h, i;
                    return c = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, f = new RegExp("^(" + c + ")(?!px)[a-z%]+$", "i"), f.test(b) ? (i = a.style, d = i.left, g = a.runtimeStyle, h = g && g.left, g && (g.left = i.left), i.left = b, e = i.pixelLeft, i.left = d, h && (g.left = h), e) : parseFloat(b)
                }), e = function(a, b) {
                    var d, e, g, i, j, k, l, m, n, o, p, q, r;
                    return h(a) ? (d = document.documentElement[{
                        height: "clientHeight",
                        width: "clientWidth"
                    }[b]], {
                        base: d,
                        padding: 0,
                        border: 0,
                        margin: 0
                    }) : (r = {
                        width: [a.offsetWidth, "Left", "Right"],
                        height: [a.offsetHeight, "Top", "Bottom"]
                    }[b], d = r[0], l = r[1], m = r[2], k = f(a), p = c(a, k["padding" + l]) || 0, q = c(a, k["padding" + m]) || 0, e = c(a, k["border" + l + "Width"]) || 0, g = c(a, k["border" + m + "Width"]) || 0, i = k["margin" + l], j = k["margin" + m], n = c(a, i) || 0, o = c(a, j) || 0, {
                        base: d,
                        padding: p + q,
                        border: e + g,
                        margin: n + o
                    })
                }, g = function(a, b, c) {
                    var d, g, h;
                    return g = e(a, b), g.base > 0 ? {
                        base: g.base - g.padding - g.border,
                        outer: g.base,
                        outerfull: g.base + g.margin
                    }[c] : (d = f(a), h = d[b], (0 > h || null === h) && (h = a.style[b] || 0), h = parseFloat(h) || 0, {
                        base: h - g.padding - g.border,
                        outer: h,
                        outerfull: h + g.padding + g.border + g.margin
                    }[c])
                }, angular.forEach({
                    before: function(a) {
                        var b, c, d, e, f, g, h;
                        if (f = this, c = f[0], e = f.parent(), b = e.contents(), b[0] === c) return e.prepend(a);
                        for (d = g = 1, h = b.length - 1; h >= 1 ? h >= g : g >= h; d = h >= 1 ? ++g : --g)
                            if (b[d] === c) return void angular.element(b[d - 1]).after(a);
                        throw new Error("invalid DOM structure " + c.outerHTML)
                    },
                    height: function(a) {
                        var b;
                        return b = this, angular.isDefined(a) ? (angular.isNumber(a) && (a += "px"), d.call(b, "height", a)) : g(this[0], "height", "base")
                    },
                    outerHeight: function(a) {
                        return g(this[0], "height", a ? "outerfull" : "outer")
                    },
                    offset: function(a) {
                        var b, c, d, e, f, g;
                        if (f = this, arguments.length) {
                            if (void 0 === a) return f;
                            throw new Error("offset setter method is not implemented")
                        }
                        return b = {
                            top: 0,
                            left: 0
                        }, e = f[0], (c = e && e.ownerDocument) ? (d = c.documentElement, null != e.getBoundingClientRect && (b = e.getBoundingClientRect()), g = c.defaultView || c.parentWindow, {
                            top: b.top + (g.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                            left: b.left + (g.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
                        }) : void 0
                    },
                    scrollTop: function(a) {
                        return i(this, "top", a)
                    },
                    scrollLeft: function(a) {
                        return i(this, "left", a)
                    }
                }, function(b, c) {
                    return a.prototype[c] ? void 0 : a.prototype[c] = b
                })
            }
        }
    }]).run(["$log", "$window", "jqLiteExtras", function(a, b, c) {
        "use strict";
        return b.jQuery ? void 0 : c.registerFor(angular.element)
    }]), angular.module("ui.scroll", []).directive("uiScrollViewport", ["$log", function() {
        "use strict";
        return {
            controller: ["$scope", "$element", function(a, b) {
                return this.viewport = b, this
            }]
        }
    }]).directive("uiScroll", ["$log", "$injector", "$rootScope", "$timeout", function(a, b, c, d) {
        "use strict";
        return {
            require: ["?^uiScrollViewport"],
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(e, f, g) {
                return function(e, f, h, i) {
                    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da;
                    if (O = a.debug || a.log, P = h.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/), !P) throw new Error("Expected uiScroll in form of '_item_ in _datasource_' but got '" + h.uiScroll + "'");
                    if (M = P[1], x = P[2], I = function(a, b) {
                            var c;
                            if (a) return c = b.match(/^([\w]+)\.(.+)$/), c && 3 === c.length ? I(a[c[1]], c[2]) : a[b]
                        }, X = function(a, b, c, d) {
                            var e;
                            if (a && b && ((e = b.match(/^([\w]+)\.(.+)$/)) || -1 === b.indexOf("."))) return e && 3 === e.length ? (angular.isObject(a[e[1]]) || d || (a[e[1]] = {}), X(a[e[1]], e[2], c, d)) : angular.isObject(a[b]) || d ? a[b] = c : a[b] = c
                        }, w = I(e, x), L = function() {
                            return angular.isObject(w) && "function" == typeof w.get
                        }, !L() && (w = b.get(x), !L())) throw new Error("" + x + " is not a valid datasource");
                    return s = Math.max(3, +h.bufferSize || 10), r = function() {
                        return ba.outerHeight() * Math.max(.1, +h.padding || .1)
                    }, W = function(a) {
                        var b;
                        return null != (b = a[0].scrollHeight) ? b : a[0].document.documentElement.scrollHeight
                    }, t = null, g(e.$new(), function(a) {
                        var b, c, d, g, h, j;
                        if (g = a[0].localName, "dl" === g) throw new Error("ui-scroll directive does not support <" + a[0].localName + "> as a repeating tag: " + a[0].outerHTML);
                        return "li" !== g && "tr" !== g && (g = "div"), j = i[0] && i[0].viewport ? i[0].viewport : angular.element(window), j.css({
                            "overflow-y": "auto",
                            display: "block"
                        }), d = function(a) {
                            var b, c, d;
                            switch (a) {
                                case "tr":
                                    return d = angular.element("<table><tr><td><div></div></td></tr></table>"), b = d.find("div"), c = d.find("tr"), c.paddingHeight = function() {
                                        return b.height.apply(b, arguments)
                                    }, c;
                                default:
                                    return c = angular.element("<" + a + "></" + a + ">"), c.paddingHeight = c.height, c
                            }
                        }, c = function(a, b, c) {
                            return b[{
                                top: "before",
                                bottom: "after"
                            }[c]](a), {
                                paddingHeight: function() {
                                    return a.paddingHeight.apply(a, arguments)
                                },
                                insert: function(b) {
                                    return a[{
                                        top: "after",
                                        bottom: "before"
                                    }[c]](b)
                                }
                            }
                        }, h = c(d(g), f, "top"), b = c(d(g), f, "bottom"), e.$on("$destroy", a.remove), t = {
                            viewport: j,
                            topPadding: h.paddingHeight,
                            bottomPadding: b.paddingHeight,
                            append: b.insert,
                            prepend: h.insert,
                            bottomDataPos: function() {
                                return W(j) - b.paddingHeight()
                            },
                            topDataPos: function() {
                                return h.paddingHeight()
                            }
                        }
                    }), ba = t.viewport, ca = ba.scope() || c, _ = function(a) {
                        return j.topVisible = a.scope[M], j.topVisibleElement = a.element, j.topVisibleScope = a.scope, h.topVisible && X(ca, h.topVisible, j.topVisible), h.topVisibleElement && X(ca, h.topVisibleElement, j.topVisibleElement), h.topVisibleScope && X(ca, h.topVisibleScope, j.topVisibleScope), "function" == typeof w.topVisible ? w.topVisible(a) : void 0
                    }, N = function(a) {
                        return j.isLoading = a, h.isLoading && X(e, h.isLoading, a), "function" == typeof w.loading ? w.loading(a) : void 0
                    }, V = 0, H = 1, Q = 1, q = [], R = [], D = !1, o = !1, T = function(a, b) {
                        var c, d;
                        for (c = d = a; b >= a ? b > d : d > b; c = b >= a ? ++d : --d) q[c].scope.$destroy(), q[c].element.remove();
                        return q.splice(a, b - a)
                    }, S = function() {
                        return V++, H = 1, Q = 1, T(0, q.length), t.topPadding(0), t.bottomPadding(0), R = [], D = !1, o = !1, l(V)
                    }, p = function() {
                        return ba.scrollTop() + ba.outerHeight()
                    }, aa = function() {
                        return ba.scrollTop()
                    }, Y = function() {
                        return !D && t.bottomDataPos() < p() + r()
                    }, u = function() {
                        var a, b, c, d, e, f, g, h, i, j;
                        for (a = 0, g = 0, b = i = j = q.length - 1; 0 >= j ? 0 >= i : i >= 0; b = 0 >= j ? ++i : --i)
                            if (c = q[b], e = c.element.offset().top, f = h !== e, h = e, f && (d = c.element.outerHeight(!0)), t.bottomDataPos() - a - d > p() + r()) f && (a += d), g++, D = !1;
                            else {
                                if (f) break;
                                g++
                            }
                        return g > 0 ? (t.bottomPadding(t.bottomPadding() + a), T(q.length - g, q.length), Q -= g) : void 0
                    }, Z = function() {
                        return !o && t.topDataPos() > aa() - r()
                    }, v = function() {
                        var a, b, c, d, e, f, g, h, i;
                        for (g = 0, e = 0, h = 0, i = q.length; i > h; h++)
                            if (a = q[h], c = a.element.offset().top, d = f !== c, f = c, d && (b = a.element.outerHeight(!0)), t.topDataPos() + g + b < aa() - r()) d && (g += b), e++, o = !1;
                            else {
                                if (d) break;
                                e++
                            }
                        return e > 0 ? (t.topPadding(t.topPadding() + g), T(0, e), H += e) : void 0
                    }, C = function(a, b) {
                        return j.isLoading || N(!0), 1 === R.push(b) ? F(a) : void 0
                    }, J = function(a) {
                        return a.displayTemp = a.css("display"), a.css("display", "none")
                    }, $ = function(a) {
                        return a.hasOwnProperty("displayTemp") ? a.css("display", a.displayTemp) : void 0
                    }, K = function(a, b) {
                        var c, d, f;
                        return c = e.$new(), c[M] = b, d = a > H, c.$index = a, d && c.$index--, f = {
                            scope: c
                        }, g(c, function(b) {
                            return f.element = b, d ? a === Q ? (J(b), t.append(b), q.push(f)) : (q[a - H].element.after(b), q.splice(a - H + 1, 0, f)) : (J(b), t.prepend(b), q.unshift(f))
                        }), {
                            appended: d,
                            wrapper: f
                        }
                    }, m = function(a, b) {
                        var c;
                        return a ? t.bottomPadding(Math.max(0, t.bottomPadding() - b.element.outerHeight(!0))) : (c = t.topPadding() - b.element.outerHeight(!0), c >= 0 ? t.topPadding(c) : ba.scrollTop(ba.scrollTop() + b.element.outerHeight(!0)))
                    }, y = function(a, b) {
                        var c, d, e, f, g, h, i, j, k;
                        if (Y() ? C(a, !0) : Z() && C(a, !1), b && b(a), 0 === R.length) {
                            for (h = 0, k = [], i = 0, j = q.length; j > i; i++) {
                                if (c = q[i], e = c.element.offset().top, f = g !== e, g = e, f && (d = c.element.outerHeight(!0)), !(f && t.topDataPos() + h + d < aa())) {
                                    f && _(c);
                                    break
                                }
                                k.push(h += d)
                            }
                            return k
                        }
                    }, l = function(a, b, c) {
                        return b && b.length ? d(function() {
                            var d, e, f, g, h, i, j, k, l;
                            for (h = [], i = 0, k = b.length; k > i; i++) f = b[i], d = f.wrapper.element, $(d), e = d.offset().top, g !== e && (h.push(f), g = e);
                            for (j = 0, l = h.length; l > j; j++) f = h[j], m(f.appended, f.wrapper);
                            return y(a, c)
                        }) : y(a, c)
                    }, G = function(a, b) {
                        return l(a, b, function() {
                            return R.shift(), 0 === R.length ? N(!1) : F(a)
                        })
                    }, F = function(a) {
                        var b;
                        return b = R[0], b ? q.length && !Y() ? G(a) : w.get(Q, s, function(b) {
                            var c, d, f, g;
                            if (!(a && a !== V || e.$$destroyed)) {
                                if (d = [], b.length < s && (D = !0, t.bottomPadding(0)), b.length > 0)
                                    for (v(), f = 0, g = b.length; g > f; f++) c = b[f], d.push(K(++Q, c));
                                return G(a, d)
                            }
                        }) : q.length && !Z() ? G(a) : w.get(H - s, s, function(b) {
                            var c, d, f, g;
                            if (!(a && a !== V || e.$$destroyed)) {
                                if (d = [], b.length < s && (o = !0, t.topPadding(0)), b.length > 0)
                                    for (q.length && u(), c = f = g = b.length - 1; 0 >= g ? 0 >= f : f >= 0; c = 0 >= g ? ++f : --f) d.unshift(K(--H, b[c]));
                                return G(a, d)
                            }
                        })
                    }, U = function() {
                        return c.$$phase || j.isLoading ? void 0 : (l(), e.$apply())
                    }, da = function(a) {
                        var b, c;
                        return b = ba[0].scrollTop, c = ba[0].scrollHeight - ba[0].clientHeight, 0 === b && !o || b === c && !D ? a.preventDefault() : void 0
                    }, ba.bind("resize", U), ba.bind("scroll", U), ba.bind("mousewheel", da), e.$watch(w.revision, S), E = w.scope ? w.scope.$new() : e.$new(), e.$on("$destroy", function() {
                        var a, b, c;
                        for (b = 0, c = q.length; c > b; b++) a = q[b], a.scope.$destroy(), a.element.remove();
                        return ba.unbind("resize", U), ba.unbind("scroll", U), ba.unbind("mousewheel", da)
                    }), j = {}, j.isLoading = !1, n = function(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n;
                        if (d = [], angular.isArray(b))
                            if (b.length) {
                                if (1 === b.length && b[0] === a.scope[M]) return d;
                                for (f = a.scope.$index, h = f > H ? f - H : 1, c = i = 0, l = b.length; l > i; c = ++i) g = b[c], d.push(K(f + c, g));
                                for (T(h, h + 1), c = j = 0, m = q.length; m > j; c = ++j) e = q[c], e.scope.$index = H + c
                            } else
                                for (T(a.scope.$index - H, a.scope.$index - H + 1), Q--, c = k = 0, n = q.length; n > k; c = ++k) e = q[c], e.scope.$index = H + c;
                        return d
                    }, j.applyUpdates = function(a, b) {
                        var c, d, e, f, g, h;
                        if (c = [], V++, angular.isFunction(a))
                            for (g = q.slice(0), e = 0, f = g.length; f > e; e++) d = g[e], c.concat(c, n(d, a(d.scope[M], d.scope, d.element)));
                        else {
                            if (a % 1 !== 0) throw new Error("applyUpdates - " + a + " is not a valid index or outside of range");
                            0 <= (h = a - H - 1) && h < q.length && (c = n(q[a - H], b))
                        }
                        return l(V, c)
                    }, h.adapter && (k = I(e, h.adapter), k || (X(e, h.adapter, {}), k = I(e, h.adapter)), angular.extend(k, j), j = k), B = function(a, b) {
                        var c, d, e, f, g;
                        if (angular.isFunction(a))
                            for (d = function(b) {
                                    return a(b.scope)
                                }, e = 0, f = q.length; f > e; e++) c = q[e], d(c);
                        else 0 <= (g = a - H - 1) && g < q.length && (q[a - H - 1].scope[M] = b);
                        return null
                    }, z = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, m, n;
                        if (angular.isFunction(a)) {
                            for (d = [], g = 0, j = q.length; j > g; g++) c = q[g], d.unshift(c);
                            for (f = function(c) {
                                    return a(c.scope) ? (T(d.length - 1 - b, d.length - b), Q--) : void 0
                                }, b = h = 0, k = d.length; k > h; b = ++h) e = d[b], f(e)
                        } else 0 <= (n = a - H - 1) && n < q.length && (T(a - H - 1, a - H), Q--);
                        for (b = i = 0, m = q.length; m > i; b = ++i) c = q[b], c.scope.$index = H + b;
                        return l()
                    }, A = function(a, b) {
                        var c, d, e, f, g;
                        if (d = [], angular.isFunction(a)) throw new Error("not implemented - Insert with locator function");
                        for (0 <= (g = a - H - 1) && g < q.length && (d.push(K(a, b)), Q++), c = e = 0, f = q.length; f > e; c = ++e) b = q[c], b.scope.$index = H + c;
                        return l(null, d)
                    }, E.$on("insert.item", function(a, b, c) {
                        return A(b, c)
                    }), E.$on("update.items", function(a, b, c) {
                        return B(b, c)
                    }), E.$on("delete.items", function(a, b) {
                        return z(b)
                    })
                }
            }
        }
    }]), angular.module("ui.scrollfix", []).directive("uiScrollfix", ["$window", function(a) {
        "use strict";

        function b() {
            if (angular.isDefined(a.pageYOffset)) return a.pageYOffset;
            var b = document.compatMode && "BackCompat" !== document.compatMode ? document.documentElement : document.body;
            return b.scrollTop
        }
        return {
            require: "^?uiScrollfixTarget",
            link: function(c, d, e, f) {
                function g() {
                    var a = i ? e.uiScrollfix : d[0].offsetTop + j,
                        c = f ? k[0].scrollTop : b();
                    !d.hasClass("ui-scrollfix") && c > a ? (d.addClass("ui-scrollfix"), h = a) : d.hasClass("ui-scrollfix") && h > c && d.removeClass("ui-scrollfix")
                }
                var h, i = !0,
                    j = 0,
                    k = f && f.$element || angular.element(a);
                e.uiScrollfix ? "string" == typeof e.uiScrollfix && ("-" === e.uiScrollfix.charAt(0) ? (i = !1, j = -parseFloat(e.uiScrollfix.substr(1))) : "+" === e.uiScrollfix.charAt(0) && (i = !1, j = parseFloat(e.uiScrollfix.substr(1)))) : i = !1, h = i ? e.uiScrollfix : d[0].offsetTop + j, k.on("scroll", g), c.$on("$destroy", function() {
                    k.off("scroll", g)
                })
            }
        }
    }]).directive("uiScrollfixTarget", [function() {
        "use strict";
        return {
            controller: ["$element", function(a) {
                this.$element = a
            }]
        }
    }]), angular.module("ui.showhide", []).directive("uiShow", [function() {
        "use strict";
        return function(a, b, c) {
            a.$watch(c.uiShow, function(a) {
                a ? b.addClass("ui-show") : b.removeClass("ui-show")
            })
        }
    }]).directive("uiHide", [function() {
        "use strict";
        return function(a, b, c) {
            a.$watch(c.uiHide, function(a) {
                a ? b.addClass("ui-hide") : b.removeClass("ui-hide")
            })
        }
    }]).directive("uiToggle", [function() {
        "use strict";
        return function(a, b, c) {
            a.$watch(c.uiToggle, function(a) {
                a ? b.removeClass("ui-hide").addClass("ui-show") : b.removeClass("ui-show").addClass("ui-hide")
            })
        }
    }]), angular.module("ui.unique", []).filter("unique", ["$parse", function(a) {
        "use strict";
        return function(b, c) {
            if (c === !1) return b;
            if ((c || angular.isUndefined(c)) && angular.isArray(b)) {
                var d = [],
                    e = angular.isString(c) ? a(c) : function(a) {
                        return a
                    },
                    f = function(a) {
                        return angular.isObject(a) ? e(a) : a
                    };
                angular.forEach(b, function(a) {
                    for (var b = !1, c = 0; c < d.length; c++)
                        if (angular.equals(f(d[c]), f(a))) {
                            b = !0;
                            break
                        }
                    b || d.push(a)
                }), b = d
            }
            return b
        }
    }]), angular.module("ui.uploader", []).service("uiUploader", uiUploader), uiUploader.$inject = ["$log"], angular.module("ui.validate", []).directive("uiValidate", function() {
        "use strict";
        return {
            restrict: "A",
            require: "ngModel",
            link: function(a, b, c, d) {
                function e(b) {
                    return angular.isString(b) ? void a.$watch(b, function() {
                        angular.forEach(g, function(a) {
                            a(d.$modelValue)
                        })
                    }) : angular.isArray(b) ? void angular.forEach(b, function(b) {
                        a.$watch(b, function() {
                            angular.forEach(g, function(a) {
                                a(d.$modelValue)
                            })
                        })
                    }) : void(angular.isObject(b) && angular.forEach(b, function(b, c) {
                        angular.isString(b) && a.$watch(b, function() {
                            g[c](d.$modelValue)
                        }), angular.isArray(b) && angular.forEach(b, function(b) {
                            a.$watch(b, function() {
                                g[c](d.$modelValue)
                            })
                        })
                    }))
                }
                var f, g = {},
                    h = a.$eval(c.uiValidate);
                h && (angular.isString(h) && (h = {
                    validator: h
                }), angular.forEach(h, function(b, c) {
                    f = function(e) {
                        var f = a.$eval(b, {
                            $value: e
                        });
                        return angular.isObject(f) && angular.isFunction(f.then) ? (f.then(function() {
                            d.$setValidity(c, !0)
                        }, function() {
                            d.$setValidity(c, !1)
                        }), e) : f ? (d.$setValidity(c, !0), e) : (d.$setValidity(c, !1), e)
                    }, g[c] = f, d.$formatters.push(f), d.$parsers.push(f);
                }), c.uiValidateWatch && e(a.$eval(c.uiValidateWatch)))
            }
        }
    }), angular.module("ui.utils", ["ui.event", "ui.format", "ui.highlight", "ui.include", "ui.indeterminate", "ui.inflector", "ui.jq", "ui.keypress", "ui.mask", "ui.reset", "ui.route", "ui.scrollfix", "ui.scroll", "ui.scroll.jqlite", "ui.showhide", "ui.unique", "ui.validate"]), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function(a) {
                        c.$apply(function() {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function() {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function() {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            },
            f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
        return {
            link: function(b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    if (k) k = !1, i(), c.css({
                        height: 0
                    });
                    else {
                        c.css({
                            height: c[0].scrollHeight + "px"
                        });
                        c[0].offsetWidth;
                        c.removeClass("collapse in").addClass("collapsing"), e({
                            height: 0
                        }).then(i)
                    }
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function(a) {
                    a ? h() : f()
                })
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
        closeOthers: !0
    }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function(c) {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
        }
    }]).directive("accordion", function() {
        return {
            restrict: "EA",
            controller: "AccordionController",
            transclude: !0,
            replace: !1,
            templateUrl: "template/accordion/accordion.html"
        }
    }).directive("accordionGroup", function() {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@",
                isOpen: "=?",
                isDisabled: "=?"
            },
            controller: function() {
                this.setHeading = function(a) {
                    this.heading = a
                }
            },
            link: function(a, b, c, d) {
                d.addGroup(a), a.$watch("isOpen", function(b) {
                    b && d.closeOthers(a)
                }), a.toggleOpen = function() {
                    a.isDisabled || (a.isOpen = !a.isOpen)
                }
            }
        }
    }).directive("accordionHeading", function() {
        return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            link: function(a, b, c, d, e) {
                d.setHeading(e(a, function() {}))
            }
        }
    }).directive("accordionTransclude", function() {
        return {
            require: "^accordionGroup",
            link: function(a, b, c, d) {
                a.$watch(function() {
                    return d[c.accordionTransclude]
                }, function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
        a.closeable = "close" in b, this.close = a.close
    }]).directive("alert", function() {
        return {
            restrict: "EA",
            controller: "AlertController",
            templateUrl: "template/alert/alert.html",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@",
                close: "&"
            }
        }
    }).directive("dismissOnTimeout", ["$timeout", function(a) {
        return {
            require: "alert",
            link: function(b, c, d, e) {
                a(function() {
                    e.close()
                }, parseInt(d.dismissOnTimeout, 10))
            }
        }
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
        return function(a, b, c) {
            b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
                b.html(a || "")
            })
        }
    }), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).controller("ButtonsController", ["buttonConfig", function(a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }]).directive("btnRadio", function() {
        return {
            require: ["btnRadio", "ngModel"],
            controller: "ButtonsController",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f.$render = function() {
                    b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
                }, b.bind(e.toggleEvent, function() {
                    var d = b.hasClass(e.activeClass);
                    (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                        f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                    })
                })
            }
        }
    }).directive("btnCheckbox", function() {
        return {
            require: ["btnCheckbox", "ngModel"],
            controller: "ButtonsController",
            link: function(a, b, c, d) {
                function e() {
                    return g(c.btnCheckboxTrue, !0)
                }

                function f() {
                    return g(c.btnCheckboxFalse, !1)
                }

                function g(b, c) {
                    var d = a.$eval(b);
                    return angular.isDefined(d) ? d : c
                }
                var h = d[0],
                    i = d[1];
                i.$render = function() {
                    b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
                }, b.bind(h.toggleEvent, function() {
                    a.$apply(function() {
                        i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(a, b, c, d) {
        function e() {
            f();
            var b = +a.interval;
            !isNaN(b) && b > 0 && (h = c(g, b))
        }

        function f() {
            h && (c.cancel(h), h = null)
        }

        function g() {
            var b = +a.interval;
            i && !isNaN(b) && b > 0 ? a.next() : a.pause()
        }
        var h, i, j = this,
            k = j.slides = a.slides = [],
            l = -1;
        j.currentSlide = null;
        var m = !1;
        j.select = a.select = function(c, f) {
            function g() {
                if (!m) {
                    if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
                        c.$element.addClass(f);
                        c.$element[0].offsetWidth;
                        angular.forEach(k, function(a) {
                                angular.extend(a, {
                                    direction: "",
                                    entering: !1,
                                    leaving: !1,
                                    active: !1
                                })
                            }), angular.extend(c, {
                                direction: f,
                                active: !0,
                                entering: !0
                            }), angular.extend(j.currentSlide || {}, {
                                direction: f,
                                leaving: !0
                            }), a.$currentTransition = d(c.$element, {}),
                            function(b, c) {
                                a.$currentTransition.then(function() {
                                    h(b, c)
                                }, function() {
                                    h(b, c)
                                })
                            }(c, j.currentSlide)
                    } else h(c, j.currentSlide);
                    j.currentSlide = c, l = i, e()
                }
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var i = k.indexOf(c);
            void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function() {
            m = !0
        }), j.indexOfSlide = function(a) {
            return k.indexOf(a)
        }, a.next = function() {
            var b = (l + 1) % k.length;
            return a.$currentTransition ? void 0 : j.select(k[b], "next")
        }, a.prev = function() {
            var b = 0 > l - 1 ? k.length - 1 : l - 1;
            return a.$currentTransition ? void 0 : j.select(k[b], "prev")
        }, a.isActive = function(a) {
            return j.currentSlide === a
        }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
            i || (i = !0, e())
        }, a.pause = function() {
            a.noPause || (i = !1, f())
        }, j.addSlide = function(b, c) {
            b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
        }, j.removeSlide = function(a) {
            var b = k.indexOf(a);
            k.splice(b, 1), k.length > 0 && a.active ? b >= k.length ? j.select(k[b - 1]) : j.select(k[b]) : l > b && l--
        }
    }]).directive("carousel", [function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }]).directive("slide", function() {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {
                active: "=?"
            },
            link: function(a, b, c, d) {
                d.addSlide(a, b), a.$on("$destroy", function() {
                    d.removeSlide(a)
                }), a.$watch("active", function(b) {
                    b && d.select(a)
                })
            }
        }
    }), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
        function c(a) {
            var c = [],
                d = a.split("");
            return angular.forEach(e, function(b, e) {
                var f = a.indexOf(e);
                if (f > -1) {
                    a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                    a = a.join(""), c.push({
                        index: f,
                        apply: b.apply
                    })
                }
            }), {
                regex: new RegExp("^" + d.join("") + "$"),
                map: b(c, "index")
            }
        }

        function d(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }
        this.parsers = {};
        var e = {
            yyyy: {
                regex: "\\d{4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function(a) {
                    this.year = +a + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            MMMM: {
                regex: a.DATETIME_FORMATS.MONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }
            },
            MMM: {
                regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            EEEE: {
                regex: a.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
            }
        };
        this.parse = function(b, e) {
            if (!angular.isString(b) || !e) return b;
            e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
            var f = this.parsers[e],
                g = f.regex,
                h = f.map,
                i = b.match(g);
            if (i && i.length) {
                for (var j, k = {
                        year: 1900,
                        month: 0,
                        date: 1,
                        hours: 0
                    }, l = 1, m = i.length; m > l; l++) {
                    var n = h[l - 1];
                    n.apply && n.apply.call(k, i[l])
                }
                return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function(b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    },
                    f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
                }
            },
            positionElements: function(a, b, c, d) {
                var e, f, g, h, i = c.split("-"),
                    j = i[0],
                    k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {
                        center: function() {
                            return e.left + e.width / 2 - f / 2
                        },
                        left: function() {
                            return e.left
                        },
                        right: function() {
                            return e.left + e.width
                        }
                    },
                    m = {
                        center: function() {
                            return e.top + e.height / 2 - g / 2
                        },
                        top: function() {
                            return e.top
                        },
                        bottom: function() {
                            return e.top + e.height
                        }
                    };
                switch (j) {
                    case "right":
                        h = {
                            top: m[k](),
                            left: l[j]()
                        };
                        break;
                    case "left":
                        h = {
                            top: m[k](),
                            left: e.left - f
                        };
                        break;
                    case "bottom":
                        h = {
                            top: m[j](),
                            left: l[k]()
                        };
                        break;
                    default:
                        h = {
                            top: e.top - g,
                            left: l[k]()
                        }
                }
                return h
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
        formatDay: "dd",
        formatMonth: "MMMM",
        formatYear: "yyyy",
        formatDayHeader: "EEE",
        formatDayTitle: "MMMM yyyy",
        formatMonthTitle: "yyyy",
        datepickerMode: "day",
        minMode: "day",
        maxMode: "year",
        showWeeks: !0,
        startingDay: 0,
        yearRange: 20,
        minDate: null,
        maxDate: null
    }).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
        var i = this,
            j = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function(d) {
            b[d] ? a.$parent.$watch(c(b[d]), function(a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function(a) {
            j = a, j.$render = function() {
                i.render()
            }
        }, this.render = function() {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue),
                    b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function(a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {
                date: a,
                label: g(a, b),
                selected: c && 0 === this.compare(a, c),
                disabled: this.isDisabled(a),
                current: 0 === this.compare(a, new Date)
            }
        }, this.isDisabled = function(c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                date: c,
                mode: a.datepickerMode
            })
        }, this.split = function(a, b) {
            for (var c = []; a.length > 0;) c.push(a.splice(0, b));
            return c
        }, a.select = function(b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function(a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
                c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function(b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var k = function() {
            e(function() {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function(b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate)) return;
                    a.select(i.activeDate), k()
                } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }]).directive("datepicker", function() {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/datepicker.html",
            scope: {
                datepickerMode: "=?",
                dateDisabled: "&"
            },
            require: ["datepicker", "?^ngModel"],
            controller: "DatepickerController",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f)
            }
        }
    }).directive("daypicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }

                function g(a, b) {
                    var c = new Array(b),
                        d = new Date(a),
                        e = 0;
                    for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }

                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                b.showWeeks = e.showWeeks, e.step = {
                    months: 1
                }, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function() {
                    var c = e.activeDate.getFullYear(),
                        d = e.activeDate.getMonth(),
                        f = new Date(c, d, 1),
                        i = e.startingDay - f.getDay(),
                        j = i > 0 ? 7 - i : -i,
                        k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                        secondary: l[m].getMonth() !== d,
                        uid: b.uniqueId + "-" + m
                    });
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++) b.labels[n] = {
                        abbr: a(l[n].date, e.formatDayHeader),
                        full: a(l[n].date, "EEEE")
                    };
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                    }
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function(a, b) {
                    var c = e.activeDate.getDate();
                    if ("left" === a) c -= 1;
                    else if ("up" === a) c -= 7;
                    else if ("right" === a) c += 1;
                    else if ("down" === a) c += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var d = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(d, 1), c = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), c)
                    } else "home" === a ? c = 1 : "end" === a && (c = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(c)
                }, e.refreshView()
            }
        }
    }]).directive("monthpicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                e.step = {
                    years: 1
                }, e.element = c, e._refreshView = function() {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                        uid: b.uniqueId + "-" + f
                    });
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function(a, b) {
                    var c = e.activeDate.getMonth();
                    if ("left" === a) c -= 1;
                    else if ("up" === a) c -= 3;
                    else if ("right" === a) c += 1;
                    else if ("down" === a) c += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var d = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(d)
                    } else "home" === a ? c = 0 : "end" === a && (c = 11);
                    e.activeDate.setMonth(c)
                }, e.refreshView()
            }
        }
    }]).directive("yearpicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function(a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }
                var f = d.yearRange;
                d.step = {
                    years: f
                }, d.element = b, d._refreshView = function() {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                        uid: a.uniqueId + "-" + c
                    });
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function(a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function(a, b) {
                    var c = d.activeDate.getFullYear();
                    "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? c = e(d.activeDate.getFullYear()) : "end" === a && (c = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(c)
                }, d.refreshView()
            }
        }
    }]).constant("datepickerPopupConfig", {
        datepickerPopup: "yyyy-MM-dd",
        currentText: "Today",
        clearText: "Clear",
        closeText: "Done",
        closeOnDateSelection: !0,
        appendToBody: !1,
        showButtonBar: !0
    }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&"
            },
            link: function(h, i, j, k) {
                function l(a) {
                    return a.replace(/([A-Z])/g, function(a) {
                        return "-" + a.toLowerCase()
                    })
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }
                var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                    p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function(a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                    r.attr(l(b), a)
                }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                    if (j[a]) {
                        var c = b(j[a]);
                        if (h.$parent.$watch(c, function(b) {
                                h.watchData[a] = b
                            }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                            var d = c.assign;
                            h.$watch("watchData." + a, function(a, b) {
                                a !== b && d(h.$parent, a)
                            })
                        }
                    }
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function() {
                    h.$apply(function() {
                        h.date = k.$modelValue
                    })
                }), k.$render = function() {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function(a) {
                        h.isOpen && a.target !== i[0] && h.$apply(function() {
                            h.isOpen = !1
                        })
                    },
                    t = function(a, b) {
                        h.keydown(a)
                    };
                i.bind("keydown", t), h.keydown = function(a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function(a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function(a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function() {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }
        }
    }]).directive("datepickerPopupWrap", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: "template/datepicker/popup.html",
            link: function(a, b, c) {
                b.bind("click", function(a) {
                    a.preventDefault(), a.stopPropagation()
                })
            }
        }
    }), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
        openClass: "open"
    }).service("dropdownService", ["$document", function(a) {
        var b = null;
        this.open = function(e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function(e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function(a) {
                if (b) {
                    var c = b.getToggleElement();
                    a && c && c[0].contains(a.target) || b.$apply(function() {
                        b.isOpen = !1
                    })
                }
            },
            d = function(a) {
                27 === a.which && (b.focusToggleElement(), c())
            }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
        var g, h = this,
            i = a.$new(),
            j = d.openClass,
            k = angular.noop,
            l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function(d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
                i.isOpen = !!a
            }))
        }, this.toggle = function(a) {
            return i.isOpen = arguments.length ? !!a : !i.isOpen
        }, this.isOpen = function() {
            return i.isOpen
        }, i.getToggleElement = function() {
            return h.toggleElement
        }, i.focusToggleElement = function() {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function(b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
                open: !!b
            })
        }), a.$on("$locationChangeSuccess", function() {
            i.isOpen = !1
        }), a.$on("$destroy", function() {
            i.$destroy()
        })
    }]).directive("dropdown", function() {
        return {
            controller: "DropdownController",
            link: function(a, b, c, d) {
                d.init(b)
            }
        }
    }).directive("dropdownToggle", function() {
        return {
            require: "?^dropdown",
            link: function(a, b, c, d) {
                if (d) {
                    d.toggleElement = b;
                    var e = function(e) {
                        e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                            d.toggle()
                        })
                    };
                    b.bind("click", e), b.attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), a.$watch(d.isOpen, function(a) {
                        b.attr("aria-expanded", !!a)
                    }), a.$on("$destroy", function() {
                        b.unbind("click", e)
                    })
                }
            }
        }
    }), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
        return {
            createNew: function() {
                var a = [];
                return {
                    add: function(b, c) {
                        a.push({
                            key: b,
                            value: c
                        })
                    },
                    get: function(b) {
                        for (var c = 0; c < a.length; c++)
                            if (b == a[c].key) return a[c]
                    },
                    keys: function() {
                        for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                        return b
                    },
                    top: function() {
                        return a[a.length - 1]
                    },
                    remove: function(b) {
                        for (var c = -1, d = 0; d < a.length; d++)
                            if (b == a[d].key) {
                                c = d;
                                break
                            }
                        return a.splice(c, 1)[0]
                    },
                    removeTop: function() {
                        return a.splice(a.length - 1, 1)[0]
                    },
                    length: function() {
                        return a.length
                    }
                }
            }
        }
    }).directive("modalBackdrop", ["$timeout", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function(b, c, d) {
                b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                    b.animate = !0
                })
            }
        }
    }]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function(a, b) {
                return b.templateUrl || "template/modal/window.html"
            },
            link: function(c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                    c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
                }), c.close = function(b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }]).directive("modalTransclude", function() {
        return {
            link: function(a, b, c, d, e) {
                e(a.$parent, function(a) {
                    b.empty(), b.append(a)
                })
            }
        }
    }).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function() {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function() {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g)
        }
        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function(a) {
            l && (l.index = a)
        }), c.bind("keydown", function(a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function(a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            if (h >= 0 && !k) {
                l = e.$new(!0), l.index = h;
                var i = angular.element("<div modal-backdrop></div>");
                i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
            }
            var j = angular.element("<div modal-window></div>");
            j.attr({
                "template-url": b.windowTemplateUrl,
                "window-class": b.windowClass,
                size: b.size,
                index: n.length() - 1,
                animate: "animate"
            }).html(b.content);
            var o = d(j)(b.scope);
            n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
        }, o.close = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.resolve(b), h(a))
        }, o.dismiss = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.reject(b), h(a))
        }, o.dismissAll = function(a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function() {
            return n.top()
        }, o
    }]).provider("$modal", function() {
        var a = {
            options: {
                backdrop: !0,
                keyboard: !0
            },
            $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                        cache: f
                    }).then(function(a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function(a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function(b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function(a) {
                                h.close(k, a)
                            },
                            dismiss: function(a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function(a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {},
                            j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            backdropClass: b.backdropClass,
                            windowClass: b.windowClass,
                            windowTemplateUrl: b.windowTemplateUrl,
                            size: b.size
                        })
                    }, function(a) {
                        e.reject(a)
                    }), l.then(function() {
                        f.resolve(!0)
                    }, function() {
                        f.reject(!1)
                    }), k
                }, k
            }]
        };
        return a
    }), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
        var d = this,
            e = {
                $setViewValue: angular.noop
            },
            f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function(f, g) {
            e = f, this.config = g, e.$render = function() {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function() {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function() {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function(b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function(b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function() {
            return 1 === a.page
        }, a.noNext = function() {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }]).constant("paginationConfig", {
        itemsPerPage: 10,
        boundaryLinks: !1,
        directionLinks: !0,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        rotate: !0
    }).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function(c, d, e, f) {
                function g(a, b, c) {
                    return {
                        number: a,
                        text: b,
                        active: c
                    }
                }

                function h(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }
                var i = f[0],
                    j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                        l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function() {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }
        }
    }]).constant("pagerConfig", {
        itemsPerPage: 10,
        previousText: "« Previous",
        nextText: "Next »",
        align: !0
    }).directive("pager", ["pagerConfig", function(a) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function(b, c, d, e) {
                var f = e[0],
                    g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }
        }
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
        function a(a) {
            var b = /[A-Z]/g,
                c = "-";
            return a.replace(b, function(a, b) {
                return (b ? c : "") + a.toLowerCase()
            })
        }
        var b = {
                placement: "top",
                animation: !0,
                popupDelay: 0
            },
            c = {
                mouseenter: "mouseleave",
                click: "click",
                focus: "blur"
            },
            d = {};
        this.options = function(a) {
            angular.extend(d, a)
        }, this.setTriggers = function(a) {
            angular.extend(c, a)
        }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
            return function(e, k, l) {
                function m(a) {
                    var b = a || n.trigger || l,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }
                var n = angular.extend({}, b, d),
                    o = a(e),
                    p = j.startSymbol(),
                    q = j.endSymbol(),
                    r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
                return {
                    restrict: "EA",
                    compile: function(a, b) {
                        var c = f(r);
                        return function(a, b, d) {
                            function f() {
                                D.isOpen ? l() : j()
                            }

                            function j() {
                                (!C || a.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                    a()
                                })) : o()())
                            }

                            function l() {
                                a.$apply(function() {
                                    p()
                                })
                            }

                            function o() {
                                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), D.$digest(), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                            }

                            function p() {
                                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                            }

                            function q() {
                                w && r(), x = D.$new(), w = c(x, function(a) {
                                    A ? h.find("body").append(a) : b.after(a)
                                })
                            }

                            function r() {
                                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                            }

                            function s() {
                                t(), u()
                            }

                            function t() {
                                var a = d[k + "Placement"];
                                D.placement = angular.isDefined(a) ? a : n.placement
                            }

                            function u() {
                                var a = d[k + "PopupDelay"],
                                    b = parseInt(a, 10);
                                D.popupDelay = isNaN(b) ? n.popupDelay : b
                            }

                            function v() {
                                var a = d[k + "Trigger"];
                                F(), B = m(a), B.show === B.hide ? b.bind(B.show, f) : (b.bind(B.show, j), b.bind(B.hide, l))
                            }
                            var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                                B = m(void 0),
                                C = angular.isDefined(d[k + "Enable"]),
                                D = a.$new(!0),
                                E = function() {
                                    var a = i.positionElements(b, w, D.placement, A);
                                    a.top += "px", a.left += "px", w.css(a)
                                };
                            D.isOpen = !1, d.$observe(e, function(a) {
                                D.content = a, !a && D.isOpen && p()
                            }), d.$observe(k + "Title", function(a) {
                                D.title = a
                            });
                            var F = function() {
                                b.unbind(B.show, j), b.unbind(B.hide, l)
                            };
                            v();
                            var G = a.$eval(d[k + "Animation"]);
                            D.animation = angular.isDefined(G) ? !!G : n.animation;
                            var H = a.$eval(d[k + "AppendToBody"]);
                            A = angular.isDefined(H) ? H : A, A && a.$on("$locationChangeSuccess", function() {
                                D.isOpen && p()
                            }), a.$on("$destroy", function() {
                                g.cancel(y), g.cancel(z), F(), r(), D = null
                            })
                        }
                    }
                }
            }
        }]
    }).directive("tooltipPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-popup.html"
        }
    }).directive("tooltip", ["$tooltip", function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipHtmlUnsafePopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
        }
    }).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/popover/popover.html"
        }
    }).directive("popover", ["$tooltip", function(a) {
        return a("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
        animate: !0,
        max: 100
    }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
        var d = this,
            e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
            e || c.css({
                transition: "none"
            }), this.bars.push(b), b.$watch("value", function(c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function() {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function(a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }]).directive("progress", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "progress",
            scope: {},
            templateUrl: "template/progressbar/progress.html"
        }
    }).directive("bar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^progress",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/bar.html",
            link: function(a, b, c, d) {
                d.addBar(a, b)
            }
        }
    }).directive("progressbar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/progressbar.html",
            link: function(a, b, c, d) {
                d.addBar(a, angular.element(b.children()[0]))
            }
        }
    }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
        max: 5,
        stateOn: null,
        stateOff: null
    }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
        var d = {
            $setViewValue: angular.noop
        };
        this.init = function(e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function(a) {
            for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
                index: b
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, a[b]);
            return a
        }, a.rate = function(b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function(b) {
            a.readonly || (a.value = b), a.onHover({
                value: b
            })
        }, a.reset = function() {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function(b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function() {
            a.value = d.$viewValue
        }
    }]).directive("rating", function() {
        return {
            restrict: "EA",
            require: ["rating", "ngModel"],
            scope: {
                readonly: "=?",
                onHover: "&",
                onLeave: "&"
            },
            controller: "RatingController",
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f)
            }
        }
    }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function(a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function(a) {
            var e = c.indexOf(a);
            if (a.active && c.length > 1 && !d) {
                var f = e == c.length - 1 ? e - 1 : e + 1;
                b.select(c[f])
            }
            c.splice(e, 1)
        };
        var d;
        a.$on("$destroy", function() {
            d = !0
        })
    }]).directive("tabset", function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@"
            },
            controller: "TabsetController",
            templateUrl: "template/tabs/tabset.html",
            link: function(a, b, c) {
                a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
            }
        }
    }).directive("tab", ["$parse", function(a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function() {},
            compile: function(b, c, d) {
                return function(b, c, e, f) {
                    b.$watch("active", function(a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !!a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }]).directive("tabHeadingTransclude", [function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(a, b, c, d) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }]).directive("tabContentTransclude", function() {
        function a(a) {
            return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
        }
        return {
            restrict: "A",
            require: "^tabset",
            link: function(b, c, d) {
                var e = b.$eval(d.tabContentTransclude);
                e.$transcludeFn(e.$parent, function(b) {
                    angular.forEach(b, function(b) {
                        a(b) ? e.headingElement = b : c.append(b)
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: !0,
        meridians: null,
        readonlyInput: !1,
        mousewheel: !0
    }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
        function g() {
            var b = parseInt(a.hours, 10),
                c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
            return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
        }

        function h() {
            var b = parseInt(a.minutes, 10);
            return b >= 0 && 60 > b ? b : void 0
        }

        function i(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }

        function j(a) {
            k(), o.$setViewValue(new Date(n)), l(a)
        }

        function k() {
            o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
        }

        function l(b) {
            var c = n.getHours(),
                d = n.getMinutes();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
        }

        function m(a) {
            var b = new Date(n.getTime() + 6e4 * a);
            n.setHours(b.getHours(), b.getMinutes()), j()
        }
        var n = new Date,
            o = {
                $setViewValue: angular.noop
            },
            p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
        this.init = function(c, d) {
            o = c, o.$render = this.render;
            var e = d.eq(0),
                g = d.eq(1),
                h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
            h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
        };
        var q = f.hourStep;
        b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
            q = parseInt(a, 10)
        });
        var r = f.minuteStep;
        b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
            r = parseInt(a, 10)
        }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
            if (a.showMeridian = !!b, o.$error.time) {
                var c = g(),
                    d = h();
                angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
            } else l()
        }), this.setupMousewheelEvents = function(b, c) {
            var d = function(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                return a.detail || b > 0
            };
            b.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
            }), c.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
            })
        }, this.setupInputEvents = function(b, c) {
            if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
            var d = function(b, c) {
                o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
            };
            a.updateHours = function() {
                var a = g();
                angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
            }, b.bind("blur", function(b) {
                !a.invalidHours && a.hours < 10 && a.$apply(function() {
                    a.hours = i(a.hours)
                })
            }), a.updateMinutes = function() {
                var a = h();
                angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
            }, c.bind("blur", function(b) {
                !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                    a.minutes = i(a.minutes)
                })
            })
        }, this.render = function() {
            var a = o.$modelValue ? new Date(o.$modelValue) : null;
            isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
        }, a.incrementHours = function() {
            m(60 * q)
        }, a.decrementHours = function() {
            m(60 * -q)
        }, a.incrementMinutes = function() {
            m(r)
        }, a.decrementMinutes = function() {
            m(-r)
        }, a.toggleMeridian = function() {
            m(720 * (n.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function() {
        return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            replace: !0,
            scope: {},
            templateUrl: "template/timepicker/timepicker.html",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f, b.find("input"))
            }
        }
    }), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
        var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function(c) {
                var d = c.match(b);
                if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                    u = i.$eval(k.typeaheadFocusFirst) !== !1,
                    v = b(k.ngModel).assign,
                    w = g.parse(k.typeahead),
                    x = i.$new();
                i.$on("$destroy", function() {
                    x.$destroy()
                });
                var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": y
                });
                var z = angular.element("<div typeahead-popup></div>");
                z.attr({
                    id: y,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
                var A = function() {
                        x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                    },
                    B = function(a) {
                        return y + "-option-" + a
                    };
                x.$watch("activeIdx", function(a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
                });
                var C = function(a) {
                    var b = {
                        $viewValue: a
                    };
                    q(i, !0), c.when(w.source(i, b)).then(function(c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                                for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                    id: B(e),
                                    label: w.viewMapper(x, b),
                                    model: c[e]
                                });
                                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else A();
                        d && q(i, !1)
                    }, function() {
                        A(), q(i, !1)
                    })
                };
                A(), x.query = void 0;
                var D, E = function(a) {
                        D = d(function() {
                            C(a)
                        }, o)
                    },
                    F = function() {
                        D && d.cancel(D)
                    };
                l.$parsers.unshift(function(a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function(a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function(a) {
                    var b, c, e = {};
                    e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: w.viewMapper(i, e)
                    }), A(), d(function() {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function(a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
                }), j.bind("blur", function(a) {
                    m = !1
                });
                var G = function(a) {
                    j[0] !== a.target && (A(), x.$digest())
                };
                e.bind("click", G), i.$on("$destroy", function() {
                    e.unbind("click", G), t && H.remove()
                });
                var H = a(z)(x);
                t ? e.find("body").append(H) : j.after(H)
            }
        }
    }]).directive("typeaheadPopup", function() {
        return {
            restrict: "EA",
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "=",
                select: "&"
            },
            replace: !0,
            templateUrl: "template/typeahead/typeahead-popup.html",
            link: function(a, b, c) {
                a.templateUrl = c.templateUrl, a.isOpen = function() {
                    return a.matches.length > 0
                }, a.isActive = function(b) {
                    return a.active == b
                }, a.selectActive = function(b) {
                    a.active = b
                }, a.selectMatch = function(b) {
                    a.select({
                        activeIdx: b
                    })
                }
            }
        }
    }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function(a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }]).filter("typeaheadHighlight", function() {
        function a(a) {
            return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        }
        return function(b, c) {
            return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
        }
    }), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
        a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
        a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
    }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
        a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
        a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n');
    }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }]),
    function() {
        "use strict";

        function a(a) {
            var b = [];
            return angular.forEach(a.requires, function(a) {
                -1 === i.indexOf(a) && b.push(a)
            }), b
        }

        function b(a) {
            try {
                return angular.module(a)
            } catch (b) {
                if (/No module/.test(b) || b.message.indexOf("$injector:nomod") > -1) return !1
            }
        }

        function c(a) {
            try {
                return angular.module(a)
            } catch (b) {
                throw (/No module/.test(b) || b.message.indexOf("$injector:nomod") > -1) && (b.message = 'The module "' + a + '" that you are trying to load does not exist. ' + b.message), b
            }
        }

        function d(a, b, c, d) {
            if (b) {
                var e, g, h, i;
                for (e = 0, g = b.length; g > e; e++)
                    if (h = b[e], angular.isArray(h)) {
                        if (null !== a) {
                            if (!a.hasOwnProperty(h[0])) throw new Error("unsupported provider " + h[0]);
                            i = a[h[0]]
                        }
                        var j = f(h, c);
                        if ("invoke" !== h[1]) j && angular.isDefined(i) && i[h[1]].apply(i, h[2]);
                        else {
                            var k = function(a) {
                                var b = l.indexOf(c + "-" + a);
                                (-1 === b || d) && (-1 === b && l.push(c + "-" + a), angular.isDefined(i) && i[h[1]].apply(i, h[2]))
                            };
                            if (angular.isFunction(h[2][0])) k(h[2][0]);
                            else if (angular.isArray(h[2][0]))
                                for (var m = 0, n = h[2][0].length; n > m; m++) angular.isFunction(h[2][0][m]) && k(h[2][0][m])
                        }
                    }
            }
        }

        function e(a, b, c) {
            if (b) {
                var f, h, j, k = [];
                for (f = b.length - 1; f >= 0; f--)
                    if (h = b[f], "string" != typeof h && (h = g(h)), h && -1 === m.indexOf(h)) {
                        var l = -1 === i.indexOf(h);
                        if (j = angular.module(h), l && (i.push(h), e(a, j.requires, c)), j._runBlocks.length > 0)
                            for (n[h] = []; j._runBlocks.length > 0;) n[h].push(j._runBlocks.shift());
                        angular.isDefined(n[h]) && (l || c.rerun) && (k = k.concat(n[h])), d(a, j._invokeQueue, h, c.reconfig), d(a, j._configBlocks, h, c.reconfig), p(l ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", h), b.pop(), m.push(h)
                    }
                var o = a.getInstanceInjector();
                angular.forEach(k, function(a) {
                    o.invoke(a)
                })
            }
        }

        function f(a, b) {
            var c = a[2][0],
                d = a[1],
                e = !1;
            angular.isUndefined(k[b]) && (k[b] = {}), angular.isUndefined(k[b][d]) && (k[b][d] = []);
            var f = function(a) {
                e = !0, k[b][d].push(a), p("ocLazyLoad.componentLoaded", [b, d, a])
            };
            if (angular.isString(c) && -1 === k[b][d].indexOf(c)) f(c);
            else {
                if (!angular.isObject(c)) return !1;
                angular.forEach(c, function(a) {
                    angular.isString(a) && -1 === k[b][d].indexOf(a) && f(a)
                })
            }
            return e
        }

        function g(a) {
            var b = null;
            return angular.isString(a) ? b = a : angular.isObject(a) && a.hasOwnProperty("name") && angular.isString(a.name) && (b = a.name), b
        }

        function h(a) {
            if (0 === j.length) {
                var b = [a],
                    c = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                    e = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                    f = function(a) {
                        return a && b.push(a)
                    };
                angular.forEach(c, function(b) {
                    c[b] = !0, f(document.getElementById(b)), b = b.replace(":", "\\:"), a[0].querySelectorAll && (angular.forEach(a[0].querySelectorAll("." + b), f), angular.forEach(a[0].querySelectorAll("." + b + "\\:"), f), angular.forEach(a[0].querySelectorAll("[" + b + "]"), f))
                }), angular.forEach(b, function(b) {
                    if (0 === j.length) {
                        var d = " " + a.className + " ",
                            f = e.exec(d);
                        f ? j.push((f[2] || "").replace(/\s+/g, ",")) : angular.forEach(b.attributes, function(a) {
                            0 === j.length && c[a.name] && j.push(a.value)
                        })
                    }
                })
            }
            if (0 === j.length) throw "No module found during bootstrap, unable to init ocLazyLoad";
            var g = function h(a) {
                if (-1 === i.indexOf(a)) {
                    i.push(a);
                    var b = angular.module(a);
                    d(null, b._invokeQueue, a), d(null, b._configBlocks, a), angular.forEach(b.requires, h)
                }
            };
            angular.forEach(j, function(a) {
                g(a)
            })
        }
        var i = ["ng"],
            j = [],
            k = {},
            l = [],
            m = [],
            n = {},
            o = angular.module("oc.lazyLoad", ["ng"]),
            p = angular.noop;
        o.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function(d, f, j, k, l, n) {
            var o, q, r, s = {},
                t = {
                    $controllerProvider: d,
                    $compileProvider: j,
                    $filterProvider: k,
                    $provide: f,
                    $injector: l,
                    $animateProvider: n
                },
                u = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
                v = !1,
                w = !1;
            h(angular.element(window.document)), this.$get = ["$log", "$q", "$templateCache", "$http", "$rootElement", "$rootScope", "$cacheFactory", "$interval", function(d, f, h, j, k, l, n, x) {
                var y, z = n("ocLazyLoad"),
                    A = !1,
                    B = !1;
                v || (d = {}, d.error = angular.noop, d.warn = angular.noop, d.info = angular.noop), t.getInstanceInjector = function() {
                    return y ? y : y = k.data("$injector") || angular.injector()
                }, p = function(a, b) {
                    w && l.$broadcast(a, b), v && d.info(a, b)
                };
                var C = function(a, b, c) {
                    var d, e, g = f.defer(),
                        h = function(a) {
                            var b = (new Date).getTime();
                            return a.indexOf("?") >= 0 ? "&" === a.substring(0, a.length - 1) ? a + "_dc=" + b : a + "&_dc=" + b : a + "?_dc=" + b
                        };
                    switch (angular.isUndefined(z.get(b)) && z.put(b, g.promise), a) {
                        case "css":
                            d = document.createElement("link"), d.type = "text/css", d.rel = "stylesheet", d.href = c.cache === !1 ? h(b) : b;
                            break;
                        case "js":
                            d = document.createElement("script"), d.src = c.cache === !1 ? h(b) : b;
                            break;
                        default:
                            g.reject(new Error('Requested type "' + a + '" is not known. Could not inject "' + b + '"'))
                    }
                    d.onload = d.onreadystatechange = function(a) {
                        d.readyState && !/^c|loade/.test(d.readyState) || e || (d.onload = d.onreadystatechange = null, e = 1, p("ocLazyLoad.fileLoaded", b), g.resolve())
                    }, d.onerror = function(a) {
                        g.reject(new Error("Unable to load " + b))
                    }, d.async = c.serie ? 0 : 1;
                    var i = u.lastChild;
                    if (c.insertBefore) {
                        var j = angular.element(c.insertBefore);
                        j && j.length > 0 && (i = j[0])
                    }
                    if (u.insertBefore(d, i), "css" == a) {
                        if (!A) {
                            var k = navigator.userAgent.toLowerCase();
                            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                                var l = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                    m = parseFloat([parseInt(l[1], 10), parseInt(l[2], 10), parseInt(l[3] || 0, 10)].join("."));
                                B = 6 > m
                            } else if (k.indexOf("android") > -1) {
                                var n = parseFloat(k.slice(k.indexOf("android") + 8));
                                B = 4.4 > n
                            } else if (k.indexOf("safari") > -1 && -1 == k.indexOf("chrome")) {
                                var o = parseFloat(k.match(/version\/([\.\d]+)/i)[1]);
                                B = 6 > o
                            }
                        }
                        if (B) var q = 1e3,
                            r = x(function() {
                                try {
                                    d.sheet.cssRules, x.cancel(r), d.onload()
                                } catch (a) {
                                    --q <= 0 && d.onerror()
                                }
                            }, 20)
                    }
                    return g.promise
                };
                angular.isUndefined(o) && (o = function(a, b, c) {
                    var d = [];
                    angular.forEach(a, function(a) {
                        d.push(C("js", a, c))
                    }), f.all(d).then(function() {
                        b()
                    }, function(a) {
                        b(a)
                    })
                }, o.ocLazyLoadLoader = !0), angular.isUndefined(q) && (q = function(a, b, c) {
                    var d = [];
                    angular.forEach(a, function(a) {
                        d.push(C("css", a, c))
                    }), f.all(d).then(function() {
                        b()
                    }, function(a) {
                        b(a)
                    })
                }, q.ocLazyLoadLoader = !0), angular.isUndefined(r) && (r = function(a, b, c) {
                    var d = [];
                    return angular.forEach(a, function(a) {
                        var b = f.defer();
                        d.push(b.promise), j.get(a, c).success(function(c) {
                            angular.isString(c) && c.length > 0 && angular.forEach(angular.element(c), function(a) {
                                "SCRIPT" === a.nodeName && "text/ng-template" === a.type && h.put(a.id, a.innerHTML)
                            }), angular.isUndefined(z.get(a)) && z.put(a, !0), b.resolve()
                        }).error(function(c) {
                            b.reject(new Error('Unable to load template file "' + a + '": ' + c))
                        })
                    }), f.all(d).then(function() {
                        b()
                    }, function(a) {
                        b(a)
                    })
                }, r.ocLazyLoadLoader = !0);
                var D = function(a, b) {
                    var c = [],
                        e = [],
                        g = [],
                        h = [],
                        i = null;
                    angular.extend(b || {}, a);
                    var j = function(a) {
                        i = z.get(a), angular.isUndefined(i) || b.cache === !1 ? /\.(css|less)[^\.]*$/.test(a) && -1 === c.indexOf(a) ? c.push(a) : /\.(htm|html)[^\.]*$/.test(a) && -1 === e.indexOf(a) ? e.push(a) : -1 === g.indexOf(a) && g.push(a) : i && h.push(i)
                    };
                    if (b.serie ? j(b.files.shift()) : angular.forEach(b.files, function(a) {
                            j(a)
                        }), c.length > 0) {
                        var k = f.defer();
                        q(c, function(a) {
                            angular.isDefined(a) && q.hasOwnProperty("ocLazyLoadLoader") ? (d.error(a), k.reject(a)) : k.resolve()
                        }, b), h.push(k.promise)
                    }
                    if (e.length > 0) {
                        var l = f.defer();
                        r(e, function(a) {
                            angular.isDefined(a) && r.hasOwnProperty("ocLazyLoadLoader") ? (d.error(a), l.reject(a)) : l.resolve()
                        }, b), h.push(l.promise)
                    }
                    if (g.length > 0) {
                        var m = f.defer();
                        o(g, function(a) {
                            angular.isDefined(a) && o.hasOwnProperty("ocLazyLoadLoader") ? (d.error(a), m.reject(a)) : m.resolve()
                        }, b), h.push(m.promise)
                    }
                    return b.serie && b.files.length > 0 ? f.all(h).then(function() {
                        return D(a, b)
                    }) : f.all(h)
                };
                return {
                    getModuleConfig: function(a) {
                        if (!angular.isString(a)) throw new Error("You need to give the name of the module to get");
                        return s[a] ? s[a] : null
                    },
                    setModuleConfig: function(a) {
                        if (!angular.isObject(a)) throw new Error("You need to give the module config object to set");
                        return s[a.name] = a, a
                    },
                    getModules: function() {
                        return i
                    },
                    isLoaded: function(a) {
                        var c = function(a) {
                            var c = i.indexOf(a) > -1;
                            return c || (c = !!b(a)), c
                        };
                        if (angular.isString(a) && (a = [a]), angular.isArray(a)) {
                            var d, e;
                            for (d = 0, e = a.length; e > d; d++)
                                if (!c(a[d])) return !1;
                            return !0
                        }
                        throw new Error("You need to define the module(s) name(s)")
                    },
                    load: function(h, j) {
                        var k, l, n = this,
                            o = null,
                            p = [],
                            q = [],
                            r = f.defer();
                        if (angular.isUndefined(j) && (j = {}), angular.isArray(h)) return angular.forEach(h, function(a) {
                            a && q.push(n.load(a, j))
                        }), f.all(q).then(function() {
                            r.resolve(h)
                        }, function(a) {
                            r.reject(a)
                        }), r.promise;
                        if (k = g(h), "string" == typeof h ? (o = n.getModuleConfig(h), o || (o = {
                                files: [h]
                            }, k = null)) : "object" == typeof h && (o = n.setModuleConfig(h)), null === o ? (l = 'Module "' + k + '" is not configured, cannot load.', d.error(l), r.reject(new Error(l))) : angular.isDefined(o.template) && (angular.isUndefined(o.files) && (o.files = []), angular.isString(o.template) ? o.files.push(o.template) : angular.isArray(o.template) && o.files.concat(o.template)), p.push = function(a) {
                                -1 === this.indexOf(a) && Array.prototype.push.apply(this, arguments)
                            }, angular.isDefined(k) && b(k) && -1 !== i.indexOf(k) && (p.push(k), angular.isUndefined(o.files))) return r.resolve(), r.promise;
                        var s = {};
                        angular.extend(s, j, o);
                        var u = function v(e) {
                            var h, i, j, k, l = [];
                            if (h = g(e), null === h) return f.when();
                            try {
                                i = c(h)
                            } catch (m) {
                                var o = f.defer();
                                return d.error(m.message), o.reject(m), o.promise
                            }
                            return j = a(i), angular.forEach(j, function(a) {
                                if ("string" == typeof a) {
                                    var c = n.getModuleConfig(a);
                                    if (null === c) return void p.push(a);
                                    a = c
                                }
                                return b(a.name) ? void("string" != typeof e && (k = a.files.filter(function(b) {
                                    return n.getModuleConfig(a.name).files.indexOf(b) < 0
                                }), 0 !== k.length && d.warn('Module "', h, '" attempted to redefine configuration for dependency. "', a.name, '"\n Additional Files Loaded:', k), l.push(D(a.files, s).then(function() {
                                    return v(a)
                                })))) : ("object" == typeof a && (a.hasOwnProperty("name") && a.name && (n.setModuleConfig(a), p.push(a.name)), a.hasOwnProperty("css") && 0 !== a.css.length && angular.forEach(a.css, function(a) {
                                    C("css", a, s)
                                })), void(a.hasOwnProperty("files") && 0 !== a.files.length && a.files && l.push(D(a, s).then(function() {
                                    return v(a)
                                }))))
                            }), f.all(l)
                        };
                        return D(o, s).then(function() {
                            null === k ? r.resolve(h) : (p.push(k), u(k).then(function() {
                                try {
                                    m = [], e(t, p, s)
                                } catch (a) {
                                    return d.error(a.message), void r.reject(a)
                                }
                                r.resolve(h)
                            }, function(a) {
                                r.reject(a)
                            }))
                        }, function(a) {
                            r.reject(a)
                        }), r.promise
                    }
                }
            }], this.config = function(a) {
                if (angular.isDefined(a.jsLoader) || angular.isDefined(a.asyncLoader)) {
                    if (!angular.isFunction(a.jsLoader || a.asyncLoader)) throw "The js loader needs to be a function";
                    o = a.jsLoader || a.asyncLoader
                }
                if (angular.isDefined(a.cssLoader)) {
                    if (!angular.isFunction(a.cssLoader)) throw "The css loader needs to be a function";
                    q = a.cssLoader
                }
                if (angular.isDefined(a.templatesLoader)) {
                    if (!angular.isFunction(a.templatesLoader)) throw "The template loader needs to be a function";
                    r = a.templatesLoader
                }
                angular.isDefined(a.modules) && (angular.isArray(a.modules) ? angular.forEach(a.modules, function(a) {
                    s[a.name] = a
                }) : s[a.modules.name] = a.modules), angular.isDefined(a.debug) && (v = a.debug), angular.isDefined(a.events) && (w = a.events)
            }
        }]), o.directive("ocLazyLoad", ["$ocLazyLoad", "$compile", "$animate", "$parse", function(a, b, c, d) {
            return {
                restrict: "A",
                terminal: !0,
                priority: 1e3,
                compile: function(e, f) {
                    var g = e[0].innerHTML;
                    return e.html(""),
                        function(e, f, h) {
                            var i = d(h.ocLazyLoad);
                            e.$watch(function() {
                                return i(e) || h.ocLazyLoad
                            }, function(d) {
                                angular.isDefined(d) && a.load(d).then(function(a) {
                                    c.enter(b(g)(e), null, f)
                                })
                            }, !0)
                        }
                }
            }
        }]);
        var q = angular.bootstrap;
        angular.bootstrap = function(a, b, c) {
            return j = b.slice(), q(a, b, c)
        }, Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
            var c;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var d = Object(this),
                e = d.length >>> 0;
            if (0 === e) return -1;
            var f = +b || 0;
            if (Math.abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
            for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) {
                if (c in d && d[c] === a) return c;
                c++
            }
            return -1
        })
    }(), angular.module("pascalprecht.translate", ["ng"]).run(["$translate", function(a) {
        var b = a.storageKey(),
            c = a.storage(),
            d = function() {
                var d = a.preferredLanguage();
                angular.isString(d) ? a.use(d) : c.put(b, a.use())
            };
        c ? c.get(b) ? a.use(c.get(b))["catch"](d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage())
    }]), angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY", function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = {},
            r = [],
            s = a,
            t = [],
            u = !1,
            v = "translate-cloak",
            w = !1,
            x = ".",
            y = "2.5.2",
            z = function() {
                var a, b, c = window.navigator,
                    d = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                if (angular.isArray(c.languages))
                    for (a = 0; a < c.languages.length; a++)
                        if (b = c.languages[a], b && b.length) return b;
                for (a = 0; a < d.length; a++)
                    if (b = c[d[a]], b && b.length) return b;
                return null
            };
        z.displayName = "angular-translate/service: getFirstBrowserLanguage";
        var A = function() {
            return (z() || "").split("-").join("_")
        };
        A.displayName = "angular-translate/service: getLocale";
        var B = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            C = function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            D = function(a) {
                for (var b = [], d = angular.lowercase(a), e = 0, f = r.length; f > e; e++) b.push(angular.lowercase(r[e]));
                if (B(b, d) > -1) return a;
                if (c) {
                    var g;
                    for (var h in c) {
                        var i = !1,
                            j = Object.prototype.hasOwnProperty.call(c, h) && angular.lowercase(h) === angular.lowercase(a);
                        if ("*" === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = c[h], B(b, angular.lowercase(g)) > -1)) return g
                    }
                }
                var k = a.split("_");
                return k.length > 1 && B(b, angular.lowercase(k[0])) > -1 ? k[0] : a
            },
            E = function(a, b) {
                if (!a && !b) return q;
                if (a && !b) {
                    if (angular.isString(a)) return q[a]
                } else angular.isObject(q[a]) || (q[a] = {}), angular.extend(q[a], F(b));
                return this
            };
        this.translations = E, this.cloakClassName = function(a) {
            return a ? (v = a, this) : v
        };
        var F = function(a, b, c, d) {
            var e, f, g, h;
            b || (b = []), c || (c = {});
            for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? F(h, b.concat(e), c, e) : (f = b.length ? "" + b.join(x) + x + e : e, b.length && e === d && (g = "" + b.join(x), c[g] = "@:" + f), c[f] = h));
            return c
        };
        this.addInterpolation = function(a) {
            return t.push(a), this
        }, this.useMessageFormatInterpolation = function() {
            return this.useInterpolation("$translateMessageFormatInterpolation")
        }, this.useInterpolation = function(a) {
            return k = a, this
        }, this.useSanitizeValueStrategy = function(a) {
            return u = a, this
        }, this.preferredLanguage = function(a) {
            return G(a), this
        };
        var G = function(a) {
            return a && (b = a), b
        };
        this.translationNotFoundIndicator = function(a) {
            return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), this
        }, this.translationNotFoundIndicatorLeft = function(a) {
            return a ? (n = a, this) : n
        }, this.translationNotFoundIndicatorRight = function(a) {
            return a ? (o = a, this) : o
        }, this.fallbackLanguage = function(a) {
            return H(a), this
        };
        var H = function(a) {
            return a ? (angular.isString(a) ? (e = !0, d = [a]) : angular.isArray(a) && (e = !1, d = a), angular.isString(b) && B(d, b) < 0 && d.push(b), this) : e ? d[0] : d
        };
        this.use = function(a) {
            if (a) {
                if (!q[a] && !l) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + a + "'");
                return f = a, this
            }
            return f
        };
        var I = function(a) {
            return a ? void(s = a) : i ? i + s : s
        };
        this.storageKey = I, this.useUrlLoader = function(a, b) {
            return this.useLoader("$translateUrlLoader", angular.extend({
                url: a
            }, b))
        }, this.useStaticFilesLoader = function(a) {
            return this.useLoader("$translateStaticFilesLoader", a)
        }, this.useLoader = function(a, b) {
            return l = a, m = b || {}, this
        }, this.useLocalStorage = function() {
            return this.useStorage("$translateLocalStorage")
        }, this.useCookieStorage = function() {
            return this.useStorage("$translateCookieStorage")
        }, this.useStorage = function(a) {
            return h = a, this
        }, this.storagePrefix = function(a) {
            return a ? (i = a, this) : a
        }, this.useMissingTranslationHandlerLog = function() {
            return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
        }, this.useMissingTranslationHandler = function(a) {
            return j = a, this
        }, this.usePostCompiling = function(a) {
            return w = !!a, this
        }, this.determinePreferredLanguage = function(a) {
            var c = a && angular.isFunction(a) ? a() : A();
            return b = r.length ? D(c) : c, this
        }, this.registerAvailableLanguageKeys = function(a, b) {
            return a ? (r = a, b && (c = b), this) : r
        }, this.useLoaderCache = function(a) {
            return a === !1 ? p = void 0 : a === !0 ? p = !0 : "undefined" == typeof a ? p = "$translationCache" : a && (p = a), this
        }, this.$get = ["$log", "$injector", "$rootScope", "$q", function(a, c, i, r) {
            var x, z, A, J = c.get(k || "$translateDefaultInterpolation"),
                K = !1,
                L = {},
                M = {},
                N = function(a, c, e) {
                    if (angular.isArray(a)) {
                        var g = function(a) {
                            for (var b = {}, d = [], f = function(a) {
                                    var d = r.defer(),
                                        f = function(c) {
                                            b[a] = c, d.resolve([a, c])
                                        };
                                    return N(a, c, e).then(f, f), d.promise
                                }, g = 0, h = a.length; h > g; g++) d.push(f(a[g]));
                            return r.all(d).then(function() {
                                return b
                            })
                        };
                        return g(a)
                    }
                    var i = r.defer();
                    a && (a = C.apply(a));
                    var j = function() {
                        var a = b ? M[b] : M[f];
                        if (z = 0, h && !a) {
                            var c = x.get(s);
                            if (a = M[c], d && d.length) {
                                var e = B(d, c);
                                z = 0 === e ? 1 : 0, B(d, b) < 0 && d.push(b)
                            }
                        }
                        return a
                    }();
                    return j ? j.then(function() {
                        Z(a, c, e).then(i.resolve, i.reject)
                    }, i.reject) : Z(a, c, e).then(i.resolve, i.reject), i.promise
                },
                O = function(a) {
                    return n && (a = [n, a].join(" ")), o && (a = [a, o].join(" ")), a
                },
                P = function(a) {
                    f = a, i.$emit("$translateChangeSuccess", {
                        language: a
                    }), h && x.put(N.storageKey(), f), J.setLocale(f), angular.forEach(L, function(a, b) {
                        L[b].setLocale(f)
                    }), i.$emit("$translateChangeEnd", {
                        language: a
                    })
                },
                Q = function(a) {
                    if (!a) throw "No language key specified for loading.";
                    var b = r.defer();
                    i.$emit("$translateLoadingStart", {
                        language: a
                    }), K = !0;
                    var d = p;
                    "string" == typeof d && (d = c.get(d));
                    var e = angular.extend({}, m, {
                        key: a,
                        $http: angular.extend({}, {
                            cache: d
                        }, m.$http)
                    });
                    return c.get(l)(e).then(function(c) {
                        var d = {};
                        i.$emit("$translateLoadingSuccess", {
                            language: a
                        }), angular.isArray(c) ? angular.forEach(c, function(a) {
                            angular.extend(d, F(a))
                        }) : angular.extend(d, F(c)), K = !1, b.resolve({
                            key: a,
                            table: d
                        }), i.$emit("$translateLoadingEnd", {
                            language: a
                        })
                    }, function(a) {
                        i.$emit("$translateLoadingError", {
                            language: a
                        }), b.reject(a), i.$emit("$translateLoadingEnd", {
                            language: a
                        })
                    }), b.promise
                };
            if (h && (x = c.get(h), !x.get || !x.put)) throw new Error("Couldn't use storage '" + h + "', missing get() or put() method!");
            angular.isFunction(J.useSanitizeValueStrategy) && J.useSanitizeValueStrategy(u), t.length && angular.forEach(t, function(a) {
                var d = c.get(a);
                d.setLocale(b || f), angular.isFunction(d.useSanitizeValueStrategy) && d.useSanitizeValueStrategy(u), L[d.getInterpolationIdentifier()] = d
            });
            var R = function(a) {
                    var b = r.defer();
                    return Object.prototype.hasOwnProperty.call(q, a) ? b.resolve(q[a]) : M[a] ? M[a].then(function(a) {
                        E(a.key, a.table), b.resolve(a.table)
                    }, b.reject) : b.reject(), b.promise
                },
                S = function(a, b, c, d) {
                    var e = r.defer();
                    return R(a).then(function(g) {
                        Object.prototype.hasOwnProperty.call(g, b) ? (d.setLocale(a), e.resolve(d.interpolate(g[b], c)), d.setLocale(f)) : e.reject()
                    }, e.reject), e.promise
                },
                T = function(a, b, c, d) {
                    var e, g = q[a];
                    return g && Object.prototype.hasOwnProperty.call(g, b) && (d.setLocale(a), e = d.interpolate(g[b], c), d.setLocale(f)), e
                },
                U = function(a) {
                    if (j) {
                        var b = c.get(j)(a, f);
                        return void 0 !== b ? b : a
                    }
                    return a
                },
                V = function(a, b, c, e) {
                    var f = r.defer();
                    if (a < d.length) {
                        var g = d[a];
                        S(g, b, c, e).then(f.resolve, function() {
                            V(a + 1, b, c, e).then(f.resolve)
                        })
                    } else f.resolve(U(b));
                    return f.promise
                },
                W = function(a, b, c, e) {
                    var f;
                    if (a < d.length) {
                        var g = d[a];
                        f = T(g, b, c, e), f || (f = W(a + 1, b, c, e))
                    }
                    return f
                },
                X = function(a, b, c) {
                    return V(A > 0 ? A : z, a, b, c)
                },
                Y = function(a, b, c) {
                    return W(A > 0 ? A : z, a, b, c)
                },
                Z = function(a, b, c) {
                    var e = r.defer(),
                        g = f ? q[f] : q,
                        h = c ? L[c] : J;
                    if (g && Object.prototype.hasOwnProperty.call(g, a)) {
                        var i = g[a];
                        "@:" === i.substr(0, 2) ? N(i.substr(2), b, c).then(e.resolve, e.reject) : e.resolve(h.interpolate(i, b))
                    } else {
                        var k;
                        j && !K && (k = U(a)), f && d && d.length ? X(a, b, h).then(function(a) {
                            e.resolve(a)
                        }, function(a) {
                            e.reject(O(a))
                        }) : j && !K && k ? e.resolve(k) : e.reject(O(a))
                    }
                    return e.promise
                },
                $ = function(a, b, c) {
                    var e, g = f ? q[f] : q,
                        h = c ? L[c] : J;
                    if (g && Object.prototype.hasOwnProperty.call(g, a)) {
                        var i = g[a];
                        e = "@:" === i.substr(0, 2) ? $(i.substr(2), b, c) : h.interpolate(i, b)
                    } else {
                        var k;
                        j && !K && (k = U(a)), f && d && d.length ? (z = 0, e = Y(a, b, h)) : e = j && !K && k ? k : O(a)
                    }
                    return e
                };
            if (N.preferredLanguage = function(a) {
                    return a && G(a), b
                }, N.cloakClassName = function() {
                    return v
                }, N.fallbackLanguage = function(a) {
                    if (void 0 !== a && null !== a) {
                        if (H(a), l && d && d.length)
                            for (var b = 0, c = d.length; c > b; b++) M[d[b]] || (M[d[b]] = Q(d[b]));
                        N.use(N.use())
                    }
                    return e ? d[0] : d
                }, N.useFallbackLanguage = function(a) {
                    if (void 0 !== a && null !== a)
                        if (a) {
                            var b = B(d, a);
                            b > -1 && (A = b)
                        } else A = 0
                }, N.proposedLanguage = function() {
                    return g
                }, N.storage = function() {
                    return x
                }, N.use = function(a) {
                    if (!a) return f;
                    var b = r.defer();
                    i.$emit("$translateChangeStart", {
                        language: a
                    });
                    var c = D(a);
                    return c && (a = c), q[a] || !l || M[a] ? (b.resolve(a), P(a)) : (g = a, M[a] = Q(a).then(function(c) {
                        return E(c.key, c.table), b.resolve(c.key), P(c.key), g === a && (g = void 0), c
                    }, function(a) {
                        g === a && (g = void 0), i.$emit("$translateChangeError", {
                            language: a
                        }), b.reject(a), i.$emit("$translateChangeEnd", {
                            language: a
                        })
                    })), b.promise
                }, N.storageKey = function() {
                    return I()
                }, N.isPostCompilingEnabled = function() {
                    return w
                }, N.refresh = function(a) {
                    function b() {
                        e.resolve(), i.$emit("$translateRefreshEnd", {
                            language: a
                        })
                    }

                    function c() {
                        e.reject(), i.$emit("$translateRefreshEnd", {
                            language: a
                        })
                    }
                    if (!l) throw new Error("Couldn't refresh translation table, no loader registered!");
                    var e = r.defer();
                    if (i.$emit("$translateRefreshStart", {
                            language: a
                        }), a) q[a] ? Q(a).then(function(c) {
                        E(c.key, c.table), a === f && P(f), b()
                    }, c) : c();
                    else {
                        var g = [],
                            h = {};
                        if (d && d.length)
                            for (var j = 0, k = d.length; k > j; j++) g.push(Q(d[j])), h[d[j]] = !0;
                        f && !h[f] && g.push(Q(f)), r.all(g).then(function(a) {
                            angular.forEach(a, function(a) {
                                q[a.key] && delete q[a.key], E(a.key, a.table)
                            }), f && P(f), b()
                        })
                    }
                    return e.promise
                }, N.instant = function(a, c, e) {
                    if (null === a || angular.isUndefined(a)) return a;
                    if (angular.isArray(a)) {
                        for (var g = {}, h = 0, i = a.length; i > h; h++) g[a[h]] = N.instant(a[h], c, e);
                        return g
                    }
                    if (angular.isString(a) && a.length < 1) return a;
                    a && (a = C.apply(a));
                    var k, l = [];
                    b && l.push(b), f && l.push(f), d && d.length && (l = l.concat(d));
                    for (var m = 0, n = l.length; n > m; m++) {
                        var o = l[m];
                        if (q[o] && "undefined" != typeof q[o][a] && (k = $(a, c, e)), "undefined" != typeof k) break
                    }
                    return k || "" === k || (k = J.interpolate(a, c), j && !K && (k = U(a))), k
                }, N.versionInfo = function() {
                    return y
                }, N.loaderCache = function() {
                    return p
                }, l && (angular.equals(q, {}) && N.use(N.use()), d && d.length))
                for (var _ = function(a) {
                        return E(a.key, a.table), i.$emit("$translateChangeEnd", {
                            language: a.key
                        }), a
                    }, aa = 0, ba = d.length; ba > aa; aa++) M[d[aa]] = Q(d[aa]).then(_);
            return N
        }]
    }]), angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate", function(a) {
        var b, c = {},
            d = "default",
            e = null,
            f = {
                escaped: function(a) {
                    var b = {};
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = angular.element("<div></div>").text(a[c]).html());
                    return b
                }
            },
            g = function(a) {
                var b;
                return b = angular.isFunction(f[e]) ? f[e](a) : a
            };
        return c.setLocale = function(a) {
            b = a
        }, c.getInterpolationIdentifier = function() {
            return d
        }, c.useSanitizeValueStrategy = function(a) {
            return e = a, this
        }, c.interpolate = function(b, c) {
            return e && (c = g(c)), a(b)(c || {})
        }, c
    }]), angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope", function(a, b, c, d, e, f) {
        return {
            restrict: "AE",
            scope: !0,
            compile: function(b, g) {
                var h = g.translateValues ? g.translateValues : void 0,
                    i = g.translateInterpolation ? g.translateInterpolation : void 0,
                    j = b[0].outerHTML.match(/translate-value-+/i),
                    k = "^(.*)(" + c.startSymbol() + ".*" + c.endSymbol() + ")(.*)",
                    l = "^(.*)" + c.startSymbol() + "(.*)" + c.endSymbol() + "(.*)";
                return function(b, m, n) {
                    b.interpolateParams = {}, b.preText = "", b.postText = "";
                    var o = {},
                        p = function(a) {
                            if (angular.equals(a, "") || !angular.isDefined(a)) {
                                var d = m.text().match(k);
                                angular.isArray(d) ? (b.preText = d[1], b.postText = d[3], o.translate = c(d[2])(b.$parent), watcherMatches = m.text().match(l), angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length && b.$watch(watcherMatches[2], function(a) {
                                    o.translate = a, u()
                                })) : o.translate = m.text().replace(/^\s+|\s+$/g, "")
                            } else o.translate = a;
                            u()
                        },
                        q = function(a) {
                            n.$observe(a, function(b) {
                                o[a] = b, u()
                            })
                        };
                    n.$observe("translate", function(a) {
                        p(a)
                    });
                    for (var r in n) n.hasOwnProperty(r) && "translateAttr" === r.substr(0, 13) && q(r);
                    if (n.$observe("translateDefault", function(a) {
                            b.defaultText = a
                        }), h && n.$observe("translateValues", function(a) {
                            a && b.$parent.$watch(function() {
                                angular.extend(b.interpolateParams, e(a)(b.$parent))
                            })
                        }), j) {
                        var s = function(a) {
                            n.$observe(a, function(c) {
                                var d = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                                b.interpolateParams[d] = c
                            })
                        };
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && "translateValue" === t.substr(0, 14) && "translateValues" !== t && s(t)
                    }
                    var u = function() {
                            for (var a in o) o.hasOwnProperty(a) && o[a] && v(a, o[a], b, b.interpolateParams)
                        },
                        v = function(b, c, d, e) {
                            a(c, e, i).then(function(a) {
                                w(a, d, !0, b)
                            }, function(a) {
                                w(a, d, !1, b)
                            })
                        },
                        w = function(b, c, e, f) {
                            if ("translate" === f) {
                                e || "undefined" == typeof c.defaultText || (b = c.defaultText), m.html(c.preText + b + c.postText);
                                var h = a.isPostCompilingEnabled(),
                                    i = "undefined" != typeof g.translateCompile,
                                    j = i && "false" !== g.translateCompile;
                                (h && !i || j) && d(m.contents())(c)
                            } else {
                                e || "undefined" == typeof c.defaultText || (b = c.defaultText);
                                var k = n.$attr[f].substr(15);
                                m.attr(k, b)
                            }
                        };
                    b.$watch("interpolateParams", u, !0);
                    var x = f.$on("$translateChangeSuccess", u);
                    m.text().length && p(""), u(), b.$on("$destroy", x)
                }
            }
        }
    }]), angular.module("pascalprecht.translate").directive("translateCloak", ["$rootScope", "$translate", function(a, b) {
        return {
            compile: function(c) {
                var d = function() {
                        c.addClass(b.cloakClassName())
                    },
                    e = function() {
                        c.removeClass(b.cloakClassName())
                    },
                    f = a.$on("$translateChangeEnd", function() {
                        e(), f(), f = null
                    });
                return d(),
                    function(a, c, f) {
                        f.translateCloak && f.translateCloak.length && f.$observe("translateCloak", function(a) {
                            b(a).then(e, d)
                        })
                    }
            }
        }
    }]), angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate", function(a, b) {
        var c = function(c, d, e) {
            return angular.isObject(d) || (d = a(d)(this)), b.instant(c, d, e)
        };
        return c.$stateful = !0, c
    }]), angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", ["$q", "$http", function(a, b) {
        return function(c) {
            if (!c || !angular.isString(c.prefix) || !angular.isString(c.suffix)) throw new Error("Couldn't load static files, no prefix or suffix specified!");
            var d = a.defer();
            return b(angular.extend({
                url: [c.prefix, c.key, c.suffix].join(""),
                method: "GET",
                params: ""
            }, c.$http)).success(function(a) {
                d.resolve(a)
            }).error(function(a) {
                d.reject(c.key)
            }), d.promise
        }
    }]), angular.module("pascalprecht.translate").factory("$translateCookieStorage", ["$cookieStore", function(a) {
        var b = {
            get: function(b) {
                return a.get(b)
            },
            set: function(b, c) {
                a.put(b, c)
            },
            put: function(b, c) {
                a.put(b, c)
            }
        };
        return b
    }]), angular.module("pascalprecht.translate").factory("$translateLocalStorage", ["$window", "$translateCookieStorage", function(a, b) {
        var c = function() {
                var b;
                return {
                    get: function(c) {
                        return b || (b = a.localStorage.getItem(c)), b
                    },
                    set: function(c, d) {
                        b = d, a.localStorage.setItem(c, d)
                    },
                    put: function(c, d) {
                        b = d, a.localStorage.setItem(c, d)
                    }
                }
            }(),
            d = "localStorage" in a;
        if (d) {
            var e = "pascalprecht.translate.storageTest";
            try {
                null !== a.localStorage ? (a.localStorage.setItem(e, "foo"), a.localStorage.removeItem(e), d = !0) : d = !1
            } catch (f) {
                d = !1
            }
        }
        var g = d ? c : b;
        return g
    }]), angular.module("app", ["ngAnimate", "ngAria", "ngCookies", "ngMessages", "ngResource", "ngSanitize", "ngTouch", "ngStorage", "ui.router", "ui.bootstrap", "ui.utils", "ui.load", "ui.jq", "oc.lazyLoad", "pascalprecht.translate"]);
var app = angular.module("app").config(["$controllerProvider", "$compileProvider", "$filterProvider", "$provide", function(a, b, c, d) {
    app.controller = a.register, app.directive = b.directive, app.filter = c.register, app.factory = d.factory, app.service = d.service, app.constant = d.constant, app.value = d.value
}]).config(["$translateProvider", function(a) {
    a.useStaticFilesLoader({
        prefix: "l10n/",
        suffix: ".js"
    }), a.preferredLanguage("en"), a.useLocalStorage()
}]);
angular.module("app").constant("JQ_CONFIG", {
    easyPieChart: ["../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js"],
    sparkline: ["../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js"],
    plot: ["../libs/jquery/flot/jquery.flot.js", "../libs/jquery/flot/jquery.flot.pie.js", "../libs/jquery/flot/jquery.flot.resize.js", "../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js", "../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js", "../libs/jquery/flot-spline/js/jquery.flot.spline.min.js"],
    moment: ["../libs/jquery/moment/moment.js"],
    screenfull: ["../libs/jquery/screenfull/dist/screenfull.min.js"],
    slimScroll: ["../libs/jquery/slimscroll/jquery.slimscroll.min.js"],
    sortable: ["../libs/jquery/html5sortable/jquery.sortable.js"],
    nestable: ["../libs/jquery/nestable/jquery.nestable.js", "../libs/jquery/nestable/jquery.nestable.css"],
    filestyle: ["../libs/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js"],
    slider: ["../libs/jquery/bootstrap-slider/bootstrap-slider.js", "../libs/jquery/bootstrap-slider/bootstrap-slider.css"],
    chosen: ["../libs/jquery/chosen/chosen.jquery.min.js", "../libs/jquery/chosen/bootstrap-chosen.css"],
    TouchSpin: ["../libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js", "../libs/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"],
    wysiwyg: ["../libs/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js", "../libs/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js"],
    dataTable: ["../libs/jquery/datatables/media/js/jquery.dataTables.min.js", "../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js", "../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css"],
    vectorMap: ["../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js", "../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js", "../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js", "../libs/jquery/bower-jvectormap/jquery-jvectormap.css"],
    footable: ["../libs/jquery/footable/v3/js/footable.min.js", "../libs/jquery/footable/v3/css/footable.bootstrap.min.css"],
    fullcalendar: ["../libs/jquery/moment/moment.js", "../libs/jquery/fullcalendar/dist/fullcalendar.min.js", "../libs/jquery/fullcalendar/dist/fullcalendar.css", "../libs/jquery/fullcalendar/dist/fullcalendar.theme.css"],
    daterangepicker: ["../libs/jquery/moment/moment.js", "../libs/jquery/bootstrap-daterangepicker/daterangepicker.js", "../libs/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css"],
    tagsinput: ["../libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js", "../libs/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"]
}).constant("MODULE_CONFIG", [{
    name: "ngGrid",
    files: ["../libs/angular/ng-grid/build/ng-grid.min.js", "../libs/angular/ng-grid/ng-grid.min.css", "../libs/angular/ng-grid/ng-grid.bootstrap.css"]
}, {
    name: "ui.grid",
    files: ["../libs/angular/angular-ui-grid/ui-grid.min.js", "../libs/angular/angular-ui-grid/ui-grid.min.css", "../libs/angular/angular-ui-grid/ui-grid.bootstrap.css"]
}, {
    name: "ui.select",
    files: ["../libs/angular/angular-ui-select/dist/select.min.js", "../libs/angular/angular-ui-select/dist/select.min.css"]
}, {
    name: "angularFileUpload",
    files: ["../libs/angular/angular-file-upload/angular-file-upload.js"]
}, {
    name: "ui.calendar",
    files: ["../libs/angular/angular-ui-calendar/src/calendar.js"]
}, {
    name: "ngImgCrop",
    files: ["../libs/angular/ngImgCrop/compile/minified/ng-img-crop.js", "../libs/angular/ngImgCrop/compile/minified/ng-img-crop.css"]
}, {
    name: "angularBootstrapNavTree",
    files: ["../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js", "../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css"]
}, {
    name: "toaster",
    files: ["../libs/angular/angularjs-toaster/toaster.js", "../libs/angular/angularjs-toaster/toaster.css"]
}, {
    name: "textAngular",
    files: ["../libs/angular/textAngular/dist/textAngular-sanitize.min.js", "../libs/angular/textAngular/dist/textAngular.min.js"]
}, {
    name: "vr.directives.slider",
    files: ["../libs/angular/venturocket-angular-slider/build/angular-slider.min.js", "../libs/angular/venturocket-angular-slider/build/angular-slider.css"]
}, {
    name: "com.2fdevs.videogular",
    files: ["../libs/angular/videogular/videogular.min.js"]
}, {
    name: "com.2fdevs.videogular.plugins.controls",
    files: ["../libs/angular/videogular-controls/controls.min.js"]
}, {
    name: "com.2fdevs.videogular.plugins.buffering",
    files: ["../libs/angular/videogular-buffering/buffering.min.js"]
}, {
    name: "com.2fdevs.videogular.plugins.overlayplay",
    files: ["../libs/angular/videogular-overlay-play/overlay-play.min.js"]
}, {
    name: "com.2fdevs.videogular.plugins.poster",
    files: ["../libs/angular/videogular-poster/poster.min.js"]
}, {
    name: "com.2fdevs.videogular.plugins.imaads",
    files: ["../libs/angular/videogular-ima-ads/ima-ads.min.js"]
}, {
    name: "xeditable",
    files: ["../libs/angular/angular-xeditable/dist/js/xeditable.min.js", "../libs/angular/angular-xeditable/dist/css/xeditable.css"]
}, {
    name: "smart-table",
    files: ["../libs/angular/angular-smart-table/dist/smart-table.min.js"]
}, {
    name: "angular-skycons",
    files: ["../libs/angular/angular-skycons/angular-skycons.js"]
}]).config(["$ocLazyLoadProvider", "MODULE_CONFIG", function(a, b) {
    a.config({
        debug: !1,
        events: !0,
        modules: b
    })
}]), angular.module("app").run(["$rootScope", "$state", "$stateParams", function(a, b, c) {
    a.$state = b, a.$stateParams = c
}]).config(["$stateProvider", "$urlRouterProvider", "JQ_CONFIG", "MODULE_CONFIG", function(a, b, c, d) {
    function e(a, b) {
        return {
            deps: ["$ocLazyLoad", "$q", function(e, f) {
                var g = f.defer(),
                    h = !1;
                return a = angular.isArray(a) ? a : a.split(/\s+/), h || (h = g.promise), angular.forEach(a, function(a) {
                    h = h.then(function() {
                        return c[a] ? e.load(c[a]) : (angular.forEach(d, function(b) {
                            b.name == a ? name = b.name : name = a
                        }), e.load(name))
                    })
                }), g.resolve(), b ? h.then(function() {
                    return b()
                }) : h
            }]
        }
    }
    var f = "tpl/app.html";
    window.location.href.indexOf("material") > 0 ? (f = "tpl/blocks/material.layout.html", b.otherwise("/app/dashboard-v3")) : b.otherwise("/app/signup"), a.state("app", {
        "abstract": !0,
        url: "/app",
        templateUrl: f
    }).state("app.about", {
        url: "/about",
        templateUrl: "tpl/app_about.html",
        resolve: e(["js/controllers/about.js"])
    }).state("app.signup_0029_26", {
        url: "/signup_0029_26",
        templateUrl: "tpl/app_signup_0029_26.html",
        resolve: e(["js/controllers/signup.js"])
    }).state("app.signup_0030_27", {
        url: "/signup_0030_27",
        templateUrl: "tpl/app_signup_0030_27.html",
        resolve: e(["js/controllers/signup.js"])
    }).state("app.signup_0031_28", {
        url: "/signup_0031_28",
        templateUrl: "tpl/app_signup_0031_28.html",
         resolve: e(["js/controllers/signup.js"])
    }).state("app.signup_0033_30", {
        url: "/signup_0033_30",
        templateUrl: "tpl/app_signup_0033_30.html",
         resolve: e(["js/controllers/signup.js"])
    }).state("app.signup_0032_29", {
        url: "/signup_0032_29",
        templateUrl: "tpl/app_signup_0032_29.html",
         resolve: e(["js/controllers/signup.js"])
    }).state("app.ui.grid", {
        url: "/grid",
        templateUrl: "tpl/ui_grid.html"
    }).state("app.ui.widgets", {
        url: "/widgets",
        templateUrl: "tpl/ui_widgets.html"
    }).state("app.ui.bootstrap", {
        url: "/bootstrap",
        templateUrl: "tpl/ui_bootstrap.html"
    }).state("app.ui.sortable", {
        url: "/sortable",
        templateUrl: "tpl/ui_sortable.html"
    }).state("app.ui.scroll", {
        url: "/scroll",
        templateUrl: "tpl/ui_scroll.html",
        resolve: e("js/controllers/scroll.js")
    }).state("app.ui.portlet", {
        url: "/portlet",
        templateUrl: "tpl/ui_portlet.html"
    }).state("app.ui.timeline", {
        url: "/timeline",
        templateUrl: "tpl/ui_timeline.html"
    }).state("app.ui.tree", {
        url: "/tree",
        templateUrl: "tpl/ui_tree.html",
        resolve: e(["angularBootstrapNavTree", "js/controllers/tree.js"])
    }).state("app.ui.toaster", {
        url: "/toaster",
        templateUrl: "tpl/ui_toaster.html",
        resolve: e(["toaster", "js/controllers/toaster.js"])
    }).state("app.ui.jvectormap", {
        url: "/jvectormap",
        templateUrl: "tpl/ui_jvectormap.html",
        resolve: e("js/controllers/vectormap.js")
    }).state("app.ui.googlemap", {
        url: "/googlemap",
        templateUrl: "tpl/ui_googlemap.html",
        resolve: e(["js/app/map/load-google-maps.js", "js/app/map/ui-map.js", "js/app/map/map.js"], function() {
            return loadGoogleMaps()
        })
    }).state("app.chart", {
        url: "/chart",
        templateUrl: "tpl/ui_chart.html",
        resolve: e("js/controllers/chart.js")
    }).state("app.table", {
        url: "/table",
        template: "<div ui-view></div>"
    }).state("app.table.static", {
        url: "/static",
        templateUrl: "tpl/table_static.html"
    }).state("app.table.datatable", {
        url: "/datatable",
        templateUrl: "tpl/table_datatable.html"
    }).state("app.table.footable", {
        url: "/footable",
        templateUrl: "tpl/table_footable.html"
    }).state("app.table.grid", {
        url: "/grid",
        templateUrl: "tpl/table_grid.html",
        resolve: e(["ngGrid", "js/controllers/grid.js"])
    }).state("app.table.uigrid", {
        url: "/uigrid",
        templateUrl: "tpl/table_uigrid.html",
        resolve: e(["ui.grid", "js/controllers/uigrid.js"])
    }).state("app.table.editable", {
        url: "/editable",
        templateUrl: "tpl/table_editable.html",
        controller: "XeditableCtrl",
        resolve: e(["xeditable", "js/controllers/xeditable.js"])
    }).state("app.table.smart", {
        url: "/smart",
        templateUrl: "tpl/table_smart.html",
        resolve: e(["smart-table", "js/controllers/table.js"])
    }).state("app.form", {
        url: "/form",
        template: '<div ui-view class="fade-in"></div>',
        resolve: e("js/controllers/form.js")
    }).state("app.form.components", {
        url: "/components",
        templateUrl: "tpl/form_components.html",
        resolve: e(["ngBootstrap", "daterangepicker", "js/controllers/form.components.js"])
    }).state("app.form.elements", {
        url: "/elements",
        templateUrl: "tpl/form_elements.html"
    }).state("app.form.validation", {
        url: "/validation",
        templateUrl: "tpl/form_validation.html"
    }).state("app.form.wizard", {
        url: "/wizard",
        templateUrl: "tpl/form_wizard.html"
    }).state("app.form.fileupload", {
        url: "/fileupload",
        templateUrl: "tpl/form_fileupload.html",
        resolve: e(["angularFileUpload", "js/controllers/file-upload.js"])
    }).state("app.form.imagecrop", {
        url: "/imagecrop",
        templateUrl: "tpl/form_imagecrop.html",
        resolve: e(["ngImgCrop", "js/controllers/imgcrop.js"])
    }).state("app.form.select", {
        url: "/select",
        templateUrl: "tpl/form_select.html",
        controller: "SelectCtrl",
        resolve: e(["ui.select", "js/controllers/select.js"])
    }).state("app.form.slider", {
        url: "/slider",
        templateUrl: "tpl/form_slider.html",
        controller: "SliderCtrl",
        resolve: e(["vr.directives.slider", "js/controllers/slider.js"])
    }).state("app.form.editor", {
        url: "/editor",
        templateUrl: "tpl/form_editor.html",
        controller: "EditorCtrl",
        resolve: e(["textAngular", "js/controllers/editor.js"])
    }).state("app.form.xeditable", {
        url: "/xeditable",
        templateUrl: "tpl/form_xeditable.html",
        controller: "XeditableCtrl",
        resolve: e(["xeditable", "js/controllers/xeditable.js"])
    }).state("app.page", {
        url: "/page",
        template: '<div ui-view class="fade-in-down"></div>'
    }).state("app.page.profile", {
        url: "/profile",
        templateUrl: "tpl/page_profile.html"
    }).state("app.page.post", {
        url: "/post",
        templateUrl: "tpl/page_post.html"
    }).state("app.page.search", {
        url: "/search",
        templateUrl: "tpl/page_search.html"
    }).state("app.page.invoice", {
        url: "/invoice",
        templateUrl: "tpl/page_invoice.html"
    }).state("app.page.price", {
        url: "/price",
        templateUrl: "tpl/page_price.html"
    }).state("app.docs", {
        url: "/docs",
        templateUrl: "tpl/docs.html"
    }).state("lockme", {
        url: "/lockme",
        templateUrl: "tpl/page_lockme.html"
    }).state("access", {
        url: "/access",
        template: '<div ui-view class="fade-in-right-big smooth"></div>'
    }).state("app.signin", {
        url: "/signin",
        templateUrl: "tpl/app_signin.html"
        //resolve: e(["js/controllers/signin.js"])
    }).state("app.signup", {
        url: "/signup",
        templateUrl: "tpl/app_signup.html",
        resolve: e(["js/controllers/signup.js"])
    }).state("access.forgotpwd", {
        url: "/forgotpwd",
        templateUrl: "tpl/page_forgotpwd.html"
    }).state("access.404", {
        url: "/404",
        templateUrl: "tpl/page_404.html"
    }).state("app.calendar", {
        url: "/calendar",
        templateUrl: "tpl/app_calendar.html",
        resolve: e(["moment", "fullcalendar", "ui.calendar", "js/app/calendar/calendar.js"])
    }).state("app.mail", {
        "abstract": !0,
        url: "/mail",
        templateUrl: "tpl/mail.html",
        resolve: e(["js/app/mail/mail.js", "js/app/mail/mail-service.js", "moment"])
    }).state("app.mail.list", {
        url: "/inbox/{fold}",
        templateUrl: "tpl/mail.list.html"
    }).state("app.mail.detail", {
        url: "/{mailId:[0-9]{1,4}}",
        templateUrl: "tpl/mail.detail.html"
    }).state("app.mail.compose", {
        url: "/compose",
        templateUrl: "tpl/mail.new.html"
    }).state("layout", {
        "abstract": !0,
        url: "/layout",
        templateUrl: "tpl/layout.html"
    }).state("layout.fullwidth", {
        url: "/fullwidth",
        views: {
            "": {
                templateUrl: "tpl/layout_fullwidth.html"
            },
            footer: {
                templateUrl: "tpl/layout_footer_fullwidth.html"
            }
        },
        resolve: e(["js/controllers/vectormap.js"])
    }).state("layout.mobile", {
        url: "/mobile",
        views: {
            "": {
                templateUrl: "tpl/layout_mobile.html"
            },
            footer: {
                templateUrl: "tpl/layout_footer_mobile.html"
            }
        }
    }).state("layout.app", {
        url: "/app",
        views: {
            "": {
                templateUrl: "tpl/layout_app.html"
            },
            footer: {
                templateUrl: "tpl/layout_footer_fullwidth.html"
            }
        },
        resolve: e(["js/controllers/tab.js"])
    }).state("apps", {
        "abstract": !0,
        url: "/apps",
        templateUrl: "tpl/layout.html"
    }).state("apps.note", {
        url: "/note",
        templateUrl: "tpl/apps_note.html",
        resolve: e(["js/app/note/note.js", "moment"])
    }).state("apps.contact", {
        url: "/contact",
        templateUrl: "tpl/apps_contact.html",
        resolve: e(["js/app/contact/contact.js"])
    }).state("app.weather", {
        url: "/weather",
        templateUrl: "tpl/apps_weather.html",
        resolve: e(["js/app/weather/skycons.js", "angular-skycons", "js/app/weather/ctrl.js", "moment"])
    }).state("app.todo", {
        url: "/todo",
        templateUrl: "tpl/apps_todo.html",
        resolve: e(["js/app/todo/todo.js", "moment"])
    }).state("app.todo.list", {
        url: "/{fold}"
    }).state("app.note", {
        url: "/note",
        templateUrl: "tpl/apps_note_material.html",
        resolve: e(["js/app/note/note.js", "moment"])
    }).state("music", {
        url: "/music",
        templateUrl: "tpl/music.html",
        controller: "MusicCtrl",
        resolve: e(["com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls", "com.2fdevs.videogular.plugins.overlayplay", "com.2fdevs.videogular.plugins.poster", "com.2fdevs.videogular.plugins.buffering", "js/app/music/ctrl.js", "js/app/music/theme.css"])
    }).state("music.home", {
        url: "/home",
        templateUrl: "tpl/music.home.html"
    }).state("music.genres", {
        url: "/genres",
        templateUrl: "tpl/music.genres.html"
    }).state("music.detail", {
        url: "/detail",
        templateUrl: "tpl/music.detail.html"
    }).state("music.mtv", {
        url: "/mtv",
        templateUrl: "tpl/music.mtv.html"
    }).state("music.mtvdetail", {
        url: "/mtvdetail",
        templateUrl: "tpl/music.mtv.detail.html"
    }).state("music.playlist", {
        url: "/playlist/{fold}",
        templateUrl: "tpl/music.playlist.html"
    }).state("app.material", {
        url: "/material",
        template: '<div ui-view class="wrapper-md"></div>',
        resolve: e(["js/controllers/material.js"])
    }).state("app.material.button", {
        url: "/button",
        templateUrl: "tpl/material/button.html"
    }).state("app.material.color", {
        url: "/color",
        templateUrl: "tpl/material/color.html"
    }).state("app.material.icon", {
        url: "/icon",
        templateUrl: "tpl/material/icon.html"
    }).state("app.material.card", {
        url: "/card",
        templateUrl: "tpl/material/card.html"
    }).state("app.material.form", {
        url: "/form",
        templateUrl: "tpl/material/form.html"
    }).state("app.material.list", {
        url: "/list",
        templateUrl: "tpl/material/list.html"
    }).state("app.material.ngmaterial", {
        url: "/ngmaterial",
        templateUrl: "tpl/material/ngmaterial.html"
    })
}]), angular.module("app").controller("AppCtrl", ["$scope", "$translate", "$localStorage", "$window", function(a, b, c, d) {
    a.name= "Indian Birds";
   
    function e(a) {
        var b = a.navigator.userAgent || a.navigator.vendor || a.opera;
        return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(b)
    }
      var f = !!navigator.userAgent.match(/MSIE/i);
    f && angular.element(d.document.body).addClass("ie"), e(d) && angular.element(d.document.body).addClass("smart"), a.app = {
        dummyPara:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. ",
        version: "2.2.0",
        color: {
            primary: "#7266ba",
            info: "#23b7e5",
            success: "#27c24c",
            warning: "#fad733",
            danger: "#f05050",
            light: "#e8eff0",
            dark: "#3a3f51",
            black: "#1c2b36"
        },
        settings: {
            themeID: 1,
            navbarHeaderColor: "bg-info dker",
            navBarHeader:"bg-info",
            navbarCollapseColor: "bg-white-only",
            asideColor: "bg-black",
            headerFixed: !0,
            asideFixed: !1,
            asideFolded: !1,
            asideDock: !1,
            container: !1
        }
    }, angular.isDefined(c.settings) ? a.app.settings = c.settings : c.settings = a.app.settings, a.$watch("app.settings", function() {
        a.app.settings.asideDock && a.app.settings.asideFixed && (a.app.settings.headerFixed = !0), a.app.settings.container ? angular.element("html").addClass("bg") : angular.element("html").removeClass("bg"), c.settings = a.app.settings
    }, !0), a.lang = {
        isopen: !1
    }, a.langs = {
        en: "English",
        de_DE: "German",
        it_IT: "Italian"
    }, a.selectLang = a.langs[b.proposedLanguage()] || "English", a.setLang = function(c, d) {
        a.selectLang = a.langs[c], b.use(c), a.lang.isopen = !a.lang.isopen
    }
}]), angular.module("ui.load", []).service("uiLoad", ["$document", "$q", "$timeout", function(a, b, c) {
    var d = [],
        e = !1,
        f = b.defer();
    this.load = function(a) {
        a = angular.isArray(a) ? a : a.split(/\s+/);
        var b = this;
        return e || (e = f.promise), angular.forEach(a, function(a) {
            e = e.then(function() {
                return a.indexOf(".css") >= 0 ? b.loadCSS(a) : b.loadScript(a)
            })
        }), f.resolve(), e
    }, this.loadScript = function(e) {
        if (d[e]) return d[e].promise;
        var f = b.defer(),
            g = a[0].createElement("script");
        return g.src = e, g.onload = function(a) {
            c(function() {
                f.resolve(a)
            })
        }, g.onerror = function(a) {
            c(function() {
                f.reject(a)
            })
        }, a[0].body.appendChild(g), d[e] = f, f.promise
    }, this.loadCSS = function(e) {
        if (d[e]) return d[e].promise;
        var f = b.defer(),
            g = a[0].createElement("link");
        return g.rel = "stylesheet", g.type = "text/css", g.href = e, g.onload = function(a) {
            c(function() {
                f.resolve(a)
            })
        }, g.onerror = function(a) {
            c(function() {
                f.reject(a)
            })
        }, a[0].head.appendChild(g), d[e] = f, f.promise
    }
}]), angular.module("app").filter("fromNow", function() {
    return function(a) {
        return moment(a).fromNow()
    }
}), angular.module("app").directive("setNgAnimate", ["$animate", function(a) {
    return {
        link: function(b, c, d) {
            b.$watch(function() {
                return b.$eval(d.setNgAnimate, b)
            }, function(b, d) {
                a.enabled(!!b, c)
            })
        }
    }
}]), angular.module("app").directive("uiButterbar", ["$rootScope", "$anchorScroll", function(a, b) {
    return {
        restrict: "AC",
        template: '<span class="bar"></span>',
        link: function(a, c, d) {
            c.addClass("butterbar hide"), a.$on("$stateChangeStart", function(a) {
                b(), c.removeClass("hide").addClass("active")
            }), a.$on("$stateChangeSuccess", function(a, b, d, e) {
                a.targetScope.$watch("$viewContentLoaded", function() {
                    c.addClass("hide").removeClass("active")
                })
            })
        }
    }
}]), angular.module("app").directive("uiFocus", function(a, b) {
    return {
        link: function(c, d, e) {
            var f = b(e.uiFocus);
            c.$watch(f, function(b) {
                b === !0 && a(function() {
                    d[0].focus()
                })
            }), d.bind("blur", function() {
                c.$apply(f.assign(c, !1))
            })
        }
    }
}), angular.module("app").directive("uiFullscreen", ["uiLoad", "JQ_CONFIG", "$document", "$window", function(a, b, c, d) {
    return {
        restrict: "AC",
        template: '<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
        link: function(d, e, f) {
            e.addClass("hide"), a.load(b.screenfull).then(function() {
                screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./) && e.removeClass("hide"), e.on("click", function() {
                    var a;
                    f.target && (a = $(f.target)[0]), screenfull.toggle(a)
                }), c.on(screenfull.raw.fullscreenchange, function() {
                    screenfull.isFullscreen ? e.addClass("active") : e.removeClass("active")
                })
            })
        }
    }
}]), angular.module("ui.jq", ["ui.load"]).value("uiJqConfig", {}).directive("uiJq", ["uiJqConfig", "JQ_CONFIG", "uiLoad", "$timeout", function(a, b, c, d) {
    return {
        restrict: "A",
        compile: function(e, f) {
            if (!angular.isFunction(e[f.uiJq]) && !b[f.uiJq]) throw new Error('ui-jq: The "' + f.uiJq + '" function does not exist');
            var g = a && a[f.uiJq];
            return function(a, e, f) {
                function h() {
                    var b = [];
                    return f.uiOptions ? (b = a.$eval("[" + f.uiOptions + "]"), angular.isObject(g) && angular.isObject(b[0]) && (b[0] = angular.extend({}, g, b[0]))) : g && (b = [g]), b
                }

                function i() {
                    d(function() {
                        e[f.uiJq].apply(e, h())
                    }, 0, !1)
                }

                function j() {
                    f.uiRefresh && a.$watch(f.uiRefresh, function(a, b) {
                        a != b && i()
                    })
                }
                f.ngModel && e.is("select,input,textarea") && e.bind("change", function() {
                    e.trigger("input")
                }), b[f.uiJq] ? c.load(b[f.uiJq]).then(function() {
                    i(), j()
                })["catch"](function() {}) : (i(), j())
            }
        }
    }
}]), angular.module("app").directive("uiModule", ["MODULE_CONFIG", "uiLoad", "$compile", function(a, b, c) {
    return {
        restrict: "A",
        compile: function(d, e) {
            var f = d.contents().clone();
            return function(d, e, g) {
                e.contents().remove(), b.load(a[g.uiModule]).then(function() {
                    c(f)(d, function(a, b) {
                        e.append(a)
                    })
                })
            }
        }
    }
}]), angular.module("app").directive("uiNav", ["$timeout", function(a) {
    return {
        restrict: "AC",
        link: function(a, b, c) {
            var d, e = $(window),
                f = 768,
                g = $(".app-aside"),
                h = ".dropdown-backdrop";
            b.on("click", "a", function(a) {
                d && d.trigger("mouseleave.nav");
                var b = $(this);
                b.parent().siblings(".active").toggleClass("active"), b.next().is("ul") && b.parent().toggleClass("active") && a.preventDefault(), b.next().is("ul") || e.width() < f && $(".off-screen").removeClass("show off-screen")
            }), b.on("mouseenter", "a", function(a) {
                if (d && d.trigger("mouseleave.nav"), $("> .nav", g).remove(), !(!$(".app-aside-fixed.app-aside-folded").length || e.width() < f || $(".app-aside-dock").length)) {
                    var b, c = $(a.target),
                        i = $(window).height(),
                        j = 50,
                        k = 150;
                    !c.is("a") && (c = c.closest("a")), c.next().is("ul") && (d = c.next(), c.parent().addClass("active"), b = c.parent().position().top + j, d.css("top", b), b + d.height() > i && d.css("bottom", 0), b + k > i && d.css("bottom", i - b - j).css("top", "auto"), d.appendTo(g), d.on("mouseleave.nav", function(a) {
                        $(h).remove(), d.appendTo(c.parent()), d.off("mouseleave.nav").css("top", "auto").css("bottom", "auto"), c.parent().removeClass("active")
                    }), $(".smart").length && $('<div class="dropdown-backdrop"/>').insertAfter(".app-aside").on("click", function(a) {
                        a && a.trigger("mouseleave.nav")
                    }))
                }
            }), g.on("mouseleave", function(a) {
                d && d.trigger("mouseleave.nav"), $("> .nav", g).remove()
            })
        }
    }
}]), angular.module("app").directive("uiScrollTo", ["$location", "$anchorScroll", function(a, b) {
    return {
        restrict: "AC",
        link: function(c, d, e) {
            d.on("click", function(c) {
                a.hash(e.uiScrollTo), b()
            })
        }
    }
}]), angular.module("app").directive("uiShift", ["$timeout", function(a) {
    return {
        restrict: "A",
        link: function(b, c, d) {
            function e() {
                a(function() {
                    var a = d.uiShift,
                        b = d.target;
                    h.hasClass("in") || h[a](b).addClass("in")
                })
            }

            function f() {
                g && g.prepend(c), !g && h.insertAfter(j), h.removeClass("in")
            }
            var g, h = $(c),
                i = $(window),
                j = h.prev(),
                k = i.width();
            !j.length && (g = h.parent()), 768 > k && e() || f(), i.resize(function() {
                k !== i.width() && a(function() {
                    i.width() < 768 && e() || f(), k = i.width()
                })
            })
        }
    }
}]), angular.module("app").directive("uiToggleClass", ["$timeout", "$document", function(a, b) {
    return {
        restrict: "AC",
        link: function(a, b, c) {
            b.on("click", function(a) {
                function d(a, b) {
                    for (var c = new RegExp("\\s" + a.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g"), d = " " + $(b)[0].className + " "; c.test(d);) d = d.replace(c, " ");
                    $(b)[0].className = $.trim(d)
                }
                a.preventDefault();
                var e = c.uiToggleClass.split(","),
                    f = c.target && c.target.split(",") || Array(b),
                    g = 0;
                angular.forEach(e, function(a) {
                    var b = f[f.length && g]; - 1 !== a.indexOf("*") && d(a, b), $(b).toggleClass(a), g++
                }), $(b).toggleClass("active")
            })
        }
    }
}]), app.controller("AccordionDemoCtrl", ["$scope", function(a) {
    a.oneAtATime = !0, a.groups = [{
        title: "Accordion group header - #1",
        content: "Dynamic group body - #1"
    }, {
        title: "Accordion group header - #2",
        content: "Dynamic group body - #2"
    }], a.items = ["Item 1", "Item 2", "Item 3"], a.addItem = function() {
        var b = a.items.length + 1;
        a.items.push("Item " + b)
    }, a.status = {
        isFirstOpen: !0,
        isFirstDisabled: !1
    }
}]), app.controller("AlertDemoCtrl", ["$scope", function(a) {
    a.alerts = [{
        type: "success",
        msg: "Well done! You successfully read this important alert message."
    }, {
        type: "info",
        msg: "Heads up! This alert needs your attention, but it is not super important."
    }, {
        type: "warning",
        msg: "Warning! Best check yo self, you are not looking too good..."
    }], a.addAlert = function() {
        a.alerts.push({
            type: "danger",
            msg: "Oh snap! Change a few things up and try submitting again."
        })
    }, a.closeAlert = function(b) {
        a.alerts.splice(b, 1)
    }
}]), app.controller("ButtonsDemoCtrl", ["$scope", function(a) {
    a.singleModel = 1, a.radioModel = "Middle", a.checkModel = {
        left: !1,
        middle: !0,
        right: !1
    }
}]), app.controller("CarouselDemoCtrl", ["$scope", function(a) {
    a.myInterval = 5e3;
    var b = a.slides = [];
    a.addSlide = function() {
        b.push({
            image: "img/c" + b.length + ".jpg",
            text: ["Carousel text #0", "Carousel text #1", "Carousel text #2", "Carousel text #3"][b.length % 4]
        })
    };
    for (var c = 0; 4 > c; c++) a.addSlide()
}]), app.controller("DropdownDemoCtrl", ["$scope", function(a) {
    a.items = ["The first choice!", "And another choice for you.", "but wait! A third!"], a.status = {
        isopen: !1
    }, a.toggled = function(a) {}, a.toggleDropdown = function(b) {
        b.preventDefault(), b.stopPropagation(), a.status.isopen = !a.status.isopen
    }
}]), app.controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items", function(a, b, c) {
    a.items = c, a.selected = {
        item: a.items[0]
    }, a.ok = function() {
        b.close(a.selected.item)
    }, a.cancel = function() {
        b.dismiss("cancel")
    }
}]), app.controller("ModalDemoCtrl", ["$scope", "$modal", "$log", function(a, b, c) {
    a.items = ["item1", "item2", "item3"], a.open = function(d) {
        var e = b.open({
            templateUrl: "myModalContent.html",
            controller: "ModalInstanceCtrl",
            size: d,
            resolve: {
                items: function() {
                    return a.items
                }
            }
        });
        e.result.then(function(b) {
            a.selected = b
        }, function() {
            c.info("Modal dismissed at: " + new Date)
        })
    }
}]), app.controller("PaginationDemoCtrl", ["$scope", "$log", function(a, b) {
    a.totalItems = 64, a.currentPage = 4, a.setPage = function(b) {
        a.currentPage = b
    }, a.pageChanged = function() {
        b.info("Page changed to: " + a.currentPage)
    }, a.maxSize = 5, a.bigTotalItems = 175, a.bigCurrentPage = 1
}]), app.controller("PopoverDemoCtrl", ["$scope", function(a) {
    a.dynamicPopover = "Hello, World!", a.dynamicPopoverTitle = "Title"
}]), app.controller("ProgressDemoCtrl", ["$scope", function(a) {
    a.max = 200, a.random = function() {
        var b, c = Math.floor(100 * Math.random() + 1);
        b = 25 > c ? "success" : 50 > c ? "info" : 75 > c ? "warning" : "danger", a.showWarning = "danger" === b || "warning" === b, a.dynamic = c, a.type = b
    }, a.random(), a.randomStacked = function() {
        a.stacked = [];
        for (var b = ["success", "info", "warning", "danger"], c = 0, d = Math.floor(4 * Math.random() + 1); d > c; c++) {
            var e = Math.floor(4 * Math.random());
            a.stacked.push({
                value: Math.floor(30 * Math.random() + 1),
                type: b[e]
            })
        }
    }, a.randomStacked()
}]), app.controller("TabsDemoCtrl", ["$scope", function(a) {
    a.tabs = [{
        title: "Dynamic Title 1",
        content: "Dynamic content 1"
    }, {
        title: "Dynamic Title 2",
        content: "Dynamic content 2",
        disabled: !0
    }]
}]), app.controller("RatingDemoCtrl", ["$scope", function(a) {
    a.rate = 7, a.max = 10, a.isReadonly = !1, a.hoveringOver = function(b) {
        a.overStar = b, a.percent = 100 * (b / a.max)
    }
}]), app.controller("TooltipDemoCtrl", ["$scope", function(a) {
    a.dynamicTooltip = "Hello, World!", a.dynamicTooltipText = "dynamic", a.htmlTooltip = "I've been made <b>bold</b>!"
}]), app.controller("TypeaheadDemoCtrl", ["$scope", "$http", function(a, b) {
    a.selected = void 0, a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], a.getLocation = function(a) {
        return b.get("http://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: a,
                sensor: !1
            }
        }).then(function(a) {
            var b = [];
            return angular.forEach(a.data.results, function(a) {
                b.push(a.formatted_address)
            }), b
        })
    }
}]), app.controller("DatepickerDemoCtrl", ["$scope", function(a) {
    a.today = function() {
        a.dt = new Date
    }, a.today(), a.clear = function() {
        a.dt = null
    }, a.disabled = function(a, b) {
        return "day" === b && (0 === a.getDay() || 6 === a.getDay())
    }, a.toggleMin = function() {
        a.minDate = a.minDate ? null : new Date
    }, a.toggleMin(), a.open = function(b) {
        b.preventDefault(), b.stopPropagation(), a.opened = !0
    }, a.dateOptions = {
        formatYear: "yy",
        startingDay: 1,
        "class": "datepicker"
    }, a.initDate = new Date("2016-15-20"), a.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], a.format = a.formats[0]
}]), app.controller("TimepickerDemoCtrl", ["$scope", function(a) {
    a.mytime = new Date, a.hstep = 1, a.mstep = 15, a.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    }, a.ismeridian = !0, a.toggleMode = function() {
        a.ismeridian = !a.ismeridian
    }, a.update = function() {
        var b = new Date;
        b.setHours(14), b.setMinutes(0), a.mytime = b
    }, a.changed = function() {}, a.clear = function() {
        a.mytime = null
    }
}]);
 