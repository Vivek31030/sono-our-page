var v = {
        exports: {}
    },
    d = {};
Object.defineProperty(d, "__esModule", {
    value: !0
});

function i(o) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? i = function(r) {
        return typeof r
    } : i = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, i(o)
}
var c = "https://js.stripe.com/v3",
    S = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    u = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    w = function() {
        for (var r = document.querySelectorAll('script[src^="'.concat(c, '"]')), e = 0; e < r.length; e++) {
            var t = r[e];
            if (!!S.test(t.src)) return t
        }
        return null
    },
    y = function(r) {
        var e = r && !r.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            t = document.createElement("script");
        t.src = "".concat(c).concat(e);
        var n = document.head || document.body;
        if (!n) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return n.appendChild(t), t
    },
    m = function(r, e) {
        !r || !r._registerWrapper || r._registerWrapper({
            name: "stripe-js",
            version: "1.29.0",
            startTime: e
        })
    },
    a = null,
    b = function(r) {
        return a !== null || (a = new Promise(function(e, t) {
            if (typeof window > "u") {
                e(null);
                return
            }
            if (window.Stripe && r && console.warn(u), window.Stripe) {
                e(window.Stripe);
                return
            }
            try {
                var n = w();
                n && r ? console.warn(u) : n || (n = y(r)), n.addEventListener("load", function() {
                    window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"))
                }), n.addEventListener("error", function() {
                    t(new Error("Failed to load Stripe.js"))
                })
            } catch (l) {
                t(l);
                return
            }
        })), a
    },
    g = function(r, e, t) {
        if (r === null) return null;
        var n = r.apply(void 0, e);
        return m(n, t), n
    },
    h = function(r) {
        var e = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(r), `
`);
        if (r === null || i(r) !== "object") throw new Error(e);
        if (Object.keys(r).length === 1 && typeof r.advancedFraudSignals == "boolean") return r;
        throw new Error(e)
    },
    s, p = !1,
    f = function() {
        for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
        p = !0;
        var n = Date.now();
        return b(s).then(function(l) {
            return g(l, e, n)
        })
    };
f.setLoadParameters = function(o) {
    if (p) throw new Error("You cannot change load parameters after calling loadStripe");
    s = h(o)
};
d.loadStripe = f;
(function(o) {
    o.exports = d
})(v);
export {
    v as p
};