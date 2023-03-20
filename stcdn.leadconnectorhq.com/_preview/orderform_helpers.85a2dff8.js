import {
    E as O
} from "./entry.c9829b92.js";
import {
    u as c
} from "./index.6e35e14c.js";
import {
    $ as T
} from "./index.72547cc7.js";
import {
    Q as N
} from "./helpers.3509abab.js";
var r = (e => (e.FUNNEL = "funnel", e.WEBSITE = "website", e.CALENDAR = "calendar", e))(r || {}),
    R = (e => (e.ONE_STEP_ORDER_FORM = "one_step_order_form", e.TWO_STEP_ORDER_FORM = "two_step_order_form", e.UPSELL = "upsell", e))(R || {});
const b = () => ({
        channel: "APP",
        source: "WEB_USER",
        version: "2021-04-15"
    }),
    a = e => {
        const t = O().public;
        return T.create({
            baseURL: e || t.paymentsServiceUrl,
            headers: b()
        })
    },
    y = {
        fetchIsCouponApplicable: e => a()("payments/coupon/applicable", {
            params: e,
            method: "GET"
        }),
        verifyCoupon: e => a()("/payments/coupon/verify", {
            body: e,
            method: "POST"
        }),
        createOrder: e => a()("/payments/orders", {
            body: e,
            method: "POST"
        }),
        initiateStripePayment: e => a()("/payments/stripe/initiate", {
            body: e,
            method: "POST"
        }),
        verifyStripePayment: e => a()("/payments/stripe/verify", {
            body: e,
            method: "POST"
        }),
        authorizeNetOrderPayment: e => a()("/payments/authorize-net/order/pay", {
            body: e,
            method: "POST"
        })
    },
    q = {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    },
    A = e => {
        if (!e.length) return 0;
        let t = 0;
        return e.map(n => {
            t = (n.showNewPrice ? n.newPrice : n.amount * n.qty) + t
        }), t
    },
    W = async ({
        contactId: e,
        domain: t,
        pageUrl: n,
        locationId: d,
        productPreviewList: f,
        isCouponApplied: u,
        couponCode: g,
        couponSessionId: h,
        store: o,
        subType: P
    }) => {
        var l;
        try {
            const i = c("msgsndr_id").value,
                E = c("am_id").value,
                w = c("am_fingerprint").value,
                S = o.funnelName || "funnel";
            t || (t = window.location.hostname, n = window.location.pathname);
            const {
                funnelPageId: _,
                funnelId: v,
                stepId: I
            } = o, s = {
                altId: d,
                altType: "location",
                contactId: e,
                source: {
                    type: o.pageType === r.FUNNEL ? r.FUNNEL : r.WEBSITE,
                    subType: P,
                    id: v,
                    name: S,
                    meta: {
                        stepId: I,
                        pageId: _,
                        domain: t,
                        pageUrl: n,
                        affiliateManager: {
                            id: E,
                            fingerprint: w
                        }
                    }
                },
                products: f.map(p => ({
                    id: p._id,
                    qty: p.qty
                })),
                fingerprint: i,
                trackingId: N()
            };
            u && (s.couponCode = g, s.couponSessionId = h);
            const m = await y.createOrder(s);
            if (!((l = m.order) == null ? void 0 : l._id)) throw new Error("Something went wrong while creating order. Please try again later.");
            return m
        } catch (i) {
            return console.log(i), {
                error: !0
            }
        }
    },
    k = async ({
        orderId: e,
        locationId: t
    }) => {
        try {
            if (!e) throw new Error("Order id is required to initiate payment.");
            const n = {
                altId: t,
                altType: "location",
                orderId: e
            };
            return await y.initiateStripePayment(n)
        } catch (n) {
            return console.log(n), {
                error: !0
            }
        }
    };
export {
    R as O, y as P, W as c, A as g, k as i, q as s
};