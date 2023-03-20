import {
    d as Ne,
    u as De,
    r as p,
    f as Le,
    o as Ce,
    a as m,
    c as f,
    i as x,
    b as g,
    j as P,
    t as A,
    g as T,
    w as ue,
    v as de,
    h as Ae,
    e as me,
    F as Fe,
    l as ye,
    m as fe,
    p as Ue,
    _ as $e
} from "./entry.c9829b92.js";
import {
    u as _
} from "./index.6e35e14c.js";
import {
    m as H,
    F as I,
    P as Be,
    Q as pe,
    w as ve
} from "./helpers.3509abab.js";
import {
    _ as Me
} from "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js";
import {
    a as Ve,
    u as qe,
    S as u,
    E as O
} from "./index.35560cc3.js";
import {
    f as He
} from "./funnel_event_helper.bd666bbb.js";
import {
    b as z,
    g as G,
    d as J,
    a as ze
} from "./Attributions.b54b0d68.js";
import {
    c as Ge,
    O as Je,
    P as We
} from "./orderform_helpers.85a2dff8.js";
import {
    p as Ke
} from "./pure.45d26873.js";
import {
    u as je
} from "./index.bb6f8f81.js";
import {
    A as Xe
} from "./HLConst.ac6e57fd.js";
import "./index.72547cc7.js";
import "./composables.b8b929aa.js";
import "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js";
const Qe = ye(() => fe(() =>
        import ("./NewPaypalSmartBtnSubscription.3adcec1e.js"), ["./NewPaypalSmartBtnSubscription.3adcec1e.js", "./paypal-js.67e0b930.js", "./index.bb6f8f81.js", "./entry.c9829b92.js", "./entry.45393610.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./NewPaypalSmartBtnSubscription.3a186e73.css"],
        import.meta.url).then(i => i.default || i)),
    Ye = ye(() => fe(() =>
        import ("./NewPaypalSmartBtnOrder.5c1ca21e.js"), ["./NewPaypalSmartBtnOrder.5c1ca21e.js", "./paypal-js.67e0b930.js", "./index.bb6f8f81.js", "./entry.c9829b92.js", "./entry.45393610.css", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./NewPaypalSmartBtnOrder.3a186e73.css"],
        import.meta.url).then(i => i.default || i)),
    Ze = ["href", "target"],
    et = {
        key: 0,
        class: "button-icon-start"
    },
    tt = {
        class: "main-heading-button"
    },
    at = {
        key: 1,
        class: "button-icon-end"
    },
    nt = {
        class: "sub-heading-button"
    },
    rt = ["disabled", "id"],
    ot = {
        key: 0,
        class: "button-icon-start"
    },
    st = {
        class: "main-heading-button"
    },
    it = {
        key: 1,
        class: "button-icon-end"
    },
    lt = {
        class: "sub-heading-button"
    },
    ct = {
        class: "btn-loader-position"
    },
    ut = {
        key: 2
    },
    dt = {
        inheritAttrs: !1
    },
    mt = Ne({ ...dt,
        __name: "Button",
        props: {
            element: {
                type: Object,
                required: !0
            },
            classStyles: {
                type: Array,
                required: !0
            }
        },
        setup(i) {
            var ne, re, oe, se, ie, le, ce;
            const s = i,
                o = je(),
                {
                    openPopup: _e
                } = Ve(),
                {
                    call: he,
                    createMembershipToken: W,
                    mailTo: be,
                    sms: ge,
                    goToNextFunnelStep: S,
                    openUrl: F,
                    getNextFunnelStepURL: Pe
                } = qe(),
                Ie = De(),
                {
                    $bus: K
                } = Ie;
            let R = (re = (ne = s.element.extra) == null ? void 0 : ne.text) == null ? void 0 : re.value;
            R = H(R);
            let N = (se = (oe = s.element.extra) == null ? void 0 : oe.subText) == null ? void 0 : se.value;
            N = H(N);
            const U = o.value.funnelId,
                j = o.value.stepId,
                $ = o.value.funnelPageId,
                d = o.value.locationId,
                v = (ce = (le = (ie = s.element.extra) == null ? void 0 : ie.productId) == null ? void 0 : le.value) == null ? void 0 : ce.id,
                X = p("avascript: void(0)"),
                c = p(!1),
                Q = p(!1),
                Y = p(""),
                Z = p(""),
                B = p(),
                M = p(!1),
                V = p(""),
                D = p(""),
                h = p(""),
                y = p(!1),
                ke = Le(() => {
                    var e;
                    return ((e = B.value) == null ? void 0 : e.price.type) === "recurring"
                });
            Ce(() => {
                const {
                    action: {
                        value: e
                    }
                } = s.element.extra;
                if (e === u.GO_TO_NEXT_STEP || e === u.SELL_PRODUCT) {
                    const a = o.value.funnelDomain,
                        t = o.value.funnelNextPageId;
                    a ? X.value = `https://${a}${o.value.funnelNextStep}` : t && (X.value = `https://${window.location.host}/v2/preview/${t}`)
                }(e === u.CLICK_TO_CALL || e === u.CLICK_TO_SMS || e === u.GO_TO_URL || e === u.GO_TO_STEP) && (Q.value = !0, Y.value = Re()), o.value.orderFormVersion === 2 && v && e === u.SELL_PRODUCT && we()
            });
            async function we() {
                var e, a, t;
                try {
                    const n = await I.findProductById({
                        productId: v
                    });
                    B.value = { ...n,
                        qty: 1,
                        amount: n.price.amount
                    }, D.value = (e = n == null ? void 0 : n.price) == null ? void 0 : e.currency
                } catch (n) {
                    const r = ((t = (a = n == null ? void 0 : n.response) == null ? void 0 : a.data) == null ? void 0 : t.message) || (n == null ? void 0 : n.message) || "Not able to fetch products!";
                    alert(r)
                }
            }
            async function xe() {
                o.value.videoExistsInPage && K.$emit("handle-redirect")
            }
            async function Se() {
                const {
                    action: e
                } = s.element.extra;
                switch (e.value) {
                    case "openPopup":
                        {
                            _e();
                            break
                        }
                    case "url":
                        {
                            const {
                                visitWebsite: a
                            } = s.element.extra;F(a.value);
                            break
                        }
                    case "hide-element":
                        {
                            const {
                                hideElements: a
                            } = s.element.extra;Be(a.value);
                            break
                        }
                    case "scroll-to-element":
                        {
                            const {
                                scrollToElement: a
                            } = s.element.extra;K.$emit("scroll-to-element", a.value);
                            break
                        }
                    case "go-to-next-funnel-step":
                        {
                            c.value = !0,
                            S();
                            break
                        }
                    case u.GO_TO_STEP:
                        {
                            c.value = !0,
                            S(s.element.extra.stepPath.value);
                            break
                        }
                    case "sell-product":
                        {
                            if (c.value = !0, o.value.orderFormVersion === 2)
                                if (_("provider").value === "pp") M.value = !0;
                                else {
                                    if (o.value.defaultPaymentProvider === Xe && o.value.merchantLoginId) {
                                        Te();
                                        return
                                    }
                                    const a = o.value.stripePublishableKey,
                                        t = o.value.stripeAccountId;
                                    if (a && t) V.value = await Ke.exports.loadStripe(a, {
                                        stripeAccount: t
                                    });
                                    else {
                                        alert("Stripe account not found!");
                                        return
                                    }
                                    Ee()
                                }
                            else Oe();
                            break
                        }
                    case "click-to-call":
                        {
                            const a = s.element.extra;he(a[O.PHONE_NUMBER].value);
                            break
                        }
                    case "click-to-sms":
                        {
                            const a = s.element.extra;ge(a[O.PHONE_NUMBER].value);
                            break
                        }
                    case "click-to-mail":
                        {
                            const a = s.element.extra;be(a[O.EMAIL_ADDRESS].value);
                            break
                        }
                    case u.GO_TO_MEMBERSHIP:
                        {
                            try {
                                let a;
                                const t = o.value.locationId,
                                    {
                                        ct: n,
                                        previewUrl: r
                                    } = JSON.parse(decodeURIComponent(_(`_mf_${t}`).value));
                                location.hostname === "localhost" ? a = `http://localhost:4040/library/?domain=${r}&token=${n}&location_id=${t}` : a = `${r}/library?&token=${n}&location_id=${t}`, F({
                                    url: a,
                                    newTab: !1
                                })
                            } catch {
                                alert("Sorry something went wrong.")
                            }
                            break
                        }
                    default:
                        console.error(`Invalid action type received: ${e.value}`)
                }
            }

            function L(e) {
                var a, t;
                try {
                    const n = e == null ? void 0 : e.membershipPurchase;
                    n != null && n.length && W(d, n[0].token);
                    const r = e == null ? void 0 : e.membershipToken;
                    r && W(d, r), Ue(() => {
                        He("track", "Upsell")
                    });
                    const {
                        saleAction: C,
                        stepPath: k,
                        visitWebsite: b
                    } = s.element.extra;
                    if (!C)
                        if (o.value.funnelNextStep) {
                            S();
                            return
                        } else throw new Error("Redirect not handled");
                    if (o.value.orderFormVersion === 2) {
                        const l = `_pl_${o.value.funnelId}`,
                            w = localStorage.getItem(l);
                        if (w) {
                            let E = JSON.parse(w);
                            E.push(B.value), ve(l, JSON.stringify(E))
                        }
                    } else {
                        const l = `_pl_v1_${o.value.funnelId}`,
                            w = localStorage.getItem(l);
                        if (w) {
                            let E = JSON.parse(w);
                            E.push((t = (a = s == null ? void 0 : s.element.extra) == null ? void 0 : a.productId) == null ? void 0 : t.value), ve(l, JSON.stringify(E))
                        }
                    }
                    switch (C.value) {
                        case "url":
                            if (b && b.value && b.value.url) {
                                F(b.value);
                                break
                            } else throw new Error("Redirect not handled");
                        case "step-path":
                            if (k && k.value) {
                                S(k.value);
                                break
                            } else throw new Error("Redirect not handled");
                        default:
                            if (o.value.funnelNextStep) {
                                S();
                                break
                            } else throw new Error("Redirect not handled")
                    }
                } catch {
                    alert(`Order successfully placed! 
 However, Something went wrong while displaying this webpage, please contact the seller.`), c.value = !1;
                    return
                }
            }

            function q() {
                const e = _("msgsndr_id").value,
                    a = _("am_id").value,
                    t = _("am_fingerprint").value;
                if (!e) throw new Error("Customer details not found");
                const n = {
                        eventType: "optin",
                        funnelId: U,
                        pageId: $,
                        stepId: j,
                        fingerprint: e
                    },
                    r = {
                        lead: !0,
                        eventData: z(),
                        source: "payment_button",
                        pageId: $,
                        funnelId: U,
                        sessionId: G(d),
                        sessionFingerprint: J(d),
                        funnelEventData: n,
                        fingerprint: e
                    };
                return {
                    locationId: d,
                    attribution: r,
                    selectedProducts: [v],
                    amId: a,
                    amFingerprint: t
                }
            }
            async function Ee() {
                try {
                    if (!v) throw new Error("No product Id found for initiating stripe payment");
                    const e = q(),
                        a = { ...e,
                            paymentProvider: "stripe"
                        };
                    let t;
                    if (t = await I.initiatePaymentForUpsell(a), t.authPaymentIntentId && t.authPaymentIntentClientSecret) {
                        const l = await V.value.confirmCardPayment(t.authPaymentIntentClientSecret, {
                            payment_method: t.paymentMethodId,
                            setup_future_usage: "off_session"
                        });
                        if (l.error) {
                            console.error("Failed to confirm card payment!", l.error), y.value = !1;
                            return
                        }
                        t = await I.initiatePaymentForUpsell({ ...a,
                            authPaymentIntentId: t.authPaymentIntentId
                        })
                    }
                    const r = t == null ? void 0 : t.invoices.find(l => l.isPrimary);
                    if (r != null && r.clientSecret) {
                        const l = await V.value.confirmCardPayment(r.clientSecret, {
                            payment_method: t.paymentMethodId,
                            setup_future_usage: "off_session"
                        });
                        if (l.error) {
                            console.error("Failed to confirm card payment!", l.error), l.error.message && alert(l.error.message);
                            return
                        }
                    }
                    const C = pe(),
                        k = { ...e,
                            submissionType: 3,
                            trackingId: C,
                            type: "upsell"
                        };
                    t != null && t.invoices && (k.stripe = {
                        invoices: t.invoices
                    });
                    const b = await I.verifyPayment(k);
                    console.log("verifyPaymentResponseData", b), await L(b)
                } catch (e) {
                    c.value = !1, console.error(e)
                }
            }
            async function Te() {
                if (!v) throw new Error("No product Id found for initiating stripe payment");
                y.value = !0;
                let e = localStorage.getItem("_ud");
                if (e && (e = JSON.parse(e)), e != null && e.customer_id) {
                    const a = await Ge({
                        contactId: e == null ? void 0 : e.customer_id,
                        domain: o.value.domain,
                        pageUrl: o.value.pageUrl,
                        locationId: d,
                        productPreviewList: [{
                            _id: v,
                            qty: 1
                        }],
                        store: o.value,
                        subType: Je.UPSELL
                    });
                    if (a != null && a.order._id) {
                        const t = {
                                altId: d,
                                altType: "location",
                                orderId: a == null ? void 0 : a.order._id,
                                attribution: {
                                    eventData: z(),
                                    sessionId: G(d),
                                    sessionFingerprint: J(d)
                                }
                            },
                            n = await We.authorizeNetOrderPayment(t);
                        console.log(n), y.value = !1, await L({
                            membershipPurchase: n.membershipPurchase,
                            membershipToken: n.membershipToken
                        })
                    }
                } else throw new Error("Contact details not found")
            }
            async function Oe() {
                if (!!v) try {
                    const e = ze(),
                        a = { ...z(),
                            fbEventId: e
                        },
                        t = G(d),
                        n = J(d),
                        r = await I.funnelPayment({
                            fingerprint: _("msgsndr_id").value,
                            productList: [v],
                            locationId: d,
                            funnelId: U,
                            stepId: j,
                            pageId: $,
                            source: "payment_button",
                            submissionType: 3,
                            eventData: a,
                            sessionId: t,
                            sessionFingerprint: n,
                            _mp: _("_mp").value
                        });
                    await L(r)
                } catch (e) {
                    console.log(e)
                } finally {
                    c.value = !0
                }
            }
            async function ee(e, a) {
                try {
                    if (!v) throw new Error("No product Id found for initiating paypal payment");
                    y.value = !0, h.value = "";
                    const n = { ...q(),
                            paymentProvider: "paypal"
                        },
                        r = await I.initiatePaymentForUpsell(n);
                    if (a.subscription && r.plan_id) return a.subscription.create(r);
                    if (a.order && r.id) return r.id
                } catch (t) {
                    console.log(t.message), h.value = t.message, y.value = !1
                }
            }
            async function te(e) {
                try {
                    if (!v) throw new Error("No product Id found for paypal payment");
                    y.value = !0, h.value = "";
                    const t = { ...q(),
                            submissionType: 3,
                            trackingId: pe(),
                            paypal: {
                                facilitatorAccessToken: e.facilitatorAccessToken,
                                orderId: e.orderID,
                                subscriptionId: e.subscriptionID,
                                payerId: e.payerID
                            },
                            type: "upsell"
                        },
                        n = await I.verifyPayment(t);
                    console.log("verifyPaymentResponseData", n);
                    const r = _("provider");
                    r.value = "pp", await L(n)
                } catch (a) {
                    console.error(a.message), h.value = a.message, y.value = !1
                }
            }

            function ae() {
                y.value = !1, h.value = "Transaction has been cancelled by the user!"
            }

            function Re() {
                let e = "";
                const {
                    action: {
                        value: a
                    }
                } = s.element.extra;
                switch (a) {
                    case u.CLICK_TO_CALL:
                        {
                            let t = s.element.extra[O.PHONE_NUMBER].value;t = t.replace("tel:", ""),
                            e = `tel:${t}`;
                            break
                        }
                    case u.CLICK_TO_SMS:
                        {
                            let t = s.element.extra[O.PHONE_NUMBER].value;t = t.replace("sms:", ""),
                            e = `sms:${t}`;
                            break
                        }
                    case u.GO_TO_URL:
                        {
                            const {
                                visitWebsite: {
                                    value: t
                                }
                            } = s.element.extra,
                            {
                                url: n,
                                newTab: r
                            } = t;e = n,
                            e = H(e),
                            e && !e.startsWith("#") && !/^https?:/.test(e) && (e = `https://${e}`),
                            Z.value = r ? "_blank" : "";
                            break
                        }
                    case u.GO_TO_STEP:
                        {
                            const t = s.element.extra.stepPath.value;e = Pe(t);
                            break
                        }
                }
                return e
            }
            return (e, a) => {
                const t = Qe,
                    n = Ye;
                return m(), f(Fe, null, [Q.value ? (m(), f("a", {
                    key: 0,
                    href: Y.value,
                    target: Z.value,
                    class: x(i.classStyles),
                    onClick: xe
                }, [g("span", {
                    class: x([{
                        "btn-visibility-none": c.value
                    }, "main-heading-group"])
                }, [i.element.extra.icon !== "" ? (m(), f("span", et)) : P("", !0), g("span", tt, A(T(R)), 1), i.element.extra.icon !== "" ? (m(), f("span", at)) : P("", !0)], 2), i.element.extra.subText && i.element.extra.subText.value ? (m(), f("span", {
                    key: 0,
                    class: x([{
                        "btn-visibility-none": c.value
                    }, "sub-heading-group text-xs font-sans"])
                }, [g("span", nt, A(T(N)), 1)], 2)) : P("", !0)], 10, Ze)) : ue((m(), f("button", {
                    key: 1,
                    disabled: c.value,
                    id: i.element.id,
                    class: x([{
                        "button-disabled": c.value
                    }, i.classStyles]),
                    onClick: Se
                }, [g("div", {
                    class: x([{
                        "btn-visibility-none": c.value
                    }, "main-heading-group"])
                }, [i.element.extra.icon !== "" ? (m(), f("div", ot)) : P("", !0), g("div", st, A(T(R)), 1), i.element.extra.icon !== "" ? (m(), f("div", it)) : P("", !0)], 2), i.element.extra.subText && i.element.extra.subText.value ? (m(), f("div", {
                    key: 0,
                    class: x([{
                        "btn-visibility-none": c.value
                    }, "text-xs font-sans"])
                }, [g("div", lt, A(T(N)), 1)], 2)) : P("", !0), ue(g("div", ct, [Ae(Me, {
                    loading: c.value,
                    color: "rgb(255, 255, 255)",
                    size: "30px"
                }, null, 8, ["loading"])], 512), [
                    [de, c.value]
                ])], 10, rt)), [
                    [de, !M.value]
                ]), M.value && D.value ? (m(), f("div", ut, [T(ke) ? (m(), me(t, {
                    key: 0,
                    initiatePaypalPayment: ee,
                    onApprovePaypalPayment: te,
                    onCancelPaypalPayment: ae,
                    paypalErrorMsg: h.value,
                    processingPayment: y.value,
                    currency: D.value
                }, null, 8, ["paypalErrorMsg", "processingPayment", "currency"])) : (m(), me(n, {
                    key: 1,
                    initiatePaypalPayment: ee,
                    onApprovePaypalPayment: te,
                    onCancelPaypalPayment: ae,
                    paypalErrorMsg: h.value,
                    processingPayment: y.value,
                    currency: D.value
                }, null, 8, ["paypalErrorMsg", "processingPayment", "currency"]))])) : P("", !0)], 64)
            }
        }
    });
const Et = $e(mt, [
    ["__scopeId", "data-v-a552f962"]
]);
export {
    Et as
    default
};