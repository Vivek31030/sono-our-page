var ie = Object.defineProperty;
var oe = (e, t, n) => t in e ? ie(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var D = (e, t, n) => (oe(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
    u as se,
    r as K,
    M as Y,
    N as ae,
    z as j,
    J as ee,
    g as ce,
    O as ue,
    P as fe,
    E as le
} from "./entry.c9829b92.js";
const de = decodeURIComponent,
    ge = encodeURIComponent,
    pe = /; */,
    A = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

function me(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    let n = {},
        i = t || {},
        r = e.split(pe),
        o = i.decode || de;
    for (let s = 0; s < r.length; s++) {
        let u = r[s],
            a = u.indexOf("=");
        if (a < 0) continue;
        let c = u.substr(0, a).trim(),
            y = u.substr(++a, u.length).trim();
        y[0] == '"' && (y = y.slice(1, -1)), n[c] == null && (n[c] = he(y, o))
    }
    return n
}

function q(e, t, n) {
    let i = n || {},
        r = i.encode || ge;
    if (typeof r != "function") throw new TypeError("option encode is invalid");
    if (!A.test(e)) throw new TypeError("argument name is invalid");
    let o = r(t);
    if (o && !A.test(o)) throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (i.maxAge != null) {
        let u = i.maxAge - 0;
        if (isNaN(u) || !isFinite(u)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(u)
    }
    if (i.domain) {
        if (!A.test(i.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + i.domain
    }
    if (i.path) {
        if (!A.test(i.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + i.path
    }
    if (i.expires) {
        if (typeof i.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
        s += "; Expires=" + i.expires.toUTCString()
    }
    if (i.httpOnly && (s += "; HttpOnly"), i.secure && (s += "; Secure"), i.sameSite) switch (typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite) {
        case !0:
            s += "; SameSite=Strict";
            break;
        case "lax":
            s += "; SameSite=Lax";
            break;
        case "strict":
            s += "; SameSite=Strict";
            break;
        case "none":
            s += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
    }
    return s
}

function he(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
const ye = () => null;

function _e(...e) {
    var k, S, U, b, g, w, N;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    let [n, i, r = {}] = e;
    if (typeof n != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof i != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    r.server = (k = r.server) != null ? k : !0, r.default = (S = r.default) != null ? S : ye, r.lazy = (U = r.lazy) != null ? U : !1, r.immediate = (b = r.immediate) != null ? b : !0;
    const o = se(),
        s = () => o.isHydrating ? o.payload.data[n] : o.static.data[n],
        u = () => s() !== void 0;
    o._asyncData[n] || (o._asyncData[n] = {
        data: K((N = (w = s()) != null ? w : (g = r.default) == null ? void 0 : g.call(r)) != null ? N : null),
        pending: K(!u()),
        error: K(o.payload._errors[n] ? Y(o.payload._errors[n]) : null)
    });
    const a = { ...o._asyncData[n]
    };
    a.refresh = a.execute = (_ = {}) => {
        if (o._asyncDataPromises[n]) {
            if (_.dedupe === !1) return o._asyncDataPromises[n];
            o._asyncDataPromises[n].cancelled = !0
        }
        if (_._initial && u()) return s();
        a.pending.value = !0;
        const E = new Promise((f, R) => {
            try {
                f(i(o))
            } catch (P) {
                R(P)
            }
        }).then(f => {
            if (E.cancelled) return o._asyncDataPromises[n];
            r.transform && (f = r.transform(f)), r.pick && (f = Se(f, r.pick)), a.data.value = f, a.error.value = null
        }).catch(f => {
            var R, P;
            if (E.cancelled) return o._asyncDataPromises[n];
            a.error.value = f, a.data.value = ce((P = (R = r.default) == null ? void 0 : R.call(r)) != null ? P : null)
        }).finally(() => {
            E.cancelled || (a.pending.value = !1, o.payload.data[n] = a.data.value, a.error.value && (o.payload._errors[n] = Y(a.error.value)), delete o._asyncDataPromises[n])
        });
        return o._asyncDataPromises[n] = E, o._asyncDataPromises[n]
    };
    const c = () => a.refresh({
            _initial: !0
        }),
        y = r.server !== !1 && o.payload.serverRendered; {
        const _ = ue();
        if (_ && !_._nuxtOnBeforeMountCbs) {
            _._nuxtOnBeforeMountCbs = [];
            const f = _._nuxtOnBeforeMountCbs;
            _ && (ae(() => {
                f.forEach(R => {
                    R()
                }), f.splice(0, f.length)
            }), j(() => f.splice(0, f.length)))
        }
        y && o.isHydrating && u() ? a.pending.value = !1 : _ && (o.payload.serverRendered && o.isHydrating || r.lazy) && r.immediate ? _._nuxtOnBeforeMountCbs.push(c) : r.immediate && c(), r.watch && ee(r.watch, () => a.refresh());
        const E = o.hook("app:data:refresh", f => {
            if (!f || f.includes(n)) return a.refresh()
        });
        _ && j(E)
    }
    const m = Promise.resolve(o._asyncDataPromises[n]).then(() => a);
    return Object.assign(m, a), m
}

function Be(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, i, r] = e;
    return _e(n, i, { ...r,
        lazy: !0
    }, null)
}

function Se(e, t) {
    const n = {};
    for (const i of t) n[i] = e[i];
    return n
}
const we = {
    path: "/",
    decode: e => fe(decodeURIComponent(e)),
    encode: e => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};

function He(e, t) {
    var o, s;
    const n = { ...we,
            ...t
        },
        i = ve(n) || {},
        r = K((s = i[e]) != null ? s : (o = n.default) == null ? void 0 : o.call(n));
    return ee(r, () => {
        be(e, r.value, n)
    }), r
}

function ve(e = {}) {
    return me(document.cookie, e)
}

function ke(e, t, n = {}) {
    return t == null ? q(e, t, { ...n,
        maxAge: -1
    }) : q(e, t, n)
}

function be(e, t, n = {}) {
    document.cookie = ke(e, t, n)
}
let L;
const De = new Uint8Array(16);

function xe() {
    if (!L && (L = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !L)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return L(De)
}
const l = [];
for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));

function Ce(e, t = 0) {
    return (l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]).toLowerCase()
}
const Ee = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    G = {
        randomUUID: Ee
    };

function Me(e, t, n) {
    if (G.randomUUID && !t && !e) return G.randomUUID();
    e = e || {};
    const i = e.random || (e.rng || xe)();
    if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t) {
        n = n || 0;
        for (let r = 0; r < 16; ++r) t[n + r] = i[r];
        return t
    }
    return Ce(i)
}

function h(...e) {
    d("internalLog") && d("internalLog") == "ghl_team" && console.log(e)
}

function te() {
    try {
        return window.self !== window.top
    } catch {
        return !0
    }
}

function M(e, t) {
    let n = e;
    if (e || (n = document.location.href), n && t) {
        let i = new URL(n);
        h("function guessUrl: ", n, t), Object.keys(t).forEach(r => {
            i.searchParams.has(r) || i.searchParams.append(r, t[r])
        }), h("function guessUrl newer url: ", i.href), n = i.href
    }
    return !e && te() && (n = document.referrer || n), n
}

function ne(e) {
    const t = {};
    if (!e) return t;
    try {
        return new URL(e).searchParams.forEach((i, r) => {
            t[r] = i
        }), t
    } catch {
        return console.log("full url missing: ", e), t
    }
}

function d(e, t) {
    const n = ne(t || M());
    return e in n ? n[e] : ""
}

function z(e) {
    return d("utm_campaign", e) || d("campaign", e)
}

function Re(e) {
    return d("keyword", e) || d("utm_term", e) || d("utm_content", e)
}

function Ie(e) {
    if (d("gclid", e)) return "adword";
    if (d("msclkid", e)) return "bing";
    if (d("dclid", e)) return "yahoo";
    const t = d("utm_source", e),
        n = z(e);
    return t && t.toLowerCase() == "facebook" && n ? "facebook" : t && t.toLowerCase() == "fb_ad" && n ? "fb_ad" : t && t.toLowerCase() == "linkedin_ad" && n ? "linkedin_ad" : t && t.toLowerCase() == "twitter_ad" && n ? "twitter_ad" : ""
}

function Te() {
    return `${le().public.REST_API_URLS}/attribution_service`
}

function I(e, t) {
    const n = d("rf");
    if (n && typeof n == "string" && n == "false") return "";
    let i;
    try {
        t && typeof t == "string" && (i = new URL(t).host)
    } catch {}
    if (e && !e.includes(i)) return e;
    const r = d("hl_referrer");
    return r || (!te() && document.referrer && !document.referrer.includes(document.location.origin) ? document.referrer : "")
}

function Oe(e, t) {
    if (console.log("value : ", e), e === "") return "direct";
    if (e.includes("google")) return t.includes("gclid") ? "google paid" : "google organic";
    if (e.includes("twitter")) return "twitter";
    if (e.includes("bing")) return t.includes("msclkid") ? "bing paid" : "bing organic";
    if (e.includes("facebook")) return "facebook";
    if (e.includes("yahoo")) return t.includes("dclid") || t.includes("yahoo") ? "yahoo paid" : "yahoo organic";
    if (e.includes("duckduckgo")) return "duckduckgo"; {
        const n = document.createElement("a");
        return n.setAttribute("href", e), n.hostname
    }
}

function C(e) {
    try {
        const t = window[e],
            n = "__storage_test__";
        return t.setItem(n, n), t.removeItem(n), !0
    } catch {
        return !1
    }
}

function V(e) {
    if (C("localStorage")) return localStorage.getItem(e)
}

function F(e, t) {
    C("localStorage") && localStorage.setItem(e, t)
}

function T(e) {
    C("localStorage") && localStorage.removeItem(e)
}

function Ue(e) {
    if (!C("localStorage")) return;
    const t = localStorage.getItem(e);
    if (!t) return null;
    const n = JSON.parse(t);
    return new Date().getTime() > n.expiry ? (localStorage.removeItem(e), null) : n.value
}

function p(e) {
    const t = Ue(e);
    if (t) return t;
    const n = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
    return n && n[2] ? n[2] : ""
}

function re(e, t, n) {
    if (!C("localStorage")) return;
    const i = new Date,
        r = {
            value: t,
            expiry: i.getTime() + n
        };
    localStorage.setItem(e, JSON.stringify(r))
}

function J(e, t, n) {
    if (C("localStorage")) {
        var i = 31536e6;
        n && (i = n * 24 * 60 * 60 * 1e3), re(e, t, i)
    } else {
        let r = "";
        if (n) {
            let o = new Date;
            o.setTime(o.getTime() + n * 24 * 60 * 60 * 1e3), r = "; expires=" + o.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + r + "; path=/"
    }
}

function O(e, t, n) {
    if (C("localStorage")) n || (n = 1), re(e, t, n * 60 * 1e3);
    else {
        let i = "";
        if (n) {
            const r = new Date;
            r.setTime(r.getTime() + n * 60 * 1e3), i = "; expires=" + r.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + i + "; path=/"
    }
}
const Q = "v2_history",
    W = "v2_contact_session_",
    Ne = "v2_session_history_",
    Pe = "v2_user_session_event_",
    Ae = "v3_first_session_event_";

function x(e) {
    return e = e || p("location_id"), e ? `${Q}_${e}` : Q
}

function v(e) {
    return e = e || p("location_id"), e ? `${W}${e}_session_id` : `${W}id`
}

function $(e) {
    return e = e || p("location_id"), `${Ne}${e}`
}

function X(e) {
    return e = e || p("location_id"), `${Pe}${e}_fingerprint`
}

function B(e) {
    return `${Ae}${e}`
}

function Le() {
    return /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)
}
async function Z(e, t) {
    try {
        var n = await fetch(e, {
            method: "POST",
            body: JSON.stringify(t),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await n.json()
    } catch {
        return {}
    }
}

function $e() {
    return p("_fbp")
}

function Ke() {
    return p("_fbc")
}

function H(e) {
    if (!e) return null;
    try {
        return JSON.parse(e)
    } catch (t) {
        return console.log(t), null
    }
}
class Ve {
    constructor(t, n) {
        D(this, "baseUrl");
        D(this, "locationId");
        D(this, "fingerprint");
        D(this, "type");
        D(this, "parentId");
        D(this, "parentName");
        this.baseUrl = Te(), console.log(this.baseUrl), this.locationId = t, this.fingerprint = n
    }
    eventData(t, n) {
        let i, r;
        if (this.locationId) {
            let s = V($(this.locationId));
            s && (i = s), r = p(B(this.locationId))
        }
        h("function eventData: ", this.locationId, r);
        let o = M(t, r == null ? void 0 : r.url_params);
        return {
            source: Oe(I(n, t), document.location.href),
            referrer: I(n, t) || (r == null ? void 0 : r.referrer) || "",
            keyword: Re(o),
            adSource: Ie(o),
            url_params: ne(o),
            page: {
                url: o,
                title: document.title
            },
            timestamp: Date.now(),
            campaign: z(o),
            contactSessionIds: H(i),
            fbp: $e(),
            fbc: Ke()
        }
    }
    pageVisitData(t, n, i) {
        return h("function pageVisitData: ", t, n, i), { ...this.eventData(t, n),
            type: "page-visit",
            parentId: d("trigger_link") ? d("trigger_link") : this.parentId || "",
            pageVisitType: d("trigger_link") ? "trigger-link" : this.type || "",
            domain: document.domain,
            version: "v3",
            parentName: this.parentName || "",
            fingerprint: null,
            ...i
        }
    }
    async store(t, n, i, r, o, s, u) {
        h("extras form script: ", u), this.locationId = t;
        var a = this.fingerprint || p("fingerprint"),
            c = p(v(t));
        if (this.type = n, this.parentId = i, this.parentName = r, Le()) return;
        const y = I(s, o);
        if (c || O(v(t), "temp", 1), c == "temp") return;
        c || (h(`Not found sessionId so removing older sessions: ${v(t)}`), T(x(t))), c && O(v(t), c, 30);
        let m = H(V(x(t)));
        if (h("function store: history", m), m && m.sessions) {
            const g = m.sessions[m.sessions.length - 1],
                w = p(B(t));
            let N = M(o, w == null ? void 0 : w.url_params);
            (g.referrer != (I(s, o) || (w == null ? void 0 : w.referrer) || "") || g.campaign != z(N)) && (h(`Referrer and campaign change > newReferrer: ${I(s,o)} > old referrer: ${g.referrer}`), m = null, c = null, T(x(t)))
        }
        if (m)
            if (c && m && n != "call-swap") {
                h("function store: sessionId & history", c, m);
                var U = m.sessions,
                    b = this.pageVisitData(o, s, u);
                h("function store: newSession", b);
                try {
                    var S = await Z(`${this.baseUrl}/user_session_v3/update_session/${c}`, {
                        locationId: t,
                        sessions: b
                    });
                    b.fingerprint = S.fingerprint, F(x(t), JSON.stringify({
                        sessions: [...U, b]
                    }))
                } catch (g) {
                    console.log(g)
                }
            } else T(x(t)), await this.store(t, n, i, r, o, s);
        else {
            var k = this.pageVisitData(o, s, u);
            h("function store: sessions", k);
            try {
                var S = await Z(`${this.baseUrl}/user_session_v3/create_session`, {
                    sessions: k,
                    initialReferrer: y,
                    locationId: t,
                    fingerprint: a,
                    sessionId: c
                });
                (!c || c != S.sessionId) && O(v(t), S.sessionId, 30), k.fingerprint = S.fingerprint, F(x(t), JSON.stringify({
                    sessions: [k]
                }));
                let g = H(V($(t)));
                g ? g.ids.push(S.sessionId) : (g = {
                    ids: [S.sessionId]
                }, O(B(t), k, 30)), h("function store: contactSessionIds", g), F($(t), JSON.stringify(g))
            } catch (g) {
                console.log(g), T(x(t))
            }
        }
    }
    async create(t, n, i, r, o, s, u) {
        this.locationId = t;
        var a = p(v(t)),
            c = d("sessionId");
        let y = 10;
        (!a || a == "temp") && (y = 100), setTimeout(async () => {
            c && J(v(t), c, 365), await this.store(t, n, i, r, o, s, u)
        }, y)
    }
    update(t) {
        const n = t.sessionId || "",
            i = t.locationId || "";
        this.locationId = i, n && (O(v(i), n, 30), T($(i)))
    }
    getCookie(t) {
        return p(t)
    }
    setCookies(t, n) {
        t && n && J(t, n)
    }
    getSessionId(t) {
        return p(v(t || this.locationId))
    }
    getUserFingerprint(t) {
        return p(X(t || this.locationId))
    }
    setUserFingerprint(t, n) {
        return J(X(t || this.locationId), n)
    }
}
const ze = async () => {
    var e = typeof window > "u" ? {} : window,
        t = e.userSessionAttribution;
    t || (t = e.userSessionAttribution = new Ve)
};
export {
    _e as a, Be as b, ze as s, He as u, Me as v
};