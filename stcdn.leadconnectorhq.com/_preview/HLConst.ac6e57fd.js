const a = "" + new URL("credit-card.4fc2ed35.svg",
        import.meta.url).href,
    e = "" + new URL("paypal.ed8f9f72.svg",
        import.meta.url).href,
    o = "" + new URL("other-card.2fa12702.svg",
        import.meta.url).href,
    r = {
        COLUMN: "c-column",
        HEADING: "c-heading",
        SUB_HEADING: "c-sub-heading",
        PARAGRAPH: "c-paragraph",
        BULLETLIST: "c-bullet-list"
    },
    i = {
        MINUTE_TIMER: "minute-timer"
    },
    n = {
        SUBSCRIPTION: "subscription",
        ONETIME: "oneTime"
    },
    E = {
        IFRAME_RESIZE: "https://storage.googleapis.com/builder-preview/iframe/iframeResizer.contentWindow.min.js",
        IFRAME_PIXEL: "https://storage.googleapis.com/builder-preview/iframe/pixel.js"
    },
    d = {
        base: {
            color: "#32325d",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    },
    l = "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/62beef4f9f43b0c53e585a8f.jpeg",
    t = "credit_card",
    s = "paypal",
    c = "others",
    p = [{
        tabName: "Credit card",
        icon: a,
        id: t
    }, {
        tabName: "PayPal",
        icon: e,
        id: s
    }, {
        tabName: "Other",
        icon: o,
        id: c
    }],
    T = "authorize-net",
    I = "stripe";
export {
    T as A, t as C, i as E, l as I, c as O, s as P, d as S, r as T, E as W, I as a, p as b, n as c
};