import {
    P as C
} from "./entry.c9829b92.js";
const j = /#/g,
    P = /&/g,
    S = /=/g,
    g = /\+/g,
    A = /%5B/gi,
    O = /%5D/gi,
    L = /%5E/gi,
    $ = /%60/gi,
    N = /%7B/gi,
    U = /%7C/gi,
    q = /%7D/gi,
    Q = /%20/gi;

function I(e) {
    return encodeURI("" + e).replace(U, "|").replace(A, "[").replace(O, "]")
}

function l(e) {
    return I(e).replace(g, "%2B").replace(Q, "+").replace(j, "%23").replace(P, "%26").replace($, "`").replace(N, "{").replace(q, "}").replace(L, "^")
}

function h(e) {
    return l(e).replace(S, "%3D")
}

function R(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function B(e) {
    return R(e.replace(g, " "))
}

function H(e = "") {
    const r = {};
    e[0] === "?" && (e = e.substr(1));
    for (const o of e.split("&")) {
        const n = o.match(/([^=]+)=?(.*)/) || [];
        if (n.length < 2) continue;
        const s = R(n[1]);
        if (s === "__proto__" || s === "constructor") continue;
        const c = B(n[2] || "");
        r[s] ? Array.isArray(r[s]) ? r[s].push(c) : r[s] = [r[s], c] : r[s] = c
    }
    return r
}

function W(e, r) {
    return (typeof r == "number" || typeof r == "boolean") && (r = String(r)), r ? Array.isArray(r) ? r.map(o => `${h(e)}=${l(o)}`).join("&") : `${h(e)}=${l(r)}` : h(e)
}

function D(e) {
    return Object.keys(e).map(r => W(r, e[r])).join("&")
}
const F = /^\w+:(\/\/)?/,
    K = /^\/\/[^/]+/;

function _(e, r = !1) {
    return F.test(e) || r && K.test(e)
}
const G = /\/$|\/\?/;

function d(e = "", r = !1) {
    return r ? G.test(e) : e.endsWith("/")
}

function J(e = "", r = !1) {
    if (!r) return (d(e) ? e.slice(0, -1) : e) || "/";
    if (!d(e, !0)) return e || "/";
    const [o, ...n] = e.split("?");
    return (o.slice(0, -1) || "/") + (n.length ? `?${n.join("?")}` : "")
}

function M(e = "", r = !1) {
    if (!r) return e.endsWith("/") ? e : e + "/";
    if (d(e, !0)) return e || "/";
    const [o, ...n] = e.split("?");
    return o + "/" + (n.length ? `?${n.join("?")}` : "")
}

function V(e = "") {
    return e.startsWith("/")
}

function z(e = "") {
    return (V(e) ? e.substr(1) : e) || "/"
}

function X(e, r) {
    if (k(r) || _(e)) return e;
    const o = J(r);
    return e.startsWith(o) ? e : Z(o, e)
}

function Y(e, r) {
    const o = b(e),
        n = { ...H(o.search),
            ...r
        };
    return o.search = D(n), v(o)
}

function k(e) {
    return !e || e === "/"
}

function x(e) {
    return e && e !== "/"
}

function Z(e, ...r) {
    let o = e || "";
    for (const n of r.filter(x)) o = o ? M(o) + z(n) : n;
    return o
}

function b(e = "", r) {
    if (!_(e, !0)) return r ? b(r + e) : y(e);
    const [o = "", n, s = ""] = (e.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [c = "", i = ""] = (s.match(/([^/?#]*)(.*)?/) || []).splice(1), {
        pathname: u,
        search: a,
        hash: t
    } = y(i);
    return {
        protocol: o,
        auth: n ? n.substr(0, n.length - 1) : "",
        host: c,
        pathname: u,
        search: a,
        hash: t
    }
}

function y(e = "") {
    const [r = "", o = "", n = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: r,
        search: o,
        hash: n
    }
}

function v(e) {
    const r = e.pathname + (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") + e.hash;
    return e.protocol ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + r : r
}
class ee extends Error {
    constructor() {
        super(...arguments), this.name = "FetchError"
    }
}

function te(e, r, o) {
    let n = "";
    e && o && (n = `${o.status} ${o.statusText} (${e.toString()})`), r && (n = `${r.message} (${n})`);
    const s = new ee(n);
    return Object.defineProperty(s, "request", {
        get() {
            return e
        }
    }), Object.defineProperty(s, "response", {
        get() {
            return o
        }
    }), Object.defineProperty(s, "data", {
        get() {
            return o && o._data
        }
    }), Object.defineProperty(s, "status", {
        get() {
            return o && o.status
        }
    }), Object.defineProperty(s, "statusText", {
        get() {
            return o && o.statusText
        }
    }), Object.defineProperty(s, "statusCode", {
        get() {
            return o && o.status
        }
    }), Object.defineProperty(s, "statusMessage", {
        get() {
            return o && o.statusText
        }
    }), s
}
const re = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function E(e = "GET") {
    return re.has(e.toUpperCase())
}

function oe(e) {
    if (e === void 0) return !1;
    const r = typeof e;
    return r === "string" || r === "number" || r === "boolean" || r === null ? !0 : r !== "object" ? !1 : Array.isArray(e) ? !0 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const ne = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    se = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;

function ie(e = "") {
    if (!e) return "json";
    const r = e.split(";").shift();
    return se.test(r) ? "json" : ne.has(r) || r.startsWith("text/") ? "text" : "blob"
}
const ce = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

function m(e) {
    const {
        fetch: r,
        Headers: o
    } = e;

    function n(i) {
        const u = i.error && i.error.name === "AbortError" || !1;
        if (i.options.retry !== !1 && !u) {
            const t = typeof i.options.retry == "number" ? i.options.retry : E(i.options.method) ? 0 : 1,
                f = i.response && i.response.status || 500;
            if (t > 0 && ce.has(f)) return s(i.request, { ...i.options,
                retry: t - 1
            })
        }
        const a = te(i.request, i.error, i.response);
        throw Error.captureStackTrace && Error.captureStackTrace(a, s), a
    }
    const s = async function(u, a = {}) {
            const t = {
                request: u,
                options: { ...e.defaults,
                    ...a
                },
                response: void 0,
                error: void 0
            };
            t.options.onRequest && await t.options.onRequest(t), typeof t.request == "string" && (t.options.baseURL && (t.request = X(t.request, t.options.baseURL)), (t.options.query || t.options.params) && (t.request = Y(t.request, { ...t.options.params,
                ...t.options.query
            })), t.options.body && E(t.options.method) && oe(t.options.body) && (t.options.body = typeof t.options.body == "string" ? t.options.body : JSON.stringify(t.options.body), t.options.headers = new o(t.options.headers), t.options.headers.has("content-type") || t.options.headers.set("content-type", "application/json"), t.options.headers.has("accept") || t.options.headers.set("accept", "application/json"))), t.response = await r(t.request, t.options).catch(async p => (t.error = p, t.options.onRequestError && await t.options.onRequestError(t), n(t)));
            const f = (t.options.parseResponse ? "json" : t.options.responseType) || ie(t.response.headers.get("content-type") || "");
            if (f === "json") {
                const p = await t.response.text(),
                    T = t.options.parseResponse || C;
                t.response._data = T(p)
            } else f === "stream" ? t.response._data = t.response.body : t.response._data = await t.response[f]();
            return t.options.onResponse && await t.options.onResponse(t), t.response.status >= 400 && t.response.status < 600 ? (t.options.onResponseError && await t.options.onResponseError(t), n(t)) : t.response
        },
        c = function(u, a) {
            return s(u, a).then(t => t._data)
        };
    return c.raw = s, c.create = (i = {}) => m({ ...e,
        defaults: { ...e.defaults,
            ...i
        }
    }), c
}
const w = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    ae = w.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),
    ue = w.Headers,
    pe = m({
        fetch: ae,
        Headers: ue
    });
export {
    pe as $
};