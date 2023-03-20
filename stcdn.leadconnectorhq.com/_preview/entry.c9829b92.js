function rs(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let o = 0; o < r.length; o++) n[r[o]] = !0;
    return t ? o => !!n[o.toLowerCase()] : o => !!n[o]
}

function os(e) {
    if (Q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                o = Ae(r) ? Fu(r) : os(r);
            if (o)
                for (const s in o) t[s] = o[s]
        }
        return t
    } else {
        if (Ae(e)) return e;
        if (ge(e)) return e
    }
}
const Lu = /;(?![^(]*\))/g,
    Mu = /:([^]+)/,
    Nu = /\/\*.*?\*\//gs;

function Fu(e) {
    const t = {};
    return e.replace(Nu, "").split(Lu).forEach(n => {
        if (n) {
            const r = n.split(Mu);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function ss(e) {
    let t = "";
    if (Ae(e)) t = e;
    else if (Q(e))
        for (let n = 0; n < e.length; n++) {
            const r = ss(e[n]);
            r && (t += r + " ")
        } else if (ge(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Du = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Hu = rs(Du);

function kl(e) {
    return !!e || e === ""
}

function ju(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = rn(e[r], t[r]);
    return n
}

function rn(e, t) {
    if (e === t) return !0;
    let n = Ks(e),
        r = Ks(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (n = Yn(e), r = Yn(t), n || r) return e === t;
    if (n = Q(e), r = Q(t), n || r) return n && r ? ju(e, t) : !1;
    if (n = ge(e), r = ge(t), n || r) {
        if (!n || !r) return !1;
        const o = Object.keys(e).length,
            s = Object.keys(t).length;
        if (o !== s) return !1;
        for (const a in e) {
            const i = e.hasOwnProperty(a),
                l = t.hasOwnProperty(a);
            if (i && !l || !i && l || !rn(e[a], t[a])) return !1
        }
    }
    return String(e) === String(t)
}

function as(e, t) {
    return e.findIndex(n => rn(n, t))
}
const Cy = e => Ae(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === Tl || !X(e.toString)) ? JSON.stringify(e, wl, 2) : String(e),
    wl = (e, t) => t && t.__v_isRef ? wl(e, t.value) : pn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
    } : On(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : ge(t) && !Q(t) && !Cl(t) ? String(t) : t,
    we = {},
    mn = [],
    ut = () => {},
    Uu = () => !1,
    zu = /^on[^a-z]/,
    or = e => zu.test(e),
    is = e => e.startsWith("onUpdate:"),
    je = Object.assign,
    ls = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Wu = Object.prototype.hasOwnProperty,
    ce = (e, t) => Wu.call(e, t),
    Q = Array.isArray,
    pn = e => sr(e) === "[object Map]",
    On = e => sr(e) === "[object Set]",
    Ks = e => sr(e) === "[object Date]",
    X = e => typeof e == "function",
    Ae = e => typeof e == "string",
    Yn = e => typeof e == "symbol",
    ge = e => e !== null && typeof e == "object",
    cs = e => ge(e) && X(e.then) && X(e.catch),
    Tl = Object.prototype.toString,
    sr = e => Tl.call(e),
    xu = e => sr(e).slice(8, -1),
    Cl = e => sr(e) === "[object Object]",
    us = e => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    xn = rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    jr = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    Bu = /-(\w)/g,
    yt = jr(e => e.replace(Bu, (t, n) => n ? n.toUpperCase() : "")),
    Vu = /\B([A-Z])/g,
    an = jr(e => e.replace(Vu, "-$1").toLowerCase()),
    Ur = jr(e => e.charAt(0).toUpperCase() + e.slice(1)),
    to = jr(e => e ? `on${Ur(e)}` : ""),
    Qn = (e, t) => !Object.is(e, t),
    gn = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    },
    Rr = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    on = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let Gs;
const $u = () => Gs || (Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let ht;
class Rl {
    constructor(t = !1) {
        this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = ht, !t && ht && (this.index = (ht.scopes || (ht.scopes = [])).push(this) - 1)
    }
    run(t) {
        if (this.active) {
            const n = ht;
            try {
                return ht = this, t()
            } finally {
                ht = n
            }
        }
    }
    on() {
        ht = this
    }
    off() {
        ht = this.parent
    }
    stop(t) {
        if (this.active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0, this.active = !1
        }
    }
}

function qu(e) {
    return new Rl(e)
}

function Ku(e, t = ht) {
    t && t.active && t.effects.push(e)
}
const fs = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    },
    Al = e => (e.w & xt) > 0,
    Pl = e => (e.n & xt) > 0,
    Gu = ({
        deps: e
    }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= xt
    },
    Ju = e => {
        const {
            deps: t
        } = e;
        if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
                const o = t[r];
                Al(o) && !Pl(o) ? o.delete(e) : t[n++] = o, o.w &= ~xt, o.n &= ~xt
            }
            t.length = n
        }
    },
    wo = new WeakMap;
let Un = 0,
    xt = 1;
const To = 30;
let ct;
const en = Symbol(""),
    Co = Symbol("");
class ds {
    constructor(t, n = null, r) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ku(this, r)
    }
    run() {
        if (!this.active) return this.fn();
        let t = ct,
            n = Ut;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = ct, ct = this, Ut = !0, xt = 1 << ++Un, Un <= To ? Gu(this) : Js(this), this.fn()
        } finally {
            Un <= To && Ju(this), xt = 1 << --Un, ct = this.parent, Ut = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        ct === this ? this.deferStop = !0 : this.active && (Js(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Js(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let Ut = !0;
const Ol = [];

function In() {
    Ol.push(Ut), Ut = !1
}

function Sn() {
    const e = Ol.pop();
    Ut = e === void 0 ? !0 : e
}

function tt(e, t, n) {
    if (Ut && ct) {
        let r = wo.get(e);
        r || wo.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = fs()), Il(o)
    }
}

function Il(e, t) {
    let n = !1;
    Un <= To ? Pl(e) || (e.n |= xt, n = !Al(e)) : n = !e.has(ct), n && (e.add(ct), ct.deps.push(e))
}

function Rt(e, t, n, r, o, s) {
    const a = wo.get(e);
    if (!a) return;
    let i = [];
    if (t === "clear") i = [...a.values()];
    else if (n === "length" && Q(e)) {
        const l = on(r);
        a.forEach((c, u) => {
            (u === "length" || u >= l) && i.push(c)
        })
    } else switch (n !== void 0 && i.push(a.get(n)), t) {
        case "add":
            Q(e) ? us(n) && i.push(a.get("length")) : (i.push(a.get(en)), pn(e) && i.push(a.get(Co)));
            break;
        case "delete":
            Q(e) || (i.push(a.get(en)), pn(e) && i.push(a.get(Co)));
            break;
        case "set":
            pn(e) && i.push(a.get(en));
            break
    }
    if (i.length === 1) i[0] && Ro(i[0]);
    else {
        const l = [];
        for (const c of i) c && l.push(...c);
        Ro(fs(l))
    }
}

function Ro(e, t) {
    const n = Q(e) ? e : [...e];
    for (const r of n) r.computed && Ys(r);
    for (const r of n) r.computed || Ys(r)
}

function Ys(e, t) {
    (e !== ct || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Yu = rs("__proto__,__v_isRef,__isVue"),
    Sl = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Yn)),
    Qu = hs(),
    Zu = hs(!1, !0),
    Xu = hs(!0),
    Qs = ef();

function ef() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = fe(this);
            for (let s = 0, a = this.length; s < a; s++) tt(r, "get", s + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(fe)) : o
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            In();
            const r = fe(this)[t].apply(this, n);
            return Sn(), r
        }
    }), e
}

function hs(e = !1, t = !1) {
    return function(r, o, s) {
        if (o === "__v_isReactive") return !e;
        if (o === "__v_isReadonly") return e;
        if (o === "__v_isShallow") return t;
        if (o === "__v_raw" && s === (e ? t ? _f : Dl : t ? Fl : Nl).get(r)) return r;
        const a = Q(r);
        if (!e && a && ce(Qs, o)) return Reflect.get(Qs, o, s);
        const i = Reflect.get(r, o, s);
        return (Yn(o) ? Sl.has(o) : Yu(o)) || (e || tt(r, "get", o), t) ? i : Oe(i) ? a && us(o) ? i : i.value : ge(i) ? e ? Hl(i) : bt(i) : i
    }
}
const tf = Ll(),
    nf = Ll(!0);

function Ll(e = !1) {
    return function(n, r, o, s) {
        let a = n[r];
        if (kn(a) && Oe(a) && !Oe(o)) return !1;
        if (!e && (!Ar(o) && !kn(o) && (a = fe(a), o = fe(o)), !Q(n) && Oe(a) && !Oe(o))) return a.value = o, !0;
        const i = Q(n) && us(r) ? Number(r) < n.length : ce(n, r),
            l = Reflect.set(n, r, o, s);
        return n === fe(s) && (i ? Qn(o, a) && Rt(n, "set", r, o) : Rt(n, "add", r, o)), l
    }
}

function rf(e, t) {
    const n = ce(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && Rt(e, "delete", t, void 0), r
}

function of (e, t) {
    const n = Reflect.has(e, t);
    return (!Yn(t) || !Sl.has(t)) && tt(e, "has", t), n
}

function sf(e) {
    return tt(e, "iterate", Q(e) ? "length" : en), Reflect.ownKeys(e)
}
const Ml = {
        get: Qu,
        set: tf,
        deleteProperty: rf,
        has: of ,
        ownKeys: sf
    },
    af = {
        get: Xu,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        }
    },
    lf = je({}, Ml, {
        get: Zu,
        set: nf
    }),
    ms = e => e,
    zr = e => Reflect.getPrototypeOf(e);

function fr(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const o = fe(e),
        s = fe(t);
    n || (t !== s && tt(o, "get", t), tt(o, "get", s));
    const {
        has: a
    } = zr(o), i = r ? ms : n ? _s : Zn;
    if (a.call(o, t)) return i(e.get(t));
    if (a.call(o, s)) return i(e.get(s));
    e !== o && e.get(t)
}

function dr(e, t = !1) {
    const n = this.__v_raw,
        r = fe(n),
        o = fe(e);
    return t || (e !== o && tt(r, "has", e), tt(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o)
}

function hr(e, t = !1) {
    return e = e.__v_raw, !t && tt(fe(e), "iterate", en), Reflect.get(e, "size", e)
}

function Zs(e) {
    e = fe(e);
    const t = fe(this);
    return zr(t).has.call(t, e) || (t.add(e), Rt(t, "add", e, e)), this
}

function Xs(e, t) {
    t = fe(t);
    const n = fe(this),
        {
            has: r,
            get: o
        } = zr(n);
    let s = r.call(n, e);
    s || (e = fe(e), s = r.call(n, e));
    const a = o.call(n, e);
    return n.set(e, t), s ? Qn(t, a) && Rt(n, "set", e, t) : Rt(n, "add", e, t), this
}

function ea(e) {
    const t = fe(this),
        {
            has: n,
            get: r
        } = zr(t);
    let o = n.call(t, e);
    o || (e = fe(e), o = n.call(t, e)), r && r.call(t, e);
    const s = t.delete(e);
    return o && Rt(t, "delete", e, void 0), s
}

function ta() {
    const e = fe(this),
        t = e.size !== 0,
        n = e.clear();
    return t && Rt(e, "clear", void 0, void 0), n
}

function mr(e, t) {
    return function(r, o) {
        const s = this,
            a = s.__v_raw,
            i = fe(a),
            l = t ? ms : e ? _s : Zn;
        return !e && tt(i, "iterate", en), a.forEach((c, u) => r.call(o, l(c), l(u), s))
    }
}

function pr(e, t, n) {
    return function(...r) {
        const o = this.__v_raw,
            s = fe(o),
            a = pn(s),
            i = e === "entries" || e === Symbol.iterator && a,
            l = e === "keys" && a,
            c = o[e](...r),
            u = n ? ms : t ? _s : Zn;
        return !t && tt(s, "iterate", l ? Co : en), {
            next() {
                const {
                    value: d,
                    done: f
                } = c.next();
                return f ? {
                    value: d,
                    done: f
                } : {
                    value: i ? [u(d[0]), u(d[1])] : u(d),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function St(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}

function cf() {
    const e = {
            get(s) {
                return fr(this, s)
            },
            get size() {
                return hr(this)
            },
            has: dr,
            add: Zs,
            set: Xs,
            delete: ea,
            clear: ta,
            forEach: mr(!1, !1)
        },
        t = {
            get(s) {
                return fr(this, s, !1, !0)
            },
            get size() {
                return hr(this)
            },
            has: dr,
            add: Zs,
            set: Xs,
            delete: ea,
            clear: ta,
            forEach: mr(!1, !0)
        },
        n = {
            get(s) {
                return fr(this, s, !0)
            },
            get size() {
                return hr(this, !0)
            },
            has(s) {
                return dr.call(this, s, !0)
            },
            add: St("add"),
            set: St("set"),
            delete: St("delete"),
            clear: St("clear"),
            forEach: mr(!0, !1)
        },
        r = {
            get(s) {
                return fr(this, s, !0, !0)
            },
            get size() {
                return hr(this, !0)
            },
            has(s) {
                return dr.call(this, s, !0)
            },
            add: St("add"),
            set: St("set"),
            delete: St("delete"),
            clear: St("clear"),
            forEach: mr(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        e[s] = pr(s, !1, !1), n[s] = pr(s, !0, !1), t[s] = pr(s, !1, !0), r[s] = pr(s, !0, !0)
    }), [e, n, t, r]
}
const [uf, ff, df, hf] = cf();

function ps(e, t) {
    const n = t ? e ? hf : df : e ? ff : uf;
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ce(n, o) && o in r ? n : r, o, s)
}
const mf = {
        get: ps(!1, !1)
    },
    pf = {
        get: ps(!1, !0)
    },
    gf = {
        get: ps(!0, !1)
    },
    Nl = new WeakMap,
    Fl = new WeakMap,
    Dl = new WeakMap,
    _f = new WeakMap;

function yf(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function bf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : yf(xu(e))
}

function bt(e) {
    return kn(e) ? e : gs(e, !1, Ml, mf, Nl)
}

function vf(e) {
    return gs(e, !1, lf, pf, Fl)
}

function Hl(e) {
    return gs(e, !0, af, gf, Dl)
}

function gs(e, t, n, r, o) {
    if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = o.get(e);
    if (s) return s;
    const a = bf(e);
    if (a === 0) return e;
    const i = new Proxy(e, a === 2 ? r : n);
    return o.set(e, i), i
}

function _n(e) {
    return kn(e) ? _n(e.__v_raw) : !!(e && e.__v_isReactive)
}

function kn(e) {
    return !!(e && e.__v_isReadonly)
}

function Ar(e) {
    return !!(e && e.__v_isShallow)
}

function jl(e) {
    return _n(e) || kn(e)
}

function fe(e) {
    const t = e && e.__v_raw;
    return t ? fe(t) : e
}

function Ul(e) {
    return Rr(e, "__v_skip", !0), e
}
const Zn = e => ge(e) ? bt(e) : e,
    _s = e => ge(e) ? Hl(e) : e;

function zl(e) {
    Ut && ct && (e = fe(e), Il(e.dep || (e.dep = fs())))
}

function Wl(e, t) {
    e = fe(e), e.dep && Ro(e.dep)
}

function Oe(e) {
    return !!(e && e.__v_isRef === !0)
}

function De(e) {
    return xl(e, !1)
}

function Pr(e) {
    return xl(e, !0)
}

function xl(e, t) {
    return Oe(e) ? e : new Ef(e, t)
}
class Ef {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : fe(t), this._value = n ? t : Zn(t)
    }
    get value() {
        return zl(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Ar(t) || kn(t);
        t = n ? t : fe(t), Qn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Zn(t), Wl(this))
    }
}

function Ye(e) {
    return Oe(e) ? e.value : e
}
const kf = {
    get: (e, t, n) => Ye(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return Oe(o) && !Oe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function Bl(e) {
    return _n(e) ? e : new Proxy(e, kf)
}
class wf {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
}

function Vl(e, t, n) {
    const r = e[t];
    return Oe(r) ? r : new wf(e, t, n)
}
var $l;
class Tf {
    constructor(t, n, r, o) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[$l] = !1, this._dirty = !0, this.effect = new ds(t, () => {
            this._dirty || (this._dirty = !0, Wl(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r
    }
    get value() {
        const t = fe(this);
        return zl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}
$l = "__v_isReadonly";

function Cf(e, t, n = !1) {
    let r, o;
    const s = X(e);
    return s ? (r = e, o = ut) : (r = e.get, o = e.set), new Tf(r, o, s || !o, n)
}

function zt(e, t, n, r) {
    let o;
    try {
        o = r ? e(...r) : e()
    } catch (s) {
        Ln(s, t, n)
    }
    return o
}

function at(e, t, n, r) {
    if (X(e)) {
        const s = zt(e, t, n, r);
        return s && cs(s) && s.catch(a => {
            Ln(a, t, n)
        }), s
    }
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(at(e[s], t, n, r));
    return o
}

function Ln(e, t, n, r = !0) {
    const o = t ? t.vnode : null;
    if (t) {
        let s = t.parent;
        const a = t.proxy,
            i = n;
        for (; s;) {
            const c = s.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, a, i) === !1) return
            }
            s = s.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            zt(l, null, 10, [e, a, i]);
            return
        }
    }
    Rf(e, n, o, r)
}

function Rf(e, t, n, r = !0) {
    console.error(e)
}
let Xn = !1,
    Ao = !1;
const Ue = [];
let gt = 0;
const yn = [];
let wt = null,
    Qt = 0;
const ql = Promise.resolve();
let ys = null;

function Mn(e) {
    const t = ys || ql;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Af(e) {
    let t = gt + 1,
        n = Ue.length;
    for (; t < n;) {
        const r = t + n >>> 1;
        er(Ue[r]) < e ? t = r + 1 : n = r
    }
    return t
}

function Wr(e) {
    (!Ue.length || !Ue.includes(e, Xn && e.allowRecurse ? gt + 1 : gt)) && (e.id == null ? Ue.push(e) : Ue.splice(Af(e.id), 0, e), Kl())
}

function Kl() {
    !Xn && !Ao && (Ao = !0, ys = ql.then(Jl))
}

function Pf(e) {
    const t = Ue.indexOf(e);
    t > gt && Ue.splice(t, 1)
}

function Gl(e) {
    Q(e) ? yn.push(...e) : (!wt || !wt.includes(e, e.allowRecurse ? Qt + 1 : Qt)) && yn.push(e), Kl()
}

function na(e, t = Xn ? gt + 1 : 0) {
    for (; t < Ue.length; t++) {
        const n = Ue[t];
        n && n.pre && (Ue.splice(t, 1), t--, n())
    }
}

function Or(e) {
    if (yn.length) {
        const t = [...new Set(yn)];
        if (yn.length = 0, wt) {
            wt.push(...t);
            return
        }
        for (wt = t, wt.sort((n, r) => er(n) - er(r)), Qt = 0; Qt < wt.length; Qt++) wt[Qt]();
        wt = null, Qt = 0
    }
}
const er = e => e.id == null ? 1 / 0 : e.id,
    Of = (e, t) => {
        const n = er(e) - er(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function Jl(e) {
    Ao = !1, Xn = !0, Ue.sort(Of);
    const t = ut;
    try {
        for (gt = 0; gt < Ue.length; gt++) {
            const n = Ue[gt];
            n && n.active !== !1 && zt(n, null, 14)
        }
    } finally {
        gt = 0, Ue.length = 0, Or(), Xn = !1, ys = null, (Ue.length || yn.length) && Jl()
    }
}

function If(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || we;
    let o = n;
    const s = t.startsWith("update:"),
        a = s && t.slice(7);
    if (a && a in r) {
        const u = `${a==="modelValue"?"model":a}Modifiers`,
            {
                number: d,
                trim: f
            } = r[u] || we;
        f && (o = n.map(h => Ae(h) ? h.trim() : h)), d && (o = n.map(on))
    }
    let i, l = r[i = to(t)] || r[i = to(yt(t))];
    !l && s && (l = r[i = to(an(t))]), l && at(l, e, 6, o);
    const c = r[i + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[i]) return;
        e.emitted[i] = !0, at(c, e, 6, o)
    }
}

function Yl(e, t, n = !1) {
    const r = t.emitsCache,
        o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let a = {},
        i = !1;
    if (!X(e)) {
        const l = c => {
            const u = Yl(c, t, !0);
            u && (i = !0, je(a, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !s && !i ? (ge(e) && r.set(e, null), null) : (Q(s) ? s.forEach(l => a[l] = null) : je(a, s), ge(e) && r.set(e, a), a)
}

function xr(e, t) {
    return !e || !or(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, an(t)) || ce(e, t))
}
let He = null,
    Br = null;

function Ir(e) {
    const t = He;
    return He = e, Br = e && e.type.__scopeId || null, t
}

function Ry(e) {
    Br = e
}

function Ay() {
    Br = null
}

function bs(e, t = He, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
        r._d && ha(-1);
        const s = Ir(t);
        let a;
        try {
            a = e(...o)
        } finally {
            Ir(s), r._d && ha(1)
        }
        return a
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function no(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: o,
        props: s,
        propsOptions: [a],
        slots: i,
        attrs: l,
        emit: c,
        render: u,
        renderCache: d,
        data: f,
        setupState: h,
        ctx: g,
        inheritAttrs: R
    } = e;
    let O, b;
    const m = Ir(e);
    try {
        if (n.shapeFlag & 4) {
            const k = o || r;
            O = ot(u.call(k, k, d, s, h, f, g)), b = l
        } else {
            const k = t;
            O = ot(k.length > 1 ? k(s, {
                attrs: l,
                slots: i,
                emit: c
            }) : k(s, null)), b = t.props ? l : Lf(l)
        }
    } catch (k) {
        $n.length = 0, Ln(k, e, 1), O = Te(qe)
    }
    let v = O;
    if (b && R !== !1) {
        const k = Object.keys(b),
            {
                shapeFlag: w
            } = v;
        k.length && w & 7 && (a && k.some(is) && (b = Mf(b, a)), v = At(v, b))
    }
    return n.dirs && (v = At(v), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (v.transition = n.transition), O = v, Ir(m), O
}

function Sf(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (Tn(r)) {
            if (r.type !== qe || r.children === "v-if") {
                if (t) return;
                t = r
            }
        } else return
    }
    return t
}
const Lf = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || or(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    Mf = (e, t) => {
        const n = {};
        for (const r in e)(!is(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function Nf(e, t, n) {
    const {
        props: r,
        children: o,
        component: s
    } = e, {
        props: a,
        children: i,
        patchFlag: l
    } = t, c = s.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? ra(r, a, c) : !!a;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                const f = u[d];
                if (a[f] !== r[f] && !xr(c, f)) return !0
            }
        }
    } else return (o || i) && (!i || !i.$stable) ? !0 : r === a ? !1 : r ? a ? ra(r, a, c) : !0 : !!a;
    return !1
}

function ra(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !xr(n, s)) return !0
    }
    return !1
}

function vs({
    vnode: e,
    parent: t
}, n) {
    for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const Ql = e => e.__isSuspense,
    Ff = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, o, s, a, i, l, c) {
            e == null ? Df(t, n, r, o, s, a, i, l, c) : Hf(e, t, n, r, o, a, i, l, c)
        },
        hydrate: jf,
        create: Es,
        normalize: Uf
    },
    Zl = Ff;

function tr(e, t) {
    const n = e.props && e.props[t];
    X(n) && n()
}

function Df(e, t, n, r, o, s, a, i, l) {
    const {
        p: c,
        o: {
            createElement: u
        }
    } = l, d = u("div"), f = e.suspense = Es(e, o, r, t, d, n, s, a, i, l);
    c(null, f.pendingBranch = e.ssContent, d, null, r, f, s, a), f.deps > 0 ? (tr(e, "onPending"), tr(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, s, a), bn(f, e.ssFallback)) : f.resolve()
}

function Hf(e, t, n, r, o, s, a, i, {
    p: l,
    um: c,
    o: {
        createElement: u
    }
}) {
    const d = t.suspense = e.suspense;
    d.vnode = t, t.el = e.el;
    const f = t.ssContent,
        h = t.ssFallback,
        {
            activeBranch: g,
            pendingBranch: R,
            isInFallback: O,
            isHydrating: b
        } = d;
    if (R) d.pendingBranch = f, _t(f, R) ? (l(R, f, d.hiddenContainer, null, o, d, s, a, i), d.deps <= 0 ? d.resolve() : O && (l(g, h, n, r, o, null, s, a, i), bn(d, h))) : (d.pendingId++, b ? (d.isHydrating = !1, d.activeBranch = R) : c(R, o, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), O ? (l(null, f, d.hiddenContainer, null, o, d, s, a, i), d.deps <= 0 ? d.resolve() : (l(g, h, n, r, o, null, s, a, i), bn(d, h))) : g && _t(f, g) ? (l(g, f, n, r, o, d, s, a, i), d.resolve(!0)) : (l(null, f, d.hiddenContainer, null, o, d, s, a, i), d.deps <= 0 && d.resolve()));
    else if (g && _t(f, g)) l(g, f, n, r, o, d, s, a, i), bn(d, f);
    else if (tr(t, "onPending"), d.pendingBranch = f, d.pendingId++, l(null, f, d.hiddenContainer, null, o, d, s, a, i), d.deps <= 0) d.resolve();
    else {
        const {
            timeout: m,
            pendingId: v
        } = d;
        m > 0 ? setTimeout(() => {
            d.pendingId === v && d.fallback(h)
        }, m) : m === 0 && d.fallback(h)
    }
}

function Es(e, t, n, r, o, s, a, i, l, c, u = !1) {
    const {
        p: d,
        m: f,
        um: h,
        n: g,
        o: {
            parentNode: R,
            remove: O
        }
    } = c, b = on(e.props && e.props.timeout), m = {
        vnode: e,
        parent: t,
        parentComponent: n,
        isSVG: a,
        container: r,
        hiddenContainer: o,
        anchor: s,
        deps: 0,
        pendingId: 0,
        timeout: typeof b == "number" ? b : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !0,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(v = !1) {
            const {
                vnode: k,
                activeBranch: w,
                pendingBranch: L,
                pendingId: M,
                effects: I,
                parentComponent: V,
                container: $
            } = m;
            if (m.isHydrating) m.isHydrating = !1;
            else if (!v) {
                const Z = w && L.transition && L.transition.mode === "out-in";
                Z && (w.transition.afterLeave = () => {
                    M === m.pendingId && f(L, $, q, 0)
                });
                let {
                    anchor: q
                } = m;
                w && (q = g(w), h(w, V, m, !0)), Z || f(L, $, q, 0)
            }
            bn(m, L), m.pendingBranch = null, m.isInFallback = !1;
            let G = m.parent,
                U = !1;
            for (; G;) {
                if (G.pendingBranch) {
                    G.effects.push(...I), U = !0;
                    break
                }
                G = G.parent
            }
            U || Gl(I), m.effects = [], tr(k, "onResolve")
        },
        fallback(v) {
            if (!m.pendingBranch) return;
            const {
                vnode: k,
                activeBranch: w,
                parentComponent: L,
                container: M,
                isSVG: I
            } = m;
            tr(k, "onFallback");
            const V = g(w),
                $ = () => {
                    !m.isInFallback || (d(null, v, M, V, L, null, I, i, l), bn(m, v))
                },
                G = v.transition && v.transition.mode === "out-in";
            G && (w.transition.afterLeave = $), m.isInFallback = !0, h(w, L, null, !0), G || $()
        },
        move(v, k, w) {
            m.activeBranch && f(m.activeBranch, v, k, w), m.container = v
        },
        next() {
            return m.activeBranch && g(m.activeBranch)
        },
        registerDep(v, k) {
            const w = !!m.pendingBranch;
            w && m.deps++;
            const L = v.vnode.el;
            v.asyncDep.catch(M => {
                Ln(M, v, 0)
            }).then(M => {
                if (v.isUnmounted || m.isUnmounted || m.pendingId !== v.suspenseId) return;
                v.asyncResolved = !0;
                const {
                    vnode: I
                } = v;
                Mo(v, M, !1), L && (I.el = L);
                const V = !L && v.subTree.el;
                k(v, I, R(L || v.subTree.el), L ? null : g(v.subTree), m, a, l), V && O(V), vs(v, I.el), w && --m.deps === 0 && m.resolve()
            })
        },
        unmount(v, k) {
            m.isUnmounted = !0, m.activeBranch && h(m.activeBranch, n, v, k), m.pendingBranch && h(m.pendingBranch, n, v, k)
        }
    };
    return m
}

function jf(e, t, n, r, o, s, a, i, l) {
    const c = t.suspense = Es(t, r, n, e.parentNode, document.createElement("div"), null, o, s, a, i, !0),
        u = l(e, c.pendingBranch = t.ssContent, n, c, s, a);
    return c.deps === 0 && c.resolve(), u
}

function Uf(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = oa(r ? n.default : n), e.ssFallback = r ? oa(n.fallback) : Te(qe)
}

function oa(e) {
    let t;
    if (X(e)) {
        const n = wn && e._c;
        n && (e._d = !1, nn()), e = e(), n && (e._d = !0, t = st, bc())
    }
    return Q(e) && (e = Sf(e)), e = ot(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function Xl(e, t) {
    t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Gl(e)
}

function bn(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e, o = n.el = t.el;
    r && r.subTree === n && (r.vnode.el = o, vs(r, o))
}

function vn(e, t) {
    if (Se) {
        let n = Se.provides;
        const r = Se.parent && Se.parent.provides;
        r === n && (n = Se.provides = Object.create(r)), n[e] = t
    }
}

function $e(e, t, n = !1) {
    const r = Se || He;
    if (r) {
        const o = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return n && X(t) ? t.call(r.proxy) : t
    }
}

function zf(e, t) {
    return ks(e, null, t)
}
const gr = {};

function Ct(e, t, n) {
    return ks(e, t, n)
}

function ks(e, t, {
    immediate: n,
    deep: r,
    flush: o,
    onTrack: s,
    onTrigger: a
} = we) {
    const i = Se;
    let l, c = !1,
        u = !1;
    if (Oe(e) ? (l = () => e.value, c = Ar(e)) : _n(e) ? (l = () => e, r = !0) : Q(e) ? (u = !0, c = e.some(v => _n(v) || Ar(v)), l = () => e.map(v => {
            if (Oe(v)) return v.value;
            if (_n(v)) return Xt(v);
            if (X(v)) return zt(v, i, 2)
        })) : X(e) ? t ? l = () => zt(e, i, 2) : l = () => {
            if (!(i && i.isUnmounted)) return d && d(), at(e, i, 3, [f])
        } : l = ut, t && r) {
        const v = l;
        l = () => Xt(v())
    }
    let d, f = v => {
            d = b.onStop = () => {
                zt(v, i, 4)
            }
        },
        h;
    if (Cn)
        if (f = ut, t ? n && at(t, i, 3, [l(), u ? [] : void 0, f]) : l(), o === "sync") {
            const v = Ld();
            h = v.__watcherHandles || (v.__watcherHandles = [])
        } else return ut;
    let g = u ? new Array(e.length).fill(gr) : gr;
    const R = () => {
        if (!!b.active)
            if (t) {
                const v = b.run();
                (r || c || (u ? v.some((k, w) => Qn(k, g[w])) : Qn(v, g))) && (d && d(), at(t, i, 3, [v, g === gr ? void 0 : u && g[0] === gr ? [] : g, f]), g = v)
            } else b.run()
    };
    R.allowRecurse = !!t;
    let O;
    o === "sync" ? O = R : o === "post" ? O = () => Fe(R, i && i.suspense) : (R.pre = !0, i && (R.id = i.uid), O = () => Wr(R));
    const b = new ds(l, O);
    t ? n ? R() : g = b.run() : o === "post" ? Fe(b.run.bind(b), i && i.suspense) : b.run();
    const m = () => {
        b.stop(), i && i.scope && ls(i.scope.effects, b)
    };
    return h && h.push(m), m
}

function Wf(e, t, n) {
    const r = this.proxy,
        o = Ae(e) ? e.includes(".") ? ec(r, e) : () => r[e] : e.bind(r, r);
    let s;
    X(t) ? s = t : (s = t.handler, n = t);
    const a = Se;
    Bt(this);
    const i = ks(o, s.bind(r), n);
    return a ? Bt(a) : Wt(), i
}

function ec(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++) r = r[n[o]];
        return r
    }
}

function Xt(e, t) {
    if (!ge(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), Oe(e)) Xt(e.value, t);
    else if (Q(e))
        for (let n = 0; n < e.length; n++) Xt(e[n], t);
    else if (On(e) || pn(e)) e.forEach(n => {
        Xt(n, t)
    });
    else if (Cl(e))
        for (const n in e) Xt(e[n], t);
    return e
}

function xf() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return ir(() => {
        e.isMounted = !0
    }), lr(() => {
        e.isUnmounting = !0
    }), e
}
const rt = [Function, Array],
    Bf = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: rt,
            onEnter: rt,
            onAfterEnter: rt,
            onEnterCancelled: rt,
            onBeforeLeave: rt,
            onLeave: rt,
            onAfterLeave: rt,
            onLeaveCancelled: rt,
            onBeforeAppear: rt,
            onAppear: rt,
            onAfterAppear: rt,
            onAppearCancelled: rt
        },
        setup(e, {
            slots: t
        }) {
            const n = it(),
                r = xf();
            let o;
            return () => {
                const s = t.default && rc(t.default(), !0);
                if (!s || !s.length) return;
                let a = s[0];
                if (s.length > 1) {
                    for (const R of s)
                        if (R.type !== qe) {
                            a = R;
                            break
                        }
                }
                const i = fe(e),
                    {
                        mode: l
                    } = i;
                if (r.isLeaving) return ro(a);
                const c = sa(a);
                if (!c) return ro(a);
                const u = Po(c, i, r, n);
                Sr(c, u);
                const d = n.subTree,
                    f = d && sa(d);
                let h = !1;
                const {
                    getTransitionKey: g
                } = c.type;
                if (g) {
                    const R = g();
                    o === void 0 ? o = R : R !== o && (o = R, h = !0)
                }
                if (f && f.type !== qe && (!_t(c, f) || h)) {
                    const R = Po(f, i, r, n);
                    if (Sr(f, R), l === "out-in") return r.isLeaving = !0, R.afterLeave = () => {
                        r.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, ro(a);
                    l === "in-out" && c.type !== qe && (R.delayLeave = (O, b, m) => {
                        const v = nc(r, f);
                        v[String(f.key)] = f, O._leaveCb = () => {
                            b(), O._leaveCb = void 0, delete u.delayedLeave
                        }, u.delayedLeave = m
                    })
                }
                return a
            }
        }
    },
    tc = Bf;

function nc(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Po(e, t, n, r) {
    const {
        appear: o,
        mode: s,
        persisted: a = !1,
        onBeforeEnter: i,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: d,
        onLeave: f,
        onAfterLeave: h,
        onLeaveCancelled: g,
        onBeforeAppear: R,
        onAppear: O,
        onAfterAppear: b,
        onAppearCancelled: m
    } = t, v = String(e.key), k = nc(n, e), w = (I, V) => {
        I && at(I, r, 9, V)
    }, L = (I, V) => {
        const $ = V[1];
        w(I, V), Q(I) ? I.every(G => G.length <= 1) && $() : I.length <= 1 && $()
    }, M = {
        mode: s,
        persisted: a,
        beforeEnter(I) {
            let V = i;
            if (!n.isMounted)
                if (o) V = R || i;
                else return;
            I._leaveCb && I._leaveCb(!0);
            const $ = k[v];
            $ && _t(e, $) && $.el._leaveCb && $.el._leaveCb(), w(V, [I])
        },
        enter(I) {
            let V = l,
                $ = c,
                G = u;
            if (!n.isMounted)
                if (o) V = O || l, $ = b || c, G = m || u;
                else return;
            let U = !1;
            const Z = I._enterCb = q => {
                U || (U = !0, q ? w(G, [I]) : w($, [I]), M.delayedLeave && M.delayedLeave(), I._enterCb = void 0)
            };
            V ? L(V, [I, Z]) : Z()
        },
        leave(I, V) {
            const $ = String(e.key);
            if (I._enterCb && I._enterCb(!0), n.isUnmounting) return V();
            w(d, [I]);
            let G = !1;
            const U = I._leaveCb = Z => {
                G || (G = !0, V(), Z ? w(g, [I]) : w(h, [I]), I._leaveCb = void 0, k[$] === e && delete k[$])
            };
            k[$] = e, f ? L(f, [I, U]) : U()
        },
        clone(I) {
            return Po(I, t, n, r)
        }
    };
    return M
}

function ro(e) {
    if (ar(e)) return e = At(e), e.children = null, e
}

function sa(e) {
    return ar(e) ? e.children ? e.children[0] : void 0 : e
}

function Sr(e, t) {
    e.shapeFlag & 6 && e.component ? Sr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function rc(e, t = !1, n) {
    let r = [],
        o = 0;
    for (let s = 0; s < e.length; s++) {
        let a = e[s];
        const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : s);
        a.type === Ve ? (a.patchFlag & 128 && o++, r = r.concat(rc(a.children, t, i))) : (t || a.type !== qe) && r.push(i != null ? At(a, {
            key: i
        }) : a)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r
}

function Pt(e) {
    return X(e) ? {
        setup: e,
        name: e.name
    } : e
}
const tn = e => !!e.type.__asyncLoader;

function Vf(e) {
    X(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: o = 200,
        timeout: s,
        suspensible: a = !0,
        onError: i
    } = e;
    let l = null,
        c, u = 0;
    const d = () => (u++, l = null, f()),
        f = () => {
            let h;
            return l || (h = l = t().catch(g => {
                if (g = g instanceof Error ? g : new Error(String(g)), i) return new Promise((R, O) => {
                    i(g, () => R(d()), () => O(g), u + 1)
                });
                throw g
            }).then(g => h !== l && l ? l : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)))
        };
    return Pt({
        name: "AsyncComponentWrapper",
        __asyncLoader: f,
        get __asyncResolved() {
            return c
        },
        setup() {
            const h = Se;
            if (c) return () => oo(c, h);
            const g = m => {
                l = null, Ln(m, h, 13, !r)
            };
            if (a && h.suspense || Cn) return f().then(m => () => oo(m, h)).catch(m => (g(m), () => r ? Te(r, {
                error: m
            }) : null));
            const R = De(!1),
                O = De(),
                b = De(!!o);
            return o && setTimeout(() => {
                b.value = !1
            }, o), s != null && setTimeout(() => {
                if (!R.value && !O.value) {
                    const m = new Error(`Async component timed out after ${s}ms.`);
                    g(m), O.value = m
                }
            }, s), f().then(() => {
                R.value = !0, h.parent && ar(h.parent.vnode) && Wr(h.parent.update)
            }).catch(m => {
                g(m), O.value = m
            }), () => {
                if (R.value && c) return oo(c, h);
                if (O.value && r) return Te(r, {
                    error: O.value
                });
                if (n && !b.value) return Te(n)
            }
        }
    })
}

function oo(e, t) {
    const {
        ref: n,
        props: r,
        children: o,
        ce: s
    } = t.vnode, a = Te(e, r, o);
    return a.ref = n, a.ce = s, delete t.vnode.ce, a
}
const ar = e => e.type.__isKeepAlive,
    $f = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = it(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const m = t.default && t.default();
                return m && m.length === 1 ? m[0] : m
            };
            const o = new Map,
                s = new Set;
            let a = null;
            const i = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: c,
                        um: u,
                        o: {
                            createElement: d
                        }
                    }
                } = r,
                f = d("div");
            r.activate = (m, v, k, w, L) => {
                const M = m.component;
                c(m, v, k, 0, i), l(M.vnode, m, v, k, M, i, w, m.slotScopeIds, L), Fe(() => {
                    M.isDeactivated = !1, M.a && gn(M.a);
                    const I = m.props && m.props.onVnodeMounted;
                    I && Je(I, M.parent, m)
                }, i)
            }, r.deactivate = m => {
                const v = m.component;
                c(m, f, null, 1, i), Fe(() => {
                    v.da && gn(v.da);
                    const k = m.props && m.props.onVnodeUnmounted;
                    k && Je(k, v.parent, m), v.isDeactivated = !0
                }, i)
            };

            function h(m) {
                so(m), u(m, n, i, !0)
            }

            function g(m) {
                o.forEach((v, k) => {
                    const w = No(v.type);
                    w && (!m || !m(w)) && R(k)
                })
            }

            function R(m) {
                const v = o.get(m);
                !a || v.type !== a.type ? h(v) : a && so(a), o.delete(m), s.delete(m)
            }
            Ct(() => [e.include, e.exclude], ([m, v]) => {
                m && g(k => zn(m, k)), v && g(k => !zn(v, k))
            }, {
                flush: "post",
                deep: !0
            });
            let O = null;
            const b = () => {
                O != null && o.set(O, ao(n.subTree))
            };
            return ir(b), ac(b), lr(() => {
                o.forEach(m => {
                    const {
                        subTree: v,
                        suspense: k
                    } = n, w = ao(v);
                    if (m.type === w.type) {
                        so(w);
                        const L = w.component.da;
                        L && Fe(L, k);
                        return
                    }
                    h(m)
                })
            }), () => {
                if (O = null, !t.default) return null;
                const m = t.default(),
                    v = m[0];
                if (m.length > 1) return a = null, m;
                if (!Tn(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128)) return a = null, v;
                let k = ao(v);
                const w = k.type,
                    L = No(tn(k) ? k.type.__asyncResolved || {} : w),
                    {
                        include: M,
                        exclude: I,
                        max: V
                    } = e;
                if (M && (!L || !zn(M, L)) || I && L && zn(I, L)) return a = k, v;
                const $ = k.key == null ? w : k.key,
                    G = o.get($);
                return k.el && (k = At(k), v.shapeFlag & 128 && (v.ssContent = k)), O = $, G ? (k.el = G.el, k.component = G.component, k.transition && Sr(k, k.transition), k.shapeFlag |= 512, s.delete($), s.add($)) : (s.add($), V && s.size > parseInt(V, 10) && R(s.values().next().value)), k.shapeFlag |= 256, a = k, Ql(v.type) ? v : k
            }
        }
    },
    qf = $f;

function zn(e, t) {
    return Q(e) ? e.some(n => zn(n, t)) : Ae(e) ? e.split(",").includes(t) : e.test ? e.test(t) : !1
}

function Kf(e, t) {
    oc(e, "a", t)
}

function Gf(e, t) {
    oc(e, "da", t)
}

function oc(e, t, n = Se) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (Vr(t, r, n), n) {
        let o = n.parent;
        for (; o && o.parent;) ar(o.parent.vnode) && Jf(r, t, n, o), o = o.parent
    }
}

function Jf(e, t, n, r) {
    const o = Vr(t, e, r, !0);
    ws(() => {
        ls(r[t], o)
    }, n)
}

function so(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function ao(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Vr(e, t, n = Se, r = !1) {
    if (n) {
        const o = n[e] || (n[e] = []),
            s = t.__weh || (t.__weh = (...a) => {
                if (n.isUnmounted) return;
                In(), Bt(n);
                const i = at(t, n, e, a);
                return Wt(), Sn(), i
            });
        return r ? o.unshift(s) : o.push(s), s
    }
}
const Ot = e => (t, n = Se) => (!Cn || e === "sp") && Vr(e, (...r) => t(...r), n),
    sc = Ot("bm"),
    ir = Ot("m"),
    Yf = Ot("bu"),
    ac = Ot("u"),
    lr = Ot("bum"),
    ws = Ot("um"),
    Qf = Ot("sp"),
    Zf = Ot("rtg"),
    Xf = Ot("rtc");

function ic(e, t = Se) {
    Vr("ec", e, t)
}

function Py(e, t) {
    const n = He;
    if (n === null) return e;
    const r = qr(n) || n.proxy,
        o = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [a, i, l, c = we] = t[s];
        a && (X(a) && (a = {
            mounted: a,
            updated: a
        }), a.deep && Xt(i), o.push({
            dir: a,
            instance: r,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}

function mt(e, t, n, r) {
    const o = e.dirs,
        s = t && t.dirs;
    for (let a = 0; a < o.length; a++) {
        const i = o[a];
        s && (i.oldValue = s[a].value);
        let l = i.dir[r];
        l && (In(), at(l, n, 8, [e.el, i, e, t]), Sn())
    }
}
const Ts = "components",
    ed = "directives";

function td(e, t) {
    return Cs(Ts, e, !0, t) || e
}
const lc = Symbol();

function Oy(e) {
    return Ae(e) ? Cs(Ts, e, !1) || e : e || lc
}

function Iy(e) {
    return Cs(ed, e)
}

function Cs(e, t, n = !0, r = !1) {
    const o = He || Se;
    if (o) {
        const s = o.type;
        if (e === Ts) {
            const i = No(s, !1);
            if (i && (i === t || i === yt(t) || i === Ur(yt(t)))) return s
        }
        const a = aa(o[e] || s[e], t) || aa(o.appContext[e], t);
        return !a && r ? s : a
    }
}

function aa(e, t) {
    return e && (e[t] || e[yt(t)] || e[Ur(yt(t))])
}

function Sy(e, t, n, r) {
    let o;
    const s = n && n[r];
    if (Q(e) || Ae(e)) {
        o = new Array(e.length);
        for (let a = 0, i = e.length; a < i; a++) o[a] = t(e[a], a, void 0, s && s[a])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s && s[a])
    } else if (ge(e))
        if (e[Symbol.iterator]) o = Array.from(e, (a, i) => t(a, i, void 0, s && s[i]));
        else {
            const a = Object.keys(e);
            o = new Array(a.length);
            for (let i = 0, l = a.length; i < l; i++) {
                const c = a[i];
                o[i] = t(e[c], c, i, s && s[i])
            }
        }
    else o = [];
    return n && (n[r] = o), o
}

function Ly(e, t, n = {}, r, o) {
    if (He.isCE || He.parent && tn(He.parent) && He.parent.isCE) return t !== "default" && (n.name = t), Te("slot", n, r && r());
    let s = e[t];
    s && s._c && (s._d = !1), nn();
    const a = s && cc(s(n)),
        i = En(Ve, {
            key: n.key || a && a.key || `_${t}`
        }, a || (r ? r() : []), a && e._ === 1 ? 64 : -2);
    return !o && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), s && s._c && (s._d = !0), i
}

function cc(e) {
    return e.some(t => Tn(t) ? !(t.type === qe || t.type === Ve && !cc(t.children)) : !0) ? e : null
}
const Oo = e => e ? Tc(e) ? qr(e) || e.proxy : Oo(e.parent) : null,
    Bn = je(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Oo(e.parent),
        $root: e => Oo(e.root),
        $emit: e => e.emit,
        $options: e => Rs(e),
        $forceUpdate: e => e.f || (e.f = () => Wr(e.update)),
        $nextTick: e => e.n || (e.n = Mn.bind(e.proxy)),
        $watch: e => Wf.bind(e)
    }),
    io = (e, t) => e !== we && !e.__isScriptSetup && ce(e, t),
    nd = {
        get({
            _: e
        }, t) {
            const {
                ctx: n,
                setupState: r,
                data: o,
                props: s,
                accessCache: a,
                type: i,
                appContext: l
            } = e;
            let c;
            if (t[0] !== "$") {
                const h = a[t];
                if (h !== void 0) switch (h) {
                    case 1:
                        return r[t];
                    case 2:
                        return o[t];
                    case 4:
                        return n[t];
                    case 3:
                        return s[t]
                } else {
                    if (io(r, t)) return a[t] = 1, r[t];
                    if (o !== we && ce(o, t)) return a[t] = 2, o[t];
                    if ((c = e.propsOptions[0]) && ce(c, t)) return a[t] = 3, s[t];
                    if (n !== we && ce(n, t)) return a[t] = 4, n[t];
                    Io && (a[t] = 0)
                }
            }
            const u = Bn[t];
            let d, f;
            if (u) return t === "$attrs" && tt(e, "get", t), u(e);
            if ((d = i.__cssModules) && (d = d[t])) return d;
            if (n !== we && ce(n, t)) return a[t] = 4, n[t];
            if (f = l.config.globalProperties, ce(f, t)) return f[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: o,
                ctx: s
            } = e;
            return io(o, t) ? (o[t] = n, !0) : r !== we && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: o,
                propsOptions: s
            }
        }, a) {
            let i;
            return !!n[a] || e !== we && ce(e, a) || io(t, a) || (i = s[0]) && ce(i, a) || ce(r, a) || ce(Bn, a) || ce(o.config.globalProperties, a)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };
let Io = !0;

function rd(e) {
    const t = Rs(e),
        n = e.proxy,
        r = e.ctx;
    Io = !1, t.beforeCreate && ia(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: s,
        methods: a,
        watch: i,
        provide: l,
        inject: c,
        created: u,
        beforeMount: d,
        mounted: f,
        beforeUpdate: h,
        updated: g,
        activated: R,
        deactivated: O,
        beforeDestroy: b,
        beforeUnmount: m,
        destroyed: v,
        unmounted: k,
        render: w,
        renderTracked: L,
        renderTriggered: M,
        errorCaptured: I,
        serverPrefetch: V,
        expose: $,
        inheritAttrs: G,
        components: U,
        directives: Z,
        filters: q
    } = t;
    if (c && od(c, r, null, e.appContext.config.unwrapInjectedRef), a)
        for (const se in a) {
            const le = a[se];
            X(le) && (r[se] = le.bind(n))
        }
    if (o) {
        const se = o.call(n, n);
        ge(se) && (e.data = bt(se))
    }
    if (Io = !0, s)
        for (const se in s) {
            const le = s[se],
                We = X(le) ? le.bind(n, n) : X(le.get) ? le.get.bind(n, n) : ut,
                lt = !X(le) && X(le.set) ? le.set.bind(n) : ut,
                xe = pe({
                    get: We,
                    set: lt
                });
            Object.defineProperty(r, se, {
                enumerable: !0,
                configurable: !0,
                get: () => xe.value,
                set: Ne => xe.value = Ne
            })
        }
    if (i)
        for (const se in i) uc(i[se], r, n, se);
    if (l) {
        const se = X(l) ? l.call(n) : l;
        Reflect.ownKeys(se).forEach(le => {
            vn(le, se[le])
        })
    }
    u && ia(u, e, "c");

    function te(se, le) {
        Q(le) ? le.forEach(We => se(We.bind(n))) : le && se(le.bind(n))
    }
    if (te(sc, d), te(ir, f), te(Yf, h), te(ac, g), te(Kf, R), te(Gf, O), te(ic, I), te(Xf, L), te(Zf, M), te(lr, m), te(ws, k), te(Qf, V), Q($))
        if ($.length) {
            const se = e.exposed || (e.exposed = {});
            $.forEach(le => {
                Object.defineProperty(se, le, {
                    get: () => n[le],
                    set: We => n[le] = We
                })
            })
        } else e.exposed || (e.exposed = {});
    w && e.render === ut && (e.render = w), G != null && (e.inheritAttrs = G), U && (e.components = U), Z && (e.directives = Z)
}

function od(e, t, n = ut, r = !1) {
    Q(e) && (e = So(e));
    for (const o in e) {
        const s = e[o];
        let a;
        ge(s) ? "default" in s ? a = $e(s.from || o, s.default, !0) : a = $e(s.from || o) : a = $e(s), Oe(a) && r ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: i => a.value = i
        }) : t[o] = a
    }
}

function ia(e, t, n) {
    at(Q(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function uc(e, t, n, r) {
    const o = r.includes(".") ? ec(n, r) : () => n[r];
    if (Ae(e)) {
        const s = t[e];
        X(s) && Ct(o, s)
    } else if (X(e)) Ct(o, e.bind(n));
    else if (ge(e))
        if (Q(e)) e.forEach(s => uc(s, t, n, r));
        else {
            const s = X(e.handler) ? e.handler.bind(n) : t[e.handler];
            X(s) && Ct(o, s, e)
        }
}

function Rs(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: o,
            optionsCache: s,
            config: {
                optionMergeStrategies: a
            }
        } = e.appContext,
        i = s.get(t);
    let l;
    return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(c => Lr(l, c, a, !0)), Lr(l, t, a)), ge(t) && s.set(t, l), l
}

function Lr(e, t, n, r = !1) {
    const {
        mixins: o,
        extends: s
    } = t;
    s && Lr(e, s, n, !0), o && o.forEach(a => Lr(e, a, n, !0));
    for (const a in t)
        if (!(r && a === "expose")) {
            const i = sd[a] || n && n[a];
            e[a] = i ? i(e[a], t[a]) : t[a]
        }
    return e
}
const sd = {
    data: la,
    props: Yt,
    emits: Yt,
    methods: Yt,
    computed: Yt,
    beforeCreate: Be,
    created: Be,
    beforeMount: Be,
    mounted: Be,
    beforeUpdate: Be,
    updated: Be,
    beforeDestroy: Be,
    beforeUnmount: Be,
    destroyed: Be,
    unmounted: Be,
    activated: Be,
    deactivated: Be,
    errorCaptured: Be,
    serverPrefetch: Be,
    components: Yt,
    directives: Yt,
    watch: id,
    provide: la,
    inject: ad
};

function la(e, t) {
    return t ? e ? function() {
        return je(X(e) ? e.call(this, this) : e, X(t) ? t.call(this, this) : t)
    } : t : e
}

function ad(e, t) {
    return Yt(So(e), So(t))
}

function So(e) {
    if (Q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Be(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Yt(e, t) {
    return e ? je(je(Object.create(null), e), t) : t
}

function id(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = je(Object.create(null), e);
    for (const r in t) n[r] = Be(e[r], t[r]);
    return n
}

function ld(e, t, n, r = !1) {
    const o = {},
        s = {};
    Rr(s, $r, 1), e.propsDefaults = Object.create(null), fc(e, t, o, s);
    for (const a in e.propsOptions[0]) a in o || (o[a] = void 0);
    n ? e.props = r ? o : vf(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s
}

function cd(e, t, n, r) {
    const {
        props: o,
        attrs: s,
        vnode: {
            patchFlag: a
        }
    } = e, i = fe(o), [l] = e.propsOptions;
    let c = !1;
    if ((r || a > 0) && !(a & 16)) {
        if (a & 8) {
            const u = e.vnode.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                let f = u[d];
                if (xr(e.emitsOptions, f)) continue;
                const h = t[f];
                if (l)
                    if (ce(s, f)) h !== s[f] && (s[f] = h, c = !0);
                    else {
                        const g = yt(f);
                        o[g] = Lo(l, i, g, h, e, !1)
                    }
                else h !== s[f] && (s[f] = h, c = !0)
            }
        }
    } else {
        fc(e, t, o, s) && (c = !0);
        let u;
        for (const d in i)(!t || !ce(t, d) && ((u = an(d)) === d || !ce(t, u))) && (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (o[d] = Lo(l, i, d, void 0, e, !0)) : delete o[d]);
        if (s !== i)
            for (const d in s)(!t || !ce(t, d) && !0) && (delete s[d], c = !0)
    }
    c && Rt(e, "set", "$attrs")
}

function fc(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let a = !1,
        i;
    if (t)
        for (let l in t) {
            if (xn(l)) continue;
            const c = t[l];
            let u;
            o && ce(o, u = yt(l)) ? !s || !s.includes(u) ? n[u] = c : (i || (i = {}))[u] = c : xr(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, a = !0)
        }
    if (s) {
        const l = fe(n),
            c = i || we;
        for (let u = 0; u < s.length; u++) {
            const d = s[u];
            n[d] = Lo(o, l, d, c[d], e, !ce(c, d))
        }
    }
    return a
}

function Lo(e, t, n, r, o, s) {
    const a = e[n];
    if (a != null) {
        const i = ce(a, "default");
        if (i && r === void 0) {
            const l = a.default;
            if (a.type !== Function && X(l)) {
                const {
                    propsDefaults: c
                } = o;
                n in c ? r = c[n] : (Bt(o), r = c[n] = l.call(null, t), Wt())
            } else r = l
        }
        a[0] && (s && !i ? r = !1 : a[1] && (r === "" || r === an(n)) && (r = !0))
    }
    return r
}

function dc(e, t, n = !1) {
    const r = t.propsCache,
        o = r.get(e);
    if (o) return o;
    const s = e.props,
        a = {},
        i = [];
    let l = !1;
    if (!X(e)) {
        const u = d => {
            l = !0;
            const [f, h] = dc(d, t, !0);
            je(a, f), h && i.push(...h)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!s && !l) return ge(e) && r.set(e, mn), mn;
    if (Q(s))
        for (let u = 0; u < s.length; u++) {
            const d = yt(s[u]);
            ca(d) && (a[d] = we)
        } else if (s)
            for (const u in s) {
                const d = yt(u);
                if (ca(d)) {
                    const f = s[u],
                        h = a[d] = Q(f) || X(f) ? {
                            type: f
                        } : Object.assign({}, f);
                    if (h) {
                        const g = da(Boolean, h.type),
                            R = da(String, h.type);
                        h[0] = g > -1, h[1] = R < 0 || g < R, (g > -1 || ce(h, "default")) && i.push(d)
                    }
                }
            }
    const c = [a, i];
    return ge(e) && r.set(e, c), c
}

function ca(e) {
    return e[0] !== "$"
}

function ua(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : e === null ? "null" : ""
}

function fa(e, t) {
    return ua(e) === ua(t)
}

function da(e, t) {
    return Q(t) ? t.findIndex(n => fa(n, e)) : X(t) && fa(t, e) ? 0 : -1
}
const hc = e => e[0] === "_" || e === "$stable",
    As = e => Q(e) ? e.map(ot) : [ot(e)],
    ud = (e, t, n) => {
        if (t._n) return t;
        const r = bs((...o) => As(t(...o)), n);
        return r._c = !1, r
    },
    mc = (e, t, n) => {
        const r = e._ctx;
        for (const o in e) {
            if (hc(o)) continue;
            const s = e[o];
            if (X(s)) t[o] = ud(o, s, r);
            else if (s != null) {
                const a = As(s);
                t[o] = () => a
            }
        }
    },
    pc = (e, t) => {
        const n = As(t);
        e.slots.default = () => n
    },
    fd = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = fe(t), Rr(t, "_", n)) : mc(t, e.slots = {})
        } else e.slots = {}, t && pc(e, t);
        Rr(e.slots, $r, 1)
    },
    dd = (e, t, n) => {
        const {
            vnode: r,
            slots: o
        } = e;
        let s = !0,
            a = we;
        if (r.shapeFlag & 32) {
            const i = t._;
            i ? n && i === 1 ? s = !1 : (je(o, t), !n && i === 1 && delete o._) : (s = !t.$stable, mc(t, o)), a = t
        } else t && (pc(e, t), a = {
            default: 1
        });
        if (s)
            for (const i in o) !hc(i) && !(i in a) && delete o[i]
    };

function gc() {
    return {
        app: null,
        config: {
            isNativeTag: Uu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let hd = 0;

function md(e, t) {
    return function(r, o = null) {
        X(r) || (r = Object.assign({}, r)), o != null && !ge(o) && (o = null);
        const s = gc(),
            a = new Set;
        let i = !1;
        const l = s.app = {
            _uid: hd++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: Rc,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...u) {
                return a.has(c) || (c && X(c.install) ? (a.add(c), c.install(l, ...u)) : X(c) && (a.add(c), c(l, ...u))), l
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c), l
            },
            component(c, u) {
                return u ? (s.components[c] = u, l) : s.components[c]
            },
            directive(c, u) {
                return u ? (s.directives[c] = u, l) : s.directives[c]
            },
            mount(c, u, d) {
                if (!i) {
                    const f = Te(r, o);
                    return f.appContext = s, u && t ? t(f, c) : e(f, c, d), i = !0, l._container = c, c.__vue_app__ = l, qr(f.component) || f.component.proxy
                }
            },
            unmount() {
                i && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(c, u) {
                return s.provides[c] = u, l
            }
        };
        return l
    }
}

function Mr(e, t, n, r, o = !1) {
    if (Q(e)) {
        e.forEach((f, h) => Mr(f, t && (Q(t) ? t[h] : t), n, r, o));
        return
    }
    if (tn(r) && !o) return;
    const s = r.shapeFlag & 4 ? qr(r.component) || r.component.proxy : r.el,
        a = o ? null : s,
        {
            i,
            r: l
        } = e,
        c = t && t.r,
        u = i.refs === we ? i.refs = {} : i.refs,
        d = i.setupState;
    if (c != null && c !== l && (Ae(c) ? (u[c] = null, ce(d, c) && (d[c] = null)) : Oe(c) && (c.value = null)), X(l)) zt(l, i, 12, [a, u]);
    else {
        const f = Ae(l),
            h = Oe(l);
        if (f || h) {
            const g = () => {
                if (e.f) {
                    const R = f ? ce(d, l) ? d[l] : u[l] : l.value;
                    o ? Q(R) && ls(R, s) : Q(R) ? R.includes(s) || R.push(s) : f ? (u[l] = [s], ce(d, l) && (d[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value))
                } else f ? (u[l] = a, ce(d, l) && (d[l] = a)) : h && (l.value = a, e.k && (u[e.k] = a))
            };
            a ? (g.id = -1, Fe(g, n)) : g()
        }
    }
}
let Lt = !1;
const _r = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
    yr = e => e.nodeType === 8;

function pd(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: o,
            nextSibling: s,
            parentNode: a,
            remove: i,
            insert: l,
            createComment: c
        }
    } = e, u = (b, m) => {
        if (!m.hasChildNodes()) {
            n(null, b, m), Or(), m._vnode = b;
            return
        }
        Lt = !1, d(m.firstChild, b, null, null, null), Or(), m._vnode = b, Lt && console.error("Hydration completed but contains mismatches.")
    }, d = (b, m, v, k, w, L = !1) => {
        const M = yr(b) && b.data === "[",
            I = () => R(b, m, v, k, w, M),
            {
                type: V,
                ref: $,
                shapeFlag: G,
                patchFlag: U
            } = m;
        let Z = b.nodeType;
        m.el = b, U === -2 && (L = !1, m.dynamicChildren = null);
        let q = null;
        switch (V) {
            case sn:
                Z !== 3 ? m.children === "" ? (l(m.el = o(""), a(b), b), q = b) : q = I() : (b.data !== m.children && (Lt = !0, b.data = m.children), q = s(b));
                break;
            case qe:
                Z !== 8 || M ? q = I() : q = s(b);
                break;
            case Vn:
                if (M && (b = s(b), Z = b.nodeType), Z === 1 || Z === 3) {
                    q = b;
                    const Pe = !m.children.length;
                    for (let te = 0; te < m.staticCount; te++) Pe && (m.children += q.nodeType === 1 ? q.outerHTML : q.data), te === m.staticCount - 1 && (m.anchor = q), q = s(q);
                    return M ? s(q) : q
                } else I();
                break;
            case Ve:
                M ? q = g(b, m, v, k, w, L) : q = I();
                break;
            default:
                if (G & 1) Z !== 1 || m.type.toLowerCase() !== b.tagName.toLowerCase() ? q = I() : q = f(b, m, v, k, w, L);
                else if (G & 6) {
                    m.slotScopeIds = w;
                    const Pe = a(b);
                    if (t(m, Pe, null, v, k, _r(Pe), L), q = M ? O(b) : s(b), q && yr(q) && q.data === "teleport end" && (q = s(q)), tn(m)) {
                        let te;
                        M ? (te = Te(Ve), te.anchor = q ? q.previousSibling : Pe.lastChild) : te = b.nodeType === 3 ? wc("") : Te("div"), te.el = b, m.component.subTree = te
                    }
                } else G & 64 ? Z !== 8 ? q = I() : q = m.type.hydrate(b, m, v, k, w, L, e, h) : G & 128 && (q = m.type.hydrate(b, m, v, k, _r(a(b)), w, L, e, d))
        }
        return $ != null && Mr($, null, k, m), q
    }, f = (b, m, v, k, w, L) => {
        L = L || !!m.dynamicChildren;
        const {
            type: M,
            props: I,
            patchFlag: V,
            shapeFlag: $,
            dirs: G
        } = m, U = M === "input" && G || M === "option";
        if (U || V !== -1) {
            if (G && mt(m, null, v, "created"), I)
                if (U || !L || V & 48)
                    for (const q in I)(U && q.endsWith("value") || or(q) && !xn(q)) && r(b, q, null, I[q], !1, void 0, v);
                else I.onClick && r(b, "onClick", null, I.onClick, !1, void 0, v);
            let Z;
            if ((Z = I && I.onVnodeBeforeMount) && Je(Z, v, m), G && mt(m, null, v, "beforeMount"), ((Z = I && I.onVnodeMounted) || G) && Xl(() => {
                    Z && Je(Z, v, m), G && mt(m, null, v, "mounted")
                }, k), $ & 16 && !(I && (I.innerHTML || I.textContent))) {
                let q = h(b.firstChild, m, b, v, k, w, L);
                for (; q;) {
                    Lt = !0;
                    const Pe = q;
                    q = q.nextSibling, i(Pe)
                }
            } else $ & 8 && b.textContent !== m.children && (Lt = !0, b.textContent = m.children)
        }
        return b.nextSibling
    }, h = (b, m, v, k, w, L, M) => {
        M = M || !!m.dynamicChildren;
        const I = m.children,
            V = I.length;
        for (let $ = 0; $ < V; $++) {
            const G = M ? I[$] : I[$] = ot(I[$]);
            if (b) b = d(b, G, k, w, L, M);
            else {
                if (G.type === sn && !G.children) continue;
                Lt = !0, n(null, G, v, null, k, w, _r(v), L)
            }
        }
        return b
    }, g = (b, m, v, k, w, L) => {
        const {
            slotScopeIds: M
        } = m;
        M && (w = w ? w.concat(M) : M);
        const I = a(b),
            V = h(s(b), m, I, v, k, w, L);
        return V && yr(V) && V.data === "]" ? s(m.anchor = V) : (Lt = !0, l(m.anchor = c("]"), I, V), V)
    }, R = (b, m, v, k, w, L) => {
        if (Lt = !0, m.el = null, L) {
            const V = O(b);
            for (;;) {
                const $ = s(b);
                if ($ && $ !== V) i($);
                else break
            }
        }
        const M = s(b),
            I = a(b);
        return i(b), n(null, m, I, M, v, k, _r(I), w), M
    }, O = b => {
        let m = 0;
        for (; b;)
            if (b = s(b), b && yr(b) && (b.data === "[" && m++, b.data === "]")) {
                if (m === 0) return s(b);
                m--
            }
        return b
    };
    return [u, d]
}
const Fe = Xl;

function gd(e) {
    return _c(e)
}

function _d(e) {
    return _c(e, pd)
}

function _c(e, t) {
    const n = $u();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: s,
        createElement: a,
        createText: i,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: d,
        nextSibling: f,
        setScopeId: h = ut,
        insertStaticContent: g
    } = e, R = (p, y, _, T = null, S = null, F = null, W = !1, N = null, D = !!y.dynamicChildren) => {
        if (p === y) return;
        p && !_t(p, y) && (T = z(p), Ne(p, S, F, !0), p = null), y.patchFlag === -2 && (D = !1, y.dynamicChildren = null);
        const {
            type: A,
            ref: E,
            shapeFlag: C
        } = y;
        switch (A) {
            case sn:
                O(p, y, _, T);
                break;
            case qe:
                b(p, y, _, T);
                break;
            case Vn:
                p == null && m(y, _, T, W);
                break;
            case Ve:
                U(p, y, _, T, S, F, W, N, D);
                break;
            default:
                C & 1 ? w(p, y, _, T, S, F, W, N, D) : C & 6 ? Z(p, y, _, T, S, F, W, N, D) : (C & 64 || C & 128) && A.process(p, y, _, T, S, F, W, N, D, oe)
        }
        E != null && S && Mr(E, p && p.ref, F, y || p, !y)
    }, O = (p, y, _, T) => {
        if (p == null) r(y.el = i(y.children), _, T);
        else {
            const S = y.el = p.el;
            y.children !== p.children && c(S, y.children)
        }
    }, b = (p, y, _, T) => {
        p == null ? r(y.el = l(y.children || ""), _, T) : y.el = p.el
    }, m = (p, y, _, T) => {
        [p.el, p.anchor] = g(p.children, y, _, T, p.el, p.anchor)
    }, v = ({
        el: p,
        anchor: y
    }, _, T) => {
        let S;
        for (; p && p !== y;) S = f(p), r(p, _, T), p = S;
        r(y, _, T)
    }, k = ({
        el: p,
        anchor: y
    }) => {
        let _;
        for (; p && p !== y;) _ = f(p), o(p), p = _;
        o(y)
    }, w = (p, y, _, T, S, F, W, N, D) => {
        W = W || y.type === "svg", p == null ? L(y, _, T, S, F, W, N, D) : V(p, y, S, F, W, N, D)
    }, L = (p, y, _, T, S, F, W, N) => {
        let D, A;
        const {
            type: E,
            props: C,
            shapeFlag: K,
            transition: J,
            dirs: re
        } = p;
        if (D = p.el = a(p.type, F, C && C.is, C), K & 8 ? u(D, p.children) : K & 16 && I(p.children, D, null, T, S, F && E !== "foreignObject", W, N), re && mt(p, null, T, "created"), C) {
            for (const ae in C) ae !== "value" && !xn(ae) && s(D, ae, null, C[ae], F, p.children, T, S, x);
            "value" in C && s(D, "value", null, C.value), (A = C.onVnodeBeforeMount) && Je(A, T, p)
        }
        M(D, p, p.scopeId, W, T), re && mt(p, null, T, "beforeMount");
        const ue = (!S || S && !S.pendingBranch) && J && !J.persisted;
        ue && J.beforeEnter(D), r(D, y, _), ((A = C && C.onVnodeMounted) || ue || re) && Fe(() => {
            A && Je(A, T, p), ue && J.enter(D), re && mt(p, null, T, "mounted")
        }, S)
    }, M = (p, y, _, T, S) => {
        if (_ && h(p, _), T)
            for (let F = 0; F < T.length; F++) h(p, T[F]);
        if (S) {
            let F = S.subTree;
            if (y === F) {
                const W = S.vnode;
                M(p, W, W.scopeId, W.slotScopeIds, S.parent)
            }
        }
    }, I = (p, y, _, T, S, F, W, N, D = 0) => {
        for (let A = D; A < p.length; A++) {
            const E = p[A] = N ? Dt(p[A]) : ot(p[A]);
            R(null, E, y, _, T, S, F, W, N)
        }
    }, V = (p, y, _, T, S, F, W) => {
        const N = y.el = p.el;
        let {
            patchFlag: D,
            dynamicChildren: A,
            dirs: E
        } = y;
        D |= p.patchFlag & 16;
        const C = p.props || we,
            K = y.props || we;
        let J;
        _ && Kt(_, !1), (J = K.onVnodeBeforeUpdate) && Je(J, _, y, p), E && mt(y, p, _, "beforeUpdate"), _ && Kt(_, !0);
        const re = S && y.type !== "foreignObject";
        if (A ? $(p.dynamicChildren, A, N, _, T, re, F) : W || le(p, y, N, null, _, T, re, F, !1), D > 0) {
            if (D & 16) G(N, y, C, K, _, T, S);
            else if (D & 2 && C.class !== K.class && s(N, "class", null, K.class, S), D & 4 && s(N, "style", C.style, K.style, S), D & 8) {
                const ue = y.dynamicProps;
                for (let ae = 0; ae < ue.length; ae++) {
                    const Ce = ue[ae],
                        nt = C[Ce],
                        cn = K[Ce];
                    (cn !== nt || Ce === "value") && s(N, Ce, nt, cn, S, p.children, _, T, x)
                }
            }
            D & 1 && p.children !== y.children && u(N, y.children)
        } else !W && A == null && G(N, y, C, K, _, T, S);
        ((J = K.onVnodeUpdated) || E) && Fe(() => {
            J && Je(J, _, y, p), E && mt(y, p, _, "updated")
        }, T)
    }, $ = (p, y, _, T, S, F, W) => {
        for (let N = 0; N < y.length; N++) {
            const D = p[N],
                A = y[N],
                E = D.el && (D.type === Ve || !_t(D, A) || D.shapeFlag & 70) ? d(D.el) : _;
            R(D, A, E, null, T, S, F, W, !0)
        }
    }, G = (p, y, _, T, S, F, W) => {
        if (_ !== T) {
            if (_ !== we)
                for (const N in _) !xn(N) && !(N in T) && s(p, N, _[N], null, W, y.children, S, F, x);
            for (const N in T) {
                if (xn(N)) continue;
                const D = T[N],
                    A = _[N];
                D !== A && N !== "value" && s(p, N, A, D, W, y.children, S, F, x)
            }
            "value" in T && s(p, "value", _.value, T.value)
        }
    }, U = (p, y, _, T, S, F, W, N, D) => {
        const A = y.el = p ? p.el : i(""),
            E = y.anchor = p ? p.anchor : i("");
        let {
            patchFlag: C,
            dynamicChildren: K,
            slotScopeIds: J
        } = y;
        J && (N = N ? N.concat(J) : J), p == null ? (r(A, _, T), r(E, _, T), I(y.children, _, E, S, F, W, N, D)) : C > 0 && C & 64 && K && p.dynamicChildren ? ($(p.dynamicChildren, K, _, S, F, W, N), (y.key != null || S && y === S.subTree) && yc(p, y, !0)) : le(p, y, _, E, S, F, W, N, D)
    }, Z = (p, y, _, T, S, F, W, N, D) => {
        y.slotScopeIds = N, p == null ? y.shapeFlag & 512 ? S.ctx.activate(y, _, T, W, D) : q(y, _, T, S, F, W, D) : Pe(p, y, D)
    }, q = (p, y, _, T, S, F, W) => {
        const N = p.component = Cd(p, T, S);
        if (ar(p) && (N.ctx.renderer = oe), Rd(N), N.asyncDep) {
            if (S && S.registerDep(N, te), !p.el) {
                const D = N.subTree = Te(qe);
                b(null, D, y, _)
            }
            return
        }
        te(N, p, y, _, S, F, W)
    }, Pe = (p, y, _) => {
        const T = y.component = p.component;
        if (Nf(p, y, _))
            if (T.asyncDep && !T.asyncResolved) {
                se(T, y, _);
                return
            } else T.next = y, Pf(T.update), T.update();
        else y.el = p.el, T.vnode = y
    }, te = (p, y, _, T, S, F, W) => {
        const N = () => {
                if (p.isMounted) {
                    let {
                        next: E,
                        bu: C,
                        u: K,
                        parent: J,
                        vnode: re
                    } = p, ue = E, ae;
                    Kt(p, !1), E ? (E.el = re.el, se(p, E, W)) : E = re, C && gn(C), (ae = E.props && E.props.onVnodeBeforeUpdate) && Je(ae, J, E, re), Kt(p, !0);
                    const Ce = no(p),
                        nt = p.subTree;
                    p.subTree = Ce, R(nt, Ce, d(nt.el), z(nt), p, S, F), E.el = Ce.el, ue === null && vs(p, Ce.el), K && Fe(K, S), (ae = E.props && E.props.onVnodeUpdated) && Fe(() => Je(ae, J, E, re), S)
                } else {
                    let E;
                    const {
                        el: C,
                        props: K
                    } = y, {
                        bm: J,
                        m: re,
                        parent: ue
                    } = p, ae = tn(y);
                    if (Kt(p, !1), J && gn(J), !ae && (E = K && K.onVnodeBeforeMount) && Je(E, ue, y), Kt(p, !0), C && ne) {
                        const Ce = () => {
                            p.subTree = no(p), ne(C, p.subTree, p, S, null)
                        };
                        ae ? y.type.__asyncLoader().then(() => !p.isUnmounted && Ce()) : Ce()
                    } else {
                        const Ce = p.subTree = no(p);
                        R(null, Ce, _, T, p, S, F), y.el = Ce.el
                    }
                    if (re && Fe(re, S), !ae && (E = K && K.onVnodeMounted)) {
                        const Ce = y;
                        Fe(() => Je(E, ue, Ce), S)
                    }(y.shapeFlag & 256 || ue && tn(ue.vnode) && ue.vnode.shapeFlag & 256) && p.a && Fe(p.a, S), p.isMounted = !0, y = _ = T = null
                }
            },
            D = p.effect = new ds(N, () => Wr(A), p.scope),
            A = p.update = () => D.run();
        A.id = p.uid, Kt(p, !0), A()
    }, se = (p, y, _) => {
        y.component = p;
        const T = p.vnode.props;
        p.vnode = y, p.next = null, cd(p, y.props, T, _), dd(p, y.children, _), In(), na(), Sn()
    }, le = (p, y, _, T, S, F, W, N, D = !1) => {
        const A = p && p.children,
            E = p ? p.shapeFlag : 0,
            C = y.children,
            {
                patchFlag: K,
                shapeFlag: J
            } = y;
        if (K > 0) {
            if (K & 128) {
                lt(A, C, _, T, S, F, W, N, D);
                return
            } else if (K & 256) {
                We(A, C, _, T, S, F, W, N, D);
                return
            }
        }
        J & 8 ? (E & 16 && x(A, S, F), C !== A && u(_, C)) : E & 16 ? J & 16 ? lt(A, C, _, T, S, F, W, N, D) : x(A, S, F, !0) : (E & 8 && u(_, ""), J & 16 && I(C, _, T, S, F, W, N, D))
    }, We = (p, y, _, T, S, F, W, N, D) => {
        p = p || mn, y = y || mn;
        const A = p.length,
            E = y.length,
            C = Math.min(A, E);
        let K;
        for (K = 0; K < C; K++) {
            const J = y[K] = D ? Dt(y[K]) : ot(y[K]);
            R(p[K], J, _, null, S, F, W, N, D)
        }
        A > E ? x(p, S, F, !0, !1, C) : I(y, _, T, S, F, W, N, D, C)
    }, lt = (p, y, _, T, S, F, W, N, D) => {
        let A = 0;
        const E = y.length;
        let C = p.length - 1,
            K = E - 1;
        for (; A <= C && A <= K;) {
            const J = p[A],
                re = y[A] = D ? Dt(y[A]) : ot(y[A]);
            if (_t(J, re)) R(J, re, _, null, S, F, W, N, D);
            else break;
            A++
        }
        for (; A <= C && A <= K;) {
            const J = p[C],
                re = y[K] = D ? Dt(y[K]) : ot(y[K]);
            if (_t(J, re)) R(J, re, _, null, S, F, W, N, D);
            else break;
            C--, K--
        }
        if (A > C) {
            if (A <= K) {
                const J = K + 1,
                    re = J < E ? y[J].el : T;
                for (; A <= K;) R(null, y[A] = D ? Dt(y[A]) : ot(y[A]), _, re, S, F, W, N, D), A++
            }
        } else if (A > K)
            for (; A <= C;) Ne(p[A], S, F, !0), A++;
        else {
            const J = A,
                re = A,
                ue = new Map;
            for (A = re; A <= K; A++) {
                const Ze = y[A] = D ? Dt(y[A]) : ot(y[A]);
                Ze.key != null && ue.set(Ze.key, A)
            }
            let ae, Ce = 0;
            const nt = K - re + 1;
            let cn = !1,
                Vs = 0;
            const Nn = new Array(nt);
            for (A = 0; A < nt; A++) Nn[A] = 0;
            for (A = J; A <= C; A++) {
                const Ze = p[A];
                if (Ce >= nt) {
                    Ne(Ze, S, F, !0);
                    continue
                }
                let dt;
                if (Ze.key != null) dt = ue.get(Ze.key);
                else
                    for (ae = re; ae <= K; ae++)
                        if (Nn[ae - re] === 0 && _t(Ze, y[ae])) {
                            dt = ae;
                            break
                        }
                dt === void 0 ? Ne(Ze, S, F, !0) : (Nn[dt - re] = A + 1, dt >= Vs ? Vs = dt : cn = !0, R(Ze, y[dt], _, null, S, F, W, N, D), Ce++)
            }
            const $s = cn ? yd(Nn) : mn;
            for (ae = $s.length - 1, A = nt - 1; A >= 0; A--) {
                const Ze = re + A,
                    dt = y[Ze],
                    qs = Ze + 1 < E ? y[Ze + 1].el : T;
                Nn[A] === 0 ? R(null, dt, _, qs, S, F, W, N, D) : cn && (ae < 0 || A !== $s[ae] ? xe(dt, _, qs, 2) : ae--)
            }
        }
    }, xe = (p, y, _, T, S = null) => {
        const {
            el: F,
            type: W,
            transition: N,
            children: D,
            shapeFlag: A
        } = p;
        if (A & 6) {
            xe(p.component.subTree, y, _, T);
            return
        }
        if (A & 128) {
            p.suspense.move(y, _, T);
            return
        }
        if (A & 64) {
            W.move(p, y, _, oe);
            return
        }
        if (W === Ve) {
            r(F, y, _);
            for (let C = 0; C < D.length; C++) xe(D[C], y, _, T);
            r(p.anchor, y, _);
            return
        }
        if (W === Vn) {
            v(p, y, _);
            return
        }
        if (T !== 2 && A & 1 && N)
            if (T === 0) N.beforeEnter(F), r(F, y, _), Fe(() => N.enter(F), S);
            else {
                const {
                    leave: C,
                    delayLeave: K,
                    afterLeave: J
                } = N, re = () => r(F, y, _), ue = () => {
                    C(F, () => {
                        re(), J && J()
                    })
                };
                K ? K(F, re, ue) : ue()
            }
        else r(F, y, _)
    }, Ne = (p, y, _, T = !1, S = !1) => {
        const {
            type: F,
            props: W,
            ref: N,
            children: D,
            dynamicChildren: A,
            shapeFlag: E,
            patchFlag: C,
            dirs: K
        } = p;
        if (N != null && Mr(N, null, _, p, !0), E & 256) {
            y.ctx.deactivate(p);
            return
        }
        const J = E & 1 && K,
            re = !tn(p);
        let ue;
        if (re && (ue = W && W.onVnodeBeforeUnmount) && Je(ue, y, p), E & 6) P(p.component, _, T);
        else {
            if (E & 128) {
                p.suspense.unmount(_, T);
                return
            }
            J && mt(p, null, y, "beforeUnmount"), E & 64 ? p.type.remove(p, y, _, S, oe, T) : A && (F !== Ve || C > 0 && C & 64) ? x(A, y, _, !1, !0) : (F === Ve && C & 384 || !S && E & 16) && x(D, y, _), T && vt(p)
        }(re && (ue = W && W.onVnodeUnmounted) || J) && Fe(() => {
            ue && Je(ue, y, p), J && mt(p, null, y, "unmounted")
        }, _)
    }, vt = p => {
        const {
            type: y,
            el: _,
            anchor: T,
            transition: S
        } = p;
        if (y === Ve) {
            It(_, T);
            return
        }
        if (y === Vn) {
            k(p);
            return
        }
        const F = () => {
            o(_), S && !S.persisted && S.afterLeave && S.afterLeave()
        };
        if (p.shapeFlag & 1 && S && !S.persisted) {
            const {
                leave: W,
                delayLeave: N
            } = S, D = () => W(_, F);
            N ? N(p.el, F, D) : D()
        } else F()
    }, It = (p, y) => {
        let _;
        for (; p !== y;) _ = f(p), o(p), p = _;
        o(y)
    }, P = (p, y, _) => {
        const {
            bum: T,
            scope: S,
            update: F,
            subTree: W,
            um: N
        } = p;
        T && gn(T), S.stop(), F && (F.active = !1, Ne(W, p, y, _)), N && Fe(N, y), Fe(() => {
            p.isUnmounted = !0
        }, y), y && y.pendingBranch && !y.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve())
    }, x = (p, y, _, T = !1, S = !1, F = 0) => {
        for (let W = F; W < p.length; W++) Ne(p[W], y, _, T, S)
    }, z = p => p.shapeFlag & 6 ? z(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : f(p.anchor || p.el), Y = (p, y, _) => {
        p == null ? y._vnode && Ne(y._vnode, null, null, !0) : R(y._vnode || null, p, y, null, null, null, _), na(), Or(), y._vnode = p
    }, oe = {
        p: R,
        um: Ne,
        m: xe,
        r: vt,
        mt: q,
        mc: I,
        pc: le,
        pbc: $,
        n: z,
        o: e
    };
    let he, ne;
    return t && ([he, ne] = t(oe)), {
        render: Y,
        hydrate: he,
        createApp: md(Y, he)
    }
}

function Kt({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function yc(e, t, n = !1) {
    const r = e.children,
        o = t.children;
    if (Q(r) && Q(o))
        for (let s = 0; s < r.length; s++) {
            const a = r[s];
            let i = o[s];
            i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = Dt(o[s]), i.el = a.el), n || yc(a, i)), i.type === sn && (i.el = a.el)
        }
}

function yd(e) {
    const t = e.slice(),
        n = [0];
    let r, o, s, a, i;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (o = n[n.length - 1], e[o] < c) {
                t[r] = o, n.push(r);
                continue
            }
            for (s = 0, a = n.length - 1; s < a;) i = s + a >> 1, e[n[i]] < c ? s = i + 1 : a = i;
            c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r)
        }
    }
    for (s = n.length, a = n[s - 1]; s-- > 0;) n[s] = a, a = t[a];
    return n
}
const bd = e => e.__isTeleport,
    Ve = Symbol(void 0),
    sn = Symbol(void 0),
    qe = Symbol(void 0),
    Vn = Symbol(void 0),
    $n = [];
let st = null;

function nn(e = !1) {
    $n.push(st = e ? null : [])
}

function bc() {
    $n.pop(), st = $n[$n.length - 1] || null
}
let wn = 1;

function ha(e) {
    wn += e
}

function vc(e) {
    return e.dynamicChildren = wn > 0 ? st || mn : null, bc(), wn > 0 && st && st.push(e), e
}

function My(e, t, n, r, o, s) {
    return vc(kc(e, t, n, r, o, s, !0))
}

function En(e, t, n, r, o) {
    return vc(Te(e, t, n, r, o, !0))
}

function Tn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function _t(e, t) {
    return e.type === t.type && e.key === t.key
}
const $r = "__vInternal",
    Ec = ({
        key: e
    }) => e != null ? e : null,
    Tr = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => e != null ? Ae(e) || Oe(e) || X(e) ? {
        i: He,
        r: e,
        k: t,
        f: !!n
    } : e : null;

function kc(e, t = null, n = null, r = 0, o = null, s = e === Ve ? 0 : 1, a = !1, i = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ec(t),
        ref: t && Tr(t),
        scopeId: Br,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: He
    };
    return i ? (Ps(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ae(n) ? 8 : 16), wn > 0 && !a && st && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && st.push(l), l
}
const Te = vd;

function vd(e, t = null, n = null, r = 0, o = null, s = !1) {
    if ((!e || e === lc) && (e = qe), Tn(e)) {
        const i = At(e, t, !0);
        return n && Ps(i, n), wn > 0 && !s && st && (i.shapeFlag & 6 ? st[st.indexOf(e)] = i : st.push(i)), i.patchFlag |= -2, i
    }
    if (Id(e) && (e = e.__vccOpts), t) {
        t = Ed(t);
        let {
            class: i,
            style: l
        } = t;
        i && !Ae(i) && (t.class = ss(i)), ge(l) && (jl(l) && !Q(l) && (l = je({}, l)), t.style = os(l))
    }
    const a = Ae(e) ? 1 : Ql(e) ? 128 : bd(e) ? 64 : ge(e) ? 4 : X(e) ? 2 : 0;
    return kc(e, t, n, r, o, a, s, !0)
}

function Ed(e) {
    return e ? jl(e) || $r in e ? je({}, e) : e : null
}

function At(e, t, n = !1) {
    const {
        props: r,
        ref: o,
        patchFlag: s,
        children: a
    } = e, i = t ? kd(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: i,
        key: i && Ec(i),
        ref: t && t.ref ? n && o ? Q(o) ? o.concat(Tr(t)) : [o, Tr(t)] : Tr(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ve ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && At(e.ssContent),
        ssFallback: e.ssFallback && At(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx
    }
}

function wc(e = " ", t = 0) {
    return Te(sn, null, e, t)
}

function Ny(e, t) {
    const n = Te(Vn, null, e);
    return n.staticCount = t, n
}

function Fy(e = "", t = !1) {
    return t ? (nn(), En(qe, null, e)) : Te(qe, null, e)
}

function ot(e) {
    return e == null || typeof e == "boolean" ? Te(qe) : Q(e) ? Te(Ve, null, e.slice()) : typeof e == "object" ? Dt(e) : Te(sn, null, String(e))
}

function Dt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e)
}

function Ps(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (Q(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), Ps(e, o()), o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !($r in t) ? t._ctx = He : o === 3 && He && (He.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else X(t) ? (t = {
        default: t,
        _ctx: He
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [wc(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function kd(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class") t.class !== r.class && (t.class = ss([t.class, r.class]));
            else if (o === "style") t.style = os([t.style, r.style]);
        else if (or(o)) {
            const s = t[o],
                a = r[o];
            a && s !== a && !(Q(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a)
        } else o !== "" && (t[o] = r[o])
    }
    return t
}

function Je(e, t, n, r = null) {
    at(e, t, 7, [n, r])
}
const wd = gc();
let Td = 0;

function Cd(e, t, n) {
    const r = e.type,
        o = (t ? t.appContext : e.appContext) || wd,
        s = {
            uid: Td++,
            vnode: e,
            type: r,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Rl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: dc(r, o),
            emitsOptions: Yl(r, o),
            emit: null,
            emitted: null,
            propsDefaults: we,
            inheritAttrs: r.inheritAttrs,
            ctx: we,
            data: we,
            props: we,
            attrs: we,
            slots: we,
            refs: we,
            setupState: we,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return s.ctx = {
        _: s
    }, s.root = t ? t.root : s, s.emit = If.bind(null, s), e.ce && e.ce(s), s
}
let Se = null;
const it = () => Se || He,
    Bt = e => {
        Se = e, e.scope.on()
    },
    Wt = () => {
        Se && Se.scope.off(), Se = null
    };

function Tc(e) {
    return e.vnode.shapeFlag & 4
}
let Cn = !1;

function Rd(e, t = !1) {
    Cn = t;
    const {
        props: n,
        children: r
    } = e.vnode, o = Tc(e);
    ld(e, n, o, t), fd(e, r);
    const s = o ? Ad(e, t) : void 0;
    return Cn = !1, s
}

function Ad(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Ul(new Proxy(e.ctx, nd));
    const {
        setup: r
    } = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? Od(e) : null;
        Bt(e), In();
        const s = zt(r, e, 0, [e.props, o]);
        if (Sn(), Wt(), cs(s)) {
            if (s.then(Wt, Wt), t) return s.then(a => {
                Mo(e, a, t)
            }).catch(a => {
                Ln(a, e, 0)
            });
            e.asyncDep = s
        } else Mo(e, s, t)
    } else Cc(e, t)
}

function Mo(e, t, n) {
    X(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Bl(t)), Cc(e, n)
}
let ma;

function Cc(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && ma && !r.render) {
            const o = r.template || Rs(e).template;
            if (o) {
                const {
                    isCustomElement: s,
                    compilerOptions: a
                } = e.appContext.config, {
                    delimiters: i,
                    compilerOptions: l
                } = r, c = je(je({
                    isCustomElement: s,
                    delimiters: i
                }, a), l);
                r.render = ma(o, c)
            }
        }
        e.render = r.render || ut
    }
    Bt(e), In(), rd(e), Sn(), Wt()
}

function Pd(e) {
    return new Proxy(e.attrs, {
        get(t, n) {
            return tt(e, "get", "$attrs"), t[n]
        }
    })
}

function Od(e) {
    const t = r => {
        e.exposed = r || {}
    };
    let n;
    return {
        get attrs() {
            return n || (n = Pd(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function qr(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Bl(Ul(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Bn) return Bn[n](e)
        },
        has(t, n) {
            return n in t || n in Bn
        }
    }))
}

function No(e, t = !0) {
    return X(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Id(e) {
    return X(e) && "__vccOpts" in e
}
const pe = (e, t) => Cf(e, t, Cn);

function Dy(e) {
    const t = it();
    let n = e();
    return Wt(), cs(n) && (n = n.catch(r => {
        throw Bt(t), r
    })), [n, () => Bt(t)]
}

function Ke(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ge(t) && !Q(t) ? Tn(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Tn(n) && (n = [n]), Te(e, t, n))
}
const Sd = Symbol(""),
    Ld = () => $e(Sd),
    Rc = "3.2.45",
    Md = "http://www.w3.org/2000/svg",
    Zt = typeof document < "u" ? document : null,
    pa = Zt && Zt.createElement("template"),
    Nd = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const o = t ? Zt.createElementNS(Md, e) : Zt.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o
        },
        createText: e => Zt.createTextNode(e),
        createComment: e => Zt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Zt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, o, s) {
            const a = n ? n.previousSibling : t.lastChild;
            if (o && (o === s || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)););
            else {
                pa.innerHTML = r ? `<svg>${e}</svg>` : e;
                const i = pa.content;
                if (r) {
                    const l = i.firstChild;
                    for (; l.firstChild;) i.appendChild(l.firstChild);
                    i.removeChild(l)
                }
                t.insertBefore(i, n)
            }
            return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };

function Fd(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function Dd(e, t, n) {
    const r = e.style,
        o = Ae(n);
    if (n && !o) {
        for (const s in n) Fo(r, s, n[s]);
        if (t && !Ae(t))
            for (const s in t) n[s] == null && Fo(r, s, "")
    } else {
        const s = r.display;
        o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = s)
    }
}
const ga = /\s*!important$/;

function Fo(e, t, n) {
    if (Q(n)) n.forEach(r => Fo(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = Hd(e, t);
        ga.test(n) ? e.setProperty(an(r), n.replace(ga, ""), "important") : e[r] = n
    }
}
const _a = ["Webkit", "Moz", "ms"],
    lo = {};

function Hd(e, t) {
    const n = lo[t];
    if (n) return n;
    let r = yt(t);
    if (r !== "filter" && r in e) return lo[t] = r;
    r = Ur(r);
    for (let o = 0; o < _a.length; o++) {
        const s = _a[o] + r;
        if (s in e) return lo[t] = s
    }
    return t
}
const ya = "http://www.w3.org/1999/xlink";

function jd(e, t, n, r, o) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(ya, t.slice(6, t.length)) : e.setAttributeNS(ya, t, n);
    else {
        const s = Hu(t);
        n == null || s && !kl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n)
    }
}

function Ud(e, t, n, r, o, s, a) {
    if (t === "innerHTML" || t === "textContent") {
        r && a(r, o, s), e[t] = n == null ? "" : n;
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = n;
        const l = n == null ? "" : n;
        (e.value !== l || e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = kl(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(t)
}

function Tt(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function zd(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

function Wd(e, t, n, r, o = null) {
    const s = e._vei || (e._vei = {}),
        a = s[t];
    if (r && a) a.value = r;
    else {
        const [i, l] = xd(t);
        if (r) {
            const c = s[t] = $d(r, o);
            Tt(e, i, c, l)
        } else a && (zd(e, i, a, l), s[t] = void 0)
    }
}
const ba = /(?:Once|Passive|Capture)$/;

function xd(e) {
    let t;
    if (ba.test(e)) {
        t = {};
        let r;
        for (; r = e.match(ba);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : an(e.slice(2)), t]
}
let co = 0;
const Bd = Promise.resolve(),
    Vd = () => co || (Bd.then(() => co = 0), co = Date.now());

function $d(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        at(qd(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = Vd(), n
}

function qd(e, t) {
    if (Q(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => o => !o._stopped && r && r(o))
    } else return t
}
const va = /^on[a-z]/,
    Kd = (e, t, n, r, o = !1, s, a, i, l) => {
        t === "class" ? Fd(e, r, o) : t === "style" ? Dd(e, n, r) : or(t) ? is(t) || Wd(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gd(e, t, r, o)) ? Ud(e, t, r, s, a, i, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), jd(e, t, r, o))
    };

function Gd(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && va.test(t) && X(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || va.test(t) && Ae(n) ? !1 : t in e
}
const Mt = "transition",
    Fn = "animation",
    Kr = (e, {
        slots: t
    }) => Ke(tc, Jd(e), t);
Kr.displayName = "Transition";
const Ac = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Kr.props = je({}, tc.props, Ac);
const Gt = (e, t = []) => {
        Q(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Ea = e => e ? Q(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Jd(e) {
    const t = {};
    for (const U in e) U in Ac || (t[U] = e[U]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: o,
        enterFromClass: s = `${n}-enter-from`,
        enterActiveClass: a = `${n}-enter-active`,
        enterToClass: i = `${n}-enter-to`,
        appearFromClass: l = s,
        appearActiveClass: c = a,
        appearToClass: u = i,
        leaveFromClass: d = `${n}-leave-from`,
        leaveActiveClass: f = `${n}-leave-active`,
        leaveToClass: h = `${n}-leave-to`
    } = e, g = Yd(o), R = g && g[0], O = g && g[1], {
        onBeforeEnter: b,
        onEnter: m,
        onEnterCancelled: v,
        onLeave: k,
        onLeaveCancelled: w,
        onBeforeAppear: L = b,
        onAppear: M = m,
        onAppearCancelled: I = v
    } = t, V = (U, Z, q) => {
        Jt(U, Z ? u : i), Jt(U, Z ? c : a), q && q()
    }, $ = (U, Z) => {
        U._isLeaving = !1, Jt(U, d), Jt(U, h), Jt(U, f), Z && Z()
    }, G = U => (Z, q) => {
        const Pe = U ? M : m,
            te = () => V(Z, U, q);
        Gt(Pe, [Z, te]), ka(() => {
            Jt(Z, U ? l : s), Nt(Z, U ? u : i), Ea(Pe) || wa(Z, r, R, te)
        })
    };
    return je(t, {
        onBeforeEnter(U) {
            Gt(b, [U]), Nt(U, s), Nt(U, a)
        },
        onBeforeAppear(U) {
            Gt(L, [U]), Nt(U, l), Nt(U, c)
        },
        onEnter: G(!1),
        onAppear: G(!0),
        onLeave(U, Z) {
            U._isLeaving = !0;
            const q = () => $(U, Z);
            Nt(U, d), Xd(), Nt(U, f), ka(() => {
                !U._isLeaving || (Jt(U, d), Nt(U, h), Ea(k) || wa(U, r, O, q))
            }), Gt(k, [U, q])
        },
        onEnterCancelled(U) {
            V(U, !1), Gt(v, [U])
        },
        onAppearCancelled(U) {
            V(U, !0), Gt(I, [U])
        },
        onLeaveCancelled(U) {
            $(U), Gt(w, [U])
        }
    })
}

function Yd(e) {
    if (e == null) return null;
    if (ge(e)) return [uo(e.enter), uo(e.leave)]; {
        const t = uo(e);
        return [t, t]
    }
}

function uo(e) {
    return on(e)
}

function Nt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function Jt(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const {
        _vtc: n
    } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0))
}

function ka(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Qd = 0;

function wa(e, t, n, r) {
    const o = e._endId = ++Qd,
        s = () => {
            o === e._endId && r()
        };
    if (n) return setTimeout(s, n);
    const {
        type: a,
        timeout: i,
        propCount: l
    } = Zd(e, t);
    if (!a) return r();
    const c = a + "end";
    let u = 0;
    const d = () => {
            e.removeEventListener(c, f), s()
        },
        f = h => {
            h.target === e && ++u >= l && d()
        };
    setTimeout(() => {
        u < l && d()
    }, i + 1), e.addEventListener(c, f)
}

function Zd(e, t) {
    const n = window.getComputedStyle(e),
        r = g => (n[g] || "").split(", "),
        o = r(`${Mt}Delay`),
        s = r(`${Mt}Duration`),
        a = Ta(o, s),
        i = r(`${Fn}Delay`),
        l = r(`${Fn}Duration`),
        c = Ta(i, l);
    let u = null,
        d = 0,
        f = 0;
    t === Mt ? a > 0 && (u = Mt, d = a, f = s.length) : t === Fn ? c > 0 && (u = Fn, d = c, f = l.length) : (d = Math.max(a, c), u = d > 0 ? a > c ? Mt : Fn : null, f = u ? u === Mt ? s.length : l.length : 0);
    const h = u === Mt && /\b(transform|all)(,|$)/.test(r(`${Mt}Property`).toString());
    return {
        type: u,
        timeout: d,
        propCount: f,
        hasTransform: h
    }
}

function Ta(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => Ca(n) + Ca(e[r])))
}

function Ca(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Xd() {
    return document.body.offsetHeight
}
const Vt = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Q(t) ? n => gn(t, n) : t
};

function eh(e) {
    e.target.composing = !0
}

function Ra(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Aa = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, o) {
            e._assign = Vt(o);
            const s = r || o.props && o.props.type === "number";
            Tt(e, t ? "change" : "input", a => {
                if (a.target.composing) return;
                let i = e.value;
                n && (i = i.trim()), s && (i = on(i)), e._assign(i)
            }), n && Tt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (Tt(e, "compositionstart", eh), Tt(e, "compositionend", Ra), Tt(e, "change", Ra))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t == null ? "" : t
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: n,
                trim: r,
                number: o
            }
        }, s) {
            if (e._assign = Vt(s), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (o || e.type === "number") && on(e.value) === t)) return;
            const a = t == null ? "" : t;
            e.value !== a && (e.value = a)
        }
    },
    th = {
        deep: !0,
        created(e, t, n) {
            e._assign = Vt(n), Tt(e, "change", () => {
                const r = e._modelValue,
                    o = Rn(e),
                    s = e.checked,
                    a = e._assign;
                if (Q(r)) {
                    const i = as(r, o),
                        l = i !== -1;
                    if (s && !l) a(r.concat(o));
                    else if (!s && l) {
                        const c = [...r];
                        c.splice(i, 1), a(c)
                    }
                } else if (On(r)) {
                    const i = new Set(r);
                    s ? i.add(o) : i.delete(o), a(i)
                } else a(Pc(e, s))
            })
        },
        mounted: Pa,
        beforeUpdate(e, t, n) {
            e._assign = Vt(n), Pa(e, t, n)
        }
    };

function Pa(e, {
    value: t,
    oldValue: n
}, r) {
    e._modelValue = t, Q(t) ? e.checked = as(t, r.props.value) > -1 : On(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = rn(t, Pc(e, !0)))
}
const nh = {
        created(e, {
            value: t
        }, n) {
            e.checked = rn(t, n.props.value), e._assign = Vt(n), Tt(e, "change", () => {
                e._assign(Rn(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, r) {
            e._assign = Vt(r), t !== n && (e.checked = rn(t, r.props.value))
        }
    },
    rh = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, r) {
            const o = On(t);
            Tt(e, "change", () => {
                const s = Array.prototype.filter.call(e.options, a => a.selected).map(a => n ? on(Rn(a)) : Rn(a));
                e._assign(e.multiple ? o ? new Set(s) : s : s[0])
            }), e._assign = Vt(r)
        },
        mounted(e, {
            value: t
        }) {
            Oa(e, t)
        },
        beforeUpdate(e, t, n) {
            e._assign = Vt(n)
        },
        updated(e, {
            value: t
        }) {
            Oa(e, t)
        }
    };

function Oa(e, t) {
    const n = e.multiple;
    if (!(n && !Q(t) && !On(t))) {
        for (let r = 0, o = e.options.length; r < o; r++) {
            const s = e.options[r],
                a = Rn(s);
            if (n) Q(t) ? s.selected = as(t, a) > -1 : s.selected = t.has(a);
            else if (rn(Rn(s), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function Rn(e) {
    return "_value" in e ? e._value : e.value
}

function Pc(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const Hy = {
    created(e, t, n) {
        br(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        br(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        br(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        br(e, t, n, r, "updated")
    }
};

function oh(e, t) {
    switch (e) {
        case "SELECT":
            return rh;
        case "TEXTAREA":
            return Aa;
        default:
            switch (t) {
                case "checkbox":
                    return th;
                case "radio":
                    return nh;
                default:
                    return Aa
            }
    }
}

function br(e, t, n, r, o) {
    const a = oh(e.tagName, n.props && n.props.type)[o];
    a && a(e, t, n, r)
}
const sh = ["ctrl", "shift", "alt", "meta"],
    ah = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => sh.some(n => e[`${n}Key`] && !t.includes(n))
    },
    jy = (e, t) => (n, ...r) => {
        for (let o = 0; o < t.length; o++) {
            const s = ah[t[o]];
            if (s && s(n, t)) return
        }
        return e(n, ...r)
    },
    ih = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    Uy = (e, t) => n => {
        if (!("key" in n)) return;
        const r = an(n.key);
        if (t.some(o => o === r || ih[o] === r)) return e(n)
    },
    zy = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dn(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), Dn(e, !0), r.enter(e)) : r.leave(e, () => {
                Dn(e, !1)
            }) : Dn(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            Dn(e, t)
        }
    };

function Dn(e, t) {
    e.style.display = t ? e._vod : "none"
}
const Oc = je({
    patchProp: Kd
}, Nd);
let qn, Ia = !1;

function lh() {
    return qn || (qn = gd(Oc))
}

function ch() {
    return qn = Ia ? qn : _d(Oc), Ia = !0, qn
}
const uh = (...e) => {
        const t = lh().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = Ic(r);
            if (!o) return;
            const s = t._component;
            !X(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
            const a = n(o, !1, o instanceof SVGElement);
            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a
        }, t
    },
    fh = (...e) => {
        const t = ch().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = Ic(r);
            if (o) return n(o, !0, o instanceof SVGElement)
        }, t
    };

function Ic(e) {
    return Ae(e) ? document.querySelector(e) : e
}
const dh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    hh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    mh = /^["[{]|^-?\d[\d.]{0,14}$/;

function ph(e, t) {
    if (!(e === "__proto__" || e === "constructor")) return t
}

function gh(e, t = {}) {
    if (typeof e != "string") return e;
    const n = e.toLowerCase();
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === "null") return null;
    if (n === "nan") return Number.NaN;
    if (n === "infinity") return Number.POSITIVE_INFINITY;
    if (n !== "undefined") {
        if (!mh.test(e)) {
            if (t.strict) throw new SyntaxError("Invalid JSON");
            return e
        }
        try {
            return dh.test(e) || hh.test(e) ? JSON.parse(e, ph) : JSON.parse(e)
        } catch (r) {
            if (t.strict) throw r;
            return e
        }
    }
}
const _h = /#/g,
    yh = /&/g,
    bh = /=/g,
    Sc = /\+/g,
    vh = /%5b/gi,
    Eh = /%5d/gi,
    kh = /%5e/gi,
    wh = /%60/gi,
    Th = /%7b/gi,
    Ch = /%7c/gi,
    Rh = /%7d/gi,
    Ah = /%20/gi;

function Ph(e) {
    return encodeURI("" + e).replace(Ch, "|").replace(vh, "[").replace(Eh, "]")
}

function Do(e) {
    return Ph(e).replace(Sc, "%2B").replace(Ah, "+").replace(_h, "%23").replace(yh, "%26").replace(wh, "`").replace(Th, "{").replace(Rh, "}").replace(kh, "^")
}

function fo(e) {
    return Do(e).replace(bh, "%3D")
}

function Lc(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function Oh(e) {
    return Lc(e.replace(Sc, " "))
}

function Ih(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const o = Lc(r[1]);
        if (o === "__proto__" || o === "constructor") continue;
        const s = Oh(r[2] || "");
        t[o] ? Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s] : t[o] = s
    }
    return t
}

function Sh(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${fo(e)}=${Do(n)}`).join("&") : `${fo(e)}=${Do(t)}` : fo(e)
}

function Lh(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => Sh(t, e[t])).join("&")
}
const Mh = /^\w+:(\/\/)?/,
    Nh = /^\/\/[^/]+/;

function Gr(e, t = !1) {
    return Mh.test(e) || t && Nh.test(e)
}
const Fh = /\/$|\/\?/;

function Ho(e = "", t = !1) {
    return t ? Fh.test(e) : e.endsWith("/")
}

function Mc(e = "", t = !1) {
    if (!t) return (Ho(e) ? e.slice(0, -1) : e) || "/";
    if (!Ho(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}

function Dh(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ho(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}

function Hh(e = "") {
    return e.startsWith("/")
}

function jh(e = "") {
    return (Hh(e) ? e.slice(1) : e) || "/"
}

function Uh(e, t) {
    if (Nc(t) || Gr(e)) return e;
    const n = Mc(t);
    return e.startsWith(n) ? e : Os(n, e)
}

function Sa(e, t) {
    if (Nc(t)) return e;
    const n = Mc(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}

function zh(e, t) {
    const n = Is(e),
        r = { ...Ih(n.search),
            ...t
        };
    return n.search = Lh(r), xh(n)
}

function Nc(e) {
    return !e || e === "/"
}

function Wh(e) {
    return e && e !== "/"
}

function Os(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => Wh(o))) n = n ? Dh(n) + jh(r) : r;
    return n
}

function Is(e = "", t) {
    if (!Gr(e, !0)) return t ? Is(t + e) : La(e);
    const [n = "", r, o = ""] = (e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [s = "", a = ""] = (o.match(/([^#/?]*)(.*)?/) || []).splice(1), {
        pathname: i,
        search: l,
        hash: c
    } = La(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: n,
        auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
        host: s,
        pathname: i,
        search: l,
        hash: c
    }
}

function La(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function xh(e) {
    const t = e.pathname + (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") + e.hash;
    return e.protocol ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + t : t
}
class Bh extends Error {
    constructor() {
        super(...arguments), this.name = "FetchError"
    }
}

function Vh(e, t, n) {
    let r = "";
    e && n && (r = `${n.status} ${n.statusText} (${e.toString()})`), t && (r = `${t.message} (${r})`);
    const o = new Bh(r);
    return Object.defineProperty(o, "request", {
        get() {
            return e
        }
    }), Object.defineProperty(o, "response", {
        get() {
            return n
        }
    }), Object.defineProperty(o, "data", {
        get() {
            return n && n._data
        }
    }), Object.defineProperty(o, "status", {
        get() {
            return n && n.status
        }
    }), Object.defineProperty(o, "statusText", {
        get() {
            return n && n.statusText
        }
    }), Object.defineProperty(o, "statusCode", {
        get() {
            return n && n.status
        }
    }), Object.defineProperty(o, "statusMessage", {
        get() {
            return n && n.statusText
        }
    }), o
}
const $h = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Ma(e = "GET") {
    return $h.has(e.toUpperCase())
}

function qh(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Kh = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    Gh = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function Jh(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift();
    return Gh.test(t) ? "json" : Kh.has(t) || t.startsWith("text/") ? "text" : "blob"
}
const Yh = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

function Fc(e) {
    const {
        fetch: t,
        Headers: n
    } = e;

    function r(a) {
        const i = a.error && a.error.name === "AbortError" || !1;
        if (a.options.retry !== !1 && !i) {
            const c = typeof a.options.retry == "number" ? a.options.retry : Ma(a.options.method) ? 0 : 1,
                u = a.response && a.response.status || 500;
            if (c > 0 && Yh.has(u)) return o(a.request, { ...a.options,
                retry: c - 1
            })
        }
        const l = Vh(a.request, a.error, a.response);
        throw Error.captureStackTrace && Error.captureStackTrace(l, o), l
    }
    const o = async function(i, l = {}) {
            const c = {
                request: i,
                options: { ...e.defaults,
                    ...l
                },
                response: void 0,
                error: void 0
            };
            c.options.onRequest && await c.options.onRequest(c), typeof c.request == "string" && (c.options.baseURL && (c.request = Uh(c.request, c.options.baseURL)), (c.options.query || c.options.params) && (c.request = zh(c.request, { ...c.options.params,
                ...c.options.query
            })), c.options.body && Ma(c.options.method) && qh(c.options.body) && (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json"))), c.response = await t(c.request, c.options).catch(async d => (c.error = d, c.options.onRequestError && await c.options.onRequestError(c), r(c)));
            const u = (c.options.parseResponse ? "json" : c.options.responseType) || Jh(c.response.headers.get("content-type") || "");
            if (u === "json") {
                const d = await c.response.text(),
                    f = c.options.parseResponse || gh;
                c.response._data = f(d)
            } else u === "stream" ? c.response._data = c.response.body : c.response._data = await c.response[u]();
            return c.options.onResponse && await c.options.onResponse(c), c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await c.options.onResponseError(c), r(c)) : c.response
        },
        s = function(i, l) {
            return o(i, l).then(c => c._data)
        };
    return s.raw = o, s.native = t, s.create = (a = {}) => Fc({ ...e,
        defaults: { ...e.defaults,
            ...a
        }
    }), s
}
const Dc = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    Qh = Dc.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    Zh = Dc.Headers,
    Xh = Fc({
        fetch: Qh,
        Headers: Zh
    }),
    em = Xh,
    tm = () => {
        var e;
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    Nr = tm().app,
    nm = () => Nr.baseURL,
    rm = () => Nr.buildAssetsDir,
    om = (...e) => Os(Hc(), rm(), ...e),
    Hc = (...e) => {
        const t = Nr.cdnURL || Nr.baseURL;
        return e.length ? Os(t, ...e) : t
    };
globalThis.__buildAssetsURL = om, globalThis.__publicAssetsURL = Hc;

function jo(e, t = {}, n) {
    for (const r in e) {
        const o = e[r],
            s = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? jo(o, t, s) : typeof o == "function" && (t[s] = o)
    }
    return t
}

function sm(e, t) {
    return e.reduce((n, r) => n.then(() => r.apply(void 0, t)), Promise.resolve())
}

function am(e, t) {
    return Promise.all(e.map(n => n.apply(void 0, t)))
}

function ho(e, t) {
    for (const n of e) n(t)
}
class im {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const o = t;
        let s;
        for (; this._deprecatedHooks[t];) s = this._deprecatedHooks[t], t = s.to;
        if (s && !r.allowDeprecated) {
            let a = s.message;
            a || (a = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(a) || (console.warn(a), this._deprecatedMessages.add(a))
        }
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...s) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...s));
        return r = this.hook(t, o), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        this._hooks[t] = void 0;
        for (const o of r) this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = jo(t),
            r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length)) o()
        }
    }
    removeHooks(t) {
        const n = jo(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    callHook(t, ...n) {
        return this.callHookWith(sm, t, ...n)
    }
    callHookParallel(t, ...n) {
        return this.callHookWith(am, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && ho(this._before, o);
        const s = t(this._hooks[n] || [], r);
        return s instanceof Promise ? s.finally(() => {
            this._after && o && ho(this._after, o)
        }) : (this._after && o && ho(this._after, o), s)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            const n = this._before.indexOf(t);
            n !== -1 && this._before.splice(n, 1)
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            const n = this._after.indexOf(t);
            n !== -1 && this._after.splice(n, 1)
        }
    }
}

function jc() {
    return new im
}

function lm() {
    let e, t = !1;
    const n = r => {
        if (e && e !== r) throw new Error("Context conflict")
    };
    return {
        use: () => {
            if (e === void 0) throw new Error("Context is not available");
            return e
        },
        tryUse: () => e,
        set: (r, o) => {
            o || n(r), e = r, t = !0
        },
        unset: () => {
            e = void 0, t = !1
        },
        call: (r, o) => {
            n(r), e = r;
            try {
                return o()
            } finally {
                t || (e = void 0)
            }
        },
        async callAsync(r, o) {
            e = r;
            const s = () => {
                    e = r
                },
                a = () => e === r ? s : void 0;
            Uo.add(a);
            try {
                const i = o();
                return t || (e = void 0), await i
            } finally {
                Uo.delete(a)
            }
        }
    }
}

function cm() {
    const e = {};
    return {
        get(t) {
            return e[t] || (e[t] = lm()), e[t], e[t]
        }
    }
}
const Fr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    Na = "__unctx__",
    um = Fr[Na] || (Fr[Na] = cm()),
    fm = e => um.get(e),
    Fa = "__unctx_async_handlers__",
    Uo = Fr[Fa] || (Fr[Fa] = new Set);

function Uc(e) {
    const t = [];
    for (const o of Uo) {
        const s = o();
        s && t.push(s)
    }
    const n = () => {
        for (const o of t) o()
    };
    let r = e();
    return "catch" in r && (r = r.catch(o => {
        throw n(), o
    })), [r, n]
}
const zc = fm("nuxt-app"),
    dm = "__nuxt_plugin";

function hm(e) {
    let t = 0;
    const n = {
        provide: void 0,
        globalName: "nuxt",
        payload: bt({
            data: {},
            state: {},
            _errors: {},
            ...window.__NUXT__
        }),
        static: {
            data: {}
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let s = !1;
            return () => {
                if (!s && (s = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        ...e
    };
    n.hooks = jc(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (s, a) => {
        const i = "$" + s;
        vr(n, i, a), vr(n.vueApp.config.globalProperties, i, a)
    }, vr(n.vueApp, "$nuxt", n), vr(n.vueApp.config.globalProperties, "$nuxt", n);
    const r = bt(n.payload.config),
        o = new Proxy(r, {
            get(s, a) {
                var i;
                return a === "public" ? s.public : (i = s[a]) != null ? i : s.public[a]
            },
            set(s, a, i) {
                return a === "public" || a === "app" ? !1 : (s[a] = i, s.public[a] = i, !0)
            }
        });
    return n.provide("config", o), n
}
async function mm(e, t) {
    if (typeof t != "function") return;
    const {
        provide: n
    } = await Ht(e, t, [e]) || {};
    if (n && typeof n == "object")
        for (const r in n) e.provide(r, n[r])
}
async function pm(e, t) {
    for (const n of t) await mm(e, n)
}

function gm(e) {
    return e.map(n => typeof n != "function" ? null : n.length > 1 ? r => n(r, r.provide) : n).filter(Boolean)
}

function cr(e) {
    return e[dm] = !0, e
}

function Ht(e, t, n) {
    const r = () => n ? t(...n) : t();
    return zc.set(e), r()
}

function Qe() {
    const e = zc.tryUse();
    if (!e) {
        const t = it();
        if (!t) throw new Error("nuxt instance unavailable");
        return t.appContext.app.$nuxt
    }
    return e
}

function _m() {
    return Qe().$config
}

function vr(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
class zo extends Error {
    constructor() {
        super(...arguments), this.statusCode = 500, this.fatal = !1, this.unhandled = !1, this.statusMessage = void 0
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: this.statusCode
        };
        return this.statusMessage && (t.statusMessage = this.statusMessage), this.data !== void 0 && (t.data = this.data), t
    }
}
zo.__h3_error__ = !0;

function Wo(e) {
    var n;
    if (typeof e == "string") return new zo(e);
    if (ym(e)) return e;
    const t = new zo((n = e.message) != null ? n : e.statusMessage, e.cause ? {
        cause: e.cause
    } : void 0);
    if ("stack" in e) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    return e.data && (t.data = e.data), e.statusCode ? t.statusCode = e.statusCode : e.status && (t.statusCode = e.status), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function ym(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const bm = {
        html: "text/html",
        json: "application/json"
    },
    vm = typeof setImmediate < "u" ? setImmediate : e => e();

function Em(e, t, n) {
    return n && km(e, n), new Promise(r => {
        vm(() => {
            e.node.res.end(t), r()
        })
    })
}

function km(e, t) {
    t && !e.node.res.getHeader("content-type") && e.node.res.setHeader("content-type", t)
}

function Wy(e, t, n = 302) {
    e.node.res.statusCode = n, e.node.res.setHeader("location", t);
    const o = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t.replace(/"/g,"%22")}"></head></html>`;
    return Em(e, o, bm.html)
}
const Jr = () => Vl(Qe().payload, "error"),
    Wn = e => {
        const t = Ss(e);
        try {
            Qe().callHook("app:error", t);
            const r = Jr();
            r.value = r.value || t
        } catch {
            throw t
        }
        return t
    },
    wm = async (e = {}) => {
        const t = Qe(),
            n = Jr();
        t.callHook("app:error:cleared", e), e.redirect && await t.$router.replace(e.redirect), n.value = null
    },
    Tm = e => !!(e && typeof e == "object" && "__nuxt_error" in e),
    Ss = e => {
        const t = Wo(e);
        return t.__nuxt_error = !0, t
    };

function Cm(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = "$s" + n,
        s = Qe(),
        a = Vl(s.payload.state, o);
    if (a.value === void 0 && r) {
        const i = r();
        if (Oe(i)) return s.payload.state[o] = i, i;
        a.value = i
    }
    return a
}
const Ls = () => {
        var e;
        return (e = Qe()) == null ? void 0 : e.$router
    },
    Wc = () => it() ? $e("_route", Qe()._route) : Qe()._route,
    xc = e => e,
    Rm = () => {
        try {
            if (Qe()._processingMiddleware) return !0
        } catch {
            return !0
        }
        return !1
    },
    Am = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : e.path || "/",
            r = Gr(n, !0);
        if (r && !(t != null && t.external)) throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
        if (r && Is(n).protocol === "script:") throw new Error("Cannot navigate to an URL with script protocol.");
        if (!r && Rm()) return e;
        const o = Ls();
        return r ? (t != null && t.replace ? location.replace(n) : location.href = n, Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
    },
    Pm = e => {
        if (e) throw Ss(e);
        return !1
    };
async function Bc(e, t = Ls()) {
    if (t._routePreloaded || (t._routePreloaded = new Set), t._routePreloaded.has(e)) return;
    t._routePreloaded.add(e);
    const n = t._preloadPromises = t._preloadPromises || [];
    if (n.length > 4) return Promise.all(n).then(() => Bc(e, t));
    const r = t.resolve(e).matched.map(o => {
        var s;
        return (s = o.components) == null ? void 0 : s.default
    }).filter(o => typeof o == "function");
    for (const o of r) {
        const s = Promise.resolve(o()).catch(() => {}).finally(() => n.splice(n.indexOf(s)));
        n.push(s)
    }
    await Promise.all(n)
}
const Om = "modulepreload",
    Im = function(e, t) {
        return e.startsWith(".") ? new URL(e, t).href : e
    },
    Da = {},
    me = function(t, n, r) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(s => {
            if (s = Im(s, r), s in Da) return;
            Da[s] = !0;
            const a = s.endsWith(".css"),
                i = a ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let u = o.length - 1; u >= 0; u--) {
                    const d = o[u];
                    if (d.href === s && (!a || d.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${s}"]${i}`)) return;
            const c = document.createElement("link");
            if (c.rel = a ? "stylesheet" : Om, a || (c.as = "script", c.crossOrigin = ""), c.href = s, document.head.appendChild(c), a) return new Promise((u, d) => {
                c.addEventListener("load", u), c.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${s}`)))
            })
        })).then(() => t())
    },
    Sm = (...e) => e.find(t => t !== void 0),
    Lm = "noopener noreferrer",
    Mm = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            n = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(n)
        }, 1)
    }),
    Nm = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    });

function Fm(e) {
    const t = e.componentName || "NuxtLink";
    return Pt({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(n, {
            slots: r
        }) {
            const o = Ls(),
                s = pe(() => n.to || n.href || ""),
                a = pe(() => n.external || n.target && n.target !== "_self" ? !0 : typeof s.value == "object" ? !1 : s.value === "" || Gr(s.value, !0)),
                i = De(!1),
                l = De(null);
            if (n.prefetch !== !1 && n.noPrefetch !== !0 && typeof s.value == "string" && n.target !== "_blank" && !Hm()) {
                const u = Qe(),
                    d = Dm();
                let f, h = null;
                ir(() => {
                    f = Mm(() => {
                        var g;
                        (g = l == null ? void 0 : l.value) != null && g.tagName && (h = d.observe(l.value, async () => {
                            h == null || h(), h = null, await Promise.all([u.hooks.callHook("link:prefetch", s.value).catch(() => {}), !a.value && Bc(s.value, o).catch(() => {})]), i.value = !0
                        }))
                    })
                }), lr(() => {
                    f && Nm(f), h == null || h(), h = null
                })
            }
            return () => {
                var h, g, R;
                if (!a.value) return Ke(td("RouterLink"), {
                    ref: O => {
                        l.value = O == null ? void 0 : O.$el
                    },
                    to: s.value,
                    ...i.value && !n.custom ? {
                        class: n.prefetchedClass || e.prefetchedClass
                    } : {},
                    activeClass: n.activeClass || e.activeClass,
                    exactActiveClass: n.exactActiveClass || e.exactActiveClass,
                    replace: n.replace,
                    ariaCurrentValue: n.ariaCurrentValue,
                    custom: n.custom
                }, r.default);
                const c = typeof s.value == "object" ? (g = (h = o.resolve(s.value)) == null ? void 0 : h.href) != null ? g : null : s.value || null,
                    u = n.target || null,
                    d = n.noRel ? null : Sm(n.rel, e.externalRelAttribute, c ? Lm : "") || null,
                    f = () => Am(c, {
                        replace: n.replace
                    });
                return n.custom ? r.default ? r.default({
                    href: c,
                    navigate: f,
                    route: o.resolve(c),
                    rel: d,
                    target: u,
                    isExternal: a.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : Ke("a", {
                    ref: l,
                    href: c,
                    rel: d,
                    target: u
                }, (R = r.default) == null ? void 0 : R.call(r))
            }
        }
    })
}
Fm({
    componentName: "NuxtLink"
});

function Dm() {
    const e = Qe();
    if (e._observer) return e._observer;
    let t = null;
    const n = new Map,
        r = (s, a) => (t || (t = new IntersectionObserver(i => {
            for (const l of i) {
                const c = n.get(l.target);
                (l.isIntersecting || l.intersectionRatio > 0) && c && c()
            }
        })), n.set(s, a), t.observe(s), () => {
            n.delete(s), t.unobserve(s), n.size === 0 && (t.disconnect(), t = null)
        });
    return e._observer = {
        observe: r
    }
}

function Hm() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}

function mo(e) {
    return e !== null && typeof e == "object"
}

function xo(e, t, n = ".", r) {
    if (!mo(t)) return xo(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
        if (s === "__proto__" || s === "constructor") continue;
        const a = e[s];
        a != null && (r && r(o, s, a, n) || (Array.isArray(a) && Array.isArray(o[s]) ? o[s] = [...a, ...o[s]] : mo(a) && mo(o[s]) ? o[s] = xo(a, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = a))
    }
    return o
}

function Vc(e) {
    return (...t) => t.reduce((n, r) => xo(n, r, "", e), {})
}
const jm = Vc(),
    Um = Vc((e, t, n, r) => {
        if (typeof e[t] < "u" && typeof n == "function") return e[t] = n(e[t]), !0
    }),
    zm = {};
Um(zm);
const po = {},
    Wm = cr(e => {
        for (const t in po) e.vueApp.component(t, po[t]), e.vueApp.component("Lazy" + t, po[t])
    }),
    xm = ["script", "style", "noscript"],
    Bm = ["base", "meta", "link", "style", "script", "noscript"],
    Vm = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];

function $m(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (Vm.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const o = ["id"];
    r === "meta" && o.push("name", "property", "http-equiv");
    for (const s of o)
        if (typeof n[s] < "u") {
            const a = String(n[s]);
            return t && !t(a) ? !1 : `${r}:${s}:${a}`
        }
    return !1
}
const Er = (e, t) => {
    const {
        tag: n,
        $el: r
    } = e;
    !r || (Object.entries(n.props).forEach(([o, s]) => {
        s = String(s);
        const a = `attr:${o}`;
        if (o === "class") {
            if (!s) return;
            for (const i of s.split(" ")) {
                const l = `${a}:${i}`;
                t && t(e, l, () => r.classList.remove(i)), r.classList.contains(i) || r.classList.add(i)
            }
            return
        }
        t && !o.startsWith("data-h-") && t(e, a, () => r.removeAttribute(o)), r.getAttribute(o) !== s && r.setAttribute(o, s)
    }), xm.includes(n.tag) && r.innerHTML !== (n.children || "") && (r.innerHTML = n.children || ""))
};

function Ms(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
async function $c(e, t = {}) {
    var u, d;
    const n = {
        shouldRender: !0
    };
    if (await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender) return;
    const r = t.document || window.document,
        o = e._popSideEffectQueue();
    e.headEntries().map(f => f._sde).forEach(f => {
        Object.entries(f).forEach(([h, g]) => {
            o[h] = g
        })
    });
    const s = async f => {
            const h = e.headEntries().find(R => R._i === f._e),
                g = {
                    renderId: f._d || Ms(JSON.stringify({ ...f,
                        _e: void 0,
                        _p: void 0
                    })),
                    $el: null,
                    shouldRender: !0,
                    tag: f,
                    entry: h,
                    staleSideEffects: o
                };
            return await e.hooks.callHook("dom:beforeRenderTag", g), g
        },
        a = [],
        i = {
            body: [],
            head: []
        },
        l = (f, h, g) => {
            h = `${f.renderId}:${h}`, f.entry && (f.entry._sde[h] = g), delete o[h]
        },
        c = f => {
            e._elMap[f.renderId] = f.$el, a.push(f), l(f, "el", () => {
                var h;
                (h = f.$el) == null || h.remove(), delete e._elMap[f.renderId]
            })
        };
    for (const f of await e.resolveTags()) {
        const h = await s(f);
        if (!h.shouldRender) continue;
        const {
            tag: g
        } = h;
        if (g.tag === "title") {
            r.title = g.children || "", a.push(h);
            continue
        }
        if (g.tag === "htmlAttrs" || g.tag === "bodyAttrs") {
            h.$el = r[g.tag === "htmlAttrs" ? "documentElement" : "body"], Er(h, l), a.push(h);
            continue
        }
        if (h.$el = e._elMap[h.renderId], !h.$el && g._hash && (h.$el = r.querySelector(`${(u=g.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)), h.$el) {
            h.tag._d && Er(h), c(h);
            continue
        }
        h.$el = r.createElement(g.tag), Er(h), i[(d = g.tagPosition) != null && d.startsWith("body") ? "body" : "head"].push(h)
    }
    Object.entries(i).forEach(([f, h]) => {
        if (!!h.length) {
            for (const g of [...r[f].children].reverse()) {
                const R = g.tagName.toLowerCase();
                if (!Bm.includes(R)) continue;
                const O = $m({
                        tag: R,
                        props: g.getAttributeNames().reduce((m, v) => ({ ...m,
                            [v]: g.getAttribute(v)
                        }), {})
                    }),
                    b = h.findIndex(m => m && (m.tag._d === O || g.isEqualNode(m.$el)));
                if (b !== -1) {
                    const m = h[b];
                    m.$el = g, Er(m), c(m), delete h[b]
                }
            }
            h.forEach(g => {
                if (!!g.$el) {
                    switch (g.tag.tagPosition) {
                        case "bodyClose":
                            r.body.appendChild(g.$el);
                            break;
                        case "bodyOpen":
                            r.body.insertBefore(g.$el, r.body.firstChild);
                            break;
                        case "head":
                        default:
                            r.head.appendChild(g.$el);
                            break
                    }
                    c(g)
                }
            })
        }
    });
    for (const f of a) await e.hooks.callHook("dom:renderTag", f);
    Object.values(o).forEach(f => f())
}
let Cr = null;
async function qm(e, t = {}) {
    function n() {
        return Cr = null, $c(e, t)
    }
    const r = t.delayFn || (o => setTimeout(o, 10));
    return Cr = Cr || new Promise(o => r(() => o(n())))
}
const Km = {
        __proto__: null,
        debouncedRenderDOMHead: qm,
        get domUpdatePromise() {
            return Cr
        },
        hashCode: Ms,
        renderDOMHead: $c
    },
    Gm = ["title", "titleTemplate", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    Jm = ["tagPosition", "tagPriority", "tagDuplicateStrategy"];
async function Ym(e, t) {
    const n = {
        tag: e,
        props: {}
    };
    return e === "title" || e === "titleTemplate" ? (n.children = t instanceof Promise ? await t : t, n) : (n.props = await Qm({ ...t
    }), ["children", "innerHtml", "innerHTML"].forEach(r => {
        typeof n.props[r] < "u" && (n.children = n.props[r], delete n.props[r])
    }), Object.keys(n.props).filter(r => Jm.includes(r)).forEach(r => {
        n[r] = n.props[r], delete n.props[r]
    }), typeof n.props.class == "object" && !Array.isArray(n.props.class) && (n.props.class = Object.keys(n.props.class).filter(r => n.props.class[r])), Array.isArray(n.props.class) && (n.props.class = n.props.class.join(" ")), n.props.content && Array.isArray(n.props.content) ? n.props.content.map((r, o) => {
        const s = { ...n,
            props: { ...n.props
            }
        };
        return s.props.content = r, s.key = `${n.props.name||n.props.property}:${o}`, s
    }) : n)
}
async function Qm(e) {
    for (const t of Object.keys(e)) e[t] instanceof Promise && (e[t] = await e[t]), String(e[t]) === "true" ? e[t] = "" : String(e[t]) === "false" && delete e[t];
    return e
}
const Ha = e => {
        if (typeof e.tagPriority == "number") return e.tagPriority;
        switch (e.tagPriority) {
            case "critical":
                return 2;
            case "high":
                return 9;
            case "low":
                return 12
        }
        switch (e.tag) {
            case "base":
                return -1;
            case "title":
                return 1;
            case "meta":
                return e.props.charset ? -2 : e.props["http-equiv"] === "content-security-policy" ? 0 : 10;
            default:
                return 10
        }
    },
    Zm = (e, t) => Ha(e) - Ha(t),
    Xm = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];

function ep(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (Xm.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const o = ["id"];
    r === "meta" && o.push("name", "property", "http-equiv");
    for (const s of o)
        if (typeof n[s] < "u") {
            const a = String(n[s]);
            return t && !t(a) ? !1 : `${r}:${s}:${a}`
        }
    return !1
}
const ja = (e, t) => e == null ? t || null : typeof e == "function" ? e(t) : e.replace("%s", t != null ? t : "");

function tp(e) {
    let t = e.findIndex(r => r.tag === "titleTemplate");
    const n = e.findIndex(r => r.tag === "title");
    if (n !== -1 && t !== -1) {
        const r = ja(e[t].children, e[n].children);
        r !== null ? e[n].children = r || e[n].children : delete e[n]
    } else if (t !== -1) {
        const r = ja(e[t].children);
        r !== null && (e[t].children = r, e[t].tag = "title", t = -1)
    }
    return t !== -1 && delete e[t], e.filter(Boolean)
}
const np = e => {
        e = e || {};
        const t = e.dedupeKeys || ["hid", "vmid", "key"];
        return {
            hooks: {
                "tag:normalise": function({
                    tag: n
                }) {
                    t.forEach(o => {
                        n.props[o] && (n.key = n.props[o], delete n.props[o])
                    });
                    const r = n.key ? `${n.tag}:${n.key}` : ep(n);
                    r && (n._d = r)
                },
                "tags:resolve": function(n) {
                    const r = {};
                    n.tags.forEach(o => {
                        let s = o._d || o._p;
                        const a = r[s];
                        if (a) {
                            let i = o == null ? void 0 : o.tagDuplicateStrategy;
                            if (!i && (o.tag === "htmlAttrs" || o.tag === "bodyAttrs") && (i = "merge"), i === "merge") {
                                const c = a.props;
                                ["class", "style"].forEach(u => {
                                    o.props[u] && c[u] && (u === "style" && !c[u].endsWith(";") && (c[u] += ";"), o.props[u] = `${c[u]} ${o.props[u]}`)
                                }), r[s].props = { ...c,
                                    ...o.props
                                };
                                return
                            } else o._e === a._e && (s = o._d = `${s}:${o._p}`);
                            const l = Object.keys(o.props).length;
                            if ((l === 0 || l === 1 && typeof o.props["data-h-key"] < "u") && !o.children) {
                                delete r[s];
                                return
                            }
                        }
                        r[s] = o
                    }), n.tags = Object.values(r)
                }
            }
        }
    },
    rp = () => ({
        hooks: {
            "tags:resolve": e => {
                const t = n => {
                    var r;
                    return (r = e.tags.find(o => o._d === n)) == null ? void 0 : r._p
                };
                for (const n of e.tags) {
                    if (!n.tagPriority || typeof n.tagPriority == "number") continue;
                    const r = [{
                        prefix: "before:",
                        offset: -1
                    }, {
                        prefix: "after:",
                        offset: 1
                    }];
                    for (const {
                            prefix: o,
                            offset: s
                        } of r)
                        if (n.tagPriority.startsWith(o)) {
                            const a = n.tagPriority.replace(o, ""),
                                i = t(a);
                            typeof i < "u" && (n._p = i + s)
                        }
                }
                e.tags.sort((n, r) => n._p - r._p).sort(Zm)
            }
        }
    }),
    op = () => ({
        hooks: {
            "tags:resolve": e => {
                e.tags = tp(e.tags)
            }
        }
    }),
    sp = () => ({
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                typeof e.props.body < "u" && (e.tagPosition = "bodyClose", delete e.props.body)
            }
        }
    }),
    ap = typeof window < "u",
    ip = () => ({
        hooks: {
            "tag:normalise": e => {
                var o, s;
                const {
                    tag: t,
                    entry: n
                } = e, r = typeof t.props._dynamic < "u";
                !qc.includes(t.tag) || !t.key || (t._hash = Ms(JSON.stringify({
                    tag: t.tag,
                    key: t.key
                })), !(ap || ((s = (o = Gc()) == null ? void 0 : o.resolvedOptions) == null ? void 0 : s.document)) && (n._m === "server" || r) && (t.props[`data-h-${t._hash}`] = ""))
            },
            "tags:resolve": e => {
                e.tags = e.tags.map(t => (delete t.props._dynamic, t))
            }
        }
    }),
    lp = e => ({
        hooks: {
            "entries:updated": function(t) {
                if (typeof(e == null ? void 0 : e.document) > "u" && typeof window > "u") return;
                let n = e == null ? void 0 : e.delayFn;
                !n && typeof requestAnimationFrame < "u" && (n = requestAnimationFrame), Promise.resolve().then(function() {
                    return Km
                }).then(({
                    debouncedRenderDOMHead: r
                }) => {
                    r(t, {
                        document: (e == null ? void 0 : e.document) || window.document,
                        delayFn: n
                    })
                })
            }
        }
    }),
    cp = () => {
        const e = (t, n) => {
            const r = {},
                o = {};
            Object.entries(n.props).forEach(([a, i]) => {
                a.startsWith("on") && typeof i == "function" ? o[a] = i : r[a] = i
            });
            let s;
            return t === "dom" && n.tag === "script" && typeof r.src == "string" && typeof o.onload < "u" && (s = r.src, delete r.src), {
                props: r,
                eventHandlers: o,
                delayedSrc: s
            }
        };
        return {
            hooks: {
                "ssr:render": function(t) {
                    t.tags = t.tags.map(n => (n.props = e("ssr", n).props, n))
                },
                "dom:beforeRenderTag": function(t) {
                    const {
                        props: n,
                        eventHandlers: r,
                        delayedSrc: o
                    } = e("dom", t.tag);
                    !Object.keys(r).length || (t.tag.props = n, t.tag._eventHandlers = r, t.tag._delayedSrc = o)
                },
                "dom:renderTag": function(t) {
                    const n = t.$el;
                    if (!t.tag._eventHandlers || !n) return;
                    const r = t.tag.tag === "bodyAttrs" && typeof window < "u" ? window : n;
                    Object.entries(t.tag._eventHandlers).forEach(([o, s]) => {
                        const a = `${t.tag._d||t.tag._p}:${o}`,
                            i = o.slice(2).toLowerCase(),
                            l = `data-h-${i}`;
                        if (delete t.staleSideEffects[a], n.hasAttribute(l)) return;
                        const c = s;
                        n.setAttribute(l, ""), r.addEventListener(i, c), t.entry && (t.entry._sde[a] = () => {
                            r.removeEventListener(i, c), n.removeAttribute(l)
                        })
                    }), t.tag._delayedSrc && n.setAttribute("src", t.tag._delayedSrc)
                }
            }
        }
    };

function up(e) {
    return Array.isArray(e) ? e : [e]
}
const qc = ["base", "meta", "link", "style", "script", "noscript"];
let Kc;
const fp = e => Kc = e,
    Gc = () => Kc,
    dp = 10;
async function hp(e) {
    const t = [];
    return Object.entries(e.resolvedInput || e.input).filter(([n, r]) => typeof r < "u" && Gm.includes(n)).forEach(([n, r]) => {
        const o = up(r);
        t.push(...o.map(s => Ym(n, s)).flat())
    }), (await Promise.all(t)).flat().map((n, r) => (n._e = e._i, n._p = (e._i << dp) + r, n))
}
const mp = () => [np(), rp(), op(), ip(), cp(), sp()],
    pp = (e = {}) => [lp({
        document: e == null ? void 0 : e.document,
        delayFn: e == null ? void 0 : e.domDelayFn
    })];

function gp(e = {}) {
    const t = _p({ ...e,
        plugins: [...pp(e), ...(e == null ? void 0 : e.plugins) || []]
    });
    return fp(t), t
}

function _p(e = {}) {
    let t = [],
        n = {},
        r = 0;
    const o = jc();
    e != null && e.hooks && o.addHooks(e.hooks), e.plugins = [...mp(), ...(e == null ? void 0 : e.plugins) || []], e.plugins.forEach(i => i.hooks && o.addHooks(i.hooks));
    const s = () => o.callHook("entries:updated", a),
        a = {
            resolvedOptions: e,
            headEntries() {
                return t
            },
            get hooks() {
                return o
            },
            push(i, l) {
                const c = {
                    _i: r++,
                    input: i,
                    _sde: {}
                };
                return l != null && l.mode && (c._m = l == null ? void 0 : l.mode), t.push(c), s(), {
                    dispose() {
                        t = t.filter(u => u._i !== c._i ? !0 : (n = { ...n,
                            ...u._sde || {}
                        }, u._sde = {}, s(), !1))
                    },
                    patch(u) {
                        t = t.map(d => (d._i === c._i && (c.input = d.input = u, s()), d))
                    }
                }
            },
            async resolveTags() {
                const i = {
                    tags: [],
                    entries: [...t]
                };
                await o.callHook("entries:resolve", i);
                for (const l of i.entries)
                    for (const c of await hp(l)) {
                        const u = {
                            tag: c,
                            entry: l
                        };
                        await o.callHook("tag:normalise", u), i.tags.push(u.tag)
                    }
                return await o.callHook("tags:resolve", i), i.tags
            },
            _elMap: {},
            _popSideEffectQueue() {
                const i = { ...n
                };
                return n = {}, i
            }
        };
    return a.hooks.callHook("init", a), a
}

function yp(e) {
    return typeof e == "function" ? e() : Ye(e)
}

function Dr(e, t = "") {
    if (e instanceof Promise) return e;
    const n = yp(e);
    if (!e || !n) return n;
    if (Array.isArray(n)) return n.map(r => Dr(r, t));
    if (typeof n == "object") {
        let r = !1;
        const o = Object.fromEntries(Object.entries(n).map(([s, a]) => s === "titleTemplate" || s.startsWith("on") ? [s, Ye(a)] : ((typeof a == "function" || Oe(a)) && (r = !0), [s, Dr(a, s)])));
        return r && qc.includes(String(t)) && (o._dynamic = !0), o
    }
    return n
}
const bp = Rc.startsWith("3"),
    vp = typeof window < "u",
    Jc = "usehead";

function Ns() {
    return it() && $e(Jc) || Gc()
}

function Ep(e = {}) {
    const t = gp({ ...e,
            domDelayFn: r => setTimeout(() => Mn(() => r()), 10),
            plugins: [kp(), ...(e == null ? void 0 : e.plugins) || []]
        }),
        n = {
            install(r) {
                bp && (r.config.globalProperties.$unhead = t, r.provide(Jc, t))
            }
        };
    return t.install = n.install, t
}
const kp = () => ({
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries) t.resolvedInput = Dr(t.input)
        }
    }
});

function wp(e, t = {}) {
    const n = Ns();
    if (!it()) return n.push(e, t);
    const o = De({});
    zf(() => {
        o.value = Dr(e)
    });
    const s = n.push(o.value, t);
    return Ct(o, a => s.patch(a)), lr(() => {
        s.dispose()
    }), s
}

function Tp(e, t = {}) {
    return Ns().push(e, t)
}

function Yc(e, t = {}) {
    var o;
    const n = Ns(),
        r = vp || !!((o = n.resolvedOptions) != null && o.document);
    if (!(t.mode === "server" && r || t.mode === "client" && !r)) return r ? wp(e, t) : Tp(e, t)
}
const Cp = ["script", "style", "noscript"],
    Rp = ["base", "meta", "link", "style", "script", "noscript"],
    Ap = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"];

function Pp(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (Ap.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const o = ["id"];
    r === "meta" && o.push("name", "property", "http-equiv");
    for (const s of o)
        if (typeof n[s] < "u") {
            const a = String(n[s]);
            return t && !t(a) ? !1 : `${r}:${s}:${a}`
        }
    return !1
}
const kr = (e, t) => {
    const {
        tag: n,
        $el: r
    } = e;
    !r || (Object.entries(n.props).forEach(([o, s]) => {
        s = String(s);
        const a = `attr:${o}`;
        if (o === "class") {
            if (!s) return;
            for (const i of s.split(" ")) {
                const l = `${a}:${i}`;
                t && t(e, l, () => r.classList.remove(i)), r.classList.contains(i) || r.classList.add(i)
            }
            return
        }
        t && !o.startsWith("data-h-") && t(e, a, () => r.removeAttribute(o)), r.getAttribute(o) !== s && r.setAttribute(o, s)
    }), Cp.includes(n.tag) && r.innerHTML !== (n.children || "") && (r.innerHTML = n.children || ""))
};

function Op(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
async function Qc(e, t = {}) {
    var u, d;
    const n = {
        shouldRender: !0
    };
    if (await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender) return;
    const r = t.document || window.document,
        o = e._popSideEffectQueue();
    e.headEntries().map(f => f._sde).forEach(f => {
        Object.entries(f).forEach(([h, g]) => {
            o[h] = g
        })
    });
    const s = async f => {
            const h = e.headEntries().find(R => R._i === f._e),
                g = {
                    renderId: f._d || Op(JSON.stringify({ ...f,
                        _e: void 0,
                        _p: void 0
                    })),
                    $el: null,
                    shouldRender: !0,
                    tag: f,
                    entry: h,
                    staleSideEffects: o
                };
            return await e.hooks.callHook("dom:beforeRenderTag", g), g
        },
        a = [],
        i = {
            body: [],
            head: []
        },
        l = (f, h, g) => {
            h = `${f.renderId}:${h}`, f.entry && (f.entry._sde[h] = g), delete o[h]
        },
        c = f => {
            e._elMap[f.renderId] = f.$el, a.push(f), l(f, "el", () => {
                var h;
                (h = f.$el) == null || h.remove(), delete e._elMap[f.renderId]
            })
        };
    for (const f of await e.resolveTags()) {
        const h = await s(f);
        if (!h.shouldRender) continue;
        const {
            tag: g
        } = h;
        if (g.tag === "title") {
            r.title = g.children || "", a.push(h);
            continue
        }
        if (g.tag === "htmlAttrs" || g.tag === "bodyAttrs") {
            h.$el = r[g.tag === "htmlAttrs" ? "documentElement" : "body"], kr(h, l), a.push(h);
            continue
        }
        if (h.$el = e._elMap[h.renderId], !h.$el && g._hash && (h.$el = r.querySelector(`${(u=g.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)), h.$el) {
            h.tag._d && kr(h), c(h);
            continue
        }
        h.$el = r.createElement(g.tag), kr(h), i[(d = g.tagPosition) != null && d.startsWith("body") ? "body" : "head"].push(h)
    }
    Object.entries(i).forEach(([f, h]) => {
        if (!!h.length) {
            for (const g of [...r[f].children].reverse()) {
                const R = g.tagName.toLowerCase();
                if (!Rp.includes(R)) continue;
                const O = Pp({
                        tag: R,
                        props: g.getAttributeNames().reduce((m, v) => ({ ...m,
                            [v]: g.getAttribute(v)
                        }), {})
                    }),
                    b = h.findIndex(m => m && (m.tag._d === O || g.isEqualNode(m.$el)));
                if (b !== -1) {
                    const m = h[b];
                    m.$el = g, kr(m), c(m), delete h[b]
                }
            }
            h.forEach(g => {
                if (!!g.$el) {
                    switch (g.tag.tagPosition) {
                        case "bodyClose":
                            r.body.appendChild(g.$el);
                            break;
                        case "bodyOpen":
                            r.body.insertBefore(g.$el, r.body.firstChild);
                            break;
                        case "head":
                        default:
                            r.head.appendChild(g.$el);
                            break
                    }
                    c(g)
                }
            })
        }
    });
    for (const f of a) await e.hooks.callHook("dom:renderTag", f);
    Object.values(o).forEach(f => f())
}
let go = null;
async function Ip(e, t = {}) {
    function n() {
        return go = null, Qc(e, t)
    }
    const r = t.delayFn || (o => setTimeout(o, 10));
    return go = go || new Promise(o => r(() => o(n())))
}

function Sp(e) {
    const t = Ep(),
        n = {
            unhead: t,
            install(r) {
                r.config.globalProperties && (r.config.globalProperties.$head = t), r.provide("usehead", t)
            },
            resolveTags() {
                return t.resolveTags()
            },
            headEntries() {
                return t.headEntries()
            },
            headTags() {
                return t.resolveTags()
            },
            push(r, o) {
                return t.push(r, o)
            },
            addEntry(r, o) {
                return t.push(r, o)
            },
            addHeadObjs(r, o) {
                return t.push(r, o)
            },
            addReactiveEntry(r, o) {
                const s = Yc(r, o);
                return typeof s < "u" ? s.dispose : () => {}
            },
            removeHeadObjs() {},
            updateDOM(r, o) {
                o ? Qc(t, {
                    document: r
                }) : Ip(t, {
                    delayFn: s => setTimeout(() => s(), 50),
                    document: r
                })
            },
            internalHooks: t.hooks,
            hooks: {
                "before:dom": [],
                "resolved:tags": [],
                "resolved:entries": []
            }
        };
    return t.addHeadObjs = n.addHeadObjs, t.updateDOM = n.updateDOM, t.hooks.hook("dom:beforeRender", r => {
        for (const o of n.hooks["before:dom"]) o() === !1 && (r.shouldRender = !1)
    }), e && n.addHeadObjs(e), n
}
const Lp = {
        meta: [{
            charset: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }],
        link: [{
            rel: "preconnect",
            href: "https://fonts.gstatic.com/",
            crossorigin: "anonymous"
        }, {
            rel: "preconnect",
            href: "https://use.fontawesome.com",
            crossorigin: "anonymous"
        }],
        style: [],
        script: [],
        noscript: [],
        title: ""
    },
    Mp = !1,
    Bo = !1,
    Np = !1,
    Fp = "__nuxt",
    Dp = cr(e => {
        const t = Sp();
        t.push(Lp), e.vueApp.use(t); {
            let n = !0;
            const r = () => {
                n = !1, t.internalHooks.callHook("entries:updated", t.unhead)
            };
            t.internalHooks.hook("dom:beforeRender", o => {
                o.shouldRender = !n
            }), e.hooks.hook("page:start", () => {
                n = !0
            }), e.hooks.hook("page:finish", r), e.hooks.hook("app:mounted", r)
        }
        e._useHead = Yc
    });
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const fn = typeof window < "u";

function Hp(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const de = Object.assign;

function _o(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = ft(o) ? o.map(e) : e(o)
    }
    return n
}
const Kn = () => {},
    ft = Array.isArray,
    jp = /\/$/,
    Up = e => e.replace(jp, "");

function yo(e, t, n = "/") {
    let r, o = {},
        s = "",
        a = "";
    const i = t.indexOf("#");
    let l = t.indexOf("?");
    return i < l && i >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, i > -1 ? i : t.length), o = e(s)), i > -1 && (r = r || t.slice(0, i), a = t.slice(i, t.length)), r = Bp(r != null ? r : t, n), {
        fullPath: r + (s && "?") + s + a,
        path: r,
        query: o,
        hash: a
    }
}

function zp(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function Ua(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Wp(e, t, n) {
    const r = t.matched.length - 1,
        o = n.matched.length - 1;
    return r > -1 && r === o && An(t.matched[r], n.matched[o]) && Zc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function An(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Zc(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!xp(e[n], t[n])) return !1;
    return !0
}

function xp(e, t) {
    return ft(e) ? za(e, t) : ft(t) ? za(t, e) : e === t
}

function za(e, t) {
    return ft(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Bp(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/");
    let o = n.length - 1,
        s, a;
    for (s = 0; s < r.length; s++)
        if (a = r[s], a !== ".")
            if (a === "..") o > 1 && o--;
            else break;
    return n.slice(0, o).join("/") + "/" + r.slice(s - (s === r.length ? 1 : 0)).join("/")
}
var nr;
(function(e) {
    e.pop = "pop", e.push = "push"
})(nr || (nr = {}));
var Gn;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Gn || (Gn = {}));

function Vp(e) {
    if (!e)
        if (fn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Up(e)
}
const $p = /^[^#]+#/;

function qp(e, t) {
    return e.replace($p, "#") + t
}

function Kp(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Yr = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function Gp(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = Kp(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function Wa(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Vo = new Map;

function Jp(e, t) {
    Vo.set(e, t)
}

function Yp(e) {
    const t = Vo.get(e);
    return Vo.delete(e), t
}
let Qp = () => location.protocol + "//" + location.host;

function Xc(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, s = e.indexOf("#");
    if (s > -1) {
        let i = o.includes(e.slice(s)) ? e.slice(s).length : 1,
            l = o.slice(i);
        return l[0] !== "/" && (l = "/" + l), Ua(l, "")
    }
    return Ua(n, e) + r + o
}

function Zp(e, t, n, r) {
    let o = [],
        s = [],
        a = null;
    const i = ({
        state: f
    }) => {
        const h = Xc(e, location),
            g = n.value,
            R = t.value;
        let O = 0;
        if (f) {
            if (n.value = h, t.value = f, a && a === g) {
                a = null;
                return
            }
            O = R ? f.position - R.position : 0
        } else r(h);
        o.forEach(b => {
            b(n.value, g, {
                delta: O,
                type: nr.pop,
                direction: O ? O > 0 ? Gn.forward : Gn.back : Gn.unknown
            })
        })
    };

    function l() {
        a = n.value
    }

    function c(f) {
        o.push(f);
        const h = () => {
            const g = o.indexOf(f);
            g > -1 && o.splice(g, 1)
        };
        return s.push(h), h
    }

    function u() {
        const {
            history: f
        } = window;
        !f.state || f.replaceState(de({}, f.state, {
            scroll: Yr()
        }), "")
    }

    function d() {
        for (const f of s) f();
        s = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", i), window.addEventListener("beforeunload", u), {
        pauseListeners: l,
        listen: c,
        destroy: d
    }
}

function xa(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? Yr() : null
    }
}

function Xp(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: Xc(e, n)
    }, o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function s(l, c, u) {
        const d = e.indexOf("#"),
            f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : Qp() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", f), o.value = c
        } catch (h) {
            console.error(h), n[u ? "replace" : "assign"](f)
        }
    }

    function a(l, c) {
        const u = de({}, t.state, xa(o.value.back, l, o.value.forward, !0), c, {
            position: o.value.position
        });
        s(l, u, !0), r.value = l
    }

    function i(l, c) {
        const u = de({}, o.value, t.state, {
            forward: l,
            scroll: Yr()
        });
        s(u.current, u, !0);
        const d = de({}, xa(r.value, l, null), {
            position: u.position + 1
        }, c);
        s(l, d, !1), r.value = l
    }
    return {
        location: r,
        state: o,
        push: i,
        replace: a
    }
}

function eu(e) {
    e = Vp(e);
    const t = Xp(e),
        n = Zp(e, t.state, t.location, t.replace);

    function r(s, a = !0) {
        a || n.pauseListeners(), history.go(s)
    }
    const o = de({
        location: "",
        base: e,
        go: r,
        createHref: qp.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}

function eg(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), eu(e)
}

function tg(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function tu(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Ft = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    nu = Symbol("");
var Ba;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ba || (Ba = {}));

function Pn(e, t) {
    return de(new Error, {
        type: e,
        [nu]: !0
    }, t)
}

function Et(e, t) {
    return e instanceof Error && nu in e && (t == null || !!(e.type & t))
}
const Va = "[^/]+?",
    ng = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    rg = /[.+*?^${}()[\]/\\]/g;

function og(e, t) {
    const n = de({}, ng, t),
        r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let d = 0; d < c.length; d++) {
            const f = c[d];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0) d || (o += "/"), o += f.value.replace(rg, "\\$&"), h += 40;
            else if (f.type === 1) {
                const {
                    value: g,
                    repeatable: R,
                    optional: O,
                    regexp: b
                } = f;
                s.push({
                    name: g,
                    repeatable: R,
                    optional: O
                });
                const m = b || Va;
                if (m !== Va) {
                    h += 10;
                    try {
                        new RegExp(`(${m})`)
                    } catch (k) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${m}): ` + k.message)
                    }
                }
                let v = R ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
                d || (v = O && c.length < 2 ? `(?:/${v})` : "/" + v), O && (v += "?"), o += v, h += 20, O && (h += -8), R && (h += -20), m === ".*" && (h += -50)
            }
            u.push(h)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const a = new RegExp(o, n.sensitive ? "" : "i");

    function i(c) {
        const u = c.match(a),
            d = {};
        if (!u) return null;
        for (let f = 1; f < u.length; f++) {
            const h = u[f] || "",
                g = s[f - 1];
            d[g.name] = h && g.repeatable ? h.split("/") : h
        }
        return d
    }

    function l(c) {
        let u = "",
            d = !1;
        for (const f of e) {
            (!d || !u.endsWith("/")) && (u += "/"), d = !1;
            for (const h of f)
                if (h.type === 0) u += h.value;
                else if (h.type === 1) {
                const {
                    value: g,
                    repeatable: R,
                    optional: O
                } = h, b = g in c ? c[g] : "";
                if (ft(b) && !R) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                const m = ft(b) ? b.join("/") : b;
                if (!m)
                    if (O) f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
                    else throw new Error(`Missing required param "${g}"`);
                u += m
            }
        }
        return u || "/"
    }
    return {
        re: a,
        score: r,
        keys: s,
        parse: i,
        stringify: l
    }
}

function sg(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function ag(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length;) {
        const s = sg(r[n], o[n]);
        if (s) return s;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if ($a(r)) return 1;
        if ($a(o)) return -1
    }
    return o.length - r.length
}

function $a(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const ig = {
        type: 0,
        value: ""
    },
    lg = /[a-zA-Z0-9_]/;

function cg(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [ig]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(h) {
        throw new Error(`ERR (${n})/"${c}": ${h}`)
    }
    let n = 0,
        r = n;
    const o = [];
    let s;

    function a() {
        s && o.push(s), s = []
    }
    let i = 0,
        l, c = "",
        u = "";

    function d() {
        !c || (n === 0 ? s.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function f() {
        c += l
    }
    for (; i < e.length;) {
        if (l = e[i++], l === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (c && d(), a()) : l === ":" ? (d(), n = 1) : f();
                break;
            case 4:
                f(), n = r;
                break;
            case 1:
                l === "(" ? n = 2 : lg.test(l) ? f() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && i--);
                break;
            case 2:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
                break;
            case 3:
                d(), n = 0, l !== "*" && l !== "?" && l !== "+" && i--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), a(), o
}

function ug(e, t, n) {
    const r = og(cg(e.path), n),
        o = de(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function fg(e, t) {
    const n = [],
        r = new Map;
    t = Ga({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function o(u) {
        return r.get(u)
    }

    function s(u, d, f) {
        const h = !f,
            g = dg(u);
        g.aliasOf = f && f.record;
        const R = Ga(t, u),
            O = [g];
        if ("alias" in u) {
            const v = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const k of v) O.push(de({}, g, {
                components: f ? f.record.components : g.components,
                path: k,
                aliasOf: f ? f.record : g
            }))
        }
        let b, m;
        for (const v of O) {
            const {
                path: k
            } = v;
            if (d && k[0] !== "/") {
                const w = d.record.path,
                    L = w[w.length - 1] === "/" ? "" : "/";
                v.path = d.record.path + (k && L + k)
            }
            if (b = ug(v, d, R), f ? f.alias.push(b) : (m = m || b, m !== b && m.alias.push(b), h && u.name && !Ka(b) && a(u.name)), g.children) {
                const w = g.children;
                for (let L = 0; L < w.length; L++) s(w[L], b, f && f.children[L])
            }
            f = f || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && l(b)
        }
        return m ? () => {
            a(m)
        } : Kn
    }

    function a(u) {
        if (tu(u)) {
            const d = r.get(u);
            d && (r.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(a), d.alias.forEach(a))
        } else {
            const d = n.indexOf(u);
            d > -1 && (n.splice(d, 1), u.record.name && r.delete(u.record.name), u.children.forEach(a), u.alias.forEach(a))
        }
    }

    function i() {
        return n
    }

    function l(u) {
        let d = 0;
        for (; d < n.length && ag(u, n[d]) >= 0 && (u.record.path !== n[d].record.path || !ru(u, n[d]));) d++;
        n.splice(d, 0, u), u.record.name && !Ka(u) && r.set(u.record.name, u)
    }

    function c(u, d) {
        let f, h = {},
            g, R;
        if ("name" in u && u.name) {
            if (f = r.get(u.name), !f) throw Pn(1, {
                location: u
            });
            R = f.record.name, h = de(qa(d.params, f.keys.filter(m => !m.optional).map(m => m.name)), u.params && qa(u.params, f.keys.map(m => m.name))), g = f.stringify(h)
        } else if ("path" in u) g = u.path, f = n.find(m => m.re.test(g)), f && (h = f.parse(g), R = f.record.name);
        else {
            if (f = d.name ? r.get(d.name) : n.find(m => m.re.test(d.path)), !f) throw Pn(1, {
                location: u,
                currentLocation: d
            });
            R = f.record.name, h = de({}, d.params, u.params), g = f.stringify(h)
        }
        const O = [];
        let b = f;
        for (; b;) O.unshift(b.record), b = b.parent;
        return {
            name: R,
            path: g,
            params: h,
            matched: O,
            meta: mg(O)
        }
    }
    return e.forEach(u => s(u)), {
        addRoute: s,
        resolve: c,
        removeRoute: a,
        getRoutes: i,
        getRecordMatcher: o
    }
}

function qa(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function dg(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: hg(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function hg(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
    return t
}

function Ka(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function mg(e) {
    return e.reduce((t, n) => de(t, n.meta), {})
}

function Ga(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function ru(e, t) {
    return t.children.some(n => n === e || ru(e, n))
}
const ou = /#/g,
    pg = /&/g,
    gg = /\//g,
    _g = /=/g,
    yg = /\?/g,
    su = /\+/g,
    bg = /%5B/g,
    vg = /%5D/g,
    au = /%5E/g,
    Eg = /%60/g,
    iu = /%7B/g,
    kg = /%7C/g,
    lu = /%7D/g,
    wg = /%20/g;

function Fs(e) {
    return encodeURI("" + e).replace(kg, "|").replace(bg, "[").replace(vg, "]")
}

function Tg(e) {
    return Fs(e).replace(iu, "{").replace(lu, "}").replace(au, "^")
}

function $o(e) {
    return Fs(e).replace(su, "%2B").replace(wg, "+").replace(ou, "%23").replace(pg, "%26").replace(Eg, "`").replace(iu, "{").replace(lu, "}").replace(au, "^")
}

function Cg(e) {
    return $o(e).replace(_g, "%3D")
}

function Rg(e) {
    return Fs(e).replace(ou, "%23").replace(yg, "%3F")
}

function Ag(e) {
    return e == null ? "" : Rg(e).replace(gg, "%2F")
}

function Hr(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function Pg(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(su, " "),
            a = s.indexOf("="),
            i = Hr(a < 0 ? s : s.slice(0, a)),
            l = a < 0 ? null : Hr(s.slice(a + 1));
        if (i in t) {
            let c = t[i];
            ft(c) || (c = t[i] = [c]), c.push(l)
        } else t[i] = l
    }
    return t
}

function Ja(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Cg(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(ft(r) ? r.map(s => s && $o(s)) : [r && $o(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
        })
    }
    return t
}

function Og(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = ft(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const Ig = Symbol(""),
    Ya = Symbol(""),
    Qr = Symbol(""),
    Ds = Symbol(""),
    qo = Symbol("");

function Hn() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e,
        reset: n
    }
}

function jt(e, t, n, r, o) {
    const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, i) => {
        const l = d => {
                d === !1 ? i(Pn(4, {
                    from: n,
                    to: t
                })) : d instanceof Error ? i(d) : tg(d) ? i(Pn(2, {
                    from: t,
                    to: d
                })) : (s && r.enterCallbacks[o] === s && typeof d == "function" && s.push(d), a())
            },
            c = e.call(r && r.instances[o], t, n, l);
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(l)), u.catch(d => i(d))
    })
}

function bo(e, t, n, r) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let i = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (Sg(i)) {
                    const c = (i.__vccOpts || i)[t];
                    c && o.push(jt(c, n, r, s, a))
                } else {
                    let l = i();
                    o.push(() => l.then(c => {
                        if (!c) return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const u = Hp(c) ? c.default : c;
                        s.components[a] = u;
                        const f = (u.__vccOpts || u)[t];
                        return f && jt(f, n, r, s, a)()
                    }))
                }
        }
    return o
}

function Sg(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Qa(e) {
    const t = $e(Qr),
        n = $e(Ds),
        r = pe(() => t.resolve(Ye(e.to))),
        o = pe(() => {
            const {
                matched: l
            } = r.value, {
                length: c
            } = l, u = l[c - 1], d = n.matched;
            if (!u || !d.length) return -1;
            const f = d.findIndex(An.bind(null, u));
            if (f > -1) return f;
            const h = Za(l[c - 2]);
            return c > 1 && Za(u) === h && d[d.length - 1].path !== h ? d.findIndex(An.bind(null, l[c - 2])) : f
        }),
        s = pe(() => o.value > -1 && Fg(n.params, r.value.params)),
        a = pe(() => o.value > -1 && o.value === n.matched.length - 1 && Zc(n.params, r.value.params));

    function i(l = {}) {
        return Ng(l) ? t[Ye(e.replace) ? "replace" : "push"](Ye(e.to)).catch(Kn) : Promise.resolve()
    }
    return {
        route: r,
        href: pe(() => r.value.href),
        isActive: s,
        isExactActive: a,
        navigate: i
    }
}
const Lg = Pt({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Qa,
        setup(e, {
            slots: t
        }) {
            const n = bt(Qa(e)),
                {
                    options: r
                } = $e(Qr),
                o = pe(() => ({
                    [Xa(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Xa(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const s = t.default && t.default(n);
                return e.custom ? s : Ke("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, s)
            }
        }
    }),
    Mg = Lg;

function Ng(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Fg(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        if (typeof r == "string") {
            if (r !== o) return !1
        } else if (!ft(o) || o.length !== r.length || r.some((s, a) => s !== o[a])) return !1
    }
    return !0
}

function Za(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Xa = (e, t, n) => e != null ? e : t != null ? t : n,
    Dg = Pt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = $e(qo),
                o = pe(() => e.route || r.value),
                s = $e(Ya, 0),
                a = pe(() => {
                    let c = Ye(s);
                    const {
                        matched: u
                    } = o.value;
                    let d;
                    for (;
                        (d = u[c]) && !d.components;) c++;
                    return c
                }),
                i = pe(() => o.value.matched[a.value]);
            vn(Ya, pe(() => a.value + 1)), vn(Ig, i), vn(qo, o);
            const l = De();
            return Ct(() => [l.value, i.value, e.name], ([c, u, d], [f, h, g]) => {
                u && (u.instances[d] = c, h && h !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), c && u && (!h || !An(u, h) || !f) && (u.enterCallbacks[d] || []).forEach(R => R(c))
            }, {
                flush: "post"
            }), () => {
                const c = o.value,
                    u = e.name,
                    d = i.value,
                    f = d && d.components[u];
                if (!f) return ei(n.default, {
                    Component: f,
                    route: c
                });
                const h = d.props[u],
                    g = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null,
                    O = Ke(f, de({}, g, t, {
                        onVnodeUnmounted: b => {
                            b.component.isUnmounted && (d.instances[u] = null)
                        },
                        ref: l
                    }));
                return ei(n.default, {
                    Component: O,
                    route: c
                }) || O
            }
        }
    });

function ei(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const cu = Dg;

function Hg(e) {
    const t = fg(e.routes, e),
        n = e.parseQuery || Pg,
        r = e.stringifyQuery || Ja,
        o = e.history,
        s = Hn(),
        a = Hn(),
        i = Hn(),
        l = Pr(Ft);
    let c = Ft;
    fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = _o.bind(null, P => "" + P),
        d = _o.bind(null, Ag),
        f = _o.bind(null, Hr);

    function h(P, x) {
        let z, Y;
        return tu(P) ? (z = t.getRecordMatcher(P), Y = x) : Y = P, t.addRoute(Y, z)
    }

    function g(P) {
        const x = t.getRecordMatcher(P);
        x && t.removeRoute(x)
    }

    function R() {
        return t.getRoutes().map(P => P.record)
    }

    function O(P) {
        return !!t.getRecordMatcher(P)
    }

    function b(P, x) {
        if (x = de({}, x || l.value), typeof P == "string") {
            const p = yo(n, P, x.path),
                y = t.resolve({
                    path: p.path
                }, x),
                _ = o.createHref(p.fullPath);
            return de(p, y, {
                params: f(y.params),
                hash: Hr(p.hash),
                redirectedFrom: void 0,
                href: _
            })
        }
        let z;
        if ("path" in P) z = de({}, P, {
            path: yo(n, P.path, x.path).path
        });
        else {
            const p = de({}, P.params);
            for (const y in p) p[y] == null && delete p[y];
            z = de({}, P, {
                params: d(P.params)
            }), x.params = d(x.params)
        }
        const Y = t.resolve(z, x),
            oe = P.hash || "";
        Y.params = u(f(Y.params));
        const he = zp(r, de({}, P, {
                hash: Tg(oe),
                path: Y.path
            })),
            ne = o.createHref(he);
        return de({
            fullPath: he,
            hash: oe,
            query: r === Ja ? Og(P.query) : P.query || {}
        }, Y, {
            redirectedFrom: void 0,
            href: ne
        })
    }

    function m(P) {
        return typeof P == "string" ? yo(n, P, l.value.path) : de({}, P)
    }

    function v(P, x) {
        if (c !== P) return Pn(8, {
            from: x,
            to: P
        })
    }

    function k(P) {
        return M(P)
    }

    function w(P) {
        return k(de(m(P), {
            replace: !0
        }))
    }

    function L(P) {
        const x = P.matched[P.matched.length - 1];
        if (x && x.redirect) {
            const {
                redirect: z
            } = x;
            let Y = typeof z == "function" ? z(P) : z;
            return typeof Y == "string" && (Y = Y.includes("?") || Y.includes("#") ? Y = m(Y) : {
                path: Y
            }, Y.params = {}), de({
                query: P.query,
                hash: P.hash,
                params: "path" in Y ? {} : P.params
            }, Y)
        }
    }

    function M(P, x) {
        const z = c = b(P),
            Y = l.value,
            oe = P.state,
            he = P.force,
            ne = P.replace === !0,
            p = L(z);
        if (p) return M(de(m(p), {
            state: typeof p == "object" ? de({}, oe, p.state) : oe,
            force: he,
            replace: ne
        }), x || z);
        const y = z;
        y.redirectedFrom = x;
        let _;
        return !he && Wp(r, Y, z) && (_ = Pn(16, {
            to: y,
            from: Y
        }), lt(Y, Y, !0, !1)), (_ ? Promise.resolve(_) : V(y, Y)).catch(T => Et(T) ? Et(T, 2) ? T : We(T) : se(T, y, Y)).then(T => {
            if (T) {
                if (Et(T, 2)) return M(de({
                    replace: ne
                }, m(T.to), {
                    state: typeof T.to == "object" ? de({}, oe, T.to.state) : oe,
                    force: he
                }), x || y)
            } else T = G(y, Y, !0, ne, oe);
            return $(y, Y, T), T
        })
    }

    function I(P, x) {
        const z = v(P, x);
        return z ? Promise.reject(z) : Promise.resolve()
    }

    function V(P, x) {
        let z;
        const [Y, oe, he] = jg(P, x);
        z = bo(Y.reverse(), "beforeRouteLeave", P, x);
        for (const p of Y) p.leaveGuards.forEach(y => {
            z.push(jt(y, P, x))
        });
        const ne = I.bind(null, P, x);
        return z.push(ne), un(z).then(() => {
            z = [];
            for (const p of s.list()) z.push(jt(p, P, x));
            return z.push(ne), un(z)
        }).then(() => {
            z = bo(oe, "beforeRouteUpdate", P, x);
            for (const p of oe) p.updateGuards.forEach(y => {
                z.push(jt(y, P, x))
            });
            return z.push(ne), un(z)
        }).then(() => {
            z = [];
            for (const p of P.matched)
                if (p.beforeEnter && !x.matched.includes(p))
                    if (ft(p.beforeEnter))
                        for (const y of p.beforeEnter) z.push(jt(y, P, x));
                    else z.push(jt(p.beforeEnter, P, x));
            return z.push(ne), un(z)
        }).then(() => (P.matched.forEach(p => p.enterCallbacks = {}), z = bo(he, "beforeRouteEnter", P, x), z.push(ne), un(z))).then(() => {
            z = [];
            for (const p of a.list()) z.push(jt(p, P, x));
            return z.push(ne), un(z)
        }).catch(p => Et(p, 8) ? p : Promise.reject(p))
    }

    function $(P, x, z) {
        for (const Y of i.list()) Y(P, x, z)
    }

    function G(P, x, z, Y, oe) {
        const he = v(P, x);
        if (he) return he;
        const ne = x === Ft,
            p = fn ? history.state : {};
        z && (Y || ne ? o.replace(P.fullPath, de({
            scroll: ne && p && p.scroll
        }, oe)) : o.push(P.fullPath, oe)), l.value = P, lt(P, x, z, ne), We()
    }
    let U;

    function Z() {
        U || (U = o.listen((P, x, z) => {
            if (!It.listening) return;
            const Y = b(P),
                oe = L(Y);
            if (oe) {
                M(de(oe, {
                    replace: !0
                }), Y).catch(Kn);
                return
            }
            c = Y;
            const he = l.value;
            fn && Jp(Wa(he.fullPath, z.delta), Yr()), V(Y, he).catch(ne => Et(ne, 12) ? ne : Et(ne, 2) ? (M(ne.to, Y).then(p => {
                Et(p, 20) && !z.delta && z.type === nr.pop && o.go(-1, !1)
            }).catch(Kn), Promise.reject()) : (z.delta && o.go(-z.delta, !1), se(ne, Y, he))).then(ne => {
                ne = ne || G(Y, he, !1), ne && (z.delta && !Et(ne, 8) ? o.go(-z.delta, !1) : z.type === nr.pop && Et(ne, 20) && o.go(-1, !1)), $(Y, he, ne)
            }).catch(Kn)
        }))
    }
    let q = Hn(),
        Pe = Hn(),
        te;

    function se(P, x, z) {
        We(P);
        const Y = Pe.list();
        return Y.length ? Y.forEach(oe => oe(P, x, z)) : console.error(P), Promise.reject(P)
    }

    function le() {
        return te && l.value !== Ft ? Promise.resolve() : new Promise((P, x) => {
            q.add([P, x])
        })
    }

    function We(P) {
        return te || (te = !P, Z(), q.list().forEach(([x, z]) => P ? z(P) : x()), q.reset()), P
    }

    function lt(P, x, z, Y) {
        const {
            scrollBehavior: oe
        } = e;
        if (!fn || !oe) return Promise.resolve();
        const he = !z && Yp(Wa(P.fullPath, 0)) || (Y || !z) && history.state && history.state.scroll || null;
        return Mn().then(() => oe(P, x, he)).then(ne => ne && Gp(ne)).catch(ne => se(ne, P, x))
    }
    const xe = P => o.go(P);
    let Ne;
    const vt = new Set,
        It = {
            currentRoute: l,
            listening: !0,
            addRoute: h,
            removeRoute: g,
            hasRoute: O,
            getRoutes: R,
            resolve: b,
            options: e,
            push: k,
            replace: w,
            go: xe,
            back: () => xe(-1),
            forward: () => xe(1),
            beforeEach: s.add,
            beforeResolve: a.add,
            afterEach: i.add,
            onError: Pe.add,
            isReady: le,
            install(P) {
                const x = this;
                P.component("RouterLink", Mg), P.component("RouterView", cu), P.config.globalProperties.$router = x, Object.defineProperty(P.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => Ye(l)
                }), fn && !Ne && l.value === Ft && (Ne = !0, k(o.location).catch(oe => {}));
                const z = {};
                for (const oe in Ft) z[oe] = pe(() => l.value[oe]);
                P.provide(Qr, x), P.provide(Ds, bt(z)), P.provide(qo, l);
                const Y = P.unmount;
                vt.add(P), P.unmount = function() {
                    vt.delete(P), vt.size < 1 && (c = Ft, U && U(), U = null, l.value = Ft, Ne = !1, te = !1), Y()
                }
            }
        };
    return It
}

function un(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}

function jg(e, t) {
    const n = [],
        r = [],
        o = [],
        s = Math.max(t.matched.length, e.matched.length);
    for (let a = 0; a < s; a++) {
        const i = t.matched[a];
        i && (e.matched.find(c => An(c, i)) ? r.push(i) : n.push(i));
        const l = e.matched[a];
        l && (t.matched.find(c => An(c, l)) || o.push(l))
    }
    return [n, r, o]
}

function xy() {
    return $e(Qr)
}

function Ug() {
    return $e(Ds)
}
const H = {},
    j = {
        layout: "calendar"
    },
    _e = {},
    ye = {
        layout: "calendar"
    },
    be = {
        layout: "form"
    },
    ve = {},
    Xe = {
        layout: "form"
    },
    et = {
        layout: "form"
    };
var Li, Mi, Ni, Fi, Di, Hi, ji, Ui, zi, Wi, xi, Bi, Vi, $i, qi, Ki, Gi, Ji, Yi, Qi, Zi, Xi, el, tl, nl, rl, ol, sl, al, il, ll, cl, ul, fl, dl, hl, ml, pl, gl, _l, yl, bl, vl, El;
const ti = [{
        name: (Li = H == null ? void 0 : H.name) != null ? Li : "index",
        path: (Mi = H == null ? void 0 : H.path) != null ? Mi : "/",
        file: "/tmp/workspace/production/builder-preview/pages/index.vue",
        children: [],
        meta: H,
        alias: (H == null ? void 0 : H.alias) || [],
        redirect: (H == null ? void 0 : H.redirect) || void 0,
        component: () => me(() =>
            import ("./index.35560cc3.js").then(e => e.c), ["./index.35560cc3.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./index.fcee55bf.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Ni = j == null ? void 0 : j.name) != null ? Ni : "widget-appointment-provider-service",
        path: (Fi = j == null ? void 0 : j.path) != null ? Fi : "/widget/appointment/:provider/:service",
        file: "/tmp/workspace/production/builder-preview/pages/widget/appointment/[provider]/[service].vue",
        children: [],
        meta: j,
        alias: (j == null ? void 0 : j.alias) || [],
        redirect: (j == null ? void 0 : j.redirect) || void 0,
        component: () => me(() =>
            import ("./_service_.c7009301.js"), ["./_service_.c7009301.js", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./utils.72c8fdcc.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./CalendarComponentv3.6fd3d6f2.css", "./_service_.4e5a1654.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Di = _e == null ? void 0 : _e.name) != null ? Di : "widget-booking-id",
        path: (Hi = _e == null ? void 0 : _e.path) != null ? Hi : "/widget/booking/:id",
        file: "/tmp/workspace/production/builder-preview/pages/widget/booking/[id].vue",
        children: [],
        meta: _e,
        alias: (_e == null ? void 0 : _e.alias) || [],
        redirect: (_e == null ? void 0 : _e.redirect) || void 0,
        component: () => me(() =>
            import ("./_id_.35233c6c.js"), ["./_id_.35233c6c.js", "./CalendarCompNew.vue_vue_type_script_setup_true_lang.48db7cd0.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./CalendarComponent.bd53583e.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./utils.72c8fdcc.js", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./CalendarComponent.8b258596.css", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./CalendarComponentv3.6fd3d6f2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (ji = ye == null ? void 0 : ye.name) != null ? ji : "widget-booking-ids",
        path: (Ui = ye == null ? void 0 : ye.path) != null ? Ui : "/widget/booking/:ids",
        file: "/tmp/workspace/production/builder-preview/pages/widget/booking/[ids].vue",
        children: [],
        meta: ye,
        alias: (ye == null ? void 0 : ye.alias) || [],
        redirect: (ye == null ? void 0 : ye.redirect) || void 0,
        component: () => me(() =>
            import ("./_ids_.0c68226d.js"), ["./_ids_.0c68226d.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./utils.72c8fdcc.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (zi = be == null ? void 0 : be.name) != null ? zi : "widget-booking-cancel-booking",
        path: (Wi = be == null ? void 0 : be.path) != null ? Wi : "/widget/booking/cancel-booking",
        file: "/tmp/workspace/production/builder-preview/pages/widget/booking/cancel-booking.vue",
        children: [],
        meta: be,
        alias: (be == null ? void 0 : be.alias) || [],
        redirect: (be == null ? void 0 : be.redirect) || void 0,
        component: () => me(() =>
            import ("./cancel-booking.85a6865d.js"), ["./cancel-booking.85a6865d.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./app.63a239f9.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (xi = ve == null ? void 0 : ve.name) != null ? xi : "widget-bookings-slug",
        path: (Bi = ve == null ? void 0 : ve.path) != null ? Bi : "/widget/bookings/:slug",
        file: "/tmp/workspace/production/builder-preview/pages/widget/bookings/[slug].vue",
        children: [],
        meta: ve,
        alias: (ve == null ? void 0 : ve.alias) || [],
        redirect: (ve == null ? void 0 : ve.redirect) || void 0,
        component: () => me(() =>
            import ("./_slug_.c225f320.js"), ["./_slug_.c225f320.js", "./CalendarCompNew.vue_vue_type_script_setup_true_lang.48db7cd0.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./CalendarComponent.bd53583e.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./utils.72c8fdcc.js", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./CalendarComponent.8b258596.css", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./CalendarComponentv3.6fd3d6f2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Vi = Xe == null ? void 0 : Xe.name) != null ? Vi : "widget-form-id",
        path: ($i = Xe == null ? void 0 : Xe.path) != null ? $i : "/widget/form/:id",
        file: "/tmp/workspace/production/builder-preview/pages/widget/form/[id].vue",
        children: [],
        meta: Xe,
        alias: (Xe == null ? void 0 : Xe.alias) || [],
        redirect: (Xe == null ? void 0 : Xe.redirect) || void 0,
        component: () => me(() =>
            import ("./_id_.9bd64c76.js"), ["./_id_.9bd64c76.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./Attributions.b54b0d68.js", "./index.bb6f8f81.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (qi = et == null ? void 0 : et.name) != null ? qi : "widget-survey-id",
        path: (Ki = et == null ? void 0 : et.path) != null ? Ki : "/widget/survey/:id",
        file: "/tmp/workspace/production/builder-preview/pages/widget/survey/[id].vue",
        children: [],
        meta: et,
        alias: (et == null ? void 0 : et.alias) || [],
        redirect: (et == null ? void 0 : et.redirect) || void 0,
        component: () => me(() =>
            import ("./_id_.9fd66fc2.js"), ["./_id_.9fd66fc2.js", "./index.6e35e14c.js", "./Attributions.b54b0d68.js", "./index.bb6f8f81.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Gi = j == null ? void 0 : j.name) != null ? Gi : "appointment-service",
        path: (Ji = j == null ? void 0 : j.path) != null ? Ji : "/widget/appointment/service/:service",
        file: "/tmp/workspace/production/builder-preview/pages/widget/appointment/[provider]/[service].vue",
        children: [],
        meta: j,
        alias: (j == null ? void 0 : j.alias) || [],
        redirect: (j == null ? void 0 : j.redirect) || void 0,
        component: () => me(() =>
            import ("./_service_.c7009301.js"), ["./_service_.c7009301.js", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./utils.72c8fdcc.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./CalendarComponentv3.6fd3d6f2.css", "./_service_.4e5a1654.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Yi = j == null ? void 0 : j.name) != null ? Yi : "cancel-appointment",
        path: (Qi = j == null ? void 0 : j.path) != null ? Qi : "/widget/appointment/service/:service/cancel",
        file: "/tmp/workspace/production/builder-preview/pages/widget/appointment/[provider]/[service].vue",
        children: [],
        meta: j,
        alias: (j == null ? void 0 : j.alias) || [],
        redirect: (j == null ? void 0 : j.redirect) || void 0,
        component: () => me(() =>
            import ("./_service_.c7009301.js"), ["./_service_.c7009301.js", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./utils.72c8fdcc.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./CalendarComponentv3.6fd3d6f2.css", "./_service_.4e5a1654.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Zi = be == null ? void 0 : be.name) != null ? Zi : "cancel-booking",
        path: (Xi = be == null ? void 0 : be.path) != null ? Xi : "/widget/cancel-booking",
        file: "/tmp/workspace/production/builder-preview/pages/widget/booking/cancel-booking.vue",
        children: [],
        meta: be,
        alias: (be == null ? void 0 : be.alias) || [],
        redirect: (be == null ? void 0 : be.redirect) || void 0,
        component: () => me(() =>
            import ("./cancel-booking.85a6865d.js"), ["./cancel-booking.85a6865d.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./app.63a239f9.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (el = j == null ? void 0 : j.name) != null ? el : "appointment-teams",
        path: (tl = j == null ? void 0 : j.path) != null ? tl : "/widget/appointment/:provider",
        file: "/tmp/workspace/production/builder-preview/pages/widget/appointment/[provider]/[service].vue",
        children: [],
        meta: j,
        alias: (j == null ? void 0 : j.alias) || [],
        redirect: (j == null ? void 0 : j.redirect) || void 0,
        component: () => me(() =>
            import ("./_service_.c7009301.js"), ["./_service_.c7009301.js", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./utils.72c8fdcc.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./CalendarComponentv3.6fd3d6f2.css", "./_service_.4e5a1654.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (nl = j == null ? void 0 : j.name) != null ? nl : "appointment-groups",
        path: (rl = j == null ? void 0 : j.path) != null ? rl : "/widget/group/:groupId",
        file: "/tmp/workspace/production/builder-preview/pages/widget/appointment/[provider]/[service].vue",
        children: [],
        meta: j,
        alias: (j == null ? void 0 : j.alias) || [],
        redirect: (j == null ? void 0 : j.redirect) || void 0,
        component: () => me(() =>
            import ("./_service_.c7009301.js"), ["./_service_.c7009301.js", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./utils.72c8fdcc.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./CalendarComponentv3.6fd3d6f2.css", "./_service_.4e5a1654.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (ol = j == null ? void 0 : j.name) != null ? ol : "appointment-groups-slug",
        path: (sl = j == null ? void 0 : j.path) != null ? sl : "/widget/groups/:groupSlug",
        file: "/tmp/workspace/production/builder-preview/pages/widget/appointment/[provider]/[service].vue",
        children: [],
        meta: j,
        alias: (j == null ? void 0 : j.alias) || [],
        redirect: (j == null ? void 0 : j.redirect) || void 0,
        component: () => me(() =>
            import ("./_service_.c7009301.js"), ["./_service_.c7009301.js", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./utils.72c8fdcc.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./CalendarComponentv3.6fd3d6f2.css", "./_service_.4e5a1654.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (al = ye == null ? void 0 : ye.name) != null ? al : "booking-v2-multiple",
        path: (il = ye == null ? void 0 : ye.path) != null ? il : "/widget/booking/:ids(.*,.*)",
        file: "/tmp/workspace/production/builder-preview/pages/widget/booking/[ids].vue",
        children: [],
        meta: ye,
        alias: (ye == null ? void 0 : ye.alias) || [],
        redirect: (ye == null ? void 0 : ye.redirect) || void 0,
        component: () => me(() =>
            import ("./_ids_.0c68226d.js"), ["./_ids_.0c68226d.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./Attributions.b54b0d68.js", "./HLConst.ac6e57fd.js", "./utils.72c8fdcc.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (ll = _e == null ? void 0 : _e.name) != null ? ll : "booking-v2",
        path: (cl = _e == null ? void 0 : _e.path) != null ? cl : "/widget/booking",
        file: "/tmp/workspace/production/builder-preview/pages/widget/booking/[id].vue",
        children: [],
        meta: _e,
        alias: (_e == null ? void 0 : _e.alias) || [],
        redirect: (_e == null ? void 0 : _e.redirect) || void 0,
        component: () => me(() =>
            import ("./_id_.35233c6c.js"), ["./_id_.35233c6c.js", "./CalendarCompNew.vue_vue_type_script_setup_true_lang.48db7cd0.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./CalendarComponent.bd53583e.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./utils.72c8fdcc.js", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./CalendarComponent.8b258596.css", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./CalendarComponentv3.6fd3d6f2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (ul = ve == null ? void 0 : ve.name) != null ? ul : "booking-slug",
        path: (fl = ve == null ? void 0 : ve.path) != null ? fl : "/widget/bookings:slug(.*)",
        file: "/tmp/workspace/production/builder-preview/pages/widget/bookings/[slug].vue",
        children: [],
        meta: ve,
        alias: (ve == null ? void 0 : ve.alias) || [],
        redirect: (ve == null ? void 0 : ve.redirect) || void 0,
        component: () => me(() =>
            import ("./_slug_.c225f320.js"), ["./_slug_.c225f320.js", "./CalendarCompNew.vue_vue_type_script_setup_true_lang.48db7cd0.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./CalendarComponent.bd53583e.js", "./FormComponent.vue_vue_type_style_index_0_lang.8109192d.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./utils.72c8fdcc.js", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./HLConst.ac6e57fd.js", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./FormComponent.52eb3a7e.css", "./app.63a239f9.css", "./advancedFormat.86ac0e68.js", "./advancedFormat.cf63fb7e.css", "./timezone.fc7dd5b7.js", "./CalendarComponent.8b258596.css", "./CalendarComponentv3.vue_vue_type_style_index_0_lang.0dfcad56.js", "./CalendarComponentv3.6fd3d6f2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (dl = H == null ? void 0 : H.name) != null ? dl : "Page",
        path: (hl = H == null ? void 0 : H.path) != null ? hl : "/:path",
        file: "/tmp/workspace/production/builder-preview/pages/index.vue",
        children: [],
        meta: H,
        alias: (H == null ? void 0 : H.alias) || [],
        redirect: (H == null ? void 0 : H.redirect) || void 0,
        component: () => me(() =>
            import ("./index.35560cc3.js").then(e => e.c), ["./index.35560cc3.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./index.fcee55bf.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (ml = H == null ? void 0 : H.name) != null ? ml : "Page with blog",
        path: (pl = H == null ? void 0 : H.path) != null ? pl : "/:path/b/:slug/",
        file: "/tmp/workspace/production/builder-preview/pages/index.vue",
        children: [],
        meta: H,
        alias: (H == null ? void 0 : H.alias) || [],
        redirect: (H == null ? void 0 : H.redirect) || void 0,
        component: () => me(() =>
            import ("./index.35560cc3.js").then(e => e.c), ["./index.35560cc3.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./index.fcee55bf.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (gl = H == null ? void 0 : H.name) != null ? gl : "Home Page with blog",
        path: (_l = H == null ? void 0 : H.path) != null ? _l : "/b/:slug/",
        file: "/tmp/workspace/production/builder-preview/pages/index.vue",
        children: [],
        meta: H,
        alias: (H == null ? void 0 : H.alias) || [],
        redirect: (H == null ? void 0 : H.redirect) || void 0,
        component: () => me(() =>
            import ("./index.35560cc3.js").then(e => e.c), ["./index.35560cc3.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./index.fcee55bf.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (yl = H == null ? void 0 : H.name) != null ? yl : "Blog",
        path: (bl = H == null ? void 0 : H.path) != null ? bl : "/v2/preview/:id/b/:slug",
        file: "/tmp/workspace/production/builder-preview/pages/index.vue",
        children: [],
        meta: H,
        alias: (H == null ? void 0 : H.alias) || [],
        redirect: (H == null ? void 0 : H.redirect) || void 0,
        component: () => me(() =>
            import ("./index.35560cc3.js").then(e => e.c), ["./index.35560cc3.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./index.fcee55bf.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (vl = H == null ? void 0 : H.name) != null ? vl : "Preview",
        path: (El = H == null ? void 0 : H.path) != null ? El : "/v2/preview/:id",
        file: "/tmp/workspace/production/builder-preview/pages/index.vue",
        children: [],
        meta: H,
        alias: (H == null ? void 0 : H.alias) || [],
        redirect: (H == null ? void 0 : H.redirect) || void 0,
        component: () => me(() =>
            import ("./index.35560cc3.js").then(e => e.c), ["./index.35560cc3.js", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./index.fcee55bf.css"],
            import.meta.url).then(e => e.default || e)
    }],
    zg = {
        scrollBehavior(e, t, n) {
            const r = Qe();
            let o = n || void 0;
            if (!o && t && e && e.meta.scrollToTop !== !1 && Wg(t, e) && (o = {
                    left: 0,
                    top: 0
                }), e.path === t.path) {
                if (t.hash && !e.hash) return {
                    left: 0,
                    top: 0
                };
                if (e.hash) return {
                    el: e.hash,
                    top: ni(e.hash)
                }
            }
            const s = i => {
                    var l;
                    return !!((l = i.meta.pageTransition) != null ? l : Bo)
                },
                a = s(t) && s(e) ? "page:transition:finish" : "page:finish";
            return new Promise(i => {
                r.hooks.hookOnce(a, async () => {
                    await Mn(), e.hash && (o = {
                        el: e.hash,
                        top: ni(e.hash)
                    }), i(o)
                })
            })
        }
    };

function ni(e) {
    try {
        const t = document.querySelector(e);
        if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}

function Wg(e, t) {
    const n = e.matched[0] === t.matched[0];
    return !!(!n || n && JSON.stringify(e.params) !== JSON.stringify(t.params))
}
const xg = {},
    kt = { ...xg,
        ...zg
    },
    Bg = xc(async e => {
        var o;
        let t, n;
        if (!((o = e.meta) != null && o.validate)) return;
        const r = ([t, n] = Uc(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t);
        return typeof r == "boolean" ? r : Ss(r)
    }),
    Vg = xc((e, t) => {
        try {
            if (e.path === "/favicon.ico") return Pm("Not found")
        } catch {}
    }),
    $g = [Bg, Vg],
    vo = {
        route: () => me(() =>
            import ("./route.3a011af4.js"), [],
            import.meta.url)
    };

function qg(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, s = e.indexOf("#");
    if (s > -1) {
        const i = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let l = o.slice(i);
        return l[0] !== "/" && (l = "/" + l), Sa(l, "")
    }
    return Sa(n, e) + r + o
}
const Kg = cr(async e => {
    var g, R, O, b;
    let t, n, r = _m().app.baseURL;
    kt.hashMode && !r.includes("#") && (r += "#");
    const o = (R = (g = kt.history) == null ? void 0 : g.call(kt, r)) != null ? R : kt.hashMode ? eg(r) : eu(r),
        s = (b = (O = kt.routes) == null ? void 0 : O.call(kt, ti)) != null ? b : ti,
        a = qg(r, window.location),
        i = Hg({ ...kt,
            history: o,
            routes: s
        });
    e.vueApp.use(i);
    const l = Pr(i.currentRoute.value);
    i.afterEach((m, v) => {
        l.value = v
    }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
    });
    const c = Pr(i.resolve(a)),
        u = () => {
            c.value = i.currentRoute.value
        };
    e.hook("page:finish", u), i.afterEach((m, v) => {
        var k, w, L, M;
        ((w = (k = m.matched[0]) == null ? void 0 : k.components) == null ? void 0 : w.default) === ((M = (L = v.matched[0]) == null ? void 0 : L.components) == null ? void 0 : M.default) && u()
    });
    const d = {};
    for (const m in c.value) d[m] = pe(() => c.value[m]);
    e._route = bt(d), e._middleware = e._middleware || {
        global: [],
        named: {}
    };
    const f = Jr();
    try {
        [t, n] = Uc(() => i.isReady()), await t, n()
    } catch (m) {
        Ht(e, Wn, [m])
    }
    const h = Cm("_layout");
    return i.beforeEach(async (m, v) => {
        var w, L;
        m.meta = bt(m.meta), e.isHydrating && (m.meta.layout = (w = h.value) != null ? w : m.meta.layout), e._processingMiddleware = !0;
        const k = new Set([...$g, ...e._middleware.global]);
        for (const M of m.matched) {
            const I = M.meta.middleware;
            if (!!I)
                if (Array.isArray(I))
                    for (const V of I) k.add(V);
                else k.add(I)
        }
        for (const M of k) {
            const I = typeof M == "string" ? e._middleware.named[M] || await ((L = vo[M]) == null ? void 0 : L.call(vo).then($ => $.default || $)) : M;
            if (!I) throw new Error(`Unknown route middleware: '${M}'.`);
            const V = await Ht(e, I, [m, v]);
            if (!e.payload.serverRendered && e.isHydrating && (V === !1 || V instanceof Error)) {
                const $ = V || Wo({
                    statusCode: 404,
                    statusMessage: `Page Not Found: ${a}`
                });
                return await Ht(e, Wn, [$]), !1
            }
            if (V || V === !1) return V
        }
    }), i.afterEach(async m => {
        delete e._processingMiddleware, !e.isHydrating && f.value && await Ht(e, wm), m.matched.length === 0 && Ht(e, Wn, [Wo({
            statusCode: 404,
            fatal: !1,
            statusMessage: `Page not found: ${m.fullPath}`
        })])
    }), e.hooks.hookOnce("app:created", async () => {
        try {
            await i.replace({ ...i.resolve(a),
                name: void 0,
                force: !0
            })
        } catch (m) {
            Ht(e, Wn, [m])
        }
    }), {
        provide: {
            router: i
        }
    }
});
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const Ko = typeof window < "u",
    Gg = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    ln = e => Gg ? Symbol(e) : e,
    Jg = (e, t, n) => Yg({
        l: e,
        k: t,
        s: n
    }),
    Yg = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Le = e => typeof e == "number" && isFinite(e),
    Qg = e => Us(e) === "[object Date]",
    $t = e => Us(e) === "[object RegExp]",
    Zr = e => ee(e) && Object.keys(e).length === 0;

function Zg(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const ze = Object.assign;
let ri;
const Hs = () => ri || (ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function oi(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Xg = Object.prototype.hasOwnProperty;

function js(e, t) {
    return Xg.call(e, t)
}
const Ee = Array.isArray,
    Re = e => typeof e == "function",
    B = e => typeof e == "string",
    ie = e => typeof e == "boolean",
    ke = e => e !== null && typeof e == "object",
    uu = Object.prototype.toString,
    Us = e => uu.call(e),
    ee = e => Us(e) === "[object Object]",
    e_ = e => e == null ? "" : Ee(e) || ee(e) && e.toString === uu ? JSON.stringify(e, null, 2) : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const fu = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
};

function du(e, t, n = {}) {
    const {
        domain: r,
        messages: o,
        args: s
    } = n, a = e, i = new SyntaxError(String(a));
    return i.code = e, t && (i.location = t), i.domain = r, i
}
/*!
 * devtools-if v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const hu = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
};
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const qt = [];
qt[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
};
qt[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
};
qt[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
};
qt[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
};
qt[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [4, 2],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
};
qt[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
};
qt[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
};
const t_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function n_(e) {
    return t_.test(e)
}

function r_(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function o_(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function s_(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : n_(t) ? r_(t) : "*" + t
}

function a_(e) {
    const t = [];
    let n = -1,
        r = 0,
        o = 0,
        s, a, i, l, c, u, d;
    const f = [];
    f[0] = () => {
        a === void 0 ? a = i : a += i
    }, f[1] = () => {
        a !== void 0 && (t.push(a), a = void 0)
    }, f[2] = () => {
        f[0](), o++
    }, f[3] = () => {
        if (o > 0) o--, r = 4, f[0]();
        else {
            if (o = 0, a === void 0 || (a = s_(a), a === !1)) return !1;
            f[1]()
        }
    };

    function h() {
        const g = e[n + 1];
        if (r === 5 && g === "'" || r === 6 && g === '"') return n++, i = "\\" + g, f[0](), !0
    }
    for (; r !== null;)
        if (n++, s = e[n], !(s === "\\" && h())) {
            if (l = o_(s), d = qt[r], c = d[l] || d.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = f[c[1]], u && (i = s, u() === !1)))) return;
            if (r === 7) return t
        }
}
const si = new Map;

function i_(e, t) {
    return ke(e) ? e[t] : null
}

function l_(e, t) {
    if (!ke(e)) return null;
    let n = si.get(t);
    if (n || (n = a_(t), n && si.set(t, n)), !n) return null;
    const r = n.length;
    let o = e,
        s = 0;
    for (; s < r;) {
        const a = o[n[s]];
        if (a === void 0) return null;
        o = a, s++
    }
    return o
}
const c_ = e => e,
    u_ = e => "",
    f_ = "text",
    d_ = e => e.length === 0 ? "" : e.join(""),
    h_ = e_;

function ai(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function m_(e) {
    const t = Le(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Le(e.named.count) || Le(e.named.n)) ? Le(e.named.count) ? e.named.count : Le(e.named.n) ? e.named.n : t : t
}

function p_(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function g_(e = {}) {
    const t = e.locale,
        n = m_(e),
        r = ke(e.pluralRules) && B(t) && Re(e.pluralRules[t]) ? e.pluralRules[t] : ai,
        o = ke(e.pluralRules) && B(t) && Re(e.pluralRules[t]) ? ai : void 0,
        s = b => b[r(n, b.length, o)],
        a = e.list || [],
        i = b => a[b],
        l = e.named || {};
    Le(e.pluralIndex) && p_(n, l);
    const c = b => l[b];

    function u(b) {
        const m = Re(e.messages) ? e.messages(b) : ke(e.messages) ? e.messages[b] : !1;
        return m || (e.parent ? e.parent.message(b) : u_)
    }
    const d = b => e.modifiers ? e.modifiers[b] : c_,
        f = ee(e.processor) && Re(e.processor.normalize) ? e.processor.normalize : d_,
        h = ee(e.processor) && Re(e.processor.interpolate) ? e.processor.interpolate : h_,
        g = ee(e.processor) && B(e.processor.type) ? e.processor.type : f_,
        O = {
            list: i,
            named: c,
            plural: s,
            linked: (b, ...m) => {
                const [v, k] = m;
                let w = "text",
                    L = "";
                m.length === 1 ? ke(v) ? (L = v.modifier || L, w = v.type || w) : B(v) && (L = v || L) : m.length === 2 && (B(v) && (L = v || L), B(k) && (w = k || w));
                let M = u(b)(O);
                return w === "vnode" && Ee(M) && L && (M = M[0]), L ? d(L)(M, w) : M
            },
            message: u,
            type: g,
            interpolate: h,
            normalize: f
        };
    return O
}
let rr = null;

function __(e) {
    rr = e
}

function y_(e, t, n) {
    rr && rr.emit(hu.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const b_ = v_(hu.FunctionTranslate);

function v_(e) {
    return t => rr && rr.emit(e, t)
}

function E_(e, t, n) {
    return [...new Set([n, ...Ee(t) ? t : ke(t) ? Object.keys(t) : B(t) ? [t] : [n]])]
}

function mu(e, t, n) {
    const r = B(n) ? n : ur,
        o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let s = o.__localeChainCache.get(r);
    if (!s) {
        s = [];
        let a = [n];
        for (; Ee(a);) a = ii(s, a, t);
        const i = Ee(t) || !ee(t) ? t : t.default ? t.default : null;
        a = B(i) ? [i] : i, Ee(a) && ii(s, a, !1), o.__localeChainCache.set(r, s)
    }
    return s
}

function ii(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && ie(r); o++) {
        const s = t[o];
        B(s) && (r = k_(e, t[o], n))
    }
    return r
}

function k_(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const s = o.join("-");
        r = w_(e, s, n), o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}

function w_(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o), (Ee(n) || ee(n)) && n[o] && (r = n[o])
    }
    return r
}
const T_ = "9.2.2",
    Xr = -1,
    ur = "en-US",
    li = "",
    ci = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function C_() {
    return {
        upper: (e, t) => t === "text" && B(e) ? e.toUpperCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && B(e) ? e.toLowerCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && B(e) ? ci(e) : t === "vnode" && ke(e) && "__v_isVNode" in e ? ci(e.children) : e
    }
}
let R_, pu;

function A_(e) {
    pu = e
}
let gu;

function P_(e) {
    gu = e
}
let _u = null;
const ui = e => {
        _u = e
    },
    O_ = () => _u;
let yu = null;
const fi = e => {
        yu = e
    },
    I_ = () => yu;
let di = 0;

function S_(e = {}) {
    const t = B(e.version) ? e.version : T_,
        n = B(e.locale) ? e.locale : ur,
        r = Ee(e.fallbackLocale) || ee(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
        o = ee(e.messages) ? e.messages : {
            [n]: {}
        },
        s = ee(e.datetimeFormats) ? e.datetimeFormats : {
            [n]: {}
        },
        a = ee(e.numberFormats) ? e.numberFormats : {
            [n]: {}
        },
        i = ze({}, e.modifiers || {}, C_()),
        l = e.pluralRules || {},
        c = Re(e.missing) ? e.missing : null,
        u = ie(e.missingWarn) || $t(e.missingWarn) ? e.missingWarn : !0,
        d = ie(e.fallbackWarn) || $t(e.fallbackWarn) ? e.fallbackWarn : !0,
        f = !!e.fallbackFormat,
        h = !!e.unresolving,
        g = Re(e.postTranslation) ? e.postTranslation : null,
        R = ee(e.processor) ? e.processor : null,
        O = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        b = !!e.escapeParameter,
        m = Re(e.messageCompiler) ? e.messageCompiler : R_,
        v = Re(e.messageResolver) ? e.messageResolver : pu || i_,
        k = Re(e.localeFallbacker) ? e.localeFallbacker : gu || E_,
        w = ke(e.fallbackContext) ? e.fallbackContext : void 0,
        L = Re(e.onWarn) ? e.onWarn : Zg,
        M = e,
        I = ke(M.__datetimeFormatters) ? M.__datetimeFormatters : new Map,
        V = ke(M.__numberFormatters) ? M.__numberFormatters : new Map,
        $ = ke(M.__meta) ? M.__meta : {};
    di++;
    const G = {
        version: t,
        cid: di,
        locale: n,
        fallbackLocale: r,
        messages: o,
        modifiers: i,
        pluralRules: l,
        missing: c,
        missingWarn: u,
        fallbackWarn: d,
        fallbackFormat: f,
        unresolving: h,
        postTranslation: g,
        processor: R,
        warnHtmlMessage: O,
        escapeParameter: b,
        messageCompiler: m,
        messageResolver: v,
        localeFallbacker: k,
        fallbackContext: w,
        onWarn: L,
        __meta: $
    };
    return G.datetimeFormats = s, G.numberFormats = a, G.__datetimeFormatters = I, G.__numberFormatters = V, __INTLIFY_PROD_DEVTOOLS__ && y_(G, t, $), G
}

function zs(e, t, n, r, o) {
    const {
        missing: s,
        onWarn: a
    } = e;
    if (s !== null) {
        const i = s(e, n, t, o);
        return B(i) ? i : t
    } else return t
}

function jn(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}
let bu = fu.__EXTEND_POINT__;
const Eo = () => ++bu,
    dn = {
        INVALID_ARGUMENT: bu,
        INVALID_DATE_ARGUMENT: Eo(),
        INVALID_ISO_DATE_ARGUMENT: Eo(),
        __EXTEND_POINT__: Eo()
    };

function hn(e) {
    return du(e, null, void 0)
}
const hi = () => "",
    pt = e => Re(e);

function mi(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: o,
        messageCompiler: s,
        fallbackLocale: a,
        messages: i
    } = e, [l, c] = Go(...t), u = ie(c.missingWarn) ? c.missingWarn : e.missingWarn, d = ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = ie(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, g = B(c.default) || ie(c.default) ? ie(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", R = n || g !== "", O = B(c.locale) ? c.locale : e.locale;
    f && L_(c);
    let [b, m, v] = h ? [l, O, i[O] || {}] : vu(e, l, O, a, d, u), k = b, w = l;
    if (!h && !(B(k) || pt(k)) && R && (k = g, w = k), !h && (!(B(k) || pt(k)) || !B(m))) return o ? Xr : l;
    let L = !1;
    const M = () => {
            L = !0
        },
        I = pt(k) ? k : Eu(e, l, m, k, w, M);
    if (L) return k;
    const V = F_(e, m, v, c),
        $ = g_(V),
        G = M_(e, I, $),
        U = r ? r(G, l) : G;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: B(l) ? l : pt(k) ? k.key : "",
            locale: m || (pt(k) ? k.locale : ""),
            format: B(k) ? k : pt(k) ? k.source : "",
            message: U
        };
        Z.meta = ze({}, e.__meta, O_() || {}), b_(Z)
    }
    return U
}

function L_(e) {
    Ee(e.list) ? e.list = e.list.map(t => B(t) ? oi(t) : t) : ke(e.named) && Object.keys(e.named).forEach(t => {
        B(e.named[t]) && (e.named[t] = oi(e.named[t]))
    })
}

function vu(e, t, n, r, o, s) {
    const {
        messages: a,
        onWarn: i,
        messageResolver: l,
        localeFallbacker: c
    } = e, u = c(e, r, n);
    let d = {},
        f, h = null;
    const g = "translate";
    for (let R = 0; R < u.length && (f = u[R], d = a[f] || {}, (h = l(d, t)) === null && (h = d[t]), !(B(h) || Re(h))); R++) {
        const O = zs(e, t, f, s, g);
        O !== t && (h = O)
    }
    return [h, f, d]
}

function Eu(e, t, n, r, o, s) {
    const {
        messageCompiler: a,
        warnHtmlMessage: i
    } = e;
    if (pt(r)) {
        const c = r;
        return c.locale = c.locale || n, c.key = c.key || t, c
    }
    if (a == null) {
        const c = () => r;
        return c.locale = n, c.key = t, c
    }
    const l = a(r, N_(e, n, o, r, i, s));
    return l.locale = n, l.key = t, l.source = r, l
}

function M_(e, t, n) {
    return t(n)
}

function Go(...e) {
    const [t, n, r] = e, o = {};
    if (!B(t) && !Le(t) && !pt(t)) throw hn(dn.INVALID_ARGUMENT);
    const s = Le(t) ? String(t) : (pt(t), t);
    return Le(n) ? o.plural = n : B(n) ? o.default = n : ee(n) && !Zr(n) ? o.named = n : Ee(n) && (o.list = n), Le(r) ? o.plural = r : B(r) ? o.default = r : ee(r) && ze(o, r), [s, o]
}

function N_(e, t, n, r, o, s) {
    return {
        warnHtmlMessage: o,
        onError: a => {
            throw s && s(a), a
        },
        onCacheKey: a => Jg(t, n, a)
    }
}

function F_(e, t, n, r) {
    const {
        modifiers: o,
        pluralRules: s,
        messageResolver: a,
        fallbackLocale: i,
        fallbackWarn: l,
        missingWarn: c,
        fallbackContext: u
    } = e, f = {
        locale: t,
        modifiers: o,
        pluralRules: s,
        messages: h => {
            let g = a(n, h);
            if (g == null && u) {
                const [, , R] = vu(u, h, t, i, l, c);
                g = a(R, h)
            }
            if (B(g)) {
                let R = !1;
                const b = Eu(e, h, t, g, h, () => {
                    R = !0
                });
                return R ? hi : b
            } else return pt(g) ? g : hi
        }
    };
    return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), Le(r.plural) && (f.pluralIndex = r.plural), f
}

function pi(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: o,
        onWarn: s,
        localeFallbacker: a
    } = e, {
        __datetimeFormatters: i
    } = e, [l, c, u, d] = Jo(...t), f = ie(u.missingWarn) ? u.missingWarn : e.missingWarn;
    ie(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const h = !!u.part,
        g = B(u.locale) ? u.locale : e.locale,
        R = a(e, o, g);
    if (!B(l) || l === "") return new Intl.DateTimeFormat(g, d).format(c);
    let O = {},
        b, m = null;
    const v = "datetime format";
    for (let L = 0; L < R.length && (b = R[L], O = n[b] || {}, m = O[l], !ee(m)); L++) zs(e, l, b, f, v);
    if (!ee(m) || !B(b)) return r ? Xr : l;
    let k = `${b}__${l}`;
    Zr(d) || (k = `${k}__${JSON.stringify(d)}`);
    let w = i.get(k);
    return w || (w = new Intl.DateTimeFormat(b, ze({}, m, d)), i.set(k, w)), h ? w.formatToParts(c) : w.format(c)
}
const ku = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Jo(...e) {
    const [t, n, r, o] = e, s = {};
    let a = {},
        i;
    if (B(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l) throw hn(dn.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        i = new Date(c);
        try {
            i.toISOString()
        } catch {
            throw hn(dn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Qg(t)) {
        if (isNaN(t.getTime())) throw hn(dn.INVALID_DATE_ARGUMENT);
        i = t
    } else if (Le(t)) i = t;
    else throw hn(dn.INVALID_ARGUMENT);
    return B(n) ? s.key = n : ee(n) && Object.keys(n).forEach(l => {
        ku.includes(l) ? a[l] = n[l] : s[l] = n[l]
    }), B(r) ? s.locale = r : ee(r) && (a = r), ee(o) && (a = o), [s.key || "", i, s, a]
}

function gi(e, t, n) {
    const r = e;
    for (const o in n) {
        const s = `${t}__${o}`;
        !r.__datetimeFormatters.has(s) || r.__datetimeFormatters.delete(s)
    }
}

function _i(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: o,
        onWarn: s,
        localeFallbacker: a
    } = e, {
        __numberFormatters: i
    } = e, [l, c, u, d] = Yo(...t), f = ie(u.missingWarn) ? u.missingWarn : e.missingWarn;
    ie(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const h = !!u.part,
        g = B(u.locale) ? u.locale : e.locale,
        R = a(e, o, g);
    if (!B(l) || l === "") return new Intl.NumberFormat(g, d).format(c);
    let O = {},
        b, m = null;
    const v = "number format";
    for (let L = 0; L < R.length && (b = R[L], O = n[b] || {}, m = O[l], !ee(m)); L++) zs(e, l, b, f, v);
    if (!ee(m) || !B(b)) return r ? Xr : l;
    let k = `${b}__${l}`;
    Zr(d) || (k = `${k}__${JSON.stringify(d)}`);
    let w = i.get(k);
    return w || (w = new Intl.NumberFormat(b, ze({}, m, d)), i.set(k, w)), h ? w.formatToParts(c) : w.format(c)
}
const wu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Yo(...e) {
    const [t, n, r, o] = e, s = {};
    let a = {};
    if (!Le(t)) throw hn(dn.INVALID_ARGUMENT);
    const i = t;
    return B(n) ? s.key = n : ee(n) && Object.keys(n).forEach(l => {
        wu.includes(l) ? a[l] = n[l] : s[l] = n[l]
    }), B(r) ? s.locale = r : ee(r) && (a = r), ee(o) && (a = o), [s.key || "", i, s, a]
}

function yi(e, t, n) {
    const r = e;
    for (const o in n) {
        const s = `${t}__${o}`;
        !r.__numberFormatters.has(s) || r.__numberFormatters.delete(s)
    }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Hs().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
 * vue-i18n v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const D_ = "9.2.2";

function H_() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Hs().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
let Tu = fu.__EXTEND_POINT__;
const Ge = () => ++Tu,
    Ie = {
        UNEXPECTED_RETURN_TYPE: Tu,
        INVALID_ARGUMENT: Ge(),
        MUST_BE_CALL_SETUP_TOP: Ge(),
        NOT_INSLALLED: Ge(),
        NOT_AVAILABLE_IN_LEGACY_MODE: Ge(),
        REQUIRED_VALUE: Ge(),
        INVALID_VALUE: Ge(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ge(),
        NOT_INSLALLED_WITH_PROVIDE: Ge(),
        UNEXPECTED_ERROR: Ge(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: Ge(),
        BRIDGE_SUPPORT_VUE_2_ONLY: Ge(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ge(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ge(),
        __EXTEND_POINT__: Ge()
    };

function Me(e, ...t) {
    return du(e, null, void 0)
}
const Qo = ln("__transrateVNode"),
    Zo = ln("__datetimeParts"),
    Xo = ln("__numberParts"),
    Cu = ln("__setPluralRules"),
    Ru = ln("__injectWithOption");

function es(e) {
    if (!ke(e)) return e;
    for (const t in e)
        if (!!js(e, t))
            if (!t.includes(".")) ke(e[t]) && es(e[t]);
            else {
                const n = t.split("."),
                    r = n.length - 1;
                let o = e;
                for (let s = 0; s < r; s++) n[s] in o || (o[n[s]] = {}), o = o[n[s]];
                o[n[r]] = e[t], delete e[t], ke(o[n[r]]) && es(o[n[r]])
            }
    return e
}

function eo(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: o,
        flatJson: s
    } = t, a = ee(n) ? n : Ee(r) ? {} : {
        [e]: {}
    };
    if (Ee(r) && r.forEach(i => {
            if ("locale" in i && "resource" in i) {
                const {
                    locale: l,
                    resource: c
                } = i;
                l ? (a[l] = a[l] || {}, Jn(c, a[l])) : Jn(c, a)
            } else B(i) && Jn(JSON.parse(i), a)
        }), o == null && s)
        for (const i in a) js(a, i) && es(a[i]);
    return a
}
const wr = e => !ke(e) || Ee(e);

function Jn(e, t) {
    if (wr(e) || wr(t)) throw Me(Ie.INVALID_VALUE);
    for (const n in e) js(e, n) && (wr(e[n]) || wr(t[n]) ? t[n] = e[n] : Jn(e[n], t[n]))
}

function Au(e) {
    return e.type
}

function Pu(e, t, n) {
    let r = ke(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (r = eo(globalThis.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const o = Object.keys(r);
    o.length && o.forEach(s => {
        e.mergeLocaleMessage(s, r[s])
    }); {
        if (ke(t.datetimeFormats)) {
            const s = Object.keys(t.datetimeFormats);
            s.length && s.forEach(a => {
                e.mergeDateTimeFormat(a, t.datetimeFormats[a])
            })
        }
        if (ke(t.numberFormats)) {
            const s = Object.keys(t.numberFormats);
            s.length && s.forEach(a => {
                e.mergeNumberFormat(a, t.numberFormats[a])
            })
        }
    }
}

function bi(e) {
    return Te(sn, null, e, 0)
}
const vi = "__INTLIFY_META__";
let Ei = 0;

function ki(e) {
    return (t, n, r, o) => e(n, r, it() || void 0, o)
}
const j_ = () => {
    const e = it();
    let t = null;
    return e && (t = Au(e)[vi]) ? {
        [vi]: t
    } : null
};

function Ws(e = {}, t) {
    const {
        __root: n
    } = e, r = n === void 0;
    let o = ie(e.inheritLocale) ? e.inheritLocale : !0;
    const s = De(n && o ? n.locale.value : B(e.locale) ? e.locale : ur),
        a = De(n && o ? n.fallbackLocale.value : B(e.fallbackLocale) || Ee(e.fallbackLocale) || ee(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value),
        i = De(eo(s.value, e)),
        l = De(ee(e.datetimeFormats) ? e.datetimeFormats : {
            [s.value]: {}
        }),
        c = De(ee(e.numberFormats) ? e.numberFormats : {
            [s.value]: {}
        });
    let u = n ? n.missingWarn : ie(e.missingWarn) || $t(e.missingWarn) ? e.missingWarn : !0,
        d = n ? n.fallbackWarn : ie(e.fallbackWarn) || $t(e.fallbackWarn) ? e.fallbackWarn : !0,
        f = n ? n.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0,
        h = !!e.fallbackFormat,
        g = Re(e.missing) ? e.missing : null,
        R = Re(e.missing) ? ki(e.missing) : null,
        O = Re(e.postTranslation) ? e.postTranslation : null,
        b = n ? n.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        m = !!e.escapeParameter;
    const v = n ? n.modifiers : ee(e.modifiers) ? e.modifiers : {};
    let k = e.pluralRules || n && n.pluralRules,
        w;
    w = (() => {
        r && fi(null);
        const E = {
            version: D_,
            locale: s.value,
            fallbackLocale: a.value,
            messages: i.value,
            modifiers: v,
            pluralRules: k,
            missing: R === null ? void 0 : R,
            missingWarn: u,
            fallbackWarn: d,
            fallbackFormat: h,
            unresolving: !0,
            postTranslation: O === null ? void 0 : O,
            warnHtmlMessage: b,
            escapeParameter: m,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            }
        };
        E.datetimeFormats = l.value, E.numberFormats = c.value, E.__datetimeFormatters = ee(w) ? w.__datetimeFormatters : void 0, E.__numberFormatters = ee(w) ? w.__numberFormatters : void 0;
        const C = S_(E);
        return r && fi(C), C
    })(), jn(w, s.value, a.value);

    function M() {
        return [s.value, a.value, i.value, l.value, c.value]
    }
    const I = pe({
            get: () => s.value,
            set: E => {
                s.value = E, w.locale = s.value
            }
        }),
        V = pe({
            get: () => a.value,
            set: E => {
                a.value = E, w.fallbackLocale = a.value, jn(w, s.value, E)
            }
        }),
        $ = pe(() => i.value),
        G = pe(() => l.value),
        U = pe(() => c.value);

    function Z() {
        return Re(O) ? O : null
    }

    function q(E) {
        O = E, w.postTranslation = E
    }

    function Pe() {
        return g
    }

    function te(E) {
        E !== null && (R = ki(E)), g = E, w.missing = R
    }
    const se = (E, C, K, J, re, ue) => {
        M();
        let ae;
        if (__INTLIFY_PROD_DEVTOOLS__) try {
            ui(j_()), r || (w.fallbackContext = n ? I_() : void 0), ae = E(w)
        } finally {
            ui(null), r || (w.fallbackContext = void 0)
        } else ae = E(w);
        if (Le(ae) && ae === Xr) {
            const [Ce, nt] = C();
            return n && f ? J(n) : re(Ce)
        } else {
            if (ue(ae)) return ae;
            throw Me(Ie.UNEXPECTED_RETURN_TYPE)
        }
    };

    function le(...E) {
        return se(C => Reflect.apply(mi, null, [C, ...E]), () => Go(...E), "translate", C => Reflect.apply(C.t, C, [...E]), C => C, C => B(C))
    }

    function We(...E) {
        const [C, K, J] = E;
        if (J && !ke(J)) throw Me(Ie.INVALID_ARGUMENT);
        return le(C, K, ze({
            resolvedMessage: !0
        }, J || {}))
    }

    function lt(...E) {
        return se(C => Reflect.apply(pi, null, [C, ...E]), () => Jo(...E), "datetime format", C => Reflect.apply(C.d, C, [...E]), () => li, C => B(C))
    }

    function xe(...E) {
        return se(C => Reflect.apply(_i, null, [C, ...E]), () => Yo(...E), "number format", C => Reflect.apply(C.n, C, [...E]), () => li, C => B(C))
    }

    function Ne(E) {
        return E.map(C => B(C) || Le(C) || ie(C) ? bi(String(C)) : C)
    }
    const It = {
        normalize: Ne,
        interpolate: E => E,
        type: "vnode"
    };

    function P(...E) {
        return se(C => {
            let K;
            const J = C;
            try {
                J.processor = It, K = Reflect.apply(mi, null, [J, ...E])
            } finally {
                J.processor = null
            }
            return K
        }, () => Go(...E), "translate", C => C[Qo](...E), C => [bi(C)], C => Ee(C))
    }

    function x(...E) {
        return se(C => Reflect.apply(_i, null, [C, ...E]), () => Yo(...E), "number format", C => C[Xo](...E), () => [], C => B(C) || Ee(C))
    }

    function z(...E) {
        return se(C => Reflect.apply(pi, null, [C, ...E]), () => Jo(...E), "datetime format", C => C[Zo](...E), () => [], C => B(C) || Ee(C))
    }

    function Y(E) {
        k = E, w.pluralRules = k
    }

    function oe(E, C) {
        const K = B(C) ? C : s.value,
            J = p(K);
        return w.messageResolver(J, E) !== null
    }

    function he(E) {
        let C = null;
        const K = mu(w, a.value, s.value);
        for (let J = 0; J < K.length; J++) {
            const re = i.value[K[J]] || {},
                ue = w.messageResolver(re, E);
            if (ue != null) {
                C = ue;
                break
            }
        }
        return C
    }

    function ne(E) {
        const C = he(E);
        return C != null ? C : n ? n.tm(E) || {} : {}
    }

    function p(E) {
        return i.value[E] || {}
    }

    function y(E, C) {
        i.value[E] = C, w.messages = i.value
    }

    function _(E, C) {
        i.value[E] = i.value[E] || {}, Jn(C, i.value[E]), w.messages = i.value
    }

    function T(E) {
        return l.value[E] || {}
    }

    function S(E, C) {
        l.value[E] = C, w.datetimeFormats = l.value, gi(w, E, C)
    }

    function F(E, C) {
        l.value[E] = ze(l.value[E] || {}, C), w.datetimeFormats = l.value, gi(w, E, C)
    }

    function W(E) {
        return c.value[E] || {}
    }

    function N(E, C) {
        c.value[E] = C, w.numberFormats = c.value, yi(w, E, C)
    }

    function D(E, C) {
        c.value[E] = ze(c.value[E] || {}, C), w.numberFormats = c.value, yi(w, E, C)
    }
    Ei++, n && Ko && (Ct(n.locale, E => {
        o && (s.value = E, w.locale = E, jn(w, s.value, a.value))
    }), Ct(n.fallbackLocale, E => {
        o && (a.value = E, w.fallbackLocale = E, jn(w, s.value, a.value))
    }));
    const A = {
        id: Ei,
        locale: I,
        fallbackLocale: V,
        get inheritLocale() {
            return o
        },
        set inheritLocale(E) {
            o = E, E && n && (s.value = n.locale.value, a.value = n.fallbackLocale.value, jn(w, s.value, a.value))
        },
        get availableLocales() {
            return Object.keys(i.value).sort()
        },
        messages: $,
        get modifiers() {
            return v
        },
        get pluralRules() {
            return k || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return u
        },
        set missingWarn(E) {
            u = E, w.missingWarn = u
        },
        get fallbackWarn() {
            return d
        },
        set fallbackWarn(E) {
            d = E, w.fallbackWarn = d
        },
        get fallbackRoot() {
            return f
        },
        set fallbackRoot(E) {
            f = E
        },
        get fallbackFormat() {
            return h
        },
        set fallbackFormat(E) {
            h = E, w.fallbackFormat = h
        },
        get warnHtmlMessage() {
            return b
        },
        set warnHtmlMessage(E) {
            b = E, w.warnHtmlMessage = E
        },
        get escapeParameter() {
            return m
        },
        set escapeParameter(E) {
            m = E, w.escapeParameter = E
        },
        t: le,
        getLocaleMessage: p,
        setLocaleMessage: y,
        mergeLocaleMessage: _,
        getPostTranslationHandler: Z,
        setPostTranslationHandler: q,
        getMissingHandler: Pe,
        setMissingHandler: te,
        [Cu]: Y
    };
    return A.datetimeFormats = G, A.numberFormats = U, A.rt = We, A.te = oe, A.tm = ne, A.d = lt, A.n = xe, A.getDateTimeFormat = T, A.setDateTimeFormat = S, A.mergeDateTimeFormat = F, A.getNumberFormat = W, A.setNumberFormat = N, A.mergeNumberFormat = D, A[Ru] = e.__injectWithOption, A[Qo] = P, A[Zo] = z, A[Xo] = x, A
}

function U_(e) {
    const t = B(e.locale) ? e.locale : ur,
        n = B(e.fallbackLocale) || Ee(e.fallbackLocale) || ee(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
        r = Re(e.missing) ? e.missing : void 0,
        o = ie(e.silentTranslationWarn) || $t(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
        s = ie(e.silentFallbackWarn) || $t(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
        a = ie(e.fallbackRoot) ? e.fallbackRoot : !0,
        i = !!e.formatFallbackMessages,
        l = ee(e.modifiers) ? e.modifiers : {},
        c = e.pluralizationRules,
        u = Re(e.postTranslation) ? e.postTranslation : void 0,
        d = B(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
        f = !!e.escapeParameterHtml,
        h = ie(e.sync) ? e.sync : !0;
    let g = e.messages;
    if (ee(e.sharedMessages)) {
        const w = e.sharedMessages;
        g = Object.keys(w).reduce((M, I) => {
            const V = M[I] || (M[I] = {});
            return ze(V, w[I]), M
        }, g || {})
    }
    const {
        __i18n: R,
        __root: O,
        __injectWithOption: b
    } = e, m = e.datetimeFormats, v = e.numberFormats, k = e.flatJson;
    return {
        locale: t,
        fallbackLocale: n,
        messages: g,
        flatJson: k,
        datetimeFormats: m,
        numberFormats: v,
        missing: r,
        missingWarn: o,
        fallbackWarn: s,
        fallbackRoot: a,
        fallbackFormat: i,
        modifiers: l,
        pluralRules: c,
        postTranslation: u,
        warnHtmlMessage: d,
        escapeParameter: f,
        messageResolver: e.messageResolver,
        inheritLocale: h,
        __i18n: R,
        __root: O,
        __injectWithOption: b
    }
}

function ts(e = {}, t) {
    {
        const n = Ws(U_(e)),
            r = {
                id: n.id,
                get locale() {
                    return n.locale.value
                },
                set locale(o) {
                    n.locale.value = o
                },
                get fallbackLocale() {
                    return n.fallbackLocale.value
                },
                set fallbackLocale(o) {
                    n.fallbackLocale.value = o
                },
                get messages() {
                    return n.messages.value
                },
                get datetimeFormats() {
                    return n.datetimeFormats.value
                },
                get numberFormats() {
                    return n.numberFormats.value
                },
                get availableLocales() {
                    return n.availableLocales
                },
                get formatter() {
                    return {
                        interpolate() {
                            return []
                        }
                    }
                },
                set formatter(o) {},
                get missing() {
                    return n.getMissingHandler()
                },
                set missing(o) {
                    n.setMissingHandler(o)
                },
                get silentTranslationWarn() {
                    return ie(n.missingWarn) ? !n.missingWarn : n.missingWarn
                },
                set silentTranslationWarn(o) {
                    n.missingWarn = ie(o) ? !o : o
                },
                get silentFallbackWarn() {
                    return ie(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
                },
                set silentFallbackWarn(o) {
                    n.fallbackWarn = ie(o) ? !o : o
                },
                get modifiers() {
                    return n.modifiers
                },
                get formatFallbackMessages() {
                    return n.fallbackFormat
                },
                set formatFallbackMessages(o) {
                    n.fallbackFormat = o
                },
                get postTranslation() {
                    return n.getPostTranslationHandler()
                },
                set postTranslation(o) {
                    n.setPostTranslationHandler(o)
                },
                get sync() {
                    return n.inheritLocale
                },
                set sync(o) {
                    n.inheritLocale = o
                },
                get warnHtmlInMessage() {
                    return n.warnHtmlMessage ? "warn" : "off"
                },
                set warnHtmlInMessage(o) {
                    n.warnHtmlMessage = o !== "off"
                },
                get escapeParameterHtml() {
                    return n.escapeParameter
                },
                set escapeParameterHtml(o) {
                    n.escapeParameter = o
                },
                get preserveDirectiveContent() {
                    return !0
                },
                set preserveDirectiveContent(o) {},
                get pluralizationRules() {
                    return n.pluralRules || {}
                },
                __composer: n,
                t(...o) {
                    const [s, a, i] = o, l = {};
                    let c = null,
                        u = null;
                    if (!B(s)) throw Me(Ie.INVALID_ARGUMENT);
                    const d = s;
                    return B(a) ? l.locale = a : Ee(a) ? c = a : ee(a) && (u = a), Ee(i) ? c = i : ee(i) && (u = i), Reflect.apply(n.t, n, [d, c || u || {}, l])
                },
                rt(...o) {
                    return Reflect.apply(n.rt, n, [...o])
                },
                tc(...o) {
                    const [s, a, i] = o, l = {
                        plural: 1
                    };
                    let c = null,
                        u = null;
                    if (!B(s)) throw Me(Ie.INVALID_ARGUMENT);
                    const d = s;
                    return B(a) ? l.locale = a : Le(a) ? l.plural = a : Ee(a) ? c = a : ee(a) && (u = a), B(i) ? l.locale = i : Ee(i) ? c = i : ee(i) && (u = i), Reflect.apply(n.t, n, [d, c || u || {}, l])
                },
                te(o, s) {
                    return n.te(o, s)
                },
                tm(o) {
                    return n.tm(o)
                },
                getLocaleMessage(o) {
                    return n.getLocaleMessage(o)
                },
                setLocaleMessage(o, s) {
                    n.setLocaleMessage(o, s)
                },
                mergeLocaleMessage(o, s) {
                    n.mergeLocaleMessage(o, s)
                },
                d(...o) {
                    return Reflect.apply(n.d, n, [...o])
                },
                getDateTimeFormat(o) {
                    return n.getDateTimeFormat(o)
                },
                setDateTimeFormat(o, s) {
                    n.setDateTimeFormat(o, s)
                },
                mergeDateTimeFormat(o, s) {
                    n.mergeDateTimeFormat(o, s)
                },
                n(...o) {
                    return Reflect.apply(n.n, n, [...o])
                },
                getNumberFormat(o) {
                    return n.getNumberFormat(o)
                },
                setNumberFormat(o, s) {
                    n.setNumberFormat(o, s)
                },
                mergeNumberFormat(o, s) {
                    n.mergeNumberFormat(o, s)
                },
                getChoiceIndex(o, s) {
                    return -1
                },
                __onComponentInstanceCreated(o) {
                    const {
                        componentInstanceCreatedListener: s
                    } = e;
                    s && s(o, r)
                }
            };
        return r
    }
}
const xs = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function z_({
    slots: e
}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => r = [...r, ...Ee(o.children) ? o.children : [o]], []) : t.reduce((n, r) => {
        const o = e[r];
        return o && (n[r] = o()), n
    }, {})
}

function Ou(e) {
    return Ve
}
const wi = {
    name: "i18n-t",
    props: ze({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => Le(e) || !isNaN(e)
        }
    }, xs),
    setup(e, t) {
        const {
            slots: n,
            attrs: r
        } = t, o = e.i18n || Bs({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const s = Object.keys(n).filter(d => d !== "_"),
                a = {};
            e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = B(e.plural) ? +e.plural : e.plural);
            const i = z_(t, s),
                l = o[Qo](e.keypath, i, a),
                c = ze({}, r),
                u = B(e.tag) || ke(e.tag) ? e.tag : Ou();
            return Ke(u, c, l)
        }
    }
};

function W_(e) {
    return Ee(e) && !B(e[0])
}

function Iu(e, t, n, r) {
    const {
        slots: o,
        attrs: s
    } = t;
    return () => {
        const a = {
            part: !0
        };
        let i = {};
        e.locale && (a.locale = e.locale), B(e.format) ? a.key = e.format : ke(e.format) && (B(e.format.key) && (a.key = e.format.key), i = Object.keys(e.format).reduce((f, h) => n.includes(h) ? ze({}, f, {
            [h]: e.format[h]
        }) : f, {}));
        const l = r(e.value, a, i);
        let c = [a.key];
        Ee(l) ? c = l.map((f, h) => {
            const g = o[f.type],
                R = g ? g({
                    [f.type]: f.value,
                    index: h,
                    parts: l
                }) : [f.value];
            return W_(R) && (R[0].key = `${f.type}-${h}`), R
        }) : B(l) && (c = [l]);
        const u = ze({}, s),
            d = B(e.tag) || ke(e.tag) ? e.tag : Ou();
        return Ke(d, u, c)
    }
}
const Ti = {
        name: "i18n-n",
        props: ze({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, xs),
        setup(e, t) {
            const n = e.i18n || Bs({
                useScope: "parent",
                __useComponent: !0
            });
            return Iu(e, t, wu, (...r) => n[Xo](...r))
        }
    },
    Ci = {
        name: "i18n-d",
        props: ze({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, xs),
        setup(e, t) {
            const n = e.i18n || Bs({
                useScope: "parent",
                __useComponent: !0
            });
            return Iu(e, t, ku, (...r) => n[Zo](...r))
        }
    };

function x_(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global; {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function B_(e) {
    const t = a => {
        const {
            instance: i,
            modifiers: l,
            value: c
        } = a;
        if (!i || !i.$) throw Me(Ie.UNEXPECTED_ERROR);
        const u = x_(e, i.$),
            d = Ri(c);
        return [Reflect.apply(u.t, u, [...Ai(d)]), u]
    };
    return {
        created: (a, i) => {
            const [l, c] = t(i);
            Ko && e.global === c && (a.__i18nWatcher = Ct(c.locale, () => {
                i.instance && i.instance.$forceUpdate()
            })), a.__composer = c, a.textContent = l
        },
        unmounted: a => {
            Ko && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer)
        },
        beforeUpdate: (a, {
            value: i
        }) => {
            if (a.__composer) {
                const l = a.__composer,
                    c = Ri(i);
                a.textContent = Reflect.apply(l.t, l, [...Ai(c)])
            }
        },
        getSSRProps: a => {
            const [i] = t(a);
            return {
                textContent: i
            }
        }
    }
}

function Ri(e) {
    if (B(e)) return {
        path: e
    };
    if (ee(e)) {
        if (!("path" in e)) throw Me(Ie.REQUIRED_VALUE, "path");
        return e
    } else throw Me(Ie.INVALID_VALUE)
}

function Ai(e) {
    const {
        path: t,
        locale: n,
        args: r,
        choice: o,
        plural: s
    } = e, a = {}, i = r || {};
    return B(n) && (a.locale = n), Le(o) && (a.plural = o), Le(s) && (a.plural = s), [t, i, a]
}

function V_(e, t, ...n) {
    const r = ee(n[0]) ? n[0] : {},
        o = !!r.useI18nComponentName;
    (ie(r.globalInstall) ? r.globalInstall : !0) && (e.component(o ? "i18n" : wi.name, wi), e.component(Ti.name, Ti), e.component(Ci.name, Ci)), e.directive("t", B_(t))
}

function $_(e, t, n) {
    return {
        beforeCreate() {
            const r = it();
            if (!r) throw Me(Ie.UNEXPECTED_ERROR);
            const o = this.$options;
            if (o.i18n) {
                const s = o.i18n;
                o.__i18n && (s.__i18n = o.__i18n), s.__root = t, this === this.$root ? this.$i18n = Pi(e, s) : (s.__injectWithOption = !0, this.$i18n = ts(s))
            } else o.__i18n ? this === this.$root ? this.$i18n = Pi(e, o) : this.$i18n = ts({
                __i18n: o.__i18n,
                __injectWithOption: !0,
                __root: t
            }) : this.$i18n = e;
            o.__i18nGlobal && Pu(t, o, o), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(r, this.$i18n), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, a) => this.$i18n.te(s, a), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = s => this.$i18n.tm(s)
        },
        mounted() {},
        unmounted() {
            const r = it();
            if (!r) throw Me(Ie.UNEXPECTED_ERROR);
            delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(r), delete this.$i18n
        }
    }
}

function Pi(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Cu](t.pluralizationRules || e.pluralizationRules);
    const n = eo(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
}
const q_ = ln("global-vue-i18n");

function K_(e = {}, t) {
    const n = ie(e.legacy) ? e.legacy : !0,
        r = ie(e.globalInjection) ? e.globalInjection : !0,
        o = n ? !!e.allowComposition : !0,
        s = new Map,
        [a, i] = G_(e, n),
        l = ln("");

    function c(f) {
        return s.get(f) || null
    }

    function u(f, h) {
        s.set(f, h)
    }

    function d(f) {
        s.delete(f)
    } {
        const f = {
            get mode() {
                return n ? "legacy" : "composition"
            },
            get allowComposition() {
                return o
            },
            async install(h, ...g) {
                h.__VUE_I18N_SYMBOL__ = l, h.provide(h.__VUE_I18N_SYMBOL__, f), !n && r && ry(h, f.global), V_(h, f, ...g), n && h.mixin($_(i, i.__composer, f));
                const R = h.unmount;
                h.unmount = () => {
                    f.dispose(), R()
                }
            },
            get global() {
                return i
            },
            dispose() {
                a.stop()
            },
            __instances: s,
            __getInstance: c,
            __setInstance: u,
            __deleteInstance: d
        };
        return f
    }
}

function Bs(e = {}) {
    const t = it();
    if (t == null) throw Me(Ie.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Me(Ie.NOT_INSLALLED);
    const n = J_(t),
        r = Q_(n),
        o = Au(t),
        s = Y_(e, o);
    if (n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition) throw Me(Ie.NOT_AVAILABLE_IN_LEGACY_MODE);
        return ey(t, s, r, e)
    }
    if (s === "global") return Pu(r, e, o), r;
    if (s === "parent") {
        let l = Z_(n, t, e.__useComponent);
        return l == null && (l = r), l
    }
    const a = n;
    let i = a.__getInstance(t);
    if (i == null) {
        const l = ze({}, e);
        "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = Ws(l), X_(a, t), a.__setInstance(t, i)
    }
    return i
}

function G_(e, t, n) {
    const r = qu(); {
        const o = t ? r.run(() => ts(e)) : r.run(() => Ws(e));
        if (o == null) throw Me(Ie.UNEXPECTED_ERROR);
        return [r, o]
    }
}

function J_(e) {
    {
        const t = $e(e.isCE ? q_ : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw Me(e.isCE ? Ie.NOT_INSLALLED_WITH_PROVIDE : Ie.UNEXPECTED_ERROR);
        return t
    }
}

function Y_(e, t) {
    return Zr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function Q_(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function Z_(e, t, n = !1) {
    let r = null;
    const o = t.root;
    let s = t.parent;
    for (; s != null;) {
        const a = e;
        if (e.mode === "composition") r = a.__getInstance(s);
        else {
            const i = a.__getInstance(s);
            i != null && (r = i.__composer, n && r && !r[Ru] && (r = null))
        }
        if (r != null || o === s) break;
        s = s.parent
    }
    return r
}

function X_(e, t, n) {
    ir(() => {}, t), ws(() => {
        e.__deleteInstance(t)
    }, t)
}

function ey(e, t, n, r = {}) {
    const o = t === "local",
        s = Pr(null);
    if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Me(Ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const a = ie(r.inheritLocale) ? r.inheritLocale : !0,
        i = De(o && a ? n.locale.value : B(r.locale) ? r.locale : ur),
        l = De(o && a ? n.fallbackLocale.value : B(r.fallbackLocale) || Ee(r.fallbackLocale) || ee(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value),
        c = De(eo(i.value, r)),
        u = De(ee(r.datetimeFormats) ? r.datetimeFormats : {
            [i.value]: {}
        }),
        d = De(ee(r.numberFormats) ? r.numberFormats : {
            [i.value]: {}
        }),
        f = o ? n.missingWarn : ie(r.missingWarn) || $t(r.missingWarn) ? r.missingWarn : !0,
        h = o ? n.fallbackWarn : ie(r.fallbackWarn) || $t(r.fallbackWarn) ? r.fallbackWarn : !0,
        g = o ? n.fallbackRoot : ie(r.fallbackRoot) ? r.fallbackRoot : !0,
        R = !!r.fallbackFormat,
        O = Re(r.missing) ? r.missing : null,
        b = Re(r.postTranslation) ? r.postTranslation : null,
        m = o ? n.warnHtmlMessage : ie(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
        v = !!r.escapeParameter,
        k = o ? n.modifiers : ee(r.modifiers) ? r.modifiers : {},
        w = r.pluralRules || o && n.pluralRules;

    function L() {
        return [i.value, l.value, c.value, u.value, d.value]
    }
    const M = pe({
            get: () => s.value ? s.value.locale.value : i.value,
            set: _ => {
                s.value && (s.value.locale.value = _), i.value = _
            }
        }),
        I = pe({
            get: () => s.value ? s.value.fallbackLocale.value : l.value,
            set: _ => {
                s.value && (s.value.fallbackLocale.value = _), l.value = _
            }
        }),
        V = pe(() => s.value ? s.value.messages.value : c.value),
        $ = pe(() => u.value),
        G = pe(() => d.value);

    function U() {
        return s.value ? s.value.getPostTranslationHandler() : b
    }

    function Z(_) {
        s.value && s.value.setPostTranslationHandler(_)
    }

    function q() {
        return s.value ? s.value.getMissingHandler() : O
    }

    function Pe(_) {
        s.value && s.value.setMissingHandler(_)
    }

    function te(_) {
        return L(), _()
    }

    function se(..._) {
        return s.value ? te(() => Reflect.apply(s.value.t, null, [..._])) : te(() => "")
    }

    function le(..._) {
        return s.value ? Reflect.apply(s.value.rt, null, [..._]) : ""
    }

    function We(..._) {
        return s.value ? te(() => Reflect.apply(s.value.d, null, [..._])) : te(() => "")
    }

    function lt(..._) {
        return s.value ? te(() => Reflect.apply(s.value.n, null, [..._])) : te(() => "")
    }

    function xe(_) {
        return s.value ? s.value.tm(_) : {}
    }

    function Ne(_, T) {
        return s.value ? s.value.te(_, T) : !1
    }

    function vt(_) {
        return s.value ? s.value.getLocaleMessage(_) : {}
    }

    function It(_, T) {
        s.value && (s.value.setLocaleMessage(_, T), c.value[_] = T)
    }

    function P(_, T) {
        s.value && s.value.mergeLocaleMessage(_, T)
    }

    function x(_) {
        return s.value ? s.value.getDateTimeFormat(_) : {}
    }

    function z(_, T) {
        s.value && (s.value.setDateTimeFormat(_, T), u.value[_] = T)
    }

    function Y(_, T) {
        s.value && s.value.mergeDateTimeFormat(_, T)
    }

    function oe(_) {
        return s.value ? s.value.getNumberFormat(_) : {}
    }

    function he(_, T) {
        s.value && (s.value.setNumberFormat(_, T), d.value[_] = T)
    }

    function ne(_, T) {
        s.value && s.value.mergeNumberFormat(_, T)
    }
    const p = {
        get id() {
            return s.value ? s.value.id : -1
        },
        locale: M,
        fallbackLocale: I,
        messages: V,
        datetimeFormats: $,
        numberFormats: G,
        get inheritLocale() {
            return s.value ? s.value.inheritLocale : a
        },
        set inheritLocale(_) {
            s.value && (s.value.inheritLocale = _)
        },
        get availableLocales() {
            return s.value ? s.value.availableLocales : Object.keys(c.value)
        },
        get modifiers() {
            return s.value ? s.value.modifiers : k
        },
        get pluralRules() {
            return s.value ? s.value.pluralRules : w
        },
        get isGlobal() {
            return s.value ? s.value.isGlobal : !1
        },
        get missingWarn() {
            return s.value ? s.value.missingWarn : f
        },
        set missingWarn(_) {
            s.value && (s.value.missingWarn = _)
        },
        get fallbackWarn() {
            return s.value ? s.value.fallbackWarn : h
        },
        set fallbackWarn(_) {
            s.value && (s.value.missingWarn = _)
        },
        get fallbackRoot() {
            return s.value ? s.value.fallbackRoot : g
        },
        set fallbackRoot(_) {
            s.value && (s.value.fallbackRoot = _)
        },
        get fallbackFormat() {
            return s.value ? s.value.fallbackFormat : R
        },
        set fallbackFormat(_) {
            s.value && (s.value.fallbackFormat = _)
        },
        get warnHtmlMessage() {
            return s.value ? s.value.warnHtmlMessage : m
        },
        set warnHtmlMessage(_) {
            s.value && (s.value.warnHtmlMessage = _)
        },
        get escapeParameter() {
            return s.value ? s.value.escapeParameter : v
        },
        set escapeParameter(_) {
            s.value && (s.value.escapeParameter = _)
        },
        t: se,
        getPostTranslationHandler: U,
        setPostTranslationHandler: Z,
        getMissingHandler: q,
        setMissingHandler: Pe,
        rt: le,
        d: We,
        n: lt,
        tm: xe,
        te: Ne,
        getLocaleMessage: vt,
        setLocaleMessage: It,
        mergeLocaleMessage: P,
        getDateTimeFormat: x,
        setDateTimeFormat: z,
        mergeDateTimeFormat: Y,
        getNumberFormat: oe,
        setNumberFormat: he,
        mergeNumberFormat: ne
    };

    function y(_) {
        _.locale.value = i.value, _.fallbackLocale.value = l.value, Object.keys(c.value).forEach(T => {
            _.mergeLocaleMessage(T, c.value[T])
        }), Object.keys(u.value).forEach(T => {
            _.mergeDateTimeFormat(T, u.value[T])
        }), Object.keys(d.value).forEach(T => {
            _.mergeNumberFormat(T, d.value[T])
        }), _.escapeParameter = v, _.fallbackFormat = R, _.fallbackRoot = g, _.fallbackWarn = h, _.missingWarn = f, _.warnHtmlMessage = m
    }
    return sc(() => {
        if (e.proxy == null || e.proxy.$i18n == null) throw Me(Ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const _ = s.value = e.proxy.$i18n.__composer;
        t === "global" ? (i.value = _.locale.value, l.value = _.fallbackLocale.value, c.value = _.messages.value, u.value = _.datetimeFormats.value, d.value = _.numberFormats.value) : o && y(_)
    }), p
}
const ty = ["locale", "fallbackLocale", "availableLocales"],
    ny = ["t", "rt", "d", "n", "tm"];

function ry(e, t) {
    const n = Object.create(null);
    ty.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o) throw Me(Ie.UNEXPECTED_ERROR);
        const s = Oe(o.value) ? {
            get() {
                return o.value.value
            },
            set(a) {
                o.value.value = a
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, r, s)
    }), e.config.globalProperties.$i18n = n, ny.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o || !o.value) throw Me(Ie.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${r}`, o)
    })
}
A_(l_);
P_(mu);
H_();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = Hs();
    e.__INTLIFY__ = !0, __(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const oy = () => Promise.resolve({
        fallbackLocale: "en",
        messages: {
            en: {
                add_to_google_calendar: "Add to Google Calendar",
                add_to_outlook_ical: "Add to Outlook / iCal",
                additional_information: "Additional Information",
                anything_youd_like_to_know_before_appointment: "Is there anything you would like us to know before your appointment?",
                appointment_request_form: "Appointment Request Form",
                appointment_requested: "Appointment Requested",
                available_starting_times_for: "Available Starting times for",
                book_appointment: "Book Appointment",
                cancel: "Cancel",
                cannot_find_calendar: "Cannot find calendar.",
                contact_you_shortly_with_contact_method: "We will contact you shortly to confirm your request. Please call our office at {contactMethod} if you have any questions.",
                date_of_birth: "Date of birth",
                email: "Email",
                first_name: "First Name",
                go_to_next_month: "View next month",
                last_name: "Last Name",
                load_more: "Load More",
                location: "Location",
                location_is_required: "Location is required.",
                next_month: "Next month",
                no_calendar_event_found: "No calendar event found",
                no_slot_available_this_month: "No slot available this month.",
                no_slots_available: "No Slots available",
                no_timezone_found: "No Timezone found!",
                payment: "Payment",
                phone: "Phone",
                pick_a_date_and_time: "Pick a Date and Time",
                please_choose_at_least_one_option: "Please choose at least one option",
                previous_month: "Previous month",
                reschedule_current_time: "Reschedule (Current time: {time})",
                search: "Search",
                secure_payment: "Secure Payment",
                select_date: "Select Date",
                select_time: "Select time",
                skip: "Skip",
                submit: "Submit",
                thank_you: "Thank You",
                thank_you_for_your_appointment_request: "Thank you for your appointment request. ",
                this_field_is_required: "This field is required.",
                unable_to_fetch_calendar: "Unable to find calendar",
                unable_to_schedule_appointment: "We were unable to schedule your appointment. Please try again.",
                DURATION: "DURATION",
                DATEANDTIME: "DATE & TIME",
                REPEATS: "REPEATS",
                type_here_to_search_timezone: "Type here to search timezone",
                OLD: "OLD",
                continue: "Continue",
                fetching_slots: "Finding slots...",
                fetching_recurring_slots: "Finding recurring slots...",
                schedule_meeting: "Schedule Meeting",
                scheduling: "Scheduling...",
                reschedule: "Reschedule",
                rescheduling: "Rescheduling...",
                cancel_appointment: "Cancel Appointment",
                cancelling: "Cancelling...",
                back: "Back",
                enter_your_information: "Enter Your Information",
                finding_open_available_slots: "Finding Open Available Slots...",
                no_slots_available_in: "No slots available in",
                select_a_date: "Select a Date",
                choose_time_slot: "Choose Time Slot",
                select_a_date_and_time: "Select a Date & Time",
                cancellation_reason: "Cancellation Reason",
                your_appointment_has_been_cancelled: "Your meeting has been cancelled.",
                more: "more...",
                less: "less",
                your_meeting_has_been_rescheduled: "Your Meeting has been Rescheduled",
                your_meeting_has_been_scheduled: "Your Meeting has been Scheduled",
                am: "AM",
                pm: "PM",
                hr: "Hr",
                minutes: "Minutes",
                january: "January",
                february: "February",
                march: "March",
                april: "April",
                may: "May",
                june: "June",
                july: "July",
                august: "August",
                september: "September",
                october: "October",
                november: "November",
                december: "December",
                sunday: "Sunday",
                monday: "Monday",
                tuesday: "Tuesday",
                wednesday: "Wednesday",
                thursday: "Thursday",
                friday: "Friday",
                saturday: "Saturday",
                timezone: "Timezone"
            },
            da: {
                add_to_google_calendar: "Tilf\xF8j til Google kalender",
                add_to_outlook_ical: "Tilf\xF8j til Outlook /iCal",
                additional_information: "Yderligere information",
                anything_youd_like_to_know_before_appointment: "Er der noget du har lyst til at tilf\xF8je inden din aftale?",
                appointment_request_form: "Aftale formular",
                appointment_requested: "Foresp\xF8rgsel p\xE5 aftale",
                available_starting_times_for: "Tilg\xE6ngelige starttidspunkter",
                book_appointment: "Book aftale",
                cancel: "Slet",
                cannot_find_calendar: "Kan ikke finde kalender",
                contact_you_shortly_with_contact_method: "Jeg bekr\xE6fte din aftale snarest. Ring venligst p\xE5 {contactMethod} hvis du har nogle sp\xF8rgsm\xE5l.",
                date_of_birth: "F\xF8dselsdato",
                email: "Email",
                first_name: "Fornavn",
                go_to_next_month: "G\xE5 til n\xE6ste m\xE5ned",
                last_name: "Efternavn",
                load_more: "Hent flere",
                location: "Lokation",
                location_is_required: "Mangler lokation.",
                next_month: "N\xE6ste m\xE5ned",
                no_calendar_event_found: "Der er ingen aftaler fundet",
                no_slot_available_this_month: "Der er ingen tider ledige denne m\xE5ned.",
                no_slots_available: "Ingen tider tilg\xE6ngelige",
                no_timezone_found: "Ingen tidszone fundet!",
                payment: "Betaling",
                phone: "Mobil",
                pick_a_date_and_time: "V\xE6lg dato og tidspunkt",
                please_choose_at_least_one_option: "V\xE6lg venligst en mulighed",
                previous_month: "Forrige m\xE5ned",
                reschedule_current_time: "\xC6ndre tidspunktet. (Nuv\xE6rende tid): {time}",
                search: "S\xF8g",
                secure_payment: "Sikker betaling",
                select_date: "V\xE6lg dato",
                select_time: "V\xE6lg tidspunkt",
                skip: "Spring over",
                submit: "Afslut",
                thank_you: "Mange tak",
                thank_you_for_your_appointment_request: "Tak for din foresp\xF8rgsel.",
                this_field_is_required: "Dette felt er p\xE5kr\xE6vet.",
                unable_to_fetch_calendar: "Kalender ikke fundet",
                unable_to_schedule_appointment: "Vi kunne ikke registrere din aftale. Pr\xF8v venligst igen.",
                DURATION: "Tid",
                DATEANDTIME: "Dato & tidspunkt",
                type_here_to_search_timezone: "Indtast her for at s\xF8ge tidszone",
                OLD: "gammel",
                continue: "Forts\xE6t",
                fetching_slots: "S\xF8ger efter tider",
                fetching_recurring_slots: "At finde tilbagevendende slots",
                schedule_meeting: "Book en aftale",
                scheduling: "Registrerer",
                reschedule: "\xC6ndre aftalen",
                rescheduling: "\xC6ndrer aftalen...",
                cancel_appointment: "Slet aftale",
                cancelling: "Sletter aftale...",
                back: "Tilbage",
                enter_your_information: "Indtast din information",
                finding_open_available_slots: "S\xF8ger efter tilg\xE6ngelige tider...",
                no_slots_available_in: "Der er ingen tilg\xE6ngelige tider",
                select_a_date: "V\xE6lg dato",
                choose_time_slot: "V\xE6lg tidspunkt",
                select_a_date_and_time: "V\xE6lg dato og tidspunkt",
                cancellation_reason: "Hvad er grunden til din afbestilling?",
                your_appointment_has_been_cancelled: "Din aftale er blevet afbestilt.",
                more: "Mere...",
                less: "Mindre",
                your_meeting_has_been_rescheduled: "Din aftale er blevet \xE6ndret",
                your_meeting_has_been_scheduled: "Din aftale er registreret"
            },
            de: {
                add_to_google_calendar: "Zum Google-Kalender hinzuf\xFCgen",
                add_to_outlook_ical: "Zu Outlook / iCal hinzuf\xFCgen",
                additional_information: "Zus\xE4tzliche Informationen",
                appointment_request_form: "Formular f\xFCr Terminanfragen",
                appointment_requested: "Termin angefragt",
                available_starting_times_for: "Verf\xFCgbare Startzeiten f\xFCr",
                book_appointment: "Termin buchen",
                cancel: "Stornieren",
                cannot_find_calendar: "Kalender nicht gefunden",
                contact_you_shortly_with_contact_method: "Wir werden Sie in K\xFCrze kontaktieren, um Ihre Anfrage zu best\xE4tigen. Bitte rufen Sie unser B\xFCro unter {contactMethod} an, wenn Sie Fragen haben.",
                date_of_birth: "Geburtsdatum",
                email: "E-Mail",
                first_name: "Vorname",
                go_to_next_month: "Zum n\xE4chsten Monat gehen",
                last_name: "Nachname",
                load_more: "Mehr laden",
                location: "location",
                location_is_required: "Standort ist erforderlich",
                next_month: "N\xE4chster Monat",
                no_calendar_event_found: "Kein Kalenderereignis gefunden",
                no_slot_available_this_month: "Diesen Monat ist kein Slot verf\xFCgbar",
                no_slots_available: "Keine Slots verf\xFCgbar",
                no_timezone_found: "Keine Zeitzone gefunden!",
                Zahlung: "Zahlung",
                Telefon: "Telefon",
                pick_a_date_and_time: "W\xE4hlen Sie ein Datum und eine Uhrzeit",
                please_choose_at_least_one_option: "Bitte w\xE4hlen Sie mindestens eine Option",
                vorheriger_Monat: "Vormonat",
                reschedule_current_time: "Umplanen (Aktueller Zeitpunkt: {time})",
                search: "Suche",
                secure_payment: "Sichere Zahlung",
                select_date: "Datum ausw\xE4hlen",
                select_time: "Zeit ausw\xE4hlen",
                skip: "\xFCberspringe",
                submit: "best\xE4tigen",
                thank_you: "Vielen Dank",
                thank_you_for_your_appointment_request: "Vielen Dank f\xFCr Ihre Terminanfrage. ",
                this_field_is_required: "Dieses Feld ist erforderlich.",
                unable_to_fetch_calendar: "Kann den Kalender nicht finden",
                unable_to_schedule_appointment: "Wir konnten Ihren Termin nicht planen. Bitte versuchen Sie es erneut.",
                DURATION: "DAUER",
                DATEANDTIME: "DATUM & ZEIT",
                type_here_to_search_timezone: "Geben Sie hier ein, um die Zeitzone zu suchen",
                continue: "Weiter",
                fetching_slots: "Slots finden",
                fetching_recurring_slots: "Wiederkehrende Slots finden",
                schedule_meeting: "Besprechung einplanen",
                scheduling: "Terminplanung...",
                reschedule: "Umplanen",
                rescheduling: "Rescheduling...",
                cancel_appointment: "Termin stornieren",
                cancelling: "Stornieren...",
                back: "Zur\xFCck",
                enter_your_information: "Geben Sie Ihre Informationen ein",
                finding_open_available_slots: "Suche nach freien Terminen...",
                no_slots_available_in: "Keine Termine verf\xFCgbar in",
                select_a_date: "W\xE4hlen Sie ein Datum",
                choose_time_slot: "Zeitfenster w\xE4hlen",
                select_a_date_and_time: "W\xE4hlen Sie ein Datum und eine Uhrzeit",
                cancellation_reason: "Stornierungsgrund",
                your_appointment_has_been_cancelled: "Ihr Termin wurde storniert",
                more: "mehr",
                weniger: "weniger",
                your_meeting_has_been_rescheduled: "Ihr Termin wurde neu geplant",
                your_meeting_has_been_scheduled: "Ihr Termin wurde geplant",
                am: "Vormittag",
                pm: "Nachmittag",
                hr: "h",
                minutes: "Minuten",
                timezone: "Zeitzone",
                january: "Januar",
                february: "Februar",
                march: "M\xE4rz",
                april: "April",
                may: "Mai",
                june: "Juni",
                july: "Juli",
                august: "August",
                september: "September",
                october: "Oktober",
                november: "November",
                december: "Dezember",
                sunday: "Sonntag",
                monday: "Montag",
                tuesday: "Dienstag",
                wednesday: "Mittwoch",
                thursday: "Donnerstag",
                friday: "Freitag",
                saturday: "Samstag"
            },
            "pt-br": {
                add_to_google_calendar: "Adicionar ao Google Calendar",
                add_to_outlook_ical: "Adicionar ao Outlook / iCal",
                additional_information: "Informa\xE7\xF5es adicionais",
                anything_youd_like_to_know_before_appointment: "H\xE1 alguma coisa que voc\xEA gostaria que soubessemos antes do seu agendamento?",
                appointment_request_form: "Fomul\xE1rio de solicita\xE7\xE3o de agendamento",
                appointment_requested: "Agendamento solicitado",
                available_starting_times_for: "Hor\xE1rios de in\xEDcio dispon\xEDveis para",
                book_appointment: "Agendar",
                cancel: "Cancelar",
                cannot_find_calendar: "N\xE3o foi poss\xEDvel encontrar o calend\xE1rio.",
                contact_you_shortly_with_contact_method: "Entraremos em contato brevemente para confirmar sua solicita\xE7\xE3o. Favor ligar para {contactMethod} se houver alguma pergunta.",
                date_of_birth: "Data de nascimento",
                email: "E-mail",
                first_name: "Primeiro nome",
                last_name: "Sobrenome",
                load_more: "Carregar mais",
                location: "Localiza\xE7\xE3o",
                location_is_required: "Localiza\xE7\xE3o necess\xE1ria",
                no_calendar_event_found: "Nenhum calend\xE1rio foi encontrado",
                no_slot_available_this_month: "N\xE3o h\xE1 hor\xE1rios dispon\xEDveis para este m\xEAs.",
                no_slots_available: "Nenhum hor\xE1rio dispon\xEDvel",
                phone: "Telefone",
                pick_a_date_and_time: "Escolha uma data e um hor\xE1rio",
                please_choose_at_least_one_option: "Por favor escolha somente uma op\xE7\xE3o",
                reschedule_current_time: "Remarcar (Hor\xE1rio atual: {time})",
                search: "Busca",
                secure_payment: "Pagamento seguro",
                select_date: "Selecionar esta data",
                select_time: "Selecionar hor\xE1rio",
                skip: "Pular",
                submit: "Enviar",
                thank_you: "Obrigado",
                thank_you_for_your_appointment_request: "Obrigado pela sua solicita\xE7\xE3o de agendamento. ",
                this_field_is_required: "Esse campo \xE9 obrigat\xF3rio.",
                go_to_next_month: "Ir para o pr\xF3ximo m\xEAs",
                next_month: "Pr\xF3ximo m\xEAs",
                no_timezone_found: "Nenhum fuso hor\xE1rio foi encontrado!",
                previous_month: "M\xEAs anterior",
                payment: "Pagamento",
                unable_to_fetch_calendar: "N\xE3o foi poss\xEDvel encontrar o calend\xE1rio",
                schedule_meeting: "Agendar Hor\xE1rio",
                cancellation_reason: "Motivo de Cancelamento",
                cancel_appointment: "Cancela o agendamento",
                am: "Manh\xE3",
                pm: "Tarde",
                hr: "Hr",
                minutes: "Minutos",
                january: "Janeiro",
                february: "Fevereiro",
                march: "Mar\xE7o",
                april: "Abril",
                may: "Maio",
                june: "Junho",
                july: "Julho",
                august: "Agosto",
                september: "Setembro",
                october: "Outubro",
                november: "Novembro",
                december: "Dezembro",
                sunday: "Domingo",
                monday: "Segunda-feira",
                tuesday: "Ter\xE7a-feira",
                wednesday: "Quarta-feira",
                thursday: "Quinta-feira",
                friday: "Sexta-feira",
                saturday: "S\xE1bado",
                timezone: "Fuso hor\xE1rio"
            },
            fr: {
                add_to_google_calendar: "Ajouter au calendrier Google ",
                add_to_outlook_ical: "Ajouter \xE0 Outlook / ical",
                additional_information: "Information suppl\xE9mentaire",
                anything_youd_like_to_know_before_appointment: "Aimeriez vous nous informer de quelque chose avant notre rendez-vous ",
                appointment_request_form: "Formulaire de demande de rendez-vous",
                appointment_requested: "Demande de rendez-vous",
                available_starting_times_for: "Heures de d\xE9part",
                book_appointment: "Prendre un rendez",
                cancel: "Annulez",
                cannot_find_calendar: "Impossible de trouver le calendrier.",
                contact_you_shortly_with_contact_method: "Nous vous contacterons prochainement pour confirmer votre demande. Si vous avez des questions, veuillez contacter notre bureau au {contactMethod}.",
                date_of_birth: "Date de naissance",
                email: "Email",
                first_name: "Pr\xE9nom",
                last_name: "Nom de famille",
                load_more: "Charger plus",
                location: "Lieu",
                location_is_required: "La localisation obligatoire.",
                no_calendar_event_found: "Aucun \xE9v\xE9nement dans le calendrier n'a \xE9t\xE9 trouv\xE9",
                no_slot_available_this_month: "Aucun cr\xE9neau disponible ce mois-ci.",
                no_slots_available: "Pas de cr\xE9neaux horaires disponibles",
                phone: "T\xE9l\xE9phone",
                pick_a_date_and_time: "Choisissez une date et une heure",
                please_choose_at_least_one_option: "Veuillez choisir au moins une option",
                reschedule_current_time: "Reprogrammer RDV (Heure actuelle : {time})",
                search: "Recherchez",
                secure_payment: "Paiement S\xE9curis\xE9",
                select_date: "S\xE9lectionnez une date",
                select_time: "S\xE9lectionnez l'heure",
                skip: "Passez",
                submit: "Envoyez",
                thank_you: "Merci",
                thank_you_for_your_appointment_request: "Merci pour votre demande de rendez-vous",
                this_field_is_required: "Ce champ est obligatoire.",
                go_to_next_month: "Aller au mois prochain",
                next_month: "Mois prochain",
                no_timezone_found: "Pas de fuseau horaire trouv\xE9 !",
                previous_month: "Mois pr\xE9c\xE9dent",
                payment: "Paiement",
                unable_to_fetch_calendar: "Impossible de trouver le calendrier",
                schedule_meeting: "Schedule Meeting",
                am: "Matin",
                pm: "Apr\xE8s-midi",
                hr: "h",
                minutes: "Minutes",
                january: "Janvier",
                february: "F\xE9vrier",
                march: "Mars",
                april: "Avril",
                may: "Mai",
                june: "Juin",
                july: "Juillet",
                august: "Ao\xFBt",
                september: "Septembre",
                october: "Octobre",
                november: "Novembre",
                december: "D\xE9cembre",
                sunday: "Dimanche",
                monday: "Lundi",
                tuesday: "Mardi",
                wednesday: "Mercredi",
                thursday: `Jeudi
`,
                friday: "Vendredi",
                saturday: "Samedi",
                timezone: "Fuseau horaire"
            },
            hu: {
                add_to_google_calendar: "Hozz\xE1adas a Google Napt\xE1rhoz",
                add_to_outlook_ical: "Hozz\xE1ad\xE1s Outlook / iCal napt\xE1rhoz",
                additional_information: "Tov\xE1bbi inform\xE1ci\xF3k",
                anything_youd_like_to_know_before_appointment: "Van b\xE1rmi egy\xE9bb amir\u0151l tudnunk kellene a tal\xE1lkoz\xF3nk el\xF6tt?",
                appointment_request_form: "Id\u0151pont Egyeztet\xE9s",
                appointment_requested: "Id\u0151pont Egyeztet\xE9s Elk\xFCldve",
                available_starting_times_for: "El\xE9rhet\u0151 Id\u0151pontok",
                book_appointment: "Id\u0151pont egyeztet\xE9s",
                cancel: "T\xF6rl\xE9s",
                cannot_find_calendar: "A napt\xE1r nem tal\xE1lhat\xF3",
                contact_you_shortly_with_contact_method: "Hamarosan visszaigazoljuk k\xE9r\xE9sedet. Ha b\xE1rmilyen k\xE9rd\xE9s mer\xFClne fel, h\xEDvd a k\xF6vetkez\u0151 sz\xE1mot: {contactMethod}",
                date_of_birth: "Sz\xFClet\xE9si d\xE1tum",
                email: "Email",
                first_name: "Keresztn\xE9v",
                last_name: "Vezet\xE9kn\xE9v",
                load_more: "Tov\xE1bbi Bet\xF6lt\xE9s",
                location: "Hely",
                location_is_required: "A hely megad\xE1sa k\xF6telez\u0151",
                no_calendar_event_found: "Napt\xE1r bejegyz\xE9s nem tal\xE1lhat\xF3",
                no_slot_available_this_month: "Nincs el\xE9rhet\u0151 id\u0151pont erre a h\xF3napra.",
                no_slots_available: "Nincsenek el\xE9rhet\u0151 id\u0151pont",
                phone: "Telefon",
                pick_a_date_and_time: "V\xE1lassz egy D\xE1tumot \xE9s Id\u0151pontot",
                please_choose_at_least_one_option: "K\xE9rlek, hogy v\xE1lassz legal\xE1bb egy lehet\u0151s\xE9get",
                reschedule_current_time: "\xC1t\xFCtemez\xE9s (A pillanatnyi id\u0151: {time})",
                search: "Keres\xE9s",
                secure_payment: "Biztons\xE1gos Fizet\xE9s",
                select_date: "V\xE1lassz D\xE1tumot",
                select_time: "V\xE1lassz Id\u0151pontot",
                skip: "Kihagy\xE1s",
                submit: "Elk\xFCld\xE9s",
                thank_you: "K\xF6sz\xF6n\xF6m",
                thank_you_for_your_appointment_request: "K\xF6sz\xF6n\xF6m az id\u0151pont egyeztet\xE9sed.",
                this_field_is_required: "Ez a mez\u0151 k\xF6telez\u0151.",
                go_to_next_month: "K\xF6vetkez\u0151 h\xF3napra ugr\xE1s",
                next_month: "K\xF6vetkez\u0151 h\xF3nap",
                no_timezone_found: "Az Id\u0151z\xF3na Nem Tal\xE1lhat\xF3!",
                previous_month: "El\u0151z\u0151 h\xF3nap",
                payment: "Fizet\xE9s",
                unable_to_fetch_calendar: "Nincs el\xE9rhet\u0151 napt\xE1r",
                schedule_meeting: "Schedule Meeting",
                am: "D\xE9lel\xF6tt",
                pm: "D\xE9lut\xE1n",
                hr: "\xF3ra",
                minutes: "Perc",
                january: "Janu\xE1r",
                february: "Febru\xE1r",
                march: "M\xE1rcius",
                april: "\xC1prilis",
                may: "M\xE1jus",
                june: "J\xFAnius",
                july: "Julius",
                august: "Augusztus",
                september: "Szeptember",
                october: "Okt\xF3ber",
                november: "November",
                december: "December",
                sunday: "Vas\xE1rnap",
                monday: "H\xE9tf\u0151",
                tuesday: "Kedd",
                wednesday: "Szerda",
                thursday: "Cs\xFCt\xF6rt\xF6k",
                friday: "P\xE9ntek",
                saturday: "Szombat",
                timezone: "Id\u0151z\xF3na"
            },
            es: {
                add_to_google_calendar: "Agregar a Google Calendar",
                add_to_outlook_ical: "Agregar a Outlook / iCal",
                additional_information: "Informaci\xF3n Adicional",
                anything_youd_like_to_know_before_appointment: "\xBFHay algo que le gustar\xEDa que supi\xE9ramos antes de su cita?",
                appointment_request_form: "Formulario de solicitud de cita",
                appointment_requested: "Cita Solicitada",
                available_starting_times_for: "Horarios de inicio disponibles para",
                book_appointment: "Reservar una cita",
                cancel: "Cancelar",
                cannot_find_calendar: "No se encuentra el calendario.",
                contact_you_shortly_with_contact_method: "Nos pondremos en contacto con usted a la brevedad para confirmar su solicitud. Llame a nuestra oficina al {contactMethod} si tiene alguna pregunta.",
                date_of_birth: "Fecha de nacimiento",
                email: "Correo electr\xF3nico",
                first_name: "Primer nombre",
                last_name: "Apellido",
                load_more: "Cargar m\xE1s",
                location: "Ubicaci\xF3n",
                location_is_required: "Se requiere ubicaci\xF3n.",
                no_calendar_event_found: "No se encontr\xF3 ning\xFAn evento de calendario.",
                no_slot_available_this_month: "No hay espacio disponible este mes.",
                no_slots_available: "No hay espacio disponible",
                phone: "Tel\xE9fono",
                pick_a_date_and_time: "Elige una fecha y hora",
                please_choose_at_least_one_option: "Por favor elija al menos una opci\xF3n",
                reschedule_current_time: "Reprogramar (hora actual: {hora})",
                search: "Buscar",
                secure_payment: "Pago seguro",
                select_date: "Seleccione fecha",
                select_time: "Seleccione hora",
                skip: "Omitir",
                submit: "Someter",
                thank_you: "Gracias",
                thank_you_for_your_appointment_request: "Gracias por su solicitud de cita.",
                this_field_is_required: "Este campo es requerido.",
                go_to_next_month: "Ir al mes que viene",
                next_month: "Pr\xF3ximo mes",
                no_timezone_found: "\xA1No se ha encontrado la zona horaria!",
                previous_month: "Mes anterior",
                payment: "Pago",
                unable_to_fetch_calendar: "No se puede encontrar el calendario.",
                schedule_meeting: "Programar reuni\xF3n",
                am: "AM",
                pm: "PM",
                hr: "Hora",
                minutes: "Minutos",
                january: "Enero",
                february: "Febrero",
                march: "Marzo",
                april: "Abril",
                may: "Mayo",
                june: "Junio",
                july: "Julio",
                august: "Agosto",
                september: "Septiembre",
                october: "Octubre",
                november: "Noviembre",
                december: "Diciembre",
                sunday: "Domingo",
                monday: "Lunes",
                tuesday: "Martes",
                wednesday: "Mi\xE9rcoles",
                thursday: "Jueves",
                friday: "Viernes",
                saturday: "S\xE1bado",
                timezone: "Zona horaria"
            },
            nl: {
                add_to_google_calendar: "Toevoegen aan Google Calendar",
                add_to_outlook_ical: "Toevoegen aan Outlook / iCal",
                additional_information: "Extra Informatie",
                anything_youd_like_to_know_before_appointment: "Is er iets dat u ons voor uw afspraak wilt laten weten?",
                appointment_request_form: "Aanvraagformulier afspraak",
                appointment_requested: "Afspraak aangevraagd",
                available_starting_times_for: "Beschikbare aanvangstijden voor",
                book_appointment: "Maak een afspraak",
                cancel: "Annuleren",
                cannot_find_calendar: "Kan de kalendar niet vinden",
                contact_you_shortly_with_contact_method: "We nemen spoedig contact met u op om uw verzoek te bevestigen. Bel ons kantoor op {contactMethod} als u vragen heeft.",
                date_of_birth: "Geboortedatum",
                email: "Email",
                first_name: "Voornaam",
                last_name: "Achternaam",
                load_more: "Meer laden",
                location: "Plaatsnaam",
                location_is_required: "Plaatsnaam is verplicht",
                no_calendar_event_found: "Geen kalendar afspraak gevonden",
                no_slot_available_this_month: "Deze maand geen slot beschikbaar",
                no_slots_available: "Geen slot beschikbaar",
                phone: "Telefoon",
                pick_a_date_and_time: "Kies een datum en tijd",
                please_choose_at_least_one_option: "Kies ten minste \xE9\xE9n optie",
                reschedule_current_time: "Afspraak verzetten (huidige tijd: {time})",
                search: "Zoek",
                secure_payment: "Veilige betaling",
                select_date: "Kies datum",
                select_time: "Kies tijd",
                skip: "Overslaan",
                submit: "Indienen",
                thank_you: "Bedankt",
                thank_you_for_your_appointment_request: "Bedankt voor uw afspraak verzoek",
                this_field_is_required: "Dit veld is verplicht",
                go_to_next_month: "Ga naar de volgende maand",
                next_month: "Volgende maand",
                no_timezone_found: "Geen timezone gevonden!",
                previous_month: "Vorige maand",
                payment: "Betaling",
                unable_to_fetch_calendar: "Niet mogelijk de kalender te vinden",
                schedule_meeting: "Schedule Meeting",
                am: "AM",
                pm: "PM",
                hr: "Uur",
                minutes: "Minuten",
                january: "Januari",
                february: "Februari",
                march: "Maart",
                april: "April",
                may: "Mei",
                june: "Juni",
                july: "Juli",
                august: "Augustus",
                september: "September",
                october: "Oktober",
                november: "November",
                december: "December",
                sunday: "Zondag",
                monday: "Maandag",
                tuesday: "Dinsdag",
                wednesday: "Woensdag",
                thursday: "Donderdag",
                friday: "Vrijdag",
                saturday: "Zaterdag",
                timezone: "Tijdzone"
            },
            it: {
                add_to_google_calendar: "Aggiungi a Google Calendar",
                add_to_outlook_ical: "Aggiungi ad Outlook/iCal",
                additional_information: "Informazioni aggiuntive",
                anything_youd_like_to_know_before_appointment: "C'\xE8 qualcosa'altro che vorresti farci sapere prima del tuo appuntamento?",
                appointment_request_form: "Modulo di richiesta appuntamento",
                appointment_requested: "Appuntamento richiesto",
                available_starting_times_for: "Orari disponibili per",
                book_appointment: "Clicca qui per fissare l'appuntamento",
                cancel: "Cancella",
                cannot_find_calendar: "Calendario non trovato.",
                contact_you_shortly_with_contact_method: "Ti contatteremo a breve per confermare la tua richiesta. Per favore chiamaci al {contactMethod} se hai qualche domanda.",
                date_of_birth: "Data di nascita",
                email: "Email",
                first_name: "Nome",
                last_name: "Cognome",
                load_more: "Carica altri orari",
                location: "Location",
                location_is_required: `\xC8 richiesta una location
`,
                no_calendar_event_found: "Nessun evento trovato in calendario",
                no_slot_available_this_month: "Nessun orario disponibile questo mese",
                no_slots_available: "Nessun orario disponibile",
                phone: "Telefono",
                pick_a_date_and_time: "Scegli una data e un orario",
                please_choose_at_least_one_option: "Per favore scegli almeno una opzione",
                reschedule_current_time: `Cambia prenotazione (tempo attuale:  {time})
`,
                search: "Cerca",
                secure_payment: "Pagamento sicuro",
                select_date: "Scegli questa data",
                select_time: "Seleziona l'orario",
                skip: "Salta",
                submit: "Invia",
                thank_you: "Grazie",
                thank_you_for_your_appointment_request: "Grazie per la sua richiesta di appuntamento",
                this_field_is_required: "Questo campo \xE8 obbligatorio",
                go_to_next_month: "Vai al mese successivo",
                next_month: "Prossimo mese",
                no_timezone_found: "Nessun fuso orario trovato",
                previous_month: "Mese precedente",
                payment: "Pagamento",
                unable_to_fetch_calendar: "Impossibile trovare il caledario",
                schedule_meeting: "Schedule Meeting",
                am: "AM",
                pm: "PM",
                hr: "Ore",
                minutes: "Minuti",
                january: "Gennaio",
                february: "Febbraio",
                march: "Marzo",
                april: "Aprile",
                may: `Maggio
`,
                june: "Giugno",
                july: "Luglio",
                august: "Agosto",
                september: "Settembre",
                october: "Ottobre",
                november: "Novembre",
                december: "Dicembre",
                sunday: "Domenica",
                monday: "Luned\xEC",
                tuesday: "Marted\xEC",
                wednesday: "Mercoled\xEC",
                thursday: "Gioved\xEC",
                friday: "Venerd\xEC",
                saturday: "Sabato",
                timezone: "Fuso orario"
            },
            pl: {
                add_to_google_calendar: "Dodaj do kalendarza Google",
                add_to_outlook_ical: "Dodaj do Outlooka / iCal",
                additional_information: "Dodatkowe informacje",
                anything_youd_like_to_know_before_appointment: "Czy jest co\u015B, co chcia\u0142(a)by Pan(i), aby\u015Bmy wiedzieli przed wizyt\u0105?",
                appointment_request_form: "Formularz um\xF3wienia si\u0119 na wizyt\u0119",
                appointment_requested: "Um\xF3wiono wizyt\u0119",
                available_starting_times_for: "Dost\u0119pne godziny rozpocz\u0119cia dla",
                book_appointment: "Um\xF3w si\u0119 na wizyt\u0119",
                cancel: "Skasuj",
                cannot_find_calendar: "Nie mo\u017Cna odnale\u017A\u0107 kalendarza",
                contact_you_shortly_with_contact_method: "Skontaktujemy si\u0119 z Tob\u0105 wkr\xF3tce, aby potwierdzi\u0107 Twoj\u0105 pro\u015Bb\u0119.  Zadzwo\u0144 do naszego biura na {contactMethod}, je\u015Bli masz jakiekolwiek pytania.",
                date_of_birth: "Data urodzenia",
                email: "Email",
                first_name: "Imi\u0119",
                go_to_next_month: "Przejd\u017A do nast\u0119pnego miesi\u0105ca",
                last_name: "Nazwisko",
                load_more: "Zobacz wi\u0119cej",
                location_is_required: "Lokalizacja jest wymagana",
                location: "Lokalizacja",
                next_month: "Nast\u0119pny miesi\u0105c",
                no_calendar_event_found: "Nie znaleziono wydarzenia w kalendarzu",
                no_slot_available_this_month: "Brak miejsc w tym miesi\u0105cu",
                no_slots_available: "Brak miejsc",
                no_timezone_found: "Nie znaleziono strefy czasowej",
                payment: "P\u0142atno\u015B\u0107",
                phone: "Telefon",
                pick_a_date_and_time: "Wybierz dat\u0119 i godzin\u0119",
                please_choose_at_least_one_option: "Prosz\u0119 wybra\u0107 przynajmniej jedn\u0105 opcj\u0119",
                previous_month: "Poprzedni miesi\u0105c",
                reschedule_current_time: "Zmie\u0144 termin (Current time: {time})",
                search: "Szukaj",
                secure_payment: "Bezpieczna p\u0142atno\u015B\u0107",
                select_date: "Wybierz dat\u0119",
                select_time: "Wybierz godzin\u0119",
                skip: "Dalej",
                submit: "Wy\u015Blij",
                thank_you_for_your_appointment_request: "Dzi\u0119kujemy za um\xF3wienie si\u0119 na wizyt\u0119.",
                thank_you: "Dzi\u0119kujemy",
                this_field_is_required: "To pole jest wymagane",
                unable_to_fetch_calendar: "Nie mo\u017Cna odnale\u017A\u0107 kalendarza",
                schedule_meeting: "Schedule Meeting",
                am: "AM",
                april: "Kwiecie\u0144",
                august: "Sierpie\u0144",
                december: "Grudzie\u0144",
                february: "Luty",
                hr: "Godzina",
                friday: "Pi\u0105tek",
                january: "Stycze\u0144",
                july: "Lipiec",
                june: "Czerwiec",
                march: "Marzec",
                may: "Maj",
                minutes: "Minuty",
                monday: "Poniedzia\u0142ek",
                november: "Listopad",
                october: "Pa\u017Adziernik",
                saturday: "Sobota",
                pm: "PM",
                september: "Wrzesie\u0144",
                sunday: "Niedziela",
                thursday: "Czwartek",
                timezone: "Strefa czasowa",
                tuesday: "Wtorek",
                wednesday: "\u015Aroda"
            },
            pt: {
                add_to_google_calendar: "Adicionar no Google Calendar",
                add_to_outlook_ical: "Adicionar no Outlook / iCal",
                additional_information: "Informa\xE7\xF5es Adicionais",
                anything_youd_like_to_know_before_appointment: "Quer avisar algo a mais antes do seu Encontro com a Gente? Se sim, informe aqui:",
                appointment_request_form: "Formul\xE1rio de Agendamento",
                appointment_requested: "Hor\xE1rio Agendado",
                available_starting_times_for: "Hor\xE1rios Dispon\xEDveis",
                book_appointment: "Agendar Hor\xE1rio",
                cancel: "Cancelar",
                cannot_find_calendar: "Calend\xE1rio N\xE3o Encontrado.",
                contact_you_shortly_with_contact_method: "Entraremos em Contato em Breve para Confirmar sua Solicita\xE7\xE3o. Ligue para N\xF3s no {contactMethod} se Tiver Alguma D\xFAvida.",
                date_of_birth: "Data de Nascimento",
                email: "Email",
                first_name: "Nome",
                go_to_next_month: "Ver Pr\xF3ximo M\xEAs",
                last_name: "Sobrenome",
                load_more: "Carregar Mais",
                location: "Localiza\xE7\xE3o",
                location_is_required: "Localiza\xE7\xE3o \xE9 Obrigat\xF3ria.",
                next_month: " Pr\xF3ximo M\xEAs",
                no_calendar_event_found: "Nenhum Evento de Calend\xE1rio Encontrado",
                no_slot_available_this_month: "Nenhum Espa\xE7o Dispon\xEDvel esse M\xEAs.",
                no_slots_available: "Nenhum Espa\xE7o Dispon\xEDvel",
                no_timezone_found: "Nenhum Fuso Hor\xE1rio Encontrado!",
                payment: "Pagamento",
                phone: "Telefone",
                pick_a_date_and_time: "Escolha uma Data e Hor\xE1rio",
                please_choose_at_least_one_option: "Escolha pelo Menos uma Op\xE7\xE3o",
                previous_month: "M\xEAs Passado",
                reschedule_current_time: "Reagendar (Hor\xE1rio Atual: {time})",
                search: "Buscar",
                secure_payment: "Pagamento Seguro",
                select_date: "Selecionar Data",
                select_time: "Selecionar Hor\xE1rio",
                skip: "Pular",
                submit: "Enviar",
                thank_you: "Obrigado",
                thank_you_for_your_appointment_request: "Obrigado pelo seu Agendamento.",
                this_field_is_required: "Este Campo \xE9 Obrigat\xF3rio.",
                unable_to_fetch_calendar: "N\xE3o \xE9 Poss\xEDvel Encontrar o Calend\xE1rio",
                unable_to_schedule_appointment: "N\xE3o foi Poss\xEDvel Agendar seu Hor\xE1rio. Por favor, Tente Novamente.",
                DURATION: "DURA\xC7\xC3O",
                DATEANDTIME: "DATA E HOR\xC1RIO",
                type_here_to_search_timezone: "Digite Aqui para Pesquisar Fuso Hor\xE1rio",
                OLD: "ANTIGO",
                continue: "Continuar",
                fetching_slots: "Encontrar Espa\xE7os Dispon\xEDveis...",
                fetching_recurring_slots: "Encontrar espa\xE7os recorrentes...",
                schedule_meeting: "Agendar Hor\xE1rio",
                scheduling: "Agendando...",
                reschedule: "Reagendar",
                rescheduling: "Reagendando...",
                cancel_appointment: "Cancelar Agendamento",
                cancelling: "Cancelando...",
                back: "Voltar",
                enter_your_information: "Digite suas Informa\xE7\xF5es",
                finding_open_available_slots: "Procurando por Espa\xE7os Dispon\xEDveis...",
                no_slots_available_in: "Nenhum Espa\xE7o Dispon\xEDvel em",
                select_a_date: "Selecione a Data",
                choose_time_slot: "Escolha o Intervalo de Tempo",
                select_a_date_and_time: "Selecione Data e Hor\xE1rio",
                cancellation_reason: "Motivo de Cancelamento",
                your_appointment_has_been_cancelled: "Seu Agendamento foi Cancelado.",
                more: "Mais...",
                less: "Menos",
                your_meeting_has_been_rescheduled: "Seu Hor\xE1rio foi Reagendado",
                your_meeting_has_been_scheduled: "Seu Hor\xE1rio foi Agendado"
            },
            availableLocales: ["en", "da", "de", "pt-br", "fr", "hu", "es", "nl", "it", "pl", "pt"]
        }
    }),
    Oi = {},
    sy = e => Object.keys(e).length === 0,
    ay = cr(async e => {
        const {
            vueApp: t
        } = e, n = await oy();
        sy(Oi) || (n.messages = Oi);
        const r = K_({
            legacy: !1,
            globalInjection: !0,
            locale: "en",
            ...n
        });
        t.use(r)
    });

function iy(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            var r = e.get(t);
            r ? r.push(n) : e.set(t, [n])
        },
        off: function(t, n) {
            var r = e.get(t);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, n) {
            var r = e.get(t);
            r && r.slice().map(function(o) {
                o(n)
            }), (r = e.get("*")) && r.slice().map(function(o) {
                o(t, n)
            })
        }
    }
}
const ko = iy(),
    ly = cr(e => e.provide("bus", {
        $on: ko.on,
        $off: ko.off,
        $emit: ko.emit
    })),
    cy = [Wm, Dp, Kg, ay, ly],
    uy = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }),
    fy = (e, t) => {
        var o;
        const n = t.route.matched.find(s => {
                var a;
                return ((a = s.components) == null ? void 0 : a.default) === t.Component.type
            }),
            r = (o = e != null ? e : n == null ? void 0 : n.meta.key) != null ? o : n && uy(t.route, n);
        return typeof r == "function" ? r(t.route) : r
    },
    dy = (e, t) => ({
        default: () => e ? Ke(qf, e === !0 ? {} : e, t) : t
    }),
    hy = Pt({
        setup(e, {
            slots: t
        }) {
            return () => {
                var n;
                return (n = t.default) == null ? void 0 : n.call(t)
            }
        }
    }),
    ns = (e, t, n) => ({
        default: () => t ? Ke(e, t === !0 ? {} : t, n) : Ke(hy, {}, n)
    }),
    my = Pt({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t
        }) {
            const n = Qe();
            return () => Ke(cu, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: r => {
                    var l, c, u, d;
                    if (!r.Component) return;
                    const o = fy(e.pageKey, r),
                        s = n.deferHydration(),
                        a = !!((c = (l = e.transition) != null ? l : r.route.meta.pageTransition) != null ? c : Bo),
                        i = a && gy([e.transition, r.route.meta.pageTransition, Bo, {
                            onAfterLeave: () => {
                                n.callHook("page:transition:finish", r.Component)
                            }
                        }].filter(Boolean));
                    return ns(Kr, a && i, dy((d = (u = e.keepalive) != null ? u : r.route.meta.keepalive) != null ? d : Np, Ke(Zl, {
                        onPending: () => n.callHook("page:start", r.Component),
                        onResolve: () => {
                            Mn(() => n.callHook("page:finish", r.Component).finally(s))
                        }
                    }, {
                        default: () => Ke(_y, {
                            key: o,
                            routeProps: r,
                            pageKey: o,
                            hasTransition: a
                        })
                    }))).default()
                }
            })
        }
    });

function py(e) {
    return Array.isArray(e) ? e : e ? [e] : []
}

function gy(e) {
    const t = e.map(n => ({ ...n,
        onAfterLeave: py(n.onAfterLeave)
    }));
    return jm(...t)
}
const _y = Pt({
        props: ["routeProps", "pageKey", "hasTransition"],
        setup(e) {
            const t = e.pageKey,
                n = e.routeProps.route,
                r = {};
            for (const o in e.routeProps.route) r[o] = pe(() => t === e.pageKey ? e.routeProps.route[o] : n[o]);
            return vn("_route", bt(r)), () => Ke(e.routeProps.Component)
        }
    }),
    Su = {
        calendar: () => me(() =>
            import ("./calendar.5e9f62cc.js"), ["./calendar.5e9f62cc.js", "./composables.b8b929aa.js", "./calendar.01ef8bd1.css"],
            import.meta.url).then(e => e.default || e),
        default: () => me(() =>
            import ("./default.665886f0.js"), ["./default.665886f0.js", "./composables.b8b929aa.js", "./index.bb6f8f81.js", "./default.fcfe2a1b.css"],
            import.meta.url).then(e => e.default || e),
        form: () => me(() =>
            import ("./form.8d27aa8b.js"), ["./form.8d27aa8b.js", "./composables.b8b929aa.js", "./HLConst.ac6e57fd.js"],
            import.meta.url).then(e => e.default || e)
    },
    yy = Pt({
        props: {
            name: String
        },
        async setup(e, t) {
            const n = await Su[e.name]().then(r => r.default || r);
            return () => Ke(n, {}, t.slots)
        }
    }),
    by = Pt({
        props: {
            name: {
                type: [String, Boolean, Object],
                default: null
            }
        },
        setup(e, t) {
            const n = $e("_route"),
                r = n === Wc() ? Ug() : n,
                o = pe(() => {
                    var s, a;
                    return (a = (s = Ye(e.name)) != null ? s : r.meta.layout) != null ? a : "default"
                });
            return () => {
                var i;
                const s = o.value && o.value in Su,
                    a = (i = r.meta.layoutTransition) != null ? i : Mp;
                return ns(Kr, s && a, {
                    default: () => ns(yy, s && {
                        key: o.value,
                        name: o.value,
                        hasTransition: void 0
                    }, t.slots).default()
                }).default()
            }
        }
    }),
    vy = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, o] of t) n[r] = o;
        return n
    },
    Ey = {};

function ky(e, t) {
    const n = my,
        r = by;
    return nn(), En(r, null, {
        default: bs(() => [Te(n)]),
        _: 1
    })
}
const wy = vy(Ey, [
        ["render", ky]
    ]),
    Ii = {
        __name: "nuxt-root",
        setup(e) {
            const t = Vf(() => me(() =>
                    import ("./error-component.62f0de32.js"), ["./error-component.62f0de32.js", "./error-component.8822984d.css"],
                    import.meta.url).then(s => s.default || s)),
                n = Qe(),
                r = n.deferHydration();
            vn("_route", Wc()), n.hooks.callHookWith(s => s.map(a => a()), "vue:setup");
            const o = Jr();
            return ic((s, a, i) => {
                n.hooks.callHook("vue:error", s, a, i).catch(l => console.error("[nuxt] Error in `vue:error` hook", l)), Tm(s) && (s.fatal || s.unhandled) && Ht(n, Wn, [s])
            }), (s, a) => (nn(), En(Zl, {
                onResolve: Ye(r)
            }, {
                default: bs(() => [Ye(o) ? (nn(), En(Ye(t), {
                    key: 0,
                    error: Ye(o)
                }, null, 8, ["error"])) : (nn(), En(Ye(wy), {
                    key: 1
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
globalThis.$fetch || (globalThis.$fetch = em.create({
    baseURL: nm()
}));
let Si;
const Ty = gm(cy);
Si = async function() {
    var o;
    const n = Boolean((o = window.__NUXT__) == null ? void 0 : o.serverRendered) ? fh(Ii) : uh(Ii),
        r = hm({
            vueApp: n
        });
    try {
        await pm(r, Ty)
    } catch (s) {
        await r.callHook("app:error", s), r.payload.error = r.payload.error || s
    }
    try {
        await r.hooks.callHook("app:created", n), await r.hooks.callHook("app:beforeMount", n), n.mount("#" + Fp), await r.hooks.callHook("app:mounted", n), await Mn()
    } catch (s) {
        await r.callHook("app:error", s), r.payload.error = r.payload.error || s
    }
}, Si().catch(e => {
    console.error("Error while mounting app:", e)
});
export {
    Iy as $, lr as A, jy as B, Ug as C, xy as D, _m as E, Ve as F, Wc as G, Dy as H, Wn as I, Ct as J, Wo as K, Wy as L, Ss as M, sc as N, it as O, gh as P, Cm as Q, bt as R, Bs as S, wc as T, Aa as U, Kr as V, Ny as W, Ls as X, Yf as Y, rh as Z, vy as _, nn as a, Ly as a0, Uy as a1, Oe as a2, nh as a3, Hy as a4, Ke as a5, xc as a6, th as a7, ac as a8, kc as b, My as c, Pt as d, En as e, pe as f, Ye as g, Te as h, ss as i, Fy as j, bs as k, Vf as l, me as m, os as n, ir as o, Mn as p, Ry as q, De as r, Ay as s, Cy as t, Qe as u, zy as v, Py as w, Sy as x, Oy as y, ws as z
};